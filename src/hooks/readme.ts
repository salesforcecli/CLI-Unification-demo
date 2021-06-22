/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { Hook, Interfaces } from '@oclif/core';

/**
 * A hook that runs before every command
 */
const hook: Hook.Init = async function (options: Interfaces.Hooks['init']): Promise<void> {
  // this.config.
  if (options.id === 'readme') {
    this.config.commands.forEach((cmd) => {
      cmd.id = cmd.id.replace(/:/g, ' ');
    });
  }
};

export default hook;
