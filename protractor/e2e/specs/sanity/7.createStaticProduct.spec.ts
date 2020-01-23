import { browser, element, by, ExpectedConditions } from 'protractor';
import { adminLoginPage } from '../../pageObjects/msfAdmin/adminLoginPage.po';
import { creatingStaticProduct } from '../../pageObjects/msfAdmin/staticProductPage.po';
import { utilityPage } from '../../pageObjects/utility.po';
import { logGenerator } from '../../../utils/logGenerator';
import { loginPageEndUser } from '../../pageObjects/msfEnduser/loginPage.enduser.po';
import { orderStaticProductPage } from '../../pageObjects/msfEnduser/productspageStaticProduct.enduser.po';
import * as data from '../../../testdata/sanitytestdata/testdata.json';

describe('Create a static product', () => {
  let page: adminLoginPage;
  let util: utilityPage;
  let staticProduct: creatingStaticProduct;
  let endUserPage: loginPageEndUser;
  let orderStaticProduct : orderStaticProductPage;
  
  beforeEach(() => {
    page = new adminLoginPage();
    util = new utilityPage();
    staticProduct = new creatingStaticProduct();
    endUserPage = new loginPageEndUser();
    orderStaticProduct = new orderStaticProductPage();
  });

  it(' Verify creating a Static product in Admin and placing an order from End User', async () => {
    browser.waitForAngularEnabled(true);
    logGenerator.log().info("Suite Started: Create a static product ");
    logGenerator.log().info(" Test Started: Verify creating a Static product in Admin and placing an order from End User ");
    util.navigateTo(util.baseUrl);
    browser.wait(ExpectedConditions.visibilityOf(page.getUserNameElement()));
    const msfAdminCreds = util.getAdminLogin();
    page.loginWithCredential(msfAdminCreds);
    staticProduct.staticProductCreationGenaralTab(creatingStaticProduct.inputDataStaticProduct,data.staticProduct.productDimenssion);
    staticProduct.staticProductCreationDocumentlink();
    staticProduct.staticProductCreationUploadImage();
    staticProduct.assignStore();
    staticProduct.getConfigurationTab();
    staticProduct.setUpDeliveryOptions();
    staticProduct.saveAndSubmitStaticProduct();
    staticProduct.makeProductsStatusOnline(creatingStaticProduct.inputDataStaticProduct);
    browser.sleep(3000);
    const checkOnlineStatus = staticProduct.getProductStatusOnline().getAttribute('class');
    expect(checkOnlineStatus).toContain("online");
    util.navigateTo(util.baseUrlUser);
    browser.wait(ExpectedConditions.visibilityOf(endUserPage.getUserName()));
    const msfEndUserCreds = util.getEndUserLogin();
    endUserPage.loginWithCredentialUser(msfEndUserCreds);
    browser.sleep(3000);
    orderStaticProduct.browseTheStaticProductAndAddToCart();
    orderStaticProduct.placingOrder();
    const orderSuccessMessage =orderStaticProduct.successMessage().getText();
    expect(orderSuccessMessage).toContain("Your order is successfully placed."); 

  });
});
