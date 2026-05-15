Feature: Product Search

  Scenario: Search for Hammer
    Given I am on the home page
    When I search for "Hammer"
    Then I should see results related to "Hammer"

  Scenario: Search for Drill
    Given I am on the home page
    When I search for "Drill"
    Then I should see results related to "Drill"

  Scenario: Search for non-existing product
    Given I am on the home page
    When I search for "iPhone"
    Then I should see no results message

  Scenario: Search with empty query
    Given I am on the home page
    When I search for ""
    Then I should see all products

  Scenario: Verify search results count
    Given I am on the home page
    When I search for "Chisel"
    Then the results count should be at least 1