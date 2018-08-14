// Karma configuration
// Generated on Tue Aug 14 2018 10:44:03 GMT-0700 (PDT)


var path = require('path');
var TEST_DIR = path.join(__dirname, '/test/clientSpecs');
var webpackConfig = require('./webpack.config');
webpackConfig.entry = undefined;

module.exports = function(config) {

  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],

    files: [
      { pattern: 'tests/**/*.js', watching: true }
    ],

    exclude: [
      'tests/**/*.swp'
    ],

    preprocessors: {
        'tests/**/*.js': ['webpack']
    },

    webpack: webpackConfig,

    reporters: ['progress'],

    port: 9876, // web server port

    colors: true,

    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
