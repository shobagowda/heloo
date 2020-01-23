import { browser, element, by } from 'protractor';
import { logGenerator } from '../../../utils/logGenerator';


export class switchstoreenduser {

  accountsettingslink = () => element(by.xpath("//a[contains(text(),'Account Settings')]"));

  switchstorelink = () => element(by.xpath("//li//a[contains(text(),'Switch Store')]"));

  selectstoreradiobutton = (storeName: string) => element(by.xpath("//td[.='" + storeName + "']//preceding-sibling::td//input"));
  makestoredefaultradiobutton = (storeName: string) => element(by.xpath("//td[.='" + storeName + "']//following-sibling::td//input"));
  switchstorebtn = () => element(by.xpath("//div/button[contains(text(),'Switch Store')]"));
  contactusLnk = () => element(by.xpath("//a[.='Contact Us']"));
  privacypolicyLnk = () => element(by.xpath("//a[.='Privacy Policy']"));
  acknowledgement = () => element(by.xpath("//a[.='Acknowledgement']"));
  termsofuseLnk = () => element(by.xpath("//a[.='Terms of Use']")); 
  vallidateonterms = () =>element(by.xpath("//h2[.='Links to Third Party Websites']")); 


  /**
   * Verify the footer links
   **/ 
    verifyFooterLinks()
  {
    browser.sleep(8000);
    this.privacypolicyLnk().click();
    browser.sleep(8000);
    expect(this.acknowledgement().isPresent());
    browser.sleep(8000);
    this.termsofuseLnk().click();
    browser.sleep(8000);
    expect(this.vallidateonterms().isPresent());
    browser.sleep(8000);
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
  
  /**
   *Switching the store  
   */
  switchstore(storeName: string) {
    browser.ignoreSynchronization = true;
    logGenerator.log().info("User switching store");
    browser.sleep(8000);
    this.accountsettingslink().click();
    browser.sleep(8000);
    this.switchstorelink().click();
    browser.sleep(8000);
    this.selectstoreradiobutton(storeName).click();
    browser.sleep(15000);
    this.makestoredefaultradiobutton(storeName).click();
    browser.sleep(20000);
    this.switchstorebtn().click();
    browser.sleep(10000);
  }
}