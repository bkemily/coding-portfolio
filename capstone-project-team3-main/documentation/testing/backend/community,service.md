# Community Service Testing Documentation

## Test Cases

---

#### Retrieve All Community Posts and Comments

- **Test ID:** TC_001
- **Description:** Verifies that the `getAllCommunityPostsAndComments` function forwards latitude, longitude, and radius parameters to the DAO and retrieves community posts and comments.
- **Expected Result:** The DAO receives the correct parameters (`latitude`, `longitude`, `radius`), and the correct result is returned.

---

#### Create New Community Post

- **Test ID:** TC_002
- **Description:** Verifies that the `createNewCommunityPost` function creates a new post by passing the post data to the DAO and returns the created post.
- **Expected Result:** The DAO receives the correct input, and the created post is returned with the correct data.

---

#### Toggle Like on Community Post - Post Not Found

- **Test ID:** TC_003
- **Description:** Verifies that `toggleLikeOnCommunityPost` throws an error when the post does not exist.
- **Expected Result:** An error is thrown indicating that the post does not exist.

---

#### Toggle Like on Community Post - Remove Like

- **Test ID:** TC_004
- **Description:** Verifies that `toggleLikeOnCommunityPost` removes a like when the user has already liked the post.
- **Expected Result:** The like is removed, the like count is updated, and the correct post is returned.

---

#### Toggle Like on Community Post - Add Like

- **Test ID:** TC_005
- **Description:** Verifies that `toggleLikeOnCommunityPost` adds a like when the user has not liked the post yet.
- **Expected Result:** The like is added, the like count is updated, and the correct post is returned.

---

#### Delete Community Post by ID

- **Test ID:** TC_006
- **Description:** Verifies that `deleteCommunityPostById` deletes a community post by ID and returns the correct result.
- **Expected Result:** The DAO deletes the post and returns the deleted post data.

---

#### Create New Community Comment

- **Test ID:** TC_007
- **Description:** Verifies that the `createNewCommunityComment` function creates a new comment by passing the comment data to the DAO and returns the created comment.
- **Expected Result:** The DAO receives the correct input, and the created comment is returned with the correct data.

---

#### Delete Community Comment by ID

- **Test ID:** TC_008
- **Description:** Verifies that `deleteCommunityCommentById` deletes a community comment by ID and returns the correct result.
- **Expected Result:** The DAO deletes the comment and returns the deleted comment data.

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

| Test ID | Business Requirement                    | Status  |
| :-----: | :-------------------------------------- | :------ |
| TC_001  | BR_001 - Retrieve community posts       | Success |
| TC_002  | BR_002 - Create new community post      | Success |
| TC_003  | BR_007 - Validate fields on toggle like | Success |
| TC_004  | BR_003 - Toggle like on community post  | Success |
| TC_005  | BR_003 - Toggle like on community post  | Success |
| TC_006  | BR_004 - Delete community post          | Success |
| TC_007  | BR_005 - Create new community comment   | Success |
| TC_008  | BR_006 - Delete community comment       | Success |
