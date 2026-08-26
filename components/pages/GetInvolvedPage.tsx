
import React, { useState } from 'react';
import { Page } from '../../types';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { motion, AnimatePresence } from 'motion/react';
import { UserPlus, Users, Handshake, Heart, X, ExternalLink } from 'lucide-react';

const InvolvementCard: React.FC<{ 
  title: string; 
  description: string; 
  buttonText?: string;
  onClick?: () => void;
  href?: string;
  icon: React.ReactNode;
  customButtons?: React.ReactNode;
}> = ({ title, description, buttonText, onClick, href, icon, customButtons }) => (
  <Card className="flex flex-col text-center items-center p-8 group hover:border-amber-400/30 transition-colors h-full">
    <div className="w-16 h-16 bg-amber-400/10 rounded-2xl flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-2xl font-serif font-bold text-white mb-4">{title}</h3>
    <p className="flex-grow text-slate-400 mb-8 font-light leading-relaxed">{description}</p>
    {customButtons ? (
      customButtons
    ) : href ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 bg-slate-800 text-white border border-slate-700 hover:bg-slate-700"
      >
        {buttonText}
      </a>
    ) : (
      <Button variant="secondary" onClick={onClick} disabled={!onClick} className="w-full py-4">
        {buttonText}
      </Button>
    )}
  </Card>
);

type ModalType = 'mentor' | 'mentee' | 'partner' | null;

interface GetInvolvedPageProps {
  setCurrentPage?: (page: Page) => void;
}

const GetInvolvedPage: React.FC<GetInvolvedPageProps> = ({ setCurrentPage }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const formUrls = {
    mentor: "https://docs.google.com/forms/d/e/1FAIpQLSd3Fylqz3wsV6JQ_3r-ayJrMKEB5kxD3I3EzjqYih7pSx-BzA/viewform?embedded=true",
    mentee: "https://docs.google.com/forms/d/e/1FAIpQLSfOm1uJhV4fa2qUKJOGm7WmiO4Dn1F48OFyelPv9zTaKfFUKA/viewform?embedded=true",
    partner: "https://docs.google.com/forms/d/e/1FAIpQLSdbVGgZI91A3dPhOvB-yexcAiVdT_ZH21TOVytDJu039fEWkg/viewform?embedded=true",
  };
  
  const modalTitles = {
    mentor: "Become a Mentor",
    mentee: "Enrol as a Mentee",
    partner: "Partner with Us"
  }

  const handleCloseModal = () => setActiveModal(null);
  
  const getDirectFormUrl = (modalType: ModalType) => {
    if (!modalType) return '';
    return formUrls[modalType].replace('?embedded=true', '');
  }

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
            Get Involved
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-slate-400 max-w-3xl mx-auto font-light"
          >
            Join us in building a generation of conscious, courageous, and caring Muslims.
          </motion.p>
        </div>
      </header>

      <div className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-amber-400/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <img 
                src="https://storage.googleapis.com/sayyidina-omar-institute/images/IMG_20251018_130020_10_004.png" 
                alt="Group photo of mentors and mentees at Sayyidina Omar Institute" 
                className="relative rounded-3xl shadow-2xl w-full max-w-5xl object-cover border border-slate-800" 
              />
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InvolvementCard 
              title="Become a Mentor"
              icon={<UserPlus className="w-8 h-8" />}
              description="Are you a practicing Muslim with good adab, willing to commit time to guide the next generation? Our Murabbi Formation Programme provides the necessary spiritual and intellectual grounding. Police clearance required."
              buttonText="Apply as a Mentor"
              onClick={() => setCurrentPage?.(Page.MURABBI_FORMATION)}
            />
            <InvolvementCard 
              title="Enrol as a Mentee"
              icon={<Users className="w-8 h-8" />}
              description="If you are a young Muslim seeking guidance, community, and a deeper connection to your faith, express your interest to join our upcoming programs."
              buttonText="Express Interest"
              onClick={() => setActiveModal('mentee')}
            />
            <InvolvementCard 
              title="Partner with Us"
              icon={<Handshake className="w-8 h-8" />}
              description="For schools, masajid, and youth organisations. We can co-design programs, talks, retreats, or parent sessions to serve your community."
              buttonText="Connect with Us"
              onClick={() => setActiveModal('partner')}
            />
            <InvolvementCard 
              title="Support the Work"
              icon={<Heart className="w-8 h-8" />}
              description="The Institute is run as a trust seeking Allah’s pleasure. Support our work through one-off contributions, sponsoring a mentee, or funding resources."
              customButtons={
                <div className="flex flex-col gap-4 w-full items-center">
                   <a
                    href="https://donate.stripe.com/fZuaEX0tL26r0vt2V00ZW00"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full transition-transform transform hover:scale-105"
                  >
                    <div className="bg-white rounded-xl p-3 flex justify-center items-center shadow-lg">
                      <img src="https://storage.googleapis.com/sayyidina-omar-institute/images/Stripe%20Donate%20Button.png" alt="Donate with Stripe" className="h-8 w-auto" />
                    </div>
                  </a>
                  {setCurrentPage && (
                     <button
                        onClick={() => setCurrentPage(Page.SUPPORT)}
                        className="w-full transition-transform transform hover:scale-105"
                     >
                        <div className="bg-[#0070ba] rounded-xl p-3 flex justify-center items-center shadow-lg">
                          <img src="https://storage.googleapis.com/sayyidina-omar-institute/images/Donate%20Button.png" alt="Donate with PayPal" className="h-8 w-auto" />
                        </div>
                     </button>
                  )}
                </div>
              }
            />
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {activeModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/90 backdrop-blur-sm flex justify-center items-center z-50 p-4"
            onClick={handleCloseModal}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-slate-900 rounded-3xl shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col border border-slate-800 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-6 border-b border-slate-800 bg-slate-900/50">
                <h3 className="text-2xl font-serif font-bold text-white">{modalTitles[activeModal]}</h3>
                <button onClick={handleCloseModal} className="text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex-grow p-6 flex flex-col">
                 <p className="text-slate-400 text-sm mb-6">
                  Please fill out the form below. 
                  <a href={getDirectFormUrl(activeModal)} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline ml-2 inline-flex items-center">
                      <span>Open in new tab</span>
                      <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </p>
                <div className="flex-grow bg-white rounded-2xl overflow-hidden">
                  <iframe
                    src={formUrls[activeModal]}
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

export default GetInvolvedPage;
