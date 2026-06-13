// Registered Nursing (Diploma) Course Content
// File: registered-nursing-diploma.ts

export const registeredNursingDiploma = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "registered-nursing-diploma",
  title: "Registered Nursing (Diploma)",
  description: "Advanced nursing diploma preparing for professional nursing practice. Covers comprehensive patient assessment, clinical decision-making, complex care coordination, and leadership in healthcare settings.",
  duration: "12 weeks",
  timeCommitment: "8-10 hours per week",
  price: 18,
  icon: "👩⚕️",
  badge: "Diploma",
  prerequisites: ["nursing-certificate"], // Requires Nursing Certificate first
  
  // 2. MODULE ARCHITECTURE (8 modules following Diploma template)
  modules: [
    {
      id: 1,
      title: "Advanced Health Assessment",
      content: `# Module 1: Advanced Health Assessment

## Comprehensive Patient Evaluation
Advanced health assessment goes beyond basic vital signs to provide a complete picture of patient health. Registered nurses conduct systematic assessments that guide diagnosis and treatment decisions.

## Head-to-Toe Assessment Framework
A structured approach ensures nothing is missed:
1. **General Survey** - First impression, appearance, behavior
2. **Vital Signs** - Temperature, pulse, respiration, blood pressure, pain
3. **Head and Neck** - Skull, face, eyes, ears, nose, throat, lymph nodes
4. **Chest and Lungs** - Inspection, palpation, percussion, auscultation
5. **Cardiovascular** - Heart sounds, pulses, edema assessment
6. **Abdomen** - Four quadrants, bowel sounds, tenderness
7. **Extremities** - Movement, strength, circulation, sensation
8. **Neurological** - Mental status, cranial nerves, reflexes

## Specialized Assessment Techniques
Registered nurses master these advanced skills:
- **Auscultation** - Using stethoscope to hear body sounds
- **Percussion** - Tapping to determine underlying structure
- **Palpation** - Feeling with hands to detect abnormalities
- **Olfaction** - Using sense of smell as diagnostic clue

## Focused Assessments
Targeted evaluations for specific concerns:
- **Respiratory Assessment** - Breath sounds, effort, oxygen needs
- **Cardiac Assessment** - Heart rhythms, murmurs, perfusion
- **Neurological Assessment** - Consciousness level, pupil response
- **Abdominal Assessment** - Pain location, bowel function

## Documentation of Findings
Professional documentation includes:
- **SOAP Notes** - Structured format for all assessments
- **Problem Lists** - Organized by priority
- **Flow Sheets** - Tracking changes over time
- **Narrative Notes** - Detailed descriptions when needed

## Clinical Decision Making
Using assessment data to:
- **Prioritize Problems** - Most urgent issues first
- **Identify Patterns** - Connecting related findings
- **Formulate Nursing Diagnoses** - Professional judgment statements
- **Plan Interventions** - Based on assessment findings

## Communication of Assessment Results
Effectively reporting findings to:
- **Healthcare Team** - Clear, concise handoff reports
- **Patients and Families** - Understandable explanations
- **Medical Records** - Accurate, complete documentation
- **Specialists** - Referral information as needed

## Cultural Considerations in Assessment
Adapting assessments for:
- **Cultural Beliefs** - About health and illness
- **Communication Styles** - Language and nonverbal cues
- **Health Practices** - Traditional and alternative treatments
- **Privacy Preferences** - Modesty considerations`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is included in the general survey during assessment?",
          options: [
            "Only vital signs",
            "First impression, appearance, and behavior",
            "Detailed medical history",
            "Laboratory test results"
          ],
          correctAnswer: 1,
          explanation: "The general survey includes initial observations of appearance, behavior, and overall impression before detailed examination."
        },
        {
          id: 2,
          question: "What are the four techniques of physical assessment?",
          options: [
            "Looking, listening, touching, smelling",
            "Inspection, palpation, percussion, auscultation",
            "Questioning, observing, measuring, documenting",
            "Scanning, testing, analyzing, reporting"
          ],
          correctAnswer: 1,
          explanation: "The four physical assessment techniques are inspection (looking), palpation (touching), percussion (tapping), and auscultation (listening)."
        },
        {
          id: 3,
          question: "What does auscultation involve?",
          options: [
            "Tapping body surfaces",
            "Using stethoscope to hear body sounds",
            "Feeling for abnormalities",
            "Measuring body parts"
          ],
          correctAnswer: 1,
          explanation: "Auscultation involves using a stethoscope to listen to internal body sounds like heart, lung, and bowel sounds."
        },
        {
          id: 4,
          question: "What is a focused assessment?",
          options: [
            "Complete head-to-toe examination",
            "Targeted evaluation for specific concerns",
            "Assessment done quickly",
            "Assessment without equipment"
          ],
          correctAnswer: 1,
          explanation: "A focused assessment targets specific body systems or concerns based on patient symptoms or condition."
        },
        {
          id: 5,
          question: "What does SOAP stand for in documentation?",
          options: [
            "Symptoms, Observations, Assessment, Plan",
            "Subjective, Objective, Assessment, Plan",
            "Summary, Observations, Analysis, Procedures",
            "Signs, Objective data, Assessment, Prescription"
          ],
          correctAnswer: 1,
          explanation: "SOAP stands for Subjective (patient statements), Objective (measurable data), Assessment (clinical judgment), Plan (interventions)."
        },
        {
          id: 6,
          question: "What is the first step in clinical decision making?",
          options: [
            "Implement interventions",
            "Prioritize problems",
            "Gather assessment data",
            "Document findings"
          ],
          correctAnswer: 2,
          explanation: "Clinical decision making begins with gathering comprehensive assessment data before analysis and intervention."
        },
        {
          id: 7,
          question: "What should be assessed in neurological evaluation?",
          options: [
            "Only pupil response",
            "Consciousness level and cranial nerves",
            "Only muscle strength",
            "Only coordination"
          ],
          correctAnswer: 1,
          explanation: "Neurological assessment includes consciousness level, cranial nerve function, motor strength, sensation, and reflexes."
        },
        {
          id: 8,
          question: "Why document assessment findings promptly?",
          options: [
            "To meet shift requirements",
            "For accurate care planning and legal protection",
            "Because supervisors require it",
            "To fill time between tasks"
          ],
          correctAnswer: 1,
          explanation: "Prompt documentation ensures accurate care planning, continuity between providers, and legal protection through complete records."
        },
        {
          id: 9,
          question: "What does percussion help determine?",
          options: [
            "Skin temperature",
            "Underlying tissue density",
            "Blood pressure",
            "Heart rate"
          ],
          correctAnswer: 1,
          explanation: "Percussion helps determine the density of underlying tissues (air-filled, fluid-filled, or solid) through sound produced by tapping."
        },
        {
          id: 10,
          question: "What is included in cardiovascular assessment?",
          options: [
            "Only heart rate",
            "Heart sounds, pulses, and edema",
            "Only blood pressure",
            "Only chest pain assessment"
          ],
          correctAnswer: 1,
          explanation: "Cardiovascular assessment includes heart sounds, peripheral pulses, blood pressure, and assessment for edema or swelling."
        },
        {
          id: 11,
          question: "What cultural considerations affect assessment?",
          options: [
            "Only language differences",
            "Beliefs, communication styles, and privacy preferences",
            "Only religious practices",
            "Only dietary restrictions"
          ],
          correctAnswer: 1,
          explanation: "Cultural considerations include health beliefs, communication styles, traditional practices, and privacy/modesty preferences."
        },
        {
          id: 12,
          question: "What is a nursing diagnosis?",
          options: [
            "Medical disease identification",
            "Clinical judgment about patient responses",
            "Doctor's prescription",
            "Laboratory test interpretation"
          ],
          correctAnswer: 1,
          explanation: "A nursing diagnosis is a clinical judgment about individual, family, or community responses to actual or potential health problems."
        },
        {
          id: 13,
          question: "What should abdominal assessment include?",
          options: [
            "Only listening to bowel sounds",
            "Four quadrant examination and symptom assessment",
            "Only pain assessment",
            "Only measurement of girth"
          ],
          correctAnswer: 1,
          explanation: "Abdominal assessment includes inspection, auscultation, percussion, and palpation of all four quadrants, plus symptom evaluation."
        },
        {
          id: 14,
          question: "How are assessment findings communicated to families?",
          options: [
            "Using complex medical terms",
            "With understandable explanations",
            "Only with doctor's permission",
            "Through written reports only"
          ],
          correctAnswer: 1,
          explanation: "Families should receive clear, understandable explanations of assessment findings using non-technical language when appropriate."
        },
        {
          id: 15,
          question: "What does palpation detect?",
          options: [
            "Only surface temperature",
            "Tenderness, masses, and abnormalities",
            "Only pulse strength",
            "Only skin moisture"
          ],
          correctAnswer: 1,
          explanation: "Palpation detects tenderness, masses, organ size, texture, temperature, moisture, and other physical characteristics."
        },
        {
          id: 16,
          question: "What is included in respiratory assessment?",
          options: [
            "Only counting breaths",
            "Breath sounds, effort, and oxygen needs",
            "Only lung capacity",
            "Only cough assessment"
          ],
          correctAnswer: 1,
          explanation: "Respiratory assessment includes rate, rhythm, effort, breath sounds, oxygen saturation, and cough characteristics."
        },
        {
          id: 17,
          question: "Why prioritize problems in assessment?",
          options: [
            "To complete paperwork faster",
            "To address most urgent issues first",
            "To impress supervisors",
            "To simplify documentation"
          ],
          correctAnswer: 1,
          explanation: "Prioritizing ensures life-threatening or most urgent problems receive immediate attention while less critical issues are addressed subsequently."
        },
        {
          id: 18,
          question: "What should be assessed in extremities?",
          options: [
            "Only movement",
            "Circulation, movement, sensation, and strength",
            "Only skin condition",
            "Only joint flexibility"
          ],
          correctAnswer: 1,
          explanation: "Extremity assessment includes circulation (pulses, color, temperature), movement, sensation, strength, and skin integrity."
        },
        {
          id: 19,
          question: "What is a problem list?",
          options: [
            "List of patient complaints",
            "Organized list of identified health issues",
            "List of medications",
            "Schedule of appointments"
          ],
          correctAnswer: 1,
          explanation: "A problem list organizes identified health issues by priority for coordinated care planning and tracking."
        },
        {
          id: 20,
          question: "How does assessment guide interventions?",
          options: [
            "By guessing what might help",
            "Based on identified needs and findings",
            "By following standard protocols only",
            "Based on what was done for previous patients"
          ],
          correctAnswer: 1,
          explanation: "Assessment findings directly guide intervention selection by identifying specific patient needs and responses requiring attention."
        }
      ]
    },
    {
      id: 2,
      title: "Complex Care Planning",
      content: `# Module 2: Complex Care Planning

## Holistic Care Approach
Registered nurses develop comprehensive care plans that address physical, emotional, social, and spiritual needs. This holistic approach promotes complete healing and patient well-being.

## Nursing Process Application
Applying the nursing process to complex situations:
1. **Assessment** - Comprehensive data collection
2. **Diagnosis** - Identifying actual and potential problems
3. **Planning** - Setting goals and selecting interventions
4. **Implementation** - Carrying out planned care
5. **Evaluation** - Measuring outcomes and adjusting plans

## Goal Setting Principles
Effective goals are:
- **Patient-Centered** - Based on patient values and preferences
- **Specific** - Clear and unambiguous
- **Measurable** - With concrete criteria for success
- **Achievable** - Realistic given resources and constraints
- **Time-Bound** - With expected completion timeframe

## Interdisciplinary Collaboration
Working with healthcare team members:
- **Physicians** - Medical diagnosis and treatment orders
- **Therapists** - Rehabilitation and functional goals
- **Social Workers** - Psychosocial and discharge planning
- **Pharmacists** - Medication management and education
- **Dietitians** - Nutritional planning and support

## Evidence-Based Interventions
Selecting interventions supported by research:
- **Clinical Guidelines** - Professionally developed protocols
- **Best Practices** - Proven effective approaches
- **Research Evidence** - Scientific studies and data
- **Quality Indicators** - Standards for excellent care

## Patient and Family Education
Developing comprehensive teaching plans:
- **Learning Needs Assessment** - Identifying knowledge gaps
- **Teaching Methods** - Appropriate for learning styles
- **Health Literacy** - Matching information to understanding level
- **Evaluation of Learning** - Confirming knowledge acquisition

## Discharge Planning
Preparing patients for transition from healthcare facility:
- **Early Start** - Beginning at admission
- **Comprehensive Assessment** - Home environment and support
- **Resource Identification** - Community services available
- **Follow-up Planning** - Ongoing care arrangements

## Ethical Considerations in Care Planning
Addressing ethical challenges:
- **Autonomy** - Respecting patient choices
- **Beneficence** - Promoting patient well-being
- **Non-maleficence** - Avoiding harm
- **Justice** - Fair distribution of resources
- **Veracity** - Truthfulness in communication

## Documentation of Care Plans
Professional documentation includes:
- **Care Plan Format** - Standardized or customized
- **Progress Notes** - Tracking implementation
- **Revisions** - Updating as patient status changes
- **Communication** - Sharing with healthcare team

## Quality Improvement Integration
Using care plans to improve quality:
- **Outcome Measurement** - Tracking patient results
- **Process Evaluation** - Assessing care delivery
- **Benchmarking** - Comparing to standards
- **Continuous Improvement** - Making ongoing enhancements`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does holistic care planning address?",
          options: [
            "Only physical needs",
            "Physical, emotional, social, and spiritual needs",
            "Only medical treatments",
            "Only what doctors order"
          ],
          correctAnswer: 1,
          explanation: "Holistic care planning addresses all aspects of patient well-being including physical, emotional, social, and spiritual dimensions."
        },
        {
          id: 2,
          question: "What are the five steps of the nursing process?",
          options: [
            "Look, think, act, check, document",
            "Assessment, diagnosis, planning, implementation, evaluation",
            "Admit, assess, treat, discharge, follow-up",
            "Observe, report, intervene, evaluate, record"
          ],
          correctAnswer: 1,
          explanation: "The nursing process consists of assessment, diagnosis, planning, implementation, and evaluation in continuous cycle."
        },
        {
          id: 3,
          question: "What makes goals measurable?",
          options: [
            "They sound impressive",
            "They have concrete criteria for success",
            "They are difficult to achieve",
            "They are written in medical terms"
          ],
          correctAnswer: 1,
          explanation: "Measurable goals have specific, concrete criteria that allow clear determination of whether they have been achieved."
        },
        {
          id: 4,
          question: "Who might be part of interdisciplinary team?",
          options: [
            "Only nurses and doctors",
            "Physicians, therapists, social workers, pharmacists",
            "Only healthcare providers",
            "Only hospital staff"
          ],
          correctAnswer: 1,
          explanation: "Interdisciplinary teams include various professionals like physicians, nurses, therapists, social workers, and pharmacists."
        },
        {
          id: 5,
          question: "What are evidence-based interventions?",
          options: [
            "Whatever has always been done",
            "Approaches supported by research evidence",
            "Doctor's personal preferences",
            "The cheapest available options"
          ],
          correctAnswer: 1,
          explanation: "Evidence-based interventions are supported by scientific research, clinical expertise, and patient preferences."
        },
        {
          id: 6,
          question: "When should discharge planning begin?",
          options: [
            "The day before discharge",
            "At admission to healthcare facility",
            "When doctor writes discharge order",
            "After patient asks to go home"
          ],
          correctAnswer: 1,
          explanation: "Discharge planning should begin at admission to ensure adequate preparation and resource arrangement for safe transition."
        },
        {
          id: 7,
          question: "What does autonomy mean in ethical care?",
          options: [
            "Nurse independence",
            "Respecting patient choices",
            "Following all doctor orders",
            "Hospital policies"
          ],
          correctAnswer: 1,
          explanation: "Autonomy means respecting patients' right to make their own healthcare decisions based on their values and preferences."
        },
        {
          id: 8,
          question: "What should patient education address?",
          options: [
            "Only medication instructions",
            "Identified learning needs and knowledge gaps",
            "Whatever nurse thinks is important",
            "Only written materials"
          ],
          correctAnswer: 1,
          explanation: "Patient education should address specifically identified learning needs and knowledge gaps through appropriate teaching methods."
        },
        {
          id: 9,
          question: "What is beneficence in ethical practice?",
          options: [
            "Avoiding harm to patients",
            "Promoting patient well-being",
            "Telling the complete truth",
            "Treating all patients equally"
          ],
          correctAnswer: 1,
          explanation: "Beneficence is the ethical principle of promoting good and acting in the best interest of patients."
        },
        {
          id: 10,
          question: "What should care plan documentation include?",
          options: [
            "Only nursing diagnoses",
            "Goals, interventions, and evaluation criteria",
            "Only what was actually done",
            "Only patient complaints"
          ],
          correctAnswer: 1,
          explanation: "Care plan documentation should include nursing diagnoses, goals, selected interventions, and criteria for evaluation."
        },
        {
          id: 11,
          question: "Why involve families in care planning?",
          options: [
            "To reduce nurse workload",
            "For support and continuity of care",
            "Because hospitals require it",
            "To teach them nursing skills"
          ],
          correctAnswer: 1,
          explanation: "Family involvement provides emotional support, enhances continuity of care, and improves patient outcomes through collaborative approach."
        },
        {
          id: 12,
          question: "What is non-maleficence?",
          options: [
            "Promoting good outcomes",
            "Avoiding harm to patients",
            "Respecting patient choices",
            "Fair resource distribution"
          ],
          correctAnswer: 1,
          explanation: "Non-maleficence is the ethical principle of avoiding harm or minimizing risk of harm to patients."
        },
        {
          id: 13,
          question: "What makes goals patient-centered?",
          options: [
            "Based on nurse's preferences",
            "Aligned with patient values and preferences",
            "Easy for staff to accomplish",
            "Standard for all patients"
          ],
          correctAnswer: 1,
          explanation: "Patient-centered goals reflect the patient's own values, preferences, and desired outcomes rather than staff convenience."
        },
        {
          id: 14,
          question: "What should discharge assessment include?",
          options: [
            "Only physical ability",
            "Home environment and support systems",
            "Only transportation needs",
            "Only medication supply"
          ],
          correctAnswer: 1,
          explanation: "Discharge assessment should evaluate home safety, available support systems, and resources needed for continued care."
        },
        {
          id: 15,
          question: "What is veracity in ethics?",
          options: [
            "Avoiding harm",
            "Truthfulness in communication",
            "Promoting well-being",
            "Fair treatment"
          ],
          correctAnswer: 1,
          explanation: "Veracity is the ethical principle of truthfulness and honesty in all communications with patients and families."
        },
        {
          id: 16,
          question: "How are care plans evaluated?",
          options: [
            "By whether nurses like them",
            "By measuring patient outcomes",
            "By how quickly completed",
            "By supervisor approval"
          ],
          correctAnswer: 1,
          explanation: "Care plans are evaluated by measuring whether patient goals are achieved and outcomes are improved."
        },
        {
          id: 17,
          question: "What does justice mean in healthcare ethics?",
          options: [
            "Legal compliance",
            "Fair distribution of resources",
            "Punishing wrong actions",
            "Following rules exactly"
          ],
          correctAnswer: 1,
          explanation: "Justice refers to fair, equitable, and appropriate distribution of healthcare resources and services."
        },
        {
          id: 18,
          question: "Why use standardized care plans?",
          options: [
            "To save time writing",
            "To ensure evidence-based care and consistency",
            "Because they're required",
            "To avoid thinking"
          ],
          correctAnswer: 1,
          explanation: "Standardized care plans promote evidence-based practice, ensure consistency, and provide baseline for individualization."
        },
        {
          id: 19,
          question: "What should teaching methods consider?",
          options: [
            "Only available materials",
            "Patient learning styles and preferences",
            "Only what nurse knows best",
            "Standard hospital handouts"
          ],
          correctAnswer: 1,
          explanation: "Teaching methods should match individual learning styles, preferences, and capabilities for most effective education."
        },
        {
          id: 20,
          question: "How does care planning support quality improvement?",
          options: [
            "By increasing paperwork",
            "Through outcome measurement and process evaluation",
            "By making nurses look busy",
            "Through compliance with policies"
          ],
          correctAnswer: 1,
          explanation: "Care planning supports quality improvement by establishing measurable outcomes and processes that can be evaluated and improved."
        }
      ]
    },
    {
      id: 3,
      title: "Clinical Decision Making",
      content: `# Module 3: Clinical Decision Making

## Critical Thinking in Nursing
Clinical decision making requires systematic critical thinking to analyze complex situations, weigh alternatives, and choose the best course of action for patient care.

## Clinical Reasoning Process
A structured approach to decision making:
1. **Situation Awareness** - Understanding current context
2. **Information Gathering** - Collecting relevant data
3. **Pattern Recognition** - Identifying meaningful connections
4. **Hypothesis Generation** - Considering possible explanations
5. **Decision Point** - Choosing among alternatives
6. **Action Implementation** - Carrying out chosen approach
7. **Outcome Evaluation** - Assessing results of decisions

## Evidence-Based Practice Integration
Using research to inform decisions:
- **Research Appraisal** - Evaluating study quality
- **Clinical Guidelines** - Applying professional standards
- **Best Available Evidence** - Current scientific knowledge
- **Patient Preferences** - Individual values and choices
- **Clinical Expertise** - Professional judgment and experience

## Prioritization Frameworks
Systems for determining urgency:
- **ABCs** - Airway, Breathing, Circulation
- **Maslow's Hierarchy** - Basic needs first
- **Acute vs Chronic** - Immediate threats before ongoing issues
- **Patient Safety** - Preventing harm as priority
- **Resource Availability** - Considering what's realistically possible

## Ethical Decision Making
Navigating moral dilemmas:
- **Ethical Principles** - Autonomy, beneficence, non-maleficence, justice
- **Decision Models** - Structured approaches to ethical problems
- **Stakeholder Consideration** - All affected parties
- **Consequence Evaluation** - Potential outcomes of choices
- **Legal Implications** - Compliance with laws and regulations

## Risk Assessment and Management
Identifying and addressing potential harms:
- **Risk Identification** - Recognizing possible dangers
- **Probability Estimation** - Likelihood of adverse events
- **Impact Assessment** - Potential severity of harm
- **Prevention Strategies** - Actions to reduce risk
- **Contingency Planning** - Preparation for possible problems

## Delegation Decisions
Determining appropriate task assignment:
- **Scope of Practice** - Legal boundaries for different roles
- **Competency Assessment** - Individual skill levels
- **Supervision Requirements** - Necessary oversight
- **Accountability** - Ultimate responsibility for outcomes
- **Communication** - Clear instructions and expectations

## Communication in Decision Making
Effective information exchange:
- **SBAR Technique** - Structured communication format
- **Handoff Reports** - Complete transfer of information
- **Documentation** - Clear record of decisions and rationale
- **Team Collaboration** - Shared decision making when appropriate
- **Patient Involvement** - Including patients in decisions

## Reflective Practice
Learning from experience:
- **Self-Assessment** - Evaluating own decision processes
- **Case Review** - Analyzing specific situations
- **Mentorship** - Learning from experienced colleagues
- **Continuing Education** - Updating knowledge and skills
- **Practice Improvement** - Applying lessons to future decisions

## Crisis Decision Making
Making effective choices under pressure:
- **Remaining Calm** - Managing stress response
- **Rapid Assessment** - Quick but thorough evaluation
- **Clear Communication** - Concise, direct information exchange
- **Team Coordination** - Effective collaboration under pressure
- **Post-Crisis Review** - Learning from emergency situations`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is clinical reasoning?",
          options: [
            "Guessing what might work",
            "Structured thinking process for clinical decisions",
            "Following doctor orders exactly",
            "Using intuition only"
          ],
          correctAnswer: 1,
          explanation: "Clinical reasoning is a systematic thinking process that analyzes data, considers alternatives, and selects appropriate actions."
        },
        {
          id: 2,
          question: "What are the ABCs of prioritization?",
          options: [
            "Assessment, Briefing, Communication",
            "Airway, Breathing, Circulation",
            "Admission, Bedside, Charting",
            "Always Be Careful"
          ],
          correctAnswer: 1,
          explanation: "ABC prioritization addresses Airway, Breathing, and Circulation first as they are essential for life."
        },
        {
          id: 3,
          question: "What does evidence-based practice combine?",
          options: [
            "Only research studies",
            "Research evidence, clinical expertise, patient preferences",
            "Only hospital policies",
            "Only what doctors say"
          ],
          correctAnswer: 1,
          explanation: "Evidence-based practice integrates best research evidence with clinical expertise and patient values/preferences."
        },
        {
          id: 4,
          question: "What ethical principle involves avoiding harm?",
          options: [
            "Autonomy",
            "Non-maleficence",
            "Beneficence",
            "Justice"
          ],
          correctAnswer: 1,
          explanation: "Non-maleficence is the ethical principle of avoiding harm or minimizing risk of harm to patients."
        },
        {
          id: 5,
          question: "What should delegation decisions consider?",
          options: [
            "Only who is available",
            "Scope of practice and individual competency",
            "Only shift schedules",
            "Only nurse preferences"
          ],
          correctAnswer: 1,
          explanation: "Delegation decisions must consider legal scope of practice and individual competence to perform tasks safely."
        },
        {
          id: 6,
          question: "What is situation awareness?",
          options: [
            "Knowing hospital layout",
            "Understanding current clinical context",
            "Being aware of shift changes",
            "Knowing patient names"
          ],
          correctAnswer: 1,
          explanation: "Situation awareness involves understanding the complete clinical context before making decisions."
        },
        {
          id: 7,
          question: "What does risk management involve?",
          options: [
            "Only documenting incidents",
            "Identifying and addressing potential harms",
            "Only following safety protocols",
            "Only wearing protective equipment"
          ],
          correctAnswer: 1,
          explanation: "Risk management includes identifying potential harms, assessing probability and impact, and implementing prevention strategies."
        },
        {
          id: 8,
          question: "What is reflective practice?",
          options: [
            "Thinking about personal life",
            "Learning from clinical experiences",
            "Looking in mirrors",
            "Meditating at work"
          ],
          correctAnswer: 1,
          explanation: "Reflective practice involves systematically reviewing clinical experiences to learn and improve future decision making."
        },
        {
          id: 9,
          question: "What does SBAR facilitate?",
          options: [
            "Social interactions",
            "Structured communication",
            "Shift scheduling",
            "Supply ordering"
          ],
          correctAnswer: 1,
          explanation: "SBAR (Situation, Background, Assessment, Recommendation) provides structured format for clear clinical communication."
        },
        {
          id: 10,
          question: "What should happen in post-crisis review?",
          options: [
            "Assigning blame",
            "Learning for future improvement",
            "Forgetting the incident",
            "Praising everyone involved"
          ],
          correctAnswer: 1,
          explanation: "Post-crisis review should focus on learning what worked well and what could be improved for future situations."
        },
        {
          id: 11,
          question: "What is pattern recognition in clinical reasoning?",
          options: [
            "Identifying patient faces",
            "Seeing meaningful connections in data",
            "Recognizing staff members",
            "Remembering room numbers"
          ],
          correctAnswer: 1,
          explanation: "Pattern recognition involves identifying meaningful connections and relationships in clinical data."
        },
        {
          id: 12,
          question: "What does autonomy respect?",
          options: [
            "Hospital rules",
            "Patient choices and self-determination",
            "Doctor authority",
            "Nurse preferences"
          ],
          correctAnswer: 1,
          explanation: "Autonomy respects patients' right to make their own healthcare decisions based on personal values."
        },
        {
          id: 13,
          question: "Why involve patients in decisions?",
          options: [
            "To reduce legal risk",
            "To respect autonomy and improve adherence",
            "Because hospitals require it",
            "To shift responsibility"
          ],
          correctAnswer: 1,
          explanation: "Patient involvement respects autonomy and often improves treatment adherence and satisfaction."
        },
        {
          id: 14,
          question: "What does beneficence promote?",
          options: [
            "Following orders",
            "Patient well-being and good outcomes",
            "Quick decisions",
            "Cost savings"
          ],
          correctAnswer: 1,
          explanation: "Beneficence involves actively promoting patient well-being and positive health outcomes."
        },
        {
          id: 15,
          question: "What should crisis communication be?",
          options: [
            "Detailed and comprehensive",
            "Concise and direct",
            "Whispered to avoid alarm",
            "Delayed until certain"
          ],
          correctAnswer: 1,
          explanation: "Crisis communication should be concise, direct, and clear to ensure rapid understanding and response."
        },
        {
          id: 16,
          question: "What is hypothesis generation?",
          options: [
            "Proving theories",
            "Considering possible explanations for findings",
            "Writing research papers",
            "Guessing outcomes"
          ],
          correctAnswer: 1,
          explanation: "Hypothesis generation involves considering possible explanations or interpretations of clinical findings."
        },
        {
          id: 17,
          question: "What does justice consider in decisions?",
          options: [
            "Only patient needs",
            "Fair distribution of resources",
            "Only what's cheapest",
            "Only hospital profits"
          ],
          correctAnswer: 1,
          explanation: "Justice considers fair, equitable distribution of healthcare resources among all patients."
        },
        {
          id: 18,
          question: "Why document decision rationale?",
          options: [
            "To fill charts",
            "For continuity and legal protection",
            "Because supervisors require it",
            "To impress colleagues"
          ],
          correctAnswer: 1,
          explanation: "Documenting decision rationale ensures continuity of care and provides legal protection through clear reasoning record."
        },
        {
          id: 19,
          question: "What should mentorship provide?",
          options: [
            "Only friendship",
            "Guidance and learning from experience",
            "Only shift coverage",
            "Only social support"
          ],
          correctAnswer: 1,
          explanation: "Mentorship provides guidance, shares experiential knowledge, and supports professional development."
        },
        {
          id: 20,
          question: "What does contingency planning prepare for?",
          options: [
            "Staff vacations",
            "Possible problems or complications",
            "Budget meetings",
            "Equipment maintenance"
          ],
          correctAnswer: 1,
          explanation: "Contingency planning prepares for potential problems or complications that might arise."
        }
      ]
    },
    {
      id: 4,
      title: "Specialized Nursing Interventions",
      content: `# Module 4: Specialized Nursing Interventions

## Advanced Clinical Skills
Registered nurses perform specialized interventions requiring advanced knowledge and technical competence. These skills address complex patient needs across various healthcare settings.

## Intravenous Therapy Management
Comprehensive IV care includes:
- **Site Selection** - Appropriate vein assessment and choice
- **Insertion Technique** - Sterile procedure with minimal patient discomfort
- **Solution Administration** - Correct rate and volume calculations
- **Complication Management** - Infiltration, phlebitis, infection recognition
- **Device Maintenance** - Dressing changes and line care protocols

## Wound Care Management
Advanced wound treatment techniques:
- **Wound Assessment** - Staging, measurement, classification
- **Dressing Selection** - Matching products to wound characteristics
- **Advanced Modalities** - Negative pressure therapy, specialty beds
- **Infection Control** - Recognizing and treating wound infections
- **Healing Promotion** - Nutrition, circulation, moisture balance

## Pain Management Strategies
Comprehensive approach to pain control:
- **Pain Assessment Tools** - Validated scales for different populations
- **Pharmacological Management** - Analgesic administration and monitoring
- **Non-Pharmacological Methods** - Positioning, distraction, relaxation
- **Patient-Controlled Analgesia** - PCA pump management and education
- **Multimodal Approach** - Combining different pain relief methods

## Respiratory Care Interventions
Advanced pulmonary support:
- **Oxygen Therapy** - Various delivery systems and titration
- **Airway Management** - Suctioning techniques and safety
- **Breathing Exercises** - Teaching and supervising techniques
- **Ventilator Care** - Basic management of mechanically ventilated patients
- **Chest Physiotherapy** - Postural drainage and percussion

## Cardiac Care Monitoring
Specialized cardiovascular interventions:
- **Telemetry Monitoring** - Rhythm strip interpretation
- **Hemodynamic Monitoring** - Understanding pressure readings
- **Cardiac Medication Administration** - Special considerations
- **Defibrillation Preparation** - Equipment readiness and safety
- **Post-Cardiac Procedure Care** - Specific recovery protocols

## Neurological Care Interventions
Specialized neuro nursing:
- **Neurological Monitoring** - Glasgow Coma Scale, pupil checks
- **Seizure Precautions** - Safety measures and management
- **Increased ICP Management** - Positioning and monitoring
- **Spinal Care** - Logrolling and immobilization techniques
- **Stroke Care Protocols** - Time-sensitive interventions

## Diabetic Care Management
Comprehensive diabetes nursing:
- **Blood Glucose Monitoring** - Technique and interpretation
- **Insulin Administration** - Various types and delivery methods
- **Hypo/Hyperglycemia Management** - Recognition and treatment
- **Foot Care Education** - Prevention of complications
- **Nutritional Guidance** - Meal planning and carbohydrate counting

## Palliative and End-of-Life Care
Comfort-focused interventions:
- **Symptom Management** - Comprehensive comfort measures
- **Communication Skills** - Difficult conversations with sensitivity
- **Family Support** - Emotional and practical assistance
- **Ethical Considerations** - Advance directives and decision making
- **Bereavement Support** - Guidance through grieving process

## Patient and Family Education
Advanced teaching skills:
- **Learning Style Assessment** - Adapting to individual preferences
- **Complex Information Simplification** - Making difficult concepts understandable
- **Motivational Interviewing** - Encouraging behavior change
- **Health Literacy Consideration** - Matching information to understanding level
- **Evaluation of Learning** - Confirming knowledge acquisition`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is important in IV site selection?",
          options: [
            "Using the closest vein",
            "Appropriate vein assessment and patient factors",
            "Only using hand veins",
            "Choosing any visible vein"
          ],
          correctAnswer: 1,
          explanation: "IV site selection considers vein condition, patient activity, treatment duration, and avoiding areas of flexion or infection."
        },
        {
          id: 2,
          question: "What should wound assessment include?",
          options: [
            "Only size measurement",
            "Staging, measurement, classification, and characteristics",
            "Only drainage amount",
            "Only pain level"
          ],
          correctAnswer: 1,
          explanation: "Comprehensive wound assessment includes staging, measurements, classification, drainage characteristics, and surrounding skin condition."
        },
        {
          id: 3,
          question: "What are non-pharmacological pain methods?",
          options: [
            "Only stronger medications",
            "Positioning, distraction, relaxation techniques",
            "Only surgery",
            "Only ignoring pain"
          ],
          correctAnswer: 1,
          explanation: "Non-pharmacological pain methods include positioning, distraction, relaxation, heat/cold therapy, and other comfort measures."
        },
        {
          id: 4,
          question: "What does oxygen therapy titration mean?",
          options: [
            "Giving maximum oxygen",
            "Adjusting delivery based on patient needs",
            "Only using nasal cannula",
            "Keeping oxygen constant"
          ],
          correctAnswer: 1,
          explanation: "Oxygen titration involves adjusting flow rates or concentrations based on patient oxygenation status and response."
        },
        {
          id: 5,
          question: "What is telemetry monitoring?",
          options: [
            "Temperature monitoring",
            "Continuous cardiac rhythm monitoring",
            "Blood pressure tracking",
            "Respiratory rate counting"
          ],
          correctAnswer: 1,
          explanation: "Telemetry provides continuous cardiac rhythm monitoring through wireless transmission to central stations."
        },
        {
          id: 6,
          question: "What does Glasgow Coma Scale assess?",
          options: [
            "Only eye opening",
            "Level of consciousness through eye, verbal, motor responses",
            "Only pain response",
            "Only memory function"
          ],
          correctAnswer: 1,
          explanation: "Glasgow Coma Scale assesses level of consciousness through eye opening, verbal response, and motor response scores."
        },
        {
          id: 7,
          question: "What should blood glucose monitoring include?",
          options: [
            "Only fingerstick technique",
            "Proper technique, timing, and interpretation",
            "Only when patient feels bad",
            "Only before meals"
          ],
          correctAnswer: 1,
          explanation: "Blood glucose monitoring includes proper technique, appropriate timing, accurate interpretation, and appropriate response."
        },
        {
          id: 8,
          question: "What is palliative care focus?",
          options: [
            "Cure of disease",
            "Comfort and quality of life",
            "Life extension at all costs",
            "Only end-of-life"
          ],
          correctAnswer: 1,
          explanation: "Palliative care focuses on comfort, symptom management, and quality of life regardless of disease stage or treatment goals."
        },
        {
          id: 9,
          question: "What is negative pressure wound therapy?",
          options: [
            "Applying pressure to stop bleeding",
            "Using vacuum to promote healing",
            "Keeping wounds dry",
            "Massaging around wounds"
          ],
          correctAnswer: 1,
          explanation: "Negative pressure wound therapy uses controlled suction to remove excess fluid, promote circulation, and encourage healing."
        },
        {
          id: 10,
          question: "What is PCA pump management?",
          options: [
            "Patient choosing their own medications",
            "Patient-controlled analgesia with safety monitoring",
            "Nurse-controlled pain medication",
            "Automatic pain medication delivery"
          ],
          correctAnswer: 1,
          explanation: "PCA allows patients to self-administer preset doses of analgesia with safety limits and nurse monitoring."
        },
        {
          id: 11,
          question: "What are seizure precautions?",
          options: [
            "Only medication administration",
            "Safety measures to prevent injury during seizures",
            "Avoiding all stimulation",
            "Keeping patients restrained"
          ],
          correctAnswer: 1,
          explanation: "Seizure precautions include padded side rails, airway protection, and safety measures to prevent injury during seizures."
        },
        {
          id: 12,
          question: "What is logrolling technique for?",
          options: [
            "Exercise therapy",
            "Turning spinal injury patients",
            "Massage therapy",
            "Positioning for x-rays"
          ],
          correctAnswer: 1,
          explanation: "Logrolling maintains spinal alignment when turning patients with potential or actual spinal injuries."
        },
        {
          id: 13,
          question: "What does hemodynamic monitoring measure?",
          options: [
            "Only heart rate",
            "Cardiovascular function through pressure readings",
            "Only blood pressure",
            "Only oxygen saturation"
          ],
          correctAnswer: 1,
          explanation: "Hemodynamic monitoring measures cardiovascular function through various pressure readings like CVP, arterial, and pulmonary pressures."
        },
        {
          id: 14,
          question: "What should insulin administration consider?",
          options: [
            "Only dose amount",
            "Type, timing, site rotation, and patient factors",
            "Only blood sugar level",
            "Only meal times"
          ],
          correctAnswer: 1,
          explanation: "Insulin administration considers type (rapid, short, intermediate, long), timing, site rotation, and individual patient factors."
        },
        {
          id: 15,
          question: "What is motivational interviewing?",
          options: [
            "Giving motivational speeches",
            "Encouraging behavior change through conversation",
            "Forcing patients to comply",
            "Reading educational materials"
          ],
          correctAnswer: 1,
          explanation: "Motivational interviewing uses collaborative conversation to strengthen personal motivation for behavior change."
        },
        {
          id: 16,
          question: "What is chest physiotherapy?",
          options: [
            "Chest massage",
            "Techniques to clear pulmonary secretions",
            "Breathing exercises only",
            "Chest percussion without positioning"
          ],
          correctAnswer: 1,
          explanation: "Chest physiotherapy includes postural drainage, percussion, vibration, and breathing exercises to clear pulmonary secretions."
        },
        {
          id: 17,
          question: "What should stroke care protocols emphasize?",
          options: [
            "Slow careful assessment",
            "Time-sensitive interventions and rapid response",
            "Only rehabilitation",
            "Only medication administration"
          ],
          correctAnswer: 1,
          explanation: "Stroke care emphasizes time-sensitive interventions since 'time is brain' in minimizing neuronal damage."
        },
        {
          id: 18,
          question: "What does health literacy consideration involve?",
          options: [
            "Using complex medical terms",
            "Matching information to patient understanding level",
            "Only written materials",
            "Speaking slowly"
          ],
          correctAnswer: 1,
          explanation: "Health literacy consideration involves assessing and matching information delivery to patient's understanding level and preferences."
        },
        {
          id: 19,
          question: "What is increased ICP management?",
          options: [
            "Increasing fluid intake",
            "Positioning and interventions to reduce intracranial pressure",
            "Lowering the head",
            "Massaging the head"
          ],
          correctAnswer: 1,
          explanation: "Increased ICP management includes head elevation, avoiding straining, and specific interventions to reduce intracranial pressure."
        },
        {
          id: 20,
          question: "Why evaluate learning after education?",
          options: [
            "To complete documentation",
            "To confirm knowledge acquisition and understanding",
            "Because it's required",
            "To test patient memory"
          ],
          correctAnswer: 1,
          explanation: "Learning evaluation confirms knowledge acquisition, identifies gaps, and ensures understanding for safe self-care."
        }
      ]
    },
    {
      id: 5,
      title: "Leadership in Nursing Practice",
      content: `# Module 5: Leadership in Nursing Practice

## Nursing Leadership Foundations
Registered nurses provide leadership in various healthcare settings, influencing patient outcomes, team performance, and organizational success through effective leadership practices.

## Leadership Styles and Approaches
Different approaches for different situations:
- **Transformational Leadership** - Inspiring and motivating teams toward shared vision
- **Transactional Leadership** - Clear expectations and reward systems
- **Servant Leadership** - Prioritizing team member growth and needs
- **Situational Leadership** - Adapting style to circumstances and team maturity
- **Democratic Leadership** - Involving team in decision making

## Team Management Skills
Effective team leadership includes:
- **Role Clarification** - Clear expectations for each team member
- **Performance Management** - Feedback, coaching, and evaluation
- **Conflict Resolution** - Addressing disagreements constructively
- **Team Development** - Building cohesive, effective work groups
- **Resource Allocation** - Fair distribution of workload and support

## Change Management
Leading healthcare innovation and improvement:
- **Change Theory Application** - Understanding how change occurs
- **Stakeholder Engagement** - Involving those affected by changes
- **Communication Strategies** - Clear messaging about changes
- **Resistance Management** - Addressing concerns and objections
- **Evaluation of Change** - Measuring impact and success

## Quality and Safety Leadership
Promoting excellence in patient care:
- **Quality Improvement Methods** - PDSA, root cause analysis, benchmarking
- **Safety Culture Development** - Creating environment prioritizing safety
- **Error Prevention Strategies** - Systems approaches to reduce mistakes
- **Patient Advocacy** - Speaking up for patient needs and rights
- **Evidence-Based Practice Promotion** - Implementing proven approaches

## Professional Development
Supporting growth of self and others:
- **Mentorship Programs** - Structured guidance for less experienced nurses
- **Continuing Education** - Supporting ongoing learning and development
- **Career Pathway Guidance** - Helping nurses plan professional growth
- **Competency Assessment** - Evaluating and developing skills
- **Succession Planning** - Preparing future nursing leaders

## Ethical Leadership
Modeling and promoting ethical practice:
- **Moral Courage** - Willingness to act on ethical principles
- **Role Modeling** - Demonstrating ethical behavior
- **Ethical Climate Creation** - Fostering environment supporting ethics
- **Decision Transparency** - Clear reasoning for difficult choices
- **Whistleblower Protection** - Supporting ethical reporting

## Communication Leadership
Advanced communication for leaders:
- **Active Listening** - Truly understanding team perspectives
- **Constructive Feedback** - Helpful, specific performance input
- **Difficult Conversations** - Addressing challenging topics effectively
- **Meeting Facilitation** - Productive, efficient group discussions
- **Organizational Communication** - Navigating hierarchy and politics

## Resource Management
Effective use of healthcare resources:
- **Budget Understanding** - Basic financial management principles
- **Staffing Optimization** - Appropriate nurse-patient ratios
- **Supply Management** - Efficient use of materials and equipment
- **Time Management** - Prioritizing and organizing work effectively
- **Technology Utilization** - Effective use of healthcare systems

## Self-Leadership
Managing personal professional growth:
- **Self-Awareness** - Understanding personal strengths and areas for growth
- **Stress Management** - Healthy coping with leadership pressures
- **Work-Life Balance** - Maintaining personal well-being
- **Professional Boundaries** - Appropriate work relationships
- **Continuous Self-Improvement** - Ongoing personal development`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is transformational leadership?",
          options: [
            "Giving orders",
            "Inspiring teams toward shared vision",
            "Managing transactions",
            "Following rules exactly"
          ],
          correctAnswer: 1,
          explanation: "Transformational leadership inspires and motivates teams toward shared vision through inspiration and intellectual stimulation."
        },
        {
          id: 2,
          question: "What should performance management include?",
          options: [
            "Only annual evaluations",
            "Feedback, coaching, and development",
            "Only disciplinary actions",
            "Only praise for good work"
          ],
          correctAnswer: 1,
          explanation: "Performance management includes regular feedback, coaching for improvement, and development opportunities."
        },
        {
          id: 3,
          question: "Why engage stakeholders in change?",
          options: [
            "To avoid responsibility",
            "For buy-in and successful implementation",
            "Because it's required",
            "To spread blame"
          ],
          correctAnswer: 1,
          explanation: "Stakeholder engagement creates buy-in, identifies concerns early, and improves change success through involvement."
        },
        {
          id: 4,
          question: "What does PDSA stand for in quality improvement?",
          options: [
            "Plan, Do, Study, Act",
            "Prepare, Deliver, Study, Adjust",
            "Problem, Diagnosis, Solution, Action",
            "Plan, Develop, Study, Apply"
          ],
          correctAnswer: 0,
          explanation: "PDSA (Plan-Do-Study-Act) is a quality improvement cycle for testing changes on small scale before implementation."
        },
        {
          id: 5,
          question: "What is mentorship?",
          options: [
            "Friendship at work",
            "Structured guidance for professional development",
            "Socializing with colleagues",
            "Covering shifts for others"
          ],
          correctAnswer: 1,
          explanation: "Mentorship involves experienced professionals providing structured guidance, support, and development for less experienced colleagues."
        },
        {
          id: 6,
          question: "What is moral courage in leadership?",
          options: [
            "Physical bravery",
            "Willingness to act on ethical principles",
            "Speaking loudly",
            "Following all rules"
          ],
          correctAnswer: 1,
          explanation: "Moral courage involves willingness to take ethical action even when difficult or potentially personally costly."
        },
        {
          id: 7,
          question: "What should constructive feedback be?",
          options: [
            "General and vague",
            "Specific, helpful, and focused on behavior",
            "Only positive",
            "Given in public"
          ],
          correctAnswer: 1,
          explanation: "Constructive feedback should be specific, focused on observable behaviors, and delivered to promote improvement."
        },
        {
          id: 8,
          question: "What does staffing optimization consider?",
          options: [
            "Only budget constraints",
            "Appropriate nurse-patient ratios and skill mix",
            "Only staff preferences",
            "Only manager convenience"
          ],
          correctAnswer: 1,
          explanation: "Staffing optimization balances patient needs, staff competencies, safety standards, and available resources."
        },
        {
          id: 9,
          question: "What is servant leadership?",
          options: [
            "Serving coffee to staff",
            "Prioritizing team member growth and needs",
            "Being submissive",
            "Doing all work personally"
          ],
          correctAnswer: 1,
          explanation: "Servant leadership prioritizes team member development, needs, and empowerment over leader's own interests."
        },
        {
          id: 10,
          question: "What is self-awareness in leadership?",
          options: [
            "Knowing your schedule",
            "Understanding personal strengths and growth areas",
            "Being selfish",
            "Only focusing on yourself"
          ],
          correctAnswer: 1,
          explanation: "Self-awareness involves understanding personal strengths, weaknesses, values, and impact on others."
        },
        {
          id: 11,
          question: "What does conflict resolution achieve?",
          options: [
            "Avoiding all disagreements",
            "Addressing issues constructively for resolution",
            "Making everyone happy",
            "Proving who is right"
          ],
          correctAnswer: 1,
          explanation: "Conflict resolution addresses disagreements constructively to find mutually acceptable solutions."
        },
        {
          id: 12,
          question: "Why manage resistance to change?",
          options: [
            "To punish resistors",
            "To understand concerns and address them",
            "To eliminate all opposition",
            "To prove authority"
          ],
          correctAnswer: 1,
          explanation: "Managing resistance involves understanding concerns, addressing valid issues, and helping people through transition."
        },
        {
          id: 13,
          question: "What is root cause analysis?",
          options: [
            "Finding who to blame",
            "Systematic process to identify underlying causes",
            "Guessing what happened",
            "Only looking at surface issues"
          ],
          correctAnswer: 1,
          explanation: "Root cause analysis systematically identifies underlying system issues rather than blaming individuals."
        },
        {
          id: 14,
          question: "What does succession planning prepare?",
          options: [
            "For staff vacations",
            "Future leadership pipeline and continuity",
            "Only for manager retirement",
            "Emergency coverage only"
          ],
          correctAnswer: 1,
          explanation: "Succession planning develops future leaders to ensure continuity and smooth transitions when positions become vacant."
        },
        {
          id: 15,
          question: "What is ethical climate creation?",
          options: [
            "Setting thermostat temperature",
            "Fostering environment supporting ethical practice",
            "Creating ethical rules",
            "Punishing unethical behavior"
          ],
          correctAnswer: 1,
          explanation: "Ethical climate creation involves fostering organizational culture that supports and rewards ethical behavior."
        },
        {
          id: 16,
          question: "What should meeting facilitation achieve?",
          options: [
            "Long discussions",
            "Productive, efficient, focused discussions",
            "Entertainment",
            "Filling required time"
          ],
          correctAnswer: 1,
          explanation: "Effective meeting facilitation ensures productive, focused discussions that achieve objectives efficiently."
        },
        {
          id: 17,
          question: "What does time management involve?",
          options: [
            "Working faster",
            "Prioritizing and organizing work effectively",
            "Only clock watching",
            "Avoiding breaks"
          ],
          correctAnswer: 1,
          explanation: "Time management involves prioritizing tasks, organizing workflow, and using time effectively to achieve goals."
        },
        {
          id: 18,
          question: "What is situational leadership?",
          options: [
            "Always using same approach",
            "Adapting style to circumstances and team",
            "Following situations",
            "Reacting to emergencies only"
          ],
          correctAnswer: 1,
          explanation: "Situational leadership adapts leadership approach based on situation, task, and team member development level."
        },
        {
          id: 19,
          question: "What promotes safety culture?",
          options: [
            "Only safety rules",
            "Environment prioritizing safety in all actions",
            "Only incident reporting",
            "Only equipment maintenance"
          ],
          correctAnswer: 1,
          explanation: "Safety culture involves environment where safety is prioritized, discussed openly, and integrated into all activities."
        },
        {
          id: 20,
          question: "Why maintain work-life balance?",
          options: [
            "To avoid work",
            "For personal well-being and sustained effectiveness",
            "Because it's trendy",
            "To have more free time"
          ],
          correctAnswer: 1,
          explanation: "Work-life balance maintains personal well-being, prevents burnout, and sustains long-term professional effectiveness."
        }
      ]
    },
    {
      id: 6,
      title: "Healthcare Systems and Policy",
      content: `# Module 6: Healthcare Systems and Policy

## Understanding Healthcare Systems
Registered nurses work within complex healthcare systems requiring understanding of structures, financing, regulations, and policies that shape patient care delivery.

## Healthcare Delivery Models
Different approaches to organizing care:
- **Primary Care** - First point of contact and ongoing care
- **Secondary Care** - Specialist services and hospital care
- **Tertiary Care** - Highly specialized treatment centers
- **Quaternary Care** - Experimental medicine and rare procedures
- **Integrated Care Systems** - Coordinated across settings and providers

## Healthcare Financing
Understanding how healthcare is paid for:
- **Insurance Systems** - Private, public, and hybrid models
- **Reimbursement Methods** - Fee-for-service, capitation, bundled payments
- **Healthcare Economics** - Cost, quality, and access balance
- **Budgeting Processes** - Healthcare facility financial management
- **Resource Allocation** - Ethical distribution of limited resources

## Regulatory Environment
Laws and regulations affecting nursing:
- **Licensing Requirements** - State nursing board regulations
- **Scope of Practice** - Legal boundaries for nursing activities
- **Accreditation Standards** - Healthcare facility quality requirements
- **Patient Rights Legislation** - Laws protecting healthcare consumers
- **Privacy Regulations** - HIPAA and other confidentiality requirements

## Quality and Safety Regulations
Standards ensuring safe care:
- **Regulatory Agencies** - CMS, Joint Commission, state departments
- **Quality Measures** - Performance indicators and reporting
- **Safety Standards** - Infection control, medication safety, fall prevention
- **Reporting Requirements** - Incident and error reporting systems
- **Compliance Monitoring** - Ensuring adherence to standards

## Healthcare Policy Development
How healthcare policies are created:
- **Policy Cycle** - Problem identification to evaluation
- **Stakeholder Involvement** - Various groups influencing policy
- **Evidence-Based Policy** - Using research to inform decisions
- **Implementation Strategies** - Putting policies into practice
- **Evaluation Methods** - Assessing policy effectiveness

## Nursing's Role in Policy
How nurses influence healthcare policy:
- **Advocacy** - Speaking up for patients and profession
- **Professional Organizations** - Collective influence through associations
- **Political Engagement** - Voting, contacting legislators, campaigning
- **Expert Testimony** - Providing nursing perspective to policymakers
- **Research Contribution** - Generating evidence for policy decisions

## Technology in Healthcare Systems
Digital transformation of healthcare:
- **Electronic Health Records** - Benefits and challenges of digital documentation
- **Telehealth** - Remote care delivery and monitoring
- **Clinical Decision Support** - Technology aiding clinical choices
- **Data Analytics** - Using healthcare data for improvement
- **Cybersecurity** - Protecting patient information and systems

## Global Health Perspectives
International healthcare considerations:
- **Health Disparities** - Differences in health outcomes between populations
- **Global Health Challenges** - Pandemics, antimicrobial resistance, access issues
- **Cultural Competence** - Providing appropriate care across cultures
- **International Standards** - Global healthcare guidelines and practices
- **Humanitarian Nursing** - Disaster response and resource-limited settings

## Future Healthcare Trends
Emerging directions in healthcare:
- **Population Health Management** - Addressing community health needs
- **Precision Medicine** - Personalized treatment approaches
- **Value-Based Care** - Paying for outcomes rather than services
- **Interprofessional Collaboration** - Team-based care models
- **Patient Empowerment** - Increasing patient role in healthcare decisions`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is primary care?",
          options: [
            "Hospital emergency care",
            "First point of contact and ongoing healthcare",
            "Specialist consultations",
            "Experimental treatments"
          ],
          correctAnswer: 1,
          explanation: "Primary care provides first contact, continuous, comprehensive care, and coordinates other services as needed."
        },
        {
          id: 2,
          question: "What does capitation reimbursement mean?",
          options: [
            "Payment per service provided",
            "Fixed payment per patient over time period",
            "Payment based on outcomes",
            "No payment system"
          ],
          correctAnswer: 1,
          explanation: "Capitation pays fixed amount per patient over time period regardless of services provided, encouraging efficiency."
        },
        {
          id: 3,
          question: "What does scope of practice define?",
          options: [
            "Work hours",
            "Legal boundaries for nursing activities",
            "Salary ranges",
            "Vacation time"
          ],
          correctAnswer: 1,
          explanation: "Scope of practice legally defines what activities nurses are authorized to perform based on education and licensure."
        },
        {
          id: 4,
          question: "What do quality measures assess?",
          options: [
            "Only patient satisfaction",
            "Healthcare performance indicators",
            "Only cost of care",
            "Only wait times"
          ],
          correctAnswer: 1,
          explanation: "Quality measures assess various aspects of healthcare performance including safety, effectiveness, and patient experience."
        },
        {
          id: 5,
          question: "What is the policy cycle?",
          options: [
            "Election schedule",
            "Process from problem identification to evaluation",
            "Budget calendar",
            "Staff meeting schedule"
          ],
          correctAnswer: 1,
          explanation: "Policy cycle includes problem identification, policy formulation, implementation, and evaluation stages."
        },
        {
          id: 6,
          question: "How can nurses influence policy?",
          options: [
            "Only through voting",
            "Through advocacy, professional organizations, and expertise",
            "Only by complaining",
            "Only through social media"
          ],
          correctAnswer: 1,
          explanation: "Nurses influence policy through advocacy, professional organizations, political engagement, and providing expert input."
        },
        {
          id: 7,
          question: "What does telehealth enable?",
          options: [
            "Only email communication",
            "Remote care delivery and monitoring",
            "Only prescription refills",
            "Only administrative tasks"
          ],
          correctAnswer: 1,
          explanation: "Telehealth enables remote clinical services, monitoring, and consultations using technology."
        },
        {
          id: 8,
          question: "What are health disparities?",
          options: [
            "Different insurance plans",
            "Differences in health outcomes between populations",
            "Varied hospital sizes",
            "Different medical specialties"
          ],
          correctAnswer: 1,
          explanation: "Health disparities are preventable differences in health outcomes experienced by socially disadvantaged populations."
        },
        {
          id: 9,
          question: "What is tertiary care?",
          options: [
            "Basic health services",
            "Highly specialized treatment and facilities",
            "Home healthcare",
            "Preventive services"
          ],
          correctAnswer: 1,
          explanation: "Tertiary care involves highly specialized medical care usually provided in referral centers for complex conditions."
        },
        {
          id: 10,
          question: "What is population health management?",
          options: [
            "Only counting people",
            "Addressing community health needs systematically",
            "Individual patient care only",
            "Hospital census tracking"
          ],
          correctAnswer: 1,
          explanation: "Population health management systematically addresses health outcomes of defined groups through targeted interventions."
        },
        {
          id: 11,
          question: "What does HIPAA protect?",
          options: [
            "Hospital profits",
            "Patient health information privacy",
            "Only paper records",
            "Only electronic records"
          ],
          correctAnswer: 1,
          explanation: "HIPAA protects privacy and security of patients' protected health information in all forms."
        },
        {
          id: 12,
          question: "What is value-based care?",
          options: [
            "Cheapest care possible",
            "Paying for outcomes rather than services",
            "Only high-cost treatments",
            "Care without payment"
          ],
          correctAnswer: 1,
          explanation: "Value-based care reimburses based on quality and outcomes rather than volume of services provided."
        },
        {
          id: 13,
          question: "What does accreditation ensure?",
          options: [
            "Only clean facilities",
            "Healthcare facility meets quality standards",
            "Only staff credentials",
            "Only equipment availability"
          ],
          correctAnswer: 1,
          explanation: "Accreditation certifies that healthcare facilities meet established quality and safety standards."
        },
        {
          id: 14,
          question: "Why is evidence-based policy important?",
          options: [
            "It sounds scientific",
            "It uses research to inform effective decisions",
            "It's required by law",
            "It's popular"
          ],
          correctAnswer: 1,
          explanation: "Evidence-based policy uses research and data to inform decisions likely to achieve desired outcomes."
        },
        {
          id: 15,
          question: "What does clinical decision support provide?",
          options: [
            "Only medication alerts",
            "Technology aiding clinical choices and safety",
            "Only diagnosis suggestions",
            "Only treatment protocols"
          ],
          correctAnswer: 1,
          explanation: "Clinical decision support systems provide clinicians with knowledge and information to enhance decision making."
        },
        {
          id: 16,
          question: "What is cultural competence?",
          options: [
            "Knowing many languages",
            "Providing appropriate care across cultures",
            "Only respecting traditions",
            "Only understanding customs"
          ],
          correctAnswer: 1,
          explanation: "Cultural competence involves ability to provide effective care across cultural differences through understanding and adaptation."
        },
        {
          id: 17,
          question: "What is precision medicine?",
          options: [
            "Exact dosing",
            "Personalized treatment based on individual characteristics",
            "Only genetic testing",
            "Only expensive treatments"
          ],
          correctAnswer: 1,
          explanation: "Precision medicine tailors treatment to individual characteristics like genetics, environment, and lifestyle."
        },
        {
          id: 18,
          question: "What do patient rights legislation protect?",
          options: [
            "Only hospital rights",
            "Healthcare consumer rights and protections",
            "Only doctor rights",
            "Only insurance rights"
          ],
          correctAnswer: 1,
          explanation: "Patient rights legislation protects healthcare consumers' rights to information, choice, privacy, and quality care."
        },
        {
          id: 19,
          question: "What is interprofessional collaboration?",
          options: [
            "Only nurses working together",
            "Team-based care across different professions",
            "Only doctor-nurse cooperation",
            "Socializing at work"
          ],
          correctAnswer: 1,
          explanation: "Interprofessional collaboration involves healthcare professionals from different disciplines working together as team."
        },
        {
          id: 20,
          question: "Why is cybersecurity important in healthcare?",
          options: [
            "For internet speed",
            "Protecting patient information and system integrity",
            "Only for billing",
            "Only for research"
          ],
          correctAnswer: 1,
          explanation: "Cybersecurity protects sensitive patient information, ensures system availability, and maintains trust in healthcare systems."
        }
      ]
    },
    {
      id: 7,
      title: "Professional Practice and Ethics",
      content: `# Module 7: Professional Practice and Ethics

## Professional Nursing Identity
Registered nurses embody professional identity through specialized knowledge, ethical practice, accountability, and commitment to ongoing development and service to society.

## Nursing Code of Ethics
Foundation for ethical nursing practice:
- **Provision 1** - Compassion and respect for human dignity
- **Provision 2** - Primary commitment to patient
- **Provision 3** - Advocacy for patient health and rights
- **Provision 4** - Authority and accountability for practice
- **Provision 5** - Duties to self and others
- **Provision 6** - Ethical environment and conditions
- **Provision 7** - Advancement through research and scholarship
- **Provision 8** - Collaboration for health and human rights
- **Provision 9** - Professional organization integrity

## Professional Boundaries
Maintaining therapeutic relationships:
- **Therapeutic Use of Self** - Appropriate self-disclosure
- **Relationship Limits** - Clear professional boundaries
- **Gift Policies** - Appropriate acceptance or decline
- **Social Media Guidelines** - Professional online behavior
- **Dual Relationships** - Avoiding conflicting roles

## Accountability and Responsibility
Professional answerability includes:
- **Practice Standards** - Meeting professional expectations
- **Competence Maintenance** - Ongoing skill development
- **Documentation Accuracy** - Complete and truthful records
- **Error Acknowledgment** - Taking responsibility for mistakes
- **Quality Contribution** - Participating in improvement efforts

## Legal Aspects of Practice
Understanding nursing law:
- **Licensure Requirements** - State-specific regulations
- **Standard of Care** - Expected level of practice
- **Negligence Elements** - Duty, breach, causation, damages
- **Malpractice Prevention** - Risk reduction strategies
- **Legal Documentation** - Protecting through accurate records

## Ethical Decision Making Models
Structured approaches to dilemmas:
- **Four Principles Approach** - Autonomy, beneficence, non-maleficence, justice
- **Nursing Process Model** - Assessment, diagnosis, planning, implementation, evaluation
- **Moral Reasoning Frameworks** - Systematic ethical analysis
- **Case Consultation** - Seeking input from ethics committees
- **Documentation of Ethical Decisions** - Recording reasoning process

## Cultural and Spiritual Competence
Respecting diverse beliefs:
- **Cultural Assessment** - Understanding patient background
- **Spiritual Assessment** - Identifying spiritual needs
- **Respect for Beliefs** - Honoring diverse perspectives
- **Accommodation of Practices** - Supporting meaningful rituals
- **Bias Awareness** - Recognizing and addressing prejudices

## Professional Communication
Advanced communication skills:
- **Therapeutic Communication** - Patient-centered dialogue
- **Interprofessional Communication** - Effective team interaction
- **Conflict Management** - Professional disagreement resolution
- **Advocacy Communication** - Speaking up effectively
- **Documentation Excellence** - Clear, accurate, timely records

## Self-Care and Professional Resilience
Maintaining personal well-being:
- **Stress Recognition** - Identifying professional stressors
- **Healthy Coping Strategies** - Effective stress management
- **Work-Life Balance** - Maintaining personal boundaries
- **Professional Support Systems** - Colleague networks and mentorship
- **Burnout Prevention** - Recognizing and addressing exhaustion

## Continuing Professional Development
Lifelong learning commitment:
- **Competency Maintenance** - Regular skill updating
- **Specialty Certification** - Advanced credential pursuit
- **Educational Advancement** - Further academic achievement
- **Research Participation** - Contributing to knowledge base
- **Leadership Development** - Growing professional influence`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does Provision 1 of Nursing Code emphasize?",
          options: [
            "Only technical skills",
            "Compassion and respect for human dignity",
            "Only following orders",
            "Only documentation"
          ],
          correctAnswer: 1,
          explanation: "Provision 1 emphasizes compassion, respect for inherent dignity, worth, and uniqueness of every individual."
        },
        {
          id: 2,
          question: "What are professional boundaries?",
          options: [
            "Hospital property lines",
            "Appropriate limits in therapeutic relationships",
            "Only work hours",
            "Only salary limits"
          ],
          correctAnswer: 1,
          explanation: "Professional boundaries are appropriate limits that maintain therapeutic relationships focused on patient needs."
        },
        {
          id: 3,
          question: "What does accountability involve?",
          options: [
            "Only showing up for work",
            "Answering for actions and decisions",
            "Only following policies",
            "Only completing tasks"
          ],
          correctAnswer: 1,
          explanation: "Accountability involves taking responsibility for actions, decisions, and consequences in nursing practice."
        },
        {
          id: 4,
          question: "What is standard of care?",
          options: [
            "Average care provided",
            "Expected level of practice by reasonable nurse",
            "Minimum care possible",
            "Only what doctors order"
          ],
          correctAnswer: 1,
          explanation: "Standard of care is level of care that reasonably prudent nurse with similar training would provide in similar circumstances."
        },
        {
          id: 5,
          question: "What are the four ethical principles?",
          options: [
            "Speed, accuracy, efficiency, kindness",
            "Autonomy, beneficence, non-maleficence, justice",
            "Assessment, planning, implementation, evaluation",
            "Look, listen, feel, act"
          ],
          correctAnswer: 1,
          explanation: "The four ethical principles are autonomy (self-determination), beneficence (do good), non-maleficence (do no harm), justice (fairness)."
        },
        {
          id: 6,
          question: "What should cultural assessment include?",
          options: [
            "Only language spoken",
            "Understanding patient background and beliefs",
            "Only country of origin",
            "Only religious affiliation"
          ],
          correctAnswer: 1,
          explanation: "Cultural assessment includes understanding patient's values, beliefs, practices, and how these influence health and healthcare."
        },
        {
          id: 7,
          question: "What is therapeutic communication?",
          options: [
            "Medical terminology use",
            "Patient-centered dialogue promoting healing",
            "Only giving information",
            "Only listening"
          ],
          correctAnswer: 1,
          explanation: "Therapeutic communication uses specific techniques to promote understanding, trust, and healing in nurse-patient relationships."
        },
        {
          id: 8,
          question: "Why is self-care important for nurses?",
          options: [
            "To avoid work",
            "To maintain ability to care for others effectively",
            "Because it's trendy",
            "To have more free time"
          ],
          correctAnswer: 1,
          explanation: "Self-care maintains nurses' physical, emotional, and mental health, enabling sustained effective care for patients."
        },
        {
          id: 9,
          question: "What does Provision 2 emphasize?",
          options: [
            "Nurse self-interest",
            "Primary commitment to patient",
            "Hospital profits",
            "Following all policies"
          ],
          correctAnswer: 1,
          explanation: "Provision 2 emphasizes nurse's primary commitment to patient, whether individual, family, group, or community."
        },
        {
          id: 10,
          question: "What is continuing professional development?",
          options: [
            "Only annual training",
            "Lifelong learning and skill updating",
            "Only when required",
            "Only for career advancement"
          ],
          correctAnswer: 1,
          explanation: "Continuing professional development involves ongoing learning to maintain and enhance knowledge, skills, and competence."
        },
        {
          id: 11,
          question: "What should social media guidelines address?",
          options: [
            "Only personal use",
            "Professional boundaries and patient privacy",
            "Only work-related posts",
            "Only positive comments"
          ],
          correctAnswer: 1,
          explanation: "Social media guidelines should protect patient privacy, maintain professional boundaries, and uphold nursing reputation."
        },
        {
          id: 12,
          question: "What are elements of negligence?",
          options: [
            "Only making mistakes",
            "Duty, breach, causation, damages",
            "Only bad outcomes",
            "Only patient complaints"
          ],
          correctAnswer: 1,
          explanation: "Negligence requires duty owed to patient, breach of duty, causation linking breach to harm, and actual damages suffered."
        },
        {
          id: 13,
          question: "What is spiritual assessment?",
          options: [
            "Only religious affiliation",
            "Identifying spiritual needs and resources",
            "Only church attendance",
            "Only prayer practices"
          ],
          correctAnswer: 1,
          explanation: "Spiritual assessment identifies sources of meaning, hope, comfort, and strength that are important to patient."
        },
        {
          id: 14,
          question: "What does burnout prevention involve?",
          options: [
            "Only taking vacations",
            "Recognizing and addressing exhaustion signs",
            "Only changing jobs",
            "Only working less"
          ],
          correctAnswer: 1,
          explanation: "Burnout prevention involves recognizing early signs of emotional exhaustion and implementing strategies to address them."
        },
        {
          id: 15,
          question: "What does Provision 3 address?",
          options: [
            "Nurse rights",
            "Advocacy for patient health and rights",
            "Only documentation",
            "Only skill development"
          ],
          correctAnswer: 1,
          explanation: "Provision 3 addresses nurse's role as patient advocate, protecting health, safety, and rights of patients."
        },
        {
          id: 16,
          question: "What is competence maintenance?",
          options: [
            "Only remembering skills",
            "Regular updating and validation of skills",
            "Only annual review",
            "Only when problems occur"
          ],
          correctAnswer: 1,
          explanation: "Competence maintenance involves regularly updating, practicing, and validating clinical skills and knowledge."
        },
        {
          id: 17,
          question: "Why document ethical decisions?",
          options: [
            "To fill charts",
            "For transparency and continuity of care",
            "Because required",
            "To protect against lawsuits"
          ],
          correctAnswer: 1,
          explanation: "Documenting ethical decisions provides transparency, supports continuity, and records reasoning process for future reference."
        },
        {
          id: 18,
          question: "What is bias awareness?",
          options: [
            "Political awareness",
            "Recognizing and addressing personal prejudices",
            "Only cultural knowledge",
            "Only understanding others"
          ],
          correctAnswer: 1,
          explanation: "Bias awareness involves recognizing personal prejudices and taking steps to prevent them from affecting patient care."
        },
        {
          id: 19,
          question: "What does professional resilience involve?",
          options: [
            "Only physical strength",
            "Ability to adapt and recover from challenges",
            "Only emotional toughness",
            "Only never making mistakes"
          ],
          correctAnswer: 1,
          explanation: "Professional resilience involves ability to adapt to stress, overcome challenges, and continue providing effective care."
        },
        {
          id: 20,
          question: "What is specialty certification?",
          options: [
            "Basic nursing license",
            "Advanced credential in specific practice area",
            "Only academic degree",
            "Only work experience"
          ],
          correctAnswer: 1,
          explanation: "Specialty certification validates advanced knowledge and skills in specific nursing practice areas beyond basic licensure."
        }
      ]
    },
    {
      id: 8,
      title: "Capstone Clinical Integration",
      content: `# Module 8: Capstone Clinical Integration

## Comprehensive Practice Integration
This capstone module synthesizes all previous learning into integrated clinical practice. Registered nurses apply knowledge, skills, and judgment in complex, realistic scenarios demonstrating readiness for professional practice.

## Complex Case Management
Managing patients with multiple conditions:
- **Comorbidity Management** - Coordinating care for multiple diagnoses
- **Polypharmacy Considerations** - Multiple medication interactions
- **Contradictory Treatment Needs** - Balancing conflicting interventions
- **Family Dynamics Integration** - Working with complex family situations
- **Resource-Limited Scenarios** - Providing quality care with constraints

## Clinical Judgment Development
Advanced decision-making in complex situations:
- **Pattern Recognition** - Identifying subtle clinical patterns
- **Anticipatory Thinking** - Predicting potential complications
- **Priority Setting** - Managing competing demands
- **Uncertainty Management** - Making decisions with incomplete information
- **Outcome Prediction** - Anticipating likely patient trajectories

## Interprofessional Collaboration Simulation
Team-based care coordination:
- **Role Clarification** - Understanding each team member's contribution
- **Communication Protocols** - Effective information exchange systems
- **Conflict Resolution** - Addressing interdisciplinary disagreements
- **Shared Decision Making** - Collaborative care planning
- **Leadership in Teams** - Guiding team toward common goals

## Quality Improvement Application
Implementing change in clinical settings:
- **Problem Identification** - Recognizing opportunities for improvement
- **Data Collection** - Gathering relevant performance information
- **Intervention Design** - Developing evidence-based solutions
- **Implementation Planning** - Strategically introducing changes
- **Outcome Evaluation** - Measuring impact of improvements

## Ethical Dilemma Resolution
Addressing complex moral challenges:
- **Stakeholder Analysis** - Considering all affected parties
- **Principle Balancing** - Weighing conflicting ethical principles
- **Decision Justification** - Articulating reasoning for choices
- **Implementation Planning** - Carrying out ethical decisions
- **Outcome Reflection** - Learning from ethical decision experiences

## Patient and Family Education Integration
Comprehensive teaching for complex situations:
- **Health Literacy Assessment** - Evaluating understanding levels
- **Cultural Adaptation** - Tailoring education to cultural context
- **Motivational Enhancement** - Encouraging behavior change
- **Family System Education** - Teaching entire support network
- **Long-Term Learning Support** - Providing ongoing educational resources

## Professional Role Transition
Moving into registered nurse responsibilities:
- **Scope of Practice Confidence** - Understanding professional boundaries
- **Accountability Acceptance** - Embracing professional responsibility
- **Clinical Autonomy Development** - Growing independent judgment
- **Mentorship Seeking** - Knowing when and how to seek guidance
- **Continuous Improvement Commitment** - Embracing lifelong learning

## Self-Evaluation and Reflection
Assessing personal readiness for practice:
- **Strengths Identification** - Recognizing personal capabilities
- **Growth Area Recognition** - Acknowledging development needs
- **Learning Plan Development** - Creating ongoing development strategy
- **Professional Goal Setting** - Establishing career objectives
- **Support System Building** - Developing professional network

## Future Practice Preparation
Planning for ongoing professional success:
- **Specialty Exploration** - Considering various nursing practice areas
- **Advanced Practice Considerations** - Exploring further education options
- **Professional Organization Involvement** - Engaging with nursing associations
- **Leadership Development Planning** - Preparing for future leadership roles
- **Work-Life Integration Strategies** - Planning sustainable career approach`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does comorbidity management involve?",
          options: [
            "Only treating one condition",
            "Coordinating care for multiple diagnoses",
            "Ignoring minor conditions",
            "Only treating the main diagnosis"
          ],
          correctAnswer: 1,
          explanation: "Comorbidity management involves coordinated care planning that addresses multiple coexisting health conditions simultaneously."
        },
        {
          id: 2,
          question: "What is anticipatory thinking in clinical judgment?",
          options: [
            "Only reacting to problems",
            "Predicting potential complications before they occur",
            "Guessing outcomes",
            "Only following protocols"
          ],
          correctAnswer: 1,
          explanation: "Anticipatory thinking involves predicting likely complications or changes based on current assessment and clinical knowledge."
        },
        {
          id: 3,
          question: "What should interprofessional collaboration achieve?",
          options: [
            "Only task completion",
            "Coordinated care toward common patient goals",
            "Only following doctor orders",
            "Only efficient scheduling"
          ],
          correctAnswer: 1,
          explanation: "Interprofessional collaboration coordinates diverse professional expertise toward shared patient-centered goals."
        },
        {
          id: 4,
          question: "What is first step in quality improvement?",
          options: [
            "Implementing changes",
            "Identifying problems or opportunities",
            "Collecting data",
            "Writing reports"
          ],
          correctAnswer: 1,
          explanation: "Quality improvement begins with identifying specific problems or opportunities for enhancing care quality."
        },
        {
          id: 5,
          question: "What does stakeholder analysis consider?",
          options: [
            "Only patient needs",
            "All parties affected by ethical decisions",
            "Only hospital administration",
            "Only legal considerations"
          ],
          correctAnswer: 1,
          explanation: "Stakeholder analysis considers all individuals or groups affected by ethical decisions, including patients, families, staff, and organization."
        },
        {
          id: 6,
          question: "What should health literacy assessment evaluate?",
          options: [
            "Only reading ability",
            "Patient understanding and ability to use health information",
            "Only education level",
            "Only language spoken"
          ],
          correctAnswer: 1,
          explanation: "Health literacy assessment evaluates ability to obtain, process, understand, and use health information to make appropriate decisions."
        },
        {
          id: 7,
          question: "What does clinical autonomy involve?",
          options: [
            "Working completely alone",
            "Independent judgment within professional scope",
            "Ignoring team input",
            "Making all decisions personally"
          ],
          correctAnswer: 1,
          explanation: "Clinical autonomy involves exercising independent professional judgment while collaborating appropriately with healthcare team."
        },
        {
          id: 8,
          question: "Why engage in self-evaluation?",
          options: [
            "To criticize oneself",
            "To identify strengths and development needs",
            "Only for performance reviews",
            "To compare with others"
          ],
          correctAnswer: 1,
          explanation: "Self-evaluation identifies personal strengths to build upon and areas needing development for professional growth."
        },
        {
          id: 9,
          question: "What are polypharmacy considerations?",
          options: [
            "Only counting medications",
            "Managing multiple medication interactions and effects",
            "Only giving medications on time",
            "Only following medication orders"
          ],
          correctAnswer: 1,
          explanation: "Polypharmacy considerations include managing drug interactions, side effects, adherence, and therapeutic outcomes with multiple medications."
        },
        {
          id: 10,
          question: "What does professional organization involvement provide?",
          options: [
            "Only social events",
            "Professional development and collective advocacy",
            "Only certification opportunities",
            "Only job listings"
          ],
          correctAnswer: 1,
          explanation: "Professional organization involvement provides networking, education, advocacy, and resources for professional development."
        },
        {
          id: 11,
          question: "What is pattern recognition in complex cases?",
          options: [
            "Remembering patient names",
            "Identifying meaningful clinical connections across data",
            "Only vital sign trends",
            "Only lab value patterns"
          ],
          correctAnswer: 1,
          explanation: "Pattern recognition involves identifying meaningful connections across diverse clinical data to form comprehensive understanding."
        },
        {
          id: 12,
          question: "What should shared decision making include?",
          options: [
            "Only doctor decisions",
            "Collaborative input from multiple professionals and patient",
            "Only nurse decisions",
            "Voting on treatments"
          ],
          correctAnswer: 1,
          explanation: "Shared decision making incorporates input from relevant healthcare professionals and the patient/family when appropriate."
        },
        {
          id: 13,
          question: "Why collect data in quality improvement?",
          options: [
            "To fill reports",
            "To measure current performance and identify gaps",
            "Because required",
            "To impress supervisors"
          ],
          correctAnswer: 1,
          explanation: "Data collection establishes baseline performance, identifies improvement opportunities, and measures intervention effectiveness."
        },
        {
          id: 14,
          question: "What does principle balancing involve?",
          options: [
            "Ignoring some principles",
            "Weighing conflicting ethical principles in dilemmas",
            "Only following one principle",
            "Choosing easiest option"
          ],
          correctAnswer: 1,
          explanation: "Principle balancing involves carefully weighing competing ethical principles when they conflict in specific situations."
        },
        {
          id: 15,
          question: "What is cultural adaptation in education?",
          options: [
            "Only translating materials",
            "Tailoring teaching to cultural context and beliefs",
            "Only using pictures",
            "Simplifying all information"
          ],
          correctAnswer: 1,
          explanation: "Cultural adaptation modifies teaching approaches to respect cultural beliefs, values, and communication preferences."
        },
        {
          id: 16,
          question: "When should mentorship be sought?",
          options: [
            "Only at career beginning",
            "When facing unfamiliar situations or needing guidance",
            "Only for promotion",
            "Only when making errors"
          ],
          correctAnswer: 1,
          explanation: "Mentorship should be sought when encountering unfamiliar situations, needing guidance, or seeking professional development."
        },
        {
          id: 17,
          question: "What should learning plans include?",
          options: [
            "Only required education",
            "Specific goals, strategies, and evaluation methods",
            "Only reading lists",
            "Only course schedules"
          ],
          correctAnswer: 1,
          explanation: "Learning plans should include specific development goals, strategies to achieve them, resources needed, and evaluation methods."
        },
        {
          id: 18,
          question: "What does work-life integration consider?",
          options: [
            "Only working more",
            "Sustainable balance between professional and personal life",
            "Only personal time",
            "Only career advancement"
          ],
          correctAnswer: 1,
          explanation: "Work-life integration develops sustainable approach balancing professional responsibilities with personal well-being and relationships."
        },
        {
          id: 19,
          question: "What is uncertainty management?",
          options: [
            "Avoiding uncertain situations",
            "Making decisions with incomplete information",
            "Waiting until certain",
            "Only following protocols"
          ],
          correctAnswer: 1,
          explanation: "Uncertainty management involves making reasonable clinical decisions despite incomplete or ambiguous information."
        },
        {
          id: 20,
          question: "What should leadership development planning include?",
          options: [
            "Only management courses",
            "Progressive skill building and opportunity seeking",
            "Only waiting for promotion",
            "Only observing leaders"
          ],
          correctAnswer: 1,
          explanation: "Leadership development planning includes identifying needed skills, seeking development opportunities, and gaining progressive experience."
        }
      ]
    }
  ],

  // FINAL EXAM (40 questions covering all 8 modules)
  finalExam: {
    title: "Registered Nursing Diploma Final Examination",
    description: "Comprehensive exam covering all 8 modules of the Registered Nursing Diploma course",
    passingScore: 75,
    questions: [
      {
        id: 1,
        question: "What are the four physical assessment techniques?",
        options: [
          "Looking, listening, touching, smelling",
          "Inspection, palpation, percussion, auscultation",
          "Questioning, observing, measuring, documenting",
          "Scanning, testing, analyzing, reporting"
        ],
        correctAnswer: 1,
        explanation: "The four physical assessment techniques are inspection, palpation, percussion, and auscultation."
      },
      {
        id: 2,
        question: "What are the five steps of nursing process?",
        options: [
          "Look, think, act, check, document",
          "Assessment, diagnosis, planning, implementation, evaluation",
          "Admit, assess, treat, discharge, follow-up",
          "Observe, report, intervene, evaluate, record"
        ],
        correctAnswer: 1,
        explanation: "Nursing process includes assessment, diagnosis, planning, implementation, and evaluation."
      },
      {
        id: 3,
        question: "What are the ABCs of prioritization?",
        options: [
          "Assessment, Briefing, Communication",
          "Airway, Breathing, Circulation",
          "Admission, Bedside, Charting",
          "Always Be Careful"
        ],
        correctAnswer: 1,
        explanation: "ABC prioritization addresses Airway, Breathing, and Circulation as most critical needs."
      },
      {
        id: 4,
        question: "What should IV site selection consider?",
        options: [
          "Using the closest vein",
          "Appropriate vein assessment and patient factors",
          "Only using hand veins",
          "Choosing any visible vein"
        ],
        correctAnswer: 1,
        explanation: "IV site selection considers vein condition, patient activity, treatment duration, and safety factors."
      },
      {
        id: 5,
        question: "What is transformational leadership?",
        options: [
          "Giving orders",
          "Inspiring teams toward shared vision",
          "Managing transactions",
          "Following rules exactly"
        ],
        correctAnswer: 1,
        explanation: "Transformational leadership inspires and motivates teams toward shared vision through inspiration."
      },
      {
        id: 6,
        question: "What is primary care?",
        options: [
          "Hospital emergency care",
          "First point of contact and ongoing healthcare",
          "Specialist consultations",
          "Experimental treatments"
        ],
        correctAnswer: 1,
        explanation: "Primary care provides first contact, continuous, comprehensive care."
      },
      {
        id: 7,
        question: "What does Provision 1 of Nursing Code emphasize?",
        options: [
          "Only technical skills",
          "Compassion and respect for human dignity",
          "Only following orders",
          "Only documentation"
        ],
        correctAnswer: 1,
        explanation: "Provision 1 emphasizes compassion and respect for inherent dignity of every individual."
      },
      {
        id: 8,
        question: "What does comorbidity management involve?",
        options: [
          "Only treating one condition",
          "Coordinating care for multiple diagnoses",
          "Ignoring minor conditions",
          "Only treating main diagnosis"
        ],
        correctAnswer: 1,
        explanation: "Comorbidity management coordinates care for multiple coexisting health conditions."
      },
      {
        id: 9,
        question: "What does SOAP stand for in documentation?",
        options: [
          "Symptoms, Observations, Assessment, Plan",
          "Subjective, Objective, Assessment, Plan",
          "Summary, Observations, Analysis, Procedures",
          "Signs, Objective data, Assessment, Prescription"
        ],
        correctAnswer: 1,
        explanation: "SOAP stands for Subjective, Objective, Assessment, Plan documentation format."
      },
      {
        id: 10,
        question: "What makes goals measurable?",
        options: [
          "They sound impressive",
          "They have concrete criteria for success",
          "They are difficult to achieve",
          "They are written in medical terms"
        ],
        correctAnswer: 1,
        explanation: "Measurable goals have specific, concrete criteria allowing clear determination of achievement."
      },
      {
        id: 11,
        question: "What does evidence-based practice combine?",
        options: [
          "Only research studies",
          "Research evidence, clinical expertise, patient preferences",
          "Only hospital policies",
          "Only what doctors say"
        ],
        correctAnswer: 1,
        explanation: "Evidence-based practice integrates research evidence with clinical expertise and patient preferences."
      },
      {
        id: 12,
        question: "What should wound assessment include?",
        options: [
          "Only size measurement",
          "Staging, measurement, classification, and characteristics",
          "Only drainage amount",
          "Only pain level"
        ],
        correctAnswer: 1,
        explanation: "Comprehensive wound assessment includes staging, measurements, classification, and characteristics."
      },
      {
        id: 13,
        question: "What should performance management include?",
        options: [
          "Only annual evaluations",
          "Feedback, coaching, and development",
          "Only disciplinary actions",
          "Only praise for good work"
        ],
        correctAnswer: 1,
        explanation: "Performance management includes regular feedback, coaching, and development opportunities."
      },
      {
        id: 14,
        question: "What does capitation reimbursement mean?",
        options: [
          "Payment per service provided",
          "Fixed payment per patient over time period",
          "Payment based on outcomes",
          "No payment system"
        ],
        correctAnswer: 1,
        explanation: "Capitation pays fixed amount per patient over time regardless of services provided."
      },
      {
        id: 15,
        question: "What are professional boundaries?",
        options: [
          "Hospital property lines",
          "Appropriate limits in therapeutic relationships",
          "Only work hours",
          "Only salary limits"
        ],
        correctAnswer: 1,
        explanation: "Professional boundaries maintain therapeutic relationships focused on patient needs."
      },
      {
        id: 16,
        question: "What is anticipatory thinking?",
        options: [
          "Only reacting to problems",
          "Predicting potential complications before they occur",
          "Guessing outcomes",
          "Only following protocols"
        ],
        correctAnswer: 1,
        explanation: "Anticipatory thinking predicts likely complications based on current assessment and knowledge."
      },
      {
        id: 17,
        question: "What does auscultation involve?",
        options: [
          "Tapping body surfaces",
          "Using stethoscope to hear body sounds",
          "Feeling for abnormalities",
          "Measuring body parts"
        ],
        correctAnswer: 1,
        explanation: "Auscultation involves using stethoscope to listen to internal body sounds."
      },
      {
        id: 18,
        question: "When should discharge planning begin?",
        options: [
          "The day before discharge",
          "At admission to healthcare facility",
          "When doctor writes discharge order",
          "After patient asks to go home"
        ],
        correctAnswer: 1,
        explanation: "Discharge planning should begin at admission for adequate preparation."
      },
      {
        id: 19,
        question: "What ethical principle involves avoiding harm?",
        options: [
          "Autonomy",
          "Non-maleficence",
          "Beneficence",
          "Justice"
        ],
        correctAnswer: 1,
        explanation: "Non-maleficence is the ethical principle of avoiding harm to patients."
      },
      {
        id: 20,
        question: "What are non-pharmacological pain methods?",
        options: [
          "Only stronger medications",
          "Positioning, distraction, relaxation techniques",
          "Only surgery",
          "Only ignoring pain"
        ],
        correctAnswer: 1,
        explanation: "Non-pharmacological pain methods include positioning, distraction, and relaxation techniques."
      },
      {
        id: 21,
        question: "Why engage stakeholders in change?",
        options: [
          "To avoid responsibility",
          "For buy-in and successful implementation",
          "Because it's required",
          "To spread blame"
        ],
        correctAnswer: 1,
        explanation: "Stakeholder engagement creates buy-in and improves change success through involvement."
      },
      {
        id: 22,
        question: "What does scope of practice define?",
        options: [
          "Work hours",
          "Legal boundaries for nursing activities",
          "Salary ranges",
          "Vacation time"
        ],
        correctAnswer: 1,
        explanation: "Scope of practice legally defines what activities nurses are authorized to perform."
      },
      {
        id: 23,
        question: "What does accountability involve?",
        options: [
          "Only showing up for work",
          "Answering for actions and decisions",
          "Only following policies",
          "Only completing tasks"
        ],
        correctAnswer: 1,
        explanation: "Accountability involves taking responsibility for actions, decisions, and consequences."
      },
      {
        id: 24,
        question: "What should interprofessional collaboration achieve?",
        options: [
          "Only task completion",
          "Coordinated care toward common patient goals",
          "Only following doctor orders",
          "Only efficient scheduling"
        ],
        correctAnswer: 1,
        explanation: "Interprofessional collaboration coordinates diverse expertise toward shared patient goals."
      },
      {
        id: 25,
        question: "What is a focused assessment?",
        options: [
          "Complete head-to-toe examination",
          "Targeted evaluation for specific concerns",
          "Assessment done quickly",
          "Assessment without equipment"
        ],
        correctAnswer: 1,
        explanation: "A focused assessment targets specific body systems or concerns based on symptoms."
      },
      {
        id: 26,
        question: "Who might be part of interdisciplinary team?",
        options: [
          "Only nurses and doctors",
          "Physicians, therapists, social workers, pharmacists",
          "Only healthcare providers",
          "Only hospital staff"
        ],
        correctAnswer: 1,
        explanation: "Interdisciplinary teams include various professionals like physicians, therapists, social workers."
      },
      {
        id: 27,
        question: "What should delegation decisions consider?",
        options: [
          "Only who is available",
          "Scope of practice and individual competency",
          "Only shift schedules",
          "Only nurse preferences"
        ],
        correctAnswer: 1,
        explanation: "Delegation decisions must consider legal scope and individual competence."
      },
      {
        id: 28,
        question: "What does oxygen therapy titration mean?",
        options: [
          "Giving maximum oxygen",
          "Adjusting delivery based on patient needs",
          "Only using nasal cannula",
          "Keeping oxygen constant"
        ],
        correctAnswer: 1,
        explanation: "Oxygen titration adjusts flow rates based on patient oxygenation status."
      },
      {
        id: 29,
        question: "What does PDSA stand for?",
        options: [
          "Plan, Do, Study, Act",
          "Prepare, Deliver, Study, Adjust",
          "Problem, Diagnosis, Solution, Action",
          "Plan, Develop, Study, Apply"
        ],
        correctAnswer: 0,
        explanation: "PDSA (Plan-Do-Study-Act) is quality improvement cycle for testing changes."
      },
      {
        id: 30,
        question: "What do quality measures assess?",
        options: [
          "Only patient satisfaction",
          "Healthcare performance indicators",
          "Only cost of care",
          "Only wait times"
        ],
        correctAnswer: 1,
        explanation: "Quality measures assess healthcare performance including safety and effectiveness."
      },
      {
        id: 31,
        question: "What are the four ethical principles?",
        options: [
          "Speed, accuracy, efficiency, kindness",
          "Autonomy, beneficence, non-maleficence, justice",
          "Assessment, planning, implementation, evaluation",
          "Look, listen, feel, act"
        ],
        correctAnswer: 1,
        explanation: "The four ethical principles are autonomy, beneficence, non-maleficence, justice."
      },
      {
        id: 32,
        question: "What is first step in quality improvement?",
        options: [
          "Implementing changes",
          "Identifying problems or opportunities",
          "Collecting data",
          "Writing reports"
        ],
        correctAnswer: 1,
        explanation: "Quality improvement begins with identifying specific problems or opportunities."
      },
      {
        id: 33,
        question: "What is general survey in assessment?",
        options: [
          "Only vital signs",
          "First impression, appearance, and behavior",
          "Detailed medical history",
          "Laboratory test results"
        ],
        correctAnswer: 1,
        explanation: "General survey includes initial observations of appearance and behavior."
      },
      {
        id: 34,
        question: "What are evidence-based interventions?",
        options: [
          "Whatever has always been done",
          "Approaches supported by research evidence",
          "Doctor's personal preferences",
          "The cheapest available options"
        ],
        correctAnswer: 1,
        explanation: "Evidence-based interventions are supported by scientific research and evidence."
      },
      {
        id: 35,
        question: "What is clinical reasoning?",
        options: [
          "Guessing what might work",
          "Structured thinking process for clinical decisions",
          "Following doctor orders exactly",
          "Using intuition only"
        ],
        correctAnswer: 1,
        explanation: "Clinical reasoning is systematic thinking process for clinical decisions."
      },
      {
        id: 36,
        question: "What is telemetry monitoring?",
        options: [
          "Temperature monitoring",
          "Continuous cardiac rhythm monitoring",
          "Blood pressure tracking",
          "Respiratory rate counting"
        ],
        correctAnswer: 1,
        explanation: "Telemetry provides continuous cardiac rhythm monitoring."
      },
      {
        id: 37,
        question: "What is mentorship?",
        options: [
          "Friendship at work",
          "Structured guidance for professional development",
          "Socializing with colleagues",
          "Covering shifts for others"
        ],
        correctAnswer: 1,
        explanation: "Mentorship provides structured guidance for professional development."
      },
      {
        id: 38,
        question: "What does HIPAA protect?",
        options: [
          "Hospital profits",
          "Patient health information privacy",
          "Only paper records",
          "Only electronic records"
        ],
        correctAnswer: 1,
        explanation: "HIPAA protects privacy of patients' protected health information."
      },
      {
        id: 39,
        question: "What is standard of care?",
        options: [
          "Average care provided",
          "Expected level of practice by reasonable nurse",
          "Minimum care possible",
          "Only what doctors order"
        ],
        correctAnswer: 1,
        explanation: "Standard of care is level reasonable nurse would provide in similar circumstances."
      },
      {
        id: 40,
        question: "What should health literacy assessment evaluate?",
        options: [
          "Only reading ability",
          "Patient understanding and ability to use health information",
          "Only education level",
          "Only language spoken"
        ],
        correctAnswer: 1,
        explanation: "Health literacy assessment evaluates ability to obtain and use health information."
      }
    ]
  }
};

export default registeredNursingDiploma;
