/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { URL } from 'url';
import { Flags } from '@oclif/core';
import { AnyJson } from '@salesforce/ts-types';

import SfCommand from '../sf-command';
import { logout } from '../utils';

export default class Logout extends SfCommand {
  public static description = `logout of a Salesforce account or enviornment

  Logout of https://login.salesforce.com. To logout of different providers (Salesforce org, heroku, commerce cloud, mulesoft, etc) sepecify the domain or login url of the service. For example, '--instance-url=heroku.com'. 
  `;

  public static examples = [
    'sf logout --instance-url https://<mydomain>.my.salesforce.com',
    'sf logout --instance-url heroku.com',
  ];

  public static flags = {
    'client-id': Flags.string({
      char: 'i',
      description: 'OAuth client ID (sometimes called the consumer key)',
    }),
    'instance-url': Flags.string({
      char: 'r',
      description: 'the instance url of the auth provider',
      default: 'https://login.salesforce.com',
    }),
  };

  public async run(): Promise<AnyJson> {
    const { flags, args } = await this.parse(Logout);

    const instanceUrl = flags['instance-url'].startsWith('http')
      ? flags['instance-url']
      : `https://${flags['instance-url']}`;

    if (!instanceUrl.endsWith('salesforce.com') && !instanceUrl.endsWith('heroku.com')) {
      throw new Error('Salesforce CLI only supports logging into salesforce.com and heroku.com');
    }

    this.log(`Logging out from ${instanceUrl}...\n`);

    const domain = new URL(instanceUrl).host;
    const user = `myuser-${domain}@mycompany.com`;

    let status = `Logged out ${user}`;
    if (flags['client-id']) {
      status += `\n   with connected app ${flags['client-id']}`;
    }
    this.log(status);

    await logout(domain, user);

    return { flags, args, domain, user };
  }
}
