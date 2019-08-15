# GitHub-Finder
GitHub Finder is developed using JavaScript, bootstrap 4, Bootswatch

The core development involved:
 - JavaScript's fetchApi to get user's profile and repos using github apis.
 - BootStrap 4 and Bootswatcher to provide a decent UI
 
Stucture:
- app.js has the logic to listen to events on the ui and call the necessary functionalities implemented in github.js and ui.js
- github.js provides the necessary methods to fetch info about github user's profile or repos
- ui.js provides the necessary methods to dynamically build the UI to project a user's profile and repo info. 
