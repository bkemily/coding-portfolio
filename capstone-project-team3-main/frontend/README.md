# Frontend Documentation

## Overview
ReliefConnect is a secure, web-based platform designed to enhance communication during disasters. The frontend of this project is built using React.js with Node.js as the runtime environment. The application allows individuals to register their safety status, search for loved ones, and access local disaster resources. It also integrates real-time disaster data and mapping functionalities.

## Tools Required for Development
The frontend is built using React.js, a JavaScript library for building user interfaces. It utilizes Node.js as a runtime environment for execution. For more information on installing Node.js, please see the main repository's [README.md](../README.md) file. To learn more about React.js, visit their website [here](https://reactjs.org/).

## Installing Dependencies
Use the `npm install` command to install all necessary Node.js dependencies for the frontend.

## Starting the Development Server
Use the `npm start` command to start a new instance of the development server on `http://localhost:3000/`.

## Closing the Development Server
Use the `Ctrl + C` command in the command line interface. When prompted to `Terminate batch job (Y/N)?`, enter `Y` to end the process.

## File and Folder Structure
The frontend project is organized into various directories and files to maintain modularity and ease of development. Below is an explanation of key folders and files:

### `public/`
The project follows a modular structure for scalability and maintainability.

index.html – Main entry point of the React application.

favicon.ico – Browser tab icon.

logo.png – Project logo.

robots.txt – Controls search engine crawling.


#### `src/` – Reusable UI components.
Footer.js – Site-wide footer.

Navbar.js – Main navigation bar.

Map.js – Displays disaster resources using Google Maps API.

Sidebar.js – Side navigation panel for the dashboard.

SafeWellSearch.js – Allows users to search for loved ones.

SafeWellSubmission.js – Enables users to register as safe and well.

SearchResultsPage.js – Displays search results for registered users.

LocalResources.js – Shows nearby shelters and emergency services.

TermsandCons.js – Displays the terms and conditions for the platform.

ThankYou.js – Confirmation page after submitting a form.


#### `css/` – Component-specific stylesheets.
Map.css

Resources.css

SafeWellSearch.css

SafeWellSubmission.css


#### `pages/` – Main application pages.
HomePage.js – Landing page for the application.

AboutPage.js – Information about ReliefConnect.

FAQPage.js – Frequently Asked Questions.

HelpPage.js – Help and support section.

App.js – Main React component managing application routing.


#### `index.js`  – Entry point that renders the root React component.


#### `index.css` – Global styles for the application.


### `package.json` & `package-lock.json`
These files define the project metadata and dependencies. Running `npm install` reads from these files to install required packages.

## Running Automated Tests
If unit and integration tests are implemented, use the `npm test` command to execute the test suite.

## Version Control and Best Practices
- Ensure the `node_modules/` folder is **never** committed to GitHub.
- Keep components modular and reusable.
- Follow best practices for React development, including state management and component lifecycle methods.

This documentation serves as a reference for developers working on the frontend of the application.