import { browser, element, by, ExpectedConditions } from 'protractor';
import { adminLoginPage } from '../../pageObjects/msfAdmin/adminLoginPage.po';
import { userPage } from '../../pageObjects/msfAdmin/userPage.po';
import { utilityPage } from '../../pageObjects/utility.po';
import * as data from '../../../testdata/sanitytestdata/testdata.json';
import { logGenerator } from '../../../utils/logGenerator';


describe('Create Group with AD Group ,Add,Remove users from group,Add other groups to thte new group,Search for user groups', () => {
  let page: adminLoginPage;
  let util: utilityPage;
  let user: userPage;

  beforeAll(() => {
    page = new adminLoginPage();
    util = new utilityPage();
    user = new userPage();
    browser.waitForAngularEnabled(true);
    logGenerator.log().info("Suite Started: Create  new group with AD group,Add Users,Remove Users from Group,Add other Groups to the New Group,Search for user groups ");
    util.navigateTo(util.baseUrl);
    browser.wait(ExpectedConditions.visibilityOf(page.getUserNameElement()));
    const msfAdminCreds = util.getAdminLogin();
    page.loginWithCredential(msfAdminCreds);
    browser.sleep(5000);
  });
  it('Create New Group with AD Group', async () => {
    logGenerator.log().info("Test Started: Creating new group with AD group");
    user.goToGroups();
    user.groups(userPage.groupNameInput, data.groups.groupDesc, data.groups.adGroupName);
    user.searchingGroups(userPage.groupNameInput);
    const groupName = user.getGroupName().getText();
    expect(groupName).toContain(userPage.groupNameInput);
    logGenerator.log().info("Test Ended: Created new group with AD group");
  });

  it('Add Users to Group', async () => {
    logGenerator.log().info("Test Started: Adding user to the created group");
    user.selectUsersInExcludedNonADGroup();
    const groupUser1 = user.assignNonADGroupUser1().getText();
    expect(groupUser1).toContain(data.groups.user1);
    const groupUser2 = user.assignNonADGroupUser2().getText();
    expect(groupUser2).toContain(data.groups.user2);
    user.submitinGroup();
    logGenerator.log().info("Test Ended: Added user to the created group");
  });
  it('Remove Users From  Group', async () => {
    logGenerator.log().info("Test Started: Removing Users from created group");
    user.searchingGroups(userPage.groupNameInput);
    user.removeUsersFromGroup();
    user.excludedNonADGroupuser1();
    const groupUser1 = user.excludedNonADGroupUser1().getText();
    expect(groupUser1).toContain(data.groups.user1);
    user.excludedNonADGroupuser2();
    const groupUser2 = user.excludedNonADGroupUser2().getText();
    expect(groupUser2).toContain(data.groups.user2);
    user.submitinGroup();
    logGenerator.log().info("Test Ended: Removed Users from created group");
  });
  it('Add other Groups to the New Group', async () => {
    logGenerator.log().info("Test Started: Adding other Groups to the Newly created Group");
    user.goToGroups();
    user.addGroups();
    const groups = user.assignedMSFGroup().getText();
    expect(groups).toContain(userPage.groupNameInput);
    logGenerator.log().info("Test Ended: Added other Groups to the Newly created Group");
  });
  it('Search for user groups in search filter on the right top', async () => {
    logGenerator.log().info("Test Started: Searching for created user groups in search filter on the right top");
    user.goToGroups();
    user.searchingGroups(userPage.groupNameInput);
    browser.sleep(5000);
    const groups = user.createdGroup().getText();
    expect(groups).toContain(userPage.groupNameInput);
    logGenerator.log().info("Test Ended: Searched for user groups in search filter on the right top");

  });
})
