Feature: Red Badger Website

  @SmokeTest
    Scenario Outline: Navigate to a page to measure performance
    Given I am measuring page performance on "<url>"
    Examples:
      | url |
      |https://www-staging.red-badger.com|
      |https://www-staging.red-badger.com/what-we-do|
      |https://www-staging.red-badger.com/our-work|
      |https://www-staging.red-badger.com/about-us|
      |https://www-staging.red-badger.com/about-us/people|


  @SmokeTest @FullRegression
  Scenario Outline: Navigate to Red Badger and perform basic navigation
    Given I am on "<viewport>"
    And I have navigated to "<url>"
    Then I will see the text "We work with you to deliver digital products that make a difference to people."
    When I click "What we do"
    Then I will see the text "Do the right thing."
    When I click "About Us"
    Then I will see the text "This is what we believe – and what the founders say after a couple of pints"
    When I click "Blog"
    Then I will see a "blogs" element
    And I will see a "all-items" element
    And I will see a "badger life" element
    And I will see a "leadership" element
    And I will see a "news" element
    And I will see a "opinion" element
    And I will see a "process" element
    And I will see a "strategy" element
    And I will see a "technology" element
    And I will see a "ux and design" element


  Examples:
    |viewport|url|
    |desktop|https://www-staging.red-badger.com|
    |mobile |https://www-staging.red-badger.com|
    |tablet |https://www-staging.red-badger.com|


  @SmokeTest
    Scenario Outline: Check that all slices of the Homepage are displayed
    Given I am on "<viewport>"
    And I have navigated to "https://www-staging.red-badger.com"
    Then I will see a "Top slice" element
    And I will see a "case study slice" element
    And I will see a "what we do slice" element
    And I will see a "tech slice" element
    And I will see a "contact us slice" element
    And I will see a "blog slice" element
    And I will see a "newsletter slice" element

    Examples:
    |viewport|
    |desktop |
    |mobile  |
    |tablet  |

    @SmokeTest
      Scenario Outline: Print out performance metrics
      Given I am on "<viewport>"
      And I have navigated to "<url>"
      Then I expect the perceived page load time to be under "<expectedLoadTime>"

      Examples:
        | viewport | url                                                 | expectedLoadTime |
        | desktop  | https://www-staging.red-badger.com                  | 1000             |
        | desktop  | https://www-staging.red-badger.com/what-we-do       | 1000             |
        | desktop  | https://www-staging.red-badger.com/about-us         | 1000             |
        | desktop  | https://www-staging.red-badger.com/blog/            | 2000             |
        | desktop  | https://www-staging.red-badger.com/about-us/events/ | 1000             |
        | mobile   | https://www-staging.red-badger.com                  | 1000             |
        | mobile   | https://www-staging.red-badger.com/what-we-do       | 1000             |
        | mobile   | https://www-staging.red-badger.com/about-us         | 1000             |
        | mobile   | https://www-staging.red-badger.com/blog/            | 2000             |
        | mobile   | https://www-staging.red-badger.com/about-us/events/ | 1000             |


  @SmokeTest
  Scenario: Navigate to blog and use the search feature
    Given I have navigated to "https://www-staging.red-badger.com/blog/"
    Then I will see a "search" element
    When I click "search box"
    When I type "Testing" into the search field
    When I press "enter"
    Then the url will be "https://www-staging.red-badger.com/search?q=Testing"
    And I will see a "results listing" element

  @FullRegression
  Scenario Outline: Navigate to Red Badger again - only run in a full regression
    Given I have navigated to "<url>"
    Then I will see the text "We work with you to deliver digital products that make a difference to people."
    When I click "What we do"
    Then I will see the text "Do the right thing."
    When I click "About Us"
    Then I will see the text "This is what we believe – and what the founders say after a couple of pints"
    When I click "Blog"
    Then I will see a "blogs" element
    Then I will see a "all-items" element
    Then I will see a "badger life" element
    Then I will see a "leadership" element
    Then I will see a "news" element
    Then I will see a "opinion" element
    Then I will see a "process" element
    Then I will see a "strategy" element
    Then I will see a "technology" element
    Then I will see a "ux and design" element
    When I click "Events"

    Examples:
      |url|
      |https://www-staging.red-badger.com|
      |https://www.red-badger.com|