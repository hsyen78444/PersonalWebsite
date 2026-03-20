export const profile = {
  name: "Yen Hua Shen",
  tagline: "CS student | Full-stack developer | Spring Boot and modern web apps",
  summary:
    "CS student at Universiti Malaya with internship experience in full-stack and UI development.",
  about:
    "I build full-stack apps with Spring Boot, Vue, React, and database-backed systems.",
  education:
    "B.Comp.Sc. in Software Engineering at Universiti Malaya, CGPA 3.53. Exchange semester at McGill University.",
  interests:
    "Interested in backend systems, product engineering, and AI-powered tools.",
  email: "yhuashen@gmail.com",
  github: "https://github.com/hsyen78444",
  linkedin: "https://www.linkedin.com/in/yen-hua-shen-595472280/",
  resumeUrl: "https://drive.google.com/file/d/1qIlaMBNVJzk6Zokv7UwQczmaXB_07NpX/view?usp=drive_link",
  currentFocus: "Full-stack systems, backend services, and polished product UI",
  focusDescription:
    "Currently focused on production-style web apps with strong backend fundamentals.",
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
    codeLink: "https://github.com/hsyen78444"
  },
  {
    title: "Pickify",
    type: "Recommendation Platform",
    description:
      "Media recommendation app with search, ratings, comments, and team-built API integration.",
    stack: ["Node.js", "Express", "MongoDB", "JavaScript", "Postman"],
    codeLink: "https://github.com/hsyen78444"
  }
] as const;

export const stats = [
  { value: "3.53", label: "Current CGPA" },
  { value: "2", label: "Internships completed" },
  { value: "3+", label: "Portfolio projects" },
  { value: "2", label: "Countries studied or worked in" }
] as const;

export const profileWithStats = {
  ...profile,
  stats
};
