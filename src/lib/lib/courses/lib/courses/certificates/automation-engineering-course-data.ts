export const automationEngineeringDiplomaCourse = {
  id: "automation-engineering-diploma",
  title: "Automation Engineering (Diploma)",
  description: "Advanced training in industrial automation systems, PLC programming, robotics integration, and smart manufacturing technologies. Builds upon Robotics Certificate knowledge.",
  duration: "10 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  upgradePrice: null,
  icon: "⚙️",
  badge: "Diploma",
  
  modules: [
    {
      id: 1,
      title: "Industrial Automation Foundations",
      content: `# Introduction to Industrial Automation

**Industrial automation** is the use of control systems and information technologies to handle different processes in manufacturing and other industries without human intervention.

## The Evolution of Automation

### Four Industrial Revolutions:
1. **Industry 1.0** - Mechanization using water and steam power
2. **Industry 2.0** - Mass production using electricity
3. **Industry 3.0** - Automation using computers and electronics
4. **Industry 4.0** - Smart factories using IoT and cyber-physical systems

## Key Components of Automated Systems

### 1. **Programmable Logic Controllers (PLCs)**
- Industrial digital computers for manufacturing processes
- Ruggedized for harsh industrial environments
- Replace relay logic systems
- Examples: Siemens, Allen-Bradley, Mitsubishi

### 2. **Human-Machine Interfaces (HMIs)**
- Touchscreens and control panels for operator interaction
- Display real-time data and system status
- Allow parameter adjustments and manual control
- Provide alarm notifications and diagnostic information

### 3. **Supervisory Control and Data Acquisition (SCADA)**
- High-level supervision of multiple processes
- Data collection from remote locations
- Historical data logging and trending
- System-wide monitoring and control

### 4. **Industrial Networks**
- PROFIBUS, PROFINET, EtherNet/IP, Modbus
- Connect controllers, sensors, actuators
- Enable real-time data exchange
- Support distributed control architectures

## Benefits of Industrial Automation

### Increased Productivity
- 24/7 operation without fatigue
- Consistent quality and precision
- Reduced cycle times
- Higher throughput rates

### Improved Quality
- Repeatable precision
- Reduced human error
- Consistent process parameters
- Automated quality inspection

### Enhanced Safety
- Remove humans from hazardous environments
- Implement safety interlocks
- Emergency stop systems
- Safety-rated controllers

### Cost Reduction
- Lower labor costs
- Reduced material waste
- Energy optimization
- Predictive maintenance`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is industrial automation?",
          options: ["Using control systems for processes without human intervention", "Making everything manual", "Replacing all workers with robots", "Using only mechanical systems"],
          correctAnswer: 0,
          explanation: "Industrial automation uses control systems to handle processes automatically without constant human involvement."
        },
        {
          id: 2,
          question: "What does Industry 4.0 focus on?",
          options: ["Smart factories using IoT and cyber-physical systems", "Steam power mechanization", "Mass production with electricity", "Basic computer automation"],
          correctAnswer: 0,
          explanation: "Industry 4.0 represents smart factories with interconnected systems using IoT and advanced technologies."
        },
        {
          id: 3,
          question: "What are PLCs designed for?",
          options: ["Harsh industrial environments", "Office environments only", "Home automation", "Entertainment systems"],
          correctAnswer: 0,
          explanation: "PLCs are ruggedized computers specifically designed for industrial environments."
        },
        {
          id: 4,
          question: "What does HMI stand for?",
          options: ["Human-Machine Interface", "High Memory Integration", "Hardware Management Interface", "Human Monitoring Interface"],
          correctAnswer: 0,
          explanation: "HMI stands for Human-Machine Interface, allowing operators to interact with automated systems."
        },
        {
          id: 5,
          question: "What is SCADA used for?",
          options: ["Supervising multiple processes and collecting data", "Only controlling single machines", "Designing mechanical parts", "Programming individual controllers"],
          correctAnswer: 0,
          explanation: "SCADA systems provide high-level supervision and data acquisition across multiple processes."
        },
        {
          id: 6,
          question: "Which is NOT a common industrial network?",
          options: ["Home Wi-Fi network", "PROFIBUS", "PROFINET", "EtherNet/IP"],
          correctAnswer: 0,
          explanation: "Industrial networks like PROFIBUS and PROFINET are designed for industrial automation, not home Wi-Fi."
        },
        {
          id: 7,
          question: "How does automation increase productivity?",
          options: ["24/7 operation without fatigue", "Making humans work faster", "Reducing machine speed", "Increasing manual operations"],
          correctAnswer: 0,
          explanation: "Automated systems can operate continuously without rest breaks or fatigue."
        },
        {
          id: 8,
          question: "What improves quality in automated systems?",
          options: ["Repeatable precision and reduced human error", "More human inspectors", "Slower production speeds", "Manual adjustments"],
          correctAnswer: 0,
          explanation: "Automation provides consistent, repeatable operations that reduce variability and errors."
        },
        {
          id: 9,
          question: "How does automation enhance safety?",
          options: ["Removing humans from hazardous environments", "Making humans work faster", "Eliminating all safety equipment", "Ignoring safety protocols"],
          correctAnswer: 0,
          explanation: "Automation can perform dangerous tasks that would otherwise put human workers at risk."
        },
        {
          id: 10,
          question: "What cost does automation typically reduce?",
          options: ["Labor costs", "Initial equipment costs", "Training costs", "Software costs"],
          correctAnswer: 0,
          explanation: "While initial investment may be high, automation reduces ongoing labor costs significantly."
        },
        {
          id: 11,
          question: "What replaced relay logic systems in factories?",
          options: ["PLCs", "Manual switches", "Mechanical timers", "Pneumatic controls"],
          correctAnswer: 0,
          explanation: "PLCs replaced complex relay logic systems with programmable, flexible controllers."
        },
        {
          id: 12,
          question: "What do HMIs display to operators?",
          options: ["Real-time data and system status", "Entertainment videos", "Marketing materials", "Employee schedules"],
          correctAnswer: 0,
          explanation: "HMIs provide operators with current system information and status displays."
        },
        {
          id: 13,
          question: "What does SCADA historical data help with?",
          options: ["Trend analysis and troubleshooting", "Employee evaluations", "Accounting reports", "Marketing campaigns"],
          correctAnswer: 0,
          explanation: "Historical data logging helps identify trends and troubleshoot process issues."
        },
        {
          id: 14,
          question: "What enables real-time data exchange in factories?",
          options: ["Industrial networks", "Paper reports", "Voice communications", "Manual data entry"],
          correctAnswer: 0,
          explanation: "Industrial networks allow controllers and devices to share data in real time."
        },
        {
          id: 15,
          question: "What is a key benefit of 24/7 operation?",
          options: ["Higher throughput rates", "More employee breaks", "Lower equipment costs", "Simpler programming"],
          correctAnswer: 0,
          explanation: "Continuous operation increases overall production output and throughput."
        },
        {
          id: 16,
          question: "How does automation reduce human error?",
          options: ["Through consistent, programmed operations", "By eliminating all humans", "By slowing down processes", "By increasing manual checks"],
          correctAnswer: 0,
          explanation: "Programmed consistency eliminates the variability that comes with human operators."
        },
        {
          id: 17,
          question: "What type of maintenance can automation enable?",
          options: ["Predictive maintenance", "Only emergency repairs", "Monthly maintenance only", "Annual shutdowns only"],
          correctAnswer: 0,
          explanation: "Automation systems can predict when maintenance is needed based on performance data."
        },
        {
          id: 18,
          question: "What do safety-rated controllers provide?",
          options: ["Certified safety functions", "Faster operation", "Lower costs", "Better displays"],
          correctAnswer: 0,
          explanation: "Safety-rated controllers meet specific standards for implementing safety functions."
        },
        {
          id: 19,
          question: "What does distributed control architecture allow?",
          options: ["Control functions spread across multiple devices", "Only one central controller", "Manual control only", "No network connections"],
          correctAnswer: 0,
          explanation: "Distributed control spreads intelligence across the system for better reliability."
        },
        {
          id: 20,
          question: "What Industry 2.0 introduced?",
          options: ["Mass production using electricity", "Smart factories", "Computer automation", "Steam power"],
          correctAnswer: 0,
          explanation: "Industry 2.0 marked the shift to mass production powered by electrical energy."
        }
      ]
    },
    {
      id: 2,
      title: "PLC Programming & Ladder Logic",
      content: `# PLC Programming Fundamentals

**Programmable Logic Controllers (PLCs)** are programmed using specialized languages designed for industrial control applications.

## IEC 61131-3 Programming Languages

### 1. **Ladder Logic (LD)**
- Graphical language resembling electrical relay diagrams
- Most widely used in North America
- Easy for electricians to understand
- Based on relay ladder logic principles

### 2. **Function Block Diagram (FBD)**
- Graphical language using interconnected function blocks
- Good for complex control algorithms
- Shows data flow between functions
- Commonly used in process control

### 3. **Structured Text (ST)**
- High-level text-based language
- Similar to Pascal or C
- Good for complex calculations
- Used for advanced control algorithms

### 4. **Instruction List (IL)**
- Low-level assembly-like language
- Simple and compact
- Good for small, fast programs
- Less commonly used today

### 5. **Sequential Function Chart (SFC)**
- Graphical language for sequential processes
- Based on Petri nets and Grafcet
- Excellent for batch processes
- Shows process states and transitions

## Ladder Logic Programming

### Basic Elements:
1. **Contacts** (Input Conditions)
   - Normally Open (NO) - | | -
   - Normally Closed (NC) - |/| -
   - Represent input conditions

2. **Coils** (Output Actions)
   - Output Coil - ( ) -
   - Set/Reset Coils - (S) / (R) -
   - Represent output actions

3. **Functions and Function Blocks**
   - Timers (TON, TOF, TP)
   - Counters (CTU, CTD, CTUD)
   - Math operations
   - Comparison functions

## PLC Scan Cycle

### The continuous loop:
1. **Input Scan** - Read all input values
2. **Program Execution** - Execute ladder logic
3. **Output Scan** - Update all outputs
4. **Housekeeping** - Communications, diagnostics

### Typical Scan Times:
- Small PLCs: 1-10 milliseconds
- Medium PLCs: 10-50 milliseconds
- Large PLCs: 50-200 milliseconds

## Programming Best Practices

### 1. **Modular Programming**
- Break programs into logical sections
- Use subroutines and function blocks
- Easy maintenance and troubleshooting

### 2. **Documentation**
- Add comments to rungs and instructions
- Use descriptive tag names
- Maintain change logs
- Document I/O assignments

### 3. **Error Handling**
- Implement fault detection
- Add diagnostic routines
- Include manual override capabilities
- Program safe shutdown sequences

### 4. **Safety Considerations**
- Use emergency stop circuits
- Implement safety interlocks
- Follow safety standards (IEC 61508)
- Include redundancy where needed`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does IEC 61131-3 define?",
          options: ["PLC programming languages", "Electrical safety standards", "Mechanical design rules", "Network protocols"],
          correctAnswer: 0,
          explanation: "IEC 61131-3 is the international standard for programmable controller programming languages."
        },
        {
          id: 2,
          question: "Which programming language resembles electrical diagrams?",
          options: ["Ladder Logic", "Structured Text", "Function Block Diagram", "Instruction List"],
          correctAnswer: 0,
          explanation: "Ladder Logic uses graphical symbols similar to electrical relay diagrams."
        },
        {
          id: 3,
          question: "What is Structured Text similar to?",
          options: ["High-level programming languages like Pascal", "Electrical drawings", "Mechanical blueprints", "Network diagrams"],
          correctAnswer: 0,
          explanation: "Structured Text uses syntax similar to high-level programming languages."
        },
        {
          id: 4,
          question: "What does a Normally Open contact represent?",
          options: ["An input condition that must be true", "An output action", "A timer function", "A counter"],
          correctAnswer: 0,
          explanation: "NO contacts represent conditions that must be true (closed) to pass logic."
        },
        {
          id: 5,
          question: "What does TON stand for in timer functions?",
          options: ["Timer On-Delay", "Timer Off-Normal", "Time Over Network", "Timer Output Normal"],
          correctAnswer: 0,
          explanation: "TON is Timer On-Delay, which starts timing when the input is true."
        },
        {
          id: 6,
          question: "What is the first step in PLC scan cycle?",
          options: ["Input Scan", "Program Execution", "Output Scan", "Housekeeping"],
          correctAnswer: 0,
          explanation: "PLCs first read all input values before executing the program."
        },
        {
          id: 7,
          question: "What does CTU counter do?",
          options: ["Counts Up", "Counts Down", "Counts Time", "Counts Errors"],
          correctAnswer: 0,
          explanation: "CTU is Count Up counter that increments on each rising edge."
        },
        {
          id: 8,
          question: "What is typical scan time for small PLCs?",
          options: ["1-10 milliseconds", "100-500 milliseconds", "1-5 seconds", "10-50 seconds"],
          correctAnswer: 0,
          explanation: "Small PLCs typically complete their scan cycle in 1-10 milliseconds."
        },
        {
          id: 9,
          question: "What does modular programming help with?",
          options: ["Maintenance and troubleshooting", "Making programs longer", "Increasing scan time", "Reducing documentation"],
          correctAnswer: 0,
          explanation: "Breaking programs into modules makes them easier to understand and maintain."
        },
        {
          id: 10,
          question: "What should documentation include?",
          options: ["Comments and descriptive tag names", "Only the program code", "Only the electrical drawings", "Only the parts list"],
          correctAnswer: 0,
          explanation: "Good documentation includes comments, descriptive names, and change logs."
        },
        {
          id: 11,
          question: "What is Function Block Diagram good for?",
          options: ["Complex control algorithms", "Simple relay replacement", "Only timing functions", "Only counting operations"],
          correctAnswer: 0,
          explanation: "FBD shows data flow between function blocks, ideal for complex algorithms."
        },
        {
          id: 12,
          question: "What does a Normally Closed contact do?",
          options: ["Passes logic when input is false", "Always passes logic", "Never passes logic", "Only passes logic during scan"],
          correctAnswer: 0,
          explanation: "NC contacts pass logic when the input condition is false (not activated)."
        },
        {
          id: 13,
          question: "What does Output Scan do?",
          options: ["Updates all output devices", "Reads input values", "Executes the program", "Performs diagnostics"],
          correctAnswer: 0,
          explanation: "Output Scan writes the calculated values to physical output devices."
        },
        {
          id: 14,
          question: "What is Sequential Function Chart excellent for?",
          options: ["Batch processes", "Simple on/off control", "Only motor control", "Only temperature control"],
          correctAnswer: 0,
          explanation: "SFC is particularly good for sequential processes like batch operations."
        },
        {
          id: 15,
          question: "What should error handling include?",
          options: ["Fault detection and diagnostics", "Ignoring all errors", "Only visual alarms", "Only manual resets"],
          correctAnswer: 0,
          explanation: "Comprehensive error handling detects faults and provides diagnostic information."
        },
        {
          id: 16,
          question: "What is housekeeping in scan cycle?",
          options: ["Communications and diagnostics", "Only input reading", "Only output updating", "Only program execution"],
          correctAnswer: 0,
          explanation: "Housekeeping handles communications, diagnostics, and other system tasks."
        },
        {
          id: 17,
          question: "What do Set/Reset coils do?",
          options: ["Latch and unlatch outputs", "Only turn outputs on", "Only turn outputs off", "Control timers only"],
          correctAnswer: 0,
          explanation: "Set coils latch outputs on; Reset coils unlatch them off."
        },
        {
          id: 18,
          question: "What is Instruction List good for?",
          options: ["Small, fast programs", "Complex calculations", "Graphical displays", "Networking functions"],
          correctAnswer: 0,
          explanation: "IL is compact and fast, suitable for small, time-critical programs."
        },
        {
          id: 19,
          question: "What should safety considerations include?",
          options: ["Emergency stop circuits", "Faster operation", "Lower costs", "Smaller size"],
          correctAnswer: 0,
          explanation: "Safety must include emergency stop functions and safety interlocks."
        },
        {
          id: 20,
          question: "What does program execution do in scan cycle?",
          options: ["Runs the ladder logic program", "Reads physical inputs", "Writes to physical outputs", "Handles communications"],
          correctAnswer: 0,
          explanation: "Program Execution processes the control logic instructions."
        }
      ]
    },
    {
      id: 3,
      title: "Industrial Robotics & Integration",
      content: `# Industrial Robotics Systems

**Industrial robots** are programmable, multifunctional manipulators designed to move materials, parts, tools, or specialized devices through variable programmed motions.

## Types of Industrial Robots

### 1. **Articulated Robots**
- Most common industrial robot type
- Rotary joints (typically 4-6 axes)
- Human arm-like structure
- Large work envelope
- Applications: welding, assembly, material handling

### 2. **SCARA Robots**
- Selective Compliance Assembly Robot Arm
- Fast and precise in horizontal plane
- Rigid in vertical direction
- Excellent for assembly operations
- Applications: pick-and-place, assembly

### 3. **Cartesian/Gantry Robots**
- Three linear axes (X, Y, Z)
- Rectangular work envelope
- Simple control and programming
- High precision and stiffness
- Applications: CNC machines, 3D printing

### 4. **Delta/Parallel Robots**
- Parallel linkage structure
- Very high speed and acceleration
- Light moving parts
- Limited payload capacity
- Applications: packaging, food processing

### 5. **Collaborative Robots (Cobots)**
- Designed to work safely with humans
- Force-limited joints
- Advanced sensors for collision detection
- Easy programming and setup
- Applications: small parts assembly, testing

## Robot Coordinate Systems

### 1. **World Coordinates**
- Fixed reference frame for entire workspace
- Defines robot's position in environment
- Used for multiple robot coordination

### 2. **Base Coordinates**
- Fixed at robot base
- Reference for all robot movements
- Default coordinate system

### 3. **Tool Coordinates**
- Aligned with robot end effector
- Moves with the tool
- Essential for tool-oriented operations

### 4. **User Coordinates**
- Custom coordinate systems
- Aligned with workpieces or fixtures
- Simplifies programming for specific tasks

## Robot Programming Methods

### 1. **Teach Pendant Programming**
- Manual guidance of robot
- Record positions and movements
- Most common method
- Intuitive but time-consuming

### 2. **Offline Programming**
- Program in simulation software
- No production downtime
- Verify before implementation
- Requires accurate cell modeling

### 3. **Lead-Through Programming**
- Physically move robot through path
- Robot records positions
- Good for complex paths
- Used for painting, welding

### 4. **Text-Based Programming**
- Write code in robot language
- Full control and flexibility
- Requires programming expertise
- Used for complex applications

## Robot Integration Components

### 1. **End Effectors**
- Grippers (mechanical, vacuum, magnetic)
- Tools (welding, painting, drilling)
- Sensors (vision, force, proximity)
- Custom tooling for specific tasks

### 2. **Peripheral Equipment**
- Vision systems for guidance
- Force sensors for assembly
- Conveyor tracking systems
- Safety systems (light curtains, area scanners)

### 3. **Communication Interfaces**
- Digital I/O (most common)
- Fieldbus networks (PROFIBUS, Ethernet/IP)
- Serial communication (RS-232, RS-485)
- Ethernet TCP/IP for advanced integration

### 4. **Safety Systems**
- Safety-rated monitored stop
- Speed and separation monitoring
- Power and force limiting
- Safety controllers and PLCs`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the most common industrial robot type?",
          options: ["Articulated robots", "SCARA robots", "Cartesian robots", "Delta robots"],
          correctAnswer: 0,
          explanation: "Articulated robots with rotary joints are the most widely used in industry."
        },
        {
          id: 2,
          question: "What does SCARA stand for?",
          options: ["Selective Compliance Assembly Robot Arm", "System Control Automated Robotic Assembly", "Special Cartesian Articulated Robot Arm", "Standard Computer Automated Robot Assembly"],
          correctAnswer: 0,
          explanation: "SCARA robots are designed for assembly with selective compliance."
        },
        {
          id: 3,
          question: "What are Cartesian robots good for?",
          options: ["High precision and stiffness", "Very high speed", "Working with humans", "Complex curved paths"],
          correctAnswer: 0,
          explanation: "Cartesian robots provide excellent precision and rigidity with linear motion."
        },
        {
          id: 4,
          question: "What characterizes collaborative robots?",
          options: ["Designed to work safely with humans", "Very high payload capacity", "Extremely fast movements", "Large work envelopes"],
          correctAnswer: 0,
          explanation: "Cobots have safety features allowing direct human-robot collaboration."
        },
        {
          id: 5,
          question: "What coordinate system moves with the tool?",
          options: ["Tool coordinates", "World coordinates", "Base coordinates", "User coordinates"],
          correctAnswer: 0,
          explanation: "Tool coordinates are aligned with and move relative to the end effector."
        },
        {
          id: 6,
          question: "What is teach pendant programming?",
          options: ["Manual guidance using handheld device", "Writing code on computer", "Physically pushing robot", "Voice command programming"],
          correctAnswer: 0,
          explanation: "Teach pendants allow operators to manually guide and program robots."
        },
        {
          id: 7,
          question: "What is offline programming advantage?",
          options: ["No production downtime", "Lower robot cost", "Simpler programming", "Smaller robot size"],
          correctAnswer: 0,
          explanation: "Offline programming creates programs without stopping production."
        },
        {
          id: 8,
          question: "What are delta robots known for?",
          options: ["Very high speed", "Large payloads", "Large work envelope", "Complex programming"],
          correctAnswer: 0,
          explanation: "Delta robots excel at high-speed pick-and-place operations."
        },
        {
          id: 9,
          question: "What is an end effector?",
          options: ["Tool mounted on robot wrist", "Robot controller", "Robot base", "Safety system"],
          correctAnswer: 0,
          explanation: "End effectors are tools or grippers attached to the robot arm."
        },
        {
          id: 10,
          question: "What communication method is most common?",
          options: ["Digital I/O", "Wireless only", "Bluetooth", "Infrared"],
          correctAnswer: 0,
          explanation: "Simple digital input/output signals are the most common interface."
        },
        {
          id: 11,
          question: "What do user coordinates help with?",
          options: ["Aligning with workpieces", "World positioning", "Tool orientation", "Base reference"],
          correctAnswer: 0,
          explanation: "User coordinates can be aligned with fixtures or parts for easier programming."
        },
        {
          id: 12,
          question: "What is lead-through programming used for?",
          options: ["Complex paths like welding", "Simple pick-and-place", "Only assembly tasks", "Only inspection"],
          correctAnswer: 0,
          explanation: "Lead-through is ideal for complex continuous paths like welding or painting."
        },
        {
          id: 13,
          question: "What safety feature do cobots have?",
          options: ["Force-limited joints", "Faster movements", "Larger size", "Louder warnings"],
          correctAnswer: 0,
          explanation: "Cobots have joints that limit force to safe levels for human contact."
        },
        {
          id: 14,
          question: "What are peripheral equipment examples?",
          options: ["Vision systems and conveyors", "Only robot controllers", "Only end effectors", "Only safety fences"],
          correctAnswer: 0,
          explanation: "Peripheral equipment includes all supporting systems for robot operation."
        },
        {
          id: 15,
          question: "What does world coordinate system define?",
          options: ["Robot position in environment", "Tool orientation", "Base mounting", "User frames"],
          correctAnswer: 0,
          explanation: "World coordinates provide a fixed reference for the entire workspace."
        },
        {
          id: 16,
          question: "What is text-based programming advantage?",
          options: ["Full control and flexibility", "Easiest to learn", "Fastest to program", "Most intuitive"],
          correctAnswer: 0,
          explanation: "Text programming offers complete control for complex applications."
        },
        {
          id: 17,
          question: "What are articulated robot joints?",
          options: ["Rotary joints", "Linear slides", "Parallel links", "Fixed connections"],
          correctAnswer: 0,
          explanation: "Articulated robots use rotary joints similar to human arm joints."
        },
        {
          id: 18,
          question: "What is conveyor tracking?",
          options: ["Following moving conveyor", "Measuring conveyor speed", "Building conveyors", "Painting conveyors"],
          correctAnswer: 0,
          explanation: "Conveyor tracking allows robots to work with parts on moving conveyors."
        },
        {
          id: 19,
          question: "What safety system uses light beams?",
          options: ["Light curtains", "Pressure mats", "Emergency stops", "Warning signs"],
          correctAnswer: 0,
          explanation: "Light curtains create invisible barriers that stop robots when breached."
        },
        {
          id: 20,
          question: "What do force sensors help with?",
          options: ["Assembly and insertion tasks", "Only speed control", "Only position control", "Only visual tasks"],
          correctAnswer: 0,
          explanation: "Force sensing enables delicate operations like part insertion."
        }
      ]
    },
    {
      id: 4,
      title: "Process Control & Instrumentation",
      content: `# Industrial Process Control

**Process control** involves maintaining desired output conditions of a manufacturing process through manipulation of input variables.

## Control System Architectures

### 1. **Feedback Control (Closed Loop)**
- Measures process variable
- Compares to setpoint
- Calculates error
- Adjusts manipulated variable
- Examples: PID control, temperature control

### 2. **Feedforward Control**
- Measures disturbances
- Adjusts before they affect process
- Requires process model
- Used with feedback control
- Examples: flow ratio control

### 3. **Cascade Control**
- Multiple controllers in series
- Primary controller sets secondary setpoint
- Improves disturbance rejection
- Common in temperature control
- Examples: reactor temperature control

### 4. **Ratio Control**
- Maintains ratio between variables
- Common in mixing processes
- One flow follows another
- Examples: fuel-air ratio, blending

## Control Algorithms

### PID Control (Proportional-Integral-Derivative)
**Proportional (P) Term:**
- Responds to current error
- Gain determines response strength
- Too high causes oscillation
- Too low causes slow response

**Integral (I) Term:**
- Eliminates steady-state error
- Accumulates past errors
- Can cause windup
- Tuned with reset time

**Derivative (D) Term:**
- Predicts future error
- Dampens oscillations
- Sensitive to noise
- Tuned with rate time

## Industrial Instrumentation

### 1. **Temperature Measurement**
- Thermocouples (Type J, K, T)
- RTDs (Pt100, Pt1000)
- Thermistors
- Infrared sensors
- Applications: ovens, reactors, HVAC

### 2. **Pressure Measurement**
- Bourdon tubes
- Diaphragm seals
- Strain gauges
- Capacitive sensors
- Applications: pipelines, tanks, pumps

### 3. **Flow Measurement**
- Orifice plates
- Venturi tubes
- Magnetic flowmeters
- Ultrasonic flowmeters
- Coriolis mass flowmeters
- Applications: chemical dosing, custody transfer

### 4. **Level Measurement**
- Float switches
- Ultrasonic sensors
- Radar level transmitters
- Capacitive probes
- Differential pressure
- Applications: tanks, silos, vessels

### 5. **Analytical Instruments**
- pH sensors
- Conductivity meters
- Dissolved oxygen
- Turbidity sensors
- Gas analyzers
- Applications: water treatment, chemical processes

## Control System Implementation

### 1. **Single Loop Controllers**
- Dedicated hardware for one loop
- Simple and reliable
- Limited functionality
- Used for critical loops

### 2. **Distributed Control Systems (DCS)**
- Integrated control for entire plant
- Redundant architecture
- Advanced control capabilities
- Extensive historian and reporting

### 3. **PLC-Based Control**
- Discrete control with analog I/O
- Cost-effective for smaller systems
- Flexible and scalable
- Good for batch processes

### 4. **Hybrid Systems**
- Combine DCS and PLC advantages
- Use where both process and discrete control needed
- Common in manufacturing
- Examples: pharmaceutical, food processing`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does feedback control do?",
          options: ["Measures output and adjusts input", "Only measures input", "Only sets output", "Ignores measurements"],
          correctAnswer: 0,
          explanation: "Feedback control measures the process output and adjusts inputs to maintain setpoint."
        },
        {
          id: 2,
          question: "What is feedforward control advantage?",
          options: ["Responds to disturbances before they affect process", "Simpler to implement", "Less expensive", "No measurements needed"],
          correctAnswer: 0,
          explanation: "Feedforward control anticipates and compensates for disturbances."
        },
        {
          id: 3,
          question: "What does PID stand for?",
          options: ["Proportional-Integral-Derivative", "Process-Input-Device", "Pressure-Indicator-Device", "Program-Interface-Design"],
          correctAnswer: 0,
          explanation: "PID is the most common control algorithm combining three control actions."
        },
        {
          id: 4,
          question: "What does proportional term respond to?",
          options: ["Current error", "Past errors", "Future error prediction", "No error"],
          correctAnswer: 0,
          explanation: "Proportional action responds to the current difference between setpoint and process variable."
        },
        {
          id: 5,
          question: "What eliminates steady-state error?",
          options: ["Integral term", "Proportional term", "Derivative term", "Feedforward"],
          correctAnswer: 0,
          explanation: "Integral action accumulates error over time to eliminate offset."
        },
        {
          id: 6,
          question: "What is cascade control?",
          options: ["Multiple controllers in series", "Single controller only", "No controllers", "Parallel controllers"],
          correctAnswer: 0,
          explanation: "Cascade uses primary controller output as setpoint for secondary controller."
        },
        {
          id: 7,
          question: "What is ratio control used for?",
          options: ["Maintaining proportions between flows", "Controlling temperature only", "Measuring pressure only", "Single variable control"],
          correctAnswer: 0,
          explanation: "Ratio control maintains fixed relationships between process variables."
        },
        {
          id: 8,
          question: "What does derivative term do?",
          options: ["Predicts future error", "Measures current error", "Eliminates offset", "Sets output directly"],
          correctAnswer: 0,
          explanation: "Derivative action responds to the rate of error change, providing damping."
        },
        {
          id: 9,
          question: "What measures temperature using voltage?",
          options: ["Thermocouples", "RTDs", "Thermistors", "Infrared sensors"],
          correctAnswer: 0,
          explanation: "Thermocouples generate voltage proportional to temperature difference."
        },
        {
          id: 10,
          question: "What measures flow without moving parts?",
          options: ["Magnetic flowmeters", "Orifice plates", "Turbine meters", "Positive displacement"],
          correctAnswer: 0,
          explanation: "Magnetic flowmeters use Faraday's Law with no obstruction to flow."
        },
        {
          id: 11,
          question: "What is windup in integral term?",
          options: ["Excessive integral accumulation", "Too little integral action", "Derivative action", "Proportional gain"],
          correctAnswer: 0,
          explanation: "Integral windup occurs when error persists, causing excessive integral action."
        },
        {
          id: 12,
          question: "What measures level using sound waves?",
          options: ["Ultrasonic sensors", "Float switches", "Pressure transmitters", "Capacitive probes"],
          correctAnswer: 0,
          explanation: "Ultrasonic level sensors measure time-of-flight of sound waves."
        },
        {
          id: 13,
          question: "What is DCS architecture?",
          options: ["Integrated plant-wide control", "Single loop controllers", "Standalone PLCs", "Manual control"],
          correctAnswer: 0,
          explanation: "DCS provides centralized, integrated control for complex processes."
        },
        {
          id: 14,
          question: "What measures pH?",
          options: ["Electrochemical sensor", "Pressure sensor", "Temperature sensor", "Flow sensor"],
          correctAnswer: 0,
          explanation: "pH sensors use glass electrodes to measure hydrogen ion concentration."
        },
        {
          id: 15,
          question: "What does too high proportional gain cause?",
          options: ["Oscillations", "Slow response", "No control", "Constant offset"],
          correctAnswer: 0,
          explanation: "Excessive proportional gain makes the system unstable and oscillatory."
        },
        {
          id: 16,
          question: "What is Pt100?",
          options: ["Platinum RTD with 100 ohm resistance", "Thermocouple type", "Pressure transmitter", "Flow meter"],
          correctAnswer: 0,
          explanation: "Pt100 is a common platinum resistance temperature detector."
        },
        {
          id: 17,
          question: "What measures mass flow directly?",
          options: ["Coriolis flowmeters", "Orifice plates", "Venturi tubes", "Turbine meters"],
          correctAnswer: 0,
          explanation: "Coriolis meters measure mass flow by detecting Coriolis forces."
        },
        {
          id: 18,
          question: "What control is good for batch processes?",
          options: ["PLC-based control", "Only DCS", "Only single loop", "Only manual"],
          correctAnswer: 0,
          explanation: "PLCs with batch capabilities are well-suited for batch operations."
        },
        {
          id: 19,
          question: "What does differential pressure measure?",
          options: ["Level in closed tanks", "Temperature", "pH", "Conductivity"],
          correctAnswer: 0,
          explanation: "Differential pressure transmitters measure level via hydrostatic pressure."
        },
        {
          id: 20,
          question: "What is hybrid control system?",
          options: ["Combines DCS and PLC advantages", "Only uses DCS", "Only uses PLC", "Manual control only"],
          correctAnswer: 0,
          explanation: "Hybrid systems integrate process and discrete control capabilities."
        }
      ]
    },
    {
      id: 5,
      title: "Industrial Networks & Communication",
      content: `# Industrial Communication Systems

**Industrial networks** enable communication between controllers, field devices, and enterprise systems in automated manufacturing environments.

## Network Topologies

### 1. **Bus Topology**
- Single cable with multiple drops
- Simple installation
- Single point of failure
- Examples: PROFIBUS DP, DeviceNet

### 2. **Star Topology**
- Central switch/hub with point-to-point links
- Easy troubleshooting
- Requires more cabling
- Examples: Ethernet networks

### 3. **Ring Topology**
- Devices connected in a circle
- Redundant paths
- Self-healing capabilities
- Examples: PROFINET IRT, EtherCAT

### 4. **Tree Topology**
- Hierarchical structure
- Combines star and bus
- Scalable for large systems
- Examples: Factory-wide networks

## Fieldbus Networks

### 1. **PROFIBUS**
- Process Field Bus
- Two versions: DP (Decentralized Peripherals) and PA (Process Automation)
- Up to 12 Mbps speed
- Up to 126 devices per segment
- Master-slave architecture

### 2. **PROFINET**
- Industrial Ethernet standard
- Real-time capabilities (RT, IRT)
- IT integration capabilities
- Scalable performance
- Device replacement without programming

### 3. **EtherNet/IP**
- Ethernet Industrial Protocol
- Uses standard Ethernet hardware
- CIP (Common Industrial Protocol)
- Producer-consumer model
- Wide industry adoption

### 4. **Modbus**
- Simple master-slave protocol
- Two versions: RTU (serial) and TCP/IP (Ethernet)
- Open standard
- Wide device support
- Easy implementation

### 5. **DeviceNet**
- Based on CAN (Controller Area Network)
- Low-cost device-level network
- Up to 64 nodes
- Power and signal on same cable
- Good for sensors and actuators

## Wireless Industrial Networks

### 1. **Wi-Fi (IEEE 802.11)**
- Common in office areas
- Limited reliability in industrial environments
- Security concerns
- Good for mobile HMIs

### 2. **WirelessHART**
- Wireless version of HART protocol
- Self-organizing mesh network
- Industrial grade reliability
- Process monitoring applications

### 3. **ISA100 Wireless**
- ISA standard for industrial wireless
- Supports multiple protocols
- Deterministic performance
- Process control applications

### 4. **Bluetooth**
- Short-range communication
- Good for handheld devices
- Low power consumption
- Tool and device configuration

## Network Design Considerations

### 1. **Determinism**
- Predictable communication timing
- Critical for control applications
- Achieved through prioritization
- Real-time Ethernet protocols

### 2. **Redundancy**
- Network path redundancy
- Device redundancy
- Fast recovery from failures
- Essential for critical processes

### 3. **Security**
- Network segmentation
- Firewalls and VPNs
- Access control
- Regular security updates

### 4. **Scalability**
- Ability to expand network
- Support for additional devices
- Bandwidth considerations
- Future technology integration

## Industrial Network Components

### 1. **Switches**
- Managed vs. unmanaged
- Layer 2 and Layer 3 switches
- PoE (Power over Ethernet) capability
- Industrial hardened versions

### 2. **Routers**
- Connect different networks
- Network address translation
- Firewall capabilities
- Industrial protocols support

### 3. **Media Converters**
- Convert between media types
- Copper to fiber optic
- Different protocol conversion
- Signal regeneration

### 4. **Network Diagnostics**
- Protocol analyzers
- Network monitors
- Diagnostic software
- Traffic analysis tools`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is bus topology characteristic?",
          options: ["Single cable with multiple drops", "Central switch with point-to-point links", "Devices connected in circle", "Hierarchical structure"],
          correctAnswer: 0,
          explanation: "Bus topology uses a single backbone cable with multiple connection points."
        },
        {
          id: 2,
          question: "What does PROFIBUS DP stand for?",
          options: ["Decentralized Peripherals", "Digital Protocol", "Data Process", "Device Peripheral"],
          correctAnswer: 0,
          explanation: "PROFIBUS DP is optimized for communication between controllers and decentralized peripherals."
        },
        {
          id: 3,
          question: "What is PROFINET based on?",
          options: ["Industrial Ethernet", "Serial communication", "Wireless technology", "Fiber optics only"],
          correctAnswer: 0,
          explanation: "PROFINET uses standard Ethernet technology with industrial enhancements."
        },
        {
          id: 4,
          question: "What does EtherNet/IP use?",
          options: ["Common Industrial Protocol (CIP)", "Modbus protocol", "PROFIBUS protocol", "HART protocol"],
          correctAnswer: 0,
          explanation: "EtherNet/IP implements the Common Industrial Protocol over Ethernet."
        },
        {
          id: 5,
          question: "What is Modbus architecture?",
          options: ["Master-slave", "Peer-to-peer", "Client-server", "Producer-consumer"],
          correctAnswer: 0,
          explanation: "Modbus uses simple master-slave communication architecture."
        },
        {
          id: 6,
          question: "What does ring topology provide?",
          options: ["Redundant paths", "Simplest installation", "Lowest cost", "Wireless capability"],
          correctAnswer: 0,
          explanation: "Ring topology provides alternative paths for network resilience."
        },
        {
          id: 7,
          question: "What is WirelessHART?",
          options: ["Wireless version of HART protocol", "Wi-Fi for industry", "Bluetooth for sensors", "Cellular network"],
          correctAnswer: 0,
          explanation: "WirelessHART extends HART protocol capabilities wirelessly."
        },
        {
          id: 8,
          question: "What is determinism in networks?",
          options: ["Predictable communication timing", "Highest speed", "Lowest cost", "Wireless operation"],
          correctAnswer: 0,
          explanation: "Determinism ensures messages arrive within guaranteed time frames."
        },
        {
          id: 9,
          question: "What does network redundancy provide?",
          options: ["Fault tolerance", "Higher speed", "Lower cost", "Simpler design"],
          correctAnswer: 0,
          explanation: "Redundancy provides backup paths for continued operation during failures."
        },
        {
          id: 10,
          question: "What is DeviceNet based on?",
          options: ["CAN (Controller Area Network)", "Ethernet", "Wi-Fi", "Fiber optic"],
          correctAnswer: 0,
          explanation: "DeviceNet uses CAN technology for device-level communication."
        },
        {
          id: 11,
          question: "What does star topology require?",
          options: ["More cabling", "Less cabling", "No cabling", "Wireless only"],
          correctAnswer: 0,
          explanation: "Star topology requires individual cables from central switch to each device."
        },
        {
          id: 12,
          question: "What is PROFINET IRT?",
          options: ["Isochronous Real Time", "Internet Relay Technology", "Industrial Router Technology", "Integrated Radio Transmission"],
          correctAnswer: 0,
          explanation: "IRT provides deterministic, synchronized communication for motion control."
        },
        {
          id: 13,
          question: "What network security practice is important?",
          options: ["Network segmentation", "Using default passwords", "Open access to all", "No monitoring"],
          correctAnswer: 0,
          explanation: "Segmentation limits damage from security breaches by isolating network sections."
        },
        {
          id: 14,
          question: "What do media converters do?",
          options: ["Convert between cable types", "Only amplify signals", "Only filter noise", "Only connect wireless"],
          correctAnswer: 0,
          explanation: "Media converters change between different physical media like copper and fiber."
        },
        {
          id: 15,
          question: "What is tree topology?",
          options: ["Hierarchical structure", "Single line", "Circle", "Mesh"],
          correctAnswer: 0,
          explanation: "Tree topology combines multiple star networks in hierarchical arrangement."
        },
        {
          id: 16,
          question: "What does PoE provide?",
          options: ["Power over Ethernet cable", "Higher network speed", "Wireless capability", "Fiber optic conversion"],
          correctAnswer: 0,
          explanation: "PoE delivers electrical power along with data on Ethernet cables."
        },
        {
          id: 17,
          question: "What is ISA100 Wireless?",
          options: ["ISA standard for industrial wireless", "Wi-Fi for home use", "Cellular network", "Satellite communication"],
          correctAnswer: 0,
          explanation: "ISA100 is an international standard for wireless industrial automation."
        },
        {
          id: 18,
          question: "What does network scalability mean?",
          options: ["Ability to expand easily", "Fixed size forever", "Only small networks", "Only large networks"],
          correctAnswer: 0,
          explanation: "Scalability allows networks to grow with additional devices and bandwidth."
        },
        {
          id: 19,
          question: "What is Modbus RTU?",
          options: ["Serial version of Modbus", "Ethernet version", "Wireless version", "Fiber optic version"],
          correctAnswer: 0,
          explanation: "Modbus RTU uses serial communication (RS-232/485) for data transmission."
        },
        {
          id: 20,
          question: "What do managed switches provide?",
          options: ["Advanced configuration and monitoring", "Basic connectivity only", "Wireless capability", "Protocol conversion"],
          correctAnswer: 0,
          explanation: "Managed switches offer configuration, monitoring, and management features."
        }
      ]
    },
    {
      id: 6,
      title: "Smart Manufacturing & Industry 4.0",
      content: `# Industry 4.0 and Smart Manufacturing

**Industry 4.0** represents the fourth industrial revolution, characterized by cyber-physical systems, Internet of Things (IoT), cloud computing, and cognitive computing in manufacturing.

## Core Components of Industry 4.0

### 1. **Cyber-Physical Systems (CPS)**
- Integration of computation and physical processes
- Embedded computers and networks monitor/control physical processes
- Feedback loops where physical processes affect computations
- Examples: smart machines, automated guided vehicles

### 2. **Internet of Things (IoT)**
- Network of physical objects with embedded technology
- Collect and exchange data
- Enable remote monitoring and control
- Industrial IoT (IIoT) focuses on manufacturing applications

### 3. **Cloud Computing**
- On-demand network access to shared computing resources
- Platform as a Service (PaaS)
- Software as a Service (SaaS)
- Infrastructure as a Service (IaaS)
- Manufacturing execution in the cloud

### 4. **Big Data and Analytics**
- Collection and analysis of large datasets
- Predictive analytics for maintenance
- Quality prediction and optimization
- Supply chain optimization
- Real-time production monitoring

### 5. **Artificial Intelligence and Machine Learning**
- Predictive maintenance algorithms
- Quality inspection using computer vision
- Production optimization
- Anomaly detection
- Adaptive control systems

## Smart Factory Concepts

### 1. **Digital Twin**
- Virtual representation of physical assets
- Real-time synchronization with physical counterpart
- Simulation and testing without disrupting production
- Predictive maintenance and optimization

### 2. **Additive Manufacturing (3D Printing)**
- Layer-by-layer material addition
- Rapid prototyping
- Customized production
- Complex geometries
- Reduced material waste

### 3. **Augmented Reality (AR)**
- Overlay digital information on physical world
- Maintenance and repair assistance
- Training and simulation
- Quality inspection support
- Assembly guidance

### 4. **Autonomous Systems**
- Self-optimizing production lines
- Automated material handling
- Intelligent inventory management
- Self-diagnosing equipment
- Adaptive scheduling

## Implementation Technologies

### 1. **OPC UA (Unified Architecture)**
- Platform-independent communication standard
- Information modeling capabilities
- Security by design
- Publisher-subscriber and client-server models
- Essential for Industry 4.0 interoperability

### 2. **Time-Sensitive Networking (TSN)**
- IEEE standards for deterministic Ethernet
- Guaranteed latency and reliability
- Convergence of OT and IT networks
- Support for multiple traffic types
- Future-proof network infrastructure

### 3. **5G for Industry**
- Ultra-reliable low-latency communication
- Massive machine-type communications
- Network slicing for different applications
- Mobile robot and AGV control
- Wireless sensor networks

### 4. **Edge Computing**
- Processing data near the source
- Reduced latency
- Bandwidth optimization
- Real-time decision making
- Privacy and security benefits

## Benefits and Challenges

### Benefits:
1. **Increased Efficiency**
   - Optimized production processes
   - Reduced downtime
   - Lower energy consumption
   - Higher equipment utilization

2. **Improved Quality**
   - Real-time quality monitoring
   - Predictive quality control
   - Reduced defects and waste
   - Consistent product quality

3. **Enhanced Flexibility**
   - Mass customization capabilities
   - Rapid changeovers
   - Adaptive production
   - Responsive to market changes

4. **New Business Models**
   - Product as a Service
   - Pay-per-use models
   - Remote monitoring services
   - Data-driven services

### Challenges:
1. **Cybersecurity Risks**
   - Increased attack surface
   - Legacy system integration
   - Supply chain vulnerabilities
   - Data privacy concerns

2. **Skills Gap**
   - Need for new skill sets
   - Continuous training requirements
   - Multidisciplinary expertise
   - Change management

3. **Investment Costs**
   - High initial investment
   - Return on investment uncertainty
   - Legacy system integration costs
   - Ongoing maintenance costs

4. **Standardization**
   - Lack of universal standards
   - Interoperability challenges
   - Technology fragmentation
   - Regulatory compliance`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does Industry 4.0 represent?",
          options: ["Fourth industrial revolution", "Third industrial revolution", "Second industrial revolution", "First industrial revolution"],
          correctAnswer: 0,
          explanation: "Industry 4.0 is the current digital transformation of manufacturing."
        },
        {
          id: 2,
          question: "What are cyber-physical systems?",
          options: ["Integration of computation and physical processes", "Only computer systems", "Only mechanical systems", "Only electrical systems"],
          correctAnswer: 0,
          explanation: "CPS integrate computational algorithms with physical components."
        },
        {
          id: 3,
          question: "What is IIoT?",
          options: ["Industrial Internet of Things", "International Internet of Things", "Integrated Internet of Things", "Individual Internet of Things"],
          correctAnswer: 0,
          explanation: "IIoT focuses on IoT applications in industrial and manufacturing settings."
        },
        {
          id: 4,
          question: "What is a digital twin?",
          options: ["Virtual representation of physical asset", "Physical backup of system", "Paper documentation", "Basic 3D model"],
          correctAnswer: 0,
          explanation: "Digital twins are virtual replicas that mirror physical assets in real time."
        },
        {
          id: 5,
          question: "What does additive manufacturing mean?",
          options: ["Building objects layer by layer", "Subtracting material", "Only assembling parts", "Only casting materials"],
          correctAnswer: 0,
          explanation: "Additive manufacturing adds material to create objects, unlike traditional subtractive methods."
        },
        {
          id: 6,
          question: "What is OPC UA?",
          options: ["Unified communication standard", "Programming language", "Robot controller", "Sensor type"],
          correctAnswer: 0,
          explanation: "OPC UA provides secure, reliable data exchange for industrial automation."
        },
        {
          id: 7,
          question: "What does TSN provide?",
          options: ["Deterministic Ethernet communication", "Wireless networking", "Fiber optic only", "Serial communication"],
          correctAnswer: 0,
          explanation: "TSN adds time-sensitive capabilities to standard Ethernet networks."
        },
        {
          id: 8,
          question: "What is edge computing benefit?",
          options: ["Reduced latency", "Higher cost", "More complexity", "Less security"],
          correctAnswer: 0,
          explanation: "Processing data locally reduces transmission delays to central servers."
        },
        {
          id: 9,
          question: "What does AR help with in manufacturing?",
          options: ["Maintenance and training", "Only entertainment", "Only marketing", "Only accounting"],
          correctAnswer: 0,
          explanation: "AR overlays digital information to assist with complex tasks."
        },
        {
          id: 10,
          question: "What is predictive maintenance?",
          options: ["Maintenance based on predicted failures", "Scheduled maintenance", "Emergency repairs only", "No maintenance"],
          correctAnswer: 0,
          explanation: "Predictive maintenance uses data to anticipate equipment failures before they occur."
        },
        {
          id: 11,
          question: "What does 5G URLLC provide?",
          options: ["Ultra-reliable low-latency communication", "Only high speed", "Only wide coverage", "Only low cost"],
          correctAnswer: 0,
          explanation: "URLLC enables critical industrial applications requiring reliability and low latency."
        },
        {
          id: 12,
          question: "What is cloud computing model?",
          options: ["On-demand shared resources", "Only local servers", "Only personal computers", "Only manual systems"],
          correctAnswer: 0,
          explanation: "Cloud computing provides scalable resources over the internet."
        },
        {
          id: 13,
          question: "What does big data analytics enable?",
          options: ["Production optimization", "Only data storage", "Only data collection", "Only data deletion"],
          correctAnswer: 0,
          explanation: "Analyzing large datasets reveals patterns for process improvement."
        },
        {
          id: 14,
          question: "What is mass customization?",
          options: ["Efficient customized production", "Only mass production", "Only custom production", "No production"],
          correctAnswer: 0,
          explanation: "Mass customization combines efficiency of mass production with flexibility of customization."
        },
        {
          id: 15,
          question: "What is main cybersecurity challenge?",
          options: ["Increased attack surface", "Less connectivity", "Manual systems", "Paper records"],
          correctAnswer: 0,
          explanation: "More connected devices create more potential entry points for attacks."
        },
        {
          id: 16,
          question: "What does AI enable in manufacturing?",
          options: ["Predictive quality control", "Only manual inspection", "Only basic control", "Only simple tasks"],
          correctAnswer: 0,
          explanation: "AI algorithms can predict quality issues before they occur."
        },
        {
          id: 17,
          question: "What is network slicing in 5G?",
          options: ["Creating virtual networks for different uses", "Cutting cables", "Reducing network size", "Increasing speed only"],
          correctAnswer: 0,
          explanation: "Network slicing creates dedicated virtual networks with specific characteristics."
        },
        {
          id: 18,
          question: "What is Product as a Service?",
          options: ["Selling outcomes rather than products", "Only selling products", "Only providing services", "No business model"],
          correctAnswer: 0,
          explanation: "PaS focuses on delivering results rather than selling physical products."
        },
        {
          id: 19,
          question: "What does real-time production monitoring provide?",
          options: ["Immediate visibility into operations", "Only historical data", "Only future predictions", "No data"],
          correctAnswer: 0,
          explanation: "Real-time monitoring enables immediate response to production issues."
        },
        {
          id: 20,
          question: "What is main skills gap challenge?",
          options: ["Need for new multidisciplinary skills", "Too many skilled workers", "No training needed", "Only manual skills"],
          correctAnswer: 0,
          explanation: "Industry 4.0 requires workers with both technical and digital skills."
        }
      ]
    }
  ],
  
  exam: {
    title: "Automation Engineering Diploma Final Exam",
    description: "Comprehensive examination covering all six modules of Automation Engineering Diploma program",
    passingScore: 75,
    questions: [
      {
        id: 1,
        question: "What does PLC stand for in industrial automation?",
        options: ["Programmable Logic Controller", "Personal Logic Computer", "Programmable Linear Controller", "Process Logic Computer"],
        correctAnswer: 0,
        explanation: "PLCs are industrial computers designed for manufacturing process control."
      },
      {
        id: 2,
        question: "What Industry 4.0 technology creates virtual replicas?",
        options: ["Digital Twin", "Cloud Computing", "Additive Manufacturing", "Augmented Reality"],
        correctAnswer: 0,
        explanation: "Digital twins are virtual representations synchronized with physical assets."
      },
      {
        id: 3,
        question: "Which PLC programming language resembles electrical diagrams?",
        options: ["Ladder Logic", "Structured Text", "Function Block Diagram", "Instruction List"],
        correctAnswer: 0,
        explanation: "Ladder Logic uses graphical symbols similar to relay logic diagrams."
      },
      {
        id: 4,
        question: "What robot type uses rotary joints like human arms?",
        options: ["Articulated Robot", "SCARA Robot", "Cartesian Robot", "Delta Robot"],
        correctAnswer: 0,
        explanation: "Articulated robots have multiple rotary joints providing human-like movement."
      },
      {
        id: 5,
        question: "What does PID control eliminate with its integral term?",
        options: ["Steady-state error", "All errors immediately", "Measurement noise", "Process disturbances"],
        correctAnswer: 0,
        explanation: "Integral action accumulates error over time to eliminate offset."
      },
      {
        id: 6,
        question: "Which industrial network uses Common Industrial Protocol?",
        options: ["EtherNet/IP", "PROFIBUS", "Modbus", "DeviceNet"],
        correctAnswer: 0,
        explanation: "EtherNet/IP implements CIP protocol over standard Ethernet."
      },
      {
        id: 7,
        question: "What does HMI allow operators to do?",
        options: ["Interact with automated systems", "Only program robots", "Only design systems", "Only maintain networks"],
        correctAnswer: 0,
        explanation: "HMIs provide interfaces for monitoring and controlling industrial processes."
      },
      {
        id: 8,
        question: "What is SCADA primarily used for?",
        options: ["Supervising multiple processes", "Controlling single devices", "Programming PLCs", "Designing networks"],
        correctAnswer: 0,
        explanation: "SCADA systems provide high-level supervision across multiple processes and sites."
      },
      {
        id: 9,
        question: "Which control architecture has controllers in series?",
        options: ["Cascade Control", "Feedback Control", "Feedforward Control", "Ratio Control"],
        correctAnswer: 0,
        explanation: "Cascade control uses primary controller output as setpoint for secondary controller."
      },
      {
        id: 10,
        question: "What does OPC UA provide for Industry 4.0?",
        options: ["Secure interoperability", "Robot programming", "Network cables", "Power supply"],
        correctAnswer: 0,
        explanation: "OPC UA enables secure, reliable data exchange between different systems."
      },
      {
        id: 11,
        question: "What is teach pendant programming?",
        options: ["Manual guidance using handheld device", "Computer programming", "Voice commands", "Pre-programmed routines"],
        correctAnswer: 0,
        explanation: "Teach pendants allow manual robot guidance to record positions and paths."
      },
      {
        id: 12,
        question: "What measures temperature using resistance change?",
        options: ["RTD (Resistance Temperature Detector)", "Thermocouple", "Infrared sensor", "Thermistor"],
        correctAnswer: 0,
        explanation: "RTDs measure temperature through predictable resistance changes in metals."
      },
      {
        id: 13,
        question: "Which network topology provides redundant paths?",
        options: ["Ring Topology", "Bus Topology", "Star Topology", "Linear Topology"],
        correctAnswer: 0,
        explanation: "Ring topology provides alternative communication paths for reliability."
      },
      {
        id: 14,
        question: "What does additive manufacturing reduce?",
        options: ["Material waste", "Production speed", "Design flexibility", "Equipment cost"],
        correctAnswer: 0,
        explanation: "3D printing adds material only where needed, minimizing waste."
      },
      {
        id: 15,
        question: "What is first step in PLC scan cycle?",
        options: ["Input Scan", "Program Execution", "Output Scan", "Housekeeping"],
        correctAnswer: 0,
        explanation: "PLCs first read all input values before processing logic."
      },
      {
        id: 16,
        question: "Which robot is best for high-speed pick-and-place?",
        options: ["Delta Robot", "Articulated Robot", "SCARA Robot", "Cartesian Robot"],
        correctAnswer: 0,
        explanation: "Delta robots excel at high-speed, lightweight pick-and-place operations."
      },
      {
        id: 17,
        question: "What does feedforward control respond to?",
        options: ["Disturbances before they affect process", "Only process output", "Only setpoint changes", "Only measurement noise"],
        correctAnswer: 0,
        explanation: "Feedforward anticipates and compensates for disturbances proactively."
      },
      {
        id: 18,
        question: "What does PROFINET IRT provide?",
        options: ["Deterministic real-time communication", "Wireless connectivity", "Serial communication", "Power distribution"],
        correctAnswer: 0,
        explanation: "IRT enables synchronized, time-critical communication for motion control."
      },
      {
        id: 19,
        question: "What is augmented reality used for in manufacturing?",
        options: ["Maintenance assistance and training", "Only entertainment", "Only product design", "Only accounting"],
        correctAnswer: 0,
        explanation: "AR overlays digital information to assist with complex maintenance and training tasks."
      },
      {
        id: 20,
        question: "What does TON timer do?",
        options: ["Delays turning on output", "Delays turning off output", "Generates pulses", "Counts events"],
        correctAnswer: 0,
        explanation: "Timer On-Delay starts timing when input is true and turns on output after preset time."
      },
      {
        id: 21,
        question: "What coordinate system aligns with workpiece?",
        options: ["User Coordinates", "World Coordinates", "Base Coordinates", "Tool Coordinates"],
        correctAnswer: 0,
        explanation: "User coordinates can be defined relative to workpieces for easier programming."
      },
      {
        id: 22,
        question: "Which flowmeter has no moving parts?",
        options: ["Magnetic Flowmeter", "Turbine Flowmeter", "Positive Displacement", "Variable Area"],
        correctAnswer: 0,
        explanation: "Magnetic flowmeters measure flow without obstruction or moving parts."
      },
      {
        id: 23,
        question: "What does network determinism ensure?",
        options: ["Predictable timing", "Highest speed", "Lowest cost", "Wireless operation"],
        correctAnswer: 0,
        explanation: "Deterministic networks guarantee message delivery within specific time frames."
      },
      {
        id: 24,
        question: "What does edge computing reduce?",
        options: ["Latency for real-time decisions", "Data storage needs", "Processing power", "Network security"],
        correctAnswer: 0,
        explanation: "Processing data locally reduces transmission delays to central systems."
      },
      {
        id: 25,
        question: "What is collaborative robot safety feature?",
        options: ["Force-limited joints", "Higher speed", "Larger size", "Complex programming"],
        correctAnswer: 0,
        explanation: "Cobots have joints that limit force to safe levels for human interaction."
      },
      {
        id: 26,
        question: "What does ratio control maintain?",
        options: ["Proportion between variables", "Constant temperature", "Fixed pressure", "Specific level"],
        correctAnswer: 0,
        explanation: "Ratio control keeps consistent relationships between process variables."
      },
      {
        id: 27,
        question: "Which is industrial wireless standard?",
        options: ["WirelessHART", "Home Wi-Fi", "Bluetooth only", "Cellular only"],
        correctAnswer: 0,
        explanation: "WirelessHART is designed for reliable industrial wireless communication."
      },
      {
        id: 28,
        question: "What does predictive maintenance use?",
        options: ["Data analytics to anticipate failures", "Only scheduled intervals", "Only emergency repairs", "No maintenance strategy"],
        correctAnswer: 0,
        explanation: "Predictive maintenance analyzes data to forecast equipment failures."
      },
      {
        id: 29,
        question: "What is SCARA robot good for?",
        options: ["Assembly operations", "Welding large structures", "Painting cars", "Heavy lifting"],
        correctAnswer: 0,
        explanation: "SCARA robots provide fast, precise horizontal movement ideal for assembly."
      },
      {
        id: 30,
        question: "What does derivative control respond to?",
        options: ["Rate of error change", "Current error", "Accumulated error", "Setpoint only"],
        correctAnswer: 0,
        explanation: "Derivative action anticipates future error based on current rate of change."
      },
      {
        id: 31,
        question: "What does Modbus RTU use?",
        options: ["Serial communication", "Ethernet only", "Wireless only", "Fiber optic only"],
        correctAnswer: 0,
        explanation: "Modbus RTU operates over RS-232 or RS-485 serial connections."
      },
      {
        id: 32,
        question: "What is cyber-physical system?",
        options: ["Integration of computation with physical processes", "Only computer system", "Only mechanical system", "Only network system"],
        correctAnswer: 0,
        explanation: "CPS tightly integrate computational and physical elements with feedback loops."
      },
      {
        id: 33,
        question: "What does too high proportional gain cause?",
        options: ["Oscillations and instability", "Slow response", "No control action", "Perfect control"],
        correctAnswer: 0,
        explanation: "Excessive proportional gain makes control systems unstable and oscillatory."
      },
      {
        id: 34,
        question: "What is PROFIBUS PA used for?",
        options: ["Process automation in hazardous areas", "Office networking", "Home automation", "Entertainment systems"],
        correctAnswer: 0,
        explanation: "PROFIBUS PA is designed for process automation with intrinsic safety."
      },
      {
        id: 35,
        question: "What does 5G URLLC enable?",
        options: ["Critical industrial applications", "Only video streaming", "Only web browsing", "Only file downloads"],
        correctAnswer: 0,
        explanation: "Ultra-Reliable Low-Latency Communication supports time-critical industrial apps."
      },
      {
        id: 36,
        question: "What is digital twin used for?",
        options: ["Simulation and optimization", "Only 3D visualization", "Only data storage", "Only manual planning"],
        correctAnswer: 0,
        explanation: "Digital twins enable simulation, testing, and optimization without disrupting production."
      },
      {
        id: 37,
        question: "What does managed switch provide?",
        options: ["Configuration and monitoring", "Basic connectivity only", "Wireless capability", "Protocol conversion"],
        correctAnswer: 0,
        explanation: "Managed switches offer advanced features for network management and control."
      },
      {
        id: 38,
        question: "What is mass customization?",
        options: ["Efficient production of customized products", "Only mass production", "Only custom craftsmanship", "No production"],
        correctAnswer: 0,
        explanation: "Mass customization combines efficiency of mass production with flexibility for customization."
      },
      {
        id: 39,
        question: "What does PLC housekeeping include?",
        options: ["Communications and diagnostics", "Only input reading", "Only output writing", "Only program execution"],
        correctAnswer: 0,
        explanation: "Housekeeping handles non-control tasks like communications and system diagnostics."
      },
      {
        id: 40,
        question: "What is Industry 4.0 main challenge?",
        options: ["Cybersecurity risks", "Lack of automation", "Manual processes only", "Simple technology"],
        correctAnswer: 0,
        explanation: "Increased connectivity expands potential attack surfaces requiring robust security."
      }
    ]
  }
};

export default automationEngineeringDiplomaCourse;
