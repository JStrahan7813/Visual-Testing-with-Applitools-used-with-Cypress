An example of how to use visual testing to confirm UI tests have run succesfully. 
To set up go the visualTestExample folder and run npm i to install the modules required to run the tests.
Now run APPLITOOLS_API_KEY="your_api_key" npx cypress open
you should see two tests run ande pass in the command line and in the browser as the keyword open has been used.
In the visualTests.spec.cy.js file :

cy.eyesOpen() tells Eyes to begin running
cy.eyesCheckWindow() takes a screenshot of the current window and compares it to a saved screenshot
cy.eyesClose() tells eyes to stop running

Login to applitools (free trial easy to set up anytime) and you will see all the passed tests and the screenshots. They run once on chrome and once on firefox and in safari also as configured in the applitools.config.js and on some extra devices configured also. Visual testing can slow automation a bit so use these tests sparingly 
