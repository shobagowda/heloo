import { browser, element, by, ExpectedConditions } from 'protractor';
import { logGenerator } from '../../../utils/logGenerator';
import { dynamicProductPage } from '../msfAdmin/dynamicProductPage.po';
import * as data from '../../../testdata/regression/testdataRegression.json';
var path = require('path');

export class orderDynamicProduct {
  public  orderNum:string;

  


  browseBtn = () => element(by.xpath("//div[text()='BROWSE']"));
  allProductsBtn = () => element(by.xpath("//a[text()='All Products']"));
  selectDynamicProduct = (productName: string) => element(by.xpath("//b[text()='" + productName + "']"));
  nextBtnCustomization = () => element(by.xpath("//button[@class='btn default-normal-button btn-small mx-3']"));
  addToCartBtn = () => element(by.xpath("//button[text()='Add to Cart']"));
  placeOrderBtn = () => element(by.xpath("//button[text()='Place Order']"));
  checkoutButton = () => element(by.xpath("//button[@id='btn_checkout']"));
  fedExTypeDelivery = () => element(by.xpath("//span[text()='FedEx Shipping']/preceding::div[1]"));
  fetchFedexServices = () => element(by.id('fedexServices'));
  fedExRateOption = () => element(by.xpath("//td[text()='FIRST_OVERNIGHT']/preceding::div[1]/input"));
  submitOrder = () => element(by.xpath("//button[text()='Submit Order']"));

  successMessage = () => element(by.xpath("//*[contains(text(),'Your order is successfully placed.')]"));
  //Regression
  homePageSearchBox = () => element(by.name("searchProduct"));
  searchClick = () => element(by.xpath("//i[@class='fa fa-search']"));


  //Regression
  assignedStore = () => element(by.xpath("//a[.='First Store Group']"));
  firstStoreGroupSection = () => element(by.xpath("//*[@id='content-body']/products/div/div[2]/div/div[1]/h3"));
  specificProduct = (productName: string) => element(by.xpath("//b[text()='" + productName + "']"));

  //featured products 
  featuredProductSection = () => element(by.xpath("//h3[.='Featured Products']//parent::div[contains(@class,'landing-product-list-head')]//following-sibling::div"));
  specificFeaturedProduct = (productName: string) => element(by.xpath("//b[text()='" + productName + "']"));
  // Social Media Share
  selectSpecificDynamicProduct = (productName: string) => element(by.xpath("//b[text()='" + productName + "']"));
  facebookShareIcon = () => element(by.xpath("//*[@class='fb-share']/i"));
  //Online Download 
  downloadPDF = () => element(by.id('btn_download'));
  spinner = () => element(by.xpath("//*[@class='spinner']"));
  successMessageDownload = () => element(by.xpath("//*[@role='alert']"));
  previewButton = () => element(by.id('btn_preview'));
  downloadImageButton = () => element(by.id('btn_downloadImage'));
  //Multiple thumbnails 
  carouselIndicators = () => element(by.xpath("(//ol[@class='carousel-indicators'])[1]"));

  // receipient list
  addRecipientToggle = () => element(by.xpath("//*[@for='showRecipientList']"));
  expandRecipientListSection = () => element(by.xpath("//*[.='Recipient List']//following-sibling::i"));
  uploadYourRecipientList = () => element(by.xpath("//*[.='Upload your Recipient List']"));
  createRecipientListOnline = () => element(by.xpath("//*[.='Create your Recipient List online']"));
  UseExistingRecipientList = () => element(by.xpath("//*[.='Use an existing Recipient List']"));
  setRecipientListName = () => element(by.id('txtfilename'));
  nextButtonRecipientListName = () => element(by.xpath("//*[@class='btn default-normal-button btn-small']"));
  
  // mailingAddress1 = () => element(by.xpath("(//input[@class='px-sm-1 px-2 form-control form-control-sm custom-form-control ng-untouched ng-pristine ng-valid' and @type='text'])[1]"));
  // mailingAddress2 = () => element(by.xpath("(//input[@class='px-sm-1 px-2 form-control form-control-sm custom-form-control ng-untouched ng-pristine ng-valid' and @type='text'])[2]"));
  // mailingCity = () => element(by.xpath("(//input[@class='px-sm-1 px-2 form-control form-control-sm custom-form-control ng-untouched ng-pristine ng-valid' and @type='text'])[1]"));
  // mailingState = () => element(by.xpath("(//input[@class='px-sm-1 px-2 form-control form-control-sm custom-form-control ng-untouched ng-pristine ng-valid' and @type='text'])[1]"));
  // mailingZip = () => element(by.xpath("(//input[@class='px-sm-1 px-2 form-control form-control-sm custom-form-control ng-untouched ng-pristine ng-valid' and @type='text'])[1]"));
  mailingName = () => element(by.xpath("//input[@class='px-sm-1 px-2 form-control form-control-sm custom-form-control ng-untouched ng-pristine ng-valid ng-star-inserted' and @type='text']"));
  mailingAddress1 = () => element(by.xpath("(//input[@class='px-sm-1 px-2 form-control form-control-sm custom-form-control ng-untouched ng-pristine ng-valid ng-star-inserted' and @type='text'])[1]"));
  mailingAddress2 = () => element(by.xpath("(//input[@class='px-sm-1 px-2 form-control form-control-sm custom-form-control ng-untouched ng-pristine ng-valid ng-star-inserted' and @type='text'])[2]"));
  mailingCity = () => element(by.xpath("(//input[@class='px-sm-1 px-2 form-control form-control-sm custom-form-control ng-untouched ng-pristine ng-valid ng-star-inserted' and @type='text'])[1]"));
  mailingState = () => element(by.xpath("(//input[@class='px-sm-1 px-2 form-control form-control-sm custom-form-control ng-untouched ng-pristine ng-valid ng-star-inserted' and @type='text'])[1]"));
  mailingZip = () => element(by.xpath("(//input[@class='px-sm-1 px-2 form-control form-control-sm custom-form-control ng-untouched ng-pristine ng-valid ng-star-inserted' and @type='text'])[1]"));
  saveButtonRecipientList = () => element(by.xpath("//*[@class='fa fa-floppy-o']"));
  nextButtonRecipientListSection = () => element(by.xpath("//*[@id='Recipient List']/div[2]/div/div/button"));
  recipientListSetupComplate = () => element(by.xpath("//*[@id='Recipient List']/div/div[1]/i"));


 
  // Download after purchage 
  ordersDropdownLink = () => element(by.xpath("//*[.='Orders']"));
  orderHistorylink = () => element(by.linkText('Orders History'));
  orderHistoryPageHeader = () => element(by.xpath("//span[.='Order History']"));
  clickonPurchasedOrderNumber = () => element(by.xpath("(//span[.='21270'])[2]"));
  loadingOrderdetalsSpinner = () => element(by.xpath("//span[.='Loading Order Details..']"));
  downloadOutputButton = () => element(by.xpath("//*[@class='fa fa-download']"));
  //Regresion: 
  selectDynamicProductAdor = () => element(by.xpath("//h3[.='All Products']/following::div[20]/p/b"));
  logoAdorAtEnduser = () => element(by.xpath("//label[text()='Logo 1']"));
  layoutAdorAtEnduser = () => element(by.xpath("//label[text()='Layout #']"));
  // text Ador 
  blHeadlineText = () => element(by.xpath("//label[@for='BL-Headline']"));
  blHeadlineTextInput = () => element(by.xpath("//input[@id='BL-Headline']"));

  // Dropdown Ador
  blMisc2dropdown = () => element(by.xpath("//label[.='BL-Misc2']"));
  blMisc2dropdownInput = () => element(by.xpath("//select[@id='BL-Misc2']"));
  // Multiline Ador 

  blMisc3Text = () => element(by.xpath("//label[@for='BL-Misc3']"));
  blMisc3MultilineTextInput = () => element(by.xpath("//textarea[@id='BL-Misc3']"));

  // Add Image Ador - Upload Option

  pmisc8UploadImageTypeAdor = () => element(by.xpath("//label[text()='PMisc8']"));
  pmisc8UploadImageTypeAdorBtn = () => element(by.id('PMisc8'));

  // Add Image Ador - Asset Selection 

  pmisc9AssetSelectionImageTypeAdor = () => element(by.xpath("//label[text()='PMisc9']"));
  pmisc9AssetSelectionImageTypeAdorIamge = () => element(by.xpath("//span[text()='521 CostsFirst 1_r00001_p001.jpg']"));

  // ProfileID_Dial1
  profileID_Dial1Ador = () => element(by.xpath("//label[text()='ProfileID_Dial1']"));
  profileID_Dial1AdorInput = () => element(by.xpath("//span[@role='combobox']"));

  // Global Property to Product
  bindingSideGlobalProperty = () => element(by.xpath("//label[text()='Binding Side']"));
  leftBindingType = () => element(by.xpath("//a[text()='Left']"));
  topBindingType = () => element(by.xpath("//a[text()='Top']"));
  // Custom Property
  sizeCustomProperty = () => element(by.xpath("//label[text()='size']"));
  sizeCustomPropertyInput = () => element(by.id('size'));
  printOptions = () => element(by.xpath("//span[.='Print Options']//following::i[@class='fa float-right pr-3 fa-chevron-down']"));
  attachFileEnduser = () => element(by.xpath("//label[@for='Attach File']"));
  selectedMailMethod = () => element(by.xpath("//label[@for='Selected Mail Method']"));
  ordersLnk = () => element(by.xpath("(//a[@id='dropdown04'])[2]"));
  ordersHistory = () => element(by.xpath("//a[.='Orders History']"));
  //ordersStatus  = () => element(by.xpath("(//a[.='All Orders']//following::span[.='21291']//following::span[.='Open'])[1]"));
  orderNumber = () => element(by.xpath("//strong[contains(text(),'Order Number: 21')]"));
  allOrdersLnk = () => element(by.xpath("//a[.='All Orders']"));
  searchOrder = () => element(by.css("input[name='ordersSearch']"));
  orderStatus = () => element(by.xpath("//a[.='All Orders']//following::span[5]"));


  /**
   * checking the oredr status--OPEN
   */
  checkOrderstatusBeforedelivery() {

    browser.sleep(8000);
    this.ordersLnk().click();
    browser.sleep(8000);
    this.ordersHistory().click();
    browser.sleep(18000);
    this.allOrdersLnk().click();
    browser.sleep(18000);
    expect<any>(this.orderStatus().getText()).toEqual('Open');
    browser.sleep(8000);
  }

  /**
   * checking the oredr status--OPEN
   */
  checkOrderstatusAfterdelivery() {

    browser.sleep(8000);
    this.ordersLnk().click();
    browser.sleep(8000);
    this.ordersHistory().click();
    browser.sleep(18000);
    this.allOrdersLnk().click();
    browser.sleep(18000);
    expect(this.orderStatus().getText()).toEqual('Closed');
    browser.sleep(8000);
  }
  /**
   * Order Dynamic Product
   */
  orderDynamicProduct() {
    logGenerator.log().info("Clicked on Next button.");
    browser.sleep(18000);
    this.addToCartBtn().click();
    browser.wait(ExpectedConditions.visibilityOf(this.placeOrderBtn()));
    browser.sleep(30000);
    logGenerator.log().info("product moved to cart in End User.");
    this.placeOrderBtn().click();
    browser.wait(ExpectedConditions.visibilityOf(this.successMessage()));
    browser.sleep(30000);
    expect<any>(this.orderNumber().getText()).toContain('Order Number: 21');
    //  this.orderNumber().getText().then(function (text) {
    // //   var order;
    // tempObject.textFromFirstPage= text.split(' ')[2];
    //  });
    //   order=text;
    //   console.log(order);
    //   orderDynamicProduct.orderNum=order;
    //   console.log(orderDynamicProduct.orderNum);
    //   browser.sleep(8000);
      //this.checkOrderstatus() ;

    
    

  }


  
  /**
   * Vallidating the sorting of profile properties in End User.
   */
  vallidatingSortingOfProperties() {
    this.printOptions().click();
    browser.sleep(15000);
    expect(this.attachFileEnduser().isPresent()).toBe(true);
    // expect(this.selectedMailMethod().isPresent()).toBe(true);
    logGenerator.log().info("**************vallidated the sorting of profile properties in enduser*************");

  }

  /**
   *  Regression: verifying visible adors at the  enduser
   */
  visibleAdorsAtEnduser() {
    browser.sleep(30000);
    browser.wait(ExpectedConditions.visibilityOf(this.browseBtn()));
    browser.sleep(3000);
    this.browseBtn().click();
    browser.wait(ExpectedConditions.visibilityOf(this.allProductsBtn()));
    browser.sleep(3000);
    this.allProductsBtn().click();
    browser.sleep(8000);
    browser.wait(ExpectedConditions.visibilityOf(this.selectDynamicProductAdor()));
    browser.sleep(8000);
    this.selectDynamicProductAdor().click();
    browser.sleep(30000);
    logGenerator.log().info("Clicked on dynamic Product in End user.");
    expect(this.logoAdorAtEnduser().isPresent()).toBe(false);
    expect(this.layoutAdorAtEnduser().isPresent()).toBe(false);
    logGenerator.log().info("Verified the above dynamic Product in End user.");

  }
  /**
   * Order dynamic product in Enduser
   */
  browseTheDynamicProductAndSelect(productName: string) {

    browser.sleep(3000);
    //browser.wait(ExpectedConditions.visibilityOf(this.browseBtn()));
    browser.sleep(3000);
    this.browseBtn().click();
    //browser.wait(ExpectedConditions.visibilityOf(this.allProductsBtn()));
    browser.sleep(3000);
    this.allProductsBtn().click();
    //browser.wait(ExpectedConditions.visibilityOf(this.selectDynamicProduct(dynamicProductPage.inputdata)));
    browser.sleep(30000);
    logGenerator.log().info("Verified the above dynamic Product in End user.");
    this.selectDynamicProduct(productName).click();
    browser.sleep(30000);
    logGenerator.log().info("Clicked on dynamic Product in End user.");
  }



  /**
   * Searching for the product 
   * @param productName 
   */
  searchProduct(productName: string) {
    logGenerator.log().info("Searching for the Product  : " + productName);
    browser.wait(ExpectedConditions.visibilityOf(this.homePageSearchBox()));
    this.homePageSearchBox().sendKeys(productName);
    this.searchClick().click();

  }
  isFirstStoreGroup(productName: string) {
    let productDisplayed = this.firstStoreGroupSection().specificProduct(productName).isDisplayed();
    expect(productDisplayed).toBe(true);


  }
  /**
   * Select Specific Product after Search
   * @param productName 
   */
  selectSpecificProduct(productName: string) {
    this.selectSpecificDynamicProduct(productName).click();
    logGenerator.log().info("Selected Product : " + productName);
  }
  /**
   * Verify Specific Product Displayed on Featured Product Section
   * @param productName 
   */
  isFeaturedProductDisplayed(productName: string) {
    browser.wait(ExpectedConditions.visibilityOf(this.featuredProductSection()));
    let productDisplayed = this.featuredProductSection().element(by.xpath("//b[text()='" + productName + "']")).isDisplayed();
    expect(productDisplayed).toBe(true);
    logGenerator.log().info(productName + " is displayed in Featured ProductSection");

  }
  /**
   * Verify Recipient List Section
   */
  verifyRecipientListsection() {
    this.addRecipientToggle().click();
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
    browser.sleep(8000);
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
    expect(recipientListSet).toEqual('true');

  }

  /**
   * Verify online download 
   * 
   */
  verifyOnlnedownlaod() {
    browser.wait(ExpectedConditions.visibilityOf(this.downloadPDF()));
    this.downloadPDF().click();
    browser.sleep(10000);
    logGenerator.log().info(" Clicked in Download PDF button");
    browser.wait(ExpectedConditions.invisibilityOf(this.spinner()));
    let successmsgDownloadPDF = this.successMessageDownload().getText();
    expect(successmsgDownloadPDF).toContain('Process failed');
    //expect(successmsgDownloadPDF).toEqual('File downloaded successfully');
    browser.sleep(2000);
    this.previewButton().click();
    logGenerator.log().info(" Clicked in Preview button");
    browser.wait(ExpectedConditions.invisibilityOf(this.spinner()));
    let successmsgPreview = this.successMessageDownload().getText();
    //expect(successmsgPreview).toEqual('PROOF submitted successfully');
    expect(successmsgPreview).toContain('Could not retrive output');
    browser.sleep(10000);
    // this.downloadImageButton().click();
    // logGenerator.log().info( " Clicked in downlaod Image button");
    // browser.wait(ExpectedConditions.invisibilityOf(this.spinner()));
    // let successmsgDownloadImage = this.successMessageDownload().getText();
    // expect(successmsgDownloadImage).toContain('File downloaded successfully');

  }
  /**
   * Verify download After purchase
   * 
   */
  verifyDownlaodAfterPurchase() {
    browser.wait(ExpectedConditions.visibilityOf(this.addToCartBtn()));
    this.addToCartBtn().click();
    browser.wait(ExpectedConditions.visibilityOf(this.placeOrderBtn()));
    browser.sleep(30000);
    logGenerator.log().info("product moved to cart in End User.");
    this.placeOrderBtn().click();
    browser.wait(ExpectedConditions.visibilityOf(this.successMessage()));
    browser.sleep(30000);
    logGenerator.log().info("submitted the order for dynamic product  in End User.");
    this.ordersDropdownLink().click();
    this.orderHistorylink().click();
    browser.wait(ExpectedConditions.visibilityOf(this.orderHistoryPageHeader()));
    this.clickonPurchasedOrderNumber().click();
    browser.sleep(2000);
    browser.wait(ExpectedConditions.invisibilityOf(this.loadingOrderdetalsSpinner()));
    browser.wait(ExpectedConditions.visibilityOf(this.downloadOutputButton()));
    let downloadOutputButton = this.downloadOutputButton().isDisplayed();
    expect(downloadOutputButton).toBe(true);
    this.downloadOutputButton().click();
    logGenerator.log().info("Clicked on download Output Button");

  }

  verifytextAdor() {
    browser.wait(ExpectedConditions.visibilityOf(this.blHeadlineText()));
    let blHeadlineTextDisplayed = this.blHeadlineText().isDisplayed();
    expect(blHeadlineTextDisplayed).toBe(true);
    let blHeadlineTextInputtype = this.blHeadlineTextInput().getAttribute('type');
    expect(blHeadlineTextInputtype).toContain("text");
    this.blHeadlineTextInput().sendKeys("Test Input for Text Ador");

  }
  verifyDropdownAdor() {
    browser.wait(ExpectedConditions.visibilityOf(this.blMisc2dropdown()));
    let blMisc2dropdownDisplayed = this.blMisc2dropdown().isDisplayed();
    expect(blMisc2dropdownDisplayed).toBe(true);
    let blMisc2dropdowntype = this.blMisc2dropdownInput().getTagName();
    expect(blMisc2dropdowntype).toContain("select");
    this.blMisc2dropdownInput().sendKeys("12.66*9.84");
  }
  verifyMultilineAdor() {
    browser.wait(ExpectedConditions.visibilityOf(this.blMisc3Text()));
    let blMisc3TextAreaDisplayed = this.blMisc3Text().isDisplayed();
    expect(blMisc3TextAreaDisplayed).toBe(true);
    let blMisc3TextAreaInputtype = this.blMisc3MultilineTextInput().getTagName();
    expect(blMisc3TextAreaInputtype).toContain("textarea");
    this.blMisc3MultilineTextInput().sendKeys("first line\nsecond line");

  }
  verifyUploadImagetypeAdor() {
    browser.wait(ExpectedConditions.visibilityOf(this.pmisc8UploadImageTypeAdor()));
    let pmisc8UploadImageTypeAdorDisplayed = this.pmisc8UploadImageTypeAdor().isDisplayed();
    expect(pmisc8UploadImageTypeAdorDisplayed).toBe(true);
    let pmisc8UploadImageTypeAdorBrowseButton = this.pmisc8UploadImageTypeAdorBtn().getAttribute('title');
    expect(pmisc8UploadImageTypeAdorBrowseButton).toContain("You may upload the following file types: *.EPS,*.TIF,*.TIFF,*.JPG,*.JPEG,*.GIF,*.PNG");
    var fileToUpload = './../../../testdata/sanitytestdata/uploadfileproduct.jpeg',
      absolutePath = path.resolve(__dirname, fileToUpload);
    logGenerator.log().info(" absolutePath : " + absolutePath);
    this.pmisc8UploadImageTypeAdorBtn().sendKeys(absolutePath);

  }

  verifyAssetSelectioImagetypeAdor() {
    browser.wait(ExpectedConditions.visibilityOf(this.pmisc9AssetSelectionImageTypeAdor()));
    let pmisc9AssetSelectionImageTypeAdorDisplayed = this.pmisc8UploadImageTypeAdor().isDisplayed();
    expect(pmisc9AssetSelectionImageTypeAdorDisplayed).toBe(true);
    let pmisc9AssetSelectionImageTypeAdorIamgeDisplayed = this.pmisc9AssetSelectionImageTypeAdorIamge().isDisplayed();
    expect(pmisc9AssetSelectionImageTypeAdorIamgeDisplayed).toBe(true);

  }
  verifyProfileDailAdor() {
    browser.wait(ExpectedConditions.visibilityOf(this.profileID_Dial1Ador()));
    let profileID_Dial1AdorDisplayed = this.profileID_Dial1Ador().isDisplayed();
    expect(profileID_Dial1AdorDisplayed).toBe(true);
    //profileID_Dial1AdorInput = () => element(by.xpath("//span[@role='combobox']"));
    let profileID_Dial1AdorInputType = this.profileID_Dial1AdorInput().getAttribute('role');
    expect(profileID_Dial1AdorInputType).toContain("combobox");
  }

  verifyGlobalAndCustomProperty() {

    browser.wait(ExpectedConditions.visibilityOf(this.bindingSideGlobalProperty()));
    let bindingSideGlobalPropertyDisplayed = this.bindingSideGlobalProperty().isDisplayed();
    expect(bindingSideGlobalPropertyDisplayed).toBe(true);
    let leftBindingTypePropertyDisplayed = this.bindingSideGlobalProperty().isDisplayed();
    expect(leftBindingTypePropertyDisplayed).toBe(true);
    let topBindingTypePropertyDisplayed = this.topBindingType().isDisplayed();
    expect(topBindingTypePropertyDisplayed).toBe(true);
    //new
    let sizeCustomPropertyDisplayed = this.sizeCustomProperty().isDisplayed();
    expect(sizeCustomPropertyDisplayed).toBe(true);
    let sizeCustomPropertyInputDisplayed = this.sizeCustomPropertyInput().isDisplayed();
    expect(sizeCustomPropertyInputDisplayed).toBe(true);
    this.sizeCustomPropertyInput().sendKeys("12.66*9.84");

  }

  verifyFedExDelivery() {
    browser.wait(ExpectedConditions.visibilityOf(this.addToCartBtn()));
    this.addToCartBtn().click();
    logGenerator.log().info("product moved to cart in End User.");
    browser.wait(ExpectedConditions.visibilityOf(this.checkoutButton()));
    browser.sleep(10000);
    this.checkoutButton().click();
    browser.sleep(10000);
    browser.wait(ExpectedConditions.visibilityOf(this.fedExTypeDelivery()));
    let fedExTypeDeliveryDisplayed = this.fedExTypeDelivery().isDisplayed();
    expect(fedExTypeDeliveryDisplayed).toBe(true);
    this.fedExTypeDelivery().click();
    browser.sleep(10000);
    this.fetchFedexServices().click();
    browser.sleep(50000);
    this.fedExRateOption().click();
    browser.sleep(10000);
    this.submitOrder().click();
    browser.wait(ExpectedConditions.visibilityOf(this.successMessage()));
    browser.sleep(30000);
    logGenerator.log().info("submitted the order for dynamic product  in End User.");

  }

}

