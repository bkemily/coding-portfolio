# CORS Middleware Testing Documentation

## Test Cases

### 1. Allowed CORS Requests

#### Allow Requests

- Test ID: TC_001
- Description: Ensures requests are allowed from the origin specified in the ENV configurations.
- Expected Result: Middleware sets correct CORS headers and measures for allowed API calling origins.

### 2. Disallowed CORS Requests

#### Disallow Requests

- Test ID: TC_002
- Description: Verifies headers are set correctly for disallowed connection origins.
- Expected Result: The middleware sets the correct CORS header to prevent connections on the client-side.

### 3. CORS Options Requests

#### OPTIONS Requests

- Test ID: TC_003
- Description: Validates acceptance of OPTIONS requests over CORS interface.
- Expected Result: Middleware sets necessary CORS headers, including allowed methods.

## Business Requirements

1. BR_001: Allow requests from origins specified in the ENV configurations
2. BR_002: Set proper CORS headers for disallowed origins.
3. BR_003: Handle CORS OPTIONS requests within the Middleware.

## Requirements Traceability Matrix (RTM)

| Test ID | Business Requirement                             | Status  |
| ------- | ------------------------------------------------ | ------- |
| TC_001  | BR_001 - Allow requests from allowed origins     | Success |
| TC_002  | BR_002 - Handle requests from disallowed origins | Success |
| TC_003  | BR_003 - Handle preflight OPTIONS requests       | Success |
