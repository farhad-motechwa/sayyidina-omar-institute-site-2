
import React, { useState } from 'react';
import { Page } from '../../types';
import { motion } from 'motion/react';
import {
  Smartphone,
  ExternalLink,
  ArrowRight,
  Compass,
  BookOpen,
  GraduationCap,
  Share,
  PlusSquare,
  MoreVertical,
  MonitorDown,
  WifiOff,
  ShieldCheck,
  DollarSign,
  RefreshCw,
  HelpCircle,
} from 'lucide-react';

interface AppsPageProps {
  setCurrentPage: (page: Page, targetUrl?: string) => void;
}

type AppEntry = {
  name: string;
  tagline: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  badge: string;
  installable: boolean;
  features: string[];
  secondary?: { label: string; page: Page; route: string };
};

const apps: AppEntry[] = [
  {
    name: 'Gravity',
    tagline: 'The Sovereign Compass Companion',
    description:
      'A daily contemplative diagnostic and fitness tracker for the soul. Gravity takes the Sovereign Compass out of the diagram and into daily practice — check in each day, see which quadrant is pulling hardest, and track the slow work of realignment over weeks and months.',
    href: 'https://gravity.sayyidinaomarinstitute.au',
    icon: <Compass className="w-7 h-7" />,
    badge: 'Installable App',
    installable: true,
    features: [
      'Daily contemplative check-in',
      'Built on the Qalb, ʿAql, Nafs and Ruh quadrants',
      'Track your alignment over time',
      'Works offline once installed',
    ],
    secondary: { label: 'Read the framework', page: Page.COMPASS, route: '/compass' },
  },
  {
    name: 'Daily Sunnah',
    tagline: 'One attribute. One reflection. One practice.',
    description:
      'A daily attribute of the Prophet Muhammad ﷺ with its source, a short reflection, and one practice to carry into the day. Includes a private journal that never leaves your device. Built for consistency rather than volume — small, repeated, and sustainable.',
    href: 'https://sunnah.sayyidinaomarinstitute.au',
    icon: <BookOpen className="w-7 h-7" />,
    badge: 'Installable App',
    installable: true,
    features: [
      'A daily attribute with its source',
      'Short reflection and one practice',
      'Private on-device journal',
      'Works fully offline',
    ],
  },
  {
    name: 'The Attribute Compass',
    tagline: 'Align your character with Divine guidance',
    description:
      'Reflect on the beautiful attributes of Allah and consider how each one might shape your character. Opens in any browser — nothing to install.',
    href: 'https://the-attribute-compass-568803501529.us-west1.run.app/',
    icon: <Compass className="w-7 h-7" />,
    badge: 'Web Tool',
    installable: false,
    features: [
      'Guided reflection on the Divine attributes',
      'No install needed',
    ],
    secondary: { label: 'Open on this site', page: Page.ATTRIBUTE_COMPASS, route: '/attribute-compass' },
  },
  {
    name: 'Scholastic Bridge',
    tagline: 'Educational excellence with spiritual grounding',
    description:
      'Our portal connecting academic study with the inner formation that gives it meaning. Opens in any browser — nothing to install.',
    href: 'https://scholastic-bridge-741424004706.us-west1.run.app/',
    icon: <GraduationCap className="w-7 h-7" />,
    badge: 'Web Tool',
    installable: false,
    features: [
      'Bridges academic and spiritual formation',
      'No install needed',
    ],
    secondary: { label: 'Open on this site', page: Page.SCHOLASTIC_BRIDGE, route: '/scholastic-bridge' },
  },
];

const installSteps = {
  ios: {
    label: 'iPhone & iPad',
    note: 'Use Safari — Apple does not allow installing from Chrome on iOS.',
    steps: [
      { icon: <ExternalLink className="w-5 h-5" />, text: 'Open the app link in Safari.' },
      { icon: <Share className="w-5 h-5" />, text: 'Tap the Share button (the square with an arrow pointing up).' },
      { icon: <PlusSquare className="w-5 h-5" />, text: 'Scroll down and tap "Add to Home Screen".' },
      { icon: <Smartphone className="w-5 h-5" />, text: 'Tap "Add". The icon now sits on your home screen like any other app.' },
    ],
  },
  android: {
    label: 'Android',
    note: 'Chrome, Edge and Samsung Internet all work.',
    steps: [
      { icon: <ExternalLink className="w-5 h-5" />, text: 'Open the app link in Chrome.' },
      { icon: <MoreVertical className="w-5 h-5" />, text: 'Tap the three-dot menu in the top right.' },
      { icon: <PlusSquare className="w-5 h-5" />, text: 'Tap "Install app" or "Add to Home screen".' },
      { icon: <Smartphone className="w-5 h-5" />, text: 'Confirm. An install banner may also appear on its own — tapping that does the same thing.' },
    ],
  },
  desktop: {
    label: 'Mac & Windows',
    note: 'Chrome, Edge and Brave support installing. Safari on Mac uses "Add to Dock".',
    steps: [
      { icon: <ExternalLink className="w-5 h-5" />, text: 'Open the app link in Chrome or Edge.' },
      { icon: <MonitorDown className="w-5 h-5" />, text: 'Look for the install icon in the address bar (a screen with a downward arrow).' },
      { icon: <PlusSquare className="w-5 h-5" />, text: 'Click it, then click "Install".' },
      { icon: <MonitorDown className="w-5 h-5" />, text: 'The app opens in its own window and appears in your Dock or Start menu.' },
    ],
  },
};

type PlatformKey = keyof typeof installSteps;

const faqs = [
  {
    icon: <HelpCircle className="w-5 h-5" />,
    q: 'What is a PWA?',
    a: 'A Progressive Web App. It lives on the web, but once you add it to your home screen it behaves like an ordinary app — its own icon, its own window, no browser bars. There is nothing to download from an app store.',
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    q: 'Where is my data kept?',
    a: 'On your device. Your journal entries and check-ins stay in your own browser storage and are not uploaded to us. That also means they are not synced between devices, and clearing your browser data will clear them.',
  },
  {
    icon: <WifiOff className="w-5 h-5" />,
    q: 'Do they work offline?',
    a: 'Yes. Once installed, both Gravity and Daily Sunnah work without a connection. You will need to be online the first time you open them, and occasionally afterwards to receive updates.',
  },
  {
    icon: <RefreshCw className="w-5 h-5" />,
    q: 'How do updates work?',
    a: 'Automatically. Because these are web apps, you always get the current version the next time you open one while online. There is nothing to update manually.',
  },
  {
    icon: <DollarSign className="w-5 h-5" />,
    q: 'Is there a cost?',
    a: 'No. These are free, and there is no account or sign-in. If you would like to support the work that makes them possible, our support page is always open.',
  },
];

const AppsPage: React.FC<AppsPageProps> = ({ setCurrentPage }) => {
  const [platform, setPlatform] = useState<PlatformKey>('ios');
  const active = installSteps[platform];

  return (
    <div className="bg-slate-950 min-h-screen flex flex-col">
      {/* Hero */}
      <header className="relative py-20 bg-slate-900 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center space-x-3 text-amber-400 mb-4"
          >
            <Smartphone className="w-8 h-8" />
            <span className="text-sm font-bold tracking-widest uppercase">Apps</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white"
          >
            Our Apps
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto font-light"
          >
            Free tools for daily practice. Install them to your home screen in a few taps —
            no app store, no account, no cost.
          </motion.p>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-16">
        {/* App cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {apps.map((app, i) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="bg-slate-900 rounded-3xl border border-slate-800 p-8 flex flex-col relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              <div className="relative z-10 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-amber-400/10 rounded-2xl flex items-center justify-center text-amber-400">
                    {app.icon}
                  </div>
                  <span
                    className={`text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full ${
                      app.installable
                        ? 'bg-amber-400/10 text-amber-400 border border-amber-400/20'
                        : 'bg-slate-800 text-slate-400 border border-slate-700'
                    }`}
                  >
                    {app.badge}
                  </span>
                </div>

                <h2 className="text-2xl font-serif font-bold text-white">{app.name}</h2>
                <p className="text-amber-400/80 text-sm font-medium mt-1 mb-4">{app.tagline}</p>
                <p className="text-slate-400 font-light leading-relaxed">{app.description}</p>

                <ul className="mt-6 space-y-2.5">
                  {app.features.map((f) => (
                    <li key={f} className="flex items-start space-x-3 text-slate-300 font-light text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center gap-3">
                  <a
                    href={app.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl font-semibold bg-amber-400 text-slate-950 hover:bg-amber-300 transition-all shadow-lg shadow-amber-400/20"
                  >
                    <span>{app.installable ? 'Open & Install' : 'Open Tool'}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  {app.secondary && (
                    <button
                      onClick={() => setCurrentPage(app.secondary!.page, app.secondary!.route)}
                      className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl font-semibold text-amber-300 border border-amber-400/30 hover:bg-amber-400/10 transition-all cursor-pointer"
                    >
                      <span>{app.secondary.label}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <span className="mt-3 text-xs text-slate-600 font-light break-all">
                  {app.href.replace(/^https:\/\//, '').replace(/\/$/, '')}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Install instructions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <div className="flex items-center justify-center space-x-3 text-amber-400 mb-4">
              <MonitorDown className="w-7 h-7" />
              <span className="text-sm font-bold tracking-widest uppercase">Installation</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">How to Install</h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
              Our apps are Progressive Web Apps. You install them straight from the browser —
              they are not in the App Store or Google Play, and will never need to be.
              Choose your device below.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div
              className="flex flex-col sm:flex-row gap-2 p-2 bg-slate-900 rounded-2xl border border-slate-800 mb-8"
              role="tablist"
              aria-label="Choose your device"
            >
              {(Object.keys(installSteps) as PlatformKey[]).map((key) => (
                <button
                  key={key}
                  role="tab"
                  aria-selected={platform === key}
                  onClick={() => setPlatform(key)}
                  className={`flex-1 px-5 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                    platform === key
                      ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {installSteps[key].label}
                </button>
              ))}
            </div>

            <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8">
              <p className="text-sm text-amber-400/80 font-medium mb-8">{active.note}</p>
              <ol className="space-y-6">
                {active.steps.map((step, i) => (
                  <li key={i} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </div>
                    <div className="flex items-start space-x-3 pt-2">
                      <span className="text-amber-400/60 flex-shrink-0">{step.icon}</span>
                      <span className="text-slate-300 font-light leading-relaxed">{step.text}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">Good to Know</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-slate-900 rounded-2xl border border-slate-800 p-6 flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center">
                  {faq.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">{faq.q}</h3>
                  <p className="text-slate-400 font-light leading-relaxed text-sm">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 max-w-3xl mx-auto text-center"
        >
          <p className="text-slate-500 font-light leading-relaxed">
            Trouble installing, or something not working as it should?{' '}
            <button
              onClick={() => setCurrentPage(Page.CONTACT, '/contact')}
              className="text-amber-400 hover:text-amber-300 transition-colors underline underline-offset-4 cursor-pointer"
            >
              Get in touch
            </button>{' '}
            and tell us which device and browser you are using.
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default AppsPage;
