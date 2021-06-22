# summary
  
Generate an Experience Cloud site using a template.

# description

When you execute this command, it creates the site in preview status, which means that it isn’t yet live. After you finish building your site, you can make it live.

When generating a site, template-specific optional parameters can be passed in via the form of templateParams.name=value. Name and values are case-sensitive.

# examples

- Generate an Experience Cloud site called MyCustomerCommunity with a specified template.

  sf generate community --name "MyCustomerCommunity" --templatename "Customer Service" --urlpathprefix customers --description "My customer community"
