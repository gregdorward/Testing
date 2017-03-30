package com.cucumber;

import PageObjects.*;
import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.Before;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.Keys;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import seleniumMethods.SeleniumMethods;

import java.io.*;

import static javax.script.ScriptEngine.FILENAME;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

/**
 * Created by gregdorward on 25/01/2017.
 */

public class StepDefinitions {

    public static ChromeDriver driver;

    @Before
    public void startBrowser() {
        System.setProperty("webdriver.chrome.driver", "/Users/gregdorward/Documents/chromedriver");
        driver = new ChromeDriver();
    }

    @After
    public void quitBrowser() {
        driver.quit();
    }



    @Given("^I am on \"([^\"]*)\"$")
    public void setScreenSize(String viewport){
        switch (viewport) {
            case "desktop":
                Dimension desktop = new Dimension(1280, 800);
                driver.manage().window().setSize(desktop);
                break;
            case "tablet":
                Dimension tablet = new Dimension(768, 1024);
                driver.manage().window().setSize(tablet);
                break;
            case "mobile":
                Dimension mobile = new Dimension(375, 667);
                driver.manage().window().setSize(mobile);
                break;
        }
    }

    @Given("^I have navigated to \"([^\"]*)\"$")
    public void I_have_launched_chrome_and_navigated_to(String url) {
        driver.navigate().to(url);
    }

    private long getPerformanceMetrics(String url){
        driver.navigate().to(url);
        long perceivedLoadTime = (long) driver.executeScript("return new Date().getTime() - performance.timing.navigationStart");
        System.out.println("Percived load time for " + url + " is " + perceivedLoadTime + "ms \n");
        return perceivedLoadTime;
    }
    @Given("^I am measuring page performance on \"([^\"]*)\"$")

    public long getPagePerformance(String url) throws FileNotFoundException {
        driver.navigate().to(url);
        long perceivedLoadTime = (long) driver.executeScript("return new Date().getTime() - performance.timing.navigationStart");
        long domInteractive = (long) driver.executeScript("return performance.timing.domInteractive - performance.timing.domLoading");
        long domContentLoading = (long) driver.executeScript("return performance.timing.domContentLoadedEventStart - performance.timing.domLoading");
        long domLoaded = (long) driver.executeScript("return performance.timing.domComplete - performance.timing.domLoading");
        long endToEndLoadTime = (long) driver.executeScript("return performance.timing.loadEventEnd - performance.timing.navigationStart");

        String FILENAME = "/Users/gregdorward/Documents/testOutput.html";

        BufferedWriter bw = null;
        FileWriter fw = null;

        try {

            String content =
                    "<h2>Performance Stats for " + url + "</h2>" +
                            "<p>The percived load time for " + url + " is " + perceivedLoadTime + "ms</p>" +
                            "\n<p>The DOM was interactable after " + domInteractive + "ms</p> " +
                            "\n<p>The DOM content begun loading after " + domContentLoading + "ms</p> " +
                            "\n<p>The DOM was fully loaded after " + domLoaded + "ms</p> " +
                            "\n<p>The time taken from navigationStart to LoadEventEnd was " + endToEndLoadTime + "ms</p>\n";

            File file = new File(FILENAME);

            // if file doesnt exists, then create it
            if (!file.exists()) {
                file.createNewFile();
            }

            // true = append file
            fw = new FileWriter(file.getAbsoluteFile(), true);
            bw = new BufferedWriter(fw);

            bw.write(content);

            System.out.println("Done");

        } catch (IOException e) {

            e.printStackTrace();

        } finally {

            try {

                if (bw != null)
                    bw.close();

                if (fw != null)
                    fw.close();

            } catch (IOException ex) {

                ex.printStackTrace();

            }
        }


//            System.out.println(
//                "<h1>Website Performance Stats</h1>" +
//                "<p>The percived load time for " + url + " is " + perceivedLoadTime + "ms</p>" +
//                "\n<p>The DOM was interactable after " + domInteractive + "ms</p> " +
//                "\n<p>The DOM content begun loading after " + domContentLoading + "ms</p> " +
//                "\n<p>The DOM was fully loaded after " + domLoaded + "ms</p> " +
//                "\n<p>The time taken from navigationStart to LoadEventEnd was " + endToEndLoadTime + "ms</p>\n");

        return perceivedLoadTime;
    }


    @Then("^I expect the perceived page load time to be under \"([^\"]*)\"$")
    public void isPerformanceAcceptable(int time) throws Exception {
        boolean isAcceptable = false;
        long perceivedLoadTime = getPerformanceMetrics(driver.getCurrentUrl());
        if (perceivedLoadTime <= time){
            System.out.println("The perceived load time is acceptable at " + perceivedLoadTime + "ms. \n");
            isAcceptable = true;
        }   else if (perceivedLoadTime > time) {
            System.out.println("The perceived load time is unnaceptable at " + perceivedLoadTime + "ms. \n");
            isAcceptable = false;
            throw new Exception("perceived load time too slow @ " + perceivedLoadTime + "\n");
        }
        {
            assertTrue(isAcceptable);
        }
    }


    @When("^I (?:tap|click) \"([^\"]*)\"$")
    public void tap_button(String button) throws Throwable {
       String buttonLowerCase = button.toLowerCase();
       int screenSize = driver.manage().window().getSize().getWidth();
        switch (buttonLowerCase) {
            case "what we do":
                if (screenSize > 420) {
                    NavItems.navWhatWeDo(driver).click();
                    break;
                } else if (screenSize <= 420){
                    WebElement element = (new WebDriverWait(driver, 5))
                            .until(ExpectedConditions.elementToBeClickable(NavItems.navMobileMenu(driver)));
                    NavItems.navMobileMenu(driver).click();
                    WebElement myDynamicElement = (new WebDriverWait(driver, 5))
                            .until(ExpectedConditions.elementToBeClickable(NavItems.navMobileWhatWeDo(driver)));
                    NavItems.navMobileWhatWeDo(driver).click();
                }
                break;
            case "about us":
                if (screenSize > 420){
                    NavItems.navAboutUs(driver).click();
                } else if (screenSize <= 420){
                    WebElement element = (new WebDriverWait(driver, 5))
                            .until(ExpectedConditions.elementToBeClickable(NavItems.navMobileMenu(driver)));
                    NavItems.navMobileMenu(driver).click();
                    WebElement secondElement = (new WebDriverWait(driver, 5))
                            .until(ExpectedConditions.elementToBeClickable(NavItems.navMobileAboutUs(driver)));
                    NavItems.navMobileAboutUs(driver).click();
                }
                break;
            case "blog":
                if (screenSize > 420){
                    NavItems.navBlog(driver).click();
                } else if (screenSize <= 420){
                    WebElement element = (new WebDriverWait(driver, 5))
                            .until(ExpectedConditions.elementToBeClickable(NavItems.navMobileMenu(driver)));
                    NavItems.navMobileMenu(driver).click();
                    WebElement myDynamicElement = (new WebDriverWait(driver, 5))
                            .until(ExpectedConditions.elementToBeClickable(NavItems.navMobileBlog(driver)));
                    NavItems.navMobileBlog(driver).click();
                }
                break;
            case "events":
                if (screenSize > 420){
                    NavItems.navEvents(driver).click();
                } else if (screenSize <= 420){
                    WebElement element = (new WebDriverWait(driver, 5))
                            .until(ExpectedConditions.elementToBeClickable(NavItems.navMobileMenu(driver)));
                    NavItems.navMobileMenu(driver).click();
                    WebElement myDynamicElement = (new WebDriverWait(driver, 5))
                            .until(ExpectedConditions.elementToBeClickable(NavItems.navMobileEvents(driver)));
                    NavItems.navMobileEvents(driver).click();
                }
                break;
            case "search":
                WebElement element = (new WebDriverWait(driver, 5))
                        .until(ExpectedConditions.elementToBeClickable(BlogPage.box_Search(driver)));
                BlogPage.box_Search(driver).click();
                break;
        }
    }

    @When("^I (?:tap|click) into the \"([^\"]*)\"$")
    public void tap_into(String field) {
        if (field.equals("Username")) {
            LoginPage.field_Username(driver).click();
        } else if (field.equals("Password")) {
            LoginPage.field_Password(driver).click();
        }
    }

    @When("^I press \"([^\"]*)\"$")
    public void pressKey(String key) {
        String keyLowerCase = key.toLowerCase();
        switch (keyLowerCase) {
            case "enter":
                driver.getKeyboard().sendKeys(Keys.RETURN);
                break;
        }
    }

    @When("^I type \"([^\"]*)\" into the search field")
    public void typeInField(String text){
        BlogPage.box_Search(driver).sendKeys(text);

    }

    @Then("^I will see the text \"([^\"]*)\"$")
    public boolean verifyTextPresent(String text) {
        boolean message = driver.getPageSource().contains(text);
        assertTrue(message);
        System.out.println("\nMessage successfully displayed as: " + text + "\n");
        return message;
    }

    @Then("the url will be \"([^\"]*)\"$")
    public void checkUrl(String urlToMatch){
      String actualUrl = driver.getCurrentUrl();
      assertEquals(urlToMatch, actualUrl);
    }


    @Then ("^I will see a \"([^\"]*)\" element$")
    public boolean isElementPresent(String element){
        assertNotNull(SeleniumMethods.isSearchPresent(element));
        return true;
    }

}


