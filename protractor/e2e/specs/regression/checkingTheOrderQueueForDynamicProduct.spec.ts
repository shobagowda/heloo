import { browser, element, by, ExpectedConditions } from 'protractor';
import { adminLoginPage } from '../../pageObjects/msfAdmin/adminLoginPage.po';
import { dynamicProductPage } from '../../pageObjects/msfAdmin/dynamicProductPage.po';
import { utilityPage } from '../../pageObjects/utility.po';
import { storePage } from '../../pageObjects/msfAdmin/storePage.po';
import { logGenerator } from '../../../utils/logGenerator';
import { loginPageEndUser } from '../../pageObjects/msfEnduser/loginPage.enduser.po';
import { switchstoreenduser } from '../../pageObjects/msfEnduser/switchToStore.enduser.po';
import { profilePage } from '../../pageObjects/msfAdmin/profilePage.po';
import * as data from '../../../testdata/sanitytestdata/testdata.json';
import { orderDynamicProduct } from '../../pageObjects/msfEnduser/productpageDynamicProduct.enduser.po';
import { orderPageAdmin } from '../../pageObjects/msfAdmin/orderPageAdmin.po';

describe('Verify Oder a Dynamic Product and Process the Order from Producing file to Delivered. Verify End User side Oder status changes and Verify the Report generation', () => {
    let page: adminLoginPage;
    let util: utilityPage;
    let dynamicproduct: dynamicProductPage;
    let enduserlogin: loginPageEndUser;
    let orderDynamicProd: orderDynamicProduct;
    let storesAdmin: storePage;
    let switchtostore: switchstoreenduser;
    let profile: profilePage;
    let orderPage:orderPageAdmin;
       beforeAll(() => {
        page = new adminLoginPage();
        util = new utilityPage();
        dynamicproduct = new dynamicProductPage();
        enduserlogin = new loginPageEndUser();
        storesAdmin = new storePage();
        orderDynamicProd = new orderDynamicProduct();
        profile = new profilePage();
        switchtostore = new switchstoreenduser();
        orderPage = new orderPageAdmin();
        browser.waitForAngularEnabled(true);
        logGenerator.log().info("Suite Started: Verify Oder a Dynamic Product and Process the Order from Producing file to Delivered. Verify End User side Oder status changes and Verify the Report generation ");
        util.navigateTo(util.baseUrl);
        browser.wait(ExpectedConditions.visibilityOf(page.getUserNameElement()));
        const msfAdminCreds = util.getAdminLogin();
        page.loginWithCredential(msfAdminCreds);

    });
   
    it('Create the new dynamic product in admin', () => {
        logGenerator.log().info("Test Started: Verifying the dynamic product creation in admin side");
        dynamicproduct.createDynamicProduct(data.dynamicProduct.productType, dynamicProductPage.inputdata, data.dynamicProduct.productSize, data.dynamicProduct.thumbnailImage);
        browser.sleep(3000);
        dynamicproduct.assignDynamicProductToStore("TestStore_9");
        dynamicproduct.gotoConfiguration();
        
        dynamicproduct.setupdeliveryOptionsForDynamicProduct();
        dynamicproduct.setupcustomizationWizard();
        dynamicproduct.saveAndSubmitDynamicProduct();
        dynamicproduct.makeProductOnline(dynamicProductPage.inputdata);
        logGenerator.log().info("Test Ended: Verifying the dynamic product creation in admin side");
    });

    it('Log in to enduser and Verify End User order the dynamic product and check the Order status changes', async () => {
        logGenerator.log().info("Test Started: Log in to enduser and Verify End User side Oder status changes");
        browser.waitForAngularEnabled(true);
        util.navigateTo(util.baseUrlUser);
        browser.wait(ExpectedConditions.visibilityOf(enduserlogin.getUserName()));
        const msfEndUserCreds = util.getEndUserLogin();
        enduserlogin.loginWithCredentialUser(msfEndUserCreds);
        let EC = ExpectedConditions;
        let condition = EC.urlContains("landing");
        browser.wait(condition, 30000);
        browser.sleep(3000);
        //switchtostore.switchstore("TestStore_9");
        browser.sleep(5000);
        orderDynamicProd.browseTheDynamicProductAndSelect(dynamicProductPage.inputdata);
        orderDynamicProd.orderDynamicProduct();
         
        browser.sleep(8000);
        orderDynamicProd.checkOrderstatusBeforedelivery( );

        logGenerator.log().info("Test Ended: Log in to enduser and Verify End User side Oder status changes");
    });

    it('Log in to admin and move the order queue status change for the dynamic product', async () => {
        browser.waitForAngularEnabled(true);
        logGenerator.log().info("Test Started: Log in to admin and move the order queue status change for the dynamic product ");
        util.navigateTo(util.baseUrl);
        browser.wait(ExpectedConditions.visibilityOf(page.getUserNameElement()));
        const msfAdminCreds = util.getAdminLogin();
        page.loginWithCredential(msfAdminCreds);
        orderPage.checkOrderQueueAdmin();
        logGenerator.log().info("Test Ended: Log in to admin and move the order queue status change for the dynamic product ");

       
    });
    it('Log in to enduser and check the order  status change for the dynamic product', async () => {
         logGenerator.log().info("Test Started:Log in to enduser and check the order  status change for the dynamic product  ");

        browser.waitForAngularEnabled(true);
        util.navigateTo(util.baseUrlUser);
        browser.wait(ExpectedConditions.visibilityOf(enduserlogin.getUserName()));
        const msfEndUserCreds = util.getEndUserLogin();
        enduserlogin.loginWithCredentialUser(msfEndUserCreds);
        let EC = ExpectedConditions;
        let condition = EC.urlContains("landing");
        browser.wait(condition, 30000);
        browser.sleep(5000);
        orderDynamicProd.checkOrderstatusAfterdelivery( );
        browser.sleep(5000);
        logGenerator.log().info("Test Ended:Log in to enduser and check the order  status change for the dynamic product  ");    
      

       
    });
    it('Log in to admin and verify the Report generation', async () => {
        logGenerator.log().info("Test Started:Log in to admin and verify the Report generation  ");
        browser.waitForAngularEnabled(true);
        logGenerator.log().info("Test Started: Log in to admin and move the order queue status change for the dynamic product ");
        util.navigateTo(util.baseUrl);
        browser.wait(ExpectedConditions.visibilityOf(page.getUserNameElement()));
        const msfAdminCreds = util.getAdminLogin();
        page.loginWithCredential(msfAdminCreds);
        orderPage.VerifytheReport();
        logGenerator.log().info("Test Ended:  Log in to admin and verify the Report generation  ");    
   
         });
});
