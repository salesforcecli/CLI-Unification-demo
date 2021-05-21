/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { Flags } from '@oclif/core';
import { AnyJson } from '@salesforce/ts-types';

import SfCommand from '../../sf-command';
import { Browser, loginFunctions } from '../../utils';

export default class FunctionsLogin extends SfCommand {
  public static description = 'login to a Salesforce functions account';

  public static examples = [
    'sf login functions',
    'sf login functions --jwt-file=./jwt.key --client-id XXXXXXXXXXXXXXX',
  ];

  public static flags = {
    browser: Flags.string({
      description: 'browser to open SSO with',
      options: [Browser.CHROME, Browser.FIREFOX, Browser.SAFARI],
    }),
    'jwt-file': Flags.string({
      char: 'f',
      description: 'file containing the JWT private key',
    }),
    'client-id': Flags.string({
      char: 'i',
      description: 'OAuth client ID (sometimes called the consumer key)',
      dependsOn: ['jwt-file'],
    }),
  };

  public async run(): Promise<AnyJson> {
    const { flags } = await this.parse(FunctionsLogin);
    return loginFunctions({
      browser: flags.browser,
      clientId: flags['client-id'],
      jwtFile: flags['jwt-file'],
    });
  }
}
