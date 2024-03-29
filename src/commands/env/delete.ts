/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { Flags, Errors } from '@oclif/core';
import { AnyJson } from '@salesforce/ts-types';
import { blue, cyan } from 'chalk';
import { Messages } from '@salesforce/core';
import SfCommand from '../../sf-command';
import Environments from '../../configs/environments';
import Aliases from '../../configs/aliases';

Messages.importMessagesDirectory(__dirname);
const messages = Messages.loadMessages('@salesforce/sf-demo', 'env.delete');

export default class EnvConnect extends SfCommand {
  public static summary = messages.getMessage('summary');
  public static description = messages.getMessage('description');

  public static examples = messages.getMessages('examples');

  public static hidden = true;
  public static flags = {
    name: Flags.string({
      description: 'name of the environment to delete',
      required: true,
    }),
    alias: Flags.string({
      char: 'a',
      description: 'alias of the environment to delete',
    }),
  };

  public async run(): Promise<AnyJson> {
    const { flags, args } = await this.parse(EnvConnect);

    const remotes = await Environments.retrieveRemote();

    const environment = remotes.find((remote) => remote.name === flags.name);

    if (!environment) {
      throw new Errors.CLIError(
        `No remote environment ${flags.name} found.\n\n - Try ${blue(
          'sf env list --remotes'
        )} to see environments to connect to.`,
        {
          // This doesn't work... TODO figure out why
          suggestions: [`Try ${blue('sf env list --remotes')} to see environments to connect to.`],
        }
      );
    }
    await Environments.connect(environment);

    if (flags.alias) {
      Aliases.set(flags.alias, flags.name);
    }

    this.log(`Connected to ${cyan(flags.name)}`);
    return { flags, args };
  }
}
