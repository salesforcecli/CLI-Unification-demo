/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { Flags } from '@oclif/core';

import SfCommand from '../../sf-command';

export default class EnvOpen extends SfCommand {
  public static description = `open an envioronment on the browser

  Open an envioronment on the browser.
  `;

  public static examples = ['sf env open --browser chrome'];

  public static flags = {
    browser: Flags.string({
      description: 'browser to open env with (example: "firefox", "safari")',
    }),
  };

  public async run(): Promise<void> {
    const { flags /* , args */ } = await this.parse(EnvOpen);

    const browser = flags.browser || 'browser';

    this.log(`Opening env in ${browser}...\n`);
  }
}
