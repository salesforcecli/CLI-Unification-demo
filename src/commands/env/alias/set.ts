/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { AnyJson } from '@salesforce/ts-types';
import { Flags } from '@oclif/core';

import { Messages } from '@salesforce/core';
import SfCommand from '../../../sf-command';

Messages.importMessagesDirectory(__dirname);
const messages = Messages.loadMessages('@salesforce/sf-demo', 'env.alias.set');

export default class EnvAliasSet extends SfCommand {
  public static summary = messages.getMessage('summary');
  public static description = messages.getMessage('description');

  public static examples = messages.getMessages('examples');

  public static args = [{ name: 'alias' }];

  public static flags = {
    targetEnv: Flags.string({
      char: 't',
      description: 'The environment to set an alias for',
    }),
  };

  public async run(): Promise<AnyJson> {
    const { flags, args } = await this.parse(EnvAliasSet);

    this.log(`Setting ${args.alias as string} as ${flags.targetEnv}...\n`);

    return { flags, args };
  }
}
