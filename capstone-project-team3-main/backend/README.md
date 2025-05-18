# Backend Documentation

## Tools Required for Development
The backend uses Express.js as a web application server for setup and execution. Express.js utilizes Node.js as a runtime environment for execution. For more information on installing Node.js, please see the main repository's [README.md](../README.md) file. To learn more about Express.js, please see their website [here](https://expressjs.com/).

## Testing Suites for Unit and Integration Testing
The server uses `Jest` and `Supertest` to allow for testing of application functionality and API routes. To learn more about Jest please see their website [here](https://jestjs.io/). For more information on Supertest, please visit a Node.js resource [here](https://www.npmjs.com/package/supertest).

## Installing Dependencies
Use the `npm install` command to install all Node.js dependencies for the server.

## Starting the Development Server
Use the `npm start` command to start a new instance of the server on `http://localhost:3001/`

## Closing the Development Server
Use the `Ctrl + C` command in the command line interface. When prompted to `Terminate batch job (Y/N)?`, enter `Y` to end the program.

## Running Automated Tests Using Jest & Supertest
Use the `npm test` command to run the automated testing suite using Jest. To indicate success all related items should include a checkmark and will be indicated with a `PASS` notification. If any test fails, the test will be indicated with a `FAILURE` notification with a bright red banner.

## Navigation and Use Information
For this project, several folders are used to hold and maintain various types of services for application use. Several examples of included filenames are included below for developer reference.

### Controllers
Controllers act as a manner of receiving API requests and handling them accordingly. This includes the management of GET, POST, and other request types. The controllers are split by function for organizational purposes.

### Middleware
Middleware sits in front of controllers and can apply to one or many controllers. An example may be requiring user authentication before allowing a set of API routes to be accessed. Middleware functions define their own logic and sit outside of each individual route.

### Services
Services act as the business logic for the application. Controllers rely on Services to perform operations and relate the necessary information to the controller for provision to the requester. Services require unit and integration testing.

### DAOs
DAOs act as an abstraction to interact and communicate with the Database. DAOs require integration with database connection drivers, such as Mongoose, to communicate. Each DAO relates to an entity, such as a User, Post, or Comment. Each DAO has a set of functions for certain actions, such as returning all items, returning by ID, etc. Services rely on DAOs for data access and retrieval in a simplified manner.

## Specific File Details and Information
For this project, there are several key files that hold importance related to their use in outlining the development server. The section below details examples of each for developer reference.

### server.js
The server.js file is the main point of entry for the application and starts the development server on the designated port. This file is indicated as the entry point in the package.json file for use by Node.js.

### app.js
The app.js file configures the necessary dependencies and imports all controllers and middleware for application use. The app.js file depends on the related controller and middleware in the order provided to route incoming requests. The order of imports in app.js for controllers and middleware matters and must be handled carefully.

### .env
The .env file holds all environment variables needed for application use. This includes API keys, security tokens, and other relevant information not directly included in the code itself. This file should **never** be uploaded to GitHub, as it contains sensitive and confidential information.

### package.json & package-lock.json
The package.json and package-lock.json files are responsible for outlining a formal representation of the project and its dependencies for Node.js. When the `npm install` command is run, Node.js scans the two files for cross dependencies and installs them accordingly. Formal commands, such as `npm start` and `npm test` can be overridden as well for further functionality.

### node_modules
The node_modules folder holds all install dependencies to run and operate the server. This includes default installs, and dependencies installed when running the `npm install` command. This folder is **never** to be pushed to GitHub due to its size and is specific to each developer's environment.

### jest.config.js
The jest.config.js file configures the testing environment for use with Node.js. This file is required for Node.js to indicate its use and locate all required dependencies for execution.

### app.spec.js
The app.spec.js file is an example of a Jest test in Express.js. Automated tests will use Jest and Supertest for test code execution and API interaction. Each test includes a description and a set of "it"s that describe and test intended behavior.

### .gitkeep
The .gitkeep file is a file recognized by Git to maintain an empty folder for repository organization. These files were used in the project setup to allow empty and currently unused folders to be pushed to GitHub for other's reference. The .gitkeep file should be removed once a feasible item has been added to a folder.