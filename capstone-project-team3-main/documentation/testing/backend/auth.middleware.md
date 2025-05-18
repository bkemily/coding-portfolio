# Auth Middleware Controller Testing Documentation

## Test Cases

### 1. Reject Requests Without `req.user`

#### Test Description

- **Test ID:** TC_001
- **Description:** Validates the response when a request does not contain `req.user` and the auth middleware rejects the request.
- **Expected Result:** The middleware returns a 401 status code with the message "Unauthorized access."

#### Test Steps

1. Mount the `authMiddleware` middleware on the Express app.
2. Make a `GET` request to the `/test` route without providing `req.user`.
3. Verify that the response status code is 401.
4. Verify that the response body contains `{ success: false, message: 'Unauthorized access' }`.

---

### 2. Allow Requests with `req.user`

#### Test Description

- **Test ID:** TC_002
- **Description:** Validates the response when a request includes `req.user` and the auth middleware allows the request to proceed.
- **Expected Result:** The middleware allows the request, passing control to the next handler, and the response returns a 200 status code with the user data.

#### Test Steps

1. Set `req.user` with a stubbed user object before calling `authMiddleware`.
2. Make a `GET` request to the `/test` route, with `req.user` set.
3. Verify that the response status code is 200.
4. Verify that the response body contains the user data: `{ success: true, user: { id: 'user123', name: 'Test' } }`.

## Business Requirements

1. **BR_001:** The middleware must reject requests that do not contain `req.user` with a 401 status code and an "Unauthorized access" message.
2. **BR_002:** The middleware must allow requests that contain `req.user` and pass control to the next handler in the middleware chain.

## Requirements Traceability Matrix (RTM)

| **Test ID** | **Business Requirement**                    | **Status** |
| ----------- | ------------------------------------------- | ---------- |
| TC_001      | BR_001 - Reject requests without `req.user` | Success    |
| TC_002      | BR_002 - Allow requests with `req.user`     | Success    |
