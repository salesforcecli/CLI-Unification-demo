/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { Flags, Errors } from '@oclif/core';
import { AnyJson } from '@salesforce/ts-types';
import { blue, cyan } from 'chalk';
import SfCommand from '../../sf-command';
import Environments from '../../configs/environments';
import Aliases from '../../configs/aliases';

export default class EnvConnect extends SfCommand {
  public static description = `connect to a remote enviornment

  
  `;

  public static examples = [];

  public static flags = {
    name: Flags.string({
      description: 'name of the remote environment to connect to',
      required: true,
    }),
    alias: Flags.string({
      description: 'alias to give to the environment',
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
