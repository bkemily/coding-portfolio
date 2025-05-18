# FEMA Service Testing Documentation

## Test Cases

### 1. Disaster Declarations Function

#### Successful Data Retrieval

- Test ID: TC_001
- Description: Retrieves disaster information from the past 90 days.
- Expected Result: Returns an array of disaster declarations to the client.

#### No Data Results

- Test ID: TC_002
- Description: Handles cases where no disasters are found.
- Expected Result: Returns an empty array to the client.

#### Internal Retrieval Failure

- Test ID: TC_003
- Description: Ensures errors are properly handled when the API call fails.
- Expected Result: Throws an error message to the Server with a 500 Error Code.

### 2. Open Shelters Function

#### Successful Retrieval

- Test ID: TC_004
- Description: Retrieves open shelter data from the FEMA API.
- Expected Result: Returns an array of shelter data to the Client.

#### Cached Shelters on API Failure

- Test ID: TC_005
- Description: Retrieves cached shelter data from the Database if the API fails.
- Expected Result: Returns cached shelter data from the Database to the Client.

#### API and Database Failure

- Test ID: TC_006
- Description: Handles errors when both the API and database retrieval fail.
- Expected Result: Throws an appropriate error message of 500 Internal Server Error.

## Business Requirements

1. BR_001: Retrieve disaster declarations from the FEMA API.
2. BR_002: Return an empty array when no disaster declarations are available.
3. BR_003: Handle API errors correctly.
4. BR_004: Retrieve open shelters from the FEMA API.
5. BR_005: Retrieve cached shelter data on API Connection failure.
6. BR_006: Handle errors when both API and database retrievals fail.

## Requirements Traceability Matrix (RTM)

| Test ID | Business Requirement                                 | Status  |
| ------- | ---------------------------------------------------- | ------- |
| TC_001  | BR_001 - Retrieve disaster declarations              | Success |
| TC_002  | BR_002 - Return empty array if no declarations found | Success |
| TC_003  | BR_003 - Handle API errors gracefully                | Success |
| TC_004  | BR_004 - Retrieve open shelter data from API         | Success |
| TC_005  | BR_005 - Retrieve cached shelter data on API failure | Success |
| TC_006  | BR_006 - Handle errors if both API and database fail | Success |
