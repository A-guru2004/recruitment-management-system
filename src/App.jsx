import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { JobProvider } from './context/JobContext';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import JobDetailsPage from './pages/JobDetailsPage';
import SeekerDashboard from './pages/SeekerDashboard';
import RecruiterDashboard from './pages/RecruiterDashboard';
import AdminConsole from './pages/AdminConsole';

export default function App() {
  return (
    <JobProvider>
      <Router>
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/jobs/:id" element={<JobDetailsPage />} />
              <Route path="/dashboard/seeker" element={<SeekerDashboard />} />
              <Route path="/dashboard/recruiter" element={<RecruiterDashboard />} />
              <Route path="/dashboard/admin" element={<AdminConsole />} />
            </Routes>
          </main>
          <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500">
            © 2026 HirePortal • Job Application & Recruiter Management System
          </footer>
        </div>
      </Router>
    </JobProvider>
  );
}