
Feature:  Low Emission Certificate Stubbed API

Scenario: AC1.1 fetch all LEC results
  Given I am an API Consumer
  When I send a GET request to localhost/lec-results
  Then the the system returns array of lecTestResult stub data for today in json format
  And the system returns an HTTP status code 200 OK