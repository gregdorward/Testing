$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("RedBadger.feature");
formatter.feature({
  "line": 1,
  "name": "Red Badger Website",
  "description": "",
  "id": "red-badger-website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Navigate to a page to measure performance",
  "description": "",
  "id": "red-badger-website;navigate-to-a-page-to-measure-performance",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am measuring page performance on \"\u003curl\u003e\"",
  "keyword": "Given "
});
formatter.examples({
  "line": 6,
  "name": "",
  "description": "",
  "id": "red-badger-website;navigate-to-a-page-to-measure-performance;",
  "rows": [
    {
      "cells": [
        "url"
      ],
      "line": 7,
      "id": "red-badger-website;navigate-to-a-page-to-measure-performance;;1"
    },
    {
      "cells": [
        "https://www-staging.red-badger.com"
      ],
      "line": 8,
      "id": "red-badger-website;navigate-to-a-page-to-measure-performance;;2"
    },
    {
      "cells": [
        "https://www-staging.red-badger.com/what-we-do"
      ],
      "line": 9,
      "id": "red-badger-website;navigate-to-a-page-to-measure-performance;;3"
    },
    {
      "cells": [
        "https://www-staging.red-badger.com/our-work"
      ],
      "line": 10,
      "id": "red-badger-website;navigate-to-a-page-to-measure-performance;;4"
    },
    {
      "cells": [
        "https://www-staging.red-badger.com/about-us"
      ],
      "line": 11,
      "id": "red-badger-website;navigate-to-a-page-to-measure-performance;;5"
    },
    {
      "cells": [
        "https://www-staging.red-badger.com/about-us/people"
      ],
      "line": 12,
      "id": "red-badger-website;navigate-to-a-page-to-measure-performance;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1787214907,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Navigate to a page to measure performance",
  "description": "",
  "id": "red-badger-website;navigate-to-a-page-to-measure-performance;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am measuring page performance on \"https://www-staging.red-badger.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www-staging.red-badger.com",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.getPagePerformance(String)"
});
formatter.result({
  "duration": 1950285872,
  "status": "passed"
});
formatter.after({
  "duration": 83439326,
  "status": "passed"
});
formatter.before({
  "duration": 1026515073,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Navigate to a page to measure performance",
  "description": "",
  "id": "red-badger-website;navigate-to-a-page-to-measure-performance;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am measuring page performance on \"https://www-staging.red-badger.com/what-we-do\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www-staging.red-badger.com/what-we-do",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.getPagePerformance(String)"
});
formatter.result({
  "duration": 1832348123,
  "status": "passed"
});
formatter.after({
  "duration": 74054735,
  "status": "passed"
});
formatter.before({
  "duration": 1125879663,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Navigate to a page to measure performance",
  "description": "",
  "id": "red-badger-website;navigate-to-a-page-to-measure-performance;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am measuring page performance on \"https://www-staging.red-badger.com/our-work\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www-staging.red-badger.com/our-work",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.getPagePerformance(String)"
});
formatter.result({
  "duration": 3608821103,
  "status": "passed"
});
formatter.after({
  "duration": 81125410,
  "status": "passed"
});
formatter.before({
  "duration": 972731739,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Navigate to a page to measure performance",
  "description": "",
  "id": "red-badger-website;navigate-to-a-page-to-measure-performance;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am measuring page performance on \"https://www-staging.red-badger.com/about-us\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www-staging.red-badger.com/about-us",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.getPagePerformance(String)"
});
formatter.result({
  "duration": 2969416205,
  "status": "passed"
});
formatter.after({
  "duration": 77100833,
  "status": "passed"
});
formatter.before({
  "duration": 1194788731,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Navigate to a page to measure performance",
  "description": "",
  "id": "red-badger-website;navigate-to-a-page-to-measure-performance;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am measuring page performance on \"https://www-staging.red-badger.com/about-us/people\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www-staging.red-badger.com/about-us/people",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.getPagePerformance(String)"
});
formatter.result({
  "duration": 1665185428,
  "status": "passed"
});
formatter.after({
  "duration": 84513253,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Navigate to Red Badger and perform basic navigation",
  "description": "",
  "id": "red-badger-website;navigate-to-red-badger-and-perform-basic-navigation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@SmokeTest"
    },
    {
      "line": 15,
      "name": "@FullRegression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I am on \"\u003cviewport\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I have navigated to \"\u003curl\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I will see the text \"We work with you to deliver digital products that make a difference to people.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I click \"What we do\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I will see the text \"Do the right thing.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I click \"About Us\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I will see the text \"This is what we believe – and what the founders say after a couple of pints\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I click \"Blog\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I will see a \"blogs\" element",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I will see a \"all-items\" element",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I will see a \"badger life\" element",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I will see a \"leadership\" element",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I will see a \"news\" element",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I will see a \"opinion\" element",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I will see a \"process\" element",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I will see a \"strategy\" element",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I will see a \"technology\" element",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I will see a \"ux and design\" element",
  "keyword": "And "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "red-badger-website;navigate-to-red-badger-and-perform-basic-navigation;",
  "rows": [
    {
      "cells": [
        "viewport",
        "url"
      ],
      "line": 38,
      "id": "red-badger-website;navigate-to-red-badger-and-perform-basic-navigation;;1"
    },
    {
      "cells": [
        "desktop",
        "https://www-staging.red-badger.com"
      ],
      "line": 39,
      "id": "red-badger-website;navigate-to-red-badger-and-perform-basic-navigation;;2"
    },
    {
      "cells": [
        "mobile",
        "https://www-staging.red-badger.com"
      ],
      "line": 40,
      "id": "red-badger-website;navigate-to-red-badger-and-perform-basic-navigation;;3"
    },
    {
      "cells": [
        "tablet",
        "https://www-staging.red-badger.com"
      ],
      "line": 41,
      "id": "red-badger-website;navigate-to-red-badger-and-perform-basic-navigation;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1038419686,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Navigate to Red Badger and perform basic navigation",
  "description": "",
  "id": "red-badger-website;navigate-to-red-badger-and-perform-basic-navigation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@FullRegression"
    },
    {
      "line": 15,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I am on \"desktop\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I have navigated to \"https://www-staging.red-badger.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I will see the text \"We work with you to deliver digital products that make a difference to people.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I click \"What we do\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I will see the text \"Do the right thing.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I click \"About Us\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I will see the text \"This is what we believe – and what the founders say after a couple of pints\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I click \"Blog\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I will see a \"blogs\" element",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I will see a \"all-items\" element",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I will see a \"badger life\" element",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I will see a \"leadership\" element",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I will see a \"news\" element",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I will see a \"opinion\" element",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I will see a \"process\" element",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I will see a \"strategy\" element",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I will see a \"technology\" element",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I will see a \"ux and design\" element",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "desktop",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.setScreenSize(String)"
});
formatter.result({
  "duration": 281808643,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www-staging.red-badger.com",
      "offset": 21
    }
  ],
  "location": "StepDefinitions.I_have_launched_chrome_and_navigated_to(String)"
});
formatter.result({
  "duration": 1428219137,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "We work with you to deliver digital products that make a difference to people.",
      "offset": 21
    }
  ],
  "location": "StepDefinitions.verifyTextPresent(String)"
});
formatter.result({
  "duration": 58291308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What we do",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.tap_button(String)"
});
formatter.result({
  "duration": 155776451,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do the right thing.",
      "offset": 21
    }
  ],
  "location": "StepDefinitions.verifyTextPresent(String)"
});
formatter.result({
  "duration": 75591973,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "About Us",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.tap_button(String)"
});
formatter.result({
  "duration": 267236958,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is what we believe – and what the founders say after a couple of pints",
      "offset": 21
    }
  ],
  "location": "StepDefinitions.verifyTextPresent(String)"
});
formatter.result({
  "duration": 87430282,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blog",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.tap_button(String)"
});
formatter.result({
  "duration": 1626950385,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "blogs",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 28631235,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "all-items",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 31776945,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "badger life",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 152078415,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "leadership",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 21149822,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "news",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 24111698,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "opinion",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 30546717,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "process",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 19810781,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "strategy",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 18750851,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "technology",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 24522314,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ux and design",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 36214726,
  "status": "passed"
});
formatter.after({
  "duration": 145283307,
  "status": "passed"
});
formatter.before({
  "duration": 992295731,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Navigate to Red Badger and perform basic navigation",
  "description": "",
  "id": "red-badger-website;navigate-to-red-badger-and-perform-basic-navigation;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@FullRegression"
    },
    {
      "line": 15,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I am on \"mobile\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I have navigated to \"https://www-staging.red-badger.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I will see the text \"We work with you to deliver digital products that make a difference to people.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I click \"What we do\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I will see the text \"Do the right thing.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I click \"About Us\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I will see the text \"This is what we believe – and what the founders say after a couple of pints\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I click \"Blog\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I will see a \"blogs\" element",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I will see a \"all-items\" element",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I will see a \"badger life\" element",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I will see a \"leadership\" element",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I will see a \"news\" element",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I will see a \"opinion\" element",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I will see a \"process\" element",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I will see a \"strategy\" element",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I will see a \"technology\" element",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I will see a \"ux and design\" element",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "mobile",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.setScreenSize(String)"
});
formatter.result({
  "duration": 256702749,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www-staging.red-badger.com",
      "offset": 21
    }
  ],
  "location": "StepDefinitions.I_have_launched_chrome_and_navigated_to(String)"
});
formatter.result({
  "duration": 1702234006,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "We work with you to deliver digital products that make a difference to people.",
      "offset": 21
    }
  ],
  "location": "StepDefinitions.verifyTextPresent(String)"
});
formatter.result({
  "duration": 48690838,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What we do",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.tap_button(String)"
});
formatter.result({
  "duration": 359991467,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do the right thing.",
      "offset": 21
    }
  ],
  "location": "StepDefinitions.verifyTextPresent(String)"
});
formatter.result({
  "duration": 72832102,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "About Us",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.tap_button(String)"
});
formatter.result({
  "duration": 754738020,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is what we believe – and what the founders say after a couple of pints",
      "offset": 21
    }
  ],
  "location": "StepDefinitions.verifyTextPresent(String)"
});
formatter.result({
  "duration": 177226630,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blog",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.tap_button(String)"
});
formatter.result({
  "duration": 2198533132,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "blogs",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 23570475,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "all-items",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 19102163,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "badger life",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 27733527,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "leadership",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 150898719,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "news",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 19482615,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "opinion",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 25790439,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "process",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 21530652,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "strategy",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 25507128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "technology",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 22991043,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ux and design",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 24679070,
  "status": "passed"
});
formatter.after({
  "duration": 81781141,
  "status": "passed"
});
formatter.before({
  "duration": 839715811,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Navigate to Red Badger and perform basic navigation",
  "description": "",
  "id": "red-badger-website;navigate-to-red-badger-and-perform-basic-navigation;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@FullRegression"
    },
    {
      "line": 15,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I am on \"tablet\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I have navigated to \"https://www-staging.red-badger.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I will see the text \"We work with you to deliver digital products that make a difference to people.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I click \"What we do\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I will see the text \"Do the right thing.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I click \"About Us\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I will see the text \"This is what we believe – and what the founders say after a couple of pints\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I click \"Blog\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I will see a \"blogs\" element",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I will see a \"all-items\" element",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I will see a \"badger life\" element",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I will see a \"leadership\" element",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I will see a \"news\" element",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I will see a \"opinion\" element",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I will see a \"process\" element",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I will see a \"strategy\" element",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I will see a \"technology\" element",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I will see a \"ux and design\" element",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "tablet",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.setScreenSize(String)"
});
formatter.result({
  "duration": 242707389,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www-staging.red-badger.com",
      "offset": 21
    }
  ],
  "location": "StepDefinitions.I_have_launched_chrome_and_navigated_to(String)"
});
formatter.result({
  "duration": 1315459562,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "We work with you to deliver digital products that make a difference to people.",
      "offset": 21
    }
  ],
  "location": "StepDefinitions.verifyTextPresent(String)"
});
formatter.result({
  "duration": 43557624,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "What we do",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.tap_button(String)"
});
formatter.result({
  "duration": 112170983,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Do the right thing.",
      "offset": 21
    }
  ],
  "location": "StepDefinitions.verifyTextPresent(String)"
});
formatter.result({
  "duration": 81663391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "About Us",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.tap_button(String)"
});
formatter.result({
  "duration": 236578702,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is what we believe – and what the founders say after a couple of pints",
      "offset": 21
    }
  ],
  "location": "StepDefinitions.verifyTextPresent(String)"
});
formatter.result({
  "duration": 110377585,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blog",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.tap_button(String)"
});
formatter.result({
  "duration": 1604154597,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "blogs",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 21938041,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "all-items",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 20079482,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "badger life",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 147113155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "leadership",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 22706882,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "news",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 27601833,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "opinion",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 21166221,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "process",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 25376118,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "strategy",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 18845072,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "technology",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 23502311,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ux and design",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 18955775,
  "status": "passed"
});
formatter.after({
  "duration": 81203012,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 45,
  "name": "Check that all slices of the Homepage are displayed",
  "description": "",
  "id": "red-badger-website;check-that-all-slices-of-the-homepage-are-displayed",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 44,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "I am on \"\u003cviewport\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "I have navigated to \"https://www-staging.red-badger.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I will see a \"Top slice\" element",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "I will see a \"case study slice\" element",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I will see a \"what we do slice\" element",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I will see a \"tech slice\" element",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I will see a \"contact us slice\" element",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I will see a \"blog slice\" element",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I will see a \"newsletter slice\" element",
  "keyword": "And "
});
formatter.examples({
  "line": 56,
  "name": "",
  "description": "",
  "id": "red-badger-website;check-that-all-slices-of-the-homepage-are-displayed;",
  "rows": [
    {
      "cells": [
        "viewport"
      ],
      "line": 57,
      "id": "red-badger-website;check-that-all-slices-of-the-homepage-are-displayed;;1"
    },
    {
      "cells": [
        "desktop"
      ],
      "line": 58,
      "id": "red-badger-website;check-that-all-slices-of-the-homepage-are-displayed;;2"
    },
    {
      "cells": [
        "mobile"
      ],
      "line": 59,
      "id": "red-badger-website;check-that-all-slices-of-the-homepage-are-displayed;;3"
    },
    {
      "cells": [
        "tablet"
      ],
      "line": 60,
      "id": "red-badger-website;check-that-all-slices-of-the-homepage-are-displayed;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 831490755,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "Check that all slices of the Homepage are displayed",
  "description": "",
  "id": "red-badger-website;check-that-all-slices-of-the-homepage-are-displayed;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 44,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "I am on \"desktop\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "I have navigated to \"https://www-staging.red-badger.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I will see a \"Top slice\" element",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "I will see a \"case study slice\" element",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I will see a \"what we do slice\" element",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I will see a \"tech slice\" element",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I will see a \"contact us slice\" element",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I will see a \"blog slice\" element",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I will see a \"newsletter slice\" element",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "desktop",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.setScreenSize(String)"
});
formatter.result({
  "duration": 262000646,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www-staging.red-badger.com",
      "offset": 21
    }
  ],
  "location": "StepDefinitions.I_have_launched_chrome_and_navigated_to(String)"
});
formatter.result({
  "duration": 1448551248,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Top slice",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 40619393,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "case study slice",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 31791048,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "what we do slice",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 20121433,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tech slice",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 20422153,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "contact us slice",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 20448055,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "blog slice",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 20626148,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newsletter slice",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 20342214,
  "status": "passed"
});
formatter.after({
  "duration": 75062335,
  "status": "passed"
});
formatter.before({
  "duration": 845191243,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Check that all slices of the Homepage are displayed",
  "description": "",
  "id": "red-badger-website;check-that-all-slices-of-the-homepage-are-displayed;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 44,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "I am on \"mobile\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "I have navigated to \"https://www-staging.red-badger.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I will see a \"Top slice\" element",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "I will see a \"case study slice\" element",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I will see a \"what we do slice\" element",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I will see a \"tech slice\" element",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I will see a \"contact us slice\" element",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I will see a \"blog slice\" element",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I will see a \"newsletter slice\" element",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "mobile",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.setScreenSize(String)"
});
formatter.result({
  "duration": 198289190,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www-staging.red-badger.com",
      "offset": 21
    }
  ],
  "location": "StepDefinitions.I_have_launched_chrome_and_navigated_to(String)"
});
formatter.result({
  "duration": 1365038219,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Top slice",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 24615692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "case study slice",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 21005567,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "what we do slice",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 22342437,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tech slice",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 19055282,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "contact us slice",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 19571044,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "blog slice",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 20836781,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newsletter slice",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 20077037,
  "status": "passed"
});
formatter.after({
  "duration": 76915522,
  "status": "passed"
});
formatter.before({
  "duration": 777987102,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Check that all slices of the Homepage are displayed",
  "description": "",
  "id": "red-badger-website;check-that-all-slices-of-the-homepage-are-displayed;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 44,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "I am on \"tablet\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "I have navigated to \"https://www-staging.red-badger.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I will see a \"Top slice\" element",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "I will see a \"case study slice\" element",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I will see a \"what we do slice\" element",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I will see a \"tech slice\" element",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I will see a \"contact us slice\" element",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I will see a \"blog slice\" element",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I will see a \"newsletter slice\" element",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "tablet",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.setScreenSize(String)"
});
formatter.result({
  "duration": 276595421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www-staging.red-badger.com",
      "offset": 21
    }
  ],
  "location": "StepDefinitions.I_have_launched_chrome_and_navigated_to(String)"
});
formatter.result({
  "duration": 1710954877,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Top slice",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 21300743,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "case study slice",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 23170068,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "what we do slice",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 21911956,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tech slice",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 19245449,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "contact us slice",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 21361190,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "blog slice",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 18185052,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newsletter slice",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 23431760,
  "status": "passed"
});
formatter.after({
  "duration": 77545480,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 63,
  "name": "Print out performance metrics",
  "description": "",
  "id": "red-badger-website;print-out-performance-metrics",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 62,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "I am on \"\u003cviewport\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "I have navigated to \"\u003curl\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I expect the perceived page load time to be under \"\u003cexpectedLoadTime\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 68,
  "name": "",
  "description": "",
  "id": "red-badger-website;print-out-performance-metrics;",
  "rows": [
    {
      "cells": [
        "viewport",
        "url",
        "expectedLoadTime"
      ],
      "line": 69,
      "id": "red-badger-website;print-out-performance-metrics;;1"
    },
    {
      "cells": [
        "desktop",
        "https://www-staging.red-badger.com",
        "1000"
      ],
      "line": 70,
      "id": "red-badger-website;print-out-performance-metrics;;2"
    },
    {
      "cells": [
        "desktop",
        "https://www-staging.red-badger.com/what-we-do",
        "1000"
      ],
      "line": 71,
      "id": "red-badger-website;print-out-performance-metrics;;3"
    },
    {
      "cells": [
        "desktop",
        "https://www-staging.red-badger.com/about-us",
        "1000"
      ],
      "line": 72,
      "id": "red-badger-website;print-out-performance-metrics;;4"
    },
    {
      "cells": [
        "desktop",
        "https://www-staging.red-badger.com/blog/",
        "2000"
      ],
      "line": 73,
      "id": "red-badger-website;print-out-performance-metrics;;5"
    },
    {
      "cells": [
        "desktop",
        "https://www-staging.red-badger.com/about-us/events/",
        "1000"
      ],
      "line": 74,
      "id": "red-badger-website;print-out-performance-metrics;;6"
    },
    {
      "cells": [
        "mobile",
        "https://www-staging.red-badger.com",
        "1000"
      ],
      "line": 75,
      "id": "red-badger-website;print-out-performance-metrics;;7"
    },
    {
      "cells": [
        "mobile",
        "https://www-staging.red-badger.com/what-we-do",
        "1000"
      ],
      "line": 76,
      "id": "red-badger-website;print-out-performance-metrics;;8"
    },
    {
      "cells": [
        "mobile",
        "https://www-staging.red-badger.com/about-us",
        "1000"
      ],
      "line": 77,
      "id": "red-badger-website;print-out-performance-metrics;;9"
    },
    {
      "cells": [
        "mobile",
        "https://www-staging.red-badger.com/blog/",
        "2000"
      ],
      "line": 78,
      "id": "red-badger-website;print-out-performance-metrics;;10"
    },
    {
      "cells": [
        "mobile",
        "https://www-staging.red-badger.com/about-us/events/",
        "1000"
      ],
      "line": 79,
      "id": "red-badger-website;print-out-performance-metrics;;11"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 824195043,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "Print out performance metrics",
  "description": "",
  "id": "red-badger-website;print-out-performance-metrics;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 62,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "I am on \"desktop\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "I have navigated to \"https://www-staging.red-badger.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I expect the perceived page load time to be under \"1000\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "desktop",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.setScreenSize(String)"
});
formatter.result({
  "duration": 261770277,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www-staging.red-badger.com",
      "offset": 21
    }
  ],
  "location": "StepDefinitions.I_have_launched_chrome_and_navigated_to(String)"
});
formatter.result({
  "duration": 1310430552,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 51
    }
  ],
  "location": "StepDefinitions.isPerformanceAcceptable(int)"
});
formatter.result({
  "duration": 323830130,
  "status": "passed"
});
formatter.after({
  "duration": 76607298,
  "status": "passed"
});
formatter.before({
  "duration": 801857562,
  "status": "passed"
});
formatter.scenario({
  "line": 71,
  "name": "Print out performance metrics",
  "description": "",
  "id": "red-badger-website;print-out-performance-metrics;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 62,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "I am on \"desktop\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "I have navigated to \"https://www-staging.red-badger.com/what-we-do\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I expect the perceived page load time to be under \"1000\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "desktop",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.setScreenSize(String)"
});
formatter.result({
  "duration": 262635083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www-staging.red-badger.com/what-we-do",
      "offset": 21
    }
  ],
  "location": "StepDefinitions.I_have_launched_chrome_and_navigated_to(String)"
});
formatter.result({
  "duration": 1639519605,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 51
    }
  ],
  "location": "StepDefinitions.isPerformanceAcceptable(int)"
});
formatter.result({
  "duration": 294243900,
  "status": "passed"
});
formatter.after({
  "duration": 79950124,
  "status": "passed"
});
formatter.before({
  "duration": 817180246,
  "status": "passed"
});
formatter.scenario({
  "line": 72,
  "name": "Print out performance metrics",
  "description": "",
  "id": "red-badger-website;print-out-performance-metrics;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 62,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "I am on \"desktop\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "I have navigated to \"https://www-staging.red-badger.com/about-us\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I expect the perceived page load time to be under \"1000\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "desktop",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.setScreenSize(String)"
});
formatter.result({
  "duration": 282773117,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www-staging.red-badger.com/about-us",
      "offset": 21
    }
  ],
  "location": "StepDefinitions.I_have_launched_chrome_and_navigated_to(String)"
});
formatter.result({
  "duration": 2392587157,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 51
    }
  ],
  "location": "StepDefinitions.isPerformanceAcceptable(int)"
});
formatter.result({
  "duration": 426329428,
  "status": "passed"
});
formatter.after({
  "duration": 80404202,
  "status": "passed"
});
formatter.before({
  "duration": 839730432,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "Print out performance metrics",
  "description": "",
  "id": "red-badger-website;print-out-performance-metrics;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 62,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "I am on \"desktop\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "I have navigated to \"https://www-staging.red-badger.com/blog/\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I expect the perceived page load time to be under \"2000\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "desktop",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.setScreenSize(String)"
});
formatter.result({
  "duration": 237760169,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www-staging.red-badger.com/blog/",
      "offset": 21
    }
  ],
  "location": "StepDefinitions.I_have_launched_chrome_and_navigated_to(String)"
});
formatter.result({
  "duration": 2158511267,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 51
    }
  ],
  "location": "StepDefinitions.isPerformanceAcceptable(int)"
});
formatter.result({
  "duration": 1288506635,
  "status": "passed"
});
formatter.after({
  "duration": 82958113,
  "status": "passed"
});
formatter.before({
  "duration": 785147201,
  "status": "passed"
});
formatter.scenario({
  "line": 74,
  "name": "Print out performance metrics",
  "description": "",
  "id": "red-badger-website;print-out-performance-metrics;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 62,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "I am on \"desktop\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "I have navigated to \"https://www-staging.red-badger.com/about-us/events/\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I expect the perceived page load time to be under \"1000\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "desktop",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.setScreenSize(String)"
});
formatter.result({
  "duration": 282328917,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www-staging.red-badger.com/about-us/events/",
      "offset": 21
    }
  ],
  "location": "StepDefinitions.I_have_launched_chrome_and_navigated_to(String)"
});
formatter.result({
  "duration": 1857461075,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 51
    }
  ],
  "location": "StepDefinitions.isPerformanceAcceptable(int)"
});
formatter.result({
  "duration": 570003839,
  "status": "passed"
});
formatter.after({
  "duration": 82033148,
  "status": "passed"
});
formatter.before({
  "duration": 765541284,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "Print out performance metrics",
  "description": "",
  "id": "red-badger-website;print-out-performance-metrics;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 62,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "I am on \"mobile\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "I have navigated to \"https://www-staging.red-badger.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I expect the perceived page load time to be under \"1000\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "mobile",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.setScreenSize(String)"
});
formatter.result({
  "duration": 256832163,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www-staging.red-badger.com",
      "offset": 21
    }
  ],
  "location": "StepDefinitions.I_have_launched_chrome_and_navigated_to(String)"
});
formatter.result({
  "duration": 1194564380,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 51
    }
  ],
  "location": "StepDefinitions.isPerformanceAcceptable(int)"
});
formatter.result({
  "duration": 284686697,
  "status": "passed"
});
formatter.after({
  "duration": 78522756,
  "status": "passed"
});
formatter.before({
  "duration": 781180730,
  "status": "passed"
});
formatter.scenario({
  "line": 76,
  "name": "Print out performance metrics",
  "description": "",
  "id": "red-badger-website;print-out-performance-metrics;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 62,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "I am on \"mobile\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "I have navigated to \"https://www-staging.red-badger.com/what-we-do\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I expect the perceived page load time to be under \"1000\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "mobile",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.setScreenSize(String)"
});
formatter.result({
  "duration": 261207508,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www-staging.red-badger.com/what-we-do",
      "offset": 21
    }
  ],
  "location": "StepDefinitions.I_have_launched_chrome_and_navigated_to(String)"
});
formatter.result({
  "duration": 1509023138,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 51
    }
  ],
  "location": "StepDefinitions.isPerformanceAcceptable(int)"
});
formatter.result({
  "duration": 280855783,
  "status": "passed"
});
formatter.after({
  "duration": 73874389,
  "status": "passed"
});
formatter.before({
  "duration": 802816814,
  "status": "passed"
});
formatter.scenario({
  "line": 77,
  "name": "Print out performance metrics",
  "description": "",
  "id": "red-badger-website;print-out-performance-metrics;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 62,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "I am on \"mobile\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "I have navigated to \"https://www-staging.red-badger.com/about-us\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I expect the perceived page load time to be under \"1000\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "mobile",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.setScreenSize(String)"
});
formatter.result({
  "duration": 272368242,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www-staging.red-badger.com/about-us",
      "offset": 21
    }
  ],
  "location": "StepDefinitions.I_have_launched_chrome_and_navigated_to(String)"
});
formatter.result({
  "duration": 2210827475,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 51
    }
  ],
  "location": "StepDefinitions.isPerformanceAcceptable(int)"
});
formatter.result({
  "duration": 347248587,
  "status": "passed"
});
formatter.after({
  "duration": 79698288,
  "status": "passed"
});
formatter.before({
  "duration": 787895362,
  "status": "passed"
});
formatter.scenario({
  "line": 78,
  "name": "Print out performance metrics",
  "description": "",
  "id": "red-badger-website;print-out-performance-metrics;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 62,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "I am on \"mobile\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "I have navigated to \"https://www-staging.red-badger.com/blog/\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I expect the perceived page load time to be under \"2000\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "mobile",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.setScreenSize(String)"
});
formatter.result({
  "duration": 271146366,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www-staging.red-badger.com/blog/",
      "offset": 21
    }
  ],
  "location": "StepDefinitions.I_have_launched_chrome_and_navigated_to(String)"
});
formatter.result({
  "duration": 3749093347,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 51
    }
  ],
  "location": "StepDefinitions.isPerformanceAcceptable(int)"
});
formatter.result({
  "duration": 1744451795,
  "status": "passed"
});
formatter.after({
  "duration": 76137127,
  "status": "passed"
});
formatter.before({
  "duration": 817245827,
  "status": "passed"
});
formatter.scenario({
  "line": 79,
  "name": "Print out performance metrics",
  "description": "",
  "id": "red-badger-website;print-out-performance-metrics;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 62,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "I am on \"mobile\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "I have navigated to \"https://www-staging.red-badger.com/about-us/events/\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I expect the perceived page load time to be under \"1000\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "mobile",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.setScreenSize(String)"
});
formatter.result({
  "duration": 232737110,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www-staging.red-badger.com/about-us/events/",
      "offset": 21
    }
  ],
  "location": "StepDefinitions.I_have_launched_chrome_and_navigated_to(String)"
});
formatter.result({
  "duration": 1865605730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 51
    }
  ],
  "location": "StepDefinitions.isPerformanceAcceptable(int)"
});
formatter.result({
  "duration": 555503203,
  "status": "passed"
});
formatter.after({
  "duration": 76947835,
  "status": "passed"
});
formatter.before({
  "duration": 795520968,
  "status": "passed"
});
formatter.scenario({
  "line": 83,
  "name": "Navigate to blog and use the search feature",
  "description": "",
  "id": "red-badger-website;navigate-to-blog-and-use-the-search-feature",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 82,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 84,
  "name": "I have navigated to \"https://www-staging.red-badger.com/blog/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 85,
  "name": "I will see a \"search\" element",
  "keyword": "Then "
});
formatter.step({
  "line": 86,
  "name": "I click \"search box\"",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "I type \"Testing\" into the search field",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "I press \"enter\"",
  "keyword": "When "
});
formatter.step({
  "line": 89,
  "name": "the url will be \"https://www-staging.red-badger.com/search?q\u003dTesting\"",
  "keyword": "Then "
});
formatter.step({
  "line": 90,
  "name": "I will see a \"results listing\" element",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www-staging.red-badger.com/blog/",
      "offset": 21
    }
  ],
  "location": "StepDefinitions.I_have_launched_chrome_and_navigated_to(String)"
});
formatter.result({
  "duration": 2310244396,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "search",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 22232002,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "search box",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.tap_button(String)"
});
formatter.result({
  "duration": 39881302,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing",
      "offset": 8
    }
  ],
  "location": "StepDefinitions.typeInField(String)"
});
formatter.result({
  "duration": 216428676,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "enter",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.pressKey(String)"
});
formatter.result({
  "duration": 2500809456,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www-staging.red-badger.com/search?q\u003dTesting",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.checkUrl(String)"
});
formatter.result({
  "duration": 11063908,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "results listing",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.isElementPresent(String)"
});
formatter.result({
  "duration": 233247947,
  "status": "passed"
});
formatter.after({
  "duration": 103028541,
  "status": "passed"
});
});