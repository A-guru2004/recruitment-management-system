import React from 'react';
import { useJobContext } from '../context/JobContext';

export default function SeekerDashboard() {
  const { applications, withdrawApplication } = useJobContext();

  const metrics = [
    { label: 'Total applications', count: applications.length },
    { label: 'In review', count: applications.filter((a) => a.status === 'Under review').length },
    { label: 'Interviews scheduled', count: applications.filter((a) => a.status === 'Interview').length },
    { label: 'Decisions', count: applications.filter((a) => a.status === 'Shortlisted' || a.status === 'Rejected').length },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Job Seeker Dashboard</h1>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {metrics.map((m, i) => (
          <div key={i} className="bg-white p-5 rounded-xl border border-slate-200">
            <span className="text-xs text-slate-500 font-medium">{m.label}</span>
            <p className="text-2xl font-bold text-slate-800 mt-1">{m.count}</p>
          </div>
        ))}
      </div>

      {/* Application Tracking Table */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 font-bold text-slate-800">
          My Applications
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500">
                <th className="p-4">Job Title</th>
                <th className="p-4">Company</th>
                <th className="p-4">Applied</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {applications.map((app) => (
                <tr key={app.id} className="hover:bg-slate-50 transition">
                  <td className="p-4 font-semibold text-slate-800">{app.jobTitle}</td>
                  <td className="p-4 text-slate-600">{app.company}</td>
                  <td className="p-4 text-slate-500">{app.appliedDate}</td>
                  <td className="p-4">
                    <span
                      className={`px-2.5 py-1 rounded-full font-medium ${
                        app.status === 'Under review'
                          ? 'bg-amber-50 text-amber-700'
                          : app.status === 'Interview'
                          ? 'bg-blue-50 text-blue-700'
                          : app.status === 'Shortlisted'
                          ? 'bg-emerald-50 text-emerald-700'
                          : 'bg-rose-50 text-rose-700'
                      }`}
                    >
                      {app.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => withdrawApplication(app.id)}
                      className="px-3 py-1 border border-rose-200 text-rose-600 hover:bg-rose-50 rounded font-medium transition"
                    >
                      Withdraw
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}