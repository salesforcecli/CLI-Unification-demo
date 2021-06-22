/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { Messages } from '@salesforce/core';
import { AnyJson } from '@salesforce/ts-types';

import SfCommand from '../sf-command';
import { logout } from '../utils';

Messages.importMessagesDirectory(__dirname);
const messages = Messages.loadMessages('@salesforce/sf-demo', 'logout');

export default class Logout extends SfCommand {
  public static summary = messages.getMessage('summary');

  public async run(): Promise<AnyJson> {
    const { args } = await this.parse(Logout);
    await logout();

    return { args };
  }
}
