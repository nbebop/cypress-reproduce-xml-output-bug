# cypress-reproduce-xml-output-bug

Minimally working example with Server und Cypress Tests to test a reported bug regarding the runner's output of XML files in Cypress.

## Instructions

1. Install Cypress 
2. Start the server `node server.js`
3. Open cypress  `npx cypress open`
4. run the Tests
5. Compare output of the POST request in the runner, console (log) and console (request output). \
Example:
   ![Runner's and console's output](/bug_img/runner_console_output.png)
6. The runner's output is different: the "<" and ">" are stripped from the opening tags and as links interpreted 



## System Information
- MS Windows 11 Pro
- Cypress 14.4.0
- node v22.17.1
- npm 10.9.2
