Feature: Customer Registration

  Scenario: Successful registration
    Given I open the registration page
    When I fill all valid customer data
    Then I should be redirected to the login page

  Scenario: Registration with existing email
    Given I open the registration page
    When I use an email that is already registered
    Then I should see an email already exists error

  Scenario: Registration with weak password
    Given I open the registration page
    When I enter a password less than 8 characters
    Then I should see a password strength warning

  Scenario: Registration with missing required fields
    Given I open the registration page
    When I click register without filling data
    Then I should see validation errors on required fields

  Scenario: Registration with invalid phone format
    Given I open the registration page
    When I enter an invalid phone number
    Then I should see a phone format error