# Testing Documentation Overview

## Summary of Backend Test Suites

Please refer to the `backend` directory for details on all backend tests included.

### Auth Controller

- **Number of Tests:** 4
- **Overview:** Validates Google OAuth login, user session control, and logout functionality for both API and router layers.

### Auth Middleware

- **Number of Tests:** 2
- **Overview:** Tests for validation of user status within the Server's current session

### CORS Middleware

- **Number of Tests:** 3
- **Overview:** Ensures CORS headers are correctly set up for allowed origins and blocked for disallowed ones.

### Error Middleware

- **Number of Tests:** 2
- **Overview:** Confirms correct HTTP status codes for undefined routes (404) and unhandled server errors (500).

### Safe Controller

- **Number of Tests:** 18
- **Overview:** Covers CRUD operations on “Safe Posts,” including input validation, creation, retrieval, updating, and deletion.

### FEMA Controller

- **Number of Tests:** 4
- **Overview:** Tests FEMA endpoints for disaster declarations and open shelters, including proper service invocation and response handling.

### Community Controller

- **Number of Tests:** 13
- **Overview:** Validates CRUD operations on community posts, including input validation, creation, retrieval, updating, and deletion.

### Contact Controller

- **Number of Tests:** 8
- **Overview:** Verifies CRUD operations of the “Contact Us” endpoints, including validation of required fields and error handling.

### FEMA Service

- **Number of Tests:** 6
- **Overview:** Exercises the service layer methods `getFEMADisasterDeclarations` and `getFEMAOpenShelters`, confirming correct data retrieval and edge-case handling.

### Community Service

- **Number of Tests:** 8
- **Overview:** Tests the service layer methods for community posts, including data retrieval, creation, and deletion.

---

## Summary of Frontend Test Suites

Please refer to the `frontend` directory for details on all backend tests included.

### Section 1: Registration Form Submission

- **Number of Tests:** 7
- **Overview:** Verifies the “Safe and Well” registration form, including load, required-field enforcement, phone/zip/email validation, and successful submission.

### Section 2: Search Form Functionality

- **Number of Tests:** 7
- **Overview:** Validates the “Safe and Well” search form, covering empty-field blocking, phone-format validation, “no results” messaging, and successful searches by name, phone, or full address.

### Section 3: Resource Map Functionality

- **Number of Tests:** 8
- **Overview:** Ensures the interactive Resource Map loads correctly, supports zoom/pan, resource search and filtering, marker interaction, detail views, and responsiveness.

### Section 4: Resource Pages Navigation

- **Number of Tests:** 5
- **Overview:** Tests navigation to static resource pages (e.g. Emergency Kits, First Aid Basics), content visibility and completeness, back-navigation, external link behavior, and basic accessibility.

### Section 5: Community Chat

- **Number of Tests:** 8
- **Overview:** Covers the Community Chat feature: Google OAuth access, feed loading, post creation (modal), commenting, liking, empty-content blocking, mobile responsiveness, and geolocation-based filtering.

---

## Test Coverage Report

| File                    | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s         |
| ----------------------- | ------- | -------- | ------- | ------- | ------------------------- |
| **All files**           | 78.19   | 74.59    | 54.38   | 78.33   |                           |
| **mongodb**             | 100     | 100      | 100     | 100     |                           |
| comments.model.js       | 100     | 100      | 100     | 100     |                           |
| contact.model.js        | 100     | 100      | 100     | 100     |                           |
| posts.model.js          | 100     | 100      | 100     | 100     |                           |
| safe.model.js           | 100     | 100      | 100     | 100     |                           |
| shelters.model.js       | 100     | 100      | 100     | 100     |                           |
| **src**                 | 92.5    | 100      | 0       | 92.5    |                           |
| app.js                  | 92.5    | 100      | 0       | 92.5    | 42,47,51                  |
| **src/controllers**     | 87.73   | 90.58    | 94.73   | 87.73   |                           |
| auth.controller.js      | 75      | 66.66    | 80      | 75      | 22-32,42,53-55            |
| community.controller.js | 89.47   | 100      | 100     | 89.47   | 29,57,85,121,149,185      |
| contact.controller.js   | 88.23   | 100      | 100     | 88.23   | 20,48                     |
| fema.controller.js      | 85.71   | 100      | 100     | 85.71   | 18,36                     |
| safe.controller.js      | 92.15   | 84.21    | 100     | 92.15   | 40,73,111,144             |
| **src/daos**            | 32.39   | 0        | 0       | 32.85   |                           |
| community.dao.js        | 28.94   | 0        | 0       | 29.72   | ...7,80-87,93-107,113-124 |
| contact.dao.js          | 71.42   | 100      | 0       | 71.42   | 6,11                      |
| safe.dao.js             | 26.92   | 0        | 0       | 26.92   | 6-23,29-33,39-43,49-53    |
| **src/middleware**      | 82.14   | 100      | 50      | 82.14   |                           |
| auth.middleware.js      | 100     | 100      | 100     | 100     |                           |
| cors.middleware.js      | 100     | 100      | 100     | 100     |                           |
| error.middleware.js     | 50      | 100      | 0       | 50      | 7-8,13-15                 |
| **src/services**        | 85.71   | 83.33    | 61.11   | 85.52   |                           |
| community.service.js    | 100     | 100      | 100     | 100     |                           |
| contact.service.js      | 66.66   | 100      | 0       | 66.66   | 5,10                      |
| fema.service.js         | 86.11   | 75       | 80      | 86.11   | 49,54-57,75               |
| safe.service.js         | 60      | 100      | 0       | 60      | 5,10,15,20                |

## Test Execution Summary

- Test Suites: 11 passed, 11 total
- Tests: 76 passed, 76 total
- Snapshots: 0 total
- Execution Time: 4.914 seconds (estimated 5 seconds)
- Command: Ran all test suites
