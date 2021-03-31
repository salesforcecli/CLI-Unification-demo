/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { URL } from 'url';
import { Flags, Command } from '@oclif/core';
import { AnyJson } from '@salesforce/ts-types';

import Aliases from '../../configs/aliases';

export default class JWT extends Command {
  public static description = `
  headlessly login to a Salesforce organization using JSON Web Tokens

  Login using a JSON Web Tokens from a provided username, client id, and private key. Only Salesforce organizations support this flow.
  `;

  public static examples = [
    'sf login -i <client-id> -f <path-to-key-file> -u <username> -r https://<mydomain>.my.salesforce.com',
  ];

  public static flags = {
    alias: Flags.string({
      description: 'set an alias for the account or environment',
    }),
    'client-id': Flags.string({
      name: 'client-id',
      char: 'i',
      description: 'OAuth client ID (sometimes called the consumer key)',
      required: true,
    }),
    'login-url': Flags.string({
      char: 'r',
      description: 'the login url of the auth provider',
      default: 'https://login.salesforce.com',
    }),
    'private-key-file': Flags.string({
      char: 'f',
      description: 'path to a file containing the private key',
      required: true,
    }),
    username: Flags.string({
      char: 'u',
      description: 'authentication username',
      required: true,
    }),
  };

  public async run(): Promise<AnyJson> {
    const { flags, args } = await this.parse(JWT);

    const domain = new URL(flags['login-url']).host;
    const user = flags.username;
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
    this.log(status);
    return { flags, args, domain, user };
  }
}
