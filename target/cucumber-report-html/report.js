$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("vehicleRegistrationNumber.feature");
formatter.feature({
  "line": 1,
  "name": "Search Vehicle Registration Number",
  "description": "As a user\r\nI want to search a vehicle registration number\r\nSo that I can get addition information about the particular vehicle",
  "id": "search-vehicle-registration-number",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Information about vehicle registration number",
  "description": "",
  "id": "search-vehicle-registration-number;information-about-vehicle-registration-number",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I have successfully landed vehicle information page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I have elected to Start Now a new vehicle information",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter the registration number of the vehicle with row \"\u003crowNumber\u003e\" imported from excel sheet",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I clicked the continue button to proceed",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I shall see the vehicle registration \"\u003crowNumber\u003e\" matches with the make and colour",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I shall see the following text displayed",
  "rows": [
    {
      "cells": [
        "Is this the vehicle you are looking for?"
      ],
      "line": 13
    }
  ],
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "search-vehicle-registration-number;information-about-vehicle-registration-number;",
  "rows": [
    {
      "cells": [
        "rowNumber"
      ],
      "line": 16,
      "id": "search-vehicle-registration-number;information-about-vehicle-registration-number;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 17,
      "id": "search-vehicle-registration-number;information-about-vehicle-registration-number;;2"
    },
    {
      "cells": [
        "2"
      ],
      "line": 18,
      "id": "search-vehicle-registration-number;information-about-vehicle-registration-number;;3"
    },
    {
      "cells": [
        "3"
      ],
      "line": 19,
      "id": "search-vehicle-registration-number;information-about-vehicle-registration-number;;4"
    },
    {
      "cells": [
        "4"
      ],
      "line": 20,
      "id": "search-vehicle-registration-number;information-about-vehicle-registration-number;;5"
    },
    {
      "cells": [
        "5"
      ],
      "line": 21,
      "id": "search-vehicle-registration-number;information-about-vehicle-registration-number;;6"
    },
    {
      "cells": [
        "6"
      ],
      "line": 22,
      "id": "search-vehicle-registration-number;information-about-vehicle-registration-number;;7"
    },
    {
      "cells": [
        "7"
      ],
      "line": 23,
      "id": "search-vehicle-registration-number;information-about-vehicle-registration-number;;8"
    },
    {
      "cells": [
        "8"
      ],
      "line": 24,
      "id": "search-vehicle-registration-number;information-about-vehicle-registration-number;;9"
    },
    {
      "cells": [
        "9"
      ],
      "line": 25,
      "id": "search-vehicle-registration-number;information-about-vehicle-registration-number;;10"
    },
    {
      "cells": [
        "10"
      ],
      "line": 26,
      "id": "search-vehicle-registration-number;information-about-vehicle-registration-number;;11"
    },
    {
      "cells": [
        "11"
      ],
      "line": 27,
      "id": "search-vehicle-registration-number;information-about-vehicle-registration-number;;12"
    },
    {
      "cells": [
        "12"
      ],
      "line": 28,
      "id": "search-vehicle-registration-number;information-about-vehicle-registration-number;;13"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10855288879,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Information about vehicle registration number",
  "description": "",
  "id": "search-vehicle-registration-number;information-about-vehicle-registration-number;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I have successfully landed vehicle information page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I have elected to Start Now a new vehicle information",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter the registration number of the vehicle with row \"1\" imported from excel sheet",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I clicked the continue button to proceed",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I shall see the vehicle registration \"1\" matches with the make and colour",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I shall see the following text displayed",
  "rows": [
    {
      "cells": [
        "Is this the vehicle you are looking for?"
      ],
      "line": 13
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "VehicleRegistrationNumberStepdefs.iHaveSuccessfullyLandedVehicleInformationPage()"
});
formatter.result({
  "duration": 134130911,
  "status": "passed"
});
formatter.match({
  "location": "VehicleRegistrationNumberStepdefs.iHaveElectedToStartNowANewVehicleInformation()"
});
formatter.result({
  "duration": 375738879,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 57
    }
  ],
  "location": "VehicleRegistrationNumberStepdefs.iEnterTheRegistrationNumberOfTheVehicleWithRowImportedFromExcelSheet(int)"
});
formatter.result({
  "duration": 3068067746,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"Vrm\"}\n  (Session info: chrome\u003d73.0.3683.103)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027LUK-PC0GCDQ6\u0027, ip: \u002710.0.75.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\iawesu\\AppData\\Loc...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:65141}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 73.0.3683.103, webStorageEnabled: true}\nSession ID: 92214c8638734c1e11a19f6c0ad44127\n*** Element info: {Using\u003did, value\u003dVrm}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\r\n\tat com.dvla.test.pages.EnterRegistrationNumberPage.InputRegistrationNumber(EnterRegistrationNumberPage.java:26)\r\n\tat com.dvla.test.steps.VehicleRegistrationNumberStepdefs.iEnterTheRegistrationNumberOfTheVehicleWithRowImportedFromExcelSheet(VehicleRegistrationNumberStepdefs.java:58)\r\n\tat ✽.And I enter the registration number of the vehicle with row \"1\" imported from excel sheet(vehicleRegistrationNumber.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "VehicleRegistrationNumberStepdefs.iClickedTheContinueButtonToProceed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 38
    }
  ],
  "location": "VehicleRegistrationNumberStepdefs.iShallSeeTheVehicleRegistrationMatchesWithTheMakeAndColour(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "VehicleRegistrationNumberStepdefs.iShallSeeTheFollowingTextDisplayed(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1588869653,
  "status": "passed"
});
formatter.before({
  "duration": 6545894840,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Information about vehicle registration number",
  "description": "",
  "id": "search-vehicle-registration-number;information-about-vehicle-registration-number;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I have successfully landed vehicle information page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I have elected to Start Now a new vehicle information",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter the registration number of the vehicle with row \"2\" imported from excel sheet",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I clicked the continue button to proceed",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I shall see the vehicle registration \"2\" matches with the make and colour",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I shall see the following text displayed",
  "rows": [
    {
      "cells": [
        "Is this the vehicle you are looking for?"
      ],
      "line": 13
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "VehicleRegistrationNumberStepdefs.iHaveSuccessfullyLandedVehicleInformationPage()"
});
formatter.result({
  "duration": 6799110,
  "status": "passed"
});
formatter.match({
  "location": "VehicleRegistrationNumberStepdefs.iHaveElectedToStartNowANewVehicleInformation()"
});
formatter.result({
  "duration": 273386358,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 57
    }
  ],
  "location": "VehicleRegistrationNumberStepdefs.iEnterTheRegistrationNumberOfTheVehicleWithRowImportedFromExcelSheet(int)"
});
formatter.result({
  "duration": 3125060272,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"Vrm\"}\n  (Session info: chrome\u003d73.0.3683.103)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027LUK-PC0GCDQ6\u0027, ip: \u002710.0.75.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\iawesu\\AppData\\Loc...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:65222}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 73.0.3683.103, webStorageEnabled: true}\nSession ID: 3be4212988aed4a89c311a120faa8bdf\n*** Element info: {Using\u003did, value\u003dVrm}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\r\n\tat com.dvla.test.pages.EnterRegistrationNumberPage.InputRegistrationNumber(EnterRegistrationNumberPage.java:26)\r\n\tat com.dvla.test.steps.VehicleRegistrationNumberStepdefs.iEnterTheRegistrationNumberOfTheVehicleWithRowImportedFromExcelSheet(VehicleRegistrationNumberStepdefs.java:58)\r\n\tat ✽.And I enter the registration number of the vehicle with row \"2\" imported from excel sheet(vehicleRegistrationNumber.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "VehicleRegistrationNumberStepdefs.iClickedTheContinueButtonToProceed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 38
    }
  ],
  "location": "VehicleRegistrationNumberStepdefs.iShallSeeTheVehicleRegistrationMatchesWithTheMakeAndColour(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "VehicleRegistrationNumberStepdefs.iShallSeeTheFollowingTextDisplayed(String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 1370328892,
  "status": "passed"
});
