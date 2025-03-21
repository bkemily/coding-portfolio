# Security Policy

## Supported Versions
We actively maintain and support the latest release of the ReliefConnect project. Any critical security patches or updates will be applied to this version.

Versions Supported

Latest: 2.0

Older Versions: 1.0 (Upgrade recommended)

## Reporting a Vulnerability
If you discover a security vulnerability, please do not create a public GitHub issue. Instead, follow these steps:

   1. Contact the Security Lead at [kqs2@students.uwf.edu] .
   2. Provide a detailed description of the issue, including potential impact and any proof of concept (if available).
   3. Allow us at least 7 days to assess and remediate the issue before disclosing it publicly.

## Security Best Practices
The following security best practices must be followed by all contributors:

   ### Authentication & Authorization
   All authentication mechanisms must use secure password hashing algorithms.

   Multi-Factor Authentication (MFA) must be enforced for admin and moderator accounts.

   Role-Based Access Control (RBAC) is used to enforce least privilege.

   ### Data Protection
   User data must be encrypted in transit (TLS 1.2/1.3) and at rest (AES-256).

   Sensitive user data (e.g., passwords, personal details) must never be stored in plaintext.

   Database access should be restricted via network policies and firewalls.

   ### Secure Coding Practices
   Follow OWASP Top 10 guidelines to mitigate common web vulnerabilities.

   Implement input validation and sanitization to prevent SQL injection, XSS, and CSRF attacks.

   Use parameterized queries and ORM methods instead of raw SQL statements.

   ### API Security
   All API requests must use JWT (JSON Web Token) or OAuth2 for authentication.

   APIs should enforce rate limiting and request throttling to prevent abuse.

   API responses should never expose sensitive error messages.

   ### Dependency Management
   Regularly update third-party dependencies and monitor for known vulnerabilities (e.g., via GitHub Dependabot or npm audit).

   Avoid using unverified or deprecated libraries.

   ### Secure Deployment & Monitoring
   All deployments should be containerized (Docker) and follow secure DevOps principles.

   Use GitHub Actions for CI/CD, ensuring automated security scans (e.g., Snyk, OWASP ZAP).

   Logging and monitoring should capture failed authentication attempts and abnormal traffic patterns.

## Incident Response Plan
If a security breach occurs, follow this incident response procedure:

   1. Identify the issue and isolate affected systems.
   2. Contain the breach by revoking compromised credentials and blocking unauthorized access.
   3. Investigate logs, review audit trails, and determine the impact.
   4. Remediate by patching vulnerabilities and implementing stronger controls.
   5. Communicate the incident to stakeholders (if necessary).
   6. Document findings and update security policies.

## Responsible Disclosure
We appreciate responsible security researchers who report vulnerabilities ethically.