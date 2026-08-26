import React, { useState } from 'react';
import { Page } from '../../types';
import { siteConfig } from '../../data/siteData';
import Button from '../ui/Button';
import { Mail, MapPin, ExternalLink, CheckCircle2, Send, AlertCircle } from 'lucide-react';

interface ContactPageProps {
  setCurrentPage?: (page: Page) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
    consent: false
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) return;
    
    const payload = JSON.stringify({
      type: 'contact',
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject,
      message: formData.message.trim(),
      consent: formData.consent,
      source_page: (typeof window !== 'undefined' && window.location.pathname) ? window.location.pathname : '/contact'
    });

    const ENDPOINT = 'https://script.google.com/macros/s/AKfycbxOa5mzIjUGKnEQzDYhMwKNANbbHSjzKB6TMWkgaNIHIMplubUjAjFY2k1mU4QFyFYO_A/exec';

    if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
      const blob = new Blob([payload], { type: 'text/plain' });
      navigator.sendBeacon(ENDPOINT, blob);
    } else {
      fetch(ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain'
        },
        body: payload
      }).catch((err) => {
        console.warn('Contact form submission error:', err);
      });
    }

    setStatus('success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
          Reach Out to Us
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
          Contact the Institute
        </h1>
        <p className="text-lg text-slate-300 font-light leading-relaxed">
          We welcome questions from parents, prospective students, Murabbis, and partner organizations in Perth and beyond.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Contact Info & Expression of Interest */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 space-y-6">
            <h2 className="text-2xl font-serif font-bold text-white border-b border-slate-800 pb-3">
              Direct Information
            </h2>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-white block">Location</span>
                  <span className="text-slate-400 text-xs">Perth, Western Australia</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-white block">Official Email</span>
                  <a href={`mailto:${siteConfig.contactEmail}`} className="text-amber-300 hover:underline text-xs">
                    {siteConfig.contactEmail}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Expression of Interest Link */}
          <div className="bg-slate-950 p-8 rounded-2xl border border-amber-500/30 text-center space-y-4">
            <h3 className="text-xl font-serif font-bold text-white">
              Programme Registration / EOI
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              To express interest for upcoming student intakes or Murabbi formation cohorts, you can fill out our registration form directly.
            </p>
            <Button onClick={() => setCurrentPage?.(Page.EXPRESS_INTEREST)} variant="primary" className="text-xs px-5 py-2.5 w-full">
              <span>Open Registration Form</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          </div>
        </div>

        {/* Right Column: Inquiry Form */}
        <div className="lg:col-span-7 bg-slate-950 p-8 rounded-2xl border border-slate-800 space-y-6">
          <h2 className="text-2xl font-serif font-bold text-white border-b border-slate-800 pb-3">
            Send an Online Inquiry
          </h2>

          {status === 'success' ? (
            <div className="bg-emerald-950/80 border border-emerald-800 text-emerald-300 p-6 rounded-xl space-y-2">
              <div className="flex items-center gap-2 font-semibold text-base">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Thank you for your message!</span>
              </div>
              <p className="text-xs text-emerald-200">
                Your inquiry has been logged. Our administration team in Perth will respond to your email shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              {status === 'error' && (
                <div className="bg-red-950/80 border border-red-800 text-red-300 p-4 rounded-xl flex items-start gap-3 text-xs">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm text-red-200">Submission Error</p>
                    <p className="text-red-300 mt-0.5 leading-relaxed">
                      We couldn't send that. Please email <a href="mailto:info@sayyidinaomarinstitute.au" className="underline hover:text-white">info@sayyidinaomarinstitute.au</a> directly.
                    </p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white focus:border-amber-400 focus:outline-none"
                    placeholder="e.g. Abdullah Khan"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white focus:border-amber-400 focus:outline-none"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Subject</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white focus:border-amber-400 focus:outline-none"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Express Interest">Express Interest (General / Programme Intake)</option>
                  <option value="Request Curriculum Outline">Request Curriculum Outline</option>
                  <option value="Request Facilitator Notes">Request Facilitator Notes</option>
                  <option value="How You See Yourself at 30">How You See Yourself at 30 Programme</option>
                  <option value="Murabbi Formation">Murabbi Formation Pathway</option>
                  <option value="Parents & Safeguarding">Parents & Safeguarding Question</option>
                  <option value="Project Amanah">Project Amanah Pilot</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Your Message *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white focus:border-amber-400 focus:outline-none"
                  placeholder="How can we assist you?"
                ></textarea>
              </div>

              <div className="flex items-start gap-2 pt-2 text-xs text-slate-400">
                <input
                  type="checkbox"
                  id="consent"
                  required
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-0.5 rounded accent-amber-400"
                />
                <label htmlFor="consent">
                  I consent to Sayyidina Omar Institute contacting me via email regarding this inquiry in accordance with privacy guidelines.
                </label>
              </div>

              <Button
                type="submit"
                variant="primary"
                disabled={status === 'submitting'}
                className="w-full text-xs py-3 mt-2"
              >
                {status === 'submitting' ? 'Submitting...' : 'Send Message'}
                <Send className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
};

export default ContactPage;
