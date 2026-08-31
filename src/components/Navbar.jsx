import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Briefcase, UserCheck, ShieldCheck, Bell } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-blue-600">
          <Briefcase className="w-6 h-6" />
          <span>HirePortal</span>
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors ${
              isActive('/') ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-blue-600'
            }`}
          >
            Find Jobs
          </Link>
          <Link
            to="/dashboard/seeker"
            className={`flex items-center gap-1 text-sm font-medium transition-colors ${
              isActive('/dashboard/seeker') ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-blue-600'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>Job Seeker</span>
          </Link>
          <Link
            to="/dashboard/recruiter"
            className={`flex items-center gap-1 text-sm font-medium transition-colors ${
              isActive('/dashboard/recruiter') ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-blue-600'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Recruiter</span>
          </Link>
          <Link
            to="/dashboard/admin"
            className={`flex items-center gap-1 text-sm font-medium transition-colors ${
              isActive('/dashboard/admin') ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-blue-600'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Admin</span>
          </Link>
          <button className="p-2 text-slate-500 hover:text-blue-600 rounded-full hover:bg-slate-100 transition">
            <Bell className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}