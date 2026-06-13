export interface CourseSkill {
  id: string
  name: string
  description: string
  icon: string
}

export const diplomaCourseSkills: Record<string, CourseSkill[]> = {
  "stress-management": [
    { id: "sm-1", name: "Stress Reduction", description: "Advanced techniques to manage stress effectively", icon: "smile" },
    { id: "sm-2", name: "Emotional Intelligence", description: "Master emotional awareness and control", icon: "heart" },
    { id: "sm-3", name: "Mindfulness", description: "Practice meditation and present moment awareness", icon: "brain" },
    { id: "sm-4", name: "Wellness", description: "Implement workplace wellness strategies", icon: "activity" },
    { id: "sm-5", name: "Resilience", description: "Build mental toughness and recovery skills", icon: "shield" }
  ],
  "leadership-excellence": [
    { id: "le-1", name: "Team Leadership", description: "Lead and inspire high-performance teams", icon: "users" },
    { id: "le-2", name: "Emotional Intelligence", description: "Manage emotions in leadership", icon: "heart-handshake" },
    { id: "le-3", name: "Conflict Resolution", description: "Navigate and resolve disputes", icon: "zap" },
    { id: "le-4", name: "Change Management", description: "Guide organizations through transformation", icon: "trending-up" },
    { id: "le-5", name: "Decision Making", description: "Make strategic and ethical decisions", icon: "brain" }
  ],
  "advanced-psychology": [
    { id: "ap-1", name: "Behavioral Science", description: "Understand human behavior patterns", icon: "book" },
    { id: "ap-2", name: "Therapy Techniques", description: "Apply evidence-based therapeutic methods", icon: "heart" },
    { id: "ap-3", name: "Human Motivation", description: "Master behavioral motivation principles", icon: "zap" },
    { id: "ap-4", name: "Neuroscience", description: "Explore brain science and learning", icon: "cpu" },
    { id: "ap-5", name: "Assessment", description: "Conduct psychological evaluations", icon: "clipboard" }
  ],
  "business-management": [
    { id: "bm-1", name: "Strategic Planning", description: "Create winning business strategies", icon: "target" },
    { id: "bm-2", name: "Financial Analysis", description: "Master financial management", icon: "trending-up" },
    { id: "bm-3", name: "Operations", description: "Optimize business operations", icon: "cog" },
    { id: "bm-4", name: "HR Management", description: "Build effective human resources", icon: "users" },
    { id: "bm-5", name: "Innovation", description: "Drive entrepreneurial innovation", icon: "lightbulb" }
  ],
  "digital-marketing-pro": [
    { id: "dm-1", name: "SEO & SEM", description: "Master search engine strategies", icon: "search" },
    { id: "dm-2", name: "Social Media", description: "Build powerful social presence", icon: "share-2" },
    { id: "dm-3", name: "Content Strategy", description: "Create compelling content", icon: "edit" },
    { id: "dm-4", name: "Email Marketing", description: "Drive conversions with email", icon: "mail" },
    { id: "dm-5", name: "Analytics", description: "Track and optimize campaigns", icon: "bar-chart" }
  ],
  "web-development-diploma": [
    { id: "wd-1", name: "Full Stack", description: "Build complete web applications", icon: "layers" },
    { id: "wd-2", name: "Frontend", description: "Create stunning user interfaces", icon: "monitor" },
    { id: "wd-3", name: "Backend", description: "Develop robust server systems", icon: "server" },
    { id: "wd-4", name: "Databases", description: "Design and manage databases", icon: "database" },
    { id: "wd-5", name: "Security", description: "Implement web security best practices", icon: "lock" }
  ],
  "data-science-diploma": [
    { id: "ds-1", name: "Statistics", description: "Master statistical analysis", icon: "activity" },
    { id: "ds-2", name: "ML Algorithms", description: "Build machine learning models", icon: "cpu" },
    { id: "ds-3", name: "Visualization", description: "Create powerful data visuals", icon: "bar-chart-2" },
    { id: "ds-4", name: "Big Data", description: "Process massive datasets", icon: "database" },
    { id: "ds-5", name: "Prediction", description: "Develop predictive models", icon: "crystal-clear" }
  ],
  "cloud-computing-diploma": [
    { id: "cc-1", name: "Cloud Architecture", description: "Design cloud infrastructure", icon: "cloud" },
    { id: "cc-2", name: "Containerization", description: "Master Docker and containers", icon: "box" },
    { id: "cc-3", name: "Microservices", description: "Build microservices architecture", icon: "layers" },
    { id: "cc-4", name: "Security", description: "Ensure cloud security", icon: "lock" },
    { id: "cc-5", name: "DevOps", description: "Implement CI/CD pipelines", icon: "git-branch" }
  ],
  "financial-planning-diploma": [
    { id: "fp-1", name: "Investments", description: "Build investment portfolios", icon: "trending-up" },
    { id: "fp-2", name: "Tax Planning", description: "Optimize tax strategies", icon: "calculator" },
    { id: "fp-3", name: "Retirement", description: "Plan comprehensive retirement", icon: "clock" },
    { id: "fp-4", name: "Risk Management", description: "Assess and manage risks", icon: "alert-triangle" },
    { id: "fp-5", name: "Wealth Building", description: "Create wealth strategies", icon: "award" }
  ],
  "public-speaking-diploma": [
    { id: "ps-1", name: "Presentation", description: "Design and deliver presentations", icon: "presentation" },
    { id: "ps-2", name: "Engagement", description: "Captivate audiences", icon: "zap" },
    { id: "ps-3", name: "Persuasion", description: "Master persuasive communication", icon: "mic" },
    { id: "ps-4", name: "Confidence", description: "Build speaking confidence", icon: "star" },
    { id: "ps-5", name: "Crisis Communication", description: "Handle difficult situations", icon: "alert-circle" }
  ]
};

export function getDiplomaSkills(courseId: string): CourseSkill[] {
  // Map various course names to skills
  const skillsKey = courseId.toLowerCase().replace(/\s+/g, "-");
  
  // Check exact match first
  if (diplomaCourseSkills[skillsKey]) {
    return diplomaCourseSkills[skillsKey];
  }

  // Check for partial matches
  const matchedKey = Object.keys(diplomaCourseSkills).find(key => 
    skillsKey.includes(key) || key.includes(skillsKey)
  );

  if (matchedKey) {
    return diplomaCourseSkills[matchedKey];
  }

  // Default skills for any diploma course
  return [
    { id: "def-1", name: "Professional Expertise", description: "Develop specialized knowledge in your field", icon: "star" },
    { id: "def-2", name: "Critical Thinking", description: "Analyze and solve complex problems", icon: "brain" },
    { id: "def-3", name: "Communication", description: "Articulate ideas clearly and effectively", icon: "mic" },
    { id: "def-4", name: "Teamwork", description: "Collaborate effectively with others", icon: "users" },
    { id: "def-5", name: "Leadership", description: "Lead with integrity and vision", icon: "crown" }
  ];
}

