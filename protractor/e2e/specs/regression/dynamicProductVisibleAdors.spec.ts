/**
 * This spec is used to test the following
 * 1.Master Adors:Disclaimr ID , Profile Dial, Language dial , Layout, Logo Style, Logo2 Style  (By selecting this, automatically settings should set by default)
 * 2. Visible adors: making the adors visible 
 * 3. verifying the invisible adors at admin side
 * 4. making the product online, offline, and online
 * 5. checking the visible and invisible adors at end user
 */
import { browser, element, by, ExpectedConditions } from 'protractor';
import { adminLoginPage } from '../../pageObjects/msfAdmin/adminLoginPage.po';
import { dynamicProductPage } from '../../pageObjects/msfAdmin/dynamicProductPage.po';
import { utilityPage } from '../../pageObjects/utility.po';
import { logGenerator } from '../../../utils/logGenerator';
import { loginPageEndUser } from '../../pageObjects/msfEnduser/loginPage.enduser.po';
import { switchstoreenduser } from '../../pageObjects/msfEnduser/switchToStore.enduser.po';
import * as data from '../../../testdata/sanitytestdata/testdata.json';
import { orderDynamicProduct } from '../../pageObjects/msfEnduser/productpageDynamicProduct.enduser.po';

describe('Verify creating a Dynamic product Regression Test Scenarios', () => {
    let page: adminLoginPage;
    let util: utilityPage;
    let dynamicproduct: dynamicProductPage;
    let enduserlogin: loginPageEndUser;
    let orderDynamicProd: orderDynamicProduct;
    let switchtostore: switchstoreenduser;

    beforeAll(() => {
        page = new adminLoginPage();
        util = new utilityPage();
        dynamicproduct = new dynamicProductPage();
        enduserlogin = new loginPageEndUser();
        orderDynamicProd = new orderDynamicProduct();
        switchtostore=new switchstoreenduser();
        browser.waitForAngularEnabled(true);
        logGenerator.log().info("Suite Started: Verify creating a Dynamic product Regression Test Scenarios ");
        util.navigateTo(util.baseUrl);
        browser.wait(ExpectedConditions.visibilityOf(page.getUserNameElement()));
        const msfAdminCreds = util.getAdminLogin();
        page.loginWithCredential(msfAdminCreds);

    });
    //Regression Master adors
    it('Master Adors:Disclaimr ID , Profile Dial, Language dial , Layout, Logo Style, Logo2 Style  (By selecting this, automatically settings should set by default)e	', async () => {
        logGenerator.log().info("Test Started: Verify Dynamic product : Master Adors");
        dynamicproduct.createDynamicProductGeneralTab(data.dynamicProduct.productType, dynamicProductPage.inputdata, data.dynamicProduct.productSize);
        dynamicproduct.createDynamicProductDocumentTemplateTab(data.dynamicProduct.thumbnailImage);
        browser.sleep(5000);
        //browser.sleep(5000);
        dynamicproduct.gotoConfiguration();
        dynamicproduct.setupThedeliveryOptions();
        dynamicproduct.assigntestStore_18ToTheProduct();
        dynamicproduct.gotoConfiguration();
        dynamicproduct.masterAdors();
        logGenerator.log().info("Test Ended: Verify Dynamic product : Master Adors");
    });

    it('Dynamic product visible Ador: making the Master ador mandatory in admin	', async () => {
        logGenerator.log().info("Test Started: Verifying the visible Ador: making the Master ador mandatory in admin");
         dynamicproduct.makeMasterAdorsMandatory();
        logGenerator.log().info("Test Ended:  Verifying the visible Ador: making the Master ador mandatory in admin - completed");

    });

    it('Dynamic product invisible Adors in admin	', async () => {
        logGenerator.log().info("Test Started: Verifying invisible adors at admin side");
        dynamicproduct.invisibleAdors();
        dynamicproduct.saveAndSubmitDynamicProduct();
        logGenerator.log().info("Test Ended: Verifying invisible adors at admin side");
    });

    it('Making the dynamic product online,offline and online	', async () => {
        logGenerator.log().info("Test Started: Verifying the dynamic product online status");
        dynamicproduct.makeProductOnline(dynamicProductPage.inputdata);
        browser.sleep(5000);
        dynamicproduct.makeProductOffline(dynamicProductPage.inputdata);
        browser.sleep(5000);
        dynamicproduct.makeProductOnline(dynamicProductPage.inputdata);
        browser.sleep(7000);
        logGenerator.log().info("Test Ended: Verifying the dynamic product online status");
    });
    it('Dynamic product visible Ador: When Ador is mandatory , should be able to make it as visible and available in end user	', async () => {
        logGenerator.log().info("Test Started: Verifying the visible adors in end user");
        browser.waitForAngularEnabled(true);
        util.navigateTo(util.baseUrlUser);
        browser.wait(ExpectedConditions.visibilityOf(enduserlogin.getUserName()));
        const msfEndUserCreds = util.getEndUserLogin();
        enduserlogin.loginWithCredentialUser(msfEndUserCreds);
        let EC = ExpectedConditions;
        let condition = EC.urlContains("landing");
        browser.wait(condition, 30000)
        browser.sleep(3000);
        //switchtostore.switchstore("TestStore_18");
        browser.sleep(5000);
        orderDynamicProd.browseTheDynamicProductAndSelect(dynamicProductPage.inputdata);
        logGenerator.log().info("Test Ended: Verifying the visible adors in end user");
    });
    logGenerator.log().info("Suite Ended: Verify creating a Dynamic product Regression Test Scenarios ");

});























