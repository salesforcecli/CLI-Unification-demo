/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { cyan } from 'chalk';
import { Answers, prompt, Separator } from 'inquirer';
import Environments, { Environment } from '../configs/environments';
import { generateTableChoices } from '../utils';

/* eslint-disable @typescript-eslint/no-unused-vars */

export type DeployerOptions = {
  path: string;
  interactive: boolean;
  environments: Environment[];
};

export abstract class Deployer {
  public environment: Environment;

  public constructor(
    /**
     * Name of the package or app that will be deployed
     */
    public appName: string,
    /**
     * Path to the package or app that will be deployed
     */
    public appPath: string,
    protected options: DeployerOptions
  ) {
    this.options.environments = this.options.environments.filter((env) => env.type === this.getEnvironmentType());
  }

  public static async analyze(options: DeployerOptions): Promise<Deployer[]> {
    return await Promise.resolve([] as Deployer[]);
  }

  public getContextType(): string | undefined {
    return undefined;
  }

  public async init(): Promise<void> {
    let question = 'Deploy changes for ' + cyan.bold(this.appName) + ' to:';
    let response: Answers;

    // Select a valid environment from the user passed in environments
    if (this.options.environments.length > 0) {
      const columns = {
        alias: 'ALIAS',
        type: 'TYPE',
        name: 'NAME',
      };

      const choices = this.options.environments.map((environment) => ({
        alias: environment.aliases?.join(', ') || '',
        type: environment.context,
        name: environment.name,
        value: environment.name,
      }));

      response = await prompt<Answers>([
        {
          name: 'environment',
          message: question,
          type: 'list',
          loop: false,
          pageSize: 10,
          choices: generateTableChoices(columns, choices, false),
        },
      ]);
      this.environment = this.options.environments.find((environement) => environement.name === response.environment);
    }
    // If the user didn't pass any in or there are no connected environments, ask if we should connect to one
    else {
      const columns = {
        name: 'ENVIRONMENT NAME',
      };

      // Connected environments would have been set by the deployer. So just look at unconnected environments
      const remotes = (await Environments.retrieveRemote()).filter((environment) => {
        const isContext = this.getContextType() ? this.getContextType() === environment.context : true;
        const isType = environment.type === this.getEnvironmentType();
        return isContext && isType;
      });

      let choices;

      if (remotes.length > 0) {
        console.log(`\n\nNo connected ${cyan.dim(this.getEnvironmentType())} envirnments found.\n\n`);
        question = `Select a remote enviornment to connect and deploy changes for ${cyan.bold(
          this.appName
        )} to or login to a new environment.`;
        choices = remotes.map((environment) => ({
          name: environment.name,
          value: environment.name,
        }));
      }

      const responses = await prompt<Answers>([
        {
          name: 'environment',
          message: question,
          type: 'list',
          loop: false,
          pageSize: 10,
          choices: [
            ...generateTableChoices(columns, choices),
            new Separator('----'),
            {
              name: 'Connect to one using oauth?',
              value: '__CONNECT__',
            },
          ],
        },
      ]);

      if (responses.environment === '__CONNECT__') {
        const loginResponses = await prompt<Answers>([
          {
            name: 'loginUrl',
            message: 'Enter login url of environment to connect to:',
          },
        ]);
        console.log(`\n\nOpening browser at ${loginResponses.loginUrl as string}... connected.\n\n`);
        console.log('The rest of this flow is not finished. Exiting...');
        process.exit();
      }

      // Set the enviornment to use TODO find in the environments in the opts or defaults
      this.environment = remotes.find((environment) => environment.name === responses.environment);
      await Environments.connect(this.environment);
    }
  }

  public async setup(): Promise<void> {
    // Set next tick
    await Promise.resolve();
  }

  public async deploy(): Promise<string> {
    // Set next tick
    return await Promise.resolve('');
  }

  /**
   * Get the name of the type of app to deploy. This should be the same for a single deployer class, but a static can't have abstract.
   */
  public abstract getType(): string;

  public abstract getEnvironmentType(): string;
}
