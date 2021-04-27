/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { Dictionary, ensureString } from '@salesforce/ts-types';
import { Separator, ChoiceBase, ChoiceOptions } from 'inquirer';
import Accounts from './configs/account';
import Environments, { Environment } from './configs/environments';

export async function login(
  domain = 'https://login.salesforce.com',
  user: string,
  expires?: number
): Promise<Environment> {
  const environments = Environments.getInstance();
  const accounts = Accounts.getInstance();
  if (domain.includes('functions')) {
    accounts.set('functions', {
      user,
      expires,
      // Set remote environments not connected too.
      environments: ['functions-env-1', 'functions-env-2', 'functions-env-3'],
    });
  } else if (domain.includes('heroku')) {
    accounts.set('heroku', {
      user,
      expires,
      // Set remote environments not connected too.
      environments: ['heroku-app-1', 'heroku-app-2', 'heroku-app-3'],
    });
  } else {
    const hub = accounts.get('hub');

    if (!hub && !user.includes('sandbox')) {
      // Set remote environments not connected too.
      accounts.set('hub', {
        user,
        environments: [
          `${user}.scratch1`,
          `${user}.scratch2`,
          `${user}.scratch3`,
          `${user.replace('login', 'test')}.sandbox`,
        ],
      });
    }

    // A heroku account doesn't show up as an enviornment, so only do for orgs.
    environments.set(user, {
      name: user,
      connected: true,
      status: 'Connected',
      type: 'org',
      // You could imagine a post auth step to get this sort of information from the enviornment.
      context: !user.includes('sandbox') ? 'hub' : 'sandbox',
    });
    await environments.write();
  }
  await accounts.write();
  return environments.get(user);
}

export async function logout(user?: string): Promise<boolean> {
  const environments = Environments.getInstance();
  const accounts = Accounts.getInstance();

  if (!user) {
    accounts.clear();
    environments.clear();
  } else {
    // TODO: Logout from specific user
  }
  await accounts.write();
  await environments.write();
  return true;
}

export function generateTableChoices<T>(
  columns: Dictionary<string>,
  choices: Array<Dictionary<string | T>>,
  padForCheckbox = true
): ChoiceBase[] {
  const columnEntries = Object.entries(columns);
  const columnLengths = columnEntries.map(
    ([key, value]) =>
      Math.max(
        value.length,
        ...choices.map(
          (option) =>
            ensureString(option[key], `Type ${typeof option[key]} for ${key} in ${Object.keys(option).join(', ')}`)
              .length
        )
      ) + (padForCheckbox ? 3 : 0)
  );

  const choicesOptions: ChoiceBase[] = [
    // Pad an extra 2 to account for checkbox
    new Separator(columnEntries.map(([, value], index) => value.padEnd(columnLengths[index] + 2, ' ')).join('')),
  ];

  for (const meta of choices) {
    const name = columnEntries
      .map(([key], index) => ensureString(meta[key]).padEnd(columnLengths[index], ' '))
      .join('');
    const choice: ChoiceOptions = { name, value: meta.value, short: ensureString(meta.name) };
    choicesOptions.push(choice);
  }
  return choicesOptions;
}
