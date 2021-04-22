/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

// import { Flags } from '@oclif/core';

import SfCommand from '../../../sf-command';

export default class EventCreateEvent extends SfCommand {
  public static description = `create an event

  Create an event.
  `;

  public static examples = ['sf event create event'];

  public async run(): Promise<void> {
    // const { flags, args } = await this.parse(EventCreateEvent);

    this.log('Creating event...\n');
  }
}
