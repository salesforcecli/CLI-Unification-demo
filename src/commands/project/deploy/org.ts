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

import SfCommand from '../../../sf-command';
import { Environment } from '../../../configs/environments';
import { SalesforceOrgDeployer } from '../../../project/sf-deployer';

export default class ProjectDeployOrg extends SfCommand {
  public static description = 'deploy source to a salesforce org';

  public static examples = [
    'sf project deploy org --target-env=devhub',
    'sf project deploy org --directory force-app --target-env=devhub',
    'sf project deploy org --metadata ApexClass --target-env=devhub',
    'sf project deploy org --manifest package.xml --target-env=devhub',
  ];

  public static flags = {
    metadata: Flags.string({
      char: 'm',
      description: 'list of metadata component names',
      multiple: true,
    }),
    manifest: Flags.string({
      char: 'x',
      description: 'file path for manifest (package.xml) of components to deploy',
    }),
    directory: Flags.string({
      char: 'd',
      description: 'list of paths to the local source files to deploy',
      multiple: true,
    }),
    'target-env': Flags.string({
      description: 'environment you want to deploy to',
      required: true,
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

    const environement = this.loadEnvironment(flags['target-env']);
    const flagsSpecified = flags.directory || flags.manifest || flags.metadata;
    const deployers = flagsSpecified
      ? await SalesforceOrgDeployer.analyze({ path: '', interactive: false, environments: [environement] })
      : await SalesforceOrgDeployer.analyze({
          path: 'force-app',
          interactive: false,
          environments: [environement],
        });

    for (const deployer of deployers) {
      await deployer.init();
      await deployer.setup();
      if (flagsSpecified) {
        let changes = '';

        if (flags.directory) changes += `\n  - directories: ${flags.directory.join(', ')}`;
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
