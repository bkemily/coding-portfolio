# ReliefConnect
ReliefConnect is a secure, web-based platform that enhances disaster communication by enabling real-time safety status updates, localized resource sharing, and community-driven support. During crises, communication networks are often overwhelmed, leaving families struggling to verify the safety of loved ones and access critical resources. ReliefConnect addresses these challenges by allowing individuals to register their safety status, search for loved ones, and locate essential services such as shelters and emergency aid centers.

The platform uses a JavaScript-based technology stack, React, and Bootstrap, for a user-friendly interface. Express.js handles API management and server-side functionality, with MongoDB Atlas as the database. The platform will be deployed on DigitalOcean, ensuring reliable cloud hosting and GitHub for version control, CI/CD pipelines, and project tracking through GitHub Projects. FEMA, Google Maps, and the American Red Cross APIs provide real-time disaster data to inform users of changing conditions.

ReliefConnect incorporates several key features to improve disaster response efforts. The real-time safety registration and search function allows users to mark themselves as safe and locate loved ones based on name, phone number, or address. Security is a top priority, with the implementation of secure authentication, encrypted data transmission, and role-based access controls to protect user privacy. Additionally, the platform utilizes GitHub Actions for CI/CD, streamlining automated testing and deployment processes.

ReliefConnect redefines disaster communication by modernizing and expanding upon the now-discontinued Red Cross Safe and Well Program. It provides a real-time, community-driven, and secure platform. Its combination of accessibility, privacy, and innovative features empowers individuals and families to stay connected and make informed decisions when it matters most.

## Current Features
- Register as "Safe and Well"
   - Users can register as Safe and Well by:
      - Clicking "List Myself as Safe and Well".
      - Entering their phone number and an optional short message.
      - Submitting the form.
- Search for Loved Ones
   - Family members can search for registrants by:
      - Entering the full name and either a phone number or address.
   - Viewing the results, which display:
      - First and last name
      - Home Address and Contact Information
      - Safety Status
      - Any message left by the user
- View Nearby Shelters and Static Resources
   - The interactive map provides:
      - Marked shelter and resource locations
      - Updated hazard areas based on real-time API data
      - Improved situational awareness for decision-making during disasters
   - Static resources are also provided, including:
      - Preparedness Guides & Checklists
      - First Aid & Medical Information
      - Shelter & Assistance Resources
      - Recovery & Rebuilding Assistance
      - Training & Educational Materials
      - Cybersecurity & Fraud Prevention
- Community Chat for Local Updates
      - A forum-like space where users can share resources, request help, and provide real-time updates.

## Tech Stack
- **Frontend**: React.js, Bootstrap
- **Backend**: Node.js, Express.js, MongoDB Atlas
- **Testing**: GitHub Actions for CI/CD and Jest for unit and integration testing

## User Guide
Our user guide can be found [here](/documentation/UserGuide.md)

## Files in this application
### Backend
- mongodb/
   - db.config.js: Configuration for MongoDB Atlas connection.
   - contact.model.js, safe.model.js, shelters.model.js, user.model.js: Define the MongoDB schemas for contacts, safety registrations, shelters, and users.
- public/: Static files served by the backend (if any).
- src/
   - controllers/: Handle incoming API requests and interact with services.
      - Example: contact.controller.js, user.controller.js.
   - daos/: Data Access Objects handle direct database interactions.
      - Example: contact.dao.js, safe.dao.js.
   - middleware/: Middleware functions for authentication, error handling, and CORS.
      - Example: auth.middleware.js, error.middleware.js.
   - services/: Contain business logic and interact with DAOs.
      - Example: fema.service.js, user.service.js.
   - app.js: Main Express app setup.
   - server.js: Starts the backend server.
- .env: Environment variables for backend configuration.
- jest.config.js: Configuration for Jest testing framework.
- package.json, package-lock.json: Node dependencies and scripts.

### Frontend
- public/
   - Static assets like images (chat.jpg, logo.png, etc.), favicon, index.html, and robots.txt.
- src/
   - components/: Reusable React components for UI.
      - Example: Navbar.js, Chat.js, FishCaptcha.js, Footer.js.
      - resource-pages/: Specific components related to resource listings.
   - css/: Component-specific CSS files for styling.
      - Example: AboutUs.css, FishCaptcha.css, Sidebar.css.
   - pages/: Page-level components for routing.
      - Example: AboutPage.js, HomePage.js, HelpPage.js.
   - App.js: Main React app setup.
   - index.js: Entry point for React app.
   - index.css: Global CSS styles.
- .env: Environment variables for frontend configuration.
- package.json, package-lock.json: Frontend dependencies and scripts.

### CI/CD
- .github/workflows/
   - main.yml: GitHub Actions workflow configuration for CI/CD (automated testing and deployment).

### Documentation
- README.md: Backend project overview.
- UserGuide.md: How to run ReliefConnect
- documentation/
   - security/: Contains security-documentation.pdf outlining security implementations.
   - testing/: Markdown docs for testing strategies and results per component (e.g., auth.middleware.md).