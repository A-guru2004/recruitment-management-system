import React, { useState } from 'react';
import { useJobContext } from '../context/JobContext';
import { Star, FileText } from 'lucide-react';
import InterviewModal from '../components/InterviewModal';

export default function RecruiterDashboard() {
  const { jobs, applications, updateCandidateStatus } = useJobContext();
  const [selectedApp, setSelectedApp] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-2xl font-bold text-slate-800">Recruiter Console</h1>

      {/* Candidate Pipeline */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex justify-between items-center">
          <h2 className="font-bold text-slate-800 text-sm">Candidate Pipeline Review</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 text-slate-500 border-b border-slate-200">
                <th className="p-3">Candidate</th>
                <th className="p-3">Role</th>
                <th className="p-3">Applied</th>
                <th className="p-3">Resume</th>
                <th className="p-3">Rating</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {applications.map((app) => (
                <tr key={app.id} className="hover:bg-slate-50">
                  <td className="p-3 font-semibold text-slate-800">{app.candidateName}</td>
                  <td className="p-3 text-slate-600">{app.jobTitle}</td>
                  <td className="p-3 text-slate-500">{app.appliedDate}</td>
                  <td className="p-3 text-blue-600 cursor-pointer">
                    <FileText className="w-4 h-4" />
                  </td>
                  <td className="p-3">
                    <div className="flex text-amber-400">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className={`w-3.5 h-3.5 ${s <= app.rating ? 'fill-amber-400' : 'text-slate-200'}`}
                        />
                      ))}
                    </div>
                  </td>
                  <td className="p-3">
                    <select
                      value={app.status}
                      onChange={(e) => updateCandidateStatus(app.id, e.target.value)}
                      className="border border-slate-200 rounded p-1 text-xs"
                    >
                      <option value="Under review">Under review</option>
                      <option value="Interview">Interview</option>
                      <option value="Shortlisted">Shortlisted</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => setSelectedApp(app)}
                      className="px-3 py-1 bg-slate-900 text-white rounded text-xs font-semibold hover:bg-black"
                    >
                      Schedule / Notes
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedApp && <InterviewModal app={selectedApp} onClose={() => setSelectedApp(null)} />}
    </div>
  );
}