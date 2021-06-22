/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { Messages } from '@salesforce/core';
import Environments from '../../../configs/environments';
import { Environment, ComputeEnvironment } from '../../../configs/environments';
import SfCommand from '../../../sf-command';

Messages.importMessagesDirectory(__dirname);
const messages = Messages.loadMessages('@salesforce/sf-demo', 'env.create.compute');
export default class EnvCreateCompute extends SfCommand {
  public static summary = messages.getMessage('summary');
  public static description = messages.getMessage('description');

  public static examples = messages.getMessages('examples');

  public static args = [{ name: 'envName' }];

  public async run(): Promise<ComputeEnvironment> {
    const { args } = await this.parse(EnvCreateCompute);
    const environments = Environments.getInstance();

    const env: Environment = {
      name: args.envName as string,
      aliases: [],
      connected: false,
      status: 'not connected',
      type: 'compute',
      context: '',
      token: '',
    };

    try {
      environments.set(args.envName, env);
      await environments.write();
      this.log(`Created ${args.envName as string}\n`);
    } catch (e) {
      this.log(`Failed to create ${args.envName as string}\n`);
      this.error(e, { exit: 1 });
    }

    return env as ComputeEnvironment;
  }
}
