import React from 'react';
import { useJobContext } from '../context/JobContext';

export default function AdminConsole() {
  const { users, reports, toggleUserStatus, resolveReport } = useJobContext();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-2xl font-bold text-slate-800">Admin Moderation Console</h1>

      {/* Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200">
          <span className="text-xs text-slate-500">Total Users</span>
          <p className="text-2xl font-bold text-slate-800 mt-1">2,481</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200">
          <span className="text-xs text-slate-500">Active Jobs</span>
          <p className="text-2xl font-bold text-slate-800 mt-1">146</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200">
          <span className="text-xs text-slate-500">Total Applications</span>
          <p className="text-2xl font-bold text-slate-800 mt-1">3,902</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200">
          <span className="text-xs text-slate-500">Pending Flags</span>
          <p className="text-2xl font-bold text-slate-800 mt-1">{reports.length}</p>
        </div>
      </div>

      {/* User Management */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 font-bold text-sm text-slate-800">
          User Lifecycle Management
        </div>
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 text-slate-500 border-b border-slate-200">
            <tr>
              <th className="p-3">User Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {users.map((u) => (
              <tr key={u.id} className="hover:bg-slate-50">
                <td className="p-3 font-semibold text-slate-800">{u.name}</td>
                <td className="p-3 text-slate-600">{u.email}</td>
                <td className="p-3 uppercase text-[10px] font-bold text-slate-500">{u.role}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      u.status === 'Active' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
                    }`}
                  >
                    {u.status}
                  </span>
                </td>
                <td className="p-3 text-right">
                  <button
                    onClick={() => toggleUserStatus(u.id)}
                    className="px-2.5 py-1 border border-slate-300 rounded hover:bg-slate-100 text-xs"
                  >
                    {u.status === 'Active' ? 'Deactivate' : 'Activate'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Moderation Queue */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 font-bold text-sm text-slate-800">
          Content Moderation Queue
        </div>
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 text-slate-500 border-b border-slate-200">
            <tr>
              <th className="p-3">Job Title</th>
              <th className="p-3">Company</th>
              <th className="p-3">Reason</th>
              <th className="p-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {reports.map((r) => (
              <tr key={r.id} className="hover:bg-slate-50">
                <td className="p-3 font-semibold text-slate-800">{r.jobTitle}</td>
                <td className="p-3 text-slate-600">{r.company}</td>
                <td className="p-3 text-rose-600 font-medium">{r.reason}</td>
                <td className="p-3 text-right space-x-2">
                  <button
                    onClick={() => resolveReport(r.id)}
                    className="px-2.5 py-1 bg-emerald-600 text-white rounded text-xs hover:bg-emerald-700"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => resolveReport(r.id)}
                    className="px-2.5 py-1 bg-rose-600 text-white rounded text-xs hover:bg-rose-700"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}