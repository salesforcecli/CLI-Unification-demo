/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import SfCommand from '../../../sf-command';

export default class EnvLogdrainRemove extends SfCommand {
  public static description = 'Removes a log drain or log handler';

  public static examples = ['sf env logdrain remove'];

  public async run(): Promise<void> {
    this.log('Removing log drain...');
  }
}
