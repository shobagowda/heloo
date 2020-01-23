import { browser, element, by, ExpectedConditions } from 'protractor';
import { logGenerator } from '../../../utils/logGenerator';
import * as data from '../../../testdata/sanitytestdata/testdata.json';
import { uploadFileProductPage } from '../msfAdmin/uploadfileProductPage.po';
var path = require('path');

export class orderUploadfileProduct {

  clickMenu = () => element(by.xpath("//*[@id='header']/label/div[1]/span"));
  clickDefaultCategory = () => element(by.linkText('First Store Group'));
  clickOnProduct = (productName: string) => element(by.xpath("//*[contains (text(),'" + productName + "')]"));
  selectPaperSize = () => element(by.id('Paper size'));
  uploadPdf = () => element(by.id('UploadFile'));
  addToCartBtn = () => element(by.xpath("//button[contains(text(),'Add to Cart')]"));
  checkOutBtn = () => element(by.id('btn_checkout'));
  submitOrderBtn = () => element(by.xpath("//button[contains(text(),'Submit Order')]"));
  successMessage = () => element(by.xpath("//*[contains(text(),'Your order is successfully placed.')]"));

  /**
   *Ordering Uploadfile product in EndUser
   */
  orderingUploadFileProduct(productName: string) {

    browser.ignoreSynchronization = true;
    logGenerator.log().info("Ordering Product ");
    browser.driver.sleep(4000);
    this.clickMenu().click();
    browser.sleep(10000);
    this.clickDefaultCategory().click();
    browser.sleep(10000);
    this.clickOnProduct(productName).click();
    browser.wait(ExpectedConditions.visibilityOf(this.selectPaperSize()));
    browser.sleep(10000);
    this.selectPaperSize().sendKeys(data.uploadFileProduct.textValuelist);
    browser.sleep(4000);
    var fileToUpload1 = './../../../testdata/sanitytestdata/uploadproductBlack Swirl Property Flyer703602.pdf',
      absolutePath1 = path.resolve(__dirname, fileToUpload1);
    logGenerator.log().info(" absolutePath : " + absolutePath1);
    this.uploadPdf().sendKeys(absolutePath1);
    browser.sleep(10000);
    this.addToCartBtn().click();
    browser.wait(ExpectedConditions.visibilityOf(this.checkOutBtn()));
    browser.sleep(30000);
    this.checkOutBtn().click();
    browser.wait(ExpectedConditions.visibilityOf(this.submitOrderBtn()));
    browser.sleep(15000);
    this.submitOrderBtn().click()
    browser.wait(ExpectedConditions.visibilityOf(this.successMessage()));
    browser.sleep(15000);

  }

}