import { browser, element, by, ProtractorBy } from 'protractor';
import * as data from '../../testdata/sanitytestdata/testdata.json';

export interface Credentials {
  username: string;
  password: string;
}

export class utilityPage {
  sleep = duration => browser.sleep(duration);
  navigateTo(url: string) {
    browser.driver
      .manage()
      .window()
      .maximize();
    // .setSize(1024, 1280);
    return browser.get(url);
  }
  baseUrl = data.utilData.adminUrl;
  baseUrlUser = data.utilData.endUserUrl;
  getAdminLogin = () => this.getCred(data.utilData.userName,data.utilData.password);
  getEndUserLogin = () => this.getCred(data.utilData.userName,data.utilData.password);
  
  getCred(username: string, password: string): Credentials {
    const creds = {} as Credentials;

    creds.username = username;
    creds.password = password;
    return creds;
  }

}

export function waitForElement(selector: string) {
  return browser.isElementPresent(by.css(selector) as ProtractorBy);
}