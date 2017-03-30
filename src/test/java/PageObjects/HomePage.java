package PageObjects;

import org.openqa.selenium.By;

import org.openqa.selenium.WebDriver;

import org.openqa.selenium.WebElement;

/**
 * Created by gregdorward on 26/01/2017.
 */
public class HomePage {

    private static WebElement element = null;

    public static WebElement lnk_AddUser(WebDriver driver) {
        element = driver.findElement(By.xpath("/html/body/div/center/table/tbody/tr[2]/td/div/center/table/tbody/tr/td[2]/p/small/a[3]"));
        return element;
    }

    public static WebElement lnk_TheDatabase(WebDriver driver) {
        element = driver.findElement(By.xpath("/html/body/div/center/table/tbody/tr[2]/td/div/center/table/tbody/tr/td[2]/p/small/a[2]"));
        return element;
    }

    public static WebElement lnk_Login(WebDriver driver) {
        element = driver.findElement(By.xpath("/html/body/div/center/table/tbody/tr[2]/td/div/center/table/tbody/tr/td[2]/p/small/a[4]"));
        return element;
    }

    public static WebElement lnk_GetYourDbOnline(WebDriver driver) {
        element = driver.findElement(By.xpath("/html/body/div/center/table/tbody/tr[2]/td/div/center/table/tbody/tr/td[2]/p/small/a[5]"));
        return element;
    }

    public static WebElement slice_HomepageTopSlice(WebDriver driver){
        element = driver.findElement(By.className("style__homepageTopSlice___NSsaZ"));
        return element;
    }

    public static WebElement slice_HomepageCaseStudySlice(WebDriver driver){
        element = driver.findElement(By.className("style__caseStudyContainer___2TRos"));
        return element;
    }

    public static WebElement slice_HomepageWhatWeDoSlice(WebDriver driver){
        element = driver.findElement(By.className("style__brieContainer___UuBHD"));
        return element;
    }

    public static WebElement slice_HomepageTechSlice(WebDriver driver){
        element = driver.findElement(By.className("styles__techSlice___ON7_4"));
        return element;
    }

    public static WebElement slice_HomepageContactUsSlice(WebDriver driver){
        element = driver.findElement(By.className("style__formContainer___1vgq2"));
        return element;
    }

    public static WebElement slice_HomepageBlogSlice(WebDriver driver){
        element = driver.findElement(By.className("style__blogSlice___1NSHc"));
        return element;
    }

    public static WebElement slice_HomepageNewsletterSlice(WebDriver driver){
        element = driver.findElement(By.className("style__newsletter___3I1RJ"));
        return element;
    }


}
