# Safe and Well Manual Frontend Test Suite

## Section 1: Resource Pages Navigation

**Objective:**  
Ensure that users can navigate and access the informational resource pages, with proper links functioning and content display, offering useful emergency preparedness resources.

---

### Test Case 1.1: Load Resource Page List

- **Purpose:** Verify that the list of available resource pages loads correctly.
- **Preconditions:** User has access to the "Resource Pages" section.
- **Test Steps:**
  1. Navigate to the "Resource Pages" section on the Safe and Well platform.
- **Expected Result:**
  - A list of available resource categories (e.g., Emergency Kits, Evacuation Plans, First Aid Basics, etc.) is visible.
  - Links for each resource category are visible and clickable.

---

### Test Case 1.2: Clicking a Resource Link

- **Purpose:** Confirm that clicking on a resource link takes the user to the appropriate static resource page.
- **Test Steps:**
  1. Click on a resource link from the list (e.g., "Emergency Kits").
- **Expected Result:**
  - The user is redirected to the corresponding static resource page (e.g., an emergency kit checklist with detailed content).
  - The page displays static text describing the resource in an organized and readable format.

---

### Test Case 1.3: Resource Content Visibility

- **Purpose:** Ensure that content for each resource page is correctly displayed without visual errors.
- **Test Steps:**
  1. After clicking on a resource link (e.g., "First Aid Basics"), verify that the page loads.
- **Expected Result:**
  - The resource page should contain the expected content, such as a first aid checklist, steps for handling emergencies, and any relevant images or descriptions.
  - Content should be fully visible, well-organized, and free from formatting or display issues.

---

### Test Case 1.4: Return Navigation to Resource List

- **Purpose:** Confirm that users can navigate back to the list of resource pages after viewing a resource.
- **Test Steps:**
  1. After viewing a resource page, click a "Back" or "Return to Resource List" button.
- **Expected Result:**
  - The user is returned to the main resource page list.
  - The list should be properly loaded, with no disruption or errors.

---

### Test Case 1.5: Resource Content Completeness

- **Purpose:** Validate that each resource page contains relevant and complete content for the user’s needs.
- **Test Steps:**
  1. Click on a resource link (e.g., "Shelter Resources").
  2. Review the content for completeness.
- **Expected Result:**
  - The resource page should contain relevant sections such as available shelters, contact information, and guidelines on how to access shelters during a disaster.
  - No missing content or broken links should be present.

---

## Summary of Results

| Test Case ID | Description                        | Result |
| ------------ | ---------------------------------- | ------ |
| 1.1          | Load Resource Page List            | Pass   |
| 1.2          | Clicking a Resource Link           | Pass   |
| 1.3          | Resource Content Visibility        | Pass   |
| 1.4          | Return Navigation to Resource List | Pass   |
| 1.5          | Resource Content Completeness      | Pass   |
