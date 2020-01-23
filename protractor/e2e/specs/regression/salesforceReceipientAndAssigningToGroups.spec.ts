/**
 * This spec is used to test the following
 *1. Verifying the salesforce receipient
 2. Assigning dynamic product to group
 */
import { browser, element, by, ExpectedConditions } from 'protractor';
import { adminLoginPage } from '../../pageObjects/msfAdmin/adminLoginPage.po';
import { dynamicProductPage } from '../../pageObjects/msfAdmin/dynamicProductPage.po';
import { utilityPage } from '../../pageObjects/utility.po';
import { logGenerator } from '../../../utils/logGenerator';
import { loginPageEndUser } from '../../pageObjects/msfEnduser/loginPage.enduser.po';
import * as data from '../../../testdata/sanitytestdata/testdata.json';
import { orderDynamicProduct } from '../../pageObjects/msfEnduser/productpageDynamicProduct.enduser.po';

describe('Verify creating a Dynamic product Regression Test Scenarios for assigning the groups', () => {
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

  });
  //Regression Master adors

  fit('Verify Salesforce Recipient option is not present for Dynamic Product	', async () => {
    logGenerator.log().info("Test Started: Verifying the  of Salesforce Recipient option for dynamic product ");
    dynamicproduct.createDynamicProductGeneralTab(data.dynamicProduct.productType, dynamicProductPage.inputdata, data.dynamicProduct.productSize);    browser.sleep(5000);
    dynamicproduct.verifyingSalesforcereciepientOption(data.dynamicProduct.thumbnailImage);
    logGenerator.log().info("Test Ended: Verifying the  of Salesforce Recipient option for dynamic product ");

  });
  xit('Verify Dynamic product Assigned to Groups	', async () => {
    logGenerator.log().info("Test Started: Verifying the   dynamic product Assigned to Groups");
    dynamicproduct.assigningDynamicProductToGroups();
    logGenerator.log().info("Test Ended: Verifying the   dynamic product Assigned to Groups");
  });
  logGenerator.log().info("Suite Started: Verify creating a Dynamic product Regression Test Scenarios ");
});























