
import { browser, element, by, ExpectedConditions } from 'protractor';
import { adminLoginPage } from '../../pageObjects/msfAdmin/adminLoginPage.po';
import { dynamicProductPage } from '../../pageObjects/msfAdmin/dynamicProductPage.po';
import { utilityPage } from '../../pageObjects/utility.po';
import { logGenerator } from '../../../utils/logGenerator';
import { loginPageEndUser } from '../../pageObjects/msfEnduser/loginPage.enduser.po';
import * as data from '../../../testdata/sanitytestdata/testdata.json';
import { orderDynamicProduct } from '../../pageObjects/msfEnduser/productpageDynamicProduct.enduser.po';


describe('Create a Dynamic Product and verify in user application ', () => {
  let page: adminLoginPage;
  let util: utilityPage;
  let dynamicproduct: dynamicProductPage;
  let enduserlogin: loginPageEndUser;
  let orderDynamicProd : orderDynamicProduct;
  
  beforeEach(() => {
    page = new adminLoginPage();
    util = new utilityPage();
    dynamicproduct= new dynamicProductPage();
    enduserlogin = new loginPageEndUser();
    orderDynamicProd = new orderDynamicProduct();
  });

  it(' Verify creating a Dynamic product in Admin and placing an order from End User', async () => {
    browser.waitForAngularEnabled(true);
    logGenerator.log().info("Suite Started: Create a Dynamic Product and verify in user application ");
    logGenerator.log().info(" Test Started: Verify creating a Dynamic product in Admin and placing an order from End User ");
    util.navigateTo(util.baseUrl);
    browser.wait(ExpectedConditions.visibilityOf(page.getUserNameElement()));
    const msfAdminCreds = util.getAdminLogin();
    page.loginWithCredential(msfAdminCreds);
    dynamicproduct.createDynamicProduct(data.dynamicProduct.productType, dynamicProductPage.inputdata, data.dynamicProduct.productSize, data.dynamicProduct.thumbnailImage);
    browser.sleep(3000);
    dynamicproduct.assignStoreToTheProduct();
    dynamicproduct.gotoConfiguration();
    dynamicproduct.setupdeliveryOptions();
    dynamicproduct.setupcustomizationWizard();
    dynamicproduct.saveAndSubmitDynamicProduct();
    dynamicproduct.makeProductOnline(dynamicProductPage.inputdata);
    const check_online_Status = dynamicproduct.getProductStatusOnline().getAttribute('class');
    expect(check_online_Status).toContain("online");
    util.navigateTo(util.baseUrlUser);
    browser.wait(ExpectedConditions.visibilityOf(enduserlogin.getUserName()));
    const msfEndUserCreds = util.getEndUserLogin();
    enduserlogin.loginWithCredentialUser(msfEndUserCreds);
    let EC = ExpectedConditions;
        let condition = EC.urlContains("landing")
        browser.wait(condition, 30000)
    browser.sleep(3000);
    orderDynamicProd.browseTheDynamicProductAndSelect(dynamicProductPage.inputdata);
    orderDynamicProd.orderDynamicProduct();
    const orderSuccessMessage =orderDynamicProd.successMessage().getText();
    expect(orderSuccessMessage).toContain("Your order is successfully placed."); 

  });
});