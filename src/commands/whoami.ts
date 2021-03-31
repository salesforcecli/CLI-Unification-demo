/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { Command } from '@oclif/core';
import { AnyJson } from '@salesforce/ts-types';
import { green } from 'chalk';
import Accounts from '../configs/account';
import Enviornments from '../configs/environments';

export default class WhoAmI extends Command {
  public static description = `who the CLI thinks you are

  Get information on accounts that have been logged into.
  `;

  public async run(): Promise<AnyJson> {
    const accounts = await Accounts.create({});
    const env = await Enviornments.create({});

    const hub = accounts.get('hub');
    const heroku = accounts.get('heroku');

    if (accounts.values().length === 0 && env.values().length === 0) {
      this.log('No information found. Please login or connect to an environement first.');
    } else {
      const mainUser = hub?.user || heroku?.user || env.entries()[0][0];
      this.log(`Hello ${green(mainUser)} 👋

Currently, you are...
  - linked to ${accounts.values().length} accounts with access to ${accounts
        .values()
        .reduce((sum, account) => (account.environments?.length || 0) + sum, 0)} remote Enviornments.
  - connected to ${env.values().length} environments.

  Think of all the information we could provide here!
      `);
    }

    return {};
  }
}
