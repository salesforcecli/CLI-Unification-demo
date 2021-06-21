# summary
  
Display details about a specific environment.

# description

Specify an environment with the username you used when you logged into it with the "sf login" command or its alias. Run "sf env list" to view all your environments and their aliases.

The output depends on the type of environment. For example, scratch org details include the access token, alias, username of the associated Dev Hub, the creation and expiration date, the generated scratch org username, and more.

Compute environment details include the associated orgs, the list of functions, the project name, and more.

# examples

- Display information about a scratch org with alias "my-scratch-org":

 sf env display --environment=my-scratch-org

- Specify a username instead of an alias:

 sf env display --environment=test-123456-abcdefg@example.com

- Specify JSON format and redirect output into a file:

 sf env display --environment=my-scratch-org --json > tmp/MyOrdDesc.json

# flags.environment.summary

Environment alias or login user.
