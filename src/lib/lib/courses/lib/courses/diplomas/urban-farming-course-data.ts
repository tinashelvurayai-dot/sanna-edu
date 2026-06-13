// Urban Farming (Diploma) - Complete Course Data
// File: urban-farming-diploma.ts

export const urbanFarmingDiploma = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "urban-farming-diploma",
  title: "Urban Farming (Diploma)",
  description: "Advanced techniques for sustainable food production in urban environments. Learn to design, implement, and manage productive urban farming systems for communities and commercial purposes.",
  duration: "12 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  certificatePrerequisite: true,
  prerequisiteCourseId: "urban-farming-certificate",
  icon: "🏙️",
  badge: "Diploma",
  
  // 2. MODULE ARCHITECTURE - 6 Advanced Modules
  modules: [
    {
      id: 1,
      title: "Urban Agriculture Systems Design",
      completed: false,
      content: `# Module 1: Urban Agriculture Systems Design

Welcome to advanced urban farming! This module focuses on designing productive, sustainable urban farming systems that maximize limited space while providing food security and community benefits.

## **Principles of Urban Farm Design**

### **Space Optimization Strategies**
Urban farms must make every square inch productive through intelligent design:

**Vertical Integration:**
- Multi-level growing systems
- Wall-mounted planters and green walls
- Trellising for vining crops
- Hanging container systems
- Rooftop expansion considerations

**Microclimate Utilization:**
- South-facing walls for heat absorption
- Wind-protected corners for delicate plants
- Shaded areas for cool-season crops
- Heat islands for extended growing seasons
- Reflective surfaces for light enhancement

**Infrastructure Integration:**
- Utilizing building structural elements
- Rainwater collection from roofs
- Greywater system integration
- Solar panel co-location
- Waste heat utilization from buildings

### **Production System Selection**

**Soil-Based Systems:**
- Raised bed construction and placement
- Container garden scaling strategies
- Soil health management in confined spaces
- Nutrient cycling within closed systems
- Contamination prevention in urban soils

**Hydroponic Systems for Urban Scale:**
- Nutrient Film Technique (NFT) for leafy greens
- Deep Water Culture (DWC) for fast-growing crops
- Ebb and Flow systems for diverse plantings
- Aeroponics for maximum space efficiency
- Wick systems for low-maintenance areas

**Aquaponic Integration:**
- Fish selection for urban environments
- System sizing for available space
- Water quality management
- Plant-fish balance calculations
- Harvest and replacement scheduling

### **Design Process Methodology**

**Site Assessment Framework:**
1. **Sunlight Analysis**
   - Sun path tracking through seasons
   - Shadow mapping from buildings
   - Reflective surface identification
   - Supplemental lighting planning

2. **Access and Workflow Planning**
   - Material movement pathways
   - Harvest collection routes
   - Maintenance access requirements
   - Visitor and educational flow

3. **Resource Assessment**
   - Water source identification
   - Electricity access points
   - Composting area allocation
   - Storage and processing spaces

**Scalability Planning:**
- Phase-based expansion strategy
- Modular system components
- Succession planting schedules
- Crop rotation in confined spaces
- Yield projection calculations

## **Urban Farming Business Models**

**Community-Supported Agriculture (CSA) Urban Adaptations:**
- Weekly box delivery from small plots
- Pick-your-own urban farm models
- Restaurant supply specialization
- Farmers market stall strategies
- Subscription service variations

**Educational Farm Models:**
- School garden integration
- Vocational training programs
- Workshop and class revenue
- Tour and experience offerings
- Volunteer membership programs

**Technology-Enhanced Models:**
- App-based harvest scheduling
- Sensor-monitored subscription boxes
- Remote farm management services
- Data-driven yield optimization
- Automated delivery systems

## **Sustainability Metrics and Assessment**

**Environmental Impact Tracking:**
- Carbon footprint reduction calculations
- Water use efficiency measurements
- Waste diversion percentages
- Biodiversity enhancement indicators
- Heat island mitigation effects

**Social Impact Measurement:**
- Community engagement metrics
- Food access improvement tracking
- Educational program outcomes
- Employment creation numbers
- Health benefit assessments

**Economic Viability Analysis:**
- Production cost per square foot
- Revenue per crop type
- Labor efficiency measurements
- Value-added product margins
- Return on investment timelines

## **Case Study: Brooklyn Grange Rooftop Farm**

**Design Innovations:**
- 2.5 acres across two rooftops
- Engineered soil depth and composition
- Wind break strategic placement
- Irrigation system efficiency
- Beehive integration for pollination

**Business Model Success Factors:**
- Multiple revenue streams
- Community partnership development
- Educational program integration
- Restaurant and CSA balance
- Event space utilization

**Scalability Lessons:**
- Modular expansion approach
- System redundancy planning
- Labor efficiency improvements
- Technology integration timing
- Partnership development strategy

Remember: Great urban farm design balances productivity, sustainability, and community benefit while adapting to unique urban constraints.`,
      
      quiz: [
        {
          id: 1,
          question: "What is a key advantage of vertical integration in urban farm design?",
          options: ["Reduces watering needs", "Maximizes productivity in limited space", "Eliminates pest problems", "Requires no maintenance"],
          correctAnswer: 1,
          explanation: "Vertical integration maximizes productivity by using three-dimensional space in urban environments with limited ground area."
        },
        {
          id: 2,
          question: "Which hydroponic system is specifically mentioned for leafy greens?",
          options: ["Deep Water Culture", "Nutrient Film Technique", "Ebb and Flow", "Wick systems"],
          correctAnswer: 1,
          explanation: "Nutrient Film Technique (NFT) is ideal for leafy greens because it provides constant nutrient flow to shallow roots."
        },
        {
          id: 3,
          question: "What should be analyzed first in the site assessment framework?",
          options: ["Soil quality", "Sunlight patterns", "Neighbor opinions", "Building codes"],
          correctAnswer: 1,
          explanation: "Sunlight analysis comes first because it determines what can be grown and where in the urban environment."
        },
        {
          id: 4,
          question: "Which urban farming model involves weekly box deliveries?",
          options: ["Restaurant supply", "Community-Supported Agriculture", "Educational farm", "Technology-enhanced"],
          correctAnswer: 1,
          explanation: "Community-Supported Agriculture (CSA) typically involves weekly box deliveries of fresh produce to subscribers."
        },
        {
          id: 5,
          question: "What environmental metric tracks water efficiency?",
          options: ["Carbon footprint", "Water use efficiency", "Biodiversity indicators", "Waste diversion"],
          correctAnswer: 1,
          explanation: "Water use efficiency measurements track how effectively water is converted into edible biomass."
        },
        {
          id: 6,
          question: "What is the size of Brooklyn Grange across its two rooftops?",
          options: ["1 acre", "2.5 acres", "5 acres", "10 acres"],
          correctAnswer: 1,
          explanation: "Brooklyn Grange operates 2.5 acres of productive rooftop farm space across two locations."
        },
        {
          id: 7,
          question: "What system balances plant and fish production?",
          options: ["Hydroponics", "Aquaponics", "Aeroponics", "Traditional soil"],
          correctAnswer: 1,
          explanation: "Aquaponic systems integrate fish farming with plant production in a symbiotic relationship."
        },
        {
          id: 8,
          question: "Which design element utilizes building structural features?",
          options: ["Vertical integration", "Infrastructure integration", "Microclimate use", "Space optimization"],
          correctAnswer: 1,
          explanation: "Infrastructure integration involves using existing building elements like walls, roofs, and drainage systems."
        },
        {
          id: 9,
          question: "What does phase-based expansion strategy ensure?",
          options: ["Immediate profit", "Sustainable scalability", "Maximum size quickly", "Government approval"],
          correctAnswer: 1,
          explanation: "Phase-based expansion allows gradual growth that matches resource availability and learning curves."
        },
        {
          id: 10,
          question: "Which revenue stream combines education with income?",
          options: ["CSA boxes", "Workshop offerings", "Restaurant sales", "Wholesale distribution"],
          correctAnswer: 1,
          explanation: "Workshops and classes provide educational value while generating revenue for the urban farm."
        },
        {
          id: 11,
          question: "What helps extend growing seasons in cities?",
          options: ["Heat islands", "Tall buildings", "More rainfall", "Less wind"],
          correctAnswer: 0,
          explanation: "Urban heat islands create warmer microclimates that can extend growing seasons by several weeks."
        },
        {
          id: 12,
          question: "Which system requires no pumps or electricity?",
          options: ["NFT", "DWC", "Wick systems", "Aeroponics"],
          correctAnswer: 2,
          explanation: "Wick systems use capillary action to move nutrients, requiring no mechanical pumps."
        },
        {
          id: 13,
          question: "What is shadow mapping used for?",
          options: ["Art installations", "Identifying sunlight patterns", "Pest control", "Water collection"],
          correctAnswer: 1,
          explanation: "Shadow mapping tracks how building shadows move across the site throughout the day and seasons."
        },
        {
          id: 14,
          question: "Which business model specializes in supplying restaurants?",
          options: ["CSA", "Restaurant supply", "Educational", "Subscription"],
          correctAnswer: 1,
          explanation: "Restaurant supply models focus on providing high-quality, specialized produce to chefs and restaurants."
        },
        {
          id: 15,
          question: "What measures community engagement?",
          options: ["Carbon footprint", "Social impact metrics", "Yield per square foot", "Water efficiency"],
          correctAnswer: 1,
          explanation: "Social impact metrics include community engagement numbers, volunteer hours, and program participation."
        },
        {
          id: 16,
          question: "What did Brooklyn Grange integrate for pollination?",
          options: ["Butterfly gardens", "Beehives", "Hand pollination", "Wind machines"],
          correctAnswer: 1,
          explanation: "Beehive integration provides natural pollination while also producing honey as an additional product."
        },
        {
          id: 17,
          question: "What type of water systems can be integrated with buildings?",
          options: ["Greywater systems", "Drinking water", "Swimming pools", "Decorative fountains"],
          correctAnswer: 0,
          explanation: "Greywater from building sinks and showers can be treated and reused for irrigation in urban farms."
        },
        {
          id: 18,
          question: "What helps determine crop placement in microclimates?",
          options: ["Soil tests", "Sun and wind patterns", "Neighbor preferences", "Color schemes"],
          correctAnswer: 1,
          explanation: "Sun exposure, wind patterns, and temperature variations create microclimates that determine suitable crop placement."
        },
        {
          id: 19,
          question: "What revenue comes from hosting events?",
          options: ["Event space utilization", "CSA subscriptions", "Workshop fees", "Product sales"],
          correctAnswer: 0,
          explanation: "Event space utilization generates income from weddings, parties, and corporate events on urban farm sites."
        },
        {
          id: 20,
          question: "What ensures sustainable urban farm design?",
          options: ["Maximum profit", "Balancing productivity and community benefit", "Largest possible size", "Most expensive equipment"],
          correctAnswer: 1,
          explanation: "Sustainable design balances food production with environmental stewardship and community wellbeing."
        }
      ]
    },
    {
      id: 2,
      title: "Advanced Growing Techniques for Urban Environments",
      completed: false,
      content: `# Module 2: Advanced Growing Techniques for Urban Environments

Master sophisticated cultivation methods specifically adapted for urban constraints. This module covers intensive production systems that maximize yields in limited spaces.

## **High-Density Planting Systems**

### **Square Foot Gardening Intensive Methods**
Adapting Mel Bartholomew's system for commercial-scale urban production:

**Plant Spacing Optimization:**
- Intensive interplanting strategies
- Succession planting calendar development
- Vertical growing within squares
- Companion planting density maximization
- Root depth layering techniques

**Productivity Enhancements:**
- Season extension with low tunnels
- Reflective mulch for light optimization
- Trellising systems for vertical space use
- Succession planting for continuous harvest
- Intercropping fast and slow-growing plants

### **French Intensive Method Urban Adaptation**

**Double-Digging Technique Modification:**
- Raised bed preparation for urban soils
- Soil layer preservation strategies
- Contamination barrier installation
- Drainage system integration
- Permanent path establishment

**Companion Planting Systems:**
- Three Sisters adaptation for containers
- Pest-confusing plant combinations
- Nutrient-sharing plant partnerships
- Space-sharing plant arrangements
- Succession planting partnerships

### **Biointensive Method Implementation**

**Eight Key Principles Urban Application:**
1. **Deep soil preparation** in raised beds
2. **Composting** with urban waste streams
3. **Intensive planting** with hexagonal spacing
4. **Companion planting** for pest management
5. **Carbon farming** with grain crops
6. **Calorie farming** for nutritional focus
7. **Open-pollinated seeds** for seed saving
8. **Whole system approach** integration

**Yield Calculation Methods:**
- Calorie production per square foot
- Nutrient density measurements
- Harvest frequency optimization
- Labor efficiency tracking
- Economic value calculations

## **Season Extension Technologies**

### **Passive Solar Design**

**Cold Frame Innovations:**
- Automatic venting systems
- Thermal mass integration
- Reflective side panels
- Insulated night covers
- Modular expansion design

**Row Cover Advancements:**
- Floating row cover materials
- Low tunnel construction methods
- Hoop house scaling for urban lots
- Thermal layer combinations
- Wind protection strategies

**Wall-of-Water Systems:**
- Self-watering modifications
- Thermal regulation improvements
- Multi-plant configurations
- Early season transplanting
- Frost protection effectiveness

### **Active Heating Systems**

**Solar Thermal Collection:**
- Water wall heat storage
- Rock bed thermal mass
- Phase change materials
- Greenhouse attachment designs
- Temperature regulation systems

**Geothermal Applications:**
- Ground source heat pumps
- Earth tube air heating
- Subsurface heat exchange
- Winter growing space creation
- Energy efficiency calculations

**Waste Heat Utilization:**
- Building exhaust capture
- Compost heat harvesting
- Solar concentrator systems
- Thermal curtain management
- Heat distribution networks

## **Water Management Mastery**

### **Precision Irrigation Systems**

**Drip Irrigation Optimization:**
- Pressure-compensating emitters
- Root zone delivery targeting
- Fertigation system integration
- Moisture sensor automation
- Flow rate monitoring

**Subsurface Irrigation:**
- Buried drip line installation
- Capillary mat systems
- Wick irrigation scaling
- Root depth matching
- Evaporation reduction benefits

**Aeroponic Water Systems:**
- Mist nozzle optimization
- Nutrient solution oxygenation
- Root chamber design
- Disease prevention protocols
- Water use efficiency measurements

### **Water Capture and Reuse**

**Rainwater Harvesting Systems:**
- Roof catchment area calculations
- First-flush diversion design
- Storage tank sizing formulas
- Filtration system requirements
- Distribution system design

**Greywater Treatment:**
- Household greywater sources
- Filtration and treatment methods
- Nutrient retention strategies
- Pathogen elimination protocols
- System maintenance schedules

**Condensate Collection:**
- Dehumidifier water harvesting
- Air conditioner condensate
- Greenhouse condensation capture
- Quality testing procedures
- Storage and use guidelines

## **Nutrient Cycling Systems**

### **Urban Composting Innovations**

**High-Speed Composting Methods:**
- Berkeley hot composting technique
- Johnson-Su bioreactor design
- Bokashi fermentation adaptation
- Vermicomposting scaling
- Black soldier fly larvae systems

**Community Composting Models:**
- Neighborhood collection systems
- School composting programs
- Restaurant waste partnerships
- Apartment building solutions
- Municipal collaboration frameworks

**Compost Tea Production:**
- Aerated compost tea recipes
- Application timing optimization
- Disease suppression effectiveness
- Nutrient delivery efficiency
- Quality testing protocols

### **Nutrient Recovery Systems**

**Humanure Systems:**
- Composting toilet designs
- Urine diversion and use
- Safety protocol development
- Community acceptance strategies
- Regulatory compliance pathways

**Food Waste Digesters:**
- Anaerobic digestion systems
- Biogas production scaling
- Digestate nutrient analysis
- System sizing calculations
- Energy recovery integration

**Aquaponic Nutrient Balancing:**
- Fish feed to plant ratios
- Nutrient deficiency identification
- pH and EC management
- System cycling procedures
- Harvest and replenishment timing

## **Integrated Pest Management for Dense Planting**

### **Prevention Strategies**

**Biodiversity Enhancement:**
- Beneficial insect habitat creation
- Native plant integration
- Trap cropping arrangements
- Companion planting for pest confusion
- Physical barrier installations

**Cultural Controls:**
- Planting date adjustments
- Crop rotation in limited space
- Sanitation procedures
- Resistant variety selection
- Pruning for air circulation

### **Monitoring and Intervention**

**Scouting Protocols:**
- Regular inspection schedules
- Pest population tracking
- Damage threshold determination
- Beneficial insect assessment
- Environmental condition monitoring

**Biological Controls:**
- Predator insect introductions
- Microbial pesticide applications
- Nematode treatments
- Pheromone disruption systems
- Mating disruption techniques

**Physical and Mechanical Controls:**
- Hand removal efficiency
- Vacuum collection systems
- Water spray treatments
- Row cover deployment
- Trapping system optimization

Remember: Advanced urban growing requires balancing intensive production with sustainable practices that work within urban ecosystem constraints.`,
      
      quiz: [
        {
          id: 1,
          question: "What planting method uses hexagonal spacing for maximum density?",
          options: ["Square foot gardening", "French intensive", "Biointensive method", "Traditional row cropping"],
          correctAnswer: 2,
          explanation: "The biointensive method uses hexagonal spacing to maximize plant density in limited space."
        },
        {
          id: 2,
          question: "What season extension tool uses automatic venting?",
          options: ["Row covers", "Cold frames", "Wall-of-water", "Greenhouses"],
          correctAnswer: 1,
          explanation: "Advanced cold frames can include automatic venting systems that open based on temperature."
        },
        {
          id: 3,
          question: "Which irrigation method reduces evaporation by burying lines?",
          options: ["Drip irrigation", "Subsurface irrigation", "Sprinkler systems", "Hand watering"],
          correctAnswer: 1,
          explanation: "Subsurface irrigation places water delivery below the soil surface, dramatically reducing evaporation."
        },
        {
          id: 4,
          question: "What composting method uses fermentation?",
          options: ["Hot composting", "Bokashi", "Vermicomposting", "Johnson-Su"],
          correctAnswer: 1,
          explanation: "Bokashi is a fermentation-based composting method that works well in small urban spaces."
        },
        {
          id: 5,
          question: "What integrated pest management strategy uses predator insects?",
          options: ["Cultural controls", "Biological controls", "Chemical controls", "Physical controls"],
          correctAnswer: 1,
          explanation: "Introducing predator insects like ladybugs is a biological control method in IPM."
        },
        {
          id: 6,
          question: "What calculates calorie production per square foot?",
          options: ["Yield weight measurement", "Biointensive yield calculation", "Market value assessment", "Labor efficiency tracking"],
          correctAnswer: 1,
          explanation: "Biointensive methods include calculating calorie production to maximize nutritional output."
        },
        {
          id: 7,
          question: "What captures heat from building exhaust?",
          options: ["Solar thermal", "Waste heat utilization", "Geothermal", "Compost heating"],
          correctAnswer: 1,
          explanation: "Waste heat utilization systems capture and use heat from building ventilation or industrial processes."
        },
        {
          id: 8,
          question: "What irrigation integrates fertilizer delivery?",
          options: ["Drip systems", "Fertigation systems", "Sprinklers", "Subsurface"],
          correctAnswer: 1,
          explanation: "Fertigation combines fertilization with irrigation through drip or other systems."
        },
        {
          id: 9,
          question: "What uses urine diversion for nutrients?",
          options: ["Compost tea", "Humanure systems", "Digesters", "Aquaponics"],
          correctAnswer: 1,
          explanation: "Humanure systems safely process human waste, often including urine diversion for nutrient recovery."
        },
        {
          id: 10,
          question: "What IPM strategy adjusts planting dates?",
          options: ["Biological control", "Cultural control", "Physical control", "Chemical control"],
          correctAnswer: 1,
          explanation: "Adjusting planting dates to avoid pest life cycles is a cultural control method."
        },
        {
          id: 11,
          question: "What method layers plants by root depth?",
          options: ["Square foot gardening", "Intercropping", "Root depth layering", "Succession planting"],
          correctAnswer: 2,
          explanation: "Root depth layering plants shallow, medium, and deep-rooted plants together to use soil layers efficiently."
        },
        {
          id: 12,
          question: "What greenhouse addition uses water for heat storage?",
          options: ["Thermal curtains", "Water walls", "Rock beds", "Phase change materials"],
          correctAnswer: 1,
          explanation: "Water walls in greenhouses absorb heat during the day and release it at night."
        },
        {
          id: 13,
          question: "What irrigation uses mist for roots?",
          options: ["Drip", "Aeroponic", "Subsurface", "Wick"],
          correctAnswer: 1,
          explanation: "Aeroponic systems mist exposed roots with nutrient solution."
        },
        {
          id: 14,
          question: "What compost method uses worms?",
          options: ["Hot composting", "Bokashi", "Vermicomposting", "Johnson-Su"],
          correctAnswer: 2,
          explanation: "Vermicomposting uses worms to break down organic matter into nutrient-rich castings."
        },
        {
          id: 15,
          question: "What pest control uses pheromones?",
          options: ["Biological", "Mating disruption", "Physical", "Cultural"],
          correctAnswer: 1,
          explanation: "Pheromone disruption confuses pests and prevents mating as part of IPM strategies."
        },
        {
          id: 16,
          question: "What measures nutrient density in yields?",
          options: ["Calorie counting", "Biointensive analysis", "Market value", "Labor tracking"],
          correctAnswer: 1,
          explanation: "Biointensive methods analyze not just weight but nutritional content of harvests."
        },
        {
          id: 17,
          question: "What uses earth tubes for heating?",
          options: ["Solar thermal", "Geothermal", "Waste heat", "Compost"],
          correctAnswer: 1,
          explanation: "Geothermal systems can use earth tubes to pre-heat or cool air for growing spaces."
        },
        {
          id: 18,
          question: "What rainwater system diverts first flow?",
          options: ["First-flush diversion", "Filtration system", "Storage tanks", "Distribution lines"],
          correctAnswer: 0,
          explanation: "First-flush diversions remove initial dirty water from roofs before it enters storage."
        },
        {
          id: 19,
          question: "What processes food waste anaerobically?",
          options: ["Composting", "Digesters", "Fermentation", "Vermicomposting"],
          correctAnswer: 1,
          explanation: "Anaerobic digesters break down food waste without oxygen, producing biogas."
        },
        {
          id: 20,
          question: "What IPM uses vacuum collection?",
          options: ["Biological", "Physical control", "Cultural", "Chemical"],
          correctAnswer: 1,
          explanation: "Vacuum collection of pests is a physical control method in intensive IPM systems."
        }
      ]
    },
    {
      id: 3,
      title: "Urban Livestock Integration",
      completed: false,
      content: `# Module 3: Urban Livestock Integration

Explore sustainable animal husbandry practices specifically adapted for urban environments. Learn to integrate livestock into urban farming systems for enhanced productivity, nutrient cycling, and community engagement.

## **Poultry Systems for Urban Settings**

### **Chicken Coop Design and Management**

**Space-Efficient Coop Designs:**
- Vertical coop configurations
- Mobile chicken tractor systems
- Rooftop chicken coop adaptations
- Balcony and patio solutions
- Multi-level aviary designs

**Urban-Specific Considerations:**
- Noise reduction strategies
- Odor management systems
- Predator protection in cities
- Waste management integration
- Neighborhood relation building

**Productivity Optimization:**
- Egg production enhancement
- Meat bird efficient raising
- Dual-purpose breed selection
- Feed conversion optimization
- Health monitoring protocols

### **Quail and Other Small Fowl**

**Japanese Quail Systems:**
- Stackable cage designs
- Space requirement calculations
- Egg production timelines
- Processing facility requirements
- Market differentiation strategies

**Duck Integration:**
- Pest control benefits
- Water system integration
- Noise and odor considerations
- Egg and meat production
- Seasonal management

**Other Urban Poultry:**
- Guinea fowl for tick control
- Pigeon squab production
- Pheasant raising considerations
- Turkey urban adaptations
- Game bird specialty markets

## **Apiary Management in Cities**

### **Urban Beekeeping Fundamentals**

**Hive Placement Strategies:**
- Rooftop apiary design
- Balcony hive adaptations
- Community garden integration
- School yard installations
- Park and green space utilization

**Hive Type Selection:**
- Langstroth for maximum production
- Top-bar for natural comb
- Warre for low intervention
- Flow hive for easy harvesting
- Observation hive for education

**Urban Nectar Sources:**
- Neighborhood plant surveys
- Seasonal bloom calendars
- Forage distance calculations
- Supplemental feeding strategies
- Pollen source diversity

### **Honey Production and Products**

**Harvest Techniques:**
- Small-scale extraction methods
- Comb honey production
- Creamed honey processing
- Seasonal harvest timing
- Yield optimization strategies

**Value-Added Products:**
- Beeswax candle making
- Propolis tinctures
- Royal jelly harvesting
- Pollen collection
- Bee venom therapy products

**Educational Programs:**
- Beekeeping workshops
- School hive programs
- Corporate beekeeping
- Therapy bee programs
- Pollinator education

## **Rabbit and Small Mammal Systems**

### **Rabbitry Design for Production**

**Space-Efficient Housing:**
- Stackable cage systems
- Colony housing adaptations
- Mobile rabbit tractors
- Indoor rabbitry options
- Climate control requirements

**Meat Production Systems:**
- Breed selection for urban scale
- Feed efficiency calculations
- Processing facility design
- Cold chain requirements
- Market development strategies

**Manure Management:**
- Worm bedding integration
- Direct garden application
- Composting protocols
- Nutrient content analysis
- Odor control methods

### **Other Small Mammals**

**Guinea Pig Systems:**
- Cultural market opportunities
- Housing and care requirements
- Processing and preparation
- Market development
- Cultural sensitivity considerations

**Snail Farming:**
- Escargot production systems
- Indoor snailery design
- Feed and care protocols
- Processing requirements
- Market niche identification

**Edible Insect Integration:**
- Mealworm production systems
- Cricket farming setups
- Black soldier fly larvae
- Processing and packaging
- Market acceptance strategies

## **Aquatic Systems Integration**

### **Aquaponics Fish Selection**

**Tilapia Systems:**
- Temperature requirements
- Growth rate optimization
- Feed conversion ratios
- Harvest timing calculations
- Market preferences

**Trout and Cool Water Species:**
- Temperature control systems
- Oxygen requirements
- Stocking density calculations
- Seasonal production planning
- Specialty market development

**Ornamental Fish Integration:**
- Koi and goldfish systems
- Breeding for local markets
- Water garden combinations
- Therapeutic applications
- Educational value

### **Other Aquatic Species**

**Crayfish and Freshwater Prawns:**
- Recirculating system design
- Water quality management
- Breeding program development
- Harvest techniques
- Market positioning

**Freshwater Mussels:**
- Water filtration benefits
- Production system design
- Pearl cultivation possibilities
- Ecosystem services value
- Niche market development

**Amphibian Integration:**
- Frog leg production
- System design requirements
- Feed development
- Processing facilities
- Export market considerations

## **Integrated Livestock Systems**

### **Multi-Species Integration**

**Waste Cycling Systems:**
- Chicken manure to fish feed
- Rabbit manure to worm beds
- Fish waste to plant nutrients
- Insect larvae to poultry feed
- Compost heat to animal housing

**Space-Sharing Strategies:**
- Vertical layer integration
- Sequential space use
- Mobile system rotations
- Seasonal space sharing
- Multi-functional designs

**Labor Efficiency Designs:**
- Automated feeding systems
- Self-watering designs
- Waste collection automation
- Harvesting efficiency tools
- Monitoring technology integration

### **Community Engagement Models**

**Educational Livestock Programs:**
- School chicken programs
- Community beekeeping clubs
- Rabbit 4-H adaptations
- Aquaponics workshops
- Livestock therapy programs

**Shared Ownership Models:**
- Chicken sharing cooperatives
- Beehive sponsorship programs
- Rabbit breeding circles
- Fish tank community management
- Livestock care volunteering

**Therapeutic Applications:**
- Animal-assisted therapy gardens
- Beekeeping for veterans
- Rabbit therapy programs
- Fish tank calming effects
- Horticulture therapy integration

## **Regulatory Compliance and Best Practices**

### **Urban Livestock Regulations**

**Zoning and Ordinances:**
- Livestock permit processes
- Setback requirements
- Noise ordinance compliance
- Waste management regulations
- Slaughter and processing laws

**Health and Safety Protocols:**
- Disease prevention measures
- Zoonosis risk management
- Food safety certifications
- Processing facility standards
- Transportation regulations

**Community Relations:**
- Neighborhood agreement templates
- Conflict resolution strategies
- Educational outreach programs
- Open house event planning
- Complaint management systems

### **Business Planning for Urban Livestock**

**Market Analysis:**
- Local demand assessment
- Competition evaluation
- Pricing strategy development
- Distribution channel selection
- Value-added product opportunities

**Financial Planning:**
- Startup cost calculations
- Operating expense projections
- Revenue stream diversification
- Break-even analysis
- Scaling investment planning

**Risk Management:**
- Insurance requirements
- Liability protection strategies
- Disease outbreak plans
- Market fluctuation buffers
- Succession planning

Remember: Successful urban livestock integration requires balancing production goals with community relations, regulatory compliance, and animal welfare considerations.`,
      
      quiz: [
        {
          id: 1,
          question: "What chicken system moves around gardens?",
          options: ["Stationary coop", "Chicken tractor", "Aviary", "Vertical coop"],
          correctAnswer: 1,
          explanation: "Chicken tractors are mobile coops that can be moved to fertilize different garden areas."
        },
        {
          id: 2,
          question: "Which hive type allows honey harvesting without opening?",
          options: ["Langstroth", "Top-bar", "Warre", "Flow hive"],
          correctAnswer: 3,
          explanation: "Flow hives have special frames that allow honey to be harvested without disturbing the bees."
        },
        {
          id: 3,
          question: "What small mammal is raised for cultural markets?",
          options: ["Rabbits", "Guinea pigs", "Snails", "Mealworms"],
          correctAnswer: 1,
          explanation: "Guinea pigs (cuy) are raised for meat in certain cultural markets, particularly in South American communities."
        },
        {
          id: 4,
          question: "Which fish is commonly used in warm water aquaponics?",
          options: ["Trout", "Tilapia", "Koi", "Crayfish"],
          correctAnswer: 1,
          explanation: "Tilapia are popular for warm water aquaponic systems due to their hardiness and fast growth."
        },
        {
          id: 5,
          question: "What integrates chicken manure with fish feed?",
          options: ["Composting", "Waste cycling", "Direct application", "Vermicomposting"],
          correctAnswer: 1,
          explanation: "Waste cycling systems can process chicken manure into insect larvae that become fish feed."
        },
        {
          id: 6,
          question: "What bee product is used in tinctures?",
          options: ["Honey", "Propolis", "Beeswax", "Royal jelly"],
          correctAnswer: 1,
          explanation: "Propolis, the resin bees collect from trees, has antimicrobial properties and is used in tinctures."
        },
        {
          id: 7,
          question: "What rabbit system uses group housing?",
          options: ["Cage systems", "Colony housing", "Tractors", "Indoor systems"],
          correctAnswer: 1,
          explanation: "Colony housing allows rabbits to live in social groups, though it requires careful management."
        },
        {
          id: 8,
          question: "What insect is raised for animal feed?",
          options: ["Mealworms", "Butterflies", "Ladybugs", "Grasshoppers"],
          correctAnswer: 0,
          explanation: "Mealworms are high in protein and can be raised to feed poultry, fish, or other animals."
        },
        {
          id: 9,
          question: "What therapeutic use involves veterans?",
          options: ["Chicken therapy", "Beekeeping therapy", "Rabbit programs", "All of these"],
          correctAnswer: 3,
          explanation: "Various livestock including bees, chickens, and rabbits are used in therapeutic programs for veterans."
        },
        {
          id: 10,
          question: "What must be checked before starting urban livestock?",
          options: ["Market demand", "Zoning ordinances", "Feed availability", "All of these"],
          correctAnswer: 3,
          explanation: "All factors including zoning, market, and resources must be assessed before starting urban livestock."
        },
        {
          id: 11,
          question: "What poultry is known for tick control?",
          options: ["Chickens", "Guinea fowl", "Ducks", "Quail"],
          correctAnswer: 1,
          explanation: "Guinea fowl are excellent at controlling ticks and other insects in gardens and yards."
        },
        {
          id: 12,
          question: "What hive emphasizes natural comb building?",
          options: ["Langstroth", "Top-bar", "Warre", "Flow"],
          correctAnswer: 1,
          explanation: "Top-bar hives allow bees to build natural comb rather than using pre-formed foundation."
        },
        {
          id: 13,
          question: "What snail product is gourmet?",
          options: ["Shells", "Escargot", "Slime", "Eggs"],
          correctAnswer: 1,
          explanation: "Escargot, prepared land snails, are considered a gourmet food in many cuisines."
        },
        {
          id: 14,
          question: "What fish requires cooler water?",
          options: ["Tilapia", "Trout", "Goldfish", "Crayfish"],
          correctAnswer: 1,
          explanation: "Trout require cooler, well-oxygenated water compared to warm-water species like tilapia."
        },
        {
          id: 15,
          question: "What uses rabbit manure for worms?",
          options: ["Direct garden use", "Worm bedding", "Compost tea", "Fish feed"],
          correctAnswer: 1,
          explanation: "Rabbit manure makes excellent bedding and food for vermicomposting systems."
        },
        {
          id: 16,
          question: "What bee product is harvested from queen cells?",
          options: ["Honey", "Propolis", "Royal jelly", "Beeswax"],
          correctAnswer: 2,
          explanation: "Royal jelly is secreted by worker bees and fed to queen larvae in special queen cells."
        },
        {
          id: 17,
          question: "What poultry produces squab?",
          options: ["Chickens", "Pigeons", "Quail", "Ducks"],
          correctAnswer: 1,
          explanation: "Squab is the culinary term for young domestic pigeon, considered a delicacy."
        },
        {
          id: 18,
          question: "What insect larvae processes waste quickly?",
          options: ["Mealworms", "Black soldier fly larvae", "Crickets", "Butterflies"],
          correctAnswer: 1,
          explanation: "Black soldier fly larvae can process large amounts of organic waste very efficiently."
        },
        {
          id: 19,
          question: "What program involves school children with chickens?",
          options: ["4-H programs", "School chicken programs", "Educational livestock", "All of these"],
          correctAnswer: 3,
          explanation: "Various educational programs introduce children to livestock through schools and organizations."
        },
        {
          id: 20,
          question: "What regulation addresses animal noise?",
          options: ["Zoning", "Noise ordinances", "Health codes", "Processing laws"],
          correctAnswer: 1,
          explanation: "Noise ordinances may regulate roosters or other loud animals in urban settings."
        }
      ]
    },
    {
      id: 4,
      title: "Urban Farm Business Management",
      completed: false,
      content: `# Module 4: Urban Farm Business Management

Master the business aspects of urban farming, from financial planning and marketing to operations management and scaling strategies for sustainable urban agriculture enterprises.

## **Business Model Development**

### **Revenue Stream Diversification**

**Core Production Revenue:**
- Fresh produce sales calculations
- Value-added product development
- Subscription model optimization
- Wholesale vs retail balance
- Seasonal income smoothing

**Educational Program Revenue:**
- Workshop pricing strategies
- School program contracts
- Corporate team-building events
- Certification program development
- Online course creation

**Service-Based Revenue:**
- Consulting services pricing
- Design and installation fees
- Maintenance contract models
- Harvest service offerings
- Composting service fees

**Experience-Based Revenue:**
- Farm tour ticket pricing
- Event venue rental rates
- Dining experience development
- Photography session fees
- Wellness program offerings

### **Cost Structure Optimization**

**Fixed Cost Management:**
- Land access cost negotiations
- Infrastructure depreciation schedules
- Insurance premium optimization
- Permit and license fee management
- Administrative cost reduction

**Variable Cost Control:**
- Seed and input cost tracking
- Labor efficiency improvements
- Energy consumption reduction
- Water use optimization
- Packaging material sourcing

**Capital Investment Planning:**
- Equipment life cycle analysis
- Infrastructure upgrade timing
- Technology investment ROI
- Expansion capital requirements
- Emergency fund sizing

## **Financial Planning and Analysis**

### **Startup Financial Planning**

**Initial Investment Requirements:**
- Site preparation cost estimates
- Infrastructure investment calculations
- Operating capital requirements
- Contingency fund sizing
- Phased investment planning

**Funding Source Development:**
- Grant writing strategies
- Crowdfunding campaign planning
- Investor pitch development
- Loan application preparation
- Community investment models

**Break-Even Analysis:**
- Monthly expense projections
- Revenue ramp-up timelines
- Seasonality adjustments
- Price point sensitivity analysis
- Volume requirement calculations

### **Ongoing Financial Management**

**Bookkeeping Systems:**
- Crop-based accounting methods
- Cost tracking by production area
- Labor hour allocation systems
- Inventory valuation methods
- Depreciation schedule management

**Financial Reporting:**
- Monthly profit/lost statements
- Cash flow forecasting
- Balance sheet preparation
- Production efficiency reports
- Variance analysis procedures

**Pricing Strategy Development:**
- Cost-plus pricing calculations
- Market-based price positioning
- Value-based pricing strategies
- Dynamic pricing for seasonality
- Bundle pricing for value addition

## **Marketing and Sales Strategies**

### **Brand Development**

**Urban Farm Brand Identity:**
- Mission and values articulation
- Target market identification
- Unique selling proposition development
- Brand story creation
- Visual identity system design

**Market Positioning:**
- Quality differentiation strategies
- Local food movement alignment
- Sustainability story development
- Educational mission integration
- Community impact highlighting

**Communication Strategy:**
- Social media content planning
- Email marketing system development
- Public relations outreach
- Community newsletter creation
- Educational content marketing

### **Sales Channel Development**

**Direct-to-Consumer Channels:**
- Farmers market stall optimization
- On-farm stand operations
- CSA program management
- Online ordering systems
- Home delivery logistics

**Wholesale and Institutional:**
- Restaurant relationship building
- School procurement processes
- Hospital and institution sales
- Grocery store partnerships
- Food hub collaborations

**Online Sales Expansion:**
- E-commerce platform selection
- Shipping logistics development
- Subscription box programs
- Digital product offerings
- Virtual farm experiences

## **Operations Management**

### **Production Planning**

**Crop Planning Systems:**
- Multi-year rotation planning
- Succession planting calendars
- Harvest scheduling optimization
- Labor requirement forecasting
- Input purchase timing

**Inventory Management:**
- Seed inventory systems
- Tool and equipment tracking
- Harvest storage management
- Value-added product inventory
- Input supply chain management

**Quality Control Systems:**
- Harvest quality standards
- Post-harvest handling protocols
- Storage condition monitoring
- Product grading systems
- Customer feedback integration

### **Labor Management**

**Staffing Models:**
- Full-time employee requirements
- Seasonal worker management
- Volunteer program development
- Internship program structure
- Contractor relationship management

**Training Systems:**
- Standard operating procedures
- Safety protocol training
- Quality standard education
- Harvest technique training
- Customer service standards

**Performance Management:**
- Productivity measurement systems
- Quality assessment protocols
- Team communication structures
- Problem-solving procedures
- Continuous improvement processes

## **Risk Management**

### **Production Risk Mitigation**

**Crop Failure Protection:**
- Diversification strategies
- Insurance policy selection
- Emergency planning protocols
- Succession planting as buffer
- Alternative crop planning

**Pest and Disease Management:**
- IPM implementation monitoring
- Quarantine procedures
- Treatment protocol development
- Record keeping for patterns
- Prevention system audits

**Climate Risk Adaptation:**
- Extreme weather preparedness
- Irrigation backup systems
- Temperature protection measures
- Season extension equipment
- Microclimate utilization planning

### **Business Risk Management**

**Market Risk Strategies:**
- Customer diversification
- Product mix optimization
- Price risk hedging
- Contract farming agreements
- Market trend monitoring

**Financial Risk Controls:**
- Cash reserve maintenance
- Debt level management
- Revenue stream diversification
- Expense control systems
- Financial buffer strategies

**Legal and Regulatory Compliance:**
- Permit renewal tracking
- Inspection preparation
- Record keeping requirements
- Liability protection measures
- Contract management systems

## **Scaling and Growth Strategies**

### **Organic Growth Planning**

**Infrastructure Scaling:**
- Modular expansion planning
- Phased growth implementation
- Efficiency improvement investments
- Technology adoption timing
- Space utilization optimization

**Market Expansion:**
- New customer segment development
- Geographic expansion planning
- Product line extension
- Service offering expansion
- Partnership development

**Operational Excellence:**
- Process standardization
- Quality system implementation
- Technology integration
- Staff skill development
- Continuous improvement culture

### **Partnership and Collaboration**

**Strategic Partnerships:**
- Restaurant collaboration models
- School district partnerships
- Nonprofit collaborations
- Corporate sponsorship development
- Community organization alliances

**Cooperative Models:**
- Producer cooperative formation
- Marketing cooperative participation
- Purchasing cooperative benefits
- Equipment sharing arrangements
- Knowledge sharing networks

**Franchise and Licensing:**
- System replication models
- Training program development
- Brand standard maintenance
- Quality control systems
- Support structure creation

Remember: Successful urban farm businesses balance production excellence with financial sustainability, market responsiveness, and operational efficiency while maintaining their social and environmental missions.`,
      
      quiz: [
        {
          id: 1,
          question: "What revenue comes from teaching workshops?",
          options: ["Production revenue", "Educational revenue", "Service revenue", "Experience revenue"],
          correctAnswer: 1,
          explanation: "Workshops and classes fall under educational program revenue streams."
        },
        {
          id: 2,
          question: "What cost includes land access negotiations?",
          options: ["Variable costs", "Fixed costs", "Capital costs", "Operating costs"],
          correctAnswer: 1,
          explanation: "Land access costs are typically fixed costs that don't vary with production volume."
        },
        {
          id: 3,
          question: "What analysis determines when revenue covers costs?",
          options: ["Cash flow analysis", "Break-even analysis", "Balance sheet", "Profit/loss statement"],
          correctAnswer: 1,
          explanation: "Break-even analysis calculates the point where total revenue equals total costs."
        },
        {
          id: 4,
          question: "What marketing tells the farm's story?",
          options: ["Brand identity", "Sales channels", "Pricing strategy", "Advertising"],
          correctAnswer: 0,
          explanation: "Brand identity development includes creating and communicating the farm's story and values."
        },
        {
          id: 5,
          question: "What system plans planting over multiple years?",
          options: ["Succession planting", "Crop rotation planning", "Harvest scheduling", "Labor forecasting"],
          correctAnswer: 1,
          explanation: "Crop rotation planning organizes planting sequences over multiple years to maintain soil health."
        },
        {
          id: 6,
          question: "What protects against crop failure?",
          options: ["Insurance", "Diversification", "Both A and B", "Neither"],
          correctAnswer: 2,
          explanation: "Both crop insurance and planting diversification help mitigate crop failure risks."
        },
        {
          id: 7,
          question: "What growth uses existing resources better?",
          options: ["Organic growth", "Partnership growth", "Franchise growth", "Acquisition growth"],
          correctAnswer: 0,
          explanation: "Organic growth focuses on improving efficiency and expanding within existing capabilities."
        },
        {
          id: 8,
          question: "What pricing adds margin to costs?",
          options: ["Cost-plus pricing", "Market-based pricing", "Value-based pricing", "Dynamic pricing"],
          correctAnswer: 0,
          explanation: "Cost-plus pricing calculates selling price by adding a markup to production costs."
        },
        {
          id: 9,
          question: "What channel sells directly to consumers on-site?",
          options: ["Farm stand", "Wholesale", "Online", "Restaurants"],
          correctAnswer: 0,
          explanation: "On-farm stands are direct-to-consumer sales channels where customers visit the farm."
        },
        {
          id: 10,
          question: "What manages seed and tool inventory?",
          options: ["Production planning", "Inventory management", "Quality control", "Labor management"],
          correctAnswer: 1,
          explanation: "Inventory management systems track inputs like seeds and tools to ensure availability."
        },
        {
          id: 11,
          question: "What revenue comes from consulting?",
          options: ["Production", "Educational", "Service", "Experience"],
          correctAnswer: 2,
          explanation: "Consulting services generate service-based revenue through expertise sharing."
        },
        {
          id: 12,
          question: "What cost varies with production volume?",
          options: ["Fixed costs", "Variable costs", "Capital costs", "Overhead costs"],
          correctAnswer: 1,
          explanation: "Variable costs like seeds and packaging change with how much is produced."
        },
        {
          id: 13,
          question: "What financial statement shows cash movement?",
          options: ["Balance sheet", "Cash flow statement", "Income statement", "Production report"],
          correctAnswer: 1,
          explanation: "Cash flow statements track actual cash inflows and outflows over time periods."
        },
        {
          id: 14,
          question: "What positions the farm in the local food movement?",
          options: ["Brand identity", "Market positioning", "Pricing", "Advertising"],
          correctAnswer: 1,
          explanation: "Market positioning defines how the farm is perceived relative to competitors and movements."
        },
        {
          id: 15,
          question: "What plans harvest timing?",
          options: ["Crop rotation", "Succession planting", "Harvest scheduling", "Labor planning"],
          correctAnswer: 2,
          explanation: "Harvest scheduling optimizes when crops will be ready for market to match demand."
        },
        {
          id: 16,
          question: "What risk comes from weather?",
          options: ["Production risk", "Market risk", "Financial risk", "Legal risk"],
          correctAnswer: 0,
          explanation: "Weather-related crop damage is a production risk that farming businesses face."
        },
        {
          id: 17,
          question: "What growth uses partnerships?",
          options: ["Organic", "Collaborative", "Franchise", "Acquisition"],
          correctAnswer: 1,
          explanation: "Collaborative growth involves partnerships with other organizations to expand reach."
        },
        {
          id: 18,
          question: "What sets prices based on customer value?",
          options: ["Cost-plus", "Market-based", "Value-based", "Dynamic"],
          correctAnswer: 2,
          explanation: "Value-based pricing sets prices according to perceived value to the customer, not just costs."
        },
        {
          id: 19,
          question: "What sells to restaurants?",
          options: ["Direct consumer", "Wholesale", "Online", "Subscription"],
          correctAnswer: 1,
          explanation: "Wholesale channels include sales to restaurants, institutions, and retailers."
        },
        {
          id: 20,
          question: "What ensures product quality standards?",
          options: ["Production planning", "Inventory management", "Quality control", "Labor training"],
          correctAnswer: 2,
          explanation: "Quality control systems establish and maintain standards for harvested products."
        }
      ]
    },
    {
      id: 5,
      title: "Community Engagement and Education",
      completed: false,
      content: `# Module 5: Community Engagement and Education

Develop strategies for meaningful community involvement and effective educational programming that transforms urban farms into community assets and learning centers.

## **Community Engagement Frameworks**

### **Stakeholder Analysis and Engagement**

**Identifying Community Stakeholders:**
- Immediate neighborhood residents
- Local business community
- Schools and educational institutions
- Government and municipal agencies
- Nonprofit and community organizations

**Engagement Level Planning:**
- Informational outreach strategies
- Consultation process design
- Collaborative partnership development
- Community-led initiative support
- Empowerment and ownership transfer

**Relationship Building Strategies:**
- Regular communication schedules
- Transparency and information sharing
- Conflict resolution protocols
- Recognition and appreciation systems
- Long-term relationship nurturing

### **Volunteer Program Development**

**Volunteer Recruitment Systems:**
- Skill-based volunteer matching
- Age-appropriate opportunity design
- Corporate volunteer program development
- School service learning integration
- Special needs accommodation planning

**Volunteer Management Structures:**
- Orientation and training programs
- Scheduling and coordination systems
- Task assignment and supervision
- Safety protocol implementation
- Recognition and retention strategies

**Impact Measurement:**
- Volunteer hour tracking
- Skill development assessment
- Community connection evaluation
- Program improvement feedback
- Economic value calculations

## **Educational Program Design**

### **Formal Education Partnerships**

**School Garden Program Development:**
- Curriculum alignment strategies
- Teacher training and support
- Student engagement activities
- Assessment and evaluation methods
- Sustainability and continuation planning

**University Collaboration Models:**
- Research partnership development
- Internship program structure
- Service learning integration
- Capstone project coordination
- Knowledge exchange systems

**Vocational Training Programs:**
- Job skill development curriculum
- Industry certification preparation
- Apprenticeship program design
- Employment pathway development
- Employer partnership building

### **Informal Education Programming**

**Workshop Series Development:**
- Topic selection and sequencing
- Skill level progression design
- Hands-on activity planning
- Take-home material creation
- Follow-up support systems

**Demonstration Garden Design:**
- Technique visualization planning
- Interactive element integration
- Multilingual signage development
- Accessibility consideration
- Seasonal variation planning

**Self-Guided Learning Systems:**
- Interpretive trail development
- QR code information systems
- Audio tour creation
- Mobile app integration
- Take-home guide design

## **Public Programming and Events**

### **Regular Public Events**

**Farm Stand and Market Days:**
- Customer experience enhancement
- Educational booth integration
- Cooking demonstration planning
- Children's activity design
- Community gathering space creation

**Open House and Tour Programs:**
- Guided tour script development
- Self-guided tour materials
- Special interest tour creation
- Multilingual tour options
- Accessibility accommodations

**Workshop and Class Series:**
- Seasonal topic alignment
- Registration system management
- Materials preparation protocols
- Instructor training and support
- Participant feedback collection

### **Special Events and Programs**

**Harvest Festival Planning:**
- Activity station design
- Volunteer coordination systems
- Vendor and partner integration
- Safety and logistics planning
- Cultural celebration inclusion

**Themed Event Development:**
- Seasonal celebration events
- Cultural heritage celebrations
- Environmental awareness events
- Health and wellness programs
- Arts and culture integration

**Community Building Events:**
- Potluck dinner organization
- Work party coordination
- Skill share events
- Community meetings
- Celebration gatherings

## **Youth Programming**

### **School-Based Programs**

**Classroom Integration Models:**
- Grade-level appropriate activities
- Cross-curricular connections
- Standards alignment strategies
- Teacher resource development
- Assessment tool creation

**After-School Program Design:**
- Activity progression planning
- Behavior management systems
- Snack and meal integration
- Family engagement strategies
- Transportation coordination

**Summer Camp Development:**
- Weekly theme planning
- Activity rotation systems
- Staff training protocols
- Safety procedure implementation
- Parent communication systems

### **Intergenerational Programs**

**Family Gardening Programs:**
- Multi-age activity design
- Take-home project development
- Family resource creation
- Intergenerational learning activities
- Home garden support systems

**Elder-Youth Partnership Models:**
- Knowledge sharing programs
- Joint project development
- Relationship building activities
- Cultural transmission programs
- Mutual benefit design

**Community History Projects:**
- Oral history collection
- Historical garden recreation
- Traditional knowledge documentation
- Cultural preservation activities
- Community archive creation

## **Cultural Competency and Inclusion**

### **Cultural Responsiveness**

**Community Cultural Assessment:**
- Demographic data analysis
- Cultural practice documentation
- Food tradition understanding
- Communication style adaptation
- Relationship building protocols

**Program Cultural Adaptation:**
- Multilingual material development
- Cultural celebration integration
- Traditional knowledge respect
- Dietary restriction accommodation
- Communication style adaptation

**Diverse Leadership Development:**
- Community leadership identification
- Skill development opportunities
- Decision-making inclusion
- Power sharing structures
- Succession planning

### **Accessibility and Inclusion**

**Physical Accessibility:**
- ADA compliance planning
- Universal design principles
- Adaptive tool provision
- Transportation coordination
- Sensory garden design

**Economic Accessibility:**
- Sliding scale fee structures
- Scholarship program development
- Barter and exchange systems
- Free program offerings
- Community sponsorship models

**Social Inclusion Strategies:**
- Welcoming environment creation
- Social connection facilitation
- Skill level accommodation
- Learning style adaptation
- Community belonging cultivation

## **Communication and Outreach**

### **Communication Strategy Development**

**Audience Segmentation:**
- Demographic analysis methods
- Interest group identification
- Communication channel preference
- Message customization strategies
- Timing optimization

**Multi-Channel Communication:**
- Social media content planning
- Email newsletter development
- Printed material design
- Community bulletin board use
- Word-of-mouth encouragement

**Storytelling and Narrative:**
- Success story collection
- Before-and-after documentation
- Participant testimony gathering
- Impact measurement communication
- Visual storytelling techniques

### **Media Relations and Publicity**

**Media Relationship Building:**
- Press kit development
- Media contact database creation
- Story pitch development
- Press event planning
- Relationship maintenance

**Social Media Strategy:**
- Platform selection optimization
- Content calendar development
- Engagement strategy planning
- Community management protocols
- Impact measurement systems

**Community Outreach Systems:**
- Door-to-door canvassing protocols
- Community meeting presentations
- Local business partnership development
- Organization collaboration
- Event promotion strategies

Remember: Effective community engagement transforms urban farms from food production sites into community hubs that build social connections, transfer knowledge, and create shared value beyond agricultural products.`,
      
      quiz: [
        {
          id: 1,
          question: "Who are immediate neighborhood residents considered?",
          options: ["Customers", "Stakeholders", "Employees", "Visitors"],
          correctAnswer: 1,
          explanation: "Immediate neighbors are key stakeholders who are affected by and can affect the urban farm."
        },
        {
          id: 2,
          question: "What program matches volunteers by skills?",
          options: ["General volunteering", "Skill-based matching", "Corporate programs", "School programs"],
          correctAnswer: 1,
          explanation: "Skill-based volunteer matching connects people's specific skills with farm needs for maximum impact."
        },
        {
          id: 3,
          question: "What aligns farm education with school standards?",
          options: ["Curriculum alignment", "Teacher training", "Student activities", "Assessment methods"],
          correctAnswer: 0,
          explanation: "Curriculum alignment ensures farm education complements and supports formal school learning objectives."
        },
        {
          id: 4,
          question: "What event features cooking demonstrations?",
          options: ["Farm stand days", "Open houses", "Workshops", "Harvest festivals"],
          correctAnswer: 0,
          explanation: "Farm stand and market days often include cooking demonstrations to show how to use fresh produce."
        },
        {
          id: 5,
          question: "What program runs during school breaks?",
          options: ["After-school", "Summer camp", "Classroom integration", "Family programs"],
          correctAnswer: 1,
          explanation: "Summer camps provide educational programming when school is not in session."
        },
        {
          id: 6,
          question: "What program connects elders and youth?",
          options: ["Family gardening", "Intergenerational", "School-based", "Vocational"],
          correctAnswer: 1,
          explanation: "Intergenerational programs specifically bridge age groups for mutual learning and connection."
        },
        {
          id: 7,
          question: "What principle ensures access for all abilities?",
          options: ["Universal design", "Cultural adaptation", "Economic access", "Social inclusion"],
          correctAnswer: 0,
          explanation: "Universal design principles create environments usable by people with diverse abilities."
        },
        {
          id: 8,
          question: "What adjusts fees based on income?",
          options: ["Scholarships", "Sliding scale", "Barter systems", "Free programs"],
          correctAnswer: 1,
          explanation: "Sliding scale fee structures adjust costs based on participants' ability to pay."
        },
        {
          id: 9,
          question: "What divides audiences for targeted messaging?",
          options: ["Audience segmentation", "Multi-channel communication", "Storytelling", "Media relations"],
          correctAnswer: 0,
          explanation: "Audience segmentation divides broader communities into groups with shared characteristics for targeted communication."
        },
        {
          id: 10,
          question: "What collects success stories?",
          options: ["Storytelling", "Media kits", "Social media", "Community outreach"],
          correctAnswer: 0,
          explanation: "Storytelling involves collecting and sharing personal success stories to illustrate impact."
        },
        {
          id: 11,
          question: "What involves community in decision-making?",
          options: ["Informational outreach", "Consultation", "Collaboration", "Empowerment"],
          correctAnswer: 2,
          explanation: "Collaboration engages community members as partners in planning and decision-making processes."
        },
        {
          id: 12,
          question: "What tracks volunteer contributions?",
          options: ["Recruitment", "Hour tracking", "Training", "Recognition"],
          correctAnswer: 1,
          explanation: "Volunteer hour tracking measures contributions and helps demonstrate community engagement levels."
        },
        {
          id: 13,
          question: "What prepares students for jobs?",
          options: ["School gardens", "Vocational training", "University collaboration", "Informal education"],
          correctAnswer: 1,
          explanation: "Vocational training programs develop specific job skills for employment in urban agriculture."
        },
        {
          id: 14,
          question: "What uses QR codes for information?",
          options: ["Guided tours", "Self-guided systems", "Workshops", "Demonstration gardens"],
          correctAnswer: 1,
          explanation: "Self-guided learning systems can use QR codes to provide information at different garden locations."
        },
        {
          id: 15,
          question: "What program includes family activities?",
          options: ["Youth programs", "Family gardening", "School-based", "Summer camps"],
          correctAnswer: 1,
          explanation: "Family gardening programs design activities that involve multiple generations gardening together."
        },
        {
          id: 16,
          question: "What respects traditional knowledge?",
          options: ["Cultural adaptation", "Accessibility", "Inclusion", "Communication"],
          correctAnswer: 0,
          explanation: "Cultural adaptation includes respecting and incorporating traditional knowledge systems."
        },
        {
          id: 17,
          question: "What creates gardens for sensory experience?",
          options: ["Universal design", "Sensory gardens", "ADA compliance", "Adaptive tools"],
          correctAnswer: 1,
          explanation: "Sensory gardens are specifically designed to engage all senses, often for therapeutic benefits."
        },
        {
          id: 18,
          question: "What analyzes demographic data?",
          options: ["Community assessment", "Program adaptation", "Leadership development", "Communication"],
          correctAnswer: 0,
          explanation: "Community cultural assessment includes analyzing demographic data to understand community composition."
        },
        {
          id: 19,
          question: "What develops relationships with journalists?",
          options: ["Social media", "Media relations", "Community outreach", "Storytelling"],
          correctAnswer: 1,
          explanation: "Media relations involves building and maintaining relationships with journalists and media outlets."
        },
        {
          id: 20,
          question: "What plans social media content timing?",
          options: ["Platform selection", "Content calendars", "Engagement strategy", "Community management"],
          correctAnswer: 1,
          explanation: "Content calendars plan what content will be posted when across social media platforms."
        }
      ]
    },
    {
      id: 6,
      title: "Policy, Planning, and Urban Agriculture Advocacy",
      completed: false,
      content: `# Module 6: Policy, Planning, and Urban Agriculture Advocacy

Navigate the policy landscape and develop advocacy strategies to support and expand urban agriculture. Learn to influence policy, secure resources, and build supportive networks for urban farming initiatives.

## **Understanding Urban Agriculture Policy**

### **Policy Analysis Framework**

**Levels of Government Influence:**
- Municipal bylaws and zoning regulations
- County health and agricultural codes
- State agricultural and water policies
- Federal agricultural and food policies
- International trade and standards

**Key Policy Areas:**
- Land use and zoning ordinances
- Water rights and usage regulations
- Waste management and composting rules
- Food safety and processing regulations
- Business licensing and tax policies

**Policy Analysis Process:**
- Current regulation assessment
- Impact analysis on urban farming
- Gap identification and opportunity mapping
- Stakeholder position analysis
- Policy change feasibility assessment

### **Zoning and Land Use Policy**

**Current Zoning Categories:**
- Residential zoning restrictions
- Commercial zoning opportunities
- Agricultural zoning designations
- Mixed-use zoning possibilities
- Special use permit processes

**Zoning Reform Strategies:**
- Urban agriculture zoning category creation
- Accessory use allowance expansion
- Setback requirement adjustments
- Height restriction modifications
- Density bonus provisions

**Land Access Policy Tools:**
- Land banking strategies
- Community land trust models
- Long-term lease agreements
- Vacant lot activation programs
- Public land utilization policies

## **Advocacy Strategy Development**

### **Advocacy Campaign Planning**

**Campaign Goal Setting:**
- Policy change objective definition
- Timeline and milestone planning
- Resource requirement assessment
- Stakeholder alignment strategies
- Success measurement indicators

**Coalition Building:**
- Partner organization identification
- Common agenda development
- Role and responsibility allocation
- Communication protocol establishment
- Decision-making structure creation

**Message Development:**
- Problem statement articulation
- Solution proposal formulation
- Benefit communication strategies
- Counter-argument preparation
- Personal story integration

### **Policy Maker Engagement**

**Relationship Building:**
- Elected official mapping
- Staff relationship development
- Department liaison identification
- Regular communication schedules
- Information sharing protocols

**Effective Communication Methods:**
- Policy brief development
- Data-driven argument construction
- Personal testimony organization
- Site visit coordination
- Public hearing preparation

**Decision-Maker Education:**
- Urban agriculture benefits documentation
- Economic impact data collection
- Success case study compilation
- Best practice sharing
- Peer city policy examples

## **Funding and Resource Development**

### **Public Funding Opportunities**

**Government Grant Programs:**
- USDA urban agriculture grants
- EPA environmental justice funding
- HUD community development grants
- State agricultural development funds
- Municipal sustainability initiatives

**Tax Incentive Programs:**
- Property tax abatement options
- Business improvement districts
- Enterprise zone benefits
- Green infrastructure incentives
- Historic preservation tax credits

**Public-Private Partnerships:**
- Corporate sponsorship models
- Foundation partnership development
- Community benefit agreements
- Service exchange arrangements
- Co-investment structures

### **Alternative Financing Models**

**Community Investment Tools:**
- Community-supported agriculture expansion
- Farm membership programs
- Community bond offerings
- Investment cooperative formation
- Peer-to-peer lending networks

**Crowdfunding Strategies:**
- Reward-based campaign planning
- Equity crowdfunding compliance
- Donation campaign management
- Matching fund opportunity utilization
- Campaign promotion techniques

**Social Enterprise Financing:**
- Program-related investments
- Social impact bonds
- Mission-related investing
- Community development finance
- Green banking products

## **Food System Planning Integration**

### **Comprehensive Food Planning**

**Food System Assessment:**
- Food access mapping
- Production capacity analysis
- Distribution system evaluation
- Processing infrastructure assessment
- Waste stream analysis

**Urban Agriculture Integration:**
- Food production area designation
- Distribution network planning
- Processing facility siting
- Market location optimization
- Composting system integration

**Implementation Strategies:**
- Phased implementation planning
- Public-private partnership models
- Community engagement processes
- Monitoring and evaluation systems
- Adaptive management approaches

### **Climate Resilience Planning**

**Urban Agriculture Climate Benefits:**
- Heat island mitigation quantification
- Stormwater management contribution
- Carbon sequestration potential
- Biodiversity enhancement
- Energy use reduction

**Climate Adaptation Integration:**
- Extreme weather resilience planning
- Water conservation system design
- Crop diversification for climate resilience
- Infrastructure climate-proofing
- Emergency food system planning

**Policy Alignment Strategies:**
- Climate action plan integration
- Sustainability plan coordination
- Resilience strategy alignment
- Green infrastructure planning
- Environmental justice consideration

## **Research and Evaluation**

### **Urban Agriculture Research**

**Research Priority Identification:**
- Production system optimization
- Economic viability assessment
- Social impact measurement
- Environmental benefit quantification
- Policy effectiveness evaluation

**Research Partnership Development:**
- University collaboration models
- Community-based research protocols
- Citizen science program design
- Data sharing agreements
- Research translation strategies

**Knowledge Management:**
- Research database development
- Best practice documentation
- Case study collection
- Lesson learned sharing
- Knowledge dissemination systems

### **Program Evaluation Design**

**Evaluation Framework Development:**
- Logic model creation
- Indicator selection and definition
- Data collection method design
- Analysis protocol development
- Reporting format planning

**Impact Measurement:**
- Social impact assessment
- Economic impact analysis
- Environmental impact measurement
- Health outcome evaluation
- Educational effectiveness assessment

**Continuous Improvement Systems:**
- Feedback loop establishment
- Data-driven decision making
- Program adaptation processes
- Stakeholder input integration
- Improvement cycle implementation

## **Network Building and Collaboration**

### **Local and Regional Networks**

**Producer Network Development:**
- Information sharing systems
- Collective marketing opportunities
- Bulk purchasing cooperatives
- Equipment sharing programs
- Peer learning communities

**Food Policy Council Engagement:**
- Council structure understanding
- Participation strategy development
- Policy recommendation formulation
- Coalition building within councils
- Leadership opportunity identification

**Cross-Sector Collaboration:**
- Health sector partnership development
- Education system integration
- Business community engagement
- Environmental organization alignment
- Social service agency collaboration

### **National and International Networks**

**Professional Association Participation:**
- Conference attendance strategies
- Committee involvement opportunities
- Publication contribution planning
- Leadership role development
- Knowledge exchange participation

**Learning Exchange Programs:**
- Site visit planning and hosting
- Technical assistance exchange
- Mentor relationship development
- Best practice study tours
- International knowledge sharing

**Advocacy Network Building:**
- National policy campaign coordination
- Resource sharing systems
- Collective voice development
- Strategic alliance formation
- Movement building participation

Remember: Effective policy engagement and advocacy require understanding both the technical aspects of policy and the political processes that create change, combined with strong relationships and compelling evidence of urban agriculture's benefits.`,
      
      quiz: [
        {
          id: 1,
          question: "What level regulates land use zoning?",
          options: ["Federal", "State", "Municipal", "International"],
          correctAnswer: 2,
          explanation: "Municipal governments typically control land use zoning through local ordinances."
        },
        {
          id: 2,
          question: "What policy tool creates community-owned land?",
          options: ["Land banking", "Community land trust", "Lease agreements", "Zoning changes"],
          correctAnswer: 1,
          explanation: "Community land trusts create permanently affordable, community-controlled land access."
        },
        {
          id: 3,
          question: "What builds alliances for policy change?",
          options: ["Coalition building", "Message development", "Relationship building", "Campaign planning"],
          correctAnswer: 0,
          explanation: "Coalition building brings together diverse organizations to support shared policy goals."
        },
        {
          id: 4,
          question: "What USDA program funds urban farms?",
          options: ["Urban agriculture grants", "Crop insurance", "Commodity programs", "Export assistance"],
          correctAnswer: 0,
          explanation: "USDA offers specific grant programs to support urban agriculture initiatives."
        },
        {
          id: 5,
          question: "What maps food access in communities?",
          options: ["Food system assessment", "Zoning analysis", "Policy review", "Stakeholder analysis"],
          correctAnswer: 0,
          explanation: "Food system assessments often include mapping food access to identify underserved areas."
        },
        {
          id: 6,
          question: "What reduces urban heat islands?",
          options: ["Climate benefit", "Economic impact", "Social benefit", "Educational value"],
          correctAnswer: 0,
          explanation: "Urban agriculture provides climate benefits including heat island mitigation through vegetation."
        },
        {
          id: 7,
          question: "What measures program effectiveness?",
          options: ["Research", "Evaluation", "Advocacy", "Planning"],
          correctAnswer: 1,
          explanation: "Program evaluation systematically assesses effectiveness and impact of initiatives."
        },
        {
          id: 8,
          question: "What involves community in research?",
          options: ["University research", "Community-based research", "Government studies", "Industry research"],
          correctAnswer: 1,
          explanation: "Community-based research engages community members as partners in the research process."
        },
        {
          id: 9,
          question: "What network allows bulk purchasing?",
          options: ["Producer network", "Policy council", "Professional association", "Learning exchange"],
          correctAnswer: 0,
          explanation: "Producer networks often establish bulk purchasing cooperatives to reduce input costs."
        },
        {
          id: 10,
          question: "What shares international best practices?",
          options: ["Learning exchanges", "Professional associations", "Policy campaigns", "Research partnerships"],
          correctAnswer: 0,
          explanation: "Learning exchange programs facilitate sharing of best practices across regions and countries."
        },
        {
          id: 11,
          question: "What allows agriculture in residential areas?",
          options: ["Zoning reform", "Land banking", "Tax incentives", "Grants"],
          correctAnswer: 0,
          explanation: "Zoning reform can modify regulations to permit agriculture in residential zones."
        },
        {
          id: 12,
          question: "What develops shared policy messages?",
          options: ["Coalition building", "Message development", "Relationship building", "Campaign planning"],
          correctAnswer: 1,
          explanation: "Message development creates consistent, compelling communication about policy priorities."
        },
        {
          id: 13,
          question: "What reduces property taxes for farms?",
          options: ["Grants", "Tax abatement", "Crowdfunding", "Bonds"],
          correctAnswer: 1,
          explanation: "Property tax abatement programs can reduce taxes for urban agricultural uses."
        },
        {
          id: 14,
          question: "What analyzes food distribution systems?",
          options: ["Food system assessment", "Policy analysis", "Advocacy planning", "Network building"],
          correctAnswer: 0,
          explanation: "Comprehensive food system assessments evaluate all components including distribution."
        },
        {
          id: 15,
          question: "What plans for extreme weather?",
          options: ["Climate adaptation", "Zoning reform", "Funding development", "Research planning"],
          correctAnswer: 0,
          explanation: "Climate adaptation planning prepares urban farms for extreme weather events and changing conditions."
        },
        {
          id: 16,
          question: "What creates program theory models?",
          options: ["Logic models", "Evaluation frameworks", "Research protocols", "Policy briefs"],
          correctAnswer: 0,
          explanation: "Logic models visually map how program activities lead to intended outcomes and impacts."
        },
        {
          id: 17,
          question: "What engages diverse organizations?",
          options: ["Cross-sector collaboration", "Producer networks", "Policy councils", "Professional associations"],
          correctAnswer: 0,
          explanation: "Cross-sector collaboration brings together organizations from different sectors around shared goals."
        },
        {
          id: 18,
          question: "What hosts visiting farmers?",
          options: ["Learning exchanges", "Conferences", "Workshops", "Research projects"],
          correctAnswer: 0,
          explanation: "Learning exchanges often include hosting visiting farmers to share knowledge and experiences."
        },
        {
          id: 19,
          question: "What requires special permission?",
          options: ["Special use permits", "Zoning categories", "Tax incentives", "Grants"],
          correctAnswer: 0,
          explanation: "Special use permits allow specific uses in zones where they aren't typically permitted."
        },
        {
          id: 20,
          question: "What shows program connections to outcomes?",
          options: ["Logic models", "Evaluation plans", "Research proposals", "Policy analysis"],
          correctAnswer: 0,
          explanation: "Logic models diagrammatically show how program activities connect to outputs and outcomes."
        }
      ]
    }
  ],
  
  // 3. FINAL EXAM STRUCTURE
  finalExam: {
    id: "urban-farming-diploma-exam",
    title: "Urban Farming Diploma Final Exam",
    description: "Comprehensive exam covering all 6 advanced modules. 40 questions testing mastery of urban farming systems design, management, and advocacy.",
    passingScore: 75,
    timeLimit: 90, // minutes
    
    questions: [
      {
        id: 1,
        module: 1,
        question: "What design strategy maximizes productivity in limited urban space?",
        options: ["Horizontal expansion", "Vertical integration", "Single cropping", "Ornamental design"],
        correctAnswer: 1,
        explanation: "Module 1 emphasizes vertical integration to maximize three-dimensional space use in urban environments."
      },
      {
        id: 2,
        module: 1,
        question: "Which hydroponic system is best for leafy greens?",
        options: ["Deep Water Culture", "Nutrient Film Technique", "Aeroponics", "Wick systems"],
        correctAnswer: 1,
        explanation: "Module 1 specifies Nutrient Film Technique (NFT) as ideal for shallow-rooted leafy greens."
      },
      {
        id: 3,
        module: 2,
        question: "What planting method uses hexagonal spacing?",
        options: ["Square foot", "Biointensive", "French intensive", "Traditional row"],
        correctAnswer: 1,
        explanation: "Module 2 describes biointensive methods using hexagonal spacing for maximum density."
      },
      {
        id: 4,
        module: 2,
        question: "What season extension uses automatic vents?",
        options: ["Row covers", "Advanced cold frames", "Wall-of-water", "Greenhouses"],
        correctAnswer: 1,
        explanation: "Module 2 mentions advanced cold frames with automatic temperature-based venting systems."
      },
      {
        id: 5,
        module: 3,
        question: "What mobile chicken system fertilizes gardens?",
        options: ["Stationary coops", "Chicken tractors", "Aviaries", "Vertical coops"],
        correctAnswer: 1,
        explanation: "Module 3 describes chicken tractors as mobile systems that fertilize different garden areas."
      },
      {
        id: 6,
        module: 3,
        question: "Which hive allows honey harvesting without opening?",
        options: ["Langstroth", "Top-bar", "Warre", "Flow hive"],
        correctAnswer: 3,
        explanation: "Module 3 mentions Flow hives with special frames for non-invasive honey harvesting."
      },
      {
        id: 7,
        module: 4,
        question: "What revenue comes from teaching?",
        options: ["Production", "Educational", "Service", "Experience"],
        correctAnswer: 1,
        explanation: "Module 4 categorizes workshop income as educational revenue."
      },
      {
        id: 8,
        module: 4,
        question: "What analysis finds when costs equal revenue?",
        options: ["Cash flow", "Break-even", "Balance sheet", "Profit/loss"],
        correctAnswer: 1,
        explanation: "Module 4 explains break-even analysis identifies when total revenue covers total costs."
      },
      {
        id: 9,
        module: 5,
        question: "Who are immediate neighbors considered?",
        options: ["Customers", "Stakeholders", "Employees", "Visitors"],
        correctAnswer: 1,
        explanation: "Module 5 identifies immediate neighbors as key stakeholders in community engagement."
      },
      {
        id: 10,
        module: 5,
        question: "What program matches volunteers by skills?",
        options: ["General", "Skill-based", "Corporate", "School"],
        correctAnswer: 1,
        explanation: "Module 5 describes skill-based volunteer matching for maximum impact."
      },
      {
        id: 11,
        module: 6,
        question: "What level controls zoning regulations?",
        options: ["Federal", "State", "Municipal", "International"],
        correctAnswer: 2,
        explanation: "Module 6 states municipal governments control local land use zoning."
      },
      {
        id: 12,
        module: 6,
        question: "What creates community-owned land access?",
        options: ["Land banking", "Community land trust", "Leases", "Zoning"],
        correctAnswer: 1,
        explanation: "Module 6 explains community land trusts as tools for permanent community land control."
      },
      {
        id: 13,
        module: 1,
        question: "What integrates fish and plant production?",
        options: ["Hydroponics", "Aquaponics", "Aeroponics", "Soil-based"],
        correctAnswer: 1,
        explanation: "Module 1 describes aquaponics as integrated fish and plant production systems."
      },
      {
        id: 14,
        module: 1,
        question: "What Brooklyn farm uses rooftops?",
        options: ["Brooklyn Grange", "Gotham Greens", "Urban Harvest", "City Farm"],
        correctAnswer: 0,
        explanation: "Module 1 case study features Brooklyn Grange's rooftop farming operations."
      },
      {
        id: 15,
        module: 2,
        question: "What irrigation method reduces evaporation?",
        options: ["Drip", "Subsurface", "Sprinkler", "Hand"],
        correctAnswer: 1,
        explanation: "Module 2 explains subsurface irrigation reduces evaporation by burying water lines."
      },
      {
        id: 16,
        module: 2,
        question: "What composting uses fermentation?",
        options: ["Hot", "Bokashi", "Vermicompost", "Johnson-Su"],
        correctAnswer: 1,
        explanation: "Module 2 mentions Bokashi as fermentation-based composting."
      },
      {
        id: 17,
        module: 3,
        question: "What small mammal is cultural food?",
        options: ["Rabbits", "Guinea pigs", "Snails", "Mealworms"],
        correctAnswer: 1,
        explanation: "Module 3 notes guinea pigs as traditional food in some cultures."
      },
      {
        id: 18,
        module: 3,
        question: "What fish needs cool water?",
        options: ["Tilapia", "Trout", "Goldfish", "Crayfish"],
        correctAnswer: 1,
        explanation: "Module 3 specifies trout require cooler, oxygenated water systems."
      },
      {
        id: 19,
        module: 4,
        question: "What cost varies with production?",
        options: ["Fixed", "Variable", "Capital", "Overhead"],
        correctAnswer: 1,
        explanation: "Module 4 defines variable costs as changing with production volume."
      },
      {
        id: 20,
        module: 4,
        question: "What sets prices by customer value?",
        options: ["Cost-plus", "Market-based", "Value-based", "Dynamic"],
        correctAnswer: 2,
        explanation: "Module 4 describes value-based pricing based on perceived customer value."
      },
      {
        id: 21,
        module: 5,
        question: "What aligns farm education with schools?",
        options: ["Curriculum alignment", "Teacher training", "Student activities", "Assessment"],
        correctAnswer: 0,
        explanation: "Module 5 emphasizes curriculum alignment with formal education standards."
      },
      {
        id: 22,
        module: 5,
        question: "What designs multi-sensory gardens?",
        options: ["Universal design", "Sensory gardens", "ADA compliance", "Adaptive tools"],
        correctAnswer: 1,
        explanation: "Module 5 mentions sensory garden design for therapeutic and inclusive experiences."
      },
      {
        id: 23,
        module: 6,
        question: "What builds policy alliances?",
        options: ["Coalition building", "Message development", "Relationship building", "Campaign planning"],
        correctAnswer: 0,
        explanation: "Module 6 highlights coalition building for effective policy advocacy."
      },
      {
        id: 24,
        module: 6,
        question: "What USDA program supports urban farms?",
        options: ["Urban agriculture grants", "Crop insurance", "Commodity programs", "Export assistance"],
        correctAnswer: 0,
        explanation: "Module 6 identifies USDA urban agriculture grants as key funding sources."
      },
      {
        id: 25,
        module: 1,
        question: "What analyzes sunlight patterns first?",
        options: ["Site assessment", "Soil testing", "Community survey", "Budget planning"],
        correctAnswer: 0,
        explanation: "Module 1 puts sunlight analysis first in site assessment framework."
      },
      {
        id: 26,
        module: 1,
        question: "What model involves weekly boxes?",
        options: ["CSA", "Restaurant supply", "Educational", "Technology"],
        correctAnswer: 0,
        explanation: "Module 1 describes Community Supported Agriculture with weekly box deliveries."
      },
      {
        id: 27,
        module: 2,
        question: "What IPM uses predator insects?",
        options: ["Cultural", "Biological", "Physical", "Chemical"],
        correctAnswer: 1,
        explanation: "Module 2 categorizes predator introduction as biological control in IPM."
      },
      {
        id: 28,
        module: 2,
        question: "What captures building exhaust heat?",
        options: ["Solar thermal", "Waste heat", "Geothermal", "Compost"],
        correctAnswer: 1,
        explanation: "Module 2 mentions waste heat utilization from building systems."
      },
      {
        id: 29,
        module: 3,
        question: "What insect processes waste quickly?",
        options: ["Mealworms", "Black soldier fly", "Crickets", "Butterflies"],
        correctAnswer: 1,
        explanation: "Module 3 notes black soldier fly larvae efficiently process organic waste."
      },
      {
        id: 30,
        module: 3,
        question: "What regulation addresses animal noise?",
        options: ["Zoning", "Noise ordinances", "Health codes", "Processing laws"],
        correctAnswer: 1,
        explanation: "Module 3 identifies noise ordinances as regulating urban livestock sounds."
      },
      {
        id: 31,
        module: 4,
        question: "What revenue comes from consulting?",
        options: ["Production", "Educational", "Service", "Experience"],
        correctAnswer: 2,
        explanation: "Module 4 classifies consulting income as service-based revenue."
      },
      {
        id: 32,
        module: 4,
        question: "What financial statement tracks cash?",
        options: ["Balance sheet", "Cash flow", "Income statement", "Production report"],
        correctAnswer: 1,
        explanation: "Module 4 explains cash flow statements track actual cash movements."
      },
      {
        id: 33,
        module: 5,
        question: "What program involves multiple generations?",
        options: ["Youth", "Family gardening", "School-based", "Summer camp"],
        correctAnswer: 1,
        explanation: "Module 5 describes family gardening as intergenerational programming."
      },
      {
        id: 34,
        module: 5,
        question: "What adjusts fees by income?",
        options: ["Scholarships", "Sliding scale", "Barter", "Free"],
        correctAnswer: 1,
        explanation: "Module 5 mentions sliding scale fees based on ability to pay."
      },
      {
        id: 35,
        module: 6,
        question: "What maps food access?",
        options: ["Food system assessment", "Zoning analysis", "Policy review", "Stakeholder analysis"],
        correctAnswer: 0,
        explanation: "Module 6 includes food access mapping in comprehensive food system assessments."
      },
      {
        id: 36,
        module: 6,
        question: "What plans for extreme weather?",
        options: ["Climate adaptation", "Zoning reform", "Funding", "Research"],
        correctAnswer: 0,
        explanation: "Module 6 discusses climate adaptation planning for urban agriculture resilience."
      },
      {
        id: 37,
        module: 1,
        question: "What measures environmental impact?",
        options: ["Carbon footprint", "Social metrics", "Economic viability", "Educational outcomes"],
        correctAnswer: 0,
        explanation: "Module 1 includes carbon footprint in environmental impact tracking."
      },
      {
        id: 38,
        module: 2,
        question: "What uses capillary action?",
        options: ["NFT", "DWC", "Wick systems", "Aeroponics"],
        correctAnswer: 2,
        explanation: "Module 2 describes wick systems using capillary action without pumps."
      },
      {
        id: 39,
        module: 3,
        question: "What bee product is antimicrobial?",
        options: ["Honey", "Propolis", "Beeswax", "Royal jelly"],
        correctAnswer: 1,
        explanation: "Module 3 notes propolis has antimicrobial properties for tinctures."
      },
      {
        id: 40,
        module: 4,
        question: "What manages input inventory?",
        options: ["Production planning", "Inventory management", "Quality control", "Labor training"],
        correctAnswer: 1,
        explanation: "Module 4 covers inventory management for farm inputs and supplies."
      }
    ]
  }
};

export default urbanFarmingDiploma;
