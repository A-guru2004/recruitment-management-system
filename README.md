# Job Application & Recruiter Management System (HirePortal)

A modern, responsive Single Page Application (SPA) designed to streamline end-to-end recruitment pipelines for Job Seekers, Recruiters, and Administrators.

---

## 📌 Development Overview
Built as the Week 2 front-end deliverable for the Full Stack Development internship. The interface directly translates the functional requirements (FR-01 to FR-33) and high-fidelity wireframes established during Week 1 architecture design into interactive, accessible React components.

---

## 🛠️ Tech Stack & Design Patterns
* **Core Framework:** React.js (v18+) with Vite tooling
* **Styling & Layout:** Tailwind CSS for fully responsive design
* **State Management:** React Context API (`JobContext`) providing centralized, reactive state across all user personas
* **Routing:** `react-router-dom` (v6) for multi-view client-side navigation
* **Icons:** `lucide-react`
* **Architecture Pattern:** Decoupled Container-Presenter & Component-Driven Architecture

---

## 🚀 Application Views & Features
1. **Landing & Job Discovery (`/`)**
   * Global search input filtering across job titles and company names.
   * Faceted radio filtering by employment type (Full-time, Part-time).
   * Interactive modal with resume upload validation (.pdf / .docx) and cover note submission.
2. **Role Detail View (`/jobs/:id`)**
   * Full role specifications, required skill tags, salary packages, and deadlines.
3. **Job Seeker Dashboard (`/dashboard/seeker`)**
   * Metric counters tracking application pipeline states.
   * Tabular tracking dashboard with live status badges and application withdrawal triggers.
4. **Recruiter Console (`/dashboard/recruiter`)**
   * Candidate review pipeline table with interactive star ratings.
   * Interview scheduling console with modal workflows for Google Meet invitations and evaluation notes.
5. **Admin Moderation Console (`/dashboard/admin`)**
   * High-level platform analytics cards.
   * User lifecycle management (one-click activation/deactivation).
   * Flagged content moderation queue with approve and remove actions.

---

## 💻 Instructions to Run Locally

### Prerequisites
* **Node.js:** v18.0.0 or higher
* **npm:** v9.0.0 or higher

### Installation & Execution
```bash
# 1. Clone repository or extract the ZIP file
cd recruitment-portal

# 2. Install all dependencies
npm install

# 3. Start the local development server
npm run dev

# week 3 task will be start