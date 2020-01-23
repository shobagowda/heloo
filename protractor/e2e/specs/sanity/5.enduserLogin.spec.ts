
import { browser, element, by, ExpectedConditions } from 'protractor';
import { loginPageEndUser } from '../../pageObjects/msfEnduser/loginPage.enduser.po';
import { utilityPage } from '../../pageObjects/utility.po';


describe('Admin Login', () => {
  let enduserlogin: loginPageEndUser;
  let util: utilityPage;
  
  beforeEach(() => {
    enduserlogin = new loginPageEndUser();
    util = new utilityPage();
    
  });


  it('Login to End User Apllication', async () => {
    browser.waitForAngularEnabled(true);
    util.navigateTo(util.baseUrlUser);
    browser.wait(ExpectedConditions.visibilityOf(enduserlogin.getUserName()));
    const msfuserCreds = util.getEndUserLogin();
    enduserlogin.loginWithCredentialUser(msfuserCreds);
    browser.wait(ExpectedConditions.visibilityOf(enduserlogin.homePageSearchBox()));
    expect(await browser.getCurrentUrl()).toContain('landing');
    
  });


});