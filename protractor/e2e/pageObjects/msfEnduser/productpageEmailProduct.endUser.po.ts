
import { browser, element, by, ExpectedConditions } from 'protractor';
import { logGenerator } from '../../../utils/logGenerator';
import { emailProductPage } from '../msfAdmin/emailProductPage.po';
import * as data from '../../../testdata/regression/testdataRegression.json';
var path = require('path');

export class orderEmailProduct {


    //EndUser page
    browseLink = () => element(by.xpath("//*[@id='header']/label/div[1]/span"));
    allProductsLink = () => element(by.xpath("//a[.='All Products']"));
    assignedCategory = () => element(by.xpath("//a[.='First Store Group']"));

    //AssignedStore 
    createdEmailProduct = (productName: string) => element(by.xpath("//b[.='" + productName + "']"));

    //Customization dropdown
    nextBtn = () => element(by.xpath("//button[@class='btn default-normal-button btn-small mx-3']"));

    //Scheduling dropdown
    calendarIcon = () => element(by.xpath("//span[@class='mydpicon icon-mydpcalendar']"));
    dateSelected = () => element(by.css("span[class='markcurrday']"));
    timeDropdown = () => element(by.css("select[id='Schedule e-mail sending time']"));
    timeSelected = () => element(by.xpath("//option[.='07:00 PM']"));
    addToCartBtn = () => element(by.xpath("//button[.='Add to Cart']"));

    //Cart page
    placeOrderBtn = () => element(by.xpath("//button[.='Place Order']"));

    searchProductAndPlaceOrder(productName: string) {
        this.browseLink().click();
        browser.sleep(5000);
        this.allProductsLink().click();
        browser.sleep(5000);
        this.createdEmailProduct(productName).click();
        browser.wait(ExpectedConditions.visibilityOf(this.addToCartBtn()));
        browser.sleep(80000);
        this.addToCartBtn().click();
        browser.sleep(18000);
        this.placeOrderBtn().click();
        browser.sleep(5000);



    }

    //Orderstatus page
    successMessage = () => element(by.xpath("//*[contains(text(),'Your order is successfully placed.')]"));

    //Regression
    //assignedStore = () => element(by.xpath("//a[.='First Store Group']"));
    firstStoreGroupSection = () => element(by.xpath("//*[@id='content-body']/products/div/div[2]/div/div[1]/h3"));
    specificProduct = () => element(by.xpath("//b[text()='" + emailProductPage.inputdata + "']"));
    filterAudience1 = () => element(by.xpath("//label[@for='fAudience1']"));
    filterAudience2 = () => element(by.xpath("//label[@for='fAudience2']"));
    filterType1 = () => element(by.xpath("(//label[@for='fType1'])[1]"));
    filterLanguage1 = () => element(by.xpath("(//label[@for='fLanguage1'])[1]"));
    imageAdor = () => element(by.xpath("//*[@id='Step 1']/div[1]/df-question/div/div/div/div/label"));
    profileDial = () => element(by.xpath("//label[.='Choose Your Personalization Profile']"));
    subjectDial = () => element(by.xpath("//label[.='Subject_Dial']"));


    emailProduct = () => element(by.xpath("//b[.='" + emailProductPage.inputdata + "']"));
    featuredProduct = () => element(by.xpath("//b[.='" + emailProductPage.inputdata + "']/../../../../../../../../../../..//preceding-sibling::div[1]/h3[.='Featured Products']"));
    featuredEmailProduct = () => element(by.xpath("//h3[.='Featured Products']/..//following-sibling::div[1]//following-sibling::p[1]/b[.='" + emailProductPage.inputdata + "']"));

    // receipient list
    addRecipientToggle = () => element(by.xpath("//*[@for='showRecipientList']"));
    expandRecipientListSection = () => element(by.xpath("//*[.='Recipient List']//following-sibling::i"));
    uploadYourRecipientList = () => element(by.xpath("//*[.='Upload your Recipient List']"));
    createRecipientListOnline = () => element(by.xpath("//*[.='Create your Recipient List online']"));
    UseExistingRecipientList = () => element(by.xpath("//*[.='Use an existing Recipient List']"));
    setRecipientListName = () => element(by.id('txtfilename'));
    nextButtonRecipientListName = () => element(by.xpath("//button[.='Next']"));
    mailingName = () => element(by.xpath("//input[@class='px-sm-1 px-2 form-control form-control-sm custom-form-control ng-untouched ng-pristine ng-valid' and @type='text']"));
    // mailingName = () => element(by.xpath("//input[@class='px-sm-1 px-2 form-control form-control-sm custom-form-control ng-untouched ng-pristine ng-valid ng-star-inserted' and @type='text']"));

    mailingAddress1 = () => element(by.xpath("(//input[@class='px-sm-1 px-2 form-control form-control-sm custom-form-control ng-untouched ng-pristine ng-valid' and @type='text'])[1]"));
    mailingAddress2 = () => element(by.xpath("(//input[@class='px-sm-1 px-2 form-control form-control-sm custom-form-control ng-untouched ng-pristine ng-valid' and @type='text'])[2]"));
    mailingCity = () => element(by.xpath("(//input[@class='px-sm-1 px-2 form-control form-control-sm custom-form-control ng-untouched ng-pristine ng-valid' and @type='text'])[1]"));
    mailingState = () => element(by.xpath("(//input[@class='px-sm-1 px-2 form-control form-control-sm custom-form-control ng-untouched ng-pristine ng-valid' and @type='text'])[1]"));
    mailingZip = () => element(by.xpath("(//input[@class='px-sm-1 px-2 form-control form-control-sm custom-form-control ng-untouched ng-pristine ng-valid' and @type='text'])[1]"));

    // mailingAddress1 = () => element(by.xpath("(//input[@class='px-sm-1 px-2 form-control form-control-sm custom-form-control ng-untouched ng-pristine ng-valid ng-star-inserted' and @type='text'])[1]"));
    // mailingAddress2 = () => element(by.xpath("(//input[@class='px-sm-1 px-2 form-control form-control-sm custom-form-control ng-untouched ng-pristine ng-valid ng-star-inserted' and @type='text'])[2]"));
    // mailingCity = () => element(by.xpath("(//input[@class='px-sm-1 px-2 form-control form-control-sm custom-form-control ng-untouched ng-pristine ng-valid ng-star-inserted' and @type='text'])[1]"));
    // mailingState = () => element(by.xpath("(//input[@class='px-sm-1 px-2 form-control form-control-sm custom-form-control ng-untouched ng-pristine ng-valid ng-star-inserted' and @type='text'])[1]"));
    // mailingZip = () => element(by.xpath("(//input[@class='px-sm-1 px-2 form-control form-control-sm custom-form-control ng-untouched ng-pristine ng-valid ng-star-inserted' and @type='text'])[1]"));
    saveButtonRecipientList = () => element(by.xpath("//*[@class='fa fa-floppy-o']"));
    nextButtonRecipientListSection = () => element(by.xpath("//*[@id='Recipient List']/div[2]/div/div/button"));
    recipientListSetupComplate = () => element(by.xpath("//*[@id='Recipient List']/div/div[1]/i"));

    //Profile Tool
    // profileToollink = () => element(by.xpath("//a[.='Profile Tool']"));
    // profileLink = () => element(by.xpath("//span[.='Use this to update your info on your rep page and myFirstAm']"));
    // singlePersonProfile = () => element(by.xpath("//*[@id='MainContent_ImageProfileCreateNew_singleperson']"));
    // firstName = () => element(by.xpath("//input[@class='ProfileInputFirstName']"));
    // lastName = () => element(by.xpath("//input[@class='ProfileInputLastName']"));
    // emailTxtbox = () => element(by.xpath("//input[@id='MainContent_RepeaterInputPerson1Emails_TextBoxInputPerson1EmailText_0']"));
    // saveProfile = () => element(by.xpath("//*[@id='MainContent_BtnSaveProfile']"));
    orderLnk = () => element(by.css("a[id='Orders']"));
    selectDropdown = () => element(by.css("select[id='ddlOrdersQueue']"));
    scheduledEmail = () => element(by.xpath("//option[contains(text(),'Scheduled Email ')]"));
    dropdwnOrderidCheckBox = () => element(by.xpath("//*[@id='datatable-buttons']/div[2]/div/div[2]/div/div[1]/div/div/div/div/div"));
    actionDropdwn = () => element(by.id('ddl_listOfOrderActions'));
    actionSendNow = () => element(by.xpath("//option[.='Send Now']"));
    actionProducefile = () => element(by.xpath("//option[.='Produce File']"));
    goBtn = () => element(by.id('btn_orderActionSave'));
    sendNOw = () => element(by.xpath("//*[@id='undefined']/div/df-question/div/div/div/div/div/div[4]/div[1]/input"));
    firstName = () => element(by.xpath("//*[@id='Recipient List']/div[2]/div/recipientlist/recipientgrid/div/div/div/form/div[2]/table/tbody/tr/td[3]/input"));
    lastName = () => element(by.xpath("//*[@id='Recipient List']/div[2]/div/recipientlist/recipientgrid/div/div/div/form/div[2]/table/tbody/tr/td[4]/input"));

    email = () => element(by.xpath("//*[@id='Recipient List']/div[2]/div/recipientlist/recipientgrid/div/div/div/form/div[2]/table/tbody/tr/td[5]/input"));
    phone = () => element(by.xpath("//*[@id='Recipient List']/div[2]/div/recipientlist/recipientgrid/div/div/div/form/div[2]/table/tbody/tr/td[6]/input"));
    company = () => element(by.xpath("//*[@id='Recipient List']/div[2]/div/recipientlist/recipientgrid/div/div/div/form/div[2]/table/tbody/tr/td[7]/input"));
    adress = () => element(by.xpath("//*[@id='Recipient List']/div[2]/div/recipientlist/recipientgrid/div/div/div/form/div[2]/table/tbody/tr/td[8]/input"));
    city = () => element(by.xpath("//*[@id='Recipient List']/div[2]/div/recipientlist/recipientgrid/div/div/div/form/div[2]/table/tbody/tr/td[9]/input"));
    state = () => element(by.xpath("//*[@id='Recipient List']/div[2]/div/recipientlist/recipientgrid/div/div/div/form/div[2]/table/tbody/tr/td[10]/input"));
    zip = () => element(by.xpath("//*[@id='Recipient List']/div[2]/div/recipientlist/recipientgrid/div/div/div/form/div[2]/table/tbody/tr/td[11]/input"));

    schedulingEmail() {
        this.sendNOw().click();
        this.addToCartBtn().click();
        browser.sleep(30000);
        logGenerator.log().info("Clicked on add to cart button");
    }


    checkOrderQueueForEmailProductInAdmin() {
        this.orderLnk().click();
        //checking for order in producing file queue
        this.selectDropdown().click();
        browser.sleep(8000);
        this.scheduledEmail().click();
        browser.sleep(8000);
        this.dropdwnOrderidCheckBox().click();
        browser.sleep(8000);
        //move to produce file
        this.actionDropdwn().click();
        this.actionSendNow().click();
        this.goBtn().click();
        browser.sleep(8000);

        this.selectDropdown().click();


    }
    /**
     *Ordering email product in EndUser
     */
    goToProductsPage(productName: string) {

        this.browseLink().click();
        browser.sleep(30000);
        logGenerator.log().info("Clicked on  browselink");
        this.assignedCategory().click();
        browser.sleep(30000);
        logGenerator.log().info("AllProducts page is displayed");
        this.createdEmailProduct(productName).click();
        browser.sleep(5000);
    }


    selectEmailProduct() {
        this.specificProduct().click();
        logGenerator.log().info("Clicked on email product created");


    }
    customization() {
        browser.wait(ExpectedConditions.visibilityOf(this.nextBtn()));
        browser.sleep(7000);

    }
    next() {
        this.nextBtn().click();
        browser.sleep(3000);
        logGenerator.log().info("Clicked on nextBtn");
    }

    scheduling() {
        this.calendarIcon().click();
        logGenerator.log().info("clicked on the calendar icon");
        this.dateSelected().click();
        logGenerator.log().info("selected the date");
        this.timeDropdown().click();
        logGenerator.log().info("clicked on the time dropdown ");
        this.timeSelected().click();
        logGenerator.log().info("selected the time ");
        this.addToCartBtn().click();
        browser.sleep(30000);
        logGenerator.log().info("Clicked on add to cart button");
    }

    placingOrderEmailProduct() {
        this.placeOrderBtn().click();
        browser.sleep(30000);
        logGenerator.log().info("Clicked on place order button");
        browser.wait(ExpectedConditions.visibilityOf(this.successMessage()));
        browser.sleep(15000);
    }

    selectingFilters() {
        this.filterAudience1().click();
        logGenerator.log().info("Selected buyer checkbox in filteraudience");
        browser.sleep(5000);
        this.filterAudience2().click();
        browser.sleep(5000);
        logGenerator.log().info("Selected seller checkbox in filteraudience");
        this.filterType1().click();
        browser.sleep(5000);
        logGenerator.log().info("Selected postcard checkbox in filteraudience");
        this.filterLanguage1().click();
        browser.sleep(5000);
        logGenerator.log().info("Selected All-Non English checkbox in filteraudience");
    }
    //settingprofileTool() {
    //     this.profileToollink().click();
    //     logGenerator.log().info("Clicked on Profile tool link");
    //     this.profileLink().click();
    //     logGenerator.log().info("Clicked on Profile tool link");
    //     this.singlePersonProfile().click();
    //     logGenerator.log().info("Selected SinglePersonProfile ");
    //     this.firstName().sendKeys("Soumya");
    //     logGenerator.log().info("Data given to Firstname textfield");
    //     this.lastName().sendKeys("C");
    //     logGenerator.log().info("Data given to Lastname textfield");
    //     this.emailTxtbox().sendKeys("ssoumyac@firstam.com");
    //     logGenerator.log().info("Data given to Emailtextbox textfield");
    //     this.saveProfile().click();
    //     logGenerator.log().info("Clicked on SaveProfile button");
    // }
    productsPage() {

        this.browseLink().click();
        browser.sleep(30000);
        logGenerator.log().info("Clicked on  browselink");
        this.assignedCategory().click();
        browser.sleep(30000);
        logGenerator.log().info("AllProducts page is displayed");

    }
     /**
   * Verify Recipient List Section
   */
  verifyRecipientListsection() {
    //this.addRecipientToggle().click();
    this.expandRecipientListSection().click();
    browser.wait(ExpectedConditions.visibilityOf(this.createRecipientListOnline()));
    let uploadList = this.uploadYourRecipientList().isDisplayed();
    expect<any>(uploadList).toBe(true);
    let createList = this.createRecipientListOnline().isDisplayed();
    expect<any>(createList).toBe(true);
    let existingList = this.UseExistingRecipientList().isDisplayed();
    expect<any>(existingList).toBe(true);
    this.createRecipientListOnline().click();
    this.setRecipientListName().sendKeys(data.createRecipientListonline.listName);
    this.nextButtonRecipientListName().click();
    browser.sleep(10000);
    this.mailingName().sendKeys(data.createRecipientListonline.mailingName);
    browser.sleep(2000);
    this.mailingAddress1().sendKeys(data.createRecipientListonline.mailingAddress1);
    browser.sleep(2000);
    this.mailingAddress2().sendKeys(data.createRecipientListonline.mailingAddress2);
    browser.sleep(2000);
    this.mailingCity().sendKeys(data.createRecipientListonline.mailingCity);
    browser.sleep(2000);
    this.mailingState().sendKeys(data.createRecipientListonline.mailingState);
    browser.sleep(2000);
    this.mailingZip().sendKeys(data.createRecipientListonline.mailingZip);
    browser.sleep(2000);
    this.saveButtonRecipientList().click()
    browser.sleep(2000);
    this.nextButtonRecipientListSection().click();
    let recipientListSet = this.recipientListSetupComplate().getAttribute('aria-hidden');
    expect<any>(recipientListSet).toEqual('true');

  }
    /**
  * Verify Recipient List Section
  */
    verifyRecipientListsection() {
        //this.addRecipientToggle().click();
        this.expandRecipientListSection().click();
        browser.wait(ExpectedConditions.visibilityOf(this.createRecipientListOnline()));
        let uploadList = this.uploadYourRecipientList().isDisplayed();
        expect(uploadList).toBe(true);
        let createList = this.createRecipientListOnline().isDisplayed();
        expect(createList).toBe(true);
        let existingList = this.UseExistingRecipientList().isDisplayed();
        expect(existingList).toBe(true);
        this.createRecipientListOnline().click();
        browser.sleep(8000);
        this.setRecipientListName().sendKeys(data.createRecipientListonline.listName);
        browser.sleep(15000);
        this.nextButtonRecipientListName().click();
        browser.sleep(10000);
        this.firstName().sendKeys(data.createRecipientListonlineEmail.firstName);
        browser.sleep(2000);
        this.lastName().sendKeys(data.createRecipientListonlineEmail.lastName);
        browser.sleep(2000);
        this.email().sendKeys(data.createRecipientListonlineEmail.email);
        browser.sleep(2000);
        this.phone().sendKeys(data.createRecipientListonlineEmail.phone);
        browser.sleep(2000);
        // this.company().sendKeys(data.createRecipientListonlineEmail.company);
        browser.sleep(2000);
        // this.adress().sendKeys(data.createRecipientListonlineEmail.address);
        browser.sleep(2000);
        // this.city().sendKeys(data.createRecipientListonlineEmail.city);
        browser.sleep(2000);
        // this.state().sendKeys(data.createRecipientListonlineEmail.state);
        browser.sleep(2000);
        //this.zip().sendKeys(data.createRecipientListonlineEmail.zip);
        browser.sleep(2000);
        this.saveButtonRecipientList().click()
        browser.sleep(2000);
        this.nextButtonRecipientListSection().click();
        let recipientListSet = this.recipientListSetupComplate().getAttribute('aria-hidden');
        expect<any>(recipientListSet).toEqual('true');

    }



}







