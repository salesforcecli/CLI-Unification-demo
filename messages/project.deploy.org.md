# summary

Deploy source and metadata to an org.

# description

The source you deploy overwrites the corresponding metadata in your org. This command doesn’t attempt to merge your source with the versions in your org. If the command detects a conflict, it displays the conflicts but doesn’t complete the process. After reviewing the conflict, rerun the command with the --force-overwrite flag to overwrite the org.

To run the command asynchronously, set --wait to 0, which immediately returns the job ID. This way, you can continue to use the CLI. By default the command waits to finish no matter how long the deployment takes.

To run a quick deploy of a recently validated package, use --validated-deploy-request-id with the validated ID.

You must run this command from wihin a project.

If the comma-separated list you’re supplying contains spaces, enclose the entire comma-separated list in one set of double quotes. On Windows, if the list contains commas, also enclose the entire list in one set of double quotes.

# examples

- Deploy the source files in a directory:

  sf project deploy org --deploy-dir path/to/source

- Deploy a specific Apex class and the objects whose source is in a directory:

  sf project deploy org --deploy-dir "path/to/apex/classes/MyClass.cls,path/to/source/objects"

- Deploy source files in a comma-separated list that contains spaces:

  sf project deploy org --deploy-dir "path/to/objects/MyCustomObject/fields/MyField.field-meta.xml, path/to/apex/classes"

- Deploy all Apex classes:

  sf project deploy org --metadata ApexClass

- Deploy a specific Apex class:

  sf project deploy org --metadata ApexClass:MyApexClass

- Deploy all custom objects and Apex classes:

  sf project deploy org --metadata "CustomObject,ApexClass"

- Deploy all Apex classes and two specific profiles (one of which has a space in its name):

  sf project deploy org --metadata "ApexClass, Profile:My Profile, Profile: AnotherProfile"

- Deploy all components listed in a manifest:

  sf project deploy org --manifest path/to/package.xml

- Run the tests that aren’t in any managed packages as part of a deployment:

  sf project deploy org --metadata ApexClass --test-level RunLocalTests

- Check whether a deployment would succeed (to prepare for Quick Deploy):

  sf project deploy org --metadata ApexClass --test-level RunAllTestsInOrg --check-only

- Deploy an already validated deployment (Quick Deploy):

  sf project deploy org --validated-deploy-request-id 0Af9A00000FTM6pSAH

- Deploy a .zip file:

  sf project deploy org --zip-file path/to/zip/mypackage.zip

- Deploy a .zip file that points to a single package:

  sf project deploy org --zip-file path/to/zip/mypackage.zip --single-package

# flags.check-only.summary

Validate deploy and run Apex tests but don’t save to the org.

# flags.check-only.description

If you change a field type from Master-Detail to Lookup or vice versa, that change isn’t supported when using the --check-only parameter to test a deployment (validation). This kind of change isn’t supported for test deployments to avoid the risk of data loss or corruption. If a change that isn’t supported for test deployments is included in a deployment package, the test deployment fails and issues an error.

If your deployment package changes a field type from Master-Detail to Lookup or vice versa, you can still validate the changes prior to deploying to Production by performing a full deployment to another test Sandbox. A full deployment includes a validation of the changes as part of the deployment process.

Note: A Metadata API deployment that includes Master-Detail relationships deletes all detail records in the Recycle Bin in the following cases.

1. For a deployment with a new Master-Detail field, soft delete (send to the Recycle Bin) all detail records before proceeding to deploy the Master-Detail field, or the deployment fails. During the deployment, detail records are permanently deleted from the Recycle Bin and cannot be recovered.

2. For a deployment that converts a Lookup field relationship to a Master-Detail relationship, detail records must reference a master record or be soft-deleted (sent to the Recycle Bin) for the deployment to succeed. However, a successful deployment permanently deletes any detail records in the Recycle Bin.

# flags.deploy-dir.summary

Root of local directory tree of files to deploy.

# flags.deploy-dir.description

The root must contain a valid package.xml file describing the entities in the directory structure. This flag is requiredto initiate a deployment if you don’t use --zip-file. If you specify both --zip-file and --deploy-dir, a zip file of the contents of the --deploy-dir directory is written to the location specified by --zip-file.

If you specify this flag, don’t specify --metadata or --manifest.

# flags.zip-file.summary

Path to .zip file of metadata to deploy.

# flags.zip-file.description

You must indicate this flag or --deploy-dir. If you specify both --zip-file and --deploy-dir, a .zip file of the contents of the deploy directory is created at the path specified for the .zip file.

# flags.ignore-warnings.summary

Ignore warnings and allow a deployment to complete successfully.

# flags.ignore-warnings.description

The default is to not ignore warnings. If a warning occurs and you specified this flag, the success field in DeployMessage is set to true. If you didn’t specify this flag, success is set to false, and the warning is treated like an error.

# flags.test-level.summary

Deployment Apex testing level.

# flags.test-level.description

Valid values are:

- NoTestRun — No tests are run. This test level applies only to deployments to development environments, such as sandbox, Developer Edition, or trial orgs. This test level is the default for development environments.

- RunSpecifiedTests — Runs only the tests that you specify with the --run-tests flag. Code coverage requirements differ from the default coverage requirements when using this test level. Executed tests must comprise a minimum of 75% code coverage for each class and trigger in the deployment package. This coverage is computed for each class and trigger individually and is different than the overall coverage percentage.

- RunLocalTests — All tests in your org are run, except the ones that originate from installed managed packages. This test level is the default for production deployments that include Apex classes or triggers.

- RunAllTestsInOrg — All tests in your org are run, including tests of managed packages.

If you don’t specify a test level, the default behavior depends on the contents of your deployment package. For more information, see “Running Tests in a Deployment” in the Metadata API Developer Guide.

# flags.ignore-errors.summary

Ignore any errors and don’t roll back deployment.

# flags.ignore-errors.description

The default is to not ignore errors. Don’t specify this flag when deploying to a production org. If you specify the flag, components without errors are deployed, and components with errors are skipped.

# flags.validated-deploy-request-id.summary

Request ID of the validated deployment to run a Quick Deploy.

# flags.validated-deploy-request-id.description

Specifies the ID of a package with recently validated components to run a Quick Deploy. Deploying a validation helps you shorten your deployment time because tests aren’t rerun. If you have a recent successful validation, you can deploy the validated components without running tests. A validation doesn’t save any components in the org.

You use a validation only to check the success or failure messages that you would receive with an actual deployment. It doesn’t validate your components. This flag sets the checkOnly="true" parameter for your deployment. Before deploying a recent validation, ensure that the following requirements are met:

1. The components have been validated successfully for the target environment within the last 10 days.
2. As part of the validation, Apex tests in the target org have passed.
3. Code coverage requirements are met:

- If all tests in the org or all local tests are run, overall code coverage is at least 75%, and Apex triggers have some coverage.
- If specific tests are run with the RunSpecifiedTests test level, each class and trigger that was deployed is covered by at least 75% individually.

# flags.run-tests.summary

Apex tests to run when --test-level is RunSpecifiedTests.

# flags.single-package.summary

Indicates that the zip file points to a directory structure for a single package.

# flags.single-package.description

Use this flag with the --zip-file flag. By default, the CLI assumes the directory is structured for a set of packages.

# flags.wait.summary

Number of minutes to wait for command to complete.

# flags.wait.description

Default is -1 (no limit).

# flags.soapdeploy.summary

Deploy metadata with SOAP API instead of the default REST API.

# flags.soapdeploy.description

Because SOAP API has a lower .ZIP file size limit (400 MB uncompressed, 39 MB compressed), Salesforce recommends REST API deployment. This flag provides backwards compatibility with API version 50.0 and earlier when deploy used SOAP API by default.

# flags.metadata.summary

Comma-separated list of metadata component names to deploy.

# flags.manifest.summary

Full file path for manifest (package.xml) of components to deploy.

# flags.manifest.description

If you specify this flag, don’t specify --metadata or --deploy-dir.

# flags.force-overwrite.summary

Ignore source conflict warnings and overwrite changes to the org.
