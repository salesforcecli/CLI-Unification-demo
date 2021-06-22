/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { Messages } from '@salesforce/core';
import { AnyJson } from '@salesforce/ts-types';
import { prompt, Answers } from 'inquirer';

import SfCommand from '../sf-command';
import { loginFunctions, loginHeroku, loginOrg, LoginArgs } from '../utils';

Messages.importMessagesDirectory(__dirname);
const messages = Messages.loadMessages('@salesforce/sf-demo', 'login');

// eslint-disable-next-line no-shadow
export enum LoginTarget {
  ORG = 'Salesforce Org',
  FUNCTIONS = 'Salesforce Functions',
  HEROKU = 'Heroku',
}

export default class Login extends SfCommand {
  public static summary = messages.getMessage('summary');
  public static description = messages.getMessage('description');

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
        message: 'What would you like to log into?',
        type: 'list',
        choices: [LoginTarget.ORG, LoginTarget.FUNCTIONS, LoginTarget.HEROKU],
      },
    ]);

    return responses.target as LoginTarget;
  }

  private async promptUserForOrgArgs(): Promise<Answers> {
    const responses = await prompt<Answers>([
      {
        name: 'alias',
        message: 'Set an alias for the org (leave blank for no alias)',
        type: 'input',
      },
      {
        name: 'setDefault',
        message: 'Set the org as your default org?',
        type: 'confirm',
      },
    ]);
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
    ]);
    return Object.assign(responses, { loginUrl: 'https://heroku.com' });
  }
}
