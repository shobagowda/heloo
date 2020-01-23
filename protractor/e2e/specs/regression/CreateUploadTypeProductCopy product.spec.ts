
import { browser, element, by, ExpectedConditions } from 'protractor';
import { adminLoginPage } from '../../pageObjects/msfAdmin/adminLoginPage.po';
import { uploadFileProductPage } from '../../pageObjects/msfAdmin/uploadfileProductPage.po';
import { loginPageEndUser } from '../../pageObjects/msfEnduser/loginPage.enduser.po';
import * as data from '../../../testdata/sanitytestdata/testdata.json';
import { utilityPage } from '../../pageObjects/utility.po';
import { logGenerator } from '../../../utils/logGenerator';
import { orderUploadfileProduct } from '../../pageObjects/msfEnduser/productspageUploadfile.enduser.po';

describe('Create a uploadfile Product and Copy Product and verify in user application - regression  ', () => {
    let page: adminLoginPage;
    let util: utilityPage;
    let uploadfile: uploadFileProductPage;
    let enduserlogin: loginPageEndUser;
    let orderUFProduct: orderUploadfileProduct;
    //let switchstore_eu : switchstore_enduser;


    beforeEach(() => {
        page = new adminLoginPage();
        util = new utilityPage();
        uploadfile = new uploadFileProductPage();
        enduserlogin = new loginPageEndUser();
        orderUFProduct = new orderUploadfileProduct();
        // switchstore_eu =new switchstore_enduser();

    });


    it('User should be able to create a uploadfile Product and Copy Product and verify in user application', async () => {

        browser.waitForAngularEnabled(true);
        logGenerator.log().info("Suite Started: Create a uploadfile Product and Copy Product and verify in user application - regression ");
        logGenerator.log().info("Test Started: User should be able to create a uploadfile Product and verify in user application ");
        util.navigateTo(util.baseUrl);
        browser.wait(ExpectedConditions.visibilityOf(page.getUserNameElement()));
        const msfAdminCreds = util.getAdminLogin();
        page.loginWithCredential(msfAdminCreds);
        browser.sleep(6000);
        uploadfile.createUploadFileProduct(data.uploadFileProduct.productType, uploadFileProductPage.inputdata,data.uploadFileProduct.productSize);
        uploadfile.assignStoreToTheProduct();
        uploadfile.gotoConfiguration();
        uploadfile.setupProductProperties();
        uploadfile.setupDeliveryoptions();
        uploadfile.SaveAndSubmitUplodfileProduct();
        uploadfile.makeProductOnlineUploadFile(uploadFileProductPage.inputdata);
        const check_online_Status = uploadfile.makeProductOnlineStatus().getAttribute('class');
        expect(check_online_Status).toContain("online");    
        uploadfile.copyProduct(uploadFileProductPage.inputdata);
        uploadfile.gotoConfiguration();
        uploadfile.verifyProductProperties();
        


    });

});

