//TestStorereg_100 used to edit,add, delete the category and to verify the customheader
//TestStoreUserfriendly is used to userfriendlyURL(domain name)
import { browser, element, by, ExpectedConditions } from 'protractor';
import { adminLoginPage } from '../../pageObjects/msfAdmin/adminLoginPage.po';
import { storePage } from '../../pageObjects/msfAdmin/storePage.po';
import * as data from '../../../testdata/sanitytestdata/testdata.json';
import { utilityPage } from '../../pageObjects/utility.po';
import { logGenerator } from '../../../utils/logGenerator';
import { loginPageEndUser } from '../../pageObjects/msfEnduser/loginPage.enduser.po';
import { switchstoreenduser } from '../../pageObjects/msfEnduser/switchToStore.enduser.po';
describe('Create and Edit Store Regression test scenarios', () => {
  let page: adminLoginPage;
  let util: utilityPage;
  let enduserlogin: loginPageEndUser;
  let storesAdmin: storePage
  let enduserSwitchStore: switchstoreenduser;

  beforeAll(() => {
    page = new adminLoginPage();
    util = new utilityPage();
    enduserlogin = new loginPageEndUser();
    storesAdmin = new storePage();
    enduserSwitchStore = new switchstoreenduser();
    browser.waitForAngularEnabled(true);
    logGenerator.log().info("Suite Started: Create and Edit Store Regression test scenarios  ");
    // util.navigateTo(util.baseUrl);
    // browser.wait(ExpectedConditions.visibilityOf(page.getUserNameElement()));
    // const msfAdminCreds = util.getAdminLogin();
    // page.loginWithCredential(msfAdminCreds);
    // browser.sleep(6000);
    // storesAdmin.createStore(storePage.inputdataStore, data.store.displaynamebox);
    // storesAdmin.clickOnEditStore(storePage.inputdataStore);
    // storesAdmin.setupDeliverySettings(data.store.pickupAddisplayname);
    // storesAdmin.saveAndSubmitStore();


   });
  xit(' Verify the store: store online test ', async () => {
    logGenerator.log().info("Test Started: Verify the store: store online test  ");
    storesAdmin.makeStoreOnline(storePage.inputdataStore);
    const checkOnlineStatus = storesAdmin.makeOnlineBtn().getAttribute('style');
    expect(checkOnlineStatus).toContain("color: rgb(231, 43, 132)");
    logGenerator.log().info("Test ended: Verify the store: store online test  ");

  });
  it(' Verify the store: store offline test ', async () => {
    logGenerator.log().info("Test Started: Verify the store: store offline test  ");
    storesAdmin.makeStoreOffline(storePage.inputdataStore);
    const checkOfflineStatus = storesAdmin.makeOflineBtn().getAttribute('style');
    expect(checkOfflineStatus).toContain("color: darkgray");
    storesAdmin.makeStoreOnline(storePage.inputdataStore);
    logGenerator.log().info("Test ended: Verify the store: store offline test  ");
  });

  it(' Verify the store: ADD category for the store ', async () => {
    logGenerator.log().info("Test Started: Verify the store: ADD category for the store  ");
    storesAdmin.createCustomCategory();
    logGenerator.log().info("Test ended: Verify the store: ADD category for the store  ");
  });
  it(' Verify the store: Edit category for the store ', async () => {
    logGenerator.log().info("Test Started: Verify the store: Edit category for the store  ");
    storesAdmin.editCustomCategory();
    logGenerator.log().info("Test ended: Verify the store: Edit category for the store  ");
  });
  it(' Verify the store: Delete category for the store ', async () => {
    logGenerator.log().info("Test Started: Verify the store: Delete category for the store  ");
    storesAdmin.deleteCustomCategory();
    logGenerator.log().info("Test ended: Verify the store: Delete category for the store  ");
  });

 it(' Verify the store: custom header', async () => {
    logGenerator.log().info("Test Started:  Verify the store: custom header");
    storesAdmin.createCustomCategoryForStore();
    util.navigateTo(util.baseUrlUser);
    browser.sleep(5000);
    browser.wait(ExpectedConditions.visibilityOf(enduserlogin.getUserName()));
    browser.sleep(5000);
    const msfEndUserCreds = util.getEndUserLogin();
    enduserlogin.loginWithCredentialUser(msfEndUserCreds);
    browser.sleep(15000);
    enduserSwitchStore.switchstore("TestStorereg_100");
    storesAdmin.customheaderEnduser();
  });

  it(' Verify the edited store after creating', async () => {
    logGenerator.log().info("Test Started:  Verify the edited store after creating ");
    util.navigateTo(util.baseUrl);
    browser.wait(ExpectedConditions.visibilityOf(page.getUserNameElement()));
    const msfAdminCreds = util.getAdminLogin();
    page.loginWithCredential(msfAdminCreds);
    browser.sleep(6000);
    storesAdmin.createAndEditStore();
    if (await storesAdmin.submitButtonAfterEditing().isPresent()) {
      let editMessage = await storesAdmin.submitButtonAfterEditing().getText();
      expect(storesAdmin.submitButtonAfterEditing().isPresent()).toBe(true, editMessage);
      logGenerator.log().info("Test Ended: Verify the created store after editing  ");
    }
  });


  it(' Verify the edited store after creating', async () => {
    logGenerator.log().info("Test Started: Verify the created store after editing  ");
    logGenerator.log().info("Test Started: Verify the store: ADD, EDIT AND DELETE category for the store");
    storesAdmin.createAndEditStore();
    storesAdmin.deleteStore();
  });


  it(' Verify the store: custom header', async () => {
    logGenerator.log().info("Test Started:  Verify the store: custom header");
    storesAdmin.createCustomCategoryForStore();
    util.navigateTo(util.baseUrlUser);
    browser.sleep(5000);
    browser.wait(ExpectedConditions.visibilityOf(enduserlogin.getUserName()));
    browser.sleep(5000);
    const msfEndUserCreds = util.getEndUserLogin();
    enduserlogin.loginWithCredentialUser(msfEndUserCreds);
    browser.sleep(15000);
    enduserSwitchStore.switchstore("TestStorereg_100");
    storesAdmin.customheaderEnduser();

  });

  it(' Verify the edited store after creating', async () => {
    logGenerator.log().info("Test Started:  Verify the edited store after creating ");
    util.navigateTo(util.baseUrl);
    browser.wait(ExpectedConditions.visibilityOf(page.getUserNameElement()));
    const msfAdminCreds = util.getAdminLogin();
    page.loginWithCredential(msfAdminCreds);
    browser.sleep(6000);
    storesAdmin.createAndEditStore();
    if (await storesAdmin.submitButtonAfterEditing().isPresent()) {
      let editMessage = await storesAdmin.submitButtonAfterEditing().getText();
      expect(storesAdmin.submitButtonAfterEditing().isPresent()).toBe(true, editMessage);
      logGenerator.log().info("Test Ended: Verify the created store after editing  ");
    }});

    it(' Verify the deleted store after creating', async () => {
    logGenerator.log().info("Test Started: Verify the deleted store after creating ");
    storesAdmin.deleteStore();
    if (await storesAdmin.checkboxToDeleteEditedStore().isPresent()) {
      let deleteMessage = await storesAdmin.checkboxToDeleteEditedStore().getText();
      expect(storesAdmin.checkboxToDeleteEditedStore().isPresent()).toBe(true, deleteMessage);
      logGenerator.log().info("Test ended: Verify the deleted store after creating  ");
    }
    logGenerator.log().info(" store deleted");


  });
  

  it(' Verify the friendly URL in enduser which created at admin side ', async () => {
    logGenerator.log().info("Test Started: Verify the friendly URL in enduser which created at admin side ");
    storesAdmin.includeFriendlyURL(data.store.domianName);
    util.navigateTo(util.baseUrlUser);
    browser.wait(ExpectedConditions.visibilityOf(enduserlogin.getUserName()));
    const msfEndUserCreds = util.getEndUserLogin();
    enduserlogin.loginWithCredentialUser(msfEndUserCreds);
    browser.sleep(5000);
    enduserSwitchStore.switchstore("TestStoreUserFriendly");
    browser.sleep(15000);
    expect(await browser.getCurrentUrl()).toContain('http://automation1.cpt.firstam.com:3000/cplogin?');
    browser.sleep(5000);
    util.navigateTo(util.baseUrlUser);
    browser.sleep(5000);
    browser.wait(ExpectedConditions.visibilityOf(enduserlogin.getUserName()));
    browser.sleep(5000);
    enduserlogin.loginWithCredentialUser(msfEndUserCreds);
    browser.sleep(15000);
    enduserSwitchStore.switchstore("TestStore_9");
    logGenerator.log().info("Test Ended: Verify the friendly URL in enduser which created at admin side ");

  });
  

  it(' create store and make it as duplicate', async () => {
    logGenerator.log().info("Test Started:  Verify duplicate store after creating ");
    util.navigateTo(util.baseUrl);
    browser.wait(ExpectedConditions.visibilityOf(page.getUserNameElement()));
    const msfAdminCreds = util.getAdminLogin();
    page.loginWithCredential(msfAdminCreds);
    browser.sleep(6000);
    storesAdmin.createAndMakeDuplicateStore(storePage.inputdataStore);
   
      logGenerator.log().info("Test Ended: Verify the created store after editing  ");
    
  });



});
