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
const messages = Messages.loadMessages('@salesforce/sf-demo', 'env.open');

export default class EnvOpen extends SfCommand {
  public static summary = messages.getMessage('summary');
  public static description = messages.getMessage('description');

  public static examples = messages.getMessages('examples');

  public static flags = {
    path: Flags.string({
      char: 'p',
      summary: messages.getMessage('flags.path.summary'),
    }),
    'url-only': Flags.boolean({
      char: 'r',
      summary: messages.getMessage('flags.url-only.summary'),
    }),
    'target-env': Flags.string({
      char: 'e',
      summary: messages.getMessage('flags.target-env.summary'),
      description: messages.getMessage('flags.target-env.description'),
    }),
    browser: Flags.string({
      summary: messages.getMessage('flags.browser.summary'),
      description: messages.getMessage('flags.browser.description'),
    }),
  };

  public async run(): Promise<void> {
    const { flags /* , args */ } = await this.parse(EnvOpen);

    const browser = flags.browser || 'browser';

    this.log(`Opening env in ${browser}...\n`);
  }
}
