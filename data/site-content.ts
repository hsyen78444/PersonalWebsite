export const profile = {
  name: "Yen Hua Shen",
  tagline: "CS student | Full-stack developer | Spring Boot and modern web apps",
  summary:
    "Software engineering student from Kuala Lumpur building backend-heavy web apps with clean product UI.",
  about:
    "My work so far sits between backend systems and product UI: Spring Boot services, database-backed apps, Vue and React frontends, and Qt/QML interfaces.",
  education:
    "B.Comp.Sc. in Software Engineering at Universiti Malaya, CGPA 3.53. Exchange semester at McGill University.",
  interests:
    "Interested in backend systems, product engineering, and practical AI tools.",
  email: "yhuashen@gmail.com",
  github: "https://github.com/hsyen78444",
  linkedin: "https://www.linkedin.com/in/yen-hua-shen-595472280/",
  resumeUrl: "https://drive.google.com/file/d/1qIlaMBNVJzk6Zokv7UwQczmaXB_07NpX/view?usp=drive_link",
  currentFocus: "Spring Boot backends, end-to-end products, and cleaner interfaces",
  focusDescription:
    "Right now I am focused on systems that have real workflow complexity behind a simple UI.",
  contactNote:
    "Open to internships, research, and student projects."
} as const;

export const skillGroups = [
  {
    title: "Languages",
    items: ["Java", "JavaScript", "TypeScript", "Python", "SQL", "HTML/CSS"]
  },
  {
    title: "Frameworks",
    items: ["Spring Boot", "React", "Vue.js", "Node.js", "Express", "Qt/QML"]
  },
  {
    title: "Tools",
    items: ["Postman", "PostgreSQL", "MongoDB", "MySQL", "Gradle", "Maven"]
  }
] as const;

export const experiences = [
  {
    role: "Full Stack Developer Intern",
    org: "WebPlus Solution Sdn Bhd",
    period: "Jan 2026 - Ongoing",
    summary:
      "Built Spring Boot microservices, REST APIs, and Oracle-backed business logic for a DNS management platform, then integrated them with Angular and supported end-to-end debugging."
  },
  {
    role: "QML Developer Intern",
    org: "WUXIMENTU Network Technology Co., Ltd.",
    period: "Jul 2024 - Oct 2024",
    summary:
      "Improved the UI and UX of a cross-platform messaging app during a 4-month internship, building reusable QML components and connecting frontend behavior with existing logic."
  }
] as const;

export const projects = [
  {
    title: "Flight Management System",
    type: "Full-stack App",
    description:
      "Airline management system with authentication, booking flows, and admin modules.",
    stack: ["Spring Boot", "Vue.js", "PostgreSQL", "REST API", "Gradle"],
    codeLink: "https://github.com/hsyen78444"
  },
  {
    title: "AI Email Reply Generator",
    type: "AI Product Tool",
    description:
      "AI email reply tool using Gemini, a Chrome extension, Spring Boot, and React.",
    stack: ["Google Gemini API", "Spring Boot", "React", "Chrome Extension", "Maven"],
    codeLink: "https://github.com/hsyen78444/AI-email-reply-generator"
  },
  {
    title: "Pickify",
    type: "Recommendation Platform",
    description:
      "Media recommendation app with search, ratings, comments, and team-built API integration.",
    stack: ["Node.js", "Express", "MongoDB", "JavaScript", "Postman"],
    codeLink: "https://github.com/hsyen78444/Pickify"
  }
] as const;

export const stats = [
  { value: "3.53", label: "Current CGPA" },
  { value: "2", label: "Internships completed" },
  { value: "3+", label: "Portfolio projects" },
  { value: "2", label: "Countries studied or worked in" }
] as const;

export const journey = [
  {
    place: "Kuala Lumpur",
    label: "Base",
    description:
      "Studying software engineering at Universiti Malaya and building most of my projects here."
  },
  {
    place: "Chengdu",
    label: "Internship",
    description:
      "Spent 4 months working on QML UI and UX for a cross-platform messaging product."
  },
  {
    place: "Montreal",
    label: "Exchange",
    description:
      "McGill exchange semester focused on software engineering and concurrent computing."
  }
] as const;

export const personalNotes = [
  {
    title: "What I like building",
    description:
      "Systems with real workflows: booking flows, management panels, internal tools, and backend services."
  },
  {
    title: "How I work",
    description:
      "I like owning features end to end, from API design and database logic to UI polish and debugging."
  },
  {
    title: "What I want next",
    description:
      "A team where I can keep growing as a backend-leaning product engineer and ship useful software."
  }
] as const;

export const profileWithStats = {
  ...profile,
  stats
};
