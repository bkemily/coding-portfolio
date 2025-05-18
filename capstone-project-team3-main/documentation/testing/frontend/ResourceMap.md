# Safe and Well Manual Frontend Test Suite

## Resource Map Functionality

**Objective:**  
Validate the functionality and usability of the Resource Map, ensuring it displays the correct resources, allows proper interaction, and performs accurate geolocation services.

---

### Test Case 1: Load Resource Map Page

- **Purpose:** Verify that the Resource Map page loads correctly and displays the map.
- **Preconditions:** User has access to the Safe and Well Resource Map page.
- **Test Steps:**
  1. Navigate to the Resource Map page.
- **Expected Result:**
  - The map is displayed correctly, centered on the user's location or a predefined default location.
  - All map controls (zoom, search, etc.) are visible and functional.

---

### Test Case 2: View Map with Default Location

- **Purpose:** Confirm that the map shows the default location or the user's current location upon initial loading.
- **Test Steps:**
  1. Load the Resource Map page.
- **Expected Result:**
  - The map loads with the default location (if no geolocation data is available), or it centers on the user's current location if geolocation services are enabled.

---

### Test Case 3: Zoom In/Out on the Map

- **Purpose:** Validate the functionality of zooming in and out on the map.
- **Test Steps:**
  1. Use the zoom-in and zoom-out controls on the map.
- **Expected Result:**
  - The map zooms in and out smoothly without issues.
  - Map features (such as markers and labels) remain properly aligned and legible.

---

### Test Case 4: Search for Resource

- **Purpose:** Verify the ability to search for a specific resource by name or category.
- **Test Steps:**
  1. Enter a resource name or category into the search bar.
  2. Click the search button.
- **Expected Result:**
  - The map updates to display only resources that match the search criteria.
  - A list of resources is displayed in a panel or dropdown.

---

### Test Case 5: Click on Resource Marker

- **Purpose:** Ensure clicking on a resource marker shows accurate details about the resource.
- **Test Steps:**
  1. Click on a marker representing a resource on the map.
- **Expected Result:**
  - A pop-up or side panel appears, showing detailed information about the resource (e.g., name, contact info, address).
  - The resource's location is highlighted on the map.

---

### Test Case 6: Filter Resources by Category

- **Purpose:** Confirm that filtering by resource category functions correctly.
- **Test Steps:**
  1. Use the filter options to select a resource category (e.g., food, shelter, medical).
  2. Apply the filter.
- **Expected Result:**
  - Only the resources within the selected category are displayed on the map.
  - Resources outside of the selected category are hidden.

---

### Test Case 7: View Resource Details

- **Purpose:** Confirm that users can access complete information about a resource.
- **Test Steps:**
  1. Select a resource from the search results or a marker on the map.
  2. View the resource details in a modal or separate page.
- **Expected Result:**
  - Detailed information about the resource is shown, including address, contact info, and available services.
  - If available, additional resource-related links (website, hours of operation, etc.) are visible.

---

### Test Case 8: Map Responsiveness

- **Purpose:** Validate that the Resource Map is fully responsive across different devices and screen sizes.
- **Test Steps:**
  1. Open the Resource Map page on different devices (desktop, tablet, mobile).
- **Expected Result:**
  - The map adjusts and resizes according to the device screen size.
  - All map features and controls are functional and accessible without horizontal scrolling.

---

## Summary of Results

| Test Case ID | Description                             | Result |
| ------------ | --------------------------------------- | ------ |
| 1            | Load Resource Map Page                  | Pass   |
| 2            | View Map with Default Location          | Pass   |
| 3            | Zoom In/Out on the Map                  | Pass   |
| 4            | Search for Resource                     | Pass   |
| 5            | Click on Resource Marker                | Pass   |
| 6            | Filter Resources by Category            | Pass   |
| 7            | View Resource Details                   | Pass   |
| 8            | Map Responsiveness                      | Pass   |
