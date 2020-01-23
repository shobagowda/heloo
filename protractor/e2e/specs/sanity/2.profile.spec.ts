
import { browser, element, by, ExpectedConditions } from 'protractor';
import { adminLoginPage } from '../../pageObjects/msfAdmin/adminLoginPage.po';
import { profilePage } from '../../pageObjects/msfAdmin/profilePage.po';
import { utilityPage } from '../../pageObjects/utility.po';
import { logGenerator } from '../../../utils/logGenerator';


describe('Create a Profile', () => {
  let page: adminLoginPage;
  let util: utilityPage;
  let profile: profilePage;
  

  beforeEach(() => {
    page = new adminLoginPage();
    util = new utilityPage();
    profile = new profilePage();
  });

  it('Create the new profile and verify profile creation in admin', async () => {
    browser.waitForAngularEnabled(true);
    logGenerator.log().info("Suite Started: Create a Profile ");
    logGenerator.log().info(" Test Started: Create the new profile and verify profile creation in admin ");
    util.navigateTo(util.baseUrl);
    browser.wait(ExpectedConditions.visibilityOf(page.getUserNameElement()));
    const msfAdminCreds = util.getAdminLogin();
    page.loginWithCredential(msfAdminCreds);
    profile.profilePageCreation(profilePage.inputdataProfile);
    profile.profilePageVerify(profilePage.inputdataProfile);
    profile.submitProfile();
    const checkCreatedProfile = element(by.xpath("(//a[@class='ng-binding'])[8]"));
    expect(checkCreatedProfile.getText()).toContain(profilePage.inputdataProfile);
    logGenerator.log().info("Suite ended: successfull validation of Created a Profile ");
  });
});



