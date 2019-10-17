import { Config } from 'protractor';

export let config: Config = {
    framework: 'custom',
    directConnect: true,
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['../tests/features/spec.feature'],
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        require: ['./tests/specs/*.js'],
        format: 'json:./report/results.json',
        tags: [],
        strict: true,
        compiler: []
    },
    plugins: [{
        package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
        options: {
          reportName: 'test',
          jsonDir: './report',
          jsonOutputPath: './report',
          reportPath: './report',
          automaticallyGenerateReport: true,
          removeOriginalJsonReportFile: true,
          removeExistingJsonReportFile: true
        }
      }]
}