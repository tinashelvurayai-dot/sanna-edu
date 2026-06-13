export const maritimeOperationsDiploma = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "maritime-operations-diploma",
  title: "Maritime Operations (Diploma)",
  description: "Advanced diploma program covering comprehensive maritime operations management, including vessel navigation, port operations, regulatory compliance, and international shipping standards. Builds upon yacht management fundamentals.",
  duration: "10 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  prerequisite: "Yacht Management Certificate or equivalent experience",
  icon: "🚢",
  badge: "Diploma",
  upgradePath: "Advanced from Yacht Management Certificate",
  
  // 2. MODULE ARCHITECTURE - 6 Comprehensive Advanced Modules
  modules: [
    {
      id: 1,
      title: "Advanced Navigation and Voyage Planning",
      content: `# Advanced Navigation and Voyage Planning

## Professional Voyage Management
Advanced voyage planning goes beyond basic route plotting to encompass comprehensive risk assessment, weather optimization, and regulatory compliance for commercial maritime operations.

**Four Pillars of Advanced Voyage Planning:**
1. **Strategic Route Optimization** - Balancing safety, efficiency, and cost
2. **Dynamic Weather Routing** - Real-time weather adaptation
3. **Regulatory Compliance Planning** - Meeting all international requirements
4. **Contingency Development** - Preparing for unexpected events

### Electronic Navigation Systems
Modern vessels rely on integrated electronic systems:

**Primary Navigation Systems:**
- **ECDIS (Electronic Chart Display and Information System)** - Mandatory for most commercial vessels
- **Integrated Bridge Systems** - Combining radar, GPS, AIS, and communications
- **Dynamic Positioning Systems** - For precise position maintenance
- **Voyage Data Recorders** - Continuous recording of navigation data

**System Integration Requirements:**
- All navigation systems must share common reference points
- Regular system updates and integrity checks
- Backup systems for critical navigation functions
- Cybersecurity measures for digital navigation

### Weather Analysis and Routing
Professional weather management strategies:

**Weather Data Sources:**
- **Satellite Weather Services** - Global coverage with high accuracy
- **Weather Routing Companies** - Professional routing advice
- **Port Meteorological Offices** - Localized forecasts
- **Onboard Weather Instruments** - Real-time environmental monitoring

**Routing Decision Factors:**
- Storm avoidance with safe distance margins
- Current utilization for fuel efficiency
- Ice zone monitoring and avoidance
- Swell and wave height considerations for cargo safety

### International Waterway Regulations
Navigating regulated maritime corridors:

**Major Shipping Lanes:**
- **Traffic Separation Schemes (TSS)** - Organized traffic flow systems
- **Mandatory Reporting Systems** - Vessel tracking requirements
- **Particularly Sensitive Sea Areas (PSSAs)** - Environmental protection zones
- **Archipelagic Sea Lanes** - Designated passage routes

**Transit Requirements:**
- Pilotage requirements in specific waterways
- Vessel traffic service (VTS) communications
- Speed restrictions in sensitive areas
- Special equipment requirements for certain routes

### Advanced Passage Planning Documentation
Comprehensive voyage documentation:

**Required Planning Documents:**
- **Passage Plan** - Detailed route with waypoints and contingencies
- **Risk Assessment** - Identified hazards and mitigation strategies
- **Weather Strategy** - Planned responses to forecast conditions
- **Fuel and Provision Calculations** - Comprehensive consumption planning

**Regulatory Compliance Records:**
- **International Safety Management (ISM) documentation**
- **Flag State approval for planned routes**
- **Port State information requirements**
- **Environmental compliance planning**

Advanced voyage planning ensures safe, efficient, and compliant maritime operations in all conditions.`,
      
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are the four pillars of advanced voyage planning?",
          options: [
            "Route Optimization, Weather Routing, Regulatory Compliance, Contingency Development",
            "Navigation, Communication, Maintenance, Administration",
            "Safety, Speed, Cost, Comfort",
            "Planning, Executing, Monitoring, Reporting"
          ],
          correctAnswer: 0,
          explanation: "The four pillars are Strategic Route Optimization, Dynamic Weather Routing, Regulatory Compliance Planning, and Contingency Development."
        },
        {
          id: 2,
          question: "What does ECDIS stand for?",
          options: [
            "Electronic Chart Display and Information System",
            "Electronic Course Display and Information System",
            "Emergency Chart Display and Information System",
            "Electronic Chart Data and Information System"
          ],
          correctAnswer: 0,
          explanation: "ECDIS stands for Electronic Chart Display and Information System, mandatory for most commercial vessels."
        },
        {
          id: 3,
          question: "What provides global weather coverage with high accuracy?",
          options: [
            "Satellite Weather Services",
            "Local radio forecasts",
            "Newspaper weather reports",
            "Crew observations only"
          ],
          correctAnswer: 0,
          explanation: "Satellite Weather Services provide global coverage with high accuracy for professional routing."
        },
        {
          id: 4,
          question: "What are organized traffic flow systems in busy waterways?",
          options: [
            "Traffic Separation Schemes (TSS)",
            "Random navigation patterns",
            "Free sailing areas",
            "Military exercise zones"
          ],
          correctAnswer: 0,
          explanation: "Traffic Separation Schemes (TSS) organize traffic flow in busy waterways."
        },
        {
          id: 5,
          question: "What continuously records navigation data?",
          options: [
            "Voyage Data Recorders",
            "Engine logbooks",
            "Crew notebooks",
            "Passenger diaries"
          ],
          correctAnswer: 0,
          explanation: "Voyage Data Recorders continuously record navigation data for safety analysis."
        },
        {
          id: 6,
          question: "What type of systems combine radar, GPS, AIS, and communications?",
          options: [
            "Integrated Bridge Systems",
            "Separate standalone systems",
            "Manual navigation tools",
            "Paper chart systems"
          ],
          correctAnswer: 0,
          explanation: "Integrated Bridge Systems combine multiple navigation and communication systems."
        },
        {
          id: 7,
          question: "What maintains precise vessel position without anchoring?",
          options: [
            "Dynamic Positioning Systems",
            "Traditional anchoring",
            "Mooring lines",
            "Drifting with currents"
          ],
          correctAnswer: 0,
          explanation: "Dynamic Positioning Systems maintain precise position without anchoring."
        },
        {
          id: 8,
          question: "What provides professional routing advice?",
          options: [
            "Weather Routing Companies",
            "Port cafés",
            "Local fishermen",
            "Tourist information"
          ],
          correctAnswer: 0,
          explanation: "Weather Routing Companies provide professional weather routing advice."
        },
        {
          id: 9,
          question: "What are environmental protection zones?",
          options: [
            "Particularly Sensitive Sea Areas (PSSAs)",
            "Free fishing zones",
            "Deep water areas",
            "International waters"
          ],
          correctAnswer: 0,
          explanation: "Particularly Sensitive Sea Areas (PSSAs) are environmental protection zones."
        },
        {
          id: 10,
          question: "What documentation identifies hazards and mitigation strategies?",
          options: [
            "Risk Assessment",
            "Menu planning",
            "Entertainment schedule",
            "Crew rotation plan"
          ],
          correctAnswer: 0,
          explanation: "Risk Assessment documentation identifies hazards and mitigation strategies."
        },
        {
          id: 11,
          question: "What must all navigation systems share?",
          options: [
            "Common reference points",
            "Different time zones",
            "Separate power sources",
            "Independent databases"
          ],
          correctAnswer: 0,
          explanation: "All navigation systems must share common reference points for integration."
        },
        {
          id: 12,
          question: "What considers currents for fuel efficiency?",
          options: [
            "Routing decision factors",
            "Entertainment planning",
            "Crew scheduling",
            "Menu preparation"
          ],
          correctAnswer: 0,
          explanation: "Current utilization for fuel efficiency is a routing decision factor."
        },
        {
          id: 13,
          question: "What requires vessel tracking?",
          options: [
            "Mandatory Reporting Systems",
            "Social media updates",
            "Newspaper reports",
            "Radio entertainment"
          ],
          correctAnswer: 0,
          explanation: "Mandatory Reporting Systems require vessel tracking in specific areas."
        },
        {
          id: 14,
          question: "What needs regular updates and integrity checks?",
          options: [
            "Navigation systems",
            "Crew uniforms",
            "Guest amenities",
            "Menu items"
          ],
          correctAnswer: 0,
          explanation: "Navigation systems need regular updates and integrity checks."
        },
        {
          id: 15,
          question: "What is needed for digital navigation security?",
          options: [
            "Cybersecurity measures",
            "Physical locks",
            "Paper backups only",
            "No security needed"
          ],
          correctAnswer: 0,
          explanation: "Cybersecurity measures protect digital navigation systems."
        },
        {
          id: 16,
          question: "What monitors ice zones?",
          options: [
            "Routing decision factors",
            "Entertainment systems",
            "Kitchen equipment",
            "Cleaning schedules"
          ],
          correctAnswer: 0,
          explanation: "Ice zone monitoring is a routing decision factor."
        },
        {
          id: 17,
          question: "What are designated passage routes through island groups?",
          options: [
            "Archipelagic Sea Lanes",
            "Random sailing routes",
            "Fishing grounds",
            "Military zones"
          ],
          correctAnswer: 0,
          explanation: "Archipelagic Sea Lanes are designated passage routes through island groups."
        },
        {
          id: 18,
          question: "What documentation shows planned weather responses?",
          options: [
            "Weather Strategy",
            "Guest list",
            "Crew certificates",
            "Inventory sheets"
          ],
          correctAnswer: 0,
          explanation: "Weather Strategy documents planned responses to forecast conditions."
        },
        {
          id: 19,
          question: "What requires VTS communications?",
          options: [
            "Transit requirements",
            "Social conversations",
            "Entertainment shows",
            "Crew meetings"
          ],
          correctAnswer: 0,
          explanation: "Vessel Traffic Service (VTS) communications are required in specific areas."
        },
        {
          id: 20,
          question: "What planning considers swell and wave height?",
          options: [
            "Routing decision factors",
            "Menu planning",
            "Entertainment selection",
            "Crew training"
          ],
          correctAnswer: 0,
          explanation: "Swell and wave height considerations for cargo safety are routing decision factors."
        }
      ]
    },
    {
      id: 2,
      title: "Port Operations and Logistics Management",
      content: `# Port Operations and Logistics Management

## Comprehensive Port Management
Professional port operations involve complex coordination between vessels, port authorities, service providers, and regulatory bodies to ensure efficient and compliant port calls.

**Five Key Port Operation Areas:**
1. **Port Entry and Clearance Procedures** - Regulatory compliance
2. **Cargo Operations Management** - Loading and unloading coordination
3. **Port Service Coordination** - Multiple service provider management
4. **Documentation and Administration** - Legal and financial requirements
5. **Departure Procedures** - Safe and timely port exit

### Port Entry Protocols
Systematic approach to port arrival:

**Pre-Arrival Requirements:**
- **ETA Notification** - Advance arrival notice (24-72 hours)
- **Pre-arrival Documentation** - Submission of required documents
- **Berth Allocation Confirmation** - Assigned berth information
- **Service Requests** - Pre-booking of required services

**Port Entry Coordination:**
- **Pilotage Arrangements** - Pilot boarding and disembarkation
- **Tug Assistance** - For maneuvering in confined spaces
- **Line Handling Services** - Mooring operations
- **Vessel Traffic Service (VTS) Communications** - Continuous coordination

### Cargo Operations Excellence
Managing commercial cargo operations:

**Cargo Planning:**
- **Stowage Planning** - Optimal cargo distribution
- **Loading Sequence** - Strategic loading order
- **Cargo Securing** - Proper lashing and securing
- **Dangerous Goods Handling** - Special requirements for hazardous cargo

**Operational Coordination:**
- **Stevedore Management** - Coordination with loading teams
- **Equipment Planning** - Crane and handling equipment scheduling
- **Cargo Documentation** - Bills of lading and cargo manifests
- **Quality Control** - Cargo condition monitoring

### Port Service Management
Coordinating multiple service providers:

**Essential Port Services:**
- **Bunkering Services** - Fuel and lubricant supply
- **Provisioning Services** - Food, water, and supplies
- **Waste Management** - Garbage and waste disposal
- **Technical Services** - Repairs and maintenance

**Service Coordination Principles:**
- Single point of contact for service coordination
- Service provider vetting and qualification
- Service scheduling to minimize port time
- Quality assurance for all services rendered

### Port Documentation Systems
Comprehensive documentation management:

**Regulatory Documents:**
- **Port Entry Forms** - Completed for each port call
- **Cargo Declaration** - Detailed cargo information
- **Crew List and Passenger Manifest** - Personnel documentation
- **Store and Bonded Goods Lists** - Onboard inventory declarations

**Operational Records:**
- **Time Sheets** - Service provider work records
- **Equipment Usage Logs** - Crane and equipment usage
- **Service Receipts** - Proof of service completion
- **Port Authority Communications** - All official correspondence

### Port Security Compliance
Meeting international port security standards:

**ISPS Code Requirements:**
- **Ship Security Plan Implementation**
- **Security Level Compliance** - Matching port security level
- **Access Control Systems** - Controlled boarding procedures
- **Security Drills and Training** - Regular security exercises

**Port Facility Security:**
- **Security Area Designations** - Restricted and controlled areas
- **Surveillance Systems** - CCTV and monitoring
- **Security Personnel Coordination** - Working with port security
- **Emergency Response Coordination** - Joint emergency plans

### Port Departure Procedures
Efficient port exit management:

**Departure Preparation:**
- **All Fast Certificate** - Confirmation all operations complete
- **Port Clearance Document** - Official permission to depart
- **Service Completion Certificates** - All services properly completed
- **Crew and Passenger Accountability** - All personnel accounted for

**Departure Execution:**
- **Pilot Coordination** - Pilot boarding for departure
- **Tug Services** - Assistance with unmooring
- **Traffic Clearance** - VTS departure permission
- **Port Limits Reporting** - Notification when clear of port

Effective port operations management reduces turnaround time, lowers costs, and ensures regulatory compliance.`,
      
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are the five key port operation areas?",
          options: [
            "Port Entry, Cargo Operations, Service Coordination, Documentation, Departure",
            "Cleaning, Cooking, Maintenance, Navigation, Entertainment",
            "Sales, Marketing, Finance, HR, Operations",
            "Design, Construction, Testing, Certification, Delivery"
          ],
          correctAnswer: 0,
          explanation: "The five key areas are Port Entry Procedures, Cargo Operations Management, Port Service Coordination, Documentation and Administration, and Departure Procedures."
        },
        {
          id: 2,
          question: "What does ETA stand for in port operations?",
          options: [
            "Estimated Time of Arrival",
            "Exact Time of Arrival",
            "Expected Time of Arrival",
            "Estimated Time of Approach"
          ],
          correctAnswer: 0,
          explanation: "ETA stands for Estimated Time of Arrival for advance port notification."
        },
        {
          id: 3,
          question: "What is optimal cargo distribution called?",
          options: [
            "Stowage Planning",
            "Random loading",
            "Quick loading",
            "Simple stacking"
          ],
          correctAnswer: 0,
          explanation: "Stowage Planning involves optimal cargo distribution for stability and safety."
        },
        {
          id: 4,
          question: "What does ISPS Code regulate?",
          options: [
            "Port and ship security",
            "Cargo loading",
            "Fuel efficiency",
            "Crew entertainment"
          ],
          correctAnswer: 0,
          explanation: "ISPS Code regulates International Ship and Port Facility Security."
        },
        {
          id: 5,
          question: "What confirms all port operations are complete?",
          options: [
            "All Fast Certificate",
            "Port entry form",
            "Cargo manifest",
            "Crew list"
          ],
          correctAnswer: 0,
          explanation: "All Fast Certificate confirms completion of all port operations."
        },
        {
          id: 6,
          question: "What must match port security level?",
          options: [
            "Ship Security Level",
            "Crew uniform colors",
            "Vessel speed",
            "Cargo type"
          ],
          correctAnswer: 0,
          explanation: "Ship Security Level must match the port facility security level."
        },
        {
          id: 7,
          question: "What coordinates with loading teams?",
          options: [
            "Stevedore Management",
            "Guest services",
            "Bridge operations",
            "Engine room work"
          ],
          correctAnswer: 0,
          explanation: "Stevedore Management coordinates with cargo loading teams."
        },
        {
          id: 8,
          question: "What provides fuel and lubricant supply?",
          options: [
            "Bunkering Services",
            "Provisioning Services",
            "Waste Management",
            "Technical Services"
          ],
          correctAnswer: 0,
          explanation: "Bunkering Services provide fuel and lubricant supply."
        },
        {
          id: 9,
          question: "What document gives official departure permission?",
          options: [
            "Port Clearance Document",
            "Cargo manifest",
            "Crew certificates",
            "Weather report"
          ],
          correctAnswer: 0,
          explanation: "Port Clearance Document gives official permission to depart."
        },
        {
          id: 10,
          question: "What requires special handling procedures?",
          options: [
            "Dangerous Goods",
            "Regular cargo",
            "Empty containers",
            "Passenger luggage"
          ],
          correctAnswer: 0,
          explanation: "Dangerous Goods require special handling and documentation."
        },
        {
          id: 11,
          question: "What advance notice is typically required?",
          options: [
            "24-72 hours",
            "1 hour",
            "1 week",
            "No notice"
          ],
          correctAnswer: 0,
          explanation: "24-72 hours advance ETA notification is typically required."
        },
        {
          id: 12,
          question: "What includes CCTV and monitoring?",
          options: [
            "Surveillance Systems",
            "Entertainment systems",
            "Navigation equipment",
            "Communication devices"
          ],
          correctAnswer: 0,
          explanation: "Surveillance Systems include CCTV and monitoring for security."
        },
        {
          id: 13,
          question: "What coordinates crane scheduling?",
          options: [
            "Equipment Planning",
            "Menu planning",
            "Entertainment schedule",
            "Crew training"
          ],
          correctAnswer: 0,
          explanation: "Equipment Planning coordinates crane and handling equipment scheduling."
        },
        {
          id: 14,
          question: "What provides food and supplies?",
          options: [
            "Provisioning Services",
            "Bunkering Services",
            "Technical Services",
            "Waste Management"
          ],
          correctAnswer: 0,
          explanation: "Provisioning Services provide food, water, and supplies."
        },
        {
          id: 15,
          question: "What records service provider work?",
          options: [
            "Time Sheets",
            "Guest comments",
            "Weather logs",
            "Navigation charts"
          ],
          correctAnswer: 0,
          explanation: "Time Sheets record service provider work hours and activities."
        },
        {
          id: 16,
          question: "What assists with vessel maneuvering?",
          options: [
            "Tug Assistance",
            "Pilotage only",
            "Crew effort alone",
            "Wind power"
          ],
          correctAnswer: 0,
          explanation: "Tug Assistance helps with maneuvering in confined port spaces."
        },
        {
          id: 17,
          question: "What monitors cargo condition?",
          options: [
            "Quality Control",
            "Entertainment quality",
            "Food quality",
            "Crew performance"
          ],
          correctAnswer: 0,
          explanation: "Quality Control monitors cargo condition during operations."
        },
        {
          id: 18,
          question: "What is required for hazardous cargo?",
          options: [
            "Special requirements",
            "Normal handling",
            "No documentation",
            "Quick loading only"
          ],
          correctAnswer: 0,
          explanation: "Dangerous Goods require special handling requirements."
        },
        {
          id: 19,
          question: "What handles garbage disposal?",
          options: [
            "Waste Management",
            "Provisioning Services",
            "Bunkering Services",
            "Technical Services"
          ],
          correctAnswer: 0,
          explanation: "Waste Management handles garbage and waste disposal."
        },
        {
          id: 20,
          question: "What is notification when clear of port?",
          options: [
            "Port Limits Reporting",
            "ETA notification",
            "Service request",
            "Weather report"
          ],
          correctAnswer: 0,
          explanation: "Port Limits Reporting notifies when vessel is clear of port limits."
        }
      ]
    },
    {
      id: 3,
      title: "Maritime Regulatory Compliance",
      content: `# Maritime Regulatory Compliance

## Comprehensive Regulatory Framework
Maritime operations must comply with complex layers of international, regional, and national regulations administered by multiple governing bodies and classification societies.

**Four Regulatory Compliance Domains:**
1. **International Maritime Organization (IMO) Regulations** - Global standards
2. **Flag State Requirements** - National registration compliance
3. **Port State Control** - Foreign port inspection regimes
4. **Classification Society Rules** - Technical and safety standards

### IMO Convention Implementation
Key international conventions and their requirements:

**SOLAS Convention - Safety of Life at Sea:**
- **Chapter II-1** - Construction - subdivision and stability
- **Chapter II-2** - Fire protection, detection, and extinction
- **Chapter III** - Life-saving appliances and arrangements
- **Chapter V** - Safety of navigation
- **Chapter XI-1/2** - Special measures to enhance maritime safety

**MARPOL Convention - Marine Pollution Prevention:**
- **Annex I** - Prevention of pollution by oil
- **Annex II** - Control of pollution by noxious liquid substances
- **Annex III** - Prevention of pollution by harmful substances in packaged form
- **Annex IV** - Prevention of pollution by sewage from ships
- **Annex V** - Prevention of pollution by garbage from ships
- **Annex VI** - Prevention of air pollution from ships

**Other Critical Conventions:**
- **STCW Convention** - Standards of Training, Certification and Watchkeeping
- **MLC Convention** - Maritime Labour Convention
- **BWM Convention** - Ballast Water Management
- **Anti-fouling Systems Convention**

### Flag State Administration
National regulatory requirements:

**Documentation Requirements:**
- **Certificate of Registry** - Proof of nationality and ownership
- **Tonnage Certificate** - International and national tonnage measurements
- **Minimum Safe Manning Certificate** - Required crew complement
- **International Oil Pollution Prevention Certificate**

**Inspection Regimes:**
- **Annual Surveys** - Comprehensive vessel inspections
- **Intermediate Surveys** - Between annual inspections
- **Renewal Surveys** - For certificate renewal
- **Additional Surveys** - After repairs or modifications

**Reporting Obligations:**
- **Casualty Reporting** - Incidents and accidents
- **Deficiency Reporting** - Safety or pollution deficiencies
- **Change Reporting** - Modifications or ownership changes
- **Periodic Reports** - Regular compliance reporting

### Port State Control (PSC) Management
Managing foreign port inspections:

**Major PSC Regimes:**
- **Paris MoU** - European and North Atlantic region
- **Tokyo MoU** - Asia-Pacific region
- **US Coast Guard** - United States port control
- **Other Regional Agreements** - Caribbean, Mediterranean, etc.

**Inspection Preparation:**
- **Documentation Readiness** - All certificates current and available
- **Equipment Functionality** - All safety equipment operational
- **Crew Preparedness** - Knowledge of emergency procedures
- **Record Keeping** - Proper maintenance and drill records

**Deficiency Management:**
- **Immediate Rectification** - For minor deficiencies
- **Port State Detention** - For serious deficiencies
- **Follow-up Inspections** - To verify rectification
- **Appeal Procedures** - Challenging inspection findings

### Classification Society Compliance
Meeting technical standards:

**Major Classification Societies:**
- **Lloyd's Register (LR)**
- **American Bureau of Shipping (ABS)**
- **DNV GL** (Now DNV)
- **Bureau Veritas (BV)**
- **Nippon Kaiji Kyokai (ClassNK)**

**Classification Services:**
- **Plan Approval** - Design and construction approval
- **Surveys During Construction** - Quality assurance
- **Periodic Surveys** - Maintenance of class status
- **Damage Assessment** - After incidents or accidents

**Class Notation Systems:**
- **Main Class Notation** - Basic seaworthiness
- **Additional Class Notations** - Special capabilities or equipment
- **Service Restrictions** - Limitations on operations
- **Temporary Withdrawal** - For deficiencies or overdue surveys

### Regulatory Documentation Management
Comprehensive record-keeping systems:

**Required Vessel Certificates:**
- **Statutory Certificates** - Required by international conventions
- **Class Certificates** - Issued by classification society
- **Commercial Certificates** - Required for trading
- **Additional Certificates** - Specific to cargo or operations

**Record Keeping Requirements:**
- **Continuous Synopsis Record (CSR)** - Vessel history
- **Oil Record Book** - Oil transfer and disposal records
- **Garbage Record Book** - Waste disposal records
- **Ballast Water Record Book** - Ballast operations records

**Audit and Verification:**
- **Internal Audits** - Company compliance checks
- **External Audits** - Independent verification
- **Regulatory Audits** - By flag or port state
- **Certification Audits** - For maintaining certificates

Effective regulatory compliance management prevents detentions, reduces insurance costs, and maintains operational legitimacy.`,
      
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are the four regulatory compliance domains?",
          options: [
            "IMO Regulations, Flag State, Port State Control, Classification Society",
            "Safety, Navigation, Communication, Maintenance",
            "Crew, Cargo, Vessel, Environment",
            "Planning, Execution, Monitoring, Reporting"
          ],
          correctAnswer: 0,
          explanation: "The four domains are IMO Regulations, Flag State Requirements, Port State Control, and Classification Society Rules."
        },
        {
          id: 2,
          question: "Which SOLAS chapter covers fire protection?",
          options: [
            "Chapter II-2",
            "Chapter III",
            "Chapter V",
            "Chapter XI"
          ],
          correctAnswer: 0,
          explanation: "SOLAS Chapter II-2 covers fire protection, detection, and extinction."
        },
        {
          id: 3,
          question: "Which MARPOL annex covers air pollution?",
          options: [
            "Annex VI",
            "Annex I",
            "Annex IV",
            "Annex V"
          ],
          correctAnswer: 0,
          explanation: "MARPOL Annex VI covers prevention of air pollution from ships."
        },
        {
          id: 4,
          question: "What proves vessel nationality?",
          options: [
            "Certificate of Registry",
            "Tonnage Certificate",
            "Safety Certificate",
            "Crew list"
          ],
          correctAnswer: 0,
          explanation: "Certificate of Registry proves vessel nationality and ownership."
        },
        {
          id: 5,
          question: "Which PSC regime covers Asia-Pacific?",
          options: [
            "Tokyo MoU",
            "Paris MoU",
            "US Coast Guard",
            "Caribbean MoU"
          ],
          correctAnswer: 0,
          explanation: "Tokyo MoU covers Asia-Pacific region port state control."
        },
        {
          id: 6,
          question: "What does STCW stand for?",
          options: [
            "Standards of Training, Certification and Watchkeeping",
            "Safety Training for Crew Watch",
            "Standards for Technical Crew Work",
            "Ship Training and Certification Worldwide"
          ],
          correctAnswer: 0,
          explanation: "STCW stands for Standards of Training, Certification and Watchkeeping."
        },
        {
          id: 7,
          question: "What covers crew working conditions?",
          options: [
            "MLC Convention",
            "SOLAS Convention",
            "MARPOL Convention",
            "BWM Convention"
          ],
          correctAnswer: 0,
          explanation: "MLC (Maritime Labour Convention) covers crew working and living conditions."
        },
        {
          id: 8,
          question: "Which classification society is LR?",
          options: [
            "Lloyd's Register",
            "Lloyd's of London",
            "Lloyd's Bank",
            "Lloyd's Insurance"
          ],
          correctAnswer: 0,
          explanation: "LR stands for Lloyd's Register classification society."
        },
        {
          id: 9,
          question: "What happens for serious deficiencies?",
          options: [
            "Port State Detention",
            "Small fine only",
            "Warning only",
            "No action"
          ],
          correctAnswer: 0,
          explanation: "Port State Detention occurs for serious safety or pollution deficiencies."
        },
        {
          id: 10,
          question: "Which MARPOL annex covers garbage?",
          options: [
            "Annex V",
            "Annex I",
            "Annex III",
            "Annex VI"
          ],
          correctAnswer: 0,
          explanation: "MARPOL Annex V covers prevention of pollution by garbage."
        },
        {
          id: 11,
          question: "What covers ballast water management?",
          options: [
            "BWM Convention",
            "SOLAS Convention",
            "MARPOL Convention",
            "STCW Convention"
          ],
          correctAnswer: 0,
          explanation: "BWM Convention covers Ballast Water Management."
        },
        {
          id: 12,
          question: "What shows required crew complement?",
          options: [
            "Minimum Safe Manning Certificate",
            "Crew list",
            "Passenger manifest",
            "Training records"
          ],
          correctAnswer: 0,
          explanation: "Minimum Safe Manning Certificate shows required crew complement."
        },
        {
          id: 13,
          question: "Which PSC regime covers Europe?",
          options: [
            "Paris MoU",
            "Tokyo MoU",
            "US Coast Guard",
            "Mediterranean MoU"
          ],
          correctAnswer: 0,
          explanation: "Paris MoU covers European and North Atlantic region."
        },
        {
          id: 14,
          question: "What does ABS stand for?",
          options: [
            "American Bureau of Shipping",
            "American Boat Standards",
            "Atlantic Bureau of Shipping",
            "American Building Standards"
          ],
          correctAnswer: 0,
          explanation: "ABS stands for American Bureau of Shipping classification society."
        },
        {
          id: 15,
          question: "What records oil transfers?",
          options: [
            "Oil Record Book",
            "Garbage Record Book",
            "Ballast Water Record Book",
            "Engine logbook"
          ],
          correctAnswer: 0,
          explanation: "Oil Record Book records oil transfer and disposal operations."
        },
        {
          id: 16,
          question: "Which SOLAS chapter covers navigation safety?",
          options: [
            "Chapter V",
            "Chapter II-1",
            "Chapter III",
            "Chapter XI"
          ],
          correctAnswer: 0,
          explanation: "SOLAS Chapter V covers safety of navigation."
        },
        {
          id: 17,
          question: "What covers anti-fouling systems?",
          options: [
            "Anti-fouling Systems Convention",
            "MARPOL Convention",
            "SOLAS Convention",
            "BWM Convention"
          ],
          correctAnswer: 0,
          explanation: "Anti-fouling Systems Convention regulates hull coatings."
        },
        {
          id: 18,
          question: "What is vessel history document?",
          options: [
            "Continuous Synopsis Record (CSR)",
            "Certificate of Registry",
            "Tonnage Certificate",
            "Safety Certificate"
          ],
          correctAnswer: 0,
          explanation: "Continuous Synopsis Record (CSR) documents vessel history."
        },
        {
          id: 19,
          question: "What classification society is BV?",
          options: [
            "Bureau Veritas",
            "British Vessels",
            "Bureau of Vessels",
            "Boat Verification"
          ],
          correctAnswer: 0,
          explanation: "BV stands for Bureau Veritas classification society."
        },
        {
          id: 20,
          question: "Which MARPOL annex covers sewage?",
          options: [
            "Annex IV",
            "Annex I",
            "Annex III",
            "Annex V"
          ],
          correctAnswer: 0,
          explanation: "MARPOL Annex IV covers prevention of pollution by sewage."
        }
      ]
    },
    {
      id: 4,
      title: "Maritime Safety Management Systems",
      content: `# Maritime Safety Management Systems

## Systematic Safety Management
The International Safety Management (ISM) Code provides a standardized framework for safe ship operation and pollution prevention through structured safety management systems.

**Four Pillars of Safety Management:**
1. **Safety Policy Development** - Company safety commitment
2. **Risk Management Implementation** - Hazard identification and control
3. **Emergency Preparedness** - Response capability development
4. **Continuous Improvement** - Performance monitoring and enhancement

### ISM Code Requirements
International Safety Management Code implementation:

**Documentation Requirements:**
- **Safety Management Certificate (SMC)** - Company compliance
- **Document of Compliance (DOC)** - Vessel compliance
- **Safety Management Manual (SMM)** - Comprehensive procedures
- **Records of Implementation** - Evidence of system operation

**Key ISM Elements:**
- **Company Safety Policy** - Management commitment statement
- **Designated Person Ashore (DPA)** - Shore-based safety oversight
- **Master's Responsibility and Authority** - Clear command structure
- **Resources and Personnel** - Adequate staffing and equipment
- **Emergency Preparedness** - Response procedures and drills
- **Reports and Analysis** - Incident investigation and learning

### Risk Management Processes
Systematic hazard identification and control:

**Risk Assessment Methodology:**
- **Hazard Identification** - Systematic identification of risks
- **Risk Analysis** - Evaluation of likelihood and consequences
- **Risk Evaluation** - Comparison against criteria
- **Risk Treatment** - Implementation of control measures

**Common Risk Areas:**
- **Navigation Risks** - Collision, grounding, stranding
- **Operational Risks** - Cargo operations, mooring, anchoring
- **Technical Risks** - Equipment failure, structural issues
- **Human Element Risks** - Fatigue, training, communication

**Risk Control Measures:**
- **Engineering Controls** - Design and equipment solutions
- **Administrative Controls** - Procedures and training
- **Personal Protective Equipment** - Individual protection
- **Emergency Controls** - Response and recovery measures

### Emergency Response Planning
Comprehensive emergency management:

**Emergency Categories:**
- **Fire and Explosion** - Various types and locations
- **Flooding and Stability** - Hull damage and water ingress
- **Collision and Grounding** - Navigation emergencies
- **Personnel Emergencies** - Medical, man overboard
- **Pollution Emergencies** - Oil or chemical spills

**Emergency Response Organization:**
- **Emergency Command Structure** - Clear roles and responsibilities
- **Emergency Control Center** - Designated command location
- **Emergency Teams** - Trained response personnel
- **External Coordination** - Shore support and authorities

**Drill and Exercise Requirements:**
- **Monthly Drills** - As required by SOLAS
- **Quarterly Comprehensive Drills** - Full-scale exercises
- **Annual Emergency Training** - Refresher training
- **Drill Evaluation** - Performance assessment and improvement

### Safety Culture Development
Building organizational safety commitment:

**Safety Leadership:**
- **Management Commitment** - Visible safety leadership
- **Safety Communication** - Open reporting and feedback
- **Safety Accountability** - Clear responsibility assignment
- **Safety Recognition** - Positive reinforcement of safe behavior

**Crew Safety Engagement:**
- **Safety Meetings** - Regular safety discussions
- **Safety Observations** - Crew reporting of hazards
- **Safety Suggestions** - Improvement recommendations
- **Safety Training** - Continuous skill development

**Safety Performance Measurement:**
- **Leading Indicators** - Proactive safety measures
- **Lagging Indicators** - Accident and incident statistics
- **Safety Audits** - System effectiveness assessment
- **Management Reviews** - Periodic system evaluation

### Incident Investigation and Learning
Systematic approach to learning from incidents:

**Incident Reporting Requirements:**
- **Immediate Reporting** - For serious incidents
- **Formal Investigation** - For significant incidents
- **Root Cause Analysis** - Identifying underlying causes
- **Corrective Actions** - Preventing recurrence

**Investigation Methodology:**
- **Evidence Collection** - Physical, documentary, witness
- **Timeline Development** - Sequence of events
- **Causal Factor Analysis** - Why incidents occurred
- **Recommendation Development** - Improvement measures

**Learning Implementation:**
- **Safety Alerts** - Sharing lessons learned
- **Procedure Updates** - Incorporating improvements
- **Training Updates** - Addressing identified gaps
- **Industry Sharing** - Contributing to industry safety

### Safety Management System Auditing
Verifying system effectiveness:

**Internal Audits:**
- **Annual Audit Program** - Scheduled internal audits
- **Auditor Competence** - Trained and qualified auditors
- **Audit Methodology** - Systematic audit approach
- **Corrective Action Follow-up** - Verifying implementation

**External Audits:**
- **Annual Verification Audits** - For DOC and SMC renewal
- **Intermediate Verification** - Between renewal audits
- **Additional Audits** - Following major changes or incidents
- **Certification Audits** - Initial certification process

**Audit Preparation:**
- **Documentation Readiness** - All required documents available
- **Personnel Preparedness** - Knowledge of procedures
- **Equipment Status** - Proper maintenance and operation
- **Record Keeping** - Complete and accurate records

Effective safety management systems reduce accidents, improve operational efficiency, and demonstrate regulatory compliance.`,
      
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are the four pillars of safety management?",
          options: [
            "Safety Policy, Risk Management, Emergency Preparedness, Continuous Improvement",
            "Planning, Execution, Monitoring, Reporting",
            "Crew, Equipment, Procedures, Documentation",
            "Navigation, Communication, Maintenance, Administration"
          ],
          correctAnswer: 0,
          explanation: "The four pillars are Safety Policy Development, Risk Management Implementation, Emergency Preparedness, and Continuous Improvement."
        },
        {
          id: 2,
          question: "What does ISM stand for?",
          options: [
            "International Safety Management",
            "International Ship Management",
            "Integrated Safety Management",
            "International Security Management"
          ],
          correctAnswer: 0,
          explanation: "ISM stands for International Safety Management Code."
        },
        {
          id: 3,
          question: "What proves company compliance with ISM?",
          options: [
            "Document of Compliance (DOC)",
            "Safety Management Certificate (SMC)",
            "Safety Management Manual",
            "Certificate of Registry"
          ],
          correctAnswer: 0,
          explanation: "Document of Compliance (DOC) proves company compliance with ISM Code."
        },
        {
          id: 4,
          question: "What is systematic hazard identification?",
          options: [
            "Risk Assessment",
            "Emergency planning",
            "Drill execution",
            "Audit preparation"
          ],
          correctAnswer: 0,
          explanation: "Risk Assessment includes systematic hazard identification."
        },
        {
          id: 5,
          question: "What provides shore-based safety oversight?",
          options: [
            "Designated Person Ashore (DPA)",
            "Company manager",
            "Insurance surveyor",
            "Port authority"
          ],
          correctAnswer: 0,
          explanation: "Designated Person Ashore (DPA) provides shore-based safety oversight."
        },
        {
          id: 6,
          question: "How often are monthly drills required?",
          options: [
            "Monthly",
            "Weekly",
            "Quarterly",
            "Annually"
          ],
          correctAnswer: 0,
          explanation: "Monthly drills are required by SOLAS regulations."
        },
        {
          id: 7,
          question: "What evaluates likelihood and consequences?",
          options: [
            "Risk Analysis",
            "Emergency response",
            "Drill evaluation",
            "Audit process"
          ],
          correctAnswer: 0,
          explanation: "Risk Analysis evaluates likelihood and consequences of hazards."
        },
        {
          id: 8,
          question: "What shows management commitment?",
          options: [
            "Company Safety Policy",
            "Crew list",
            "Maintenance records",
            "Navigation charts"
          ],
          correctAnswer: 0,
          explanation: "Company Safety Policy demonstrates management commitment to safety."
        },
        {
          id: 9,
          question: "What identifies underlying causes?",
          options: [
            "Root Cause Analysis",
            "Immediate reporting",
            "Evidence collection",
            "Timeline development"
          ],
          correctAnswer: 0,
          explanation: "Root Cause Analysis identifies underlying causes of incidents."
        },
        {
          id: 10,
          question: "What are proactive safety measures?",
          options: [
            "Leading Indicators",
            "Lagging Indicators",
            "Accident statistics",
            "Incident reports"
          ],
          correctAnswer: 0,
          explanation: "Leading Indicators are proactive safety performance measures."
        },
        {
          id: 11,
          question: "What proves vessel compliance with ISM?",
          options: [
            "Safety Management Certificate (SMC)",
            "Document of Compliance (DOC)",
            "Certificate of Registry",
            "Tonnage Certificate"
          ],
          correctAnswer: 0,
          explanation: "Safety Management Certificate (SMC) proves vessel compliance with ISM."
        },
        {
          id: 12,
          question: "What compares risk against criteria?",
          options: [
            "Risk Evaluation",
            "Risk Analysis",
            "Hazard Identification",
            "Risk Treatment"
          ],
          correctAnswer: 0,
          explanation: "Risk Evaluation compares analyzed risk against acceptance criteria."
        },
        {
          id: 13,
          question: "What is clear command structure?",
          options: [
            "Master's Responsibility and Authority",
            "Crew hierarchy",
            "Company organization",
            "Port authority structure"
          ],
          correctAnswer: 0,
          explanation: "Master's Responsibility and Authority establishes clear command structure."
        },
        {
          id: 14,
          question: "What are accident statistics?",
          options: [
            "Lagging Indicators",
            "Leading Indicators",
            "Safety audits",
            "Drill evaluations"
          ],
          correctAnswer: 0,
          explanation: "Lagging Indicators include accident and incident statistics."
        },
        {
          id: 15,
          question: "What implements control measures?",
          options: [
            "Risk Treatment",
            "Risk Analysis",
            "Hazard Identification",
            "Risk Evaluation"
          ],
          correctAnswer: 0,
          explanation: "Risk Treatment implements control measures for identified risks."
        },
        {
          id: 16,
          question: "What is comprehensive procedures document?",
          options: [
            "Safety Management Manual (SMM)",
            "Certificate of Registry",
            "Crew training manual",
            "Navigation guide"
          ],
          correctAnswer: 0,
          explanation: "Safety Management Manual (SMM) contains comprehensive safety procedures."
        },
        {
          id: 17,
          question: "What is systematic audit approach?",
          options: [
            "Audit Methodology",
            "Random checking",
            "Informal inspection",
            "Quick review"
          ],
          correctAnswer: 0,
          explanation: "Audit Methodology provides systematic approach to auditing."
        },
        {
          id: 18,
          question: "What are crew hazard reports?",
          options: [
            "Safety Observations",
            "Safety Suggestions",
            "Incident reports",
            "Maintenance requests"
          ],
          correctAnswer: 0,
          explanation: "Safety Observations are crew reports of hazards or unsafe conditions."
        },
        {
          id: 19,
          question: "What prevents incident recurrence?",
          options: [
            "Corrective Actions",
            "Immediate reporting",
            "Evidence collection",
            "Timeline development"
          ],
          correctAnswer: 0,
          explanation: "Corrective Actions prevent recurrence of incidents."
        },
        {
          id: 20,
          question: "What assesses system effectiveness?",
          options: [
            "Safety Audits",
            "Drill evaluations",
            "Incident investigations",
            "Risk assessments"
          ],
          correctAnswer: 0,
          explanation: "Safety Audits assess effectiveness of safety management systems."
        }
      ]
    },
    {
      id: 5,
      title: "Maritime Environmental Management",
      content: `# Maritime Environmental Management

## Comprehensive Environmental Stewardship
Modern maritime operations require systematic environmental management to prevent pollution, minimize ecological impact, and comply with increasingly stringent international regulations.

**Four Environmental Management Principles:**
1. **Pollution Prevention** - Preventing discharge of harmful substances
2. **Environmental Compliance** - Meeting regulatory requirements
3. **Resource Efficiency** - Minimizing consumption and waste
4. **Continuous Improvement** - Enhancing environmental performance

### MARPOL Convention Implementation
Comprehensive pollution prevention measures:

**Annex I - Oil Pollution Prevention:**
- **Oil Discharge Criteria** - Strict limits on oil content in discharge water
- **Oil Record Book** - Mandatory recording of all oil operations
- **Oil Pollution Emergency Plan** - Required response procedures
- **Oil Tanker Requirements** - Additional measures for tankers

**Annex IV - Sewage Pollution Prevention:**
- **Sewage Treatment Systems** - Required treatment before discharge
- **Discharge Criteria** - Distance from land and treatment requirements
- **Sewage Record Book** - Recording of sewage operations
- **Port Reception Facilities** - Use of shore-based facilities

**Annex V - Garbage Management:**
- **Garbage Management Plan** - Required waste management procedures
- **Garbage Record Book** - Recording of waste disposal
- **Discharge Prohibitions** - Complete ban on plastic discharge
- **Recycling Requirements** - Separation and recycling procedures

**Annex VI - Air Pollution Prevention:**
- **SOx Emission Controls** - Sulfur content limits in fuel
- **NOx Emission Controls** - Nitrogen oxide reduction requirements
- **Energy Efficiency Measures** - Fuel consumption optimization
- **Ozone Depleting Substances** - Controls on refrigerants and fire systems

### Ballast Water Management
Preventing invasive species transfer:

**BWM Convention Requirements:**
- **Ballast Water Management Plan** - Required procedures
- **Ballast Water Record Book** - Recording of ballast operations
- **Treatment Standards** - Biological organism limits
- **Exchange Requirements** - Mid-ocean exchange procedures

**Ballast Water Treatment Systems:**
- **Filtration Systems** - Physical removal of organisms
- **Disinfection Systems** - Chemical or UV treatment
- **Management Methods** - Exchange, treatment, or combination
- **System Certification** - Type approval requirements

### Energy Efficiency Management
Reducing fuel consumption and emissions:

**Energy Efficiency Operational Index (EEOI):**
- **Monitoring Requirement** - Regular fuel consumption tracking
- **Performance Benchmarking** - Comparison with similar vessels
- **Improvement Measures** - Operational and technical enhancements
- **Reporting Requirements** - Documentation of efficiency measures

**Energy Efficiency Measures:**
- **Voyage Optimization** - Route and speed optimization
- **Hull and Propeller Maintenance** - Reducing resistance
- **Engine Optimization** - Efficient power generation
- **Auxiliary System Management** - Reducing hotel load

### Waste Management Systems
Comprehensive waste handling procedures:

**Waste Categories:**
- **Operational Wastes** - Oily waste, sewage, garbage
- **Maintenance Wastes** - Chemicals, paints, batteries
- **Domestic Wastes** - Food waste, packaging, paper
- **Hazardous Wastes** - Special handling requirements

**Waste Handling Procedures:**
- **Segregation at Source** - Separation by waste type
- **Proper Storage** - Safe and compliant storage
- **Treatment Requirements** - Processing before disposal
- **Documentation** - Complete waste tracking

**Port Reception Facilities:**
- **Advance Notification** - Informing ports of waste quantities
- **Facility Assessment** - Ensuring adequate reception capacity
- **Delivery Procedures** - Safe transfer to shore facilities
- **Receipt Documentation** - Proof of proper disposal

### Environmental Compliance Monitoring
Ensuring regulatory compliance:

**Documentation Requirements:**
- **International Air Pollution Prevention Certificate**
- **International Sewage Pollution Prevention Certificate**
- **International Energy Efficiency Certificate**
- **Ballast Water Management Certificate**

**Inspection Preparedness:**
- **Certificate Validity** - Current and properly endorsed
- **Record Book Completeness** - Accurate and complete entries
- **Equipment Functionality** - All treatment systems operational
- **Crew Training** - Knowledge of environmental procedures

**Regulatory Updates:**
- **IMO Amendments** - Tracking regulatory changes
- **Regional Requirements** - Additional local regulations
- **Port Specific Rules** - Individual port requirements
- **Industry Best Practices** - Voluntary standards adoption

### Environmental Emergency Response
Managing pollution incidents:

**Oil Pollution Response:**
- **Shipboard Oil Pollution Emergency Plan (SOPEP)**
- **Oil Spill Response Equipment** - Containment and recovery gear
- **Notification Procedures** - Immediate reporting requirements
- **Response Coordination** - Working with authorities and responders

**Chemical Pollution Response:**
- **Marine Pollution Emergency Plan (MPEP)** - For chemical carriers
- **Chemical Data Sheets** - Hazard and response information
- **Specialized Equipment** - Chemical-specific response gear
- **Medical Response** - Crew and responder protection

**Response Training and Drills:**
- **Regular Drills** - Pollution response exercises
- **Equipment Familiarization** - Regular equipment checks
- **External Coordination Drills** - Joint exercises with authorities
- **Post-Drill Evaluation** - Performance improvement

Effective environmental management protects marine ecosystems, ensures regulatory compliance, and demonstrates corporate responsibility.`,
      
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are the four environmental management principles?",
          options: [
            "Pollution Prevention, Environmental Compliance, Resource Efficiency, Continuous Improvement",
            "Planning, Execution, Monitoring, Reporting",
            "Safety, Efficiency, Cost, Comfort",
            "Navigation, Communication, Maintenance, Administration"
          ],
          correctAnswer: 0,
          explanation: "The four principles are Pollution Prevention, Environmental Compliance, Resource Efficiency, and Continuous Improvement."
        },
        {
          id: 2,
          question: "Which MARPOL annex covers oil pollution?",
          options: [
            "Annex I",
            "Annex IV",
            "Annex V",
            "Annex VI"
          ],
          correctAnswer: 0,
          explanation: "MARPOL Annex I covers prevention of pollution by oil."
        },
        {
          id: 3,
          question: "What records oil operations?",
          options: [
            "Oil Record Book",
            "Garbage Record Book",
            "Ballast Water Record Book",
            "Engine logbook"
          ],
          correctAnswer: 0,
          explanation: "Oil Record Book records all oil transfer and disposal operations."
        },
        {
          id: 4,
          question: "What does BWM stand for?",
          options: [
            "Ballast Water Management",
            "Ballast Water Monitoring",
            "Bulk Water Management",
            "Ballast Waste Management"
          ],
          correctAnswer: 0,
          explanation: "BWM stands for Ballast Water Management Convention."
        },
        {
          id: 5,
          question: "What tracks fuel consumption efficiency?",
          options: [
            "Energy Efficiency Operational Index (EEOI)",
            "Fuel consumption log",
            "Engine hours record",
            "Speed log"
          ],
          correctAnswer: 0,
          explanation: "Energy Efficiency Operational Index (EEOI) tracks fuel consumption efficiency."
        },
        {
          id: 6,
          question: "Which MARPOL annex completely bans plastic discharge?",
          options: [
            "Annex V",
            "Annex I",
            "Annex IV",
            "Annex VI"
          ],
          correctAnswer: 0,
          explanation: "MARPOL Annex V completely bans discharge of plastics at sea."
        },
        {
          id: 7,
          question: "What treats sewage before discharge?",
          options: [
            "Sewage Treatment Systems",
            "Oil water separators",
            "Ballast water treatment",
            "Garbage compactors"
          ],
          correctAnswer: 0,
          explanation: "Sewage Treatment Systems treat sewage before discharge."
        },
        {
          id: 8,
          question: "What controls sulfur in fuel?",
          options: [
            "SOx Emission Controls",
            "NOx Emission Controls",
            "CO2 controls",
            "Particulate controls"
          ],
          correctAnswer: 0,
          explanation: "SOx Emission Controls limit sulfur content in marine fuel."
        },
        {
          id: 9,
          question: "What records ballast operations?",
          options: [
            "Ballast Water Record Book",
            "Oil Record Book",
            "Garbage Record Book",
            "Engine logbook"
          ],
          correctAnswer: 0,
          explanation: "Ballast Water Record Book records all ballast water operations."
        },
        {
          id: 10,
          question: "What is waste separation at source?",
          options: [
            "Segregation at Source",
            "Mixing all waste",
            "Burning waste",
            "Dumping at sea"
          ],
          correctAnswer: 0,
          explanation: "Segregation at Source means separating waste by type from point of generation."
        },
        {
          id: 11,
          question: "Which MARPOL annex covers air pollution?",
          options: [
            "Annex VI",
            "Annex I",
            "Annex IV",
            "Annex V"
          ],
          correctAnswer: 0,
          explanation: "MARPOL Annex VI covers prevention of air pollution from ships."
        },
        {
          id: 12,
          question: "What is required oil spill response plan?",
          options: [
            "Shipboard Oil Pollution Emergency Plan (SOPEP)",
            "Fire emergency plan",
            "Abandon ship plan",
            "Security plan"
          ],
          correctAnswer: 0,
          explanation: "SOPEP is required oil pollution emergency response plan."
        },
        {
          id: 13,
          question: "What controls nitrogen oxides?",
          options: [
            "NOx Emission Controls",
            "SOx Emission Controls",
            "CO2 controls",
            "Particulate controls"
          ],
          correctAnswer: 0,
          explanation: "NOx Emission Controls reduce nitrogen oxide emissions."
        },
        {
          id: 14,
          question: "What records garbage disposal?",
          options: [
            "Garbage Record Book",
            "Oil Record Book",
            "Ballast Water Record Book",
            "Sewage Record Book"
          ],
          correctAnswer: 0,
          explanation: "Garbage Record Book records waste disposal operations."
        },
        {
          id: 15,
          question: "What prevents invasive species transfer?",
          options: [
            "Ballast Water Management",
            "Hull cleaning",
            "Fuel management",
            "Waste disposal"
          ],
          correctAnswer: 0,
          explanation: "Ballast Water Management prevents transfer of invasive aquatic species."
        },
        {
          id: 16,
          question: "Which MARPOL annex covers sewage?",
          options: [
            "Annex IV",
            "Annex I",
            "Annex V",
            "Annex VI"
          ],
          correctAnswer: 0,
          explanation: "MARPOL Annex IV covers prevention of pollution by sewage."
        },
        {
          id: 17,
          question: "What reduces hull resistance?",
          options: [
            "Hull and Propeller Maintenance",
            "Engine tuning",
            "Speed reduction",
            "Route changes"
          ],
          correctAnswer: 0,
          explanation: "Hull and Propeller Maintenance reduces resistance and improves efficiency."
        },
        {
          id: 18,
          question: "What is waste handling at ports?",
          options: [
            "Port Reception Facilities",
            "Dumping at sea",
            "Burning onboard",
            "Storage indefinitely"
          ],
          correctAnswer: 0,
          explanation: "Port Reception Facilities handle waste delivery from ships."
        },
        {
          id: 19,
          question: "What records sewage operations?",
          options: [
            "Sewage Record Book",
            "Oil Record Book",
            "Garbage Record Book",
            "Ballast Water Record Book"
          ],
          correctAnswer: 0,
          explanation: "Sewage Record Book records sewage treatment and discharge operations."
        },
        {
          id: 20,
          question: "What optimizes route and speed?",
          options: [
            "Voyage Optimization",
            "Engine maintenance",
            "Hull cleaning",
            "Waste reduction"
          ],
          correctAnswer: 0,
          explanation: "Voyage Optimization improves efficiency through route and speed optimization."
        }
      ]
    },
    {
      id: 6,
      title: "Maritime Commercial Operations",
      content: `# Maritime Commercial Operations

## Commercial Maritime Management
Professional maritime operations require comprehensive commercial knowledge covering chartering, freight markets, commercial documentation, and financial management in the global shipping industry.

**Four Commercial Operation Areas:**
1. **Chartering and Contract Management** - Vessel employment agreements
2. **Freight Market Operations** - Market analysis and positioning
3. **Commercial Documentation** - Legal and financial paperwork
4. **Financial Management** - Revenue, costs, and profitability

### Chartering Operations
Vessel employment and contract management:

**Charter Types:**
- **Voyage Charter** - Single voyage contract
- **Time Charter** - Vessel hired for specific period
- **Bareboat Charter** - Vessel leased without crew
- **Contract of Affreightment** - Multiple voyage commitment

**Charter Party Agreements:**
- **GENCON** - General purpose voyage charter
- **NYPE** - New York Produce Exchange time charter
- **BALTIME** - Baltic and International Maritime Council time charter
- **BARECON** - Standard bareboat charter

**Key Charter Terms:**
- **Freight Rate** - Payment for cargo carriage
- **Laytime** - Time allowed for loading/discharging
- **Demurrage** - Compensation for exceeding laytime
- **Despatch** - Reward for completing before laytime

### Freight Market Analysis
Understanding shipping market dynamics:

**Market Segments:**
- **Dry Bulk Shipping** - Commodities like iron ore, coal, grain
- **Tanker Shipping** - Oil, chemical, and gas transportation
- **Container Shipping** - Manufactured goods in containers
- **Specialized Shipping** - Project cargo, cars, refrigerated goods

**Market Indicators:**
- **Baltic Exchange Indices** - Benchmark freight rates
- **Time Charter Equivalent (TCE)** - Standardized earnings measure
- **Freight Derivatives** - Futures and options for risk management
- **Market Reports** - Analysis and forecasting services

**Market Factors:**
- **Supply and Demand** - Vessel availability vs cargo volume
- **Seasonal Patterns** - Agricultural and energy cycles
- **Economic Conditions** - Global trade volumes
- **Geopolitical Events** - Trade routes and restrictions

### Commercial Documentation
Essential shipping documents:

**Transport Documents:**
- **Bill of Lading** - Receipt and contract of carriage
- **Sea Waybill** - Non-negotiable transport document
- **Multimodal Transport Document** - Combined transport
- **Delivery Order** - Instruction to release cargo

**Financial Documents:**
- **Freight Invoice** - Payment request for freight
- **Statement of Facts** - Record of port operations
- **Time Sheet** - Record of laytime usage
- **Payment Settlement Documents** - Bank transfers and receipts

**Cargo Documentation:**
- **Cargo Manifest** - Complete list of all cargo
- **Dangerous Goods Declaration** - Hazardous cargo details
- **Cargo Stowage Plan** - Loading arrangement
- **Cargo Survey Reports** - Condition and quantity verification

### Freight Collection and Payment
Revenue management systems:

**Freight Payment Terms:**
- **Freight Prepaid** - Paid before cargo loading
- **Freight Collect** - Paid upon cargo delivery
- **Part Prepaid/Part Collect** - Split payment arrangement
- **Lump Sum Freight** - Fixed amount regardless of quantity

**Payment Security:**
- **Letters of Credit** - Bank payment guarantees
- **Bank Guarantees** - Financial security instruments
- **P&I Club Support** - Protection and indemnity coverage
- **Freight Insurance** - Protection against non-payment

**Collection Procedures:**
- **Document Presentation** - Submission of required documents
- **Payment Follow-up** - Monitoring payment timelines
- **Dispute Resolution** - Handling payment disagreements
- **Legal Action** - Formal collection procedures if needed

### Cost Control and Management
Operating expense management:

**Major Cost Categories:**
- **Bunker Costs** - Fuel and lubricants
- **Port Costs** - Port dues, pilotage, towage
- **Canal Transit Costs** - Suez and Panama Canal fees
- **Crew Costs** - Wages, provisions, repatriation

**Cost Optimization Strategies:**
- **Bunker Management** - Fuel purchasing and consumption optimization
- **Port Cost Reduction** - Negotiation and planning
- **Operational Efficiency** - Speed and route optimization
- **Preventive Maintenance** - Reducing repair costs

**Budgeting and Forecasting:**
- **Voyage Estimating** - Pre-voyage cost and revenue projection
- **Monthly Budgeting** - Operating expense planning
- **Performance Monitoring** - Actual vs budget comparison
- **Forecast Updating** - Regular revision of projections

### Commercial Risk Management
Identifying and mitigating commercial risks:

**Credit Risks:**
- **Charterer Default** - Non-payment of hire or freight
- **Counterparty Risk** - Financial failure of business partners
- **Country Risk** - Political or economic instability
- **Currency Risk** - Exchange rate fluctuations

**Operational Risks:**
- **Port Congestion** - Delays and additional costs
- **Cargo Claims** - Damage or loss of cargo
- **Regulatory Changes** - New compliance requirements
- **Market Volatility** - Rapid rate changes

**Risk Mitigation Strategies:**
- **Credit Assessment** - Evaluating counterparty reliability
- **Contract Clauses** - Protective terms and conditions
- **Insurance Coverage** - Transferring risk to insurers
- **Diversification** - Spreading risk across markets

### Dispute Resolution
Managing commercial disagreements:

**Common Disputes:**
- **Freight Disputes** - Payment amount or timing issues
- **Laytime/Demurrage Disputes** - Port time calculations
- **Cargo Claims** - Damage or shortage disputes
- **Performance Disputes** - Speed and consumption claims

**Resolution Methods:**
- **Negotiation** - Direct discussion between parties
- **Mediation** - Assisted negotiation with neutral mediator
- **Arbitration** - Binding decision by arbitrators
- **Litigation** - Court proceedings

**Documentation for Disputes:**
- **Evidence Collection** - Relevant documents and records
- **Witness Statements** - Testimony from involved parties
- **Expert Reports** - Technical or financial analysis
- **Legal Submissions** - Formal arguments and evidence

Effective commercial operations management maximizes revenue, controls costs, and mitigates risks in the dynamic shipping industry.`,
      
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are the four commercial operation areas?",
          options: [
            "Chartering, Freight Markets, Documentation, Financial Management",
            "Navigation, Communication, Maintenance, Administration",
            "Safety, Efficiency, Cost, Quality",
            "Planning, Execution, Monitoring, Reporting"
          ],
          correctAnswer: 0,
          explanation: "The four areas are Chartering and Contract Management, Freight Market Operations, Commercial Documentation, and Financial Management."
        },
        {
          id: 2,
          question: "What is a single voyage contract called?",
          options: [
            "Voyage Charter",
            "Time Charter",
            "Bareboat Charter",
            "Contract of Affreightment"
          ],
          correctAnswer: 0,
          explanation: "Voyage Charter is for a single voyage or specific cargo."
        },
        {
          id: 3,
          question: "What is time allowed for loading/discharging?",
          options: [
            "Laytime",
            "Demurrage",
            "Despatch",
            "Freight time"
          ],
          correctAnswer: 0,
          explanation: "Laytime is the time allowed for cargo operations in port."
        },
        {
          id: 4,
          question: "What is compensation for exceeding laytime?",
          options: [
            "Demurrage",
            "Despatch",
            "Freight",
            "Bonus"
          ],
          correctAnswer: 0,
          explanation: "Demurrage is compensation paid when laytime is exceeded."
        },
        {
          id: 5,
          question: "What is the main transport document?",
          options: [
            "Bill of Lading",
            "Sea Waybill",
            "Delivery Order",
            "Cargo Manifest"
          ],
          correctAnswer: 0,
          explanation: "Bill of Lading is the primary transport document serving as receipt and contract."
        },
        {
          id: 6,
          question: "What measures standardized earnings?",
          options: [
            "Time Charter Equivalent (TCE)",
            "Freight rate",
            "Demurrage rate",
            "Exchange rate"
          ],
          correctAnswer: 0,
          explanation: "Time Charter Equivalent (TCE) standardizes earnings comparison across charter types."
        },
        {
          id: 7,
          question: "What is freight paid before loading?",
          options: [
            "Freight Prepaid",
            "Freight Collect",
            "Part Prepaid",
            "Lump Sum"
          ],
          correctAnswer: 0,
          explanation: "Freight Prepaid means payment before cargo loading."
        },
        {
          id: 8,
          question: "What are Baltic Exchange Indices?",
          options: [
            "Benchmark freight rates",
            "Stock market indices",
            "Currency exchange rates",
            "Commodity prices"
          ],
          correctAnswer: 0,
          explanation: "Baltic Exchange Indices are benchmark freight rates for various shipping sectors."
        },
        {
          id: 9,
          question: "What is vessel leased without crew?",
          options: [
            "Bareboat Charter",
            "Time Charter",
            "Voyage Charter",
            "Contract of Affreightment"
          ],
          correctAnswer: 0,
          explanation: "Bareboat Charter leases the vessel without crew or management."
        },
        {
          id: 10,
          question: "What is reward for early completion?",
          options: [
            "Despatch",
            "Demurrage",
            "Bonus",
            "Freight"
          ],
          correctAnswer: 0,
          explanation: "Despatch is reward paid for completing cargo operations before laytime expires."
        },
        {
          id: 11,
          question: "What is GENCON?",
          options: [
            "General purpose voyage charter",
            "Time charter form",
            "Bareboat charter",
            "Insurance form"
          ],
          correctAnswer: 0,
          explanation: "GENCON is a general purpose voyage charter party agreement."
        },
        {
          id: 12,
          question: "What lists all cargo?",
          options: [
            "Cargo Manifest",
            "Bill of Lading",
            "Delivery Order",
            "Sea Waybill"
          ],
          correctAnswer: 0,
          explanation: "Cargo Manifest is complete list of all cargo onboard."
        },
        {
          id: 13,
          question: "What is freight paid upon delivery?",
          options: [
            "Freight Collect",
            "Freight Prepaid",
            "Part Prepaid",
            "Lump Sum"
          ],
          correctAnswer: 0,
          explanation: "Freight Collect means payment upon cargo delivery."
        },
        {
          id: 14,
          question: "What is non-payment risk?",
          options: [
            "Credit Risk",
            "Operational Risk",
            "Market Risk",
            "Safety Risk"
          ],
          correctAnswer: 0,
          explanation: "Credit Risk includes non-payment by charterers or customers."
        },
        {
          id: 15,
          question: "What is NYPE?",
          options: [
            "New York Produce Exchange time charter",
            "Voyage charter form",
            "Bareboat charter",
            "Insurance form"
          ],
          correctAnswer: 0,
          explanation: "NYPE is New York Produce Exchange time charter party agreement."
        },
        {
          id: 16,
          question: "What shows loading arrangement?",
          options: [
            "Cargo Stowage Plan",
            "Cargo Manifest",
            "Bill of Lading",
            "Delivery Order"
          ],
          correctAnswer: 0,
          explanation: "Cargo Stowage Plan shows how cargo is loaded and arranged."
        },
        {
          id: 17,
          question: "What is binding decision by arbitrators?",
          options: [
            "Arbitration",
            "Negotiation",
            "Mediation",
            "Litigation"
          ],
          correctAnswer: 0,
          explanation: "Arbitration provides binding decision by appointed arbitrators."
        },
        {
          id: 18,
          question: "What is multiple voyage commitment?",
          options: [
            "Contract of Affreightment",
            "Voyage Charter",
            "Time Charter",
            "Bareboat Charter"
          ],
          correctAnswer: 0,
          explanation: "Contract of Affreightment commits to multiple voyages over time."
        },
        {
          id: 19,
          question: "What is bank payment guarantee?",
          options: [
            "Letter of Credit",
            "Bank Guarantee",
            "Freight Invoice",
            "Statement of Facts"
          ],
          correctAnswer: 0,
          explanation: "Letter of Credit provides bank guarantee of payment."
        },
        {
          id: 20,
          question: "What is fixed freight amount?",
          options: [
            "Lump Sum Freight",
            "Freight Prepaid",
            "Freight Collect",
            "Part Prepaid"
          ],
          correctAnswer: 0,
          explanation: "Lump Sum Freight is fixed amount regardless of cargo quantity."
        }
      ]
    }
  ],
  
  // 3. FINAL EXAM - 40 Questions covering all modules
  finalExam: {
    title: "Maritime Operations Diploma Final Exam",
    description: "Comprehensive advanced exam covering all 6 diploma modules. You need 75% to pass.",
    passingScore: 30, // 75% of 40 questions
    questions: [
      // Module 1 Questions (7 questions)
      {
        id: 1,
        module: 1,
        question: "What are the four pillars of advanced voyage planning?",
        options: [
          "Route Optimization, Weather Routing, Regulatory Compliance, Contingency Development",
          "Safety, Speed, Cost, Comfort",
          "Navigation, Communication, Maintenance, Administration",
          "Planning, Executing, Monitoring, Reporting"
        ],
        correctAnswer: 0,
        explanation: "From Module 1: The four pillars are Strategic Route Optimization, Dynamic Weather Routing, Regulatory Compliance Planning, and Contingency Development."
      },
      {
        id: 2,
        module: 1,
        question: "What does ECDIS stand for?",
        options: [
          "Electronic Chart Display and Information System",
          "Electronic Course Display and Information System",
          "Emergency Chart Display and Information System",
          "Electronic Chart Data and Information System"
        ],
        correctAnswer: 0,
        explanation: "From Module 1: ECDIS stands for Electronic Chart Display and Information System."
      },
      {
        id: 3,
        module: 1,
        question: "What provides global weather coverage with high accuracy?",
        options: [
          "Satellite Weather Services",
          "Local radio forecasts",
          "Newspaper weather reports",
          "Crew observations only"
        ],
        correctAnswer: 0,
        explanation: "From Module 1: Satellite Weather Services provide global coverage with high accuracy."
      },
      {
        id: 4,
        module: 1,
        question: "What are organized traffic flow systems?",
        options: [
          "Traffic Separation Schemes (TSS)",
          "Random navigation patterns",
          "Free sailing areas",
          "Military exercise zones"
        ],
        correctAnswer: 0,
        explanation: "From Module 1: Traffic Separation Schemes (TSS) organize traffic flow."
      },
      {
        id: 5,
        module: 1,
        question: "What continuously records navigation data?",
        options: [
          "Voyage Data Recorders",
          "Engine logbooks",
          "Crew notebooks",
          "Passenger diaries"
        ],
        correctAnswer: 0,
        explanation: "From Module 1: Voyage Data Recorders continuously record navigation data."
      },
      {
        id: 6,
        module: 1,
        question: "What maintains precise vessel position?",
        options: [
          "Dynamic Positioning Systems",
          "Traditional anchoring",
          "Mooring lines",
          "Drifting with currents"
        ],
        correctAnswer: 0,
        explanation: "From Module 1: Dynamic Positioning Systems maintain precise position."
      },
      {
        id: 7,
        module: 1,
        question: "What are environmental protection zones?",
        options: [
          "Particularly Sensitive Sea Areas (PSSAs)",
          "Free fishing zones",
          "Deep water areas",
          "International waters"
        ],
        correctAnswer: 0,
        explanation: "From Module 1: PSSAs are environmental protection zones."
      },
      
      // Module 2 Questions (7 questions)
      {
        id: 8,
        module: 2,
        question: "What are the five key port operation areas?",
        options: [
          "Port Entry, Cargo Operations, Service Coordination, Documentation, Departure",
          "Cleaning, Cooking, Maintenance, Navigation, Entertainment",
          "Safety, Efficiency, Cost, Quality, Speed",
          "Planning, Execution, Monitoring, Control, Reporting"
        ],
        correctAnswer: 0,
        explanation: "From Module 2: The five areas are Port Entry Procedures, Cargo Operations Management, Port Service Coordination, Documentation and Administration, and Departure Procedures."
      },
      {
        id: 9,
        module: 2,
        question: "What does ETA stand for?",
        options: [
          "Estimated Time of Arrival",
          "Exact Time of Arrival",
          "Expected Time of Arrival",
          "Estimated Time of Approach"
        ],
        correctAnswer: 0,
        explanation: "From Module 2: ETA stands for Estimated Time of Arrival."
      },
      {
        id: 10,
        module: 2,
        question: "What is optimal cargo distribution?",
        options: [
          "Stowage Planning",
          "Random loading",
          "Quick loading",
          "Simple stacking"
        ],
        correctAnswer: 0,
        explanation: "From Module 2: Stowage Planning involves optimal cargo distribution."
      },
      {
        id: 11,
        module: 2,
        question: "What does ISPS Code regulate?",
        options: [
          "Port and ship security",
          "Cargo loading",
          "Fuel efficiency",
          "Crew entertainment"
        ],
        correctAnswer: 0,
        explanation: "From Module 2: ISPS Code regulates International Ship and Port Facility Security."
      },
      {
        id: 12,
        module: 2,
        question: "What confirms port operations complete?",
        options: [
          "All Fast Certificate",
          "Port entry form",
          "Cargo manifest",
          "Crew list"
        ],
        correctAnswer: 0,
        explanation: "From Module 2: All Fast Certificate confirms completion of operations."
      },
      {
        id: 13,
        module: 2,
        question: "What coordinates with loading teams?",
        options: [
          "Stevedore Management",
          "Guest services",
          "Bridge operations",
          "Engine room work"
        ],
        correctAnswer: 0,
        explanation: "From Module 2: Stevedore Management coordinates with loading teams."
      },
      {
        id: 14,
        module: 2,
        question: "What provides fuel supply?",
        options: [
          "Bunkering Services",
          "Provisioning Services",
          "Waste Management",
          "Technical Services"
        ],
        correctAnswer: 0,
        explanation: "From Module 2: Bunkering Services provide fuel and lubricants."
      },
      
      // Module 3 Questions (7 questions)
      {
        id: 15,
        module: 3,
        question: "What are the four regulatory compliance domains?",
        options: [
          "IMO Regulations, Flag State, Port State Control, Classification Society",
          "Safety, Navigation, Communication, Maintenance",
          "International, National, Regional, Local",
          "Planning, Implementation, Monitoring, Reporting"
        ],
        correctAnswer: 0,
        explanation: "From Module 3: The four domains are IMO Regulations, Flag State Requirements, Port State Control, and Classification Society Rules."
      },
      {
        id: 16,
        module: 3,
        question: "Which SOLAS chapter covers fire protection?",
        options: [
          "Chapter II-2",
          "Chapter III",
          "Chapter V",
          "Chapter XI"
        ],
        correctAnswer: 0,
        explanation: "From Module 3: SOLAS Chapter II-2 covers fire protection."
      },
      {
        id: 17,
        module: 3,
        question: "Which MARPOL annex covers air pollution?",
        options: [
          "Annex VI",
          "Annex I",
          "Annex IV",
          "Annex V"
        ],
        correctAnswer: 0,
        explanation: "From Module 3: MARPOL Annex VI covers air pollution prevention."
      },
      {
        id: 18,
        module: 3,
        question: "What proves vessel nationality?",
        options: [
          "Certificate of Registry",
          "Tonnage Certificate",
          "Safety Certificate",
          "Crew list"
        ],
        correctAnswer: 0,
        explanation: "From Module 3: Certificate of Registry proves vessel nationality."
      },
      {
        id: 19,
        module: 3,
        question: "Which PSC regime covers Asia-Pacific?",
        options: [
          "Tokyo MoU",
          "Paris MoU",
          "US Coast Guard",
          "Caribbean MoU"
        ],
        correctAnswer: 0,
        explanation: "From Module 3: Tokyo MoU covers Asia-Pacific region."
      },
      {
        id: 20,
        module: 3,
        question: "What does STCW stand for?",
        options: [
          "Standards of Training, Certification and Watchkeeping",
          "Safety Training for Crew Watch",
          "Standards for Technical Crew Work",
          "Ship Training and Certification Worldwide"
        ],
        correctAnswer: 0,
        explanation: "From Module 3: STCW stands for Standards of Training, Certification and Watchkeeping."
      },
      {
        id: 21,
        module: 3,
        question: "Which classification society is LR?",
        options: [
          "Lloyd's Register",
          "Lloyd's of London",
          "Lloyd's Bank",
          "Lloyd's Insurance"
        ],
        correctAnswer: 0,
        explanation: "From Module 3: LR stands for Lloyd's Register."
      },
      
      // Module 4 Questions (6 questions)
      {
        id: 22,
        module: 4,
        question: "What are the four safety management pillars?",
        options: [
          "Safety Policy, Risk Management, Emergency Preparedness, Continuous Improvement",
          "Planning, Implementation, Monitoring, Review",
          "Crew, Equipment, Procedures, Documentation",
          "Prevention, Protection, Response, Recovery"
        ],
        correctAnswer: 0,
        explanation: "From Module 4: The four pillars are Safety Policy Development, Risk Management Implementation, Emergency Preparedness, and Continuous Improvement."
      },
      {
        id: 23,
        module: 4,
        question: "What does ISM stand for?",
        options: [
          "International Safety Management",
          "International Ship Management",
          "Integrated Safety Management",
          "International Security Management"
        ],
        correctAnswer: 0,
        explanation: "From Module 4: ISM stands for International Safety Management Code."
      },
      {
        id: 24,
        module: 4,
        question: "What proves company compliance with ISM?",
        options: [
          "Document of Compliance (DOC)",
          "Safety Management Certificate (SMC)",
          "Safety Management Manual",
          "Certificate of Registry"
        ],
        correctAnswer: 0,
        explanation: "From Module 4: DOC proves company compliance with ISM Code."
      },
      {
        id: 25,
        module: 4,
        question: "What is systematic hazard identification?",
        options: [
          "Risk Assessment",
          "Emergency planning",
          "Drill execution",
          "Audit preparation"
        ],
        correctAnswer: 0,
        explanation: "From Module 4: Risk Assessment includes systematic hazard identification."
      },
      {
        id: 26,
        module: 4,
        question: "What provides shore-based safety oversight?",
        options: [
          "Designated Person Ashore (DPA)",
          "Company manager",
          "Insurance surveyor",
          "Port authority"
        ],
        correctAnswer: 0,
        explanation: "From Module 4: DPA provides shore-based safety oversight."
      },
      {
        id: 27,
        module: 4,
        question: "What identifies underlying causes?",
        options: [
          "Root Cause Analysis",
          "Immediate reporting",
          "Evidence collection",
          "Timeline development"
        ],
        correctAnswer: 0,
        explanation: "From Module 4: Root Cause Analysis identifies underlying causes."
      },
      
      // Module 5 Questions (6 questions)
      {
        id: 28,
        module: 5,
        question: "What are the four environmental management principles?",
        options: [
          "Pollution Prevention, Environmental Compliance, Resource Efficiency, Continuous Improvement",
          "Reduce, Reuse, Recycle, Recover",
          "Safety, Efficiency, Cost, Quality",
          "Planning, Implementation, Monitoring, Reporting"
        ],
        correctAnswer: 0,
        explanation: "From Module 5: The four principles are Pollution Prevention, Environmental Compliance, Resource Efficiency, and Continuous Improvement."
      },
      {
        id: 29,
        module: 5,
        question: "Which MARPOL annex covers oil pollution?",
        options: [
          "Annex I",
          "Annex IV",
          "Annex V",
          "Annex VI"
        ],
        correctAnswer: 0,
        explanation: "From Module 5: MARPOL Annex I covers oil pollution prevention."
      },
      {
        id: 30,
        module: 5,
        question: "What does BWM stand for?",
        options: [
          "Ballast Water Management",
          "Ballast Water Monitoring",
          "Bulk Water Management",
          "Ballast Waste Management"
        ],
        correctAnswer: 0,
        explanation: "From Module 5: BWM stands for Ballast Water Management Convention."
      },
      {
        id: 31,
        module: 5,
        question: "What tracks fuel consumption efficiency?",
        options: [
          "Energy Efficiency Operational Index (EEOI)",
          "Fuel consumption log",
          "Engine hours record",
          "Speed log"
        ],
        correctAnswer: 0,
        explanation: "From Module 5: EEOI tracks fuel consumption efficiency."
      },
      {
        id: 32,
        module: 5,
        question: "What records oil operations?",
        options: [
          "Oil Record Book",
          "Garbage Record Book",
          "Ballast Water Record Book",
          "Engine logbook"
        ],
        correctAnswer: 0,
        explanation: "From Module 5: Oil Record Book records oil operations."
      },
      {
        id: 33,
        module: 5,
        question: "Which annex bans plastic discharge?",
        options: [
          "Annex V",
          "Annex I",
          "Annex IV",
          "Annex VI"
        ],
        correctAnswer: 0,
        explanation: "From Module 5: MARPOL Annex V bans plastic discharge."
      },
      
      // Module 6 Questions (7 questions)
      {
        id: 34,
        module: 6,
        question: "What are the four commercial operation areas?",
        options: [
          "Chartering, Freight Markets, Documentation, Financial Management",
          "Navigation, Communication, Maintenance, Administration",
          "Safety, Efficiency, Cost, Quality",
          "Planning, Execution, Monitoring, Reporting"
        ],
        correctAnswer: 0,
        explanation: "From Module 6: The four areas are Chartering and Contract Management, Freight Market Operations, Commercial Documentation, and Financial Management."
      },
      {
        id: 35,
        module: 6,
        question: "What is a single voyage contract?",
        options: [
          "Voyage Charter",
          "Time Charter",
          "Bareboat Charter",
          "Contract of Affreightment"
        ],
        correctAnswer: 0,
        explanation: "From Module 6: Voyage Charter is for a single voyage."
      },
      {
        id: 36,
        module: 6,
        question: "What is time allowed for cargo operations?",
        options: [
          "Laytime",
          "Demurrage",
          "Despatch",
          "Freight time"
        ],
        correctAnswer: 0,
        explanation: "From Module 6: Laytime is time allowed for loading/discharging."
      },
      {
        id: 37,
        module: 6,
        question: "What is compensation for exceeding laytime?",
        options: [
          "Demurrage",
          "Despatch",
          "Freight",
          "Bonus"
        ],
        correctAnswer: 0,
        explanation: "From Module 6: Demurrage compensates for exceeding laytime."
      },
      {
        id: 38,
        module: 6,
        question: "What is the main transport document?",
        options: [
          "Bill of Lading",
          "Sea Waybill",
          "Delivery Order",
          "Cargo Manifest"
        ],
        correctAnswer: 0,
        explanation: "From Module 6: Bill of Lading is primary transport document."
      },
      {
        id: 39,
        module: 6,
        question: "What measures standardized earnings?",
        options: [
          "Time Charter Equivalent (TCE)",
          "Freight rate",
          "Demurrage rate",
          "Exchange rate"
        ],
        correctAnswer: 0,
        explanation: "From Module 6: TCE standardizes earnings comparison."
      },
      {
        id: 40,
        module: 6,
        question: "What is freight paid before loading?",
        options: [
          "Freight Prepaid",
          "Freight Collect",
          "Part Prepaid",
          "Lump Sum"
        ],
        correctAnswer: 0,
        explanation: "From Module 6: Freight Prepaid means payment before loading."
      }
    ]
  }
};

export type MaritimeOperationsDiplomaType = typeof maritimeOperationsDiploma;
