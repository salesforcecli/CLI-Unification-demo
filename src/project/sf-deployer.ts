/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { blue, cyan } from 'chalk';
import { Answers, prompt } from 'inquirer';
import { Deployer, DeployerOptions } from './deployer';

export class SalesforceDeployer extends Deployer {
  public static type = 'Salesforce App';

  public static async analyze(options: DeployerOptions): Promise<Deployer[]> {
    const deployers: Deployer[] = [];
    if (!options.path || options.path.includes('force')) {
      deployers.push(new SalesforceDeployer('Dreamhouse', './force-app', options));
    }
    return deployers;
  }

  public getEnvironmentType(): string {
    return 'org';
  }

  public getType(): string {
    return SalesforceDeployer.type;
  }

  public async setup(): Promise<void> {
    await prompt<Answers>([
      {
        name: 'tests',
        message: 'Select the test level you would like to run for ' + cyan.bold('Dreamhouse') + ':',
        type: 'list',
        loop: false,
        pageSize: 4,
        choices: [
          { name: 'Run local tests', value: 'local', short: 'Run local tests' },
          { name: 'Run specified tests', value: 'specified', short: 'Run specified tests' },
          { name: 'Run all tests in environment', value: 'all', short: 'Run all tests in environment' },
          { name: "Don't run tests", value: 'none', short: "Don't run tests" },
        ],
      },
    ]);
  }
  public async deploy(): Promise<string> {
    return (
      'Open your Salesforce App in your browser with ' +
      blue('sf env open -u ' + this.environment.name) +
      ' or visit http://wise-koala-7i3w1u.lightning.force.com'
    );
  }
}
