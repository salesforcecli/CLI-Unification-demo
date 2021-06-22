/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { Messages } from '@salesforce/core';
import SfCommand from '../../sf-command';

Messages.importMessagesDirectory(__dirname);
const messages = Messages.loadMessages('@salesforce/sf-demo', 'test.function');

export default class TestFunction extends SfCommand {
  public static summary = messages.getMessage('summary');

  public async run(): Promise<void> {
    this.log('Testing function...');
  }
}
