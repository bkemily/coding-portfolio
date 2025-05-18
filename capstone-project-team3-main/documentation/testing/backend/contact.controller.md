# Contact Controller Testing Documentation

## Test Cases

### 1. Get All Contact Messages

#### Successful Data Retrieval

- **Test ID:** TC_001
- **Description:** Validates retrieval of all contact messages from the server.
- **Expected Result:** The API returns all message data with a 200 status code.

#### Failed Data Retrieval

- **Test ID:** TC_002
- **Description:** Ensures an error code is returned when failing to retrieve contact data.
- **Expected Result:** The API returns a status code of 500 to indicate an internal server error.

### 2. Create Contact Messages

#### Successful Contact Message Creation

- **Test ID:** TC_003
- **Description:** Ensure proper creation of contact messages with the provided data.
- **Expected Result:** The API returns a status code of 200 to indicate a successful creation in the database.

#### Failed Contact Entry Creation

- **Test ID:** TC_004
- **Description:** Ensures an error code is returned when creation fails.
- **Expected Result:** The API returns a status code of 500 to indicate an internal server error.

#### Missing Name Field during Creation

- **Test ID:** TC_005
- **Description:** Validates rejection of API requests missing the name field.
- **Expected Result:** The API returns a status code of 400 to indicate missing input/data fields.

#### Missing Email Address Field during Creation

- **Test ID:** TC_006
- **Description:** Validates rejection of API requests missing the emailAddress field.
- **Expected Result:** The API returns a status code of 400 to indicate missing input/data fields.

#### Missing Subject Field during Creation

- **Test ID:** TC_007
- **Description:** Validates rejection of API requests missing the subject field.
- **Expected Result:** The API returns a status code of 400 to indicate missing input/data fields.

#### Missing Message Field during Creation

- **Test ID:** TC_008
- **Description:** Validates rejection of API requests missing the message field.
- **Expected Result:** The API returns a status code of 400 to indicate missing input/data fields.

## Business Requirements

1. **BR_001:** Retrieve all contact messages from the database.
2. **BR_002:** Handle errors during message retrieval.
3. **BR_003:** Create and store new contact messages.
4. **BR_004:** Handle errors during message creation.
5. **BR_005:** Validate required fields during creation.

## Requirements Traceability Matrix (RTM)

| **Test ID** | **Business Requirement**               | **Status** |
| ----------- | -------------------------------------- | ---------- |
| TC_001      | BR_001 - Retrieve all messages         | Success    |
| TC_002      | BR_002 - Handle retrieval errors       | Success    |
| TC_003      | BR_003 - Create new messages           | Success    |
| TC_004      | BR_004 - Handle creation errors        | Success    |
| TC_005      | BR_005 - Validate missing name         | Success    |
| TC_006      | BR_005 - Validate missing emailAddress | Success    |
| TC_007      | BR_005 - Validate missing subject      | Success    |
| TC_008      | BR_005 - Validate missing message      | Success    |
