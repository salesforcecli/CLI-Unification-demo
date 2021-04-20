/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { AnyJson } from '@salesforce/ts-types';
import { Flags } from '@oclif/core';

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

    this.log(`Unsetting ${args.alias as string} as ${flags.targetEnv}...\n`);

    return { flags, args };
  }
}
