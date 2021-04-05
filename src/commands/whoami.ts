/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { AnyJson } from '@salesforce/ts-types';
import { green } from 'chalk';
import SfCommand from '../sf-command';

export default class WhoAmI extends SfCommand {
  public static description = `who the CLI thinks you are

  Get information on accounts that have been logged into.
  `;

  public async run(): Promise<AnyJson> {
    const hub = this.accounts.get('hub');
    const heroku = this.accounts.get('heroku');

    if (this.accounts.values().length === 0 && this.environments.values().length === 0) {
      this.log('No information found. Please login or connect to an environement first.');
    } else {
      const mainUser = hub?.user || heroku?.user || this.environments.entries()[0][0];
      this.log(`Hello ${green(mainUser)} 👋

Currently, you are...
  - linked to ${this.accounts.values().length} accounts with access to ${this.accounts
        .values()
        .reduce((sum, account) => (account.environments?.length || 0) + sum, 0)} remote Enviornments.
  - connected to ${this.environments.values().length} environments.

  Think of all the information we could provide here!
      `);
    }

    return {};
  }
}
