Feature: Verify an element on a website
  Scenario: Verify if the title on a website correspond to what we expect
    Given The browser is open
    When I open "https://www.algoan.com/" website
    Then the title should be "Algoan"