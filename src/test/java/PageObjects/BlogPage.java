package PageObjects;

import org.openqa.selenium.By;

import org.openqa.selenium.WebDriver;

import org.openqa.selenium.WebElement;
/**
 * Created by gregdorward on 22/03/2017.
 */
public class BlogPage {

    private static WebElement element = null;

    public static WebElement box_Search(WebDriver driver){

        element = driver.findElement(By.className("search-input"));
        return element;
    }

    public static WebElement section_blogContainer(WebDriver driver){
        element = driver.findElement(By.className("sqs-search-container-item"));
        return element;
    }
}
