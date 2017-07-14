describe ("Checking site functionality", function () {
  var resource = "https://www.udemy.com/"

  beforeEach(function () {
    console.log("\n...");
    browser.manage().timeouts().implicitlyWait(0);
  });

  // it("should redirect to the correct page", function () {
  //   // expect(browser.getCurrentUrl()).toEqual("https://www.lego.com/en-us/");
  // });

  it("should search", function () {
    browser.get(resource);
    // browser.waitForAngular();
    // browser.driver.sleep(1000)

    element(by.xpath('//*[@id="search-field-home"]')).sendKeys("angular")
    element(by.xpath('//*[@id="udemy"]/div[2]/div/div/div[3]/form/div/span/button/span')).click();
    browser.driver.sleep(1000);
  })

  it("should order", function () {
    //order
    element(by.css('#label-sort-filter')).click();
    element(by.xpath
      ('//*[@id="udemy"]/div[2]/div/div/div[3]/top-filter-container/div[1]/sort/div/div/ul/li[3]/a')).click();

    // lang
    element(by.css('#label-top-filter-language')).click();
      // english
    element(by.xpath('//*[@id="udemy"]/div[2]/div/div/div[3]/top-filter-container/div[1]/top-filter[2]/div/ul/li[1]/a/span')).click()

    // price
    element(by.css('#label-top-filter-price')).click();
      // paid
    element(by.xpath('//*[@id="udemy"]/div[2]/div/div/div[3]/top-filter-container/div[1]/top-filter[4]/div/ul/li[1]/a/span')).click();

    // browser.driver.sleep(1000);

    // choose
    element(by.xpath
      ('//*[@id="udemy"]/div[2]/div/div/div[3]/ul/li[1]/search-course-card-container/div/div/div[1]/a/img')).click()

      // browser.driver.sleep(1000);

        element(by.xpath('//*[@id="udemy"]/div[7]/div/div[2]/div[2]/div/div/div[2]/div[1]/div/div[2]/div/div/span[1]')).getText()
        .then(function (text) {
            console.log("price: ", text);
        });

        // add to cart click
        element(by.xpath('//*[@id="udemy"]/div[7]/div/div[2]/div[2]/div/div/div[2]/div[1]/div/div[7]/div/div/add-to-cart/button')).click()
          .then(function () {
            browser.driver.sleep(5000);
          })

        // cart icon
        element(by.xpath('//*[@id="udemy"]/div[1]/div[1]/div[4]/div[2]/cart-dropdown/div/div[1]/a')).click()
        .then(function () {
          console.log("go to cart");
        })
        .then(function () {
          browser.driver.sleep(5000);
        })

        // expect(browser.getCurrentUrl()).toEqual('https://www.udemy.com/cart/');
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
  });
