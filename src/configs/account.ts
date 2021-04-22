/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { join } from 'path';
import { ConfigFile } from '@salesforce/core';
import { Dictionary, Optional } from '@salesforce/ts-types';
import { CLI_CONFIG_PATH } from './constants';

export type Account = {
  user: string;
  expires?: number;
  environments: string[];
};

export default class Accounts extends ConfigFile<Dictionary<string>> {
  public static instance: Accounts;

  public static getInstance(): Accounts {
    if (!this.instance) {
      this.instance = new Accounts({});
      this.instance.readSync();
    }
    return this.instance;
  }

  public static getFileName(): string {
    return 'accounts.json';
  }

  public getPath(): string {
    return join(CLI_CONFIG_PATH, Accounts.getFileName());
  }

  public get(key: string): Optional<Account> {
    return super.get(key) as Optional<Account>;
  }

  public set(key: string, value: Account): Optional<Account> {
    return super.set(key, value) as Optional<Account>;
  }

  public unset(key: string): boolean {
    return super.unset(key);
  }

  public entries(): Array<[string, Account]> {
    return super.entries() as Array<[string, Account]>;
  }

  public values(): Account[] {
    return super.values() as Account[];
  }
}
