# summary
  
Deploy a project interactively to any Salesforce environment.

# description

The command first analyzes your project, active or logged-into environments, and local defaults to determine what to deploy and where. The command then prompts you for information about this particular deployment and provides intelligent choices based on its analysis.

For example, if your local project contains a package directory with metadata source files, the command asks if you want to deploy that Salesforce app to an org. The command lists your connected orgs and asks which one you want to deploy to.  If the command finds Apex tests, it asks if you want to run them and at which level.

Similarly, if the command finds a local functions directory, the command prompts if you want to deploy it and to which compute environment. The command prompts and connects you to a compute environment of your choice if you’re not currently connected to any.

This command must be run from within a project.

The command stores your responses in a local file and uses them as defaults when you rerun the command. Specify --interactive to force the command to reprompt.

Use this command for quick and simple deploys. For more complicated deployments, use the environment-specific commands, such as "sf project deploy org", that provide additional flags.

# flags.interactive.summary

Force the CLI to prompt for all deployment inputs.
