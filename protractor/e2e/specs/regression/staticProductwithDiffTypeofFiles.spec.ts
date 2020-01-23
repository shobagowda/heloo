import { browser, element, by, ExpectedConditions } from 'protractor';
import { adminLoginPage } from '../../pageObjects/msfAdmin/adminLoginPage.po';
import { creatingStaticProduct } from '../../pageObjects/msfAdmin/staticProductPage.po';
import { utilityPage } from '../../pageObjects/utility.po';
import { logGenerator } from '../../../utils/logGenerator';
import { loginPageEndUser } from '../../pageObjects/msfEnduser/loginPage.enduser.po';
import { orderStaticProductPage } from '../../pageObjects/msfEnduser/productspageStaticProduct.enduser.po';
import * as data from '../../../testdata/sanitytestdata/testdata.json';

describe('Verify creating a Static product with diffrent types of files in Admin and placing an order from End User', () => {
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

  it(' Verify creating a Static product with docx file in Admin and placing an order from End User', async () => {
    browser.waitForAngularEnabled(true);
    logGenerator.log().info("Suite Started: Verify creating a Static product with diffrent types of files in Admin and placing an order from End User ");
    logGenerator.log().info(" Test Started: Verify creating a Static product with docx file in Admin and placing an order from End User ");
    util.navigateTo(util.baseUrl);
    browser.wait(ExpectedConditions.visibilityOf(page.getUserNameElement()));
    const msfAdminCreds = util.getAdminLogin();
    page.loginWithCredential(msfAdminCreds);
    staticProduct.staticProductCreationGenaralTab((creatingStaticProduct.inputDataStaticProduct+"docx"),data.staticProduct.productDimenssion);
    staticProduct.staticProductCreationDocumentlink();
    staticProduct.staticProductCreationUploadImage();
    staticProduct.assignStore();
    staticProduct.getConfigurationTab();
    staticProduct.setUpDeliveryOptions();
    staticProduct.saveAndSubmitStaticProduct();
    staticProduct.makeProductsStatusOnline((creatingStaticProduct.inputDataStaticProduct+"docx"));
    browser.sleep(3000);
    const checkOnlineStatus = staticProduct.getProductStatusOnline().getAttribute('class');
    expect(checkOnlineStatus).toContain("online");
    util.navigateTo(util.baseUrlUser);
    browser.wait(ExpectedConditions.visibilityOf(endUserPage.getUserName()));
    const msfEndUserCreds = util.getEndUserLogin();
    endUserPage.loginWithCredentialUser(msfEndUserCreds);
    browser.sleep(3000);
    orderStaticProduct.searchProduct((creatingStaticProduct.inputDataStaticProduct+"docx"));
    browser.sleep(3000);
    orderStaticProduct.selectSpecificProduct((creatingStaticProduct.inputDataStaticProduct+"docx"));
    orderStaticProduct.addToCart();
    orderStaticProduct.placingOrder();
    const orderSuccessMessage =orderStaticProduct.successMessage().getText();
    expect(orderSuccessMessage).toContain("Your order is successfully placed."); 

  });

  it(' Verify creating a Static product with Jpeg file in Admin and placing an order from End User', async () => {
    browser.waitForAngularEnabled(true);
    logGenerator.log().info(" Test Started: Verify creating a Static product with Jpeg file in Admin and placing an order from End User ");
    util.navigateTo(util.baseUrl);
    browser.wait(ExpectedConditions.visibilityOf(page.getUserNameElement()));
    const msfAdminCreds = util.getAdminLogin();
    page.loginWithCredential(msfAdminCreds);
    staticProduct.staticProductCreationGenaralTab((creatingStaticProduct.inputDataStaticProduct+"Jpeg"),data.staticProduct.productDimenssion);
    staticProduct.staticProductCreationDocumentJpeg()
    staticProduct.staticProductCreationUploadImage();
    staticProduct.assignStore();
    staticProduct.getConfigurationTab();
    staticProduct.setUpDeliveryOptions();
    staticProduct.saveAndSubmitStaticProduct();
    staticProduct.makeProductsStatusOnline((creatingStaticProduct.inputDataStaticProduct+"Jpeg"));
    browser.sleep(3000);
    const checkOnlineStatus = staticProduct.getProductStatusOnline().getAttribute('class');
    expect(checkOnlineStatus).toContain("online");
    util.navigateTo(util.baseUrlUser);
    browser.wait(ExpectedConditions.visibilityOf(endUserPage.getUserName()));
    const msfEndUserCreds = util.getEndUserLogin();
    endUserPage.loginWithCredentialUser(msfEndUserCreds);
    browser.sleep(3000);
    orderStaticProduct.searchProduct((creatingStaticProduct.inputDataStaticProduct+"Jpeg"));
    orderStaticProduct.selectSpecificProduct((creatingStaticProduct.inputDataStaticProduct+"Jpeg"));
    orderStaticProduct.addToCart();
    orderStaticProduct.placingOrder();
    const orderSuccessMessage =orderStaticProduct.successMessage().getText();
    expect(orderSuccessMessage).toContain("Your order is successfully placed."); 

  });

  it(' Verify creating a Static product with Jpg file in Admin and placing an order from End User', async () => {
    browser.waitForAngularEnabled(true);
    logGenerator.log().info(" Test Started: Verify creating a Static product with Jpg file in Admin and placing an order from End User ");
    util.navigateTo(util.baseUrl);
    browser.wait(ExpectedConditions.visibilityOf(page.getUserNameElement()));
    const msfAdminCreds = util.getAdminLogin();
    page.loginWithCredential(msfAdminCreds);
    staticProduct.staticProductCreationGenaralTab((creatingStaticProduct.inputDataStaticProduct+"Jpg"),data.staticProduct.productDimenssion);
    staticProduct.staticProductCreationDocumentJpg()
    staticProduct.staticProductCreationUploadImage();
    staticProduct.assignStore();
    staticProduct.getConfigurationTab();
    staticProduct.setUpDeliveryOptions();
    staticProduct.saveAndSubmitStaticProduct();
    staticProduct.makeProductsStatusOnline((creatingStaticProduct.inputDataStaticProduct+"Jpg"));
    browser.sleep(3000);
    const checkOnlineStatus = staticProduct.getProductStatusOnline().getAttribute('class');
    expect(checkOnlineStatus).toContain("online");
    util.navigateTo(util.baseUrlUser);
    browser.wait(ExpectedConditions.visibilityOf(endUserPage.getUserName()));
    const msfEndUserCreds = util.getEndUserLogin();
    endUserPage.loginWithCredentialUser(msfEndUserCreds);
    browser.sleep(3000);
    orderStaticProduct.searchProduct((creatingStaticProduct.inputDataStaticProduct+"Jpg"));
    orderStaticProduct.selectSpecificProduct((creatingStaticProduct.inputDataStaticProduct+"Jpg"));
    orderStaticProduct.addToCart();
    orderStaticProduct.placingOrder();
    const orderSuccessMessage =orderStaticProduct.successMessage().getText();
    expect(orderSuccessMessage).toContain("Your order is successfully placed."); 

  });

  it(' Verify creating a Static product with Pdf file in Admin and placing an order from End User', async () => {
    browser.waitForAngularEnabled(true);
    logGenerator.log().info(" Test Started: Verify creating a Static product with Pdf file in Admin and placing an order from End User ");
    util.navigateTo(util.baseUrl);
    browser.wait(ExpectedConditions.visibilityOf(page.getUserNameElement()));
    const msfAdminCreds = util.getAdminLogin();
    page.loginWithCredential(msfAdminCreds);
    staticProduct.staticProductCreationGenaralTab((creatingStaticProduct.inputDataStaticProduct+"Pdf"),data.staticProduct.productDimenssion);
    staticProduct.staticProductCreationDocumentPdf()
    staticProduct.staticProductCreationUploadImage();
    staticProduct.assignStore();
    staticProduct.getConfigurationTab();
    staticProduct.setUpDeliveryOptions();
    staticProduct.saveAndSubmitStaticProduct();
    staticProduct.makeProductsStatusOnline((creatingStaticProduct.inputDataStaticProduct+"Pdf"));
    browser.sleep(3000);
    const checkOnlineStatus = staticProduct.getProductStatusOnline().getAttribute('class');
    expect(checkOnlineStatus).toContain("online");
    util.navigateTo(util.baseUrlUser);
    browser.wait(ExpectedConditions.visibilityOf(endUserPage.getUserName()));
    const msfEndUserCreds = util.getEndUserLogin();
    endUserPage.loginWithCredentialUser(msfEndUserCreds);
    browser.sleep(3000);
    orderStaticProduct.searchProduct((creatingStaticProduct.inputDataStaticProduct+"Pdf"));
    orderStaticProduct.selectSpecificProduct((creatingStaticProduct.inputDataStaticProduct+"Pdf"));
    orderStaticProduct.addToCart();
    orderStaticProduct.placingOrder();
    const orderSuccessMessage =orderStaticProduct.successMessage().getText();
    expect(orderSuccessMessage).toContain("Your order is successfully placed."); 

  });

  it(' Verify creating a Static product with gif file in Admin and placing an order from End User', async () => {
    browser.waitForAngularEnabled(true);
    logGenerator.log().info(" Test Started: Verify creating a Static product with gif file in Admin and placing an order from End User ");
    util.navigateTo(util.baseUrl);
    browser.wait(ExpectedConditions.visibilityOf(page.getUserNameElement()));
    const msfAdminCreds = util.getAdminLogin();
    page.loginWithCredential(msfAdminCreds);
    staticProduct.staticProductCreationGenaralTab((creatingStaticProduct.inputDataStaticProduct+"gif"),data.staticProduct.productDimenssion);
    staticProduct.staticProductCreationDocumentgif()
    staticProduct.staticProductCreationUploadImage();
    staticProduct.assignStore();
    staticProduct.getConfigurationTab();
    staticProduct.setUpDeliveryOptions();
    staticProduct.saveAndSubmitStaticProduct();
    staticProduct.makeProductsStatusOnline((creatingStaticProduct.inputDataStaticProduct+"gif"));
    browser.sleep(3000);
    const checkOnlineStatus = staticProduct.getProductStatusOnline().getAttribute('class');
    expect(checkOnlineStatus).toContain("online");
    util.navigateTo(util.baseUrlUser);
    browser.wait(ExpectedConditions.visibilityOf(endUserPage.getUserName()));
    const msfEndUserCreds = util.getEndUserLogin();
    endUserPage.loginWithCredentialUser(msfEndUserCreds);
    browser.sleep(3000);
    orderStaticProduct.searchProduct((creatingStaticProduct.inputDataStaticProduct+"gif"));
    orderStaticProduct.selectSpecificProduct((creatingStaticProduct.inputDataStaticProduct+"gif"));
    orderStaticProduct.addToCart();
    orderStaticProduct.placingOrder();
    const orderSuccessMessage =orderStaticProduct.successMessage().getText();
    expect(orderSuccessMessage).toContain("Your order is successfully placed."); 

  });

  fit(' Verify creating a Static product with excel file in Admin and placing an order from End User', async () => {
    browser.waitForAngularEnabled(true);
    logGenerator.log().info(" Test Started: Verify creating a Static product with excel file in Admin and placing an order from End User ");
    util.navigateTo(util.baseUrl);
    browser.wait(ExpectedConditions.visibilityOf(page.getUserNameElement()));
    const msfAdminCreds = util.getAdminLogin();
    page.loginWithCredential(msfAdminCreds);
    staticProduct.staticProductCreationGenaralTab((creatingStaticProduct.inputDataStaticProduct+"excel"),data.staticProduct.productDimenssion);
    staticProduct.staticProductCreationDocumentexcel()
    staticProduct.staticProductCreationUploadImage();
    staticProduct.assignStore();
    staticProduct.getConfigurationTab();
    staticProduct.setUpDeliveryOptions();
    staticProduct.saveAndSubmitStaticProduct();
    staticProduct.makeProductsStatusOnline((creatingStaticProduct.inputDataStaticProduct+"excel"));
    browser.sleep(3000);
    const checkOnlineStatus = staticProduct.getProductStatusOnline().getAttribute('class');
    expect(checkOnlineStatus).toContain("online");
    util.navigateTo(util.baseUrlUser);
    browser.wait(ExpectedConditions.visibilityOf(endUserPage.getUserName()));
    const msfEndUserCreds = util.getEndUserLogin();
    endUserPage.loginWithCredentialUser(msfEndUserCreds);
    browser.sleep(3000);
    orderStaticProduct.searchProduct((creatingStaticProduct.inputDataStaticProduct+"excel"));
    orderStaticProduct.selectSpecificProduct((creatingStaticProduct.inputDataStaticProduct+"excel"));
    orderStaticProduct.addToCart();
    orderStaticProduct.placingOrder();
    const orderSuccessMessage =orderStaticProduct.successMessage().getText();
    expect(orderSuccessMessage).toContain("Your order is successfully placed."); 

  });
  it(' Verify creating a Static product with png file in Admin and placing an order from End User', async () => {
    browser.waitForAngularEnabled(true);
    logGenerator.log().info(" Test Started: Verify creating a Static product with png file in Admin and placing an order from End User ");
    util.navigateTo(util.baseUrl);
    browser.wait(ExpectedConditions.visibilityOf(page.getUserNameElement()));
    const msfAdminCreds = util.getAdminLogin();
    page.loginWithCredential(msfAdminCreds);
    staticProduct.staticProductCreationGenaralTab((creatingStaticProduct.inputDataStaticProduct+"png"),data.staticProduct.productDimenssion);
    staticProduct.staticProductCreationDocumentpng()
    staticProduct.staticProductCreationUploadImage();
    staticProduct.assignStore();
    staticProduct.getConfigurationTab();
    staticProduct.setUpDeliveryOptions();
    staticProduct.saveAndSubmitStaticProduct();
    staticProduct.makeProductsStatusOnline((creatingStaticProduct.inputDataStaticProduct+"png"));
    browser.sleep(3000);
    const checkOnlineStatus = staticProduct.getProductStatusOnline().getAttribute('class');
    expect(checkOnlineStatus).toContain("online");
    util.navigateTo(util.baseUrlUser);
    browser.wait(ExpectedConditions.visibilityOf(endUserPage.getUserName()));
    const msfEndUserCreds = util.getEndUserLogin();
    endUserPage.loginWithCredentialUser(msfEndUserCreds);
    browser.sleep(3000);
    orderStaticProduct.searchProduct((creatingStaticProduct.inputDataStaticProduct+"png"));
    orderStaticProduct.selectSpecificProduct((creatingStaticProduct.inputDataStaticProduct+"png"));
    orderStaticProduct.addToCart();
    orderStaticProduct.placingOrder();
    const orderSuccessMessage =orderStaticProduct.successMessage().getText();
    expect(orderSuccessMessage).toContain("Your order is successfully placed."); 

  });
  it(' Verify creating a Static product with ppt file in Admin and placing an order from End User', async () => {
    browser.waitForAngularEnabled(true);
    logGenerator.log().info(" Test Started: Verify creating a Static product with ppt file in Admin and placing an order from End User ");
    util.navigateTo(util.baseUrl);
    browser.wait(ExpectedConditions.visibilityOf(page.getUserNameElement()));
    const msfAdminCreds = util.getAdminLogin();
    page.loginWithCredential(msfAdminCreds);
    staticProduct.staticProductCreationGenaralTab((creatingStaticProduct.inputDataStaticProduct+"ppt"),data.staticProduct.productDimenssion);
    staticProduct.staticProductCreationDocumentppt()
    staticProduct.staticProductCreationUploadImage();
    staticProduct.assignStore();
    staticProduct.getConfigurationTab();
    staticProduct.setUpDeliveryOptions();
    staticProduct.saveAndSubmitStaticProduct();
    staticProduct.makeProductsStatusOnline((creatingStaticProduct.inputDataStaticProduct+"ppt"));
    browser.sleep(3000);
    const checkOnlineStatus = staticProduct.getProductStatusOnline().getAttribute('class');
    expect(checkOnlineStatus).toContain("online");
    util.navigateTo(util.baseUrlUser);
    browser.wait(ExpectedConditions.visibilityOf(endUserPage.getUserName()));
    const msfEndUserCreds = util.getEndUserLogin();
    endUserPage.loginWithCredentialUser(msfEndUserCreds);
    browser.sleep(3000);
    orderStaticProduct.searchProduct((creatingStaticProduct.inputDataStaticProduct+"ppt"));
    orderStaticProduct.selectSpecificProduct((creatingStaticProduct.inputDataStaticProduct+"ppt"));
    orderStaticProduct.addToCart();
    orderStaticProduct.placingOrder();
    const orderSuccessMessage =orderStaticProduct.successMessage().getText();
    expect(orderSuccessMessage).toContain("Your order is successfully placed."); 

  });

  it(' Verify creating a Static product with pptx file in Admin and placing an order from End User', async () => {
    browser.waitForAngularEnabled(true);
    logGenerator.log().info(" Test Started: Verify creating a Static product with pptx file in Admin and placing an order from End User ");
    util.navigateTo(util.baseUrl);
    browser.wait(ExpectedConditions.visibilityOf(page.getUserNameElement()));
    const msfAdminCreds = util.getAdminLogin();
    page.loginWithCredential(msfAdminCreds);
    staticProduct.staticProductCreationGenaralTab((creatingStaticProduct.inputDataStaticProduct+"pptx"),data.staticProduct.productDimenssion);
    staticProduct.staticProductCreationDocumentpptx()
    staticProduct.staticProductCreationUploadImage();
    staticProduct.assignStore();
    staticProduct.getConfigurationTab();
    staticProduct.setUpDeliveryOptions();
    staticProduct.saveAndSubmitStaticProduct();
    staticProduct.makeProductsStatusOnline((creatingStaticProduct.inputDataStaticProduct+"pptx"));
    browser.sleep(3000);
    const checkOnlineStatus = staticProduct.getProductStatusOnline().getAttribute('class');
    expect(checkOnlineStatus).toContain("online");
    util.navigateTo(util.baseUrlUser);
    browser.wait(ExpectedConditions.visibilityOf(endUserPage.getUserName()));
    const msfEndUserCreds = util.getEndUserLogin();
    endUserPage.loginWithCredentialUser(msfEndUserCreds);
    browser.sleep(3000);
    orderStaticProduct.searchProduct((creatingStaticProduct.inputDataStaticProduct+"pptx"));
    orderStaticProduct.selectSpecificProduct((creatingStaticProduct.inputDataStaticProduct+"pptx"));
    orderStaticProduct.addToCart();
    orderStaticProduct.placingOrder();
    const orderSuccessMessage =orderStaticProduct.successMessage().getText();
    expect(orderSuccessMessage).toContain("Your order is successfully placed."); 

  });



});
