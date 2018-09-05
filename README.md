<h1>Expensify</h1>

<img height="600px" src="https://i.imgur.com/cZI2dHP.png" alt="app"/>

<h3>Application for tracking your expenses.</h3>
<p>Expensify app is developed using React, Redux and Firebase.


To get the frontend running locally:

* Clone this repository <br>
    <b>Install required dependencies</b><br>
    <em>npm install</em> <br>
    <b>Start local server</b><br>
    <em>npm run dev-server</em><br> 
    <b>Test</b><br>
    <em>npm run test</em>    
<p>
Local web server will use port 8000. You can configure port in devServer section of webpack.config.js: we use cross-env to set environment variable PORT for React scripts, this is Windows-compatible way of setting environment variables.

YOU SHOULD add .env file in the root folder of project to set environment variables for firebase database. This file will be ignored by git, so it is suitable for API keys and other sensitive stuff. 
</p>
