Feature: Contact Us Functionality

  Scenario: Send valid contact message
    Given I open the Contact page
    When I fill the contact form with valid data
    Then I should see a success message "Message sent"

  Scenario: Send message with invalid email
    Given I open the Contact page
    When I enter an invalid email "test.com"
    Then I should see an error message "Email is invalid"

  Scenario: Submit empty contact form
    Given I open the Contact page
    When I click the submit button
    Then I should see multiple validation errors

  Scenario: Send message with missing subject
    Given I open the Contact page
    When I fill the form without selecting a subject
    Then I should see an error message "Subject is required"

  Scenario: Verify attachment field exists
    Given I open the Contact page
    Then I should see an upload field for attachments