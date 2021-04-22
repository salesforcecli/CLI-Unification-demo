/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

// import { Flags } from '@oclif/core';

import SfCommand from '../../sf-command';

export default class DataRecord extends SfCommand {
  public static description = `record data

  Record data.
  `;

  public static examples = ['sf data record'];

  public async run(): Promise<void> {
    // const { flags, args } = await this.parse(DataRecord);

    this.log('Recording data...\n');
  }
}
