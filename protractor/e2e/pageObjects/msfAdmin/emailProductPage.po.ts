import { browser, element, by, By, $, $$, ExpectedConditions, logging, protractor, Key, WebDriver } from 'protractor';
import { logGenerator } from '../../../utils/logGenerator';
import * as data from '../../../testdata/sanitytestdata/testdata.json';
var path = require('path');
const timestamp = Date.now();
export class emailProductPage {
    public static inputdata = data.emailProduct.productName + timestamp;

    //Products tab
    productsTab = () => element(by.xpath("//a[@id='Products']"));
    createTab = () => element(by.id("createProduct"));

    //General tab
    productTypeTxtbox = () => element(by.xpath("//select[@name='productType']")).element(by.xpath("//option[.='Email']"));
    productNameTxtbox = () => element(by.id("ProductName"));

    //Email Template tab
    emailTemplate = () => element(by.xpath("//a[.='Email Template']"));
    selectAccountDropdown = () => element(by.xpath("//select[@name='selectAccount']")).element(by.xpath("//option[.='FAINTERNAL']"));
    selectCampaignDropdown = () => element(by.xpath("//select[@id='selectCampaign']")).element(by.xpath("//option[@label='Centerpoint-Standard']"));
    selectEmailActivityDropdown = () => element(by.xpath("//select[@id='selectEmailTemplate']"));
    chooseFileBtn = () => element(by.id("file_input_id1"));
    saveBtn1 = () => element(by.xpath("(//button[@type='button'])[8]"));

    //Stores tab
    stores = () => element(by.xpath("//a[@data-target='#tab10']"));
    storeCheckbox = () => element(by.xpath("//label[contains(text(),'TestStore_9')]/following-sibling::ul//input[@type='checkbox']"));
    saveBtn2 = () => element(by.xpath("//button[@id='btnSaveProduct10' and @class='btn btn-success']"));

    //Regression
    productsTab1 = () => element(by.xpath("//a[@id='Products']"));
    emailProduct = () => element(by.xpath("//a[contains(text(),'" + emailProductPage.inputdata + "')]"));
    statusButton1 = () => element(by.xpath("(//a[@id='productStatus'])[1]"));

    //Configuration tab
    configuration = () => element(by.xpath("//*[@id='mytabs']/li[8]/a"));
    customizationWizard = () => element(by.id("customizationWizard"));
    miscDial = () => element(by.xpath("(//td[@align='center'])[9]"));
    dialName = () => element(by.xpath("//a[.='Misc11']"));
    inputControlValidationTab = () => element(by.xpath("//a[.='Input Control & Validation']"));
    allowAssetSelectionToggle = () => element(by.xpath("//label[@for='chkAssetSelection']"));
    selectAssetSourceDropdown = () => element(by.id("ddlAssetSource"));
    assetSource = () => element(by.xpath("//option[@label='birthday_email']"));
    defaultAssetDropdown = () => element(by.id("ddlAsset"));
    defaultAsset = () => element(by.xpath("//option[.='gift_box_111517']"));
    submitBtn = () => element(by.xpath("(//button[@type='submit'])[2]"));
    backBtn = () => element(by.id("BackFromCustomizationWizard"));
    saveBtn3 = () => element(by.xpath("//*[@id='btnSaveProduct12']"));
    submitCloseBtn = () => element(by.id("send12"));

    //Products list
    searchTxtbox = () => element(by.xpath("//*[@id='filterSearch']"));
    getCreatedProduct = () => element(by.xpath("//td[@data-title='Name']/a"));
    makeEmailProductOnline = () => element(by.xpath("//a[contains(text(),'" + emailProductPage.inputdata + "')]/preceding::td[2]/a/i"));
    emailProductOnlineStatus = () => element(by.xpath('//*[@id="productStatus"]'));

    //Regression
    filters = () => element(by.xpath("//a[.='Filters']"));
    filterAudienceCheckbox1 = () => element(by.xpath("//input[@ng-checked='filterAudienceSelectedIDs.indexOf(f.filterAudienceID) > -1' and @id='1']"));
    filterAudienceCheckbox2 = () => element(by.xpath("//input[@ng-checked='filterAudienceSelectedIDs.indexOf(f.filterAudienceID) > -1' and @id='2']"));
    filterTypeCheckbox1 = () => element(by.xpath("//input[@ng-checked='filterTypeSelectedIDs.indexOf(f.filterTypeID) > -1' and @id='1']"));
    filterLanguageCheckbox1 = () => element(by.xpath("//input[@ng-checked='filterLanguageSelectedIDs.indexOf(f.filterLanguageID) > -1' and @id='1']"));
    saveBtn4 = () => element(by.xpath("//button[@id='btnSaveProduct11']"));
    assignedGroupsTab = () => element(by.xpath("//a[.='Assigned User Groups']"));
    emailProductStatus = () => element(by.xpath("//a[text()='" + emailProductPage.inputdata + "']/..//preceding-sibling::td[2]"));
    //Regression for adors
    commonAdorCustomize = () => element(by.xpath("//td[@id='Common ador']//following-sibling::td[2]/following-sibling::td[5]"));
    imageAdor = () => element(by.xpath("//*[@id='AddAdor535593']"));
    selectVariables = () => element(by.xpath("//*[@id='SelectAdorType']"));
    profileDial = () => element(by.xpath("//td[.='ProfileID_Dial']/..//following-sibling::td[3]"));
    subjectDial = () => element(by.xpath("//td[.='Subject_Dial']/..//following-sibling::td[3]"));
    imageAdorStatus = () => element(by.xpath("//*[@id='Misc11']//following-sibling::td[3]/div[2]/i[1]"));
    profileDialStatus = () => element(by.xpath("//a[.='ProfileID_Dial']/..//following-sibling::td[3]/div[3]/i"));
    subjectDialStatus = () => element(by.xpath("//a[.='Subject_Dial']/..//following-sibling::td[3]/div[1]"));
    imageDial = () => element(by.xpath("//td[@id='Misc11']"));
    profileIDDial = () => element(by.xpath("//td[@id='ProfileID_Dial']"));
    subject_Dial = () => element(by.xpath("//td[@id='Subject_Dial']"));
    nxtBtn = () => element(by.xpath("//*[@id='btnnext1']"));
    submitButton = () => element(by.xpath("//button[@type='submit' and @id='btnSaveDialDetails']"));
    featuredProduct = () => element(by.xpath("//input[@id='featureddproduct']/..//span[1]"));
    useRecipientList = () => element(by.xpath("//input[@id='UseRecipientList']/..//span[1]"));
    // recipientSetup = () => element(by.xpath("//a[@id='recipientSetup']"));
    uploadRecipient = () => element(by.xpath("//label[@id='lbluploadrecipientlist']"));
    createyourRecipientListOnline = () => element(by.xpath("//label[@id='lblrecipientlistonline']"));
    useExistingRecipientList = () => element(by.xpath("//label[@id='lblExistingRecipientList']"));
    useSalesforceCampaign = () => element(by.xpath("//label[@id='lblSalesforceRecipientList']"));
    propertySetup = () => element(by.xpath("//a[@id='productPropertiesSetup']"));
    scheduleEmail = () => element(by.xpath("//a[.='Schedule e-mail sending time']"));
    createdEmailProd = () => element(by.xpath("//a[.='" + emailProductPage.inputdata + "']"));
    saveBtn = () => element(by.xpath("//*[@id='btnSaveProduct5']"));
    submitandClose = () => element(by.xpath("//*[@id='tab5']/div[13]/div[2]/button[3]"));
    submitClose1 = () => element(by.xpath("//*[@id='send11']"));

    // Recipient Setup
    recipientSetupLink = () => element(by.xpath("//*[@id='recipientSetup']"));
    createYourRecipientToggle = () => element(by.xpath("//input[@id='cbrecipientlistonline']/following-sibling::span"));
    uploadyourRecipientListToggle = () => element(by.xpath("//input[@id='cbuploadrecipientlist']/following-sibling::span"));
    useExistingRecipientListToggle = () => element(by.xpath("//input[@id='cbExistingRecipientList']/following-sibling::span"));
    submitRecipientBtn = () => element(by.xpath("//*[@id='btnsubmitrecipient']"));



    /**
     * Create Email product in Admin and making the product online
     */
    creatingEmailProductinAdmin(productName: string) {

        this.productsTab().click();
        logGenerator.log().info("Clicked on Products tab");
        browser.sleep(2000);
        this.createTab().click();
        logGenerator.log().info("Clicked on Create button");
        this.productTypeTxtbox().click();
        logGenerator.log().info("Selected product type as Email");
        this.productNameTxtbox().sendKeys(productName);
        logGenerator.log().info("Data given to productname");
        browser.sleep(5000);
        browser.sleep(5000);
        this.emailTemplate().click();
        logGenerator.log().info("Clicked on email Template Tab");
        this.selectAccountDropdown().click();
        logGenerator.log().info("Selected option from select Account dropdown");
        browser.sleep(2000);
        this.selectCampaignDropdown().click();
        logGenerator.log().info("Selected option from select Campaign dropdown");
        browser.sleep(2000);
        this.selectEmailActivityDropdown().sendKeys("Valentines Open House");
        logGenerator.log().info("Selected option from select EmailActivity dropdown");
        browser.sleep(2000);
        var fileToUpload1 = './../../../testdata/sanitytestdata/emailProductImage.jpg',
        absolutePath1 = path.resolve(__dirname, fileToUpload1);
        logGenerator.log().info(" absolutePath : " + absolutePath1);
        this.chooseFileBtn().sendKeys(absolutePath1);
        logGenerator.log().info(" Uploaded image");
        this.saveBtn1().click();
        logGenerator.log().info("Clicked on save Button ");
    }
    /**
     * Assigning Product to Store
     */
    assignStoreToTheProduct() {
        this.stores().click();
        logGenerator.log().info("Clicked on stores tab");
        browser.sleep(50000);
        this.storeCheckbox().click();
        logGenerator.log().info("Selected the Created store");
        this.saveBtn2().click();
        logGenerator.log().info("Clicked on save Button ");
        browser.sleep(2000);
    }

    /** 
     * Selecting the created email product
     * */
    gotoProductsTab() {
        this.productsTab1().click();
        logGenerator.log().info("Clicked on Products tab");
        this.emailProduct().click();
        logGenerator.log().info("Selected Email Product");
    }
    /**
     * Navigating to Email template tab
     */

    emailTemplateTab() {
        this.emailTemplate().click();
        logGenerator.log().info("Clicked on email Template Tab");
    }
    /**
    * Navigating to Stores tab
    */
    storesTab() {
        this.stores().click();
        logGenerator.log().info("Clicked on stores tab");
    }
    /**
    * Navigating to Filters tab
    */
    filtersTab() {
        this.filters().click();
        logGenerator.log().info("Clicked on Filters tab");
    }
    /**
    * Navigating to Configuration tab
    */
    configurationTab() {
        this.configuration().click();
        logGenerator.log().info("Clicked on configuration Tab");
        browser.sleep(2000);
    }
    /**
    * Navigating to Assigned User Groups Tab
    */
    assignedUsersGroupTab() {
        this.assignedGroupsTab().click();
        logGenerator.log().info("Clicked on AssignedUsersGroupTab");
    }
    /**
    * Making the email product status online
    */
    makingStatusOnline() {
        browser.sleep(80000);
        this.statusButton1().click();
        logGenerator.log().info("Making the product online");
        browser.sleep(80000);
    }
    /**
    * Making the email product status offline
    */

    makingStatusOffline() {
        this.statusButton1().click();
        logGenerator.log().info("Making the product offline");
    }
    /**
     * Adding filters to email product
     */
    addingFiltersToProduct() {
        browser.sleep(100000);
        this.filters().click();
        logGenerator.log().info("Clicked on Filters tab");
        browser.sleep(5000);
        this.filterAudienceCheckbox1().click();
        logGenerator.log().info("Selected the first filteraudience checkbox");
        browser.sleep(5000);
        this.filterAudienceCheckbox2().click();
        logGenerator.log().info("Selected the second filteraudience checkbox");
        browser.sleep(5000);
        this.filterTypeCheckbox1().click();
        logGenerator.log().info("Selected the first filtertype checkbox");
        browser.sleep(5000);
        this.filterLanguageCheckbox1().click();
        logGenerator.log().info("Selected the first filterlanguage checkbox");
        browser.sleep(5000);
        this.saveBtn4().click();
        logGenerator.log().info("Clicked on save button");
        browser.sleep(5000);
        this.submitClose1().click();
        logGenerator.log().info("Clicked on save and submit button");
        browser.sleep(5000);
    }
   
    /**
    * Navigating to Customization wizard 
    */
    setupCustomizationWizard() {
        this.customizationWizard().click();
        logGenerator.log().info("Clicked on customization Wizard ");
        this.miscDial().click();
        logGenerator.log().info("Clicked on misc11");
        this.dialName().click();
        logGenerator.log().info("Clicked on Dial");
        this.inputControlValidationTab().click();
        logGenerator.log().info("Clicked on input Control Validation Tab");
        this.allowAssetSelectionToggle().click();
        logGenerator.log().info("Clicked on toggle");
        this.selectAssetSourceDropdown().click();
        logGenerator.log().info("Clicked on dropdown");
        this.assetSource().click();
        logGenerator.log().info("Clicked on asset source");
        this.defaultAssetDropdown().click();
        logGenerator.log().info("Clicked on default Asset Dropdown");
        this.defaultAsset().click();
        logGenerator.log().info("Clicked on default Assset");
        browser.sleep(20000);
        this.submitBtn().click();
        logGenerator.log().info("Clicked on submit button");
        this.backBtn().click();
        logGenerator.log().info("Clicked on back button");
    }
    // recipientList() {
    //     this.recipientSetup().click();
    //     logGenerator.log().info("Clicked on Recipient Setup");
    //     browser.sleep(50000);
    // }
    /**
    * Navigating to Product property setup
    */
    productPropertySetup() {
        this.propertySetup().click();
        logGenerator.log().info("Clicked on Property Setup");
    }
    /**
     *Save & Submitting the created email product  
     */
    saveAndSubmitEmailProduct() {
        this.saveBtn3().click();
        logGenerator.log().info("Clicked on save button");
        this.submitCloseBtn().click();
        logGenerator.log().info("Clicked on submit Close button");
    }
    /**
     * Making the created email product online
     */
    makeProductOnlineEmailProduct(productName: string) {
        this.searchTxtbox().sendKeys(productName);
        logGenerator.log().info("Data given to search textbox");
        browser.sleep(8000);
        this.emailProductStatus().click();

    }
    /**
    * Verifying Toast Messages for Online 
    */
    verifyToastMesssagesforOnline() {
        if (this.statusButton1().isPresent()) {
            let message = this.statusButton1().getText();
            expect(this.statusButton1().isPresent()).toBe(true, message);

        }
    }
    /**
    *Verifying Toast Messages for Offline 
    */

    verifyToastMesssagesforOffline() {
        if (this.statusButton1().isPresent()) {
            let message = this.statusButton1().getText();
            expect(this.statusButton1().isPresent()).toBe(true, message);
        }

    }
    /**
     * Selecting Profile Dial, Image Ador, Subject Dial
     */
    adorsAndVariables() {
        this.customizationWizard().click();
        logGenerator.log().info("Clicked on customization Wizard ");
        browser.sleep(10000);
        this.imageAdor().click();
        logGenerator.log().info("Selected on image ador");
        browser.sleep(2000);
        this.selectVariables().sendKeys("Variables");
        logGenerator.log().info("Clicked on Available Dials");
        browser.sleep(2000);
        this.profileDial().click();
        logGenerator.log().info("Selected Profile Dial");
        browser.sleep(2000);
        this.subjectDial().click();
        logGenerator.log().info("Selected Subject Dial");
        browser.sleep(2000);
        this.imageDial().click();
        logGenerator.log().info("Clicked on image dial");
        this.inputControlValidationTab().click();
        logGenerator.log().info("Clicked on input Control Validation Tab");
        this.allowAssetSelectionToggle().click();
        logGenerator.log().info("Clicked on toggle");
        this.selectAssetSourceDropdown().click();
        logGenerator.log().info("Clicked on dropdown");
        this.assetSource().click();
        logGenerator.log().info("Clicked on asset source");
        this.defaultAssetDropdown().click();
        logGenerator.log().info("Clicked on default Asset Dropdown");
        this.defaultAsset().click();
        logGenerator.log().info("Clicked on default Assset");
        browser.sleep(20000);
        this.submitBtn().click();
        logGenerator.log().info("Clicked on submit button");
        browser.sleep(50000);
        this.subject_Dial().click();
        logGenerator.log().info("Clicked on subject_Dial dial");
        browser.sleep(50000);
        this.submitButton().click();
        logGenerator.log().info("Clicked on submit button");
        this.backBtn().click();
        logGenerator.log().info("Clicked on back button");


    }
    /**
     * Selecting the Featured Product toggle for created EmailProduct
     */
    featuredProductToggle() {

        this.productsTab().click();
        logGenerator.log().info("Clicked on Products tab");
        browser.sleep(2000);
        this.createdEmailProd().click();
        logGenerator.log().info("Clicked on Created Email product ");
        browser.sleep(5000);
        this.featuredProduct().click();
        logGenerator.log().info("Clicked on FeaturedProduct toggle");
        browser.sleep(5000);

    }
    /**
     * Selecting the Use Recipient List toggle for created EmailProduct
     */
    recipientListToggle() {

        this.productsTab().click();
        logGenerator.log().info("Clicked on Products tab");
        browser.sleep(20000);
        this.createdEmailProd().click();
        logGenerator.log().info("Clicked on Created Email product ");
        browser.sleep(5000);
        this.emailTemplate().click();
        logGenerator.log().info("Clicked on email Template Tab");
        this.useRecipientList().click();
        logGenerator.log().info("Clicked on Use Recipient List toggle");
        this.saveBtn().click();
        logGenerator.log().info("Clicked on save Button ");
    }
    /**
    * Selecting the created email product
    */
    createdEmailProduct() {
        this.productsTab().click();
        logGenerator.log().info("Clicked on Products tab");
        browser.sleep(20000);
        this.createdEmailProd().click();
        logGenerator.log().info("Clicked on Created Email product ");
        browser.sleep(5000);
    }
    /**
     * Changing the status of Email product into offline 
     */
    makeProductOfflineEmailProduct(productName: string) {
        this.searchTxtbox().sendKeys(productName);
        logGenerator.log().info("Data given to search textbox");
        browser.sleep(50000);
        this.emailProductStatus().click();
        browser.sleep(5000);

    }
    /**
    * Searching the created email product
    */
    searchforCreatedEmailProduct(productName: string) {
        this.searchTxtbox().sendKeys(productName);
        logGenerator.log().info("Data given to search textbox");
        browser.sleep(5000);


    }
    /**
     *  Recipient Setup for Dynamic Product 
     */
    recipientSetup() {
        this.recipientSetupLink().click();
        this.uploadyourRecipientListToggle().click();
        this.createYourRecipientToggle().click();
        this.useExistingRecipientListToggle().click();
        this.submitRecipientBtn().click();
        logGenerator.log().info(" Recipient Setup Submitted");
    }

}












