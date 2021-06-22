/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { cli } from 'cli-ux';
import { Flags } from '@oclif/core';

import { Messages } from '@salesforce/core';
import SfCommand from '../sf-command';

Messages.importMessagesDirectory(__dirname);
const messages = Messages.loadMessages('@salesforce/sf-demo', 'usage');
export default class Usage extends SfCommand {
  public static description = messages.getMessage('summary');

  public static flags = {
    // TODO: Add cli.table.flags - https://github.com/oclif/cli-ux#clitable
    json: Flags.string({
      description: 'format output as json',
    }),
  };

  public async run(): Promise<void> {
    cli.table(
      [
        { Name: 'Active Scratch Orgs', Remaining: '500', Max: '500' },
        { Name: 'Daily Scratch Orgs', Remaining: '1000', Max: '1000' },
        { Name: 'Developer Sandboxes', Remaining: '4', Max: '10' },
        { Name: 'Partial Sandboxes', Remaining: '2', Max: '5' },
        { Name: 'Full Sandboxes', Remaining: '2', Max: '2' },
        { Name: 'Function Compute Spaces', Remaining: '1', Max: '1' },
      ],
      {
        Name: {},
        Remaining: {},
        Max: {},
      },
      {
        /* TODO add cli.table.flags */
      }
    );
  }
}
