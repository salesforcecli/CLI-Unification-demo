/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

// import { Flags } from '@oclif/core';

import SfCommand from '../../sf-command';

export default class EnvSetup extends SfCommand {
  public static description = `setup env

  Setup environment.
  `;

  public static examples = ['sf env setup'];

  public async run(): Promise<void> {
    // const { flags, args } = await this.parse(EnvSetup);

    this.log('Setting up env...\n');
  }
}
