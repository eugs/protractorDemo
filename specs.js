var searchBtn = element(by.xpath('//*[@id="udemy"]/div[2]/div/div/div[3]/form/div/span/button/span'));
var orderField = element(by.xpath('//*[@id="udemy"]/div[2]/div/div/div[3]/top-filter-container/div[1]/sort/div/div/ul/li[3]/a'));
var checkboxEnglish =   element(by.xpath('//*[@id="udemy"]/div[2]/div/div/div[3]/top-filter-container/div[1]/top-filter[2]/div/ul/li[1]/a/span'));
var checkbox_paid = element(by.xpath('//*[@id="udemy"]/div[2]/div/div/div[3]/top-filter-container/div[1]/top-filter[4]/div/ul/li[1]/a/span'));
var firstItem = element(by.xpath
  ('//*[@id="udemy"]/div[2]/div/div/div[3]/ul/li[1]/search-course-card-container/div/div/div[1]/a/img'));
var price =   element(by.xpath('//*[@id="udemy"]/div[7]/div/div[2]/div[2]/div/div/div[2]/div[1]/div/div[2]/div/div/span[1]'));
var btn_addToCart =   element(by.xpath('//*[@id="udemy"]/div[7]/div/div[2]/div[2]/div/div/div[2]/div[1]/div/div[7]/div/div/add-to-cart/button'));
var icon_cart = element(by.xpath('//*[@id="udemy"]/div[1]/div[2]/div[4]/div[2]/cart-dropdown/div/div[1]/a'));

var search_text_loc = element(by.css('h1[data-purpose="search-header"] span'));
var title = element(by.css('head title'));


var EC = protractor.ExpectedConditions;

describe ("Checking site functionality", function () {
  var resource = "https://www.udemy.com/"

  beforeEach(function () {
    // browser.manage().timeouts().implicitlyWait(10000);
    console.log("\n...");
  });

  // it("should redirect to the correct page", function () {
  //   browser.get(resource);
  //   element(by.css('head title')).getText()
  //     .then(function (txt) {
  //       console.log("title: ", txt);
  //     })
  //   expect(element(by.css('head title')).getText()).toEqual('Udemy Online Courses - Learn Anything, On Your Schedule');
  // });

  xit("should search", function () {
    browser.get(resource);
    element(by.xpath('//*[@id="search-field-home"]')).sendKeys("angular")
    searchBtn.click();

    browser.driver.sleep(3000)
      .then(function () {
          element(by.css('h1[data-purpose="search-header"] span')).getText()
            .then(function (txt) {
              console.log("search text: ", txt);
        })
        expect(element(by.css('h1[data-purpose="search-header"] span')).getText()).toContain('Search results for "angular"');
    })

  });

  xit("should order", function () {
    //order
    element(by.css('#label-sort-filter')).click();
    orderField.click();

    // lang
    element(by.css('#label-top-filter-language')).click();
    checkboxEnglish.click()

    // price
    element(by.css('#label-top-filter-price')).click();
      // paid
    checkbox_paid.click();

    // choose
    browser.sleep(5000);
    browser.wait(EC.elementToBeClickable(firstItem), 5000);
    firstItem.click();

    browser.sleep(5000);

    price.getText()
      .then(function (text) {
          console.log("price: ", text);
      });

        // add to cart click
    btn_addToCart.click()
      // .then(function () {
        // browser.driver.sleep(10000);
      // });

      // browser.driver.sleep(10000);
  });



  it("should go to cart page", function () {
    browser.get('https://www.udemy.com/courses/')
      .then(function () {
        return  browser.wait(EC.elementToBeClickable(icon_cart), 5000);
      })
      .then(function () {
        return icon_cart.click()

      })
      .then(function () {
        console.log("go to cart");
      })
      .then(function () {
        // return browser.wait(EC.urlContains('//*[@id="udemy"]//h1/span'), 5000);
        // return browser.wait(EC.presenceOf(element(by.xpath('//*[@id="udemy"]//h1/span'))), 5000);
        // return browser.sleep(5000)
        // return clickWhenClickable(browser.driver.By.xpath('//*[@id="udemy"]//h1/span'), 12000);
        // browser.ignoreSynchronization = true;

        // click mouse 2 + js executor 2
        // refine xpathes
        // refactor

      })
      .then(function () {
          console.log('get url');
          return browser.driver.getCurrentUrl() // ERROR HERE, we get angular, but the app continue to work
          // use browser.driver
        })
      .then(function (url) {
        console.log("url: ", url);
        expect(url).toEqual('https://www.udemy.com/cart/');
      })

  });


function clickWhenClickable(locator, timeout) {
    browser.wait(function () {
        return browser.driver.findElement(locator).then(function (element) {

            return element.getText().then(function () {

                return true;
            }, function (err) {
                return false;
            })

        }, function (err) {
            console.log("reject ");
            return false;
        });
    }, timeout, 'Timeout waiting for ' + locator.value);
    ;
}







  //   .then(function () {
  //     browser.driver.sleep(5000);
  //   })





  xit("should go to cart page", function () {
    browser.get('https://www.udemy.com/courses/');
    // cart icon
    browser.wait(EC.elementToBeClickable(icon_cart), 5000);
    icon_cart.click()
      .then(function () {
        console.log("go to cart");
      });
  //   .then(function () {
  //     browser.driver.sleep(5000);
  //   })

    expect(browser.getCurrentUrl()).toEqual('https://www.udemy.com/cart/');
    });

  });









  // it("should order", function () {
  //   //order
  //   element(by.css('#label-sort-filter')).click();
  //
  //   element(by.xpath
  //     ('//*[@id="udemy"]/div[2]/div/div/div[3]/top-filter-container/div[1]/sort/div/div/ul/li[3]/a')).click();
  //
  //   lang
  //   element(by.css('#label-top-filter-language')).click();
  //   // english
  //   element(by.xpath('//*[@id="udemy"]/div[2]/div/div/div[3]/top-filter-container/div[1]/top-filter[2]/div/ul/li[1]/a/span')).click();
  //
  //   browser.driver.sleep(3000);
  //
  //   add to cart
  //   element(by.xpath
  //     ('//*[@id="udemy"]/div[2]/div/div/div[3]/ul/li[1]/search-course-card-container/div/div/div[1]/a/img')).click()
  //
  //     .then(function () {
  //       element(by.xpath('//*[@id="udemy"]/div[7]/div/div[2]/div[2]/div/div/div[2]/div[1]/div/div[2]/div/div/span[1]')).getText()
  //       .then(function (text) {
  //           console.log("price: ", text);
  //       });
  //     });
  //
  //     element(by.xpath('//*[@id="udemy"]/div[7]/div/div[2]/div[2]/div/div/div[2]/div[1]/div/div[7]/div/div/add-to-cart/button')).click()
  //
  //     browser.getCurrentUrl().then(function (url) {
  //       console.log("URL: ", url);
  //     });
  //
  //     browser.driver.sleep(3000);
  // })
  //
