@regression @inventory
Feature: Browse and sort products

  Background:
    Given I am logged in as "standard_user"

  Scenario: View inventory list
    Then I should see the inventory page
    And I should see at least 1 product

  Scenario: Add multiple products to cart
    When I add product "Sauce Labs Backpack" to the cart
    And I add product "Sauce Labs Bike Light" to the cart
    Then the cart badge should show 2

  Scenario: Remove product from cart on inventory page
    Given I have added product "Sauce Labs Backpack" to the cart
    When I remove product "Sauce Labs Backpack" from the cart
    Then the cart badge should show 0

  Scenario Outline: Sort products
    When I sort products by "<option>"
    Then the products should be sorted by "<option>"

    Examples:
      | option               |
      | Name (A to Z)       |
      | Name (Z to A)       |
      | Price (low to high) |
      | Price (high to low) |

