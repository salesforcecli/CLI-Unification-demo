/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { Flags } from '@oclif/core';
import { Duration, sleep } from '@salesforce/kit';
import { AnyJson, ensureString } from '@salesforce/ts-types';
import { cli } from 'cli-ux';
import { cyan, green } from 'chalk';

import { Messages } from '@salesforce/core';
import SfCommand from '../../../sf-command';
import { Environment } from '../../../configs/environments';
import { SalesforceOrgDeployer } from '../../../project/sf-deployer';

Messages.importMessagesDirectory(__dirname);
const messages = Messages.loadMessages('@salesforce/sf-demo', 'project.deploy.org');

export default class ProjectDeployOrg extends SfCommand {
  public static summary = messages.getMessage('summary');
  public static description = messages.getMessage('description');
  public static examples = messages.getMessages('examples');

  public static flags = {
    'check-only': Flags.boolean({
      char: 'c',
      summary: messages.getMessage('flags.check-only.summary'),
      description: messages.getMessage('flags.check-only.description'),
    }),
    'deploy-dir': Flags.string({
      char: 'd',
      summary: messages.getMessage('flags.deploy-dir.summary'),
      description: messages.getMessage('flags.deploy-dir.description'),
      multiple: true,
    }),
    'force-overwrite': Flags.boolean({
      summary: messages.getMessage('flags.force-overwrite.summary'),
    }),
    'ignore-errors': Flags.boolean({
      summary: messages.getMessage('flags.ignore-errors.summary'),
      description: messages.getMessage('flags.ignore-errors.description'),
    }),
    'ignore-warnings': Flags.boolean({
      summary: messages.getMessage('flags.ignore-warnings.summary'),
      description: messages.getMessage('flags.ignore-warnings.description'),
    }),
    metadata: Flags.string({
      char: 'm',
      summary: messages.getMessage('flags.metadata.summary'),
      multiple: true,
    }),
    manifest: Flags.string({
      char: 'x',
      summary: messages.getMessage('flags.manifest.summary'),
      description: messages.getMessage('flags.manifest.description'),
    }),
    'run-tests': Flags.string({
      summary: messages.getMessage('flags.run-tests.summary'),
    }),
    'single-package': Flags.boolean({
      summary: messages.getMessage('flags.single-package.summary'),
      description: messages.getMessage('flags.single-package.description'),
    }),
    'soap-deploy': Flags.boolean({
      summary: messages.getMessage('flags.soapdeploy.summary'),
      description: messages.getMessage('flags.soapdeploy.description'),
    }),
    'test-level': Flags.enum({
      options: ['NoTestRun', 'RunSpecifiedTests', 'RunLocalTests', 'RunAllTestsInOrg'],
      summary: messages.getMessage('flags.test-level.summary'),
      description: messages.getMessage('flags.test-level.description'),
    }),
    'target-env': Flags.string({
      description: 'environment you want to deploy to',
      required: true,
    }),
    'validated-deploy-request-id': Flags.string({
      summary: messages.getMessage('flags.validated-deploy-request-id.summary'),
      description: messages.getMessage('flags.validated-deploy-request-id.description'),
    }),
    wait: Flags.integer({
      summary: messages.getMessage('flags.wait.summary'),
      description: messages.getMessage('flags.wait.description'),
    }),
    'zip-file': Flags.string({
      summary: messages.getMessage('flags.zip-file.summary'),
      description: messages.getMessage('flags.zip-file.description'),
    }),
  };

  public loadEnvironment(targetEnv: string): Environment {
    const environmentName = ensureString(this.aliases.get(targetEnv) || targetEnv);
    const env = this.environments.getContents()[environmentName] as Environment;
    if (!env) {
      throw new Error(`Unknown environment ${environmentName}`);
    }
    return env;
  }

  public async run(): Promise<AnyJson> {
    const { flags } = await this.parse(ProjectDeployOrg);

    cli.action.start('Analyzing project');
    // Make it seem a little real.
    await sleep(Duration.milliseconds(400));
    cli.action.stop();

    const environment = this.loadEnvironment(flags['target-env']);
    const flagsSpecified = flags['deploy-dir'] || flags.manifest || flags.metadata;
    const deployers = flagsSpecified
      ? await SalesforceOrgDeployer.analyze({ path: '', interactive: false, environments: [environment] })
      : await SalesforceOrgDeployer.analyze({
          path: 'force-app',
          interactive: false,
          environments: [environment],
        });

    for (const deployer of deployers) {
      await deployer.init();
      await deployer.setup();
      if (flagsSpecified) {
        let changes = '';

        if (flags['deploy-dir']) changes += `\n  - directories: ${flags['deploy-dir'].join(', ')}`;
        if (flags.metadata) changes += `\n  - metadata: ${flags.metadata.join(', ')}`;
        if (flags.manifest) changes += `\n  - manifest: ${flags.manifest}`;
        this.log(
          `The following changes will be deployed to ${deployer.getType()} ${cyan.bold(
            deployer.environment.name
          )}: ${changes}\n`
        );
      } else {
        this.log(
          `The following changes will be deployed to ${deployer.getType()} ${cyan.bold(deployer.environment.name)}`
        );
      }
      await sleep(500);
      cli.action.start('Deploying');
      const message = await deployer.deploy();
      await sleep(500);
      cli.action.stop(green('Deploy complete!'));
      this.log(`\n\n${message}\n\n`);
    }
    return {};
  }
}
