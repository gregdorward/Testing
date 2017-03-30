package PageObjects;

import org.openqa.selenium.By;

import org.openqa.selenium.WebDriver;

import org.openqa.selenium.WebElement;

/**
 * Created by gregdorward on 30/01/2017.
 */
public class AddUser {

    private static WebElement element = null;

    public static WebElement field_AddUsername(WebDriver driver) {

        element = driver.findElement(By.xpath("/html/body/table/tbody/tr/td[1]/form/div/center/table/tbody/tr/td[1]/div/center/table/tbody/tr[1]/td[2]/p/input"));

        return element;

    }

    public static WebElement field_AddPassword(WebDriver driver) {

        element = driver.findElement(By.xpath("/html/body/table/tbody/tr/td[1]/form/div/center/table/tbody/tr/td[1]/div/center/table/tbody/tr[2]/td[2]/p/input"));

        return element;
    }

    public static WebElement button_SaveNewUser(WebDriver driver) {

        element = driver.findElement(By.xpath("/html/body/table/tbody/tr/td[1]/form/div/center/table/tbody/tr/td[1]/div/center/table/tbody/tr[3]/td[2]/p/input"));

        return element;
    }
}
