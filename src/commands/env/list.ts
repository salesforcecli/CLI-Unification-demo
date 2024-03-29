/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { EOL } from 'os';
import { Flags, Interfaces } from '@oclif/core';
import { AnyJson } from '@salesforce/ts-types';
import { cli } from 'cli-ux';
import { bold, green, red } from 'chalk';
import { Messages } from '@salesforce/core';
import SfCommand from '../../sf-command';
import { Environment } from '../../configs/environments';

Messages.importMessagesDirectory(__dirname);
const messages = Messages.loadMessages('@salesforce/sf-demo', 'env.list');

type DisplayEnvironment = Environment & { alias: string };
export default class EnvList extends SfCommand {
  public static summary = messages.getMessage('summary');
  public static description = messages.getMessage('description');

  public static examples = messages.getMessages('examples');

  public static flags = {
    all: Flags.boolean({
      description: 'include enviornments not yet connected',
    }),
    // Hack beause typings has changed in oclif/core. cli-ux needs to be updated, maybe even include cli-ux in core if small enough
    ...(cli.table.flags() as unknown as Interfaces.FlagInput<unknown>),
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
    if (copy.type === 'org') {
      // Override values on the copy to look nicer in the CLI table.
      return Object.assign(copy, {
        name,
        username: bold(name),
        alias: this.aliases.getKeysByValue(name)[0] || '',
        status: copy.connected ? green(copy.status) : red(copy.status),
        orgId: copy.orgId || 'Unknown',
      });
    } else if (copy.type === 'compute') {
      // Override values on the copy to look nicer in the CLI table.
      const orgId = (this.environments.getContents()[copy.connectedOrg] as Environment).orgId;
      const orgAlias = this.aliases.getKeysByValue(copy.connectedOrg)[0];
      return Object.assign(copy, {
        name,
        alias: this.aliases.getKeysByValue(name)[0] || '',
        projectName: bold(name),
        orgAlias,
        orgId,
        status: copy.connected ? green(copy.status) : red(copy.status),
      });
    }
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
          connectedOrg: account.user,
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

    if (flags.all) {
      // Remove dups
      const remoteEnvironments = this.retrieveRemoteEnvironments().filter(
        (remoteEnv) => !connectedEnvironments.find((env) => env.name === remoteEnv.name)
      );
      allEnvironments = [...allEnvironments, ...remoteEnvironments];
    }

    if (allEnvironments.length === 0) {
      this.log('No environements connected. Use "sf login" or "sf env connect" to connected enviornments.');

      if (heroku) {
        this.log('Use "--all" to see available envionments.');
      }
      return;
    }

    const groupedByType = allEnvironments.reduce((x, y) => {
      const type = y.type || 'unknown';
      if (x[type]) {
        x[type] = [...x[type], y];
      } else {
        x[y.type] = [y];
      }
      return x;
    }, {} as Record<string, Environment[]>);

    const typeToHeader = {
      org: 'Salesforce Orgs',
      compute: 'Compute Environments',
      unknown: 'Unknown',
    };

    // Salesforce Orgs
    cli.table(
      groupedByType.org,
      {
        alias: {},
        username: {},
        orgId: { header: 'Org ID' },
        status: {},
      },
      {
        ...flags,
        title: typeToHeader.org,
      }
    );

    console.log(EOL);

    // Compute Environments
    cli.table(
      groupedByType.compute,
      {
        alias: {},
        projectName: { header: 'Project Name' },
        orgAlias: { header: 'Connected Org Alias' },
        orgId: { header: 'Connected Org ID' },
        status: {},
      },
      {
        ...flags,
        title: typeToHeader.compute,
      }
    );
    this.log();
    return { flags, args };
  }
}
