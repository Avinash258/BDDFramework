@smoke @checkout
Feature: Complete checkout

  Background:
    Given I am logged in as "standard_user"
    And I have added product "Sauce Labs Backpack" to the cart
    And I open the cart

  Scenario: Successful checkout
    When I proceed to checkout
    And I fill checkout information with:
      | firstName | John  |
      | lastName  | Doe   |
      | postalCode| 12345 |
    And I continue to overview
    And I finish the checkout
    Then I should see checkout complete message

  Scenario: Checkout info validation
    When I proceed to checkout
    And I try to continue to overview
    Then I should see checkout error containing "Error"

