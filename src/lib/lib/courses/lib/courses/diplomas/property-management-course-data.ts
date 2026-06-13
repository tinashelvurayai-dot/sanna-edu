// property-management-diploma.ts
export const propertyManagementDiploma = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "property-management-diploma",
  title: "Property Management (Diploma)",
  description: "Advanced professional training in residential and commercial property management, including leasing, maintenance, financial management, legal compliance, and portfolio optimization.",
  duration: "12 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  prerequisite: "Real Estate (Certificate) or equivalent",
  icon: "🏢",
  badge: "Diploma",
  modulesCompleted: 0,
  totalModules: 6,

  // 2. MODULE ARCHITECTURE
  modules: [
    {
      id: 1,
      title: "Professional Property Management Foundations",
      content: `
# Module 1: Professional Property Management Foundations

**Welcome to professional property management.** This module establishes the core principles, roles, and responsibilities of modern property management professionals.

## The Property Management Profession

Property management is both a business and a profession requiring diverse skills:

**Management Roles and Responsibilities:**
- **Asset Manager:** Maximizes property value and investment returns
- **Operations Manager:** Oversees day-to-day property functioning
- **Financial Manager:** Handles budgeting, accounting, and reporting
- **Compliance Manager:** Ensures legal and regulatory adherence
- **Relationship Manager:** Maintains owner, tenant, and vendor relationships

**Key Management Functions:**
1. **Marketing and Leasing:** Filling vacancies with qualified tenants
2. **Rent Collection and Financial Management:** Ensuring cash flow
3. **Maintenance and Repairs:** Preserving property condition
4. **Tenant Relations:** Managing communications and issues
5. **Risk Management:** Protecting against liabilities
6. **Legal Compliance:** Following all applicable laws
7. **Owner Reporting:** Providing regular performance updates

## Types of Managed Properties

Different property types require different management approaches:

**Residential Properties:**
- Single-family homes
- Multi-family apartments (small to large complexes)
- Condominiums and townhome associations
- Student housing and senior living facilities
- Vacation rentals and short-term rentals

**Commercial Properties:**
- Office buildings and business parks
- Retail centers and shopping malls
- Industrial warehouses and distribution centers
- Mixed-use developments
- Medical office buildings

**Specialized Properties:**
- Government-subsidized housing (Section 8, LIHTC)
- Cooperatives and timeshares
- Mobile home parks
- Self-storage facilities
- Hospitality properties

## Management Agreement Essentials

The legal foundation of management relationships:

**Key Agreement Components:**
- **Parties:** Owner(s) and management company identification
- **Property Description:** Legal description and inventory
- **Term and Termination:** Start/end dates, renewal options, termination clauses
- **Management Scope:** Specific services provided and excluded
- **Compensation Structure:** Management fees, leasing fees, other charges
- **Authority Limits:** Spending limits, contract signing authority
- **Insurance Requirements:** Coverage types and amounts
- **Indemnification:** Liability protections for manager
- **Dispute Resolution:** Procedures for handling disagreements

**Common Fee Structures:**
- **Percentage of Collections:** 3-10% of gross collected rent
- **Flat Fee:** Fixed monthly amount
- **Leasing Fee:** One-time fee for new tenant placement
- **Renewal Fee:** Fee for lease renewals
- **Set-up Fee:** Initial property onboarding charge
- **Additional Fees:** For specific services (evictions, major projects)

## Property Management Business Models

Different ways management companies operate:

**Management Company Types:**
- **Full-Service Companies:** Comprehensive management services
- **Boutique Firms:** Specialized, high-touch service
- **Franchise Operations:** National brands with local ownership
- **Owner-Operators:** Individual managers handling own properties
- **Technology-Focused:** Tech-enabled management platforms

**Service Delivery Models:**
- **On-site Management:** Manager lives or works at property
- **Off-site Management:** Central office managing multiple properties
- **Hybrid Models:** Combination of on-site staff and central office support
- **Third-party Contracting:** Outsourcing specific functions

**Technology Integration:**
- Property management software platforms
- Online rent payment and maintenance request systems
- Digital communication and document management
- Performance analytics and reporting tools

## Legal and Ethical Framework

Foundation of professional practice:

**Licensing Requirements:**
- Real estate broker license in most states
- Property management-specific licenses in some jurisdictions
- Continuing education requirements
- Bonding and insurance requirements

**Ethical Standards:**
- **Confidentiality:** Protecting owner and tenant information
- **Conflict of Interest:** Avoiding situations where personal interests conflict
- **Honesty and Transparency:** Full disclosure in all dealings
- **Competence:** Working within professional capabilities
- **Fair Housing Compliance:** Equal treatment of all prospects and tenants

**Professional Associations:**
- Institute of Real Estate Management (IREM)
- National Association of Residential Property Managers (NARPM)
- Community Associations Institute (CAI)
- Building Owners and Managers Association (BOMA)

## Risk Management Fundamentals

Protecting owners, tenants, and management company:

**Common Property Risks:**
- Property damage (fire, water, weather, vandalism)
- Liability claims (slip-and-fall, security incidents)
- Financial risks (non-payment, fraud, embezzlement)
- Legal risks (non-compliance, lawsuits)
- Reputation risks (negative reviews, public relations issues)

**Risk Mitigation Strategies:**
- Comprehensive insurance coverage
- Regular property inspections and maintenance
- Thorough tenant screening procedures
- Clear policies and consistent enforcement
- Documentation and record-keeping systems
- Emergency preparedness plans

**Insurance Essentials:**
- **Property Insurance:** Building and contents coverage
- **Liability Insurance:** Protection against injury claims
- **Errors and Omissions:** Professional liability coverage
- **Workers Compensation:** Employee injury coverage
- **Umbrella Policies:** Additional liability protection
- **Fidelity Bonds:** Protection against employee theft

## Owner Relations Management

Building and maintaining successful owner partnerships:

**Owner Types and Expectations:**
- **Individual Investors:** Often emotionally attached, may have unrealistic expectations
- **Institutional Owners:** Focused on financial returns, data-driven decisions
- **Absentee Owners:** Need more communication and reassurance
- **First-time Investors:** Require more education and guidance

**Effective Communication:**
- Regular reporting schedules (monthly, quarterly, annually)
- Clear financial reporting formats
- Prompt response to owner inquiries
- Proactive communication about issues
- Transparency about challenges and solutions

**Performance Metrics:**
- Occupancy rates and trends
- Rent collection rates and delinquencies
- Maintenance costs and capital expenditure tracking
- Tenant satisfaction and retention rates
- Return on investment calculations

Remember: Successful property management begins with strong foundations in professionalism, clear agreements, and ethical practices.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is a key function of an asset manager in property management?",
          options: ["Cleaning units", "Maximizing property value and returns", "Collecting rent only", "Answering tenant calls"],
          correctAnswer: 1,
          explanation: "Asset managers focus on maximizing property value and investment returns."
        },
        {
          id: 2,
          question: "What type of property includes Section 8 housing?",
          options: ["Commercial office", "Government-subsidized housing", "Vacation rentals", "Self-storage"],
          correctAnswer: 1,
          explanation: "Section 8 is a government-subsidized housing program requiring specialized management."
        },
        {
          id: 3,
          question: "What is a common management fee structure?",
          options: ["Percentage of collections", "Hourly rate", "Annual flat fee", "Per-unit charge only"],
          correctAnswer: 0,
          explanation: "Percentage of collected rent (typically 3-10%) is a common management fee structure."
        },
        {
          id: 4,
          question: "What license is typically required for property management?",
          options: ["Contractor license", "Real estate broker license", "Law license", "No license required"],
          correctAnswer: 1,
          explanation: "Most states require a real estate broker license for professional property management."
        },
        {
          id: 5,
          question: "What does E&O insurance cover?",
          options: ["Property damage", "Professional liability for errors", "Employee injuries", "Tenant belongings"],
          correctAnswer: 1,
          explanation: "Errors and Omissions insurance covers professional liability for management mistakes."
        },
        {
          id: 6,
          question: "What is off-site management?",
          options: ["Manager lives at property", "Central office manages multiple properties", "No management", "Tenant self-management"],
          correctAnswer: 1,
          explanation: "Off-site management involves managing properties from a central office location."
        },
        {
          id: 7,
          question: "What should management agreements specify about authority?",
          options: ["Manager's spending limits", "Tenant preferences", "Property color schemes", "Owner's vacation plans"],
          correctAnswer: 0,
          explanation: "Agreements should specify spending limits and contract signing authority for managers."
        },
        {
          id: 8,
          question: "What professional association focuses on residential management?",
          options: ["IREM", "NARPM", "BOMA", "CAI"],
          correctAnswer: 1,
          explanation: "NARPM (National Association of Residential Property Managers) focuses on residential property management."
        },
        {
          id: 9,
          question: "What type of owner often needs more education?",
          options: ["Institutional investors", "First-time investors", "Absentee owners", "Corporate owners"],
          correctAnswer: 1,
          explanation: "First-time investors typically need more education about property management processes."
        },
        {
          id: 10,
          question: "What is a key risk mitigation strategy?",
          options: ["Ignoring problems", "Thorough tenant screening", "No inspections", "Minimal documentation"],
          correctAnswer: 1,
          explanation: "Thorough tenant screening helps mitigate financial and behavioral risks."
        },
        {
          id: 11,
          question: "What does IREM stand for?",
          options: ["International Real Estate Management", "Institute of Real Estate Management", "Independent Rental Estate Managers", "Integrated Real Estate Marketing"],
          correctAnswer: 1,
          explanation: "IREM is the Institute of Real Estate Management, a professional association."
        },
        {
          id: 12,
          question: "What is a leasing fee?",
          options: ["Monthly management fee", "One-time fee for new tenant placement", "Tenant application fee", "Maintenance charge"],
          correctAnswer: 1,
          explanation: "Leasing fee is a one-time charge for placing a new tenant in the property."
        },
        {
          id: 13,
          question: "What type of insurance covers employee theft?",
          options: ["Property insurance", "Fidelity bonds", "Liability insurance", "Workers compensation"],
          correctAnswer: 1,
          explanation: "Fidelity bonds protect against losses from employee theft or dishonesty."
        },
        {
          id: 14,
          question: "What is on-site management?",
          options: ["Manager works from central office", "Manager lives or works at property", "No manager present", "Tenant manages property"],
          correctAnswer: 1,
          explanation: "On-site management involves a manager living or working at the property location."
        },
        {
          id: 15,
          question: "What should regular owner reporting include?",
          options: ["Financial performance", "Manager's personal life", "Tenant gossip", "Unverified rumors"],
          correctAnswer: 0,
          explanation: "Professional owner reporting should include financial performance and property status."
        },
        {
          id: 16,
          question: "What ethical standard requires full disclosure?",
          options: ["Confidentiality", "Honesty and transparency", "Competence", "Fair housing"],
          correctAnswer: 1,
          explanation: "Honesty and transparency require full disclosure of relevant information to owners and tenants."
        },
        {
          id: 17,
          question: "What is a boutique management firm?",
          options: ["Large national company", "Specialized, high-touch service", "Franchise operation", "Government agency"],
          correctAnswer: 1,
          explanation: "Boutique firms offer specialized, personalized service rather than mass operations."
        },
        {
          id: 18,
          question: "What does a renewal fee cover?",
          options: ["New tenant placement", "Lease renewal processing", "Property repairs", "Marketing costs"],
          correctAnswer: 1,
          explanation: "Renewal fee compensates for processing lease renewals with existing tenants."
        },
        {
          id: 19,
          question: "What protects against injury claims?",
          options: ["Property insurance", "Liability insurance", "E&O insurance", "Fidelity bonds"],
          correctAnswer: 1,
          explanation: "Liability insurance protects against claims for injuries on the property."
        },
        {
          id: 20,
          question: "What performance metric tracks tenant staying?",
          options: ["Occupancy rate", "Rent collection rate", "Tenant retention rate", "Maintenance cost"],
          correctAnswer: 2,
          explanation: "Tenant retention rate measures how many tenants renew their leases."
        }
      ]
    },
    {
      id: 2,
      title: "Tenant Acquisition and Retention",
      content: `
# Module 2: Tenant Acquisition and Retention

**Quality tenants are the foundation of successful property management.** This module covers effective marketing, thorough screening, lease execution, and retention strategies.

## Strategic Marketing and Advertising

Attracting qualified tenant prospects:

**Marketing Channels:**
- **Online Listings:** Zillow, Apartments.com, Craigslist, company website
- **Social Media:** Facebook, Instagram, LinkedIn property showcases
- **Traditional Methods:** Yard signs, local publications, referral programs
- **Professional Networks:** Real estate agents, corporate relocation services
- **Community Marketing:** Local business partnerships, neighborhood outreach

**Effective Listing Components:**
- High-quality professional photography and virtual tours
- Detailed property descriptions highlighting features and benefits
- Accurate pricing based on market analysis
- Clear availability dates and showing instructions
- Professional branding and consistent messaging

**Fair Housing Compliance in Marketing:**
- Avoid discriminatory language or targeting
- Use inclusive language and diverse imagery
- Ensure all marketing reaches all protected classes
- Train staff on compliant advertising practices
- Monitor and review all marketing materials

## The Showing Process

Converting prospects to applicants:

**Pre-Showing Preparation:**
- Property cleaned and staged appropriately
- Safety checks completed
- Marketing materials prepared
- Showing schedule coordinated
- Staff trained on property features

**Effective Showing Techniques:**
- Professional appearance and demeanor
- Knowledge of property and neighborhood
- Highlighting features that match prospect needs
- Answering questions honestly and completely
- Following up promptly after showings

**Virtual Showings and Technology:**
- 3D virtual tours and video walkthroughs
- Live video showings via Zoom or similar
- Digital document sharing and applications
- Online scheduling systems
- Electronic signature capabilities

## Comprehensive Tenant Screening

The most critical risk management process:

**Screening Components:**
- **Application:** Complete personal and rental history information
- **Identity Verification:** Government-issued ID validation
- **Credit Check:** FICO score and payment history review
- **Criminal Background Check:** National and local databases
- **Rental History Verification:** Previous landlord interviews
- **Income Verification:** Pay stubs, tax returns, employment verification
- **Eviction History Search:** Court records review

**Screening Criteria Development:**
- Establish consistent, objective standards
- Apply equally to all applicants
- Document criteria and decisions
- Comply with fair housing laws
- Consider local regulations and restrictions

**Approval and Denial Procedures:**
- Clear pass/fail thresholds for each criterion
- Conditional approvals with requirements (co-signers, additional deposit)
- Adverse action notices with specific reasons for denials
- Appeal process for disputed information
- Record retention for all screening documentation

## Lease Agreement Best Practices

Creating enforceable, protective agreements:

**Essential Lease Provisions:**
- **Parties:** Full legal names of all adult occupants
- **Property Description:** Complete address and unit identification
- **Term:** Start and end dates, automatic renewal terms
- **Rent:** Amount, due date, late fees, payment methods
- **Security Deposit:** Amount, permitted uses, return procedures
- **Rules and Regulations:** Specific property rules
- **Maintenance Responsibilities:** Clear division between tenant and landlord
- **Default and Remedies:** Procedures for violations
- **Entry Provisions:** Notice requirements for landlord access
- **Governing Law:** State and local laws that apply

**Special Lease Clauses:**
- **Pet Addendums:** Rules, fees, and restrictions for pets
- **Maintenance Request Procedures:** How tenants report issues
- **Renewal Options:** Terms for extending the lease
- **Subletting and Assignment Rules:** Conditions for tenant transfers
- **Smoking Policies:** Designated areas or complete prohibitions
- **Mold and Lead-Based Paint Disclosures:** Required federal disclosures

**Lease Execution Process:**
- All adult occupants must sign
- Provide copies to all parties
- Collect all required deposits and fees
- Conduct move-in inspection with tenant
- Document property condition with photos/video
- Provide required disclosures and information packets

## Move-In Procedures

Setting the stage for successful tenancy:

**Pre-Move-In Checklist:**
- Unit thoroughly cleaned and inspected
- All systems tested and functioning
- Keys and access devices prepared
- Welcome packet assembled
- Utilities transferred or established
- Parking and access arrangements confirmed

**Move-In Documentation:**
- Signed lease agreement copies
- Move-in inspection report with tenant signature
- Inventory and condition report with photos
- Emergency contact information
- Rules and regulations acknowledgment
- Required government disclosures

**Tenant Orientation:**
- Property tour highlighting features and systems
- Emergency procedures and contact information
- Maintenance request procedures
- Rent payment methods and schedule
- Rules and community expectations
- Welcome and relationship building

## Rent Collection Systems

Ensuring consistent cash flow:

**Payment Method Options:**
- **Online Payments:** ACH, credit/debit cards through portal
- **Automatic Payments:** Recurring ACH deductions
- **Check/Money Order:** Traditional paper payments
- **Cash Payments:** With proper receipting and security
- **Third-party Services:** Rent payment processing companies

**Late Fee Policies:**
- Clear due dates and grace periods
- Reasonable late fee amounts (check local limits)
- Consistent enforcement for all tenants
- Proper notice of late fee policies in lease
- Documentation of all late payments and fees

**Delinquency Management:**
- Early intervention for late payments
- Consistent follow-up procedures
- Payment plan options when appropriate
- Legal notice requirements for non-payment
- Eviction procedures as last resort

## Tenant Retention Strategies

Keeping good tenants reduces turnover costs:

**Retention Benefits:**
- Lower vacancy and turnover costs
- Reduced marketing and screening expenses
- Stable rental income
- Better property care from long-term tenants
- Positive community atmosphere

**Retention Techniques:**
- **Renewal Incentives:** Rent discounts, upgrade offers, gift cards
- **Regular Communication:** Newsletters, community updates, personal check-ins
- **Responsive Maintenance:** Quick, quality repairs
- **Property Improvements:** Periodic upgrades and enhancements
- **Community Building:** Social events, tenant appreciation
- **Flexible Options:** Lease term choices, payment date adjustments

**Renewal Process:**
- Start renewal discussions 60-90 days before lease end
- Market analysis to determine renewal rates
- Formal renewal offers in writing
- Lease extension paperwork
- Updated disclosures if required
- Renewal fee collection if applicable

## Move-Out and Turnover Management

Professional transition between tenancies:

**Move-Out Procedures:**
- Written move-out notice requirements
- Pre-move-out inspection and expectations
- Forwarding address collection
- Security deposit disposition timeline
- Final utility bill coordination

**Security Deposit Handling:**
- Itemized deductions with receipts
- Compliance with state timelines (typically 14-30 days)
- Proper documentation of damages beyond normal wear
- Return of unused funds with explanation
- Dispute resolution procedures

**Turnover Efficiency:**
- Rapid turnaround planning and scheduling
- Vendor coordination for cleaning and repairs
- Marketing during turnover period
- Quality control inspections
- Preparation for new tenant move-in

Remember: Quality tenants and professional tenant relations are the most valuable assets in property management.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is a critical component of Fair Housing compliance in marketing?",
          options: ["Using exclusive language", "Avoiding discriminatory language", "Targeting specific ethnic groups", "Listing in only one language"],
          correctAnswer: 1,
          explanation: "Fair Housing requires avoiding language that could discriminate against protected classes."
        },
        {
          id: 2,
          question: "What should be included in comprehensive tenant screening?",
          options: ["Credit check only", "Credit, criminal, rental history, income verification", "Social media review only", "Personal references only"],
          correctAnswer: 1,
          explanation: "Comprehensive screening includes credit, criminal, rental history, and income verification."
        },
        {
          id: 3,
          question: "What is an essential lease provision?",
          options: ["Landlord's favorite color", "Complete property description", "Tenant's dietary preferences", "Neighbor's phone number"],
          correctAnswer: 1,
          explanation: "Complete property description including address and unit is essential for lease validity."
        },
        {
          id: 4,
          question: "What should be documented during move-in?",
          options: ["Property condition with photos", "Tenant's personal conversations", "Manager's opinions", "Unverified rumors"],
          correctAnswer: 0,
          explanation: "Property condition documentation with photos protects both tenant and landlord."
        },
        {
          id: 5,
          question: "What is a benefit of online rent payments?",
          options: ["Increased security risks", "Convenience and automatic record-keeping", "Higher late payments", "More paperwork"],
          correctAnswer: 1,
          explanation: "Online payments offer convenience and automatic record-keeping for both parties."
        },
        {
          id: 6,
          question: "What is a tenant retention strategy?",
          options: ["Ignoring tenant requests", "Responsive maintenance", "Raising rent frequently", "Minimal communication"],
          correctAnswer: 1,
          explanation: "Responsive maintenance shows tenants their comfort is valued, encouraging renewals."
        },
        {
          id: 7,
          question: "When should renewal discussions typically begin?",
          options: ["After lease ends", "60-90 days before lease end", "On move-in day", "When tenant complains"],
          correctAnswer: 1,
          explanation: "Starting renewal discussions 60-90 days before lease end allows time for decisions."
        },
        {
          id: 8,
          question: "What should a move-out inspection include?",
          options: ["Property condition assessment", "Tenant's new address guessing", "Neighbor interviews", "Future tenant screening"],
          correctAnswer: 0,
          explanation: "Move-out inspection assesses property condition for security deposit determinations."
        },
        {
          id: 9,
          question: "What is adverse action notice?",
          options: ["Lease violation notice", "Notice of application denial with reasons", "Rent increase notice", "Maintenance completion notice"],
          correctAnswer: 1,
          explanation: "Adverse action notice informs denied applicants of reasons as required by law."
        },
        {
          id: 10,
          question: "What helps efficient turnover between tenants?",
          options: ["Rapid turnaround planning", "Waiting indefinitely", "No planning", "Ignoring repairs"],
          correctAnswer: 0,
          explanation: "Rapid turnaround planning minimizes vacancy time between tenants."
        },
        {
          id: 11,
          question: "What should screening criteria be?",
          options: ["Subjective and flexible", "Consistent and objective", "Different for each applicant", "Based on appearance"],
          correctAnswer: 1,
          explanation: "Screening criteria must be consistent and objective to comply with fair housing laws."
        },
        {
          id: 12,
          question: "What is a pet addendum?",
          options: ["Pet adoption certificate", "Lease addition with pet rules and fees", "Veterinary records", "Pet food coupon"],
          correctAnswer: 1,
          explanation: "Pet addendum specifies rules, fees, and restrictions for pets in the property."
        },
        {
          id: 13,
          question: "What should tenant orientation include?",
          options: ["Emergency procedures", "Manager's personal problems", "Other tenants' information", "Unrelated business offers"],
          correctAnswer: 0,
          explanation: "Tenant orientation should include emergency procedures for safety."
        },
        {
          id: 14,
          question: "What is a benefit of automatic payments?",
          options: ["Higher delinquency", "Consistent timely payments", "More paperwork", "Increased disputes"],
          correctAnswer: 1,
          explanation: "Automatic payments ensure consistent, timely rent collection."
        },
        {
          id: 15,
          question: "What retention technique involves community events?",
          options: ["Community building", "Ignoring tenants", "Increasing rent", "Reducing services"],
          correctAnswer: 0,
          explanation: "Community building through events fosters positive relationships and retention."
        },
        {
          id: 16,
          question: "When should security deposit be returned?",
          options: ["Never", "Within state-mandated timeline", "When manager feels like it", "After 6 months"],
          correctAnswer: 1,
          explanation: "Security deposits must be returned within state-mandated timelines (typically 14-30 days)."
        },
        {
          id: 17,
          question: "What should be avoided in rental listings?",
          options: ["Professional photos", "Discriminatory language", "Accurate descriptions", "Contact information"],
          correctAnswer: 1,
          explanation: "Discriminatory language violates Fair Housing laws and should be avoided."
        },
        {
          id: 18,
          question: "What is income verification for?",
          options: ["Ensuring tenant can afford rent", "Checking credit score", "Verifying rental history", "Criminal background"],
          correctAnswer: 0,
          explanation: "Income verification ensures tenants have sufficient income to afford the rent."
        },
        {
          id: 19,
          question: "What should late fee policies be?",
          options: ["Unreasonable and excessive", "Clear and consistently enforced", "Different for each tenant", "Never enforced"],
          correctAnswer: 1,
          explanation: "Late fee policies should be clear, reasonable, and consistently enforced."
        },
        {
          id: 20,
          question: "What reduces turnover costs?",
          options: ["High tenant turnover", "Tenant retention", "Frequent evictions", "Poor maintenance"],
          correctAnswer: 1,
          explanation: "Tenant retention reduces vacancy, marketing, and turnover repair costs."
        }
      ]
    },
    {
      id: 3,
      title: "Maintenance and Operations Management",
      content: `
# Module 3: Maintenance and Operations Management

**Effective maintenance preserves property value and tenant satisfaction.** This module covers systematic maintenance programs, vendor management, and operational efficiency.

## Maintenance Philosophy and Planning

Strategic approach to property preservation:

**Types of Maintenance:**
- **Preventive Maintenance:** Scheduled tasks to prevent problems
- **Corrective Maintenance:** Repairs after failures occur
- **Routine Maintenance:** Regular cleaning and minor repairs
- **Emergency Maintenance:** Immediate response to urgent issues
- **Capital Improvements:** Major upgrades and replacements

**Maintenance Planning Framework:**
- **Annual Maintenance Plan:** Scheduled activities for the year
- **Budget Allocation:** Funds assigned to different maintenance categories
- **Seasonal Checklists:** Tasks specific to weather conditions
- **Life Cycle Planning:** Replacement schedules for major components
- **Energy Efficiency Upgrades:** Improvements reducing operating costs

**Maintenance Standards:**
- Response time targets for different priority levels
- Quality standards for completed work
- Documentation requirements for all work
- Safety protocols for staff and contractors
- Environmental compliance for materials and disposal

## Maintenance Request Systems

Efficient handling of tenant repair requests:

**Request Intake Methods:**
- **Online Portals:** 24/7 submission with tracking
- **Phone Systems:** Dedicated maintenance hotlines
- **Email and Text:** Written documentation channels
- **Mobile Apps:** Tenant-friendly request submission
- **In-person Requests:** For tenants without technology access

**Priority Classification:**
- **Emergency:** Immediate threats to health/safety (24/7 response)
- **Urgent:** Significant impact on living conditions (24-48 hours)
- **Routine:** Normal repairs and maintenance (5-7 days)
- **Scheduled:** Non-urgent improvements (when convenient)

**Request Processing Workflow:**
1. Request received and documented
2. Priority assessment and classification
3. Assignment to staff or vendor
4. Scheduling with tenant access coordination
5. Work completion and quality inspection
6. Tenant follow-up and satisfaction check
7. Documentation and cost recording

## Preventive Maintenance Programs

Proactive approach to reducing failures:

**Building Systems Maintenance:**
- **HVAC Systems:** Filter changes, coil cleaning, seasonal servicing
- **Plumbing Systems:** Pipe inspections, valve exercising, leak detection
- **Electrical Systems:** Panel inspections, outlet testing, GFCI checks
- **Roofing Systems:** Biannual inspections, debris removal, flashing checks
- **Exterior Elements:** Painting, sealing, caulking, drainage maintenance

**Unit-Specific Maintenance:**
- **Turnover Maintenance:** Complete inspection and repair between tenants
- **Annual Unit Inspections:** Preventive checks during tenancy
- **Appliance Maintenance:** Filter changes, cleaning, performance checks
- **Safety Device Testing:** Smoke and carbon monoxide detector checks
- **Water Heater Maintenance:** Flushing, anode rod replacement, temperature checks

**Documentation and Scheduling:**
- Maintenance calendar with recurring tasks
- Equipment history logs for major components
- Warranty tracking for appliances and systems
- Inventory management for parts and supplies
- Performance metrics tracking (downtime, costs, frequency)

## Vendor Management

Working effectively with contractors and service providers:

**Vendor Selection Process:**
- **Qualifications:** Licensing, insurance, experience verification
- **References:** Past client feedback and performance history
- **Bidding Process:** Competitive quotes for major projects
- **Contract Negotiation:** Clear scope, pricing, and terms
- **Onboarding:** Expectations, procedures, and system training

**Vendor Relationship Management:**
- **Performance Monitoring:** Quality, timeliness, cost tracking
- **Regular Communication:** Project updates and issue resolution
- **Payment Processing:** Timely payment for satisfactory work
- **Relationship Building:** Preferred vendor partnerships
- **Performance Reviews:** Regular assessment and feedback

**Contractor Safety and Compliance:**
- Insurance certificate verification (liability, workers comp)
- Safety training and protocols
- Environmental regulation compliance
- Licensing and permit requirements
- Background checks for access to occupied units

## Energy and Sustainability Management

Reducing costs and environmental impact:

**Energy Efficiency Strategies:**
- **Lighting Upgrades:** LED conversions and occupancy sensors
- **HVAC Optimization:** Programmable thermostats, regular maintenance
- **Water Conservation:** Low-flow fixtures, leak detection systems
- **Building Envelope:** Insulation, window upgrades, air sealing
- **Renewable Energy:** Solar installations, solar-ready design

**Sustainability Programs:**
- Recycling and waste reduction initiatives
- Green cleaning product requirements
- Sustainable landscaping practices
- Environmental certification pursuit (LEED, Energy Star)
- Tenant education on conservation practices

**Cost-Benefit Analysis:**
- Return on investment calculations for upgrades
- Utility bill analysis and benchmarking
- Incentive and rebate program utilization
- Life cycle cost considerations
- Tenant satisfaction and marketing benefits

## Emergency Preparedness and Response

Planning for unexpected events:

**Common Property Emergencies:**
- Fire and smoke incidents
- Water leaks and flooding
- Power outages and utility failures
- Severe weather events
- Security breaches and criminal activity
- Public health emergencies

**Emergency Response Plans:**
- **Communication Protocols:** Tenant notification systems
- **Evacuation Procedures:** Clear exit routes and assembly areas
- **Utility Shut-off Locations:** Clearly marked and accessible
- **Emergency Contact Lists:** Staff, vendors, authorities
- **Resource Inventory:** Emergency supplies and equipment
- **Business Continuity:** Data backup and recovery procedures

**Staff Training and Drills:**
- Regular emergency procedure training
- Role assignments and responsibilities
- Communication system testing
- Drills for different emergency scenarios
- Post-emergency evaluation and improvement

## Technology in Operations

Leveraging tools for efficiency:

**Property Management Software Features:**
- Maintenance request tracking and dispatch
- Vendor management and work order systems
- Inventory and asset tracking
- Preventive maintenance scheduling
- Mobile accessibility for field staff
- Integration with accounting and reporting

**Smart Building Technologies:**
- Keyless entry and access control systems
- Smart thermostats and energy management
- Leak detection and automatic shut-off
- Security cameras and monitoring systems
- Internet of Things (IoT) device integration

**Data Analytics for Operations:**
- Maintenance cost analysis and trending
- Energy consumption monitoring and optimization
- Vendor performance metrics
- Predictive maintenance algorithms
- Operational efficiency benchmarking

## Capital Improvement Planning

Managing major property investments:

**Capital vs. Operating Expenses:**
- **Capital Expenses:** Major improvements extending useful life
- **Operating Expenses:** Routine maintenance and repairs
- **IRS Guidelines:** Differentiation for tax purposes
- **Budgeting Implications:** Different funding approaches

**Capital Planning Process:**
1. **Needs Assessment:** Current condition evaluation
2. **Priority Setting:** Health/safety, compliance, value-add
3. **Cost Estimation:** Detailed project budgeting
4. **Funding Planning:** Reserve analysis, financing options
5. **Project Scheduling:** Phased implementation planning
6. **Execution Management:** Contractor selection and oversight
7. **Post-Project Evaluation:** Performance assessment

**Reserve Studies and Funding:**
- Professional reserve study components
- Funding strategies for capital projects
- Special assessment considerations
- Loan options for major improvements
- Owner communication about capital needs

Remember: Well-managed maintenance preserves property value, ensures tenant satisfaction, and controls operating costs.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is preventive maintenance?",
          options: ["Repairs after failure", "Scheduled tasks to prevent problems", "Emergency repairs only", "Tenant-caused damage repair"],
          correctAnswer: 1,
          explanation: "Preventive maintenance involves scheduled tasks to prevent equipment failures."
        },
        {
          id: 2,
          question: "What maintenance priority requires 24/7 response?",
          options: ["Routine", "Scheduled", "Emergency", "Urgent"],
          correctAnswer: 2,
          explanation: "Emergency maintenance addresses immediate health/safety threats requiring 24/7 response."
        },
        {
          id: 3,
          question: "What should be included in HVAC preventive maintenance?",
          options: ["Filter changes and seasonal servicing", "Complete replacement", "Ignoring until failure", "Tenant DIY repairs"],
          correctAnswer: 0,
          explanation: "HVAC preventive maintenance includes filter changes, coil cleaning, and seasonal servicing."
        },
        {
          id: 4,
          question: "What is important in vendor selection?",
          options: ["Lowest price only", "Licensing, insurance, and references", "Personal friendships", "Fastest response time only"],
          correctAnswer: 1,
          explanation: "Vendor selection should consider licensing, insurance, references, and qualifications."
        },
        {
          id: 5,
          question: "What energy efficiency upgrade reduces lighting costs?",
          options: ["LED conversions", "More windows", "Brighter bulbs", "Longer operating hours"],
          correctAnswer: 0,
          explanation: "LED lighting conversions significantly reduce energy consumption and costs."
        },
        {
          id: 6,
          question: "What should emergency response plans include?",
          options: ["Communication protocols", "Personal phone numbers", "Gossip channels", "Social media passwords"],
          correctAnswer: 0,
          explanation: "Emergency plans should include communication protocols for tenant notification."
        },
        {
          id: 7,
          question: "What technology helps track maintenance requests?",
          options: ["Property management software", "Paper notebooks only", "Memory alone", "Tenant word of mouth"],
          correctAnswer: 0,
          explanation: "Property management software tracks maintenance requests and work orders efficiently."
        },
        {
          id: 8,
          question: "What is a capital expense?",
          options: ["Monthly utility bill", "Major improvement extending useful life", "Routine cleaning", "Minor repair"],
          correctAnswer: 1,
          explanation: "Capital expenses are major improvements that extend property useful life."
        },
        {
          id: 9,
          question: "What is corrective maintenance?",
          options: ["Scheduled prevention", "Repairs after failure occurs", "Energy upgrades", "Tenant education"],
          correctAnswer: 1,
          explanation: "Corrective maintenance repairs problems after they have occurred."
        },
        {
          id: 10,
          question: "What priority is significant impact on living conditions?",
          options: ["Emergency", "Urgent", "Routine", "Scheduled"],
          correctAnswer: 1,
          explanation: "Urgent maintenance addresses issues with significant impact on living conditions."
        },
        {
          id: 11,
          question: "What should plumbing preventive maintenance include?",
          options: ["Pipe inspections and leak detection", "Ignoring until leaks", "Tenant repairs only", "Complete system replacement"],
          correctAnswer: 0,
          explanation: "Plumbing preventive maintenance includes pipe inspections and leak detection."
        },
        {
          id: 12,
          question: "What should be verified for contractors?",
          options: ["Insurance certificates", "Personal beliefs", "Favorite sports teams", "Vacation plans"],
          correctAnswer: 0,
          explanation: "Contractor insurance certificates (liability, workers comp) must be verified."
        },
        {
          id: 13,
          question: "What reduces water consumption?",
          options: ["Low-flow fixtures", "Running water constantly", "Ignoring leaks", "More bathrooms"],
          correctAnswer: 0,
          explanation: "Low-flow fixtures reduce water consumption and utility costs."
        },
        {
          id: 14,
          question: "What should evacuation procedures include?",
          options: ["Clear exit routes", "Hidden exits", "Complicated paths", "No instructions"],
          correctAnswer: 0,
          explanation: "Evacuation procedures should include clear exit routes and assembly areas."
        },
        {
          id: 15,
          question: "What does smart building technology include?",
          options: ["Keyless entry systems", "Manual locks only", "Paper records", "No technology"],
          correctAnswer: 0,
          explanation: "Smart building technology includes keyless entry and access control systems."
        },
        {
          id: 16,
          question: "What is a reserve study for?",
          options: ["Planning capital project funding", "Daily operations", "Tenant screening", "Marketing planning"],
          correctAnswer: 0,
          explanation: "Reserve studies help plan funding for future capital improvements."
        },
        {
          id: 17,
          question: "What maintenance occurs between tenants?",
          options: ["Turnover maintenance", "Emergency repairs only", "No maintenance", "Tenant responsibility"],
          correctAnswer: 0,
          explanation: "Turnover maintenance involves complete inspection and repair between tenancies."
        },
        {
          id: 18,
          question: "What helps vendor performance monitoring?",
          options: ["Quality and timeliness tracking", "Ignoring performance", "No communication", "Automatic payments regardless"],
          correctAnswer: 0,
          explanation: "Vendor performance should be monitored for quality, timeliness, and cost."
        },
        {
          id: 19,
          question: "What sustainability program involves waste?",
          options: ["Recycling initiatives", "Increasing trash", "Ignoring waste", "No programs"],
          correctAnswer: 0,
          explanation: "Recycling and waste reduction initiatives are key sustainability programs."
        },
        {
          id: 20,
          question: "What is business continuity planning?",
          options: ["Data backup and recovery procedures", "Ignoring data loss", "No planning", "Manual records only"],
          correctAnswer: 0,
          explanation: "Business continuity includes data backup and recovery procedures for emergencies."
        }
      ]
    },
    {
      id: 4,
      title: "Financial Management and Reporting",
      content: `
# Module 4: Financial Management and Reporting

**Financial expertise drives property management success.** This module covers budgeting, accounting, financial reporting, and analysis for optimal property performance.

## Property Accounting Fundamentals

Essential financial systems and processes:

**Accounting Methods:**
- **Cash Basis:** Record income when received, expenses when paid
- **Accrual Basis:** Record income when earned, expenses when incurred
- **Modified Accrual:** Combination approach for property management
- **IRS Requirements:** Different rules for tax reporting vs. management reporting

**Chart of Accounts Design:**
- **Income Accounts:** Rental income, late fees, application fees, other income
- **Expense Accounts:** Maintenance, utilities, insurance, taxes, management fees
- **Asset Accounts:** Property value, improvements, deposits held
- **Liability Accounts:** Security deposits payable, loans payable
- **Equity Accounts:** Owner equity, retained earnings

**Bank Account Structure:**
- **Operating Account:** Day-to-day income and expenses
- **Security Deposit Account:** Separate, interest-bearing account (if required)
- **Reserve Account:** Funds for capital improvements
- **Owner Disbursement Account:** For distributing owner proceeds
- **Petty Cash Fund:** Small cash expenses with strict controls

## Budget Development and Management

Planning for financial success:

**Annual Budgeting Process:**
1. **Historical Analysis:** Review past 2-3 years of actual performance
2. **Market Research:** Rental rate analysis, expense benchmarking
3. **Owner Objectives:** Return expectations, improvement plans
4. **Expense Forecasting:** Project costs based on inflation, contracts, plans
5. **Revenue Projections:** Occupancy rates, rental increases, other income
6. **Capital Budget:** Major improvements and replacements
7. **Contingency Planning:** Reserve for unexpected expenses
8. **Owner Approval:** Formal budget approval process

**Budget Components:**
- **Operating Budget:** Day-to-day income and expenses
- **Capital Budget:** Major improvements and asset replacements
- **Cash Flow Budget:** Timing of income and expense flows
- **Variance Analysis:** Comparison of actual vs. budget performance
- **Re-forecasting:** Mid-year budget adjustments if needed

**Expense Categories:**
- **Fixed Expenses:** Consistent amounts (mortgage, insurance, property taxes)
- **Variable Expenses:** Fluctuate with usage (utilities, maintenance, supplies)
- **Controllable Expenses:** Can be managed (marketing, management fees, repairs)
- **Non-Controllable Expenses:** Set by others (taxes, insurance premiums, regulations)

## Rent Collection and Accounts Receivable

Managing income effectively:

**Rent Collection Systems:**
- **Payment Methods Accepted:** Online, automatic, check, money order, cash
- **Payment Processing:** Timely deposit and recording procedures
- **Late Payment Management:** Consistent enforcement of policies
- **Delinquency Tracking:** Aging reports and follow-up procedures
- **Eviction Coordination:** Legal process for non-payment resolution

**Accounts Receivable Management:**
- **Aging Reports:** Categorizing receivables by days overdue
- **Collection Strategies:** Phone calls, letters, payment plans
- **Bad Debt Write-offs:** Procedures for uncollectible amounts
- **Legal Compliance:** State-specific collection practice regulations
- **Documentation:** Records of all collection efforts and communications

**Utility Management:**
- **Bill-back Systems:** Charging tenants for actual utility usage
- **Sub-metering:** Individual unit measurement systems
- **Ratio Utility Billing Systems (RUBS):** Allocation based on square footage or occupancy
- **Master Metering:** Landlord pays and includes in rent
- **Conservation Programs:** Incentives for reduced consumption

## Expense Management and Accounts Payable

Controlling and paying costs:

**Vendor Payment Processing:**
- **Invoice Approval:** Verification of work completion and accuracy
- **Payment Scheduling:** Taking advantage of payment terms
- **Payment Methods:** Check, ACH, credit card based on terms
- **Record Keeping:** Complete documentation of all payments
- **1099 Reporting:** Annual reporting for qualifying vendors

**Expense Control Strategies:**
- **Bid Processes:** Competitive quotes for major expenses
- **Volume Discounts:** Negotiating better terms with frequent vendors
- **Preventive Maintenance:** Reducing emergency repair costs
- **Energy Efficiency:** Lowering utility expenses
- **Technology Automation:** Reducing administrative costs

**Capital Expenditure Management:**
- **Approval Processes:** Owner authorization requirements
- **Funding Sources:** Operating funds, reserves, loans
- **Project Tracking:** Budget vs. actual cost monitoring
- **Asset Recording:** Capitalizing improvements properly
- **Depreciation Scheduling:** IRS compliance for tax purposes

## Financial Reporting and Analysis

Communicating performance to stakeholders:

**Monthly Owner Reports:**
- **Income Statement:** Revenue, expenses, net operating income
- **Balance Sheet:** Assets, liabilities, equity position
- **Cash Flow Statement:** Sources and uses of cash
- **Occupancy Report:** Units occupied, vacant, in turnover
- **Delinquency Report:** Aging of receivables
- **Maintenance Summary:** Work completed and costs
- **Variance Analysis:** Actual vs. budget performance
- **Executive Summary:** Key highlights and issues

**Key Performance Indicators (KPIs):**
- **Occupancy Rate:** Percentage of units occupied
- **Collection Rate:** Percentage of rent collected
- **Turnover Rate:** Percentage of units turning over annually
- **Expense Ratios:** Operating expenses as percentage of income
- **Net Operating Income (NOI):** Income minus operating expenses
- **Cash-on-Cash Return:** Annual cash flow divided by invested capital
- **Capitalization Rate:** NOI divided by property value
- **Debt Service Coverage Ratio:** NOI divided by debt payments

**Benchmarking and Analysis:**
- **Historical Comparison:** Current vs. prior period performance
- **Budget Comparison:** Actual vs. budget performance
- **Peer Comparison:** Similar properties in market
- **Trend Analysis:** Identifying patterns over time
- **Root Cause Analysis:** Understanding performance drivers

## Tax and Regulatory Compliance

Meeting government requirements:

**Property Tax Management:**
- **Assessment Review:** Evaluating tax assessments for accuracy
- **Appeal Processes:** Challenging excessive assessments
- **Payment Scheduling:** Timely payment to avoid penalties
- **Exemption Applications:** Qualifying for available exemptions
- **Record Keeping:** Documentation for deductions and credits

**Income Tax Reporting:**
- **Schedule E Preparation:** Rental real estate income and expenses
- **Depreciation Calculation:** Cost recovery of capital assets
- **1099 Issuance:** Reporting payments to contractors
- **Document Retention:** IRS requirements for record keeping
- **Tax Planning:** Strategies to minimize tax liability

**Regulatory Reporting:**
- **Security Deposit Reporting:** Interest payments if required
- **Rent Control Compliance:** Adherence to local regulations
- **Affordable Housing Reporting:** Government program requirements
- **Environmental Reporting:** Lead, asbestos, mold disclosures
- **Licensing Renewals:** Maintaining required business licenses

## Reserve Fund Management

Planning for future capital needs:

**Reserve Study Components:**
- **Component Inventory:** List of all major building components
- **Useful Life Estimates:** Expected lifespan of each component
- **Replacement Cost Estimates:** Current cost to replace components
- **Funding Plan:** Annual contribution requirements
- **Cash Flow Projection:** Timeline of expected expenditures

**Reserve Funding Strategies:**
- **Full Funding:** Accumulating full replacement cost by due date
- **Threshold Funding:** Maintaining minimum balance levels
- **Baseline Funding:** Contributing based on depreciation
- **Special Assessments:** One-time charges for major projects
- **Loan Financing:** Borrowing for major capital projects

**Reserve Investment:**
- **Permitted Investments:** State regulations on allowed investments
- **Liquidity Requirements:** Access to funds when needed
- **Risk Management:** Balancing safety and return
- **Fiduciary Responsibility:** Prudent management of reserve funds
- **Reporting Requirements:** Regular reporting to owners

## Technology in Financial Management

Modern tools for financial efficiency:

**Property Management Software Features:**
- **Automated Accounting:** General ledger, accounts receivable/payable
- **Online Payment Processing:** Tenant and vendor payments
- **Budget Management:** Creation, tracking, variance analysis
- **Financial Reporting:** Customizable reports and dashboards
- **Bank Integration:** Automated reconciliation and feeds
- **Mobile Access:** Financial management on-the-go

**Data Analytics and Business Intelligence:**
- **Predictive Analytics:** Forecasting income and expenses
- **Performance Dashboards:** Real-time KPI monitoring
- **Benchmarking Tools:** Comparison to market standards
- **Scenario Modeling:** What-if analysis for decision making
- **Automated Alerts:** Notifications for budget variances or issues

**Security and Compliance:**
- **Data Protection:** Encryption and secure access controls
- **Audit Trails:** Complete transaction history
- **Backup Systems:** Data redundancy and recovery
- **Compliance Features:** Built-in regulatory requirements
- **Integration Capabilities:** Connection to other business systems

Remember: Financial management excellence requires both technical accounting skills and strategic business analysis to optimize property performance.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What accounting method records income when received?",
          options: ["Accrual basis", "Cash basis", "Modified accrual", "Tax basis"],
          correctAnswer: 1,
          explanation: "Cash basis accounting records income when received and expenses when paid."
        },
        {
          id: 2,
          question: "What is the first step in annual budgeting?",
          options: ["Historical analysis", "Owner approval", "Expense guessing", "No planning"],
          correctAnswer: 0,
          explanation: "Historical analysis of past performance is the first step in budgeting."
        },
        {
          id: 3,
          question: "What helps manage late rent payments?",
          options: ["Consistent enforcement of policies", "Ignoring late payments", "No policies", "Automatic forgiveness"],
          correctAnswer: 0,
          explanation: "Consistent enforcement of late fee policies encourages timely payments."
        },
        {
          id: 4,
          question: "What should vendor payment processing include?",
          options: ["Invoice approval and verification", "Automatic payment without review", "Cash payments only", "No documentation"],
          correctAnswer: 0,
          explanation: "Vendor payments should include invoice approval and work verification."
        },
        {
          id: 5,
          question: "What KPI measures percentage of units occupied?",
          options: ["Collection rate", "Occupancy rate", "Turnover rate", "Expense ratio"],
          correctAnswer: 1,
          explanation: "Occupancy rate measures percentage of units that are rented."
        },
        {
          id: 6,
          question: "What is NOI?",
          options: ["Net Operating Income", "New Owner Investment", "National Ownership Index", "Non-Operating Income"],
          correctAnswer: 0,
          explanation: "NOI is Net Operating Income (income minus operating expenses)."
        },
        {
          id: 7,
          question: "What tax schedule reports rental income?",
          options: ["Schedule A", "Schedule C", "Schedule E", "Schedule D"],
          correctAnswer: 2,
          explanation: "Schedule E reports income and expenses from rental real estate."
        },
        {
          id: 8,
          question: "What does a reserve study estimate?",
          options: ["Daily operating costs", "Component replacement costs and timing", "Monthly rent amounts", "Utility bills"],
          correctAnswer: 1,
          explanation: "Reserve studies estimate future component replacement costs and timing."
        },
        {
          id: 9,
          question: "What is a fixed expense?",
          options: ["Utility bill", "Consistent amount like mortgage", "Variable maintenance", "Unexpected repair"],
          correctAnswer: 1,
          explanation: "Fixed expenses are consistent amounts like mortgage or insurance payments."
        },
        {
          id: 10,
          question: "What helps with expense control?",
          options: ["Competitive bidding processes", "No vendor comparison", "Single vendor always", "Ignoring costs"],
          correctAnswer: 0,
          explanation: "Competitive bidding processes help control expenses through better pricing."
        },
        {
          id: 11,
          question: "What is accounts receivable aging?",
          options: ["Categorizing receivables by days overdue", "Ignoring late payments", "Automatic write-off", "No tracking"],
          correctAnswer: 0,
          explanation: "Aging reports categorize receivables by how long they've been overdue."
        },
        {
          id: 12,
          question: "What utility system charges based on square footage?",
          options: ["Sub-metering", "RUBS", "Master metering", "Tenant pays directly"],
          correctAnswer: 1,
          explanation: "RUBS (Ratio Utility Billing System) allocates costs based on square footage or occupancy."
        },
        {
          id: 13,
          question: "What should monthly owner reports include?",
          options: ["Income statement and occupancy report", "Personal gossip", "Unverified rumors", "No financial data"],
          correctAnswer: 0,
          explanation: "Professional owner reports should include financial statements and occupancy data."
        },
        {
          id: 14,
          question: "What measures cash flow return on investment?",
          options: ["Occupancy rate", "Cash-on-cash return", "Collection rate", "Turnover rate"],
          correctAnswer: 1,
          explanation: "Cash-on-cash return measures annual cash flow divided by invested capital."
        },
        {
          id: 15,
          question: "What must be issued to contractors annually?",
          options: ["Form 1099", "Thank you note", "Personal gift", "No documentation"],
          correctAnswer: 0,
          explanation: "Form 1099 must be issued to contractors paid over certain thresholds."
        },
        {
          id: 16,
          question: "What reserve strategy accumulates full replacement cost?",
          options: ["Full funding", "Threshold funding", "No funding", "Loan only"],
          correctAnswer: 0,
          explanation: "Full funding accumulates the full replacement cost by the due date."
        },
        {
          id: 17,
          question: "What is a variable expense?",
          options: ["Mortgage payment", "Fluctuates with usage like utilities", "Insurance premium", "Property tax"],
          correctAnswer: 1,
          explanation: "Variable expenses fluctuate with usage, like utilities or maintenance."
        },
        {
          id: 18,
          question: "What helps reduce utility expenses?",
          options: ["Energy efficiency upgrades", "Ignoring usage", "No monitoring", "Higher rates"],
          correctAnswer: 0,
          explanation: "Energy efficiency upgrades like LED lighting reduce utility expenses."
        },
        {
          id: 19,
          question: "What is variance analysis?",
          options: ["Comparison of actual vs. budget", "No comparison", "Guessing differences", "Ignoring budget"],
          correctAnswer: 0,
          explanation: "Variance analysis compares actual performance to budgeted amounts."
        },
        {
          id: 20,
          question: "What property management software feature helps accounting?",
          options: ["Automated accounting modules", "Games", "Social media", "No financial features"],
          correctAnswer: 0,
          explanation: "Automated accounting modules in property management software streamline financial tasks."
        }
      ]
    },
    {
      id: 5,
      title: "Legal Compliance and Risk Management",
      content: `
# Module 5: Legal Compliance and Risk Management

**Legal knowledge protects properties and prevents liabilities.** This module covers landlord-tenant laws, fair housing, risk mitigation, and regulatory compliance.

## Landlord-Tenant Law Foundations

Understanding the legal framework:

**Sources of Landlord-Tenant Law:**
- **Federal Laws:** Fair Housing Act, Americans with Disabilities Act, Lead Disclosure
- **State Statutes:** Landlord-tenant acts, security deposit laws, eviction procedures
- **Local Ordinances:** Rent control, housing codes, registration requirements
- **Case Law:** Court decisions interpreting statutes
- **Contract Law:** Lease agreements and their enforcement

**Key Legal Concepts:**
- **Implied Warranty of Habitability:** Property must be safe and livable
- **Quiet Enjoyment:** Tenants' right to use property without interference
- **Covenant of Good Faith:** Both parties must act honestly and fairly
- **Constructive Eviction:** Conditions making property uninhabitable
- **Retaliation Protection:** Prohibition against punishing tenants for legal actions

**State-Specific Variations:**
- Security deposit limits and handling requirements
- Notice periods for entry and terminations
- Eviction timelines and procedures
- Rent increase limitations and notices
- Repair and deduct rights for tenants

## Fair Housing Compliance

Preventing discrimination in housing:

**Protected Classes (Federal):**
- Race or color
- National origin
- Religion
- Sex (including gender identity and sexual orientation)
- Familial status (children under 18)
- Disability

**Additional State/Local Protections:**
- Marital status
- Source of income
- Age (over 40 in some jurisdictions)
- Student status
- Military/veteran status
- Genetic information

**Prohibited Actions:**
- **Refusal to Rent:** Denying available housing
- **Different Terms:** Setting different rules or conditions
- **False Denial:** Claiming unavailable when actually available
- **Steering:** Directing people to/from certain areas
- **Blockbusting:** Creating fear to induce sales/rentals
- **Redlining:** Denying services based on location
- **Harassment:** Creating hostile environment

**Reasonable Accommodations and Modifications:**
- **Accommodations:** Policy changes for disabilities (service animals, reserved parking)
- **Modifications:** Physical changes to property (ramps, grab bars)
- **Process:** Interactive discussion, documentation, cost considerations
- **Undue Hardship:** Legal defense requiring significant difficulty or expense

## Americans with Disabilities Act (ADA)

Accessibility requirements:

**ADA Title III Requirements:**
- Public accommodations accessibility
- Removal of architectural barriers when readily achievable
- Alternative methods when removal not readily achievable
- New construction and alterations compliance

**Common Accessibility Features:**
- Accessible parking spaces
- Ramps and curb cuts
- Door width and hardware
- Bathroom accessibility
- Signage and wayfinding
- Communication accessibility

**Service and Assistance Animals:**
- **Service Animals:** Trained for specific disability tasks
- **Assistance Animals:** Emotional support or therapy animals
- **Reasonable Accommodation Required:** Cannot charge pet fees or deposits
- **Documentation:** May require verification of disability and need
- **Misrepresentation:** Consequences for false claims

## Security Deposit Laws

Legal handling of tenant deposits:

**State Regulations:**
- **Maximum Amounts:** Limits on deposit amounts (often 1-2 months rent)
- **Holding Requirements:** Separate accounts, interest payments
- **Itemized Deductions:** Required documentation for charges
- **Return Timelines:** Strict deadlines for refunding (typically 14-30 days)
- **Dispute Procedures:** Tenant rights to challenge deductions

**Permissible Deductions:**
- Unpaid rent and fees
- Damage beyond normal wear and tear
- Cleaning beyond normal turnover
- Unpaid utilities
- Cost of re-renting if tenant breaks lease
- Court costs for evictions

**Documentation Requirements:**
- Move-in/move-out inspection reports with photos
- Receipts for repair and cleaning work
- Written communication with tenant about damages
- Proof of costs and efforts to mitigate damages
- Proper notice of deductions and remaining balance

## Eviction Procedures and Regulations

Legal removal of tenants:

**Valid Grounds for Eviction:**
- Non-payment of rent
- Lease violations
- Illegal activity on premises
- Property damage
- Expiration of lease term with notice
- Owner move-in or substantial renovation (in some jurisdictions)

**Eviction Process Steps:**
1. **Proper Notice:** Required written notice specific to violation
2. **Filing Complaint:** Court filing with required documentation
3. **Service of Process:** Legal delivery of court papers to tenant
4. **Court Hearing:** Presentation of evidence and arguments
5. **Judgment:** Court decision and writ of possession
6. **Lockout:** Sheriff/constable supervised removal if needed

**Defenses Against Eviction:**
- Procedural errors in notice or filing
- Retaliation for legal tenant actions
- Discrimination based on protected class
- Failure to maintain habitable conditions
- Accepting rent after notice period
- Military service protections (SCRA)

## Property Maintenance and Safety Codes

Meeting housing standards:

**Local Housing Codes:**
- Structural integrity requirements
- Electrical and plumbing standards
- Heating and ventilation requirements
- Sanitation and pest control
- Fire safety measures
- Occupancy limits

**Common Code Violations:**
- Lack of working heat or hot water
- Electrical hazards
- Plumbing leaks or backups
- Mold or moisture issues
- Pest infestations
- Missing smoke or carbon monoxide detectors
- Structural defects or safety hazards

**Inspection Protocols:**
- Regular preventive inspections
- Move-in/move-out inspections
- Complaint response inspections
- Municipal code compliance inspections
- Insurance and lender required inspections
- Documentation of all inspections and corrections

## Insurance and Liability Management

Protecting against risks:

**Essential Insurance Coverage:**
- **Property Insurance:** Building and contents protection
- **Liability Insurance:** Injury and damage claims protection
- **Umbrella Policy:** Additional liability coverage
- **Directors and Officers:** For association board members
- **Flood Insurance:** If in flood zone (often separate policy)
- **Earthquake Insurance:** In seismic zones

**Risk Transfer Strategies:**
- **Hold Harmless Agreements:** Contractual risk transfer to others
- **Additional Insured Status:** Requiring vendors to add property as insured
- **Waivers of Subrogation:** Preventing insurance company recovery actions
- **Indemnification Clauses:** Contractual promises to cover losses

**Claims Management:**
- Immediate incident documentation
- Prompt notification to insurance company
- Preservation of evidence
- Cooperation with investigation
- Mitigation of further damage
- Proper documentation of all communications

## Environmental Compliance

Managing environmental risks:

**Lead-Based Paint Requirements (Pre-1978 Housing):**
- Disclosure of known lead-based paint hazards
- Provide EPA-approved information pamphlet
- Include specific warning language in lease
- Maintain records for at least 3 years
- Renovation, Repair and Painting (RRP) rules for contractors

**Mold Management:**
- Prompt response to moisture issues
- Professional remediation when needed
- Tenant education about prevention
- Documentation of all mold-related issues
- Disclosure of known mold problems

**Other Environmental Concerns:**
- Asbestos containing materials management
- Radon testing and mitigation
- Carbon monoxide detector requirements
- Underground storage tank regulations
- Hazardous material storage and disposal

## Record Keeping and Documentation

Legal protection through proper records:

**Essential Records to Maintain:**
- All signed leases and amendments
- Application and screening documentation
- Communication records with tenants and owners
- Maintenance requests and completion records
- Financial records and transaction documentation
- Inspection reports and photographs
- Legal notices and court documents
- Insurance policies and claims records

**Document Retention Periods:**
- Minimum 3-7 years for most records
- Permanent retention for some documents
- State-specific requirements for certain records
- IRS requirements for tax-related documents
- Statute of limitations considerations

**Electronic Record Management:**
- Secure storage and backup systems
- Searchable organization systems
- Access controls and audit trails
- Compliance with e-signature laws
- Disaster recovery planning

Remember: Legal compliance is not optional - it's the foundation of professional property management that protects both the property and the management business.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What federal law prohibits housing discrimination?",
          options: ["ADA", "Fair Housing Act", "IRS Code", "Building Code"],
          correctAnswer: 1,
          explanation: "The Fair Housing Act prohibits discrimination in housing based on protected classes."
        },
        {
          id: 2,
          question: "What is the implied warranty of habitability?",
          options: ["Property must be safe and livable", "Tenant must pay rent", "Landlord can enter anytime", "No repairs required"],
          correctAnswer: 0,
          explanation: "Implied warranty of habitability requires property to be safe, sanitary, and livable."
        },
        {
          id: 3,
          question: "What are reasonable accommodations for?",
          options: ["All tenants", "Tenants with disabilities", "Only wealthy tenants", "No one"],
          correctAnswer: 1,
          explanation: "Reasonable accommodations are policy changes required for tenants with disabilities."
        },
        {
          id: 4,
          question: "What do security deposit laws typically regulate?",
          options: ["Maximum amounts and return timelines", "No regulation", "Automatic forfeiture", "Landlord discretion only"],
          correctAnswer: 0,
          explanation: "Security deposit laws regulate maximum amounts, holding, and return timelines."
        },
        {
          id: 5,
          question: "What is the first step in eviction?",
          options: ["Court filing", "Proper written notice", "Changing locks", "Calling police"],
          correctAnswer: 1,
          explanation: "Proper written notice specific to the violation is the first required step in eviction."
        },
        {
          id: 6,
          question: "What insurance covers injury claims?",
          options: ["Property insurance", "Liability insurance", "Flood insurance", "No insurance"],
          correctAnswer: 1,
          explanation: "Liability insurance covers claims for injuries occurring on the property."
        },
        {
          id: 7,
          question: "What is required for pre-1978 housing?",
          options: ["Lead-based paint disclosure", "Asbestos removal", "Complete renovation", "No requirements"],
          correctAnswer: 0,
          explanation: "Lead-based paint disclosure is required for housing built before 1978."
        },
        {
          id: 8,
          question: "What protected class includes families with children?",
          options: ["Familial status", "Race", "Religion", "National origin"],
          correctAnswer: 0,
          explanation: "Familial status protects families with children under 18 from discrimination."
        },
        {
          id: 9,
          question: "What is quiet enjoyment?",
          options: ["Silent property", "Tenant's right to use without interference", "No noise allowed", "Empty property"],
          correctAnswer: 1,
          explanation: "Quiet enjoyment is the tenant's right to use property without unreasonable interference."
        },
        {
          id: 10,
          question: "What does ADA require for public accommodations?",
          options: ["Accessibility", "No changes", "Higher rents", "Fewer tenants"],
          correctAnswer: 0,
          explanation: "ADA requires accessibility for people with disabilities in public accommodations."
        },
        {
          id: 11,
          question: "What is constructive eviction?",
          options: ["Legal court eviction", "Conditions making property uninhabitable", "Tenant leaving voluntarily", "Friendly departure"],
          correctAnswer: 1,
          explanation: "Constructive eviction occurs when conditions make property uninhabitable, forcing tenant to leave."
        },
        {
          id: 12,
          question: "What is prohibited steering?",
          options: ["Driving service", "Directing people based on protected characteristics", "Property tours", "Showing available units"],
          correctAnswer: 1,
          explanation: "Steering is illegally directing people to or from areas based on protected characteristics."
        },
        {
          id: 13,
          question: "What are permissible security deposit deductions?",
          options: ["Damage beyond normal wear and tear", "Normal wear and tear", "Landlord's personal expenses", "Future repairs"],
          correctAnswer: 0,
          explanation: "Security deposits can be deducted for damages beyond normal wear and tear."
        },
        {
          id: 14,
          question: "What is a common defense against eviction?",
          options: ["Retaliation for legal tenant actions", "Non-payment of rent", "Lease violations", "Property damage"],
          correctAnswer: 0,
          explanation: "Retaliation for legal tenant actions is a valid defense against eviction."
        },
        {
          id: 15,
          question: "What does an umbrella policy provide?",
          options: ["Additional liability coverage", "Property coverage only", "No coverage", "Tenant belongings"],
          correctAnswer: 0,
          explanation: "Umbrella policies provide additional liability coverage above primary policy limits."
        },
        {
          id: 16,
          question: "What environmental issue requires disclosure?",
          options: ["Known mold problems", "Nice views", "Good schools", "Friendly neighbors"],
          correctAnswer: 0,
          explanation: "Known mold problems should be disclosed to prospective tenants."
        },
        {
          id: 17,
          question: "What is covenant of good faith?",
          options: ["Both parties must act honestly", "Only tenant responsibilities", "No obligations", "Religious requirement"],
          correctAnswer: 0,
          explanation: "Covenant of good faith requires both parties to act honestly and fairly."
        },
        {
          id: 18,
          question: "What is blockbusting?",
          options: ["Creating fear to induce sales/rentals", "Building construction", "Property inspection", "Routine maintenance"],
          correctAnswer: 0,
          explanation: "Blockbusting is creating fear to induce sales or rentals based on protected characteristics."
        },
        {
          id: 19,
          question: "What helps transfer risk to vendors?",
          options: ["Hold harmless agreements", "No agreements", "Verbal promises", "Ignoring risks"],
          correctAnswer: 0,
          explanation: "Hold harmless agreements contractually transfer risk to vendors or contractors."
        },
        {
          id: 20,
          question: "How long should records typically be kept?",
          options: ["1 year", "3-7 years minimum", "Never keep records", "Until manager changes"],
          correctAnswer: 1,
          explanation: "Records should typically be kept for 3-7 years minimum, with some permanently."
        }
      ]
    },
    {
      id: 6,
      title: "Advanced Portfolio and Strategic Management",
      content: `
# Module 6: Advanced Portfolio and Strategic Management

**Strategic leadership drives property management excellence.** This module covers portfolio optimization, strategic planning, technology integration, and professional development.

## Portfolio Management Strategies

Managing multiple properties effectively:

**Portfolio Analysis Framework:**
- **Property Performance Segmentation:** Classifying properties by performance (A, B, C properties)
- **Market Position Analysis:** Understanding each property's competitive position
- **Risk Assessment:** Evaluating different risk profiles across portfolio
- **Resource Allocation:** Distributing management resources based on needs
- **Synergy Identification:** Finding efficiencies across properties

**Portfolio Diversification:**
- **Geographic Diversification:** Different markets and locations
- **Property Type Diversification:** Mix of residential, commercial, specialized
- **Tenant Profile Diversification:** Different tenant types and lease terms
- **Risk Profile Diversification:** Balancing stable and growth properties
- **Investment Strategy Alignment:** Matching properties to owner objectives

**Performance Benchmarking:**
- **Internal Benchmarks:** Comparing properties within portfolio
- **External Benchmarks:** Industry standards and peer comparisons
- **Historical Benchmarks:** Performance trends over time
- **Market Benchmarks:** Local market conditions and averages
- **Best Practice Benchmarks:** Top performer standards in industry

## Strategic Planning and Business Development

Growing and improving the management business:

**Strategic Planning Process:**
1. **Situational Analysis:** SWOT analysis (Strengths, Weaknesses, Opportunities, Threats)
2. **Vision and Mission Development:** Clear business purpose and direction
3. **Goal Setting:** Specific, measurable, achievable, relevant, time-bound objectives
4. **Strategy Formulation:** Action plans to achieve goals
5. **Implementation Planning:** Resources, timelines, responsibilities
6. **Monitoring and Adjustment:** Regular review and course correction

**Business Development Strategies:**
- **Organic Growth:** Expanding services to existing clients
- **Market Expansion:** Entering new geographic markets
- **Service Diversification:** Adding new service offerings
- **Acquisition:** Purchasing other management companies
- **Strategic Partnerships:** Collaborating with complementary businesses
- **Niche Specialization:** Focusing on specific property types or services

**Marketing and Brand Development:**
- **Brand Positioning:** Defining unique value proposition
- **Target Market Identification:** Ideal client profiles
- **Marketing Mix Development:** Product, price, place, promotion strategies
- **Digital Marketing Strategy:** Online presence and lead generation
- **Referral Program Development:** Systematic referral generation
- **Client Retention Programs:** Keeping and growing existing business

## Technology Strategy and Implementation

Leveraging technology for competitive advantage:

**Technology Assessment Framework:**
- **Current State Analysis:** Existing systems and capabilities
- **Needs Identification:** Business requirements and pain points
- **Vendor Evaluation:** Technology provider assessment
- **Cost-Benefit Analysis:** ROI calculations for technology investments
- **Implementation Planning:** Phased rollout and training plans

**Emerging Technologies in Property Management:**
- **Artificial Intelligence:** Predictive analytics, chatbots, automated processes
- **Internet of Things (IoT):** Smart building sensors and controls
- **Blockchain:** Secure transactions and record keeping
- **Virtual and Augmented Reality:** Property tours and training
- **Robotic Process Automation:** Automating repetitive tasks
- **Big Data Analytics:** Advanced performance insights

**Technology Integration Challenges:**
- **Data Migration:** Moving from legacy systems
- **Change Management:** Staff adoption and training
- **Cybersecurity:** Protecting sensitive data
- **System Integration:** Connecting different platforms
- **Cost Management:** Budgeting for technology investments
- **Vendor Management:** Working with technology providers

## Human Resources and Team Development

Building and leading effective teams:

**Team Structure Models:**
- **Functional Teams:** Organized by specialty (leasing, maintenance, accounting)
- **Property Teams:** Dedicated to specific properties or portfolios
- **Matrix Teams:** Combined functional and property focus
- **Virtual Teams:** Remote and distributed team members
- **Hybrid Models:** Combination of different structures

**Talent Management Strategies:**
- **Recruitment and Hiring:** Attracting qualified candidates
- **Onboarding and Training:** Effective new employee integration
- **Performance Management:** Regular feedback and development
- **Career Path Development:** Growth opportunities within organization
- **Retention Programs:** Keeping valuable employees
- **Succession Planning:** Preparing for future leadership needs

**Professional Development Programs:**
- **Technical Training:** Property management skills and knowledge
- **Leadership Development:** Management and supervisory skills
- **Certification Support:** Professional designations (CPM, ARM, CAM)
- **Continuing Education:** Ongoing learning requirements
- **Mentoring Programs:** Experienced guidance for newer professionals
- **Industry Conference Participation:** Networking and learning opportunities

## Quality Management and Continuous Improvement

Systematic approach to excellence:

**Quality Management Systems:**
- **Process Documentation:** Standard operating procedures
- **Quality Standards:** Performance expectations and metrics
- **Monitoring Systems:** Regular quality checks and audits
- **Improvement Processes:** Systematic problem-solving approaches
- **Customer Feedback Systems:** Regular tenant and owner input

**Continuous Improvement Methodologies:**
- **Plan-Do-Check-Act (PDCA) Cycle:** Systematic improvement process
- **Lean Management:** Eliminating waste and inefficiency
- **Six Sigma:** Reducing defects and variation
- **Benchmarking:** Learning from best practices
- **Innovation Programs:** Encouraging new ideas and approaches

**Performance Measurement Systems:**
- **Balanced Scorecard:** Multiple perspectives on performance
- **Key Performance Indicators (KPIs):** Critical success metrics
- **Dashboard Reporting:** Visual performance tracking
- **Regular Review Cycles:** Monthly, quarterly, annual assessments
- **Stakeholder Feedback:** Input from owners, tenants, staff, vendors

## Crisis Management and Business Continuity

Preparing for unexpected challenges:

**Crisis Management Planning:**
- **Risk Assessment:** Identifying potential crises and impacts
- **Response Team Development:** Designated crisis leadership
- **Communication Plans:** Internal and external communication strategies
- **Resource Allocation:** Emergency resources and backup systems
- **Recovery Planning:** Returning to normal operations

**Common Property Management Crises:**
- **Natural Disasters:** Floods, earthquakes, storms, wildfires
- **Public Health Emergencies:** Pandemics, outbreaks
- **Financial Crises:** Market downturns, owner bankruptcies
- **Reputation Crises:** Negative publicity, social media attacks
- **Operational Disruptions:** System failures, key staff departures
- **Legal and Regulatory Crises:** Lawsuits, government actions

**Business Continuity Planning:**
- **Data Backup and Recovery:** Protecting critical information
- **Alternative Workspace Plans:** Remote work capabilities
- **Vendor Continuity:** Backup vendor relationships
- **Financial Resilience:** Cash reserves and credit access
- **Insurance Coverage Review:** Ensuring adequate protection

## Sustainability and Social Responsibility

Managing properties for long-term value:

**Environmental Sustainability Programs:**
- **Energy Management:** Reduction strategies and monitoring
- **Water Conservation:** Efficient systems and usage reduction
- **Waste Management:** Recycling and reduction programs
- **Sustainable Materials:** Environmentally preferable products
- **Green Building Certifications:** LEED, Energy Star, other standards

**Social Responsibility Initiatives:**
- **Community Engagement:** Local partnerships and involvement
- **Affordable Housing Support:** Providing below-market units
- **Diversity and Inclusion:** Promoting diverse teams and fair practices
- **Tenant Support Programs:** Assistance for vulnerable residents
- **Volunteer Programs:** Staff community service opportunities

**Economic Sustainability:**
- **Long-term Value Preservation:** Maintaining and enhancing property value
- **Affordable Operations:** Controlling costs for long-term viability
- **Stakeholder Value Creation:** Benefits for owners, tenants, community
- **Resilient Business Model:** Adapting to changing market conditions
- **Ethical Business Practices:** Transparency and integrity in all dealings

## Future Trends and Innovation

Preparing for the evolving industry:

**Industry Trends:**
- **Demographic Shifts:** Aging population, millennial preferences, urbanization
- **Technology Adoption:** Increasing automation and data utilization
- **Regulatory Changes:** New laws and compliance requirements
- **Market Dynamics:** Changing supply and demand patterns
- **Climate Considerations:** Weather impacts and sustainability pressures

**Innovation Management:**
- **Idea Generation Systems:** Capturing and evaluating new ideas
- **Pilot Programs:** Testing innovations on small scale
- **Partnership Development:** Collaborating with innovators
- **Change Readiness Assessment:** Preparing organization for innovation
- **Innovation Metrics:** Measuring success of new approaches

**Professional Adaptation:**
- **Continuous Learning:** Staying current with industry changes
- **Network Building:** Professional relationships and information sharing
- **Skill Development:** New competencies for changing environment
- **Career Flexibility:** Adapting to new roles and opportunities
- **Industry Leadership:** Contributing to profession advancement

Remember: Strategic property management requires both operational excellence and forward-thinking leadership to create lasting value for all stakeholders.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is portfolio performance segmentation?",
          options: ["Ignoring performance", "Classifying properties by performance", "Selling all properties", "No analysis"],
          correctAnswer: 1,
          explanation: "Performance segmentation classifies properties (A, B, C) based on their performance levels."
        },
        {
          id: 2,
          question: "What does SWOT analysis stand for?",
          options: ["Strengths, Weaknesses, Opportunities, Threats", "Sales, Work, Operations, Technology", "Systems, Websites, Offices, Teams", "Software, Windows, Operations, Training"],
          correctAnswer: 0,
          explanation: "SWOT analyzes Strengths, Weaknesses, Opportunities, and Threats for strategic planning."
        },
        {
          id: 3,
          question: "What is organic growth strategy?",
          options: ["Expanding services to existing clients", "Acquiring competitors", "Closing business", "No growth"],
          correctAnswer: 0,
          explanation: "Organic growth expands services to existing clients rather than acquiring new ones."
        },
        {
          id: 4,
          question: "What does IoT stand for in property technology?",
          options: ["Internet of Things", "Internal Operations Team", "Investment Opportunity Tracking", "Integrated Office Technology"],
          correctAnswer: 0,
          explanation: "IoT (Internet of Things) refers to smart building sensors and connected devices."
        },
        {
          id: 5,
          question: "What team structure combines functional and property focus?",
          options: ["Functional teams only", "Matrix teams", "No teams", "Random teams"],
          correctAnswer: 1,
          explanation: "Matrix teams combine functional specialties with property-specific focus."
        },
        {
          id: 6,
          question: "What is the PDCA cycle?",
          options: ["Plan-Do-Check-Act", "Property-Development-Construction-Acquisition", "People-Data-Computers-Accounting", "Planning-Documentation-Communication-Action"],
          correctAnswer: 0,
          explanation: "PDCA (Plan-Do-Check-Act) is a continuous improvement methodology."
        },
        {
          id: 7,
          question: "What should crisis management plans include?",
          options: ["Communication strategies", "No planning", "Ignoring crises", "Only financial aspects"],
          correctAnswer: 0,
          explanation: "Crisis management plans should include communication strategies for internal and external stakeholders."
        },
        {
          id: 8,
          question: "What green building certification is common?",
          options: ["LEED", "No certifications", "Building code", "Insurance rating"],
          correctAnswer: 0,
          explanation: "LEED (Leadership in Energy and Environmental Design) is a common green building certification."
        },
        {
          id: 9,
          question: "What is geographic diversification?",
          options: ["Different markets and locations", "Only one location", "Ignoring location", "Same area only"],
          correctAnswer: 0,
          explanation: "Geographic diversification spreads properties across different markets and locations."
        },
        {
          id: 10,
          question: "What is brand positioning?",
          options: ["Defining unique value proposition", "Building location", "Property address", "No definition needed"],
          correctAnswer: 0,
          explanation: "Brand positioning defines the unique value proposition that differentiates a business."
        },
        {
          id: 11,
          question: "What technology uses predictive analytics?",
          options: ["Artificial Intelligence", "Paper files", "Manual calculations", "No technology"],
          correctAnswer: 0,
          explanation: "Artificial Intelligence often includes predictive analytics for forecasting and decision support."
        },
        {
          id: 12,
          question: "What is succession planning?",
          options: ["Preparing for future leadership needs", "No planning", "Immediate hiring", "Reducing staff"],
          correctAnswer: 0,
          explanation: "Succession planning prepares for future leadership needs and transitions."
        },
        {
          id: 13,
          question: "What methodology reduces defects and variation?",
          options: ["Six Sigma", "No methodology", "Random approach", "Trial and error"],
          correctAnswer: 0,
          explanation: "Six Sigma methodology focuses on reducing defects and process variation."
        },
        {
          id: 14,
          question: "What is business continuity planning for?",
          options: ["Returning to normal after disruptions", "No planning", "Only financial planning", "Marketing only"],
          correctAnswer: 0,
          explanation: "Business continuity planning prepares for returning to normal operations after disruptions."
        },
        {
          id: 15,
          question: "What sustainability program reduces energy?",
          options: ["Energy management", "No programs", "Increasing usage", "Ignoring costs"],
          correctAnswer: 0,
          explanation: "Energy management programs focus on reducing energy consumption and costs."
        },
        {
          id: 16,
          question: "What is internal benchmarking?",
          options: ["Comparing properties within portfolio", "No comparison", "Only external data", "Guessing performance"],
          correctAnswer: 0,
          explanation: "Internal benchmarking compares performance across properties within the same portfolio."
        },
        {
          id: 17,
          question: "What is niche specialization?",
          options: ["Focusing on specific property types", "General management only", "No focus", "Random services"],
          correctAnswer: 0,
          explanation: "Niche specialization focuses on specific property types or services for competitive advantage."
        },
        {
          id: 18,
          question: "What does RPA stand for?",
          options: ["Robotic Process Automation", "Real Property Accounting", "Rental Payment Application", "Residential Property Administration"],
          correctAnswer: 0,
          explanation: "RPA (Robotic Process Automation) automates repetitive tasks in property management."
        },
        {
          id: 19,
          question: "What is talent management?",
          options: ["Attracting, developing, retaining employees", "Ignoring staff", "No hiring", "Only firing"],
          correctAnswer: 0,
          explanation: "Talent management involves attracting, developing, and retaining valuable employees."
        },
        {
          id: 20,
          question: "What measures multiple performance perspectives?",
          options: ["Balanced Scorecard", "Single metric", "No measurement", "Guessing only"],
          correctAnswer: 0,
          explanation: "Balanced Scorecard measures performance from multiple perspectives (financial, customer, internal, learning)."
        }
      ]
    }
  ],

  // 3. FINAL EXAM STRUCTURE
  finalExam: {
    title: "Property Management Diploma Final Exam",
    description: "Comprehensive 40-question exam covering all 6 modules of professional property management knowledge and skills.",
    passingScore: 75,
    questions: [
      // Questions from Module 1
      {
        id: 1,
        question: "What is a key function of an asset manager?",
        options: ["Cleaning units", "Maximizing property value and returns", "Collecting rent only", "Answering tenant calls"],
        correctAnswer: 1,
        explanation: "Asset managers focus on maximizing property value and investment returns.",
        module: 1
      },
      {
        id: 2,
        question: "What is a common management fee structure?",
        options: ["Percentage of collections", "Hourly rate", "Annual flat fee", "Per-unit charge only"],
        correctAnswer: 0,
        explanation: "Percentage of collected rent (typically 3-10%) is a common management fee structure.",
        module: 1
      },
      {
        id: 3,
        question: "What does E&O insurance cover?",
        options: ["Property damage", "Professional liability for errors", "Employee injuries", "Tenant belongings"],
        correctAnswer: 1,
        explanation: "Errors and Omissions insurance covers professional liability for management mistakes.",
        module: 1
      },

      // Questions from Module 2
      {
        id: 4,
        question: "What should be avoided in rental marketing?",
        options: ["Professional photos", "Discriminatory language", "Accurate descriptions", "Contact information"],
        correctAnswer: 1,
        explanation: "Discriminatory language violates Fair Housing laws and should be avoided.",
        module: 2
      },
      {
        id: 5,
        question: "What should comprehensive tenant screening include?",
        options: ["Credit check only", "Credit, criminal, rental history, income verification", "Social media review only", "Personal references only"],
        correctAnswer: 1,
        explanation: "Comprehensive screening includes credit, criminal, rental history, and income verification.",
        module: 2
      },
      {
        id: 6,
        question: "What retention technique involves community events?",
        options: ["Community building", "Ignoring tenants", "Increasing rent", "Reducing services"],
        correctAnswer: 0,
        explanation: "Community building through events fosters positive relationships and retention.",
        module: 2
      },

      // Questions from Module 3
      {
        id: 7,
        question: "What is preventive maintenance?",
        options: ["Repairs after failure", "Scheduled tasks to prevent problems", "Emergency repairs only", "Tenant-caused damage repair"],
        correctAnswer: 1,
        explanation: "Preventive maintenance involves scheduled tasks to prevent equipment failures.",
        module: 3
      },
      {
        id: 8,
        question: "What maintenance priority requires 24/7 response?",
        options: ["Routine", "Scheduled", "Emergency", "Urgent"],
        correctAnswer: 2,
        explanation: "Emergency maintenance addresses immediate health/safety threats requiring 24/7 response.",
        module: 3
      },
      {
        id: 9,
        question: "What is important in vendor selection?",
        options: ["Lowest price only", "Licensing, insurance, and references", "Personal friendships", "Fastest response time only"],
        correctAnswer: 1,
        explanation: "Vendor selection should consider licensing, insurance, references, and qualifications.",
        module: 3
      },

      // Questions from Module 4
      {
        id: 10,
        question: "What accounting method records income when received?",
        options: ["Accrual basis", "Cash basis", "Modified accrual", "Tax basis"],
        correctAnswer: 1,
        explanation: "Cash basis accounting records income when received and expenses when paid.",
        module: 4
      },
      {
        id: 11,
        question: "What KPI measures percentage of units occupied?",
        options: ["Collection rate", "Occupancy rate", "Turnover rate", "Expense ratio"],
        correctAnswer: 1,
        explanation: "Occupancy rate measures percentage of units that are rented.",
        module: 4
      },
      {
        id: 12,
        question: "What is NOI?",
        options: ["Net Operating Income", "New Owner Investment", "National Ownership Index", "Non-Operating Income"],
        correctAnswer: 0,
        explanation: "NOI is Net Operating Income (income minus operating expenses).",
        module: 4
      },

      // Questions from Module 5
      {
        id: 13,
        question: "What federal law prohibits housing discrimination?",
        options: ["ADA", "Fair Housing Act", "IRS Code", "Building Code"],
        correctAnswer: 1,
        explanation: "The Fair Housing Act prohibits discrimination in housing based on protected classes.",
        module: 5
      },
      {
        id: 14,
        question: "What is the implied warranty of habitability?",
        options: ["Property must be safe and livable", "Tenant must pay rent", "Landlord can enter anytime", "No repairs required"],
        correctAnswer: 0,
        explanation: "Implied warranty of habitability requires property to be safe, sanitary, and livable.",
        module: 5
      },
      {
        id: 15,
        question: "What do security deposit laws typically regulate?",
        options: ["Maximum amounts and return timelines", "No regulation", "Automatic forfeiture", "Landlord discretion only"],
        correctAnswer: 0,
        explanation: "Security deposit laws regulate maximum amounts, holding, and return timelines.",
        module: 5
      },

      // Questions from Module 6
      {
        id: 16,
        question: "What is portfolio performance segmentation?",
        options: ["Ignoring performance", "Classifying properties by performance", "Selling all properties", "No analysis"],
        correctAnswer: 1,
        explanation: "Performance segmentation classifies properties (A, B, C) based on performance levels.",
        module: 6
      },
      {
        id: 17,
        question: "What does SWOT analysis stand for?",
        options: ["Strengths, Weaknesses, Opportunities, Threats", "Sales, Work, Operations, Technology", "Systems, Websites, Offices, Teams", "Software, Windows, Operations, Training"],
        correctAnswer: 0,
        explanation: "SWOT analyzes Strengths, Weaknesses, Opportunities, and Threats for strategic planning.",
        module: 6
      },
      {
        id: 18,
        question: "What is organic growth strategy?",
        options: ["Expanding services to existing clients", "Acquiring competitors", "Closing business", "No growth"],
        correctAnswer: 0,
        explanation: "Organic growth expands services to existing clients rather than acquiring new ones.",
        module: 6
      },

      // Additional mixed questions
      {
        id: 19,
        question: "What type of property includes Section 8 housing?",
        options: ["Commercial office", "Government-subsidized housing", "Vacation rentals", "Self-storage"],
        correctAnswer: 1,
        explanation: "Section 8 is a government-subsidized housing program requiring specialized management.",
        module: 1
      },
      {
        id: 20,
        question: "What should be documented during move-in?",
        options: ["Property condition with photos", "Tenant's personal conversations", "Manager's opinions", "Unverified rumors"],
        correctAnswer: 0,
        explanation: "Property condition documentation with photos protects both tenant and landlord.",
        module: 2
      },
      {
        id: 21,
        question: "What energy efficiency upgrade reduces lighting costs?",
        options: ["LED conversions", "More windows", "Brighter bulbs", "Longer operating hours"],
        correctAnswer: 0,
        explanation: "LED lighting conversions significantly reduce energy consumption and costs.",
        module: 3
      },
      {
        id: 22,
        question: "What is the first step in annual budgeting?",
        options: ["Historical analysis", "Owner approval", "Expense guessing", "No planning"],
        correctAnswer: 0,
        explanation: "Historical analysis of past performance is the first step in budgeting.",
        module: 4
      },
      {
        id: 23,
        question: "What is the first step in eviction?",
        options: ["Court filing", "Proper written notice", "Changing locks", "Calling police"],
        correctAnswer: 1,
        explanation: "Proper written notice specific to the violation is the first required step in eviction.",
        module: 5
      },
      {
        id: 24,
        question: "What does IoT stand for in property technology?",
        options: ["Internet of Things", "Internal Operations Team", "Investment Opportunity Tracking", "Integrated Office Technology"],
        correctAnswer: 0,
        explanation: "IoT (Internet of Things) refers to smart building sensors and connected devices.",
        module: 6
      },
      {
        id: 25,
        question: "What license is typically required for property management?",
        options: ["Contractor license", "Real estate broker license", "Law license", "No license required"],
        correctAnswer: 1,
        explanation: "Most states require a real estate broker license for professional property management.",
        module: 1
      },
      {
        id: 26,
        question: "When should renewal discussions typically begin?",
        options: ["After lease ends", "60-90 days before lease end", "On move-in day", "When tenant complains"],
        correctAnswer: 1,
        explanation: "Starting renewal discussions 60-90 days before lease end allows time for decisions.",
        module: 2
      },
      {
        id: 27,
        question: "What is a capital expense?",
        options: ["Monthly utility bill", "Major improvement extending useful life", "Routine cleaning", "Minor repair"],
        correctAnswer: 1,
        explanation: "Capital expenses are major improvements that extend property useful life.",
        module: 3
      },
      {
        id: 28,
        question: "What helps manage late rent payments?",
        options: ["Consistent enforcement of policies", "Ignoring late payments", "No policies", "Automatic forgiveness"],
        correctAnswer: 0,
        explanation: "Consistent enforcement of late fee policies encourages timely payments.",
        module: 4
      },
      {
        id: 29,
        question: "What are reasonable accommodations for?",
        options: ["All tenants", "Tenants with disabilities", "Only wealthy tenants", "No one"],
        correctAnswer: 1,
        explanation: "Reasonable accommodations are policy changes required for tenants with disabilities.",
        module: 5
      },
      {
        id: 30,
        question: "What team structure combines functional and property focus?",
        options: ["Functional teams only", "Matrix teams", "No teams", "Random teams"],
        correctAnswer: 1,
        explanation: "Matrix teams combine functional specialties with property-specific focus.",
        module: 6
      },
      {
        id: 31,
        question: "What professional association focuses on residential management?",
        options: ["IREM", "NARPM", "BOMA", "CAI"],
        correctAnswer: 1,
        explanation: "NARPM (National Association of Residential Property Managers) focuses on residential property management.",
        module: 1
      },
      {
        id: 32,
        question: "What is income verification for?",
        options: ["Ensuring tenant can afford rent", "Checking credit score", "Verifying rental history", "Criminal background"],
        correctAnswer: 0,
        explanation: "Income verification ensures tenants have sufficient income to afford the rent.",
        module: 2
      },
      {
        id: 33,
        question: "What should emergency response plans include?",
        options: ["Communication protocols", "Personal phone numbers", "Gossip channels", "Social media passwords"],
        correctAnswer: 0,
        explanation: "Emergency plans should include communication protocols for tenant notification.",
        module: 3
      },
      {
        id: 34,
        question: "What should vendor payment processing include?",
        options: ["Invoice approval and verification", "Automatic payment without review", "Cash payments only", "No documentation"],
        correctAnswer: 0,
        explanation: "Vendor payments should include invoice approval and work verification.",
        module: 4
      },
      {
        id: 35,
        question: "What does ADA require for public accommodations?",
        options: ["Accessibility", "No changes", "Higher rents", "Fewer tenants"],
        correctAnswer: 0,
        explanation: "ADA requires accessibility for people with disabilities in public accommodations.",
        module: 5
      },
      {
        id: 36,
        question: "What is the PDCA cycle?",
        options: ["Plan-Do-Check-Act", "Property-Development-Construction-Acquisition", "People-Data-Computers-Accounting", "Planning-Documentation-Communication-Action"],
        correctAnswer: 0,
        explanation: "PDCA (Plan-Do-Check-Act) is a continuous improvement methodology.",
        module: 6
      },
      {
        id: 37,
        question: "What is off-site management?",
        options: ["Manager lives at property", "Central office manages multiple properties", "No management", "Tenant self-management"],
        correctAnswer: 1,
        explanation: "Off-site management involves managing properties from a central office location.",
        module: 1
      },
      {
        id: 38,
        question: "What reduces turnover costs?",
        options: ["High tenant turnover", "Tenant retention", "Frequent evictions", "Poor maintenance"],
        correctAnswer: 1,
        explanation: "Tenant retention reduces vacancy, marketing, and turnover repair costs.",
        module: 2
      },
      {
        id: 39,
        question: "What technology helps track maintenance requests?",
        options: ["Property management software", "Paper notebooks only", "Memory alone", "Tenant word of mouth"],
        correctAnswer: 0,
        explanation: "Property management software tracks maintenance requests and work orders efficiently.",
        module: 3
      },
      {
        id: 40,
        question: "What measures cash flow return on investment?",
        options: ["Occupancy rate", "Cash-on-cash return", "Collection rate", "Turnover rate"],
        correctAnswer: 1,
        explanation: "Cash-on-cash return measures annual cash flow divided by invested capital.",
        module: 4
      }
    ]
  }
};
