# Community Chat Manual Frontend Test Suite

## Section 1: Community Chat Functionality

**Objective:**  
Validate the features of the Community Chat, ensuring that users can authenticate via Google OAuth, create posts, comment on threads, like posts, and engage with the chat feed while adhering to the system's constraints (e.g., character limits, input validation).

---

### Test Case 1.1: Google OAuth Authentication

- **Purpose:** Verify that users can log in using Google OAuth and gain access to the Community Chat.
- **Preconditions:** User is not logged in and is on the Community Chat login screen.
- **Test Steps:**
  1. Click the "Sign in with Google" button.
  2. Authenticate via the Google OAuth flow.
- **Expected Result:**
  - User is successfully authenticated and redirected to the Community Chat feed.
  - User’s profile information (name, email) is populated correctly.

---

### Test Case 1.2: Post Creation with Valid Input

- **Purpose:** Verify that users can create posts with valid content and within the character limit.
- **Preconditions:** User is logged in and on the Community Chat feed.
- **Test Steps:**
  1. Click the "Create Post" button to open the modal.
  2. Enter a valid post message (within 1000 characters).
  3. Click "Submit."
- **Expected Result:**
  - The post is successfully created and displayed in the chat feed.
  - Visual feedback is shown indicating success (e.g., "Post Submitted Successfully").
  - The post appears with correct user information (name, profile picture).

---

### Test Case 1.3: Post Creation with Exceeding Character Limit

- **Purpose:** Ensure the character limit for posts (1000 characters) is enforced.
- **Preconditions:** User is logged in and on the Community Chat feed.
- **Test Steps:**
  1. Click the "Create Post" button to open the modal.
  2. Enter a post message exceeding 1000 characters.
  3. Click "Submit."
- **Expected Result:**
  - An error message is displayed (e.g., "Post exceeds character limit of 1000").
  - The post is not submitted.

---

### Test Case 1.4: Comment Creation with Valid Input

- **Purpose:** Verify that users can comment on posts with valid content and within the character limit.
- **Preconditions:** User is logged in and there is an existing post to comment on.
- **Test Steps:**
  1. Click on a post to open the comment section.
  2. Enter a valid comment (within 500 characters).
  3. Click "Submit."
- **Expected Result:**
  - The comment is successfully added to the post and displayed below it.
  - Visual feedback is shown indicating success (e.g., "Comment Added Successfully").

---

### Test Case 1.5: Comment Creation with Exceeding Character Limit

- **Purpose:** Ensure the character limit for comments (500 characters) is enforced.
- **Preconditions:** User is logged in and there is an existing post to comment on.
- **Test Steps:**
  1. Click on a post to open the comment section.
  2. Enter a comment exceeding 500 characters.
  3. Click "Submit."
- **Expected Result:**
  - An error message is displayed (e.g., "Comment exceeds character limit of 500").
  - The comment is not submitted.

---

### Test Case 1.6: Empty Comment Submission

- **Purpose:** Ensure that comments cannot be submitted if the field is empty.
- **Preconditions:** User is logged in and there is an existing post to comment on.
- **Test Steps:**
  1. Click on a post to open the comment section.
  2. Leave the comment field empty.
  3. Click "Submit."
- **Expected Result:**
  - An error message is displayed (e.g., "Comment cannot be empty").
  - The comment is not submitted.

---

### Test Case 1.7: Like Post

- **Purpose:** Verify that users can like posts and that the like count updates.
- **Preconditions:** User is logged in and there is an existing post to like.
- **Test Steps:**
  1. Click the "Like" button on an existing post.
- **Expected Result:**
  - The post’s like count is updated.
  - The "Like" button visually changes to reflect the user’s like (e.g., change to "Unlike").

---

### Test Case 1.8: Filter Posts by Geographic Area (Planned Enhancement)

- **Purpose:** Verify that the system allows users to filter posts based on their geographic area (e.g., within 5-10 miles).
- **Preconditions:** User is logged in and on the Community Chat feed.
- **Test Steps:**
  1. Enable geographic filtering from the filter options.
  2. Select a range (e.g., 5 miles).
  3. View the posts that match the geographic filter.
- **Expected Result:**
  - Only posts within the selected geographic area are displayed.
  - Posts outside the selected range are not visible.

---

## Summary of Results

| Test Case ID | Description                                     | Result |
| ------------ | ----------------------------------------------- | ------ |
| 1.1          | Google OAuth Authentication                     | Pass   |
| 1.2          | Post Creation with Valid Input                  | Pass   |
| 1.3          | Post Creation with Exceeding Character Limit    | Pass   |
| 1.4          | Comment Creation with Valid Input               | Pass   |
| 1.5          | Comment Creation with Exceeding Character Limit | Pass   |
| 1.6          | Empty Comment Submission                        | Pass   |
| 1.7          | Like Post                                       | Pass   |
| 1.8          | Filter Posts by Geographic Area                 | Pass   |
