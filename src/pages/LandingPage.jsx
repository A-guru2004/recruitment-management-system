import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Briefcase, DollarSign, Calendar } from 'lucide-react';
import { useJobContext } from '../context/JobContext';
import ApplicationModal from '../components/ApplicationModal';

export default function LandingPage() {
  const { jobs } = useJobContext();
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [activeJobForModal, setActiveJobForModal] = useState(null);

  const filteredJobs = jobs.filter((job) => {
    const matchesKeyword =
      job.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      job.company.toLowerCase().includes(searchKeyword.toLowerCase());
    const matchesType = selectedType === 'All' || job.type === selectedType;
    return matchesKeyword && matchesType;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search Header */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm mb-8 flex flex-col md:flex-row gap-3">
        <div className="flex-1 flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Job title or keyword..."
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            className="w-full text-sm outline-none bg-transparent"
          />
        </div>
        <button className="bg-blue-600 text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-blue-700 transition">
          Search Jobs
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar Filter */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 h-fit space-y-5">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Employment Type</h3>
          <div className="space-y-2">
            {['All', 'Full-time', 'Part-time'].map((type) => (
              <label key={type} className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                <input
                  type="radio"
                  name="jobType"
                  checked={selectedType === type}
                  onChange={() => setSelectedType(type)}
                  className="text-blue-600"
                />
                <span>{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Job Listings Grid */}
        <div className="md:col-span-3 space-y-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold text-slate-800">Available Positions ({filteredJobs.length})</h2>
          </div>

          {filteredJobs.map((job) => (
            <div key={job.id} className="bg-white p-5 rounded-xl border border-slate-200 hover:shadow-md transition">
              <div className="flex justify-between items-start">
                <div>
                  <Link to={`/jobs/${job.id}`} className="text-base font-bold text-slate-800 hover:text-blue-600">
                    {job.title}
                  </Link>
                  <p className="text-xs text-slate-500 mt-0.5">{job.company} • {job.location}</p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700">
                  {job.type}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 my-3">
                {job.skills.map((skill, index) => (
                  <span key={index} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center pt-3 border-t border-slate-100 text-xs text-slate-500">
                <div className="flex gap-4">
                  <span className="font-semibold text-slate-700">{job.salary}</span>
                  <span>Deadline: {job.deadline}</span>
                </div>
                <div className="flex gap-2">
                  <Link
                    to={`/jobs/${job.id}`}
                    className="px-3 py-1.5 border border-slate-300 rounded text-slate-700 hover:bg-slate-50"
                  >
                    Details
                  </Link>
                  <button
                    onClick={() => setActiveJobForModal(job)}
                    className="px-3 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700 font-medium"
                  >
                    Apply now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeJobForModal && (
        <ApplicationModal job={activeJobForModal} onClose={() => setActiveJobForModal(null)} />
      )}
    </div>
  );
}