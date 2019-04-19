package com.dvla.test.pages;

import com.dvla.framework.base.BasePage;
import com.dvla.framework.utilities.ExcelUtil;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;


/**
 * Created by Ibi Awesu-PC on 18/04/2019.
 */

public class VehicleInformationDetailsPage extends BasePage {

    //todo: WebElement region
    @FindBy(how = How.CSS, using = "#pr3 > div > ul > li:nth-child(2) > span:nth-child(2) > strong")
    private WebElement textMake;

    @FindBy(how = How.CSS, using = "#pr3 > div > ul > li:nth-child(3) > span:nth-child(2) > strong")
    private WebElement textColour;


    //todo: Acton region
    public boolean ValidateMakeOfTheVehicle(int rowNumber){

        String vehicleMake = textMake.getText();
        System.out.println("result is : "+textMake.getText());

        return ExcelUtil.ReadCell("VehicleMake",rowNumber).equals(vehicleMake);
    }

    public boolean ValidateColourOfTheVehicle(int rowNumber){

        String vehicleColour = textColour.getText();

        return ExcelUtil.ReadCell("VehicleColour",rowNumber).equals(vehicleColour);
    }
}
