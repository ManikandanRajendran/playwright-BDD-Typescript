Feature: test feature

    Background:
        Given Navigate to the Bookcart homepage
        When user clicks on login link

    Scenario: User can be logged in successfully
        When user enters username as "ortoni"
        When user enters password as "pass1234"
        When user clicks login button
        Then user should see the logged in page

    @test
    Scenario: User can't be logged in successfully
        When user enters username as "ortonifail"
        When user enters password as "pass1234"
        When user clicks login button
        Then user should see the error page