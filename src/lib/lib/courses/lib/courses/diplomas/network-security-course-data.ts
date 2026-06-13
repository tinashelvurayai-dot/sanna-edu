// Network Security (Diploma) Course Content
// File: network-security-diploma.ts

export const networkSecurityDiploma = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "network-security-diploma",
  title: "Network Security (Diploma)",
  description: "Advanced network security diploma covering threat analysis, defense strategies, security architectures, and professional security operations. Prepares for security specialist roles.",
  duration: "12 weeks",
  timeCommitment: "8-10 hours per week",
  price: 18,
  icon: "🔒",
  badge: "Diploma",
  prerequisites: ["networking-certificate"], // Requires Networking Certificate first
  
  // 2. MODULE ARCHITECTURE (6 modules following Diploma template)
  modules: [
    {
      id: 1,
      title: "Advanced Threat Analysis",
      content: `# Module 1: Advanced Threat Analysis

## Modern Threat Landscape
Network security professionals must understand the evolving threat environment to implement effective defenses. Threats have become more sophisticated, targeted, and damaging.

## Advanced Threat Categories

### Advanced Persistent Threats (APTs)
- **Characteristics**: Long-term, targeted attacks by organized groups
- **Objectives**: Data theft, espionage, or infrastructure compromise
- **Methods**: Multiple attack vectors, careful planning, persistence
- **Examples**: Nation-state attacks, organized cybercrime

### Zero-Day Exploits
- **Definition**: Attacks targeting vulnerabilities unknown to software vendor
- **Challenge**: No patches or signatures available initially
- **Detection**: Behavioral analysis and anomaly detection required
- **Response**: Rapid patching and temporary mitigations

### Insider Threats
- **Types**: Malicious insiders, compromised accounts, careless employees
- **Detection**: User behavior analytics, access monitoring
- **Prevention**: Least privilege, separation of duties, monitoring
- **Response**: Incident response plans for internal incidents

### Supply Chain Attacks
- **Method**: Compromising software vendors or service providers
- **Impact**: Affects all customers of compromised provider
- **Examples**: Software updates with malicious code
- **Defense**: Vendor risk assessment, code verification

## Threat Intelligence
Systematic collection and analysis of threat information:

### Intelligence Sources
- **Open Source Intelligence (OSINT)**: Publicly available information
- **Commercial Feeds**: Paid threat intelligence services
- **Information Sharing**: Industry groups and government alerts
- **Internal Data**: Logs, incident reports, monitoring data

### Intelligence Analysis
- **Indicators of Compromise (IOCs)**: Artifacts observed in attacks
- **Tactics, Techniques, Procedures (TTPs)**: How adversaries operate
- **Threat Actor Attribution**: Identifying who is behind attacks
- **Risk Assessment**: Determining likelihood and impact

## Attack Vectors Analysis
Understanding how attacks enter networks:

### Common Entry Points
- **Phishing Emails**: Social engineering to deliver malware
- **Vulnerable Services**: Unpatched software with known flaws
- **Weak Authentication**: Compromised credentials or weak passwords
- **Third-Party Access**: Vendor connections with poor security

### Lateral Movement
How attackers spread within networks:
- **Credential Theft**: Stealing credentials for privileged accounts
- **Exploitation**: Using vulnerabilities to move between systems
- **Trust Relationships**: Abusing system trusts and permissions
- **Persistence Mechanisms**: Maintaining access after initial compromise

## Vulnerability Assessment
Systematic identification of security weaknesses:

### Assessment Methods
- **Automated Scanning**: Tools that identify known vulnerabilities
- **Manual Testing**: Expert analysis beyond automated tools
- **Penetration Testing**: Simulated attacks to test defenses
- **Code Review**: Analysis of application source code

### Risk Prioritization
- **CVSS Scoring**: Common Vulnerability Scoring System
- **Exploit Availability**: Are public exploits available?
- **Business Impact**: How critical is affected system?
- **Remediation Difficulty**: How hard to fix the vulnerability?

## Threat Modeling
Structured approach to identifying security requirements:

### Modeling Approaches
- **STRIDE**: Spoofing, Tampering, Repudiation, Information Disclosure, DoS, Elevation
- **DREAD**: Damage, Reproducibility, Exploitability, Affected Users, Discoverability
- **Attack Trees**: Visual representation of attack paths
- **Data Flow Diagrams**: How data moves through systems

### Model Implementation
- **Identify Assets**: What needs protection?
- **Define Threats**: What could go wrong?
- **Determine Countermeasures**: How to prevent or detect?
- **Validate Models**: Test against real-world scenarios

## Advanced Monitoring and Detection

### Behavioral Analytics
- **Baseline Establishment**: Normal behavior patterns
- **Anomaly Detection**: Identifying deviations from normal
- **Machine Learning**: Automated pattern recognition
- **User Entity Behavior Analytics (UEBA)**: Focus on user activities

### Threat Hunting
- **Proactive Search**: Looking for threats not detected by alerts
- **Hypothesis-Driven**: Starting with "what if" scenarios
- **Data Analysis**: Correlating multiple data sources
- **Continuous Process**: Regular hunting activities`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are Advanced Persistent Threats (APTs)?",
          options: [
            "Simple automated attacks",
            "Long-term, targeted attacks by organized groups",
            "Accidental security breaches",
            "Minor vulnerabilities in software"
          ],
          correctAnswer: 1,
          explanation: "APTs are sophisticated, long-term attacks typically conducted by organized groups with specific objectives."
        },
        {
          id: 2,
          question: "What is a zero-day exploit?",
          options: [
            "Attack using known vulnerabilities",
            "Attack targeting unknown vulnerabilities",
            "Attack happening at midnight",
            "Simple phishing attempt"
          ],
          correctAnswer: 1,
          explanation: "Zero-day exploits target vulnerabilities that are unknown to the software vendor, with no patches available."
        },
        {
          id: 3,
          question: "What does threat intelligence involve?",
          options: [
            "Only installing antivirus",
            "Systematic collection and analysis of threat information",
            "Changing passwords regularly",
            "Blocking all internet traffic"
          ],
          correctAnswer: 1,
          explanation: "Threat intelligence involves collecting, analyzing, and applying information about current and emerging threats."
        },
        {
          id: 4,
          question: "What are Indicators of Compromise (IOCs)?",
          options: [
            "Security policy documents",
            "Artifacts observed in cyber attacks",
            "Employee training materials",
            "Network bandwidth measurements"
          ],
          correctAnswer: 1,
          explanation: "IOCs are pieces of forensic data that identify potentially malicious activity on systems or networks."
        },
        {
          id: 5,
          question: "What is lateral movement in attacks?",
          options: [
            "Initial network entry",
            "Spreading within network after initial compromise",
            "Data exfiltration process",
            "Attack planning phase"
          ],
          correctAnswer: 1,
          explanation: "Lateral movement refers to techniques attackers use to move through a network after gaining initial access."
        },
        {
          id: 6,
          question: "What does STRIDE stand for in threat modeling?",
          options: [
            "Security Techniques for Risk Identification and Defense Evaluation",
            "Spoofing, Tampering, Repudiation, Information Disclosure, DoS, Elevation",
            "System Threat Response and Incident Defense Evaluation",
            "Standard Threat Identification and Defense Enumeration"
          ],
          correctAnswer: 1,
          explanation: "STRIDE is a threat modeling framework covering Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege."
        },
        {
          id: 7,
          question: "What is threat hunting?",
          options: [
            "Waiting for security alerts",
            "Proactive search for threats not detected by alerts",
            "Automated vulnerability scanning",
            "Basic firewall configuration"
          ],
          correctAnswer: 1,
          explanation: "Threat hunting involves proactively searching through networks to detect and isolate advanced threats."
        },
        {
          id: 8,
          question: "What are supply chain attacks?",
          options: [
            "Attacks on shipping companies",
            "Compromising software vendors or service providers",
            "Attacks using supply cables",
            "Inventory management system breaches"
          ],
          correctAnswer: 1,
          explanation: "Supply chain attacks target less-secure elements in the supply chain to compromise the final target."
        },
        {
          id: 9,
          question: "What is User Entity Behavior Analytics (UEBA)?",
          options: [
            "Network traffic analysis",
            "Analysis of user activities and behaviors",
            "System performance monitoring",
            "Database optimization"
          ],
          correctAnswer: 1,
          explanation: "UEBA uses analytics to identify insider threats, targeted attacks, and financial fraud by analyzing user behavior."
        },
        {
          id: 10,
          question: "What does CVSS stand for?",
          options: [
            "Common Vulnerability Scoring System",
            "Critical Vulnerability Security Standard",
            "Computer Virus Scanning System",
            "Cybersecurity Vulnerability Severity Scale"
          ],
          correctAnswer: 0,
          explanation: "CVSS provides a way to capture the principal characteristics of vulnerabilities and produce a numerical score."
        },
        {
          id: 11,
          question: "What are TTPs in threat intelligence?",
          options: [
            "Technical Training Programs",
            "Tactics, Techniques, and Procedures of adversaries",
            "Total Threat Protection Systems",
            "Time-Based Threat Protocols"
          ],
          correctAnswer: 1,
          explanation: "TTPs describe how threat actors operate, including their methods, tools, and attack patterns."
        },
        {
          id: 12,
          question: "What is the first step in threat modeling?",
          options: [
            "Implementing controls",
            "Identifying assets to protect",
            "Writing security policies",
            "Installing security software"
          ],
          correctAnswer: 1,
          explanation: "Threat modeling begins with identifying and understanding what assets need protection."
        },
        {
          id: 13,
          question: "What is OSINT?",
          options: [
            "Operating System Intelligence",
            "Open Source Intelligence from public sources",
            "Official Security Incident Notification",
            "Organizational Security Integration Testing"
          ],
          correctAnswer: 1,
          explanation: "OSINT refers to intelligence collected from publicly available sources for security purposes."
        },
        {
          id: 14,
          question: "What do behavioral analytics establish?",
          options: [
            "Security policy compliance",
            "Normal behavior patterns for anomaly detection",
            "Network bandwidth limits",
            "User access permissions"
          ],
          correctAnswer: 1,
          explanation: "Behavioral analytics establish baselines of normal activity to detect anomalous behavior."
        },
        {
          id: 15,
          question: "What are insider threats?",
          options: [
            "Only external hackers",
            "Threats from within organization including employees",
            "Natural disasters only",
            "Hardware failures"
          ],
          correctAnswer: 1,
          explanation: "Insider threats come from people within the organization, including employees, contractors, and partners."
        },
        {
          id: 16,
          question: "What is vulnerability assessment?",
          options: [
            "Only penetration testing",
            "Systematic identification of security weaknesses",
            "Employee background checks",
            "Network speed testing"
          ],
          correctAnswer: 1,
          explanation: "Vulnerability assessment systematically identifies, quantifies, and prioritizes vulnerabilities."
        },
        {
          id: 17,
          question: "What does DREAD stand for?",
          options: [
            "Detection, Response, Evaluation, Analysis, Documentation",
            "Damage, Reproducibility, Exploitability, Affected Users, Discoverability",
            "Defense, Risk, Evaluation, Assessment, Determination",
            "Data, Risk, Exploit, Attack, Damage"
          ],
          correctAnswer: 1,
          explanation: "DREAD is a risk assessment model for threats based on Damage, Reproducibility, Exploitability, Affected Users, and Discoverability."
        },
        {
          id: 18,
          question: "What is attack tree modeling?",
          options: [
            "Network topology mapping",
            "Visual representation of attack paths",
            "Tree-based file system",
            "Organizational chart for security team"
          ],
          correctAnswer: 1,
          explanation: "Attack trees provide a hierarchical diagram showing how an asset or target might be attacked."
        },
        {
          id: 19,
          question: "What is risk prioritization based on?",
          options: [
            "Only vulnerability severity",
            "Severity, exploit availability, business impact, remediation difficulty",
            "Only patch availability",
            "Only system age"
          ],
          correctAnswer: 1,
          explanation: "Risk prioritization considers multiple factors including severity, exploitability, business impact, and remediation difficulty."
        },
        {
          id: 20,
          question: "What is hypothesis-driven threat hunting?",
          options: [
            "Random network scanning",
            "Starting with 'what if' scenarios",
            "Waiting for user reports",
            "Automated alert response"
          ],
          correctAnswer: 1,
          explanation: "Hypothesis-driven hunting starts with specific scenarios or questions about potential threats."
        }
      ]
    },
    {
      id: 2,
      title: "Security Architecture and Design",
      content: `# Module 2: Security Architecture and Design

## Defense-in-Depth Architecture
Effective security requires multiple layers of protection, ensuring that if one control fails, others provide backup protection.

## Security Zones and Segmentation

### Network Segmentation
- **Purpose**: Limit lateral movement during breaches
- **Methods**: VLANs, firewalls, software-defined networking
- **Implementation**: Separate zones for different trust levels
- **Benefits**: Contain breaches, simplify monitoring, meet compliance

### Zero Trust Architecture
- **Principle**: "Never trust, always verify"
- **Components**: Identity verification, device health checking, least privilege
- **Implementation**: Micro-segmentation, continuous authentication
- **Benefits**: Reduced attack surface, better insider threat protection

## Secure Network Design Principles

### Perimeter Security
- **Firewalls**: Stateful inspection, next-generation capabilities
- **Intrusion Prevention Systems (IPS)**: Real-time attack blocking
- **Web Application Firewalls (WAF)**: Protect web applications
- **DMZ Design**: Secure zone for public-facing services

### Internal Security Controls
- **Network Access Control (NAC)**: Device authentication before network access
- **Endpoint Protection**: Advanced antivirus, EDR solutions
- **Data Loss Prevention (DLP)**: Monitor and prevent data exfiltration
- **Email Security**: Advanced threat protection for email

## Identity and Access Management (IAM)

### Authentication Methods
- **Multi-Factor Authentication (MFA)**: Multiple verification factors
- **Single Sign-On (SSO)**: Centralized authentication
- **Biometric Authentication**: Fingerprint, facial recognition
- **Certificate-Based Authentication**: Digital certificates

### Authorization Frameworks
- **Role-Based Access Control (RBAC)**: Access based on job roles
- **Attribute-Based Access Control (ABAC)**: Dynamic access decisions
- **Least Privilege Principle**: Minimum access necessary
- **Just-in-Time Access**: Temporary elevation when needed

## Cryptography in Network Security

### Encryption Protocols
- **TLS/SSL**: Secure communications over networks
- **IPsec**: Network layer encryption
- **Wireless Encryption**: WPA3 for Wi-Fi security
- **Database Encryption**: Protecting data at rest

### Key Management
- **Key Generation**: Secure random key creation
- **Key Distribution**: Secure delivery of cryptographic keys
- **Key Storage**: Hardware security modules (HSMs)
- **Key Rotation**: Regular key changes for security

## Secure Protocols and Services

### Secure Communication Protocols
- **SSH**: Secure remote access and file transfer
- **SFTP/SCP**: Secure file transfer protocols
- **HTTPS**: Secure web communications
- **DNSSEC**: Domain name system security extensions

### Secure Service Configuration
- **Hardening Guidelines**: Remove unnecessary services
- **Secure Defaults**: Start with most secure configurations
- **Configuration Management**: Track and manage changes
- **Compliance Checking**: Automated configuration validation

## Cloud Security Architecture

### Shared Responsibility Model
- **Provider Responsibilities**: Physical security, infrastructure
- **Customer Responsibilities**: Data, access management, configurations
- **Understanding Boundaries**: Knowing who secures what
- **Contract Considerations**: Security requirements in SLAs

### Cloud Security Controls
- **Virtual Network Security**: Cloud-native firewalls and security groups
- **Identity Federation**: Cloud IAM integration
- **Data Encryption**: Cloud storage encryption options
- **Monitoring and Logging**: Cloud-native security monitoring

## Physical Security Integration

### Data Center Security
- **Access Controls**: Biometric, card-based entry systems
- **Environmental Controls**: Fire suppression, temperature monitoring
- **Surveillance**: CCTV, security personnel
- **Asset Protection**: Rack locks, cable management

### Edge Location Security
- **Branch Office Security**: Smaller scale security measures
- **Remote Worker Security**: Home office considerations
- **Mobile Device Security**: Lost/stolen device protection
- **IoT Device Security**: Specialized security for IoT

## Security Architecture Documentation

### Design Documentation
- **Network Diagrams**: Current and proposed architectures
- **Data Flow Diagrams**: How data moves through systems
- **Security Control Matrix**: Mapping controls to requirements
- **Implementation Plans**: Step-by-step deployment guides

### Standards and Policies
- **Architecture Standards**: Design principles and patterns
- **Security Baselines**: Minimum security configurations
- **Compliance Requirements**: Regulatory and industry standards
- **Review Processes**: Architecture review and approval`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is defense-in-depth architecture?",
          options: [
            "Single strong firewall",
            "Multiple layers of security controls",
            "Only endpoint protection",
            "Basic password policy"
          ],
          correctAnswer: 1,
          explanation: "Defense-in-depth uses multiple, layered security controls so if one fails, others provide protection."
        },
        {
          id: 2,
          question: "What does Zero Trust architecture principle state?",
          options: [
            "Trust all internal traffic",
            "Never trust, always verify",
            "Trust but verify occasionally",
            "Only trust encrypted traffic"
          ],
          correctAnswer: 1,
          explanation: "Zero Trust assumes no implicit trust and requires continuous verification of all access requests."
        },
        {
          id: 3,
          question: "What is network segmentation purpose?",
          options: [
            "Increase network speed",
            "Limit lateral movement during breaches",
            "Reduce cable costs",
            "Simplify network diagrams"
          ],
          correctAnswer: 1,
          explanation: "Network segmentation divides networks into smaller zones to contain breaches and limit attacker movement."
        },
        {
          id: 4,
          question: "What does MFA stand for?",
          options: [
            "Multi-Function Authentication",
            "Multi-Factor Authentication",
            "Multiple File Access",
            "Managed Firewall Access"
          ],
          correctAnswer: 1,
          explanation: "MFA requires multiple verification factors for authentication, significantly improving security."
        },
        {
          id: 5,
          question: "What is RBAC?",
          options: [
            "Rule-Based Access Control",
            "Role-Based Access Control",
            "Risk-Based Access Control",
            "Resource-Based Access Control"
          ],
          correctAnswer: 1,
          explanation: "RBAC grants access based on job roles rather than individual user assignments."
        },
        {
          id: 6,
          question: "What does TLS provide?",
          options: [
            "Network segmentation",
            "Secure communications encryption",
            "User authentication only",
            "Malware detection"
          ],
          correctAnswer: 1,
          explanation: "TLS provides encryption, authentication, and integrity for network communications."
        },
        {
          id: 7,
          question: "What is a DMZ?",
          options: [
            "Demilitarized Zone for public-facing services",
            "Data Management Zone",
            "Default Monitoring Zone",
            "Direct Memory Zone"
          ],
          correctAnswer: 0,
          explanation: "A DMZ is a network segment that sits between internal networks and untrusted external networks."
        },
        {
          id: 8,
          question: "What does the shared responsibility model define?",
          options: [
            "Employee job roles",
            "Security responsibilities in cloud computing",
            "Team meeting schedules",
            "Budget allocation"
          ],
          correctAnswer: 1,
          explanation: "The shared responsibility model defines which security aspects are managed by cloud provider vs customer."
        },
        {
          id: 9,
          question: "What is least privilege principle?",
          options: [
            "Give administrators all access",
            "Minimum access necessary for tasks",
            "Equal access for all users",
            "No access restrictions"
          ],
          correctAnswer: 1,
          explanation: "Least privilege grants users only the minimum access necessary to perform their job functions."
        },
        {
          id: 10,
          question: "What does NAC stand for?",
          options: [
            "Network Access Control",
            "Network Administration Center",
            "National Access Code",
            "Network Assessment Checklist"
          ],
          correctAnswer: 0,
          explanation: "NAC controls device access to networks based on security policies and device health."
        },
        {
          id: 11,
          question: "What is micro-segmentation?",
          options: [
            "Large network zones",
            "Granular network segmentation down to workload level",
            "Microphone security",
            "Small firewall rules"
          ],
          correctAnswer: 1,
          explanation: "Micro-segmentation creates fine-grained security zones around individual workloads or applications."
        },
        {
          id: 12,
          question: "What does DLP prevent?",
          options: [
            "Network downtime",
            "Data exfiltration and loss",
            "User login attempts",
            "Email delivery"
          ],
          correctAnswer: 1,
          explanation: "DLP monitors and prevents unauthorized transmission of sensitive data outside the organization."
        },
        {
          id: 13,
          question: "What is SSO?",
          options: [
            "Single Sign-On for centralized authentication",
            "Super Secure Operations",
            "System Security Officer",
            "Secure Socket Organization"
          ],
          correctAnswer: 0,
          explanation: "SSO allows users to authenticate once and access multiple systems without re-entering credentials."
        },
        {
          id: 14,
          question: "What does ABAC consider for access decisions?",
          options: [
            "Only user identity",
            "Multiple attributes like role, time, location",
            "Only file type",
            "Only network location"
          ],
          correctAnswer: 1,
          explanation: "ABAC makes access decisions based on multiple attributes including user, resource, and environment characteristics."
        },
        {
          id: 15,
          question: "What are HSMs used for?",
          options: [
            "Network routing",
            "Secure cryptographic key storage",
            "User authentication",
            "Data backup"
          ],
          correctAnswer: 1,
          explanation: "HSMs are specialized hardware devices that securely generate, store, and manage cryptographic keys."
        },
        {
          id: 16,
          question: "What does DNSSEC provide?",
          options: [
            "Faster DNS resolution",
            "Authentication and integrity for DNS responses",
            "DNS load balancing",
            "DNS caching"
          ],
          correctAnswer: 1,
          explanation: "DNSSEC adds cryptographic signatures to DNS records to prevent spoofing and cache poisoning attacks."
        },
        {
          id: 17,
          question: "What is configuration hardening?",
          options: [
            "Making configurations more complex",
            "Removing unnecessary services and securing defaults",
            "Hardening server cases",
            "Increasing configuration flexibility"
          ],
          correctAnswer: 1,
          explanation: "Hardening involves securing systems by reducing attack surface through configuration changes."
        },
        {
          id: 18,
          question: "What is just-in-time access?",
          options: [
            "Permanent administrative access",
            "Temporary elevation when specifically needed",
            "Access during business hours only",
            "Access without approval"
          ],
          correctAnswer: 1,
          explanation: "Just-in-time access provides temporary, approved elevation of privileges for specific tasks."
        },
        {
          id: 19,
          question: "What does WAF protect?",
          options: [
            "Email servers",
            "Web applications from attacks",
            "Network cables",
            "User workstations"
          ],
          correctAnswer: 1,
          explanation: "WAFs monitor and filter HTTP traffic to protect web applications from various attacks."
        },
        {
          id: 20,
          question: "What is identity federation?",
          options: [
            "Creating multiple identities",
            "Linking identities across different systems",
            "Federal identity regulations",
            "Identity document creation"
          ],
          correctAnswer: 1,
          explanation: "Identity federation allows users to use the same identity across different systems or organizations."
        }
      ]
    },
    {
      id: 3,
      title: "Advanced Security Operations",
      content: `# Module 3: Advanced Security Operations

## Security Operations Center (SOC) Functions
Modern SOCs provide centralized security monitoring, analysis, and response capabilities for organizations of all sizes.

## Security Monitoring and Detection

### Security Information and Event Management (SIEM)
- **Data Collection**: Aggregating logs from multiple sources
- **Correlation**: Identifying relationships between events
- **Alerting**: Generating security alerts based on rules
- **Dashboards**: Real-time visibility into security posture

### Extended Detection and Response (XDR)
- **Integrated Approach**: Combining multiple security products
- **Cross-Layer Analysis**: Correlating endpoint, network, cloud data
- **Automated Response**: Built-in response capabilities
- **Threat Intelligence Integration**: Leveraging external threat data

## Incident Response Process

### Preparation Phase
- **Response Plans**: Documented procedures for different incidents
- **Team Preparation**: Trained personnel with defined roles
- **Tool Preparation**: Tools and systems ready for use
- **Communication Plans**: Internal and external communication procedures

### Identification Phase
- **Event Analysis**: Determining if event is security incident
- **Scope Determination**: Understanding what systems are affected
- **Impact Assessment**: Evaluating business impact
- **Documentation**: Recording initial findings and evidence

### Containment Phase
- **Short-term Containment**: Immediate actions to limit damage
- **Long-term Containment**: More permanent isolation measures
- **Evidence Preservation**: Collecting and protecting forensic evidence
- **Communication Updates**: Keeping stakeholders informed

### Eradication Phase
- **Root Cause Analysis**: Determining how incident occurred
- **Malware Removal**: Eliminating malicious code
- **Vulnerability Remediation**: Fixing exploited weaknesses
- **System Restoration**: Returning systems to secure state

### Recovery Phase
- **System Validation**: Ensuring systems are clean and secure
- **Monitoring**: Enhanced monitoring after recovery
- **Business Process Restoration**: Returning to normal operations
- **Lessons Learned**: Documenting improvements for future

## Forensic Analysis

### Digital Forensics Process
- **Evidence Collection**: Proper acquisition of digital evidence
- **Chain of Custody**: Documenting evidence handling
- **Analysis Techniques**: Timeline analysis, artifact examination
- **Reporting**: Detailed forensic investigation reports

### Memory Forensics
- **Volatile Data**: Analyzing RAM contents for artifacts
- **Process Analysis**: Examining running processes and connections
- **Malware Detection**: Identifying memory-resident malware
- **Tools**: Specialized memory analysis tools

### Network Forensics
- **Packet Capture Analysis**: Examining network traffic
- **Flow Data Analysis**: Analyzing network flow records
- **Intrusion Detection**: Identifying attack patterns in traffic
- **Reconstruction**: Rebuilding events from network data

## Threat Hunting Operations

### Hunting Methodologies
- **Hypothesis-Based**: Starting with specific threat scenarios
- **Indicator-Based**: Searching for known IOCs
- **Analytics-Driven**: Using statistical and machine learning models
- **Intel-Driven**: Following threat intelligence leads

### Hunting Tools and Techniques
- **Endpoint Detection and Response (EDR)**: Detailed endpoint visibility
- **Network Traffic Analysis**: Deep packet inspection tools
- **Log Analysis**: Advanced log search and correlation
- **Custom Scripts**: Automated hunting queries and scripts

## Security Automation and Orchestration

### Security Orchestration, Automation, and Response (SOAR)
- **Playbook Automation**: Automated response workflows
- **Integration**: Connecting different security tools
- **Case Management**: Tracking security incidents and investigations
- **Reporting**: Automated reporting and metrics

### Automation Benefits
- **Faster Response**: Reduced time to detect and respond
- **Consistency**: Standardized response procedures
- **Resource Optimization**: Freeing analysts for complex tasks
- **Scalability**: Handling increasing volumes of alerts

## Compliance Monitoring

### Regulatory Compliance
- **Requirements Mapping**: Mapping controls to regulations
- **Evidence Collection**: Gathering compliance evidence
- **Audit Support**: Preparing for external audits
- **Reporting**: Compliance status reporting

### Continuous Compliance
- **Automated Checks**: Regular automated compliance testing
- **Configuration Monitoring**: Tracking configuration changes
- **Policy Enforcement**: Automated policy enforcement
- **Remediation Tracking**: Tracking compliance issue resolution

## Security Metrics and Reporting

### Key Performance Indicators (KPIs)
- **Detection Metrics**: Time to detect, detection rate
- **Response Metrics**: Time to respond, containment time
- **Prevention Metrics**: Attack prevention effectiveness
- **Efficiency Metrics**: Analyst productivity, automation rate

### Executive Reporting
- **Risk Metrics**: Business risk quantification
- **Investment Metrics**: Security ROI and effectiveness
- **Trend Analysis**: Security posture trends over time
- **Board Reporting**: High-level security status for leadership`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does SIEM stand for?",
          options: [
            "Security Incident and Event Management",
            "System Information and Event Monitoring",
            "Security Information and Event Management",
            "System Integration and Event Management"
          ],
          correctAnswer: 2,
          explanation: "SIEM provides real-time analysis of security alerts generated by applications and network hardware."
        },
        {
          id: 2,
          question: "What is the first phase of incident response?",
          options: [
            "Containment",
            "Preparation",
            "Eradication",
            "Recovery"
          ],
          correctAnswer: 1,
          explanation: "Preparation is the first phase, involving planning, training, and tool preparation before incidents occur."
        },
        {
          id: 3,
          question: "What does XDR provide?",
          options: [
            "Only endpoint protection",
            "Integrated detection and response across multiple layers",
            "Network monitoring only",
            "Basic antivirus scanning"
          ],
          correctAnswer: 1,
          explanation: "XDR integrates multiple security products for cross-layer detection, investigation, and response."
        },
        {
          id: 4,
          question: "What is chain of custody in forensics?",
          options: [
            "Evidence storage location",
            "Documentation of evidence handling",
            "Courtroom procedures",
            "Police investigation methods"
          ],
          correctAnswer: 1,
          explanation: "Chain of custody documents who handled evidence, when, and for what purpose to maintain integrity."
        },
        {
          id: 5,
          question: "What does SOAR automate?",
          options: [
            "Only alert generation",
            "Security workflows and response playbooks",
            "Network configuration",
            "User training"
          ],
          correctAnswer: 1,
          explanation: "SOAR automates security operations workflows including investigation, response, and reporting."
        },
        {
          id: 6,
          question: "What is hypothesis-based threat hunting?",
          options: [
            "Random network scanning",
            "Starting with specific threat scenarios",
            "Waiting for alerts",
            "Automated vulnerability scanning"
          ],
          correctAnswer: 1,
          explanation: "Hypothesis-based hunting starts with specific questions about potential threats in the environment."
        },
        {
          id: 7,
          question: "What phase involves root cause analysis?",
          options: [
            "Identification",
            "Eradication",
            "Containment",
            "Preparation"
          ],
          correctAnswer: 1,
          explanation: "Eradication phase involves determining root cause and removing all traces of the incident."
        },
        {
          id: 8,
          question: "What does memory forensics analyze?",
          options: [
            "Hard drive contents",
            "RAM contents for volatile artifacts",
            "Network configurations",
            "User documents"
          ],
          correctAnswer: 1,
          explanation: "Memory forensics examines RAM contents to find evidence that disappears when power is lost."
        },
        {
          id: 9,
          question: "What is continuous compliance?",
          options: [
            "Annual audit only",
            "Ongoing automated compliance monitoring",
            "Manual checklist review",
            "Regulatory reading"
          ],
          correctAnswer: 1,
          explanation: "Continuous compliance uses automation to constantly monitor and enforce compliance requirements."
        },
        {
          id: 10,
          question: "What are security KPIs?",
          options: [
            "Key Problem Indicators",
            "Key Performance Indicators for security",
            "Keyboard Performance Indicators",
            "Knowledge Practice Items"
          ],
          correctAnswer: 1,
          explanation: "Security KPIs measure the performance and effectiveness of security operations and controls."
        },
        {
          id: 11,
          question: "What does EDR provide?",
          options: [
            "Network traffic blocking",
            "Detailed endpoint visibility and response",
            "Email filtering",
            "Web application protection"
          ],
          correctAnswer: 1,
          explanation: "EDR provides continuous monitoring and response capabilities for endpoint security threats."
        },
        {
          id: 12,
          question: "What is containment in incident response?",
          options: [
            "Finding root cause",
            "Limiting damage and preventing spread",
            "Removing malware",
            "Reporting to management"
          ],
          correctAnswer: 1,
          explanation: "Containment involves immediate actions to limit the impact and prevent the incident from spreading."
        },
        {
          id: 13,
          question: "What does network forensics examine?",
          options: [
            "Only firewall logs",
            "Network traffic and packet data",
            "User behavior only",
            "System configurations"
          ],
          correctAnswer: 1,
          explanation: "Network forensics analyzes network traffic, packets, and flow data to investigate security incidents."
        },
        {
          id: 14,
          question: "What are security playbooks?",
          options: [
            "Security training manuals",
            "Documented response procedures for specific incidents",
            "Game strategy books",
            "Policy documents"
          ],
          correctAnswer: 1,
          explanation: "Playbooks provide step-by-step procedures for responding to specific types of security incidents."
        },
        {
          id: 15,
          question: "What is indicator-based hunting?",
          options: [
            "Random searching",
            "Searching for known Indicators of Compromise",
            "Guessing about threats",
            "Manual log review"
          ],
          correctAnswer: 1,
          explanation: "Indicator-based hunting searches for known IOCs that suggest malicious activity."
        },
        {
          id: 16,
          question: "What phase includes lessons learned?",
          options: [
            "Preparation",
            "Recovery",
            "Containment",
            "Identification"
          ],
          correctAnswer: 1,
          explanation: "Recovery phase includes documenting lessons learned to improve future incident response."
        },
        {
          id: 17,
          question: "What does automated response provide?",
          options: [
            "Human decision replacement",
            "Faster, consistent initial response actions",
            "Complete security automation",
            "No human oversight needed"
          ],
          correctAnswer: 1,
          explanation: "Automated response provides fast, consistent initial actions while maintaining human oversight."
        },
        {
          id: 18,
          question: "What is evidence preservation?",
          options: [
            "Destroying evidence",
            "Protecting and documenting digital evidence",
            "Ignoring evidence",
            "Sharing evidence publicly"
          ],
          correctAnswer: 1,
          explanation: "Evidence preservation ensures digital evidence is collected, protected, and documented properly."
        },
        {
          id: 19,
          question: "What are compliance requirements mapping?",
          options: [
            "Geographic mapping",
            "Linking security controls to regulations",
            "Network topology mapping",
            "Employee location tracking"
          ],
          correctAnswer: 1,
          explanation: "Requirements mapping connects specific security controls to regulatory or standard requirements."
        },
        {
          id: 20,
          question: "What does executive reporting communicate?",
          options: [
            "Technical details only",
            "Business risk and security posture",
            "Daily operational tasks",
            "Individual alert information"
          ],
          correctAnswer: 1,
          explanation: "Executive reporting translates technical security information into business risk and strategic insights."
        }
      ]
    },
    {
      id: 4,
      title: "Cryptography and PKI",
      content: `# Module 4: Cryptography and PKI

## Cryptography Fundamentals
Cryptography provides confidentiality, integrity, authentication, and non-repudiation for digital communications and data storage.

## Symmetric Cryptography

### Symmetric Encryption Algorithms
- **AES (Advanced Encryption Standard)**: Current standard, 128-256 bit keys
- **DES/3DES**: Older standards, mostly deprecated
- **ChaCha20**: Modern stream cipher for performance
- **Blowfish/Twofish**: Older block ciphers

### Symmetric Key Management
- **Key Generation**: Secure random number generation
- **Key Distribution**: Secure delivery of shared secret keys
- **Key Storage**: Protection of symmetric keys
- **Key Rotation**: Regular key changes

## Asymmetric Cryptography

### Public Key Algorithms
- **RSA**: Widely used for encryption and signatures
- **ECC (Elliptic Curve Cryptography)**: Smaller keys, same security
- **Diffie-Hellman**: Key exchange protocol
- **DSA**: Digital Signature Algorithm

### Public Key Infrastructure (PKI)

#### Certificate Authorities (CAs)
- **Root CAs**: Top-level trust anchors
- **Intermediate CAs**: Issued by root CAs, issue end certificates
- **Registration Authorities**: Verify certificate requests
- **Validation Authorities**: Check certificate validity

#### Digital Certificates
- **X.509 Standard**: Format for digital certificates
- **Certificate Contents**: Public key, identity, issuer, validity period
- **Certificate Chains**: Hierarchical trust relationships
- **Certificate Validation**: Checking revocation and validity

## Cryptographic Hash Functions

### Hash Algorithm Properties
- **Deterministic**: Same input always produces same output
- **Fast Computation**: Efficient hash calculation
- **Pre-image Resistance**: Can't find input from output
- **Collision Resistance**: Hard to find two inputs with same output

### Common Hash Algorithms
- **SHA-2 Family**: SHA-256, SHA-512 (current standard)
- **SHA-3**: Latest NIST standard
- **MD5**: Broken, should not be used
- **SHA-1**: Deprecated due to vulnerabilities

## Digital Signatures

### Signature Process
- **Signing**: Hash message, encrypt hash with private key
- **Verification**: Decrypt with public key, compare hashes
- **Non-repudiation**: Signer cannot deny signing
- **Integrity**: Any message changes invalidate signature

### Signature Standards
- **RSA-PSS**: Probabilistic Signature Scheme
- **ECDSA**: Elliptic Curve Digital Signature Algorithm
- **EdDSA**: Edwards-curve Digital Signature Algorithm

## Cryptographic Protocols

### TLS/SSL Protocol
- **Handshake Protocol**: Negotiate parameters, authenticate, establish keys
- **Record Protocol**: Encrypt and authenticate application data
- **Cipher Suites**: Combinations of algorithms for TLS
- **Perfect Forward Secrecy**: Session keys not derived from long-term keys

### IPsec Protocol Suite
- **Authentication Header (AH)**: Authentication and integrity
- **Encapsulating Security Payload (ESP)**: Encryption and authentication
- **Security Associations (SA)**: Parameters for secure communications
- **Internet Key Exchange (IKE)**: Automated key management

## Key Management Systems

### Hardware Security Modules (HSMs)
- **Physical Security**: Tamper-resistant hardware
- **Key Generation**: Secure random key generation
- **Key Storage**: Protection against extraction
- **Cryptographic Operations**: Perform operations without exposing keys

### Key Management Standards
- **NIST SP 800-57**: Key management recommendations
- **PKCS Standards**: Public Key Cryptography Standards
- **KMIP**: Key Management Interoperability Protocol
- **OASIS Standards**: Various key management standards

## Cryptography in Applications

### Disk Encryption
- **Full Disk Encryption**: Encrypt entire storage devices
- **File-Based Encryption**: Encrypt individual files
- **TPM Integration**: Hardware-based key storage
- **Boot Process Protection**: Secure system startup

### Database Encryption
- **Transparent Data Encryption**: Automatic encryption at rest
- **Column-Level Encryption**: Encrypt specific sensitive columns
- **Application-Level Encryption**: Encryption before database storage
- **Key Management**: Secure database encryption key handling

### Email Encryption
- **S/MIME**: Secure/Multipurpose Internet Mail Extensions
- **PGP/GPG**: Pretty Good Privacy/GNU Privacy Guard
- **Email Gateway Encryption**: Automatic encryption for compliance
- **Webmail Encryption**: Browser-based email encryption

## Quantum Computing Threats

### Quantum Cryptography Risks
- **Shor's Algorithm**: Breaks RSA and ECC
- **Grover's Algorithm**: Speeds up brute force attacks
- **Timeline Estimates**: When quantum computers become threats
- **Migration Planning**: Transition to post-quantum cryptography

### Post-Quantum Cryptography
- **Lattice-Based**: Cryptography based on lattice problems
- **Code-Based**: Based on error-correcting codes
- **Multivariate-Based**: Based on multivariate equations
- **Hash-Based**: Digital signatures based on hash functions
- **NIST Standardization**: Ongoing post-quantum algorithm selection

## Cryptography Implementation Considerations

### Performance Optimization
- **Hardware Acceleration**: Specialized cryptographic processors
- **Algorithm Selection**: Choosing appropriate algorithms for use case
- **Session Resumption**: Reusing cryptographic sessions
- **Caching Strategies**: Efficient key and session caching

### Compliance Requirements
- **FIPS 140-2/3**: Cryptographic module validation
- **Common Criteria**: International security certification
- **Industry Standards**: PCI-DSS, HIPAA, GDPR requirements
- **Export Controls**: Restrictions on cryptographic technology`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does AES stand for?",
          options: [
            "Advanced Encryption Standard",
            "Automated Encryption System",
            "Advanced Electronic Security",
            "Automated Security Encryption"
          ],
          correctAnswer: 0,
          explanation: "AES is the current standard symmetric encryption algorithm adopted worldwide."
        },
        {
          id: 2,
          question: "What is the main advantage of ECC over RSA?",
          options: [
            "Easier to implement",
            "Smaller keys for same security level",
            "Faster for all operations",
            "More widely supported"
          ],
          correctAnswer: 1,
          explanation: "ECC provides equivalent security with much smaller key sizes compared to RSA."
        },
        {
          id: 3,
          question: "What does PKI stand for?",
          options: [
            "Private Key Infrastructure",
            "Public Key Infrastructure",
            "Personal Key Identification",
            "Protected Key Integration"
          ],
          correctAnswer: 1,
          explanation: "PKI provides a framework for managing digital certificates and public-key encryption."
        },
        {
          id: 4,
          question: "What property ensures hash function outputs appear random?",
          options: [
            "Deterministic",
            "Avalanche effect",
            "Fast computation",
            "Fixed output size"
          ],
          correctAnswer: 1,
          explanation: "Avalanche effect means small input changes produce significantly different outputs."
        },
        {
          id: 5,
          question: "What provides non-repudiation in digital signatures?",
          options: [
            "Only the signer has private key",
            "Fast signature generation",
            "Small signature size",
            "Easy verification"
          ],
          correctAnswer: 0,
          explanation: "Non-repudiation comes from the fact that only the signer possesses the private key used to create signatures."
        },
        {
          id: 6,
          question: "What does TLS handshake protocol establish?",
          options: [
            "Only encryption method",
            "Parameters, authentication, and session keys",
            "Only server identity",
            "Only client identity"
          ],
          correctAnswer: 1,
          explanation: "TLS handshake negotiates cryptographic parameters, authenticates parties, and establishes session keys."
        },
        {
          id: 7,
          question: "What are HSMs used for?",
          options: [
            "Network routing",
            "Secure cryptographic key management",
            "User authentication",
            "Data backup"
          ],
          correctAnswer: 1,
          explanation: "HSMs provide secure key generation, storage, and cryptographic operations in tamper-resistant hardware."
        },
        {
          id: 8,
          question: "What does PFS ensure in TLS?",
          options: [
            "Fast connection establishment",
            "Session keys not derived from long-term keys",
            "Permanent encryption",
            "Forward compatibility"
          ],
          correctAnswer: 1,
          explanation: "Perfect Forward Secrecy ensures compromise of long-term keys doesn't compromise past session keys."
        },
        {
          id: 9,
          question: "What algorithm threatens current asymmetric cryptography?",
          options: [
            "Grover's algorithm",
            "Shor's algorithm",
            "AES algorithm",
            "RSA algorithm"
          ],
          correctAnswer: 1,
          explanation: "Shor's algorithm, when run on quantum computers, can break RSA and ECC cryptography."
        },
        {
          id: 10,
          question: "What is X.509?",
          options: [
            "Network protocol",
            "Digital certificate format standard",
            "Encryption algorithm",
            "Key exchange protocol"
          ],
          correctAnswer: 1,
          explanation: "X.509 is the standard format for public key certificates used in many Internet protocols."
        },
        {
          id: 11,
          question: "What does IPsec ESP provide?",
          options: [
            "Only authentication",
            "Encryption and authentication",
            "Only key exchange",
            "Only integrity checking"
          ],
          correctAnswer: 1,
          explanation: "ESP provides confidentiality (encryption), authentication, and integrity for IP packets."
        },
        {
          id: 12,
          question: "What is collision resistance in hash functions?",
          options: [
            "Same input produces same output",
            "Hard to find two inputs with same output",
            "Fast computation",
            "Fixed output size"
          ],
          correctAnswer: 1,
          explanation: "Collision resistance makes it computationally infeasible to find two different inputs with the same hash output."
        },
        {
          id: 13,
          question: "What does S/MIME provide for email?",
          options: [
            "Only spam filtering",
            "Encryption and digital signatures",
            "Only attachment compression",
            "Only email formatting"
          ],
          correctAnswer: 1,
          explanation: "S/MIME provides encryption for confidentiality and digital signatures for authentication/integrity."
        },
        {
          id: 14,
          question: "What are post-quantum cryptography candidates based on?",
          options: [
            "Only larger key sizes",
            "Different mathematical problems resistant to quantum attacks",
            "Faster computation",
            "Simpler algorithms"
          ],
          correctAnswer: 1,
          explanation: "Post-quantum algorithms are based on mathematical problems believed to be hard even for quantum computers."
        },
        {
          id: 15,
          question: "What does FIPS 140-2 validate?",
          options: [
            "Network configurations",
            "Cryptographic modules",
            "User training programs",
            "Security policies"
          ],
          correctAnswer: 1,
          explanation: "FIPS 140-2 is a U.S. government standard for validating cryptographic modules."
        },
        {
          id: 16,
          question: "What is certificate chain validation?",
          options: [
            "Checking certificate format",
            "Verifying trust from root CA through intermediate to end certificate",
            "Checking certificate expiration only",
            "Verifying certificate owner identity only"
          ],
          correctAnswer: 1,
          explanation: "Chain validation verifies the complete trust path from a trusted root CA to the end entity certificate."
        },
        {
          id: 17,
          question: "What does transparent data encryption provide?",
          options: [
            "Manual encryption process",
            "Automatic encryption at rest without application changes",
            "Only network encryption",
            "Only file header encryption"
          ],
          correctAnswer: 1,
          explanation: "TDE automatically encrypts database files at rest, transparent to applications accessing the data."
        },
        {
          id: 18,
          question: "What is key rotation?",
          options: [
            "Turning physical keys",
            "Regularly changing cryptographic keys",
            "Rotating key storage media",
            "Changing key algorithms"
          ],
          correctAnswer: 1,
          explanation: "Key rotation involves periodically replacing cryptographic keys to limit damage if keys are compromised."
        },
        {
          id: 19,
          question: "What does KMIP standardize?",
          options: [
            "Network protocols",
            "Key management operations and messaging",
            "Certificate formats",
            "Encryption algorithms"
          ],
          correctAnswer: 1,
          explanation: "KMIP provides a standardized protocol for communication between key management systems and cryptographic clients."
        },
        {
          id: 20,
          question: "What does ECDSA provide?",
          options: [
            "Only encryption",
            "Digital signatures using elliptic curve cryptography",
            "Key exchange only",
            "Hash functions"
          ],
          correctAnswer: 1,
          explanation: "ECDSA provides digital signature functionality using elliptic curve cryptography for efficiency."
        }
      ]
    },
    {
      id: 5,
      title: "Cloud and IoT Security",
      content: `# Module 5: Cloud and IoT Security

## Cloud Security Fundamentals
Cloud computing introduces unique security challenges and opportunities that require specialized approaches beyond traditional on-premises security.

## Cloud Service Models Security

### Infrastructure as a Service (IaaS)
- **Customer Responsibility**: OS, applications, data, identity
- **Provider Responsibility**: Physical, network, hypervisor
- **Security Focus**: Virtual machine security, network segmentation
- **Key Controls**: Virtual firewalls, encryption, access management

### Platform as a Service (PaaS)
- **Customer Responsibility**: Applications, data, identity
- **Provider Responsibility**: OS, runtime, middleware
- **Security Focus**: Application security, data protection
- **Key Controls**: Application firewalls, database security, API security

### Software as a Service (SaaS)
- **Customer Responsibility**: Data, identity, configuration
- **Provider Responsibility**: Application, infrastructure
- **Security Focus**: Data protection, access control
- **Key Controls**: Data encryption, SSO, activity monitoring

## Cloud Deployment Models

### Public Cloud Security
- **Multi-tenancy**: Security isolation between customers
- **Shared Responsibility**: Clear division of security duties
- **Compliance**: Provider compliance certifications
- **Visibility**: Limited visibility into underlying infrastructure

### Private Cloud Security
- **Dedicated Infrastructure**: No multi-tenancy concerns
- **Greater Control**: More control over security configurations
- **Higher Cost**: More expensive than public cloud
- **Management Burden**: Customer manages more security aspects

### Hybrid Cloud Security
- **Integration Challenges**: Security across different environments
- **Consistent Policies**: Unified security policies across clouds
- **Data Movement**: Secure data transfer between environments
- **Management Complexity**: Managing security in multiple locations

## Cloud Security Controls

### Identity and Access Management (IAM)
- **Cloud IAM Features**: Fine-grained permissions, temporary credentials
- **Federation**: Integration with on-premises identity systems
- **Role Management**: Cloud-native RBAC implementations
- **Privileged Access**: Special handling for administrative access

### Data Protection in Cloud
- **Encryption Options**: Server-side, client-side, bring-your-own-key
- **Key Management**: Cloud key management services
- **Data Classification**: Identifying sensitive data in cloud
- **Data Loss Prevention**: Cloud DLP services

### Network Security in Cloud
- **Virtual Networks**: Software-defined networking in cloud
- **Security Groups**: Stateful firewall rules for cloud resources
- **Web Application Firewalls**: Cloud-native WAF services
- **DDoS Protection**: Cloud provider DDoS mitigation

### Logging and Monitoring
- **Cloud Trail/Audit Logs**: Comprehensive activity logging
- **Monitoring Services**: Real-time monitoring and alerting
- **SIEM Integration**: Feeding cloud logs to security monitoring
- **Anomaly Detection**: Cloud-native behavioral analytics

## IoT Security Challenges

### IoT Device Characteristics
- **Resource Constraints**: Limited processing, memory, power
- **Long Lifecycles**: Devices deployed for many years
- **Physical Access**: Often deployed in uncontrolled locations
- **Diverse Ecosystems**: Many manufacturers, standards, protocols

### IoT Security Architecture

#### Device Security
- **Secure Boot**: Verified firmware startup
- **Hardware Security**: Trusted Platform Modules, secure elements
- **Firmware Updates**: Secure update mechanisms
- **Device Identity**: Unique, cryptographically verifiable identities

#### Communication Security
- **Transport Encryption**: TLS, DTLS for device communications
- **Protocol Security**: Secure implementations of IoT protocols
- **Network Segmentation**: Isolating IoT devices on separate networks
- **Message Authentication**: Ensuring message integrity and origin

#### Cloud/Backend Security
- **API Security**: Secure APIs for device communication
- **Data Protection**: Encryption of IoT data at rest and in transit
- **Access Control**: Fine-grained access to device data and controls
- **Analytics Security**: Protecting processed IoT data

## IoT Protocol Security

### Common IoT Protocols
- **MQTT**: Message Queuing Telemetry Transport
- **CoAP**: Constrained Application Protocol
- **HTTP/2**: For less constrained devices
- **LoRaWAN, Zigbee, Z-Wave**: Wireless IoT protocols

### Security Considerations
- **Authentication**: Device authentication to networks and services
- **Encryption**: Protecting data in transit
- **Message Integrity**: Ensuring messages aren't altered
- **Replay Protection**: Preventing message replay attacks

## Cloud and IoT Compliance

### Regulatory Considerations
- **Data Sovereignty**: Data storage location requirements
- **Industry Regulations**: Healthcare, financial, privacy regulations
- **International Standards**: ISO 27017, ISO 27018 for cloud
- **Certifications**: SOC 2, ISO 27001 for cloud providers

### Compliance Management
- **Continuous Compliance**: Automated compliance checking
- **Evidence Collection**: Gathering compliance evidence from cloud
- **Audit Support**: Supporting internal and external audits
- **Reporting**: Compliance status reporting for cloud environments

## Incident Response in Cloud/IoT

### Cloud Incident Response
- **Provider Coordination**: Working with cloud provider during incidents
- **Forensic Limitations**: Limited access to underlying infrastructure
- **Data Preservation**: Preserving cloud evidence for investigation
- **Shared Responsibility**: Understanding who handles what during incidents

### IoT Incident Response
- **Physical Access**: May need physical access to compromised devices
- **Device Forensics**: Specialized forensic techniques for IoT devices
- **Fleet Management**: Managing responses across many devices
- **Update Deployment**: Rapid security update deployment

## Security Automation for Cloud/IoT

### Infrastructure as Code Security
- **Security Scanning**: Scanning IaC templates for misconfigurations
- **Policy as Code**: Defining security policies in code
- **Automated Deployment**: Secure, repeatable infrastructure deployment
- **Drift Detection**: Detecting configuration changes from defined state

### IoT Device Management
- **Automated Provisioning**: Secure device onboarding
- **Remote Management**: Secure remote management capabilities
- **Update Automation**: Automated security update deployment
- **Monitoring Automation**: Automated security monitoring and alerting`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the shared responsibility model in cloud?",
          options: [
            "Equal responsibility for all security",
            "Division of security responsibilities between provider and customer",
            "Provider responsible for all security",
            "Customer responsible for all security"
          ],
          correctAnswer: 1,
          explanation: "The shared responsibility model clearly divides which security aspects are managed by cloud provider vs customer."
        },
        {
          id: 2,
          question: "In IaaS, what is typically customer responsibility?",
          options: [
            "Physical security",
            "Operating system and application security",
            "Network infrastructure",
            "Data center cooling"
          ],
          correctAnswer: 1,
          explanation: "In IaaS, customers are responsible for security of OS, applications, data, and access management."
        },
        {
          id: 3,
          question: "What is a key IoT security challenge?",
          options: [
            "Too much processing power",
            "Resource constraints on devices",
            "Easy physical access control",
            "Short device lifecycles"
          ],
          correctAnswer: 1,
          explanation: "IoT devices often have limited processing, memory, and power, making security implementations challenging."
        },
        {
          id: 4,
          question: "What does secure boot provide for IoT devices?",
          options: [
            "Fast startup",
            "Verified firmware integrity at startup",
            "Automatic updates",
            "User authentication"
          ],
          correctAnswer: 1,
          explanation: "Secure boot ensures only authorized, untampered firmware can run on IoT devices."
        },
        {
          id: 5,
          question: "What are cloud security groups?",
          options: [
            "User permission groups",
            "Stateful firewall rules for cloud resources",
            "Physical security teams",
            "Compliance groups"
          ],
          correctAnswer: 1,
          explanation: "Security groups act as virtual firewalls controlling traffic to and from cloud resources."
        },
        {
          id: 6,
          question: "What is multi-tenancy in cloud?",
          options: [
            "Multiple cloud providers",
            "Multiple customers sharing infrastructure",
            "Multiple applications",
            "Multiple data centers"
          ],
          correctAnswer: 1,
          explanation: "Multi-tenancy allows multiple customers to share physical infrastructure while maintaining isolation."
        },
        {
          id: 7,
          question: "What does BYOK stand for in cloud encryption?",
          options: [
            "Build Your Own Key",
            "Bring Your Own Key for encryption control",
            "Backup Your Own Key",
            "Basic Your Own Key"
          ],
          correctAnswer: 1,
          explanation: "BYOK allows customers to provide and manage their own encryption keys in cloud environments."
        },
        {
          id: 8,
          question: "What is MQTT commonly used for?",
          options: [
            "Web browsing",
            "IoT device communications",
            "Email transmission",
            "File sharing"
          ],
          correctAnswer: 1,
          explanation: "MQTT is a lightweight messaging protocol commonly used in IoT applications."
        },
        {
          id: 9,
          question: "What does Infrastructure as Code (IaC) enable?",
          options: [
            "Manual infrastructure configuration",
            "Automated, repeatable infrastructure deployment",
            "Code-free infrastructure",
            "Physical infrastructure programming"
          ],
          correctAnswer: 1,
          explanation: "IaC allows infrastructure to be defined and managed through code for consistency and automation."
        },
        {
          id: 10,
          question: "What is data sovereignty concern in cloud?",
          options: [
            "Data ownership",
            "Data storage location and jurisdiction",
            "Data size limitations",
            "Data format standards"
          ],
          correctAnswer: 1,
          explanation: "Data sovereignty concerns where data is physically stored and which laws apply to it."
        },
        {
          id: 11,
          question: "In SaaS model, what is customer typically responsible for?",
          options: [
            "Application security",
            "Data protection and access management",
            "Infrastructure security",
            "Platform security"
          ],
          correctAnswer: 1,
          explanation: "In SaaS, customers are primarily responsible for their data and how they manage access to it."
        },
        {
          id: 12,
          question: "What does a TPM provide for IoT devices?",
          options: [
            "Temperature monitoring",
            "Hardware-based security for cryptographic operations",
            "Power management",
            "Network connectivity"
          ],
          correctAnswer: 1,
          explanation: "TPMs provide secure cryptographic key storage and operations in hardware."
        },
        {
          id: 13,
          question: "What are virtual networks in cloud?",
          options: [
            "Physical network cables",
            "Software-defined network isolation",
            "Internet connections",
            "Wireless networks"
          ],
          correctAnswer: 1,
          explanation: "Virtual networks provide isolated network environments in cloud through software configuration."
        },
        {
          id: 14,
          question: "What is device identity important for in IoT?",
          options: [
            "Device color",
            "Cryptographically verifiable device identification",
            "Device manufacturing date",
            "Device size"
          ],
          correctAnswer: 1,
          explanation: "Strong device identity allows authentication and authorization of IoT devices in networks."
        },
        {
          id: 15,
          question: "What does cloud DLP provide?",
          options: [
            "Data loading protection",
            "Data loss prevention for cloud data",
            "Data location planning",
            "Data logging protection"
          ],
          correctAnswer: 1,
          explanation: "Cloud DLP services help discover, classify, and protect sensitive data in cloud environments."
        },
        {
          id: 16,
          question: "What is hybrid cloud security challenge?",
          options: [
            "Only using one cloud",
            "Maintaining consistent security across different environments",
            "No security needed",
            "Only physical security"
          ],
          correctAnswer: 1,
          explanation: "Hybrid clouds require consistent security policies and controls across different infrastructure types."
        },
        {
          id: 17,
          question: "What does secure firmware update ensure?",
          options: [
            "Fast updates",
            "Authenticity and integrity of firmware updates",
            "Automatic updates only",
            "User notification"
          ],
          correctAnswer: 1,
          explanation: "Secure firmware updates verify that updates are authentic and haven't been tampered with."
        },
        {
          id: 18,
          question: "What is policy as code?",
          options: [
            "Written security policies",
            "Security policies defined and enforced through code",
            "Policy documents only",
            "Manual policy enforcement"
          ],
          correctAnswer: 1,
          explanation: "Policy as code allows security policies to be defined, versioned, and enforced automatically through code."
        },
        {
          id: 19,
          question: "What does ISO 27017 provide?",
          options: [
            "Manufacturing standards",
            "Cloud-specific security control guidelines",
            "Network cabling standards",
            "Software development guidelines"
          ],
          correctAnswer: 1,
          explanation: "ISO 27017 provides guidelines for information security controls in cloud computing environments."
        },
        {
          id: 20,
          question: "What is drift detection in cloud security?",
          options: [
            "Climate monitoring",
            "Detecting configuration changes from defined state",
            "Network speed changes",
            "User behavior changes"
          ],
          correctAnswer: 1,
          explanation: "Drift detection identifies when actual configurations differ from defined secure configurations."
        }
      ]
    },
    {
      id: 6,
      title: "Security Governance and Risk Management",
      content: `# Module 6: Security Governance and Risk Management

## Security Governance Framework
Effective security requires proper governance structures that align security activities with business objectives and ensure accountability.

## Security Governance Components

### Governance Structure
- **Board Oversight**: Director-level responsibility for security
- **Security Committee**: Cross-functional security governance body
- **Executive Sponsorship**: C-level support for security initiatives
- **Clear Roles**: Defined security roles and responsibilities

### Policy Framework
- **Security Policies**: High-level statements of management intent
- **Standards**: Mandatory requirements supporting policies
- **Guidelines**: Recommended approaches for implementation
- **Procedures**: Step-by-step instructions for specific tasks

## Risk Management Process

### Risk Assessment
- **Asset Identification**: What needs protection?
- **Threat Identification**: What could harm assets?
- **Vulnerability Assessment**: Weaknesses that could be exploited
- **Impact Analysis**: Consequences if threats exploit vulnerabilities
- **Risk Calculation**: Likelihood × Impact = Risk Level

### Risk Treatment Options
- **Risk Avoidance**: Not undertaking risky activity
- **Risk Mitigation**: Implementing controls to reduce risk
- **Risk Transfer**: Shifting risk to another party (insurance)
- **Risk Acceptance**: Accepting risk when cost of control exceeds benefit

### Risk Monitoring
- **Continuous Monitoring**: Ongoing assessment of risk posture
- **Key Risk Indicators**: Metrics showing risk levels
- **Risk Register**: Documented inventory of risks and treatments
- **Regular Review**: Periodic reassessment of risks

## Compliance Management

### Regulatory Landscape
- **Industry Regulations**: PCI-DSS, HIPAA, GLBA, SOX
- **Privacy Regulations**: GDPR, CCPA, PIPEDA
- **International Standards**: ISO 27001, NIST CSF, CIS Controls
- **Regional Requirements**: Country-specific security laws

### Compliance Program Elements
- **Requirements Mapping**: Linking controls to regulations
- **Control Implementation**: Deploying required security controls
- **Evidence Collection**: Gathering proof of compliance
- **Audit Management**: Preparing for and supporting audits
- **Remediation Tracking**: Addressing compliance gaps

## Security Metrics and Reporting

### Security Performance Metrics
- **Technical Metrics**: System availability, patch compliance, vulnerability counts
- **Process Metrics**: Incident response times, change management success
- **Compliance Metrics**: Control implementation rates, audit findings
- **Business Metrics**: Financial impact, risk reduction ROI

### Executive Reporting
- **Risk Reports**: Current risk posture and trends
- **Investment Reports**: Security spending and effectiveness
- **Incident Reports**: Significant security incidents and responses
- **Compliance Reports**: Status against regulatory requirements

## Security Awareness and Training

### Training Program Development
- **Role-Based Training**: Different content for different roles
- **Regular Updates**: Keeping content current with threats
- **Engaging Formats**: Interactive, relevant training materials
- **Measurement**: Testing knowledge retention and behavior change

### Culture Development
- **Leadership Example**: Executives modeling security behaviors
- **Recognition Programs**: Rewarding good security practices
- **Communication**: Regular security awareness communications
- **Integration**: Incorporating security into business processes

## Third-Party Risk Management

### Vendor Assessment
- **Due Diligence**: Evaluating vendor security capabilities
- **Contract Requirements**: Security requirements in contracts
- **Continuous Monitoring**: Ongoing assessment of vendor security
- **Audit Rights**: Right to audit vendor security controls

### Supply Chain Security
- **Component Verification**: Ensuring supply chain integrity
- **Transparency Requirements**: Understanding supply chain risks
- **Incident Response**: Coordinating with vendors during incidents
- **Alternative Sourcing**: Backup suppliers for critical components

## Business Continuity and Disaster Recovery

### Business Impact Analysis
- **Critical Functions**: Identifying essential business operations
- **Recovery Objectives**: RTO (Recovery Time Objective), RPO (Recovery Point Objective)
- **Dependencies**: Systems and resources needed for recovery
- **Prioritization**: Order of recovery based on business impact

### Continuity Planning
- **Response Plans**: Procedures for different disruption scenarios
- **Resource Allocation**: People, technology, facilities for recovery
- **Communication Plans**: Internal and external communication procedures
- **Testing and Exercises**: Regular testing of recovery capabilities

## Security Budget and Resource Management

### Budget Justification
- **Risk-Based Allocation**: Funding based on risk reduction
- **ROI Calculation**: Demonstrating security investment value
- **Comparative Analysis**: Benchmarking against industry peers
- **Multi-year Planning**: Long-term security investment planning

### Resource Optimization
- **Staff Development**: Training and career paths for security staff
- **Technology Rationalization**: Consolidating and optimizing security tools
- **Process Improvement**: Streamlining security processes
- **Automation**: Implementing automation to increase efficiency

## Legal and Ethical Considerations

### Legal Requirements
- **Data Protection Laws**: Requirements for personal data handling
- **Breach Notification**: Legal obligations to report breaches
- **Intellectual Property**: Protecting company and customer IP
- **Contract Law**: Security requirements in business contracts

### Ethical Considerations
- **Privacy Protection**: Respecting individual privacy rights
- **Transparency**: Being open about security practices
- **Accountability**: Taking responsibility for security failures
- **Professional Ethics**: Following security professional codes of conduct

## Continuous Improvement

### Maturity Models
- **Capability Maturity**: Assessing security program maturity
- **Benchmarking**: Comparing against standards and peers
- **Gap Analysis**: Identifying areas for improvement
- **Roadmap Development**: Planning security program evolution

### Feedback Mechanisms
- **Lessons Learned**: Applying insights from incidents and exercises
- **Stakeholder Feedback**: Gathering input from business units
- **Industry Learning**: Incorporating external best practices
- **Innovation Adoption**: Embracing new security technologies and approaches`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is security governance?",
          options: [
            "Only technical controls",
            "Framework ensuring security aligns with business objectives",
            "Only firewall configuration",
            "Only incident response"
          ],
          correctAnswer: 1,
          explanation: "Security governance provides the structure, policies, and oversight to ensure security supports business goals."
        },
        {
          id: 2,
          question: "What is risk calculation formula?",
          options: [
            "Risk = Threat + Vulnerability",
            "Risk = Likelihood × Impact",
            "Risk = Asset × Threat",
            "Risk = Control × Vulnerability"
          ],
          correctAnswer: 1,
          explanation: "Risk is typically calculated as the product of likelihood (probability) and impact (consequence)."
        },
        {
          id: 3,
          question: "What does RTO stand for?",
          options: [
            "Recovery Time Objective - maximum acceptable downtime",
            "Return to Operations",
            "Real Time Operations",
            "Risk Treatment Option"
          ],
          correctAnswer: 0,
          explanation: "RTO is the maximum acceptable time for restoring business functions after a disruption."
        },
        {
          id: 4,
          question: "What is third-party risk management?",
          options: [
            "Managing internal employee risks",
            "Assessing and managing risks from vendors and partners",
            "Risk management software",
            "Third-party insurance only"
          ],
          correctAnswer: 1,
          explanation: "Third-party risk management addresses security risks introduced by vendors, suppliers, and partners."
        },
        {
          id: 5,
          question: "What does GDPR regulate?",
          options: [
            "Network speeds",
            "Protection of personal data in EU",
            "Software development",
            "Hardware manufacturing"
          ],
          correctAnswer: 1,
          explanation: "GDPR sets requirements for processing and protecting personal data of EU residents."
        },
        {
          id: 6,
          question: "What is risk mitigation?",
          options: [
            "Avoiding all risks",
            "Implementing controls to reduce risk",
            "Transferring all risk",
            "Ignoring risks"
          ],
          correctAnswer: 1,
          explanation: "Risk mitigation involves implementing security controls to reduce the likelihood or impact of risks."
        },
        {
          id: 7,
          question: "What are security policies?",
          options: [
            "Technical configuration guides",
            "High-level statements of management intent",
            "Step-by-step procedures",
            "Software installation instructions"
          ],
          correctAnswer: 1,
          explanation: "Security policies are high-level statements that define management's security expectations and intentions."
        },
        {
          id: 8,
          question: "What does PCI-DSS regulate?",
          options: [
            "Payment card data security",
            "Healthcare data",
            "Government data",
            "Educational data"
          ],
          correctAnswer: 0,
          explanation: "PCI-DSS sets security standards for organizations that handle payment card information."
        },
        {
          id: 9,
          question: "What is a risk register?",
          options: [
            "Risk management software",
            "Documented inventory of risks and treatments",
            "Risk assessment team",
            "Risk insurance policy"
          ],
          correctAnswer: 1,
          explanation: "A risk register documents identified risks, their assessment, and planned treatment actions."
        },
        {
          id: 10,
          question: "What is business impact analysis?",
          options: [
            "Financial audit",
            "Identifying critical functions and recovery requirements",
            "Market analysis",
            "Competitor analysis"
          ],
          correctAnswer: 1,
          explanation: "BIA identifies critical business functions and determines recovery requirements for disruptions."
        },
        {
          id: 11,
          question: "What does ISO 27001 provide?",
          options: [
            "Software development standards",
            "Information security management system framework",
            "Network cabling standards",
            "Hardware specifications"
          ],
          correctAnswer: 1,
          explanation: "ISO 27001 provides requirements for establishing, implementing, and improving information security management systems."
        },
        {
          id: 12,
          question: "What is risk acceptance?",
          options: [
            "Implementing all possible controls",
            "Accepting risk when control cost exceeds benefit",
            "Transferring all risk",
            "Ignoring all risks"
          ],
          correctAnswer: 1,
          explanation: "Risk acceptance occurs when an organization decides to accept a risk after determining controls are not cost-effective."
        },
        {
          id: 13,
          question: "What are KRIs?",
          options: [
            "Key Result Indicators for performance",
            "Key Risk Indicators showing risk levels",
            "Key Reporting Items",
            "Key Response Indicators"
          ],
          correctAnswer: 1,
          explanation: "KRIs are metrics that provide early warning of increasing risk exposure."
        },
        {
          id: 14,
          question: "What does RPO stand for?",
          options: [
            "Recovery Point Objective - maximum data loss acceptable",
            "Return Process Order",
            "Risk Prevention Objective",
            "Response Planning Objective"
          ],
          correctAnswer: 0,
          explanation: "RPO determines the maximum acceptable amount of data loss measured in time."
        },
        {
          id: 15,
          question: "What is due diligence in third-party risk?",
          options: [
            "Payment processing",
            "Evaluating vendor security capabilities before engagement",
            "Contract signing only",
            "Price negotiation"
          ],
          correctAnswer: 1,
          explanation: "Due diligence involves assessing a vendor's security posture before entering into a business relationship."
        },
        {
          id: 16,
          question: "What does NIST CSF provide?",
          options: [
            "Chemical safety standards",
            "Cybersecurity framework for risk management",
            "Network design standards",
            "Software testing standards"
          ],
          correctAnswer: 1,
          explanation: "NIST Cybersecurity Framework provides a risk-based approach to managing cybersecurity risk."
        },
        {
          id: 17,
          question: "What is security awareness training goal?",
          options: [
            "Only technical skill development",
            "Changing security behaviors and building culture",
            "Only policy reading",
            "Only compliance checking"
          ],
          correctAnswer: 1,
          explanation: "Effective security awareness training aims to change behaviors and build a security-conscious culture."
        },
        {
          id: 18,
          question: "What is continuous monitoring in risk management?",
          options: [
            "Annual risk assessment",
            "Ongoing assessment of risk posture",
            "Network monitoring only",
            "Employee surveillance"
          ],
          correctAnswer: 1,
          explanation: "Continuous monitoring involves regularly assessing risks rather than just periodic assessments."
        },
        {
          id: 19,
          question: "What are CIS Controls?",
          options: [
            "Computer interface standards",
            "Prioritized cybersecurity best practices",
            "Network cable standards",
            "Software licensing controls"
          ],
          correctAnswer: 1,
          explanation: "CIS Controls provide a prioritized set of actions to defend against common cyber attacks."
        },
        {
          id: 20,
          question: "What is maturity model purpose?",
          options: [
            "Age assessment",
            "Assessing security program development level",
            "Employee maturity evaluation",
            "Software version tracking"
          ],
          correctAnswer: 1,
          explanation: "Maturity models help organizations assess current capabilities and plan improvements."
        }
      ]
    }
  ],

  // FINAL EXAM (40 questions covering all 6 modules)
  finalExam: {
    title: "Network Security Diploma Final Examination",
    description: "Comprehensive exam covering all 6 modules of the Network Security Diploma course",
    passingScore: 75,
    questions: [
      {
        id: 1,
        question: "What are Advanced Persistent Threats (APTs)?",
        options: [
          "Simple automated attacks",
          "Long-term, targeted attacks by organized groups",
          "Accidental security breaches",
          "Minor vulnerabilities"
        ],
        correctAnswer: 1,
        explanation: "APTs are sophisticated, long-term attacks typically conducted by organized groups."
      },
      {
        id: 2,
        question: "What is Zero Trust architecture principle?",
        options: [
          "Trust all internal traffic",
          "Never trust, always verify",
          "Trust but verify occasionally",
          "Only trust encrypted traffic"
        ],
        correctAnswer: 1,
        explanation: "Zero Trust assumes no implicit trust and requires continuous verification."
      },
      {
        id: 3,
        question: "What does SIEM stand for?",
        options: [
          "System Information and Event Monitoring",
          "Security Information and Event Management",
          "Security Incident and Event Management",
          "System Integration and Event Management"
        ],
        correctAnswer: 2,
        explanation: "SIEM provides real-time analysis of security alerts from applications and network hardware."
      },
      {
        id: 4,
        question: "What does AES stand for?",
        options: [
          "Advanced Encryption Standard",
          "Automated Encryption System",
          "Advanced Electronic Security",
          "Automated Security Encryption"
        ],
        correctAnswer: 0,
        explanation: "AES is the current standard symmetric encryption algorithm."
      },
      {
        id: 5,
        question: "What is shared responsibility model in cloud?",
        options: [
          "Equal responsibility for all security",
          "Division of security responsibilities between provider and customer",
          "Provider responsible for all security",
          "Customer responsible for all security"
        ],
        correctAnswer: 1,
        explanation: "Shared responsibility model divides security duties between cloud provider and customer."
      },
      {
        id: 6,
        question: "What is security governance?",
        options: [
          "Only technical controls",
          "Framework ensuring security aligns with business objectives",
          "Only firewall configuration",
          "Only incident response"
        ],
        correctAnswer: 1,
        explanation: "Security governance provides structure and oversight for security aligned with business goals."
      },
      {
        id: 7,
        question: "What is a zero-day exploit?",
        options: [
          "Attack using known vulnerabilities",
          "Attack targeting unknown vulnerabilities",
          "Attack happening at midnight",
          "Simple phishing attempt"
        ],
        correctAnswer: 1,
        explanation: "Zero-day exploits target vulnerabilities unknown to software vendor."
      },
      {
        id: 8,
        question: "What does MFA stand for?",
        options: [
          "Multi-Function Authentication",
          "Multi-Factor Authentication",
          "Multiple File Access",
          "Managed Firewall Access"
        ],
        correctAnswer: 1,
        explanation: "MFA requires multiple verification factors for authentication."
      },
      {
        id: 9,
        question: "What is first phase of incident response?",
        options: [
          "Containment",
          "Preparation",
          "Eradication",
          "Recovery"
        ],
        correctAnswer: 1,
        explanation: "Preparation involves planning and training before incidents occur."
      },
      {
        id: 10,
        question: "What is main advantage of ECC over RSA?",
        options: [
          "Easier to implement",
          "Smaller keys for same security level",
          "Faster for all operations",
          "More widely supported"
        ],
        correctAnswer: 1,
        explanation: "ECC provides equivalent security with much smaller key sizes."
      },
      {
        id: 11,
        question: "What is key IoT security challenge?",
        options: [
          "Too much processing power",
          "Resource constraints on devices",
          "Easy physical access control",
          "Short device lifecycles"
        ],
        correctAnswer: 1,
        explanation: "IoT devices often have limited processing, memory, and power."
      },
      {
        id: 12,
        question: "What is risk calculation formula?",
        options: [
          "Risk = Threat + Vulnerability",
          "Risk = Likelihood × Impact",
          "Risk = Asset × Threat",
          "Risk = Control × Vulnerability"
        ],
        correctAnswer: 1,
        explanation: "Risk is calculated as likelihood multiplied by impact."
      },
      {
        id: 13,
        question: "What are Indicators of Compromise (IOCs)?",
        options: [
          "Security policy documents",
          "Artifacts observed in cyber attacks",
          "Employee training materials",
          "Network bandwidth measurements"
        ],
        correctAnswer: 1,
        explanation: "IOCs are forensic data identifying potentially malicious activity."
      },
      {
        id: 14,
        question: "What is network segmentation purpose?",
        options: [
          "Increase network speed",
          "Limit lateral movement during breaches",
          "Reduce cable costs",
          "Simplify network diagrams"
        ],
        correctAnswer: 1,
        explanation: "Network segmentation contains breaches and limits attacker movement."
      },
      {
        id: 15,
        question: "What does XDR provide?",
        options: [
          "Only endpoint protection",
          "Integrated detection and response across multiple layers",
          "Network monitoring only",
          "Basic antivirus scanning"
        ],
        correctAnswer: 1,
        explanation: "XDR integrates multiple security products for cross-layer detection."
      },
      {
        id: 16,
        question: "What does PKI stand for?",
        options: [
          "Private Key Infrastructure",
          "Public Key Infrastructure",
          "Personal Key Identification",
          "Protected Key Integration"
        ],
        correctAnswer: 1,
        explanation: "PKI manages digital certificates and public-key encryption."
      },
      {
        id: 17,
        question: "What does secure boot provide for IoT?",
        options: [
          "Fast startup",
          "Verified firmware integrity at startup",
          "Automatic updates",
          "User authentication"
        ],
        correctAnswer: 1,
        explanation: "Secure boot ensures only authorized firmware runs on devices."
      },
      {
        id: 18,
        question: "What does RTO stand for?",
        options: [
          "Recovery Time Objective - maximum acceptable downtime",
          "Return to Operations",
          "Real Time Operations",
          "Risk Treatment Option"
        ],
        correctAnswer: 0,
        explanation: "RTO is maximum acceptable time for restoring business functions."
      },
      {
        id: 19,
        question: "What is threat intelligence?",
        options: [
          "Only installing antivirus",
          "Systematic collection and analysis of threat information",
          "Changing passwords regularly",
          "Blocking all internet traffic"
        ],
        correctAnswer: 1,
        explanation: "Threat intelligence involves collecting and analyzing threat information."
      },
      {
        id: 20,
        question: "What is RBAC?",
        options: [
          "Rule-Based Access Control",
          "Role-Based Access Control",
          "Risk-Based Access Control",
          "Resource-Based Access Control"
        ],
        correctAnswer: 1,
        explanation: "RBAC grants access based on job roles rather than individual assignments."
      },
      {
        id: 21,
        question: "What is chain of custody in forensics?",
        options: [
          "Evidence storage location",
          "Documentation of evidence handling",
          "Courtroom procedures",
          "Police investigation methods"
        ],
        correctAnswer: 1,
        explanation: "Chain of custody documents evidence handling to maintain integrity."
      },
      {
        id: 22,
        question: "What property ensures hash outputs appear random?",
        options: [
          "Deterministic",
          "Avalanche effect",
          "Fast computation",
          "Fixed output size"
        ],
        correctAnswer: 1,
        explanation: "Avalanche effect means small input changes produce different outputs."
      },
      {
        id: 23,
        question: "What are cloud security groups?",
        options: [
          "User permission groups",
          "Stateful firewall rules for cloud resources",
          "Physical security teams",
          "Compliance groups"
        ],
        correctAnswer: 1,
        explanation: "Security groups act as virtual firewalls for cloud resources."
      },
      {
        id: 24,
        question: "What is third-party risk management?",
        options: [
          "Managing internal employee risks",
          "Assessing and managing risks from vendors",
          "Risk management software",
          "Third-party insurance only"
        ],
        correctAnswer: 1,
        explanation: "Third-party risk management addresses risks from vendors and partners."
      },
      {
        id: 25,
        question: "What is lateral movement in attacks?",
        options: [
          "Initial network entry",
          "Spreading within network after initial compromise",
          "Data exfiltration process",
          "Attack planning phase"
        ],
        correctAnswer: 1,
        explanation: "Lateral movement refers to attackers moving through network after access."
      },
      {
        id: 26,
        question: "What does TLS provide?",
        options: [
          "Network segmentation",
          "Secure communications encryption",
          "User authentication only",
          "Malware detection"
        ],
        correctAnswer: 1,
        explanation: "TLS provides encryption, authentication, and integrity for communications."
      },
      {
        id: 27,
        question: "What does SOAR automate?",
        options: [
          "Only alert generation",
          "Security workflows and response playbooks",
          "Network configuration",
          "User training"
        ],
        correctAnswer: 1,
        explanation: "SOAR automates security operations workflows and response."
      },
      {
        id: 28,
        question: "What does non-repudiation provide in signatures?",
        options: [
          "Only the signer has private key",
          "Fast signature generation",
          "Small signature size",
          "Easy verification"
        ],
        correctAnswer: 0,
        explanation: "Non-repudiation comes from signer's unique possession of private key."
      },
      {
        id: 29,
        question: "What is multi-tenancy in cloud?",
        options: [
          "Multiple cloud providers",
          "Multiple customers sharing infrastructure",
          "Multiple applications",
          "Multiple data centers"
        ],
        correctAnswer: 1,
        explanation: "Multi-tenancy allows multiple customers to share infrastructure."
      },
      {
        id: 30,
        question: "What does GDPR regulate?",
        options: [
          "Network speeds",
          "Protection of personal data in EU",
          "Software development",
          "Hardware manufacturing"
        ],
        correctAnswer: 1,
        explanation: "GDPR sets requirements for processing EU residents' personal data."
      },
      {
        id: 31,
        question: "What does STRIDE stand for?",
        options: [
          "Security Techniques for Risk Identification",
          "Spoofing, Tampering, Repudiation, Information Disclosure, DoS, Elevation",
          "System Threat Response and Incident Defense",
          "Standard Threat Identification"
        ],
        correctAnswer: 1,
        explanation: "STRIDE is a threat modeling framework covering six threat categories."
      },
      {
        id: 32,
        question: "What is a DMZ?",
        options: [
          "Demilitarized Zone for public-facing services",
          "Data Management Zone",
          "Default Monitoring Zone",
          "Direct Memory Zone"
        ],
        correctAnswer: 0,
        explanation: "DMZ sits between internal networks and untrusted external networks."
      },
      {
        id: 33,
        question: "What is hypothesis-based threat hunting?",
        options: [
          "Random network scanning",
          "Starting with specific threat scenarios",
          "Waiting for alerts",
          "Automated vulnerability scanning"
        ],
        correctAnswer: 1,
        explanation: "Hypothesis-based hunting starts with specific threat scenarios."
      },
      {
        id: 34,
        question: "What does PFS ensure in TLS?",
        options: [
          "Fast connection establishment",
          "Session keys not derived from long-term keys",
          "Permanent encryption",
          "Forward compatibility"
        ],
        correctAnswer: 1,
        explanation: "PFS ensures compromise of long-term keys doesn't compromise past sessions."
      },
      {
        id: 35,
        question: "What is BYOK in cloud encryption?",
        options: [
          "Build Your Own Key",
          "Bring Your Own Key for encryption control",
          "Backup Your Own Key",
          "Basic Your Own Key"
        ],
        correctAnswer: 1,
        explanation: "BYOK allows customers to provide their own encryption keys."
      },
      {
        id: 36,
        question: "What is risk mitigation?",
        options: [
          "Avoiding all risks",
          "Implementing controls to reduce risk",
          "Transferring all risk",
          "Ignoring risks"
        ],
        correctAnswer: 1,
        explanation: "Risk mitigation implements controls to reduce likelihood or impact."
      },
      {
        id: 37,
        question: "What is threat hunting?",
        options: [
          "Waiting for security alerts",
          "Proactive search for threats not detected by alerts",
          "Automated vulnerability scanning",
          "Basic firewall configuration"
        ],
        correctAnswer: 1,
        explanation: "Threat hunting proactively searches for advanced threats."
      },
      {
        id: 38,
        question: "What does X.509 define?",
        options: [
          "Network protocol",
          "Digital certificate format standard",
          "Encryption algorithm",
          "Key exchange protocol"
        ],
        correctAnswer: 1,
        explanation: "X.509 is the standard format for public key certificates."
      },
      {
        id: 39,
        question: "What is MQTT used for?",
        options: [
          "Web browsing",
          "IoT device communications",
          "Email transmission",
          "File sharing"
        ],
        correctAnswer: 1,
        explanation: "MQTT is a lightweight messaging protocol for IoT applications."
      },
      {
        id: 40,
        question: "What are security policies?",
        options: [
          "Technical configuration guides",
          "High-level statements of management intent",
          "Step-by-step procedures",
          "Software installation instructions"
        ],
        correctAnswer: 1,
        explanation: "Security policies define management's security expectations and intentions."
      }
    ]
  }
};

export default networkSecurityDiploma;
