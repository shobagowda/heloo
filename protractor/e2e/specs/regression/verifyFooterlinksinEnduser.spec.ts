import { browser, element, by, ExpectedConditions } from 'protractor';
import { adminLoginPage } from '../../pageObjects/msfAdmin/adminLoginPage.po';
import { userPage } from '../../pageObjects/msfAdmin/userPage.po';
import { utilityPage } from '../../pageObjects/utility.po';
import * as data from '../../../testdata/sanitytestdata/testdata.json';
import { logGenerator } from '../../../utils/logGenerator';
import { loginPageEndUser } from '../../pageObjects/msfEnduser/loginPage.enduser.po';
import { switchstoreenduser } from '../../pageObjects/msfEnduser/switchToStore.enduser.po';


describe('Verify footer links Contact Us, Privacy Policy and Terms of Use are working', () => {
  let page: adminLoginPage;
  let util: utilityPage;
  let user: userPage;
  let endUserPage: loginPageEndUser;
  let switchEU: switchstoreenduser;

  beforeAll(() => {
     endUserPage=new  loginPageEndUser;
     switchEU=new  switchstoreenduser;
    page = new adminLoginPage();
    util = new utilityPage();
    user = new userPage();
    browser.waitForAngularEnabled(true);
    logGenerator.log().info("Suite Started: Verify footer links Contact Us, Privacy Policy and Terms of Use are working");
    util.navigateTo(util.baseUrlUser);
    browser.wait(ExpectedConditions.visibilityOf(endUserPage.getUserName()));
    const msfEndUserCreds = util.getEndUserLogin();
    endUserPage.loginWithCredentialUser(msfEndUserCreds);
    browser.sleep(8000);
  });


  it('Verify footer links Contact Us, Privacy Policy and Terms of Use are working', async () => {
    logGenerator.log().info("Test Started: Verify footer links Contact Us, Privacy Policy and Terms of Use are working");
    switchEU.verifyFooterLinks();
    logGenerator.log().info("Test Ended: Verify footer links Contact Us, Privacy Policy and Terms of Use are working");
   
  });
  logGenerator.log().info("Suite Ended: Verify footer links Contact Us, Privacy Policy and Terms of Use are working");
 
})