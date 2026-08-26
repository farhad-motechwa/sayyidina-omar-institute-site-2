import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, AlertCircle, Compass, BookOpen, UserCheck } from 'lucide-react';

export type InquiryType = 'express_interest' | 'curriculum_outline' | 'facilitator_notes';

export interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: InquiryType;
  title?: string;
  subtitle?: string;
  initialProgramme?: string;
}

const APPS_SCRIPT_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxOa5mzIjUGKnEQzDYhMwKNANbbHSjzKB6TMWkgaNIHIMplubUjAjFY2k1mU4QFyFYO_A/exec';

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  type,
  title,
  subtitle,
  initialProgramme
}) => {
  const [programme, setProgramme] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('Parent / Guardian');
  const [studentAge, setStudentAge] = useState('15–18 years');
  const [organisation, setOrganisation] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(true);

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const getInitialProgramme = (initialProg?: string) => {
    if (initialProg) return initialProg;
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      if (path.includes('murabbi-formation')) return 'Murabbi Formation';
      if (path.includes('project-amanah')) return 'Project Amanah';
      if (path.includes('how-you-see-yourself-at-30') || path.includes('hysy30')) return 'How You See Yourself at 30';
    }
    return '';
  };

  useEffect(() => {
    if (isOpen) {
      setStatus('idle');
      if (type === 'express_interest') {
        setProgramme(getInitialProgramme(initialProgramme));
        setRole('Parent / Guardian');
        setStudentAge('15–18 years');
      }
    }
  }, [type, isOpen, initialProgramme]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;
    if (type === 'express_interest' && !programme) return;

    const currentPath = (typeof window !== 'undefined' && window.location.pathname) ? window.location.pathname : '/';

    const payloadObj: Record<string, any> = {
      type,
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      source_page: currentPath
    };

    if (type === 'express_interest') {
      payloadObj.programme = programme.trim();
      payloadObj.phone = phone.trim();
      payloadObj.role = role.trim();
      payloadObj.student_age = studentAge.trim();
    } else if (type === 'curriculum_outline' || type === 'facilitator_notes') {
      payloadObj.organisation = organisation.trim();
    }

    const payload = JSON.stringify(payloadObj);

    // Call sendBeacon BEFORE state update or re-render
    if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
      const blob = new Blob([payload], { type: 'text/plain' });
      navigator.sendBeacon(APPS_SCRIPT_ENDPOINT, blob);
    } else {
      fetch(APPS_SCRIPT_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain'
        },
        body: payload
      }).catch((err) => {
        console.warn('Inquiry modal submission error:', err);
      });
    }

    setStatus('success');
  };

  const modalTitle = title || (
    type === 'express_interest' ? 'Express Your Interest' :
    type === 'curriculum_outline' ? 'Request Curriculum Outline' :
    'Request Facilitator Notes'
  );

  const modalSubtitle = subtitle || (
    type === 'express_interest' ? 'Register your interest for upcoming Perth youth cohorts and Murabbi formation pathways.' :
    type === 'curriculum_outline' ? 'Get the complete session outline, themes, and learning objectives sent to your inbox.' :
    'Discussion prompts, reflection questions, and guided reading frameworks for parents and educators.'
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center z-50 p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="bg-slate-950 border border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden my-8"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 font-sans">
                {type === 'express_interest' && <UserCheck className="w-4 h-4" />}
                {type === 'curriculum_outline' && <Compass className="w-4 h-4" />}
                {type === 'facilitator_notes' && <BookOpen className="w-4 h-4" />}
                <span>{type.replace('_', ' ')}</span>
              </div>
              <h2 className="text-2xl font-serif font-bold text-white">
                {modalTitle}
              </h2>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                {modalSubtitle}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-900 transition-colors flex-shrink-0 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          {status === 'success' ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-800 flex items-center justify-center mx-auto text-emerald-400 shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-serif font-bold text-white">
                  Request Received
                </h3>
                <p className="text-xs text-slate-300 max-w-sm mx-auto font-light leading-relaxed">
                  Thank you, <span className="text-amber-300 font-medium">{name}</span>. Your request has been logged. Our administration team in Perth will process your request shortly.
                </p>
              </div>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs text-left">
              {status === 'error' && (
                <div className="bg-red-950/80 border border-red-800 text-red-300 p-4 rounded-xl flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-red-200">Submission Error</p>
                    <p className="text-red-300 mt-0.5 leading-relaxed">
                      We couldn't send that. Please email <a href="mailto:info@sayyidinaomarinstitute.au" className="underline hover:text-white">info@sayyidinaomarinstitute.au</a> directly.
                    </p>
                  </div>
                </div>
              )}

              {type === 'express_interest' && (
                <div>
                  <label htmlFor="inquiry-programme" className="block text-slate-300 font-semibold mb-1">
                    Which programme are you interested in? *
                  </label>
                  <select
                    id="inquiry-programme"
                    name="programme"
                    required
                    value={programme}
                    onChange={(e) => setProgramme(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:border-amber-400 focus:outline-none"
                  >
                    <option value="" disabled>Please choose…</option>
                    <option value="Murabbi Formation">Murabbi Formation</option>
                    <option value="Project Amanah">Project Amanah</option>
                    <option value="How You See Yourself at 30">How You See Yourself at 30</option>
                    <option value="Just enquiring">Just enquiring</option>
                  </select>
                </div>
              )}

              <div>
                <label htmlFor="inquiry-name" className="block text-slate-300 font-semibold mb-1">Full Name *</label>
                <input
                  id="inquiry-name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Maryam Ahmed"
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="inquiry-email" className="block text-slate-300 font-semibold mb-1">Email Address *</label>
                <input
                  id="inquiry-email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:border-amber-400 focus:outline-none"
                />
              </div>

              {type === 'express_interest' && (
                <>
                  <div>
                    <label htmlFor="inquiry-phone" className="block text-slate-300 font-semibold mb-1">Phone (optional)</label>
                    <input
                      id="inquiry-phone"
                      name="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +61 400 000 000"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="inquiry-role" className="block text-slate-300 font-semibold mb-1">Your Role</label>
                      <select
                        id="inquiry-role"
                        name="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:border-amber-400 focus:outline-none"
                      >
                        <option value="Parent / Guardian">Parent / Guardian</option>
                        <option value="Student / Youth Participant">Student / Youth Participant</option>
                        <option value="Youth Mentor / Murabbi">Youth Mentor / Murabbi</option>
                        <option value="Educator / Teacher">Educator / Teacher</option>
                        <option value="Community Member">Community Member</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="inquiry-student-age" className="block text-slate-300 font-semibold mb-1">Student / Participant Age</label>
                      <select
                        id="inquiry-student-age"
                        name="student_age"
                        value={studentAge}
                        onChange={(e) => setStudentAge(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:border-amber-400 focus:outline-none"
                      >
                        <option value="15–18 years">15–18 years</option>
                        <option value="18–25 years">18–25 years</option>
                        <option value="Adult / 25+">Adult / 25+</option>
                        <option value="N/A">N/A</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              {(type === 'curriculum_outline' || type === 'facilitator_notes') && (
                <div>
                  <label htmlFor="inquiry-organisation" className="block text-slate-300 font-semibold mb-1">Organisation / Institution</label>
                  <input
                    id="inquiry-organisation"
                    name="organisation"
                    type="text"
                    value={organisation}
                    onChange={(e) => setOrganisation(e.target.value)}
                    placeholder="e.g. Al-Ameen College / Community Youth Group"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>
              )}

              <div>
                <label htmlFor="inquiry-message" className="block text-slate-300 font-semibold mb-1">Message / Questions (optional)</label>
                <textarea
                  id="inquiry-message"
                  name="message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Any specific questions or context?"
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  id="inquiry-consent"
                  name="consent"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 rounded accent-amber-400 cursor-pointer"
                />
                <label htmlFor="inquiry-consent" className="text-slate-400 cursor-pointer select-none leading-relaxed">
                  I consent to Sayyidina Omar Institute contacting me regarding this request.
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3 px-5 rounded-xl bg-amber-400 hover:bg-amber-300 disabled:bg-amber-400/50 text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:cursor-not-allowed"
                >
                  <span>{status === 'submitting' ? 'Sending...' : 'Submit Request'}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default InquiryModal;
