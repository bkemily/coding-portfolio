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

## Future Features
- View Real-Time Shelter Locations – Integrates with FEMA APIs to display nearby shelter locations and emergency resources.
- Community Chat for Local Updates – A forum-like space where users can share resources, request help, and provide real-time updates.

## Tech Stack
- **Frontend**: React.js, Bootstrap
- **Backend**: Node.js, Express.js, MongoDB Atlas
- **Hosting**: DigitalOcean, GitHub Actions for CI/CD

## Development Installation and Setup

1. Cloning the repository:
    - `git clone https://github.com/uwf-capstone-sp2025/capstone-project-team3`

2. Installing Node.js
    - `https://nodejs.org/en/download`

3. Installing Dependencies:
   - `npm install`

4. Running the Development Server & Client:

    - `npm start`

5. Accessing the Client and Server
    - Client: `http://localhost:3000/`
    - Server: `http://localhost:3001/`


## How to Run Automated Tests
We use Jest and Supertest for unit and integration testing

  Run all tests with
    - `npm test`

  or specific tests using
    - `npm test -- <test-name>`

### Testing Suites Used:

Jest – For testing application functionality and API routes.

Supertest – For testing API endpoints.


## Deployment Notes

ReliefConnect will be deployed using DigitalOcean for hosting. The live version will be available soon at:

Live URL: (To be updated upon deployment)

### Deployment Process:

Infrastructure Setup: The backend and database will be hosted on DigitalOcean using a Node.js runtime.

CI/CD: GitHub Actions automates testing and deployment.

Frontend Deployment: The React-based UI will be served via DigitalOcean’s App Platform or Vercel.

Backend Deployment: The Express.js server will be hosted using Docker containers with MongoDB Atlas as the database.

## Application Demo
Watch the Demo Video → [Click here to watch](https://youtu.be/eRzerFNTYMI)

In this demo, we showcase:
   1. Registering as "Safe and Well" – Submitting safety status
   2. Searching for Loved Ones – Finding people based on name, phone, or address
   3. Navigation Across Pages – Home, About, and Safe Well features
   4. Upcoming Features – Mapping and community updates