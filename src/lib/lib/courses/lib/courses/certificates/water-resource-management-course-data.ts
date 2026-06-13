// Water Resource Management (Diploma) - Complete Course Data
export const waterResourceManagementDiploma = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "water-resource-management-diploma",
  title: "Water Resource Management (Diploma)",
  description: "Advanced course in sustainable water resource management. Learn integrated water management strategies, policy frameworks, and technical solutions for water security in various contexts.",
  duration: "10 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  prerequisite: "Irrigation Systems (Certificate) or equivalent knowledge",
  icon: "🌊",
  badge: "Diploma",
  
  // 2. MODULE ARCHITECTURE (6 Advanced Modules)
  modules: [
    {
      id: 1,
      title: "Integrated Water Resources Management (IWRM)",
      completed: false,
      content: `
## Holistic Approach to Water Management

Integrated Water Resources Management (IWRM) is a process that promotes coordinated development and management of water, land, and related resources to maximize economic and social welfare without compromising ecosystem sustainability.

### IWRM Principles

**Equitable Access**: Ensuring fair distribution of water resources among different users and sectors.

**Economic Efficiency**: Using water resources to generate maximum value and benefit.

**Environmental Sustainability**: Protecting water resources and associated ecosystems for future generations.

**Stakeholder Participation**: Involving all affected parties in water management decisions.

### The Water-Energy-Food Nexus

Understanding interconnected relationships:

**Water for Energy**: Hydropower generation, cooling for thermal plants, fuel production.

**Energy for Water**: Pumping, treatment, distribution of water.

**Water for Food**: Irrigation for agriculture, livestock watering.

**Food Production Impacts**: Agricultural runoff affecting water quality.

**Trade-offs and Synergies**: Managing competing demands and finding win-win solutions.

### Watershed Management Approach

**Watershed as Management Unit**: Managing water resources within natural hydrological boundaries.

**Upstream-Downstream Relationships**: Recognizing impacts of upstream activities on downstream users.

**Riparian Zones Management**: Protecting stream banks and adjacent lands.

**Non-point Source Pollution Control**: Addressing diffuse pollution from agricultural and urban runoff.

**Ecosystem Services Protection**: Maintaining natural water purification, flood control, and habitat functions.

### IWRM Implementation Framework

**Policy Development**: Creating enabling policies and legal frameworks.

**Institutional Arrangements**: Establishing organizations and governance structures.

**Management Instruments**: Tools for allocation, monitoring, and enforcement.

**Capacity Building**: Developing skills and knowledge for effective management.

**Financing Mechanisms**: Ensuring sustainable funding for water management.
`,
      quiz: [
        {
          id: 1,
          question: "What promotes coordinated water, land, and resource management?",
          options: ["Single-sector approach", "IWRM", "Random management", "No management"],
          correctAnswer: 1,
          explanation: "IWRM promotes coordinated development and management of water, land, and related resources."
        },
        {
          id: 2,
          question: "What ensures fair water distribution?",
          options: ["Economic efficiency", "Equitable access", "Environmental focus only", "Technical solutions only"],
          correctAnswer: 1,
          explanation: "Equitable access ensures fair distribution of water among different users and sectors."
        },
        {
          id: 3,
          question: "What maximizes value from water resources?",
          options: ["Equity", "Economic efficiency", "Environment only", "Technology only"],
          correctAnswer: 1,
          explanation: "Economic efficiency focuses on generating maximum value from water resource use."
        },
        {
          id: 4,
          question: "What protects resources for future generations?",
          options: ["Current use only", "Environmental sustainability", "Economic growth only", "Technical development"],
          correctAnswer: 1,
          explanation: "Environmental sustainability protects water resources and ecosystems for future needs."
        },
        {
          id: 5,
          question: "What involves all affected parties?",
          options: ["Expert decisions only", "Stakeholder participation", "Government only", "Private sector only"],
          correctAnswer: 1,
          explanation: "Stakeholder participation involves all affected parties in water management decisions."
        },
        {
          id: 6,
          question: "What connects water, energy, and food systems?",
          options: ["Separate management", "Nexus approach", "Single focus", "No connection"],
          correctAnswer: 1,
          explanation: "The water-energy-food nexus recognizes interconnected relationships between these systems."
        },
        {
          id: 7,
          question: "What uses water for power generation?",
          options: ["Food production", "Hydropower", "Only domestic use", "No connection"],
          correctAnswer: 1,
          explanation: "Hydropower and thermal plant cooling represent water use for energy production."
        },
        {
          id: 8,
          question: "What needs energy for water movement?",
          options: ["Natural flow", "Pumping and treatment", "Rainfall only", "No energy needed"],
          correctAnswer: 1,
          explanation: "Energy is required for pumping, treating, and distributing water in managed systems."
        },
        {
          id: 9,
          question: "What manages resources within natural boundaries?",
          options: ["Political boundaries", "Watershed approach", "Random areas", "Small plots only"],
          correctAnswer: 1,
          explanation: "Watershed management uses natural hydrological boundaries as management units."
        },
        {
          id: 10,
          question: "What recognizes upstream-downstream impacts?",
          options: ["Isolated management", "Integrated relationships", "No impacts", "Equal everywhere"],
          correctAnswer: 1,
          explanation: "Watershed management recognizes how upstream activities affect downstream users."
        },
        {
          id: 11,
          question: "What protects stream banks and adjacent lands?",
          options: ["Urban development", "Riparian zones management", "Agriculture expansion", "Industrial use"],
          correctAnswer: 1,
          explanation: "Riparian zones management protects stream banks and adjacent ecosystems."
        },
        {
          id: 12,
          question: "What addresses diffuse pollution?",
          options: ["Point source control", "Non-point source control", "No pollution control", "Only industry"],
          correctAnswer: 1,
          explanation: "Non-point source pollution control addresses diffuse runoff from agriculture and urban areas."
        },
        {
          id: 13,
          question: "What maintains natural water purification?",
          options: ["Treatment plants only", "Ecosystem services protection", "No protection", "Chemical treatment"],
          correctAnswer: 1,
          explanation: "Ecosystem services protection maintains natural functions like water purification."
        },
        {
          id: 14,
          question: "What creates enabling frameworks?",
          options: ["Technical work only", "Policy development", "No frameworks", "Only projects"],
          correctAnswer: 1,
          explanation: "Policy development creates legal and regulatory frameworks for water management."
        },
        {
          id: 15,
          question: "What establishes governance structures?",
          options: ["Random arrangements", "Institutional arrangements", "No governance", "Only individuals"],
          correctAnswer: 1,
          explanation: "Institutional arrangements establish organizations and governance for water management."
        },
        {
          id: 16,
          question: "What are tools for allocation and monitoring?",
          options: ["Only laws", "Management instruments", "No tools", "Only reports"],
          correctAnswer: 1,
          explanation: "Management instruments include tools for water allocation, monitoring, and enforcement."
        },
        {
          id: 17,
          question: "What develops skills and knowledge?",
          options: ["Only technology", "Capacity building", "No development", "Only education"],
          correctAnswer: 1,
          explanation: "Capacity building develops human resources and knowledge for effective management."
        },
        {
          id: 18,
          question: "What ensures sustainable funding?",
          options: ["Donor funding only", "Financing mechanisms", "No funding needed", "Only government"],
          correctAnswer: 1,
          explanation: "Financing mechanisms ensure sustainable funding for water management activities."
        },
        {
          id: 19,
          question: "What balances competing demands?",
          options: ["Ignore conflicts", "Trade-off management", "Choose one only", "No balance"],
          correctAnswer: 1,
          explanation: "IWRM involves managing trade-offs between competing water demands."
        },
        {
          id: 20,
          question: "What is the ultimate IWRM goal?",
          options: ["Maximize single use", "Sustainable development", "Only economic growth", "Technical perfection"],
          correctAnswer: 1,
          explanation: "IWRM aims for sustainable development balancing social, economic, and environmental needs."
        }
      ]
    },
    {
      id: 2,
      title: "Water Policy and Governance",
      completed: false,
      content: `
## Frameworks for Water Management

Effective water resource management requires appropriate policies, laws, and governance structures that balance competing demands and ensure sustainable use.

### Water Policy Development

**National Water Policies**: Comprehensive frameworks guiding water management at country level.

**Sectoral Policies**: Water-related policies in agriculture, energy, environment, and urban development.

**International Water Agreements**: Treaties and agreements for transboundary water management.

**Policy Integration**: Ensuring water considerations are integrated into all relevant sector policies.

**Policy Implementation Strategies**: Plans for putting policies into practice.

### Water Governance Models

**Centralized Governance**: National government control over water resources.

**Decentralized Governance**: Local authorities managing water resources.

**River Basin Organizations**: Management by river basin authorities.

**Public-Private Partnerships**: Collaboration between government and private sector.

**Community-Based Management**: Local communities managing their water resources.

### Legal Frameworks

**Water Rights Systems**: Legal frameworks defining who can use water and how.

**Permitting and Licensing**: Systems for controlling water abstraction and use.

**Pollution Control Regulations**: Laws limiting water pollution and setting quality standards.

**Water Allocation Mechanisms**: Methods for distributing water among competing users.

**Dispute Resolution Mechanisms**: Processes for resolving water conflicts.

### Institutional Arrangements

**Water Ministries/Departments**: Government bodies responsible for water management.

**Regulatory Agencies**: Independent bodies overseeing water sector regulation.

**Water User Associations**: Organizations representing water users' interests.

**Technical Support Institutions**: Organizations providing expertise and support.

**Monitoring and Evaluation Systems**: Structures for tracking implementation and outcomes.

### Implementation Challenges

**Policy-Implementation Gap**: Difference between policy intent and actual implementation.

**Capacity Limitations**: Lack of skilled personnel and resources for implementation.

**Political Interference**: Water decisions influenced by political considerations.

**Corruption Risks**: Misuse of power for personal gain in water management.

**Financing Constraints**: Insufficient funding for water management activities.
`,
      quiz: [
        {
          id: 1,
          question: "What guides national water management?",
          options: ["Random decisions", "National water policies", "Only technical reports", "International only"],
          correctAnswer: 1,
          explanation: "National water policies provide comprehensive frameworks for water management at country level."
        },
        {
          id: 2,
          question: "What manages transboundary waters?",
          options: ["National only", "International agreements", "No management", "Private companies"],
          correctAnswer: 1,
          explanation: "International water agreements manage shared water resources across borders."
        },
        {
          id: 3,
          question: "What ensures water in sector policies?",
          options: ["Policy integration", "Separate policies", "Ignore water", "Only environment"],
          correctAnswer: 0,
          explanation: "Policy integration ensures water considerations are included in all relevant sector policies."
        },
        {
          id: 4,
          question: "What puts policies into practice?",
          options: ["Only writing", "Implementation strategies", "No action", "Only planning"],
          correctAnswer: 1,
          explanation: "Policy implementation strategies are plans for operationalizing policies."
        },
        {
          id: 5,
          question: "What involves national government control?",
          options: ["Decentralized", "Centralized governance", "Community only", "Private only"],
          correctAnswer: 1,
          explanation: "Centralized governance involves national government control over water resources."
        },
        {
          id: 6,
          question: "What involves local authority management?",
          options: ["Centralized", "Decentralized governance", "International", "No management"],
          correctAnswer: 1,
          explanation: "Decentralized governance involves local authorities managing water resources."
        },
        {
          id: 7,
          question: "What manages by river basin?",
          options: ["Political units", "River basin organizations", "Random areas", "Small communities"],
          correctAnswer: 1,
          explanation: "River basin organizations manage water resources within natural hydrological boundaries."
        },
        {
          id: 8,
          question: "What involves government-private collaboration?",
          options: ["Public only", "Private only", "Public-private partnerships", "No collaboration"],
          correctAnswer: 2,
          explanation: "Public-private partnerships involve collaboration between government and private sector."
        },
        {
          id: 9,
          question: "What defines who can use water?",
          options: ["Custom only", "Water rights systems", "First come basis", "No definition"],
          correctAnswer: 1,
          explanation: "Water rights systems legally define who can use water and under what conditions."
        },
        {
          id: 10,
          question: "What controls water abstraction?",
          options: ["Free for all", "Permitting and licensing", "No control", "Only large users"],
          correctAnswer: 1,
          explanation: "Permitting and licensing systems control water abstraction and use."
        },
        {
          id: 11,
          question: "What sets water quality standards?",
          options: ["No standards", "Pollution control regulations", "Users decide", "Industry sets"],
          correctAnswer: 1,
          explanation: "Pollution control regulations set water quality standards and limit pollution."
        },
        {
          id: 12,
          question: "What distributes water among users?",
          options: ["Random distribution", "Water allocation mechanisms", "Strongest gets most", "No distribution"],
          correctAnswer: 1,
          explanation: "Water allocation mechanisms distribute water among competing users."
        },
        {
          id: 13,
          question: "What resolves water conflicts?",
          options: ["Fighting", "Dispute resolution mechanisms", "Ignore conflicts", "Only courts"],
          correctAnswer: 1,
          explanation: "Dispute resolution mechanisms provide processes for resolving water conflicts."
        },
        {
          id: 14,
          question: "What are government water bodies?",
          options: ["Only communities", "Water ministries/departments", "No institutions", "Only private"],
          correctAnswer: 1,
          explanation: "Water ministries or departments are government bodies responsible for water management."
        },
        {
          id: 15,
          question: "What oversees water sector regulation?",
          options: ["Users regulate", "Regulatory agencies", "No regulation", "International only"],
          correctAnswer: 1,
          explanation: "Regulatory agencies independently oversee water sector regulation."
        },
        {
          id: 16,
          question: "What represents water users?",
          options: ["Government only", "Water user associations", "No representation", "Only industry"],
          correctAnswer: 1,
          explanation: "Water user associations represent the interests of different water user groups."
        },
        {
          id: 17,
          question: "What provides expertise and support?",
          options: ["No support", "Technical support institutions", "Only government", "Only donors"],
          correctAnswer: 1,
          explanation: "Technical support institutions provide expertise and support for water management."
        },
        {
          id: 18,
          question: "What tracks implementation outcomes?",
          options: ["No tracking", "Monitoring and evaluation systems", "Only reports", "Guesswork"],
          correctAnswer: 1,
          explanation: "Monitoring and evaluation systems track policy implementation and outcomes."
        },
        {
          id: 19,
          question: "What is policy-implementation gap?",
          options: ["Perfect match", "Difference between intent and reality", "Same always", "No difference"],
          correctAnswer: 1,
          explanation: "Policy-implementation gap is the difference between policy intent and actual implementation."
        },
        {
          id: 20,
          question: "What is lack of skilled personnel?",
          options: ["Abundant capacity", "Capacity limitations", "No issue", "Only funding problem"],
          correctAnswer: 1,
          explanation: "Capacity limitations refer to lack of skilled personnel and resources for implementation."
        }
      ]
    },
    {
      id: 3,
      title: "Water Supply Systems and Infrastructure",
      completed: false,
      content: `
## Engineering and Management of Water Supply

Water supply systems encompass infrastructure for collection, treatment, storage, and distribution of water to meet various demands while ensuring quality and reliability.

### Water Supply Sources

**Surface Water Systems**: Rivers, lakes, reservoirs as water sources.

**Groundwater Systems**: Wells, springs, and aquifers as water sources.

**Rainwater Harvesting**: Collecting and storing rainwater for use.

**Desalination**: Removing salt from seawater or brackish water.

**Water Reuse and Recycling**: Treating and reusing wastewater.

### Water Treatment Processes

**Conventional Treatment**: Coagulation, flocculation, sedimentation, filtration, disinfection.

**Advanced Treatment**: Membrane filtration, activated carbon, advanced oxidation.

**Groundwater Treatment**: Aeration, filtration, disinfection for groundwater.

**Desalination Technologies**: Reverse osmosis, distillation, electrodialysis.

**Decentralized Treatment**: Small-scale treatment systems for local use.

### Storage and Distribution Systems

**Storage Reservoirs**: Surface reservoirs for raw and treated water storage.

**Water Towers**: Elevated storage for maintaining distribution pressure.

**Distribution Networks**: Pipe networks delivering water to users.

**Pumping Stations**: Facilities for moving water through the system.

**Service Connections**: Connections from main distribution lines to users.

### System Design Considerations

**Demand Forecasting**: Predicting future water demand based on population and development.

**Reliability Requirements**: Ensuring continuous water supply despite failures.

**Water Quality Standards**: Meeting drinking water and other use standards.

**Energy Efficiency**: Minimizing energy use in water supply operations.

**Climate Resilience**: Designing systems to withstand climate change impacts.

### Operation and Maintenance

**Routine Maintenance**: Regular inspection and maintenance of infrastructure.

**Emergency Response**: Procedures for responding to system failures.

**Water Quality Monitoring**: Continuous monitoring of water quality.

**Leak Detection and Repair**: Identifying and fixing water losses.

**Asset Management**: Systematic management of infrastructure assets over their lifecycle.

### Emerging Technologies

**Smart Water Networks**: Using sensors and data analytics for efficient management.

**Advanced Metering Infrastructure**: Smart meters for accurate measurement and monitoring.

**Real-time Monitoring Systems**: Continuous monitoring of system performance.

**Water-Efficient Technologies**: Technologies reducing water use in supply systems.

**Alternative Water Sources**: Developing new sources like atmospheric water generation.
`,
      quiz: [
        {
          id: 1,
          question: "What uses rivers and lakes as sources?",
          options: ["Groundwater only", "Surface water systems", "Rain only", "Reuse only"],
          correctAnswer: 1,
          explanation: "Surface water systems use rivers, lakes, and reservoirs as water sources."
        },
        {
          id: 2,
          question: "What uses wells and aquifers?",
          options: ["Surface water", "Groundwater systems", "Rainwater", "Desalination"],
          correctAnswer: 1,
          explanation: "Groundwater systems extract water from wells, springs, and aquifers."
        },
        {
          id: 3,
          question: "What collects and stores rainfall?",
          options: ["Groundwater", "Rainwater harvesting", "Surface water", "Desalination"],
          correctAnswer: 1,
          explanation: "Rainwater harvesting involves collecting and storing rainfall for later use."
        },
        {
          id: 4,
          question: "What removes salt from water?",
          options: ["Filtration only", "Desalination", "Storage", "Distribution"],
          correctAnswer: 1,
          explanation: "Desalination removes salt from seawater or brackish water to produce freshwater."
        },
        {
          id: 5,
          question: "What treats and reuses wastewater?",
          options: ["Disposal only", "Water reuse and recycling", "No treatment", "Only industry"],
          correctAnswer: 1,
          explanation: "Water reuse involves treating wastewater to appropriate standards for reuse."
        },
        {
          id: 6,
          question: "What is conventional treatment process?",
          options: ["Single step", "Coagulation to disinfection", "No treatment", "Only disinfection"],
          correctAnswer: 1,
          explanation: "Conventional treatment includes coagulation, flocculation, sedimentation, filtration, disinfection."
        },
        {
          id: 7,
          question: "What uses membranes for filtration?",
          options: ["Basic filtration", "Advanced treatment", "No treatment", "Only storage"],
          correctAnswer: 1,
          explanation: "Membrane filtration is an advanced treatment technology."
        },
        {
          id: 8,
          question: "What maintains distribution pressure?",
          options: ["Pumps only", "Water towers", "No pressure", "Gravity only"],
          correctAnswer: 1,
          explanation: "Water towers use elevation to maintain pressure in distribution systems."
        },
        {
          id: 9,
          question: "What delivers water to users?",
          options: ["Only sources", "Distribution networks", "No delivery", "Tankers only"],
          correctAnswer: 1,
          explanation: "Distribution networks are pipe systems delivering water to end users."
        },
        {
          id: 10,
          question: "What moves water through system?",
          options: ["Gravity only", "Pumping stations", "No movement", "Manual carrying"],
          correctAnswer: 1,
          explanation: "Pumping stations provide energy to move water through supply systems."
        },
        {
          id: 11,
          question: "What predicts future water demand?",
          options: ["Guesswork", "Demand forecasting", "No prediction", "Current use only"],
          correctAnswer: 1,
          explanation: "Demand forecasting predicts future water needs based on various factors."
        },
        {
          id: 12,
          question: "What ensures continuous supply?",
          options: ["No assurance", "Reliability requirements", "Random supply", "Only storage"],
          correctAnswer: 1,
          explanation: "Reliability requirements ensure water supply continues despite component failures."
        },
        {
          id: 13,
          question: "What meets drinking standards?",
          options: ["Any water", "Water quality standards", "No standards", "Users decide"],
          correctAnswer: 1,
          explanation: "Water quality standards define requirements for different water uses."
        },
        {
          id: 14,
          question: "What minimizes energy use?",
          options: ["Maximum energy", "Energy efficiency", "No concern", "Only cost"],
          correctAnswer: 1,
          explanation: "Energy efficiency focuses on minimizing energy consumption in water supply."
        },
        {
          id: 15,
          question: "What withstands climate impacts?",
          options: ["Fragile design", "Climate resilience", "No consideration", "Only current"],
          correctAnswer: 1,
          explanation: "Climate resilience designs systems to withstand climate change impacts."
        },
        {
          id: 16,
          question: "What involves regular inspections?",
          options: ["No maintenance", "Routine maintenance", "Only when broken", "Ignore problems"],
          correctAnswer: 1,
          explanation: "Routine maintenance includes regular inspection and upkeep of infrastructure."
        },
        {
          id: 17,
          question: "What responds to system failures?",
          options: ["Ignore failures", "Emergency response", "No response", "Only repair"],
          correctAnswer: 1,
          explanation: "Emergency response procedures address system failures and emergencies."
        },
        {
          id: 18,
          question: "What monitors water continuously?",
          options: ["No monitoring", "Water quality monitoring", "Only initial", "Random checks"],
          correctAnswer: 1,
          explanation: "Water quality monitoring continuously checks water quality parameters."
        },
        {
          id: 19,
          question: "What identifies water losses?",
          options: ["Ignore losses", "Leak detection", "No detection", "Only visible"],
          correctAnswer: 1,
          explanation: "Leak detection systems identify water losses in distribution networks."
        },
        {
          id: 20,
          question: "What manages infrastructure lifecycle?",
          options: ["No management", "Asset management", "Only building", "Only repair"],
          correctAnswer: 1,
          explanation: "Asset management systematically manages infrastructure over its lifecycle."
        }
      ]
    },
    {
      id: 4,
      title: "Water Conservation and Demand Management",
      completed: false,
      content: `
## Managing Water Demand and Reducing Waste

Water conservation and demand management focus on reducing water use through efficiency improvements, behavioral changes, and technological innovations while maintaining service quality.

### Demand Management Strategies

**Water Pricing**: Using tariffs to encourage conservation and efficient use.

**Water Use Restrictions**: Regulatory limits on water use during scarcity.

**Efficiency Standards**: Requirements for water-efficient fixtures and appliances.

**Public Education**: Campaigns to raise awareness and change water use behavior.

**Leak Reduction Programs**: Systematic efforts to detect and repair leaks.

### Agricultural Water Conservation

**Efficient Irrigation**: Drip, sprinkler, and other efficient irrigation methods.

**Soil Moisture Monitoring**: Using sensors to optimize irrigation timing.

**Crop Selection**: Choosing crops appropriate for local water availability.

**Water Scheduling**: Optimizing irrigation schedules based on crop needs and weather.

**Field Management Practices**: Conservation tillage, mulching, and other soil water conservation methods.

### Urban Water Conservation

**Water-Efficient Fixtures**: Low-flow toilets, showerheads, and faucets.

**Landscape Management**: Efficient landscape irrigation and drought-tolerant plants.

**Industrial Water Reuse**: Recycling water within industrial processes.

**Commercial Conservation**: Water efficiency in businesses and institutions.

**Rainwater Harvesting**: Collecting rainwater for non-potable uses.

### Industrial Water Management

**Process Optimization**: Redesigning processes to use less water.

**Cooling Water Management**: Efficient cooling water systems and reuse.

**Water Audits**: Systematic assessment of water use and savings opportunities.

**Zero Liquid Discharge**: Systems that eliminate wastewater discharge.

**Corporate Water Stewardship**: Companies managing water sustainably in operations and supply chains.

### Economic Instruments

**Water Pricing Structures**: Block tariffs, seasonal pricing, scarcity pricing.

**Water Markets**: Trading water rights or allocations among users.

**Subsidies for Efficiency**: Financial incentives for water-saving technologies.

**Penalties for Waste**: Charges for excessive water use or pollution.

**Water Footprint Accounting**: Measuring and managing water use throughout supply chains.

### Behavioral Approaches

**Social Norms**: Using social influence to encourage conservation.

**Feedback Systems**: Providing users with information about their water use.

**Goal Setting**: Encouraging users to set and achieve conservation goals.

**Community Programs**: Neighborhood-level conservation initiatives.

**Education in Schools**: Teaching water conservation to young people.
`,
      quiz: [
        {
          id: 1,
          question: "What uses tariffs to encourage conservation?",
          options: ["Free water", "Water pricing", "No pricing", "Only subsidies"],
          correctAnswer: 1,
          explanation: "Water pricing uses tariffs to signal scarcity and encourage efficient water use."
        },
        {
          id: 2,
          question: "What limits water use during scarcity?",
          options: ["No limits", "Water use restrictions", "Increase use", "Ignore scarcity"],
          correctAnswer: 1,
          explanation: "Water use restrictions impose limits on water use during periods of scarcity."
        },
        {
          id: 3,
          question: "What requires water-efficient fixtures?",
          options: ["No requirements", "Efficiency standards", "Any fixtures", "Only price"],
          correctAnswer: 1,
          explanation: "Efficiency standards mandate water-efficient fixtures and appliances."
        },
        {
          id: 4,
          question: "What raises conservation awareness?",
          options: ["No information", "Public education", "Only technical", "Ignore public"],
          correctAnswer: 1,
          explanation: "Public education campaigns raise awareness about water conservation."
        },
        {
          id: 5,
          question: "What detects and repairs system leaks?",
          options: ["Ignore leaks", "Leak reduction programs", "Only big leaks", "No action"],
          correctAnswer: 1,
          explanation: "Leak reduction programs systematically find and fix water distribution leaks."
        },
        {
          id: 6,
          question: "What is most efficient irrigation method?",
          options: ["Flood irrigation", "Drip irrigation", "All equal", "Manual only"],
          correctAnswer: 1,
          explanation: "Drip irrigation is typically the most water-efficient irrigation method."
        },
        {
          id: 7,
          question: "What optimizes irrigation timing?",
          options: ["Fixed schedule", "Soil moisture monitoring", "Guesswork", "Always water"],
          correctAnswer: 1,
          explanation: "Soil moisture monitoring uses sensors to determine optimal irrigation timing."
        },
        {
          id: 8,
          question: "What chooses appropriate crops?",
          options: ["Any crops", "Crop selection", "Only high-value", "Ignore water"],
          correctAnswer: 1,
          explanation: "Crop selection involves choosing crops suited to local water availability."
        },
        {
          id: 9,
          question: "What are low-flow toilets and showerheads?",
          options: ["High-flow", "Water-efficient fixtures", "Standard only", "No fixtures"],
          correctAnswer: 1,
          explanation: "Water-efficient fixtures like low-flow toilets reduce water use in buildings."
        },
        {
          id: 10,
          question: "What uses drought-tolerant plants?",
          options: ["Thirsty plants", "Landscape management", "No plants", "Only grass"],
          correctAnswer: 1,
          explanation: "Landscape management using drought-tolerant plants reduces outdoor water use."
        },
        {
          id: 11,
          question: "What recycles industrial process water?",
          options: ["Single use", "Industrial water reuse", "No reuse", "Discharge only"],
          correctAnswer: 1,
          explanation: "Industrial water reuse involves recycling water within industrial processes."
        },
        {
          id: 12,
          question: "What assesses water use opportunities?",
          options: ["No assessment", "Water audits", "Guess savings", "Only measure use"],
          correctAnswer: 1,
          explanation: "Water audits systematically assess water use and identify savings opportunities."
        },
        {
          id: 13,
          question: "What eliminates wastewater discharge?",
          options: ["Maximum discharge", "Zero liquid discharge", "Some discharge", "No treatment"],
          correctAnswer: 1,
          explanation: "Zero liquid discharge systems treat and recycle all wastewater."
        },
        {
          id: 14,
          question: "What are block tariffs?",
          options: ["Single price", "Water pricing structures", "No pricing", "Free water"],
          correctAnswer: 1,
          explanation: "Block tariffs charge different rates for different levels of water use."
        },
        {
          id: 15,
          question: "What trades water rights?",
          options: ["Fixed rights", "Water markets", "No trading", "Government only"],
          correctAnswer: 1,
          explanation: "Water markets allow trading of water rights or allocations among users."
        },
        {
          id: 16,
          question: "What incentives for water-saving tech?",
          options: ["No incentives", "Subsidies for efficiency", "Penalties only", "Ignore technology"],
          correctAnswer: 1,
          explanation: "Subsidies provide financial incentives for adopting water-saving technologies."
        },
        {
          id: 17,
          question: "What charges for excessive use?",
          options: ["No charges", "Penalties for waste", "Rewards for waste", "Ignore waste"],
          correctAnswer: 1,
          explanation: "Penalties for waste impose charges for excessive water use or pollution."
        },
        {
          id: 18,
          question: "What measures supply chain water use?",
          options: ["No measurement", "Water footprint accounting", "Only direct use", "Ignore supply"],
          correctAnswer: 1,
          explanation: "Water footprint accounting measures water use throughout supply chains."
        },
        {
          id: 19,
          question: "What uses social influence for conservation?",
          options: ["Ignore society", "Social norms", "Only rules", "No influence"],
          correctAnswer: 1,
          explanation: "Social norms approaches use peer influence to encourage conservation behavior."
        },
        {
          id: 20,
          question: "What provides water use information?",
          options: ["No information", "Feedback systems", "Guess use", "Only bills"],
          correctAnswer: 1,
          explanation: "Feedback systems provide users with information about their water consumption."
        }
      ]
    },
    {
      id: 5,
      title: "Climate Change and Water Security",
      completed: false,
      content: `
## Adapting Water Management to Climate Change

Climate change poses significant challenges to water security through altered precipitation patterns, increased variability, and more extreme weather events, requiring adaptive management approaches.

### Climate Impacts on Water Resources

**Precipitation Changes**: Altered rainfall patterns, intensity, and distribution.

**Temperature Increases**: Higher evaporation rates and snowpack changes.

**Extreme Events**: More frequent and intense floods and droughts.

**Sea Level Rise**: Saltwater intrusion in coastal aquifers and estuaries.

**Glacier Retreat**: Reduced glacial meltwater in glacier-fed river systems.

### Vulnerability Assessment

**Water System Vulnerabilities**: Identifying climate risks to water infrastructure and management.

**Sectoral Vulnerabilities**: Assessing climate impacts on water-dependent sectors.

**Social Vulnerabilities**: Identifying groups most vulnerable to water-related climate impacts.

**Economic Vulnerabilities**: Assessing economic consequences of climate impacts on water.

**Institutional Vulnerabilities**: Evaluating capacity to respond to climate challenges.

### Adaptation Strategies

**Infrastructure Adaptation**: Modifying water infrastructure for climate resilience.

**Management Adaptation**: Adjusting water management practices and policies.

**Ecosystem-Based Adaptation**: Using natural ecosystems to buffer climate impacts.

**Diversification Strategies**: Developing multiple water sources and management options.

**Early Warning Systems**: Systems for predicting and responding to climate extremes.

### Drought Management

**Drought Monitoring**: Systems for detecting and tracking drought conditions.

**Drought Planning**: Preparedness plans for different drought severity levels.

**Drought Response**: Actions taken during drought to minimize impacts.

**Water Allocation During Drought**: Prioritizing water uses during scarcity.

**Drought Recovery**: Measures to recover from drought impacts.

### Flood Management

**Flood Forecasting**: Predicting flood events and potential impacts.

**Structural Measures**: Dams, levees, and other flood control structures.

**Non-structural Measures**: Land use planning, floodplain management, insurance.

**Early Warning Systems**: Alerting systems for impending flood events.

**Post-flood Recovery**: Rehabilitation and reconstruction after floods.

### Climate-Resilient Water Management

**Flexible Allocation Systems**: Water allocation that can adapt to changing conditions.

**Robust Infrastructure Design**: Designing infrastructure for uncertain future conditions.

**Integrated Management**: Coordinating water management across sectors and scales.

**Knowledge Management**: Building and sharing knowledge about climate impacts and responses.

**Stakeholder Engagement**: Involving affected parties in climate adaptation planning.
`,
      quiz: [
        {
          id: 1,
          question: "What alters rainfall patterns?",
          options: ["No change", "Precipitation changes", "Same always", "Predictable"],
          correctAnswer: 1,
          explanation: "Climate change alters precipitation patterns, intensity, and distribution."
        },
        {
          id: 2,
          question: "What causes higher evaporation?",
          options: ["Cooling", "Temperature increases", "No change", "Less evaporation"],
          correctAnswer: 1,
          explanation: "Higher temperatures increase evaporation rates from water bodies and soil."
        },
        {
          id: 3,
          question: "What includes more floods and droughts?",
          options: ["Fewer extremes", "Extreme events", "No extremes", "Stable weather"],
          correctAnswer: 1,
          explanation: "Climate change increases frequency and intensity of extreme weather events."
        },
        {
          id: 4,
          question: "What causes saltwater intrusion?",
          options: ["Freshwater increase", "Sea level rise", "No change", "Lower sea"],
          correctAnswer: 1,
          explanation: "Sea level rise can cause saltwater intrusion into coastal freshwater aquifers."
        },
        {
          id: 5,
          question: "What reduces glacial meltwater?",
          options: ["Glacier growth", "Glacier retreat", "No change", "More glaciers"],
          correctAnswer: 1,
          explanation: "Glacier retreat reduces meltwater contributions to river systems."
        },
        {
          id: 6,
          question: "What identifies climate risks to water?",
          options: ["Ignore risks", "Vulnerability assessment", "No assessment", "Only benefits"],
          correctAnswer: 1,
          explanation: "Vulnerability assessment identifies climate risks to water systems and management."
        },
        {
          id: 7,
          question: "What assesses sector impacts?",
          options: ["Ignore sectors", "Sectoral vulnerabilities", "No assessment", "Only water"],
          correctAnswer: 1,
          explanation: "Sectoral vulnerability assessment evaluates climate impacts on water-dependent sectors."
        },
        {
          id: 8,
          question: "What identifies most affected groups?",
          options: ["All equal", "Social vulnerabilities", "No groups", "Only rich"],
          correctAnswer: 1,
          explanation: "Social vulnerability assessment identifies groups most affected by water-climate impacts."
        },
        {
          id: 9,
          question: "What modifies infrastructure for resilience?",
          options: ["Same design", "Infrastructure adaptation", "No changes", "Only new"],
          correctAnswer: 1,
          explanation: "Infrastructure adaptation modifies water infrastructure for climate resilience."
        },
        {
          id: 10,
          question: "What adjusts management practices?",
          options: ["Fixed practices", "Management adaptation", "No adjustment", "Only rules"],
          correctAnswer: 1,
          explanation: "Management adaptation adjusts water management practices for climate change."
        },
        {
          id: 11,
          question: "What uses ecosystems for buffering?",
          options: ["Ignore ecosystems", "Ecosystem-based adaptation", "Only engineering", "No nature"],
          correctAnswer: 1,
          explanation: "Ecosystem-based adaptation uses natural systems to buffer climate impacts."
        },
        {
          id: 12,
          question: "What develops multiple water sources?",
          options: ["Single source", "Diversification strategies", "No options", "Only one"],
          correctAnswer: 1,
          explanation: "Diversification strategies develop multiple water sources and management options."
        },
        {
          id: 13,
          question: "What predicts and responds to extremes?",
          options: ["No prediction", "Early warning systems", "Surprise only", "No response"],
          correctAnswer: 1,
          explanation: "Early warning systems predict climate extremes and trigger responses."
        },
        {
          id: 14,
          question: "What tracks drought conditions?",
          options: ["Ignore drought", "Drought monitoring", "No tracking", "Only when severe"],
          correctAnswer: 1,
          explanation: "Drought monitoring systems detect and track drought development and severity."
        },
        {
          id: 15,
          question: "What prepares for drought?",
          options: ["No preparation", "Drought planning", "Only response", "Ignore drought"],
          correctAnswer: 1,
          explanation: "Drought planning develops preparedness measures for different drought scenarios."
        },
        {
          id: 16,
          question: "What prioritizes water during scarcity?",
          options: ["No priority", "Water allocation during drought", "Equal for all", "First come"],
          correctAnswer: 1,
          explanation: "Drought water allocation prioritizes essential uses during water scarcity."
        },
        {
          id: 17,
          question: "What predicts flood events?",
          options: ["No prediction", "Flood forecasting", "Surprise floods", "Ignore floods"],
          correctAnswer: 1,
          explanation: "Flood forecasting predicts flood events based on hydrological and meteorological data."
        },
        {
          id: 18,
          question: "What are dams and levees?",
          options: ["No structures", "Structural flood measures", "Only planning", "Ignore floods"],
          correctAnswer: 1,
          explanation: "Structural measures like dams and levees physically control flood waters."
        },
        {
          id: 19,
          question: "What is land use planning for floods?",
          options: ["No planning", "Non-structural measures", "Only structures", "Ignore planning"],
          correctAnswer: 1,
          explanation: "Non-structural measures like land use planning manage flood risks without structures."
        },
        {
          id: 20,
          question: "What adapts to changing conditions?",
          options: ["Rigid systems", "Flexible allocation systems", "Fixed allocation", "No adaptation"],
          correctAnswer: 1,
          explanation: "Flexible water allocation systems can adapt to changing climate conditions."
        }
      ]
    },
    {
      id: 6,
      title: "Emerging Technologies in Water Management",
      completed: false,
      content: `
## Innovative Solutions for Water Challenges

New technologies are transforming water management through improved efficiency, monitoring, treatment, and decision-making capabilities, addressing traditional and emerging water challenges.

### Smart Water Technologies

**Sensor Networks**: Distributed sensors for real-time water quality and quantity monitoring.

**Internet of Things (IoT)**: Connected devices for comprehensive water system management.

**Advanced Metering Infrastructure**: Smart meters with two-way communication and data analytics.

**Real-time Control Systems**: Automated systems responding to real-time conditions.

**Data Analytics Platforms**: Software for analyzing water data and optimizing management.

### Water Treatment Innovations

**Advanced Oxidation Processes**: Highly effective treatment for emerging contaminants.

**Membrane Technologies**: Improved membranes for filtration and desalination.

**Biological Treatment Advances**: Enhanced biological processes for wastewater treatment.

**Decentralized Treatment Systems**: Small-scale, distributed treatment technologies.

**Energy Recovery Systems**: Technologies recovering energy from water treatment processes.

### Water Monitoring and Assessment

**Remote Sensing**: Satellite and aerial monitoring of water resources.

**Unmanned Aerial Vehicles (UAVs)**: Drones for water resource monitoring.

**Autonomous Water Samplers**: Automated devices for water quality sampling.

**Biosensors**: Biological-based sensors for contaminant detection.

**Citizen Science Tools**: Public participation in water monitoring.

### Data Management and Decision Support

**Geographic Information Systems (GIS)**: Spatial analysis and mapping of water resources.

**Hydrological Models**: Computer models simulating water movement and availability.

**Decision Support Systems**: Tools helping managers make informed decisions.

**Water Information Systems**: Integrated platforms for water data management.

**Predictive Analytics**: Using data to predict future water conditions and needs.

### Resource Recovery Technologies

**Nutrient Recovery**: Technologies recovering nutrients from wastewater.

**Energy from Wastewater**: Systems generating energy from wastewater treatment.

**Water Reuse Technologies**: Advanced treatment for water recycling and reuse.

**Resource-efficient Treatment**: Technologies minimizing resource use in treatment.

**Circular Economy Approaches**: Closing loops in water and resource use.

### Implementation Considerations

**Technology Assessment**: Evaluating technologies for suitability and effectiveness.

**Cost-Benefit Analysis**: Assessing economic viability of new technologies.

**Capacity Requirements**: Skills and knowledge needed for technology implementation.

**Integration Challenges**: Incorporating new technologies into existing systems.

**Scalability and Replicability**: Potential for scaling up and repeating successful implementations.

### Future Trends

**Digital Water Management**: Comprehensive digital transformation of water sector.

**Artificial Intelligence**: AI applications for water management optimization.

**Blockchain Applications**: Secure, transparent water transactions and data management.

**Nature-Based Solutions**: Innovative approaches using natural processes.

**Integrated Resource Recovery**: Simultaneous recovery of water, energy, and materials.
`,
      quiz: [
        {
          id: 1,
          question: "What enables real-time water monitoring?",
          options: ["Manual checks", "Sensor networks", "No monitoring", "Only samples"],
          correctAnswer: 1,
          explanation: "Sensor networks provide real-time monitoring of water quality and quantity."
        },
        {
          id: 2,
          question: "What connects water management devices?",
          options: ["Isolated devices", "Internet of Things", "No connection", "Manual only"],
          correctAnswer: 1,
          explanation: "IoT connects devices for comprehensive water system management."
        },
        {
          id: 3,
          question: "What are smart meters with analytics?",
          options: ["Basic meters", "Advanced metering infrastructure", "No meters", "Manual reading"],
          correctAnswer: 1,
          explanation: "Advanced metering infrastructure includes smart meters with data analytics capabilities."
        },
        {
          id: 4,
          question: "What responds to real-time conditions?",
          options: ["Fixed systems", "Real-time control systems", "No response", "Manual only"],
          correctAnswer: 1,
          explanation: "Real-time control systems automatically respond to current water system conditions."
        },
        {
          id: 5,
          question: "What analyzes water data?",
          options: ["No analysis", "Data analytics platforms", "Guesswork", "Simple sums"],
          correctAnswer: 1,
          explanation: "Data analytics platforms analyze water data for insights and optimization."
        },
        {
          id: 6,
          question: "What treats emerging contaminants?",
          options: ["Basic treatment", "Advanced oxidation", "No treatment", "Only settling"],
          correctAnswer: 1,
          explanation: "Advanced oxidation processes effectively treat emerging contaminants."
        },
        {
          id: 7,
          question: "What improves filtration and desalination?",
          options: ["Basic filters", "Membrane technologies", "No improvement", "Only chemicals"],
          correctAnswer: 1,
          explanation: "Advanced membrane technologies improve filtration and desalination efficiency."
        },
        {
          id: 8,
          question: "What are small-scale treatment systems?",
          options: ["Centralized only", "Decentralized treatment", "No treatment", "Large plants"],
          correctAnswer: 1,
          explanation: "Decentralized treatment systems provide local, small-scale water treatment."
        },
        {
          id: 9,
          question: "What monitors from satellites?",
          options: ["Ground only", "Remote sensing", "No monitoring", "Only local"],
          correctAnswer: 1,
          explanation: "Remote sensing uses satellites for large-scale water resource monitoring."
        },
        {
          id: 10,
          question: "What uses drones for monitoring?",
          options: ["No drones", "Unmanned Aerial Vehicles", "Only satellites", "Only ground"],
          correctAnswer: 1,
          explanation: "UAVs (drones) provide aerial monitoring of water resources."
        },
        {
          id: 11,
          question: "What are automated water samplers?",
          options: ["Manual only", "Autonomous samplers", "No sampling", "Random sampling"],
          correctAnswer: 1,
          explanation: "Autonomous water samplers automatically collect water quality samples."
        },
        {
          id: 12,
          question: "What maps water resources spatially?",
          options: ["No mapping", "Geographic Information Systems", "Only lists", "Simple maps"],
          correctAnswer: 1,
          explanation: "GIS provides spatial analysis and mapping of water resources and infrastructure."
        },
        {
          id: 13,
          question: "What simulates water movement?",
          options: ["Guesswork", "Hydrological models", "No simulation", "Only measurement"],
          correctAnswer: 1,
          explanation: "Hydrological models simulate water movement and availability in watersheds."
        },
        {
          id: 14,
          question: "What helps managers make decisions?",
          options: ["Guessing", "Decision support systems", "No help", "Only experience"],
          correctAnswer: 1,
          explanation: "Decision support systems provide information and analysis for water management decisions."
        },
        {
          id: 15,
          question: "What recovers nutrients from wastewater?",
          options: ["Waste only", "Nutrient recovery", "No recovery", "Only water"],
          correctAnswer: 1,
          explanation: "Nutrient recovery technologies extract valuable nutrients from wastewater."
        },
        {
          id: 16,
          question: "What generates energy from wastewater?",
          options: ["No energy", "Energy from wastewater", "Only consumes", "Ignore energy"],
          correctAnswer: 1,
          explanation: "Systems can generate energy from wastewater through various processes."
        },
        {
          id: 17,
          question: "What assesses technology suitability?",
          options: ["Adopt all", "Technology assessment", "No assessment", "Only newest"],
          correctAnswer: 1,
          explanation: "Technology assessment evaluates suitability and effectiveness of new technologies."
        },
        {
          id: 18,
          question: "What assesses economic viability?",
          options: ["Ignore costs", "Cost-benefit analysis", "Only benefits", "Only costs"],
          correctAnswer: 1,
          explanation: "Cost-benefit analysis assesses economic viability of water technologies."
        },
        {
          id: 19,
          question: "What transforms water sector digitally?",
          options: ["Analog only", "Digital water management", "No transformation", "Only manual"],
          correctAnswer: 1,
          explanation: "Digital water management involves comprehensive digital transformation of water sector."
        },
        {
          id: 20,
          question: "What uses natural processes innovatively?",
          options: ["Only engineering", "Nature-based solutions", "Ignore nature", "Only concrete"],
          correctAnswer: 1,
          explanation: "Nature-based solutions use natural processes for water management challenges."
        }
      ]
    }
  ],
  
  // FINAL EXAM (40 questions covering all modules)
  finalExam: {
    title: "Water Resource Management Diploma Final Exam",
    description: "Comprehensive examination covering all advanced topics in Water Resource Management Diploma",
    passingScore: 75,
    questions: [
      {
        id: 1,
        question: "What promotes coordinated water management?",
        options: ["Single sector", "IWRM", "Random", "No management"],
        correctAnswer: 1,
        explanation: "IWRM promotes coordinated development and management of water resources."
      },
      {
        id: 2,
        question: "What ensures fair water distribution?",
        options: ["Efficiency", "Equitable access", "Environment only", "Technical"],
        correctAnswer: 1,
        explanation: "Equitable access ensures fair distribution among different users."
      },
      {
        id: 3,
        question: "What maximizes water value?",
        options: ["Equity", "Economic efficiency", "Environment", "Technology"],
        correctAnswer: 1,
        explanation: "Economic efficiency focuses on maximizing value from water use."
      },
      {
        id: 4,
        question: "What connects water, energy, food?",
        options: ["Separate", "Nexus approach", "Single focus", "No connection"],
        correctAnswer: 1,
        explanation: "Water-energy-food nexus recognizes interconnected relationships."
      },
      {
        id: 5,
        question: "What manages within natural boundaries?",
        options: ["Political", "Watershed approach", "Random", "Small areas"],
        correctAnswer: 1,
        explanation: "Watershed management uses natural hydrological boundaries."
      },
      {
        id: 6,
        question: "What guides national water management?",
        options: ["Random", "National water policies", "Technical only", "International"],
        correctAnswer: 1,
        explanation: "National water policies provide comprehensive frameworks."
      },
      {
        id: 7,
        question: "What manages transboundary waters?",
        options: ["National only", "International agreements", "No management", "Private"],
        correctAnswer: 1,
        explanation: "International agreements manage shared water resources."
      },
      {
        id: 8,
        question: "What involves local authority management?",
        options: ["Centralized", "Decentralized governance", "International", "None"],
        correctAnswer: 1,
        explanation: "Decentralized governance involves local authorities."
      },
      {
        id: 9,
        question: "What defines water use rights?",
        options: ["Custom", "Water rights systems", "First come", "No definition"],
        correctAnswer: 1,
        explanation: "Water rights systems legally define water use."
      },
      {
        id: 10,
        question: "What uses rivers and lakes?",
        options: ["Groundwater", "Surface water systems", "Rain only", "Reuse"],
        correctAnswer: 1,
        explanation: "Surface water systems use rivers, lakes, reservoirs."
      },
      {
        id: 11,
        question: "What uses wells and aquifers?",
        options: ["Surface", "Groundwater systems", "Rainwater", "Desalination"],
        correctAnswer: 1,
        explanation: "Groundwater systems extract from wells and aquifers."
      },
      {
        id: 12,
        question: "What removes salt from water?",
        options: ["Filtration", "Desalination", "Storage", "Distribution"],
        correctAnswer: 1,
        explanation: "Desalination removes salt from seawater or brackish water."
      },
      {
        id: 13,
        question: "What maintains distribution pressure?",
        options: ["Pumps only", "Water towers", "No pressure", "Gravity"],
        correctAnswer: 1,
        explanation: "Water towers use elevation to maintain pressure."
      },
      {
        id: 14,
        question: "What ensures continuous supply?",
        options: ["No assurance", "Reliability requirements", "Random", "Storage"],
        correctAnswer: 1,
        explanation: "Reliability requirements ensure continuous water supply."
      },
      {
        id: 15,
        question: "What uses tariffs for conservation?",
        options: ["Free water", "Water pricing", "No pricing", "Subsidies"],
        correctAnswer: 1,
        explanation: "Water pricing uses tariffs to encourage conservation."
      },
      {
        id: 16,
        question: "What limits use during scarcity?",
        options: ["No limits", "Water use restrictions", "Increase use", "Ignore"],
        correctAnswer: 1,
        explanation: "Water use restrictions impose limits during scarcity."
      },
      {
        id: 17,
        question: "What is most efficient irrigation?",
        options: ["Flood", "Drip irrigation", "All equal", "Manual"],
        correctAnswer: 1,
        explanation: "Drip irrigation is most water-efficient method."
      },
      {
        id: 18,
        question: "What optimizes irrigation timing?",
        options: ["Fixed", "Soil moisture monitoring", "Guesswork", "Always"],
        correctAnswer: 1,
        explanation: "Soil moisture monitoring optimizes irrigation timing."
      },
      {
        id: 19,
        question: "What are low-flow fixtures?",
        options: ["High-flow", "Water-efficient fixtures", "Standard", "No fixtures"],
        correctAnswer: 1,
        explanation: "Water-efficient fixtures reduce building water use."
      },
      {
        id: 20,
        question: "What alters rainfall patterns?",
        options: ["No change", "Precipitation changes", "Same", "Predictable"],
        correctAnswer: 1,
        explanation: "Climate change alters precipitation patterns."
      },
      {
        id: 21,
        question: "What causes more extremes?",
        options: ["Fewer", "Extreme events", "No extremes", "Stable"],
        correctAnswer: 1,
        explanation: "Climate change increases extreme weather events."
      },
      {
        id: 22,
        question: "What identifies climate risks?",
        options: ["Ignore", "Vulnerability assessment", "No assessment", "Benefits"],
        correctAnswer: 1,
        explanation: "Vulnerability assessment identifies climate risks."
      },
      {
        id: 23,
        question: "What modifies infrastructure?",
        options: ["Same", "Infrastructure adaptation", "No changes", "New only"],
        correctAnswer: 1,
        explanation: "Infrastructure adaptation modifies for climate resilience."
      },
      {
        id: 24,
        question: "What uses ecosystems for buffering?",
        options: ["Ignore", "Ecosystem-based adaptation", "Engineering", "No nature"],
        correctAnswer: 1,
        explanation: "Ecosystem-based adaptation uses natural systems."
      },
      {
        id: 25,
        question: "What tracks drought conditions?",
        options: ["Ignore", "Drought monitoring", "No tracking", "Severe only"],
        correctAnswer: 1,
        explanation: "Drought monitoring tracks drought development."
      },
      {
        id: 26,
        question: "What predicts floods?",
        options: ["No prediction", "Flood forecasting", "Surprise", "Ignore"],
        correctAnswer: 1,
        explanation: "Flood forecasting predicts flood events."
      },
      {
        id: 27,
        question: "What enables real-time monitoring?",
        options: ["Manual", "Sensor networks", "No monitoring", "Samples"],
        correctAnswer: 1,
        explanation: "Sensor networks provide real-time monitoring."
      },
      {
        id: 28,
        question: "What connects water devices?",
        options: ["Isolated", "Internet of Things", "No connection", "Manual"],
        correctAnswer: 1,
        explanation: "IoT connects devices for comprehensive management."
      },
      {
        id: 29,
        question: "What treats emerging contaminants?",
        options: ["Basic", "Advanced oxidation", "No treatment", "Settling"],
        correctAnswer: 1,
        explanation: "Advanced oxidation treats emerging contaminants."
      },
      {
        id: 30,
        question: "What monitors from satellites?",
        options: ["Ground", "Remote sensing", "No monitoring", "Local"],
        correctAnswer: 1,
        explanation: "Remote sensing uses satellites for monitoring."
      },
      {
        id: 31,
        question: "What maps water resources?",
        options: ["No mapping", "GIS", "Only lists", "Simple maps"],
        correctAnswer: 1,
        explanation: "GIS provides spatial analysis and mapping."
      },
      {
        id: 32,
        question: "What simulates water movement?",
        options: ["Guesswork", "Hydrological models", "No simulation", "Measurement"],
        correctAnswer: 1,
        explanation: "Hydrological models simulate water movement."
      },
      {
        id: 33,
        question: "What recovers nutrients?",
        options: ["Waste", "Nutrient recovery", "No recovery", "Water only"],
        correctAnswer: 1,
        explanation: "Nutrient recovery extracts nutrients from wastewater."
      },
      {
        id: 34,
        question: "What assesses technology suitability?",
        options: ["Adopt all", "Technology assessment", "No assessment", "Newest"],
        correctAnswer: 1,
        explanation: "Technology assessment evaluates suitability."
      },
      {
        id: 35,
        question: "What transforms digitally?",
        options: ["Analog", "Digital water management", "No transformation", "Manual"],
        correctAnswer: 1,
        explanation: "Digital water management transforms sector digitally."
      },
      {
        id: 36,
        question: "What uses natural processes?",
        options: ["Engineering", "Nature-based solutions", "Ignore nature", "Concrete"],
        correctAnswer: 1,
        explanation: "Nature-based solutions use natural processes."
      },
      {
        id: 37,
        question: "What involves stakeholder participation?",
        options: ["Experts only", "Stakeholder participation", "Government only", "Private"],
        correctAnswer: 1,
        explanation: "Stakeholder participation involves all affected parties."
      },
      {
        id: 38,
        question: "What are river basin organizations?",
        options: ["Political", "River basin organizations", "Random", "Small"],
        correctAnswer: 1,
        explanation: "River basin organizations manage by natural boundaries."
      },
      {
        id: 39,
        question: "What recycles industrial water?",
        options: ["Single use", "Industrial water reuse", "No reuse", "Discharge"],
        correctAnswer: 1,
        explanation: "Industrial water reuse recycles process water."
      },
      {
        id: 40,
        question: "What develops multiple sources?",
        options: ["Single source", "Diversification strategies", "No options", "One"],
        correctAnswer: 1,
        explanation: "Diversification develops multiple water sources."
      }
    ]
  }
};

export default waterResourceManagementDiploma;
