// Facilities Management (Diploma) - Complete Course Data
export const facilitiesManagementDiploma = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "facilities-management-diploma",
  title: "Facilities Management (Diploma)",
  description: "Advanced training in comprehensive facilities management covering operations, maintenance, budgeting, and strategic planning. Learn to oversee entire building systems and manage facility teams effectively.",
  duration: "8 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  upgradePrice: null, // Diploma is highest level
  icon: "🏢",
  badge: "Diploma",
  prerequisite: "Janitorial Services (Certificate) or equivalent experience",
  
  // 2. MODULE ARCHITECTURE (6 Advanced Modules)
  modules: [
    {
      id: 1,
      title: "Foundations of Facilities Management",
      completed: false,
      content: `# Module 1: Foundations of Facilities Management

## Introduction to Comprehensive Facility Oversight
Facilities management represents the integration of multiple disciplines to ensure functionality, comfort, safety, and efficiency of the built environment. This module establishes the core principles that guide professional facilities management practice.

### The Scope of Modern Facilities Management
Facilities management encompasses three primary domains: people, place, and process. The people domain focuses on occupant comfort and productivity. The place domain concerns the physical building and its systems. The process domain involves workflows, procedures, and continuous improvement.

A facilities manager coordinates building operations, maintenance, space planning, and support services. This role requires balancing technical knowledge with people management skills. Effective facilities management directly impacts organizational performance through cost control, risk management, and productivity enhancement.

### Core Functions and Responsibilities
Primary facilities management functions include operations and maintenance, space management, environmental stewardship, and emergency preparedness. Operations cover daily activities that keep facilities running. Maintenance includes preventive, corrective, and predictive approaches to equipment care.

Space management involves optimizing physical layouts for efficiency and functionality. Environmental stewardship addresses sustainability and regulatory compliance. Emergency preparedness ensures response plans for various scenarios including fires, natural disasters, and security incidents.

Support services typically managed include cleaning, security, mail distribution, reprographics, and catering. These services may be provided in-house or through contracted vendors. The facilities manager oversees quality regardless of delivery method.

### Regulatory Compliance and Standards
Facilities must comply with building codes, accessibility standards, fire safety regulations, and environmental requirements. Building codes establish minimum safety standards for construction and occupancy. Accessibility standards ensure facilities accommodate people with disabilities.

Fire safety regulations cover alarm systems, sprinklers, exits, and evacuation plans. Environmental regulations address waste management, air quality, and hazardous materials. International standards like ISO 41001 provide frameworks for facilities management systems.

Compliance monitoring involves regular inspections, documentation maintenance, and corrective actions. Non-compliance can result in fines, operational restrictions, or liability issues. Proactive compliance management prevents problems before they occur.

### Stakeholder Management and Communication
Key stakeholders include building occupants, senior management, property owners, vendors, and regulatory agencies. Each stakeholder group has different expectations and communication needs. Occupants want responsive service and comfortable environments.

Senior management focuses on costs, risks, and strategic alignment. Property owners concern themselves with asset protection and value preservation. Vendors require clear specifications and timely payments. Regulatory agencies need proper documentation and cooperation.

Communication strategies include regular reporting, stakeholder meetings, service level agreements, and feedback mechanisms. Transparent communication builds trust and facilitates problem-solving. Listening to stakeholder concerns provides valuable improvement insights.

### Professional Ethics and Leadership
Ethical facilities management requires honesty, integrity, fairness, and responsibility. Ethical dilemmas may involve contractor selection, budget allocations, or regulatory interpretations. A clear ethical framework guides decision-making in complex situations.

Leadership in facilities management involves vision setting, team development, and change management. Facilities leaders inspire teams to deliver excellent service while controlling costs. They champion sustainability initiatives and technological advancements.

Professional development through organizations like IFMA (International Facility Management Association) enhances knowledge and credibility. Continuing education, certification programs, and networking keep professionals current with industry trends and best practices.`,
      
      quiz: [
        {
          id: 1,
          question: "What are the three primary domains of facilities management?",
          options: [
            "Budget, schedule, quality",
            "People, place, and process",
            "Operations, maintenance, security",
            "Buildings, equipment, staff"
          ],
          correctAnswer: 1,
          explanation: "People (occupant needs), place (physical environment), and process (workflows) form the comprehensive scope of facilities management."
        },
        {
          id: 2,
          question: "What directly impacts organizational performance through facilities management?",
          options: [
            "Only building appearance",
            "Cost control, risk management, and productivity enhancement",
            "Only vendor relationships",
            "Only regulatory compliance"
          ],
          correctAnswer: 1,
          explanation: "Effective facilities management contributes to organizational success through financial control, risk reduction, and productivity support."
        },
        {
          id: 3,
          question: "What are the primary maintenance approaches in facilities management?",
          options: [
            "Only repair when broken",
            "Preventive, corrective, and predictive maintenance",
            "Only emergency repairs",
            "Only scheduled cleaning"
          ],
          correctAnswer: 1,
          explanation: "Preventive (scheduled), corrective (repair), and predictive (condition-based) approaches form comprehensive maintenance strategy."
        },
        {
          id: 4,
          question: "What does space management involve?",
          options: [
            "Only room cleaning",
            "Optimizing physical layouts for efficiency and functionality",
            "Only measuring square footage",
            "Only furniture arrangement"
          ],
          correctAnswer: 1,
          explanation: "Space management strategically allocates and organizes physical space to support organizational goals and occupant needs."
        },
        {
          id: 5,
          question: "What are typical support services managed by facilities?",
          options: [
            "Only building repairs",
            "Cleaning, security, mail, reprographics, and catering",
            "Only HVAC operations",
            "Only landscaping"
          ],
          correctAnswer: 1,
          explanation: "Multiple support services contribute to comprehensive facility operations, whether provided in-house or through vendors."
        },
        {
          id: 6,
          question: "What does emergency preparedness ensure?",
          options: [
            "Only fire extinguisher locations",
            "Response plans for fires, disasters, and security incidents",
            "Only evacuation routes",
            "Only first aid kits"
          ],
          correctAnswer: 1,
          explanation: "Comprehensive emergency planning addresses multiple potential scenarios to protect people and property."
        },
        {
          id: 7,
          question: "What standards ensure facility accessibility?",
          options: [
            "Only building codes",
            "Accessibility standards for people with disabilities",
            "Only fire codes",
            "Only electrical codes"
          ],
          correctAnswer: 1,
          explanation: "Accessibility standards ensure facilities accommodate diverse needs, often going beyond basic building code requirements."
        },
        {
          id: 8,
          question: "What does ISO 41001 provide?",
          options: [
            "Only cleaning standards",
            "Framework for facilities management systems",
            "Only safety procedures",
            "Only maintenance schedules"
          ],
          correctAnswer: 1,
          explanation: "ISO 41001 establishes international standards for facilities management systems, promoting best practices and consistency."
        },
        {
          id: 9,
          question: "What involves compliance monitoring?",
          options: [
            "Only paying fines",
            "Regular inspections, documentation, and corrective actions",
            "Only reading regulations",
            "Only attending meetings"
          ],
          correctAnswer: 1,
          explanation: "Active compliance management includes systematic checking, record-keeping, and addressing identified issues."
        },
        {
          id: 10,
          question: "Who are key facilities management stakeholders?",
          options: [
            "Only facility staff",
            "Occupants, management, owners, vendors, regulators",
            "Only building inspectors",
            "Only security personnel"
          ],
          correctAnswer: 1,
          explanation: "Multiple stakeholder groups with varying interests require different management approaches and communication strategies."
        },
        {
          id: 11,
          question: "What do building occupants typically want?",
          options: [
            "Only low costs",
            "Responsive service and comfortable environments",
            "Only new furniture",
            "Only decorative elements"
          ],
          correctAnswer: 1,
          explanation: "Occupant satisfaction depends on service responsiveness and environmental quality affecting their work or activities."
        },
        {
          id: 12,
          question: "What communication builds stakeholder trust?",
          options: [
            "Only formal reports",
            "Transparent communication and feedback mechanisms",
            "Only email communication",
            "Only verbal instructions"
          ],
          correctAnswer: 1,
          explanation: "Open, honest communication and listening to concerns establish credibility and collaborative relationships."
        },
        {
          id: 13,
          question: "What does ethical facilities management require?",
          options: [
            "Only following rules",
            "Honesty, integrity, fairness, and responsibility",
            "Only cost savings",
            "Only speed of service"
          ],
          correctAnswer: 1,
          explanation: "Ethical practice involves multiple principles guiding decisions, especially in complex or ambiguous situations."
        },
        {
          id: 14,
          question: "What may involve ethical dilemmas?",
          options: [
            "Only routine maintenance",
            "Contractor selection, budget allocations, regulatory interpretations",
            "Only cleaning schedules",
            "Only temperature settings"
          ],
          correctAnswer: 1,
          explanation: "Ethical challenges often arise in areas involving money, vendor relationships, and rule interpretation."
        },
        {
          id: 15,
          question: "What does facilities leadership involve?",
          options: [
            "Only giving orders",
            "Vision setting, team development, and change management",
            "Only technical knowledge",
            "Only budget control"
          ],
          correctAnswer: 1,
          explanation: "Leadership combines strategic direction, people development, and managing organizational change effectively."
        },
        {
          id: 16,
          question: "What do facilities leaders champion?",
          options: [
            "Only traditional methods",
            "Sustainability initiatives and technological advancements",
            "Only cost cutting",
            "Only maintaining status quo"
          ],
          correctAnswer: 1,
          explanation: "Progressive leaders advocate for environmental responsibility and innovation in facility operations."
        },
        {
          id: 17,
          question: "What enhances professional credibility?",
          options: [
            "Only work experience",
            "Professional development and certifications",
            "Only academic degrees",
            "Only personal connections"
          ],
          correctAnswer: 1,
          explanation: "Continuous learning and recognized credentials demonstrate commitment to professional standards and knowledge."
        },
        {
          id: 18,
          question: "What does environmental stewardship address?",
          options: [
            "Only cleaning products",
            "Sustainability and regulatory compliance",
            "Only landscaping",
            "Only waste removal"
          ],
          correctAnswer: 1,
          explanation: "Environmental responsibility involves sustainable practices and meeting legal requirements for environmental protection."
        },
        {
          id: 19,
          question: "What is a facilities manager's role regarding vendors?",
          options: [
            "Only paying invoices",
            "Overseeing quality regardless of delivery method",
            "Only selecting lowest bid",
            "Only managing contracts"
          ],
          correctAnswer: 1,
          explanation: "Facilities managers ensure service quality whether provided by internal staff or external contractors."
        },
        {
          id: 20,
          question: "What provides valuable improvement insights?",
          options: [
            "Only management directives",
            "Listening to stakeholder concerns",
            "Only financial reports",
            "Only equipment manuals"
          ],
          correctAnswer: 1,
          explanation: "Stakeholder feedback identifies service gaps and opportunities for operational improvements."
        }
      ]
    },
    {
      id: 2,
      title: "Building Systems and Operations",
      completed: false,
      content: `# Module 2: Building Systems and Operations

## Mastering Critical Building Infrastructure
This module explores the major systems that constitute modern building infrastructure. Understanding these systems enables effective management, troubleshooting, and optimization of facility operations.

### HVAC Systems Management
Heating, Ventilation, and Air Conditioning (HVAC) systems represent significant energy consumption and occupant comfort factors. HVAC management involves temperature control, humidity regulation, air quality maintenance, and energy efficiency optimization.

Major HVAC components include chillers, boilers, air handlers, ductwork, and control systems. Chillers provide cooling, boilers supply heating, air handlers distribute conditioned air, and control systems regulate operation. Regular maintenance prevents breakdowns and maintains efficiency.

Air quality management involves filtration, ventilation rates, and contaminant control. Minimum ventilation rates ensure adequate fresh air. Filtration systems remove particulates. Monitoring carbon dioxide levels indicates ventilation adequacy. Poor air quality affects health and productivity.

### Electrical Systems and Power Management
Electrical systems distribute power throughout facilities safely and reliably. Key components include transformers, switchgear, distribution panels, circuit breakers, and wiring. Understanding electrical loads prevents overloads and ensures proper capacity.

Power quality issues include voltage fluctuations, harmonics, and interruptions. Uninterruptible Power Supply (UPS) systems protect critical equipment during outages. Backup generators provide extended power during prolonged outages. Regular testing ensures reliability.

Energy management strategies include load scheduling, power factor correction, and efficient lighting. Load scheduling shifts non-essential operations to off-peak hours. Power factor correction reduces wasted energy. LED lighting significantly reduces electrical consumption.

### Plumbing and Water Systems
Plumbing systems supply potable water and remove wastewater. Components include pipes, valves, fixtures, pumps, and water heaters. Water conservation measures reduce consumption and costs while supporting sustainability goals.

Water heating represents substantial energy use. Efficient strategies include insulation, temperature optimization, and demand-controlled systems. Recirculation systems reduce water waste while waiting for hot water.

Preventive maintenance includes checking for leaks, testing backflow prevention devices, and flushing systems. Water quality testing ensures safety. Legionella prevention requires specific temperature management in water systems.

### Life Safety Systems
Life safety systems protect occupants during emergencies. Fire detection and suppression systems include smoke detectors, alarms, sprinklers, and fire extinguishers. Regular testing and inspection ensure operational readiness.

Emergency lighting illuminates exit paths during power failures. Exit signs must remain visible in all conditions. Egress pathways must remain clear and unobstructed at all times.

Security systems include access control, surveillance cameras, and intrusion detection. Access control regulates entry to sensitive areas. Surveillance deters unauthorized activities and provides incident documentation. Integration creates comprehensive protection.

### Building Automation Systems
Building Automation Systems (BAS) integrate control of multiple systems through centralized computer-based platforms. BAS monitors and controls HVAC, lighting, security, and other systems. Integration improves efficiency and provides operational data.

BAS capabilities include scheduling, alarm management, trend logging, and remote access. Scheduling automates system operation based on occupancy patterns. Alarm management alerts operators to abnormal conditions. Trend logging supports analysis and optimization.

Energy Management Systems (EMS) specialize in monitoring and reducing energy consumption. EMS identifies waste patterns, automates conservation measures, and tracks savings. Data from EMS informs capital improvement decisions.

### Vertical Transportation Systems
Elevators and escalators require specialized management. Elevator systems include cabs, hoistways, motors, controls, and safety devices. Regular maintenance ensures reliability and safety compliance.

Escalator maintenance focuses on steps, handrails, drives, and safety switches. Proper maintenance prevents accidents and extends equipment life. Modernization improves efficiency and accessibility.

Management strategies include traffic analysis, modernization planning, and contractor oversight. Traffic analysis determines adequate capacity. Modernization extends useful life and improves performance. Contractor management ensures quality service.

### Roofing and Building Envelope
The building envelope includes roofs, walls, windows, and foundations. Envelope integrity prevents water intrusion, controls thermal transfer, and maintains structural stability. Regular inspection identifies problems early.

Roof management involves inspection, maintenance, and lifecycle planning. Inspections identify leaks, membrane damage, and drainage issues. Maintenance addresses minor problems before major repairs become necessary. Lifecycle planning budgets for replacement.

Window and wall systems affect energy efficiency and occupant comfort. Proper sealing prevents air infiltration. Glazing choices impact solar heat gain. Insulation levels determine thermal performance. envelope improvements often provide good return on investment.`,
      
      quiz: [
        {
          id: 1,
          question: "What does HVAC management involve?",
          options: [
            "Only temperature control",
            "Temperature, humidity, air quality, and energy efficiency",
            "Only equipment repair",
            "Only filter changes"
          ],
          correctAnswer: 1,
          explanation: "Comprehensive HVAC management addresses multiple environmental factors and operational efficiency."
        },
        {
          id: 2,
          question: "What indicates ventilation adequacy?",
          options: [
            "Only air temperature",
            "Carbon dioxide level monitoring",
            "Only humidity readings",
            "Only air speed"
          ],
          correctAnswer: 1,
          explanation: "CO2 levels directly correlate with fresh air ventilation rates and occupant comfort."
        },
        {
          id: 3,
          question: "What are key electrical system components?",
          options: [
            "Only light switches",
            "Transformers, switchgear, distribution panels, circuit breakers",
            "Only outlets",
            "Only wiring"
          ],
          correctAnswer: 1,
          explanation: "Multiple components work together to distribute electrical power safely and reliably."
        },
        {
          id: 4,
          question: "What protects critical equipment during power outages?",
          options: [
            "Only surge protectors",
            "Uninterruptible Power Supply (UPS) systems",
            "Only circuit breakers",
            "Only generators"
          ],
          correctAnswer: 1,
          explanation: "UPS systems provide immediate battery backup during brief outages until generators start."
        },
        {
          id: 5,
          question: "What reduces wasted electrical energy?",
          options: [
            "Only turning off lights",
            "Power factor correction",
            "Only using less equipment",
            "Only shorter hours"
          ],
          correctAnswer: 1,
          explanation: "Power factor correction reduces reactive power that doesn't perform useful work but still consumes capacity."
        },
        {
          id: 6,
          question: "What do water conservation measures achieve?",
          options: [
            "Only lower bills",
            "Reduced consumption, costs, and sustainability support",
            "Only regulatory compliance",
            "Only system longevity"
          ],
          correctAnswer: 1,
          explanation: "Water conservation provides financial, operational, and environmental benefits simultaneously."
        },
        {
          id: 7,
          question: "What requires specific temperature management?",
          options: [
            "Only hot water supply",
            "Legionella prevention in water systems",
            "Only cold water lines",
            "Only irrigation water"
          ],
          correctAnswer: 1,
          explanation: "Legionella bacteria growth prevention requires careful temperature control in potable water systems."
        },
        {
          id: 8,
          question: "What do life safety systems protect during?",
          options: [
            "Only normal operations",
            "Emergency situations",
            "Only business hours",
            "Only equipment failures"
          ],
          correctAnswer: 1,
          explanation: "Life safety systems specifically address protection during fires, power failures, and other emergencies."
        },
        {
          id: 9,
          question: "What must remain clear at all times?",
          options: [
            "Only storage rooms",
            "Egress pathways for emergency exit",
            "Only equipment rooms",
            "Only loading docks"
          ],
          correctAnswer: 1,
          explanation: "Unobstructed exit paths are legally required and critical for safe evacuation during emergencies."
        },
        {
          id: 10,
          question: "What do security systems include?",
          options: [
            "Only locks",
            "Access control, surveillance cameras, intrusion detection",
            "Only security guards",
            "Only alarm systems"
          ],
          correctAnswer: 1,
          explanation: "Modern security integrates multiple technologies for comprehensive protection."
        },
        {
          id: 11,
          question: "What do Building Automation Systems integrate?",
          options: [
            "Only HVAC controls",
            "Multiple systems through centralized computer platforms",
            "Only lighting controls",
            "Only security systems"
          ],
          correctAnswer: 1,
          explanation: "BAS provides unified control and monitoring of diverse building systems for operational efficiency."
        },
        {
          id: 12,
          question: "What do Energy Management Systems specialize in?",
          options: [
            "Only billing",
            "Monitoring and reducing energy consumption",
            "Only equipment repair",
            "Only staff scheduling"
          ],
          correctAnswer: 1,
          explanation: "EMS focuses specifically on energy efficiency through monitoring, analysis, and automated control."
        },
        {
          id: 13,
          question: "What does elevator maintenance ensure?",
          options: [
            "Only cleanliness",
            "Reliability and safety compliance",
            "Only speed",
            "Only appearance"
          ],
          correctAnswer: 1,
          explanation: "Regular maintenance prevents breakdowns and ensures compliance with safety regulations."
        },
        {
          id: 14,
          question: "What prevents escalator accidents?",
          options: [
            "Only warning signs",
            "Proper maintenance and safety switch operation",
            "Only slow speed",
            "Only handrail use"
          ],
          correctAnswer: 1,
          explanation: "Regular maintenance and functioning safety devices prevent most escalator-related injuries."
        },
        {
          id: 15,
          question: "What does building envelope integrity prevent?",
          options: [
            "Only appearance issues",
            "Water intrusion, thermal transfer, structural problems",
            "Only paint fading",
            "Only dust accumulation"
          ],
          correctAnswer: 1,
          explanation: "A intact envelope protects against multiple potential building performance issues."
        },
        {
          id: 16,
          question: "What does roof management involve?",
          options: [
            "Only leak repair",
            "Inspection, maintenance, and lifecycle planning",
            "Only cleaning",
            "Only coating application"
          ],
          correctAnswer: 1,
          explanation: "Comprehensive roof management includes assessment, upkeep, and long-term replacement planning."
        },
        {
          id: 17,
          question: "What affects energy efficiency in windows?",
          options: [
            "Only frame color",
            "Glazing choices and sealing quality",
            "Only window size",
            "Only operating mechanism"
          ],
          correctAnswer: 1,
          explanation: "Glass type and installation quality significantly impact thermal performance and air infiltration."
        },
        {
          id: 18,
          question: "What provides operational data for optimization?",
          options: [
            "Only equipment manuals",
            "Building Automation System trend logging",
            "Only utility bills",
            "Only occupant complaints"
          ],
          correctAnswer: 1,
          explanation: "BAS data collection supports analysis of system performance and identification of improvement opportunities."
        },
        {
          id: 19,
          question: "What determines elevator system adequacy?",
          options: [
            "Only age",
            "Traffic analysis for capacity needs",
            "Only cab size",
            "Only speed rating"
          ],
          correctAnswer: 1,
          explanation: "Traffic patterns and peak demands determine whether elevator capacity meets building needs."
        },
        {
          id: 20,
          question: "What often provides good return on investment?",
          options: [
            "Only cosmetic upgrades",
            "Building envelope improvements",
            "Only decorative lighting",
            "Only signage updates"
          ],
          correctAnswer: 1,
          explanation: "Envelope upgrades typically reduce energy costs enough to justify investment through operational savings."
        }
      ]
    },
    {
      id: 3,
      title: "Maintenance Management Strategies",
      completed: false,
      content: `# Module 3: Maintenance Management Strategies

## Systematic Approaches to Facility Preservation
This module covers strategic maintenance planning, implementation, and evaluation. Effective maintenance management extends equipment life, reduces costs, and minimizes disruptions to operations.

### Maintenance Philosophy and Approaches
Three primary maintenance philosophies guide facility management: reactive, preventive, and predictive. Reactive maintenance addresses failures after they occur. This approach has highest emergency costs and operational disruptions.

Preventive maintenance follows scheduled interventions based on time or usage. This approach reduces unexpected failures but may involve unnecessary maintenance. Scheduling balances cost against reliability requirements.

Predictive maintenance uses condition monitoring to determine actual need. Techniques include vibration analysis, thermography, oil analysis, and ultrasonic testing. This approach targets maintenance when truly needed, optimizing resources.

### Developing Maintenance Programs
Effective maintenance programs include asset inventory, criticality assessment, task definition, and scheduling. Asset inventory catalogs all maintainable equipment with details like manufacturer, model, and installation date.

Criticality assessment ranks assets based on failure consequences. Critical assets whose failure would severely impact operations receive highest priority. Non-critical assets with minor failure consequences receive lower priority.

Task definition specifies what maintenance each asset requires. Tasks include inspections, adjustments, cleaning, lubrication, parts replacement, and testing. Manufacturer recommendations provide baseline task definitions.

### Computerized Maintenance Management Systems
Computerized Maintenance Management Systems (CMMS) automate maintenance operations. CMMS functions include work order management, inventory control, preventive scheduling, and reporting.

Work order management tracks requests, assignments, completion, and history. Digital work orders replace paper systems, improving efficiency and record-keeping. Mobile access enables field technicians to receive and complete work orders.

Inventory management tracks spare parts, tools, and materials. Minimum stock levels prevent shortages. Usage tracking identifies consumption patterns. Integration with purchasing streamlines reordering.

### Reliability-Centered Maintenance
Reliability-Centered Maintenance (RCM) focuses on maintaining system function rather than just preventing failure. RCM analyzes what failures could occur, their consequences, and effective prevention methods.

RCM methodology involves identifying functions, functional failures, failure modes, failure effects, and preventive tasks. This systematic approach prioritizes maintenance where it provides greatest value.

Failure Mode and Effects Analysis (FMEA) supports RCM by evaluating potential failure points. FMEA assesses severity, occurrence probability, and detection methods for each failure mode.

### Outsourcing vs. In-House Maintenance
Maintenance delivery decisions balance control, cost, expertise, and risk. In-house maintenance provides direct control and immediate response but requires staff, training, and tools.

Outsourcing transfers responsibility to specialized contractors. Benefits include expertise access, reduced administrative burden, and predictable costs. Challenges include less control and potential communication issues.

Hybrid approaches combine in-house staff for routine tasks with specialists for complex systems. This balances control with expertise access. Service Level Agreements (SLAs) define expectations for outsourced services.

### Maintenance Budgeting and Cost Control
Maintenance budgeting includes labor, materials, contracts, and capital improvements. Labor costs encompass wages, benefits, and training. Material costs include parts and supplies.

Contract costs cover outsourced services. Capital improvements fund major replacements and upgrades. Budget development considers historical data, inflation, and planned initiatives.

Cost control measures include inventory management, energy efficiency, and lifecycle costing. Inventory optimization reduces carrying costs while preventing shortages. Energy efficiency reduces operational expenses. Lifecycle costing evaluates total ownership costs.

### Performance Measurement and KPIs
Key Performance Indicators (KPIs) measure maintenance effectiveness. Common KPIs include maintenance cost as percentage of asset value, preventive maintenance compliance, mean time between failures, and backlog size.

Maintenance cost percentage compares spending to asset replacement value. Preventive compliance measures scheduled task completion. Mean time between failures indicates reliability. Backlog size shows workload balance.

Benchmarking compares performance to industry standards or similar facilities. Benchmarking identifies improvement opportunities. Regular review ensures continuous improvement.

### Safety in Maintenance Operations
Maintenance safety includes lockout/tagout procedures, personal protective equipment, confined space protocols, and fall protection. Lockout/tagout prevents accidental equipment startup during maintenance.

Personal protective equipment varies by task but may include hard hats, safety glasses, gloves, and respiratory protection. Confined space procedures address entry permits, atmospheric testing, and rescue plans.

Training ensures personnel understand safety requirements. Regular safety meetings reinforce protocols. Incident investigation identifies root causes and prevention strategies.

### Sustainability in Maintenance
Sustainable maintenance practices reduce environmental impact while controlling costs. Strategies include green cleaning products, water conservation, energy-efficient equipment, and waste reduction.

Green purchasing considers environmental attributes when selecting products. Lifecycle assessment evaluates total environmental impact from acquisition through disposal.

Resource efficiency minimizes consumption of energy, water, and materials. Waste management prioritizes reduction, reuse, and recycling. Sustainable practices often align with cost-saving objectives.`,
      
      quiz: [
        {
          id: 1,
          question: "What are the three primary maintenance philosophies?",
          options: [
            "Fast, cheap, good",
            "Reactive, preventive, and predictive",
            "Simple, complex, automated",
            "Internal, external, hybrid"
          ],
          correctAnswer: 1,
          explanation: "These philosophies represent different approaches to timing maintenance interventions."
        },
        {
          id: 2,
          question: "What characterizes reactive maintenance?",
          options: [
            "Lowest cost approach",
            "Highest emergency costs and operational disruptions",
            "Most efficient method",
            "Best for critical equipment"
          ],
          correctAnswer: 1,
          explanation: "Reactive maintenance incurs high costs from emergencies and business interruptions."
        },
        {
          id: 3,
          question: "What does predictive maintenance use?",
          options: [
            "Only time schedules",
            "Condition monitoring to determine actual need",
            "Only manufacturer recommendations",
            "Only failure history"
          ],
          correctAnswer: 1,
          explanation: "Predictive maintenance monitors actual equipment condition to optimize intervention timing."
        },
        {
          id: 4,
          question: "What does effective maintenance program include?",
          options: [
            "Only repair tools",
            "Asset inventory, criticality assessment, task definition, scheduling",
            "Only spare parts",
            "Only technician training"
          ],
          correctAnswer: 1,
          explanation: "Systematic programs address multiple elements from inventory through scheduling."
        },
        {
          id: 5,
          question: "What does criticality assessment rank based on?",
          options: [
            "Only equipment cost",
            "Failure consequences on operations",
            "Only equipment age",
            "Only repair difficulty"
          ],
          correctAnswer: 1,
          explanation: "Criticality focuses on operational impact rather than just equipment characteristics."
        },
        {
          id: 6,
          question: "What do CMMS functions include?",
          options: [
            "Only time tracking",
            "Work order management, inventory control, preventive scheduling, reporting",
            "Only payroll processing",
            "Only email communication"
          ],
          correctAnswer: 1,
          explanation: "Comprehensive CMMS manages multiple aspects of maintenance operations digitally."
        },
        {
          id: 7,
          question: "What does digital work order system improve?",
          options: [
            "Only communication speed",
            "Efficiency and record-keeping",
            "Only equipment performance",
            "Only staff morale"
          ],
          correctAnswer: 1,
          explanation: "Digital systems streamline processes and provide better historical data than paper systems."
        },
        {
          id: 8,
          question: "What does RCM focus on maintaining?",
          options: [
            "Only equipment appearance",
            "System function rather than just preventing failure",
            "Only manufacturer warranties",
            "Only maintenance schedules"
          ],
          correctAnswer: 1,
          explanation: "RCM emphasizes preserving operational capability rather than just component condition."
        },
        {
          id: 9,
          question: "What does FMEA evaluate?",
          options: [
            "Only equipment cost",
            "Severity, occurrence probability, and detection of failure modes",
            "Only repair times",
            "Only spare part availability"
          ],
          correctAnswer: 1,
          explanation: "FMEA systematically assesses potential failure points to prioritize preventive efforts."
        },
        {
          id: 10,
          question: "What do maintenance delivery decisions balance?",
          options: [
            "Only costs",
            "Control, cost, expertise, and risk",
            "Only convenience",
            "Only staff preferences"
          ],
          correctAnswer: 1,
          explanation: "Multiple factors influence whether maintenance should be performed in-house or outsourced."
        },
        {
          id: 11,
          question: "What defines expectations for outsourced services?",
          options: [
            "Only purchase orders",
            "Service Level Agreements (SLAs)",
            "Only verbal agreements",
            "Only price quotes"
          ],
          correctAnswer: 1,
          explanation: "SLAs formally specify service standards, response times, and performance metrics."
        },
        {
          id: 12,
          question: "What does maintenance budgeting include?",
          options: [
            "Only labor costs",
            "Labor, materials, contracts, and capital improvements",
            "Only utility costs",
            "Only equipment purchases"
          ],
          correctAnswer: 1,
          explanation: "Comprehensive budgets address all cost categories associated with maintenance operations."
        },
        {
          id: 13,
          question: "What evaluates total ownership costs?",
          options: [
            "Only purchase price",
            "Lifecycle costing",
            "Only maintenance costs",
            "Only energy costs"
          ],
          correctAnswer: 1,
          explanation: "Lifecycle costing considers acquisition, operation, maintenance, and disposal expenses."
        },
        {
          id: 14,
          question: "What measures preventive maintenance compliance?",
          options: [
            "Only equipment uptime",
            "Scheduled task completion percentage",
            "Only repair costs",
            "Only staff hours"
          ],
          correctAnswer: 1,
          explanation: "Compliance KPI tracks how well scheduled preventive tasks are actually completed."
        },
        {
          id: 15,
          question: "What does benchmarking identify?",
          options: [
            "Only problems",
            "Improvement opportunities through comparison",
            "Only best employees",
            "Only equipment failures"
          ],
          correctAnswer: 1,
          explanation: "Comparing performance to standards or peers reveals areas for potential improvement."
        },
        {
          id: 16,
          question: "What prevents accidental equipment startup?",
          options: [
            "Only warning signs",
            "Lockout/tagout procedures",
            "Only supervision",
            "Only equipment design"
          ],
          correctAnswer: 1,
          explanation: "Lockout/tagout physically prevents energy release during maintenance for technician safety."
        },
        {
          id: 17,
          question: "What do confined space procedures address?",
          options: [
            "Only entry methods",
            "Entry permits, atmospheric testing, rescue plans",
            "Only lighting requirements",
            "Only cleaning methods"
          ],
          correctAnswer: 1,
          explanation: "Comprehensive confined space protocols address multiple safety aspects for hazardous environments."
        },
        {
          id: 18,
          question: "What does sustainable maintenance reduce?",
          options: [
            "Only costs",
            "Environmental impact while controlling costs",
            "Only energy use",
            "Only water use"
          ],
          correctAnswer: 1,
          explanation: "Sustainability initiatives often achieve both environmental and financial benefits."
        },
        {
          id: 19,
          question: "What does green purchasing consider?",
          options: [
            "Only price",
            "Environmental attributes when selecting products",
            "Only availability",
            "Only brand reputation"
          ],
          correctAnswer: 1,
          explanation: "Environmental product characteristics influence purchasing decisions in sustainable operations."
        },
        {
          id: 20,
          question: "What prioritizes waste management?",
          options: [
            "Only disposal",
            "Reduction, reuse, and recycling",
            "Only collection",
            "Only storage"
          ],
          correctAnswer: 1,
          explanation: "The waste hierarchy emphasizes preventing waste generation first, then reuse, then recycling."
        }
      ]
    },
    {
      id: 4,
      title: "Space Planning and Workplace Management",
      completed: false,
      content: `# Module 4: Space Planning and Workplace Management

## Optimizing Physical Environments for Productivity
This module addresses strategic space allocation, workplace design, and facility utilization. Effective space management supports organizational objectives while controlling real estate costs.

### Principles of Space Planning
Space planning involves allocating physical areas to support organizational functions efficiently. Key principles include functionality, flexibility, efficiency, and comfort. Functionality ensures spaces support intended activities.

Flexibility allows adaptation to changing needs. Efficiency maximizes use while minimizing waste. Comfort addresses environmental and ergonomic factors affecting occupants. Balancing these principles creates effective workplaces.

Space standards establish guidelines for allocation per person or function. Standards vary by organization type and work style. Traditional offices allocate more space than open plans. Specialized functions require specific space configurations.

### Workplace Strategies and Trends
Modern workplace strategies include activity-based working, hoteling, and agile environments. Activity-based working provides varied settings for different tasks. Hoteling reserves workspaces as needed rather than assigning permanently.

Agile environments support rapid team formation and collaboration. These strategies reduce space requirements while potentially increasing productivity. Implementation requires cultural and technological support.

Hybrid work models combining office and remote work influence space needs. Reduced permanent desk requirements allow space repurposing for collaboration. Facilities must support both in-office and remote connectivity.

### Space Utilization Analysis
Space utilization studies measure how effectively areas are used. Methods include observational studies, sensor technology, and booking system data. Utilization rates below 60% often indicate inefficiency.

Peak utilization identifies maximum simultaneous usage. This informs capacity planning. Usage patterns reveal when spaces are most active. Temporal analysis shows how usage varies throughout days and weeks.

Benchmarking compares utilization to industry standards. Office spaces typically target 70-80% utilization. Underutilization represents wasted resources. Overutilization causes congestion and dissatisfaction.

### Furniture and Equipment Management
Furniture selection balances ergonomics, functionality, aesthetics, and cost. Ergonomic furniture reduces injury risk and improves comfort. Functional furniture supports work processes. Aesthetic considerations affect perceived quality.

Furniture standards ensure consistency and simplify procurement. Standards may specify chair types, desk dimensions, storage units, and panel heights. Modular systems facilitate reconfiguration.

Asset tracking manages furniture inventory and lifecycle. Tracking systems record location, condition, and replacement schedule. Lifecycle management plans for refresh and replacement cycles.

### Move Management and Churn
Move management coordinates physical relocations of people, furniture, and equipment. Effective move management minimizes disruption and cost. Planning includes timeline development, communication, and logistics coordination.

Churn rate measures frequency of workspace changes. High churn increases costs and disruptions. Strategies to reduce churn include flexible spaces and standardized configurations. Technology-enabled moves streamline processes.

Change management addresses human aspects of relocation. Communication reduces anxiety and resistance. Involvement in planning increases acceptance. Support during transition maintains productivity.

### Sustainable Space Management
Sustainable space management reduces environmental impact through efficient design and operation. Strategies include energy-efficient lighting, natural daylight optimization, and material selection.

Energy efficiency involves lighting controls, occupancy sensors, and efficient equipment. Daylighting reduces artificial lighting needs while providing psychological benefits. Material selection considers embodied energy and indoor air quality.

Space consolidation reduces overall square footage requirements. Fewer square feet mean lower energy consumption for heating, cooling, and lighting. Density optimization balances space reduction with occupant comfort.

### Technology-Enabled Workspaces
Smart workplace technologies enhance space management. Sensors monitor occupancy, environmental conditions, and utilization. Data analytics inform space optimization decisions.

Room booking systems manage shared space reservations. Integration with calendaring systems streamlines scheduling. Display systems show room availability and reservations.

Digital signage provides wayfinding and communication. Interactive maps help occupants locate spaces and colleagues. Mobile applications enable remote space management and service requests.

### Amenities and Support Spaces
Amenities enhance workplace appeal and support productivity. Common amenities include break areas, cafeterias, fitness facilities, and mother's rooms. Amenity provision balances cost with employee satisfaction.

Support spaces include copy/print areas, supply rooms, and equipment storage. Strategic placement minimizes travel distance. Adequate sizing prevents congestion.

Collaboration spaces support team work and informal meetings. Varied settings accommodate different group sizes and interaction types. Technology integration enables effective collaboration.

### Compliance and Accessibility
Space planning must address accessibility requirements. Americans with Disabilities Act (ADA) and similar regulations worldwide mandate access for people with disabilities. Requirements include clear pathways, appropriate clearances, and accessible fixtures.

Building codes establish minimum standards for egress, occupancy loads, and safety features. Compliance ensures legal operation and occupant safety. Regular review identifies needed modifications.

Universal design principles create spaces usable by people with diverse abilities. Universal design benefits all occupants, not just those with disabilities. Implementation often involves minimal additional cost when incorporated early.`,
      
      quiz: [
        {
          id: 1,
          question: "What are key space planning principles?",
          options: [
            "Only cost minimization",
            "Functionality, flexibility, efficiency, and comfort",
            "Only aesthetic appeal",
            "Only traditional layouts"
          ],
          correctAnswer: 1,
          explanation: "These principles balance multiple objectives to create effective work environments."
        },
        {
          id: 2,
          question: "What ensures spaces support intended activities?",
          options: [
            "Only beautiful design",
            "Functionality principle",
            "Only large size",
            "Only modern furniture"
          ],
          correctAnswer: 1,
          explanation: "Functionality focuses on how well physical space enables work processes and activities."
        },
        {
          id: 3,
          question: "What does activity-based working provide?",
          options: [
            "Only assigned desks",
            "Varied settings for different tasks",
            "Only private offices",
            "Only open areas"
          ],
          correctAnswer: 1,
          explanation: "Activity-based design offers different space types suited to specific work activities."
        },
        {
          id: 4,
          question: "What reserves workspaces as needed?",
          options: [
            "Traditional assignment",
            "Hoteling strategy",
            "Only first-come basis",
            "Only management allocation"
          ],
          correctAnswer: 1,
          explanation: "Hoteling allows employees to reserve workspace when needed rather than having permanent assignments."
        },
        {
          id: 5,
          question: "What do hybrid work models influence?",
          options: [
            "Only remote work",
            "Space needs and utilization patterns",
            "Only technology requirements",
            "Only commuting patterns"
          ],
          correctAnswer: 1,
          explanation: "Hybrid work reduces permanent desk needs while increasing demand for collaboration spaces."
        },
        {
          id: 6,
          question: "What do space utilization studies measure?",
          options: [
            "Only square footage",
            "How effectively areas are used",
            "Only furniture counts",
            "Only energy consumption"
          ],
          correctAnswer: 1,
          explanation: "Utilization analysis evaluates actual usage compared to capacity to identify efficiency opportunities."
        },
        {
          id: 7,
          question: "What indicates space inefficiency?",
          options: [
            "High utilization rates",
            "Utilization rates below 60%",
            "Equal male/female ratio",
            "Modern furniture"
          ],
          correctAnswer: 1,
          explanation: "Low utilization suggests space is frequently unoccupied, representing potential waste."
        },
        {
          id: 8,
          question: "What does peak utilization inform?",
          options: [
            "Only cleaning schedules",
            "Capacity planning decisions",
            "Only furniture purchases",
            "Only paint colors"
          ],
          correctAnswer: 1,
          explanation: "Maximum simultaneous usage determines whether space capacity meets demand at busiest times."
        },
        {
          id: 9,
          question: "What does ergonomic furniture reduce?",
          options: [
            "Only costs",
            "Injury risk and improves comfort",
            "Only space requirements",
            "Only aesthetic appeal"
          ],
          correctAnswer: 1,
          explanation: "Proper ergonomic design minimizes physical strain and supports long-term health."
        },
        {
          id: 10,
          question: "What facilitates furniture reconfiguration?",
          options: [
            "Only heavy furniture",
            "Modular furniture systems",
            "Only custom pieces",
            "Only antique furniture"
          ],
          correctAnswer: 1,
          explanation: "Modular components can be rearranged easily to accommodate changing space needs."
        },
        {
          id: 11,
          question: "What does move management coordinate?",
          options: [
            "Only furniture delivery",
            "Physical relocations of people, furniture, and equipment",
            "Only employee schedules",
            "Only building access"
          ],
          correctAnswer: 1,
          explanation: "Comprehensive move management addresses all aspects of physical workspace changes."
        },
        {
          id: 12,
          question: "What measures workspace change frequency?",
          options: [
            "Only move costs",
            "Churn rate",
            "Only employee satisfaction",
            "Only square footage"
          ],
          correctAnswer: 1,
          explanation: "Churn rate quantifies how often workspaces are reconfigured or reassigned."
        },
        {
          id: 13,
          question: "What reduces anxiety during relocations?",
          options: [
            "Only speed",
            "Effective communication about changes",
            "Only ignoring concerns",
            "Only after-the-fact notices"
          ],
          correctAnswer: 1,
          explanation: "Clear, timely communication helps employees understand and accept workspace changes."
        },
        {
          id: 14,
          question: "What does daylighting provide?",
          options: [
            "Only energy savings",
            "Reduced artificial lighting and psychological benefits",
            "Only heat gain",
            "Only glare problems"
          ],
          correctAnswer: 1,
          explanation: "Natural light reduces energy use while potentially improving mood and productivity."
        },
        {
          id: 15,
          question: "What balances space reduction with comfort?",
          options: [
            "Only smaller furniture",
            "Density optimization",
            "Only eliminating amenities",
            "Only shorter hours"
          ],
          correctAnswer: 1,
          explanation: "Finding the right balance between space efficiency and occupant comfort is density optimization."
        },
        {
          id: 16,
          question: "What do workplace sensors monitor?",
          options: [
            "Only temperature",
            "Occupancy, environmental conditions, utilization",
            "Only noise levels",
            "Only employee movements"
          ],
          correctAnswer: 1,
          explanation: "Modern sensors collect diverse data to inform space management decisions."
        },
        {
          id: 17,
          question: "What streamlines shared space scheduling?",
          options: [
            "Only paper sign-up sheets",
            "Room booking systems integrated with calendars",
            "Only verbal reservations",
            "Only first-come use"
          ],
          correctAnswer: 1,
          explanation: "Integrated systems make finding and reserving spaces more efficient and reliable."
        },
        {
          id: 18,
          question: "What balances amenity cost with satisfaction?",
          options: [
            "Only eliminating amenities",
            "Strategic provision based on value",
            "Only expensive amenities",
            "Only basic amenities"
          ],
          correctAnswer: 1,
          explanation: "Thoughtful amenity selection considers both cost impact and employee value perception."
        },
        {
          id: 19,
          question: "What must space planning address?",
          options: [
            "Only management preferences",
            "Accessibility requirements for people with disabilities",
            "Only current staff needs",
            "Only aesthetic trends"
          ],
          correctAnswer: 1,
          explanation: "Legal requirements mandate accessible design to accommodate diverse abilities."
        },
        {
          id: 20,
          question: "What benefits all occupants, not just those with disabilities?",
          options: [
            "Only specialized equipment",
            "Universal design principles",
            "Only accessible parking",
            "Only wheelchair ramps"
          ],
          correctAnswer: 1,
          explanation: "Universal design creates spaces more usable and comfortable for everyone."
        }
      ]
    },
    {
      id: 5,
      title: "Financial Management for Facilities",
      completed: false,
      content: `# Module 5: Financial Management for Facilities

## Budgeting, Cost Control, and Financial Analysis
This module covers financial aspects of facilities management including budgeting, accounting, cost analysis, and financial reporting. Effective financial management ensures resources align with organizational priorities.

### Facilities Budget Development
Budget development involves forecasting expenses for operations, maintenance, and capital projects. Operating budgets cover recurring expenses like utilities, cleaning, and routine maintenance. Capital budgets fund major projects and equipment replacements.

Budgeting approaches include incremental, zero-based, and activity-based. Incremental budgeting adjusts previous budgets by percentages. Zero-based budgeting justifies every expense anew. Activity-based budgeting links costs to specific activities or outputs.

Budget components include personnel costs, contracted services, materials and supplies, utilities, and capital expenditures. Personnel costs encompass salaries, benefits, and training. Contracted services include outsourcing arrangements. Materials cover consumable supplies.

### Cost Classification and Analysis
Facilities costs classify as fixed, variable, or semi-variable. Fixed costs remain constant regardless of usage (e.g., base rental). Variable costs change with activity levels (e.g., electricity). Semi-variable costs have both fixed and variable components.

Direct costs specifically relate to facilities functions. Indirect costs support multiple functions. Understanding cost behavior informs decision-making. Activity-based costing allocates indirect costs based on usage drivers.

Cost benchmarking compares expenses to industry standards or similar facilities. Benchmark metrics include cost per square foot, cost per occupant, and cost as percentage of revenue. Benchmarking identifies improvement opportunities.

### Capital Planning and Lifecycle Costing
Capital planning addresses major investments in facilities. The capital planning process includes needs assessment, option evaluation, funding identification, and implementation scheduling. Strategic alignment ensures investments support organizational goals.

Lifecycle costing evaluates total cost of ownership over asset lifespan. Components include acquisition, installation, operation, maintenance, and disposal costs. Lifecycle analysis often reveals higher efficiency equipment justifies higher purchase prices.

Return on Investment (ROI) analysis calculates financial benefits relative to costs. Payback period determines how long until savings recover initial investment. Net Present Value (NPV) accounts for time value of money. Internal Rate of Return (IRR) measures investment efficiency.

### Operating Expense Management
Utility cost management involves consumption monitoring, rate optimization, and efficiency improvements. Submetering identifies high-use areas. Rate analysis ensures optimal tariff selection. Efficiency measures reduce consumption without affecting operations.

Maintenance cost control balances preventive spending against failure risks. Optimizing maintenance frequency and methods minimizes total cost. Reliability-centered maintenance focuses resources where they provide greatest value.

Contracted service management includes competitive bidding, contract negotiation, and performance monitoring. Service Level Agreements (SLAs) define expectations and penalties. Regular vendor performance reviews ensure value delivery.

### Financial Reporting and Metrics
Financial reports communicate facilities financial performance to stakeholders. Key reports include budget vs. actual comparisons, variance analysis, and trend reports. Clear reporting supports decision-making and accountability.

Key Performance Indicators (KPIs) measure financial effectiveness. Common facilities KPIs include cost per square foot, maintenance cost as percentage of replacement value, energy cost intensity, and space utilization cost.

Variance analysis explains differences between budgeted and actual amounts. Favorable variances occur when actual costs are lower than budget. Unfavorable variances require explanation and corrective action plans.

### Procurement and Contract Management
Procurement processes ensure value acquisition of goods and services. Steps include needs definition, supplier identification, bid solicitation, evaluation, selection, and contract execution. Ethical procurement maintains fairness and transparency.

Contract types include fixed-price, cost-plus, and performance-based. Fixed-price contracts set predetermined amounts. Cost-plus contracts reimburse actual costs plus fee. Performance-based contracts tie compensation to results.

Contract administration involves monitoring compliance, managing changes, and ensuring payment accuracy. Change orders document scope modifications. Performance measurement tracks contractor achievement against requirements.

### Sustainability Economics
Sustainable practices often provide economic benefits through reduced resource consumption. Energy efficiency investments typically offer attractive returns. Water conservation reduces utility costs. Waste minimization lowers disposal expenses.

Green building certification (LEED, BREEAM) may increase property value and reduce operating costs. Certification costs must be weighed against benefits. Some jurisdictions offer incentives for sustainable features.

Total Cost of Ownership (TCO) analysis for sustainable options considers all cost categories. Higher initial costs may be offset by operational savings. Environmental benefits, while harder to quantify, represent additional value.

### Risk Management and Insurance
Facilities risk management identifies, assesses, and mitigates potential losses. Risks include property damage, liability claims, business interruption, and regulatory non-compliance. Risk assessment evaluates likelihood and impact.

Insurance transfers certain risks to third parties. Common coverages include property, liability, business interruption, and equipment breakdown. Adequate coverage limits and appropriate deductibles balance protection and cost.

Loss prevention reduces insurance claims through safety programs, maintenance, and security measures. Lower claims history may reduce premiums. Risk retention decisions determine what risks to self-insure versus transfer.

### Funding Strategies and Alternatives
Funding sources for facilities include operational budgets, capital budgets, special appropriations, and financing. Operational funding covers routine expenses. Capital funding addresses long-term investments.

Financing options include loans, leases, and bonds. Loans provide immediate funds repaid with interest. Leases spread payments over time. Bonds offer long-term financing for major projects. Each option has different financial implications.

Public-private partnerships involve collaboration between public entities and private companies. These arrangements can provide facilities without large upfront public investment. Careful structuring ensures appropriate risk allocation and value delivery.`,
      
      quiz: [
        {
          id: 1,
          question: "What do operating budgets cover?",
          options: [
            "Only equipment purchases",
            "Recurring expenses like utilities and routine maintenance",
            "Only building construction",
            "Only employee bonuses"
          ],
          correctAnswer: 1,
          explanation: "Operating budgets address day-to-day expenses necessary for facility operations."
        },
        {
          id: 2,
          question: "What justifies every expense anew each period?",
          options: [
            "Incremental budgeting",
            "Zero-based budgeting approach",
            "Traditional budgeting",
            "Historical budgeting"
          ],
          correctAnswer: 1,
          explanation: "Zero-based budgeting requires justification of all expenses rather than adjusting previous budgets."
        },
        {
          id: 3,
          question: "What are budget components?",
          options: [
            "Only salary costs",
            "Personnel, contracts, materials, utilities, capital expenditures",
            "Only utility bills",
            "Only maintenance supplies"
          ],
          correctAnswer: 1,
          explanation: "Comprehensive budgets include all major cost categories associated with facilities."
        },
        {
          id: 4,
          question: "What costs change with activity levels?",
          options: [
            "Fixed costs",
            "Variable costs",
            "Sunk costs",
            "Capital costs"
          ],
          correctAnswer: 1,
          explanation: "Variable costs fluctuate based on usage, such as electricity for lighting and equipment."
        },
        {
          id: 5,
          question: "What allocates indirect costs based on usage drivers?",
          options: [
            "Traditional costing",
            "Activity-based costing",
            "Direct costing",
            "Standard costing"
          ],
          correctAnswer: 1,
          explanation: "Activity-based costing provides more accurate cost allocation by linking expenses to activities that drive them."
        },
        {
          id: 6,
          question: "What does capital planning address?",
          options: [
            "Only daily operations",
            "Major investments in facilities",
            "Only maintenance schedules",
            "Only utility payments"
          ],
          correctAnswer: 1,
          explanation: "Capital planning focuses on significant, long-term investments rather than routine expenses."
        },
        {
          id: 7,
          question: "What evaluates total cost of ownership?",
          options: [
            "Only purchase price",
            "Lifecycle costing analysis",
            "Only maintenance costs",
            "Only disposal costs"
          ],
          correctAnswer: 1,
          explanation: "Lifecycle costing considers all expenses from acquisition through disposal for comprehensive evaluation."
        },
        {
          id: 8,
          question: "What calculates financial benefits relative to costs?",
          options: [
            "Only cost tracking",
            "Return on Investment (ROI) analysis",
            "Only budget comparison",
            "Only expense recording"
          ],
          correctAnswer: 1,
          explanation: "ROI quantifies financial return relative to investment amount to evaluate project viability."
        },
        {
          id: 9,
          question: "What identifies high utility use areas?",
          options: [
            "Only utility bills",
            "Submetering installation",
            "Only visual inspection",
            "Only occupant complaints"
          ],
          correctAnswer: 1,
          explanation: "Submetering provides detailed consumption data for specific areas or systems."
        },
        {
          id: 10,
          question: "What defines contractor expectations and penalties?",
          options: [
            "Only purchase orders",
            "Service Level Agreements (SLAs)",
            "Only verbal agreements",
            "Only email communications"
          ],
          correctAnswer: 1,
          explanation: "SLAs formally specify performance standards and consequences for non-compliance."
        },
        {
          id: 11,
          question: "What explains budget vs. actual differences?",
          options: [
            "Only budget reports",
            "Variance analysis",
            "Only financial statements",
            "Only expense receipts"
          ],
          correctAnswer: 1,
          explanation: "Variance analysis identifies and explains reasons for deviations from planned budgets."
        },
        {
          id: 12,
          question: "What measures cost per square foot?",
          options: [
            "Only space measurement",
            "Key Performance Indicator (KPI)",
            "Only accounting system",
            "Only budget document"
          ],
          correctAnswer: 1,
          explanation: "Cost per square foot is a common facilities KPI for benchmarking and performance measurement."
        },
        {
          id: 13,
          question: "What ensures ethical acquisition of goods/services?",
          options: [
            "Only price shopping",
            "Formal procurement processes",
            "Only personal relationships",
            "Only quick purchases"
          ],
          correctAnswer: 1,
          explanation: "Structured procurement ensures fairness, transparency, and value in purchasing decisions."
        },
        {
          id: 14,
          question: "What ties contractor compensation to results?",
          options: [
            "Fixed-price contracts",
            "Performance-based contracts",
            "Cost-plus contracts",
            "Time-and-materials contracts"
          ],
          correctAnswer: 1,
          explanation: "Performance-based contracts align contractor incentives with desired outcomes."
        },
        {
          id: 15,
          question: "What tracks contractor achievement against requirements?",
          options: [
            "Only payment processing",
            "Performance measurement systems",
            "Only contract signing",
            "Only initial evaluation"
          ],
          correctAnswer: 1,
          explanation: "Ongoing performance monitoring ensures contractors meet agreed-upon standards."
        },
        {
          id: 16,
          question: "What may increase property value?",
          options: [
            "Only cosmetic upgrades",
            "Green building certification",
            "Only new furniture",
            "Only paint colors"
          ],
          correctAnswer: 1,
          explanation: "Certifications like LEED can enhance property marketability and perceived value."
        },
        {
          id: 17,
          question: "What considers all cost categories for sustainable options?",
          options: [
            "Only purchase price",
            "Total Cost of Ownership (TCO) analysis",
            "Only installation cost",
            "Only maintenance cost"
          ],
          correctAnswer: 1,
          explanation: "TCO provides comprehensive evaluation of sustainable investments over their lifespan."
        },
        {
          id: 18,
          question: "What transfers certain risks to third parties?",
          options: [
            "Only risk avoidance",
            "Insurance coverage",
            "Only self-insurance",
            "Only risk retention"
          ],
          correctAnswer: 1,
          explanation: "Insurance policies transfer financial risk from the facility to insurance companies."
        },
        {
          id: 19,
          question: "What may reduce insurance premiums?",
          options: [
            "Only frequent claims",
            "Effective loss prevention programs",
            "Only higher deductibles",
            "Only fewer assets"
          ],
          correctAnswer: 1,
          explanation: "Demonstrating risk reduction through safety measures can lead to lower insurance costs."
        },
        {
          id: 20,
          question: "What spreads payments over time for equipment?",
          options: [
            "Only cash purchase",
            "Leasing arrangements",
            "Only loans",
            "Only bonds"
          ],
          correctAnswer: 1,
          explanation: "Leasing provides use of equipment with regular payments rather than large upfront purchase."
        }
      ]
    },
    {
      id: 6,
      title: "Strategic Facilities Leadership",
      completed: false,
      content: `# Module 6: Strategic Facilities Leadership

## Leading Facilities Organizations Effectively
This final module addresses leadership, strategy development, change management, and future trends in facilities management. Strategic leadership aligns facilities with organizational objectives and drives continuous improvement.

### Strategic Planning for Facilities
Strategic facilities planning aligns physical assets with organizational mission and goals. The planning process involves environmental scanning, SWOT analysis, objective setting, strategy development, and implementation planning.

Environmental scanning assesses external factors like economic conditions, technological trends, regulatory changes, and market dynamics. Internal analysis evaluates current facilities capabilities, resources, and performance.

SWOT analysis identifies strengths, weaknesses, opportunities, and threats. Strengths and weaknesses are internal factors. Opportunities and threats are external factors. This analysis informs strategic direction.

### Change Management in Facilities
Facilities organizations constantly face change from technology, regulations, organizational restructuring, and market conditions. Effective change management minimizes disruption and maximizes adoption.

Change management frameworks include preparing for change, managing transition, and reinforcing new behaviors. Preparation involves communication and stakeholder engagement. Transition management provides support during implementation. Reinforcement sustains changes.

Resistance to change is natural and expected. Addressing resistance involves listening to concerns, explaining rationale, involving stakeholders, and providing support. Successful change management balances technical and human aspects.

### Team Leadership and Development
Facilities teams include diverse roles from technicians to planners to administrators. Effective leadership inspires performance, develops capabilities, and fosters collaboration. Leadership styles should adapt to situations and individuals.

Team development involves skills assessment, training planning, and career pathing. Skills assessment identifies gaps between current and needed capabilities. Training addresses immediate needs. Career development prepares for future roles.

Performance management includes goal setting, regular feedback, and recognition. SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound) provide clear direction. Regular feedback guides improvement. Recognition motivates continued excellence.

### Technology Adoption and Innovation
Technology continuously transforms facilities management. Current innovations include Internet of Things (IoT) sensors, artificial intelligence analytics, mobile applications, and augmented reality for maintenance.

Technology adoption requires careful evaluation of benefits, costs, and implementation requirements. Pilot testing validates technology before full deployment. Change management supports user adoption. Training ensures effective utilization.

Digital transformation integrates technology across facilities operations. This goes beyond individual systems to create connected, data-driven environments. Digital twins create virtual replicas of physical facilities for simulation and optimization.

### Sustainability Leadership
Facilities leaders champion environmental responsibility. Sustainability leadership involves setting goals, implementing programs, measuring progress, and communicating results. Goals may include energy reduction, waste diversion, or water conservation.

Sustainability programs integrate into daily operations rather than remaining separate initiatives. Employee engagement encourages participation. Measurement tracks progress toward goals. Communication builds support and accountability.

Regulatory compliance represents minimum standards. Leadership pushes beyond compliance to excellence. Sustainable practices often yield financial benefits through reduced resource consumption and enhanced reputation.

### Crisis Management and Business Continuity
Crisis management prepares facilities for emergencies ranging from natural disasters to security incidents. Preparedness includes risk assessment, plan development, training, and testing. Plans address communication, evacuation, sheltering, and recovery.

Business continuity ensures critical operations continue during disruptions. Facilities support continuity through backup systems, alternate locations, and recovery procedures. Coordination with organizational continuity planning is essential.

Post-crisis evaluation identifies lessons learned for plan improvement. Debriefing sessions capture experiences and insights. Plan updates incorporate these lessons to enhance future preparedness.

### Stakeholder Relationship Management
Facilities success depends on effective relationships with multiple stakeholders: executives, occupants, vendors, regulators, and community. Relationship management involves understanding needs, regular communication, and partnership building.

Executive relationships require demonstrating facilities value in business terms. Occupant relationships focus on service quality and responsiveness. Vendor relationships balance performance with partnership. Regulatory relationships emphasize compliance and cooperation.

Communication strategies vary by stakeholder. Executives need concise reports linking facilities to business outcomes. Occupants want responsive service channels. Vendors require clear specifications and feedback. Regular communication prevents misunderstandings.

### Professional Development and Ethics
Continuing professional development maintains and enhances facilities management capabilities. Development options include certifications, conferences, workshops, and networking. IFMA credentials (FMP, SFP, CFM) demonstrate professional commitment.

Ethical conduct builds trust and credibility. Ethical dilemmas may involve contractor selection, budget allocations, or regulatory interpretations. Ethical frameworks guide decision-making. Transparency and integrity characterize ethical facilities leadership.

Mentoring develops next-generation facilities professionals. Experienced leaders share knowledge and experience. Mentoring relationships benefit both mentors and mentees. Succession planning ensures leadership continuity.

### Future Trends and Adaptation
Facilities management continues evolving with several key trends: increased technology integration, sustainability emphasis, flexible workplace design, and data-driven decision making. Anticipating trends allows proactive adaptation.

Workplace evolution includes hybrid work models, activity-based environments, and wellness-focused design. Facilities must support diverse work styles while controlling costs. Flexibility becomes increasingly important.

Data analytics transforms facilities management from reactive to predictive. Data from sensors, meters, and systems informs optimization decisions. Analytics capabilities become core facilities competencies.

Global challenges like climate change, pandemics, and resource scarcity impact facilities management. Resilience planning addresses these challenges. Sustainable practices mitigate environmental impacts.`,
      
      quiz: [
        {
          id: 1,
          question: "What aligns physical assets with organizational goals?",
          options: [
            "Only daily operations",
            "Strategic facilities planning",
            "Only maintenance schedules",
            "Only budget management"
          ],
          correctAnswer: 1,
          explanation: "Strategic planning ensures facilities support and enable organizational mission achievement."
        },
        {
          id: 2,
          question: "What assesses external factors affecting facilities?",
          options: [
            "Only internal audits",
            "Environmental scanning in strategic planning",
            "Only budget reviews",
            "Only staff meetings"
          ],
          correctAnswer: 1,
          explanation: "Environmental scanning identifies external trends and conditions that may impact facilities strategy."
        },
        {
          id: 3,
          question: "What are internal factors in SWOT analysis?",
          options: [
            "Opportunities and threats",
            "Strengths and weaknesses",
            "Only market conditions",
            "Only regulatory changes"
          ],
          correctAnswer: 1,
          explanation: "Strengths and weaknesses represent internal capabilities and limitations of the facilities organization."
        },
        {
          id: 4,
          question: "What minimizes disruption during organizational changes?",
          options: [
            "Only ignoring changes",
            "Effective change management",
            "Only maintaining status quo",
            "Only quick implementation"
          ],
          correctAnswer: 1,
          explanation: "Structured change management addresses human and operational aspects to smooth transitions."
        },
        {
          id: 5,
          question: "What involves preparing, managing transition, and reinforcing?",
          options: [
            "Only project management",
            "Change management framework",
            "Only budget planning",
            "Only staff scheduling"
          ],
          correctAnswer: 1,
          explanation: "This three-phase approach addresses change from preparation through sustained implementation."
        },
        {
          id: 6,
          question: "What addresses natural resistance to change?",
          options: [
            "Only ignoring concerns",
            "Listening, explaining, involving, supporting",
            "Only mandating compliance",
            "Only threatening consequences"
          ],
          correctAnswer: 1,
          explanation: "Addressing resistance requires understanding concerns and involving stakeholders in solutions."
        },
        {
          id: 7,
          question: "What provides clear performance direction?",
          options: [
            "Only general statements",
            "SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound)",
            "Only verbal instructions",
            "Only written policies"
          ],
          correctAnswer: 1,
          explanation: "SMART criteria ensure goals are well-defined and actionable for team members."
        },
        {
          id: 8,
          question: "What transforms facilities with connected sensors?",
          options: [
            "Only manual processes",
            "Internet of Things (IoT) technology",
            "Only paper records",
            "Only verbal communication"
          ],
          correctAnswer: 1,
          explanation: "IoT connects physical devices to collect data and enable automated responses."
        },
        {
          id: 9,
          question: "What validates technology before full deployment?",
          options: [
            "Only vendor promises",
            "Pilot testing in controlled environments",
            "Only theoretical analysis",
            "Only competitor copying"
          ],
          correctAnswer: 1,
          explanation: "Pilots provide real-world testing to identify issues and validate benefits before major investment."
        },
        {
          id: 10,
          question: "What creates virtual facility replicas?",
          options: [
            "Only floor plans",
            "Digital twins for simulation",
            "Only photographs",
            "Only written descriptions"
          ],
          correctAnswer: 1,
          explanation: "Digital twins enable testing scenarios and optimizing performance without disrupting actual operations."
        },
        {
          id: 11,
          question: "What involves setting and implementing environmental goals?",
          options: [
            "Only regulatory compliance",
            "Sustainability leadership",
            "Only cost reduction",
            "Only energy purchasing"
          ],
          correctAnswer: 1,
          explanation: "Sustainability leadership actively pursues environmental improvement beyond minimum requirements."
        },
        {
          id: 12,
          question: "What represents minimum environmental standards?",
          options: [
            "Sustainability excellence",
            "Regulatory compliance requirements",
            "Industry best practices",
            "Voluntary programs"
          ],
          correctAnswer: 1,
          explanation: "Compliance meets legal minimums; leadership strives for higher environmental performance."
        },
        {
          id: 13,
          question: "What ensures operations continue during disruptions?",
          options: [
            "Only emergency response",
            "Business continuity planning",
            "Only insurance coverage",
            "Only backup generators"
          ],
          correctAnswer: 1,
          explanation: "Business continuity addresses maintaining critical functions during various disruption scenarios."
        },
        {
          id: 14,
          question: "What identifies lessons from crisis responses?",
          options: [
            "Only immediate cleanup",
            "Post-crisis evaluation and debriefing",
            "Only blame assignment",
            "Only moving forward"
          ],
          correctAnswer: 1,
          explanation: "Systematic evaluation captures insights to improve future emergency response capabilities."
        },
        {
          id: 15,
          question: "What do executive relationships require demonstrating?",
          options: [
            "Only technical details",
            "Facilities value in business terms",
            "Only cost savings",
            "Only problem avoidance"
          ],
          correctAnswer: 1,
          explanation: "Executives need to understand how facilities contribute to organizational objectives and outcomes."
        },
        {
          id: 16,
          question: "What demonstrates professional commitment?",
          options: [
            "Only work experience",
            "IFMA credentials (FMP, SFP, CFM)",
            "Only academic degrees",
            "Only personal connections"
          ],
          correctAnswer: 1,
          explanation: "Professional certifications validate knowledge and commitment to facilities management standards."
        },
        {
          id: 17,
          question: "What develops next-generation professionals?",
          options: [
            "Only formal training",
            "Mentoring relationships",
            "Only independent study",
            "Only job rotation"
          ],
          correctAnswer: 1,
          explanation: "Mentoring transfers experience and wisdom from seasoned professionals to developing talent."
        },
        {
          id: 18,
          question: "What becomes increasingly important in workplace design?",
          options: [
            "Only traditional layouts",
            "Flexibility for diverse work styles",
            "Only uniform spaces",
            "Only permanent assignments"
          ],
          correctAnswer: 1,
          explanation: "Changing work patterns require spaces that can adapt to different uses and occupancy levels."
        },
        {
          id: 19,
          question: "What transforms facilities from reactive to predictive?",
          options: [
            "Only experience",
            "Data analytics capabilities",
            "Only intuition",
            "Only traditional methods"
          ],
          correctAnswer: 1,
          explanation: "Data analysis enables anticipating needs and problems before they become critical issues."
        },
        {
          id: 20,
          question: "What addresses climate change impacts on facilities?",
          options: [
            "Only ignoring changes",
            "Resilience planning and sustainable practices",
            "Only reactive repairs",
            "Only insurance claims"
          ],
          correctAnswer: 1,
          explanation: "Proactive planning and sustainable operations prepare facilities for climate-related challenges."
        }
      ]
    }
  ],
  
  // 3. FINAL EXAM (40 Questions - Mixed from all modules)
  finalExam: [
    {
      id: 1,
      question: "What are the three primary domains of facilities management?",
      options: [
        "Budget, schedule, quality",
        "People, place, and process",
        "Operations, maintenance, security",
        "Buildings, equipment, staff"
      ],
      correctAnswer: 1,
      explanation: "From Module 1: Comprehensive facilities management integrates people needs, physical environment, and work processes.",
      module: 1
    },
    {
      id: 2,
      question: "What does facilities management directly impact?",
      options: [
        "Only building appearance",
        "Organizational performance through cost control and productivity",
        "Only vendor relationships",
        "Only regulatory compliance"
      ],
      correctAnswer: 1,
      explanation: "From Module 1: Effective facilities management contributes to organizational success through multiple mechanisms.",
      module: 1
    },
    {
      id: 3,
      question: "What does HVAC management involve?",
      options: [
        "Only temperature control",
        "Temperature, humidity, air quality, and energy efficiency",
        "Only equipment repair",
        "Only filter changes"
      ],
      correctAnswer: 1,
      explanation: "From Module 2: Comprehensive HVAC management addresses multiple environmental and efficiency factors.",
      module: 2
    },
    {
      id: 4,
      question: "What indicates ventilation adequacy?",
      options: [
        "Only air temperature",
        "Carbon dioxide level monitoring",
        "Only humidity readings",
        "Only air speed"
      ],
      correctAnswer: 1,
      explanation: "From Module 2: CO2 levels correlate with fresh air ventilation rates affecting occupant comfort and health.",
      module: 2
    },
    {
      id: 5,
      question: "What are the three maintenance philosophies?",
      options: [
        "Fast, cheap, good",
        "Reactive, preventive, and predictive",
        "Simple, complex, automated",
        "Internal, external, hybrid"
      ],
      correctAnswer: 1,
      explanation: "From Module 3: Different approaches to timing maintenance interventions based on different strategies.",
      module: 3
    },
    {
      id: 6,
      question: "What uses condition monitoring to determine needs?",
      options: [
        "Reactive maintenance",
        "Predictive maintenance approach",
        "Preventive maintenance",
        "Corrective maintenance"
      ],
      correctAnswer: 1,
      explanation: "From Module 3: Predictive maintenance monitors actual equipment condition rather than using time-based schedules.",
      module: 3
    },
    {
      id: 7,
      question: "What are key space planning principles?",
      options: [
        "Only cost minimization",
        "Functionality, flexibility, efficiency, and comfort",
        "Only aesthetic appeal",
        "Only traditional layouts"
      ],
      correctAnswer: 1,
      explanation: "From Module 4: These principles balance multiple objectives to create effective work environments.",
      module: 4
    },
    {
      id: 8,
      question: "What provides varied settings for different tasks?",
      options: [
        "Only assigned desks",
        "Activity-based working strategy",
        "Only private offices",
        "Only open areas"
      ],
      correctAnswer: 1,
      explanation: "From Module 4: Activity-based design offers different space types suited to specific work activities.",
      module: 4
    },
    {
      id: 9,
      question: "What justifies every expense anew each period?",
      options: [
        "Incremental budgeting",
        "Zero-based budgeting approach",
        "Traditional budgeting",
        "Historical budgeting"
      ],
      correctAnswer: 1,
      explanation: "From Module 5: Zero-based budgeting requires fresh justification rather than adjusting previous budgets.",
      module: 5
    },
    {
      id: 10,
      question: "What evaluates total cost of ownership?",
      options: [
        "Only purchase price",
        "Lifecycle costing analysis",
        "Only maintenance costs",
        "Only disposal costs"
      ],
      correctAnswer: 1,
      explanation: "From Module 5: Lifecycle costing considers all expenses from acquisition through disposal.",
      module: 5
    },
    {
      id: 11,
      question: "What aligns physical assets with organizational goals?",
      options: [
        "Only daily operations",
        "Strategic facilities planning",
        "Only maintenance schedules",
        "Only budget management"
      ],
      correctAnswer: 1,
      explanation: "From Module 6: Strategic planning ensures facilities support organizational mission achievement.",
      module: 6
    },
    {
      id: 12,
      question: "What minimizes disruption during changes?",
      options: [
        "Only ignoring changes",
        "Effective change management",
        "Only maintaining status quo",
        "Only quick implementation"
      ],
      correctAnswer: 1,
      explanation: "From Module 6: Structured change management addresses human and operational transition aspects.",
      module: 6
    },
    {
      id: 13,
      question: "What are primary facilities functions?",
      options: [
        "Only cleaning",
        "Operations, maintenance, space management, emergency preparedness",
        "Only security",
        "Only landscaping"
      ],
      correctAnswer: 1,
      explanation: "From Module 1: Comprehensive facilities management includes multiple interrelated functions.",
      module: 1
    },
    {
      id: 14,
      question: "What do Building Automation Systems integrate?",
      options: [
        "Only HVAC controls",
        "Multiple systems through centralized platforms",
        "Only lighting controls",
        "Only security systems"
      ],
      correctAnswer: 1,
      explanation: "From Module 2: BAS provides unified control and monitoring of diverse building systems.",
      module: 2
    },
    {
      id: 15,
      question: "What does CMMS automate?",
      options: [
        "Only time tracking",
        "Work order management, inventory control, scheduling, reporting",
        "Only payroll processing",
        "Only email communication"
      ],
      correctAnswer: 1,
      explanation: "From Module 3: CMMS manages multiple aspects of maintenance operations digitally.",
      module: 3
    },
    {
      id: 16,
      question: "What measures space effectiveness?",
      options: [
        "Only square footage",
        "Utilization studies and analysis",
        "Only furniture counts",
        "Only energy consumption"
      ],
      correctAnswer: 1,
      explanation: "From Module 4: Utilization analysis evaluates actual usage compared to capacity.",
      module: 4
    },
    {
      id: 17,
      question: "What defines contractor expectations?",
      options: [
        "Only purchase orders",
        "Service Level Agreements (SLAs)",
        "Only verbal agreements",
        "Only email communications"
      ],
      correctAnswer: 1,
      explanation: "From Module 5: SLAs formally specify performance standards and consequences.",
      module: 5
    },
    {
      id: 18,
      question: "What provides clear performance direction?",
      options: [
        "Only general statements",
        "SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound)",
        "Only verbal instructions",
        "Only written policies"
      ],
      correctAnswer: 1,
      explanation: "From Module 6: SMART criteria ensure goals are well-defined and actionable.",
      module: 6
    },
    {
      id: 19,
      question: "What must space planning address legally?",
      options: [
        "Only management preferences",
        "Accessibility requirements for disabilities",
        "Only current staff needs",
        "Only aesthetic trends"
      ],
      correctAnswer: 1,
      explanation: "From Module 4: Legal requirements mandate accessible design for diverse abilities.",
      module: 4
    },
    {
      id: 20,
      question: "What protects critical equipment during outages?",
      options: [
        "Only surge protectors",
        "Uninterruptible Power Supply (UPS) systems",
        "Only circuit breakers",
        "Only generators"
      ],
      correctAnswer: 1,
      explanation: "From Module 2: UPS provides immediate battery backup during brief power interruptions.",
      module: 2
    },
    {
      id: 21,
      question: "What focuses on maintaining system function?",
      options: [
        "Only component repair",
        "Reliability-Centered Maintenance (RCM)",
        "Only preventive scheduling",
        "Only corrective actions"
      ],
      correctAnswer: 1,
      explanation: "From Module 3: RCM emphasizes preserving operational capability rather than just component condition.",
      module: 3
    },
    {
      id: 22,
      question: "What reserves workspaces as needed?",
      options: [
        "Traditional assignment",
        "Hoteling strategy",
        "Only first-come basis",
        "Only management allocation"
      ],
      correctAnswer: 1,
      explanation: "From Module 4: Hoteling allows reservation of workspace rather than permanent assignment.",
      module: 4
    },
    {
      id: 23,
      question: "What calculates financial benefits relative to costs?",
      options: [
        "Only cost tracking",
        "Return on Investment (ROI) analysis",
        "Only budget comparison",
        "Only expense recording"
      ],
      correctAnswer: 1,
      explanation: "From Module 5: ROI quantifies financial return relative to investment amount.",
      module: 5
    },
    {
      id: 24,
      question: "What transforms facilities with connected sensors?",
      options: [
        "Only manual processes",
        "Internet of Things (IoT) technology",
        "Only paper records",
        "Only verbal communication"
      ],
      correctAnswer: 1,
      explanation: "From Module 6: IoT connects physical devices to collect data and enable automation.",
      module: 6
    },
    {
      id: 25,
      question: "What involves ethical dilemmas?",
      options: [
        "Only routine decisions",
        "Contractor selection, budget allocations, regulatory interpretations",
        "Only cleaning schedules",
        "Only temperature settings"
      ],
      correctAnswer: 1,
      explanation: "From Module 1: Ethical challenges often arise in areas involving money and vendor relationships.",
      module: 1
    },
    {
      id: 26,
      question: "What prevents accidental equipment startup?",
      options: [
        "Only warning signs",
        "Lockout/tagout procedures",
        "Only supervision",
        "Only equipment design"
      ],
      correctAnswer: 1,
      explanation: "From Module 3: Lockout/tagout physically prevents energy release during maintenance.",
      module: 3
    },
    {
      id: 27,
      question: "What coordinates physical relocations?",
      options: [
        "Only furniture delivery",
        "Move management processes",
        "Only employee schedules",
        "Only building access"
      ],
      correctAnswer: 1,
      explanation: "From Module 4: Move management addresses all aspects of workspace changes.",
      module: 4
    },
    {
      id: 28,
      question: "What explains budget vs. actual differences?",
      options: [
        "Only budget reports",
        "Variance analysis",
        "Only financial statements",
        "Only expense receipts"
      ],
      correctAnswer: 1,
      explanation: "From Module 5: Variance analysis identifies reasons for deviations from planned budgets.",
      module: 5
    },
    {
      id: 29,
      question: "What involves setting environmental goals?",
      options: [
        "Only regulatory compliance",
        "Sustainability leadership",
        "Only cost reduction",
        "Only energy purchasing"
      ],
      correctAnswer: 1,
      explanation: "From Module 6: Sustainability leadership actively pursues environmental improvement.",
      module: 6
    },
    {
      id: 30,
      question: "What must egress pathways maintain?",
      options: [
        "Only cleanliness",
        "Clear and unobstructed access at all times",
        "Only good lighting",
        "Only proper signage"
      ],
      correctAnswer: 1,
      explanation: "From Module 2: Unobstructed exit paths are legally required for emergency evacuation.",
      module: 2
    },
    {
      id: 31,
      question: "What balances maintenance delivery decisions?",
      options: [
        "Only costs",
        "Control, cost, expertise, and risk factors",
        "Only convenience",
        "Only staff preferences"
      ],
      correctAnswer: 1,
      explanation: "From Module 3: Multiple factors influence in-house versus outsourced maintenance decisions.",
      module: 3
    },
    {
      id: 32,
      question: "What benefits all occupants in design?",
      options: [
        "Only specialized equipment",
        "Universal design principles",
        "Only accessible parking",
        "Only wheelchair ramps"
      ],
      correctAnswer: 1,
      explanation: "From Module 4: Universal design creates spaces more usable for everyone, not just disabilities.",
      module: 4
    },
    {
      id: 33,
      question: "What ties contractor compensation to results?",
      options: [
        "Fixed-price contracts",
        "Performance-based contracts",
        "Cost-plus contracts",
        "Time-and-materials contracts"
      ],
      correctAnswer: 1,
      explanation: "From Module 5: Performance-based contracts align incentives with desired outcomes.",
      module: 5
    },
    {
      id: 34,
      question: "What ensures operations continue during disruptions?",
      options: [
        "Only emergency response",
        "Business continuity planning",
        "Only insurance coverage",
        "Only backup generators"
      ],
      correctAnswer: 1,
      explanation: "From Module 6: Business continuity addresses maintaining critical functions during disruptions.",
      module: 6
    },
    {
      id: 35,
      question: "What do ISO standards provide?",
      options: [
        "Only cleaning procedures",
        "Framework for facilities management systems",
        "Only safety rules",
        "Only maintenance schedules"
      ],
      correctAnswer: 1,
      explanation: "From Module 1: ISO standards establish international frameworks for consistent practices.",
      module: 1
    },
    {
      id: 36,
      question: "What does predictive maintenance use?",
      options: [
        "Only time schedules",
        "Condition monitoring techniques",
        "Only manufacturer recommendations",
        "Only failure history"
      ],
      correctAnswer: 1,
      explanation: "From Module 3: Condition monitoring determines actual equipment need for maintenance.",
      module: 3
    },
    {
      id: 37,
      question: "What indicates space inefficiency?",
      options: [
        "High utilization rates",
        "Utilization rates below 60%",
        "Equal male/female ratio",
        "Modern furniture"
      ],
      correctAnswer: 1,
      explanation: "From Module 4: Low utilization suggests space is frequently unoccupied, representing waste.",
      module: 4
    },
    {
      id: 38,
      question: "What may increase property value?",
      options: [
        "Only cosmetic upgrades",
        "Green building certification",
        "Only new furniture",
        "Only paint colors"
      ],
      correctAnswer: 1,
      explanation: "From Module 5: Certifications like LEED can enhance property marketability and value.",
      module: 5
    },
    {
      id: 39,
      question: "What validates technology before deployment?",
      options: [
        "Only vendor promises",
        "Pilot testing in controlled environments",
        "Only theoretical analysis",
        "Only competitor copying"
      ],
      correctAnswer: 1,
      explanation: "From Module 6: Pilots provide real-world testing to validate benefits before major investment.",
      module: 6
    },
    {
      id: 40,
      question: "What addresses climate change impacts?",
      options: [
        "Only ignoring changes",
        "Resilience planning and sustainable practices",
        "Only reactive repairs",
        "Only insurance claims"
      ],
      correctAnswer: 1,
      explanation: "From Module 6: Proactive planning prepares facilities for climate-related challenges.",
      module: 6
    }
  ]
};
