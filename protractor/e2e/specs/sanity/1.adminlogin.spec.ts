
import { browser, element, by, ExpectedConditions } from 'protractor';
import { adminLoginPage } from '../../pageObjects/msfAdmin/adminLoginPage.po';
import { utilityPage } from '../../pageObjects/utility.po';
import { logoutAdmin } from '../../pageObjects/msfAdmin/adminLogoutPage.po';

describe('Admin Login', () => {
  let page: adminLoginPage;
  let util: utilityPage;
  let logout: logoutAdmin;

  beforeEach(() => {
    page = new adminLoginPage();
    util = new utilityPage();
    logout = new logoutAdmin();
  });


  it('Verify Login and LogOut Admin Apllication', async () => {
    browser.waitForAngularEnabled(true);
    util.navigateTo(util.baseUrl);
    browser.wait(ExpectedConditions.visibilityOf(page.getUserNameElement()));
    const msfAdminCreds = util.getAdminLogin();
    page.loginWithCredential(msfAdminCreds);
    browser.sleep(5000);
    expect(await browser.getCurrentUrl()).toContain('products');
    //logout from application
    logout.logoutAdminApplication();
    expect(await browser.getCurrentUrl()).toContain('login');
  });


});