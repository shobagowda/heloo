import { browser, element, by } from 'protractor';
import { logGenerator } from '../../../utils/logGenerator';

export class logoutAdmin {
  getexpand = () => element(by.xpath("//*[@data-toggle='dropdown']"));
  
  getLogoutbtn = () => element(by.xpath("//*[@ng-click='logOut()']"));

  logoutAdminApplication() {
    logGenerator.log().info("User Logging out from Admin Application");
    this.getexpand().click();
    browser.sleep(2000);
    this.getLogoutbtn().click();
    
  }

}


