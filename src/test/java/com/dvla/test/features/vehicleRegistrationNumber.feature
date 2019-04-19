Feature: Search Vehicle Registration Number
  As a user
  I want to search a vehicle registration number
  So that I can get addition information about the particular vehicle

  Scenario Outline: Information about vehicle registration number
    Given I have successfully landed vehicle information page
    When I have elected to Start Now a new vehicle information
    And I enter the registration number of the vehicle with row "<rowNumber>" imported from excel sheet
    And I clicked the continue button to proceed
    Then I shall see the vehicle registration "<rowNumber>" matches with the make and colour
    Then I shall see the following text displayed
      | Is this the vehicle you are looking for? |

    Examples:
      | rowNumber |
      | 1         |
      | 2         |
      | 3         |
      | 4         |
      | 5         |
      | 6         |
      | 7         |
      | 8         |
      | 9         |
      | 10        |
      | 11        |
      | 12        |
