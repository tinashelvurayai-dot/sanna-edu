// Agricultural Engineering (Diploma) - Complete Course Data
export const agriculturalEngineeringDiploma = {
  // COURSE METADATA
  id: "agricultural-engineering-diploma",
  title: "Agricultural Engineering (Diploma)",
  description: "Advanced engineering principles applied to agriculture. Learn irrigation system design, machinery operation, farm structures, renewable energy applications, and sustainable engineering solutions for modern farming.",
  duration: "8 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  icon: "🚜",
  badge: "Diploma",
  prerequisite: "Farming Techniques (Certificate) or equivalent knowledge",
  
  // MODULES ARRAY
  modules: [
    {
      id: 1,
      title: "Irrigation System Design and Engineering",
      content: `# Module 1: Irrigation System Design and Engineering

## Engineering Efficient Water Systems
Agricultural engineering transforms how we deliver water to crops. This module covers the design principles behind efficient irrigation systems that maximize water use while minimizing waste.

### Water Requirements and Calculations
Understanding crop water needs is fundamental to irrigation design:

**Evapotranspiration (ET)** - This combines evaporation from soil and transpiration from plants. Engineers use ET rates to determine irrigation schedules.

**Crop Coefficient (Kc)** - Each crop has a coefficient that adjusts ET values. For example:
- Early growth stage: Kc = 0.3-0.4
- Mid-season: Kc = 0.8-1.0
- Late season: Kc = 0.6-0.7

**Calculating Water Requirements**:
Daily water need = Reference ET × Crop Coefficient
Weekly water need = Daily need × 7 days

### Irrigation System Types and Selection
Engineers choose systems based on crop type, topography, and water availability:

1. **Surface Irrigation Systems**
   - **Furrow Irrigation**: Water flows in small channels between crop rows
   - **Border Irrigation**: Water flows between parallel borders or ridges
   - **Basin Irrigation**: Fields divided into level basins flooded with water

2. **Pressurized Irrigation Systems**
   - **Sprinkler Systems**: Overhead water application
   - **Center Pivot**: Rotating systems for large circular fields
   - **Drip/Trickle Irrigation**: Precise water delivery to root zones

### Drip Irrigation System Components
Modern drip systems include these engineered components:

**Water Source** - Well, reservoir, or municipal supply
**Pump Station** - Provides pressure for system operation
**Filters** - Sand, screen, or disc filters to prevent clogging
**Pressure Regulators** - Maintain consistent pressure throughout system
**Mainlines/Submains** - PVC or polyethylene pipes for water distribution
**Laterals** - Smaller tubes delivering water to emitters
**Emitters/Drippers** - Devices controlling water release rate

### Hydraulic Design Principles
Proper hydraulic design ensures uniform water distribution:

**Pressure Requirements** - Drip systems typically need 10-30 psi
**Flow Rate Calculations** - Based on emitter spacing and flow rates
**Pipe Sizing** - Determined by flow rate and friction loss calculations
**Valve Selection** - Manual or automated control valves

### System Layout and Planning
Engineered irrigation layouts consider:

**Field Topography** - Slope affects water flow and pressure
**Crop Spacing** - Determines lateral and emitter placement
**Water Source Location** - Minimizes pipe lengths and costs
**Zoning** - Dividing system into manageable sections
**Control Systems** - Manual, timer-based, or sensor-activated

### Filtration and Water Treatment
Protecting irrigation equipment requires:

**Sediment Filters** - Remove sand and silt particles
**Screen Filters** - Capture smaller organic matter
**Disc Filters** - Handle varying water qualities
**Chemical Injection** - For pH adjustment or fertilizer application
**Backwashing Systems** - Automated filter cleaning

### Pump Selection and Sizing
Choosing the right pump involves:

**Total Dynamic Head (TDH)** - Sum of elevation lift, friction loss, and pressure requirements
**Flow Rate Requirements** - Based on system design and crop needs
**Pump Types**:
- Centrifugal pumps for most applications
- Submersible pumps for deep wells
- Turbine pumps for high-volume needs

### Automation and Control Systems
Modern irrigation uses technology for efficiency:

**Timer Controllers** - Basic scheduled operation
**Soil Moisture Sensors** - Trigger irrigation based on actual need
**Weather-Based Controllers** - Adjust schedules using weather data
**Remote Monitoring** - Mobile or computer-based system control
**Flow Meters** - Monitor water usage and detect leaks

### Maintenance and Troubleshooting
Regular maintenance ensures system longevity:

**Weekly Checks** - Pressure readings, filter condition, emitter flow
**Monthly Tasks** - Flushing laterals, checking valves
**Seasonal Maintenance** - Winterization, pump servicing
**Common Problems**:
- Clogged emitters (clean or replace)
- Pressure variations (check regulators)
- Leaks (locate and repair promptly)

### Water Conservation Engineering
Engineers design for maximum efficiency:

**Scheduling Optimization** - Water when evaporation is lowest
**Distribution Uniformity** - Aim for 85% or higher efficiency
**Rainwater Harvesting** - Collect and store rainwater for irrigation
**Recycled Water Systems** - Treat and reuse agricultural wastewater

### Economic Considerations
Engineering decisions balance performance and cost:

**Initial Investment** - Equipment and installation costs
**Operating Costs** - Energy, maintenance, repairs
**Water Savings** - Reduced consumption offsets costs
**Labor Reduction** - Automated systems save time
**Yield Improvement** - Better water management increases production

Remember, good irrigation engineering matches the system to specific farm conditions while maximizing efficiency and productivity.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does ET stand for in irrigation engineering?",
          options: [
            "Evapotranspiration",
            "Estimated Time",
            "Energy Transfer",
            "Equipment Test"
          ],
          correctAnswer: 0,
          explanation: "ET stands for Evapotranspiration, which combines evaporation from soil and transpiration from plants to calculate water needs."
        },
        {
          id: 2,
          question: "What is the crop coefficient (Kc) used for?",
          options: [
            "Adjusting ET values for specific crops",
            "Measuring soil compaction",
            "Calculating fertilizer amounts",
            "Determining pipe sizes"
          ],
          correctAnswer: 0,
          explanation: "The crop coefficient adjusts evapotranspiration values to match the specific water needs of different crops at various growth stages."
        },
        {
          id: 3,
          question: "Which irrigation system uses rotating arms for circular fields?",
          options: [
            "Center pivot",
            "Drip irrigation",
            "Furrow irrigation",
            "Border irrigation"
          ],
          correctAnswer: 0,
          explanation: "Center pivot systems use rotating arms to irrigate large circular fields efficiently."
        },
        {
          id: 4,
          question: "What component maintains consistent pressure in drip systems?",
          options: [
            "Pressure regulators",
            "Flow meters",
            "Filters",
            "Control valves"
          ],
          correctAnswer: 0,
          explanation: "Pressure regulators maintain consistent water pressure throughout the irrigation system for uniform water distribution."
        },
        {
          id: 5,
          question: "What do laterals do in drip irrigation systems?",
          options: [
            "Deliver water to emitters",
            "Filter the water supply",
            "Measure water flow",
            "Control system timing"
          ],
          correctAnswer: 0,
          explanation: "Laterals are the smaller tubes that branch from mainlines to deliver water directly to emitters or drippers."
        },
        {
          id: 6,
          question: "What is TDH in pump selection?",
          options: [
            "Total Dynamic Head",
            "Time Delay Hydraulics",
            "Temperature Density Height",
            "Turbine Design Help"
          ],
          correctAnswer: 0,
          explanation: "TDH stands for Total Dynamic Head, which is the sum of elevation lift, friction loss, and pressure requirements for pump sizing."
        },
        {
          id: 7,
          question: "What type of filter uses rotating discs?",
          options: [
            "Disc filters",
            "Screen filters",
            "Sand filters",
            "Cartridge filters"
          ],
          correctAnswer: 0,
          explanation: "Disc filters use stacked discs with grooves that trap particles, and they can be backwashed for cleaning."
        },
        {
          id: 8,
          question: "What triggers irrigation in sensor-based systems?",
          options: [
            "Soil moisture levels",
            "Time of day only",
            "Farmer's decision",
            "Cloud cover"
          ],
          correctAnswer: 0,
          explanation: "Soil moisture sensors trigger irrigation when soil moisture drops below predetermined levels, ensuring water is applied only when needed."
        },
        {
          id: 9,
          question: "What is distribution uniformity in irrigation?",
          options: [
            "How evenly water is applied across field",
            "Pipe diameter consistency",
            "Pressure stability",
            "Filter efficiency"
          ],
          correctAnswer: 0,
          explanation: "Distribution uniformity measures how evenly water is applied across the entire irrigated area, with higher percentages indicating better efficiency."
        },
        {
          id: 10,
          question: "What should be checked weekly in irrigation maintenance?",
          options: [
            "Pressure readings and filter condition",
            "Pipe material degradation",
            "Pump motor bearings",
            "Controller programming"
          ],
          correctAnswer: 0,
          explanation: "Weekly checks should include pressure readings, filter condition, and emitter flow to ensure proper system operation."
        },
        {
          id: 11,
          question: "What irrigation method is best for sloped fields?",
          options: [
            "Drip irrigation",
            "Furrow irrigation",
            "Basin irrigation",
            "Flood irrigation"
          ],
          correctAnswer: 0,
          explanation: "Drip irrigation works well on slopes because it delivers water slowly directly to plant roots, minimizing runoff."
        },
        {
          id: 12,
          question: "What does backwashing do in filtration systems?",
          options: [
            "Cleans filters by reversing water flow",
            "Increases water pressure",
            "Adds chemicals to water",
            "Tests system capacity"
          ],
          correctAnswer: 0,
          explanation: "Backwashing cleans filters by reversing water flow to flush out trapped particles, restoring filter efficiency."
        },
        {
          id: 13,
          question: "What type of pump is used for deep wells?",
          options: [
            "Submersible pumps",
            "Centrifugal pumps",
            "Diaphragm pumps",
            "Piston pumps"
          ],
          correctAnswer: 0,
          explanation: "Submersible pumps are designed to operate while submerged, making them ideal for deep well applications."
        },
        {
          id: 14,
          question: "What is the purpose of zoning in irrigation design?",
          options: [
            "Divide system into manageable sections",
            "Separate different water sources",
            "Create crop-specific areas",
            "Mark property boundaries"
          ],
          correctAnswer: 0,
          explanation: "Zoning divides the irrigation system into sections that can be operated independently, allowing different watering schedules for different areas."
        },
        {
          id: 15,
          question: "What measures water usage and detects leaks?",
          options: [
            "Flow meters",
            "Pressure gauges",
            "Moisture sensors",
            "Rain gauges"
          ],
          correctAnswer: 0,
          explanation: "Flow meters measure water volume passing through the system and can help detect leaks by showing unexpected water usage."
        },
        {
          id: 16,
          question: "What is a common emitter problem in drip systems?",
          options: [
            "Clogging",
            "Overheating",
            "Corrosion",
            "Freezing"
          ],
          correctAnswer: 0,
          explanation: "Clogging is a common problem with emitters, caused by sediment, algae, or mineral deposits in the water."
        },
        {
          id: 17,
          question: "What irrigation controller uses weather data?",
          options: [
            "Weather-based controllers",
            "Simple timers",
            "Manual valves",
            "Pressure switches"
          ],
          correctAnswer: 0,
          explanation: "Weather-based controllers adjust irrigation schedules using local weather data to avoid watering before or after rainfall."
        },
        {
          id: 18,
          question: "What is rainwater harvesting?",
          options: [
            "Collecting and storing rainwater",
            "Measuring rain intensity",
            "Diverting river water",
            "Treating wastewater"
          ],
          correctAnswer: 0,
          explanation: "Rainwater harvesting involves collecting rainwater from roofs or other surfaces and storing it for later irrigation use."
        },
        {
          id: 19,
          question: "What should irrigation efficiency aim for?",
          options: [
            "85% or higher",
            "50-60%",
            "70-75%",
            "100% always"
          ],
          correctAnswer: 0,
          explanation: "Well-designed irrigation systems should achieve 85% or higher distribution uniformity for efficient water use."
        },
        {
          id: 20,
          question: "What balances performance and cost in irrigation design?",
          options: [
            "Economic considerations",
            "Maximum water use",
            "Latest technology only",
            "Labor availability"
          ],
          correctAnswer: 0,
          explanation: "Economic considerations help balance system performance with costs, ensuring the design is both effective and affordable."
        }
      ]
    },
    {
      id: 2,
      title: "Agricultural Machinery and Equipment",
      content: `# Module 2: Agricultural Machinery and Equipment

## Engineering Farming Power
Agricultural machinery transforms human labor into mechanical efficiency. This module covers the engineering principles behind farm equipment selection, operation, and maintenance.

### Tractor Fundamentals
Tractors are the power source for most farm operations:

**Types of Tractors**:
- **Utility Tractors**: 45-140 horsepower, versatile for small to medium farms
- **Row Crop Tractors**: High clearance for crop cultivation
- **Orchard Tractors**: Low profile for fruit tree operations
- **Four-Wheel Drive**: Highest power for large-scale farming

**Tractor Components**:
- **Engine**: Diesel engines dominate for torque and durability
- **Transmission**: Manual, power shift, or continuously variable (CVT)
- **Hydraulic System**: Powers implements and attachments
- **Power Take-Off (PTO)**: Transfers engine power to implements
- **Three-Point Hitch**: Standard mounting system for implements

### Tillage Equipment Engineering
Soil preparation machinery design principles:

**Primary Tillage** (deep soil breaking):
- **Moldboard Plows**: Turn soil completely over
- **Disc Plows**: Cut and partially turn soil
- **Chisel Plows**: Break compacted layers without inversion

**Secondary Tillage** (seedbed preparation):
- **Disc Harrows**: Break clods and level soil
- **Field Cultivators**: Finish seedbed preparation
- **Rotary Tillers**: Fine soil preparation for planting

**Conservation Tillage**:
- **No-Till Drills**: Plant directly into undisturbed soil
- **Strip-Till Equipment**: Prepare only planting strips
- **Minimum Tillage**: Reduce soil disturbance while preparing beds

### Planting and Seeding Equipment
Precision planting engineering:

**Seed Metering Systems**:
- **Plate Meters**: Traditional mechanical metering
- **Finger Pickup**: Precise seed spacing for larger seeds
- **Vacuum Meters**: Accurate planting of various seed sizes
- **Belt Meters**: Consistent seed delivery

**Planter Types**:
- **Row Crop Planters**: Precision planting in rows
- **Grain Drills**: Broadcast seeding with depth control
- **Air Seeders**: Pneumatic seed distribution for large areas
- **Transplanters**: Automated planting of seedlings

**Depth Control Mechanisms**:
- **Parallel Linkage**: Maintains consistent depth
- **Press Wheels**: Firm soil around seeds
- **Depth Wheels**: Control planting depth accurately

### Harvesting Machinery Engineering
Harvest equipment design considerations:

**Combine Harvesters** (for grains):
- **Cutting Platform**: Header cuts standing crop
- **Feeding System**: Transfers crop to threshing unit
- **Threshing Cylinder**: Separates grain from stalks
- **Separating System**: Shakers and rotors separate grain
- **Cleaning System**: Fans and sieves clean grain
- **Grain Tank**: Stores harvested grain

**Forage Harvesters**:
- **Cutting Mechanisms**: Rotary or sickle bar cutting
- **Processing Units**: Chop material to consistent length
- **Blower Systems**: Transfer material to wagons

**Specialty Harvesters**:
- **Cotton Pickers**: Mechanical cotton harvesting
- **Potato Diggers**: Lift and separate potatoes from soil
- **Fruit Harvesters**: Gentle handling of delicate fruits

### Sprayer Technology and Design
Precision application engineering:

**Sprayer Types**:
- **Boom Sprayers**: Most common for field crops
- **Airblast Sprayers**: For orchards and vineyards
- **Backpack Sprayers**: Small-scale or spot treatment
- **Aerial Sprayers**: Aircraft application for large areas

**Nozzle Technology**:
- **Flat Fan Nozzles**: Most common for herbicides
- **Hollow Cone Nozzles**: For insecticide/fungicide application
- **Full Cone Nozzles**: For fertilizer application
- **Air Induction Nozzles**: Reduce drift with air bubbles

**Precision Spraying**:
- **Section Control**: Turn off unused boom sections
- **Rate Control**: Adjust application rate based on speed
- **Nozzle Control**: Individual nozzle shutoff
- **GPS Guidance**: Precise application mapping

### Material Handling Equipment
Efficient movement of farm inputs and outputs:

**Loaders and Attachments**:
- **Front-End Loaders**: Versatile material handling
- **Skid Steer Loaders**: Compact maneuverability
- **Attachments**: Buckets, forks, grapples, blades

**Conveying Systems**:
- **Augers**: Move grain vertically and horizontally
- **Belt Conveyors**: Gentle handling of delicate materials
- **Pneumatic Systems**: Move materials with air pressure

**Storage and Handling**:
- **Grain Bins**: Engineered storage with aeration
- **Silos**: Forage and grain storage
- **Bulk Tanks**: Liquid storage and handling

### Machinery Selection Criteria
Engineering approach to equipment choices:

**Capacity Requirements**:
- Acres per hour for field operations
- Tons per hour for harvesting
- Gallons per minute for spraying

**Power Matching**:
- Implement horsepower requirements
- Tractor power availability
- PTO speed compatibility (540 or 1000 RPM)

**Economic Analysis**:
- Initial purchase cost
- Operating costs (fuel, maintenance)
- Expected lifespan and depreciation
- Custom hiring vs. ownership comparison

### Maintenance Engineering
Systematic equipment care:

**Preventive Maintenance Schedule**:
- Daily: Lubrication, fluid checks, cleaning
- Weekly: Filter inspection, belt tension
- Monthly: Battery, tire pressure, hardware
- Seasonally: Complete servicing and adjustments

**Diagnostic Systems**:
- Engine diagnostic codes
- Hydraulic pressure testing
- Electronic monitoring systems
- Vibration analysis for bearings

**Repair vs. Replace Decisions**:
- Cost of repair vs. replacement value
- Downtime considerations
- Availability of parts
- Technology obsolescence

### Safety Engineering
Protecting operators and bystanders:

**Roll-Over Protection (ROPS)**:
- Standard on modern tractors
- Must be used with seat belts
- Saves lives in tractor overturns

**Power Take-Off (PTO) Safety**:
- Shield all rotating PTO shafts
- Never approach running PTO
- Shut off equipment before dismounting

**Implement Safety**:
- Proper hitching procedures
- Transport lighting and marking
- Lockout/tagout for maintenance

### Technology Integration
Modern machinery incorporates advanced systems:

**Precision Agriculture Tools**:
- GPS guidance and auto-steer
- Yield monitoring systems
- Variable rate technology
- Telematics for remote monitoring

**Automation and Robotics**:
- Autonomous tractors
- Robotic milking systems
- Automated feeding equipment
- Drone technology for monitoring

**Data Management**:
- Operation recording and analysis
- Maintenance scheduling software
- Parts inventory management
- Performance benchmarking

### Environmental Considerations
Engineering for sustainability:

**Fuel Efficiency**:
- Engine technology improvements
- Operational efficiency practices
- Alternative fuel options

**Emission Control**:
- Tier 4 emission standards
- Particulate filters
- Selective catalytic reduction

**Noise Reduction**:
- Engine enclosure design
- Muffler technology
- Operator cab insulation

Remember, agricultural machinery engineering balances performance, efficiency, safety, and environmental impact to create sustainable farming systems.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the standard mounting system for tractor implements?",
          options: [
            "Three-point hitch",
            "Quick-attach system",
            "Bolted connection",
            "Hydraulic clamp"
          ],
          correctAnswer: 0,
          explanation: "The three-point hitch is the standard system for attaching implements to tractors, providing stability and control."
        },
        {
          id: 2,
          question: "What does PTO stand for on tractors?",
          options: [
            "Power Take-Off",
            "Primary Tractor Operation",
            "Power Transfer Output",
            "Performance Testing Option"
          ],
          correctAnswer: 0,
          explanation: "PTO stands for Power Take-Off, which transfers engine power to operate implements like mowers, balers, and pumps."
        },
        {
          id: 3,
          question: "What type of plow completely turns soil over?",
          options: [
            "Moldboard plow",
            "Disc plow",
            "Chisel plow",
            "Subsoiler"
          ],
          correctAnswer: 0,
          explanation: "Moldboard plows completely invert the soil, burying crop residue and exposing fresh soil for planting."
        },
        {
          id: 4,
          question: "What planting method disturbs only planting strips?",
          options: [
            "Strip-till",
            "No-till",
            "Conventional tillage",
            "Deep tillage"
          ],
          correctAnswer: 0,
          explanation: "Strip-till equipment prepares only narrow strips where seeds will be planted, leaving most soil undisturbed for erosion control."
        },
        {
          id: 5,
          question: "What seed metering system uses air pressure?",
          options: [
            "Vacuum meters",
            "Plate meters",
            "Finger pickup",
            "Belt meters"
          ],
          correctAnswer: 0,
          explanation: "Vacuum meters use air pressure differences to hold and release individual seeds for precise planting."
        },
        {
          id: 6,
          question: "What separates grain from stalks in a combine?",
          options: [
            "Threshing cylinder",
            "Cutting platform",
            "Cleaning system",
            "Grain tank"
          ],
          correctAnswer: 0,
          explanation: "The threshing cylinder uses rotating bars to separate grain from the stalks and heads through impact and friction."
        },
        {
          id: 7,
          question: "What sprayer type is best for orchards?",
          options: [
            "Airblast sprayers",
            "Boom sprayers",
            "Backpack sprayers",
            "Aerial sprayers"
          ],
          correctAnswer: 0,
          explanation: "Airblast sprayers use powerful fans to propel spray droplets into tree canopies, providing thorough coverage in orchards."
        },
        {
          id: 8,
          question: "What nozzle type reduces drift with air bubbles?",
          options: [
            "Air induction nozzles",
            "Flat fan nozzles",
            "Hollow cone nozzles",
            "Full cone nozzles"
          ],
          correctAnswer: 0,
          explanation: "Air induction nozzles mix air with the spray liquid to create larger droplets containing air bubbles, reducing drift potential."
        },
        {
          id: 9,
          question: "What moves grain vertically in handling systems?",
          options: [
            "Augers",
            "Belt conveyors",
            "Pneumatic systems",
            "Bucket elevators"
          ],
          correctAnswer: 0,
          explanation: "Augers use rotating helical flights inside a tube to move grain both horizontally and vertically in handling systems."
        },
        {
          id: 10,
          question: "What saves lives in tractor overturns?",
          options: [
            "ROPS with seat belt",
            "Wide tires",
            "Low center of gravity",
            "Four-wheel drive"
          ],
          correctAnswer: 0,
          explanation: "Roll-Over Protection Structures (ROPS) with seat belts prevent crushing injuries in tractor overturns when properly used."
        },
        {
          id: 11,
          question: "What PTO speeds are standard on tractors?",
          options: [
            "540 or 1000 RPM",
            "750 or 1500 RPM",
            "360 or 720 RPM",
            "1000 or 2000 RPM"
          ],
          correctAnswer: 0,
          explanation: "Standard PTO speeds are 540 RPM for smaller implements and 1000 RPM for larger, higher-power implements."
        },
        {
          id: 12,
          question: "What is section control in spraying?",
          options: [
            "Turning off unused boom sections",
            "Controlling spray pressure",
            "Adjusting nozzle patterns",
            "Regulating tank mixing"
          ],
          correctAnswer: 0,
          explanation: "Section control automatically turns off spray boom sections that are over already-treated areas or obstacles, reducing chemical waste."
        },
        {
          id: 13,
          question: "What type of harvester chops forage crops?",
          options: [
            "Forage harvester",
            "Combine harvester",
            "Cotton picker",
            "Potato digger"
          ],
          correctAnswer: 0,
          explanation: "Forage harvesters cut and chop forage crops like corn silage or haylage into consistent lengths for storage and feeding."
        },
        {
          id: 14,
          question: "What is telematics in farm machinery?",
          options: [
            "Remote monitoring and data collection",
            "Hydraulic system design",
            "Engine tuning software",
            "GPS signal processing"
          ],
          correctAnswer: 0,
          explanation: "Telematics systems collect and transmit equipment data remotely for monitoring performance, location, and maintenance needs."
        },
        {
          id: 15,
          question: "What emission standard applies to modern diesel engines?",
          options: [
            "Tier 4",
            "Euro 5",
            "EPA Phase 3",
            "Clean Air Act"
          ],
          correctAnswer: 0,
          explanation: "Tier 4 emission standards apply to modern diesel engines, requiring significant reduction of particulate matter and nitrogen oxides."
        },
        {
          id: 16,
          question: "What should be checked daily on machinery?",
          options: [
            "Lubrication and fluid levels",
            "Engine compression",
            "Tire tread depth",
            "Electrical wiring"
          ],
          correctAnswer: 0,
          explanation: "Daily checks should include lubrication points, fluid levels (oil, coolant, hydraulic), and general cleaning to prevent problems."
        },
        {
          id: 17,
          question: "What is variable rate technology?",
          options: [
            "Adjusting inputs based on field conditions",
            "Changing engine RPM",
            "Modifying transmission speeds",
            "Adjusting tire pressure"
          ],
          correctAnswer: 0,
          explanation: "Variable rate technology adjusts the application rate of seeds, fertilizer, or chemicals based on GPS-guided field maps."
        },
        {
          id: 18,
          question: "What is a skid steer loader known for?",
          options: [
            "Compact maneuverability",
            "High lifting capacity",
            "Fast road speed",
            "Low fuel consumption"
          ],
          correctAnswer: 0,
          explanation: "Skid steer loaders are compact and highly maneuverable, able to turn within their own length by skidding their wheels."
        },
        {
          id: 19,
          question: "What is lockout/tagout for?",
          options: [
            "Safety during maintenance",
            "Preventing theft",
            "Weather protection",
            "Transport security"
          ],
          correctAnswer: 0,
          explanation: "Lockout/tagout procedures ensure machinery is de-energized and cannot be started during maintenance to protect workers."
        },
        {
          id: 20,
          question: "What is yield monitoring?",
          options: [
            "Measuring crop harvest in real-time",
            "Checking seed placement",
            "Monitoring fuel consumption",
            "Tracking operator hours"
          ],
          correctAnswer: 0,
          explanation: "Yield monitoring systems measure crop yield in real-time during harvest, creating maps that show field productivity variations."
        }
      ]
    },
    {
      id: 3,
      title: "Farm Structures and Storage Engineering",
      content: `# Module 3: Farm Structures and Storage Engineering

## Engineering the Farm Infrastructure
Properly designed farm structures protect investments, improve efficiency, and enhance safety. This module covers engineering principles for agricultural buildings and storage systems.

### Structural Design Fundamentals
Basic engineering principles for farm structures:

**Load Calculations**:
- **Dead Loads**: Weight of structure itself
- **Live Loads**: Equipment, stored materials, animals
- **Environmental Loads**: Wind, snow, seismic forces
- **Impact Loads**: Machinery operation, animal movement

**Material Selection**:
- **Wood**: Traditional, versatile, requires treatment
- **Steel**: Strong, durable, fire-resistant
- **Concrete**: Excellent for foundations and floors
- **Fabric Structures**: Quick erection, natural light

**Building Codes and Standards**:
- Local building regulations
- Agricultural building exemptions
- Safety standards for electrical and mechanical
- Environmental regulations

### Livestock Housing Engineering
Designing structures for animal welfare and efficiency:

**Dairy Barn Design**:
- **Free Stall Barns**: Individual resting areas with common alleys
- **Tie Stall Barns**: Traditional individual stalls
- **Milking Parlors**: Rotary, herringbone, or parallel designs
- **Ventilation Systems**: Natural or mechanical air exchange

**Swine Housing**:
- **Farrowing Rooms**: Temperature-controlled for sows and piglets
- **Nursery Buildings**: Group housing after weaning
- **Finishing Barns**: Growth to market weight
- **Environmental Control**: Heating, cooling, ventilation

**Poultry Houses**:
- **Layer Houses**: Cage or cage-free systems
- **Broiler Houses**: Floor rearing for meat birds
- **Ventilation**: Tunnel or cross-ventilation designs
- **Lighting Control**: Programmable for production optimization

**Beef and Sheep Housing**:
- **Feedlot Design**: Pen layout for efficient feeding
- **Shelter Requirements**: Protection from elements
- **Handling Facilities**: Chutes, gates, scales
- **Manure Management**: Collection and storage systems

### Crop Storage Engineering
Preserving crop quality through proper storage:

**Grain Storage Systems**:
- **Round Steel Bins**: Most common for on-farm storage
- **Flat Storage**: Buildings for large-volume storage
- **Hopper Bottom Bins**: Easy unloading for frequent access
- **Silos**: Tower storage for grain or silage

**Grain Bin Engineering**:
- **Capacity Calculations**: Based on grain density and angle of repose
- **Aeration Systems**: Floor ducts and fans for temperature control
- **Unloading Systems**: Sweep augers and bottom unloaders
- **Safety Features**: Ladders, safety cages, lockout systems

**Forage Storage**:
- **Bunk Silos**: Horizontal concrete structures
- **Tower Silos**: Vertical sealed storage
- **Bale Storage**: Covered storage for hay bales
- **Bag Storage**: Plastic tubes for temporary storage

**Specialty Crop Storage**:
- **Potato Storage**: Humidity and temperature control
- **Fruit Storage**: Controlled atmosphere rooms
- **Onion Storage**: Curing and ventilated storage
- **Root Cellars**: Traditional below-ground storage

### Environmental Control Systems
Maintaining optimal conditions inside structures:

**Ventilation Engineering**:
- **Natural Ventilation**: Ridge and sidewall openings
- **Mechanical Ventilation**: Fans and duct systems
- **Minimum Ventilation**: Winter moisture control
- **Maximum Ventilation**: Summer heat removal

**Heating Systems**:
- **Unit Heaters**: Propane or natural gas
- **Radiant Heating**: Floor or overhead systems
- **Heat Exchangers**: Recover heat from exhaust air
- **Supplemental Heat**: For young animal areas

**Cooling Systems**:
- **Evaporative Cooling**: Pad and fan systems
- **Fogging Systems**: High-pressure water mist
- **Shade Structures**: Natural cooling method
- **Insulation**: Reduce heat gain through structure

### Feed Handling and Processing
Efficient feed management systems:

**Feed Storage**:
- **Silos**: For high-moisture feeds
- **Bins**: For dry feeds and supplements
- **Bunkers**: For large-volume storage
- **Bag Storage**: For specialty feeds

**Feed Processing**:
- **Grinders/Mixers**: Process and blend feed
- **Conveying Systems**: Move feed to animals
- **Automated Feeders**: Programmable delivery
- **Weighing Systems**: Monitor feed consumption

**Feed Delivery**:
- **Total Mixed Ration (TMR)**: Complete diet mixing
- **Component Feeding**: Separate delivery of feed types
- **Free-Choice Feeding**: Constant availability
- **Timed Feeding**: Scheduled delivery

### Manure Management Systems
Engineering solutions for waste handling:

**Collection Systems**:
- **Scrape Systems**: Manual or automated scraping
- **Flush Systems**: Water-based manure removal
- **Alley Scrapers**: Continuous cleaning systems
- **Pit Storage**: Below-floor collection

**Storage Structures**:
- **Lagoons**: Large earthen storage basins
- **Tanks**: Above or below ground storage
- **Ponds**: Settling and storage combination
- **Composting Systems**: Aerobic decomposition

**Treatment and Handling**:
- **Separators**: Solid-liquid separation
- **Aeration Systems**: Odor control
- **Pumping Systems**: Transfer to storage or field
- **Application Equipment**: Field spreading technology

### Greenhouse Engineering
Controlled environment agriculture:

**Structure Types**:
- **Quonset Houses**: Curved roof design
- **Gutter-Connected**: Multiple bay efficiency
- **Sawtooth Design**: Natural ventilation optimization
- **High Tunnels**: Low-cost seasonal protection

**Environmental Controls**:
- **Heating Systems**: Boilers, unit heaters
- **Cooling Systems**: Fans, pads, shade cloth
- **Irrigation**: Overhead, drip, or ebb-and-flow
- **CO2 Enrichment**: Enhanced growth systems

**Growing Systems**:
- **Soil Beds**: Traditional ground growing
- **Benches**: Elevated growing surfaces
- **Hydroponics**: Soilless culture systems
- **Vertical Farming**: Space-efficient stacking

### Farm Workshop Design
Maintenance and repair facilities:

**Layout Planning**:
- **Service Bays**: Space for equipment repair
- **Tool Storage**: Organized tool systems
- **Parts Storage**: Inventory management
- **Wash Bay**: Equipment cleaning area

**Equipment Requirements**:
- **Lifting Equipment**: Hoists and jacks
- **Compressed Air**: Pneumatic tool systems
- **Welding Equipment**: Repair capability
- **Diagnostic Tools**: Electronic testing equipment

**Safety Features**:
- **Fire Protection**: Extinguishers and suppression
- **Ventilation**: Fume removal systems
- **Lighting**: Adequate task lighting
- **Electrical Safety**: GFCI protection, proper wiring

### Energy Efficiency Engineering
Reducing operational costs:

**Insulation Strategies**:
- **Wall and Roof Insulation**: Reduce heat transfer
- **Foundation Insulation**: Prevent ground heat loss
- **Door Seals**: Minimize air infiltration
- **Window Selection**: Energy-efficient glazing

**Renewable Energy Integration**:
- **Solar Systems**: Photovoltaic or thermal
- **Wind Energy**: Small-scale generation
- **Biomass Heating**: Agricultural waste utilization
- **Geothermal**: Ground-source heat pumps

**Lighting Efficiency**:
- **LED Lighting**: Energy-efficient illumination
- **Daylight Harvesting**: Natural light utilization
- **Motion Sensors**: Automatic lighting control
- **Task Lighting**: Focused illumination

### Site Planning and Layout
Strategic farm infrastructure arrangement:

**Traffic Flow**:
- **Equipment Movement**: Wide aisles and turning radius
- **Animal Movement**: Low-stress handling lanes
- **Feed Delivery**: Efficient route planning
- **Manure Handling**: Separation from feed areas

**Expansion Planning**:
- **Modular Design**: Easy addition of units
- **Utility Extensions**: Future service capacity
- **Site Grading**: Proper drainage for expansion
- **Access Roads**: Multiple entry points

**Environmental Considerations**:
- **Setback Requirements**: Distance from property lines
- **Drainage Management**: Surface water control
- **Noise Reduction**: Buffer zones from neighbors
- **Visual Screening**: Aesthetic considerations

Remember, well-engineered farm structures improve efficiency, enhance safety, protect investments, and support sustainable agricultural practices.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What type of load is the weight of the structure itself?",
          options: [
            "Dead load",
            "Live load",
            "Environmental load",
            "Impact load"
          ],
          correctAnswer: 0,
          explanation: "Dead load refers to the permanent weight of the structure itself, including walls, roof, and permanent fixtures."
        },
        {
          id: 2,
          question: "What dairy barn design has individual resting areas?",
          options: [
            "Free stall barns",
            "Tie stall barns",
            "Open barns",
            "Pasture systems"
          ],
          correctAnswer: 0,
          explanation: "Free stall barns provide individual resting areas (stalls) where cows can choose to lie down, with common alleys for movement."
        },
        {
          id: 3,
          question: "What is the most common on-farm grain storage?",
          options: [
            "Round steel bins",
            "Flat storage buildings",
            "Silos",
            "Bag storage"
          ],
          correctAnswer: 0,
          explanation: "Round steel bins are the most common on-farm grain storage due to their efficiency, durability, and relatively low cost."
        },
        {
          id: 4,
          question: "What system controls temperature in grain storage?",
          options: [
            "Aeration systems",
            "Heating systems",
            "Cooling systems",
            "Humidity control"
          ],
          correctAnswer: 0,
          explanation: "Aeration systems use fans to move air through stored grain, controlling temperature and preventing moisture buildup."
        },
        {
          id: 5,
          question: "What ventilation uses ridge and sidewall openings?",
          options: [
            "Natural ventilation",
            "Mechanical ventilation",
            "Forced ventilation",
            "Positive pressure"
          ],
          correctAnswer: 0,
          explanation: "Natural ventilation relies on thermal buoyancy and wind pressure through strategically placed openings in ridge and sidewalls."
        },
        {
          id: 6,
          question: "What cooling system uses water evaporation?",
          options: [
            "Evaporative cooling",
            "Fogging systems",
            "Refrigeration",
            "Heat exchangers"
          ],
          correctAnswer: 0,
          explanation: "Evaporative cooling uses water evaporation to reduce air temperature, typically with wet pads and exhaust fans."
        },
        {
          id: 7,
          question: "What feed delivery mixes all diet components?",
          options: [
            "Total Mixed Ration (TMR)",
            "Component feeding",
            "Free-choice feeding",
            "Timed feeding"
          ],
          correctAnswer: 0,
          explanation: "Total Mixed Ration (TMR) mixes all feed components into a complete diet delivered to animals in measured amounts."
        },
        {
          id: 8,
          question: "What manure storage uses earthen basins?",
          options: [
            "Lagoons",
            "Tanks",
            "Ponds",
            "Pits"
          ],
          correctAnswer: 0,
          explanation: "Lagoons are large earthen basins designed for manure storage and treatment through natural biological processes."
        },
        {
          id: 9,
          question: "What greenhouse design has multiple connected bays?",
          options: [
            "Gutter-connected",
            "Quonset houses",
            "Sawtooth design",
            "High tunnels"
          ],
          correctAnswer: 0,
          explanation: "Gutter-connected greenhouses have multiple bays joined together at the gutters, creating large, efficient growing areas."
        },
        {
          id: 10,
          question: "What workshop safety device protects against electrical shock?",
          options: [
            "GFCI protection",
            "Fire extinguishers",
            "Safety glasses",
            "Ear protection"
          ],
          correctAnswer: 0,
          explanation: "Ground Fault Circuit Interrupter (GFCI) protection automatically shuts off power if electrical current leakage is detected, preventing shocks."
        },
        {
          id: 11,
          question: "What is the angle of repose important for?",
          options: [
            "Grain bin capacity calculations",
            "Roof slope design",
            "Foundation stability",
            "Ventilation efficiency"
          ],
          correctAnswer: 0,
          explanation: "The angle of repose determines how grain settles in storage, affecting capacity calculations and unloading system design."
        },
        {
          id: 12,
          question: "What milking parlor design has cows at an angle?",
          options: [
            "Herringbone",
            "Rotary",
            "Parallel",
            "Tandem"
          ],
          correctAnswer: 0,
          explanation: "Herringbone parlors position cows at an angle (typically 30-45 degrees) to the operator pit for efficient milking."
        },
        {
          id: 13,
          question: "What insulation prevents ground heat loss?",
          options: [
            "Foundation insulation",
            "Wall insulation",
            "Roof insulation",
            "Door seals"
          ],
          correctAnswer: 0,
          explanation: "Foundation insulation installed around the perimeter of a building's foundation prevents heat loss to the ground."
        },
        {
          id: 14,
          question: "What is daylight harvesting?",
          options: [
            "Using natural light to reduce artificial lighting",
            "Collecting rainwater",
            "Solar panel installation",
            "Growing crops in sunlight"
          ],
          correctAnswer: 0,
          explanation: "Daylight harvesting uses sensors to dim or turn off artificial lights when sufficient natural light is available."
        },
        {
          id: 15,
          question: "What is a key consideration in site planning?",
          options: [
            "Traffic flow efficiency",
            "Building color",
            "Roof material",
            "Window style"
          ],
          correctAnswer: 0,
          explanation: "Efficient traffic flow for equipment, animals, and materials is crucial for operational efficiency and safety in farm layout."
        },
        {
          id: 16,
          question: "What type of load includes wind and snow?",
          options: [
            "Environmental loads",
            "Dead loads",
            "Live loads",
            "Impact loads"
          ],
          correctAnswer: 0,
          explanation: "Environmental loads include forces from weather conditions like wind pressure, snow accumulation, and seismic activity."
        },
        {
          id: 17,
          question: "What poultry system houses meat birds?",
          options: [
            "Broiler houses",
            "Layer houses",
            "Breeder houses",
            "Pullet houses"
          ],
          correctAnswer: 0,
          explanation: "Broiler houses are specifically designed for raising meat birds (broilers) from chicks to market weight."
        },
        {
          id: 18,
          question: "What feed processing equipment blends ingredients?",
          options: [
            "Grinders/Mixers",
            "Conveyors",
            "Weighing systems",
            "Automated feeders"
          ],
          correctAnswer: 0,
          explanation: "Grinders/mixers process and blend various feed ingredients into a uniform mixture for animal consumption."
        },
        {
          id: 19,
          question: "What greenhouse system grows plants without soil?",
          options: [
            "Hydroponics",
            "Soil beds",
            "Benches",
            "Vertical farming"
          ],
          correctAnswer: 0,
          explanation: "Hydroponic systems grow plants in nutrient-rich water solutions without soil, allowing precise control of plant nutrition."
        },
        {
          id: 20,
          question: "What renewable energy uses agricultural waste?",
          options: [
            "Biomass heating",
            "Solar systems",
            "Wind energy",
            "Geothermal"
          ],
          correctAnswer: 0,
          explanation: "Biomass heating systems burn agricultural waste products like crop residues or manure to generate heat for farm buildings."
        }
      ]
    },
    {
      id: 4,
      title: "Soil and Water Conservation Engineering",
      content: `# Module 4: Soil and Water Conservation Engineering

## Engineering Sustainable Land Management
Soil and water are fundamental agricultural resources that require careful management. This module covers engineering solutions to prevent erosion, conserve water, and maintain soil health.

### Erosion Processes and Principles
Understanding how erosion occurs:

**Water Erosion Types**:
- **Sheet Erosion**: Uniform removal of thin soil layers
- **Rill Erosion**: Small, concentrated flow channels
- **Gully Erosion**: Large channels that cannot be crossed by machinery
- **Stream Bank Erosion**: Waterway edge erosion

**Wind Erosion Factors**:
- **Soil Texture**: Sandy soils most susceptible
- **Surface Roughness**: Rougher surfaces reduce wind speed
- **Vegetative Cover**: Plants protect soil surface
- **Climate Conditions**: Dry, windy periods increase risk

**Erosion Prediction**:
- **Universal Soil Loss Equation (USLE)**: A = R × K × LS × C × P
- **Revised USLE (RUSLE)**: Updated version with improved factors
- **Wind Erosion Equation (WEQ)**: Similar prediction for wind erosion

### Contour Farming Engineering
Using land shape to control runoff:

**Contour Line Determination**:
- **Survey Methods**: Laser levels or GPS elevation data
- **Contour Interval**: Vertical distance between lines
- **Grade Variation**: Maximum allowable slope changes

**System Design**:
- **Contour Ridges**: Small ridges along contours
- **Contour Bunds**: Earth banks to slow water flow
- **Contour Ditches**: Drainage channels on contours
- **Contour Planting**: Crops planted along contour lines

**Implementation Considerations**:
- **Field Shape Adaptation**: Irregular field adjustments
- **Machinery Operation**: Equipment capability on slopes
- **Maintenance Requirements**: Regular ridge maintenance
- **Effectiveness Range**: Best for 2-10% slopes

### Terrace Engineering
Constructed platforms on sloping land:

**Terrace Types**:
- **Bench Terraces**: Level platforms with steep backslopes
- **Broadbase Terraces**: Gentle slopes for machinery access
- **Grassed Backslope Terraces**: Vegetated steep sections
- **Channel Terraces**: Water collection channels

**Design Calculations**:
- **Vertical Interval**: Height difference between terraces
- **Horizontal Spacing**: Distance between terrace channels
- **Grade Specifications**: Channel slope for water movement
- **Capacity Requirements**: Based on expected runoff

**Construction Methods**:
- **Survey and Staking**: Precise location marking
- **Cut and Fill Calculations**: Soil movement planning
- **Construction Equipment**: Bulldozers, graders, scrapers
- **Compaction Requirements**: For terrace stability

### Waterway Design and Construction
Engineered channels for concentrated flow:

**Waterway Types**:
- **Grassed Waterways**: Vegetated natural-shaped channels
- **Lined Waterways**: Concrete, riprap, or fabric-lined
- **Diversion Channels**: Redirect water away from fields
- **Outlet Structures**: Connection to natural drainage

**Hydraulic Design**:
- **Capacity Calculations**: Based on watershed area
- **Velocity Control**: Non-erosive flow speeds
- **Cross-Section Design**: Trapezoidal or parabolic shapes
- **Grade Determination**: Balance of flow and erosion

**Vegetation Selection**:
- **Grass Species**: Dense, erosion-resistant varieties
- **Establishment Methods**: Seeding, sodding, or sprigging
- **Maintenance Schedule**: Mowing, fertilizing, repair
- **Winter Protection**: Frost heave prevention

### Conservation Tillage Engineering
Reducing soil disturbance:

**Equipment Modifications**:
- **No-Till Drills**: Special planting equipment
- **Strip-Till Implements**: Zone tillage tools
- **Residue Managers**: Handle crop residue during planting
- **Coulter Systems**: Cut through residue without tillage

**System Integration**:
- **Crop Rotation Planning**: Residue management considerations
- **Pest Management**: Adjustments for conservation systems
- **Nutrient Management**: Surface application techniques
- **Equipment Compatibility**: Matching implements to system

**Benefits Quantification**:
- **Soil Organic Matter**: Measurement of improvements
- **Water Infiltration**: Rate testing comparisons
- **Erosion Reduction**: Soil loss measurements
- **Fuel Savings**: Energy efficiency calculations

### Irrigation Water Conservation
Efficient water use engineering:

**System Efficiency Improvements**:
- **Application Efficiency**: Reducing evaporation and runoff
- **Distribution Uniformity**: Even water application
- **Scheduling Optimization**: Matching irrigation to crop needs
- **Leak Detection**: System monitoring and repair

**Advanced Technologies**:
- **Soil Moisture Sensors**: Real-time soil water monitoring
- **Evapotranspiration Controllers**: Weather-based scheduling
- **Variable Rate Irrigation**: Precision water application
- **Remote Monitoring**: System performance tracking

**Water Harvesting Systems**:
- **Rainwater Collection**: Roof and surface runoff capture
- **Micro-catchments**: Small-scale water harvesting
- **Contour Bunds**: Rainwater retention structures
- **Subsurface Dams**: Underground water storage

### Drainage Engineering
Managing excess water:

**Surface Drainage Systems**:
- **Field Drains**: Shallow channels for water removal
- **Land Grading**: Smoothing fields for uniform drainage
- **Crown Design**: Slight elevation in field center
- **Outlet Design**: Connection to main drainage system

**Subsurface Drainage**:
- **Tile Drain Systems**: Perforated pipe networks
- **Depth and Spacing**: Based on soil and crop requirements
- **Installation Methods**: Trenching or plowing-in
- **Outlet Protection**: Preventing erosion at discharge points

**Water Table Management**:
- **Controlled Drainage**: Adjustable outlet structures
- **Subirrigation**: Using drainage system for irrigation
- **Monitoring Wells**: Water table level measurement
- **Regulatory Considerations**: Environmental permits

### Windbreak and Shelterbelt Engineering
Reducing wind erosion and modifying microclimate:

**Design Principles**:
- **Height and Density**: Determining protection distance
- **Orientation**: Perpendicular to prevailing winds
- **Multiple Rows**: Increased effectiveness with more rows
- **Species Selection**: Fast-growing, dense species

**Construction Methods**:
- **Site Preparation**: Weed control and soil improvement
- **Planting Techniques**: Proper spacing and depth
- **Protection Measures**: Tree guards and irrigation
- **Establishment Period**: Critical first few years

**Maintenance Requirements**:
- **Weed Control**: Reducing competition
- **Pruning**: Shape and density management
- **Replacement Planting**: Filling in gaps
- **Pest Management**: Protecting young trees

### Sediment Control Structures
Capturing eroded soil before it leaves the farm:

**Sediment Basins**:
- **Design Capacity**: Based on watershed area
- **Outlet Structures**: Controlled water release
- **Cleanout Access**: For sediment removal
- **Safety Features**: Fencing and warning signs

**Filter Strips**:
- **Width Requirements**: Based on slope and soil type
- **Vegetation Types**: Dense, filtering plant species
- **Location**: Downslope of erosion-prone areas
- **Maintenance**: Regular mowing and replanting

**Check Dams**:
- **Small Gully Control**: Slowing water in erosion channels
- **Materials**: Rock, logs, or manufactured products
- **Spacing**: Based on channel grade
- **Inspection**: Regular monitoring of stability

### Soil Health Engineering
Improving soil physical and biological properties:

**Organic Matter Management**:
- **Cover Crops**: Living soil protection between cash crops
- **Compost Application**: Adding stabilized organic matter
- **Crop Rotation**: Diverse root systems and residues
- **Reduced Tillage**: Preserving soil structure

**Soil Amendment Engineering**:
- **Lime Application**: pH adjustment equipment
- **Gypsum Application**: Improving soil structure
- **Biochar Systems**: Carbon sequestration technology
- **Microbial Inoculants**: Enhancing soil biology

**Monitoring and Assessment**:
- **Soil Testing**: Regular nutrient and pH analysis
- **Infiltration Testing**: Water movement rate measurement
- **Compaction Assessment**: Soil density measurements
- **Biological Activity**: Earthworm counts and respiration tests

### Regulatory and Planning Considerations
Working within legal frameworks:

**Conservation Planning**:
- **Farm Conservation Plans**: Comprehensive management documents
- **Cost-Share Programs**: Government assistance programs
- **Technical Assistance**: Engineering support services
- **Compliance Requirements**: Meeting regulatory standards

**Environmental Regulations**:
- **Erosion Control Permits**: For construction activities
- **Water Quality Regulations**: Nutrient management planning
- **Wetland Protection**: Avoiding protected areas
- **Endangered Species**: Habitat protection considerations

**Economic Analysis**:
- **Cost-Benefit Analysis**: Conservation practice economics
- **Return on Investment**: Long-term profitability assessment
- **Risk Management**: Reducing production risks
- **Property Value Impact**: Land value improvements

Remember, soil and water conservation engineering creates sustainable agricultural systems that protect resources while maintaining productivity for future generations.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What erosion type removes uniform thin soil layers?",
          options: [
            "Sheet erosion",
            "Rill erosion",
            "Gully erosion",
            "Stream bank erosion"
          ],
          correctAnswer: 0,
          explanation: "Sheet erosion removes soil in thin, uniform layers across large areas, often unnoticed until significant topsoil is lost."
        },
        {
          id: 2,
          question: "What does USLE stand for in erosion prediction?",
          options: [
            "Universal Soil Loss Equation",
            "United States Land Evaluation",
            "Universal Soil Life Estimate",
            "Urban Soil Loss Equation"
          ],
          correctAnswer: 0,
          explanation: "USLE stands for Universal Soil Loss Equation, a mathematical model used to predict average annual soil loss from field erosion."
        },
        {
          id: 3,
          question: "What farming practice follows land contours?",
          options: [
            "Contour farming",
            "Terrace farming",
            "Strip cropping",
            "Windbreak planting"
          ],
          correctAnswer: 0,
          explanation: "Contour farming involves performing farming operations along the contour lines of sloping land to reduce runoff and erosion."
        },
        {
          id: 4,
          question: "What are constructed platforms on slopes called?",
          options: [
            "Terraces",
            "Waterways",
            "Windbreaks",
            "Filter strips"
          ],
          correctAnswer: 0,
          explanation: "Terraces are constructed platforms on sloping land that break long slopes into shorter segments to reduce runoff velocity."
        },
        {
          id: 5,
          question: "What waterway type uses vegetation for protection?",
          options: [
            "Grassed waterways",
            "Lined waterways",
            "Diversion channels",
            "Outlet structures"
          ],
          correctAnswer: 0,
          explanation: "Grassed waterways are vegetated channels that convey concentrated runoff while preventing erosion through plant root protection."
        },
        {
          id: 6,
          question: "What tillage system leaves most residue on surface?",
          options: [
            "No-till",
            "Conventional tillage",
            "Reduced tillage",
            "Deep tillage"
          ],
          correctAnswer: 0,
          explanation: "No-till systems leave most crop residue on the soil surface, protecting against erosion and improving water infiltration."
        },
        {
          id: 7,
          question: "What irrigation controller uses weather data?",
          options: [
            "Evapotranspiration controllers",
            "Timer controllers",
            "Manual controllers",
            "Pressure controllers"
          ],
          correctAnswer: 0,
          explanation: "Evapotranspiration controllers use local weather data to adjust irrigation schedules based on actual crop water needs."
        },
        {
          id: 8,
          question: "What drainage system uses perforated pipes?",
          options: [
            "Tile drain systems",
            "Surface drains",
            "Open ditches",
            "French drains"
          ],
          correctAnswer: 0,
          explanation: "Tile drain systems use perforated pipes installed below ground to remove excess water from the soil profile."
        },
        {
          id: 9,
          question: "What protects fields from wind erosion?",
          options: [
            "Windbreaks",
            "Terraces",
            "Waterways",
            "Drainage tiles"
          ],
          correctAnswer: 0,
          explanation: "Windbreaks are rows of trees or shrubs planted to reduce wind speed and protect fields from wind erosion."
        },
        {
          id: 10,
          question: "What structure captures eroded soil?",
          options: [
            "Sediment basins",
            "Check dams",
            "Filter strips",
            "All of the above"
          ],
          correctAnswer: 3,
          explanation: "All these structures help capture eroded soil: sediment basins (large scale), check dams (small channels), and filter strips (vegetated areas)."
        },
        {
          id: 11,
          question: "What improves soil biological activity?",
          options: [
            "Cover crops",
            "Deep tillage",
            "Chemical fertilizers only",
            "Monocropping"
          ],
          correctAnswer: 0,
          explanation: "Cover crops improve soil biological activity by providing organic matter and diverse root systems that support soil organisms."
        },
        {
          id: 12,
          question: "What is the main purpose of contour ridges?",
          options: [
            "Slow water flow down slopes",
            "Increase water runoff",
            "Create planting rows",
            "Mark property boundaries"
          ],
          correctAnswer: 0,
          explanation: "Contour ridges slow water flow down slopes, allowing more time for water to infiltrate and reducing erosion potential."
        },
        {
          id: 13,
          question: "What terrace type has gentle slopes for machinery?",
          options: [
            "Broadbase terraces",
            "Bench terraces",
            "Grassed backslope terraces",
            "Channel terraces"
          ],
          correctAnswer: 0,
          explanation: "Broadbase terraces have gentle side slopes that allow farm machinery to cross them easily during field operations."
        },
        {
          id: 14,
          question: "What measurement determines waterway capacity?",
          options: [
            "Watershed area",
            "Soil type only",
            "Crop type",
            "Field shape"
          ],
          correctAnswer: 0,
          explanation: "Watershed area (the land area draining to the waterway) is the primary factor in determining waterway capacity requirements."
        },
        {
          id: 15,
          question: "What is variable rate irrigation?",
          options: [
            "Precision water application based on field needs",
            "Changing irrigation times daily",
            "Using different water sources",
            "Alternating between sprinkler types"
          ],
          correctAnswer: 0,
          explanation: "Variable rate irrigation applies different amounts of water to different parts of a field based on specific needs determined by sensors or maps."
        },
        {
          id: 16,
          question: "What is controlled drainage?",
          options: [
            "Adjustable outlet structures for water table management",
            "Complete drainage system shutdown",
            "Using drainage for irrigation only",
            "Automatic pump systems"
          ],
          correctAnswer: 0,
          explanation: "Controlled drainage uses adjustable outlet structures to manage water table levels, retaining water when needed and draining when excessive."
        },
        {
          id: 17,
          question: "How far does a windbreak typically protect?",
          options: [
            "10-20 times its height",
            "Equal to its width",
            "Only immediately behind it",
            "The entire farm"
          ],
          correctAnswer: 0,
          explanation: "A windbreak typically protects an area 10-20 times its height downwind, with maximum protection within 5 times the height."
        },
        {
          id: 18,
          question: "What is a filter strip?",
          options: [
            "Vegetated area that filters runoff",
            "Water treatment facility",
            "Sediment removal machine",
            "Underground filtration system"
          ],
          correctAnswer: 0,
          explanation: "A filter strip is a vegetated area designed to remove sediment, nutrients, and other pollutants from runoff before it reaches waterways."
        },
        {
          id: 19,
          question: "What soil amendment adjusts pH?",
          options: [
            "Lime",
            "Gypsum",
            "Compost",
            "Biochar"
          ],
          correctAnswer: 0,
          explanation: "Lime is applied to acidic soils to raise pH levels, making nutrients more available to plants and improving soil structure."
        },
        {
          id: 20,
          question: "What is a farm conservation plan?",
          options: [
            "Comprehensive soil and water management document",
            "Crop planting schedule",
            "Equipment maintenance log",
            "Financial budget"
          ],
          correctAnswer: 0,
          explanation: "A farm conservation plan is a comprehensive document outlining practices to manage soil, water, and related natural resources on a farm."
        }
      ]
    },
    {
      id: 5,
      title: "Renewable Energy in Agriculture",
      content: `# Module 5: Renewable Energy in Agriculture

## Engineering Sustainable Energy Solutions
Agriculture both consumes and can produce energy. This module covers engineering applications of renewable energy technologies on farms, reducing costs and environmental impact.

### Solar Energy Systems Engineering
Harnessing sunlight for agricultural applications:

**Photovoltaic (PV) System Design**:
- **Solar Panel Types**: Monocrystalline, polycrystalline, thin-film
- **System Components**: Panels, inverters, mounting, wiring
- **Sizing Calculations**: Based on energy needs and sunlight hours
- **Orientation and Tilt**: Optimizing for seasonal sun angles

**Agricultural PV Applications**:
- **Farm Building Power**: Barns, shops, offices
- **Irrigation Pumping**: Solar-powered water pumping systems
- **Electric Fencing**: Continuous power for perimeter fences
- **Remote Monitoring**: Powering sensors and communication equipment

**Solar Thermal Systems**:
- **Water Heating**: For dairy operations, cleaning
- **Space Heating**: Greenhouse and building heating
- **Crop Drying**: Solar dryers for grains and products
- **Process Heat**: For food processing operations

### Wind Energy Engineering
Utilizing wind power on farms:

**Wind Turbine Types**:
- **Horizontal Axis**: Most common, propeller-style design
- **Vertical Axis**: Omnidirectional, lower wind speed start
- **Small Wind Systems**: Under 100 kW for farm-scale use
- **Micro Wind**: Very small systems for specific applications

**Site Assessment**:
- **Wind Resource Analysis**: Measuring wind speed and patterns
- **Tower Height Considerations**: Higher = more consistent wind
- **Turbulence Avoidance**: Proper siting near obstacles
- **Grid Connection**: Net metering and interconnection requirements

**Agricultural Applications**:
- **Water Pumping**: Traditional windmill technology
- **Electricity Generation**: For farm operations or sale to grid
- **Direct Mechanical Power**: Historical applications revived
- **Hybrid Systems**: Wind-solar combinations for reliability

### Biomass Energy Engineering
Converting agricultural materials to energy:

**Biomass Sources**:
- **Crop Residues**: Corn stover, wheat straw, rice husks
- **Animal Manure**: Methane production through anaerobic digestion
- **Energy Crops**: Specifically grown for energy production
- **Processing Waste**: Food processing byproducts

**Anaerobic Digestion Systems**:
- **Digester Types**: Covered lagoon, complete mix, plug flow
- **Biogas Production**: Methane capture from manure
- **System Components**: Digester tank, gas handling, engine-generator
- **Digestate Management**: Nutrient-rich effluent handling

**Direct Combustion Systems**:
- **Biomass Boilers**: Heating systems for buildings
- **Co-firing**: Biomass with conventional fuels
- **Gasification**: Converting biomass to syngas
- **Pellet/Briquette Production**: Dense biomass fuel forms

### Geothermal Energy Applications
Using earth's heat for agriculture:

**Ground Source Heat Pumps**:
- **System Types**: Closed loop (vertical/horizontal) or open loop
- **Heating/Cooling**: Efficient temperature control for buildings
- **Greenhouse Applications**: Root zone and air temperature control
- **Aquaculture**: Water temperature regulation

**Direct Use Applications**:
- **Soil Heating**: Extending growing seasons
- **Crop Drying**: Low-temperature drying systems
- **Snow Melting**: For farmstead areas
- **Animal Housing**: Temperature-controlled environments

**System Design Considerations**:
- **Heat Load Calculations**: Building or process requirements
- **Ground Thermal Properties**: Conductivity and capacity
- **Loop Field Design**: Proper sizing and layout
- **Pump and Distribution**: Efficient fluid movement

### Hydropower and Micro-hydro
Water power for agricultural operations:

**Micro-hydro Systems**:
- **Site Requirements**: Adequate head (vertical drop) and flow
- **System Components**: Intake, penstock, turbine, generator
- **Turbine Types**: Impulse (Pelton, Turgo) or reaction (Francis)
- **Power Output**: Based on head × flow × efficiency

**Agricultural Applications**:
- **Historical Mills**: Modern adaptations of traditional technology
- **Irrigation System Power**: Using existing water infrastructure
- **Remote Power**: For off-grid agricultural operations
- **Pumped Storage**: Energy storage using water elevation

**Environmental Considerations**:
- **Fish Passage**: Maintaining aquatic ecosystem health
- **Water Rights**: Legal access to water resources
- **Sediment Management**: Preventing turbine damage
- **Flow Requirements**: Maintaining minimum stream flows

### Energy Efficiency Engineering
Reducing energy consumption through design:

**Building Energy Efficiency**:
- **Insulation Upgrades**: Walls, roofs, foundations
- **Air Sealing**: Reducing infiltration losses
- **High-Efficiency Lighting**: LED technology applications
- **Energy-Efficient Equipment**: Motors, pumps, ventilation

**Process Efficiency Improvements**:
- **Irrigation System Optimization**: Pump and pipe efficiency
- **Grain Drying Efficiency**: Heat recovery and control systems
- **Milking System Efficiency**: Vacuum pump optimization
- **Cold Storage**: Refrigeration system improvements

**Monitoring and Management**:
- **Energy Audits**: Identifying saving opportunities
- **Submetering**: Tracking specific energy uses
- **Energy Management Systems**: Automated control optimization
- **Performance Benchmarking**: Comparing to similar operations

### Energy Storage Systems
Managing intermittent renewable energy:

**Battery Storage Technologies**:
- **Lead-Acid**: Traditional, lower cost
- **Lithium-Ion**: Higher efficiency, longer life
- **Flow Batteries**: Scalable for larger applications
- **Emerging Technologies**: Ongoing development

**Thermal Storage**:
- **Water Storage**: Heated water for later use
- **Rock Bed Storage**: For greenhouse heating
- **Phase Change Materials**: Storing heat as latent energy
- **Insulated Storage**: Reducing heat loss rates

**Mechanical Storage**:
- **Pumped Hydro**: Using elevation differences
- **Compressed Air**: Storing energy as pressurized air
- **Flywheels**: Rotational energy storage
- **Hydrogen Production**: Long-term energy storage option

### Hybrid and Integrated Systems
Combining multiple energy technologies:

**System Integration Design**:
- **Complementary Resources**: Matching supply with demand patterns
- **Control Systems**: Coordinating multiple energy sources
- **Energy Management**: Optimizing use of available resources
- **Backup Systems**: Ensuring reliability during low production

**Agricultural Examples**:
- **Solar-Wind Hybrid**: Balancing daily and seasonal patterns
- **Biogas-Solar**: Continuous and intermittent combination
- **Geothermal-PV**: Base load and peak supply matching
- **Micro-hydro with Storage**: Consistent power availability

**Grid Interaction**:
- **Net Metering**: Selling excess power to utility
- **Grid Support Services**: Providing voltage or frequency support
- **Islanding Capability**: Operating independently during outages
- **Smart Grid Integration**: Advanced grid interaction features

### Economic Analysis and Financing
Evaluating renewable energy investments:

**Cost Components**:
- **Capital Costs**: Equipment purchase and installation
- **Operating Costs**: Maintenance, insurance, monitoring
- **Fuel Costs**: For biomass systems (feedstock)
- **Decommissioning**: End-of-life system removal

**Financial Incentives**:
- **Tax Credits**: Federal and state investment incentives
- **Grants**: Government or foundation funding
- **Rebates**: Utility or manufacturer incentives
- **Production Incentives**: Payments for energy produced

**Return on Investment**:
- **Payback Period**: Time to recover initial investment
- **Lifecycle Costing**: Total cost over system lifetime
- **Energy Cost Savings**: Reduced utility bills
- **Additional Revenue**: Energy sales or carbon credits

### Environmental Impact Assessment
Evaluating sustainability benefits:

**Carbon Footprint Reduction**:
- **Direct Emissions**: On-farm fossil fuel displacement
- **Indirect Emissions**: Grid electricity generation offset
- **Carbon Sequestration**: Biomass systems and soil carbon
- **Lifecycle Analysis**: Complete environmental impact assessment

**Other Environmental Benefits**:
- **Water Conservation**: Reduced water pumping energy
- **Air Quality**: Reduced combustion emissions
- **Waste Management**: Agricultural waste utilization
- **Biodiversity**: Habitat creation with some systems

**Monitoring and Verification**:
- **Energy Production Tracking**: Actual vs. predicted performance
- **Environmental Monitoring**: Air, water, soil impact assessment
- **Maintenance Records**: System performance over time
- **Sustainability Reporting**: Documenting environmental benefits

### Regulatory and Safety Considerations
Compliance and risk management:

**Electrical Safety Standards**:
- **National Electrical Code**: Installation requirements
- **Utility Interconnection**: Grid connection standards
- **System Grounding**: Protection against electrical faults
- **Arc Flash Protection**: Worker safety during maintenance

**Building and Zoning Regulations**:
- **Permitting Requirements**: Local government approvals
- **Setback Requirements**: Distance from property lines
- **Height Restrictions**: For wind turbines and towers
- **Visual Impact**: Aesthetic considerations

**Environmental Regulations**:
- **Wetland Protection**: Avoiding sensitive areas
- **Wildlife Protection**: Bird and bat considerations for wind
- **Water Rights**: For hydro and irrigation systems
- **Waste Management**: For biomass system byproducts

Remember, renewable energy engineering in agriculture requires balancing technical feasibility, economic viability, and environmental sustainability to create resilient farming systems.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are the two main types of solar energy systems?",
          options: [
            "Photovoltaic and solar thermal",
            "Passive and active",
            "Direct and indirect",
            "Concentrated and dispersed"
          ],
          correctAnswer: 0,
          explanation: "The two main types are photovoltaic (converting sunlight to electricity) and solar thermal (using sunlight for heat)."
        },
        {
          id: 2,
          question: "What solar application is common for irrigation?",
          options: [
            "Water pumping",
            "Crop drying",
            "Fence charging",
            "Building lighting"
          ],
          correctAnswer: 0,
          explanation: "Solar-powered water pumping is a common agricultural application, especially in remote areas without grid electricity."
        },
        {
          id: 3,
          question: "What wind turbine type has vertical blades?",
          options: [
            "Vertical axis",
            "Horizontal axis",
            "Propeller style",
            "Three-blade design"
          ],
          correctAnswer: 0,
          explanation: "Vertical axis wind turbines have blades that rotate around a vertical shaft, catching wind from any direction."
        },
        {
          id: 4,
          question: "What is net metering for renewable energy?",
          options: [
            "Selling excess power to the utility grid",
            "Measuring energy use only",
            "Storing energy in batteries",
            "Tracking carbon emissions"
          ],
          correctAnswer: 0,
          explanation: "Net metering allows farms to sell excess renewable electricity back to the utility grid, offsetting energy costs."
        },
        {
          id: 5,
          question: "What biomass energy source comes from animal waste?",
          options: [
            "Manure for anaerobic digestion",
            "Crop residues only",
            "Food processing waste",
            "Wood chips"
          ],
          correctAnswer: 0,
          explanation: "Animal manure is a valuable biomass source for anaerobic digestion, producing methane-rich biogas for energy production."
        },
        {
          id: 6,
          question: "What does anaerobic digestion produce?",
          options: [
            "Biogas (methane)",
            "Ethanol only",
            "Solid fuel pellets",
            "Direct heat"
          ],
          correctAnswer: 0,
          explanation: "Anaerobic digestion produces biogas, primarily methane, which can be used for heating or electricity generation."
        },
        {
          id: 7,
          question: "What geothermal system uses ground loops?",
          options: [
            "Ground source heat pumps",
            "Direct steam systems",
            "Hot spring utilization",
            "Deep well injection"
          ],
          correctAnswer: 0,
          explanation: "Ground source heat pumps use buried loops to exchange heat with the earth for efficient building heating and cooling."
        },
        {
          id: 8,
          question: "What greenhouse application uses geothermal?",
          options: [
            "Root zone heating",
            "Only lighting",
            "Ventilation only",
            "Humidity control"
          ],
          correctAnswer: 0,
          explanation: "Geothermal systems are excellent for root zone heating in greenhouses, promoting plant growth with consistent temperatures."
        },
        {
          id: 9,
          question: "What micro-hydro component carries water to turbine?",
          options: [
            "Penstock",
            "Intake screen",
            "Generator",
            "Transformer"
          ],
          correctAnswer: 0,
          explanation: "The penstock is the pipe that carries water from the intake to the turbine in a micro-hydro system."
        },
        {
          id: 10,
          question: "What determines micro-hydro power output?",
          options: [
            "Head × flow × efficiency",
            "Water temperature only",
            "Pipe diameter only",
            "Turbine color"
          ],
          correctAnswer: 0,
          explanation: "Micro-hydro power output is calculated as: Head (vertical drop) × Flow (water volume) × System Efficiency."
        },
        {
          id: 11,
          question: "What is the most energy-efficient lighting technology?",
          options: [
            "LED lighting",
            "Fluorescent lighting",
            "Incandescent bulbs",
            "Halogen lamps"
          ],
          correctAnswer: 0,
          explanation: "LED (Light Emitting Diode) lighting is currently the most energy-efficient lighting technology available."
        },
        {
          id: 12,
          question: "What battery type has highest efficiency?",
          options: [
            "Lithium-ion",
            "Lead-acid",
            "Nickel-cadmium",
            "Alkaline"
          ],
          correctAnswer: 0,
          explanation: "Lithium-ion batteries currently offer the highest efficiency (energy out vs. energy in) for energy storage applications."
        },
        {
          id: 13,
          question: "What thermal storage uses water?",
          options: [
            "Water storage tanks",
            "Rock beds",
            "Phase change materials",
            "Insulated containers"
          ],
          correctAnswer: 0,
          explanation: "Water storage tanks are a common and effective method for thermal energy storage in agricultural applications."
        },
        {
          id: 14,
          question: "What hybrid system balances daily patterns?",
          options: [
            "Solar-wind hybrid",
            "Biogas-solar",
            "Geothermal-PV",
            "Micro-hydro with storage"
          ],
          correctAnswer: 0,
          explanation: "Solar-wind hybrid systems balance daily patterns: solar produces during daylight, wind often produces at night or during storms."
        },
        {
          id: 15,
          question: "What financial incentive reduces tax liability?",
          options: [
            "Tax credits",
            "Grants",
            "Rebates",
            "Production incentives"
          ],
          correctAnswer: 0,
          explanation: "Tax credits directly reduce the amount of taxes owed, making them valuable incentives for renewable energy investments."
        },
        {
          id: 16,
          question: "What measures time to recover investment?",
          options: [
            "Payback period",
            "Return on investment",
            "Net present value",
            "Internal rate of return"
          ],
          correctAnswer: 0,
          explanation: "Payback period measures how long it takes for energy savings to recover the initial investment cost."
        },
        {
          id: 17,
          question: "What reduces carbon footprint directly?",
          options: [
            "On-farm fossil fuel displacement",
            "Only carbon credits",
            "Tree planting only",
            "Soil testing"
          ],
          correctAnswer: 0,
          explanation: "Direct reduction comes from displacing fossil fuels used on the farm with renewable energy sources."
        },
        {
          id: 18,
          question: "What electrical code governs installations?",
          options: [
            "National Electrical Code (NEC)",
            "International Building Code",
            "OSHA regulations",
            "EPA guidelines"
          ],
          correctAnswer: 0,
          explanation: "The National Electrical Code (NEC) governs electrical installations, including renewable energy systems, in the United States."
        },
        {
          id: 19,
          question: "What is arc flash protection for?",
          options: [
            "Worker safety during maintenance",
            "Lightning protection",
            "Surge protection",
            "Fire prevention"
          ],
          correctAnswer: 0,
          explanation: "Arc flash protection includes safety equipment and procedures to protect workers from electrical arc explosions during maintenance."
        },
        {
          id: 20,
          question: "What considers wildlife impacts for wind systems?",
          options: [
            "Bird and bat protection measures",
            "Only noise regulations",
            "Visual impact assessments",
            "Setback requirements only"
          ],
          correctAnswer: 0,
          explanation: "Wind energy projects must consider and mitigate impacts on birds and bats through proper siting and operational strategies."
        }
      ]
    },
    {
      id: 6,
      title: "Precision Agriculture and Automation",
      content: `# Module 6: Precision Agriculture and Automation

## Engineering Smart Farming Systems
Precision agriculture uses technology to optimize field-level management. This module covers engineering principles behind automated systems, data management, and decision support technologies.

### Global Positioning System (GPS) Technology
Foundation of precision agriculture:

**GPS System Components**:
- **Satellite Constellation**: 24+ satellites orbiting Earth
- **Ground Control Stations**: Monitor and control satellites
- **User Equipment**: Receivers on agricultural equipment
- **Correction Signals**: Improving accuracy through DGPS or RTK

**Accuracy Levels**:
- **Autonomous GPS**: 3-5 meter accuracy (basic)
- **DGPS (Differential)**: 1-3 meter accuracy (improved)
- **RTK (Real-Time Kinematic)**: 1-3 centimeter accuracy (high)
- **Post-Processing**: Similar accuracy to RTK with data processing

**Agricultural Applications**:
- **Guidance Systems**: Automated steering for field operations
- **Field Mapping**: Boundary and feature documentation
- **Variable Rate Application**: Precision input placement
- **Yield Monitoring**: Georeferenced harvest data collection

### Guidance and Auto-steer Systems
Automating equipment operation:

**System Types**:
- **Lightbar Guidance**: Visual display for manual steering
- **Assisted Steering**: Power steering with guidance input
- **Auto-steer Systems**: Fully automated steering control
- **Integrated Systems**: Complete machine control automation

**Steering Technologies**:
- **Hydraulic Valve Kits**: Interface with existing steering
- **Electric Motor Systems**: Direct steering wheel control
- **Wheel Angle Sensors**: Monitor and control turning
- **Integration Methods**: Compatibility with equipment systems

**Benefits and Applications**:
- **Reduced Overlap**: Saving inputs (seed, fertilizer, chemicals)
- **Reduced Skips**: Ensuring complete coverage
- **Night Operation**: Ability to work in low visibility
- **Operator Fatigue Reduction**: Less stress during long hours

### Yield Monitoring and Mapping
Measuring and analyzing crop production:

**Yield Monitor Components**:
- **Mass Flow Sensors**: Measure grain volume and moisture
- **Moisture Sensors**: Determine grain moisture content
- **GPS Receiver**: Georeference yield data points
- **Display/Controller**: Interface and data storage

**Data Collection**:
- **Spatial Resolution**: Data points collected by distance or time
- **Calibration Requirements**: Ensuring accurate measurements
- **Data Cleaning**: Removing errors and anomalies
- **Data Storage**: On-board and transfer to office systems

**Yield Map Analysis**:
- **Spatial Patterns**: Identifying high and low production areas
- **Statistical Analysis**: Understanding variability
- **Correlation Studies**: Linking yield to other data layers
- **Management Zones**: Defining areas for differential management

### Variable Rate Technology (VRT)
Precision application of inputs:

**System Components**:
- **Rate Controller**: Manages application rates
- **Application Hardware**: Pumps, valves, metering devices
- **Sensors or Maps**: Determining rate requirements
- **GPS Integration**: Location-based rate control

**Control Methods**:
- **Map-Based VRT**: Uses prescription maps created in advance
- **Sensor-Based VRT**: Real-time sensing and adjustment
- **Manual Override**: Operator control when needed
- **Automatic Section Control**: Turning sections on/off automatically

**Application Types**:
- **Seeding**: Variable population based on soil potential
- **Fertilizer**: Site-specific nutrient management
- **Chemicals**: Targeted pest control applications
- **Irrigation**: Precision water application

### Soil and Crop Sensing Technologies
Real-time field data collection:

**Soil Sensors**:
- **Electrical Conductivity**: Mapping soil texture and salinity
- **pH Sensors**: Soil acidity/alkalinity measurement
- **Moisture Sensors**: Volumetric water content
- **Nutrient Sensors**: Real-time nutrient availability

**Crop Canopy Sensors**:
- **Optical Sensors**: Measure reflected light from plants
- **Normalized Difference Vegetation Index (NDVI)**: Plant health indicator
- **Active Sensors**: Emit light and measure reflectance
- **Passive Sensors**: Use sunlight as light source

**Aerial and Satellite Sensing**:
- **Multispectral Imagery**: Multiple wavelength bands
- **Thermal Imaging**: Plant stress detection
- **LiDAR**: Detailed elevation and structure mapping
- **Temporal Analysis**: Changes over growing season

### Automated Machinery and Robotics
Advanced automation in field operations:

**Autonomous Equipment**:
- **Driverless Tractors**: GPS-guided without operator
- **Robotic Harvesters**: Selective harvesting of crops
- **Automated Weeding**: Vision-based weed identification and removal
- **Drone Applications**: Aerial monitoring and spraying

**System Architecture**:
- **Perception Systems**: Cameras, LiDAR, radar for environment sensing
- **Control Systems**: Computer algorithms for decision making
- **Actuation Systems**: Motors, hydraulics for physical actions
- **Safety Systems**: Obstacle detection and emergency stop

**Implementation Considerations**:
- **Field Conditions**: Adapting to varying terrain and crops
- **Communication Systems**: Equipment-to-equipment coordination
- **Power Management**: Energy requirements for automated systems
- **Maintenance Requirements**: Specialized technical support

### Data Management Systems
Handling precision agriculture information:

**Data Collection Standards**:
- **ISOBlue Standards**: Open data formats for agriculture
- **Precision Ag Data Format**: Industry standard for data exchange
- **Metadata Requirements**: Information about the data collected
- **Data Quality Protocols**: Ensuring accuracy and consistency

**Software Platforms**:
- **Farm Management Information Systems (FMIS)**: Comprehensive farm data management
- **Geographic Information Systems (GIS)**: Spatial data analysis
- **Data Analytics Tools**: Statistical and machine learning analysis
- **Cloud Storage and Processing**: Remote data management

**Data Integration**:
- **Multiple Data Layers**: Combining yield, soil, imagery, etc.
- **Temporal Analysis**: Comparing data across seasons
- **Decision Support**: Turning data into management recommendations
- **Reporting Systems**: Compliance and analysis documentation

### Irrigation Automation
Precision water management:

**Control Systems**:
- **Centralized Controllers**: Manage multiple fields from one location
- **Distributed Control**: Individual field unit controllers
- **Wireless Communication**: Radio, cellular, or satellite links
- **Remote Monitoring**: Web or mobile app access

**Sensor Integration**:
- **Soil Moisture Networks**: Multiple sensors across fields
- **Weather Stations**: Local meteorological data
- **Plant Stress Sensors**: Direct crop water status measurement
- **Flow Meters**: Monitoring water application amounts

**Automation Benefits**:
- **Water Conservation**: Applying only needed amounts
- **Energy Savings**: Reduced pumping requirements
- **Labor Reduction**: Automated system operation
- **Yield Optimization**: Optimal water for crop growth

### Livestock Monitoring Automation
Technology for animal management:

**Individual Animal Tracking**:
- **RFID Systems**: Radio Frequency Identification tags
- **GPS Collars**: Location tracking for grazing animals
- **Biometric Sensors**: Health and behavior monitoring
- **Automated Weighing**: Growth rate tracking

**Health Monitoring**:
- **Rumination Sensors**: Detect eating and digestion patterns
- **Activity Monitors**: Movement and lying time measurement
- **Temperature Sensors**: Early illness detection
- **Automatic Sorting**: Separate animals for treatment

**Automated Feeding**:
- **Individual Feeding Stations**: Custom rations per animal
- **Milk-fed Calf Feeders**: Automated milk distribution
- **Forage Management**: Automated feed push-up and distribution
- **Water Monitoring**: Consumption tracking and quality control

### Decision Support Systems
Turning data into management decisions:

**Modeling and Simulation**:
- **Crop Growth Models**: Predict development and yield
- **Disease Prediction**: Weather-based risk assessment
- **Economic Models**: Profitability analysis of alternatives
- **Environmental Impact**: Sustainability assessment

**Rule-Based Systems**:
- **Expert Systems**: Capture knowledge from experienced farmers
- **Decision Trees**: Step-by-step decision pathways
- **Threshold-Based Alerts**: Notifications when conditions reach limits
- **If-Then Rules**: Simple conditional logic for management

**Machine Learning Applications**:
- **Pattern Recognition**: Identifying trends in complex data
- **Predictive Analytics**: Forecasting future conditions
- **Anomaly Detection**: Finding unusual patterns requiring attention
- **Optimization Algorithms**: Finding best management strategies

### Implementation and Adoption
Engineering successful precision agriculture systems:

**System Integration Challenges**:
- **Equipment Compatibility**: Different brands and technologies
- **Data Interoperability**: Exchanging information between systems
- **Skill Requirements**: Operator and manager technical skills
- **Infrastructure Needs**: Communication and power availability

**Economic Considerations**:
- **Investment Costs**: Hardware, software, and training
- **Return on Investment**: Savings and increased profitability
- **Scalability**: Starting small and expanding systems
- **Custom Hiring**: Using service providers vs. ownership

**Training and Support**:
- **Operator Training**: Equipment operation skills
- **Data Analysis Skills**: Interpreting precision agriculture data
- **Technical Support**: Maintenance and troubleshooting
- **Continuous Learning**: Keeping up with technology advances

Remember, precision agriculture engineering creates interconnected systems that collect data, analyze information, and implement optimized management decisions for sustainable agricultural production.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What provides highest GPS accuracy for agriculture?",
          options: [
            "RTK (Real-Time Kinematic)",
            "Autonomous GPS",
            "DGPS (Differential)",
            "Standard GPS"
          ],
          correctAnswer: 0,
          explanation: "RTK provides 1-3 centimeter accuracy, making it suitable for precision agriculture applications like automated steering."
        },
        {
          id: 2,
          question: "What does auto-steer reduce in field operations?",
          options: [
            "Overlap and skips",
            "Only fuel consumption",
            "Equipment wear only",
            "Operator comfort"
          ],
          correctAnswer: 0,
          explanation: "Auto-steer systems reduce both overlap (wasted inputs) and skips (missed areas), improving field operation efficiency."
        },
        {
          id: 3,
          question: "What yield monitor component measures grain volume?",
          options: [
            "Mass flow sensor",
            "Moisture sensor",
            "GPS receiver",
            "Display controller"
          ],
          correctAnswer: 0,
          explanation: "Mass flow sensors measure the volume of grain passing through the combine, which is used to calculate yield."
        },
        {
          id: 4,
          question: "What does VRT stand for?",
          options: [
            "Variable Rate Technology",
            "Vertical Rotation Technique",
            "Variable Resistance Testing",
            "Velocity Regulation Technology"
          ],
          correctAnswer: 0,
          explanation: "VRT stands for Variable Rate Technology, which allows application rates of inputs to vary across a field based on needs."
        },
        {
          id: 5,
          question: "What VRT method uses pre-made maps?",
          options: [
            "Map-based VRT",
            "Sensor-based VRT",
            "Manual VRT",
            "Automatic VRT"
          ],
          correctAnswer: 0,
          explanation: "Map-based VRT uses prescription maps created before the operation to control application rates across the field."
        },
        {
          id: 6,
          question: "What sensor measures soil texture indirectly?",
          options: [
            "Electrical conductivity sensor",
            "pH sensor",
            "Moisture sensor",
            "Temperature sensor"
          ],
          correctAnswer: 0,
          explanation: "Electrical conductivity sensors measure how well soil conducts electricity, which correlates with soil texture and salinity."
        },
        {
          id: 7,
          question: "What plant health indicator uses light reflectance?",
          options: [
            "NDVI (Normalized Difference Vegetation Index)",
            "Chlorophyll meter",
            "Leaf area index",
            "Stem diameter"
          ],
          correctAnswer: 0,
          explanation: "NDVI uses the difference between near-infrared and red light reflectance to indicate plant health and biomass."
        },
        {
          id: 8,
          question: "What is required for autonomous equipment operation?",
          options: [
            "Perception, control, and actuation systems",
            "Only GPS guidance",
            "Manual override capability",
            "Camera systems only"
          ],
          correctAnswer: 0,
          explanation: "Autonomous equipment requires perception (sensing environment), control (decision making), and actuation (physical action) systems."
        },
        {
          id: 9,
          question: "What does FMIS stand for?",
          options: [
            "Farm Management Information System",
            "Field Mapping Integration Software",
            "Fertilizer Management and Irrigation System",
            "Farm Machinery Information System"
          ],
          correctAnswer: 0,
          explanation: "FMIS stands for Farm Management Information System, software platforms that manage comprehensive farm data."
        },
        {
          id: 10,
          question: "What irrigation automation saves water?",
          options: [
            "Soil moisture sensor integration",
            "Only timer-based systems",
            "Manual valve control",
            "Basic sprinkler systems"
          ],
          correctAnswer: 0,
          explanation: "Integrating soil moisture sensors ensures irrigation only occurs when needed, conserving water compared to scheduled systems."
        },
        {
          id: 11,
          question: "What tracks individual animals automatically?",
          options: [
            "RFID systems",
            "Visual identification",
            "Brand marks only",
            "Ear notches"
          ],
          correctAnswer: 0,
          explanation: "RFID (Radio Frequency Identification) systems use electronic tags to automatically identify and track individual animals."
        },
        {
          id: 12,
          question: "What detects early illness in livestock?",
          options: [
            "Temperature and activity sensors",
            "Only visual observation",
            "Weight measurements only",
            "Feed consumption tracking"
          ],
          correctAnswer: 0,
          explanation: "Temperature sensors can detect fever, and activity monitors can show reduced movement, both early indicators of illness."
        },
        {
          id: 13,
          question: "What uses weather data for disease prediction?",
          options: [
            "Disease prediction models",
            "Only field scouting",
            "Visual inspection",
            "Historical patterns only"
          ],
          correctAnswer: 0,
          explanation: "Disease prediction models use weather data (temperature, humidity, rainfall) to assess risk and recommend management actions."
        },
        {
          id: 14,
          question: "What finds patterns in complex agricultural data?",
          options: [
            "Machine learning algorithms",
            "Basic spreadsheets",
            "Manual calculation",
            "Simple averages"
          ],
          correctAnswer: 0,
          explanation: "Machine learning algorithms can identify complex patterns in agricultural data that might not be apparent through traditional analysis."
        },
        {
          id: 15,
          question: "What is a major integration challenge?",
          options: [
            "Equipment compatibility",
            "Only cost concerns",
            "Farmer age",
            "Field size"
          ],
          correctAnswer: 0,
          explanation: "Equipment compatibility between different brands and generations of technology is a major challenge in precision agriculture integration."
        },
        {
          id: 16,
          question: "What GPS correction improves basic accuracy?",
          options: [
            "DGPS (Differential GPS)",
            "Only satellite signals",
            "Manual calibration",
            "Equipment adjustment"
          ],
          correctAnswer: 0,
          explanation: "DGPS uses ground-based correction signals to improve basic GPS accuracy from 3-5 meters to 1-3 meters."
        },
        {
          id: 17,
          question: "What is automatic section control?",
          options: [
            "Turning off unused application sections",
            "Speed control only",
            "Manual valve operation",
            "Pressure regulation"
          ],
          correctAnswer: 0,
          explanation: "Automatic section control turns off boom sections or individual nozzles over already-treated areas or obstacles."
        },
        {
          id: 18,
          question: "What does NDVI measure?",
          options: [
            "Plant health and biomass",
            "Soil moisture only",
            "Air temperature",
            "Wind speed"
          ],
          correctAnswer: 0,
          explanation: "NDVI measures the difference between near-infrared and red light reflectance, indicating plant health, vigor, and biomass."
        },
        {
          id: 19,
          question: "What is essential for autonomous equipment safety?",
          options: [
            "Obstacle detection systems",
            "Only GPS accuracy",
            "Operator presence",
            "Manual controls"
          ],
          correctAnswer: 0,
          explanation: "Obstacle detection systems (using cameras, LiDAR, radar) are essential for autonomous equipment to detect and avoid obstacles."
        },
        {
          id: 20,
          question: "What helps farmers make data-driven decisions?",
          options: [
            "Decision support systems",
            "Only experience",
            "Neighbor advice",
            "Tradition only"
          ],
          correctAnswer: 0,
          explanation: "Decision support systems analyze precision agriculture data to provide management recommendations based on evidence and models."
        }
      ]
    }
  ],
  
  // FINAL EXAM (40 questions covering all modules)
  finalExam: {
    id: "agricultural-engineering-final-exam",
    title: "Agricultural Engineering Diploma Final Exam",
    description: "Comprehensive exam covering all 6 modules of the Agricultural Engineering Diploma course.",
    passingScore: 70, // 70% required to pass
    questions: [
      // Module 1 Questions (7 questions)
      {
        id: 1,
        question: "What does ET stand for in irrigation engineering?",
        options: [
          "Evapotranspiration",
          "Estimated Time",
          "Energy Transfer",
          "Equipment Test"
        ],
        correctAnswer: 0,
        explanation: "ET combines evaporation from soil and transpiration from plants to calculate crop water needs."
      },
      {
        id: 2,
        question: "What irrigation system rotates for circular fields?",
        options: [
          "Center pivot",
          "Drip irrigation",
          "Furrow irrigation",
          "Flood irrigation"
        ],
        correctAnswer: 0,
        explanation: "Center pivot systems use rotating arms to irrigate large circular fields efficiently."
      },
      {
        id: 3,
        question: "What component maintains drip system pressure?",
        options: [
          "Pressure regulators",
          "Flow meters",
          "Filters",
          "Control valves"
        ],
        correctAnswer: 0,
        explanation: "Pressure regulators maintain consistent water pressure throughout drip irrigation systems."
      },
      {
        id: 4,
        question: "What does TDH stand for in pump selection?",
        options: [
          "Total Dynamic Head",
          "Time Delay Hydraulics",
          "Temperature Density Height",
          "Turbine Design Help"
        ],
        correctAnswer: 0,
        explanation: "TDH is the sum of elevation lift, friction loss, and pressure requirements for pump sizing."
      },
      {
        id: 5,
        question: "What filter type uses stacked discs?",
        options: [
          "Disc filters",
          "Screen filters",
          "Sand filters",
          "Cartridge filters"
        ],
        correctAnswer: 0,
        explanation: "Disc filters use stacked discs with grooves that trap particles and can be backwashed for cleaning."
      },
      {
        id: 6,
        question: "What irrigation controller uses weather data?",
        options: [
          "Weather-based controllers",
          "Simple timers",
          "Manual valves",
          "Pressure switches"
        ],
        correctAnswer: 0,
        explanation: "Weather-based controllers adjust irrigation schedules using local weather data to optimize water use."
      },
      {
        id: 7,
        question: "What should irrigation efficiency aim for?",
        options: [
          "85% or higher",
          "50-60%",
          "70-75%",
          "100% always"
        ],
        correctAnswer: 0,
        explanation: "Well-designed irrigation systems should achieve 85% or higher distribution uniformity."
      },
      
      // Module 2 Questions (7 questions)
      {
        id: 8,
        question: "What is the standard implement mounting system?",
        options: [
          "Three-point hitch",
          "Quick-attach system",
          "Bolted connection",
          "Hydraulic clamp"
        ],
        correctAnswer: 0,
        explanation: "The three-point hitch is the standard system for attaching implements to tractors."
      },
      {
        id: 9,
        question: "What planting method disturbs only strips?",
        options: [
          "Strip-till",
          "No-till",
          "Conventional tillage",
          "Deep tillage"
        ],
        correctAnswer: 0,
        explanation: "Strip-till equipment prepares only narrow planting strips, leaving most soil undisturbed."
      },
      {
        id: 10,
        question: "What seed metering uses air pressure?",
        options: [
          "Vacuum meters",
          "Plate meters",
          "Finger pickup",
          "Belt meters"
        ],
        correctAnswer: 0,
        explanation: "Vacuum meters use air pressure differences to hold and release individual seeds precisely."
      },
      {
        id: 11,
        question: "What separates grain in a combine?",
        options: [
          "Threshing cylinder",
          "Cutting platform",
          "Cleaning system",
          "Grain tank"
        ],
        correctAnswer: 0,
        explanation: "The threshing cylinder separates grain from stalks through impact and friction."
      },
      {
        id: 12,
        question: "What nozzle reduces spray drift?",
        options: [
          "Air induction nozzles",
          "Flat fan nozzles",
          "Hollow cone nozzles",
          "Full cone nozzles"
        ],
        correctAnswer: 0,
        explanation: "Air induction nozzles create larger droplets containing air bubbles, reducing drift."
      },
      {
        id: 13,
        question: "What saves lives in tractor overturns?",
        options: [
          "ROPS with seat belt",
          "Wide tires",
          "Low center of gravity",
          "Four-wheel drive"
        ],
        correctAnswer: 0,
        explanation: "Roll-Over Protection Structures with seat belts prevent crushing in overturns."
      },
      {
        id: 14,
        question: "What is variable rate technology?",
        options: [
          "Adjusting inputs based on field conditions",
          "Changing engine RPM",
          "Modifying transmission speeds",
          "Adjusting tire pressure"
        ],
        correctAnswer: 0,
        explanation: "VRT adjusts application rates based on GPS-guided field maps."
      },
      
      // Module 3 Questions (6 questions)
      {
        id: 15,
        question: "What is dead load in structures?",
        options: [
          "Weight of structure itself",
          "Equipment weight",
          "Wind force",
          "Animal movement"
        ],
        correctAnswer: 0,
        explanation: "Dead load refers to the permanent weight of the structure and fixed components."
      },
      {
        id: 16,
        question: "What dairy design has individual resting areas?",
        options: [
          "Free stall barns",
          "Tie stall barns",
          "Open barns",
          "Pasture systems"
        ],
        correctAnswer: 0,
        explanation: "Free stall barns provide individual resting stalls with common alleys."
      },
      {
        id: 17,
        question: "What controls grain storage temperature?",
        options: [
          "Aeration systems",
          "Heating systems",
          "Cooling systems",
          "Humidity control"
        ],
        correctAnswer: 0,
        explanation: "Aeration systems move air through grain to control temperature and moisture."
      },
      {
        id: 18,
        question: "What is TMR feeding?",
        options: [
          "Total Mixed Ration",
          "Timed Meal Rations",
          "Total Mineral Requirements",
          "Traditional Manual Ratios"
        ],
        correctAnswer: 0,
        explanation: "TMR mixes all feed components into a complete diet delivered to animals."
      },
      {
        id: 19,
        question: "What manure storage uses earthen basins?",
        options: [
          "Lagoons",
          "Tanks",
          "Ponds",
          "Pits"
        ],
        correctAnswer: 0,
        explanation: "Lagoons are large earthen basins for manure storage and treatment."
      },
      {
        id: 20,
        question: "What greenhouse system grows without soil?",
        options: [
          "Hydroponics",
          "Soil beds",
          "Benches",
          "Vertical farming"
        ],
        correctAnswer: 0,
        explanation: "Hydroponic systems grow plants in nutrient solutions without soil."
      },
      
      // Module 4 Questions (7 questions)
      {
        id: 21,
        question: "What erosion removes thin soil layers?",
        options: [
          "Sheet erosion",
          "Rill erosion",
          "Gully erosion",
          "Stream bank erosion"
        ],
        correctAnswer: 0,
        explanation: "Sheet erosion removes soil uniformly in thin layers across large areas."
      },
      {
        id: 22,
        question: "What farming follows land contours?",
        options: [
          "Contour farming",
          "Terrace farming",
          "Strip cropping",
          "Windbreak planting"
        ],
        correctAnswer: 0,
        explanation: "Contour farming performs operations along contour lines to reduce runoff."
      },
      {
        id: 23,
        question: "What are slope platforms called?",
        options: [
          "Terraces",
          "Waterways",
          "Windbreaks",
          "Filter strips"
        ],
        correctAnswer: 0,
        explanation: "Terraces are constructed platforms that break long slopes into segments."
      },
      {
        id: 24,
        question: "What drainage uses perforated pipes?",
        options: [
          "Tile drain systems",
          "Surface drains",
          "Open ditches",
          "French drains"
        ],
        correctAnswer: 0,
        explanation: "Tile drain systems use perforated pipes to remove excess subsurface water."
      },
      {
        id: 25,
        question: "What protects from wind erosion?",
        options: [
          "Windbreaks",
          "Terraces",
          "Waterways",
          "Drainage tiles"
        ],
        correctAnswer: 0,
        explanation: "Windbreaks are rows of trees or shrubs that reduce wind speed."
      },
      {
        id: 26,
        question: "What captures eroded soil?",
        options: [
          "Sediment basins",
          "Check dams",
          "Filter strips",
          "All of the above"
        ],
        correctAnswer: 3,
        explanation: "All these structures help capture eroded soil before it leaves the farm."
      },
      {
        id: 27,
        question: "What soil amendment adjusts pH?",
        options: [
          "Lime",
          "Gypsum",
          "Compost",
          "Biochar"
        ],
        correctAnswer: 0,
        explanation: "Lime raises soil pH in acidic soils, improving nutrient availability."
      },
      
      // Module 5 Questions (7 questions)
      {
        id: 28,
        question: "What solar type converts sunlight to electricity?",
        options: [
          "Photovoltaic",
          "Solar thermal",
          "Passive solar",
          "Concentrated solar"
        ],
        correctAnswer: 0,
        explanation: "Photovoltaic systems convert sunlight directly into electrical energy."
      },
      {
        id: 29,
        question: "What wind turbine has vertical axis?",
        options: [
          "Vertical axis turbines",
          "Horizontal axis turbines",
          "Propeller turbines",
          "Three-blade turbines"
        ],
        correctAnswer: 0,
        explanation: "Vertical axis turbines have blades that rotate around a vertical shaft."
      },
      {
        id: 30,
        question: "What biomass source produces methane?",
        options: [
          "Anaerobic digestion of manure",
          "Direct combustion",
          "Gasification",
          "Pyrolysis"
        ],
        correctAnswer: 0,
        explanation: "Anaerobic digestion of manure produces methane-rich biogas."
      },
      {
        id: 31,
        question: "What geothermal system uses ground loops?",
        options: [
          "Ground source heat pumps",
          "Direct steam systems",
          "Hot spring utilization",
          "Deep well injection"
        ],
        correctAnswer: 0,
        explanation: "Ground source heat pumps exchange heat with the earth through buried loops."
      },
      {
        id: 32,
        question: "What micro-hydro component carries water?",
        options: [
          "Penstock",
          "Intake screen",
          "Generator",
          "Transformer"
        ],
        correctAnswer: 0,
        explanation: "The penstock pipe carries water from intake to turbine in micro-hydro systems."
      },
      {
        id: 33,
        question: "What is most energy-efficient lighting?",
        options: [
          "LED lighting",
          "Fluorescent lighting",
          "Incandescent bulbs",
          "Halogen lamps"
        ],
        correctAnswer: 0,
        explanation: "LED lighting is currently the most energy-efficient lighting technology."
      },
      {
        id: 34,
        question: "What financial incentive reduces taxes?",
        options: [
          "Tax credits",
          "Grants",
          "Rebates",
          "Production incentives"
        ],
        correctAnswer: 0,
        explanation: "Tax credits directly reduce tax liability for renewable energy investments."
      },
      
      // Module 6 Questions (6 questions)
      {
        id: 35,
        question: "What provides highest GPS accuracy?",
        options: [
          "RTK (Real-Time Kinematic)",
          "Autonomous GPS",
          "DGPS (Differential)",
          "Standard GPS"
        ],
        correctAnswer: 0,
        explanation: "RTK provides 1-3 centimeter accuracy for precision agriculture."
      },
      {
        id: 36,
        question: "What does auto-steer reduce?",
        options: [
          "Overlap and skips",
          "Only fuel consumption",
          "Equipment wear only",
          "Operator comfort"
        ],
        correctAnswer: 0,
        explanation: "Auto-steer reduces both overlap (waste) and skips (missed areas)."
      },
      {
        id: 37,
        question: "What does VRT stand for?",
        options: [
          "Variable Rate Technology",
          "Vertical Rotation Technique",
          "Variable Resistance Testing",
          "Velocity Regulation Technology"
        ],
        correctAnswer: 0,
        explanation: "VRT allows variable application rates across fields based on needs."
      },
      {
        id: 38,
        question: "What measures plant health with light?",
        options: [
          "NDVI (Normalized Difference Vegetation Index)",
          "Chlorophyll meter",
          "Leaf area index",
          "Stem diameter"
        ],
        correctAnswer: 0,
        explanation: "NDVI uses light reflectance to indicate plant health and biomass."
      },
      {
        id: 39,
        question: "What tracks animals automatically?",
        options: [
          "RFID systems",
          "Visual identification",
          "Brand marks only",
          "Ear notches"
        ],
        correctAnswer: 0,
        explanation: "RFID systems use electronic tags for automatic animal identification."
      },
      {
        id: 40,
        question: "What helps data-driven decisions?",
        options: [
          "Decision support systems",
          "Only experience",
          "Neighbor advice",
          "Tradition only"
        ],
        correctAnswer: 0,
        explanation: "Decision support systems analyze data to provide management recommendations."
      }
    ]
  }
};

export default agriculturalEngineeringDiploma;
