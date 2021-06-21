/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import SfCommand from '../../../sf-command';

export default class EnvLogdrainAdd extends SfCommand {
  public static description = 'Adds a log drain or log handler';

  public static examples = ['sf env logdrain add'];

  public async run(): Promise<void> {
    this.log('Adding log drain...');
  }
}
