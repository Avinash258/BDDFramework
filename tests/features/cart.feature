@regression @cart
Feature: Cart management

  Background:
    Given I am logged in as "standard_user"
    And I have added product "Sauce Labs Backpack" to the cart

  Scenario: View cart
    When I open the cart
    Then I should see product "Sauce Labs Backpack" in the cart

  Scenario: Remove item from cart
    When I open the cart
    And I remove product "Sauce Labs Backpack" from the cart on cart page
    Then I should not see product "Sauce Labs Backpack" in the cart
    And the cart badge should show 0

