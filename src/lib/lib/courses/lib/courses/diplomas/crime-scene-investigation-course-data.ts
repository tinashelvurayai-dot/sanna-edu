export const crimeSceneInvestigationDiploma = {
  // COURSE METADATA & IDENTIFICATION
  id: "crime-scene-investigation-diploma",
  title: "Crime Scene Investigation (Diploma)",
  description: "Advanced training in comprehensive crime scene management, specialized evidence collection techniques, and scene reconstruction for professional investigators.",
  duration: "8 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  icon: "🚨",
  badge: "Diploma",
  
  // MODULE ARCHITECTURE - 6 ADVANCED MODULES + FINAL EXAM
  modules: [
    {
      id: 1,
      title: "Advanced Scene Management & Documentation",
      content: `# Professional Scene Management

## Strategic Scene Assessment
Professional crime scene management begins with rapid yet thorough assessment. The lead investigator must immediately evaluate scene safety, potential evidence types, and required resources. This initial assessment determines the scope of the investigation and resource allocation.

## Multi-Zone Scene Security
Establish three concentric security zones:
1. **Inner Core Zone**: Immediate crime scene area - only processing personnel
2. **Controlled Access Zone**: Support area for equipment and staging
3. **Perimeter Zone**: Media and public exclusion area with checkpoints

Each zone requires specific authorization levels and documentation procedures. Security personnel maintain access logs at each transition point.

## Comprehensive Documentation Systems
Implement layered documentation:
- **Digital Photography**: RAW format images with scale references
- **360° Video Documentation**: Spherical video recording of entire scene
- **Total Station Mapping**: Precise electronic measurement system
- **Structured Note-Taking**: Standardized forms for consistency
- **Chain of Custody**: Real-time digital tracking of all evidence

## Scene Processing Workflow
Follow this systematic workflow:
1. Initial assessment and security establishment
2. Preliminary walkthrough with minimal disturbance
3. Overall documentation (photos, video, sketches)
4. Evidence recognition and marking
5. Detailed evidence documentation
6. Evidence collection and packaging
7. Final walkthrough and scene release

## Team Coordination Protocols
Assign specific roles:
- **Scene Commander**: Overall responsibility and coordination
- **Evidence Recorder**: Documentation and chain of custody
- **Photographer/Videographer**: Visual documentation
- **Evidence Collector**: Specialized evidence recovery
- **Sketcher**: Scene diagram creation
- **Logistics Officer**: Equipment and resource management

## Special Scene Considerations
Different scenes require tailored approaches:
- **Outdoor Scenes**: Weather protection and environmental factors
- **Vehicle Scenes**: Mobility and multiple transfer surfaces
- **Water Scenes**: Buoyancy and preservation challenges
- **Fire Scenes**: Structural safety and evidence alteration`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the first step in professional scene management?",
          options: ["Evidence collection", "Rapid scene assessment", "Photography", "Team assembly"],
          correctAnswer: 1,
          explanation: "Rapid yet thorough assessment determines all subsequent actions."
        },
        {
          id: 2,
          question: "How many security zones should be established?",
          options: ["One zone", "Two zones", "Three zones", "Four zones"],
          correctAnswer: 2,
          explanation: "Three concentric zones: inner core, controlled access, and perimeter."
        },
        {
          id: 3,
          question: "What format should digital photographs use?",
          options: ["JPEG", "PNG", "RAW", "GIF"],
          correctAnswer: 2,
          explanation: "RAW format preserves maximum image data for analysis."
        },
        {
          id: 4,
          question: "What follows the preliminary walkthrough?",
          options: ["Evidence collection", "Overall documentation", "Team dismissal", "Scene release"],
          correctAnswer: 1,
          explanation: "Overall documentation occurs after initial walkthrough."
        },
        {
          id: 5,
          question: "Who has overall scene responsibility?",
          options: ["Evidence Recorder", "Scene Commander", "Photographer", "Logistics Officer"],
          correctAnswer: 1,
          explanation: "Scene Commander coordinates all activities and has final authority."
        },
        {
          id: 6,
          question: "What system provides precise electronic measurements?",
          options: ["GPS", "Total Station", "Laser Pointer", "Measuring Tape"],
          correctAnswer: 1,
          explanation: "Total Station creates precise electronic measurements and mapping."
        },
        {
          id: 7,
          question: "What is the outermost security zone?",
          options: ["Inner Core", "Controlled Access", "Perimeter", "Exclusion"],
          correctAnswer: 2,
          explanation: "Perimeter zone excludes media and public with checkpoints."
        },
        {
          id: 8,
          question: "What role handles equipment management?",
          options: ["Scene Commander", "Logistics Officer", "Evidence Collector", "Sketcher"],
          correctAnswer: 1,
          explanation: "Logistics Officer manages all equipment and resources."
        },
        {
          id: 9,
          question: "What type of video recording captures entire scenes?",
          options: ["Standard video", "360° spherical", "Time-lapse", "Infrared"],
          correctAnswer: 1,
          explanation: "360° spherical video documents complete scene context."
        },
        {
          id: 10,
          question: "What scene type has buoyancy challenges?",
          options: ["Vehicle scenes", "Water scenes", "Fire scenes", "Outdoor scenes"],
          correctAnswer: 1,
          explanation: "Water scenes present unique buoyancy and preservation issues."
        },
        {
          id: 11,
          question: "What should access logs be maintained at?",
          options: ["Scene entrance only", "Each zone transition", "Command post", "Evidence area"],
          correctAnswer: 1,
          explanation: "Access logs at each zone transition track all personnel movement."
        },
        {
          id: 12,
          question: "What determines investigation scope?",
          options: ["Initial assessment", "Final report", "Evidence count", "Team size"],
          correctAnswer: 0,
          explanation: "Initial assessment determines scope and resource needs."
        },
        {
          id: 13,
          question: "What follows evidence marking?",
          options: ["Scene release", "Detailed documentation", "Collection", "Preliminary walkthrough"],
          correctAnswer: 1,
          explanation: "Detailed documentation occurs after evidence is recognized and marked."
        },
        {
          id: 14,
          question: "What role creates scene diagrams?",
          options: ["Photographer", "Sketcher", "Evidence Recorder", "Scene Commander"],
          correctAnswer: 1,
          explanation: "Sketcher creates accurate scene diagrams and measurements."
        },
        {
          id: 15,
          question: "What requires weather protection considerations?",
          options: ["Indoor scenes", "Outdoor scenes", "Vehicle scenes", "All scenes"],
          correctAnswer: 1,
          explanation: "Outdoor scenes require weather protection for evidence and personnel."
        },
        {
          id: 16,
          question: "What tracks evidence in real-time?",
          options: ["Paper logs", "Digital chain of custody", "Memory", "Team meetings"],
          correctAnswer: 1,
          explanation: "Digital chain of custody systems provide real-time tracking."
        },
        {
          id: 17,
          question: "What is the immediate crime scene area called?",
          options: ["Perimeter Zone", "Controlled Access Zone", "Inner Core Zone", "Exclusion Zone"],
          correctAnswer: 2,
          explanation: "Inner Core Zone contains the immediate crime scene."
        },
        {
          id: 18,
          question: "What ensures documentation consistency?",
          options: ["Individual styles", "Standardized forms", "Memory", "Photographs only"],
          correctAnswer: 1,
          explanation: "Standardized forms ensure consistent documentation across teams."
        },
        {
          id: 19,
          question: "What type of scene has structural safety concerns?",
          options: ["Water scenes", "Fire scenes", "Vehicle scenes", "Office scenes"],
          correctAnswer: 1,
          explanation: "Fire scenes require structural safety assessments first."
        },
        {
          id: 20,
          question: "How many main roles were described in team coordination?",
          options: ["Four", "Five", "Six", "Seven"],
          correctAnswer: 2,
          explanation: "Six roles: Commander, Recorder, Photographer, Collector, Sketcher, Logistics."
        }
      ]
    },
    {
      id: 2,
      title: "Specialized Evidence Collection Techniques",
      content: `# Advanced Evidence Collection

## Biological Evidence Protocols
Biological evidence requires meticulous handling to prevent degradation:
- **Blood Evidence**: Use sterile swabs moistened with distilled water for dried stains
- **Saliva Evidence**: Collect items whole when possible; swab with double-tip technique
- **Semen Evidence**: Alternate light source examination before collection
- **Tissue Samples**: Surgical instruments for collection; immediate preservation

## Trace Evidence Enhancement Methods
Advanced techniques for difficult-to-collect evidence:
- **Electrostatic Lifting**: For footwear and tire impressions on carpets
- **Gelatin Lifters**: For delicate impressions on uneven surfaces
- **Silicone Casting**: For three-dimensional impressions in soil or snow
- **Adhesive Lifters**: Sequential lifting for layered trace evidence

## Digital Evidence Collection
Electronic evidence requires specialized protocols:
- **Device Isolation**: Faraday bags for wireless devices
- **Write Blockers**: Hardware preventing data alteration during collection
- **Forensic Imaging**: Bit-for-bit copies of storage media
- **Network Evidence**: Capturing volatile data before disconnection

## Impression Evidence
Detailed collection of patterned evidence:
- **Footwear Impressions**: Photograph with oblique lighting, then cast
- **Tire Impressions**: Document full revolution when possible
- **Toolmarks**: Photograph with scale, then collect tool if present
- **Bite Marks**: Immediate photograph with scale; dental consultation

## Chemical and Arson Evidence
Special handling for hazardous materials:
- **Accelerant Detection**: Use hydrocarbon detectors during scene examination
- **Collection Containers**: Nylon evidence bags for volatile compounds
- **Soil Sampling**: Stratified collection for chemical analysis
- **Debris Collection**: Layered recovery from fire scenes

## Entomological Evidence
Insect evidence for postmortem interval estimation:
- **Live Collection**: Various life stages from different body areas
- **Preservation Methods**: Different solutions for larvae vs. adults
- **Control Samples**: Environmental insects from surrounding area
- **Temperature Recording**: Ambient and body temperature documentation

## Underwater Evidence Collection
Specialized techniques for aquatic environments:
- **Underwater Photography**: Scale placement and visibility considerations
- **Buoyancy Control**: Evidence recovery without disturbance
- **Containment Methods**: Underwater evidence bags
- **Current Compensation**: Strategies for moving water environments`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What should moisten swabs for dried blood stains?",
          options: ["Tap water", "Saline solution", "Distilled water", "Alcohol"],
          correctAnswer: 2,
          explanation: "Distilled water prevents contamination from minerals."
        },
        {
          id: 2,
          question: "What examines semen evidence before collection?",
          options: ["Microscope", "Alternate light source", "Chemical test", "Visual inspection"],
          correctAnswer: 1,
          explanation: "Alternate light sources enhance semen detection."
        },
        {
          id: 3,
          question: "What lifts footwear impressions from carpets?",
          options: ["Tape", "Electrostatic lifter", "Gelatin lifter", "Silicone"],
          correctAnswer: 1,
          explanation: "Electrostatic lifters work well on carpeted surfaces."
        },
        {
          id: 4,
          question: "What isolates wireless devices?",
          options: ["Plastic bags", "Faraday bags", "Paper bags", "Metal boxes"],
          correctAnswer: 1,
          explanation: "Faraday bags block wireless signals during collection."
        },
        {
          id: 5,
          question: "What prevents data alteration during digital collection?",
          options: ["Fast copying", "Write blockers", "Multiple copies", "Cloud backup"],
          correctAnswer: 1,
          explanation: "Write blockers prevent writing to original media."
        },
        {
          id: 6,
          question: "What lighting is best for footwear impressions?",
          options: ["Direct flash", "Oblique lighting", "Overhead lighting", "No lighting"],
          correctAnswer: 1,
          explanation: "Oblique lighting enhances impression detail visibility."
        },
        {
          id: 7,
          question: "What detects accelerants at fire scenes?",
          options: ["Visual inspection", "Hydrocarbon detectors", "Sniffer dogs", "Chemical tests"],
          correctAnswer: 1,
          explanation: "Hydrocarbon detectors identify potential accelerants."
        },
        {
          id: 8,
          question: "What bags hold volatile compounds?",
          options: ["Paper bags", "Plastic bags", "Nylon bags", "Glass jars"],
          correctAnswer: 2,
          explanation: "Nylon bags contain volatile compounds effectively."
        },
        {
          id: 9,
          question: "What evidence helps estimate postmortem interval?",
          options: ["Digital evidence", "Entomological evidence", "Toolmarks", "Footwear impressions"],
          correctAnswer: 1,
          explanation: "Insect evidence helps estimate time since death."
        },
        {
          id: 10,
          question: "What collects impressions in snow?",
          options: ["Tape lifting", "Silicone casting", "Electrostatic lifting", "Photography only"],
          correctAnswer: 1,
          explanation: "Silicone casting works well for snow impressions."
        },
        {
          id: 11,
          question: "What technique uses double-tip swabs?",
          options: ["Blood collection", "Saliva collection", "Tissue collection", "All biological"],
          correctAnswer: 1,
          explanation: "Double-tip technique ensures sufficient saliva collection."
        },
        {
          id: 12,
          question: "What makes bit-for-bit media copies?",
          options: ["Standard copy", "Forensic imaging", "Backup software", "Manual copying"],
          correctAnswer: 1,
          explanation: "Forensic imaging creates exact duplicates of storage media."
        },
        {
          id: 13,
          question: "What should be captured before disconnecting networks?",
          options: ["Photographs", "Volatile data", "Physical evidence", "Witness statements"],
          correctAnswer: 1,
          explanation: "Volatile network data disappears upon disconnection."
        },
        {
          id: 14,
          question: "What collects delicate impressions on uneven surfaces?",
          options: ["Electrostatic lifters", "Gelatin lifters", "Silicone casting", "Tape lifting"],
          correctAnswer: 1,
          explanation: "Gelatin lifters work on uneven or delicate surfaces."
        },
        {
          id: 15,
          question: "What sampling collects different soil layers?",
          options: ["Random sampling", "Stratified collection", "Surface only", "Deep core"],
          correctAnswer: 1,
          explanation: "Stratified collection samples different soil layers separately."
        },
        {
          id: 16,
          question: "What preserves different insect life stages?",
          options: ["Same solution", "Different solutions", "Freezing only", "Drying"],
          correctAnswer: 1,
          explanation: "Different preservation methods for larvae vs. adults."
        },
        {
          id: 17,
          question: "What controls buoyancy in water collection?",
          options: ["Weight belts", "Evidence bags", "Collection tools", "All equipment"],
          correctAnswer: 0,
          explanation: "Buoyancy control prevents evidence disturbance."
        },
        {
          id: 18,
          question: "What uses sequential lifting?",
          options: ["Single evidence", "Layered trace evidence", "Biological evidence", "Digital evidence"],
          correctAnswer: 1,
          explanation: "Sequential lifting collects layered trace evidence systematically."
        },
        {
          id: 19,
          question: "What requires dental consultation?",
          options: ["Toolmarks", "Bite marks", "Footwear", "Tire impressions"],
          correctAnswer: 1,
          explanation: "Bite mark analysis requires dental expertise."
        },
        {
          id: 20,
          question: "How many biological evidence types were discussed?",
          options: ["Two", "Three", "Four", "Five"],
          correctAnswer: 2,
          explanation: "Four types: blood, saliva, semen, and tissue."
        }
      ]
    },
    {
      id: 3,
      title: "Crime Scene Reconstruction Principles",
      content: `# Scientific Scene Reconstruction

## Reconstruction Methodology
Crime scene reconstruction applies scientific principles to determine event sequences:
1. **Data Collection**: All available evidence and information
2. **Conjecture Formulation**: Preliminary sequence hypotheses
3. **Testing**: Scientific validation of hypotheses
4. **Theory Development**: Most plausible sequence explanation
5. **Presentation**: Clear communication of findings

## Bloodstain Pattern Analysis
Understanding blood dynamics for reconstruction:
- **Impact Spatter**: Force-related patterns indicating violence type
- **Transfer Patterns**: Contact transfers showing movement
- **Flow Patterns**: Gravity effects indicating position changes
- **Projection Patterns**: Arterial damage indicating injury location
- **Void Patterns**: Absence indicating intervening objects

## Trajectory Analysis
Determining paths of bullets, weapons, or projectiles:
- **Laser Trajectory**: Visible line-of-sight determination
- **String Method**: Physical reconstruction of paths
- **Mathematical Calculation**: Angle and distance computations
- **Software Simulation**: Computer-based trajectory modeling

## Shooting Incident Reconstruction
Comprehensive analysis of firearm incidents:
- **Cartridge Case Analysis**: Ejection patterns and positions
- **Bullet Path Determination**: Through materials and final resting places
- **Shooter Position**: Based on evidence and witness statements
- **Sequence Determination**: Multiple shot sequencing

## Physical Fit and Fracture Matching
Matching broken or separated items:
- **Glass Fractures**: Stress marks indicating force direction
- **Paint Layers**: Cross-section matching of multiple layers
- **Tape Ends**: Manufacturing characteristics matching
- **Broken Tools**: Fracture surface comparisons

## Digital Reconstruction
Using technology to recreate scenes:
- **3D Laser Scanning**: Complete scene capture for analysis
- **Photogrammetry**: Measurements from photographs
- **Virtual Reality**: Immersive scene examination
- **Animation**: Event sequence visualization

## Reconstruction Limitations
Understanding what reconstruction cannot determine:
- **Exact Timing**: Specific minute-by-minute sequences
- **Thought Processes**: Intentions or motivations
- **Unsupported Conclusions**: Beyond available evidence
- **Absolute Certainty**: Always some degree of probability

## Reconstruction Report Writing
Documenting reconstruction findings:
- **Clear Methodology**: Step-by-step process description
- **Evidence Basis**: Direct links to physical evidence
- **Alternative Explanations**: Consideration of other possibilities
- **Confidence Levels**: Stating certainty of conclusions`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the first step in reconstruction methodology?",
          options: ["Theory development", "Data collection", "Conjecture formulation", "Testing"],
          correctAnswer: 1,
          explanation: "Data collection gathers all available evidence first."
        },
        {
          id: 2,
          question: "What patterns indicate force type?",
          options: ["Flow patterns", "Impact spatter", "Transfer patterns", "Void patterns"],
          correctAnswer: 1,
          explanation: "Impact spatter patterns indicate force characteristics."
        },
        {
          id: 3,
          question: "What method uses physical strings for trajectories?",
          options: ["Laser method", "String method", "Mathematical method", "Software method"],
          correctAnswer: 1,
          explanation: "String method physically reconstructs trajectories."
        },
        {
          id: 4,
          question: "What indicates ejection patterns?",
          options: ["Bullet paths", "Cartridge cases", "Bloodstains", "Footwear"],
          correctAnswer: 1,
          explanation: "Cartridge case positions indicate ejection patterns."
        },
        {
          id: 5,
          question: "What shows force direction in glass?",
          options: ["Color", "Thickness", "Stress marks", "Transparency"],
          correctAnswer: 2,
          explanation: "Stress marks indicate force direction in broken glass."
        },
        {
          id: 6,
          question: "What captures complete scenes for analysis?",
          options: ["Photography", "3D laser scanning", "Sketches", "Video"],
          correctAnswer: 1,
          explanation: "3D laser scanning creates comprehensive digital models."
        },
        {
          id: 7,
          question: "What CANNOT reconstruction determine?",
          options: ["Event sequences", "Thought processes", "Physical evidence links", "Possible scenarios"],
          correctAnswer: 1,
          explanation: "Reconstruction cannot determine thoughts or motivations."
        },
        {
          id: 8,
          question: "What patterns show gravity effects?",
          options: ["Impact spatter", "Flow patterns", "Transfer patterns", "Projection patterns"],
          correctAnswer: 1,
          explanation: "Flow patterns show blood movement due to gravity."
        },
        {
          id: 9,
          question: "What computes angles mathematically?",
          options: ["Visual estimation", "Mathematical calculation", "Software simulation", "String method"],
          correctAnswer: 1,
          explanation: "Mathematical calculations determine precise angles."
        },
        {
          id: 10,
          question: "What indicates shooter position?",
          options: ["Only witness statements", "Evidence and statements", "Only evidence", "Guesswork"],
          correctAnswer: 1,
          explanation: "Combination of evidence and statements indicates position."
        },
        {
          id: 11,
          question: "What matches paint cross-sections?",
          options: ["Color only", "Layer sequence", "Chemical composition", "All characteristics"],
          correctAnswer: 3,
          explanation: "All paint characteristics help match evidence."
        },
        {
          id: 12,
          question: "What creates measurements from photos?",
          options: ["Photogrammetry", "Laser scanning", "Manual measurement", "Estimation"],
          correctAnswer: 0,
          explanation: "Photogrammetry extracts measurements from photographs."
        },
        {
          id: 13,
          question: "What should reports include about conclusions?",
          options: ["Absolute certainty", "Confidence levels", "No qualifications", "Definite statements"],
          correctAnswer: 1,
          explanation: "Reports should state confidence levels for conclusions."
        },
        {
          id: 14,
          question: "What patterns show absent areas?",
          options: ["Impact patterns", "Void patterns", "Transfer patterns", "Flow patterns"],
          correctAnswer: 1,
          explanation: "Void patterns show where evidence is absent."
        },
        {
          id: 15,
          question: "What simulates trajectories digitally?",
          options: ["String method", "Software simulation", "Laser method", "Mathematical method"],
          correctAnswer: 1,
          explanation: "Software simulations model trajectory possibilities."
        },
        {
          id: 16,
          question: "What indicates arterial injury?",
          options: ["Impact spatter", "Projection patterns", "Transfer patterns", "Flow patterns"],
          correctAnswer: 1,
          explanation: "Projection patterns suggest arterial damage."
        },
        {
          id: 17,
          question: "What matches tape ends?",
          options: ["Color", "Manufacturing characteristics", "Length", "Stickiness"],
          correctAnswer: 1,
          explanation: "Manufacturing characteristics help match tape ends."
        },
        {
          id: 18,
          question: "What considers other possibilities?",
          options: ["Only one theory", "Alternative explanations", "Definite conclusions", "Initial hypotheses"],
          correctAnswer: 1,
          explanation: "Good reports consider alternative explanations."
        },
        {
          id: 19,
          question: "How many reconstruction steps were described?",
          options: ["Three", "Four", "Five", "Six"],
          correctAnswer: 2,
          explanation: "Five steps: collection, conjecture, testing, theory, presentation."
        },
        {
          id: 20,
          question: "What cannot reconstruction provide?",
          options: ["Probable sequences", "Absolute certainty", "Evidence links", "Scientific validation"],
          correctAnswer: 1,
          explanation: "Reconstruction provides probability, not absolute certainty."
        }
      ]
    },
    {
      id: 4,
      title: "Mass Scene & Disaster Management",
      content: `# Large Scale Scene Management

## Mass Scene Classification
Categorizing scenes by scale and complexity:
- **Level 1**: Single scene, limited evidence, small team
- **Level 2**: Multiple connected scenes, moderate evidence
- **Level 3**: Mass disaster, multiple agencies, extensive evidence
- **Level 4**: Catastrophic event, national resources required

## Incident Command System (ICS) Implementation
Structured management for complex scenes:
- **Command Staff**: Incident Commander, Safety Officer, Public Information Officer
- **Operations Section**: Directs all tactical activities
- **Planning Section**: Collects and analyzes information
- **Logistics Section**: Provides resources and support
- **Finance Section**: Tracks costs and procurement

## Triage and Prioritization
Systematic evidence and victim processing:
- **Primary Survey**: Rapid assessment of entire scene
- **Secondary Survey**: Detailed examination of identified areas
- **Evidence Triage**: Prioritizing based on degradation risk
- **Resource Allocation**: Matching resources to priority needs

## Inter-Agency Coordination
Managing multiple responding agencies:
- **Unified Command**: Shared leadership among agencies
- **Communication Protocols**: Standardized terminology and channels
- **Resource Sharing**: Mutual aid agreements and sharing
- **Jurisdictional Clarity**: Clear responsibility assignments

## Mass Fatality Management
Systematic handling of multiple casualties:
- **Temporary Morgue Establishment**: On-site or nearby facility
- **Victim Identification**: Multiple method verification
- **Family Assistance Center**: Support for victims' families
- **Documentation Systems**: Tracking all victims and evidence

## Environmental and Safety Considerations
Protecting personnel and evidence:
- **Hazardous Materials**: Identification and containment
- **Structural Safety**: Engineering assessments for stability
- **Weather Protection**: Temporary shelters and covers
- **Biological Hazards**: Protection from health risks

## Evidence Management at Scale
Systems for handling large evidence volumes:
- **Centralized Evidence Control**: Single point of receipt and storage
- **Barcode Tracking**: Automated evidence tracking systems
- **Staging Areas**: Designated evidence processing zones
- **Quality Control**: Systematic checks for consistency

## Long-Term Scene Management
Extended investigation considerations:
- **Scene Security**: 24/7 protection for prolonged periods
- **Evidence Preservation**: Long-term storage considerations
- **Team Rotation**: Managing investigator fatigue
- **Documentation Continuity**: Consistent recording over time`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What level is a catastrophic event requiring national resources?",
          options: ["Level 1", "Level 2", "Level 3", "Level 4"],
          correctAnswer: 3,
          explanation: "Level 4 scenes require national-level resources."
        },
        {
          id: 2,
          question: "Who directs tactical activities in ICS?",
          options: ["Command Staff", "Operations Section", "Planning Section", "Logistics Section"],
          correctAnswer: 1,
          explanation: "Operations Section directs all tactical activities."
        },
        {
          id: 3,
          question: "What is the first scene assessment?",
          options: ["Secondary survey", "Primary survey", "Detailed examination", "Resource allocation"],
          correctAnswer: 1,
          explanation: "Primary survey provides rapid initial assessment."
        },
        {
          id: 4,
          question: "What leadership involves multiple agencies?",
          options: ["Single command", "Unified command", "Rotating command", "No command"],
          correctAnswer: 1,
          explanation: "Unified command shares leadership among agencies."
        },
        {
          id: 5,
          question: "What establishes on-site facilities for casualties?",
          options: ["Family centers", "Temporary morgues", "Command posts", "Evidence storage"],
          correctAnswer: 1,
          explanation: "Temporary morgues handle mass fatality situations."
        },
        {
          id: 6,
          question: "What requires engineering assessments?",
          options: ["Weather protection", "Structural safety", "Evidence collection", "Communication"],
          correctAnswer: 1,
          explanation: "Structural safety requires professional engineering assessment."
        },
        {
          id: 7,
          question: "What tracks evidence automatically?",
          options: ["Paper logs", "Memory", "Barcode systems", "Whiteboards"],
          correctAnswer: 2,
          explanation: "Barcode systems automate evidence tracking."
        },
        {
          id: 8,
          question: "What manages investigator fatigue?",
          options: ["Long hours", "Team rotation", "Ignoring fatigue", "Caffeine only"],
          correctAnswer: 1,
          explanation: "Team rotation prevents fatigue-related errors."
        },
        {
          id: 9,
          question: "How many ICS sections are there?",
          options: ["Three", "Four", "Five", "Six"],
          correctAnswer: 2,
          explanation: "Five sections: Command, Operations, Planning, Logistics, Finance."
        },
        {
          id: 10,
          question: "What prioritizes evidence based on risk?",
          options: ["Random collection", "Evidence triage", "Complete collection", "Fastest collection"],
          correctAnswer: 1,
          explanation: "Evidence triage prioritizes based on degradation risk."
        },
        {
          id: 11,
          question: "What provides resources and support?",
          options: ["Operations", "Logistics", "Planning", "Finance"],
          correctAnswer: 1,
          explanation: "Logistics Section provides all necessary resources."
        },
        {
          id: 12,
          question: "What supports victims' families?",
          options: ["Command post", "Family assistance center", "Morgue", "Evidence area"],
          correctAnswer: 1,
          explanation: "Family assistance centers provide support services."
        },
        {
          id: 13,
          question: "What protects from health risks?",
          options: ["Weather gear", "Biological hazard protection", "Communication devices", "Evidence bags"],
          correctAnswer: 1,
          explanation: "Biological hazard protection prevents health risks."
        },
        {
          id: 14,
          question: "What ensures consistent recording over time?",
          options: ["Memory", "Documentation continuity", "Photographs only", "Team meetings"],
          correctAnswer: 1,
          explanation: "Documentation continuity maintains consistency."
        },
        {
          id: 15,
          question: "What analyzes information in ICS?",
          options: ["Operations", "Planning", "Logistics", "Finance"],
          correctAnswer: 1,
          explanation: "Planning Section collects and analyzes information."
        },
        {
          id: 16,
          question: "What is a Level 2 scene?",
          options: ["Single scene", "Multiple connected scenes", "Mass disaster", "Catastrophic event"],
          correctAnswer: 1,
          explanation: "Level 2 involves multiple connected scenes."
        },
        {
          id: 17,
          question: "What assigns clear responsibilities?",
          options: ["Jurisdictional clarity", "Shared responsibility", "No assignment", "Random assignment"],
          correctAnswer: 0,
          explanation: "Jurisdictional clarity prevents confusion."
        },
        {
          id: 18,
          question: "What provides temporary shelters?",
          options: ["Weather protection", "Structural safety", "Evidence covers", "All of these"],
          correctAnswer: 3,
          explanation: "All protect evidence and personnel from elements."
        },
        {
          id: 19,
          question: "How many mass scene levels were described?",
          options: ["Two", "Three", "Four", "Five"],
          correctAnswer: 2,
          explanation: "Four levels based on scale and complexity."
        },
        {
          id: 20,
          question: "What tracks costs in ICS?",
          options: ["Operations", "Planning", "Finance", "Logistics"],
          correctAnswer: 2,
          explanation: "Finance Section tracks all costs and procurement."
        }
      ]
    },
    {
      id: 5,
      title: "Forensic Photography & Videography",
      content: `# Professional Forensic Imaging

## Equipment Selection and Calibration
Choosing appropriate equipment for forensic documentation:
- **Camera Systems**: DSLR/mirrorless with manual controls
- **Lens Selection**: Macro, wide-angle, and prime lenses
- **Lighting Equipment**: Flash units, continuous lights, alternate light sources
- **Scale Devices**: Forensic scales, color checkers, orientation markers
- **Calibration Procedures**: Regular equipment testing and calibration

## Technical Photography Standards
Adhering to professional standards:
- **Manual Exposure Control**: Consistent exposure settings
- **Focus Stacking**: Multiple focus points for depth of field
- **Bracketing**: Multiple exposures for challenging lighting
- **RAW Format**: Maximum data preservation
- **Metadata Preservation**: EXIF data maintenance

## Specialized Photography Techniques
Advanced methods for specific evidence types:
- **Macro Photography**: Extreme close-ups with scale references
- **Oblique Lighting**: Low-angle lighting for texture and impressions
- **Alternate Light Imaging**: UV and IR photography for latent evidence
- **Cross-Polarization**: Reducing glare and enhancing details
- **High Dynamic Range**: Capturing wide exposure ranges

## Videography Documentation
Motion picture documentation standards:
- **Scene Walkthroughs**: Continuous documentation of entire scenes
- **360° Video**: Spherical recording for comprehensive coverage
- **Time-lapse Documentation**: Long-term scene changes
- **Audio Recording**: Synchronized audio documentation
- **Interview Recording**: Victim, witness, and suspect interviews

## Photogrammetry and Measurement
Extracting measurements from images:
- **Scale Placement**: Proper scale orientation and positioning
- **Reference Points**: Multiple known points for accuracy
- **Camera Positioning**: Parallel orientation to subject plane
- **Software Processing**: Photogrammetry software applications
- **Accuracy Verification**: Measurement validation techniques

## Evidence-Specific Protocols
Tailored approaches for different evidence:
- **Bloodstain Photography**: Multiple angles with and without scales
- **Fingerprint Photography**: Scale placement parallel to ridges
- **Footwear Photography**: Oblique lighting with scale in same plane
- **Toolmark Photography**: Multiple angles with scale references
- **Bite Mark Photography**: Scale placement at same depth as injury

## Documentation Management
Organizing and preserving visual evidence:
- **File Naming Conventions**: Consistent, descriptive naming
- **Storage Systems**: Redundant backup systems
- **Cataloging Methods**: Database tracking of all images
- **Chain of Custody**: Tracking visual evidence like physical evidence
- **Presentation Preparation**: Courtroom display preparation

## Courtroom Presentation
Effective use of visual evidence in court:
- **Enlargement Standards**: Appropriate sizes for courtroom viewing
- **Annotation Methods**: Clear labeling without obscuring evidence
- **Sequence Presentation**: Logical progression of images
- **Technical Explanation**: Simplifying complex techniques for juries
- **Original Preservation**: Maintaining original files for verification`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What camera control ensures consistency?",
          options: ["Automatic mode", "Manual exposure", "Scene modes", "Program mode"],
          correctAnswer: 1,
          explanation: "Manual exposure control ensures consistent results."
        },
        {
          id: 2,
          question: "What format preserves maximum data?",
          options: ["JPEG", "RAW", "PNG", "TIFF"],
          correctAnswer: 1,
          explanation: "RAW format preserves all image data for analysis."
        },
        {
          id: 3,
          question: "What lighting enhances texture?",
          options: ["Direct flash", "Oblique lighting", "Overhead lighting", "No lighting"],
          correctAnswer: 1,
          explanation: "Oblique lighting reveals texture and impressions."
        },
        {
          id: 4,
          question: "What records spherical coverage?",
          options: ["Standard video", "360° video", "Time-lapse", "Interview video"],
          correctAnswer: 1,
          explanation: "360° video captures complete spherical documentation."
        },
        {
          id: 5,
          question: "What extracts measurements from photos?",
          options: ["Visual estimation", "Photogrammetry", "Guesswork", "Standard scales"],
          correctAnswer: 1,
          explanation: "Photogrammetry extracts precise measurements."
        },
        {
          id: 6,
          question: "How should scales be placed for fingerprints?",
          options: ["Anywhere", "Parallel to ridges", "Perpendicular", "Not needed"],
          correctAnswer: 1,
          explanation: "Scales should be parallel to fingerprint ridges."
        },
        {
          id: 7,
          question: "What reduces glare in photography?",
          options: ["More light", "Cross-polarization", "No filter", "Different angle"],
          correctAnswer: 1,
          explanation: "Cross-polarization reduces reflections and glare."
        },
        {
          id: 8,
          question: "What captures long-term changes?",
          options: ["Standard video", "Time-lapse", "360° video", "Still photos"],
          correctAnswer: 1,
          explanation: "Time-lapse shows changes over extended periods."
        },
        {
          id: 9,
          question: "What verifies measurement accuracy?",
          options: ["Guesswork", "Accuracy verification", "Assumption", "One measurement"],
          correctAnswer: 1,
          explanation: "Accuracy verification ensures measurement reliability."
        },
        {
          id: 10,
          question: "What should file naming have?",
          options: ["Random names", "Consistent conventions", "Short names", "No system"],
          correctAnswer: 1,
          explanation: "Consistent naming conventions aid organization."
        },
        {
          id: 11,
          question: "What lens is for extreme close-ups?",
          options: ["Wide-angle", "Telephoto", "Macro", "Standard"],
          correctAnswer: 2,
          explanation: "Macro lenses capture extreme close-up details."
        },
        {
          id: 12,
          question: "What creates multiple focus points?",
          options: ["Single shot", "Focus stacking", "Autofocus", "Manual focus"],
          correctAnswer: 1,
          explanation: "Focus stacking combines multiple focus distances."
        },
        {
          id: 13,
          question: "What photography uses UV light?",
          options: ["Standard", "Alternate light", "Oblique", "Cross-polarized"],
          correctAnswer: 1,
          explanation: "Alternate light imaging uses UV and IR spectra."
        },
        {
          id: 14,
          question: "What requires parallel camera orientation?",
          options: ["All photography", "Photogrammetry", "Video only", "Macro only"],
          correctAnswer: 1,
          explanation: "Photogrammetry requires parallel camera placement."
        },
        {
          id: 15,
          question: "What should be preserved for courtroom verification?",
          options: ["Copies only", "Original files", "Printed photos", "Descriptions"],
          correctAnswer: 1,
          explanation: "Original files must be preserved for verification."
        },
        {
          id: 16,
          question: "What captures wide exposure ranges?",
          options: ["Single exposure", "HDR photography", "Standard photo", "Video"],
          correctAnswer: 1,
          explanation: "HDR captures details in bright and dark areas."
        },
        {
          id: 17,
          question: "What tracks visual evidence?",
          options: ["Memory", "Chain of custody", "No tracking", "Informal notes"],
          correctAnswer: 1,
          explanation: "Visual evidence needs chain of custody tracking."
        },
        {
          id: 18,
          question: "What should courtroom enlargements consider?",
          options: ["Artistic value", "Appropriate viewing size", "Cost", "Speed"],
          correctAnswer: 1,
          explanation: "Enlargements should be appropriately sized for viewing."
        },
        {
          id: 19,
          question: "How many specialized techniques were discussed?",
          options: ["Three", "Four", "Five", "Six"],
          correctAnswer: 2,
          explanation: "Five techniques: macro, oblique, alternate light, cross-polarization, HDR."
        },
        {
          id: 20,
          question: "What maintains EXIF data?",
          options: ["Metadata preservation", "File copying", "Printing", "Editing"],
          correctAnswer: 0,
          explanation: "Metadata preservation maintains EXIF information."
        }
      ]
    },
    {
      id: 6,
      title: "Expert Testimony & Legal Procedures",
      content: `# Professional Courtroom Procedures

## Expert Witness Qualification
Establishing professional credibility:
- **Education Documentation**: Degrees, certifications, and training
- **Experience Verification**: Years and types of casework
- **Publication Record**: Professional articles and presentations
- **Professional Affiliations**: Membership in forensic organizations
- **Previous Testimony**: History of qualified expert testimony

## Testimony Preparation
Comprehensive preparation for courtroom presentation:
- **Case Review**: Complete re-examination of all materials
- **Evidence Re-familiarization**: Physical re-examination of key evidence
- **Report Review**: Detailed review of all written reports
- **Anticipated Questions**: Preparation for likely cross-examination
- **Visual Aids**: Preparation of exhibits and demonstrations

## Direct Examination Strategies
Effective presentation of technical information:
- **Clear Explanations**: Simplifying complex concepts for juries
- **Logical Progression**: Building understanding step-by-step
- **Visual Support**: Using exhibits to enhance understanding
- **Confidence Display**: Professional demeanor and delivery
- **Credibility Establishment**: Demonstrating expertise without arrogance

## Cross-Examination Defense
Handling challenging questioning:
- **Listen Completely**: Hearing entire question before answering
- **Pause Before Answering**: Brief consideration before responding
- **Answer Only Questions**: Not volunteering extra information
- **Clarify When Needed**: Asking for clarification of unclear questions
- **Maintain Professionalism**: Staying calm and respectful

## Common Challenge Areas
Anticipating difficult questioning topics:
- **Methodology Challenges**: Questions about scientific validity
- **Error Rate Discussions**: Statistical probabilities and limitations
- **Alternative Explanations**: Other possible interpretations
- **Bias Allegations**: Questions about impartiality
- **Certification Issues**: Qualifications and continuing education

## Evidence Presentation Standards
Courtroom display of forensic evidence:
- **Proper Scaling**: Appropriate sizes for jury viewing
- **Clear Labeling**: Unambiguous identification of exhibits
- **Progressive Revelation**: Building understanding gradually
- **Technical Translation**: Converting technical terms to plain language
- **Original Preservation**: Maintaining evidence integrity

## Ethical Considerations
Maintaining professional standards:
- **Truthfulness**: Complete and accurate testimony
- **Impartiality**: Objective presentation of findings
- **Limitation Acknowledgment**: Honest discussion of limitations
- **Confidentiality**: Protecting sensitive information
- **Professional Development**: Ongoing education and improvement

## Post-Testimony Procedures
After-court responsibilities:
- **Notes Review**: Assessing testimony effectiveness
- **Report Updates**: Incorporating testimony insights
- **Professional Consultation**: Discussing challenging questions
- **Continuing Education**: Addressing knowledge gaps identified
- **Case Closure**: Final documentation and evidence return

## Legal System Navigation
Understanding courtroom procedures:
- **Rules of Evidence**: Admissibility standards and procedures
- **Courtroom Protocol**: Proper behavior and terminology
- **Attorney Interaction**: Professional relationships with counsel
- **Jury Considerations**: Effective communication with jurors
- **Record Maintenance**: Complete documentation of all proceedings`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What establishes professional credibility?",
          options: ["Loud voice", "Expert witness qualification", "Fancy suit", "Complex language"],
          correctAnswer: 1,
          explanation: "Proper qualification establishes credibility."
        },
        {
          id: 2,
          question: "What should be done before testimony?",
          options: ["Case review", "Memorize speeches", "Avoid preparation", "Watch legal dramas"],
          correctAnswer: 0,
          explanation: "Complete case review is essential preparation."
        },
        {
          id: 3,
          question: "What should explanations be for juries?",
          options: ["Complex", "Clear and simple", "Technical", "Lengthy"],
          correctAnswer: 1,
          explanation: "Clear explanations help juries understand."
        },
        {
          id: 4,
          question: "What should you do before answering questions?",
          options: ["Answer immediately", "Pause briefly", "Ask another question", "Look away"],
          correctAnswer: 1,
          explanation: "Brief pause allows proper consideration."
        },
        {
          id: 5,
          question: "What is a common challenge area?",
          options: ["Favorite color", "Methodology challenges", "Personal life", "Hobbies"],
          correctAnswer: 1,
          explanation: "Methodology validity is commonly challenged."
        },
        {
          id: 6,
          question: "What should exhibits have?",
          options: ["Complex labels", "Clear labeling", "No labels", "Small print"],
          correctAnswer: 1,
          explanation: "Clear labeling prevents confusion."
        },
        {
          id: 7,
          question: "What ethical standard is most important?",
          options: ["Speed", "Truthfulness", "Complexity", "Length"],
          correctAnswer: 1,
          explanation: "Truthfulness is the foundation of testimony."
        },
        {
          id: 8,
          question: "What should happen after testimony?",
          options: ["Forget case", "Notes review", "Celebrate", "Avoid thinking"],
          correctAnswer: 1,
          explanation: "Review notes to improve future testimony."
        },
        {
          id: 9,
          question: "What must be understood about evidence?",
          options: ["Rules of evidence", "Popular opinions", "Media reports", "Gossip"],
          correctAnswer: 0,
          explanation: "Rules of evidence govern admissibility."
        },
        {
          id: 10,
          question: "What demonstrates expertise properly?",
          options: ["Arrogance", "Credibility establishment", "Complex terms", "Speed talking"],
          correctAnswer: 1,
          explanation: "Credibility establishment shows expertise professionally."
        },
        {
          id: 11,
          question: "What should be re-examined before court?",
          options: ["Everything", "Key evidence", "Nothing", "Only reports"],
          correctAnswer: 1,
          explanation: "Key evidence should be physically re-examined."
        },
        {
          id: 12,
          question: "What should answers do?",
          options: ["Volunteer information", "Answer only questions", "Change subject", "Tell stories"],
          correctAnswer: 1,
          explanation: "Answer only the question asked."
        },
        {
          id: 13,
          question: "What discusses statistical limitations?",
          options: ["Error rate discussions", "Personal opinions", "Guesses", "Assumptions"],
          correctAnswer: 0,
          explanation: "Error rates address statistical probabilities."
        },
        {
          id: 14,
          question: "What helps jury understanding?",
          options: ["Technical translation", "Jargon", "Latin terms", "Acronyms"],
          correctAnswer: 0,
          explanation: "Translate technical terms to plain language."
        },
        {
          id: 15,
          question: "What maintains evidence integrity?",
          options: ["Original preservation", "Copies only", "Memory", "Photos only"],
          correctAnswer: 0,
          explanation: "Original evidence must be preserved."
        },
        {
          id: 16,
          question: "What should be discussed honestly?",
          options: ["Only strengths", "Limitations", "Nothing negative", "Everything positive"],
          correctAnswer: 1,
          explanation: "Honestly discuss limitations of analysis."
        },
        {
          id: 17,
          question: "What addresses knowledge gaps?",
          options: ["Ignoring them", "Continuing education", "Pretending", "Blaming others"],
          correctAnswer: 1,
          explanation: "Continuing education addresses identified gaps."
        },
        {
          id: 18,
          question: "What governs proper courtroom behavior?",
          options: ["Personal preference", "Courtroom protocol", "Mood", "Time of day"],
          correctAnswer: 1,
          explanation: "Courtroom protocol dictates proper behavior."
        },
        {
          id: 19,
          question: "How many preparation areas were discussed?",
          options: ["Three", "Four", "Five", "Six"],
          correctAnswer: 2,
          explanation: "Five areas: case review, evidence, reports, questions, visual aids."
        },
        {
          id: 20,
          question: "What should questioning do when unclear?",
          options: ["Guess", "Clarify", "Ignore", "Make up answer"],
          correctAnswer: 1,
          explanation: "Ask for clarification of unclear questions."
        }
      ]
    }
  ],
  
  // FINAL EXAM - 40 QUESTIONS FROM ALL MODULES
  finalExam: {
    title: "Crime Scene Investigation Diploma Final Examination",
    description: "Comprehensive exam covering all 6 advanced modules. Score 75% or higher to earn your diploma.",
    passingScore: 75,
    questions: [
      {
        id: 1,
        question: "How many security zones should be established?",
        options: ["One", "Two", "Three", "Four"],
        correctAnswer: 2,
        explanation: "Three concentric zones provide layered security.",
        module: 1
      },
      {
        id: 2,
        question: "What moistens swabs for dried blood?",
        options: ["Tap water", "Distilled water", "Saline", "Alcohol"],
        correctAnswer: 1,
        explanation: "Distilled water prevents contamination.",
        module: 2
      },
      {
        id: 3,
        question: "What is the first reconstruction step?",
        options: ["Theory development", "Data collection", "Testing", "Presentation"],
        correctAnswer: 1,
        explanation: "Data collection gathers all evidence first.",
        module: 3
      },
      {
        id: 4,
        question: "What level requires national resources?",
        options: ["Level 1", "Level 2", "Level 3", "Level 4"],
        correctAnswer: 3,
        explanation: "Level 4 scenes require national resources.",
        module: 4
      },
      {
        id: 5,
        question: "What format preserves maximum image data?",
        options: ["JPEG", "RAW", "PNG", "GIF"],
        correctAnswer: 1,
        explanation: "RAW format preserves all image data.",
        module: 5
      },
      {
        id: 6,
        question: "What establishes credibility?",
        options: ["Loud voice", "Expert qualification", "Fancy suit", "Complex terms"],
        correctAnswer: 1,
        explanation: "Proper qualification establishes credibility.",
        module: 6
      },
      {
        id: 7,
        question: "What role has overall scene responsibility?",
        options: ["Photographer", "Scene Commander", "Evidence Collector", "Logistics"],
        correctAnswer: 1,
        explanation: "Scene Commander coordinates all activities.",
        module: 1
      },
      {
        id: 8,
        question: "What lifts impressions from carpets?",
        options: ["Tape", "Electrostatic lifter", "Gelatin", "Silicone"],
        correctAnswer: 1,
        explanation: "Electrostatic lifters work on carpets.",
        module: 2
      },
      {
        id: 9,
        question: "What patterns indicate force type?",
        options: ["Flow patterns", "Impact spatter", "Transfer", "Void"],
        correctAnswer: 1,
        explanation: "Impact spatter indicates force characteristics.",
        module: 3
      },
      {
        id: 10,
        question: "What directs tactical activities?",
        options: ["Command Staff", "Operations", "Planning", "Logistics"],
        correctAnswer: 1,
        explanation: "Operations Section directs tactical activities.",
        module: 4
      },
      {
        id: 11,
        question: "What lighting reveals texture?",
        options: ["Direct flash", "Oblique lighting", "Overhead", "None"],
        correctAnswer: 1,
        explanation: "Oblique lighting enhances texture visibility.",
        module: 5
      },
      {
        id: 12,
        question: "What should be done before testimony?",
        options: ["Case review", "Memorize", "Avoid prep", "Watch TV"],
        correctAnswer: 0,
        explanation: "Complete case review is essential.",
        module: 6
      },
      {
        id: 13,
        question: "What provides precise measurements?",
        options: ["GPS", "Total Station", "Tape measure", "Laser pointer"],
        correctAnswer: 1,
        explanation: "Total Station provides electronic measurements.",
        module: 1
      },
      {
        id: 14,
        question: "What isolates wireless devices?",
        options: ["Plastic bags", "Faraday bags", "Paper bags", "Boxes"],
        correctAnswer: 1,
        explanation: "Faraday bags block wireless signals.",
        module: 2
      },
      {
        id: 15,
        question: "What physically reconstructs trajectories?",
        options: ["Laser method", "String method", "Math method", "Software"],
        correctAnswer: 1,
        explanation: "String method physically reconstructs paths.",
        module: 3
      },
      {
        id: 16,
        question: "What is rapid initial assessment?",
        options: ["Secondary survey", "Primary survey", "Detailed exam", "Resource alloc"],
        correctAnswer: 1,
        explanation: "Primary survey provides rapid assessment.",
        module: 4
      },
      {
        id: 17,
        question: "What records spherical coverage?",
        options: ["Standard video", "360° video", "Time-lapse", "Photos"],
        correctAnswer: 1,
        explanation: "360° video captures complete spherical view.",
        module: 5
      },
      {
        id: 18,
        question: "What should explanations be for juries?",
        options: ["Complex", "Clear and simple", "Technical", "Long"],
        correctAnswer: 1,
        explanation: "Clear explanations aid jury understanding.",
        module: 6
      },
      {
        id: 19,
        question: "What zone contains immediate scene?",
        options: ["Perimeter", "Controlled Access", "Inner Core", "Exclusion"],
        correctAnswer: 2,
        explanation: "Inner Core Zone contains immediate scene.",
        module: 1
      },
      {
        id: 20,
        question: "What prevents data alteration?",
        options: ["Fast copying", "Write blockers", "Multiple copies", "Cloud"],
        correctAnswer: 1,
        explanation: "Write blockers prevent data alteration.",
        module: 2
      },
      {
        id: 21,
        question: "What cannot reconstruction determine?",
        options: ["Event sequences", "Thought processes", "Evidence links", "Scenarios"],
        correctAnswer: 1,
        explanation: "Cannot determine thoughts or motivations.",
        module: 3
      },
      {
        id: 22,
        question: "What involves multiple connected scenes?",
        options: ["Level 1", "Level 2", "Level 3", "Level 4"],
        correctAnswer: 1,
        explanation: "Level 2 involves multiple connected scenes.",
        module: 4
      },
      {
        id: 23,
        question: "What extracts measurements from photos?",
        options: ["Estimation", "Photogrammetry", "Guessing", "Scales"],
        correctAnswer: 1,
        explanation: "Photogrammetry extracts precise measurements.",
        module: 5
      },
      {
        id: 24,
        question: "What should you do before answering?",
        options: ["Answer fast", "Pause briefly", "Ask question", "Look away"],
        correctAnswer: 1,
        explanation: "Brief pause allows proper consideration.",
        module: 6
      },
      {
        id: 25,
        question: "What documents in real-time?",
        options: ["Paper logs", "Digital chain", "Memory", "Meetings"],
        correctAnswer: 1,
        explanation: "Digital chain provides real-time tracking.",
        module: 1
      },
      {
        id: 26,
        question: "What detects accelerants?",
        options: ["Visual", "Hydrocarbon detectors", "Dogs", "Chemical"],
        correctAnswer: 1,
        explanation: "Hydrocarbon detectors identify accelerants.",
        module: 2
      },
      {
        id: 27,
        question: "What shows gravity effects in blood?",
        options: ["Impact", "Flow patterns", "Transfer", "Projection"],
        correctAnswer: 1,
        explanation: "Flow patterns show gravity effects.",
        module: 3
      },
      {
        id: 28,
        question: "What provides resources?",
        options: ["Operations", "Logistics", "Planning", "Finance"],
        correctAnswer: 1,
        explanation: "Logistics Section provides resources.",
        module: 4
      },
      {
        id: 29,
        question: "What reduces glare?",
        options: ["More light", "Cross-polarization", "No filter", "Angle"],
        correctAnswer: 1,
        explanation: "Cross-polarization reduces reflections.",
        module: 5
      },
      {
        id: 30,
        question: "What is commonly challenged?",
        options: ["Color", "Methodology", "Life", "Hobbies"],
        correctAnswer: 1,
        explanation: "Methodology validity is commonly challenged.",
        module: 6
      },
      {
        id: 31,
        question: "What requires weather protection?",
        options: ["Indoor scenes", "Outdoor scenes", "All scenes", "Vehicle scenes"],
        correctAnswer: 1,
        explanation: "Outdoor scenes require weather protection.",
        module: 1
      },
      {
        id: 32,
        question: "What collects delicate impressions?",
        options: ["Electrostatic", "Gelatin lifters", "Silicone", "Tape"],
        correctAnswer: 1,
        explanation: "Gelatin lifters work on delicate surfaces.",
        module: 2
      },
      {
        id: 33,
        question: "What indicates arterial injury?",
        options: ["Impact", "Projection", "Transfer", "Flow"],
        correctAnswer: 1,
        explanation: "Projection patterns suggest arterial damage.",
        module: 3
      },
      {
        id: 34,
        question: "What tracks costs?",
        options: ["Operations", "Planning", "Finance", "Logistics"],
        correctAnswer: 2,
        explanation: "Finance Section tracks costs.",
        module: 4
      },
      {
        id: 35,
        question: "What captures long-term changes?",
        options: ["Standard video", "Time-lapse", "360°", "Photos"],
        correctAnswer: 1,
        explanation: "Time-lapse shows extended changes.",
        module: 5
      },
      {
        id: 36,
        question: "What should exhibits have?",
        options: ["Complex labels", "Clear labeling", "No labels", "Small print"],
        correctAnswer: 1,
        explanation: "Clear labeling prevents confusion.",
        module: 6
      },
      {
        id: 37,
        question: "How many team roles were described?",
        options: ["Four", "Five", "Six", "Seven"],
        correctAnswer: 2,
        explanation: "Six roles for comprehensive team coverage.",
        module: 1
      },
      {
        id: 38,
        question: "What preserves insect evidence?",
        options: ["Same solution", "Different solutions", "Freezing", "Drying"],
        correctAnswer: 1,
        explanation: "Different methods for different life stages.",
        module: 2
      },
      {
        id: 39,
        question: "How many reconstruction steps?",
        options: ["Three", "Four", "Five", "Six"],
        correctAnswer: 2,
        explanation: "Five-step methodology for reconstruction.",
        module: 3
      },
      {
        id: 40,
        question: "What ethical standard is foundational?",
        options: ["Speed", "Truthfulness", "Complexity", "Length"],
        correctAnswer: 1,
        explanation: "Truthfulness is the foundation of testimony.",
        module: 6
      }
    ]
  }
};
