/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import SfCommand from '../../../sf-command';

export default class GenerateLightningInterface extends SfCommand {
  public static description = 'create a lightning interface';

  public static examples = ['sf generate lightning interface'];

  public async run(): Promise<void> {
    this.log('Created lightning interface.');
  }
}
