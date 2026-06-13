// corporate-security-diploma.ts
export const corporateSecurityDiploma = {
  id: "corporate-security-diploma",
  title: "Corporate Security (Diploma)",
  description: "Advanced corporate security management focusing on executive protection, cybersecurity integration, crisis management, investigations, legal compliance, and global security operations for enterprise-level protection.",
  duration: "8 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  icon: "🏢",
  badge: "Diploma",
  prerequisite: "security-management-certificate",
  
  modules: [
    {
      id: 1,
      title: "Advanced Corporate Security Strategy",
      completed: false,
      content: `
## **Module 1: Advanced Corporate Security Strategy**

### **Corporate Security Framework**
Corporate security operates within a structured framework that aligns security initiatives with business objectives while managing enterprise-wide risks.

**Strategic Security Alignment:**
- Integration with corporate governance structures
- Alignment with business goals and objectives
- Resource allocation based on business impact
- Security as business enabler, not just cost center
- Board-level security reporting and accountability

**Enterprise Security Architecture:**
- **Governance Layer:** Policies, standards, compliance
- **Management Layer:** Risk management, programs, audits
- **Operational Layer:** Daily security operations
- **Technical Layer:** Security technologies and controls
- **Physical Layer:** Facilities and asset protection

**Security Maturity Models:**
- **Level 1: Initial** - Ad hoc, reactive approaches
- **Level 2: Managed** - Basic processes established
- **Level 3: Defined** - Standardized across organization
- **Level 4: Quantitatively Managed** - Measured and controlled
- **Level 5: Optimizing** - Continuous improvement focus

### **Security Governance and Leadership**
Effective corporate security requires strong governance structures and leadership commitment.

**Board-Level Security Oversight:**
- Security committee establishment
- Regular security briefings to board
- Risk appetite definition and monitoring
- Budget approval and oversight
- Strategic direction setting

**Chief Security Officer (CSO) Role:**
- Enterprise-wide security strategy development
- Cross-functional team leadership
- Executive stakeholder management
- Security investment justification
- Crisis management leadership

**Security Steering Committees:**
- Cross-departmental representation
- Regular review of security initiatives
- Resource allocation decisions
- Policy approval and updates
- Incident response coordination

**Security Metrics and Reporting:**
- Key Performance Indicators (KPIs)
- Key Risk Indicators (KRIs)
- Security dashboard development
- Executive-level reporting formats
- Trend analysis and forecasting

### **Security Program Management**
Managing comprehensive security programs requires structured approaches and methodologies.

**Program Development Lifecycle:**
1. **Assessment:** Current state analysis and gap identification
2. **Planning:** Strategy development and roadmap creation
3. **Design:** Detailed program architecture and controls
4. **Implementation:** Rollout and deployment
5. **Operation:** Daily management and monitoring
6. **Evaluation:** Performance measurement and improvement

**Security Program Components:**
- **Physical Security Program:** Facilities protection
- **Information Security Program:** Data and system protection
- **Personnel Security Program:** Employee vetting and management
- **Operational Security Program:** Business process protection
- **Crisis Management Program:** Emergency response capabilities

**Program Integration Strategies:**
- Unified security policies and standards
- Integrated security operations centers
- Cross-functional security teams
- Shared security technologies and platforms
- Consolidated security reporting

### **Budgeting and Resource Management**
Corporate security requires strategic resource allocation and financial management.

**Security Budget Development:**
- Alignment with risk assessment results
- Consideration of regulatory requirements
- Benchmarking against industry standards
- Multi-year planning horizons
- Contingency funding for emerging threats

**Cost-Benefit Analysis:**
- Return on Security Investment (ROSI) calculations
- Total Cost of Ownership (TCO) considerations
- Risk reduction quantification
- Business impact analysis
- Alternative control evaluation

**Resource Optimization Strategies:**
- Outsourcing vs. insourcing decisions
- Technology vs. personnel balance
- Centralized vs. decentralized models
- Shared services approaches
- Vendor management frameworks

**Financial Justification Techniques:**
- Business case development
- Executive presentation skills
- Financial metric translation
- Risk quantification methods
- Value demonstration approaches

### **Vendor and Partner Security Management**
Third-party relationships introduce additional security risks requiring specific management approaches.

**Third-Party Risk Management Framework:**
- Vendor risk assessment methodologies
- Security requirement definition
- Contractual security provisions
- Ongoing monitoring and auditing
- Incident response coordination

**Supply Chain Security:**
- End-to-end security assessment
- Critical supplier identification
- Security standards enforcement
- Transportation and logistics protection
- Continuity planning coordination

**Cloud Service Security:**
- Cloud security shared responsibility model
- Service level agreement (SLA) security provisions
- Data protection and privacy requirements
- Access control and monitoring
- Exit strategy and data portability

**Managed Security Service Providers (MSSPs):**
- Scope of services definition
- Performance measurement and monitoring
- Service integration requirements
- Escalation procedures
- Contract management and renewal

### **Security Culture Development**
Building security-aware culture across the organization enhances protection effectiveness.

**Cultural Transformation Strategies:**
- Executive sponsorship and modeling
- Employee engagement programs
- Recognition and reward systems
- Continuous communication campaigns
- Behavioral change management

**Awareness Program Components:**
- Role-based training content
- Regular security communications
- Phishing simulation exercises
- Security champion networks
- Metrics and measurement approaches

**Measuring Security Culture:**
- Employee surveys and feedback
- Security incident analysis
- Policy compliance monitoring
- Training participation rates
- Behavioral observation programs

**Sustaining Security Culture:**
- Integration with performance management
- Regular program refreshment
- Success recognition and celebration
- Cross-departmental collaboration
- Continuous improvement focus

Advanced corporate security strategy requires balancing protection needs with business objectives while building sustainable, effective security programs aligned with organizational goals and culture.
`,
      quiz: [
        {
          id: 1,
          question: "What is strategic security alignment?",
          options: [
            "Integrating security with business goals and governance",
            "Only technical security measures",
            "Only physical security planning",
            "Only compliance requirements"
          ],
          correctAnswer: 0,
          explanation: "Strategic alignment ensures security initiatives support business objectives and integrate with corporate governance."
        },
        {
          id: 2,
          question: "What does the CSO role involve?",
          options: [
            "Enterprise-wide security strategy and leadership",
            "Only physical security management",
            "Only technical security implementation",
            "Only employee screening"
          ],
          correctAnswer: 0,
          explanation: "The Chief Security Officer leads enterprise security strategy, cross-functional teams, and executive stakeholder management."
        },
        {
          id: 3,
          question: "What are security maturity model levels?",
          options: [
            "Progressive stages from ad-hoc to optimized security",
            "Only budget levels",
            "Only staff size categories",
            "Only technology sophistication"
          ],
          correctAnswer: 0,
          explanation: "Maturity models describe progressive stages of security program development from initial to optimizing levels."
        },
        {
          id: 4,
          question: "What is security program lifecycle?",
          options: [
            "Assessment, planning, design, implementation, operation, evaluation",
            "Only implementation phase",
            "Only daily operations",
            "Only emergency response"
          ],
          correctAnswer: 0,
          explanation: "The lifecycle includes assessment, planning, design, implementation, operation, and evaluation phases."
        },
        {
          id: 5,
          question: "What is ROSI?",
          options: [
            "Return on Security Investment calculation",
            "Only security budget",
            "Only risk assessment",
            "Only compliance cost"
          ],
          correctAnswer: 0,
          explanation: "ROSI helps quantify the financial return from security investments by comparing costs to risk reduction benefits."
        },
        {
          id: 6,
          question: "What is third-party risk management?",
          options: [
            "Managing security risks from vendors and partners",
            "Only employee risks",
            "Only physical risks",
            "Only technical risks"
          ],
          correctAnswer: 0,
          explanation: "Third-party risk management addresses security risks introduced by vendors, suppliers, and business partners."
        },
        {
          id: 7,
          question: "What are security steering committees?",
          options: [
            "Cross-departmental groups overseeing security initiatives",
            "Only security department meetings",
            "Only executive meetings",
            "Only technical teams"
          ],
          correctAnswer: 0,
          explanation: "Steering committees provide cross-functional oversight, resource allocation, and strategic direction for security."
        },
        {
          id: 8,
          question: "What is enterprise security architecture?",
          options: [
            "Layered framework from governance to physical controls",
            "Only building design",
            "Only network design",
            "Only policy documents"
          ],
          correctAnswer: 0,
          explanation: "Enterprise architecture includes governance, management, operational, technical, and physical security layers."
        },
        {
          id: 9,
          question: "What are security KPIs?",
          options: [
            "Key Performance Indicators measuring security effectiveness",
            "Only financial metrics",
            "Only staff numbers",
            "Only incident counts"
          ],
          correctAnswer: 0,
          explanation: "KPIs measure security program performance, effectiveness, and alignment with business objectives."
        },
        {
          id: 10,
          question: "What is security culture development?",
          options: [
            "Building security awareness and behaviors across organization",
            "Only security training",
            "Only policy enforcement",
            "Only technical controls"
          ],
          correctAnswer: 0,
          explanation: "Security culture development involves transforming organizational behaviors and attitudes toward security."
        },
        {
          id: 11,
          question: "What is board-level security oversight?",
          options: [
            "Board committee responsibility for security governance",
            "Only management responsibility",
            "Only security department",
            "Only compliance team"
          ],
          correctAnswer: 0,
          explanation: "Board oversight includes risk appetite definition, budget approval, and strategic direction for security."
        },
        {
          id: 12,
          question: "What are program integration strategies?",
          options: [
            "Unified approaches across security domains",
            "Only physical security",
            "Only information security",
            "Only separate programs"
          ],
          correctAnswer: 0,
          explanation: "Integration strategies create unified security approaches across different protection domains."
        },
        {
          id: 13,
          question: "What is cost-benefit analysis in security?",
          options: [
            "Comparing security investment costs to risk reduction benefits",
            "Only cost minimization",
            "Only benefit maximization",
            "Only budget compliance"
          ],
          correctAnswer: 0,
          explanation: "Cost-benefit analysis helps justify security investments by quantifying risk reduction versus costs."
        },
        {
          id: 14,
          question: "What is supply chain security?",
          options: [
            "End-to-end protection of goods and services flow",
            "Only warehouse security",
            "Only transportation security",
            "Only supplier selection"
          ],
          correctAnswer: 0,
          explanation: "Supply chain security protects the entire flow of goods, information, and services from origin to destination."
        },
        {
          id: 15,
          question: "What measures security culture?",
          options: [
            "Surveys, incident analysis, compliance monitoring",
            "Only training attendance",
            "Only policy counts",
            "Only budget size"
          ],
          correctAnswer: 0,
          explanation: "Culture measurement uses surveys, behavioral observations, incident patterns, and compliance data."
        },
        {
          id: 16,
          question: "What is security governance?",
          options: [
            "Framework for security decision-making and accountability",
            "Only security operations",
            "Only technical controls",
            "Only emergency response"
          ],
          correctAnswer: 0,
          explanation: "Governance establishes decision-making structures, policies, standards, and accountability frameworks."
        },
        {
          id: 17,
          question: "What are security program components?",
          options: [
            "Physical, information, personnel, operational, crisis programs",
            "Only technical programs",
            "Only physical programs",
            "Only compliance programs"
          ],
          correctAnswer: 0,
          explanation: "Comprehensive programs address physical assets, information, people, operations, and crisis management."
        },
        {
          id: 18,
          question: "What is vendor risk assessment?",
          options: [
            "Evaluating security risks from third-party relationships",
            "Only price evaluation",
            "Only service quality",
            "Only delivery timing"
          ],
          correctAnswer: 0,
          explanation: "Vendor risk assessment evaluates potential security risks introduced by external service providers."
        },
        {
          id: 19,
          question: "What are security dashboard requirements?",
          options: [
            "Executive-level visualization of key security metrics",
            "Only technical details",
            "Only incident logs",
            "Only staff schedules"
          ],
          correctAnswer: 0,
          explanation: "Dashboards provide executive-friendly visualizations of security status, trends, and performance indicators."
        },
        {
          id: 20,
          question: "What sustains security culture?",
          options: [
            "Integration with performance management and continuous improvement",
            "Only initial training",
            "Only policy distribution",
            "Only technical controls"
          ],
          correctAnswer: 0,
          explanation: "Sustainable culture requires integration with business processes, recognition systems, and ongoing reinforcement."
        }
      ]
    },
    {
      id: 2,
      title: "Executive Protection and Specialized Security",
      completed: false,
      content: `
## **Module 2: Executive Protection and Specialized Security**

### **Executive Protection Fundamentals**
Executive protection (EP) involves specialized security measures to protect high-profile individuals from threats and ensure their safety.

**Protection Philosophy:**
- **Low-profile approach:** Minimizing visibility while maintaining effectiveness
- **Layered protection:** Multiple security rings around protectee
- **Advance work:** Thorough preparation before protectee arrival
- **Continuous assessment:** Ongoing threat evaluation and adaptation
- **Discretion and professionalism:** Maintaining appropriate boundaries

**Protection Team Structure:**
- **Protection Lead:** Overall coordination and decision-making
- **Close Protection Officers (CPOs):** Immediate proximity protection
- **Advance Team:** Location preparation and security assessment
- **Drivers:** Secure transportation and route management
- **Intelligence Analysts:** Threat monitoring and assessment

**Protection Levels:**
- **Basic Protection:** Low-threat environments with minimal visibility
- **Enhanced Protection:** Moderate threat levels with visible presence
- **High-Risk Protection:** Significant threats requiring extensive measures
- **Maximum Protection:** Extreme threat environments with comprehensive security

### **Threat Assessment for Executives**
Understanding specific threats against individuals guides protection planning.

**Executive Threat Profiles:**
- **Public Figure Threats:** Media attention, stalkers, protesters
- **Corporate Executive Threats:** Competitor intelligence, activist targeting
- **High-Net-Worth Individual Threats:** Kidnapping, extortion, burglary
- **Political Figure Threats:** Terrorism, assassination attempts
- **Celebrity Threats:** Obsessive fans, paparazzi, intrusion

**Threat Assessment Methodology:**
1. **Identify:** Determine potential adversaries and capabilities
2. **Assess:** Evaluate likelihood and potential impact
3. **Analyze:** Understand motives and methods
4. **Prioritize:** Rank threats by severity and probability
5. **Mitigate:** Develop protective countermeasures

**Risk Factors for Executives:**
- Public visibility and media exposure
- Controversial business or political positions
- Travel to high-risk locations
- Family member vulnerabilities
- Previous threat history

### **Protective Operations Planning**
Comprehensive planning ensures effective protection during all activities.

**Advance Security Surveys:**
- Location vulnerability assessment
- Route analysis and selection
- Safe room identification
- Emergency egress planning
- Local resource verification

**Transportation Security:**
- Armored vehicle specifications and capabilities
- Route planning and alternates
- Driver training and qualifications
- Vehicle maintenance and inspection
- Emergency response capabilities

**Residential Security:**
- Perimeter protection systems
- Access control measures
- Safe room construction
- Alarm and monitoring systems
- Staff security training

**Travel Security Protocols:**
- Pre-travel intelligence gathering
- Hotel security arrangements
- Meeting venue assessments
- Local law enforcement coordination
- Emergency medical preparations

### **Protective Techniques and Procedures**
Specialized skills and procedures ensure effective protection.

**Protective Formations:**
- **Diamond Formation:** 360-degree protection during movement
- **Box Formation:** Close protection during stationary periods
- **Echelon Formation:** Side protection during walking
- **Modified Formations:** Adaptations for specific environments

**Attack Recognition and Response:**
- Pre-attack indicators recognition
- Immediate threat response protocols
- Protective cover and evacuation procedures
- Counter-assault team coordination
- Post-incident procedures

**Crowd Management:**
- Crowd assessment and monitoring
- Buffer zone maintenance
- Movement through crowds
- Media interaction management
- Protest management strategies

**Emergency Medical Response:**
- Executive medical profile maintenance
- Emergency medical kit contents
- Trauma response training
- Medical evacuation planning
- Hospital pre-arrangements

### **Cyber Protection for Executives**
Digital protection is increasingly important for executive security.

**Digital Footprint Management:**
- Online presence monitoring
- Personal information protection
- Social media security measures
- Family member digital protection
- Reputation management

**Communication Security:**
- Secure communication devices
- Encrypted messaging applications
- Secure email protocols
- Communication pattern analysis
- Counter-surveillance measures

**Home Technology Security:**
- Smart home device vulnerabilities
- Home network security
- Personal device protection
- Internet of Things (IoT) risks
- Family member training

**Cyber Threat Specific to Executives:**
- Spear phishing and targeted attacks
- Social engineering attempts
- Location tracking through devices
- Information gathering from online sources
- Digital extortion and blackmail

### **Family and Residence Protection**
Extending protection to family members and residences requires specific approaches.

**Family Member Security:**
- Individual threat assessments
- Daily routine security measures
- School and activity protection
- Travel security for family
- Emergency response planning

**Residence Security Design:**
- Crime Prevention Through Environmental Design (CPTED)
- Perimeter security measures
- Access control systems
- Surveillance and monitoring
- Safe room construction standards

**Domestic Staff Security:**
- Comprehensive background screening
- Security awareness training
- Access privilege management
- Confidentiality agreements
- Ongoing monitoring and evaluation

**Neighborhood Security Coordination:**
- Community security awareness
- Neighborhood watch programs
- Local law enforcement relationships
- Emergency response coordination
- Information sharing protocols

### **Special Event Protection**
Protecting executives during events requires specialized planning and execution.

**Event Security Planning:**
- Venue security assessment
- Crowd size and composition analysis
- Access control point design
- Emergency response planning
- Multi-agency coordination

**Media Management:**
- Media access control
- Press conference security
- Interview location security
- Photographer and camera positioning
- Crisis communication planning

**Protective Intelligence Operations:**
- Threat monitoring during events
- Suspicious activity recognition
- Crowd behavior analysis
- Counter-surveillance operations
- Real-time intelligence gathering

**Contingency Planning:**
- Emergency evacuation routes
- Alternate venue arrangements
- Medical emergency response
- Communication backup systems
- Weather contingency plans

### **International Protection Considerations**
Protecting executives during international travel presents unique challenges.

**Country Risk Assessment:**
- Political stability evaluation
- Crime rate and kidnapping risk
- Terrorism threat levels
- Medical and health risks
- Local law enforcement capabilities

**Cultural Considerations:**
- Local customs and protocols
- Appropriate security visibility
- Communication style adaptations
- Negotiation approaches
- Relationship building strategies

**Legal and Diplomatic Issues:**
- Firearm and equipment regulations
- Local law enforcement authority
- Diplomatic protection arrangements
- Emergency consular assistance
- Legal liability considerations

**Local Resource Management:**
- Local security provider vetting
- Translator and fixer services
- Medical facility identification
- Transportation provider selection
- Emergency support networks

### **Protection Team Management**
Effective team management ensures consistent, professional protection.

**Team Selection and Training:**
- Candidate screening criteria
- Specialized training requirements
- Continuous skills development
- Team cohesion building
- Performance evaluation

**Operational Procedures:**
- Standard operating procedures (SOPs)
- Communication protocols
- Equipment maintenance standards
- Daily briefing requirements
- After-action reporting

**Stress Management:**
- Team rotation schedules
- Mental health support
- Family support programs
- Burnout prevention
- Critical incident stress management

**Professional Development:**
- Continuing education requirements
- Certification maintenance
- Cross-training opportunities
- Leadership development
- Career progression paths

Executive protection requires balancing security needs with executive lifestyle while maintaining professionalism, discretion, and adaptability to changing threat environments.
`,
      quiz: [
        {
          id: 1,
          question: "What is executive protection philosophy?",
          options: [
            "Low-profile, layered protection with continuous assessment",
            "Only visible armed guards",
            "Only technical surveillance",
            "Only residential security"
          ],
          correctAnswer: 0,
          explanation: "EP philosophy emphasizes minimal visibility, multiple security layers, and ongoing threat assessment."
        },
        {
          id: 2,
          question: "What does advance team do?",
          options: [
            "Prepares locations before protectee arrival",
            "Only drives vehicles",
            "Only provides close protection",
            "Only handles intelligence"
          ],
          correctAnswer: 0,
          explanation: "Advance teams conduct security surveys, coordinate with local resources, and prepare locations in advance."
        },
        {
          id: 3,
          question: "What is protective formation?",
          options: [
            "Strategic positioning of protection team members",
            "Only vehicle positioning",
            "Only building layout",
            "Only crowd control"
          ],
          correctAnswer: 0,
          explanation: "Protective formations are strategic positioning arrangements that provide optimal protection coverage."
        },
        {
          id: 4,
          question: "What are executive cyber threats?",
          options: [
            "Spear phishing, social engineering, digital tracking",
            "Only virus attacks",
            "Only network breaches",
            "Only data theft"
          ],
          correctAnswer: 0,
          explanation: "Executives face targeted digital threats including spear phishing, social engineering, and location tracking."
        },
        {
          id: 5,
          question: "What is CPTED in residential security?",
          options: [
            "Crime Prevention Through Environmental Design",
            "Only alarm systems",
            "Only guard patrols",
            "Only camera systems"
          ],
          correctAnswer: 0,
          explanation: "CPTED uses design principles to reduce crime opportunities through environmental manipulation."
        },
        {
          id: 6,
          question: "What are protection levels?",
          options: [
            "Basic, enhanced, high-risk, maximum protection",
            "Only armed vs unarmed",
            "Only day vs night",
            "Only domestic vs international"
          ],
          correctAnswer: 0,
          explanation: "Protection levels range from basic low-threat to maximum extreme-threat environments."
        },
        {
          id: 7,
          question: "What does advance security survey include?",
          options: [
            "Location vulnerability and emergency egress planning",
            "Only guard scheduling",
            "Only budget planning",
            "Only equipment ordering"
          ],
          correctAnswer: 0,
          explanation: "Advance surveys assess vulnerabilities, identify safe rooms, plan emergency exits, and verify local resources."
        },
        {
          id: 8,
          question: "What is diamond formation?",
          options: [
            "360-degree protection during movement",
            "Only stationary protection",
            "Only vehicle protection",
            "Only crowd control"
          ],
          correctAnswer: 0,
          explanation: "Diamond formation provides all-around protection with team members positioned at cardinal points."
        },
        {
          id: 9,
          question: "What is digital footprint management?",
          options: [
            "Controlling online presence and personal information",
            "Only social media use",
            "Only email security",
            "Only device encryption"
          ],
          correctAnswer: 0,
          explanation: "Digital footprint management controls personal information exposure and online presence visibility."
        },
        {
          id: 10,
          question: "What is family member security planning?",
          options: [
            "Individual assessments and routine security measures",
            "Only executive protection",
            "Only residential security",
            "Only travel security"
          ],
          correctAnswer: 0,
          explanation: "Family security includes individual threat assessments, daily routine protection, and emergency planning."
        },
        {
          id: 11,
          question: "What are executive threat profiles?",
          options: [
            "Public figure, corporate, high-net-worth, political, celebrity",
            "Only physical threats",
            "Only cyber threats",
            "Only international threats"
          ],
          correctAnswer: 0,
          explanation: "Different executive types face distinct threat profiles based on visibility, wealth, and position."
        },
        {
          id: 12,
          question: "What is protective intelligence?",
          options: [
            "Threat monitoring and suspicious activity recognition",
            "Only background checks",
            "Only equipment management",
            "Only travel planning"
          ],
          correctAnswer: 0,
          explanation: "Protective intelligence involves continuous threat monitoring and analysis for proactive protection."
        },
        {
          id: 13,
          question: "What are international protection considerations?",
          options: [
            "Country risk, cultural protocols, legal regulations",
            "Only passport requirements",
            "Only flight bookings",
            "Only hotel reservations"
          ],
          correctAnswer: 0,
          explanation: "International protection requires assessing country risks, understanding cultural norms, and complying with local laws."
        },
        {
          id: 14,
          question: "What is event security planning?",
          options: [
            "Venue assessment, crowd analysis, access control design",
            "Only ticket sales",
            "Only catering arrangements",
            "Only guest lists"
          ],
          correctAnswer: 0,
          explanation: "Event security involves comprehensive planning for venue security, crowd management, and emergency response."
        },
        {
          id: 15,
          question: "What are team management considerations?",
          options: [
            "Selection, training, stress management, professional development",
            "Only scheduling",
            "Only equipment",
            "Only budgeting"
          ],
          correctAnswer: 0,
          explanation: "Team management includes selection, continuous training, stress management, and career development."
        },
        {
          id: 16,
          question: "What is low-profile protection approach?",
          options: [
            "Minimizing visible security while maintaining effectiveness",
            "Only armed guards",
            "Only obvious measures",
            "Only reactive response"
          ],
          correctAnswer: 0,
          explanation: "Low-profile approaches maintain protection effectiveness while minimizing disruption to executive activities."
        },
        {
          id: 17,
          question: "What is transportation security planning?",
          options: [
            "Armored vehicles, route planning, driver training",
            "Only car rentals",
            "Only flight bookings",
            "Only hotel transfers"
          ],
          correctAnswer: 0,
          explanation: "Transportation security includes vehicle specifications, route analysis, and driver qualification standards."
        },
        {
          id: 18,
          question: "What are communication security measures?",
          options: [
            "Secure devices, encrypted messaging, pattern analysis",
            "Only phone calls",
            "Only emails",
            "Only meetings"
          ],
          correctAnswer: 0,
          explanation: "Communication security involves encrypted devices, secure protocols, and monitoring communication patterns."
        },
        {
          id: 19,
          question: "What is domestic staff security?",
          options: [
            "Background screening, training, access management",
            "Only hiring",
            "Only scheduling",
            "Only payment"
          ],
          correctAnswer: 0,
          explanation: "Domestic staff security requires comprehensive vetting, security training, and access privilege management."
        },
        {
          id: 20,
          question: "What are special event protective operations?",
          options: [
            "Threat monitoring, crowd management, media control",
            "Only ticket checking",
            "Only seating arrangements",
            "Only food service"
          ],
          correctAnswer: 0,
          explanation: "Event operations include threat monitoring, crowd behavior analysis, and media interaction management."
        }
      ]
    },
    {
      id: 3,
      title: "Corporate Investigations and Intelligence",
      completed: false,
      content: `
## **Module 3: Corporate Investigations and Intelligence**

### **Corporate Investigations Framework**
Corporate investigations follow structured methodologies to uncover facts, preserve evidence, and support organizational decision-making.

**Investigation Principles:**
- **Objectivity:** Maintaining impartiality throughout investigation
- **Thoroughness:** Comprehensive evidence collection and analysis
- **Confidentiality:** Protecting sensitive information and privacy
- **Legality:** Adhering to legal and regulatory requirements
- **Timeliness:** Conducting investigations promptly and efficiently

**Types of Corporate Investigations:**
1. **Internal Investigations:** Employee misconduct, policy violations
2. **External Investigations:** Vendor fraud, intellectual property theft
3. **Due Diligence Investigations:** Pre-merger, partnership evaluations
4. **Forensic Investigations:** Digital evidence, financial fraud
5. **Security Investigations:** Physical breaches, threat assessments

**Investigation Lifecycle:**
1. **Case Intake:** Receiving and evaluating investigation requests
2. **Planning:** Developing investigation strategy and resource allocation
3. **Evidence Collection:** Gathering documents, interviews, digital evidence
4. **Analysis:** Evaluating evidence and developing findings
5. **Reporting:** Documenting investigation results and recommendations
6. **Closure:** Implementing recommendations and case documentation

### **Evidence Management and Preservation**
Proper evidence handling ensures investigation integrity and legal admissibility.

**Evidence Collection Protocols:**
- Chain of custody documentation
- Evidence identification and labeling
- Secure storage and access controls
- Preservation of original evidence
- Digital evidence forensic procedures

**Interview Techniques:**
- **Fact-finding Interviews:** Gathering information from witnesses
- **Subject Interviews:** Questioning investigation targets
- **Expert Interviews:** Consulting technical or subject matter experts
- **Cognitive Interviewing:** Enhancing witness recall accuracy
- **Reid Technique:** Structured interrogation methodology

**Document Evidence Management:**
- Document authentication procedures
- Copying and preservation standards
- Confidentiality maintenance
- Document analysis techniques
- Legal discovery preparation

**Digital Evidence Considerations:**
- Forensic imaging procedures
- Metadata preservation
- Hash value verification
- Data recovery techniques
- Electronic discovery requirements

### **Financial Investigations**
Investigating financial irregularities requires specialized knowledge and techniques.

**Fraud Examination Methodology:**
1. **Allegation Assessment:** Evaluating fraud indicators and complaints
2. **Plan Development:** Designing investigation approach and team
3. **Evidence Collection:** Gathering financial records and documentation
4. **Data Analysis:** Identifying patterns and anomalies
5. **Reporting:** Documenting findings and recommendations
6. **Testimony:** Providing evidence in legal proceedings

**Common Financial Investigation Areas:**
- **Asset Misappropriation:** Theft of company funds or property
- **Corruption:** Bribery, kickbacks, conflict of interest
- **Financial Statement Fraud:** Manipulation of financial records
- **Money Laundering:** Concealing illicit fund origins
- **Tax Evasion:** Illegal avoidance of tax obligations

**Financial Analysis Techniques:**
- Bank statement analysis
- Vendor payment review
- Expense report auditing
- Financial ratio analysis
- Benford's Law application

**Forensic Accounting Tools:**
- Data mining software applications
- Statistical analysis programs
- Visualization and mapping tools
- Database query languages
- Specialized forensic software

### **Due Diligence Investigations**
Pre-transaction investigations assess risks and verify information.

**Due Diligence Components:**
- **Legal Due Diligence:** Corporate structure, litigation history
- **Financial Due Diligence:** Financial condition, asset valuation
- **Operational Due Diligence:** Business processes, supply chain
- **Commercial Due Diligence:** Market position, competition
- **Security Due Diligence:** Protection measures, threat assessment

**Background Investigation Techniques:**
- Public records searches
- Media and internet research
- Reference verification
- Credit history review
- Litigation database searches

**International Due Diligence Considerations:**
- Country-specific legal requirements
- Cultural business practice differences
- Translation and interpretation needs
- Local investigation resource utilization
- Cross-border information sharing limitations

**Due Diligence Reporting Standards:**
- Executive summary format
- Risk assessment methodology
- Confidentiality requirements
- Recommendation framework
- Follow-up monitoring plans

### **Corporate Intelligence Gathering**
Systematic information collection supports business decision-making and risk management.

**Intelligence Cycle:**
1. **Planning and Direction:** Defining intelligence requirements
2. **Collection:** Gathering information from multiple sources
3. **Processing:** Organizing and evaluating collected information
4. **Analysis:** Interpreting information and identifying patterns
5. **Dissemination:** Distributing intelligence to decision-makers
6. **Feedback:** Evaluating intelligence usefulness and adjusting requirements

**Information Sources:**
- **Open Source Intelligence (OSINT):** Publicly available information
- **Human Intelligence (HUMINT):** Information from human sources
- **Technical Intelligence (TECHINT):** Equipment and technical data
- **Financial Intelligence (FININT):** Financial transaction information
- **Geospatial Intelligence (GEOINT):** Location-based information

**Competitive Intelligence:**
- Competitor analysis methodologies
- Market intelligence gathering
- Technology trend monitoring
- Regulatory change tracking
- Strategic partnership assessment

**Threat Intelligence:**
- Cyber threat monitoring
- Physical threat assessment
- Supply chain risk analysis
- Geopolitical risk evaluation
- Emerging threat identification

### **Investigative Interviewing Skills**
Effective interviewing techniques gather accurate information while maintaining legal and ethical standards.

**Interview Planning:**
- Background research on interviewee
- Question development and sequencing
- Location and environment selection
- Documentation preparation
- Legal considerations review

**Interview Techniques:**
- **Rapport Building:** Establishing trust and cooperation
- **Question Formulation:** Open-ended vs. closed questions
- **Active Listening:** Full attention and comprehension
- **Non-verbal Observation:** Body language interpretation
- **Statement Analysis:** Evaluating verbal content for consistency

**Legal Considerations:**
- Miranda rights requirements
- Right to representation
- Confidentiality obligations
- Recording consent requirements
- Evidence admissibility standards

**Interview Documentation:**
- Note-taking standards
- Recording procedures
- Statement transcription
- Witness signature requirements
- Evidence preservation protocols

### **Investigation Report Writing**
Clear, comprehensive reporting communicates investigation findings effectively.

**Report Structure:**
1. **Executive Summary:** Key findings and recommendations
2. **Introduction:** Investigation scope and methodology
3. **Background:** Relevant facts and context
4. **Findings:** Detailed evidence and analysis
5. **Conclusions:** Determination based on findings
6. **Recommendations:** Proposed actions and improvements
7. **Appendices:** Supporting documents and evidence

**Report Writing Principles:**
- Clear, concise language
- Logical organization and flow
- Fact-based, objective presentation
- Proper citation of evidence
- Professional tone and formatting

**Legal Considerations in Reporting:**
- Defamation risk avoidance
- Privacy protection requirements
- Attorney-client privilege considerations
- Discovery and disclosure obligations
- Record retention requirements

**Report Distribution Protocols:**
- Confidentiality classifications
- Need-to-know distribution principles
- Secure transmission methods
- Receipt acknowledgment procedures
- Storage and access controls

### **Ethical and Legal Considerations**
Corporate investigations must adhere to ethical standards and legal requirements.

**Ethical Principles:**
- Truthfulness and honesty in all dealings
- Respect for individual rights and privacy
- Avoidance of conflicts of interest
- Professional competence maintenance
- Confidentiality preservation

**Legal Compliance Areas:**
- **Employment Law:** Employee rights and protections
- **Privacy Law:** Personal information protection
- **Labor Law:** Union relations and collective bargaining
- **Criminal Law:** Evidence handling and reporting
- **Regulatory Requirements:** Industry-specific regulations

**Cross-border Investigation Issues:**
- Data privacy regulations (GDPR, CCPA)
- Cross-border evidence transfer
- Local investigation restrictions
- Cultural and language considerations
- International legal cooperation

**Attorney-Client Privilege:**
- When privilege applies
- Maintaining privilege protection
- Work product doctrine
- Internal vs. external investigations
- Waiver avoidance strategies

### **Investigation Technology Tools**
Modern investigations utilize specialized technology for efficiency and effectiveness.

**Digital Forensic Tools:**
- Disk imaging and analysis software
- Mobile device forensic tools
- Network analysis applications
- Email and communication analysis
- Social media investigation tools

**Data Analysis Platforms:**
- E-discovery software suites
- Data visualization tools
- Link analysis applications
- Timeline creation software
- Statistical analysis programs

**Case Management Systems:**
- Investigation tracking software
- Evidence management platforms
- Document management systems
- Collaboration and workflow tools
- Reporting and dashboard applications

**Specialized Investigation Equipment:**
- Surveillance technology
- Forensic laboratory equipment
- Interview recording devices
- Evidence collection kits
- Secure communication tools

Corporate investigations and intelligence functions provide critical insights for risk management, compliance verification, and informed decision-making while maintaining ethical standards and legal compliance.
`,
      quiz: [
        {
          id: 1,
          question: "What are corporate investigation principles?",
          options: [
            "Objectivity, thoroughness, confidentiality, legality, timeliness",
            "Only speed",
            "Only cost savings",
            "Only management approval"
          ],
          correctAnswer: 0,
          explanation: "Investigation principles ensure impartial, comprehensive, confidential, legal, and timely fact-finding."
        },
        {
          id: 2,
          question: "What is chain of custody?",
          options: [
            "Documented evidence handling from collection to court",
            "Only evidence storage",
            "Only evidence collection",
            "Only evidence analysis"
          ],
          correctAnswer: 0,
          explanation: "Chain of custody documents evidence handling to maintain integrity and legal admissibility."
        },
        {
          id: 3,
          question: "What are financial investigation areas?",
          options: [
            "Asset misappropriation, corruption, financial statement fraud",
            "Only theft investigation",
            "Only employee screening",
            "Only background checks"
          ],
          correctAnswer: 0,
          explanation: "Financial investigations cover asset theft, corruption schemes, and financial record manipulation."
        },
        {
          id: 4,
          question: "What is due diligence investigation?",
          options: [
            "Pre-transaction risk assessment and verification",
            "Only employee investigation",
            "Only criminal investigation",
            "Only security assessment"
          ],
          correctAnswer: 0,
          explanation: "Due diligence investigates risks before business transactions like mergers or partnerships."
        },
        {
          id: 5,
          question: "What is the intelligence cycle?",
          options: [
            "Planning, collection, processing, analysis, dissemination",
            "Only data collection",
            "Only report writing",
            "Only surveillance"
          ],
          correctAnswer: 0,
          explanation: "The intelligence cycle systematically plans, collects, processes, analyzes, and distributes information."
        },
        {
          id: 6,
          question: "What are interview techniques?",
          options: [
            "Rapport building, question formulation, active listening",
            "Only interrogation",
            "Only note-taking",
            "Only recording"
          ],
          correctAnswer: 0,
          explanation: "Effective interviewing uses rapport building, strategic questioning, and active listening skills."
        },
        {
          id: 7,
          question: "What is investigation report structure?",
          options: [
            "Executive summary, background, findings, conclusions, recommendations",
            "Only findings section",
            "Only evidence list",
            "Only witness statements"
          ],
          correctAnswer: 0,
          explanation: "Reports include executive summary, background, findings, conclusions, and recommendations sections."
        },
        {
          id: 8,
          question: "What is OSINT?",
          options: [
            "Open Source Intelligence from public information",
            "Only classified information",
            "Only human sources",
            "Only technical data"
          ],
          correctAnswer: 0,
          explanation: "OSINT gathers intelligence from publicly available sources like media, internet, and public records."
        },
        {
          id: 9,
          question: "What are forensic accounting tools?",
          options: [
            "Data mining, statistical analysis, visualization software",
            "Only calculators",
            "Only spreadsheets",
            "Only accounting software"
          ],
          correctAnswer: 0,
          explanation: "Forensic accounting uses specialized software for data analysis, pattern recognition, and visualization."
        },
        {
          id: 10,
          question: "What are ethical investigation principles?",
          options: [
            "Truthfulness, respect for rights, confidentiality, competence",
            "Only getting results",
            "Only speed",
            "Only cost efficiency"
          ],
          correctAnswer: 0,
          explanation: "Ethical principles require honesty, respect for rights, confidentiality, and professional competence."
        },
        {
          id: 11,
          question: "What are internal investigations?",
          options: [
            "Employee misconduct and policy violation investigations",
            "Only vendor investigations",
            "Only competitor investigations",
            "Only criminal investigations"
          ],
          correctAnswer: 0,
          explanation: "Internal investigations address employee behavior, policy compliance, and organizational misconduct."
        },
        {
          id: 12,
          question: "What is fraud examination methodology?",
          options: [
            "Assessment, planning, collection, analysis, reporting, testimony",
            "Only evidence collection",
            "Only interview conduction",
            "Only report writing"
          ],
          correctAnswer: 0,
          explanation: "Fraud examination follows structured methodology from allegation assessment through testimony."
        },
        {
          id: 13,
          question: "What is competitive intelligence?",
          options: [
            "Competitor analysis and market intelligence gathering",
            "Only financial analysis",
            "Only product testing",
            "Only sales tracking"
          ],
          correctAnswer: 0,
          explanation: "Competitive intelligence analyzes competitors, markets, and industry trends for strategic advantage."
        },
        {
          id: 14,
          question: "What are digital evidence considerations?",
          options: [
            "Forensic imaging, metadata preservation, hash verification",
            "Only printing documents",
            "Only email reading",
            "Only file copying"
          ],
          correctAnswer: 0,
          explanation: "Digital evidence requires forensic procedures to preserve integrity, metadata, and verification data."
        },
        {
          id: 15,
          question: "What is threat intelligence?",
          options: [
            "Cyber, physical, supply chain, geopolitical threat monitoring",
            "Only weather monitoring",
            "Only market monitoring",
            "Only competitor monitoring"
          ],
          correctAnswer: 0,
          explanation: "Threat intelligence monitors various risk domains including cyber, physical, and geopolitical threats."
        },
        {
          id: 16,
          question: "What is attorney-client privilege?",
          options: [
            "Legal protection for confidential communications",
            "Only attorney rights",
            "Only client rights",
            "Only court procedures"
          ],
          correctAnswer: 0,
          explanation: "Attorney-client privilege protects confidential communications between attorneys and their clients."
        },
        {
          id: 17,
          question: "What are investigation technology tools?",
          options: [
            "Digital forensic software, data analysis platforms, case management systems",
            "Only word processors",
            "Only spreadsheets",
            "Only email programs"
          ],
          correctAnswer: 0,
          explanation: "Investigation tools include forensic software, data analysis platforms, and case management systems."
        },
        {
          id: 18,
          question: "What is the Reid Technique?",
          options: [
            "Structured interrogation methodology",
            "Only interview scheduling",
            "Only note-taking method",
            "Only report format"
          ],
          correctAnswer: 0,
          explanation: "The Reid Technique is a structured approach to interrogation and interviewing."
        },
        {
          id: 19,
          question: "What are cross-border investigation issues?",
          options: [
            "Data privacy regulations, evidence transfer, local restrictions",
            "Only language differences",
            "Only time zone differences",
            "Only currency differences"
          ],
          correctAnswer: 0,
          explanation: "Cross-border investigations face legal, regulatory, and practical challenges across jurisdictions."
        },
        {
          id: 20,
          question: "What is investigation lifecycle?",
          options: [
            "Case intake, planning, collection, analysis, reporting, closure",
            "Only evidence collection",
            "Only report writing",
            "Only witness interviews"
          ],
          correctAnswer: 0,
          explanation: "The investigation lifecycle includes all phases from case initiation through closure and documentation."
        }
      ]
    },
    {
      id: 4,
      title: "Integrated Security Operations Center (SOC)",
      completed: false,
      content: `
## **Module 4: Integrated Security Operations Center (SOC)**

### **SOC Design and Architecture**
Modern Security Operations Centers integrate multiple security functions into centralized monitoring and response facilities.

**SOC Design Principles:**
- **Centralized Monitoring:** Single point for security event monitoring
- **Integrated Systems:** Unified view across security technologies
- **Scalable Architecture:** Ability to grow with organizational needs
- **Resilient Operations:** Redundant systems and backup capabilities
- **Ergonomic Design:** Optimized for operator effectiveness and comfort

**SOC Tier Models:**
- **Tier 1: Monitoring and Triage:** Initial alert review and classification
- **Tier 2: Analysis and Investigation:** Detailed incident investigation
- **Tier 3: Advanced Analysis:** Complex threat hunting and analysis
- **Tier 4: Management and Strategy:** Leadership and program management
- **Tier 5: External Support:** Specialized external expertise as needed

**Physical SOC Design Elements:**
- Control room layout and workstation design
- Video wall configuration and display management
- Communication systems and redundancy
- Environmental controls and power backup
- Secure access and visitor management

### **SOC Technology Integration**
Effective SOCs integrate diverse security technologies for comprehensive monitoring.

**Core SOC Technologies:**
- **Security Information and Event Management (SIEM):** Central log collection and correlation
- **Security Orchestration, Automation and Response (SOAR):** Automated response workflows
- **Endpoint Detection and Response (EDR):** Host-based threat detection
- **Network Detection and Response (NDR):** Network traffic analysis
- **Threat Intelligence Platforms (TIP):** External threat data integration

**Physical Security Integration:**
- Access control system monitoring
- Video surveillance management
- Intrusion detection system oversight
- Perimeter security monitoring
- Environmental sensor integration

**Communication Systems:**
- Unified communication platforms
- Incident notification systems
- Emergency broadcast capabilities
- Interagency communication links
- Secure communication channels

**Data Management and Storage:**
- Log retention policies and storage
- Evidence preservation systems
- Data backup and recovery
- Archiving and retrieval systems
- Compliance reporting capabilities

### **SOC Operations and Procedures**
Standardized procedures ensure consistent and effective SOC operations.

**Shift Operations:**
- Shift handover procedures and documentation
- Staffing levels and skill requirements
- Break and relief scheduling
- On-call and escalation procedures
- Performance monitoring during shifts

**Alert Management Process:**
1. **Detection:** Security alert generation
2. **Triage:** Initial alert assessment and prioritization
3. **Investigation:** Detailed analysis and evidence gathering
4. **Response:** Action implementation and containment
5. **Resolution:** Problem resolution and recovery
6. **Documentation:** Complete incident recording and reporting

**Standard Operating Procedures (SOPs):**
- Alert classification and prioritization criteria
- Investigation methodology and techniques
- Escalation thresholds and procedures
- Communication protocols and templates
- Documentation standards and requirements

**Quality Assurance Measures:**
- Regular procedure reviews and updates
- Performance metrics and monitoring
- Training and competency assessments
- Technology effectiveness evaluations
- Continuous improvement processes

### **Threat Monitoring and Analysis**
Proactive threat monitoring identifies potential security issues before they cause significant impact.

**Threat Detection Methods:**
- **Signature-based Detection:** Known threat pattern matching
- **Anomaly-based Detection:** Deviation from normal behavior
- **Behavioral Analysis:** Activity pattern recognition
- **Heuristic Analysis:** Rule-based threat identification
- **Machine Learning:** Pattern recognition through algorithms

**Threat Hunting Methodology:**
1. **Hypothesis Development:** Potential threat scenario creation
2. **Investigation Planning:** Data source identification and approach
3. **Data Collection:** Relevant information gathering
4. **Analysis:** Pattern identification and investigation
5. **Response:** Action based on findings
6. **Documentation:** Process and results recording

**Intelligence Integration:**
- External threat feed ingestion and correlation
- Internal intelligence generation and sharing
- Industry information sharing participation
- Government and law enforcement coordination
- Vendor intelligence collaboration

**Advanced Analytics:**
- Big data analysis techniques
- Predictive analytics applications
- Correlation rule development
- Pattern recognition algorithms
- Risk scoring methodologies

### **Incident Response Coordination**
SOC serves as central coordination point for security incident response.

**Incident Response Lifecycle:**
1. **Preparation:** Planning, training, and resource preparation
2. **Identification:** Incident detection and preliminary assessment
3. **Containment:** Limiting incident impact and spread
4. **Eradication:** Removing threat causes and components
5. **Recovery:** Restoring normal operations
6. **Lessons Learned:** Review and improvement identification

**Communication Protocols:**
- Internal stakeholder notification procedures
- External agency coordination processes
- Media and public communication plans
- Customer and partner notification
- Regulatory reporting requirements

**Resource Coordination:**
- Internal team mobilization procedures
- External vendor engagement processes
- Specialized expertise access
- Equipment and tool deployment
- Logistics and support arrangements

**Crisis Management Integration:**
- Emergency operations center coordination
- Business continuity plan activation
- Disaster recovery coordination
- Executive communication support
- Legal and regulatory compliance monitoring

### **Performance Measurement and Reporting**
Metrics and reporting demonstrate SOC value and drive continuous improvement.

**Key Performance Indicators (KPIs):**
- Mean Time to Detect (MTTD)
- Mean Time to Respond (MTTR)
- Alert volume and classification rates
- False positive/negative rates
- Incident closure rates and times

**Operational Metrics:**
- System availability and uptime
- Staffing levels and coverage
- Training completion and competency
- Technology performance measures
- Process compliance rates

**Executive Reporting:**
- Security posture dashboards
- Threat landscape overviews
- Incident trend analysis
- Resource utilization reports
- Program effectiveness measures

**Regulatory Reporting:**
- Compliance status reporting
- Incident disclosure requirements
- Audit preparation and support
- Documentation for legal proceedings
- Evidence preservation reporting

### **SOC Staff Development and Management**
Effective SOC operations require skilled personnel and proper management.

**Staff Roles and Responsibilities:**
- **SOC Manager:** Overall operations management
- **Shift Supervisor:** Shift operations oversight
- **Security Analyst:** Monitoring and investigation
- **Threat Hunter:** Proactive threat identification
- **Incident Responder:** Incident handling and coordination

**Training and Certification Programs:**
- Initial onboarding and orientation
- Technical skills development
- Procedural knowledge training
- Certification maintenance
- Cross-training and skill diversification

**Career Development Pathways:**
- Technical specialist progression
- Management track development
- Cross-functional movement opportunities
- External training and education support
- Mentorship and coaching programs

**Staff Wellness Considerations:**
- Shift work impact management
- Stress reduction strategies
- Work-life balance support
- Burnout prevention measures
- Mental health resources access

### **Vendor and Technology Management**
SOC technology and vendor relationships require specific management approaches.

**Technology Selection Criteria:**
- Functional requirements alignment
- Integration capabilities assessment
- Scalability and growth considerations
- Vendor stability and support evaluation
- Total cost of ownership analysis

**Vendor Management:**
- Service level agreement (SLA) management
- Performance monitoring and reporting
- Contract compliance verification
- Relationship management strategies
- Alternative vendor identification

**Technology Lifecycle Management:**
- Technology refresh planning
- Upgrade and patching procedures
- End-of-life planning and migration
- Testing and validation processes
- Documentation and knowledge transfer

**Budget and Resource Planning:**
- Capital expenditure planning
- Operational expense management
- Resource allocation optimization
- Cost-benefit analysis processes
- Budget justification preparation

### **Future SOC Trends and Evolution**
SOC capabilities continue to evolve with technological advances and changing threats.

**Emerging Technologies:**
- Artificial Intelligence and Machine Learning integration
- Cloud-based SOC capabilities
- Internet of Things (IoT) security monitoring
- Blockchain security applications
- Quantum computing implications

**Automation and Orchestration:**
- Automated response implementation
- Workflow optimization through orchestration
- Robotic Process Automation (RPA) applications
- Chatbot and virtual assistant integration
- Predictive analytics automation

**Cloud Security Operations:**
- Cloud-native security monitoring
- Multi-cloud environment management
- Cloud access security broker (CASB) integration
- Container and serverless security
- Cloud compliance monitoring

**Remote and Distributed SOC Models:**
- Remote monitoring capabilities
- Distributed analyst teams
- Follow-the-sun operations
- Outsourced SOC services
- Hybrid SOC approaches

Integrated Security Operations Centers provide centralized visibility, coordination, and response capabilities essential for modern corporate security in increasingly complex threat environments.
`,
      quiz: [
        {
          id: 1,
          question: "What are SOC design principles?",
          options: [
            "Centralized monitoring, integrated systems, scalable architecture",
            "Only physical security",
            "Only cyber security",
            "Only video surveillance"
          ],
          correctAnswer: 0,
          explanation: "SOC design principles include centralized monitoring, system integration, scalability, and resilient operations."
        },
        {
          id: 2,
          question: "What is SIEM?",
          options: [
            "Security Information and Event Management system",
            "Only video management",
            "Only access control",
            "Only physical security"
          ],
          correctAnswer: 0,
          explanation: "SIEM systems collect, correlate, and analyze security event logs from multiple sources."
        },
        {
          id: 3,
          question: "What are SOC tier models?",
          options: [
            "Monitoring, analysis, advanced analysis, management tiers",
            "Only technical levels",
            "Only management levels",
            "Only experience levels"
          ],
          correctAnswer: 0,
          explanation: "SOC tiers define different responsibility levels from monitoring through advanced analysis and management."
        },
        {
          id: 4,
          question: "What is alert management process?",
          options: [
            "Detection, triage, investigation, response, resolution, documentation",
            "Only alert generation",
            "Only response actions",
            "Only report writing"
          ],
          correctAnswer: 0,
          explanation: "Alert management includes detection, assessment, investigation, response, resolution, and documentation."
        },
        {
          id: 5,
          question: "What is threat hunting?",
          options: [
            "Proactive search for undetected threats",
            "Only alert response",
            "Only incident investigation",
            "Only compliance checking"
          ],
          correctAnswer: 0,
          explanation: "Threat hunting proactively searches for threats that may have evaded automated detection systems."
        },
        {
          id: 6,
          question: "What is incident response lifecycle?",
          options: [
            "Preparation, identification, containment, eradication, recovery, lessons learned",
            "Only emergency response",
            "Only technical fixes",
            "Only report submission"
          ],
          correctAnswer: 0,
          explanation: "The incident response lifecycle includes all phases from preparation through lessons learned."
        },
        {
          id: 7,
          question: "What are SOC KPIs?",
          options: [
            "MTTD, MTTR, alert rates, false positive rates",
            "Only staff numbers",
            "Only budget size",
            "Only equipment counts"
          ],
          correctAnswer: 0,
          explanation: "KPIs measure detection time, response time, alert volumes, and accuracy rates."
        },
        {
          id: 8,
          question: "What are SOC staff roles?",
          options: [
            "Manager, supervisor, analyst, threat hunter, incident responder",
            "Only security guards",
            "Only IT staff",
            "Only managers"
          ],
          correctAnswer: 0,
          explanation: "SOC roles include management, supervision, analysis, threat hunting, and incident response specialists."
        },
        {
          id: 9,
          question: "What is SOAR?",
          options: [
            "Security Orchestration, Automation and Response platform",
            "Only alert system",
            "Only monitoring tool",
            "Only reporting system"
          ],
          correctAnswer: 0,
          explanation: "SOAR platforms automate and orchestrate security response workflows and processes."
        },
        {
          id: 10,
          question: "What is threat intelligence integration?",
          options: [
            "External threat data correlation with internal monitoring",
            "Only internal data",
            "Only public information",
            "Only government data"
          ],
          correctAnswer: 0,
          explanation: "Threat intelligence integration correlates external threat data with internal security monitoring."
        },
        {
          id: 11,
          question: "What are shift operations considerations?",
          options: [
            "Handover procedures, staffing levels, escalation protocols",
            "Only work hours",
            "Only break times",
            "Only shift rotation"
          ],
          correctAnswer: 0,
          explanation: "Shift operations require proper handovers, adequate staffing, and clear escalation procedures."
        },
        {
          id: 12,
          question: "What is EDR?",
          options: [
            "Endpoint Detection and Response technology",
            "Only network monitoring",
            "Only access control",
            "Only video surveillance"
          ],
          correctAnswer: 0,
          explanation: "EDR provides host-based threat detection, investigation, and response capabilities."
        },
        {
          id: 13,
          question: "What are quality assurance measures?",
          options: [
            "Procedure reviews, performance metrics, training assessments",
            "Only budget reviews",
            "Only staff evaluations",
            "Only technology checks"
          ],
          correctAnswer: 0,
          explanation: "Quality assurance includes regular reviews, performance measurement, and competency assessments."
        },
        {
          id: 14,
          question: "What is anomaly-based detection?",
          options: [
            "Identifying deviations from normal behavior patterns",
            "Only known threat matching",
            "Only rule checking",
            "Only signature matching"
          ],
          correctAnswer: 0,
          explanation: "Anomaly detection identifies unusual activities that deviate from established behavioral baselines."
        },
        {
          id: 15,
          question: "What are communication protocols?",
          options: [
            "Stakeholder notification, agency coordination, media plans",
            "Only internal emails",
            "Only phone calls",
            "Only meetings"
          ],
          correctAnswer: 0,
          explanation: "Communication protocols define notification, coordination, and public communication procedures."
        },
        {
          id: 16,
          question: "What is physical SOC design?",
          options: [
            "Control room layout, video walls, environmental controls",
            "Only computer placement",
            "Only desk arrangement",
            "Only lighting design"
          ],
          correctAnswer: 0,
          explanation: "Physical design includes workspace layout, display systems, and environmental controls."
        },
        {
          id: 17,
          question: "What is threat detection methods?",
          options: [
            "Signature, anomaly, behavioral, heuristic, machine learning",
            "Only manual review",
            "Only automated alerts",
            "Only user reports"
          ],
          correctAnswer: 0,
          explanation: "Detection methods include signature matching, anomaly detection, behavioral analysis, and AI approaches."
        },
        {
          id: 18,
          question: "What are staff wellness considerations?",
          options: [
            "Shift work impact, stress reduction, burnout prevention",
            "Only salary levels",
            "Only benefits packages",
            "Only vacation time"
          ],
          correctAnswer: 0,
          explanation: "Wellness considerations address shift work challenges, stress management, and burnout prevention."
        },
        {
          id: 19,
          question: "What is technology lifecycle management?",
          options: [
            "Refresh planning, upgrade procedures, end-of-life planning",
            "Only purchasing",
            "Only installation",
            "Only usage"
          ],
          correctAnswer: 0,
          explanation: "Lifecycle management includes planning, upgrades, maintenance, and replacement of technology assets."
        },
        {
          id: 20,
          question: "What are future SOC trends?",
          options: [
            "AI integration, cloud SOC, automation, remote operations",
            "Only current operations",
            "Only traditional methods",
            "Only manual processes"
          ],
          correctAnswer: 0,
          explanation: "Future trends include artificial intelligence, cloud capabilities, automation, and distributed operations."
        }
      ]
    },
    {
      id: 5,
      title: "Corporate Crisis Management",
      completed: false,
      content: `
## **Module 5: Corporate Crisis Management**

### **Crisis Management Framework**
Corporate crisis management provides structured approach to preparing for, responding to, and recovering from significant disruptive events.

**Crisis Management Principles:**
- **Proactive Preparation:** Planning before crises occur
- **Rapid Response:** Immediate action to contain impact
- **Effective Communication:** Clear, consistent messaging
- **Stakeholder Protection:** Safeguarding people and assets
- **Business Continuity:** Maintaining critical operations

**Crisis Types and Classification:**
1. **Operational Crises:** System failures, supply chain disruptions
2. **Financial Crises:** Market crashes, liquidity problems
3. **Reputational Crises:** Scandals, negative publicity
4. **Physical Crises:** Natural disasters, accidents, attacks
5. **Humanitarian Crises:** Health emergencies, humanitarian issues

**Crisis Management Lifecycle:**
1. **Prevention:** Risk reduction and avoidance measures
2. **Preparation:** Planning, training, and resource preparation
3. **Response:** Immediate action during crisis
4. **Recovery:** Restoration of normal operations
5. **Learning:** Improvement based on experience

### **Crisis Management Team Structure**
Effective crisis response requires clearly defined roles and responsibilities.

**Crisis Management Team Roles:**
- **Crisis Manager:** Overall crisis response leadership
- **Communications Lead:** External and internal communications
- **Operations Lead:** Technical and operational response
- **Legal Advisor:** Legal compliance and liability management
- **Human Resources Lead:** Employee support and coordination

**Team Activation Protocols:**
- Activation criteria and thresholds
- Notification procedures and contact lists
- Assembly locations and virtual participation
- Authority delegation during crises
- Succession planning for key roles

**Decision-Making Framework:**
- Decision authority levels and delegation
- Information gathering and assessment processes
- Alternative evaluation methodologies
- Risk assessment during decision-making
- Documentation of decisions and rationale

**Team Training and Exercises:**
- Regular crisis simulation exercises
- Cross-functional team training
- Leadership development programs
- Tabletop and functional exercises
- After-action review processes

### **Crisis Communication Strategy**
Effective communication is critical during corporate crises.

**Communication Principles:**
- **Transparency:** Open and honest information sharing
- **Accuracy:** Fact-based, verified information
- **Timeliness:** Prompt communication updates
- **Consistency:** Unified messaging across channels
- **Empathy:** Understanding stakeholder concerns

**Stakeholder Communication Planning:**
- **Employees:** Internal updates and instructions
- **Customers:** Service impact and alternative arrangements
- **Media:** Press releases and spokesperson coordination
- **Investors:** Financial impact and recovery plans
- **Regulators:** Compliance reporting and coordination

**Communication Channels and Tools:**
- Emergency notification systems
- Corporate website and social media
- Press conference arrangements
- Internal communication platforms
- Stakeholder-specific communication methods

**Media Management During Crises:**
- Media monitoring and analysis
- Spokesperson training and preparation
- Press conference logistics
- Interview coordination and management
- Social media monitoring and response

### **Business Impact Analysis**
Understanding crisis impacts guides response prioritization and resource allocation.

**Impact Assessment Methodology:**
- **Time Criticality:** How quickly functions must be restored
- **Financial Impact:** Revenue loss and cost implications
- **Operational Impact:** Process disruption consequences
- **Reputational Impact:** Brand and stakeholder trust effects
- **Regulatory Impact:** Compliance and legal consequences

**Critical Function Identification:**
- Revenue-generating activities
- Customer service and support functions
- Regulatory compliance requirements
- Employee safety and welfare services
- Supply chain and logistics operations

**Recovery Time Objectives (RTO):**
- Maximum acceptable downtime for functions
- Tiered recovery priorities based on impact
- Resource allocation based on RTO requirements
- Alternative operating arrangements
- Progressive restoration planning

**Financial Impact Quantification:**
- Direct revenue loss calculation
- Additional cost estimation
- Market value impact assessment
- Insurance coverage analysis
- Recovery cost budgeting

### **Incident Command System (ICS) Adaptation**
Adapting emergency management principles for corporate environments.

**ICS Principles for Corporate Use:**
- **Common Terminology:** Standardized language and definitions
- **Modular Organization:** Scalable team structure
- **Integrated Communications:** Unified communication systems
- **Unified Command:** Multi-department coordination
- **Manageable Span of Control:** Optimal team size management

**Corporate ICS Structure:**
- **Incident Commander:** Overall crisis leadership
- **Operations Section:** Tactical response implementation
- **Planning Section:** Situation analysis and planning
- **Logistics Section:** Resource and support provision
- **Finance/Admin Section:** Cost tracking and documentation

**ICS Implementation Considerations:**
- Corporate culture adaptation requirements
- Integration with existing management structures
- Training and familiarization programs
- Exercise and simulation design
- Continuous improvement processes

**Multi-Agency Coordination:**
- External agency interface protocols
- Information sharing agreements
- Joint command structure establishment
- Resource sharing arrangements
- After-action coordination and review

### **Crisis Response Procedures**
Standardized procedures ensure consistent, effective crisis response.

**Initial Response Protocols:**
- Situation assessment and verification
- Team activation and notification
- Immediate protective actions
- Initial communication dissemination
- Resource mobilization procedures

**Escalation Procedures:**
- Crisis level classification criteria
- Authority escalation thresholds
- External assistance request protocols
- Media and public notification requirements
- Regulatory reporting obligations

**Containment and Mitigation:**
- Immediate threat containment measures
- Impact limitation strategies
- Alternative operational arrangements
- Resource conservation measures
- Environmental and safety protection

**Recovery Activation:**
- Recovery team activation criteria
- Damage assessment procedures
- Restoration priority establishment
- Resource allocation for recovery
- Progress monitoring and reporting

### **Legal and Regulatory Compliance**
Crisis management must address legal requirements and regulatory obligations.

**Legal Considerations During Crises:**
- Duty of care to employees and visitors
- Contractual obligations and force majeure
- Insurance claim procedures and requirements
- Regulatory reporting timelines and formats
- Litigation risk management

**Regulatory Compliance Areas:**
- Occupational health and safety regulations
- Environmental protection requirements
- Financial reporting obligations
- Data privacy and protection laws
- Industry-specific regulations

**Documentation Requirements:**
- Decision documentation standards
- Communication record keeping
- Resource utilization tracking
- Cost documentation for insurance
- Regulatory submission preparation

**Post-Crisis Legal Management:**
- Investigation preservation requirements
- Evidence collection and protection
- Legal discovery preparation
- Regulatory inquiry cooperation
- Litigation support activities

### **Psychological and Human Factors**
Addressing human needs during and after crises supports recovery and resilience.

**Crisis Impact on People:**
- Stress and trauma responses
- Decision-making capability impacts
- Communication challenges
- Team dynamics changes
- Leadership pressure effects

**Support Services Planning:**
- Employee assistance programs
- Critical incident stress management
- Family support services
- Counseling and mental health resources
- Return-to-work support programs

**Leadership During Crises:**
- Calm and decisive leadership behaviors
- Transparent communication practices
- Team morale maintenance
- Decision quality under pressure
- Self-care and resilience practices

**Recovery and Resilience Building:**
- Post-crisis support programs
- Team debriefing and processing
- Organizational learning integration
- Resilience enhancement initiatives
- Continuous improvement implementation

### **Technology and Tools for Crisis Management**
Modern technology enhances crisis management capabilities.

**Crisis Management Platforms:**
- Emergency notification systems
- Situation awareness dashboards
- Resource management applications
- Communication coordination tools
- Document and plan management systems

**Monitoring and Alerting Systems:**
- Threat detection and monitoring
- Early warning system integration
- Social media monitoring tools
- News and media monitoring services
- Internal reporting and alerting systems

**Communication Technology:**
- Mass notification capabilities
- Conference and collaboration tools
- Mobile communication applications
- Satellite and alternative communication
- Backup communication systems

**Data and Information Management:**
- Critical information databases
- Document storage and access systems
- Data backup and recovery capabilities
- Information sharing platforms
- Analytics and reporting tools

### **Post-Crisis Recovery and Learning**
Effective recovery and learning from crises improves future preparedness.

**Recovery Planning:**
- Damage assessment methodology
- Restoration priority establishment
- Resource allocation planning
- Progress monitoring approaches
- Return-to-normal transition planning

**Business Resumption:**
- Critical function restoration
- Customer service recovery
- Supply chain restoration
- Employee return-to-work planning
- Financial recovery management

**Crisis After-Action Review:**
- Comprehensive event analysis
- Response effectiveness evaluation
- Decision quality assessment
- Resource utilization review
- Improvement opportunity identification

**Organizational Learning Integration:**
- Lessons learned documentation
- Policy and procedure updates
- Training program enhancements
- Exercise scenario development
- Continuous improvement implementation

**Resilience Building:**
- Infrastructure hardening initiatives
- Redundant system implementation
- Supply chain diversification
- Cross-training and skill development
- Crisis leadership development

Corporate crisis management requires balancing immediate response needs with long-term recovery considerations while maintaining stakeholder trust and organizational resilience.
`,
      quiz: [
        {
          id: 1,
          question: "What are crisis management principles?",
          options: [
            "Proactive preparation, rapid response, effective communication",
            "Only emergency response",
            "Only financial management",
            "Only public relations"
          ],
          correctAnswer: 0,
          explanation: "Crisis management principles include proactive planning, rapid response, and effective communication."
        },
        {
          id: 2,
          question: "What are crisis types?",
          options: [
            "Operational, financial, reputational, physical, humanitarian",
            "Only natural disasters",
            "Only financial problems",
            "Only technical failures"
          ],
          correctAnswer: 0,
          explanation: "Crisis types include operational, financial, reputational, physical, and humanitarian events."
        },
        {
          id: 3,
          question: "What is crisis management lifecycle?",
          options: [
            "Prevention, preparation, response, recovery, learning",
            "Only emergency response",
            "Only recovery phase",
            "Only planning phase"
          ],
          correctAnswer: 0,
          explanation: "The lifecycle includes prevention, preparation, response, recovery, and learning phases."
        },
        {
          id: 4,
          question: "What are crisis team roles?",
          options: [
            "Crisis manager, communications lead, operations lead, legal advisor",
            "Only security staff",
            "Only executives",
            "Only IT staff"
          ],
          correctAnswer: 0,
          explanation: "Crisis teams include leadership, communications, operations, legal, and HR roles."
        },
        {
          id: 5,
          question: "What are crisis communication principles?",
          options: [
            "Transparency, accuracy, timeliness, consistency, empathy",
            "Only secrecy",
            "Only delay",
            "Only technical details"
          ],
          correctAnswer: 0,
          explanation: "Communication should be transparent, accurate, timely, consistent, and empathetic."
        },
        {
          id: 6,
          question: "What is business impact analysis?",
          options: [
            "Assessment of crisis effects on operations and finances",
            "Only financial analysis",
            "Only technical analysis",
            "Only staff analysis"
          ],
          correctAnswer: 0,
          explanation: "Business impact analysis evaluates operational, financial, and reputational consequences of crises."
        },
        {
          id: 7,
          question: "What is ICS adaptation?",
          options: [
            "Applying emergency management system to corporate crises",
            "Only government system",
            "Only military system",
            "Only fire department system"
          ],
          correctAnswer: 0,
          explanation: "ICS adaptation applies standardized emergency management principles to corporate crisis response."
        },
        {
          id: 8,
          question: "What are recovery time objectives?",
          options: [
            "Maximum acceptable downtime for critical functions",
            "Only repair times",
            "Only response times",
            "Only planning times"
          ],
          correctAnswer: 0,
          explanation: "RTO defines how quickly business functions must be restored after disruption."
        },
        {
          id: 9,
          question: "What are crisis response procedures?",
          options: [
            "Standardized protocols for consistent crisis response",
            "Only emergency calls",
            "Only evacuation plans",
            "Only first aid procedures"
          ],
          correctAnswer: 0,
          explanation: "Response procedures provide standardized approaches to assessment, notification, and action."
        },
        {
          id: 10,
          question: "What are legal considerations during crises?",
          options: [
            "Duty of care, contractual obligations, regulatory reporting",
            "Only emergency laws",
            "Only criminal laws",
            "Only international laws"
          ],
          correctAnswer: 0,
          explanation: "Legal considerations include duty of care, contracts, insurance, and regulatory compliance."
        },
        {
          id: 11,
          question: "What are psychological factors in crises?",
          options: [
            "Stress responses, decision impacts, communication challenges",
            "Only physical health",
            "Only financial concerns",
            "Only technical issues"
          ],
          correctAnswer: 0,
          explanation: "Psychological factors include stress, decision-making impacts, and communication difficulties."
        },
        {
          id: 12,
          question: "What are crisis management platforms?",
          options: [
            "Technology systems for notification, coordination, monitoring",
            "Only phone systems",
            "Only email systems",
            "Only meeting rooms"
          ],
          correctAnswer: 0,
          explanation: "Platforms include notification systems, dashboards, resource management, and communication tools."
        },
        {
          id: 13,
          question: "What is post-crisis recovery planning?",
          options: [
            "Restoration of operations and return to normal activities",
            "Only emergency response",
            "Only immediate actions",
            "Only evacuation planning"
          ],
          correctAnswer: 0,
          explanation: "Recovery planning focuses on restoring operations and transitioning back to normal business."
        },
        {
          id: 14,
          question: "What is after-action review?",
          options: [
            "Comprehensive evaluation of crisis response effectiveness",
            "Only success celebration",
            "Only failure analysis",
            "Only blame assignment"
          ],
          correctAnswer: 0,
          explanation: "After-action reviews comprehensively evaluate response effectiveness and identify improvements."
        },
        {
          id: 15,
          question: "What are stakeholder communication plans?",
          options: [
            "Targeted messaging for employees, customers, media, investors",
            "Only internal messages",
            "Only external messages",
            "Only technical messages"
          ],
          correctAnswer: 0,
          explanation: "Stakeholder plans address different communication needs for various affected groups."
        },
        {
          id: 16,
          question: "What is critical function identification?",
          options: [
            "Determining essential business activities requiring priority restoration",
            "Only revenue functions",
            "Only staff functions",
            "Only technical functions"
          ],
          correctAnswer: 0,
          explanation: "Critical functions are essential activities that must be restored quickly to maintain operations."
        },
        {
          id: 17,
          question: "What are team activation protocols?",
          options: [
            "Criteria, notification, assembly, authority delegation procedures",
            "Only emergency calls",
            "Only meeting schedules",
            "Only training schedules"
          ],
          correctAnswer: 0,
          explanation: "Activation protocols define when and how crisis teams are mobilized and deployed."
        },
        {
          id: 18,
          question: "What is media management during crises?",
          options: [
            "Monitoring, spokesperson coordination, press conference management",
            "Only ignoring media",
            "Only avoiding media",
            "Only technical responses"
          ],
          correctAnswer: 0,
          explanation: "Media management includes monitoring, spokesperson coordination, and press event management."
        },
        {
          id: 19,
          question: "What are support services planning?",
          options: [
            "Employee assistance, counseling, family support programs",
            "Only medical services",
            "Only technical support",
            "Only financial support"
          ],
          correctAnswer: 0,
          explanation: "Support services address psychological, emotional, and practical needs during and after crises."
        },
        {
          id: 20,
          question: "What is organizational learning integration?",
          options: [
            "Applying crisis lessons to improve policies, training, and preparedness",
            "Only documenting events",
            "Only blaming individuals",
            "Only celebrating success"
          ],
          correctAnswer: 0,
          explanation: "Learning integration applies crisis experience to enhance policies, training, and future preparedness."
        }
      ]
    },
    {
      id: 6,
      title: "Global Security Operations and Compliance",
      completed: false,
      content: `
## **Module 6: Global Security Operations and Compliance**

### **Global Security Program Management**
Managing security across international operations requires understanding diverse environments and coordinated approaches.

**Global Security Framework:**
- **Centralized Strategy:** Unified security policies and standards
- **Regional Adaptation:** Local customization based on environment
- **Local Implementation:** Country-specific execution and management
- **Global Coordination:** Cross-border information sharing and support
- **Centralized Oversight:** Consistent monitoring and reporting

**Regional Risk Assessment Methodology:**
- Political stability and governance factors
- Crime rates and security environment
- Terrorism and conflict threats
- Natural disaster and environmental risks
- Legal and regulatory compliance requirements

**International Security Standards:**
- ISO 31000 Risk Management Guidelines
- ISO 28000 Supply Chain Security Management
- ISO 22301 Business Continuity Management
- ISO 27001 Information Security Management
- ASIS International Standards and Guidelines

**Cultural Considerations in Global Security:**
- Local business practices and norms
- Communication styles and protocols
- Relationship building approaches
- Security perception and acceptance
- Local partnership development strategies

### **International Travel Security**
Protecting employees during international travel requires specific planning and support.

**Travel Risk Management Program:**
- Pre-travel risk assessment and approval
- Traveler tracking and monitoring systems
- Emergency response and support services
- Medical and evacuation arrangements
- Post-travel debriefing and feedback

**Country Risk Ratings and Monitoring:**
- Government travel advisory monitoring
- Real-time threat intelligence feeds
- Local security situation assessments
- Medical and health risk evaluation
- Cultural and business environment analysis

**Traveler Preparation and Training:**
- Destination-specific security briefings
- Cultural awareness and etiquette training
- Emergency response procedures
- Communication protocols and equipment
- Health and medical precautions

**Crisis Response for Travelers:**
- 24/7 emergency assistance hotlines
- Local response resource networks
- Medical evacuation coordination
- Consular and diplomatic support
- Family communication protocols

### **Expatriate and Family Security**
Protecting employees and families living abroad requires comprehensive planning.

**Expatriate Security Program:**
- Pre-assignment security assessments
- Housing security evaluation and enhancement
- Local security orientation and training
- Ongoing security monitoring and support
- Repatriation security planning

**Family Member Protection:**
- School security assessments and arrangements
- Daily routine security measures
- Medical care access and arrangements
- Cultural adaptation support
- Emergency response planning for families

**Residential Security Standards:**
- Minimum security requirement definitions
- Security enhancement recommendations
- Safe room specifications and requirements
- Alarm and monitoring system standards
- Security guard service specifications

**Community Integration Strategies:**
- Local community relationship building
- Neighborhood security coordination
- Cultural integration programs
- Social network development
- Local resource identification

### **Supply Chain Security Management**
Global supply chains require specific security measures to protect goods and information.

**Supply Chain Security Framework:**
- **Cargo Security:** Transportation and storage protection
- **Information Security:** Supply chain data protection
- **Personnel Security:** Supply chain employee vetting
- **Facility Security:** Manufacturing and storage protection
- **Process Security:** Operational procedure protection

**Customs-Trade Partnership Against Terrorism (C-TPAT):**
- Program requirements and benefits
- Security criteria and validation process
- Importer security filing requirements
- Supply chain security best practices
- Mutual recognition arrangements

**Container Security Initiatives:**
- Container inspection and screening
- Tamper-evident seal requirements
- Tracking and monitoring technologies
- Port security coordination
- International cooperation mechanisms

**Vendor Security Management:**
- International vendor security assessments
- Contractual security requirements
- Ongoing monitoring and auditing
- Incident response coordination
- Performance measurement and reporting

### **International Legal and Regulatory Compliance**
Operating globally requires understanding and complying with diverse legal requirements.

**Data Privacy Regulations:**
- General Data Protection Regulation (GDPR) requirements
- Country-specific data protection laws
- Cross-border data transfer restrictions
- Data localization requirements
- Breach notification obligations

**Export Control Regulations:**
- Dual-use goods and technology controls
- Sanctions and embargo compliance
- End-user and end-use restrictions
- Licensing requirements and processes
- Record-keeping and reporting obligations

**Anti-Corruption Compliance:**
- Foreign Corrupt Practices Act (FCPA) requirements
- UK Bribery Act compliance
- Local anti-corruption laws
- Gift and entertainment policies
- Third-party due diligence requirements

**Labor and Employment Laws:**
- Local employment contract requirements
- Work permit and visa regulations
- Employee rights and protections
- Termination and severance requirements
- Union and collective bargaining laws

### **Cross-Border Incident Response**
Responding to security incidents across international borders presents unique challenges.

**International Incident Response Framework:**
- Jurisdictional authority considerations
- Local law enforcement coordination
- Legal representation requirements
- Cultural response expectations
- Media management across borders

**Crisis Communication Across Cultures:**
- Cultural communication style adaptations
- Language translation requirements
- Local media landscape understanding
- Stakeholder expectation management
- Reputation management considerations

**Family Liaison During International Incidents:**
- Family notification protocols
- Cross-cultural family support
- Travel and accommodation arrangements
- Ongoing communication and updates
- Repatriation assistance

**Legal Coordination for International Incidents:**
- Local legal counsel engagement
- International legal cooperation
- Insurance claim coordination
- Regulatory reporting compliance
- Litigation risk management

### **Global Security Technology Integration**
Technology enables consistent security across international operations.

**Global Security Systems:**
- Centralized access control management
- International video surveillance integration
- Global alarm monitoring and response
- Unified security command centers
- Standardized technology platforms

**Communication Systems for Global Operations:**
- Secure global communication networks
- Satellite communication capabilities
- Local communication system integration
- Emergency notification across time zones
- Translation and interpretation services

**Travel Tracking and Monitoring:**
- Global positioning and tracking systems
- Mobile device security applications
- Location-based alerting systems
- Travel itinerary management platforms
- Emergency assistance applications

**Data Management for Global Security:**
- Centralized incident reporting systems
- Global threat intelligence sharing
- Cross-border data transfer compliance
- Multilingual documentation systems
- International compliance reporting

### **International Partnerships and Relationships**
Building relationships enhances security effectiveness across borders.

**Government and Law Enforcement Relationships:**
- Local law enforcement liaison development
- Embassy and consular relationships
- Intelligence sharing arrangements
- Joint training and exercise participation
- Mutual assistance agreements

**Industry Collaboration:**
- International industry associations
- Information sharing communities
- Best practice exchange forums
- Joint security initiatives
- Standard development participation

**Local Security Provider Management:**
- International vendor selection criteria
- Performance monitoring and measurement
- Contract management across jurisdictions
- Cultural integration with local providers
- Quality assurance and improvement

**Community Engagement:**
- Corporate social responsibility initiatives
- Local community security partnerships
- Cultural exchange programs
- Security awareness in local communities
- Mutual benefit relationship development

### **Global Security Metrics and Reporting**
Measuring and reporting security performance across international operations.

**Global Security Metrics Framework:**
- Standardized measurement criteria
- Regional performance comparisons
- Trend analysis across regions
- Benchmarking against industry standards
- Continuous improvement tracking

**Executive Reporting for Global Operations:**
- Consolidated global security dashboards
- Regional risk heat maps
- Incident trend analysis by region
- Compliance status reporting
- Resource utilization and effectiveness

**Regulatory Reporting Requirements:**
- International compliance reporting
- Cross-border incident reporting
- Data protection compliance reporting
- Export control documentation
- Anti-corruption compliance reporting

**Performance Improvement Processes:**
- Global best practice sharing
- Cross-regional learning transfer
- International benchmarking
- Continuous improvement initiatives
- Technology and innovation adoption

### **Emerging Global Security Challenges**
Anticipating and preparing for evolving international security threats.

**Geopolitical Risk Trends:**
- Political instability and regime changes
- International trade tensions
- Regional conflict escalation
- Terrorism evolution and spread
- Cyber warfare and state-sponsored attacks

**Climate Change Security Impacts:**
- Natural disaster frequency and intensity
- Resource scarcity conflicts
- Population displacement effects
- Infrastructure vulnerability
- Supply chain disruption risks

**Technological Evolution Risks:**
- Artificial intelligence security implications
- Quantum computing threats
- Internet of Things vulnerabilities
- 5G network security challenges
- Biotechnology security risks

**Pandemic and Health Security:**
- Global health crisis preparedness
- Business continuity during pandemics
- Employee health protection
- Supply chain health security
- Remote work security implications

Global security operations require balancing centralized strategy with local adaptation while maintaining compliance with diverse international requirements and preparing for emerging global challenges.
`,
      quiz: [
        {
          id: 1,
          question: "What is global security framework?",
          options: [
            "Centralized strategy with regional adaptation and local implementation",
            "Only local approaches",
            "Only centralized control",
            "Only technology solutions"
          ],
          correctAnswer: 0,
          explanation: "Global framework combines centralized strategy with regional adaptation and local implementation."
        },
        {
          id: 2,
          question: "What is travel risk management?",
          options: [
            "Comprehensive program for international traveler protection",
            "Only flight booking",
            "Only hotel reservations",
            "Only passport processing"
          ],
          correctAnswer: 0,
          explanation: "Travel risk management includes assessment, tracking, emergency response, and medical arrangements."
        },
        {
          id: 3,
          question: "What are expatriate security considerations?",
          options: [
            "Housing security, local orientation, family protection, medical access",
            "Only work security",
            "Only office security",
            "Only travel security"
          ],
          correctAnswer: 0,
          explanation: "Expatriate security addresses housing, local adaptation, family safety, and medical care access."
        },
        {
          id: 4,
          question: "What is supply chain security framework?",
          options: [
            "Cargo, information, personnel, facility, process security integration",
            "Only transportation security",
            "Only warehouse security",
            "Only inventory security"
          ],
          correctAnswer: 0,
          explanation: "Supply chain security integrates protection of goods, information, people, facilities, and processes."
        },
        {
          id: 5,
          question: "What are international legal compliance areas?",
          options: [
            "Data privacy, export controls, anti-corruption, labor laws",
            "Only local laws",
            "Only corporate policies",
            "Only security regulations"
          ],
          correctAnswer: 0,
          explanation: "Compliance includes data protection, export controls, anti-corruption, and employment regulations."
        },
        {
          id: 6,
          question: "What is cross-border incident response?",
          options: [
            "Coordinated response across international jurisdictions",
            "Only local response",
            "Only corporate response",
            "Only technical response"
          ],
          correctAnswer: 0,
          explanation: "Cross-border response coordinates across jurisdictions with legal and cultural considerations."
        },
        {
          id: 7,
          question: "What is global security technology integration?",
          options: [
            "Unified systems across international operations",
            "Only local systems",
            "Only separate systems",
            "Only manual systems"
          ],
          correctAnswer: 0,
          explanation: "Technology integration creates unified security systems across global operations."
        },
        {
          id: 8,
          question: "What are international partnerships?",
          options: [
            "Government, industry, local provider, community relationships",
            "Only vendor contracts",
            "Only employee relationships",
            "Only customer relationships"
          ],
          correctAnswer: 0,
          explanation: "International partnerships include government, industry, local providers, and community relationships."
        },
        {
          id: 9,
          question: "What are global security metrics?",
          options: [
            "Standardized measurements across international operations",
            "Only local metrics",
            "Only financial metrics",
            "Only staff metrics"
          ],
          correctAnswer: 0,
          explanation: "Global metrics provide standardized performance measurement across different regions and operations."
        },
        {
          id: 10,
          question: "What are emerging global security challenges?",
          options: [
            "Geopolitical risks, climate impacts, technological evolution, pandemics",
            "Only current threats",
            "Only local threats",
            "Only historical threats"
          ],
          correctAnswer: 0,
          explanation: "Emerging challenges include geopolitical changes, climate impacts, technology risks, and health crises."
        },
        {
          id: 11,
          question: "What is regional risk assessment?",
          options: [
            "Country-specific evaluation of political, crime, terrorism, environmental risks",
            "Only financial risk",
            "Only operational risk",
            "Only technical risk"
          ],
          correctAnswer: 0,
          explanation: "Regional assessment evaluates political, crime, terrorism, environmental, and legal risks by country."
        },
        {
          id: 12,
          question: "What is C-TPAT?",
          options: [
            "Customs-Trade Partnership Against Terrorism program",
            "Only shipping program",
            "Only customs program",
            "Only trade program"
          ],
          correctAnswer: 0,
          explanation: "C-TPAT is a voluntary supply chain security program with U.S. Customs and Border Protection."
        },
        {
          id: 13,
          question: "What is GDPR?",
          options: [
            "General Data Protection Regulation for data privacy",
            "Only security regulation",
            "Only trade regulation",
            "Only employment regulation"
          ],
          correctAnswer: 0,
          explanation: "GDPR is the European Union's comprehensive data protection and privacy regulation."
        },
        {
          id: 14,
          question: "What are cultural considerations in global security?",
          options: [
            "Local practices, communication styles, relationship building approaches",
            "Only language differences",
            "Only time zone differences",
            "Only currency differences"
          ],
          correctAnswer: 0,
          explanation: "Cultural considerations include business practices, communication styles, and relationship approaches."
        },
        {
          id: 15,
          question: "What is international standard adoption?",
          options: [
            "Implementing ISO and ASIS standards across global operations",
            "Only local standards",
            "Only company standards",
            "Only industry standards"
          ],
          correctAnswer: 0,
          explanation: "Standard adoption implements internationally recognized security standards across operations."
        },
        {
          id: 16,
          question: "What is traveler preparation and training?",
          options: [
            "Destination briefings, cultural awareness, emergency procedures",
            "Only flight information",
            "Only hotel information",
            "Only meeting schedules"
          ],
          correctAnswer: 0,
          explanation: "Traveler preparation includes security briefings, cultural training, and emergency response training."
        },
        {
          id: 17,
          question: "What are residential security standards?",
          options: [
            "Minimum requirements for expatriate housing security",
            "Only building codes",
            "Only fire codes",
            "Only electrical codes"
          ],
          correctAnswer: 0,
          explanation: "Residential standards define minimum security requirements for employee housing internationally."
        },
        {
          id: 18,
          question: "What are export control regulations?",
          options: [
            "Restrictions on international technology and goods transfers",
            "Only shipping regulations",
            "Only customs regulations",
            "Only trade regulations"
          ],
          correctAnswer: 0,
          explanation: "Export controls regulate international transfer of sensitive technologies, goods, and information."
        },
        {
          id: 19,
          question: "What is global incident reporting?",
          options: [
            "Centralized reporting of security incidents across international operations",
            "Only local reporting",
            "Only regional reporting",
            "Only headquarters reporting"
          ],
          correctAnswer: 0,
          explanation: "Global incident reporting provides centralized visibility of security events across all operations."
        },
        {
          id: 20,
          question: "What are geopolitical risk trends?",
          options: [
            "Political instability, trade tensions, regional conflicts, terrorism evolution",
            "Only economic trends",
            "Only market trends",
            "Only technology trends"
          ],
          correctAnswer: 0,
          explanation: "Geopolitical risks include political changes, international tensions, conflicts, and terrorism patterns."
        }
      ]
    }
  ],
  
  finalExam: [
    {
      id: 1,
      question: "What is strategic security alignment?",
      options: [
        "Integrating security with business goals and governance",
        "Only technical security measures",
        "Only physical security planning",
        "Only compliance requirements"
      ],
      correctAnswer: 0,
      explanation: "Strategic alignment ensures security initiatives support business objectives and integrate with corporate governance.",
      module: 1
    },
    {
      id: 2,
      question: "What is executive protection philosophy?",
      options: [
        "Low-profile, layered protection with continuous assessment",
        "Only visible armed guards",
        "Only technical surveillance",
        "Only residential security"
      ],
      correctAnswer: 0,
      explanation: "EP philosophy emphasizes minimal visibility, multiple security layers, and ongoing threat assessment.",
      module: 2
    },
    {
      id: 3,
      question: "What are corporate investigation principles?",
      options: [
        "Objectivity, thoroughness, confidentiality, legality, timeliness",
        "Only speed",
        "Only cost savings",
        "Only management approval"
      ],
      correctAnswer: 0,
      explanation: "Investigation principles ensure impartial, comprehensive, confidential, legal, and timely fact-finding.",
      module: 3
    },
    {
      id: 4,
      question: "What are SOC design principles?",
      options: [
        "Centralized monitoring, integrated systems, scalable architecture",
        "Only physical security",
        "Only cyber security",
        "Only video surveillance"
      ],
      correctAnswer: 0,
      explanation: "SOC design principles include centralized monitoring, system integration, scalability, and resilient operations.",
      module: 4
    },
    {
      id: 5,
      question: "What are crisis management principles?",
      options: [
        "Proactive preparation, rapid response, effective communication",
        "Only emergency response",
        "Only financial management",
        "Only public relations"
      ],
      correctAnswer: 0,
      explanation: "Crisis management principles include proactive planning, rapid response, and effective communication.",
      module: 5
    },
    {
      id: 6,
      question: "What is global security framework?",
      options: [
        "Centralized strategy with regional adaptation and local implementation",
        "Only local approaches",
        "Only centralized control",
        "Only technology solutions"
      ],
      correctAnswer: 0,
      explanation: "Global framework combines centralized strategy with regional adaptation and local implementation.",
      module: 6
    },
    {
      id: 7,
      question: "What does the CSO role involve?",
      options: [
        "Enterprise-wide security strategy and leadership",
        "Only physical security management",
        "Only technical security implementation",
        "Only employee screening"
      ],
      correctAnswer: 0,
      explanation: "The Chief Security Officer leads enterprise security strategy, cross-functional teams, and executive stakeholder management.",
      module: 1
    },
    {
      id: 8,
      question: "What does advance team do in executive protection?",
      options: [
        "Prepares locations before protectee arrival",
        "Only drives vehicles",
        "Only provides close protection",
        "Only handles intelligence"
      ],
      correctAnswer: 0,
      explanation: "Advance teams conduct security surveys, coordinate with local resources, and prepare locations in advance.",
      module: 2
    },
    {
      id: 9,
      question: "What is chain of custody in investigations?",
      options: [
        "Documented evidence handling from collection to court",
        "Only evidence storage",
        "Only evidence collection",
        "Only evidence analysis"
      ],
      correctAnswer: 0,
      explanation: "Chain of custody documents evidence handling to maintain integrity and legal admissibility.",
      module: 3
    },
    {
      id: 10,
      question: "What is SIEM in SOC operations?",
      options: [
        "Security Information and Event Management system",
        "Only video management",
        "Only access control",
        "Only physical security"
      ],
      correctAnswer: 0,
      explanation: "SIEM systems collect, correlate, and analyze security event logs from multiple sources.",
      module: 4
    },
    {
      id: 11,
      question: "What are crisis types?",
      options: [
        "Operational, financial, reputational, physical, humanitarian",
        "Only natural disasters",
        "Only financial problems",
        "Only technical failures"
      ],
      correctAnswer: 0,
      explanation: "Crisis types include operational, financial, reputational, physical, and humanitarian events.",
      module: 5
    },
    {
      id: 12,
      question: "What is travel risk management?",
      options: [
        "Comprehensive program for international traveler protection",
        "Only flight booking",
        "Only hotel reservations",
        "Only passport processing"
      ],
      correctAnswer: 0,
      explanation: "Travel risk management includes assessment, tracking, emergency response, and medical arrangements.",
      module: 6
    },
    {
      id: 13,
      question: "What are security maturity model levels?",
      options: [
        "Progressive stages from ad-hoc to optimized security",
        "Only budget levels",
        "Only staff size categories",
        "Only technology sophistication"
      ],
      correctAnswer: 0,
      explanation: "Maturity models describe progressive stages of security program development from initial to optimizing levels.",
      module: 1
    },
    {
      id: 14,
      question: "What are executive cyber threats?",
      options: [
        "Spear phishing, social engineering, digital tracking",
        "Only virus attacks",
        "Only network breaches",
        "Only data theft"
      ],
      correctAnswer: 0,
      explanation: "Executives face targeted digital threats including spear phishing, social engineering, and location tracking.",
      module: 2
    },
    {
      id: 15,
      question: "What are financial investigation areas?",
      options: [
        "Asset misappropriation, corruption, financial statement fraud",
        "Only theft investigation",
        "Only employee screening",
        "Only background checks"
      ],
      correctAnswer: 0,
      explanation: "Financial investigations cover asset theft, corruption schemes, and financial record manipulation.",
      module: 3
    },
    {
      id: 16,
      question: "What are SOC tier models?",
      options: [
        "Monitoring, analysis, advanced analysis, management tiers",
        "Only technical levels",
        "Only management levels",
        "Only experience levels"
      ],
      correctAnswer: 0,
      explanation: "SOC tiers define different responsibility levels from monitoring through advanced analysis and management.",
      module: 4
    },
    {
      id: 17,
      question: "What is crisis management lifecycle?",
      options: [
        "Prevention, preparation, response, recovery, learning",
        "Only emergency response",
        "Only recovery phase",
        "Only planning phase"
      ],
      correctAnswer: 0,
      explanation: "The lifecycle includes prevention, preparation, response, recovery, and learning phases.",
      module: 5
    },
    {
      id: 18,
      question: "What are expatriate security considerations?",
      options: [
        "Housing security, local orientation, family protection, medical access",
        "Only work security",
        "Only office security",
        "Only travel security"
      ],
      correctAnswer: 0,
      explanation: "Expatriate security addresses housing, local adaptation, family safety, and medical care access.",
      module: 6
    },
    {
      id: 19,
      question: "What is security program lifecycle?",
      options: [
        "Assessment, planning, design, implementation, operation, evaluation",
        "Only implementation phase",
        "Only daily operations",
        "Only emergency response"
      ],
      correctAnswer: 0,
      explanation: "The lifecycle includes assessment, planning, design, implementation, operation, and evaluation phases.",
      module: 1
    },
    {
      id: 20,
      question: "What is protective formation in executive protection?",
      options: [
        "Strategic positioning of protection team members",
        "Only vehicle positioning",
        "Only building layout",
        "Only crowd control"
      ],
      correctAnswer: 0,
      explanation: "Protective formations are strategic positioning arrangements that provide optimal protection coverage.",
      module: 2
    },
    {
      id: 21,
      question: "What is due diligence investigation?",
      options: [
        "Pre-transaction risk assessment and verification",
        "Only employee investigation",
        "Only criminal investigation",
        "Only security assessment"
      ],
      correctAnswer: 0,
      explanation: "Due diligence investigates risks before business transactions like mergers or partnerships.",
      module: 3
    },
    {
      id: 22,
      question: "What is alert management process in SOC?",
      options: [
        "Detection, triage, investigation, response, resolution, documentation",
        "Only alert generation",
        "Only response actions",
        "Only report writing"
      ],
      correctAnswer: 0,
      explanation: "Alert management includes detection, assessment, investigation, response, resolution, and documentation.",
      module: 4
    },
    {
      id: 23,
      question: "What are crisis team roles?",
      options: [
        "Crisis manager, communications lead, operations lead, legal advisor",
        "Only security staff",
        "Only executives",
        "Only IT staff"
      ],
      correctAnswer: 0,
      explanation: "Crisis teams include leadership, communications, operations, legal, and HR roles.",
      module: 5
    },
    {
      id: 24,
      question: "What is supply chain security framework?",
      options: [
        "Cargo, information, personnel, facility, process security integration",
        "Only transportation security",
        "Only warehouse security",
        "Only inventory security"
      ],
      correctAnswer: 0,
      explanation: "Supply chain security integrates protection of goods, information, people, facilities, and processes.",
      module: 6
    },
    {
      id: 25,
      question: "What is ROSI in security budgeting?",
      options: [
        "Return on Security Investment calculation",
        "Only security budget",
        "Only risk assessment",
        "Only compliance cost"
      ],
      correctAnswer: 0,
      explanation: "ROSI helps quantify the financial return from security investments by comparing costs to risk reduction benefits.",
      module: 1
    },
    {
      id: 26,
      question: "What is CPTED in residential security?",
      options: [
        "Crime Prevention Through Environmental Design",
        "Only alarm systems",
        "Only guard patrols",
        "Only camera systems"
      ],
      correctAnswer: 0,
      explanation: "CPTED uses design principles to reduce crime opportunities through environmental manipulation.",
      module: 2
    },
    {
      id: 27,
      question: "What is the intelligence cycle?",
      options: [
        "Planning, collection, processing, analysis, dissemination",
        "Only data collection",
        "Only report writing",
        "Only surveillance"
      ],
      correctAnswer: 0,
      explanation: "The intelligence cycle systematically plans, collects, processes, analyzes, and distributes information.",
      module: 3
    },
    {
      id: 28,
      question: "What is threat hunting in SOC?",
      options: [
        "Proactive search for undetected threats",
        "Only alert response",
        "Only incident investigation",
        "Only compliance checking"
      ],
      correctAnswer: 0,
      explanation: "Threat hunting proactively searches for threats that may have evaded automated detection systems.",
      module: 4
    },
    {
      id: 29,
      question: "What are crisis communication principles?",
      options: [
        "Transparency, accuracy, timeliness, consistency, empathy",
        "Only secrecy",
        "Only delay",
        "Only technical details"
      ],
      correctAnswer: 0,
      explanation: "Communication should be transparent, accurate, timely, consistent, and empathetic.",
      module: 5
    },
    {
      id: 30,
      question: "What are international legal compliance areas?",
      options: [
        "Data privacy, export controls, anti-corruption, labor laws",
        "Only local laws",
        "Only corporate policies",
        "Only security regulations"
      ],
      correctAnswer: 0,
      explanation: "Compliance includes data protection, export controls, anti-corruption, and employment regulations.",
      module: 6
    },
    {
      id: 31,
      question: "What is third-party risk management?",
      options: [
        "Managing security risks from vendors and partners",
        "Only employee risks",
        "Only physical risks",
        "Only technical risks"
      ],
      correctAnswer: 0,
      explanation: "Third-party risk management addresses security risks introduced by vendors, suppliers, and business partners.",
      module: 1
    },
    {
      id: 32,
      question: "What are protection levels in executive protection?",
      options: [
        "Basic, enhanced, high-risk, maximum protection",
        "Only armed vs unarmed",
        "Only day vs night",
        "Only domestic vs international"
      ],
      correctAnswer: 0,
      explanation: "Protection levels range from basic low-threat to maximum extreme-threat environments.",
      module: 2
    },
    {
      id: 33,
      question: "What are interview techniques in investigations?",
      options: [
        "Rapport building, question formulation, active listening",
        "Only interrogation",
        "Only note-taking",
        "Only recording"
      ],
      correctAnswer: 0,
      explanation: "Effective interviewing uses rapport building, strategic questioning, and active listening skills.",
      module: 3
    },
    {
      id: 34,
      question: "What is incident response lifecycle in SOC?",
      options: [
        "Preparation, identification, containment, eradication, recovery, lessons learned",
        "Only emergency response",
        "Only technical fixes",
        "Only report submission"
      ],
      correctAnswer: 0,
      explanation: "The incident response lifecycle includes all phases from preparation through lessons learned.",
      module: 4
    },
    {
      id: 35,
      question: "What is business impact analysis?",
      options: [
        "Assessment of crisis effects on operations and finances",
        "Only financial analysis",
        "Only technical analysis",
        "Only staff analysis"
      ],
      correctAnswer: 0,
      explanation: "Business impact analysis evaluates operational, financial, and reputational consequences of crises.",
      module: 5
    },
    {
      id: 36,
      question: "What is cross-border incident response?",
      options: [
        "Coordinated response across international jurisdictions",
        "Only local response",
        "Only corporate response",
        "Only technical response"
      ],
      correctAnswer: 0,
      explanation: "Cross-border response coordinates across jurisdictions with legal and cultural considerations.",
      module: 6
    },
    {
      id: 37,
      question: "What are security steering committees?",
      options: [
        "Cross-departmental groups overseeing security initiatives",
        "Only security department meetings",
        "Only executive meetings",
        "Only technical teams"
      ],
      correctAnswer: 0,
      explanation: "Steering committees provide cross-functional oversight, resource allocation, and strategic direction for security.",
      module: 1
    },
    {
      id: 38,
      question: "What is advance security survey in executive protection?",
      options: [
        "Location vulnerability and emergency egress planning",
        "Only guard scheduling",
        "Only budget planning",
        "Only equipment ordering"
      ],
      correctAnswer: 0,
      explanation: "Advance surveys assess vulnerabilities, identify safe rooms, plan emergency exits, and verify local resources.",
      module: 2
    },
    {
      id: 39,
      question: "What is investigation report structure?",
      options: [
        "Executive summary, background, findings, conclusions, recommendations",
        "Only findings section",
        "Only evidence list",
        "Only witness statements"
      ],
      correctAnswer: 0,
      explanation: "Reports include executive summary, background, findings, conclusions, and recommendations sections.",
      module: 3
    },
    {
      id: 40,
      question: "What are SOC KPIs?",
      options: [
        "MTTD, MTTR, alert rates, false positive rates",
        "Only staff numbers",
        "Only budget size",
        "Only equipment counts"
      ],
      correctAnswer: 0,
      explanation: "KPIs measure detection time, response time, alert volumes, and accuracy rates.",
      module: 4
    }
  ]
};
