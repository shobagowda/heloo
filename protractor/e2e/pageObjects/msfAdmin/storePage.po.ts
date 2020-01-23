import { browser, element, by, By, $, $$, ExpectedConditions, logging, protractor, Key, WebDriver } from 'protractor';
import * as data from '../../../testdata/sanitytestdata/testdata.json';
import { logGenerator } from '../../../utils/logGenerator';
import { Alert } from 'selenium-webdriver';
const timestamp = Date.now();

export class storePage {
    public static inputdataStore = data.store.storename + timestamp;
    storesLink = () => element(by.id('Stores'));
    createStoreLink = () => element(by.id('CreateStore'));
    // General tab
    storenameTxtbox = () => element(by.css("input[id='txtStoreName']"));
    storeDescriptionTxtbox = () => element(by.id('txtstoreDescription'));
    //---Regression			   
    storeFriendlyURLToggle = () => element(by.xpath("//label[@for='chkhasStoreFriendlyURL']"));
    storeDomainTxtbox = () => element(by.id('txtstoredomain'));
    storeFolderTxtbox = () => element(by.id('txtStoreFolder'));
    btnNext = () => element(by.id('next1'));

    //Clearing tab

    invoiceCheckbox = () => element(by.xpath("//td[contains(text(),'Invoice')]/preceding::div[1]/input"));
    displaynameTxtbox = () => element(by.model("item.displayName"));
    saveDisplayNameIcon = () => element(by.id("imgAddClearConfig"));
    submitButton = () => element(by.id('clearingBtn'));

    //Store List 

    searchStore = () => element(by.id('filterSearch'));
    storeNameAdded = () => element(by.binding('lblStoreName'));
    editStoreBtn = () => element(by.xpath("//td[@data-title='Edit Store']"));
    deliverySettingsTab = () => element(by.xpath("//a[.='Delivery Settings']"));

    //regression     
    fedexToggle = () => element(by.xpath(" //input[@id='chkIsFedex']/following-sibling::span"));
    defaultDropOffTypeDropdwn = () => element(by.xpath("//select[@id='txtDefaultDropOffType']"));
    defaultDropOffTypeDropdownInput = () => element(by.xpath("//select/option[@label='Drop Box']"));

    //Add Pick Up Address 
    addPickupAddress = () => element(by.id("lnkAddPickupAddress"));
    pickupAddDisplayName = () => element(by.id('txtDisplayName'));
    pickupAddPersonName = () => element(by.id('txtPersonName'));
    pickupAdaddress1 = () => element(by.id('txtAddress1'));
    pickupAddcity = () => element(by.id('txtCity'));
    pickupAddStateCode = () => element(by.id('txtStateCode'));
    pickupAddCountryCode = () => element(by.id('txtCountryCode'));
    pickupAddZipCode = () => element(by.id('txtZip'));
    pickupAddPhone = () => element(by.id('txtPhone'));
    pickupAddSaveBtn = () => element(by.id('btnSaveAddress'));

    // Select Creted pick up address 

    selectPickupAddress = () => element(by.id('txtHeaderPickupAddress'));

    // select groups for store 
    checkboxOne = () => element(by.id('20196'));
    checkboxTwo = () => element(by.id('20195'));
    saveGroupsBtn = () => element(by.xpath("//a[@ng-click='SaveGroupsForAddress()']"));
    submitDelivery = () => element(by.id('deliverySettingsBtn'));
    makeOnlineBtn = () => element(by.id('lnkDuplicate'));
    makeOflineBtn = () => element(by.id('lnkDuplicate'));
    oKBtn = () => element(by.xpath("//button[contains(., 'OK')]"));

    //autoproduce---Regression
    configurationLnk = () => element(by.xpath("//a[.='Configuration']"));
    autoProduceToggel = () => element(by.xpath("//span[text()=' Auto Produce']"));
    //edit the store
    editStore = () => element(by.css("(i[class='fa fa-pencil-square-o table_fa'])[1]"));
 
    //Regression: create cateogy, edit and delete category
    exhistingStoreLink = () => element(by.xpath("//a[text()='TestStorereg_100']"));
    addCategoryIcon = () => element(by.xpath("//div[@id='inputStoreGrpName']/following-sibling::a[3]"));
    editCategoryIcon = () => element(by.xpath("//div[@id='inputStoreGrpName']/following-sibling::a[1]"));
    deleteCategoryIcon = () => element(by.xpath("//div[@id='inputStoreGrpName']/following-sibling::a[2]"));
    editCategoryTxt = () => element(by.xpath("//input[@id='EditGroupName' and @class='form-control groupName']"));
    customHeaderTxt = () => element(by.css("input[id='CategoryCustomHeader']"));
    okBtn = () => element(by.xpath("//button[text()='OK']"));
    addCategoryNotification = () => element(by.xpath("//ul[@class='ng-toast__list']//span[@ng-bind-html='message.content']"));
    editCategoryNotification = () => element(by.xpath("//ul[@class='ng-toast__list']//span[@ng-bind-html='message.content']"));
    deleteCategoryNotification = () => element(by.xpath("//ul[@class='ng-toast__list']//span[@ng-bind-html='message.content']"));
    //Regression:  Edit and delete "AUTOMATIONSTORE"
    editAutomationStore = () => element(by.xpath("(//a[.='AUTOMATIONSTORE']//following::td//a//i)[1]"));
    storeNameEdit = () => element(by.xpath("//input[@id='txtStoreName']"));
    submitButtonAfterEditing = () => element(by.xpath("//button[@id='generalBtn']"));
    checkboxToDeleteEditedStore = () => element(by.xpath("(//td)[1]"));
    //-Regression
    duplicateStoreAdmin = () => element(by.xpath("//span[.=' Store Name Already Exists']"));
    searchBox = () => element(by.id('filterSearch'));
    storeEditLnk = (storeName) => element(by.xpath("//a[.='" + storeName + "']/following::i[1]"));
    configurationSubmit = () => element(by.css("button[id='configurationBtn']"));
    //Regression verify custom header at enduser side
    browse = () => element(by.xpath("//div[.='BROWSE']"));
    firstStoreGroup = () => element(by.xpath("//a[.='First Store Group']"));
    //Regression to delete store
    deleteButton = () => element(by.xpath("//a[@id='DeleteStore' ]"));
    //Presets 
    presetCraeted = (PresetName: string) => element(by.xpath("//td[contains(text(), '"+PresetName+"')]"));
     //duplicate store
     duplicateStoreLnk = (storeName:string) => element(by.xpath("//a[.='"+storeName+"']//following::i[2]"));
     createdDuplicateStore = (storeName:string) => element(by.xpath("//a[.='Copy[1]'+'"+storeName+"']"));

    
    /*
     * Create the store and Make it  duplicate store
     */
    createAndMakeDuplicateStore(storeName:string) {
        this.createStore(storeName, "Duplicate");
        browser.sleep(8000);
        this.searchStore().sendKeys(storeName);
        browser.sleep(18000);
        this.duplicateStoreLnk(storeName).click();
        browser.sleep(18000);
       expect(this.createdDuplicateStore(storeName).isPresent());
    }
    

    SearchingFortheStore(storeName: string) {
        // this.searchBox().sendKeys(storeName);
        // this.storeEditLnk(storeName).click();
        this.configurationLnk().click();
        this.autoProduceToggel().click();
        this.configurationSubmit().click();
    }
    

    /**
     * Regression: verifying Toast for Adding the store category
     */
    async verifyAddCategory() {
        
       if (await this.addCategoryNotification().isPresent()) {
            let message = await this.addCategoryNotification().getText();
            expect<any>(this.addCategoryNotification().getText()).toBe("message");
            //expect(toastMessage.getText()).toBe("Invalid password")
        }

    }
    /**
	  * Regression: verifying Toast for editing the Store category
     * 
     */
    async verifyEditCategory() {

        if (await this.editCategoryNotification().isPresent()) {
            let message = await this.editCategoryNotification().getText();
            expect<any>(this.editCategoryNotification().isPresent()).toBe(false, message);
        }
    }


    /**
     * Regression: verifying Toast for deleting the Store category
     */
    async verifyDeleteCategory() {

        if (await this.deleteCategoryNotification().isPresent()) {
            let message = await this.deleteCategoryNotification().getText();
            expect(this.deleteCategoryNotification().isPresent()).toBe(true, message);
        }
    }


    /**
     * Purpose: Regression: Adding office pickup address
     * 
     */
    officePickup() {
        this.fedexToggle().click();
        this.defaultDropOffTypeDropdwn().click();
        this.defaultDropOffTypeDropdownInput().click();
    }

    /**
     * Purpose: Regression: Making active autoproduce button
     */

    autoProduceToggleFunction() {
        this.autoProduceToggel().click();
    }

    /**
     * Purpose: Regression: Editing the store
     */
    editingStore() {
        this.editStore().click();
    }


    /**															 
     *  to Create a new Store   
     * Modify the test data for Each Test Run
     */
    createStore(storeName: string, storeDisplayName: string) {
        logGenerator.log().info(" User Creating a Store");
        browser.sleep(8000);
        this.storesLink().click();
        logGenerator.log().info(" User clicked on Stores Link");
        this.createStoreLink().click();
        logGenerator.log().info(" User clicked on Create a Store button");
        this.storenameTxtbox().sendKeys(storeName);
        logGenerator.log().info(" User entered store name ");
        browser.sleep(15000);
        this.btnNext().click();
        logGenerator.log().info(" User navigating to Clearing tab ");
        this.invoiceCheckbox().click();
        this.displaynameTxtbox().sendKeys(storeDisplayName);
        this.saveDisplayNameIcon().click();
        this.submitButton().click();
        browser.sleep(15000);


    }
    createDuplicateStore(storeName: string, storeDisplayName: string) {
        logGenerator.log().info(" User Creating a Store");
        this.storesLink().click();
        logGenerator.log().info(" User clicked on Stores Link");
        browser.sleep(8000);
        this.createStoreLink().click();
        logGenerator.log().info(" User clicked on Create a Store button");
        browser.sleep(8000);
        this.storenameTxtbox().sendKeys(storeName);
        logGenerator.log().info(" User entered store name ");
    }
    /**
     * Click on edit link for the Store 
     */
    clickOnEditStore(storeName: string) {

        logGenerator.log().info(" User editing Created Store  ");
        this.searchStore().sendKeys(storeName);
        this.editStoreBtn().click();
    }
    /**
     * Sets up the delivery settings
     * @param pickUpDisplayName 
     * 
     * @param reg 
     */
    setupDeliverySettings(pickUpDisplayName: string, reg?: string) {
        browser.sleep(15000);
        this.deliverySettingsTab().click();
        if (reg) {
            this.officePickup();
        }
        this.addStorePickUpAddress();
        var SelectWrapper = require('../../../utils/selectWrapper.ts');
        var mySelect = new SelectWrapper(by.id("txtHeaderPickupAddress"));
        mySelect.selectByText(pickUpDisplayName);
        this.checkboxOne().click();
        this.checkboxTwo().click();
        logGenerator.log().info(" Assigning store to groups ");
    }
    /**
     * 
     * @param pickUpDisplayName 
     * Sets up the delivery settings for the Autoproduce store
     */
    setupDeliverySettingsForAutoproduce(pickUpDisplayName: string) {
        browser.sleep(15000);
        this.deliverySettingsTab().click();
        this.fedexToggle().click();

        //this.officePickup();

        this.addStorePickUpAddress();
        var SelectWrapper = require('../../../utils/selectWrapper.ts');
        var mySelect = new SelectWrapper(by.id("txtHeaderPickupAddress"));
        mySelect.selectByText(pickUpDisplayName);
        this.checkboxOne().click();
        this.checkboxTwo().click();
        logGenerator.log().info(" Assigning store to groups ");
    }
    /**
     * Used to Save and Submit the changes made
     */
    saveAndSubmitStore() {
        this.saveGroupsBtn().click();
        this.submitDelivery().click();
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.alertIsPresent(), 10000, "Alert is not getting present :(")
        let ale1: Alert = browser.switchTo().alert();
        ale1.accept();
    }
    /**
     Regression:* Making the store online
     * @param storeName 
     */
    makeStoreOnline(storeName: string) {
        this.searchStore().sendKeys(storeName);
        this.makeOnlineBtn().click();
        browser.sleep(8000);
        this.oKBtn().click();
        logGenerator.log().info("Store is available on line now ");
        browser.sleep(8000);

    }
    /**
     * Regression: Making the store offline
     * @param storeName 
     */
    makeStoreOffline(storeName: string) {
        this.searchStore().sendKeys(storeName);
        this.makeOflineBtn().click();
        browser.sleep(8000);
        this.oKBtn().click();
        logGenerator.log().info("Store is available of line now ");
        browser.sleep(8000);
    }

    /**
    * adding  PickUp Address for the store
    */
    addStorePickUpAddress() {
        this.addPickupAddress().click();
        logGenerator.log().info(" User setting up Pick up address ");
        this.pickupAddDisplayName().sendKeys(data.store.pickupAddisplayname);
        this.pickupAddPersonName().sendKeys(data.store.pickupAdpersonname);
        this.pickupAdaddress1().sendKeys(data.store.pickupAdaddress1);
        this.pickupAddcity().sendKeys(data.store.pickupAdcity);
        this.pickupAddStateCode().sendKeys(data.store.pickupAdstatecode);
        this.pickupAddCountryCode().sendKeys(data.store.pickupAdCountrycode);
        this.pickupAddZipCode().sendKeys(data.store.pickupAdZipcode);
        this.pickupAddPhone().sendKeys(data.store.pickupAdPhone);
        this.pickupAddSaveBtn().click();
    }

    /**
     *Regression:  Add, edit and delete the category for the exhisting store"TestStoreReg_10"
     */
    createCustomCategory() {
        this.storesLink().click();
        this.exhistingStoreLink().click();
        browser.sleep(15000);
        this.addCategoryIcon().click();
        browser.sleep(15000);
        logGenerator.log().info("Store category added successfully ");
        browser.sleep(15000);
        this.verifyAddCategory();
    }
    editCustomCategory() {
        this.editCategoryIcon().click();
        browser.sleep(20000);
        this.editCategoryTxt().sendKeys("editing");
        browser.sleep(20000);
        this.okBtn().click();
        logGenerator.log().info("Store category edited successfully ");
        this.verifyEditCategory();
        browser.sleep(5000);
    }
    deleteCustomCategory() {
        this.deleteCategoryIcon().click();
        browser.sleep(15000);
        this.verifyDeleteCategory();
        logGenerator.log().info("Store category deleted successfully ");
        this.verifyDeleteCategory();
        //this.customHeaderTxt().sendKeys(data.store.customHeader);
        browser.sleep(5000);
    }

    /**
     * Regression:  Create the custom header at admin side and verify at end user side
     */
    createCustomCategoryForStore() {
        this.storesLink().click();
        this.exhistingStoreLink().click();
        browser.sleep(15000);
        this.addCategoryIcon().click();
        this.editCategoryIcon().click();
        browser.sleep(20000);
        this.customHeaderTxt().sendKeys(data.store.customHeader);
        browser.sleep(20000);
        this.okBtn().click();
        logGenerator.log().info("Custom cartegoty for the store created TestStorereg_100 successfully ");

    }

    /**
     * Regression : checking custom header at enduser using product Email Product1565180218837
     *
     */
    customheaderEnduser() {
        this.browse().click();
        this.firstStoreGroup().click();

    }

    /**
     * Regression: Including friendly URL(setting domain name for the store)
     */
    includeFriendlyURL(testDomianName: string) {
        this.storesLink().click();
        this.createStoreLink().click();
        this.storenameTxtbox().sendKeys("TestStoreUserFriendly");
        this.storeFriendlyURLToggle().click();
        this.storeDomainTxtbox().sendKeys(data.store.domianName);
        this.btnNext().click();
        this.invoiceCheckbox().click();
        this.displaynameTxtbox().sendKeys("friendlyURL");
        this.saveDisplayNameIcon().click();
        this.submitButton().click();

    }
  

    /**
     * Regression: Edits the created store
     */
    createAndEditStore() {
        this.createStore("AUTOMATIONSTORE", "DELETE");
        this.searchStore().sendKeys("AUTOMATIONSTORE");
        this.editAutomationStore().click();
        this.storeNameEdit().sendKeys("TEST");
        this.submitButtonAfterEditing().click();
    }

    /**
     * Regression: Deletes the edited store
     */
    deleteStore() {
        this.searchStore().sendKeys("AUTOMATIONSTORETEST");
        this.checkboxToDeleteEditedStore().click();
        this.deleteButton().click();

    }
  
    VerifyPresetClearingConfig(PresetName: string){

        this.storesLink().click();
        logGenerator.log().info(" User clicked on Stores Link");
        this.createStoreLink().click();
        logGenerator.log().info(" User clicked on Create a Store button");      
        this.btnNext().click();
        logGenerator.log().info(" User navigating to Clearing tab ");
        browser.wait(ExpectedConditions.visibilityOf(this.presetCraeted(PresetName)));
        let presetCraetedDisplayed = this.presetCraeted(PresetName).isDisplayed();
        expect(presetCraetedDisplayed).toBe(true);
        browser.sleep(5000);          
    }
    VerifyPresetClearingConfigDelete(PresetName: string){

        this.storesLink().click();
        logGenerator.log().info(" User clicked on Stores Link");
        this.createStoreLink().click();
        logGenerator.log().info(" User clicked on Create a Store button");      
        this.btnNext().click();
        logGenerator.log().info(" User navigating to Clearing tab ");
        let presetCraetedDisplayed = this.presetCraeted(PresetName).isDisplayed();
        expect(presetCraetedDisplayed).toBe(false);
        browser.sleep(5000);          
    }



}

