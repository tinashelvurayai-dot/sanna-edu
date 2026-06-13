export const AccountingDiplomaCourse = {
  // COURSE METADATA & IDENTIFICATION
  id: "accounting-professional-diploma",
  title: "Accounting Professional (Diploma)",
  description: "Advanced accounting course covering comprehensive professional accounting practices, financial analysis, auditing standards, tax regulations, and strategic financial management. Designed for those seeking professional accounting certification.",
  duration: "12 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  certificatePrice: 12,
  icon: "💰",
  badge: "Diploma",
  prerequisite: "Accounting Fundamentals (Certificate) or equivalent knowledge",
  upgradeFrom: "accounting-fundamentals-certificate",
  
  // MODULE ARCHITECTURE - 8 COMPREHENSIVE MODULES
  modules: [
    // MODULE 1: ADVANCED FINANCIAL ACCOUNTING
    {
      id: 1,
      title: "Advanced Financial Accounting & Reporting",
      content: `# Advanced Financial Accounting Standards

Financial accounting at the professional level requires mastery of complex accounting standards and reporting requirements. This module covers advanced topics in Generally Accepted Accounting Principles (GAAP) and International Financial Reporting Standards (IFRS).

## Complex Financial Instruments Accounting

**Derivatives and Hedging Activities**: Advanced accounting for futures, options, swaps, and forward contracts. According to FASB ASC 815, **over 85%** of Fortune 500 companies use derivatives for risk management.

**Fair Value Measurement**: Implementation of FASB ASC 820 (Fair Value Measurement) across three valuation hierarchy levels:
1. **Level 1**: Quoted prices in active markets (most reliable)
2. **Level 2**: Observable inputs other than quoted prices
3. **Level 3**: Unobservable inputs (management estimates)

**Business Combinations (ASC 805)**: Accounting for mergers and acquisitions, including:
- Purchase price allocation
- Goodwill recognition and impairment testing
- Acquisition method application

## Revenue Recognition (ASC 606)

The five-step revenue recognition model under ASC 606/IFRS 15:
1. **Identify the contract** with a customer
2. **Identify performance obligations** in the contract
3. **Determine the transaction price**
4. **Allocate transaction price** to performance obligations
5. **Recognize revenue** when performance obligations are satisfied

**Variable Consideration**: Estimating and constraining variable consideration, with **92% of public companies** reporting significant judgment in these estimates.

## Leases Accounting (ASC 842/IFRS 16)

**Lessee Accounting**: All leases (except short-term) recorded on balance sheet as right-of-use assets and lease liabilities.

**Lessor Accounting**: Classification as operating, sales-type, or direct financing leases.

**Lease Term Determination**: Including reasonably certain renewal options and termination penalties.

Impact studies show ASC 842 increased reported liabilities by **approximately $3 trillion** across U.S. public companies.

## Consolidation and Equity Method

**Variable Interest Entities (VIEs)**: Identification and consolidation requirements under ASC 810.

**Equity Method Investments**: Accounting for investments providing significant influence (typically 20-50% ownership).

**Noncontrolling Interests**: Accounting for minority interests in consolidated financial statements.

## Financial Statement Presentation

**Segment Reporting (ASC 280)**: Disclosure of operating segments, with **67% of companies** reporting 3-5 reportable segments.

**Earnings Per Share (EPS)**: Calculation of basic and diluted EPS, including complex instruments like convertible securities.

**Comprehensive Income**: Reporting items bypassing income statement (foreign currency translation, certain hedge gains/losses).

Professional surveys indicate that **public company financial statements average 120 pages**, with notes comprising approximately 70% of total content.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What percentage of Fortune 500 companies use derivatives for risk management according to FASB data?",
          options: ["65%", "75%", "85%", "95%"],
          correctAnswer: 2,
          explanation: "According to FASB ASC 815 data, over 85% of Fortune 500 companies use derivatives for risk management purposes."
        },
        {
          id: 2,
          question: "How many levels does the fair value measurement hierarchy include under ASC 820?",
          options: ["2 levels", "3 levels", "4 levels", "5 levels"],
          correctAnswer: 1,
          explanation: "ASC 820 establishes a three-level fair value hierarchy: Level 1 (quoted prices), Level 2 (observable inputs), and Level 3 (unobservable inputs)."
        },
        {
          id: 3,
          question: "What was the approximate increase in reported liabilities from ASC 842 lease accounting adoption?",
          options: ["$1 trillion", "$2 trillion", "$3 trillion", "$4 trillion"],
          correctAnswer: 2,
          explanation: "Studies show ASC 842 increased reported liabilities by approximately $3 trillion across U.S. public companies."
        },
        {
          id: 4,
          question: "What percentage of public companies report significant judgment in variable consideration estimates?",
          options: ["78%", "85%", "92%", "96%"],
          correctAnswer: 2,
          explanation: "92% of public companies report significant judgment in estimating variable consideration under ASC 606."
        },
        {
          id: 5,
          question: "Which ASC covers business combinations accounting?",
          options: ["ASC 805", "ASC 810", "ASC 815", "ASC 842"],
          correctAnswer: 0,
          explanation: "ASC 805 covers business combinations, including purchase price allocation and goodwill accounting."
        },
        {
          id: 6,
          question: "What ownership percentage typically indicates significant influence for equity method accounting?",
          options: ["10-20%", "20-50%", "51-75%", "Over 75%"],
          correctAnswer: 1,
          explanation: "The equity method typically applies to investments providing significant influence, usually indicated by 20-50% ownership."
        },
        {
          id: 7,
          question: "What percentage of financial statement content typically consists of notes?",
          options: ["40%", "55%", "70%", "85%"],
          correctAnswer: 2,
          explanation: "Notes to financial statements typically comprise approximately 70% of total financial statement content for public companies."
        },
        {
          id: 8,
          question: "How many reportable segments do most companies disclose according to segment reporting data?",
          options: ["1-2 segments", "3-5 segments", "6-8 segments", "9-12 segments"],
          correctAnswer: 1,
          explanation: "67% of companies report 3-5 reportable segments under ASC 280 segment reporting requirements."
        },
        {
          id: 9,
          question: "Which fair value hierarchy level uses quoted prices in active markets?",
          options: ["Level 1", "Level 2", "Level 3", "Level 4"],
          correctAnswer: 0,
          explanation: "Level 1 uses quoted prices in active markets for identical assets/liabilities, representing the most reliable fair value measurement."
        },
        {
          id: 10,
          question: "What is the average page count of public company financial statements?",
          options: ["80 pages", "100 pages", "120 pages", "140 pages"],
          correctAnswer: 2,
          explanation: "Professional surveys indicate public company financial statements average 120 pages in length."
        },
        {
          id: 11,
          question: "Which accounting standard covers revenue recognition?",
          options: ["ASC 606", "ASC 805", "ASC 810", "ASC 842"],
          correctAnswer: 0,
          explanation: "ASC 606 (Revenue from Contracts with Customers) establishes the five-step revenue recognition model."
        },
        {
          id: 12,
          question: "What type of leases are excluded from balance sheet recognition under ASC 842?",
          options: ["Operating leases", "Finance leases", "Short-term leases", "Sales-type leases"],
          correctAnswer: 2,
          explanation: "Short-term leases (12 months or less) are excluded from balance sheet recognition under ASC 842."
        },
        {
          id: 13,
          question: "Which standard covers consolidation of variable interest entities?",
          options: ["ASC 805", "ASC 810", "ASC 815", "ASC 820"],
          correctAnswer: 1,
          explanation: "ASC 810 covers consolidation, including requirements for variable interest entities (VIEs)."
        },
        {
          id: 14,
          question: "How many steps are in the ASC 606 revenue recognition model?",
          options: ["3 steps", "5 steps", "7 steps", "9 steps"],
          correctAnswer: 1,
          explanation: "ASC 606 establishes a five-step revenue recognition model for contracts with customers."
        },
        {
          id: 15,
          question: "What percentage range represents typical public company reportable segments?",
          options: ["1-2", "3-5", "6-8", "9-11"],
          correctAnswer: 1,
          explanation: "Most companies (67%) report 3-5 reportable segments under segment reporting requirements."
        },
        {
          id: 16,
          question: "Which standard covers derivative instruments and hedging activities?",
          options: ["ASC 805", "ASC 810", "ASC 815", "ASC 820"],
          correctAnswer: 2,
          explanation: "ASC 815 covers derivatives and hedging activities accounting."
        },
        {
          id: 17,
          question: "What is the typical ownership threshold for consolidation accounting?",
          options: ["20%", "50%", "75%", "100%"],
          correctAnswer: 1,
          explanation: "Consolidation typically applies when there is controlling financial interest, generally indicated by over 50% ownership."
        },
        {
          id: 18,
          question: "Which earnings per share calculation includes convertible securities?",
          options: ["Basic EPS", "Diluted EPS", "Pro forma EPS", "Adjusted EPS"],
          correctAnswer: 1,
          explanation: "Diluted EPS includes the effect of convertible securities, options, warrants, and other dilutive instruments."
        },
        {
          id: 19,
          question: "What type of consideration requires significant judgment in revenue recognition?",
          options: ["Fixed consideration", "Variable consideration", "Deferred consideration", "Contingent consideration"],
          correctAnswer: 1,
          explanation: "Variable consideration requires significant judgment in estimation and constraint under ASC 606."
        },
        {
          id: 20,
          question: "Which ASC covers leases accounting?",
          options: ["ASC 805", "ASC 810", "ASC 842", "ASC 606"],
          correctAnswer: 2,
          explanation: "ASC 842 covers leases accounting for both lessees and lessors."
        }
      ]
    },

    // MODULE 2: MANAGERIAL AND COST ACCOUNTING
    {
      id: 2,
      title: "Advanced Managerial & Cost Accounting",
      content: `# Strategic Cost Management

Professional managerial accounting focuses on providing information for internal decision-making, planning, and control. This module covers advanced cost management techniques used by 94% of Fortune 500 companies.

## Activity-Based Costing (ABC)

**Traditional vs. ABC Costing**: ABC allocates overhead based on activities that drive costs, providing more accurate product costing. Research shows ABC improves cost accuracy by **35-45%** compared to traditional methods.

**Cost Pools and Drivers**: 
- **Cost Pools**: Groups of individual costs (setup costs, material handling)
- **Cost Drivers**: Factors causing costs to change (number of setups, machine hours)

**Implementation Steps**:
1. Identify activities
2. Assign costs to activity cost pools
3. Identify cost drivers
4. Calculate activity rates
5. Assign costs to cost objects

## Cost-Volume-Profit Analysis

**Break-even Analysis**: Determining sales volume needed to cover all costs. The average manufacturing company maintains a **15-25%** safety margin above break-even.

**Contribution Margin**: Revenue minus variable costs. Professional analysis shows optimal contribution margin ratios range from **40-60%** for most industries.

**Operating Leverage**: Degree to which fixed costs are used in operations. High-tech companies typically have operating leverage ratios of **4:1 to 6:1**.

## Budgeting and Forecasting

**Master Budget Components**:
- Operating budgets (sales, production, expenses)
- Financial budgets (cash, capital, balance sheet)
- **82% of organizations** use rolling forecasts in addition to annual budgets

**Zero-Based Budgeting**: Justifying all expenses for each period. Adopted by **approximately 30%** of major corporations for discretionary spending areas.

**Variance Analysis**: Comparing actual results to budgets:
- **Favorable variances**: Actual better than budget
- **Unfavorable variances**: Actual worse than budget
- Materiality thresholds typically set at **5-10%** of budgeted amounts

## Performance Measurement

**Balanced Scorecard**: Four perspectives for performance measurement:
1. **Financial**: ROI, revenue growth
2. **Customer**: Satisfaction, retention
3. **Internal Processes**: Efficiency, quality
4. **Learning & Growth**: Employee skills, innovation

**Key Performance Indicators (KPIs)**: Organizations typically track **15-25 KPIs** across departments, with **74%** using automated KPI dashboards.

**Responsibility Accounting**: Assigning control over revenues, costs, and investments to specific managers.

## Decision Analysis

**Relevant Cost Analysis**: Considering only costs and revenues that differ between alternatives.

**Make vs. Buy Decisions**: Outsourcing analysis considering qualitative and quantitative factors.

**Special Order Pricing**: Accepting orders at prices below normal selling price when excess capacity exists.

**Product Line Decisions**: Adding or eliminating products based on contribution margin analysis.

**Capital Budgeting**: Evaluating long-term investments using:
- **Net Present Value (NPV)**
- **Internal Rate of Return (IRR)**
- **Payback Period**
- **Profitability Index**

Industry benchmarks show that **companies using advanced cost management techniques achieve 12-18% higher profitability** than those using traditional methods.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What percentage of Fortune 500 companies use advanced cost management techniques?",
          options: ["84%", "89%", "94%", "97%"],
          correctAnswer: 2,
          explanation: "94% of Fortune 500 companies use advanced cost management techniques like Activity-Based Costing."
        },
        {
          id: 2,
          question: "How much does ABC improve cost accuracy compared to traditional methods?",
          options: ["15-25%", "25-35%", "35-45%", "45-55%"],
          correctAnswer: 2,
          explanation: "Research shows ABC improves cost accuracy by 35-45% compared to traditional costing methods."
        },
        {
          id: 3,
          question: "What safety margin above break-even do most manufacturing companies maintain?",
          options: ["5-15%", "15-25%", "25-35%", "35-45%"],
          correctAnswer: 1,
          explanation: "The average manufacturing company maintains a 15-25% safety margin above break-even point."
        },
        {
          id: 4,
          question: "What percentage of organizations use rolling forecasts in addition to annual budgets?",
          options: ["62%", "72%", "82%", "92%"],
          correctAnswer: 2,
          explanation: "82% of organizations use rolling forecasts to supplement traditional annual budgets."
        },
        {
          id: 5,
          question: "What is the typical optimal contribution margin ratio range for most industries?",
          options: ["20-40%", "30-50%", "40-60%", "50-70%"],
          correctAnswer: 2,
          explanation: "Professional analysis shows optimal contribution margin ratios range from 40-60% for most industries."
        },
        {
          id: 6,
          question: "What percentage of major corporations use zero-based budgeting for discretionary spending?",
          options: ["20%", "30%", "40%", "50%"],
          correctAnswer: 1,
          explanation: "Approximately 30% of major corporations use zero-based budgeting for discretionary spending areas."
        },
        {
          id: 7,
          question: "How many perspectives are included in the Balanced Scorecard framework?",
          options: ["3 perspectives", "4 perspectives", "5 perspectives", "6 perspectives"],
          correctAnswer: 1,
          explanation: "The Balanced Scorecard includes four perspectives: Financial, Customer, Internal Processes, and Learning & Growth."
        },
        {
          id: 8,
          question: "What percentage of companies use automated KPI dashboards?",
          options: ["54%", "64%", "74%", "84%"],
          correctAnswer: 2,
          explanation: "74% of organizations use automated KPI dashboards for performance monitoring."
        },
        {
          id: 9,
          question: "What is the typical operating leverage ratio for high-tech companies?",
          options: ["2:1 to 4:1", "4:1 to 6:1", "6:1 to 8:1", "8:1 to 10:1"],
          correctAnswer: 1,
          explanation: "High-tech companies typically have operating leverage ratios of 4:1 to 6:1 due to high fixed R&D costs."
        },
        {
          id: 10,
          question: "How many KPIs do organizations typically track across departments?",
          options: ["5-15", "15-25", "25-35", "35-45"],
          correctAnswer: 1,
          explanation: "Organizations typically track 15-25 Key Performance Indicators across various departments."
        },
        {
          id: 11,
          question: "What materiality threshold is typically set for variance analysis?",
          options: ["1-5%", "5-10%", "10-15%", "15-20%"],
          correctAnswer: 1,
          explanation: "Materiality thresholds for variance analysis are typically set at 5-10% of budgeted amounts."
        },
        {
          id: 12,
          question: "How much higher profitability do companies with advanced cost management achieve?",
          options: ["5-10%", "8-14%", "12-18%", "15-22%"],
          correctAnswer: 2,
          explanation: "Companies using advanced cost management techniques achieve 12-18% higher profitability than those using traditional methods."
        },
        {
          id: 13,
          question: "Which capital budgeting method calculates present value of future cash flows?",
          options: ["Payback Period", "Internal Rate of Return", "Net Present Value", "Accounting Rate of Return"],
          correctAnswer: 2,
          explanation: "Net Present Value (NPV) calculates the present value of future cash flows minus initial investment."
        },
        {
          id: 14,
          question: "What type of costs are considered in relevant cost analysis?",
          options: ["All historical costs", "Only variable costs", "Only fixed costs", "Costs that differ between alternatives"],
          correctAnswer: 3,
          explanation: "Relevant cost analysis considers only costs and revenues that differ between decision alternatives."
        },
        {
          id: 15,
          question: "What is the primary purpose of Activity-Based Costing?",
          options: ["Reduce tax liability", "Improve cost accuracy", "Simplify accounting", "Increase reported profits"],
          correctAnswer: 1,
          explanation: "ABC's primary purpose is to improve cost accuracy by allocating overhead based on activities that drive costs."
        },
        {
          id: 16,
          question: "Which budgeting method requires justifying all expenses each period?",
          options: ["Incremental budgeting", "Zero-based budgeting", "Activity-based budgeting", "Flexible budgeting"],
          correctAnswer: 1,
          explanation: "Zero-based budgeting requires justifying all expenses for each new period, starting from zero."
        },
        {
          id: 17,
          question: "What does contribution margin equal?",
          options: ["Revenue minus all costs", "Revenue minus variable costs", "Revenue minus fixed costs", "Revenue minus product costs"],
          correctAnswer: 1,
          explanation: "Contribution margin equals revenue minus variable costs, representing amount available to cover fixed costs and profit."
        },
        {
          id: 18,
          question: "Which perspective in Balanced Scorecard measures employee skills and innovation?",
          options: ["Financial", "Customer", "Internal Processes", "Learning & Growth"],
          correctAnswer: 3,
          explanation: "The Learning & Growth perspective measures employee skills, training, innovation, and organizational capabilities."
        },
        {
          id: 19,
          question: "What type of analysis compares actual results to budgeted amounts?",
          options: ["Break-even analysis", "Variance analysis", "Trend analysis", "Ratio analysis"],
          correctAnswer: 1,
          explanation: "Variance analysis compares actual results to budgeted amounts to identify and explain differences."
        },
        {
          id: 20,
          question: "What capital budgeting method calculates the discount rate yielding zero NPV?",
          options: ["Payback Period", "Internal Rate of Return", "Net Present Value", "Profitability Index"],
          correctAnswer: 1,
          explanation: "Internal Rate of Return (IRR) calculates the discount rate at which Net Present Value equals zero."
        }
      ]
    },

    // MODULE 3: AUDITING AND ASSURANCE SERVICES
    {
      id: 3,
      title: "Professional Auditing Standards & Practices",
      content: `# Advanced Auditing and Assurance

Professional auditing requires comprehensive knowledge of auditing standards, risk assessment, and ethical requirements. This module covers Generally Accepted Auditing Standards (GAAS) and International Standards on Auditing (ISA).

## Audit Planning and Risk Assessment

**Audit Risk Model**: AR = IR × CR × DR
- **Inherent Risk (IR)**: Susceptibility to material misstatement
- **Control Risk (CR)**: Risk controls won't prevent/detect misstatement
- **Detection Risk (DR)**: Risk audit procedures won't detect misstatement

**Materiality Determination**: Professional judgment considering quantitative and qualitative factors. Typical materiality thresholds:
- **0.5-1%** of total revenue
- **1-2%** of total assets
- **5-10%** of net income

**Fraud Risk Assessment**: Required by SAS 99 (AU 240), focusing on:
- Incentives/pressures
- Opportunities
- Attitudes/rationalizations

## Internal Control Evaluation

**COSO Framework**: Five components of internal control:
1. **Control Environment**: Tone at the top
2. **Risk Assessment**: Identifying and analyzing risks
3. **Control Activities**: Policies and procedures
4. **Information & Communication**: Timely information flow
5. **Monitoring Activities**: Ongoing evaluations

**IT General Controls**: Controls over:
- **Access Security**: User access and authentication
- **Program Development & Change**: Software development lifecycle
- **Computer Operations**: Data center operations
- **Backup & Recovery**: Disaster recovery planning

Studies show that **organizations with strong internal controls experience 45% fewer financial restatements**.

## Audit Evidence and Procedures

**Types of Audit Evidence**:
- **Inspection**: Physical examination or document review
- **Observation**: Watching processes being performed
- **Inquiry**: Seeking information from knowledgeable persons
- **Confirmation**: Obtaining direct verification from third parties
- **Recalculation**: Checking mathematical accuracy
- **Reperformance**: Independently executing procedures
- **Analytical Procedures**: Evaluating financial information through analysis

**Sampling Techniques**:
- **Statistical Sampling**: Using probability theory
- **Non-statistical Sampling**: Using professional judgment
- **Attribute Sampling**: Testing controls
- **Variable Sampling**: Testing monetary amounts

Professional audit firms typically **test 30-50 transactions** per significant control or account area.

## Fraud Examination Techniques

**Forensic Accounting Procedures**:
- **Data Analytics**: Identifying anomalies and patterns
- **Beneficiary Analysis**: Tracing fund recipients
- **Lifestyle Analysis**: Comparing income to expenditures
- **Document Examination**: Detecting altered documents

**Common Fraud Schemes**:
- **Asset Misappropriation**: 86% of occupational fraud cases
- **Financial Statement Fraud**: 10% of cases, but largest median loss ($954,000)
- **Corruption**: 43% of cases, often combined with other schemes

According to ACFE reports, organizations lose **5% of annual revenues** to fraud, with median loss of $125,000 per case.

## Audit Reporting and Communication

**Audit Opinion Types**:
- **Unmodified/Unqualified**: Financial statements fairly presented
- **Qualified**: Except for specific matters
- **Adverse**: Financial statements not fairly presented
- **Disclaimer**: Insufficient evidence to form opinion

**Management Letter**: Communicating internal control deficiencies and recommendations.

**Subsequent Events**: Events occurring after balance sheet date but before audit report issuance.

**Going Concern Evaluation**: Assessing entity's ability to continue operating for reasonable period (typically 12 months).

## Professional Ethics and Independence

**AICPA Code of Professional Conduct**: Six principles:
1. Responsibilities
2. Public interest
3. Integrity
4. Objectivity and independence
5. Due care
6. Scope and nature of services

**Independence Requirements**:
- **Financial independence**: No direct/indirect financial interest
- **Family relationships**: Restrictions on immediate family
- **Employment relationships**: Cooling-off periods

**Quality Control Standards**: Firm-level policies for:
- Leadership responsibilities
- Ethical requirements
- Acceptance/continuance of clients
- Human resources
- Engagement performance
- Monitoring

Public company audits require **mandatory audit firm rotation** every 10 years for lead engagement partners, with **97% of audit committee members** supporting this requirement.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What percentage of annual revenues do organizations typically lose to fraud according to ACFE?",
          options: ["3%", "5%", "7%", "9%"],
          correctAnswer: 1,
          explanation: "According to ACFE reports, organizations lose approximately 5% of annual revenues to fraud."
        },
        {
          id: 2,
          question: "What is the median loss per fraud case according to ACFE data?",
          options: ["$75,000", "$125,000", "$200,000", "$300,000"],
          correctAnswer: 1,
          explanation: "The median loss per occupational fraud case is $125,000 according to ACFE reports."
        },
        {
          id: 3,
          question: "What percentage of fraud cases involve asset misappropriation?",
          options: ["68%", "76%", "86%", "92%"],
          correctAnswer: 2,
          explanation: "Asset misappropriation occurs in 86% of occupational fraud cases, making it the most common fraud type."
        },
        {
          id: 4,
          question: "How many components are in the COSO internal control framework?",
          options: ["3 components", "5 components", "7 components", "9 components"],
          correctAnswer: 1,
          explanation: "The COSO framework includes five components: Control Environment, Risk Assessment, Control Activities, Information & Communication, and Monitoring."
        },
        {
          id: 5,
          question: "What percentage fewer financial restatements do organizations with strong internal controls experience?",
          options: ["25%", "35%", "45%", "55%"],
          correctAnswer: 2,
          explanation: "Organizations with strong internal controls experience 45% fewer financial restatements."
        },
        {
          id: 6,
          question: "What is the typical materiality threshold based on total revenue?",
          options: ["0.1-0.5%", "0.5-1%", "1-2%", "2-3%"],
          correctAnswer: 1,
          explanation: "Typical materiality thresholds are 0.5-1% of total revenue for planning purposes."
        },
        {
          id: 7,
          question: "What percentage of audit committee members support mandatory audit partner rotation?",
          options: ["87%", "92%", "97%", "99%"],
          correctAnswer: 2,
          explanation: "97% of audit committee members support mandatory audit firm rotation for lead engagement partners."
        },
        {
          id: 8,
          question: "How many transactions are typically tested per significant control area?",
          options: ["10-20", "20-30", "30-50", "50-70"],
          correctAnswer: 2,
          explanation: "Professional audit firms typically test 30-50 transactions per significant control or account area."
        },
        {
          id: 9,
          question: "Which fraud type has the highest median loss according to ACFE?",
          options: ["Asset misappropriation", "Financial statement fraud", "Corruption", "Cyber fraud"],
          correctAnswer: 1,
          explanation: "Financial statement fraud has the highest median loss at $954,000 per case, despite being only 10% of cases."
        },
        {
          id: 10,
          question: "How many principles are in the AICPA Code of Professional Conduct?",
          options: ["4 principles", "6 principles", "8 principles", "10 principles"],
          correctAnswer: 1,
          explanation: "The AICPA Code of Professional Conduct includes six principles governing professional behavior."
        },
        {
          id: 11,
          question: "What SAS standard addresses fraud risk assessment?",
          options: ["SAS 99", "SAS 115", "SAS 122", "SAS 130"],
          correctAnswer: 0,
          explanation: "SAS 99 (AU 240) addresses the auditor's responsibility to consider fraud in a financial statement audit."
        },
        {
          id: 12,
          question: "What is the cooling-off period for employment relationships affecting independence?",
          options: ["6 months", "1 year", "2 years", "3 years"],
          correctAnswer: 1,
          explanation: "Typically a one-year cooling-off period is required for employment relationships affecting independence."
        },
        {
          id: 13,
          question: "What percentage of fraud cases involve corruption?",
          options: ["33%", "43%", "53%", "63%"],
          correctAnswer: 1,
          explanation: "Corruption occurs in 43% of occupational fraud cases, often combined with other fraud schemes."
        },
        {
          id: 14,
          question: "Which audit opinion indicates financial statements are fairly presented?",
          options: ["Qualified", "Adverse", "Unmodified", "Disclaimer"],
          correctAnswer: 2,
          explanation: "An unmodified (unqualified) opinion indicates financial statements are fairly presented in all material respects."
        },
        {
          id: 15,
          question: "What is the typical going concern evaluation period?",
          options: ["6 months", "12 months", "18 months", "24 months"],
          correctAnswer: 1,
          explanation: "Going concern evaluation typically assesses the entity's ability to continue operating for 12 months."
        },
        {
          id: 16,
          question: "Which sampling method uses probability theory?",
          options: ["Judgmental sampling", "Statistical sampling", "Haphazard sampling", "Block sampling"],
          correctAnswer: 1,
          explanation: "Statistical sampling uses probability theory to select samples and evaluate results."
        },
        {
          id: 17,
          question: "What type of audit evidence involves direct verification from third parties?",
          options: ["Inspection", "Observation", "Confirmation", "Inquiry"],
          correctAnswer: 2,
          explanation: "Confirmation involves obtaining direct verification from third parties, such as bank confirmations."
        },
        {
          id: 18,
          question: "What IT control category covers user access and authentication?",
          options: ["Program Development", "Access Security", "Computer Operations", "Backup & Recovery"],
          correctAnswer: 1,
          explanation: "Access Security controls cover user access, authentication, and authorization management."
        },
        {
          id: 19,
          question: "What audit risk component represents susceptibility to material misstatement?",
          options: ["Control Risk", "Detection Risk", "Inherent Risk", "Audit Risk"],
          correctAnswer: 2,
          explanation: "Inherent Risk represents the susceptibility of an assertion to material misstatement before considering controls."
        },
        {
          id: 20,
          question: "How often must lead engagement partners rotate for public company audits?",
          options: ["Every 5 years", "Every 7 years", "Every 10 years", "Every 12 years"],
          correctAnswer: 2,
          explanation: "Public company audits require mandatory rotation of lead engagement partners every 10 years."
        }
      ]
    },

    // MODULE 4: TAXATION AND COMPLIANCE
    {
      id: 4,
      title: "Advanced Taxation and Regulatory Compliance",
      content: `# Professional Tax Planning and Compliance

Professional taxation requires expertise in complex tax codes, planning strategies, and compliance requirements. This module covers advanced federal, state, and international tax concepts.

## Corporate Taxation

**Corporate Tax Rates**: Current federal corporate tax rate is **21%**, though effective rates vary based on deductions and credits. The average effective tax rate for S&P 500 companies is **approximately 18%**.

**Taxable Income Calculation**: Starting with financial accounting income and making adjustments for:
- Permanent differences (municipal bond interest)
- Temporary differences (depreciation methods)

**Net Operating Losses (NOLs)**: 
- **Carryback**: 2 years (temporary provision)
- **Carryforward**: Indefinitely (80% limitation applies)

**Tax Credits vs. Deductions**:
- **Credits**: Direct dollar-for-dollar reduction of tax liability
- **Deductions**: Reduce taxable income

## International Taxation

**Transfer Pricing**: Pricing transactions between related entities in different countries. Must follow arm's length principle. OECD guidelines require **contemporaneous documentation** for transactions exceeding €50 million.

**Controlled Foreign Corporations (CFCs)**: Subpart F income inclusion rules for U.S. shareholders.

**Global Intangible Low-Taxed Income (GILTI)**: Tax on foreign intangible income at **10.5% effective rate** (half of corporate rate).

**Foreign-Derived Intangible Income (FDII)**: Reduced tax rate (**13.125%**) for domestic corporations on export-related intangible income.

**Base Erosion and Anti-Abuse Tax (BEAT)**: Minimum tax on certain deductible payments to foreign affiliates.

## State and Local Taxation

**Nexus Standards**: Physical presence vs. economic nexus. After Wayfair decision, **45 states** have economic nexus laws for sales tax.

**Apportionment Formulas**: Typically use three-factor formula (sales, property, payroll) with sales factor receiving **double weight** in most states.

**Unitary Business Principle**: Treating affiliated companies as single business for tax purposes.

**Composite Returns**: Combined reporting for multi-state operations.

## Tax Planning Strategies

**Entity Selection**: Comparing tax implications of:
- **C Corporations**: Double taxation, 21% flat rate
- **S Corporations**: Pass-through, avoid double taxation
- **Partnerships**: Flexible allocations, pass-through
- **LLCs**: Flexibility in tax classification

**Accounting Method Planning**: 
- **Cash Method**: Smaller businesses (<$25 million average gross receipts)
- **Accrual Method**: Larger businesses, inventory requirements

**Timing Strategies**: Accelerating deductions, deferring income within legal boundaries.

**Research and Development Credit**: **20% credit** for qualified research expenses exceeding base amount.

## Compliance and Reporting

**Form 1120 (Corporate Return)**: Due date is **April 15** (March 15 for calendar-year corporations).

**Estimated Tax Payments**: Required if tax liability exceeds $500. Payments due in **four installments** (April, June, September, December).

**Financial Statement Tax Provisions**: ASC 740 requirements for:
- Current tax expense
- Deferred tax assets/liabilities
- Valuation allowances
- Uncertain tax positions

**Tax Audits and Controversy**: 
- **IRS Audit Rates**: 0.4% for corporations (higher for larger companies)
- **Statute of Limitations**: Generally 3 years from filing
- **Appeals Process**: Administrative and judicial options

## Specialized Tax Areas

**Consolidated Returns**: Affiliated group filing (80% ownership requirement).

**Tax-Exempt Organizations**: 501(c)(3) requirements and unrelated business income tax.

**Estate and Gift Taxation**: Lifetime exemption of **$12.92 million** (2023), 40% top rate.

**Excise Taxes**: Special taxes on specific goods/services (fuel, airline tickets, tobacco).

The tax compliance burden costs U.S. businesses **$223 billion annually** in direct costs, with corporations spending **approximately 175 hours** per year on federal tax compliance alone.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the current federal corporate tax rate?",
          options: ["18%", "21%", "25%", "28%"],
          correctAnswer: 1,
          explanation: "The current federal corporate tax rate is 21% following the Tax Cuts and Jobs Act of 2017."
        },
        {
          id: 2,
          question: "What is the average effective tax rate for S&P 500 companies?",
          options: ["15%", "18%", "21%", "24%"],
          correctAnswer: 1,
          explanation: "The average effective tax rate for S&P 500 companies is approximately 18%, lower than statutory rate due to deductions."
        },
        {
          id: 3,
          question: "How many states have economic nexus laws for sales tax after Wayfair?",
          options: ["35 states", "40 states", "45 states", "50 states"],
          correctAnswer: 2,
          explanation: "45 states have enacted economic nexus laws for sales tax following the Supreme Court's Wayfair decision."
        },
        {
          id: 4,
          question: "What percentage credit is available for qualified research expenses?",
          options: ["10%", "15%", "20%", "25%"],
          correctAnswer: 2,
          explanation: "The Research and Development Tax Credit provides a 20% credit for qualified research expenses exceeding base amount."
        },
        {
          id: 5,
          question: "What is the GILTI effective tax rate for U.S. shareholders?",
          options: ["5.25%", "10.5%", "13.125%", "15%"],
          correctAnswer: 1,
          explanation: "Global Intangible Low-Taxed Income (GILTI) is taxed at an effective rate of 10.5% (half of corporate rate)."
        },
        {
          id: 6,
          question: "What is the annual cost of tax compliance for U.S. businesses?",
          options: ["$150 billion", "$185 billion", "$223 billion", "$260 billion"],
          correctAnswer: 2,
          explanation: "The tax compliance burden costs U.S. businesses approximately $223 billion annually in direct costs."
        },
        {
          id: 7,
          question: "What is the lifetime estate and gift tax exemption for 2023?",
          options: ["$5.49 million", "$11.58 million", "$12.92 million", "$15.00 million"],
          correctAnswer: 2,
          explanation: "The lifetime estate and gift tax exemption for 2023 is $12.92 million per individual."
        },
        {
          id: 8,
          question: "What is the IRS audit rate for corporations?",
          options: ["0.2%", "0.4%", "0.8%", "1.2%"],
          correctAnswer: 1,
          explanation: "The overall IRS audit rate for corporations is approximately 0.4%, though higher for larger companies."
        },
        {
          id: 9,
          question: "How many estimated tax installments are required annually?",
          options: ["2 installments", "3 installments", "4 installments", "6 installments"],
          correctAnswer: 2,
          explanation: "Estimated tax payments are generally due in four installments: April, June, September, and December."
        },
        {
          id: 10,
          question: "What ownership percentage is required for consolidated returns?",
          options: ["51%", "67%", "80%", "90%"],
          correctAnswer: 2,
          explanation: "An 80% ownership requirement exists for filing consolidated tax returns by affiliated groups."
        },
        {
          id: 11,
          question: "What is the FDII reduced tax rate for export-related intangible income?",
          options: ["10.5%", "13.125%", "15%", "16.5%"],
          correctAnswer: 1,
          explanation: "Foreign-Derived Intangible Income (FDII) receives a reduced tax rate of 13.125%."
        },
        {
          id: 12,
          question: "How many hours do corporations spend annually on federal tax compliance?",
          options: ["125 hours", "150 hours", "175 hours", "200 hours"],
          correctAnswer: 2,
          explanation: "Corporations spend approximately 175 hours per year on federal tax compliance activities."
        },
        {
          id: 13,
          question: "What is the statute of limitations for tax assessments?",
          options: ["2 years", "3 years", "5 years", "7 years"],
          correctAnswer: 1,
          explanation: "The general statute of limitations for tax assessments is 3 years from the filing date."
        },
        {
          id: 14,
          question: "Which accounting method is available to businesses with <$25M gross receipts?",
          options: ["Accrual method only", "Cash method only", "Either cash or accrual method", "Hybrid method"],
          correctAnswer: 2,
          explanation: "Businesses with average gross receipts under $25 million can generally use either cash or accrual accounting method."
        },
        {
          id: 15,
          question: "What percentage of NOLs can be used to offset taxable income annually?",
          options: ["50%", "80%", "90%", "100%"],
          correctAnswer: 1,
          explanation: "Net Operating Losses are subject to an 80% limitation on offsetting taxable income in any given year."
        },
        {
          id: 16,
          question: "What is the due date for calendar-year corporate tax returns?",
          options: ["March 15", "April 15", "May 15", "June 15"],
          correctAnswer: 0,
          explanation: "Calendar-year corporate tax returns (Form 1120) are due March 15, one month before individual returns."
        },
        {
          id: 17,
          question: "What threshold triggers estimated tax payment requirements?",
          options: ["$100 tax liability", "$500 tax liability", "$1,000 tax liability", "$5,000 tax liability"],
          correctAnswer: 1,
          explanation: "Estimated tax payments are generally required if the tax liability exceeds $500."
        },
        {
          id: 18,
          question: "What is the top estate and gift tax rate?",
          options: ["35%", "40%", "45%", "50%"],
          correctAnswer: 1,
          explanation: "The top federal estate and gift tax rate is 40% for transfers exceeding the lifetime exemption."
        },
        {
          id: 19,
          question: "Which tax provision addresses deductible payments to foreign affiliates?",
          options: ["GILTI", "FDII", "BEAT", "Subpart F"],
          correctAnswer: 2,
          explanation: "Base Erosion and Anti-Abuse Tax (BEAT) imposes a minimum tax on certain deductible payments to foreign affiliates."
        },
        {
          id: 20,
          question: "What OECD threshold requires contemporaneous transfer pricing documentation?",
          options: ["€10 million", "€25 million", "€50 million", "€100 million"],
          correctAnswer: 2,
          explanation: "OECD guidelines require contemporaneous transfer pricing documentation for transactions exceeding €50 million."
        }
      ]
    },

    // MODULE 5: FINANCIAL ANALYSIS AND VALUATION
    {
      id: 5,
      title: "Advanced Financial Analysis & Business Valuation",
      content: `# Professional Financial Analysis

Advanced financial analysis involves interpreting financial statements, assessing business performance, and valuing companies using sophisticated techniques. This module covers professional analysis methods used by investment banks, consulting firms, and corporate finance departments.

## Financial Statement Analysis Framework

**DuPont Analysis**: Breaking down Return on Equity (ROE) into components:
ROE = Net Profit Margin × Asset Turnover × Equity Multiplier

**Common-Size Analysis**: Expressing all items as percentages of:
- **Income Statement**: Percentage of revenue
- **Balance Sheet**: Percentage of total assets
- **Industry benchmarks show optimal profit margins range from 8-12%** for most sectors

**Trend Analysis**: Comparing financial performance across multiple periods. Professional analysts typically review **3-5 years** of historical data.

**Comparative Analysis**: Benchmarking against industry peers and competitors.

## Ratio Analysis Categories

**Liquidity Ratios**:
- **Current Ratio**: Current assets ÷ Current liabilities (optimal: 1.5-3.0)
- **Quick Ratio**: (Current assets - Inventory) ÷ Current liabilities (optimal: 1.0-2.0)

**Activity/Efficiency Ratios**:
- **Inventory Turnover**: COGS ÷ Average inventory (industry average: 8-12 times)
- **Days Sales Outstanding**: (Accounts receivable ÷ Revenue) × 365 (optimal: 30-45 days)

**Profitability Ratios**:
- **Gross Margin**: Gross profit ÷ Revenue
- **Operating Margin**: Operating income ÷ Revenue
- **Net Profit Margin**: Net income ÷ Revenue
- **Return on Assets (ROA)**: Net income ÷ Total assets
- **Return on Equity (ROE)**: Net income ÷ Shareholders' equity

**Leverage/Solvency Ratios**:
- **Debt to Equity**: Total liabilities ÷ Shareholders' equity
- **Interest Coverage**: EBIT ÷ Interest expense (minimum: 3.0x)

**Market Value Ratios**:
- **Price/Earnings (P/E)**: Market price per share ÷ EPS
- **Price/Book**: Market price per share ÷ Book value per share

## Cash Flow Analysis

**Operating Cash Flow Quality**: Assessing sustainability and quality of cash flows. Companies with **OCF > Net Income** for 3+ consecutive years demonstrate strong earnings quality.

**Free Cash Flow Calculation**: 
FCF = Operating Cash Flow - Capital Expenditures
- **Positive FCF** indicates ability to fund growth, pay dividends, reduce debt
- **FCF Yield** = FCF ÷ Market capitalization (target: 4-8%)

**Cash Conversion Cycle**: 
CCC = DIO + DSO - DPO
- **Days Inventory Outstanding (DIO)**
- **Days Sales Outstanding (DSO)**
- **Days Payable Outstanding (DPO)**
Optimal CCC: 30-60 days (negative is even better)

## Business Valuation Methods

**Income Approach**: Discounted Cash Flow (DCF) analysis:
1. Forecast free cash flows (typically **5-10 years**)
2. Calculate terminal value (Gordon Growth Model or Exit Multiple)
3. Discount to present value using Weighted Average Cost of Capital (WACC)
4. **WACC typically ranges from 6-12%** depending on risk

**Market Approach**: 
- **Comparable Companies Analysis**: Multiples of similar public companies
- **Precedent Transactions Analysis**: Multiples from historical M&A deals
- **Common multiples**: EV/EBITDA, P/E, P/B, P/S

**Asset Approach**: 
- **Net Asset Value**: Assets minus liabilities
- **Liquidation Value**: Value in forced sale scenario

## Credit Analysis and Risk Assessment

**Credit Rating Framework**: 
- **Investment Grade**: BBB- and above (default risk: 0.1-2.5%)
- **Speculative Grade**: BB+ and below (default risk: 3-15%)
- **Default Rates**: Historical average **3.2%** for high-yield bonds

**Z-Score Model**: Edward Altman's bankruptcy prediction:
Z = 1.2A + 1.4B + 3.3C + 0.6D + 1.0E
- **Z > 2.99**: Safe zone
- **1.81 < Z < 2.99**: Gray zone
- **Z < 1.81**: Distress zone

**Debt Capacity Analysis**: Determining optimal capital structure considering:
- Tax shield benefits
- Financial distress costs
- Agency costs
- **Optimal debt ratios**: 30-50% of total capital for most industries

## Forecasting and Projections

**Financial Modeling**: Building integrated three-statement models linking:
- Income statement
- Balance sheet
- Cash flow statement

**Sensitivity Analysis**: Testing impact of variable changes on outcomes. Professional models typically include **3-5 scenario analyses**.

**Monte Carlo Simulation**: Using probability distributions for uncertain inputs.

Research shows that **companies with strong financial analysis capabilities achieve 15-25% higher valuation multiples** compared to industry averages. Professional valuation reports typically exceed **100 pages** with detailed supporting analysis.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the optimal current ratio range for most businesses?",
          options: ["0.5-1.0", "1.0-1.5", "1.5-3.0", "3.0-5.0"],
          correctAnswer: 2,
          explanation: "The optimal current ratio range for most businesses is 1.5-3.0, balancing liquidity and efficiency."
        },
        {
          id: 2,
          question: "What is the typical WACC range for most companies?",
          options: ["3-6%", "6-12%", "12-18%", "18-24%"],
          correctAnswer: 1,
          explanation: "Weighted Average Cost of Capital typically ranges from 6-12% depending on business risk and capital structure."
        },
        {
          id: 3,
          question: "How many years of historical data do professional analysts typically review?",
          options: ["1-2 years", "3-5 years", "5-7 years", "7-10 years"],
          correctAnswer: 1,
          explanation: "Professional financial analysts typically review 3-5 years of historical financial data for trend analysis."
        },
        {
          id: 4,
          question: "What is the optimal cash conversion cycle range?",
          options: ["0-15 days", "15-30 days", "30-60 days", "60-90 days"],
          correctAnswer: 2,
          explanation: "The optimal cash conversion cycle is typically 30-60 days, with negative cycles being even better."
        },
        {
          id: 5,
          question: "What is the historical default rate for high-yield bonds?",
          options: ["1.5%", "2.4%", "3.2%", "4.8%"],
          correctAnswer: 2,
          explanation: "The historical average default rate for high-yield (speculative grade) bonds is approximately 3.2%."
        },
        {
          id: 6,
          question: "What Z-Score indicates the distress zone in Altman's model?",
          options: ["Z < 1.00", "Z < 1.81", "Z < 2.50", "Z < 2.99"],
          correctAnswer: 1,
          explanation: "In Altman's Z-Score model, scores below 1.81 indicate the distress zone with high bankruptcy risk."
        },
        {
          id: 7,
          question: "What is the target Free Cash Flow Yield range?",
          options: ["1-3%", "2-5%", "4-8%", "8-12%"],
          correctAnswer: 2,
          explanation: "The target Free Cash Flow Yield (FCF/Market Cap) range is typically 4-8% for most companies."
        },
        {
          id: 8,
          question: "What optimal profit margin range do industry benchmarks show?",
          options: ["4-8%", "8-12%", "12-16%", "16-20%"],
          correctAnswer: 1,
          explanation: "Industry benchmarks show optimal profit margins typically range from 8-12% for most business sectors."
        },
        {
          id: 9,
          question: "How many scenario analyses do professional financial models typically include?",
          options: ["1-2 scenarios", "3-5 scenarios", "5-7 scenarios", "7-10 scenarios"],
          correctAnswer: 1,
          explanation: "Professional financial models typically include 3-5 scenario analyses to test variable impacts."
        },
        {
          id: 10,
          question: "What valuation premium do companies with strong financial analysis achieve?",
          options: ["5-15%", "10-20%", "15-25%", "20-30%"],
          correctAnswer: 2,
          explanation: "Companies with strong financial analysis capabilities achieve 15-25% higher valuation multiples."
        },
        {
          id: 11,
          question: "What is the typical forecast period for DCF analysis?",
          options: ["3-5 years", "5-10 years", "10-15 years", "15-20 years"],
          correctAnswer: 1,
          explanation: "Discounted Cash Flow analysis typically uses a 5-10 year explicit forecast period before terminal value."
        },
        {
          id: 12,
          question: "What minimum interest coverage ratio do lenders typically require?",
          options: ["1.5x", "2.0x", "2.5x", "3.0x"],
          correctAnswer: 3,
          explanation: "Lenders typically require a minimum interest coverage ratio (EBIT/Interest) of 3.0x for credit approval."
        },
        {
          id: 13,
          question: "What is the optimal quick ratio range?",
          options: ["0.5-1.0", "1.0-2.0", "2.0-3.0", "3.0-4.0"],
          correctAnswer: 1,
          explanation: "The optimal quick ratio (acid-test ratio) range is typically 1.0-2.0 for most businesses."
        },
        {
          id: 14,
          question: "What is the typical industry inventory turnover?",
          options: ["4-6 times", "6-8 times", "8-12 times", "12-15 times"],
          correctAnswer: 2,
          explanation: "Typical industry inventory turnover ranges from 8-12 times annually for most manufacturing companies."
        },
        {
          id: 15,
          question: "How many consecutive years of OCF > Net Income indicate strong earnings quality?",
          options: ["1+ years", "2+ years", "3+ years", "4+ years"],
          correctAnswer: 2,
          explanation: "Companies with Operating Cash Flow exceeding Net Income for 3+ consecutive years demonstrate strong earnings quality."
        },
        {
          id: 16,
          question: "What optimal debt ratio range do most industries maintain?",
          options: ["20-40%", "30-50%", "40-60%", "50-70%"],
          correctAnswer: 1,
          explanation: "Most industries maintain optimal debt ratios of 30-50% of total capital structure."
        },
        {
          id: 17,
          question: "What is the minimum credit rating for investment grade bonds?",
          options: ["BBB-", "BBB", "BBB+", "A-"],
          correctAnswer: 0,
          explanation: "BBB- is the minimum credit rating for investment grade bonds according to major rating agencies."
        },
        {
          id: 18,
          question: "What is the optimal days sales outstanding range?",
          options: ["15-30 days", "30-45 days", "45-60 days", "60-75 days"],
          correctAnswer: 1,
          explanation: "The optimal Days Sales Outstanding (collection period) range is typically 30-45 days."
        },
        {
          id: 19,
          question: "How many pages do professional valuation reports typically exceed?",
          options: ["50 pages", "75 pages", "100 pages", "150 pages"],
          correctAnswer: 2,
          explanation: "Professional business valuation reports typically exceed 100 pages with detailed analysis and support."
        },
        {
          id: 20,
          question: "What default risk range do investment grade bonds have?",
          options: ["0.1-2.5%", "2.5-5.0%", "5.0-7.5%", "7.5-10.0%"],
          correctAnswer: 0,
          explanation: "Investment grade bonds typically have default risk in the range of 0.1-2.5%."
        }
      ]
    },

    // MODULE 6: FORENSIC ACCOUNTING AND FRAUD EXAMINATION
    {
      id: 6,
      title: "Forensic Accounting and Fraud Investigation",
      content: `# Professional Forensic Accounting

Forensic accounting involves applying accounting skills to legal matters, including fraud investigation, litigation support, and dispute resolution. This module covers professional forensic techniques used in 94% of major fraud investigations.

## Fraud Triangle Theory

**Donald Cressey's Theory**: Three elements present in every fraud:
1. **Pressure/Incentive**: Financial or emotional pressure
2. **Opportunity**: Ability to commit and conceal fraud
3. **Rationalization**: Justifying fraudulent behavior

**Statistics on Fraud Perpetrators**:
- **Gender**: 72% male, 28% female
- **Position**: 42% executives, 36% managers, 22% employees
- **Education**: 58% college graduates, 32% some college
- **Tenure**: Median 5 years with organization before fraud begins

## Fraud Detection Techniques

**Data Analytics in Fraud Detection**:
- **Benford's Law Analysis**: Testing digit patterns in numerical data
- **Cluster Analysis**: Identifying unusual groupings
- **Ratio Analysis**: Detecting anomalous relationships
- **Trend Analysis**: Spotting deviations from historical patterns

**Digital Forensics**: 
- **Email Analysis**: Pattern recognition in communications
- **Network Analysis**: Tracking data flows and access
- **Metadata Examination**: File properties and timestamps
- **Deleted Data Recovery**: Retrieving erased information

**Interview Techniques**:
- **Cognitive Interviewing**: Enhancing witness recall
- **Reid Technique**: Structured interrogation approach
- **PEACE Model**: Planning, Engage, Account, Closure, Evaluate

## Financial Statement Fraud Schemes

**Revenue Recognition Fraud**: Most common financial statement fraud (38% of cases), including:
- **Premature Revenue Recognition**: Recording before earned
- **Fictitious Revenue**: Creating fake sales
- **Channel Stuffing**: Shipping excess product to distributors

**Asset Overstatement**: Inflating asset values (22% of cases):
- **Inventory Manipulation**: Overstating quantities or values
- **Property Overvaluation**: Inflating fixed asset values
- **Capitalizing Expenses**: Treating expenses as assets

**Liability/Expense Understatement**: Hiding obligations or expenses (18% of cases)

**Disclosure Fraud**: Incomplete or misleading footnotes (12% of cases)

## Investigation Procedures

**Evidence Collection Standards**: Maintaining chain of custody and proper documentation.

**Working Papers**: Professional forensic investigations typically generate **200-500 pages** of documentation per case.

**Expert Witness Preparation**: 
- **Report Writing**: Clear, concise, objective findings
- **Testimony Preparation**: Anticipating cross-examination
- **Visual Aids**: Charts, graphs, timelines for jury comprehension

**Quantification of Damages**: Methods include:
- **Before-and-After Method**: Comparing pre- and post-event performance
- **Yardstick Method**: Using comparable companies/industries
- **Sales Projection Method**: Estimating lost sales
- **Market Share Method**: Analyzing lost market position

## Legal and Regulatory Framework

**Sarbanes-Oxley Act (2002)**: 
- **Section 302**: CEO/CFO certification of financial statements
- **Section 404**: Internal control assessment and reporting
- **Whistleblower Protections**: Anti-retaliation provisions

**Foreign Corrupt Practices Act (FCPA)**: Prohibits bribery of foreign officials. Penalties include:
- **Criminal fines**: Up to $2 million per violation (companies)
- **Individual penalties**: Up to $250,000 and 5 years imprisonment

**False Claims Act**: Allows whistleblowers to file lawsuits on government's behalf (qui tam actions). Recoveries average **$2 billion annually**.

**Money Laundering Regulations**: Bank Secrecy Act requirements for:
- **Suspicious Activity Reports (SARs)**
- **Currency Transaction Reports (CTRs)**
- **Customer Due Diligence (CDD)**

## Fraud Prevention Programs

**Internal Control Framework**: COSO-based controls reducing fraud risk by **50-70%**.

**Fraud Risk Assessment**: Regular evaluation of fraud risks across organization.

**Whistleblower Hotlines**: Organizations with hotlines detect fraud **50% faster** and experience **40% lower losses**.

**Tone at the Top**: Ethical culture established by senior management. Companies with strong ethical cultures experience **66% fewer fraud incidents**.

**Continuous Monitoring**: Automated systems detecting anomalies in real-time.

The median duration of fraud schemes before detection is **14 months**, with organizations typically losing **$8,300 per month** during undetected fraud periods. Forensic accounting services have grown into a **$4 billion industry**, with demand increasing **15-20% annually**.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What percentage of major fraud investigations involve forensic accountants?",
          options: ["84%", "89%", "94%", "98%"],
          correctAnswer: 2,
          explanation: "94% of major fraud investigations involve forensic accountants according to professional surveys."
        },
        {
          id: 2,
          question: "What is the median duration of fraud schemes before detection?",
          options: ["8 months", "12 months", "14 months", "18 months"],
          correctAnswer: 2,
          explanation: "The median duration of fraud schemes before detection is 14 months according to ACFE reports."
        },
        {
          id: 3,
          question: "What percentage of fraud perpetrators are male?",
          options: ["62%", "68%", "72%", "78%"],
          correctAnswer: 2,
          explanation: "72% of fraud perpetrators are male, while 28% are female according to statistical analysis."
        },
        {
          id: 4,
          question: "How much do organizations typically lose per month during undetected fraud?",
          options: ["$3,500", "$5,800", "$8,300", "$11,200"],
          correctAnswer: 2,
          explanation: "Organizations typically lose $8,300 per month during periods of undetected fraud."
        },
        {
          id: 5,
          question: "What is the size of the forensic accounting services industry?",
          options: ["$2 billion", "$3 billion", "$4 billion", "$5 billion"],
          correctAnswer: 2,
          explanation: "Forensic accounting services have grown into a $4 billion industry with increasing demand."
        },
        {
          id: 6,
          question: "What percentage of fraud cases involve revenue recognition schemes?",
          options: ["28%", "38%", "48%", "58%"],
          correctAnswer: 1,
          explanation: "Revenue recognition fraud constitutes 38% of financial statement fraud cases."
        },
        {
          id: 7,
          question: "How many pages of documentation do forensic investigations typically generate?",
          options: ["100-200 pages", "200-500 pages", "500-800 pages", "800-1200 pages"],
          correctAnswer: 1,
          explanation: "Professional forensic investigations typically generate 200-500 pages of documentation per case."
        },
        {
          id: 8,
          question: "What annual growth rate is the forensic accounting industry experiencing?",
          options: ["5-10%", "10-15%", "15-20%", "20-25%"],
          correctAnswer: 2,
          explanation: "Demand for forensic accounting services is increasing 15-20% annually."
        },
        {
          id: 9,
          question: "What percentage of fraud perpetrators are executives?",
          options: ["32%", "42%", "52%", "62%"],
          correctAnswer: 1,
          explanation: "42% of fraud perpetrators hold executive positions within their organizations."
        },
        {
          id: 10,
          question: "How much faster do organizations with whistleblower hotlines detect fraud?",
          options: ["30% faster", "40% faster", "50% faster", "60% faster"],
          correctAnswer: 2,
          explanation: "Organizations with whistleblower hotlines detect fraud 50% faster than those without."
        },
        {
          id: 11,
          question: "What is the median tenure before fraud begins?",
          options: ["3 years", "5 years", "7 years", "9 years"],
          correctAnswer: 1,
          explanation: "The median tenure with an organization before fraud begins is 5 years."
        },
        {
          id: 12,
          question: "What percentage of fraud perpetrators are college graduates?",
          options: ["48%", "58%", "68%", "78%"],
          correctAnswer: 1,
          explanation: "58% of fraud perpetrators are college graduates, indicating education doesn't prevent fraud."
        },
        {
          id: 13,
          question: "How much do companies with strong ethical cultures reduce fraud incidents?",
          options: ["50%", "58%", "66%", "74%"],
          correctAnswer: 2,
          explanation: "Companies with strong ethical cultures experience 66% fewer fraud incidents."
        },
        {
          id: 14,
          question: "What percentage of financial statement fraud involves asset overstatement?",
          options: ["18%", "22%", "26%", "30%"],
          correctAnswer: 1,
          explanation: "Asset overstatement constitutes 22% of financial statement fraud cases."
        },
        {
          id: 15,
          question: "What annual recovery average do False Claims Act cases achieve?",
          options: ["$500 million", "$1 billion", "$2 billion", "$3 billion"],
          correctAnswer: 2,
          explanation: "False Claims Act (qui tam) cases recover approximately $2 billion annually for the government."
        },
        {
          id: 16,
          question: "What is the maximum individual penalty under FCPA?",
          options: ["$100,000 and 3 years", "$250,000 and 5 years", "$500,000 and 10 years", "$1 million and 15 years"],
          correctAnswer: 1,
          explanation: "FCPA violations can result in individual penalties up to $250,000 and 5 years imprisonment."
        },
        {
          id: 17,
          question: "How much do internal controls reduce fraud risk?",
          options: ["30-50%", "40-60%", "50-70%", "60-80%"],
          correctAnswer: 2,
          explanation: "Effective internal controls based on COSO framework reduce fraud risk by 50-70%."
        },
        {
          id: 18,
          question: "What percentage of losses do organizations with hotlines reduce?",
          options: ["30%", "40%", "50%", "60%"],
          correctAnswer: 1,
          explanation: "Organizations with whistleblower hotlines experience 40% lower fraud losses."
        },
        {
          id: 19,
          question: "What is the maximum corporate fine per FCPA violation?",
          options: ["$1 million", "$2 million", "$5 million", "$10 million"],
          correctAnswer: 1,
          explanation: "Corporations can face fines up to $2 million per violation under the Foreign Corrupt Practices Act."
        },
        {
          id: 20,
          question: "What percentage of fraud cases involve disclosure fraud?",
          options: ["8%", "12%", "16%", "20%"],
          correctAnswer: 1,
          explanation: "Disclosure fraud (incomplete/misleading footnotes) constitutes 12% of financial statement fraud cases."
        }
      ]
    },

    // MODULE 7: STRATEGIC FINANCIAL MANAGEMENT
    {
      id: 7,
      title: "Strategic Financial Management & Corporate Finance",
      content: `# Strategic Corporate Finance

Strategic financial management involves aligning financial decisions with corporate strategy to maximize shareholder value. This module covers advanced corporate finance concepts used by CFOs and financial executives in 96% of Fortune 500 companies.

## Capital Structure Optimization

**Modigliani-Miller Theorem**: In perfect markets, capital structure doesn't affect firm value. Real-world considerations include:
- **Tax Shield**: Interest deductibility (21% corporate tax rate benefit)
- **Financial Distress Costs**: Direct and indirect bankruptcy costs
- **Agency Costs**: Conflicts between stakeholders
- **Information Asymmetry**: Management having better information than investors

**Optimal Capital Structure**: Balancing costs and benefits. Research shows optimal debt ratios typically range from **30-50%** of total capital.

**Cost of Capital Components**:
- **Cost of Debt**: After-tax interest rate (typically 3-6%)
- **Cost of Equity**: CAPM or DDM approaches (typically 8-12%)
- **Weighted Average Cost of Capital (WACC)**: Blended cost (typically 6-10%)

## Dividend Policy and Share Repurchases

**Dividend Theories**:
- **Dividend Irrelevance Theory** (Miller & Modigliani): In perfect markets, dividends don't affect firm value
- **Bird-in-Hand Theory**: Investors prefer certain dividends to uncertain capital gains
- **Tax Preference Theory**: Investors prefer capital gains due to lower tax rates

**Dividend Policy in Practice**:
- **Mature Companies**: Typically pay **40-60%** of earnings as dividends
- **Growth Companies**: Lower or no dividends, reinvesting earnings
- **Dividend Aristocrats**: S&P 500 companies with **25+ years** of consecutive dividend increases

**Share Repurchase Methods**:
- **Open Market Purchases**: Most common method (85% of repurchases)
- **Tender Offers**: Fixed price or Dutch auction
- **Accelerated Share Repurchases (ASRs)**: Immediate repurchase from investment bank

## Mergers and Acquisitions

**M&A Motivations**:
- **Synergy Creation**: Operating and financial synergies
- **Market Power**: Increased pricing power
- **Diversification**: Risk reduction
- **Tax Considerations**: Utilizing NOLs or tax attributes

**Valuation Methods for M&A**:
- **Discounted Cash Flow (DCF)**: Primary valuation method
- **Comparable Companies Analysis**: Market multiples approach
- **Precedent Transactions Analysis**: Historical deal multiples
- **LBO Analysis**: Minimum price seller would accept

**Deal Structures**:
- **Stock Transactions**: Tax-deferred, but dilutive
- **Cash Transactions**: Immediate taxation for sellers
- **Earnouts**: Contingent payments based on performance

Studies show that **70-90% of M&A deals fail to achieve expected synergies**, with average post-merger performance lagging peers by 5-10%.

## Risk Management and Derivatives

**Financial Risk Types**:
- **Market Risk**: Interest rate, currency, commodity price risks
- **Credit Risk**: Counterparty default risk
- **Operational Risk**: Internal process failures
- **Liquidity Risk**: Inability to meet obligations

**Derivative Instruments**:
- **Forwards**: Customized contracts (OTC)
- **Futures**: Standardized exchange-traded contracts
- **Options**: Right but not obligation to buy/sell
- **Swaps**: Exchange of cash flows (interest rate, currency)

**Hedge Accounting**: ASC 815 requirements for qualifying hedges:
- **Fair Value Hedges**: Hedging recognized assets/liabilities
- **Cash Flow Hedges**: Hedging forecasted transactions
- **Net Investment Hedges**: Hedging foreign operations

**Value at Risk (VaR)**: Statistical measure of potential loss. Banks typically calculate **99% confidence level over 10-day horizon**.

## Working Capital Management

**Cash Conversion Cycle Optimization**: 
CCC = DIO + DSO - DPO
Target: **30-60 days** (negative CCC is optimal)

**Inventory Management**:
- **Economic Order Quantity (EOQ)**: Optimal order quantity
- **Just-in-Time (JIT)**: Minimizing inventory levels
- **Safety Stock**: Buffer for demand uncertainty

**Accounts Receivable Management**:
- **Credit Policy**: Terms, standards, collection procedures
- **Factoring**: Selling receivables to third parties
- **Aging Analysis**: Monitoring overdue accounts

**Accounts Payable Management**:
- **Payment Terms Optimization**: Balancing early payment discounts vs. cash flow
- **Supply Chain Financing**: Collaborative financing solutions

Companies with optimized working capital management achieve **15-25% higher returns** than industry averages and maintain **20-30% lower financing costs**.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What percentage of Fortune 500 companies use advanced strategic financial management techniques?",
          options: ["86%", "91%", "96%", "99%"],
          correctAnswer: 2,
          explanation: "96% of Fortune 500 companies employ advanced strategic financial management techniques in their operations."
        },
        {
          id: 2,
          question: "What is the typical optimal debt ratio range for most companies?",
          options: ["20-40%", "30-50%", "40-60%", "50-70%"],
          correctAnswer: 1,
          explanation: "Research shows optimal debt ratios typically range from 30-50% of total capital for most companies."
        },
        {
          id: 3,
          question: "What percentage of M&A deals fail to achieve expected synergies?",
          options: ["50-70%", "60-80%", "70-90%", "80-95%"],
          correctAnswer: 2,
          explanation: "Studies show that 70-90% of M&A deals fail to achieve their expected synergies and strategic objectives."
        },
        {
          id: 4,
          question: "What dividend payout ratio do mature companies typically maintain?",
          options: ["20-40%", "30-50%", "40-60%", "50-70%"],
          correctAnswer: 2,
          explanation: "Mature companies typically pay 40-60% of their earnings as dividends to shareholders."
        },
        {
          id: 5,
          question: "How many years define a Dividend Aristocrat?",
          options: ["15+ years", "20+ years", "25+ years", "30+ years"],
          correctAnswer: 2,
          explanation: "Dividend Aristocrats are S&P 500 companies with 25+ years of consecutive dividend increases."
        },
        {
          id: 6,
          question: "What confidence level do banks typically use for Value at Risk calculations?",
          options: ["95%", "97.5%", "99%", "99.5%"],
          correctAnswer: 2,
          explanation: "Banks typically calculate Value at Risk (VaR) at the 99% confidence level over a specified time horizon."
        },
        {
          id: 7,
          question: "What percentage higher returns do companies with optimized working capital achieve?",
          options: ["10-20%", "15-25%", "20-30%", "25-35%"],
          correctAnswer: 1,
          explanation: "Companies with optimized working capital management achieve 15-25% higher returns than industry averages."
        },
        {
          id: 8,
          question: "What is the typical WACC range for most corporations?",
          options: ["4-8%", "6-10%", "8-12%", "10-14%"],
          correctAnswer: 1,
          explanation: "Weighted Average Cost of Capital typically ranges from 6-10% for most corporations."
        },
        {
          id: 9,
          question: "What percentage of share repurchases use open market purchases?",
          options: ["75%", "80%", "85%", "90%"],
          correctAnswer: 2,
          explanation: "Open market purchases represent approximately 85% of all share repurchase transactions."
        },
        {
          id: 10,
          question: "How much lower financing costs do companies with optimized working capital maintain?",
          options: ["10-20%", "15-25%", "20-30%", "25-35%"],
          correctAnswer: 2,
          explanation: "Companies with optimized working capital management maintain 20-30% lower financing costs."
        },
        {
          id: 11,
          question: "What corporate tax rate provides the interest tax shield benefit?",
          options: ["18%", "21%", "25%", "28%"],
          correctAnswer: 1,
          explanation: "The 21% corporate tax rate provides the interest tax shield benefit for debt financing."
        },
        {
          id: 12,
          question: "What is the typical cost of equity range?",
          options: ["6-9%", "8-12%", "10-14%", "12-16%"],
          correctAnswer: 1,
          explanation: "The cost of equity typically ranges from 8-12% for most publicly traded companies."
        },
        {
          id: 13,
          question: "What is the target cash conversion cycle range?",
          options: ["15-30 days", "30-60 days", "45-75 days", "60-90 days"],
          correctAnswer: 1,
          explanation: "The target cash conversion cycle is typically 30-60 days, with negative cycles being optimal."
        },
        {
          id: 14,
          question: "What percentage post-merger performance lag do acquirers typically experience?",
          options: ["3-7%", "5-10%", "8-12%", "10-15%"],
          correctAnswer: 1,
          explanation: "Acquiring companies typically underperform peers by 5-10% following M&A transactions."
        },
        {
          id: 15,
          question: "What hedging type addresses forecasted transactions?",
          options: ["Fair Value Hedge", "Cash Flow Hedge", "Net Investment Hedge", "Macro Hedge"],
          correctAnswer: 1,
          explanation: "Cash flow hedges address the risk of forecasted transactions under hedge accounting rules."
        },
        {
          id: 16,
          question: "What is the typical cost of debt range for investment grade companies?",
          options: ["2-4%", "3-6%", "5-8%", "7-10%"],
          correctAnswer: 1,
          explanation: "Investment grade companies typically have after-tax cost of debt in the 3-6% range."
        },
        {
          id: 17,
          question: "Which theory suggests dividends don't affect firm value in perfect markets?",
          options: ["Bird-in-Hand Theory", "Dividend Irrelevance Theory", "Tax Preference Theory", "Signaling Theory"],
          correctAnswer: 1,
          explanation: "Miller & Modigliani's Dividend Irrelevance Theory states dividends don't affect firm value in perfect markets."
        },
        {
          id: 18,
          question: "What ASC covers hedge accounting requirements?",
          options: ["ASC 606", "ASC 740", "ASC 815", "ASC 842"],
          correctAnswer: 2,
          explanation: "ASC 815 covers derivatives and hedging activities, including hedge accounting requirements."
        },
        {
          id: 19,
          question: "What VaR time horizon do banks typically use?",
          options: ["1-day", "5-day", "10-day", "30-day"],
          correctAnswer: 2,
          explanation: "Banks typically calculate Value at Risk over a 10-day time horizon for regulatory purposes."
        },
        {
          id: 20,
          question: "Which repurchase method involves immediate purchase from investment banks?",
          options: ["Open Market Purchases", "Tender Offers", "Accelerated Share Repurchases", "Private Placements"],
          correctAnswer: 2,
          explanation: "Accelerated Share Repurchases (ASRs) involve immediate repurchase from investment banks."
        }
      ]
    },

    // MODULE 8: PROFESSIONAL ETHICS AND GOVERNANCE
    {
      id: 8,
      title: "Professional Ethics, Governance & Leadership",
      content: `# Accounting Ethics and Corporate Governance

Professional ethics and governance are fundamental to maintaining public trust in financial reporting. This module covers ethical frameworks, governance structures, and leadership responsibilities essential for accounting professionals.

## Ethical Frameworks and Principles

**AICPA Code of Professional Conduct**: Six principles governing CPAs:
1. **Responsibilities**: Exercise sensitive professional/moral judgments
2. **Public Interest**: Serve public interest, honor public trust
3. **Integrity**: Perform all professional responsibilities with integrity
4. **Objectivity & Independence**: Maintain objectivity and independence
5. **Due Care**: Exercise due professional care
6. **Scope & Nature of Services**: Determine appropriateness of services

**Threats to Independence** (identified by AICPA):
- **Self-interest threat**: Financial interest in client
- **Self-review threat**: Reviewing own work
- **Advocacy threat**: Promoting client position
- **Familiarity threat**: Close relationship with client
- **Intimidation threat**: Being threatened by client

**Safeguards**: Procedures eliminating or reducing threats to acceptable levels.

## Corporate Governance Structures

**Board of Directors Responsibilities**:
- **Fiduciary Duty**: Duty of care and loyalty
- **Oversight Functions**: Strategy, risk, compliance, performance
- **Committee Structure**: Audit, Compensation, Nominating/Governance

**Audit Committee Requirements** (NYSE/NASDAQ):
- **Independence**: All members independent
- **Financial Literacy**: All members financially literate
- **Financial Expert**: At least one audit committee financial expert
- **Meetings**: Minimum **4 meetings per year**

**Compensation Committee**: Sets executive compensation, increasingly using **performance-based metrics** (60-80% of total compensation).

**Governance Best Practices**:
- **Board Diversity**: Gender, ethnic, skills diversity
- **Director Tenure**: Average **8-12 years** tenure limits
- **Board Evaluation**: Annual performance assessments
- **Succession Planning**: CEO and senior management succession

## Regulatory Framework

**Sarbanes-Oxley Act (2002) Key Provisions**:
- **Section 302**: CEO/CFO certification of financial statements
- **Section 404**: Management assessment of internal controls
- **Section 406**: Code of ethics for senior financial officers
- **PCAOB Establishment**: Public Company Accounting Oversight Board

**Dodd-Frank Act (2010) Provisions**:
- **Whistleblower Incentives**: 10-30% of monetary sanctions
- **Say-on-Pay**: Shareholder votes on executive compensation
- **Clawback Provisions**: Recovery of incentive compensation

**SEC Regulations**:
- **Regulation FD**: Fair disclosure requirements
- **Regulation G**: Non-GAAP financial measures
- **Proxy Rules**: Shareholder meeting requirements

## Ethical Decision-Making Models

**AAA Model** (American Accounting Association):
1. Determine facts
2. Identify ethical issues
3. Identify principles/rules
4. Identify alternatives
5. Compare alternatives to principles
6. Consider consequences
7. Make decision

**Kidder's Ethical Checkpoints**:
1. Recognize there's a moral issue
2. Determine the actor
3. Gather relevant facts
4. Test for right vs. wrong issues
5. Test for right vs. right paradigms
6. Apply resolution principles
7. Investigate "trilemma" options
8. Make decision

**Rest's Four-Component Model**:
1. Moral Sensitivity
2. Moral Judgment
3. Moral Motivation
4. Moral Character

## Professional Responsibilities

**Due Professional Care**: Level of care that would be exercised by prudent professional in similar circumstances.

**Confidentiality**: Protecting client information, with exceptions for:
- **Legal Requirements**: Subpoenas, court orders
- **Ethical Requirements**: Professional standards violations
- **Peer Review**: Quality control reviews

**Professional Skepticism**: Questioning mind and critical assessment of audit evidence. Required by auditing standards.

**Quality Control**: Firm-level systems ensuring compliance with professional standards. Required elements:
1. Leadership responsibilities
2. Ethical requirements
3. Acceptance/continuance of clients
4. Human resources
5. Engagement performance
6. Monitoring

## Emerging Ethical Issues

**Technology Ethics**: AI, blockchain, data privacy considerations.

**Environmental, Social, and Governance (ESG)**: Increasing focus on sustainability reporting.

**Cybersecurity Ethics**: Protection of financial and personal data.

**Global Ethical Standards**: Convergence of international ethical requirements.

Surveys indicate that **95% of accounting professionals** encounter ethical dilemmas during their careers, with **78% reporting increased ethical complexity** in recent years. Companies with strong governance practices experience **30-40% lower cost of capital** and **20-30% higher valuations** compared to peers.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What percentage of accounting professionals encounter ethical dilemmas during their careers?",
          options: ["85%", "90%", "95%", "98%"],
          correctAnswer: 2,
          explanation: "Surveys indicate that 95% of accounting professionals encounter ethical dilemmas during their careers."
        },
        {
          id: 2,
          question: "How many principles are in the AICPA Code of Professional Conduct?",
          options: ["4 principles", "6 principles", "8 principles", "10 principles"],
          correctAnswer: 1,
          explanation: "The AICPA Code of Professional Conduct includes six fundamental principles governing CPA behavior."
        },
        {
          id: 3,
          question: "What is the average director tenure limit recommendation?",
          options: ["6-10 years", "8-12 years", "10-14 years", "12-16 years"],
          correctAnswer: 1,
          explanation: "Governance best practices recommend average director tenure limits of 8-12 years."
        },
        {
          id: 4,
          question: "What percentage lower cost of capital do companies with strong governance experience?",
          options: ["20-30%", "25-35%", "30-40%", "35-45%"],
          correctAnswer: 2,
          explanation: "Companies with strong governance practices experience 30-40% lower cost of capital."
        },
        {
          id: 5,
          question: "How many audit committee meetings are required annually by exchanges?",
          options: ["3 meetings", "4 meetings", "5 meetings", "6 meetings"],
          correctAnswer: 1,
          explanation: "NYSE and NASDAQ require audit committees to meet at least four times per year."
        },
        {
          id: 6,
          question: "What percentage of accounting professionals report increased ethical complexity?",
          options: ["68%", "73%", "78%", "83%"],
          correctAnswer: 2,
          explanation: "78% of accounting professionals report increased ethical complexity in recent years."
        },
        {
          id: 7,
          question: "What whistleblower incentive percentage does Dodd-Frank provide?",
          options: ["5-20%", "10-30%", "15-35%", "20-40%"],
          correctAnswer: 1,
          explanation: "Dodd-Frank provides whistleblower incentives of 10-30% of monetary sanctions collected."
        },
        {
          id: 8,
          question: "What percentage higher valuations do companies with strong governance achieve?",
          options: ["15-25%", "20-30%", "25-35%", "30-40%"],
          correctAnswer: 1,
          explanation: "Companies with strong governance practices achieve 20-30% higher valuations than peers."
        },
        {
          id: 9,
          question: "Which SOX section requires CEO/CFO certification of financial statements?",
          options: ["Section 302", "Section 404", "Section 406", "Section 409"],
          correctAnswer: 0,
          explanation: "Sarbanes-Oxley Section 302 requires CEO/CFO certification of financial statements."
        },
        {
          id: 10,
          question: "What percentage of executive compensation is performance-based in best practice companies?",
          options: ["40-60%", "50-70%", "60-80%", "70-90%"],
          correctAnswer: 2,
          explanation: "Best practice companies use performance-based metrics for 60-80% of executive compensation."
        },
        {
          id: 11,
          question: "How many threats to independence does AICPA identify?",
          options: ["3 threats", "5 threats", "7 threats", "9 threats"],
          correctAnswer: 1,
          explanation: "AICPA identifies five threats to independence: self-interest, self-review, advocacy, familiarity, intimidation."
        },
        {
          id: 12,
          question: "Which SOX section addresses internal control assessments?",
          options: ["Section 302", "Section 404", "Section 406", "Section 409"],
          correctAnswer: 1,
          explanation: "Sarbanes-Oxley Section 404 requires management assessment of internal controls over financial reporting."
        },
        {
          id: 13,
          question: "How many components are in Rest's ethical decision-making model?",
          options: ["3 components", "4 components", "5 components", "6 components"],
          correctAnswer: 1,
          explanation: "Rest's Four-Component Model includes: Moral Sensitivity, Judgment, Motivation, and Character."
        },
        {
          id: 14,
          question: "Which regulation addresses fair disclosure requirements?",
          options: ["Regulation FD", "Regulation G", "Regulation S-K", "Regulation S-X"],
          correctAnswer: 0,
          explanation: "SEC Regulation FD (Fair Disclosure) requires simultaneous disclosure to all investors."
        },
        {
          id: 15,
          question: "What is the minimum number of audit committee financial experts required?",
          options: ["None required", "One", "Two", "Three"],
          correctAnswer: 1,
          explanation: "Audit committees must include at least one audit committee financial expert."
        },
        {
          id: 16,
          question: "How many steps are in the AAA ethical decision-making model?",
          options: ["5 steps", "7 steps", "9 steps", "11 steps"],
          correctAnswer: 1,
          explanation: "The AAA (American Accounting Association) ethical decision-making model includes seven steps."
        },
        {
          id: 17,
          question: "Which SOX section requires codes of ethics for senior financial officers?",
          options: ["Section 302", "Section 404", "Section 406", "Section 409"],
          correctAnswer: 2,
          explanation: "Sarbanes-Oxley Section 406 requires codes of ethics for senior financial officers."
        },
        {
          id: 18,
          question: "What are procedures eliminating threats to independence called?",
          options: ["Controls", "Safeguards", "Mitigations", "Remediations"],
          correctAnswer: 1,
          explanation: "Safeguards are procedures that eliminate or reduce threats to independence to acceptable levels."
        },
        {
          id: 19,
          question: "Which regulation addresses non-GAAP financial measures?",
          options: ["Regulation FD", "Regulation G", "Regulation S-K", "Regulation S-X"],
          correctAnswer: 1,
          explanation: "SEC Regulation G governs the use of non-GAAP financial measures in public disclosures."
        },
        {
          id: 20,
          question: "How many quality control elements are required for accounting firms?",
          options: ["4 elements", "5 elements", "6 elements", "7 elements"],
          correctAnswer: 2,
          explanation: "Accounting firms must maintain six quality control elements: leadership, ethics, acceptance, HR, engagement, monitoring."
        }
      ]
    }
  ],

  // FINAL EXAM - 40 COMPREHENSIVE QUESTIONS
  finalExam: [
    // Questions from Module 1
    {
      id: 1,
      moduleId: 1,
      question: "What percentage of Fortune 500 companies use derivatives for risk management?",
      options: ["75%", "80%", "85%", "90%"],
      correctAnswer: 2,
      explanation: "85% of Fortune 500 companies use derivatives for risk management according to FASB data."
    },
    {
      id: 2,
      moduleId: 1,
      question: "How many levels are in the fair value measurement hierarchy?",
      options: ["2", "3", "4", "5"],
      correctAnswer: 1,
      explanation: "ASC 820 establishes a three-level fair value hierarchy for measurement inputs."
    },
    {
      id: 3,
      moduleId: 1,
      question: "What was the approximate increase in liabilities from ASC 842 adoption?",
      options: ["$1 trillion", "$2 trillion", "$3 trillion", "$4 trillion"],
      correctAnswer: 2,
      explanation: "ASC 842 increased reported liabilities by approximately $3 trillion across U.S. public companies."
    },
    {
      id: 4,
      moduleId: 1,
      question: "What ownership percentage typically indicates significant influence?",
      options: ["10-20%", "20-50%", "51-75%", "Over 75%"],
      correctAnswer: 1,
      explanation: "20-50% ownership typically indicates significant influence requiring equity method accounting."
    },

    // Questions from Module 2
    {
      id: 5,
      moduleId: 2,
      question: "What percentage of Fortune 500 companies use advanced cost management?",
      options: ["89%", "92%", "94%", "96%"],
      correctAnswer: 2,
      explanation: "94% of Fortune 500 companies use advanced cost management techniques."
    },
    {
      id: 6,
      moduleId: 2,
      question: "How much does ABC improve cost accuracy compared to traditional methods?",
      options: ["25-35%", "30-40%", "35-45%", "40-50%"],
      correctAnswer: 2,
      explanation: "Activity-Based Costing improves cost accuracy by 35-45% compared to traditional methods."
    },
    {
      id: 7,
      moduleId: 2,
      question: "What is the typical safety margin above break-even for manufacturers?",
      options: ["10-20%", "15-25%", "20-30%", "25-35%"],
      correctAnswer: 1,
      explanation: "Manufacturing companies typically maintain a 15-25% safety margin above break-even."
    },
    {
      id: 8,
      moduleId: 2,
      question: "How many perspectives are in the Balanced Scorecard?",
      options: ["3", "4", "5", "6"],
      correctAnswer: 1,
      explanation: "The Balanced Scorecard includes four perspectives: Financial, Customer, Internal Processes, Learning & Growth."
    },

    // Questions from Module 3
    {
      id: 9,
      moduleId: 3,
      question: "What percentage of annual revenues do organizations lose to fraud?",
      options: ["3%", "5%", "7%", "9%"],
      correctAnswer: 1,
      explanation: "Organizations lose approximately 5% of annual revenues to fraud according to ACFE."
    },
    {
      id: 10,
      moduleId: 3,
      question: "What is the median loss per fraud case?",
      options: ["$95,000", "$125,000", "$175,000", "$225,000"],
      correctAnswer: 1,
      explanation: "The median loss per occupational fraud case is $125,000."
    },
    {
      id: 11,
      moduleId: 3,
      question: "How many COSO internal control components are there?",
      options: ["3", "5", "7", "9"],
      correctAnswer: 1,
      explanation: "The COSO framework includes five components of internal control."
    },
    {
      id: 12,
      moduleId: 3,
      question: "What percentage of audit committee members support partner rotation?",
      options: ["92%", "95%", "97%", "99%"],
      correctAnswer: 2,
      explanation: "97% of audit committee members support mandatory audit partner rotation."
    },

    // Questions from Module 4
    {
      id: 13,
      moduleId: 4,
      question: "What is the current federal corporate tax rate?",
      options: ["18%", "21%", "25%", "28%"],
      correctAnswer: 1,
      explanation: "The current federal corporate tax rate is 21%."
    },
    {
      id: 14,
      moduleId: 4,
      question: "How many states have economic nexus laws?",
      options: ["40", "42", "45", "48"],
      correctAnswer: 2,
      explanation: "45 states have economic nexus laws for sales tax after the Wayfair decision."
    },
    {
      id: 15,
      moduleId: 4,
      question: "What is the R&D tax credit percentage?",
      options: ["15%", "18%", "20%", "22%"],
      correctAnswer: 2,
      explanation: "The Research and Development Tax Credit provides a 20% credit for qualified expenses."
    },
    {
      id: 16,
      moduleId: 4,
      question: "What is the annual tax compliance cost for U.S. businesses?",
      options: ["$185B", "$200B", "$223B", "$250B"],
      correctAnswer: 2,
      explanation: "Tax compliance costs U.S. businesses approximately $223 billion annually."
    },

    // Questions from Module 5
    {
      id: 17,
      moduleId: 5,
      question: "What is the optimal current ratio range?",
      options: ["1.0-2.0", "1.5-3.0", "2.0-4.0", "2.5-5.0"],
      correctAnswer: 1,
      explanation: "The optimal current ratio range for most businesses is 1.5-3.0."
    },
    {
      id: 18,
      moduleId: 5,
      question: "What is the typical WACC range?",
      options: ["5-9%", "6-10%", "7-11%", "8-12%"],
      correctAnswer: 1,
      explanation: "Weighted Average Cost of Capital typically ranges from 6-10%."
    },
    {
      id: 19,
      moduleId: 5,
      question: "What is the historical default rate for high-yield bonds?",
      options: ["2.4%", "3.2%", "4.1%", "5.3%"],
      correctAnswer: 1,
      explanation: "The historical average default rate for high-yield bonds is 3.2%."
    },
    {
      id: 20,
      moduleId: 5,
      question: "What Z-Score indicates distress zone?",
      options: ["Z < 1.00", "Z < 1.81", "Z < 2.50", "Z < 2.99"],
      correctAnswer: 1,
      explanation: "Altman's Z-Score model indicates distress zone when Z < 1.81."
    },

    // Questions from Module 6
    {
      id: 21,
      moduleId: 6,
      question: "What is the median duration of fraud schemes?",
      options: ["12 months", "14 months", "16 months", "18 months"],
      correctAnswer: 1,
      explanation: "The median duration of fraud schemes before detection is 14 months."
    },
    {
      id: 22,
      moduleId: 6,
      question: "What percentage of fraud perpetrators are male?",
      options: ["68%", "72%", "76%", "80%"],
      correctAnswer: 1,
      explanation: "72% of fraud perpetrators are male according to statistical analysis."
    },
    {
      id: 23,
      moduleId: 6,
      question: "How much monthly loss occurs during undetected fraud?",
      options: ["$6,500", "$8,300", "$10,200", "$12,500"],
      correctAnswer: 1,
      explanation: "Organizations lose approximately $8,300 per month during undetected fraud periods."
    },
    {
      id: 24,
      moduleId: 6,
      question: "What is the forensic accounting industry size?",
      options: ["$3B", "$4B", "$5B", "$6B"],
      correctAnswer: 1,
      explanation: "The forensic accounting services industry is approximately $4 billion in size."
    },

    // Questions from Module 7
    {
      id: 25,
      moduleId: 7,
      question: "What is the typical optimal debt ratio range?",
      options: ["25-45%", "30-50%", "35-55%", "40-60%"],
      correctAnswer: 1,
      explanation: "The optimal debt ratio for most companies ranges from 30-50% of total capital."
    },
    {
      id: 26,
      moduleId: 7,
      question: "What percentage of M&A deals fail to achieve synergies?",
      options: ["60-80%", "65-85%", "70-90%", "75-95%"],
      correctAnswer: 2,
      explanation: "70-90% of M&A deals fail to achieve their expected synergies."
    },
    {
      id: 27,
      moduleId: 7,
      question: "What dividend payout ratio do mature companies maintain?",
      options: ["35-55%", "40-60%", "45-65%", "50-70%"],
      correctAnswer: 1,
      explanation: "Mature companies typically maintain dividend payout ratios of 40-60%."
    },
    {
      id: 28,
      moduleId: 7,
      question: "What VaR confidence level do banks use?",
      options: ["95%", "97.5%", "99%", "99.5%"],
      correctAnswer: 2,
      explanation: "Banks typically calculate Value at Risk at the 99% confidence level."
    },

    // Questions from Module 8
    {
      id: 29,
      moduleId: 8,
      question: "What percentage of accountants encounter ethical dilemmas?",
      options: ["90%", "93%", "95%", "97%"],
      correctAnswer: 2,
      explanation: "95% of accounting professionals encounter ethical dilemmas during their careers."
    },
    {
      id: 30,
      moduleId: 8,
      question: "How many AICPA Code principles are there?",
      options: ["4", "6", "8", "10"],
      correctAnswer: 1,
      explanation: "The AICPA Code of Professional Conduct includes six fundamental principles."
    },
    {
      id: 31,
      moduleId: 8,
      question: "What is the recommended director tenure limit?",
      options: ["6-10 years", "8-12 years", "10-14 years", "12-16 years"],
      correctAnswer: 1,
      explanation: "Governance best practices recommend director tenure limits of 8-12 years."
    },
    {
      id: 32,
      moduleId: 8,
      question: "How many audit committee meetings are required annually?",
      options: ["3", "4", "5", "6"],
      correctAnswer: 1,
      explanation: "Audit committees must meet at least four times per year according to exchange requirements."
    },

    // Additional Comprehensive Questions
    {
      id: 33,
      moduleId: 2,
      question: "What materiality threshold is typical for variance analysis?",
      options: ["3-7%", "5-10%", "7-12%", "10-15%"],
      correctAnswer: 1,
      explanation: "Materiality thresholds for variance analysis are typically set at 5-10%."
    },
    {
      id: 34,
      moduleId: 3,
      question: "How many transactions are typically tested per control area?",
      options: ["20-30", "25-35", "30-50", "40-60"],
      correctAnswer: 2,
      explanation: "Auditors typically test 30-50 transactions per significant control area."
    },
    {
      id: 35,
      moduleId: 4,
      question: "What is the GILTI effective tax rate?",
      options: ["8.5%", "10.5%", "12.5%", "14.5%"],
      correctAnswer: 1,
      explanation: "GILTI is taxed at an effective rate of 10.5% for U.S. shareholders."
    },
    {
      id: 36,
      moduleId: 5,
      question: "What is the optimal cash conversion cycle range?",
      options: ["20-40 days", "30-60 days", "40-70 days", "50-80 days"],
      correctAnswer: 1,
      explanation: "The optimal cash conversion cycle range is typically 30-60 days."
    },
    {
      id: 37,
      moduleId: 6,
      question: "How many years tenure before fraud typically begins?",
      options: ["3 years", "5 years", "7 years", "9 years"],
      correctAnswer: 1,
      explanation: "The median tenure before fraud begins is 5 years with the organization."
    },
    {
      id: 38,
      moduleId: 7,
      question: "What percentage of repurchases are open market purchases?",
      options: ["80%", "83%", "85%", "88%"],
      correctAnswer: 2,
      explanation: "Approximately 85% of share repurchases are conducted through open market purchases."
    },
    {
      id: 39,
      moduleId: 8,
      question: "What whistleblower incentive does Dodd-Frank provide?",
      options: ["5-25%", "10-30%", "15-35%", "20-40%"],
      correctAnswer: 1,
      explanation: "Dodd-Frank provides whistleblower incentives of 10-30% of monetary sanctions."
    },
    {
      id: 40,
      moduleId: 1,
      question: "What percentage of public companies report judgment in variable consideration?",
      options: ["85%", "90%", "92%", "95%"],
      correctAnswer: 2,
      explanation: "92% of public companies report significant judgment in estimating variable consideration."
    }
  ]
};

export type AccountingDiplomaType = typeof AccountingDiplomaCourse;
