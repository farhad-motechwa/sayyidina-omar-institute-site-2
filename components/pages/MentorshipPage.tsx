
import React, { useState } from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Download, ExternalLink, X, TreeDeciduous, Sparkles, Shield, Users, Brain, MessageSquare } from 'lucide-react';

const Section: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`py-20 ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-amber-400 mb-10 text-center">{title}</h2>
          <div className="text-slate-400 leading-relaxed text-lg font-light">{children}</div>
        </div>
      </div>
    </motion.div>
);

const MentorshipPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pillars = [
    { title: 'Spiritual Anchoring', description: 'Salah, Qur’an, dhikr, trust in Allah', icon: <Sparkles className="w-6 h-6" /> },
    { title: 'Self-Discipline', description: 'Managing time, desires, devices', icon: <Shield className="w-6 h-6" /> },
    { title: 'Service & Responsibility', description: 'Family duties, community roles', icon: <Users className="w-6 h-6" /> },
    { title: 'Thinking & Decision-Making', description: 'Critical thinking with taqwa', icon: <Brain className="w-6 h-6" /> },
    { title: 'Communication & Leadership', description: 'Speaking with adab, listening with respect', icon: <MessageSquare className="w-6 h-6" /> },
  ];

  const curriculumUrl = "https://storage.cloud.google.com/sayyidina-omar-institute/images/Sayyidina_Omar_Institute_Mentorship_Curriculum_2025.pdf";
  const embedFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfOm1uJhV4fa2qUKJOGm7WmiO4Dn1F48OFyelPv9zTaKfFUKA/viewform?embedded=true";
  const directFormUrl = embedFormUrl.replace('?embedded=true', '');

  return (
    <div className="bg-slate-950">
      <header className="relative py-32 bg-slate-900 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-6xl font-serif font-bold text-white"
          >
            The Mentorship Program
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-slate-400 max-w-3xl mx-auto font-light"
          >
            A relationship-based journey towards character, courage, and Ihsan.
          </motion.p>
        </div>
      </header>

      <Section title="What Mentorship Looks Like">
        <div className="space-y-6 text-center">
          <p>
            Mentorship at Sayyidina Umar Institute is not tuition and not a lecture. It is a long, steady conversation between a young Muslim and a mentor who cares about their dunya and their akhirah.
          </p>
          <p>
            Sessions combine Qur’an and Hadith, discussion of real-life challenges, journaling, and small acts of service. The goal is not to create “perfect” youth, but to guide them to walk toward Allah with honesty and effort.
          </p>
        </div>
      </Section>

      <Section title="Who Is It For?" className="bg-slate-900">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <Card className="bg-slate-800/50 border-slate-700/50">
            <h3 className="text-2xl font-serif font-bold text-white mb-4">Ages 13-18 & 18-25</h3>
            <p className="font-light">Separate programs tailored for teens and young adults.</p>
          </Card>
           <Card className="bg-slate-800/50 border-slate-700/50">
            <h3 className="text-2xl font-serif font-bold text-white mb-4">The Curious & The Searching</h3>
            <p className="font-light">For youth who are curious, struggling, or simply want a deeper connection.</p>
          </Card>
           <Card className="bg-slate-800/50 border-slate-700/50">
            <h3 className="text-2xl font-serif font-bold text-white mb-4">Brothers & Sisters</h3>
            <p className="font-light">Open to all, with appropriate groupings to ensure a comfortable environment.</p>
          </Card>
        </div>
      </Section>

       <Section title="Program Elements">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Weekly circles covering themes like Tawheed, niyyah, time, social media, friendships.",
            "Iʿtikaf module that integrates night prayers, Qur’an reflection, and service planning.",
            "Community service assignments such as Homeless Runs, visiting seniors, helping at the masjid.",
            "Personal reflection worksheets and one-to-one check-ins."
          ].map((item, i) => (
            <div key={i} className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-400/10 flex items-center justify-center mt-1">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
              </div>
              <p className="font-light">{item}</p>
            </div>
          ))}
        </div>
       </Section>

      <Section title="A Foundational Analogy" className="bg-slate-900">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative group"
                >
                  <div className="absolute -inset-4 bg-emerald-400/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img src="https://storage.googleapis.com/sayyidina-omar-institute/images/openart-image_wR5DyY3Q_1762760856707_raw.jpg" alt="A luminous tree representing growth in Jannah" className="relative rounded-2xl shadow-2xl max-w-sm w-full border border-slate-800" />
                </motion.div>
            </div>
            <div className="space-y-6">
                <div className="flex items-center space-x-3 text-emerald-400 mb-2">
                  <TreeDeciduous className="w-8 h-8" />
                  <h3 className="text-3xl font-serif font-bold text-white">The Tree That Grows In Jannah</h3>
                </div>
                <p className="font-light">
                    At the beginning of this program, we asked our young people to imagine a tree growing for them in Jannah. Not a static picture, but a living tree that responds to every sincere deed they do. Each time they pray with focus, speak kindly to a sibling, help a parent, serve the community or choose what is pleasing to Allah, a new leaf begins to sprout.
                </p>
                <p className="font-light">
                    The image of the tree reminds them that nothing good is ever lost with Allah. Every quiet act of ihsan, every hidden moment of patience, every step taken to improve their character is recorded and nurtured.
                </p>
                <p className="font-light italic text-amber-400/80">
                    Our hope is that, by the time they reach 30, they will not only see a clearer version of who they are, but also recognise that a beautiful tree has been growing with them all along.
                </p>
            </div>
        </div>
      </Section>

      <div className="py-24 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif font-bold text-amber-400 mb-6 text-center">Interactive Tarbiyyah Framework</h2>
             <p className="max-w-3xl mx-auto text-center text-slate-400 mb-12 text-lg font-light">
                Explore the dynamic relationship between the 4 Inner Structures and the 5 Stages of Tarbiyyah in our interactive model below.
            </p>
            <div className="max-w-6xl mx-auto bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-800 relative h-[800px] group">
                 <div className="absolute inset-0 bg-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                 <iframe
                   src="https://tazkiyah.sayyidinaomarinstitute.au/"
                   title="Tazkiyah Visualization"
                   className="absolute inset-0 w-full h-full"
                   style={{ border: 'none' }}
                   allowFullScreen
                 />
            </div>
             <div className="text-center mt-6">
                 <a 
                    href="https://tazkiyah.sayyidinaomarinstitute.au/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-amber-400 hover:text-amber-300 transition-colors font-medium"
                 >
                    <span>Open full screen</span>
                    <ExternalLink className="w-4 h-4" />
                 </a>
            </div>
        </div>
      </div>

      <Section title="Character & Leadership Pillars" className="bg-slate-900">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card key={pillar.title} className="bg-slate-800/50 border-slate-700/50 flex items-start space-x-5 p-8 group hover:border-amber-400/30 transition-colors">
              <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-2xl bg-amber-400 text-slate-900 font-bold text-2xl shadow-lg shadow-amber-400/20 group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-slate-400 font-light leading-relaxed">{pillar.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Outcomes">
        <p className="mb-12 text-center text-xl font-light">By the end of a term or year, we hope youth:</p>
         <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              "Know how to make decisions that please Allah.",
              "Feel more confident in their Muslim identity.",
              "Have at least one trusted mentor they can turn to.",
              "Have tasted the sweetness of serving others."
            ].map((text, i) => (
              <div key={i} className="flex items-center space-x-4 bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-slate-200 font-light">{text}</span>
              </div>
            ))}
        </div>
        <div className="mt-16 text-center flex flex-col sm:flex-row justify-center gap-6">
            <Button variant="primary" onClick={() => setIsModalOpen(true)} className="px-12 py-4">
              Register Interest
            </Button>
            <a
              href={curriculumUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 px-12 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 bg-slate-800 text-white border border-slate-700"
            >
              <Download className="w-5 h-5" />
              <span>Download Curriculum</span>
            </a>
        </div>
      </Section>
      
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/90 backdrop-blur-sm flex justify-center items-center z-50 p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-slate-900 rounded-3xl shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col border border-slate-800 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-6 border-b border-slate-800 bg-slate-900/50">
                <h3 className="text-2xl font-serif font-bold text-white">Register Interest</h3>
                <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex-grow p-6 flex flex-col">
                 <p className="text-slate-400 text-sm mb-6">
                  Please fill out the form below to express your interest. 
                  <a href={directFormUrl} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline ml-2 inline-flex items-center">
                      <span>Open in new tab</span>
                      <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </p>
                <div className="flex-grow bg-white rounded-2xl overflow-hidden">
                  <iframe
                    src={embedFormUrl}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                  >
                    Loading…
                  </iframe>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MentorshipPage;
