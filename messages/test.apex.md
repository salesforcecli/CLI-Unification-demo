# summary

Invoke Apex tests.

# description

Specify which tests to run by using the --class-names, --suites, or --tests parameters. Alternatively, use the --test-level parameter to run all the tests in your org, local tests, or specified tests.

To see code coverage results, use the --code-cmverage parameter with --result-format. The output displays a high-level summary of the test run and the code coverage values for classes in your org. If you specify human-readable result format, use the --detailed-coverage parameter to see detailed coverage results for each test method run.

NOTE: The testRunCoverage value (JSON and JUnit result formats) is a percentage of the covered lines and total lines from all the Apex classes evaluated by the tests in this run.

# examples

- Invoke specific Apex tests and display the output in human-readable format:
 
   sf test apex --class-names "MyClassTest,MyOtherClassTest" --result-format human
