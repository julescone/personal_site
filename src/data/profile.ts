// ─────────────────────────────────────────────────────────────────────────────
// All site content lives here. Edit this file to update any section.
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

export interface Certification {
  name: string;
  issuer?: string;
  year?: string;
}

export interface Patent {
  name: string;
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
  about: string;
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillGroup[];
  certifications: Certification[];
  patents: Patent[];
}

export const profile: Profile = {
  name: "Julian Cone",
  initials: "JC",
  headline: "Product Management | Software development | DevOps | Engineering | GIS | Artificial Intelligence",
  location: "Christchurch, New Zealand",
  email: "julian@planetnz.com",
  linkedin: "https://linkedin.com/in/juliancone",
  github: "",

  about: `Over 30 years experience in Product Management, Software development, DevOps, Engineering and GIS, particularly in the web and cloud B2B and B2C SAAS spaces.

Passionate about learning and applying AI to all these areas of experience.

I love collaborating and working in a team. When trying to solve a problem I feel my diverse background brings a different point of view to the problem space which can be very helpful.

I am passionate about working on interesting projects with great people in a team environment — naturally curious and enjoy learning new things. I enjoy mentoring and teaching others and have universally been regarded as a valuable teammate.

My most recent roles have been in the Product space, as a Director of Product and Product Manager roles.

I originally trained and worked in the GIS sector, which gave me lots of fantastic opportunities to work and train land use planners in that space in various parts of the Pacific, however my discovery of the www (way back in 1993!) was an epiphany for me, and I have been drawn in that direction ever since.

Over the last 25+ years I have been an experienced Director and co-founder of various internet and social enterprise organizations. I am very experienced in website development (mainly using Open Source technology like WordPress and Drupal), systems infrastructure management, code deployment and cloud services, including Google, AWS and Azure.

See the individual job entries in my profile below for more detail about the roles I have been involved with.`,

  // ── Work Experience ─────────────────────────────────────────────────────────
  experience: [
    {
      company: "PlanetNZ Consulting",
      role: "Director",
      startDate: "1998",
      endDate: "Present",
      location: "Christchurch, New Zealand",
      description:
        "Freelance web development, systems design and operations and product guidance for small scale startups. Also consulting work to help resolve issues with WordPress & Drupal websites for other organizations. Responsible for management of Linux servers, DNS, backup, web server and database software, bespoke websites and websites using Open-Source solutions like WordPress and Drupal.",
      technologies: ["PHP", "Linux", "DNS", "AWS", "WordPress", "Drupal"],
    },
    {
      company: "Ministry of Awesome",
      role: "Awesomist",
      startDate: "Jun 2012",
      endDate: "Present",
      location: "Christchurch, New Zealand",
      description:
        "Co-founder, and Awesomist at the Ministry of Awesome — the starting point for entrepreneurs. Responsible for building and maintaining the initial website using Drupal and managing all things tech (GSuite essentially). Also involved in many of the original events, including Coffee & Jam and the Startup Activator sessions.",
      highlights: [
        "Built and managed the initial website using Drupal",
        "Managed GSuite for Email and Calendaring",
      ],
      technologies: ["Drupal", "GSuite"],
    },
    {
      company: "Flowingly",
      role: "Director of Product",
      startDate: "Aug 2025",
      endDate: "Dec 2025",
      location: "Christchurch City, Canterbury, New Zealand",
      description:
        "As the Director of Product, responsible for overseeing product development of all Flowingly products. Worked closely with cross-functional teams including engineering, marketing, sales, and customer success to ensure products meet market needs and drive business growth.",
      highlights: [
        "Led the hiring of a NZ senior development team and participated in daily stand-ups and project planning",
        "Led integration of AI tooling into all team workflows to improve speed and efficiency",
      ],
    },
    {
      company: "GetHomeSafe",
      role: "Senior Product Owner",
      startDate: "Aug 2024",
      endDate: "Apr 2025",
      location: "Dunedin, Otago, New Zealand",
      description:
        "Led the Product team to ensure maximum customer enjoyment, digital security and success in their use of the platform. Responsible for researching, prioritising, scheduling, coordinating and implementing maintenance items and improvements across existing and new products.",
      technologies: ["Asana", "Figma", "CODA", "Google Business", "Gemini AI", "Beamer"],
    },
    {
      company: "Seequent",
      role: "Product Owner",
      startDate: "Jun 2021",
      endDate: "Jun 2024",
      location: "Christchurch, Canterbury, New Zealand",
      description:
        "Product Owner for the Central SaaS product at Seequent. Central allows customers to collaborate on their Geoscience projects generated in the Leapfrog Geoscience desktop modelling package. Responsible for prioritising the development backlog, communicating with stakeholders, and engaging customers regularly to resolve issues and gather feedback.",
      highlights: [
        "Planned and delivered significant platform upgrades — modernising the codebase for greater resilience, faster performance, quicker deployments and lower hosting costs",
        "Doubled the user base with minimal customer outages",
      ],
      technologies: ["Jira", "Confluence", "Scrum", "Agile"],
    },
    {
      company: "Verizon Connect",
      role: "DevOps Build Engineer",
      startDate: "Oct 2019",
      endDate: "Jun 2021",
      location: "Christchurch, Canterbury, New Zealand",
      description:
        "Build Engineer embedded in the Platform Services team. Supported 4 squads of developers to manage the Platform Core and Geospatial development, production environments and deployment pipelines. Collaborated with Verizon Connect teams in Dublin and Atlanta.",
      highlights: [
        "Implemented Octopus Deploy for newer projects; maintained Jenkins and legacy CI/CD pipelines for existing services",
        "Reached semi-finals in company-wide Love Hack startup competition (73 projects across 3 continents) and won a spot prize for best demo",
      ],
      technologies: ["Octopus Deploy", "Jenkins", "CI/CD"],
    },
    {
      company: "SLI Systems",
      role: "Software Engineer",
      startDate: "Aug 2014",
      endDate: "Apr 2019",
      location: "Christchurch, New Zealand",
      description:
        "Maintained and developed the Merchandising Console and managed hosting infrastructure for SLI's SaaS-based site search, navigation and merchandising platform — the most chosen SaaS site search provider to U.S. Internet Retailer Top 1,000 retailers.",
      highlights: [
        "Managed the slisystems.com WordPress website in close collaboration with the marketing team",
        "Explored application of VR to eCommerce using Unity and WebGL as innovation day projects",
      ],
      technologies: ["PHP", "Perl", "Sybase", "MongoDB", "CentOS Linux", "Apache", "JavaScript", "Aurelia", "Jenkins", "Git", "Ansible", "Google Cloud", "Kubernetes", "WordPress", "Drupal"],
    },
    {
      company: "YikeBike, Ltd",
      role: "Consultant — Web Development and Infrastructure",
      startDate: "2008",
      endDate: "Jun 2015",
      location: "Christchurch, New Zealand",
      description:
        "The YikeBike is one of the world's first fully electric folding bikes — featured on the cover of TIME magazine and named one of the top 50 inventions of the year. Responsible for the technical design and management of the YikeBike websites using Drupal.",
      highlights: [
        "Designed and implemented initial versions of www.yikebike.com and shop.yikebike.com",
        "Led expansion from brochure-ware site to full eCommerce store",
        "On-going management and configuration of site and hosting environment",
      ],
      technologies: ["Drupal"],
    },
    {
      company: "Eurekster",
      role: "Senior Software Engineer (co-founder)",
      startDate: "Jan 2004",
      endDate: "Apr 2008",
      location: "Christchurch, New Zealand",
      description:
        "Co-founder and part of the initial two-man engineering team building a personalised search engine on top of social networks and user-curated Search Wikis (swikis). Partnered with Friendster and the Disney website to provide a personalised search service for their users.",
      highlights: [
        "Developed the initial product and built out the engineering team",
        "Defined the product development roadmap and managed system operations",
        "Pivoted to lead developer and R&D focus as the engineering team scaled",
      ],
    },
    {
      company: "RealContacts Ltd",
      role: "CTO (co-founder)",
      startDate: "2001",
      endDate: "2004",
      description:
        "A social networking platform allowing third parties to develop applications on top of one social network. Dating website FriendlyConnections.net and jobs site RealContacts.com were the first applications built on the platform.",
      technologies: ["IIS", "SQL Server", "ASP"],
    },
    {
      company: "NBCi Inc.",
      role: "Software Engineer",
      startDate: "2000",
      endDate: "2001",
      description:
        "NBCi was NBC TV's attempt to launch an Internet portal. Worked in the NBCi NZ team on web development across various parts of the website. Seconded to the San Francisco office to support the Systems Operations team, managing the RedHat Unix cluster that provided video hosting for customers.",
      technologies: ["RedHat Unix"],
    },
    {
      company: "Manaaki Whenua - Landcare Research",
      role: "Webmaster",
      startDate: "1996",
      endDate: "2000",
      location: "Christchurch, New Zealand",
      description:
        "Migrated from GIS Scientist to Webmaster and web integration role across the company. In 1994 took the lead on setting up the first company website (one of the first in New Zealand). Maintained company websites, assisted with Library and Herbarium databases, and led the Database Integration Project — making Landcare's databases accessible via the Web.",
      highlights: [
        "Attended ausweb95, the first WWW Conference in Australia",
      ],
    },
    {
      company: "Manaaki Whenua - Landcare Research",
      role: "GIS Scientist",
      startDate: "1992",
      endDate: "1996",
      location: "Christchurch, New Zealand",
      description:
        "Hired as a GIS Scientist responsible for installing and managing a Sun Solaris system running Arc/Info GIS software. Worked across field research, mapping, lecturing, and international GIS capacity-building projects.",
      highlights: [
        "Developed the Banks Peninsula Resource Information System — led to a district plan mapping contract",
        "Lectured and tutored at Lincoln University's Introduction to GIS and Resource Planning course",
        "Taught GIS and land use planning to Indonesian and Cook Island planners in New Zealand",
        "Worked in Fiji to help the Ministry of Agriculture develop a GIS facility and produce the first digital national soil survey",
        "Visited Papua New Guinea to present results of a Landcare Research land resource mapping exercise",
        "Worked on GUILD — one of the first web-enabled GIS implementations",
      ],
      technologies: ["Arc/Info", "Sun Solaris"],
    },
  ],

  // ── Education ────────────────────────────────────────────────────────────────
  education: [
    {
      institution: "University of Canterbury",
      degree: "Bachelor of Science (Honours)",
      field: "Geography and Computer Science",
      startDate: "1988",
      endDate: "1992",
    },
  ],

  // ── Skills ───────────────────────────────────────────────────────────────────
  skills: [
    {
      category: "Product Management",
      items: ["Product Strategy", "Roadmapping", "Scrum / Agile", "Backlog Refinement", "Customer Discovery", "SaaS", "Stakeholder Management", "AI Product Management"],
    },
    {
      category: "Engineering & DevOps",
      items: ["CI/CD", "Linux", "AWS", "Google Cloud", "Azure", "Kubernetes", "Ansible", "Jenkins", "Octopus Deploy", "Git"],
    },
    {
      category: "Languages & Frameworks",
      items: ["PHP", "Python", "JavaScript", "HTML / CSS", "Perl"],
    },
    {
      category: "CMS & Tools",
      items: ["WordPress", "Drupal", "Jira", "Confluence", "Figma", "Asana", "MongoDB", "SQL"],
    },
    {
      category: "GIS & Data",
      items: ["Arc/Info", "GIS Analysis", "Cartography", "Spatial Data"],
    },
  ],

  // ── Certifications ───────────────────────────────────────────────────────────
  certifications: [
    { name: "Generative AI for Product Managers" },
    { name: "AI-Powered Project Management" },
  ],

  // ── Patents ──────────────────────────────────────────────────────────────────
  patents: [
    {
      name: "Personal contact network",
    },
  ],
};
