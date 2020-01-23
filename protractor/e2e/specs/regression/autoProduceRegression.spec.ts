import { browser, element, by, ExpectedConditions } from 'protractor';
import { adminLoginPage } from '../../pageObjects/msfAdmin/adminLoginPage.po';
import { dynamicProductPage } from '../../pageObjects/msfAdmin/dynamicProductPage.po';
import { utilityPage } from '../../pageObjects/utility.po';
import { logGenerator } from '../../../utils/logGenerator';
import { loginPageEndUser } from '../../pageObjects/msfEnduser/loginPage.enduser.po';
import * as data from '../../../testdata/sanitytestdata/testdata.json';
import { orderDynamicProduct } from '../../pageObjects/msfEnduser/productpageDynamicProduct.enduser.po';
import { storePage } from '../../pageObjects/msfAdmin/storePage.po';


import { switchstoreenduser } from '../../pageObjects/msfEnduser/switchToStore.enduser.po';

describe('Verify Autoproduce at end user scenario', () => {
    let page: adminLoginPage;
    let util: utilityPage;
    let dynamicproduct: dynamicProductPage;
    let enduserlogin: loginPageEndUser;
    let orderDynamicProd: orderDynamicProduct;
    let storesAdmin: storePage
    let enduserSwitchStore: switchstoreenduser;


    beforeAll(() => {
        page = new adminLoginPage();
        util = new utilityPage();
        dynamicproduct = new dynamicProductPage();
        enduserlogin = new loginPageEndUser();
        orderDynamicProd = new orderDynamicProduct();
        storesAdmin = new storePage();
        enduserSwitchStore = new switchstoreenduser();
        browser.waitForAngularEnabled(true);
        logGenerator.log().info("Suite Started: Verify creating a Dynamic product Regression Test Scenarios ");
        util.navigateTo(util.baseUrl);
        browser.wait(ExpectedConditions.visibilityOf(page.getUserNameElement()));
        const msfAdminCreds = util.getAdminLogin();
        page.loginWithCredential(msfAdminCreds);
    });
    it('Verifying the Autoproduce option at admin side	', async () => {
        logGenerator.log().info("Test Started: creating the store and  dynamic product");
        storesAdmin.createStore("AutoproduceStore", data.store.displaynamebox);
        storesAdmin.clickOnEditStore("AutoproduceStore");
        storesAdmin.setupDeliverySettingsForAutoproduce(data.store.displaynamebox);
        storesAdmin.saveAndSubmitStore();
        browser.sleep(5000);
        storesAdmin.clickOnEditStore("AutoproduceStore");
        storesAdmin.SearchingFortheStore("AutoproduceStore");
        storesAdmin.makeStoreOnline("AutoproduceStore");
        const checkOnlineStatus = storesAdmin.makeOnlineBtn().getAttribute('style');
        expect(checkOnlineStatus).toContain("color: rgb(231, 43, 132)")
        dynamicproduct.createDynamicProductGeneralTab(data.dynamicProduct.productType, dynamicProductPage.inputdata, data.dynamicProduct.productSize);
        dynamicproduct.createDynamicProductDocumentTemplateTabForAutoproduce(data.dynamicProduct.thumbnailImage);
        browser.sleep(5000);
        dynamicproduct.assigntoautoproducestore();
        browser.sleep(5000);
        dynamicproduct.gotoConfiguration();
        dynamicproduct.setupdeliveryOptions();
        dynamicproduct.setupcustomizationWizardAutoproduce();
        dynamicproduct.saveAndSubmitDynamicProduct();
        dynamicproduct.makeProductOnline(dynamicProductPage.inputdata);
        browser.waitForAngularEnabled(true);
        util.navigateTo(util.baseUrlUser);
        //browser.wait(ExpectedConditions.visibilityOf(enduserlogin.getUserName()));
        const msfEndUserCreds = util.getEndUserLogin();
        enduserlogin.loginWithCredentialUser(msfEndUserCreds);
        let EC = ExpectedConditions;
        let condition = EC.urlContains("landing");
        browser.wait(condition, 30000)
        browser.sleep(3000);
        enduserSwitchStore.switchstore("AutoproduceStore");
        orderDynamicProd.browseTheDynamicProductAndSelect(dynamicProductPage.inputdata);
        orderDynamicProd.orderDynamicProduct();
        browser.waitForAngularEnabled(true);
        logGenerator.log().info("Suite Started: Verify creating a Dynamic product Regression Test Scenarios ");
        util.navigateTo(util.baseUrl);
        browser.wait(ExpectedConditions.visibilityOf(page.getUserNameElement()));
        const msfAdminCreds = util.getAdminLogin();
        page.loginWithCredential(msfAdminCreds);

    });
});