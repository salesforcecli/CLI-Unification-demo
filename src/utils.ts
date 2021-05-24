/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { URL } from 'url';
import { AnyJson, Dictionary, ensureString } from '@salesforce/ts-types';
import { Separator, ChoiceBase, ChoiceOptions } from 'inquirer';
import Accounts from './configs/account';
import Environments, { Environment } from './configs/environments';
import Aliases from './configs/aliases';

// eslint-disable-next-line no-shadow
export enum Browser {
  SAFARI = 'safari',
  FIREFOX = 'firefox',
  CHROME = 'chrome',
}

export type LoginArgs = {
  browser?: string;
  expiresIn?: number;
  clientId?: string;
  alias?: string;
  loginUrl?: string;
  jwtFile?: string;
};

export function generateOrgId(): string {
  function randIntBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function randomLetter(): string {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();
  }

  const fourRandomLetters = [randomLetter(), randomLetter(), randomLetter(), randomLetter()].join('');
  return `00${randomLetter()}${randIntBetween(1, 10)}00${randIntBetween(1, 10)}0000${fourRandomLetters}`;
}

export async function login(
  domain = 'https://login.salesforce.com',
  user: string,
  expires?: number
): Promise<Environment> {
  const environments = Environments.getInstance();
  const accounts = Accounts.getInstance();

  if (domain.includes('heroku')) {
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
      orgId: generateOrgId(),
      // You could imagine a post auth step to get this sort of information from the enviornment.
      context: !user.includes('sandbox') ? 'hub' : 'sandbox',
    });

    accounts.set('functions', {
      user,
      expires,
      // Set remote environments not connected too.
      environments: ['functions-env-1', 'functions-env-2', 'functions-env-3'],
    });
    environments.set('functions-env-1', {
      name: 'functions-env-1',
      connected: true,
      status: 'Connected',
      type: 'compute',
      context: 'functions',
      connectedOrg: user,
    });
    environments.set('functions-env-2', {
      name: 'functions-env-2',
      connected: true,
      status: 'Connected',
      type: 'compute',
      context: 'functions',
      connectedOrg: user,
    });
    // environments.set('functions-env-3', {
    //   name: 'functions-env-3',
    //   connected: true,
    //   status: 'Connected',
    //   type: 'compute',
    //   context: 'functions',
    // });

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

export async function loginOrg(args: LoginArgs): Promise<AnyJson> {
  const environments = Environments.getInstance();
  const aliases = Aliases.getInstance();
  const browser = args.browser || 'browser';
  const url = args.loginUrl || 'https://login.salesforce.com';
  const loginUrl = (url.startsWith('http') ? url : `https://${url}`).replace(/\/$/, '');

  if (!loginUrl.endsWith('salesforce.com')) {
    throw new Error('Salesforce CLI only supports logging into salesforce.com');
  }

  console.log(`Opening ${browser} at ${loginUrl}...\n`);

  const domain = new URL(loginUrl).host;
  let user = `myuser-${domain}@mycompany.com`;

  // If this is the second time running login an an org, regerster it as a sandbox
  if (environments.get(user) || domain.includes('test')) {
    user += '.sandbox';
  }

  let status = `Logged in as ${user}`;
  if (args.alias) {
    status += `\n   with alias ${args.alias}`;

    aliases.set(args.alias, user);
    await aliases.write();
  }
  if (args.clientId) {
    status += `\n   with connected app ${args.clientId}`;
  }

  console.log(status);

  await login(domain, user, args.expiresIn);
  return { args, domain, user };
}

export async function loginHeroku(args: LoginArgs): Promise<AnyJson> {
  const environments = Environments.getInstance();
  const aliases = Aliases.getInstance();
  const browser = args.browser || 'browser';
  const url = args.loginUrl || 'https://heroku.com';
  const loginUrl = (url.startsWith('http') ? url : `https://${url}`).replace(/\/$/, '');

  if (!loginUrl.endsWith('heroku.com')) {
    throw new Error('Salesforce CLI only supports logging into heroku.com');
  }

  console.log(`Opening ${browser} at ${loginUrl}...\n`);

  const domain = new URL(loginUrl).host;
  let user = `myuser-${domain}@mycompany.com`;

  // If this is the second time running login an an org, regerster it as a sandbox
  if (environments.get(user) || domain.includes('test')) {
    user += '.sandbox';
  }

  let status = `Logged in as ${user}`;
  if (args.alias) {
    status += `\n   with alias ${args.alias}`;

    aliases.set(args.alias, user);
    await aliases.write();
  }
  if (args.clientId) {
    status += `\n   with connected app ${args.clientId}`;
  }

  console.log(status);

  await login(domain, user, args.expiresIn);
  return { args, domain, user };
}

export async function loginFunctions(args: Partial<LoginArgs>): Promise<AnyJson> {
  const environments = Environments.getInstance();
  const browser = args.browser || 'browser';
  const loginUrl = 'https://functions.salesforce.com';

  console.log(`Opening ${browser} at ${loginUrl}...\n`);

  const domain = new URL(loginUrl).host;
  let user = `myuser-${domain}@mycompany.com`;

  // If this is the second time running login an an org, regerster it as a sandbox
  if (environments.get(user) || domain.includes('test')) {
    user += '.sandbox';
  }

  let status = `Logged in as ${user}`;

  if (args.clientId) {
    status += `\n   with connected app ${args.clientId}`;
  }
  console.log(status);

  await login(domain, user, args.expiresIn);
  return { args, domain, user };
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
