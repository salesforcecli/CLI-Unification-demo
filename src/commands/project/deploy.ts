/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { Flags } from '@oclif/core';
import { Duration, sleep } from '@salesforce/kit';
import { AnyJson } from '@salesforce/ts-types';
import { cli } from 'cli-ux';
import { cyan, green, red } from 'chalk';
import { prompt, Answers } from 'inquirer';

import { Messages } from '@salesforce/core';
import SfCommand from '../../sf-command';
import { Deployer, Deployers } from '../../project';
import { Environment } from '../../configs/environments';
import { generateTableChoices } from '../../utils';

Messages.importMessagesDirectory(__dirname);
const messages = Messages.loadMessages('@salesforce/sf-demo', 'project.deploy');

export default class ProjectDeploy extends SfCommand {
  public static summary = messages.getMessage('summary');
  public static description = messages.getMessage('description');

  public static examples = ['sf project deploy', 'sf project deploy --target-env=devhub'];

  public static flags = {
    directory: Flags.string({
      description: 'directory to deploy',
    }),
    'target-env': Flags.string({
      description: 'set ',
      multiple: true,
    }),
    interactive: Flags.boolean({
      summary: messages.getMessage('flags.interactive.summary'),
    }),
  };

  public loadEnvironments(environmentNames: string[] = []): Environment[] {
    // Try to used passed in environments
    return environmentNames.length > 0
      ? environmentNames.map((envName) => {
          const env = this.environments.get(envName);
          if (!env) {
            throw new Error(`Unknown environment ${envName}`);
          }
          return env;
        })
      : // Or load up all the connected values to prompt
        this.environments.values().filter((env) => env.connected);
  }

  public async run(): Promise<AnyJson> {
    const { flags } = await this.parse(ProjectDeploy);

    if (!this.accounts.has('hub')) {
      process.exitCode = 1;
      this.log(red('You have not authorized any accounts. Please run "sf login" first.'));
      return {};
    }

    cli.action.start('Analyzing project');
    // Make it seem a little real.
    await sleep(Duration.milliseconds(400));
    cli.action.stop();

    let deployers: Deployer[] = [];

    // Get all possible deployments
    for (const deployer of Deployers) {
      deployers = [
        ...deployers,
        ...(await deployer.analyze({
          path: flags.directory,
          interactive: flags.interactive,
          environments: this.loadEnvironments(flags['target-env']),
        })),
      ];
    }

    if (!flags.directory) {
      deployers = await this.promptUserToChoseApps(deployers);
    }

    if (deployers.length === 0) {
      this.log('Nothing to deploy.');
      return;
    }

    // Allow deployers to get setup and ask questions if needed.
    for (const deployer of deployers) {
      await deployer.init();
      await deployer.setup();
    }

    this.log();
    for (const deployer of deployers) {
      cli.action.start(`Deploying changes to ${deployer.getType()} ${cyan.bold(deployer.environment.name)}`);
      const message = await deployer.deploy();
      await sleep(500);
      cli.action.stop(green('Deploy complete!'));
      this.log(`\n\n${message}\n\n`);
    }

    return {};
  }

  public async promptUserToChoseApps(deployers: Deployer[]): Promise<Deployer[]> {
    // If the user didn't specify what they want to deploy, ask.
    const columns = {
      name: 'APP OR PACKAGE',
      type: 'TYPE',
      path: 'PATH',
    };
    const options = deployers.map((deployer) => ({
      name: deployer.appName,
      type: deployer.getType(),
      path: deployer.appPath,
      value: deployer,
    }));

    const responses = await prompt<Answers>([
      {
        name: 'chooseApps',
        message: 'Select apps and packages to deploy:',
        type: 'checkbox',
        choices: generateTableChoices<Deployer>(columns, options),
      },
    ]);

    /* eslint-disable-next-line @typescript-eslint/no-unsafe-return */
    return responses.chooseApps as Deployer[]; // .map(response => response);
  }
}
