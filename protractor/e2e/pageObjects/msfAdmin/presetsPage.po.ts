import { browser, element, by, By, $, $$, ExpectedConditions, logging, protractor, Key } from 'protractor';
import * as data from '../../../testdata/sanitytestdata/testdata.json';
import { logGenerator } from '../../../utils/logGenerator';
import { Alert } from 'selenium-webdriver';
const timestamp = Date.now();

export class presetsPage {
    public static inputdataProfile = data.profile.profileNameInput+timestamp;
    // presets
    presetsLink = () => element(by.xpath("//a[text()='Presets']"));
    addNewPresetButton = () => element(by.xpath("//button[@ng-disabled='isPresetEmpty']"));
    clearingNamefiled = () => element(by.xpath("((//div[@ui-grid-row='row'])[last()]//div[contains(@class,'ui-grid-cell-contents')])[2]"));
    clearingNamefiledInput = () => element(by.xpath("((//div[@ui-grid-row='row'])[last()]//div[contains(@class,'ng-scope')])[3]//input"));
    statusCheckBoxField = () => element(by.xpath("(//div[@class='ui-grid-cell ng-scope ui-grid-coluiGrid-007'])[last()]"));
    
    statusCheckBox = () => element(by.xpath("(//div[contains(@class,'ui-grid-coluiGrid-007')])[last()]//input "));
    actionSave = () => element(by.xpath("(//*[@ng-click='grid.appScope.saveNewItem(row)']/i)[last()]"));
    actionDelete = () => element(by.xpath("(//*[@ng-click='grid.appScope.deleteRow(row)']/i)[last()]"));
    deleteConfirmationMessage = () => element(by.xpath("//span[text()='Preset deleted successfully']"));

    
    createPreset(PresetName: string) {
        this.presetsLink().click();
        logGenerator.log().info(" Clicked on Presets Link ");
        browser.wait(ExpectedConditions.visibilityOf(this.addNewPresetButton()));
        this.addNewPresetButton().click();
        browser.sleep(5000);
        this.clearingNamefiled().click();
        this.clearingNamefiledInput().sendKeys(PresetName);
        browser.sleep(5000);
        this.statusCheckBoxField().click();
        browser.sleep(5000);
        this.statusCheckBox().click();
        browser.sleep(5000);
        this.actionSave().click();

    }

    editPreset(PresetNameEdited: string) {
        this.presetsLink().click();
        this.clearingNamefiled().click();
        this.clearingNamefiledInput().sendKeys(PresetNameEdited);
        browser.sleep(5000);
        this.actionSave().click();
        browser.sleep(5000);

    }

    deletePreset(PresetNameEdited: string) {
        this.presetsLink().click();
        this.actionDelete().click();
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.alertIsPresent(), 10000, "Alert is not getting present :(")
        let ale1: Alert = browser.switchTo().alert();
        ale1.accept();
        browser.sleep(5000);
        browser.wait(ExpectedConditions.visibilityOf(this.deleteConfirmationMessage()));
        let deleteConfirmationMessageDisplayed = this.deleteConfirmationMessage().isDisplayed();
        expect(deleteConfirmationMessageDisplayed).toBe(true);
    }


} 
