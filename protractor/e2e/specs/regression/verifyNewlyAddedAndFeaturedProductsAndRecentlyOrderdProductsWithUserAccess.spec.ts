import { browser, element, by, ExpectedConditions } from 'protractor';
import { adminLoginPage } from '../../pageObjects/msfAdmin/adminLoginPage.po';
import { creatingStaticProduct } from '../../pageObjects/msfAdmin/staticProductPage.po';
import { utilityPage } from '../../pageObjects/utility.po';
import { logGenerator } from '../../../utils/logGenerator';
import { loginPageEndUser } from '../../pageObjects/msfEnduser/loginPage.enduser.po';
import { orderStaticProductPage } from '../../pageObjects/msfEnduser/productspageStaticProduct.enduser.po';
import * as data from '../../../testdata/sanitytestdata/testdata.json';

describe('Create a static product', () => {
  logGenerator.log().info("Suite Started: Create a static product and verify Newly added, Recently added, featured product for which user has access  and Verify all Category with Products are visible to User under Browse, in footer, in search");
  let page: adminLoginPage;
  let util: utilityPage;
  let staticProduct: creatingStaticProduct;
  let endUserPage: loginPageEndUser;
  let orderStaticProduct: orderStaticProductPage;

  beforeEach(() => {
    page = new adminLoginPage();
    util = new utilityPage();
    staticProduct = new creatingStaticProduct();
    endUserPage = new loginPageEndUser();
    orderStaticProduct = new orderStaticProductPage();
  });

  it(' Create static product in Admin and Verify for newly added product for which user has access and also check for 20 newly added products', async () => {
    browser.waitForAngularEnabled(true);
        logGenerator.log().info(" Test Started: Verify creating a Static product in Admin and verify for the newly added product user has access ");
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
    browser.sleep(8000);
    util.navigateTo(util.baseUrlUser);
    browser.wait(ExpectedConditions.visibilityOf(endUserPage.getUserName()));
    const msfEndUserCreds = util.getEndUserLogin();
    endUserPage.loginWithCredentialUser(msfEndUserCreds);
    browser.sleep(20000);
    orderStaticProduct.newlyAddedProducts(creatingStaticProduct.inputDataStaticProduct);
    logGenerator.log().info(" Test Ended: Verify creating a Static product in Admin and a Static product in Admin and verify for the newly added product user has access ");
  });

  it('Verify  the recently ordered products for which user has access and also check for 20 recently ordered products', async () => {
    logGenerator.log().info(" Test Started: Verify  the recently ordered products for which user has access and also check for 20 recently ordered products ");
    util.navigateTo(util.baseUrlUser);
    browser.wait(ExpectedConditions.visibilityOf(endUserPage.getUserName()));
    const msfEndUserCreds = util.getEndUserLogin();
    endUserPage.loginWithCredentialUser(msfEndUserCreds);
    browser.sleep(20000);
    orderStaticProduct.recentlyOrderedWhicHasUserAccess(creatingStaticProduct.inputDataStaticProduct);
    logGenerator.log().info(" Test Ended: Verify  the recently ordered products for which user has access and also check for 20 recently ordered products ");
  });
  it('Verify the featured products for which user has access and also check for 20 recently ordered products', async () => {
    logGenerator.log().info(" Test Started: Verify the featured products for which user has access and also check for 20 recently ordered products ");
    util.navigateTo(util.baseUrlUser);
    browser.wait(ExpectedConditions.visibilityOf(endUserPage.getUserName()));
    const msfEndUserCreds = util.getEndUserLogin();
    endUserPage.loginWithCredentialUser(msfEndUserCreds);
    browser.sleep(20000);
    orderStaticProduct.featuredProductsWhicHasUserAccess(creatingStaticProduct.inputDataStaticProduct);
    logGenerator.log().info(" Test Ended: Verify the featured products for which user has access and also check for 20 recently ordered products ");
  });
  it('Verify all Category with Products are visible to User under Browse, in footer, in search', async () => {
    logGenerator.log().info(" Test Started: Verify all Category with Products are visible to User under Browse, in footer, in search ");
    util.navigateTo(util.baseUrlUser);
    browser.wait(ExpectedConditions.visibilityOf(endUserPage.getUserName()));
    const msfEndUserCreds = util.getEndUserLogin();
    endUserPage.loginWithCredentialUser(msfEndUserCreds);
    browser.sleep(20000);
    orderStaticProduct.visibleToUserUnderBrowse(creatingStaticProduct.inputDataStaticProduct);
    orderStaticProduct.visibleToUserUnderSearch(creatingStaticProduct.inputDataStaticProduct);
    orderStaticProduct.visibleToUserUnderFooter(creatingStaticProduct.inputDataStaticProduct);
    logGenerator.log().info(" Test Ended: Verify all Category with Products are visible to User under Browse, in footer, in search ");

  });
  logGenerator.log().info("Suite Ended: Create a static product and verify Newly added, Recently added, featured product for which user has access and Verify all Category with Products are visible to User under Browse, in footer, in search");

});
