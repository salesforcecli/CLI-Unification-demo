# summary

Log in to a Salesforce org using a JSON web token (JWT).

# description

Use this command in automated environments where you can’t interactively log in with a browser, such as in CI/CD scripts.

Logging into an org authorizes the CLI to run other commands that connect to that org, such as deploying or retrieving a project. You can log into many types of orgs, such as sandboxes, Dev Hubs, Env Hubs, production orgs, and scratch orgs.

Complete these steps before you run this command:

1. Create a digital certificate (also called digital signature) and the private key to sign the certificate. You can use your own key and certificate issued by a certification authority. Or use OpenSSL to create a key and a self-signed digital certificate.
2. Store the private key in a file on your computer. When you run this command, you set the --jwt-key-file flag to this file.
3. Create a custom connected app in your org using the digital certificate. Make note of the consumer key (also called cliend id) that’s generated for you. When you run this command, you set the --clientid flag to the consumer key. Be sure the username of the user logging in is approved to use the connected app.

We recommend that you set an alias when you log into an org. Aliases make it easy to later reference this org when running commands that require it. If you don’t set an alias, you use the username that you specified when you logged in to the org. If you run multiple commands that reference the same org, consider setting the org as your default.

# examples

- This example shows a user with username jdoe@example.org logging into an org on the default instance URL (https://login.salesforce.org). The private key is stored in the file /Users/jdoe/JWT/server.key and the command uses the connected app with consumer key (client id) 04580y4051234051.

  sf login org jwt --username jdoe@example.org --jwt-key-file /Users/jdoe/JWT/server.key --clientid 04580y4051234051

- Set the org as the default and gives it an alias:
  sf login org jwt --username jdoe@example.org --jwt-key-file /Users/jdoe/JWT/server.key --clientid 04580y4051234051 --alias ci-org --set-default

- Use the --instance-url flag log in to a sandbox:

  sf login org jwt --username jdoe@example.org --jwt-key-file /Users/jdoe/JWT/server.key --clientid 04580y4051234051 --alias ci-org --set-default --instance-url https://test.salesforce.com

# flags.alias.summary

Alias for the org.

# flags.instance-url.summary

URL of the instance that the org lives on. (defaults to https://login.salesforce.com)

# flags.instance-url.description

If you specify an --instance-url value, this value overrides the sfdcLoginUrl value in your sfdx-project.json file.

To specify a My Domain URL, use the format https://yourcompanyname.my.salesforce.com.

To specify a sandbox, set --instance-url to https://test.salesforce.com.

# flags.set-default.summary

Set the org as your default org.

# flags.client-id.summary

OAuth client id (also called consumer key) of your custom connected app.

# flags.jwt-key-file.summary

Path to a file containing the private key.

# flags.username.summary

Username of the user logging in.

# flags.audience-url.summary

Audience URL for the given instance URL.

# flags.audience-url.description

Overrides the aud (audience) field used for JWT authentication so that it matches the expected value of the authorization server URL for the org you’re logging into. For example, "http://login.salesforce.com" for a production org or "https://test.salesforce.com" for a sandbox.
