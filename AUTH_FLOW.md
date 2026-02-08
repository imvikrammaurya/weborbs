# Authentication Flow Extension
(Works on top of PROMPT.md — does NOT replace it)

## Scope
This file defines:
- Modal-based authentication UX
- Google OAuth using Passport.js
- Manual signup & login rules
- Profile completion enforcement

PROMPT.md remains the source of truth for architecture.

---

## Authentication Methods

The system supports:
1. Manual authentication (Email + Password)
2. Google OAuth authentication (Passport.js)

Rules:
- Backend handles ALL authentication logic
- Frontend never validates credentials directly
- OAuth secrets must come from environment variables

---

## Modal-Based Auth UX Rules

- Authentication starts from a floating modal
- Modal is opened from Navbar "Sign In" button
- No full-page redirect for login/signup
- Modal supports:
  - Login
  - Signup
  - Continue with Google

---

## Manual Signup Rules

Required fields:
- fullName
- companyName
- email
- phone
- password

Rules:
- Email must be verified before dashboard access
- User is created with role = "client" by default
- profileCompleted = true only if all fields are present

---

## Google OAuth Rules (Passport.js)

- Google OAuth handled ONLY via Passport.js backend
- Email from Google is considered verified
- On first Google login:
  - Create user if not exists
  - Set profileCompleted = false
- User must complete profile after OAuth login

---

## Profile Completion Enforcement

Required fields:
- fullName
- companyName
- phone

Rules:
- Users with profileCompleted = false:
  - Cannot access dashboards
  - Must be redirected to profile completion modal/page
- Backend middleware enforces this
- Frontend only reacts to backend response

---

## Frontend Responsibilities

- Show auth modal UI
- Collect user input
- Call backend APIs
- Redirect based on backend response
- NO business logic
- NO token decoding

---

## Backend Responsibilities

- Passport Google strategy
- Email verification
- Profile completion checks
- Role enforcement
- Secure session/token handling

---

## Compatibility Rules

- Existing email/password auth MUST continue to work
- Existing AuthContext structure MUST remain intact
- This file EXTENDS the system — it does not replace anything
