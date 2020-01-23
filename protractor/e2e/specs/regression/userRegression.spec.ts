import { browser, element, by, ExpectedConditions } from 'protractor';
import { adminLoginPage } from '../../pageObjects/msfAdmin/adminLoginPage.po';
import { userPage } from '../../pageObjects/msfAdmin/userPage.po';
import { utilityPage } from '../../pageObjects/utility.po';
import * as data from '../../../testdata/sanitytestdata/testdata.json';
import { logGenerator } from '../../../utils/logGenerator';


describe('Create external user,Search,Edit,Delete and create new AD user with impersonation option', () => {
  let page: adminLoginPage;
  let util: utilityPage;
  let user: userPage;

  beforeAll(() => {
    page = new adminLoginPage();
    util = new utilityPage();
    user = new userPage();
    browser.waitForAngularEnabled(true);
    logGenerator.log().info("Suite Started: Create new external user,Search user,Edit User,Delete User,new AD User with Impersonation option");
    util.navigateTo(util.baseUrl);
    browser.wait(ExpectedConditions.visibilityOf(page.getUserNameElement()));
    const msfAdminCreds = util.getAdminLogin();
    page.loginWithCredential(msfAdminCreds);
    browser.sleep(5000);
  });


  it('Create New External User', async () => {
    logGenerator.log().info("Test Started: Creating new external user");
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
    logGenerator.log().info("Test Ended:Created and verified the new external user ");
  });
  it('Search for user in search filter on the right top', async () => {
    logGenerator.log().info("Test Started: Search for user in search filter ");
    user.users();
    user.search();
    const Firstname = user.getFirstName().getText();
    expect(Firstname).toContain(data.user.fname);
    const Lastname = user.getLastName().getText();
    expect(Lastname).toContain(data.user.lname);
    logGenerator.log().info("Test Ended: Searched for user in search filter ");
  });

  it('Edit created external user ', async () => {
    logGenerator.log().info("Test Started: Edit created External User");
    user.users();
    user.search();
    user.selectCreatedUser();
    user.search();
    const lastname = user.getEdittedLastName().getText();
    expect(lastname).toContain(data.user.Edittedname);
    logGenerator.log().info("Test Ended: Editted created External User");
  });

  it('Delete created external user ', async () => {
    logGenerator.log().info("Test Started: Delete created External User");
    user.users();
    user.search();
    user.delete();
    logGenerator.log().info("Test Ended: Deleted created External User");
  });

  it('Create New AD User with Impersonation option', async () => {
    logGenerator.log().info("Test Started: Creating new AD user  with Impersonation option");
    user.createUser(data.user.firstname,data.user.lastname,data.user.adUseremailId);
    user.includeinGroups();
    user.defaultStore();
    user.impersonation();
    logGenerator.log().info("Test Ended: Created new AD user with Impersonation option");
  });

})