import { browser, element, by, By, $, $$, ExpectedConditions, logging, protractor, Key } from 'protractor';
import { logGenerator } from '../../../utils/logGenerator';
import * as data from '../../../testdata/sanitytestdata/testdata.json';

const timestamp = Date.now();
export class userPage {
    public static input = data.user.fname + timestamp;
    public static groupNameInput=data.groups.groupName + timestamp;
    public static createdGroupInput=data.groups.createdGroup + timestamp;
    // User information tab
    userGroupsTab = () => element(by.xpath("//a[@id='User Groups']"));
    usersBtn = () => element(by.id("btnGoToUser"));
    createBtn = () => element(by.id("btnNewUser"));
    firstName = () => element(by.xpath("//input[@id='firstname']"));
    lastName = () => element(by.xpath("//input[@id='lastname']"));

    //User information tab
    accountInfoTab = () => element(by.xpath("//a[@data-target='#tab2']"));
    emailTxtbox = () => element(by.xpath("//input[@id='emailid']"));
    passTxtbox = () => element(by.xpath("//input[@id='password']"));
    confPass = () => element(by.xpath("//input[@id='cpasswords']"));

    //Includegroups tab
    includeGroups = () => element(by.xpath("(//a[@role='tab'])[4]"));
    rightArrow = () => element(by.xpath("//a[.='3']"));
    checkBox = () => element(by.xpath("//input[@type='checkbox' and @id='2']"));

    //Default store tab
    defaultStoreRadioBtn = () => element(by.xpath("//a[text()='Default Store']"));
    groupsRadioBtn = () => element(by.xpath("//input[@name='groupsType']"));
    enduserRadioBtn = () => element(by.xpath("//*[@id='endUser']"));
    addStore = () => element(by.xpath("(//input[@name='store'])[4]"));
    submitBtn = () => element(by.xpath("//*[@id='tab5']/div[4]/div[2]/button[2]"));

    //Userlist page
    searchTxtbox = () => element(by.xpath("(//input[@type='text'])[1]"));
    getFirstName = () => element(by.xpath("//td[text()='" + userPage.input + "']"));
    getLastName = () => element(by.xpath("//*[@id='" + data.user.lname + "']"));
    statusBtn = () => element(by.xpath("//td[@data-title='IsActive']"));
    getEdittedLastName = () => element(by.xpath("//td[@data-title='LastName']"));


    //Regression
    impersonationToggle = () => element(by.xpath("//*[@id='tab1']/div[4]/div/div/label"));
    adUser = () => element(by.xpath("//*[@id='tab2']/div[2]/div/div/label"));
    adUserSearchTxtbox = () => element(by.xpath("//input[@id='usernamesearchtxt']"));
    searchIcon = () => element(by.xpath("//i[@class='fa fa-search']"));
    impersonationTab = () => element(by.xpath("//a[.='Impersonation']"));
    groupnameCheckbox = () => element(by.xpath("(//a[.='Direct IT']/../preceding-sibling::td/input[@id='2'])[2]"));
    submit = () => element(by.xpath("//*[@id='tab6']/div[4]/div[2]/button[2]"));
    userID = () => element(by.xpath("//td[@data-title='UserID']"));
    delete = () => element(by.xpath("//a[@id='btnDeleteUser']"));
    professionalInformationTab = () => element(by.xpath("//a[.='Professional Information']"));
    companyName = () => element(by.xpath("//input[@name='company']"));
    submitButton = () => element(by.xpath("//button[@class='btn btn-success']"));
    groupCreate = () => element(by.xpath("//a[@id='btnAddnewGroup']"));
    groupnameTxtbox = () => element(by.xpath("//input[@id='GroupName']"));
    groupDesc = () => element(by.xpath("//input[@id='GroupDesc']"));
    activeDirectoryGroupName = () => element(by.xpath("//label[@for='ADGroupName']/..//div[1]//td/input[@type='text']"));
    addBtn = () => element(by.xpath("//button[@ng-click='Add()']"));
    searchBtn = () => element(by.xpath("//a[@id='searchADUsers']"));
    groupSubmit = () => element(by.xpath("//button[@id='saveGroup']"));
    groupsearch = () => element(by.xpath("//input[@name='Search']"));
    getGroupName = () => element(by.xpath("//td[@data-title='Group Name']/a[.='" + userPage.groupNameInput + "']"));
    searchExcludedNonADUser = () => element(by.xpath("//input[@ng-model='searchExcludedNonADGroup']"));
    nonADUsers2 = () => element(by.xpath("//td[.='" + data.groups.user1 + "']/..//following-sibling::td[1]//a"));
    nonADUsers1 = () => element(by.xpath("//td[.='" + data.groups.user2 + "']/..//following-sibling::td[1]//a"));
    searchAssignedNonADUser = () => element(by.xpath("//input[@ng-model='searchAssignedNonADGroup']"));
    assignNonADGroupUser1 = () => element(by.xpath("/html/body/div[1]/div/div[3]/div/div/div[3]/div/div/div/form/div[6]/div[1]//following-sibling::div[1]//table//tbody/tr//td[.='" + data.groups.user1 + "']"));
    assignNonADGroupUser2 = () => element(by.xpath("/html/body/div[1]/div/div[3]/div/div/div[3]/div/div/div/form/div[6]/div[1]//following-sibling::div[1]//table//tbody/tr//td[.='" + data.groups.user2 + "']"));
    excludedNonADGroupUser1 = () => element(by.xpath("/html/body/div[1]/div/div[3]/div/div/div[3]/div/div/div/form/div[6]/div[4]/h2/..//following-sibling::div[1]//table//tbody//td[.='" + data.groups.user1 + "']"));
    excludedNonADGroupUser2 = () => element(by.xpath("/html/body/div[1]/div/div[3]/div/div/div[3]/div/div/div/form/div[6]/div[4]/h2/..//following-sibling::div[1]//table//tbody//td[.='" + data.groups.user2 + "']"));
    newGroup = () => element(by.xpath("//a[.='" + userPage.createdGroupInput + "']"));
    searchExcludedMSFGroups = () => element(by.xpath("//input[@ng-model='searchExcludedMsfGroup']"));
    excludedMSFGroup = () => element(by.xpath("//td[.='" + userPage.groupNameInput + "']/..//following-sibling::td[1]//a"));
    assignedMSFGroup = () => element(by.xpath("/html/body/div[1]/div/div[3]/div/div/div[3]/div/div/div/form/div[7]/div[1]/h2/..//following-sibling::div[1]//table//tbody//td[.='" + userPage.groupNameInput + "']"));
    createdGroup = () => element(by.xpath("//*[@id='datatable-buttons']/thead/tr/th[2]/../..//following-sibling::tbody[1]//td[2]/a[.='" + userPage.groupNameInput + "']"));

    /**
     * Create a User
     */
    creatingUserPageOperations() {

        this.userGroupsTab().click();
        logGenerator.log().info("Clicked on User groups tab");
        this.usersBtn().click();
        logGenerator.log().info("Clicked on Users button");
        this.createBtn().click();
        logGenerator.log().info("Clicked on Create button");
        // const timestamp = Date.now();
        this.firstName().sendKeys(data.user.fname + timestamp);
        logGenerator.log().info("Data given to first name field");
        this.lastName().sendKeys(data.user.lname);
        logGenerator.log().info("Data given to last name field");
        this.accountInfoTab().click();
        logGenerator.log().info("Clicked on account-info tab");
        this.emailTxtbox().sendKeys(data.user.emailfirstpart + timestamp + data.user.emailsecondpart);
        logGenerator.log().info("Data given to email field");
        this.passTxtbox().sendKeys(data.user.pass);
        logGenerator.log().info("Data given to password field ");
        this.confPass().sendKeys(data.user.pass);
        logGenerator.log().info("Data given to confirm password field");

    }
    /**
     * Add user to Group
     */
    includeinGroups() {
        this.includeGroups().click();
        logGenerator.log().info("Navigated to include groups tab");
        this.rightArrow().click();
        browser.sleep(5000);
        this.checkBox().click();
        logGenerator.log().info("Selected the checkbox");
    }
    defaultStore() {
        this.defaultStoreRadioBtn().click();
        logGenerator.log().info("Navigated to default store tab");
        this.groupsRadioBtn().click();
        logGenerator.log().info("Selected groups radio button");
        this.enduserRadioBtn().click();
        logGenerator.log().info("Selected enduser radio button");
        this.addStore().click();
        browser.sleep(4000);
        logGenerator.log().info("Selected store radio button");
        browser.sleep(5000);
        this.submitBtn().click();
    }
    impersonation() {
        this.impersonationTab().click();
        logGenerator.log().info("Clicked on Impersonation tab");
        this.groupnameCheckbox().click();
        logGenerator.log().info("Selected Direct IT group");
        this.submit().click();
        logGenerator.log().info("Clicked on submit button");
    }
    search() {
        browser.sleep(50000);
        logGenerator.log().info("Clicked on submit button");
        // const timestamp = Date.now();
        this.searchTxtbox().sendKeys(data.user.fname + timestamp);
        logGenerator.log().info("Data given to searchbox");
        browser.sleep(50000);
    }
    createUser(firstname: string, lastname: string, adUseremailId: string) {

        this.userGroupsTab().click();
        logGenerator.log().info("Clicked on User groups tab");
        this.usersBtn().click();
        logGenerator.log().info("Clicked on Users button");
        this.createBtn().click();
        logGenerator.log().info("Clicked on Create button");
        this.firstName().sendKeys(firstname);
        logGenerator.log().info("Data given to first name field");
        browser.sleep(40000);
        this.lastName().sendKeys(lastname);
        browser.sleep(40000);
        logGenerator.log().info("Data given to last name field");
        this.impersonationToggle().click();
        logGenerator.log().info("Clicked on impersonation toggle");
        this.accountInfoTab().click();
        logGenerator.log().info("Clicked on account-info tab");
        this.adUser().click();
        logGenerator.log().info("Clicked on AD User toggle");
        this.adUserSearchTxtbox().sendKeys(adUseremailId);
        browser.sleep(40000);
        logGenerator.log().info("Data given to AD User Search textbox");
        this.searchIcon().click();
        logGenerator.log().info("Clicked on Search tab");
    }
    users() {
        this.userGroupsTab().click();
        logGenerator.log().info("Clicked on User groups tab");
        this.usersBtn().click();
        logGenerator.log().info("Clicked on Users button");
    }
    selectCreatedUser() {
        browser.sleep(30000);
        this.userID().click();
        logGenerator.log().info("Clicked on created user");
        browser.sleep(5000);
        this.lastName().clear();
        logGenerator.log().info("Data deleted in lastname textbox ");
        this.lastName().sendKeys("faiuser");
        logGenerator.log().info("Data given to lastname textbox ");
        browser.sleep(30000);
        this.submitButton().click();
        logGenerator.log().info("Clicked on submit button");
        browser.sleep(20000);
    }

    deleteUser() {
        this.delete().click();
        logGenerator.log().info("Deleted the created user");

    }
    goToGroups() {
        this.userGroupsTab().click();
        logGenerator.log().info("Clicked on User groups tab");

    }
    groups(groupname: string, groupDesc: string, adGroupName: string) {
        this.groupCreate().click();
        logGenerator.log().info("Clicked on Create button");
        this.groupnameTxtbox().sendKeys(userPage.groupNameInput);
        logGenerator.log().info("Data given to groupname textbox");
        this.groupDesc().sendKeys(groupDesc);
        logGenerator.log().info("Description given to Group Description textbox");
        this.activeDirectoryGroupName().sendKeys(adGroupName);
        logGenerator.log().info("Data given to Active Directory GroupName textbox");
        this.addBtn().click();
        logGenerator.log().info("Clicked on Add button");
        this.searchBtn().click();
        logGenerator.log().info("Clicked on Search button");
        this.groupSubmit().click();
        logGenerator.log().info("Clicked on Submit button");
    }
    searchingGroups(groupname:string) {
        browser.sleep(5000);
        this.groupsearch().sendKeys(userPage.groupNameInput);
        logGenerator.log().info("Data given to Search textbox");
    }
    selectUsersInExcludedNonADGroup() {
        browser.sleep(5000);
        this.getGroupName().click();
        logGenerator.log().info("Selected created group");
        browser.sleep(5000);
        this.searchExcludedNonADUser().sendKeys(data.groups.user1);
        logGenerator.log().info("Searched for Excluded Non-AD Group Users");
        this.nonADUsers2().click();
        logGenerator.log().info("Added excluded Non-AD Group User to Assigned Non-AD Group User");
        browser.sleep(5000);
        this.searchExcludedNonADUser().clear();
        logGenerator.log().info("Cleared Search textbox");
        this.searchExcludedNonADUser().sendKeys(data.groups.user2);
        logGenerator.log().info("Searched for Excluded Non-AD Group Users");
        this.nonADUsers1().click();
        logGenerator.log().info("Added excluded Non-AD Group User to Assigned Non-AD Group User");
        browser.sleep(5000);

    }
    submitinGroup() {
        this.groupSubmit().click();
        logGenerator.log().info("Clicked on Submit tab");

    }
    removeUsersFromGroup() {
        this.getGroupName().click();
        logGenerator.log().info("Selected created group");
        browser.sleep(50000);
        this.searchAssignedNonADUser().sendKeys(data.groups.user1);
        browser.sleep(50000);
        this.nonADUsers2().click();
        browser.sleep(50000);
        this.searchAssignedNonADUser().clear();
        browser.sleep(50000);
        this.searchAssignedNonADUser().sendKeys(data.groups.user2);
        browser.sleep(50000);
        this.nonADUsers1().click();
        browser.sleep(50000);

    }
    excludedNonADGroupuser1() {
        this.searchExcludedNonADUser().sendKeys(data.groups.user1);
        browser.sleep(5000);
    }
    excludedNonADGroupuser2() {
        this.searchExcludedNonADUser().clear();
        this.searchExcludedNonADUser().sendKeys(data.groups.user2);
        browser.sleep(5000);
    }
    addGroups() {
        this.groupCreate().click();
        logGenerator.log().info("Clicked on Create button");
        this.groupnameTxtbox().sendKeys(userPage.createdGroupInput);
        logGenerator.log().info("Data given to groupname textbox");
        this.groupDesc().sendKeys(data.groups.description);
        logGenerator.log().info("Description given to Group Description textbox");
        this.groupSubmit().click();
        logGenerator.log().info("Clicked on Submit button");
        this.groupsearch().sendKeys(userPage.createdGroupInput);
        this.newGroup().click();
        this.searchExcludedMSFGroups().sendKeys(userPage.groupNameInput);
        this.excludedMSFGroup().click();
        //this.groupSubmit().click();
        //logGenerator.log().info("Clicked on Submit button");

    }

}
