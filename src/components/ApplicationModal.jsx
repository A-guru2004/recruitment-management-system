import React, { useState } from 'react';
import { X, UploadCloud, CheckCircle2 } from 'lucide-react';
import { useJobContext } from '../context/JobContext';

export default function ApplicationModal({ job, onClose }) {
  const { applyForJob } = useJobContext();
  const [coverNote, setCoverNote] = useState('');
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    applyForJob(job.id, {
      coverNote,
      resumeFileName: file ? file.name : 'candidate_resume.pdf'
    });
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-lg w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-400 hover:text-slate-600"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center">
            <CheckCircle2 className="w-12 h-12 text-emerald-500 mb-2" />
            <h3 className="text-xl font-bold text-slate-800">Application Submitted!</h3>
            <p className="text-sm text-slate-500 mt-1">
              Your application for {job.title} at {job.company} was sent.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800">Apply: {job.title}</h2>
            <p className="text-xs text-slate-500">{job.company} • {job.location}</p>

            <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-blue-400 transition bg-slate-50">
              <UploadCloud className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <p className="text-sm text-slate-600 font-medium">
                {file ? file.name : "Drop resume — .pdf or .docx"}
              </p>
              <input
                type="file"
                accept=".pdf,.docx"
                onChange={(e) => setFile(e.target.files[0])}
                className="mt-2 text-xs text-slate-500 file:mr-2 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                Cover Note
              </label>
              <textarea
                rows={3}
                required
                value={coverNote}
                onChange={(e) => setCoverNote(e.target.value)}
                placeholder="Briefly explain your suitability..."
                className="w-full text-sm border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="bg-slate-100 p-2.5 rounded text-xs text-slate-600">
              Contact info on file: <strong>Jordan Blake</strong> (jordan@mail.com)
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-slate-300 rounded-lg text-sm text-slate-600 hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition"
              >
                Submit Application
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}