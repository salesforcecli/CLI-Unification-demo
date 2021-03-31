/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { Flags, Command, Interfaces } from '@oclif/core';
import { AnyJson } from '@salesforce/ts-types';
import { cli } from 'cli-ux';
import { bold, green, red } from 'chalk';
import Accounts from '../../configs/account';
import Aliases from '../../configs/aliases';
import Enviornments, { Enviornment } from '../../configs/environments';

type DisplayEnvironment = Enviornment & { name: string; aliases: string };
export default class EnvList extends Command {
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

  private accounts: Accounts;
  private environments: Enviornments;
  private aliases: Aliases;

  public convertEnvironmentEntry(entry: [string, Enviornment]): DisplayEnvironment {
    return this.convertEnvironment(entry[0], entry[1]);
  }

  public convertEnvironment(
    name: string,
    environment: Enviornment,
    defaults: Enviornment = {
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
      const type = name === 'heroku' ? 'compute' : 'org';
      const accountEnvironments = account.environments.map((environmentsName) =>
        this.convertEnvironment(environmentsName, {
          type,
          context:
            name === 'heroku'
              ? environmentsName.includes('heroku')
                ? 'heroku app'
                : 'functions'
              : environmentsName.includes('scratch')
              ? 'scratch'
              : 'sandbox',
        })
      );

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

  protected async init(): Promise<void> {
    await super.init();

    this.accounts = await Accounts.create({});
    this.environments = await Enviornments.create({});
    this.aliases = await Aliases.create({});
  }
}
