# Safe and Well Manual Frontend Test Suite

## Section 1: Registration Form Submission

**Objective:**  
Validate that users can successfully register as "Safe and Well" through correct form completion, input validation, proper feedback messaging, and secure data handling.

---

### Test Case 1.1: Load Registration Form

- **Purpose:** Verify that the registration form page loads correctly on a desktop device.
- **Preconditions:** User has access to the Safe and Well registration page.
- **Test Steps:**
  1. Navigate to the Safe and Well registration page.
- **Expected Result:**
  - All input fields (First Name, Last Name, Phone Number, Address, Safety Status, Optional Message) and the Submit button are present and visible.
  - The page layout renders correctly without visual errors.

---

### Test Case 1.2: Submission with Empty Fields

- **Purpose:** Confirm that required fields are enforced.
- **Test Steps:**
  1. Load the registration form.
  2. Click the Submit button without entering any information.
- **Expected Result:**
  - Red alert banners are displayed for each required field.
  - Submission is prevented until all required fields are completed.

---

### Test Case 1.3: Invalid US Phone Number Format

- **Purpose:** Validate that the phone number input accepts only properly formatted US phone numbers.
- **Test Steps:**
  1. Enter an invalid phone number (e.g., "123") into the Phone Number field.
  2. Attempt to submit the form.
- **Expected Result:**
  - An error message is displayed for invalid phone format.
  - Form submission is blocked.

---

### Test Case 1.4: Invalid International Phone Number Format

- **Purpose:** Validate international phone number format.
- **Test Steps:**
  1. Enter an improperly formatted international phone number (e.g., "+44 123").
  2. Attempt to submit the form.
- **Expected Result:**
  - An error message is displayed for invalid phone format.
  - Form submission is blocked.

---

### Test Case 1.5: Invalid Zip Code Format

- **Purpose:** Validate that only proper US zip codes are accepted.
- **Test Steps:**
  1. Enter an invalid zip code (e.g., "123") in the Address field.
  2. Attempt to submit the form.
- **Expected Result:**
  - An error message is displayed indicating the zip code is invalid.
  - Form submission is blocked.

---

### Test Case 1.6: Invalid Email Address Format

- **Purpose:** Confirm email input is properly validated for correct format.
- **Test Steps:**
  1. Enter an invalid email address (e.g., "user@@domain").
  2. Attempt to submit the form.
- **Expected Result:**
  - An error message is displayed for invalid email format.
  - Form submission is blocked.

---

### Test Case 1.7: Successful Form Submission

- **Purpose:** Confirm that the form can be submitted successfully with valid data.
- **Test Steps:**
  1. Complete all required fields with valid input:
     - Proper First Name and Last Name.
     - Valid US or International phone number.
     - Complete home address with correctly formatted zip code.
     - Select a safety status from the dropdown menu.
     - Optionally, provide a status message.
  2. Submit the form.
- **Expected Result:**
  - Form submission succeeds.
  - User is redirected to a confirmation page.
  - A success message confirming registration is displayed.

---

## Summary of Results

| Test Case ID | Description                               | Result |
| ------------ | ----------------------------------------- | ------ |
| 1.1          | Load Registration Form                    | Pass   |
| 1.2          | Submission with Empty Fields              | Pass   |
| 1.3          | Invalid US Phone Number Format            | Pass   |
| 1.4          | Invalid International Phone Number Format | Pass   |
| 1.5          | Invalid Zip Code Format                   | Pass   |
| 1.6          | Invalid Email Address Format              | Pass   |
| 1.7          | Successful Form Submission                | Pass   |
