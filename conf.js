exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  multiCapabilities: [
    {
      'browserName' : 'chrome'
    },
    // {
    //   'browserName' : 'firefox'
    // }
  ],

  onPrepare: function () {
    browser.driver.manage().window().setSize(1200, 800);
  },

  specs:
  ['specs.js'],


  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }

};
