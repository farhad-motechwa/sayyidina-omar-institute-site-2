
export enum Page {
  HOME = 'home',
  ABOUT = 'about',
  AUTHOR_FARHAD_OMAR = 'about/farhad-omar',
  BOOKS_SERIES = 'books',
  BOOK_ONE = 'books/who-are-you-becoming',
  BOOK_TWO = 'books/tazkiyyah',
  BOOK_THREE = 'books/niyyah',
  BOOK_FOUR = 'books/khidmah',
  PROGRAMMES = 'programmes',
  HYSY30 = 'how-you-see-yourself-at-30',
  LUNAR_CURRICULUM = 'lunar-curriculum',
  MURABBI_FORMATION = 'murabbi-formation',
  PROJECT_AMANAH = 'project-amanah',
  COMPASS = 'compass',
  SOVEREIGN_COMPASS = 'sovereign-compass',
  TAZKIYYAH = 'tazkiyyah',
  ATTRIBUTE_COMPASS = 'attribute-compass',
  SCHOLASTIC_BRIDGE = 'scholastic-bridge',
  APPS = 'apps',
  PARENTS_SAFEGUARDING = 'parents-safeguarding',
  FOUNDING_ESSAY = 'the-work-of-becoming',
  FOUNDATION_STEWARDSHIP = 'foundation-and-stewardship',
  RESOURCES = 'resources',
  EVENTS = 'events',
  RADIO = 'radio',
  CONTACT = 'contact',
  EXPRESS_INTEREST = 'express-interest',
  SUPPORT = 'support',
  PRIVACY = 'privacy',
  GALLERY = 'gallery',
  NEWS = 'news',
  NOT_FOUND = '404'
}

export const getPageFromPath = (pathname: string): Page => {
  const cleanWithQuery = pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
  const clean = cleanWithQuery.split('?')[0];

  if (clean === '' || clean === 'home') {
    return Page.HOME;
  }

  // Route aliases for tool pages & parents safeguarding
  if (clean === 'compass' || clean === 'sovereign-compass') {
    return Page.COMPASS;
  }
  if (clean === 'tazkiyyah' || clean === 'tazkiyah') {
    return Page.TAZKIYYAH;
  }
  if (clean === 'parents-and-safeguarding' || clean === 'parents-safeguarding') {
    return Page.PARENTS_SAFEGUARDING;
  }
  if (clean === 'the-work-of-becoming' || clean === 'work-of-becoming' || clean === 'founding-essay') {
    return Page.FOUNDING_ESSAY;
  }
  if (clean === 'foundation-and-stewardship' || clean === 'foundation-stewardship') {
    return Page.FOUNDATION_STEWARDSHIP;
  }

  const values = Object.values(Page) as string[];
  if (values.includes(clean)) {
    return clean as Page;
  }

  return Page.NOT_FOUND;
};

export interface WeeklyTheme {
  weekNumber: number;
  title: string;
  focus: string;
}

export interface CurrentTermData {
  termName: string;
  moduleTitle: string;
  lunarSeason: string;
  dates: string;
  venue: string;
  sessionTime: string;
  weeklyThemes: WeeklyTheme[];
  registrationStatus: 'open' | 'upcoming' | 'closed';
  expressionOfInterestUrl: string;
  operationalNotes?: string;
}

export interface LunarModuleData {
  id: string;
  code: string;
  title: string;
  lunarSeason: string;
  spiritualMovement: string;
  purpose: string;
  description: string;
  keyPractices: string[];
}

export interface ResourceItem {
  id: string;
  title: string;
  category: 'Article' | 'Reflection' | 'Curriculum Summary' | 'Document' | 'Podcast';
  date: string;
  author?: string;
  summary: string;
  readTime?: string;
  downloadUrl?: string;
  externalUrl?: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  category: 'Seminar' | 'Learning Circle' | 'Retreat' | 'Community Session';
  description: string;
  registrationUrl?: string;
  isConfirmed: boolean;
}

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


