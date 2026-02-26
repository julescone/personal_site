// ─────────────────────────────────────────────────────────────────────────────
// Fill in your details here. All sections are shown on the homepage in order.
// ─────────────────────────────────────────────────────────────────────────────

export interface ExperienceItem {
  company: string;
  role: string;
  startDate: string;
  endDate: string;        // use "Present" for current roles
  location?: string;
  description: string;
  highlights?: string[];
  technologies?: string[];
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

export interface Profile {
  name: string;
  initials: string;
  headline: string;
  location: string;
  email: string;
  linkedin: string;
  github?: string;
  twitter?: string;
  about: string;
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillGroup[];
}

export const profile: Profile = {
  name: "Julian Cone",
  initials: "JC",

  // Your professional tagline — what appears under your name on LinkedIn
  headline: "Your Professional Headline Here",

  location: "Christchurch, New Zealand",
  email: "julian@planetnz.com",
  linkedin: "https://linkedin.com/in/juliancone",
  github: "", // e.g. "https://github.com/juliancone" — leave blank to hide

  // LinkedIn "About" section
  about: `Over 30 years experience in Product Management, Software development, DevOps, Engineering and GIS, particularly in the web and cloud B2B and B2C SAAS spaces.

Passionate about learning and applying AI to all these areas of experience.

I love collaborating and working in a team. When trying to solve a problem I feel my diverse background brings a different point of view to the problem space which can be very helpful.

I am passionate about working on interesting projects with great people in a team environment — naturally curious and enjoy learning new things. I enjoy mentoring and teaching others and have universally been regarded as a valuable teammate.

My most recent roles have been in the Product space, as a Director of Product and Product Manager roles.

I originally trained and worked in the GIS sector, which gave me lots of fantastic opportunities to work and train land use planners in that space in various parts of the Pacific, however my discovery of the www (way back in 1993!) was an epiphany for me, and I have been drawn in that direction ever since.

Over the last 25+ years I have been an experienced Director and co-founder of various internet and social enterprise organizations. I am very experienced in website development (mainly using Open Source technology like WordPress and Drupal), systems infrastructure management, code deployment and cloud services, including Google, AWS and Azure.

See the individual job entries in my profile below for more detail about the roles I have been involved with.`,

  // ── Work Experience ─────────────────────────────────────────────────────
  experience: [
    {
      company: "PlanetNZ Consulting",
      role: "Director",
      startDate: "Jan 2023",
      endDate: "Present",
      location: "Christchurch, New Zealand",
      description:
        "Freelance web development, systems design and operations and product guidance for small scale startups. Also consulting work to help resolve issues with WordPress & Drupal websites for other organizations. Responsible for management of Linux servers, DNS, backup, web server and database software, bespoke websites and websites using Open-Source solutions like WordPress and Drupal.",
      highlights: [
        "Ministry of Awesome",
        "RugbyHeads",
        "YikeBike",
      ],
      technologies: ["Python", "PHP", "Linux", "DNS", "AWS", "WordPress", "Drupal"],
    },
    {
      company: "Ministry of Awesome",
      role: "Co-Founder - Awesomist",
      startDate: "Jun 2012",
      endDate: "Present",
      location: "Christchurch, New Zealand",
      description: "Co-founder, and Awesomist at the Ministry of Awesome, managing the tech side or the Org. I was also involved in many of the original Events, including Coffee & Jam, and the Startup Activator sessions.",
      highlights: [
        "Built and managed the initial website using Drupal",
        "managed GSuite for Email and Calendaring.",
      ],
      technologies: ["Drupal", "GSuite"],
    },
    // Add more entries as needed
  ],

  // ── Education ────────────────────────────────────────────────────────────
  education: [
    {
      institution: "Canterbury University",
      degree: "Bachelor of Science",
      field: "Geography and Computer Science with Honours",
      startDate: "1988",
      endDate: "1992",
      // gpa: "3.8",
      description: "",
    },
    // Add more entries as needed
  ],

  // ── Skills ───────────────────────────────────────────────────────────────
  skills: [
    {
      category: "Languages & Frameworks",
      items: ["Skill 1", "Skill 2", "Skill 3", "Skill 4"],
    },
    {
      category: "Tools & Platforms",
      items: ["Tool 1", "Tool 2", "Tool 3"],
    },
    {
      category: "Practices",
      items: ["Agile", "CI/CD", "Code Review"],
    },
  ],
};
