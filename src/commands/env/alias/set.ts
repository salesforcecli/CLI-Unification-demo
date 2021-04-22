/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { AnyJson } from '@salesforce/ts-types';
import { Flags } from '@oclif/core';
import Environments from '../../../configs/environments';

import SfCommand from '../../../sf-command';

export default class EnvAliasSet extends SfCommand {
  public static description = `set env alias

  Set an alias for an environment.
  `;

  public static examples = ['sf env alias set [alias] -t [env]'];

  public static args = [{ name: 'alias' }];

  public static flags = {
    targetEnv: Flags.string({
      char: 't',
      description: 'The environment to set an alias for',
    }),
  };

  public async run(): Promise<AnyJson> {
    const { flags, args } = await this.parse(EnvAliasSet);
    const environments = Environments.getInstance();
    // console.log(environments);
    console.log('ENVIRONMENT KEYS', environments.keys());
    console.log('FLAGS TARGETENV    ', flags.targetEnv);
    console.log('ENVIRONMENTS GET', environments.get(flags.targetEnv));
    console.log(typeof flags.targetEnv);

    try {
      const env = environments.get(flags.targetEnv);
      env.aliases.push(args.alias);
      this.log(`Set ${args.alias as string} as ${flags.targetEnv}\n`);
    } catch (e) {
      this.log(`Failed to set ${args.alias as string} as ${flags.targetEnv}\n`);
      this.error(e, { exit: 1 });
    }

    return { flags, args };
  }
}
