/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { URL } from 'url';
import { Flags, Command } from '@oclif/core';
import { AnyJson } from '@salesforce/ts-types';

import Aliases from '../alias';

export default class Login extends Command {
  public static description = `login to a Salesforce account or enviornment

  Login to https://login.salesforce.com in a browser. To login to different providers (Salesforce org, heroku, commerce cloud, mulesoft, etc) sepecify the domain or login url of the service. For example, '--instance-url=heroku.com'. 
  `;

  public static examples = [
    'sf login --instance-url https://<mydomain>.my.salesforce.com',
    'sf login --instance-url heroku.com',
  ];

  public static flags = {
    alias: Flags.string({
      description: 'set an alias for the environment - see all aliases using `sf env alias list`',
    }),
    browser: Flags.string({
      description: 'browser to open SSO with (example: "firefox", "safari")',
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
    const { flags, args } = await this.parse(Login);

    const browser = flags.browser || 'browser';
    this.log(`Opening ${browser} at ${flags['login-url']}...\n`);

    const domain = new URL(flags['login-url']).host;
    const user = `myuser-${domain}@mycompany.com`;
    let status = `Logged in as ${user}`;
    if (flags.alias) {
      status += `\n   with alias ${flags.alias}`;
      const aliases = await Aliases.create({});
      aliases.set(flags.alias, user);
      await aliases.write();
    }
    if (flags['client-id']) {
      status += `\n   with connected app ${flags['client-id']}`;
    }
    if (flags['expires-in']) {
      if (domain.includes('heroku')) {
        status += `\n   and expires in ${flags['expires-in']}`;
      } else {
        this.warn(`Can not set token experation date for ${domain}`);
      }
    }
    this.log(status);
    return { flags, args, domain, user };
  }
}
