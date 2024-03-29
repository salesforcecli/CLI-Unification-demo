# Strategy and Structure

## What

CLI Unification is an evolution of Salesforce’s CLI strategy. We're unifying all the CLIs across Salesforce’s many brands as our first step in providing a unified cross-cloud developer experience. Our ultimate goal is to provide one set of tools for all Salesforce developers to write and deploy their Salesforce apps.

We're evolving the taxonomy of our Salesforce CLI to bring together existing capabilities from Salesforce CLI and other CLIs, such as Heroku and MuleSoft, to deliver net new, cross-cloud commands under the new executable, `sf`. This new executable will be bundled with `sfdx` in the same installer and work in conjunction with `sfdx` commands, until `sf` reaches (and exceeds) full feature parity with `sfdx`.

## Structure

Most CLI commands in `sf` are designed around the actions you take or the job you perform when running a command, instead of focusing on product or brand names. For this universal set of jobs to be done (JTBD), the topics are cross cloud and give you the ability to perform the same type of action for multiple Salesforce products. Those actions include the ability to _deploy_ your code/metadata, _generate_ scaffolded files for different types of resources, and connect to your _environments_. These topics are opinionated, and structured so that they are, by default, cross cloud.

For example, `sf project deploy` deploys the entire project that is defined in your local directory by default. If your project includes functions and a force app then both are deployed to their respective environments with the one command. Let’s say that you later include a Heroku app, some Mulesoft APIs, and a resource from Marketing Cloud in your project. In this case, `sf project deploy` deploys all of these resources to their respective environments. What if you want a more granular way of deploying changes or use a product-specific deployment feature? In that case you’d use the product-specific project deploy commands that have flag options for granular deployment. For example, `sf project deploy org` will support all the current options for `force:source:deploy` and `force:source:push`.

For actions that that only exist for a given product, the commands will be available in a plug-in that is specific to a brand (such as `sf heroku`) or product (`sf connect` or `sf package`). These commands aren't currently in the demo CLI but we include the `sf heroku` and `sf package` topics for reference.

## What is sf?

Instead of starting fresh, we think it’s best to evolve the Salesforce CLI into the single CLI for all the Salesforce brands and products. To do this, we are introducing a new executable `sf` that we are bundling with `sfdx` that brings a new taxonomy and standards to the Salesforce CLI experience.

Creating a new executable allows us to make some different decisions about the structure of the CLI without breaking existing scripts. We want to be more strategic about how we build the information hierarchy as we think about unifying all Salesforce brands into one CLI. But we also want to bring more consistency and stability for current users. For example, `sf` will have consistent tables, terminal output, and JSON schema, which will make scripting and developing easier. But making these types of standards changes in `sfdx` would break pre-existing scripts.

## Overall CLI Improvements

When designing CLI Unification we took the opportunity to improve the overall experience of using Salesforce CLI. We focused on consistency, discoverability/navigation, and speed with the following enhancements:

- Spaces instead of colons in commands for improved readability
- Expanded help output, with less need to go to the online documentation
- Consistent standards on:
  - Tables
  - Terminal output
  - JSON schema
- Prompting when a required flag isn't included instead of returning an error
- (Optional) Fully interactive commands that allow developers less farmiliar with the CLI to use it effectively 
