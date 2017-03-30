package PageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

/**
 * Created by gregdorward on 14/03/2017.
 */
public class NavItems {

    private static WebElement element = null;

    public static WebElement navWhatWeDo(WebDriver driver) {
        element = driver.findElement(By.cssSelector(".style__mediumScreenNav___ubAcF > li:nth-child(1) > a:nth-child(1)"));
        return element;
    }

    public static WebElement navAboutUs(WebDriver driver) {
        element = driver.findElement(By.cssSelector(".style__mediumScreenNav___ubAcF > li:nth-child(2) > a:nth-child(1)"));
        return element;
    }

    public static WebElement navBlog(WebDriver driver) {
        element = driver.findElement(By.cssSelector(".style__mediumScreenNav___ubAcF > li:nth-child(3) > a:nth-child(1)"));
        return element;
    }

    public static WebElement navEvents(WebDriver driver) {
        element = driver.findElement(By.cssSelector(".site-header__mediumScreenNav > li:nth-child(4) > a:nth-child(1)"));
        return element;
    }

    public static WebElement navMobileMenu(WebDriver driver) {
        element = driver.findElement(By.xpath("/html/body/div/div/header/div/div[1]/label"));
        return element;
    }

    public static WebElement navMobileAboutUs(WebDriver driver) {
        element = driver.findElement(By.cssSelector(".style__smallScreenNav___2BK9p > li:nth-child(2) > a:nth-child(1)"));
        return element;
    }

    public static WebElement navMobileWhatWeDo(WebDriver driver) {
        element = driver.findElement(By.cssSelector(".style__smallScreenNav___2BK9p > li:nth-child(3) > a:nth-child(1)"));
        return element;
    }

    public static WebElement navMobileBlog(WebDriver driver) {
        element = driver.findElement(By.cssSelector(".style__smallScreenNav___2BK9p > li:nth-child(4) > a:nth-child(1)"));
        return element;
    }

    public static WebElement navMobileEvents(WebDriver driver) {
        element = driver.findElement(By.cssSelector(".style__smallScreenNav___2BK9p > li:nth-child(5) > a:nth-child(1)"));
        return element;
    }

}
