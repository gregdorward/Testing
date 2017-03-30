$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("RedBadger.feature");
formatter.feature({
  "line": 1,
  "name": "Red Badger Website Sanity Check",
  "description": "",
  "id": "red-badger-website-sanity-check",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Navigate to a page to measure performance",
  "description": "",
  "id": "red-badger-website-sanity-check;navigate-to-a-page-to-measure-performance",
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
  "id": "red-badger-website-sanity-check;navigate-to-a-page-to-measure-performance;",
  "rows": [
    {
      "cells": [
        "url"
      ],
      "line": 7,
      "id": "red-badger-website-sanity-check;navigate-to-a-page-to-measure-performance;;1"
    },
    {
      "cells": [
        "https://www-staging.red-badger.com"
      ],
      "line": 8,
      "id": "red-badger-website-sanity-check;navigate-to-a-page-to-measure-performance;;2"
    },
    {
      "cells": [
        "https://www-staging.red-badger.com/what-we-do"
      ],
      "line": 9,
      "id": "red-badger-website-sanity-check;navigate-to-a-page-to-measure-performance;;3"
    },
    {
      "cells": [
        "https://www-staging.red-badger.com/our-work"
      ],
      "line": 10,
      "id": "red-badger-website-sanity-check;navigate-to-a-page-to-measure-performance;;4"
    },
    {
      "cells": [
        "https://www-staging.red-badger.com/about-us"
      ],
      "line": 11,
      "id": "red-badger-website-sanity-check;navigate-to-a-page-to-measure-performance;;5"
    },
    {
      "cells": [
        "https://www-staging.red-badger.com/about-us/people"
      ],
      "line": 12,
      "id": "red-badger-website-sanity-check;navigate-to-a-page-to-measure-performance;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2025445194,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Navigate to a page to measure performance",
  "description": "",
  "id": "red-badger-website-sanity-check;navigate-to-a-page-to-measure-performance;;2",
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
  "duration": 2545650141,
  "status": "passed"
});
formatter.after({
  "duration": 82073983,
  "status": "passed"
});
formatter.before({
  "duration": 1204478795,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Navigate to a page to measure performance",
  "description": "",
  "id": "red-badger-website-sanity-check;navigate-to-a-page-to-measure-performance;;3",
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
  "duration": 4368587428,
  "status": "passed"
});
formatter.after({
  "duration": 73760822,
  "status": "passed"
});
formatter.before({
  "duration": 1057428147,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Navigate to a page to measure performance",
  "description": "",
  "id": "red-badger-website-sanity-check;navigate-to-a-page-to-measure-performance;;4",
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
  "duration": 7522943566,
  "status": "passed"
});
formatter.after({
  "duration": 74976572,
  "status": "passed"
});
formatter.before({
  "duration": 992821651,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Navigate to a page to measure performance",
  "description": "",
  "id": "red-badger-website-sanity-check;navigate-to-a-page-to-measure-performance;;5",
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
  "duration": 4025091699,
  "status": "passed"
});
formatter.after({
  "duration": 77327414,
  "status": "passed"
});
formatter.before({
  "duration": 838425511,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Navigate to a page to measure performance",
  "description": "",
  "id": "red-badger-website-sanity-check;navigate-to-a-page-to-measure-performance;;6",
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
  "duration": 1764140306,
  "status": "passed"
});
formatter.after({
  "duration": 75902608,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Navigate to Red Badger and perform basic navigation",
  "description": "",
  "id": "red-badger-website-sanity-check;navigate-to-red-badger-and-perform-basic-navigation",
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
  "id": "red-badger-website-sanity-check;navigate-to-red-badger-and-perform-basic-navigation;",
  "rows": [
    {
      "cells": [
        "viewport",
        "url"
      ],
      "line": 38,
      "id": "red-badger-website-sanity-check;navigate-to-red-badger-and-perform-basic-navigation;;1"
    },
    {
      "cells": [
        "desktop",
        "https://www-staging.red-badger.com"
      ],
      "line": 39,
      "id": "red-badger-website-sanity-check;navigate-to-red-badger-and-perform-basic-navigation;;2"
    },
    {
      "cells": [
        "mobile",
        "https://www-staging.red-badger.com"
      ],
      "line": 40,
      "id": "red-badger-website-sanity-check;navigate-to-red-badger-and-perform-basic-navigation;;3"
    },
    {
      "cells": [
        "tablet",
        "https://www-staging.red-badger.com"
      ],
      "line": 41,
      "id": "red-badger-website-sanity-check;navigate-to-red-badger-and-perform-basic-navigation;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 871133358,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Navigate to Red Badger and perform basic navigation",
  "description": "",
  "id": "red-badger-website-sanity-check;navigate-to-red-badger-and-perform-basic-navigation;;2",
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
  "duration": 230906123,
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
  "duration": 1951264945,
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
  "duration": 82767651,
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
  "duration": 141871712,
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
  "duration": 79786127,
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
  "duration": 396083483,
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
  "duration": 281208078,
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
  "duration": 2678627628,
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
  "duration": 24465880,
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
  "duration": 19927937,
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
  "duration": 24365047,
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
  "duration": 21273884,
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
  "duration": 172510441,
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
  "duration": 20109982,
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
  "duration": 40149468,
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
  "duration": 19117058,
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
  "duration": 25724360,
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
  "duration": 18227303,
  "status": "passed"
});
formatter.after({
  "duration": 83097101,
  "status": "passed"
});
formatter.before({
  "duration": 886328052,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Navigate to Red Badger and perform basic navigation",
  "description": "",
  "id": "red-badger-website-sanity-check;navigate-to-red-badger-and-perform-basic-navigation;;3",
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
  "duration": 268039210,
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
  "duration": 1351151299,
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
  "duration": 47604661,
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
  "duration": 802050616,
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
  "duration": 51194122,
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
  "duration": 124052745,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003clabel for\u003d\"burger\" class\u003d\"style__triggerLabel___13NDI _fonts__boldSansSerif___1G6P5 _fonts__fontXS___2mdTk\"\u003e...\u003c/label\u003e is not clickable at point (356, 35). Other element would receive the click: \u003cdiv class\u003d\"style__smallScreenNavMargin___29oP1\"\u003e\u003c/div\u003e\n  (Session info: chrome\u003d56.0.2924.87)\n  (Driver info: chromedriver\u003d2.28.455517 (2c6d2707d8ea850c862f04ac066724273981e88f),platform\u003dMac OS X 10.11.4 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 58 milliseconds\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027Gregs-MacBook-Pro.local\u0027, ip: \u0027192.168.1.17\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.11.4\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.28.455517 (2c6d2707d8ea850c862f04ac066724273981e88f), userDataDir\u003d/var/folders/t1/v5_pkq097wz_t8bx5bltg_6c0000gn/T/.org.chromium.Chromium.FlMbjS}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d56.0.2924.87, platform\u003dMAC, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 413d48c7594dce43acd174068b683e72\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:274)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat com.cucumber.StepDefinitions.tap_button(StepDefinitions.java:187)\n\tat ✽.When I click \"About Us\"(RedBadger.feature:22)\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "duration": 74914166,
  "status": "passed"
});
formatter.before({
  "duration": 834628459,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Navigate to Red Badger and perform basic navigation",
  "description": "",
  "id": "red-badger-website-sanity-check;navigate-to-red-badger-and-perform-basic-navigation;;4",
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
  "duration": 293082584,
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
  "duration": 1481358532,
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
  "duration": 159953412,
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
  "duration": 158398219,
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
  "duration": 58799312,
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
  "duration": 331936598,
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
  "duration": 142108701,
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
  "duration": 2825461950,
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
  "duration": 22365347,
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
  "duration": 20405237,
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
  "duration": 26008077,
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
  "duration": 165381210,
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
  "duration": 20577297,
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
  "duration": 27560212,
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
  "duration": 25735542,
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
  "duration": 24687327,
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
  "duration": 19621183,
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
  "duration": 23919406,
  "status": "passed"
});
formatter.after({
  "duration": 82701200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 45,
  "name": "Check that all slices of the Homepage are displayed",
  "description": "",
  "id": "red-badger-website-sanity-check;check-that-all-slices-of-the-homepage-are-displayed",
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
  "id": "red-badger-website-sanity-check;check-that-all-slices-of-the-homepage-are-displayed;",
  "rows": [
    {
      "cells": [
        "viewport"
      ],
      "line": 57,
      "id": "red-badger-website-sanity-check;check-that-all-slices-of-the-homepage-are-displayed;;1"
    },
    {
      "cells": [
        "desktop"
      ],
      "line": 58,
      "id": "red-badger-website-sanity-check;check-that-all-slices-of-the-homepage-are-displayed;;2"
    },
    {
      "cells": [
        "mobile"
      ],
      "line": 59,
      "id": "red-badger-website-sanity-check;check-that-all-slices-of-the-homepage-are-displayed;;3"
    },
    {
      "cells": [
        "tablet"
      ],
      "line": 60,
      "id": "red-badger-website-sanity-check;check-that-all-slices-of-the-homepage-are-displayed;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1119791704,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "Check that all slices of the Homepage are displayed",
  "description": "",
  "id": "red-badger-website-sanity-check;check-that-all-slices-of-the-homepage-are-displayed;;2",
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
  "duration": 359003984,
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
  "duration": 1465373338,
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
  "duration": 19791641,
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
  "duration": 18315417,
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
  "duration": 23692085,
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
  "duration": 17873130,
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
  "duration": 20797371,
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
  "duration": 18958057,
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
  "duration": 20572190,
  "status": "passed"
});
formatter.after({
  "duration": 74063365,
  "status": "passed"
});
formatter.before({
  "duration": 1079119308,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Check that all slices of the Homepage are displayed",
  "description": "",
  "id": "red-badger-website-sanity-check;check-that-all-slices-of-the-homepage-are-displayed;;3",
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
  "duration": 311225960,
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
  "duration": 1369275298,
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
  "duration": 39455207,
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
  "duration": 19674393,
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
  "duration": 24058682,
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
  "duration": 21151072,
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
  "duration": 20904261,
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
  "duration": 22935967,
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
  "duration": 18080866,
  "status": "passed"
});
formatter.after({
  "duration": 75768245,
  "status": "passed"
});
formatter.before({
  "duration": 830518270,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Check that all slices of the Homepage are displayed",
  "description": "",
  "id": "red-badger-website-sanity-check;check-that-all-slices-of-the-homepage-are-displayed;;4",
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
  "duration": 294740403,
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
  "duration": 1346142799,
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
  "duration": 27129240,
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
  "duration": 20123588,
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
  "duration": 22217809,
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
  "duration": 20413214,
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
  "duration": 19677813,
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
  "duration": 23799779,
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
  "duration": 18716574,
  "status": "passed"
});
formatter.after({
  "duration": 71953345,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 63,
  "name": "Print out performance metrics",
  "description": "",
  "id": "red-badger-website-sanity-check;print-out-performance-metrics",
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
  "id": "red-badger-website-sanity-check;print-out-performance-metrics;",
  "rows": [
    {
      "cells": [
        "viewport",
        "url",
        "expectedLoadTime"
      ],
      "line": 69,
      "id": "red-badger-website-sanity-check;print-out-performance-metrics;;1"
    },
    {
      "cells": [
        "desktop",
        "https://www-staging.red-badger.com",
        "1000"
      ],
      "line": 70,
      "id": "red-badger-website-sanity-check;print-out-performance-metrics;;2"
    },
    {
      "cells": [
        "desktop",
        "https://www-staging.red-badger.com/what-we-do",
        "1000"
      ],
      "line": 71,
      "id": "red-badger-website-sanity-check;print-out-performance-metrics;;3"
    },
    {
      "cells": [
        "desktop",
        "https://www-staging.red-badger.com/about-us",
        "1000"
      ],
      "line": 72,
      "id": "red-badger-website-sanity-check;print-out-performance-metrics;;4"
    },
    {
      "cells": [
        "desktop",
        "https://www-staging.red-badger.com/blog/",
        "2000"
      ],
      "line": 73,
      "id": "red-badger-website-sanity-check;print-out-performance-metrics;;5"
    },
    {
      "cells": [
        "desktop",
        "https://www-staging.red-badger.com/about-us/events/",
        "1000"
      ],
      "line": 74,
      "id": "red-badger-website-sanity-check;print-out-performance-metrics;;6"
    },
    {
      "cells": [
        "mobile",
        "https://www-staging.red-badger.com",
        "1000"
      ],
      "line": 75,
      "id": "red-badger-website-sanity-check;print-out-performance-metrics;;7"
    },
    {
      "cells": [
        "mobile",
        "https://www-staging.red-badger.com/what-we-do",
        "1000"
      ],
      "line": 76,
      "id": "red-badger-website-sanity-check;print-out-performance-metrics;;8"
    },
    {
      "cells": [
        "mobile",
        "https://www-staging.red-badger.com/about-us",
        "1000"
      ],
      "line": 77,
      "id": "red-badger-website-sanity-check;print-out-performance-metrics;;9"
    },
    {
      "cells": [
        "mobile",
        "https://www-staging.red-badger.com/blog/",
        "2000"
      ],
      "line": 78,
      "id": "red-badger-website-sanity-check;print-out-performance-metrics;;10"
    },
    {
      "cells": [
        "mobile",
        "https://www-staging.red-badger.com/about-us/events/",
        "1000"
      ],
      "line": 79,
      "id": "red-badger-website-sanity-check;print-out-performance-metrics;;11"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 817222436,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "Print out performance metrics",
  "description": "",
  "id": "red-badger-website-sanity-check;print-out-performance-metrics;;2",
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
  "duration": 274551292,
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
  "duration": 1291656016,
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
  "duration": 475332769,
  "status": "passed"
});
formatter.after({
  "duration": 77131633,
  "status": "passed"
});
formatter.before({
  "duration": 859499783,
  "status": "passed"
});
formatter.scenario({
  "line": 71,
  "name": "Print out performance metrics",
  "description": "",
  "id": "red-badger-website-sanity-check;print-out-performance-metrics;;3",
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
  "duration": 240519868,
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
  "duration": 1805663032,
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
  "duration": 390995943,
  "status": "passed"
});
formatter.after({
  "duration": 77129095,
  "status": "passed"
});
formatter.before({
  "duration": 889223007,
  "status": "passed"
});
formatter.scenario({
  "line": 72,
  "name": "Print out performance metrics",
  "description": "",
  "id": "red-badger-website-sanity-check;print-out-performance-metrics;;4",
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
  "duration": 306071493,
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
  "duration": 2784814979,
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
  "duration": 578783333,
  "status": "passed"
});
formatter.after({
  "duration": 75310223,
  "status": "passed"
});
formatter.before({
  "duration": 926944365,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "Print out performance metrics",
  "description": "",
  "id": "red-badger-website-sanity-check;print-out-performance-metrics;;5",
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
  "duration": 276026014,
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
  "duration": 2265982302,
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
  "duration": 1477599556,
  "status": "passed"
});
formatter.after({
  "duration": 86166147,
  "status": "passed"
});
formatter.before({
  "duration": 889756816,
  "status": "passed"
});
formatter.scenario({
  "line": 74,
  "name": "Print out performance metrics",
  "description": "",
  "id": "red-badger-website-sanity-check;print-out-performance-metrics;;6",
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
  "duration": 289866558,
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
  "duration": 1946263492,
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
  "duration": 770491819,
  "status": "passed"
});
formatter.after({
  "duration": 111053145,
  "status": "passed"
});
formatter.before({
  "duration": 981775335,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "Print out performance metrics",
  "description": "",
  "id": "red-badger-website-sanity-check;print-out-performance-metrics;;7",
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
  "duration": 252467230,
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
  "duration": 1307024517,
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
  "duration": 306189935,
  "status": "passed"
});
formatter.after({
  "duration": 73495845,
  "status": "passed"
});
formatter.before({
  "duration": 796893714,
  "status": "passed"
});
formatter.scenario({
  "line": 76,
  "name": "Print out performance metrics",
  "description": "",
  "id": "red-badger-website-sanity-check;print-out-performance-metrics;;8",
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
  "duration": 258086062,
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
  "duration": 7209108534,
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
  "duration": 514405594,
  "status": "passed"
});
formatter.after({
  "duration": 76156627,
  "status": "passed"
});
formatter.before({
  "duration": 1174709717,
  "status": "passed"
});
formatter.scenario({
  "line": 77,
  "name": "Print out performance metrics",
  "description": "",
  "id": "red-badger-website-sanity-check;print-out-performance-metrics;;9",
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
  "duration": 246585058,
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
  "duration": 2047980877,
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
  "duration": 430588239,
  "status": "passed"
});
formatter.after({
  "duration": 73844913,
  "status": "passed"
});
formatter.before({
  "duration": 767830023,
  "status": "passed"
});
formatter.scenario({
  "line": 78,
  "name": "Print out performance metrics",
  "description": "",
  "id": "red-badger-website-sanity-check;print-out-performance-metrics;;10",
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
  "duration": 273589506,
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
  "duration": 2472774258,
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
  "duration": 1337065758,
  "status": "passed"
});
formatter.after({
  "duration": 81040410,
  "status": "passed"
});
formatter.before({
  "duration": 804359156,
  "status": "passed"
});
formatter.scenario({
  "line": 79,
  "name": "Print out performance metrics",
  "description": "",
  "id": "red-badger-website-sanity-check;print-out-performance-metrics;;11",
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
  "duration": 257297727,
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
  "duration": 4515172482,
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
  "duration": 890466100,
  "status": "passed"
});
formatter.after({
  "duration": 130303025,
  "status": "passed"
});
formatter.before({
  "duration": 1213974336,
  "status": "passed"
});
formatter.scenario({
  "line": 83,
  "name": "Navigate to blog and use the search feature",
  "description": "",
  "id": "red-badger-website-sanity-check;navigate-to-blog-and-use-the-search-feature",
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
  "duration": 2061192325,
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
  "duration": 30151768,
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
  "duration": 44197376,
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
  "duration": 245464956,
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
  "duration": 13154061362,
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
  "duration": 205702711,
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
  "duration": 37949141,
  "status": "passed"
});
formatter.after({
  "duration": 77903637,
  "status": "passed"
});
});