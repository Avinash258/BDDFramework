@regression @menu
Feature: Menu actions

  Background:
    Given I am logged in as "standard_user"

  Scenario: Logout from menu
    When I open the menu
    And I click logout
    Then I should be on the login page from menu

  Scenario: Reset app state
    Given I have added product "Sauce Labs Backpack" to the cart
    When I open the menu
    And I reset app state
    Then the cart badge should show 0

