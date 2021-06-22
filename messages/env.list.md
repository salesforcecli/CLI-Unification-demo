# summary
  
List the environments you’ve created or logged into.

# description

By default, the command displays only active environments. For orgs, that means unexpired scratch orgs and orgs you’re currently logged into. For compute environments, it means the environments connected to orgs you’re currently logged into. Use the --all flag to list expired scratch orgs and compute environments that aren’t connected to logged-in orgs. Warning: the latter list could be very long.
 
The output is displayed in multiple tables, one for each environment type.  For example, the Salesforce Orgs table lists the non-scratch orgs you’re logged into, such as sandboxes, Dev Hubs, production orgs, and so on. Scratch orgs and compute environments get their own tables.
 
For non-scratch orgs, the Username column refers to the user you logged into the org with. For scratch orgs it refers to the username that was generated for you when you created the scratch org. The first column indicates the default environment for each type.

Run "sf env display" to view details about a specific environment.

# examples

- List all environments:

  sf env list --all

- List only connected orgs. Rows from only the Salesforce Orgs table are displayed because it’s the only table with a "Status" column.

  sf env list --filter="Status=Connected"

- List only scratch orgs that expire after May 30, 2021:

  sf env list --filter="Expiration>2021-05-30"

# flags.all.summary

Show all environments, even inactive ones.

# flags.filter.summary

Filter expression used to limit the output.

# flags.filter.description

Use the --filter flag to limit the number of displayed table rows based on a column name. The flag takes a simple expression ("<column-name> = <value>") and uses partial string matching. For example, use "Status=Connected" to display connected orgs or "Alias=Scratch" to display aliases that contain the string "Scratch". The column name is case insensitive.
 
Only rows from tables that have the column listed in the filter expression are displayed. 

# flags.columns.summary

Comma-separated list of columns to display.

# flags.sort.summary

Column to sort on. Default is ascending order, prepend "-" for descending.
