# Safe and Well Manual Frontend Test Suite

## Section 1: Search Functionality

**Objective:**  
Validate that users can accurately search for individuals by last name along with either a phone number or full home address, ensuring flexible and precise search results.

---

### Test Case 1.1: Load Search Page

- **Purpose:** Verify that the search page loads correctly on a desktop device.
- **Preconditions:** User has access to the Safe and Well search page.
- **Test Steps:**
  1. Navigate to the Safe and Well search page.
- **Expected Result:**
  - All input fields (Last Name, Phone Number, Address) and the Search button are present and visible.
  - The page layout renders correctly without visual errors.

---

### Test Case 1.2: Search with Empty Fields

- **Purpose:** Confirm that an alert is displayed when no search criteria are entered.
- **Test Steps:**
  1. Load the search page.
  2. Click the Search button without entering any information.
- **Expected Result:**
  - An error message is displayed, prompting the user to enter at least one search criterion (last name, phone number, or address).

---

### Test Case 1.3: Search with Invalid Phone Number Format

- **Purpose:** Validate that the phone number input accepts only valid phone number formats.
- **Test Steps:**
  1. Enter an invalid phone number (e.g., "123") in the Phone Number field.
  2. Enter a valid last name or address.
  3. Click the Search button.
- **Expected Result:**
  - An error message is displayed for invalid phone format.
  - Search results are not returned.

---

### Test Case 1.4: Search with Invalid Address Format

- **Purpose:** Validate that the address input accepts only properly formatted addresses.
- **Test Steps:**
  1. Enter an invalid address (e.g., "123 Fake St.") in the Address field.
  2. Enter a valid last name or phone number.
  3. Click the Search button.
- **Expected Result:**
  - An error message is displayed for invalid address format.
  - Search results are not returned.

---

### Test Case 1.5: Search with Matching Last Name

- **Purpose:** Confirm that the system returns correct search results when only the last name is entered.
- **Test Steps:**
  1. Enter a valid last name (e.g., "Smith") in the Last Name field.
  2. Leave the Phone Number and Address fields empty.
  3. Click the Search button.
- **Expected Result:**
  - The system returns individuals with the matching last name.
  - Results are displayed correctly.

---

### Test Case 1.6: Search with Last Name and Phone Number

- **Purpose:** Confirm that the system returns correct search results when both last name and phone number are entered (but not the address).
- **Test Steps:**
  1. Enter a valid last name (e.g., "Smith") in the Last Name field.
  2. Enter a valid phone number (e.g., "555-1234") in the Phone Number field.
  3. Leave the Address field empty.
  4. Click the Search button.
- **Expected Result:**
  - The system returns individuals with the matching last name and phone number.
  - Results are displayed correctly.

---

### Test Case 1.7: Search with Last Name and Address

- **Purpose:** Confirm that the system returns correct search results when both last name and address are entered (but not the phone number).
- **Test Steps:**
  1. Enter a valid last name (e.g., "Smith") in the Last Name field.
  2. Enter a valid address (e.g., "123 Main St.") in the Address field.
  3. Leave the Phone Number field empty.
  4. Click the Search button.
- **Expected Result:**
  - The system returns individuals with the matching last name and address.
  - Results are displayed correctly.

---

## Summary of Results

| Test Case ID | Description                             | Result |
| ------------ | --------------------------------------- | ------ |
| 1.1          | Load Search Page                        | Pass   |
| 1.2          | Search with Empty Fields                | Pass   |
| 1.3          | Search with Invalid Phone Number Format | Pass   |
| 1.4          | Search with Invalid Address Format      | Pass   |
| 1.5          | Search with Matching Last Name          | Pass   |
| 1.6          | Search with Last Name and Phone Number  | Pass   |
| 1.7          | Search with Last Name and Address       | Pass   |
