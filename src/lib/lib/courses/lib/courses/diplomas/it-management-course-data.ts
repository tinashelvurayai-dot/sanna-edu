// IT Management (Diploma) Course Content
// Complete with 6 modules, quizzes, and final exam
// This is the advanced course following IT Support Certificate

export const itManagementDiploma = {
  id: "it-management-diploma",
  title: "IT Management (Diploma)",
  description: "Advanced course covering IT management principles, project management, team leadership, budgeting, and strategic planning for IT departments. Builds on IT Support Certificate knowledge.",
  duration: "8 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  icon: "👨‍💼",
  badge: "Diploma",
  prerequisite: "it-support-certificate",
  
  // Learning Path
  learningPath: {
    certificate: "IT Support Fundamentals",
    diploma: "IT Management (Advanced)",
    progression: [
      "IT Support Certificate → IT Management Diploma",
      "Specialization: Network Administration",
      "Specialization: Cybersecurity Management",
      "Career Path: IT Director / CIO"
    ]
  },
  
  // Course Modules
  modules: [
    {
      id: 1,
      title: "IT Management Fundamentals",
      completed: false,
      content: `
# Module 1: IT Management Fundamentals

Welcome to IT Management! This module introduces the core principles of managing information technology in organizations. As an IT manager, you'll bridge technical knowledge with business leadership to ensure technology supports organizational goals.

## The Role of IT Management
IT management involves overseeing technology resources to achieve business objectives. Unlike technical support roles that focus on fixing immediate problems, IT management takes a broader view. Managers ensure that technology investments deliver value, align with business needs, and support future growth.

Key differences between technical and management roles:
- **Technical Focus**: Solving specific technical problems
- **Management Focus**: Planning, budgeting, and strategy
- **Technical Scope**: Individual systems or users
- **Management Scope**: Entire departments or organizations
- **Technical Goal**: System functionality
- **Management Goal**: Business value from technology

## Core Management Functions
IT managers perform several essential functions:

**Planning**: Developing technology strategies that support business goals. This includes identifying needed systems, forecasting technology trends, and creating implementation roadmaps.

**Organizing**: Structuring IT teams and resources efficiently. This involves defining roles, establishing workflows, and allocating resources where they're most needed.

**Leading**: Guiding and motivating IT staff. Effective leaders communicate vision, provide direction, and inspire teams to achieve their best work.

**Controlling**: Monitoring performance and making adjustments. This includes tracking project progress, managing budgets, and ensuring quality standards.

## Strategic Alignment
The most important concept in IT management is alignment between technology and business strategy. Technology should not exist for its own sake-it should support what the organization is trying to achieve.

Ask these alignment questions:
- How does this technology help achieve business objectives?
- What business problems does this technology solve?
- How does this investment create value for the organization?
- What would happen if we didn't have this technology?

## IT Governance
Governance establishes who makes technology decisions and how those decisions are made. Good governance ensures technology investments are managed properly and deliver expected benefits.

Governance addresses:
- **Decision Rights**: Who approves technology purchases and projects?
- **Accountability**: Who is responsible for technology outcomes?
- **Standards**: What technology standards must be followed?
- **Policies**: What rules govern technology use?
- **Performance Measurement**: How do we measure technology success?

## Management Skills Development
Successful IT managers develop both technical and business skills:
- **Business Acumen**: Understanding how the organization makes money
- **Communication**: Explaining technical concepts to non-technical leaders
- **Financial Management**: Budgeting and cost control
- **Project Management**: Planning and executing technology projects
- **People Management**: Leading and developing staff
- **Strategic Thinking**: Seeing the big picture and future trends

Remember: Great IT managers don't just manage technology-they manage how technology creates business value.
      `,
      quiz: [
        {
          id: 1,
          question: "What is the primary focus of IT management?",
          options: [
            "Ensuring technology supports business objectives",
            "Fixing technical problems quickly",
            "Buying the latest technology",
            "Managing individual computers"
          ],
          correctAnswer: 0,
          explanation: "IT management focuses on aligning technology with business goals to create value."
        },
        {
          id: 2,
          question: "What is a key difference between technical and management roles?",
          options: [
            "Management focuses on planning and strategy",
            "Technical roles pay more money",
            "Management requires no technical knowledge",
            "Technical roles involve more meetings"
          ],
          correctAnswer: 0,
          explanation: "Management emphasizes strategic planning while technical roles focus on specific problem-solving."
        },
        {
          id: 3,
          question: "Which management function involves developing technology strategies?",
          options: [
            "Planning",
            "Organizing",
            "Leading",
            "Controlling"
          ],
          correctAnswer: 0,
          explanation: "Planning involves developing strategies and roadmaps for technology implementation."
        },
        {
          id: 4,
          question: "What does strategic alignment in IT management mean?",
          options: [
            "Technology supporting business goals",
            "All computers being the same brand",
            "Staff working the same hours",
            "Using only the latest technology"
          ],
          correctAnswer: 0,
          explanation: "Strategic alignment ensures technology investments directly support business objectives."
        },
        {
          id: 5,
          question: "What does IT governance establish?",
          options: [
            "Who makes technology decisions and how",
            "Which software to install on computers",
            "Employee vacation schedules",
            "Office furniture arrangements"
          ],
          correctAnswer: 0,
          explanation: "Governance defines decision-making processes and accountability for technology."
        },
        {
          id: 6,
          question: "Which skill helps explain technical concepts to non-technical leaders?",
          options: [
            "Communication",
            "Programming",
            "Network design",
            "Hardware repair"
          ],
          correctAnswer: 0,
          explanation: "Clear communication bridges the gap between technical details and business understanding."
        },
        {
          id: 7,
          question: "What should technology investments create for an organization?",
          options: [
            "Business value",
            "Technical complexity",
            "More work for IT staff",
            "Higher electricity bills"
          ],
          correctAnswer: 0,
          explanation: "Technology should create value by solving problems or creating opportunities."
        },
        {
          id: 8,
          question: "What does the organizing function involve?",
          options: [
            "Structuring teams and resources efficiently",
            "Creating business strategies",
            "Fixing broken computers",
            "Writing software code"
          ],
          correctAnswer: 0,
          explanation: "Organizing involves designing team structures and allocating resources effectively."
        },
        {
          id: 9,
          question: "What question helps assess technology alignment?",
          options: [
            "How does this technology help achieve business objectives?",
            "Is this the newest technology available?",
            "Does this technology look impressive?",
            "Will this technology be fun to use?"
          ],
          correctAnswer: 0,
          explanation: "Alignment questions focus on business value rather than technical features."
        },
        {
          id: 10,
          question: "What does the controlling function involve?",
          options: [
            "Monitoring performance and making adjustments",
            "Telling employees what to do",
            "Locking computer rooms",
            "Setting strict rules for everything"
          ],
          correctAnswer: 0,
          explanation: "Controlling involves tracking progress and making necessary corrections."
        },
        {
          id: 11,
          question: "What is business acumen in IT management?",
          options: [
            "Understanding how the organization makes money",
            "Knowing all technical specifications",
            "Remembering employee birthdays",
            "Speaking multiple languages"
          ],
          correctAnswer: 0,
          explanation: "Business acumen means understanding organizational goals and financial drivers."
        },
        {
          id: 12,
          question: "What does governance address regarding accountability?",
          options: [
            "Who is responsible for technology outcomes",
            "Who has the best office",
            "Who makes the most money",
            "Who works the longest hours"
          ],
          correctAnswer: 0,
          explanation: "Accountability ensures someone is responsible for technology results and decisions."
        },
        {
          id: 13,
          question: "Which skill involves seeing the big picture and future trends?",
          options: [
            "Strategic thinking",
            "Technical troubleshooting",
            "Software installation",
            "Hardware repair"
          ],
          correctAnswer: 0,
          explanation: "Strategic thinking looks beyond immediate issues to long-term goals and trends."
        },
        {
          id: 14,
          question: "What should IT managers bridge between?",
          options: [
            "Technical knowledge and business leadership",
            "Different computer brands",
            "Morning and afternoon shifts",
            "Old and new employees"
          ],
          correctAnswer: 0,
          explanation: "IT managers connect technical capabilities with business needs and leadership."
        },
        {
          id: 15,
          question: "What is the scope of management roles compared to technical roles?",
          options: [
            "Entire departments or organizations",
            "Individual systems or users",
            "Specific software applications",
            "Single computer problems"
          ],
          correctAnswer: 0,
          explanation: "Management has broader organizational scope while technical roles focus on specific areas."
        },
        {
          id: 16,
          question: "What does leading involve in management?",
          options: [
            "Guiding and motivating staff",
            "Doing all the work yourself",
            "Making all decisions alone",
            "Following strict rules always"
          ],
          correctAnswer: 0,
          explanation: "Leading involves inspiring, guiding, and developing team members."
        },
        {
          id: 17,
          question: "What is a key question for technology investments?",
          options: [
            "What business problems does this technology solve?",
            "Is this technology on sale?",
            "Do other companies have this?",
            "Will this make our IT look advanced?"
          ],
          correctAnswer: 0,
          explanation: "Focus should be on solving business problems rather than just having technology."
        },
        {
          id: 18,
          question: "What do performance measurements in governance track?",
          options: [
            "Technology success and value",
            "Employee arrival times",
            "Coffee consumption",
            "Meeting duration"
          ],
          correctAnswer: 0,
          explanation: "Performance measurements assess whether technology delivers expected benefits."
        },
        {
          id: 19,
          question: "What skill involves budgeting and cost control?",
          options: [
            "Financial management",
            "Network configuration",
            "Software development",
            "Technical support"
          ],
          correctAnswer: 0,
          explanation: "Financial management ensures technology spending is controlled and delivers value."
        },
        {
          id: 20,
          question: "What do great IT managers manage beyond technology?",
          options: [
            "How technology creates business value",
            "Only technical staff",
            "Only computer hardware",
            "Only software licenses"
          ],
          correctAnswer: 0,
          explanation: "Effective managers focus on the value technology brings to the organization."
        }
      ]
    },
    {
      id: 2,
      title: "IT Project Management",
      completed: false,
      content: `
# Module 2: IT Project Management

IT projects transform technology capabilities in organizations. This module covers how to plan, execute, and control technology projects successfully. Project management ensures technology implementations deliver expected benefits on time and within budget.

## Project Management Basics
A project is a temporary effort to create a unique product, service, or result. IT projects might include implementing new software, upgrading networks, or deploying security systems. Unlike ongoing operations, projects have a definite beginning and end.

Key project characteristics:
- **Temporary**: Has a defined start and end date
- **Unique**: Creates something new or different
- **Progressive Elaboration**: Details become clearer as the project progresses
- **Resources**: Requires people, equipment, and materials
- **Constraints**: Limited by time, cost, and scope

## Project Lifecycle
Projects follow a predictable lifecycle with distinct phases:

**Initiation**: Defining the project at a high level. This includes identifying the business need, creating a project charter, and getting approval to proceed.

**Planning**: Developing detailed plans for execution. This phase creates the project management plan covering scope, schedule, budget, quality, resources, and risks.

**Execution**: Carrying out the project work. Teams complete tasks, produce deliverables, and implement the planned solution.

**Monitoring & Controlling**: Tracking progress and making adjustments. This happens throughout the project to ensure it stays on track.

**Closure**: Formalizing completion and handing over results. This includes finalizing all work, documenting lessons learned, and releasing project resources.

## Key Project Documents
Successful projects use several important documents:

**Project Charter**: Formal authorization to start the project. It gives the project manager authority and outlines high-level objectives.

**Scope Statement**: Detailed description of project deliverables. It defines what is included (and not included) in the project.

**Work Breakdown Structure (WBS)**: Hierarchical decomposition of project work. It breaks large deliverables into manageable pieces.

**Project Schedule**: Timeline showing when work will be done. It identifies task sequences, durations, and dependencies.

**Budget**: Estimated costs for completing the project. It tracks planned versus actual spending.

## Common IT Project Challenges
IT projects face unique challenges:

**Scope Creep**: Uncontrolled changes to project requirements. This happens when new features are added without adjusting time or budget.

**Technical Complexity**: Integration difficulties with existing systems. New technology must work with current infrastructure.

**Stakeholder Management**: Balancing different expectations and needs. Different groups may want different things from the project.

**Resource Constraints**: Limited staff, budget, or equipment availability. Resources must be allocated carefully.

**Risk Management**: Identifying and addressing potential problems. IT projects involve technical, organizational, and external risks.

## Agile vs. Traditional Approaches
Different project management approaches suit different situations:

**Traditional (Waterfall)**: Sequential phases where one phase completes before the next begins. Good for projects with clear, stable requirements.

**Agile**: Iterative approach with frequent deliveries and adjustments. Good for projects where requirements may change or evolve.

Many IT projects use hybrid approaches, combining structure from traditional methods with flexibility from agile methods.

## Success Factors
Projects succeed when they:
- Have clear objectives tied to business needs
- Engage stakeholders throughout the process
- Maintain realistic scope, schedule, and budget
- Communicate progress and issues regularly
- Adapt to changes while controlling scope creep
- Deliver measurable business value

Remember: Good project management is about delivering results, not just following processes.
      `,
      quiz: [
        {
          id: 1,
          question: "What is a project?",
          options: [
            "Temporary effort to create something unique",
            "Ongoing daily operations",
            "Routine maintenance work",
            "Permanent organizational function"
          ],
          correctAnswer: 0,
          explanation: "Projects are temporary with definite start and end dates, creating unique results."
        },
        {
          id: 2,
          question: "What is the first phase in the project lifecycle?",
          options: [
            "Initiation",
            "Planning",
            "Execution",
            "Closure"
          ],
          correctAnswer: 0,
          explanation: "Initiation defines the project at a high level and gets approval to proceed."
        },
        {
          id: 3,
          question: "What document formally authorizes a project to start?",
          options: [
            "Project charter",
            "Scope statement",
            "Budget spreadsheet",
            "Meeting minutes"
          ],
          correctAnswer: 0,
          explanation: "The project charter gives formal authorization and outlines project objectives."
        },
        {
          id: 4,
          question: "What is scope creep?",
          options: [
            "Uncontrolled changes to project requirements",
            "Project scope becoming clearer",
            "Team members changing roles",
            "Budget increasing as planned"
          ],
          correctAnswer: 0,
          explanation: "Scope creep occurs when requirements expand without adjusting time or budget."
        },
        {
          id: 5,
          question: "What breaks project work into manageable pieces?",
          options: [
            "Work Breakdown Structure (WBS)",
            "Project charter",
            "Budget document",
            "Meeting schedule"
          ],
          correctAnswer: 0,
          explanation: "WBS decomposes project deliverables into smaller, manageable work packages."
        },
        {
          id: 6,
          question: "Which approach uses sequential phases?",
          options: [
            "Traditional (Waterfall)",
            "Agile",
            "Hybrid",
            "Improvisational"
          ],
          correctAnswer: 0,
          explanation: "Traditional methods use sequential phases where one completes before the next begins."
        },
        {
          id: 7,
          question: "What happens during the execution phase?",
          options: [
            "Teams complete work and produce deliverables",
            "Project plans are created",
            "Project is formally closed",
            "High-level objectives are defined"
          ],
          correctAnswer: 0,
          explanation: "Execution involves carrying out the project work to create deliverables."
        },
        {
          id: 8,
          question: "What is a key project characteristic?",
          options: [
            "Has a defined start and end date",
            "Continues forever",
            "Never changes scope",
            "Requires no resources"
          ],
          correctAnswer: 0,
          explanation: "Projects are temporary efforts with specific beginning and ending points."
        },
        {
          id: 9,
          question: "What does progressive elaboration mean?",
          options: [
            "Details become clearer as project progresses",
            "Project gets more expensive over time",
            "Team grows larger each month",
            "Scope expands uncontrollably"
          ],
          correctAnswer: 0,
          explanation: "Progressive elaboration means understanding improves as more information becomes available."
        },
        {
          id: 10,
          question: "What is stakeholder management?",
          options: [
            "Balancing different expectations and needs",
            "Managing only technical team members",
            "Controlling project sponsors",
            "Ignoring non-technical opinions"
          ],
          correctAnswer: 0,
          explanation: "Stakeholder management addresses the needs and expectations of all interested parties."
        },
        {
          id: 11,
          question: "Which phase involves tracking progress and making adjustments?",
          options: [
            "Monitoring & Controlling",
            "Initiation",
            "Planning",
            "Closure"
          ],
          correctAnswer: 0,
          explanation: "Monitoring & Controlling happens throughout to keep the project on track."
        },
        {
          id: 12,
          question: "What type of projects suit agile approaches?",
          options: [
            "Projects where requirements may change",
            "Projects with perfectly clear requirements",
            "Projects that never need adjustments",
            "Projects with unlimited budgets"
          ],
          correctAnswer: 0,
          explanation: "Agile works well when requirements are expected to evolve during the project."
        },
        {
          id: 13,
          question: "What defines what is included in a project?",
          options: [
            "Scope statement",
            "Budget document",
            "Team roster",
            "Office location"
          ],
          correctAnswer: 0,
          explanation: "The scope statement defines project boundaries and deliverables."
        },
        {
          id: 14,
          question: "What is a project constraint?",
          options: [
            "Limitations of time, cost, and scope",
            "Team member preferences",
            "Office decoration choices",
            "Software color schemes"
          ],
          correctAnswer: 0,
          explanation: "Constraints are limitations that affect project execution, primarily time, cost, and scope."
        },
        {
          id: 15,
          question: "What happens during project closure?",
          options: [
            "Formalizing completion and handing over results",
            "Creating initial project plans",
            "Doing the main project work",
            "Expanding project scope"
          ],
          correctAnswer: 0,
          explanation: "Closure finalizes all work, documents lessons, and releases project resources."
        },
        {
          id: 16,
          question: "What is risk management in projects?",
          options: [
            "Identifying and addressing potential problems",
            "Ignoring possible issues",
            "Assuming everything will work perfectly",
            "Blaming others when things go wrong"
          ],
          correctAnswer: 0,
          explanation: "Risk management proactively identifies and addresses potential project problems."
        },
        {
          id: 17,
          question: "What shows when work will be done?",
          options: [
            "Project schedule",
            "Budget document",
            "Scope statement",
            "Risk register"
          ],
          correctAnswer: 0,
          explanation: "The project schedule shows task sequences, durations, and timelines."
        },
        {
          id: 18,
          question: "What is technical complexity in IT projects?",
          options: [
            "Integration difficulties with existing systems",
            "Simple software installations",
            "Easy user training",
            "Basic hardware setup"
          ],
          correctAnswer: 0,
          explanation: "Technical complexity involves making new systems work with existing infrastructure."
        },
        {
          id: 19,
          question: "What do many IT projects use?",
          options: [
            "Hybrid approaches combining methods",
            "Only traditional methods",
            "Only agile methods",
            "No structured methods"
          ],
          correctAnswer: 0,
          explanation: "Hybrid approaches combine structure from traditional methods with flexibility from agile."
        },
        {
          id: 20,
          question: "When do projects succeed?",
          options: [
            "When they deliver measurable business value",
            "When they use the latest technology",
            "When they have the largest budget",
            "When they take the longest time"
          ],
          correctAnswer: 0,
          explanation: "Success is measured by delivering value that meets business needs."
        }
      ]
    },
    {
      id: 3,
      title: "Team Leadership and Development",
      completed: false,
      content: `
# Module 3: Team Leadership and Development

IT managers lead teams of technical professionals. This module covers leadership principles, team building, staff development, and performance management. Effective leadership creates high-performing teams that deliver excellent results.

## Leadership vs. Management
While often used interchangeably, leadership and management are distinct:
- **Management**: Planning, organizing, and controlling work
- **Leadership**: Inspiring, motivating, and guiding people

Great IT leaders do both: they manage processes effectively while leading people inspirationally. Technical professionals often respect leaders who understand their work but also provide clear direction and support.

## Leadership Styles
Different situations call for different leadership approaches:

**Directive**: Telling team members exactly what to do. Useful in crises or with inexperienced teams.

**Coaching**: Guiding team members while developing their skills. Good for building capabilities.

**Supportive**: Providing encouragement and resources. Effective with motivated, experienced teams.

**Delegating**: Giving team members autonomy and responsibility. Works with highly capable, self-directed professionals.

Effective leaders adapt their style based on the situation, the task, and the team members involved.

## Building High-Performing Teams
Teams go through predictable stages of development:

**Forming**: Team members get to know each other. They're polite but uncertain about roles and goals.

**Storming**: Conflicts emerge as team members express different ideas. This is normal but requires guidance.

**Norming**: Team establishes working patterns and norms. Cooperation improves as roles become clear.

**Performing**: Team works efficiently toward goals. High productivity and collaboration characterize this stage.

**Adjourning**: Team completes its work and disbands. Recognition and closure are important.

Leaders can accelerate team development by clarifying goals, facilitating communication, and addressing conflicts constructively.

## Communication Skills
Clear communication is essential for IT leaders:

**Active Listening**: Fully focusing on understanding the speaker. This means not just hearing words but understanding meaning and emotion.

**Clear Instructions**: Providing unambiguous directions. Technical teams need precise requirements and expectations.

**Regular Updates**: Keeping teams informed about changes and progress. Uncertainty reduces productivity.

**Feedback Delivery**: Providing constructive feedback that helps improvement. Focus on behavior, not personality.

**Meeting Management**: Running effective, focused meetings. Respect people's time by having clear agendas and outcomes.

## Staff Development
Developing team members benefits both individuals and the organization:

**Skills Assessment**: Identifying current capabilities and development needs. Consider both technical and soft skills.

**Development Plans**: Creating personalized growth paths. Include training, mentoring, and stretch assignments.

**Career Pathing**: Showing advancement opportunities within IT. Technical professionals need clear career progression.

**Knowledge Sharing**: Encouraging team members to teach each other. This builds collective capability.

**Succession Planning**: Preparing future leaders. Ensure critical skills and knowledge aren't lost if someone leaves.

## Performance Management
Effective performance management involves:

**Clear Expectations**: Defining what success looks like. Use SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound).

**Regular Check-ins**: Having frequent conversations about progress. Don't wait for annual reviews to discuss performance.

**Fair Assessment**: Evaluating performance objectively. Use multiple data points, not just personal impressions.

**Development Focus**: Emphasizing growth and improvement. Frame feedback as opportunities to develop.

**Recognition**: Acknowledging achievements and contributions. Recognition motivates continued excellence.

## Motivation Strategies
IT professionals are motivated by:
- Challenging technical problems to solve
- Opportunities to learn new skills
- Autonomy in how they work
- Recognition for their expertise
- Fair compensation for their value
- Work that has meaningful impact

Understand what motivates each team member individually, as different people value different things.

## Conflict Resolution
Conflicts are normal in teams. Effective approaches include:
- Addressing issues early before they escalate
- Focusing on interests, not positions
- Finding win-win solutions when possible
- Maintaining respect even during disagreement
- Using neutral language to describe problems
- Involving HR for serious personnel issues

Remember: Leadership is about helping others succeed, not just exercising authority.
      `,
      quiz: [
        {
          id: 1,
          question: "What is the difference between leadership and management?",
          options: [
            "Leadership inspires people, management plans work",
            "Leadership pays more than management",
            "Management is only for technical work",
            "Leadership doesn't require technical knowledge"
          ],
          correctAnswer: 0,
          explanation: "Leadership focuses on inspiring and guiding people, while management focuses on planning and organizing work."
        },
        {
          id: 2,
          question: "Which leadership style involves telling team members exactly what to do?",
          options: [
            "Directive",
            "Coaching",
            "Supportive",
            "Delegating"
          ],
          correctAnswer: 0,
          explanation: "Directive style provides specific instructions, useful in crises or with inexperienced teams."
        },
        {
          id: 3,
          question: "What is the first stage of team development?",
          options: [
            "Forming",
            "Storming",
            "Norming",
            "Performing"
          ],
          correctAnswer: 0,
          explanation: "Forming is when team members first come together and get acquainted."
        },
        {
          id: 4,
          question: "What does active listening involve?",
          options: [
            "Fully focusing on understanding the speaker",
            "Thinking about your response while they talk",
            "Waiting for them to stop talking",
            "Correcting their statements immediately"
          ],
          correctAnswer: 0,
          explanation: "Active listening means concentrating completely on understanding the speaker's message."
        },
        {
          id: 5,
          question: "What is succession planning?",
          options: [
            "Preparing future leaders",
            "Planning team vacations",
            "Scheduling meetings",
            "Ordering office supplies"
          ],
          correctAnswer: 0,
          explanation: "Succession planning ensures critical knowledge and skills are preserved and future leaders are ready."
        },
        {
          id: 6,
          question: "What does SMART stand for in goal setting?",
          options: [
            "Specific, Measurable, Achievable, Relevant, Time-bound",
            "Simple, Manageable, Appropriate, Reasonable, Timely",
            "Strategic, Meaningful, Actionable, Reliable, Targeted",
            "Structured, Monitorable, Assignable, Realistic, Trackable"
          ],
          correctAnswer: 0,
          explanation: "SMART goals are Specific, Measurable, Achievable, Relevant, and Time-bound for clarity and effectiveness."
        },
        {
          id: 7,
          question: "What stage involves conflicts emerging in teams?",
          options: [
            "Storming",
            "Forming",
            "Norming",
            "Performing"
          ],
          correctAnswer: 0,
          explanation: "Storming is when team members express differences and conflicts surface."
        },
        {
          id: 8,
          question: "What motivates many IT professionals?",
          options: [
            "Challenging technical problems to solve",
            "Having many meetings",
            "Following strict routines",
            "Avoiding new technology"
          ],
          correctAnswer: 0,
          explanation: "Technical professionals often enjoy solving complex problems and learning new skills."
        },
        {
          id: 9,
          question: "Which leadership style works with highly capable, self-directed professionals?",
          options: [
            "Delegating",
            "Directive",
            "Coaching",
            "Supportive"
          ],
          correctAnswer: 0,
          explanation: "Delegating gives autonomy to capable team members who work well independently."
        },
        {
          id: 10,
          question: "What should feedback focus on?",
          options: [
            "Behavior, not personality",
            "Personal characteristics",
            "Family background",
            "Physical appearance"
          ],
          correctAnswer: 0,
          explanation: "Effective feedback addresses observable behaviors that can be changed, not personal traits."
        },
        {
          id: 11,
          question: "What is career pathing?",
          options: [
            "Showing advancement opportunities within IT",
            "Planning office moves",
            "Mapping commute routes",
            "Designing organizational charts"
          ],
          correctAnswer: 0,
          explanation: "Career pathing clarifies potential progression paths for professional growth."
        },
        {
          id: 12,
          question: "What stage has high productivity and collaboration?",
          options: [
            "Performing",
            "Forming",
            "Storming",
            "Norming"
          ],
          correctAnswer: 0,
          explanation: "Performing teams work efficiently and effectively toward their goals."
        },
        {
          id: 13,
          question: "What should performance assessment be?",
          options: [
            "Objective using multiple data points",
            "Based only on personal impressions",
            "Determined by office politics",
            "Influenced by personal friendships"
          ],
          correctAnswer: 0,
          explanation: "Fair assessment uses objective data and multiple perspectives for accuracy."
        },
        {
          id: 14,
          question: "What do effective leaders adapt based on?",
          options: [
            "Situation, task, and team members",
            "Their mood that day",
            "Weather conditions",
            "Stock market performance"
          ],
          correctAnswer: 0,
          explanation: "Effective leaders adjust their style based on contextual factors and team needs."
        },
        {
          id: 15,
          question: "What is knowledge sharing?",
          options: [
            "Encouraging team members to teach each other",
            "Keeping information secret",
            "Reading books alone",
            "Attending conferences only"
          ],
          correctAnswer: 0,
          explanation: "Knowledge sharing builds collective team capability and prevents knowledge silos."
        },
        {
          id: 16,
          question: "What helps accelerate team development?",
          options: [
            "Clarifying goals and facilitating communication",
            "Ignoring conflicts",
            "Withholding information",
            "Changing goals frequently"
          ],
          correctAnswer: 0,
          explanation: "Clear goals and good communication help teams progress through development stages."
        },
        {
          id: 17,
          question: "What should recognition do?",
          options: [
            "Acknowledge achievements and contributions",
            "Only happen at annual reviews",
            "Focus only on senior staff",
            "Be given equally regardless of effort"
          ],
          correctAnswer: 0,
          explanation: "Recognition validates effort and achievement, motivating continued excellence."
        },
        {
          id: 18,
          question: "What is development planning?",
          options: [
            "Creating personalized growth paths",
            "Planning office parties",
            "Scheduling equipment maintenance",
            "Budgeting for new furniture"
          ],
          correctAnswer: 0,
          explanation: "Development plans outline how individuals can grow their skills and capabilities."
        },
        {
          id: 19,
          question: "What do technical professionals often respect in leaders?",
          options: [
            "Understanding their work and providing direction",
            "Always agreeing with them",
            "Never asking questions",
            "Avoiding technical details"
          ],
          correctAnswer: 0,
          explanation: "Technical professionals value leaders who understand their work while providing clear guidance."
        },
        {
          id: 20,
          question: "What is leadership ultimately about?",
          options: [
            "Helping others succeed",
            "Exercising authority",
            "Being the smartest person",
            "Making all decisions"
          ],
          correctAnswer: 0,
          explanation: "True leadership focuses on enabling team success rather than personal power."
        }
      ]
    },
    {
      id: 4,
      title: "IT Budgeting and Financial Management",
      completed: false,
      content: `
# Module 4: IT Budgeting and Financial Management

IT managers must understand financial principles to manage budgets effectively and demonstrate technology's value. This module covers budgeting processes, cost control, financial justification, and measuring return on investment.

## The Business Case for IT
Technology investments must demonstrate business value. A business case explains:
- **The Problem**: What business issue the technology addresses
- **The Solution**: How the technology solves the problem
- **The Costs**: All expenses associated with the technology
- **The Benefits**: Tangible and intangible returns expected
- **The Alternatives**: Other options considered and why this one was chosen
- **The Risks**: Potential problems and how they'll be managed

Business cases help decision-makers understand why technology investments are worthwhile.

## Budgeting Process
IT budgeting follows a predictable cycle:

**Planning**: Estimating costs for the upcoming period. Consider personnel, hardware, software, services, and training.

**Submission**: Presenting the budget for approval. Include justifications for major expenditures.

**Approval**: Getting formal authorization to spend. This may involve negotiations and adjustments.

**Execution**: Spending according to the approved budget. Track actual expenses against planned amounts.

**Monitoring**: Comparing actual spending to budget. Identify variances and take corrective action if needed.

**Reporting**: Communicating financial status to stakeholders. Explain variances and forecast year-end position.

## Cost Categories
IT costs fall into several categories:

**Capital Expenditures (CapEx)**: Large purchases that become organizational assets. Examples include servers, network equipment, and major software licenses. These are depreciated over time.

**Operational Expenditures (OpEx)**: Day-to-day running costs. Examples include salaries, maintenance contracts, cloud services, and supplies. These are expensed in the current period.

**Direct Costs**: Expenses directly tied to specific projects or services. Easy to allocate to particular cost centers.

**Indirect Costs**: Shared expenses that support multiple areas. These require allocation methods to distribute fairly.

Understanding these categories helps with budgeting, accounting, and decision-making.

## Total Cost of Ownership (TCO)
TCO looks beyond purchase price to all costs over an asset's life:

**Acquisition Costs**: Purchase price, implementation, and initial training.

**Operating Costs**: Ongoing maintenance, support, utilities, and administration.

**End-of-Life Costs**: Disposal, data migration, and replacement planning.

TCO analysis helps compare options more accurately. A cheaper initial purchase might have higher long-term costs.

## Return on Investment (ROI)
ROI measures the financial return from an investment:
ROI = (Gain from Investment - Cost of Investment) / Cost of Investment

For IT investments, gains might include:
- **Cost Savings**: Reduced expenses from increased efficiency
- **Revenue Growth**: Increased sales from new capabilities
- **Risk Reduction**: Lower costs from avoided problems
- **Productivity Gains**: More output with same resources

Calculating ROI helps prioritize investments and demonstrate value.

## Budget Management Techniques
Effective budget management involves:

**Variance Analysis**: Comparing actual to budgeted amounts. Investigate significant differences.

**Forecasting**: Predicting future spending based on current trends. Update forecasts regularly.

**Contingency Planning**: Setting aside reserves for unexpected expenses. Typically 5-15% of total budget.

**Cost Control**: Implementing measures to stay within budget. This might include approval processes and spending limits.

**Value Management**: Ensuring spending delivers maximum value. Regularly review whether expenditures still make sense.

## Communicating Financial Information
IT managers must explain financial concepts to non-financial stakeholders:

**Use Simple Language**: Avoid accounting jargon when possible.

**Focus on Business Impact**: Connect costs to business outcomes.

**Use Visuals**: Charts and graphs make numbers easier to understand.

**Provide Context**: Compare to industry benchmarks or past performance.

**Be Transparent**: Share both good and bad financial news honestly.

## Technology Chargeback
Some organizations allocate IT costs to user departments through chargeback models:

**Direct Allocation**: Charging departments for services they directly use.

**Percentage Allocation**: Distributing shared costs based on metrics like headcount or revenue.

**Showback**: Showing costs without actually charging them. This creates awareness without financial transfer.

Chargeback models make technology costs visible and encourage responsible usage.

Remember: Financial management isn't about minimizing costs-it's about maximizing value from every dollar spent.
      `,
      quiz: [
        {
          id: 1,
          question: "What does a business case explain?",
          options: [
            "Why technology investments are worthwhile",
            "Only technical specifications",
            "Employee work schedules",
            "Office layout plans"
          ],
          correctAnswer: 0,
          explanation: "A business case justifies investments by explaining problems, solutions, costs, and benefits."
        },
        {
          id: 2,
          question: "What is the first step in the budgeting process?",
          options: [
            "Planning and estimating costs",
            "Spending the money",
            "Reporting on results",
            "Asking for more money"
          ],
          correctAnswer: 0,
          explanation: "Planning involves estimating costs for the upcoming budget period."
        },
        {
          id: 3,
          question: "What are capital expenditures (CapEx)?",
          options: [
            "Large purchases that become organizational assets",
            "Day-to-day running costs",
            "Employee salary payments",
            "Monthly utility bills"
          ],
          correctAnswer: 0,
          explanation: "CapEx includes major purchases like equipment that are depreciated over time."
        },
        {
          id: 4,
          question: "What does TCO stand for?",
          options: [
            "Total Cost of Ownership",
            "Total Capital Outlay",
            "Technical Cost Overview",
            "Time-Cost Optimization"
          ],
          correctAnswer: 0,
          explanation: "TCO considers all costs over an asset's life, not just purchase price."
        },
        {
          id: 5,
          question: "What does ROI measure?",
          options: [
            "Financial return from an investment",
            "Employee satisfaction",
            "Technical complexity",
            "System reliability"
          ],
          correctAnswer: 0,
          explanation: "ROI calculates the financial gain relative to the investment cost."
        },
        {
          id: 6,
          question: "What are operational expenditures (OpEx)?",
          options: [
            "Day-to-day running costs",
            "Major equipment purchases",
            "Building construction",
            "Company acquisitions"
          ],
          correctAnswer: 0,
          explanation: "OpEx includes recurring expenses like salaries, maintenance, and cloud services."
        },
        {
          id: 7,
          question: "What is variance analysis?",
          options: [
            "Comparing actual to budgeted amounts",
            "Analyzing different opinions",
            "Studying statistical variations",
            "Examining color differences"
          ],
          correctAnswer: 0,
          explanation: "Variance analysis identifies differences between planned and actual financial performance."
        },
        {
          id: 8,
          question: "What does a business case include about alternatives?",
          options: [
            "Other options considered and why this one was chosen",
            "Only the recommended solution",
            "Every possible technology available",
            "Competitor pricing information"
          ],
          correctAnswer: 0,
          explanation: "Considering alternatives shows due diligence in selecting the best option."
        },
        {
          id: 9,
          question: "What is contingency planning in budgeting?",
          options: [
            "Setting aside reserves for unexpected expenses",
            "Planning team vacations",
            "Scheduling equipment maintenance",
            "Ordering office supplies"
          ],
          correctAnswer: 0,
          explanation: "Contingency reserves handle unforeseen expenses without breaking the budget."
        },
        {
          id: 10,
          question: "What should IT managers use when communicating financial information?",
          options: [
            "Simple language and visuals",
            "Complex accounting terms",
            "Technical specifications only",
            "Legal contract language"
          ],
          correctAnswer: 0,
          explanation: "Simple language and visuals make financial information accessible to non-financial stakeholders."
        },
        {
          id: 11,
          question: "What are direct costs?",
          options: [
            "Expenses directly tied to specific projects or services",
            "Costs that cannot be tracked",
            "Expenses shared by everyone",
            "Costs that don't matter"
          ],
          correctAnswer: 0,
          explanation: "Direct costs can be specifically attributed to particular activities or departments."
        },
        {
          id: 12,
          question: "What does TCO include beyond purchase price?",
          options: [
            "All costs over an asset's life",
            "Only the sales tax",
            "Just delivery charges",
            "Initial setup only"
          ],
          correctAnswer: 0,
          explanation: "TCO includes acquisition, operating, and end-of-life costs for complete comparison."
        },
        {
          id: 13,
          question: "What is technology chargeback?",
          options: [
            "Allocating IT costs to user departments",
            "Returning defective equipment",
            "Getting refunds for software",
            "Charging customers for support"
          ],
          correctAnswer: 0,
          explanation: "Chargeback models make IT costs visible to departments that use the services."
        },
        {
          id: 14,
          question: "What is showback in IT finance?",
          options: [
            "Showing costs without actually charging them",
            "Displaying financial reports",
            "Demonstrating new technology",
            "Revealing budget secrets"
          ],
          correctAnswer: 0,
          explanation: "Showback creates cost awareness without the complexity of actual financial transfers."
        },
        {
          id: 15,
          question: "What should financial management maximize?",
          options: [
            "Value from every dollar spent",
            "The size of the IT budget",
            "Number of employees",
            "Quantity of equipment"
          ],
          correctAnswer: 0,
          explanation: "Effective financial management focuses on value, not just cost minimization."
        },
        {
          id: 16,
          question: "What does budget execution involve?",
          options: [
            "Spending according to the approved budget",
            "Creating the initial budget",
            "Asking for budget approval",
            "Reporting on last year's spending"
          ],
          correctAnswer: 0,
          explanation: "Execution means actually spending money in line with the approved budget plan."
        },
        {
          id: 17,
          question: "What are indirect costs?",
          options: [
            "Shared expenses supporting multiple areas",
            "Costs that don't need tracking",
            "Expenses for secret projects",
            "Personal employee expenses"
          ],
          correctAnswer: 0,
          explanation: "Indirect costs benefit multiple areas and require allocation methods."
        },
        {
          id: 18,
          question: "What is value management in budgeting?",
          options: [
            "Ensuring spending delivers maximum value",
            "Finding the cheapest options",
            "Spending the entire budget",
            "Avoiding all expenses"
          ],
          correctAnswer: 0,
          explanation: "Value management focuses on getting the best outcomes from available resources."
        },
        {
          id: 19,
          question: "What percentage might contingency reserves typically be?",
          options: [
            "5-15% of total budget",
            "50-60% of total budget",
            "0-1% of total budget",
            "100% of unexpected costs"
          ],
          correctAnswer: 0,
          explanation: "Contingency reserves typically range from 5-15% to handle reasonable unforeseen expenses."
        },
        {
          id: 20,
          question: "What should ROI calculations for IT include?",
          options: [
            "Cost savings, revenue growth, and productivity gains",
            "Only hardware purchase prices",
            "Employee vacation days",
            "Office square footage"
          ],
          correctAnswer: 0,
          explanation: "ROI should consider all financial benefits including savings, revenue, and productivity improvements."
        }
      ]
    },
    {
      id: 5,
      title: "Vendor and Contract Management",
      completed: false,
      content: `
# Module 5: Vendor and Contract Management

IT managers work with many vendors for hardware, software, and services. This module covers how to select vendors, negotiate contracts, manage relationships, and ensure value from external partnerships.

## The Vendor Management Lifecycle
Working with vendors follows a structured process:

**Planning**: Identifying what you need from vendors. Define requirements clearly before looking for solutions.

**Selection**: Finding and evaluating potential vendors. Consider capabilities, reputation, pricing, and fit.

**Negotiation**: Agreeing on terms and pricing. Aim for win-win agreements that benefit both parties.

**Implementation**: Working with vendors to deploy their solutions. Ensure smooth integration and adoption.

**Management**: Ongoing relationship management. Monitor performance and address issues.

**Review**: Periodic assessment of vendor performance. Decide whether to continue, adjust, or terminate relationships.

## Vendor Selection Criteria
Choosing the right vendor involves evaluating several factors:

**Technical Capability**: Can they deliver what you need? Assess their products, services, and expertise.

**Financial Stability**: Will they be in business long-term? Check financial reports and credit ratings.

**Reputation**: What do other customers say? Look for references, reviews, and case studies.

**Price and Value**: Is their offering reasonably priced? Consider total cost, not just purchase price.

**Support and Service**: How will they help after the sale? Evaluate support options and responsiveness.

**Cultural Fit**: Do their values and working style align with yours? Good relationships require compatibility.

Create a weighted scoring system to compare vendors objectively across these criteria.

## Contract Essentials
IT contracts should clearly define:

**Parties Involved**: Who is buying and who is selling. Include full legal names and contact information.

**Scope of Work**: Exactly what will be delivered. Be specific about products, services, and deliverables.

**Payment Terms**: When and how payments will be made. Include amounts, schedule, and method.

**Service Level Agreements (SLAs)**: Performance standards expected. Define metrics, measurement methods, and remedies for misses.

**Intellectual Property**: Who owns what. Clarify ownership of custom work, modifications, and deliverables.

**Confidentiality**: Protection of sensitive information. Define what information is confidential and how it will be protected.

**Term and Termination**: Duration of agreement and how it can end. Include notice periods and exit procedures.

**Liability and Indemnification**: Who is responsible for problems. Address damages, losses, and legal responsibilities.

## Negotiation Strategies
Successful negotiations create value for both parties:

**Prepare Thoroughly**: Research the vendor, market prices, and your alternatives. Know your priorities and limits.

**Focus on Interests, Not Positions**: Understand what each party really needs, not just what they're asking for.

**Create Multiple Options**: Develop several possible solutions before deciding. This increases chances of finding mutual gain.

**Use Objective Criteria**: Reference market standards, benchmarks, or independent assessments. Avoid arbitrary demands.

**Maintain Relationships**: Negotiate respectfully even when disagreeing. You may need to work together long-term.

**Get It in Writing**: Ensure all agreements are documented in the contract. Verbal promises are difficult to enforce.

## Service Level Agreements (SLAs)
SLAs define service expectations:

**Availability**: Percentage of time services should be available. For critical systems, 99.9% or higher is common.

**Response Times**: How quickly vendors respond to issues. Different severities may have different targets.

**Resolution Times**: Maximum time to fix problems. Define what constitutes resolution.

**Performance Metrics**: Specific measurements of service quality. Examples include system speed, accuracy, or throughput.

**Reporting**: How performance will be reported and reviewed. Regular reports should show actual versus target performance.

**Remedies**: What happens if SLAs aren't met. This might include credits, penalties, or termination rights.

SLAs should be realistic, measurable, and meaningful to the business.

## Relationship Management
Ongoing vendor management includes:

**Regular Communication**: Scheduled meetings to discuss performance, issues, and opportunities.

**Performance Monitoring**: Tracking against SLAs and other metrics. Use data, not just impressions.

**Issue Resolution**: Addressing problems quickly and constructively. Focus on solutions, not blame.

**Relationship Building**: Developing personal connections with key vendor contacts. Good relationships smooth problem resolution.

**Continuous Improvement**: Working together to enhance services over time. Look for ways to increase value.

**Contract Compliance**: Ensuring both parties meet their obligations. Address deviations promptly.

## Risk Management with Vendors
Vendor relationships involve risks:

**Dependency Risk**: Becoming too reliant on a single vendor. Consider multi-vendor strategies for critical areas.

**Performance Risk**: Vendors not delivering as promised. Have backup plans for critical services.

**Security Risk**: Vendors having access to sensitive data. Include security requirements in contracts.

**Financial Risk**: Vendors experiencing financial problems. Monitor vendor financial health.

**Exit Risk**: Difficulty changing vendors if needed. Ensure contracts allow reasonable exit.

Mitigate these risks through contract terms, performance monitoring, and contingency planning.

Remember: Vendor management is about creating partnerships that deliver value, not just buying products.
      `,
      quiz: [
        {
          id: 1,
          question: "What is the first step in vendor management?",
          options: [
            "Planning what you need from vendors",
            "Signing contracts immediately",
            "Paying vendor invoices",
            "Terminating underperforming vendors"
          ],
          correctAnswer: 0,
          explanation: "Planning involves clearly defining requirements before engaging with vendors."
        },
        {
          id: 2,
          question: "What should you evaluate when selecting vendors?",
          options: [
            "Technical capability, financial stability, and reputation",
            "Only the lowest price",
            "Vendor office location",
            "Employee dress code"
          ],
          correctAnswer: 0,
          explanation: "Comprehensive evaluation considers multiple factors beyond just price."
        },
        {
          id: 3,
          question: "What should IT contracts clearly define?",
          options: [
            "Scope of work, payment terms, and SLAs",
            "Only the total price",
            "Vendor employee names",
            "Office decor preferences"
          ],
          correctAnswer: 0,
          explanation: "Contracts need clear definitions of deliverables, payments, and performance standards."
        },
        {
          id: 4,
          question: "What do SLAs define?",
          options: [
            "Service performance standards expected",
            "Employee work hours",
            "Office holiday schedule",
            "Company vacation policy"
          ],
          correctAnswer: 0,
          explanation: "SLAs specify measurable service levels like availability, response times, and performance."
        },
        {
          id: 5,
          question: "What should negotiations focus on?",
          options: [
            "Interests, not just positions",
            "Winning at all costs",
            "Making the other side lose",
            "Getting everything you want"
          ],
          correctAnswer: 0,
          explanation: "Effective negotiations understand underlying needs rather than just stated demands."
        },
        {
          id: 6,
          question: "What is dependency risk with vendors?",
          options: [
            "Becoming too reliant on a single vendor",
            "Vendors asking too many questions",
            "Having too many vendor options",
            "Vendors being too helpful"
          ],
          correctAnswer: 0,
          explanation: "Dependency risk occurs when over-reliance on one vendor creates vulnerability."
        },
        {
          id: 7,
          question: "What should be in payment terms?",
          options: [
            "Amounts, schedule, and payment method",
            "Only the total amount",
            "Vendor bank account details only",
            "Payment when you feel like it"
          ],
          correctAnswer: 0,
          explanation: "Clear payment terms prevent misunderstandings about when and how payments occur."
        },
        {
          id: 8,
          question: "What does 99.9% availability mean in SLAs?",
          options: [
            "Services available all but 8.76 hours per year",
            "Perfect availability always",
            "Available only during business hours",
            "Unavailable most of the time"
          ],
          correctAnswer: 0,
          explanation: "99.9% availability allows approximately 8.76 hours of downtime per year."
        },
        {
          id: 9,
          question: "What is cultural fit in vendor selection?",
          options: [
            "Alignment of values and working styles",
            "Same office building location",
            "Identical employee uniforms",
            "Similar company names"
          ],
          correctAnswer: 0,
          explanation: "Cultural fit affects how well organizations work together over time."
        },
        {
          id: 10,
          question: "What should ongoing vendor management include?",
          options: [
            "Regular communication and performance monitoring",
            "Ignoring vendors after contract signing",
            "Only contacting vendors when angry",
            "Letting vendors do whatever they want"
          ],
          correctAnswer: 0,
          explanation: "Active management maintains relationships and ensures contract compliance."
        },
        {
          id: 11,
          question: "What is intellectual property in contracts?",
          options: [
            "Who owns created work and deliverables",
            "Employee intelligence levels",
            "Office property inventory",
            "Company secret recipes"
          ],
          correctAnswer: 0,
          explanation: "IP clauses define ownership of software, customizations, and other created assets."
        },
        {
          id: 12,
          question: "What should preparation for negotiations include?",
          options: [
            "Researching vendors, market prices, and alternatives",
            "Making arbitrary demands",
            "Hiding your budget",
            "Pretending you have no alternatives"
          ],
          correctAnswer: 0,
          explanation: "Thorough preparation creates stronger negotiation positions."
        },
        {
          id: 13,
          question: "What does confidentiality in contracts address?",
          options: [
            "Protection of sensitive information",
            "Keeping contract existence secret",
            "Hiding vendor names",
            "Secret handshake methods"
          ],
          correctAnswer: 0,
          explanation: "Confidentiality clauses protect business information shared during the relationship."
        },
        {
          id: 14,
          question: "What is performance risk with vendors?",
          options: [
            "Vendors not delivering as promised",
            "Vendors performing too well",
            "Too many vendor options",
            "Vendors being too expensive"
          ],
          correctAnswer: 0,
          explanation: "Performance risk addresses potential failure to meet agreed standards."
        },
        {
          id: 15,
          question: "What should contract termination clauses include?",
          options: [
            "Notice periods and exit procedures",
            "Only final payment amounts",
            "Employee transfer plans",
            "Office key returns"
          ],
          correctAnswer: 0,
          explanation: "Clear termination processes ensure smooth endings to vendor relationships."
        },
        {
          id: 16,
          question: "What are remedies in SLAs?",
          options: [
            "What happens if service levels aren't met",
            "Medicine for sick employees",
            "Solutions to technical problems",
            "Ways to fix broken equipment"
          ],
          correctAnswer: 0,
          explanation: "Remedies specify consequences like credits or penalties for missing SLA targets."
        },
        {
          id: 17,
          question: "What is financial stability in vendor evaluation?",
          options: [
            "Vendor's ability to stay in business long-term",
            "How much money they have today",
            "Vendor employee salaries",
            "Price of vendor stock"
          ],
          correctAnswer: 0,
          explanation: "Financial stability ensures vendors will be available to support their products/services."
        },
        {
          id: 18,
          question: "What does relationship building with vendors involve?",
          options: [
            "Developing personal connections with key contacts",
            "Becoming best friends",
            "Sharing family secrets",
            "Ignoring professional boundaries"
          ],
          correctAnswer: 0,
          explanation: "Professional relationships facilitate communication and problem resolution."
        },
        {
          id: 19,
          question: "What is exit risk with vendors?",
          options: [
            "Difficulty changing vendors if needed",
            "Vendors leaving meetings early",
            "Employees exiting the building",
            "Software exit commands"
          ],
          correctAnswer: 0,
          explanation: "Exit risk addresses challenges in transitioning away from a vendor."
        },
        {
          id: 20,
          question: "What is vendor management ultimately about?",
          options: [
            "Creating partnerships that deliver value",
            "Paying as little as possible",
            "Having many vendor options",
            "Making vendors work hard"
          ],
          correctAnswer: 0,
          explanation: "Successful vendor management focuses on mutual value creation through partnerships."
        }
      ]
    },
    {
      id: 6,
      title: "Strategic IT Planning",
      completed: false,
      content: `
# Module 6: Strategic IT Planning

Strategic planning aligns technology with long-term business goals. This module covers how to develop IT strategies, create technology roadmaps, manage innovation, and ensure IT supports organizational success.

## The Strategic Planning Process
Strategic planning involves looking ahead 3-5 years to guide technology decisions:

**Environmental Scanning**: Understanding external and internal factors. Consider technology trends, market conditions, competitor actions, and organizational capabilities.

**Vision Development**: Defining where IT should be in the future. Create an inspiring picture of what technology will enable.

**Goal Setting**: Establishing specific strategic objectives. These should be ambitious yet achievable.

**Strategy Formulation**: Determining how to achieve goals. Develop approaches for technology, people, and processes.

**Action Planning**: Creating specific initiatives and projects. Translate strategy into concrete actions.

**Implementation**: Executing the strategic plan. Allocate resources and manage initiatives.

**Monitoring and Adjustment**: Tracking progress and adapting as needed. The world changes, so plans must be flexible.

## SWOT Analysis
SWOT analysis evaluates strategic position:

**Strengths**: Internal advantages. What does IT do well? Examples might include skilled staff, modern infrastructure, or strong security.

**Weaknesses**: Internal limitations. What needs improvement? Examples might include legacy systems, skills gaps, or budget constraints.

**Opportunities**: External possibilities. What favorable conditions exist? Examples might include new technologies, market changes, or partnership possibilities.

**Threats**: External challenges. What could cause problems? Examples might include cybersecurity risks, competitor actions, or regulatory changes.

Use SWOT to develop strategies that leverage strengths, address weaknesses, capitalize on opportunities, and mitigate threats.

## Technology Roadmaps
Roadmaps show how technology will evolve over time:

**Current State**: What technology exists today. Document systems, capabilities, and limitations.

**Future Vision**: Where technology should be. Describe target capabilities and architecture.

**Transition Path**: How to get from current to future state. Show phased initiatives and dependencies.

**Timeline**: When changes will occur. Indicate major milestones and decision points.

**Resource Requirements**: What investments are needed. Include budget, staff, and time estimates.

Roadmaps communicate the strategic direction and guide investment decisions.

## Innovation Management
IT must balance maintaining current systems with innovating for the future:

**Exploitation**: Optimizing existing capabilities. Making current systems more efficient, reliable, and cost-effective.

**Exploration**: Developing new capabilities. Experimenting with emerging technologies and approaches.

Effective IT organizations do both simultaneously. Allocate resources specifically for innovation rather than expecting it to happen incidentally.

## Business-IT Alignment
Strategic alignment ensures technology supports business strategy:

**Understanding Business Strategy**: Know where the organization is going. What markets, products, or services are priorities?

**Translating to Technology Implications**: Determine what technology capabilities are needed. How can IT enable or accelerate business goals?

**Communicating IT's Role**: Explain how technology creates value. Show how IT investments support business outcomes.

**Measuring Alignment**: Track how well IT supports business needs. Use metrics that connect technology to business results.

Alignment should be continuous, not just during annual planning.

## Change Management
Strategic changes require managing organizational impact:

**Stakeholder Analysis**: Identifying who is affected and how. Understand concerns and resistance points.

**Communication Planning**: Explaining why changes are needed. Address what's in it for different groups.

**Training and Support**: Helping people develop new skills. Provide resources for successful adoption.

**Resistance Management**: Addressing concerns and objections. Listen to feedback and make adjustments where possible.

**Reinforcement**: Ensuring changes stick. Recognize adoption and address backsliding.

Technology changes fail when people aspects aren't managed effectively.

## Performance Measurement
Measure strategic progress using:

**Leading Indicators**: Predict future performance. Examples include project milestones, skill development, or innovation experiments.

**Lagging Indicators**: Show past results. Examples include system availability, user satisfaction, or cost savings.

**Balanced Scorecard**: Multiple perspectives on performance. Include financial, customer, internal process, and learning/growth measures.

**Key Performance Indicators (KPIs)**: Critical measures of success. Focus on a few important metrics rather than many trivial ones.

Measure what matters, not just what's easy to measure.

## Risk Management in Strategy
Strategic initiatives involve risks:

**Technology Risks**: New technologies might not work as expected. Have fallback options and prototypes.

**Implementation Risks**: Projects might face delays or cost overruns. Use strong project management.

**Adoption Risks**: People might not use new systems. Invest in change management.

**External Risks**: Market or regulatory changes might affect plans. Monitor the environment and adapt.

Include risk management in strategic planning, not as an afterthought.

## Communication of Strategy
Strategic plans must be communicated effectively:

**Tailor to Audience**: Different stakeholders need different information. Executives want business impact, technical staff want technical details.

**Use Multiple Channels**: Presentations, documents, meetings, and visuals. Reinforce the message through repetition.

**Make it Concrete**: Connect strategy to daily work. Show how individual contributions support strategic goals.

**Update Regularly**: Strategy isn't static. Communicate adjustments and progress.

**Engage People**: Involve stakeholders in strategy development. People support what they help create.

Remember: Strategy without execution is just a document. Focus on making strategy real through action.
      `,
      quiz: [
        {
          id: 1,
          question: "What is strategic planning in IT?",
          options: [
            "Aligning technology with long-term business goals",
            "Planning daily technical tasks",
            "Scheduling employee shifts",
            "Ordering office supplies"
          ],
          correctAnswer: 0,
          explanation: "Strategic planning looks ahead 3-5 years to ensure technology supports business direction."
        },
        {
          id: 2,
          question: "What does SWOT analysis evaluate?",
          options: [
            "Strengths, weaknesses, opportunities, threats",
            "Software, websites, operations, training",
            "Staff, work, objectives, time",
            "Systems, wiring, outputs, troubleshooting"
          ],
          correctAnswer: 0,
          explanation: "SWOT analyzes internal strengths/weaknesses and external opportunities/threats."
        },
        {
          id: 3,
          question: "What do technology roadmaps show?",
          options: [
            "How technology will evolve over time",
            "Directions to vendor offices",
            "Network cable layouts",
            "Employee commute routes"
          ],
          correctAnswer: 0,
          explanation: "Roadmaps illustrate the planned evolution of technology capabilities and systems."
        },
        {
          id: 4,
          question: "What is the difference between exploitation and exploration?",
          options: [
            "Exploitation optimizes existing systems, exploration develops new capabilities",
            "Exploitation uses employees, exploration uses contractors",
            "Exploitation saves money, exploration spends money",
            "Exploitation is technical, exploration is business"
          ],
          correctAnswer: 0,
          explanation: "Exploitation improves current capabilities while exploration creates new ones."
        },
        {
          id: 5,
          question: "What does business-IT alignment ensure?",
          options: [
            "Technology supports business strategy",
            "IT has the biggest budget",
            "Business people learn programming",
            "IT makes all business decisions"
          ],
          correctAnswer: 0,
          explanation: "Alignment connects technology investments with business goals and priorities."
        },
        {
          id: 6,
          question: "What is change management in strategic planning?",
          options: [
            "Managing organizational impact of changes",
            "Changing managers frequently",
            "Managing budget changes only",
            "Changing technology constantly"
          ],
          correctAnswer: 0,
          explanation: "Change management addresses people aspects of implementing strategic changes."
        },
        {
          id: 7,
          question: "What are leading indicators?",
          options: [
            "Metrics that predict future performance",
            "Metrics that show past results",
            "The most important metrics",
            "Metrics that are easy to collect"
          ],
          correctAnswer: 0,
          explanation: "Leading indicators help forecast future outcomes based on current activities."
        },
        {
          id: 8,
          question: "What is environmental scanning?",
          options: [
            "Understanding external and internal factors",
            "Cleaning computer equipment",
            "Monitoring office temperatures",
            "Checking network cables"
          ],
          correctAnswer: 0,
          explanation: "Environmental scanning assesses trends, market conditions, and organizational capabilities."
        },
        {
          id: 9,
          question: "What should strategic goals be?",
          options: [
            "Ambitious yet achievable",
            "Easy to accomplish quickly",
            "Impossible to reach",
            "The same every year"
          ],
          correctAnswer: 0,
          explanation: "Strategic goals should challenge the organization while being realistic."
        },
        {
          id: 10,
          question: "What is a balanced scorecard?",
          options: [
            "Multiple perspectives on performance",
            "Financial balance sheet",
            "Equal budget allocation",
            "Fair employee evaluation"
          ],
          correctAnswer: 0,
          explanation: "Balanced scorecards include financial, customer, process, and learning measures."
        },
        {
          id: 11,
          question: "What does strategy formulation involve?",
          options: [
            "Determining how to achieve goals",
            "Writing detailed project plans",
            "Creating employee schedules",
            "Ordering new equipment"
          ],
          correctAnswer: 0,
          explanation: "Strategy formulation develops approaches for achieving strategic objectives."
        },
        {
          id: 12,
          question: "What are strengths in SWOT analysis?",
          options: [
            "Internal advantages",
            "External possibilities",
            "Internal limitations",
            "External challenges"
          ],
          correctAnswer: 0,
          explanation: "Strengths are positive internal factors like skilled staff or modern systems."
        },
        {
          id: 13,
          question: "What do roadmaps include about transition?",
          options: [
            "How to get from current to future state",
            "Only the final destination",
            "Employee transfer plans",
            "Office relocation details"
          ],
          correctAnswer: 0,
          explanation: "Transition paths show phased initiatives and dependencies for reaching target states."
        },
        {
          id: 14,
          question: "What is adoption risk in strategy?",
          options: [
            "People might not use new systems",
            "Technology might not work",
            "Projects might be delayed",
            "Costs might increase"
          ],
          correctAnswer: 0,
          explanation: "Adoption risk addresses potential resistance to using new systems or processes."
        },
        {
          id: 15,
          question: "How should strategy be communicated?",
          options: [
            "Tailored to different audiences",
            "Only to senior executives",
            "As one big announcement",
            "Only in written documents"
          ],
          correctAnswer: 0,
          explanation: "Effective communication adapts the message for different stakeholder groups."
        },
        {
          id: 16,
          question: "What is vision development?",
          options: [
            "Defining where IT should be in the future",
            "Planning eye exams for staff",
            "Designing office views",
            "Creating visual presentations"
          ],
          correctAnswer: 0,
          explanation: "Vision creates an inspiring picture of what technology will enable in the future."
        },
        {
          id: 17,
          question: "What are threats in SWOT analysis?",
          options: [
            "External challenges",
            "Internal advantages",
            "External possibilities",
            "Internal limitations"
          ],
          correctAnswer: 0,
          explanation: "Threats are external factors that could cause problems, like competition or regulation."
        },
        {
          id: 18,
          question: "What should be allocated specifically for innovation?",
          options: [
            "Resources and budget",
            "Only unused equipment",
            "Only junior staff time",
            "Whatever is left over"
          ],
          explanation: "Dedicated innovation resources ensure exploration happens alongside daily operations.",
          correctAnswer: 0
        },
        {
          id: 19,
          question: "What does monitoring and adjustment involve?",
          options: [
            "Tracking progress and adapting as needed",
            "Only checking once per year",
            "Never changing the plan",
            "Blaming others for deviations"
          ],
          correctAnswer: 0,
          explanation: "Regular monitoring allows strategic plans to adapt to changing conditions."
        },
        {
          id: 20,
          question: "What is strategy without execution?",
          options: [
            "Just a document",
            "A perfect plan",
            "A completed task",
            "A successful outcome"
          ],
          correctAnswer: 0,
          explanation: "Strategy only creates value when implemented through concrete actions and initiatives."
        }
      ]
    }
  ],
  
  // Final Exam (40 questions covering all modules)
  finalExam: {
    title: "IT Management Diploma Final Exam",
    description: "Comprehensive exam covering all 6 modules. You need to score 70% or higher to pass.",
    passingScore: 28, // 70% of 40 questions
    questions: [
      // Module 1 Questions (7 questions)
      {
        id: 1,
        question: "What is the primary focus of IT management?",
        options: [
          "Ensuring technology supports business objectives",
          "Fixing technical problems quickly",
          "Buying the latest technology",
          "Managing individual computers"
        ],
        correctAnswer: 0,
        explanation: "IT management aligns technology with business goals to create organizational value.",
        module: 1
      },
      {
        id: 2,
        question: "Which management function involves developing technology strategies?",
        options: [
          "Planning",
          "Organizing",
          "Leading",
          "Controlling"
        ],
        correctAnswer: 0,
        explanation: "Planning involves strategic development of technology roadmaps and approaches.",
        module: 1
      },
      {
        id: 3,
        question: "What does strategic alignment in IT management mean?",
        options: [
          "Technology supporting business goals",
          "All computers being the same brand",
          "Staff working the same hours",
          "Using only the latest technology"
        ],
        correctAnswer: 0,
        explanation: "Alignment ensures technology investments directly support business objectives.",
        module: 1
      },
      {
        id: 4,
        question: "What does IT governance establish?",
        options: [
          "Who makes technology decisions and how",
          "Which software to install on computers",
          "Employee vacation schedules",
          "Office furniture arrangements"
        ],
        correctAnswer: 0,
        explanation: "Governance defines decision-making authority and processes for technology.",
        module: 1
      },
      {
        id: 5,
        question: "What skill helps explain technical concepts to non-technical leaders?",
        options: [
          "Communication",
          "Programming",
          "Network design",
          "Hardware repair"
        ],
        correctAnswer: 0,
        explanation: "Clear communication bridges technical details with business understanding.",
        module: 1
      },
      {
        id: 6,
        question: "What should technology investments create for an organization?",
        options: [
          "Business value",
          "Technical complexity",
          "More work for IT staff",
          "Higher electricity bills"
        ],
        correctAnswer: 0,
        explanation: "Technology should create value by solving business problems or creating opportunities.",
        module: 1
      },
      {
        id: 7,
        question: "What does business acumen in IT management involve?",
        options: [
          "Understanding how the organization makes money",
          "Knowing all technical specifications",
          "Remembering employee birthdays",
          "Speaking multiple languages"
        ],
        correctAnswer: 0,
        explanation: "Business acumen means understanding organizational goals and financial drivers.",
        module: 1
      },
      
      // Module 2 Questions (7 questions)
      {
        id: 8,
        question: "What is a project?",
        options: [
          "Temporary effort to create something unique",
          "Ongoing daily operations",
          "Routine maintenance work",
          "Permanent organizational function"
        ],
        correctAnswer: 0,
        explanation: "Projects are temporary with definite start and end dates, creating unique results.",
        module: 2
      },
      {
        id: 9,
        question: "What is the first phase in the project lifecycle?",
        options: [
          "Initiation",
          "Planning",
          "Execution",
          "Closure"
        ],
        correctAnswer: 0,
        explanation: "Initiation defines the project at a high level and gets approval to proceed.",
        module: 2
      },
      {
        id: 10,
        question: "What document formally authorizes a project to start?",
        options: [
          "Project charter",
          "Scope statement",
          "Budget spreadsheet",
          "Meeting minutes"
        ],
        correctAnswer: 0,
        explanation: "The project charter gives formal authorization and outlines project objectives.",
        module: 2
      },
      {
        id: 11,
        question: "What is scope creep?",
        options: [
          "Uncontrolled changes to project requirements",
          "Project scope becoming clearer",
          "Team members changing roles",
          "Budget increasing as planned"
        ],
        correctAnswer: 0,
        explanation: "Scope creep occurs when requirements expand without adjusting time or budget.",
        module: 2
      },
      {
        id: 12,
        question: "What breaks project work into manageable pieces?",
        options: [
          "Work Breakdown Structure (WBS)",
          "Project charter",
          "Budget document",
          "Meeting schedule"
        ],
        correctAnswer: 0,
        explanation: "WBS decomposes project deliverables into smaller, manageable work packages.",
        module: 2
      },
      {
        id: 13,
        question: "Which approach uses sequential phases?",
        options: [
          "Traditional (Waterfall)",
          "Agile",
          "Hybrid",
          "Improvisational"
        ],
        correctAnswer: 0,
        explanation: "Traditional methods use sequential phases where one completes before the next begins.",
        module: 2
      },
      {
        id: 14,
        question: "What happens during the execution phase?",
        options: [
          "Teams complete work and produce deliverables",
          "Project plans are created",
          "Project is formally closed",
          "High-level objectives are defined"
        ],
        correctAnswer: 0,
        explanation: "Execution involves carrying out the project work to create deliverables.",
        module: 2
      },
      
      // Module 3 Questions (6 questions)
      {
        id: 15,
        question: "What is the difference between leadership and management?",
        options: [
          "Leadership inspires people, management plans work",
          "Leadership pays more than management",
          "Management is only for technical work",
          "Leadership doesn't require technical knowledge"
        ],
        correctAnswer: 0,
        explanation: "Leadership focuses on inspiring people, while management focuses on planning work.",
        module: 3
      },
      {
        id: 16,
        question: "Which leadership style involves telling team members exactly what to do?",
        options: [
          "Directive",
          "Coaching",
          "Supportive",
          "Delegating"
        ],
        correctAnswer: 0,
        explanation: "Directive style provides specific instructions, useful in certain situations.",
        module: 3
      },
      {
        id: 17,
        question: "What is the first stage of team development?",
        options: [
          "Forming",
          "Storming",
          "Norming",
          "Performing"
        ],
        correctAnswer: 0,
        explanation: "Forming is when team members first come together and get acquainted.",
        module: 3
      },
      {
        id: 18,
        question: "What does active listening involve?",
        options: [
          "Fully focusing on understanding the speaker",
          "Thinking about your response while they talk",
          "Waiting for them to stop talking",
          "Correcting their statements immediately"
        ],
        correctAnswer: 0,
        explanation: "Active listening means concentrating completely on understanding the speaker's message.",
        module: 3
      },
      {
        id: 19,
        question: "What is succession planning?",
        options: [
          "Preparing future leaders",
          "Planning team vacations",
          "Scheduling meetings",
          "Ordering office supplies"
        ],
        correctAnswer: 0,
        explanation: "Succession planning ensures critical knowledge and future leaders are ready.",
        module: 3
      },
      {
        id: 20,
        question: "What motivates many IT professionals?",
        options: [
          "Challenging technical problems to solve",
          "Having many meetings",
          "Following strict routines",
          "Avoiding new technology"
        ],
        correctAnswer: 0,
        explanation: "Technical professionals often enjoy solving complex problems and learning.",
        module: 3
      },
      
      // Module 4 Questions (6 questions)
      {
        id: 21,
        question: "What does a business case explain?",
        options: [
          "Why technology investments are worthwhile",
          "Only technical specifications",
          "Employee work schedules",
          "Office layout plans"
        ],
        correctAnswer: 0,
        explanation: "A business case justifies investments by explaining value and benefits.",
        module: 4
      },
      {
        id: 22,
        question: "What are capital expenditures (CapEx)?",
        options: [
          "Large purchases that become organizational assets",
          "Day-to-day running costs",
          "Employee salary payments",
          "Monthly utility bills"
        ],
        correctAnswer: 0,
        explanation: "CapEx includes major purchases like equipment that are depreciated over time.",
        module: 4
      },
      {
        id: 23,
        question: "What does TCO stand for?",
        options: [
          "Total Cost of Ownership",
          "Total Capital Outlay",
          "Technical Cost Overview",
          "Time-Cost Optimization"
        ],
        correctAnswer: 0,
        explanation: "TCO considers all costs over an asset's life, not just purchase price.",
        module: 4
      },
      {
        id: 24,
        question: "What does ROI measure?",
        options: [
          "Financial return from an investment",
          "Employee satisfaction",
          "Technical complexity",
          "System reliability"
        ],
        correctAnswer: 0,
        explanation: "ROI calculates the financial gain relative to the investment cost.",
        module: 4
      },
      {
        id: 25,
        question: "What is variance analysis?",
        options: [
          "Comparing actual to budgeted amounts",
          "Analyzing different opinions",
          "Studying statistical variations",
          "Examining color differences"
        ],
        correctAnswer: 0,
        explanation: "Variance analysis identifies differences between planned and actual performance.",
        module: 4
      },
      {
        id: 26,
        question: "What is contingency planning in budgeting?",
        options: [
          "Setting aside reserves for unexpected expenses",
          "Planning team vacations",
          "Scheduling equipment maintenance",
          "Ordering office supplies"
        ],
        correctAnswer: 0,
        explanation: "Contingency reserves handle unforeseen expenses without breaking the budget.",
        module: 4
      },
      
      // Module 5 Questions (7 questions)
      {
        id: 27,
        question: "What is the first step in vendor management?",
        options: [
          "Planning what you need from vendors",
          "Signing contracts immediately",
          "Paying vendor invoices",
          "Terminating underperforming vendors"
        ],
        correctAnswer: 0,
        explanation: "Planning involves clearly defining requirements before engaging with vendors.",
        module: 5
      },
      {
        id: 28,
        question: "What should you evaluate when selecting vendors?",
        options: [
          "Technical capability, financial stability, and reputation",
          "Only the lowest price",
          "Vendor office location",
          "Employee dress code"
        ],
        correctAnswer: 0,
        explanation: "Comprehensive evaluation considers multiple factors beyond just price.",
        module: 5
      },
      {
        id: 29,
        question: "What should IT contracts clearly define?",
        options: [
          "Scope of work, payment terms, and SLAs",
          "Only the total price",
          "Vendor employee names",
          "Office decor preferences"
        ],
        correctAnswer: 0,
        explanation: "Contracts need clear definitions of deliverables, payments, and performance.",
        module: 5
      },
      {
        id: 30,
        question: "What do SLAs define?",
        options: [
          "Service performance standards expected",
          "Employee work hours",
          "Office holiday schedule",
          "Company vacation policy"
        ],
        correctAnswer: 0,
        explanation: "SLAs specify measurable service levels like availability and response times.",
        module: 5
      },
      {
        id: 31,
        question: "What should negotiations focus on?",
        options: [
          "Interests, not just positions",
          "Winning at all costs",
          "Making the other side lose",
          "Getting everything you want"
        ],
        correctAnswer: 0,
        explanation: "Effective negotiations understand underlying needs rather than just demands.",
        module: 5
      },
      {
        id: 32,
        question: "What is dependency risk with vendors?",
        options: [
          "Becoming too reliant on a single vendor",
          "Vendors asking too many questions",
          "Having too many vendor options",
          "Vendors being too helpful"
        ],
        correctAnswer: 0,
        explanation: "Dependency risk occurs when over-reliance creates vulnerability.",
        module: 5
      },
      {
        id: 33,
        question: "What should be in payment terms?",
        options: [
          "Amounts, schedule, and payment method",
          "Only the total amount",
          "Vendor bank account details only",
          "Payment when you feel like it"
        ],
        correctAnswer: 0,
        explanation: "Clear payment terms prevent misunderstandings about when and how to pay.",
        module: 5
      },
      
      // Module 6 Questions (7 questions)
      {
        id: 34,
        question: "What is strategic planning in IT?",
        options: [
          "Aligning technology with long-term business goals",
          "Planning daily technical tasks",
          "Scheduling employee shifts",
          "Ordering office supplies"
        ],
        correctAnswer: 0,
        explanation: "Strategic planning looks ahead 3-5 years to align technology with business direction.",
        module: 6
      },
      {
        id: 35,
        question: "What does SWOT analysis evaluate?",
        options: [
          "Strengths, weaknesses, opportunities, threats",
          "Software, websites, operations, training",
          "Staff, work, objectives, time",
          "Systems, wiring, outputs, troubleshooting"
        ],
        correctAnswer: 0,
        explanation: "SWOT analyzes internal strengths/weaknesses and external opportunities/threats.",
        module: 6
      },
      {
        id: 36,
        question: "What do technology roadmaps show?",
        options: [
          "How technology will evolve over time",
          "Directions to vendor offices",
          "Network cable layouts",
          "Employee commute routes"
        ],
        correctAnswer: 0,
        explanation: "Roadmaps illustrate planned evolution of technology capabilities and systems.",
        module: 6
      },
      {
        id: 37,
        question: "What is the difference between exploitation and exploration?",
        options: [
          "Exploitation optimizes existing systems, exploration develops new capabilities",
          "Exploitation uses employees, exploration uses contractors",
          "Exploitation saves money, exploration spends money",
          "Exploitation is technical, exploration is business"
        ],
        correctAnswer: 0,
        explanation: "Exploitation improves current capabilities while exploration creates new ones.",
        module: 6
      },
      {
        id: 38,
        question: "What does business-IT alignment ensure?",
        options: [
          "Technology supports business strategy",
          "IT has the biggest budget",
          "Business people learn programming",
          "IT makes all business decisions"
        ],
        correctAnswer: 0,
        explanation: "Alignment connects technology investments with business goals and priorities.",
        module: 6
      },
      {
        id: 39,
        question: "What is change management in strategic planning?",
        options: [
          "Managing organizational impact of changes",
          "Changing managers frequently",
          "Managing budget changes only",
          "Changing technology constantly"
        ],
        correctAnswer: 0,
        explanation: "Change management addresses people aspects of implementing strategic changes.",
        module: 6
      },
      {
        id: 40,
        question: "What are leading indicators?",
        options: [
          "Metrics that predict future performance",
          "Metrics that show past results",
          "The most important metrics",
          "Metrics that are easy to collect"
        ],
        correctAnswer: 0,
        explanation: "Leading indicators help forecast future outcomes based on current activities.",
        module: 6
      }
    ]
  }
};
