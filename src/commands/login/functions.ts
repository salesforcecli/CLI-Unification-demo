/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { URL } from 'url';
import { Flags } from '@oclif/core';
import { AnyJson } from '@salesforce/ts-types';

import SfCommand from '../../sf-command';
import { login } from '../../utils';

export default class FunctionsLogin extends SfCommand {
  public static description = `login to a Salesforce account or enviornment

  Login to https://login.salesforce.com in a browser. To login to different providers (Salesforce org, heroku, commerce cloud, mulesoft, etc) sepecify the domain or login url of the service. For example, '--instance-url=heroku.com'. 
  `;

  public static examples = [
    'sf login functions',
    'sf login functions --client-id XXXXXXXXXXXXXXX',
  ];

  public static flags = {
    browser: Flags.string({
      description: 'browser to open SSO with (example: "firefox", "safari")',
    }),
    'client-id': Flags.string({
      char: 'i',
      description: 'OAuth client ID (sometimes called the consumer key)',
    }),
  };

  public async run(): Promise<AnyJson> {
    const { flags, args } = await this.parse(FunctionsLogin);

    const browser = flags.browser || 'browser';
    const loginUrl = 'https://functions.salesforce.com';

    this.log(`Opening ${browser} at ${loginUrl}...\n`);

    const domain = new URL(loginUrl).host;
    let user = `myuser-${domain}@mycompany.com`;

    // If this is the second time running login an an org, regerster it as a sandbox
    if (this.environments.get(user) || domain.includes('test')) {
      user += '.sandbox';
    }

    let status = `Logged in as ${user}`;

    if (flags['client-id']) {
      status += `\n   with connected app ${flags['client-id']}`;
    }
    this.log(status);

    await login(domain, user, flags['expires-in']);

    return { flags, args, domain, user };
  }
}
