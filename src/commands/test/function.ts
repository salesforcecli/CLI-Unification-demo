/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import SfCommand from '../../sf-command';

export default class TestFunction extends SfCommand {
  public static description = 'Runs Function testing suite';

  public static examples = ['sf test function'];

  public async run(): Promise<void> {
    this.log('Testing function...');
  }
}
