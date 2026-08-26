import React, { useState, useEffect } from 'react';
import { Page } from '../../types';
import Button from '../ui/Button';
import { CheckCircle2, Send, ArrowLeft, Heart, Shield } from 'lucide-react';

interface ExpressInterestPageProps {
  setCurrentPage?: (page: Page) => void;
}

const APPS_SCRIPT_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxOa5mzIjUGKnEQzDYhMwKNANbbHSjzKB6TMWkgaNIHIMplubUjAjFY2k1mU4QFyFYO_A/exec';

export const ExpressInterestPage: React.FC<ExpressInterestPageProps> = ({ setCurrentPage }) => {
  const [programme, setProgramme] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [role, setRole] = useState<string>('Parent / Guardian');
  const [studentAge, setStudentAge] = useState<string>('15–18 years');
  const [message, setMessage] = useState<string>('');
  const [consent, setConsent] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      const progParam = searchParams.get('programme')?.toLowerCase().trim() || '';

      if (progParam === 'murabbi' || progParam === 'murabbi-formation' || progParam === 'murabbi formation') {
        setProgramme('Murabbi Formation');
      } else if (progParam === 'amanah' || progParam === 'project-amanah' || progParam === 'project amanah') {
        setProgramme('Project Amanah');
      } else if (progParam === 'hysy30' || progParam === 'how-you-see-yourself-at-30' || progParam === 'how you see yourself at 30') {
        setProgramme('How You See Yourself at 30');
      } else if (progParam === 'enquiring' || progParam === 'just-enquiring' || progParam === 'just enquiring') {
        setProgramme('Just enquiring');
      } else if (searchParams.get('programme')) {
        // Direct match fallback
        const raw = searchParams.get('programme')!;
        if (['Murabbi Formation', 'Project Amanah', 'How You See Yourself at 30', 'Just enquiring'].includes(raw)) {
          setProgramme(raw);
        }
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent || !programme) return;

    const currentPath = (typeof window !== 'undefined' && window.location.pathname) ? window.location.pathname : '/express-interest';

    const payload = JSON.stringify({
      type: 'express_interest',
      programme,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      role,
      student_age: studentAge,
      message: message.trim(),
      source_page: currentPath
    });

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
        console.warn('Express interest submission notice:', err);
      });
    }

    setIsSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-12">
      {/* Header section */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        {setCurrentPage && (
          <button 
            onClick={() => setCurrentPage(Page.PROGRAMMES)}
            className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-amber-400 transition-colors mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Programmes
          </button>
        )}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight">
          Express Interest
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
          Tell us which programme and a little about yourself. Farhad reads these personally and will reply within a few days.
        </p>
      </div>

      {/* Main Content / Form */}
      <div className="max-w-2xl mx-auto">
        {isSubmitted ? (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 text-center space-y-6 shadow-2xl">
            <div className="w-16 h-16 bg-amber-400/10 border border-amber-400/30 rounded-full flex items-center justify-center mx-auto text-amber-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-serif text-white">Thank you.</h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              We have your interest in <span className="text-amber-400 font-medium">{programme}</span>. Farhad will reply personally within a few days. Check your inbox for an acknowledgement now.
            </p>
            {setCurrentPage && (
              <div className="pt-4">
                <Button onClick={() => setCurrentPage(Page.HOME)} variant="secondary">
                  Return to Home
                </Button>
              </div>
            )}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl space-y-6">
            
            {/* 1. Which programme? */}
            <div>
              <label htmlFor="programme" className="block text-slate-300 font-medium text-sm mb-2">
                Which programme are you interested in? <span className="text-amber-400">*</span>
              </label>
              <select
                id="programme"
                name="programme"
                required
                value={programme}
                onChange={(e) => setProgramme(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-amber-400 focus:outline-none transition-colors text-sm"
              >
                <option value="" disabled>Please choose…</option>
                <option value="Murabbi Formation">Murabbi Formation</option>
                <option value="Project Amanah">Project Amanah</option>
                <option value="How You See Yourself at 30">How You See Yourself at 30</option>
                <option value="Just enquiring">Just enquiring</option>
              </select>
            </div>

            {/* 2. Full name */}
            <div>
              <label htmlFor="name" className="block text-slate-300 font-medium text-sm mb-2">
                Full name <span className="text-amber-400">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Bilal Rahman"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:border-amber-400 focus:outline-none transition-colors text-sm"
              />
            </div>

            {/* 3. Email */}
            <div>
              <label htmlFor="email" className="block text-slate-300 font-medium text-sm mb-2">
                Email address <span className="text-amber-400">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:border-amber-400 focus:outline-none transition-colors text-sm"
              />
            </div>

            {/* 4. Phone (optional) */}
            <div>
              <label htmlFor="phone" className="block text-slate-300 font-medium text-sm mb-2">
                Phone (optional)
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 0400 000 000"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:border-amber-400 focus:outline-none transition-colors text-sm"
              />
            </div>

            {/* 5. Role & 6. Age Group */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="role" className="block text-slate-300 font-medium text-sm mb-2">
                  I am a…
                </label>
                <select
                  id="role"
                  name="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-amber-400 focus:outline-none transition-colors text-sm"
                >
                  <option value="Parent / Guardian">Parent / Guardian</option>
                  <option value="Student / Youth Participant">Student / Youth Participant</option>
                  <option value="Youth Mentor / Murabbi">Youth Mentor / Murabbi</option>
                  <option value="Educator / Teacher">Educator / Teacher</option>
                  <option value="Community Member">Community Member</option>
                </select>
              </div>

              <div>
                <label htmlFor="student_age" className="block text-slate-300 font-medium text-sm mb-2">
                  Age group
                </label>
                <select
                  id="student_age"
                  name="student_age"
                  value={studentAge}
                  onChange={(e) => setStudentAge(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-amber-400 focus:outline-none transition-colors text-sm"
                >
                  <option value="15–18 years">15–18 years</option>
                  <option value="18–25 years">18–25 years</option>
                  <option value="Adult / 25+">Adult / 25+</option>
                  <option value="N/A">N/A</option>
                </select>
              </div>
            </div>

            {/* 7. Anything else? */}
            <div>
              <label htmlFor="message" className="block text-slate-300 font-medium text-sm mb-2">
                Anything else?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share any questions or background details you'd like us to know..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:border-amber-400 focus:outline-none transition-colors text-sm"
              />
            </div>

            {/* 8. Consent Checkbox */}
            <div className="flex items-start gap-3 pt-2">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                required
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-slate-800 bg-slate-950 text-amber-500 focus:ring-amber-400 focus:ring-offset-slate-900"
              />
              <label htmlFor="consent" className="text-xs text-slate-400 leading-relaxed cursor-pointer select-none">
                I consent to Sayyidina Omar Institute contacting me regarding this enquiry. We respect your privacy and never share your details.
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button type="submit" variant="primary" className="w-full py-3.5 text-base justify-center">
                <Send className="w-4 h-4 mr-2" /> Submit Interest
              </Button>
            </div>

          </form>
        )}
      </div>
    </div>
  );
};

export default ExpressInterestPage;
