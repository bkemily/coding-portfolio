# Community Routes Testing Documentation

## Test Cases

---

#### Retrieve Community Posts

- **Test ID:** TC_001
- **Description:** Verifies the `/api/get-posts` endpoint returns community posts and uses default radius if not provided.
- **Expected Result:** API returns status 200 with posts array and correct query parameters are passed to service.

---

#### Create New Community Post

- **Test ID:** TC_002
- **Description:** Verifies the `/api/create-post` endpoint creates a new post successfully with valid input.
- **Expected Result:** API returns status 200 and the created post data.

---

#### Handle Missing Fields on Create Post

- **Test ID:** TC_003
- **Description:** Verifies the `/api/create-post` endpoint returns status 400 when required fields are missing.
- **Expected Result:** API returns status 400 with "Missing required fields" error.

---

#### Toggle Like on Post

- **Test ID:** TC_004
- **Description:** Verifies the `/api/toggle-like` endpoint toggles likes on a post correctly.
- **Expected Result:** API returns status 200 with updated post data.

---

#### Handle Missing Fields on Toggle Like

- **Test ID:** TC_005
- **Description:** Verifies the `/api/toggle-like` endpoint returns status 400 if required fields are missing.
- **Expected Result:** API returns status 400 with "Missing required fields" error.

---

#### Delete Community Post

- **Test ID:** TC_006
- **Description:** Verifies the `/api/delete-post` endpoint successfully deletes a post by ID.
- **Expected Result:** API returns status 200 with deleted post data.

---

#### Handle Not Found Post Deletion

- **Test ID:** TC_007
- **Description:** Verifies the `/api/delete-post` endpoint returns status 404 if the post does not exist.
- **Expected Result:** API returns status 404 with "Community Post Not Found" error.

---

#### Handle Missing Fields on Delete Post

- **Test ID:** TC_008
- **Description:** Verifies the `/api/delete-post` endpoint returns status 400 if ID is missing.
- **Expected Result:** API returns status 400 with "Missing required fields" error.

---

#### Create New Comment on Post

- **Test ID:** TC_009
- **Description:** Verifies the `/api/create-comment` endpoint creates a new comment successfully.
- **Expected Result:** API returns status 200 with created comment data.

---

#### Handle Missing Fields on Create Comment

- **Test ID:** TC_010
- **Description:** Verifies the `/api/create-comment` endpoint returns status 400 when required fields are missing.
- **Expected Result:** API returns status 400 with "Missing required fields" error.

---

#### Delete Comment on Post

- **Test ID:** TC_011
- **Description:** Verifies the `/api/delete-comment` endpoint successfully deletes a comment by ID.
- **Expected Result:** API returns status 200 with deleted comment data.

---

#### Handle Not Found Comment Deletion

- **Test ID:** TC_012
- **Description:** Verifies the `/api/delete-comment` endpoint returns status 404 if the comment does not exist.
- **Expected Result:** API returns status 404 with "Community Post Not Found" error.

---

#### Handle Missing Fields on Delete Comment

- **Test ID:** TC_013
- **Description:** Verifies the `/api/delete-comment` endpoint returns status 400 if ID is missing.
- **Expected Result:** API returns status 400 with "Missing required fields" error.

---

## Business Requirements

- **BR_001:** Retrieve community posts based on location parameters.
- **BR_002:** Allow users to create new posts with required fields.
- **BR_003:** Enable users to like or unlike community posts.
- **BR_004:** Support deletion of posts by ID, handling not found cases.
- **BR_005:** Allow users to comment on posts.
- **BR_006:** Support deletion of comments by ID, handling not found cases.
- **BR_007:** Validate input fields for all creation and deletion routes.

---

## Requirements Traceability Matrix (RTM)

| Test ID | Business Requirement                          | Status  |
| :-----: | :-------------------------------------------- | :------ |
| TC_001  | BR_001 - Retrieve community posts             | Success |
| TC_002  | BR_002 - Create new community post            | Success |
| TC_003  | BR_007 - Validate fields on post creation     | Success |
| TC_004  | BR_003 - Toggle like on community post        | Success |
| TC_005  | BR_007 - Validate fields on toggle like       | Success |
| TC_006  | BR_004 - Delete community post                | Success |
| TC_007  | BR_004 - Handle not found post on deletion    | Success |
| TC_008  | BR_007 - Validate fields on delete post       | Success |
| TC_009  | BR_005 - Create new community comment         | Success |
| TC_010  | BR_007 - Validate fields on comment creation  | Success |
| TC_011  | BR_006 - Delete community comment             | Success |
| TC_012  | BR_006 - Handle not found comment on deletion | Success |
| TC_013  | BR_007 - Validate fields on delete comment    | Success |
