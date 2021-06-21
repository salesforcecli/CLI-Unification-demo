/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { Command } from '@oclif/core';

export default class TestApex extends Command {
  public static description = 'Run Apex tests in a SF org';

  public static examples = ['sf test apex'];

  public async run(): Promise<void> {
    this.log('Testing code...');
  }
}
