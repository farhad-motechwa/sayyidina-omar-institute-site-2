import { LunarModuleData } from '../types';

export const lunarGoverningStatement = 
  "Teach the module that corresponds to the lunar season the students are living through. Use the Gregorian school term as the delivery container, not as the source of the spiritual sequence.";

export const lunarModules: LunarModuleData[] = [
  {
    id: "module-a",
    code: "Module A",
    title: "The Awakening",
    lunarSeason: "Shaʿban & Pre-Ramadan",
    spiritualMovement: "Takhliyah (Emptying)",
    purpose: "Review habits, renew intention, and prepare inwardly for the arrival of Ramadan.",
    description: "Before adornment comes purification. Module A focuses on clearing spiritual debris, auditing digital consumption, settling interpersonal grievances, and cultivating longing for the Month of the Qur'an.",
    keyPractices: [
      "Personal habit audit & screen fasts",
      "Drafting a Ramadan spiritual roadmap",
      "Practicing voluntary fasting and night prayer warm-ups",
      "Restoring relationships & asking forgiveness"
    ]
  },
  {
    id: "module-b",
    code: "Module B",
    title: "The Crucible",
    lunarSeason: "Ramadan",
    spiritualMovement: "Tajliyah (Adorning)",
    purpose: "Experience fasting, Qur'anic immersion, restraint, community service, and intensive night worship.",
    description: "Ramadan is the annual intensive formation environment. Participants engage with the Qur'an not merely as text, but as a living guidance system that reshapes desires, speech, and endurance.",
    keyPractices: [
      "Daily Qur'an tadabbur journals",
      "Community Iftar service and food distribution",
      "Nightly Qiyam gatherings & prolonged sujud",
      "Guarding eyes, tongue, and thoughts during fasts"
    ]
  },
  {
    id: "module-c",
    code: "Module C",
    title: "The Consolidation",
    lunarSeason: "Shawwal & Dhul-Qaʿdah",
    spiritualMovement: "Istiqamah (Steadiness)",
    purpose: "Protect what was gained during Ramadan and prepare for the sacred pilgrimage season.",
    description: "The test of Ramadan is what remains in Shawwal. Module C builds long-term spiritual discipline, guarding against post-Ramadan fatigue and establishing baseline daily routines.",
    keyPractices: [
      "Fasting the 6 days of Shawwal",
      "Establishing permanent daily adhkar and awrad",
      "Pacing academic and personal goals with worship",
      "Reflecting on consistency over intensity"
    ]
  },
  {
    id: "module-d",
    code: "Module D",
    title: "The Return",
    lunarSeason: "Dhul-Hijjah",
    spiritualMovement: "Tajrid (Surrender & Sacrificial Focus)",
    purpose: "Reconsider ambition, attachment, sacrifice, and the ultimate return to Allah.",
    description: "Inspired by the legacy of Sayyidina Ibrahim AS and Hajar AS, Module D explores devotion, sacrifice, overcoming ego-driven career goals, and understanding life as a temporary journey towards the Akhirah.",
    keyPractices: [
      "First 10 days of Dhul-Hijjah action plans",
      "Understanding sacralized sacrifice and stewardship",
      "Reflecting on mortality, legacy, and true success",
      "Community khidmah projects during Eid"
    ]
  },
  {
    id: "module-e",
    code: "Module E",
    title: "The Foundations",
    lunarSeason: "Muharram to Rajab",
    spiritualMovement: "Tazkiyah (Purification & Structural Growth)",
    purpose: "Build inner structures through tawhid, seerah, adab, service, and critical reflection.",
    description: "The core foundational container. Expands or contracts according to the interaction between the lunar year, school terms, and local programme capacity. Covers core theology, character, and practical adulthood.",
    keyPractices: [
      "9-week foundational formation sequence",
      "Study of Prophetic character and Makkan Seerah",
      "Mastering adab in conversation and friendship",
      "30-Year Vision Seed development"
    ]
  }
];
