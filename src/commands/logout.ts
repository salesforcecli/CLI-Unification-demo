/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { AnyJson } from '@salesforce/ts-types';

import SfCommand from '../sf-command';
import { logout } from '../utils';

export default class Logout extends SfCommand {
  public static description = `logout of a Salesforce account or enviornment

  Logout of all accounts or a specific user.
  `;

  public static examples = ['sf logout', 'sf logout [user]'];

  public async run(): Promise<AnyJson> {
    const { args } = await this.parse(Logout);
    await logout();

    return { args };
  }
}
