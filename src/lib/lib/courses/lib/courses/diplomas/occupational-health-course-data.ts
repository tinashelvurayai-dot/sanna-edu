export const occupationalHealthDiplomaCourse = {
  // ==================== COURSE METADATA ====================
  id: "occupational-health-diploma",
  title: "Occupational Health (Diploma)",
  description: "Advanced occupational health management, exposure assessment, health surveillance, and workplace wellness programs. Learn to manage occupational diseases, conduct health risk assessments, and implement comprehensive workplace health programs.",
  duration: "10 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  icon: "🏥",
  badge: "Diploma",
  prerequisites: ["industrial-safety-certificate"],
  
  // ==================== MODULE STRUCTURE ====================
  modules: [
    // ==================== MODULE 1 ====================
    {
      id: 1,
      title: "Advanced Occupational Health Concepts",
      content: `
## **Comprehensive Workplace Health Management**

Occupational health goes beyond safety to address physical, mental, and social well-being of workers. This advanced module covers the holistic approach to worker health management.

### **1. Occupational Health Evolution**
- **Industrial Hygiene Era**: Focus on physical hazards and exposures
- **Ergonomics Integration**: Workplace design for health and efficiency
- **Psychosocial Health**: Mental health and workplace stress management
- **Wellness Movement**: Proactive health promotion programs
- **Total Worker Health**: Integrated approach combining protection and promotion
- **Global Standards**: International occupational health frameworks

### **2. Health vs. Safety Distinctions**
- **Safety Focus**: Preventing acute injuries and accidents
- **Health Focus**: Preventing chronic illnesses and diseases
- **Exposure Pathways**: Inhalation, ingestion, skin absorption, injection
- **Latency Periods**: Time between exposure and disease manifestation
- **Cumulative Effects**: Long-term exposure consequences
- **Synergistic Effects**: Combined exposure impacts

### **3. Occupational Health Management Systems**
- **OHSAS 18001/ISO 45001**: International occupational health standards
- **Health Risk Assessment**: Systematic evaluation of health hazards
- **Health Surveillance Programs**: Ongoing worker health monitoring
- **Medical Surveillance**: Clinical monitoring of at-risk workers
- **Health Promotion**: Workplace wellness initiatives
- **Return-to-Work Programs**: Managing worker recovery and reintegration

### **Real-World Application**
Multinational corporations implement ISO 45001 systems to manage occupational health across global operations, while healthcare organizations develop total worker health programs addressing both physical safety and mental wellbeing for healthcare professionals.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What era focused on physical hazards and exposures?",
          options: ["Wellness Movement", "Industrial Hygiene Era", "Psychosocial Health", "Ergonomics Integration"],
          correctAnswer: 1,
          explanation: "Industrial Hygiene Era focused on measuring and controlling physical workplace hazards."
        },
        {
          id: 2,
          question: "What approach combines protection and promotion?",
          options: ["Industrial Hygiene", "Total Worker Health", "Safety Only", "Medical Surveillance"],
          correctAnswer: 1,
          explanation: "Total Worker Health integrates traditional protection with health promotion."
        },
        {
          id: 3,
          question: "What prevents chronic illnesses and diseases?",
          options: ["Safety Focus", "Health Focus", "Accident Prevention", "Emergency Response"],
          correctAnswer: 1,
          explanation: "Occupational health focuses on preventing work-related diseases and chronic conditions."
        },
        {
          id: 4,
          question: "What is the international occupational health standard?",
          options: ["ISO 9001", "ISO 45001", "ISO 14001", "ISO 31000"],
          correctAnswer: 1,
          explanation: "ISO 45001 is the international standard for occupational health and safety management."
        },
        {
          id: 5,
          question: "What time period between exposure and disease?",
          options: ["Exposure Period", "Latency Period", "Monitoring Period", "Recovery Period"],
          correctAnswer: 1,
          explanation: "Latency period is the time between exposure to a hazard and disease appearance."
        },
        {
          id: 6,
          question: "What addresses mental health and workplace stress?",
          options: ["Industrial Hygiene", "Psychosocial Health", "Ergonomics", "Medical Surveillance"],
          correctAnswer: 1,
          explanation: "Psychosocial health addresses mental wellbeing and stress management at work."
        },
        {
          id: 7,
          question: "What are inhalation, ingestion, and skin absorption?",
          options: ["Health Effects", "Exposure Pathways", "Disease Symptoms", "Treatment Methods"],
          correctAnswer: 1,
          explanation: "Exposure pathways describe how hazardous substances enter the body."
        },
        {
          id: 8,
          question: "What involves systematic health hazard evaluation?",
          options: ["Medical Exams", "Health Risk Assessment", "First Aid", "Emergency Response"],
          correctAnswer: 1,
          explanation: "Health Risk Assessment systematically evaluates workplace health hazards."
        },
        {
          id: 9,
          question: "What focuses on workplace design for health?",
          options: ["Industrial Hygiene", "Ergonomics Integration", "Psychosocial Health", "Wellness Movement"],
          correctAnswer: 1,
          explanation: "Ergonomics designs workplaces to fit workers' physical and cognitive capabilities."
        },
        {
          id: 10,
          question: "What are proactive health promotion programs?",
          options: ["Medical Treatment", "Wellness Movement", "First Aid", "Emergency Care"],
          correctAnswer: 1,
          explanation: "Wellness movement focuses on proactive health promotion and disease prevention."
        },
        {
          id: 11,
          question: "What monitors at-risk workers clinically?",
          options: ["Health Surveillance", "Medical Surveillance", "Risk Assessment", "First Aid"],
          correctAnswer: 1,
          explanation: "Medical surveillance involves clinical monitoring of workers exposed to specific hazards."
        },
        {
          id: 12,
          question: "What are long-term exposure consequences?",
          options: ["Acute Effects", "Cumulative Effects", "Immediate Effects", "Temporary Effects"],
          correctAnswer: 1,
          explanation: "Cumulative effects result from repeated or prolonged exposures over time."
        },
        {
          id: 13,
          question: "What implements global occupational health systems?",
          options: ["Small Businesses", "Multinational Corporations", "Only Governments", "No Organizations"],
          correctAnswer: 1,
          explanation: "Multinational corporations implement standardized systems across global operations."
        },
        {
          id: 14,
          question: "What are combined exposure impacts?",
          options: ["Single Effects", "Synergistic Effects", "Isolated Effects", "Independent Effects"],
          correctAnswer: 1,
          explanation: "Synergistic effects occur when combined exposures create greater impact than individual ones."
        },
        {
          id: 15,
          question: "What manages worker recovery and reintegration?",
          options: ["Health Promotion", "Return-to-Work Programs", "Medical Surveillance", "Risk Assessment"],
          correctAnswer: 1,
          explanation: "Return-to-Work programs support injured or ill workers in returning to work safely."
        },
        {
          id: 16,
          question: "What are ongoing worker health monitoring programs?",
          options: ["Medical Exams", "Health Surveillance Programs", "First Aid", "Emergency Response"],
          correctAnswer: 1,
          explanation: "Health surveillance programs provide ongoing monitoring of worker health status."
        },
        {
          id: 17,
          question: "What do healthcare organizations address for professionals?",
          options: ["Only physical safety", "Physical safety and mental wellbeing", "Only equipment", "Only patient care"],
          correctAnswer: 1,
          explanation: "Healthcare organizations address both physical and mental health of their workers."
        },
        {
          id: 18,
          question: "What are workplace wellness initiatives?",
          options: ["Health Promotion", "Medical Treatment", "First Aid", "Emergency Care"],
          correctAnswer: 0,
          explanation: "Health promotion includes workplace wellness programs and initiatives."
        },
        {
          id: 19,
          question: "What prevents acute injuries and accidents?",
          options: ["Health Focus", "Safety Focus", "Wellness Programs", "Medical Care"],
          correctAnswer: 1,
          explanation: "Safety focuses on preventing immediate injuries and accidents."
        },
        {
          id: 20,
          question: "What are international occupational health frameworks?",
          options: ["Company Policies", "Global Standards", "Local Guidelines", "Individual Practices"],
          correctAnswer: 1,
          explanation: "Global standards provide international frameworks for occupational health management."
        }
      ]
    },

    // ==================== MODULE 2 ====================
    {
      id: 2,
      title: "Occupational Exposure Assessment",
      content: `
## **Advanced Hazard Evaluation & Monitoring**

Professional assessment of occupational exposures requires systematic approaches to identify, evaluate, and control health hazards in workplace environments.

### **1. Exposure Assessment Methods**
- **Qualitative Assessment**: Observation-based hazard identification
- **Semi-Quantitative**: Ranking and prioritization methods
- **Quantitative Monitoring**: Direct measurement of exposures
- **Biological Monitoring**: Measuring contaminants in body fluids
- **Environmental Monitoring**: Air, surface, and noise measurements
- **Task-Based Assessment**: Evaluating specific work activities

### **2. Industrial Hygiene Monitoring**
- **Air Sampling**: Personal and area monitoring for airborne contaminants
- **Noise Dosimetry**: Personal noise exposure measurement
- **Vibration Monitoring**: Hand-arm and whole-body vibration assessment
- **Thermal Stress Evaluation**: Heat and cold stress monitoring
- **Radiation Monitoring**: Ionizing and non-ionizing radiation measurement
- **Lighting Assessment**: Evaluating workplace illumination levels

### **3. Exposure Limit Frameworks**
- **TLVs (Threshold Limit Values)**: ACGIH recommended exposure limits
- **PELs (Permissible Exposure Limits)**: OSHA regulatory limits
- **RELs (Recommended Exposure Limits)**: NIOSH recommended limits
- **WEELs (Workplace Environmental Exposure Limits)**: Industry-developed limits
- **ALARA Principle**: As Low As Reasonably Achievable for radiation
- **Action Levels**: Levels triggering specific control actions

### **Real-World Application**
Chemical manufacturing plants conduct regular air monitoring for solvent exposures, compare results to PELs and TLVs, and implement engineering controls when exposures approach action levels. Healthcare facilities monitor radiation exposures for radiology staff using ALARA principles.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is observation-based hazard identification?",
          options: ["Quantitative Monitoring", "Qualitative Assessment", "Biological Monitoring", "Environmental Monitoring"],
          correctAnswer: 1,
          explanation: "Qualitative assessment uses observation and professional judgment to identify hazards."
        },
        {
          id: 2,
          question: "What measures contaminants in body fluids?",
          options: ["Air Sampling", "Biological Monitoring", "Noise Dosimetry", "Vibration Monitoring"],
          correctAnswer: 1,
          explanation: "Biological monitoring measures hazardous substances or their metabolites in blood, urine, or breath."
        },
        {
          id: 3,
          question: "What is personal and area air monitoring?",
          options: ["Noise Dosimetry", "Air Sampling", "Vibration Monitoring", "Radiation Monitoring"],
          correctAnswer: 1,
          explanation: "Air sampling measures concentrations of airborne contaminants in workplace air."
        },
        {
          id: 4,
          question: "What are OSHA regulatory exposure limits?",
          options: ["TLVs", "PELs", "RELs", "WEELs"],
          correctAnswer: 1,
          explanation: "Permissible Exposure Limits (PELs) are legally enforceable OSHA standards."
        },
        {
          id: 5,
          question: "What is direct measurement of exposures?",
          options: ["Qualitative", "Semi-Quantitative", "Quantitative Monitoring", "Task-Based"],
          correctAnswer: 2,
          explanation: "Quantitative monitoring involves direct measurement of exposure concentrations."
        },
        {
          id: 6,
          question: "What measures personal noise exposure?",
          options: ["Air Sampling", "Noise Dosimetry", "Vibration Monitoring", "Radiation Monitoring"],
          correctAnswer: 1,
          explanation: "Noise dosimetry measures individual worker noise exposure over time."
        },
        {
          id: 7,
          question: "What are ACGIH recommended exposure limits?",
          options: ["PELs", "TLVs", "RELs", "WEELs"],
          correctAnswer: 1,
          explanation: "Threshold Limit Values (TLVs) are ACGIH recommended exposure guidelines."
        },
        {
          id: 8,
          question: "What evaluates specific work activities?",
          options: ["Environmental Monitoring", "Task-Based Assessment", "Qualitative Assessment", "Biological Monitoring"],
          correctAnswer: 1,
          explanation: "Task-based assessment evaluates hazards associated with specific job tasks."
        },
        {
          id: 9,
          question: "What measures hand-arm vibration?",
          options: ["Noise Dosimetry", "Vibration Monitoring", "Air Sampling", "Radiation Monitoring"],
          correctAnswer: 1,
          explanation: "Vibration monitoring assesses exposure to hand-arm or whole-body vibration."
        },
        {
          id: 10,
          question: "What are NIOSH recommended exposure limits?",
          options: ["TLVs", "PELs", "RELs", "WEELs"],
          correctAnswer: 2,
          explanation: "Recommended Exposure Limits (RELs) are NIOSH recommendations."
        },
        {
          id: 11,
          question: "What uses ranking and prioritization methods?",
          options: ["Qualitative", "Semi-Quantitative", "Quantitative", "Biological"],
          correctAnswer: 1,
          explanation: "Semi-quantitative methods use ranking systems to prioritize hazards."
        },
        {
          id: 12,
          question: "What monitors heat and cold stress?",
          options: ["Noise Monitoring", "Thermal Stress Evaluation", "Vibration Monitoring", "Radiation Monitoring"],
          correctAnswer: 1,
          explanation: "Thermal stress evaluation monitors environmental conditions affecting worker comfort and health."
        },
        {
          id: 13,
          question: "What are industry-developed exposure limits?",
          options: ["TLVs", "PELs", "RELs", "WEELs"],
          correctAnswer: 3,
          explanation: "Workplace Environmental Exposure Limits (WEELs) are developed by industry groups."
        },
        {
          id: 14,
          question: "What measures ionizing radiation?",
          options: ["Noise Dosimetry", "Radiation Monitoring", "Air Sampling", "Vibration Monitoring"],
          correctAnswer: 1,
          explanation: "Radiation monitoring measures exposure to ionizing and non-ionizing radiation."
        },
        {
          id: 15,
          question: "What principle applies to radiation exposure?",
          options: ["TLV", "PEL", "ALARA", "REL"],
          correctAnswer: 2,
          explanation: "ALARA (As Low As Reasonably Achievable) principle guides radiation protection."
        },
        {
          id: 16,
          question: "What do chemical plants conduct for solvents?",
          options: ["Noise monitoring", "Regular air monitoring", "Vibration assessment", "Lighting evaluation"],
          correctAnswer: 1,
          explanation: "Chemical plants monitor air for solvent vapors to protect worker health."
        },
        {
          id: 17,
          question: "What evaluates workplace illumination?",
          options: ["Noise Assessment", "Lighting Assessment", "Thermal Evaluation", "Vibration Monitoring"],
          correctAnswer: 1,
          explanation: "Lighting assessment evaluates illumination levels for visual tasks and comfort."
        },
        {
          id: 18,
          question: "What levels trigger specific control actions?",
          options: ["Exposure Limits", "Action Levels", "TLVs", "PELs"],
          correctAnswer: 1,
          explanation: "Action levels trigger specific requirements like monitoring or controls."
        },
        {
          id: 19,
          question: "What do healthcare facilities monitor for radiology?",
          options: ["Noise", "Radiation exposures", "Vibration", "Chemical vapors"],
          correctAnswer: 1,
          explanation: "Healthcare facilities monitor radiation exposures for radiology department staff."
        },
        {
          id: 20,
          question: "What are air, surface, and noise measurements?",
          options: ["Biological Monitoring", "Environmental Monitoring", "Task Assessment", "Qualitative Evaluation"],
          correctAnswer: 1,
          explanation: "Environmental monitoring measures physical conditions in the workplace environment."
        }
      ]
    },

    // ==================== MODULE 3 ====================
    {
      id: 3,
      title: "Occupational Diseases & Health Surveillance",
      content: `
## **Work-Related Illness Management & Monitoring**

Comprehensive understanding of occupational diseases and systematic health surveillance programs are essential for preventing, detecting, and managing work-related illnesses.

### **1. Major Occupational Disease Categories**
- **Respiratory Diseases**: Pneumoconiosis, asthma, COPD from dusts and fumes
- **Skin Disorders**: Dermatitis, chemical burns, skin cancers
- **Musculoskeletal Disorders**: Repetitive strain injuries, back disorders
- **Hearing Loss**: Noise-induced hearing impairment
- **Cancer**: Occupational cancers from carcinogen exposure
- **Psychological Disorders**: Work-related stress, burnout, anxiety

### **2. Health Surveillance Programs**
- **Pre-placement Exams**: Baseline health assessment before job assignment
- **Periodic Health Exams**: Regular monitoring for at-risk workers
- **Job Transfer Exams**: Health assessment for job changes
- **Termination Exams**: Final health assessment upon employment end
- **Biological Monitoring Programs**: Regular testing for specific exposures
- **Health Promotion Screening**: General wellness and early detection

### **3. Medical Management of Occupational Illness**
- **Diagnosis Confirmation**: Establishing work-relatedness of illnesses
- **Treatment Coordination**: Medical care for occupational diseases
- **Work Restrictions**: Temporary or permanent job modifications
- **Disability Management**: Long-term illness accommodation
- **Rehabilitation Programs**: Recovery and return-to-work support
- **Compensation Systems**: Workers' compensation and benefits

### **Real-World Application**
Construction companies implement hearing conservation programs with annual audiometric testing for noise-exposed workers. Manufacturing facilities conduct periodic pulmonary function tests for workers exposed to respiratory hazards, with work restrictions for those showing early signs of impairment.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What includes pneumoconiosis and asthma?",
          options: ["Skin Disorders", "Respiratory Diseases", "Musculoskeletal Disorders", "Psychological Disorders"],
          correctAnswer: 1,
          explanation: "Respiratory diseases affect lungs and breathing from airborne hazards."
        },
        {
          id: 2,
          question: "What is baseline health assessment before job assignment?",
          options: ["Periodic Exams", "Pre-placement Exams", "Termination Exams", "Job Transfer Exams"],
          correctAnswer: 1,
          explanation: "Pre-placement exams establish baseline health before job assignment."
        },
        {
          id: 3,
          question: "What establishes work-relatedness of illnesses?",
          options: ["Treatment", "Diagnosis Confirmation", "Rehabilitation", "Compensation"],
          correctAnswer: 1,
          explanation: "Diagnosis confirmation determines if illnesses are work-related."
        },
        {
          id: 4,
          question: "What includes dermatitis and chemical burns?",
          options: ["Respiratory Diseases", "Skin Disorders", "Hearing Loss", "Cancer"],
          correctAnswer: 1,
          explanation: "Skin disorders result from chemical, physical, or biological skin exposure."
        },
        {
          id: 5,
          question: "What are regular monitoring exams for at-risk workers?",
          options: ["Pre-placement", "Periodic Health Exams", "Termination", "Job Transfer"],
          correctAnswer: 1,
          explanation: "Periodic exams monitor health changes in workers with ongoing exposures."
        },
        {
          id: 6,
          question: "What coordinates medical care for occupational diseases?",
          options: ["Diagnosis", "Treatment Coordination", "Work Restrictions", "Disability Management"],
          correctAnswer: 1,
          explanation: "Treatment coordination ensures appropriate medical care for work-related illnesses."
        },
        {
          id: 7,
          question: "What includes repetitive strain injuries?",
          options: ["Skin Disorders", "Respiratory Diseases", "Musculoskeletal Disorders", "Psychological Disorders"],
          correctAnswer: 2,
          explanation: "Musculoskeletal disorders affect muscles, bones, tendons, and nerves."
        },
        {
          id: 8,
          question: "What assesses health for job changes?",
          options: ["Pre-placement", "Periodic", "Job Transfer Exams", "Termination"],
          correctAnswer: 2,
          explanation: "Job transfer exams assess fitness for new job duties or exposures."
        },
        {
          id: 9,
          question: "What involves temporary job modifications?",
          options: ["Diagnosis", "Treatment", "Work Restrictions", "Rehabilitation"],
          correctAnswer: 2,
          explanation: "Work restrictions modify duties to protect worker health during recovery."
        },
        {
          id: 10,
          question: "What is noise-induced hearing impairment?",
          options: ["Skin Disorder", "Respiratory Disease", "Hearing Loss", "Cancer"],
          correctAnswer: 2,
          explanation: "Noise-induced hearing loss results from prolonged exposure to loud noise."
        },
        {
          id: 11,
          question: "What is final health assessment upon employment end?",
          options: ["Pre-placement", "Periodic", "Job Transfer", "Termination Exams"],
          correctAnswer: 3,
          explanation: "Termination exams document health status at employment conclusion."
        },
        {
          id: 12,
          question: "What manages long-term illness accommodation?",
          options: ["Treatment", "Disability Management", "Work Restrictions", "Diagnosis"],
          correctAnswer: 1,
          explanation: "Disability management accommodates workers with permanent health limitations."
        },
        {
          id: 13,
          question: "What results from carcinogen exposure?",
          options: ["Skin Disorders", "Respiratory Diseases", "Cancer", "Hearing Loss"],
          correctAnswer: 2,
          explanation: "Occupational cancers develop from workplace carcinogen exposures."
        },
        {
          id: 14,
          question: "What are regular tests for specific exposures?",
          options: ["Health Exams", "Biological Monitoring Programs", "Screening", "Diagnostic Tests"],
          correctAnswer: 1,
          explanation: "Biological monitoring programs test for specific hazardous substances in the body."
        },
        {
          id: 15,
          question: "What provides recovery and return-to-work support?",
          options: ["Treatment", "Rehabilitation Programs", "Work Restrictions", "Disability Management"],
          correctAnswer: 1,
          explanation: "Rehabilitation programs support recovery and successful return to work."
        },
        {
          id: 16,
          question: "What includes work-related stress and burnout?",
          options: ["Respiratory Diseases", "Psychological Disorders", "Skin Disorders", "Cancer"],
          correctAnswer: 1,
          explanation: "Psychological disorders include stress-related mental health conditions."
        },
        {
          id: 17,
          question: "What do construction companies implement for noise?",
          options: ["Skin protection", "Hearing conservation programs", "Respiratory programs", "Cancer screening"],
          correctAnswer: 1,
          explanation: "Hearing conservation programs protect workers from noise-induced hearing loss."
        },
        {
          id: 18,
          question: "What are workers' compensation and benefits?",
          options: ["Treatment Systems", "Compensation Systems", "Rehabilitation", "Diagnosis Systems"],
          correctAnswer: 1,
          explanation: "Compensation systems provide benefits for work-related injuries and illnesses."
        },
        {
          id: 19,
          question: "What do manufacturing facilities conduct for respiratory hazards?",
          options: ["Hearing tests", "Pulmonary function tests", "Skin exams", "Cancer screening"],
          correctAnswer: 1,
          explanation: "Pulmonary function tests monitor lung health for respiratory hazard exposures."
        },
        {
          id: 20,
          question: "What is general wellness and early detection?",
          options: ["Medical Exams", "Health Promotion Screening", "Biological Monitoring", "Diagnostic Testing"],
          correctAnswer: 1,
          explanation: "Health promotion screening focuses on general wellness and early disease detection."
        }
      ]
    },

    // ==================== MODULE 4 ====================
    {
      id: 4,
      title: "Workplace Health Promotion & Wellness",
      content: `
## **Comprehensive Employee Health Programs**

Proactive health promotion and wellness programs improve worker health, reduce healthcare costs, and enhance organizational performance through systematic health improvement initiatives.

### **1. Comprehensive Wellness Program Components**
- **Health Risk Assessments**: Individual health risk identification
- **Biometric Screening**: Blood pressure, cholesterol, glucose testing
- **Health Education**: Workshops, seminars, and information resources
- **Fitness Programs**: Exercise facilities, classes, and challenges
- **Nutrition Programs**: Healthy eating education and support
- **Mental Health Support**: Stress management and counseling services

### **2. Program Implementation Strategies**
- **Needs Assessment**: Identifying employee health needs and interests
- **Program Design**: Developing targeted health interventions
- **Incentive Structures**: Rewards for participation and achievement
- **Communication Plans**: Promoting program awareness and engagement
- **Evaluation Methods**: Measuring program effectiveness and impact
- **Continuous Improvement**: Using data to enhance program offerings

### **3. Specialized Health Initiatives**
- **Smoking Cessation Programs**: Support for tobacco users
- **Weight Management**: Healthy weight achievement and maintenance
- **Chronic Disease Management**: Support for diabetes, hypertension, etc.
- **Ergonomic Wellness**: Prevention of musculoskeletal disorders
- **Sleep Health Programs**: Improving sleep quality and habits
- **Financial Wellness**: Reducing financial stress and improving literacy

### **Real-World Application**
Technology companies offer comprehensive wellness programs including onsite fitness centers, healthy food options, mental health counseling, and ergonomic assessments. Manufacturing facilities implement targeted programs addressing specific industry risks like musculoskeletal health and hearing conservation.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What identifies individual health risks?",
          options: ["Biometric Screening", "Health Risk Assessments", "Health Education", "Fitness Programs"],
          correctAnswer: 1,
          explanation: "Health risk assessments identify individual employee health risks and needs."
        },
        {
          id: 2,
          question: "What includes blood pressure and cholesterol testing?",
          options: ["Health Education", "Biometric Screening", "Fitness Programs", "Nutrition Programs"],
          correctAnswer: 1,
          explanation: "Biometric screening measures key health indicators through medical tests."
        },
        {
          id: 3,
          question: "What identifies employee health needs and interests?",
          options: ["Program Design", "Needs Assessment", "Incentive Structures", "Communication Plans"],
          correctAnswer: 1,
          explanation: "Needs assessment identifies what health programs employees want and need."
        },
        {
          id: 4,
          question: "What are workshops and information resources?",
          options: ["Fitness Programs", "Health Education", "Nutrition Programs", "Mental Health Support"],
          correctAnswer: 1,
          explanation: "Health education provides information and skills for healthier lifestyles."
        },
        {
          id: 5,
          question: "What develops targeted health interventions?",
          options: ["Needs Assessment", "Program Design", "Evaluation Methods", "Continuous Improvement"],
          correctAnswer: 1,
          explanation: "Program design creates specific health interventions based on identified needs."
        },
        {
          id: 6,
          question: "What includes exercise facilities and classes?",
          options: ["Health Education", "Fitness Programs", "Nutrition Programs", "Mental Health Support"],
          correctAnswer: 1,
          explanation: "Fitness programs promote physical activity and exercise."
        },
        {
          id: 7,
          question: "What rewards participation and achievement?",
          options: ["Needs Assessment", "Incentive Structures", "Communication Plans", "Evaluation Methods"],
          correctAnswer: 1,
          explanation: "Incentive structures motivate participation through rewards and recognition."
        },
        {
          id: 8,
          question: "What provides healthy eating education?",
          options: ["Fitness Programs", "Nutrition Programs", "Mental Health Support", "Health Education"],
          correctAnswer: 1,
          explanation: "Nutrition programs promote healthy eating habits and food choices."
        },
        {
          id: 9,
          question: "What promotes program awareness and engagement?",
          options: ["Needs Assessment", "Program Design", "Communication Plans", "Evaluation Methods"],
          correctAnswer: 2,
          explanation: "Communication plans ensure employees know about and engage with wellness programs."
        },
        {
          id: 10,
          question: "What provides stress management and counseling?",
          options: ["Fitness Programs", "Nutrition Programs", "Mental Health Support", "Health Education"],
          correctAnswer: 2,
          explanation: "Mental health support addresses psychological wellbeing and stress reduction."
        },
        {
          id: 11,
          question: "What measures program effectiveness?",
          options: ["Needs Assessment", "Program Design", "Evaluation Methods", "Continuous Improvement"],
          correctAnswer: 2,
          explanation: "Evaluation methods measure program impact and effectiveness."
        },
        {
          id: 12,
          question: "What supports tobacco users quitting?",
          options: ["Weight Management", "Smoking Cessation Programs", "Chronic Disease Management", "Ergonomic Wellness"],
          correctAnswer: 1,
          explanation: "Smoking cessation programs help employees quit tobacco use."
        },
        {
          id: 13,
          question: "What uses data to enhance programs?",
          options: ["Needs Assessment", "Continuous Improvement", "Program Design", "Communication Plans"],
          correctAnswer: 1,
          explanation: "Continuous improvement uses evaluation data to enhance program offerings."
        },
        {
          id: 14,
          question: "What promotes healthy weight achievement?",
          options: ["Smoking Cessation", "Weight Management", "Chronic Disease Management", "Sleep Health"],
          correctAnswer: 1,
          explanation: "Weight management programs support healthy weight achievement and maintenance."
        },
        {
          id: 15,
          question: "What do technology companies offer employees?",
          options: ["Only basic safety", "Comprehensive wellness programs", "No health programs", "Only medical care"],
          correctAnswer: 1,
          explanation: "Technology companies often offer comprehensive wellness programs to attract and retain talent."
        },
        {
          id: 16,
          question: "What supports diabetes and hypertension management?",
          options: ["Smoking Cessation", "Weight Management", "Chronic Disease Management", "Ergonomic Wellness"],
          correctAnswer: 2,
          explanation: "Chronic disease management supports employees with ongoing health conditions."
        },
        {
          id: 17,
          question: "What do manufacturing facilities implement specifically?",
          options: ["General programs", "Targeted programs for industry risks", "No programs", "Only fitness"],
          correctAnswer: 1,
          explanation: "Manufacturing facilities implement programs addressing their specific occupational risks."
        },
        {
          id: 18,
          question: "What prevents musculoskeletal disorders?",
          options: ["Smoking Cessation", "Ergonomic Wellness", "Chronic Disease Management", "Sleep Health"],
          correctAnswer: 1,
          explanation: "Ergonomic wellness programs prevent work-related musculoskeletal disorders."
        },
        {
          id: 19,
          question: "What improves sleep quality and habits?",
          options: ["Weight Management", "Sleep Health Programs", "Financial Wellness", "Chronic Disease Management"],
          correctAnswer: 1,
          explanation: "Sleep health programs address sleep quality and related health impacts."
        },
        {
          id: 20,
          question: "What reduces financial stress?",
          options: ["Sleep Health", "Financial Wellness", "Ergonomic Wellness", "Smoking Cessation"],
          correctAnswer: 1,
          explanation: "Financial wellness programs reduce stress through financial education and support."
        }
      ]
    },

    // ==================== MODULE 5 ====================
    {
      id: 5,
      title: "Legal & Regulatory Compliance",
      content: `
## **Occupational Health Law & Standards**

Comprehensive understanding of occupational health regulations, compliance requirements, and legal responsibilities is essential for effective program management and organizational protection.

### **1. Major Regulatory Frameworks**
- **OSHA Standards**: Occupational Safety and Health Administration requirements
- **Workers' Compensation Laws**: State-based injury and illness compensation
- **ADA Compliance**: Americans with Disabilities Act accommodations
- **FMLA Regulations**: Family and Medical Leave Act requirements
- **HIPAA Privacy Rules**: Health information privacy protections
- **State-Specific Regulations**: Additional local requirements

### **2. Compliance Program Elements**
- **Recordkeeping Requirements**: OSHA 300 logs and incident documentation
- **Medical Record Management**: Confidential health information handling
- **Reporting Obligations**: Serious incident and fatality reporting
- **Training Documentation**: Verification of required training completion
- **Inspection Preparedness**: Readiness for regulatory inspections
- **Audit Procedures**: Internal compliance verification processes

### **3. Legal Risk Management**
- **Liability Prevention**: Proactive measures to avoid legal issues
- **Documentation Strategies**: Creating defensible records and procedures
- **Expert Witness Preparation**: Working with occupational health experts
- **Litigation Support**: Supporting legal defense when needed
- **Regulatory Change Monitoring**: Staying current with legal changes
- **Compliance Assurance Programs**: Systematic compliance verification

### **Real-World Application**
Healthcare organizations maintain detailed OSHA 300 logs, implement HIPAA-compliant medical record systems, and conduct regular compliance audits. Construction companies develop comprehensive safety and health programs meeting both OSHA standards and state-specific construction safety regulations.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What sets federal occupational health requirements?",
          options: ["ADA", "OSHA Standards", "FMLA", "HIPAA"],
          correctAnswer: 1,
          explanation: "OSHA standards establish federal workplace safety and health requirements."
        },
        {
          id: 2,
          question: "What are state-based injury compensation laws?",
          options: ["OSHA", "Workers' Compensation Laws", "ADA", "FMLA"],
          correctAnswer: 1,
          explanation: "Workers' compensation laws provide benefits for work-related injuries and illnesses."
        },
        {
          id: 3,
          question: "What includes OSHA 300 logs and documentation?",
          options: ["Medical Records", "Recordkeeping Requirements", "Reporting Obligations", "Training Documentation"],
          correctAnswer: 1,
          explanation: "OSHA recordkeeping requires maintaining injury and illness logs and records."
        },
        {
          id: 4,
          question: "What requires disability accommodations?",
          options: ["OSHA", "ADA Compliance", "FMLA", "HIPAA"],
          correctAnswer: 1,
          explanation: "Americans with Disabilities Act requires reasonable accommodations for disabilities."
        },
        {
          id: 5,
          question: "What handles confidential health information?",
          options: ["Recordkeeping", "Medical Record Management", "Reporting", "Training Documentation"],
          correctAnswer: 1,
          explanation: "Medical record management ensures confidentiality of employee health information."
        },
        {
          id: 6,
          question: "What provides family and medical leave rights?",
          options: ["OSHA", "ADA", "FMLA Regulations", "HIPAA"],
          correctAnswer: 2,
          explanation: "Family and Medical Leave Act provides job-protected leave for qualifying reasons."
        },
        {
          id: 7,
          question: "What involves serious incident reporting?",
          options: ["Recordkeeping", "Reporting Obligations", "Training Documentation", "Inspection Preparedness"],
          correctAnswer: 1,
          explanation: "Reporting obligations require notifying authorities of serious incidents."
        },
        {
          id: 8,
          question: "What protects health information privacy?",
          options: ["OSHA", "ADA", "FMLA", "HIPAA Privacy Rules"],
          correctAnswer: 3,
          explanation: "HIPAA protects the privacy of individually identifiable health information."
        },
        {
          id: 9,
          question: "What verifies training completion?",
          options: ["Recordkeeping", "Reporting", "Training Documentation", "Inspection Preparedness"],
          correctAnswer: 2,
          explanation: "Training documentation provides evidence of required safety training."
        },
        {
          id: 10,
          question: "What are additional local requirements?",
          options: ["Federal Laws", "State-Specific Regulations", "International Standards", "Industry Guidelines"],
          correctAnswer: 1,
          explanation: "State-specific regulations add additional requirements beyond federal standards."
        },
        {
          id: 11,
          question: "What prepares for regulatory inspections?",
          options: ["Recordkeeping", "Reporting", "Training Documentation", "Inspection Preparedness"],
          correctAnswer: 3,
          explanation: "Inspection preparedness ensures readiness for regulatory agency visits."
        },
        {
          id: 12,
          question: "What do healthcare organizations maintain?",
          options: ["Simple records", "Detailed OSHA 300 logs", "No records", "Only patient records"],
          correctAnswer: 1,
          explanation: "Healthcare organizations maintain detailed occupational health records including OSHA logs."
        },
        {
          id: 13,
          question: "What are internal compliance verification processes?",
          options: ["Regulatory Inspections", "Audit Procedures", "Reporting Systems", "Training Programs"],
          correctAnswer: 1,
          explanation: "Audit procedures verify internal compliance with regulations and standards."
        },
        {
          id: 14,
          question: "What are proactive legal issue avoidance measures?",
          options: ["Liability Prevention", "Documentation Strategies", "Expert Witness", "Litigation Support"],
          correctAnswer: 0,
          explanation: "Liability prevention implements measures to avoid legal problems."
        },
        {
          id: 15,
          question: "What do construction companies develop?",
          options: ["Only basic programs", "Comprehensive programs meeting regulations", "No programs", "Only insurance"],
          correctAnswer: 1,
          explanation: "Construction companies develop comprehensive programs meeting OSHA and state regulations."
        },
        {
          id: 16,
          question: "What creates defensible records and procedures?",
          options: ["Liability Prevention", "Documentation Strategies", "Expert Witness", "Litigation Support"],
          correctAnswer: 1,
          explanation: "Documentation strategies create records that support legal defensibility."
        },
        {
          id: 17,
          question: "What works with occupational health experts?",
          options: ["Liability Prevention", "Documentation", "Expert Witness Preparation", "Litigation Support"],
          correctAnswer: 2,
          explanation: "Expert witness preparation involves working with qualified occupational health professionals."
        },
        {
          id: 18,
          question: "What supports legal defense when needed?",
          options: ["Liability Prevention", "Documentation", "Expert Witness", "Litigation Support"],
          correctAnswer: 3,
          explanation: "Litigation support provides assistance during legal proceedings."
        },
        {
          id: 19,
          question: "What monitors legal changes?",
          options: ["Compliance Assurance", "Regulatory Change Monitoring", "Audit Procedures", "Inspection Readiness"],
          correctAnswer: 1,
          explanation: "Regulatory change monitoring tracks updates to laws and standards."
        },
        {
          id: 20,
          question: "What systematically verifies compliance?",
          options: ["Inspection Preparation", "Compliance Assurance Programs", "Training Documentation", "Recordkeeping"],
          correctAnswer: 1,
          explanation: "Compliance assurance programs systematically verify regulatory compliance."
        }
      ]
    },

    // ==================== MODULE 6 ====================
    {
      id: 6,
      title: "Strategic Occupational Health Management",
      content: `
## **Integrating Health into Business Strategy**

Advanced occupational health management integrates health considerations into organizational strategy, creating value through improved worker health, reduced costs, and enhanced organizational performance.

### **1. Strategic Health Integration**
- **Health Metrics Integration**: Incorporating health data into business metrics
- **ROI Calculation**: Measuring return on health program investments
- **Executive Reporting**: Health performance reporting to leadership
- **Strategic Planning Alignment**: Aligning health programs with business goals
- **Benchmarking**: Comparing health performance with industry standards
- **Continuous Improvement Cycles**: Systematic health program enhancement

### **2. Advanced Program Evaluation**
- **Cost-Benefit Analysis**: Economic evaluation of health interventions
- **Health Impact Assessment**: Measuring health outcome improvements
- **Productivity Analysis**: Linking health programs to productivity gains
- **Absenteeism Reduction**: Measuring impact on work attendance
- **Presenteeism Improvement**: Addressing working while ill impacts
- **Healthcare Cost Analysis**: Measuring medical cost savings

### **3. Emerging Trends & Innovation**
- **Digital Health Solutions**: Mobile apps, wearables, and telehealth
- **Predictive Analytics**: Using data to predict health risks and outcomes
- **Integrated Health Platforms**: Comprehensive health management systems
- **Mental Health Integration**: Comprehensive psychological health approaches
- **Global Health Management**: Managing health across international operations
- **Sustainability Integration**: Linking health with environmental sustainability

### **Real-World Application**
Fortune 500 companies integrate occupational health metrics into executive dashboards, calculate ROI on wellness programs, and use predictive analytics to identify emerging health risks. Global organizations develop integrated health platforms managing diverse health needs across multiple countries and cultures.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What incorporates health data into business metrics?",
          options: ["ROI Calculation", "Health Metrics Integration", "Executive Reporting", "Strategic Planning"],
          correctAnswer: 1,
          explanation: "Health metrics integration incorporates health data into organizational performance metrics."
        },
        {
          id: 2,
          question: "What measures return on health program investments?",
          options: ["Cost Analysis", "ROI Calculation", "Health Impact", "Productivity Analysis"],
          correctAnswer: 1,
          explanation: "ROI calculation measures financial return on occupational health investments."
        },
        {
          id: 3,
          question: "What provides health performance reporting to leadership?",
          options: ["Health Metrics", "Executive Reporting", "Benchmarking", "Continuous Improvement"],
          correctAnswer: 1,
          explanation: "Executive reporting communicates health performance to organizational leadership."
        },
        {
          id: 4,
          question: "What includes mobile apps and wearables?",
          options: ["Traditional Programs", "Digital Health Solutions", "Integrated Platforms", "Predictive Analytics"],
          correctAnswer: 1,
          explanation: "Digital health solutions use technology for health monitoring and intervention."
        },
        {
          id: 5,
          question: "What aligns health programs with business goals?",
          options: ["Health Metrics", "Executive Reporting", "Strategic Planning Alignment", "Benchmarking"],
          correctAnswer: 2,
          explanation: "Strategic planning alignment ensures health programs support organizational objectives."
        },
        {
          id: 6,
          question: "What uses data to predict health risks?",
          options: ["Digital Solutions", "Predictive Analytics", "Integrated Platforms", "Traditional Methods"],
          correctAnswer: 1,
          explanation: "Predictive analytics uses data patterns to forecast health risks and outcomes."
        },
        {
          id: 7,
          question: "What compares health performance with standards?",
          options: ["Health Metrics", "Executive Reporting", "Benchmarking", "Continuous Improvement"],
          correctAnswer: 2,
          explanation: "Benchmarking compares organizational health performance with industry standards."
        },
        {
          id: 8,
          question: "What are comprehensive health management systems?",
          options: ["Digital Apps", "Integrated Health Platforms", "Predictive Tools", "Traditional Programs"],
          correctAnswer: 1,
          explanation: "Integrated health platforms provide comprehensive health management capabilities."
        },
        {
          id: 9,
          question: "What involves systematic program enhancement?",
          options: ["Health Metrics", "Executive Reporting", "Benchmarking", "Continuous Improvement Cycles"],
          correctAnswer: 3,
          explanation: "Continuous improvement cycles systematically enhance health programs over time."
        },
        {
          id: 10,
          question: "What evaluates economic aspects of interventions?",
          options: ["Health Impact", "Cost-Benefit Analysis", "Productivity Analysis", "Absenteeism Reduction"],
          correctAnswer: 1,
          explanation: "Cost-benefit analysis evaluates economic costs and benefits of health interventions."
        },
        {
          id: 11,
          question: "What do Fortune 500 companies integrate into dashboards?",
          options: ["Only financial data", "Occupational health metrics", "Marketing data", "No health data"],
          correctAnswer: 1,
          explanation: "Leading companies integrate health metrics into executive performance dashboards."
        },
        {
          id: 12,
          question: "What measures health outcome improvements?",
          options: ["Cost Analysis", "Health Impact Assessment", "Productivity Analysis", "Absenteeism Measurement"],
          correctAnswer: 1,
          explanation: "Health impact assessment measures improvements in health outcomes from programs."
        },
        {
          id: 13,
          question: "What includes comprehensive psychological approaches?",
          options: ["Physical Health", "Mental Health Integration", "Digital Health", "Traditional Medicine"],
          correctAnswer: 1,
          explanation: "Mental health integration addresses psychological wellbeing comprehensively."
        },
        {
          id: 14,
          question: "What links health programs to productivity gains?",
          options: ["Cost Analysis", "Health Impact", "Productivity Analysis", "Absenteeism Reduction"],
          correctAnswer: 2,
          explanation: "Productivity analysis measures how health programs affect work output."
        },
        {
          id: 15,
          question: "What manages health across international operations?",
          options: ["Local Programs", "Global Health Management", "Digital Solutions", "Traditional Approaches"],
          correctAnswer: 1,
          explanation: "Global health management addresses health across different countries and cultures."
        },
        {
          id: 16,
          question: "What measures impact on work attendance?",
          options: ["Productivity Analysis", "Absenteeism Reduction", "Presenteeism Improvement", "Cost Analysis"],
          correctAnswer: 1,
          explanation: "Absenteeism reduction measures improvements in work attendance from health programs."
        },
        {
          id: 17,
          question: "What uses predictive analytics for emerging risks?",
          options: ["Traditional companies", "Leading organizations", "No organizations", "Only governments"],
          correctAnswer: 1,
          explanation: "Leading organizations use predictive analytics to identify emerging health risks."
        },
        {
          id: 18,
          question: "What addresses working while ill impacts?",
          options: ["Absenteeism", "Presenteeism Improvement", "Productivity", "Cost Analysis"],
          correctAnswer: 1,
          explanation: "Presenteeism improvement addresses productivity loss from working while ill."
        },
        {
          id: 19,
          question: "What links health with environmental sustainability?",
          options: ["Separate Programs", "Sustainability Integration", "Digital Health", "Traditional Medicine"],
          correctAnswer: 1,
          explanation: "Sustainability integration links occupational health with environmental sustainability goals."
        },
        {
          id: 20,
          question: "What measures medical cost savings?",
          options: ["Productivity Analysis", "Healthcare Cost Analysis", "Absenteeism Measurement", "Health Impact"],
          correctAnswer: 1,
          explanation: "Healthcare cost analysis measures reductions in medical expenses from health programs."
        }
      ]
    }
  ],

  // ==================== FINAL EXAM ====================
  finalExam: {
    title: "Occupational Health Diploma Final Examination",
    description: "Comprehensive assessment covering advanced occupational health concepts, exposure assessment, disease management, and strategic health integration. Minimum 75% required for diploma certification.",
    passingScore: 75,
    questions: [
      // Module 1 Questions
      {
        id: 1,
        question: "What era focused on physical hazards?",
        options: ["Wellness Movement", "Industrial Hygiene Era", "Psychosocial Health", "Ergonomics"],
        correctAnswer: 1,
        explanation: "Industrial Hygiene Era focused on physical workplace hazards.",
        module: 1
      },
      {
        id: 2,
        question: "What combines protection and promotion?",
        options: ["Industrial Hygiene", "Total Worker Health", "Safety Only", "Medical Surveillance"],
        correctAnswer: 1,
        explanation: "Total Worker Health integrates protection with promotion.",
        module: 1
      },
      {
        id: 3,
        question: "What prevents chronic illnesses?",
        options: ["Safety Focus", "Health Focus", "Accident Prevention", "Emergency Response"],
        correctAnswer: 1,
        explanation: "Occupational health prevents work-related chronic diseases.",
        module: 1
      },
      {
        id: 4,
        question: "What is international OH standard?",
        options: ["ISO 9001", "ISO 45001", "ISO 14001", "ISO 31000"],
        correctAnswer: 1,
        explanation: "ISO 45001 is international occupational health standard.",
        module: 1
      },
      {
        id: 5,
        question: "What addresses mental health at work?",
        options: ["Industrial Hygiene", "Psychosocial Health", "Ergonomics", "Medical Surveillance"],
        correctAnswer: 1,
        explanation: "Psychosocial health addresses workplace mental health.",
        module: 1
      },

      // Module 2 Questions
      {
        id: 6,
        question: "What is observation-based identification?",
        options: ["Quantitative", "Qualitative Assessment", "Biological", "Environmental"],
        correctAnswer: 1,
        explanation: "Qualitative assessment uses observation for hazard identification.",
        module: 2
      },
      {
        id: 7,
        question: "What measures contaminants in body fluids?",
        options: ["Air Sampling", "Biological Monitoring", "Noise Dosimetry", "Vibration"],
        correctAnswer: 1,
        explanation: "Biological monitoring tests body fluids for contaminants.",
        module: 2
      },
      {
        id: 8,
        question: "What are OSHA regulatory limits?",
        options: ["TLVs", "PELs", "RELs", "WEELs"],
        correctAnswer: 1,
        explanation: "PELs are OSHA regulatory exposure limits.",
        module: 2
      },
      {
        id: 9,
        question: "What measures personal noise exposure?",
        options: ["Air Sampling", "Noise Dosimetry", "Vibration", "Radiation"],
        correctAnswer: 1,
        explanation: "Noise dosimetry measures individual noise exposure.",
        module: 2
      },
      {
        id: 10,
        question: "What are ACGIH recommended limits?",
        options: ["PELs", "TLVs", "RELs", "WEELs"],
        correctAnswer: 1,
        explanation: "TLVs are ACGIH recommended exposure limits.",
        module: 2
      },

      // Module 3 Questions
      {
        id: 11,
        question: "What includes pneumoconiosis and asthma?",
        options: ["Skin Disorders", "Respiratory Diseases", "Musculoskeletal", "Psychological"],
        correctAnswer: 1,
        explanation: "Respiratory diseases affect lungs from airborne hazards.",
        module: 3
      },
      {
        id: 12,
        question: "What is baseline health assessment?",
        options: ["Periodic", "Pre-placement Exams", "Termination", "Job Transfer"],
        correctAnswer: 1,
        explanation: "Pre-placement exams establish baseline health.",
        module: 3
      },
      {
        id: 13,
        question: "What establishes work-relatedness?",
        options: ["Treatment", "Diagnosis Confirmation", "Rehabilitation", "Compensation"],
        correctAnswer: 1,
        explanation: "Diagnosis confirmation determines work-relatedness.",
        module: 3
      },
      {
        id: 14,
        question: "What includes dermatitis and burns?",
        options: ["Respiratory", "Skin Disorders", "Hearing Loss", "Cancer"],
        correctAnswer: 1,
        explanation: "Skin disorders result from skin exposures.",
        module: 3
      },
      {
        id: 15,
        question: "What monitors at-risk workers?",
        options: ["Pre-placement", "Periodic Health Exams", "Termination", "Job Transfer"],
        correctAnswer: 1,
        explanation: "Periodic exams monitor health in at-risk workers.",
        module: 3
      },

      // Module 4 Questions
      {
        id: 16,
        question: "What identifies individual health risks?",
        options: ["Biometric", "Health Risk Assessments", "Health Education", "Fitness"],
        correctAnswer: 1,
        explanation: "Health risk assessments identify individual risks.",
        module: 4
      },
      {
        id: 17,
        question: "What includes blood pressure testing?",
        options: ["Health Education", "Biometric Screening", "Fitness", "Nutrition"],
        correctAnswer: 1,
        explanation: "Biometric screening measures health indicators.",
        module: 4
      },
      {
        id: 18,
        question: "What identifies employee needs?",
        options: ["Program Design", "Needs Assessment", "Incentives", "Communication"],
        correctAnswer: 1,
        explanation: "Needs assessment identifies employee health needs.",
        module: 4
      },
      {
        id: 19,
        question: "What develops health interventions?",
        options: ["Needs Assessment", "Program Design", "Evaluation", "Improvement"],
        correctAnswer: 1,
        explanation: "Program design creates health interventions.",
        module: 4
      },
      {
        id: 20,
        question: "What rewards participation?",
        options: ["Needs Assessment", "Incentive Structures", "Communication", "Evaluation"],
        correctAnswer: 1,
        explanation: "Incentive structures motivate participation.",
        module: 4
      },

      // Module 5 Questions
      {
        id: 21,
        question: "What sets federal requirements?",
        options: ["ADA", "OSHA Standards", "FMLA", "HIPAA"],
        correctAnswer: 1,
        explanation: "OSHA standards establish federal requirements.",
        module: 5
      },
      {
        id: 22,
        question: "What are state compensation laws?",
        options: ["OSHA", "Workers' Compensation", "ADA", "FMLA"],
        correctAnswer: 1,
        explanation: "Workers' compensation provides injury benefits.",
        module: 5
      },
      {
        id: 23,
        question: "What includes OSHA 300 logs?",
        options: ["Medical Records", "Recordkeeping Requirements", "Reporting", "Training"],
        correctAnswer: 1,
        explanation: "Recordkeeping requires OSHA 300 logs.",
        module: 5
      },
      {
        id: 24,
        question: "What requires disability accommodations?",
        options: ["OSHA", "ADA Compliance", "FMLA", "HIPAA"],
        correctAnswer: 1,
        explanation: "ADA requires reasonable accommodations.",
        module: 5
      },
      {
        id: 25,
        question: "What handles confidential health information?",
        options: ["Recordkeeping", "Medical Record Management", "Reporting", "Training"],
        correctAnswer: 1,
        explanation: "Medical record management ensures confidentiality.",
        module: 5
      },

      // Module 6 Questions
      {
        id: 26,
        question: "What integrates health into business metrics?",
        options: ["ROI", "Health Metrics Integration", "Executive Reporting", "Strategic Planning"],
        correctAnswer: 1,
        explanation: "Health metrics integration incorporates health data.",
        module: 6
      },
      {
        id: 27,
        question: "What measures program investment return?",
        options: ["Cost Analysis", "ROI Calculation", "Health Impact", "Productivity"],
        correctAnswer: 1,
        explanation: "ROI calculation measures financial return.",
        module: 6
      },
      {
        id: 28,
        question: "What reports to leadership?",
        options: ["Health Metrics", "Executive Reporting", "Benchmarking", "Improvement"],
        correctAnswer: 1,
        explanation: "Executive reporting communicates to leadership.",
        module: 6
      },
      {
        id: 29,
        question: "What includes mobile apps?",
        options: ["Traditional", "Digital Health Solutions", "Integrated", "Predictive"],
        correctAnswer: 1,
        explanation: "Digital health uses technology for health.",
        module: 6
      },
      {
        id: 30,
        question: "What aligns with business goals?",
        options: ["Health Metrics", "Executive Reporting", "Strategic Planning Alignment", "Benchmarking"],
        correctAnswer: 2,
        explanation: "Strategic alignment ensures support for objectives.",
        module: 6
      },

      // Advanced Application Questions
      {
        id: 31,
        question: "What uses data to predict risks?",
        options: ["Digital", "Predictive Analytics", "Integrated", "Traditional"],
        correctAnswer: 1,
        explanation: "Predictive analytics forecasts health risks.",
        module: 6
      },
      {
        id: 32,
        question: "What compares with industry standards?",
        options: ["Health Metrics", "Executive Reporting", "Benchmarking", "Improvement"],
        correctAnswer: 2,
        explanation: "Benchmarking compares with industry standards.",
        module: 6
      },
      {
        id: 33,
        question: "What are comprehensive systems?",
        options: ["Digital Apps", "Integrated Health Platforms", "Predictive", "Traditional"],
        correctAnswer: 1,
        explanation: "Integrated platforms provide comprehensive management.",
        module: 6
      },
      {
        id: 34,
        question: "What evaluates economic aspects?",
        options: ["Health Impact", "Cost-Benefit Analysis", "Productivity", "Absenteeism"],
        correctAnswer: 1,
        explanation: "Cost-benefit analyzes economic aspects.",
        module: 6
      },
      {
        id: 35,
        question: "What measures health improvements?",
        options: ["Cost Analysis", "Health Impact Assessment", "Productivity", "Absenteeism"],
        correctAnswer: 1,
        explanation: "Health impact measures outcome improvements.",
        module: 6
      },
      {
        id: 36,
        question: "What do Fortune 500 companies integrate?",
        options: ["Only financial", "Occupational health metrics", "Marketing", "No health"],
        correctAnswer: 1,
        explanation: "Leading companies integrate health metrics.",
        module: 6
      },
      {
        id: 37,
        question: "What includes psychological approaches?",
        options: ["Physical Health", "Mental Health Integration", "Digital", "Traditional"],
        correctAnswer: 1,
        explanation: "Mental health integration addresses psychological wellbeing.",
        module: 6
      },
      {
        id: 38,
        question: "What links to productivity?",
        options: ["Cost Analysis", "Health Impact", "Productivity Analysis", "Absenteeism"],
        correctAnswer: 2,
        explanation: "Productivity analysis links health to output.",
        module: 6
      },
      {
        id: 39,
        question: "What manages across countries?",
        options: ["Local", "Global Health Management", "Digital", "Traditional"],
        correctAnswer: 1,
        explanation: "Global health manages across international operations.",
        module: 6
      },
      {
        id: 40,
        question: "What measures medical savings?",
        options: ["Productivity", "Healthcare Cost Analysis", "Absenteeism", "Health Impact"],
        correctAnswer: 1,
        explanation: "Healthcare cost analysis measures medical savings.",
        module: 6
      }
    ]
  }
};

export default occupationalHealthDiplomaCourse;
