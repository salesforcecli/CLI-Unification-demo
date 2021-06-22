# summary
  
Log in interactively to a Salesforce org or other environment.

# description

The command first lists all the environments you can currently log into. After you chose one, the command provides a way for you to log into it, such as with a browser that opens https://login.salesforce.com for an org. Depending on the environment you chose, the command then prompts for other actions, such as whether to give an org an alias or set it as your default.

This command is fully interactive and has no flags other than displaying the command line help. Each environment that you can log into has its own command, such as "sf login org". The environment-specific commands sometimes provide more flag options than this interactive command does. For more information about the interactive prompts from this command, see the help for the environment-specific command, such as "sf login org --help".
