/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { Flags } from '@oclif/core';
import { AnyJson } from '@salesforce/ts-types';
import { Messages } from '@salesforce/core';

import SfCommand from '../../sf-command';
import { Browser, loginOrg } from '../../utils';

Messages.importMessagesDirectory(__dirname);
const messages = Messages.loadMessages('@salesforce/sf-demo', 'login.org');

export default class OrgLogin extends SfCommand {
  public static summary = messages.getMessage('summary');
  public static description = messages.getMessage('description');

  public static examples = messages.getMessages('examples');

  public static flags = {
    alias: Flags.string({
      summary: messages.getMessage('flags.alias.summary'),
    }),
    browser: Flags.string({
      summary: messages.getMessage('flags.browser.summary'),
      description: messages.getMessage('flags.browser.description'),
      options: [Browser.CHROME, Browser.FIREFOX, Browser.SAFARI],
    }),
    'client-id': Flags.string({
      char: 'i',
      summary: messages.getMessage('flags.client-id.summary'),
    }),
    'instance-url': Flags.string({
      char: 'r',
      summary: messages.getMessage('flags.instance-url.summary'),
      description: messages.getMessage('flags.instance-url.description'),
      default: 'https://login.salesforce.com',
    }),
    'set-default': Flags.boolean({
      summary: messages.getMessage('flags.set-default.summary'),
    }),
  };

  public async run(): Promise<AnyJson> {
    const { flags } = await this.parse(OrgLogin);

    return loginOrg({
      alias: flags.alias,
      browser: flags.browser,
      clientId: flags['client-id'],
      loginUrl: flags['instance-url'],
    });
  }
}
