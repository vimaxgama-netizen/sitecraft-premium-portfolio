import danielProfile from "./assets/daniel-profile.png";
import projectAwareness from "./assets/project-awareness.png";
import projectGrowth from "./assets/project-growth.png";
import projectImage4 from "./assets/project-image4.png";
import projectStrategy from "./assets/project-strategy.png";
import certificate1 from "./assets/certificate1.png";
import certificate2 from "./assets/certificate2.png";
import certificate3 from "./assets/certificate3.png";

// =====================================================
// THEME PRESETS
// =====================================================

export const themes = {
  obsidian: {
    background: "#f3f1eb",
    text: "#11110f",
    muted: "#77746d",
    accent: "#11110f",
    darkSection: "#11110f",
    line: "#d6d2c9",
    card: "#ebe8df",
  },

  midnight: {
    background: "#eef1f5",
    text: "#101820",
    muted: "#68727d",
    accent: "#101820",
    darkSection: "#101820",
    line: "#d1d7dd",
    card: "#e4e8ed",
  },

  forest: {
    background: "#f0f2ed",
    text: "#182019",
    muted: "#6d756c",
    accent: "#182019",
    darkSection: "#182019",
    line: "#d2d7cf",
    card: "#e5e9e2",
  },

  burgundy: {
    background: "#f4efed",
    text: "#241618",
    muted: "#796b6d",
    accent: "#241618",
    darkSection: "#241618",
    line: "#d9cecf",
    card: "#ebe3e3",
  },

  cobalt: {
    background: "#eef1f5",
    text: "#101a2b",
    muted: "#687181",
    accent: "#101a2b",
    darkSection: "#101a2b",
    line: "#d0d6df",
    card: "#e3e8ef",
  },
};


// =====================================================
// PERSONAL INFORMATION
// =====================================================

export const personal = {
  name: "Daniel Mwale",

  firstName: "Daniel",

  title: "Digital Marketing Specialist",

  location: "Blantyre, Malawi",

  availability: "Available for opportunities",

  email: "daniel@example.com",

  phone: "+265 999 000 000",

  photo: danielProfile,

  headline: {
    lineOne: "Digital ideas",
    emphasis: "that",
    lineTwo: "create impact.",
  },

  introduction:
    "I help ideas, brands, and businesses communicate clearly through digital marketing, creative content, and thoughtful online experiences.",

  about: [
    "I am a digital marketing specialist with an interest in building meaningful digital experiences and helping ideas reach the right people.",

    "My approach combines creativity, communication, technology, and practical problem solving to turn ideas into work that is clear, useful, and engaging.",
  ],

  cvUrl: "#",
};


// =====================================================
// SOCIAL LINKS
// =====================================================

export const socialLinks = {
  linkedin: "#",
  facebook: "#",
  instagram: "#",
  github: "#",
  x: "#",
  whatsapp: "#",
};


// =====================================================
// EXPERIENCE
// =====================================================

export const experience = [
  {
    period: "2025 — Present",

    role: "Digital Marketing Specialist",

    company: "Independent / Freelance",

    description:
      "Working on digital marketing, content, online presence, and creative digital projects for individuals and businesses.",

    skills: [
      "Digital Marketing",
      "Content Strategy",
      "Social Media",
    ],
  },

  {
    period: "2024 — 2025",

    role: "ICT & Technical Manager",

    company: "Flames Of Fire International Church",

    description:
      "Supported digital communication, social media, livestreaming, technical operations, and technology-related activities.",

    skills: [
      "ICT Support",
      "Social Media",
      "Livestreaming",
      "Technical Support",
    ],
  },
];


// =====================================================
// EXPERTISE
// =====================================================

export const skills = [
  {
    number: "01",

    title: "Digital Marketing",

    category: "STRATEGY",

    description:
      "Developing digital marketing ideas and strategies that help brands communicate effectively and reach their audiences.",
  },

  {
    number: "02",

    title: "Social Media",

    category: "CONTENT",

    description:
      "Creating and managing social media content designed to build attention, engagement, and a consistent online presence.",
  },

  {
    number: "03",

    title: "Content Creation",

    category: "CREATIVE",

    description:
      "Turning ideas into clear, engaging visual and written content for digital platforms and campaigns.",
  },

  {
    number: "04",

    title: "Web Design",

    category: "DIGITAL",

    description:
      "Creating clean and practical web experiences that present information professionally and make it easy to explore.",
  },

  {
    number: "05",

    title: "ICT & Technical Support",

    category: "TECHNICAL",

    description:
      "Providing practical technology and technical support with a focus on reliable digital operations.",
  },
];


// =====================================================
// CERTIFICATES / CREDENTIALS
// =====================================================

export const certificates = [
  {
    number: "01",
    title: "Transport & Logistics Management",
    issuer: "UNICAF",
    year: "2026",
    type: "CERTIFICATE",
    file: certificate1,
    credentialId: "",
    verificationUrl: "",
  },
  {
    number: "02",
    title: "Digital Marketing",
    issuer: "Professional Certificate",
    year: "2025",
    type: "CERTIFICATE",
    file: certificate2,
    credentialId: "",
    verificationUrl: "",
  },
  {
    number: "03",
    title: "Professional Development",
    issuer: "Professional Certificate",
    year: "2025",
    type: "CERTIFICATE",
    file: certificate3,
    credentialId: "",
    verificationUrl: "",
  },
];


// =====================================================
// SELECTED PROJECTS
// =====================================================

export const projects = [
  {
    number: "01",

    year: "2026",

    title: "Digital Awareness Campaign",

    category: "Digital Marketing",

    description:
      "A digital campaign project focused on communicating ideas clearly, creating awareness, and building an engaging online presence.",

    tools: [
      "Digital Marketing",
      "Content Strategy",
      "Social Media",
    ],

    image: projectAwareness,

    media: [
      {
        type: "image",
        src: projectAwareness,
        alt: "Digital awareness campaign",
      },
    ],

    link: "",
  },

  {
    number: "02",

    year: "2026",

    title: "Growth Campaign",

    category: "Digital Strategy",

    description:
      "A campaign concept focused on digital growth, audience engagement, and creating a stronger online presence.",

    tools: [
      "Digital Strategy",
      "Social Media",
      "Content",
    ],

    image: projectGrowth,

    media: [
      {
        type: "image",
        src: projectGrowth,
        alt: "Growth campaign project",
      },
    ],

    link: "",
  },

  {
    number: "03",

    year: "2026",

    title: "Creative Digital Project",

    category: "Content Creation",

    description:
      "A creative digital project demonstrating visual communication, content development, and digital presentation.",

    tools: [
      "Creative Direction",
      "Content Creation",
      "Digital Design",
    ],

    image: projectImage4,

    media: [
      {
        type: "image",
        src: projectImage4,
        alt: "Creative digital project",
      },
    ],

    link: "",
  },

  {
    number: "04",

    year: "2026",

    title: "Digital Strategy",

    category: "Digital Marketing",

    description:
      "A strategy-focused project built around communication, digital positioning, and creating a more effective online presence.",

    tools: [
      "Digital Marketing",
      "Strategy",
      "Content",
    ],

    image: projectStrategy,

    media: [
      {
        type: "image",
        src: projectStrategy,
        alt: "Digital strategy project",
      },
    ],

    link: "",
  },

  {
    number: "05",

    year: "2026",

    title: "Digital Experience",

    category: "Creative Digital Work",

    description:
      "A digital project demonstrating the combination of creative thinking, communication, and practical digital execution.",

    tools: [
      "Digital Creative",
      "Content",
      "Strategy",
    ],

    image: projectImage4,

    media: [
      {
        type: "image",
        src: projectImage4,
        alt: "Digital experience project",
      },
    ],

    link: "",
  },
];


// =====================================================
// SITE SETTINGS
// =====================================================

export const settings = {
  showAbout: true,

  showExperience: true,

  showSkills: true,

  showCertificates: true,

  showProjects: true,

  showContact: true,

  showLinkedin: true,

  showFacebook: true,

  showInstagram: true,

  showGithub: true,

  showX: true,

  showWhatsapp: true,
};


// =====================================================
// SITECRAFT
// =====================================================

export const siteCraft = {
  enabled: true,

  text: "Built with SiteCraft",
};


// =====================================================
// DEFAULT EXPORT
// =====================================================

const portfolioData = {
  personal,

  theme: themes.forest,

  socialLinks,

  experience,

  skills,

  certificates,

  projects,

  settings,

  siteCraft,
};

export default portfolioData;