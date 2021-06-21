/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import SfCommand from '../../../sf-command';

export default class EnvLogGet extends SfCommand {
  public static description = 'Stream env logs';

  public static examples = ['sf env log tail'];

  public async run(): Promise<void> {
    this.log('Streaming env logs...');
  }
}
