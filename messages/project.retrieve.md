# summary
  
Retrieve source interactively from a Salesforce org.

# description

The command first analyzes your project, active or logged-into orgs, and local defaults to determine what to retrieve. The command then prompts you for information about this particular retrieve and provides intelligent choices based on its analysis.

This command must be run from within a project.

The command stores your responses in a local file and uses them as defaults when you rerun the command. Specify --interactive to force the command to reprompt.

Use this command for quick and simple retrieves. For more complicated scenarios, use "sf project retrieve org" which provides additional flags.

# flags.interactive.summary

Force the CLI to prompt for all inputs.
