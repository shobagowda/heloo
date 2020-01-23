import { browser, element, by, By, $, $$, ExpectedConditions, logging, protractor, Key } from 'protractor';
import * as data from '../../../testdata/sanitytestdata/testdata.json';
import { logGenerator } from '../../../utils/logGenerator';
const timestamp = Date.now();

export class profilePage {
    public static inputdataProfile = data.profile.profileNameInput + timestamp;
    // Create Profile
    profileLink = () => element(by.xpath("//a[text()='Profiles']"));
    createBtn = () => element(by.css("a[id='createProfile']"));
    profileNameTxt = () => element(by.css("input[id='ProfileName']"));
    languageDropdown = () => element(by.css("select[data-ng-model='LangID']")).element(by.css("option[label='German-Germany']"));
    typeDropdown = () => element(by.xpath("//select[@id='currency']"));
    currencyDropdown = () => element(by.xpath("//option[@label='Dollar']"));
    submitBtn = () => element(by.xpath("//button[@id='saveProfile']"));
    //verify the newly created profile
    searchProfileTxt = () => element(by.css("input[type='text']"));
    newlyCreatedProfile = () => element(by.xpath("//a[contains(text(),'" + profilePage.inputdataProfile + "')]"));
    //property setup tab
    propertySetupLink = () => element(by.xpath("(//span[@class='badge bg-green'])[1]"));
    addBtn = () => element(by.xpath("(//a[@id='addPropertyToAssignedList'])[1]"));
    backBtn = () => element(by.xpath("//*[@id='cancel']/span/i"));
    //pricing setup tab
    pricingSetup = () => element(by.css("a[id='ProfilePricing']"));
    fromValueTxt = () => element(by.model("pricePeckingStep.fromValue"));
    clickPlusIcon = () => element(by.xpath("//i[@class='fa fa-plus table_fa']"));
    //set prices tab and submit
    setPricesBtn = () => element(by.xpath("//a[text()='Set Prices']"));
    fixedCostTxt = () => element(by.model("item.fixedPrice"));
    unitCostTxt = () => element(by.model("priceStep.stepWisePrice"));
    submitBtn1 = () => element(by.xpath("(//button[@type='submit'])[2]"));
    //finally submit on edit profile page
    editPageSubmitBtn = () => element(by.xpath("//button[@id='saveProfile']"));
    //Regression
    profileLnk = (profileName: string) => element(by.xpath("//a[.='" + profileName + "']"));
    editProfileLnk = (profileName: string) => element(by.xpath("//input[@id='profileName']"));
    createPropertyLnk = () => element(by.id('createProperty'));
    displayName = () => element(by.xpath("//input[@type='text' and @name='propertyName']"));
    createPropertySubmitBtn = () => element(by.xpath("//button[@type='submit' and @id='propertyDetailsBtn']"));
    propertyName = () => element(by.xpath("//a[.='MSF']"));
    propertyNameEdit = () => element(by.xpath("//input[@type='text' and @id='propertyName']"));
    propertyNameEdited = () => element(by.xpath("//a[.='MSFedit']"));
    addGlobalPropertyAttachFile = () => element(by.xpath("//div[.='Attach File' ]/preceding::td/div/a/i[@class='fa fa-level-up table_fa']"));
    globalProperty = () => element(by.xpath("//a[.='Attach File']"));
    globalPropertyEdit = () => element(by.xpath("//input[@type='text' and @name='propertyName']"));
    globalPropertyEdited = () => element(by.xpath("//a[.='Attach FileMSF']"));
    deleteProfile = (profileName: string) => element(by.xpath("//a[.='" + profileName + "']/preceding::td[2]//a//i"));
    addGlobalPropertyColor = () => element(by.xpath("(//div[.='Color']/preceding::td/div/a/i[@class='fa fa-level-up table_fa'])[5]"));
    addGlobalPropertyJobnotes = () => element(by.xpath("//div[.='Job Notes' ]//parent::td//preceding-sibling::td[@data-title='Add']//i"));
    toggleButtonUserDisplay = () => element(by.xpath("//*[@id='datatable-buttons']/tbody/tr/td[5]/div"));
    checkCreatedProfile = (profileName: string) => element(by.xpath("//a[.='"+ profileName+"']"));
    duplicateProfile = (profileName: string) => element(by.xpath("//a[.='"+profileName+"']//preceding::td[.='18876']//preceding::i[@class='fa fa-files-o table_fa']"));
    copyOfCreatedProfile = (profileName: string) => element(by.xpath("//a[.='Copy[1]+'"+profileName +"'']"));

    createDuplicateProfile(profileName: string)
    {
        browser.sleep(18000);
        this.duplicateProfile(profileName).click();
        browser.sleep(18000);
        expect(this.copyOfCreatedProfile(profileName).getText()).toContain('profileName');
        browser.sleep(8000);

    }
   

    /**
     * 
     * adding the global property for the profile
     */
    propertySetup(profileName: string)
    {
        this.searchProfileTxt().sendKeys(profileName);
        browser.sleep(5000);
        this.profileLnk(profileName).click();
        browser.sleep(5000);
        this.propertySetupLink().click();
        browser.sleep(5000);
        this.addGlobalPropertyAttachFile().click();
        // browser.sleep(15000);
        // this.addGlobalPropertyColor().click();
        browser.sleep(15000);
        this.addGlobalPropertyJobnotes().click();
        browser.sleep(15000);
        this.backBtn().click();
        browser.sleep(15000);
        logGenerator.log().info("Clicked on back button");

    }

    /**
     * Deleting the profile
     */
    profileDelete(profileName: string) {
        this.deleteProfile(profileName).click();
        expect(this.deleteProfile(profileName).isPresent()).toBe(false);



    }
    /**
     * Regression: Editing the alreadt added global property of the profile
     */
    editGlobalPropertyOfProfile() {
        this.globalProperty().click();
        this.globalPropertyEdit().sendKeys('MSF')
        this.createPropertySubmitBtn().click();
        expect(this.globalPropertyEdited().getText()).toEqual('Attach FileMSF');

    }
    /**
     * Regression:  Adding the global property to the profile
     */

    addGlobalPropertyToProfile() {
        this.addGlobalPropertyAttachFile().click();
        expect(this.globalProperty().getText()).toEqual('Attach File');

    }

    //Editing the Profile
    profileEdit(profileName: string) {
        this.profileLink().click();
        this.profileLnk(profileName).click();
        browser.sleep(5000);
        this.editProfileLnk(profileName).sendKeys("MSF");
        browser.sleep(15000);
        this.submitBtn().click();
        browser.sleep(15000);

    }
    /**
     * Regression: Adding new property to profile
     * @param profileName 
     */
    addPropertyToProfile(profileName: string) {
        this.profileLnk(profileName).click();
        this.propertySetupLink().click();
        this.createPropertyLnk().click();
        this.displayName().sendKeys("MSF");
        this.createPropertySubmitBtn().click();
        expect(this.propertyName().getText()).toEqual('MSF');
    }
    /**
     * Regression: Editing added property to profile
     */
    editAddedPrpertyOfTheProfile() {
        this.propertyName().click();
        this.propertyNameEdit().sendKeys("edit");
        this.createPropertySubmitBtn().click();
        expect(this.propertyNameEdited().getText()).toEqual('MSFedit');
    }

    /***
     * Create new profile in Admin and making the profile online
     **/
    profilePageCreation(profileName: string) {
        browser.sleep(15000);
        this.profileLink().click();
        this.createBtn().click();
        logGenerator.log().info("Clicked on create button for profile creation");
        this.profileNameTxt().sendKeys(profileName);
        logGenerator.log().info("Entered profile name");
        this.languageDropdown().click();
        this.typeDropdown().click();
        this.currencyDropdown().click();
        //this.type().click();
        logGenerator.log().info("Selected language, currency and the type");
        this.submitBtn().click();
        browser.sleep(20000);
        logGenerator.log().info("Clicked on submit button");
        
        expect(this.checkCreatedProfile(profileName).isPresent());

    }
    /**
     * 
     * @param profileName profile page verify used for linking profile to product scenario
     */
    profilePageVerifyforLinkAndUnlink(profileName: string) {
      
        this.pricingSetup().click();
        logGenerator.log().info("Clicked on pricing setup button");
        this.fromValueTxt().sendKeys(data.profile.fromValue);
        logGenerator.log().info("Clicked on from value button");
        this.toggleButtonUserDisplay().click();
        logGenerator.log().info("Clicked on toggle button");
        this.clickPlusIcon().click();
        logGenerator.log().info("Clicked on click plus back button");
        this.setPricesBtn().click();
        logGenerator.log().info("Clicked on set-price button");
        this.fixedCostTxt().sendKeys(data.profile.fixedCost);
        logGenerator.log().info("Clicked on fixed-cost button");
        this.unitCostTxt().sendKeys(data.profile.unitCost);
        logGenerator.log().info("Clicked on unit-cost button");
    }

    /**
     * Verify created Profile
     * 
     */
    profilePageVerify(profileName: string) {
        this.searchProfileTxt().sendKeys(profileName);
        logGenerator.log().info("Profile page search given");
        this.newlyCreatedProfile().click();
        logGenerator.log().info("Clicked on newly created profile");
        this.propertySetupLink().click();
        logGenerator.log().info("Clicked on  the property setup");
        this.addBtn().click();
        browser.sleep(15000);
        logGenerator.log().info("Clicked on add button");
        this.backBtn().click();
        logGenerator.log().info("Clicked on back button");
        this.pricingSetup().click();
        logGenerator.log().info("Clicked on pricing setup button");
        this.fromValueTxt().sendKeys(data.profile.fromValue);
        logGenerator.log().info("Clicked on from value button");
        this.toggleButtonUserDisplay().click();
        logGenerator.log().info("Clicked on toggle button");
        this.clickPlusIcon().click();
        logGenerator.log().info("Clicked on click plus back button");
        this.setPricesBtn().click();
        logGenerator.log().info("Clicked on set-price button");
        this.fixedCostTxt().sendKeys(data.profile.fixedCost);
        logGenerator.log().info("Clicked on fixed-cost button");
        this.unitCostTxt().sendKeys(data.profile.unitCost);
        logGenerator.log().info("Clicked on unit-cost button");
    }
    /**
     * Submit the profile
     */

    submitProfile(profileName:string) {
        this.submitBtn1().click();
        logGenerator.log().info("Clicked submit button ");
        this.editPageSubmitBtn().click();
        logGenerator.log().info("Clicked on edit page submit button");
        browser.sleep(10000);
        expect(this.checkCreatedProfile(profileName).isDisplayed());
                  }
   } 
