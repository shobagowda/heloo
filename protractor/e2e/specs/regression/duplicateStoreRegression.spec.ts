/**
 * Verifying the duplicate store
 */
import { browser, element, by, ExpectedConditions } from 'protractor';
import { adminLoginPage } from '../../pageObjects/msfAdmin/adminLoginPage.po';
import { storePage } from '../../pageObjects/msfAdmin/storePage.po';
import * as data from '../../../testdata/sanitytestdata/testdata.json';
import { utilityPage } from '../../pageObjects/utility.po';
import { logGenerator } from '../../../utils/logGenerator';
import { loginPageEndUser } from '../../pageObjects/msfEnduser/loginPage.enduser.po';
import { switchstoreenduser } from '../../pageObjects/msfEnduser/switchToStore.enduser.po';
describe('duplicate store  Regression test scenario', () => {
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
    logGenerator.log().info("Suite Started: Duplicate Store Regression test scenario  ");
    util.navigateTo(util.baseUrl);
    browser.wait(ExpectedConditions.visibilityOf(page.getUserNameElement()));
    const msfAdminCreds = util.getAdminLogin();
    page.loginWithCredential(msfAdminCreds);
<<<<<<< HEAD
  });
  it(' Verify the store: Duplicate store test', async () => {
=======



  });
  fit(' Verify the store: Duplicate store test', async () => {
>>>>>>> 1f9d96ae7bacf643b30bbf29594dc6ef0b38053a
    browser.sleep(6000);
    storesAdmin.createStore("Duplicatestore", data.store.displaynamebox);
    storesAdmin.createDuplicateStore("Duplicatestore", data.store.displaynamebox);
    let message = await storesAdmin.duplicateStoreAdmin().getText();
    expect<any>(storesAdmin.duplicateStoreAdmin().isPresent()).toBe(true, message);
    logGenerator.log().info("Suite ended: verified the duplicate store ");


  });
});