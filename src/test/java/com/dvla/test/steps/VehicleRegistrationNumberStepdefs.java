package com.dvla.test.steps;

import com.dvla.framework.base.Base;
import com.dvla.framework.base.DriverContext;
import com.dvla.framework.config.Settings;
import com.dvla.framework.utilities.ExcelUtil;
import com.dvla.test.pages.EnterRegistrationNumberPage;
import com.dvla.test.pages.GetVehicleInformationPage;
import com.dvla.test.pages.VehicleInformationDetailsPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

import java.util.List;

/**
 * Created by Ibi Awesu-PC on 18/04/2019.
 */

public class VehicleRegistrationNumberStepdefs extends Base {



    @Given("^I have successfully landed vehicle information page$")
    public void iHaveSuccessfullyLandedVehicleInformationPage()  {

        CurrentPage = GetInstance(GetVehicleInformationPage.class);
        Assert.assertTrue(CurrentPage.As(GetVehicleInformationPage.class).TitlePageValidation());
        Settings.logs.Write("I landed on vehicle information page");
    }

    @When("^I have elected to Start Now a new vehicle information$")
    public void iHaveElectedToStartNowANewVehicleInformation()  {

        CurrentPage = CurrentPage.As(GetVehicleInformationPage.class).ClickStartNow();
        Settings.logs.Write("I click Start now");
    }

    @And("^I clicked the continue button to proceed$")
    public void iClickedTheContinueButtonToProceed()  {

        CurrentPage = CurrentPage.As(EnterRegistrationNumberPage.class).ClickContinue();
        Settings.logs.Write("I click the continue button");
    }

    @And("^I enter the registration number of the vehicle with row \"([^\"]*)\" imported from excel sheet$")
    public void iEnterTheRegistrationNumberOfTheVehicleWithRowImportedFromExcelSheet(int rowNumber) throws InterruptedException {

        DriverContext.WaitForPageToLoad();
//        Assert.assertTrue(CurrentPage.As(EnterRegistrationNumberPage.class).TitlePageValidation());

        //todo: Using the DDT from Excel
        Thread.sleep(3000);
        //CurrentPage.As(EnterRegistrationNumberPage.class).InputRegistrationNumber(ExcelUtil.ReadCell(0,1));
        //CurrentPage.As(EnterRegistrationNumberPage.class).InputRegistrationNumber(ExcelUtil.ReadCell(ExcelUtil.GetCell("VehicleReg"),1));
        CurrentPage.As(EnterRegistrationNumberPage.class).InputRegistrationNumber(ExcelUtil.ReadCell("VehicleReg",rowNumber));
        Settings.logs.Write("I input vehicle registration number");
    }

    @Then("^I shall see the following text displayed$")
    public void iShallSeeTheFollowingTextDisplayed(List<String> table)  {

        Assert.assertTrue(DriverContext.CheckSectionsExist(table));
    }

    @Then("^I shall see the vehicle registration \"([^\"]*)\" matches with the make and colour$")
    public void iShallSeeTheVehicleRegistrationMatchesWithTheMakeAndColour(int regN)  {

        DriverContext.WaitForPageToLoad();
        Assert.assertTrue(CurrentPage.As(VehicleInformationDetailsPage.class).ValidateMakeOfTheVehicle(regN));
        Assert.assertTrue(CurrentPage.As(VehicleInformationDetailsPage.class).ValidateColourOfTheVehicle(regN));
        Settings.logs.Write("I can confirm the Make and Colour of the vehicle");
    }
}
