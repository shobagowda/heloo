import { browser, element, by } from 'protractor';
import { Credentials } from '../utility.po';
import { logGenerator } from '../../../utils/logGenerator';


export class loginPageEndUser {

    getUserName = () => element(by.xpath("//input[@name='Email']"));

    getPasswordUser = () => element(by.xpath("//input[@name='Password']")); ;

    getLoginButtonElementUser = () => element(by.buttonText('Submit'));

    homePageSearchBox = () => element(by.name("searchProduct")); 
  /**
   * This method is for Admin Login to the Admin Application 
   * @param cred2 
   */
  loginWithCredentialUser(cred2: Credentials) {

    browser.ignoreSynchronization = true;
    logGenerator.log().info("User Logging into End User Application");
    this.getUserName ().sendKeys(cred2.username);
    this.getPasswordUser ().sendKeys(cred2.password);
    this.getLoginButtonElementUser().click();
    browser.sleep(10000);
  }

}


