import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useJobContext } from '../context/JobContext';
import { ArrowLeft, Building2, MapPin, Calendar, Check } from 'lucide-react';
import ApplicationModal from '../components/ApplicationModal';

export default function JobDetailsPage() {
  const { id } = useParams();
  const { jobs } = useJobContext();
  const [openModal, setOpenModal] = useState(false);

  const job = jobs.find((j) => j.id === id);

  if (!job) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 text-center">
        <h2 className="text-xl font-bold">Job Posting Not Found</h2>
        <Link to="/" className="text-blue-600 text-sm mt-2 inline-block">← Back to job board</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link to="/" className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-800 mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to job board
      </Link>

      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">{job.title}</h1>
            <p className="text-sm text-slate-500 mt-1">{job.company} • {job.location}</p>
          </div>
          <button
            onClick={() => setOpenModal(true)}
            className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Apply now
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-slate-100 text-xs">
          <div>
            <span className="text-slate-400 block">Employment Type</span>
            <span className="font-semibold text-slate-700">{job.type}</span>
          </div>
          <div>
            <span className="text-slate-400 block">Experience</span>
            <span className="font-semibold text-slate-700">{job.experience}</span>
          </div>
          <div>
            <span className="text-slate-400 block">Salary Package</span>
            <span className="font-semibold text-slate-700">{job.salary}</span>
          </div>
          <div>
            <span className="text-slate-400 block">Application Deadline</span>
            <span className="font-semibold text-slate-700">{job.deadline}</span>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-slate-800 uppercase mb-2">Required Skills</h3>
          <div className="flex flex-wrap gap-2">
            {job.skills.map((skill, index) => (
              <span key={index} className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-slate-800 uppercase mb-2">Role Overview</h3>
          <p className="text-sm text-slate-600 leading-relaxed">{job.description}</p>
        </div>
      </div>

      {openModal && <ApplicationModal job={job} onClose={() => setOpenModal(false)} />}
    </div>
  );
}