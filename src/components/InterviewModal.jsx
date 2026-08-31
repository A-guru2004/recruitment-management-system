import React, { useState } from 'react';
import { X, Star } from 'lucide-react';
import { useJobContext } from '../context/JobContext';

export default function InterviewModal({ app, onClose }) {
  const { updateCandidateStatus, updateCandidateRating } = useJobContext();
  const [rating, setRating] = useState(app.rating || 0);
  const [feedback, setFeedback] = useState('');
  const [invitationSent, setInvitationSent] = useState(false);

  const handleRatingChange = (r) => {
    setRating(r);
    updateCandidateRating(app.id, r);
  };

  const handleDecision = (status) => {
    updateCandidateStatus(app.id, status);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative">
        <button onClick={onClose} className="absolute right-4 top-4 text-slate-400 hover:text-slate-600">
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-lg font-bold text-slate-800">Interview: {app.candidateName}</h3>
        <p className="text-xs text-slate-500 mb-4">{app.jobTitle} • {app.candidateEmail}</p>

        {/* Section A: Schedule */}
        <div className="space-y-3 pb-4 border-b border-slate-200">
          <h4 className="text-xs font-bold uppercase text-slate-500">A. Schedule</h4>
          <div className="grid grid-cols-2 gap-2">
            <input type="date" className="border border-slate-300 rounded p-2 text-xs focus:ring-1 focus:ring-blue-500" />
            <input type="time" className="border border-slate-300 rounded p-2 text-xs focus:ring-1 focus:ring-blue-500" />
          </div>
          <select className="w-full border border-slate-300 rounded p-2 text-xs">
            <option>Interview format — Online (Google Meet)</option>
            <option>Interview format — In-person</option>
          </select>
          <input
            type="text"
            placeholder="Notes or meeting link"
            className="w-full border border-slate-300 rounded p-2 text-xs"
          />
          <button
            type="button"
            onClick={() => setInvitationSent(true)}
            className="w-full bg-slate-900 hover:bg-black text-white text-xs font-semibold py-2 rounded transition"
          >
            {invitationSent ? 'Invite Sent ✓' : 'Send Invite'}
          </button>
        </div>

        {/* Section B: Evaluation */}
        <div className="space-y-3 pt-4">
          <h4 className="text-xs font-bold uppercase text-slate-500">B. Feedback & Evaluation</h4>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                onClick={() => handleRatingChange(star)}
                className={`w-5 h-5 cursor-pointer ${
                  star <= rating ? 'text-amber-400 fill-amber-400' : 'text-slate-300'
                }`}
              />
            ))}
          </div>
          <textarea
            rows={2}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Interview notes..."
            className="w-full border border-slate-300 rounded p-2 text-xs focus:ring-1 focus:ring-blue-500"
          />
          <div className="flex gap-2 pt-2">
            <button
              onClick={() => handleDecision('Rejected')}
              className="flex-1 border border-rose-300 text-rose-600 hover:bg-rose-50 py-1.5 rounded text-xs font-semibold"
            >
              Reject candidate
            </button>
            <button
              onClick={() => handleDecision('Shortlisted')}
              className="flex-1 bg-blue-600 text-white hover:bg-blue-700 py-1.5 rounded text-xs font-semibold"
            >
              Select candidate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}