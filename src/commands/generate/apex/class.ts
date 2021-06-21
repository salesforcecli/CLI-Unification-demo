/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { Flags } from '@oclif/core';

import SfCommand from '../../../sf-command';

export default class GenerateApexClass extends SfCommand {
  public static description = 'create an apex class';

  public static examples = ['sf generate apex class'];

  public static flags = {
    name: Flags.string({
      description: 'class name',
      char: 'n',
    }),
  };

  public async run(): Promise<void> {
    const { flags } = await this.parse(GenerateApexClass);
    this.log(`Created class ${flags.name}.`);
  }
}
