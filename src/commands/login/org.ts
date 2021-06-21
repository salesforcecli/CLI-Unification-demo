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
  public static description = messages.getMessage('description');
  public static examples = messages.getMessages('examples');

  public static flags = {
    alias: Flags.string({
      description: messages.getMessage('flags.alias.description'),
    }),
    browser: Flags.string({
      description: 'browser to open SSO with',
      options: [Browser.CHROME, Browser.FIREFOX, Browser.SAFARI],
    }),
    'client-id': Flags.string({
      char: 'i',
      description: 'OAuth client ID (sometimes called the consumer key)',
    }),
    'expires-in': Flags.integer({
      description: 'duration of token in seconds if supported by the auth provider (default 1 year)',
    }),
    'login-url': Flags.string({
      char: 'r',
      description: 'the login url of the auth provider',
      default: 'https://login.salesforce.com',
    }),
  };

  public async run(): Promise<AnyJson> {
    const { flags } = await this.parse(OrgLogin);

    return loginOrg({
      alias: flags.alias,
      browser: flags.browser,
      clientId: flags['client-id'],
      expiresIn: flags['expires-in'],
      loginUrl: flags['login-url'],
    });
  }
}
