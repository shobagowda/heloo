import { browser, element, by, By, $, $$, ExpectedConditions, logging, protractor, Key, WebDriver } from 'protractor';
import { Alert } from 'selenium-webdriver';
import * as data from '../../../testdata/sanitytestdata/testdata.json';
import { logGenerator } from '../../../utils/logGenerator';

var path = require('path');
export class orderPageAdmin {
    orderLnk = () => element(by.css("a[id='Orders']"));
    dropdownQueue = () => element(by.css("select[id='ddlOrdersQueue']"));
    dropdwnProducingfileinprogress = () => element(by.xpath("//option[contains(text(),'Producing File in Progress ')]"));
    actionDropdwn = () => element(by.id('ddl_listOfOrderActions'));
    actionProducefile = () => element(by.xpath("//option[.='Produce File']"));
    dropdownOrderReceived = () => element(by.xpath("//option[contains(text(),'Order Received')]"));
    OrderidCheckBox = () => element(by.xpath("//*[@id='datatable-buttons']/div[2]/div/div[2]/div/div[1]/div/div/div/div/div"));
    actionCreateDelivery = () => element(by.xpath("//option[.='Create Delivery']"));
    //actionPrepressProgress = () => element(by.xpath("//option[.='Send to Prepress']"));
    goBtn = () => element(by.id('btn_orderActionSave'));
    //dropdwnPrepressInProgress   = () => element(by.xpath("//option[contains(text(),'Prepress in Progress ')]"));

    dropdownReadyforDelivery = () => element(by.xpath("//option[contains(text(),'Ready for Delivery ')]"));
   
    actionOutforDelivery = () => element(by.xpath("//option[.='Out For Delivery']"));
    dropdwnOutforDelivery = () => element(by.xpath("//option[contains(text(), 'Out for Delivery ')]"));
    actionMovetoDelivered = () => element(by.xpath("//option[.='Move to Delivered']"));
    dropDwnDelivered = () => element(by.xpath("//option[contains(text(),'Delivered ')]"));
    report = () => element(by.id('ShowOrdersReport'));
    store = () => element(by.xpath("//input[@id='store' and @class='ng-pristine ng-untouched ng-valid']"));
    generate = () => element(by.id('btn_getOrdersReport'));
    export = () => element(by.id('btn_exportReport'));
    
    shipThroughFedExAction = () => element(by.xpath("//option[@label='Ship Through Fedex']"));
    fedExWithoutLabels = () => element(by.xpath("//input[@id='chcFedexWithoutLabels']"));
    getFedExLabelBtn = () => element(by.xpath("//a[@id='btn_getFedExItemDetails']"));
    fedExServiceType = () => element(by.xpath("//input[@value='FEDEX_2_DAY']"));
    productDimension = () => element(by.xpath("//input[@value='DimensionStandard']"));
    generateFedExLabelBtn = () => element(by.xpath("//a[@id='btn_generateFedExLabel']"));
    orderReceived = () => element(by.xpath("//*[@id='ddlOrdersQueue']/optgroup/option[@label='Order Received (9)']"));
    
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
        expect<any>(this.export().isDisplayed());
    }
    okBtn = () => element(by.xpath("//button[.='OK']"));
    /**
     * Checking the orders queue at admin side
     */
    checkOrderQueueAdmin() {
        this.orderLnk().click();
        //checking for order in producing file queue
        this.dropdownQueue().click();
        browser.sleep(8000);
        this.dropdwnProducingfileinprogress().click();
        browser.sleep(8000);
        this.OrderidCheckBox().click();
        browser.sleep(8000);
        //move to produce file
        this.actionDropdwn().click();
        browser.sleep(8000);
        this.actionProducefile().click();
        browser.sleep(8000);
        this.goBtn().click();
        browser.sleep(8000);

        //checking for order in order received queue
        this.dropdownQueue().click();
        this.dropdownOrderReceived().click();
        browser.sleep(18000);
        this.OrderidCheckBox().click();
        browser.sleep(8000);
        //action dropdwn to move to create delivery
        this.actionDropdwn().click();
        browser.sleep(8000);
        this.actionCreateDelivery().click();
        browser.sleep(8000);
        this.goBtn().click();
        browser.sleep(8000);

        //checking for ready for delivery
        this.dropdownQueue().click();
        browser.sleep(8000);
        this.dropdownReadyforDelivery().click();
        browser.sleep(8000);
        this.OrderidCheckBox().click();
        browser.sleep(8000);

        //action dropdwn to move to out for delivery
        this.actionDropdwn().click();
        browser.sleep(8000);
        this.actionOutforDelivery().click()
        browser.sleep(8000);
        this.goBtn().click();
        browser.sleep(8000);

        //checking for out for delivery
        this.dropdownQueue().click();
        browser.sleep(8000);
        this.dropdwnOutforDelivery().click();
        this.OrderidCheckBox().click();
        browser.sleep(8000);
        //action dropdwn to move to delivered
        this.actionDropdwn().click();
        browser.sleep(8000);
        this.actionMovetoDelivered().click();
        //browser.sleep(2000);
        //this.okBtn().click();
        // var EC = protractor.ExpectedConditions;
        // browser.wait(EC.alertIsPresent(), 10000, "Alert is not getting present :(")
        // let ale1: Alert = browser.switchTo().alert();
        // ale1.accept();

        this.goBtn().click();
        browser.sleep(8000);
        this.okBtn().click();
        browser.sleep(8000);
        //checking for out for delivery
        this.dropdownQueue().click();
        browser.sleep(8000);
         this.dropDwnDelivered().click();
       
    }
    orderDynamicProduct(){
    this.orderLnk().click();
    //checking for order in producing file queue
    this.dropdownQueue().click();
    browser.sleep(8000);
    this.dropdwnProducingfileinprogress().click();
    browser.sleep(8000);
    this.OrderidCheckBox().click();
    browser.sleep(8000);
    //move to produce file
    this.actionDropdwn().click();
    browser.sleep(8000);
    this.actionProducefile().click();
    browser.sleep(8000);
    this.goBtn().click();
    browser.sleep(8000);

    //checking for order in order received queue
    this.dropdownQueue().click();
    this.dropdownOrderReceived().click();
    browser.sleep(18000);
    this.OrderidCheckBox().click();
    browser.sleep(8000);
    //action dropdwn to move to create delivery
    this.actionDropdwn().click();
    browser.sleep(8000);
    this.actionCreateDelivery().click();
    browser.sleep(8000);
    this.goBtn().click();
    browser.sleep(8000);

    //checking for ready for delivery
    this.dropdownQueue().click();
    browser.sleep(8000);
    this.dropdownReadyforDelivery().click();
    browser.sleep(8000);
    this.fedExWithoutLabels().click();
    browser.sleep(8000);
    this.actionDropdwn().click();
    browser.sleep(8000);
    this.shipThroughFedExAction().click();
    this.OrderidCheckBox().click();
    browser.sleep(8000);
    this.getFedExLabelBtn().click();
    browser.sleep(15000);
    this.fedExServiceType().click();
    browser.sleep(5000);
    this.productDimension().click();
    browser.sleep(5000);
    this.generateFedExLabelBtn();
    browser.sleep(50000);
}
orderReceivedQueue(){
    this.orderLnk().click();

}

}

