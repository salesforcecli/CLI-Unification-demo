/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import * as path from 'path';
import { Flags } from '@oclif/core';
import { sleep } from '@salesforce/kit';
import { AnyJson } from '@salesforce/ts-types';
import { green } from 'chalk';

import SfCommand from '../../../sf-command';

export default class RunFunctionStart extends SfCommand {
  public static description = 'build and run function image locally';

  public static examples = [
    'sf run function start',
    'sf run function start -e VAR=VALUE',
    'sf run function start --network host --no-pull --clear-cache --debug-port 9000',
  ];

  public static flags = {
    'debug-port': Flags.string({
      description: 'Port for remote debugging',
      char: 'd',
    }),
    env: Flags.string({
      description: 'Set environment variables (provided during build and run)',
      char: 'e',
    }),
    port: Flags.string({
      description: 'Port for running the function',
      char: 'p',
    }),
    'connected-org': Flags.string({
      description: 'Username or alias for the connected org',
      char: 'o',
    }),
    verbose: Flags.boolean({
      description: 'Output additional logs',
      char: 'v',
    }),
    builder: Flags.string({
      description: 'Set custom builder image',
    }),
    'clear-cache': Flags.boolean({
      description: 'Clear associated cache before executing',
    }),
    network: Flags.string({
      description:
        'Connect and build containers to a network. This can be useful to build containers which require a local resource',
    }),
    'no-pull': Flags.boolean({
      description: 'Skip pulling builder image before use',
    }),
  };

  public async run(): Promise<AnyJson> {
    if (!path.dirname(process.cwd()).endsWith('functions')) {
      throw new Error('This command must be run from a functions directory');
    }

    const functionName = path.basename(process.cwd());

    this.log(`${green('Building')} ${functionName}`);
    await sleep(1000);
    this.mockLogs();

    return {};
  }

  public mockLogs(): void {
    this.log(`20: Pulling from heroku/buildpacks
Digest: sha256:ffcbca462c777cecf7b31081224904bf069f62067460d4fa62f8ac4b3ed077c8
Status: Image is up to date for heroku/buildpacks:20
20: Pulling from heroku/pack
Digest: sha256:1becdc661d667b0670d63a33b37eeec347cc24665f348ede6dfa26fdb9d976a0
Status: Image is up to date for heroku/pack:20
===> DETECTING
======== Output: heroku/ruby@0.0.1 ========
no
err:  heroku/ruby@0.0.1 (1)
3 of 4 buildpacks participating
heroku/nodejs-engine           0.7.3
heroku/nodejs-npm              0.4.3
heroku/nodejs-function-invoker 0.1.5
===> ANALYZING
Restoring metadata for "heroku/nodejs-engine:nodejs" from app image
Restoring metadata for "heroku/nodejs-engine:toolbox" from cache
Restoring metadata for "heroku/nodejs-function-invoker:opt" from app image
Restoring metadata for "heroku/nodejs-function-invoker:sf-fx-runtime-nodejs" from app image
===> RESTORING
Restoring data for "heroku/nodejs-engine:nodejs" from cache
Restoring data for "heroku/nodejs-engine:toolbox" from cache
===> BUILDING
[INFO] Node.js Buildpack
[INFO] Setting NODE_ENV to production
[INFO] Installing toolbox
[Installing Node]
[INFO] Getting Node version
[INFO] Resolving Node version
[INFO] Reusing Node v14.17.0
[Parsing package.json]
[INFO] Parsing package.json
[INFO] Using npm v6.14.13 from Node
[INFO] Installing node modules
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.1 (node_modules/chokidar/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
audited 221 packages in 7.399s
found 0 vulnerabilities
up to date in 0.527s
found 0 vulnerabilities
[INFO] Successfully pruned devdependencies!
[Installing Node.js function runtime]
[INFO] Starting download of function runtime
[INFO] Download of function runtime successful
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated har-validator@5.1.5: this library is no longer supported
/layers/heroku_nodejs-function-invoker/sf-fx-runtime-nodejs/bin/sf-fx-runtime-nodejs -> /layers/heroku_nodejs-function-invoker/sf-fx-runtime-nodejs/lib/node_modules/sf-fx-runtime-nodejs/bin/invoke.js
> dtrace-provider@0.6.0 install /layers/heroku_nodejs-function-invoker/sf-fx-runtime-nodejs/lib/node_modules/sf-fx-runtime-nodejs/node_modules/dtrace-provider
> node scripts/install.js
> core-js@3.12.1 postinstall /layers/heroku_nodejs-function-invoker/sf-fx-runtime-nodejs/lib/node_modules/sf-fx-runtime-nodejs/node_modules/core-js
> node -e "try{require('./postinstall')}catch(e){}"
Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!
The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
> https://opencollective.com/core-js
> https://www.patreon.com/zloirock
Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)
> core-js-pure@3.12.1 postinstall /layers/heroku_nodejs-function-invoker/sf-fx-runtime-nodejs/lib/node_modules/sf-fx-runtime-nodejs/node_modules/core-js-pure
> node -e "try{require('./postinstall')}catch(e){}"
+ sf-fx-runtime-nodejs@0.1.0-ea
added 242 packages from 300 contributors in 26.62s
[INFO] Function runtime installation successful
===> EXPORTING
Adding layer 'heroku/nodejs-engine:nodejs'
Reusing layer 'heroku/nodejs-function-invoker:opt'
Adding layer 'heroku/nodejs-function-invoker:sf-fx-runtime-nodejs'
Adding 1/1 app layer(s)
Reusing layer 'launcher'
Adding layer 'config'
Reusing layer 'process-types'
Adding label 'io.buildpacks.lifecycle.metadata'
Adding label 'io.buildpacks.build.metadata'
Adding label 'io.buildpacks.project.metadata'
Setting default process type 'web'
Saving fn1...
*** Images (fdd9373a1b02):
    fn1
Adding cache layer 'heroku/nodejs-engine:nodejs'
Reusing cache layer 'heroku/nodejs-engine:toolbox'
Starting fn1
Running on port :8080
Debugger running on port :9229
Debugger listening on ws://0.0.0.0:9229/4099e75d-5919-4c12-8b18-ca11dc1095ce
For help, see: https://nodejs.org/en/docs/inspector`);
  }
}
