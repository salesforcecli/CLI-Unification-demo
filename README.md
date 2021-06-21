# clidoscope-demo

An experiment to explore a new taxonomy for all Salesforce clouds.

## Install

```bash
npm install --global @salesforce/sf-demo
sf help
```

## Contributing

1. Please read our [Code of Conduct](CODE_OF_CONDUCT.md)
2. Create a new issue before starting your project so that we can keep track of
   what you are trying to add/fix. That way, we can also offer suggestions or
   let you know if there is already an effort in progress.
3. Fork this repository.
4. [Build the plugin locally](#build)
5. Create a _topic_ branch in your fork. Note, this step is recommended but technically not required if contributing using a fork.
6. Edit the code in your fork.
7. Write appropriate tests for your changes. Try to achieve at least 95% code coverage on any new code. No pull request will be accepted without unit tests.
8. Sign CLA (see [CLA](#cla) below).
9. Send us a pull request when you are done. We'll review your code, suggest any needed changes, and merge it in.

### CLA

External contributors will be required to sign a Contributor's License
Agreement. You can do so by going to https://cla.salesforce.com/sign-cla.

### Build

To build the plugin locally, make sure to have yarn installed and run the following commands:

```bash
# Clone the repository
git clone git@github.com:salesforcecli/cli-taxonomy-experiment

# Install the dependencies and compile
yarn install
yarn build
```

To use your plugin, run using the local `./bin/dev` or `./bin/dev.cmd` file. To run off compiled code, use `./bin/run` or `./bin/run.cmd`.

```bash
# Run using local run file.
./bin/run <REPLACE_ME>
```

## Commands

<!-- commands -->
* [`sf config:get`](#sf-configget)
* [`sf config:list`](#sf-configlist)
* [`sf config:set`](#sf-configset)
* [`sf config:unset`](#sf-configunset)
* [`sf data:data`](#sf-datadata)
* [`sf env:alias:set [ALIAS]`](#sf-envaliasset-alias)
* [`sf env:alias:unset [ALIAS]`](#sf-envaliasunset-alias)
* [`sf env:create:compute [ENVNAME]`](#sf-envcreatecompute-envname)
* [`sf env:create:org [ENVNAME]`](#sf-envcreateorg-envname)
* [`sf env:display`](#sf-envdisplay)
* [`sf env:list`](#sf-envlist)
* [`sf env:log:get`](#sf-envlogget)
* [`sf env:log:list`](#sf-envloglist)
* [`sf env:log:tail`](#sf-envlogtail)
* [`sf env:logdrain:add`](#sf-envlogdrainadd)
* [`sf env:logdrain:list`](#sf-envlogdrainlist)
* [`sf env:logdrain:remove`](#sf-envlogdrainremove)
* [`sf env:open`](#sf-envopen)
* [`sf env:usage`](#sf-envusage)
* [`sf env:var:get`](#sf-envvarget)
* [`sf env:var:list`](#sf-envvarlist)
* [`sf env:var:set`](#sf-envvarset)
* [`sf env:var:unset`](#sf-envvarunset)
* [`sf event:event`](#sf-eventevent)
* [`sf generate:analytics:template`](#sf-generateanalyticstemplate)
* [`sf generate:apex:class`](#sf-generateapexclass)
* [`sf generate:apex:test`](#sf-generateapextest)
* [`sf generate:apex:trigger`](#sf-generateapextrigger)
* [`sf generate:community`](#sf-generatecommunity)
* [`sf generate:function`](#sf-generatefunction)
* [`sf generate:lightning:component`](#sf-generatelightningcomponent)
* [`sf generate:lightning:event`](#sf-generatelightningevent)
* [`sf generate:lightning:interface`](#sf-generatelightninginterface)
* [`sf generate:project`](#sf-generateproject)
* [`sf heroku:heroku`](#sf-herokuheroku)
* [`sf login`](#sf-login)
* [`sf login:functions`](#sf-loginfunctions)
* [`sf login:jwt`](#sf-loginjwt)
* [`sf login:org`](#sf-loginorg)
* [`sf logout`](#sf-logout)
* [`sf package:package`](#sf-packagepackage)
* [`sf plugins`](#sf-plugins)
* [`sf plugins:inspect PLUGIN...`](#sf-pluginsinspect-plugin)
* [`sf plugins:install PLUGIN...`](#sf-pluginsinstall-plugin)
* [`sf plugins:link PLUGIN`](#sf-pluginslink-plugin)
* [`sf plugins:uninstall PLUGIN...`](#sf-pluginsuninstall-plugin)
* [`sf plugins:update`](#sf-pluginsupdate)
* [`sf project:deploy`](#sf-projectdeploy)
* [`sf project:deploy:functions`](#sf-projectdeployfunctions)
* [`sf project:deploy:org`](#sf-projectdeployorg)
* [`sf project:deploy:retrieve:org`](#sf-projectdeployretrieveorg)
* [`sf reset`](#sf-reset)
* [`sf run:apex`](#sf-runapex)
* [`sf run:function`](#sf-runfunction)
* [`sf run:function:start`](#sf-runfunctionstart)
* [`sf test:apex`](#sf-testapex)
* [`sf test:function`](#sf-testfunction)
* [`sf usage`](#sf-usage)
* [`sf whoami`](#sf-whoami)

## `sf config:get`

get the configs

```
USAGE
  $ sf config:get

DESCRIPTION
  Get the configs.

EXAMPLE
  sf config get
```

_See code: [src/commands/config/get.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/config/get.ts)_

## `sf config:list`

list the configs

```
USAGE
  $ sf config:list

DESCRIPTION
  List the configs.

EXAMPLE
  sf config list
```

_See code: [src/commands/config/list.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/config/list.ts)_

## `sf config:set`

set configs

```
USAGE
  $ sf config:set

DESCRIPTION
  Set configs.

EXAMPLE
  sf config set
```

_See code: [src/commands/config/set.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/config/set.ts)_

## `sf config:unset`

unset configs

```
USAGE
  $ sf config:unset

DESCRIPTION
  Unset configs.

EXAMPLE
  sf config unset
```

_See code: [src/commands/config/unset.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/config/unset.ts)_

## `sf data:data`

Placeholder topic

```
USAGE
  $ sf data:data

EXAMPLE
  sf data ...
```

_See code: [src/commands/data/data.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/data/data.ts)_

## `sf env:alias:set [ALIAS]`

set env alias

```
USAGE
  $ sf env:alias:set [ALIAS]

OPTIONS
  -t, --targetEnv=targetEnv  The environment to set an alias for
  --json                     format output as json

DESCRIPTION
  Set an alias for an environment.

EXAMPLE
  sf env alias set [alias] -t [env]
```

_See code: [src/commands/env/alias/set.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/env/alias/set.ts)_

## `sf env:alias:unset [ALIAS]`

Unset env alias

```
USAGE
  $ sf env:alias:unset [ALIAS]

OPTIONS
  -t, --targetEnv=targetEnv  The environment to unset an alias for
  --json                     format output as json

DESCRIPTION
  Unset an alias for an environment.

EXAMPLE
  sf env alias unset [alias] -t [env]
```

_See code: [src/commands/env/alias/unset.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/env/alias/unset.ts)_

## `sf env:create:compute [ENVNAME]`

create a compute env

```
USAGE
  $ sf env:create:compute [ENVNAME]

DESCRIPTION
  Create a compute environment.

EXAMPLE
  sf env create compute
```

_See code: [src/commands/env/create/compute.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/env/create/compute.ts)_

## `sf env:create:org [ENVNAME]`

create a Salesforce org

```
USAGE
  $ sf env:create:org [ENVNAME]

DESCRIPTION
  Create a Salesforce org.

EXAMPLE
  sf env create org
```

_See code: [src/commands/env/create/org.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/env/create/org.ts)_

## `sf env:display`

display env

```
USAGE
  $ sf env:display

DESCRIPTION
  Display environment.

EXAMPLE
  sf env display
```

_See code: [src/commands/env/display.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/env/display.ts)_

## `sf env:list`

list connected enviornment

```
USAGE
  $ sf env:list

OPTIONS
  -x, --extended          show extra columns
  --columns=columns       only show provided columns (comma-separated)
  --csv                   output is csv format [alias: --output=csv]
  --filter=filter         filter property by partial string matching, ex: name=foo
  --json                  format output as json
  --no-header             hide table header from output
  --no-truncate           do not truncate output to fit screen
  --output=csv|json|yaml  output in a more machine friendly format
  --remote                include enviornments not yet connected
  --sort=sort             property to sort by (prepend '-' for descending)

DESCRIPTION
  List connected environment including Salesforce orgs, heroku apps, and compute enviornments (functions). Use --remote 
  to display all environments you have access to.

EXAMPLES
  sf env list
  sf env list --remote
```

_See code: [src/commands/env/list.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/env/list.ts)_

## `sf env:log:get`

Get env logs

```
USAGE
  $ sf env:log:get

EXAMPLE
  sf env log get
```

_See code: [src/commands/env/log/get.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/env/log/get.ts)_

## `sf env:log:list`

List env logs

```
USAGE
  $ sf env:log:list

EXAMPLE
  sf env log list
```

_See code: [src/commands/env/log/list.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/env/log/list.ts)_

## `sf env:log:tail`

Stream env logs

```
USAGE
  $ sf env:log:tail

EXAMPLE
  sf env log tail
```

_See code: [src/commands/env/log/tail.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/env/log/tail.ts)_

## `sf env:logdrain:add`

Adds a log drain or log handler

```
USAGE
  $ sf env:logdrain:add

EXAMPLE
  sf env logdrain add
```

_See code: [src/commands/env/logdrain/add.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/env/logdrain/add.ts)_

## `sf env:logdrain:list`

Lists log drains

```
USAGE
  $ sf env:logdrain:list

EXAMPLE
  sf env logdrain list
```

_See code: [src/commands/env/logdrain/list.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/env/logdrain/list.ts)_

## `sf env:logdrain:remove`

Removes a log drain or log handler

```
USAGE
  $ sf env:logdrain:remove

EXAMPLE
  sf env logdrain remove
```

_See code: [src/commands/env/logdrain/remove.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/env/logdrain/remove.ts)_

## `sf env:open`

open an envioronment on the browser

```
USAGE
  $ sf env:open

OPTIONS
  --browser=browser  browser to open env with (example: "firefox", "safari")
  --json             format output as json

DESCRIPTION
  Open an envioronment on the browser.

EXAMPLE
  sf env open --browser chrome
```

_See code: [src/commands/env/open.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/env/open.ts)_

## `sf env:usage`

show usage and limits for a specific environment

```
USAGE
  $ sf env:usage

OPTIONS
  -t, --targetEnv=targetEnv  target environment
  --json=json                format output as json

DESCRIPTION
  Show usage and limits for a specific environment.
```

_See code: [src/commands/env/usage.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/env/usage.ts)_

## `sf env:var:get`

Gets an environment variable from a remote environment

```
USAGE
  $ sf env:var:get

EXAMPLE
  sf env var get
```

_See code: [src/commands/env/var/get.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/env/var/get.ts)_

## `sf env:var:list`

Lists environment variables from a remote environment

```
USAGE
  $ sf env:var:list

EXAMPLE
  sf env var list
```

_See code: [src/commands/env/var/list.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/env/var/list.ts)_

## `sf env:var:set`

Sets an environment variable in a remote environment

```
USAGE
  $ sf env:var:set

EXAMPLE
  sf env var set
```

_See code: [src/commands/env/var/set.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/env/var/set.ts)_

## `sf env:var:unset`

Unsets an environment variable from a remote environment

```
USAGE
  $ sf env:var:unset

EXAMPLE
  sf env var unset
```

_See code: [src/commands/env/var/unset.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/env/var/unset.ts)_

## `sf event:event`

Placeholder topic

```
USAGE
  $ sf event:event

EXAMPLE
  sf event ...
```

_See code: [src/commands/event/event.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/event/event.ts)_

## `sf generate:analytics:template`

create an analytics template

```
USAGE
  $ sf generate:analytics:template

EXAMPLE
  sf generate analytics template
```

_See code: [src/commands/generate/analytics/template.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/generate/analytics/template.ts)_

## `sf generate:apex:class`

create an apex class

```
USAGE
  $ sf generate:apex:class

OPTIONS
  -n, --name=name  class name
  --json           format output as json

EXAMPLE
  sf generate apex class
```

_See code: [src/commands/generate/apex/class.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/generate/apex/class.ts)_

## `sf generate:apex:test`

create an apex test

```
USAGE
  $ sf generate:apex:test

EXAMPLE
  sf generate apex test
```

_See code: [src/commands/generate/apex/test.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/generate/apex/test.ts)_

## `sf generate:apex:trigger`

create an apex trigger

```
USAGE
  $ sf generate:apex:trigger

EXAMPLE
  sf generate apex trigger
```

_See code: [src/commands/generate/apex/trigger.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/generate/apex/trigger.ts)_

## `sf generate:community`

create a community

```
USAGE
  $ sf generate:community

OPTIONS
  -n, --name=name  community name
  --json           format output as json

EXAMPLE
  sf generate community
```

_See code: [src/commands/generate/community.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/generate/community.ts)_

## `sf generate:function`

create a function with basic scaffolding specific to a given language

```
USAGE
  $ sf generate:function

OPTIONS
  -l, --language=node|java  function language
  -n, --name=name           function module name
  --json                    format output as json

EXAMPLES
  sf generate function -l node mynodefunction
  sf generate function -l java myjavafunction
```

_See code: [src/commands/generate/function.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/generate/function.ts)_

## `sf generate:lightning:component`

create a lightning component

```
USAGE
  $ sf generate:lightning:component

EXAMPLE
  sf generate lightning component
```

_See code: [src/commands/generate/lightning/component.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/generate/lightning/component.ts)_

## `sf generate:lightning:event`

create a lightning event

```
USAGE
  $ sf generate:lightning:event

EXAMPLE
  sf generate lightning event
```

_See code: [src/commands/generate/lightning/event.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/generate/lightning/event.ts)_

## `sf generate:lightning:interface`

create a lightning interface

```
USAGE
  $ sf generate:lightning:interface

EXAMPLE
  sf generate lightning interface
```

_See code: [src/commands/generate/lightning/interface.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/generate/lightning/interface.ts)_

## `sf generate:project`

create a Salesforce project

```
USAGE
  $ sf generate:project

OPTIONS
  -n, --name=name  project name
  --json           format output as json

EXAMPLE
  sf generate project
```

_See code: [src/commands/generate/project.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/generate/project.ts)_

## `sf heroku:heroku`

Placeholder topic

```
USAGE
  $ sf heroku:heroku

EXAMPLE
  sf heroku ...
```

_See code: [src/commands/heroku/heroku.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/heroku/heroku.ts)_

## `sf login`

Log in interactively to Salesforce orgs and other services.

```
USAGE
  $ sf login

OPTIONS
  --json  format output as json

EXAMPLE
  sf login
```

_See code: [src/commands/login.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/login.ts)_

## `sf login:functions`

login to a Salesforce functions account

```
USAGE
  $ sf login:functions

OPTIONS
  -f, --jwt-file=jwt-file          file containing the JWT private key
  -i, --client-id=client-id        OAuth client ID (sometimes called the consumer key)
  --browser=chrome|firefox|safari  browser to open SSO with
  --json                           format output as json

EXAMPLES
  sf login functions
  sf login functions --jwt-file=./jwt.key --client-id XXXXXXXXXXXXXXX
```

_See code: [src/commands/login/functions.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/login/functions.ts)_

## `sf login:jwt`

headlessly login to a Salesforce organization using JSON Web Tokens

```
USAGE
  $ sf login:jwt

OPTIONS
  -f, --private-key-file=private-key-file  (required) path to a file containing the private key
  -i, --client-id=client-id                (required) OAuth client ID (sometimes called the consumer key)
  -r, --login-url=login-url                [default: https://login.salesforce.com] the login url of the auth provider
  -u, --username=username                  (required) authentication username
  --alias=alias                            set an alias for the account or environment
  --json                                   format output as json

DESCRIPTION
  headlessly login to a Salesforce organization using JSON Web Tokens

     Login using a JSON Web Tokens from a provided username, client id, and private key. Only Salesforce organizations 
  support this flow.

EXAMPLE
  sf login -i <client-id> -f <path-to-key-file> -u <username> -r https://<mydomain>.my.salesforce.com
```

_See code: [src/commands/login/jwt.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/login/jwt.ts)_

## `sf login:org`

login to a Salesforce account

```
USAGE
  $ sf login:org

OPTIONS
  -i, --client-id=client-id        OAuth client ID (sometimes called the consumer key)
  -r, --login-url=login-url        [default: https://login.salesforce.com] the login url of the auth provider
  --alias=alias                    set an alias for the environment - see all aliases using `sf env alias list`
  --browser=chrome|firefox|safari  browser to open SSO with
  --expires-in=expires-in          duration of token in seconds if supported by the auth provider (default 1 year)
  --json                           format output as json

EXAMPLES
  Example one
  sf login org
  The login-url parameter allows you to choose which domain to log into
  sf login org --login-url https://<mydomain>.my.salesforce.com
```

_See code: [src/commands/login/org.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/login/org.ts)_

## `sf logout`

logout of a Salesforce account or enviornment

```
USAGE
  $ sf logout

DESCRIPTION
  Logout of all accounts or a specific user.

EXAMPLES
  sf logout
  sf logout [user]
```

_See code: [src/commands/logout.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/logout.ts)_

## `sf package:package`

Placeholder topic

```
USAGE
  $ sf package:package

EXAMPLE
  sf package ...
```

_See code: [src/commands/package/package.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/package/package.ts)_

## `sf plugins`

list installed plugins

```
USAGE
  $ sf plugins

OPTIONS
  --core  show core plugins

EXAMPLE
  $ sf plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/index.ts)_

## `sf plugins:inspect PLUGIN...`

displays installation properties of a plugin

```
USAGE
  $ sf plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] plugin to inspect

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

EXAMPLE
  $ sf plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/inspect.ts)_

## `sf plugins:install PLUGIN...`

installs a plugin into the CLI

```
USAGE
  $ sf plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  plugin to install

OPTIONS
  -f, --force    yarn install with force flag
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command 
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in 
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ sf plugins:add

EXAMPLES
  $ sf plugins:install myplugin 
  $ sf plugins:install https://github.com/someuser/someplugin
  $ sf plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/install.ts)_

## `sf plugins:link PLUGIN`

links a plugin into the CLI for development

```
USAGE
  $ sf plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello' 
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLE
  $ sf plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/link.ts)_

## `sf plugins:uninstall PLUGIN...`

removes a plugin from the CLI

```
USAGE
  $ sf plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

ALIASES
  $ sf plugins:unlink
  $ sf plugins:remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/uninstall.ts)_

## `sf plugins:update`

update installed plugins

```
USAGE
  $ sf plugins:update

OPTIONS
  -h, --help     show CLI help
  -v, --verbose
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/update.ts)_

## `sf project:deploy`

deploy a Salesforce project

```
USAGE
  $ sf project:deploy

OPTIONS
  --directory=directory    directory to deploy
  --interactive            set
  --json                   format output as json
  --target-env=target-env  set

DESCRIPTION
  Deploy a project, including org metadata and functions. Be default, the deploy analyize your project and assume 
  sensible defaults when possible, otherwise it will prompt. To always prompt and not assume defaults, use 
  "--interctive".

     To run specialized deploys, especially when interactivity isn't an option like continuious deployment, used the 
  scoped deploy commands like "sf project deploy org" or "sf project deploy functions"

EXAMPLES
  sf project deploy
  sf project deploy --target-env=devhub
```

_See code: [src/commands/project/deploy.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/project/deploy.ts)_

## `sf project:deploy:functions`

Deploys a SF function

```
USAGE
  $ sf project:deploy:functions

EXAMPLE
  sf project deploy functions
```

_See code: [src/commands/project/deploy/functions.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/project/deploy/functions.ts)_

## `sf project:deploy:org`

deploy source to a salesforce org

```
USAGE
  $ sf project:deploy:org

OPTIONS
  -d, --directory=directory  list of paths to the local source files to deploy
  -m, --metadata=metadata    list of metadata component names
  -x, --manifest=manifest    file path for manifest (package.xml) of components to deploy
  --json                     format output as json
  --target-env=target-env    (required) environment you want to deploy to

EXAMPLES
  sf project deploy org --target-env=devhub
  sf project deploy org --directory force-app --target-env=devhub
  sf project deploy org --metadata ApexClass --target-env=devhub
  sf project deploy org --manifest package.xml --target-env=devhub
```

_See code: [src/commands/project/deploy/org.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/project/deploy/org.ts)_

## `sf project:deploy:retrieve:org`

Retrieve a SF org

```
USAGE
  $ sf project:deploy:retrieve:org

EXAMPLE
  sf project retrieve org
```

_See code: [src/commands/project/deploy/retrieve/org.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/project/deploy/retrieve/org.ts)_

## `sf reset`

reset data created by this CLI

```
USAGE
  $ sf reset
```

_See code: [src/commands/reset.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/reset.ts)_

## `sf run:apex`

Run Apex in a SF org

```
USAGE
  $ sf run:apex

EXAMPLE
  sf run apex
```

_See code: [src/commands/run/apex.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/run/apex.ts)_

## `sf run:function`

run a function locally

```
USAGE
  $ sf run:function

OPTIONS
  -h, --headers=headers  Set headers of payload request
  -l, --url=url          the local URL endpoint of the Function to be invoked
  -p, --payload=payload  The data to send to the function. Also accepts @file.txt format
  --json                 format output as json
  --structured           Send data as JSON

EXAMPLES
  sf run function -u http://localhost:8080 (http://localhost:8080/) -p '{"id": 12345}'
  sf run function -u http://localhost:8080 (http://localhost:8080/) -p '@file.json'
  echo '{"id": 12345}' | sf run function -u http://localhost:8080 (http://localhost:8080/)
  sf run function -u http://localhost:8080 (http://localhost:8080/) -p '{"id": 12345}' --structured
```

_See code: [src/commands/run/function.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/run/function.ts)_

## `sf run:function:start`

build and run function image locally

```
USAGE
  $ sf run:function:start

OPTIONS
  -d, --debug-port=debug-port        Port for remote debugging
  -e, --env=env                      Set environment variables (provided during build and run)
  -o, --connected-org=connected-org  Username or alias for the connected org
  -p, --port=port                    Port for running the function
  -v, --verbose                      Output additional logs
  --builder=builder                  Set custom builder image
  --clear-cache                      Clear associated cache before executing
  --json                             format output as json

  --network=network                  Connect and build containers to a network. This can be useful to build containers
                                     which require a local resource

  --no-pull                          Skip pulling builder image before use

EXAMPLES
  sf run function start
  sf run function start -e VAR=VALUE
  sf run function start --network host --no-pull --clear-cache --debug-port 9000
```

_See code: [src/commands/run/function/start.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/run/function/start.ts)_

## `sf test:apex`

Run Apex tests in a SF org

```
USAGE
  $ sf test:apex

EXAMPLE
  sf test apex
```

_See code: [src/commands/test/apex.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/test/apex.ts)_

## `sf test:function`

Runs Function testing suite

```
USAGE
  $ sf test:function

EXAMPLE
  sf test function
```

_See code: [src/commands/test/function.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/test/function.ts)_

## `sf usage`

show usage and limits across all Salesforce accounts

```
USAGE
  $ sf usage

OPTIONS
  --json=json  format output as json

DESCRIPTION
  Show usage and limits across all Salesforce accounts.
```

_See code: [src/commands/usage.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/usage.ts)_

## `sf whoami`

who the CLI thinks you are

```
USAGE
  $ sf whoami

DESCRIPTION
  Get information on accounts that have been logged into.
```

_See code: [src/commands/whoami.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.4.2/src/commands/whoami.ts)_
<!-- commandsstop -->
