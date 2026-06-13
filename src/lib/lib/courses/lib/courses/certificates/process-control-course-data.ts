// Process Control (Diploma) - Complete Course Data
export const processControlDiploma = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "process-control-diploma",
  title: "Process Control (Diploma)",
  description: "Advanced course in industrial process control systems. Learn to design, implement, and optimize control strategies for continuous and batch processes in various industries.",
  duration: "10 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  prerequisite: "Instrumentation (Certificate) or equivalent knowledge",
  icon: "⚙️",
  badge: "Diploma",
  
  // 2. MODULE ARCHITECTURE (6 Advanced Modules)
  modules: [
    {
      id: 1,
      title: "Advanced Process Control Fundamentals",
      completed: false,
      content: `
## Advanced Process Dynamics and Control

Process control is the heartbeat of modern industry. This module builds upon basic instrumentation knowledge to explore how complex industrial processes are controlled for maximum efficiency, safety, and quality.

### Process Control Hierarchy

Modern industrial facilities use a layered approach to control:

**Basic Control Layer**: Individual loops controlling single variables like temperature or pressure. These are the building blocks.

**Advanced Control Layer**: Coordinated control of multiple related variables. Like controlling both temperature and pressure in a reactor simultaneously.

**Optimization Layer**: Economic optimization - making the process as profitable as possible while meeting all constraints.

**Planning Layer**: Scheduling and production planning over days or weeks.

### Process Characteristics

Understanding process behavior is crucial for effective control:

**Self-Regulating Processes**: Naturally settle at a new steady state after a disturbance. Like liquid level in a tank with constant outflow.

**Integrating Processes**: Have no natural steady state - they keep changing unless controlled. Like tank level with pump outflow.

**Dead Time**: Time delay between control action and process response. Common in long pipes or transportation delays.

**Process Gain**: How much the process variable changes for a given control action.

### Control Objectives

Different processes have different control goals:

**Regulatory Control**: Maintain process variables at desired setpoints despite disturbances.

**Servo Control**: Move process from one operating point to another smoothly.

**Constraint Control**: Operate as close as possible to limits without violating them.

**Economic Control**: Maximize profit or minimize cost while meeting all other requirements.
`,
      quiz: [
        {
          id: 1,
          question: "What is the foundation layer in process control hierarchy?",
          options: ["Optimization layer", "Basic control layer", "Planning layer", "Advanced control layer"],
          correctAnswer: 1,
          explanation: "The basic control layer contains individual control loops that form the foundation for all higher-level control."
        },
        {
          id: 2,
          question: "Which layer handles economic optimization?",
          options: ["Basic control", "Advanced control", "Optimization layer", "Planning layer"],
          correctAnswer: 2,
          explanation: "The optimization layer focuses on economic performance - making the process as profitable as possible."
        },
        {
          id: 3,
          question: "What type of process settles naturally at a new steady state?",
          options: ["Integrating process", "Self-regulating process", "Dead time process", "Unstable process"],
          correctAnswer: 1,
          explanation: "Self-regulating processes naturally settle at a new equilibrium after disturbances."
        },
        {
          id: 4,
          question: "What process has no natural steady state?",
          options: ["Self-regulating", "Integrating", "Dead time", "Gain process"],
          correctAnswer: 1,
          explanation: "Integrating processes continue to change unless actively controlled - they have no natural stopping point."
        },
        {
          id: 5,
          question: "What is the delay between action and response called?",
          options: ["Process gain", "Dead time", "Integration time", "Response time"],
          correctAnswer: 1,
          explanation: "Dead time is the pure delay between when a control action is taken and when its effect is seen."
        },
        {
          id: 6,
          question: "What measures how much process variable changes per control action?",
          options: ["Dead time", "Process gain", "Integration rate", "Response time"],
          correctAnswer: 1,
          explanation: "Process gain quantifies the sensitivity of the process to control actions."
        },
        {
          id: 7,
          question: "What control maintains setpoints despite disturbances?",
          options: ["Servo control", "Regulatory control", "Constraint control", "Economic control"],
          correctAnswer: 1,
          explanation: "Regulatory control focuses on maintaining desired operating conditions despite external disturbances."
        },
        {
          id: 8,
          question: "What control moves between operating points?",
          options: ["Regulatory", "Servo", "Constraint", "Economic"],
          correctAnswer: 1,
          explanation: "Servo control handles transitions from one operating condition to another smoothly."
        },
        {
          id: 9,
          question: "What control operates near limits without violation?",
          options: ["Regulatory", "Servo", "Constraint", "Economic"],
          correctAnswer: 2,
          explanation: "Constraint control pushes operation to limits (like maximum temperature or pressure) without exceeding them."
        },
        {
          id: 10,
          question: "What control maximizes profit?",
          options: ["Regulatory", "Servo", "Constraint", "Economic"],
          correctAnswer: 3,
          explanation: "Economic control focuses directly on profitability and cost minimization."
        },
        {
          id: 11,
          question: "Which is NOT a process control layer?",
          options: ["Basic control", "Advanced control", "Optimization", "Maintenance layer"],
          correctAnswer: 3,
          explanation: "Maintenance is important but not typically considered a control layer in the hierarchy."
        },
        {
          id: 12,
          question: "What coordinates multiple related variables?",
          options: ["Basic control", "Advanced control", "Individual loops", "Manual control"],
          correctAnswer: 1,
          explanation: "Advanced control handles interactions between multiple process variables simultaneously."
        },
        {
          id: 13,
          question: "What handles production scheduling?",
          options: ["Basic control", "Advanced control", "Planning layer", "Optimization layer"],
          correctAnswer: 2,
          explanation: "The planning layer deals with longer-term scheduling and production planning."
        },
        {
          id: 14,
          question: "Where might dead time occur?",
          options: ["In short pipes", "In long transportation lines", "In local controllers", "In sensors only"],
          correctAnswer: 1,
          explanation: "Dead time is common in systems with long pipes or transportation delays where material takes time to move."
        },
        {
          id: 15,
          question: "What is liquid level in a tank with constant outflow?",
          options: ["Integrating process", "Self-regulating process", "Dead time process", "Gain process"],
          correctAnswer: 1,
          explanation: "Tank level with constant outflow naturally finds a new steady state - characteristic of self-regulating processes."
        },
        {
          id: 16,
          question: "What is tank level with pump outflow?",
          options: ["Self-regulating", "Integrating", "Dead time", "Gain"],
          correctAnswer: 1,
          explanation: "Tank level with pump outflow (constant outflow rate) continues to change unless controlled - integrating process."
        },
        {
          id: 17,
          question: "What focuses on smooth transitions?",
          options: ["Regulatory control", "Servo control", "Both equally", "Neither"],
          correctAnswer: 1,
          explanation: "Servo control specifically handles smooth transitions between operating conditions."
        },
        {
          id: 18,
          question: "What handles external disturbances?",
          options: ["Servo control", "Regulatory control", "Constraint control", "Economic control"],
          correctAnswer: 1,
          explanation: "Regulatory control is designed to reject disturbances and maintain setpoints."
        },
        {
          id: 19,
          question: "What pushes to maximum capacity?",
          options: ["Regulatory", "Servo", "Constraint", "Economic"],
          correctAnswer: 2,
          explanation: "Constraint control operates processes at their maximum safe or practical limits."
        },
        {
          id: 20,
          question: "What is the ultimate goal of process control?",
          options: ["Complexity", "Economic performance", "Manual operation", "Simple design"],
          correctAnswer: 1,
          explanation: "While safety and quality are constraints, the ultimate business goal is economic performance."
        }
      ]
    },
    {
      id: 2,
      title: "PID Control Tuning and Optimization",
      completed: false,
      content: `
## Mastering PID Controller Tuning

PID (Proportional-Integral-Derivative) controllers are the workhorses of process control. This module teaches advanced tuning techniques for optimal performance.

### PID Controller Components Revisited

**Proportional Action (P)**: Immediate response proportional to current error. Larger errors get larger corrections.

**Integral Action (I)**: Eliminates steady-state error by accumulating past errors. Also called reset action.

**Derivative Action (D)**: Anticipates future error based on current rate of change. Also called rate action.

**Controller Output**: The sum of P, I, and D contributions determines the final control action.

### Tuning Objectives

Different processes require different tuning approaches:

**Fast Response**: Minimize time to reach setpoint after changes.

**Stability**: Prevent oscillations and ensure smooth operation.

**Robustness**: Maintain good performance despite process changes or uncertainties.

**Disturbance Rejection**: Quickly compensate for external disturbances.

### Tuning Methods

**Manual Tuning**: Adjust parameters based on process response observations.

**Ziegler-Nichols Methods**: Classic methods using process reaction curve or ultimate cycling.

**Lambda Tuning**: Internal Model Control approach for robust tuning.

**Software Tools**: Modern computer-based tuning using process identification.

### Practical Tuning Guidelines

**Start Conservative**: Begin with less aggressive tuning, then tighten as needed.

**Consider Process Type**: Self-regulating vs integrating processes need different approaches.

**Handle Dead Time**: Processes with significant dead time require special consideration.

**Avoid Derivative Kick**: Use filtered derivative or other techniques to prevent sudden changes.

### Common Tuning Problems

**Overshoot**: Process variable goes too far past setpoint. Reduce proportional or add derivative.

**Oscillations**: Continuous cycling around setpoint. Usually too aggressive tuning.

**Slow Response**: Takes too long to reach setpoint. Increase proportional or reduce integral time.

**Steady-State Error**: Never reaches exact setpoint. Ensure integral action is enabled and properly tuned.
`,
      quiz: [
        {
          id: 1,
          question: "What does proportional action respond to?",
          options: ["Past errors", "Future errors", "Current error", "Error rate"],
          correctAnswer: 2,
          explanation: "Proportional action provides immediate response proportional to the current error."
        },
        {
          id: 2,
          question: "What eliminates steady-state error?",
          options: ["Proportional action", "Integral action", "Derivative action", "All actions"],
          correctAnswer: 1,
          explanation: "Integral action accumulates past errors to eliminate any persistent offset from setpoint."
        },
        {
          id: 3,
          question: "What anticipates future errors?",
          options: ["Proportional", "Integral", "Derivative", "None"],
          correctAnswer: 2,
          explanation: "Derivative action looks at the rate of error change to anticipate where the process is heading."
        },
        {
          id: 4,
          question: "What is another name for integral action?",
          options: ["Rate action", "Reset action", "Gain action", "Delay action"],
          correctAnswer: 1,
          explanation: "Integral action is often called reset action in industrial controllers."
        },
        {
          id: 5,
          question: "What is another name for derivative action?",
          options: ["Reset action", "Rate action", "Gain action", "Delay action"],
          correctAnswer: 1,
          explanation: "Derivative action is commonly called rate action in controller terminology."
        },
        {
          id: 6,
          question: "What tuning objective minimizes time to setpoint?",
          options: ["Stability", "Fast response", "Robustness", "Simplicity"],
          correctAnswer: 1,
          explanation: "Fast response tuning aims to minimize the time required to reach the desired setpoint."
        },
        {
          id: 7,
          question: "What prevents oscillations?",
          options: ["Fast response", "Stability", "Robustness", "Complexity"],
          correctAnswer: 1,
          explanation: "Stability-focused tuning prevents oscillatory or cycling behavior."
        },
        {
          id: 8,
          question: "What maintains performance despite changes?",
          options: ["Fast response", "Stability", "Robustness", "Simplicity"],
          correctAnswer: 2,
          explanation: "Robust tuning ensures good performance even when process characteristics change."
        },
        {
          id: 9,
          question: "What are classic tuning methods by Ziegler and Nichols?",
          options: ["Modern methods", "Classic methods", "Obsolete methods", "Simple methods only"],
          correctAnswer: 1,
          explanation: "Ziegler-Nichols methods are classic approaches still widely used and understood."
        },
        {
          id: 10,
          question: "What tuning uses process reaction curve?",
          options: ["Lambda tuning", "Ziegler-Nichols", "Software tools", "Manual only"],
          correctAnswer: 1,
          explanation: "One Ziegler-Nichols method uses the process reaction curve to determine tuning parameters."
        },
        {
          id: 11,
          question: "What is Internal Model Control approach called?",
          options: ["Ziegler-Nichols", "Lambda tuning", "Manual tuning", "Ultimate cycling"],
          correctAnswer: 1,
          explanation: "Lambda tuning is based on Internal Model Control principles for robust performance."
        },
        {
          id: 12,
          question: "Where should tuning typically start?",
          options: ["Aggressive", "Conservative", "Random", "Maximum values"],
          correctAnswer: 1,
          explanation: "Starting conservative (less aggressive) is safer, then parameters can be tightened as needed."
        },
        {
          id: 13,
          question: "What needs special consideration in tuning?",
          options: ["Fast processes", "Dead time", "Simple processes", "Manual control"],
          correctAnswer: 1,
          explanation: "Processes with significant dead time require special tuning approaches for stability."
        },
        {
          id: 14,
          question: "What prevents sudden derivative changes?",
          options: ["Proportional kick", "Integral windup", "Derivative kick prevention", "Reset action"],
          correctAnswer: 2,
          explanation: "Filtered derivative or other techniques prevent derivative kick on setpoint changes."
        },
        {
          id: 15,
          question: "What causes process to go past setpoint?",
          options: ["Overshoot", "Oscillations", "Slow response", "Steady-state error"],
          correctAnswer: 0,
          explanation: "Overshoot occurs when the process variable exceeds the setpoint during transitions."
        },
        {
          id: 16,
          question: "What causes continuous cycling?",
          options: ["Overshoot", "Oscillations", "Slow response", "Steady-state error"],
          correctAnswer: 1,
          explanation: "Oscillations are continuous cycling around the setpoint, usually from too aggressive tuning."
        },
        {
          id: 17,
          question: "What causes slow approach to setpoint?",
          options: ["Overshoot", "Oscillations", "Slow response", "Steady-state error"],
          correctAnswer: 2,
          explanation: "Slow response means the process takes too long to reach the desired setpoint."
        },
        {
          id: 18,
          question: "What causes failure to reach exact setpoint?",
          options: ["Overshoot", "Oscillations", "Slow response", "Steady-state error"],
          correctAnswer: 3,
          explanation: "Steady-state error is a persistent offset from the desired setpoint."
        },
        {
          id: 19,
          question: "How fix steady-state error?",
          options: ["Reduce proportional", "Enable integral", "Add derivative", "Increase dead time"],
          correctAnswer: 1,
          explanation: "Integral action must be enabled and properly tuned to eliminate steady-state error."
        },
        {
          id: 20,
          question: "What is the sum of P, I, and D contributions?",
          options: ["Process variable", "Setpoint", "Controller output", "Error signal"],
          correctAnswer: 2,
          explanation: "The controller output sent to the final control element is the sum of proportional, integral, and derivative contributions."
        }
      ]
    },
    {
      id: 3,
      title: "Multivariable and Advanced Control Strategies",
      completed: false,
      content: `
## Complex Control Systems for Industrial Processes

Many industrial processes involve multiple interacting variables. This module covers strategies for controlling such complex systems.

### Cascade Control

Cascade control uses two controllers in series for better disturbance rejection:

**Primary Controller**: Sets the setpoint for the secondary controller. Usually controls the main process variable.

**Secondary Controller**: Controls a related variable that affects the primary variable. Usually faster-responding.

**Example**: Furnace temperature control with fuel flow as secondary loop. Temperature controller sets fuel flow setpoint.

### Feedforward Control

Feedforward control anticipates disturbances before they affect the process:

**Measure Disturbances**: Detect disturbances as they enter the process.

**Calculate Compensation**: Determine control action needed to cancel disturbance effects.

**Combine with Feedback**: Usually used with feedback control for complete compensation.

**Example**: Boiler control measuring steam demand to adjust fuel before pressure changes.

### Ratio Control

Ratio control maintains proportional relationship between two or more flows:

**Set Ratio**: Desired proportion between flows (like 2:1 air to fuel).

**Measure Both Flows**: Use flow meters on each stream.

**Adjust Slave Flow**: Controller adjusts one flow to maintain ratio with the other.

**Applications**: Blending, combustion control, chemical reactions.

### Override/Selector Control

Override control selects between multiple controller outputs based on conditions:

**High/Low Selectors**: Choose highest or lowest signal from multiple controllers.

**Constraint Handling**: Different controllers handle normal vs constraint conditions.

**Safety Overrides**: Safety controllers take over during abnormal conditions.

**Example**: Compressor control with normal pressure control plus anti-surge override.

### Model Predictive Control (MPC)

MPC uses a process model to predict future behavior and optimize control:

**Process Model**: Mathematical representation of process dynamics.

**Prediction Horizon**: How far into future to predict process behavior.

**Optimization**: Calculate control moves to minimize future errors.

**Constraint Handling**: Explicitly considers process constraints.

**Applications**: Complex multivariable processes with constraints.
`,
      quiz: [
        {
          id: 1,
          question: "What uses two controllers in series?",
          options: ["Feedforward", "Ratio control", "Cascade control", "MPC"],
          correctAnswer: 2,
          explanation: "Cascade control uses a primary controller that sets the setpoint for a secondary controller."
        },
        {
          id: 2,
          question: "What controls main process variable in cascade?",
          options: ["Secondary controller", "Primary controller", "Both equally", "Neither"],
          correctAnswer: 1,
          explanation: "The primary controller in cascade control handles the main process variable of interest."
        },
        {
          id: 3,
          question: "What is usually faster-responding in cascade?",
          options: ["Primary loop", "Secondary loop", "Both equal", "Neither"],
          correctAnswer: 1,
          explanation: "The secondary loop typically controls a faster-responding variable for better disturbance rejection."
        },
        {
          id: 4,
          question: "What anticipates disturbances?",
          options: ["Feedback", "Feedforward", "Cascade", "Ratio"],
          correctAnswer: 1,
          explanation: "Feedforward control measures disturbances and takes action before they affect the process."
        },
        {
          id: 5,
          question: "What usually combines with feedback?",
          options: ["Feedforward only", "Feedback only", "Feedforward with feedback", "Neither"],
          correctAnswer: 2,
          explanation: "Feedforward is typically combined with feedback control for complete disturbance compensation."
        },
        {
          id: 6,
          question: "What maintains proportional relationship?",
          options: ["Cascade", "Feedforward", "Ratio control", "Override"],
          correctAnswer: 2,
          explanation: "Ratio control maintains a fixed proportional relationship between two or more flows."
        },
        {
          id: 7,
          question: "What adjusts slave flow to maintain ratio?",
          options: ["Master controller", "Slave controller", "Both", "Neither"],
          correctAnswer: 1,
          explanation: "In ratio control, the slave controller adjusts its flow to maintain the desired ratio with the master flow."
        },
        {
          id: 8,
          question: "What selects between controller outputs?",
          options: ["Ratio control", "Override control", "Cascade control", "Feedforward"],
          correctAnswer: 1,
          explanation: "Override control uses selectors to choose between multiple controller outputs based on conditions."
        },
        {
          id: 9,
          question: "What chooses highest signal?",
          options: ["Low selector", "High selector", "Average selector", "Ratio selector"],
          correctAnswer: 1,
          explanation: "High selectors pass through the highest input signal from multiple sources."
        },
        {
          id: 10,
          question: "What handles safety conditions?",
          options: ["Normal controllers", "Safety overrides", "Ratio controllers", "Feedforward"],
          correctAnswer: 1,
          explanation: "Safety override controllers take control during abnormal or unsafe conditions."
        },
        {
          id: 11,
          question: "What uses process model for predictions?",
          options: ["PID control", "MPC", "Cascade", "Ratio"],
          correctAnswer: 1,
          explanation: "Model Predictive Control uses a mathematical process model to predict future behavior."
        },
        {
          id: 12,
          question: "What explicitly handles constraints?",
          options: ["PID", "MPC", "Cascade", "Ratio"],
          correctAnswer: 1,
          explanation: "MPC explicitly considers process constraints during control calculation."
        },
        {
          id: 13,
          question: "What is prediction horizon?",
          options: ["Past behavior", "Future prediction window", "Current time", "Sampling time"],
          correctAnswer: 1,
          explanation: "Prediction horizon is how far into the future MPC predicts process behavior."
        },
        {
          id: 14,
          question: "What calculates optimal control moves?",
          options: ["Simple rules", "Optimization in MPC", "Fixed patterns", "Manual adjustment"],
          correctAnswer: 1,
          explanation: "MPC includes optimization calculations to determine the best control moves."
        },
        {
          id: 15,
          question: "Where is cascade control commonly used?",
          options: ["Temperature control", "Simple loops only", "All processes", "Manual processes"],
          correctAnswer: 0,
          explanation: "Cascade control is particularly effective for temperature control where inner loops can handle faster disturbances."
        },
        {
          id: 16,
          question: "What measures steam demand in boiler example?",
          options: ["Feedback", "Feedforward", "Cascade", "Ratio"],
          correctAnswer: 1,
          explanation: "Feedforward control in boilers measures steam demand to adjust fuel before pressure changes occur."
        },
        {
          id: 17,
          question: "What maintains air-fuel ratio?",
          options: ["Cascade", "Feedforward", "Ratio control", "Override"],
          correctAnswer: 2,
          explanation: "Ratio control maintains proper air-to-fuel ratios in combustion processes."
        },
        {
          id: 18,
          question: "What handles anti-surge in compressors?",
          options: ["Normal control", "Safety override", "Ratio control", "Feedforward"],
          correctAnswer: 1,
          explanation: "Anti-surge controllers act as safety overrides to protect compressors from damage."
        },
        {
          id: 19,
          question: "What is good for complex multivariable processes?",
          options: ["Simple PID", "MPC", "Manual control", "On/Off control"],
          correctAnswer: 1,
          explanation: "MPC is particularly effective for complex processes with multiple interacting variables and constraints."
        },
        {
          id: 20,
          question: "What combines disturbance measurement with control?",
          options: ["Feedback only", "Feedforward with feedback", "Cascade only", "Ratio only"],
          correctAnswer: 1,
          explanation: "Complete control often combines feedforward (for known disturbances) with feedback (for unknown disturbances)."
        }
      ]
    },
    {
      id: 4,
      title: "Distributed Control Systems (DCS) Architecture",
      completed: false,
      content: `
## Industrial Control System Infrastructure

Distributed Control Systems form the backbone of modern industrial automation. This module explores DCS architecture and implementation.

### DCS Components

**Controller Units**: Execute control algorithms and logic. Distributed throughout the plant.

**Operator Stations**: Human-Machine Interface (HMI) for monitoring and control.

**Engineering Stations**: For configuration, programming, and maintenance.

**Network Infrastructure**: Communication backbone connecting all components.

**I/O Subsystems**: Interface between controllers and field instruments.

### System Architecture

**Distributed Processing**: Control functions distributed to local controllers near processes.

**Redundancy**: Critical components duplicated for reliability.

**Scalability**: Ability to expand system as plant grows.

**Integration**: Connection with other systems like PLCs, safety systems, business networks.

### Control Configuration

**Function Blocks**: Graphical programming elements for control strategies.

**Sequential Control**: For batch processes with defined sequences.

**Continuous Control**: For continuous processes with PID and advanced control.

**Alarm Management**: Configuration of process alarms and alerts.

**Historical Data**: Archiving of process data for analysis and reporting.

### Network Considerations

**Deterministic Communication**: Predictable timing for control data.

**Network Segmentation**: Separating control networks from business networks for security.

**Protocols**: Industrial protocols like Modbus, Profibus, Foundation Fieldbus, Ethernet/IP.

**Cybersecurity**: Protecting control systems from unauthorized access.

### System Maintenance

**Backup and Restore**: Regular backups of configuration and software.

**Firmware Updates**: Keeping system components current.

**Performance Monitoring**: Tracking system health and performance.

**Disaster Recovery**: Plans for system failure recovery.
`,
      quiz: [
        {
          id: 1,
          question: "What executes control algorithms in DCS?",
          options: ["Operator stations", "Controller units", "Engineering stations", "Network only"],
          correctAnswer: 1,
          explanation: "Controller units are the processing elements that execute control algorithms in a DCS."
        },
        {
          id: 2,
          question: "What provides human interface?",
          options: ["Controllers", "Operator stations", "I/O systems", "Network"],
          correctAnswer: 1,
          explanation: "Operator stations provide the Human-Machine Interface for plant personnel."
        },
        {
          id: 3,
          question: "What is for configuration and programming?",
          options: ["Operator stations", "Engineering stations", "Controllers", "I/O"],
          correctAnswer: 1,
          explanation: "Engineering stations are used for system configuration, programming, and maintenance."
        },
        {
          id: 4,
          question: "What connects system components?",
          options: ["Controllers", "Network infrastructure", "I/O only", "Power supply"],
          correctAnswer: 1,
          explanation: "Network infrastructure forms the communication backbone connecting all DCS components."
        },
        {
          id: 5,
          question: "What interfaces with field instruments?",
          options: ["Controllers", "I/O subsystems", "Operator stations", "Network"],
          correctAnswer: 1,
          explanation: "I/O (Input/Output) subsystems provide the interface between controllers and field instruments."
        },
        {
          id: 6,
          question: "What distributes control functions locally?",
          options: ["Centralized processing", "Distributed processing", "Manual control", "No distribution"],
          correctAnswer: 1,
          explanation: "DCS uses distributed processing with controllers located near the processes they control."
        },
        {
          id: 7,
          question: "What duplicates critical components?",
          options: ["Simplification", "Redundancy", "Elimination", "Manual backup"],
          correctAnswer: 1,
          explanation: "Redundancy involves duplicating critical components to ensure system reliability."
        },
        {
          id: 8,
          question: "What allows system expansion?",
          options: ["Fixed design", "Scalability", "Reduction", "Isolation"],
          correctAnswer: 1,
          explanation: "Scalability allows the DCS to be expanded as the plant grows or changes."
        },
        {
          id: 9,
          question: "What are graphical programming elements?",
          options: ["Text code", "Function blocks", "Hardware only", "Manual procedures"],
          correctAnswer: 1,
          explanation: "Function blocks are graphical elements used to build control strategies in DCS."
        },
        {
          id: 10,
          question: "What handles batch processes?",
          options: ["Continuous control", "Sequential control", "Manual control", "No control"],
          correctAnswer: 1,
          explanation: "Sequential control handles batch processes with defined step-by-step sequences."
        },
        {
          id: 11,
          question: "What has predictable timing?",
          options: ["Random communication", "Deterministic communication", "Slow communication", "No communication"],
          correctAnswer: 1,
          explanation: "Deterministic communication provides predictable timing for control data transmission."
        },
        {
          id: 12,
          question: "What separates networks for security?",
          options: ["Network combination", "Network segmentation", "Network elimination", "Network sharing"],
          correctAnswer: 1,
          explanation: "Network segmentation separates control networks from business networks for security."
        },
        {
          id: 13,
          question: "What protects from unauthorized access?",
          options: ["Open access", "Cybersecurity", "No protection", "Physical only"],
          correctAnswer: 1,
          explanation: "Cybersecurity measures protect control systems from unauthorized access and attacks."
        },
        {
          id: 14,
          question: "What saves configuration regularly?",
          options: ["Backup and restore", "Ignore data", "Manual notes", "Memory only"],
          correctAnswer: 0,
          explanation: "Regular backup and restore procedures protect against configuration loss."
        },
        {
          id: 15,
          question: "What keeps components current?",
          options: ["Ignore updates", "Firmware updates", "Downgrade", "No changes"],
          correctAnswer: 1,
          explanation: "Firmware updates keep system components current with latest features and security."
        },
        {
          id: 16,
          question: "What tracks system health?",
          options: ["Ignore performance", "Performance monitoring", "Assume good", "Manual checks only"],
          correctAnswer: 1,
          explanation: "Performance monitoring tracks system health and identifies potential issues."
        },
        {
          id: 17,
          question: "What plans for system failure?",
          options: ["Assume no failure", "Disaster recovery", "Ignore problems", "Manual only"],
          correctAnswer: 1,
          explanation: "Disaster recovery plans prepare for system failure and define recovery procedures."
        },
        {
          id: 18,
          question: "What handles continuous processes?",
          options: ["Sequential control", "Continuous control", "Batch control", "Manual control"],
          correctAnswer: 1,
          explanation: "Continuous control handles processes that operate continuously rather than in batches."
        },
        {
          id: 19,
          question: "What archives process data?",
          options: ["Ignore history", "Historical data", "Current only", "No storage"],
          correctAnswer: 1,
          explanation: "Historical data systems archive process information for analysis and reporting."
        },
        {
          id: 20,
          question: "What connects with other systems?",
          options: ["Isolation", "Integration", "Separation", "No connection"],
          correctAnswer: 1,
          explanation: "Integration capabilities allow DCS to connect with other plant and business systems."
        }
      ]
    },
    {
      id: 5,
      title: "Process Safety Systems and Alarm Management",
      completed: false,
      content: `
## Ensuring Safe and Reliable Operation

Safety is paramount in process industries. This module covers safety systems and effective alarm management for plant protection.

### Safety Instrumented Systems (SIS)

**Purpose**: Independently protect people, environment, and equipment.

**Layers of Protection**: Multiple independent safety layers.

**Safety Integrity Level (SIL)**: Quantitative measure of safety system performance.

**Independent from Basic Control**: Separate sensors, logic solvers, and final elements.

### Emergency Shutdown Systems

**ESD Levels**: Different shutdown levels for different scenarios.

**Cause and Effect**: Mapping process conditions to shutdown actions.

**Bypass Management**: Procedures for temporary bypassing during maintenance.

**Testing and Proof Testing**: Regular verification of safety system functionality.

### Alarm Management

**Alarm Philosophy**: Document defining alarm system design and use.

**Alarm Rationalization**: Systematic review to ensure necessary and effective alarms.

**Alarm Prioritization**: Classifying alarms by severity and required response.

**Alarm Flood Prevention**: Techniques to prevent overwhelming operators during upsets.

### Human Factors in Safety

**Operator Response Time**: Time required for operators to respond to alarms.

**Alarm Display**: Effective presentation of alarm information.

**Procedures and Training**: Clear procedures and regular training for abnormal situations.

**Fatigue Management**: Addressing operator fatigue in control room design.

### Safety System Design Principles

**Fail-Safe Design**: Systems fail to a safe state.

**Redundancy**: Multiple channels for critical safety functions.

**Diagnostics**: Continuous monitoring of safety system health.

**Documentation**: Complete documentation of safety system design and operation.

### Regulatory Compliance

**Standards**: IEC 61511, ISA 84, and other industry standards.

**Certification**: Equipment certification for safety applications.

**Audits and Assessments**: Regular safety system assessments.

**Management of Change**: Procedures for modifying safety systems.
`,
      quiz: [
        {
          id: 1,
          question: "What independently protects people and equipment?",
          options: ["Basic control", "SIS", "Manual control", "No system"],
          correctAnswer: 1,
          explanation: "Safety Instrumented Systems provide independent protection layers."
        },
        {
          id: 2,
          question: "What measures safety system performance?",
          options: ["Control quality", "SIL", "Speed", "Cost"],
          correctAnswer: 1,
          explanation: "Safety Integrity Level quantifies the reliability of safety functions."
        },
        {
          id: 3,
          question: "What separates from basic control?",
          options: ["Integrated systems", "Independent SIS", "Same systems", "Manual only"],
          correctAnswer: 1,
          explanation: "SIS should be independent with separate sensors, logic, and final elements."
        },
        {
          id: 4,
          question: "What handles different shutdown scenarios?",
          options: ["Single level", "ESD levels", "No shutdown", "Manual only"],
          correctAnswer: 1,
          explanation: "Emergency Shutdown Systems have different levels for different severity scenarios."
        },
        {
          id: 5,
          question: "What maps conditions to actions?",
          options: ["Random response", "Cause and effect", "No mapping", "Manual decisions"],
          correctAnswer: 1,
          explanation: "Cause and effect diagrams map process conditions to specific shutdown actions."
        },
        {
          id: 6,
          question: "What defines alarm system design?",
          options: ["Alarm philosophy", "Random design", "No definition", "Supplier only"],
          correctAnswer: 0,
          explanation: "Alarm philosophy document defines how the alarm system should be designed and used."
        },
        {
          id: 7,
          question: "What reviews alarm necessity?",
          options: ["Alarm rationalization", "Ignore alarms", "Add all alarms", "Random selection"],
          correctAnswer: 0,
          explanation: "Alarm rationalization systematically reviews each alarm to ensure it's necessary and effective."
        },
        {
          id: 8,
          question: "What classifies alarm severity?",
          options: ["Ignore priority", "Alarm prioritization", "Same priority", "Manual classification"],
          correctAnswer: 1,
          explanation: "Alarm prioritization classifies alarms by severity and required response time."
        },
        {
          id: 9,
          question: "What prevents overwhelming operators?",
          options: ["More alarms", "Alarm flood prevention", "Ignore floods", "Manual handling"],
          correctAnswer: 1,
          explanation: "Alarm flood prevention techniques manage alarm presentation during process upsets."
        },
        {
          id: 10,
          question: "What considers operator response time?",
          options: ["Ignore operators", "Human factors", "Machine only", "Automatic only"],
          correctAnswer: 1,
          explanation: "Human factors consider operator capabilities including response times."
        },
        {
          id: 11,
          question: "What fails to safe state?",
          options: ["Fail-dangerous", "Fail-safe design", "Fail-random", "No failure"],
          correctAnswer: 1,
          explanation: "Fail-safe design ensures systems fail to a predetermined safe state."
        },
        {
          id: 12,
          question: "What uses multiple channels?",
          options: ["Single channel", "Redundancy", "No channels", "Manual backup"],
          correctAnswer: 1,
          explanation: "Redundancy uses multiple independent channels for critical safety functions."
        },
        {
          id: 13,
          question: "What monitors system health?",
          options: ["Ignore health", "Diagnostics", "Assume good", "Visual only"],
          correctAnswer: 1,
          explanation: "Diagnostics continuously monitor safety system components for faults."
        },
        {
          id: 14,
          question: "What documents system design?",
          options: ["No documentation", "Complete documentation", "Partial notes", "Memory only"],
          correctAnswer: 1,
          explanation: "Complete documentation is essential for safety system design, operation, and maintenance."
        },
        {
          id: 15,
          question: "What are key safety standards?",
          options: ["No standards", "IEC 61511/ISA 84", "Random rules", "Supplier only"],
          correctAnswer: 1,
          explanation: "IEC 61511 and ISA 84 are key standards for safety instrumented systems."
        },
        {
          id: 16,
          question: "What certifies safety equipment?",
          options: ["No certification", "Safety certification", "Any certification", "Self-certification"],
          correctAnswer: 1,
          explanation: "Safety equipment requires certification for use in safety applications."
        },
        {
          id: 17,
          question: "What assesses safety systems regularly?",
          options: ["Ignore assessments", "Audits and assessments", "Initial only", "Never"],
          correctAnswer: 1,
          explanation: "Regular audits and assessments ensure safety systems remain effective."
        },
        {
          id: 18,
          question: "What manages safety system changes?",
          options: ["Random changes", "Management of Change", "No changes allowed", "Supplier only"],
          correctAnswer: 1,
          explanation: "Management of Change procedures control modifications to safety systems."
        },
        {
          id: 19,
          question: "What addresses operator fatigue?",
          options: ["Ignore fatigue", "Fatigue management", "More work", "No consideration"],
          correctAnswer: 1,
          explanation: "Fatigue management addresses human factors in control room design and operation."
        },
        {
          id: 20,
          question: "What provides clear abnormal procedures?",
          options: ["No procedures", "Procedures and training", "Memory only", "Improvisation"],
          correctAnswer: 1,
          explanation: "Clear procedures and regular training are essential for handling abnormal situations safely."
        }
      ]
    },
    {
      id: 6,
      title: "Process Optimization and Performance Monitoring",
      completed: false,
      content: `
## Maximizing Process Performance

Beyond basic control, optimization focuses on making processes as efficient, profitable, and reliable as possible.

### Performance Metrics

**Key Performance Indicators (KPIs)**: Quantifiable measures of process performance.

**Quality Metrics**: Product quality measurements and variability.

**Efficiency Metrics**: Resource utilization and energy efficiency.

**Reliability Metrics**: Equipment availability and mean time between failures.

### Real-Time Optimization

**Economic Optimization**: Maximizing profit or minimizing cost in real time.

**Constraint Pushing**: Operating as close as possible to constraints without violation.

**Multi-Objective Optimization**: Balancing competing objectives like quality vs throughput.

**Adaptive Optimization**: Adjusting optimization as process conditions change.

### Advanced Process Control Applications

**Model-Based Control**: Using detailed process models for better control.

**Inferential Control**: Estimating difficult-to-measure variables from other measurements.

**Adaptive Control**: Adjusting controller parameters as process characteristics change.

**Fuzzy Logic Control**: Handling processes with uncertain or qualitative knowledge.

### Data Analytics for Process Improvement

**Statistical Process Control**: Using statistics to monitor and control processes.

**Pattern Recognition**: Identifying patterns in process data for fault detection.

**Predictive Maintenance**: Predicting equipment failures before they occur.

**Digital Twin**: Virtual representation of physical process for analysis and optimization.

### Continuous Improvement

**Performance Monitoring**: Continuous tracking of process performance.

**Root Cause Analysis**: Systematic approach to finding underlying causes of problems.

**Benchmarking**: Comparing performance against industry standards or best practices.

**Technology Upgrades**: Implementing new technologies for performance improvement.

### Implementation Considerations

**Change Management**: Managing organizational changes for new technologies.

**Training Requirements**: Ensuring personnel have necessary skills.

**Return on Investment**: Calculating economic benefits of optimization projects.

**Sustainability Considerations**: Environmental impact and energy efficiency.
`,
      quiz: [
        {
          id: 1,
          question: "What are quantifiable performance measures?",
          options: ["Guesses", "KPIs", "Opinions", "Feelings"],
          correctAnswer: 1,
          explanation: "Key Performance Indicators are quantifiable measures used to evaluate success."
        },
        {
          id: 2,
          question: "What measures product characteristics?",
          options: ["Efficiency metrics", "Quality metrics", "Cost only", "Speed only"],
          correctAnswer: 1,
          explanation: "Quality metrics measure product characteristics and variability."
        },
        {
          id: 3,
          question: "What measures resource use?",
          options: ["Quality metrics", "Efficiency metrics", "Cost only", "Reliability only"],
          correctAnswer: 1,
          explanation: "Efficiency metrics measure how effectively resources are used."
        },
        {
          id: 4,
          question: "What measures equipment availability?",
          options: ["Quality metrics", "Efficiency metrics", "Reliability metrics", "Cost metrics"],
          correctAnswer: 2,
          explanation: "Reliability metrics measure equipment availability and time between failures."
        },
        {
          id: 5,
          question: "What maximizes profit in real time?",
          options: ["Basic control", "Economic optimization", "Manual control", "No optimization"],
          correctAnswer: 1,
          explanation: "Economic optimization focuses on maximizing profitability in real-time operation."
        },
        {
          id: 6,
          question: "What operates near limits?",
          options: ["Avoid constraints", "Constraint pushing", "Stay away", "Ignore limits"],
          correctAnswer: 1,
          explanation: "Constraint pushing involves operating as close as possible to limits for maximum performance."
        },
        {
          id: 7,
          question: "What balances competing goals?",
          options: ["Single objective", "Multi-objective optimization", "Ignore conflicts", "Choose one"],
          correctAnswer: 1,
          explanation: "Multi-objective optimization balances competing objectives like quality vs throughput."
        },
        {
          id: 8,
          question: "What adjusts to process changes?",
          options: ["Fixed optimization", "Adaptive optimization", "No adjustment", "Manual only"],
          correctAnswer: 1,
          explanation: "Adaptive optimization adjusts as process conditions or characteristics change."
        },
        {
          id: 9,
          question: "What uses detailed process models?",
          options: ["Simple control", "Model-based control", "Manual control", "No models"],
          correctAnswer: 1,
          explanation: "Model-based control uses detailed mathematical models of the process for better control."
        },
        {
          id: 10,
          question: "What estimates hard-to-measure variables?",
          options: ["Direct measurement", "Inferential control", "Ignore variables", "Manual estimates"],
          correctAnswer: 1,
          explanation: "Inferential control estimates variables that are difficult or expensive to measure directly."
        },
        {
          id: 11,
          question: "What handles uncertain knowledge?",
          options: ["Precise control", "Fuzzy logic control", "Ignore uncertainty", "Exact only"],
          correctAnswer: 1,
          explanation: "Fuzzy logic control handles processes with uncertain or qualitative knowledge."
        },
        {
          id: 12,
          question: "What uses statistics for monitoring?",
          options: ["Random checks", "Statistical Process Control", "No statistics", "Manual only"],
          correctAnswer: 1,
          explanation: "Statistical Process Control uses statistical methods to monitor and control processes."
        },
        {
          id: 13,
          question: "What identifies data patterns?",
          options: ["Ignore patterns", "Pattern recognition", "Random viewing", "No analysis"],
          correctAnswer: 1,
          explanation: "Pattern recognition identifies meaningful patterns in process data for analysis."
        },
        {
          id: 14,
          question: "What predicts equipment failures?",
          options: ["Reactive maintenance", "Predictive maintenance", "No maintenance", "Scheduled only"],
          correctAnswer: 1,
          explanation: "Predictive maintenance uses data analysis to predict failures before they occur."
        },
        {
          id: 15,
          question: "What is virtual process representation?",
          options: ["Physical model", "Digital twin", "No model", "Simple drawing"],
          correctAnswer: 1,
          explanation: "Digital twin is a virtual representation of a physical process for analysis."
        },
        {
          id: 16,
          question: "What tracks performance continuously?",
          options: ["Occasional checks", "Performance monitoring", "Never check", "Initial only"],
          correctAnswer: 1,
          explanation: "Performance monitoring involves continuous tracking of process performance metrics."
        },
        {
          id: 17,
          question: "What finds underlying causes?",
          options: ["Surface fixes", "Root cause analysis", "Ignore causes", "Blame people"],
          correctAnswer: 1,
          explanation: "Root cause analysis systematically finds underlying causes of problems."
        },
        {
          id: 18,
          question: "What compares to industry standards?",
          options: ["Isolation", "Benchmarking", "No comparison", "Internal only"],
          correctAnswer: 1,
          explanation: "Benchmarking compares performance against industry standards or best practices."
        },
        {
          id: 19,
          question: "What manages organizational changes?",
          options: ["Ignore changes", "Change management", "Force changes", "Hope for best"],
          correctAnswer: 1,
          explanation: "Change management handles organizational aspects of implementing new technologies."
        },
        {
          id: 20,
          question: "What calculates project benefits?",
          options: ["Ignore costs", "Return on Investment", "Assume benefits", "No calculation"],
          correctAnswer: 1,
          explanation: "Return on Investment calculations quantify economic benefits of optimization projects."
        }
      ]
    }
  ],
  
  // FINAL EXAM (40 questions covering all modules)
  finalExam: {
    title: "Process Control Diploma Final Exam",
    description: "Comprehensive examination covering all advanced topics in Process Control Diploma",
    passingScore: 75,
    questions: [
      {
        id: 1,
        question: "What is the foundation control layer?",
        options: ["Optimization", "Basic control", "Planning", "Advanced control"],
        correctAnswer: 1,
        explanation: "Basic control layer contains individual loops forming the control foundation."
      },
      {
        id: 2,
        question: "What handles economic optimization?",
        options: ["Basic control", "Advanced control", "Optimization layer", "Planning layer"],
        correctAnswer: 2,
        explanation: "Optimization layer focuses on economic performance and profitability."
      },
      {
        id: 3,
        question: "What process settles naturally?",
        options: ["Integrating", "Self-regulating", "Dead time", "Unstable"],
        correctAnswer: 1,
        explanation: "Self-regulating processes naturally reach new steady states."
      },
      {
        id: 4,
        question: "What maintains setpoints despite disturbances?",
        options: ["Servo control", "Regulatory control", "Constraint control", "Economic control"],
        correctAnswer: 1,
        explanation: "Regulatory control maintains setpoints despite external disturbances."
      },
      {
        id: 5,
        question: "What eliminates steady-state error?",
        options: ["Proportional", "Integral", "Derivative", "All"],
        correctAnswer: 1,
        explanation: "Integral action accumulates past errors to eliminate offset."
      },
      {
        id: 6,
        question: "What anticipates future errors?",
        options: ["Proportional", "Integral", "Derivative", "None"],
        correctAnswer: 2,
        explanation: "Derivative action anticipates based on error rate of change."
      },
      {
        id: 7,
        question: "What tuning prevents oscillations?",
        options: ["Fast response", "Stability", "Robustness", "Simplicity"],
        correctAnswer: 1,
        explanation: "Stability-focused tuning prevents oscillatory behavior."
      },
      {
        id: 8,
        question: "What uses two controllers in series?",
        options: ["Feedforward", "Ratio", "Cascade", "MPC"],
        correctAnswer: 2,
        explanation: "Cascade control uses primary and secondary controllers in series."
      },
      {
        id: 9,
        question: "What anticipates disturbances?",
        options: ["Feedback", "Feedforward", "Cascade", "Ratio"],
        correctAnswer: 1,
        explanation: "Feedforward control anticipates and compensates for disturbances."
      },
      {
        id: 10,
        question: "What maintains proportional relationship?",
        options: ["Cascade", "Feedforward", "Ratio control", "Override"],
        correctAnswer: 2,
        explanation: "Ratio control maintains fixed proportions between flows."
      },
      {
        id: 11,
        question: "What uses process model for predictions?",
        options: ["PID", "MPC", "Cascade", "Ratio"],
        correctAnswer: 1,
        explanation: "Model Predictive Control uses mathematical process models."
      },
      {
        id: 12,
        question: "What executes control algorithms in DCS?",
        options: ["Operator stations", "Controller units", "Engineering stations", "Network"],
        correctAnswer: 1,
        explanation: "Controller units execute control algorithms in DCS."
      },
      {
        id: 13,
        question: "What provides human interface?",
        options: ["Controllers", "Operator stations", "I/O", "Network"],
        correctAnswer: 1,
        explanation: "Operator stations provide Human-Machine Interface."
      },
      {
        id: 14,
        question: "What handles batch processes?",
        options: ["Continuous control", "Sequential control", "Manual", "None"],
        correctAnswer: 1,
        explanation: "Sequential control handles batch processes with defined sequences."
      },
      {
        id: 15,
        question: "What protects independently?",
        options: ["Basic control", "SIS", "Manual", "None"],
        correctAnswer: 1,
        explanation: "Safety Instrumented Systems provide independent protection."
      },
      {
        id: 16,
        question: "What measures safety performance?",
        options: ["Control quality", "SIL", "Speed", "Cost"],
        correctAnswer: 1,
        explanation: "Safety Integrity Level quantifies safety system reliability."
      },
      {
        id: 17,
        question: "What defines alarm system design?",
        options: ["Alarm philosophy", "Random design", "No definition", "Supplier"],
        correctAnswer: 0,
        explanation: "Alarm philosophy document defines alarm system design."
      },
      {
        id: 18,
        question: "What fails to safe state?",
        options: ["Fail-dangerous", "Fail-safe", "Fail-random", "No failure"],
        correctAnswer: 1,
        explanation: "Fail-safe design ensures systems fail to predetermined safe states."
      },
      {
        id: 19,
        question: "What are quantifiable performance measures?",
        options: ["Guesses", "KPIs", "Opinions", "Feelings"],
        correctAnswer: 1,
        explanation: "Key Performance Indicators are quantifiable performance measures."
      },
      {
        id: 20,
        question: "What maximizes real-time profit?",
        options: ["Basic control", "Economic optimization", "Manual", "None"],
        correctAnswer: 1,
        explanation: "Economic optimization focuses on real-time profitability."
      },
      {
        id: 21,
        question: "What uses detailed process models?",
        options: ["Simple control", "Model-based control", "Manual", "None"],
        correctAnswer: 1,
        explanation: "Model-based control uses detailed mathematical models."
      },
      {
        id: 22,
        question: "What estimates hard-to-measure variables?",
        options: ["Direct measurement", "Inferential control", "Ignore", "Manual"],
        correctAnswer: 1,
        explanation: "Inferential control estimates difficult-to-measure variables."
      },
      {
        id: 23,
        question: "What uses statistics for monitoring?",
        options: ["Random checks", "Statistical Process Control", "No statistics", "Manual"],
        correctAnswer: 1,
        explanation: "Statistical Process Control uses statistical methods."
      },
      {
        id: 24,
        question: "What predicts equipment failures?",
        options: ["Reactive", "Predictive maintenance", "No maintenance", "Scheduled"],
        correctAnswer: 1,
        explanation: "Predictive maintenance predicts failures before they occur."
      },
      {
        id: 25,
        question: "What is virtual process representation?",
        options: ["Physical model", "Digital twin", "No model", "Drawing"],
        correctAnswer: 1,
        explanation: "Digital twin is virtual representation of physical process."
      },
      {
        id: 26,
        question: "What handles process transitions?",
        options: ["Regulatory", "Servo", "Constraint", "Economic"],
        correctAnswer: 1,
        explanation: "Servo control handles transitions between operating points."
      },
      {
        id: 27,
        question: "What operates near limits?",
        options: ["Regulatory", "Servo", "Constraint", "Economic"],
        correctAnswer: 2,
        explanation: "Constraint control operates near process limits."
      },
      {
        id: 28,
        question: "What is classic tuning method?",
        options: ["Modern only", "Ziegler-Nichols", "Obsolete", "Simple only"],
        correctAnswer: 1,
        explanation: "Ziegler-Nichols are classic tuning methods still used."
      },
      {
        id: 29,
        question: "What selects between controller outputs?",
        options: ["Ratio", "Override", "Cascade", "Feedforward"],
        correctAnswer: 1,
        explanation: "Override control selects between multiple controller outputs."
      },
      {
        id: 30,
        question: "What explicitly handles constraints?",
        options: ["PID", "MPC", "Cascade", "Ratio"],
        correctAnswer: 1,
        explanation: "MPC explicitly considers process constraints."
      },
      {
        id: 31,
        question: "What connects DCS components?",
        options: ["Controllers", "Network", "I/O only", "Power"],
        correctAnswer: 1,
        explanation: "Network infrastructure connects DCS components."
      },
      {
        id: 32,
        question: "What separates networks for security?",
        options: ["Combination", "Segmentation", "Elimination", "Sharing"],
        correctAnswer: 1,
        explanation: "Network segmentation separates control from business networks."
      },
      {
        id: 33,
        question: "What maps conditions to shutdown actions?",
        options: ["Random", "Cause and effect", "No mapping", "Manual"],
        correctAnswer: 1,
        explanation: "Cause and effect diagrams map conditions to shutdown actions."
      },
      {
        id: 34,
        question: "What reviews alarm necessity?",
        options: ["Alarm rationalization", "Ignore", "Add all", "Random"],
        correctAnswer: 0,
        explanation: "Alarm rationalization reviews each alarm's necessity."
      },
      {
        id: 35,
        question: "What uses multiple safety channels?",
        options: ["Single channel", "Redundancy", "No channels", "Manual"],
        correctAnswer: 1,
        explanation: "Redundancy uses multiple independent safety channels."
      },
      {
        id: 36,
        question: "What measures equipment availability?",
        options: ["Quality", "Efficiency", "Reliability", "Cost"],
        correctAnswer: 2,
        explanation: "Reliability metrics measure equipment availability."
      },
      {
        id: 37,
        question: "What balances competing goals?",
        options: ["Single objective", "Multi-objective", "Ignore conflicts", "Choose one"],
        correctAnswer: 1,
        explanation: "Multi-objective optimization balances competing goals."
      },
      {
        id: 38,
        question: "What handles uncertain knowledge?",
        options: ["Precise", "Fuzzy logic", "Ignore", "Exact only"],
        correctAnswer: 1,
        explanation: "Fuzzy logic handles uncertain or qualitative knowledge."
      },
      {
        id: 39,
        question: "What finds underlying causes?",
        options: ["Surface fixes", "Root cause analysis", "Ignore", "Blame"],
        correctAnswer: 1,
        explanation: "Root cause analysis finds underlying problem causes."
      },
      {
        id: 40,
        question: "What manages organizational changes?",
        options: ["Ignore", "Change management", "Force", "Hope"],
        correctAnswer: 1,
        explanation: "Change management handles organizational aspects of change."
      }
    ]
  }
};

export default processControlDiploma;
