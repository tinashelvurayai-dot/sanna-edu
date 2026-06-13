// Production Engineering (Diploma) Course Data
// Advanced course building on Production/Quality Control Certificate

export const productionEngineeringDiplomaCourse = {
  // COURSE METADATA
  id: "production-engineering-diploma",
  title: "Production Engineering (Diploma)",
  description: "Advanced production engineering principles covering manufacturing systems, process optimization, automation, lean manufacturing, and production management for industrial operations.",
  duration: "12 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  icon: "⚙️",
  badge: "Diploma",
  prerequisite: "Quality Control (Certificate) or equivalent",
  
  // MODULES DATA
  modules: [
    // MODULE 1: Production Systems and Layouts
    {
      id: 1,
      title: "Production Systems and Layouts",
      content: `# Module 1: Production Systems and Layouts

Welcome to Production Engineering! This module explores different production systems and how to design efficient factory layouts for optimal manufacturing performance.

## Types of Production Systems

### 1. Job Production (Project-Based)
Manufacturing single items or small batches to customer specifications.

**Characteristics:**
- High variety, low volume
- Skilled labor intensive
- Flexible equipment
- Examples: Custom machinery, special tools, prototypes

**Advantages:**
- High customization
- Worker satisfaction from complete projects
- High quality possible

**Disadvantages:**
- High cost per unit
- Inconsistent workflow
- Complex planning and control

### 2. Batch Production
Producing limited quantities of identical products in groups or batches.

**Characteristics:**
- Moderate variety, moderate volume
- Equipment changeovers between batches
- Examples: Bakeries, pharmaceutical batches, seasonal products

**Advantages:**
- Better equipment utilization than job production
- Lower costs than job production
- Some flexibility

**Disadvantages:**
- Inventory buildup between stages
- Changeover time losses
- Work-in-progress inventory

### 3. Mass Production (Flow Production)
Continuous production of identical products in large quantities.

**Characteristics:**
- Low variety, high volume
- Dedicated equipment and tools
- Assembly lines
- Examples: Automobiles, electronics, packaged foods

**Advantages:**
- Low cost per unit
- High equipment utilization
- Consistent quality
- Simplified planning

**Disadvantages:**
- High initial investment
- Inflexible to changes
- Worker monotony
- Vulnerable to breakdowns

### 4. Continuous Production
Non-stop production of very high volume standardized products.

**Characteristics:**
- 24/7 operation
- Fully automated processes
- Capital intensive
- Examples: Oil refineries, chemical plants, cement production

**Advantages:**
- Lowest cost per unit
- Maximum equipment utilization
- Consistent quality
- Automated quality control

**Disadvantages:**
- Extremely high investment
- No flexibility
- High maintenance requirements
- Major losses if stopped

## Factory Layout Design Principles

### Objectives of Good Layout:
1. **Minimize material handling** - Reduce movement of materials
2. **Optimize space utilization** - Use available space effectively
3. **Ensure worker safety** - Safe movement and operations
4. **Facilitate supervision** - Easy monitoring of operations
5. **Allow flexibility** - Adapt to future changes
6. **Reduce production time** - Minimize delays

### Types of Layouts:

#### 1. Process Layout (Functional Layout)
Grouping similar processes together in departments.

**Example Layout:**
- All drilling machines together
- All welding stations together
- All painting booths together
- All assembly areas together

**Best for:** Job production and small batch production
**Advantages:** Flexibility, equipment sharing, skilled supervision
**Disadvantages:** High material handling, complex scheduling, longer flow paths

#### 2. Product Layout (Line Layout)
Arranging equipment in sequence of operations for specific products.

**Example Layout:**
Car assembly line: Frame → Engine → Body → Paint → Interior → Testing

**Best for:** Mass production
**Advantages:** Low material handling, simplified scheduling, low work-in-progress
**Disadvantages:** Inflexible, vulnerable to breakdowns, high investment

#### 3. Fixed Position Layout
Product remains stationary, resources move to the product.

**Example Layout:** Shipbuilding, aircraft assembly, large machine construction

**Best for:** Large, heavy products
**Advantages:** Minimal product movement, high flexibility
**Disadvantages:** Resource scheduling complexity, space intensive

#### 4. Cellular Layout (Group Technology)
Creating cells for product families with similar processing requirements.

**Example Layout:** Cell for small metal parts: Saw → Lathe → Drill → Grind

**Best for:** Medium variety, medium volume
**Advantages:** Reduced material handling, faster throughput, team ownership
**Disadvantages:** Potential underutilization, duplicate equipment

## Material Flow Analysis

### Flow Patterns:
1. **Straight Line Flow** - Simple, linear movement (I-shape)
2. **U-Shaped Flow** - Start and end near each other (U-shape)
3. **Circular Flow** - Continuous loop movement (O-shape)
4. **Serpentine Flow** - Back-and-forth pattern (S-shape)

### Material Handling Principles:
1. **Plan all handling** - Design handling as part of process
2. **Minimize handling** - Reduce number of handlings
3. **Use gravity** - Where possible, for free movement
4. **Standardize** - Use standard containers and equipment
5. **Maintain flow** - Avoid interruptions and delays

## Space Planning Calculations

### Key Metrics:
1. **Space Utilization Ratio** = (Production Area ÷ Total Area) × 100
   - Target: 60-80% for manufacturing space
   - Remainder for aisles, storage, utilities

2. **Aisle Space Requirements:**
   - Main aisles: 3-4 meters wide
   - Secondary aisles: 2-3 meters wide
   - Working aisles: 1-1.5 meters wide

3. **Equipment Spacing:**
   - Safety clearance: 1 meter minimum
   - Maintenance access: Consider equipment doors and servicing needs
   - Material handling access: Space for forklifts or conveyors

## Layout Planning Process

### Step-by-Step Approach:
1. **Gather data** - Product information, volumes, processes
2. **Determine relationships** - Which areas need to be close
3. **Calculate space requirements** - Equipment, storage, personnel
4. **Develop alternatives** - Create multiple layout options
5. **Evaluate alternatives** - Using quantitative and qualitative factors
6. **Select and implement** - Choose best option and execute
7. **Review and improve** - Continuously optimize

### Relationship Chart (REL Chart):
Visual tool showing required closeness between departments:
- A = Absolutely necessary (adjacent)
- E = Especially important (very close)
- I = Important (close)
- O = Ordinary closeness (not important)
- U = Unimportant (separate if possible)
- X = Not desirable (keep apart)

## Modern Layout Considerations

### 1. Flexibility Requirements:
- Design for future expansion
- Modular equipment arrangement
- Movable partitions and utilities
- Multi-purpose spaces

### 2. Safety Regulations:
- Fire exit requirements
- Hazardous material segregation
- Emergency equipment access
- Ventilation and lighting standards

### 3. Ergonomics and Human Factors:
- Reduce unnecessary walking
- Comfortable working positions
- Natural workflow patterns
- Visual management opportunities

### 4. Environmental Considerations:
- Energy efficiency
- Waste management
- Noise control
- Sustainable materials

## Layout Evaluation Methods

### 1. Quantitative Evaluation:
- **Material handling cost** - Calculate transportation costs
- **Space utilization** - Measure effective use of space
- **Travel distance** - Total distance materials travel
- **Throughput time** - Time from start to finish

### 2. Qualitative Evaluation:
- **Safety assessment** - Risk evaluation
- **Flexibility rating** - Adaptability to changes
- **Employee satisfaction** - Worker feedback
- **Supervision ease** - Monitoring effectiveness

## Case Study: Automotive Parts Factory

### Original Layout (Process Layout):
- Long distances between processes
- High material handling costs
- Complex scheduling
- 45% space utilization

### Improved Layout (Cellular Layout):
- Created 3 product family cells
- Reduced travel distance by 60%
- Increased space utilization to 75%
- Reduced throughput time by 40%

### Implementation Results:
- 25% reduction in material handling costs
- 30% increase in productivity
- Improved quality control
- Higher employee satisfaction

## Summary
Production systems and layouts form the foundation of manufacturing efficiency. Choosing the right system for your product mix and designing an optimal layout significantly impacts cost, quality, and delivery performance. The key is balancing efficiency with flexibility to meet current needs while adapting to future changes.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "Which production system is best for custom machinery?",
          options: [
            "Mass production",
            "Job production",
            "Continuous production",
            "Batch production"
          ],
          correctAnswer: 1,
          explanation: "Job production is ideal for custom machinery as it handles single items or small batches to customer specifications."
        },
        {
          id: 2,
          question: "What characterizes batch production?",
          options: [
            "24/7 non-stop operation",
            "Equipment changeovers between batches",
            "Dedicated equipment for one product",
            "No inventory between stages"
          ],
          correctAnswer: 1,
          explanation: "Batch production involves producing limited quantities in groups with equipment changeovers between batches."
        },
        {
          id: 3,
          question: "What is the main advantage of mass production?",
          options: [
            "High customization",
            "Low cost per unit",
            "Worker variety",
            "Low initial investment"
          ],
          correctAnswer: 1,
          explanation: "Mass production achieves low cost per unit through high volume and dedicated equipment."
        },
        {
          id: 4,
          question: "Which layout groups similar processes together?",
          options: [
            "Product layout",
            "Process layout",
            "Fixed position layout",
            "Cellular layout"
          ],
          correctAnswer: 1,
          explanation: "Process layout groups similar processes together in departments, like all drilling machines in one area."
        },
        {
          id: 5,
          question: "What layout keeps the product stationary?",
          options: [
            "Line layout",
            "Fixed position layout",
            "Cellular layout",
            "Process layout"
          ],
          correctAnswer: 1,
          explanation: "Fixed position layout keeps large, heavy products stationary while resources move to them."
        },
        {
          id: 6,
          question: "What does 'A' represent in a REL chart?",
          options: [
            "Absolutely necessary closeness",
            "Average distance",
            "Avoid proximity",
            "Additional space needed"
          ],
          correctAnswer: 0,
          explanation: "'A' in REL charts means absolutely necessary - departments must be adjacent."
        },
        {
          id: 7,
          question: "What is the target space utilization for manufacturing?",
          options: [
            "30-40%",
            "60-80%",
            "90-100%",
            "40-50%"
          ],
          correctAnswer: 1,
          explanation: "60-80% space utilization is optimal for manufacturing areas, with remainder for aisles and utilities."
        },
        {
          id: 8,
          question: "Which flow pattern has start and end points near each other?",
          options: [
            "Straight line flow",
            "U-shaped flow",
            "Circular flow",
            "Serpentine flow"
          ],
          correctAnswer: 1,
          explanation: "U-shaped flow places start and end points close together, reducing material handling."
        },
        {
          id: 9,
          question: "What is the first step in layout planning?",
          options: [
            "Implement the layout",
            "Gather data on products and processes",
            "Purchase equipment",
            "Train employees"
          ],
          correctAnswer: 1,
          explanation: "The first step is gathering data on products, volumes, processes, and requirements."
        },
        {
          id: 10,
          question: "What does cellular layout group together?",
          options: [
            "All similar equipment",
            "Product families with similar processes",
            "All raw materials",
            "Management offices"
          ],
          correctAnswer: 1,
          explanation: "Cellular layout groups equipment needed for product families with similar processing requirements."
        },
        {
          id: 11,
          question: "Which production system operates 24/7?",
          options: [
            "Job production",
            "Batch production",
            "Continuous production",
            "Mass production"
          ],
          correctAnswer: 2,
          explanation: "Continuous production operates non-stop 24/7 for very high volume standardized products."
        },
        {
          id: 12,
          question: "What is a disadvantage of product layout?",
          options: [
            "High flexibility",
            "Vulnerability to breakdowns",
            "Complex scheduling",
            "High material handling"
          ],
          correctAnswer: 1,
          explanation: "Product layouts are vulnerable to breakdowns - one stopped machine can stop the entire line."
        },
        {
          id: 13,
          question: "What should aisle width be for main aisles?",
          options: [
            "1-1.5 meters",
            "3-4 meters",
            "5-6 meters",
            "0.5-1 meter"
          ],
          correctAnswer: 1,
          explanation: "Main aisles typically need 3-4 meters width for material handling equipment movement."
        },
        {
          id: 14,
          question: "What does space utilization ratio measure?",
          options: [
            "Employee satisfaction",
            "Production area vs total area",
            "Equipment cost",
            "Production speed"
          ],
          correctAnswer: 1,
          explanation: "Space utilization ratio = (Production Area ÷ Total Area) × 100, measuring effective space use."
        },
        {
          id: 15,
          question: "Which layout is best for medium variety/volume?",
          options: [
            "Process layout",
            "Cellular layout",
            "Fixed position layout",
            "Mass production layout"
          ],
          correctAnswer: 1,
          explanation: "Cellular layout works well for medium variety and volume production environments."
        },
        {
          id: 16,
          question: "What principle suggests using gravity in material handling?",
          options: [
            "Maximize handling",
            "Use manual handling only",
            "Use gravity where possible",
            "Avoid all movement"
          ],
          correctAnswer: 2,
          explanation: "Using gravity for material movement where possible reduces energy costs and complexity."
        },
        {
          id: 17,
          question: "What does 'X' mean in a REL chart?",
          options: [
            "Excellent location",
            "Not desirable - keep apart",
            "Extra space needed",
            "Cross-functional area"
          ],
          correctAnswer: 1,
          explanation: "'X' in REL charts means not desirable - departments should be kept apart if possible."
        },
        {
          id: 18,
          question: "What is evaluated in qualitative layout assessment?",
          options: [
            "Only material costs",
            "Safety and employee satisfaction",
            "Only equipment costs",
            "Only space measurements"
          ],
          correctAnswer: 1,
          explanation: "Qualitative assessment evaluates safety, flexibility, employee satisfaction, and supervision ease."
        },
        {
          id: 19,
          question: "What modern consideration addresses future changes?",
          options: [
            "Fixed permanent design",
            "Flexibility requirements",
            "Maximum equipment density",
            "Minimum aisle space"
          ],
          correctAnswer: 1,
          explanation: "Designing for flexibility allows adaptation to future production changes and expansions."
        },
        {
          id: 20,
          question: "What reduced by 60% in the case study cellular layout?",
          options: [
            "Employee count",
            "Travel distance",
            "Product quality",
            "Equipment cost"
          ],
          correctAnswer: 1,
          explanation: "The cellular layout case study reduced travel distance by 60% through better process grouping."
        }
      ]
    },

    // MODULE 2: Manufacturing Processes and Technology
    {
      id: 2,
      title: "Manufacturing Processes and Technology",
      content: `# Module 2: Manufacturing Processes and Technology

This module explores advanced manufacturing processes and the technologies that enable efficient production. Understanding these processes is essential for selecting the right methods for your products.

## Classification of Manufacturing Processes

### 1. Forming Processes
Changing the shape of materials without adding or removing material.

**Types of Forming:**
- **Casting** - Pouring molten material into molds
- **Forging** - Hammering or pressing metal into shape
- **Extrusion** - Pushing material through a die
- **Rolling** - Passing material between rollers
- **Sheet metal forming** - Bending, drawing, stamping

### 2. Machining Processes
Removing material to achieve desired shape and dimensions.

**Types of Machining:**
- **Turning** - Rotating workpiece against cutting tool (lathes)
- **Milling** - Rotating cutter removes material from workpiece
- **Drilling** - Creating holes with rotating drill bits
- **Grinding** - Using abrasive wheels for fine finishing
- **Electrical Discharge Machining (EDM)** - Using electrical sparks

### 3. Joining Processes
Connecting materials together permanently or semi-permanently.

**Types of Joining:**
- **Welding** - Melting materials to fuse them
- **Brazing/Soldering** - Using filler metal with lower melting point
- **Adhesive bonding** - Using glues or epoxies
- **Mechanical fastening** - Screws, bolts, rivets
- **Snap fits** - Designed interlocking features

### 4. Additive Manufacturing (3D Printing)
Building objects layer by layer from digital models.

**Types of Additive Manufacturing:**
- **Fused Deposition Modeling (FDM)** - Extruding thermoplastic
- **Stereolithography (SLA)** - Curing liquid resin with UV light
- **Selective Laser Sintering (SLS)** - Fusing powder with laser
- **Binder Jetting** - Gluing powder layers
- **Metal 3D Printing** - Various metal additive processes

## Advanced Manufacturing Technologies

### 1. Computer Numerical Control (CNC)
Automated control of machining tools using computer programs.

**CNC Advantages:**
- High precision and repeatability
- Complex shapes possible
- Reduced operator skill requirements
- 24/7 operation capability
- Quick changeovers with program changes

**CNC Components:**
- **Controller** - Computer that reads G-code
- **Drive system** - Motors that move tools/workpieces
- **Feedback system** - Sensors for position verification
- **Tool changer** - Automatic tool switching

### 2. Robotics in Manufacturing

**Industrial Robot Applications:**
- **Material handling** - Loading/unloading, palletizing
- **Welding** - Arc welding, spot welding
- **Painting/coating** - Consistent application
- **Assembly** - Precision component placement
- **Inspection** - Quality checks and measurements

**Robot Types:**
- **Articulated robots** - Jointed arm (most common)
- **SCARA robots** - Selective Compliance Assembly Robot Arm
- **Delta robots** - Parallel linkage for high speed
- **Cartesian robots** - Linear movement in XYZ axes
- **Collaborative robots (Cobots)** - Safe human-robot interaction

### 3. Computer-Aided Manufacturing (CAM)
Using software to control manufacturing processes.

**CAM Functions:**
- Toolpath generation
- Machine code generation (G-code)
- Simulation of machining operations
- Optimization of cutting parameters
- Post-processing for specific machines

### 4. Flexible Manufacturing Systems (FMS)
Automated systems that can produce various products with minimal changeover time.

**FMS Components:**
- CNC machines
- Automated material handling
- Central computer control
- Automated tool changing
- Automated inspection systems

**FMS Benefits:**
- Quick response to product changes
- Reduced work-in-progress
- High machine utilization
- Consistent quality
- Reduced labor costs

## Process Selection Criteria

### Factors to Consider:
1. **Material properties** - What can the material withstand?
2. **Production volume** - How many parts needed?
3. **Part complexity** - How complex are the geometries?
4. **Dimensional accuracy** - What tolerances are required?
5. **Surface finish** - What surface quality needed?
6. **Cost constraints** - What is the budget?
7. **Lead time** - How quickly are parts needed?

### Decision Matrix Example:
| Process | Best Volume | Accuracy | Surface Finish | Relative Cost |
|---------|-------------|----------|----------------|---------------|
| Sand Casting | High | Low | Rough | Low |
| CNC Machining | Low-Medium | High | Excellent | High |
| Injection Molding | Very High | Medium | Good | Low (per part) |
| 3D Printing | Very Low | Medium | Fair | High |

## Process Capability Analysis

### Understanding Process Limits:
1. **Tolerance** - Allowable variation in dimensions
2. **Process capability (Cp)** - How well process fits within tolerances
3. **Process capability index (Cpk)** - How centered process is within tolerances

### Cp and Cpk Calculations:
- **Cp = (USL - LSL) / (6σ)** - Higher is better (≥1.33 desired)
- **Cpk = min[(USL - μ)/(3σ), (μ - LSL)/(3σ)]** - Accounts for centering

**Interpretation:**
- Cp < 1.0: Process not capable
- Cp ≥ 1.33: Process capable
- Cpk < Cp: Process not centered
- Cpk = Cp: Process perfectly centered

## Sustainable Manufacturing

### Green Manufacturing Principles:
1. **Reduce** - Minimize material and energy use
2. **Reuse** - Use materials multiple times
3. **Recycle** - Reprocess materials for new uses
4. **Recover** - Extract energy from waste
5. **Redesign** - Design for environment from start

### Energy Efficiency Measures:
- **Variable speed drives** - Match motor speed to load
- **Heat recovery systems** - Capture waste heat
- **Efficient lighting** - LED with motion sensors
- **Compressed air management** - Reduce leaks and waste
- **Equipment scheduling** - Avoid idle running

## Industry 4.0 Technologies

### Smart Factory Components:
1. **Internet of Things (IoT)** - Connected sensors and devices
2. **Big Data Analytics** - Analysis of production data
3. **Cloud Computing** - Remote data storage and processing
4. **Artificial Intelligence** - Predictive maintenance, optimization
5. **Cybersecurity** - Protection of connected systems

### Digital Twin Technology:
Virtual replica of physical systems for simulation and optimization.

**Applications:**
- Process simulation before implementation
- Predictive maintenance scheduling
- Optimization of operating parameters
- Training without disrupting production

## Quality Considerations in Process Selection

### Process-Related Quality Factors:
1. **Repeatability** - Same results each time
2. **Reproducibility** - Same results across different conditions
3. **Stability** - Consistent performance over time
4. **Robustness** - Insensitive to minor variations

### Design for Manufacturing (DFM) Principles:
1. **Simplify designs** - Reduce number of parts
2. **Standardize components** - Use common parts
3. **Design for assembly** - Easy and logical assembly
4. **Consider process capabilities** - Design within process limits
5. **Minimize finishing operations** - Reduce secondary processes

## Case Study: Automotive Component Manufacturing

### Problem:
Producing 50,000 complex aluminum housings per month with ±0.05mm tolerance.

### Process Options Considered:
1. **Sand casting** - Low cost but poor accuracy
2. **Die casting** - Better accuracy, higher tooling cost
3. **CNC machining from solid** - Excellent accuracy, high material waste
4. **Investment casting + CNC finish** - Good balance

### Selected Solution:
Investment casting for near-net shape followed by CNC machining for critical features.

### Results:
- **Cost reduction**: 40% vs full CNC machining
- **Material savings**: 65% vs machining from solid
- **Quality**: All parts within specification
- **Lead time**: Reduced by 30%

## Summary
Selecting the right manufacturing processes involves balancing technical requirements, cost considerations, quality needs, and production volumes. Modern technologies like CNC, robotics, additive manufacturing, and Industry 4.0 enable new possibilities but require careful implementation. The most effective approach often combines multiple processes to leverage their respective strengths while minimizing weaknesses.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "Which process involves pouring molten material into molds?",
          options: [
            "Forging",
            "Casting",
            "Extrusion",
            "Machining"
          ],
          correctAnswer: 1,
          explanation: "Casting involves pouring molten material into molds where it solidifies into the desired shape."
        },
        {
          id: 2,
          question: "What does CNC stand for?",
          options: [
            "Computer Network Control",
            "Computer Numerical Control",
            "Central Numerical Computing",
            "Controlled Network Computing"
          ],
          correctAnswer: 1,
          explanation: "CNC stands for Computer Numerical Control - automated control of machining tools using computer programs."
        },
        {
          id: 3,
          question: "Which robot type is most common in manufacturing?",
          options: [
            "Delta robots",
            "Articulated robots",
            "Cartesian robots",
            "SCARA robots"
          ],
          correctAnswer: 1,
          explanation: "Articulated robots with jointed arms are the most common type in manufacturing applications."
        },
        {
          id: 4,
          question: "What does FMS stand for?",
          options: [
            "Fixed Manufacturing System",
            "Flexible Manufacturing System",
            "Fast Material System",
            "Fully Manual System"
          ],
          correctAnswer: 1,
          explanation: "FMS stands for Flexible Manufacturing System - automated systems that can produce various products."
        },
        {
          id: 5,
          question: "What is built layer by layer in additive manufacturing?",
          options: [
            "Only plastic products",
            "Objects from digital models",
            "Only metal parts",
            "Assembly lines"
          ],
          correctAnswer: 1,
          explanation: "Additive manufacturing (3D printing) builds objects layer by layer from digital 3D models."
        },
        {
          id: 6,
          question: "What does CAM software generate?",
          options: [
            "Product designs",
            "Machine code (G-code)",
            "Sales forecasts",
            "Employee schedules"
          ],
          correctAnswer: 1,
          explanation: "CAM software generates machine code (G-code) to control CNC machines from digital designs."
        },
        {
          id: 7,
          question: "What is the first 'R' in green manufacturing?",
          options: [
            "Repair",
            "Reduce",
            "Return",
            "Repeat"
          ],
          correctAnswer: 1,
          explanation: "Reduce is the first principle - minimizing material and energy use from the beginning."
        },
        {
          id: 8,
          question: "What does Cp measure in process capability?",
          options: [
            "Production cost",
            "How well process fits within tolerances",
            "Production speed",
            "Equipment age"
          ],
          correctAnswer: 1,
          explanation: "Cp measures how well a process fits within specification limits, without considering centering."
        },
        {
          id: 9,
          question: "What technology creates virtual replicas of physical systems?",
          options: [
            "Virtual Reality",
            "Digital Twin",
            "Cloud Storage",
            "Blockchain"
          ],
          correctAnswer: 1,
          explanation: "Digital Twin technology creates virtual replicas of physical systems for simulation and optimization."
        },
        {
          id: 10,
          question: "What is the main advantage of cobots?",
          options: [
            "Highest speed",
            "Lowest cost",
            "Safe human-robot interaction",
            "Largest reach"
          ],
          correctAnswer: 2,
          explanation: "Collaborative robots (cobots) are designed for safe interaction with human workers."
        },
        {
          id: 11,
          question: "Which process removes material to achieve shape?",
          options: [
            "Forming",
            "Machining",
            "Joining",
            "Casting"
          ],
          correctAnswer: 1,
          explanation: "Machining processes remove material through cutting to achieve desired shapes and dimensions."
        },
        {
          id: 12,
          question: "What does DFM stand for?",
          options: [
            "Digital Factory Management",
            "Design for Manufacturing",
            "Direct Factory Manufacturing",
            "Detailed Factory Monitoring"
          ],
          correctAnswer: 1,
          explanation: "DFM stands for Design for Manufacturing - designing products for efficient production."
        },
        {
          id: 13,
          question: "What is desired minimum Cp value?",
          options: [
            "0.5",
            "1.0",
            "1.33",
            "2.0"
          ],
          correctAnswer: 2,
          explanation: "Cp ≥ 1.33 is generally desired, indicating the process fits well within specification limits."
        },
        {
          id: 14,
          question: "Which joining process uses filler metal?",
          options: [
            "Welding",
            "Brazing",
            "Adhesive bonding",
            "Mechanical fastening"
          ],
          correctAnswer: 1,
          explanation: "Brazing uses filler metal with a lower melting point than the base materials being joined."
        },
        {
          id: 15,
          question: "What Industry 4.0 component involves connected sensors?",
          options: [
            "Big Data",
            "Internet of Things (IoT)",
            "Artificial Intelligence",
            "Cloud Computing"
          ],
          correctAnswer: 1,
          explanation: "Internet of Things (IoT) involves networks of connected sensors and devices in manufacturing."
        },
        {
          id: 16,
          question: "What process was combined with CNC in the case study?",
          options: [
            "Sand casting",
            "Injection molding",
            "Investment casting",
            "Forging"
          ],
          correctAnswer: 2,
          explanation: "The case study used investment casting for near-net shape followed by CNC machining."
        },
        {
          id: 17,
          question: "What does Cpk measure that Cp doesn't?",
          options: [
            "Production volume",
            "Process centering within limits",
            "Material cost",
            "Equipment age"
          ],
          correctAnswer: 1,
          explanation: "Cpk measures how centered the process is within specification limits, while Cp only measures spread."
        },
        {
          id: 18,
          question: "Which is NOT a green manufacturing principle?",
          options: [
            "Reduce",
            "Reuse",
            "Return",
            "Recycle"
          ],
          correctAnswer: 2,
          explanation: "The principles are Reduce, Reuse, Recycle, Recover, Redesign - Return is not one of them."
        },
        {
          id: 19,
          question: "What type of manufacturing builds up material?",
          options: [
            "Subtractive",
            "Additive",
            "Formative",
            "Joining"
          ],
          correctAnswer: 1,
          explanation: "Additive manufacturing builds up material layer by layer, unlike subtractive processes that remove material."
        },
        {
          id: 20,
          question: "What is key for high-volume production process selection?",
          options: [
            "Low tooling cost",
            "High flexibility",
            "Low per-part cost",
            "Manual operation"
          ],
          correctAnswer: 2,
          explanation: "For high-volume production, low per-part cost is critical, even with higher initial tooling investment."
        }
      ]
    },

    // MODULE 3: Production Planning and Control
    {
      id: 3,
      title: "Production Planning and Control",
      content: `# Module 3: Production Planning and Control

Production planning and control (PPC) is the brain of manufacturing operations. This module covers how to plan production activities, schedule resources, and control operations to meet customer demands efficiently.

## The PPC Framework

### Three Main Functions:
1. **Planning** - What to make, when, and with what resources
2. **Scheduling** - Detailed timing of operations
3. **Control** - Monitoring execution and taking corrective actions

### Objectives of PPC:
1. **Meet delivery dates** - Deliver products on time
2. **Optimize resource use** - Efficient use of men, machines, materials
3. **Minimize costs** - Reduce production and inventory costs
4. **Maximize productivity** - Achieve more output with same inputs
5. **Ensure quality** - Maintain quality standards throughout

## Planning Hierarchy

### 1. Strategic Planning (Long-term: 1-5 years)
- Capacity planning
- Facility location decisions
- Technology investments
- Make-or-buy decisions
- Supplier network development

### 2. Tactical Planning (Medium-term: 3-18 months)
- Aggregate production planning
- Workforce planning
- Inventory policy setting
- Master production scheduling
- Budgeting for production

### 3. Operational Planning (Short-term: Days to weeks)
- Detailed scheduling
- Material requirements planning
- Machine loading
- Work order release
- Daily production control

## Aggregate Production Planning (APP)

### Purpose:
Determine overall production levels to meet forecasted demand while minimizing costs.

### Strategies:

#### 1. Chase Strategy
Production matches demand exactly each period.
- **Advantages**: Minimal inventory
- **Disadvantages**: Workforce fluctuations, hiring/firing costs

#### 2. Level Strategy
Constant production rate, inventory absorbs demand variations.
- **Advantages**: Stable workforce, consistent operations
- **Disadvantages**: High inventory costs, risk of obsolescence

#### 3. Mixed Strategy
Combination of chase and level strategies.

### APP Cost Components:
1. **Regular production costs** - Normal time production
2. **Overtime costs** - Premium pay for extra hours
3. **Inventory holding costs** - Storage, insurance, capital
4. **Backorder costs** - Lost sales, customer dissatisfaction
5. **Hiring/firing costs** - Recruitment, training, severance

## Master Production Schedule (MPS)

### Definition:
A detailed plan stating what end items will be produced, in what quantities, and when.

### MPS Inputs:
1. **Forecasted demand** - Expected customer orders
2. **Actual orders** - Firm customer commitments
3. **Inventory levels** - Current stock availability
4. **Capacity constraints** - Production limitations
5. **Management policies** - Strategic decisions

### MPS Outputs:
1. **Production quantities** - What to produce
2. **Production timing** - When to produce
3. **Available-to-promise (ATP)** - What can be committed to new orders
4. **Capacity requirements** - Resource needs

### Time Fences in MPS:
1. **Frozen zone** (0-4 weeks): No changes allowed
2. **Slushy zone** (4-8 weeks): Limited changes with approval
3. **Liquid zone** (8+ weeks): Changes relatively easy

## Material Requirements Planning (MRP)

### MRP Logic:
1. **What is needed?** - Based on MPS
2. **What is available?** - Current inventory
3. **What must be made/purchased?** - Net requirements
4. **When are they needed?** - Time-phased requirements

### MRP Inputs:
1. **Master Production Schedule** - End item requirements
2. **Bill of Materials (BOM)** - Product structure
3. **Inventory records** - Current stock levels
4. **Lead times** - Purchasing and manufacturing times

### MRP Outputs:
1. **Planned order releases** - When to order/make components
2. **Order rescheduling** - Changes to existing orders
3. **Exception reports** - Problems requiring attention
4. **Performance reports** - System performance data

### Bill of Materials (BOM):
Hierarchical list of all components needed to make a product.

**Example BOM for Desk:**
- Level 0: Desk (1 unit)
  - Level 1: Desktop (1)
    - Level 2: Wood panel (1)
    - Level 2: Edge banding (4m)
  - Level 1: Legs (4)
    - Level 2: Metal tubes (4)
    - Level 2: Plastic feet (4)

## Capacity Planning

### Capacity Levels:
1. **Design capacity** - Maximum output under ideal conditions
2. **Effective capacity** - Maximum output under normal conditions
3. **Actual output** - What is actually achieved

### Capacity Measurements:
- **Utilization** = (Actual output ÷ Design capacity) × 100
- **Efficiency** = (Actual output ÷ Effective capacity) × 100

### Capacity Requirements Planning (CRP):
Converting material plans into resource requirements.

**CRP Process:**
1. Convert planned orders into capacity requirements
2. Compare with available capacity
3. Identify overloads and underloads
4. Develop solutions (overtime, outsourcing, rescheduling)

## Scheduling Techniques

### 1. Gantt Charts
Visual timeline showing when tasks will be performed.

**Types:**
- **Load charts** - Show capacity usage
- **Schedule charts** - Show job timing

### 2. Priority Rules for Job Sequencing:

**Common Rules:**
- **FCFS** (First Come First Served)
- **SPT** (Shortest Processing Time)
- **EDD** (Earliest Due Date)
- **CR** (Critical Ratio) = (Due date - Today) ÷ Remaining processing time
- **Slack per operation** = (Time until due date - Processing time) ÷ Number of operations

### 3. Theory of Constraints (TOC)
Focus on bottleneck resources that limit system output.

**Five Focusing Steps:**
1. Identify the system constraint
2. Decide how to exploit the constraint
3. Subordinate everything to above decision
4. Elevate the system constraint
5. Return to step 1 (don't let inertia become constraint)

## Production Control

### 1. Shop Floor Control
Monitoring and controlling production at operational level.

**Functions:**
- Order release to shop floor
- Order sequencing and dispatching
- Progress monitoring
- Expediting critical orders
- Data collection on performance

### 2. Just-in-Time (JIT) Production
Producing only what is needed, when needed, in needed quantity.

**JIT Elements:**
- **Pull system** - Production triggered by demand
- **Kanban system** - Signal cards for material movement
- **Reduced setup times** - Quick changeovers
- **Takt time** = Available production time ÷ Customer demand
- **Continuous improvement** - Always seeking better methods

### 3. Lean Manufacturing Tools:
- **5S** - Workplace organization
- **Value stream mapping** - Visualizing material and information flow
- **Standard work** - Documented best practices
- **Poka-yoke** - Mistake-proofing
- **Heijunka** - Production leveling

## Performance Metrics (KPIs)

### 1. Delivery Performance:
- **On-time delivery** % = (Orders delivered on time ÷ Total orders) × 100
- **Schedule adherence** % = (Actual production ÷ Planned production) × 100

### 2. Efficiency Metrics:
- **Overall Equipment Effectiveness (OEE)** = Availability × Performance × Quality
- **Throughput** = Number of units produced per time period
- **Cycle time** = Time to complete one unit

### 3. Inventory Metrics:
- **Inventory turnover** = Cost of goods sold ÷ Average inventory
- **Days of inventory** = 365 ÷ Inventory turnover
- **Stockout rate** = (Number of stockouts ÷ Total items requested) × 100

## Advanced Planning Systems

### 1. Manufacturing Execution System (MES)
Real-time monitoring and control of production operations.

**MES Functions:**
- Work order management
- Resource allocation
- Dispatching production
- Data collection
- Performance analysis

### 2. Advanced Planning and Scheduling (APS)
Sophisticated software for optimizing production schedules.

**APS Capabilities:**
- Finite capacity scheduling
- What-if analysis
- Multi-plant coordination
- Supply chain integration

### 3. Enterprise Resource Planning (ERP) Integration
PPC as part of overall business management system.

## Case Study: Electronics Assembly Plant

### Problem:
Poor on-time delivery (65%) despite high capacity utilization (85%).

### Analysis Findings:
- Ineffective scheduling causing frequent changeovers
- Poor material availability (20% stockouts)
- No visibility into production status
- High work-in-progress inventory

### Solutions Implemented:
1. **Implemented finite capacity scheduling** - Realistic planning
2. **Established kanban system** - Improved material flow
3. **Installed MES** - Real-time production tracking
4. **Reduced setup times** - From 45 to 15 minutes average
5. **Implemented daily production meetings** - Better coordination

### Results (6 months later):
- **On-time delivery**: Increased to 95%
- **Inventory turnover**: Improved from 8 to 15 times/year
- **Throughput**: Increased by 30%
- **OEE**: Improved from 65% to 82%

## Summary
Effective production planning and control balances competing objectives of customer service, cost efficiency, and resource utilization. Modern PPC integrates strategic planning with detailed scheduling and real-time control. The key is creating feasible plans, communicating them effectively, monitoring execution closely, and responding quickly to deviations. Technology enables more sophisticated planning, but fundamental principles of matching supply with demand remain constant.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are the three main functions of PPC?",
          options: [
            "Design, Build, Test",
            "Planning, Scheduling, Control",
            "Purchasing, Production, Sales",
            "Quality, Cost, Delivery"
          ],
          correctAnswer: 1,
          explanation: "PPC's three main functions are Planning (what to make), Scheduling (when to make), and Control (monitoring execution)."
        },
        {
          id: 2,
          question: "What strategy has constant production rate?",
          options: [
            "Chase strategy",
            "Level strategy",
            "Mixed strategy",
            "Demand strategy"
          ],
          correctAnswer: 1,
          explanation: "Level strategy maintains constant production rate, using inventory to absorb demand fluctuations."
        },
        {
          id: 3,
          question: "What is the MPS?",
          options: [
            "Material Production System",
            "Master Production Schedule",
            "Manufacturing Process Standard",
            "Main Production Strategy"
          ],
          correctAnswer: 1,
          explanation: "MPS is the Master Production Schedule - detailed plan of what end items to produce and when."
        },
        {
          id: 4,
          question: "What does MRP stand for?",
          options: [
            "Manufacturing Resource Planning",
            "Material Requirements Planning",
            "Machine Replacement Program",
            "Maintenance Repair Planning"
          ],
          correctAnswer: 1,
          explanation: "MRP stands for Material Requirements Planning - determining what materials are needed and when."
        },
        {
          id: 5,
          question: "What is a hierarchical list of product components?",
          options: [
            "Production schedule",
            "Bill of Materials (BOM)",
            "Inventory record",
            "Capacity plan"
          ],
          correctAnswer: 1,
          explanation: "Bill of Materials (BOM) is a hierarchical list of all components needed to make a product."
        },
        {
          id: 6,
          question: "What does utilization measure?",
          options: [
            "Quality level",
            "Actual output vs design capacity",
            "Employee satisfaction",
            "Cost efficiency"
          ],
          correctAnswer: 1,
          explanation: "Utilization = (Actual output ÷ Design capacity) × 100, measuring use of maximum capacity."
        },
        {
          id: 7,
          question: "Which priority rule uses shortest processing time?",
          options: [
            "FCFS",
            "SPT",
            "EDD",
            "CR"
          ],
          correctAnswer: 1,
          explanation: "SPT (Shortest Processing Time) prioritizes jobs with the shortest processing time first."
        },
        {
          id: 8,
          question: "What is the first step in Theory of Constraints?",
          options: [
            "Subordinate other processes",
            "Identify the system constraint",
            "Elevate the constraint",
            "Exploit the constraint"
          ],
          correctAnswer: 1,
          explanation: "The first of five focusing steps is to identify the system constraint (bottleneck)."
        },
        {
          id: 9,
          question: "What triggers production in JIT?",
          options: [
            "Forecasted demand",
            "Management decision",
            "Customer demand (pull system)",
            "Material availability"
          ],
          correctAnswer: 2,
          explanation: "JIT uses a pull system where production is triggered by actual customer demand, not forecasts."
        },
        {
          id: 10,
          question: "What does OEE measure?",
          options: [
            "Only equipment availability",
            "Availability × Performance × Quality",
            "Only production speed",
            "Only quality rate"
          ],
          correctAnswer: 1,
          explanation: "Overall Equipment Effectiveness (OEE) = Availability × Performance × Quality, measuring total productive efficiency."
        },
        {
          id: 11,
          question: "What planning horizon is 1-5 years?",
          options: [
            "Operational planning",
            "Tactical planning",
            "Strategic planning",
            "Daily planning"
          ],
          correctAnswer: 2,
          explanation: "Strategic planning has a 1-5 year horizon, covering capacity, facilities, and major investments."
        },
        {
          id: 12,
          question: "Which cost is NOT in aggregate planning?",
          options: [
            "Regular production costs",
            "Inventory holding costs",
            "Employee lunch costs",
            "Hiring/firing costs"
          ],
          correctAnswer: 2,
          explanation: "Employee lunch costs are not typically considered in aggregate production planning cost optimization."
        },
        {
          id: 13,
          question: "What zone allows no MPS changes?",
          options: [
            "Liquid zone",
            "Slushy zone",
            "Frozen zone",
            "Flexible zone"
          ],
          correctAnswer: 2,
          explanation: "The frozen zone (typically 0-4 weeks) allows no changes to the Master Production Schedule."
        },
        {
          id: 14,
          question: "What is a key MRP input?",
          options: [
            "Sales forecasts",
            "Bill of Materials",
            "Customer complaints",
            "Supplier prices"
          ],
          correctAnswer: 1,
          explanation: "Bill of Materials is a key MRP input, defining what components are needed for each product."
        },
        {
          id: 15,
          question: "What does CRP stand for?",
          options: [
            "Critical Resource Planning",
            "Capacity Requirements Planning",
            "Cost Reduction Program",
            "Customer Response Planning"
          ],
          correctAnswer: 1,
          explanation: "CRP stands for Capacity Requirements Planning - converting material plans into resource needs."
        },
        {
          id: 16,
          question: "What visual tool shows task timing?",
          options: [
            "Pareto chart",
            "Gantt chart",
            "Fishbone diagram",
            "Control chart"
          ],
          correctAnswer: 1,
          explanation: "Gantt charts visually show when tasks are scheduled to start and finish on a timeline."
        },
        {
          id: 17,
          question: "What does kanban mean?",
          options: [
            "Just-in-time",
            "Signal card",
            "Continuous flow",
            "Quality circle"
          ],
          correctAnswer: 1,
          explanation: "Kanban means 'signal card' in Japanese - used in pull systems to signal when to produce or move materials."
        },
        {
          id: 18,
          question: "What does MES provide?",
          options: [
            "Strategic planning",
            "Real-time production monitoring",
            "Financial accounting",
            "Marketing analysis"
          ],
          correctAnswer: 1,
          explanation: "Manufacturing Execution System (MES) provides real-time monitoring and control of production operations."
        },
        {
          id: 19,
          question: "What improved from 65% to 95% in the case study?",
          options: [
            "Capacity utilization",
            "On-time delivery",
            "Employee count",
            "Product variety"
          ],
          correctAnswer: 1,
          explanation: "The case study improved on-time delivery from 65% to 95% through better planning and control."
        },
        {
          id: 20,
          question: "What is takt time formula?",
          options: [
            "Production time ÷ Units produced",
            "Available time ÷ Customer demand",
            "Setup time ÷ Run time",
            "Work time ÷ Break time"
          ],
          correctAnswer: 1,
          explanation: "Takt time = Available production time ÷ Customer demand, setting the production pace to match demand."
        }
      ]
    },

    // MODULE 4: Quality Engineering in Production
    {
      id: 4,
      title: "Quality Engineering in Production",
      content: `# Module 4: Quality Engineering in Production

Quality engineering integrates quality principles into the entire production system. This module focuses on designing quality into products and processes rather than inspecting quality into finished products.

## Quality by Design (QbD)

### Philosophy:
Build quality into products from the beginning through robust design and process engineering.

### Key Principles:
1. **Prevention over detection** - Stop defects before they occur
2. **Robust design** - Products perform well under varying conditions
3. **Process capability** - Processes consistently meet specifications
4. **Continuous improvement** - Always seeking better methods

## Statistical Process Control (SPC)

### Purpose:
Use statistical methods to monitor and control processes to ensure they operate at their full potential.

### Control Charts:

#### 1. Variables Control Charts (Continuous data)
- **X-bar and R chart** - For sample means and ranges
- **X-bar and S chart** - For sample means and standard deviations
- **Individuals and Moving Range chart** - For single measurements

#### 2. Attributes Control Charts (Discrete data)
- **p-chart** - For proportion defective
- **np-chart** - For number defective
- **c-chart** - For number of defects
- **u-chart** - For defects per unit

### Control Chart Interpretation:

#### Patterns Indicating Special Causes:
1. **Point outside control limits** - Immediate investigation needed
2. **Run of 7+ points on same side of center line** - Shift in process
3. **Trend of 6+ points consistently up or down** - Process drift
4. **Cyclical patterns** - Repeating patterns over time
5. **Hugging center line or control limits** - Unnatural behavior

## Design of Experiments (DOE)

### Purpose:
Systematically varying process inputs to determine their effect on outputs.

### Basic DOE Terminology:
- **Factor** - Input variable being studied
- **Level** - Specific value of a factor
- **Response** - Output being measured
- **Replication** - Repeating experimental runs
- **Randomization** - Random order of runs to avoid bias

### Common DOE Approaches:
1. **Full factorial design** - Test all combinations of factors
2. **Fractional factorial design** - Test subset of combinations
3. **Taguchi methods** - Robust parameter design
4. **Response surface methodology** - Modeling complex relationships

### DOE Benefits:
- Identify critical process parameters
- Optimize process settings
- Reduce variability
- Improve robustness
- Reduce development time

## Failure Mode and Effects Analysis (FMEA)

### Purpose:
Systematic method for identifying potential failures and preventing them.

### Types of FMEA:
1. **Design FMEA (DFMEA)** - Focus on product design failures
2. **Process FMEA (PFMEA)** - Focus on manufacturing process failures

### FMEA Process:

#### Step 1: Identify Potential Failures
- What could go wrong?
- How could the process fail?
- What are potential defects?

#### Step 2: Assess Severity (S)
- How serious are the effects if failure occurs?
- Scale: 1 (no effect) to 10 (catastrophic)

#### Step 3: Assess Occurrence (O)
- How likely is the failure to occur?
- Scale: 1 (very unlikely) to 10 (very likely)

#### Step 4: Assess Detection (D)
- How likely is current system to detect failure before it reaches customer?
- Scale: 1 (certain detection) to 10 (uncertain detection)

#### Step 5: Calculate Risk Priority Number (RPN)
- **RPN = S × O × D**
- Higher RPN indicates higher risk
- Typically address RPNs above threshold (e.g., 100)

#### Step 6: Take Action
- Develop actions to reduce high RPNs
- Recalculate RPN after improvements

## Measurement System Analysis (MSA)

### Purpose:
Ensure measurement systems produce reliable data.

### Key MSA Metrics:

#### 1. Accuracy
Closeness of measurements to true value.

#### 2. Precision
Closeness of repeated measurements to each other.

#### 3. Gauge Repeatability and Reproducibility (Gage R&R)
- **Repeatability** - Variation when same operator measures same part multiple times
- **Reproducibility** - Variation when different operators measure same part
- **Acceptance criteria**: Gage R&R ≤ 10% (excellent), ≤ 30% (acceptable)

### MSA Methods:
1. **Attribute agreement analysis** - For go/no-go gauges
2. **Variable measurement analysis** - For continuous measurements
3. **Linearity study** - Check accuracy across measurement range
4. **Stability study** - Check consistency over time

## Six Sigma Methodology

### DMAIC Process:

#### Define Phase:
- Define problem and project goals
- Identify customer requirements (CTQs)
- Create project charter
- Map current process

#### Measure Phase:
- Measure current process performance
- Validate measurement system
- Collect baseline data
- Calculate process capability

#### Analyze Phase:
- Analyze data to identify root causes
- Use statistical tools
- Verify cause-effect relationships
- Determine key process inputs

#### Improve Phase:
- Generate and evaluate solutions
- Design and conduct experiments
- Implement improvements
- Validate results

#### Control Phase:
- Establish control plans
- Implement monitoring systems
- Document new procedures
- Train personnel

### Six Sigma Tools:
- **Process mapping** - Visualize process flow
- **Cause-and-effect diagrams** - Identify potential causes
- **Hypothesis testing** - Statistically verify causes
- **Regression analysis** - Model relationships
- **Control plans** - Maintain improvements

## Total Productive Maintenance (TPM)

### Goal:
Maximize equipment effectiveness through comprehensive maintenance system.

### TPM Pillars:
1. **Autonomous maintenance** - Operators maintain their equipment
2. **Planned maintenance** - Scheduled preventive maintenance
3. **Quality maintenance** - Maintain equipment for quality
4. **Focused improvement** - Small group improvement activities
5. **Early equipment management** - Design for maintenance
6. **Training and education** - Develop maintenance skills
7. **Safety, health, environment** - Maintain safe operations
8. **TPM in administration** - Apply TPM to office functions

### Overall Equipment Effectiveness (OEE):
- **Availability** = Operating time ÷ Planned production time
- **Performance** = (Total pieces × Ideal cycle time) ÷ Operating time
- **Quality** = Good pieces ÷ Total pieces
- **OEE** = Availability × Performance × Quality
- **World-class OEE**: ≥ 85%

## Quality Function Deployment (QFD)

### Purpose:
Translate customer requirements into technical specifications.

### House of Quality Matrix:
1. **Customer requirements** - What customers want (Voice of Customer)
2. **Technical requirements** - How to achieve them
3. **Relationship matrix** - How technical requirements affect customer needs
4. **Competitive assessment** - How you compare to competitors
5. **Target values** - Specific technical targets
6. **Correlation matrix** - Interactions between technical requirements

## Robust Design and Tolerance Analysis

### Tolerance Stack-up Analysis:
Calculating the cumulative effect of component tolerances on assembly dimensions.

### Methods:
1. **Worst-case analysis** - Assumes all parts at tolerance limits
2. **Statistical analysis** - Uses probability of variations combining
3. **Monte Carlo simulation** - Random sampling to predict outcomes

### Design for Six Sigma (DFSS):
Methodology for designing products and processes that meet Six Sigma quality levels from the start.

**DMADV Process:**
- **Define** - Project goals and customer needs
- **Measure** - Customer needs and specifications
- **Analyze** - Design concepts and alternatives
- **Design** - Detailed design and optimization
- **Verify** - Validate design through testing

## Case Study: Automotive Component Supplier

### Problem:
High warranty claims (3.2%) on suspension components.

### Quality Engineering Approach:

#### 1. FMEA Analysis:
- Identified 12 high-risk failure modes (RPN > 120)
- Top issue: Corrosion failure (RPN = 252)

#### 2. DOE Implementation:
- Tested 5 coating parameters
- Optimized coating thickness and curing temperature
- Reduced corrosion failures by 85%

#### 3. SPC Implementation:
- Installed real-time control charts for critical dimensions
- Reduced dimensional variation by 40%

#### 4. TPM Program:
- Implemented autonomous maintenance
- Reduced unplanned downtime from 8% to 2%
- Improved OEE from 68% to 84%

### Results (18 months):
- **Warranty claims**: Reduced to 0.8%
- **Customer returns**: Reduced by 70%
- **Process capability**: Cp improved from 1.1 to 1.8
- **Cost savings**: $1.2 million annually

## Summary
Quality engineering moves quality from an inspection function to an integral part of production engineering. By designing quality into products and processes, manufacturers can achieve higher quality levels with lower costs. Statistical methods provide the tools to understand, control, and improve processes systematically. The most effective quality engineering integrates multiple approaches - prevention through design, control through statistics, and continuous improvement through systematic methodologies.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the philosophy of Quality by Design?",
          options: [
            "Inspect quality into finished products",
            "Build quality into products from beginning",
            "Fix quality problems as they occur",
            "Accept some defects as normal"
          ],
          correctAnswer: 1,
          explanation: "Quality by Design builds quality into products from the beginning through robust design and engineering."
        },
        {
          id: 2,
          question: "What does SPC stand for?",
          options: [
            "Standard Production Control",
            "Statistical Process Control",
            "Systematic Product Checking",
            "Structured Process Charting"
          ],
          correctAnswer: 1,
          explanation: "SPC stands for Statistical Process Control - using statistics to monitor and control processes."
        },
        {
          id: 3,
          question: "Which control chart is for proportion defective?",
          options: [
            "X-bar chart",
            "p-chart",
            "c-chart",
            "R chart"
          ],
          correctAnswer: 1,
          explanation: "p-charts are used for proportion defective (percentage of defective items in samples)."
        },
        {
          id: 4,
          question: "What indicates a process shift in control charts?",
          options: [
            "Single point near center",
            "Run of 7+ points on same side",
            "Two points near limits",
            "Alternating high-low points"
          ],
          correctAnswer: 1,
          explanation: "A run of 7+ consecutive points on the same side of the center line indicates a process shift."
        },
        {
          id: 5,
          question: "What does DOE stand for?",
          options: [
            "Design of Equipment",
            "Design of Experiments",
            "Documentation of Errors",
            "Development of Efficiency"
          ],
          correctAnswer: 1,
          explanation: "DOE stands for Design of Experiments - systematically varying inputs to understand effects on outputs."
        },
        {
          id: 6,
          question: "What is a 'factor' in DOE?",
          options: [
            "Output being measured",
            "Input variable being studied",
            "Experimental error",
            "Statistical calculation"
          ],
          correctAnswer: 1,
          explanation: "A factor is an input variable being studied in a Design of Experiments."
        },
        {
          id: 7,
          question: "What does FMEA analyze?",
          options: [
            "Only product costs",
            "Potential failures and their effects",
            "Only successful processes",
            "Employee performance"
          ],
          correctAnswer: 1,
          explanation: "FMEA (Failure Mode and Effects Analysis) systematically identifies potential failures and their effects."
        },
        {
          id: 8,
          question: "How is RPN calculated?",
          options: [
            "S + O + D",
            "S × O × D",
            "(S + O) × D",
            "S × (O + D)"
          ],
          correctAnswer: 1,
          explanation: "Risk Priority Number (RPN) = Severity × Occurrence × Detection."
        },
        {
          id: 9,
          question: "What does MSA evaluate?",
          options: [
            "Management skills",
            "Measurement system reliability",
            "Market share analysis",
            "Material storage adequacy"
          ],
          correctAnswer: 1,
          explanation: "MSA (Measurement System Analysis) evaluates the reliability and accuracy of measurement systems."
        },
        {
          id: 10,
          question: "What is Gage R&R?",
          options: [
            "Gauge repair and replacement",
            "Gauge repeatability and reproducibility",
            "General repair and renovation",
            "Gauge reading and recording"
          ],
          correctAnswer: 1,
          explanation: "Gage R&R measures repeatability (same operator) and reproducibility (different operators) of measurements."
        },
        {
          id: 11,
          question: "What does DMAIC stand for?",
          options: [
            "Design, Measure, Analyze, Improve, Control",
            "Define, Measure, Analyze, Improve, Control",
            "Develop, Monitor, Assess, Implement, Check",
            "Document, Measure, Assess, Improve, Confirm"
          ],
          correctAnswer: 1,
          explanation: "DMAIC is the Six Sigma improvement process: Define, Measure, Analyze, Improve, Control."
        },
        {
          id: 12,
          question: "What does TPM aim to maximize?",
          options: [
            "Production speed only",
            "Equipment effectiveness",
            "Employee numbers",
            "Raw material use"
          ],
          correctAnswer: 1,
          explanation: "TPM (Total Productive Maintenance) aims to maximize equipment effectiveness through comprehensive maintenance."
        },
        {
          id: 13,
          question: "What are the OEE components?",
          options: [
            "Speed, Quality, Cost",
            "Availability, Performance, Quality",
            "Time, Quantity, Defects",
            "Uptime, Output, Accuracy"
          ],
          correctAnswer: 1,
          explanation: "OEE = Availability × Performance × Quality, measuring overall equipment effectiveness."
        },
        {
          id: 14,
          question: "What does QFD translate?",
          options: [
            "Technical specs to machine settings",
            "Customer requirements to technical specs",
            "Cost data to prices",
            "Production data to reports"
          ],
          correctAnswer: 1,
          explanation: "QFD (Quality Function Deployment) translates customer requirements into technical specifications."
        },
        {
          id: 15,
          question: "What is tolerance stack-up analysis?",
          options: [
            "Measuring single tolerances",
            "Cumulative effect of component tolerances",
            "Stacking parts for measurement",
            "Tolerance reduction methods"
          ],
          correctAnswer: 1,
          explanation: "Tolerance stack-up analysis calculates how component tolerances combine in assemblies."
        },
        {
          id: 16,
          question: "What is DFSS?",
          options: [
            "Design for Six Sigma",
            "Development for System Safety",
            "Documentation for Standard Setup",
            "Design for Standard Size"
          ],
          correctAnswer: 0,
          explanation: "DFSS stands for Design for Six Sigma - designing products to meet Six Sigma quality from the start."
        },
        {
          id: 17,
          question: "What is world-class OEE target?",
          options: [
            "≥ 65%",
            "≥ 75%",
            "≥ 85%",
            "≥ 95%"
          ],
          correctAnswer: 2,
          explanation: "World-class OEE is typically ≥ 85%, indicating excellent equipment effectiveness."
        },
        {
          id: 18,
          question: "Which is NOT a TPM pillar?",
          options: [
            "Autonomous maintenance",
            "Planned maintenance",
            "Quality maintenance",
            "Financial maintenance"
          ],
          correctAnswer: 3,
          explanation: "Financial maintenance is not one of the eight TPM pillars; it focuses on equipment and processes."
        },
        {
          id: 19,
          question: "What reduced corrosion failures by 85% in case study?",
          options: [
            "Better inspection",
            "DOE optimization of coating",
            "Increased testing",
            "Supplier change"
          ],
          correctAnswer: 1,
          explanation: "DOE optimization of coating parameters reduced corrosion failures by 85% in the case study."
        },
        {
          id: 20,
          question: "What is acceptable Gage R&R percentage?",
          options: [
            "≤ 10% excellent, ≤ 30% acceptable",
            "≤ 5% excellent, ≤ 15% acceptable",
            "≤ 20% excellent, ≤ 50% acceptable",
            "≤ 30% excellent, ≤ 60% acceptable"
          ],
          correctAnswer: 0,
          explanation: "Gage R&R ≤ 10% is excellent, ≤ 30% is generally acceptable for measurement systems."
        }
      ]
    },

    // MODULE 5: Supply Chain and Logistics Management
    {
      id: 5,
      title: "Supply Chain and Logistics Management",
      content: `# Module 5: Supply Chain and Logistics Management

Production engineering extends beyond the factory walls to encompass the entire supply chain. This module covers how to manage material flows from suppliers through production to customers.

## Supply Chain Fundamentals

### Definition:
Network of organizations involved in producing and delivering a product or service, from raw materials to end customer.

### Supply Chain Flows:
1. **Material flow** - Physical movement of goods
2. **Information flow** - Data about orders, inventory, shipments
3. **Financial flow** - Payments, credits, financial arrangements
4. **Return flow** - Reverse logistics for returns, repairs, recycling

### Supply Chain Objectives:
1. **Responsiveness** - Quick response to customer needs
2. **Efficiency** - Low cost operations
3. **Reliability** - Consistent performance
4. **Resilience** - Ability to recover from disruptions
5. **Sustainability** - Environmental and social responsibility

## Supply Chain Strategy

### Strategic Fit:
Aligning supply chain capabilities with customer needs and competitive strategy.

### Supply Chain Types:

#### 1. Efficient Supply Chains
- **Focus**: Cost minimization
- **Products**: Standardized, predictable demand
- **Inventory strategy**: Minimize inventory
- **Lead time**: Not critical
- **Examples**: Basic commodities, standard components

#### 2. Responsive Supply Chains
- **Focus**: Speed and flexibility
- **Products**: Fashion, high-tech, innovative
- **Inventory strategy**: Buffer stock for flexibility
- **Lead time**: Critical competitive factor
- **Examples**: Fashion clothing, smartphones

#### 3. Risk-Hedging Supply Chains
- **Focus**: Risk reduction
- **Products**: Volatile supply or demand
- **Inventory strategy**: Multiple sources, safety stock
- **Lead time**: Secondary to reliability
- **Examples**: Agricultural products, specialty chemicals

#### 4. Agile Supply Chains
- **Focus**: Responsiveness to unpredictable demand
- **Products**: High variety, unpredictable
- **Inventory strategy**: Postponement strategies
- **Lead time**: Fast response capability
- **Examples**: Customized products, emergency supplies

## Supplier Management

### Supplier Selection Criteria:
1. **Quality capability** - Ability to meet specifications
2. **Delivery reliability** - On-time delivery performance
3. **Cost competitiveness** - Price and total cost
4. **Technical capability** - Design and engineering support
5. **Financial stability** - Long-term viability
6. **Responsiveness** - Quick response to issues
7. **Sustainability practices** - Environmental and social responsibility

### Supplier Relationship Management:
1. **Transactional relationships** - Arm's length, price-focused
2. **Collaborative relationships** - Information sharing, joint improvement
3. **Strategic partnerships** - Long-term, integrated planning
4. **Alliances** - Joint development, shared risks/rewards

### Supplier Performance Metrics:
- **On-time delivery rate** = (On-time deliveries ÷ Total deliveries) × 100
- **Quality acceptance rate** = (Accepted quantity ÷ Received quantity) × 100
- **Lead time adherence** = (Actual lead time ÷ Quoted lead time) × 100
- **Cost reduction performance** - Annual cost improvements

## Inventory Management

### Types of Inventory:
1. **Raw materials** - Inputs to production
2. **Work-in-progress** - Partially completed products
3. **Finished goods** - Completed products ready for sale
4. **Maintenance, repair, operations (MRO)** - Supplies for operations
5. **Safety stock** - Buffer against uncertainty
6. **Cycle stock** - Regular replenishment quantities
7. **Pipeline stock** - Inventory in transit

### Inventory Costs:
1. **Holding costs** - Storage, insurance, capital, obsolescence
2. **Ordering costs** - Processing, transportation, receiving
3. **Shortage costs** - Lost sales, expediting, customer dissatisfaction
4. **Purchase costs** - Price of materials

### Economic Order Quantity (EOQ):
Optimal order quantity that minimizes total inventory costs.

**EOQ Formula:**
EOQ = √[(2 × D × S) ÷ H]
Where:
- D = Annual demand
- S = Ordering cost per order
- H = Holding cost per unit per year

### Inventory Control Systems:

#### 1. Continuous Review System (Q-system)
- **How it works**: Order fixed quantity when inventory reaches reorder point
- **Best for**: Important, expensive items
- **Advantages**: Close control, lower safety stock
- **Disadvantages**: More monitoring required

#### 2. Periodic Review System (P-system)
- **How it works**: Review inventory at fixed intervals, order to reach target level
- **Best for**: Less critical, lower value items
- **Advantages**: Simplified administration, grouping orders
- **Disadvantages**: Higher safety stock needed

#### 3. ABC Analysis
Classify inventory based on value and control effort:

**A items (20% of items, 80% of value):** Tight control, frequent review
**B items (30% of items, 15% of value):** Moderate control
**C items (50% of items, 5% of value):** Simple control, bulk orders

## Logistics and Distribution

### Transportation Modes:

#### 1. Road Transport
- **Advantages**: Door-to-door, flexible, fast for short distances
- **Disadvantages**: Limited capacity, traffic delays, environmental impact
- **Best for**: Short distances, time-sensitive goods

#### 2. Rail Transport
- **Advantages**: High capacity, low cost for bulk, environmentally efficient
- **Disadvantages**: Inflexible routes, slow, terminal handling required
- **Best for**: Heavy bulk commodities, long distances

#### 3. Sea Transport
- **Advantages**: Very low cost, enormous capacity
- **Disadvantages**: Very slow, port handling required, weather dependent
- **Best for**: International bulk shipments, non-time-sensitive

#### 4. Air Transport
- **Advantages**: Very fast, reliable schedules
- **Disadvantages**: Very expensive, limited capacity, airport handling
- **Best for**: High-value, time-sensitive goods

#### 5. Pipeline Transport
- **Advantages**: Continuous flow, low operating cost, safe for hazardous
- **Disadvantages**: High initial investment, limited to liquids/gases
- **Best for**: Oil, gas, chemicals

### Warehouse Management:

#### Warehouse Functions:
1. **Receiving** - Accept incoming shipments
2. **Put-away** - Store items in locations
3. **Storage** - Hold inventory until needed
4. **Order picking** - Retrieve items for orders
5. **Packing** - Prepare for shipment
6. **Shipping** - Load and dispatch

#### Warehouse Layout Principles:
1. **Use vertical space** - High storage racks
2. **Minimize travel distance** - Popular items near shipping
3. **Optimize picking paths** - Efficient routing through warehouse
4. **Separate receiving/shipping** - Avoid congestion
5. **Safety considerations** - Clear aisles, proper signage

## Demand Forecasting

### Forecasting Methods:

#### 1. Qualitative Methods
- **Market research** - Customer surveys
- **Delphi method** - Expert consensus
- **Sales force composite** - Salesperson estimates
- **Executive opinion** - Management judgment

#### 2. Quantitative Methods
- **Time series analysis** - Historical patterns
  - Moving averages
  - Exponential smoothing
  - Trend projection
  - Seasonal adjustment
- **Causal models** - Relationship with other factors
  - Regression analysis
  - Econometric models

### Forecast Accuracy Measures:
- **Mean Absolute Deviation (MAD)** = Σ|Actual - Forecast| ÷ n
- **Mean Squared Error (MSE)** = Σ(Actual - Forecast)² ÷ n
- **Mean Absolute Percentage Error (MAPE)** = [Σ|(Actual - Forecast) ÷ Actual| ÷ n] × 100

## Lean Supply Chain Principles

### Key Principles:
1. **Eliminate waste** - Remove non-value-added activities
2. **Perfect quality** - Build quality in, stop defects
3. **Pull system** - Produce based on actual demand
4. **Flexibility** - Respond quickly to changes
5. **Partnerships** - Collaborate with supply chain partners
6. **Continuous improvement** - Always seek better methods

### Waste Categories in Supply Chain (TIMWOOD):
1. **Transportation** - Unnecessary movement
2. **Inventory** - Excess stock
3. **Motion** - Unnecessary people movement
4. **Waiting** - Idle time
5. **Overproduction** - Making more than needed
6. **Overprocessing** - More work than required
7. **Defects** - Errors and rework

## Technology in Supply Chain

### Key Technologies:
1. **Enterprise Resource Planning (ERP)** - Integrated business management
2. **Warehouse Management System (WMS)** - Warehouse operations control
3. **Transportation Management System (TMS)** - Transportation planning
4. **RFID** - Radio frequency identification for tracking
5. **GPS tracking** - Real-time shipment location
6. **Blockchain** - Secure, transparent transaction records
7. **Artificial Intelligence** - Demand forecasting, route optimization

## Risk Management in Supply Chain

### Risk Types:
1. **Supply risks** - Supplier failures, quality issues
2. **Demand risks** - Forecast errors, demand volatility
3. **Operational risks** - Process failures, equipment breakdowns
4. **Logistics risks** - Transportation disruptions, customs delays
5. **Financial risks** - Currency fluctuations, payment issues
6. **Geopolitical risks** - Political instability, trade restrictions

### Risk Mitigation Strategies:
1. **Diversification** - Multiple suppliers, markets
2. **Buffer inventory** - Safety stock for uncertainties
3. **Flexibility** - Alternative processes, flexible capacity
4. **Collaboration** - Information sharing with partners
5. **Insurance** - Financial protection
6. **Business continuity planning** - Preparedness for disruptions

## Sustainability in Supply Chain

### Triple Bottom Line:
1. **Economic sustainability** - Profitability, cost efficiency
2. **Environmental sustainability** - Reduced environmental impact
3. **Social sustainability** - Fair labor practices, community benefits

### Green Supply Chain Practices:
1. **Green procurement** - Environmentally preferable purchasing
2. **Reverse logistics** - Returns, recycling, remanufacturing
3. **Carbon footprint reduction** - Lower emissions in transportation
4. **Packaging optimization** - Reduce, reuse, recyclable materials
5. **Energy efficiency** - Efficient operations and transportation

## Case Study: Global Electronics Manufacturer

### Problem:
High inventory levels (45 days) with frequent stockouts (12%) and rising logistics costs.

### Analysis Findings:
- Inaccurate demand forecasts (MAPE 35%)
- Long supplier lead times (average 45 days)
- Inefficient transportation routes
- Poor visibility into inventory across locations

### Solutions Implemented:
1. **Implemented advanced forecasting system** - Reduced MAPE to 18%
2. **Developed supplier collaboration program** - Reduced lead times to 28 days
3. **Optimized transportation network** - Consolidated shipments, optimized routes
4. **Implemented inventory visibility system** - Real-time tracking across locations
5. **Established regional distribution centers** - Faster customer response

### Results (24 months):
- **Inventory levels**: Reduced from 45 to 28 days
- **Stockouts**: Reduced from 12% to 3%
- **Logistics costs**: Reduced by 22%
- **On-time delivery**: Improved from 82% to 96%
- **Carbon emissions**: Reduced by 18% through optimized transportation

## Summary
Effective supply chain management balances cost efficiency with service level requirements. Modern supply chains are complex networks requiring integration of information, materials, and financial flows. Technology enables greater visibility and coordination, while lean principles drive waste reduction. The most successful supply chains align their strategies with customer needs, build collaborative relationships with partners, and continuously adapt to changing conditions while managing risks effectively.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are the four flows in supply chain?",
          options: [
            "Material, Information, Financial, Return",
            "Raw, Work-in-progress, Finished, Spare",
            "Input, Process, Output, Feedback",
            "Purchase, Production, Sales, Service"
          ],
          correctAnswer: 0,
          explanation: "Supply chain flows: Material (physical goods), Information (data), Financial (payments), Return (reverse logistics)."
        },
        {
          id: 2,
          question: "Which supply chain focuses on cost minimization?",
          options: [
            "Responsive supply chain",
            "Efficient supply chain",
            "Risk-hedging supply chain",
            "Agile supply chain"
          ],
          correctAnswer: 1,
          explanation: "Efficient supply chains focus on cost minimization for standardized products with predictable demand."
        },
        {
          id: 3,
          question: "What is NOT a supplier selection criterion?",
          options: [
            "Quality capability",
            "Delivery reliability",
            "Supplier's office location beauty",
            "Cost competitiveness"
          ],
          correctAnswer: 2,
          explanation: "Supplier's office location beauty is not a valid selection criterion; focus on quality, delivery, cost, etc."
        },
        {
          id: 4,
          question: "What does EOQ minimize?",
          options: [
            "Only ordering costs",
            "Only holding costs",
            "Total inventory costs",
            "Only purchase costs"
          ],
          correctAnswer: 2,
          explanation: "Economic Order Quantity (EOQ) minimizes total inventory costs (holding + ordering costs)."
        },
        {
          id: 5,
          question: "What system orders fixed quantity at reorder point?",
          options: [
            "Periodic review system",
            "Continuous review system",
            "ABC analysis system",
            "JIT system"
          ],
          correctAnswer: 1,
          explanation: "Continuous review system (Q-system) orders fixed quantity when inventory reaches reorder point."
        },
        {
          id: 6,
          question: "Which transport is best for international bulk shipments?",
          options: [
            "Air transport",
            "Sea transport",
            "Road transport",
            "Rail transport"
          ],
          correctAnswer: 1,
          explanation: "Sea transport is best for international bulk shipments due to very low cost and high capacity."
        },
        {
          id: 7,
          question: "What does ABC analysis classify items by?",
          options: [
            "Color and size",
            "Value and control effort",
            "Weight and volume",
            "Supplier and origin"
          ],
          correctAnswer: 1,
          explanation: "ABC analysis classifies inventory based on value (A=high value) and appropriate control effort."
        },
        {
          id: 8,
          question: "What does MAPE measure?",
          options: [
            "Material availability",
            "Forecast accuracy",
            "Production efficiency",
            "Quality level"
          ],
          correctAnswer: 1,
          explanation: "MAPE (Mean Absolute Percentage Error) measures forecast accuracy as percentage error."
        },
        {
          id: 9,
          question: "What does 'pull system' mean in lean supply chain?",
          options: [
            "Push materials through system",
            "Produce based on actual demand",
            "Force suppliers to deliver",
            "Pull customers to buy"
          ],
          correctAnswer: 1,
          explanation: "Pull system means producing based on actual customer demand, not forecasts or schedules."
        },
        {
          id: 10,
          question: "What does WMS manage?",
          options: [
            "Workforce management",
            "Warehouse operations",
            "Website management",
            "Waste management"
          ],
          correctAnswer: 1,
          explanation: "WMS (Warehouse Management System) manages warehouse operations like receiving, storage, picking, shipping."
        },
        {
          id: 11,
          question: "Which is a supply chain risk?",
          options: [
            "Supplier failures",
            "Employee birthdays",
            "Office decorations",
            "Lunch menu variety"
          ],
          correctAnswer: 0,
          explanation: "Supplier failures are a supply risk; other options are not typical supply chain risks."
        },
        {
          id: 12,
          question: "What does triple bottom line include?",
          options: [
            "Economic, Environmental, Social",
            "Cost, Quality, Delivery",
            "Price, Value, Service",
            "Input, Process, Output"
          ],
          correctAnswer: 0,
          explanation: "Triple bottom line: Economic (profit), Environmental (planet), Social (people) sustainability."
        },
        {
          id: 13,
          question: "What is reverse logistics?",
          options: [
            "Forward material flow",
            "Returns, recycling, remanufacturing",
            "Backward financial flow",
            "Reverse engineering"
          ],
          correctAnswer: 1,
          explanation: "Reverse logistics handles returns, recycling, remanufacturing, and product end-of-life."
        },
        {
          id: 14,
          question: "What reduced from 45 to 28 days in case study?",
          options: [
            "Supplier lead times",
            "Inventory levels",
            "Production time",
            "Employee count"
          ],
          correctAnswer: 1,
          explanation: "Inventory levels reduced from 45 to 28 days in the case study through better management."
        },
        {
          id: 15,
          question: "Which is NOT a warehouse function?",
          options: [
            "Receiving",
            "Put-away",
            "Order picking",
            "Product design"
          ],
          correctAnswer: 3,
          explanation: "Product design is not a warehouse function; warehouses handle storage and distribution activities."
        },
        {
          id: 16,
          question: "What does EOQ formula include?",
          options: [
            "Annual demand, ordering cost, holding cost",
            "Monthly sales, labor cost, rent",
            "Product price, profit margin, taxes",
            "Quality level, defect rate, rework cost"
          ],
          correctAnswer: 0,
          explanation: "EOQ = √[(2 × Annual demand × Ordering cost) ÷ Holding cost per unit per year]."
        },
        {
          id: 17,
          question: "Which transport is fastest but most expensive?",
          options: [
            "Road transport",
            "Rail transport",
            "Sea transport",
            "Air transport"
          ],
          correctAnswer: 3,
          explanation: "Air transport is fastest but most expensive, suitable for high-value, time-sensitive goods."
        },
        {
          id: 18,
          question: "What does 'I' in TIMWOOD waste stand for?",
          options: [
            "Inventory",
            "Inefficiency",
            "Idleness",
            "Inaccuracy"
          ],
          correctAnswer: 0,
          explanation: "In TIMWOOD, I stands for Inventory waste (excess stock)."
        },
        {
          id: 19,
          question: "What improved from 82% to 96% in case study?",
          options: [
            "Employee satisfaction",
            "On-time delivery",
            "Profit margin",
            "Product quality"
          ],
          correctAnswer: 1,
          explanation: "On-time delivery improved from 82% to 96% through supply chain improvements."
        },
        {
          id: 20,
          question: "What is a qualitative forecasting method?",
          options: [
            "Exponential smoothing",
            "Market research surveys",
            "Moving averages",
            "Regression analysis"
          ],
          correctAnswer: 1,
          explanation: "Market research surveys are qualitative methods based on customer opinions, not historical data."
        }
      ]
    },

    // MODULE 6: Advanced Production Management
    {
      id: 6,
      title: "Advanced Production Management",
      content: `# Module 6: Advanced Production Management

This final module integrates all previous knowledge into comprehensive production management strategies. We explore advanced concepts for optimizing production systems, implementing Industry 4.0, and leading production organizations effectively.

## Production Strategy and Competitive Priorities

### Manufacturing Strategy:
Aligning production capabilities with business strategy to achieve competitive advantage.

### Competitive Priorities:

#### 1. Cost Leadership
- **Focus**: Lowest production cost
- **Key capabilities**: High efficiency, scale economies, waste elimination
- **Typical industries**: Commodities, basic products

#### 2. Quality Excellence
- **Focus**: Superior product quality and reliability
- **Key capabilities**: Precision, consistency, quality systems
- **Typical industries**: Automotive, aerospace, medical devices

#### 3. Delivery Speed
- **Focus**: Fast order fulfillment
- **Key capabilities**: Quick response, flexible capacity, efficient logistics
- **Typical industries**: Fashion, electronics, emergency supplies

#### 4. Delivery Reliability
- **Focus**: On-time delivery promise
- **Key capabilities**: Schedule adherence, capacity planning, buffer management
- **Typical industries**: Industrial equipment, project-based businesses

#### 5. Flexibility
- **Focus**: Adaptability to changes
- **Key capabilities**: Quick changeovers, versatile equipment, skilled workforce
- **Typical industries**: Custom manufacturing, job shops

#### 6. Innovation
- **Focus**: New product introduction
- **Key capabilities**: R&D integration, rapid prototyping, cross-functional teams
- **Typical industries**: Technology, pharmaceuticals, consumer electronics

### Order Winners vs Order Qualifiers:
- **Order qualifiers**: Minimum requirements to be considered by customers
- **Order winners**: Characteristics that make customers choose your product over competitors'

## Performance Measurement Systems

### Balanced Scorecard for Manufacturing:
Four perspectives for comprehensive performance measurement:

#### 1. Financial Perspective
- Return on assets
- Cost of goods sold
- Inventory turnover
- Value-added per employee

#### 2. Customer Perspective
- On-time delivery rate
- Customer satisfaction scores
- Market share
- Complaint resolution time

#### 3. Internal Process Perspective
- Overall Equipment Effectiveness (OEE)
- Throughput time
- First-pass yield
- Schedule adherence

#### 4. Learning and Growth Perspective
- Employee training hours
- Improvement suggestions implemented
- Cross-training percentage
- Employee satisfaction

### Manufacturing Performance Pyramid:
Hierarchical measurement system linking shop floor metrics to strategic objectives.

## Capacity Management Strategies

### Capacity Adjustment Options:
1. **Short-term adjustments** (Days to weeks)
   - Overtime/undertime
   - Shift adjustments
   - Temporary workers
   - Subcontracting

2. **Medium-term adjustments** (Weeks to months)
   - Hiring/layoffs
   - Additional shifts
   - Equipment modifications
   - Process improvements

3. **Long-term adjustments** (Months to years)
   - New equipment
   - Facility expansion
   - New technology
   - Strategic partnerships

### Capacity Cushion:
Extra capacity maintained to handle demand fluctuations.
- **Formula**: Capacity cushion = 100% - Utilization rate
- **Typical cushions**: 10-20% for stable demand, 20-30% for volatile demand

### Theory of Constraints (TOC) Implementation:

#### Five Focusing Steps in Practice:
1. **Identify** - Find the system constraint (bottleneck)
2. **Exploit** - Get maximum output from constraint
3. **Subordinate** - Align all other processes to constraint
4. **Elevate** - Increase constraint capacity if needed
5. **Repeat** - Find next constraint (continuous improvement)

#### Drum-Buffer-Rope (DBR) Scheduling:
- **Drum**: Constraint sets pace (drumbeat)
- **Buffer**: Time buffer before constraint
- **Rope**: Communication to release materials

## Industry 4.0 Implementation

### Smart Factory Components:

#### 1. Cyber-Physical Systems (CPS)
Integration of physical processes with computation and networking.

#### 2. Internet of Things (IoT)
Network of connected devices collecting and exchanging data.

#### 3. Big Data Analytics
Analysis of large datasets to identify patterns and insights.

#### 4. Cloud Computing
Remote data storage and processing capabilities.

#### 5. Artificial Intelligence and Machine Learning
Systems that learn and improve from experience.

#### 6. Additive Manufacturing
3D printing for prototypes, tooling, and production.

#### 7. Augmented Reality
Overlaying digital information on physical world.

### Implementation Roadmap:
1. **Assessment** - Current state analysis
2. **Strategy development** - Define vision and goals
3. **Pilot projects** - Small-scale implementations
4. **Scaling** - Expand successful pilots
5. **Integration** - Connect systems across organization
6. **Optimization** - Continuous improvement

## Sustainable Production Systems

### Circular Economy Principles:
1. **Design out waste** - Products designed for reuse/recycling
2. **Keep products in use** - Repair, refurbish, remanufacture
3. **Regenerate natural systems** - Renewable materials, clean energy

### Sustainable Manufacturing Practices:
1. **Energy efficiency** - Efficient equipment, heat recovery
2. **Material efficiency** - Reduce waste, recycling
3. **Water conservation** - Reduce, reuse, recycle water
4. **Emissions reduction** - Clean technologies, carbon capture
5. **Sustainable sourcing** - Responsible material procurement

### Life Cycle Assessment (LCA):
Evaluating environmental impacts of products from raw material extraction to end-of-life disposal.

## Human Factors in Production Management

### Workforce Management Strategies:

#### 1. High-Performance Work Systems (HPWS)
- Employee involvement in decision-making
- Extensive training and development
- Performance-based compensation
- Information sharing
- Job security

#### 2. Lean Workforce Practices:
- Cross-training for flexibility
- Team-based organization
- Continuous improvement participation
- Visual management
- Standardized work

### Change Management in Production:

#### Kotter's 8-Step Change Model:
1. Create urgency
2. Build guiding coalition
3. Form strategic vision
4. Enlist volunteer army
5. Enable action by removing barriers
6. Generate short-term wins
7. Sustain acceleration
8. Institute change

### Safety Management:
- **Safety culture** - Shared values about safety importance
- **Behavior-based safety** - Focus on safe behaviors
- **Safety metrics** - Recordable incident rate, lost time accidents
- **Preventive measures** - Risk assessments, safety training, protective equipment

## Advanced Planning and Optimization

### Advanced Planning and Scheduling (APS) Systems:
Sophisticated software for optimal production planning.

#### APS Capabilities:
- Finite capacity scheduling
- What-if scenario analysis
- Multi-plant coordination
- Supply chain integration
- Real-time rescheduling

### Optimization Techniques:

#### 1. Linear Programming
Mathematical method for optimizing objective function subject to constraints.

#### 2. Simulation Modeling
Computer models to test different scenarios without disrupting actual operations.

#### 3. Genetic Algorithms
Optimization technique inspired by natural selection.

#### 4. Machine Learning Optimization
AI systems that learn optimal strategies from data.

## Global Production Management

### International Manufacturing Strategies:

#### 1. Global Strategy
Centralized production for global markets.
- **Advantages**: Scale economies, consistent quality
- **Disadvantages**: Transportation costs, local responsiveness

#### 2. Multi-domestic Strategy
Local production for local markets.
- **Advantages**: Local responsiveness, lower transportation
- **Disadvantages**: Higher costs, inconsistent quality

#### 3. Transnational Strategy
Balance global integration with local responsiveness.
- **Advantages**: Combines benefits of both approaches
- **Disadvantages**: Complex to manage

### Global Supply Chain Considerations:
- **Cultural differences** - Work practices, communication styles
- **Legal and regulatory** - Different laws and standards
- **Logistics complexity** - Longer lead times, customs procedures
- **Currency fluctuations** - Exchange rate risks
- **Political risks** - Stability of operations

## Knowledge Management in Production

### Capturing and Leveraging Knowledge:
1. **Best practice sharing** - Document and share successful methods
2. **Lessons learned databases** - Record problems and solutions
3. **Community of practice** - Groups sharing expertise
4. **Mentoring programs** - Experienced workers train newcomers
5. **Digital knowledge repositories** - Centralized storage of information

### Learning Organization Characteristics:
- Systematic problem-solving
- Experimentation with new approaches
- Learning from past experience
- Learning from others
- Transferring knowledge quickly

## Future Trends in Production Engineering

### Emerging Technologies:
1. **Digital twins** - Virtual replicas for simulation
2. **Collaborative robots** - Safe human-robot collaboration
3. **Predictive maintenance** - AI-driven failure prediction
4. **Blockchain for supply chain** - Secure, transparent tracking
5. **5G connectivity** - Ultra-fast wireless for factories
6. **Edge computing** - Processing data closer to source

### Workforce Evolution:
- **Upskilling** - Training for new technologies
- **Remote operations** - Remote monitoring and control
- **Human-machine collaboration** - Enhanced teamwork with technology
- **Lifelong learning** - Continuous skill development

### Sustainability Integration:
- **Carbon-neutral manufacturing** - Net-zero emissions
- **Circular production systems** - Zero waste
- **Social responsibility** - Ethical labor practices
- **Transparent supply chains** - Full visibility of impacts

## Case Study: Transformational Production Improvement

### Company Background:
Medium-sized automotive supplier with declining competitiveness.

### Initial Situation:
- **Market position**: Losing customers to lower-cost competitors
- **Financial performance**: 3% operating margin (industry average 8%)
- **Operational metrics**: OEE 62%, on-time delivery 78%, defect rate 2.8%

### Transformation Program:

#### Phase 1: Foundation (6 months)
- Implemented basic lean principles (5S, visual management)
- Established performance measurement system
- Trained all employees in problem-solving
- Standardized key processes

#### Phase 2: Integration (12 months)
- Implemented TOC to identify and manage constraints
- Deployed Industry 4.0 technologies (IoT sensors, data analytics)
- Established high-performance work teams
- Implemented sustainable manufacturing practices

#### Phase 3: Optimization (Ongoing)
- Advanced analytics for continuous improvement
- Global supply chain optimization
- Innovation partnerships with customers
- Circular economy initiatives

### Results (36 months):
- **Operating margin**: Increased to 9.2%
- **OEE**: Improved to 86%
- **On-time delivery**: Achieved 98%
- **Defect rate**: Reduced to 0.4%
- **Employee turnover**: Reduced from 18% to 6%
- **Energy consumption**: Reduced by 25%
- **New business**: Won 3 major new customers

## Summary
Advanced production management requires integrating technical knowledge with strategic thinking and leadership skills. Successful production organizations balance competing priorities, leverage technology effectively, develop their workforce, and continuously adapt to changing conditions. The future of production engineering lies in smart, sustainable, and human-centric systems that deliver value to customers while respecting planetary boundaries and enhancing human potential.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "Which competitive priority focuses on lowest production cost?",
          options: [
            "Quality excellence",
            "Cost leadership",
            "Delivery speed",
            "Flexibility"
          ],
          correctAnswer: 1,
          explanation: "Cost leadership focuses on achieving the lowest production cost to compete on price."
        },
        {
          id: 2,
          question: "What are minimum requirements to be considered by customers?",
          options: [
            "Order winners",
            "Order qualifiers",
            "Order differentiators",
            "Order enhancers"
          ],
          correctAnswer: 1,
          explanation: "Order qualifiers are minimum requirements; order winners are what make customers choose you."
        },
        {
          id: 3,
          question: "Which is NOT a Balanced Scorecard perspective?",
          options: [
            "Financial perspective",
            "Customer perspective",
            "Supplier perspective",
            "Internal process perspective"
          ],
          correctAnswer: 2,
          explanation: "Supplier perspective is not one of the four Balanced Scorecard perspectives."
        },
        {
          id: 4,
          question: "What is capacity cushion formula?",
          options: [
            "Utilization rate - 100%",
            "100% - Utilization rate",
            "Actual output ÷ Design capacity",
            "Effective capacity ÷ Design capacity"
          ],
          correctAnswer: 1,
          explanation: "Capacity cushion = 100% - Utilization rate, representing extra capacity for fluctuations."
        },
        {
          id: 5,
          question: "What sets the pace in Drum-Buffer-Rope scheduling?",
          options: [
            "The fastest machine",
            "The constraint (drum)",
            "Customer demand",
            "Material availability"
          ],
          correctAnswer: 1,
          explanation: "The constraint (bottleneck) sets the pace as the drum in DBR scheduling."
        },
        {
          id: 6,
          question: "Which is an Industry 4.0 technology?",
          options: [
            "Internet of Things",
            "Traditional assembly lines",
            "Manual record keeping",
            "Paper-based scheduling"
          ],
          correctAnswer: 0,
          explanation: "Internet of Things (IoT) is a key Industry 4.0 technology connecting devices and sensors."
        },
        {
          id: 7,
          question: "What does circular economy aim to design out?",
          options: [
            "Profit",
            "Waste",
            "Employees",
            "Customers"
          ],
          correctAnswer: 1,
          explanation: "Circular economy aims to design out waste and keep products and materials in use."
        },
        {
          id: 8,
          question: "What does HPWS stand for?",
          options: [
            "High-Production Work System",
            "High-Performance Work Systems",
            "Human Productivity Work Structure",
            "Highly Paid Worker System"
          ],
          correctAnswer: 1,
          explanation: "HPWS stands for High-Performance Work Systems emphasizing employee involvement and development."
        },
        {
          id: 9,
          question: "What is the first step in Kotter's change model?",
          options: [
            "Build guiding coalition",
            "Create urgency",
            "Form strategic vision",
            "Generate short-term wins"
          ],
          correctAnswer: 1,
          explanation: "Kotter's first step is creating urgency - why change is necessary and important."
        },
        {
          id: 10,
          question: "What does APS stand for?",
          options: [
            "Advanced Production System",
            "Advanced Planning and Scheduling",
            "Automated Production Scheduling",
            "All-Purpose Software"
          ],
          correctAnswer: 1,
          explanation: "APS stands for Advanced Planning and Scheduling - sophisticated software for optimal planning."
        },
        {
          id: 11,
          question: "Which strategy has centralized global production?",
          options: [
            "Multi-domestic strategy",
            "Global strategy",
            "Transnational strategy",
            "Local strategy"
          ],
          correctAnswer: 1,
          explanation: "Global strategy centralizes production for global markets to achieve scale economies."
        },
        {
          id: 12,
          question: "What is NOT a knowledge management practice?",
          options: [
            "Best practice sharing",
            "Lessons learned databases",
            "Hiding information for security",
            "Community of practice"
          ],
          correctAnswer: 2,
          explanation: "Hiding information contradicts knowledge management goals of sharing and leveraging knowledge."
        },
        {
          id: 13,
          question: "What is a digital twin?",
          options: [
            "A physical backup machine",
            "Virtual replica for simulation",
            "Duplicate computer system",
            "Backup employee"
          ],
          correctAnswer: 1,
          explanation: "Digital twin is a virtual replica of a physical system used for simulation and optimization."
        },
        {
          id: 14,
          question: "What improved from 62% to 86% in case study?",
          options: [
            "On-time delivery",
            "OEE (Overall Equipment Effectiveness)",
            "Defect rate",
            "Employee turnover"
          ],
          correctAnswer: 1,
          explanation: "OEE improved from 62% to 86% in the transformational case study."
        },
        {
          id: 15,
          question: "What does LCA evaluate?",
          options: [
            "Labor cost analysis",
            "Environmental impacts through product life",
            "Learning curve analysis",
            "Logistics cost assessment"
          ],
          correctAnswer: 1,
          explanation: "LCA (Life Cycle Assessment) evaluates environmental impacts from raw materials to disposal."
        },
        {
          id: 16,
          question: "Which is a short-term capacity adjustment?",
          options: [
            "Building new factory",
            "Overtime/undertime",
            "Purchasing new equipment",
            "Strategic partnership"
          ],
          correctAnswer: 1,
          explanation: "Overtime/undertime are short-term capacity adjustments (days to weeks)."
        },
        {
          id: 17,
          question: "What is typical capacity cushion for volatile demand?",
          options: [
            "0-5%",
            "5-10%",
            "10-20%",
            "20-30%"
          ],
          correctAnswer: 3,
          explanation: "20-30% capacity cushion is typical for volatile demand environments."
        },
        {
          id: 18,
          question: "Which is a learning organization characteristic?",
          options: [
            "Avoiding experiments",
            "Systematic problem-solving",
            "Keeping knowledge secret",
            "Resisting change"
          ],
          correctAnswer: 1,
          explanation: "Systematic problem-solving is a key characteristic of learning organizations."
        },
        {
          id: 19,
          question: "What reduced from 18% to 6% in case study?",
          options: [
            "Defect rate",
            "Employee turnover",
            "Energy consumption",
            "Material cost"
          ],
          correctAnswer: 1,
          explanation: "Employee turnover reduced from 18% to 6% through improved workforce practices."
        },
        {
          id: 20,
          question: "What balances global integration with local responsiveness?",
          options: [
            "Global strategy",
            "Multi-domestic strategy",
            "Transnational strategy",
            "Export strategy"
          ],
          correctAnswer: 2,
          explanation: "Transnational strategy balances global integration benefits with local responsiveness needs."
        }
      ]
    }
  ],

  // FINAL EXAM (40 questions covering all modules)
  finalExam: [
    {
      id: 1,
      question: "Which production system is best for custom machinery?",
      options: [
        "Mass production",
        "Job production",
        "Continuous production",
        "Batch production"
      ],
      correctAnswer: 1,
      explanation: "From Module 1: Job production handles single items or small batches to customer specifications."
    },
    {
      id: 2,
      question: "What does CNC stand for?",
      options: [
        "Computer Network Control",
        "Computer Numerical Control",
        "Central Numerical Computing",
        "Controlled Network Computing"
      ],
      correctAnswer: 1,
      explanation: "From Module 2: CNC is Computer Numerical Control - automated control of machining tools."
    },
    {
      id: 3,
      question: "What are the three main functions of PPC?",
      options: [
        "Design, Build, Test",
        "Planning, Scheduling, Control",
        "Purchasing, Production, Sales",
        "Quality, Cost, Delivery"
      ],
      correctAnswer: 1,
      explanation: "From Module 3: PPC functions are Planning, Scheduling, and Control."
    },
    {
      id: 4,
      question: "What is the philosophy of Quality by Design?",
      options: [
        "Inspect quality into finished products",
        "Build quality into products from beginning",
        "Fix quality problems as they occur",
        "Accept some defects as normal"
      ],
      correctAnswer: 1,
      explanation: "From Module 4: Quality by Design builds quality in from the beginning."
    },
    {
      id: 5,
      question: "What does EOQ minimize?",
      options: [
        "Only ordering costs",
        "Only holding costs",
        "Total inventory costs",
        "Only purchase costs"
      ],
      correctAnswer: 2,
      explanation: "From Module 5: EOQ minimizes total inventory costs (holding + ordering)."
    },
    {
      id: 6,
      question: "Which competitive priority focuses on lowest production cost?",
      options: [
        "Quality excellence",
        "Cost leadership",
        "Delivery speed",
        "Flexibility"
      ],
      correctAnswer: 1,
      explanation: "From Module 6: Cost leadership focuses on achieving lowest production cost."
    },
    {
      id: 7,
      question: "Which layout groups similar processes together?",
      options: [
        "Product layout",
        "Process layout",
        "Fixed position layout",
        "Cellular layout"
      ],
      correctAnswer: 1,
      explanation: "From Module 1: Process layout groups similar processes in departments."
    },
    {
      id: 8,
      question: "What does FMS stand for?",
      options: [
        "Fixed Manufacturing System",
        "Flexible Manufacturing System",
        "Fast Material System",
        "Fully Manual System"
      ],
      correctAnswer: 1,
      explanation: "From Module 2: FMS is Flexible Manufacturing System."
    },
    {
      id: 9,
      question: "What does MRP stand for?",
      options: [
        "Manufacturing Resource Planning",
        "Material Requirements Planning",
        "Machine Replacement Program",
        "Maintenance Repair Planning"
      ],
      correctAnswer: 1,
      explanation: "From Module 3: MRP is Material Requirements Planning."
    },
    {
      id: 10,
      question: "What does SPC stand for?",
      options: [
        "Standard Production Control",
        "Statistical Process Control",
        "Systematic Product Checking",
        "Structured Process Charting"
      ],
      correctAnswer: 1,
      explanation: "From Module 4: SPC is Statistical Process Control."
    },
    {
      id: 11,
      question: "Which supply chain focuses on cost minimization?",
      options: [
        "Responsive supply chain",
        "Efficient supply chain",
        "Risk-hedging supply chain",
        "Agile supply chain"
      ],
      correctAnswer: 1,
      explanation: "From Module 5: Efficient supply chains focus on cost minimization."
    },
    {
      id: 12,
      question: "What are minimum requirements to be considered by customers?",
      options: [
        "Order winners",
        "Order qualifiers",
        "Order differentiators",
        "Order enhancers"
      ],
      correctAnswer: 1,
      explanation: "From Module 6: Order qualifiers are minimum requirements."
    },
    {
      id: 13,
      question: "What is the target space utilization for manufacturing?",
      options: [
        "30-40%",
        "60-80%",
        "90-100%",
        "40-50%"
      ],
      correctAnswer: 1,
      explanation: "From Module 1: 60-80% space utilization is optimal."
    },
    {
      id: 14,
      question: "What does DFM stand for?",
      options: [
        "Digital Factory Management",
        "Design for Manufacturing",
        "Direct Factory Manufacturing",
        "Detailed Factory Monitoring"
      ],
      correctAnswer: 1,
      explanation: "From Module 2: DFM is Design for Manufacturing."
    },
    {
      id: 15,
      question: "What strategy has constant production rate?",
      options: [
        "Chase strategy",
        "Level strategy",
        "Mixed strategy",
        "Demand strategy"
      ],
      correctAnswer: 1,
      explanation: "From Module 3: Level strategy has constant production rate."
    },
    {
      id: 16,
      question: "How is RPN calculated?",
      options: [
        "S + O + D",
        "S × O × D",
        "(S + O) × D",
        "S × (O + D)"
      ],
      correctAnswer: 1,
      explanation: "From Module 4: RPN = Severity × Occurrence × Detection."
    },
    {
      id: 17,
      question: "What system orders fixed quantity at reorder point?",
      options: [
        "Periodic review system",
        "Continuous review system",
        "ABC analysis system",
        "JIT system"
      ],
      correctAnswer: 1,
      explanation: "From Module 5: Continuous review system orders at reorder point."
    },
    {
      id: 18,
      question: "What is capacity cushion formula?",
      options: [
        "Utilization rate - 100%",
        "100% - Utilization rate",
        "Actual output ÷ Design capacity",
        "Effective capacity ÷ Design capacity"
      ],
      correctAnswer: 1,
      explanation: "From Module 6: Capacity cushion = 100% - Utilization rate."
    },
    {
      id: 19,
      question: "Which is an Industry 4.0 technology?",
      options: [
        "Internet of Things",
        "Traditional assembly lines",
        "Manual record keeping",
        "Paper-based scheduling"
      ],
      correctAnswer: 0,
      explanation: "From Module 6: Internet of Things is Industry 4.0 technology."
    },
    {
      id: 20,
      question: "What does 'A' represent in a REL chart?",
      options: [
        "Absolutely necessary closeness",
        "Average distance",
        "Avoid proximity",
        "Additional space needed"
      ],
      correctAnswer: 0,
      explanation: "From Module 1: 'A' means absolutely necessary closeness."
    },
    {
      id: 21,
      question: "What is a 'factor' in DOE?",
      options: [
        "Output being measured",
        "Input variable being studied",
        "Experimental error",
        "Statistical calculation"
      ],
      correctAnswer: 1,
      explanation: "From Module 4: Factor is input variable in Design of Experiments."
    },
    {
      id: 22,
      question: "What does MPS stand for?",
      options: [
        "Material Production System",
        "Master Production Schedule",
        "Manufacturing Process Standard",
        "Main Production Strategy"
      ],
      correctAnswer: 1,
      explanation: "From Module 3: MPS is Master Production Schedule."
    },
    {
      id: 23,
      question: "What does WMS manage?",
      options: [
        "Workforce management",
        "Warehouse operations",
        "Website management",
        "Waste management"
      ],
      correctAnswer: 1,
      explanation: "From Module 5: WMS manages warehouse operations."
    },
    {
      id: 24,
      question: "What is the first step in Theory of Constraints?",
      options: [
        "Subordinate other processes",
        "Identify the system constraint",
        "Elevate the constraint",
        "Exploit the constraint"
      ],
      correctAnswer: 1,
      explanation: "From Module 3: First step is identify the constraint."
    },
    {
      id: 25,
      question: "What does OEE measure?",
      options: [
        "Only equipment availability",
        "Availability × Performance × Quality",
        "Only production speed",
        "Only quality rate"
      ],
      correctAnswer: 1,
      explanation: "From Module 4: OEE = Availability × Performance × Quality."
    },
    {
      id: 26,
      question: "Which transport is best for international bulk shipments?",
      options: [
        "Air transport",
        "Sea transport",
        "Road transport",
        "Rail transport"
      ],
      correctAnswer: 1,
      explanation: "From Module 5: Sea transport for international bulk."
    },
    {
      id: 27,
      question: "What sets the pace in Drum-Buffer-Rope scheduling?",
      options: [
        "The fastest machine",
        "The constraint (drum)",
        "Customer demand",
        "Material availability"
      ],
      correctAnswer: 1,
      explanation: "From Module 6: Constraint sets pace as drum."
    },
    {
      id: 28,
      question: "What is desired minimum Cp value?",
      options: [
        "0.5",
        "1.0",
        "1.33",
        "2.0"
      ],
      correctAnswer: 2,
      explanation: "From Module 2: Cp ≥ 1.33 is desired."
    },
    {
      id: 29,
      question: "What is a hierarchical list of product components?",
      options: [
        "Production schedule",
        "Bill of Materials (BOM)",
        "Inventory record",
        "Capacity plan"
      ],
      correctAnswer: 1,
      explanation: "From Module 3: BOM is hierarchical component list."
    },
    {
      id: 30,
      question: "What does Gage R&R measure?",
      options: [
        "Gauge repair and replacement",
        "Gauge repeatability and reproducibility",
        "General repair and renovation",
        "Gauge reading and recording"
      ],
      correctAnswer: 1,
      explanation: "From Module 4: Gage R&R measures repeatability and reproducibility."
    },
    {
      id: 31,
      question: "What does ABC analysis classify items by?",
      options: [
        "Color and size",
        "Value and control effort",
        "Weight and volume",
        "Supplier and origin"
      ],
      correctAnswer: 1,
      explanation: "From Module 5: ABC classifies by value and control effort."
    },
    {
      id: 32,
      question: "What does HPWS stand for?",
      options: [
        "High-Production Work System",
        "High-Performance Work Systems",
        "Human Productivity Work Structure",
        "Highly Paid Worker System"
      ],
      correctAnswer: 1,
      explanation: "From Module 6: HPWS is High-Performance Work Systems."
    },
    {
      id: 33,
      question: "Which robot type is most common in manufacturing?",
      options: [
        "Delta robots",
        "Articulated robots",
        "Cartesian robots",
        "SCARA robots"
      ],
      correctAnswer: 1,
      explanation: "From Module 2: Articulated robots are most common."
    },
    {
      id: 34,
      question: "What triggers production in JIT?",
      options: [
        "Forecasted demand",
        "Management decision",
        "Customer demand (pull system)",
        "Material availability"
      ],
      correctAnswer: 2,
      explanation: "From Module 3: JIT uses pull system triggered by demand."
    },
    {
      id: 35,
      question: "What does DMAIC stand for?",
      options: [
        "Design, Measure, Analyze, Improve, Control",
        "Define, Measure, Analyze, Improve, Control",
        "Develop, Monitor, Assess, Implement, Check",
        "Document, Measure, Assess, Improve, Confirm"
      ],
      correctAnswer: 1,
      explanation: "From Module 4: DMAIC is Define, Measure, Analyze, Improve, Control."
    },
    {
      id: 36,
      question: "What does triple bottom line include?",
      options: [
        "Economic, Environmental, Social",
        "Cost, Quality, Delivery",
        "Price, Value, Service",
        "Input, Process, Output"
      ],
      correctAnswer: 0,
      explanation: "From Module 5: Triple bottom line: Economic, Environmental, Social."
    },
    {
      id: 37,
      question: "What is a digital twin?",
      options: [
        "A physical backup machine",
        "Virtual replica for simulation",
        "Duplicate computer system",
        "Backup employee"
      ],
      correctAnswer: 1,
      explanation: "From Module 6: Digital twin is virtual replica."
    },
    {
      id: 38,
      question: "What is world-class OEE target?",
      options: [
        "≥ 65%",
        "≥ 75%",
        "≥ 85%",
        "≥ 95%"
      ],
      correctAnswer: 2,
      explanation: "From Module 4: World-class OEE ≥ 85%."
    },
    {
      id: 39,
      question: "What is typical capacity cushion for volatile demand?",
      options: [
        "0-5%",
        "5-10%",
        "10-20%",
        "20-30%"
      ],
      correctAnswer: 3,
      explanation: "From Module 6: 20-30% cushion for volatile demand."
    },
    {
      id: 40,
      question: "What improved from 62% to 86% in case study?",
      options: [
        "On-time delivery",
        "OEE (Overall Equipment Effectiveness)",
        "Defect rate",
        "Employee turnover"
      ],
      correctAnswer: 1,
      explanation: "From Module 6: OEE improved from 62% to 86%."
    }
  ]
};

export default productionEngineeringDiplomaCourse;
