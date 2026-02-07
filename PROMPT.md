# GLOBAL PROJECT INSTRUCTIONS (READ FIRST)

This file defines the authoritative architecture, rules, and constraints
for this project.

All agents MUST:
- Follow frontend/backend ownership rules
- Respect folder structure
- Generate code incrementally
- Place code only in correct directories
- Never mix frontend and backend logic

If any instruction conflicts with other files,
THIS FILE TAKES PRIORITY.

# AGENT BEHAVIORAL OVERRIDE

1. **Context Awareness**: Always check if a file exists before creating it.
2. **Incremental Execution**: Do not hallucinate the entire codebase in one go. Build step-by-step as defined in the "Global Project Instructions".

Polished AI-Ready Prompt (Dashboard System)
Role:
You are a senior MERN stack architect and product designer.
Design and describe a fully functional, scalable, modern dashboard system for a digital services company.
________________________________________
Product Context
The platform offers:
•	Website development
•	Mobile application development
•	SaaS product development
•	Ongoing management & maintenance services
The dashboard must support Admins (internal team) and Clients (customers) with clear role-based access.
All data must be stored in MongoDB.
Tech stack preference: MERN (MongoDB, Express, React, Node.js)
You may use any modern frontend libraries or UI frameworks.

________________________________________



Project File Structure & Code Ownership (Mandatory)
The codebase must strictly follow a separation of concerns between frontend and backend.
Root Structure
my-app/
├── client/   # Frontend (React + Vite)
└── backend/  # Backend (Node.js + Express)
________________________________________
Frontend (client/) Rules
Frontend is responsible ONLY for:
•	UI rendering
•	User interactions
•	Calling backend APIs
•	Role-based routing and navigation
•	Polling for chat updates
Frontend MUST NOT:
•	Contain business logic
•	Perform permission validation
•	Access the database
•	Decide authorization rules
Frontend Folder Responsibilities
client/src/
├── api/        # API calls only (no business logic)
├── context/    # Auth & global UI state only
├── routes/     # Route guards (AdminRoute, ClientRoute)
├── pages/      # Page-level components only
├── components/ # Reusable UI components only
________________________________________
Backend (backend/) Rules
Backend is the single source of truth.
Backend is responsible for:
•	Authentication & authorization
•	Role validation
•	Business logic
•	Database access (MongoDB)
•	Data validation
•	Security enforcement
Frontend requests must never bypass backend checks.

________________________________________
Core Dashboard Goals
•	Clean, modern, Gen-Z inspired UI
•	Simple, sticky, intuitive UX
•	Controlled, refresh-based updates (non real-time)
•	Extremely easy for developers and internal team to operate
•	No unnecessary complexity
________________________________________
User Roles & Permissions
1. Admin / Internal Team Dashboard
Admins have full control.
Features Required
A. Notifications & Requests
•	Event-based notifications triggered on system actions (non real-time delivery):
o	A new user signs up
o	A product/service is ordered
o	A user submits a request or inquiry
o	A user asks for support/help
o	Notification Delivery
- In-dashboard notification center
- Read / unread notification states
- Optional email notification support for critical actions
- Notifications stored in MongoDB for history
B. Order & Project Tracking
•	Each project must have clearly defined phases, such as:
o	Requirement Gathering
o	Design
o	Development
o	Testing
o	Deployment
o	Maintenance
•	Admin can:
o	View current phase of every project
o	Update the phase with one click
o	Add internal notes per phase
•	Any update made by admin is visible to the client the next time they refresh or revisit the dashboard
C. Client Management
For every client, store:
•	Personal & account details
•	All past and current orders
•	Delivery history
•	Payment history & invoices
•	Issue/ticket history
•	Full conversation history (chat/email summary)
D. Call Logs
•	A “Log Call” option:
o	Admin/team member can add:
	Date & time
	Call duration (optional)
	Call summary/notes
•	Stored permanently in client history for future reference
E. Developer-Friendly Controls
•	No complex workflows
•	Simple buttons/dropdowns for:
o	Updating order status
o	Changing project phase
o	Adding notes or updates
•	Minimal thinking required — actions should be obvious
F.  Search, Filters & Pagination
- Search clients by name, email, or project
- Filter projects by status, phase, SLA health
- Filter payments by date and status
- Pagination for large datasets
- Fast server-side querying using MongoDB indexes
________________________________________
2. Client Dashboard (Read-Only with Messaging)
In-Dashboard Messaging System (Client ↔ Admin)
Include a built-in chat system that allows clients to communicate directly with Admins inside the dashboard.
Client Capabilities
•	Send text messages to Admins
•	View full message history per project or order
•	Messages are text-only (no file uploads allowed at this stage)
•	Messages persist across sessions
•	Clients cannot delete or edit messages after sending
Admin Capabilities
•	View all client messages
•	Reply to messages from the dashboard
•	See conversation history linked to:
o	Specific clients
o	Specific projects or orders
•	Identify unread messages
•	Respond from a centralized chat inbox
System Behavior
•	Messages are stored permanently in MongoDB
•	Messages appear when:
o	Client refreshes the page
o	Admin refreshes the page
•	No real-time WebSocket implementation required
•	Standard REST-based message fetching is sufficient
Auto-Refresh Messaging (Non-Real-Time Polling)
Implement an auto-refresh mechanism only for the chat/message box, without reloading the full page.
Behavior Rules
•	The message list automatically fetches new messages at a fixed interval (e.g., every 5–10 seconds)
•	Only the chat component refreshes — the rest of the dashboard remains untouched
•	No full-page reloads
•	No WebSockets or real-time push mechanisms
Technical Guidelines
•	Use REST APIs to fetch latest messages
•	Use interval-based polling (setInterval or equivalent)
•	Polling starts when the chat box is open
•	Polling pauses when:
o	User navigates away from the chat
o	User logs out
•	Efficient querying to avoid duplicate message rendering
User Experience
•	New messages appear automatically in the chat window
•	Smooth, non-disruptive updates
•	No flickering or UI jump
•	Works consistently for both Admin and Client dashboards
This approach must:
•	Align with the existing non-real-time architecture
•	Maintain system simplicity
•	Avoid unnecessary server load

Data Requirements
•	Each message must store:
o	Sender role (Client/Admin)
o	Sender ID
o	Receiver ID
o	Message content
o	Related project or order (optional reference)
o	Timestamp
o	Read / unread status
Security & Access Control
•	Clients can only see their own conversations
•	Admins can see all conversations
•	Proper authorization must be enforced at API level

Clients have view-only access.
Clients Can See:
•	Current project phase & progress timeline
•	All past purchases
•	Payment & invoice history
•	Support tickets & issue history
•	Admin updates (visible after refresh or revisit)
Clients Cannot:
•	Modify project phases
•	Change order status
•	Edit any internal data
________________________________________
Update Visibility Rules
•	Admin updates do NOT appear instantly to clients.
•	Client sees updates only when:
o	They refresh the dashboard, or
o	They log in again, or
o	They manually revisit the project/status page
This ensures:
•	No WebSocket dependency
•	No unnecessary complexity
•	Predictable, stable data flow
•	Easier debugging and maintenance
________________________________________
Technical Implementation Guidelines
•	Use standard REST APIs (no WebSockets required)
•	Data flow:
o	Admin updates project/order status
o	Data is saved to MongoDB
o	Client dashboard fetches latest data on:
	Page load
	Manual refresh
•	Optional polling is not required
•	Component-level auto-refresh for messaging (interval-based polling)
________________________________________
Error Handling & Edge Cases
- Graceful handling of failed API requests
- Clear error messages for Admin and Client users
- Empty states for:
  - No projects
  - No orders
  - No analytics data
- Safe handling of partially completed projects
- Prevent invalid state transitions (e.g., Deployment before Development)

________________________________________

User Experience Impact
•	Admin has full control over when updates are made
•	Clients always see the latest saved state
•	No confusion caused by mid-session changes
•	Cleaner mental model for users

________________________________________

Authentication, Routing & Dashboard Access Control (Mandatory)
Implement a role-based authentication and routing system that controls access to dashboards after login.
Public Website
•	The existing frontend acts as a public marketing website
•	Accessible to all users without authentication
•	Includes landing pages, service pages, and contact forms
________________________________________
Authentication Flow
•	Users can sign up or log in using credentials
•	On successful authentication:
o	Backend returns a JWT token and user role (client, admin, or team)
o	Frontend stores the token securely
o	User is redirected based on role
________________________________________
Client Dashboard Access
•	After login/signup, clients are redirected to a dedicated client dashboard page
•	Client dashboard is accessible only to authenticated users with the client role
•	Clients cannot access admin or internal team routes
•	Unauthorized access attempts redirect to login or “access denied” page
________________________________________
Admin Dashboard Access
•	Admins log in via a separate admin route (e.g., /admin/login)
•	After successful login, admins are redirected to the admin dashboard
•	Admin dashboard routes are protected and accessible only to users with the admin role
•	Clients attempting to access admin routes are blocked at both frontend and backend levels
________________________________________
Routing Rules
•	Use protected routes for:
o	Client dashboard pages
o	Admin dashboard pages
•	Role-based route guards must exist on the frontend
•	Backend APIs must also validate user role for every protected endpoint
________________________________________
Security Requirements
•	Frontend route protection is for UX only
•	Backend authorization is mandatory and authoritative
•	Tokens must be validated on every protected request
•	Role checks must be enforced server-side


________________________________________
UI / UX Requirements
•	Modern SaaS-style interface
•	Gen-Z aesthetic (clean, bold, minimal)
•	Sticky navigation
•	Dark mode support (optional but preferred)
•	Responsive (desktop-first, mobile-friendly)
•	Clear separation between Admin and Client views
________________________________________
Data & Architecture
•	MongoDB schema design for:
o	Users
o	Orders
o	Projects
o	Phases
o	Payments
o	Conversations
o	Call logs
•	REST APIs or GraphQL
•	Role-based authentication (JWT or similar)
•	Scalable structure for future features
•	Data Backup & Recovery
•	- Regular MongoDB backups
•	- Ability to restore data in case of failure
•	- Protection against accidental data loss

________________________________________


Backend Internal Architecture (Mandatory)
Backend must follow a layered architecture:
backend/src/
├── models/       # MongoDB schemas only
├── controllers/  # Request handling only (no DB logic)
├── services/     # Business logic only
├── routes/       # API route definitions
├── middleware/   # Auth, role checks, rate limiting
├── utils/        # Helpers, logging, constants
├── config/       # DB & environment config
Backend Rules
•	Controllers must NOT directly access MongoDB
•	Models must NOT contain business logic
•	Services must NOT handle HTTP requests
•	Middleware must handle authorization and validation only

________________________________________
Bonus Systems & Advanced Controls (Required, Not Optional)
Design and include the following advanced systems to make the dashboard production-grade and scalable:
A. Analytics Dashboard
Provide an analytics section for Admin users that includes:
•	Total revenue (lifetime + monthly)
•	Active projects count
•	Completed projects
•	Pending / delayed projects
•	Revenue breakdown by:
o	Websites
o	Mobile apps
o	SaaS products
•	Basic charts and visual summaries (bar / line charts)
Analytics must be:
•	Read-only
•	Fast-loading
•	Based on MongoDB aggregated data
________________________________________
B. Activity Logs (Internal Transparency)
Maintain a complete activity log system that records:
•	Which admin/team member performed an action
•	What action was performed
•	On which entity (project, order, client, payment, etc.)
•	Timestamp of the action
Examples:
•	“Admin updated project phase from Design → Development”
•	“Payment marked as completed”
•	“Client issue resolved”
Logs must be:
•	Immutable (cannot be edited or deleted)
•	Visible only to Admins
•	Stored in MongoDB
________________________________________
C. Internal Team Task Assignment
Add an internal task management system:
•	Assign tasks to team members
•	Link tasks to:
o	Projects
o	Clients
•	Task status:
o	Pending
o	In Progress
o	Completed
•	Due dates & priority levels
This system is internal only and not visible to clients.
________________________________________
D. SLA Tracking (Service-Level Agreements)
Implement SLA tracking to monitor service commitments:
•	Response time SLA
•	Delivery timeline SLA
•	Issue resolution SLA
Each project or ticket should:
•	Track SLA deadlines
•	Show SLA status:
o	On track
o	At risk
o	Breached
Admins can view SLA health across all projects.
________________________________________
E. Audit Logs (Security & Compliance)
Maintain a high-level audit log system that records:
•	Login attempts
•	Role changes
•	Permission updates
•	Critical system-level actions
Audit logs must:
•	Be read-only
•	Be accessible only to super-admins
•	Never be modifiable
________________________________________
Status Update Transparency
To improve clarity and user trust, include a visible timestamp on all project and order status views:
•	Display text:
“Last updated on: [date & time]”
•	Timestamp updates only when an Admin makes a change
•	Clients see the timestamp when they refresh or revisit the dashboard
•	No real-time syncing required
This feature must:
•	Work with standard REST APIs
•	Reflect MongoDB stored update timestamps
•	Be consistent across all client-visible status pages
________________________________________
🔥 Why This Matters (Straight Talk)
These two additions:
•	Make your dashboard investor-ready
•	Prevent “who changed what” confusion
•	Reduce internal chaos as your team grows
•	Build silent trust with clients
This is the difference between:
“Freelancer dashboard” ❌
“Scalable SaaS platform” ✅


Final Output Expectation
The final response should include the following deliverables in a clear, structured, and professional manner:
1. System Architecture
•	Clear high-level system architecture
•	Separation of frontend, backend, database, and authentication layers
•	Explanation of data flow between Admin and Client dashboards
________________________________________
2. Feature Breakdown
•	Detailed feature list for:
o	Admin dashboard
o	Internal team dashboard
o	Client (read-only) dashboard
________________________________________
3. Suggested Tech Stack
•	Frontend technologies
•	Backend technologies
•	Authentication & authorization approach
•	Database choice and reasoning (MongoDB)
________________________________________
4. MongoDB Schema Design (Mandatory)
Design detailed, production-ready MongoDB schemas for the entire dashboard system.
Schemas must cover:
•	Users (Admin, Team Member, Client roles)
•	Authentication & role management
•	Projects and project phases
•	Orders and service packages
•	Payments and invoices
•	Client issues / support tickets
•	Activity logs (who did what, when)
•	Audit logs (security-critical actions)
•	Internal team tasks
•	SLA tracking
•	Analytics-friendly data structures
•	- Chat conversations & messages
•	Environment & Configuration
•	- Separate environments for development, staging, and production
•	- Environment-based configuration using environment variables
•	- Secure handling of secrets and API keys
Schemas must:
•	Be optimized for scalability
•	Support fast reads for dashboards
•	Be suitable for aggregation pipelines
•	Include timestamps and proper references
•	Follow best practices for a MERN-based SaaS product
________________________________________
5. Role-Based API Permission Mapping (Mandatory)
Define a clear Admin vs Client API permission map for the system.
This must include:
•	Admin-only APIs (create, update, delete operations)
•	Client read-only APIs (view status, purchase history, invoices)
•	Internal team permissions (task updates, call logs, notes)
•	Role-based access control rules
•	Authorization middleware strategy (JWT, role checks)
•	Protection against unauthorized access or data modification
The permission map should:
•	Clearly separate responsibilities
•	Prevent clients from modifying any project or system data
•	Be easy for developers to understand and maintain
•	Align with industry best practices for SaaS security
________________________________________
6. Authentication & Authorization
•	Login flow
•	Role-based access control strategy
•	Token handling and security best practices
•	Security Enhancements
•	- API rate limiting to prevent abuse
•	- Protection against brute-force login attempts
•	- Secure password hashing and token expiration
________________________________________
7. UI / UX Layout Overview
•	Admin dashboard layout
•	Client dashboard layout
•	Navigation structure
•	Design principles (simple, Gen-Z, modern, sticky UI)
________________________________________
8. Developer-Friendly Implementation Strategy
•	Clean folder structure (MERN-based)
•	Easy-to-maintain APIs
•	Simple workflows for updating project status
•	Minimal cognitive load for developers and internal team


- Basic testing strategy (API tests, role-based access tests)
- Validation of critical flows (login, order update, status change)


AI Output Instructions (Critical)
When generating code:
•	Output actual code files, not explanations
•	Generate code incrementally by feature (auth first, then dashboards, then chat), not the entire system in one response.
•	Place each file in its correct folder
•	Clearly indicate file paths before code blocks
Example:
•	// backend/src/controllers/auth.controller.js
•	Frontend code must be written only inside client/
•	Backend code must be written only inside backend/
•	Do NOT mix frontend and backend logic in the same file
•	Do NOT place database logic in frontend files
•	Do NOT place UI logic in backend files
•	Use existing folder structure if already present; do not invent new folders unless explicitly required.
The generated code must be directly usable without refactoring.

