export const accountingProfessionalDiplomaData = {
  id: "accounting-professional-diploma",
  title: "Accounting Professional (Diploma)",
  description: "This advanced diploma course builds upon foundational accounting knowledge to develop professional expertise in financial reporting, analysis, auditing, taxation, and strategic financial management. Designed for accounting professionals, finance managers, and business owners seeking advanced skills, this comprehensive program covers IFRS standards, corporate financial reporting, managerial accounting, forensic accounting, and ethical decision-making in complex financial environments. Participants will master advanced financial analysis techniques, internal control systems, audit procedures, and strategic financial planning for organizational success.",
  duration: "12 weeks",
  students: 1850,
  rating: 4.8,
  prerequisite: "Accounting Fundamentals (Certificate) or equivalent experience",
  modules: [
    {
      id: 1,
      title: "Advanced Financial Accounting Standards",
      content: `This module covers advanced financial reporting standards including IFRS and US GAAP convergence.

**1. International Financial Reporting Standards (IFRS)**
- **IFRS Framework**: Conceptual framework, qualitative characteristics, elements of financial statements
- **Key Standards**: IFRS 9 Financial Instruments, IFRS 15 Revenue Recognition, IFRS 16 Leases
- **IFRS vs. US GAAP**: Major differences, convergence progress, adoption challenges
- **First-time Adoption**: IFRS 1 requirements, exemptions, comparative information

**2. Complex Revenue Recognition**
- **IFRS 15 / ASC 606**: Five-step model, contract identification, performance obligations
- **Variable Consideration**: Estimating transaction price, constraint application
- **Contract Costs**: Capitalization criteria, amortization methods, impairment testing
- **Industry Applications**: Software, construction, telecommunications, franchise arrangements

**3. Financial Instruments Accounting**
- **IFRS 9 Classification**: Amortized cost, fair value through OCI, fair value through profit/loss
- **Hedge Accounting**: Fair value hedges, cash flow hedges, net investment hedges
- **Expected Credit Loss Model**: Three-stage approach, lifetime ECL calculation
- **Derivative Instruments**: Recognition, measurement, disclosure requirements

**4. Business Combinations and Consolidations**
- **IFRS 3 / ASC 805**: Acquisition method, identifiable assets/liabilities, goodwill calculation
- **Consolidation Requirements**: Control concept, variable interest entities, special purpose entities
- **Equity Method Investments**: Significant influence criteria, accounting procedures
- **Non-controlling Interests**: Measurement, presentation, changes in ownership`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "How many countries require or permit IFRS for domestic listed companies?",
          options: [
            "75 countries",
            "100 countries",
            "125 countries",
            "150+ countries"
          ],
          correctAnswer: 3,
          explanation: "Over 150 jurisdictions require or permit IFRS for domestic listed companies, representing approximately 95% of global GDP."
        },
        {
          id: 2,
          question: "What is the core principle of IFRS 15 Revenue Recognition?",
          options: [
            "Recognize revenue when earned",
            "Recognize revenue when cash received",
            "Recognize revenue when contract signed",
            "Recognize revenue when goods delivered"
          ],
          correctAnswer: 0,
          explanation: "Core principle: Recognize revenue to depict transfer of promised goods/services to customers at amount expected in exchange."
        },
        {
          id: 3,
          question: "Under IFRS 9, what percentage of credit losses must be recognized for Stage 1 financial assets?",
          options: [
            "12-month expected losses",
            "Lifetime expected losses",
            "50% of lifetime losses",
            "No loss recognition required"
          ],
          correctAnswer: 0,
          explanation: "Stage 1: Recognize 12-month expected credit losses. Stage 2/3: Recognize lifetime expected credit losses."
        },
        {
          id: 4,
          question: "What is the goodwill calculation formula in business combinations?",
          options: [
            "Purchase price - Fair value of net assets",
            "Purchase price - Book value of net assets",
            "Market value - Purchase price",
            "Fair value - Historical cost"
          ],
          correctAnswer: 0,
          explanation: "Goodwill = Consideration transferred + NCI at acquisition-date fair value - Net identifiable assets acquired at fair value."
        },
        {
          id: 5,
          question: "What percentage of multinational corporations report using IFRS?",
          options: [
            "45%",
            "65%",
            "85%",
            "95%+"
          ],
          correctAnswer: 2,
          explanation: "Approximately 85% of Fortune Global 500 companies report using IFRS or have reconciled to IFRS from local GAAP."
        }
      ]
    },
    {
      id: 2,
      title: "Corporate Financial Reporting and Analysis",
      content: `This module covers advanced corporate reporting requirements and sophisticated financial analysis.

**1. Consolidated Financial Statements**
- **Full Consolidation**: Parent-subsidiary relationships, elimination procedures
- **Proportionate Consolidation**: Joint arrangements, equity method alternatives
- **Foreign Operations**: Translation of foreign currency financial statements, functional currency determination
- **Segment Reporting**: Operating segments, reportable segment criteria, disclosure requirements

**2. Earnings Management and Quality Assessment**
- **Earnings Quality Indicators**: Accruals quality, persistence, predictability, smoothness
- **Common Manipulation Techniques**: Revenue timing, expense capitalization, reserve manipulation
- **Beneish M-Score**: Eight-variable model for detecting earnings manipulation
- **Altman Z-Score**: Bankruptcy prediction model, financial distress indicators

**3. Advanced Financial Statement Analysis**
- **DuPont Analysis**: Three-step and five-step models, ROE decomposition
- **Cash Flow Analysis**: Free cash flow calculation, sustainable growth rate
- **Forensic Analysis**: Identifying financial statement fraud, red flag indicators
- **Valuation Techniques**: DCF analysis, comparable company analysis, precedent transactions

**4. Interim and Segment Reporting**
- **Interim Reporting Requirements**: Discrete vs. integral view, seasonality considerations
- **Segment Identification**: Management approach, quantitative thresholds
- **Segment Disclosure**: Revenue, profit/loss, assets, liabilities, measurement basis
- **Entity-Wide Disclosures**: Geographic areas, major customers, product/services information`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What percentage of financial statement fraud involves revenue recognition?",
          options: [
            "25%",
            "45%",
            "65%",
            "85%"
          ],
          correctAnswer: 2,
          explanation: "Approximately 65% of financial statement fraud cases involve improper revenue recognition practices."
        },
        {
          id: 2,
          question: "What is the minimum segment reporting threshold for revenue?",
          options: [
            "5% of total revenue",
            "10% of total revenue",
            "15% of total revenue",
            "20% of total revenue"
          ],
          correctAnswer: 1,
          explanation: "Reportable segment thresholds: ≥10% of total revenue, ≥10% of total profit/loss, or ≥10% of total assets."
        },
        {
          id: 3,
          question: "What percentage of analysts' valuation relies on DCF analysis?",
          options: [
            "25%",
            "45%",
            "65%",
            "85%"
          ],
          correctAnswer: 2,
          explanation: "Approximately 65% of equity analysts use DCF as their primary valuation method, supplemented by multiples."
        },
        {
          id: 4,
          question: "What ROE would result from 10% net margin, 2.0 asset turnover, and 1.5 equity multiplier?",
          options: [
            "15%",
            "20%",
            "25%",
            "30%"
          ],
          correctAnswer: 3,
          explanation: "DuPont: ROE = Net Margin × Asset Turnover × Equity Multiplier = 10% × 2.0 × 1.5 = 30%."
        },
        {
          id: 5,
          question: "How many variables are in the Beneish M-Score model?",
          options: [
            "5 variables",
            "8 variables",
            "10 variables",
            "12 variables"
          ],
          correctAnswer: 1,
          explanation: "Beneish M-Score uses 8 financial ratios to detect earnings manipulation with approximately 76% accuracy."
        }
      ]
    },
    {
      id: 3,
      title: "Managerial Accounting and Cost Management",
      content: `This module covers advanced managerial accounting techniques for decision support and cost control.

**1. Activity-Based Costing (ABC)**
- **ABC Methodology**: Cost pools, cost drivers, activity analysis
- **Implementation Steps**: Identify activities, assign resource costs, determine cost drivers
- **Traditional vs. ABC**: Volume-based vs. activity-based allocation, accuracy differences
- **Time-Driven ABC**: Simplified approach, capacity cost rates, practical applications

**2. Strategic Cost Management**
- **Target Costing**: Market-based pricing, allowable cost calculation, cost reduction strategies
- **Kaizen Costing**: Continuous improvement, incremental cost reduction, employee involvement
- **Life Cycle Costing**: R&D costs, production costs, maintenance costs, disposal costs
- **Value Chain Analysis**: Primary activities, support activities, cost advantage identification

**3. Budgeting and Performance Measurement**
- **Beyond Budgeting**: Adaptive management, relative targets, continuous planning
- **Balanced Scorecard**: Four perspectives, strategy maps, performance measures
- **Variance Analysis**: Price variances, efficiency variances, sales volume variances
- **Responsibility Accounting**: Cost centers, revenue centers, profit centers, investment centers

**4. Decision Analysis and Relevant Costing**
- **Special Order Decisions**: Incremental analysis, capacity considerations
- **Make vs. Buy Analysis**: Relevant costs, qualitative factors, strategic implications
- **Product Line Decisions**: Contribution margin analysis, avoidable fixed costs
- **Capital Budgeting**: NPV, IRR, payback period, profitability index`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What percentage of manufacturing companies use Activity-Based Costing?",
          options: [
            "15%",
            "35%",
            "55%",
            "75%"
          ],
          correctAnswer: 1,
          explanation: "Approximately 35% of manufacturing companies use ABC, with higher adoption in complex, multi-product environments."
        },
        {
          id: 2,
          question: "What is the typical cost reduction target in target costing?",
          options: [
            "5-10%",
            "10-20%",
            "20-30%",
            "30-50%"
          ],
          correctAnswer: 2,
          explanation: "Target costing typically aims for 20-30% cost reduction through design changes, process improvements, and supplier negotiations."
        },
        {
          id: 3,
          question: "What percentage of companies link budgets to strategy through balanced scorecard?",
          options: [
            "15%",
            "35%",
            "55%",
            "75%"
          ],
          correctAnswer: 1,
          explanation: "Approximately 35% of companies successfully integrate balanced scorecard with budgeting for strategic alignment."
        },
        {
          id: 4,
          question: "In make vs. buy decisions, what costs are always relevant?",
          options: [
            "Allocated fixed costs",
            "Incremental costs",
            "Sunk costs",
            "Historical costs"
          ],
          correctAnswer: 1,
          explanation: "Only incremental (differential) costs that change with the decision are relevant. Sunk costs are never relevant."
        },
        {
          id: 5,
          question: "What is the most widely used capital budgeting technique?",
          options: [
            "Payback period",
            "Accounting rate of return",
            "Net present value",
            "Internal rate of return"
          ],
          correctAnswer: 2,
          explanation: "NPV is used by approximately 75% of large corporations as primary technique, though IRR is also popular."
        }
      ]
    },
    {
      id: 4,
      title: "Auditing and Assurance Services",
      content: `This module covers professional auditing standards, procedures, and ethical requirements.

**1. International Standards on Auditing (ISA)**
- **ISA Framework**: General principles, ethical requirements, quality control
- **Audit Planning**: Risk assessment procedures, materiality determination, audit strategy
- **Audit Evidence**: Sufficiency, appropriateness, audit procedures selection
- **Audit Documentation**: Working papers, file assembly, retention requirements

**2. Risk-Based Auditing**
- **Risk Assessment**: Entity level risks, assertion level risks, fraud risks
- **Internal Control Evaluation**: Control environment, control activities, monitoring
- **Substantive Procedures**: Tests of details, substantive analytical procedures
- **Sampling Techniques**: Statistical vs. non-statistical, sample size determination

**3. Specialized Audit Areas**
- **Fraud Auditing**: Fraud triangle, fraud risk factors, forensic procedures
- **IT Auditing**: General controls, application controls, data analytics
- **Compliance Auditing**: Regulatory requirements, internal policy compliance
- **Operational Auditing**: Efficiency, effectiveness, economy assessments

**4. Audit Reporting and Communication**
- **Audit Opinions**: Unqualified, qualified, adverse, disclaimer
- **Key Audit Matters**: Critical auditor attention areas, communication requirements
- **Management Letter**: Internal control weaknesses, recommendations for improvement
- **Subsequent Events**: Period between balance sheet date and report date`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What percentage of audit time is typically spent on planning?",
          options: [
            "10-15%",
            "20-25%",
            "30-40%",
            "45-50%"
          ],
          correctAnswer: 1,
          explanation: "Approximately 20-25% of audit time is spent on planning, risk assessment, and strategy development."
        },
        {
          id: 2,
          question: "What is the materiality threshold for most financial statement audits?",
          options: [
            "0.5-1% of revenue",
            "1-2% of total assets",
            "5-10% of net income",
            "All of the above"
          ],
          correctAnswer: 3,
          explanation: "Materiality is typically 0.5-1% revenue, 1-2% total assets, or 5-10% net income, using the most sensitive benchmark."
        },
        {
          id: 3,
          question: "What percentage of audits use data analytics tools?",
          options: [
            "15%",
            "35%",
            "55%",
            "75%"
          ],
          correctAnswer: 3,
          explanation: "Approximately 75% of audit firms now use data analytics for risk assessment, testing, and visualization."
        },
        {
          id: 4,
          question: "How many ISA standards are currently in effect?",
          options: [
            "24 standards",
            "36 standards",
            "48 standards",
            "60+ standards"
          ],
          correctAnswer: 1,
          explanation: "There are 36 International Standards on Auditing (ISAs) covering all aspects of audit engagements."
        },
        {
          id: 5,
          question: "What percentage of audit adjustments are proposed during fieldwork?",
          options: [
            "25%",
            "45%",
            "65%",
            "85%"
          ],
          correctAnswer: 3,
          explanation: "Approximately 85% of proposed audit adjustments are identified and resolved during fieldwork before reporting."
        }
      ]
    },
    {
      id: 5,
      title: "Taxation and Regulatory Compliance",
      content: `This module covers corporate taxation, international tax issues, and regulatory compliance.

**1. Corporate Income Taxation**
- **Taxable Income Calculation**: Permanent differences, temporary differences, deferred taxes
- **Tax Credits**: Research credits, investment credits, foreign tax credits
- **Loss Carryovers**: Net operating losses, limitations, planning opportunities
- **Transfer Pricing**: Arm's length principle, comparable analysis, documentation requirements

**2. International Taxation**
- **Double Taxation Treaties**: Treaty benefits, permanent establishment, withholding taxes
- **Controlled Foreign Corporations**: Subpart F income, global intangible low-taxed income
- **Base Erosion and Profit Shifting**: OECD BEPS project, 15 action points
- **Digital Economy Taxation**: Significant economic presence, digital services taxes

**3. Indirect Taxes and Compliance**
- **Value Added Tax**: Input tax credits, exempt supplies, zero-rated supplies
- **Sales and Use Taxes**: Nexus requirements, collection obligations, remittance procedures
- **Payroll Taxes**: Employer responsibilities, reporting requirements, penalties
- **Excise Taxes**: Specific goods/services, environmental taxes, luxury taxes

**4. Tax Planning and Controversy**
- **Tax Avoidance vs. Evasion**: Legal distinction, aggressive vs. conservative positions
- **Tax Risk Management**: Uncertain tax positions, FIN 48/IFRIC 23 requirements
- **Tax Audits**: Preparation, documentation, negotiation strategies
- **Appeals Process**: Administrative appeals, judicial review, settlement options`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the average effective corporate tax rate globally?",
          options: [
            "15-20%",
            "20-25%",
            "25-30%",
            "30-35%"
          ],
          correctAnswer: 1,
          explanation: "Average effective corporate tax rate globally is approximately 20-25%, though statutory rates vary widely."
        },
        {
          id: 2,
          question: "How many countries have implemented VAT/GST systems?",
          options: [
            "75 countries",
            "100 countries",
            "125 countries",
            "150+ countries"
          ],
          correctAnswer: 3,
          explanation: "Over 160 countries have implemented VAT or GST systems, generating approximately 20% of global tax revenue."
        },
        {
          id: 3,
          question: "What percentage of multinational corporations face transfer pricing audits?",
          options: [
            "15%",
            "35%",
            "55%",
            "75%"
          ],
          correctAnswer: 1,
          explanation: "Approximately 35% of multinational corporations face transfer pricing audits, with increasing focus on digital economy."
        },
        {
          id: 4,
          question: "What is the typical statute of limitations for tax assessments?",
          options: [
            "3 years",
            "5 years",
            "7 years",
            "10 years"
          ],
          correctAnswer: 0,
          explanation: "Most jurisdictions have 3-4 year statute of limitations, extended to 6+ years for fraud or significant omissions."
        },
        {
          id: 5,
          question: "What percentage of tax disputes are settled without litigation?",
          options: [
            "45%",
            "65%",
            "85%",
            "95%+"
          ],
          correctAnswer: 2,
          explanation: "Approximately 85-90% of tax disputes are settled through administrative processes without court litigation."
        }
      ]
    },
    {
      id: 6,
      title: "Forensic Accounting and Fraud Examination",
      content: `This module covers forensic accounting techniques, fraud detection, and investigation procedures.

**1. Forensic Accounting Fundamentals**
- **Forensic vs. Traditional Accounting**: Reactive vs. proactive, litigation support
- **Legal Framework**: Rules of evidence, expert witness requirements, discovery process
- **Investigation Methodology**: Planning, evidence collection, analysis, reporting
- **Quantifying Damages**: Lost profits, business interruption, intellectual property theft

**2. Fraud Detection Techniques**
- **Data Analytics**: Benford's Law, digital analysis, anomaly detection
- **Red Flag Indicators**: Behavioral red flags, financial red flags, operational red flags
- **Internal Control Weaknesses**: Segregation deficiencies, override capabilities, lack of monitoring
- **Whistleblower Programs**: Design, implementation, investigation protocols

**3. Financial Statement Fraud**
- **Fraudulent Financial Reporting**: Fictitious revenues, timing differences, concealed liabilities
- **Asset Misappropriation**: Cash theft, inventory theft, payroll fraud, expense reimbursement fraud
- **Corruption**: Bribery, kickbacks, conflicts of interest, economic extortion
- **Money Laundering**: Placement, layering, integration, detection methods

**4. Expert Witness and Litigation Support**
- **Expert Reports**: Format, content requirements, disclosure obligations
- **Deposition Preparation**: Question anticipation, documentation review, testimony strategy
- **Courtroom Testimony**: Credibility establishment, complex concept simplification, cross-examination handling
- **Settlement Negotiations**: Damage quantification, negotiation strategies, settlement documentation`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What percentage of occupational fraud is detected by tips?",
          options: [
            "25%",
            "40%",
            "55%",
            "70%"
          ],
          correctAnswer: 1,
          explanation: "Approximately 40% of fraud is detected by tips, making whistleblower programs the most effective detection method."
        },
        {
          id: 2,
          question: "What is the median loss from financial statement fraud?",
          options: [
            "$100,000",
            "$500,000",
            "$1 million",
            "$5 million+"
          ],
          correctAnswer: 2,
          explanation: "Median loss from financial statement fraud is approximately $1 million, significantly higher than asset misappropriation."
        },
        {
          id: 3,
          question: "What percentage of fraudsters are first-time offenders?",
          options: [
            "45%",
            "65%",
            "85%",
            "95%"
          ],
          correctAnswer: 2,
          explanation: "Approximately 85% of fraudsters have no prior criminal convictions, making background checks less effective."
        },
        {
          id: 4,
          question: "How long does the average fraud scheme last before detection?",
          options: [
            "6 months",
            "12 months",
            "18 months",
            "24 months"
          ],
          correctAnswer: 2,
          explanation: "The median duration of fraud schemes is 14-18 months before detection, allowing significant losses to accumulate."
        },
        {
          id: 5,
          question: "What percentage of organizations are victims of fraud annually?",
          options: [
            "15%",
            "35%",
            "55%",
            "75%"
          ],
          correctAnswer: 1,
          explanation: "Approximately 35% of organizations experience fraud annually, though many minor cases go unreported."
        }
      ]
    },
    {
      id: 7,
      title: "Strategic Financial Management",
      content: `This module covers strategic financial decision-making, corporate finance, and risk management.

**1. Corporate Financial Strategy**
- **Capital Structure Optimization**: Debt vs. equity financing, optimal leverage, cost of capital
- **Dividend Policy**: Dividend irrelevance theory, signaling theory, clientele effects
- **Working Capital Management**: Cash conversion cycle, inventory optimization, receivables management
- **Corporate Governance**: Board structure, executive compensation, shareholder rights

**2. Mergers and Acquisitions**
- **M&A Process**: Due diligence, valuation, negotiation, integration
- **Valuation Methods**: Discounted cash flow, comparable transactions, precedent analysis
- **Financing Options**: Cash deals, stock swaps, leveraged buyouts, earnouts
- **Post-Merger Integration**: Cultural integration, systems integration, synergy realization

**3. Risk Management and Derivatives**
- **Financial Risk Identification**: Market risk, credit risk, liquidity risk, operational risk
- **Risk Measurement**: VaR, stress testing, scenario analysis, sensitivity analysis
- **Hedging Strategies**: Natural hedges, forward contracts, futures, options, swaps
- **Enterprise Risk Management**: COSO ERM framework, risk appetite, risk culture

**4. Sustainable Finance and ESG**
- **Environmental Social Governance**: ESG factors, integrated reporting, sustainability accounting
- **Green Finance**: Green bonds, sustainability-linked loans, carbon credits
- **Impact Investing**: Socially responsible investing, positive screening, negative screening
- **Climate Risk Disclosure**: TCFD recommendations, physical risk, transition risk`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What percentage of M&A deals fail to achieve expected synergies?",
          options: [
            "25%",
            "45%",
            "65%",
            "85%"
          ],
          correctAnswer: 3,
          explanation: "Approximately 70-90% of M&A deals fail to achieve expected synergies, often due to poor integration planning."
        },
        {
          id: 2,
          question: "What is the average cost of capital for large corporations?",
          options: [
            "5-7%",
            "7-9%",
            "9-11%",
            "11-13%"
          ],
          correctAnswer: 1,
          explanation: "Average WACC for large corporations is typically 7-9%, varying by industry, risk profile, and economic conditions."
        },
        {
          id: 3,
          question: "What percentage of Fortune 500 companies issue sustainability reports?",
          options: [
            "45%",
            "65%",
            "85%",
            "95%"
          ],
          correctAnswer: 3,
          explanation: "Approximately 90% of S&P 500 and 95% of Fortune 500 companies now publish sustainability or ESG reports."
        },
        {
          id: 4,
          question: "What is the typical cash conversion cycle for manufacturing companies?",
          options: [
            "30-60 days",
            "60-90 days",
            "90-120 days",
            "120-150 days"
          ],
          correctAnswer: 1,
          explanation: "Manufacturing companies typically have 60-90 day cash conversion cycles, though this varies by industry."
        },
        {
          id: 5,
          question: "What percentage of CFOs use derivatives for risk management?",
          options: [
            "25%",
            "45%",
            "65%",
            "85%"
          ],
          correctAnswer: 3,
          explanation: "Approximately 85% of large corporations use derivatives for hedging interest rate, currency, or commodity risks."
        }
      ]
    },
    {
      id: 8,
      title: "Professional Ethics and Corporate Governance",
      content: `This module covers professional ethics, corporate governance, and regulatory compliance.

**1. Professional Accounting Ethics**
- **Code of Ethics**: Fundamental principles, threats, safeguards
- **Independence Requirements**: Actual independence, perceived independence, cooling-off periods
- **Confidentiality**: Client information protection, disclosure exceptions, data security
- **Professional Competence**: Continuing education, technical standards, due care

**2. Corporate Governance Framework**
- **Board of Directors**: Structure, composition, independence requirements
- **Audit Committee**: Responsibilities, financial expertise, oversight activities
- **Internal Audit Function**: Organizational position, charter, reporting lines
- **Shareholder Engagement**: AGMs, proxy voting, activist investors

**3. Regulatory Environment**
- **Securities Regulations**: SEC requirements, listing standards, disclosure obligations
- **Sarbanes-Oxley Act**: Section 302 certification, Section 404 internal control reporting
- **Anti-Money Laundering**: KYC procedures, transaction monitoring, suspicious activity reporting
- **Data Protection**: GDPR, privacy regulations, data breach notification

**4. Ethical Decision-Making**
- **Ethical Dilemmas**: Conflict resolution, whistleblowing, gift policies
- **Ethical Frameworks**: Utilitarian approach, rights approach, justice approach, virtue ethics
- **Organizational Culture**: Tone at the top, ethical leadership, code of conduct
- **Compliance Programs**: Design, implementation, monitoring, continuous improvement`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What percentage of audit committee members must be independent under NYSE rules?",
          options: [
            "75%",
            "100%",
            "Majority",
            "No requirement"
          ],
          correctAnswer: 1,
          explanation: "NYSE requires 100% independence for audit committee members, with additional financial expertise requirements."
        },
        {
          id: 2,
          question: "How many fundamental principles are in the IESBA Code of Ethics?",
          options: [
            "3 principles",
            "5 principles",
            "7 principles",
            "10 principles"
          ],
          correctAnswer: 1,
          explanation: "Five fundamental principles: Integrity, Objectivity, Professional Competence, Confidentiality, Professional Behavior."
        },
        {
          id: 3,
          question: "What is the average cost of SOX 404 compliance for large companies?",
          options: [
            "$500,000",
            "$1 million",
            "$2 million",
            "$5 million+"
          ],
          correctAnswer: 2,
          explanation: "Average SOX 404 compliance costs are approximately $2 million annually for large accelerated filers."
        },
        {
          id: 4,
          question: "What percentage of companies have ethics hotlines?",
          options: [
            "35%",
            "55%",
            "75%",
            "95%"
          ],
          correctAnswer: 2,
          explanation: "Approximately 75% of large corporations have ethics hotlines or similar whistleblower reporting mechanisms."
        },
        {
          id: 5,
          question: "What is the maximum GDPR fine for serious violations?",
          options: [
            "2% of global revenue",
            "4% of global revenue",
            "€10 million",
            "€20 million"
          ],
          correctAnswer: 1,
          explanation: "GDPR allows fines up to €20 million or 4% of global annual turnover, whichever is higher, for serious violations."
        }
      ]
    },
    {
      id: 9,
      title: "Accounting Information Systems",
      content: `This module covers accounting information systems, ERP implementation, and digital transformation.

**1. Accounting Information Systems Design**
- **System Components**: Input devices, processors, storage, output devices, controls
- **Database Design**: Relational databases, SQL queries, data normalization
- **System Development Lifecycle**: Planning, analysis, design, implementation, maintenance
- **Cloud Accounting Systems**: SaaS models, security considerations, integration capabilities

**2. ERP Systems Implementation**
- **Major ERP Platforms**: SAP, Oracle, Microsoft Dynamics, NetSuite
- **Implementation Methodology**: Project planning, configuration, customization, testing, go-live
- **Change Management**: User training, process redesign, resistance management
- **Post-Implementation**: Support structure, system optimization, upgrade planning

**3. Internal Controls in Automated Systems**
- **General Controls**: Access controls, change management, backup/recovery
- **Application Controls**: Input controls, processing controls, output controls
- **IT Governance**: COBIT framework, IT strategy alignment, performance measurement
- **Cybersecurity**: Network security, endpoint protection, incident response

**4. Emerging Technologies in Accounting**
- **Blockchain**: Distributed ledger, smart contracts, audit implications
- **Artificial Intelligence**: Robotic process automation, machine learning, predictive analytics
- **Big Data Analytics**: Data mining, visualization tools, predictive modeling
- **Continuous Auditing**: Real-time monitoring, exception reporting, automated testing`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What percentage of large companies use ERP systems?",
          options: [
            "45%",
            "65%",
            "85%",
            "95%+"
          ],
          correctAnswer: 3,
          explanation: "Over 95% of Fortune 500 companies use ERP systems, with SAP and Oracle dominating the market."
        },
        {
          id: 2,
          question: "What is the average ERP implementation timeline for large organizations?",
          options: [
            "6-12 months",
            "12-24 months",
            "24-36 months",
            "36-48 months"
          ],
          correctAnswer: 1,
          explanation: "Large ERP implementations typically take 12-24 months, though complex global rollouts can take longer."
        },
        {
          id: 3,
          question: "What percentage of accounting tasks are automatable with current technology?",
          options: [
            "25%",
            "45%",
            "65%",
            "85%"
          ],
          correctAnswer: 2,
          explanation: "Approximately 65-70% of routine accounting tasks are technically automatable with RPA and AI technologies."
        },
        {
          id: 4,
          question: "What is the average cost of a data breach for large companies?",
          options: [
            "$500,000",
            "$2 million",
            "$5 million",
            "$10 million+"
          ],
          correctAnswer: 2,
          explanation: "Average data breach cost is approximately $4-5 million, including detection, response, notification, and lost business."
        },
        {
          id: 5,
          question: "What percentage of companies plan to implement blockchain in accounting?",
          options: [
            "5%",
            "15%",
            "25%",
            "35%"
          ],
          correctAnswer: 2,
          explanation: "Approximately 25% of large companies have blockchain initiatives, with accounting applications in smart contracts and audit trails."
        }
      ]
    },
    {
      id: 10,
      title: "Capstone Project: Financial Analysis and Reporting",
      content: `This capstone module integrates all course concepts through comprehensive case analysis.

**1. Comprehensive Financial Analysis Case**
- **Company Selection**: Publicly traded company, industry analysis, competitive positioning
- **Financial Statement Analysis**: Horizontal/vertical analysis, ratio analysis, cash flow analysis
- **Quality Assessment**: Earnings quality, cash flow quality, balance sheet strength
- **Forensic Review**: Red flag identification, unusual transactions, related party disclosures

**2. Strategic Financial Recommendations**
- **Performance Improvement**: Revenue enhancement, cost reduction, working capital optimization
- **Risk Assessment**: Financial risks, operational risks, strategic risks, mitigation strategies
- **Investment Evaluation**: Capital budgeting analysis, project valuation, ROI calculation
- **Financing Strategy**: Capital structure optimization, dividend policy, share repurchases

**3. Professional Reporting and Presentation**
- **Executive Summary**: Key findings, recommendations, implementation roadmap
- **Detailed Analysis**: Supporting calculations, assumptions, sensitivity analysis
- **Visual Presentation**: Charts, graphs, dashboards, data visualization
- **Professional Standards**: Report formatting, citation requirements, disclosure completeness

**4. Ethical and Governance Considerations**
- **Ethical Analysis**: Potential conflicts, stakeholder impacts, regulatory compliance
- **Governance Review**: Board effectiveness, internal controls, risk management
- **Sustainability Integration**: ESG factors, long-term value creation, stakeholder engagement
- **Implementation Plan**: Timeline, responsibilities, monitoring metrics, success measures`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What percentage of investment decisions incorporate ESG factors?",
          options: [
            "25%",
            "45%",
            "65%",
            "85%"
          ],
          correctAnswer: 3,
          explanation: "Approximately 85% of institutional investors now consider ESG factors in investment analysis and decision-making."
        },
        {
          id: 2,
          question: "What is the typical length of an executive summary in professional reports?",
          options: [
            "1-2 pages",
            "3-5 pages",
            "5-10 pages",
            "10-15 pages"
          ],
          correctAnswer: 0,
          explanation: "Executive summaries should be 1-2 pages maximum, highlighting key findings and recommendations for busy executives."
        },
        {
          id: 3,
          question: "What percentage of analysts' reports include sensitivity analysis?",
          options: [
            "25%",
            "45%",
            "65%",
            "85%"
          ],
          correctAnswer: 1,
          explanation: "Approximately 45% of professional analyst reports include sensitivity or scenario analysis for key assumptions."
        },
        {
          id: 4,
          question: "How many key performance indicators should a balanced scorecard include?",
          options: [
            "10-15 KPIs",
            "15-25 KPIs",
            "25-40 KPIs",
            "40-60 KPIs"
          ],
          correctAnswer: 1,
          explanation: "Effective balanced scorecards typically include 15-25 KPIs across 4 perspectives for manageable focus."
        },
        {
          id: 5,
          question: "What percentage of strategic plans fail due to poor implementation?",
          options: [
            "45%",
            "65%",
            "85%",
            "95%"
          ],
          correctAnswer: 1,
          explanation: "Approximately 60-70% of strategic plans fail due to poor implementation rather than flawed strategy."
        }
      ]
    }
  ],
  finalExam: [
    {
      id: 1,
      question: "Countries requiring/permitting IFRS?",
      options: [
        "75 countries",
        "100 countries",
        "125 countries",
        "150+ countries"
      ],
      correctAnswer: 3,
      explanation: "150+ countries use IFRS."
    },
    {
      id: 2,
      question: "Multinationals reporting with IFRS?",
      options: [
        "45%",
        "65%",
        "85%",
        "95%+"
      ],
      correctAnswer: 2,
      explanation: "85% of Fortune 500 use IFRS."
    },
    {
      id: 3,
      question: "Revenue recognition fraud percentage?",
      options: [
        "25%",
        "45%",
        "65%",
        "85%"
      ],
      correctAnswer: 2,
      explanation: "65% involve revenue fraud."
    },
    {
      id: 4,
      question: "Analysts using DCF primarily?",
      options: [
        "25%",
        "45%",
        "65%",
        "85%"
      ],
      correctAnswer: 2,
      explanation: "65% use DCF as primary."
    },
    {
      id: 5,
      question: "Segment reporting threshold?",
      options: [
        "5%",
        "10%",
        "15%",
        "20%"
      ],
      correctAnswer: 1,
      explanation: "10% is the threshold."
    },
    {
      id: 6,
      question: "Manufacturers using ABC?",
      options: [
        "15%",
        "35%",
        "55%",
        "75%"
      ],
      correctAnswer: 1,
      explanation: "35% use Activity-Based Costing."
    },
    {
      id: 7,
      question: "Target costing reduction target?",
      options: [
        "5-10%",
        "10-20%",
        "20-30%",
        "30-50%"
      ],
      correctAnswer: 2,
      explanation: "20-30% typical reduction."
    },
    {
      id: 8,
      question: "Companies linking budget to strategy?",
      options: [
        "15%",
        "35%",
        "55%",
        "75%"
      ],
      correctAnswer: 1,
      explanation: "35% integrate with strategy."
    },
    {
      id: 9,
      question: "Audit time spent on planning?",
      options: [
        "10-15%",
        "20-25%",
        "30-40%",
        "45-50%"
      ],
      correctAnswer: 1,
      explanation: "20-25% on planning."
    },
    {
      id: 10,
      question: "Audits using data analytics?",
      options: [
        "15%",
        "35%",
        "55%",
        "75%"
      ],
      correctAnswer: 3,
      explanation: "75% use data analytics."
    },
    {
      id: 11,
      question: "ISA standards count?",
      options: [
        "24",
        "36",
        "48",
        "60+"
      ],
      correctAnswer: 1,
      explanation: "36 ISA standards."
    },
    {
      id: 12,
      question: "Average corporate tax rate?",
      options: [
        "15-20%",
        "20-25%",
        "25-30%",
        "30-35%"
      ],
      correctAnswer: 1,
      explanation: "20-25% average globally."
    },
    {
      id: 13,
      question: "Countries with VAT/GST?",
      options: [
        "75",
        "100",
        "125",
        "150+"
      ],
      correctAnswer: 3,
      explanation: "160+ countries have VAT."
    },
    {
      id: 14,
      question: "Fraud detected by tips?",
      options: [
        "25%",
        "40%",
        "55%",
        "70%"
      ],
      correctAnswer: 1,
      explanation: "40% detected by tips."
    },
    {
      id: 15,
      question: "Median financial statement fraud loss?",
      options: [
        "$100,000",
        "$500,000",
        "$1 million",
        "$5 million+"
      ],
      correctAnswer: 2,
      explanation: "$1 million median loss."
    },
    {
      id: 16,
      question: "First-time fraud offenders?",
      options: [
        "45%",
        "65%",
        "85%",
        "95%"
      ],
      correctAnswer: 2,
      explanation: "85% first-time offenders."
    },
    {
      id: 17,
      question: "M&A failing on synergies?",
      options: [
        "25%",
        "45%",
        "65%",
        "85%"
      ],
      correctAnswer: 3,
      explanation: "70-90% fail on synergies."
    },
    {
      id: 18,
      question: "Average corporate WACC?",
      options: [
        "5-7%",
        "7-9%",
        "9-11%",
        "11-13%"
      ],
      correctAnswer: 1,
      explanation: "7-9% average WACC."
    },
    {
      id: 19,
      question: "Fortune 500 sustainability reporting?",
      options: [
        "45%",
        "65%",
        "85%",
        "95%"
      ],
      correctAnswer: 3,
      explanation: "95% publish reports."
    },
    {
      id: 20,
      question: "Audit committee independence?",
      options: [
        "75%",
        "100%",
        "Majority",
        "No requirement"
      ],
      correctAnswer: 1,
      explanation: "100% independence required."
    },
    {
      id: 21,
      question: "IESBA ethical principles?",
      options: [
        "3",
        "5",
        "7",
        "10"
      ],
      correctAnswer: 1,
      explanation: "5 fundamental principles."
    },
    {
      id: 22,
      question: "Average SOX 404 cost?",
      options: [
        "$500K",
        "$1M",
        "$2M",
        "$5M+"
      ],
      correctAnswer: 2,
      explanation: "$2 million average cost."
    },
    {
      id: 23,
      question: "Companies with ethics hotlines?",
      options: [
        "35%",
        "55%",
        "75%",
        "95%"
      ],
      correctAnswer: 2,
      explanation: "75% have ethics hotlines."
    },
    {
      id: 24,
      question: "Large companies using ERP?",
      options: [
        "45%",
        "65%",
        "85%",
        "95%+"
      ],
      correctAnswer: 3,
      explanation: "95%+ use ERP systems."
    },
    {
      id: 25,
      question: "ERP implementation timeline?",
      options: [
        "6-12 months",
        "12-24 months",
        "24-36 months",
        "36-48 months"
      ],
      correctAnswer: 1,
      explanation: "12-24 months typical."
    },
    {
      id: 26,
      question: "Accounting tasks automatable?",
      options: [
        "25%",
        "45%",
        "65%",
        "85%"
      ],
      correctAnswer: 2,
      explanation: "65-70% automatable."
    },
    {
      id: 27,
      question: "Average data breach cost?",
      options: [
        "$500K",
        "$2M",
        "$5M",
        "$10M+"
      ],
      correctAnswer: 2,
      explanation: "$4-5 million average."
    },
    {
      id: 28,
      question: "Companies planning blockchain?",
      options: [
        "5%",
        "15%",
        "25%",
        "35%"
      ],
      correctAnswer: 2,
      explanation: "25% have blockchain plans."
    },
    {
      id: 29,
      question: "Investors considering ESG?",
      options: [
        "25%",
        "45%",
        "65%",
        "85%"
      ],
      correctAnswer: 3,
      explanation: "85% consider ESG factors."
    },
    {
      id: 30,
      question: "Reports with sensitivity analysis?",
      options: [
        "25%",
        "45%",
        "65%",
        "85%"
      ],
      correctAnswer: 1,
      explanation: "45% include sensitivity."
    },
    {
      id: 31,
      question: "IFRS 15 core principle?",
      options: [
        "Revenue when earned",
        "Cash basis",
        "Contract signing",
        "Delivery"
      ],
      correctAnswer: 0,
      explanation: "Revenue when earned."
    },
    {
      id: 32,
      question: "IFRS 9 Stage 1 losses?",
      options: [
        "12-month",
        "Lifetime",
        "50% lifetime",
        "None"
      ],
      correctAnswer: 0,
      explanation: "12-month expected losses."
    },
    {
      id: 33,
      question: "Goodwill calculation?",
      options: [
        "Price - FV net assets",
        "Price - BV net assets",
        "Market - price",
        "FV - historical"
      ],
      correctAnswer: 0,
      explanation: "Price minus fair value."
    },
    {
      id: 34,
      question: "Beneish M-Score variables?",
      options: [
        "5",
        "8",
        "10",
        "12"
      ],
      correctAnswer: 1,
      explanation: "8 variable model."
    },
    {
      id: 35,
      question: "DuPont ROE calculation?",
      options: [
        "Margin × Turnover × Multiplier",
        "Margin + Turnover",
        "Margin ÷ Turnover",
        "Turnover × Multiplier"
      ],
      correctAnswer: 0,
      explanation: "Product of three components."
    },
    {
      id: 36,
      question: "Relevant costs in decisions?",
      options: [
        "Incremental",
        "Allocated",
        "Sunk",
        "Historical"
      ],
      correctAnswer: 0,
      explanation: "Incremental costs relevant."
    },
    {
      id: 37,
      question: "Primary capital budgeting method?",
      options: [
        "Payback",
        "ARR",
        "NPV",
        "IRR"
      ],
      correctAnswer: 2,
      explanation: "NPV used by 75%."
    },
    {
      id: 38,
      question: "Materiality threshold revenue?",
      options: [
        "0.5-1%",
        "1-2%",
        "5-10%",
        "10-15%"
      ],
      correctAnswer: 0,
      explanation: "0.5-1% of revenue."
    },
    {
      id: 39,
      question: "Audit adjustments fieldwork?",
      options: [
        "25%",
        "45%",
        "65%",
        "85%"
      ],
      correctAnswer: 3,
      explanation: "85% during fieldwork."
    },
    {
      id: 40,
      question: "GDPR maximum fine?",
      options: [
        "2% revenue",
        "4% revenue",
        "€10M",
        "€20M"
      ],
      correctAnswer: 1,
      explanation: "4% of global revenue."
    }
  ]
};
