package com.dvla.test.pages;

import com.dvla.framework.base.BasePage;
import com.dvla.framework.base.LocalDriverContext;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

/**
 * Created by Ibi Awesu-PC on 18/04/2019.
 */

public class GetVehicleInformationPage extends BasePage {

    //todo: WebElement region
    @FindBy(how = How.LINK_TEXT, using = "Start now")
    private WebElement LnkStartNow;


    //todo: Navigation region
    public EnterRegistrationNumberPage ClickStartNow(){

        LnkStartNow.click();
        return GetInstance(EnterRegistrationNumberPage.class);
    }

    public boolean TitlePageValidation(){

        return LocalDriverContext.getRemoteWebDriver().getTitle().equals("Get vehicle information from DVLA - GOV.UK");
    }
}
