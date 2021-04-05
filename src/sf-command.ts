/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { Command } from '@oclif/core';

import Accounts from './configs/account';
import Environments from './configs/environments';
import Aliases from './configs/aliases';

export default abstract class SfCommand extends Command {
  protected accounts = Accounts.getInstance();
  protected environments = Environments.getInstance();
  protected aliases = Aliases.getInstance();
}
