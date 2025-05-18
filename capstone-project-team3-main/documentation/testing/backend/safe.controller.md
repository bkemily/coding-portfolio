# Safe Posts Controller Testing Documentation

## Test Cases

### 1. Get Safe Posts

#### Missing Last Name

- **Test ID:** TC_001
- **Description:** Validates the response when the last name is missing in the GET request.
- **Expected Result:** The API returns a 400 status code with the message "Missing required fields."

#### Missing Phone Number

- **Test ID:** TC_002
- **Description:** Validates the response when the phone number is missing in the GET request.
- **Expected Result:** The API returns a 400 status code with the message "Missing required fields."

#### Missing Home Address

- **Test ID:** TC_003
- **Description:** Validates the response when the home address is missing in the GET request.
- **Expected Result:** The API returns a 400 status code with the message "Missing required fields."

#### Missing Home City

- **Test ID:** TC_004
- **Description:** Validates the response when the home city is missing in the GET request.
- **Expected Result:** The API returns a 400 status code with the message "Missing required fields."

#### Missing Home State

- **Test ID:** TC_005
- **Description:** Validates the response when the home state is missing in the GET request.
- **Expected Result:** The API returns a 400 status code with the message "Missing required fields."

#### Successful Retrieval of Safe Posts

- **Test ID:** TC_006
- **Description:** Validates the response when safe posts are successfully retrieved.
- **Expected Result:** The API returns a 200 status code with the list of safe posts.

### 2. Create Safe Post

#### Missing Last Name

- **Test ID:** TC_007
- **Description:** Validates the response when the last name is missing in the POST request.
- **Expected Result:** The API returns a 400 status code with the message "Missing required fields."

#### Missing Phone Number

- **Test ID:** TC_008
- **Description:** Validates the response when the phone number is missing in the POST request.
- **Expected Result:** The API returns a 400 status code with the message "Missing required fields."

#### Missing Home Address

- **Test ID:** TC_009
- **Description:** Validates the response when the home address is missing in the POST request.
- **Expected Result:** The API returns a 400 status code with the message "Missing required fields."

#### Missing Home City

- **Test ID:** TC_010
- **Description:** Validates the response when the home city is missing in the POST request.
- **Expected Result:** The API returns a 400 status code with the message "Missing required fields."

#### Missing Home State

- **Test ID:** TC_011
- **Description:** Validates the response when the home state is missing in the POST request.
- **Expected Result:** The API returns a 400 status code with the message "Missing required fields."

#### Successful Safe Post Creation

- **Test ID:** TC_012
- **Description:** Validates the response when a safe post is successfully created.
- **Expected Result:** The API returns a 200 status code with the message "Safe post created successfully."

### 3. Update Safe Post

#### Missing ID

- **Test ID:** TC_013
- **Description:** Validates the response when the ID is missing in the PUT request.
- **Expected Result:** The API returns a 400 status code with the message "Missing required fields."

#### Successful Safe Post Update

- **Test ID:** TC_014
- **Description:** Validates the response when a safe post is successfully updated.
- **Expected Result:** The API returns a 200 status code with the message "Safe post updated successfully."

#### Safe Post Not Found

- **Test ID:** TC_015
- **Description:** Validates the response when the safe post to update is not found.
- **Expected Result:** The API returns a 404 status code with the message "Safe post not found."

### 4. Delete Safe Post

#### Missing ID

- **Test ID:** TC_016
- **Description:** Validates the response when the ID is missing in the DELETE request.
- **Expected Result:** The API returns a 400 status code with the message "Missing required fields."

#### Successful Safe Post Deletion

- **Test ID:** TC_017
- **Description:** Validates the response when a safe post is successfully deleted.
- **Expected Result:** The API returns a 200 status code with the message "Safe post deleted successfully."

#### Safe Post Not Found

- **Test ID:** TC_018
- **Description:** Validates the response when the safe post to delete is not found.
- **Expected Result:** The API returns a 404 status code with the message "Safe post not found."

## Business Requirements

1. **BR_001:** Retrieve all safe posts from the database.
2. **BR_002:** Handle cases when required fields are missing in GET and POST requests.
3. **BR_003:** Create and store new safe posts in the database.
4. **BR_004:** Handle successful and unsuccessful safe post updates.
5. **BR_005:** Handle deletion of safe posts and responses when post is not found.

## Requirements Traceability Matrix (RTM)

| **Test ID** | **Business Requirement**                            | **Status** |
| ----------- | --------------------------------------------------- | ---------- |
| TC_001      | BR_002 - Handle missing last name                   | Success    |
| TC_002      | BR_002 - Handle missing phone number                | Success    |
| TC_003      | BR_002 - Handle missing home address                | Success    |
| TC_004      | BR_002 - Handle missing home city                   | Success    |
| TC_005      | BR_002 - Handle missing home state                  | Success    |
| TC_006      | BR_001 - Retrieve all safe posts                    | Success    |
| TC_007      | BR_002 - Handle missing last name                   | Success    |
| TC_008      | BR_002 - Handle missing phone number                | Success    |
| TC_009      | BR_002 - Handle missing home address                | Success    |
| TC_010      | BR_002 - Handle missing home city                   | Success    |
| TC_011      | BR_002 - Handle missing home state                  | Success    |
| TC_012      | BR_003 - Create new safe post                       | Success    |
| TC_013      | BR_004 - Handle missing ID during update            | Success    |
| TC_014      | BR_004 - Handle successful safe post update         | Success    |
| TC_015      | BR_004 - Handle safe post not found                 | Success    |
| TC_016      | BR_002 - Handle missing ID during deletion          | Success    |
| TC_017      | BR_005 - Handle successful safe post deletion       | Success    |
| TC_018      | BR_005 - Handle safe post not found during deletion | Success    |
