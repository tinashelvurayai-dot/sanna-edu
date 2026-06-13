// Legal Practice (Diploma) - Complete Course Data
// Advanced continuation of Corporate Law Certificate
// This is a single, continuous TypeScript object ready for implementation

export const legalPracticeDiplomaCourse = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "legal-practice-diploma",
  title: "Legal Practice (Diploma)",
  description: "Advanced legal practice skills for corporate attorneys. Master complex transactions, litigation strategies, regulatory compliance, and professional ethics for sophisticated legal practice.",
  duration: "10 weeks",
  timeCommitment: "7-10 hours per week",
  price: 18,
  icon: "⚖️",
  badge: "Diploma",
  prerequisites: "Corporate Law Certificate or equivalent knowledge",
  learningOutcomes: [
    "Structure and negotiate complex corporate transactions including M&A",
    "Conduct sophisticated legal due diligence and risk assessment",
    "Manage securities offerings and regulatory compliance programs",
    "Develop litigation strategies and manage dispute resolution",
    "Navigate international legal frameworks and cross-border transactions",
    "Apply advanced legal ethics and professional responsibility principles",
    "Draft and negotiate complex commercial agreements",
    "Manage client relationships and legal practice operations"
  ],

  // 2. MODULE ARCHITECTURE (10 Modules - Modules 1-6 fast-track from Certificate, Modules 7-10 advanced)
  modules: [
    {
      id: 1,
      title: "Fast-Track: Business Entities & Formation (Review)",
      content: `
# Module 1: Fast-Track Review - Business Entities & Formation

**Note**: This module reviews and builds upon Corporate Law Certificate Module 1. Certificate holders may fast-track through foundational concepts.

## **1.1 Advanced Entity Structuring**
**Complex corporate structures for sophisticated businesses**:

1. **Holding Company Structures**
   - **Purpose**: Asset protection, tax optimization, operational separation
   - **Types**: Pure holding company (no operations), mixed holding company
   - **Subsidiary Management**: Control mechanisms, intercompany agreements
   - **Liability Isolation**: Strategic separation of high-risk operations
   - **Tax Considerations**: Check-the-box elections, consolidated returns

2. **Series LLCs**
   - **Availability**: Approximately 20 states including Delaware, Texas, Illinois
   - **Structure**: Master LLC with separate series having distinct assets/liabilities
   - **Charging Order Protection**: Varies by state, stronger in some jurisdictions
   - **Tax Treatment**: Each series can have separate tax elections
   - **Bankruptcy Considerations**: Series treatment in bankruptcy remains unsettled

3. **Joint Ventures**
   - **Structure Options**: Corporate JV, LLC JV, partnership, contractual alliance
   - **Governance**: Board composition, voting thresholds, deadlock resolution
   - **Contributions**: Capital, IP, expertise, other assets
   - **Exit Strategies**: Buy-sell agreements, drag-along/tag-along rights, ROFR
   - **Antitrust Considerations**: HSR filing requirements for larger JVs

## **1.2 International Corporate Structures**
**Cross-border entity considerations**:

- **Tax Treaty Networks**: Impact on entity choice and profit repatriation
- **CFC Rules**: Controlled Foreign Corporation rules (US: Subpart F, GILTI)
- **Permanent Establishment**: Risk of creating taxable presence in foreign jurisdictions
- **Transfer Pricing**: Arm's length principle, documentation requirements, penalty risks
- **Withholding Taxes**: Rates reduced by treaties, FATCA compliance

**Common international structures**:
- **Check-the-Box Planning**: Electing entity classification for optimal tax treatment
- **Hybrid Entities**: Treated differently in different jurisdictions
- **Double Irish with Dutch Sandwich**: Now largely eliminated by OECD BEPS
- **Inversion Transactions**: Reincorporating in lower-tax jurisdictions (restricted by US rules)

## **1.3 Complex Capital Structures**
**Advanced equity and debt instruments**:

1. **Multiple Class Stock Structures**
   - **Voting vs. Non-Voting**: Differential voting rights (Google, Facebook structures)
   - **Super-Voting Stock**: 10:1 or other enhanced voting ratios
   - **Founder Control**: Maintaining control despite diluted economic interest
   - **Sunset Provisions**: Automatic conversion to single class after certain events
   - **IPO Considerations**: Exchange requirements, investor expectations

2. **Convertible Instruments**
   - **Convertible Notes**: Debt converting to equity at qualified financing
   - **SAFEs**: Simple Agreement for Future Equity (not debt, no interest)
   - **Convertible Preferred Stock**: Multiple series with different rights
   - **Conversion Mechanics**: Conversion price, anti-dilution protection, triggers
   - **Accounting Treatment**: Debt/equity classification, EPS impact

3. **Complex Debt Structures**
   - **Mezzanine Financing**: Subordinated debt with equity features (warrants)
   - **Senior/Subordinated**: Payment waterfall, intercreditor agreements
   - **Covenant-Lite Loans**: Reduced lender protections in competitive markets
   - **Unitranche Financing**: Blended senior/junior debt from single lender

## **1.4 Formation Document Sophistication**
**Advanced provisions in organizational documents**:

- **Drag-Along Rights**: Majority can force minority to sell in M&A transaction
- **Tag-Along Rights**: Minority can join sale by majority
- **Preemptive Rights**: Rights to maintain ownership percentage in new issuances
- **Approval Rights**: Supermajority or unanimous consent for major decisions
- **Deadlock Resolution**: Shotgun clauses, Russian roulette, Texas shootout
- **Vesting Schedules**: Founder equity subject to time or performance milestones
- **Good/Bad Leaver Provisions**: Different treatment based on departure circumstances

**Certificate Fast-Track Note**: Corporate Law Certificate holders should focus on the advanced structures and international considerations in this review module.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the primary purpose of a holding company structure?",
          options: ["Simplify operations", "Asset protection and tax optimization", "Reduce paperwork", "Increase marketing effectiveness"],
          correctAnswer: 1,
          explanation: "Holding companies are primarily used for asset protection, tax optimization, and operational separation of different business units."
        },
        {
          id: 2,
          question: "In how many states are Series LLCs currently available?",
          options: ["5 states", "10 states", "Approximately 20 states", "All 50 states"],
          correctAnswer: 2,
          explanation: "Series LLCs are available in approximately 20 states including Delaware, Texas, and Illinois."
        },
        {
          id: 3,
          question: "What is a common deadlock resolution mechanism in joint ventures?",
          options: ["Shotgun clause", "Mediation", "Arbitration", "Court litigation"],
          correctAnswer: 0,
          explanation: "Shotgun clauses allow one party to name a price, forcing the other to either buy or sell at that price, resolving deadlocks."
        },
        {
          id: 4,
          question: "What US tax rules apply to Controlled Foreign Corporations?",
          options: ["Subpart F and GILTI", "FIRPTA", "BEAT", "FDII"],
          correctAnswer: 0,
          explanation: "Subpart F and GILTI (Global Intangible Low-Taxed Income) rules apply to US shareholders of Controlled Foreign Corporations."
        },
        {
          id: 5,
          question: "What voting ratio is common for super-voting stock?",
          options: ["2:1", "5:1", "10:1", "20:1"],
          correctAnswer: 2,
          explanation: "Super-voting stock commonly has 10:1 voting ratios, allowing founders to maintain control with reduced economic ownership."
        },
        {
          id: 6,
          question: "What does SAFE stand for in startup financing?",
          options: ["Secure Agreement for Future Equity", "Simple Agreement for Future Equity", "Standard Agreement for Fixed Equity", "Structured Agreement for Financial Exchange"],
          correctAnswer: 1,
          explanation: "SAFE stands for Simple Agreement for Future Equity, a popular instrument for early-stage startup financing."
        },
        {
          id: 7,
          question: "What right allows minority shareholders to join a sale by majority shareholders?",
          options: ["Drag-along right", "Tag-along right", "Preemptive right", "First refusal right"],
          correctAnswer: 1,
          explanation: "Tag-along rights allow minority shareholders to participate in a sale initiated by majority shareholders on the same terms."
        },
        {
          id: 8,
          question: "What is mezzanine financing?",
          options: ["Senior secured debt", "Subordinated debt with equity features", "Short-term working capital loans", "Government-guaranteed loans"],
          correctAnswer: 1,
          explanation: "Mezzanine financing is subordinated debt that often includes equity features like warrants or conversion rights."
        },
        {
          id: 9,
          question: "What international tax structure has been largely eliminated by OECD BEPS?",
          options: ["Double Irish with Dutch Sandwich", "Check-the-box planning", "Hybrid entity structures", "Permanent establishment planning"],
          correctAnswer: 0,
          explanation: "The Double Irish with Dutch Sandwich structure has been largely eliminated by OECD Base Erosion and Profit Shifting (BEPS) actions."
        },
        {
          id: 10,
          question: "What provision allows majority shareholders to force minority to sell in an M&A transaction?",
          options: ["Tag-along right", "Drag-along right", "Preemptive right", "Anti-dilution right"],
          correctAnswer: 1,
          explanation: "Drag-along rights allow majority shareholders to force minority shareholders to participate in a sale of the company."
        },
        {
          id: 11,
          question: "What is unitranche financing?",
          options: ["Government-backed loans", "Blended senior/junior debt from single lender", "Equipment financing", "Factoring arrangements"],
          correctAnswer: 1,
          explanation: "Unitranche financing blends senior and junior debt components into a single loan facility from one lender."
        },
        {
          id: 12,
          question: "What triggers might cause convertible notes to convert to equity?",
          options: ["Qualified financing event", "Change in management", "Office relocation", "New marketing campaign"],
          correctAnswer: 0,
          explanation: "Convertible notes typically convert to equity upon a qualified financing event, usually a priced equity round meeting certain criteria."
        },
        {
          id: 13,
          question: "What is the main risk of creating a permanent establishment in a foreign country?",
          options: ["Currency exchange risk", "Creating taxable presence", "Language barriers", "Shipping delays"],
          correctAnswer: 1,
          explanation: "Creating a permanent establishment risks subjecting the company to taxation in the foreign country on business profits attributable to that establishment."
        },
        {
          id: 14,
          question: "What are 'good leaver' and 'bad leaver' provisions?",
          options: ["Employment termination clauses", "Different equity treatment based on departure circumstances", "Office access rules", "Client file management procedures"],
          correctAnswer: 1,
          explanation: "Good leaver/bad leaver provisions determine different equity treatment based on whether departure is voluntary (bad) or involuntary without cause (good)."
        },
        {
          id: 15,
          question: "What must be considered for joint ventures that might trigger HSR filing requirements?",
          options: ["Antitrust considerations", "Environmental regulations", "Employment laws", "Intellectual property protection"],
          correctAnswer: 0,
          explanation: "Larger joint ventures may trigger Hart-Scott-Rodino filing requirements if they meet certain size thresholds."
        },
        {
          id: 16,
          question: "What is the arm's length principle in transfer pricing?",
          options: ["Transactions between related parties should match market rates", "All transactions must be at cost", "Prices must be approved by government", "Only actual costs can be charged"],
          correctAnswer: 0,
          explanation: "The arm's length principle requires that transactions between related parties be priced as if they were between unrelated parties in the open market."
        },
        {
          id: 17,
          question: "What do sunset provisions in multi-class stock structures provide?",
          options: ["Automatic conversion to single class after certain events", "Required dividend payments", "Mandatory stock buybacks", "Forced company sale"],
          correctAnswer: 0,
          explanation: "Sunset provisions automatically convert multi-class stock to single class after certain events like founder departure or time period."
        },
        {
          id: 18,
          question: "What is covenant-lite loan financing?",
          options: ["Loans with reduced lender protections", "Government-guaranteed loans", "Zero-interest loans", "Loans with equity conversion features"],
          correctAnswer: 0,
          explanation: "Covenant-lite loans have reduced financial and operational covenants, providing borrowers with more flexibility but less lender protection."
        },
        {
          id: 19,
          question: "What election allows flexible tax treatment of entity classification?",
          options: ["Check-the-box election", "S-election", "C-election", "FATCA election"],
          correctAnswer: 0,
          explanation: "Check-the-box elections allow entities to choose their tax classification (corporation, partnership, disregarded entity) for US tax purposes."
        },
        {
          id: 20,
          question: "What right allows shareholders to maintain ownership percentage in new issuances?",
          options: ["Preemptive right", "Tag-along right", "Drag-along right", "First refusal right"],
          correctAnswer: 0,
          explanation: "Preemptive rights allow existing shareholders to purchase new issuances to maintain their proportional ownership percentage."
        }
      ]
    },
    {
      id: 2,
      title: "Fast-Track: Corporate Governance (Advanced)",
      content: `
# Module 2: Fast-Track Review - Advanced Corporate Governance

**Note**: This module reviews and builds upon Corporate Law Certificate Module 2 with advanced governance concepts.

## **2.1 Board Committee Specialization**
**Advanced board committee structures and responsibilities**:

1. **Risk Committee**
   - **Mandate**: Enterprise risk management oversight
   - **Areas**: Strategic risk, operational risk, financial risk, compliance risk
   - **Metrics**: Risk appetite framework, risk tolerance levels, key risk indicators
   - **Regulatory Expectations**: Increasing focus post-financial crisis
   - **Composition**: Directors with risk management expertise

2. **Technology/Cybersecurity Committee**
   - **Emerging Need**: Digital transformation, data privacy, cyber threats
   - **Responsibilities**: IT strategy, cybersecurity oversight, digital innovation
   - **Expertise**: Increasing demand for tech-savvy directors
   - **Regulatory Focus**: SEC cybersecurity disclosure guidance, state privacy laws
   - **Incident Response**: Board role in cyber incident management

3. **Sustainability/ESG Committee**
   - **Investor Demand**: Growing focus on Environmental, Social, and Governance factors
   - **Reporting Frameworks**: SASB, TCFD, GRI, integrated reporting
   - **Stakeholder Capitalism**: Beyond shareholder primacy
   - **Climate Risk**: Physical and transition risks, scenario analysis
   - **Diversity & Inclusion**: Board and workforce diversity metrics

## **2.2 Director Independence & Conflicts**
**Advanced independence standards and conflict management**:

- **NYSE/Nasdaq Requirements**: Majority independent directors, compensation/nominating committee independence
- **Enhanced Independence Standards**: No material relationships (5-year look-back for NYSE)
- **Affiliated Directors**: Representatives of significant shareholders, strategic partners
- **Interlocking Directorates**: Section 8 of Clayton Act prohibits competing companies sharing directors
- **Related Party Transactions**: SEC Item 404 disclosure, board/committee approval requirements
- **Conflict Minerals**: Dodd-Frank Section 1502, supply chain due diligence

**Director Overboarding**:
- **Institutional Guidelines**: ISS recommends max 5 public company boards (1 as CEO), Glass Lewis max 4-5
- **Time Commitment**: Average 250+ hours annually per public board
- **Committee Limits**: Audit committee service typically limited to 3 companies maximum

## **2.3 Shareholder Activism & Engagement**
**Managing shareholder relationships in sophisticated markets**:

1. **Activist Campaign Types**
   - **Board Representation**: Proxy contests for board seats
   - **M&A Activism**: Push for sale, spin-off, or acquisition
   - **Capital Allocation**: Demand for dividends, buybacks, debt reduction
   - **Governance Changes**: Declassify board, eliminate poison pill, majority voting
   - **Environmental/Social**: ESG-related proposals and campaigns

2. **Defense Strategies**
   - **Poison Pills**: Rights plans with 10-20% trigger (now less common)
   - **Staggered Boards**: Classified boards with 3-year terms (declining due to declassification trends)
   - **Advance Notice Bylaws**: Requirements for shareholder nominations/proposals
   - **Engagement Protocols**: Proactive shareholder communication programs
   - **Universal Proxy Cards**: New SEC rules for contested elections

3. **Institutional Investor Influence**
   - **Proxy Advisors**: ISS, Glass Lewis recommendations increasingly influential
   - **Voting Guidelines**: ESG integration in voting policies
   - **Stewardship Codes**: UK model adopted in various jurisdictions
   - **Big Three**: BlackRock, Vanguard, State Street control ~25% of S&P 500 votes

## **2.4 Executive Compensation Complexity**
**Advanced compensation structures and regulatory challenges**:

- **Say-on-Pay**: Dodd-Frank required shareholder advisory votes (typically every 1-3 years)
- **Clawback Policies**: Dodd-Frank requires recovery of incentive compensation after accounting restatements (SEC final rules pending)
- **Performance Metrics**: Increasing use of ESG metrics in incentive plans (30% of S&P 500 in 2022)
- **Equity Plan Design**: Burn rate, dilution, overhang analysis
- **Section 162(m) Limits**: $1M deduction limit for covered employees, performance-based exception largely eliminated by TCJA
- **SEC Disclosure**: CD&A (Compensation Discussion & Analysis), pay ratio, pay versus performance

**Proxy Advisor Scrutiny**:
- **ISS Evaluation**: Quantitative (pay-for-performance) and qualitative analysis
- **Glass Lewis**: Similar but distinct methodology
- **Response Strategies**: Engagement, disclosure enhancement, plan design adjustments

## **2.5 Crisis Governance**
**Board leadership during corporate crises**:

1. **Litigation Crisis**
   - **Special Committees**: Independent directors for internal investigations
   - **Document Preservation**: Litigation holds, e-discovery protocols
   - **Directors & Officers (D&O) Insurance**: Side A coverage for non-indemnifiable losses
   - **Regulatory Cooperation**: Benefits and risks of self-reporting

2. **Financial Crisis**
   - **Turnaround Committees**: Focus on liquidity, restructuring options
   - **Creditor Communications**: Managing lender relationships
   - **Bankruptcy Considerations**: Fiduciary duties shift to creditors in zone of insolvency
   - **Going Concern Analysis**: Auditor requirements, disclosure obligations

3. **Reputational Crisis**
   - **Crisis Management Plans**: Pre-established protocols
   - **Stakeholder Communication**: Coordinated messaging
   - **Social Media Management**: Rapid response capabilities
   - **Board Visibility**: When to involve board vs. management-led response

**Certificate Fast-Track Note**: Focus on advanced committee structures, activism defense, and crisis governance in this review module.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What emerging board committee focuses on digital transformation and cyber threats?",
          options: ["Risk Committee", "Technology/Cybersecurity Committee", "Audit Committee", "Nominating Committee"],
          correctAnswer: 1,
          explanation: "Technology/Cybersecurity committees are emerging to oversee IT strategy, digital innovation, and cybersecurity risks."
        },
        {
          id: 2,
          question: "What percentage of S&P 500 companies had ESG metrics in executive compensation plans in 2022?",
          options: ["10%", "30%", "50%", "70%"],
          correctAnswer: 1,
          explanation: "Approximately 30% of S&P 500 companies incorporated ESG metrics in executive compensation plans in 2022."
        },
        {
          id: 3,
          question: "What law prohibits competing companies from sharing directors?",
          options: ["Section 8 of Clayton Act", "Section 10(b) of Exchange Act", "Section 16 of Securities Act", "Section 162(m) of Tax Code"],
          correctAnswer: 0,
          explanation: "Section 8 of the Clayton Act prohibits interlocking directorates between competing corporations."
        },
        {
          id: 4,
          question: "What voting recommendation firms are most influential in proxy contests?",
          options: ["Moody's and S&P", "ISS and Glass Lewis", "Deloitte and PwC", "McKinsey and BCG"],
          correctAnswer: 1,
          explanation: "Institutional Shareholder Services (ISS) and Glass Lewis are the dominant proxy advisory firms."
        },
        {
          id: 5,
          question: "What defense mechanism typically has a 10-20% ownership trigger?",
          options: ["Staggered board", "Advance notice bylaw", "Poison pill", "Super-majority voting"],
          correctAnswer: 2,
          explanation: "Poison pills (shareholder rights plans) typically trigger when an acquirer reaches 10-20% ownership."
        },
        {
          id: 6,
          question: "What Dodd-Frank requirement involves shareholder votes on executive compensation?",
          options: ["Say-on-pay", "Clawback rules", "Pay ratio disclosure", "Conflict minerals reporting"],
          correctAnswer: 0,
          explanation: "Dodd-Frank requires say-on-pay shareholder advisory votes on executive compensation."
        },
        {
          id: 7,
          question: "What percentage of S&P 500 votes are controlled by the 'Big Three' asset managers?",
          options: ["10%", "25%", "40%", "60%"],
          correctAnswer: 1,
          explanation: "BlackRock, Vanguard, and State Street control approximately 25% of S&P 500 votes through their index funds."
        },
        {
          id: 8,
          question: "What committee would oversee enterprise risk management?",
          options: ["Audit Committee", "Risk Committee", "Compensation Committee", "Nominating Committee"],
          correctAnswer: 1,
          explanation: "Risk committees are responsible for overseeing enterprise risk management frameworks."
        },
        {
          id: 9,
          question: "What is the maximum number of public company boards ISS recommends for a CEO?",
          options: ["1 outside board", "2 outside boards", "3 outside boards", "4 outside boards"],
          correctAnswer: 0,
          explanation: "ISS recommends that CEOs serve on no more than 1 outside public company board in addition to their own."
        },
        {
          id: 10,
          question: "What disclosure item requires companies to report the ratio of CEO pay to median employee pay?",
          options: ["CD&A", "Pay ratio", "Pay versus performance", "Option overhang"],
          correctAnswer: 1,
          explanation: "Dodd-Frank requires disclosure of the ratio of CEO compensation to median employee compensation."
        },
        {
          id: 11,
          question: "What framework is commonly used for sustainability reporting?",
          options: ["SASB, TCFD, GRI", "GAAP, IFRS, FASB", "ISO, ANSI, IEEE", "SEC, FTC, DOJ"],
          correctAnswer: 0,
          explanation: "Sustainability reporting commonly uses SASB, TCFD, and GRI frameworks for ESG disclosures."
        },
        {
          id: 12,
          question: "To whom do director fiduciary duties shift when a company enters the 'zone of insolvency'?",
          options: ["Shareholders only", "Creditors", "Employees", "Customers"],
          correctAnswer: 1,
          explanation: "When a company enters the zone of insolvency, director fiduciary duties expand to include creditors."
        },
        {
          id: 13,
          question: "What provision requires recovery of incentive compensation after accounting restatements?",
          options: ["Say-on-pay", "Clawback policy", "Performance metrics", "Equity vesting"],
          correctAnswer: 1,
          explanation: "Clawback policies require recovery of incentive compensation paid based on erroneous financial statements."
        },
        {
          id: 14,
          question: "What type of D&O insurance covers non-indemnifiable losses for directors?",
          options: ["Side A coverage", "Side B coverage", "Side C coverage", "Entity coverage"],
          correctAnswer: 0,
          explanation: "Side A D&O coverage protects directors for losses not indemnified by the corporation."
        },
        {
          id: 15,
          question: "What bylaw requires advance notice of shareholder nominations or proposals?",
          options: ["Poison pill bylaw", "Advance notice bylaw", "Staggered board bylaw", "Super-majority bylaw"],
          correctAnswer: 1,
          explanation: "Advance notice bylaws require shareholders to provide notice before making nominations or proposals at meetings."
        },
        {
          id: 16,
          question: "What SEC reporting item addresses related party transactions?",
          options: ["Item 402", "Item 404", "Item 407", "Item 201"],
          correctAnswer: 1,
          explanation: "SEC Item 404 requires disclosure of related party transactions and board approval processes."
        },
        {
          id: 17,
          question: "What is the average annual time commitment for a public company director?",
          options: ["50-100 hours", "150-200 hours", "250+ hours", "400+ hours"],
          correctAnswer: 2,
          explanation: "Public company directors typically spend 250+ hours annually on board and committee responsibilities."
        },
        {
          id: 18,
          question: "What voting structure has become less common due to shareholder pressure?",
          options: ["Majority voting", "Staggered boards", "Annual elections", "Proxy access"],
          correctAnswer: 1,
          explanation: "Staggered boards (classified boards) have become less common due to shareholder campaigns for annual elections."
        },
        {
          id: 19,
          question: "What is the limit on audit committee service recommended by governance guidelines?",
          options: ["1 company maximum", "3 companies maximum", "5 companies maximum", "No specific limit"],
          correctAnswer: 1,
          explanation: "Governance guidelines typically recommend limiting audit committee service to no more than 3 public companies."
        },
        {
          id: 20,
          question: "What Dodd-Frank section addresses conflict minerals disclosure?",
          options: ["Section 1502", "Section 953", "Section 955", "Section 971"],
          correctAnswer: 0,
          explanation: "Dodd-Frank Section 1502 requires disclosure of conflict minerals (tin, tungsten, tantalum, gold) sourcing."
        }
      ]
    },
    {
      id: 3,
      title: "Advanced Contracts & Complex Transactions",
      content: `
# Module 3: Advanced Contracts & Complex Transactions

Master sophisticated contract drafting, negotiation, and complex commercial transaction management.

## **3.1 Complex Commercial Agreement Drafting**
**Advanced provisions in major commercial agreements**:

1. **M&A Agreements**
   - **Representations & Warranties**: Sandbagging vs. anti-sandbagging provisions
   - **Indemnification**: Baskets (deductible vs. first dollar), caps, survival periods
   - **Material Adverse Effect (MAE) Clauses**: Definition, carve-outs, exceptions
   - **Closing Conditions**: Materiality qualifiers, bring-down of representations
   - **Purchase Price Adjustments**: Working capital targets, locked-box mechanisms

2. **Credit Agreements**
   - **Financial Covenants**: Leverage ratios, interest coverage, fixed charge coverage
   - **Events of Default**: Cross-default, cross-acceleration, material adverse change
   - **Affirmative/Negative Covenants**: Restrictions on additional debt, liens, investments
   - **Yank-a-Bank Provisions**: Lender removal mechanisms in syndicated loans
   - **LIBOR Transition**: SOFR and other alternative reference rates

3. **Joint Development Agreements**
   - **Background vs. Foreground IP**: Pre-existing vs. newly developed intellectual property
   - **Improvements**: Rights to improvements made independently
   - **Field of Use Restrictions**: Geographical, application, market segment limitations
   - **Royalty Stacking**: Protection against multiple royalty obligations
   - **Bankruptcy Remote Provisions**: IP licenses that survive bankruptcy (Section 365(n))

## **3.2 Negotiation Strategy & Tactics**
**Advanced negotiation approaches for complex deals**:

- **BATNA/WATNA**: Best/Worst Alternative to Negotiated Agreement analysis
- **ZOPA**: Zone of Possible Agreement identification
- **Anchoring**: Strategic first offers to set negotiation range
- **Framing**: Presenting options to influence perception
- **Logrolling**: Trading on issues of differing importance to parties
- **Contingent Agreements**: "If-then" provisions for uncertain future events
- **Post-Settlement Settlement**: Improving deals after initial agreement

**Cultural Considerations in International Negotiations**:
- **High vs. Low Context**: Communication styles (US: low context, Japan: high context)
- **Monochronic vs. Polychronic**: Time perception (Germany: monochronic, Latin America: polychronic)
- **Individualism vs. Collectivism**: Decision-making orientation
- **Power Distance**: Comfort with hierarchy and authority

## **3.3 Risk Allocation Mechanisms**
**Sophisticated risk management in contracts**:

1. **Liquidated Damages vs. Penalties**
   - **Enforceability Test**: Reasonable forecast of damages at contract formation
   - **Actual Damages Comparison**: Courts may reduce if grossly disproportionate
   - **Exclusive Remedy**: Whether LD provisions replace other damage claims
   - **Caps on Liability**: Typical exclusions for fraud, willful misconduct, IP infringement

2. **Insurance Requirements**
   - **Additional Insured Status**: Contractual risk transfer through insurance
   - **Primary & Non-Contributory**: Ensuring coverage responds first
   - **Waiver of Subrogation**: Preventing insurer from recovering against other party
   - **OCIP/CCIP**: Owner/Contractor Controlled Insurance Programs for construction

3. **Dispute Resolution Design**
   - **Multi-Tiered Clauses**: Negotiation → Mediation → Arbitration/Litigation
   - **Arbitration Rules**: AAA, ICDR, JAMS, ICC selection and customization
   - **Seat of Arbitration**: Legal framework governing arbitration proceedings
   - **Appeal Rights**: Opt-in appellate arbitration (JAMS Optional Arbitration Appeal)
   - **Emergency Arbitrator**: Pre-arbitration relief mechanisms

## **3.4 Regulatory Compliance in Contracts**
**Contractual provisions addressing regulatory requirements**:

- **Data Privacy**: GDPR, CCPA/CPRA, other state privacy law compliance
- **Export Controls**: EAR, ITAR, OFAC sanctions compliance
- **Anti-Corruption**: FCPA, UK Bribery Act representations and covenants
- **Trade Compliance**: Country of origin, customs valuation, import regulations
- **Healthcare**: HIPAA Business Associate Agreements, Stark Law, Anti-Kickback
- **Environmental**: CERCLA/Superfund liability allocations, indemnities

**Cybersecurity Provisions**:
- **Security Standards**: NIST, ISO 27001, SOC 2 compliance requirements
- **Data Breach Response**: Notification timelines, cooperation obligations
- **Security Assessments**: Right to audit, penetration testing requirements
- **Cyber Insurance**: Minimum coverage requirements, proof of insurance

## **3.5 Cross-Border Contract Considerations**
**International contract drafting challenges**:

1. **Choice of Law & Forum**
   - **Enforceability**: Certain jurisdictions more favorable for enforcement
   - **Mandatory Rules**: Local laws that cannot be contracted around
   - **Public Policy**: Provisions contrary to fundamental policies may be unenforceable
   - **UNIDROIT Principles**: Supplementary rules for international contracts

2. **Language Issues**
   - **Controlling Language**: Designation in multilingual contracts
   - **Translation Discrepancies**: Resolution mechanisms for interpretation conflicts
   - **Legal Terminology**: Different meanings in different legal systems

3. **Currency & Payment Risks**
   - **Exchange Rate Mechanisms**: Fixing dates, hedging requirements
   - **Withholding Taxes**: Gross-up provisions for tax indemnification
   - **Payment Methods**: Letters of credit, bank guarantees, escrow arrangements
   - **Sanctions Screening**: Compliance with international sanctions regimes

**Force Majeure Drafting**:
- **COVID-19 Lessons**: Specific pandemic provisions, notice requirements
- **Catch-All Language**: "including but not limited to" vs. exhaustive lists
- **Allocation of Risk**: Who bears risk of increased costs/delays
- **Termination Rights**: Extended force majeure termination thresholds
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the difference between sandbagging and anti-sandbagging provisions?",
          options: ["Sandbagging allows buyer to close despite known breaches; anti-sandbagging prohibits this", "Sandbagging refers to environmental cleanup; anti-sandbagging prevents it", "Both terms mean the same thing", "Sandbagging is about delivery delays; anti-sandbagging speeds up delivery"],
          correctAnswer: 0,
          explanation: "Sandbagging allows buyers to close despite known breaches and still claim indemnification; anti-sandbagging prohibits claims for known breaches."
        },
        {
          id: 2,
          question: "What does BATNA stand for in negotiation theory?",
          options: ["Best Alternative to Negotiated Agreement", "Basic Agreement Terms and Negotiation Approach", "Business Assessment of Transaction Alternatives", "Buyer's Approach to Negotiation Analysis"],
          correctAnswer: 0,
          explanation: "BATNA stands for Best Alternative to Negotiated Agreement - the best option if negotiations fail."
        },
        {
          id: 3,
          question: "What is a 'locked-box' mechanism in M&A transactions?",
          options: ["A fixed purchase price with no adjustments", "Price adjustment based on working capital at closing", "Escrow arrangement for dispute resolution", "Confidentiality provision for financial information"],
          correctAnswer: 0,
          explanation: "Locked-box mechanism fixes purchase price based on historical financial statements, with no post-closing adjustments."
        },
        {
          id: 4,
          question: "What bankruptcy code section allows licensees to retain IP licenses if licensor bankrupts?",
          options: ["Section 362", "Section 365(n)", "Section 503", "Section 1129"],
          correctAnswer: 1,
          explanation: "Bankruptcy Code Section 365(n) allows licensees to retain intellectual property licenses if licensor rejects the contract in bankruptcy."
        },
        {
          id: 5,
          question: "What is replacing LIBOR as a reference rate in credit agreements?",
          options: ["Prime Rate", "SOFR", "Fed Funds Rate", "Treasury Rate"],
          correctAnswer: 1,
          explanation: "SOFR (Secured Overnight Financing Rate) is replacing LIBOR as the predominant reference rate in credit agreements."
        },
        {
          id: 6,
          question: "What negotiation tactic involves trading on issues of differing importance?",
          options: ["Anchoring", "Framing", "Logrolling", "Bracketing"],
          correctAnswer: 2,
          explanation: "Logrolling involves trading concessions on issues that are more important to one party than the other."
        },
        {
          id: 7,
          question: "What is the enforceability test for liquidated damages provisions?",
          options: ["Must be reasonable forecast of damages at contract formation", "Must equal actual damages exactly", "Must be approved by court in advance", "No test - always enforceable if agreed"],
          correctAnswer: 0,
          explanation: "Liquidated damages must be a reasonable forecast of actual damages at the time of contract formation to be enforceable."
        },
        {
          id: 8,
          question: "What provision prevents insurers from recovering against other parties after paying a claim?",
          options: ["Additional insured status", "Waiver of subrogation", "Primary and non-contributory", "OCIP coverage"],
          correctAnswer: 1,
          explanation: "Waiver of subrogation prevents insurers from seeking recovery from other parties after paying an insured claim."
        },
        {
          id: 9,
          question: "What GDPR contractual provision is required for data processors?",
          options: ["Data Processing Agreement", "HIPAA Business Associate Agreement", "CCPA Service Provider Addendum", "FERPA Compliance Clause"],
          correctAnswer: 0,
          explanation: "GDPR requires Data Processing Agreements between controllers and processors with specific mandatory provisions."
        },
        {
          id: 10,
          question: "What is a 'yank-a-bank' provision in syndicated loans?",
          options: ["Lender removal mechanism", "Interest rate adjustment", "Borrower prepayment right", "Collateral substitution"],
          correctAnswer: 0,
          explanation: "Yank-a-bank provisions allow borrowers to remove lenders causing problems in syndicated loan arrangements."
        },
        {
          id: 11,
          question: "What cultural dimension relates to comfort with hierarchy and authority?",
          options: ["Individualism vs. collectivism", "Power distance", "Uncertainty avoidance", "Long-term orientation"],
          correctAnswer: 1,
          explanation: "Power distance measures comfort with hierarchy and unequal distribution of power in organizations and relationships."
        },
        {
          id: 12,
          question: "What type of basket requires indemnitor to pay all losses once threshold reached?",
          options: ["Deductible basket", "First dollar basket", "Tip basket", "Cap basket"],
          correctAnswer: 0,
          explanation: "Deductible baskets require indemnitor to pay all losses once threshold is reached; first dollar baskets pay from first dollar of loss."
        },
        {
          id: 13,
          question: "What is 'royalty stacking' in joint development agreements?",
          options: ["Multiple royalty obligations for same product", "Royalties paid in installments", "Royalty caps and floors", "Royalty-free licenses"],
          correctAnswer: 0,
          explanation: "Royalty stacking refers to potential multiple royalty obligations if product incorporates multiple licensed technologies."
        },
        {
          id: 14,
          question: "What are UNIDROIT Principles?",
          options: ["Supplementary rules for international contracts", "US contract law rules", "EU commercial regulations", "WTO trade agreements"],
          correctAnswer: 0,
          explanation: "UNIDROIT Principles provide supplementary rules for international commercial contracts when governing law is silent."
        },
        {
          id: 15,
          question: "What does ZOPA stand for in negotiations?",
          options: ["Zone of Possible Agreement", "Zero Opposition Position Area", "Zoned Opportunity for Partnership Agreement", "Zero Option for Payment Arrangement"],
          correctAnswer: 0,
          explanation: "ZOPA stands for Zone of Possible Agreement - the range where mutually acceptable agreements can be reached."
        },
        {
          id: 16,
          question: "What insurance program is common in construction projects for consolidated coverage?",
          options: ["OCIP/CCIP", "D&O Insurance", "E&O Insurance", "Cyber Insurance"],
          correctAnswer: 0,
          explanation: "Owner Controlled Insurance Programs (OCIP) or Contractor Controlled Insurance Programs (CCIP) provide consolidated coverage for construction projects."
        },
        {
          id: 17,
          question: "What is 'anchoring' in negotiation strategy?",
          options: ["Making first offer to set negotiation range", "Sticking to initial position", "Using objective criteria", "Building rapport with counterpart"],
          correctAnswer: 0,
          explanation: "Anchoring involves making the first offer to establish the range for subsequent negotiations."
        },
        {
          id: 18,
          question: "What FCPA provision should be included in international contracts?",
          options: ["Anti-corruption representations and covenants", "Currency exchange clauses", "Import/export compliance", "Tax gross-up provisions"],
          correctAnswer: 0,
          explanation: "Contracts should include FCPA anti-corruption representations, covenants, and audit rights for compliance."
        },
        {
          id: 19,
          question: "What is a multi-tiered dispute resolution clause?",
          options: ["Negotiation → Mediation → Arbitration", "Arbitration only", "Litigation only", "Mediation only"],
          correctAnswer: 0,
          explanation: "Multi-tiered clauses require negotiation, then mediation, before proceeding to arbitration or litigation."
        },
        {
          id: 20,
          question: "What cybersecurity standard is commonly referenced in contracts?",
          options: ["NIST Cybersecurity Framework", "ISO 9001", "FIPS 140-2", "PCI DSS"],
          correctAnswer: 0,
          explanation: "The NIST Cybersecurity Framework is commonly referenced in contracts for cybersecurity requirements."
        }
      ]
    },
    {
      id: 4,
      title: "Advanced Intellectual Property Strategy",
      content: `
# Module 4: Advanced Intellectual Property Strategy

Sophisticated IP management, licensing, litigation, and portfolio development strategies for corporate legal practice.

## **4.1 IP Portfolio Development & Management**
**Strategic IP portfolio creation and optimization**:

1. **Patent Portfolio Strategy**
   - **Offensive vs. Defensive Portfolios**: Assertion vs. freedom-to-operate focus
   - **Portfolio Density**: Number of patents per product/technology area
   - **Geographic Coverage**: Key markets for patent protection (US, EU, China, Japan)
   - **Technology Mapping**: Aligning patents with product roadmaps and R&D
   - **Cost-Benefit Analysis**: Maintenance fee decisions based on portfolio value

2. **Trademark Global Strategy**
   - **Madrid Protocol**: International registration system (124 member countries)
   - **Regional Systems**: EUIPO (EU), ARIPO (Africa), OAPI (French Africa)
   - **Watch Services**: Monitoring for conflicts and infringements globally
   - **Brand Architecture**: House marks, product marks, certification marks
   - **Rebranding Considerations**: Phased implementation, coexistence agreements

3. **Trade Secret Programs**
   - **Classification Systems**: Confidential, restricted, public information categorization
   - **Access Controls**: Role-based access, need-to-know protocols
   - **Employee Education**: Regular training, acknowledgment of policies
   - **Third-Party Management**: Vendor agreements, visitor protocols, audit rights
   - **Incident Response**: Breach investigation, remediation, legal action

## **4.2 Advanced Licensing Strategies**
**Complex IP licensing models and structures**:

- **Field-of-Use Licensing**: Restrictions by geography, application, market segment
- **Cross-Licensing**: Patent pools, defensive patent aggregators (RPX, LOT Network)
- **FRAND Commitments**: Fair, Reasonable, and Non-Discriminatory licensing for standards
- **University/Research Institution Licensing**: Bayh-Dole Act considerations, march-in rights
- **Open Source Compliance**: License compatibility, copyleft obligations, compliance programs

**Royalty Structures**:
- **Running Royalties**: Percentage of sales, units, or other metrics
- **Minimum Annual Royalties**: Guaranteed payments regardless of sales
- **Tiered Royalties**: Different rates based on sales volumes
- **Upfront Payments**: License fees, milestone payments
- **Royalty Stacking Protections**: Caps, most-favored licensee clauses

**Bankruptcy Considerations**:
- **Section 365(n) Protection**: Licensee rights if licensor rejects executory contract
- **Adequate Assurance of Future Performance**: Requirements for assuming IP licenses
- **IP as Collateral**: UCC Article 9 perfection for security interests in IP

## **4.3 IP Litigation & Dispute Resolution**
**Advanced IP litigation strategies and management**:

1. **Patent Litigation Venues**
   - **District Court Selection**: Texas Eastern District (Marshall), Delaware, California Northern
   - **PTAB Proceedings**: IPR (Inter Partes Review), PGR (Post-Grant Review), CBM (Covered Business Method)
   - **ITC Section 337**: Exclusion orders for imported infringing products
   - **Foreign Jurisdictions**: Germany (injunction-friendly), UK (global FRAND rate setting)

2. **Damages Theories**
   - **Lost Profits**: Panduit test (demand, non-infringing alternatives, capacity, profit)
   - **Reasonable Royalty**: Georgia-Pacific factors (15-factor analysis)
   - **Entire Market Value Rule**: When royalty base includes entire product value
   - **Willful Infringement**: Enhanced damages up to 3x (Halo Electronics standard)

3. **Settlement Strategies**
   - **Covenant Not to Sue**: Future protection without admission
   - **Licensing Negotiations**: FRAND rate determinations, portfolio licensing
   - **Structured Settlements**: Phased payments, earn-outs, equity components
   - **Alternative Dispute Resolution**: Mediation, baseball arbitration, early neutral evaluation

## **4.4 IP Due Diligence in M&A**
**Comprehensive IP assessment in corporate transactions**:

- **Chain of Title Verification**: Assignment records, inventor declarations, employment agreements
- **Freedom-to-Operate Analysis**: Patent clearance, non-infringement opinions
- **Validity Assessment**: Prior art searches, prosecution history review
- **Enforcement History**: Past litigation, settlements, ongoing disputes
- **Third-Party Rights**: Licenses (inbound/outbound), joint development agreements
- **Open Source Review**: Code scanning, compliance assessment

**Representations & Warranties**:
- **Ownership**: Sole and exclusive ownership, no encumbrances
- **Validity & Enforceability**: No known validity challenges
- **Non-Infringement**: No infringement of third-party rights
- **No Litigation**: No pending or threatened proceedings
- **Compliance**: All maintenance fees paid, filings current

**Post-Closing Integration**:
- **Assignment Recordation**: Timely recording of assignments with patent/trademark offices
- **License Notification**: Notifying third parties of change of control
- **Employee Retention**: Key inventor/creator retention strategies
- **Portfolio Rationalization**: Evaluating which IP assets to maintain/abandon

## **4.5 International IP Protection Strategies**
**Global IP enforcement and management**:

1. **Patent Prosecution Highway (PPH)**
   - **Accelerated Examination**: Fast-track examination using positive results from other offices
   - **Participant Countries**: 50+ countries including major IP offices
   - **Requirements**: Corresponding claims, timely filing
   - **Benefits**: Faster grants, higher allowance rates, reduced costs

2. **EU Unitary Patent System**
   - **Unitary Patent**: Single patent covering 25 EU member states
   - **Unified Patent Court**: Centralized litigation for participating states
   - **Opt-Out Provisions**: Ability to opt out of UPC jurisdiction for 7+ years
   - **Transition Period**: Sunrise period for opt-out decisions

3. **China IP Developments**
   - **Specialized IP Courts**: Beijing, Shanghai, Guangzhou IP courts
   - **Damage Awards**: Increasing damage awards (up to 5x for willful infringement)
   - **Anti-Suit Injunctions**: Global litigation strategy tool
   - **Patent Linkage**: Pharmaceutical patent dispute resolution mechanism

**Data Privacy & IP Intersection**:
- **GDPR Trade Secret Protection**: Balancing transparency with IP protection
- **Employee Data**: Ownership of employee-created IP, monitoring boundaries
- **Cross-Border Data Transfers**: Impact on global IP management systems
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What international trademark registration system covers 124 member countries?",
          options: ["Madrid Protocol", "Paris Convention", "Berne Convention", "TRIPS Agreement"],
          correctAnswer: 0,
          explanation: "The Madrid Protocol allows international trademark registration covering 124 member countries through a single application."
        },
        {
          id: 2,
          question: "What bankruptcy code section protects licensees if licensor rejects IP license?",
          options: ["Section 362", "Section 365(n)", "Section 1129", "Section 503"],
          correctAnswer: 1,
          explanation: "Bankruptcy Code Section 365(n) allows licensees to retain IP licenses if licensor rejects the executory contract."
        },
        {
          id: 3,
          question: "What patent office proceeding allows third parties to challenge patent validity?",
          options: ["IPR (Inter Partes Review)", "Reissue", "Reexamination", "Supplemental Examination"],
          correctAnswer: 0,
          explanation: "Inter Partes Review (IPR) allows third parties to challenge patent validity before the Patent Trial and Appeal Board."
        },
        {
          id: 4,
          question: "What test is used for lost profits damages in patent infringement?",
          options: ["Panduit test", "Georgia-Pacific factors", "Whole market value rule", "Hypothetical negotiation"],
          correctAnswer: 0,
          explanation: "The Panduit test (demand, non-infringing alternatives, manufacturing capacity, profit) is used for lost profits damages."
        },
        {
          id: 5,
          question: "What is the maximum enhancement for willful patent infringement under Halo standard?",
          options: ["2x damages", "3x damages", "5x damages", "No limit"],
          correctAnswer: 1,
          explanation: "Courts may enhance damages up to 3x for willful infringement under the Halo Electronics standard."
        },
        {
          id: 6,
          question: "What FRAND commitment applies to standard-essential patents?",
          options: ["Fair, Reasonable, and Non-Discriminatory", "Free, Regular, and Neutral Distribution", "Fixed Rate and Non-Deceptive", "Flexible, Reliable, and Neutral Development"],
          correctAnswer: 0,
          explanation: "FRAND stands for Fair, Reasonable, and Non-Discriminatory licensing commitments for standard-essential patents."
        },
        {
          id: 7,
          question: "What is the Patent Prosecution Highway (PPH)?",
          options: ["Fast-track examination using positive results from other offices", "Physical location for patent filings", "Online patent database", "Patent attorney certification program"],
          correctAnswer: 0,
          explanation: "PPH allows accelerated patent examination using positive examination results from other participating patent offices."
        },
        {
          id: 8,
          question: "What EU system provides single patent protection across member states?",
          options: ["Unitary Patent System", "European Patent Convention", "Community Patent System", "EU IP Harmonization"],
          correctAnswer: 0,
          explanation: "The Unitary Patent System provides single patent protection across participating EU member states."
        },
        {
          id: 9,
          question: "What Bayh-Dole Act provision allows government march-in rights?",
          options: ["Government can license to others if not commercialized", "Automatic government ownership", "Mandatory licensing to competitors", "Price controls on products"],
          correctAnswer: 0,
          explanation: "Bayh-Dole allows government march-in rights to license federally-funded inventions to others under certain conditions."
        },
        {
          id: 10,
          question: "What specialized IP courts exist in China?",
          options: ["Beijing, Shanghai, Guangzhou", "Hong Kong, Macau, Taiwan", "Shenzhen, Chengdu, Wuhan", "Tianjin, Nanjing, Hangzhou"],
          correctAnswer: 0,
          explanation: "China has specialized IP courts in Beijing, Shanghai, and Guangzhou for handling IP disputes."
        },
        {
          id: 11,
          question: "What is a defensive patent aggregator?",
          options: ["Company that buys patents for defensive purposes", "Patent litigation firm", "Patent valuation service", "Patent examination agency"],
          correctAnswer: 0,
          explanation: "Defensive patent aggregators like RPX and LOT Network acquire patents for defensive purposes to protect members from litigation."
        },
        {
          id: 12,
          question: "What ITC section provides exclusion orders for infringing imports?",
          options: ["Section 337", "Section 201", "Section 301", "Section 232"],
          correctAnswer: 0,
          explanation: "ITC Section 337 investigations can result in exclusion orders preventing importation of infringing products."
        },
        {
          id: 13,
          question: "What open source license type requires derivative works to be open source?",
          options: ["Copyleft licenses", "Permissive licenses", "Proprietary licenses", "Commercial licenses"],
          correctAnswer: 0,
          explanation: "Copyleft licenses (like GPL) require derivative works to be distributed under the same open source terms."
        },
        {
          id: 14,
          question: "What is the Georgia-Pacific test used for?",
          options: ["Determining reasonable royalty damages", "Assessing patent validity", "Evaluating trademark infringement", "Calculating lost profits"],
          correctAnswer: 0,
          explanation: "The 15-factor Georgia-Pacific test is used to determine reasonable royalty damages in patent infringement cases."
        },
        {
          id: 15,
          question: "What is 'portfolio density' in patent strategy?",
          options: ["Number of patents per product/technology area", "Geographic coverage of patents", "Age distribution of patent portfolio", "Cost per patent in portfolio"],
          correctAnswer: 0,
          explanation: "Portfolio density refers to the number of patents covering a particular product or technology area."
        },
        {
          id: 16,
          question: "What UK development impacts global FRAND rate setting?",
          options: ["UK courts setting global FRAND rates", "UK patent office guidelines", "UK competition authority rulings", "UK parliamentary legislation"],
          correctAnswer: 0,
          explanation: "UK courts have asserted jurisdiction to set global FRAND rates for standard-essential patents."
        },
        {
          id: 17,
          question: "What is a 'most-favored licensee' clause?",
          options: ["Guarantees licensee gets best terms offered to others", "Requires exclusive licensing", "Prohibits sublicensing", "Sets minimum royalty rates"],
          correctAnswer: 0,
          explanation: "Most-favored licensee clauses guarantee the licensee receives terms at least as favorable as those offered to other licensees."
        },
        {
          id: 18,
          question: "What UCC article governs security interests in intellectual property?",
          options: ["Article 9", "Article 2", "Article 3", "Article 4"],
          correctAnswer: 0,
          explanation: "UCC Article 9 governs security interests in intellectual property, requiring proper perfection through filing."
        },
        {
          id: 19,
          question: "What German characteristic makes it popular for patent litigation?",
          options: ["Injunction-friendly courts", "Low litigation costs", "Fast discovery process", "Jury trials available"],
          correctAnswer: 0,
          explanation: "German courts are known for being injunction-friendly, making them popular for patent enforcement."
        },
        {
          id: 20,
          question: "What is the 'entire market value rule' in patent damages?",
          options: ["Royalty base can include entire product value", "Only patented component value considered", "Market share determines damages", "Industry standards set royalty rates"],
          correctAnswer: 0,
          explanation: "The entire market value rule allows royalty base to include the entire product value if patented feature drives demand."
        }
      ]
    },
    {
      id: 5,
      title: "Complex Employment Law & Executive Compensation",
      content: `
# Module 5: Complex Employment Law & Executive Compensation

Advanced employment law issues, executive compensation structures, and sophisticated workforce management strategies.

## **5.1 Executive Employment Agreements**
**Complex provisions in C-suite employment contracts**:

- **Term & Termination**: Fixed term vs. at-will with severance protections
- **Compensation Structure**: Base salary, annual bonus, long-term incentives, equity grants
- **Change-in-Control Provisions**: Single vs. double trigger, excise tax gross-ups (now less common)
- **Restrictive Covenants**: Non-compete, non-solicit, non-disparagement, confidentiality
- **Clawback Provisions**: Dodd-Frank requirements, misconduct triggers, financial restatement triggers
- **Indemnification & D&O Insurance**: Advancement rights, coverage specifications
- **Dispute Resolution**: Arbitration agreements, venue selection, fee-shifting provisions

**Golden Parachute Rules**:
- **Section 280G**: Excess parachute payments subject to 20% excise tax and non-deductibility
- **Shareholder Approval**: Say-on-golden-parachute votes under Dodd-Frank
- **Best Net/Cutback Provisions**: Tax optimization mechanisms
- **Private Company Considerations**: Different tax implications and shareholder dynamics

## **5.2 Equity Compensation Complexity**
**Sophisticated equity award structures**:

1. **Performance-Based Awards**
   - **Metrics**: TSR (Total Shareholder Return), EPS, ROIC, strategic objectives
   - **Relative TSR**: Performance vs. peer group or index
   - **Modifiers**: Discretionary adjustments, ESG metrics integration
   - **Vesting Schedules**: Cliff vs. graded, performance periods, measurement dates

2. **Stock Option Design**
   - **Exercise Price**: Fair market value determination methodologies
   - **Tax Treatment**: NQSO vs. ISO (Incentive Stock Option) differences
   - **Post-Termination Exercise Periods**: Typically 90 days for termination, longer for retirement
   - **Reload Options**: Now largely eliminated due to accounting and governance concerns

3. **Restricted Stock Units (RSUs)**
   - **Settlement Timing**: Deferral elections, retirement-eligible provisions
   - **Dividend Equivalents**: Paid during vesting period or accrued
   - **Tax Planning**: Section 83(b) elections not available for RSUs
   - **Double-Trigger RSUs**: Accelerate only upon termination following change-in-control

**Accounting Considerations**:
- **ASC 718**: Stock compensation expense recognition
- **Black-Scholes Valuation**: For stock options
- **Expected Term**: Employee exercise behavior modeling
- **Forfeiture Rates**: Historical turnover analysis

## **5.3 Global Workforce Management**
**International employment law complexities**:

- **Local Law Compliance**: Employment contracts, termination restrictions, works council requirements
- **Expatriate Arrangements**: Tax equalization, housing allowances, home leave policies
- **Global Mobility**: Immigration compliance, permanent establishment risks
- **Data Privacy**: GDPR employee data protections, cross-border data transfer mechanisms
- **Collective Labor Relations**: Information/consultation requirements, co-determination (Germany)

**Key Country Variations**:
- **UK**: Unfair dismissal protections after 2 years, TUPE regulations for business transfers
- **Germany**: Works councils, strict termination protections, co-determination for large companies
- **France**: 35-hour workweek (with exceptions), strong collective bargaining, complex dismissal procedures
- **China**: Labor contract law, statutory severance, collective consultation requirements
- **UAE**: Limited-term contracts, limited employee protections, sponsorship system

## **5.4 Whistleblower Program Management**
**Sophisticated whistleblower compliance programs**:

1. **Dodd-Frank Bounty Program**
   - **SEC Awards**: 10-30% of monetary sanctions over $1M
   - **CFTC Awards**: Similar program for commodities violations
   - **IRS Whistleblower Program**: 15-30% of collected proceeds
   - **False Claims Act**: Qui tam provisions with 15-30% shares

2. **Internal Reporting Systems**
   - **Anonymous Hotlines**: Multi-lingual, 24/7 availability
   - **Web Portals**: Secure, confidential reporting mechanisms
   - **Triage Procedures**: Initial assessment, escalation protocols
   - **Non-Retaliation Protections**: Training, monitoring, enforcement

3. **Investigation Protocols**
   - **Privilege Considerations**: Attorney-client privilege, work product doctrine
   - **Documentation**: Interview notes, evidence collection, chain of custody
   - **Remediation**: Corrective actions, process improvements, disciplinary measures
   - **Reporting**: Board reporting, regulatory disclosure obligations

**Cross-Border Whistleblower Issues**:
- **GDPR Conflicts**: Anonymity vs. data subject rights
- **Blocking Statutes**: Laws prohibiting cooperation with foreign investigations
- **Attorney-Client Privilege**: Different standards in different jurisdictions
- **Data Localization**: Restrictions on transferring investigation data across borders

## **5.5 Workplace Technology & Privacy**
**Emerging legal issues in digital workplace**:

- **Employee Monitoring**: Electronic communications monitoring, GPS tracking, biometric data
- **Bring Your Own Device (BYOD)**: Security policies, privacy expectations, data wipe capabilities
- **Social Media Policies**: NLRA protections for concerted activity, privacy considerations
- **Artificial Intelligence in Employment**: Algorithmic bias, discrimination risks, transparency requirements
- **Remote Work Arrangements**: Wage/hour compliance, expense reimbursement, workers' compensation

**Cybersecurity & Employment Intersection**:
- **Training Requirements**: Security awareness, phishing simulation, incident reporting
- **Background Checks**: Enhanced screening for IT positions
- **Termination Protocols**: System access revocation, data retrieval
- **Trade Secret Protection**: Technical controls for confidential information

**Genetic Information Privacy**:
- **GINA**: Prohibits discrimination based on genetic information
- **Wellness Programs**: Limited allowance for genetic information collection
- **Family Medical History**: Treated as genetic information under GINA
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What tax section imposes 20% excise tax on excess parachute payments?",
          options: ["Section 162(m)", "Section 280G", "Section 409A", "Section 83(b)"],
          correctAnswer: 1,
          explanation: "Section 280G imposes 20% excise tax on excess parachute payments and makes them non-deductible to the company."
        },
        {
          id: 2,
          question: "What is the typical post-termination exercise period for stock options?",
          options: ["30 days", "90 days", "180 days", "1 year"],
          correctAnswer: 1,
          explanation: "Stock options typically must be exercised within 90 days of termination of employment."
        },
        {
          id: 3,
          question: "What Dodd-Frank requirement involves shareholder votes on change-in-control payments?",
          options: ["Say-on-pay", "Say-on-frequency", "Say-on-golden-parachute", "Clawback rules"],
          correctAnswer: 2,
          explanation: "Dodd-Frank requires say-on-golden-parachute shareholder advisory votes on change-in-control payments."
        },
        {
          id: 4,
          question: "What UK regulation governs business transfers and employee protections?",
          options: ["TUPE", "GDPR", "Equality Act", "Working Time Regulations"],
          correctAnswer: 0,
          explanation: "TUPE (Transfer of Undertakings Protection of Employment) regulations protect employees in business transfers."
        },
        {
          id: 5,
          question: "What SEC whistleblower award range is provided under Dodd-Frank?",
          options: ["5-15% of sanctions", "10-30% of sanctions over $1M", "Fixed $10,000 awards", "No monetary awards"],
          correctAnswer: 1,
          explanation: "Dodd-Frank provides SEC whistleblower awards of 10-30% of monetary sanctions over $1 million."
        },
        {
          id: 6,
          question: "What accounting standard governs stock compensation expense?",
          options: ["ASC 718", "ASC 606", "ASC 842", "ASC 350"],
          correctAnswer: 0,
          explanation: "ASC 718 governs the accounting treatment for stock-based compensation expenses."
        },
        {
          id: 7,
          question: "What German institution represents employees in workplace decisions?",
          options: ["Works council", "Trade union", "Labor court", "Federal employment agency"],
          correctAnswer: 0,
          explanation: "Works councils (Betriebsrat) represent employees in German companies with certain consultation rights."
        },
        {
          id: 8,
          question: "What is a 'double-trigger' acceleration provision?",
          options: ["Acceleration requires both change-in-control and termination", "Automatic acceleration at change-in-control", "Acceleration requires shareholder approval", "Acceleration based solely on performance"],
          correctAnswer: 0,
          explanation: "Double-trigger acceleration requires both a change-in-control and subsequent termination of employment."
        },
        {
          id: 9,
          question: "What law prohibits genetic information discrimination?",
          options: ["GINA", "ADA", "ADEA", "Title VII"],
          correctAnswer: 0,
          explanation: "GINA (Genetic Information Nondiscrimination Act) prohibits discrimination based on genetic information."
        },
        {
          id: 10,
          question: "What valuation method is used for stock option accounting?",
          options: ["Black-Scholes model", "Discounted cash flow", "Comparable company analysis", "Net asset value"],
          correctAnswer: 0,
          explanation: "The Black-Scholes model is commonly used to value stock options for accounting purposes under ASC 718."
        },
        {
          id: 11,
          question: "What is a 'cutback' provision in change-in-control agreements?",
          options: ["Reduces payments to avoid excise taxes", "Increases payments to cover taxes", "Eliminates all severance payments", "Delays payment timing"],
          correctAnswer: 0,
          explanation: "Cutback provisions reduce payments to the maximum amount that avoids Section 280G excise taxes."
        },
        {
          id: 12,
          question: "What French workweek limitation exists (with exceptions)?",
          options: ["35-hour workweek", "40-hour workweek", "48-hour workweek", "No legal limit"],
          correctAnswer: 0,
          explanation: "France generally has a 35-hour workweek, though numerous exceptions and overtime arrangements exist."
        },
        {
          id: 13,
          question: "What type of stock option provides potential preferential tax treatment?",
          options: ["Incentive Stock Options (ISOs)", "Non-Qualified Stock Options", "Restricted Stock Units", "Stock Appreciation Rights"],
          correctAnswer: 0,
          explanation: "Incentive Stock Options (ISOs) provide potential preferential capital gains tax treatment if holding periods are met."
        },
        {
          id: 14,
          question: "What EU regulation affects employee data privacy?",
          options: ["GDPR", "ePrivacy Directive", "Data Protection Directive", "Digital Services Act"],
          correctAnswer: 0,
          explanation: "GDPR (General Data Protection Regulation) establishes strict requirements for processing employee data in the EU."
        },
        {
          id: 15,
          question: "What is a 'single-trigger' acceleration provision?",
          options: ["Acceleration occurs automatically upon change-in-control", "Requires both change-in-control and termination", "Based solely on performance metrics", "Requires shareholder vote"],
          correctAnswer: 0,
          explanation: "Single-trigger acceleration provisions automatically vest equity upon a change-in-control event."
        },
        {
          id: 16,
          question: "What statute allows private whistleblowers to sue on government's behalf?",
          options: ["False Claims Act", "Dodd-Frank Act", "Sarbanes-Oxley Act", "SEC Whistleblower Program"],
          correctAnswer: 0,
          explanation: "The False Claims Act allows private whistleblowers (relators) to bring qui tam lawsuits on the government's behalf."
        },
        {
          id: 17,
          question: "What election allows early taxation of restricted stock?",
          options: ["Section 83(b) election", "Section 280G election", "Section 409A election", "Section 162(m) election"],
          correctAnswer: 0,
          explanation: "Section 83(b) election allows taxation of restricted stock at grant rather than vesting for potential capital gains treatment."
        },
        {
          id: 18,
          question: "What is 'co-determination' in German corporate governance?",
          options: ["Employee representation on supervisory boards", "Government approval of business decisions", "Shareholder voting requirements", "Industry regulation compliance"],
          correctAnswer: 0,
          explanation: "Co-determination requires employee representatives on the supervisory boards of large German companies."
        },
        {
          id: 19,
          question: "What performance metric compares company performance to peers?",
          options: ["Relative TSR", "Absolute EPS growth", "ROIC", "Revenue growth"],
          correctAnswer: 0,
          explanation: "Relative Total Shareholder Return (TSR) measures performance compared to a peer group or index."
        },
        {
          id: 20,
          question: "What UAE employment characteristic involves employer sponsorship?",
          options: ["Limited-term contracts with sponsorship system", "Permanent employment guaranteed", "Government employment only", "No employment contracts required"],
          correctAnswer: 0,
          explanation: "UAE employment typically involves limited-term contracts with employer sponsorship for work visas."
        }
      ]
    },
    {
      id: 6,
      title: "Advanced Securities Regulation & Capital Markets",
      content: `
# Module 6: Advanced Securities Regulation & Capital Markets

Sophisticated securities law compliance, capital market transactions, and regulatory enforcement strategies.

## **6.1 Complex Securities Offerings**
**Advanced public and private offering structures**:

1. **Follow-on Offerings**
   - **At-the-Market (ATM) Offerings**: Continuous equity issuance programs
   - **Block Trades**: Overnight marketed offerings to institutional investors
   - **Bought Deals**: Underwriter commitment to purchase entire offering
   - **Accelerated Bookbuilds**: Rapid offerings to institutional investors

2. **Convertible Securities**
   - **Convertible Bonds**: Debt with equity conversion option
   - **Convertible Preferred**: Preferred stock convertible to common
   - **Mandatory Convertibles**: Must convert by specified date
   - **Contingent Convertibles (CoCos)**: Convert or write down upon trigger events

3. **Structured Products**
   - **Asset-Backed Securities (ABS)**: Pools of receivables or assets
   - **Mortgage-Backed Securities (MBS)**: Residential or commercial mortgages
   - **Collateralized Loan Obligations (CLOs)**: Pools of leveraged loans
   - **Credit Derivatives**: CDS, CDOs, synthetic structures

## **6.2 SEC Reporting Sophistication**
**Advanced SEC compliance and disclosure strategies**:

- **Non-GAAP Financial Measures**: SEC Regulation G, Item 10(e) of Regulation S-K
- **Key Performance Indicators (KPIs)**: ESG metrics, customer metrics, operational metrics
- **Cybersecurity Disclosure**: SEC 2018 guidance, 2022 proposed rules, incident reporting
- **Human Capital Disclosure**: SEC 2020 rule, workforce composition, talent management
- **Climate Change Disclosure**: SEC 2022 proposed rules, TCFD alignment, Scope 1-3 emissions

**MD&A Enhancement**:
- **Critical Accounting Policies**: Most subjective and complex accounting areas
- **Liquidity & Capital Resources**: Cash flow analysis, debt maturity profiles
- **Off-Balance Sheet Arrangements**: SPEs, variable interest entities, guarantees
- **Contractual Obligations**: Payment schedules, lease commitments, purchase obligations

**Regulation FD Compliance**:
- **Selective Disclosure Prevention**: Controls on analyst/investor communications
   - **Quiet Periods**: Around earnings releases and offerings
   - **Scripting**: Prepared remarks for public presentations
   - **RegFD Officers**: Designated personnel to review disclosures
   - **Taping**: Recording of non-public meetings

## **6.3 Insider Trading Compliance Programs**
**Sophisticated insider trading prevention**:

- **Trading Windows**: Typically open after earnings release until blackout period
- **Pre-Clearance Requirements**: Prior approval for all trades by insiders
- **Rule 10b5-1 Plans**: Affirmative defense through pre-established trading plans
   - **Cooling-Off Periods**: 30-120 days between plan adoption and first trade
   - **Modification Restrictions**: Limited ability to modify or cancel plans
   - **Multiple/Overlapping Plans**: SEC scrutiny of multiple plan usage
   - **Good Faith Requirement**: Cannot adopt when aware of material nonpublic information

- **MNPI Identification & Control**:
   - **Wall Crossings**: Controlled disclosure to select investors for transactions
   - **Need-to-Know Basis**: Limiting access to sensitive information
   - **Document Classification**: Confidential, highly confidential, MNPI designations
   - **Project Names**: Code names for confidential projects

## **6.4 Shareholder Proposal Process**
**Advanced management of shareholder proposals**:

- **Rule 14a-8 Process**: Eligibility, procedural requirements, substantive exclusions
- **No-Action Requests**: SEC staff guidance on excluding proposals
   - **Ordinary Business Exclusion**: (i)(7) - routine business matters
   - **Economic Relevance Exclusion**: (i)(5) - not significantly related to business
   - **Substantial Implementation**: (i)(10) - already substantially implemented
   - **Conflicts with Proxy Rules**: (i)(3) - materially false/misleading

- **Engagement Strategies**:
   - **Proactive Outreach**: Engaging with shareholders before proposal submission
   - **Negotiated Withdrawals**: Agreeing to partial implementation in exchange for withdrawal
   - **Proxy Advisor Engagement**: Discussions with ISS and Glass Lewis
   - **Vote No Campaigns**: When proposals reach the ballot

**Universal Proxy Rules**:
- **SEC Rule 14a-19**: Effective for meetings after August 31, 2022
- **Contested Elections**: Both management and dissident slates on same proxy card
- **Notice Requirements**: Specific timing and content requirements
- **Cost Implications**: May reduce costs for activist campaigns

## **6.5 Capital Markets Enforcement Trends**
**Current SEC enforcement priorities and defense strategies**:

1. **ESG Enforcement**
   - **Greenwashing**: Misleading environmental claims
   - **Fund Naming Rules**: Names must match 80% of portfolio
   - **ESG Integration Claims**: Actual implementation vs. marketing claims
   - **Climate Risk Disclosure**: Material climate-related risks

2. **Cryptocurrency Enforcement**
   - **Security vs. Commodity**: Howey test application to digital assets
   - **Staking Programs**: Potential investment contract characteristics
   - **Exchange Registration**: Requirement for platforms trading securities
   - **Custody Rules**: Safeguarding customer crypto assets

3. **SPAC Enforcement**
   - **Projection Disclosure**: Forward-looking statements in de-SPAC transactions
   - **Conflicts of Interest**: Sponsor compensation, PIPE investments
   - **Due Diligence**: Adequacy of target company investigation
   - **Accounting Issues**: Warrants accounting, merger accounting

**SEC Whistleblower Program**:
- **Record Awards**: Over $1 billion awarded to 300+ whistleblowers since 2012
- **Anti-Retaliation Protections**: Broad protection for reporting violations
- **Anonymous Reporting**: Through attorneys to protect identity
- **Cross-Border Reporting**: International whistleblowers eligible
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What type of offering involves continuous equity issuance through broker-dealers?",
          options: ["At-the-Market (ATM) offering", "Block trade", "Bought deal", "Accelerated bookbuild"],
          correctAnswer: 0,
          explanation: "At-the-Market offerings allow companies to sell shares continuously into the market through broker-dealers at prevailing prices."
        },
        {
          id: 2,
          question: "What SEC regulation governs non-GAAP financial measures?",
          options: ["Regulation G", "Regulation FD", "Regulation S-K", "Regulation S-X"],
          correctAnswer: 0,
          explanation: "Regulation G governs the use of non-GAAP financial measures in public communications."
        },
        {
          id: 3,
          question: "What is the typical cooling-off period for Rule 10b5-1 plans under new SEC rules?",
          options: ["No cooling-off period", "30 days for officers/directors, 120 days for others", "90 days for all insiders", "7 days for all insiders"],
          correctAnswer: 1,
          explanation: "New SEC rules require 30-day cooling-off for officers/directors, 120 days for others before first trade under 10b5-1 plans."
        },
        {
          id: 3,
          question: "What Rule 14a-8 exclusion allows omission of routine business matters?",
          options: ["(i)(7) ordinary business exclusion", "(i)(5) economic relevance exclusion", "(i)(10) substantial implementation", "(i)(3) false/misleading exclusion"],
          correctAnswer: 0,
          explanation: "Rule 14a-8(i)(7) allows exclusion of proposals dealing with ordinary business operations."
        },
        {
          id: 4,
          question: "What are CLOs in structured finance?",
          options: ["Collateralized Loan Obligations", "Convertible Loan Options", "Corporate Liability Obligations", "Commercial Lease Obligations"],
          correctAnswer: 0,
          explanation: "CLOs are Collateralized Loan Obligations - structured products backed by pools of leveraged loans."
        },
        {
          id: 5,
          question: "What SEC rule requires climate-related disclosure in registration statements?",
          options: ["2022 proposed rules", "2010 climate guidance", "No specific climate rules", "Voluntary disclosure only"],
          correctAnswer: 0,
          explanation: "SEC proposed comprehensive climate disclosure rules in 2022, though not yet finalized as of 2023."
        },
        {
          id: 6,
          question: "What is a 'bought deal' in securities offerings?",
          options: ["Underwriter commits to purchase entire offering", "Retail investor focused offering", "Secondary market trading", "Private placement to institutions"],
          correctAnswer: 0,
          explanation: "In a bought deal, the underwriter commits to purchase the entire offering from the issuer before marketing to investors."
        },
        {
          id: 7,
          question: "What SEC rule prevents selective disclosure of material information?",
          options: ["Regulation FD", "Regulation G", "Regulation S-K", "Regulation M"],
          correctAnswer: 0,
          explanation: "Regulation FD (Fair Disclosure) requires public disclosure of material information disclosed to select parties."
        },
        {
          id: 8,
          question: "What is 'greenwashing' in SEC enforcement?",
          options: ["Misleading environmental claims", "Money laundering through environmental projects", "Tax evasion using green credits", "Bribery in environmental approvals"],
          correctAnswer: 0,
          explanation: "Greenwashing refers to making misleading or unsubstantiated environmental claims about products or practices."
        },
        {
          id: 9,
          question: "What SEC rule governs universal proxy cards in contested elections?",
          options: ["Rule 14a-19", "Rule 14a-8", "Rule 14a-2", "Rule 14a-4"],
          correctAnswer: 0,
          explanation: "Rule 14a-19 establishes requirements for universal proxy cards including both management and dissident nominees."
        },
        {
          id: 10,
          question: "What are CoCos in banking regulation?",
          options: ["Contingent Convertibles that convert or write down upon triggers", "Corporate Convertible bonds", "Commercial Credit obligations", "Currency Conversion options"],
          correctAnswer: 0,
          explanation: "CoCos are Contingent Convertibles - bonds that convert to equity or suffer write-downs upon specified trigger events."
        },
        {
          id: 11,
          question: "What SEC item governs Management Discussion & Analysis?",
          options: ["Item 303 of Regulation S-K", "Item 404 of Regulation S-K", "Item 201 of Regulation S-K", "Item 402 of Regulation S-K"],
          correctAnswer: 0,
          explanation: "Item 303 of Regulation S-K governs the content requirements for Management Discussion & Analysis (MD&A)."
        },
        {
          id: 12,
          question: "What is a 'wall crossing' in securities practice?",
          options: ["Controlled disclosure of MNPI to select investors", "Illegal insider trading", "Chinese wall between departments", "Cross-border information sharing"],
          correctAnswer: 0,
          explanation: "Wall crossing involves controlled disclosure of material nonpublic information to select investors under confidentiality agreements."
        },
        {
          id: 13,
          question: "What percentage of portfolio must match a fund's name under SEC rules?",
          options: ["80%", "70%", "90%", "100%"],
          correctAnswer: 0,
          explanation: "SEC fund naming rules generally require at least 80% of portfolio assets match the fund's name."
        },
        {
          id: 14,
          question: "What is a 'block trade' in securities offerings?",
          options: ["Large offering sold overnight to institutions", "Retail investor offering", "Secondary market transaction", "Private placement to founders"],
          correctAnswer: 0,
          explanation: "Block trades are large offerings sold overnight to institutional investors without extensive marketing."
        },
        {
          id: 15,
          question: "What SEC exclusion allows omission of proposals already substantially implemented?",
          options: ["(i)(10) substantial implementation", "(i)(7) ordinary business", "(i)(5) economic relevance", "(i)(3) false/misleading"],
          correctAnswer: 0,
          explanation: "Rule 14a-8(i)(10) allows exclusion if the proposal has already been substantially implemented by the company."
        },
        {
          id: 16,
          question: "What are Scope 1, 2, and 3 emissions in climate disclosure?",
          options: ["Direct, indirect, and value chain emissions", "Regulatory categories", "Tax emission scopes", "Accounting emission classifications"],
          correctAnswer: 0,
          explanation: "Scope 1: direct emissions; Scope 2: indirect from purchased energy; Scope 3: value chain emissions."
        },
        {
          id: 17,
          question: "What is Regulation S-K Item 10(e) about?",
          options: ["Non-GAAP financial measures", "Executive compensation", "Related party transactions", "Risk factors"],
          correctAnswer: 0,
          explanation: "Item 10(e) of Regulation S-K contains specific requirements for presenting non-GAAP financial measures."
        },
        {
          id: 18,
          question: "What SEC test determines if a cryptocurrency is a security?",
          options: ["Howey test", "Reves test", "Risk capital test", "Family resemblance test"],
          correctAnswer: 0,
          explanation: "The SEC applies the Howey test to determine if cryptocurrencies constitute investment contracts (securities)."
        },
        {
          id: 19,
          question: "What is an 'accelerated bookbuild' offering?",
          options: ["Rapid offering to institutional investors", "Slow retail offering", "Private placement to employees", "Secondary market block trade"],
          correctAnswer: 0,
          explanation: "Accelerated bookbuilds are rapid offerings marketed to institutional investors, often completed within 24-48 hours."
        },
        {
          id: 20,
          question: "What SEC proposed rule addresses cybersecurity disclosure?",
          options: ["2022 proposed rules on cybersecurity", "No specific cybersecurity rules", "2005 guidance only", "Voluntary disclosure framework"],
          correctAnswer: 0,
          explanation: "SEC proposed comprehensive cybersecurity disclosure rules in 2022, including incident reporting and governance disclosures."
        }
      ]
    },
    {
      id: 7,
      title: "Mergers & Acquisitions: Advanced Strategies",
      content: `
# Module 7: Mergers & Acquisitions: Advanced Strategies

Sophisticated M&A transactions, due diligence, deal structures, and post-merger integration strategies.

## **7.1 Complex Deal Structures**
**Advanced M&A transaction architectures**:

1. **Reverse Morris Trust**
   - **Structure**: Tax-free spin-off followed by tax-free merger
   - **Requirements**: Historic shareholders maintain >50% voting power and equity value
   - **Benefits**: Tax-efficient divestiture of non-core businesses
   - **Examples**: Verizon/TracFone, Lockheed Martin/Leidos

2. **Up-C (Umbrella Partnership-C Corporation)**
   - **Structure**: Operating partnership with C-corp holding partnership interests
   - **Benefits**: Tax efficiency for pass-through combined with public currency
   - **Considerations**: Complexity, investor understanding, conversion mechanisms
   - **Examples**: Many technology IPOs (Uber, Airbnb pre-IPO restructuring)

3. **SPAC Mergers (de-SPAC)**
   - **Structure**: Special Purpose Acquisition Company merges with target
   - **Process**: SPAC IPO → target identification → de-SPAC merger
   - **Regulatory Scrutiny**: SEC focus on projections, conflicts, due diligence
   - **Market Trends**: Peak in 2020-2021, significant decline in 2022-2023

4. **Cross-Border Structures**
   - **Tax Inversions**: Reincorporation in lower-tax jurisdiction (limited by US rules)
   - **Joint Ventures**: Cross-border JVs with complex governance
   - **Stapled Financing**: Debt attached to acquisition for buyer financing
   - **Earn-outs**: Contingent payments based on post-closing performance

## **7.2 Advanced Due Diligence**
**Sophisticated investigation techniques in M&A**:

- **Data Room Technology**: Virtual data rooms, AI-assisted document review
- **Quality of Earnings (QoE)**: Adjusting EBITDA for one-time/non-recurring items
- **Working Capital Analysis**: Normalized working capital, seasonal adjustments
- **Synergy Validation**: Cost and revenue synergy quantification, realization risks
- **Cyber Due Diligence**: Security assessment, incident history, compliance gaps

**Specialized Due Diligence Areas**:
- **Environmental**: Phase I/II assessments, remediation obligations, climate risks
- **Intellectual Property**: Freedom-to-operate, validity assessments, open source review
- **Employment**: Workforce classification, benefits obligations, collective bargaining
- **Regulatory**: Antitrust, industry-specific regulations, licensing requirements
- **Tax**: NOL limitations, tax attribute preservation, transfer pricing

**Representation & Warranty Insurance**:
- **Market Growth**: Now used in 50%+ of middle-market deals
- **Pricing**: Typically 2-4% of coverage limit
- **Exclusions**: Known issues, fundamental reps, purchase price adjustments
- **Process**: Underwriting diligence, policy negotiation, claims procedures

## **7.3 M&A Agreement Negotiation**
**Advanced provisions and negotiation tactics**:

1. **Material Adverse Effect (MAE) Clauses**
   - **Definition**: Material adverse change in business, financial condition, operations
   - **Carve-outs**: Market/industry declines, economy generally, disclosure matters
   - **Exceptions to Carve-outs**: Disproportionate impact test
   - **Delaware Law**: IBP v. Tyson Foods standard - durationally significant

2. **Indemnification Structures**
   - **Baskets**: Deductible vs. first dollar, tipping baskets
   - **Caps**: Typically 10-20% of purchase price for seller indemnification
   - **Survival Periods**: Fundamental reps (3-6 years), tax reps (statute +), others (12-24 months)
   - **Escrows/Holdbacks**: 10-15% of purchase price for 12-24 months

3. **Purchase Price Adjustments**
   - **Working Capital Targets**: Pegged to historical levels or industry norms
   - **Net Debt**: Definition of debt, cash-like items, transaction expenses
   - **Closing Accounts**: Preparation, review periods, dispute resolution
   - **Locked Box**: Fixed price based on historical balance sheet (no adjustment)

## **7.4 Regulatory Considerations**
**Complex regulatory approvals and strategies**:

- **Hart-Scott-Rodino (HSR) Act**
   - **Thresholds**: Adjust annually (2023: $111.4M, $445.5M, $2.227B)
   - **Waiting Period**: 30 days (15 days for cash tender offers)
   - **Second Requests**: Extended investigation with document production
   - **Gun Jumping**: Prohibition on improper pre-closing coordination

- **Foreign Investment Reviews**
   - **CFIUS**: Committee on Foreign Investment in the United States
   - **FIRRMA**: Expanded jurisdiction to non-controlling investments, critical technologies
   - **EU FDI Screening**: Member state coordination mechanism
   - **UK National Security Act**: Expanded government intervention powers

- **Industry-Specific Regulations**
   - **Banking**: Federal Reserve, OCC approval for bank acquisitions
   - **Insurance**: State insurance department approvals
   - **Telecom**: FCC approval for spectrum license transfers
   - **Healthcare**: Stark Law, Anti-Kickback, state CON requirements

## **7.5 Post-Merger Integration**
**Advanced integration planning and execution**:

1. **Integration Models**
   - **Absorption**: Target fully integrated into acquirer
   - **Preservation**: Target operates independently
   - **Symbiosis**: Selective integration of functions
   - **Holding Company**: Minimal integration, financial control only

2. **Critical Integration Areas**
   - **Cultural Integration**: Assessment, leadership alignment, change management
   - **IT Systems**: Integration vs. best-of-breed selection, data migration
   - **Operations**: Supply chain integration, facility rationalization
   - **Sales & Marketing**: Brand strategy, customer communication, channel integration

3. **Synergy Realization**
   - **Cost Synergies**: Headcount reduction, facility consolidation, procurement savings
   - **Revenue Synergies**: Cross-selling, market expansion, pricing power
   - **Timeline**: Typically 3-5 year realization period
   - **Tracking**: Dedicated synergy tracking systems, accountability

**Retention Strategies**:
- **Stay Bonuses**: Cash payments for key employees remaining post-closing
- **Equity Rollovers**: Target management investing in combined entity
- **Employment Agreements**: New contracts with enhanced terms
- **Cultural Assessment**: Understanding and bridging organizational differences
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What tax-efficient structure involves spin-off followed by merger?",
          options: ["Reverse Morris Trust", "Up-C structure", "SPAC merger", "Taxable asset sale"],
          correctAnswer: 0,
          explanation: "Reverse Morris Trust structures allow tax-free spin-off followed by tax-free merger with another company."
        },
        {
          id: 2,
          question: "What percentage of middle-market deals now use representation & warranty insurance?",
          options: ["10-20%", "30-40%", "50%+", "80-90%"],
          correctAnswer: 2,
          explanation: "Representation & warranty insurance is now used in 50%+ of middle-market M&A transactions."
        },
        {
          id: 3,
          question: "What is the typical pricing for representation & warranty insurance?",
          options: ["1-2% of coverage limit", "2-4% of coverage limit", "5-7% of coverage limit", "10%+ of coverage limit"],
          correctAnswer: 1,
          explanation: "R&W insurance typically costs 2-4% of the coverage limit as a premium."
        },
        {
          id: 4,
          question: "What HSR threshold triggers filing requirements for most transactions?",
          options: ["$111.4M (2023)", "$500M", "$1B", "$5B"],
          correctAnswer: 0,
          explanation: "HSR filing is generally required if transaction value exceeds $111.4M (2023 threshold, adjusted annually)."
        },
        {
          id: 5,
          question: "What Delaware case established the MAE standard?",
          options: ["IBP v. Tyson Foods", "Revlon v. MacAndrews", "Unocal v. Mesa", "Smith v. Van Gorkom"],
          correctAnswer: 0,
          explanation: "IBP v. Tyson Foods established that MAE must be durationally significant to business prospects."
        },
        {
          id: 6,
          question: "What structure involves operating partnership with C-corp holding partnership interests?",
          options: ["Up-C structure", "Reverse Morris Trust", "SPAC", "Stock-for-stock merger"],
          correctAnswer: 0,
          explanation: "Up-C structures involve an operating partnership with a C-corporation holding partnership interests, common in tech IPOs."
        },
        {
          id: 7,
          question: "What is 'Quality of Earnings' in due diligence?",
          options: ["Adjusting EBITDA for one-time/non-recurring items", "Audit of financial statements", "Revenue recognition analysis", "Cash flow verification"],
          correctAnswer: 0,
          explanation: "Quality of Earnings analysis adjusts EBITDA to remove one-time, non-recurring, or non-operational items."
        },
        {
          id: 8,
          question: "What is the typical HSR waiting period for most transactions?",
          options: ["15 days", "30 days", "45 days", "60 days"],
          correctAnswer: 1,
          explanation: "The standard HSR waiting period is 30 days (15 days for cash tender offers or bankruptcy sales)."
        },
        {
          id: 9,
          question: "What is a 'locked box' purchase price mechanism?",
          options: ["Fixed price based on historical balance sheet", "Price adjustment based on closing accounts", "Earn-out based payments", "Contingent value rights"],
          correctAnswer: 0,
          explanation: "Locked box mechanisms fix price based on historical balance sheet date, with no post-closing adjustment."
        },
        {
          id: 10,
          question: "What US committee reviews foreign investments for national security?",
          options: ["CFIUS", "FTC", "DOJ", "SEC"],
          correctAnswer: 0,
          explanation: "CFIUS (Committee on Foreign Investment in the United States) reviews foreign investments for national security concerns."
        },
        {
          id: 11,
          question: "What is the typical indemnification cap in M&A deals?",
          options: ["10-20% of purchase price", "50% of purchase price", "100% of purchase price", "No cap typically"],
          correctAnswer: 0,
          explanation: "Seller indemnification caps typically range from 10-20% of the purchase price in M&A transactions."
        },
        {
          id: 12,
          question: "What SPAC phase involves merger with target company?",
          options: ["de-SPAC transaction", "SPAC IPO", "Trust account funding", "Redemption period"],
          correctAnswer: 0,
          explanation: "The de-SPAC transaction is when the SPAC merges with its target company to take it public."
        },
        {
          id: 13,
          question: "What integration model involves selective integration of functions?",
          options: ["Symbiosis model", "Absorption model", "Preservation model", "Holding company model"],
          correctAnswer: 0,
          explanation: "Symbiosis integration involves selectively integrating some functions while keeping others separate."
        },
        {
          id: 14,
          question: "What law expanded CFIUS jurisdiction to non-controlling investments?",
          options: ["FIRRMA", "HSR Act", "Export Control Reform Act", "USA PATRIOT Act"],
          correctAnswer: 0,
          explanation: "FIRRMA (Foreign Investment Risk Review Modernization Act) expanded CFIUS to review non-controlling investments."
        },
        {
          id: 15,
          question: "What is 'gun jumping' in M&A context?",
          options: ["Improper pre-closing coordination between merging companies", "Early announcement of deal", "Fast-track regulatory approval", "Accelerated closing timeline"],
          correctAnswer: 0,
          explanation: "Gun jumping refers to improper coordination or control exercise before receiving regulatory approvals."
        },
        {
          id: 16,
          question: "What are 'earn-outs' in M&A?",
          options: ["Contingent payments based on post-closing performance", "Upfront cash payments", "Stock consideration", "Debt financing"],
          correctAnswer: 0,
          explanation: "Earn-outs are contingent payments to sellers based on the target's performance after closing."
        },
        {
          id: 17,
          question: "What due diligence assesses environmental risks?",
          options: ["Phase I/II environmental assessments", "Financial audit", "Legal due diligence", "Commercial due diligence"],
          correctAnswer: 0,
          explanation: "Phase I and II environmental assessments evaluate contamination risks and remediation obligations."
        },
        {
          id: 18,
          question: "What retention tool involves key employees investing in combined entity?",
          options: ["Equity rollovers", "Stay bonuses", "Employment agreements", "Severance packages"],
          correctAnswer: 0,
          explanation: "Equity rollovers involve target management investing their equity proceeds into the combined entity."
        },
        {
          id: 19,
          question: "What is a 'tipping basket' in indemnification?",
          options: ["Once threshold reached, indemnitor pays all losses from first dollar", "Indemnitor only pays above threshold", "No indemnification until threshold", "Fixed dollar cap on indemnification"],
          correctAnswer: 0,
          explanation: "Tipping baskets require indemnitor to pay all losses from first dollar once threshold is reached."
        },
        {
          id: 20,
          question: "What is the typical synergy realization timeline?",
          options: ["3-5 years", "1 year", "6 months", "10+ years"],
          correctAnswer: 0,
          explanation: "M&A synergies typically take 3-5 years to fully realize, with costs savings often coming sooner than revenue synergies."
        }
      ]
    },
    {
      id: 8,
      title: "Complex Litigation & Dispute Resolution",
      content: `
# Module 8: Complex Litigation & Dispute Resolution

Advanced litigation strategies, complex dispute management, and sophisticated alternative dispute resolution techniques.

## **8.1 Class Action Defense Strategies**
**Sophisticated defense against class certification and management**:

1. **Class Certification Defense**
   - **Rule 23 Requirements**: Numerosity, commonality, typicality, adequacy
   - **Wal-Mart v. Dukes (2011)**: Heightened commonality requirement
   - **Comcast v. Behrend (2013)**: Rigorous analysis of damages models
   - **Tyson Foods v. Bouaphakeo (2016)**: Statistical evidence in class actions

2. **Class Action Settlements**
   - **Preliminary Approval**: Court evaluation of settlement terms
   - **Notice Programs**: Direct mail, publication, digital notice
   - **Fairness Hearings**: Court determination of settlement fairness
   - **Cy Pres Awards**: Residual funds to related charities
   - **Attorneys' Fees**: Percentage of fund vs. lodestar methods

3. **Multidistrict Litigation (MDL)**
   - **28 U.S.C. § 1407**: Transfer for coordinated pretrial proceedings
   - **JPML**: Judicial Panel on Multidistrict Litigation
   - **Bellwether Trials**: Test cases to gauge jury reactions
   - **Global Settlements**: Comprehensive resolution of all claims

## **8.2 Arbitration Sophistication**
**Advanced arbitration strategies and procedures**:

- **Arbitration Rules Selection**: AAA, ICDR, JAMS, ICC, LCIA, SIAC
- **Arbitrator Selection**: Party-appointed vs. neutral, expertise requirements
- **Emergency Arbitrator**: Pre-arbitration relief mechanisms
- **Procedural Orders**: Timetables, discovery limits, hearing arrangements
- **Award Types**: Final, partial, interim, consent awards

**International Arbitration**:
- **New York Convention**: Enforcement of foreign arbitral awards (166 signatories)
- **Seat of Arbitration**: Legal framework governing arbitration
- **Language Issues**: Translation requirements, bilingual proceedings
- **Cultural Considerations**: Civil vs. common law approaches

**Appellate Arbitration**:
- **JAMS Optional Arbitration Appeal Procedure**: De novo review of awards
- **Baseball Arbitration**: Each party submits number, arbitrator picks one
- **High-Low Arbitration**: Predetermined range for award
- **Final Offer Arbitration**: Parties submit final offers, arbitrator chooses one

## **8.3 e-Discovery Complexity**
**Advanced electronic discovery management**:

1. **Data Preservation**
   - **Legal Holds**: Suspension of routine deletion, hold notices
   - **Custodian Identification**: Key employees with relevant information
   - **Data Sources**: Email, messaging apps, collaboration tools, cloud storage
   - **BYOD Challenges**: Personal device data collection

2. **Collection & Processing**
   - **Forensic Collection**: Bit-for-bit imaging vs. logical collection
   - **Data Processing**: De-duplication, date filtering, search term application
   - **Technology-Assisted Review (TAR)**: Predictive coding, continuous active learning
   - **Privilege Review**: Attorney-client privilege, work product doctrine

3. **Production Formats**
   - **Native Files**: Original file formats with metadata
   - **Load Files**: Database files for document review platforms
   - **TIFF/PDF**: Image formats with extracted text
   - **Metadata Fields**: Custodian, date, file type, path information

**Cost Management**:
- **Proportionality**: Rule 26(b)(1) - discovery proportional to needs of case
- **Phased Discovery**: Sequential rather than simultaneous discovery
- **Cost Shifting**: Allocation of discovery costs based on need/availability
- **Meet & Confer**: Early discussion of discovery scope and protocols

## **8.4 Expert Witness Management**
**Sophisticated use of expert testimony**:

- **Daubert Standard**: Federal Rule of Evidence 702 - reliability and relevance
   - **Testing**: Theory or technique tested
   - **Peer Review**: Publication and peer review
   - **Error Rate**: Known or potential error rate
   - **Standards**: Maintenance of standards
   - **Acceptance**: General acceptance in relevant community

- **Expert Selection Criteria**: Subject matter expertise, testimony experience, communication skills
- **Expert Reports**: Complete statement of opinions, basis and reasons, exhibits
- **Deposition Preparation**: Mock depositions, document review, communication training
- **Cross-Examination Strategies**: Challenging methodology, assumptions, bias

**Economic Experts**:
- **Damages Calculations**: Lost profits, reasonable royalty, business valuation
- **Statistical Analysis**: Regression analysis, sampling, survey design
- **Industry Analysis**: Market definition, competitive analysis, industry practices
- **Financial Modeling**: Discounted cash flow, comparable company analysis

## **8.5 Settlement Strategies**
**Advanced settlement negotiation and implementation**:

1. **Mediation Techniques**
   - **Caucus Mediation**: Separate meetings with each party
   - **Evaluative Mediation**: Mediator provides case evaluation
   - **Facilitative Mediation**: Mediator facilitates communication
   - **Transformative Mediation**: Focus on relationship transformation

2. **Settlement Structures**
   - **Lump Sum Payments**: Single payment upon settlement
   - **Structured Settlements**: Periodic payments over time
   - **Contingent Payments**: Payments based on future events
   - **Non-Monetary Terms**: Conduct remedies, apologies, policy changes

3. **Settlement Documentation**
   - **Releases**: Broad vs. narrow, known vs. unknown claims
   - **Confidentiality**: Non-disclosure of settlement terms
   - **Non-Disparagement**: Prohibition on negative statements
   - **Enforcement Mechanisms**: Jurisdiction, attorneys' fees, liquidated damages

**Tax Considerations**:
- **Section 104(a)(2)**: Exclusion for personal physical injury settlements
- **Punitive Damages**: Generally taxable
- **Emotional Distress**: Taxable unless related to physical injury
- **Attorneys' Fees**: Deductibility depends on settlement characterization

**Insurance Coverage**:
- **Duty to Defend**: Broad vs. narrow interpretation
- **Duty to Indemnify**: Actual liability coverage
- **Reservation of Rights**: Insurer defense while reserving coverage positions
- **Bad Faith Claims**: Insurer failure to properly handle claims
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What Supreme Court case heightened commonality requirements for class certification?",
          options: ["Wal-Mart v. Dukes", "Comcast v. Behrend", "Tyson Foods v. Bouaphakeo", "Obergefell v. Hodges"],
          correctAnswer: 0,
          explanation: "Wal-Mart v. Dukes (2011) established heightened commonality requirements for class certification under Rule 23."
        },
        {
          id: 2,
          question: "What convention governs enforcement of international arbitral awards?",
          options: ["New York Convention", "Geneva Convention", "Vienna Convention", "Paris Convention"],
          correctAnswer: 0,
          explanation: "The New York Convention governs recognition and enforcement of foreign arbitral awards, with 166 signatory countries."
        },
        {
          id: 3,
          question: "What e-discovery technology uses predictive coding for document review?",
          options: ["Technology-Assisted Review (TAR)", "Manual document review", "Keyword search only", "No technology used"],
          correctAnswer: 0,
          explanation: "Technology-Assisted Review (TAR) uses predictive coding and machine learning to prioritize documents for review."
        },
        {
          id: 4,
          question: "What is the Daubert standard for expert testimony?",
          options: ["Reliability and relevance under FRE 702", "Expert qualification only", "Any expert opinion allowed", "State law standard only"],
          correctAnswer: 0,
          explanation: "The Daubert standard under Federal Rule of Evidence 702 requires expert testimony to be reliable and relevant."
        },
        {
          id: 5,
          question: "What type of mediation involves separate meetings with each party?",
          options: ["Caucus mediation", "Evaluative mediation", "Facilitative mediation", "Transformative mediation"],
          correctAnswer: 0,
          explanation: "Caucus mediation involves the mediator meeting separately with each party to facilitate settlement discussions."
        },
        {
          id: 6,
          question: "What is 'cy pres' in class action settlements?",
          options: ["Residual funds to related charities", "Direct payments to class members", "Attorney fee awards", "Administrative costs"],
          correctAnswer: 0,
          explanation: "Cy pres awards distribute unclaimed or residual settlement funds to charities related to the class claims."
        },
        {
          id: 7,
          question: "What arbitration procedure allows de novo review of awards?",
          options: ["JAMS Optional Arbitration Appeal", "Baseball arbitration", "High-low arbitration", "Final offer arbitration"],
          correctAnswer: 0,
          explanation: "JAMS Optional Arbitration Appeal Procedure allows for de novo review of arbitration awards by a separate panel."
        },
        {
          id: 8,
          question: "What rule requires discovery to be proportional to case needs?",
          options: ["FRCP 26(b)(1)", "FRCP 12(b)(6)", "FRCP 56", "FRCP 8"],
          correctAnswer: 0,
          explanation: "Federal Rule of Civil Procedure 26(b)(1) requires discovery to be proportional to the needs of the case."
        },
        {
          id: 9,
          question: "What Supreme Court case required rigorous analysis of damages models for class certification?",
          options: ["Comcast v. Behrend", "Wal-Mart v. Dukes", "Tyson Foods v. Bouaphakeo", "Bell Atlantic v. Twombly"],
          correctAnswer: 0,
          explanation: "Comcast v. Behrend (2013) requires rigorous analysis of damages models at class certification stage."
        },
        {
          id: 10,
          question: "What is the 'seat' of an arbitration?",
          options: ["Legal framework governing arbitration", "Physical location of hearing", "Arbitrator's home jurisdiction", "Parties' home countries"],
          correctAnswer: 0,
          explanation: "The seat of arbitration determines the legal framework and courts with supervisory jurisdiction over the arbitration."
        },
        {
          id: 11,
          question: "What type of expert typically calculates economic damages?",
          options: ["Economic expert", "Medical expert", "Engineering expert", "Accounting expert"],
          correctAnswer: 0,
          explanation: "Economic experts typically calculate damages such as lost profits, reasonable royalties, and business valuations."
        },
        {
          id: 12,
          question: "What statute allows transfer of cases for coordinated pretrial proceedings?",
          options: ["28 U.S.C. § 1407", "28 U.S.C. § 1404", "28 U.S.C. § 1406", "28 U.S.C. § 1332"],
          correctAnswer: 0,
          explanation: "28 U.S.C. § 1407 allows the Judicial Panel on Multidistrict Litigation to transfer cases for coordinated pretrial proceedings."
        },
        {
          id: 13,
          question: "What is 'baseball arbitration'?",
          options: ["Each party submits number, arbitrator picks one", "Arbitrator determines own number", "Fixed award amount", "No arbitrator involvement"],
          correctAnswer: 0,
          explanation: "In baseball arbitration, each party submits a number, and the arbitrator must select one without modification."
        },
        {
          id: 14,
          question: "What e-discovery challenge involves personal device data collection?",
          options: ["BYOD (Bring Your Own Device)", "Cloud storage", "Email servers", "Paper documents"],
          correctAnswer: 0,
          explanation: "BYOD (Bring Your Own Device) creates challenges for collecting data from employees' personal devices."
        },
        {
          id: 15,
          question: "What Daubert factor considers whether theory has been tested?",
          options: ["Testing factor", "Peer review factor", "Error rate factor", "Acceptance factor"],
          correctAnswer: 0,
          explanation: "The testing factor considers whether the expert's theory or technique has been subjected to testing."
        },
        {
          id: 16,
          question: "What are 'bellwether trials' in MDL?",
          options: ["Test cases to gauge jury reactions", "Final resolution trials", "Appellate review cases", "Settlement approval hearings"],
          correctAnswer: 0,
          explanation: "Bellwether trials are test cases tried to verdict to gauge how juries might react to similar cases."
        },
        {
          id: 17,
          question: "What type of arbitration award is made with parties' consent?",
          options: ["Consent award", "Final award", "Partial award", "Interim award"],
          correctAnswer: 0,
          explanation: "A consent award is made when parties settle and request the arbitrator to issue an award reflecting their settlement."
        },
        {
          id: 18,
          question: "What tax code section excludes personal physical injury settlements from income?",
          options: ["Section 104(a)(2)", "Section 61", "Section 162", "Section 212"],
          correctAnswer: 0,
          explanation: "Section 104(a)(2) excludes from gross income damages received for personal physical injuries or physical sickness."
        },
        {
          id: 19,
          question: "What is 'phased discovery'?",
          options: ["Sequential rather than simultaneous discovery", "All discovery at once", "No discovery allowed", "Limited to documents only"],
          correctAnswer: 0,
          explanation: "Phased discovery involves conducting discovery in stages or sequences rather than all at once."
        },
        {
          id: 20,
          question: "What type of mediation involves mediator providing case evaluation?",
          options: ["Evaluative mediation", "Facilitative mediation", "Transformative mediation", "Caucus mediation"],
          correctAnswer: 0,
          explanation: "Evaluative mediation involves the mediator providing an evaluation of the case's strengths and weaknesses."
        }
      ]
    },
    {
      id: 9,
      title: "International Business Law & Cross-Border Transactions",
      content: `
# Module 9: International Business Law & Cross-Border Transactions

Advanced international legal frameworks, cross-border transaction management, and global compliance strategies.

## **9.1 International Legal Systems**
**Comparative analysis of major legal systems**:

1. **Common Law Systems**
   - **Countries**: US, UK, Canada, Australia, India (except Goa)
   - **Characteristics**: Case law precedent, adversarial system, jury trials
   - **Contract Law**: Freedom of contract, consideration requirement
   - **Tort Law**: Duty of care, negligence standards

2. **Civil Law Systems**
   - **Countries**: Most of Europe, Latin America, Asia (except common law countries)
   - **Characteristics**: Codified laws, inquisitorial system, no binding precedent
   - **Contract Law**: Good faith requirement, causa instead of consideration
   - **Commercial Law**: Commercial codes separate from civil codes

3. **Mixed Systems**
   - **Examples**: South Africa (Roman-Dutch/common law), Scotland, Louisiana
   - **Characteristics**: Blend of civil and common law elements
   - **Contract Law**: Varies by jurisdiction and subject matter

4. **Islamic Law Systems**
   - **Countries**: Saudi Arabia, Iran, Pakistan (for certain matters)
   - **Characteristics**: Sharia principles, prohibition of interest (riba)
   - **Finance**: Islamic banking structures (murabaha, ijara, sukuk)
   - **Contracts**: Must comply with Sharia principles

## **9.2 Cross-Border Contracting**
**Advanced international contract considerations**:

- **Choice of Law Clauses**: Enforceability varies by jurisdiction
- **Forum Selection**: Exclusive vs. non-exclusive, enforcement considerations
- **Language Provisions**: Controlling language designation, translation disputes
- **Currency Clauses**: Exchange rate mechanisms, currency risk allocation
- **Force Majeure**: Different standards, COVID-19 impact, hardship provisions

**UN Convention on Contracts for International Sale of Goods (CISG)**:
- **Application**: Automatically applies to contracts between parties in different contracting states (unless opted out)
- **Opting Out**: Express exclusion possible (recommended for US companies)
- **Key Differences from UCC**: No statute of frauds, different acceptance rules, broader remedy of price reduction
- **Exclusions**: Consumer sales, services, certain goods (ships, aircraft)

**Incoterms 2020**:
- **EXW (Ex Works)**: Minimum seller obligation
- **FOB (Free on Board)**: Seller delivers goods onboard vessel
- **CIF (Cost, Insurance, Freight)**: Seller pays freight and insurance
- **DDP (Delivered Duty Paid)**: Maximum seller obligation
- **Risk Transfer**: Critical determination of when risk passes from seller to buyer

## **9.3 International Tax Planning**
**Sophisticated cross-border tax strategies**:

1. **Transfer Pricing**
   - **Arm's Length Principle**: OECD guidelines, comparable uncontrolled price method
   - **Documentation Requirements**: Local file, master file, country-by-country reporting
   - **Penalties**: Severe penalties for non-compliance (up to 40% adjustments in some countries)
   - **Advance Pricing Agreements (APAs)**: Pre-approval of transfer pricing methods

2. **Permanent Establishment (PE)**
   - **OECD Model Definition**: Fixed place of business through which business is carried on
   - **Agency PE**: Dependent agent habitually concluding contracts
   - **Construction PE**: Building site lasting more than specified period (typically 6-12 months)
   - **Digital PE**: OECD addressing digital economy challenges

3. **Withholding Taxes**
   - **Treaty Benefits**: Reduced rates under tax treaties
   - **Limitation on Benefits (LOB)**: Anti-treaty shopping provisions
   - **Documentation**: Tax residency certificates, beneficial ownership documentation
   - **FATCA**: US law requiring foreign financial institution reporting

**OECD BEPS Project**:
- **15 Action Plans**: Addressing base erosion and profit shifting
- **Pillar One**: Revised nexus and profit allocation rules for digital economy
- **Pillar Two**: Global minimum tax of 15%
- **Country Implementation**: Varying adoption timelines and approaches

## **9.4 International Trade Compliance**
**Advanced global trade regulation management**:

- **Export Controls**: EAR (Commerce), ITAR (State), OFAC (Treasury)
- **Sanctions Programs**: Comprehensive, list-based, sectoral sanctions
- **Customs Compliance**: Harmonized System classification, valuation, rules of origin
- **Anti-Boycott Regulations**: US laws prohibiting participation in unsanctioned foreign boycotts
- **Foreign Corrupt Practices Act (FCPA)**: Anti-bribery provisions, accounting provisions

**UK Bribery Act 2010**:
- **Strict Liability**: Corporate offense of failing to prevent bribery
- **Adequate Procedures Defense**: Having adequate procedures to prevent bribery
- **Extra-Territorial Reach**: Applies to companies with UK connection
- **Facilitation Payments**: Not exempt (unlike FCPA)

**EU GDPR Compliance**:
- **Extraterritorial Application**: Applies to processing of EU residents' data worldwide
- **Data Protection Officer**: Required for certain processing activities
- **Data Transfer Mechanisms**: SCCs, BCRs, adequacy decisions
- **Penalties**: Up to 4% global turnover or €20M

## **9.5 International Dispute Resolution**
**Cross-border dispute management strategies**:

1. **Enforcement of Judgments**
   - **Hague Judgments Convention**: Limited ratification, new 2019 Convention not yet in force
   - **Bilateral Treaties**: Some countries have bilateral enforcement treaties
   - **Comity**: Recognition based on principles of international comity
   - **Re-examination**: Some countries re-examine merits of foreign judgments

2. **International Arbitration Trends**
   - **Seat Popularity**: London, Paris, Singapore, Hong Kong, Geneva
   - **Third-Party Funding**: Increasing acceptance, disclosure requirements
   - **Climate Arbitration**: Emerging area for environmental disputes
   - **Technology in Arbitration**: Virtual hearings, AI-assisted document review

3. **Investor-State Dispute Settlement (ISDS)**
   - **Bilateral Investment Treaties (BITs)**: Protection for foreign investors
   - **ICSID**: World Bank arbitration facility for investment disputes
   - **UNCITRAL Rules**: Alternative to ICSID for investment arbitration
   - **Reform Efforts**: EU proposal for multilateral investment court

**Cultural Considerations**:
- **Negotiation Styles**: Direct vs. indirect, relationship-focused vs. task-focused
- **Decision-Making**: Hierarchical vs. consensus-based, individual vs. group
- **Communication**: High-context vs. low-context, formal vs. informal
- **Time Perception**: Monochronic vs. polychronic, punctuality expectations
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What legal system relies on case law precedent and adversarial proceedings?",
          options: ["Common law system", "Civil law system", "Islamic law system", "Mixed legal system"],
          correctAnswer: 0,
          explanation: "Common law systems rely on case law precedent and adversarial court proceedings."
        },
        {
          id: 2,
          question: "What UN convention automatically applies to international sales contracts unless opted out?",
          options: ["CISG", "New York Convention", "Vienna Convention", "Berne Convention"],
          correctAnswer: 0,
          explanation: "CISG (UN Convention on Contracts for International Sale of Goods) automatically applies unless expressly excluded."
        },
        {
          id: 3,
          question: "What OECD principle governs transfer pricing?",
          options: ["Arm's length principle", "Related party principle", "Market value principle", "Fair value principle"],
          correctAnswer: 0,
          explanation: "The arm's length principle requires related party transactions to be priced as if between unrelated parties."
        },
        {
          id: 4,
          question: "What US law has strict liability for failing to prevent bribery?",
          options: ["UK Bribery Act 2010 (not US)", "FCPA", "SEC regulations", "DOJ guidelines"],
          correctAnswer: 1,
          explanation: "The UK Bribery Act 2010 has strict liability for companies failing to prevent bribery (not a US law - FCPA is US)."
        },
        {
          id: 5,
          question: "What Incoterm places maximum obligation on seller?",
          options: ["DDP (Delivered Duty Paid)", "EXW (Ex Works)", "FOB (Free on Board)", "CIF (Cost, Insurance, Freight)"],
          correctAnswer: 0,
          explanation: "DDP (Delivered Duty Paid) places maximum obligation on seller, including delivery and duty payment."
        },
        {
          id: 6,
          question: "What is a 'permanent establishment' in international tax?",
          options: ["Fixed place of business through which business is carried on", "Temporary office", "Employee residence", "Shipping address"],
          correctAnswer: 0,
          explanation: "Permanent establishment is a fixed place of business through which business of an enterprise is carried on."
        },
        {
          id: 7,
          question: "What GDPR penalty maximum applies to violations?",
          options: ["4% global turnover or €20M", "10% global turnover", "$1M per violation", "No maximum penalty"],
          correctAnswer: 0,
          explanation: "GDPR penalties can reach up to 4% of global annual turnover or €20 million, whichever is higher."
        },
        {
          id: 8,
          question: "What Islamic finance structure involves cost-plus sale?",
          options: ["Murabaha", "Ijara", "Sukuk", "Mudaraba"],
          correctAnswer: 0,
          explanation: "Murabaha is a cost-plus sale structure commonly used in Islamic finance instead of interest-based lending."
        },
        {
          id: 9,
          question: "What OECD project addresses base erosion and profit shifting?",
          options: ["BEPS project", "Transfer Pricing Guidelines", "Model Tax Convention", "Inclusive Framework"],
          correctAnswer: 0,
          explanation: "The OECD BEPS (Base Erosion and Profit Shifting) project aims to combat international tax avoidance."
        },
        {
          id: 10,
          question: "What World Bank facility handles investment disputes?",
          options: ["ICSID", "UNCITRAL", "ICC", "LCIA"],
          correctAnswer: 0,
          explanation: "ICSID (International Centre for Settlement of Investment Disputes) is a World Bank facility for investor-state disputes."
        },
        {
          id: 11,
          question: "What is the 'adequate procedures' defense under UK Bribery Act?",
          options: ["Defense to corporate failure to prevent bribery", "Defense to individual bribery", "No such defense exists", "Defense only for small companies"],
          correctAnswer: 0,
          explanation: "The adequate procedures defense allows companies to avoid liability by having proper anti-bribery procedures."
        },
        {
          id: 12,
          question: "What Pillar Two of OECD BEPS establishes?",
          options: ["Global minimum tax of 15%", "Digital services tax", "Transfer pricing documentation", "Country-by-country reporting"],
          correctAnswer: 0,
          explanation: "Pillar Two of OECD BEPS establishes a global minimum corporate tax rate of 15%."
        },
        {
          id: 13,
          question: "What CISG feature differs from UCC?",
          options: ["No statute of frauds requirement", "Requires written contracts", "Higher damages limits", "Stricter performance standards"],
          correctAnswer: 0,
          explanation: "CISG has no statute of frauds requirement, unlike UCC which requires writing for goods over $500."
        },
        {
          id: 14,
          question: "What is 'riba' in Islamic law?",
          options: ["Prohibition of interest", "Permissible profit", "Charitable giving", "Contract formation"],
          correctAnswer: 0,
          explanation: "Riba refers to the Islamic prohibition of interest or usury in financial transactions."
        },
        {
          id: 15,
          question: "What US law requires foreign financial institution reporting?",
          options: ["FATCA", "FCPA", "Bank Secrecy Act", "Patriot Act"],
          correctAnswer: 0,
          explanation: "FATCA (Foreign Account Tax Compliance Act) requires foreign financial institutions to report US account holders."
        },
        {
          id: 16,
          question: "What civil law characteristic involves codified laws?",
          options: ["Comprehensive codes", "Case law precedent", "Jury trials", "Adversarial system"],
          correctAnswer: 0,
          explanation: "Civil law systems are characterized by comprehensive codified laws rather than case law precedent."
        },
        {
          id: 17,
          question: "What Incoterm means seller delivers goods onboard vessel?",
          options: ["FOB (Free on Board)", "EXW (Ex Works)", "CIF (Cost, Insurance, Freight)", "DDP (Delivered Duty Paid)"],
          correctAnswer: 0,
          explanation: "FOB (Free on Board) means seller delivers goods onboard the vessel at the named port of shipment."
        },
        {
          id: 18,
          question: "What is an 'Advance Pricing Agreement' (APA)?",
          options: ["Pre-approval of transfer pricing methods", "Tax treaty agreement", "Customs valuation agreement", "Export control license"],
          correctAnswer: 0,
          explanation: "An Advance Pricing Agreement is a pre-approval from tax authorities of transfer pricing methods."
        },
        {
          id: 19,
          question: "What cultural dimension relates to time perception?",
          options: ["Monochronic vs. polychronic", "Individualism vs. collectivism", "Power distance", "Uncertainty avoidance"],
          correctAnswer: 0,
          explanation: "Monochronic cultures view time linearly; polychronic cultures see time as more fluid and flexible."
        },
        {
          id: 20,
          question: "What is 'country-by-country reporting' in transfer pricing?",
          options: ["Reporting of financial data by tax jurisdiction", "Annual tax returns", "Monthly financial statements", "Quarterly earnings reports"],
          correctAnswer: 0,
          explanation: "Country-by-country reporting requires multinationals to report financial data for each tax jurisdiction."
        }
      ]
    },
    {
      id: 10,
      title: "Legal Ethics & Professional Responsibility",
      content: `
# Module 10: Legal Ethics & Professional Responsibility

Advanced ethical considerations, professional responsibility, and law practice management for sophisticated legal practice.

## **10.1 Conflicts of Interest Management**
**Sophisticated conflict identification and resolution**:

1. **Direct Adversity Conflicts**
   - **Rule 1.7**: Concurrent conflict of interest - directly adverse or materially limited
   - **Informed Consent**: Confirmed in writing after consultation
   - **Imputation**: Generally imputed to entire firm (Rule 1.10)
   - **Screens (Chinese Walls)**: May prevent imputation in some jurisdictions for former client conflicts

2. **Former Client Conflicts**
   - **Rule 1.9**: Duties to former clients - substantially related matters
   - **Substantial Relationship Test**: Whether matters are substantially related
   - **Confidential Information**: Protection of former client confidences
   - **Motion to Disqualify**: Common remedy for former client conflicts

3. **Business Transactions with Clients**
   - **Rule 1.8(a)**: Requirements for business transactions with clients
   - **Full Disclosure**: Terms, lawyer's role, desirability of independent counsel
   - **Fair and Reasonable**: Terms must be fair and reasonable
   - **Written Consent**: Client consent in writing

**Advance Conflict Waivers**:
- **General vs. Specific**: Specific waivers more likely enforceable
- **Future Conflict Types**: Description of potential future conflicts
- **Informed Consent**: Understanding of risks and implications
- **Updating**: Periodic renewal and updating as circumstances change

## **10.2 Attorney-Client Privilege Sophistication**
**Advanced privilege protection and management**:

- **Corporate Attorney-Client Privilege**: Upjohn v. United States (1981) standard
   - **Communication**: Between corporate employee and counsel
   - **Purpose**: For purpose of seeking legal advice
   - **Scope**: Employees with information needed for legal advice
   - **Control Group Test**: Rejected by Upjohn

- **Work Product Doctrine**: Rule 26(b)(3), Hickman v. Taylor (1947)
   - **Ordinary Work Product**: Discoverable only upon substantial need
   - **Opinion Work Product**: Almost absolute protection
   - **Anticipation of Litigation**: Prepared because of prospect of litigation
   - **Waiver**: Inadvertent disclosure, subject matter waiver

- **Common Interest Doctrine**
   - **Joint Defense Agreements**: Sharing privileged information among co-defendants
   - **Common Legal Interest**: Must share common legal interest (not just business)
   - **No Waiver**: Sharing doesn't waive privilege among members
   - **Documentation**: Written agreements recommended

**Privilege in Internal Investigations**:
- **Upjohn Warnings**: Clarification that lawyer represents company, not employee
- **Employee Interviews**: Protecting privilege while gathering facts
- **Investigation Reports**: Drafting to maintain privilege protection
- **Government Disclosure**: Selective waiver issues, non-waiver agreements

## **10.3 Fee Arrangements & Billing Ethics**
**Sophisticated fee structures and billing practices**:

1. **Alternative Fee Arrangements**
   - **Contingency Fees**: Rule 1.5(c) requirements - written agreement, percentage, expenses
   - **Flat Fees**: Advancing vs. earned upon receipt, refund obligations
   - **Blended Rates**: Weighted average of different timekeeper rates
   - **Success Fees**: Bonus for achieving specific outcomes
   - **Value Billing**: Fees based on value delivered rather than hours

2. **Ethical Billing Practices**
   - **Time Record Accuracy**: No padding, honest time recording
   - **Task Appropriateness**: Assigning appropriate level timekeeper
   - **Expense Markups**: Reasonable actual costs only, disclosure required
   - **Bill Descriptions**: Sufficient detail to understand services
   - **Prompt Billing**: Regular billing to avoid surprise

3. **Fee Disputes & Collections**
   - **Fee Arbitration**: Many states have mandatory fee arbitration programs
   - **Withdrawal for Non-Payment**: Rule 1.16 considerations - no material adverse effect
   - **Liens**: Charging liens on recovery, retaining liens on files
   - **Collection Actions**: Permissible but must comply with ethics rules

## **10.4 Multijurisdictional Practice**
**Advanced issues in cross-border and multistate practice**:

- **Unauthorized Practice of Law (UPL)**: Rule 5.5 prohibitions
- **Temporary Practice Rules**: ABA Model Rule 5.5(c) exceptions
   - **Pro Hac Vice**: Admission for particular case
   - **Temporary Association**: With local counsel
   - **Incidental Practice**: Temporary, occasional services
   - **In-house Counsel**: Practice limited to employer's business

- **Foreign Legal Consultants**: Limited licensing for foreign lawyers
- **Multijurisdictional Firms**: Firm structure compliance with local rules
- **Virtual Law Practice**: Technology-enabled practice across jurisdictions

**ABA Model Rules vs. State Variations**:
- **State Adoption**: Most but not all states have adopted Model Rules
- **California Differences**: Still uses Rules of Professional Conduct (not Model Rules)
- **New York Variations**: Unique rules in several areas
- **Ethics 20/20 Commission**: Updates for technology and globalization

## **10.5 Law Firm Management & Succession**
**Advanced law practice management and transition**:

1. **Firm Structure Options**
   - **Partnerships**: General, limited, limited liability partnerships
   - **Professional Corporations**: PC, PLLC, P.A. designations
   - **Alternative Structures**: Freelance lawyers, virtual firms, non-lawyer ownership (UK/Australia)
   - **Multidisciplinary Practices**: Generally prohibited in US (except limited exceptions)

2. **Succession Planning**
   - **Buy-Sell Agreements**: Valuation methods, payment terms, triggering events
   - **Retirement Transition**: Phased retirement, of counsel status
   - **Client Transition**: Introduction to successor attorneys, file transfer
   - **Wind-down Planning**: Winding up practice, trust account closure

3. **Risk Management**
   - **Malpractice Insurance**: Claims-made policies, prior acts coverage, tail coverage
   - **Trust Account Compliance**: IOLTA accounts, recordkeeping, reconciliation
   - **Docket Control Systems**: Calendaring, tickler systems, deadline management
   - **File Management**: Retention policies, destruction procedures, storage

**Technology Ethics**:
- **Competence**: Rule 1.1 - understanding technology relevant to practice
- **Confidentiality**: Rule 1.6 - reasonable safeguards for electronic communications
- **Cloud Computing**: Due diligence on providers, encryption, access controls
- **Social Media**: Professional conduct, advertising, investigation ethics

**Wellbeing & Professional Satisfaction**:
- **Mental Health**: Addressing substance abuse, depression, burnout
- **Work-Life Balance**: Billable hour pressures, alternative schedules
- **Diversity & Inclusion**: Creating inclusive work environments
- **Pro Bono**: Rule 6.1 aspirational goals, mandatory in some jurisdictions
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What rule governs concurrent conflicts of interest?",
          options: ["Rule 1.7", "Rule 1.9", "Rule 1.8", "Rule 1.6"],
          correctAnswer: 0,
          explanation: "ABA Model Rule 1.7 governs concurrent conflicts of interest (directly adverse or materially limited representation)."
        },
        {
          id: 2,
          question: "What case established the standard for corporate attorney-client privilege?",
          options: ["Upjohn v. United States", "Hickman v. Taylor", "Swidler & Berlin v. United States", "Mohawk Industries v. Carpenter"],
          correctAnswer: 0,
          explanation: "Upjohn v. United States (1981) established the standard for corporate attorney-client privilege."
        },
        {
          id: 3,
          question: "What is required for a valid contingent fee agreement under Rule 1.5?",
          options: ["Written agreement stating percentage and expenses", "Oral agreement only", "Court approval always required", "No specific requirements"],
          correctAnswer: 0,
          explanation: "Rule 1.5(c) requires contingent fee agreements to be in writing, stating percentage and how expenses are handled."
        },
        {
          id: 4,
          question: "What doctrine protects materials prepared in anticipation of litigation?",
          options: ["Work product doctrine", "Attorney-client privilege", "Common interest doctrine", "Self-critical analysis privilege"],
          correctAnswer: 0,
          explanation: "The work product doctrine (Rule 26(b)(3)) protects materials prepared in anticipation of litigation."
        },
        {
          id: 5,
          question: "What rule generally prohibits unauthorized practice of law?",
          options: ["Rule 5.5", "Rule 7.1", "Rule 8.4", "Rule 1.1"],
          correctAnswer: 0,
          explanation: "ABA Model Rule 5.5 generally prohibits the unauthorized practice of law."
        },
        {
          id: 6,
          question: "What test determines if matters are substantially related for former client conflicts?",
          options: ["Substantial relationship test", "Control group test", "Subject matter test", "Relatedness test"],
          correctAnswer: 0,
          explanation: "The substantial relationship test determines if current and former matters are substantially related under Rule 1.9."
        },
        {
          id: 7,
          question: "What type of work product has almost absolute protection?",
          options: ["Opinion work product", "Ordinary work product", "Fact work product", "Document work product"],
          correctAnswer: 0,
          explanation: "Opinion work product (mental impressions, conclusions, opinions) has almost absolute protection from discovery."
        },
        {
          id: 8,
          question: "What is 'pro hac vice' admission?",
          options: ["Admission for particular case", "Permanent admission", "Temporary general practice", "In-house counsel admission"],
          correctAnswer: 0,
          explanation: "Pro hac vice admission allows an out-of-state lawyer to participate in a particular case."
        },
        {
          id: 9,
          question: "What rule requires lawyer competence regarding technology?",
          options: ["Rule 1.1", "Rule 1.6", "Rule 5.5", "Rule 7.1"],
          correctAnswer: 0,
          explanation: "Rule 1.1 requires competence, which includes understanding technology relevant to the lawyer's practice."
        },
        {
          id: 10,
          question: "What are 'Upjohn warnings'?",
          options: ["Clarification that lawyer represents company, not employee", "Warnings about criminal liability", "Confidentiality warnings", "Billing practice warnings"],
          correctAnswer: 0,
          explanation: "Upjohn warnings clarify that in internal investigations, the lawyer represents the company, not the individual employee."
        },
        {
          id: 11,
          question: "What rule governs business transactions with clients?",
          options: ["Rule 1.8(a)", "Rule 1.7", "Rule 1.9", "Rule 1.5"],
          correctAnswer: 0,
          explanation: "Rule 1.8(a) governs business transactions between lawyer and client, requiring full disclosure and fairness."
        },
        {
          id: 12,
          question: "What doctrine allows sharing privileged information among co-defendants?",
          options: ["Common interest doctrine", "Work product doctrine", "Attorney-client privilege", "Joint defense privilege"],
          correctAnswer: 0,
          explanation: "The common interest doctrine (sometimes called joint defense privilege) allows sharing privileged information among parties with common legal interests."
        },
        {
          id: 13,
          question: "What is IOLTA?",
          options: ["Interest on Lawyer Trust Accounts", "International Organization of Legal Trade Associations", "Internal Office Legal Technology Assessment", "Independent Oversight of Legal Transaction Audits"],
          correctAnswer: 0,
          explanation: "IOLTA stands for Interest on Lawyer Trust Accounts, programs that collect interest on client funds for charitable purposes."
        },
        {
          id: 14,
          question: "What rule governs confidentiality of information?",
          options: ["Rule 1.6", "Rule 1.7", "Rule 1.9", "Rule 1.8"],
          correctAnswer: 0,
          explanation: "Rule 1.6 governs confidentiality of information relating to representation of a client."
        },
        {
          id: 15,
          question: "What is a 'claims-made' malpractice insurance policy?",
          options: ["Covers claims made during policy period", "Covers acts during policy period regardless of when claimed", "No malpractice coverage", "Limited to small claims"],
          correctAnswer: 0,
          explanation: "Claims-made policies cover claims made during the policy period, regardless of when the alleged error occurred."
        },
        {
          id: 16,
          question: "What rule governs declining or terminating representation?",
          options: ["Rule 1.16", "Rule 1.2", "Rule 1.3", "Rule 1.4"],
          correctAnswer: 0,
          explanation: "Rule 1.16 governs declining or terminating representation, including mandatory and permissive withdrawal."
        },
        {
          id: 17,
          question: "What is 'tail coverage' in malpractice insurance?",
          options: ["Extended reporting period after policy ends", "Coverage for animal-related cases", "Limited coverage only", "No such coverage exists"],
          correctAnswer: 0,
          explanation: "Tail coverage (extended reporting period) provides coverage for claims made after a claims-made policy ends."
        },
        {
          id: 18,
          question: "What rule governs communication with represented persons?",
          options: ["Rule 4.2", "Rule 4.1", "Rule 4.3", "Rule 4.4"],
          correctAnswer: 0,
          explanation: "Rule 4.2 prohibits communication with persons represented by counsel without their counsel's consent."
        },
        {
          id: 19,
          question: "What is the 'American Rule' regarding attorneys' fees?",
          options: ["Each party pays own fees unless exception applies", "Loser pays winner's fees", "Government pays all fees", "No fees allowed"],
          correctAnswer: 0,
          explanation: "The American Rule generally requires each party to pay its own attorneys' fees unless statute or contract provides otherwise."
        },
        {
          id: 20,
          question: "What ABA commission addressed technology and globalization ethics?",
          options: ["Ethics 20/20 Commission", "Ethics 2000 Commission", "Future of Law Commission", "Technology Ethics Commission"],
          correctAnswer: 0,
          explanation: "The ABA Ethics 20/20 Commission addressed updates to ethics rules for technology and globalization issues."
        }
      ]
    }
  ],

  // 3. FINAL EXAM (40 Questions - Comprehensive)
  finalExam: {
    title: "Legal Practice Diploma Final Examination",
    description: "Comprehensive exam covering all 10 modules. Score 70% or higher to earn your diploma.",
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: "What is the primary purpose of a holding company structure?",
        options: ["Simplify operations", "Asset protection and tax optimization", "Reduce paperwork", "Increase marketing effectiveness"],
        correctAnswer: 1,
        explanation: "Holding companies are primarily used for asset protection, tax optimization, and operational separation of different business units.",
        module: 1
      },
      {
        id: 2,
        question: "What emerging board committee focuses on digital transformation and cyber threats?",
        options: ["Risk Committee", "Technology/Cybersecurity Committee", "Audit Committee", "Nominating Committee"],
        correctAnswer: 1,
        explanation: "Technology/Cybersecurity committees are emerging to oversee IT strategy, digital innovation, and cybersecurity risks.",
        module: 2
      },
      {
        id: 3,
        question: "What is the difference between sandbagging and anti-sandbagging provisions?",
        options: ["Sandbagging allows buyer to close despite known breaches; anti-sandbagging prohibits this", "Sandbagging refers to environmental cleanup; anti-sandbagging prevents it", "Both terms mean the same thing", "Sandbagging is about delivery delays; anti-sandbagging speeds up delivery"],
        correctAnswer: 0,
        explanation: "Sandbagging allows buyers to close despite known breaches and still claim indemnification; anti-sandbagging prohibits claims for known breaches.",
        module: 3
      },
      {
        id: 4,
        question: "What international trademark registration system covers 124 member countries?",
        options: ["Madrid Protocol", "Paris Convention", "Berne Convention", "TRIPS Agreement"],
        correctAnswer: 0,
        explanation: "The Madrid Protocol allows international trademark registration covering 124 member countries through a single application.",
        module: 4
      },
      {
        id: 5,
        question: "What tax section imposes 20% excise tax on excess parachute payments?",
        options: ["Section 162(m)", "Section 280G", "Section 409A", "Section 83(b)"],
        correctAnswer: 1,
        explanation: "Section 280G imposes 20% excise tax on excess parachute payments and makes them non-deductible to the company.",
        module: 5
      },
      {
        id: 6,
        question: "What type of offering involves continuous equity issuance through broker-dealers?",
        options: ["At-the-Market (ATM) offering", "Block trade", "Bought deal", "Accelerated bookbuild"],
        correctAnswer: 0,
        explanation: "At-the-Market offerings allow companies to sell shares continuously into the market through broker-dealers at prevailing prices.",
        module: 6
      },
      {
        id: 7,
        question: "What tax-efficient structure involves spin-off followed by merger?",
        options: ["Reverse Morris Trust", "Up-C structure", "SPAC merger", "Taxable asset sale"],
        correctAnswer: 0,
        explanation: "Reverse Morris Trust structures allow tax-free spin-off followed by tax-free merger with another company.",
        module: 7
      },
      {
        id: 8,
        question: "What Supreme Court case heightened commonality requirements for class certification?",
        options: ["Wal-Mart v. Dukes", "Comcast v. Behrend", "Tyson Foods v. Bouaphakeo", "Obergefell v. Hodges"],
        correctAnswer: 0,
        explanation: "Wal-Mart v. Dukes (2011) established heightened commonality requirements for class certification under Rule 23.",
        module: 8
      },
      {
        id: 9,
        question: "What legal system relies on case law precedent and adversarial proceedings?",
        options: ["Common law system", "Civil law system", "Islamic law system", "Mixed legal system"],
        correctAnswer: 0,
        explanation: "Common law systems rely on case law precedent and adversarial court proceedings.",
        module: 9
      },
      {
        id: 10,
        question: "What rule governs concurrent conflicts of interest?",
        options: ["Rule 1.7", "Rule 1.9", "Rule 1.8", "Rule 1.6"],
        correctAnswer: 0,
        explanation: "ABA Model Rule 1.7 governs concurrent conflicts of interest (directly adverse or materially limited representation).",
        module: 10
      },
      {
        id: 11,
        question: "In how many states are Series LLCs currently available?",
        options: ["5 states", "10 states", "Approximately 20 states", "All 50 states"],
        correctAnswer: 2,
        explanation: "Series LLCs are available in approximately 20 states including Delaware, Texas, and Illinois.",
        module: 1
      },
      {
        id: 12,
        question: "What percentage of S&P 500 companies had ESG metrics in executive compensation in 2022?",
        options: ["10%", "30%", "50%", "70%"],
        correctAnswer: 1,
        explanation: "Approximately 30% of S&P 500 companies incorporated ESG metrics in executive compensation plans in 2022.",
        module: 2
      },
      {
        id: 13,
        question: "What does BATNA stand for in negotiation theory?",
        options: ["Best Alternative to Negotiated Agreement", "Basic Agreement Terms and Negotiation Approach", "Business Assessment of Transaction Alternatives", "Buyer's Approach to Negotiation Analysis"],
        correctAnswer: 0,
        explanation: "BATNA stands for Best Alternative to Negotiated Agreement - the best option if negotiations fail.",
        module: 3
      },
      {
        id: 14,
        question: "What bankruptcy code section protects licensees if licensor rejects IP license?",
        options: ["Section 362", "Section 365(n)", "Section 1129", "Section 503"],
        correctAnswer: 1,
        explanation: "Bankruptcy Code Section 365(n) allows licensees to retain IP licenses if licensor rejects the executory contract.",
        module: 4
      },
      {
        id: 15,
        question: "What is the typical post-termination exercise period for stock options?",
        options: ["30 days", "90 days", "180 days", "1 year"],
        correctAnswer: 1,
        explanation: "Stock options typically must be exercised within 90 days of termination of employment.",
        module: 5
      },
      {
        id: 16,
        question: "What SEC regulation governs non-GAAP financial measures?",
        options: ["Regulation G", "Regulation FD", "Regulation S-K", "Regulation S-X"],
        correctAnswer: 0,
        explanation: "Regulation G governs the use of non-GAAP financial measures in public communications.",
        module: 6
      },
      {
        id: 17,
        question: "What percentage of middle-market deals now use representation & warranty insurance?",
        options: ["10-20%", "30-40%", "50%+", "80-90%"],
        correctAnswer: 2,
        explanation: "Representation & warranty insurance is now used in 50%+ of middle-market M&A transactions.",
        module: 7
      },
      {
        id: 18,
        question: "What convention governs enforcement of international arbitral awards?",
        options: ["New York Convention", "Geneva Convention", "Vienna Convention", "Paris Convention"],
        correctAnswer: 0,
        explanation: "The New York Convention governs recognition and enforcement of foreign arbitral awards, with 166 signatory countries.",
        module: 8
      },
      {
        id: 19,
        question: "What UN convention automatically applies to international sales contracts unless opted out?",
        options: ["CISG", "New York Convention", "Vienna Convention", "Berne Convention"],
        correctAnswer: 0,
        explanation: "CISG (UN Convention on Contracts for International Sale of Goods) automatically applies unless expressly excluded.",
        module: 9
      },
      {
        id: 20,
        question: "What case established the standard for corporate attorney-client privilege?",
        options: ["Upjohn v. United States", "Hickman v. Taylor", "Swidler & Berlin v. United States", "Mohawk Industries v. Carpenter"],
        correctAnswer: 0,
        explanation: "Upjohn v. United States (1981) established the standard for corporate attorney-client privilege.",
        module: 10
      },
      {
        id: 21,
        question: "What is a common deadlock resolution mechanism in joint ventures?",
        options: ["Shotgun clause", "Mediation", "Arbitration", "Court litigation"],
        correctAnswer: 0,
        explanation: "Shotgun clauses allow one party to name a price, forcing the other to either buy or sell at that price, resolving deadlocks.",
        module: 1
      },
      {
        id: 22,
        question: "What law prohibits competing companies from sharing directors?",
        options: ["Section 8 of Clayton Act", "Section 10(b) of Exchange Act", "Section 16 of Securities Act", "Section 162(m) of Tax Code"],
        correctAnswer: 0,
        explanation: "Section 8 of the Clayton Act prohibits interlocking directorates between competing corporations.",
        module: 2
      },
      {
        id: 23,
        question: "What is a 'locked-box' mechanism in M&A transactions?",
        options: ["A fixed purchase price with no adjustments", "Price adjustment based on working capital at closing", "Escrow arrangement for dispute resolution", "Confidentiality provision for financial information"],
        correctAnswer: 0,
        explanation: "Locked-box mechanism fixes purchase price based on historical financial statements, with no post-closing adjustments.",
        module: 3
      },
      {
        id: 24,
        question: "What patent office proceeding allows third parties to challenge patent validity?",
        options: ["IPR (Inter Partes Review)", "Reissue", "Reexamination", "Supplemental Examination"],
        correctAnswer: 0,
        explanation: "Inter Partes Review (IPR) allows third parties to challenge patent validity before the Patent Trial and Appeal Board.",
        module: 4
      },
      {
        id: 25,
        question: "What Dodd-Frank requirement involves shareholder votes on change-in-control payments?",
        options: ["Say-on-pay", "Say-on-frequency", "Say-on-golden-parachute", "Clawback rules"],
        correctAnswer: 2,
        explanation: "Dodd-Frank requires say-on-golden-parachute shareholder advisory votes on change-in-control payments.",
        module: 5
      },
      {
        id: 26,
        question: "What is the typical cooling-off period for Rule 10b5-1 plans under new SEC rules?",
        options: ["No cooling-off period", "30 days for officers/directors, 120 days for others", "90 days for all insiders", "7 days for all insiders"],
        correctAnswer: 1,
        explanation: "New SEC rules require 30-day cooling-off for officers/directors, 120 days for others before first trade under 10b5-1 plans.",
        module: 6
      },
      {
        id: 27,
        question: "What HSR threshold triggers filing requirements for most transactions?",
        options: ["$111.4M (2023)", "$500M", "$1B", "$5B"],
        correctAnswer: 0,
        explanation: "HSR filing is generally required if transaction value exceeds $111.4M (2023 threshold, adjusted annually).",
        module: 7
      },
      {
        id: 28,
        question: "What e-discovery technology uses predictive coding for document review?",
        options: ["Technology-Assisted Review (TAR)", "Manual document review", "Keyword search only", "No technology used"],
        correctAnswer: 0,
        explanation: "Technology-Assisted Review (TAR) uses predictive coding and machine learning to prioritize documents for review.",
        module: 8
      },
      {
        id: 29,
        question: "What OECD principle governs transfer pricing?",
        options: ["Arm's length principle", "Related party principle", "Market value principle", "Fair value principle"],
        correctAnswer: 0,
        explanation: "The arm's length principle requires related party transactions to be priced as if between unrelated parties.",
        module: 9
      },
      {
        id: 30,
        question: "What is required for a valid contingent fee agreement under Rule 1.5?",
        options: ["Written agreement stating percentage and expenses", "Oral agreement only", "Court approval always required", "No specific requirements"],
        correctAnswer: 0,
        explanation: "Rule 1.5(c) requires contingent fee agreements to be in writing, stating percentage and how expenses are handled.",
        module: 10
      },
      {
        id: 31,
        question: "What US tax rules apply to Controlled Foreign Corporations?",
        options: ["Subpart F and GILTI", "FIRPTA", "BEAT", "FDII"],
        correctAnswer: 0,
        explanation: "Subpart F and GILTI (Global Intangible Low-Taxed Income) rules apply to US shareholders of Controlled Foreign Corporations.",
        module: 1
      },
      {
        id: 32,
        question: "What voting recommendation firms are most influential in proxy contests?",
        options: ["Moody's and S&P", "ISS and Glass Lewis", "Deloitte and PwC", "McKinsey and BCG"],
        correctAnswer: 1,
        explanation: "Institutional Shareholder Services (ISS) and Glass Lewis are the dominant proxy advisory firms.",
        module: 2
      },
      {
        id: 33,
        question: "What is replacing LIBOR as a reference rate in credit agreements?",
        options: ["Prime Rate", "SOFR", "Fed Funds Rate", "Treasury Rate"],
        correctAnswer: 1,
        explanation: "SOFR (Secured Overnight Financing Rate) is replacing LIBOR as the predominant reference rate in credit agreements.",
        module: 3
      },
      {
        id: 34,
        question: "What test is used for lost profits damages in patent infringement?",
        options: ["Panduit test", "Georgia-Pacific factors", "Whole market value rule", "Hypothetical negotiation"],
        correctAnswer: 0,
        explanation: "The Panduit test (demand, non-infringing alternatives, manufacturing capacity, profit) is used for lost profits damages.",
        module: 4
      },
      {
        id: 35,
        question: "What UK regulation governs business transfers and employee protections?",
        options: ["TUPE", "GDPR", "Equality Act", "Working Time Regulations"],
        correctAnswer: 0,
        explanation: "TUPE (Transfer of Undertakings Protection of Employment) regulations protect employees in business transfers.",
        module: 5
      },
      {
        id: 36,
        question: "What Rule 14a-8 exclusion allows omission of routine business matters?",
        options: ["(i)(7) ordinary business exclusion", "(i)(5) economic relevance exclusion", "(i)(10) substantial implementation", "(i)(3) false/misleading exclusion"],
        correctAnswer: 0,
        explanation: "Rule 14a-8(i)(7) allows exclusion of proposals dealing with ordinary business operations.",
        module: 6
      },
      {
        id: 37,
        question: "What Delaware case established the MAE standard?",
        options: ["IBP v. Tyson Foods", "Revlon v. MacAndrews", "Unocal v. Mesa", "Smith v. Van Gorkom"],
        correctAnswer: 0,
        explanation: "IBP v. Tyson Foods established that MAE must be durationally significant to business prospects.",
        module: 7
      },
      {
        id: 38,
        question: "What is the Daubert standard for expert testimony?",
        options: ["Reliability and relevance under FRE 702", "Expert qualification only", "Any expert opinion allowed", "State law standard only"],
        correctAnswer: 0,
        explanation: "The Daubert standard under Federal Rule of Evidence 702 requires expert testimony to be reliable and relevant.",
        module: 8
      },
      {
        id: 39,
        question: "What US law has strict liability for failing to prevent bribery?",
        options: ["UK Bribery Act 2010 (not US)", "FCPA", "SEC regulations", "DOJ guidelines"],
        correctAnswer: 1,
        explanation: "The UK Bribery Act 2010 has strict liability for companies failing to prevent bribery (not a US law - FCPA is US).",
        module: 9
      },
      {
        id: 40,
        question: "What doctrine protects materials prepared in anticipation of litigation?",
        options: ["Work product doctrine", "Attorney-client privilege", "Common interest doctrine", "Self-critical analysis privilege"],
        correctAnswer: 0,
        explanation: "The work product doctrine (Rule 26(b)(3)) protects materials prepared in anticipation of litigation.",
        module: 10
      }
    ]
  },

  // 4. ADDITIONAL COURSE METADATA
  diplomaDetails: {
    issuer: "Edusanna Legal Practice Institute",
    verificationUrl: "https://edusanna.com/verify",
    issuedDate: null,
    credentialId: null,
    competencies: [
      "Advanced corporate structuring and complex entity formation",
      "Sophisticated corporate governance and board leadership",
      "Complex contract negotiation and transactional expertise",
      "Advanced intellectual property strategy and portfolio management",
      "Executive compensation design and global employment compliance",
      "Securities regulation mastery and capital markets transactions",
      "Mergers & acquisitions strategy and integration leadership",
      "Complex litigation management and dispute resolution",
      "International business law and cross-border transaction expertise",
      "Advanced legal ethics and professional practice management"
    ],
    careerPaths: [
      "Corporate Counsel in multinational corporations",
      "Law Firm Partner in corporate practice",
      "M&A and Transactional Attorney",
      "General Counsel or Chief Legal Officer",
      "Compliance Director in regulated industries",
      "Legal Consultant for international business"
    ]
  },

  // 5. RELATIONSHIP TO CERTIFICATE COURSE
  certificatePrerequisite: {
    courseId: "corporate-law-certificate",
    title: "Corporate Law (Certificate)",
    requiredModules: [1, 2, 3, 4, 5, 6],
    fastTrackAvailable: true,
    upgradeDiscount: 6 // $18 diploma - $12 certificate = $6 additional for upgrade
  }
};

export type LegalPracticeDiplomaCourse = typeof legalPracticeDiplomaCourse;
export default legalPracticeDiplomaCourse;
