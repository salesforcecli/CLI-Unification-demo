/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { AnyJson } from '@salesforce/ts-types';
import { fs } from '@salesforce/core';
import SfCommand from '../sf-command';
import { CLI_CONFIG_PATH } from '../configs/constants';

export default class JWT extends SfCommand {
  public static description = 'reset data created by this CLI';

  public async run(): Promise<AnyJson> {
    await fs.rmdir(CLI_CONFIG_PATH, { recursive: true });
    this.log(`Cleaned ${CLI_CONFIG_PATH}`);
    return {};
  }
}
