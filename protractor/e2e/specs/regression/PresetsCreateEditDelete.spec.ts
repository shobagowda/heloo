
import { browser, element, by, ExpectedConditions } from 'protractor';
import { adminLoginPage } from '../../pageObjects/msfAdmin/adminLoginPage.po';
import { storePage } from '../../pageObjects/msfAdmin/storePage.po';
import { presetsPage } from '../../pageObjects/msfAdmin/presetsPage.po';
import * as data from '../../../testdata/sanitytestdata/testdata.json';
import { utilityPage } from '../../pageObjects/utility.po';
import { logGenerator } from '../../../utils/logGenerator';

describe('Create , Edit , Delete Presets for Clearing configuration ', () => {
  let page: adminLoginPage;
  let util: utilityPage;
  let stores: storePage;
  let presets : presetsPage;
  beforeEach(() => {
    page = new adminLoginPage();
    util = new utilityPage();
    stores = new storePage();
    presets = new presetsPage();

  });


  it('User should be able to Create and Verify Presets for Clearing configuration', async () => {
     browser.waitForAngularEnabled(true);
    logGenerator.log().info("Suite Started: Create , Edit , Delete Presets for Clearing configuration");
    logGenerator.log().info("Test Started: User should be able to Create a Presets for Clearing configuration ");
    util.navigateTo(util.baseUrl);
    browser.wait(ExpectedConditions.visibilityOf(page.getUserNameElement()));
    const msfAdminCreds = util.getAdminLogin();
    page.loginWithCredential(msfAdminCreds);
    browser.sleep(6000);
    presets.createPreset("testPreset2");
    stores.VerifyPresetClearingConfig("testPreset2");    
  });

  it('User should be able to Edit and Verify Presets for Clearing configuration', async () => {
    browser.waitForAngularEnabled(true);
   logGenerator.log().info("Test Started: User should be able to Edit and Verify Presets for Clearing configuration ");
   presets.editPreset("testPreset2edited");
   stores.VerifyPresetClearingConfig("testPreset2edited");    
 });

 it('User should be able to Delete and Verify Presets for Clearing configuration', async () => {
  browser.waitForAngularEnabled(true);
 logGenerator.log().info("Test Started: User should be able to delete and Verify Presets for Clearing configuration ");
 presets.deletePreset("testPreset2edited");
 stores.VerifyPresetClearingConfigDelete("testPreset2edited");
});


});
