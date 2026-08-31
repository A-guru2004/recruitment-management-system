import React, { createContext, useContext, useState } from 'react';
import { initialJobs, initialApplications, initialUsers, initialReports } from '../data/mockData';

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs] = useState(initialJobs);
  const [applications, setApplications] = useState(initialApplications);
  const [users, setUsers] = useState(initialUsers);
  const [reports, setReports] = useState(initialReports);

  const applyForJob = (jobId, data) => {
    const target = jobs.find(j => j.id === jobId);
    const newApp = {
      id: `app-${Date.now()}`,
      jobId,
      jobTitle: target?.title || "Position",
      company: target?.company || "Company",
      candidateName: data.name || "Jordan Blake",
      candidateEmail: data.email || "jordan@mail.com",
      appliedDate: new Date().toISOString().split('T')[0],
      status: "Under review",
      rating: 0,
      coverNote: data.coverNote
    };
    setApplications(prev => [newApp, ...prev]);
  };

  const withdrawApplication = (appId) => {
    setApplications(prev => prev.filter(a => a.id !== appId));
  };

  const updateCandidateStatus = (appId, status) => {
    setApplications(prev => prev.map(a => a.id === appId ? { ...a, status } : a));
  };

  const updateCandidateRating = (appId, rating) => {
    setApplications(prev => prev.map(a => a.id === appId ? { ...a, rating } : a));
  };

  const toggleUserStatus = (userId) => {
    setUsers(prev => prev.map(u => u.id === userId ? { ...u, status: u.status === "Active" ? "Deactivated" : "Active" } : u));
  };

  const resolveReport = (repId) => {
    setReports(prev => prev.filter(r => r.id !== repId));
  };

  return (
    <JobContext.Provider value={{
      jobs, applications, users, reports,
      applyForJob, withdrawApplication, updateCandidateStatus, updateCandidateRating,
      toggleUserStatus, resolveReport
    }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobContext = () => useContext(JobContext);