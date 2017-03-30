package seleniumMethods;

import PageObjects.BlogPage;
import PageObjects.HomePage;
import com.cucumber.StepDefinitions;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

/**
 * Created by gregdorward on 22/03/2017.
 */
public class SeleniumMethods extends StepDefinitions {

    public static WebElement isSearchPresent(String elementToLookFor) {
        WebElement element = null;
        String elementToLowerCase = elementToLookFor.toLowerCase();
        switch (elementToLowerCase) {
            case "blogs":
                element = driver.findElement(By.xpath("//*[@id=\"blogList\"]"));
                break;
            case "all-items":
                element = driver.findElement(By.className("all-items"));
                break;
            case "badger life":
                element = driver.findElement(By.className("badger-life"));
                break;
            case "leadership":
                element = driver.findElement(By.className("leadership"));
                break;
            case "news":
                element = driver.findElement(By.className("news"));
                break;
            case "opinion":
                element = driver.findElement(By.className("opinion"));
                break;
            case "process":
                element = driver.findElement(By.className("process"));
                break;
            case "strategy":
                element = driver.findElement(By.className("strategy"));
                break;
            case "technology":
                element = driver.findElement(By.className("technology"));
                break;
            case "ux and design":
                element = driver.findElement(By.className("ux-design"));
                break;
            case "search":
                element = BlogPage.box_Search(driver);
                break;
            case "results listing":
                element = BlogPage.section_blogContainer(driver);
                break;
            case "top slice":
                element = HomePage.slice_HomepageTopSlice(driver);
                break;
            case "case study slice":
                element = HomePage.slice_HomepageCaseStudySlice(driver);
                break;
            case "what we do slice":
                element = HomePage.slice_HomepageWhatWeDoSlice(driver);
                break;
            case "tech slice":
                element = HomePage.slice_HomepageTechSlice(driver);
                break;
            case "contact us slice":
                element = HomePage.slice_HomepageContactUsSlice(driver);
                break;
            case "blog slice":
                element = HomePage.slice_HomepageBlogSlice(driver);
                break;
            case "newsletter slice":
                element = HomePage.slice_HomepageNewsletterSlice(driver);
                break;
        }
        System.out.println(element + "from isSearchPresent method");
        return element;
    }
}
