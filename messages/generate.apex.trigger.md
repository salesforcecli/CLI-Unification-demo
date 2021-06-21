# summary
  
Create an empty Apex trigger. 

# description

The command creates a .trigger file and associated metadata file.

You can create the trigger in the current directory or specify another directory.

If you don’t explicitly set the API version, it defaults to the current API version.

# examples

- Create an Apex trigger called MyTrigger, and all its assocated files, in the current directory:

  sf generate apex trigger --trigger-name "MyTrigger"
