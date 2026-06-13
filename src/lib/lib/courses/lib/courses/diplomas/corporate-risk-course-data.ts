export const corporateRiskDiplomaCourse = {
  id: "corporate-risk-diploma",
  title: "Corporate Risk (Diploma)",
  description: "Advanced corporate risk management framework covering enterprise risk management (ERM), governance, compliance, financial risks, strategic risks, and emerging risk challenges for senior professionals.",
  duration: "10 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  upgradePrice: null,
  icon: "🏢",
  badge: "Diploma",
  
  modules: [
    {
      id: 1,
      title: "Enterprise Risk Management (ERM) Framework",
      content: `# Enterprise Risk Management Overview

**Enterprise Risk Management (ERM)** is an integrated, forward-looking approach to managing all risks across an organization. Unlike traditional siloed risk management, ERM provides a holistic view of how different risks interact and affect organizational objectives.

## COSO ERM Framework

The **Committee of Sponsoring Organizations (COSO)** ERM framework is the global standard, consisting of five interrelated components:

### 1. **Governance and Culture**
- **Risk Governance**: Board and management oversight
- **Operating Model**: Risk management structure and responsibilities
- **Tone at the Top**: Leadership commitment to risk management
- **Values and Behaviors**: Risk-aware organizational culture
- **Competencies**: Skills and capabilities for risk management

### 2. **Strategy and Objective-Setting**
- **Business Context**: Internal and external environment analysis
- **Risk Appetite**: Amount of risk organization is willing to accept
- **Alternative Strategies**: Evaluation of strategic options
- **Business Objectives**: Setting objectives aligned with strategy
- **Portfolio View**: Aggregate risk across the organization

### 3. **Performance**
- **Risk Identification**: Finding risks to achieving objectives
- **Risk Assessment**: Evaluating risk severity and likelihood
- **Risk Prioritization**: Ranking risks for management attention
- **Risk Response**: Selecting and implementing risk responses
- **Risk Reporting**: Communicating risk information

### 4. **Review and Revision**
- **Change Management**: Monitoring substantial changes
- **Risk Profile Review**: Periodic reassessment of risk portfolio
- **Framework Revision**: Updating ERM processes and practices
- **Lessons Learned**: Incorporating experience into improvements

### 5. **Information, Communication, and Reporting**
- **Information Systems**: Capturing and processing risk data
- **Communication**: Sharing risk information internally and externally
- **Reporting**: Providing meaningful risk insights to stakeholders
- **Technology**: Leveraging tools for risk management effectiveness

## ISO 31000 Risk Management Standard

### Key Principles:
1. **Integrated** - Risk management part of all organizational activities
2. **Structured and Comprehensive** - Systematic approach to risk
3. **Customized** - Tailored to organization's context
4. **Inclusive** - Involves stakeholders appropriately
5. **Dynamic** - Anticipates, detects, and responds to changes
6. **Best Available Information** - Uses historical and current data
7. **Human and Cultural Factors** - Recognizes human influence
8. **Continual Improvement** - Constantly enhanced through learning

### Process Framework:
1. **Communication and Consultation** - Throughout the process
2. **Establishing the Context** - Internal and external environment
3. **Risk Assessment** - Identification, analysis, evaluation
4. **Risk Treatment** - Selecting and implementing options
5. **Monitoring and Review** - Ongoing and periodic assessment
6. **Recording and Reporting** - Documentation and communication

## Three Lines of Defense Model

### First Line: **Operational Management**
- Owns and manages risks
- Implements risk controls
- Identifies and reports risks
- Day-to-day risk responsibility

### Second Line: **Risk Management and Compliance**
- Establishes risk framework
- Provides risk expertise
- Monitors risk management
- Coordinates risk activities
- Ensures compliance

### Third Line: **Internal Audit**
- Provides independent assurance
- Evaluates risk management effectiveness
- Reports to board/audit committee
- Assesses governance processes

## Risk Appetite and Tolerance

### **Risk Appetite**
- Amount and type of risk organization is willing to pursue
- Expressed qualitatively and quantitatively
- Aligned with strategy and business objectives
- Example: "We accept moderate market risk for expected returns of 8-10%"

### **Risk Tolerance**
- Acceptable variation around objectives
- Specific, measurable limits
- Often expressed as thresholds or limits
- Example: "Maximum 5% decline in quarterly revenue"

### **Risk Capacity**
- Maximum risk organization can bear
- Determined by capital, liquidity, reputation
- Absolute limit that should not be exceeded

## ERM Implementation Roadmap

### Phase 1: Foundation (3-6 months)
- Establish governance structure
- Define risk appetite and tolerance
- Develop risk management policy
- Create basic risk taxonomy

### Phase 2: Framework Development (6-12 months)
- Implement risk assessment methodology
- Develop risk reporting templates
- Train key personnel
- Pilot risk assessments in selected areas

### Phase 3: Integration (12-18 months)
- Integrate with strategic planning
- Embed in business processes
- Develop key risk indicators
- Enhance risk culture

### Phase 4: Optimization (Ongoing)
- Mature risk analytics
- Integrate with performance management
- Enhance predictive capabilities
- Continuous improvement

## Benefits of Effective ERM

### Strategic Benefits
- Better strategic decision-making
- Enhanced resource allocation
- Improved competitive positioning
- Greater stakeholder confidence

### Operational Benefits
- Reduced operational surprises
- More efficient processes
- Lower cost of risk
- Improved business resilience

### Compliance Benefits
- Better regulatory compliance
- Reduced fines and penalties
- Enhanced corporate governance
- Improved audit outcomes

### Financial Benefits
- Lower cost of capital
- Improved credit ratings
- Better insurance terms
- Enhanced shareholder value`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is Enterprise Risk Management (ERM)?",
          options: ["Integrated approach managing all organizational risks", "Only financial risk management", "Insurance purchasing process", "Compliance monitoring only"],
          correctAnswer: 0,
          explanation: "ERM provides holistic management of all risks across the organization."
        },
        {
          id: 2,
          question: "How many components are in COSO ERM framework?",
          options: ["Five components", "Three components", "Seven components", "Ten components"],
          correctAnswer: 0,
          explanation: "COSO ERM consists of five interrelated components."
        },
        {
          id: 3,
          question: "What is the 'first line of defense' in Three Lines model?",
          options: ["Operational management", "Risk management function", "Internal audit", "Board of directors"],
          correctAnswer: 0,
          explanation: "First line owns and manages risks in daily operations."
        },
        {
          id: 4,
          question: "What does risk appetite define?",
          options: ["Amount of risk organization is willing to accept", "Maximum possible loss", "Insurance coverage limits", "Compliance requirements"],
          correctAnswer: 0,
          explanation: "Risk appetite sets boundaries for risk-taking aligned with strategy."
        },
        {
          id: 5,
          question: "Which standard provides risk management principles?",
          options: ["ISO 31000", "GAAP accounting", "SEC regulations", "FDA guidelines"],
          correctAnswer: 0,
          explanation: "ISO 31000 is the international risk management standard."
        },
        {
          id: 6,
          question: "What is 'tone at the top' in ERM?",
          options: ["Leadership commitment to risk management", "Employee training programs", "Risk reporting frequency", "Insurance premiums"],
          correctAnswer: 0,
          explanation: "Leadership sets the cultural tone for risk management."
        },
        {
          id: 7,
          question: "What does risk tolerance specify?",
          options: ["Acceptable variation around objectives", "Total available capital", "Number of employees", "Market share targets"],
          correctAnswer: 0,
          explanation: "Risk tolerance defines specific measurable limits."
        },
        {
          id: 8,
          question: "Who provides independent assurance in Three Lines model?",
          options: ["Internal audit", "Operational managers", "Risk committee", "External consultants"],
          correctAnswer: 0,
          explanation: "Internal audit independently assesses risk management effectiveness."
        },
        {
          id: 9,
          question: "What is risk capacity?",
          options: ["Maximum risk organization can bear", "Preferred risk level", "Current risk exposure", "Historical risk levels"],
          correctAnswer: 0,
          explanation: "Risk capacity is the absolute limit of risk-bearing ability."
        },
        {
          id: 10,
          question: "Which ISO 31000 principle emphasizes stakeholder involvement?",
          options: ["Inclusive", "Integrated", "Dynamic", "Structured"],
          correctAnswer: 0,
          explanation: "Inclusive principle involves appropriate stakeholders."
        },
        {
          id: 11,
          question: "What does second line of defense establish?",
          options: ["Risk management framework", "Daily operations", "Independent assurance", "Strategic direction"],
          correctAnswer: 0,
          explanation: "Second line develops and monitors the risk framework."
        },
        {
          id: 12,
          question: "What is portfolio view in ERM?",
          options: ["Aggregate risk across organization", "Single department risk", "Individual project risk", "External market risk only"],
          correctAnswer: 0,
          explanation: "Portfolio view considers combined effect of all risks."
        },
        {
          id: 13,
          question: "Which COSO component includes risk assessment?",
          options: ["Performance", "Governance", "Strategy", "Information"],
          correctAnswer: 0,
          explanation: "Performance component covers risk assessment activities."
        },
        {
          id: 14,
          question: "What does ISO 31000 'dynamic' principle mean?",
          options: ["Anticipates and responds to changes", "Static and unchanging", "Historical focus only", "Ignores external factors"],
          correctAnswer: 0,
          explanation: "Dynamic principle emphasizes responsiveness to change."
        },
        {
          id: 15,
          question: "What is initial ERM implementation phase?",
          options: ["Foundation establishment", "Full integration", "Advanced analytics", "External reporting"],
          correctAnswer: 0,
          explanation: "Foundation phase establishes basic governance and policy."
        },
        {
          id: 16,
          question: "What benefits from better strategic decision-making?",
          options: ["Strategic benefits of ERM", "Operational benefits", "Compliance benefits", "Financial benefits"],
          correctAnswer: 0,
          explanation: "Strategic benefits include improved decision-making."
        },
        {
          id: 17,
          question: "What does 'integrated' principle in ISO 31000 mean?",
          options: ["Risk management part of all activities", "Separate risk function", "Only for compliance", "Optional activity"],
          correctAnswer: 0,
          explanation: "Integrated principle embeds risk management throughout."
        },
        {
          id: 18,
          question: "Who sets risk appetite?",
          options: ["Board and senior management", "Only risk manager", "Only internal audit", "Only shareholders"],
          correctAnswer: 0,
          explanation: "Board and senior leadership establish risk appetite."
        },
        {
          id: 19,
          question: "What does risk response selection belong to?",
          options: ["Performance component", "Governance component", "Strategy component", "Information component"],
          correctAnswer: 0,
          explanation: "Risk response is part of Performance component."
        },
        {
          id: 20,
          question: "What improves with effective ERM?",
          options: ["All of the above", "Only compliance", "Only operations", "Only finance"],
          correctAnswer: 0,
          explanation: "Effective ERM provides strategic, operational, compliance, and financial benefits."
        }
      ]
    },
    {
      id: 2,
      title: "Corporate Governance & Risk Oversight",
      content: `# Board-Level Risk Governance

**Corporate governance** provides the framework for achieving organizational objectives while properly managing risks. Effective governance ensures appropriate oversight, accountability, and decision-making processes.

## Board Risk Committee Structure

### Composition Requirements:
- **Independent Directors**: Majority should be independent
- **Risk Expertise**: At least one member with risk management expertise
- **Financial Literacy**: All members financially literate
- **Diversity**: Appropriate diversity of skills and perspectives
- **Size**: Typically 3-5 members for optimal effectiveness

### Committee Responsibilities:
1. **Risk Oversight**: Monitor enterprise risk management
2. **Policy Approval**: Review and approve risk policies
3. **Risk Appetite**: Oversee risk appetite framework
4. **Reporting Review**: Review risk reports and dashboards
5. **Crisis Management**: Oversee crisis preparedness
6. **Compliance Monitoring**: Monitor regulatory compliance
7. **External Relationships**: Interface with regulators, auditors

## Risk Governance Models

### 1. **Centralized Model**
- Single corporate risk function
- Consistent approach across organization
- Strong oversight and control
- Common in highly regulated industries
- Example: Financial institutions, utilities

### 2. **Decentralized Model**
- Risk management embedded in business units
- Local adaptation to specific risks
- Faster response to local issues
- Common in diversified conglomerates
- Example: Holding companies, multinationals

### 3. **Hybrid Model**
- Combines centralized and decentralized elements
- Corporate sets framework, units implement
- Balances consistency and flexibility
- Most common approach
- Example: Most large corporations

## Risk Culture Assessment

### Elements of Strong Risk Culture:
1. **Leadership Commitment**: Visible support from top management
2. **Accountability**: Clear risk ownership and responsibility
3. **Incentive Alignment**: Compensation linked to risk outcomes
4. **Communication**: Open discussion of risks and failures
5. **Learning Orientation**: Willingness to learn from mistakes
6. **Risk Awareness**: Understanding of risks at all levels

### Assessment Methods:
- **Surveys**: Employee perception surveys
- **Interviews**: Structured interviews with key personnel
- **Focus Groups**: Discussion groups on risk topics
- **Document Review**: Analysis of policies and procedures
- **Observation**: Direct observation of behaviors
- **Metrics**: Analysis of risk-related metrics

## Regulatory Compliance Framework

### Key Regulations by Jurisdiction:

#### United States:
- **Sarbanes-Oxley Act (SOX)**: Financial reporting and internal controls
- **Dodd-Frank Act**: Financial institution regulations
- **SEC Regulations**: Securities and exchange requirements
- **Industry-Specific**: HIPAA, FDA, EPA regulations

#### European Union:
- **GDPR**: Data protection and privacy
- **MiFID II**: Financial markets regulation
- **Solvency II**: Insurance company requirements
- **Basel III/IV**: Banking regulations

#### Global Standards:
- **Anti-Money Laundering (AML)**: Financial crime prevention
- **Anti-Bribery (FCPA/UKBA)**: Corruption prevention
- **Sanctions Compliance**: International trade restrictions
- **Export Controls**: Technology and defense restrictions

## Risk Reporting to Board

### Key Risk Reports:

#### 1. **Risk Dashboard**
- Executive summary of top risks
- Color-coded status indicators (Red/Yellow/Green)
- Trend analysis over time
- Key risk indicator metrics
- Frequency: Monthly or quarterly

#### 2. **Risk Register**
- Comprehensive list of identified risks
- Risk ratings and prioritization
- Ownership and treatment plans
- Status of risk responses
- Frequency: Quarterly or as needed

#### 3. **Risk Appetite Statement**
- Approved risk appetite levels
- Current risk exposure vs. appetite
- Breaches of risk limits
- Proposed appetite adjustments
- Frequency: Annually or as needed

#### 4. **Incident Reports**
- Significant risk events
- Root cause analysis
- Impact assessment
- Remediation actions
- Frequency: As incidents occur

## Executive Risk Responsibilities

### Chief Executive Officer (CEO):
- Ultimate responsibility for risk management
- Sets risk culture and tone
- Approves major risk decisions
- Reports to board on risk matters

### Chief Risk Officer (CRO):
- Develops and maintains ERM framework
- Provides independent risk oversight
- Reports directly to board risk committee
- Coordinates risk management activities

### Chief Financial Officer (CFO):
- Manages financial risks
- Oversees financial controls
- Manages capital and liquidity
- Reports financial risk exposures

### Business Unit Leaders:
- Own risks within their units
- Implement risk controls
- Report risk incidents
- Manage risk within appetite

## Risk Governance Best Practices

### 1. **Clear Roles and Responsibilities**
- Documented risk governance charters
- Defined risk ownership at all levels
- Clear escalation procedures
- Regular review of responsibilities

### 2. **Independent Oversight**
- Independent board risk committee
- Direct reporting lines for risk function
- Regular independent assessments
- External audit of risk management

### 3. **Integration with Strategy**
- Risk considerations in strategic planning
- Risk-adjusted performance measurement
- Scenario analysis for major decisions
- Strategic risk assessment

### 4. **Effective Communication**
- Regular risk reporting to board
- Clear risk communication to employees
- Transparent risk disclosure to stakeholders
- Open discussion of risk issues

### 5. **Continuous Improvement**
- Regular framework assessment
- Benchmarking against best practices
- Incorporation of lessons learned
- Adaptation to changing environment`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is corporate governance framework for?",
          options: ["Achieving objectives while managing risks", "Only maximizing profits", "Only complying with laws", "Only reporting financials"],
          correctAnswer: 0,
          explanation: "Governance provides framework for objectives achievement with proper risk management."
        },
        {
          id: 2,
          question: "Who should majority of board risk committee be?",
          options: ["Independent directors", "Executive management", "External consultants", "Government representatives"],
          correctAnswer: 0,
          explanation: "Independence ensures objective oversight."
        },
        {
          id: 3,
          question: "What does centralized risk model provide?",
          options: ["Consistent approach across organization", "Complete local autonomy", "No corporate oversight", "Different approaches by unit"],
          correctAnswer: 0,
          explanation: "Centralized model ensures uniform risk management."
        },
        {
          id: 4,
          question: "What is element of strong risk culture?",
          options: ["Leadership commitment", "Ignoring risks", "Hiding mistakes", "Avoiding discussion"],
          correctAnswer: 0,
          explanation: "Visible leadership support drives risk culture."
        },
        {
          id: 5,
          question: "What does SOX regulate?",
          options: ["Financial reporting and internal controls", "Environmental protection", "Data privacy", "Product safety"],
          correctAnswer: 0,
          explanation: "Sarbanes-Oxley focuses on financial integrity."
        },
        {
          id: 6,
          question: "What does risk dashboard provide?",
          options: ["Executive summary of top risks", "Detailed policy documents", "Employee performance reviews", "Marketing plans"],
          correctAnswer: 0,
          explanation: "Dashboard gives quick overview of risk status."
        },
        {
          id: 7,
          question: "Who has ultimate risk responsibility?",
          options: ["Chief Executive Officer", "Chief Risk Officer", "Board Chairman", "Internal Auditor"],
          correctAnswer: 0,
          explanation: "CEO bears ultimate responsibility for risk management."
        },
        {
          id: 8,
          question: "What does CRO typically do?",
          options: ["Develops ERM framework", "Manages daily operations", "Handles marketing", "Oversees manufacturing"],
          correctAnswer: 0,
          explanation: "CRO is responsible for risk management framework."
        },
        {
          id: 9,
          question: "What regulates data protection in EU?",
          options: ["GDPR", "SOX", "Dodd-Frank", "Basel III"],
          correctAnswer: 0,
          explanation: "General Data Protection Regulation covers EU data privacy."
        },
        {
          id: 10,
          question: "What does decentralized model allow?",
          options: ["Local adaptation to specific risks", "Uniform corporate control", "No local responsibility", "Centralized decision-making"],
          correctAnswer: 0,
          explanation: "Decentralized model adapts to local conditions."
        },
        {
          id: 11,
          question: "What should risk committee members have?",
          options: ["Risk expertise and financial literacy", "Only legal background", "Only marketing experience", "Only technical skills"],
          correctAnswer: 0,
          explanation: "Committee needs relevant risk and financial knowledge."
        },
        {
          id: 12,
          question: "What assesses risk culture?",
          options: ["Employee perception surveys", "Only financial metrics", "Only stock price", "Only sales numbers"],
          correctAnswer: 0,
          explanation: "Surveys measure employee perceptions of risk culture."
        },
        {
          id: 13,
          question: "Who owns risks within business units?",
          options: ["Business unit leaders", "Only CRO", "Only CEO", "Only board"],
          correctAnswer: 0,
          explanation: "Business leaders own risks in their areas."
        },
        {
          id: 14,
          question: "What does Dodd-Frank regulate?",
          options: ["Financial institutions", "Pharmaceutical companies", "Automotive industry", "Technology firms"],
          correctAnswer: 0,
          explanation: "Dodd-Frank addresses financial system risks."
        },
        {
          id: 15,
          question: "What is risk register?",
          options: ["Comprehensive list of identified risks", "Employee directory", "Asset inventory", "Product catalog"],
          correctAnswer: 0,
          explanation: "Risk register documents all identified risks."
        },
        {
          id: 16,
          question: "What does hybrid model combine?",
          options: ["Centralized and decentralized elements", "Only centralized control", "Only local autonomy", "No governance structure"],
          correctAnswer: 0,
          explanation: "Hybrid balances corporate framework with local implementation."
        },
        {
          id: 17,
          question: "What is key for independent oversight?",
          options: ["Direct reporting to board", "Reporting to CEO only", "No reporting required", "Reporting to marketing"],
          correctAnswer: 0,
          explanation: "Direct board reporting ensures independence."
        },
        {
          id: 18,
          question: "What does AML prevent?",
          options: ["Financial crime", "Product defects", "Data breaches", "Workplace accidents"],
          correctAnswer: 0,
          explanation: "Anti-Money Laundering targets financial crimes."
        },
        {
          id: 19,
          question: "What should risk reporting frequency be?",
          options: ["Regular and timely", "Only annually", "Only when problems occur", "Never"],
          correctAnswer: 0,
          explanation: "Regular reporting ensures ongoing oversight."
        },
        {
          id: 20,
          question: "What ensures continuous improvement?",
          options: ["Regular framework assessment", "Never changing anything", "Ignoring feedback", "Avoiding measurement"],
          correctAnswer: 0,
          explanation: "Regular assessment identifies improvement opportunities."
        }
      ]
    },
    {
      id: 3,
      title: "Financial Risk Management",
      content: `# Managing Financial Exposures

**Financial risk management** identifies, measures, and manages risks that could negatively impact an organization's financial performance and capital. Effective financial risk management protects shareholder value and ensures financial stability.

## Market Risk Management

### Types of Market Risk:

#### 1. **Interest Rate Risk**
- Risk from changes in interest rates
- **Asset-Liability Mismatch**: Differing repricing of assets vs. liabilities
- **Yield Curve Risk**: Changes in yield curve shape
- **Basis Risk**: Different rate indices moving differently
- **Options Risk**: Embedded optionality in instruments

#### 2. **Foreign Exchange (FX) Risk**
- Risk from currency exchange rate movements
- **Transaction Risk**: Future cash flows in foreign currencies
- **Translation Risk**: Consolidating foreign operations
- **Economic Risk**: Impact on competitive position
- **Contingent Risk**: Potential future foreign currency exposures

#### 3. **Commodity Price Risk**
- Risk from commodity price fluctuations
- **Input Price Risk**: Raw material cost increases
- **Output Price Risk**: Product price decreases
- **Basis Risk**: Different commodity grades or locations
- **Shape Risk**: Changes in forward curve shape

#### 4. **Equity Price Risk**
- Risk from stock price movements
- **Direct Holdings**: Own company stock price
- **Investment Portfolio**: Equity investments
- **Pension Assets**: Pension fund equity holdings
- **Stock-based Compensation**: Employee stock options

### Market Risk Measurement:

#### Value at Risk (VaR)
- Maximum potential loss over specified time period at given confidence level
- **Calculation Methods**:
  - **Historical Simulation**: Uses historical price movements
  - **Variance-Covariance**: Assumes normal distribution
  - **Monte Carlo Simulation**: Random scenario generation
- **Limitations**: Doesn't capture tail risk, assumes normal markets

#### Expected Shortfall (ES)
- Average loss beyond VaR threshold
- Also called Conditional VaR (CVaR)
- Better captures tail risk
- Required by Basel III for banking

#### Stress Testing
- Losses under extreme but plausible scenarios
- **Historical Scenarios**: Past crisis periods
- **Hypothetical Scenarios**: Future potential crises
- **Reverse Stress Testing**: Finds scenarios causing failure

## Credit Risk Management

### Credit Risk Components:

#### 1. **Default Risk**
- Counterparty fails to meet payment obligations
- **Probability of Default (PD)**: Likelihood of default
- **Loss Given Default (LGD)**: Percentage loss if default occurs
- **Exposure at Default (EAD)**: Amount exposed at time of default

#### 2. **Concentration Risk**
- Excessive exposure to single counterparty or sector
- **Single-Name Concentration**: Large exposure to one entity
- **Sector Concentration**: Heavy exposure to one industry
- **Geographic Concentration**: Focus on one region

#### 3. **Country Risk**
- Risks associated with particular countries
- **Sovereign Risk**: Government default or interference
- **Transfer Risk**: Inability to convert or transfer currency
- **Political Risk**: Political instability or policy changes

### Credit Risk Mitigation:

#### 1. **Collateral Management**
- Secured lending with collateral
- **Haircuts**: Discounts applied to collateral value
- **Margin Calls**: Additional collateral requirements
- **Rehypothecation**: Reusing pledged collateral

#### 2. **Netting Agreements**
- Offset mutual obligations
- **Payment Netting**: Net payment obligations
- **Close-out Netting**: Net obligations upon default
- **Master Agreements**: ISDA, CSA documentation

#### 3. **Credit Derivatives**
- Transfer credit risk to third parties
- **Credit Default Swaps (CDS)**: Insurance against default
- **Credit Linked Notes (CLN)**: Securities with embedded credit risk
- **Total Return Swaps**: Exchange total return for fixed payments

## Liquidity Risk Management

### Types of Liquidity Risk:

#### 1. **Funding Liquidity Risk**
- Inability to meet cash flow obligations
- **Maturity Mismatch**: Different asset/liability maturities
- **Rollover Risk**: Unable to refinance maturing liabilities
- **Funding Concentration**: Reliance on few funding sources

#### 2. **Market Liquidity Risk**
- Inability to trade assets quickly without price impact
- **Bid-Ask Spread**: Cost of immediate trading
- **Market Depth**: Volume available at quoted prices
- **Resiliency**: Speed of price recovery after trades

### Liquidity Risk Metrics:

#### 1. **Liquidity Coverage Ratio (LCR)**
- High-quality liquid assets / 30-day net cash outflows
- Basel III requirement for banks
- Ensures 30-day survival under stress

#### 2. **Net Stable Funding Ratio (NSFR)**
- Available stable funding / required stable funding
- Long-term structural liquidity measure
- Encourages stable funding sources

#### 3. **Liquidity Gap Analysis**
- Maturity ladder of cash flows
- Identifies timing mismatches
- Projects future liquidity positions

## Operational Risk in Finance

### Financial Operational Risks:

#### 1. **Trade Processing Risk**
- Errors in trade capture, confirmation, settlement
- **Straight-Through Processing (STP)**: Automated processing
- **Trade Reconciliation**: Matching trade details
- **Settlement Failures**: Failed deliveries or payments

#### 2. **Model Risk**
- Errors in financial models
- **Model Validation**: Independent model testing
- **Backtesting**: Comparing predictions to outcomes
- **Model Governance**: Policies and procedures

#### 3. **Valuation Risk**
- Errors in asset valuation
- **Mark-to-Market**: Current market prices
- **Mark-to-Model**: Model-based valuations
- **Independent Price Verification**: External validation

## Risk Measurement Frameworks

### Basel Framework Evolution:

#### Basel I (1988)
- Minimum capital requirements
- Credit risk focus
- Simple risk weights

#### Basel II (2004)
- Three pillars: Minimum capital, Supervision, Market discipline
- Advanced approaches for larger banks
- Operational risk inclusion

#### Basel III (2010+)
- Enhanced capital requirements
- Liquidity standards (LCR, NSFR)
- Leverage ratio limits
- Counterparty credit risk reforms

#### Basel IV (2017+)
- Revised standardized approaches
- Output floor for internal models
- Enhanced risk sensitivity
- Implementation through 2023-2028

## Financial Risk Governance

### Key Roles:

#### 1. **Asset-Liability Committee (ALCO)**
- Manages balance sheet risks
- Sets risk limits and policies
- Monitors risk positions
- Approves hedging strategies

#### 2. **Market Risk Committee**
- Oversees market risk management
- Reviews VaR and stress test results
- Approves trading limits
- Monitors market developments

#### 3. **Credit Committee**
- Approves credit exposures
- Sets credit policies
- Reviews credit portfolio
- Manages credit risk mitigation

## Technology in Financial Risk Management

### Emerging Technologies:

#### 1. **Risk Analytics Platforms**
- Integrated risk data aggregation
- Real-time risk monitoring
- Advanced scenario analysis
- Regulatory reporting automation

#### 2. **Artificial Intelligence**
- Credit scoring models
- Fraud detection systems
- Market prediction algorithms
- Anomaly detection

#### 3. **Blockchain Applications**
- Smart contracts for derivatives
- Trade finance automation
- Identity verification
- Settlement optimization`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does financial risk management protect?",
          options: ["Shareholder value and financial stability", "Only market share", "Only employee benefits", "Only physical assets"],
          correctAnswer: 0,
          explanation: "Financial risk management safeguards financial performance and capital."
        },
        {
          id: 2,
          question: "What is interest rate risk?",
          options: ["Risk from changes in interest rates", "Risk from currency movements", "Risk from stock prices", "Risk from commodity prices"],
          correctAnswer: 0,
          explanation: "Interest rate risk arises from fluctuations in interest rates."
        },
        {
          id: 3,
          question: "What does VaR measure?",
          options: ["Maximum potential loss at confidence level", "Average expected profit", "Minimum guaranteed return", "Historical average loss"],
          correctAnswer: 0,
          explanation: "Value at Risk estimates worst-case loss over specified period."
        },
        {
          id: 4,
          question: "What are components of credit risk?",
          options: ["PD, LGD, EAD", "VaR, ES, Stress", "LCR, NSFR, Gap", "ROE, ROA, EPS"],
          correctAnswer: 0,
          explanation: "Probability of Default, Loss Given Default, Exposure at Default."
        },
        {
          id: 5,
          question: "What is liquidity coverage ratio?",
          options: ["High-quality assets / 30-day outflows", "Total assets / total liabilities", "Equity / total assets", "Revenue / expenses"],
          correctAnswer: 0,
          explanation: "LCR ensures 30-day survival under stress scenarios."
        },
        {
          id: 6,
          question: "What is transaction FX risk?",
          options: ["Future cash flows in foreign currencies", "Consolidating foreign operations", "Competitive position impact", "Translation of financial statements"],
          correctAnswer: 0,
          explanation: "Transaction risk affects future foreign currency cash flows."
        },
        {
          id: 7,
          question: "What does expected shortfall measure?",
          options: ["Average loss beyond VaR threshold", "Maximum possible gain", "Historical average return", "Standard deviation of returns"],
          correctAnswer: 0,
          explanation: "ES captures tail risk better than VaR alone."
        },
        {
          id: 8,
          question: "What mitigates credit risk?",
          options: ["Collateral management", "Ignoring risk", "Increasing exposure", "Reducing monitoring"],
          correctAnswer: 0,
          explanation: "Collateral provides security against credit losses."
        },
        {
          id: 9,
          question: "What is funding liquidity risk?",
          options: ["Inability to meet cash flow obligations", "Inability to trade assets", "Foreign exchange losses", "Interest rate changes"],
          correctAnswer: 0,
          explanation: "Funding risk concerns meeting payment obligations."
        },
        {
          id: 10,
          question: "What is model risk?",
          options: ["Errors in financial models", "Market price changes", "Credit defaults", "Operational failures"],
          correctAnswer: 0,
          explanation: "Model risk arises from incorrect or misused models."
        },
        {
          id: 11,
          question: "What does Basel III introduce?",
          options: ["Liquidity standards LCR and NSFR", "Only credit risk weights", "No capital requirements", "Only market risk"],
          correctAnswer: 0,
          explanation: "Basel III adds liquidity requirements to capital standards."
        },
        {
          id: 12,
          question: "What is concentration risk?",
          options: ["Excessive exposure to single counterparty", "Diversified portfolio", "Small exposures only", "Market-wide risk"],
          correctAnswer: 0,
          explanation: "Concentration risk involves large exposures to few entities."
        },
        {
          id: 13,
          question: "What does ALCO manage?",
          options: ["Balance sheet risks", "Only market risk", "Only credit risk", "Only operational risk"],
          correctAnswer: 0,
          explanation: "Asset-Liability Committee oversees overall balance sheet risks."
        },
        {
          id: 14,
          question: "What is commodity basis risk?",
          options: ["Different grades or locations moving differently", "Overall price changes", "Currency effects", "Interest rate changes"],
          correctAnswer: 0,
          explanation: "Basis risk arises from price differences between related commodities."
        },
        {
          id: 15,
          question: "What does netting agreement do?",
          options: ["Offsets mutual obligations", "Increases total exposure", "Eliminates all risk", "Creates new obligations"],
          correctAnswer: 0,
          explanation: "Netting reduces gross exposures to net amounts."
        },
        {
          id: 16,
          question: "What is market liquidity risk?",
          options: ["Inability to trade without price impact", "Lack of cash", "Credit defaults", "Interest rate risk"],
          correctAnswer: 0,
          explanation: "Market liquidity concerns trading execution costs."
        },
        {
          id: 17,
          question: "What is credit default swap?",
          options: ["Insurance against default", "Equity investment", "Currency contract", "Commodity future"],
          correctAnswer: 0,
          explanation: "CDS transfers credit risk to protection seller."
        },
        {
          id: 18,
          question: "What does stress testing analyze?",
          options: ["Losses under extreme scenarios", "Average conditions", "Historical averages only", "Best-case scenarios"],
          correctAnswer: 0,
          explanation: "Stress tests evaluate resilience to severe conditions."
        },
        {
          id: 19,
          question: "What is sovereign risk?",
          options: ["Government default or interference", "Corporate bankruptcy", "Market volatility", "Operational failure"],
          correctAnswer: 0,
          explanation: "Sovereign risk involves government actions or defaults."
        },
        {
          id: 20,
          question: "What does Basel IV revise?",
          options: ["Standardized approaches and internal models", "Only liquidity ratios", "Only operational risk", "Only market risk"],
          correctAnswer: 0,
          explanation: "Basel IV updates risk measurement methodologies."
        }
      ]
    },
    {
      id: 4,
      title: "Strategic & Operational Risk Management",
      content: `# Managing Business Execution Risks

**Strategic and operational risks** encompass the risks arising from failed internal processes, people, systems, or external events that disrupt business operations and strategy execution. Effective management ensures business continuity and strategic success.

## Strategic Risk Management

### Types of Strategic Risks:

#### 1. **Competitive Risk**
- Loss of market position to competitors
- **New Entrants**: Barrier reduction enabling new competitors
- **Substitute Products**: Alternative solutions emerging
- **Bargaining Power**: Changing customer/supplier power
- **Rivalry Intensity**: Increased competition within industry

#### 2. **Reputational Risk**
- Damage to brand and stakeholder trust
- **Product Failure**: Defective products or services
- **Ethical Lapses**: Unethical behavior or scandals
- **Service Failure**: Poor customer experiences
- **Social Media**: Viral negative publicity

#### 3. **Innovation Risk**
- Failure to innovate or adapt to changes
- **Technology Disruption**: New technologies making products obsolete
- **R&D Failure**: Unsuccessful research and development
- **Adoption Risk**: Market rejection of innovations
- **Timing Risk**: Being too early or too late to market

#### 4. **M&A Integration Risk**
- Failed mergers, acquisitions, or partnerships
- **Cultural Integration**: Clashing organizational cultures
- **Synergy Realization**: Failure to achieve expected benefits
- **Integration Execution**: Poor implementation of integration plans
- **Valuation Risk**: Overpaying for acquisitions

### Strategic Risk Assessment Tools:

#### 1. **Scenario Planning**
- Developing alternative future scenarios
- **2x2 Matrix**: Two critical uncertainties create four scenarios
- **Wind-tunneling**: Testing strategies against different scenarios
- **Early Warning Indicators**: Monitoring for scenario triggers

#### 2. **War Gaming**
- Simulating competitive interactions
- **Red Teaming**: Adopting competitor perspective
- **Competitive Intelligence**: Gathering competitor information
- **Response Planning**: Preparing competitive moves

#### 3. **Strategic Risk Dashboard**
- Monitoring key strategic risk indicators
- **Leading Indicators**: Predictive metrics
- **Lagging Indicators**: Outcome metrics
- **Thresholds**: Warning levels for intervention

## Operational Risk Management

### Operational Risk Categories (Basel II):

#### 1. **Internal Fraud**
- Loss from internal deceptive acts
- **Unauthorized Activity**: Trading without authorization
- **Theft and Fraud**: Employee theft or fraud
- **Embezzlement**: Misappropriation of assets

#### 2. **External Fraud**
- Loss from external deceptive acts
- **Theft and Fraud**: External theft or fraud
- **Hacking**: System security breaches
- **Forgery**: Counterfeit documents or currency

#### 3. **Employment Practices**
- Loss from employment relations issues
- **Discrimination**: Unfair employment practices
- **Workplace Safety**: Unsafe working conditions
- **Wrongful Termination**: Improper employee dismissal

#### 4. **Clients, Products & Business Practices**
- Loss from product or service issues
- **Suitability**: Inappropriate product recommendations
- **Fiduciary Breach**: Failure in fiduciary duty
- **Product Flaws**: Defective product design
- **Business Interruption**: Disruption of business activities

#### 5. **Damage to Physical Assets**
- Loss from damage to physical assets
- **Natural Disasters**: Earthquakes, floods, storms
- **Man-made Disasters**: Terrorism, vandalism
- **Accidents**: Fire, explosion, collapse

#### 6. **Business Disruption & System Failures**
- Loss from system or process failures
- **IT System Failure**: Hardware or software failures
- **Telecommunications**: Communication system failures
- **Utility Disruption**: Power, water, or other utility failures

#### 7. **Execution, Delivery & Process Management**
- Loss from failed transaction processing
- **Data Entry Errors**: Incorrect data capture
- **Vendor Failure**: Third-party service failures
- **Accounting Errors**: Mistakes in accounting entries

## Business Continuity Management

### BCM Framework Components:

#### 1. **Business Impact Analysis (BIA)**
- Identifies critical business functions
- **Recovery Time Objective (RTO)**: Maximum acceptable downtime
- **Recovery Point Objective (RPO)**: Maximum data loss acceptable
- **Minimum Business Continuity Objective (MBCO)**: Minimum resources needed

#### 2. **Recovery Strategies**
- Methods for restoring operations
- **Work Area Recovery**: Alternate office facilities
- **Technology Recovery**: IT system restoration
- **Third-Party Recovery**: Vendor-supported recovery
- **Mutual Aid**: Agreements with other organizations

#### 3. **Plan Development**
- Documented recovery procedures
- **Crisis Management Plan**: Initial response procedures
- **Business Recovery Plan**: Function restoration procedures
- **IT Disaster Recovery Plan**: Technology restoration procedures
- **Communications Plan**: Stakeholder communication procedures

#### 4. **Testing and Exercising**
- Validating recovery capabilities
- **Tabletop Exercises**: Discussion-based testing
- **Walkthroughs**: Step-by-step procedure review
- **Simulations**: Realistic scenario testing
- **Full-scale Exercises**: Comprehensive live testing

### BCM Standards:
- **ISO 22301**: Business continuity management systems
- **NFPA 1600**: Disaster/emergency management
- **BS 25999**: British standard for business continuity

## Third-Party Risk Management

### Vendor Risk Assessment:

#### 1. **Due Diligence**
- Pre-contract vendor assessment
- **Financial Stability**: Vendor financial health
- **Security Controls**: Information security measures
- **Compliance History**: Regulatory compliance track record
- **References**: Feedback from other clients

#### 2. **Contract Management**
- Defining risk responsibilities
- **Service Level Agreements (SLAs)**: Performance standards
- **Right to Audit**: Audit access provisions
- **Liability Limitations**: Damage responsibility limits
- **Termination Rights**: Conditions for contract termination

#### 3. **Ongoing Monitoring**
- Continuous vendor oversight
- **Performance Metrics**: Regular performance measurement
- **Compliance Audits**: Periodic compliance verification
- **Risk Assessments**: Regular risk reassessment
- **Financial Monitoring**: Ongoing financial health checks

### Critical Vendor Management:
- **Concentration Risk**: Over-reliance on few vendors
- **Sub-contractor Risk**: Vendor's own supply chain risks
- **Geographic Risk**: Vendor location-specific risks
- **Exit Strategy**: Plans for vendor replacement

## Technology and Cyber Risk

### Cyber Risk Framework (NIST):

#### 1. **Identify**
- Asset management and risk assessment
- **Asset Inventory**: Catalog of hardware, software, data
- **Risk Assessment**: Evaluation of cyber risks
- **Governance**: Policies and procedures

#### 2. **Protect**
- Safeguards to limit impact
- **Access Control**: Identity and access management
- **Awareness Training**: Security awareness programs
- **Data Security**: Protection of information
- **Maintenance**: System maintenance and repairs

#### 3. **Detect**
- Identifying cyber events
- **Anomalies and Events**: Monitoring for unusual activity
- **Security Monitoring**: Continuous security surveillance
- **Detection Processes**: Procedures for event detection

#### 4. **Respond**
- Taking action regarding detected incidents
- **Response Planning**: Incident response procedures
- **Communications**: Internal and external communications
- **Analysis**: Investigation and analysis
- **Mitigation**: Containment and eradication

#### 5. **Recover**
- Restoring capabilities and services
- **Recovery Planning**: Restoration procedures
- **Improvements**: Incorporating lessons learned
- **Communications**: Recovery status communications

## Risk Culture in Operations

### Building Risk-Aware Culture:

#### 1. **Leadership Commitment**
- Visible support from executives
- **Risk Champions**: Designated risk advocates
- **Executive Messaging**: Regular communication on risk
- **Resource Allocation**: Funding for risk management

#### 2. **Accountability Framework**
- Clear risk ownership
- **Risk Owners**: Designated individuals for specific risks
- **Performance Metrics**: Risk management in performance reviews
- **Incentive Alignment**: Compensation linked to risk outcomes

#### 3. **Communication and Training**
- Building risk awareness
- **Risk Training Programs**: Formal risk education
- **Incident Sharing**: Open discussion of incidents
- **Risk Communications**: Regular risk updates

#### 4. **Learning Organization**
- Continuous improvement
- **Lessons Learned**: Systematic capture of experiences
- **Root Cause Analysis**: Understanding incident causes
- **Best Practice Sharing**: Dissemination of effective practices

## Operational Risk Measurement

### Advanced Measurement Approaches:

#### 1. **Loss Distribution Approach (LDA)**
- Statistical modeling of loss data
- **Frequency Distribution**: Number of loss events
- **Severity Distribution**: Size of loss events
- **Aggregate Loss Distribution**: Combined frequency and severity

#### 2. **Scorecard Approaches**
- Risk-based scoring systems
- **Risk Indicators**: Key risk indicators (KRIs)
- **Control Assessments**: Control effectiveness ratings
- **Scenario Analysis**: Expert judgment on potential losses

#### 3. **Capital Modeling**
- Economic capital for operational risk
- **Value at Risk (VaR)**: Capital at risk for operational losses
- **Stress Testing**: Capital needs under stress scenarios
- **Risk-Adjusted Return**: Performance adjusted for operational risk`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are strategic risks?",
          options: ["Risks affecting strategy execution", "Only financial market risks", "Only operational failures", "Only compliance issues"],
          correctAnswer: 0,
          explanation: "Strategic risks impact achievement of strategic objectives."
        },
        {
          id: 2,
          question: "What is competitive risk?",
          options: ["Loss of market position to competitors", "Internal fraud losses", "System failures", "Natural disasters"],
          correctAnswer: 0,
          explanation: "Competitive risk involves threats from competitive forces."
        },
        {
          id: 3,
          question: "How many operational risk categories in Basel II?",
          options: ["Seven categories", "Three categories", "Five categories", "Ten categories"],
          correctAnswer: 0,
          explanation: "Basel II defines seven operational risk event types."
        },
        {
          id: 4,
          question: "What does BIA identify?",
          options: ["Critical business functions", "All business processes", "Only IT systems", "Only financial transactions"],
          correctAnswer: 0,
          explanation: "Business Impact Analysis identifies essential functions for continuity."
        },
        {
          id: 5,
          question: "What is RTO?",
          options: ["Maximum acceptable downtime", "Maximum data loss acceptable", "Minimum resources needed", "Recovery cost limit"],
          correctAnswer: 0,
          explanation: "Recovery Time Objective defines acceptable restoration time."
        },
        {
          id: 6,
          question: "What does third-party risk management address?",
          options: ["Vendor and supplier risks", "Only employee risks", "Only customer risks", "Only shareholder risks"],
          correctAnswer: 0,
          explanation: "Third-party risk manages risks from external relationships."
        },
        {
          id: 7,
          question: "What is reputational risk?",
          options: ["Damage to brand and trust", "Financial market losses", "Operational failures", "Regulatory penalties"],
          correctAnswer: 0,
          explanation: "Reputational risk affects stakeholder perceptions and trust."
        },
        {
          id: 8,
          question: "What NIST function includes access control?",
          options: ["Protect function", "Identify function", "Detect function", "Respond function"],
          correctAnswer: 0,
          explanation: "Protect function includes safeguards like access controls."
        },
        {
          id: 9,
          question: "What is scenario planning?",
          options: ["Developing alternative future scenarios", "Historical data analysis", "Current risk assessment", "Past incident review"],
          correctAnswer: 0,
          explanation: "Scenario planning prepares for different possible futures."
        },
        {
          id: 10,
          question: "What does RPO define?",
          options: ["Maximum acceptable data loss", "Maximum downtime", "Minimum resources", "Recovery cost"],
          correctAnswer: 0,
          explanation: "Recovery Point Objective defines acceptable data loss."
        },
        {
          id: 11,
          question: "What is innovation risk?",
          options: ["Failure to innovate or adapt", "Internal fraud", "System failures", "Natural disasters"],
          correctAnswer: 0,
          explanation: "Innovation risk concerns failure to develop or adopt new technologies."
        },
        {
          id: 12,
          question: "What are tabletop exercises?",
          options: ["Discussion-based BCM testing", "Physical recovery drills", "IT system testing", "Vendor audits"],
          correctAnswer: 0,
          explanation: "Tabletop exercises test plans through discussion and simulation."
        },
        {
          id: 13,
          question: "What is vendor due diligence?",
          options: ["Pre-contract vendor assessment", "Post-contract monitoring", "Contract negotiation", "Payment processing"],
          correctAnswer: 0,
          explanation: "Due diligence assesses vendors before entering agreements."
        },
        {
          id: 14,
          question: "What does war gaming simulate?",
          options: ["Competitive interactions", "Natural disasters", "System failures", "Financial market crashes"],
          correctAnswer: 0,
          explanation: "War gaming models competitive dynamics and responses."
        },
        {
          id: 15,
          question: "What ISO standard covers business continuity?",
          options: ["ISO 22301", "ISO 9001", "ISO 14001", "ISO 27001"],
          correctAnswer: 0,
          explanation: "ISO 22301 specifies business continuity management requirements."
        },
        {
          id: 16,
          question: "What is M&A integration risk?",
          options: ["Failed mergers or acquisitions", "Market competition", "Technology disruption", "Regulatory changes"],
          correctAnswer: 0,
          explanation: "Integration risk concerns post-merger combination challenges."
        },
        {
          id: 17,
          question: "What does SLA define?",
          options: ["Service performance standards", "Payment terms", "Contract duration", "Legal jurisdiction"],
          correctAnswer: 0,
          explanation: "Service Level Agreements specify expected service levels."
        },
        {
          id: 18,
          question: "What NIST function includes incident response?",
          options: ["Respond function", "Identify function", "Protect function", "Detect function"],
          correctAnswer: 0,
          explanation: "Respond function addresses incident response activities."
        },
        {
          id: 19,
          question: "What is loss distribution approach?",
          options: ["Statistical modeling of loss data", "Qualitative risk assessment", "Control testing", "Scenario analysis"],
          correctAnswer: 0,
          explanation: "LDA uses statistical methods to model operational losses."
        },
        {
          id: 20,
          question: "What builds risk-aware culture?",
          options: ["Leadership commitment and accountability", "Ignoring incidents", "Hiding mistakes", "Avoiding discussion"],
          correctAnswer: 0,
          explanation: "Strong risk culture requires visible leadership and clear accountability."
        }
      ]
    },
    {
      id: 5,
      title: "Emerging Risks & Future Challenges",
      content: `# Navigating New Risk Landscapes

**Emerging risks** are newly developing or changing risks that are difficult to quantify and may have significant future impact. These risks require forward-looking approaches and adaptive risk management frameworks.

## Climate Change and Environmental Risks

### Physical Climate Risks:

#### 1. **Acute Physical Risks**
- Event-driven increased severity
- **Extreme Weather**: More intense storms, floods, heatwaves
- **Wildfires**: Increased frequency and severity
- **Water Stress**: Droughts and water scarcity
- **Sea Level Rise**: Coastal flooding and erosion

#### 2. **Chronic Physical Risks**
- Longer-term shifts in climate patterns
- **Temperature Rise**: Gradual warming trends
- **Precipitation Changes**: Altered rainfall patterns
- **Agricultural Impact**: Changes in crop yields
- **Ecosystem Changes**: Biodiversity loss and habitat changes

### Transition Risks:

#### 1. **Policy and Legal Risks**
- Climate-related regulations and litigation
- **Carbon Pricing**: Taxes or trading schemes
- **Emission Standards**: Stricter emission limits
- **Climate Litigation**: Lawsuits for climate damages
- **Disclosure Requirements**: Mandatory climate reporting

#### 2. **Technology Risks**
- Low-carbon technology disruption
- **Renewable Energy**: Cost reductions in solar/wind
- **Energy Storage**: Battery technology advances
- **Carbon Capture**: Development of CCS technologies
- **Efficiency Improvements**: Energy and resource efficiency

#### 3. **Market Risks**
- Changing customer preferences and markets
- **Demand Shifts**: Changing consumer preferences
- **Commodity Prices**: Volatility in fossil fuel prices
- **Investment Flows**: Capital reallocation to green assets
- **Reputation Impacts**: Stakeholder pressure on emissions

### TCFD Recommendations:

#### 1. **Governance**
- Board oversight of climate risks
- Management's role in risk assessment
- Integration into overall risk management

#### 2. **Strategy**
- Climate risks and opportunities
- Impact on businesses, strategy, financial planning
- Scenario analysis for different climate pathways

#### 3. **Risk Management**
- Processes for identifying, assessing, managing risks
- Integration into overall risk management
- Metrics and targets for risk management

#### 4. **Metrics and Targets**
- Metrics used to assess climate risks
- Scope 1, 2, and 3 greenhouse gas emissions
- Targets used to manage risks and opportunities

## Technology and Digital Transformation Risks

### Artificial Intelligence Risks:

#### 1. **Algorithmic Bias**
- Discriminatory outcomes from AI systems
- **Training Data Bias**: Biased historical data
- **Model Bias**: Flawed algorithm design
- **Deployment Bias**: Contextual implementation issues
- **Feedback Loops**: Reinforcing existing biases

#### 2. **Explainability and Transparency**
- Lack of understanding of AI decisions
- **Black Box Problem**: Opaque decision processes
- **Interpretability**: Difficulty understanding outputs
- **Accountability**: Difficulty assigning responsibility
- **Regulatory Compliance**: Meeting explainability requirements

#### 3. **Security Vulnerabilities**
- AI system manipulation and attacks
- **Adversarial Attacks**: Manipulating inputs to cause errors
- **Data Poisoning**: Corrupting training data
- **Model Stealing**: Extracting proprietary models
- **Privacy Breaches**: Extracting training data

### Cybersecurity Evolution:

#### 1. **Advanced Persistent Threats (APTs)**
- Sophisticated, targeted, long-term attacks
- **State-sponsored Actors**: Nation-state cyber operations
- **Organized Crime**: Criminal cyber organizations
- **Supply Chain Attacks**: Compromising through vendors
- **Zero-day Exploits**: Attacks on unknown vulnerabilities

#### 2. **Ransomware 2.0**
- Evolving ransomware threats
- **Double Extortion**: Stealing data before encryption
- **Triple Extortion**: Adding DDoS to pressure
- **Ransomware-as-a-Service**: Commercial ransomware platforms
- **Critical Infrastructure Targeting**: Attacks on essential services

#### 3. **Cloud Security Challenges**
- Risks in cloud migration and operation
- **Misconfiguration**: Improper cloud security settings
- **Shared Responsibility**: Confusion over security duties
- **Data Sovereignty**: Cross-border data storage issues
- **Vendor Lock-in**: Difficulty changing cloud providers

## Geopolitical and Trade Risks

### Geopolitical Risk Drivers:

#### 1. **Great Power Competition**
- US-China strategic competition
- **Technology Decoupling**: Separate technology ecosystems
- **Trade Restrictions**: Tariffs and export controls
- **Investment Screening**: Foreign investment restrictions
- **Standard Setting**: Competition for technology standards

#### 2. **Regional Conflicts**
- Local and regional tensions
- **Territorial Disputes**: Border and maritime conflicts
- **Proxy Conflicts**: Indirect great power competition
- **Resource Conflicts**: Competition over natural resources
- **Ethnic and Religious Tensions**: Internal conflicts

#### 3. **Political Instability**
- Domestic political changes
- **Populist Movements**: Anti-establishment political forces
- **Democratic Backsliding**: Erosion of democratic norms
- **Leadership Transitions**: Changes in political leadership
- **Social Unrest**: Protests and civil disobedience

### Trade and Supply Chain Risks:

#### 1. **Supply Chain Resilience**
- Vulnerabilities in global supply chains
- **Concentration Risk**: Over-reliance on few sources
- **Just-in-Time Vulnerabilities**: Lean inventory risks
- **Logistics Disruption**: Transportation and logistics failures
- **Single Points of Failure**: Critical choke points

#### 2. **Trade Policy Uncertainty**
- Changing trade rules and agreements
- **Tariff Volatility**: Changing import/export duties
- **Trade Agreement Changes**: Renegotiation of agreements
- **Localization Requirements**: Domestic content rules
- **Export Controls**: Restrictions on technology exports

## Social and Demographic Risks

### Social Risk Factors:

#### 1. **Inequality and Social Cohesion**
- Rising economic and social disparities
- **Wealth Concentration**: Increasing wealth inequality
- **Opportunity Gaps**: Unequal access to opportunities
- **Social Mobility**: Reduced upward mobility
- **Political Polarization**: Growing ideological divisions

#### 2. **Demographic Shifts**
- Changing population structures
- **Aging Populations**: Increasing elderly dependency ratios
- **Youth Bulges**: Large youth populations in developing countries
- **Urbanization**: Rapid urban growth and megacities
- **Migration Patterns**: International and internal migration

#### 3. **Public Health Risks**
- Health-related social and economic impacts
- **Pandemic Risks**: Global disease outbreaks
- **Chronic Diseases**: Rising non-communicable diseases
- **Mental Health**: Increasing mental health challenges
- **Health System Capacity**: Healthcare system strains

## Regulatory and Compliance Evolution

### Emerging Regulatory Trends:

#### 1. **ESG Regulation**
- Environmental, Social, and Governance requirements
- **Climate Disclosure**: Mandatory climate risk reporting
- **Sustainable Finance**: Green finance regulations
- **Human Rights Due Diligence**: Supply chain human rights requirements
- **Diversity Requirements**: Board and workforce diversity rules

#### 2. **Digital Regulation**
- Technology and data governance
- **Data Privacy**: Enhanced data protection laws
- **Digital Taxation**: Taxes on digital services
- **Platform Regulation**: Rules for digital platforms
- **AI Governance**: Regulations for artificial intelligence

#### 3. **Cross-border Coordination**
- International regulatory alignment
- **Basel IV**: Global banking standards harmonization
- **Tax Transparency**: International tax information sharing
- **Anti-corruption**: Global anti-bribery enforcement
- **Sanctions Coordination**: Multilateral sanctions regimes

## Risk Management Innovation

### Advanced Risk Management Tools:

#### 1. **Predictive Analytics**
- Using data to predict future risks
- **Machine Learning Models**: Pattern recognition for risk prediction
- **Natural Language Processing**: Analyzing unstructured data
- **Network Analysis**: Mapping risk interconnections
- **Early Warning Systems**: Predictive risk indicators

#### 2. **Real-time Monitoring**
- Continuous risk surveillance
- **IoT Sensors**: Physical risk monitoring
- **Social Media Monitoring**: Reputation risk detection
- **Transaction Monitoring**: Real-time financial risk detection
- **Threat Intelligence**: Cyber threat monitoring

#### 3. **Scenario Analysis 2.0**
- Advanced scenario planning
- **Agent-based Modeling**: Simulating complex systems
- **System Dynamics**: Modeling feedback loops
- **Monte Carlo Simulation**: Probabilistic scenario generation
- **Stress Testing Integration**: Combining scenarios with stress tests

### Risk Culture for Emerging Risks:

#### 1. **Future-focused Mindset**
- Looking beyond immediate risks
- **Horizon Scanning**: Systematic monitoring of emerging trends
- **Weak Signal Detection**: Identifying early indicators
- **Foresight Exercises**: Structured future thinking
- **Innovation Monitoring**: Tracking technological developments

#### 2. **Adaptive Governance**
- Flexible risk governance structures
- **Agile Risk Committees**: Flexible meeting structures
- **Cross-functional Teams**: Interdisciplinary risk assessment
- **Rapid Response Protocols**: Quick adaptation to new risks
- **Experimental Approaches**: Testing new risk management methods

#### 3. **Stakeholder Engagement**
- Broad engagement on emerging risks
- **External Expertise**: Engaging academics and think tanks
- **Industry Collaboration**: Sharing insights across companies
- **Regulator Dialogue**: Early engagement with regulators
- **Community Input**: Considering broader societal impacts`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are emerging risks?",
          options: ["Newly developing or changing future risks", "Historical risk data", "Current operational risks", "Financial market risks"],
          correctAnswer: 0,
          explanation: "Emerging risks are future-oriented and difficult to quantify."
        },
        {
          id: 2,
          question: "What are acute physical climate risks?",
          options: ["Event-driven like storms and floods", "Long-term temperature changes", "Policy regulations", "Technology changes"],
          correctAnswer: 0,
          explanation: "Acute risks involve extreme weather events."
        },
        {
          id: 3,
          question: "What does TCFD recommend?",
          options: ["Climate risk disclosure framework", "Cybersecurity standards", "Financial accounting rules", "Product safety standards"],
          correctAnswer: 0,
          explanation: "Task Force on Climate-related Financial Disclosures provides climate reporting guidance."
        },
        {
          id: 4,
          question: "What is algorithmic bias?",
          options: ["Discriminatory AI outcomes", "Fast computer processing", "Data storage efficiency", "Network connection speed"],
          correctAnswer: 0,
          explanation: "Algorithmic bias creates unfair or discriminatory AI results."
        },
        {
          id: 5,
          question: "What are advanced persistent threats?",
          options: ["Sophisticated long-term cyber attacks", "Simple malware infections", "Accidental data leaks", "Natural disasters"],
          correctAnswer: 0,
          explanation: "APTs are complex, targeted, persistent cyber attacks."
        },
        {
          id: 6,
          question: "What are transition risks?",
          options: ["Risks from shift to low-carbon economy", "Physical climate damage", "Current operational risks", "Historical data risks"],
          correctAnswer: 0,
          explanation: "Transition risks arise from moving to sustainable economy."
        },
        {
          id: 7,
          question: "What is black box problem in AI?",
          options: ["Opaque AI decision processes", "Physical computer casing", "Data encryption", "Network firewall"],
          correctAnswer: 0,
          explanation: "Black box refers to unexplainable AI decision-making."
        },
        {
          id: 8,
          question: "What does supply chain resilience address?",
          options: ["Vulnerabilities in global supply chains", "Only production costs", "Only quality control", "Only marketing"],
          correctAnswer: 0,
          explanation: "Resilience focuses on supply chain robustness and recovery."
        },
        {
          id: 9,
          question: "What are Scope 3 emissions?",
          options: ["Indirect value chain emissions", "Direct operational emissions", "Purchased electricity emissions", "Employee commuting"],
          correctAnswer: 0,
          explanation: "Scope 3 includes upstream and downstream emissions."
        },
        {
          id: 10,
          question: "What is ransomware 2.0?",
          options: ["Evolving ransomware with double extortion", "Original simple ransomware", "Accidental data encryption", "Data backup systems"],
          correctAnswer: 0,
          explanation: "Modern ransomware adds data theft to encryption threats."
        },
        {
          id: 11,
          question: "What are chronic physical climate risks?",
          options: ["Long-term climate pattern shifts", "Sudden extreme events", "Policy changes", "Technology disruption"],
          correctAnswer: 0,
          explanation: "Chronic risks involve gradual climate changes."
        },
        {
          id: 12,
          question: "What does great power competition involve?",
          options: ["US-China strategic competition", "Only economic growth", "Only military spending", "Only cultural exchange"],
          correctAnswer: 0,
          explanation: "Great power competition spans technology, trade, and influence."
        },
        {
          id: 13,
          question: "What is adversarial attack in AI?",
          options: ["Manipulating inputs to cause errors", "Improving AI accuracy", "Training AI models", "Deploying AI systems"],
          correctAnswer: 0,
          explanation: "Adversarial attacks trick AI with specially crafted inputs."
        },
        {
          id: 14,
          question: "What does ESG regulation cover?",
          options: ["Environmental, Social, Governance requirements", "Only financial reporting", "Only product safety", "Only employment law"],
          correctAnswer: 0,
          explanation: "ESG encompasses broad sustainability and governance rules."
        },
        {
          id: 15,
          question: "What is horizon scanning?",
          options: ["Systematic monitoring of emerging trends", "Historical data analysis", "Current risk assessment", "Past incident review"],
          correctAnswer: 0,
          explanation: "Horizon scanning identifies future trends and weak signals."
        },
        {
          id: 16,
          question: "What are cloud security misconfigurations?",
          options: ["Improper cloud security settings", "Physical server security", "Employee training", "Network cabling"],
          correctAnswer: 0,
          explanation: "Misconfigurations are common cloud security vulnerabilities."
        },
        {
          id: 17,
          question: "What does predictive analytics use?",
          options: ["Data to predict future risks", "Only historical records", "Only expert opinions", "Only regulatory requirements"],
          correctAnswer: 0,
          explanation: "Predictive analytics forecasts future risks from data patterns."
        },
        {
          id: 18,
          question: "What is demographic aging risk?",
          options: ["Increasing elderly dependency ratios", "Youth population growth", "Urban migration", "International travel"],
          correctAnswer: 0,
          explanation: "Aging populations create economic and social challenges."
        },
        {
          id: 19,
          question: "What does adaptive governance provide?",
          options: ["Flexible structures for new risks", "Rigid traditional approaches", "Static committees", "Fixed procedures"],
          correctAnswer: 0,
          explanation: "Adaptive governance allows quick response to emerging risks."
        },
        {
          id: 20,
          question: "What are weak signals?",
          options: ["Early indicators of emerging risks", "Strong historical trends", "Current major events", "Past successful strategies"],
          correctAnswer: 0,
          explanation: "Weak signals are subtle early warnings of future changes."
        }
      ]
    },
    {
      id: 6,
      title: "Risk Leadership & Crisis Management",
      content: `# Leading Through Uncertainty

**Risk leadership** involves guiding organizations through complex risk environments and crisis situations. Effective risk leaders create resilient organizations that can withstand shocks and recover quickly from disruptions.

## Crisis Management Framework

### Crisis Management Lifecycle:

#### 1. **Pre-Crisis Phase (Prevention and Preparation)**
- **Risk Assessment**: Identifying potential crises
- **Prevention Planning**: Measures to prevent crises
- **Preparedness Planning**: Readiness for crisis response
- **Training and Exercising**: Building response capabilities
- **Early Warning Systems**: Monitoring for crisis triggers

#### 2. **Initial Response Phase (First 24-48 Hours)**
- **Crisis Recognition**: Identifying crisis occurrence
- **Activation**: Mobilizing crisis management team
- **Assessment**: Gathering initial information
- **Stabilization**: Taking immediate containment actions
- **Communication**: Initial stakeholder notifications

#### 3. **Acute Crisis Phase (Managing the Event)**
- **Command and Control**: Crisis team operations
- **Resource Management**: Allocation of response resources
- **Decision Making**: Critical decisions under pressure
- **Coordination**: Internal and external coordination
- **Communication Management**: Ongoing stakeholder communications

#### 4. **Recovery Phase (Restoring Operations)**
- **Business Recovery**: Restoring critical operations
- **Investigation**: Determining root causes
- **Remediation**: Fixing underlying problems
- **Communication**: Recovery progress updates
- **Transition Planning**: Moving to normal operations

#### 5. **Post-Crisis Phase (Learning and Improvement)**
- **Evaluation**: Assessing response effectiveness
- **Lessons Learned**: Identifying improvements
- **Documentation**: Recording experiences and decisions
- **Plan Updates**: Revising crisis management plans
- **Organizational Learning**: Embedding lessons into culture

## Crisis Leadership Competencies

### Essential Crisis Leader Skills:

#### 1. **Decision Making Under Pressure**
- **Situational Awareness**: Understanding evolving situation
- **Information Processing**: Filtering and analyzing information
- **Option Evaluation**: Weighing alternatives quickly
- **Decision Courage**: Making tough calls amid uncertainty
- **Adaptability**: Adjusting decisions as situation changes

#### 2. **Communication Excellence**
- **Clarity**: Clear, concise messaging
- **Transparency**: Appropriate openness about situation
- **Empathy**: Understanding stakeholder concerns
- **Consistency**: Coordinated messaging across channels
- **Timeliness**: Providing information when needed

#### 3. **Team Leadership**
- **Team Mobilization**: Quickly assembling right people
- **Role Clarity**: Clear assignment of responsibilities
- **Delegation**: Effective task distribution
- **Support**: Providing team psychological support
- **Coordination**: Ensuring team works together effectively

#### 4. **Stakeholder Management**
- **Stakeholder Mapping**: Identifying all affected parties
- **Priority Setting**: Focusing on critical stakeholders
- **Relationship Management**: Maintaining key relationships
- **Expectation Management**: Managing stakeholder expectations
- **Trust Building**: Maintaining credibility throughout crisis

## Crisis Communication Strategy

### Communication Principles:

#### 1. **Be First, Be Right, Be Credible**
- **First**: Communicate early and often
- **Right**: Ensure accuracy of information
- **Credible**: Build and maintain trust
- **Consistent**: Messages align across channels
- **Transparent**: Appropriate level of openness

#### 2. **Message Development**
- **Key Messages**: Core information to convey
- **Talking Points**: Supporting details and explanations
- **Q&A Preparation**: Anticipated questions and answers
- **Visual Aids**: Charts, diagrams, other visual supports
- **Social Media Content**: Platform-specific messaging

#### 3. **Channel Strategy**
- **Internal Channels**: Employee communications
- **External Channels**: Media and public communications
- **Digital Channels**: Website and social media
- **Direct Channels**: Personal communications to key stakeholders
- **Traditional Media**: Press conferences and releases

### Spokesperson Training:
- **Media Training**: Handling press interviews
- **Message Discipline**: Staying on message
- **Non-verbal Communication**: Body language and appearance
- **Difficult Questions**: Handling challenging questions
- **Crisis-specific Training**: Scenario-based practice

## Business Resilience Planning

### Resilience Framework Components:

#### 1. **Organizational Resilience**
- **Leadership Resilience**: Crisis-ready leadership
- **Cultural Resilience**: Adaptive organizational culture
- **Financial Resilience**: Strong financial position
- **Operational Resilience**: Robust operational capabilities
- **Reputational Resilience**: Strong brand and stakeholder trust

#### 2. **Operational Resilience**
- **Redundancy**: Backup systems and processes
- **Flexibility**: Ability to adapt operations
- **Diversity**: Multiple options and alternatives
- **Modularity**: Independent operational components
- **Decentralization**: Distributed decision-making

#### 3. **Supply Chain Resilience**
- **Visibility**: Understanding supply chain network
- **Flexibility**: Ability to switch suppliers or routes
- **Collaboration**: Strong supplier relationships
- **Inventory Strategy**: Strategic buffer inventory
- **Diversification**: Multiple sourcing options

### Resilience Metrics:
- **Recovery Time Objective (RTO)**: Time to restore operations
- **Recovery Point Objective (RPO)**: Acceptable data loss
- **Maximum Tolerable Downtime (MTD)**: Maximum acceptable outage
- **Service Delivery Objective (SDO)**: Minimum service level during recovery
- **Resilience Score**: Composite resilience measurement

## Reputation Risk Management

### Reputation Risk Framework:

#### 1. **Reputation Risk Assessment**
- **Stakeholder Analysis**: Key stakeholder perceptions
- **Reputation Drivers**: Factors affecting reputation
- **Vulnerability Assessment**: Weak points in reputation
- **Scenario Analysis**: Potential reputation threats
- **Impact Assessment**: Consequences of reputation damage

#### 2. **Reputation Monitoring**
- **Media Monitoring**: Traditional media coverage
- **Social Listening**: Social media sentiment analysis
- **Stakeholder Surveys**: Periodic perception measurement
- **Competitor Benchmarking**: Comparison with peers
- **Issue Tracking**: Monitoring emerging issues

#### 3. **Reputation Repair**
- **Response Strategy**: Approach to reputation repair
- **Corrective Actions**: Addressing underlying issues
- **Communication Plan**: Reputation restoration messaging
- **Relationship Rebuilding**: Rebuilding stakeholder trust
- **Monitoring and Adjustment**: Tracking repair progress

### Reputation Recovery Strategies:
- **Transparency**: Open acknowledgment of issues
- **Accountability**: Taking responsibility where appropriate
- **Remediation**: Fixing problems and compensating harm
- **Engagement**: Direct stakeholder communication
- **Consistency**: Sustained improvement over time

## Board Crisis Responsibilities

### Board Crisis Governance:

#### 1. **Pre-Crisis Board Role**
- **Oversight**: Reviewing crisis preparedness
- **Resource Allocation**: Ensuring adequate crisis resources
- **Policy Approval**: Approving crisis management policies
- **Succession Planning**: Ensuring leadership continuity
- **Scenario Review**: Reviewing crisis scenarios and plans

#### 2. **During Crisis Board Role**
- **Strategic Guidance**: Providing strategic direction
- **Decision Support**: Supporting management decisions
- **Oversight**: Monitoring crisis response
- **External Relations**: Managing key external relationships
- **Succession Activation**: Implementing succession if needed

#### 3. **Post-Crisis Board Role**
- **Review and Evaluation**: Assessing crisis response
- **Accountability**: Ensuring appropriate accountability
- **Learning**: Driving organizational learning
- **Compensation Decisions**: Considering crisis performance
- **Plan Revision**: Overseeing plan improvements

### Board Crisis Committee:
- **Composition**: Directors with relevant expertise
- **Authority**: Clear decision-making authority
- **Information Flow**: Direct access to crisis information
- **Meeting Frequency**: Flexible meeting schedule
- **Documentation**: Recording decisions and rationale

## Psychological Aspects of Crisis Management

### Human Factors in Crisis:

#### 1. **Crisis Psychology**
- **Stress Responses**: How people react under stress
- **Decision Fatigue**: Reduced decision quality over time
- **Groupthink**: Pressure for consensus in crisis teams
- **Cognitive Biases**: Systematic thinking errors
- **Resilience Factors**: Psychological resilience elements

#### 2. **Crisis Team Well-being**
- **Stress Management**: Techniques for managing stress
- **Team Support**: Mutual support among team members
- **Rotation Planning**: Preventing team burnout
- **Psychological Safety**: Safe environment for speaking up
- **Recovery Time**: Adequate rest between shifts

#### 3. **Organizational Trauma**
- **Impact Assessment**: Psychological impact on organization
- **Healing Process**: Supporting organizational recovery
- **Cultural Impact**: Long-term cultural changes
- **Memory Management**: How crisis is remembered
- **Legacy Issues**: Long-term consequences of crisis

## Learning from Crises

### Post-Crisis Learning Process:

#### 1. **After Action Review (AAR)**
- **What Happened**: Factual timeline reconstruction
- **What Went Well**: Successful aspects of response
- **What Could Improve**: Areas for improvement
- **Action Items**: Specific improvement actions
- **Accountabilities**: Responsibility for improvements

#### 2. **Root Cause Analysis**
- **Immediate Causes**: Direct causes of crisis
- **Underlying Causes**: Systemic or cultural causes
- **Contributing Factors**: Factors that enabled crisis
- **Causal Chains**: Sequences of cause and effect
- **Systemic Issues**: Broader organizational issues

#### 3. **Knowledge Management**
- **Lessons Learned Database**: Capturing crisis insights
- **Best Practice Development**: Creating improved practices
- **Training Updates**: Incorporating lessons into training
- **Plan Revisions**: Updating crisis management plans
- **Cultural Integration**: Embedding learning into culture

### Continuous Improvement Cycle:
- **Plan**: Develop and update crisis plans
- **Train**: Build crisis response capabilities
- **Exercise**: Practice through simulations and drills
- **Respond**: Actual crisis response
- **Learn**: Capture lessons and improve
- **Repeat**: Continuous cycle of improvement

## Future of Crisis Management

### Emerging Trends:

#### 1. **Digital Crisis Management**
- **Virtual Crisis Teams**: Remote crisis response
- **Digital Collaboration Tools**: Online crisis coordination
- **Social Media Integration**: Social media in crisis response
- **Data Analytics**: Data-driven crisis decision making
- **Automated Monitoring**: AI-powered crisis detection

#### 2. **Integrated Resilience**
- **Holistic Approach**: Combining business continuity, risk, security
- **Enterprise View**: Organization-wide resilience perspective
- **Supply Chain Integration**: Extended enterprise resilience
- **Community Resilience**: Engaging broader community
- **ESG Integration**: Linking resilience with sustainability

#### 3. **Predictive Crisis Management**
- **Early Warning Systems**: Predictive crisis indicators
- **Scenario Planning**: Advanced scenario development
- **Risk Intelligence**: Integrated risk information
- **Predictive Analytics**: Forecasting crisis likelihood
- **Preventive Actions**: Proactive crisis prevention`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is risk leadership?",
          options: ["Guiding organizations through risk environments", "Only financial management", "Only operational supervision", "Only marketing strategy"],
          correctAnswer: 0,
          explanation: "Risk leadership involves steering organizations through uncertainty and crises."
        },
        {
          id: 2,
          question: "What is first phase in crisis lifecycle?",
          options: ["Pre-crisis prevention and preparation", "Initial response", "Acute crisis management", "Recovery phase"],
          correctAnswer: 0,
          explanation: "Pre-crisis phase focuses on prevention and preparedness."
        },
        {
          id: 3,
          question: "What does 'be first, be right, be credible' mean?",
          options: ["Crisis communication principles", "Financial reporting standards", "Product development process", "Employee hiring criteria"],
          correctAnswer: 0,
          explanation: "These are fundamental crisis communication principles."
        },
        {
          id: 4,
          question: "What is organizational resilience?",
          options: ["Organization's ability to withstand shocks", "Only financial strength", "Only market position", "Only product quality"],
          correctAnswer: 0,
          explanation: "Organizational resilience encompasses multiple dimensions of robustness."
        },
        {
          id: 5,
          question: "What does RTO measure?",
          options: ["Time to restore operations", "Acceptable data loss", "Financial cost of recovery", "Number of affected customers"],
          correctAnswer: 0,
          explanation: "Recovery Time Objective defines maximum acceptable restoration time."
        },
        {
          id: 6,
          question: "What is reputation risk assessment?",
          options: ["Evaluating reputation vulnerabilities", "Measuring financial performance", "Assessing operational efficiency", "Calculating market share"],
          correctAnswer: 0,
          explanation: "Reputation risk assessment identifies reputation threats and vulnerabilities."
        },
        {
          id: 7,
          question: "What is board's pre-crisis role?",
          options: ["Oversight of crisis preparedness", "Direct crisis management", "Daily operations", "Marketing decisions"],
          correctAnswer: 0,
          explanation: "Board oversees preparedness before crises occur."
        },
        {
          id: 8,
          question: "What is situational awareness?",
          options: ["Understanding evolving crisis situation", "Historical data analysis", "Future market predictions", "Past performance review"],
          correctAnswer: 0,
          explanation: "Situational awareness means comprehending real-time crisis dynamics."
        },
        {
          id: 9,
          question: "What does supply chain resilience include?",
          options: ["Visibility and flexibility", "Only lowest cost", "Only fastest delivery", "Only single sourcing"],
          correctAnswer: 0,
          explanation: "Resilient supply chains have visibility and adaptable options."
        },
        {
          id: 10,
          question: "What is after action review?",
          options: ["Post-crisis learning process", "Pre-crisis planning", "During crisis response", "Financial audit"],
          correctAnswer: 0,
          explanation: "AAR systematically reviews crisis response for learning."
        },
        {
          id: 11,
          question: "What is crisis team psychological safety?",
          options: ["Safe environment for speaking up", "Physical security", "Financial guarantees", "Legal protections"],
          correctAnswer: 0,
          explanation: "Psychological safety enables open communication in crisis teams."
        },
        {
          id: 12,
          question: "What does reputation monitoring involve?",
          options: ["Media and social listening", "Only financial metrics", "Only production data", "Only employee surveys"],
          correctAnswer: 0,
          explanation: "Reputation monitoring tracks multiple perception channels."
        },
        {
          id: 13,
          question: "What is decision courage?",
          options: ["Making tough calls amid uncertainty", "Avoiding decisions", "Delegating all decisions", "Following consensus always"],
          correctAnswer: 0,
          explanation: "Decision courage means making necessary difficult decisions."
        },
        {
          id: 14,
          question: "What is operational resilience?",
          options: ["Robust operational capabilities", "Only financial reserves", "Only market position", "Only brand value"],
          correctAnswer: 0,
          explanation: "Operational resilience ensures business process robustness."
        },
        {
          id: 15,
          question: "What does board do during crisis?",
          options: ["Provides strategic guidance", "Manages daily operations", "Handles media relations", "Executes recovery actions"],
          correctAnswer: 0,
          explanation: "Board provides strategic direction while management handles execution."
        },
        {
          id: 16,
          question: "What is reputation repair strategy?",
          options: ["Approach to restoring reputation", "Ignoring reputation issues", "Hiding problems", "Blaming others"],
          correctAnswer: 0,
          explanation: "Reputation repair systematically addresses reputation damage."
        },
        {
          id: 17,
          question: "What is crisis team well-being?",
          options: ["Supporting team psychological health", "Only physical safety", "Only financial compensation", "Only legal protection"],
          correctAnswer: 0,
          explanation: "Team well-being includes psychological support during crises."
        },
        {
          id: 18,
          question: "What does integrated resilience combine?",
          options: ["Business continuity, risk, security", "Only marketing and sales", "Only finance and accounting", "Only production and logistics"],
          correctAnswer: 0,
          explanation: "Integrated resilience takes holistic organizational view."
        },
        {
          id: 19,
          question: "What is root cause analysis?",
          options: ["Identifying underlying crisis causes", "Assigning blame", "Calculating costs", "Measuring duration"],
          correctAnswer: 0,
          explanation: "Root cause analysis finds fundamental reasons for crises."
        },
        {
          id: 20,
          question: "What are emerging crisis trends?",
          options: ["Digital crisis management", "Ignoring technology", "Reducing preparedness", "Eliminating planning"],
          correctAnswer: 0,
          explanation: "Digital tools and integrated approaches represent future trends."
        }
      ]
    }
  ],
  
  exam: {
    title: "Corporate Risk Diploma Final Exam",
    description: "Comprehensive examination covering all six modules of Corporate Risk Diploma program",
    passingScore: 75,
    questions: [
      {
        id: 1,
        question: "What does ERM provide?",
        options: ["Holistic view of all organizational risks", "Only financial risk management", "Only operational risk control", "Only compliance monitoring"],
        correctAnswer: 0,
        explanation: "ERM integrates management of all risks across the organization."
      },
      {
        id: 2,
        question: "How many components in COSO ERM framework?",
        options: ["Five components", "Three components", "Seven components", "Ten components"],
        correctAnswer: 0,
        explanation: "COSO ERM consists of five interrelated components."
      },
      {
        id: 3,
        question: "What is first line of defense?",
        options: ["Operational management", "Risk management function", "Internal audit", "Board committee"],
        correctAnswer: 0,
        explanation: "First line owns and manages risks in daily operations."
      },
      {
        id: 4,
        question: "What does risk appetite define?",
        options: ["Amount of risk organization will accept", "Maximum possible loss", "Insurance coverage", "Compliance requirements"],
        correctAnswer: 0,
        explanation: "Risk appetite sets boundaries for risk-taking."
      },
      {
        id: 5,
        question: "What does board risk committee need?",
        options: ["Independent directors with risk expertise", "Only executive management", "Only external consultants", "Only government representatives"],
        correctAnswer: 0,
        explanation: "Committee needs independent, knowledgeable members."
      },
      {
        id: 6,
        question: "What does SOX regulate?",
        options: ["Financial reporting and controls", "Environmental protection", "Data privacy", "Product safety"],
        correctAnswer: 0,
        explanation: "Sarbanes-Oxley focuses on financial integrity."
      },
      {
        id: 7,
        question: "What is interest rate risk?",
        options: ["Risk from interest rate changes", "Currency risk", "Commodity risk", "Equity risk"],
        correctAnswer: 0,
        explanation: "Interest rate risk arises from rate fluctuations."
      },
      {
        id: 8,
        question: "What does VaR measure?",
        options: ["Maximum potential loss at confidence level", "Average expected return", "Minimum guaranteed return", "Historical average"],
        correctAnswer: 0,
        explanation: "Value at Risk estimates worst-case loss."
      },
      {
        id: 9,
        question: "What are credit risk components?",
        options: ["PD, LGD, EAD", "VaR, ES, Stress", "LCR, NSFR, Gap", "ROE, ROA, EPS"],
        correctAnswer: 0,
        explanation: "Probability of Default, Loss Given Default, Exposure at Default."
      },
      {
        id: 10,
        question: "What is LCR?",
        options: ["High-quality assets / 30-day outflows", "Total assets / liabilities", "Equity / assets", "Revenue / expenses"],
        correctAnswer: 0,
        explanation: "Liquidity Coverage Ratio ensures 30-day survival."
      },
      {
        id: 11,
        question: "What are strategic risks?",
        options: ["Risks affecting strategy execution", "Only financial risks", "Only operational risks", "Only compliance risks"],
        correctAnswer: 0,
        explanation: "Strategic risks impact achievement of strategic objectives."
      },
      {
        id: 12,
        question: "How many operational risk categories?",
        options: ["Seven categories", "Three categories", "Five categories", "Ten categories"],
        correctAnswer: 0,
        explanation: "Basel II defines seven operational risk types."
      },
      {
        id: 13,
        question: "What does BIA identify?",
        options: ["Critical business functions", "All processes", "Only IT systems", "Only financials"],
        correctAnswer: 0,
        explanation: "Business Impact Analysis identifies essential functions."
      },
      {
        id: 14,
        question: "What is RTO?",
        options: ["Maximum acceptable downtime", "Maximum data loss", "Minimum resources", "Recovery cost"],
        correctAnswer: 0,
        explanation: "Recovery Time Objective defines acceptable restoration time."
      },
      {
        id: 15,
        question: "What are emerging risks?",
        options: ["Newly developing future risks", "Historical risks", "Current risks", "Financial risks"],
        correctAnswer: 0,
        explanation: "Emerging risks are future-oriented and difficult to quantify."
      },
      {
        id: 16,
        question: "What are acute climate risks?",
        options: ["Event-driven like storms", "Long-term changes", "Policy changes", "Technology changes"],
        correctAnswer: 0,
        explanation: "Acute risks involve extreme weather events."
      },
      {
        id: 17,
        question: "What is algorithmic bias?",
        options: ["Discriminatory AI outcomes", "Fast processing", "Data efficiency", "Network speed"],
        correctAnswer: 0,
        explanation: "Algorithmic bias creates unfair AI results."
      },
      {
        id: 18,
        question: "What does TCFD recommend?",
        options: ["Climate risk disclosure", "Cybersecurity standards", "Accounting rules", "Safety standards"],
        correctAnswer: 0,
        explanation: "TCFD provides climate reporting guidance."
      },
      {
        id: 19,
        question: "What is risk leadership?",
        options: ["Guiding through uncertainty", "Financial management", "Operational supervision", "Marketing strategy"],
        correctAnswer: 0,
        explanation: "Risk leadership involves steering through risk environments."
      },
      {
        id: 20,
        question: "What is first crisis phase?",
        options: ["Pre-crisis prevention", "Initial response", "Acute management", "Recovery"],
        correctAnswer: 0,
        explanation: "Pre-crisis focuses on prevention and preparedness."
      },
      {
        id: 21,
        question: "What does ISO 31000 provide?",
        options: ["Risk management principles", "Accounting standards", "Product specifications", "Safety protocols"],
        correctAnswer: 0,
        explanation: "ISO 31000 is international risk management standard."
      },
      {
        id: 22,
        question: "What is risk tolerance?",
        options: ["Acceptable variation around objectives", "Total capital available", "Number of employees", "Market share target"],
        correctAnswer: 0,
        explanation: "Risk tolerance defines specific measurable limits."
      },
      {
        id: 23,
        question: "Who provides independent assurance?",
        options: ["Internal audit", "Operational managers", "Risk committee", "Consultants"],
        correctAnswer: 0,
        explanation: "Internal audit independently assesses risk management."
      },
      {
        id: 24,
        question: "What does GDPR regulate?",
        options: ["EU data protection", "US financial reporting", "Product safety", "Environmental protection"],
        correctAnswer: 0,
        explanation: "General Data Protection Regulation covers EU data privacy."
      },
      {
        id: 25,
        question: "What is transaction FX risk?",
        options: ["Future foreign currency cash flows", "Consolidation of operations", "Competitive position", "Financial translation"],
        correctAnswer: 0,
        explanation: "Transaction risk affects future foreign currency flows."
      },
      {
        id: 26,
        question: "What does expected shortfall measure?",
        options: ["Average loss beyond VaR", "Maximum gain", "Historical return", "Standard deviation"],
        correctAnswer: 0,
        explanation: "Expected Shortfall captures tail risk."
      },
      {
        id: 27,
        question: "What is funding liquidity risk?",
        options: ["Inability to meet cash obligations", "Trading difficulty", "FX losses", "Interest rate changes"],
        correctAnswer: 0,
        explanation: "Funding risk concerns meeting payment obligations."
      },
      {
        id: 28,
        question: "What is competitive risk?",
        options: ["Loss of market position", "Internal fraud", "System failure", "Natural disaster"],
        correctAnswer: 0,
        explanation: "Competitive risk involves threats from competitors."
      },
      {
        id: 29,
        question: "What does RPO define?",
        options: ["Maximum acceptable data loss", "Maximum downtime", "Minimum resources", "Recovery cost"],
        correctAnswer: 0,
        explanation: "Recovery Point Objective defines acceptable data loss."
      },
      {
        id: 30,
        question: "What are transition risks?",
        options: ["Risks from shift to low-carbon economy", "Physical climate damage", "Current operations", "Historical data"],
        correctAnswer: 0,
        explanation: "Transition risks arise from moving to sustainable economy."
      },
      {
        id: 31,
        question: "What are APTs?",
        options: ["Sophisticated long-term cyber attacks", "Simple malware", "Accidental leaks", "Natural disasters"],
        correctAnswer: 0,
        explanation: "Advanced Persistent Threats are complex cyber attacks."
      },
      {
        id: 32,
        question: "What does 'be first, be right, be credible' mean?",
        options: ["Crisis communication principles", "Financial reporting", "Product development", "Employee hiring"],
        correctAnswer: 0,
        explanation: "These are fundamental crisis communication principles."
      },
      {
        id: 33,
        question: "What is organizational resilience?",
        options: ["Ability to withstand shocks", "Financial strength", "Market position", "Product quality"],
        correctAnswer: 0,
        explanation: "Organizational resilience encompasses multiple robustness dimensions."
      },
      {
        id: 34,
        question: "What does reputation assessment evaluate?",
        options: ["Reputation vulnerabilities", "Financial performance", "Operational efficiency", "Market share"],
        correctAnswer: 0,
        explanation: "Reputation risk assessment identifies reputation threats."
      },
      {
        id: 35,
        question: "What is board's pre-crisis role?",
        options: ["Oversight of preparedness", "Direct management", "Daily operations", "Marketing decisions"],
        correctAnswer: 0,
        explanation: "Board oversees preparedness before crises occur."
      },
      {
        id: 36,
        question: "What is situational awareness?",
        options: ["Understanding evolving situation", "Historical data", "Future predictions", "Past performance"],
        correctAnswer: 0,
        explanation: "Situational awareness means comprehending real-time dynamics."
      },
      {
        id: 37,
        question: "What does supply chain resilience include?",
        options: ["Visibility and flexibility", "Lowest cost", "Fastest delivery", "Single sourcing"],
        correctAnswer: 0,
        explanation: "Resilient supply chains have visibility and adaptable options."
      },
      {
        id: 38,
        question: "What is after action review?",
        options: ["Post-crisis learning process", "Pre-crisis planning", "During response", "Financial audit"],
        correctAnswer: 0,
        explanation: "AAR systematically reviews crisis response."
      },
      {
        id: 39,
        question: "What is psychological safety?",
        options: ["Safe environment for speaking up", "Physical security", "Financial guarantees", "Legal protections"],
        correctAnswer: 0,
        explanation: "Psychological safety enables open communication."
      },
      {
        id: 40,
        question: "What are emerging crisis trends?",
        options: ["Digital crisis management", "Ignoring technology", "Reducing preparedness", "Eliminating planning"],
        correctAnswer: 0,
        explanation: "Digital tools represent future crisis management trends."
      }
    ]
  }
};

export default corporateRiskDiplomaCourse;
