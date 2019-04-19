package com.dvla.framework.base;

import org.openqa.selenium.WebDriver;

/**
 * Created by Ibi Awesu-PC on 18/04/2019.
 */

public class Browser extends Base{


    private WebDriver _driver;

    public Browser(WebDriver driver) {

        _driver = driver;
    }

    public BrowserType Type;
}



