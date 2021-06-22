/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { URL } from 'url';
import { Flags } from '@oclif/core';
import { AnyJson } from '@salesforce/ts-types';
import { Messages } from '@salesforce/core';
import SfCommand from '../../../sf-command';

import Aliases from '../../../configs/aliases';

Messages.importMessagesDirectory(__dirname);
const messages = Messages.loadMessages('@salesforce/sf-demo', 'login.org.jwt');

export default class JWT extends SfCommand {
  public static summary = messages.getMessage('summary');
  public static description = messages.getMessage('description');

  public static examples = messages.getMessages('examples');

  public static flags = {
    alias: Flags.string({
      summary: messages.getMessage('flags.alias.summary'),
    }),
    'audience-url': Flags.string({
      summary: messages.getMessage('flags.audience-url.summary'),
      description: messages.getMessage('flags.audience-url.description'),
    }),
    'client-id': Flags.string({
      char: 'i',
      summary: messages.getMessage('flags.client-id.summary'),
      required: true,
    }),
    'instance-url': Flags.string({
      char: 'r',
      summary: messages.getMessage('flags.instance-url.summary'),
      description: messages.getMessage('flags.instance-url.description'),
      default: 'https://login.salesforce.com',
    }),
    'jwt-key-file': Flags.string({
      summary: messages.getMessage('flags.jwt-key-file.summary'),
    }),
    'set-default': Flags.boolean({
      summary: messages.getMessage('flags.set-default.summary'),
    }),
    username: Flags.string({
      char: 'u',
      summary: messages.getMessage('flags.username.summary'),
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
