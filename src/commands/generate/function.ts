/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { Flags } from '@oclif/core';
import { Messages } from '@salesforce/core';
import { AnyJson } from '@salesforce/ts-types';
import { green } from 'chalk';

import SfCommand from '../../sf-command';

Messages.importMessagesDirectory(__dirname);
const messages = Messages.loadMessages('@salesforce/sf-demo', 'generate.function');

export default class GenerateFunction extends SfCommand {
  public static summary = messages.getMessage('summary');
  public static description = messages.getMessage('description');

  public static examples = messages.getMessages('examples');

  public static flags = {
    language: Flags.string({
      description: 'function language',
      char: 'l',
      options: ['node', 'java'],
    }),
    name: Flags.string({
      description: 'function module name',
      char: 'n',
    }),
  };

  public async run(): Promise<AnyJson> {
    const { flags } = await this.parse(GenerateFunction);
    this.log(`Created ${flags.language} function ${green(flags.name)} in functions/${green(flags.name)}.`);
    return {};
  }
}
