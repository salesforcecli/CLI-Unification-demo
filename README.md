# clidoscope-demo

An experiment to explore a new taxonomy for all Salesforce clouds.

## Install

```bash
npm install --global @salesforce/clidoscope
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

- [`sf env:list`](#sf-envlist)
- [`sf login`](#sf-login)
- [`sf login:jwt`](#sf-loginjwt)
- [`sf reset`](#sf-reset)
- [`sf whoami`](#sf-whoami)

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

_See code: [src/commands/env/list.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.0.2/src/commands/env/list.ts)_

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

_See code: [src/commands/login.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.0.2/src/commands/login.ts)_

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

_See code: [src/commands/login/jwt.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.0.2/src/commands/login/jwt.ts)_

## `sf reset`

reset data created by this CLI

```
USAGE
  $ sf reset
```

_See code: [src/commands/reset.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.0.2/src/commands/reset.ts)_

## `sf whoami`

who the CLI thinks you are

```
USAGE
  $ sf whoami

DESCRIPTION
  Get information on accounts that have been logged into.
```

_See code: [src/commands/whoami.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.0.2/src/commands/whoami.ts)_

<!-- commandsstop -->
