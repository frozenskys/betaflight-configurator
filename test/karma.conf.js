module.exports = function(config) {
    config.set({
        reporters: ['junit'],
        basePath: '../',
        frameworks: ['mocha', 'chai', 'sinon-chai'],
        files: [
            './node_modules/jquery/dist/jquery.min.js',
            './node_modules/bluebird/js/browser/bluebird.min.js',
            './src/js/serial.js',
            './src/js/data_storage.js',
            './src/js/localization.js',
            './src/js/gui.js',
            './node_modules/jquery-textcomplete/dist/jquery.textcomplete.min.js',
            './src/js/CliAutoComplete.js',
            './src/js/tabs/cli.js',
            './test/**/*.js'
        ],
        browsers: ['ChromeHeadlessNoSandbox'],
        customLaunchers: {
            ChromeHeadlessNoSandbox: {
                base: 'ChromeHeadless',
                flags: ['--no-sandbox']
            }
        },
        junitReporter: {
            outputDir: './test_results/', 
            outputFile: 'TEST_RESULTS.xml',
            useBrowserName: false,
        },
        singleRun: true,
    });
};
