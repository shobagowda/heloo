import { browser, element, by, By, $, $$, ExpectedConditions, logging, protractor, Key, WebDriver } from 'protractor';

var path = require('path');
const timestamp = Date.now();
export class orderPageAdmin {
  orderLnk = () => element(by.css("a[id='Orders']"));
  selectDropdown = () => element(by.css("select[id='ddlOrdersQueue']"));
  dropdwnProducingfileinprogress = () => element(by.xpath("//option[contains(text(),'Producing File in Progress ')]"));
  actionDropdwn = () => element(by.id('ddl_listOfOrderActions'));
  actionProducefile = () => element(by.xpath("//option[.='Produce File']"));
  dropDwnOrderReceived = () => element(by.xpath("//option[contains(text(),'Order Received')]"));
  dropdwnOrderidCheckBox = () => element(by.xpath("//*[@id='datatable-buttons']/div[2]/div/div[2]/div/div[1]/div/div/div/div/div"));
  actionCreateDelivery = () => element(by.xpath("//option[.='Create Delivery']"));
  //actionPrepressProgress = () => element(by.xpath("//option[.='Send to Prepress']"));
  goBtn = () => element(by.id('btn_orderActionSave'));
  //dropdwnPrepressInProgress   = () => element(by.xpath("//option[contains(text(),'Prepress in Progress ')]"));

  dropdwnReadyforDelivery = () => element(by.xpath("//option[contains(text(),'Ready for Delivery ')]"));
  actionOutforDelivery = () => element(by.xpath("//option[.='Out For Delivery']"));
  dropdwnOutforDelivery = () => element(by.xpath("//option[contains(text(), 'Out for Delivery ')]"));
  actionMovetoDelivered = () => element(by.xpath("//option[.='Move to Delivered']"));
  dropDwnDelivered = () => element(by.xpath("//option[contains(text(),'Delivered ')]"));
  report = () => element(by.id('ShowOrdersReport'));
  store = () => element(by.xpath("//input[@id='store' and @class='ng-pristine ng-untouched ng-valid']"));
  generate = () => element(by.id('btn_getOrdersReport'));
  export = () => element(by.id('btn_exportReport'));

  /**
   * verify the order report
   */
  VerifytheReport() {
    this.orderLnk().click();
    browser.sleep(5000);
    this.report().click();
    browser.sleep(5000);
    this.store().sendKeys("TestStore_9");
    browser.sleep(5000);
    this.generate().click();
    browser.sleep(18000);
    expect<any>(this.export().isEnabled());
  }
  okBtn = () => element(by.xpath("//button[.='OK']"));
  /**
   * Checking the orders queue at admin side
   */
  checkOrderQueueAdmin() {
    this.orderLnk().click();
    //checking for order in producing file queue
    this.selectDropdown().click();
    browser.sleep(8000);
    this.dropdwnProducingfileinprogress().click();
    browser.sleep(8000);
    this.dropdwnOrderidCheckBox().click();
    browser.sleep(8000);
    //move to produce file
    this.actionDropdwn().click();
    browser.sleep(8000);
    this.actionProducefile().click();
    browser.sleep(8000);
    this.goBtn().click();
    browser.sleep(8000);

    //checking for order in order received queue
    this.selectDropdown().click();
    this.dropDwnOrderReceived().click();
    browser.sleep(18000);
    this.dropdwnOrderidCheckBox().click();
    browser.sleep(8000);
    //action dropdwn to move to create delivery
    this.actionDropdwn().click();
    browser.sleep(8000);
    this.actionCreateDelivery().click();
    browser.sleep(8000);
    this.goBtn().click();
    browser.sleep(8000);

    //checking for ready for delivery
    this.selectDropdown().click();
    browser.sleep(8000);
    this.dropdwnReadyforDelivery().click();
    browser.sleep(8000);
    this.dropdwnOrderidCheckBox().click();
    browser.sleep(8000);

    //action dropdwn to move to out for delivery
    this.actionDropdwn().click();
    browser.sleep(8000);
    this.actionOutforDelivery().click()
    browser.sleep(8000);
    this.goBtn().click();
    browser.sleep(8000);

    //checking for out for delivery
    this.selectDropdown().click();
    browser.sleep(8000);
    this.dropdwnOutforDelivery().click();
    this.dropdwnOrderidCheckBox().click();
    browser.sleep(8000);
    //action dropdwn to move to delivered
    this.actionDropdwn().click();
    browser.sleep(8000);
    this.actionMovetoDelivered().click();
    this.goBtn().click();
    browser.sleep(8000);
    this.okBtn().click();
    browser.sleep(8000);
    //checking for out for delivery
    this.selectDropdown().click();
    browser.sleep(8000);
    this.dropDwnDelivered().click();




  }
}
