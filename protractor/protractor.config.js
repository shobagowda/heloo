// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
//
//Required resources
var HTMLReport = require('protractor-html-reporter-2');
var jasmineReporters = require('jasmine-reporters');
var fs = require('fs-extra');
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

const ts = require('ts-node').register({
  project: 'e2e/tsconfig.e2e.json',
});
require('events').EventEmitter.defaultMaxListeners = Infinity;

exports.config = {
  directConnect: true,
  allScriptsTimeout: 5000000,
  specs: ['./e2e/specs/regression/verifyNewlyAddedAndFeaturedProductsAndRecentlyOrderdProductsWithUserAccess.spec.ts'],

  multiCapabilities: [
    {
      'browserName': 'chrome',
      chromeOnly:true , 
  
      

      chromeOptions: {
        args: [
          //add ignore cert
          //'--headless',
          
        ],
      },
    },
  ],

  suites: {
    sanity: ['./e2e/Specs/Sanity/*.spec.ts',]
    //hardening: './e2e/hardening/**/*.e2e.spec.ts',
    //nightly: './e2e/nightly/**/*.e2e.spec.ts',
  },

  directConnect: true,
  framework: 'jasmine2',
  //restartBrowserBetweenTests: true,
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 3000000,
    print: function () { },
  },

  onPrepare: function () {

    jasmine.getEnv().addReporter(new SpecReporter({
      displayFailuresSummary: true,
      displayFailuredSpec: true,
      displaySuiteNumber: true,
      displaySpecDuration: true
    }));

    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      consolidateAll: true,
      savePath: './Reports',
      filePrefix: 'xmlresults'
    }));
    var fs = require('fs-extra');
    fs.emptyDir('Reports/screenshots/', function (err) {
      console.log(err);
    });

    jasmine.getEnv().addReporter({
      specDone: function (result) {
        if (result.status == 'failed') {
          browser.getCapabilities().then(function (caps) {
            var browserName = caps.get('browserName');

            browser.takeScreenshot().then(function (png) {
              var stream = fs.createWriteStream('Reports/screenshots/' + browserName + '-' + result.fullName + '.png');
              stream.write(new Buffer(png, 'base64'));
              stream.end();
            });
          });
        }
      }
    });
  },
  //onComplete will be executed once per capability after all tests have finished, but the webdriver instance has not yet been shut down.
  onComplete: function() {
//
    var browserName, browserVersion;
    var capsPromise = browser.getCapabilities();

    capsPromise.then(function (caps) {
      browserName = caps.get('browserName');
      browserVersion = caps.get('version');
      platform = caps.get('platform');
      

      //var HTMLReport = require('protractor-html-reporter-2');

      testConfig = {
        reportTitle: 'MSF Test Execution Report',
        outputPath: './Reports',
        outputFilename: 'ProtractorTestReport',
        screenshotPath: './screenshots',
        testBrowser: browserName,
        browserVersion: browserVersion,
        modifiedSuiteName: false,
        screenshotsOnlyOnFailure: true,
        testPlatform: platform
      };
      new HTMLReport().from('./Reports/xmlresults.xml', testConfig);
    });
  },
  //will be executed once per capability after all tests have finished and the webdriver instance has been shut down
  onCleanUp() { },
  //will be executed only once before program exits; after all capabilities are finished(after all onCleanup)
  afterLaunch() { },
};