import { browser, element, by, ExpectedConditions, } from 'protractor';
import { logGenerator } from '../../../utils/logGenerator';
import { creatingStaticProduct } from '../msfAdmin/staticProductPage.po';
var path = require('path');

export class orderStaticProductPage {
  browseBtn = () => element(by.xpath("//div[text()='BROWSE']"));
  allProductsBtn = () => element(by.xpath("//a[text()='All Products']"));
  selectStaticProduct = () => element(by.xpath("//b[text()='" + creatingStaticProduct.inputDataStaticProduct + "']"));
  addToCartBtn = () => element(by.xpath("//button[text()='Add to Cart']"));
  checkoutBtn = () => element(by.xpath("//button[contains(text(),'Checkout')]"));
  submitOrderBtn = () => element(by.xpath("//button[contains(text(), 'Submit Order')]"));
  successMessage = () => element(by.xpath("//*[contains(text(),'Your order is successfully placed.')]"));
  //Regression
  homePageSearchBox = () => element(by.name("searchProduct"));
  searchClick = () => element(by.xpath("//i[@class='fa fa-search']"));
  selectSpecificStaticProduct = (productName: string) => element(by.xpath("//b[text()='" + productName + "']"));
  newlyAddedProduct = (productName: string) => element(by.xpath("//b[.='" + productName + "']"));
  newlyAddedProductsTab = () => element(by.xpath("//h3[.='Newly Added Products']"));
  viewALlNewlyAdded = () => element(by.xpath("//h3[.='Newly Added Products']//following::a[.='View All']"));
  recentlyOrderedProduct = (productName: string) => element(by.xpath("//b[.='" + productName + "']"));
  recentlyOrderedProductsTab = () => element(by.xpath("//h3[.='Recently Ordered']"));
  viewALlRecentlyOrdered = () => element(by.xpath("(//h3[.='Recently Ordered']//following::a[.='View All'])[1]"));

  featuredProduct = (productName: string) => element.all(by.xpath("//b[.='" + productName + "']"));
  featuredProductsTab = () => element(by.xpath("//h3[.='Featured Products']"));
  viewALlFeaturedProducts = () => element(by.xpath("(//h3[.='Featured Products']//following::a[@class='primary-normal-button text-center' and text()='View All'])[1]"));
  productsInBrowse = () => element(by.xpath("(//a[text()='All Products']//following::a[.='First Store Group'])[1]"));
  searchBox = () => element(by.name('searchProduct'));
  footerLnk = () => element(by.className('menu-header'));

  /**
* Used to verify products are visible to user under Footer.
*/
  visibleToUserUnderFooter(productName: string) {
    this.footerLnk().click();
    browser.sleep(8000);
    expect<any>(this.featuredProduct(productName).isPresent());
    element.all(by.className('productNameHover pcursor word-break')).count().then(function (ele) {
      console.log(ele);
    });
    // let sum = element.all(by.className('productNameHover pcursor word-break'));
    // expect(sum.count()).toBeLessThanOrEqual(20);
  }

  /**
 * Used to verify products are visible to user under Search.
 */
  visibleToUserUnderSearch(productName: string) {
    this.searchBox().sendKeys(creatingStaticProduct.inputDataStaticProduct);
    browser.sleep(8000);
    expect<any>(this.featuredProduct(productName).isPresent());
    // element.all(by.xpath("//h3[.='Featured Products']//following::b[@class='productNameHover pcursor word-break']")).count().then(function (ele) {
    //   console.log(ele);
    // });
    // let sum = element.all(by.xpath("//h3[.='Featured Products']//following::b[@class='productNameHover pcursor word-break']"));  
    // expect(sum.count()).toBeLessThanOrEqual(20);
  }
  
  /**
   * Used to verify products are visible to user under Browse
   */
  visibleToUserUnderBrowse(productName: string) {
    browser.sleep(5000);
    this.browseBtn().click();
    browser.sleep(8000);
    this.productsInBrowse().click();
    browser.sleep(8000);
    expect<any>(this.featuredProduct(productName).isPresent());
    element.all(by.className('productNameHover pcursor word-break')).count().then(function (ele) {
      console.log(ele);
    });
    // let sum = element.all(by.className('productNameHover pcursor word-break'));
    // expect(sum.count()).toBeLessThanOrEqual(20);
  }

  /**
  * Used to verify user can view 20 featured products in slider for  which user has access
  * 
  */
  featuredProductsWhicHasUserAccess(productName: string) {
    expect<any>(this.featuredProduct(productName).isPresent());
    expect<any>(this.featuredProductsTab().isPresent());
    browser.sleep(20000);
    this.viewALlFeaturedProducts().click();
    browser.sleep(8000);
    element.all(by.xpath("//h3[.='Featured Products']//following::b[@class='productNameHover pcursor word-break']")).count().then(function (ele) {
      console.log(ele);
    });
    let sum = element.all(by.xpath("//h3[.='Featured Products']//following::b[@class='productNameHover pcursor word-break']"));
    expect(sum.count()).toBeLessThanOrEqual(20);
  }

  /**
   * Used to view 20 recently ordered products in slider for which user has access
   * 
   */
  recentlyOrderedWhicHasUserAccess(productName: string) {
    expect<any>(this.recentlyOrderedProduct(productName).isPresent());
    expect<any>(this.recentlyOrderedProductsTab().isPresent());
    browser.sleep(20000);
    this.viewALlRecentlyOrdered().click();
    browser.sleep(8000);
    element.all(by.xpath("//h3[.='Recently Ordered Products']//following::b[@class='productNameHover pcursor word-break']")).count().then(function (ele) {
      console.log(ele);
    });
    let sum = element.all(by.xpath("//h3[.='Recently Ordered Products']//following::b[@class='productNameHover pcursor word-break']"));
    expect(sum.count()).toBeLessThanOrEqual(20);
  }

  /**
   * Used to view 20  newly added products in slider for which user has access
   */
  newlyAddedProducts(productName: string) {
    expect<any>(this.newlyAddedProduct(productName).isPresent());
    expect<any>(this.newlyAddedProductsTab().isPresent());
    browser.sleep(20000);
    this.viewALlNewlyAdded().click();
    browser.sleep(8000);
    element.all(by.xpath("//h3[.='Newly Added Products']//following::b[@class='productNameHover pcursor word-break']")).count().then(function (ele) {
      console.log(ele);
    });
    let sum = element.all(by.xpath("//h3[.='Newly Added Products']//following::b[@class='productNameHover pcursor word-break']"));
    expect(sum.count()).toBeLessThanOrEqual(20);
  }


  /**
   *Ordering static product in EndUser
   */
  browseTheStaticProductAndAddToCart() {
    browser.sleep(3000);
    browser.wait(ExpectedConditions.visibilityOf(this.browseBtn()));
    browser.sleep(3000);
    this.browseBtn().click();
    browser.wait(ExpectedConditions.visibilityOf(this.allProductsBtn()));
    browser.sleep(3000);
    this.allProductsBtn().click();
    browser.wait(ExpectedConditions.visibilityOf(this.selectStaticProduct()));
    browser.sleep(8000);
    logGenerator.log().info("Verified the above Static Product in EU.");
    this.selectStaticProduct().click();
    browser.sleep(30000);
    logGenerator.log().info("Clicked on Static Product in EU.");
    this.addToCartBtn().click();
    browser.wait(ExpectedConditions.visibilityOf(this.checkoutBtn()));
    browser.sleep(30000);
    logGenerator.log().info("product moved to cart in EU.");
  }

  /**
   * Placing an order static product
   */
  placingOrder() {
    this.checkoutBtn().click();
    browser.wait(ExpectedConditions.visibilityOf(this.submitOrderBtn()));
    browser.sleep(3000);
    logGenerator.log().info("clicked on check out button");
    this.submitOrderBtn().click();
    browser.wait(ExpectedConditions.visibilityOf(this.successMessage()));
    browser.sleep(30000);
    logGenerator.log().info("submitted the order in EU.");

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

  /**
   * Select Specific Product after Search
   * @param productName 
   */
  selectSpecificProduct(productName: string) {
    browser.wait(ExpectedConditions.visibilityOf(this.selectSpecificStaticProduct(productName)));
    this.selectSpecificStaticProduct(productName).click();
    logGenerator.log().info("Selected Product : " + productName);
  }

  /**
   * Its used to add products to cart in end user
   */
  addToCart() {
    browser.sleep(30000);
    browser.wait(ExpectedConditions.visibilityOf(this.addToCartBtn()));
    this.addToCartBtn().click();
    browser.wait(ExpectedConditions.visibilityOf(this.checkoutBtn()));
    browser.sleep(30000);
    logGenerator.log().info("product moved to cart in EU.");
  }
}