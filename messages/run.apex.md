# summary

Execute anonymous Apex code.

# description

The command executes one or more lines of code entered on the command line, or executes the code in a local file.

To execute your code interactively, run this command with no parameters. At the prompt, enter all your Apex code; press CTRL-D when you're finished. Your code is then executed in a single execute anonymous request.

For more information, see "Anonymous Blocks" in the Apex Developer Guide.

# examples

- Execute the anonymous Apex code in the test.apex file in your home directory on org with alias "my-org"
 
   sf run apex --target-env my-org --apex-code-file ~/test.apex
