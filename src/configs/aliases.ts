/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { join } from 'path';
import { ConfigFile } from '@salesforce/core';
import { CLI_CONFIG_PATH } from './constants';

export default class Aliases extends ConfigFile<undefined> {
  public static getFileName(): string {
    return 'aliases.json';
  }

  public getPath(): string {
    return join(CLI_CONFIG_PATH, Aliases.getFileName());
  }
}
