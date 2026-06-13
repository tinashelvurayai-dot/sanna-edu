// Course-specific skills for all courses in the platform
// Each course has 5 tailored professional skills

export interface CourseSkill {
  id: string
  name: string
  description: string
}

// Comprehensive skills for all courses - tailored to each specific course
const courseSkillsMap: Record<string, CourseSkill[]> = {
  // A Courses
  "accounting": [
    { id: "acc-1", name: "Financial Statement Analysis", description: "Interpret and analyze balance sheets, income statements, and cash flow statements" },
    { id: "acc-2", name: "Double-Entry Bookkeeping", description: "Master the foundational system of recording financial transactions" },
    { id: "acc-3", name: "Tax Preparation Fundamentals", description: "Understand tax regulations and prepare accurate tax documents" },
    { id: "acc-4", name: "Audit Trail Management", description: "Maintain comprehensive records for financial accountability" },
    { id: "acc-5", name: "Regulatory Compliance", description: "Navigate GAAP, IFRS, and industry-specific accounting standards" },
  ],
  "artificial-intelligence": [
    { id: "ai-1", name: "Machine Learning Fundamentals", description: "Build and train predictive models using supervised and unsupervised learning" },
    { id: "ai-2", name: "Neural Network Architecture", description: "Design and implement deep learning systems for complex problem-solving" },
    { id: "ai-3", name: "Natural Language Processing", description: "Develop systems that understand and generate human language" },
    { id: "ai-4", name: "Computer Vision", description: "Create AI systems that interpret and analyze visual information" },
    { id: "ai-5", name: "AI Ethics & Governance", description: "Implement responsible AI practices and mitigate algorithmic bias" },
  ],
  "agriculture": [
    { id: "agr-1", name: "Sustainable Farming Practices", description: "Implement eco-friendly agricultural methods for long-term productivity" },
    { id: "agr-2", name: "Crop Management Systems", description: "Optimize planting, irrigation, and harvesting cycles for maximum yield" },
    { id: "agr-3", name: "Soil Health Analysis", description: "Assess and improve soil quality through scientific testing and amendments" },
    { id: "agr-4", name: "Agricultural Technology", description: "Leverage modern farming equipment and precision agriculture tools" },
    { id: "agr-5", name: "Supply Chain Integration", description: "Connect farm production with markets and distribution networks" },
  ],
  "art-therapy": [
    { id: "at-1", name: "Therapeutic Art Facilitation", description: "Guide clients through creative processes for emotional healing" },
    { id: "at-2", name: "Psychological Assessment", description: "Interpret artwork to understand client emotional states and progress" },
    { id: "at-3", name: "Trauma-Informed Practice", description: "Apply art therapy techniques for trauma recovery and processing" },
    { id: "at-4", name: "Group Therapy Dynamics", description: "Facilitate collaborative art sessions for community healing" },
    { id: "at-5", name: "Creative Materials Expertise", description: "Select appropriate mediums and techniques for therapeutic goals" },
  ],
  "android-development": [
    { id: "and-1", name: "Kotlin Programming", description: "Write clean, efficient Android applications using modern Kotlin syntax" },
    { id: "and-2", name: "UI/UX Design Patterns", description: "Create intuitive mobile interfaces following Material Design guidelines" },
    { id: "and-3", name: "API Integration", description: "Connect Android apps with RESTful services and backend systems" },
    { id: "and-4", name: "App Performance Optimization", description: "Improve app speed, battery efficiency, and memory management" },
    { id: "and-5", name: "Play Store Deployment", description: "Navigate app publishing, updates, and monetization strategies" },
  ],
  "aviation-safety": [
    { id: "av-1", name: "Safety Management Systems", description: "Implement comprehensive aviation safety protocols and procedures" },
    { id: "av-2", name: "Risk Assessment", description: "Identify, analyze, and mitigate aviation-related hazards" },
    { id: "av-3", name: "Regulatory Compliance", description: "Navigate FAA, EASA, and international aviation regulations" },
    { id: "av-4", name: "Incident Investigation", description: "Conduct thorough investigations to prevent future occurrences" },
    { id: "av-5", name: "Emergency Response Planning", description: "Develop and execute emergency procedures for aviation scenarios" },
  ],
  
  // B Courses
  "business-management": [
    { id: "bm-1", name: "Strategic Planning", description: "Develop long-term business strategies aligned with organizational goals" },
    { id: "bm-2", name: "Team Leadership", description: "Inspire, motivate, and guide teams toward high performance" },
    { id: "bm-3", name: "Financial Management", description: "Oversee budgets, forecasts, and financial decision-making" },
    { id: "bm-4", name: "Operations Optimization", description: "Streamline business processes for efficiency and cost reduction" },
    { id: "bm-5", name: "Change Management", description: "Lead organizational transitions with minimal disruption" },
  ],
  "blockchain": [
    { id: "bc-1", name: "Smart Contract Development", description: "Create self-executing contracts on blockchain platforms" },
    { id: "bc-2", name: "Cryptographic Security", description: "Implement encryption and secure transaction protocols" },
    { id: "bc-3", name: "Decentralized Application Design", description: "Build dApps using Ethereum, Solana, or other platforms" },
    { id: "bc-4", name: "Tokenomics", description: "Design sustainable token economies and incentive structures" },
    { id: "bc-5", name: "Blockchain Integration", description: "Connect blockchain solutions with existing enterprise systems" },
  ],
  "biotechnology": [
    { id: "bio-1", name: "Genetic Engineering", description: "Apply gene editing techniques for research and development" },
    { id: "bio-2", name: "Laboratory Techniques", description: "Perform advanced biotech procedures with precision and safety" },
    { id: "bio-3", name: "Bioinformatics Analysis", description: "Use computational tools to analyze biological data" },
    { id: "bio-4", name: "Regulatory Affairs", description: "Navigate FDA and international biotech regulations" },
    { id: "bio-5", name: "Research Documentation", description: "Maintain accurate records for reproducible scientific research" },
  ],
  "bookkeeping": [
    { id: "bk-1", name: "Transaction Recording", description: "Accurately document all financial transactions in accounting systems" },
    { id: "bk-2", name: "Account Reconciliation", description: "Match and verify financial records across multiple sources" },
    { id: "bk-3", name: "Payroll Processing", description: "Calculate wages, deductions, and maintain compliance with tax laws" },
    { id: "bk-4", name: "Accounts Payable/Receivable", description: "Manage vendor payments and customer invoicing efficiently" },
    { id: "bk-5", name: "Financial Software Proficiency", description: "Master QuickBooks, Xero, and other accounting platforms" },
  ],
  "brand-management": [
    { id: "brm-1", name: "Brand Strategy Development", description: "Create compelling brand positioning and messaging frameworks" },
    { id: "brm-2", name: "Market Research Analysis", description: "Gather and interpret consumer insights for brand decisions" },
    { id: "brm-3", name: "Visual Identity Management", description: "Maintain brand consistency across all touchpoints" },
    { id: "brm-4", name: "Brand Value Measurement", description: "Track brand equity and return on branding investments" },
    { id: "brm-5", name: "Crisis Communication", description: "Protect and restore brand reputation during challenges" },
  ],
  "behavioral-psychology": [
    { id: "bp-1", name: "Behavioral Assessment", description: "Evaluate human behavior patterns using scientific methodologies" },
    { id: "bp-2", name: "Cognitive-Behavioral Techniques", description: "Apply CBT principles to modify problematic behaviors" },
    { id: "bp-3", name: "Research Design", description: "Develop rigorous psychological research studies" },
    { id: "bp-4", name: "Data Analysis & Interpretation", description: "Use statistical methods to analyze behavioral data" },
    { id: "bp-5", name: "Ethical Practice", description: "Adhere to APA guidelines and maintain client confidentiality" },
  ],

  // C Courses
  "cybersecurity": [
    { id: "cs-1", name: "Threat Detection & Response", description: "Identify and neutralize cyber threats in real-time" },
    { id: "cs-2", name: "Network Security Architecture", description: "Design secure network infrastructures with defense in depth" },
    { id: "cs-3", name: "Penetration Testing", description: "Conduct ethical hacking to identify system vulnerabilities" },
    { id: "cs-4", name: "Incident Response", description: "Develop and execute cybersecurity incident response plans" },
    { id: "cs-5", name: "Security Compliance", description: "Implement SOC 2, ISO 27001, and other security frameworks" },
  ],
  "culinary-arts": [
    { id: "ca-1", name: "Classical Cooking Techniques", description: "Master foundational culinary methods and sauce preparations" },
    { id: "ca-2", name: "Menu Development", description: "Create balanced, appealing, and cost-effective menus" },
    { id: "ca-3", name: "Kitchen Management", description: "Oversee kitchen operations, staff, and inventory efficiently" },
    { id: "ca-4", name: "Food Safety & Sanitation", description: "Maintain HACCP standards and health code compliance" },
    { id: "ca-5", name: "Culinary Presentation", description: "Plate dishes with artistic flair and visual appeal" },
  ],
  "counseling": [
    { id: "co-1", name: "Active Listening", description: "Practice empathetic listening to understand client needs deeply" },
    { id: "co-2", name: "Therapeutic Relationship Building", description: "Establish trust and rapport with diverse client populations" },
    { id: "co-3", name: "Crisis Intervention", description: "Provide immediate support during mental health emergencies" },
    { id: "co-4", name: "Treatment Planning", description: "Develop personalized counseling strategies and goals" },
    { id: "co-5", name: "Cultural Competency", description: "Deliver inclusive care across cultural and social backgrounds" },
  ],
  "cloud-computing": [
    { id: "cc-1", name: "Cloud Architecture Design", description: "Build scalable, resilient cloud infrastructure on AWS, Azure, or GCP" },
    { id: "cc-2", name: "Container Orchestration", description: "Deploy and manage containerized applications with Kubernetes" },
    { id: "cc-3", name: "DevOps Integration", description: "Implement CI/CD pipelines for automated cloud deployments" },
    { id: "cc-4", name: "Cloud Security", description: "Secure cloud environments with IAM, encryption, and monitoring" },
    { id: "cc-5", name: "Cost Optimization", description: "Manage cloud spending through efficient resource allocation" },
  ],
  "child-development": [
    { id: "cd-1", name: "Developmental Psychology", description: "Understand cognitive, emotional, and physical child development stages" },
    { id: "cd-2", name: "Early Learning Facilitation", description: "Design age-appropriate educational activities and curricula" },
    { id: "cd-3", name: "Behavioral Guidance", description: "Apply positive discipline techniques for healthy development" },
    { id: "cd-4", name: "Parent Communication", description: "Partner effectively with families to support child growth" },
    { id: "cd-5", name: "Special Needs Support", description: "Adapt approaches for children with developmental differences" },
  ],
  "carpentry": [
    { id: "carp-1", name: "Woodworking Techniques", description: "Master cutting, joining, and finishing methods for quality craftsmanship" },
    { id: "carp-2", name: "Blueprint Reading", description: "Interpret architectural and construction drawings accurately" },
    { id: "carp-3", name: "Power Tool Proficiency", description: "Safely operate saws, drills, and specialized carpentry equipment" },
    { id: "carp-4", name: "Material Selection", description: "Choose appropriate woods and materials for specific applications" },
    { id: "carp-5", name: "Project Estimation", description: "Calculate materials, labor, and costs for carpentry projects" },
  ],
  "corporate-law": [
    { id: "cl-1", name: "Contract Law", description: "Draft, review, and negotiate business contracts and agreements" },
    { id: "cl-2", name: "Corporate Governance", description: "Advise on board structures, fiduciary duties, and compliance" },
    { id: "cl-3", name: "Mergers & Acquisitions", description: "Navigate legal aspects of business combinations and transactions" },
    { id: "cl-4", name: "Regulatory Compliance", description: "Ensure adherence to securities laws and industry regulations" },
    { id: "cl-5", name: "Dispute Resolution", description: "Manage corporate litigation and alternative dispute mechanisms" },
  ],
  "climate-change": [
    { id: "clim-1", name: "Climate Science Analysis", description: "Interpret climate data and model projections accurately" },
    { id: "clim-2", name: "Sustainability Planning", description: "Develop organizational strategies to reduce carbon footprints" },
    { id: "clim-3", name: "Environmental Policy", description: "Navigate climate legislation and international agreements" },
    { id: "clim-4", name: "Adaptation Strategies", description: "Design resilience plans for climate-related impacts" },
    { id: "clim-5", name: "Stakeholder Engagement", description: "Communicate climate issues to diverse audiences effectively" },
  ],

  // D Courses
  "digital-marketing": [
    { id: "dm-1", name: "SEO & SEM Strategy", description: "Optimize content for search engines and manage paid campaigns" },
    { id: "dm-2", name: "Social Media Marketing", description: "Build brand presence across Instagram, TikTok, LinkedIn, and more" },
    { id: "dm-3", name: "Content Marketing", description: "Create compelling content that attracts and converts audiences" },
    { id: "dm-4", name: "Analytics & Attribution", description: "Measure campaign performance and ROI using data tools" },
    { id: "dm-5", name: "Email Marketing Automation", description: "Design automated email sequences that nurture leads" },
  ],
  "data-analysis": [
    { id: "da-1", name: "Statistical Analysis", description: "Apply statistical methods to extract insights from data" },
    { id: "da-2", name: "Data Visualization", description: "Create compelling charts and dashboards using Tableau, Power BI" },
    { id: "da-3", name: "SQL & Database Querying", description: "Extract and manipulate data from relational databases" },
    { id: "da-4", name: "Python for Data Science", description: "Use pandas, numpy, and matplotlib for data analysis" },
    { id: "da-5", name: "Business Intelligence Reporting", description: "Transform data into actionable business recommendations" },
  ],

  // E Courses
  "entrepreneurship": [
    { id: "ent-1", name: "Business Model Development", description: "Design viable and scalable business models" },
    { id: "ent-2", name: "Startup Fundraising", description: "Pitch to investors and navigate seed to Series A funding" },
    { id: "ent-3", name: "Market Validation", description: "Test business ideas with lean startup methodologies" },
    { id: "ent-4", name: "Team Building", description: "Recruit and lead founding teams for startup success" },
    { id: "ent-5", name: "Growth Hacking", description: "Implement rapid experimentation for user acquisition" },
  ],
  "event-planning": [
    { id: "ep-1", name: "Event Design & Theming", description: "Create memorable event experiences with cohesive aesthetics" },
    { id: "ep-2", name: "Vendor Management", description: "Coordinate caterers, venues, and service providers effectively" },
    { id: "ep-3", name: "Budget Management", description: "Plan and track event finances for profitability" },
    { id: "ep-4", name: "Timeline Coordination", description: "Develop and execute detailed event schedules" },
    { id: "ep-5", name: "Crisis Management", description: "Handle unexpected issues while maintaining event quality" },
  ],

  // F Courses
  "financial-planning": [
    { id: "fp-1", name: "Investment Portfolio Management", description: "Build diversified portfolios aligned with client goals" },
    { id: "fp-2", name: "Retirement Planning", description: "Create comprehensive retirement strategies and projections" },
    { id: "fp-3", name: "Tax Optimization", description: "Minimize tax liability through strategic planning" },
    { id: "fp-4", name: "Estate Planning", description: "Advise on wealth transfer and inheritance strategies" },
    { id: "fp-5", name: "Risk Assessment", description: "Evaluate and mitigate financial risks for clients" },
  ],
  "fashion-design": [
    { id: "fd-1", name: "Pattern Making", description: "Create accurate patterns for garment construction" },
    { id: "fd-2", name: "Textile Selection", description: "Choose appropriate fabrics for design concepts" },
    { id: "fd-3", name: "Fashion Illustration", description: "Communicate design ideas through professional sketches" },
    { id: "fd-4", name: "Trend Forecasting", description: "Anticipate and incorporate emerging fashion trends" },
    { id: "fd-5", name: "Collection Development", description: "Create cohesive seasonal fashion collections" },
  ],

  // G Courses
  "graphic-design": [
    { id: "gd-1", name: "Visual Composition", description: "Apply design principles for balanced, impactful layouts" },
    { id: "gd-2", name: "Adobe Creative Suite Mastery", description: "Expert use of Photoshop, Illustrator, and InDesign" },
    { id: "gd-3", name: "Brand Identity Design", description: "Create logos, color systems, and brand guidelines" },
    { id: "gd-4", name: "Typography", description: "Select and pair fonts for effective visual communication" },
    { id: "gd-5", name: "Print & Digital Production", description: "Prepare files for various output formats and mediums" },
  ],
  "game-development": [
    { id: "gdev-1", name: "Game Engine Proficiency", description: "Build games using Unity, Unreal Engine, or Godot" },
    { id: "gdev-2", name: "Programming for Games", description: "Write efficient game logic in C#, C++, or GDScript" },
    { id: "gdev-3", name: "Level Design", description: "Create engaging game environments and progression systems" },
    { id: "gdev-4", name: "Game Physics", description: "Implement realistic physics and collision systems" },
    { id: "gdev-5", name: "Player Experience Design", description: "Craft compelling gameplay loops and user interfaces" },
  ],

  // H Courses
  "human-resources": [
    { id: "hr-1", name: "Talent Acquisition", description: "Design effective recruitment and selection processes" },
    { id: "hr-2", name: "Performance Management", description: "Implement appraisal systems that drive employee growth" },
    { id: "hr-3", name: "Employment Law Compliance", description: "Navigate labor regulations and workplace policies" },
    { id: "hr-4", name: "Compensation & Benefits", description: "Design competitive total rewards packages" },
    { id: "hr-5", name: "Employee Relations", description: "Foster positive workplace culture and resolve conflicts" },
  ],
  "hospitality": [
    { id: "hosp-1", name: "Guest Service Excellence", description: "Deliver exceptional customer experiences consistently" },
    { id: "hosp-2", name: "Front Office Operations", description: "Manage check-ins, reservations, and guest requests" },
    { id: "hosp-3", name: "Revenue Management", description: "Optimize pricing and occupancy for profitability" },
    { id: "hosp-4", name: "Food & Beverage Operations", description: "Oversee dining services and banquet functions" },
    { id: "hosp-5", name: "Housekeeping Management", description: "Maintain property standards and cleanliness protocols" },
  ],

  // I Courses
  "interior-design": [
    { id: "id-1", name: "Space Planning", description: "Optimize room layouts for functionality and flow" },
    { id: "id-2", name: "Color Theory Application", description: "Create harmonious color schemes for interiors" },
    { id: "id-3", name: "CAD & 3D Rendering", description: "Produce professional design drawings and visualizations" },
    { id: "id-4", name: "Material Specification", description: "Select appropriate finishes, fabrics, and furnishings" },
    { id: "id-5", name: "Client Presentation", description: "Communicate design concepts persuasively to clients" },
  ],
  "it-support": [
    { id: "its-1", name: "Troubleshooting Methodology", description: "Diagnose and resolve hardware and software issues systematically" },
    { id: "its-2", name: "Network Administration", description: "Configure and maintain LAN, WAN, and wireless networks" },
    { id: "its-3", name: "Help Desk Management", description: "Provide tier 1-2 support with excellent customer service" },
    { id: "its-4", name: "System Administration", description: "Manage Windows, macOS, and Linux environments" },
    { id: "its-5", name: "Security Best Practices", description: "Implement endpoint protection and security protocols" },
  ],

  // J Courses
  "journalism": [
    { id: "jo-1", name: "Investigative Reporting", description: "Research and uncover stories of public interest" },
    { id: "jo-2", name: "News Writing", description: "Craft clear, accurate, and engaging news articles" },
    { id: "jo-3", name: "Multimedia Storytelling", description: "Produce content across text, video, and audio formats" },
    { id: "jo-4", name: "Source Verification", description: "Confirm facts and protect source confidentiality" },
    { id: "jo-5", name: "Media Ethics", description: "Navigate ethical dilemmas in modern journalism" },
  ],

  // K Courses
  "kindergarten-teaching": [
    { id: "kt-1", name: "Early Literacy Development", description: "Foster reading readiness through phonics and storytelling" },
    { id: "kt-2", name: "Play-Based Learning", description: "Design educational activities through structured play" },
    { id: "kt-3", name: "Social-Emotional Learning", description: "Support children's emotional development and social skills" },
    { id: "kt-4", name: "Classroom Management", description: "Create positive, structured learning environments" },
    { id: "kt-5", name: "Assessment & Documentation", description: "Track developmental progress and communicate with parents" },
  ],

  // L Courses
  "leadership": [
    { id: "ld-1", name: "Visionary Leadership", description: "Articulate compelling visions that inspire teams" },
    { id: "ld-2", name: "Emotional Intelligence", description: "Manage emotions and build strong relationships" },
    { id: "ld-3", name: "Decision-Making", description: "Make strategic decisions under uncertainty" },
    { id: "ld-4", name: "Conflict Resolution", description: "Navigate and resolve workplace disputes effectively" },
    { id: "ld-5", name: "Coaching & Mentoring", description: "Develop team members through guidance and feedback" },
  ],
  "logistics": [
    { id: "log-1", name: "Supply Chain Optimization", description: "Streamline logistics networks for efficiency and cost savings" },
    { id: "log-2", name: "Inventory Management", description: "Balance stock levels to meet demand without excess" },
    { id: "log-3", name: "Transportation Planning", description: "Coordinate shipping routes and carrier relationships" },
    { id: "log-4", name: "Warehouse Operations", description: "Manage receiving, storage, and distribution processes" },
    { id: "log-5", name: "Logistics Technology", description: "Implement WMS, TMS, and tracking systems effectively" },
  ],

  // M Courses
  "marketing": [
    { id: "mkt-1", name: "Market Research", description: "Gather and analyze consumer insights for strategic decisions" },
    { id: "mkt-2", name: "Campaign Development", description: "Plan and execute integrated marketing campaigns" },
    { id: "mkt-3", name: "Brand Positioning", description: "Define unique value propositions and market positioning" },
    { id: "mkt-4", name: "Customer Segmentation", description: "Identify and target high-value customer segments" },
    { id: "mkt-5", name: "Marketing Analytics", description: "Measure campaign effectiveness and optimize ROI" },
  ],
  "mental-health": [
    { id: "mh-1", name: "Psychological Assessment", description: "Conduct comprehensive mental health evaluations" },
    { id: "mh-2", name: "Evidence-Based Interventions", description: "Apply proven therapeutic techniques for client care" },
    { id: "mh-3", name: "Crisis Intervention", description: "Provide immediate support during mental health emergencies" },
    { id: "mh-4", name: "Treatment Planning", description: "Develop personalized care plans with measurable goals" },
    { id: "mh-5", name: "Self-Care Strategies", description: "Teach clients coping mechanisms and wellness practices" },
  ],

  // N Courses
  "nursing": [
    { id: "nur-1", name: "Patient Assessment", description: "Conduct comprehensive health assessments and vital signs monitoring" },
    { id: "nur-2", name: "Clinical Skills", description: "Perform nursing procedures with precision and care" },
    { id: "nur-3", name: "Medication Administration", description: "Safely prepare and administer prescribed medications" },
    { id: "nur-4", name: "Patient Education", description: "Teach patients about conditions, treatments, and self-care" },
    { id: "nur-5", name: "Documentation & Charting", description: "Maintain accurate, compliant medical records" },
  ],
  "nutrition": [
    { id: "nut-1", name: "Nutritional Assessment", description: "Evaluate dietary intake and nutritional status" },
    { id: "nut-2", name: "Meal Planning", description: "Design balanced meal plans for diverse needs" },
    { id: "nut-3", name: "Clinical Nutrition", description: "Apply nutrition therapy for medical conditions" },
    { id: "nut-4", name: "Behavior Change Coaching", description: "Help clients adopt sustainable healthy eating habits" },
    { id: "nut-5", name: "Food Science Fundamentals", description: "Understand nutrient composition and food interactions" },
  ],

  // O Courses
  "organic-farming": [
    { id: "of-1", name: "Organic Certification", description: "Navigate organic certification requirements and standards" },
    { id: "of-2", name: "Soil Biology", description: "Enhance soil health through natural amendments and composting" },
    { id: "of-3", name: "Natural Pest Management", description: "Control pests without synthetic chemicals" },
    { id: "of-4", name: "Crop Rotation Planning", description: "Design rotation systems for soil health and yield" },
    { id: "of-5", name: "Organic Market Development", description: "Connect with organic buyers and premium markets" },
  ],

  // P Courses
  "project-management": [
    { id: "pm-1", name: "Project Planning", description: "Develop comprehensive project plans with clear milestones" },
    { id: "pm-2", name: "Risk Management", description: "Identify, assess, and mitigate project risks proactively" },
    { id: "pm-3", name: "Stakeholder Communication", description: "Keep stakeholders informed and engaged throughout projects" },
    { id: "pm-4", name: "Agile Methodologies", description: "Apply Scrum, Kanban, and other agile frameworks" },
    { id: "pm-5", name: "Budget & Resource Management", description: "Allocate resources and control project costs effectively" },
  ],
  "photography": [
    { id: "ph-1", name: "Camera Mastery", description: "Control exposure, focus, and camera settings for any situation" },
    { id: "ph-2", name: "Composition Techniques", description: "Apply visual principles for compelling photographs" },
    { id: "ph-3", name: "Lighting Control", description: "Use natural and artificial light for desired effects" },
    { id: "ph-4", name: "Post-Processing", description: "Edit images professionally using Lightroom and Photoshop" },
    { id: "ph-5", name: "Portfolio Development", description: "Curate and present work for professional opportunities" },
  ],

  // Q Courses
  "quality-assurance": [
    { id: "qa-1", name: "Quality Management Systems", description: "Implement ISO 9001 and other quality frameworks" },
    { id: "qa-2", name: "Process Auditing", description: "Conduct internal audits to verify compliance and improvement" },
    { id: "qa-3", name: "Root Cause Analysis", description: "Investigate defects and implement corrective actions" },
    { id: "qa-4", name: "Statistical Process Control", description: "Use data to monitor and improve process quality" },
    { id: "qa-5", name: "Continuous Improvement", description: "Lead Kaizen initiatives and Six Sigma projects" },
  ],

  // R Courses
  "real-estate": [
    { id: "re-1", name: "Property Valuation", description: "Assess market value using comparable sales and income approaches" },
    { id: "re-2", name: "Transaction Management", description: "Guide clients through buying and selling processes" },
    { id: "re-3", name: "Market Analysis", description: "Analyze local market trends and investment opportunities" },
    { id: "re-4", name: "Negotiation Skills", description: "Represent client interests in complex negotiations" },
    { id: "re-5", name: "Legal Compliance", description: "Navigate real estate laws, contracts, and disclosures" },
  ],
  "renewable-energy": [
    { id: "ren-1", name: "Solar System Design", description: "Size and specify photovoltaic installations" },
    { id: "ren-2", name: "Energy Storage", description: "Integrate battery systems with renewable sources" },
    { id: "ren-3", name: "Grid Integration", description: "Connect renewable systems to utility networks" },
    { id: "ren-4", name: "Project Financing", description: "Structure renewable energy project investments" },
    { id: "ren-5", name: "Environmental Assessment", description: "Evaluate environmental impacts and benefits" },
  ],

  // S Courses
  "social-media-marketing": [
    { id: "smm-1", name: "Platform Strategy", description: "Develop tailored strategies for each social platform" },
    { id: "smm-2", name: "Content Creation", description: "Produce engaging posts, stories, and video content" },
    { id: "smm-3", name: "Community Management", description: "Build and nurture engaged online communities" },
    { id: "smm-4", name: "Paid Social Advertising", description: "Create and optimize social media ad campaigns" },
    { id: "smm-5", name: "Influencer Collaboration", description: "Identify and partner with relevant influencers" },
  ],
  "software-engineering": [
    { id: "se-1", name: "Clean Code Practices", description: "Write maintainable, readable, and efficient code" },
    { id: "se-2", name: "System Design", description: "Architect scalable software systems and APIs" },
    { id: "se-3", name: "Testing & QA", description: "Implement unit, integration, and end-to-end testing" },
    { id: "se-4", name: "Version Control", description: "Manage code with Git and collaborate effectively" },
    { id: "se-5", name: "Agile Development", description: "Work within Scrum teams and agile workflows" },
  ],

  // T Courses
  "teaching": [
    { id: "tch-1", name: "Curriculum Design", description: "Develop engaging lesson plans aligned with standards" },
    { id: "tch-2", name: "Classroom Management", description: "Create positive learning environments with effective discipline" },
    { id: "tch-3", name: "Differentiated Instruction", description: "Adapt teaching for diverse learning needs" },
    { id: "tch-4", name: "Assessment Design", description: "Create fair, meaningful evaluations of student learning" },
    { id: "tch-5", name: "Educational Technology", description: "Integrate digital tools to enhance instruction" },
  ],
  "tourism": [
    { id: "tour-1", name: "Destination Management", description: "Develop and promote tourism destinations sustainably" },
    { id: "tour-2", name: "Travel Planning", description: "Design customized itineraries and travel packages" },
    { id: "tour-3", name: "Cultural Heritage Tourism", description: "Create authentic cultural tourism experiences" },
    { id: "tour-4", name: "Tourism Marketing", description: "Attract visitors through targeted marketing strategies" },
    { id: "tour-5", name: "Sustainable Tourism", description: "Balance tourism growth with environmental protection" },
  ],

  // U Courses
  "ui-ux-design": [
    { id: "ux-1", name: "User Research", description: "Conduct interviews, surveys, and usability testing" },
    { id: "ux-2", name: "Wireframing & Prototyping", description: "Create interactive prototypes using Figma or Sketch" },
    { id: "ux-3", name: "Information Architecture", description: "Organize content for intuitive navigation" },
    { id: "ux-4", name: "Visual Design Systems", description: "Build consistent component libraries and style guides" },
    { id: "ux-5", name: "Accessibility Design", description: "Ensure products are usable by people of all abilities" },
  ],
  "urban-farming": [
    { id: "uf-1", name: "Urban Growing Systems", description: "Implement container, vertical, and rooftop farming" },
    { id: "uf-2", name: "Hydroponics & Aquaponics", description: "Set up soilless growing systems for urban spaces" },
    { id: "uf-3", name: "Space Optimization", description: "Maximize yield in limited urban environments" },
    { id: "uf-4", name: "Community Garden Management", description: "Organize and lead community farming initiatives" },
    { id: "uf-5", name: "Local Food Distribution", description: "Connect urban farms with local markets and restaurants" },
  ],

  // V Courses
  "video-production": [
    { id: "vp-1", name: "Cinematography", description: "Capture compelling visuals with professional camera techniques" },
    { id: "vp-2", name: "Video Editing", description: "Edit footage using Premiere Pro, Final Cut, or DaVinci" },
    { id: "vp-3", name: "Audio Production", description: "Record and mix professional-quality audio" },
    { id: "vp-4", name: "Motion Graphics", description: "Create animations and visual effects for video" },
    { id: "vp-5", name: "Project Management", description: "Coordinate video production from concept to delivery" },
  ],
  "virtual-assistance": [
    { id: "va-1", name: "Administrative Support", description: "Manage calendars, email, and scheduling remotely" },
    { id: "va-2", name: "Communication Skills", description: "Correspond professionally with clients and stakeholders" },
    { id: "va-3", name: "Project Coordination", description: "Track tasks and deadlines across multiple projects" },
    { id: "va-4", name: "Digital Tools Proficiency", description: "Master productivity tools like Asana, Notion, and Slack" },
    { id: "va-5", name: "Client Relationship Management", description: "Build trust and maintain strong working relationships" },
  ],

  // W Courses
  "web-development": [
    { id: "wd-1", name: "Frontend Development", description: "Build responsive UIs with HTML, CSS, and JavaScript" },
    { id: "wd-2", name: "Backend Development", description: "Create server-side applications with Node.js or Python" },
    { id: "wd-3", name: "Database Management", description: "Design and query SQL and NoSQL databases" },
    { id: "wd-4", name: "API Development", description: "Build and consume RESTful and GraphQL APIs" },
    { id: "wd-5", name: "Deployment & DevOps", description: "Deploy applications using cloud platforms and CI/CD" },
  ],
  "welding": [
    { id: "weld-1", name: "MIG/TIG Welding", description: "Perform precision welds using various welding processes" },
    { id: "weld-2", name: "Blueprint Reading", description: "Interpret welding symbols and technical drawings" },
    { id: "weld-3", name: "Material Science", description: "Understand metal properties and weldability" },
    { id: "weld-4", name: "Safety Procedures", description: "Follow OSHA standards and safe welding practices" },
    { id: "weld-5", name: "Quality Inspection", description: "Evaluate weld quality using visual and NDT methods" },
  ],

  // X Courses
  "xray-technology": [
    { id: "xr-1", name: "Radiographic Positioning", description: "Position patients for optimal diagnostic images" },
    { id: "xr-2", name: "Radiation Safety", description: "Minimize radiation exposure for patients and staff" },
    { id: "xr-3", name: "Image Quality Assessment", description: "Evaluate and optimize radiographic images" },
    { id: "xr-4", name: "Equipment Operation", description: "Operate X-ray machines and digital imaging systems" },
    { id: "xr-5", name: "Patient Care", description: "Provide compassionate care during imaging procedures" },
  ],

  // Y Courses
  "yoga-instruction": [
    { id: "yi-1", name: "Asana Teaching", description: "Guide students through yoga poses with proper alignment" },
    { id: "yi-2", name: "Sequencing", description: "Design balanced, purposeful yoga class sequences" },
    { id: "yi-3", name: "Pranayama & Meditation", description: "Teach breathing techniques and mindfulness practices" },
    { id: "yi-4", name: "Anatomy for Yoga", description: "Understand body mechanics for safe instruction" },
    { id: "yi-5", name: "Class Management", description: "Create welcoming, inclusive yoga environments" },
  ],
  "youth-counseling": [
    { id: "yc-1", name: "Adolescent Psychology", description: "Understand developmental challenges facing young people" },
    { id: "yc-2", name: "Rapport Building", description: "Connect authentically with youth clients" },
    { id: "yc-3", name: "Crisis Intervention", description: "Respond to mental health emergencies in youth populations" },
    { id: "yc-4", name: "Family Systems Approach", description: "Work with families to support youth development" },
    { id: "yc-5", name: "School-Based Counseling", description: "Provide support within educational settings" },
  ],

  // Z Courses
  "zoology": [
    { id: "zoo-1", name: "Animal Behavior Analysis", description: "Study and interpret animal behavioral patterns" },
    { id: "zoo-2", name: "Conservation Biology", description: "Apply scientific methods to protect endangered species" },
    { id: "zoo-3", name: "Field Research Methods", description: "Conduct wildlife surveys and data collection" },
    { id: "zoo-4", name: "Taxonomy & Classification", description: "Identify and classify animal species accurately" },
    { id: "zoo-5", name: "Habitat Management", description: "Design and maintain environments for wildlife welfare" },
  ],
}

// Default professional skills for any course not specifically mapped
const defaultSkills: CourseSkill[] = [
  { id: "def-1", name: "Professional Expertise", description: "Develop specialized knowledge and competencies in your field" },
  { id: "def-2", name: "Critical Thinking", description: "Analyze complex problems and develop innovative solutions" },
  { id: "def-3", name: "Effective Communication", description: "Articulate ideas clearly in professional settings" },
  { id: "def-4", name: "Industry Best Practices", description: "Apply current standards and methodologies in your work" },
  { id: "def-5", name: "Continuous Learning", description: "Adapt to evolving trends and maintain professional growth" },
]

/**
 * Get tailored skills for a specific course
 * @param courseId - The course identifier (e.g., "accounting", "web-development")
 * @param courseTitle - Optional course title for fallback matching
 * @returns Array of 5 professional skills tailored to the course
 */
export function getCourseSkills(courseId: string, courseTitle?: string): CourseSkill[] {
  // Normalize the courseId
  const normalizedId = courseId.toLowerCase().replace(/\s+/g, "-")
  
  // Direct match
  if (courseSkillsMap[normalizedId]) {
    return courseSkillsMap[normalizedId]
  }
  
  // Try partial match with courseId
  const partialMatch = Object.keys(courseSkillsMap).find(
    key => normalizedId.includes(key) || key.includes(normalizedId)
  )
  
  if (partialMatch) {
    return courseSkillsMap[partialMatch]
  }
  
  // Try matching with course title if provided
  if (courseTitle) {
    const normalizedTitle = courseTitle.toLowerCase().replace(/\s+/g, "-")
    const titleMatch = Object.keys(courseSkillsMap).find(
      key => normalizedTitle.includes(key) || key.includes(normalizedTitle)
    )
    
    if (titleMatch) {
      return courseSkillsMap[titleMatch]
    }
  }
  
  // Return default skills if no match found
  return defaultSkills
}

/**
 * Get skill names as simple strings for display
 */
export function getCourseSkillNames(courseId: string, courseTitle?: string): string[] {
  return getCourseSkills(courseId, courseTitle).map(skill => skill.name)
}
