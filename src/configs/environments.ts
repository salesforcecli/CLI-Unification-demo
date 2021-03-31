/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { join } from 'path';
import { ConfigContents, ConfigFile, ConfigValue } from '@salesforce/core';
import { CLI_CONFIG_PATH } from './constants';

export type Enviornment = {
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

export default class Enviornments extends ConfigFile<undefined> {
  public static getFileName(): string {
    return 'environments.json';
  }

  public getPath(): string {
    return join(CLI_CONFIG_PATH, Enviornments.getFileName());
  }

  public set(name: string, value: Enviornment): Enviornment {
    return super.set(name, value) as Enviornment;
  }

  public entries(): Array<[string, Enviornment]> {
    return super.entries() as Array<[string, Enviornment]>;
  }

  public values(): Enviornment[] {
    return super.values() as Enviornment[];
  }

  protected setMethod(contents: ConfigContents, key: string, value?: ConfigValue): void {
    contents[key] = value;
  }
}
