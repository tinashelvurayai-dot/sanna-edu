// Hospitality Management (Diploma) - Complete Course Data
// Advanced course building on hospitality fundamentals for management roles

export const hospitalityManagementDiploma = {
  // COURSE METADATA
  id: "hospitality-management-diploma",
  title: "Hospitality Management (Diploma)",
  description: "Advanced management course covering leadership, operations, revenue management, and strategic planning for hospitality professionals seeking managerial positions.",
  duration: "12 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  upgradePrice: 0, // Already diploma level
  icon: "🏨",
  badge: "Diploma",
  prerequisite: "Hospitality Certificate or equivalent experience",
  
  // MODULE 1: Leadership in Hospitality
  modules: [
    {
      id: 1,
      title: "Hospitality Leadership Fundamentals",
      completed: false,
      content: `
# Module 1: Hospitality Leadership Fundamentals

Welcome to hospitality management! This module introduces leadership principles specifically for the hospitality industry.

## Understanding Hospitality Leadership
Hospitality leadership combines people skills with business management. Unlike other industries, hospitality leaders must inspire both guests and staff simultaneously.

**Three pillars of hospitality leadership:**
1. **Guest Experience Leadership** - Creating memorable stays
2. **Team Leadership** - Inspiring and guiding staff
3. **Business Leadership** - Managing operations profitably

**The hospitality leader's dual focus:**
- **External focus:** Guest satisfaction and brand reputation
- **Internal focus:** Staff development and operational efficiency

## Leadership Styles in Hospitality
Different situations call for different leadership approaches.

**Transformational Leadership:**
- Inspires staff to exceed expectations
- Creates vision for exceptional service
- Builds strong team culture
- Best for: Improving service standards, opening new properties

**Transactional Leadership:**
- Focuses on clear roles and rewards
- Uses structured systems and procedures
- Rewards performance, addresses shortcomings
- Best for: Daily operations, maintaining standards

**Servant Leadership:**
- Puts team needs first
- Supports staff development
- Leads by serving others
- Best for: Building loyalty, reducing turnover

**Situational Leadership:**
- Adapts style to situation and person
- Considers team member's competence and commitment
- Flexible approach to guidance
- Best for: Diverse teams, training situations

## Communication Skills for Leaders
Clear communication prevents misunderstandings and builds trust.

**Four communication channels leaders must master:**
1. **Upward communication** - Reporting to superiors
2. **Downward communication** - Directing team members
3. **Lateral communication** - Coordinating with peers
4. **External communication** - Interacting with guests and suppliers

**Active listening techniques:**
- Maintain eye contact
- Nod and use affirming words
- Paraphrase to confirm understanding
- Ask clarifying questions
- Avoid interrupting

**Effective meeting management:**
- Always have clear agenda
- Start and end on time
- Assign action items with deadlines
- Follow up on commitments

## Building High-Performance Teams
Great hospitality teams deliver exceptional guest experiences.

**Team development stages:**
1. **Forming** - Team comes together, polite but cautious
2. **Storming** - Conflicts emerge, roles tested
3. **Norming** - Cooperation develops, norms established
4. **Performing** - Team works efficiently toward goals
5. **Adjourning** - Project ends, team disbands

**Team building activities for hospitality:**
- Cross-training sessions
- Service excellence workshops
- Departmental shadowing
- Guest feedback review sessions
- Social events (within professional boundaries)

**Creating psychological safety:**
- Encourage questions and ideas
- View mistakes as learning opportunities
- Celebrate diverse perspectives
- Protect team from unfair criticism

## Decision-Making Frameworks
Managers make decisions daily that affect guests and staff.

**The DECIDE framework for hospitality decisions:**
1. **Define** the problem or opportunity
2. **Establish** criteria for success
3. **Consider** all alternatives
4. **Identify** the best alternative
5. **Develop** and implement plan
6. **Evaluate** and adjust as needed

**When to make decisions:**
- **Immediate decisions:** Safety issues, guest emergencies
- **Consultative decisions:** Policy changes, schedule adjustments
- **Collaborative decisions:** Menu changes, service improvements
- **Delegated decisions:** Routine operational choices

**Risk assessment for hospitality decisions:**
- Consider impact on guest experience
- Evaluate financial implications
- Assess effect on staff morale
- Review legal/regulatory compliance

## Time Management for Managers
Hospitality managers juggle multiple responsibilities.

**Priority matrix for hospitality tasks:**
- **Urgent & Important:** Guest complaints, safety issues, staffing crises
- **Important but Not Urgent:** Training, planning, relationship building
- **Urgent but Not Important:** Some calls, minor interruptions
- **Not Urgent & Not Important:** Time-wasters, unnecessary meetings

**Daily planning routine:**
1. Review previous day's performance metrics
2. Check today's arrivals and special requests
3. Conduct morning briefing with team
4. Schedule "walk-around" time for guest interaction
5. Reserve time for unexpected issues
6. End day with administrative tasks

**Delegation guidelines:**
- Delegate tasks that others can do 70% as well as you
- Provide clear instructions and authority level
- Establish check-in points, not constant monitoring
- Give credit for success, take responsibility for failures

## Developing Leadership Presence
How you present yourself affects your leadership effectiveness.

**Professional presence elements:**
- **Appearance:** Appropriate attire, good grooming
- **Communication:** Clear speech, professional language
- **Body language:** Confident posture, appropriate gestures
- **Emotional control:** Calm under pressure, positive attitude
- **Knowledge:** Command of hospitality concepts and operations

**Building credibility:**
- Know your property inside and out
- Be consistent in words and actions
- Follow through on commitments
- Admit mistakes and learn from them
- Show genuine care for staff and guests

**Personal development plan:**
- Identify 2-3 leadership skills to improve
- Seek feedback from peers and supervisors
- Find mentor in the industry
- Attend hospitality leadership workshops
- Read hospitality management publications

Remember: Great hospitality leaders create environments where both guests and staff feel valued and successful.
`,
      quiz: [
        {
          id: 1,
          question: "What are the three pillars of hospitality leadership?",
          options: [
            "Marketing, Finance, Operations",
            "Guest Experience, Team, Business Leadership",
            "Front Desk, Housekeeping, Food Service",
            "Planning, Organizing, Controlling"
          ],
          correctAnswer: 1,
          explanation: "The three pillars are: Guest Experience Leadership, Team Leadership, and Business Leadership."
        },
        {
          id: 2,
          question: "Which leadership style focuses on inspiring staff to exceed expectations?",
          options: [
            "Transactional Leadership",
            "Transformational Leadership",
            "Servant Leadership",
            "Autocratic Leadership"
          ],
          correctAnswer: 1,
          explanation: "Transformational leadership inspires staff to exceed expectations and creates vision for exceptional service."
        },
        {
          id: 3,
          question: "What is the first stage of team development?",
          options: ["Storming", "Norming", "Forming", "Performing"],
          correctAnswer: 2,
          explanation: "Forming is the first stage where the team comes together, members are polite but cautious."
        },
        {
          id: 4,
          question: "What does the 'D' stand for in the DECIDE framework?",
          options: [
            "Develop plan",
            "Define problem",
            "Delegate tasks",
            "Determine outcomes"
          ],
          correctAnswer: 1,
          explanation: "In DECIDE framework, 'D' stands for Define the problem or opportunity."
        },
        {
          id: 5,
          question: "Which tasks are both urgent and important?",
          options: [
            "Training sessions",
            "Guest complaints",
            "Future planning",
            "Social media updates"
          ],
          correctAnswer: 1,
          explanation: "Guest complaints are both urgent (need immediate attention) and important (affect guest satisfaction)."
        },
        {
          id: 6,
          question: "When should you delegate tasks?",
          options: [
            "Only tasks you can do perfectly",
            "Tasks others can do 70% as well as you",
            "Never delegate important tasks",
            "Only to senior staff members"
          ],
          correctAnswer: 1,
          explanation: "Delegate tasks that others can do 70% as well as you to develop team skills and free your time."
        },
        {
          id: 7,
          question: "What is servant leadership?",
          options: [
            "Leading by serving others first",
            "Giving orders to servants",
            "Managing only service staff",
            "Working in service positions"
          ],
          correctAnswer: 0,
          explanation: "Servant leadership puts team needs first and leads by serving others, building loyalty."
        },
        {
          id: 8,
          question: "What communication involves reporting to superiors?",
          options: [
            "Downward communication",
            "Upward communication",
            "Lateral communication",
            "External communication"
          ],
          correctAnswer: 1,
          explanation: "Upward communication involves reporting to managers, owners, or corporate leadership."
        },
        {
          id: 9,
          question: "What creates psychological safety in teams?",
          options: [
            "Punishing all mistakes",
            "Encouraging questions and ideas",
            "Eliminating all conflicts",
            "Having identical team members"
          ],
          correctAnswer: 1,
          explanation: "Psychological safety is created by encouraging questions and viewing mistakes as learning opportunities."
        },
        {
          id: 10,
          question: "What is situational leadership?",
          options: [
            "Same style for everyone",
            "Adapting style to situation and person",
            "Leading only in specific locations",
            "Managing seasonal operations"
          ],
          correctAnswer: 1,
          explanation: "Situational leadership adapts style based on the situation and the team member's competence and commitment."
        },
        {
          id: 11,
          question: "How many communication channels must leaders master?",
          options: ["Two", "Three", "Four", "Five"],
          correctAnswer: 2,
          explanation: "Four channels: Upward, Downward, Lateral, and External communication."
        },
        {
          id: 12,
          question: "What is the 'storming' stage of team development?",
          options: [
            "Team works efficiently",
            "Conflicts emerge and roles tested",
            "Cooperation develops",
            "Team comes together politely"
          ],
          correctAnswer: 1,
          explanation: "Storming stage involves conflicts emerging as team members test roles and boundaries."
        },
        {
          id: 13,
          question: "Which leadership style uses structured systems and rewards?",
          options: [
            "Transformational",
            "Transactional",
            "Servant",
            "Democratic"
          ],
          correctAnswer: 1,
          explanation: "Transactional leadership focuses on clear roles, structured systems, and performance rewards."
        },
        {
          id: 14,
          question: "What should effective meetings always have?",
          options: [
            "Free food",
            "Clear agenda",
            "No time limit",
            "Only managers speaking"
          ],
          correctAnswer: 1,
          explanation: "Effective meetings always have a clear agenda to stay focused and productive."
        },
        {
          id: 15,
          question: "What percentage should others be able to do tasks before delegation?",
          options: ["50%", "70%", "90%", "100%"],
          correctAnswer: 1,
          explanation: "Delegate tasks others can do 70% as well as you to balance efficiency with development."
        },
        {
          id: 16,
          question: "What is lateral communication?",
          options: [
            "Reporting to superiors",
            "Directing team members",
            "Coordinating with peers",
            "Interacting with guests"
          ],
          correctAnswer: 2,
          explanation: "Lateral communication involves coordinating with peers at the same organizational level."
        },
        {
          id: 17,
          question: "What type of decisions involve policy changes?",
          options: [
            "Immediate decisions",
            "Consultative decisions",
            "Routine decisions",
            "Emergency decisions"
          ],
          correctAnswer: 1,
          explanation: "Consultative decisions like policy changes benefit from input from affected team members."
        },
        {
          id: 18,
          question: "What builds leadership credibility?",
          options: [
            "Knowing your property",
            "Never making mistakes",
            "Working longest hours",
            "Having expensive clothes"
          ],
          correctAnswer: 0,
          explanation: "Knowing your property inside and out builds credibility with both staff and guests."
        },
        {
          id: 19,
          question: "What is the performing stage of team development?",
          options: [
            "Team disbands",
            "Team works efficiently",
            "Conflicts emerge",
            "Norms established"
          ],
          correctAnswer: 1,
          explanation: "Performing stage is when the team works efficiently toward goals with high productivity."
        },
        {
          id: 20,
          question: "What should daily planning include?",
          options: [
            "Only scheduled meetings",
            "Morning briefing and walk-around time",
            "Avoiding guest interaction",
            "Working only in office"
          ],
          correctAnswer: 1,
          explanation: "Daily planning should include morning briefing and scheduled walk-around time for guest interaction."
        }
      ]
    },

    // MODULE 2: Hospitality Operations Management
    {
      id: 2,
      title: "Hospitality Operations Excellence",
      completed: false,
      content: `
# Module 2: Hospitality Operations Excellence

Operations management ensures all hospitality services run smoothly, efficiently, and profitably.

## Front Office Management
The front desk is the hospitality operation's nerve center.

**Key front office functions:**
1. **Reservations management** - Booking optimization and forecasting
2. **Check-in/check-out** - Efficient guest arrival and departure
3. **Guest services** - Concierge, information, problem resolution
4. **Revenue management** - Rate control and upselling
5. **Night audit** - Daily financial reconciliation

**Front office performance metrics:**
- Average daily rate (ADR)
- Occupancy percentage
- Revenue per available room (RevPAR)
- Guest satisfaction scores
- Check-in/check-out time efficiency

**Technology in front office:**
- Property management systems (PMS)
- Online booking engines
- Mobile check-in options
- Digital key systems
- Customer relationship management (CRM)

## Housekeeping Operations
Cleanliness is non-negotiable in hospitality.

**Housekeeping organization:**
- **Room attendants** - Clean and prepare guest rooms
- **Housepersons** - Handle linens, supplies, public areas
- **Inspectors** - Quality control for cleaned rooms
- **Laundry staff** - Process linens and uniforms
- **Supervisors** - Coordinate teams and schedules

**Cleaning standards and procedures:**
- **Stayover service** - Daily cleaning for occupied rooms
- **Check-out service** - Thorough cleaning after departure
- **Deep cleaning** - Scheduled intensive cleaning
- **Special cleaning** - Stain removal, allergen rooms

**Housekeeping efficiency strategies:**
- Zone assignments for room attendants
- Cart stocking standards
- Room status communication systems
- Preventive maintenance reporting
- Green cleaning initiatives

## Food and Beverage Management
F&B operations can make or break hospitality reputation.

**Types of F&B operations:**
- **Restaurants** - Fine dining, casual, theme
- **Room service** - In-room dining
- **Banquet/catering** - Events and functions
- **Bars/lounges** - Beverage service
- **Mini-bars** - In-room refreshments

**F&B management considerations:**
- Menu planning and pricing
- Kitchen layout and equipment
- Food safety and sanitation
- Inventory control
- Staff training and scheduling

**Cost control in F&B:**
- Food cost percentage targets
- Beverage cost control
- Portion control systems
- Waste reduction programs
- Supplier negotiations

## Maintenance and Engineering
Proper maintenance ensures guest comfort and safety.

**Preventive maintenance program:**
- Scheduled equipment servicing
- Regular inspections
- System monitoring
- Replacement part inventory
- Energy management

**Common maintenance areas:**
- HVAC systems
- Plumbing and water systems
- Electrical systems
- Building structure
- Grounds and landscaping
- Pool and recreational facilities

**Emergency maintenance response:**
- 24/7 on-call system
- Priority classification system
- Guest communication protocols
- Temporary solution procedures
- Vendor relationships for specialized repairs

## Revenue Management
Maximizing revenue while maintaining guest satisfaction.

**Revenue management components:**
1. **Demand forecasting** - Predicting future business
2. **Pricing strategy** - Setting optimal rates
3. **Inventory control** - Managing available rooms
4. **Distribution management** - Sales channel optimization
5. **Performance analysis** - Measuring results

**Pricing strategies:**
- **Dynamic pricing** - Rates change based on demand
- **Package pricing** - Bundled offerings
- **Length of stay pricing** - Discounts for longer stays
- **Segment pricing** - Different rates for different markets
- **Last-minute pricing** - Filling remaining inventory

**Distribution channels to manage:**
- Direct bookings (website, phone)
- Online travel agencies (OTAs)
- Global distribution systems (GDS)
- Wholesalers and tour operators
- Corporate accounts

## Quality Assurance Systems
Consistent quality builds brand reputation.

**Quality measurement tools:**
- Guest satisfaction surveys
- Mystery shopper programs
- Social media monitoring
- Online review analysis
- Internal inspection checklists

**Continuous improvement process:**
1. Measure current performance
2. Identify improvement opportunities
3. Develop action plans
4. Implement changes
5. Measure results
6. Repeat cycle

**Service recovery framework:**
- **Listen** - Hear the complete complaint
- **Apologize** - Sincere apology without excuses
- **Fix** - Immediate corrective action
- **Compensate** - Appropriate compensation
- **Follow-up** - Ensure guest satisfaction
- **Learn** - Prevent recurrence

## Technology Integration
Modern hospitality relies on integrated technology.

**Essential hospitality technology systems:**
- Property Management System (PMS)
- Point of Sale (POS) systems
- Customer Relationship Management (CRM)
- Revenue Management System (RMS)
- Channel Management System
- Accounting and back office systems

**Technology implementation best practices:**
- Thorough needs assessment
- Staff training programs
- Phased implementation
- Continuous support
- Regular system updates
- Data backup and security

**Emerging hospitality technology:**
- Contactless check-in/out
- Mobile room keys
- In-room tablets for services
- Artificial intelligence for personalization
- Internet of Things (IoT) for room automation
- Robotics for service delivery

## Sustainability Operations
Environmental responsibility meets guest expectations.

**Sustainability initiatives:**
- Energy conservation programs
- Water conservation measures
- Waste reduction and recycling
- Sustainable purchasing
- Local community support
- Green certifications (LEED, Green Key)

**Implementing sustainability:**
- Conduct environmental audit
- Set measurable goals
- Engage staff in initiatives
- Communicate efforts to guests
- Monitor and report progress
- Continuously improve

**Benefits of sustainability:**
- Cost savings from reduced consumption
- Enhanced brand reputation
- Competitive differentiation
- Regulatory compliance
- Staff pride and engagement
- Guest preference and loyalty

Operations excellence requires balancing efficiency with exceptional guest experience.
`,
      quiz: [
        {
          id: 1,
          question: "What does ADR stand for in front office metrics?",
          options: [
            "Average Daily Revenue",
            "Annual Department Rate",
            "Average Daily Rate",
            "Accommodation Demand Ratio"
          ],
          correctAnswer: 2,
          explanation: "ADR stands for Average Daily Rate - the average revenue earned per occupied room per day."
        },
        {
          id: 2,
          question: "Who handles linens and public areas in housekeeping?",
          options: [
            "Room attendants",
            "Housepersons",
            "Inspectors",
            "Laundry staff"
          ],
          correctAnswer: 1,
          explanation: "Housepersons handle linens, supplies, and public area cleaning in housekeeping operations."
        },
        {
          id: 3,
          question: "What type of cleaning is done for occupied rooms?",
          options: [
            "Check-out service",
            "Stayover service",
            "Deep cleaning",
            "Special cleaning"
          ],
          correctAnswer: 1,
          explanation: "Stayover service is daily cleaning for rooms with current guests staying additional nights."
        },
        {
          id: 4,
          question: "What does F&B stand for?",
          options: [
            "Facilities and Building",
            "Food and Beverage",
            "Front and Back",
            "Finance and Budget"
          ],
          correctAnswer: 1,
          explanation: "F&B stands for Food and Beverage - the department handling all dining and drinking services."
        },
        {
          id: 5,
          question: "What is preventive maintenance?",
          options: [
            "Fixing broken items",
            "Emergency repairs",
            "Scheduled equipment servicing",
            "Guest-reported repairs"
          ],
          correctAnswer: 2,
          explanation: "Preventive maintenance involves scheduled servicing to prevent equipment failures before they occur."
        },
        {
          id: 6,
          question: "What does RevPAR measure?",
          options: [
            "Restaurant revenue",
            "Revenue per available room",
            "Revenue percentage",
            "Review ratings average"
          ],
          correctAnswer: 1,
          explanation: "RevPAR stands for Revenue per Available Room - total room revenue divided by available rooms."
        },
        {
          id: 7,
          question: "What pricing changes based on demand?",
          options: [
            "Static pricing",
            "Dynamic pricing",
            "Package pricing",
            "Corporate pricing"
          ],
          correctAnswer: 1,
          explanation: "Dynamic pricing adjusts rates based on current and anticipated demand to maximize revenue."
        },
        {
          id: 8,
          question: "What does PMS stand for in hospitality?",
          options: [
            "Property Management System",
            "Preventive Maintenance Schedule",
            "Performance Measurement System",
            "Personnel Management Software"
          ],
          correctAnswer: 0,
          explanation: "PMS stands for Property Management System - the central software managing hotel operations."
        },
        {
          id: 9,
          question: "What is the first step in service recovery?",
          options: ["Apologize", "Fix", "Listen", "Compensate"],
          correctAnswer: 2,
          explanation: "First listen completely to understand the complaint before taking any other action."
        },
        {
          id: 10,
          question: "What technology manages sales channels?",
          options: [
            "PMS",
            "POS",
            "Channel Management System",
            "CRM"
          ],
          correctAnswer: 2,
          explanation: "Channel Management System distributes inventory and rates across various sales channels."
        },
        {
          id: 11,
          question: "Who performs quality control on cleaned rooms?",
          options: [
            "Room attendants",
            "Housepersons",
            "Inspectors",
            "Supervisors"
          ],
          correctAnswer: 2,
          explanation: "Inspectors check cleaned rooms to ensure they meet quality standards before being sold."
        },
        {
          id: 12,
          question: "What controls food costs?",
          options: [
            "Portion control systems",
            "Longer operating hours",
            "More menu items",
            "Higher prices only"
          ],
          correctAnswer: 0,
          explanation: "Portion control systems ensure consistent serving sizes to control food costs."
        },
        {
          id: 13,
          question: "What maintains daily financial reconciliation?",
          options: [
            "Front desk",
            "Night audit",
            "Accounting",
            "Revenue management"
          ],
          correctAnswer: 1,
          explanation: "Night audit process reconciles daily transactions and prepares financial reports."
        },
        {
          id: 14,
          question: "What measures guest satisfaction secretly?",
          options: [
            "Social media",
            "Mystery shopper programs",
            "Online reviews",
            "Surveys"
          ],
          correctAnswer: 1,
          explanation: "Mystery shopper programs use trained evaluators posing as guests to measure service quality."
        },
        {
          id: 15,
          question: "What does CRM stand for?",
          options: [
            "Customer Relationship Management",
            "Corporate Revenue Management",
            "Central Reservation Management",
            "Cost Reduction Method"
          ],
          correctAnswer: 0,
          explanation: "CRM stands for Customer Relationship Management - systems for managing guest interactions and data."
        },
        {
          id: 16,
          question: "What sustainability certification exists for hotels?",
          options: ["LEED", "OSHA", "FDA", "FCC"],
          correctAnswer: 0,
          explanation: "LEED (Leadership in Energy and Environmental Design) is a green building certification program."
        },
        {
          id: 17,
          question: "What handles in-room dining?",
          options: [
            "Restaurant",
            "Room service",
            "Banquet",
            "Mini-bar"
          ],
          correctAnswer: 1,
          explanation: "Room service provides food and beverage delivery to guest rooms."
        },
        {
          id: 18,
          question: "What forecasts future business?",
          options: [
            "Revenue management",
            "Demand forecasting",
            "Inventory control",
            "Performance analysis"
          ],
          correctAnswer: 1,
          explanation: "Demand forecasting predicts future occupancy and revenue patterns for planning purposes."
        },
        {
          id: 19,
          question: "What is continuous improvement?",
          options: [
            "One-time fix",
            "Ongoing cycle of measurement and improvement",
            "Annual review",
            "Emergency response"
          ],
          correctAnswer: 1,
          explanation: "Continuous improvement is an ongoing cycle of measuring, identifying opportunities, implementing changes, and repeating."
        },
        {
          id: 20,
          question: "What technology handles payments?",
          options: ["PMS", "POS", "CRM", "RMS"],
          correctAnswer: 1,
          explanation: "POS stands for Point of Sale - systems that process transactions at restaurants, bars, and other outlets."
        }
      ]
    },

    // MODULE 3: Human Resources in Hospitality
    {
      id: 3,
      title: "Hospitality Human Resources Management",
      completed: false,
      content: `
# Module 3: Hospitality Human Resources Management

Managing people effectively is critical in the people-intensive hospitality industry.

## Hospitality Workforce Planning
Strategic planning ensures the right people in the right positions.

**Workforce planning process:**
1. **Analyze current workforce** - Skills, demographics, performance
2. **Forecast future needs** - Based on business plans and trends
3. **Identify gaps** - Between current and future needs
4. **Develop strategies** - Recruitment, training, restructuring
5. **Implement and monitor** - Execute plans and track progress

**Factors affecting hospitality staffing:**
- Seasonality and demand patterns
- Local labor market conditions
- Competitive compensation packages
- Immigration policies and work permits
- Industry reputation and employer brand

**Staffing level calculations:**
- **Full-time equivalents (FTEs)** - Standardized measure of workload
- **Occupancy-based staffing** - Staff levels tied to hotel occupancy
- **Revenue-based staffing** - Staffing tied to revenue generation
- **Service standard staffing** - Staffing to meet service level agreements

## Recruitment and Selection
Finding and hiring the right hospitality talent.

**Effective recruitment channels for hospitality:**
- Internal promotions and transfers
- Employee referrals
- Hospitality schools and programs
- Online job boards (hospitality-specific)
- Social media and professional networks
- Job fairs and career events

**Hospitality-specific interview techniques:**
- **Behavioral interviews** - "Tell me about a time when..."
- **Situational interviews** - "What would you do if..."
- **Role-playing scenarios** - Simulating guest interactions
- **Practical tests** - Tray carrying, table setting
- **Multiple interviews** - With different department heads

**Selection criteria for hospitality roles:**
- **Technical skills** - Job-specific abilities
- **Service attitude** - Genuine desire to help others
- **Cultural fit** - Alignment with organizational values
- **Reliability** - Dependability and attendance
- **Flexibility** - Willingness to work various shifts

## Training and Development
Continuous learning maintains service standards and staff satisfaction.

**Orientation training essentials:**
- Company history and values
- Property tour and layout
- Department introductions
- Safety and emergency procedures
- Service standards and expectations
- Benefits and policies overview

**Ongoing training programs:**
- **Technical training** - Job-specific skills
- **Service excellence training** - Guest interaction skills
- **Safety training** - Emergency procedures, first aid
- **Compliance training** - Legal requirements
- **Leadership development** - For supervisory roles
- **Cross-training** - Multiple department skills

**Training delivery methods:**
- Classroom sessions
- On-the-job training
- E-learning modules
- Coaching and mentoring
- Job rotation
- External workshops and certifications

## Performance Management
Regular feedback improves performance and engagement.

**Performance appraisal systems:**
- **Management by objectives** - Goal-based evaluation
- **360-degree feedback** - Input from multiple sources
- **Behaviorally anchored rating scales** - Specific behavior evaluation
- **Self-assessment** - Employee evaluation of own performance
- **Critical incident method** - Documenting significant events

**Effective feedback techniques:**
- **Timely** - Close to the event
- **Specific** - Concrete examples
- **Balanced** - Strengths and areas for improvement
- **Actionable** - Clear next steps
- **Two-way** - Opportunity for employee input

**Progressive discipline process:**
1. **Verbal warning** - Informal discussion
2. **Written warning** - Formal documentation
3. **Suspension** - Time off without pay (if applicable)
4. **Termination** - Employment separation

## Compensation and Benefits
Competitive packages attract and retain quality staff.

**Hospitality compensation components:**
- Base salary or hourly wage
- Overtime pay (where applicable)
- Tips and service charges (where allowed)
- Shift differentials
- Bonuses and incentives
- Benefits package

**Non-monetary rewards in hospitality:**
- Employee of the month programs
- Service excellence awards
- Training and development opportunities
- Flexible scheduling options
- Career advancement paths
- Recognition ceremonies and events

**Benefits considerations:**
- Health insurance options
- Retirement plans
- Paid time off (vacation, sick days)
- Employee discounts
- Uniform allowances
- Meal provisions

## Employee Relations and Engagement
Positive workplace culture reduces turnover and improves service.

**Building engagement in hospitality:**
- Clear communication channels
- Employee suggestion programs
- Regular team meetings
- Social events and activities
- Recognition programs
- Career development discussions

**Handling employee conflicts:**
- Address issues promptly
- Listen to all parties involved
- Focus on behavior, not personality
- Seek mutually agreeable solutions
- Document discussions and agreements
- Follow up to ensure resolution

**Labor law compliance:**
- Wage and hour regulations
- Workplace safety requirements
- Anti-discrimination laws
- Leave entitlements
- Immigration verification
- Union relations (if applicable)

## Retention Strategies
Reducing turnover saves recruitment and training costs.

**Common reasons for hospitality turnover:**
- Low wages and benefits
- Irregular and long hours
- Limited advancement opportunities
- High stress and burnout
- Poor management practices
- Lack of recognition

**Retention strategies:**
- Competitive compensation packages
- Clear career progression paths
- Regular feedback and recognition
- Work-life balance initiatives
- Positive work environment
- Investment in training and development

**Exit interview process:**
- Conducted by neutral party
- Confidential and anonymous options
- Structured questionnaire
- Analysis of trends and patterns
- Action on identified issues

## Diversity and Inclusion
Diverse teams better serve diverse guests.

**Creating inclusive hospitality workplaces:**
- Unconscious bias training
- Multilingual staff and materials
- Cultural awareness programs
- Accommodation for religious practices
- Accessibility for people with disabilities
- Anti-harassment policies and training

**Benefits of diversity in hospitality:**
- Better understanding of diverse guests
- More creative problem-solving
- Improved employer reputation
- Broader talent pool access
- Enhanced team performance
- Competitive advantage

## Labor Cost Management
Balancing service quality with financial sustainability.

**Labor cost control strategies:**
- Accurate forecasting and scheduling
- Cross-training for flexibility
- Productivity standards and monitoring
- Overtime management
- Optimal staffing levels
- Technology for efficiency

**Labor cost metrics:**
- Labor cost percentage
- Revenue per employee
- Sales per labor hour
- Overtime percentage
- Turnover cost calculations

Effective HR management creates engaged teams that deliver exceptional guest experiences.
`,
      quiz: [
        {
          id: 1,
          question: "What does FTE stand for in workforce planning?",
          options: [
            "Full-Time Employee",
            "Full-Time Equivalent",
            "Future Training Estimate",
            "Financial Target Expectation"
          ],
          correctAnswer: 1,
          explanation: "FTE stands for Full-Time Equivalent - a standardized measure of workload based on full-time hours."
        },
        {
          id: 2,
          question: "What interview asks 'Tell me about a time when...'?",
          options: [
            "Situational interview",
            "Behavioral interview",
            "Role-playing interview",
            "Practical test"
          ],
          correctAnswer: 1,
          explanation: "Behavioral interviews ask about past experiences to predict future performance."
        },
        {
          id: 3,
          question: "What training introduces company values?",
          options: [
            "Technical training",
            "Orientation training",
            "Safety training",
            "Cross-training"
          ],
          correctAnswer: 1,
          explanation: "Orientation training introduces new employees to company history, values, and culture."
        },
        {
          id: 4,
          question: "What uses input from multiple sources for evaluation?",
          options: [
            "Self-assessment",
            "360-degree feedback",
            "Management by objectives",
            "Critical incident method"
          ],
          correctAnswer: 1,
          explanation: "360-degree feedback gathers input from supervisors, peers, subordinates, and sometimes guests."
        },
        {
          id: 5,
          question: "What is the first step in progressive discipline?",
          options: [
            "Written warning",
            "Suspension",
            "Verbal warning",
            "Termination"
          ],
          correctAnswer: 2,
          explanation: "Progressive discipline typically begins with an informal verbal warning."
        },
        {
          id: 6,
          question: "What are shift differentials?",
          options: [
            "Different uniform colors",
            "Extra pay for certain shifts",
            "Varied break times",
            "Alternate supervisors"
          ],
          correctAnswer: 1,
          explanation: "Shift differentials are additional pay for working evenings, nights, weekends, or holidays."
        },
        {
          id: 7,
          question: "What helps reduce turnover?",
          options: [
            "Lower wages",
            "Irregular hours",
            "Career progression paths",
            "Less training"
          ],
          correctAnswer: 2,
          explanation: "Clear career progression paths show employees growth opportunities, improving retention."
        },
        {
          id: 8,
          question: "What gathers information from departing employees?",
          options: [
            "Entry interview",
            "Performance review",
            "Exit interview",
            "Training evaluation"
          ],
          correctAnswer: 2,
          explanation: "Exit interviews identify reasons for turnover and opportunities for improvement."
        },
        {
          id: 9,
          question: "What addresses unconscious assumptions?",
          options: [
            "Technical training",
            "Unconscious bias training",
            "Safety training",
            "Language training"
          ],
          correctAnswer: 1,
          explanation: "Unconscious bias training helps staff recognize and mitigate automatic assumptions about others."
        },
        {
          id: 10,
          question: "What metric is labor cost divided by revenue?",
          options: [
            "Revenue per employee",
            "Labor cost percentage",
            "Overtime percentage",
            "Turnover rate"
          ],
          correctAnswer: 1,
          explanation: "Labor cost percentage = Total labor cost ÷ Total revenue × 100."
        },
        {
          id: 11,
          question: "What forecasts future staffing needs?",
          options: [
            "Workforce planning",
            "Performance management",
            "Recruitment",
            "Training"
          ],
          correctAnswer: 0,
          explanation: "Workforce planning analyzes current staff and forecasts future needs based on business plans."
        },
        {
          id: 12,
          question: "What simulates guest interactions in interviews?",
          options: [
            "Behavioral interviews",
            "Role-playing scenarios",
            "Practical tests",
            "Situational interviews"
          ],
          correctAnswer: 1,
          explanation: "Role-playing scenarios test how candidates would handle actual guest situations."
        },
        {
          id: 13,
          question: "What teaches multiple department skills?",
          options: [
            "Orientation",
            "Cross-training",
            "Technical training",
            "Compliance training"
          ],
          correctAnswer: 1,
          explanation: "Cross-training develops skills in multiple departments for flexibility and career growth."
        },
        {
          id: 14,
          question: "What feedback is close to the event?",
          options: ["Timely", "Specific", "Balanced", "Actionable"],
          correctAnswer: 0,
          explanation: "Timely feedback given soon after the event is more effective and relevant."
        },
        {
          id: 15,
          question: "What are non-monetary rewards?",
          options: [
            "Service excellence awards",
            "Higher salaries",
            "Extra tips",
            "Overtime pay"
          ],
          correctAnswer: 0,
          explanation: "Non-monetary rewards like recognition programs motivate without additional cost."
        },
        {
          id: 16,
          question: "What helps work-life balance?",
          options: [
            "Longer shifts",
            "Flexible scheduling options",
            "Mandatory overtime",
            "Fewer breaks"
          ],
          correctAnswer: 1,
          explanation: "Flexible scheduling helps employees balance work with personal responsibilities."
        },
        {
          id: 17,
          question: "What improves team creativity?",
          options: [
            "Identical team members",
            "Diverse teams",
            "Only experienced staff",
            "Minimal training"
          ],
          correctAnswer: 1,
          explanation: "Diverse teams bring different perspectives, leading to more creative problem-solving."
        },
        {
          id: 18,
          question: "What controls labor costs through scheduling?",
          options: [
            "Accurate forecasting",
            "Higher wages",
            "More overtime",
            "Fewer benefits"
          ],
          correctAnswer: 0,
          explanation: "Accurate forecasting and scheduling match staffing to expected demand, controlling costs."
        },
        {
          id: 19,
          question: "What asks 'What would you do if...'?",
          options: [
            "Behavioral interview",
            "Situational interview",
            "Practical test",
            "Role-playing"
          ],
          correctAnswer: 1,
          explanation: "Situational interviews present hypothetical scenarios to assess problem-solving skills."
        },
        {
          id: 20,
          question: "What measures workload standardization?",
          options: ["FTE", "ADR", "RevPAR", "PMS"],
          correctAnswer: 0,
          explanation: "FTE (Full-Time Equivalent) standardizes different work schedules for comparison and planning."
        }
      ]
    },

    // MODULE 4: Marketing and Sales in Hospitality
    {
      id: 4,
      title: "Hospitality Marketing and Sales Strategies",
      completed: false,
      content: `
# Module 4: Hospitality Marketing and Sales Strategies

Effective marketing and sales drive occupancy and revenue in competitive hospitality markets.

## Hospitality Marketing Fundamentals
Understanding what makes hospitality marketing unique.

**The hospitality marketing mix (8 Ps):**
1. **Product** - Rooms, amenities, services, experiences
2. **Price** - Rates, packages, value perception
3. **Place** - Distribution channels, location, accessibility
4. **Promotion** - Advertising, PR, promotions
5. **People** - Staff as part of the product
6. **Process** - Service delivery systems
7. **Physical evidence** - Property appearance, atmosphere
8. **Partnerships** - Strategic alliances and collaborations

**Unique aspects of hospitality marketing:**
- **Perishable inventory** - Unsold rooms cannot be stored
- **High fixed costs** - Costs exist regardless of occupancy
- **Intangible experience** - Selling promises and memories
- **Variable quality** - Service consistency challenges
- **Simultaneous production/consumption** - Service created and used simultaneously

## Target Market Identification
Focusing marketing efforts on the right guests.

**Primary hospitality market segments:**
- **Leisure travelers** - Vacationers, families, couples
- **Business travelers** - Corporate, meetings, conventions
- **Group business** - Weddings, reunions, conferences
- **Special interest** - Wellness, culinary, adventure
- **Local market** - Restaurant, spa, event guests

**Market segmentation criteria:**
- **Demographic** - Age, income, family status
- **Geographic** - Location, distance, climate preference
- **Psychographic** - Lifestyle, values, interests
- **Behavioral** - Travel purpose, loyalty, spending patterns

**Creating guest personas:**
- Name and photo representation
- Demographic details
- Travel motivations and preferences
- Communication channel preferences
- Pain points and objections
- Decision-making factors

## Brand Management in Hospitality
Building and maintaining a strong hospitality brand.

**Elements of hospitality brand:**
- **Brand identity** - Name, logo, visual elements
- **Brand positioning** - Unique value proposition
- **Brand personality** - Character and emotional appeal
- **Brand promise** - Consistent guest experience
- **Brand voice** - Communication style and tone

**Brand consistency across touchpoints:**
- Website and online presence
- Social media channels
- Physical property and signage
- Printed materials and collateral
- Staff interactions and service standards
- Guest communications and confirmations

**Managing online reputation:**
- Monitoring review sites regularly
- Responding to all reviews professionally
- Addressing negative feedback constructively
- Encouraging positive reviews from satisfied guests
- Using feedback for continuous improvement

## Digital Marketing for Hospitality
Reaching guests where they research and book.

**Hospitality website essentials:**
- High-quality professional photography
- Easy navigation and booking engine
- Clear room descriptions and amenities
- Special offers and packages display
- Mobile-responsive design
- Fast loading speeds

**Search engine optimization (SEO):**
- Location-based keywords (city + hotel type)
- Property-specific keywords (amenities, features)
- Local SEO for geographic targeting
- Content marketing with travel tips
- Technical SEO for site performance

**Social media strategy:**
- **Instagram** - Visual property showcase, guest photos
- **Facebook** - Community building, reviews, promotions
- **Twitter** - Customer service, real-time updates
- **LinkedIn** - B2B marketing, corporate partnerships
- **TikTok/Reels** - Behind-the-scenes, creative content

**Email marketing:**
- Welcome series for new subscribers
- Newsletter with property updates
- Special offer announcements
- Re-engagement campaigns for past guests
- Post-stay thank you and review requests

## Sales Management and Techniques
Structured sales processes maximize revenue.

**Hospitality sales funnel:**
1. **Awareness** - Potential guests discover property
2. **Consideration** - Research and comparison
3. **Decision** - Booking choice made
4. **Experience** - Stay and service delivery
5. **Loyalty** - Repeat business and referrals

**Direct sales techniques:**
- **Consultative selling** - Understanding needs first
- **Feature-benefit selling** - Explaining how features help guests
- **Value-based selling** - Focusing on total experience value
- **Upselling and cross-selling** - Enhancing guest experience

**Group sales process:**
1. **Prospecting** - Identifying potential groups
2. **Qualifying** - Assessing fit and potential
3. **Presenting** - Customized proposals
4. **Negotiating** - Terms and conditions
5. **Closing** - Contract signing
6. **Servicing** - Event execution
7. **Following up** - Post-event relationship

## Revenue Management Integration
Marketing and revenue management working together.

**Integrated pricing strategy:**
- Marketing communicates value
- Revenue management sets optimal rates
- Both departments share market intelligence
- Coordinated promotion timing
- Consistent messaging across channels

**Marketing's role in demand generation:**
- Creating campaigns for low-demand periods
- Targeting specific market segments
- Promoting shoulder season business
- Developing packages to increase spend
- Building brand to command premium pricing

**Measuring marketing effectiveness:**
- **Return on investment (ROI)** - Revenue generated vs. marketing spend
- **Cost per acquisition (CPA)** - Cost to acquire each booking
- **Channel performance** - Revenue by marketing channel
- **Conversion rates** - Website visitors to bookers
- **Guest lifetime value** - Long-term revenue from repeat guests

## Loyalty Programs
Encouraging repeat business and guest advocacy.

**Loyalty program types:**
- **Points-based** - Earn points for stays and spending
- **Tier-based** - Status levels with increasing benefits
- **Partnership-based** - Co-branded with airlines, credit cards
- **Subscription-based** - Annual fee for special benefits

**Loyalty program benefits:**
- Increased repeat business
- Higher guest lifetime value
- Valuable guest data collection
- Competitive differentiation
- Word-of-mouth marketing

**Effective loyalty program features:**
- Easy enrollment process
- Clear point earning structure
- Valuable and attainable rewards
- Personalized communications
- Tier recognition and perks
- Non-room benefits (F&B, spa, etc.)

## Partnership Development
Strategic alliances expand reach and offerings.

**Types of hospitality partnerships:**
- **Online travel agencies (OTAs)** - Booking.com, Expedia, etc.
- **Destination marketing organizations** - Tourism boards, CVBs
- **Local businesses** - Attractions, restaurants, services
- **Corporate accounts** - Volume business agreements
- **Wedding/event planners** - Referral relationships
- **Travel agents and tour operators** - Commission-based sales

**Managing partnership relationships:**
- Regular communication and updates
- Performance tracking and reporting
- Joint promotional activities
- Contract compliance and renewals
- Problem resolution processes

**Co-marketing opportunities:**
- Joint packages and promotions
- Cross-promotion on websites and social media
- Collaborative events and experiences
- Shared advertising campaigns
- Referral programs and incentives

Marketing and sales success requires understanding guest needs and communicating value effectively.
`,
      quiz: [
        {
          id: 1,
          question: "How many Ps are in the hospitality marketing mix?",
          options: ["4 Ps", "7 Ps", "8 Ps", "5 Ps"],
          correctAnswer: 2,
          explanation: "Hospitality uses 8 Ps: Product, Price, Place, Promotion, People, Process, Physical Evidence, Partnerships."
        },
        {
          id: 2,
          question: "What is perishable inventory in hospitality?",
          options: [
            "Food that spoils quickly",
            "Unsold rooms that cannot be stored",
            "Seasonal decorations",
            "Promotional materials"
          ],
          correctAnswer: 1,
          explanation: "Hotel rooms are perishable - if not sold tonight, that revenue opportunity is lost forever."
        },
        {
          id: 3,
          question: "What segment includes corporate travelers?",
          options: [
            "Leisure travelers",
            "Business travelers",
            "Group business",
            "Local market"
          ],
          correctAnswer: 1,
          explanation: "Business travelers include corporate individual travelers, meetings, and convention attendees."
        },
        {
          id: 4,
          question: "What is a guest persona?",
          options: [
            "Actual guest photo",
            "Fictional representation of target guest",
            "Employee playing guest",
            "Celebrity endorsement"
          ],
          correctAnswer: 1,
          explanation: "A guest persona is a fictional representation of an ideal guest type for marketing targeting."
        },
        {
          id: 5,
          question: "What manages online reputation?",
          options: [
            "Ignoring all reviews",
            "Monitoring and responding to reviews",
            "Only positive reviews",
            "Deleting negative comments"
          ],
          correctAnswer: 1,
          explanation: "Active monitoring and professional response to all reviews builds and protects online reputation."
        },
        {
          id: 6,
          question: "What is mobile-responsive design?",
          options: [
            "Website that works on mobile devices",
            "App for hotel services",
            "Mobile check-in system",
            "Text message marketing"
          ],
          correctAnswer: 0,
          explanation: "Mobile-responsive websites adjust layout and functionality for optimal viewing on smartphones and tablets."
        },
        {
          id: 7,
          question: "What does SEO stand for?",
          options: [
            "Service Excellence Optimization",
            "Search Engine Optimization",
            "Sales Efficiency Organization",
            "Standard Operating Environment"
          ],
          correctAnswer: 1,
          explanation: "SEO stands for Search Engine Optimization - improving website visibility in search engine results."
        },
        {
          id: 8,
          question: "What is the first stage of the sales funnel?",
          options: ["Decision", "Awareness", "Experience", "Loyalty"],
          correctAnswer: 1,
          explanation: "Awareness is first - potential guests must discover the property exists."
        },
        {
          id: 9,
          question: "What selling understands needs first?",
          options: [
            "Consultative selling",
            "Feature-benefit selling",
            "Value-based selling",
            "Hard selling"
          ],
          correctAnswer: 0,
          explanation: "Consultative selling focuses on understanding guest needs before presenting solutions."
        },
        {
          id: 10,
          question: "What does ROI measure?",
          options: [
            "Room occupancy index",
            "Return on investment",
            "Rate of interest",
            "Review quality index"
          ],
          correctAnswer: 1,
          explanation: "ROI measures marketing effectiveness: Revenue generated ÷ Marketing spend × 100."
        },
        {
          id: 11,
          question: "What loyalty program has status levels?",
          options: [
            "Points-based",
            "Tier-based",
            "Partnership-based",
            "Subscription-based"
          ],
          correctAnswer: 1,
          explanation: "Tier-based programs have different status levels (silver, gold, platinum) with increasing benefits."
        },
        {
          id: 12,
          question: "What does OTA stand for?",
          options: [
            "Official Travel Authorization",
            "Online Travel Agency",
            "Occupancy Tracking Application",
            "Operating Time Agreement"
          ],
          correctAnswer: 1,
          explanation: "OTA stands for Online Travel Agency - third-party booking platforms like Booking.com or Expedia."
        },
        {
          id: 13,
          question: "What is the hospitality product?",
          options: [
            "Just the guest room",
            "Rooms, amenities, services, experiences",
            "Only food and beverage",
            "Marketing materials"
          ],
          correctAnswer: 1,
          explanation: "The hospitality product includes everything from the physical room to the entire guest experience."
        },
        {
          id: 14,
          question: "What segmentation uses lifestyle and values?",
          options: [
            "Demographic",
            "Geographic",
            "Psychographic",
            "Behavioral"
          ],
          correctAnswer: 2,
          explanation: "Psychographic segmentation divides markets based on lifestyle, values, attitudes, and interests."
        },
        {
          id: 15,
          question: "What is brand positioning?",
          options: [
            "Physical location",
            "Unique value proposition",
            "Employee positions",
            "Market share"
          ],
          correctAnswer: 1,
          explanation: "Brand positioning defines how a property is uniquely valuable compared to competitors."
        },
        {
          id: 16,
          question: "What social platform is visual-focused?",
          options: ["Facebook", "Twitter", "Instagram", "LinkedIn"],
          correctAnswer: 2,
          explanation: "Instagram focuses on visual content, ideal for showcasing hotel aesthetics and guest experiences."
        },
        {
          id: 17,
          question: "What measures cost to acquire bookings?",
          options: ["ROI", "CPA", "RevPAR", "ADR"],
          correctAnswer: 1,
          explanation: "CPA (Cost Per Acquisition) measures marketing cost divided by number of bookings acquired."
        },
        {
          id: 18,
          question: "What involves joint promotions with partners?",
          options: [
            "Co-marketing",
            "Solo marketing",
            "Internal marketing",
            "Direct marketing"
          ],
          correctAnswer: 0,
          explanation: "Co-marketing involves collaborative promotional activities with strategic partners."
        },
        {
          id: 19,
          question: "What is the group sales closing stage?",
          options: [
            "Prospecting",
            "Contract signing",
            "Event execution",
            "Qualifying"
          ],
          correctAnswer: 1,
          explanation: "Closing involves signing contracts and securing deposits for group business."
        },
        {
          id: 20,
          question: "What program has annual fees for benefits?",
          options: [
            "Points-based loyalty",
            "Tier-based loyalty",
            "Subscription-based loyalty",
            "Partnership loyalty"
          ],
          correctAnswer: 2,
          explanation: "Subscription-based loyalty programs charge annual fees for exclusive benefits and privileges."
        }
      ]
    },

    // MODULE 5: Financial Management
    {
      id: 5,
      title: "Hospitality Financial Management",
      completed: false,
      content: `
# Module 5: Hospitality Financial Management

Financial acumen ensures hospitality operations remain profitable and sustainable.

## Hospitality Accounting Basics
Understanding hospitality-specific financial concepts.

**Key financial statements:**
- **Balance sheet** - Assets, liabilities, equity at a point in time
- **Income statement** - Revenue, expenses, profit over a period
- **Cash flow statement** - Cash inflows and outflows
- **Departmental statements** - Profitability by department

**Hospitality-specific accounting features:**
- **Daily reporting** - Night audit produces daily financials
- **Departmental accounting** - Separate tracking of revenue centers
- **Statistical reporting** - Occupancy, ADR, RevPAR metrics
- **Cost allocation** - Shared expenses distributed to departments

**Chart of accounts structure:**
- **Revenue accounts** - Room revenue, F&B revenue, other income
- **Cost of sales accounts** - Food cost, beverage cost
- **Payroll accounts** - Salaries, wages, benefits
- **Operating expenses** - Utilities, marketing, maintenance
- **Fixed charges** - Rent, property taxes, insurance
- **Management fees** - Franchise or management company fees

## Budgeting and Forecasting
Planning for financial success.

**Annual budgeting process:**
1. **Historical analysis** - Review past performance
2. **Market assessment** - Competitive and economic conditions
3. **Departmental input** - Managers provide estimates
4. **Revenue forecasting** - Projected occupancy and rates
5. **Expense budgeting** - Planned spending by department
6. **Capital budgeting** - Major purchases and renovations
7. **Approval and implementation** - Final review and execution

**Types of hospitality budgets:**
- **Operating budget** - Day-to-day revenue and expenses
- **Capital budget** - Major asset purchases and renovations
- **Cash flow budget** - Timing of cash inflows and outflows
- **Marketing budget** - Promotional spending plan
- **Departmental budgets** - Individual department plans

**Forecasting techniques:**
- **Historical trend analysis** - Using past patterns
- **Market-based forecasting** - Considering competition and demand
- **Seasonal adjustment** - Accounting for seasonal variations
- **Moving averages** - Smoothing out fluctuations
- **Regression analysis** - Statistical relationship modeling

## Revenue Management Principles
Maximizing revenue through strategic pricing.

**Revenue management foundations:**
- **Price elasticity** - How demand changes with price
- **Market segmentation** - Different rates for different markets
- **Length of stay controls** - Managing minimum stays
- **Yield management** - Selling right room to right customer at right price
- **Overbooking strategies** - Managing no-shows responsibly

**Key performance indicators (KPIs):**
- **Occupancy percentage** - Rooms sold ÷ Rooms available
- **Average daily rate (ADR)** - Room revenue ÷ Rooms sold
- **Revenue per available room (RevPAR)** - Room revenue ÷ Rooms available
- **Total revenue per available room (TRevPAR)** - Total revenue ÷ Rooms available
- **Gross operating profit per available room (GOPPAR)** - GOP ÷ Rooms available

**Pricing strategies:**
- **Competitive pricing** - Based on competitor rates
- **Cost-plus pricing** - Costs plus profit margin
- **Value-based pricing** - Based on perceived value
- **Dynamic pricing** - Changing based on demand
- **Package pricing** - Bundled offerings

## Cost Control and Analysis
Managing expenses without compromising quality.

**Major hospitality cost categories:**
- **Labor costs** - Wages, benefits, payroll taxes
- **Cost of goods sold** - Food, beverage, retail items
- **Operating expenses** - Utilities, supplies, marketing
- **Fixed costs** - Rent, insurance, property taxes
- **Management fees** - Franchise or management company

**Cost control techniques:**
- **Standard recipes** - Consistent food portioning
- **Purchase specifications** - Quality and quantity standards
- **Inventory management** - Regular counting and valuation
- **Energy management** - Conservation and efficiency
- **Preventive maintenance** - Reducing repair costs
- **Staff scheduling optimization** - Matching labor to demand

**Variance analysis:**
- **Revenue variances** - Actual vs. budgeted revenue
- **Expense variances** - Actual vs. budgeted expenses
- **Labor cost variances** - Hours and rate differences
- **Food cost variances** - Usage and price differences
- **Explanation and action** - Understanding causes and responding

## Profitability Analysis
Understanding what drives financial success.

**Departmental profitability:**
- **Rooms department** - Typically highest margin
- **Food and beverage** - Variable margins, important for overall experience
- **Other operated departments** - Spa, golf, retail
- **Rentals and other income** - Minor revenue streams

**Profit and loss statement analysis:**
- **Gross operating profit** - Revenue minus departmental expenses
- **House profit** - GOP minus undistributed operating expenses
- **Net operating income** - House profit minus fixed charges
- **Net income** - After all expenses including taxes and interest

**Benchmarking performance:**
- **Historical comparison** - Current vs. previous periods
- **Budget comparison** - Actual vs. planned performance
- **Competitive benchmarking** - Compared to similar properties
- **Industry averages** - Compared to industry standards

## Capital Investment Decisions
Making smart investment choices.

**Types of capital expenditures:**
- **Renovations and refurbishments** - Keeping property competitive
- **Equipment replacement** - Maintaining operational efficiency
- **Technology investments** - Improving systems and guest experience
- **Expansion projects** - Adding rooms or facilities
- **Sustainability investments** - Green initiatives with long-term savings

**Capital budgeting evaluation methods:**
- **Payback period** - Time to recover initial investment
- **Net present value (NPV)** - Current value of future cash flows
- **Internal rate of return (IRR)** - Project's effective return rate
- **Return on investment (ROI)** - Profit relative to investment

**Financing options:**
- **Internal funds** - Retained earnings
- **Bank loans** - Traditional financing
- **Equipment leasing** - Rather than purchasing
- **Vendor financing** - Supplier-provided financing
- **Partnership investments** - External equity investment

## Cash Flow Management
Ensuring sufficient cash for operations.

**Hospitality cash flow characteristics:**
- **Seasonal variations** - High and low season differences
- **Advance deposits** - Cash received before service delivery
- **Credit card collections** - Timing delay between charge and receipt
- **Payroll timing** - Regular large cash outflows
- **Vendor payments** - Managing payment terms

**Cash flow improvement strategies:**
- **Advance deposit policies** - Securing cash early
- **Credit management** - Monitoring guest credit
- **Inventory control** - Reducing tied-up cash
- **Vendor terms negotiation** - Extending payment periods
- **Revenue timing** - Encouraging early bookings

**Working capital management:**
- **Current ratio** - Current assets ÷ Current liabilities
- **Quick ratio** - (Current assets - Inventory) ÷ Current liabilities
- **Days sales outstanding** - Average collection period
- **Inventory turnover** - How quickly inventory sells

## Financial Reporting for Decision Making
Using financial data to guide management decisions.

**Management reports:**
- **Daily flash report** - Key metrics from previous day
- **Weekly performance report** - Trends and variances
- **Monthly financial package** - Complete financial statements
- **Departmental reports** - Individual department performance
- **Market segment reports** - Performance by guest type

**Financial ratios for hospitality:**
- **Profitability ratios** - Gross operating profit percentage, net profit margin
- **Liquidity ratios** - Current ratio, quick ratio
- **Efficiency ratios** - Occupancy percentage, RevPAR index
- **Solvency ratios** - Debt to equity, interest coverage

**Using financial data for decisions:**
- **Pricing decisions** - Based on costs and market conditions
- **Marketing investments** - ROI on promotional spending
- **Staffing levels** - Balancing service quality with labor costs
- **Capital investments** - Prioritizing projects with best returns
- **Operational changes** - Cost-benefit analysis of improvements

Financial management ensures hospitality operations remain profitable while delivering exceptional guest experiences.
`,
      quiz: [
        {
          id: 1,
          question: "What shows assets, liabilities, and equity?",
          options: [
            "Income statement",
            "Balance sheet",
            "Cash flow statement",
            "Departmental statement"
          ],
          correctAnswer: 1,
          explanation: "Balance sheet shows financial position at a point in time: Assets = Liabilities + Equity."
        },
        {
          id: 2,
          question: "What produces daily financials?",
          options: [
            "Morning meeting",
            "Night audit",
            "Accounting department",
            "Revenue manager"
          ],
          correctAnswer: 1,
          explanation: "Night audit process reconciles daily transactions and produces daily financial reports."
        },
        {
          id: 3,
          question: "What is the first step in annual budgeting?",
          options: [
            "Market assessment",
            "Historical analysis",
            "Departmental input",
            "Revenue forecasting"
          ],
          correctAnswer: 1,
          explanation: "Historical analysis reviews past performance as foundation for future budgeting."
        },
        {
          id: 4,
          question: "What budget plans major purchases?",
          options: [
            "Operating budget",
            "Capital budget",
            "Cash flow budget",
            "Marketing budget"
          ],
          correctAnswer: 1,
          explanation: "Capital budget plans for major asset purchases, renovations, and equipment replacements."
        },
        {
          id: 5,
          question: "What is ADR formula?",
          options: [
            "Room revenue ÷ Rooms available",
            "Room revenue ÷ Rooms sold",
            "Total revenue ÷ Rooms available",
            "Rooms sold ÷ Rooms available"
          ],
          correctAnswer: 1,
          explanation: "ADR = Room revenue ÷ Number of rooms sold (average rate per occupied room)."
        },
        {
          id: 6,
          question: "What pricing changes with demand?",
          options: [
            "Competitive pricing",
            "Dynamic pricing",
            "Cost-plus pricing",
            "Value-based pricing"
          ],
          correctAnswer: 1,
          explanation: "Dynamic pricing adjusts rates based on current and forecasted demand conditions."
        },
        {
          id: 7,
          question: "What controls food portioning?",
          options: [
            "Standard recipes",
            "Purchase specifications",
            "Inventory management",
            "Staff scheduling"
          ],
          correctAnswer: 0,
          explanation: "Standard recipes ensure consistent portion sizes, controlling food costs and quality."
        },
        {
          id: 8,
          question: "What analyzes actual vs. budget?",
          options: [
            "Variance analysis",
            "Trend analysis",
            "Regression analysis",
            "Market analysis"
          ],
          correctAnswer: 0,
          explanation: "Variance analysis compares actual performance to budgeted amounts and investigates differences."
        },
        {
          id: 9,
          question: "Which department typically has highest margins?",
          options: [
            "Food and beverage",
            "Rooms department",
            "Spa services",
            "Retail operations"
          ],
          correctAnswer: 1,
          explanation: "Rooms department typically has the highest profit margins in hotel operations."
        },
        {
          id: 10,
          question: "What evaluates time to recover investment?",
          options: [
            "Net present value",
            "Payback period",
            "Internal rate of return",
            "Return on investment"
          ],
          correctAnswer: 1,
          explanation: "Payback period calculates how long it takes to recover the initial investment amount."
        },
        {
          id: 11,
          question: "What shows revenue and expenses over time?",
          options: [
            "Balance sheet",
            "Income statement",
            "Cash flow statement",
            "Trial balance"
          ],
          correctAnswer: 1,
          explanation: "Income statement shows financial performance over a period: Revenue - Expenses = Profit."
        },
        {
          id: 12,
          question: "What is RevPAR formula?",
          options: [
            "Room revenue ÷ Rooms sold",
            "Room revenue ÷ Rooms available",
            "Total revenue ÷ Rooms sold",
            "Total revenue ÷ Rooms available"
          ],
          correctAnswer: 1,
          explanation: "RevPAR = Room revenue ÷ Total rooms available (measures revenue generation per available room)."
        },
        {
          id: 13,
          question: "What uses past patterns for forecasting?",
          options: [
            "Historical trend analysis",
            "Market-based forecasting",
            "Seasonal adjustment",
            "Regression analysis"
          ],
          correctAnswer: 0,
          explanation: "Historical trend analysis uses patterns from past performance to predict future results."
        },
        {
          id: 14,
          question: "What manages energy costs?",
          options: [
            "Energy management",
            "Labor scheduling",
            "Inventory control",
            "Preventive maintenance"
          ],
          correctAnswer: 0,
          explanation: "Energy management programs monitor and control utility consumption to reduce costs."
        },
        {
          id: 15,
          question: "What is GOP?",
          options: [
            "Gross operating profit",
            "General operating plan",
            "Government operating permit",
            "Guest orientation program"
          ],
          correctAnswer: 0,
          explanation: "GOP stands for Gross Operating Profit - revenue minus departmental and undistributed expenses."
        },
        {
          id: 16,
          question: "What calculates current value of future cash?",
          options: [
            "Payback period",
            "Net present value",
            "Internal rate of return",
            "Return on investment"
          ],
          correctAnswer: 1,
          explanation: "NPV calculates the current value of future cash flows, considering time value of money."
        },
        {
          id: 17,
          question: "What secures cash before service?",
          options: [
            "Advance deposit policies",
            "Credit management",
            "Vendor terms",
            "Inventory control"
          ],
          correctAnswer: 0,
          explanation: "Advance deposit policies require guests to pay deposits before arrival, improving cash flow."
        },
        {
          id: 18,
          question: "What is current ratio?",
          options: [
            "Current assets ÷ Current liabilities",
            "Current liabilities ÷ Current assets",
            "Total assets ÷ Total liabilities",
            "Revenue ÷ Current assets"
          ],
          correctAnswer: 0,
          explanation: "Current ratio = Current assets ÷ Current liabilities (measures short-term liquidity)."
        },
        {
          id: 19,
          question: "What reports key daily metrics?",
          options: [
            "Monthly financial package",
            "Daily flash report",
            "Weekly performance report",
            "Departmental reports"
          ],
          correctAnswer: 1,
          explanation: "Daily flash report provides key performance metrics from the previous operating day."
        },
        {
          id: 20,
          question: "What measures room sales percentage?",
          options: [
            "ADR",
            "Occupancy percentage",
            "RevPAR",
            "TRevPAR"
          ],
          correctAnswer: 1,
          explanation: "Occupancy percentage = Rooms sold ÷ Rooms available × 100 (percentage of rooms occupied)."
        }
      ]
    },

    // MODULE 6: Strategic Planning and Innovation
    {
      id: 6,
      title: "Strategic Planning and Innovation in Hospitality",
      completed: false,
      content: `
# Module 6: Strategic Planning and Innovation in Hospitality

Strategic thinking positions hospitality businesses for long-term success in changing markets.

## Strategic Planning Process
Systematic approach to setting direction and priorities.

**Strategic planning steps:**
1. **Environmental scanning** - Analyzing internal and external factors
2. **SWOT analysis** - Strengths, weaknesses, opportunities, threats
3. **Vision and mission development** - Defining purpose and direction
4. **Goal setting** - Specific, measurable objectives
5. **Strategy formulation** - How to achieve goals
6. **Implementation planning** - Action plans and resource allocation
7. **Monitoring and evaluation** - Tracking progress and adjusting

**Hospitality-specific strategic considerations:**
- **Location strategy** - Physical positioning and accessibility
- **Brand positioning** - Market segment focus and differentiation
- **Service strategy** - Level and style of service delivery
- **Revenue strategy** - Pricing and distribution approaches
- **Growth strategy** - Expansion or enhancement plans

## Environmental Analysis Tools
Understanding the operating context.

**PESTLE analysis for hospitality:**
- **Political** - Government policies, regulations, stability
- **Economic** - Economic growth, inflation, exchange rates
- **Social** - Demographic trends, lifestyle changes, travel patterns
- **Technological** - Innovations, automation, digital transformation
- **Legal** - Employment laws, safety regulations, licensing
- **Environmental** - Sustainability concerns, climate impact

**Competitive analysis:**
- **Direct competitors** - Similar properties in same location
- **Indirect competitors** - Alternative accommodation options
- **Competitive advantages** - Unique strengths vs. competitors
- **Market positioning** - How property is perceived relative to competitors
- **Competitive responses** - How competitors might react to changes

**Internal capability assessment:**
- **Resource analysis** - Physical, financial, human resources
- **Capability assessment** - Skills, systems, processes
- **Performance review** - Current financial and operational results
- **Culture evaluation** - Organizational values and norms
- **Stakeholder analysis** - Needs and expectations of various groups

## Goal Setting and Strategy Development
Turning analysis into actionable plans.

**SMART goals for hospitality:**
- **Specific** - Clear and precise objectives
- **Measurable** - Quantifiable targets
- **Achievable** - Realistic given resources
- **Relevant** - Aligned with overall mission
- **Time-bound** - Specific deadline for achievement

**Common hospitality strategic goals:**
- **Financial goals** - Revenue, profit, ROI targets
- **Market goals** - Occupancy, market share, guest mix
- **Quality goals** - Guest satisfaction scores, service standards
- **Operational goals** - Efficiency, cost control, productivity
- **Human resource goals** - Employee satisfaction, retention, development
- **Sustainability goals** - Environmental impact reduction

**Strategy types for hospitality:**
- **Growth strategies** - Market penetration, product development
- **Competitive strategies** - Cost leadership, differentiation, focus
- **Innovation strategies** - Service innovation, technology adoption
- **Collaboration strategies** - Partnerships, alliances, networks
- **Defensive strategies** - Crisis management, risk mitigation

## Innovation in Hospitality
Embracing change and new approaches.

**Areas for hospitality innovation:**
1. **Guest experience innovation** - New services, amenities, personalization
2. **Operational innovation** - Efficiency improvements, cost reductions
3. **Technology innovation** - Digital solutions, automation, data analytics
4. **Business model innovation** - New revenue streams, partnerships
5. **Sustainability innovation** - Environmental and social initiatives

**Innovation implementation process:**
1. **Idea generation** - Brainstorming, research, guest feedback
2. **Idea screening** - Feasibility and fit assessment
3. **Concept development** - Detailed proposals and prototypes
4. **Testing and validation** - Pilot programs and feedback collection
5. **Implementation** - Full-scale rollout
6. **Evaluation and improvement** - Performance measurement and refinement

**Creating innovation culture:**
- Encourage creative thinking and experimentation
- Reward innovative ideas and calculated risk-taking
- Provide resources for innovation projects
- Foster cross-departmental collaboration
- Learn from both successes and failures

## Change Management
Successfully implementing strategic changes.

**Change management principles:**
- **Clear communication** - Why change is needed, benefits, process
- **Leadership commitment** - Visible support from management
- **Staff involvement** - Participation in planning and implementation
- **Training and support** - Skills development for new approaches
- **Recognition and rewards** - Acknowledging adaptation and success

**Overcoming resistance to change:**
- Understand reasons for resistance
- Address concerns openly and honestly
- Demonstrate quick wins and benefits
- Provide adequate support during transition
- Be patient and persistent

**Monitoring change implementation:**
- Track progress against milestones
- Measure impact on key performance indicators
- Gather feedback from staff and guests
- Adjust approach based on results
- Celebrate successes and learn from challenges

## Crisis Management and Contingency Planning
Preparing for unexpected challenges.

**Common hospitality crises:**
- **Natural disasters** - Storms, earthquakes, floods
- **Health emergencies** - Pandemics, food safety issues
- **Security incidents** - Theft, violence, terrorism
- **Reputation crises** - Negative publicity, social media attacks
- **Operational failures** - Systems breakdowns, utility outages

**Crisis management framework:**
1. **Prevention** - Risk assessment and mitigation
2. **Preparation** - Plans, training, resources
3. **Response** - Immediate actions during crisis
4. **Recovery** - Returning to normal operations
5. **Learning** - Improving future preparedness

**Business continuity planning:**
- Identify critical operations and functions
- Develop backup systems and procedures
- Establish alternative supply chains
- Create communication protocols
- Train staff on emergency procedures
- Test plans through drills and simulations

## Future Trends in Hospitality
Anticipating and preparing for industry changes.

**Major hospitality trends:**
- **Personalization** - Tailored experiences using data and technology
- **Technology integration** - Smart rooms, mobile everything, AI
- **Sustainability focus** - Eco-friendly practices and guest expectations
- **Experience economy** - Unique, memorable, Instagrammable moments
- **Health and wellness** - Holistic wellbeing offerings
- **Workation blending** - Combining work and leisure travel
- **Local experiences** - Authentic connection to destination

**Strategic response to trends:**
- **Continuous learning** - Stay informed about industry developments
- **Flexible planning** - Adapt plans as trends evolve
- **Experimentation** - Test new approaches on small scale
- **Partnership development** - Collaborate with trend leaders
- **Investment prioritization** - Allocate resources to most promising trends

## Strategic Review and Adjustment
Keeping strategy relevant and effective.

**Regular strategy review process:**
- Quarterly performance reviews against strategic goals
- Annual comprehensive strategy reassessment
- Environmental scanning updates
- Stakeholder feedback incorporation
- Competitive position re-evaluation

**Strategy adjustment triggers:**
- Significant changes in market conditions
- New competitive threats or opportunities
- Performance consistently below targets
- Major internal changes (ownership, leadership)
- External shocks (economic, political, health)

**Strategic learning organization:**
- Capture and analyze performance data
- Document lessons from successes and failures
- Share knowledge across organization
- Encourage continuous improvement mindset
- Adapt based on experience and new information

Strategic planning and innovation ensure hospitality businesses thrive in present while preparing for future success.
`,
      quiz: [
        {
          id: 1,
          question: "What is the first step in strategic planning?",
          options: [
            "SWOT analysis",
            "Environmental scanning",
            "Goal setting",
            "Mission development"
          ],
          correctAnswer: 1,
          explanation: "Environmental scanning analyzes internal and external factors before strategy development."
        },
        {
          id: 2,
          question: "What does SWOT stand for?",
          options: [
            "Strengths, Weaknesses, Opportunities, Threats",
            "Service, Workforce, Operations, Technology",
            "Sales, Welcome, Organization, Training",
            "Strategy, Workflow, Objectives, Tactics"
          ],
          correctAnswer: 0,
          explanation: "SWOT analyzes internal Strengths and Weaknesses, external Opportunities and Threats."
        },
        {
          id: 3,
          question: "What does PESTLE analyze?",
          options: [
            "Internal operations",
            "External environment factors",
            "Financial performance",
            "Employee satisfaction"
          ],
          correctAnswer: 1,
          explanation: "PESTLE analyzes Political, Economic, Social, Technological, Legal, and Environmental factors."
        },
        {
          id: 4,
          question: "What does SMART stand for in goals?",
          options: [
            "Simple, Meaningful, Actionable, Relevant, Timely",
            "Specific, Measurable, Achievable, Relevant, Time-bound",
            "Strategic, Manageable, Attainable, Realistic, Trackable",
            "Structured, Motivating, Accountable, Responsible, Targeted"
          ],
          correctAnswer: 1,
          explanation: "SMART goals are Specific, Measurable, Achievable, Relevant, and Time-bound."
        },
        {
          id: 5,
          question: "What innovation area involves new services?",
          options: [
            "Guest experience innovation",
            "Operational innovation",
            "Technology innovation",
            "Business model innovation"
          ],
          correctAnswer: 0,
          explanation: "Guest experience innovation involves new services, amenities, and personalized experiences."
        },
        {
          id: 6,
          question: "What is first in innovation process?",
          options: [
            "Idea screening",
            "Idea generation",
            "Testing and validation",
            "Implementation"
          ],
          correctAnswer: 1,
          explanation: "Idea generation through brainstorming, research, and feedback starts the innovation process."
        },
        {
          id: 7,
          question: "What helps overcome change resistance?",
          options: [
            "Ignoring concerns",
            "Addressing concerns openly",
            "Forcing compliance",
            "Threatening job loss"
          ],
          correctAnswer: 1,
          explanation: "Addressing concerns openly and honestly helps overcome resistance to change."
        },
        {
          id: 8,
          question: "What is first in crisis management?",
          options: ["Response", "Prevention", "Recovery", "Learning"],
          correctAnswer: 1,
          explanation: "Prevention through risk assessment and mitigation is first in crisis management."
        },
        {
          id: 9,
          question: "What trend involves tailored experiences?",
          options: [
            "Personalization",
            "Automation",
            "Standardization",
            "Globalization"
          ],
          correctAnswer: 0,
          explanation: "Personalization uses data and technology to create tailored guest experiences."
        },
        {
          id: 10,
          question: "How often should strategy be reviewed?",
          options: [
            "Never after setting",
            "Only during crises",
            "Quarterly and annually",
            "Every 5 years only"
          ],
          correctAnswer: 2,
          explanation: "Quarterly performance reviews and annual comprehensive reassessment keep strategy relevant."
        },
        {
          id: 11,
          question: "What defines purpose and direction?",
          options: [
            "Vision and mission",
            "Goals and objectives",
            "Strategies and tactics",
            "Budgets and forecasts"
          ],
          correctAnswer: 0,
          explanation: "Vision (future aspiration) and mission (present purpose) define organizational direction."
        },
        {
          id: 12,
          question: "What analyzes similar properties nearby?",
          options: [
            "Direct competitors analysis",
            "Indirect competitors analysis",
            "Market positioning",
            "Environmental scanning"
          ],
          correctAnswer: 0,
          explanation: "Direct competitors analysis examines similar hospitality properties in the same location."
        },
        {
          id: 13,
          question: "What strategy focuses on cost advantage?",
          options: [
            "Differentiation strategy",
            "Cost leadership strategy",
            "Focus strategy",
            "Innovation strategy"
          ],
          correctAnswer: 1,
          explanation: "Cost leadership strategy competes by having lower costs than competitors."
        },
        {
          id: 14,
          question: "What innovation improves efficiency?",
          options: [
            "Guest experience innovation",
            "Operational innovation",
            "Technology innovation",
            "Business model innovation"
          ],
          correctAnswer: 1,
          explanation: "Operational innovation focuses on efficiency improvements and cost reductions."
        },
        {
          id: 15,
          question: "What is key for change success?",
          options: [
            "Secret planning",
            "Leadership commitment",
            "Avoiding staff input",
            "Sudden implementation"
          ],
          correctAnswer: 1,
          explanation: "Visible support and commitment from leadership is crucial for successful change implementation."
        },
        {
          id: 16,
          question: "What plans for returning to normal after crisis?",
          options: ["Prevention", "Preparation", "Response", "Recovery"],
          correctAnswer: 3,
          explanation: "Recovery phase involves returning to normal operations after a crisis has passed."
        },
        {
          id: 17,
          question: "What combines work and leisure travel?",
          options: [
            "Workation blending",
            "Personalization",
            "Sustainability focus",
            "Local experiences"
          ],
          correctAnswer: 0,
          explanation: "Workation blending combines remote work with leisure travel experiences."
        },
        {
          id: 18,
          question: "What adjusts strategy based on performance?",
          options: [
            "Strategic learning organization",
            "Rigid planning approach",
            "Annual review only",
            "Ignoring failures"
          ],
          correctAnswer: 0,
          explanation: "Strategic learning organizations adapt based on experience, data, and changing conditions."
        },
        {
          id: 19,
          question: "What analyzes economic factors?",
          options: [
            "P in PESTLE",
            "E in PESTLE",
            "S in PESTLE",
            "T in PESTLE"
          ],
          correctAnswer: 1,
          explanation: "E in PESTLE analyzes Economic factors like growth, inflation, and exchange rates."
        },
        {
          id: 20,
          question: "What is tested through pilot programs?",
          options: [
            "Established procedures",
            "Innovation concepts",
            "Employee performance",
            "Guest complaints"
          ],
          correctAnswer: 1,
          explanation: "Innovation concepts are tested through pilot programs before full implementation."
        }
      ]
    }
  ],

  // FINAL EXAM (40 questions covering all modules)
  finalExam: {
    title: "Hospitality Management Diploma Final Examination",
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: "What are the three pillars of hospitality leadership?",
        options: [
          "Marketing, Operations, Finance",
          "Guest Experience, Team, Business Leadership",
          "Front Office, Housekeeping, F&B",
          "Planning, Organizing, Controlling"
        ],
        correctAnswer: 1,
        explanation: "The three pillars are Guest Experience Leadership, Team Leadership, and Business Leadership."
      },
      {
        id: 2,
        question: "What does ADR measure?",
        options: [
          "Average daily revenue",
          "Average daily rate",
          "Annual department revenue",
          "Available daily rooms"
        ],
        correctAnswer: 1,
        explanation: "ADR stands for Average Daily Rate - average revenue per occupied room per day."
      },
      {
        id: 3,
        question: "What does FTE stand for?",
        options: [
          "Full-Time Employee",
          "Full-Time Equivalent",
          "Future Training Estimate",
          "Financial Target Expectation"
        ],
        correctAnswer: 1,
        explanation: "FTE stands for Full-Time Equivalent - standardized workload measurement."
      },
      {
        id: 4,
        question: "How many Ps in hospitality marketing mix?",
        options: ["4 Ps", "7 Ps", "8 Ps", "5 Ps"],
        correctAnswer: 2,
        explanation: "Hospitality uses 8 Ps: Product, Price, Place, Promotion, People, Process, Physical Evidence, Partnerships."
      },
      {
        id: 5,
        question: "What shows assets and liabilities?",
        options: [
          "Income statement",
          "Balance sheet",
          "Cash flow statement",
          "Budget"
        ],
        correctAnswer: 1,
        explanation: "Balance sheet shows financial position: Assets = Liabilities + Equity."
      },
      {
        id: 6,
        question: "What is first in strategic planning?",
        options: [
          "SWOT analysis",
          "Environmental scanning",
          "Goal setting",
          "Mission development"
        ],
        correctAnswer: 1,
        explanation: "Environmental scanning analyzes internal/external factors before strategy development."
      },
      {
        id: 7,
        question: "Which leadership style inspires exceeding expectations?",
        options: [
          "Transactional",
          "Transformational",
          "Servant",
          "Autocratic"
        ],
        correctAnswer: 1,
        explanation: "Transformational leadership inspires staff to exceed expectations and creates vision."
      },
      {
        id: 8,
        question: "Who handles public areas in housekeeping?",
        options: [
          "Room attendants",
          "Housepersons",
          "Inspectors",
          "Laundry staff"
        ],
        correctAnswer: 1,
        explanation: "Housepersons handle linens, supplies, and public area cleaning."
      },
      {
        id: 9,
        question: "What training introduces company values?",
        options: [
          "Technical training",
          "Orientation training",
          "Safety training",
          "Cross-training"
        ],
        correctAnswer: 1,
        explanation: "Orientation training introduces company history, values, and culture to new employees."
      },
      {
        id: 10,
        question: "What is perishable inventory?",
        options: [
          "Food that spoils",
          "Unsold rooms that cannot be stored",
          "Seasonal items",
          "Promotional materials"
        ],
        correctAnswer: 1,
        explanation: "Hotel rooms are perishable - if not sold, the revenue opportunity is lost forever."
      },
      {
        id: 11,
        question: "What is RevPAR formula?",
        options: [
          "Room revenue ÷ Rooms sold",
          "Room revenue ÷ Rooms available",
          "Total revenue ÷ Rooms sold",
          "Total revenue ÷ Rooms available"
        ],
        correctAnswer: 1,
        explanation: "RevPAR = Room revenue ÷ Total rooms available."
      },
      {
        id: 12,
        question: "What does SWOT analyze?",
        options: [
          "Only internal factors",
          "Only external factors",
          "Internal strengths/weaknesses, external opportunities/threats",
          "Financial performance only"
        ],
        correctAnswer: 2,
        explanation: "SWOT analyzes internal Strengths/Weaknesses and external Opportunities/Threats."
      },
      {
        id: 13,
        question: "What is the first team development stage?",
        options: ["Storming", "Norming", "Forming", "Performing"],
        correctAnswer: 2,
        explanation: "Forming is first stage where team comes together, members are polite but cautious."
      },
      {
        id: 14,
        question: "What does PMS stand for in hospitality?",
        options: [
          "Property Management System",
          "Preventive Maintenance Schedule",
          "Performance Measurement System",
          "Personnel Management Software"
        ],
        correctAnswer: 0,
        explanation: "PMS stands for Property Management System - central software for hotel operations."
      },
      {
        id: 15,
        question: "What uses input from multiple sources?",
        options: [
          "Self-assessment",
          "360-degree feedback",
          "Management by objectives",
          "Critical incident method"
        ],
        correctAnswer: 1,
        explanation: "360-degree feedback gathers input from supervisors, peers, subordinates, and sometimes guests."
      },
      {
        id: 16,
        question: "What is a guest persona?",
        options: [
          "Actual guest",
          "Fictional representation of target guest",
          "Employee playing guest",
          "Mystery shopper"
        ],
        correctAnswer: 1,
        explanation: "Guest persona is fictional representation of ideal guest type for marketing targeting."
      },
      {
        id: 17,
        question: "What is first in annual budgeting?",
        options: [
          "Market assessment",
          "Historical analysis",
          "Departmental input",
          "Revenue forecasting"
        ],
        correctAnswer: 1,
        explanation: "Historical analysis reviews past performance as foundation for future budgeting."
      },
      {
        id: 18,
        question: "What does PESTLE analyze?",
        options: [
          "Internal operations",
          "External environment factors",
          "Employee performance",
          "Guest satisfaction"
        ],
        correctAnswer: 1,
        explanation: "PESTLE analyzes Political, Economic, Social, Technological, Legal, Environmental factors."
      },
      {
        id: 19,
        question: "What does DECIDE framework start with?",
        options: [
          "Establish criteria",
          "Define problem",
          "Consider alternatives",
          "Develop plan"
        ],
        correctAnswer: 1,
        explanation: "In DECIDE framework, 'D' stands for Define the problem or opportunity."
      },
      {
        id: 20,
        question: "What handles preventive maintenance?",
        options: [
          "Emergency repairs",
          "Scheduled equipment servicing",
          "Guest complaints",
          "Room cleaning"
        ],
        correctAnswer: 1,
        explanation: "Preventive maintenance involves scheduled servicing to prevent equipment failures."
      },
      {
        id: 21,
        question: "What interview asks about past experiences?",
        options: [
          "Situational interview",
          "Behavioral interview",
          "Role-playing interview",
          "Practical test"
        ],
        correctAnswer: 1,
        explanation: "Behavioral interviews ask 'Tell me about a time when...' to predict future performance."
      },
      {
        id: 22,
        question: "What does OTA stand for?",
        options: [
          "Official Travel Authorization",
          "Online Travel Agency",
          "Occupancy Tracking Application",
          "Operating Time Agreement"
        ],
        correctAnswer: 1,
        explanation: "OTA stands for Online Travel Agency - third-party booking platforms."
      },
      {
        id: 23,
        question: "What pricing changes with demand?",
        options: [
          "Competitive pricing",
          "Dynamic pricing",
          "Cost-plus pricing",
          "Value-based pricing"
        ],
        correctAnswer: 1,
        explanation: "Dynamic pricing adjusts rates based on current and forecasted demand conditions."
      },
      {
        id: 24,
        question: "What does SMART stand for in goals?",
        options: [
          "Simple, Meaningful, Actionable, Relevant, Timely",
          "Specific, Measurable, Achievable, Relevant, Time-bound",
          "Strategic, Manageable, Attainable, Realistic, Trackable",
          "Structured, Motivating, Accountable, Responsible, Targeted"
        ],
        correctAnswer: 1,
        explanation: "SMART goals are Specific, Measurable, Achievable, Relevant, and Time-bound."
      },
      {
        id: 25,
        question: "What is servant leadership?",
        options: [
          "Leading by serving others first",
          "Giving orders to servants",
          "Managing only service staff",
          "Working service positions"
        ],
        correctAnswer: 0,
        explanation: "Servant leadership puts team needs first and leads by serving others."
      },
      {
        id: 26,
        question: "What controls food portions?",
        options: [
          "Standard recipes",
          "Purchase specifications",
          "Inventory management",
          "Staff scheduling"
        ],
        correctAnswer: 0,
        explanation: "Standard recipes ensure consistent portion sizes, controlling food costs and quality."
      },
      {
        id: 27,
        question: "What measures cost to acquire bookings?",
        options: ["ROI", "CPA", "RevPAR", "ADR"],
        correctAnswer: 1,
        explanation: "CPA (Cost Per Acquisition) measures marketing cost per booking acquired."
      },
      {
        id: 28,
        question: "What evaluates time to recover investment?",
        options: [
          "Net present value",
          "Payback period",
          "Internal rate of return",
          "Return on investment"
        ],
        correctAnswer: 1,
        explanation: "Payback period calculates how long to recover initial investment amount."
      },
      {
        id: 29,
        question: "What innovation involves new services?",
        options: [
          "Guest experience innovation",
          "Operational innovation",
          "Technology innovation",
          "Business model innovation"
        ],
        correctAnswer: 0,
        explanation: "Guest experience innovation involves new services, amenities, and personalization."
      },
      {
        id: 30,
        question: "What is first in crisis management?",
        options: ["Response", "Prevention", "Recovery", "Learning"],
        correctAnswer: 1,
        explanation: "Prevention through risk assessment is first in crisis management."
      },
      {
        id: 31,
        question: "How many communication channels must leaders master?",
        options: ["Two", "Three", "Four", "Five"],
        correctAnswer: 2,
        explanation: "Four channels: Upward, Downward, Lateral, and External communication."
      },
      {
        id: 32,
        question: "What is stayover service?",
        options: [
          "Check-out cleaning",
          "Daily cleaning for occupied rooms",
          "Deep cleaning",
          "Public area cleaning"
        ],
        correctAnswer: 1,
        explanation: "Stayover service is daily cleaning for rooms with guests staying additional nights."
      },
      {
        id: 33,
        question: "What is first in progressive discipline?",
        options: [
          "Written warning",
          "Suspension",
          "Verbal warning",
          "Termination"
        ],
        correctAnswer: 2,
        explanation: "Progressive discipline typically begins with informal verbal warning."
      },
      {
        id: 34,
        question: "What segment includes corporate travelers?",
        options: [
          "Leisure travelers",
          "Business travelers",
          "Group business",
          "Local market"
        ],
        correctAnswer: 1,
        explanation: "Business travelers include corporate individual travelers and meetings."
      },
      {
        id: 35,
        question: "What analyzes actual vs. budget?",
        options: [
          "Variance analysis",
          "Trend analysis",
          "Regression analysis",
          "Market analysis"
        ],
        correctAnswer: 0,
        explanation: "Variance analysis compares actual performance to budgeted amounts."
      },
      {
        id: 36,
        question: "What is first in innovation process?",
        options: [
          "Idea screening",
          "Idea generation",
          "Testing and validation",
          "Implementation"
        ],
        correctAnswer: 1,
        explanation: "Idea generation through brainstorming starts innovation process."
      },
      {
        id: 37,
        question: "Which department has highest margins typically?",
        options: [
          "Food and beverage",
          "Rooms department",
          "Spa services",
          "Retail operations"
        ],
        correctAnswer: 1,
        explanation: "Rooms department typically has highest profit margins in hotel operations."
      },
      {
        id: 38,
        question: "What helps overcome change resistance?",
        options: [
          "Ignoring concerns",
          "Addressing concerns openly",
          "Forcing compliance",
          "Threatening job loss"
        ],
        correctAnswer: 1,
        explanation: "Addressing concerns openly helps overcome resistance to change."
      },
      {
        id: 39,
        question: "What is current ratio formula?",
        options: [
          "Current assets ÷ Current liabilities",
          "Current liabilities ÷ Current assets",
          "Total assets ÷ Total liabilities",
          "Revenue ÷ Current assets"
        ],
        correctAnswer: 0,
        explanation: "Current ratio = Current assets ÷ Current liabilities (measures liquidity)."
      },
      {
        id: 40,
        question: "What trend involves tailored experiences?",
        options: [
          "Personalization",
          "Automation",
          "Standardization",
          "Globalization"
        ],
        correctAnswer: 0,
        explanation: "Personalization uses data and technology to create tailored guest experiences."
      }
    ]
  }
};

export default hospitalityManagementDiploma;
