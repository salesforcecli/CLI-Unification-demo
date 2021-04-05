/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { blue } from 'chalk';
// import { Answers, prompt } from 'inquirer';
import { Deployer, DeployerOptions } from './deployer';

export class FunctionsDeployer extends Deployer {
  public static type = 'Functions App';

  public static async analyze(options: DeployerOptions): Promise<Deployer[]> {
    const deployers: Deployer[] = [];
    if (!options.path || options.path.includes('functions')) {
      deployers.push(
        new FunctionsDeployer('updateEstMonthlyPayments', './functions/updateEstMonthlyPayments', options)
      );
    }
    return deployers;
  }

  public getEnvironmentType(): string {
    return 'compute';
  }

  public getContextType(): string {
    return 'functions';
  }

  public getType(): string {
    return FunctionsDeployer.type;
  }

  public async setup(): Promise<void> {
    // const responses = await prompt<Answers>([
    //   {
    //     name: 'functionEnviornment',
    //     message:
    //       'Salesforce Functions must be deployed into a Functions App in order to access Salesforce data. \n\nDo you want to deploy ' +
    //       cyan.bold(this.appName) +
    //       ' to the default Functions App for your most recently used scratch org ' +
    //       cyan.bold('Dreamhouse1') +
    //       '?',
    //     type: 'list',
    //     loop: false,
    //     pageSize: 4,
    //     choices: [
    //       {
    //         name: 'Yes, deploy to default app ' + cyan.bold('Dreamhouse1_appspace'),
    //         value: 'default',
    //         short: 'Deploy to ' + cyan.bold('Dreamhouse1_appspace'),
    //       },
    //       { name: 'No, choose another existing destination app', value: 'another', short: 'Choose another app' },
    //       { name: 'Create a new destination app', value: 'new', short: 'Create new app' },
    //     ],
    //   },
    // ]);
    // // Set the enviornment to use TODO find in the environments in the opts or defaults
    // this.environment = {
    //   /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
    //   name: responses.functionEnviornment,
    //   connected: true,
    //   type: 'compute',
    //   context: 'functions',
    // };
  }
  public async deploy(): Promise<string> {
    return (
      'You may invoke your function manually with ' +
      blue('sf event send updateEstMonthlyPayments.Dreamhouse1_appspace --payload=DATA') +
      ' or visit http://developer.salesforce.com//8shNsj8akba/functions/updateEstMonthlyPayments to view your function details'
    );
  }
}
