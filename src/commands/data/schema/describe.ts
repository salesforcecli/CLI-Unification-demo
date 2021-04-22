/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

// import { Flags } from '@oclif/core';

import SfCommand from '../../../sf-command';

export default class DataSchemaDescribe extends SfCommand {
  public static description = `describe the data schema

  Describe the data schema.
  `;

  public static examples = ['sf data schema describe'];

  public async run(): Promise<void> {
    // const { flags, args } = await this.parse(DataSchemaDescribe);

    this.log('Describing the data schema...\n');
  }
}
