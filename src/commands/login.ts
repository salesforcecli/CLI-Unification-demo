/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { AnyJson } from '@salesforce/ts-types';
import { prompt, Answers } from 'inquirer';

import SfCommand from '../sf-command';
import { loginFunctions, loginHeroku, loginOrg, LoginArgs } from '../utils';

// eslint-disable-next-line no-shadow
export enum LoginTarget {
  ORG = 'org',
  FUNCTIONS = 'functions',
  HEROKU = 'heroku',
}

// eslint-disable-next-line no-shadow
export enum Browser {
  SAFARI = 'safari',
  FIREFOX = 'firefox',
  CHROME = 'chrome',
}

export default class Login extends SfCommand {
  public static description = 'login to a Salesforce account or enviornment';

  public static examples = ['sf login'];

  public static flags = {};

  public async run(): Promise<AnyJson> {
    const target = await this.promptUserToChooseLoginTarget();
    switch (target) {
      case LoginTarget.ORG:
        return this.executeOrgLogin();
      case LoginTarget.FUNCTIONS:
        return this.executeFunctionsLogin();
      case LoginTarget.HEROKU:
        return this.executeHerokuLogin();
      default:
        break;
    }

    return {};
  }

  public async executeOrgLogin(): Promise<AnyJson> {
    const args = (await this.promptUserForOrgArgs()) as LoginArgs;
    return loginOrg(args);
  }

  private async executeFunctionsLogin(): Promise<AnyJson> {
    const args = (await this.promptUserForFunctionsArgs()) as LoginArgs;
    return loginFunctions(args);
  }

  private async executeHerokuLogin(): Promise<AnyJson> {
    const args = (await this.promptUserForHerokuArgs()) as LoginArgs;
    return loginHeroku(args);
  }

  private async promptUserToChooseLoginTarget(): Promise<LoginTarget> {
    const responses = await prompt<Answers>([
      {
        name: 'target',
        message: 'Select login target:',
        type: 'list',
        choices: [LoginTarget.ORG, LoginTarget.FUNCTIONS, LoginTarget.HEROKU],
      },
    ]);

    return responses.target as LoginTarget;
  }

  private async promptUserForOrgArgs(): Promise<Answers> {
    const responses = await prompt<Answers>([
      {
        name: 'loginUrl',
        message: 'login url of auth provider',
        type: 'string',
        default: 'https://login.salesforce.com',
      },
      {
        name: 'alias',
        message: 'Alias:',
        type: 'input',
      },
      {
        name: 'clientId',
        message: 'OAuth client ID (sometimes called the consumer key):',
        type: 'string',
      },
      {
        name: 'expiresIn',
        message: 'duration of token in seconds if supported by the auth provider:',
        type: 'number',
        default: '1 year',
      },
      {
        name: 'browser',
        message: 'browser to open SSO with:',
        type: 'list',
        choices: [Browser.CHROME, Browser.FIREFOX, Browser.SAFARI],
      },
    ]);
    if (responses.expiresin === '1 year') responses.expiresin = undefined;
    return responses;
  }

  private async promptUserForFunctionsArgs(): Promise<Answers> {
    const responses = await prompt<Answers>([
      {
        name: 'jwtFile',
        message: 'file containing the JWT private key:',
        type: 'string',
      },
      {
        name: 'clientId',
        message: 'OAuth client ID (sometimes called the consumer key):',
        type: 'string',
      },
      {
        name: 'browser',
        message: 'browser to open SSO with:',
        type: 'list',
        choices: [Browser.CHROME, Browser.FIREFOX, Browser.SAFARI],
      },
    ]);
    return responses;
  }

  private async promptUserForHerokuArgs(): Promise<Answers> {
    const responses = await prompt<Answers>([
      {
        name: 'alias',
        message: 'Alias:',
        type: 'input',
      },
      {
        name: 'browser',
        message: 'browser to open SSO with:',
        type: 'list',
        choices: [Browser.CHROME, Browser.FIREFOX, Browser.SAFARI],
      },
    ]);
    return Object.assign(responses, { loginUrl: 'https://heroku.com' });
  }
}
