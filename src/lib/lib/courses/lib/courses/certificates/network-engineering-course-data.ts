// Network Engineering (Diploma) - Complete Course Data
// All modules, content, quizzes, and exam in one file

export const networkEngineeringDiplomaCourse = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "network-engineering-diploma",
  title: "Network Engineering (Diploma)",
  description: "Advanced network engineering training covering network design, routing protocols, switching technologies, network security, wireless networking, and network management. Prepares for professional networking roles and certifications.",
  duration: "10 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  icon: "🔧",
  badge: "Diploma",
  category: "Technology & Networking",
  prerequisites: ["computer-networking-certificate"], // Links to Certificate course
  
  // 2. MODULE ARCHITECTURE (6 Advanced Modules)
  modules: [
    // MODULE 1: NETWORK DESIGN AND ARCHITECTURE
    {
      id: 1,
      title: "Advanced Network Design",
      content: `# Professional Network Architecture

## Network Design Fundamentals
Professional network design creates scalable, reliable, and secure network infrastructures that meet organizational requirements while allowing for future growth and technological evolution.

## Design Methodology

**Requirements Analysis**
- Business requirements and objectives
- Technical requirements and constraints
- User needs and application demands
- Budgetary and timeline considerations

**Hierarchical Network Model**
- **Core Layer**: High-speed backbone, traffic aggregation
- **Distribution Layer**: Policy enforcement, routing decisions
- **Access Layer**: User connectivity, network access control
- **Benefits**: Scalability, modularity, easier troubleshooting

**Modular Design Principles**
- Functional separation of network services
- Reusable design patterns
- Independent module testing and deployment
- Simplified network management

## Network Topology Design

**Physical vs Logical Topologies**
- **Physical**: Actual device connections and cabling
- **Logical**: Data flow paths and addressing schemes
- **Mapping**: Relationship between physical and logical

**Resilient Topologies**
- Redundant links and devices
- Loop prevention mechanisms (Spanning Tree)
- Load balancing across multiple paths
- Fast convergence during failures

**Scalability Considerations**
- Growth projections and capacity planning
- Modular expansion capabilities
- Technology upgrade paths
- Backward compatibility requirements

## Design Documentation

**Network Diagrams**
- Physical connectivity diagrams
- Logical topology maps
- IP addressing schematics
- Routing protocol diagrams

**Implementation Plans**
- Phased deployment schedules
- Configuration templates
- Testing procedures
- Rollback procedures

**Operational Documentation**
- Network policies and procedures
- Maintenance schedules
- Troubleshooting guides
- Disaster recovery plans

Professional network design balances performance, reliability, security, and cost while ensuring maintainability and scalability.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the purpose of requirements analysis in network design?",
          options: [
            "Identify business and technical needs",
            "Only select equipment vendors",
            "Set arbitrary network size",
            "Ignore user requirements"
          ],
          correctAnswer: 0,
          explanation: "Requirements analysis ensures the network meets organizational objectives and user needs."
        },
        {
          id: 2,
          question: "What does the core layer provide in hierarchical design?",
          options: [
            "High-speed backbone and traffic aggregation",
            "User connectivity only",
            "Policy enforcement",
            "Basic switching"
          ],
          correctAnswer: 0,
          explanation: "The core layer provides fast transport between distribution layers."
        },
        {
          id: 3,
          question: "What is modular design?",
          options: [
            "Separating network into functional modules",
            "Using identical equipment everywhere",
            "Ignoring functional separation",
            "Random network expansion"
          ],
          correctAnswer: 0,
          explanation: "Modular design creates reusable, testable network components."
        },
        {
          id: 4,
          question: "What does the distribution layer handle?",
          options: [
            "Policy enforcement and routing decisions",
            "Only user connections",
            "Backbone transport",
            "Wireless access"
          ],
          correctAnswer: 0,
          explanation: "Distribution layer implements policies and routes between access and core."
        },
        {
          id: 5,
          question: "What is physical topology?",
          options: [
            "Actual device connections and cabling",
            "Data flow paths only",
            "IP addressing schemes",
            "Routing protocol design"
          ],
          correctAnswer: 0,
          explanation: "Physical topology shows real-world device connections and cable runs."
        },
        {
          id: 6,
          question: "Why create redundant links?",
          options: [
            "Provide backup paths during failures",
            "Increase network complexity",
            "Reduce available bandwidth",
            "Simplify troubleshooting"
          ],
          correctAnswer: 0,
          explanation: "Redundancy ensures network availability when primary paths fail."
        },
        {
          id: 7,
          question: "What does the access layer provide?",
          options: [
            "User connectivity and network access control",
            "Core backbone transport",
            "Inter-network routing",
            "Centralized management"
          ],
          correctAnswer: 0,
          explanation: "Access layer connects end devices and implements access policies."
        },
        {
          id: 8,
          question: "What is logical topology?",
          options: [
            "Data flow paths and addressing schemes",
            "Physical cable connections",
            "Equipment rack layouts",
            "Power distribution plans"
          ],
          correctAnswer: 0,
          explanation: "Logical topology shows how data moves through the network."
        },
        {
          id: 9,
          question: "What does scalability planning involve?",
          options: [
            "Growth projections and capacity planning",
            "Only current requirements",
            "Ignoring future needs",
            "Fixed network size"
          ],
          correctAnswer: 0,
          explanation: "Scalability ensures networks can grow to meet future demands."
        },
        {
          id: 10,
          question: "What prevents network loops?",
          options: [
            "Spanning Tree Protocol",
            "Random link activation",
            "Manual cable disconnection",
            "Ignoring redundancy"
          ],
          correctAnswer: 0,
          explanation: "Spanning Tree prevents loops while maintaining redundancy."
        },
        {
          id: 11,
          question: "What are network diagrams used for?",
          options: [
            "Visualizing physical and logical layouts",
            "Only equipment purchasing",
            "Employee training only",
            "Financial budgeting"
          ],
          correctAnswer: 0,
          explanation: "Diagrams provide essential visualization for design and troubleshooting."
        },
        {
          id: 12,
          question: "What does load balancing achieve?",
          options: [
            "Distributing traffic across multiple paths",
            "Concentrating all traffic on one link",
            "Reducing overall bandwidth",
            "Simplifying routing tables"
          ],
          correctAnswer: 0,
          explanation: "Load balancing optimizes bandwidth utilization and performance."
        },
        {
          id: 13,
          question: "What is fast convergence?",
          options: [
            "Quick recovery from network failures",
            "Slow network changes",
            "Manual reconfiguration",
            "Ignoring failures"
          ],
          correctAnswer: 0,
          explanation: "Fast convergence minimizes disruption during network changes."
        },
        {
          id: 14,
          question: "Why create implementation plans?",
          options: [
            "Organized phased deployment",
            "Random network changes",
            "Unplanned expansions",
            "Immediate full deployment"
          ],
          correctAnswer: 0,
          explanation: "Implementation plans ensure controlled, successful network changes."
        },
        {
          id: 15,
          question: "What are backward compatibility requirements?",
          options: [
            "Support for older devices and protocols",
            "Only newest technology support",
            "Complete technology replacement",
            "Ignoring existing equipment"
          ],
          correctAnswer: 0,
          explanation: "Backward compatibility protects existing investments and services."
        },
        {
          id: 16,
          question: "What does operational documentation include?",
          options: [
            "Network policies and maintenance procedures",
            "Only initial configurations",
            "Equipment receipts",
            "Employee schedules"
          ],
          correctAnswer: 0,
          explanation: "Operational documentation guides daily network management."
        },
        {
          id: 17,
          question: "Why separate physical and logical design?",
          options: [
            "Different perspectives for planning and troubleshooting",
            "Duplicate documentation",
            "Confuse network administrators",
            "Increase design complexity"
          ],
          correctAnswer: 0,
          explanation: "Separation helps plan physical infrastructure and logical operations independently."
        },
        {
          id: 18,
          question: "What is phased deployment?",
          options: [
            "Gradual implementation in stages",
            "Immediate complete rollout",
            "Random component installation",
            "Testing in production"
          ],
          correctAnswer: 0,
          explanation: "Phased deployment reduces risk and allows testing at each stage."
        },
        {
          id: 19,
          question: "What does disaster recovery planning ensure?",
          options: [
            "Network restoration after major failures",
            "Only daily operations",
            "Ignoring failures",
            "Permanent outage acceptance"
          ],
          correctAnswer: 0,
          explanation: "Disaster recovery planning prepares for worst-case scenarios."
        },
        {
          id: 20,
          question: "What balances in professional network design?",
          options: [
            "Performance, reliability, security, and cost",
            "Only lowest cost",
            "Only maximum performance",
            "Only simplest design"
          ],
          correctAnswer: 0,
          explanation: "Professional design considers multiple competing requirements."
        }
      ]
    },

    // MODULE 2: ROUTING PROTOCOLS AND TECHNOLOGIES
    {
      id: 2,
      title: "Advanced Routing Protocols",
      content: `# Enterprise Routing Technologies

## Routing Protocol Fundamentals
Routing protocols dynamically determine the best paths for data transmission across networks, adapting to topology changes and optimizing traffic flow.

## Interior Gateway Protocols (IGPs)

**OSPF (Open Shortest Path First)**
- Link-state routing protocol
- Uses Dijkstra's algorithm for path calculation
- Hierarchical design with areas
- Fast convergence and scalability
- Supports VLSM and route summarization

**EIGRP (Enhanced Interior Gateway Routing Protocol)**
- Advanced distance-vector protocol
- Uses Diffusing Update Algorithm (DUAL)
- Rapid convergence and efficient updates
- Supports unequal cost load balancing
- Proprietary to Cisco with open standard version

**IS-IS (Intermediate System to Intermediate System)**
- Link-state protocol like OSPF
- Originally for OSI networks, adapted for IP
- Used in large service provider networks
- Flexible hierarchical design

## Exterior Gateway Protocols (EGPs)

**BGP (Border Gateway Protocol)**
- Path-vector protocol for Internet routing
- Policies-based routing decisions
- Handles massive routing tables
- Supports route aggregation and filtering
- Essential for multi-homed networks

**BGP Attributes and Path Selection**
- Weight, Local Preference, AS Path, Origin
- MED, Next Hop, Community, Atomic Aggregate
- Deterministic path selection process
- Policy implementation through attribute manipulation

## Route Optimization Techniques

**Route Summarization**
- Reducing routing table size
- Minimizing routing updates
- Improving convergence times
- Implementing at natural network boundaries

**Route Filtering**
- Controlling route advertisement
- Security through prefix filtering
- Traffic engineering
- Policy implementation

**Load Balancing**
- Equal-cost multi-path routing
- Unequal-cost load sharing
- Per-packet vs per-destination balancing
- Bandwidth utilization optimization

## Routing Protocol Implementation

**Protocol Selection Criteria**
- Network size and topology
- Convergence requirements
- Administrative preferences
- Equipment capabilities
- Staff expertise

**Migration Strategies**
- Protocol coexistence periods
- Redistribution between protocols
- Metric translation and filtering
- Monitoring and validation

Advanced routing ensures efficient, reliable data transport across complex network infrastructures.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What type of protocol is OSPF?",
          options: [
            "Link-state routing protocol",
            "Distance-vector protocol",
            "Path-vector protocol",
            "Static routing only"
          ],
          correctAnswer: 0,
          explanation: "OSPF builds complete network topology using link-state advertisements."
        },
        {
          id: 2,
          question: "What does BGP primarily handle?",
          options: [
            "Internet routing between autonomous systems",
            "Internal network routing only",
            "Static route configuration",
            "Local network switching"
          ],
          correctAnswer: 0,
          explanation: "BGP exchanges routing information between different organizations."
        },
        {
          id: 3,
          question: "What algorithm does OSPF use?",
          options: [
            "Dijkstra's shortest path first",
            "Bellman-Ford algorithm",
            "Distance vector algorithm",
            "Static routing tables"
          ],
          correctAnswer: 0,
          explanation: "Dijkstra's algorithm calculates optimal paths in OSPF networks."
        },
        {
          id: 4,
          question: "What is EIGRP?",
          options: [
            "Advanced distance-vector routing protocol",
            "Link-state protocol",
            "Exterior gateway protocol",
            "Basic static routing"
          ],
          correctAnswer: 0,
          explanation: "EIGRP combines features of distance-vector and link-state protocols."
        },
        {
          id: 5,
          question: "What does route summarization achieve?",
          options: [
            "Reduces routing table size",
            "Increases routing updates",
            "Slows convergence",
            "Complicates troubleshooting"
          ],
          correctAnswer: 0,
          explanation: "Summarization aggregates multiple routes into single advertisements."
        },
        {
          id: 6,
          question: "What protocol uses DUAL algorithm?",
          options: [
            "EIGRP",
            "OSPF",
            "BGP",
            "RIP"
          ],
          correctAnswer: 0,
          explanation: "DUAL provides loop-free paths and fast convergence in EIGRP."
        },
        {
          id: 7,
          question: "What are BGP attributes used for?",
          options: [
            "Path selection and policy implementation",
            "Only metric calculation",
            "Device identification",
            "Protocol versioning"
          ],
          correctAnswer: 0,
          explanation: "Attributes determine best paths and implement routing policies."
        },
        {
          id: 8,
          question: "What does OSPF area design provide?",
          options: [
            "Hierarchical scaling and summarization",
            "Flat network topology",
            "Simple configuration",
            "Limited route calculation"
          ],
          correctAnswer: 0,
          explanation: "Areas localize topology changes and reduce routing overhead."
        },
        {
          id: 9,
          question: "What is unequal cost load balancing?",
          options: [
            "Using paths with different metrics proportionally",
            "Only equal metric paths",
            "Single path selection",
            "Random path selection"
          ],
          correctAnswer: 0,
          explanation: "EIGRP can distribute traffic across paths with different costs."
        },
        {
          id: 10,
          question: "What does IS-IS stand for?",
          options: [
            "Intermediate System to Intermediate System",
            "Internet System Information Service",
            "Internal System Integration Standard",
            "International Switching Interface System"
          ],
          correctAnswer: 0,
          explanation: "IS-IS is a link-state protocol used in large networks."
        },
        {
          id: 11,
          question: "What is route filtering?",
          options: [
            "Controlling which routes are advertised",
            "Increasing all route advertisements",
            "Removing all routes",
            "Automatic route generation"
          ],
          correctAnswer: 0,
          explanation: "Filtering implements security and traffic engineering policies."
        },
        {
          id: 12,
          question: "What supports VLSM?",
          options: [
            "Modern routing protocols like OSPF and EIGRP",
            "Only classful routing",
            "Basic static routing",
            "Manual route entry"
          ],
          correctAnswer: 0,
          explanation: "VLSM support allows efficient IP address allocation."
        },
        {
          id: 13,
          question: "What is fast convergence important for?",
          options: [
            "Minimizing network disruption",
            "Increasing configuration time",
            "Simplifying network design",
            "Reducing equipment costs"
          ],
          correctAnswer: 0,
          explanation: "Fast convergence maintains network availability during changes."
        },
        {
          id: 14,
          question: "What does multi-homed mean?",
          options: [
            "Connecting to multiple ISPs",
            "Single ISP connection",
            "No Internet connectivity",
            "Internal routing only"
          ],
          correctAnswer: 0,
          explanation: "Multi-homed networks use BGP for redundant Internet connections."
        },
        {
          id: 15,
          question: "What is per-packet load balancing?",
          options: [
            "Distributing packets across multiple paths",
            "Sending all packets same path",
            "Random path assignment",
            "Manual path selection"
          ],
          correctAnswer: 0,
          explanation: "Per-packet balancing can cause packet reordering issues."
        },
        {
          id: 16,
          question: "What does protocol migration involve?",
          options: [
            "Gradual transition between routing protocols",
            "Immediate protocol replacement",
            "Running single protocol always",
            "Ignoring protocol changes"
          ],
          correctAnswer: 0,
          explanation: "Migration requires careful planning and testing."
        },
        {
          id: 17,
          question: "What are BGP communities?",
          options: [
            "Tags for route grouping and policy",
            "Routing table entries",
            "Network device groups",
            "Administrative domains"
          ],
          correctAnswer: 0,
          explanation: "Communities simplify BGP policy implementation across networks."
        },
        {
          id: 18,
          question: "What does route redistribution do?",
          options: [
            "Shares routes between different routing protocols",
            "Creates duplicate routes",
            "Deletes existing routes",
            "Blocks route sharing"
          ],
          correctAnswer: 0,
          explanation: "Redistribution requires careful metric translation and filtering."
        },
        {
          id: 19,
          question: "What is path-vector protocol?",
          options: [
            "BGP's method tracking complete AS paths",
            "Simple hop count metric",
            "Link-state database",
            "Static routing tables"
          ],
          correctAnswer: 0,
          explanation: "Path-vector prevents loops by tracking complete paths."
        },
        {
          id: 20,
          question: "What determines routing protocol selection?",
          options: [
            "Network requirements and characteristics",
            "Only equipment vendor",
            "Administrator preference only",
            "Random selection"
          ],
          correctAnswer: 0,
          explanation: "Protocol selection considers multiple technical and operational factors."
        }
      ]
    },

    // MODULE 3: SWITCHING TECHNOLOGIES
    {
      id: 3,
      title: "Advanced Switching and VLANs",
      content: `# Enterprise Switching Architectures

## Switching Fundamentals
Advanced switching provides intelligent traffic forwarding within local networks, optimizing performance, security, and manageability through various technologies and features.

## VLAN Technologies

**VLAN Implementation**
- Logical segmentation of physical switches
- Broadcast domain isolation
- Security through traffic separation
- Simplified network management

**VLAN Trunking**
- **802.1Q**: Standard trunking protocol
- **ISL**: Cisco proprietary trunking
- Native VLAN configuration
- VLAN ID tagging and identification

**VLAN Design Best Practices**
- Consistent VLAN numbering schemes
- Separation of voice, data, management traffic
- Default VLAN security practices
- Documentation and labeling standards

## Spanning Tree Protocol (STP)

**STP Variants**
- **STP**: Original IEEE 802.1D standard
- **RSTP**: Rapid Spanning Tree (802.1w)
- **MSTP**: Multiple Spanning Tree (802.1s)
- **PVST+**: Per-VLAN Spanning Tree Plus

**STP Optimization**
- Root bridge selection and placement
- Port roles and states optimization
- Convergence time improvement
- Loop prevention mechanisms

## Link Aggregation

**EtherChannel Technologies**
- **PAgP**: Port Aggregation Protocol (Cisco)
- **LACP**: Link Aggregation Control Protocol (IEEE 802.3ad)
- Static aggregation configuration

**Benefits of Link Aggregation**
- Increased bandwidth through multiple links
- Load balancing across member ports
- Redundancy and fault tolerance
- Simplified management as single logical interface

## Advanced Switching Features

**Quality of Service (QoS)**
- Traffic classification and marking
- Congestion management and avoidance
- Policing and shaping
- Voice and video traffic prioritization

**Multilayer Switching**
- Layer 3 switching capabilities
- Routing between VLANs
- Hardware-based forwarding
- Combined switching and routing performance

**Security Features**
- Port security and MAC address limiting
- Dynamic ARP inspection
- DHCP snooping
- IP Source Guard

## Switch Management

**Virtual Switching Systems**
- Stacking technology for multiple switches
- Single management interface
- Increased redundancy
- Simplified configuration

**Network Monitoring**
- Port mirroring (SPAN/RSPAN)
- NetFlow and sFlow traffic analysis
- SNMP monitoring and alerts
- Syslog message collection

Advanced switching creates efficient, secure, and manageable local network infrastructures.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What do VLANs provide?",
          options: [
            "Logical segmentation of broadcast domains",
            "Physical cable separation",
            "Only security features",
            "Increased bandwidth"
          ],
          correctAnswer: 0,
          explanation: "VLANs create logical networks independent of physical connections."
        },
        {
          id: 2,
          question: "What is 802.1Q?",
          options: [
            "Standard VLAN trunking protocol",
            "Wireless security protocol",
            "Routing protocol standard",
            "Network management protocol"
          ],
          correctAnswer: 0,
          explanation: "802.1Q adds VLAN tags to Ethernet frames for trunking."
        },
        {
          id: 3,
          question: "What does STP prevent?",
          options: [
            "Network loops in redundant topologies",
            "All network redundancy",
            "VLAN configuration",
            "Switch stacking"
          ],
          correctAnswer: 0,
          explanation: "STP blocks redundant paths to prevent broadcast storms."
        },
        {
          id: 4,
          question: "What is RSTP?",
          options: [
            "Rapid Spanning Tree Protocol",
            "Routing Spanning Tree Protocol",
            "Redundant Switch Technology Protocol",
            "Rapid Switching Technology Protocol"
          ],
          correctAnswer: 0,
          explanation: "RSTP provides faster convergence than original STP."
        },
        {
          id: 5,
          question: "What does EtherChannel provide?",
          options: [
            "Link aggregation for increased bandwidth",
            "Single link operation",
            "VLAN trunking only",
            "Wireless connectivity"
          ],
          correctAnswer: 0,
          explanation: "EtherChannel combines multiple physical links into logical bundle."
        },
        {
          id: 6,
          question: "What is LACP?",
          options: [
            "Link Aggregation Control Protocol standard",
            "Local Area Control Protocol",
            "Link Access Control Protocol",
            "Local Aggregation Configuration Protocol"
          ],
          correctAnswer: 0,
          explanation: "LACP is the IEEE standard for dynamic link aggregation."
        },
        {
          id: 7,
          question: "What does QoS manage?",
          options: [
            "Network traffic prioritization",
            "Only bandwidth allocation",
            "Switch hardware resources",
            "VLAN configurations"
          ],
          correctAnswer: 0,
          explanation: "QoS ensures critical traffic receives appropriate network resources."
        },
        {
          id: 8,
          question: "What is multilayer switching?",
          options: [
            "Combining Layer 2 switching with Layer 3 routing",
            "Only Layer 2 forwarding",
            "Multiple switch layers",
            "Stacked switch configuration"
          ],
          correctAnswer: 0,
          explanation: "Multilayer switches route between VLANs at hardware speeds."
        },
        {
          id: 9,
          question: "What does port security control?",
          options: [
            "MAC addresses allowed on switch ports",
            "Only IP addresses",
            "VLAN access",
            "Bandwidth usage"
          ],
          correctAnswer: 0,
          explanation: "Port security prevents unauthorized device connections."
        },
        {
          id: 10,
          question: "What is MSTP?",
          options: [
            "Multiple Spanning Tree Protocol",
            "Main Spanning Tree Protocol",
            "Maximum Speed Transmission Protocol",
            "Multi-Switch Topology Protocol"
          ],
          correctAnswer: 0,
          explanation: "MSTP runs separate spanning tree instances for VLAN groups."
        },
        {
          id: 11,
          question: "What are native VLANs?",
          options: [
            "Untagged VLAN on trunk ports",
            "Default management VLAN",
            "Only voice VLAN",
            "Disabled VLAN"
          ],
          correctAnswer: 0,
          explanation: "Native VLAN carries untagged traffic on trunk links."
        },
        {
          id: 12,
          question: "What does DHCP snooping prevent?",
          options: [
            "Rogue DHCP server attacks",
            "Legitimate DHCP servers",
            "IP address assignment",
            "VLAN creation"
          ],
          correctAnswer: 0,
          explanation: "DHCP snooping validates DHCP messages and tracks assignments."
        },
        {
          id: 13,
          question: "What is switch stacking?",
          options: [
            "Connecting multiple switches as single unit",
            "Physical equipment stacking",
            "VLAN stacking configuration",
            "Protocol stacking layers"
          ],
          correctAnswer: 0,
          explanation: "Stacking simplifies management of multiple physical switches."
        },
        {
          id: 14,
          question: "What is port mirroring used for?",
          options: [
            "Network monitoring and analysis",
            "Increasing port bandwidth",
            "Creating VLAN trunks",
            "Configuring QoS"
          ],
          correctAnswer: 0,
          explanation: "Port mirroring copies traffic to monitoring devices."
        },
        {
          id: 15,
          question: "What does dynamic ARP inspection do?",
          options: [
            "Validates ARP packets to prevent spoofing",
            "Increases ARP response time",
            "Blocks all ARP traffic",
            "Creates static ARP entries"
          ],
          correctAnswer: 0,
          explanation: "DAI prevents man-in-the-middle attacks via ARP spoofing."
        },
        {
          id: 16,
          question: "What is per-VLAN spanning tree?",
          options: [
            "Separate spanning tree instance per VLAN",
            "Single spanning tree for all VLANs",
            "No spanning tree operation",
            "Manual loop prevention"
          ],
          correctAnswer: 0,
          explanation: "PVST+ allows different topologies for different VLANs."
        },
        {
          id: 17,
          question: "What does IP Source Guard protect against?",
          options: [
            "IP address spoofing attacks",
            "Legitimate IP assignments",
            "DHCP server operation",
            "VLAN configuration"
          ],
          correctAnswer: 0,
          explanation: "IP Source Guard validates source IP addresses on switch ports."
        },
        {
          id: 18,
          question: "What is traffic shaping?",
          options: [
            "Controlling traffic rate to prevent congestion",
            "Increasing all traffic rates",
            "Blocking specific traffic types",
            "Prioritizing all traffic equally"
          ],
          correctAnswer: 0,
          explanation: "Shaping buffers excess traffic to smooth transmission rates."
        },
        {
          id: 19,
          question: "What does NetFlow provide?",
          options: [
            "Traffic flow analysis and accounting",
            "Only error reporting",
            "Configuration management",
            "VLAN creation"
          ],
          correctAnswer: 0,
          explanation: "NetFlow collects detailed traffic statistics for analysis."
        },
        {
          id: 20,
          question: "Why separate voice and data VLANs?",
          options: [
            "Quality of service and security isolation",
            "Only for configuration simplicity",
            "To increase broadcast domains",
            "To reduce VLAN count"
          ],
          correctAnswer: 0,
          explanation: "Separate VLANs allow different QoS policies and security measures."
        }
      ]
    },

    // MODULE 4: NETWORK SECURITY
    {
      id: 4,
      title: "Network Security Implementation",
      content: `# Comprehensive Network Security

## Security Design Principles
Network security implements layered defenses to protect against threats while maintaining authorized access and system availability.

## Access Control Mechanisms

**AAA Framework**
- **Authentication**: Verifying user identity
- **Authorization**: Determining access rights
- **Accounting**: Tracking user activities
- **Implementation**: RADIUS, TACACS+, local databases

**Network Access Control (NAC)**
- Pre-admission endpoint assessment
- Post-admission monitoring
- Guest access management
- BYOD (Bring Your Own Device) policies

## Firewall Technologies

**Firewall Types**
- **Packet Filtering**: Basic header inspection
- **Stateful Inspection**: Tracking connection states
- **Application Layer**: Deep packet inspection
- **Next-Generation**: Integrated threat prevention

**Firewall Deployment**
- Perimeter defense at network boundaries
- Internal segmentation between zones
- DMZ (Demilitarized Zone) configurations
- Virtual firewall instances

**Security Zones**
- Trust levels based on security requirements
- Traffic flow policies between zones
- Default deny policies
- Explicit permit rules for required traffic

## Intrusion Prevention Systems

**IPS Deployment Modes**
- **Inline**: Active traffic inspection and blocking
- **Passive**: Monitoring and alerting only
- **Hybrid**: Combination of both approaches

**Threat Detection Methods**
- Signature-based detection
- Anomaly-based detection
- Behavior-based detection
- Heuristic analysis

**IPS Management**
- Signature updates and tuning
- False positive minimization
- Performance impact monitoring
- Integration with other security systems

## Virtual Private Networks

**VPN Technologies**
- **IPsec**: Secure IP communication
- **SSL/TLS**: Web-based secure access
- **DMVPN**: Dynamic multipoint VPN
- **GETVPN**: Group Encrypted Transport VPN

**VPN Deployment Scenarios**
- Site-to-site connectivity
- Remote access for mobile users
- Extranet partner connections
- Cloud connectivity

## Security Monitoring and Management

**Security Information and Event Management (SIEM)**
- Centralized log collection
- Correlation and analysis
- Real-time alerting
- Compliance reporting

**Network Behavior Analysis**
- Baseline establishment
- Anomaly detection
- Threat intelligence integration
- Automated response mechanisms

## Security Best Practices

**Defense in Depth**
- Multiple security layers
- Diverse security technologies
- Redundant security controls
- Compensating controls

**Principle of Least Privilege**
- Minimum necessary access
- Role-based access control
- Regular access reviews
- Privilege escalation controls

**Security Policy Implementation**
- Documented security requirements
- Regular security assessments
- Incident response planning
- Security awareness training

Comprehensive security protects network infrastructure while enabling business operations.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does AAA framework include?",
          options: [
            "Authentication, Authorization, Accounting",
            "Access, Analysis, Assessment",
            "Administration, Automation, Auditing",
            "Authentication, Access, Administration"
          ],
          correctAnswer: 0,
          explanation: "AAA provides comprehensive access control and tracking."
        },
        {
          id: 2,
          question: "What is stateful firewall inspection?",
          options: [
            "Tracking connection states for decisions",
            "Only examining packet headers",
            "Ignoring connection information",
            "Blocking all traffic"
          ],
          correctAnswer: 0,
          explanation: "Stateful inspection understands and tracks communication sessions."
        },
        {
          id: 3,
          question: "What does NAC provide?",
          options: [
            "Endpoint security assessment before access",
            "Only basic password authentication",
            "Unrestricted network access",
            "Manual device configuration"
          ],
          correctAnswer: 0,
          explanation: "NAC ensures devices meet security standards before connecting."
        },
        {
          id: 4,
          question: "What is a DMZ?",
          options: [
            "Demilitarized Zone for public services",
            "Default management zone",
            "Direct monitoring zone",
            "Dynamic migration zone"
          ],
          correctAnswer: 0,
          explanation: "DMZ provides secure hosting for Internet-facing services."
        },
        {
          id: 5,
          question: "What does IPS stand for?",
          options: [
            "Intrusion Prevention System",
            "Internet Protocol Security",
            "Internal Protection System",
            "Intelligent Packet Switching"
          ],
          correctAnswer: 0,
          explanation: "IPS actively blocks detected threats in network traffic."
        },
        {
          id: 6,
          question: "What is signature-based detection?",
          options: [
            "Matching against known threat patterns",
            "Detecting behavioral anomalies",
            "Random threat identification",
            "Manual threat analysis"
          ],
          correctAnswer: 0,
          explanation: "Signature detection identifies known threats by their patterns."
        },
        {
          id: 7,
          question: "What does IPsec provide?",
          options: [
            "Secure encrypted communication over IP",
            "Only authentication without encryption",
            "Web application security",
            "Email security only"
          ],
          correctAnswer: 0,
          explanation: "IPsec encrypts and authenticates IP packet flows."
        },
        {
          id: 8,
          question: "What is defense in depth?",
          options: [
            "Multiple layered security controls",
            "Single perimeter firewall only",
            "Basic password protection",
            "No security measures"
          ],
          correctAnswer: 0,
          explanation: "Layered defenses provide protection if one control fails."
        },
        {
          id: 9,
          question: "What does SIEM do?",
          options: [
            "Centralized security event management",
            "Only firewall configuration",
            "Basic logging without analysis",
            "Network performance monitoring"
          ],
          correctAnswer: 0,
          explanation: "SIEM correlates events from multiple security systems."
        },
        {
          id: 10,
          question: "What is the principle of least privilege?",
          options: [
            "Minimum access necessary for function",
            "Maximum access for all users",
            "Equal access for everyone",
            "No access restrictions"
          ],
          correctAnswer: 0,
          explanation: "Least privilege minimizes potential damage from compromised accounts."
        },
        {
          id: 11,
          question: "What are security zones?",
          options: [
            "Network segments with different trust levels",
            "Physical security areas",
            "Administrative domains",
            "Geographic locations"
          ],
          correctAnswer: 0,
          explanation: "Zones allow different security policies for different network areas."
        },
        {
          id: 12,
          question: "What does anomaly-based detection identify?",
          options: [
            "Deviations from normal behavior patterns",
            "Only known attack signatures",
            "All network traffic",
            "Specific protocol violations"
          ],
          correctAnswer: 0,
          explanation: "Anomaly detection finds unusual patterns indicating potential threats."
        },
        {
          id: 13,
          question: "What is SSL VPN used for?",
          options: [
            "Web-based secure remote access",
            "Site-to-site network connections",
            "Internal network segmentation",
            "Wireless security only"
          ],
          correctAnswer: 0,
          explanation: "SSL VPN provides clientless secure access through web browsers."
        },
        {
          id: 14,
          question: "What is default deny policy?",
          options: [
            "Block all traffic unless explicitly permitted",
            "Allow all traffic unless blocked",
            "Random traffic filtering",
            "No traffic filtering"
          ],
          correctAnswer: 0,
          explanation: "Default deny is a fundamental security best practice."
        },
        {
          id: 15,
          question: "What does BYOD management involve?",
          options: [
            "Personal device security and access control",
            "Only company-owned devices",
            "Blocking all personal devices",
            "Unrestricted personal device access"
          ],
          correctAnswer: 0,
          explanation: "BYOD policies balance user convenience with security requirements."
        },
        {
          id: 16,
          question: "What is next-generation firewall?",
          options: [
            "Integrated threat prevention with application awareness",
            "Basic packet filtering only",
            "Only intrusion prevention",
            "Simple stateful inspection"
          ],
          correctAnswer: 0,
          explanation: "NGFW combines multiple security functions with application control."
        },
        {
          id: 17,
          question: "What are compensating controls?",
          options: [
            "Alternative security measures when primary controls aren't possible",
            "Duplicate security measures",
            "No security measures",
            "Basic security only"
          ],
          correctAnswer: 0,
          explanation: "Compensating controls provide equivalent protection through different means."
        },
        {
          id: 18,
          question: "What does TACACS+ provide?",
          options: [
            "Enhanced AAA services with command authorization",
            "Only basic authentication",
            "No accounting features",
            "Web-based access only"
          ],
          correctAnswer: 0,
          explanation: "TACACS+ separates authentication, authorization, and accounting."
        },
        {
          id: 19,
          question: "What is threat intelligence integration?",
          options: [
            "Using external threat information for protection",
            "Only internal monitoring",
            "Ignoring external threats",
            "Manual threat research"
          ],
          correctAnswer: 0,
          explanation: "Threat intelligence provides context about current attack methods."
        },
        {
          id: 20,
          question: "Why implement security policies?",
          options: [
            "Document and enforce security requirements",
            "Only for compliance paperwork",
            "Ignore security practices",
            "Create security complexity"
          ],
          correctAnswer: 0,
          explanation: "Policies provide framework for consistent security implementation."
        }
      ]
    },

    // MODULE 5: WIRELESS NETWORKING
    {
      id: 5,
      title: "Enterprise Wireless Networks",
      content: `# Advanced Wireless Networking

## Wireless Network Architecture
Enterprise wireless networks provide secure, reliable, and high-performance wireless connectivity with centralized management and advanced features.

## Wireless Standards and Technologies

**Wi-Fi Standards Evolution**
- **802.11a/b/g**: Legacy standards
- **802.11n**: MIMO and channel bonding
- **802.11ac**: Wave 1 and Wave 2 enhancements
- **802.11ax (Wi-Fi 6)**: OFDMA and improved efficiency
- **802.11be (Wi-Fi 7)**: Future developments

**Frequency Bands and Channels**
- 2.4 GHz band: Limited channels, longer range
- 5 GHz band: More channels, less interference
- 6 GHz band: Wi-Fi 6E new spectrum
- Channel planning and interference avoidance

## Wireless Network Design

**Site Survey and Planning**
- Predictive site surveys using software tools
- Active site surveys with physical testing
- Passive site surveys for interference detection
- Capacity planning for user density

**Access Point Placement**
- Coverage area optimization
- Overlap and roaming considerations
- Capacity vs coverage design balance
- Aesthetic and mounting considerations

**Channel Planning Strategies**
- Non-overlapping channel assignments
- Dynamic frequency selection (DFS)
- Transmit power adjustment
- Band steering for client distribution

## Wireless Security

**Authentication Methods**
- **WPA3**: Latest security standard
- **WPA2-Enterprise**: 802.1X authentication
- **WPA2-Personal**: Pre-shared key
- **Open networks with captive portal**

**Encryption Protocols**
- **AES**: Advanced Encryption Standard
- **TKIP**: Temporary Key Integrity Protocol (deprecated)
- **GCMP**: Galois/Counter Mode Protocol
- **Suite B** algorithms for government use

**Wireless Intrusion Prevention**
- Rogue access point detection
- Wireless intrusion detection systems
- Client misassociation prevention
- Air quality monitoring

## Wireless Network Management

**Controller-Based Architectures**
- Centralized wireless LAN controllers
- Distributed controller architectures
- Cloud-managed wireless solutions
- Autonomous access point management

**Radio Resource Management**
- Automatic channel selection
- Dynamic transmit power control
- Load balancing across access points
- Band steering optimization

**Quality of Service for Wireless**
- Wireless multimedia (WMM) certification
- Call admission control for voice
- Video traffic prioritization
- Background traffic management

## Advanced Wireless Features

**Mesh Networking**
- Self-forming wireless backhaul
- Dynamic path selection
- Scalability for large deployments
- Outdoor and difficult coverage areas

**Location Services**
- RFID tracking and asset management
- Real-time location systems (RTLS)
- Proximity marketing applications
- Analytics and heat mapping

**High-Density Deployments**
- Stadium and conference venue designs
- Classroom and lecture hall deployments
- Office hoteling and flexible workspaces
- Capacity planning for dense user environments

Enterprise wireless requires careful planning, implementation, and management for optimal performance and security.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does 802.11ax provide?",
          options: [
            "Wi-Fi 6 with OFDMA and efficiency improvements",
            "Basic wireless connectivity only",
            "Only faster speeds without efficiency",
            "Outdated wireless standard"
          ],
          correctAnswer: 0,
          explanation: "Wi-Fi 6 improves performance in high-density environments."
        },
        {
          id: 2,
          question: "What is site survey planning?",
          options: [
            "Wireless coverage and capacity planning",
            "Only equipment purchasing",
            "Network cable installation",
            "Security policy creation"
          ],
          correctAnswer: 0,
          explanation: "Site surveys determine optimal access point placement."
        },
        {
          id: 3,
          question: "What does WPA3 improve?",
          options: [
            "Wireless security with stronger encryption",
            "Only connection speeds",
            "Basic authentication only",
            "Network management features"
          ],
          correctAnswer: 0,
          explanation: "WPA3 addresses vulnerabilities in previous wireless security standards."
        },
        {
          id: 4,
          question: "What is channel planning?",
          options: [
            "Assigning non-overlapping frequencies",
            "Random frequency selection",
            "Using same channels everywhere",
            "Ignoring interference issues"
          ],
          correctAnswer: 0,
          explanation: "Proper channel planning minimizes interference between access points."
        },
        {
          id: 5,
          question: "What does 802.1X provide for wireless?",
          options: [
            "Enterprise-grade authentication",
            "Basic open authentication",
            "No authentication required",
            "Simple password only"
          ],
          correctAnswer: 0,
          explanation: "802.1X integrates wireless with enterprise authentication systems."
        },
        {
          id: 6,
          question: "What is MIMO technology?",
          options: [
            "Multiple Input Multiple Output antennas",
            "Single antenna systems",
            "Manual input optimization",
            "Maximum output power"
          ],
          correctAnswer: 0,
          explanation: "MIMO uses multiple antennas to improve performance and reliability."
        },
        {
          id: 7,
          question: "What does RRM manage?",
          options: [
            "Radio resources and optimization",
            "Only user connections",
            "Network cabling",
            "Security policies"
          ],
          correctAnswer: 0,
          explanation: "Radio Resource Management automatically optimizes wireless performance."
        },
        {
          id: 8,
          question: "What is band steering?",
          options: [
            "Guiding clients to less congested bands",
            "Blocking certain frequency bands",
            "Manual band selection only",
            "Disabling dual-band operation"
          ],
          correctAnswer: 0,
          explanation: "Band steering improves network performance by balancing client distribution."
        },
        {
          id: 9,
          question: "What does WMM provide?",
          options: [
            "Wireless multimedia quality of service",
            "Only basic connectivity",
            "Maximum security",
            "Network management"
          ],
          correctAnswer: 0,
          explanation: "WMM prioritizes time-sensitive traffic like voice and video."
        },
        {
          id: 10,
          question: "What is mesh networking?",
          options: [
            "Wireless backhaul between access points",
            "Only wired connections",
            "Single access point deployment",
            "Manual configuration required"
          ],
          correctAnswer: 0,
          explanation: "Mesh networks create self-forming wireless connections between devices."
        },
        {
          id: 11,
          question: "What is rogue access point detection?",
          options: [
            "Identifying unauthorized wireless devices",
            "Only monitoring legitimate APs",
            "Ignoring all wireless devices",
            "Blocking all access points"
          ],
          correctAnswer: 0,
          explanation: "Rogue AP detection prevents security breaches from unauthorized devices."
        },
        {
          id: 12,
          question: "What does DFS enable?",
          options: [
            "Dynamic frequency selection to avoid radar",
            "Static channel assignment",
            "Manual frequency selection",
            "Ignoring radar interference"
          ],
          correctAnswer: 0,
          explanation: "DFS allows use of channels shared with radar systems."
        },
        {
          id: 13,
          question: "What is capacity vs coverage design?",
          options: [
            "Balancing user density with signal strength",
            "Only maximum coverage area",
            "Only maximum user capacity",
            "Random access point placement"
          ],
          correctAnswer: 0,
          explanation: "Different designs prioritize either coverage area or user capacity."
        },
        {
          id: 14,
          question: "What are location services used for?",
          options: [
            "Asset tracking and user location",
            "Only basic connectivity",
            "Network security only",
            "Bandwidth management"
          ],
          correctAnswer: 0,
          explanation: "Wireless networks can provide location-based services and analytics."
        },
        {
          id: 15,
          question: "What does cloud-managed wireless provide?",
          options: [
            "Centralized management through cloud",
            "Only local management",
            "No management capabilities",
            "Manual configuration only"
          ],
          correctAnswer: 0,
          explanation: "Cloud management simplifies wireless network administration."
        },
        {
          id: 16,
          question: "What is high-density wireless design?",
          options: [
            "Networks for many users in small areas",
            "Only sparse user deployments",
            "Basic home networks",
            "Outdoor only networks"
          ],
          correctAnswer: 0,
          explanation: "High-density designs support many simultaneous connections."
        },
        {
          id: 17,
          question: "What does AES provide for wireless?",
          options: [
            "Strong encryption for data protection",
            "Only authentication",
            "Basic connectivity",
            "Network management"
          ],
          correctAnswer: 0,
          explanation: "AES is the encryption standard used in modern wireless security."
        },
        {
          id: 18,
          question: "What is client load balancing?",
          options: [
            "Distributing clients across access points",
            "Concentrating all clients on one AP",
            "Blocking client connections",
            "Manual client assignment"
          ],
          correctAnswer: 0,
          explanation: "Load balancing prevents individual access point overload."
        },
        {
          id: 19,
          question: "What does OFDMA enable in Wi-Fi 6?",
          options: [
            "Efficient multi-user communication",
            "Only single-user transmission",
            "Basic channel access",
            "Manual resource allocation"
          ],
          correctAnswer: 0,
          explanation: "OFDMA allows serving multiple clients simultaneously."
        },
        {
          id: 20,
          question: "Why implement wireless intrusion prevention?",
          options: [
            "Detect and prevent wireless attacks",
            "Only monitor legitimate traffic",
            "Ignore all security threats",
            "Block all wireless access"
          ],
          correctAnswer: 0,
          explanation: "Wireless IPS protects against specific wireless network threats."
        }
      ]
    },

    // MODULE 6: NETWORK MANAGEMENT AND AUTOMATION
    {
      id: 6,
      title: "Network Operations and Automation",
      content: `# Professional Network Management

## Network Operations Framework
Effective network management ensures reliable operation, rapid troubleshooting, and continuous optimization through systematic processes and automation.

## Network Monitoring Systems

**Monitoring Technologies**
- **SNMP**: Simple Network Management Protocol
- **NetFlow/sFlow/IPFIX**: Traffic flow analysis
- **Syslog**: Event and message logging
- **Telemetry**: Real-time streaming data

**Monitoring Architecture**
- Centralized monitoring servers
- Distributed collection points
- Redundant monitoring systems
- Cloud-based monitoring solutions

**Key Performance Indicators**
- Availability and uptime metrics
- Performance and latency measurements
- Capacity utilization trends
- Error and discard rates

## Network Configuration Management

**Configuration Standards**
- Consistent configuration templates
- Change control procedures
- Configuration backup policies
- Version control for configurations

**Configuration Automation**
- Script-based configuration deployment
- Infrastructure as Code (IaC) approaches
- Configuration drift detection
- Automated compliance checking

**Configuration Backup and Recovery**
- Regular configuration backups
- Secure storage of configurations
- Rapid restoration procedures
- Configuration change tracking

## Network Troubleshooting Methodology

**Systematic Troubleshooting**
- Problem identification and documentation
- Information gathering and analysis
- Hypothesis development and testing
- Solution implementation and verification

**Troubleshooting Tools**
- Protocol analyzers and packet capture
- Network diagnostic commands
- Performance testing tools
- Log analysis utilities

**Root Cause Analysis**
- Identifying underlying causes
- Preventing recurrence
- Process improvement
- Documentation of solutions

## Network Automation

**Automation Benefits**
- Reduced human error
- Consistent configuration
- Rapid deployment
- Scalable operations

**Automation Technologies**
- **Python/Ansible**: Configuration automation
- **NETCONF/YANG**: Model-driven management
- **REST APIs**: Programmatic device control
- **Orchestration platforms**: Workflow automation

**Automation Use Cases**
- Device provisioning and deployment
- Configuration updates and changes
- Monitoring and alert responses
- Compliance validation and reporting

## Network Documentation

**Documentation Standards**
- Consistent formatting and organization
- Regular updates and revisions
- Access control and versioning
- Integration with change management

**Essential Documentation Types**
- Network topology diagrams
- IP addressing plans
- Configuration standards
- Operational procedures
- Contact and escalation lists

## Service Level Management

**Service Level Agreements (SLAs)**
- Defining service expectations
- Performance measurement
- Reporting and review
- Continuous improvement

**Capacity Planning**
- Trend analysis and forecasting
- Resource utilization monitoring
- Growth planning
- Budget justification

**Disaster Recovery Planning**
- Business impact analysis
- Recovery time objectives
- Recovery point objectives
- Regular testing and validation

Professional network management combines technology, processes, and people for reliable network operations.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does SNMP provide?",
          options: [
            "Network device monitoring and management",
            "Only configuration management",
            "Automated troubleshooting",
            "Security enforcement"
          ],
          correctAnswer: 0,
          explanation: "SNMP collects information and controls network devices."
        },
        {
          id: 2,
          question: "What is NetFlow used for?",
          options: [
            "Traffic flow analysis and accounting",
            "Only device configuration",
            "Security policy enforcement",
            "Automated scripting"
          ],
          correctAnswer: 0,
          explanation: "NetFlow provides detailed traffic statistics and analysis."
        },
        {
          id: 3,
          question: "Why implement configuration standards?",
          options: [
            "Consistency and easier management",
            "Random configurations",
            "Manual configuration only",
            "No configuration control"
          ],
          correctAnswer: 0,
          explanation: "Standards ensure predictable, maintainable network configurations."
        },
        {
          id: 4,
          question: "What is systematic troubleshooting?",
          options: [
            "Structured approach to problem resolution",
            "Random trial and error",
            "Immediate solution guessing",
            "Ignoring problems"
          ],
          correctAnswer: 0,
          explanation: "Systematic methods ensure thorough, efficient problem resolution."
        },
        {
          id: 5,
          question: "What does automation reduce?",
          options: [
            "Human error and manual effort",
            "Network performance",
            "Security levels",
            "Configuration complexity"
          ],
          correctAnswer: 0,
          explanation: "Automation improves consistency and efficiency."
        },
        {
          id: 6,
          question: "What is Infrastructure as Code?",
          options: [
            "Managing infrastructure through code",
            "Manual configuration only",
            "Hardware programming",
            "Network coding languages"
          ],
          correctAnswer: 0,
          explanation: "IaC treats infrastructure configuration as software code."
        },
        {
          id: 7,
          question: "What does configuration drift detection identify?",
          options: [
            "Unauthorized configuration changes",
            "Only authorized changes",
            "Network performance issues",
            "Security vulnerabilities"
          ],
          correctAnswer: 0,
          explanation: "Drift detection ensures configurations remain as intended."
        },
        {
          id: 8,
          question: "What are KPIs in network management?",
          options: [
            "Key Performance Indicators for measurement",
            "Only financial metrics",
            "Employee performance",
            "Equipment costs"
          ],
          correctAnswer: 0,
          explanation: "KPIs quantify network performance and reliability."
        },
        {
          id: 9,
          question: "What is root cause analysis?",
          options: [
            "Identifying underlying problem causes",
            "Only treating symptoms",
            "Ignoring problem sources",
            "Basic problem documentation"
          ],
          correctAnswer: 0,
          explanation: "Root cause analysis prevents problem recurrence."
        },
        {
          id: 10,
          question: "What does REST API enable?",
          options: [
            "Programmatic device control and automation",
            "Only manual configuration",
            "Basic monitoring only",
            "No device interaction"
          ],
          correctAnswer: 0,
          explanation: "REST APIs allow software to control network devices."
        },
        {
          id: 11,
          question: "Why document network topologies?",
          options: [
            "Visual understanding and troubleshooting",
            "Only for compliance",
            "Ignoring network structure",
            "Random documentation"
          ],
          correctAnswer: 0,
          explanation: "Topology diagrams are essential for design and troubleshooting."
        },
        {
          id: 12,
          question: "What is change control?",
          options: [
            "Managed process for network changes",
            "Random network modifications",
            "No change procedures",
            "Immediate changes without review"
          ],
          correctAnswer: 0,
          explanation: "Change control prevents disruptions from unauthorized changes."
        },
        {
          id: 13,
          question: "What does packet capture analysis provide?",
          options: [
            "Detailed protocol and traffic examination",
            "Only basic statistics",
            "Configuration management",
            "Automated scripting"
          ],
          correctAnswer: 0,
          explanation: "Packet analysis reveals detailed network communication issues."
        },
        {
          id: 14,
          question: "What is capacity planning?",
          options: [
            "Planning for future network growth",
            "Only current utilization",
            "Ignoring future needs",
            "Random equipment purchases"
          ],
          correctAnswer: 0,
          explanation: "Capacity planning ensures networks can handle future demands."
        },
        {
          id: 15,
          question: "What does SLA define?",
          options: [
            "Service expectations and measurements",
            "Only equipment specifications",
            "Employee responsibilities",
            "Financial budgets"
          ],
          correctAnswer: 0,
          explanation: "SLAs establish agreed service levels between providers and users."
        },
        {
          id: 16,
          question: "What is configuration backup important for?",
          options: [
            "Rapid recovery from failures",
            "Only compliance requirements",
            "Ignoring recovery needs",
            "Storage space utilization"
          ],
          correctAnswer: 0,
          explanation: "Backups enable quick restoration of device configurations."
        },
        {
          id: 17,
          question: "What does telemetry provide?",
          options: [
            "Real-time streaming performance data",
            "Only historical data",
            "Basic error reporting",
            "Manual measurements"
          ],
          correctAnswer: 0,
          explanation: "Telemetry enables real-time monitoring and analysis."
        },
        {
          id: 18,
          question: "What is disaster recovery planning?",
          options: [
            "Preparing for major network failures",
            "Ignoring failure possibilities",
            "Only daily operations",
            "Basic backup procedures"
          ],
          correctAnswer: 0,
          explanation: "Disaster recovery ensures business continuity during major outages."
        },
        {
          id: 19,
          question: "What does orchestration provide?",
          options: [
            "Workflow automation across systems",
            "Only individual device automation",
            "Manual process management",
            "Basic scripting capabilities"
          ],
          correctAnswer: 0,
          explanation: "Orchestration coordinates automated tasks across multiple systems."
        },
        {
          id: 20,
          question: "Why implement regular network reviews?",
          options: [
            "Continuous improvement and optimization",
            "Only when problems occur",
            "Ignoring network performance",
            "Random assessment"
          ],
          correctAnswer: 0,
          explanation: "Regular reviews identify improvement opportunities and issues."
        }
      ]
    }
  ],

  // 3. FINAL EXAM (40 Questions - Mixed from all modules)
  finalExam: {
    id: "network-engineering-diploma-exam",
    title: "Network Engineering Diploma Final Examination",
    description: "Comprehensive exam covering all 6 advanced modules. You need to answer 40 questions to complete your diploma.",
    passingScore: 75,
    questions: [
      // Questions from Module 1
      {
        id: 1,
        moduleId: 1,
        question: "What does the core layer provide in hierarchical design?",
        options: [
          "High-speed backbone and traffic aggregation",
          "User connectivity only",
          "Policy enforcement",
          "Basic switching"
        ],
        correctAnswer: 0,
        explanation: "The core layer provides fast transport between distribution layers."
      },
      {
        id: 2,
        moduleId: 1,
        question: "What is modular design?",
        options: [
          "Separating network into functional modules",
          "Using identical equipment everywhere",
          "Ignoring functional separation",
          "Random network expansion"
        ],
        correctAnswer: 0,
        explanation: "Modular design creates reusable, testable network components."
      },
      {
        id: 3,
        moduleId: 1,
        question: "What does the distribution layer handle?",
        options: [
          "Policy enforcement and routing decisions",
          "Only user connections",
          "Backbone transport",
          "Wireless access"
        ],
        correctAnswer: 0,
        explanation: "Distribution layer implements policies and routes between access and core."
      },
      {
        id: 4,
        moduleId: 1,
        question: "What is physical topology?",
        options: [
          "Actual device connections and cabling",
          "Data flow paths only",
          "IP addressing schemes",
          "Routing protocol design"
        ],
        correctAnswer: 0,
        explanation: "Physical topology shows real-world device connections and cable runs."
      },
      {
        id: 5,
        moduleId: 1,
        question: "Why create redundant links?",
        options: [
          "Provide backup paths during failures",
          "Increase network complexity",
          "Reduce available bandwidth",
          "Simplify troubleshooting"
        ],
        correctAnswer: 0,
        explanation: "Redundancy ensures network availability when primary paths fail."
      },
      {
        id: 6,
        moduleId: 1,
        question: "What does the access layer provide?",
        options: [
          "User connectivity and network access control",
          "Core backbone transport",
          "Inter-network routing",
          "Centralized management"
        ],
        correctAnswer: 0,
        explanation: "Access layer connects end devices and implements access policies."
      },

      // Questions from Module 2
      {
        id: 7,
        moduleId: 2,
        question: "What type of protocol is OSPF?",
        options: [
          "Link-state routing protocol",
          "Distance-vector protocol",
          "Path-vector protocol",
          "Static routing only"
        ],
        correctAnswer: 0,
        explanation: "OSPF builds complete network topology using link-state advertisements."
      },
      {
        id: 8,
        moduleId: 2,
        question: "What does BGP primarily handle?",
        options: [
          "Internet routing between autonomous systems",
          "Internal network routing only",
          "Static route configuration",
          "Local network switching"
        ],
        correctAnswer: 0,
        explanation: "BGP exchanges routing information between different organizations."
      },
      {
        id: 9,
        moduleId: 2,
        question: "What algorithm does OSPF use?",
        options: [
          "Dijkstra's shortest path first",
          "Bellman-Ford algorithm",
          "Distance vector algorithm",
          "Static routing tables"
        ],
        correctAnswer: 0,
        explanation: "Dijkstra's algorithm calculates optimal paths in OSPF networks."
      },
      {
        id: 10,
        moduleId: 2,
        question: "What is EIGRP?",
        options: [
          "Advanced distance-vector routing protocol",
          "Link-state protocol",
          "Exterior gateway protocol",
          "Basic static routing"
        ],
        correctAnswer: 0,
        explanation: "EIGRP combines features of distance-vector and link-state protocols."
      },
      {
        id: 11,
        moduleId: 2,
        question: "What does route summarization achieve?",
        options: [
          "Reduces routing table size",
          "Increases routing updates",
          "Slows convergence",
          "Complicates troubleshooting"
        ],
        correctAnswer: 0,
        explanation: "Summarization aggregates multiple routes into single advertisements."
      },
      {
        id: 12,
        moduleId: 2,
        question: "What protocol uses DUAL algorithm?",
        options: [
          "EIGRP",
          "OSPF",
          "BGP",
          "RIP"
        ],
        correctAnswer: 0,
        explanation: "DUAL provides loop-free paths and fast convergence in EIGRP."
      },

      // Questions from Module 3
      {
        id: 13,
        moduleId: 3,
        question: "What do VLANs provide?",
        options: [
          "Logical segmentation of broadcast domains",
          "Physical cable separation",
          "Only security features",
          "Increased bandwidth"
        ],
        correctAnswer: 0,
        explanation: "VLANs create logical networks independent of physical connections."
      },
      {
        id: 14,
        moduleId: 3,
        question: "What is 802.1Q?",
        options: [
          "Standard VLAN trunking protocol",
          "Wireless security protocol",
          "Routing protocol standard",
          "Network management protocol"
        ],
        correctAnswer: 0,
        explanation: "802.1Q adds VLAN tags to Ethernet frames for trunking."
      },
      {
        id: 15,
        moduleId: 3,
        question: "What does STP prevent?",
        options: [
          "Network loops in redundant topologies",
          "All network redundancy",
          "VLAN configuration",
          "Switch stacking"
        ],
        correctAnswer: 0,
        explanation: "STP blocks redundant paths to prevent broadcast storms."
      },
      {
        id: 16,
        moduleId: 3,
        question: "What is RSTP?",
        options: [
          "Rapid Spanning Tree Protocol",
          "Routing Spanning Tree Protocol",
          "Redundant Switch Technology Protocol",
          "Rapid Switching Technology Protocol"
        ],
        correctAnswer: 0,
        explanation: "RSTP provides faster convergence than original STP."
      },
      {
        id: 17,
        moduleId: 3,
        question: "What does EtherChannel provide?",
        options: [
          "Link aggregation for increased bandwidth",
          "Single link operation",
          "VLAN trunking only",
          "Wireless connectivity"
        ],
        correctAnswer: 0,
        explanation: "EtherChannel combines multiple physical links into logical bundle."
      },
      {
        id: 18,
        moduleId: 3,
        question: "What is LACP?",
        options: [
          "Link Aggregation Control Protocol standard",
          "Local Area Control Protocol",
          "Link Access Control Protocol",
          "Local Aggregation Configuration Protocol"
        ],
        correctAnswer: 0,
        explanation: "LACP is the IEEE standard for dynamic link aggregation."
      },

      // Questions from Module 4
      {
        id: 19,
        moduleId: 4,
        question: "What does AAA framework include?",
        options: [
          "Authentication, Authorization, Accounting",
          "Access, Analysis, Assessment",
          "Administration, Automation, Auditing",
          "Authentication, Access, Administration"
        ],
        correctAnswer: 0,
        explanation: "AAA provides comprehensive access control and tracking."
      },
      {
        id: 20,
        moduleId: 4,
        question: "What is stateful firewall inspection?",
        options: [
          "Tracking connection states for decisions",
          "Only examining packet headers",
          "Ignoring connection information",
          "Blocking all traffic"
        ],
        correctAnswer: 0,
        explanation: "Stateful inspection understands and tracks communication sessions."
      },
      {
        id: 21,
        moduleId: 4,
        question: "What does NAC provide?",
        options: [
          "Endpoint security assessment before access",
          "Only basic password authentication",
          "Unrestricted network access",
          "Manual device configuration"
        ],
        correctAnswer: 0,
        explanation: "NAC ensures devices meet security standards before connecting."
      },
      {
        id: 22,
        moduleId: 4,
        question: "What is a DMZ?",
        options: [
          "Demilitarized Zone for public services",
          "Default management zone",
          "Direct monitoring zone",
          "Dynamic migration zone"
        ],
        correctAnswer: 0,
        explanation: "DMZ provides secure hosting for Internet-facing services."
      },
      {
        id: 23,
        moduleId: 4,
        question: "What does IPS stand for?",
        options: [
          "Intrusion Prevention System",
          "Internet Protocol Security",
          "Internal Protection System",
          "Intelligent Packet Switching"
        ],
        correctAnswer: 0,
        explanation: "IPS actively blocks detected threats in network traffic."
      },
      {
        id: 24,
        moduleId: 4,
        question: "What is signature-based detection?",
        options: [
          "Matching against known threat patterns",
          "Detecting behavioral anomalies",
          "Random threat identification",
          "Manual threat analysis"
        ],
        correctAnswer: 0,
        explanation: "Signature detection identifies known threats by their patterns."
      },

      // Questions from Module 5
      {
        id: 25,
        moduleId: 5,
        question: "What does 802.11ax provide?",
        options: [
          "Wi-Fi 6 with OFDMA and efficiency improvements",
          "Basic wireless connectivity only",
          "Only faster speeds without efficiency",
          "Outdated wireless standard"
        ],
        correctAnswer: 0,
        explanation: "Wi-Fi 6 improves performance in high-density environments."
      },
      {
        id: 26,
        moduleId: 5,
        question: "What is site survey planning?",
        options: [
          "Wireless coverage and capacity planning",
          "Only equipment purchasing",
          "Network cable installation",
          "Security policy creation"
        ],
        correctAnswer: 0,
        explanation: "Site surveys determine optimal access point placement."
      },
      {
        id: 27,
        moduleId: 5,
        question: "What does WPA3 improve?",
        options: [
          "Wireless security with stronger encryption",
          "Only connection speeds",
          "Basic authentication only",
          "Network management features"
        ],
        correctAnswer: 0,
        explanation: "WPA3 addresses vulnerabilities in previous wireless security standards."
      },
      {
        id: 28,
        moduleId: 5,
        question: "What is channel planning?",
        options: [
          "Assigning non-overlapping frequencies",
          "Random frequency selection",
          "Using same channels everywhere",
          "Ignoring interference issues"
        ],
        correctAnswer: 0,
        explanation: "Proper channel planning minimizes interference between access points."
      },
      {
        id: 29,
        moduleId: 5,
        question: "What does 802.1X provide for wireless?",
        options: [
          "Enterprise-grade authentication",
          "Basic open authentication",
          "No authentication required",
          "Simple password only"
        ],
        correctAnswer: 0,
        explanation: "802.1X integrates wireless with enterprise authentication systems."
      },
      {
        id: 30,
        moduleId: 5,
        question: "What is MIMO technology?",
        options: [
          "Multiple Input Multiple Output antennas",
          "Single antenna systems",
          "Manual input optimization",
          "Maximum output power"
        ],
        correctAnswer: 0,
        explanation: "MIMO uses multiple antennas to improve performance and reliability."
      },

      // Questions from Module 6
      {
        id: 31,
        moduleId: 6,
        question: "What does SNMP provide?",
        options: [
          "Network device monitoring and management",
          "Only configuration management",
          "Automated troubleshooting",
          "Security enforcement"
        ],
        correctAnswer: 0,
        explanation: "SNMP collects information and controls network devices."
      },
      {
        id: 32,
        moduleId: 6,
        question: "What is NetFlow used for?",
        options: [
          "Traffic flow analysis and accounting",
          "Only device configuration",
          "Security policy enforcement",
          "Automated scripting"
        ],
        correctAnswer: 0,
        explanation: "NetFlow provides detailed traffic statistics and analysis."
      },
      {
        id: 33,
        moduleId: 6,
        question: "Why implement configuration standards?",
        options: [
          "Consistency and easier management",
          "Random configurations",
          "Manual configuration only",
          "No configuration control"
        ],
        correctAnswer: 0,
        explanation: "Standards ensure predictable, maintainable network configurations."
      },
      {
        id: 34,
        moduleId: 6,
        question: "What is systematic troubleshooting?",
        options: [
          "Structured approach to problem resolution",
          "Random trial and error",
          "Immediate solution guessing",
          "Ignoring problems"
        ],
        correctAnswer: 0,
        explanation: "Systematic methods ensure thorough, efficient problem resolution."
      },
      {
        id: 35,
        moduleId: 6,
        question: "What does automation reduce?",
        options: [
          "Human error and manual effort",
          "Network performance",
          "Security levels",
          "Configuration complexity"
        ],
        correctAnswer: 0,
        explanation: "Automation improves consistency and efficiency."
      },
      {
        id: 36,
        moduleId: 6,
        question: "What is Infrastructure as Code?",
        options: [
          "Managing infrastructure through code",
          "Manual configuration only",
          "Hardware programming",
          "Network coding languages"
        ],
        correctAnswer: 0,
        explanation: "IaC treats infrastructure configuration as software code."
      },
      {
        id: 37,
        moduleId: 6,
        question: "What does configuration drift detection identify?",
        options: [
          "Unauthorized configuration changes",
          "Only authorized changes",
          "Network performance issues",
          "Security vulnerabilities"
        ],
        correctAnswer: 0,
        explanation: "Drift detection ensures configurations remain as intended."
      },
      {
        id: 38,
        moduleId: 6,
        question: "What are KPIs in network management?",
        options: [
          "Key Performance Indicators for measurement",
          "Only financial metrics",
          "Employee performance",
          "Equipment costs"
        ],
        correctAnswer: 0,
        explanation: "KPIs quantify network performance and reliability."
      },
      {
        id: 39,
        moduleId: 6,
        question: "What is root cause analysis?",
        options: [
          "Identifying underlying problem causes",
          "Only treating symptoms",
          "Ignoring problem sources",
          "Basic problem documentation"
        ],
        correctAnswer: 0,
        explanation: "Root cause analysis prevents problem recurrence."
      },
      {
        id: 40,
        moduleId: 6,
        question: "What does REST API enable?",
        options: [
          "Programmatic device control and automation",
          "Only manual configuration",
          "Basic monitoring only",
          "No device interaction"
        ],
        correctAnswer: 0,
        explanation: "REST APIs allow software to control network devices."
      }
    ]
  },

  // 4. DIPLOMA COMPLETION CERTIFICATE DATA
  diploma: {
    title: "Network Engineering Diploma",
    issuingOrganization: "Edusanna Academy",
    description: "This diploma certifies advanced knowledge and engineering competencies in network design, routing protocols, switching technologies, network security, wireless networking, and network management. Prepares for professional network engineering roles and industry certifications.",
    competencies: [
      "Advanced network design and architecture",
      "Enterprise routing protocols and implementation",
      "Switching technologies and VLAN management",
      "Comprehensive network security implementation",
      "Enterprise wireless network design and management",
      "Network operations, automation, and management"
    ],
    level: "Advanced Engineering",
    issueDate: new Date().toISOString().split('T')[0]
  }
};

export default networkEngineeringDiplomaCourse;
