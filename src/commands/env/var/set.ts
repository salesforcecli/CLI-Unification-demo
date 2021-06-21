/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import SfCommand from '../../../sf-command';

export default class EnvVarSet extends SfCommand {
  public static description = 'Sets an environment variable in a remote environment';

  public static examples = ['sf env var set'];

  public async run(): Promise<void> {
    this.log('Setting env var...');
  }
}
