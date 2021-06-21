/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { Command } from '@oclif/core';

export default class Event extends Command {
  public static description = 'Placeholder topic';

  public static examples = ['sf event ...'];

  public async run(): Promise<void> {
    this.log('This is a placeholder topic for event commands...');
  }
}
