/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { Messages } from '@salesforce/core';
import Environments from '../../../configs/environments';
import { Environment, OrgEnvironment } from '../../../configs/environments';
import SfCommand from '../../../sf-command';

Messages.importMessagesDirectory(__dirname);
const messages = Messages.loadMessages('@salesforce/sf-demo', 'env.create.org');
export default class EnvCreateOrg extends SfCommand {
  public static summary = messages.getMessage('summary');
  public static description = messages.getMessage('description');

  public static examples = messages.getMessages('examples');

  public static args = [{ name: 'envName' }];

  public async run(): Promise<OrgEnvironment> {
    const { args } = await this.parse(EnvCreateOrg);
    const environments = Environments.getInstance();

    const env: Environment = {
      name: args.envName as string,
      aliases: [],
      connected: false,
      status: 'not connected',
      type: 'org',
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

    return env as OrgEnvironment;
  }
}
