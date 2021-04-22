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

export default class EnvAliasUnset extends SfCommand {
  public static description = `Unset env alias

  Unset an alias for an environment.
  `;

  public static examples = ['sf env alias unset [alias] -t [env]'];

  public static args = [{ name: 'alias' }];

  public static flags = {
    targetEnv: Flags.string({
      char: 't',
      description: 'The environment to unset an alias for',
    }),
  };

  public async run(): Promise<AnyJson> {
    const { flags, args } = await this.parse(EnvAliasUnset);
    const environments = Environments.getInstance();

    try {
      const env = environments.get(flags.targetEnv);
      env.aliases = env.aliases.filter((alias) => alias !== args.alias);
      this.log(`Removing alias "${args.alias as string}" from ${flags.targetEnv}\n`);
    } catch (e) {
      this.log(`Failed to remove alias "${args.alias as string}" from ${flags.targetEnv}\n`);
      this.error(e, { exit: 1 });
    }

    return { flags, args };
  }
}
