/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { join } from 'path';
import { ConfigFile } from '@salesforce/core';
import { Dictionary } from '@salesforce/ts-types';
import { CLI_CONFIG_PATH } from './constants';

export default class Aliases extends ConfigFile<Dictionary<string>> {
  public static instance: Aliases;

  public static getInstance(): Aliases {
    if (!this.instance) {
      this.instance = new Aliases({});
      this.instance.readSync();
    }
    return this.instance;
  }

  public static getAliases(value: string): string[] {
    const aliases = this.getInstance();
    return aliases.getKeysByValue(value);
  }

  public static set(key: string, value: string): void {
    const aliases = this.getInstance();
    aliases.set(key, value);
    aliases.writeSync();
  }

  public static getFileName(): string {
    return 'aliases.json';
  }

  public getPath(): string {
    return join(CLI_CONFIG_PATH, Aliases.getFileName());
  }
}
