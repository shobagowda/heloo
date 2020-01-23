import { browser, element, by, By, $, $$, ExpectedConditions, logging, protractor, Key, WebDriver } from 'protractor';
import * as data from '../../../testdata/sanitytestdata/testdata.json';
import { logGenerator } from '../../../utils/logGenerator';
var path = require('path');
const timestamp = Date.now();
export class dynamicProductPage {
    public static inputdata = data.dynamicProduct.productName + timestamp;

    // General Tab on create product 
    productLink = () => element(by.id('Products'));
    createProductLink = () => element(by.id('createProduct'));
    productType = () => element(by.model('newProduct.productTypeID'));
    prodName = () => element(by.id('ProductName'));
    prodSize = () => element(by.id('productSize'));
    //MaxPagestoUpload = () => element(by.id('pageCount'));
    btnNext = () => element(by.id('next1'));

    // Document Template Tab  
    selectAccountDropdown = () => element(by.xpath("//select[@id='selectAccount']//option[3]"));
    selectCampaignDropdown = () => element(by.xpath("//select[@id='selectCampaign' and @name='selectCampaign']//option[2]"));
    selectDocumentDropdown = () => element(by.xpath("//select[@id='selectDocument']//option[11]"));
    selectAccountDropdown2 = () => element(by.css("select[name='selectAccount']"));
    selectCampaignDropdown2 = () => element(by.css("select[id='selectCampaign']"));
    selectDocumentDropdown2 = () => element(by.css("select[id='selectDocument']"));
    uploaDocumentInputFile = () => element(by.id('uploadDocumentinput'));
    selectThumbnailImageDropdown = () => element(by.css("select[id='thumbnailImage']"));
    uploadThumnails = () => element(by.xpath("//option[.='Upload Thumbnails']"));
    chooseFileBtn = () => element(by.id('file_input_id1'));
    saveBtn1 = () => element(by.id("btnSaveProduct4"));

    // Stores tab

    storesTab = () => element(by.xpath("//a[@data-target='#tab10']"));
    expandallBtn = () => element(by.xpath("//span[contains(text(),'Expand All')]"));
    storeCheckbox = () => element(by.xpath("//label[contains(text(),'TestStore_9')]/following-sibling::ul//input[@type='checkbox']"));
    store18Checkbox = () => element(by.xpath("//label[contains(text(),'TestStore_18')]/following-sibling::ul//input[@type='checkbox']"));
    autoproduceStoreCheckbox = () => element(by.xpath("//label[contains(text(),'AutoproduceStore')]/following-sibling::ul//input[@type='checkbox']"));
    saveStoreTab = () => element(by.css("button[id='btnSaveProduct10']"));
    sumbitCloseBtn = () => element(by.css("button[id='send']"));

    //Configuration Tab 

    configurationTab = () => element(by.xpath("//a[.='Configuration']"));
    productPropertiesSetupLink = () => element(by.id('productPropertiesSetup'));

    // Delivery options 
    deliveryOptionsLink = () => element(by.css("a[id='deliverySetup']"));
    mailingToggle = () => element(by.xpath("//*[@id='tab1']/div[3]/div/div/label/span"));
    officePickup = () => element(by.xpath("//*[@id='tab1']/div[4]/div/div/label/span"));
    fedexDeliverytoggle = () => element(by.xpath("//*[@id='tab1']/div[6]/div/div/label/span"));
    fedexweight = () => element(by.xpath("//td[@data-title='Weight']/input"));
    nextBtnDeliveryMethods = () => element(by.id('next1'));
    txtFixedMarkupInput = () => element(by.id('txtfixedMarkup'));
    txtMarkupInput = () => element(by.id('txtMarkup'));
    submitDeliveryOption = () => element(by.xpath("//button[@id='SaveDeliveryOptions2']"));

    // Customization Wizard set up 
    customizationWizardSetupLink = () => element(by.css("a[id='customizationWizard']"));
    availableDialsSelect = () => element(by.xpath("//select[@id='SelectAdorType']"));
    mailMethodArrowclick = () => element(by.id('AddVariableMail Method'));
    mailMethoddial = () => element(by.xpath("//a[.='Mail Method']"));
    nextBtnAdorCustomization = () => element(by.id('btnnext1'));
    checkboxSelectDefaultvalueList = () => element(by.xpath("((//input[@id='optionText' ])[1])/following::input[3]"));
    submitcustomization = () => element(by.id('btnSaveInputControlValidation'));
    backBtn = () => element(by.xpath("//a[@id='BackFromCustomizationWizard']"));
    saveBtnProductSetup = () => element(by.xpath("//button[@id='btnSaveProduct12' and @type='button']"));
    saveSumbitProductSetup = () => element(by.xpath("//button[@id='send12' and @type='button']"));
    // Search product 
    searchProduct = () => element(by.id('filterSearch'));
    makeproductOnline = () => element(by.xpath("//a[contains(text(),'" + dynamicProductPage.inputdata + "')]/preceding::td[2]/a/i"));
    getProductStatusOnline = () => element(by.xpath('//*[@id="productStatus"]'));

    //Regression   product size ,social media, receipient list, download 
    productsizeErrorMessage = () => element(by.xpath("//*[@id='tab1']/div[7]/div/span/text()"));
    featuredProductToggle = () => element(by.xpath("//input[@id='featureddproduct']/following-sibling::span"));
    socialMediaShareToggle = () => element(by.xpath("//input[@id='isSocialMediaShare']/following-sibling::span"));
    addThumbnail = () => element(by.id('addThumbnail'));
    useRecipientListToggle = () => element(by.xpath("//input[@id='UseRecipientList']/following-sibling::span"));
    downloadAfterpurchageToggle = () => element(by.xpath("//input[@id='AllowDownload']/following-sibling::span"));
    onlineDownloadToggle = () => element(by.xpath("//input[@id='OnlineDownloadOnly']/following-sibling::span"));
    chooseFileBtn2 = () => element(by.id("file_input_id2"));

    // Recipient Setup
    recipientSetupLink = () => element(by.xpath("//*[@id='recipientSetup']"));
    createYourRecipientToggle = () => element(by.xpath("//input[@id='cbrecipientlistonline']/following-sibling::span"));
    uploadyourRecipientListToggle = () => element(by.xpath("//input[@id='cbuploadrecipientlist']/following-sibling::span"));
    useExistingRecipientListToggle = () => element(by.xpath("//input[@id='cbExistingRecipientList']/following-sibling::span"));
    submitRecipientBtn = () => element(by.xpath("//*[@id='btnsubmitrecipient']"));

    //Regression-Master adors
    selectAccountDropdownReg = () => element(by.css("select[name='selectAccount']")).element(by.css("option[label='FAINTERNAL']"));
    selectCampaignDropdownReg = () => element(by.css("select[id='selectCampaign']")).element(by.css("option[label='Centerpoint_Class Prod']"));
    selectDocumentDropdownReg = () => element(by.cssContainingText("option", "1036 Classes - Editable Fields"));


    searchTxtBox = () => element(by.xpath("(//input[@type='text'])[1]"));
    customise_link = () => element(by.xpath("//a[.='" + dynamicProductPage.inputdata + "']/following::td[7]//i"));
    dropdownLink = () => element(by.xpath("//select[@id='SelectAdorType']"));
    selectVariables = () => element(by.xpath("//select/option[.='Variables']"));

    disclaimeridMoveLink = () => element(by.xpath("//td[.='DisclaimerID_Dial']/following-sibling::td/a/i"));
    disclaimerid = () => element(by.xpath("//a[.='DisclaimerID_Dial']"));

    inputControlVallidationLink = () => element(by.xpath("//a[.='Input Control & Validation']"));
    submitBtnInAdorCustomisationPage = () => element(by.xpath("//button[@id='btnSaveInputControlValidation']"));

    profiledialMoveLink = () => element(by.xpath("//td[.='ProfileID_Dial']/following-sibling::td/a/i"));
    profiledial = () => element(by.xpath("//a[contains(text(),'ProfileID_Dial')]"));

    languagedialMoveLink = () => element(by.xpath("//td[.='Language_Dial']/following-sibling::td/a/i"));
    languagedial = () => element(by.xpath("//a[contains(text(),'Language_Dial')]"));

    logostyleMoveLink = () => element(by.xpath("//td[.='LogoStyle_Dial']/following-sibling::td/a/i"));
    logostyle = () => element(by.xpath("(//a[contains(text(),'LogoStyle_Dial')])[1]"));

    logo2styleMoveLink = () => element(by.xpath("//td[.='Logo2Style_Dial']/following-sibling::td/a/i"));
    logo2style = () => element(by.xpath("//a[contains(text(),'Logo2Style_Dial')]"));
    adorBackBtn = () => element(by.xpath("//*[@id='BackFromCustomizationWizard']/span/text()"));

    layoutDialLink = () => element(by.xpath("//td[.='LayoutID_Dial']/following-sibling::td/a/i"));

    disclaimerIdDialStatus = () => element(by.xpath("//a[.='DisclaimerID_Dial']/following::td[3]/div[3]/i"));
    profileIddialStatus = () => element(by.xpath("//a[.='ProfileID_Dial']/following::td[3]/div[3]/i"));
    languageDialStatus = () => element(by.xpath("//a[.='Language_Dial']/following::td[3]/div[3]/i"));
    logostyleStatus = () => element(by.xpath("//a[.='LogoStyle_Dial']/following::td[3]/div[3]/i"));
    logo2styleStatus = () => element(by.xpath("//a[.='LayoutID_Dial']/following::td[3]/div[3]/i"));
    layoutDialStatus = () => element(by.xpath("//a[.='LayoutID_Dial']/following::td[3]/div[3]/i"));
    makeProductOnlineReg = (productName) => element(by.xpath("//a[contains(text(),'" + productName + "')]/preceding::td[2]/a/i"));
    makeProductOfflineReg = (productName) => element(by.xpath("//a[contains(text(),'" + productName + "')]/preceding::td[2]/a/i"));

    // Regression: master adors invisible scenarios
    languageInvisibleLink = () => element(by.xpath("//td[.='Language']/following-sibling::td[3]/div/a/i"));
    layoutInvisibleLink = () => element(by.xpath("//td[.='LayoutID_Dial']/following-sibling::td[4]/div/a/i"));
    logostyleInvisibleLink = () => element(by.xpath("//td[.='LogoStyle_Dial']/following-sibling::td[4]/div/a/i"));
    logo2styleInvisibleLink = () => element(by.xpath("//td[.='Logo2Style_Dial']/following-sibling::td[4]/div/a/i"));
    receipient_SetupLink = () => element(by.xpath("//a[@id='recipientSetup']"));

    //Regression-making adors mandatory in customisationwizard
    layoutDialMandatoryCheckbox = () => element(by.xpath("//a[.='LayoutID_Dial']//following::td[5]//input"));
    logostyleDialMandatoryCheckbox = () => element(by.xpath("//a[.='LogoStyle_Dial']//following::td[5]//input"));
    salesforceTxtAtReceipientSetupPage = () => element(by.xpath("//label[@id='lblSalesforceRecipientList']"));

    //Regression--Assigned to groups
    dynamicproductEditLnk = (productName: string) => element(by.xpath("//a[.='" + productName + "']"));
    assigntoGroupLnk = () => element(by.xpath("//a[.='Assigned User Groups']"));
    group27FebG1Checkbox = () => element(by.xpath("//span[.='27Feb_G1']/preceding::input[1]"));
    linkToProfile = () => element(by.xpath("//span[@id='select2-linkToProductProfileFromEditProduct-container']"));
    profile = (profileName: string) => element(by.xpath("//li[.='"+profileName +"']"));
    profileLinkTab = () => element(by.xpath("//a[@id='storeProductProfileSaveFromEditProduct']"));
    
/***
 * 
 * Linking profile to product
 */
    linkingToProfile(profileName: string)
    {
        browser.sleep(50000);
        this.linkToProfile().click();
        browser.sleep(50000);
        this.profile(profileName).click();
        browser.sleep(50000);
        this.profileLinkTab();
        browser.sleep(5000);


    }




    /**
     * -Regression Assigned to groups
     */
    assigningDynamicProductToGroups() {
        this.productLink().click();
        browser.sleep(5000);
        this.searchTxtBox().sendKeys(dynamicProductPage.inputdata);
        browser.sleep(5000);
        this.dynamicproductEditLnk(dynamicProductPage.inputdata).click();
        browser.sleep(5000);
        this.assigntoGroupLnk().click();
        browser.sleep(5000);
        this.group27FebG1Checkbox().click();
        browser.sleep(5000);
    }
    /**
     * Regression: Makes the master adors visible by making them mandatory
     */

    makeMasterAdorsMandatory() {

        this.layoutDialMandatoryCheckbox().click();
        this.logostyleDialMandatoryCheckbox().click();

    }
    /**
     * :Regression: Verifying invisible adors in Admin
     */
    invisibleAdors() {

        expect(this.languageInvisibleLink().getAttribute('class')).toContain('fa fa-eye-slash table_fa');

        expect(this.logo2styleInvisibleLink().getAttribute('class')).toContain('fa fa-eye-slash table_fa');
        this.backBtn().click();


    }

    /**
     * 
     * Regression: Master adors--using the exhisting dynamic product common ador dynamic
     */
    masterAdors() {
        
        browser.sleep(10000);
        this.customizationWizardSetupLink().click();
        browser.sleep(10000);
        this.dropdownLink().click();
        browser.sleep(10000);
        this.selectVariables().click();
        browser.sleep(10000);
        this.disclaimeridMoveLink().click();
        browser.sleep(10000);
        expect(this.disclaimerIdDialStatus().getAttribute('class')).toContain('fa fa-check table_fa text-success');
        this.profiledialMoveLink().click();
        browser.sleep(10000);
        expect(this.profileIddialStatus().getAttribute('class')).toContain('fa fa-check table_fa text-success');
        this.languagedialMoveLink().click();
        browser.sleep(10000);
        expect(this.languageDialStatus().getAttribute('class')).toContain('fa fa-check table_fa text-success');
        this.logostyleMoveLink().click();
        browser.sleep(10000);
        expect(this.logostyleStatus().getAttribute('class')).toContain('fa fa-check table_fa text-success');
        this.layoutDialLink().click();
        browser.sleep(10000);
        expect(this.layoutDialStatus().getAttribute('class')).toContain('fa fa-check table_fa text-success');
        this.logo2styleMoveLink().click();
        browser.sleep(10000);
        expect(this.logo2styleStatus().getAttribute('class')).toContain('fa fa-check table_fa text-success');
        browser.sleep(30000);

    }
    /**
     *  Regression : ceate dynamic product general tab for the master adors
     * @param productType 
     * @param productName 
     * @param productSize 
    
     */

    createDynamicProductGeneralTab(productType: string, productName: string, productSize: string) {
        logGenerator.log().info(" User Creating a Dynamic Product");
        this.productLink().click();
        logGenerator.log().info(" Clicked on Products link ");
        this.createProductLink().click();
        logGenerator.log().info(" Clicked on Create Product link");
        this.productType().sendKeys(productType);
        logGenerator.log().info(" Selected product type dropdown");
        this.prodName().sendKeys(productName);
        logGenerator.log().info(" Entered product name ");
        this.prodSize().sendKeys(productSize);
        logGenerator.log().info(" Entered product size ");
        this.btnNext().click();
    }
   
    /**
     * 
     * @param thumbnailImageType 
     *  Regression: create dynamic product document tab for the master adors
     */
    createDynamicProductDocumentTemplateTab(thumbnailImageType: string) {
        this.dropdownSelectReg();
        browser.sleep(8000);
        
        //this.selectThumbnailImageDropdown().click();
        //this.uploadThumnails().click();
        browser.sleep(18000);
        var fileToUpload1 = './../../../testdata/sanitytestdata/uploadfileproduct.jpeg',
        absolutePath1 = path.resolve(__dirname, fileToUpload1);
        logGenerator.log().info(" absolutePath : " + absolutePath1);
        this.chooseFileBtn().sendKeys(absolutePath1);
        browser.sleep(18000);
        logGenerator.log().info(" Choosing product thumbnail image");
        this.saveBtn1().click();
        browser.sleep(50000);
    }
    /**
     * 
     * @param thumbnailImageType Autoproduce
     */
    createDynamicProductDocumentTemplateTabForAutoproduce(thumbnailImageType: string) {
        this.dropdownSelect();
        this.selectThumbnailImageDropdown().sendKeys(thumbnailImageType);
        var fileToUpload1 = './../../../testdata/sanitytestdata/uploadfileproduct.jpeg',
        absolutePath1 = path.resolve(__dirname, fileToUpload1);
        logGenerator.log().info(" absolutePath : " + absolutePath1);
        this.chooseFileBtn().sendKeys(absolutePath1);
        logGenerator.log().info(" Choosing product thumbnail image");
        this.saveBtn1().click();
    }
    next = () => element(by.xpath("//button[@id='next4']"));
    /**
    * 
    * @param thumbnailImageType 
    *  Regression: create dynamic product document tab for the master adors
    */
    verifyingSalesforcereciepientOption(thumbnailImageType: string) {
        this.dropdownSelectReg();
        browser.sleep(5000);
        this.selectThumbnailImageDropdown().sendKeys(thumbnailImageType);
        browser.sleep(220000);
        var fileToUpload1 = './../../../testdata/sanitytestdata/uploadfileproduct.jpeg',
        absolutePath1 = path.resolve(__dirname, fileToUpload1);
        logGenerator.log().info(" absolutePath : " + absolutePath1);
        this.chooseFileBtn().sendKeys(absolutePath1);
        browser.sleep(280000);
        logGenerator.log().info(" Choosing product thumbnail image");
        this.useRecipientListToggle().click();
        browser.sleep(30000);
        this.saveBtn1().click();
        //this.next().click();
        browser.sleep(30000);
        this.gotoConfiguration();
        browser.sleep(15000);
        this.receipient_SetupLink().click();
        browser.sleep(15000);
        expect<any>(this.salesforceTxtAtReceipientSetupPage().isDisplayed()).toBe(false);

    }


    /**
     * Regression--Dropdown
     */

    dropdownSelectReg() {
        browser.ignoreSynchronization = true;
        this.selectAccountDropdown2().click();
        this.selectAccountDropdownReg().click();
        browser.sleep(10000);
        this.selectCampaignDropdown2().click();
        this.selectCampaignDropdownReg().click();
        browser.sleep(15000);
        this.selectDocumentDropdown2().click();
        browser.sleep(12000);
        this.selectDocumentDropdownReg().click();
        browser.sleep(6000);
        logGenerator.log().info("Drop downs are selected ");
        //browser.ignoreSynchronization = false;
    }
    //Regression for customization page
    customizationButton = () => element(by.xpath("//td[@data-title='Customization']"));
    customizationWizardText = () => element(by.xpath("/html/body/div[1]/div/div[3]/div/div/div[1]/div/h3 "));

    // regression Properties
    //dropdowns
    selectAccountDropdownForProp = () => element(by.css("select[name='selectAccount']")).element(by.css("option[label='FAINTERNAL']"));
    selectCampaignDropdownForProp = () => element(by.css("select[id='selectCampaign']")).element(by.css("option[label='Centerpoint-Standard2']"));
    selectDocumentDropdownForProp = () => element(by.cssContainingText("option", "619 Branch Flyers 1"));
    //add global property
    propertiesSetupLink = () => element(by.id('productPropertiesSetup'));
    globalProperty = () => element(by.xpath("(//*[@id='addPropertyToAssignedList']/i)[1]"));
    //create custom property
    createProperty = () => element(by.id('createProperty'));
    displayNameProperty = () => element(by.id('propertyName'));
    nextBtnPropertyDetails = () => element(by.id('next1'));
    submitBtn = () => element(by.id('inputControlValidationBtn'));
    backBtnprop = () => element(by.id('cancel'));
    //Profile dial
    profileIdDial1 = () => element(by.xpath("//*[@id='AddVariableProfileID_Dial1']/i"));
    profileIdDial1link = () => element(by.linkText("ProfileID_Dial1"));
    submitdial = () => element(by.id('btnSaveDialDetails'));
    // text ador 
    blHeadlinetextarrow = () => element(by.xpath("//td[contains(text(),'BL-Headline')]/following-sibling::td/a/i"));
    blHeadlinetextlink = () => element(by.linkText("BL-Headline"));
    nextButton = () => element(by.id('btnnext1')); // this next button used for all props
    submitButton = () => element(by.id('btnSaveInputControlValidation'));
    // Ador - Dropdown
    blMisc2tarrow = () => element(by.xpath("//td[contains(text(),'BL-Misc2')]/following-sibling::td/a/i"));
    blMisc2tlink = () => element(by.linkText("BL-Misc2"));
    // use nextButton
    inputControlDrop = () => element(by.name('InputControl'));
    addValueList = () => element(by.xpath("//i[@class='table-add fa fa-plus' and @ng-click='addNewOption(validModel.propertiesOptionVM)']"));
    textInput = () => element(by.id('txtoptionText'));
    defaultCheckbox = () => element(by.xpath("//input[@ng-click='IsSingleOptionChecked(option)']"));
    submitValue = () => element(by.xpath("//a[@ng-click='validModel.isMandatoryProperty || SaveValue($index)']"));
    submitBtnDropdown = () => element(by.id('btnSaveInputControlValidation'));
    //Ador - Multiline
    blMisc3tarrow = () => element(by.xpath("//td[contains(text(),'BL-Misc3')]/following-sibling::td/a/i"));
    blMisc3tlink = () => element(by.linkText("BL-Misc3"));
    // use nextButton
    // use inputControlDrop but send key for multiline
    // use submitBtnDropdown

    //Image Ador - Upload Option
    pMisc8arrow = () => element(by.xpath("//td[contains(text(),'PMisc8')]/following-sibling::td/a/i"));
    pMisc8tlink = () => element(by.linkText("PMisc8"));
    // use nextButton    
    allowUploadTogglebtn = () => element(by.xpath("//input[@id='chkAllowUpload']/following-sibling::span"));
    //use submitBtnDropdown

    //Image Ador - Asset Selection
    pmIsc9ImageAssetSelection = () => element(by.xpath("//td[contains(text(),'PMisc9')]/following-sibling::td/a/i"));
    pMisc9tlink = () => element(by.linkText("PMisc9"));
    // use nextButton
    assetSelectionTogglebtn = () => element(by.xpath("//input[@id='chkAssetSelection']/following-sibling::span"));
    ddlAssetSource = () => element(by.id('ddlAssetSource'));
    ddlAsset = () => element(by.id('ddlAsset'));
    storeCheckBox = (storeName) => element(by.xpath("//label[.='"+ storeName+"']/following::ul[1]/li[1]/input[1]"));
    
    createdProduct = (productName:string) => element(by.xpath("//a[.='"+ productName+"']"));
    unlinkBtn = () => element(by.id('storeProductProfileSaveFromEditProduct'));
/**
 * 
 * unlink profile from dynamic product
 */
unlinkProfileFromProduct(productName:string)
{
    this.makeProductOffline(productName);
    browser.sleep(8000);
    this.createdProduct(productName).click();
    browser.sleep(8000);
    this.gotoConfiguration();
    browser.sleep(18000);
    this.unlinkBtn().click();
    browser.sleep(8000);
}
    //use submitBtnDropdown  
    assignDynamicProductToStore(storeName:String) {
        browser.sleep(10000);
        this.storesTab().click();
        browser.sleep(10000);
        this.expandallBtn().click();
        browser.sleep(10000);
        this.storeCheckBox(storeName).click();
        browser.sleep(10000);
        logGenerator.log().info(" Assigned store and category");
        this.saveStoreTab().click();
        browser.sleep(28000);
    }

    /**
     * Create a Dynamic product in Admin  and make the product Online
     * @param productType 
     * @param productName 
     * @param productSize 
     * @param thumbnailImageType 
     * @param reg 
     */
    createDynamicProduct(productType: string, productName: string, productSize: string, thumbnailImageType: string, reg?: string) {
        logGenerator.log().info(" User Creating a Dynamic Product");
        this.productLink().click();
        logGenerator.log().info(" Clicked on Products link ");
        this.createProductLink().click();
        logGenerator.log().info(" Clicked on Create Product link");
        this.productType().sendKeys(productType);
        logGenerator.log().info(" Selected product type dropdown");
        this.prodName().sendKeys(productName);
        logGenerator.log().info(" Entered product name ");
        this.prodSize().sendKeys(productSize);
        logGenerator.log().info(" Entered product size ");
        browser.sleep(8000);
        if (reg) {
            this.featuredProductToggle().click();
            logGenerator.log().info(" Featured Product toggle on ");
            this.socialMediaShareToggle().click();
            logGenerator.log().info(" Social Media toggle on ");
        }
        this.btnNext().click();
        browser.sleep(8000);
        this.dropdownSelect();

        this.selectThumbnailImageDropdown().sendKeys(thumbnailImageType);
        var fileToUpload1 = './../../../testdata/sanitytestdata/uploadfileproduct.jpeg',
        absolutePath1 = path.resolve(__dirname, fileToUpload1);
        logGenerator.log().info(" absolutePath : " + absolutePath1);
        this.chooseFileBtn().sendKeys(absolutePath1);
        logGenerator.log().info(" Choosing product thumbinal image");
        if (reg) {
            this.useRecipientListToggle().click();
            logGenerator.log().info(" Use Recipient List toggle on ");
            this.addThumbnail().click();
            var fileToUpload1 = './../../../testdata/sanitytestdata/uploadfileProduct.jpeg',
                absolutePath1 = path.resolve(__dirname, fileToUpload1);
            logGenerator.log().info(" absolutePath : " + absolutePath1);
            this.chooseFileBtn2().sendKeys(absolutePath1);
        }

        this.saveBtn1().click();
    }
    /**
     * Assign store to the dynamic Product
     */
    assignStoreToTheProduct() {
        this.storesTab().click();
        this.expandallBtn().click();
        this.storeCheckbox().click();
        logGenerator.log().info(" Assigned store and category");
        this.saveStoreTab().click();
        browser.sleep(10000);
    }
    /**
    *  Regression Assign testStore_18 to the dynamic Product
    */
    assigntestStore_18ToTheProduct() {
        browser.sleep(10000);
        this.storesTab().click();
        browser.sleep(10000);
        this.expandallBtn().click();
        browser.sleep(10000);
        this.store18Checkbox().click();
        browser.sleep(10000);
        logGenerator.log().info(" Assigned store and category");
        this.saveStoreTab().click();
        browser.sleep(28000);
    }
    /**
    *  Regression Assign automationstore to the dynamic Product, its used for autoproduce scenario
    */
   assigntoautoproducestore() {
    this.storesTab().click();
    this.expandallBtn().click();
    this.autoproduceStoreCheckbox().click();
    logGenerator.log().info(" Assigned store and category");
    this.saveStoreTab().click();
    browser.sleep(10000);
}
    /**
     * click on configuration tab - Dynamic Product 
     */
    gotoConfiguration() {
        browser.sleep(10000);
        this.configurationTab().click();
        logGenerator.log().info(" Navigated to configuration tab");
    }

    setupdeliveryOptionsForDynamicProduct() {
        this.deliveryOptionsLink().click();
        logGenerator.log().info(" Clicked on Delivery options set up link ");
        this.mailingToggle().click();
        logGenerator.log().info(" Selected mailing ");
        this.officePickup().click();
        logGenerator.log().info(" Selected Office pick up ");
        this.nextBtnDeliveryMethods().click();
        this.txtFixedMarkupInput().sendKeys(data.dynamicProduct.fixedMarkup);
        this.txtMarkupInput().sendKeys(data.dynamicProduct.markUpPercentage);
        this.submitDeliveryOption().click();
        //browser.sleep(20000);
    }
    /**
     * Set up delivery options for dynamic Product 
     */
    setupdeliveryOptions() {
        this.deliveryOptionsLink().click();
        logGenerator.log().info(" Clicked on Delivery options set up link ");
        this.mailingToggle().click();
        logGenerator.log().info(" Selected mailing ");
        this.officePickup().click();
        logGenerator.log().info(" Selected Office pick up ");
        this.fedexDeliverytoggle().click();
        this.fedexweight().sendKeys("44");
        this.nextBtnDeliveryMethods().click();
        this.txtFixedMarkupInput().sendKeys(data.dynamicProduct.fixedMarkup);
        this.txtMarkupInput().sendKeys(data.dynamicProduct.markUpPercentage);
        this.submitDeliveryOption().click();
        browser.sleep(10000);
    }
    setupThedeliveryOptions() {
        this.deliveryOptionsLink().click();
        browser.sleep(10000);
        logGenerator.log().info(" Clicked on Delivery options set up link ");
        //this.mailingToggle().click();
        logGenerator.log().info(" Selected mailing ");
        this.officePickup().click();
        browser.sleep(10000);
        logGenerator.log().info(" Selected Office pick up ");
        this.fedexDeliverytoggle().click();
        browser.sleep(10000);
        this.fedexweight().sendKeys("44");
        browser.sleep(10000);
        this.nextBtnDeliveryMethods().click();
        browser.sleep(10000);
        this.txtFixedMarkupInput().sendKeys(data.dynamicProduct.fixedMarkup);
        browser.sleep(10000);
        this.txtMarkupInput().sendKeys(data.dynamicProduct.markUpPercentage);
        browser.sleep(10000);
        this.submitDeliveryOption().click();
        browser.sleep(20000);
    }
    /**
     *
     * Set up customization Wizard for Dynamic Product 
     */
    setupcustomizationWizard() {
        //browser.ignoreSynchronization = true;
        //browser.manage().timeouts().implicitlyWait(30000);
        this.customizationWizardSetupLink().click();
        browser.sleep(20000);
        //this.availableDialsSelect().sendKeys(data.dynamicProduct.availableDialsSelect);
        this.dropdownLink().click();
        browser.sleep(20000);
        this.selectVariables().click();
        browser.sleep(2000);
        this.mailMethodArrowclick().click();
        browser.sleep(25000);
        this.mailMethoddial().click();
        browser.sleep(25000);
        this.nextBtnAdorCustomization().click();
        browser.sleep(10000);
        this.checkboxSelectDefaultvalueList().click();
        browser.sleep(10000);
        this.submitcustomization().click();
        browser.sleep(10000);
        logGenerator.log().info(" Submitted customization set up");
        this.backBtn().click();
        browser.sleep(1000);
        //browser.ignoreSynchronization = false;
    }
    /**
     * Setup customisation wizard for autoproduce
     */
    setupcustomizationWizardAutoproduce() {
        browser.ignoreSynchronization = true;
        browser.manage().timeouts().implicitlyWait(30000);
        this.customizationWizardSetupLink().click();
        //this.availableDialsSelect().sendKeys(data.dynamicProduct.availableDialsSelect);
        browser.sleep(5000);
        this.dropdownLink().click();
        browser.sleep(5000);
        this.selectVariables().click();
        browser.sleep(5000);
        this.mailMethodArrowclick().click();
           // this.submitcustomization().click();
        logGenerator.log().info(" Submitted customization set up");
        this.backBtn().click();
        browser.ignoreSynchronization = false;
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

    /**
     * save and submit the dynamic Product 
     */
    saveAndSubmitDynamicProduct() {
        //browser.ignoreSynchronization = false;
        browser.sleep(5000);
        this.saveBtnProductSetup().click();
        browser.sleep(5000);
        this.saveSumbitProductSetup().click();
        browser.sleep(5000);
        logGenerator.log().info("Product is saved and Submitted ");
        //browser.ignoreSynchronization = false;
    }
    /**
     *  Make dynamic Product online 
     * @param productName 
     */
    makeProductOnline(productName: string) {
        //this.searchProduct().sendKeys(productName);
        logGenerator.log().info(" Search for Created product");
        this.makeProductOnlineReg(productName).click();
        browser.sleep(5000);

        logGenerator.log().info(" Product status changed to online");
    }
    /**
    *  Make dynamic Product offline 
    * @param productName 
    */
    makeProductOffline(productName: string) {
       // this.searchProduct().sendKeys(productName);
        logGenerator.log().info(" Search for Created product");
        this.makeProductOfflineReg(productName).click();
        logGenerator.log().info(" Product status changed to offline");
    }
    /**
     * Select dropdowns on  Document Template Tab  for Sanity Test
     */
    dropdownSelect() {
        browser.ignoreSynchronization = true;
        this.selectAccountDropdown2().click();
        this.selectAccountDropdown().click();
        browser.sleep(8000);
        this.selectCampaignDropdown2().click();
        this.selectCampaignDropdown().click();
        browser.sleep(8000);
        this.selectDocumentDropdown2().click();
        browser.sleep(5000);
        this.selectDocumentDropdown().click();
        browser.sleep(6000);
        logGenerator.log().info("Drop downs are selected ");
        browser.ignoreSynchronization = false;
    }

    customizingDynamicProduct(productName: string) {
        this.searchProduct().sendKeys(productName);
        logGenerator.log().info("Search for Dynamic product");
        this.customizationButton().click();
        logGenerator.log().info("Clicked on customize button");
    }

    
    /**
     * create Dynamic Product Document Template Tab for Properties test
     * @param thumbnailImageType 
     * @param reg 
     */
    createDynamicProductDocumentTemplateTabforProperties(thumbnailImageType: string, reg?: string) {
        this.dropdownSelectforPropertiesTest();
        this.selectThumbnailImageDropdown().sendKeys(thumbnailImageType);
        var fileToUpload1 = './../../../testdata/sanitytestdata/uploadfileproduct.jpeg',
            absolutePath1 = path.resolve(__dirname, fileToUpload1);
        logGenerator.log().info(" absolutePath : " + absolutePath1);
        this.chooseFileBtn().sendKeys(absolutePath1);
        logGenerator.log().info(" Choosing product thumbnail image");
        if (reg) {
            this.useRecipientListToggle().click();
            logGenerator.log().info(" Use Recipient List toggle on ");
        }
        this.saveBtn1().click();

    }
    /**
     * Document tab dropdown Select for Properties Test
     */
    dropdownSelectforPropertiesTest() {
        browser.ignoreSynchronization = true;
        this.selectAccountDropdown2().click();
        this.selectAccountDropdownForProp().click();
        browser.sleep(10000);
        this.selectCampaignDropdown2().click();
        this.selectCampaignDropdownForProp().click();
        browser.sleep(15000);
        this.selectDocumentDropdown2().click();
        browser.sleep(12000);
        this.selectDocumentDropdownForProp().click();
        browser.sleep(6000);
        logGenerator.log().info("Drop downs are selected ");
        browser.ignoreSynchronization = false;
    }
    /**
     * Global and custom Properties Set up
     */
    propertiesSetup() {

        this.propertiesSetupLink().click();
        this.globalProperty().click();
        this.createProperty().click();
        this.displayNameProperty().sendKeys("Size");
        this.nextBtnPropertyDetails().click();
        this.submitBtn().click();
        this.backBtnprop().click();

    }
    /**
     * Set up customization Wizard for Dynamic Product for Properties Test
     */
    setupcustomizationWizardforPropertiesTest() {
        // browser.ignoreSynchronization = true;
        // browser.manage().timeouts().implicitlyWait(30000);
        this.customizationWizardSetupLink().click();
        //text
        this.blHeadlinetextarrow().click();
        this.blHeadlinetextlink().click();
        this.nextButton().click();
        this.submitButton().click();
        //dropdown
        this.blMisc2tarrow().click();
        this.blMisc2tlink().click();
        this.nextButton().click();
        this.inputControlDrop().sendKeys("Dropdown List");
        this.addValueList().click();
        this.textInput().sendKeys("12.66*9.84");
        this.defaultCheckbox().click();
        this.submitValue().click();
        this.submitBtnDropdown().click();
        //Mltiline
        this.blMisc3tarrow().click();
        browser.sleep(3000);
        this.blMisc3tlink().click();
        this.nextButton().click();
        this.inputControlDrop().sendKeys("Multiline Text Input");
        this.submitBtnDropdown().click();
        //Image Ador - Upload Option
        this.pMisc8arrow().click();
        this.pMisc8tlink().click();
        this.nextButton().click();
        this.allowUploadTogglebtn().click();
        this.submitBtnDropdown().click();
        //Image Ador - Asset Selection
        this.pmIsc9ImageAssetSelection().click();
        this.pMisc9tlink().click();
        this.nextButton().click();
        this.assetSelectionTogglebtn().click();
        this.ddlAssetSource().sendKeys("Test Asset");
        this.ddlAsset().sendKeys("521 CostsFirst 1_r00001_p001");
        this.submitBtnDropdown().click();
        // Profile Dial 
        this.availableDialsSelect().sendKeys(data.dynamicProduct.availableDialsSelect);
        this.profileIdDial1().click();
        this.profileIdDial1link().click();
        this.submitdial().click();
        logGenerator.log().info(" Submitted customization set up");
        this.backBtn().click();

    }
    /**
   * Assign store 18 to the dynamic Product 
   */
    assignStoreToTheProductforstore18() {
        this.storesTab().click();
        this.expandallBtn().click();
        this.store18Checkbox().click();
        logGenerator.log().info(" Assigned store and category");
        this.saveStoreTab().click();
        browser.sleep(5000);
    }

    /**
    * Set up delivery options for dynamic Product 
    */
    setupdeliveryOptionsforProp() {
        this.deliveryOptionsLink().click();
        logGenerator.log().info(" Clicked on Delivery options set up link ");
        this.officePickup().click();
        logGenerator.log().info(" Selected Office pick up ");
        this.fedexDeliverytoggle().click();
        this.fedexweight().sendKeys("10");
        this.nextBtnDeliveryMethods().click();
        this.txtFixedMarkupInput().sendKeys(data.dynamicProduct.fixedMarkup);
        this.txtMarkupInput().sendKeys(data.dynamicProduct.markUpPercentage);
        this.submitDeliveryOption().click();
    }
    // unLinkProfile()
    // {
    //     browser.sleep(5000);
    //     this.


    // }


   

}

