
import { browser, element, by, ExpectedConditions } from 'protractor';
import { adminLoginPage } from '../../pageObjects/msfAdmin/adminLoginPage.po';
import { storePage } from '../../pageObjects/msfAdmin/storePage.po';
import * as data from '../../../testdata/sanitytestdata/testdata.json';
import { utilityPage } from '../../pageObjects/utility.po';
import { logGenerator } from '../../../utils/logGenerator';

describe('Create and Edit Store', () => {
  let page: adminLoginPage;
  let util: utilityPage;
  let stores: storePage;
  
  beforeEach(() => {
    page = new adminLoginPage();
    util = new utilityPage();
    stores = new storePage();

  });


  it('User should be able to Create a Store', async () => {
     browser.waitForAngularEnabled(true);
    logGenerator.log().info("Suite Started: Create and Edit Store  ");
    logGenerator.log().info("Test Started: User should be able to Create a Store ");
    util.navigateTo(util.baseUrl);
    browser.wait(ExpectedConditions.visibilityOf(page.getUserNameElement()));
    const msfAdminCreds = util.getAdminLogin();
    page.loginWithCredential(msfAdminCreds);
    browser.sleep(6000);
    stores.createStore(storePage.inputdataStore , data.store.displaynamebox);
    //stores.createStore("TestStore_9" , data.store.displaynamebox);
    stores.clickOnEditStore(storePage.inputdataStore);
    stores.setupDeliverySettings(data.store.displaynamebox);
    stores.saveAndSubmitStore();
    stores.makeStoreOnline(storePage.inputdataStore);
    const checkOnlineStatus = stores.makeOnlineBtn().getAttribute('style');
    expect(checkOnlineStatus).toContain("color: rgb(231, 43, 132)")
    
  });

});

