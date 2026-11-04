import { CurrentTermData } from '../types';
import { siteConfig, hysy30Facts } from './siteData';

export const currentTermData: CurrentTermData = {
  termName: "Term 3",
  moduleTitle: "Module E: The Foundations",
  lunarSeason: "11 Safar to 8 Rabi' al-Thani 1448 (25 July to 19 September 2026)",
  dates: "25 July to 19 September 2026 (Nine Weekly Sessions)",
  venue: hysy30Facts.venueName + ", Wangara",
  sessionTime: hysy30Facts.schedule,
  registrationStatus: "open",
  expressionOfInterestUrl: siteConfig.hysy30InterestFormUrl || siteConfig.expressInterestFormUrl,
  operationalNotes: "Ages 15–18, parallel circles for young men and young women. Includes Boys' Masjid Retreat on 12–13 September 2026. Parent orientation precedes session 1.",
  weeklyThemes: []
};

