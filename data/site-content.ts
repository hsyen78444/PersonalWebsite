export const profile = {
  name: "Yen Hua Shen",
  tagline: "CS student | Full-stack developer | Problem solver",
  summary:
    "I am a computer science student who enjoys building polished web apps, solving practical problems with code, and learning how software systems work end to end.",
  about:
    "I enjoy building products that balance solid engineering with clean user experience. My recent work includes full-stack class projects, frontend-focused portfolio experiments, and backend systems built for speed and reliability.",
  education:
    "B.Sc. in Computer Science (Software Engineering), University of Malaya. Relevant coursework: Data Structures, Algorithms, Databases, Operating Systems, and Human-Computer Interaction.",
  interests:
    "Outside coursework, I like exploring latest and trending technologies, and building small projects to learn new frameworks and tools. I also enjoy reading about software design patterns, system architecture, and best practices in engineering.",
  email: "yhuashen@gmail.com",
  github: "https://github.com/hsyen78444",
  linkedin: "https://www.linkedin.com/in/yourusername",
  currentFocus: "Interactive web apps and backend systems",
  focusDescription:
    "Right now I am interested in building fast full-stack products and sharpening my system design fundamentals before my next internship cycle.",
  contactNote:
    "I am currently open to internships, research opportunities, and collaborative student projects."
} as const;

export const skillGroups = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "VueJS", "Python", "Java", "SQL"]
  },
  {
    title: "Frameworks",
    items: ["Next.js", "React", "Node.js", "Express", "Tailwind CSS", "Spring Boot"]
  },
  {
    title: "Tools",
    items: ["Git", "Postman", "Figma", "Vercel", "PostgreSQL", "MongoDB"]
  }
] as const;

export const experiences = [
  {
    role: "Software Engineering Intern",
    org: "Web.Plus",
    period: "Jan 2026 - Mar 2026",
    summary:
      "Full-stack intern for a domain registration platform, contributing to both frontend and backend features, improving user experience, and collaborating with cross-functional teams."
  },
  {
    role: "UI Developer Intern",
    org: "WuXiMenTu Technology",
    period: "Jul 2024 - Sep 2024",
    summary:
      "QML developer for a messaging app, UI improvements, and cross-team collaboration to enhance user experience and performance."
  }
] as const;

export const projects = [
  {
    title: "VisionSort",
    type: "ML Experiment",
    description:
      "A computer vision prototype that classifies waste items to support recycling education, packaged with a clear and simple web interface.",
    stack: ["Python", "FastAPI", "TensorFlow", "Docker"],
    codeLink: "https://github.com/yourusername/visionsort"
  }
] as const;

export const stats = [
  { value: "5+", label: "Projects built" },
  { value: "2", label: "Industries" },
  { value: "100%", label: "Curiosity driven" }
] as const;

export const profileWithStats = {
  ...profile,
  stats
};

