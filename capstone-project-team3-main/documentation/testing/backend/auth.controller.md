# Auth Router Testing Documentation

## Test Cases

---

#### Initialize Google OAuth

- **Test ID:** TC_001
- **Description:** Verifies that the `/google` route triggers the Google OAuth flow using Passport.
- **Expected Result:** `passport.authenticate` is called with Google strategy and correct options.

---

#### Logout User

- **Test ID:** TC_002
- **Description:** Verifies that the `/logout` route logs the user out and destroys the session.
- **Expected Result:** The API returns a status code of 200 after logging out and destroying the session.

---

#### Get Info for Unauthenticated User

- **Test ID:** TC_003
- **Description:** Verifies the `/user` endpoint response when no user is logged in.
- **Expected Result:** API returns `{ loggedIn: false }`.

---

#### Get Info for Authenticated User

- **Test ID:** TC_004
- **Description:** Verifies the `/user` endpoint response when a user is authenticated.
- **Expected Result:** API returns `{ loggedIn: true, name: 'Test User', email: 'test@example.com' }`.

---

## Business Requirements

- **BR_001:** Initialize Google OAuth authentication flow properly.
- **BR_002:** Allow users to log out and destroy their sessions securely.
- **BR_003:** Ensure unauthenticated users receive the correct response (`loggedIn: false`).
- **BR_004:** Provide authenticated users with their profile information (`name` and `email`).

---

## Requirements Traceability Matrix (RTM)

| Test ID | Business Requirement                             | Status  |
|:-------:|:------------------------------------------------- |:------- |
| TC_001  | BR_001 - Initialize Google OAuth authentication  | Success |
| TC_002  | BR_002 - Logout users and destroy session         | Success |
| TC_003  | BR_003 - Handle unauthenticated user responses    | Success |
| TC_004  | BR_004 - Return authenticated user information    | Success |
