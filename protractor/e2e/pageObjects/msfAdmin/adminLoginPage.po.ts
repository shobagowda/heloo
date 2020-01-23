import { browser, element, by } from 'protractor';
import { Credentials } from '../utility.po';
import { logGenerator } from '../../../utils/logGenerator';


export class adminLoginPage {
  getUserNameElement = () => element(by.model('loginData.userName'));

  getPasswordElement = () => element(by.model('loginData.password'));

  getLoginButtonElement = () => element(by.buttonText('Login'));
  orderNumber = () => element(by.xpath("//h4[contains(@class,'order-number')]//strong")); 
  /**
   * This method is for Admin Login to the Admin Application 
   * @param cred 
   */
  loginWithCredential(cred: Credentials) {
    logGenerator.log().info("User Logging into Admin Application");
    this.getUserNameElement().sendKeys(cred.username);
    this.getPasswordElement().sendKeys(cred.password);
    this.getLoginButtonElement().click();
    browser.sleep(500);
   
  }
 

}


