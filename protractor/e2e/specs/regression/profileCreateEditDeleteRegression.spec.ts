
import { browser, element, by, ExpectedConditions } from 'protractor';
import { adminLoginPage } from '../../pageObjects/msfAdmin/adminLoginPage.po';
import { profilePage } from '../../pageObjects/msfAdmin/profilePage.po';
import { utilityPage } from '../../pageObjects/utility.po';
import { logGenerator } from '../../../utils/logGenerator';


describe('Create a , edit and delete the profile', () => {
    logGenerator.log().info("Suite Started: Create a , edit and delete the profile");
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
        logGenerator.log().info(" Test Started: Create the new profile and verify profile creation in admin ");
        util.navigateTo(util.baseUrl);
        browser.wait(ExpectedConditions.visibilityOf(page.getUserNameElement()));
        const msfAdminCreds = util.getAdminLogin();
        page.loginWithCredential(msfAdminCreds);
        profile.profilePageCreation(profilePage.inputdataProfile);
        logGenerator.log().info("Test Ended: Create the new profile and verify profile creation in admin ");
    });

    it('Adding new property to the profile in admin', async () => {
        logGenerator.log().info(" Test Started: Adding new property to the profile in admin ");
        profile.addPropertyToProfile(profilePage.inputdataProfile);
        logGenerator.log().info(" Test Ended: Adding property to the profile in admin ");

    });
    it('Edit the newly created property of profile in admin', async () => {
        logGenerator.log().info(" Test Started:Edit the newly created property of profile in admin ");
        profile.editAddedPrpertyOfTheProfile();

    });
    it('Add global property to the profile in admin', async () => {
        logGenerator.log().info(" Test Started: Add global property to the profile in admin ");
        profile.addGlobalPropertyToProfile();
    });
    it('Edit global property of the profile in admin', async () => {
        logGenerator.log().info(" Test Started: Add global property to the profile in admin ");
        profile.editGlobalPropertyOfProfile();
    });
    it('Create the duplicate profile and verify profile creation in admin', async () => {

        profile.profilePageCreation(profilePage.inputdataProfile);
        // const checkDuplicateProfile = element(by.xpath("//span[.='Profile Name Already Exists']"));
        // expect(checkDuplicateProfile.getText()).toEqual('Profile Name Already Exists');
        
        profile.createDuplicateProfile(profilePage.inputdataProfile);

        browser.sleep(10000);
        logGenerator.log().info("Test Ended: Create the duplicate profile and verify profile creation in admin ");
    });

    it('Edit the newly created profile in admin', async () => {
        logGenerator.log().info(" Test Started: Edit the already Created profile and verify in admin ");
        profile.profileEdit(profilePage.inputdataProfile);
        const checkEditedProfile = element(by.xpath("//a[.='" + profilePage.inputdataProfile +"MSF"+"']"));
        expect(checkEditedProfile.getText()).toContain(profilePage.inputdataProfile+"MSF");
        logGenerator.log().info(" Test Ended: Edit the already Created profile and verify in admin ");

    });
    it('Delete the created profile in admin', async () => {
        logGenerator.log().info(" Test Started: Delete the created profile in admin ");
         profile.profileDelete(profilePage.inputdataProfile +"MSF");
        logGenerator.log().info(" Test Ended: Delete the created profile in admin ");

    });
    logGenerator.log().info("Suite Ended: Create a , edit and delete the profile");
});
