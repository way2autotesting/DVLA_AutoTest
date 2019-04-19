package com.dvla.test.runner;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by Ibi Awesu-PC on 18/04/2019.
 */

@RunWith(Cucumber.class)
@CucumberOptions(features = {"src/test/java/com/dvla/test/features"},
        format = {"json:target/cucumber-json-report.json", "html:target/cucumber-report-html"},
        glue = {"com/dvla/test/steps"}
        //, tags = "@Test01"
)
public class CucumberRunner {
}
