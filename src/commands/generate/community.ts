/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { Flags } from '@oclif/core';

import SfCommand from '../../sf-command';

export default class GenerateCommunity extends SfCommand {
  public static description = 'create a community';

  public static examples = ['sf generate community'];

  public static flags = {
    name: Flags.string({
      description: 'community name',
      char: 'n',
    }),
  };

  public async run(): Promise<void> {
    const { flags } = await this.parse(GenerateCommunity);
    this.log(`Created community ${flags.name}.`);
  }
}
