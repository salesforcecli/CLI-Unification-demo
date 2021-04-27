/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { Flags, Interfaces } from '@oclif/core';
import { AnyJson } from '@salesforce/ts-types';
import { cli } from 'cli-ux';
import { bold, green, red } from 'chalk';
import SfCommand from '../../sf-command';
import { Environment } from '../../configs/environments';

type DisplayEnvironment = Environment & { aliases: string };
export default class EnvList extends SfCommand {
  public static description = `list connected enviornment

  List connected environment including Salesforce orgs, heroku apps, and compute enviornments (functions). Use --remote to display all environments you have access to.
  `;

  public static examples = ['sf env list', 'sf env list --remote'];

  public static flags = {
    remote: Flags.boolean({
      description: 'include enviornments not yet connected',
    }),
    // Hack beause typings has changed in oclif/core. cli-ux needs to be updated, maybe even include cli-ux in core if small enough
    ...((cli.table.flags() as unknown) as Interfaces.FlagInput<unknown>),
  };

  public convertEnvironmentEntry(entry: [string, Environment]): DisplayEnvironment {
    return this.convertEnvironment(entry[0], entry[1]);
  }

  public convertEnvironment(
    name: string,
    environment: Environment,
    defaults: Partial<Environment> = {
      connected: false,
      status: 'Not Connected',
    }
  ): DisplayEnvironment {
    // First merge defaults and the environment in a copy.
    const copy = Object.assign({}, defaults, environment);

    // Override values on the copy to look nicer in the CLI table.
    return Object.assign(copy, {
      name: bold(name),
      aliases: this.aliases.getKeysByValue(name).join(', '),
      status: copy.connected ? green(copy.status) : red(copy.status),
    });
  }

  public retrieveRemoteEnvironments(): DisplayEnvironment[] {
    // No server interactions in this experiement, so use a fake remote env list stored locally in the auth file.
    return this.accounts.entries().reduce((list, [name, account]) => {
      const type = name === 'heroku' || name === 'functions' ? 'compute' : 'org';
      const accountEnvironments = account.environments.map((environmentsName) => {
        let context: string;

        if (name === 'heroku') {
          context = 'heroku app';
        } else if (name === 'functions') {
          context = 'functions';
        } else if (name === 'org') {
          if (environmentsName.includes('scratch')) {
            context = 'scratch';
          } else {
            context = 'sandbox';
          }
        } else {
          context = 'unknown';
        }

        return this.convertEnvironment(environmentsName, {
          name: environmentsName,
          type,
          context,
        });
      });

      return [...list, ...accountEnvironments];
    }, [] as DisplayEnvironment[]);
  }

  public async run(): Promise<AnyJson> {
    const { flags, args } = await this.parse(EnvList);

    const heroku = this.accounts.get('heroku');
    const connectedEnvironments = this.environments.entries().map((entry) => this.convertEnvironmentEntry(entry));

    let allEnvironments = connectedEnvironments;

    if (flags.remote) {
      // Remove dups
      const remoteEnvironments = this.retrieveRemoteEnvironments().filter(
        (remoteEnv) => !connectedEnvironments.find((env) => env.name === remoteEnv.name)
      );
      allEnvironments = [...allEnvironments, ...remoteEnvironments];
    }

    if (allEnvironments.length === 0) {
      this.log('No environements connected. Use "sf login" or "sf env connect" to connected enviornments.');

      if (heroku) {
        this.log('Use "--remote" to see available envionments.');
      }
      return;
    }

    cli.table(
      allEnvironments,
      {
        name: {},
        aliases: {},
        status: {},
        type: {},
        context: {},
      },
      {
        ...flags,
      }
    );

    return { flags, args };
  }
}
