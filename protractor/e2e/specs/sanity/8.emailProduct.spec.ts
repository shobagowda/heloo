import { browser, element, by, ExpectedConditions } from 'protractor';
import { adminLoginPage } from '../../pageObjects/msfAdmin/adminLoginPage.po';
import { emailProductPage } from '../../pageObjects/msfAdmin/emailProductPage.po';
import { utilityPage } from '../../pageObjects/utility.po';
import { logGenerator } from '../../../utils/logGenerator';
import { loginPageEndUser } from '../../pageObjects/msfEnduser/loginPage.enduser.po';
import { orderEmailProduct } from '../../pageObjects/msfEnduser/productpageEmailProduct.endUser.po';

describe('Create a email Product and verify in user application', () => {
  let page: adminLoginPage;
  let util: utilityPage;
  let email: emailProductPage;
  let order: orderEmailProduct;
  let enduserlogin: loginPageEndUser;

  beforeEach(() => {
    page = new adminLoginPage();
    util = new utilityPage();
    email = new emailProductPage();
    enduserlogin = new loginPageEndUser();
    order = new orderEmailProduct();

  });


  it('Creating email product in Admin and ordering in EndUser', () => {
    browser.waitForAngularEnabled(true);
    logGenerator.log().info("Suite Started: Create Email product in Admin and placing order from Enduser");
    logGenerator.log().info("Test Started: Create a Email product");
    util.navigateTo(util.baseUrl);
    browser.wait(ExpectedConditions.visibilityOf(page.getUserNameElement()));
    const msfAdminCreds = util.getAdminLogin();
    page.loginWithCredential(msfAdminCreds);
    browser.sleep(5000);
    email.creatingEmailProductinAdmin(emailProductPage.inputdata);
    email.assignStoreToTheProduct();
    email.configurationTab();
    email.setupCustomizationWizard();
    email.saveAndSubmitEmailProduct();
    email.makeProductOnlineEmailProduct(emailProductPage.inputdata);
    logGenerator.log().info("Email product is created");
    const checkCreatedProduct = email.getCreatedProduct().getText();
    expect(checkCreatedProduct).toContain(emailProductPage.inputdata);
    const checkonlineStatus = email.emailProductOnlineStatus().getAttribute('class');
    expect(checkonlineStatus).toContain("online");
    util.navigateTo(util.baseUrlUser);
    browser.wait(ExpectedConditions.visibilityOf(enduserlogin.getUserName()));
    const msfEndUserCreds = util.getEndUserLogin();
    enduserlogin.loginWithCredentialUser(msfEndUserCreds);
    browser.sleep(30000);
    order.goToProductsPage(emailProductPage.inputdata);
    browser.sleep(5000);
    order.customization();
    order.next();
    order.scheduling();
    order.placingOrderEmailProduct();
    const orderSuccessMessage = order.successMessage().getText();
    expect(orderSuccessMessage).toContain("Your order is successfully placed.");

  });

});



