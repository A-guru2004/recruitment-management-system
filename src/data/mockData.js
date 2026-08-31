export const initialJobs = [
  {
    id: "job-1",
    title: "Backend Engineer",
    company: "Acme Co",
    location: "Remote",
    type: "Full-time",
    experience: "Senior",
    salary: "$90k - $120k",
    deadline: "2026-09-15",
    skills: ["Node.js", "Express.js", "PostgreSQL", "REST API"],
    description: "Scale our core APIs and maintain relational database integrity using PostgreSQL and Node.js."
  },
  {
    id: "job-2",
    title: "Product Designer",
    company: "Nova Inc",
    location: "San Francisco, CA",
    type: "Full-time",
    experience: "Entry",
    salary: "$75k - $95k",
    deadline: "2026-09-20",
    skills: ["Figma", "UI/UX", "Wireframing"],
    description: "Craft high-conversion wireframes, user journeys, and responsive user interfaces."
  },
  {
    id: "job-3",
    title: "Data Analyst",
    company: "Orbit Labs",
    location: "Remote",
    type: "Part-time",
    experience: "Entry",
    salary: "$60k - $75k",
    deadline: "2026-09-30",
    skills: ["SQL", "Python", "Tableau"],
    description: "Analyze recruitment telemetry and build real-time dashboard analytics."
  },
  {
    id: "job-4",
    title: "QA Engineer",
    company: "Fieldstone",
    location: "New York, NY",
    type: "Full-time",
    experience: "Senior",
    salary: "$85k - $110k",
    deadline: "2026-09-05",
    skills: ["Jest", "Cypress", "Postman"],
    description: "Automated test script execution and end-to-end regression testing."
  }
];

export const initialApplications = [
  {
    id: "app-101",
    jobId: "job-1",
    jobTitle: "Backend Engineer",
    company: "Acme Co",
    candidateName: "Jordan Blake",
    candidateEmail: "jordan@mail.com",
    appliedDate: "2026-08-16",
    status: "Under review",
    rating: 3,
    coverNote: "4 years experience in Node.js and SQL."
  },
  {
    id: "app-102",
    jobId: "job-1",
    jobTitle: "Backend Engineer",
    company: "Acme Co",
    candidateName: "Riley Nguyen",
    candidateEmail: "riley@tech.com",
    appliedDate: "2026-08-17",
    status: "Shortlisted",
    rating: 4,
    coverNote: "Specialized in high-throughput PostgreSQL queries."
  },
  {
    id: "app-103",
    jobId: "job-1",
    jobTitle: "Backend Engineer",
    company: "Acme Co",
    candidateName: "Sam Okafor",
    candidateEmail: "sam@dev.org",
    appliedDate: "2026-08-19",
    status: "Interview",
    rating: 2,
    coverNote: "PERN stack developer with AWS experience."
  },
  {
    id: "app-104",
    jobId: "job-4",
    jobTitle: "QA Engineer",
    company: "Fieldstone",
    candidateName: "Jordan Blake",
    candidateEmail: "jordan@mail.com",
    appliedDate: "2026-08-12",
    status: "Rejected",
    rating: 1,
    coverNote: "Experienced in end-to-end Cypress UI testing."
  }
];

export const initialUsers = [
  { id: "usr-1", name: "Jordan Blake", email: "jordan@mail.com", role: "job_seeker", status: "Active" },
  { id: "usr-2", name: "Nova Inc HR", email: "hr@novainc.com", role: "recruiter", status: "Deactivated" },
  { id: "usr-3", name: "Sam Okafor", email: "sam@dev.org", role: "job_seeker", status: "Active" }
];

export const initialReports = [
  { id: "rep-1", jobTitle: "Backend Engineer", company: "Acme Co", reason: "Duplicate posting", status: "Flagged" }
];