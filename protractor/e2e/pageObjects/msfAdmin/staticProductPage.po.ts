import { browser, element, by, By, $, $$, ExpectedConditions, logging, protractor, Key } from 'protractor';
import * as data from '../../../testdata/sanitytestdata/testdata.json';
import { logGenerator } from '../../../utils/logGenerator';
const path = require('path');
const timestamp = Date.now();

export class creatingStaticProduct {
    public static inputDataStaticProduct = data.staticProduct.productName + timestamp;

    // Create Product
    productLink = () => element(by.xpath("//a[@id='Products']"));
    createBtn = () => element(by.css("a[id='createProduct']"));
    //Products general tab
    selectStaticDropDwn = () => element(by.css("select[id='linkToProductType']"));
    productNameTxt = () => element(by.css("input[id='ProductName']"));
    productSizeTxt = () => element(by.css("input[name='productSize']"));
    documentTab = () => element(by.xpath("//a[text()='Document']"));
    browseLink = () => element(by.id("file"));
    thumnailImageBtn = () => element(by.id("file_input_id1"));
    //Edit Static Product - FAI
    storesLink = () => element(by.xpath("(//a[text()='Stores'])[2]"));
    //assign to store  New Sub Category 1.1.1.1
    groupCheckbox = () => element(by.xpath("//label[contains(text(),'TestStore_9')]/following-sibling::ul//input[@type='checkbox']"));
    saveBtn1 = () => element(by.xpath("//*[@id='btnSaveProduct10']"));
    //configuration tab
    configurationTab = () => element(by.xpath("//a[text()='Configuration']"));
    linkDropdown = () => element(by.css("span[class='select2-selection__arrow']"));
    //Copy[1]print is the link to product profile name 
    linkToCreatedProfile = () => element(by.xpath("//li[contains(text(),'firstamerican')]"));
    linkBtn = () => element(by.xpath("//a[@ng-click='updateProfile()']"));
    SaveBtn2 = () => element(by.id("btnSaveProduct12"));
    // Product Setup - FAI delivery options
    deliveryOptionsBtn = () => element(by.css("i[class='fa fa-truck']"));
    //Delivery Methods  
    pickupToggleBtn = () => element(by.xpath("//*[@id='tab1']/div[4]/div/div/label/span"));
    pickupSaveBtn = () => element(by.xpath("//*[@id='SaveDeliveryOptions1']"));
    saveBtnValueList  = () => element(by.id('btnSaveProduct12'));
    submitCloseBtn = () => element(by.xpath("//button[@id='send12']"));
    searchBtn = () => element(by.xpath("(//input[@type='text'])[1]"));
    makeProductStatusOnlineToggle = () => element(by.xpath("//a[contains(text(),'" + creatingStaticProduct.inputDataStaticProduct + "')]/preceding::td[2]/a/i"));
    getProductStatusOnline = () => element(by.xpath("//*[@id='productStatus']"));



    /***
     * Create static product in Admin and making the product online 
     **/
    staticProductCreationGenaralTab(productName: string, productSize: string) {
        this.productLink().click();
        this.createBtn().click();
        logGenerator.log().info("Clicked on create button for product creation");

        //General tab
        this.selectStaticDropDwn().click();
        logGenerator.log().info("Selected the static product type");
        this.productNameTxt().sendKeys(productName);
        logGenerator.log().info("Product name given ");
        this.productSizeTxt().sendKeys(productSize);
        logGenerator.log().info("Product size given productSize");
        browser.sleep(3000);
    }
    staticProductCreationDocumentlink(){
        //Document link
        this.documentTab().click();
        logGenerator.log().info("Clicked on document tab");
        browser.sleep(15000);
    
        //file upload
        var fileToUpload1 = './../../../testdata/sanitytestdata/createstaticproductTest.doc.docx',
        absolutePath1 = path.resolve(__dirname, fileToUpload1);
        logGenerator.log().info(" absolutePath : " + absolutePath1);
        this.browseLink().sendKeys(absolutePath1);
        browser.sleep(15000);
        logGenerator.log().info("Uploaded document");
    }

    staticProductCreationUploadImage(){
        //uploaded image
        var imageUpload = './../../../testdata/sanitytestdata/createstaticproductflower.jpeg',
        absolutePath2 = path.resolve(__dirname, imageUpload);
        logGenerator.log().info(" absolutePath : " + absolutePath2);
        this.thumnailImageBtn().sendKeys(absolutePath2);
        browser.sleep(5000);
        logGenerator.log().info("uploaded image");
        browser.sleep(8000);
    }

    /**
     * Assigning the TestStore_9 to product
     *  */
    assignStore() {

        this.storesLink().click();
        browser.sleep(8000);
        logGenerator.log().info("Clicked on stores tab ");
        this.groupCheckbox().click();
        browser.sleep(3000);
        logGenerator.log().info("Clicked on group check box ");
        this.saveBtn1().click();
        browser.sleep(30000);
        logGenerator.log().info("Clicked on save button ");

    }

    /**
     * Linking profile to newly created static product
     */
    getConfigurationTab() {

        this.configurationTab().click();
        browser.sleep(3000);
        logGenerator.log().info("Clicked on configuration tab ");
       
    }

    /**
     * Setting up the delivery options
     */
    setUpDeliveryOptions() {

        this.deliveryOptionsBtn().click();
        browser.sleep(2000);
        logGenerator.log().info("Clicked on delivery options button");
        this.pickupToggleBtn().click();
        logGenerator.log().info("Clicked on office pickup toggle button ");
        this.pickupSaveBtn().click();
        logGenerator.log().info("Clicked on save button");

    }
    /**
     * Save and Submit the delivery option
     */
    saveAndSubmitStaticProduct() {

        this.saveBtnValueList().click();
        this.submitCloseBtn().click();
        logGenerator.log().info("Clicked on submit and close button ");
        browser.sleep(5000);

    }
    /**
     * Making the product status online
     */
    makeProductsStatusOnline(productName: string) {
        this.searchBtn().sendKeys(productName);
        logGenerator.log().info("Searching for the created static product");
        this.makeProductStatusOnlineToggle().click();
        browser.sleep(5000);
        logGenerator.log().info("Made the product status online");
    }

    // regression 

    staticProductCreationDocumentPdf(){
        //Document link
        this.documentTab().click();
        logGenerator.log().info("Clicked on document tab");
        browser.sleep(15000);
    
        //file upload
        var fileToUploadpdf = './../../../testdata/sanitytestdata/uploadProductBlack Swirl Property Flyer703602.pdf',
        absolutePath1 = path.resolve(__dirname, fileToUploadpdf);
        logGenerator.log().info(" absolutePath : " + absolutePath1);
        this.browseLink().sendKeys(absolutePath1);
        browser.sleep(15000);
        logGenerator.log().info("Uploaded document");
    }

    staticProductCreationDocumentJpeg(){
        //Document link
        this.documentTab().click();
        logGenerator.log().info("Clicked on document tab");
        browser.sleep(15000);
    
        //file upload
        var fileToUploadJpeg = './../../../testdata/sanitytestdata/createStaticProductFlower.jpeg',
        absolutePath1 = path.resolve(__dirname, fileToUploadJpeg);
        logGenerator.log().info(" absolutePath : " + absolutePath1);
        this.browseLink().sendKeys(absolutePath1);
        browser.sleep(15000);
        logGenerator.log().info("Uploaded document");
    }

    staticProductCreationDocumentJpg(){
        //Document link
        this.documentTab().click();
        logGenerator.log().info("Clicked on document tab");
        browser.sleep(15000);
    
        //file upload
        var fileToUploadJpg = './../../../testdata/sanitytestdata/emailProductImage.jpg',
        absolutePath1 = path.resolve(__dirname, fileToUploadJpg);
        logGenerator.log().info(" absolutePath : " + absolutePath1);
        this.browseLink().sendKeys(absolutePath1);
        browser.sleep(15000);
        logGenerator.log().info("Uploaded document");
    }
    staticProductCreationDocumentpng(){
        //Document link
        this.documentTab().click();
        logGenerator.log().info("Clicked on document tab");
        browser.sleep(15000);    
        //file upload
        var fileToUploadJpg = './../../../testdata/sanitytestdata/staticProduct.png',
        absolutePath1 = path.resolve(__dirname, fileToUploadJpg);
        logGenerator.log().info(" absolutePath : " + absolutePath1);
        this.browseLink().sendKeys(absolutePath1);
        browser.sleep(15000);
        logGenerator.log().info("Uploaded document");
    }
    staticProductCreationDocumentgif(){
        //Document link
        this.documentTab().click();
        logGenerator.log().info("Clicked on document tab");
        browser.sleep(15000);    
        //file upload
        var fileToUploadJpg = './../../../testdata/sanitytestdata/giphy.gif',
        absolutePath1 = path.resolve(__dirname, fileToUploadJpg);
        logGenerator.log().info(" absolutePath : " + absolutePath1);
        this.browseLink().sendKeys(absolutePath1);
        browser.sleep(15000);
        logGenerator.log().info("Uploaded document");
    }
    staticProductCreationDocumentexcel(){
        //Document link
        this.documentTab().click();
        logGenerator.log().info("Clicked on document tab");
        browser.sleep(15000);    
        //file upload
        var fileToUploadJpg = './../../../testdata/sanitytestdata/StaticProduct.xlsx',
        absolutePath1 = path.resolve(__dirname, fileToUploadJpg);
        logGenerator.log().info(" absolutePath : " + absolutePath1);
        this.browseLink().sendKeys(absolutePath1);
        browser.sleep(15000);
        logGenerator.log().info("Uploaded document");
    }

    staticProductCreationDocumentpptx(){
        //Document link
        this.documentTab().click();
        logGenerator.log().info("Clicked on document tab");
        browser.sleep(15000);    
        //file upload
        var fileToUploadJpg = './../../../testdata/sanitytestdata/Test static Product.pptx',
        absolutePath1 = path.resolve(__dirname, fileToUploadJpg);
        logGenerator.log().info(" absolutePath : " + absolutePath1);
        this.browseLink().sendKeys(absolutePath1);
        browser.sleep(15000);
        logGenerator.log().info("Uploaded document");
    }

    staticProductCreationDocumentppt(){
        //Document link
        this.documentTab().click();
        logGenerator.log().info("Clicked on document tab");
        browser.sleep(15000);    
        //file upload
        var fileToUploadJpg = './../../../testdata/sanitytestdata/Test static Product ppt.ppt',
        absolutePath1 = path.resolve(__dirname, fileToUploadJpg);
        logGenerator.log().info(" absolutePath : " + absolutePath1);
        this.browseLink().sendKeys(absolutePath1);
        browser.sleep(15000);
        logGenerator.log().info("Uploaded document");
    }

} 
