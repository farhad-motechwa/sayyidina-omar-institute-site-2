
import React from 'react';
import Card from '../ui/Card';
import { motion } from 'motion/react';
import { Newspaper, Calendar as CalendarIcon, Tag } from 'lucide-react';
import { OptimizedImage } from '../ui/OptimizedImage';

const NewsItem: React.FC<{ title: string; date: string; category: string; content: React.ReactNode; image?: string; className?: string; index: number }> = ({ title, date, category, content, image, className, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className={className}
  >
    <Card className="flex flex-col h-full overflow-hidden p-0 bg-slate-900 border-slate-800 group hover:border-amber-400/30 transition-colors">
      {image && (
          <div className="h-64 overflow-hidden flex-shrink-0 relative">
              <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors z-10 pointer-events-none"></div>
              <OptimizedImage 
                src={image} 
                alt={title} 
                isThumb={true}
                aspectRatio="16/9"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                loading="lazy"
              />
          </div>
      )}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2 text-amber-400">
            <Tag className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">{category}</span>
          </div>
          <div className="flex items-center space-x-2 text-slate-500">
            <CalendarIcon className="w-4 h-4" />
            <span className="text-xs font-medium">{date}</span>
          </div>
        </div>
        <h3 className="text-2xl font-serif font-bold text-white mb-6 group-hover:text-amber-400 transition-colors">{title}</h3>
        <div className="text-slate-400 leading-relaxed mb-4 flex-grow text-base font-light">
          {content}
        </div>
      </div>
    </Card>
  </motion.div>
);

const NewsPage: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen">
      <header className="relative py-32 bg-slate-900 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center space-x-3 text-amber-400 mb-6"
          >
            <Newspaper className="w-8 h-8" />
            <span className="text-sm font-bold tracking-widest uppercase">Updates</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-6xl font-serif font-bold text-white"
          >
            News & Updates
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-slate-400 max-w-3xl mx-auto font-light"
          >
            Recent events, community stories, and reflections from the Institute.
          </motion.p>
        </div>
      </header>

      <div className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            
            <NewsItem
               index={0}
               className="md:col-span-2 lg:col-span-3"
               category="Reflection"
               date="28 November 2025"
               title="A Gentle Reminder from Habib Khadim As-Saqaf"
               content={
                 <div className="space-y-6 text-lg font-light">
                   <p>There are gatherings that leave a quiet imprint on the heart. The recent visit of Habib Khadim As-Saqaf did exactly that. His presence carried a calm strength, and his reminder was delivered with the simplicity that often marks true wisdom.</p>
                   <p>Rather than lengthy explanations, he offered a single, practical life principle: hold firmly to one small deed, and let it shape you over time. It was a reminder that spiritual growth does not begin with grand gestures. It begins with steadiness.</p>
                   
                   <h4 className="text-2xl font-serif font-bold text-amber-400 mt-8 mb-4">Who Is Habib Khadim As-Saqaf?</h4>
                   
                   <div className="md:float-right md:ml-10 mb-8 md:w-96">
                      <div className="relative group">
                        <div className="absolute -inset-4 bg-amber-400/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <img 
                          src="https://storage.googleapis.com/sayyidina-omar-institute/Image%20Gallery/20251127_220340%20copy.png" 
                          alt="Habib Khadim As-Saqaf and Brother Farhad Omar" 
                          className="relative rounded-2xl shadow-2xl w-full h-auto border border-slate-800" 
                        />
                      </div>
                      <p className="text-sm text-slate-500 mt-4 italic text-center font-light">Left: Habib Khadim As-Saqaf; Right: Brother Farhad Omar, at the Majlis 'ilm</p>
                   </div>

                   <p>For those unfamiliar, Habib Khadim comes from Tarim, Yemen, a city known for centuries as a cradle of sacred knowledge. He is part of the Ba ‘Alawi tradition, a lineage connected to the family of the Prophet Muhammad, and he studied under senior scholars of Hadramawt, including Habib Umar bin Hafiz.</p>
                   <p>Today, he is recognised globally for his clarity in teaching purification, worship, and prophetic manners, his warm and measured presence, his ability to simplify complex spiritual matters, and his constant emphasis on sincerity and consistent small acts of devotion.</p>
                   <p>He has travelled widely across Southeast Asia, Africa, Europe, and Australia, and is beloved for the gentleness of his character as much as his scholarship.</p>

                   <h4 className="text-2xl font-serif font-bold text-amber-400 mt-8 mb-4 clear-both">A Night of Softening Hearts</h4>
                   <p>When he spoke to our community, the message that resonated most deeply was how achievable spiritual change can be. He encouraged the students to choose one small action; perhaps a quiet dhikr, a short daily reading, or one moment of gratitude and make it a companion.</p>
                   <p>There was no pressure, no heaviness. Only clarity. Only a return to the basics that keep the heart alive. In a world that often demands intensity, he reminded us that Allah looks at consistency.</p>

                   <h4 className="text-2xl font-serif font-bold text-amber-400 mt-8 mb-4">The Gem He Shared: Love in Solah</h4>
                   <p>Among the most precious reminders he left us with was a simple yet profound life-hack: learn to love Allah and Rasulullah in your solah. When a person enters prayer with love, the prayer stops being a routine. It becomes a meeting. And when the heart shows up with love, the limbs follow with humility.</p>
                   <p>The commitment of love places us in a real relationship with our Creator and His Messenger, a relationship that shapes character, softens the ego, and protects us from the pull of this world. Worship is not only an obligation. It is an expression of love, and love strengthens obedience.</p>
                   
                   <h4 className="text-2xl font-serif font-bold text-amber-400 mt-8 mb-4">Carrying the Reminder Forward</h4>
                   <p>The beauty of gatherings like this is not only in the moment itself but in what follows after. The students left with a sense of direction. The adults left with renewed intention. And the entire room was reminded that faith grows not through perfection but through dedication.</p>
                   <p>As we continue our programs under the Sayyidina Omar Institute, may this reminder remain with us: start small, be sincere, and let your heart learn steadiness.</p>
                 </div>
               }
            />

            <NewsItem
              index={1}
              category="Guest Speaker"
              date="November 2025"
              title="Balancing Dunya and Deen"
              image="https://storage.googleapis.com/sayyidina-omar-institute/Image%20Gallery/classroom-session-compass-framework.webp"
              content={
                <div className="space-y-4">
                  <p>Hafidh Reyaz Karwa, a professional accountant, joined us to share his personal experience.</p>
                  <p>He spoke on the profound responsibility of being a Guardian of the Qur'an while holding a demanding accounting career.</p>
                </div>
              }
            />

            <NewsItem
              index={2}
              category="Guest Speaker"
              date="November 2025"
              title="Ambition and Devotion"
              image="https://storage.googleapis.com/sayyidina-omar-institute/Image%20Gallery/parallel-circles-compass-on-screen.webp"
              content={
                <div className="space-y-4">
                  <p>Hafidh Suhaidi Mazlan, an Automotive Service Manager, shared his inspiring journey.</p>
                  <p>He discussed managing his time between a hafidh program, his intentions for further Islamic Studies, and a successful career.</p>
                </div>
              }
            />

            <NewsItem
               index={3}
               category="Update"
               date="October 2025"
               title="Launching the First Cohort"
               content={
                 <div className="space-y-4">
                   <p>Alhamdulillah, we have officially launched our first term of mentorship programs. Seeing the eagerness in the eyes of the youth has been a blessing.</p>
                   <p>The orientation weekend was filled with brotherhood, prayer, and setting intentions for the journey ahead.</p>
                 </div>
               }
               image="https://storage.googleapis.com/sayyidina-omar-institute/Image%20Gallery/formation-circle-discussion-wide.webp"
            />
            
            <NewsItem
              index={4}
              category="Reflection"
              date="September 2025"
              title="The Weight of a Promise"
              content={
                <div className="space-y-4">
                  <p>In a world that often prioritises speed over substance, we ask ourselves: what does it mean to keep a promise?</p>
                  <p>Sayyidina Omar (RA) taught us that leadership is a burden of trust. Our presence is the greatest promise we make.</p>
                </div>
              }
            />

             <NewsItem
              index={5}
              category="Community"
              date="August 2025"
              title="Serving Our Neighbours"
              content={
                <div className="space-y-4">
                  <p>Part of our curriculum involves stepping out of the classroom and into the community. Our recent Homeless Run was humbling.</p>
                  <p>It was a reminder that our deen is not just lived on the prayer mat, but in the streets, serving those forgotten.</p>
                </div>
              }
               image="https://storage.googleapis.com/sayyidina-omar-institute/Image%20Gallery/20251116_090424.png"
            />
            
            <NewsItem
              index={6}
              category="Article"
              date="July 2025"
              title="Why Character Before Knowledge?"
              content={
                <div className="space-y-4">
                  <p>Knowledge without character is like a tree without roots; it will fall in the first storm.</p>
                  <p>At the Institute, we emphasize 'Adab' (etiquette/manners) as the container for knowledge. Before fiqh, we learn respect.</p>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
