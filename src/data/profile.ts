// ─────────────────────────────────────────────────────────────────────────────
// Profile types + data. Content lives in profile.json (edit via /edit in dev).
// ─────────────────────────────────────────────────────────────────────────────

import data from './profile.json';

export interface ExperienceItem {
  company: string;
  role: string;
  startDate: string;
  endDate: string;        // use "Present" for current roles
  location?: string;
  description: string;
  highlights?: string[];
  technologies?: string[];
  /** Optional company logo path under /public (e.g. "/nbci_logo.png") */
  logo?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Certification {
  name: string;
  issuer?: string;
  year?: string;
}

export interface Patent {
  name: string;
  url?: string;
  description?: string;
}

export interface Profile {
  name: string;
  initials: string;
  headline: string;
  location: string;
  email: string;
  linkedin: string;
  github?: string;
  twitter?: string;
  /** Short bio shown in the Bio section near the top of the page */
  bio: string;
  about: string;
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillGroup[];
  certifications: Certification[];
  patents: Patent[];
}

export const profile: Profile = data as Profile;
