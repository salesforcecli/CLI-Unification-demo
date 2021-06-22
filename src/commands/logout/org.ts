/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { Flags } from '@oclif/core';
import { Messages } from '@salesforce/core';
import { AnyJson } from '@salesforce/ts-types';

import SfCommand from '../../sf-command';
import { logout } from '../../utils';

Messages.importMessagesDirectory(__dirname);
const messages = Messages.loadMessages('@salesforce/sf-demo', 'logout.org');

export default class LogoutOrg extends SfCommand {
  public static summary = messages.getMessage('summary');

  public static examples = messages.getMessages('examples');

  public static flags = {
    'target-org': Flags.string({
      summary: messages.getMessage('flags.target-org.summary'),
      char: 't',
    }),
  };

  public async run(): Promise<AnyJson> {
    const { flags } = await this.parse(LogoutOrg);
    await logout(flags['target-org']);

    return { flags };
  }
}
