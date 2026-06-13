export const riskManagementDiplomaCourse = {
  // ==================== COURSE METADATA ====================
  id: "risk-management-diploma",
  title: "Risk Management (Diploma)",
  description: "Advanced risk management strategies, frameworks, and implementation techniques. Master enterprise risk management, quantitative analysis, regulatory compliance, and strategic risk decision-making for organizational resilience and competitive advantage.",
  duration: "10 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  icon: "🎯",
  badge: "Diploma",
  prerequisites: ["insurance-certificate"],
  
  // ==================== MODULE STRUCTURE ====================
  modules: [
    // ==================== MODULE 1 ====================
    {
      id: 1,
      title: "Advanced Risk Concepts & Frameworks",
      content: `
## **Enterprise Risk Management Foundations**

Risk management has evolved from simple insurance buying to a strategic organizational function. Modern risk management creates value by identifying opportunities within uncertainty.

### **1. Evolution of Risk Management**
- **Traditional Approach**: Focused on hazard risks and insurance
- **Financial Risk Era**: Added market and credit risk management
- **Enterprise Risk Management (ERM)**: Holistic, organization-wide approach
- **Strategic Risk Management**: Integrating risk into business strategy
- **Resilience Engineering**: Building adaptive capacity for uncertainty

### **2. Core ERM Frameworks**
- **COSO ERM Framework**: Integrated with strategy and performance
- **ISO 31000**: International risk management standard
- **RIMS Risk Maturity Model**: Assesses organizational capability
- **Three Lines of Defense Model**: Governance and oversight structure
- **FAIR Model**: Factor Analysis of Information Risk

### **3. Strategic Risk Categories**
- **Strategic Risks**: Affecting ability to achieve objectives
- **Operational Risks**: From internal processes and systems
- **Financial Risks**: Market, credit, and liquidity exposures
- **Compliance Risks**: Legal and regulatory requirements
- **Reputational Risks**: Impact on stakeholder perception

### **Real-World Application**
Global corporations like Siemens and Microsoft use integrated ERM frameworks to align risk management with business strategy, enabling better decision-making and creating competitive advantage through intelligent risk-taking.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What represents the holistic, organization-wide approach to risk?",
          options: ["Traditional Insurance", "Enterprise Risk Management", "Financial Risk Control", "Compliance Monitoring"],
          correctAnswer: 1,
          explanation: "Enterprise Risk Management (ERM) takes a comprehensive view of all risks across the organization."
        },
        {
          id: 2,
          question: "Which international standard provides risk management guidelines?",
          options: ["COSO", "ISO 31000", "RIMS", "FAIR"],
          correctAnswer: 1,
          explanation: "ISO 31000 is the international standard for risk management principles and guidelines."
        },
        {
          id: 3,
          question: "What does the Three Lines of Defense model establish?",
          options: ["Insurance Coverage", "Governance Structure", "Risk Appetite", "Compliance Procedures"],
          correctAnswer: 1,
          explanation: "The Three Lines of Defense model creates clear governance and oversight responsibilities."
        },
        {
          id: 4,
          question: "Which risk category affects achievement of business objectives?",
          options: ["Operational Risks", "Strategic Risks", "Financial Risks", "Compliance Risks"],
          correctAnswer: 1,
          explanation: "Strategic risks directly impact the organization's ability to achieve its strategic goals."
        },
        {
          id: 5,
          question: "What has modern risk management evolved to include?",
          options: ["Only insurance buying", "Creating value from uncertainty", "Eliminating all risks", "Avoiding decision-making"],
          correctAnswer: 1,
          explanation: "Modern risk management creates value by identifying opportunities within uncertainty."
        },
        {
          id: 6,
          question: "Which framework integrates risk with strategy and performance?",
          options: ["FAIR Model", "COSO ERM", "RIMS Maturity Model", "Traditional Approach"],
          correctAnswer: 1,
          explanation: "COSO ERM Framework integrates risk management with organizational strategy and performance."
        },
        {
          id: 7,
          question: "What do operational risks primarily involve?",
          options: ["Market fluctuations", "Internal processes and systems", "Legal requirements", "Stakeholder perception"],
          correctAnswer: 1,
          explanation: "Operational risks arise from failures in internal processes, people, or systems."
        },
        {
          id: 8,
          question: "What assesses organizational risk management capability?",
          options: ["ISO 31000", "RIMS Risk Maturity Model", "Three Lines Model", "FAIR Analysis"],
          correctAnswer: 1,
          explanation: "RIMS Risk Maturity Model evaluates an organization's risk management capabilities."
        },
        {
          id: 9,
          question: "What type of risk involves stakeholder perception?",
          options: ["Financial Risk", "Compliance Risk", "Reputational Risk", "Operational Risk"],
          correctAnswer: 2,
          explanation: "Reputational risk affects how stakeholders perceive the organization's value and trustworthiness."
        },
        {
          id: 10,
          question: "What does resilience engineering focus on?",
          options: ["Eliminating risks", "Building adaptive capacity", "Increasing insurance", "Reducing costs"],
          correctAnswer: 1,
          explanation: "Resilience engineering builds organizational capacity to adapt to unexpected events."
        },
        {
          id: 11,
          question: "Which era added market and credit risk management?",
          options: ["Traditional Approach", "Financial Risk Era", "ERM Period", "Strategic Integration"],
          correctAnswer: 1,
          explanation: "The Financial Risk Era expanded risk management beyond insurance to financial risks."
        },
        {
          id: 12,
          question: "What does FAIR Model specifically analyze?",
          options: ["Market Risk", "Information Risk", "Operational Risk", "Strategic Risk"],
          correctAnswer: 1,
          explanation: "FAIR (Factor Analysis of Information Risk) models information security risks."
        },
        {
          id: 13,
          question: "What do financial risks include?",
          options: ["Process failures", "Market and credit exposures", "Legal violations", "Strategy failures"],
          correctAnswer: 1,
          explanation: "Financial risks encompass market, credit, and liquidity exposures."
        },
        {
          id: 14,
          question: "What is compliance risk related to?",
          options: ["Market changes", "Legal and regulatory requirements", "Internal processes", "Business strategy"],
          correctAnswer: 1,
          explanation: "Compliance risk involves failing to meet legal, regulatory, or ethical requirements."
        },
        {
          id: 15,
          question: "How do corporations benefit from integrated ERM?",
          options: ["By avoiding all risks", "Through better strategic decision-making", "By eliminating uncertainty", "Through insurance savings"],
          correctAnswer: 1,
          explanation: "Integrated ERM enables better strategic decisions through comprehensive risk understanding."
        },
        {
          id: 16,
          question: "What does strategic risk management integrate?",
          options: ["Risk with business strategy", "Only insurance programs", "Compliance requirements", "Financial controls"],
          correctAnswer: 0,
          explanation: "Strategic risk management integrates risk considerations directly into business strategy."
        },
        {
          id: 17,
          question: "What is NOT part of traditional risk approach?",
          options: ["Hazard risks", "Insurance focus", "Strategic opportunity", "Loss prevention"],
          correctAnswer: 2,
          explanation: "Traditional approach focused on hazards and losses, not strategic opportunities."
        },
        {
          id: 18,
          question: "What creates competitive advantage in risk management?",
          options: ["Avoiding all risks", "Intelligent risk-taking", "Maximum insurance", "Risk elimination"],
          correctAnswer: 1,
          explanation: "Intelligent risk-taking based on thorough analysis creates competitive advantage."
        },
        {
          id: 19,
          question: "What do global corporations use ERM for?",
          options: ["Only compliance", "Aligning risk with business strategy", "Eliminating uncertainty", "Reducing insurance costs"],
          correctAnswer: 1,
          explanation: "Global corporations use ERM to align risk management with overall business strategy."
        },
        {
          id: 20,
          question: "What is the modern view of risk management?",
          options: ["Cost center", "Strategic function", "Insurance department", "Compliance requirement"],
          correctAnswer: 1,
          explanation: "Modern organizations view risk management as a strategic function creating value."
        }
      ]
    },

    // ==================== MODULE 2 ====================
    {
      id: 2,
      title: "Risk Identification & Assessment",
      content: `
## **Systematic Risk Discovery & Evaluation**

Effective risk management begins with comprehensive identification and rigorous assessment. This module covers advanced techniques for discovering and evaluating organizational risks.

### **1. Risk Identification Methods**
- **Brainstorming Sessions**: Structured group ideation techniques
- **Delphi Method**: Anonymous expert consensus building
- **SWOT Analysis**: Strengths, Weaknesses, Opportunities, Threats
- **Process Mapping**: Identifying risks in workflows and systems
- **Scenario Analysis**: Exploring possible future events
- **Checklists & Questionnaires**: Systematic risk discovery tools

### **2. Risk Assessment Techniques**
- **Risk Matrices**: Probability vs. Impact visualization
- **Bow-Tie Analysis**: Visualizing causes and consequences
- **Fault Tree Analysis**: Systematic failure pathway identification
- **Event Tree Analysis**: Consequence pathway development
- **Risk Registers**: Comprehensive risk documentation
- **Heat Maps**: Visual risk prioritization tools

### **3. Quantitative Assessment Tools**
- **Monte Carlo Simulation**: Modeling uncertainty and variability
- **Value at Risk (VaR)**: Statistical risk measurement
- **Stress Testing**: Extreme scenario evaluation
- **Sensitivity Analysis**: Impact of variable changes
- **Expected Monetary Value**: Probability-weighted outcomes
- **Decision Tree Analysis**: Structured decision pathways

### **Real-World Application**
Financial institutions use Value at Risk (VaR) models to quantify potential losses in trading portfolios, while manufacturing companies employ Fault Tree Analysis to prevent production failures. Both demonstrate tailored assessment approaches for different risk types.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What method uses anonymous expert consensus building?",
          options: ["Brainstorming", "Delphi Method", "SWOT Analysis", "Process Mapping"],
          correctAnswer: 1,
          explanation: "The Delphi Method gathers anonymous expert opinions to build consensus."
        },
        {
          id: 2,
          question: "What does SWOT Analysis evaluate?",
          options: ["Only strengths", "Strengths, Weaknesses, Opportunities, Threats", "Only risks", "Only opportunities"],
          correctAnswer: 1,
          explanation: "SWOT analyzes internal Strengths/Weaknesses and external Opportunities/Threats."
        },
        {
          id: 3,
          question: "What visualizes probability vs. impact?",
          options: ["Bow-Tie Analysis", "Risk Matrix", "Fault Tree", "Event Tree"],
          correctAnswer: 1,
          explanation: "Risk matrices plot risks based on their probability and potential impact."
        },
        {
          id: 4,
          question: "What does Bow-Tie Analysis visualize?",
          options: ["Only causes", "Causes and consequences", "Only probabilities", "Financial impacts"],
          correctAnswer: 1,
          explanation: "Bow-Tie Analysis visually maps causes, preventative controls, and consequences."
        },
        {
          id: 5,
          question: "Which technique models uncertainty through simulation?",
          options: ["SWOT", "Monte Carlo", "VaR", "Sensitivity Analysis"],
          correctAnswer: 1,
          explanation: "Monte Carlo Simulation models uncertainty through repeated random sampling."
        },
        {
          id: 6,
          question: "What statistical measure quantifies potential losses?",
          options: ["Expected Value", "Value at Risk", "Stress Test", "Decision Tree"],
          correctAnswer: 1,
          explanation: "Value at Risk (VaR) statistically measures potential portfolio losses."
        },
        {
          id: 7,
          question: "What identifies systematic failure pathways?",
          options: ["Event Tree Analysis", "Fault Tree Analysis", "Process Mapping", "Brainstorming"],
          correctAnswer: 1,
          explanation: "Fault Tree Analysis systematically identifies potential failure pathways."
        },
        {
          id: 8,
          question: "What evaluates extreme scenarios?",
          options: ["Sensitivity Analysis", "Stress Testing", "Monte Carlo", "Expected Value"],
          correctAnswer: 1,
          explanation: "Stress Testing evaluates performance under extreme but plausible scenarios."
        },
        {
          id: 9,
          question: "What documents comprehensive risk information?",
          options: ["Risk Matrix", "Risk Register", "Heat Map", "Bow-Tie Diagram"],
          correctAnswer: 1,
          explanation: "Risk registers systematically document identified risks and their characteristics."
        },
        {
          id: 10,
          question: "What analyzes impact of variable changes?",
          options: ["Stress Testing", "Sensitivity Analysis", "VaR", "Monte Carlo"],
          correctAnswer: 1,
          explanation: "Sensitivity Analysis examines how outcome changes with input variations."
        },
        {
          id: 11,
          question: "What uses structured group ideation?",
          options: ["Delphi Method", "Brainstorming Sessions", "Questionnaires", "Process Mapping"],
          correctAnswer: 1,
          explanation: "Structured brainstorming sessions facilitate group risk identification."
        },
        {
          id: 12,
          question: "What visualizes risk prioritization?",
          options: ["Risk Registers", "Heat Maps", "Fault Trees", "Event Trees"],
          correctAnswer: 1,
          explanation: "Heat maps provide visual prioritization based on risk severity."
        },
        {
          id: 13,
          question: "What develops consequence pathways?",
          options: ["Fault Tree Analysis", "Event Tree Analysis", "Process Mapping", "SWOT Analysis"],
          correctAnswer: 1,
          explanation: "Event Tree Analysis develops potential consequence pathways from initiating events."
        },
        {
          id: 14,
          question: "What calculates probability-weighted outcomes?",
          options: ["VaR", "Expected Monetary Value", "Stress Test", "Sensitivity Analysis"],
          correctAnswer: 1,
          explanation: "Expected Monetary Value multiplies outcome values by their probabilities."
        },
        {
          id: 15,
          question: "What identifies risks in workflows?",
          options: ["Brainstorming", "Process Mapping", "Delphi Method", "Checklists"],
          correctAnswer: 1,
          explanation: "Process mapping identifies risks within workflow and system processes."
        },
        {
          id: 16,
          question: "What do financial institutions use VaR for?",
          options: ["Operational risks", "Portfolio loss quantification", "Strategic planning", "Compliance tracking"],
          correctAnswer: 1,
          explanation: "Financial institutions use VaR to quantify potential trading portfolio losses."
        },
        {
          id: 17,
          question: "What explores possible future events?",
          options: ["Checklists", "Scenario Analysis", "Questionnaires", "Process Mapping"],
          correctAnswer: 1,
          explanation: "Scenario Analysis explores plausible future events and their implications."
        },
        {
          id: 18,
          question: "What uses structured decision pathways?",
          options: ["Monte Carlo", "Decision Tree Analysis", "Sensitivity Analysis", "Stress Testing"],
          correctAnswer: 1,
          explanation: "Decision Tree Analysis maps out structured decision pathways and outcomes."
        },
        {
          id: 19,
          question: "What prevents production failures in manufacturing?",
          options: ["VaR Models", "Fault Tree Analysis", "Brainstorming", "SWOT Analysis"],
          correctAnswer: 1,
          explanation: "Manufacturers use Fault Tree Analysis to prevent production system failures."
        },
        {
          id: 20,
          question: "What are systematic risk discovery tools?",
          options: ["Only expert judgment", "Checklists and questionnaires", "Only simulations", "Only financial models"],
          correctAnswer: 1,
          explanation: "Checklists and questionnaires provide systematic approaches to risk discovery."
        }
      ]
    },

    // ==================== MODULE 3 ====================
    {
      id: 3,
      title: "Risk Treatment Strategies",
      content: `
## **Advanced Risk Response & Control Implementation**

Once risks are identified and assessed, organizations must implement appropriate treatment strategies. This module covers sophisticated approaches to risk mitigation, transfer, and acceptance.

### **1. Risk Treatment Options**
- **Risk Avoidance**: Eliminating the activity creating risk
- **Risk Reduction**: Implementing controls to lower impact/likelihood
- **Risk Transfer**: Shifting risk to third parties (insurance, contracts)
- **Risk Retention**: Accepting and budgeting for the risk
- **Risk Exploitation**: Pursuing opportunities within risks
- **Risk Sharing**: Partnering to distribute risk burden

### **2. Control Implementation Framework**
- **Preventive Controls**: Stop risks from occurring
- **Detective Controls**: Identify when risks have occurred
- **Corrective Controls**: Restore operations after risk events
- **Directive Controls**: Guide desired behaviors and actions
- **Compensating Controls**: Alternative measures when primary controls fail
- **Key Risk Indicators**: Early warning signals for emerging risks

### **3. Advanced Risk Financing**
- **Captive Insurance**: Company-owned insurance entities
- **Risk Retention Groups**: Industry-specific risk pools
- **Catastrophe Bonds**: Insurance-linked securities
- **Derivative Instruments**: Financial risk transfer tools
- **Contingent Capital**: Pre-arranged emergency funding
- **Multi-Year Insurance Programs**: Long-term risk transfer solutions

### **Real-World Application**
Technology companies use sophisticated cyber insurance combined with preventive security controls, while energy companies employ catastrophe bonds for natural disaster risks. Both demonstrate integrated risk treatment approaches combining multiple strategies.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What treatment eliminates the risk-creating activity?",
          options: ["Risk Reduction", "Risk Avoidance", "Risk Transfer", "Risk Retention"],
          correctAnswer: 1,
          explanation: "Risk avoidance eliminates exposure by stopping the risky activity entirely."
        },
        {
          id: 2,
          question: "What implements controls to lower risk?",
          options: ["Risk Avoidance", "Risk Reduction", "Risk Transfer", "Risk Exploitation"],
          correctAnswer: 1,
          explanation: "Risk reduction implements controls to decrease likelihood or impact."
        },
        {
          id: 3,
          question: "What shifts risk to third parties?",
          options: ["Risk Retention", "Risk Transfer", "Risk Avoidance", "Risk Reduction"],
          correctAnswer: 1,
          explanation: "Risk transfer shifts risk burden to insurance companies or other parties."
        },
        {
          id: 4,
          question: "What are preventive controls designed to do?",
          options: ["Detect occurrences", "Stop risks from occurring", "Restore operations", "Guide behaviors"],
          correctAnswer: 1,
          explanation: "Preventive controls stop risks from occurring in the first place."
        },
        {
          id: 5,
          question: "What identifies when risks have occurred?",
          options: ["Preventive Controls", "Detective Controls", "Corrective Controls", "Directive Controls"],
          correctAnswer: 1,
          explanation: "Detective controls identify and alert when risk events have occurred."
        },
        {
          id: 6,
          question: "What are company-owned insurance entities called?",
          options: ["Risk Pools", "Captive Insurance", "Catastrophe Bonds", "Derivative Instruments"],
          correctAnswer: 1,
          explanation: "Captive insurance companies are owned by the organizations they insure."
        },
        {
          id: 7,
          question: "What restores operations after risk events?",
          options: ["Preventive Controls", "Detective Controls", "Corrective Controls", "Directive Controls"],
          correctAnswer: 2,
          explanation: "Corrective controls restore normal operations after risk events occur."
        },
        {
          id: 8,
          question: "What are insurance-linked securities?",
          options: ["Captive Insurance", "Risk Retention Groups", "Catastrophe Bonds", "Contingent Capital"],
          correctAnswer: 2,
          explanation: "Catastrophe bonds transfer insurance risk to capital market investors."
        },
        {
          id: 9,
          question: "What provides early warning signals?",
          options: ["Corrective Controls", "Key Risk Indicators", "Preventive Controls", "Compensating Controls"],
          correctAnswer: 1,
          explanation: "Key Risk Indicators (KRIs) signal increasing risk levels before events occur."
        },
        {
          id: 10,
          question: "What pursues opportunities within risks?",
          options: ["Risk Avoidance", "Risk Reduction", "Risk Exploitation", "Risk Transfer"],
          correctAnswer: 2,
          explanation: "Risk exploitation actively pursues opportunities presented by certain risks."
        },
        {
          id: 11,
          question: "What accepts and budgets for risk?",
          options: ["Risk Avoidance", "Risk Transfer", "Risk Retention", "Risk Reduction"],
          correctAnswer: 2,
          explanation: "Risk retention means accepting the risk and budgeting for potential losses."
        },
        {
          id: 12,
          question: "What guides desired behaviors?",
          options: ["Preventive Controls", "Detective Controls", "Directive Controls", "Corrective Controls"],
          correctAnswer: 2,
          explanation: "Directive controls guide or direct desired behaviors and actions."
        },
        {
          id: 13,
          question: "What are alternative measures when primary controls fail?",
          options: ["Preventive Controls", "Compensating Controls", "Detective Controls", "Directive Controls"],
          correctAnswer: 1,
          explanation: "Compensating controls provide backup protection when primary controls fail."
        },
        {
          id: 14,
          question: "What are industry-specific risk pools?",
          options: ["Captive Insurance", "Risk Retention Groups", "Catastrophe Bonds", "Derivative Instruments"],
          correctAnswer: 1,
          explanation: "Risk Retention Groups are liability insurance companies owned by member organizations."
        },
        {
          id: 15,
          question: "What are financial risk transfer tools?",
          options: ["Captive Insurance", "Derivative Instruments", "Risk Pools", "Insurance Programs"],
          correctAnswer: 1,
          explanation: "Derivative instruments like options and swaps transfer financial risks."
        },
        {
          id: 16,
          question: "What do technology companies combine for cyber risks?",
          options: ["Only insurance", "Insurance and security controls", "Only avoidance", "Only retention"],
          correctAnswer: 1,
          explanation: "Tech companies combine cyber insurance with preventive security controls."
        },
        {
          id: 17,
          question: "What is pre-arranged emergency funding?",
          options: ["Captive Insurance", "Contingent Capital", "Catastrophe Bonds", "Risk Pools"],
          correctAnswer: 1,
          explanation: "Contingent capital provides pre-arranged funding for emergency situations."
        },
        {
          id: 18,
          question: "What partners to distribute risk burden?",
          options: ["Risk Avoidance", "Risk Sharing", "Risk Transfer", "Risk Retention"],
          correctAnswer: 1,
          explanation: "Risk sharing involves partnering with others to distribute risk burden."
        },
        {
          id: 19,
          question: "What do energy companies use for natural disaster risks?",
          options: ["Only insurance", "Catastrophe bonds", "Only retention", "Only avoidance"],
          correctAnswer: 1,
          explanation: "Energy companies use catastrophe bonds for natural disaster risk transfer."
        },
        {
          id: 20,
          question: "What are long-term risk transfer solutions?",
          options: ["Annual Insurance", "Multi-Year Programs", "Captive Insurance", "Risk Pools"],
          correctAnswer: 1,
          explanation: "Multi-year insurance programs provide long-term risk transfer stability."
        }
      ]
    },

    // ==================== MODULE 4 ====================
    {
      id: 4,
      title: "Risk Governance & Culture",
      content: `
## **Organizational Risk Leadership & Behavioral Aspects**

Effective risk management requires strong governance structures and a supportive organizational culture. This module covers leadership responsibilities, communication strategies, and cultural development.

### **1. Risk Governance Structures**
- **Board Risk Committee**: Oversight at highest governance level
- **Chief Risk Officer**: Executive risk leadership role
- **Risk Management Function**: Dedicated department responsibilities
- **Business Unit Ownership**: Line management accountability
- **Three Lines Model Implementation**: Clear role definitions
- **Risk Appetite Framework**: Defined risk-taking boundaries

### **2. Risk Culture Development**
- **Tone from the Top**: Leadership demonstrating risk awareness
- **Risk Communication**: Clear messaging about risk expectations
- **Training & Awareness**: Building risk competency across organization
- **Incentive Alignment**: Rewarding appropriate risk behaviors
- **Psychological Safety**: Encouraging risk reporting without fear
- **Continuous Improvement**: Learning from risk events and near-misses

### **3. Risk Communication Strategies**
- **Risk Reporting**: Regular updates to stakeholders
- **Dashboard Design**: Visual risk status communication
- **Stakeholder Engagement**: Understanding different risk perspectives
- **Crisis Communication**: Managing information during events
- **Regulatory Reporting**: Compliance with disclosure requirements
- **Transparency Practices**: Building trust through openness

### **Real-World Application**
Banks under Basel III requirements must demonstrate strong risk governance with independent CRO positions and board oversight, while pharmaceutical companies develop safety cultures where employees report concerns without fear of reprisal, both showing industry-specific governance approaches.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What provides oversight at highest governance level?",
          options: ["CRO Position", "Board Risk Committee", "Business Units", "Risk Department"],
          correctAnswer: 1,
          explanation: "Board Risk Committees provide highest-level governance oversight."
        },
        {
          id: 2,
          question: "What is the executive risk leadership role?",
          options: ["Risk Manager", "Chief Risk Officer", "Compliance Officer", "Internal Auditor"],
          correctAnswer: 1,
          explanation: "Chief Risk Officer (CRO) provides executive leadership for risk management."
        },
        {
          id: 3,
          question: "What demonstrates leadership risk awareness?",
          options: ["Training Programs", "Tone from the Top", "Reporting Systems", "Incentive Plans"],
          correctAnswer: 1,
          explanation: "Tone from the Top refers to leadership demonstrating commitment to risk management."
        },
        {
          id: 4,
          question: "What defines risk-taking boundaries?",
          options: ["Risk Register", "Risk Appetite Framework", "Three Lines Model", "Governance Charter"],
          correctAnswer: 1,
          explanation: "Risk Appetite Framework defines boundaries for acceptable risk-taking."
        },
        {
          id: 5,
          question: "What encourages risk reporting without fear?",
          options: ["Strict Policies", "Psychological Safety", "Severe Penalties", "Limited Reporting"],
          correctAnswer: 1,
          explanation: "Psychological safety encourages reporting concerns without fear of negative consequences."
        },
        {
          id: 6,
          question: "What communicates visual risk status?",
          options: ["Written Reports", "Dashboard Design", "Verbal Updates", "Email Alerts"],
          correctAnswer: 1,
          explanation: "Risk dashboards provide visual communication of risk status and trends."
        },
        {
          id: 7,
          question: "Who has line management accountability for risks?",
          options: ["Board Committee", "CRO Only", "Business Unit Owners", "External Auditors"],
          correctAnswer: 2,
          explanation: "Business unit leaders have primary accountability for managing their risks."
        },
        {
          id: 8,
          question: "What builds risk competency across organization?",
          options: ["Incentive Plans", "Training & Awareness", "Reporting Systems", "Governance Committees"],
          correctAnswer: 1,
          explanation: "Training and awareness programs build organization-wide risk competency."
        },
        {
          id: 9,
          question: "What manages information during crisis events?",
          options: ["Regular Reporting", "Crisis Communication", "Dashboard Updates", "Training Programs"],
          correctAnswer: 1,
          explanation: "Crisis communication manages information flow during risk events."
        },
        {
          id: 10,
          question: "What rewards appropriate risk behaviors?",
          options: ["Strict Policies", "Incentive Alignment", "Limited Freedom", "Central Control"],
          correctAnswer: 1,
          explanation: "Incentive alignment ensures rewards support appropriate risk behaviors."
        },
        {
          id: 11,
          question: "What defines clear role definitions in risk management?",
          options: ["Risk Appetite", "Three Lines Model", "Governance Charter", "Training Programs"],
          correctAnswer: 1,
          explanation: "Three Lines Model clarifies roles and responsibilities in risk management."
        },
        {
          id: 12,
          question: "What involves learning from risk events?",
          options: ["Continuous Improvement", "Strict Punishment", "Risk Avoidance", "Central Control"],
          correctAnswer: 0,
          explanation: "Continuous improvement involves learning from events to enhance risk management."
        },
        {
          id: 13,
          question: "What understands different risk perspectives?",
          options: ["Dashboard Design", "Stakeholder Engagement", "Regulatory Reporting", "Crisis Communication"],
          correctAnswer: 1,
          explanation: "Stakeholder engagement understands different perspectives on risks."
        },
        {
          id: 14,
          question: "What builds trust through openness?",
          options: ["Limited Disclosure", "Transparency Practices", "Strict Control", "Central Decision"],
          correctAnswer: 1,
          explanation: "Transparency practices build stakeholder trust through openness."
        },
        {
          id: 15,
          question: "What must banks demonstrate under Basel III?",
          options: ["Profit Maximization", "Strong Risk Governance", "Cost Reduction", "Rapid Growth"],
          correctAnswer: 1,
          explanation: "Basel III requires banks to demonstrate strong risk governance frameworks."
        },
        {
          id: 16,
          question: "What encourages reporting without fear in pharma?",
          options: ["Strict Rules", "Safety Culture", "Limited Reporting", "Punitive Measures"],
          correctAnswer: 1,
          explanation: "Pharmaceutical companies develop safety cultures for open concern reporting."
        },
        {
          id: 17,
          question: "What ensures compliance with disclosure requirements?",
          options: ["Dashboard Design", "Regulatory Reporting", "Stakeholder Engagement", "Training Programs"],
          correctAnswer: 1,
          explanation: "Regulatory reporting ensures compliance with legal disclosure requirements."
        },
        {
          id: 18,
          question: "What are dedicated department responsibilities?",
          options: ["Board Oversight", "Risk Management Function", "Business Unit Control", "External Audit"],
          correctAnswer: 1,
          explanation: "The risk management function has dedicated responsibilities for the program."
        },
        {
          id: 19,
          question: "What involves clear risk expectation messaging?",
          options: ["Risk Communication", "Dashboard Design", "Training Only", "Incentive Plans"],
          correctAnswer: 0,
          explanation: "Risk communication clearly messages expectations about risk management."
        },
        {
          id: 20,
          question: "What do banks require for CRO positions?",
          options: ["Board Membership", "Independence", "Sales Background", "Technical Only Focus"],
          correctAnswer: 1,
          explanation: "Banks require independent CRO positions for effective risk oversight."
        }
      ]
    },

    // ==================== MODULE 5 ====================
    {
      id: 5,
      title: "Regulatory Compliance & Standards",
      content: `
## **Legal Requirements & International Risk Standards**

Organizations operate in complex regulatory environments requiring compliance with multiple frameworks. This module covers key regulations, standards, and compliance management approaches.

### **1. Major Regulatory Frameworks**
- **Basel Accords**: Banking sector capital and risk requirements
- **Solvency II**: Insurance industry risk-based capital standards
- **SOX Compliance**: Public company internal controls and reporting
- **GDPR**: Data protection and privacy regulations
- **OSHA Standards**: Workplace health and safety requirements
- **Industry-Specific Regulations**: Sector-specific compliance needs

### **2. Compliance Management Systems**
- **Compliance Risk Assessment**: Identifying regulatory requirements
- **Control Design & Implementation**: Meeting regulatory standards
- **Monitoring & Testing**: Ongoing compliance verification
- **Reporting & Documentation**: Evidence of compliance activities
- **Remediation Management**: Addressing compliance gaps
- **Regulatory Change Management**: Adapting to new requirements

### **3. International Standards Integration**
- **ISO 31000 Implementation**: Integrating risk management standard
- **COSO Integration**: Aligning with internal control framework
- **Industry Best Practices**: Adopting sector-specific standards
- **Certification Processes**: Obtaining external validation
- **Benchmarking**: Comparing with industry peers
- **Continuous Compliance**: Maintaining ongoing adherence

### **Real-World Application**
Multinational corporations navigate overlapping regulations like GDPR for European data, SOX for US financial reporting, and local employment laws in each operating country, requiring integrated compliance management systems that address multiple jurisdictions simultaneously.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What governs banking sector capital requirements?",
          options: ["Solvency II", "Basel Accords", "SOX", "GDPR"],
          correctAnswer: 1,
          explanation: "Basel Accords establish international banking capital and risk standards."
        },
        {
          id: 2,
          question: "What covers insurance industry capital standards?",
          options: ["Basel Accords", "Solvency II", "SOX", "OSHA"],
          correctAnswer: 1,
          explanation: "Solvency II establishes risk-based capital requirements for insurers."
        },
        {
          id: 3,
          question: "What governs public company internal controls?",
          options: ["Basel", "Solvency II", "SOX Compliance", "GDPR"],
          correctAnswer: 2,
          explanation: "Sarbanes-Oxley (SOX) governs public company internal controls and reporting."
        },
        {
          id: 4,
          question: "What regulates data protection and privacy?",
          options: ["Basel", "SOX", "GDPR", "OSHA"],
          correctAnswer: 2,
          explanation: "GDPR (General Data Protection Regulation) governs European data privacy."
        },
        {
          id: 5,
          question: "What identifies regulatory requirements?",
          options: ["Control Design", "Compliance Risk Assessment", "Monitoring", "Reporting"],
          correctAnswer: 1,
          explanation: "Compliance risk assessment identifies applicable regulatory requirements."
        },
        {
          id: 6,
          question: "What involves ongoing compliance verification?",
          options: ["Risk Assessment", "Control Design", "Monitoring & Testing", "Remediation"],
          correctAnswer: 2,
          explanation: "Monitoring and testing provide ongoing compliance verification."
        },
        {
          id: 7,
          question: "What covers workplace health and safety?",
          options: ["Basel", "OSHA Standards", "GDPR", "SOX"],
          correctAnswer: 1,
          explanation: "OSHA (Occupational Safety and Health Administration) sets workplace safety standards."
        },
        {
          id: 8,
          question: "What addresses compliance gaps?",
          options: ["Monitoring", "Remediation Management", "Reporting", "Assessment"],
          correctAnswer: 1,
          explanation: "Remediation management addresses identified compliance gaps."
        },
        {
          id: 9,
          question: "What integrates risk management standard?",
          options: ["Basel Implementation", "ISO 31000 Implementation", "SOX Compliance", "GDPR Adherence"],
          correctAnswer: 1,
          explanation: "ISO 31000 Implementation integrates international risk management standards."
        },
        {
          id: 10,
          question: "What adapts to new requirements?",
          options: ["Control Design", "Regulatory Change Management", "Monitoring", "Reporting"],
          correctAnswer: 1,
          explanation: "Regulatory change management adapts to new or changing requirements."
        },
        {
          id: 11,
          question: "What aligns with internal control framework?",
          options: ["ISO Integration", "COSO Integration", "Basel Compliance", "GDPR Alignment"],
          correctAnswer: 1,
          explanation: "COSO Integration aligns with the internal control framework."
        },
        {
          id: 12,
          question: "What provides evidence of compliance?",
          options: ["Monitoring", "Reporting & Documentation", "Remediation", "Assessment"],
          correctAnswer: 1,
          explanation: "Reporting and documentation provide evidence of compliance activities."
        },
        {
          id: 13,
          question: "What obtains external validation?",
          options: ["Benchmarking", "Certification Processes", "Continuous Compliance", "Industry Practices"],
          correctAnswer: 1,
          explanation: "Certification processes obtain external validation of compliance."
        },
        {
          id: 14,
          question: "What compares with industry peers?",
          options: ["Certification", "Benchmarking", "Continuous Compliance", "Standard Adoption"],
          correctAnswer: 1,
          explanation: "Benchmarking compares compliance practices with industry peers."
        },
        {
          id: 15,
          question: "What do multinationals navigate simultaneously?",
          options: ["Single regulation", "Overlapping regulations", "No regulations", "Only local laws"],
          correctAnswer: 1,
          explanation: "Multinationals navigate overlapping regulations from multiple jurisdictions."
        },
        {
          id: 16,
          question: "What maintains ongoing adherence?",
          options: ["Periodic Compliance", "Continuous Compliance", "Annual Certification", "Spot Checking"],
          correctAnswer: 1,
          explanation: "Continuous compliance maintains ongoing regulatory adherence."
        },
        {
          id: 17,
          question: "What meets regulatory standards?",
          options: ["Risk Assessment", "Control Design & Implementation", "Monitoring Only", "Reporting Only"],
          correctAnswer: 1,
          explanation: "Control design and implementation meet specific regulatory standards."
        },
        {
          id: 18,
          question: "What adopts sector-specific standards?",
          options: ["ISO Standards", "Industry Best Practices", "Government Mandates", "Internal Policies"],
          correctAnswer: 1,
          explanation: "Industry best practices represent sector-specific standards and expectations."
        },
        {
          id: 19,
          question: "What addresses multiple jurisdictions?",
          options: ["Single Systems", "Integrated Compliance Systems", "Local Systems Only", "No Systems Needed"],
          correctAnswer: 1,
          explanation: "Integrated systems address compliance across multiple jurisdictions."
        },
        {
          id: 20,
          question: "What are sector-specific compliance needs?",
          options: ["General Regulations", "Industry-Specific Regulations", "Voluntary Standards", "Internal Guidelines"],
          correctAnswer: 1,
          explanation: "Industry-specific regulations address unique sector compliance needs."
        }
      ]
    },

    // ==================== MODULE 6 ====================
    {
      id: 6,
      title: "Strategic Risk Integration",
      content: `
## **Linking Risk Management with Business Strategy**

The highest level of risk management maturity integrates risk considerations directly into strategic planning and decision-making processes. This module covers advanced integration techniques.

### **1. Strategic Risk Integration Approaches**
- **Risk-Adjusted Decision Making**: Incorporating risk into choices
- **Strategic Planning Integration**: Embedding risk in planning cycles
- **Capital Allocation Optimization**: Risk-informed resource distribution
- **M&A Risk Assessment**: Evaluating acquisition risks and synergies
- **Innovation Risk Management**: Balancing exploration and exploitation
- **Scenario Planning**: Preparing for alternative futures

### **2. Performance & Risk Alignment**
- **Balanced Scorecard Integration**: Including risk perspectives
- **Risk-Adjusted Return Metrics**: Performance measurement considering risk
- **Economic Capital Models**: Risk-based capital allocation
- **Risk-Adjusted Pricing**: Incorporating risk into pricing decisions
- **Incentive Plan Design**: Aligning rewards with risk-adjusted performance
- **Strategic Risk Reporting**: Executive-level risk intelligence

### **3. Emerging Risk Frontiers**
- **Cyber Risk Management**: Digital threat landscape navigation
- **Climate Risk Assessment**: Environmental change impacts
- **Supply Chain Resilience**: Global network vulnerability management
- **Geopolitical Risk Analysis**: Political stability considerations
- **Technology Disruption Risks**: Innovation impact assessment
- **Reputation Risk Management**: Digital era stakeholder perception

### **Real-World Application**
Leading technology firms integrate cyber risk assessments into product development, while global manufacturers incorporate climate risk into facility planning. Both demonstrate strategic risk integration creating competitive advantage through proactive risk management.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What incorporates risk into decision-making?",
          options: ["Traditional Planning", "Risk-Adjusted Decision Making", "Compliance Focus", "Risk Avoidance"],
          correctAnswer: 1,
          explanation: "Risk-adjusted decision making incorporates risk considerations into choices."
        },
        {
          id: 2,
          question: "What embeds risk in planning cycles?",
          options: ["Annual Budgeting", "Strategic Planning Integration", "Compliance Reporting", "Risk Register Updates"],
          correctAnswer: 1,
          explanation: "Strategic planning integration embeds risk considerations in planning processes."
        },
        {
          id: 3,
          question: "What evaluates acquisition risks?",
          options: ["Capital Allocation", "M&A Risk Assessment", "Strategic Planning", "Performance Measurement"],
          correctAnswer: 1,
          explanation: "M&A risk assessment evaluates risks and synergies in acquisitions."
        },
        {
          id: 4,
          question: "What includes risk perspectives in performance?",
          options: ["Traditional Accounting", "Balanced Scorecard Integration", "Sales Metrics", "Cost Accounting"],
          correctAnswer: 1,
          explanation: "Balanced scorecard integration includes risk perspectives in performance measurement."
        },
        {
          id: 5,
          question: "What measures performance considering risk?",
          options: ["Revenue Growth", "Risk-Adjusted Return Metrics", "Market Share", "Profit Margins"],
          correctAnswer: 1,
          explanation: "Risk-adjusted return metrics consider risk in performance measurement."
        },
        {
          id: 6,
          question: "What navigates digital threat landscape?",
          options: ["Supply Chain Management", "Cyber Risk Management", "Climate Assessment", "Geopolitical Analysis"],
          correctAnswer: 1,
          explanation: "Cyber risk management navigates digital threats and vulnerabilities."
        },
        {
          id: 7,
          question: "What optimizes resource distribution considering risk?",
          options: ["Budget Allocation", "Capital Allocation Optimization", "Cost Cutting", "Revenue Allocation"],
          correctAnswer: 1,
          explanation: "Capital allocation optimization distributes resources based on risk-return profiles."
        },
        {
          id: 8,
          question: "What assesses environmental change impacts?",
          options: ["Cyber Risk", "Climate Risk Assessment", "Supply Chain Risk", "Technology Risk"],
          correctAnswer: 1,
          explanation: "Climate risk assessment evaluates environmental change impacts."
        },
        {
          id: 9,
          question: "What balances exploration and exploitation?",
          options: ["Risk Avoidance", "Innovation Risk Management", "Compliance Focus", "Traditional Management"],
          correctAnswer: 1,
          explanation: "Innovation risk management balances exploration of new opportunities with exploitation of existing ones."
        },
        {
          id: 10,
          question: "What uses risk-based capital allocation?",
          options: ["Traditional Accounting", "Economic Capital Models", "Budget Planning", "Cost Accounting"],
          correctAnswer: 1,
          explanation: "Economic capital models allocate capital based on risk measurements."
        },
        {
          id: 11,
          question: "What prepares for alternative futures?",
          options: ["Budget Planning", "Scenario Planning", "Risk Register", "Compliance Planning"],
          correctAnswer: 1,
          explanation: "Scenario planning prepares organizations for alternative future possibilities."
        },
        {
          id: 12,
          question: "What incorporates risk into pricing?",
          options: ["Cost-Plus Pricing", "Risk-Adjusted Pricing", "Market Pricing", "Competitive Pricing"],
          correctAnswer: 1,
          explanation: "Risk-adjusted pricing incorporates risk considerations into pricing decisions."
        },
        {
          id: 13,
          question: "What manages global network vulnerability?",
          options: ["Cyber Security", "Supply Chain Resilience", "Climate Adaptation", "Political Management"],
          correctAnswer: 1,
          explanation: "Supply chain resilience manages vulnerabilities in global networks."
        },
        {
          id: 14,
          question: "What aligns rewards with risk-adjusted performance?",
          options: ["Fixed Salaries", "Incentive Plan Design", "Profit Sharing", "Stock Options"],
          correctAnswer: 1,
          explanation: "Incentive plan design aligns rewards with risk-adjusted performance."
        },
        {
          id: 15,
          question: "What do tech firms integrate into product development?",
          options: ["Only cost considerations", "Cyber risk assessments", "Only market research", "Only technical specs"],
          correctAnswer: 1,
          explanation: "Tech firms integrate cyber risk assessments into product development processes."
        },
        {
          id: 16,
          question: "What considers political stability?",
          options: ["Cyber Risk", "Geopolitical Risk Analysis", "Climate Risk", "Technology Risk"],
          correctAnswer: 1,
          explanation: "Geopolitical risk analysis considers political stability factors."
        },
        {
          id: 17,
          question: "What provides executive-level risk intelligence?",
          options: ["Detailed Reports", "Strategic Risk Reporting", "Compliance Updates", "Operational Metrics"],
          correctAnswer: 1,
          explanation: "Strategic risk reporting provides executive-level risk intelligence."
        },
        {
          id: 18,
          question: "What assesses innovation impacts?",
          options: ["Cyber Risk", "Technology Disruption Risks", "Supply Chain Risk", "Climate Risk"],
          correctAnswer: 1,
          explanation: "Technology disruption risk assessment evaluates innovation impacts."
        },
        {
          id: 19,
          question: "What incorporates climate risk into planning?",
          options: ["Only insurance companies", "Global manufacturers", "Only governments", "Only utilities"],
          correctAnswer: 1,
          explanation: "Global manufacturers incorporate climate risk into facility and supply chain planning."
        },
        {
          id: 20,
          question: "What manages digital era stakeholder perception?",
          options: ["Traditional PR", "Reputation Risk Management", "Advertising", "Social Media"],
          correctAnswer: 1,
          explanation: "Reputation risk management addresses stakeholder perception in digital era."
        }
      ]
    }
  ],

  // ==================== FINAL EXAM ====================
  finalExam: {
    title: "Risk Management Diploma Final Examination",
    description: "Comprehensive assessment covering advanced risk management concepts, frameworks, and strategic applications. Minimum 75% required for diploma certification.",
    passingScore: 75,
    questions: [
      // Module 1 Questions
      {
        id: 1,
        question: "What represents holistic, organization-wide risk approach?",
        options: ["Traditional Insurance", "Enterprise Risk Management", "Financial Control", "Compliance Focus"],
        correctAnswer: 1,
        explanation: "ERM takes comprehensive view of all organizational risks.",
        module: 1
      },
      {
        id: 2,
        question: "Which international standard provides risk guidelines?",
        options: ["COSO", "ISO 31000", "RIMS", "FAIR"],
        correctAnswer: 1,
        explanation: "ISO 31000 is international risk management standard.",
        module: 1
      },
      {
        id: 3,
        question: "What creates competitive advantage through risk?",
        options: ["Risk Avoidance", "Intelligent Risk-Taking", "Maximum Insurance", "Risk Elimination"],
        correctAnswer: 1,
        explanation: "Intelligent risk-taking creates competitive advantage.",
        module: 1
      },
      {
        id: 4,
        question: "What does Three Lines model establish?",
        options: ["Insurance Coverage", "Governance Structure", "Risk Appetite", "Compliance Procedures"],
        correctAnswer: 1,
        explanation: "Three Lines model establishes governance structure.",
        module: 1
      },
      {
        id: 5,
        question: "What category affects strategic objectives?",
        options: ["Operational", "Strategic", "Financial", "Compliance"],
        correctAnswer: 1,
        explanation: "Strategic risks affect achievement of objectives.",
        module: 1
      },

      // Module 2 Questions
      {
        id: 6,
        question: "What uses anonymous expert consensus?",
        options: ["Brainstorming", "Delphi Method", "SWOT", "Process Mapping"],
        correctAnswer: 1,
        explanation: "Delphi Method uses anonymous expert consensus.",
        module: 2
      },
      {
        id: 7,
        question: "What visualizes probability vs. impact?",
        options: ["Bow-Tie", "Risk Matrix", "Fault Tree", "Event Tree"],
        correctAnswer: 1,
        explanation: "Risk matrix visualizes probability and impact.",
        module: 2
      },
      {
        id: 8,
        question: "What models uncertainty through simulation?",
        options: ["SWOT", "Monte Carlo", "VaR", "Sensitivity"],
        correctAnswer: 1,
        explanation: "Monte Carlo Simulation models uncertainty.",
        module: 2
      },
      {
        id: 9,
        question: "What quantifies potential portfolio losses?",
        options: ["Expected Value", "Value at Risk", "Stress Test", "Decision Tree"],
        correctAnswer: 1,
        explanation: "VaR quantifies potential portfolio losses.",
        module: 2
      },
      {
        id: 10,
        question: "What identifies failure pathways?",
        options: ["Event Tree", "Fault Tree Analysis", "Process Mapping", "Brainstorming"],
        correctAnswer: 1,
        explanation: "Fault Tree identifies failure pathways.",
        module: 2
      },

      // Module 3 Questions
      {
        id: 11,
        question: "What eliminates risk-creating activity?",
        options: ["Reduction", "Avoidance", "Transfer", "Retention"],
        correctAnswer: 1,
        explanation: "Avoidance eliminates risky activity.",
        module: 3
      },
      {
        id: 12,
        question: "What implements controls to lower risk?",
        options: ["Avoidance", "Reduction", "Transfer", "Exploitation"],
        correctAnswer: 1,
        explanation: "Reduction implements risk controls.",
        module: 3
      },
      {
        id: 13,
        question: "What are company-owned insurance entities?",
        options: ["Risk Pools", "Captive Insurance", "Cat Bonds", "Derivatives"],
        correctAnswer: 1,
        explanation: "Captive insurance companies are owned by insured organizations.",
        module: 3
      },
      {
        id: 14,
        question: "What stops risks from occurring?",
        options: ["Detective", "Preventive Controls", "Corrective", "Directive"],
        correctAnswer: 1,
        explanation: "Preventive controls stop risks from occurring.",
        module: 3
      },
      {
        id: 15,
        question: "What provides early warning signals?",
        options: ["Corrective", "Key Risk Indicators", "Preventive", "Compensating"],
        correctAnswer: 1,
        explanation: "KRIs provide early warning signals.",
        module: 3
      },

      // Module 4 Questions
      {
        id: 16,
        question: "What provides highest governance oversight?",
        options: ["CRO", "Board Risk Committee", "Business Units", "Risk Department"],
        correctAnswer: 1,
        explanation: "Board Risk Committee provides highest oversight.",
        module: 4
      },
      {
        id: 17,
        question: "What is executive risk leadership role?",
        options: ["Risk Manager", "Chief Risk Officer", "Compliance Officer", "Internal Auditor"],
        correctAnswer: 1,
        explanation: "CRO is executive risk leadership role.",
        module: 4
      },
      {
        id: 18,
        question: "What demonstrates leadership commitment?",
        options: ["Training", "Tone from the Top", "Reporting", "Incentives"],
        correctAnswer: 1,
        explanation: "Tone from the Top demonstrates leadership commitment.",
        module: 4
      },
      {
        id: 19,
        question: "What defines risk-taking boundaries?",
        options: ["Risk Register", "Risk Appetite Framework", "Three Lines", "Governance Charter"],
        correctAnswer: 1,
        explanation: "Risk Appetite defines boundaries.",
        module: 4
      },
      {
        id: 20,
        question: "What encourages reporting without fear?",
        options: ["Strict Policies", "Psychological Safety", "Penalties", "Limited Reporting"],
        correctAnswer: 1,
        explanation: "Psychological safety encourages open reporting.",
        module: 4
      },

      // Module 5 Questions
      {
        id: 21,
        question: "What governs banking capital requirements?",
        options: ["Solvency II", "Basel Accords", "SOX", "GDPR"],
        correctAnswer: 1,
        explanation: "Basel Accords govern banking capital.",
        module: 5
      },
      {
        id: 22,
        question: "What covers insurance capital standards?",
        options: ["Basel", "Solvency II", "SOX", "OSHA"],
        correctAnswer: 1,
        explanation: "Solvency II covers insurance capital.",
        module: 5
      },
      {
        id: 23,
        question: "What identifies regulatory requirements?",
        options: ["Control Design", "Compliance Risk Assessment", "Monitoring", "Reporting"],
        correctAnswer: 1,
        explanation: "Compliance risk assessment identifies requirements.",
        module: 5
      },
      {
        id: 24,
        question: "What involves ongoing verification?",
        options: ["Assessment", "Control Design", "Monitoring & Testing", "Remediation"],
        correctAnswer: 2,
        explanation: "Monitoring provides ongoing verification.",
        module: 5
      },
      {
        id: 25,
        question: "What integrates international standard?",
        options: ["Basel", "ISO 31000 Implementation", "SOX", "GDPR"],
        correctAnswer: 1,
        explanation: "ISO 31000 Implementation integrates standard.",
        module: 5
      },

      // Module 6 Questions
      {
        id: 26,
        question: "What incorporates risk into decisions?",
        options: ["Traditional", "Risk-Adjusted Decision Making", "Compliance", "Avoidance"],
        correctAnswer: 1,
        explanation: "Risk-adjusted decision making incorporates risk.",
        module: 6
      },
      {
        id: 27,
        question: "What embeds risk in planning?",
        options: ["Budgeting", "Strategic Planning Integration", "Reporting", "Register Updates"],
        correctAnswer: 1,
        explanation: "Strategic planning integration embeds risk.",
        module: 6
      },
      {
        id: 28,
        question: "What evaluates acquisition risks?",
        options: ["Capital Allocation", "M&A Risk Assessment", "Planning", "Performance"],
        correctAnswer: 1,
        explanation: "M&A risk assessment evaluates acquisitions.",
        module: 6
      },
      {
        id: 29,
        question: "What navigates digital threats?",
        options: ["Supply Chain", "Cyber Risk Management", "Climate", "Geopolitical"],
        correctAnswer: 1,
        explanation: "Cyber risk management navigates digital threats.",
        module: 6
      },
      {
        id: 30,
        question: "What assesses environmental impacts?",
        options: ["Cyber", "Climate Risk Assessment", "Supply Chain", "Technology"],
        correctAnswer: 1,
        explanation: "Climate risk assessment evaluates environmental impacts.",
        module: 6
      },

      // Advanced Application Questions
      {
        id: 31,
        question: "What balances exploration and exploitation?",
        options: ["Avoidance", "Innovation Risk Management", "Compliance", "Traditional"],
        correctAnswer: 1,
        explanation: "Innovation risk management balances both.",
        module: 6
      },
      {
        id: 32,
        question: "What uses risk-based capital allocation?",
        options: ["Traditional", "Economic Capital Models", "Budget", "Cost"],
        correctAnswer: 1,
        explanation: "Economic capital models use risk-based allocation.",
        module: 6
      },
      {
        id: 33,
        question: "What aligns rewards with performance?",
        options: ["Fixed Salaries", "Incentive Plan Design", "Profit Sharing", "Stock"],
        correctAnswer: 1,
        explanation: "Incentive plan design aligns rewards.",
        module: 6
      },
      {
        id: 34,
        question: "What manages global network vulnerability?",
        options: ["Cyber", "Supply Chain Resilience", "Climate", "Political"],
        correctAnswer: 1,
        explanation: "Supply chain resilience manages vulnerability.",
        module: 6
      },
      {
        id: 35,
        question: "What prepares for alternative futures?",
        options: ["Budget", "Scenario Planning", "Register", "Compliance"],
        correctAnswer: 1,
        explanation: "Scenario planning prepares for alternatives.",
        module: 6
      },
      {
        id: 36,
        question: "What do multinationals navigate simultaneously?",
        options: ["Single regulation", "Overlapping regulations", "None", "Local only"],
        correctAnswer: 1,
        explanation: "Multinationals navigate overlapping regulations.",
        module: 5
      },
      {
        id: 37,
        question: "What builds organization-wide competency?",
        options: ["Incentives", "Training & Awareness", "Reporting", "Governance"],
        correctAnswer: 1,
        explanation: "Training builds organization-wide competency.",
        module: 4
      },
      {
        id: 38,
        question: "What transfers risk to capital markets?",
        options: ["Captive", "Risk Groups", "Catastrophe Bonds", "Contingent"],
        correctAnswer: 2,
        explanation: "Catastrophe bonds transfer to capital markets.",
        module: 3
      },
      {
        id: 39,
        question: "What visualizes causes and consequences?",
        options: ["Matrix", "Bow-Tie Analysis", "Fault Tree", "Event Tree"],
        correctAnswer: 1,
        explanation: "Bow-Tie visualizes causes and consequences.",
        module: 2
      },
      {
        id: 40,
        question: "What creates value from uncertainty?",
        options: ["Insurance only", "Modern risk management", "Risk elimination", "Avoidance"],
        correctAnswer: 1,
        explanation: "Modern risk management creates value from uncertainty.",
        module: 1
      }
    ]
  }
};

export default riskManagementDiplomaCourse;
