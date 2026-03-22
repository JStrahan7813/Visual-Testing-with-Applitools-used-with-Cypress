module.exports = {

    apiKey: process.env.APPLITOOLS_API_KEY, 
    serverUrl: "https://eyes.applitools.com", // Update this URL if you are not using the Eyes public cloud.

    batchName: 'Cypress Quickstart',

    // Select the browsers and devices to run your tests on via the Ultrafast Grid
    browser: [
        {width: 800, height: 600, name: 'chrome'},
        {width: 1600, height: 1200, name: 'firefox'},
        {width: 1024, height: 768, name: 'safari'},
        {deviceName: 'Pixel 2', screenOrientation: 'portrait'},
        {deviceName: 'Nexus 10', screenOrientation: 'landscape'},
    ]
}