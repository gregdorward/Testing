package com.cucumber;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;




    @RunWith(Cucumber.class)
    @CucumberOptions(
        features = {"src/test/resources"
        },
        tags = {"@SmokeTest"},
        format = {"pretty" ,
                "html:target/cucumber",
            "json:target/cucumber.json" })


public class RunTest {


}



