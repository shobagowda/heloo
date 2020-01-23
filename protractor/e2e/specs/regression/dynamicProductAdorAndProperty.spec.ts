
import { browser, element, by, ExpectedConditions } from 'protractor';
import { adminLoginPage } from '../../pageObjects/msfAdmin/adminLoginPage.po';
import { dynamicProductPage } from '../../pageObjects/msfAdmin/dynamicProductPage.po';
import { utilityPage } from '../../pageObjects/utility.po';
import { logGenerator } from '../../../utils/logGenerator';
import { switchstoreenduser } from '../../pageObjects/msfEnduser/switchToStore.enduser.po';
import { loginPageEndUser } from '../../pageObjects/msfEnduser/loginPage.enduser.po';
import * as data from '../../../testdata/sanitytestdata/testdata.json';
import { orderDynamicProduct } from '../../pageObjects/msfEnduser/productpageDynamicProduct.enduser.po';


describe('Verify creating a Dynamic product Regression Test Scenarios - Properties and Adors ', () => {
  let page: adminLoginPage;
  let util: utilityPage;
  let dynamicproduct: dynamicProductPage;
  let enduserlogin: loginPageEndUser;
  let orderDynamicProd: orderDynamicProduct;
  let enduserSwitchStore: switchstoreenduser;


  beforeAll(() => {
    page = new adminLoginPage();
    util = new utilityPage();
    dynamicproduct = new dynamicProductPage();
    enduserlogin = new loginPageEndUser();
    orderDynamicProd = new orderDynamicProduct();
    enduserSwitchStore = new switchstoreenduser();
    browser.waitForAngularEnabled(true);
    logGenerator.log().info("Suite Started: Verify creating a Dynamic product Regression Test Scenarios - Properties ");
    util.navigateTo(util.baseUrl);
    browser.wait(ExpectedConditions.visibilityOf(page.getUserNameElement()));
    const msfAdminCreds = util.getAdminLogin();
    page.loginWithCredential(msfAdminCreds);
    dynamicproduct.createDynamicProductGeneralTab(data.dynamicProduct.productType, dynamicProductPage.inputdata, data.dynamicProduct.productSize);
    browser.sleep(3000);
    dynamicproduct.createDynamicProductDocumentTemplateTabforProperties(data.dynamicProduct.thumbnailImage,"reg");
    dynamicproduct.assignStoreToTheProductforstore18();
    dynamicproduct.gotoConfiguration();
    dynamicproduct.propertiesSetup();
    dynamicproduct.setupdeliveryOptionsforProp();
    dynamicproduct.setupcustomizationWizardforPropertiesTest();
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
    //enduserSwitchStore.switchstore("faPrintStore_18");

  });

   fit(' Verify Dynamic product : Add Text Ador	', async () => {
    logGenerator.log().info("Test Started: Verify Dynamic product :  Add Text Ador ");
    orderDynamicProd.searchProduct(dynamicProductPage.inputdata);//need chanage data
    browser.sleep(5000);
    orderDynamicProd.selectSpecificProduct(dynamicProductPage.inputdata);//need chanage data
    orderDynamicProd.verifytextAdor();    
    logGenerator.log().info(" Verify Dynamic product : Add Text Ador completed ");
  });

  fit(' Verify Dynamic product : Add Ador - Dropdown	', async () => {
    logGenerator.log().info("Test Started: Verify Dynamic product :  Add Ador - Dropdown ");
    orderDynamicProd.verifyDropdownAdor(); 
    logGenerator.log().info(" Verify Dynamic product : Add Ador - Dropdown completed");
  });
  
  fit(' Verify Dynamic product :Add Ador - Multiline	', async () => {
    logGenerator.log().info("Test Started: Verify Dynamic product : Add Ador - Multiline ");
    orderDynamicProd.verifyMultilineAdor();
    logGenerator.log().info(" Verify Dynamic product :Add Ador - Multiline completed");
    browser.sleep(20000);
  });

  fit(' Verify Dynamic product : Add Image Ador - Upload Option	', async () => {
    logGenerator.log().info("Test Started: Verify Dynamic product : Add Image Ador - Upload Option");
    orderDynamicProd.verifyUploadImagetypeAdor();
    browser.sleep(10000);
    logGenerator.log().info(" Verify Dynamic product : Add Image Ador - Upload Option completed");
  });

  fit(' Verify Dynamic product : Add Image Ador - Asset Selection	', async () => {
    logGenerator.log().info("Test Started: Verify Dynamic product : Add Image Ador - Asset Selection");
    orderDynamicProd.verifyAssetSelectioImagetypeAdor();
    logGenerator.log().info(" Verify Dynamic product : Add Image Ador - Asset Selection completed");
    browser.sleep(20000);
  });

  fit(' Verify Dynamic product : Add Profile Dial	', async () => {
    logGenerator.log().info("Test Started: Verify Dynamic product : Add Profile Dial");
    orderDynamicProd.verifyProfileDailAdor();
    logGenerator.log().info(" Verify Dynamic product : Add Profile Dial completed");
  });
  
  fit(' Verify Dynamic product : Setup Reciepient List	', async () => {
    logGenerator.log().info("Test Started: Verify Dynamic product : Use Recipient List test");
    browser.sleep(10000);
    browser.wait(ExpectedConditions.visibilityOf(orderDynamicProd.addRecipientToggle()));
    orderDynamicProd.verifyRecipientListsection();
    logGenerator.log().info(" Verify Dynamic product : Setup Reciepient List completed");

  });
 

  fit(' Verify Dynamic product : Add Global Property and custom to Product 	', async () => {
    logGenerator.log().info("Test Started: Verify Dynamic product : Add Global Property and custom to Product ");
    browser.sleep(10000);
    orderDynamicProd.verifyGlobalAndCustomProperty();
    logGenerator.log().info(" Verify Dynamic product : Add Global Property and custom to Product completed");

  });

  fit(' Verify Dynamic product : Setup FedEx Delivery	', async () => {
    logGenerator.log().info("Test Started: Verify Dynamic product : Setup FedEx Delivery ");
    browser.sleep(10000);
    orderDynamicProd.verifyFedExDelivery();
    logGenerator.log().info(" Verify Dynamic product : Setup FedEx Delivery completed");
  });



});