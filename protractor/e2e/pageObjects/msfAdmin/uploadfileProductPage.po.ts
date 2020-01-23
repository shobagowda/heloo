import { browser, element, by, By, $, $$, ExpectedConditions, logging, protractor, Key, WebDriver } from 'protractor';
import * as data from '../../../testdata/sanitytestdata/testdata.json';
import { logGenerator } from '../../../utils/logGenerator';
var path = require('path');
const timestamp = Date.now();

export class uploadFileProductPage {
    public static inputdata = data.uploadFileProduct.productName + timestamp;
    // General Tab on create product 
    productlink = () => element(by.css('#Products'));
    createProductLink = () => element(by.id('createProduct'));
    productType = () => element(by.model('newProduct.productTypeID'));
    prodName = () => element(by.id('ProductName'));
    prodSize = () => element(by.id('productSize'));
    btnNext = () => element(by.id('next1'));

    // Document Tab
    upload = () => element(by.id('file_input_id1'));
    saveDocumentTab = () => element(by.id('btnSaveProduct3'));
    btnNextDocumentTab = () => element(by.id('next3'));


    // Stores tab
    expandallBtn = () => element(by.xpath("//span[contains(text(),'Expand All')]"));

    assignCategoryCheckbox = () => element(by.xpath("//label[contains(text(),'TestStore_9')]/following-sibling::ul//input[@type='checkbox']"));
    saveBtn = () => element(by.id('btnSaveProduct10'));
    sumbitCloseBtn = () => element(by.id("btnCreateProduct10"));

    //Configuration Tab 

    configurationTab = () => element(by.xpath("//a[@data-target='#tab12']"));
    productPropertiesSetupLink = () => element(by.id('productPropertiesSetup'));

    // create property 
    createPropertyBtn = () => element(by.id('createProperty'));
    displayNameProperty = () => element(by.id('propertyName'));
    nextBtnPropertyDetails = () => element(by.id('next1'));
    inputControlDrop = () => element(by.name('InputControl'));
    addValueList = () => element(by.xpath("//i[@class='table-add fa fa-plus' and @ng-click='addNewOption(validModel.propertiesOptionVM)']"));
    textInput = () => element(by.id('txtoptionText'));
    defaultCheckbox = () => element(by.xpath("//input[@ng-click='IsSingleOptionChecked(option)']"));
    submitValue = () => element(by.xpath("//a[@ng-click='validModel.isMandatoryProperty || SaveValue($index)']"));
    submitBtn = () => element(by.id('inputControlValidationBtn'));
    backBtn = () => element(by.id('cancel'));

    // Delivery options 
    saveBtnValueList = () => element(by.id('btnSaveProduct12'));
    deliveryOptionsLink = () => element(by.id('deliverySetup'));
    officePickup = () => element(by.xpath("//*[@id='tab1']/div[4]/div/div/label/span"));
    submitDeliveryOption = () => element(by.xpath("//button[@ng-click='saveDeliveryOptions()']"));
    //save again btnSaveProduct12
    submitCloseBtn = () => element(by.id('send12'));

    // Search product 
    searchProduct = () => element(by.id('filterSearch'));
    makeProductOnline = () => element(by.xpath("//a[contains(text(),'" + uploadFileProductPage.inputdata + "')]/preceding::td[2]/a/i"));
    makeProductOnlineStatus = () => element(by.xpath('//*[@id="productStatus"]'));
    // regression 

    checkboxProduct = (productName: string) => element(by.xpath("//a[text()='" + productName + "']//preceding::td[3]/input"));
    copyproductbutton = () => element(by.xpath("//*[@id='copyProducts']"));
    copiedProductlink = (productName: string) => element(by.id("Copy [1] " + productName));
    basePropertyLink = () => element(by.xpath("//a[text()='Base']"));
    papersizePropertyLink = () => element(by.xpath("//a[text()='Paper size']"));
     
    /**
     * Create a uploadfile product and make it online
     */
    createUploadFileProduct(productType: string, productName: string, productSize: string) {
        logGenerator.log().info(" User Creating a upload file");
        this.productlink().click();
        logGenerator.log().info(" Clicked on Products link ");
        this.createProductLink().click();
        logGenerator.log().info(" Clicked on Create Product link");
        this.productType().sendKeys(productType);
        logGenerator.log().info(" Selected product type dropdown");
        this.prodName().sendKeys(productName);
        // this.prodName().sendKeys(uploadFileProductPage.inputdata);
        logGenerator.log().info(" Entered product name ");
        this.prodSize().sendKeys(productSize);
        //  this.prodSize().sendKeys(data.productsize);
        logGenerator.log().info(" Entered product size ");
        this.btnNext().click();
        browser.sleep(5000);
        var fileToUpload1 = './../../../testdata/sanitytestdata/uploadfileProduct.jpeg',
            absolutePath1 = path.resolve(__dirname, fileToUpload1);
        logGenerator.log().info(" absolutePath : " + absolutePath1);
        this.upload().sendKeys(absolutePath1);
        logGenerator.log().info(" Choosing product thumbnail image");
        this.saveDocumentTab().click();
        browser.sleep(2000);
        this.btnNextDocumentTab().click();
    }
    assignStoreToTheProduct() {
        this.expandallBtn().click();
        browser.sleep(2000);
        this.assignCategoryCheckbox().click();
        browser.sleep(2000);
        logGenerator.log().info(" Assigned store and category");
        this.saveBtn().click();
        browser.sleep(8000);
    }

    gotoConfiguration() {
        this.configurationTab().click();
        logGenerator.log().info(" Navigated to configuration tab");
    }
    setupProductProperties() {
        this.productPropertiesSetupLink().click();
        logGenerator.log().info(" Clicked on product Properties Set up link ");
        this.createPropertyBtn().click();
        logGenerator.log().info(" Clicked on create property button ");
        this.displayNameProperty().sendKeys(data.uploadFileProduct.displayNameProperty);
        logGenerator.log().info(" Entered displayname property as : " + data.uploadFileProduct.displayNameProperty);
        browser.sleep(5000);
        this.nextBtnPropertyDetails().click();
        logGenerator.log().info(" Navigated to Input Control & Validation tab");
        this.inputControlDrop().sendKeys(data.uploadFileProduct.inputControl);
        logGenerator.log().info(" Selected input control dropdown as: " + data.uploadFileProduct.inputControl);
        this.addValueList().click();
        this.textInput().sendKeys(data.uploadFileProduct.textValuelist);
        logGenerator.log().info(" Entered input for text field for Value list : " + data.uploadFileProduct.textValuelist);
        this.defaultCheckbox().click();
        logGenerator.log().info(" Selected default checkbox");
        this.submitValue().click();
        this.submitBtn().click();
        this.backBtn().click();
        logGenerator.log().info(" Navigated back to Configuration tab ");
        this.saveBtnValueList().click();
    }
    setupDeliveryoptions() {
        this.deliveryOptionsLink().click();
        logGenerator.log().info(" Clicked on Delivery options set up link ");
        this.officePickup().click();
        logGenerator.log().info(" Selected Office pick up ");
        this.submitDeliveryOption().click();
    }
    SaveAndSubmitUplodfileProduct() {
        this.saveBtnValueList().click();
        this.submitCloseBtn().click();
    }
    makeProductOnlineUploadFile(productName: string) {
        this.searchProduct().sendKeys(productName);
        logGenerator.log().info(" Searched for Created product ");
        this.makeProductOnline().click();
        logGenerator.log().info(" Product status changed to online");

    }

    searchProductUploadFileType(productName: string) {

        browser.sleep(5000);
        this.searchProduct().sendKeys(productName);
    }

    copyProduct(productName: string) {
        browser.sleep(10000);
        this.checkboxProduct(productName).click();
        browser.sleep(10000);
        this.copyproductbutton().click();
        // click on copied product 
        this.copiedProductlink(productName).click();

    }

    verifyProductProperties() {
        this.productPropertiesSetupLink().click();
        logGenerator.log().info(" Clicked on product Properties Set up link ");
        browser.wait(ExpectedConditions.visibilityOf(this.basePropertyLink()));
        let basePropertyLinkDisplayed = this.basePropertyLink().isDisplayed();
        expect(basePropertyLinkDisplayed).toBe(true);        
        let papersizePropertyLinkDisplayed = this.papersizePropertyLink().isDisplayed();
        expect(papersizePropertyLinkDisplayed).toBe(true);
    }
}

