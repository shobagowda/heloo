import { browser, element, by, ExpectedConditions } from 'protractor';
import { adminLoginPage } from '../../pageObjects/msfAdmin/adminLoginPage.po';
import { emailProductPage } from '../../pageObjects/msfAdmin/emailProductPage.po';
import { utilityPage } from '../../pageObjects/utility.po';
import { logGenerator } from '../../../utils/logGenerator';
import { loginPageEndUser } from '../../pageObjects/msfEnduser/loginPage.enduser.po';
import { orderEmailProduct } from '../../pageObjects/msfEnduser/productpageEmailProduct.endUser.po';



describe('Verify creating a Email product Regression Test Scenarios 2 ', () => {
  let page: adminLoginPage;
  let util: utilityPage;
  let email: emailProductPage;
  let enduserlogin: loginPageEndUser;
  let order: orderEmailProduct;

  beforeEach(() => {
    page = new adminLoginPage();
    util = new utilityPage();
    email = new emailProductPage();
    enduserlogin = new loginPageEndUser();
    order = new orderEmailProduct();
    browser.waitForAngularEnabled(true);
    logGenerator.log().info("Suite Started: Verify Adors,Featured Product,Recipient List,Schedule e-mail sending time,Making emailProduct Online and Offline");
    util.navigateTo(util.baseUrl);
    browser.wait(ExpectedConditions.visibilityOf(page.getUserNameElement()));
    const msfAdminCreds = util.getAdminLogin();
    page.loginWithCredential(msfAdminCreds);
    browser.sleep(5000);
  });
  it('Create Email Product and selecting Profile Dial, Image Ador, Subject Dial in Admin and Verifying it in Enduser', () => {
    logGenerator.log().info("Test Started:");
    email.creatingEmailProductinAdmin(emailProductPage.inputdata);
    email.assignStoreToTheProduct();
    email.configurationTab();
    email.adorsAndVariables();
    email.saveAndSubmitEmailProduct();
    email.makeProductOnlineEmailProduct(emailProductPage.inputdata);
    browser.sleep(50000);
    util.navigateTo(util.baseUrlUser);
    browser.wait(ExpectedConditions.visibilityOf(enduserlogin.getUserName()));
    const msfEndUserCreds = util.getEndUserLogin();
    enduserlogin.loginWithCredentialUser(msfEndUserCreds);
    browser.sleep(30000);
    order.goToProductsPage(emailProductPage.inputdata);
    browser.sleep(5000);
    order.customization();
    const adorImage = order.imageAdor().getText();
    expect(adorImage).toContain("Misc11");
    const adorProfile = order.profileDial().getText();
    expect(adorProfile).toContain("Choose Your Personalization Profile");
    const adorSubject = order.subjectDial().getText();
    expect(adorSubject).toContain("Subject_Dial");
    logGenerator.log().info("Test Ended:");
  });

  it('Selecting the Featured Product in Admin and Verifying it in Enduser for the created Email Product', () => {
    logGenerator.log().info("Test Started:");
    email.featuredProductToggle();
    browser.sleep(50000);
    util.navigateTo(util.baseUrlUser);
    browser.wait(ExpectedConditions.visibilityOf(enduserlogin.getUserName()));
    const msfEndUserCreds = util.getEndUserLogin();
    enduserlogin.loginWithCredentialUser(msfEndUserCreds);
    browser.sleep(30000);
    const featuredProd = order.featuredProduct().getText();
    expect(featuredProd).toContain("Featured Products");
    logGenerator.log().info("Test Ended:");
  });
  it('Selecting the Recipient List and Verifying all the four Recipients for created Email Product in Admin', () => {
    logGenerator.log().info("Test Started:");
    email.makeProductOfflineEmailProduct(emailProductPage.inputdata);
    email.recipientListToggle();
    email.configurationTab();
    browser.sleep(5000);
    email.recipientSetup();
    email.saveAndSubmitEmailProduct();
    email.makeProductOnlineEmailProduct(emailProductPage.inputdata);
    browser.sleep(50000);
    util.navigateTo(util.baseUrlUser);
    browser.wait(ExpectedConditions.visibilityOf(enduserlogin.getUserName()));
    const msfEndUserCreds = util.getEndUserLogin();
    enduserlogin.loginWithCredentialUser(msfEndUserCreds);
    browser.sleep(30000);
    order.goToProductsPage(emailProductPage.inputdata);
    browser.sleep(5000);
    order.customization();
    //order.next();
    //order.verifyRecipientListsection();
    const upload = email.uploadRecipient().getText();
    expect(upload).toContain("Upload your Recipient List");
    const recipientOnline = email.createyourRecipientListOnline().getText();
    expect(recipientOnline).toContain("Create your Recipient List online");
    const existingRecipientList = email.useExistingRecipientList().getText();
    expect(existingRecipientList).toContain("Use an existing Recipient List");
    const SalesforceCampaign = email.useSalesforceCampaign().getText();
    expect(SalesforceCampaign).toContain("Use salesforce campaign");
    logGenerator.log().info("Test Ended:");


  });

  it('Verifying Schedule e-mail sending time is added in Property for created Email Product in Admin', () => {
    logGenerator.log().info("Test Started:");
    email.createdEmailProduct();
    email.configurationTab();
    email.productPropertySetup();
    const schedule = email.scheduleEmail().getText();
    expect(schedule).toContain("Schedule e-mail sending time");
    logGenerator.log().info("Test Ended:");
  });
  it('Making emailProduct Online and Offline', () => {
    logGenerator.log().info("Test Started:");
    email.searchforCreatedEmailProduct(emailProductPage.inputdata);
    email.makingStatusOnline();
    email.verifyToastMesssagesforOnline();
    email.makingStatusOffline();
    email.verifyToastMesssagesforOffline();
    logGenerator.log().info("Test Ended:");
  });
})