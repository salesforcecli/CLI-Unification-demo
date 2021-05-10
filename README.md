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
* [`sf data:export`](#sf-dataexport)
* [`sf data:import`](#sf-dataimport)
* [`sf data:query`](#sf-dataquery)
* [`sf data:record`](#sf-datarecord)
* [`sf data:schema:describe`](#sf-dataschemadescribe)
* [`sf env:alias:set [ALIAS]`](#sf-envaliasset-alias)
* [`sf env:alias:unset [ALIAS]`](#sf-envaliasunset-alias)
* [`sf env:connect`](#sf-envconnect)
* [`sf env:create:compute [ENVNAME]`](#sf-envcreatecompute-envname)
* [`sf env:create:org [ENVNAME]`](#sf-envcreateorg-envname)
* [`sf env:display`](#sf-envdisplay)
* [`sf env:list`](#sf-envlist)
* [`sf env:open`](#sf-envopen)
* [`sf env:setup`](#sf-envsetup)
* [`sf env:usage`](#sf-envusage)
* [`sf event:create:event`](#sf-eventcreateevent)
* [`sf event:create:topic`](#sf-eventcreatetopic)
* [`sf event:list`](#sf-eventlist)
* [`sf event:send`](#sf-eventsend)
* [`sf event:subscribe`](#sf-eventsubscribe)
* [`sf event:unsubscribe`](#sf-eventunsubscribe)
* [`sf login`](#sf-login)
* [`sf login:functions`](#sf-loginfunctions)
* [`sf login:jwt`](#sf-loginjwt)
* [`sf logout`](#sf-logout)
* [`sf package:create`](#sf-packagecreate)
* [`sf package:install`](#sf-packageinstall)
* [`sf package:list`](#sf-packagelist)
* [`sf package:update`](#sf-packageupdate)
* [`sf project:deploy`](#sf-projectdeploy)
* [`sf reset`](#sf-reset)
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

_See code: [src/commands/config/get.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.3.0/src/commands/config/get.ts)_

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

_See code: [src/commands/config/list.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.3.0/src/commands/config/list.ts)_

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

_See code: [src/commands/config/set.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.3.0/src/commands/config/set.ts)_

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

_See code: [src/commands/config/unset.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.3.0/src/commands/config/unset.ts)_

## `sf data:export`

export data

```
USAGE
  $ sf data:export

DESCRIPTION
  Export data.

EXAMPLE
  sf data export
```

_See code: [src/commands/data/export.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.3.0/src/commands/data/export.ts)_

## `sf data:import`

import data

```
USAGE
  $ sf data:import

DESCRIPTION
  import data.

EXAMPLE
  sf data import
```

_See code: [src/commands/data/import.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.3.0/src/commands/data/import.ts)_

## `sf data:query`

query data

```
USAGE
  $ sf data:query

DESCRIPTION
  Query data.

EXAMPLE
  sf data query
```

_See code: [src/commands/data/query.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.3.0/src/commands/data/query.ts)_

## `sf data:record`

record data

```
USAGE
  $ sf data:record

DESCRIPTION
  Record data.

EXAMPLE
  sf data record
```

_See code: [src/commands/data/record.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.3.0/src/commands/data/record.ts)_

## `sf data:schema:describe`

describe the data schema

```
USAGE
  $ sf data:schema:describe

DESCRIPTION
  Describe the data schema.

EXAMPLE
  sf data schema describe
```

_See code: [src/commands/data/schema/describe.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.3.0/src/commands/data/schema/describe.ts)_

## `sf env:alias:set [ALIAS]`

set env alias

```
USAGE
  $ sf env:alias:set [ALIAS]

OPTIONS
  -t, --targetEnv=targetEnv  The environment to set an alias for

DESCRIPTION
  Set an alias for an environment.

EXAMPLE
  sf env alias set [alias] -t [env]
```

_See code: [src/commands/env/alias/set.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.3.0/src/commands/env/alias/set.ts)_

## `sf env:alias:unset [ALIAS]`

Unset env alias

```
USAGE
  $ sf env:alias:unset [ALIAS]

OPTIONS
  -t, --targetEnv=targetEnv  The environment to unset an alias for

DESCRIPTION
  Unset an alias for an environment.

EXAMPLE
  sf env alias unset [alias] -t [env]
```

_See code: [src/commands/env/alias/unset.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.3.0/src/commands/env/alias/unset.ts)_

## `sf env:connect`

connect to a remote enviornment

```
USAGE
  $ sf env:connect

OPTIONS
  --alias=alias  alias to give to the environment
  --name=name    (required) name of the remote environment to connect to

DESCRIPTION
```

_See code: [src/commands/env/connect.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.3.0/src/commands/env/connect.ts)_

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

_See code: [src/commands/env/create/compute.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.3.0/src/commands/env/create/compute.ts)_

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

_See code: [src/commands/env/create/org.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.3.0/src/commands/env/create/org.ts)_

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

_See code: [src/commands/env/display.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.3.0/src/commands/env/display.ts)_

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

_See code: [src/commands/env/list.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.3.0/src/commands/env/list.ts)_

## `sf env:open`

open an envioronment on the browser

```
USAGE
  $ sf env:open

OPTIONS
  --browser=browser  browser to open env with (example: "firefox", "safari")

DESCRIPTION
  Open an envioronment on the browser.

EXAMPLE
  sf env open --browser chrome
```

_See code: [src/commands/env/open.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.3.0/src/commands/env/open.ts)_

## `sf env:setup`

setup env

```
USAGE
  $ sf env:setup

DESCRIPTION
  Setup environment.

EXAMPLE
  sf env setup
```

_See code: [src/commands/env/setup.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.3.0/src/commands/env/setup.ts)_

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

_See code: [src/commands/env/usage.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.3.0/src/commands/env/usage.ts)_

## `sf event:create:event`

create an event

```
USAGE
  $ sf event:create:event

DESCRIPTION
  Create an event.

EXAMPLE
  sf event create event
```

_See code: [src/commands/event/create/event.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.3.0/src/commands/event/create/event.ts)_

## `sf event:create:topic`

create an event topic

```
USAGE
  $ sf event:create:topic

DESCRIPTION
  Create an event topic.

EXAMPLE
  sf event create topic
```

_See code: [src/commands/event/create/topic.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.3.0/src/commands/event/create/topic.ts)_

## `sf event:list`

list events

```
USAGE
  $ sf event:list

DESCRIPTION
  List events.

EXAMPLE
  sf event list
```

_See code: [src/commands/event/list.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.3.0/src/commands/event/list.ts)_

## `sf event:send`

send events

```
USAGE
  $ sf event:send

DESCRIPTION
  Send events.

EXAMPLE
  sf event send
```

_See code: [src/commands/event/send.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.3.0/src/commands/event/send.ts)_

## `sf event:subscribe`

subscribe to an event

```
USAGE
  $ sf event:subscribe

DESCRIPTION
  Subscribe to an event.

EXAMPLE
  sf event subscribe
```

_See code: [src/commands/event/subscribe.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.3.0/src/commands/event/subscribe.ts)_

## `sf event:unsubscribe`

unsubscribe to an event

```
USAGE
  $ sf event:unsubscribe

DESCRIPTION
  Unsubscribe to an event.

EXAMPLE
  sf event unsubscribe
```

_See code: [src/commands/event/unsubscribe.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.3.0/src/commands/event/unsubscribe.ts)_

## `sf login`

login to a Salesforce account or enviornment

```
USAGE
  $ sf login

OPTIONS
  -i, --client-id=client-id  OAuth client ID (sometimes called the consumer key)
  -r, --login-url=login-url  [default: https://login.salesforce.com] the login url of the auth provider
  --alias=alias              set an alias for the environment - see all aliases using `sf env alias list`
  --browser=browser          browser to open SSO with (example: "firefox", "safari")
  --expires-in=expires-in    duration of token in seconds if supported by the auth provider (default 1 year)

DESCRIPTION
  Login to https://login.salesforce.com in a browser. To login to different providers (Salesforce org, heroku, commerce 
  cloud, mulesoft, etc) sepecify the domain or login url of the service. For example, '--instance-url=heroku.com'.

EXAMPLES
  sf login --instance-url https://<mydomain>.my.salesforce.com
  sf login --instance-url heroku.com
```

_See code: [src/commands/login.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.3.0/src/commands/login.ts)_

## `sf login:functions`

login to a Salesforce functions account

```
USAGE
  $ sf login:functions

OPTIONS
  -f, --jwt-file             file containing the JWT private key
  -i, --client-id=client-id  OAuth client ID (sometimes called the consumer key)
  --browser=browser          browser to open SSO with (example: "firefox", "safari")

EXAMPLES
  sf login functions
  sf login functions --jwt-file=./jwt.key --client-id XXXXXXXXXXXXXXX
```

_See code: [src/commands/login/functions.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.3.0/src/commands/login/functions.ts)_

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

DESCRIPTION
  headlessly login to a Salesforce organization using JSON Web Tokens

     Login using a JSON Web Tokens from a provided username, client id, and private key. Only Salesforce organizations 
  support this flow.

EXAMPLE
  sf login -i <client-id> -f <path-to-key-file> -u <username> -r https://<mydomain>.my.salesforce.com
```

_See code: [src/commands/login/jwt.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.3.0/src/commands/login/jwt.ts)_

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

_See code: [src/commands/logout.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.3.0/src/commands/logout.ts)_

## `sf package:create`

create packages

```
USAGE
  $ sf package:create

DESCRIPTION
  Create packages.

EXAMPLE
  sf package create
```

_See code: [src/commands/package/create.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.3.0/src/commands/package/create.ts)_

## `sf package:install`

install packages

```
USAGE
  $ sf package:install

DESCRIPTION
  Install packages.

EXAMPLE
  sf package install
```

_See code: [src/commands/package/install.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.3.0/src/commands/package/install.ts)_

## `sf package:list`

list packages

```
USAGE
  $ sf package:list

DESCRIPTION
  List packages.

EXAMPLE
  sf package list
```

_See code: [src/commands/package/list.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.3.0/src/commands/package/list.ts)_

## `sf package:update`

update packages

```
USAGE
  $ sf package:update

DESCRIPTION
  Update packages.

EXAMPLE
  sf package update
```

_See code: [src/commands/package/update.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.3.0/src/commands/package/update.ts)_

## `sf project:deploy`

deploy a Salesforce project

```
USAGE
  $ sf project:deploy

OPTIONS
  --directory=directory    directory to deploy
  --interactive            set
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

_See code: [src/commands/project/deploy.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.3.0/src/commands/project/deploy.ts)_

## `sf reset`

reset data created by this CLI

```
USAGE
  $ sf reset
```

_See code: [src/commands/reset.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.3.0/src/commands/reset.ts)_

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

_See code: [src/commands/usage.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.3.0/src/commands/usage.ts)_

## `sf whoami`

who the CLI thinks you are

```
USAGE
  $ sf whoami

DESCRIPTION
  Get information on accounts that have been logged into.
```

_See code: [src/commands/whoami.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.3.0/src/commands/whoami.ts)_
<!-- commandsstop -->
