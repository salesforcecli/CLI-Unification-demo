# summary
  
Create a scratch org or sandbox org.

# description

Specify a configuration file or provide key=value pairs at the command line. Values specified on the command line override values in the configuration file.

# examples

- Create a scratch org from a configuration file and give it an alias:

  sf env create org -f config/enterprise-scratch-def.json -a MyScratchOrg

- Override a property in the configuration file at the command-line:

  sf env create org -f config/enterprise-scratch-def.json -a MyScratchOrg edition=Developer

- Create a sandbox:

  sf env create org -t sandbox -f config/dev-sandbox-def.json -a MyDevSandbox -u prodOrg
