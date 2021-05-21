/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import * as path from 'path';
import { Flags } from '@oclif/core';
import { sleep } from '@salesforce/kit';
import { AnyJson } from '@salesforce/ts-types';
import { green } from 'chalk';
import { cli } from 'cli-ux';

import SfCommand from '../../sf-command';

export default class RunFunction extends SfCommand {
  public static description = 'run a function locally';

  public static examples = [
    'sf run function -u http://localhost:8080 (http://localhost:8080/) -p \'{"id": 12345}\'',
    "sf run function -u http://localhost:8080 (http://localhost:8080/) -p '@file.json'",
    'echo \'{"id": 12345}\' | sf run function -u http://localhost:8080 (http://localhost:8080/)',
    'sf run function -u http://localhost:8080 (http://localhost:8080/) -p \'{"id": 12345}\' --structured',
  ];

  public static flags = {
    headers: Flags.string({
      description: 'Set headers of payload request',
      char: 'h',
    }),
    url: Flags.string({
      description: 'the local URL endpoint of the Function to be invoked',
      char: 'l',
    }),
    payload: Flags.string({
      char: 'p',
      description: 'The data to send to the function. Also accepts @file.txt format',
    }),
    structured: Flags.boolean({
      description: 'Send data as JSON',
    }),
  };

  public async run(): Promise<AnyJson> {
    const { flags } = await this.parse(RunFunction);
    if (!path.dirname(process.cwd()).endsWith('functions')) {
      throw new Error('This command must be run from a functions directory');
    }
    cli.action.start('Initializing context');
    await sleep(500);
    cli.action.stop(green('done'));
    if (flags.url) {
      cli.action.start(`POST: ${flags.url}`);
      await sleep(1000);
      cli.action.stop(green('200'));
    }

    if (flags.payload) {
      this.log(JSON.stringify({ done: true, totalSize: 0, records: [] }));
    }
    return {};
  }
}
