package com.dvla.test.pages;

import com.dvla.framework.base.BasePage;
import com.dvla.framework.base.LocalDriverContext;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

/**
 * Created by Ibi Awesu-PC on 18/04/2019.
 */

public class EnterRegistrationNumberPage extends BasePage {

    //todo: WebElement region
    @FindBy(how = How.ID, using = "Vrm")
    private WebElement TxtRegistrationField;

    @FindBy(how = How.CLASS_NAME, using = "button")
    private WebElement BtnContinue;


    //todo: Action region
    public void InputRegistrationNumber(String registrationNumber){

        TxtRegistrationField.sendKeys(registrationNumber);
    }

    public boolean TitlePageValidation(){

        return LocalDriverContext.getRemoteWebDriver().getTitle().equals("Check if a vehicle is taxed and has an MOT");
    }

    //todo: Navigation region
    public VehicleInformationDetailsPage ClickContinue(){

        BtnContinue.click();
        return GetInstance(VehicleInformationDetailsPage.class);
    }
}
