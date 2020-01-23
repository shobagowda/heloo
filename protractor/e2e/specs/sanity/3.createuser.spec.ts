import { browser, element, by, ExpectedConditions } from 'protractor';
import { adminLoginPage } from '../../pageObjects/msfAdmin/adminLoginPage.po';
import { UserPage } from '../../pageObjects/msfAdmin/userPage.po';
import { utilityPage } from '../../pageObjects/utility.po';
import * as data from '../../../testdata/sanitytestdata/testdata.json';
import { logGenerator } from '../../../utils/logGenerator';


describe('Create user and Assigning to group', () => {
  let page: adminLoginPage;
  let util: utilityPage;
  let user: UserPage;

  beforeEach(() => {
    page = new adminLoginPage();
    util = new utilityPage();
    user = new UserPage();
    browser.waitForAngularEnabled(true);
    logGenerator.log().info("Suite Started: Create user and Assigning to group");
    logGenerator.log().info("Test Started: Creating user and adding to group");
    util.navigateTo(util.baseUrl);
    browser.wait(ExpectedConditions.visibilityOf(page.getUserNameElement()));
    const msfAdminCreds = util.getAdminLogin();
    page.loginWithCredential(msfAdminCreds);
    browser.sleep(5000);
  });
  


  it('Creating user and adding to group', async () => {
    
    user.creatingUserPageOperations();
    logGenerator.log().info("User is Created");
    user.includeinGroups();
    user.defaultStore();
    user.search();
    const checkLastname = user.getLastName().getText();
    expect(checkLastname).toContain(data.user.lname);
    const checkCreatedUserStatus = user.statusBtn().getAttribute('data-title');
    expect(checkCreatedUserStatus).toContain("IsActive");
    logGenerator.log().info("User is present the Userlist");
    logGenerator.log().info("Status of the user is online");
  });
});