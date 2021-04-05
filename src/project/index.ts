/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import { FunctionsDeployer } from './functions-deployer';
import { SalesforceDeployer } from './sf-deployer';

export { Deployer, DeployerOptions } from './deployer';
export { FunctionsDeployer } from './functions-deployer';
export { SalesforceDeployer } from './sf-deployer';

export const Deployers = [SalesforceDeployer, FunctionsDeployer];
