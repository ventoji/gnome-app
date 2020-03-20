<h1 align="center">
  Gnome app
</h1>

<p>  This app displayes a list of inhabitants of Brastlewark town. This application was built using React, Redux and Webpack. Redux is used to retrieve the data coming from https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json in the state app, allowing to handle data easily. Three states are taken into account: the complete list of inhabitans, one gnome item  and the filter.</p>

<p> React is used to render components and to build the UI. The functions of the components are: to render list of inhabitans, to render one gnome with its personal information, header, filter, a small description for users and 404 error. The filter component allows to look for a gnome using this name.</p>

<p> Finally, components are styled using SAAS to generate the CSS code and a set of unitary tests using Jest is implemented to check the basic funcionalities of the components.</p>



##  Quick start

1.  **Start developing.**

    Navigate into your new site’s directory and start it up. To install run the following command.

     ```shell
    cd gnome-app/
    npm install
    ```
    To run locally, build the app for development executing the following commands.

    ```shell
    npm run build:dev
    npm run dev-server
    npm run start
    ```

   Other option to run locally using express is executing this command.
    ```shell
    npm run start
    ```

    To build for production, you must follow the following steps:

    ```shell
    npm run build:prod
    ```
    Before building for production you should define .env variables: PUBLIC_URL and SUBDIRECTORY, then you can copy all the files generated inside public folder. In case you use APACHE server as is the case of this project you should create .htacces file to keep react router working properly. 

    To run unitary tests, use this command:

    ```shell
    npm run test
    ```

## What's inside?

A quick look at the top-level files and directories you'll see in the project is.

    .
    ├── src
    ├── .gitignore
    ├── .babelrc
    ├── webpack.config.js
    ├── jest.config.js
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/src`**: This directory contains all of the code related to build the UI to render app on the browser, such as the site header, page template, the components, the reducer, actions and unitary tests. To follow and understand the sequence execution of the project start reviewing index.js. APP.js contains the router of the app, and the store folder contains the reducer implementation.

2.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

3.  **`.babelrc`**: This is a configuration file for [Babel](https://babeljs.io/). This file allow us using ES6 syntax and JXS code in the app.

4.  **`webpack.config.js`**: This is the main configuration file for the app. This is where you can specify information about how to transpile Javascript code (react, ES6), CSS code using SAAS, and to configure options for production, testing or development mode operations.

8.  **`LICENSE`**: This app is licensed under the MIT license.

9. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

10. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.


## Deploy
The applicacion can be viewed on [clicking here](http://ventoji.es/gnome-app/) using apache server.


