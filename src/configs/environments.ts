/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { join } from 'path';
import { Dictionary, Optional } from '@salesforce/ts-types';
import { ConfigContents, ConfigFile, ConfigValue } from '@salesforce/core';
import { CLI_CONFIG_PATH } from './constants';
import Accounts from './account';
import Aliases from './aliases';

export type Environment = {
  name: string;
  aliases?: string[];
  connected?: boolean;
  status?: string;
  type?: 'org' | 'compute';
  context?: string;
  // Other auth information can be stored on the environement
  token?: string;
};

export type OrgEnvironment = {
  context?: 'scratch' | 'sandbox' | 'hub' | 'prod';
};

export type ComputeEnvironment = {
  context?: 'function' | 'heroku app';
};

export default class Environments extends ConfigFile<Dictionary<string>> {
  public static instance: Environments;

  public static getInstance(): Environments {
    if (!this.instance) {
      this.instance = new Environments({});
      this.instance.readSync();
    }
    return this.instance;
  }

  public static async retrieveRemote(ignoreConnected = true): Promise<Environment[]> {
    const accounts = Accounts.getInstance();
    const enviornments = Environments.getInstance();

    const remotes = accounts.entries().reduce((list, [accountName, account]) => {
      const type = accountName === 'heroku' ? 'compute' : 'org';
      return [
        ...list,
        ...account.environments.map((environmentName) => {
          const existingAccount = enviornments.get(environmentName);
          if (existingAccount) {
            return enviornments.get(environmentName);
          }
          return {
            name: environmentName,
            type,
            connected: false,
            status: 'Not Connected',
            context:
              accountName === 'heroku'
                ? environmentName.includes('heroku')
                  ? 'heroku app'
                  : 'functions'
                : environmentName.includes('scratch')
                ? 'scratch'
                : 'sandbox',
          } as Environment;
        }),
      ];
    }, [] as Environment[]);
    if (ignoreConnected) {
      return remotes.filter((env) => !env.connected);
    }
    return remotes;
  }

  public static async connect(environment: Environment): Promise<void> {
    const enviornments = Environments.getInstance();

    // Set status to connected
    environment.status = 'Connected';
    environment.connected = true;

    enviornments.set(environment.name, environment);
    await enviornments.write();
  }

  public static getFileName(): string {
    return 'environments.json';
  }

  public getPath(): string {
    return join(CLI_CONFIG_PATH, Environments.getFileName());
  }

  public get(name: string): Optional<Environment> {
    const environement = super.get(name) as Environment;
    if (environement) {
      environement.aliases = Aliases.getAliases(name);
    }
    return environement;
  }

  public set(name: string, value: Environment): Environment {
    return super.set(name, value) as Environment;
  }

  public unset(name: string): boolean {
    return super.unset(name);
  }

  public entries(): Array<[string, Environment]> {
    const entries = super.entries() as Array<[string, Environment]>;
    entries.forEach(([, env]) => (env.aliases = Aliases.getAliases(env.name)));
    return entries;
  }

  public values(): Environment[] {
    return super.values() as Environment[];
  }

  protected setMethod(contents: ConfigContents, key: string, value?: ConfigValue): void {
    contents[key] = value;
  }
}
