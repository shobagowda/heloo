import { browser, element, by, ExpectedConditions } from 'protractor';
import { adminLoginPage } from '../../pageObjects/msfAdmin/adminLoginPage.po';
import { dynamicProductPage } from '../../pageObjects/msfAdmin/dynamicProductPage.po';
import { utilityPage } from '../../pageObjects/utility.po';
import { logGenerator } from '../../../utils/logGenerator';
import { loginPageEndUser } from '../../pageObjects/msfEnduser/loginPage.enduser.po';
import * as data from '../../../testdata/sanitytestdata/testdata.json';
import { orderDynamicProduct } from '../../pageObjects/msfEnduser/productpageDynamicProduct.enduser.po';

describe('Verify creating a Dynamic product Regression Test Scenarios', () => {
  let page: adminLoginPage;
  let util: utilityPage;
  let dynamicproduct: dynamicProductPage;
  let enduserlogin: loginPageEndUser;
  let orderDynamicProd: orderDynamicProduct;

  beforeAll(() => {
    page = new adminLoginPage();
    util = new utilityPage();
    dynamicproduct = new dynamicProductPage();
    enduserlogin = new loginPageEndUser();
    orderDynamicProd = new orderDynamicProduct();
    browser.waitForAngularEnabled(true);
    logGenerator.log().info("Suite Started: Verify creating a Dynamic product Regression Test Scenarios ");
    util.navigateTo(util.baseUrl);
    browser.wait(ExpectedConditions.visibilityOf(page.getUserNameElement()));
    const msfAdminCreds = util.getAdminLogin();
    page.loginWithCredential(msfAdminCreds);
    dynamicproduct.createDynamicProduct(data.dynamicProduct.productType, dynamicProductPage.inputdata, data.dynamicProduct.productSize, data.dynamicProduct.thumbnailImage, "reg");
    browser.sleep(3000);
    dynamicproduct.assignStoreToTheProduct();
    dynamicproduct.gotoConfiguration();
    dynamicproduct.setupdeliveryOptions();    
    dynamicproduct.setupcustomizationWizard();
    dynamicproduct.recipientSetup();
    dynamicproduct.saveAndSubmitDynamicProduct();
    dynamicproduct.makeProductOnline(dynamicProductPage.inputdata);
    const check_online_Status = dynamicproduct.getProductStatusOnline().getAttribute('class');
    expect(check_online_Status).toContain("online");
    util.navigateTo(util.baseUrlUser);
    browser.wait(ExpectedConditions.visibilityOf(enduserlogin.getUserName()));
    const msfEndUserCreds = util.getEndUserLogin();
    enduserlogin.loginWithCredentialUser(msfEndUserCreds);
    let EC = ExpectedConditions;
    let condition = EC.urlContains("landing");
    browser.wait(condition, 30000)
    browser.sleep(3000);
  });

  it(' Verify Dynamic product : featured Product  ', async () => {
    logGenerator.log().info("Test Started: Verify Dynamic product : featured Product   ");
    orderDynamicProd.isFeaturedProductDisplayed("rajudynamicproductsecond1565004153132");//need chanage data

  });

  it(' Verify Dynamic product : Share to social media test  ', async () => {
    logGenerator.log().info("Test Started:  Verify Dynamic product : Share to social media test");
    orderDynamicProd.searchProduct("rajudynamicproductsecond1565004153132");//need chanage data
    browser.sleep(20000);
    orderDynamicProd.selectSpecificProduct("rajudynamicproductsecond1565004153132");//need chanage data
    browser.sleep(20000);
    expect(orderDynamicProd.facebookShareIcon().isDisplayed()).toBe(true);
    // orderDynamicProd.facebookShareIcon().click();
    //  browser.sleep(20000);
    // expect(await browser.getCurrentUrl()).toContain('productSetup');
  });

  it(' Verify Dynamic product :  Upload multiple Thumbnail Images ', async () => {
    logGenerator.log().info("Test Started: Verify Dynamic product :  Upload multiple Thumbnail Images");
    browser.wait(ExpectedConditions.visibilityOf(orderDynamicProd.carouselIndicators()));
    let thumbnailDisplayed = orderDynamicProd.carouselIndicators().isDisplayed();
    expect(thumbnailDisplayed).toBe(true);
    logGenerator.log().info(" Uploaded multiple Thumbnail Imagesis displayed for Product");
  });

  it(' Verify Dynamic product : Online Download test  ', async () => {
    logGenerator.log().info("Test Started: Verify Dynamic product : Online Download test");
    orderDynamicProd.verifyOnlnedownlaod();
  });

  it(' Verify Dynamic product : Use Recipient List test ', async () => {
    logGenerator.log().info("Test Started: Verify Dynamic product : Use Recipient List test");
    browser.sleep(10000);
    browser.wait(ExpectedConditions.visibilityOf(orderDynamicProd.addRecipientToggle()));
    orderDynamicProd.verifyRecipientListsection();
  });

  it(' Verify Dynamic product : Allow Download after Purchase test  ', async () => {
    logGenerator.log().info("Test Started: Verify Dynamic product : Allow Download after Purchase test");
    orderDynamicProd.verifyDownlaodAfterPurchase();

  });

});























