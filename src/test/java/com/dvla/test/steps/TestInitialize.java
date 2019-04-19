package com.dvla.test.steps;


import com.dvla.framework.base.DriverContext;
import com.dvla.framework.base.FrameworkInitialize;
import com.dvla.framework.base.LocalDriverContext;
import com.dvla.framework.config.ConfigReader;
import com.dvla.framework.config.Settings;
import com.dvla.framework.utilities.ExcelUtil;
import com.dvla.framework.utilities.LogUtil;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.io.IOException;

/**
 * Created by Ibi Awesu-PC on 18/04/2019.
 */

public class TestInitialize extends FrameworkInitialize {

    @Before
    public void Initialize(Scenario scenario) throws IOException {

        //ToDo: Initialize Config
        ConfigReader.PopulateSettings();

        //ToDo: Logging
        Settings.logs = new LogUtil();
        Settings.logs.CreateLogFile();
        Settings.logs.Write("Framework Initialize");


        //ToDo: Browser Initialized
        InitializeBrowser(Settings.BrowserType);
        Settings.logs.Write("Browser Initialized");

        //ToDo: Navigate to url
        DriverContext.GoToUrl(Settings.AUT);
        Settings.logs.Write("Navigated to URL " + Settings.AUT);

        //ToDo: Maximize Window
        DriverContext.Maximize();
        Settings.logs.Write("Maximize window");

        //ToDo: Implicitly WaitForPage
        DriverContext.ImplicitlyWait();

        try {
            //ExcelUtil util = new ExcelUtil(Settings.ExcelSheetPath);
            //todo: OR
            ExcelUtil util = new ExcelUtil(System.getProperty("user.dir") +"\\src\\test\\java\\com\\dvla\\test\\data\\mappingSheet.xls");
            System.out.println("Locate excel path");
        } catch (Exception e) {
            Settings.logs.Write("Unable to locate Excel path");
        }
    }

    @After
    public void TearDownTest(Scenario scenario) {

        //ToDo: Logging
        Settings.logs = new LogUtil();

        if (scenario.isFailed()) {
            Settings.logs.Write(scenario.getName());
            Settings.logs.Write("ie. scenario Not KO : --> capture !");

            //ToDo: Take screenshot
            Settings.logs.Write("Take screenshot");
            try {
                final byte[] screenshot = ((TakesScreenshot) LocalDriverContext.getRemoteWebDriver())
                        .getScreenshotAs(OutputType.BYTES);
                scenario.embed(screenshot, "image/png");
            } catch (Exception e) {
                e.printStackTrace();
            }

        } else if (scenario.getStatus() == "pass") {

            Settings.logs.Write(scenario.getName());
            Settings.logs.Write("ie. scenario KO : --> capture !");
        }


        //ToDo: Closing browser
        Settings.logs.Write("Closing browser");
        if (LocalDriverContext.getRemoteWebDriver() != null) {

            //ToDo: Take screenshot
            Settings.logs.Write("Take screenshot");
            try {
                final byte[] screenshot = ((TakesScreenshot) LocalDriverContext.getRemoteWebDriver())
                        .getScreenshotAs(OutputType.BYTES);
                scenario.embed(screenshot, "image/png");
            } catch (Exception e) {
                e.printStackTrace();
            }

            //todo: quite and c;ose browser after each scenarios
            LocalDriverContext.getRemoteWebDriver().close();
            LocalDriverContext.getRemoteWebDriver().quit();
        }
    }
}
