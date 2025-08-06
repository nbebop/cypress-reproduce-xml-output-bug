# cypress-reproduce-xml-output-bug

Minimally working example with Server und Cypress Tests to test a reported bug regarding the runner's output of XML files in Cypress.

## Instructions

1. Install Cypress
2. Run the Tests
3. Compare output of the POST request in the runner, console (log) and console (request output)
4. The runner's output is different: the "<" and ">" are stripped from the opening tags and as links interpreted 
