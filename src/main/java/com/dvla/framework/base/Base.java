package com.dvla.framework.base;

import org.openqa.selenium.support.PageFactory;

/**
 * Created by Ibi Awesu-PC on 18/04/2019.
 */

public class Base {

    public static BasePage CurrentPage;

    public <TPage extends BasePage> TPage GetInstance(Class<TPage> page)
    {
        Object obj = PageFactory.initElements(LocalDriverContext.getRemoteWebDriver(),page);
        return page.cast(obj);
    }
}
