# summary
  
Add a log drain to a specified environment.

# examples

- Add a log drain to the billingApp-Sandbox environment and specify the URL that receives the logs.

  sf env logdrain add --environment=billingApp-Sandbox --url=syslog-a.logdna.com:11137
