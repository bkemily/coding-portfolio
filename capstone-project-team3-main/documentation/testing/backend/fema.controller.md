# FEMA Controller Testing Documentation

## Test Cases

### 1. Get FEMA Disaster Declarations

#### Successful Data Retrieval

- **Test ID:** TC_001
- **Description:** Validates retrieval of all FEMA disaster declarations from the server.
- **Expected Result:** The API returns all disaster declaration data with a 200 status code.

#### No Disasters Found

- **Test ID:** TC_002
- **Description:** Ensures the API returns an empty list when no FEMA disaster declarations are found.
- **Expected Result:** The API returns a 200 status code with an empty list of disaster declarations.

### 2. Get FEMA Open Shelters

#### Successful Data Retrieval

- **Test ID:** TC_003
- **Description:** Validates retrieval of all FEMA open shelters from the server.
- **Expected Result:** The API returns all open shelter data with a 200 status code.

#### No Shelters Found

- **Test ID:** TC_004
- **Description:** Ensures the API returns an empty list when no FEMA open shelters are found.
- **Expected Result:** The API returns a 200 status code with an empty list of shelters.

## Business Requirements

1. **BR_001:** Retrieve all FEMA disaster declarations from the database.
2. **BR_002:** Handle cases when no FEMA disaster declarations are found.
3. **BR_003:** Retrieve all FEMA open shelters from the database.
4. **BR_004:** Handle cases when no FEMA open shelters are found.

## Requirements Traceability Matrix (RTM)

| **Test ID** | **Business Requirement**                   | **Status** |
| ----------- | ------------------------------------------- | ---------- |
| TC_001      | BR_001 - Retrieve all FEMA disaster declarations | Success |
| TC_002      | BR_002 - Handle no disaster declarations found | Success |
| TC_003      | BR_003 - Retrieve all FEMA open shelters    | Success    |
| TC_004      | BR_004 - Handle no open shelters found      | Success    |
