
import { browser, element, by, ExpectedConditions } from 'protractor';
import { adminLoginPage } from '../../pageObjects/msfAdmin/adminLoginPage.po';
import { dynamicProductPage } from '../../pageObjects/msfAdmin/dynamicProductPage.po';
import { utilityPage } from '../../pageObjects/utility.po';
import { logGenerator } from '../../../utils/logGenerator';
import * as data from '../../../testdata/sanitytestdata/testdata.json';

describe('Verify creating a Dynamic product Regression Test Scenarios', () => {
    let page: adminLoginPage;
    let util: utilityPage;
    let dynamicproduct: dynamicProductPage;
    beforeAll(() => {
        page = new adminLoginPage();
        util = new utilityPage();
        dynamicproduct = new dynamicProductPage();
        browser.waitForAngularEnabled(true);
        logGenerator.log().info("Suite Started: Verify creating a Dynamic product Regression Test Scenarios ");
        util.navigateTo(util.baseUrl);
        browser.wait(ExpectedConditions.visibilityOf(page.getUserNameElement()));
        const msfAdminCreds = util.getAdminLogin();
        page.loginWithCredential(msfAdminCreds);
    });

    it(' Verify Dynamic product :Customization button navigates to Customization Page ', async () => {
        dynamicproduct.customizingDynamicProduct(data.dynamicProduct.productName);
        const customizationText = dynamicproduct.customizationWizardText().getText();
        expect(customizationText).toContain("Customization Wizard");
    });

});
