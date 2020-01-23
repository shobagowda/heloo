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

describe('Verify creating a Dynamic product Regression Test Scenarios', () => {
    let page: adminLoginPage;
    let util: utilityPage;
    let dynamicproduct: dynamicProductPage;
    let enduserlogin: loginPageEndUser;
    let orderDynamicProd: orderDynamicProduct;
    let storesAdmin: storePage;
    let switchtostore: switchstoreenduser;
    let profile: profilePage;
    beforeAll(() => {
        page = new adminLoginPage();
        util = new utilityPage();
        dynamicproduct = new dynamicProductPage();
        enduserlogin = new loginPageEndUser();
        storesAdmin = new storePage();
        orderDynamicProd = new orderDynamicProduct();
        profile = new profilePage();
        switchtostore = new switchstoreenduser();
        browser.waitForAngularEnabled(true);
        logGenerator.log().info("Suite Started: Verify creating a Dynamic product Regression Test Scenarios ");
        util.navigateTo(util.baseUrl);
        browser.wait(ExpectedConditions.visibilityOf(page.getUserNameElement()));
        const msfAdminCreds = util.getAdminLogin();
        page.loginWithCredential(msfAdminCreds);

    });
    it('Create the new store in admin', () => {
        storesAdmin.createStore(storePage.inputdataStore, data.store.displaynamebox);
        storesAdmin.clickOnEditStore(storePage.inputdataStore);
        storesAdmin.setupDeliverySettings(data.store.pickupAddisplayname);
        storesAdmin.saveAndSubmitStore();
        storesAdmin.makeStoreOnline(storePage.inputdataStore);

    });
    it('Create the new profile and verify profile creation in admin', async () => {

        profile.profilePageCreation(profilePage.inputdataProfile);
        profile.propertySetup(profilePage.inputdataProfile);
        profile.profilePageVerifyforLinkAndUnlink(profilePage.inputdataProfile);

        profile.submitProfile(profilePage.inputdataProfile);
        browser.sleep(10000);
        logGenerator.log().info("Suite ended: successfull validation of Created a Profile ");

    });
    it('Create the new dynamic product in admin', () => {
        dynamicproduct.createDynamicProduct(data.dynamicProduct.productType, dynamicProductPage.inputdata, data.dynamicProduct.productSize, data.dynamicProduct.thumbnailImage);
        browser.sleep(3000);
        dynamicproduct.assignDynamicProductToStore(storePage.inputdataStore);
        dynamicproduct.gotoConfiguration();
        dynamicproduct.linkingToProfile(profilePage.inputdataProfile);
        dynamicproduct.setupdeliveryOptionsForDynamicProduct();
        dynamicproduct.setupcustomizationWizard();
        dynamicproduct.saveAndSubmitDynamicProduct();
        dynamicproduct.makeProductOnline(dynamicProductPage.inputdata);

    });
    it('Log in to enduser and check for the sorting of profile properties', async () => {

        logGenerator.log().info("Test Started: Verifying the sorting of profile properties");
        browser.waitForAngularEnabled(true);
        util.navigateTo(util.baseUrlUser);
        browser.wait(ExpectedConditions.visibilityOf(enduserlogin.getUserName()));
        const msfEndUserCreds = util.getEndUserLogin();
        enduserlogin.loginWithCredentialUser(msfEndUserCreds);
        let EC = ExpectedConditions;
        let condition = EC.urlContains("landing");
        browser.wait(condition, 30000);
        browser.sleep(3000);
        switchtostore.switchstore(storePage.inputdataStore);
        browser.sleep(5000);
        orderDynamicProd.browseTheDynamicProductAndSelect(dynamicProductPage.inputdata);
        orderDynamicProd.vallidatingSortingOfProperties();
        switchtostore.switchstore("Copy[1]TEst_Enter");
        logGenerator.log().info("Test ended: Verifying the sorting of profile properties");


    });
    it('Log in to admin and unlink the profile', async () => {

        browser.waitForAngularEnabled(true);
        logGenerator.log().info("Suite Started: Verify creating a Dynamic product Regression Test Scenarios ");
        util.navigateTo(util.baseUrl);
        browser.wait(ExpectedConditions.visibilityOf(page.getUserNameElement()));
        const msfAdminCreds = util.getAdminLogin();
        page.loginWithCredential(msfAdminCreds);
        dynamicproduct.unlinkProfileFromProduct(dynamicProductPage.inputdata);
    });
});