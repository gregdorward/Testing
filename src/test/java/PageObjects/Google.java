package PageObjects;

import org.openqa.selenium.By;

import org.openqa.selenium.WebDriver;

import org.openqa.selenium.WebElement;

/**
 * Created by gregdorward on 26/01/2017.
 */
public class Google {

    private static WebElement element = null;

    public static WebElement lnk_IFeelLucky(WebDriver driver) {

        element = driver.findElement(By.xpath("//*[@id=\"tsf\"]/div[2]/div[3]/center/input[2]"));

        return element;

    }

}
