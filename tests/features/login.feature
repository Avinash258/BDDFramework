@smoke @login
Feature: Login to Swag Labs

  Background:
    Given I am on the login page

  Scenario: Successful login with standard user
    When I login as "standard_user" with password "secret_sauce"
    Then I should see the inventory page

  Scenario: Login with locked out user
    When I login as "locked_out_user" with password "secret_sauce"
    Then I should see error message containing "Sorry, this user has been locked out"

  Scenario Outline: Login validation errors
    When I login as "<username>" with password "<password>"
    Then I should see error message containing "<message>"

    Examples:
      | username      | password     | message                                      |
      |               |              | Username is required                         |
      | standard_user |              | Password is required                         |
      | invalid_user  | wrong_pass   | Username and password do not match any user |

