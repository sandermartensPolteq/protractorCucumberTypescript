Feature: Name field on homepage
    Scenario: Fill in a valid name
        Given on the homepage
        When the user enters his name
        Then he should see his name