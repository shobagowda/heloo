import { browser, element, by, ExpectedConditions } from 'protractor';
import { adminLoginPage } from '../../pageObjects/msfAdmin/adminLoginPage.po';
import { emailProductPage } from '../../pageObjects/msfAdmin/emailProductPage.po';
import { utilityPage } from '../../pageObjects/utility.po';
import { logGenerator } from '../../../utils/logGenerator';
import { loginPageEndUser } from '../../pageObjects/msfEnduser/loginPage.enduser.po';
import { orderEmailProduct } from '../../pageObjects/msfEnduser/productpageEmailProduct.endUser.po';

describe('Verify creating a Email product Regression Test Scenarios', () => {
  let util: utilityPage;
  let order: orderEmailProduct;
  let enduserlogin: loginPageEndUser;
  let page: adminLoginPage;
  let email: emailProductPage;

  beforeEach(() => {
    page = new adminLoginPage();
    util = new utilityPage();
    email = new emailProductPage();
    enduserlogin = new loginPageEndUser();
    order = new orderEmailProduct();
    browser.waitForAngularEnabled(true);
    logGenerator.log().info("Suite Started: Verify creating a Email product Regression Test Scenarios 2");
    util.navigateTo(util.baseUrl);
    browser.wait(ExpectedConditions.visibilityOf(page.getUserNameElement()));
    const msfAdminCreds = util.getAdminLogin();
    page.loginWithCredential(msfAdminCreds);
    browser.sleep(5000);
  });

  it('Creating email product in Admin and assigning to Store and verifying in Enduser', () => {
    logGenerator.log().info("Test Started: Creating email product in admin,assigning it to store and making the product online");
    email.creatingEmailProductinAdmin(emailProductPage.inputdata);
    email.assignStoreToTheProduct();
    email.configurationTab();
    email.setupCustomizationWizard();
    email.saveAndSubmitEmailProduct();
    email.searchforCreatedEmailProduct(emailProductPage.inputdata);
    email.makingStatusOnline();
    logGenerator.log().info("Navigating to Enduser and Verifying the created product is under the assigned store");
    util.navigateTo(util.baseUrlUser);
    browser.wait(ExpectedConditions.visibilityOf(enduserlogin.getUserName()));
    const msfEndUserCreds = util.getEndUserLogin();
    enduserlogin.loginWithCredentialUser(msfEndUserCreds);
    browser.sleep(30000);
    order.productsPage();
    let productIsDisplayed = order.specificProduct().isDisplayed();
    expect(productIsDisplayed).toBe(true);
    logGenerator.log().info("Test Ended: Created email product in admin,assigning it to store and verified the same in EndUser");
  });

  it('Making emailProduct Online and Offline in eachpage', async () => {
    logGenerator.log().info("Test Started:Verifying emailProduct Online and Offline in eachpage");
    //Verifying the status of the Email Product in General Tab
    email.searchforCreatedEmailProduct(emailProductPage.inputdata);
    email.makingStatusOffline();
    email.gotoProductsTab();
    email.makingStatusOnline();
    email.verifyToastMesssagesforOnline();
    email.makingStatusOffline();
    email.verifyToastMesssagesforOffline();
    //Verifying the status of the Email Product in Email Tempalte Tab
    email.emailTemplateTab();
    email.makingStatusOnline();
    email.verifyToastMesssagesforOnline();
    email.makingStatusOffline();
    email.verifyToastMesssagesforOffline();
    //Verifying the status of the Email Product in Stores Tab
    email.storesTab();
    browser.sleep(5000);
    email.makingStatusOnline();
    browser.sleep(5000);
    email.verifyToastMesssagesforOnline();
    browser.sleep(5000);
    email.makingStatusOffline();
    browser.sleep(5000);
    email.verifyToastMesssagesforOffline();
    //Verifying the status of the Email Product in Filters Tab
    email.filtersTab();
    email.makingStatusOnline();
    email.verifyToastMesssagesforOnline();
    email.makingStatusOffline();
    email.verifyToastMesssagesforOffline();
    //Verifying the status of the Email Product in Configuration Tab
    email.configurationTab();
    email.makingStatusOnline();
    email.verifyToastMesssagesforOnline();
    email.makingStatusOffline();
    email.verifyToastMesssagesforOffline();
    // Verifying the status of the Email Product in Assigned User Groups Tab
    email.assignedUsersGroupTab();
    email.makingStatusOnline();
    browser.sleep(5000);
    email.verifyToastMesssagesforOnline();
    browser.sleep(5000);
    email.makingStatusOffline();
    browser.sleep(5000);
    email.verifyToastMesssagesforOffline();
    logGenerator.log().info("Test Ended: Verified emailProduct Online and Offline in eachpage");
  });

  it('Verifying Email product:Adding Filters to Email Product', async () => {
    logGenerator.log().info("Test Started: Adding and Verifying the filters to created email product in admin");
    email.makeProductOfflineEmailProduct(emailProductPage.inputdata);
    email.gotoProductsTab();
    browser.sleep(50000);
    email.addingFiltersToProduct();
    email.searchforCreatedEmailProduct(emailProductPage.inputdata);
    email.makingStatusOnline();
    util.navigateTo(util.baseUrlUser);
    browser.wait(ExpectedConditions.visibilityOf(enduserlogin.getUserName()));
    const msfEndUserCreds = util.getEndUserLogin();
    enduserlogin.loginWithCredentialUser(msfEndUserCreds);
    browser.sleep(30000);
    order.productsPage();
    order.selectingFilters();
    let productIsDisplayed = order.specificProduct().isDisplayed();
    expect(productIsDisplayed).toBe(true);
    logGenerator.log().info("Test Ended:  Added and Verified the filters to created email product in Admin and Enduser");
  });
})









