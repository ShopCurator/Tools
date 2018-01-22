Feature: Performing a login

As a user on the admin login page
I want to login
Because I want to create the page

    Background:

        Given I am on the admin page

    Scenario Outline: Performing login operation with passing test data as data table
        When I login with username and password <user> <password> into the text box
        Then I should login to my home page
        

        Examples:
            | user      |  | password   |
            | "Avinash" |  | "@nyt#1ng" |

