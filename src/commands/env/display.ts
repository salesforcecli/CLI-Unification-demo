/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { Flags } from '@oclif/core';
import { Messages } from '@salesforce/core';
import SfCommand from '../../sf-command';

Messages.importMessagesDirectory(__dirname);
const messages = Messages.loadMessages('@salesforce/sf-demo', 'env.display');

export default class EnvDisplay extends SfCommand {
  public static summary = messages.getMessage('summary');
  public static description = messages.getMessage('description');

  public static examples = messages.getMessages('examples');

  public static flags = {
    environment: Flags.string({
      summary: messages.getMessage('flags.environment.summary'),
      required: true,
      char: 'e',
    }),
  };

  public async run(): Promise<void> {
    this.log('Diplaying env...');
  }
}
