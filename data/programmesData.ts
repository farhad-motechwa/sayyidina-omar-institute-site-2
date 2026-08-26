export interface ProgrammeInfo {
  id: string;
  slug: string;
  title: string;
  slugTitle?: string;
  subtitle: string;
  targetAudience: string;
  shortDescription: string;
  fullDescription: string;
  keyFeatures: string[];
  route: string;
  ctaText: string;
}

export const programmesData: ProgrammeInfo[] = [
  {
    id: "hysy30",
    slug: "how-you-see-yourself-at-30",
    title: "How You See Yourself at 30",
    subtitle: "Identity, faith, character, and accountable adulthood for young Muslims aged 15–18.",
    targetAudience: "Young Men & Young Women (Aged 15–18)",
    shortDescription: "A structured 9-week formation journey helping high school youth develop habits, relationships, and spiritual grounding before reaching adulthood.",
    fullDescription: "A person does not suddenly become someone at 30. The habits, relationships, choices, worship, and responsibilities formed during youth gradually construct that future person. This flagship programme provides a safe, structured environment guided by trained Murabbis.",
    keyFeatures: [
      "Parallel learning circles for young men and young women",
      "Tadabbur, Tarbiyah Circles, Suhbah, and Basirah pedagogy",
      "Sovereign Compass framework (Qalb, ʿAql, Nafs, Ruh)",
      "The 5-field 30-Year Vision Seed",
      "Lunar Season Curriculum alignment"
    ],
    route: "how-you-see-yourself-at-30",
    ctaText: "Explore HYSY30 Programme"
  },
  {
    id: "murabbi-formation",
    slug: "murabbi-formation",
    title: "Murabbi Formation Programme",
    slugTitle: "Murabbi Formation",
    subtitle: "Preparing and holding accountable the adult mentors entrusted to accompany young people.",
    targetAudience: "Adult Mentors, Educators & Community Leaders",
    shortDescription: "Training adults in active listening, adab, boundaries, safeguarding posture, and accountable companionship rather than mere lecturing.",
    fullDescription: "A Murabbi is neither a corporate life coach nor a distant lecturer. A Murabbi is a trusted guide who models character, maintains ethical boundaries, practices theological restraint, and accompanies youth through life's complexities.",
    keyFeatures: [
      "Mentorship ethics & boundaries training",
      "Safeguarding and WWCC compliance",
      "Active listening & pastoral guidance limits",
      "Theological restraint & referral protocols",
      "Peer supervision & reflective practice"
    ],
    route: "murabbi-formation",
    ctaText: "Explore Murabbi Pathway"
  },
  {
    id: "project-amanah",
    slug: "project-amanah",
    title: "Project Amanah",
    subtitle: "Systems thinking, problem-based learning, discernment, and ethical action.",
    targetAudience: "Youth & Emerging Adult Innovators",
    shortDescription: "Helping participants identify real community problems, understand underlying systems, use AI with discernment, and build responsible responses.",
    fullDescription: "A practical pilot initiative empowering participants to engage with contemporary challenges using Islamic ethical principles, systems mapping, and responsible technology usage.",
    keyFeatures: [
      "Find a real problem in the local community",
      "Understand the underlying socio-technical system",
      "Use AI with discernment, avoiding dependence",
      "Build a responsible, ethical community response"
    ],
    route: "project-amanah",
    ctaText: "Learn About Project Amanah"
  },
  {
    id: "sovereign-compass",
    slug: "sovereign-compass",
    title: "The Sovereign Compass",
    subtitle: "A reflective framework for understanding Qalb, ʿAql, Nafs, and Ruh in digital life.",
    targetAudience: "All Participants & Broader Community",
    shortDescription: "An inner diagnostic language for self-examination (muhasabah), distinguishing heart attachments, intellect, ego impulses, and spirit.",
    fullDescription: "Designed to help young Muslims navigate social media, peer pressure, career anxiety, and noise. Serves as an educational language for self-awareness, not a clinical diagnostic or standalone doctrine.",
    keyFeatures: [
      "Qalb (Heart): Sincerity, intention & attachment",
      "ʿAql (Intellect): Reason, verification & discernment",
      "Nafs (Ego): Appetite, validation & status impulse",
      "Ruh (Spirit): Remembrance, tawakkul & orientation to Allah"
    ],
    route: "sovereign-compass",
    ctaText: "Explore Sovereign Compass"
  },
  {
    id: "radio-and-public-learning",
    slug: "radio",
    title: "SOI Radio & Public Seminars",
    subtitle: "Continuous public learning, reflection, lectures, and audio broadcasts.",
    targetAudience: "Broad Community, Families & Students",
    shortDescription: "Live 24/7 radio broadcasts, podcasts, and community seminars offering thoughtful discourse on faith and character.",
    fullDescription: "An accessible window into the intellectual and spiritual life of the Institute, broadcasting recitations, reflections, interviews, and educational discussions.",
    keyFeatures: [
      "24/7 live digital radio stream",
      "Archived podcast reflections",
      "Masjid-based public seminars & circles",
      "Educational publications"
    ],
    route: "radio",
    ctaText: "Listen to SOI Radio"
  }
];
