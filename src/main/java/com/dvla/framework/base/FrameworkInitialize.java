package com.dvla.framework.base;

import com.dvla.framework.config.Settings;
import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.edge.EdgeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.ie.InternetExplorerOptions;
import org.openqa.selenium.opera.OperaOptions;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.safari.SafariDriver;
import org.openqa.selenium.safari.SafariOptions;

import java.net.URL;
import java.util.HashMap;

/**
 * Created by Ibi Awesu-PC on 18/04/2019.
 */

public class FrameworkInitialize extends Base {

    public static void InitializeBrowser(BrowserType browserType) {
        RemoteWebDriver driver = null;
        System.out.println("\nTests are running in : " + browserType + "\n");
        Settings.logs.Write("Tests are running in : " + browserType );

        switch (browserType) {
            case Chrome: {
                System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "/src/browser/chromedriver.exe");
                DesiredCapabilities caps = new DesiredCapabilities().chrome();

                HashMap<String, Object> chromePreferences = new HashMap<>();
                chromePreferences.put("profile.password_manager_enabled", false);
                ChromeOptions options = new ChromeOptions();
                options.addArguments("--test-type");
                options.addArguments("chrome.switches", "--disable-extensions");
                options.addArguments("chrome.switches", "--disable-extensions --disable-extensions-file-access-check --disable-extensions-http-throttling");
                options.addArguments("--no-default-browser-check");
                options.setExperimentalOption("prefs", chromePreferences);
                driver = new ChromeDriver(options);//cap

                LocalDriverContext.setRemoteWebDriverThreadLocal(driver);
                Settings.logs.Write("Starting Chrome browser");
                System.out.println("Starting Chrome browser");
                break;
            }
            case Firefox: {
                System.setProperty("webdriver.gecko.driver", System.getProperty("user.dir") + "\\src\\browser\\geckodriver.exe");
                DesiredCapabilities caps = new DesiredCapabilities().firefox();
                caps.setBrowserName("firefox");
                driver = new FirefoxDriver(caps);

                LocalDriverContext.setRemoteWebDriverThreadLocal(driver);
                Settings.logs.Write("Starting Firefox browser");
                System.out.println("Starting Firefox browser");
                break;
            }
            case IE: {
                DesiredCapabilities caps = DesiredCapabilities.internetExplorer();
                caps.setCapability(CapabilityType.VERSION, "10");
                caps.setCapability(CapabilityType.ACCEPT_SSL_CERTS, true);
                caps.setCapability(
                        InternetExplorerDriver.INTRODUCE_FLAKINESS_BY_IGNORING_SECURITY_DOMAINS,
                        true);
                InternetExplorerOptions options = new InternetExplorerOptions();
                options.merge(caps);
                options.setCapability(CapabilityType.ForSeleniumServer.ENSURING_CLEAN_SESSION, true);
                options.setCapability(InternetExplorerDriver.ENABLE_PERSISTENT_HOVERING, true);
                options.setCapability(InternetExplorerDriver.REQUIRE_WINDOW_FOCUS, true);
                System.setProperty("webdriver.ie.driver", System.getProperty("user.dir") + "/src/browser/IEDriverServer.exe");
                driver = new InternetExplorerDriver(options);

                LocalDriverContext.setRemoteWebDriverThreadLocal(driver);
                Settings.logs.Write("Starting IE browser");
                System.out.println("Starting IE browser");
                break;
            }
            case Safari: {
                DesiredCapabilities caps = DesiredCapabilities.safari();
                SafariOptions options = new SafariOptions();
                options.merge(caps);
                driver = new SafariDriver(options);

                LocalDriverContext.setRemoteWebDriverThreadLocal(driver);
                Settings.logs.Write("Starting Safari browser");
                System.out.println("Starting Safari browser");
                break;
            }
        }
    }
}
