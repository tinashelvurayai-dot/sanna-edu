export const clinicalNursingDiploma = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "clinical-nursing-diploma",
  title: "Clinical Nursing (Diploma)",
  description: "Advanced clinical nursing training for professional practice in healthcare settings. Builds upon home nursing fundamentals with comprehensive assessment, intervention, and specialized care skills.",
  duration: "12 weeks",
  timeCommitment: "8-10 hours per week",
  price: 18,
  upgradePrice: null,
  icon: "🏥",
  badge: "Diploma",
  prerequisite: "home-nursing-certificate",
  
  // 2. MODULE ARCHITECTURE (6 Advanced Modules)
  modules: [
    // MODULE 1: Advanced Patient Assessment
    {
      id: 1,
      title: "Advanced Patient Assessment",
      content: `
# Comprehensive Clinical Assessment

Clinical nursing requires systematic, thorough patient assessment to identify health issues and plan appropriate care.

## Head-to-Toe Assessment Framework

Perform assessments systematically using this framework:

**Neurological Assessment** - Level of consciousness using Glasgow Coma Scale (score 3-15). Check pupil reaction, equal size 2-6mm. Assess orientation to person, place, time. Evaluate motor function and sensation.

**Cardiovascular Assessment** - Heart sounds: S1 (closure of mitral/tricuspid) and S2 (closure of aortic/pulmonic). Assess for murmurs, rubs, gallops. Peripheral pulses: radial, brachial, femoral, popliteal, dorsalis pedis, posterior tibial. Capillary refill: normal <3 seconds.

**Respiratory Assessment** - Breath sounds: vesicular (normal lung fields), bronchial (over trachea), bronchovesicular (between scapulae). Assess for adventitious sounds: crackles (fluid), wheezes (narrowing), rhonchi (secretions), pleural friction rub (inflamed pleura). Observe breathing pattern, use of accessory muscles.

**Gastrointestinal Assessment** - Bowel sounds: normal 5-35 per minute. Assess all four quadrants: RLQ, RUQ, LUQ, LLQ. Palpate for tenderness, guarding, masses. Note abdominal distention, visible peristalsis.

**Musculoskeletal Assessment** - Range of motion: active and passive. Muscle strength grading 0-5 (5=normal). Observe gait, posture, coordination. Assess joints for swelling, warmth, deformity.

**Integumentary Assessment** - Skin turgor: normal <3 seconds tenting. Assess color, temperature, moisture, lesions. Pressure ulcer staging: Stage I (non-blanchable erythema), Stage II (partial thickness), Stage III (full thickness), Stage IV (exposed bone/muscle).

## Specialized Assessment Techniques

**Pain Assessment** - Use appropriate scale: numeric (0-10), faces (Wong-Baker), verbal descriptor. Assess PQRST: Provocation/palliation, Quality, Region/radiation, Severity, Timing.

**Nutritional Assessment** - Calculate BMI: weight(kg)/height(m²). Normal 18.5-24.9. Assess dietary intake, swallowing ability, recent weight changes.

**Psychosocial Assessment** - Mental status, coping mechanisms, support systems, cultural/spiritual needs. Assess for depression, anxiety using standardized tools when indicated.

## Clinical Decision Making

Interpret assessment findings to identify:
- Priority problems requiring immediate intervention
- Potential complications to monitor
- Patient strengths to build upon
- Educational needs
- Required consultations or referrals

Document assessment findings using standardized formats like SOAP (Subjective, Objective, Assessment, Plan) or narrative notes.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the Glasgow Coma Scale range?",
          options: [
            "1-10",
            "3-15",
            "5-20",
            "0-12"
          ],
          correctAnswer: 1,
          explanation: "The Glasgow Coma Scale ranges from 3 (deep unconsciousness) to 15 (fully alert)."
        },
        {
          id: 2,
          question: "What are normal pupil sizes?",
          options: [
            "1-3 mm",
            "2-6 mm",
            "5-8 mm",
            "7-10 mm"
          ],
          correctAnswer: 1,
          explanation: "Normal pupil diameter ranges from 2-6 mm and should be equal in both eyes."
        },
        {
          id: 3,
          question: "What heart sound represents closure of aortic and pulmonic valves?",
          options: [
            "S1",
            "S2",
            "S3",
            "S4"
          ],
          correctAnswer: 1,
          explanation: "S2 is the second heart sound caused by closure of the aortic and pulmonic valves."
        },
        {
          id: 4,
          question: "What is normal capillary refill time?",
          options: [
            "<1 second",
            "<3 seconds",
            "<5 seconds",
            "<10 seconds"
          ],
          correctAnswer: 1,
          explanation: "Capillary refill should occur in less than 3 seconds, indicating adequate peripheral perfusion."
        },
        {
          id: 5,
          question: "What breath sounds are normal over lung fields?",
          options: [
            "Bronchial",
            "Vesicular",
            "Bronchovesicular",
            "Tracheal"
          ],
          correctAnswer: 1,
          explanation: "Vesicular breath sounds are soft, low-pitched sounds heard over most lung fields."
        },
        {
          id: 6,
          question: "What adventitious sound indicates fluid in airways?",
          options: [
            "Wheezes",
            "Crackles",
            "Rhonchi",
            "Stridor"
          ],
          correctAnswer: 1,
          explanation: "Crackles (rales) are discontinuous sounds indicating fluid in smaller airways."
        },
        {
          id: 7,
          question: "What is the normal range for bowel sounds per minute?",
          options: [
            "0-5",
            "5-35",
            "30-50",
            "50-70"
          ],
          correctAnswer: 1,
          explanation: "Normal bowel sounds occur 5-35 times per minute and should be present in all quadrants."
        },
        {
          id: 8,
          question: "What does muscle strength grade 5 indicate?",
          options: [
            "No movement",
            "Active movement with gravity eliminated",
            "Active movement against gravity",
            "Normal strength"
          ],
          correctAnswer: 3,
          explanation: "Grade 5 indicates normal strength with full resistance throughout range of motion."
        },
        {
          id: 9,
          question: "What stage pressure ulcer shows non-blanchable erythema?",
          options: [
            "Stage I",
            "Stage II",
            "Stage III",
            "Stage IV"
          ],
          correctAnswer: 0,
          explanation: "Stage I pressure ulcers show intact skin with non-blanchable redness."
        },
        {
          id: 10,
          question: "What does the 'Q' in PQRST pain assessment represent?",
          options: [
            "Quantity",
            "Quality",
            "Question",
            "Quickness"
          ],
          correctAnswer: 1,
          explanation: "Q stands for Quality - describing what the pain feels like (sharp, dull, burning, etc.)."
        },
        {
          id: 11,
          question: "What BMI range is considered normal?",
          options: [
            "<18.5",
            "18.5-24.9",
            "25-29.9",
            "30-34.9"
          ],
          correctAnswer: 1,
          explanation: "BMI of 18.5-24.9 is considered normal weight for adults."
        },
        {
          id: 12,
          question: "Which assessment quadrant contains the liver?",
          options: [
            "RLQ",
            "RUQ",
            "LUQ",
            "LLQ"
          ],
          correctAnswer: 1,
          explanation: "The liver is located in the right upper quadrant (RUQ) of the abdomen."
        },
        {
          id: 13,
          question: "What does tenting >3 seconds indicate?",
          options: [
            "Normal skin turgor",
            "Dehydration",
            "Edema",
            "Good elasticity"
          ],
          correctAnswer: 1,
          explanation: "Skin that tents (remains elevated) for more than 3 seconds suggests dehydration."
        },
        {
          id: 14,
          question: "What heart sound is caused by mitral and tricuspid valve closure?",
          options: [
            "S1",
            "S2",
            "S3",
            "S4"
          ],
          correctAnswer: 0,
          explanation: "S1 is the first heart sound produced by closure of the mitral and tricuspid valves."
        },
        {
          id: 15,
          question: "What is the correct order for abdominal assessment?",
          options: [
            "Palpation, percussion, auscultation",
            "Auscultation, percussion, palpation",
            "Percussion, auscultation, palpation",
            "Any order is acceptable"
          ],
          correctAnswer: 1,
          explanation: "Always auscultate first to avoid altering bowel sounds with palpation or percussion."
        },
        {
          id: 16,
          question: "What does the Wong-Baker scale assess?",
          options: [
            "Blood pressure",
            "Pain intensity",
            "Muscle strength",
            "Respiratory rate"
          ],
          correctAnswer: 1,
          explanation: "The Wong-Baker FACES scale is used to assess pain intensity, especially in children."
        },
        {
          id: 17,
          question: "What sound suggests narrowed airways?",
          options: [
            "Crackles",
            "Wheezes",
            "Rhonchi",
            "Friction rub"
          ],
          correctAnswer: 1,
          explanation: "Wheezes are high-pitched musical sounds indicating narrowed airways."
        },
        {
          id: 18,
          question: "What does SOAP documentation stand for?",
          options: [
            "Symptoms, Observations, Assessment, Plan",
            "Subjective, Objective, Assessment, Plan",
            "System, Organization, Analysis, Procedure",
            "Signs, Observations, Analysis, Protocol"
          ],
          correctAnswer: 1,
          explanation: "SOAP stands for Subjective, Objective, Assessment, Plan - a common documentation format."
        },
        {
          id: 19,
          question: "Which pulse is assessed behind the medial malleolus?",
          options: [
            "Radial",
            "Dorsalis pedis",
            "Posterior tibial",
            "Popliteal"
          ],
          correctAnswer: 2,
          explanation: "The posterior tibial pulse is located behind the medial malleolus (inner ankle bone)."
        },
        {
          id: 20,
          question: "What does Stage IV pressure ulcer involve?",
          options: [
            "Intact skin with redness",
            "Partial thickness skin loss",
            "Full thickness skin loss",
            "Exposed bone, tendon, or muscle"
          ],
          correctAnswer: 3,
          explanation: "Stage IV pressure ulcers involve full thickness tissue loss with exposed bone, tendon, or muscle."
        }
      ]
    },

    // MODULE 2: Clinical Interventions
    {
      id: 2,
      title: "Clinical Interventions",
      content: `
# Evidence-Based Nursing Interventions

Clinical nursing interventions are actions taken to improve patient outcomes based on assessment findings and clinical judgment.

## Medication Administration

**Safe Administration Principles** - Follow 10 rights: right patient, medication, dose, route, time, documentation, reason, response, education, refusal. Double-check high-alert medications. Verify allergies before administration.

**Routes and Techniques** - Oral: assess swallowing ability. Subcutaneous: 45-90 degree angle, avoid sites with edema. Intramuscular: Z-track technique for irritating medications. Intravenous: maintain sterility, secure access. Topical: clean skin, apply thin layer.

**Monitoring Responses** - Assess therapeutic effects. Monitor for adverse reactions. Document effectiveness. Report significant findings promptly.

## Wound Care Management

**Wound Assessment** - Measure size (length x width x depth). Describe appearance: color (red, yellow, black). Assess drainage: amount, type, odor. Evaluate surrounding skin. Document using standardized tools.

**Dressing Selection** - Moist environment for healing. Hydrocolloids for minimal exudate. Alginates for moderate-heavy exudate. Foams for cushioning. Transparent films for protection. Antimicrobials for infection.

**Specialized Techniques** - Negative pressure wound therapy. Compression therapy for venous ulcers. Offloading for pressure ulcers. Debridement methods: autolytic, enzymatic, mechanical, surgical.

**Infection Prevention** - Aseptic technique for all wound care. Hand hygiene before and after. Proper disposal of contaminated materials. Monitor for signs of infection: redness, warmth, swelling, pain, purulent drainage.

## Respiratory Care

**Oxygen Therapy** - Administer via appropriate device: nasal cannula (1-6 L/min), simple mask (5-10 L/min), Venturi mask (specific FiO2). Monitor oxygenation with pulse oximetry (normal SpO2 >94%). Assess for CO2 retention in COPD patients.

**Airway Management** - Suctioning techniques: oral, nasopharyngeal, endotracheal. Maintain patent airway. Use positioning (semi-Fowler's for breathing difficulty). Administer nebulizer treatments. Assist with incentive spirometry.

**Chest Physiotherapy** - Postural drainage positions. Percussion and vibration. Deep breathing exercises. Cough enhancement techniques.

## Fluid and Electrolyte Management

**Intravenous Therapy** - Calculate drip rates. Monitor for infiltration, phlebitis, infection. Maintain IV site integrity. Administer fluids based on prescribed rate and type.

**Electrolyte Monitoring** - Recognize signs of imbalance: sodium (Na+ 135-145 mEq/L), potassium (K+ 3.5-5.0 mEq/L), calcium (Ca2+ 8.5-10.5 mg/dL). Administer replacements as ordered. Monitor response to therapy.

**Fluid Balance** - Intake and output measurement. Daily weights. Assess for edema, dehydration. Calculate maintenance needs: 30-35 mL/kg/day for adults.

## Pain Management

**Pharmacological** - Administer analgesics based on pain assessment. Follow pain management protocols. Use multimodal approach when appropriate.

**Non-Pharmacological** - Positioning, massage, heat/cold therapy, distraction, relaxation techniques, music therapy. Educate patients on complementary methods.

**Monitoring** - Assess pain relief using same scale pre- and post-intervention. Document effectiveness. Adjust approach as needed.

## Patient Education

**Teaching Principles** - Assess readiness to learn. Use appropriate teaching methods. Provide written instructions. Evaluate understanding through return demonstration or teach-back method.

**Discharge Planning** - Begin at admission. Coordinate with interdisciplinary team. Ensure follow-up arrangements. Provide necessary equipment and supplies.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "How many rights of medication administration are recommended?",
          options: [
            "5",
            "7",
            "10",
            "12"
          ],
          correctAnswer: 2,
          explanation: "Current practice recommends 10 rights: patient, medication, dose, route, time, documentation, reason, response, education, refusal."
        },
        {
          id: 2,
          question: "What angle is used for subcutaneous injections?",
          options: [
            "15-30 degrees",
            "45-90 degrees",
            "90 degrees only",
            "10-20 degrees"
          ],
          correctAnswer: 1,
          explanation: "Subcutaneous injections are typically given at a 45-90 degree angle depending on needle length and patient size."
        },
        {
          id: 3,
          question: "What technique minimizes leakage for IM injections?",
          options: [
            "Rapid injection",
            "Z-track method",
            "Aspiration only",
            "No special technique"
          ],
          correctAnswer: 1,
          explanation: "The Z-track technique prevents medication leakage into subcutaneous tissue."
        },
        {
          id: 4,
          question: "What wound color indicates healthy granulation tissue?",
          options: [
            "Black",
            "Yellow",
            "Red",
            "Green"
          ],
          correctAnswer: 2,
          explanation: "Red color indicates healthy granulation tissue in a healing wound."
        },
        {
          id: 5,
          question: "What dressing is best for moderate to heavy exudate?",
          options: [
            "Transparent film",
            "Hydrocolloid",
            "Alginate",
            "Gauze"
          ],
          correctAnswer: 2,
          explanation: "Alginate dressings absorb moderate to heavy exudate and maintain moist wound environment."
        },
        {
          id: 6,
          question: "What is normal SpO2 level?",
          options: [
            ">84%",
            ">88%",
            ">94%",
            ">98%"
          ],
          correctAnswer: 2,
          explanation: "Normal oxygen saturation (SpO2) is greater than 94% on room air."
        },
        {
          id: 7,
          question: "What oxygen delivery device provides specific FiO2?",
          options: [
            "Nasal cannula",
            "Simple mask",
            "Venturi mask",
            "Face tent"
          ],
          correctAnswer: 2,
          explanation: "Venturi masks deliver specific, precise oxygen concentrations (FiO2)."
        },
        {
          id: 8,
          question: "What is normal potassium range?",
          options: [
            "2.5-3.5 mEq/L",
            "3.5-5.0 mEq/L",
            "5.0-6.0 mEq/L",
            "6.0-7.0 mEq/L"
          ],
          correctAnswer: 1,
          explanation: "Normal serum potassium level is 3.5-5.0 mEq/L."
        },
        {
          id: 9,
          question: "What is daily fluid maintenance for adults?",
          options: [
            "10-20 mL/kg/day",
            "20-25 mL/kg/day",
            "30-35 mL/kg/day",
            "40-50 mL/kg/day"
          ],
          correctAnswer: 2,
          explanation: "Adult fluid maintenance is approximately 30-35 mL/kg/day."
        },
        {
          id: 10,
          question: "What teaching method evaluates understanding?",
          options: [
            "Lecture only",
            "Written materials",
            "Teach-back method",
            "Video watching"
          ],
          correctAnswer: 2,
          explanation: "The teach-back method asks patients to explain in their own words to evaluate understanding."
        },
        {
          id: 11,
          question: "When should discharge planning begin?",
          options: [
            "Day before discharge",
            "At admission",
            "After surgery",
            "When doctor orders"
          ],
          correctAnswer: 1,
          explanation: "Discharge planning should begin at admission for comprehensive care coordination."
        },
        {
          id: 12,
          question: "What indicates wound infection?",
          options: [
            "Serous drainage",
            "Purulent drainage",
            "Clear fluid",
            "Minimal exudate"
          ],
          correctAnswer: 1,
          explanation: "Purulent (pus-like) drainage often indicates wound infection."
        },
        {
          id: 13,
          question: "What position aids breathing for patients with respiratory difficulty?",
          options: [
            "Trendelenburg",
            "Supine",
            "Semi-Fowler's",
            "Prone"
          ],
          correctAnswer: 2,
          explanation: "Semi-Fowler's position (head elevated 30-45 degrees) facilitates breathing."
        },
        {
          id: 14,
          question: "What is normal serum sodium level?",
          options: [
            "120-130 mEq/L",
            "135-145 mEq/L",
            "145-155 mEq/L",
            "155-165 mEq/L"
          ],
          correctAnswer: 1,
          explanation: "Normal serum sodium level is 135-145 mEq/L."
        },
        {
          id: 15,
          question: "What is multimodal pain management?",
          options: [
            "Using one strong medication",
            "Combining different approaches",
            "Only non-drug methods",
            "As-needed medication only"
          ],
          correctAnswer: 1,
          explanation: "Multimodal pain management combines different medications and methods for better pain control with fewer side effects."
        },
        {
          id: 16,
          question: "What should be checked before medication administration?",
          options: [
            "Patient's favorite color",
            "Allergy status",
            "Family history",
            "Insurance information"
          ],
          correctAnswer: 1,
          explanation: "Always verify allergy status before administering any medication."
        },
        {
          id: 17,
          question: "What technique prevents infection during wound care?",
          options: [
            "Clean technique",
            "Aseptic technique",
            "Sterile technique only for surgery",
            "Any technique is fine"
          ],
          correctAnswer: 1,
          explanation: "Aseptic technique minimizes introduction of microorganisms during wound care."
        },
        {
          id: 18,
          question: "What device measures oxygen saturation?",
          options: [
            "Sphygmomanometer",
            "Pulse oximeter",
            "Stethoscope",
            "Thermometer"
          ],
          correctAnswer: 1,
          explanation: "Pulse oximeter noninvasively measures oxygen saturation (SpO2)."
        },
        {
          id: 19,
          question: "What is calculated to monitor fluid balance?",
          options: [
            "Intake and output",
            "Blood pressure only",
            "Weight monthly",
            "Temperature daily"
          ],
          correctAnswer: 0,
          explanation: "Intake and output measurements help assess fluid balance status."
        },
        {
          id: 20,
          question: "What dressing provides cushioning?",
          options: [
            "Transparent film",
            "Foam",
            "Hydrocolloid",
            "Alginate"
          ],
          correctAnswer: 1,
          explanation: "Foam dressings provide cushioning and protection for wounds."
        }
      ]
    },

    // MODULE 3: Specialized Care Areas
    {
      id: 3,
      title: "Specialized Care Areas",
      content: `
# Care Across Clinical Specialties

Clinical nursing requires adaptation to different patient populations and specialty areas with unique needs and considerations.

## Medical-Surgical Nursing

**Common Conditions** - Diabetes management: monitor blood glucose (normal fasting 70-100 mg/dL). Hypertension: maintain BP <140/90. COPD: oxygen therapy with caution. Heart failure: daily weights, fluid restriction.

**Postoperative Care** - Monitor vital signs frequently. Assess surgical site. Manage pain effectively. Prevent complications: DVT prophylaxis, pulmonary toileting, early ambulation.

**Oncology Care** - Manage side effects of chemotherapy: nausea, mucositis, neutropenia. Administer blood products. Provide emotional support. Monitor for infection in immunocompromised patients.

## Critical Care Nursing

**Hemodynamic Monitoring** - Understand parameters: CVP 2-6 mmHg, MAP >65 mmHg. Interpret cardiac rhythms. Manage vasoactive medications. Monitor arterial lines.

**Ventilator Management** - Understand ventilator settings: mode, rate, tidal volume, FiO2, PEEP. Prevent ventilator-associated pneumonia. Perform oral care every 4 hours. Assess readiness for weaning.

**Neurological Monitoring** - Glasgow Coma Scale trending. Intracranial pressure monitoring. Pupil checks. Neurological vital signs.

## Maternal-Child Nursing

**Obstetric Care** - Monitor fetal heart rate (normal 110-160 bpm). Assess labor progress. Postpartum care: fundal checks, lochia assessment (rubra, serosa, alba), breastfeeding support.

**Neonatal Care** - APGAR scoring at 1 and 5 minutes (7-10 normal). Thermoregulation. Feeding assessment. Newborn screening.

**Pediatric Considerations** - Age-appropriate communication. Growth and development assessment. Medication dosing by weight. Family-centered care.

## Gerontological Nursing

**Age-Related Changes** - Decreased organ reserve. Altered drug metabolism. Increased fall risk. Cognitive changes. Social isolation risks.

**Common Geriatric Syndromes** - Dementia care: maintain routine, ensure safety. Delirium: sudden onset, fluctuating course. Incontinence management. Fall prevention strategies.

**End-of-Life Care** - Pain and symptom management. Advance care planning. Family support. Comfort measures. Bereavement support.

## Mental Health Nursing

**Therapeutic Communication** - Active listening. Reflective responses. Setting appropriate boundaries. De-escalation techniques.

**Common Disorders** - Depression: assess suicide risk. Anxiety: teach coping strategies. Psychosis: maintain safety, administer antipsychotics. Substance abuse: withdrawal monitoring.

**Crisis Intervention** - Assess risk of harm. Ensure safety. Mobilize support systems. Arrange appropriate follow-up.

## Emergency Nursing

**Triage Principles** - Use standardized system (ESI 1-5). Prioritize life-threatening conditions. Rapid assessment. Efficient resource allocation.

**Trauma Care** - Primary survey: ABCDE (Airway, Breathing, Circulation, Disability, Exposure). Secondary survey: head-to-toe assessment. Trauma team coordination.

**Disaster Preparedness** - Mass casualty incident management. Triage tagging. Resource allocation. Psychological first aid.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is normal fasting blood glucose?",
          options: [
            "50-70 mg/dL",
            "70-100 mg/dL",
            "100-125 mg/dL",
            "125-150 mg/dL"
          ],
          correctAnswer: 1,
          explanation: "Normal fasting blood glucose is 70-100 mg/dL."
        },
        {
          id: 2,
          question: "What blood pressure target is recommended for hypertension?",
          options: [
            "<160/100",
            "<140/90",
            "<130/80",
            "<120/80"
          ],
          correctAnswer: 1,
          explanation: "Blood pressure should be maintained below 140/90 mmHg in most hypertensive patients."
        },
        {
          id: 3,
          question: "What is normal fetal heart rate?",
          options: [
            "80-110 bpm",
            "110-160 bpm",
            "160-200 bpm",
            "200-240 bpm"
          ],
          correctAnswer: 1,
          explanation: "Normal fetal heart rate ranges from 110-160 beats per minute."
        },
        {
          id: 4,
          question: "What does the 'E' in ABCDE trauma assessment stand for?",
          options: [
            "EKG",
            "Exposure",
            "Evaluation",
            "Emergency"
          ],
          correctAnswer: 1,
          explanation: "E stands for Exposure - fully exposing the patient to identify all injuries."
        },
        {
          id: 5,
          question: "What is normal central venous pressure (CVP)?",
          options: [
            "0-2 mmHg",
            "2-6 mmHg",
            "6-10 mmHg",
            "10-14 mmHg"
          ],
          correctAnswer: 1,
          explanation: "Normal CVP ranges from 2-6 mmHg, indicating adequate venous return."
        },
        {
          id: 6,
          question: "How often should oral care be performed on ventilated patients?",
          options: [
            "Every shift",
            "Every 4 hours",
            "Daily",
            "Only when soiled"
          ],
          correctAnswer: 1,
          explanation: "Oral care every 4 hours reduces risk of ventilator-associated pneumonia."
        },
        {
          id: 7,
          question: "What is normal APGAR score at 1 and 5 minutes?",
          options: [
            "0-3",
            "4-6",
            "7-10",
            "10-12"
          ],
          correctAnswer: 2,
          explanation: "APGAR scores of 7-10 are considered normal for newborns."
        },
        {
          id: 8,
          question: "What is the key feature of delirium?",
          options: [
            "Gradual onset",
            "Sudden onset with fluctuations",
            "Stable over time",
            "Only at night"
          ],
          correctAnswer: 1,
          explanation: "Delirium features acute onset with fluctuating course, unlike dementia's gradual progression."
        },
        {
          id: 9,
          question: "What is ESI in emergency triage?",
          options: [
            "Emergency Severity Index",
            "Emergency System Integration",
            "Emergency Surgical Intervention",
            "Emergency Safety Inspection"
          ],
          correctAnswer: 0,
          explanation: "ESI stands for Emergency Severity Index, a 5-level triage system."
        },
        {
          id: 10,
          question: "What is normal mean arterial pressure (MAP)?",
          options: [
            ">45 mmHg",
            ">55 mmHg",
            ">65 mmHg",
            ">75 mmHg"
          ],
          correctAnswer: 2,
          explanation: "MAP should be maintained above 65 mmHg for adequate organ perfusion."
        },
        {
          id: 11,
          question: "What postoperative complication does early ambulation prevent?",
          options: [
            "Hypertension",
            "Deep vein thrombosis",
            "Diabetes",
            "Hearing loss"
          ],
          correctAnswer: 1,
          explanation: "Early ambulation promotes circulation and helps prevent deep vein thrombosis."
        },
        {
          id: 12,
          question: "What chemotherapy side effect requires infection precautions?",
          options: [
            "Nausea",
            "Neutropenia",
            "Hair loss",
            "Fatigue"
          ],
          correctAnswer: 1,
          explanation: "Neutropenia (low white blood cells) increases infection risk requiring protective precautions."
        },
        {
          id: 13,
          question: "What lochia color occurs immediately postpartum?",
          options: [
            "Alba (white)",
            "Serosa (pink-brown)",
            "Rubra (red)",
            "Purple"
          ],
          correctAnswer: 2,
          explanation: "Lochia rubra is bright red and occurs for the first 3-4 days postpartum."
        },
        {
          id: 14,
          question: "What is primary prevention for falls in elderly?",
          options: [
            "Restraint use",
            "Environmental modifications",
            "Bed alarms only",
            "Medication increases"
          ],
          correctAnswer: 1,
          explanation: "Environmental modifications like removing hazards are primary fall prevention strategies."
        },
        {
          id: 15,
          question: "What is key in therapeutic communication?",
          options: [
            "Giving advice",
            "Active listening",
            "Talking most of the time",
            "Avoiding silence"
          ],
          correctAnswer: 1,
          explanation: "Active listening demonstrates respect and helps understand the patient's perspective."
        },
        {
          id: 16,
          question: "What setting on ventilator prevents alveolar collapse?",
          options: [
            "Tidal volume",
            "Respiratory rate",
            "PEEP",
            "FiO2"
          ],
          correctAnswer: 2,
          explanation: "PEEP (Positive End-Expiratory Pressure) prevents alveolar collapse at end expiration."
        },
        {
          id: 17,
          question: "How are pediatric medications typically dosed?",
          options: [
            "By age only",
            "By weight",
            "Same as adults",
            "By height"
          ],
          correctAnswer: 1,
          explanation: "Pediatric medications are dosed by weight (mg/kg) for accuracy and safety."
        },
        {
          id: 18,
          question: "What characterizes dementia?",
          options: [
            "Sudden confusion",
            "Gradual cognitive decline",
            "Only memory loss",
            "Complete recovery"
          ],
          correctAnswer: 1,
          explanation: "Dementia features gradual, progressive cognitive decline over months to years."
        },
        {
          id: 19,
          question: "What is mass casualty triage system?",
          options: [
            "First come, first served",
            "Simple triage and rapid treatment",
            "Only treat children first",
            "Treat most serious last"
          ],
          correctAnswer: 1,
          explanation: "START (Simple Triage and Rapid Treatment) is used in mass casualty incidents."
        },
        {
          id: 20,
          question: "What should be assessed in depression?",
          options: [
            "Only mood",
            "Suicide risk",
            "Physical health only",
            "Family history only"
          ],
          correctAnswer: 1,
          explanation: "Suicide risk assessment is critical in depression evaluation and management."
        }
      ]
    },

    // MODULE 4: Advanced Clinical Skills
    {
      id: 4,
      title: "Advanced Clinical Skills",
      content: `
# Mastery of Complex Nursing Procedures

Advanced clinical skills require technical proficiency, critical thinking, and adherence to evidence-based protocols.

## Intravenous Therapy

**Venous Access** - Peripheral IV: select appropriate site, use smallest catheter for needed therapy. Central lines: PICC, midline, tunneled catheters, ports. Ultrasound-guided insertion for difficult access.

**IV Administration** - Calculate infusion rates: mL/hr = total volume ÷ hours. Drip rates: gtt/min = (volume × drop factor) ÷ minutes. Use infusion pumps for precise delivery. Administer IV push medications correctly.

**Complication Management** - Infiltration: swelling, coolness, pain at site. Phlebitis: redness, warmth, tenderness along vein. Infection: fever, purulent drainage. Air embolism: sudden dyspnea, chest pain. Extravasation: tissue damage from vesicant medications.

**Blood Administration** - Verify blood products: patient identification, product compatibility, expiration. Use appropriate tubing with filter. Monitor vital signs: baseline, 15 minutes, then hourly. Recognize transfusion reactions: febrile, allergic, hemolytic.

## Airway Management

**Basic Airway** - Head tilt-chin lift, jaw thrust. Oral/nasopharyngeal airways. Bag-valve-mask ventilation with proper seal.

**Advanced Airway** - Endotracheal tube care: secure placement, monitor cuff pressure (20-30 cm H2O). Tracheostomy care: sterile technique, suctioning, dressing changes. Monitor tube placement with capnography.

**Suctioning Techniques** - Pre-oxygenate before suctioning. Limit suction time to <15 seconds. Use appropriate catheter size (half diameter of tube). Maintain sterile technique for tracheal suctioning.

## Cardiac Monitoring

**Electrocardiogram Basics** - Identify components: P wave (atrial depolarization), QRS complex (ventricular depolarization), T wave (ventricular repolarization). Calculate rate: 300 ÷ number of large boxes between R waves.

**Rhythm Interpretation** - Normal sinus rhythm: rate 60-100, regular. Bradycardia: <60 bpm. Tachycardia: >100 bpm. Atrial fibrillation: irregularly irregular, no P waves. Ventricular tachycardia: wide QRS, no P waves.

**Defibrillation/Cardioversion** - Defibrillation for pulseless VT/VF: energy selection, proper pad placement. Synchronized cardioversion for unstable tachycardias with pulse. Follow ACLS protocols.

**Pacemaker Monitoring** - Identify pacing spikes. Assess capture. Monitor for complications: infection, lead dislodgement, pacemaker syndrome.

## Diagnostic Test Preparation

**Laboratory Tests** - Understand common tests: CBC, electrolytes, renal function, liver enzymes, cardiac markers. Proper specimen collection: timing, technique, handling. Interpret results in clinical context.

**Imaging Procedures** - Prepare patients for: X-rays, CT scans, MRI, ultrasound. Assess for contraindications: pregnancy, metal implants, claustrophobia. Administer contrast media safely.

**Invasive Procedures** - Assist with: lumbar puncture, thoracentesis, paracentesis, bone marrow biopsy. Provide patient education. Monitor during procedure. Care for post-procedure.

## Emergency Procedures

**Code Blue Response** - Know roles in resuscitation team. Perform high-quality CPR: rate 100-120/min, depth 2-2.4 inches, full chest recoil. Use AED appropriately. Administer emergency medications.

**Rapid Response** - Early recognition of deteriorating patients. Call for help before crisis develops. Implement initial interventions. Facilitate transfer to higher level of care.

**Massive Transfusion Protocol** - Activate when indicated. Administer blood products in prescribed ratios. Monitor for complications: hypocalcemia, hyperkalemia, hypothermia.

**Disaster Protocols** - Know facility emergency plans. Participate in drills. Use personal protective equipment appropriately. Follow incident command structure.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the formula for mL/hr infusion rate?",
          options: [
            "Volume × hours",
            "Volume ÷ hours",
            "Hours ÷ volume",
            "Volume + hours"
          ],
          correctAnswer: 1,
          explanation: "mL/hr = total volume (mL) ÷ total hours for infusion."
        },
        {
          id: 2,
          question: "What indicates IV infiltration?",
          options: [
            "Fever",
            "Swelling and coolness at site",
            "Red streak up arm",
            "Bleeding"
          ],
          correctAnswer: 1,
          explanation: "Infiltration presents as swelling, coolness, and pain at IV site from fluid leaking into tissue."
        },
        {
          id: 3,
          question: "What should be verified before blood transfusion?",
          options: [
            "Patient's age",
            "Blood type and patient identification",
            "Insurance coverage",
            "Family consent"
          ],
          correctAnswer: 1,
          explanation: "Blood type compatibility and correct patient identification are critical safety checks."
        },
        {
          id: 4,
          question: "What represents atrial depolarization on ECG?",
          options: [
            "P wave",
            "QRS complex",
            "T wave",
            "U wave"
          ],
          correctAnswer: 0,
          explanation: "The P wave represents atrial depolarization (contraction)."
        },
        {
          id: 5,
          question: "What is proper endotracheal tube cuff pressure?",
          options: [
            "10-15 cm H2O",
            "20-30 cm H2O",
            "30-40 cm H2O",
            "40-50 cm H2O"
          ],
          correctAnswer: 1,
          explanation: "Endotracheal tube cuff pressure should be 20-30 cm H2O to prevent aspiration without causing tracheal damage."
        },
        {
          id: 6,
          question: "What is normal sinus rhythm rate?",
          options: [
            "40-60 bpm",
            "60-100 bpm",
            "100-150 bpm",
            "150-200 bpm"
          ],
          correctAnswer: 1,
          explanation: "Normal sinus rhythm has a rate of 60-100 beats per minute."
        },
        {
          id: 7,
          question: "How long should suctioning be limited to?",
          options: [
            "<5 seconds",
            "<15 seconds",
            "<30 seconds",
            "<60 seconds"
          ],
          correctAnswer: 1,
          explanation: "Suctioning should be limited to <15 seconds to prevent hypoxia."
        },
        {
          id: 8,
          question: "What is used for pulseless ventricular tachycardia?",
          options: [
            "Cardioversion",
            "Defibrillation",
            "Pacing",
            "Medication only"
          ],
          correctAnswer: 1,
          explanation: "Defibrillation is used for pulseless ventricular tachycardia and ventricular fibrillation."
        },
        {
          id: 9,
          question: "What CPR compression depth is recommended?",
          options: [
            "1-1.5 inches",
            "2-2.4 inches",
            "2.5-3 inches",
            "3-4 inches"
          ],
          correctAnswer: 1,
          explanation: "Adult CPR compression depth should be 2-2.4 inches (5-6 cm)."
        },
        {
          id: 10,
          question: "What indicates phlebitis?",
          options: [
            "Swelling only",
            "Redness and tenderness along vein",
            "Bleeding at site",
            "Fever alone"
          ],
          correctAnswer: 1,
          explanation: "Phlebitis presents as redness, warmth, and tenderness along the vein path."
        },
        {
          id: 11,
          question: "How calculate heart rate from ECG?",
          options: [
            "1500 ÷ small boxes between R waves",
            "300 ÷ large boxes between R waves",
            "Count all beats in 10 seconds",
            "60 ÷ PR interval"
          ],
          correctAnswer: 1,
          explanation: "Rate = 300 ÷ number of large boxes between R waves (quick estimation method)."
        },
        {
          id: 12,
          question: "What transfusion reaction causes fever?",
          options: [
            "Allergic",
            "Febrile",
            "Hemolytic",
            "Bacterial"
          ],
          correctAnswer: 1,
          explanation: "Febrile non-hemolytic reactions cause fever during or after transfusion."
        },
        {
          id: 13,
          question: "What catheter size for tracheal suctioning?",
          options: [
            "Same as tube diameter",
            "Half tube diameter",
            "Twice tube diameter",
            "Any available size"
          ],
          correctAnswer: 1,
          explanation: "Suction catheter should be half the diameter of the tracheal tube to allow airflow during suctioning."
        },
        {
          id: 14,
          question: "What rhythm has no P waves and is irregular?",
          options: [
            "Normal sinus",
            "Atrial fibrillation",
            "Ventricular tachycardia",
            "Sinus bradycardia"
          ],
          correctAnswer: 1,
          explanation: "Atrial fibrillation has irregular rhythm with no discernible P waves."
        },
        {
          id: 15,
          question: "When is rapid response activated?",
          options: [
            "After cardiac arrest",
            "For early signs of deterioration",
            "Only for bleeding",
            "For routine vital signs"
          ],
          correctAnswer: 1,
          explanation: "Rapid response teams are called for early signs of clinical deterioration to prevent crises."
        },
        {
          id: 16,
          question: "What indicates extravasation?",
          options: [
            "Mild discomfort",
            "Tissue damage from vesicant",
            "Slight redness",
            "Bruising only"
          ],
          correctAnswer: 1,
          explanation: "Extravasation involves tissue damage from vesicant medications leaking into surrounding tissue."
        },
        {
          id: 17,
          question: "What represents ventricular repolarization?",
          options: [
            "P wave",
            "QRS complex",
            "T wave",
            "PR interval"
          ],
          correctAnswer: 2,
          explanation: "The T wave represents ventricular repolarization (recovery)."
        },
        {
          id: 18,
          question: "What is proper CPR compression rate?",
          options: [
            "60-80 per minute",
            "80-100 per minute",
            "100-120 per minute",
            "120-140 per minute"
          ],
          correctAnswer: 2,
          explanation: "CPR compression rate should be 100-120 compressions per minute."
        },
        {
          id: 19,
          question: "What monitor confirms endotracheal tube placement?",
          options: [
            "Pulse oximetry",
            "Capnography",
            "Blood pressure",
            "Temperature"
          ],
          correctAnswer: 1,
          explanation: "Capnography detects exhaled CO2, confirming endotracheal tube placement in trachea."
        },
        {
          id: 20,
          question: "What is synchronized cardioversion for?",
          options: [
            "Pulseless rhythms",
            "Unstable tachycardias with pulse",
            "Bradycardia",
            "Asystole"
          ],
          correctAnswer: 1,
          explanation: "Synchronized cardioversion is used for unstable tachycardias when the patient has a pulse."
        }
      ]
    },

    // MODULE 5: Professional Practice
    {
      id: 5,
      title: "Professional Practice",
      content: `
# Nursing Professionalism and Ethics

Clinical nursing requires adherence to professional standards, ethical principles, and legal requirements while providing quality care.

## Nursing Ethics

**Ethical Principles** - Autonomy: respect patient's right to make decisions. Beneficence: do good. Nonmaleficence: do no harm. Justice: treat fairly. Veracity: tell truth. Fidelity: keep promises.

**Common Ethical Dilemmas** - End-of-life decisions: withholding/withdrawing treatment. Informed consent: capacity assessment. Resource allocation: fair distribution. Confidentiality: privacy versus safety. Truth-telling: balancing honesty with hope.

**Decision-Making Frameworks** - Use ethical decision models. Consult ethics committee. Involve interdisciplinary team. Consider patient values and preferences. Document decision process.

## Legal Considerations

**Scope of Practice** - Practice within licensure boundaries. Follow facility policies. Maintain competencies. Seek supervision when needed. Know when to consult or refer.

**Informed Consent** - Ensure patient understands: procedure, risks, benefits, alternatives. Assess decision-making capacity. Document consent process. Obtain consent for minors, incapacitated patients.

**Documentation Standards** - Accurate, timely, complete records. Use objective language. Correct errors properly. Maintain confidentiality. Follow retention policies.

**Incident Reporting** - Report errors, near misses, adverse events. Complete reports promptly. Participate in root cause analysis. Support just culture. Learn from incidents.

## Quality and Safety

**Patient Safety Goals** - Identify patients correctly. Improve communication. Use medications safely. Prevent infection. Reduce fall risk. Prevent pressure ulcers.

**Evidence-Based Practice** - Integrate research findings with clinical expertise and patient values. Use clinical practice guidelines. Participate in quality improvement. Evaluate outcomes.

**Risk Management** - Identify potential risks. Implement preventive measures. Monitor for adverse events. Report concerns. Participate in safety committees.

**Infection Prevention** - Standard precautions: hand hygiene, PPE. Transmission-based precautions: contact, droplet, airborne. Isolation procedures. Environmental cleaning. Surveillance and reporting.

## Interprofessional Collaboration

**Team Communication** - Use SBAR format: Situation, Background, Assessment, Recommendation. Participate in rounds. Use closed-loop communication. Respect all team members' contributions.

**Conflict Resolution** - Address conflicts professionally. Use effective communication skills. Focus on patient safety. Seek mediation when needed. Document appropriately.

**Leadership Skills** - Delegate appropriately. Supervise team members. Provide constructive feedback. Mentor students and new staff. Advocate for patients and staff.

## Professional Development

**Continuing Education** - Maintain licensure requirements. Pursue specialty certifications. Attend conferences and workshops. Stay current with evidence. Share knowledge with colleagues.

**Career Planning** - Set professional goals. Seek advancement opportunities. Develop leadership skills. Network with colleagues. Maintain work-life balance.

**Self-Care** - Recognize signs of burnout. Practice stress management. Maintain physical health. Seek support when needed. Develop resilience.

## Regulatory Compliance

**Licensing Requirements** - Maintain active license. Report changes to board. Complete continuing education. Follow practice act regulations. Understand disciplinary processes.

**Accreditation Standards** - Know JCAHO or other accrediting body requirements. Participate in surveys. Implement standards in practice. Document compliance.

**Healthcare Regulations** - Understand HIPAA, EMTALA, CMS regulations. Follow billing compliance rules. Protect patient rights. Report abuse as mandated.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What ethical principle means 'do no harm'?",
          options: [
            "Autonomy",
            "Beneficence",
            "Nonmaleficence",
            "Justice"
          ],
          correctAnswer: 2,
          explanation: "Nonmaleficence is the ethical principle of avoiding harm to patients."
        },
        {
          id: 2,
          question: "What does SBAR stand for in communication?",
          options: [
            "Situation, Background, Assessment, Recommendation",
            "Symptoms, Background, Analysis, Resolution",
            "Status, Background, Actions, Results",
            "Situation, Behavior, Assessment, Response"
          ],
          correctAnswer: 0,
          explanation: "SBAR is a structured communication format: Situation, Background, Assessment, Recommendation."
        },
        {
          id: 3,
          question: "What is required for informed consent?",
          options: [
            "Patient signature only",
            "Understanding of procedure, risks, benefits, alternatives",
            "Family agreement",
            "Doctor's approval only"
          ],
          correctAnswer: 1,
          explanation: "Informed consent requires patient understanding of the procedure, risks, benefits, and alternatives."
        },
        {
          id: 4,
          question: "What precautions are used for all patients?",
          options: [
            "Contact precautions",
            "Standard precautions",
            "Droplet precautions",
            "Airborne precautions"
          ],
          correctAnswer: 1,
          explanation: "Standard precautions (hand hygiene, PPE) are used for all patient care."
        },
        {
          id: 5,
          question: "What is beneficence?",
          options: [
            "Respecting autonomy",
            "Doing good for patients",
            "Avoiding harm",
            "Being truthful"
          ],
          correctAnswer: 1,
          explanation: "Beneficence is the ethical principle of acting in the patient's best interest."
        },
        {
          id: 6,
          question: "How should documentation errors be corrected?",
          options: [
            "Erase completely",
            "Use correction fluid",
            "Draw single line, initial, date, write correction",
            "Ignore and rewrite"
          ],
          correctAnswer: 2,
          explanation: "Draw a single line through error, initial and date, then write correction to maintain record integrity."
        },
        {
          id: 7,
          question: "What is just culture?",
          options: [
            "Punishing all errors",
            "Focusing on system improvement rather than individual blame",
            "Ignoring errors",
            "Only reporting major errors"
          ],
          correctAnswer: 1,
          explanation: "Just culture focuses on system improvements while holding individuals accountable for reckless behavior."
        },
        {
          id: 8,
          question: "What transmission precaution for tuberculosis?",
          options: [
            "Contact",
            "Droplet",
            "Airborne",
            "Standard only"
          ],
          correctAnswer: 2,
          explanation: "Airborne precautions with N95 respirator are required for tuberculosis."
        },
        {
          id: 9,
          question: "What ethical principle involves truth-telling?",
          options: [
            "Autonomy",
            "Veracity",
            "Fidelity",
            "Justice"
          ],
          correctAnswer: 1,
          explanation: "Veracity is the ethical principle of truthfulness and honesty."
        },
        {
          id: 10,
          question: "When should incidents be reported?",
          options: [
            "Only if serious",
            "Promptly after occurrence",
            "At end of shift",
            "Only if witnessed"
          ],
          correctAnswer: 1,
          explanation: "Incidents should be reported promptly to ensure timely investigation and intervention."
        },
        {
          id: 11,
          question: "What is closed-loop communication?",
          options: [
            "Speaking clearly",
            "Receiver repeats back message for verification",
            "Using medical terminology",
            "Writing everything down"
          ],
          correctAnswer: 1,
          explanation: "Closed-loop communication involves the receiver repeating back instructions to verify understanding."
        },
        {
          id: 12,
          question: "What is included in standard precautions?",
          options: [
            "Hand hygiene and appropriate PPE",
            "Only gloves for all care",
            "Masks for all patients",
            "Gowns for medication administration"
          ],
          correctAnswer: 0,
          explanation: "Standard precautions include hand hygiene and use of PPE based on anticipated exposure."
        },
        {
          id: 13,
          question: "What is evidence-based practice?",
          options: [
            "Only using personal experience",
            "Integrating research, clinical expertise, patient values",
            "Following doctor's orders exactly",
            "Using traditional methods only"
          ],
          correctAnswer: 1,
          explanation: "Evidence-based practice combines research evidence with clinical expertise and patient preferences."
        },
        {
          id: 14,
          question: "What ethical principle involves keeping promises?",
          options: [
            "Autonomy",
            "Fidelity",
            "Veracity",
            "Justice"
          ],
          correctAnswer: 1,
          explanation: "Fidelity is the ethical principle of keeping commitments and promises."
        },
        {
          id: 15,
          question: "What should be done with used needles?",
          options: [
            "Recap carefully",
            "Place in sharps container immediately",
            "Leave at bedside",
            "Throw in regular trash"
          ],
          correctAnswer: 1,
          explanation: "Used needles must be disposed of immediately in puncture-resistant sharps containers."
        },
        {
          id: 16,
          question: "What is patient autonomy?",
          options: [
            "Making decisions for patients",
            "Respecting patient's right to self-determination",
            "Following family wishes",
            "Doing what's medically best"
          ],
          correctAnswer: 1,
          explanation: "Autonomy respects the patient's right to make informed decisions about their care."
        },
        {
          id: 17,
          question: "When are contact precautions used?",
          options: [
            "For airborne diseases",
            "For diseases spread by direct or indirect contact",
            "For all infections",
            "Only for wound infections"
          ],
          correctAnswer: 1,
          explanation: "Contact precautions prevent spread of organisms through direct or indirect contact."
        },
        {
          id: 18,
          question: "What is constructive feedback?",
          options: [
            "Only positive comments",
            "Specific, behavior-focused, aimed at improvement",
            "Personal criticism",
            "Public humiliation"
          ],
          correctAnswer: 1,
          explanation: "Constructive feedback is specific, focuses on behaviors, and aims to improve performance."
        },
        {
          id: 19,
          question: "What is HIPAA?",
          options: [
            "Health Insurance Portability and Accountability Act",
            "Hospital Infection Prevention and Assessment Act",
            "Healthcare Improvement and Patient Protection Act",
            "Hospital Information Privacy and Access Act"
          ],
          correctAnswer: 0,
          explanation: "HIPAA protects patient health information privacy and security."
        },
        {
          id: 20,
          question: "What is resilience in nursing?",
          options: [
            "Never making mistakes",
            "Ability to adapt and recover from stress",
            "Working long hours",
            "Ignoring emotional responses"
          ],
          correctAnswer: 1,
          explanation: "Resilience is the ability to adapt to stress and recover from difficult experiences."
        }
      ]
    },

    // MODULE 6: Clinical Leadership
    {
      id: 6,
      title: "Clinical Leadership",
      content: `
# Leadership in Clinical Settings

Clinical leadership involves guiding teams, managing resources, and driving quality improvement while maintaining excellent patient care.

## Leadership Theories

**Transformational Leadership** - Inspire and motivate teams. Create shared vision. Encourage innovation. Develop team members. Model desired behaviors.

**Situational Leadership** - Adapt style to situation and team needs. Directive for new team members. Supportive for experienced staff. Delegate appropriately based on competence and commitment.

**Servant Leadership** - Focus on serving others. Empower team members. Foster community. Value each person's contribution. Prioritize team needs over personal goals.

**Emotional Intelligence** - Self-awareness: recognize own emotions. Self-regulation: manage emotions appropriately. Empathy: understand others' feelings. Social skills: build relationships.

## Team Management

**Effective Delegation** - Assign appropriate tasks. Consider staff competencies. Provide clear instructions. Grant authority with responsibility. Monitor and provide feedback.

**Staff Development** - Identify learning needs. Provide opportunities for growth. Mentor new staff. Conduct performance evaluations. Support continuing education.

**Conflict Management** - Address issues promptly. Use mediation skills. Focus on interests, not positions. Seek win-win solutions. Document resolutions.

**Workplace Culture** - Foster psychological safety. Encourage open communication. Recognize achievements. Address toxic behaviors. Promote work-life balance.

## Quality Improvement

**QI Models** - Plan-Do-Study-Act (PDSA) cycles. Lean methodology. Six Sigma. Root cause analysis. Failure modes and effects analysis.

**Data Collection** - Identify metrics. Collect reliable data. Use appropriate tools: check sheets, control charts, flow diagrams. Analyze trends. Benchmark against standards.

**Implementation Strategies** - Engage stakeholders. Pilot changes. Provide education and support. Monitor implementation. Adjust based on feedback.

**Sustaining Improvements** - Standardize successful changes. Monitor ongoing compliance. Celebrate successes. Share lessons learned. Continuously reassess.

## Resource Management

**Staffing** - Match staffing to patient acuity. Consider skill mix. Plan for contingencies. Manage overtime. Address staffing shortages proactively.

**Budget Management** - Understand unit budget. Monitor supply usage. Reduce waste. Justify capital equipment. Participate in budget planning.

**Time Management** - Prioritize tasks. Use time efficiently. Minimize interruptions. Delegate appropriately. Balance direct care with administrative duties.

**Supply Chain** - Maintain appropriate inventory. Standardize supplies when possible. Monitor expiration dates. Report equipment issues promptly.

## Change Management

**Change Process** - Assess readiness for change. Communicate vision clearly. Address resistance. Provide support during transition. Evaluate outcomes.

**Stakeholder Engagement** - Identify key stakeholders. Understand their perspectives. Involve them in planning. Address concerns. Maintain communication.

**Overcoming Resistance** - Listen to concerns. Provide rationale for change. Offer training and support. Involve resistors in process. Celebrate early wins.

**Sustaining Change** - Reinforce new behaviors. Monitor compliance. Provide ongoing support. Integrate into routine. Review and adjust as needed.

## Professional Advocacy

**Patient Advocacy** - Ensure patient rights. Communicate patient preferences. Address concerns promptly. Facilitate informed decision-making. Protect vulnerable patients.

**Staff Advocacy** - Address workplace issues. Support professional development. Ensure safe working conditions. Represent staff concerns to administration. Promote fair treatment.

**Professional Organizations** - Participate in nursing associations. Stay informed about issues. Advocate for nursing interests. Contribute to policy development. Network with colleagues.

**Community Engagement** - Participate in health promotion. Educate community groups. Collaborate with community resources. Address population health needs. Represent nursing profession positively.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What leadership style inspires and motivates teams?",
          options: [
            "Autocratic",
            "Transformational",
            "Laissez-faire",
            "Transactional"
          ],
          correctAnswer: 1,
          explanation: "Transformational leadership inspires and motivates teams toward shared vision."
        },
        {
          id: 2,
          question: "What does PDSA stand for in quality improvement?",
          options: [
            "Plan, Do, Study, Act",
            "Prepare, Develop, Study, Apply",
            "Plan, Develop, Study, Achieve",
            "Prepare, Do, Study, Apply"
          ],
          correctAnswer: 0,
          explanation: "PDSA cycles: Plan (change), Do (implement), Study (results), Act (adjust)."
        },
        {
          id: 3,
          question: "What is emotional intelligence?",
          options: [
            "High IQ",
            "Ability to recognize and manage emotions",
            "Medical knowledge",
            "Technical skills"
          ],
          correctAnswer: 1,
          explanation: "Emotional intelligence involves self-awareness, self-regulation, empathy, and social skills."
        },
        {
          id: 4,
          question: "What should be considered when delegating?",
          options: [
            "Only task urgency",
            "Staff competencies and task requirements",
            "Personal preferences",
            "Time of day only"
          ],
          correctAnswer: 1,
          explanation: "Delegation should consider staff competencies, task complexity, and supervision needs."
        },
        {
          id: 5,
          question: "What leadership style adapts to situations?",
          options: [
            "Situational",
            "Autocratic",
            "Democratic",
            "Bureaucratic"
          ],
          correctAnswer: 0,
          explanation: "Situational leadership adapts style based on team members' competence and commitment levels."
        },
        {
          id: 6,
          question: "What is root cause analysis?",
          options: [
            "Blaming individuals",
            "Identifying underlying system issues",
            "Ignoring problems",
            "Punishing errors"
          ],
          correctAnswer: 1,
          explanation: "Root cause analysis identifies underlying system issues rather than blaming individuals."
        },
        {
          id: 7,
          question: "What is servant leadership?",
          options: [
            "Controlling team completely",
            "Focusing on serving and empowering others",
            "Making all decisions alone",
            "Prioritizing personal goals"
          ],
          correctAnswer: 1,
          explanation: "Servant leadership focuses on serving team members and empowering their development."
        },
        {
          id: 8,
          question: "What helps sustain quality improvements?",
          options: [
            "One-time training",
            "Standardizing successful changes",
            "Ignoring feedback",
            "Frequent major changes"
          ],
          correctAnswer: 1,
          explanation: "Standardizing successful changes integrates them into routine practice for sustainability."
        },
        {
          id: 9,
          question: "What is psychological safety?",
          options: [
            "Physical safety only",
            "Feeling safe to speak up without fear",
            "Avoiding all conflicts",
            "Always agreeing with leaders"
          ],
          correctAnswer: 1,
          explanation: "Psychological safety allows team members to voice concerns and ideas without fear of negative consequences."
        },
        {
          id: 10,
          question: "What should staffing consider?",
          options: [
            "Only number of patients",
            "Patient acuity and staff competencies",
            "Staff preferences only",
            "Budget constraints only"
          ],
          correctAnswer: 1,
          explanation: "Staffing should consider patient acuity, required skills, and staff competencies for safe care."
        },
        {
          id: 11,
          question: "What is effective conflict management?",
          options: [
            "Avoiding all conflicts",
            "Focusing on interests, not positions",
            "Always winning arguments",
            "Taking sides immediately"
          ],
          correctAnswer: 1,
          explanation: "Effective conflict management focuses on underlying interests rather than fixed positions."
        },
        {
          id: 12,
          question: "What is mentoring?",
          options: [
            "Criticizing constantly",
            "Guiding professional development",
            "Doing work for others",
            "Socializing only"
          ],
          correctAnswer: 1,
          explanation: "Mentoring involves guiding and supporting professional growth of less experienced staff."
        },
        {
          id: 13,
          question: "What helps overcome resistance to change?",
          options: [
            "Ignoring concerns",
            "Providing rationale and support",
            "Forcing compliance",
            "Threatening consequences"
          ],
          correctAnswer: 1,
          explanation: "Addressing concerns, providing rationale, and offering support helps overcome resistance."
        },
        {
          id: 14,
          question: "What is patient advocacy?",
          options: [
            "Making decisions for patients",
            "Ensuring patient rights and preferences",
            "Following doctor's orders only",
            "Ignoring family input"
          ],
          correctAnswer: 1,
          explanation: "Patient advocacy involves protecting patient rights and ensuring their preferences are respected."
        },
        {
          id: 15,
          question: "What does effective delegation include?",
          options: [
            "Assigning without explanation",
            "Clear instructions and authority",
            "No follow-up needed",
            "Only unpleasant tasks"
          ],
          correctAnswer: 1,
          explanation: "Effective delegation includes clear instructions, necessary authority, and appropriate follow-up."
        },
        {
          id: 16,
          question: "What is staff development?",
          options: [
            "Only formal education",
            "Identifying and addressing learning needs",
            "Promoting based on seniority",
            "Annual evaluations only"
          ],
          correctAnswer: 1,
          explanation: "Staff development involves identifying learning needs and providing growth opportunities."
        },
        {
          id: 17,
          question: "What is community engagement?",
          options: [
            "Only hospital work",
            "Participating in health promotion activities",
            "Social media use only",
            "Ignoring community needs"
          ],
          correctAnswer: 1,
          explanation: "Community engagement involves participating in activities that promote community health."
        },
        {
          id: 18,
          question: "What is time management?",
          options: [
            "Working constantly",
            "Prioritizing and using time efficiently",
            "Doing everything yourself",
            "Avoiding all breaks"
          ],
          correctAnswer: 1,
          explanation: "Time management involves prioritizing tasks and using time effectively to accomplish goals."
        },
        {
          id: 19,
          question: "What is professional advocacy?",
          options: [
            "Only personal advancement",
            "Representing nursing interests and values",
            "Criticizing other professions",
            "Avoiding professional organizations"
          ],
          correctAnswer: 1,
          explanation: "Professional advocacy involves representing and advancing nursing interests and values."
        },
        {
          id: 20,
          question: "What fosters positive workplace culture?",
          options: [
            "Ignoring problems",
            "Encouraging open communication and recognition",
            "Focusing only on productivity",
            "Avoiding social interactions"
          ],
          correctAnswer: 1,
          explanation: "Positive culture is fostered through open communication, recognition, and supportive environment."
        }
      ]
    }
  ],

  // 3. FINAL EXAM (40 Questions from all modules)
  finalExam: {
    title: "Clinical Nursing Diploma Final Examination",
    description: "Comprehensive exam covering all 6 advanced modules of the Clinical Nursing Diploma course.",
    passingScore: 75,
    questions: [
      // Questions from Module 1
      {
        id: 1,
        question: "What is the Glasgow Coma Scale range?",
        options: [
          "1-10",
          "3-15",
          "5-20",
          "0-12"
        ],
        correctAnswer: 1,
        explanation: "Glasgow Coma Scale ranges from 3 (deep unconsciousness) to 15 (fully alert).",
        module: 1
      },
      {
        id: 2,
        question: "What is normal capillary refill time?",
        options: [
          "<1 second",
          "<3 seconds",
          "<5 seconds",
          "<10 seconds"
        ],
        correctAnswer: 1,
        explanation: "Normal capillary refill is less than 3 seconds.",
        module: 1
      },
      {
        id: 3,
        question: "What breath sounds are normal over lung fields?",
        options: [
          "Bronchial",
          "Vesicular",
          "Bronchovesicular",
          "Tracheal"
        ],
        correctAnswer: 1,
        explanation: "Vesicular breath sounds are normal over lung fields.",
        module: 1
      },

      // Questions from Module 2
      {
        id: 4,
        question: "How many rights of medication administration are recommended?",
        options: [
          "5",
          "7",
          "10",
          "12"
        ],
        correctAnswer: 2,
        explanation: "Current practice recommends 10 rights for medication safety.",
        module: 2
      },
      {
        id: 5,
        question: "What is normal SpO2 level?",
        options: [
          ">84%",
          ">88%",
          ">94%",
          ">98%"
        ],
        correctAnswer: 2,
        explanation: "Normal oxygen saturation is greater than 94% on room air.",
        module: 2
      },
      {
        id: 6,
        question: "What is normal potassium range?",
        options: [
          "2.5-3.5 mEq/L",
          "3.5-5.0 mEq/L",
          "5.0-6.0 mEq/L",
          "6.0-7.0 mEq/L"
        ],
        correctAnswer: 1,
        explanation: "Normal serum potassium is 3.5-5.0 mEq/L.",
        module: 2
      },

      // Questions from Module 3
      {
        id: 7,
        question: "What is normal fasting blood glucose?",
        options: [
          "50-70 mg/dL",
          "70-100 mg/dL",
          "100-125 mg/dL",
          "125-150 mg/dL"
        ],
        correctAnswer: 1,
        explanation: "Normal fasting blood glucose is 70-100 mg/dL.",
        module: 3
      },
      {
        id: 8,
        question: "What is normal fetal heart rate?",
        options: [
          "80-110 bpm",
          "110-160 bpm",
          "160-200 bpm",
          "200-240 bpm"
        ],
        correctAnswer: 1,
        explanation: "Normal fetal heart rate is 110-160 beats per minute.",
        module: 3
      },
      {
        id: 9,
        question: "What is normal CVP range?",
        options: [
          "0-2 mmHg",
          "2-6 mmHg",
          "6-10 mmHg",
          "10-14 mmHg"
        ],
        correctAnswer: 1,
        explanation: "Normal central venous pressure is 2-6 mmHg.",
        module: 3
      },

      // Questions from Module 4
      {
        id: 10,
        question: "What formula calculates mL/hr infusion rate?",
        options: [
          "Volume × hours",
          "Volume ÷ hours",
          "Hours ÷ volume",
          "Volume + hours"
        ],
        correctAnswer: 1,
        explanation: "mL/hr = total volume (mL) ÷ total hours.",
        module: 4
      },
      {
        id: 11,
        question: "What indicates IV infiltration?",
        options: [
          "Fever",
          "Swelling and coolness at site",
          "Red streak up arm",
          "Bleeding"
        ],
        correctAnswer: 1,
        explanation: "Infiltration presents as swelling and coolness at IV site.",
        module: 4
      },
      {
        id: 12,
        question: "What is proper CPR compression depth?",
        options: [
          "1-1.5 inches",
          "2-2.4 inches",
          "2.5-3 inches",
          "3-4 inches"
        ],
        correctAnswer: 1,
        explanation: "Adult CPR compression depth should be 2-2.4 inches.",
        module: 4
      },

      // Questions from Module 5
      {
        id: 13,
        question: "What ethical principle means 'do no harm'?",
        options: [
          "Autonomy",
          "Beneficence",
          "Nonmaleficence",
          "Justice"
        ],
        correctAnswer: 2,
        explanation: "Nonmaleficence is the principle of avoiding harm.",
        module: 5
      },
      {
        id: 14,
        question: "What does SBAR stand for?",
        options: [
          "Situation, Background, Assessment, Recommendation",
          "Symptoms, Background, Analysis, Resolution",
          "Status, Background, Actions, Results",
          "Situation, Behavior, Assessment, Response"
        ],
        correctAnswer: 0,
        explanation: "SBAR: Situation, Background, Assessment, Recommendation.",
        module: 5
      },
      {
        id: 15,
        question: "What precautions are used for all patients?",
        options: [
          "Contact precautions",
          "Standard precautions",
          "Droplet precautions",
          "Airborne precautions"
        ],
        correctAnswer: 1,
        explanation: "Standard precautions are used for all patient care.",
        module: 5
      },

      // Questions from Module 6
      {
        id: 16,
        question: "What leadership style inspires and motivates?",
        options: [
          "Autocratic",
          "Transformational",
          "Laissez-faire",
          "Transactional"
        ],
        correctAnswer: 1,
        explanation: "Transformational leadership inspires and motivates teams.",
        module: 6
      },
      {
        id: 17,
        question: "What does PDSA stand for?",
        options: [
          "Plan, Do, Study, Act",
          "Prepare, Develop, Study, Apply",
          "Plan, Develop, Study, Achieve",
          "Prepare, Do, Study, Apply"
        ],
        correctAnswer: 0,
        explanation: "PDSA: Plan, Do, Study, Act for quality improvement.",
        module: 6
      },
      {
        id: 18,
        question: "What is emotional intelligence?",
        options: [
          "High IQ",
          "Ability to recognize and manage emotions",
          "Medical knowledge",
          "Technical skills"
        ],
        correctAnswer: 1,
        explanation: "Emotional intelligence involves recognizing and managing emotions.",
        module: 6
      },

      // Additional mixed questions
      {
        id: 19,
        question: "What represents atrial depolarization on ECG?",
        options: [
          "P wave",
          "QRS complex",
          "T wave",
          "U wave"
        ],
        correctAnswer: 0,
        explanation: "P wave represents atrial depolarization.",
        module: 4
      },
      {
        id: 20,
        question: "What is proper endotracheal tube cuff pressure?",
        options: [
          "10-15 cm H2O",
          "20-30 cm H2O",
          "30-40 cm H2O",
          "40-50 cm H2O"
        ],
        correctAnswer: 1,
        explanation: "Endotracheal tube cuff pressure should be 20-30 cm H2O.",
        module: 4
      },
      {
        id: 21,
        question: "What is normal sinus rhythm rate?",
        options: [
          "40-60 bpm",
          "60-100 bpm",
          "100-150 bpm",
          "150-200 bpm"
        ],
        correctAnswer: 1,
        explanation: "Normal sinus rhythm rate is 60-100 bpm.",
        module: 4
      },
      {
        id: 22,
        question: "What is informed consent requirement?",
        options: [
          "Patient signature only",
          "Understanding of procedure, risks, benefits, alternatives",
          "Family agreement",
          "Doctor's approval only"
        ],
        correctAnswer: 1,
        explanation: "Informed consent requires understanding of procedure, risks, benefits, and alternatives.",
        module: 5
      },
      {
        id: 23,
        question: "What is beneficence?",
        options: [
          "Respecting autonomy",
          "Doing good for patients",
          "Avoiding harm",
          "Being truthful"
        ],
        correctAnswer: 1,
        explanation: "Beneficence is acting in patient's best interest.",
        module: 5
      },
      {
        id: 24,
        question: "What is evidence-based practice?",
        options: [
          "Only using personal experience",
          "Integrating research, clinical expertise, patient values",
          "Following doctor's orders exactly",
          "Using traditional methods only"
        ],
        correctAnswer: 1,
        explanation: "Evidence-based practice combines research, expertise, and patient values.",
        module: 5
      },
      {
        id: 25,
        question: "What should be considered when delegating?",
        options: [
          "Only task urgency",
          "Staff competencies and task requirements",
          "Personal preferences",
          "Time of day only"
        ],
        correctAnswer: 1,
        explanation: "Delegation should consider staff competencies and task requirements.",
        module: 6
      },
      {
        id: 26,
        question: "What is root cause analysis?",
        options: [
          "Blaming individuals",
          "Identifying underlying system issues",
          "Ignoring problems",
          "Punishing errors"
        ],
        correctAnswer: 1,
        explanation: "Root cause analysis identifies system issues, not individual blame.",
        module: 6
      },
      {
        id: 27,
        question: "What is servant leadership?",
        options: [
          "Controlling team completely",
          "Focusing on serving and empowering others",
          "Making all decisions alone",
          "Prioritizing personal goals"
        ],
        correctAnswer: 1,
        explanation: "Servant leadership focuses on serving and empowering team members.",
        module: 6
      },
      {
        id: 28,
        question: "What stage pressure ulcer shows non-blanchable erythema?",
        options: [
          "Stage I",
          "Stage II",
          "Stage III",
          "Stage IV"
        ],
        correctAnswer: 0,
        explanation: "Stage I shows non-blanchable erythema with intact skin.",
        module: 1
      },
      {
        id: 29,
        question: "What does the 'Q' in PQRST pain assessment represent?",
        options: [
          "Quantity",
          "Quality",
          "Question",
          "Quickness"
        ],
        correctAnswer: 1,
        explanation: "Q stands for Quality - describing pain characteristics.",
        module: 1
      },
      {
        id: 30,
        question: "What BMI range is normal?",
        options: [
          "<18.5",
          "18.5-24.9",
          "25-29.9",
          "30-34.9"
        ],
        correctAnswer: 1,
        explanation: "Normal BMI is 18.5-24.9 for adults.",
        module: 1
      },
      {
        id: 31,
        question: "What angle for subcutaneous injections?",
        options: [
          "15-30 degrees",
          "45-90 degrees",
          "90 degrees only",
          "10-20 degrees"
        ],
        correctAnswer: 1,
        explanation: "Subcutaneous injections are given at 45-90 degree angle.",
        module: 2
      },
      {
        id: 32,
        question: "What dressing is best for moderate-heavy exudate?",
        options: [
          "Transparent film",
          "Hydrocolloid",
          "Alginate",
          "Gauze"
        ],
        correctAnswer: 2,
        explanation: "Alginate dressings absorb moderate-heavy exudate.",
        module: 2
      },
      {
        id: 33,
        question: "What oxygen device provides specific FiO2?",
        options: [
          "Nasal cannula",
          "Simple mask",
          "Venturi mask",
          "Face tent"
        ],
        correctAnswer: 2,
        explanation: "Venturi masks deliver specific oxygen concentrations.",
        module: 2
      },
      {
        id: 34,
        question: "What does ABCDE 'E' stand for in trauma?",
        options: [
          "EKG",
          "Exposure",
          "Evaluation",
          "Emergency"
        ],
        correctAnswer: 1,
        explanation: "E stands for Exposure in trauma assessment.",
        module: 3
      },
      {
        id: 35,
        question: "What is normal MAP?",
        options: [
          ">45 mmHg",
          ">55 mmHg",
          ">65 mmHg",
          ">75 mmHg"
        ],
        correctAnswer: 2,
        explanation: "Normal mean arterial pressure is >65 mmHg.",
        module: 3
      },
      {
        id: 36,
        question: "What characterizes delirium?",
        options: [
          "Gradual onset",
          "Sudden onset with fluctuations",
          "Stable over time",
          "Only at night"
        ],
        correctAnswer: 1,
        explanation: "Delirium features acute onset with fluctuating course.",
        module: 3
      },
      {
        id: 37,
        question: "How long limit suctioning?",
        options: [
          "<5 seconds",
          "<15 seconds",
          "<30 seconds",
          "<60 seconds"
        ],
        correctAnswer: 1,
        explanation: "Suctioning should be limited to <15 seconds.",
        module: 4
      },
      {
        id: 38,
        question: "What rhythm has no P waves and is irregular?",
        options: [
          "Normal sinus",
          "Atrial fibrillation",
          "Ventricular tachycardia",
          "Sinus bradycardia"
        ],
        correctAnswer: 1,
        explanation: "Atrial fibrillation has irregular rhythm with no P waves.",
        module: 4
      },
      {
        id: 39,
        question: "What is just culture?",
        options: [
          "Punishing all errors",
          "Focusing on system improvement",
          "Ignoring errors",
          "Only reporting major errors"
        ],
        correctAnswer: 1,
        explanation: "Just culture focuses on system improvement rather than individual blame.",
        module: 5
      },
      {
        id: 40,
        question: "What is patient advocacy?",
        options: [
          "Making decisions for patients",
          "Ensuring patient rights and preferences",
          "Following doctor's orders only",
          "Ignoring family input"
        ],
        correctAnswer: 1,
        explanation: "Patient advocacy involves protecting patient rights and ensuring preferences.",
        module: 6
      }
    ]
  }
};

export default clinicalNursingDiploma;
