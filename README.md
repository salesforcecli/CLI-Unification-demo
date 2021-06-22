# Develop Across Salesforce With One CLI

Welcome to the Salesforce CLI Unification Demo CLI repo. We’re designing a new taxonomy and structure for Salesforce CLI with the intention of unifying all of Salesforce’s products under one CLI. Our goal is to provide a seamless developer experience when building applications on any Salesforce product as well as across products. The demo CLI is an interactive simulation that implements the new taxonomy and common workflows, although it doesn't actually do anything or change your environment. Only a handful of commands have full help content. Please test it out and tell us what you think.

## Strategy

See [Strategy and Strucuture](STRATEGY.md) for more details.

## Install

```bash
npm install --global @salesforce/sf-demo
sf help
```

## Feedback

We built this demo CLI because we want feedback from the Salesforce Developer Community on the new structure. We also want to know whether our new design feels natural and is what you'd expect in a unified CLI experience. To provide feedback, use the issues tab in this repository.

Here’s the type of feedback we’re looking for:

- Overall impressions.
- How your experience could be improved. In particular:
  - Was it easy to navigate?
  - The commands: `sf project deploy`, `sf login`, and `sf env list` (along with a few others) have the updated help structure and output. Is it useful?
  - `sf login`, `sf env list`, and `sf project deploy` all simulate the cross cloud experience. Is this what you expected? What did you like? How could they be better?
- Are there `sfdx` commands that you use often but are missing from this demo CLI? (Note that this demo CLI doesn’t include all the commands that we plan to have in `sf`. )
- What did you like?
- What could be better?

## Demo

There are two types of commands in this demo:

1. Commands that simulate real workflows.
2. Static commands provided to showcase the overall design, structure, and direction.

_Simulation commands_
Try running running the following commands:

- sf login
- sf project deploy
- sf env list
- sf whoami

_Static commands_
These topics are speculative and are provided as an example of the types of topics that we expect to deliver. Please review them and provide feedback. Run --help with different levels of the demo CLI to navigate the tree. For example, `sf --help` shows the top-level topics and commands, `sf project --help` shows the subtopics and commands under `project`, and so on.

## Commands

<!-- commands -->

- [`sf config get`](#sf-config-get)
- [`sf config list`](#sf-config-list)
- [`sf config set`](#sf-config-set)
- [`sf config unset`](#sf-config-unset)
- [`sf data data`](#sf-data-data)
- [`sf env alias set [ALIAS]`](#sf-env-alias-set-alias)
- [`sf env alias unset [ALIAS]`](#sf-env-alias-unset-alias)
- [`sf env create compute [ENVNAME]`](#sf-env-create-compute-envname)
- [`sf env create org [ENVNAME]`](#sf-env-create-org-envname)
- [`sf env display`](#sf-env-display)
- [`sf env list`](#sf-env-list)
- [`sf env log get`](#sf-env-log-get)
- [`sf env log list`](#sf-env-log-list)
- [`sf env log tail`](#sf-env-log-tail)
- [`sf env logdrain add`](#sf-env-logdrain-add)
- [`sf env logdrain list`](#sf-env-logdrain-list)
- [`sf env logdrain remove`](#sf-env-logdrain-remove)
- [`sf env open`](#sf-env-open)
- [`sf env usage`](#sf-env-usage)
- [`sf env var get`](#sf-env-var-get)
- [`sf env var list`](#sf-env-var-list)
- [`sf env var set`](#sf-env-var-set)
- [`sf env var unset`](#sf-env-var-unset)
- [`sf event event`](#sf-event-event)
- [`sf generate analytics template`](#sf-generate-analytics-template)
- [`sf generate apex class`](#sf-generate-apex-class)
- [`sf generate apex test`](#sf-generate-apex-test)
- [`sf generate apex trigger`](#sf-generate-apex-trigger)
- [`sf generate community`](#sf-generate-community)
- [`sf generate function`](#sf-generate-function)
- [`sf generate lightning component`](#sf-generate-lightning-component)
- [`sf generate lightning event`](#sf-generate-lightning-event)
- [`sf generate lightning interface`](#sf-generate-lightning-interface)
- [`sf generate project`](#sf-generate-project)
- [`sf heroku heroku`](#sf-heroku-heroku)
- [`sf login`](#sf-login)
- [`sf login functions`](#sf-login-functions)
- [`sf login org`](#sf-login-org)
- [`sf login org jwt`](#sf-login-org-jwt)
- [`sf logout`](#sf-logout)
- [`sf logout org`](#sf-logout-org)
- [`sf package package`](#sf-package-package)
- [`sf plugins`](#sf-plugins)
- [`sf plugins:inspect PLUGIN...`](#sf-pluginsinspect-plugin)
- [`sf plugins:install PLUGIN...`](#sf-pluginsinstall-plugin)
- [`sf plugins:link PLUGIN`](#sf-pluginslink-plugin)
- [`sf plugins:uninstall PLUGIN...`](#sf-pluginsuninstall-plugin)
- [`sf plugins update`](#sf-plugins-update)
- [`sf project deploy`](#sf-project-deploy)
- [`sf project deploy functions`](#sf-project-deploy-functions)
- [`sf project deploy org`](#sf-project-deploy-org)
- [`sf project retrieve`](#sf-project-retrieve)
- [`sf project retrieve org`](#sf-project-retrieve-org)
- [`sf reset`](#sf-reset)
- [`sf run apex`](#sf-run-apex)
- [`sf run function`](#sf-run-function)
- [`sf run function start`](#sf-run-function-start)
- [`sf test apex`](#sf-test-apex)
- [`sf test function`](#sf-test-function)
- [`sf usage`](#sf-usage)
- [`sf whoami`](#sf-whoami)

## `sf config get`

```
USAGE
  $ sf config get

EXAMPLE
  Get your default username.
  sf config get defaultusername
```

## `sf config list`

Local configuration values apply only to your current project. Global values apply in any directory.

```
USAGE
  $ sf config list
```

## `sf config set`

Local configuration values apply only to your current project. Global values apply in any directory.

```
USAGE
  $ sf config set

EXAMPLE
  Set the defaultusername configuration value:
  sf config set defaultusername=me@my.org
```

## `sf config unset`

Local values apply only to your current project. Global values apply in any directory.

```
USAGE
  $ sf config unset

EXAMPLE
  Unset the defaulusername config value:
  sf config unset defaultusername
```

## `sf data data`

Placeholder topic

```
USAGE
  $ sf data data

EXAMPLE
  sf data ...
```

## `sf env alias set [ALIAS]`

You can associate an alias with only one environment at a time. If you’ve set an alias multiple times, the alias points to the most recent environment.

```
USAGE
  $ sf env alias set [ALIAS]

OPTIONS
  -t, --targetEnv=targetEnv  The environment to set an alias for
  --json                     format output as json

EXAMPLE
  Set the alias "my-org" for a scratch org with username me@example.com:
  sf env alias set my-org=me@example.com
```

## `sf env alias unset [ALIAS]`

```
USAGE
  $ sf env alias unset [ALIAS]

OPTIONS
  -t, --targetEnv=targetEnv  The environment to unset an alias for
  --json                     format output as json

EXAMPLE
  Unset the alias "my-org":
  sf env alias unset my-org
```

## `sf env create compute [ENVNAME]`

When creating compute environments, the --connected-org flag is required.

```
USAGE
  $ sf env create compute [ENVNAME]

EXAMPLE
  Create a compute environment with a sandbox as a connected org:
  sf env create compute --alias=billingApp-Sandbox2 --connected-org=Sandbox2
```

## `sf env create org [ENVNAME]`

Specify a configuration file or provide key=value pairs at the command line. Values specified on the command line override values in the configuration file.

```
USAGE
  $ sf env create org [ENVNAME]

EXAMPLES
  Create a scratch org from a configuration file and give it an alias:
  sf env create org -f config/enterprise-scratch-def.json -a MyScratchOrg
  Override a property in the configuration file at the command-line:
  sf env create org -f config/enterprise-scratch-def.json -a MyScratchOrg edition=Developer
  Create a sandbox:
  sf env create org -t sandbox -f config/dev-sandbox-def.json -a MyDevSandbox -u prodOrg
```

## `sf env display`

Specify an environment with the username you used when you logged into it with the "sf login" command or its alias. Run "sf env list" to view all your environments and their aliases.

```
USAGE
  $ sf env display

OPTIONS
  -e, --environment=environment  (required) Environment alias or login user.
  --json                         format output as json

DESCRIPTION
  The output depends on the type of environment. For example, scratch org details include the access token, alias,
  username of the associated Dev Hub, the creation and expiration date, the generated scratch org username, and more.

  Compute environment details include the associated orgs, the list of functions, the project name, and more.

EXAMPLE
  - Display information about a scratch org with alias "my-scratch-org":

    sf env display --environment=my-scratch-org

  - Specify a username instead of an alias:

    sf env display --environment=test-123456-abcdefg@example.com

  - Specify JSON format and redirect output into a file:

    sf env display --environment=my-scratch-org --json > tmp/MyOrdDesc.json
```

## `sf env list`

By default, the command displays only active environments. For orgs, that means unexpired scratch orgs and orgs you’re currently logged into. For compute environments, it means the environments connected to orgs you’re currently logged into. Use the --all flag to list expired scratch orgs and compute environments that aren’t connected to logged-in orgs. Warning: the latter list could be very long.

```
USAGE
  $ sf env list

OPTIONS
  -x, --extended          show extra columns
  --all                   include enviornments not yet connected
  --columns=columns       only show provided columns (comma-separated)
  --csv                   output is csv format [alias: --output=csv]
  --filter=filter         filter property by partial string matching, ex: name=foo
  --json                  format output as json
  --no-header             hide table header from output
  --no-truncate           do not truncate output to fit screen
  --output=csv|json|yaml  output in a more machine friendly format
  --sort=sort             property to sort by (prepend '-' for descending)

DESCRIPTION
  The output is displayed in multiple tables, one for each environment type.  For example, the Salesforce Orgs table
  lists the non-scratch orgs you’re logged into, such as sandboxes, Dev Hubs, production orgs, and so on. Scratch orgs
  and compute environments get their own tables.

  For non-scratch orgs, the Username column refers to the user you logged into the org with. For scratch orgs it refers
  to the username that was generated for you when you created the scratch org. The first column indicates the default
  environment for each type.

  Run "sf env display" to view details about a specific environment.

EXAMPLES
  List all environments:
  sf env list --all
  List only connected orgs. Rows from only the Salesforce Orgs table are displayed because it’s the only table with a
  "Status" column.
  sf env list --filter="Status=Connected"
  List only scratch orgs that expire after May 30, 2021:
  sf env list --filter="Expiration>2021-05-30"
```

## `sf env log get`

```
USAGE
  $ sf env log get
```

## `sf env log list`

```
USAGE
  $ sf env log list
```

## `sf env log tail`

Command terminates after 1 hour of activity. You can't retrieve logs from before the command is run.

```
USAGE
  $ sf env log tail

EXAMPLE
  Tail the logs of the compute environment billingApp-Scratch1:
  sf env log tail --environment=billingApp-Scratch1
```

## `sf env logdrain add`

```
USAGE
  $ sf env logdrain add

EXAMPLE
  Add a log drain to the billingApp-Sandbox environment and specify the URL that receives the logs.
  sf env logdrain add --environment=billingApp-Sandbox --url=syslog-a.logdna.com:11137
```

## `sf env logdrain list`

```
USAGE
  $ sf env logdrain list

EXAMPLE
  List the log drains associated with the billingApp-Sandbox environment:
  sf env logdrain list --environment=billingApp-Sandbox
```

## `sf env logdrain remove`

```
USAGE
  $ sf env logdrain remove

EXAMPLE
  sf env logdrain remove --environment=billingApp-Sandbox --url=syslog-a.logdna.com:11137
```

## `sf env open`

You can open the following types of environments in a web browser: scratch orgs, sandboxes, Dev Hubs, and production orgs.

```
USAGE
  $ sf env open

OPTIONS
  -e, --target-env=target-env
      Specify the login user or alias that’s associated with the environment. For scratch orgs, the login user is
      generated by the command that created the scratch org. You can also set an alias for the scratch org when you create
      it.

      For Dev Hubs, sandboxes, and production orgs, specify the alias you set when you logged into the org with "sf
      login".

  -p, --path=path

  -r, --url-only

  --browser=browser
      You can specify that the environment open in one of the following browsers: Firefox, Safari, Google Chrome, or
      Windows Edge. If you don’t specify --browser, the environment opens in your default browser.

  --json
      format output as json

DESCRIPTION
  If you run the command without flags, it attempts to open your default environment in your default web browser.

  Each of your environments is associated with an instance URL, such as https://login.salesforce.com. To open a specific
  web page at that URL, specify the portion of the URL after "<URL>/" with the --path flag, such as /apex/YourPage to
  open a Visualforce page.

EXAMPLES
  To open your default environment, run the command without flags:
  sf env open
  Open the Visualforce page /apex/StartHere in a scratch org with alias "test-org":
  sf env open --target-env test-org --path /apex/StartHere
  View the URL but not launch it in a browser:
  sf env open --target-env test-org --path /apex/StartHere --url-only
  Open the environment in the Google Chrome browser:
  sf env open --target-env test-org --path /apex/StartHere --browser chrome
```

## `sf env usage`

For orgs, the usage is the Apex API usage.

```
USAGE
  $ sf env usage

OPTIONS
  -t, --targetEnv=targetEnv  target environment
  --json=json                format output as json
```

## `sf env var get`

```
USAGE
  $ sf env var get

EXAMPLE
  Get the value of the GITHUB_USERNAME environment variable set on the billingApp-Scratch1 compute environment.
  sf env var get GITHUB_USERNAME --environment=billingApp-Scratch1
```

## `sf env var list`

```
USAGE
  $ sf env var list

EXAMPLE
  List the environment variables that have been set for the billingApp-Scratch1 compute environment:
  sf env var list --environment=billingApp-Scratch1
```

## `sf env var set`

```
USAGE
  $ sf env var set

EXAMPLE
  Set the GITHUB_USERNAME environment variable on the billingApp-Scratch1 compute environment:
  sf env var set GITHUB_USERNAME=stevesmith --environment=billingApp-Scratch1
```

## `sf env var unset`

```
USAGE
  $ sf env var unset

EXAMPLE
  Unset the GITHUB_USERNAME environment variable on the billingApp-Scratch1 compute environment:
  sf env var unset GITHUB_USERNAME --environment=billingApp-Scratch1
```

## `sf event event`

Placeholder topic

```
USAGE
  $ sf event event

EXAMPLE
  sf event ...
```

## `sf generate analytics template`

If you don’t explicitly set the API version, it defaults to the current API version. The associated metadata files are created.

```
USAGE
  $ sf generate analytics template

DESCRIPTION
  The outputdir can be an absolute path or relative to the current working directory.

EXAMPLE
  Generate an analytics template called MyTemplate:
  sf generate analytics template --template-name MyTemplate
```

## `sf generate apex class`

The command creates a .cls file and associated metadata file.

```
USAGE
  $ sf generate apex class

OPTIONS
  -n, --class-name=class-name  class name
  --json                       format output as json

DESCRIPTION
  You can generate the class in the current directory or specify another directory.

  If you don’t explicitly set the API version, it defaults to the current API version.

EXAMPLE
  Generate an Apex class called MyApexClass, and all its assocated files, in the current directory:
  sf generate apex class --class-name "MyApexClass"
```

## `sf generate apex test`

All associated .cls and metadata files are also created.

```
USAGE
  $ sf generate apex test

EXAMPLE
  Generate an Apex test for the Apex class MyApexClass:
  sf generate apex test --classname MyApexClass
```

## `sf generate apex trigger`

The command creates a .trigger file and associated metadata file.

```
USAGE
  $ sf generate apex trigger

DESCRIPTION
  You can generate the trigger in the current directory or specify another directory.

  If you don’t explicitly set the API version, it defaults to the current API version.

EXAMPLE
  Generate an Apex trigger called MyTrigger, and all its assocated files, in the current directory:
  sf generate apex trigger --trigger-name "MyTrigger"
```

## `sf generate community`

When you execute this command, it creates the site in preview status, which means that it isn’t yet live. After you finish building your site, you can make it live.

```
USAGE
  $ sf generate community

OPTIONS
  -n, --name=name  community name
  --json           format output as json

DESCRIPTION
  When generating a site, template-specific optional parameters can be passed in via the form of
  templateParams.name=value. Name and values are case-sensitive.

EXAMPLE
  Generate an Experience Cloud site called MyCustomerCommunity with a specified template.
  sf generate community --name "MyCustomerCommunity" --templatename "Customer Service" --urlpathprefix customers
  --description "My customer community"
```

## `sf generate function`

Specify the function's programming language, such as Typescript or Javascript, with the --language flag.

```
USAGE
  $ sf generate function

OPTIONS
  -l, --language=node|java  function language
  -n, --name=name           function module name
  --json                    format output as json

EXAMPLE
  Generate a Typescript function called myFunction:
  sf generate function --name=myFunction --language=typescript
```

## `sf generate lightning component`

The bundle consists of multiple files in a folder with the designated name.

```
USAGE
  $ sf generate lightning component

DESCRIPTION
  If not supplied, the apiversion, template, and outputdir use default values.

  The outputdir can be an absolute path or relative to the current working directory.

  If you don’t specify an outputdir, we create a subfolder in your current working directory with the name of your
  bundle. For example, if the current working directory is force-app and your Lightning bundle is called myBundle, we
  create force-app/myBundle/ to store the files in the bundle.

  To generate a Lightning web component, pass --type lwc to the command. If you don’t include a --type value, Salesforce
  CLI generates an Aura component by default.

EXAMPLE
  Generate a Lightning web component called MyLwcComponent:
  sf generate lightning component --component-name MyLwcComponent --type lwc
```

## `sf generate lightning event`

The bundle consists of multiple files in a folder with the designated name.

```
USAGE
  $ sf generate lightning event

DESCRIPTION
  If not supplied, the apiversion, template, and outputdir use default values.

  The outputdir can be an absolute path or relative to the current working directory.

  If you don’t specify an outputdir, we create a subfolder in your current working directory with the name of your
  bundle. For example, if the current working directory is force-app and your Lightning bundle is called myBundle, we
  create force-app/myBundle/ to store the files in the bundle.

EXAMPLE
  Generate a Lightening event called MyEvent:
  sf generate lightning event --event-name MyEvent
```

## `sf generate lightning interface`

The bundle consists of multiple files in a folder with the designated name.

```
USAGE
  $ sf generate lightning interface

DESCRIPTION
  If not supplied, the apiversion, template, and outputdir use default values.

  The outputdir can be an absolute path or relative to the current working directory.

  If you don’t specify an outputdir, we create a subfolder in your current working directory with the name of your
  bundle. For example, if the current working directory is force-app and your Lightning bundle is called myBundle, we
  create force-app/myBundle/ to store the files in the bundle.

EXAMPLE
  Generate a Lightening interface called MyInterface:
  sf generate lightning interface --interface-name MyInterface
```

## `sf generate project`

Specify the function's programming language, such as Typescript or Javascript, with the --language flag.

```
USAGE
  $ sf generate project

OPTIONS
  -n, --project-name=project-name  project name
  --json                           format output as json

EXAMPLE
  Generate a Typescript function called myFunction:
  sf generate function --name=myFunction --language=typescript
```

## `sf heroku heroku`

Placeholder topic

```
USAGE
  $ sf heroku heroku

EXAMPLE
  sf heroku ...
```

## `sf login`

The command first lists all the environments you can currently log into. After you chose one, the command provides a way for you to log into it, such as with a browser that opens https://login.salesforce.com for an org. Depending on the environment you chose, the command then prompts for other actions, such as whether to give an org an alias or set it as your default.

```
USAGE
  $ sf login

OPTIONS
  --json  format output as json

DESCRIPTION
  This command is fully interactive and has no flags other than displaying the command line help. Each environment that
  you can log into has its own command, such as "sf login org". The environment-specific commands sometimes provide more
  flag options than this interactive command does. For more information about the interactive prompts from this command,
  see the help for the environment-specific command, such as "sf login org --help".
```

_See code: [src/commands/login.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.6.2/src/commands/login.ts)_

## `sf login functions`

login to a Salesforce functions account

```
USAGE
  $ sf login functions

OPTIONS
  -f, --jwt-file=jwt-file          file containing the JWT private key
  -i, --client-id=client-id        OAuth client ID (sometimes called the consumer key)
  --browser=chrome|firefox|safari  browser to open SSO with
  --json                           format output as json

EXAMPLES
  sf login functions
  sf login functions --jwt-file=./jwt.key --client-id XXXXXXXXXXXXXXX
```

## `sf login org`

This command opens a Salesforce instance URL in a web browser for you to then enter your credentials and log in to your org. After you log in, you can close the browser window.

```
USAGE
  $ sf login org

OPTIONS
  -i, --client-id=client-id

  -r, --instance-url=instance-url
      [default: https://login.salesforce.com] If you specify --instance-url, the value overrides the sfdcLoginUrl value in
      your sfdx-project.json file.

      To specify a My Domain URL, use the format https://yourcompanyname.my.salesforce.com.

      To specify a sandbox, set --instance-url to https://test.salesforce.com.

  --alias=alias

  --browser=chrome|firefox|safari
      You can specify that you want to log in to an org with one of the following browsers: Firefox, Safari, Google
      Chrome, or Windows Edge. If you don’t specify --browser, you log in using your default browser.

  --json
      format output as json

  --set-default

DESCRIPTION
  Logging into an org authorizes the CLI to run other commands that connect to that org, such as deploying or retrieving
  a project. You can log into many types of orgs, such as sandboxes, Dev Hubs, Env Hubs, production orgs, and scratch
  orgs.

  We recommend that you set an alias when you log into an org. Aliases make it easy to later reference this org when
  running commands that require it. If you don’t set an alias, you use the username that you specified when you logged
  in to the org. If you run multiple commands that reference the same org, consider setting the org as your default.

  By default, this command uses the global out-of-the-box connected app in your org. If you need more security or
  control, such as setting the refresh token timeout or specifying IP ranges, create your own connected app. Then
  specify its consumer key with the --clientid flag.

EXAMPLES
  If your org lives on the standard Salesforce login page (https://login.salesforce.com), run the command with no flags
  to log in:
  sf login org
  If you log in to your Dev Hub, set an alias so you can reference it later when you create a scratch org:
  sf login org --alias dev-hub
  Log in to a sandbox and set it as your default org:
  sf login org --instance-url https://test.salesforce.com --set-default
  Use --browser to specify a specific browser, such as Google Chrome:
  sf login org --instance-url https://test.salesforce.com --set-default --browser chrome
  Use your own connected app by specifying its consumer key:
  sf login org --instance-url https://test.salesforce.com --set-default --browser chrome --clientid 04580y4051234051
```

## `sf login org jwt`

Use this command in automated environments where you can’t interactively log in with a browser, such as in CI/CD scripts.

```
USAGE
  $ sf login org jwt

OPTIONS
  -i, --client-id=client-id
      (required)

  -r, --instance-url=instance-url
      [default: https://login.salesforce.com] If you specify an --instance-url value, this value overrides the
      sfdcLoginUrl value in your sfdx-project.json file.

      To specify a My Domain URL, use the format https://yourcompanyname.my.salesforce.com.

      To specify a sandbox, set --instance-url to https://test.salesforce.com.

  -u, --username=username
      (required)

  --alias=alias

  --audience-url=audience-url
      Overrides the aud (audience) field used for JWT authentication so that it matches the expected value of the
      authorization server URL for the org you’re logging into. For example, "http://login.salesforce.com" for a
      production org or "https://test.salesforce.com" for a sandbox.

  --json
      format output as json

  --jwt-key-file=jwt-key-file

  --set-default

DESCRIPTION
  Logging into an org authorizes the CLI to run other commands that connect to that org, such as deploying or retrieving
  a project. You can log into many types of orgs, such as sandboxes, Dev Hubs, Env Hubs, production orgs, and scratch
  orgs.

  Complete these steps before you run this command:

  1. Create a digital certificate (also called digital signature) and the private key to sign the certificate. You can
  use your own key and certificate issued by a certification authority. Or use OpenSSL to create a key and a self-signed
  digital certificate.
  2. Store the private key in a file on your computer. When you run this command, you set the --jwt-key-file flag to
  this file.
  3. Create a custom connected app in your org using the digital certificate. Make note of the consumer key (also called
  cliend id) that’s generated for you. When you run this command, you set the --clientid flag to the consumer key. Be
  sure the username of the user logging in is approved to use the connected app.

  We recommend that you set an alias when you log into an org. Aliases make it easy to later reference this org when
  running commands that require it. If you don’t set an alias, you use the username that you specified when you logged
  in to the org. If you run multiple commands that reference the same org, consider setting the org as your default.

EXAMPLES
  This example shows a user with username jdoe@example.org logging into an org on the default instance URL
  (https://login.salesforce.org). The private key is stored in the file /Users/jdoe/JWT/server.key and the command uses
  the connected app with consumer key (client id) 04580y4051234051.
  sf login org jwt --username jdoe@example.org --jwt-key-file /Users/jdoe/JWT/server.key --clientid 04580y4051234051
  Set the org as the default and gives it an alias:
  sf login org jwt --username jdoe@example.org --jwt-key-file /Users/jdoe/JWT/server.key --clientid 04580y4051234051
  --alias ci-org --set-default
  Use the --instance-url flag log in to a sandbox:
  sf login org jwt --username jdoe@example.org --jwt-key-file /Users/jdoe/JWT/server.key --clientid 04580y4051234051
  --alias ci-org --set-default --instance-url https://test.salesforce.com
```

## `sf logout`

Log out of all Salesforce orgs and environments.

```
USAGE
  $ sf logout
```

_See code: [src/commands/logout.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.6.2/src/commands/logout.ts)_

## `sf logout org`

```
USAGE
  $ sf logout org

OPTIONS
  -t, --target-org=target-org
  --json                       format output as json

EXAMPLES
  Log out of an org with alias "ci-org":
  sf logout org --target-org ci-org
  If your org doesn’t have an alias, specify the username that you used when you logged into it:
  sf logout org --target-org jdoe@example.org
```

## `sf package package`

Placeholder topic

```
USAGE
  $ sf package package

EXAMPLE
  sf package ...
```

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

## `sf plugins update`

update installed plugins

```
USAGE
  $ sf plugins update

OPTIONS
  -h, --help     show CLI help
  -v, --verbose
```

## `sf project deploy`

The command first analyzes your project, active or logged-into environments, and local defaults to determine what to deploy and where. The command then prompts you for information about this particular deployment and provides intelligent choices based on its analysis.

```
USAGE
  $ sf project deploy

OPTIONS
  --directory=directory    directory to deploy
  --interactive
  --json                   format output as json
  --target-env=target-env  set

DESCRIPTION
  For example, if your local project contains a package directory with metadata source files, the command asks if you
  want to deploy that Salesforce app to an org. The command lists your connected orgs and asks which one you want to
  deploy to.  If the command finds Apex tests, it asks if you want to run them and at which level.

  Similarly, if the command finds a local functions directory, the command prompts if you want to deploy it and to which
  compute environment. The command prompts and connects you to a compute environment of your choice if you’re not
  currently connected to any.

  This command must be run from within a project.

  The command stores your responses in a local file and uses them as defaults when you rerun the command. Specify
  --interactive to force the command to reprompt.

  Use this command for quick and simple deploys. For more complicated deployments, use the environment-specific
  commands, such as "sf project deploy org", that provide additional flags.

EXAMPLES
  sf project deploy
  sf project deploy --target-env=devhub
```

## `sf project deploy functions`

```
USAGE
  $ sf project deploy functions

EXAMPLE
  Deploy all functions to the connected org with alias "Scratch1":
  sf project deploy functions --connected-org=Scratch1
```

## `sf project deploy org`

The source you deploy overwrites the corresponding metadata in your org. This command doesn’t attempt to merge your source with the versions in your org. If the command detects a conflict, it displays the conflicts but doesn’t complete the process. After reviewing the conflict, rerun the command with the --force-overwrite flag to overwrite the org.

```
USAGE
  $ sf project deploy org

OPTIONS
  -c, --check-only
      If you change a field type from Master-Detail to Lookup or vice versa, that change isn’t supported when using the
      --check-only parameter to test a deployment (validation). This kind of change isn’t supported for test deployments
      to avoid the risk of data loss or corruption. If a change that isn’t supported for test deployments is included in a
      deployment package, the test deployment fails and issues an error.

      If your deployment package changes a field type from Master-Detail to Lookup or vice versa, you can still validate
      the changes prior to deploying to Production by performing a full deployment to another test Sandbox. A full
      deployment includes a validation of the changes as part of the deployment process.

      Note: A Metadata API deployment that includes Master-Detail relationships deletes all detail records in the Recycle
      Bin in the following cases.

      1. For a deployment with a new Master-Detail field, soft delete (send to the Recycle Bin) all detail records before
      proceeding to deploy the Master-Detail field, or the deployment fails. During the deployment, detail records are
      permanently deleted from the Recycle Bin and cannot be recovered.

      2. For a deployment that converts a Lookup field relationship to a Master-Detail relationship, detail records must
      reference a master record or be soft-deleted (sent to the Recycle Bin) for the deployment to succeed. However, a
      successful deployment permanently deletes any detail records in the Recycle Bin.

  -d, --deploy-dir=deploy-dir
      The root must contain a valid package.xml file describing the entities in the directory structure. This flag is
      requiredto initiate a deployment if you don’t use --zip-file. If you specify both --zip-file and --deploy-dir, a zip
      file of the contents of the --deploy-dir directory is written to the location specified by --zip-file.

      If you specify this flag, don’t specify --metadata or --manifest.

  -m, --metadata=metadata

  -x, --manifest=manifest
      If you specify this flag, don’t specify --metadata or --deploy-dir.

  --force-overwrite

  --ignore-errors
      The default is to not ignore errors. Don’t specify this flag when deploying to a production org. If you specify the
      flag, components without errors are deployed, and components with errors are skipped.

  --ignore-warnings
      The default is to not ignore warnings. If a warning occurs and you specified this flag, the success field in
      DeployMessage is set to true. If you didn’t specify this flag, success is set to false, and the warning is treated
      like an error.

  --json
      format output as json

  --run-tests=run-tests

  --single-package
      Use this flag with the --zip-file flag. By default, the CLI assumes the directory is structured for a set of
      packages.

  --soap-deploy
      Because SOAP API has a lower .ZIP file size limit (400 MB uncompressed, 39 MB compressed), Salesforce recommends
      REST API deployment. This flag provides backwards compatibility with API version 50.0 and earlier when deploy used
      SOAP API by default.

  --target-env=target-env
      (required) environment you want to deploy to

  --test-level=(NoTestRun|RunSpecifiedTests|RunLocalTests|RunAllTestsInOrg)
      Valid values are:

      - NoTestRun — No tests are run. This test level applies only to deployments to development environments, such as
      sandbox, Developer Edition, or trial orgs. This test level is the default for development environments.

      - RunSpecifiedTests — Runs only the tests that you specify with the --run-tests flag. Code coverage requirements
      differ from the default coverage requirements when using this test level. Executed tests must comprise a minimum of
      75% code coverage for each class and trigger in the deployment package. This coverage is computed for each class and
      trigger individually and is different than the overall coverage percentage.

      - RunLocalTests — All tests in your org are run, except the ones that originate from installed managed packages.
      This test level is the default for production deployments that include Apex classes or triggers.

      - RunAllTestsInOrg — All tests in your org are run, including tests of managed packages.

      If you don’t specify a test level, the default behavior depends on the contents of your deployment package. For more
      information, see “Running Tests in a Deployment” in the Metadata API Developer Guide.

  --validated-deploy-request-id=validated-deploy-request-id
      Specifies the ID of a package with recently validated components to run a Quick Deploy. Deploying a validation helps
      you shorten your deployment time because tests aren’t rerun. If you have a recent successful validation, you can
      deploy the validated components without running tests. A validation doesn’t save any components in the org.

      You use a validation only to check the success or failure messages that you would receive with an actual deployment.
      It doesn’t validate your components. This flag sets the checkOnly="true" parameter for your deployment. Before
      deploying a recent validation, ensure that the following requirements are met:

      1. The components have been validated successfully for the target environment within the last 10 days.
      2. As part of the validation, Apex tests in the target org have passed.
      3. Code coverage requirements are met:

      - If all tests in the org or all local tests are run, overall code coverage is at least 75%, and Apex triggers have
      some coverage.
      - If specific tests are run with the RunSpecifiedTests test level, each class and trigger that was deployed is
      covered by at least 75% individually.

  --wait=wait
      Default is -1 (no limit).

  --zip-file=zip-file
      You must indicate this flag or --deploy-dir. If you specify both --zip-file and --deploy-dir, a .zip file of the
      contents of the deploy directory is created at the path specified for the .zip file.

DESCRIPTION
  To run the command asynchronously, set --wait to 0, which immediately returns the job ID. This way, you can continue
  to use the CLI. By default the command waits to finish no matter how long the deployment takes.

  To run a quick deploy of a recently validated package, use --validated-deploy-request-id with the validated ID.

  You must run this command from wihin a project.

  If the comma-separated list you’re supplying contains spaces, enclose the entire comma-separated list in one set of
  double quotes. On Windows, if the list contains commas, also enclose the entire list in one set of double quotes.

EXAMPLES
  Deploy the source files in a directory:
  sf project deploy org --deploy-dir path/to/source
  Deploy a specific Apex class and the objects whose source is in a directory:
  sf project deploy org --deploy-dir "path/to/apex/classes/MyClass.cls,path/to/source/objects"
  Deploy source files in a comma-separated list that contains spaces:
  sf project deploy org --deploy-dir "path/to/objects/MyCustomObject/fields/MyField.field-meta.xml,
  path/to/apex/classes"
  Deploy all Apex classes:
  sf project deploy org --metadata ApexClass
  Deploy a specific Apex class:
  sf project deploy org --metadata ApexClass:MyApexClass
  Deploy all custom objects and Apex classes:
  sf project deploy org --metadata "CustomObject,ApexClass"
  Deploy all Apex classes and two specific profiles (one of which has a space in its name):
  sf project deploy org --metadata "ApexClass, Profile:My Profile, Profile: AnotherProfile"
  Deploy all components listed in a manifest:
  sf project deploy org --manifest path/to/package.xml
  Run the tests that aren’t in any managed packages as part of a deployment:
  sf project deploy org --metadata ApexClass --test-level RunLocalTests
  Check whether a deployment would succeed (to prepare for Quick Deploy):
  sf project deploy org --metadata ApexClass --test-level RunAllTestsInOrg --check-only
  Deploy an already validated deployment (Quick Deploy):
  sf project deploy org --validated-deploy-request-id 0Af9A00000FTM6pSAH
  Deploy a .zip file:
  sf project deploy org --zip-file path/to/zip/mypackage.zip
  Deploy a .zip file that points to a single package:
  sf project deploy org --zip-file path/to/zip/mypackage.zip --single-package
```

## `sf project retrieve`

The command first analyzes your project, active or logged-into orgs, and local defaults to determine what to retrieve. The command then prompts you for information about this particular retrieve and provides intelligent choices based on its analysis.

```
USAGE
  $ sf project retrieve

OPTIONS
  --interactive
  --json         format output as json

DESCRIPTION
  This command must be run from within a project.

  The command stores your responses in a local file and uses them as defaults when you rerun the command. Specify
  --interactive to force the command to reprompt.

  Use this command for quick and simple retrieves. For more complicated scenarios, use "sf project retrieve org" which
  provides additional flags.
```

## `sf project retrieve org`

The source you retrieve overwrites the corresponding source files in your local project . This command doesn’t attempt to merge the source from your org with your local source files. If the command detects a conflict, it displays the conflicts but doesn’t complete the process. After reviewing the conflict, rerun the command with the --force-overwrite flag to overwrite your local files.

```
USAGE
  $ sf project retrieve org

DESCRIPTION
  If the comma-separated list you’re supplying contains spaces, enclose the entire comma-separated list in one set of
  double quotes. On Windows, if the list contains commas, also enclose the entire list in one set of double quotes.

  You must run this command from wihin a project.

EXAMPLES
  Retrieve the source files in a directory:
  sf project retrieve org --source-path path/to/source
  Retrieve a specific Apex class and the objects whose source is in a directory:
  sf project retrieve org --source-path "path/to/apex/classes/MyClass.cls,path/to/source/objects"
  Retrieve source files in a comma-separated list that contains spaces:
  sf project retrieve org --source-path "path/to/objects/MyCustomObject/fields/MyField.field-meta.xml,
  path/to/apex/classes"
  Retrieve all Apex classes:
  sf project retrieve org --metadata ApexClass
  Retrieve a specific Apex class:
  sf project retrieve org --metadata ApexClass:MyApexClass
  Retrieve all custom objects and Apex classes:
  sf project retrieve org --metadata "CustomObject,ApexClass"
  Retrieve all metadata components listed in a manifest:
  sf project retrieve org --manifest path/to/package.xml
  Retrieve metadata from a package:
  sf project retrieve org --package-names MyPackageName
  Retrieve metadata from multiple packages:
  sf project retrieve org --package-names "Package1, PackageName With Spaces, Package3"
```

## `sf reset`

reset data created by this CLI

```
USAGE
  $ sf reset
```

_See code: [src/commands/reset.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.6.2/src/commands/reset.ts)_

## `sf run apex`

The command executes one or more lines of code entered on the command line, or executes the code in a local file.

```
USAGE
  $ sf run apex

DESCRIPTION
  To execute your code interactively, run this command with no parameters. At the prompt, enter all your Apex code;
  press CTRL-D when you're finished. Your code is then executed in a single execute anonymous request.

  For more information, see "Anonymous Blocks" in the Apex Developer Guide.

EXAMPLE
  Execute the anonymous Apex code in the test.apex file in your home directory on org with alias "my-org"
  sf run apex --target-env my-org --apex-code-file ~/test.apex
```

## `sf run function`

```
USAGE
  $ sf run function

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

## `sf run function start`

```
USAGE
  $ sf run function start

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

## `sf test apex`

Specify which tests to run by using the --class-names, --suites, or --tests parameters. Alternatively, use the --test-level parameter to run all the tests in your org, local tests, or specified tests.

```
USAGE
  $ sf test apex

DESCRIPTION
  To see code coverage results, use the --code-cmverage parameter with --result-format. The output displays a high-level
  summary of the test run and the code coverage values for classes in your org. If you specify human-readable result
  format, use the --detailed-coverage parameter to see detailed coverage results for each test method run.

  NOTE: The testRunCoverage value (JSON and JUnit result formats) is a percentage of the covered lines and total lines
  from all the Apex classes evaluated by the tests in this run.

EXAMPLE
  Invoke specific Apex tests and display the output in human-readable format:
  sf test apex --class-names "MyClassTest,MyOtherClassTest" --result-format human
```

## `sf test function`

```
USAGE
  $ sf test function
```

## `sf usage`

Display overall usage of your compute spend.

```
USAGE
  $ sf usage

OPTIONS
  --json=json  format output as json
```

_See code: [src/commands/usage.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.6.2/src/commands/usage.ts)_

## `sf whoami`

Display details of the current logged-in account and user.

```
USAGE
  $ sf whoami
```

_See code: [src/commands/whoami.ts](https://github.com/salesforcecli/cli-taxonomy-experiment/blob/v1.6.2/src/commands/whoami.ts)_

<!-- commandsstop -->
