/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { Flags, Command } from '@oclif/core';
import { AnyJson } from '@salesforce/ts-types';

export default class List extends Command {
  public static description = '';

  public static examples = [];

  public static args = [{ name: 'file' }];

  public static flags = {
    name: Flags.string({
      char: 'n',
      description: '',
    }),
  };

  public async run(): Promise<AnyJson> {
    const { flags, args } = await this.parse(List);
    return { flags, args };
  }
}
