import React, { useEffect } from 'react';
import { Page } from '../../types';
import { siteConfig } from '../../data/siteData';

interface FoundingEssayPageProps {
  setCurrentPage?: (page: Page, targetUrl?: string) => void;
}

export const FoundingEssayPage: React.FC<FoundingEssayPageProps> = ({ setCurrentPage }) => {
  useEffect(() => {
    document.title = "The Work of Becoming — Sayyidina Omar Institute";

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'founding-essay-jsonld';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The Work of Becoming",
      "description": "Why Sayyidina Omar Institute is looking beyond what young people know to who they are becoming",
      "author": {
        "@type": "Person",
        "name": "Farhad Omar"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Sayyidina Omar Institute for Character and Leadership"
      },
      "datePublished": "2026-08-08"
    });
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('founding-essay-jsonld');
      if (existing) {
        existing.remove();
      }
    };
  }, []);

  return (
    <article className="max-w-[680px] mx-auto px-4 sm:px-6 py-12 sm:py-20 text-left selection:bg-amber-500/20 selection:text-amber-300">
      
      {/* Article Header Furniture */}
      <header className="space-y-4 mb-10 pb-8 border-b border-slate-800/80">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-sans block">
          THE FOUNDING ESSAY
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.2]">
          The Work of Becoming
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 font-serif leading-relaxed italic">
          Why Sayyidina Omar Institute is looking beyond what young people know to who they are becoming
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-3 text-sm font-sans text-slate-400">
          <span className="text-amber-300 font-medium">Farhad Omar</span>
          <span>·</span>
          <span>August 2026</span>
          <span>·</span>
          <span>About 9 minutes</span>
        </div>

        <div className="pt-1">
          <a
            href={siteConfig.substackUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-sans text-slate-400 hover:text-amber-300 underline underline-offset-4 transition-colors"
          >
            Originally published on Farhad Omar Studios. Subscribe for new writing →
          </a>
        </div>
      </header>

      {/* Article Prose Content */}
      <div className="font-serif text-[18px] leading-[1.7] text-slate-200 space-y-6">
        <p>
          There is something slightly uncomfortable about the way we have learned to measure young people.
        </p>

        <p>
          We know their grades, attendance, behaviour, competencies and, increasingly, their likelihood of succeeding in one pathway or another. Outside school, another set of systems is doing much the same thing. Social media learns their preferences. Algorithms anticipate what will hold their attention. Employers will eventually measure their productivity.
        </p>

        <p>
          A great deal can be known about a person this way, but something important can also be missed.
        </p>

        <p>
          The person being measured is still becoming.
        </p>

        <p>
          That idea sits beneath much of the work being developed at Sayyidina Omar Institute in Perth.
        </p>

        <p>
          The Institute begins from a fairly simple proposition: do not mistake who somebody is today for who they may become.
        </p>

        {/* PULL QUOTE 1 */}
        <div className="my-12 py-8 border-y border-amber-500/30 text-center font-serif text-2xl sm:text-3xl italic text-amber-300 leading-snug px-2">
          "Do not mistake who somebody is today for who they may become."
        </div>

        <p>
          A teenager who is distracted now is not necessarily destined for a life of heedlessness. Someone struggling with faith has not reached the end of their relationship with Allah. A quiet young person may eventually carry responsibilities nobody around them can presently imagine. Conversely, intelligence, confidence and academic achievement tell us very little about how someone will respond when money, authority, marriage, parenthood, disappointment or hardship eventually arrive.
        </p>

        <p>
          This is where Sayyidina Omar Institute places the idea of formation.
        </p>

        <p>
          It is not a rejection of education or knowledge. It is an argument that transmitting knowledge is only part of the work.
        </p>

        <p>
          A person can learn what honesty means and still lie when telling the truth becomes costly. A student can study the rulings of charity without becoming generous. A young Muslim can know the language of amanah without yet having developed the discipline to carry one.
        </p>

        <p>
          Knowing matters. But what that knowledge does to the person matters too.
        </p>

        <p>
          The Institute is trying to work in that space.
        </p>

        <p>
          Its approach draws together taʿlim, the acquisition of knowledge, with tarbiyah, nurturing and development, and tazkiyah, the purification of the self. Intention, service, companionship and reflection are treated not as additions to a curriculum but as part of the environment through which a person is formed.
        </p>

        <p>
          The Institute describes its work publicly as helping young Muslims grow into people of "taqwa, courage, justice and service", drawing inspiration from the life and legacy of Sayyidina ʿUmar ibn al-Khattab RA.
        </p>

        <p>
          Behind that description is a question that has become increasingly central to its work:
        </p>

        <p className="font-semibold text-white">
          Who is this person becoming?
        </p>

        <p>
          It changes how a murabbi looks at a young person.
        </p>

        <p>
          The fifteen-year-old sitting in front of a teacher is not only a fifteen-year-old. One day he may be a husband and father. People may depend upon his judgement. He may employ others, care for ageing parents, teach, lead or serve quietly without ever holding a title.
        </p>

        <p>
          The young woman who barely speaks during a programme may one day become the person her family turns to during a crisis.
        </p>

        <p>
          Nobody knows these futures. Certainly not the teacher. Knowledge of what will come belongs to Allah.
        </p>

        <p>
          The point is not to predict what a young person will become. It is to resist trapping them inside what we happen to see now.
        </p>

        <p>
          That has led to a phrase which perhaps captures the Institute's philosophy better than a lengthy educational statement:
        </p>

        {/* PULL QUOTE 2 */}
        <div className="my-12 py-8 border-y border-amber-500/30 text-center font-serif text-2xl sm:text-3xl italic text-amber-300 leading-snug px-2">
          "Teach who they are. Form for who they are becoming."
        </div>

        <p>
          There is another side to it.
        </p>

        <p>
          Present weakness should not become a permanent label. But present success should not become a guarantee either.
        </p>

        <p>
          A bright student still needs character. A confident student still needs humility. Someone capable of leadership still needs to learn what authority is for.
        </p>

        <p>
          Formation looks beyond capacity towards responsibility.
        </p>

        <p>
          For Sayyidina Omar Institute, that responsibility is understood through amanah. A human being has been entrusted with knowledge, ability, time and ultimately a life for which they are answerable before Allah.
        </p>

        <p>
          This is why another phrase has begun to emerge naturally from the Institute's work:
        </p>

        {/* PULL QUOTE 3 */}
        <div className="my-12 py-8 border-y border-amber-500/30 text-center font-serif text-2xl sm:text-3xl italic text-amber-300 leading-snug px-2">
          "Forming people for the amanah ahead."
        </div>

        {/* Section 1 */}
        <h2 className="text-amber-400 font-serif font-bold text-2xl sm:text-3xl mt-14 mb-6 pt-4 border-t border-slate-800/60">
          Why Sayyidina ʿUmar?
        </h2>

        <p>
          The name of the Institute is not incidental.
        </p>

        <p>
          There is something profound in considering the life of Sayyidina ʿUmar RA through the lens of formation.
        </p>

        <p>
          We know the man he became. That makes it easy to forget that there was a journey.
        </p>

        <p>
          His strength did not disappear when he embraced Islam. But strength came to serve something different. Courage, authority and decisiveness were brought under a different moral order.
        </p>

        <p>
          That matters educationally.
        </p>

        <p>
          The question is not simply whether a young Muslim can accumulate Islamic knowledge. It is what happens to intelligence, confidence, ambition, strength and even weakness when these are gradually brought into a life oriented towards Allah.
        </p>

        <p>
          That is a very different educational project from producing students who can reproduce the right answers.
        </p>

        {/* Section 2 */}
        <h2 className="text-amber-400 font-serif font-bold text-2xl sm:text-3xl mt-14 mb-6 pt-4 border-t border-slate-800/60">
          Beginning with real people
        </h2>

        <p>
          The groundwork for the Institute has been quite ordinary.
        </p>

        <p>
          There is no large campus behind the idea. The work has grown through young people meeting in community spaces, conversations with parents and murabbis, collaboration with Alhidayah Centre in Perth, mentoring, retreats, iʿtikāf, community service and the repeated experience of watching a curriculum meet an actual human being.
        </p>

        <p>
          That last part matters.
        </p>

        <p>
          Frameworks can look excellent on paper. Young people have a way of exposing whether they make sense.
        </p>

        <p>
          The How You See Yourself at 30 programme emerged from this concern with the person beyond the present moment.
        </p>

        <p>
          The title sounds at first like career planning. It is asking something much broader.
        </p>

        <p className="font-semibold text-white">
          Who are you becoming through the choices you are making now?
        </p>

        <p>
          Thirty is far enough away for a teenager to imagine another version of themselves, but close enough to be real. By then there may be work, marriage, children, financial obligations and responsibilities towards parents and community.
        </p>

        <p>
          The programme asks young people to think about that future through purpose, tazkiyyah, niyyah and khidmah.
        </p>

        <p>
          A career matters, but a human life cannot be reduced to a career.
        </p>

        <p>
          A more difficult question is what kind of person will eventually inhabit that career.
        </p>

        <p>
          What will knowledge serve? What will happen when earning increases? How will success be carried? What happens to faith when nobody is watching? What kind of person will a spouse, child, neighbour or colleague encounter?
        </p>

        <p>
          There are no simple assessment rubrics for these questions.
        </p>

        {/* Section 3 */}
        <h2 className="text-amber-400 font-serif font-bold text-2xl sm:text-3xl mt-14 mb-6 pt-4 border-t border-slate-800/60">
          The murabbi is not outside the process
        </h2>

        <p>
          One of the more important decisions within the SOI framework is that formation cannot be something adults simply do to young people.
        </p>

        <p>
          The murabbi is also being formed.
        </p>

        <p>
          Knowing a subject does not automatically make someone capable of accompanying another human being. A teacher may understand the material and still fail to understand the person sitting across from them.
        </p>

        <p>
          The Murabbi Formation Programme has therefore become an important part of the Institute's groundwork.
        </p>

        <p>
          The murabbi has to learn to listen. Sometimes to wait. To recognise when correction is necessary and when a young person first needs to be heard. They also need enough self-awareness to recognise when their own ego, impatience or assumptions have entered the relationship.
        </p>

        <p>
          There is authority in this model, but authority carries responsibility.
        </p>

        <p>
          The murabbi is neither there simply to deliver content nor to manufacture a student in their own image.
        </p>

        <p>
          Their work is closer to cultivation.
        </p>

        <p>
          That metaphor has limits, as all metaphors do, but it captures something important. Growth cannot be forced into existence by the gardener. The soil can be tended. Something can be protected. Conditions can be created. Pruning may sometimes be necessary.
        </p>

        <p>
          But life itself is not manufactured by the gardener.
        </p>

        <p>
          For an Islamic institution, that distinction matters even more. Guidance is from Allah.
        </p>

        {/* Section 4 */}
        <h2 className="text-amber-400 font-serif font-bold text-2xl sm:text-3xl mt-14 mb-6 pt-4 border-t border-slate-800/60">
          When service becomes part of learning
        </h2>

        <p>
          The same thinking explains the place of khidmah in the Institute's programmes.
        </p>

        <p>
          Service is difficult to teach from a whiteboard.
        </p>

        <p>
          Eventually somebody has to carry something, clean something, give up some time, listen to someone they would not ordinarily meet, or remain present when there is no recognition for doing so.
        </p>

        <p>
          Community service gives young people an encounter with responsibility that a classroom cannot reproduce.
        </p>

        <p>
          It is not intended as a token volunteering exercise at the end of a programme. The deeper educational question is what happens when the self is no longer placed at the centre of every decision.
        </p>

        <p>
          This is also informing newer work such as Project Amanah, where systems thinking and problem-solving are brought into conversation with Islamic formation.
        </p>

        <p>
          Young Muslims will have to live and work inside complicated technological, economic and social systems. Shielding them from those systems is neither realistic nor desirable.
        </p>

        <p>
          The harder task is preparing them to enter the world without allowing the world to determine completely who they become.
        </p>

        {/* Section 5 */}
        <h2 className="text-amber-400 font-serif font-bold text-2xl sm:text-3xl mt-14 mb-6 pt-4 border-t border-slate-800/60">
          What would success look like?
        </h2>

        <p>
          This may eventually become one of the hardest questions for the Institute itself.
        </p>

        <p>
          How does an organisation measure formation?
        </p>

        <p>
          Attendance can be counted. Programmes can be completed. Books can be sold. Cohorts can grow. These things matter because an institution has to survive.
        </p>

        <p>
          But none of them proves that formation has taken place.
        </p>

        <p>
          Some of the things that matter most may not become visible for years.
        </p>

        <p>
          Perhaps a teenager who once needed constant prompting becomes a father who is present for his children.
        </p>

        <p>
          Perhaps someone learns to control anger before they are ever given authority.
        </p>

        <p>
          Perhaps a young person develops enough moral clarity to walk away from money that does not belong to them.
        </p>

        <p>
          Perhaps someone who once thought of the masjid as a place their parents made them attend eventually comes to see the community itself as an amanah.
        </p>

        <p>
          Sayyidina Omar Institute cannot claim those outcomes in advance. Nor should it.
        </p>

        <p>
          The Institute is still developing. Its frameworks will have to survive contact with families, young people, teachers and communities. Some assumptions will prove sound. Others will need revision. A philosophy centred on formation must leave room for the institution itself to be formed by what it learns.
        </p>

        <p>
          There is a certain humility required here.
        </p>

        <p>
          No curriculum creates a righteous human being. No murabbi controls another person's heart. No institution can guarantee guidance.
        </p>

        <p>
          But we can be more careful about the environments we create around people. We can teach with greater attention to what knowledge is meant to produce. We can give young people real responsibility. We can accompany them through failure without making failure their identity. And we can remember that the person standing before us now is not necessarily the person we will meet ten years from now.
        </p>

        <p>
          Perhaps that is the simplest way to understand what Sayyidina Omar Institute is trying to do.
        </p>

        {/* PULL QUOTE 4 */}
        <div className="my-12 py-8 border-y border-amber-500/30 text-center font-serif text-2xl sm:text-3xl italic text-amber-300 leading-snug px-2">
          "The human being is unfinished."
        </div>

        <p>
          Our responsibility is to take seriously who they are today without losing sight of who they may yet become.
        </p>
      </div>

      {/* Closing Block */}
      <section className="border-t border-slate-800 pt-12 mt-16 space-y-8 font-sans">
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block">
            Continue
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <button
              onClick={() => setCurrentPage?.(Page.HYSY30, '/how-you-see-yourself-at-30')}
              className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 text-slate-200 hover:text-amber-300 text-left font-medium transition-colors flex items-center justify-between group"
            >
              <span>How You See Yourself at 30</span>
              <span className="text-amber-400 group-hover:translate-x-1 transition-transform">→</span>
            </button>

            <button
              onClick={() => setCurrentPage?.(Page.MURABBI_FORMATION, '/murabbi-formation')}
              className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 text-slate-200 hover:text-amber-300 text-left font-medium transition-colors flex items-center justify-between group"
            >
              <span>Murabbi Formation</span>
              <span className="text-amber-400 group-hover:translate-x-1 transition-transform">→</span>
            </button>

            <button
              onClick={() => setCurrentPage?.(Page.PROJECT_AMANAH, '/project-amanah')}
              className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 text-slate-200 hover:text-amber-300 text-left font-medium transition-colors flex items-center justify-between group"
            >
              <span>Project Amanah</span>
              <span className="text-amber-400 group-hover:translate-x-1 transition-transform">→</span>
            </button>

            <button
              onClick={() => setCurrentPage?.(Page.BOOKS_SERIES, '/books')}
              className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 text-slate-200 hover:text-amber-300 text-left font-medium transition-colors flex items-center justify-between group"
            >
              <span>The four books</span>
              <span className="text-amber-400 group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800/60 text-xs sm:text-sm text-slate-400 leading-relaxed">
          <span>New writing goes out on Farhad Omar Studios. </span>
          <a
            href={siteConfig.substackUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-4 transition-colors"
          >
            Subscribe →
          </a>
        </div>
      </section>

    </article>
  );
};

export default FoundingEssayPage;
