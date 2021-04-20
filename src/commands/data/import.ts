/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

// import { Flags } from '@oclif/core';

import SfCommand from '../../sf-command';

export default class DataImport extends SfCommand {
  public static description = `import data

  import data.
  `;

  public static examples = ['sf data import'];

  public async run(): Promise<void> {
    // const { flags, args } = await this.parse(DataImport);

    this.log('Importing data...\n');
  }
}
