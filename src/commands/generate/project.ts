/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { Flags } from '@oclif/core';

import SfCommand from '../../sf-command';

export default class GenerateProject extends SfCommand {
  public static description = 'create a Salesforce project';

  public static examples = ['sf generate project'];

  public static flags = {
    name: Flags.string({
      description: 'project name',
      char: 'n',
    }),
  };

  public async run(): Promise<void> {
    const { flags } = await this.parse(GenerateProject);
    this.log(`Created project ${flags.name}.`);
  }
}
