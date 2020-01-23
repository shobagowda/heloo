import { browser, element, by, ExpectedConditions } from 'protractor';
import { adminLoginPage } from '../../pageObjects/msfAdmin/adminLoginPage.po';
import { emailProductPage } from '../../pageObjects/msfAdmin/emailProductPage.po';
import { utilityPage } from '../../pageObjects/utility.po';
import { logGenerator } from '../../../utils/logGenerator';
import { loginPageEndUser } from '../../pageObjects/msfEnduser/loginPage.enduser.po';
import { orderDynamicProduct } from '../../pageObjects/msfEnduser/productpageDynamicProduct.enduser.po';
import { orderEmailProduct } from '../../pageObjects/msfEnduser/productpageEmailProduct.endUser.po';

describe('Verify creating a Dynamic product Regression Test Scenarios', () => {
    let page: adminLoginPage;
    let util: utilityPage;
    let email: emailProductPage;
    let enduserlogin: loginPageEndUser;
    let orderDynamicProd: orderDynamicProduct;
    let order: orderEmailProduct;
    beforeAll(() => {
        page = new adminLoginPage();
        util = new utilityPage();
        email = new emailProductPage();
        enduserlogin = new loginPageEndUser();
        orderDynamicProd = new orderDynamicProduct();
        order = new orderEmailProduct();

    });
    it('Creating email product in Admin and ordering in EndUser', () => {
        browser.waitForAngularEnabled(true);
        logGenerator.log().info("Suite Started: Create Email product in Admin and placing order from Enduser");
        logGenerator.log().info("Test Started: Create a Email product");
        util.navigateTo(util.baseUrl);
        browser.wait(ExpectedConditions.visibilityOf(page.getUserNameElement()));
        const msfAdminCreds = util.getAdminLogin();
        page.loginWithCredential(msfAdminCreds);
        browser.sleep(5000);
        email.creatingEmailProductinAdmin(emailProductPage.inputdata);
        email.assignStoreToTheProduct();
        email.recipientListToggle();
        email.configurationTab();
        email.setupCustomizationWizard();
        email.recipientSetup();
        email.saveAndSubmitEmailProduct();
        email.makeProductOnlineEmailProduct(emailProductPage.inputdata);
        logGenerator.log().info("Email product is created");
        const checkCreatedProduct = email.getCreatedProduct().getText();
        expect(checkCreatedProduct).toContain(emailProductPage.inputdata);
        const checkonlineStatus = email.emailProductOnlineStatus().getAttribute('class');
        expect(checkonlineStatus).toContain("online");
    });

    it('Email product oredring in  EndUser and checking the order status brfor delivery', () => {
            util.navigateTo(util.baseUrlUser);
        browser.wait(ExpectedConditions.visibilityOf(enduserlogin.getUserName()));
        const msfEndUserCreds = util.getEndUserLogin();
        enduserlogin.loginWithCredentialUser(msfEndUserCreds);
        browser.sleep(30000);
        order.goToProductsPage(emailProductPage.inputdata);
        browser.sleep(5000);
        order.next();
        order.verifyRecipientListsection();
        browser.sleep(8000);
        order.schedulingEmail();
        browser.sleep(8000);
        order.placingOrderEmailProduct();
        const orderSuccessMessage = order.successMessage().getText();
        expect(orderSuccessMessage).toContain("Your order is successfully placed.");
        orderDynamicProd.checkOrderstatusBeforedelivery();

    });

    it('Log in to admin and move the email product from Scheduled file to Sent Email', async () => {
        browser.waitForAngularEnabled(true);
        logGenerator.log().info("Suite Started: Order a Dynamic Product and Process the Order from Producing file to Delivered. Verify End User side Oder status changes ");
        util.navigateTo(util.baseUrl);
        browser.wait(ExpectedConditions.visibilityOf(page.getUserNameElement()));
        const msfAdminCreds = util.getAdminLogin();
        page.loginWithCredential(msfAdminCreds);



    });
});
