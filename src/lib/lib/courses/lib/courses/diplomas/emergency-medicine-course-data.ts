// Emergency Medicine (Diploma) Course Data
export const emergencyMedicineDiplomaCourse = {
  // COURSE METADATA
  id: "emergency-medicine-diploma",
  title: "Emergency Medicine (Diploma)",
  description: "Advanced emergency medical care building on First Aid Certificate knowledge. Covers trauma management, medical emergencies, disaster response, and advanced life support principles for pre-hospital care settings.",
  duration: "10 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  prerequisites: "First Aid Certificate or equivalent knowledge",
  icon: "🚑",
  badge: "Diploma",
  level: "Advanced",
  
  // MODULE 1: ADVANCED ASSESSMENT AND TRIAGE
  modules: [
    {
      id: 1,
      title: "Advanced Patient Assessment and Triage Systems",
      content: `
# Advanced Patient Assessment and Triage Systems

Advanced patient assessment goes beyond basic first aid to systematically identify life-threatening conditions and prioritize care. This module covers comprehensive assessment techniques and advanced triage systems used in emergency medicine.

## Primary Survey (ABCDE Approach)

The ABCDE approach provides a systematic method for rapidly assessing and treating life-threatening conditions:

**A - Airway with Cervical Spine Protection**
- Assess airway patency
- Look for obstructions, secretions, blood
- Listen for abnormal sounds (snoring, gurgling, stridor)
- Maintain cervical spine immobilization if trauma suspected
- **Interventions:** Head-tilt chin-lift (if no trauma), jaw thrust, suction, airway adjuncts

**B - Breathing**
- Assess respiratory rate, depth, effort
- Look for cyanosis, use of accessory muscles
- Listen for breath sounds (absent, diminished, wheezing)
- Check for symmetrical chest movement
- **Interventions:** Oxygen therapy, ventilation assistance, chest decompression if needed

**C - Circulation with Hemorrhage Control**
- Assess pulse (rate, rhythm, quality)
- Check capillary refill time (normal <2 seconds)
- Evaluate skin color, temperature, moisture
- Identify and control external bleeding
- **Interventions:** Direct pressure, tourniquets, hemostatic agents, IV access if trained

**D - Disability (Neurological Status)**
- Assess level of consciousness (AVPU scale)
- Check pupil size and reaction
- Evaluate for signs of stroke or head injury
- **AVPU Scale:**
  - **A:** Alert
  - **V:** Responds to Verbal stimuli
  - **P:** Responds to Painful stimuli
  - **U:** Unresponsive
- **Interventions:** Maintain airway, prevent secondary injury

**E - Exposure and Environmental Control**
- Fully expose patient to identify hidden injuries
- Maintain patient dignity and privacy
- Prevent hypothermia
- **Interventions:** Blankets, warm IV fluids if available, environmental control

## Secondary Survey

After addressing life-threatening conditions, perform a thorough head-to-toe assessment:

**History Taking (SAMPLE)**
- **S:** Signs and symptoms
- **A:** Allergies
- **M:** Medications
- **P:** Past medical history
- **L:** Last oral intake
- **E:** Events leading to emergency

**Head-to-Toe Assessment:**
- **Head:** Scalp wounds, facial fractures, eye injuries, ears, nose, mouth
- **Neck:** Tracheal position, jugular vein distension, cervical spine tenderness
- **Chest:** Contusions, paradoxical movement, crepitus, breath sounds
- **Abdomen:** Tenderness, guarding, distension, bowel sounds
- **Pelvis:** Stability, tenderness
- **Extremities:** Deformities, pulses, sensation, movement
- **Back:** Log roll to examine posterior surfaces

## Vital Signs Assessment

**Comprehensive Vital Signs Monitoring:**
- **Respiratory Rate:** Normal adult 12-20 breaths/minute
- **Pulse Rate:** Normal adult 60-100 beats/minute
- **Blood Pressure:** Normal <120/80 mmHg
- **Oxygen Saturation (SpO2):** Normal >94%
- **Temperature:** Normal 36.5-37.5°C (97.7-99.5°F)
- **Pain Assessment:** Using pain scales (0-10, Wong-Baker FACES)

**Abnormal Findings and Implications:**
- **Tachycardia:** May indicate shock, pain, fever, anxiety
- **Bradycardia:** May indicate heart block, increased intracranial pressure
- **Tachypnea:** May indicate respiratory distress, acidosis, anxiety
- **Bradypnea:** May indicate opioid overdose, brain injury
- **Hypotension:** May indicate shock, dehydration, cardiac problem
- **Hypertension:** May indicate pain, anxiety, hypertensive emergency

## Advanced Triage Systems

**START Triage (Simple Triage and Rapid Treatment):**
Used in mass casualty incidents to quickly categorize patients:

**Step 1: Walking Wounded**
- Anyone who can walk gets "Minor" (Green) tag
- Direct to designated area for delayed treatment

**Step 2: Breathing Assessment**
- If not breathing: Position airway
- Still not breathing: "Deceased" (Black) tag
- Breathing >30/min: "Immediate" (Red) tag

**Step 3: Circulation Assessment**
- Check radial pulse or capillary refill
- No radial pulse or capillary refill >2 sec: "Immediate" (Red) tag

**Step 4: Mental Status Assessment**
- Check ability to follow simple commands
- Unable to follow commands: "Immediate" (Red) tag
- All others: "Delayed" (Yellow) tag

**JumpSTART Triage for Children:**
Modified START system for pediatric patients:
- Different respiratory rate criteria (15-45/min normal)
- Apnea check includes rescue breathing attempt
- Different mental status assessment (AVPU)

**Triage Tag Colors:**
- **Red (Immediate):** Life-threatening but treatable
- **Yellow (Delayed):** Serious but not immediately life-threatening
- **Green (Minor):** Walking wounded, minor injuries
- **Black (Deceased/Expectant):** Deceased or unsalvageable given resources

## Special Assessment Considerations

**Pediatric Assessment:**
- Different normal vital sign ranges by age
- Use pediatric assessment triangle (appearance, work of breathing, circulation)
- Anatomical and physiological differences affect assessment

**Geriatric Assessment:**
- May have atypical presentation of serious conditions
- Multiple comorbidities and medications
- Baseline status may be different
- Increased risk of complications

**Obstetric Assessment:**
- Physiological changes of pregnancy affect assessment
- Two patients to consider (mother and fetus)
- Special considerations for positioning and interventions

**Trauma Assessment:**
- Mechanism of injury guides assessment
- High-energy mechanisms increase suspicion for serious injury
- Consider hidden injuries and delayed presentations

## Documentation and Communication

**Patient Care Report (PCR) Essentials:**
- Patient demographics
- Chief complaint
- Vital signs with times
- Assessment findings
- Treatments provided
- Patient response to treatment
- Handoff information

**Radio Communication:**
- Clear, concise reporting
- Standardized formats (MIST, SBAR)
- Essential information only
- Confirmation of receipt

**Handoff Communication:**
- Structured approach (SBAR)
- **S:** Situation
- **B:** Background
- **A:** Assessment
- **R:** Recommendation
- Ensure continuity of care

Advanced assessment and effective triage are foundational to providing appropriate emergency care and optimizing patient outcomes.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does the ABCDE approach prioritize?",
          options: [
            "Comfort care first",
            "Life-threatening conditions systematically",
            "Documentation before treatment",
            "Patient history first"
          ],
          correctAnswer: 1,
          explanation: "ABCDE approach systematically addresses Airway, Breathing, Circulation, Disability, Exposure for life-threatening conditions."
        },
        {
          id: 2,
          question: "What does AVPU assess?",
          options: [
            "Airway status",
            "Level of consciousness",
            "Circulatory status",
            "Respiratory effort"
          ],
          correctAnswer: 1,
          explanation: "AVPU (Alert, Verbal, Pain, Unresponsive) assesses neurological status and level of consciousness."
        },
        {
          id: 3,
          question: "What is the first step in START triage?",
          options: [
            "Check breathing",
            "Identify walking wounded",
            "Check capillary refill",
            "Assess mental status"
          ],
          correctAnswer: 1,
          explanation: "START triage begins by identifying walking wounded who can be tagged Minor (Green) and directed to treatment area."
        },
        {
          id: 4,
          question: "What respiratory rate gets Red tag in START?",
          options: [
            "Less than 10/min",
            "Greater than 30/min",
            "12-20/min",
            "Any rate with difficulty"
          ],
          correctAnswer: 1,
          explanation: "In START triage, respiratory rate greater than 30/minute indicates Immediate (Red) category."
        },
        {
          id: 5,
          question: "What does SAMPLE history include?",
          options: [
            "Only current symptoms",
            "Signs/symptoms, Allergies, Medications, Past history, Last intake, Events",
            "Only medication list",
            "Only allergy information"
          ],
          correctAnswer: 1,
          explanation: "SAMPLE includes Signs/symptoms, Allergies, Medications, Past medical history, Last oral intake, Events leading to emergency."
        },
        {
          id: 6,
          question: "What is normal capillary refill time?",
          options: [
            "<2 seconds",
            "2-4 seconds",
            "4-6 seconds",
            "6-8 seconds"
          ],
          correctAnswer: 0,
          explanation: "Normal capillary refill time is less than 2 seconds; longer indicates possible circulatory compromise."
        },
        {
          id: 7,
          question: "What does JumpSTART modify?",
          options: [
            "Adult triage for children",
            "Triage for elderly only",
            "Hospital triage systems",
            "Only trauma assessment"
          ],
          correctAnswer: 0,
          explanation: "JumpSTART modifies START triage for pediatric patients with different criteria and interventions."
        },
        {
          id: 8,
          question: "What is primary survey purpose?",
          options: [
            "Complete head-to-toe exam",
            "Identify and treat life-threatening conditions",
            "Gather detailed history",
            "Document all findings"
          ],
          correctAnswer: 1,
          explanation: "Primary survey (ABCDE) rapidly identifies and treats immediately life-threatening conditions."
        },
        {
          id: 9,
          question: "What does 'E' in ABCDE include?",
          options: [
            "Only environmental temperature",
            "Exposure and environmental control",
            "Eye examination only",
            "Emergency interventions"
          ],
          correctAnswer: 1,
          explanation: "'E' stands for Exposure and Environmental control - expose to find injuries while preventing hypothermia."
        },
        {
          id: 10,
          question: "What are Red tag patients?",
          options: [
            "Deceased patients",
            "Life-threatening but treatable conditions",
            "Walking wounded",
            "Minor injuries"
          ],
          correctAnswer: 1,
          explanation: "Red tag indicates Immediate priority - patients with life-threatening but treatable conditions."
        },
        {
          id: 11,
          question: "What is secondary survey?",
          options: [
            "Rapid ABCDE assessment",
            "Head-to-toe exam after primary survey",
            "Only vital signs check",
            "Family history gathering"
          ],
          correctAnswer: 1,
          explanation: "Secondary survey is thorough head-to-toe assessment performed after addressing life threats in primary survey."
        },
        {
          id: 12,
          question: "What is normal adult respiratory rate?",
          options: [
            "8-12 breaths/minute",
            "12-20 breaths/minute",
            "20-30 breaths/minute",
            "30-40 breaths/minute"
          ],
          correctAnswer: 1,
          explanation: "Normal adult respiratory rate is 12-20 breaths per minute at rest."
        },
        {
          id: 13,
          question: "What does SBAR stand for?",
          options: [
            "Situation, Background, Assessment, Recommendation",
            "Signs, Background, Assessment, Response",
            "Symptoms, Background, Action, Response",
            "Situation, Briefing, Assessment, Recommendation"
          ],
          correctAnswer: 0,
          explanation: "SBAR (Situation, Background, Assessment, Recommendation) provides structured communication for handoffs."
        },
        {
          id: 14,
          question: "When to maintain cervical spine immobilization?",
          options: [
            "Always for all patients",
            "Only for unconscious patients",
            "When trauma mechanism suggests possible spinal injury",
            "Only for elderly patients"
          ],
          correctAnswer: 2,
          explanation: "Maintain cervical spine immobilization when trauma mechanism suggests possible spinal injury."
        },
        {
          id: 15,
          question: "What is tachycardic heart rate for adults?",
          options: [
            "<60 beats/minute",
            "60-100 beats/minute",
            ">100 beats/minute",
            ">150 beats/minute"
          ],
          correctAnswer: 2,
          explanation: "Tachycardia in adults is heart rate greater than 100 beats per minute."
        },
        {
          id: 16,
          question: "What does pediatric assessment triangle evaluate?",
          options: [
            "Only respiratory status",
            "Appearance, Work of breathing, Circulation",
            "Only neurological status",
            "Only cardiac function"
          ],
          correctAnswer: 1,
          explanation: "Pediatric assessment triangle evaluates Appearance, Work of breathing, and Circulation to skin."
        },
        {
          id: 17,
          question: "What is normal oxygen saturation (SpO2)?",
          options: [
            ">85%",
            ">90%",
            ">94%",
            "100% only"
          ],
          correctAnswer: 2,
          explanation: "Normal oxygen saturation is greater than 94% on room air; below 90% indicates hypoxemia."
        },
        {
          id: 18,
          question: "What are Black tag patients?",
          options: [
            "Critical but salvageable",
            "Deceased or unsalvageable given resources",
            "Walking wounded",
            "Delayed treatment needed"
          ],
          correctAnswer: 1,
          explanation: "Black tag indicates Expectant - deceased or injuries unsalvageable given available resources."
        },
        {
          id: 19,
          question: "What is bradypneic respiratory rate?",
          options: [
            "<12 breaths/minute",
            "12-20 breaths/minute",
            "20-30 breaths/minute",
            ">30 breaths/minute"
          ],
          correctAnswer: 0,
          explanation: "Bradypnea is respiratory rate less than 12 breaths per minute in adults."
        },
        {
          id: 20,
          question: "Why advanced assessment important?",
          options: [
            "Only for documentation",
            "Systematically identifies conditions needing intervention",
            "Only for hospital settings",
            "Only for trauma patients"
          ],
          correctAnswer: 1,
          explanation: "Advanced systematic assessment identifies conditions requiring intervention and guides treatment priorities."
        }
      ]
    },

    // MODULE 2: TRAUMA MANAGEMENT
    {
      id: 2,
      title: "Advanced Trauma Management",
      content: `
# Advanced Trauma Management

Trauma is a leading cause of death and disability worldwide. This module covers systematic approach to trauma assessment, specific injury patterns, and advanced management techniques for pre-hospital care.

## Trauma Assessment Framework

**Mechanism of Injury (MOI) Considerations:**
- **High-energy mechanisms:** MVC >40 mph, falls >20 feet, pedestrian struck, motorcycle crash
- **Penetrating trauma:** GSW, stabbings, impalements
- **Blast injuries:** Primary (blast wave), secondary (projectiles), tertiary (displacement), quaternary (other)
- **Crush injuries:** Prolonged compression, compartment syndrome risk

**Golden Hour Concept:**
- First 60 minutes after injury critical for survival
- Emphasizes rapid assessment, treatment, and transport
- "Platinum 10 minutes" - on-scene time should be <10 minutes for critical trauma

## Specific Trauma Management

**Head Trauma:**
- **Pathophysiology:** Primary injury (initial damage), secondary injury (evolving damage)
- **Assessment:** Glasgow Coma Scale (GCS), pupil exam, neurological checks
- **Management:**
  - Maintain airway with cervical spine protection
  - Ensure adequate oxygenation and ventilation
  - Control bleeding from scalp wounds
  - Elevate head of bed 30° if spinal clearance
  - Monitor for signs of herniation

**Glasgow Coma Scale (GCS):**
- **Eye Opening (1-4):**
  - 4: Spontaneous
  - 3: To voice
  - 2: To pain
  - 1: None
- **Verbal Response (1-5):**
  - 5: Oriented
  - 4: Confused
  - 3: Inappropriate words
  - 2: Incomprehensible sounds
  - 1: None
- **Motor Response (1-6):**
  - 6: Obeys commands
  - 5: Localizes pain
  - 4: Withdraws from pain
  - 3: Flexion to pain (decorticate)
  - 2: Extension to pain (decerebrate)
  - 1: None

**Spinal Trauma:**
- **Assessment:** Pain, tenderness, deformity, neurological deficits
- **Management:**
  - Full spinal immobilization with suspicion
  - Rigid cervical collar
  - Spinal board with head immobilization
  - Log roll technique for movement
  - Monitor neurological function

**Chest Trauma:**
- **Life-threatening injuries:**
  - **Tension pneumothorax:** Tracheal deviation, distended neck veins, hypotension
  - **Open pneumothorax:** Sucking chest wound
  - **Flail chest:** Paradoxical movement, underlying lung injury
  - **Cardiac tamponade:** Beck's triad (hypotension, distended neck veins, muffled heart sounds)
- **Management:**
  - Needle decompression for tension pneumothorax
  - Occlusive dressing for open pneumothorax (taped on 3 sides)
  - Oxygen and ventilation support
  - Rapid transport

**Abdominal Trauma:**
- **Assessment:** Pain, tenderness, guarding, distension, bruising patterns
- **Management:**
  - Control external bleeding
  - Cover protruding organs with moist sterile dressing
  - Do not replace organs
  - Monitor for signs of shock
  - Rapid transport

**Pelvic Trauma:**
- **Assessment:** Pain, instability, deformity
- **Management:**
  - Pelvic binder or sheet for stabilization
  - Do not "spring" pelvis
  - Monitor for hemorrhage (can lose 1-2 liters in pelvis)
  - Rapid transport

**Extremity Trauma:**
- **Assessment:** 6 Ps - Pain, Pallor, Paresthesia, Paralysis, Pulselessness, Poikilothermia (cold)
- **Management:**
  - Control bleeding
  - Splint fractures
  - Assess neurovascular status before and after splinting
  - Elevate if possible
  - Apply cold packs

## Hemorrhage Control Strategies

**Tourniquet Application:**
- Indications: Life-threatening limb hemorrhage not controlled by direct pressure
- **Proper application:**
  - Place 2-3 inches above wound (not over joint)
  - Tighten until bleeding stops
  - Document time of application
  - Do not remove in pre-hospital setting

**Hemostatic Agents:**
- **Types:** Gauze, powder, granular, sponge
- **Application:**
  - Pack wound completely
  - Apply direct pressure for 3-5 minutes
  - Do not remove prematurely
- **Considerations:** Not for use in thoracic/abdominal cavities

**Wound Packing:**
- For junctional areas (neck, axilla, groin)
- Use hemostatic gauze if available
- Apply direct pressure after packing
- Monitor for continued bleeding

## Shock Management in Trauma

**Types of Shock in Trauma:**
- **Hypovolemic:** Blood loss (most common in trauma)
- **Cardiogenic:** Heart failure (myocardial contusion, tamponade)
- **Obstructive:** Tension pneumothorax, cardiac tamponade
- **Neurogenic:** Spinal cord injury (warm, dry, bradycardic)

**Management Principles:**
1. **Control hemorrhage** (tourniquets, direct pressure, hemostatic agents)
2. **Fluid resuscitation** if trained (balanced crystalloids)
3. **Keep patient warm** (prevent hypothermia-induced coagulopathy)
4. **Position appropriately** (supine, legs elevated if no contraindications)
5. **Rapid transport** to appropriate facility

**Permissive Hypotension:**
- For penetrating trauma with ongoing hemorrhage
- Maintain SBP 80-90 mmHg until surgical control
- Avoid aggressive fluid resuscitation that may disrupt clots
- Balance organ perfusion with bleeding risk

## Special Trauma Considerations

**Pediatric Trauma:**
- Anatomical differences affect injury patterns
- Higher risk of head injury and hypothermia
- Different vital sign norms
- Emotional support for child and parents

**Geriatric Trauma:**
- Higher mortality at lower injury severity
- Pre-existing conditions affect outcomes
- Medications (anticoagulants) increase bleeding risk
- Lower physiological reserve

**Pregnant Trauma:**
- Two patients to consider
- Physiological changes affect assessment
- Left lateral positioning after 20 weeks
- Monitor for placental abruption, fetal distress

**Burn Trauma:**
- **Assessment:** Depth, extent (Rule of Nines), special areas
- **Management:**
  - Stop burning process
  - Maintain airway (watch for inhalation injury)
  - Fluid resuscitation if trained (Parkland formula)
  - Cover burns with dry sterile dressings
  - Keep patient warm

## Trauma Triage Decisions

**Field Triage Criteria:**
- **Step 1: Physiologic criteria** (GCS ≤13, SBP <90, RR <10 or >29)
- **Step 2: Anatomic criteria** (penetrating injuries, flail chest, amputations, pelvic fractures)
- **Step 3: Mechanism criteria** (high-risk mechanisms)
- **Step 4: Special considerations** (age, comorbidities, pregnancy)

**Transport Decisions:**
- **Trauma center vs. nearest hospital**
- **Mode of transport** (ground vs. air)
- **Consider:** Distance, weather, traffic, patient condition
- **Communication** with receiving facility

## Documentation and Quality Improvement

**Trauma Documentation:**
- Detailed mechanism of injury
- Serial vital signs and GCS
- All interventions and responses
- Transport decisions and rationale

**Performance Improvement:**
- Case reviews
- Protocol compliance
- Outcome analysis
- Continuing education

Advanced trauma management requires systematic assessment, rapid intervention, and appropriate transport to optimize patient outcomes.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the Golden Hour in trauma?",
          options: [
            "Time to definitive surgery",
            "First 60 minutes after injury critical for survival",
            "Time on scene limit",
            "Hospital response time"
          ],
          correctAnswer: 1,
          explanation: "Golden Hour refers to first 60 minutes after injury when timely care can prevent death from trauma."
        },
        {
          id: 2,
          question: "What does GCS assess?",
          options: [
            "Only motor function",
            "Level of consciousness comprehensively",
            "Only eye opening",
            "Only verbal response"
          ],
          correctAnswer: 1,
          explanation: "Glasgow Coma Scale assesses eye opening, verbal response, and motor response to evaluate consciousness level."
        },
        {
          id: 3,
          question: "What is tension pneumothorax treatment?",
          options: [
            "Chest tube only in hospital",
            "Needle decompression in field",
            "Occlusive dressing only",
            "Observation and transport"
          ],
          correctAnswer: 1,
          explanation: "Tension pneumothorax requires immediate needle decompression followed by chest tube in hospital."
        },
        {
          id: 4,
          question: "What is permissive hypotension?",
          options: [
            "Keeping BP normal at all costs",
            "Maintaining SBP 80-90 mmHg in bleeding trauma",
            "Allowing any BP level",
            "Only for head injuries"
          ],
          correctAnswer: 1,
          explanation: "Permissive hypotension maintains SBP 80-90 mmHg in bleeding trauma to avoid disrupting clots with aggressive fluids."
        },
        {
          id: 5,
          question: "What are 6 Ps for extremity assessment?",
          options: [
            "Pain, Pallor, Paresthesia, Paralysis, Pulselessness, Poikilothermia",
            "Pain, Pulse, Pressure, Position, Paralysis, Pallor",
            "Pain, Pulse, Pallor, Position, Pressure, Paresthesia",
            "Pain, Position, Pulse, Pressure, Paralysis, Paresthesia"
          ],
          correctAnswer: 0,
          explanation: "6 Ps: Pain, Pallor, Paresthesia, Paralysis, Pulselessness, Poikilothermia (cold) assess neurovascular status."
        },
        {
          id: 6,
          question: "What is flail chest?",
          options: [
            "Single rib fracture",
            "Multiple rib fractures creating paradoxical movement",
            "Sternal fracture only",
            "Clavicle fracture"
          ],
          correctAnswer: 1,
          explanation: "Flail chest involves multiple rib fractures creating segment that moves paradoxically with breathing."
        },
        {
          id: 7,
          question: "What is cardiac tamponade triad?",
          options: [
            "Hypotension, tachycardia, muffled heart sounds",
            "Hypotension, distended neck veins, muffled heart sounds",
            "Hypertension, distended neck veins, clear heart sounds",
            "Hypotension, flat neck veins, loud heart sounds"
          ],
          correctAnswer: 1,
          explanation: "Beck's triad for cardiac tamponade: hypotension, distended neck veins, muffled heart sounds."
        },
        {
          id: 8,
          question: "When to apply pelvic binder?",
          options: [
            "For all pelvic pain",
            "When pelvic instability suspected",
            "Only for open fractures",
            "Never in pre-hospital setting"
          ],
          correctAnswer: 1,
          explanation: "Apply pelvic binder when pelvic instability is suspected to control hemorrhage and provide stability."
        },
        {
          id: 9,
          question: "What is primary vs secondary brain injury?",
          options: [
            "Primary: initial damage; Secondary: evolving damage",
            "Primary: surgical; Secondary: medical",
            "Primary: treatable; Secondary: permanent",
            "Primary: mild; Secondary: severe"
          ],
          correctAnswer: 0,
          explanation: "Primary brain injury is initial mechanical damage; secondary injury evolves from ischemia, edema, etc."
        },
        {
          id: 10,
          question: "What is junctional hemorrhage?",
          options: [
            "Limb bleeding only",
            "Bleeding from neck, axilla, groin areas",
            "Internal bleeding only",
            "Capillary bleeding"
          ],
          correctAnswer: 1,
          explanation: "Junctional hemorrhage occurs at anatomical junctions (neck, axilla, groin) where tourniquets can't be applied."
        },
        {
          id: 11,
          question: "What is 'Platinum 10 minutes'?",
          options: [
            "Time to hospital arrival",
            "On-scene time should be <10 minutes for critical trauma",
            "Time to surgical intervention",
            "Time for assessment completion"
          ],
          correctAnswer: 1,
          explanation: "Platinum 10 minutes emphasizes on-scene time less than 10 minutes for critical trauma patients."
        },
        {
          id: 12,
          question: "What is neurogenic shock presentation?",
          options: [
            "Cool, clammy, tachycardic",
            "Warm, dry, bradycardic",
            "Fever, tachycardia, hypotension",
            "Normal temperature, tachycardia"
          ],
          correctAnswer: 1,
          explanation: "Neurogenic shock from spinal injury presents warm, dry skin with bradycardia due to sympathetic disruption."
        },
        {
          id: 13,
          question: "How to dress open pneumothorax?",
          options: [
            "Fully occlusive dressing",
            "Occlusive dressing taped on 3 sides",
            "Loose gauze only",
            "Pressure dressing"
          ],
          correctAnswer: 1,
          explanation: "Open pneumothorax needs occlusive dressing taped on 3 sides to allow air escape (flutter valve)."
        },
        {
          id: 14,
          question: "What is compartment syndrome?",
          options: [
            "Muscle bruising",
            "Increased pressure in fascial compartment",
            "Joint dislocation",
            "Bone infection"
          ],
          correctAnswer: 1,
          explanation: "Compartment syndrome involves increased pressure within fascial compartment compromising circulation."
        },
        {
          id: 15,
          question: "What is high-energy mechanism?",
          options: [
            "Fall from standing",
            "MVC >40 mph, fall >20 feet",
            "Low-speed collision",
            "Simple fracture"
          ],
          correctAnswer: 1,
          explanation: "High-energy mechanisms include MVC >40 mph, falls >20 feet, pedestrian struck, motorcycle crashes."
        },
        {
          id: 16,
          question: "What to do with protruding organs?",
          options: [
            "Replace immediately",
            "Cover with moist sterile dressing",
            "Leave exposed",
            "Apply pressure"
          ],
          correctAnswer: 1,
          explanation: "Cover protruding organs with moist sterile dressing; do not replace them in the field."
        },
        {
          id: 17,
          question: "What is blast injury classification?",
          options: [
            "Only primary injuries",
            "Primary (blast wave), secondary (projectiles), tertiary (displacement), quaternary (other)",
            "Mild, moderate, severe",
            "External, internal only"
          ],
          correctAnswer: 1,
          explanation: "Blast injuries: Primary (blast wave), Secondary (projectiles), Tertiary (displacement), Quaternary (other)."
        },
        {
          id: 18,
          question: "What is Parkland formula for?",
          options: [
            "Burn fluid resuscitation",
            "Trauma triage",
            "Medication dosing",
            "CPR duration"
          ],
          correctAnswer: 0,
          explanation: "Parkland formula calculates fluid resuscitation for burn patients: 4ml × kg × %TBSA burned."
        },
        {
          id: 19,
          question: "What is traumatic asphyxia?",
          options: [
            "Choking injury",
            "Chest compression causing facial/upper body cyanosis",
            "Smoke inhalation",
            "Strangulation"
          ],
          correctAnswer: 1,
          explanation: "Traumatic asphyxia from severe chest compression causes facial/upper body cyanosis and petechiae."
        },
        {
          id: 20,
          question: "Why rapid trauma transport important?",
          options: [
            "For patient comfort",
            "Definitive care often requires surgical intervention",
            "To reduce paperwork",
            "Only for billing purposes"
          ],
          correctAnswer: 1,
          explanation: "Rapid transport crucial as definitive trauma care often requires surgical intervention available at trauma centers."
        }
      ]
    },

    // MODULE 3: MEDICAL EMERGENCIES ADVANCED MANAGEMENT
    {
      id: 3,
      title: "Advanced Medical Emergency Management",
      content: `
# Advanced Medical Emergency Management

This module covers advanced assessment and management of common medical emergencies encountered in pre-hospital settings, building upon basic first aid knowledge with more sophisticated interventions and understanding.

## Cardiac Emergencies

**Acute Coronary Syndrome (ACS) Spectrum:**
- **Unstable Angina:** Chest pain at rest or with minimal exertion
- **NSTEMI:** Non-ST Elevation Myocardial Infarction
- **STEMI:** ST Elevation Myocardial Infarction (complete artery blockage)

**Advanced ACS Management:**
- **Oxygen therapy** to maintain SpO2 >94%
- **Aspirin administration** (unless contraindicated)
- **Nitroglycerin** if prescribed and BP adequate
- **Morphine** for pain if available and protocols allow
- **12-lead ECG acquisition** if trained and equipped
- **Cardiac monitoring** for dysrhythmias

**Cardiac Dysrhythmias:**
- **Bradycardias:** Atropine, pacing if available
- **Tachycardias:** Synchronized cardioversion if unstable
- **VF/Pulseless VT:** Defibrillation, CPR, medications
- **Asystole/PEA:** CPR, identify reversible causes

**Advanced Cardiac Life Support (ACLS) Principles:**
- High-quality CPR with minimal interruptions
- Early defibrillation for shockable rhythms
- Advanced airway management if trained
- Medication administration (epinephrine, amiodarone, etc.)
- Identification and treatment of reversible causes (Hs and Ts)

## Respiratory Emergencies

**Asthma/COPD Exacerbation:**
- **Assessment:** Work of breathing, wheezing, accessory muscle use, SpO2
- **Management:**
  - **Bronchodilators:** Albuterol via nebulizer or MDI with spacer
  - **Steroids:** If severe or not responding
  - **Magnesium sulfate** for severe exacerbations if protocols allow
  - **Non-invasive ventilation** (CPAP/BiPAP) if available and trained
  - **Intubation** as last resort for respiratory failure

**Pulmonary Edema:**
- **Cardiogenic vs. Non-cardiogenic**
- **Management:**
  - **Positioning:** Upright, legs dangling
  - **Oxygen:** High flow, consider CPAP
  - **Nitrates:** For cardiogenic pulmonary edema
  - **Diuretics:** If cardiogenic and protocols allow
  - **Morphine:** For anxiety and preload reduction

**Pulmonary Embolism:**
- **Risk factors:** Immobility, surgery, cancer, estrogen
- **Assessment:** Sudden dyspnea, pleuritic chest pain, hypoxia
- **Management:**
  - Oxygen therapy
  - Consider anticoagulation if protocols allow
  - Supportive care
  - Rapid transport

## Neurological Emergencies

**Stroke Management:**
- **Time is brain:** Rapid recognition and transport
- **Large Vessel Occlusion (LVO) recognition:** CPSS scale (Face, Arm, Speech)
- **Management:**
  - Maintain airway and oxygenation
  - Blood glucose check and correction
  - Blood pressure management per protocol
  - Rapid transport to stroke center
  - Pre-notification of receiving facility

**Seizure Management:**
- **Status Epilepticus:** Seizure lasting >5 minutes or multiple without recovery
- **Management:**
  - **Benzodiazepines:** Midazolam, lorazepam, diazepam
  - **Second-line:** Fosphenytoin, levetiracetam if protocols allow
  - Airway management and oxygenation
  - Identify and treat underlying causes

**Altered Mental Status:**
- **Differential diagnosis:** AEIOU-TIPS
  - **A:** Alcohol, Acidosis
  - **E:** Electrolytes, Encephalopathy
  - **I:** Infection, Insulin
  - **O:** Overdose, Oxygen
  - **U:** Uremia
  - **T:** Trauma, Temperature
  - **I:** Intracranial
  - **P:** Psychiatric
  - **S:** Sepsis, Stroke
- **Management:** Treat underlying cause, supportive care

## Endocrine Emergencies

**Diabetic Emergencies:**
- **Hypoglycemia:**
  - **Mild:** Oral glucose if able to swallow safely
  - **Severe:** IV dextrose or IM glucagon
  - Recheck glucose after treatment
- **Hyperglycemia (DKA/HHS):**
  - **DKA:** Acidosis, ketones, usually type 1 diabetes
  - **HHS:** Extreme hyperglycemia without significant acidosis, usually type 2
  - **Management:** Fluid resuscitation, insulin if protocols allow, electrolyte monitoring

**Thyroid Emergencies:**
- **Thyroid Storm:** Hyperthermia, tachycardia, agitation
- **Myxedema Coma:** Hypothermia, bradycardia, altered mental status
- **Management:** Supportive care, specific medications if available

## Toxicological Emergencies

**General Management Principles:**
- **Decontamination:** As appropriate for exposure type
- **Supportive care:** Airway, breathing, circulation
- **Specific antidotes** when available and indicated
- **Enhanced elimination** techniques in some cases

**Common Overdoses:**
- **Opioids:** Naloxone administration, respiratory support
- **Benzodiazepines:** Flumazenil in specific situations only
- **Acetaminophen:** N-acetylcysteine if within time window
- **Aspirin:** Alkalinization of urine, dialysis if severe
- **Tricyclic antidepressants:** Sodium bicarbonate for wide QRS

**Alcohol and Drug Withdrawal:**
- **Alcohol withdrawal:** Benzodiazepines for symptom control
- **Opioid withdrawal:** Supportive care, consider buprenorphine if protocols allow
- **Stimulant intoxication:** Benzodiazepines for agitation

## Infectious Disease Emergencies

**Sepsis Recognition and Management:**
- **qSOFA criteria:** Altered mental status, RR ≥22, SBP ≤100
- **Management:**
  - Early antibiotics if protocols allow
  - Fluid resuscitation
  - Source control if possible
  - Vasopressors if hypotensive despite fluids

**Meningitis/Encephalitis:**
- **Assessment:** Fever, headache, neck stiffness, photophobia
- **Management:**
  - Antibiotics if bacterial meningitis suspected
  - Antivirals if herpes encephalitis suspected
  - Steroids if bacterial meningitis and protocols allow

**Respiratory Infections:**
- **COVID-19/Influenza:** Respiratory precautions, supportive care
- **Pneumonia:** Antibiotics if severe, oxygen therapy
- **Tuberculosis:** Respiratory isolation if suspected

## Special Populations

**Geriatric Considerations:**
- **Atypical presentations** of serious conditions
- **Polypharmacy** and drug interactions
- **Reduced physiological reserve**
- **Increased complication risk**

**Pediatric Considerations:**
- **Different normal vital signs** by age
- **Weight-based dosing** for medications
- **Developmental considerations** in assessment
- **Family-centered care**

**Obstetric Considerations:**
- **Physiological changes** affecting assessment
- **Two patients** (mother and fetus)
- **Common emergencies:** Preeclampsia, eclampsia, hemorrhage
- **Delivery in the field** if imminent

## Advanced Interventions

**Intravenous Access:**
- **Peripheral IV placement**
- **Intraosseous access** if IV access difficult
- **Central venous access** if trained and indicated

**Medication Administration:**
- **Routes:** IV, IO, IM, SQ, inhaled, sublingual
- **Dosage calculations** and verification
- **Monitoring for effects and side effects**

**Advanced Airway Management:**
- **Supraglottic airways** (LMA, King LT)
- **Endotracheal intubation** if trained
- **Rapid sequence intubation** if protocols allow
- **Confirmation of placement** (waveform capnography ideal)

## Documentation and Communication

**Pre-hospital Care Report:**
- Detailed history and assessment
- Interventions performed
- Patient response
- Handoff information

**Radio Communication:**
- Concise, organized reporting
- Use of standardized formats
- Pre-arrival notification for critical patients

Advanced medical emergency management requires integration of assessment findings with specific interventions to optimize patient outcomes.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is ACS spectrum?",
          options: [
            "Only heart attack",
            "Unstable angina, NSTEMI, STEMI",
            "Only stable angina",
            "Only cardiac arrest"
          ],
          correctAnswer: 1,
          explanation: "ACS includes Unstable Angina, NSTEMI (Non-ST Elevation MI), and STEMI (ST Elevation MI)."
        },
        {
          id: 2,
          question: "What is status epilepticus?",
          options: [
            "Any seizure",
            "Seizure >5 minutes or multiple without recovery",
            "Only tonic-clonic seizures",
            "Only in epilepsy patients"
          ],
          correctAnswer: 1,
          explanation: "Status epilepticus is seizure lasting >5 minutes or multiple seizures without recovery between them."
        },
        {
          id: 3,
          question: "What does qSOFA assess?",
          options: [
            "Stroke severity",
            "Sepsis likelihood",
            "Trauma severity",
            "Cardiac risk"
          ],
          correctAnswer: 1,
          explanation: "qSOFA (Altered mental status, RR≥22, SBP≤100) helps identify patients with suspected sepsis."
        },
        {
          id: 4,
          question: "What is DKA vs HHS?",
          options: [
            "Both have severe acidosis",
            "DKA has acidosis; HHS has extreme hyperglycemia without severe acidosis",
            "Both have mild hyperglycemia",
            "Only difference is age"
          ],
          correctAnswer: 1,
          explanation: "DKA has acidosis and ketones; HHS has extreme hyperglycemia without significant acidosis."
        },
        {
          id: 5,
          question: "What is first-line for status epilepticus?",
          options: [
            "Phenytoin",
            "Benzodiazepines",
            "Levetiracetam",
            "Propofol"
          ],
          correctAnswer: 1,
          explanation: "Benzodiazepines (midazolam, lorazepam, diazepam) are first-line for status epilepticus."
        },
        {
          id: 6,
          question: "What is opioid overdose antidote?",
          options: [
            "Flumazenil",
            "Naloxone",
            "N-acetylcysteine",
            "Sodium bicarbonate"
          ],
          correctAnswer: 1,
          explanation: "Naloxone is the specific antidote for opioid overdose, reversing respiratory depression."
        },
        {
          id: 7,
          question: "What is CPAP for?",
          options: [
            "Cardiac arrest only",
            "Respiratory failure from pulmonary edema/COPD",
            "Only for asthma",
            "Only in hospital"
          ],
          correctAnswer: 1,
          explanation: "CPAP provides positive airway pressure for respiratory failure from pulmonary edema or COPD exacerbation."
        },
        {
          id: 8,
          question: "What are Hs and Ts in ACLS?",
          options: [
            "Hospital transfer codes",
            "Reversible causes of cardiac arrest",
            "Heart transplant criteria",
            "Trauma triage levels"
          ],
          correctAnswer: 1,
          explanation: "Hs (Hypovolemia, Hypoxia, Hydrogen ion, Hyper/hypokalemia, Hypothermia) and Ts (Toxins, Tamponade, Tension pneumothorax, Thrombosis, Trauma) are reversible cardiac arrest causes."
        },
        {
          id: 9,
          question: "What is LVO stroke?",
          options: [
            "Small vessel stroke",
            "Large Vessel Occlusion needing thrombectomy",
            "Lacunar stroke",
            "Vertebral artery stroke"
          ],
          correctAnswer: 1,
          explanation: "LVO (Large Vessel Occlusion) strokes may benefit from thrombectomy and need rapid transport to comprehensive stroke center."
        },
        {
          id: 10,
          question: "What is AEIOU-TIPS for?",
          options: [
            "Stroke assessment",
            "Altered mental status differential",
            "Trauma triage",
            "Cardiac arrest causes"
          ],
          correctAnswer: 1,
          explanation: "AEIOU-TIPS mnemonic helps remember differential diagnoses for altered mental status."
        },
        {
          id: 11,
          question: "What is cardiogenic pulmonary edema management?",
          options: [
            "Fluids only",
            "Upright position, oxygen, nitrates, diuretics",
            "Antibiotics only",
            "Bronchodilators only"
          ],
          correctAnswer: 1,
          explanation: "Cardiogenic pulmonary edema managed with upright positioning, oxygen, nitrates, diuretics, and sometimes morphine."
        },
        {
          id: 12,
          question: "What is thyroid storm presentation?",
          options: [
            "Hypothermia, bradycardia",
            "Hyperthermia, tachycardia, agitation",
            "Hypoglycemia, confusion",
            "Hypertension only"
          ],
          correctAnswer: 1,
          explanation: "Thyroid storm presents with hyperthermia, tachycardia, agitation, and possible heart failure."
        },
        {
          id: 13,
          question: "What is myxedema coma?",
          options: [
            "Thyroid storm",
            "Severe hypothyroidism with coma",
            "Diabetic coma",
            "Hepatic encephalopathy"
          ],
          correctAnswer: 1,
          explanation: "Myxedema coma is severe hypothyroidism leading to altered mental status, hypothermia, and bradycardia."
        },
        {
          id: 14,
          question: "What is tricyclic antidepressant overdose treatment?",
          options: [
            "Naloxone",
            "Sodium bicarbonate for wide QRS",
            "Flumazenil",
            "N-acetylcysteine"
          ],
          correctAnswer: 1,
          explanation: "Tricyclic antidepressant overdose causing wide QRS is treated with sodium bicarbonate."
        },
        {
          id: 15,
          question: "What is magnesium sulfate used for?",
          options: [
            "Only for electrolyte replacement",
            "Severe asthma exacerbations",
            "Hypertension only",
            "Cardiac arrest"
          ],
          correctAnswer: 1,
          explanation: "Magnesium sulfate is used for severe asthma exacerbations not responding to initial bronchodilators."
        },
        {
          id: 16,
          question: "What is flumazenil for?",
          options: [
            "Opioid reversal",
            "Benzodiazepine reversal in specific situations",
            "Alcohol withdrawal",
            "Acetaminophen overdose"
          ],
          correctAnswer: 1,
          explanation: "Flumazenil reverses benzodiazepines but used cautiously due to seizure risk in certain patients."
        },
        {
          id: 17,
          question: "What is N-acetylcysteine for?",
          options: [
            "Opioid overdose",
            "Acetaminophen overdose",
            "Aspirin overdose",
            "Alcohol intoxication"
          ],
          correctAnswer: 1,
          explanation: "N-acetylcysteine is the antidote for acetaminophen overdose, preventing liver damage."
        },
        {
          id: 18,
          question: "What is IO access?",
          options: [
            "Intraocular medication",
            "Intraosseous access for difficult IV access",
            "Internal organ access",
            "Only for children"
          ],
          correctAnswer: 1,
          explanation: "Intraosseous (IO) access provides emergency vascular access when IV access is difficult or impossible."
        },
        {
          id: 19,
          question: "What is waveform capnography for?",
          options: [
            "Blood pressure monitoring",
            "Confirming endotracheal tube placement",
            "Cardiac monitoring",
            "Glucose monitoring"
          ],
          correctAnswer: 1,
          explanation: "Waveform capnography confirms endotracheal tube placement and monitors ventilation continuously."
        },
        {
          id: 20,
          question: "Why early antibiotics for sepsis?",
          options: [
            "Only for fever reduction",
            "Each hour delay increases mortality",
            "For pain control",
            "Only for ICU patients"
          ],
          correctAnswer: 1,
          explanation: "Early appropriate antibiotics for sepsis improve survival; each hour delay increases mortality."
        }
      ]
    },

    // MODULE 4: PEDIATRIC AND OBSTETRIC EMERGENCIES
    {
      id: 4,
      title: "Pediatric and Obstetric Emergency Care",
      content: `
# Pediatric and Obstetric Emergency Care

Children and pregnant women have unique anatomical, physiological, and psychological needs in emergency situations. This module covers specialized assessment and management for these populations.

## Pediatric Assessment

**Pediatric Assessment Triangle (PAT):**
Rapid visual assessment of:
- **Appearance:** Tone, interactiveness, consolability, look/gaze, speech/cry
- **Work of Breathing:** Abnormal sounds, positioning, retractions, nasal flaring
- **Circulation to Skin:** Pallor, mottling, cyanosis

**Age-Specific Considerations:**
- **Infants (0-12 months):** Fontanelles, obligate nose breathers, different vital signs
- **Toddlers (1-3 years):** Stranger anxiety, communication challenges
- **Preschool (3-5 years):** Magical thinking, fear of separation
- **School-age (6-12 years):** More logical, concerned about body integrity
- **Adolescents (13-18 years):** Adult physiology, privacy concerns, risk-taking behaviors

**Normal Pediatric Vital Signs:**
- **Heart Rate:**
  - Newborn: 100-180
  - Infant: 80-150
  - Toddler: 70-120
  - School-age: 60-110
  - Adolescent: 60-100
- **Respiratory Rate:**
  - Newborn: 30-60
  - Infant: 25-50
  - Toddler: 20-40
  - School-age: 15-30
  - Adolescent: 12-20
- **Blood Pressure:** Increases with age, specific percentiles

## Pediatric Respiratory Emergencies

**Upper Airway Obstruction:**
- **Croup (Laryngotracheobronchitis):**
  - Barking cough, stridor, fever
  - **Management:** Cool mist, racemic epinephrine if severe, steroids
- **Epiglottitis:**
  - Medical emergency, now rare due to vaccination
  - Tripod positioning, drooling, anxiety
  - **Management:** Do not examine throat, maintain position of comfort, rapid transport

**Lower Airway Disease:**
- **Bronchiolitis:**
  - RSV common cause, wheezing, crackles
  - **Management:** Supportive care, suctioning, oxygen
- **Asthma:**
  - **Assessment:** Pulmonary score, accessory muscle use
  - **Management:** Bronchodilators, steroids, magnesium if severe

**Foreign Body Aspiration:**
- **Partial obstruction:** Coughing, stridor, wheezing
- **Complete obstruction:** Unable to cough, speak, breathe
- **Management:** Back blows/chest thrusts for infants, abdominal thrusts for children

## Pediatric Cardiac Emergencies

**Congenital Heart Disease:**
- May present with cyanosis, poor feeding, failure to thrive
- **Ductal-dependent lesions:** Require prostaglandin E1 to keep PDA open
- **Management:** Oxygen cautiously (may close PDA in some lesions), rapid transport

**Shock in Children:**
- **Compensated vs. Decompensated:**
  - **Compensated:** Tachycardia, cool extremities, delayed capillary refill
  - **Decompensated:** Hypotension (late sign), altered mental status
- **Management:** Fluid boluses (20ml/kg), identify and treat cause

## Pediatric Neurological Emergencies

**Febrile Seizures:**
- **Simple:** Generalized, <15 minutes, once in 24 hours
- **Complex:** Focal, >15 minutes, recurrent in 24 hours
- **Management:** Antipyretics, benzodiazepines if prolonged, identify infection source

**Meningitis:**
- **Assessment:** Fever, headache, neck stiffness, photophobia, bulging fontanelle in infants
- **Management:** Antibiotics if suspected, steroids if bacterial, supportive care

**Non-accidental Trauma (Child Abuse):**
- **Red flags:** Inconsistent history, delayed care, patterned injuries, multiple fractures in different stages
- **Mandatory reporting** in most jurisdictions
- **Documentation:** Detailed description, diagrams, photographs if possible

## Pediatric Medication Administration

**Weight-Based Dosing:**
- All medications dosed by weight (mg/kg)
- **Broselow tape** or length-based systems for emergency dosing
- **Double-check** all calculations
- **Age-appropriate formulations** and routes

**Common Pediatric Emergencies:**
- **Dehydration:** Assessment of skin turgor, mucous membranes, fontanelle
- **Hypoglycemia:** Common in young children, rapid glucose check and treatment
- **Poisoning:** Different patterns than adults, weight-based antidotes

## Obstetric Anatomy and Physiology

**Pregnancy Changes:**
- **Cardiovascular:** Increased blood volume, cardiac output, heart rate
- **Respiratory:** Increased minute ventilation, decreased FRC
- **Gastrointestinal:** Slowed gastric emptying, increased aspiration risk
- **Hematologic:** Hypercoagulable state

**Assessment Considerations:**
- **Positioning:** Left lateral tilt after 20 weeks to prevent supine hypotension
- **Vital signs:** Different norms (increased HR, decreased BP in 2nd trimester)
- **Two patients:** Always consider mother and fetus

## Obstetric Emergencies

**Hypertensive Disorders:**
- **Preeclampsia:** BP ≥140/90 after 20 weeks with proteinuria or end-organ dysfunction
- **Eclampsia:** Preeclampsia with seizures
- **HELLP syndrome:** Hemolysis, Elevated Liver enzymes, Low Platelets
- **Management:** Magnesium sulfate for seizure prophylaxis, blood pressure control, delivery

**Obstetric Hemorrhage:**
- **Antepartum:** Placenta previa, placental abruption
- **Postpartum:** Uterine atony, retained placenta, lacerations
- **Management:** Uterine massage, medications (oxytocin, methylergonovine), rapid transport

**Preterm Labor:**
- Contractions with cervical change before 37 weeks
- **Management:** Tocolytics if no contraindications, steroids for fetal lung maturity, transport to facility with NICU

**Emergent Delivery:**
- **Indications:** Crowning, imminent delivery, prolonged transport
- **Preparation:** Delivery kit, warmth for newborn, suction equipment
- **Procedure:** Support perineum, deliver head with controlled extension, check for cord, deliver shoulders, clamp cord
- **Newborn care:** Dry, stimulate, position, warm, assess breathing

## Neonatal Resuscitation

**Initial Steps:**
- **Warmth:** Dry thoroughly, place on warm surface
- **Airway:** Position, suction mouth then nose if needed
- **Breathing:** Stimulate, PPV if apneic or HR <100
- **Circulation:** Chest compressions if HR <60 after 30 seconds of effective PPV

**Medications:**
- **Epinephrine:** For HR <60 despite CPR
- **Volume expansion:** For suspected hypovolemia
- **Sodium bicarbonate:** Only in specific circumstances

**Special Considerations:**
- **Meconium:** Suction only if non-vigorous
- **Prematurity:** Different approach, need for warmth and surfactant
- **Congenital anomalies:** May require special interventions

## Communication and Family Care

**Pediatric Communication:**
- **Age-appropriate explanations**
- **Involve parents** in care when possible
- **Honesty** about what will happen
- **Comfort measures**

**Obstetric Communication:**
- **Explain procedures** to mother
- **Include support person** if present
- **Provide updates** on both mother and baby
- **Respect privacy and dignity**

**Cultural Considerations:**
- **Respect cultural practices** when safe
- **Language barriers:** Use interpreter services
- **Religious beliefs:** Accommodate when possible

## Documentation

**Pediatric Documentation:**
- Weight and age
- Growth chart percentiles if available
- Immunization status
- Developmental milestones
- Family social situation

**Obstetric Documentation:**
- Gestational age
- Prenatal care
- Complications of pregnancy
- Labor status if applicable
- Fetal heart rate if able to assess

Specialized care for pediatric and obstetric patients requires understanding their unique needs and adapting assessment and management accordingly.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is Pediatric Assessment Triangle?",
          options: [
            "ABC assessment",
            "Appearance, Work of Breathing, Circulation to Skin",
            "Only vital signs",
            "Neurological exam"
          ],
          correctAnswer: 1,
          explanation: "PAT assesses Appearance, Work of Breathing, and Circulation to Skin for rapid pediatric assessment."
        },
        {
          id: 2,
          question: "What is croup management?",
          options: [
            "Antibiotics always",
            "Cool mist, racemic epinephrine if severe, steroids",
            "Only observation",
            "Immediate intubation"
          ],
          correctAnswer: 1,
          explanation: "Croup managed with cool mist, racemic epinephrine for severe cases, and steroids to reduce inflammation."
        },
        {
          id: 3,
          question: "What is epiglottitis precaution?",
          options: [
            "Examine throat thoroughly",
            "Do not examine throat, maintain position of comfort",
            "Have child lie flat",
            "Give oral medications"
          ],
          correctAnswer: 1,
          explanation: "Do not examine throat in suspected epiglottitis as it may cause complete obstruction; maintain position of comfort."
        },
        {
          id: 4,
          question: "What is pediatric shock early sign?",
          options: [
            "Hypotension",
            "Tachycardia with delayed capillary refill",
            "Bradycardia",
            "Hypertension"
          ],
          correctAnswer: 1,
          explanation: "Early pediatric shock shows tachycardia and delayed capillary refill; hypotension is late sign."
        },
        {
          id: 5,
          question: "What is Broselow tape for?",
          options: [
            "Measuring height only",
            "Emergency medication dosing by length",
            "Blood pressure measurement",
            "Temperature conversion"
          ],
          correctAnswer: 1,
          explanation: "Broselow tape uses length to estimate weight and provide emergency medication doses for children."
        },
        {
          id: 6,
          question: "What is preeclampsia?",
          options: [
            "Normal pregnancy symptom",
            "BP ≥140/90 after 20 weeks with proteinuria/end-organ dysfunction",
            "Only high blood pressure",
            "Only postpartum condition"
          ],
          correctAnswer: 1,
          explanation: "Preeclampsia is BP ≥140/90 after 20 weeks with proteinuria or end-organ dysfunction (headache, visual changes, etc.)."
        },
        {
          id: 7,
          question: "What is magnesium sulfate for in obstetrics?",
          options: [
            "Blood pressure reduction only",
            "Seizure prophylaxis in preeclampsia/eclampsia",
            "Labor induction",
            "Pain control"
          ],
          correctAnswer: 1,
          explanation: "Magnesium sulfate prevents and treats seizures in preeclampsia/eclampsia."
        },
        {
          id: 8,
          question: "When to start PPV in newborn?",
          options: [
            "Always at birth",
            "If apneic or HR <100 after initial steps",
            "Only if cyanotic",
            "After 5 minutes of life"
          ],
          correctAnswer: 1,
          explanation: "Start PPV in newborn if apneic, gasping, or HR <100 after initial steps of drying and stimulation."
        },
        {
          id: 9,
          question: "What is HELLP syndrome?",
          options: [
            "Normal pregnancy variant",
            "Hemolysis, Elevated Liver enzymes, Low Platelets",
            "Heart failure in pregnancy",
            "Hormone imbalance"
          ],
          correctAnswer: 1,
          explanation: "HELLP syndrome: Hemolysis, Elevated Liver enzymes, Low Platelets - severe variant of preeclampsia."
        },
        {
          id: 10,
          question: "What is pediatric fluid bolus dose?",
          options: [
            "10ml/kg",
            "20ml/kg",
            "30ml/kg",
            "Based on age only"
          ],
          correctAnswer: 1,
          explanation: "Pediatric fluid bolus is 20ml/kg of isotonic crystalloid for shock or dehydration."
        },
        {
          id: 11,
          question: "What is simple febrile seizure?",
          options: [
            "Any seizure with fever",
            "Generalized, <15 minutes, once in 24 hours",
            "Focal seizure with fever",
            "Status epilepticus"
          ],
          correctAnswer: 1,
          explanation: "Simple febrile seizure: generalized, <15 minutes, once in 24 hours in child 6 months-5 years with fever."
        },
        {
          id: 12,
          question: "Why left lateral tilt in pregnancy?",
          options: [
            "For comfort only",
            "Prevent supine hypotension syndrome",
            "Better fetal monitoring",
            "Only during delivery"
          ],
          correctAnswer: 1,
          explanation: "Left lateral tilt after 20 weeks prevents supine hypotension from uterine compression of inferior vena cava."
        },
        {
          id: 13,
          question: "What is ductal-dependent lesion?",
          options: [
            "Normal heart development",
            "Congenital heart disease requiring PDA for systemic/pulmonary blood flow",
            "Heart murmur only",
            "Adult heart condition"
          ],
          correctAnswer: 1,
          explanation: "Ductal-dependent lesions require patent ductus arteriosus for adequate systemic or pulmonary blood flow."
        },
        {
          id: 14,
          question: "What is postpartum hemorrhage management?",
          options: [
            "Wait and see",
            "Uterine massage, oxytocics, transport",
            "Only fluid replacement",
            "Surgery only"
          ],
          correctAnswer: 1,
          explanation: "Postpartum hemorrhage managed with uterine massage, oxytocic medications, and rapid transport if ongoing."
        },
        {
          id: 15,
          question: "What is bronchiolitis?",
          options: [
            "Adult COPD",
            "Viral lower respiratory infection in infants",
            "Bacterial pneumonia",
            "Asthma variant"
          ],
          correctAnswer: 1,
          explanation: "Bronchiolitis is viral lower respiratory infection in infants, often RSV, causing wheezing and respiratory distress."
        },
        {
          id: 16,
          question: "What is eclampsia?",
          options: [
            "Preeclampsia only",
            "Preeclampsia with seizures",
            "Postpartum hypertension",
            "Gestational diabetes"
          ],
          correctAnswer: 1,
          explanation: "Eclampsia is preeclampsia progressing to seizures, requiring immediate magnesium sulfate and delivery."
        },
        {
          id: 17,
          question: "When newborn chest compressions?",
          options: [
            "HR <100",
            "HR <60 after 30 seconds effective PPV",
            "Any HR below 100",
            "Only if apneic"
          ],
          correctAnswer: 1,
          explanation: "Newborn chest compressions if HR <60 after 30 seconds of effective positive pressure ventilation."
        },
        {
          id: 18,
          question: "What is non-accidental trauma red flag?",
          options: [
            "Any childhood injury",
            "Inconsistent history, patterned injuries, multiple fractures different stages",
            "Only broken bones",
            "Only bruises"
          ],
          correctAnswer: 1,
          explanation: "Red flags for child abuse: inconsistent history, patterned injuries, multiple fractures in different healing stages."
        },
        {
          id: 19,
          question: "What is meconium management?",
          options: [
            "Suction all infants",
            "Suction only if non-vigorous infant",
            "No suction needed",
            "Only if thick meconium"
          ],
          correctAnswer: 1,
          explanation: "For meconium-stained amniotic fluid, suction only if newborn is non-vigorous (depressed respirations, poor tone, HR<100)."
        },
        {
          id: 20,
          question: "Why pediatric/obstetric care specialized?",
          options: [
            "Same as adults",
            "Unique anatomy, physiology, psychological needs",
            "Only different medication doses",
            "Only for hospital care"
          ],
          correctAnswer: 1,
          explanation: "Pediatric and obstetric patients have unique anatomical, physiological, developmental, and psychological needs requiring specialized approaches."
        }
      ]
    },

    // MODULE 5: DISASTER AND MASS CASUALTY MANAGEMENT
    {
      id: 5,
      title: "Disaster Response and Mass Casualty Incidents",
      content: `
# Disaster Response and Mass Casualty Incidents

Disasters and mass casualty incidents (MCIs) present unique challenges requiring different approaches from routine emergency care. This module covers principles of disaster medicine, incident management systems, and MCI operations.

## Disaster Medicine Principles

**Disaster vs. Emergency:**
- **Emergency:** Resources exceed needs
- **Disaster:** Needs exceed resources
- **Mass Casualty Incident (MCI):** Number of casualties exceeds available resources

**Disaster Types:**
- **Natural:** Earthquakes, hurricanes, floods, wildfires
- **Technological:** Industrial accidents, transportation disasters
- **Intentional:** Terrorism, active shooters, bombings
- **Pandemic:** Widespread infectious disease outbreaks

**Disaster Phases:**
1. **Preparedness:** Planning, training, resource acquisition
2. **Response:** Immediate actions during disaster
3. **Recovery:** Restoration of services and community
4. **Mitigation:** Actions to reduce future disaster impact

## Incident Management Systems

**National Incident Management System (NIMS):**
Standardized approach to incident management applicable to all incidents.

**Incident Command System (ICS):**
Management system designed for effective incident management:
- **Common terminology**
- **Modular organization**
- **Management by objectives**
- **Incident action planning**
- **Manageable span of control**
- **Comprehensive resource management**

**ICS Structure:**
- **Incident Commander:** Overall responsibility
- **Command Staff:**
  - **Public Information Officer:** Media relations
  - **Safety Officer:** Scene safety
  - **Liaison Officer:** Interagency coordination
- **General Staff:**
  - **Operations Section:** Tactical operations
  - **Planning Section:** Information gathering and planning
  - **Logistics Section:** Resource support
  - **Finance/Administration Section:** Financial matters

## MCI Operations

**MCI Response Goals:**
- **Greatest good for greatest number**
- **Rapid sorting** (triage) of patients
- **Appropriate resource allocation**
- **Efficient patient movement**

**MCI Triage Systems:**

**START (Simple Triage and Rapid Treatment):**
- **Step 1:** Walking wounded → Green
- **Step 2:** Breathing assessment → Black if apneic after positioning
- **Step 3:** Respiratory rate >30 → Red
- **Step 4:** Perfusion (capillary refill >2 sec or no radial pulse) → Red
- **Step 5:** Mental status (unable to follow commands) → Red
- **Remaining:** Yellow

**JumpSTART (Pediatric MCI Triage):**
- Modified for children <8 years or appearing child-sized
- Different respiratory rate criteria (15-45/min normal)
- Attempt 5 rescue breaths if apneic
- Different mental status assessment

**Triage Categories:**
- **Immediate (Red):** Life-threatening but treatable
- **Delayed (Yellow):** Serious but not immediately life-threatening
- **Minor (Green):** Walking wounded
- **Expectant (Black):** Deceased or unsalvageable given resources

## Specialized Triage Considerations

**Chemical, Biological, Radiological, Nuclear (CBRN) Incidents:**
- **Personal protective equipment (PPE)** requirements
- **Decontamination** procedures
- **Specific triage modifications**
- **Agent-specific treatments**

**Active Shooter/Hostile Event Response:**
- **Run-Hide-Fight** for civilians
- **Rescue Task Force (RTF)** concept
- **Warm zone care** with law enforcement escort
- **Rapid extraction** to casualty collection points

**Crush Syndrome and Prolonged Extrication:**
- **Compartment syndrome** risk
- **Hyperkalemia** from muscle breakdown
- **Renal failure** from myoglobin
- **Fluid resuscitation** before extrication in some cases

## Resource Management

**Resource Typing:**
- Standardized categorization of resources
- **Type 1:** Most capable (national level)
- **Type 2:** Advanced (regional level)
- **Type 3:** General (local level)
- **Type 4:** Basic (initial response)

**Staging Areas:**
- **Location** for resources awaiting assignment
- **Organization** by resource type
- **Check-in/check-out** procedures

**Supply Management:**
- **Just-in-time** vs. **stockpiling**
- **Tracking systems** for supplies and equipment
- **Resource sharing** agreements

## Patient Movement and Transport

**Casualty Collection Points (CCPs):**
- **Location:** Safe area near incident
- **Functions:** Triage, treatment, loading for transport
- **Staffing:** Based on patient volume and severity
- **Supplies:** Based on anticipated needs

**Transportation Resources:**
- **Ground ambulances**
- **Air ambulances** (helicopter, fixed-wing)
- **Buses** for walking wounded
- **Private vehicles** as last resort

**Transport Decisions:**
- **Load and go** vs. **stay and play**
- **Destination decisions:** Trauma center vs. appropriate facility
- **Distribution** of patients among hospitals

## Communications

**Communication Challenges in Disasters:**
- **System overload**
- **Infrastructure damage**
- **Interoperability** issues
- **Security concerns**

**Communication Solutions:**
- **Redundancy** in systems
- **Plain language** (no codes)
- **Regular updates**
- **Designated frequencies**

**Communication Tools:**
- **Land mobile radios**
- **Satellite phones**
- **Cell phones** (text messaging often works when calls don't)
- **Amateur radio** operators

## Safety and Security

**Scene Safety in Disasters:**
- **Dynamic risk assessment**
- **Personal protective equipment**
- **Buddy system**
- **Rapid intervention teams**

**Security Concerns:**
- **Crowd control**
- **Looters**
- **Secondary devices** in intentional incidents
- **Media management**

**Responder Safety:**
- **Work/rest cycles**
- **Hydration and nutrition**
- **Stress management**
- **Family preparedness**

## Psychological Considerations

**Psychological Impact:**
- **Acute stress reactions**
- **Post-traumatic stress disorder (PTSD)**
- **Compassion fatigue**
- **Burnout**

**Psychological First Aid:**
- **Listen** without judgment
- **Protect** from further harm
- **Connect** with support systems
- **Model** calm behavior
- **Educate** about normal reactions

**Critical Incident Stress Management (CISM):**
- **Pre-incident education**
- **On-scene support**
- **Defusing** (within 12 hours)
- **Debriefing** (within 72 hours)
- **Follow-up**

## Recovery and After-Action

**Demobilization:**
- **Orderly release** of resources
- **Equipment recovery** and cleaning
- **Documentation** completion
- **Staff debriefing**

**After-Action Review (AAR):**
- **What happened?**
- **What was supposed to happen?**
- **What went well?**
- **What needs improvement?**
- **Action plan** for improvements

**Continuous Quality Improvement:**
- **Performance measures**
- **Training needs** identification
- **Protocol updates**
- **Resource adjustments**

Disaster and MCI response requires coordination, flexibility, and a different mindset focused on doing the greatest good for the greatest number.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What defines a disaster?",
          options: [
            "Any emergency",
            "Needs exceed resources",
            "Multiple patients only",
            "Only natural events"
          ],
          correctAnswer: 1,
          explanation: "Disaster: needs exceed available resources, requiring different approach from routine emergencies."
        },
        {
          id: 2,
          question: "What is ICS?",
          options: [
            "Hospital system",
            "Incident Command System for incident management",
            "Insurance system",
            "International classification"
          ],
          correctAnswer: 1,
          explanation: "Incident Command System provides standardized approach to incident management across agencies."
        },
        {
          id: 3,
          question: "What is START triage first step?",
          options: [
            "Check breathing",
            "Identify walking wounded",
            "Check capillary refill",
            "Assess mental status"
          ],
          correctAnswer: 1,
          explanation: "START begins with identifying walking wounded who get Green tag and directed to treatment area."
        },
        {
          id: 4,
          question: "What is MCI response goal?",
          options: [
            "Perfect care for all",
            "Greatest good for greatest number",
            "Treat worst first always",
            "Only treat salvageable patients"
          ],
          correctAnswer: 1,
          explanation: "MCI goal: greatest good for greatest number, prioritizing resources to save most lives possible."
        },
        {
          id: 5,
          question: "What are triage colors?",
          options: [
            "Only red and green",
            "Red, Yellow, Green, Black",
            "Based on injury type",
            "Random assignment"
          ],
          correctAnswer: 1,
          explanation: "Triage colors: Red (Immediate), Yellow (Delayed), Green (Minor), Black (Expectant/Deceased)."
        },
        {
          id: 6,
          question: "What is JumpSTART?",
          options: [
            "Adult trauma system",
            "Pediatric MCI triage system",
            "Hospital triage",
            "Only for burns"
          ],
          correctAnswer: 1,
          explanation: "JumpSTART is pediatric MCI triage system modifying START for children <8 years or child-sized."
        },
        {
          id: 7,
          question: "What is CCP?",
          options: [
            "Command center only",
            "Casualty Collection Point for triage/treatment",
            "Chemical containment point",
            "Communication checkpoint"
          ],
          correctAnswer: 1,
          explanation: "CCP (Casualty Collection Point) is safe area near incident for triage, treatment, and transport loading."
        },
        {
          id: 8,
          question: "What is RTF concept?",
          options: [
            "Routine transport only",
            "Rescue Task Force for active shooter with law enforcement escort",
            "Radio transmission frequency",
            "Resource tracking form"
          ],
          correctAnswer: 1,
          explanation: "Rescue Task Force pairs medical providers with law enforcement for warm zone care in active shooter events."
        },
        {
          id: 9,
          question: "What is crush syndrome?",
          options: [
            "Simple fracture",
            "Systemic effects from prolonged compression causing hyperkalemia, renal failure",
            "Only muscle bruising",
            "Psychological condition"
          ],
          correctAnswer: 1,
          explanation: "Crush syndrome: systemic effects from muscle breakdown causing hyperkalemia, renal failure, shock."
        },
        {
          id: 10,
          question: "What is CBRN incident?",
          options: [
            "Only chemical spill",
            "Chemical, Biological, Radiological, Nuclear incidents",
            "Only biological event",
            "Conventional disaster"
          ],
          correctAnswer: 1,
          explanation: "CBRN: Chemical, Biological, Radiological, Nuclear incidents requiring specialized PPE and procedures."
        },
        {
          id: 11,
          question: "What is psychological first aid?",
          options: [
            "Psychiatric medication",
            "Listen, Protect, Connect, Model calm, Educate",
            "Only for professionals",
            "Counseling session"
          ],
          correctAnswer: 1,
          explanation: "Psychological first aid: Listen, Protect, Connect, Model calm behavior, Educate about normal reactions."
        },
        {
          id: 12,
          question: "What is CISM?",
          options: [
            "Only debriefing",
            "Critical Incident Stress Management system",
            "Chemical incident management",
            "Communication system"
          ],
          correctAnswer: 1,
          explanation: "CISM provides support for responders experiencing stress from critical incidents."
        },
        {
          id: 13,
          question: "What is AAR?",
          options: [
            "After-Action Review for improvement",
            "Always Avoid Responsibility",
            "Automatic ambulance response",
            "Assessment and referral"
          ],
          correctAnswer: 0,
          explanation: "After-Action Review analyzes response to identify strengths and areas for improvement."
        },
        {
          id: 14,
          question: "What is demobilization?",
          options: [
            "Only leaving scene",
            "Orderly release of resources after incident",
            "Patient discharge",
            "Equipment destruction"
          ],
          correctAnswer: 1,
          explanation: "Demobilization is orderly release of resources with documentation and equipment recovery."
        },
        {
          id: 15,
          question: "What is NIMS?",
          options: [
            "National Incident Management System",
            "Nursing information system",
            "New injury management",
            "Network information"
          ],
          correctAnswer: 0,
          explanation: "NIMS provides standardized approach to incident management for all hazards nationwide."
        },
        {
          id: 16,
          question: "What are disaster phases?",
          options: [
            "Only response",
            "Preparedness, Response, Recovery, Mitigation",
            "Initial, middle, final",
            "Planning, action, completion"
          ],
          correctAnswer: 1,
          explanation: "Disaster phases: Preparedness (before), Response (during), Recovery (after), Mitigation (reduce future risk)."
        },
        {
          id: 17,
          question: "What is staging area?",
          options: [
            "Treatment area",
            "Location for resources awaiting assignment",
            "Patient waiting area",
            "Media area"
          ],
          correctAnswer: 1,
          explanation: "Staging area is where resources check in and await assignment during incident management."
        },
        {
          id: 18,
          question: "What is expectant category?",
          options: [
            "Minor injuries",
            "Deceased or unsalvageable given resources",
            "Immediate treatment needed",
            "Delayed treatment"
          ],
          correctAnswer: 1,
          explanation: "Expectant (Black): deceased or injuries so severe survival unlikely given available resources."
        },
        {
          id: 19,
          question: "What is ICS span of control?",
          options: [
            "Unlimited subordinates",
            "3-7 subordinates per supervisor",
            "Only 2 subordinates",
            "Based on incident size"
          ],
          correctAnswer: 1,
          explanation: "ICS span of control: 3-7 subordinates per supervisor for effective management (optimal 5)."
        },
        {
          id: 20,
          question: "Why disaster response different?",
          options: [
            "Same as daily emergencies",
            "Resource limitations require different priorities",
            "Only more paperwork",
            "Only larger scale"
          ],
          correctAnswer: 1,
          explanation: "Disaster response differs due to resource limitations requiring triage and doing greatest good for greatest number."
        }
      ]
    },

    // MODULE 6: ADVANCED PROCEDURES AND QUALITY IMPROVEMENT
    {
      id: 6,
      title: "Advanced Procedures and Quality Assurance",
      content: `
# Advanced Procedures and Quality Assurance

This module covers advanced emergency procedures and quality improvement processes essential for providing high-quality pre-hospital care and maintaining professional standards.

## Advanced Airway Management

**Airway Assessment:**
- **LEMON law** for difficult intubation prediction:
  - **L:** Look externally (short neck, large tongue, etc.)
  - **E:** Evaluate 3-3-2 rule (mouth opening, mandible length, thyroid-to-mouth distance)
  - **M:** Mallampati classification (pharyngeal view)
  - **O:** Obstruction (stridor, trauma, swelling)
  - **N:** Neck mobility

**Basic Airway Adjuncts:**
- **Oropharyngeal airway (OPA):** For unconscious patients without gag reflex
- **Nasopharyngeal airway (NPA):** For conscious or semi-conscious patients
- **Bag-valve-mask (BVM) ventilation:** Two-person technique optimal

**Advanced Airway Devices:**
- **Supraglottic airways:** Laryngeal mask airway (LMA), King LT, i-gel
- **Endotracheal intubation:** Direct laryngoscopy, video laryngoscopy
- **Surgical airways:** Needle cricothyrotomy, surgical cricothyrotomy

**Rapid Sequence Intubation (RSI):**
- **Indications:** Need for definitive airway in combative or at-risk patients
- **Medications:** Sedative (etomidate, ketamine) + paralytic (succinylcholine, rocuronium)
- **Contraindications:** Known difficult airway, inadequate training/experience

**Confirmation of Airway Placement:**
- **Direct visualization** of tube passing through cords
- **Capnography:** Gold standard for continuous confirmation
- **Esophageal detector device**
- **Auscultation** of chest and epigastrium
- **Chest rise** and fogging in tube

## Vascular Access

**Peripheral Intravenous Access:**
- **Site selection:** Antecubital, hand, forearm
- **Catheter sizes:** 14-24 gauge (larger for resuscitation)
- **Technique:** Clean technique, proper stabilization
- **Complications:** Infiltration, phlebitis, infection

**Intraosseous Access:**
- **Indications:** Emergency access when IV unavailable
- **Sites:** Proximal tibia, distal tibia, humeral head, sternum
- **Devices:** Manual needles, powered drivers
- **Complications:** Compartment syndrome, infection, extravasation

**Central Venous Access:**
- **Indications:** Need for multiple medications, monitoring, difficult access
- **Sites:** Internal jugular, subclavian, femoral
- **Complications:** Pneumothorax, hemorrhage, infection

## Medication Administration

**Routes of Administration:**
- **Intravenous (IV):** Most rapid onset, precise dosing
- **Intraosseous (IO):** Similar pharmacokinetics to IV
- **Intramuscular (IM):** Slower absorption, depot effect
- **Subcutaneous (SQ):** Slow, sustained absorption
- **Inhaled:** Rapid pulmonary absorption
- **Sublingual:** Rapid mucosal absorption
- **Rectal:** Alternative when other routes unavailable

**Common Emergency Medications:**

**Cardiac Medications:**
- **Epinephrine:** Alpha and beta agonist for cardiac arrest, anaphylaxis
- **Amiodarone:** Antiarrhythmic for shockable rhythms
- **Atropine:** For symptomatic bradycardia
- **Adenosine:** For supraventricular tachycardia

**Respiratory Medications:**
- **Albuterol:** Beta-agonist bronchodilator
- **Ipratropium:** Anticholinergic bronchodilator
- **Magnesium sulfate:** For severe asthma exacerbations
- **Racemic epinephrine:** For croup

**Analgesics and Sedatives:**
- **Fentanyl:** Synthetic opioid for pain
- **Morphine:** Opioid for pain and pulmonary edema
- **Ketamine:** Dissociative anesthetic for pain and sedation
- **Midazolam:** Benzodiazepine for seizures and sedation

**Other Critical Medications:**
- **Naloxone:** Opioid reversal
- **Dextrose:** For hypoglycemia
- **Glucagon:** For hypoglycemia when IV access unavailable
- **Sodium bicarbonate:** For specific poisonings and acidoses

## Advanced Monitoring

**Cardiac Monitoring:**
- **Lead placement:** 3-lead, 5-lead, 12-lead
- **Rhythm interpretation:** Systematic approach
- **ST segment monitoring** for ischemia

**Hemodynamic Monitoring:**
- **Blood pressure:** Manual vs. automated
- **Pulse oximetry:** Oxygen saturation monitoring
- **Capnography:** End-tidal CO2 monitoring
- **Point-of-care testing:** Glucose, lactate, etc.

**Neurological Monitoring:**
- **Glasgow Coma Scale** serial assessments
- **Pupil examination**
- **Neurological checks** for stroke and trauma

## Specialized Procedures

**Needle Decompression:**
- **Indication:** Tension pneumothorax
- **Site:** 2nd intercostal space, midclavicular line or 5th intercostal space, anterior axillary line
- **Needle:** Large bore (14 gauge or larger)
- **Complications:** Lung laceration, hemorrhage

**Chest Tube Insertion:**
- **Indications:** Pneumothorax, hemothorax
- **Site:** 4th or 5th intercostal space, anterior to midaxillary line
- **Procedure:** Sterile technique, tube advancement, connection to drainage
- **Complications:** Infection, organ injury, tube malfunction

**Pericardiocentesis:**
- **Indication:** Cardiac tamponade
- **Approaches:** Subxiphoid, parasternal
- **Ultrasound guidance** if available
- **Complications:** Myocardial laceration, coronary artery injury

**Surgical Airway:**
- **Indications:** Failed intubation, upper airway obstruction
- **Procedures:** Needle cricothyrotomy, surgical cricothyrotomy
- **Anatomy:** Cricothyroid membrane identification
- **Complications:** Hemorrhage, tube dislodgement, stenosis

## Quality Assurance and Improvement

**Quality Assurance (QA):**
- **Process:** Ensuring care meets established standards
- **Methods:** Chart reviews, protocol compliance checks
- **Outcomes:** Identifying deviations from standards

**Quality Improvement (QI):**
- **Process:** Systematic approach to improving care
- **Methods:** Plan-Do-Study-Act (PDSA) cycles, root cause analysis
- **Outcomes:** Measurable improvements in care

**Clinical Performance Indicators:**
- **Response times**
- **Scene times**
- **Clinical interventions**
- **Patient outcomes**

**Case Review Process:**
- **Individual case reviews**
- **Trend analysis**
- **Peer review committees**
- **Morbidity and mortality conferences**

**Protocol Development:**
- **Evidence-based** practice guidelines
- **Local adaptation** of national standards
- **Regular review** and updating
- **Stakeholder input**

## Documentation Standards

**Patient Care Report (PCR) Requirements:**
- **Patient information:** Demographics, history
- **Assessment findings:** Vital signs, physical exam
- **Interventions:** Medications, procedures, responses
- **Narrative:** Chronological account of care
- **Transfer of care:** Handoff information

**Legal and Ethical Documentation:**
- **Accuracy** and completeness
- **Objectivity** and fact-based reporting
- **Confidentiality** protections
- **Retention** requirements

**Electronic Documentation:**
- **Benefits:** Legibility, data analysis, integration
- **Challenges:** Training, system reliability, cybersecurity
- **Best practices:** Standardized templates, data validation

## Continuing Education and Competency

**Skill Maintenance:**
- **Regular practice** of infrequently used skills
- **Simulation training** for high-risk scenarios
- **Skills verification** through testing

**Knowledge Updates:**
- **Journal reviews** of current literature
- **Conference attendance**
- **Online learning** modules

**Competency Assessment:**
- **Skills checkoffs**
- **Written examinations**
- **Scenario testing**
- **Peer review**

## Research and Evidence-Based Practice

**Research Participation:**
- **Clinical trials** enrollment
- **Data collection** for studies
- **Protocol development** involvement

**Evidence-Based Practice:**
- **Critical appraisal** of literature
- **Integration** of research into practice
- **Evaluation** of outcomes

**Quality Research:**
- **Study design** considerations
- **Ethical requirements** (IRB approval)
- **Data analysis** and interpretation

Advanced procedures require technical skill, while quality assurance ensures these skills are applied appropriately to optimize patient outcomes.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is LEMON law for?",
          options: [
            "Legal requirements",
            "Predicting difficult intubation",
            "Medication dosing",
            "Trauma assessment"
          ],
          correctAnswer: 1,
          explanation: "LEMON law helps predict difficult intubation: Look, Evaluate 3-3-2, Mallampati, Obstruction, Neck mobility."
        },
        {
          id: 2,
          question: "What is RSI?",
          options: [
            "Routine sedation only",
            "Rapid Sequence Intubation with sedative and paralytic",
            "Respiratory support intervention",
            "Radial site insertion"
          ],
          correctAnswer: 1,
          explanation: "RSI uses sedative and paralytic medications to facilitate endotracheal intubation in emergency situations."
        },
        {
          id: 3,
          question: "What is gold standard for tube confirmation?",
          options: [
            "Only auscultation",
            "Waveform capnography",
            "Chest rise only",
            "Pulse oximetry"
          ],
          correctAnswer: 1,
          explanation: "Waveform capnography is gold standard for confirming and continuously monitoring endotracheal tube placement."
        },
        {
          id: 4,
          question: "What is IO access?",
          options: [
            "Intraocular",
            "Intraosseous for emergency vascular access",
            "Internal organ",
            "Only for children"
          ],
          correctAnswer: 1,
          explanation: "Intraosseous access provides emergency vascular access through bone marrow when IV access difficult."
        },
        {
          id: 5,
          question: "What is needle decompression for?",
          options: [
            "Any chest pain",
            "Tension pneumothorax",
            "Cardiac tamponade",
            "Pulmonary edema"
          ],
          correctAnswer: 1,
          explanation: "Needle decompression relieves tension pneumothorax by releasing trapped air in pleural space."
        },
        {
          id: 6,
          question: "What is pericardiocentesis for?",
          options: [
            "Pneumothorax",
            "Cardiac tamponade",
            "Pleural effusion",
            "Ascites"
          ],
          correctAnswer: 1,
          explanation: "Pericardiocentesis drains fluid from pericardial sac in cardiac tamponade to relieve pressure on heart."
        },
        {
          id: 7,
          question: "What is QA vs QI?",
          options: [
            "Same thing",
            "QA ensures standards met; QI improves processes",
            "QA for hospitals only; QI for field",
            "No difference"
          ],
          correctAnswer: 1,
          explanation: "Quality Assurance ensures care meets standards; Quality Improvement systematically improves processes."
        },
        {
          id: 8,
          question: "What is PDSA cycle?",
          options: [
            "Patient discharge system",
            "Plan-Do-Study-Act for quality improvement",
            "Protocol development system",
            "Physician decision support"
          ],
          correctAnswer: 1,
          explanation: "PDSA (Plan-Do-Study-Act) cycle is iterative quality improvement methodology."
        },
        {
          id: 9,
          question: "What are common IO sites?",
          options: [
            "Only forearm",
            "Proximal tibia, distal tibia, humeral head, sternum",
            "Only sternum",
            "Only humerus"
          ],
          correctAnswer: 1,
          explanation: "Common IO sites: proximal tibia (most common), distal tibia, humeral head, sternum (adults)."
        },
        {
          id: 10,
          question: "What is capnography?",
          options: [
            "Blood pressure monitoring",
            "End-tidal CO2 measurement",
            "Cardiac output measurement",
            "Oxygen saturation"
          ],
          correctAnswer: 1,
          explanation: "Capnography measures end-tidal CO2, useful for confirming airway placement and monitoring ventilation."
        },
        {
          id: 11,
          question: "What is surgical cricothyrotomy?",
          options: [
            "Tracheostomy",
            "Emergency surgical airway through cricothyroid membrane",
            "Needle decompression",
            "Chest tube insertion"
          ],
          correctAnswer: 1,
          explanation: "Surgical cricothyrotomy creates emergency airway through cricothyroid membrane when intubation impossible."
        },
        {
          id: 12,
          question: "What is evidence-based practice?",
          options: [
            "Only using tradition",
            "Integrating research evidence with clinical expertise",
            "Only following protocols",
            "Guessing best approach"
          ],
          correctAnswer: 1,
          explanation: "Evidence-based practice integrates best research evidence with clinical expertise and patient values."
        },
        {
          id: 13,
          question: "What are clinical performance indicators?",
          options: [
            "Only response times",
            "Measurable aspects of care quality",
            "Patient satisfaction only",
            "Cost measures only"
          ],
          correctAnswer: 1,
          explanation: "Clinical performance indicators measure aspects of care quality like response times, interventions, outcomes."
        },
        {
          id: 14,
          question: "What is root cause analysis?",
          options: [
            "Blaming individuals",
            "Systematic process to identify underlying causes of problems",
            "Only for major errors",
            "Patient assessment tool"
          ],
          correctAnswer: 1,
          explanation: "Root cause analysis systematically identifies underlying system issues contributing to problems or errors."
        },
        {
          id: 15,
          question: "What is BVM two-person technique?",
          options: [
            "One person only",
            "One seals mask, one squeezes bag for better ventilation",
            "Two bags used",
            "Only for children"
          ],
          correctAnswer: 1,
          explanation: "Two-person BVM: one hand seals mask with two-handed technique, other squeezes bag for better ventilation."
        },
        {
          id: 16,
          question: "What is NPA vs OPA?",
          options: [
            "Same device",
            "NPA for conscious/semi-conscious; OPA for unconscious without gag reflex",
            "Only size difference",
            "Only for trauma"
          ],
          correctAnswer: 1,
          explanation: "NPA can be used in conscious patients; OPA only in unconscious patients without gag reflex."
        },
        {
          id: 17,
          question: "What is case review for?",
          options: [
            "Punishment only",
            "Learning and quality improvement",
            "Legal protection only",
            "Documentation only"
          ],
          correctAnswer: 1,
          explanation: "Case reviews identify learning opportunities and system improvements, not individual punishment."
        },
        {
          id: 18,
          question: "What is simulation training?",
          options: [
            "Real patient care",
            "Practice in controlled environment with manikins/scenarios",
            "Only computer-based",
            "Observing only"
          ],
          correctAnswer: 1,
          explanation: "Simulation training uses manikins and scenarios to practice skills in safe, controlled environment."
        },
        {
          id: 19,
          question: "What is competency assessment?",
          options: [
            "Only written test",
            "Multiple methods to verify knowledge and skills",
            "Only supervisor opinion",
            "Patient feedback only"
          ],
          correctAnswer: 1,
          explanation: "Competency assessment uses multiple methods (testing, observation, simulation) to verify knowledge and skills."
        },
        {
          id: 20,
          question: "Why advanced procedures need quality systems?",
          options: [
            "Only for legal protection",
            "Ensure proper application and continuous improvement",
            "Only for research",
            "Only for certification"
          ],
          correctAnswer: 1,
          explanation: "Quality systems ensure advanced procedures applied appropriately and provide framework for continuous improvement."
        }
      ]
    }
  ],

  // FINAL EXAM (40 questions covering all modules)
  finalExam: {
    id: "emergency-medicine-diploma-exam",
    title: "Emergency Medicine Diploma Final Exam",
    description: "Comprehensive exam covering all advanced emergency medicine modules. Pass with 80% or higher to earn your diploma.",
    passingScore: 80,
    questions: [
      {
        id: 1,
        question: "What does ABCDE approach prioritize?",
        options: [
          "Comfort care first",
          "Life-threatening conditions systematically",
          "Documentation before treatment",
          "Patient history first"
        ],
        correctAnswer: 1,
        explanation: "ABCDE approach systematically addresses Airway, Breathing, Circulation, Disability, Exposure for life-threatening conditions."
      },
      {
        id: 2,
        question: "What is Golden Hour in trauma?",
        options: [
          "Time to definitive surgery",
          "First 60 minutes after injury critical for survival",
          "Time on scene limit",
          "Hospital response time"
        ],
        correctAnswer: 1,
        explanation: "Golden Hour refers to first 60 minutes after injury when timely care can prevent death from trauma."
      },
      {
        id: 3,
        question: "What is ACS spectrum?",
        options: [
          "Only heart attack",
          "Unstable angina, NSTEMI, STEMI",
          "Only stable angina",
          "Only cardiac arrest"
        ],
        correctAnswer: 1,
        explanation: "ACS includes Unstable Angina, NSTEMI (Non-ST Elevation MI), and STEMI (ST Elevation MI)."
      },
      {
        id: 4,
        question: "What is Pediatric Assessment Triangle?",
        options: [
          "ABC assessment",
          "Appearance, Work of Breathing, Circulation to Skin",
          "Only vital signs",
          "Neurological exam"
        ],
        correctAnswer: 1,
        explanation: "PAT assesses Appearance, Work of Breathing, and Circulation to Skin for rapid pediatric assessment."
      },
      {
        id: 5,
        question: "What defines a disaster?",
        options: [
          "Any emergency",
          "Needs exceed resources",
          "Multiple patients only",
          "Only natural events"
        ],
        correctAnswer: 1,
        explanation: "Disaster: needs exceed available resources, requiring different approach from routine emergencies."
      },
      {
        id: 6,
        question: "What is LEMON law for?",
        options: [
          "Legal requirements",
          "Predicting difficult intubation",
          "Medication dosing",
          "Trauma assessment"
        ],
        correctAnswer: 1,
        explanation: "LEMON law helps predict difficult intubation: Look, Evaluate 3-3-2, Mallampati, Obstruction, Neck mobility."
      },
      {
        id: 7,
        question: "What is AVPU scale?",
        options: [
          "Airway assessment",
          "Level of consciousness assessment",
          "Circulatory assessment",
          "Pain scale"
        ],
        correctAnswer: 1,
        explanation: "AVPU (Alert, Verbal, Pain, Unresponsive) assesses neurological status and consciousness level."
      },
      {
        id: 8,
        question: "What is tension pneumothorax treatment?",
        options: [
          "Chest tube only in hospital",
          "Needle decompression in field",
          "Occlusive dressing only",
          "Observation and transport"
        ],
        correctAnswer: 1,
        explanation: "Tension pneumothorax requires immediate needle decompression followed by chest tube in hospital."
      },
      {
        id: 9,
        question: "What is status epilepticus?",
        options: [
          "Any seizure",
          "Seizure >5 minutes or multiple without recovery",
          "Only tonic-clonic seizures",
          "Only in epilepsy patients"
        ],
        correctAnswer: 1,
        explanation: "Status epilepticus is seizure lasting >5 minutes or multiple seizures without recovery between them."
      },
      {
        id: 10,
        question: "What is preeclampsia?",
        options: [
          "Normal pregnancy symptom",
          "BP ≥140/90 after 20 weeks with proteinuria/end-organ dysfunction",
          "Only high blood pressure",
          "Only postpartum condition"
        ],
        correctAnswer: 1,
        explanation: "Preeclampsia is BP ≥140/90 after 20 weeks with proteinuria or end-organ dysfunction (headache, visual changes, etc.)."
      },
      {
        id: 11,
        question: "What is START triage first step?",
        options: [
          "Check breathing",
          "Identify walking wounded",
          "Check capillary refill",
          "Assess mental status"
        ],
        correctAnswer: 1,
        explanation: "START begins with identifying walking wounded who get Green tag and directed to treatment area."
      },
      {
        id: 12,
        question: "What is RSI?",
        options: [
          "Routine sedation only",
          "Rapid Sequence Intubation with sedative and paralytic",
          "Respiratory support intervention",
          "Radial site insertion"
        ],
        correctAnswer: 1,
        explanation: "RSI uses sedative and paralytic medications to facilitate endotracheal intubation in emergency situations."
      },
      {
        id: 13,
        question: "What are 6 Ps for extremity assessment?",
        options: [
          "Pain, Pallor, Paresthesia, Paralysis, Pulselessness, Poikilothermia",
          "Pain, Pulse, Pressure, Position, Paralysis, Pallor",
          "Pain, Pulse, Pallor, Position, Pressure, Paresthesia",
          "Pain, Position, Pulse, Pressure, Paralysis, Paresthesia"
        ],
        correctAnswer: 0,
        explanation: "6 Ps: Pain, Pallor, Paresthesia, Paralysis, Pulselessness, Poikilothermia (cold) assess neurovascular status."
      },
      {
        id: 14,
        question: "What is qSOFA for?",
        options: [
          "Stroke severity",
          "Sepsis likelihood",
          "Trauma severity",
          "Cardiac risk"
        ],
        correctAnswer: 1,
        explanation: "qSOFA (Altered mental status, RR≥22, SBP≤100) helps identify patients with suspected sepsis."
      },
      {
        id: 15,
        question: "What is croup management?",
        options: [
          "Antibiotics always",
          "Cool mist, racemic epinephrine if severe, steroids",
          "Only observation",
          "Immediate intubation"
        ],
        correctAnswer: 1,
        explanation: "Croup managed with cool mist, racemic epinephrine for severe cases, and steroids to reduce inflammation."
      },
      {
        id: 16,
        question: "What is MCI response goal?",
        options: [
          "Perfect care for all",
          "Greatest good for greatest number",
          "Treat worst first always",
          "Only treat salvageable patients"
        ],
        correctAnswer: 1,
        explanation: "MCI goal: greatest good for greatest number, prioritizing resources to save most lives possible."
      },
      {
        id: 17,
        question: "What is gold standard for tube confirmation?",
        options: [
          "Only auscultation",
          "Waveform capnography",
          "Chest rise only",
          "Pulse oximetry"
        ],
        correctAnswer: 1,
        explanation: "Waveform capnography is gold standard for confirming and continuously monitoring endotracheal tube placement."
      },
      {
        id: 18,
        question: "What is permissive hypotension?",
        options: [
          "Keeping BP normal at all costs",
          "Maintaining SBP 80-90 mmHg in bleeding trauma",
          "Allowing any BP level",
          "Only for head injuries"
        ],
        correctAnswer: 1,
        explanation: "Permissive hypotension maintains SBP 80-90 mmHg in bleeding trauma to avoid disrupting clots with aggressive fluids."
      },
      {
        id: 19,
        question: "What is DKA vs HHS?",
        options: [
          "Both have severe acidosis",
          "DKA has acidosis; HHS has extreme hyperglycemia without severe acidosis",
          "Both have mild hyperglycemia",
          "Only difference is age"
        ],
        correctAnswer: 1,
        explanation: "DKA has acidosis and ketones; HHS has extreme hyperglycemia without significant acidosis."
      },
      {
        id: 20,
        question: "What is magnesium sulfate for in obstetrics?",
        options: [
          "Blood pressure reduction only",
          "Seizure prophylaxis in preeclampsia/eclampsia",
          "Labor induction",
          "Pain control"
        ],
        correctAnswer: 1,
        explanation: "Magnesium sulfate prevents and treats seizures in preeclampsia/eclampsia."
      },
      {
        id: 21,
        question: "What are triage colors?",
        options: [
          "Only red and green",
          "Red, Yellow, Green, Black",
          "Based on injury type",
          "Random assignment"
        ],
        correctAnswer: 1,
        explanation: "Triage colors: Red (Immediate), Yellow (Delayed), Green (Minor), Black (Expectant/Deceased)."
      },
      {
        id: 22,
        question: "What is IO access?",
        options: [
          "Intraocular",
          "Intraosseous for emergency vascular access",
          "Internal organ",
          "Only for children"
        ],
        correctAnswer: 1,
        explanation: "Intraosseous access provides emergency vascular access through bone marrow when IV access difficult."
      },
      {
        id: 23,
        question: "What is flail chest?",
        options: [
          "Single rib fracture",
          "Multiple rib fractures creating paradoxical movement",
          "Sternal fracture only",
          "Clavicle fracture"
        ],
        correctAnswer: 1,
        explanation: "Flail chest involves multiple rib fractures creating segment that moves paradoxically with breathing."
      },
      {
        id: 24,
        question: "What is first-line for status epilepticus?",
        options: [
          "Phenytoin",
          "Benzodiazepines",
          "Levetiracetam",
          "Propofol"
        ],
        correctAnswer: 1,
        explanation: "Benzodiazepines (midazolam, lorazepam, diazepam) are first-line for status epilepticus."
      },
      {
        id: 25,
        question: "What is pediatric shock early sign?",
        options: [
          "Hypotension",
          "Tachycardia with delayed capillary refill",
          "Bradycardia",
          "Hypertension"
        ],
        correctAnswer: 1,
        explanation: "Early pediatric shock shows tachycardia and delayed capillary refill; hypotension is late sign."
      },
      {
        id: 26,
        question: "What is JumpSTART?",
        options: [
          "Adult trauma system",
          "Pediatric MCI triage system",
          "Hospital triage",
          "Only for burns"
        ],
        correctAnswer: 1,
        explanation: "JumpSTART is pediatric MCI triage system modifying START for children <8 years or child-sized."
      },
      {
        id: 27,
        question: "What is needle decompression for?",
        options: [
          "Any chest pain",
          "Tension pneumothorax",
          "Cardiac tamponade",
          "Pulmonary edema"
        ],
        correctAnswer: 1,
        explanation: "Needle decompression relieves tension pneumothorax by releasing trapped air in pleural space."
      },
      {
        id: 28,
        question: "What is cardiac tamponade triad?",
        options: [
          "Hypotension, tachycardia, muffled heart sounds",
          "Hypotension, distended neck veins, muffled heart sounds",
          "Hypertension, distended neck veins, clear heart sounds",
          "Hypotension, flat neck veins, loud heart sounds"
        ],
        correctAnswer: 1,
        explanation: "Beck's triad for cardiac tamponade: hypotension, distended neck veins, muffled heart sounds."
      },
      {
        id: 29,
        question: "What is opioid overdose antidote?",
        options: [
          "Flumazenil",
          "Naloxone",
          "N-acetylcysteine",
          "Sodium bicarbonate"
        ],
        correctAnswer: 1,
        explanation: "Naloxone is the specific antidote for opioid overdose, reversing respiratory depression."
      },
      {
        id: 30,
        question: "What is HELLP syndrome?",
        options: [
          "Normal pregnancy variant",
          "Hemolysis, Elevated Liver enzymes, Low Platelets",
          "Heart failure in pregnancy",
          "Hormone imbalance"
        ],
        correctAnswer: 1,
        explanation: "HELLP syndrome: Hemolysis, Elevated Liver enzymes, Low Platelets - severe variant of preeclampsia."
      },
      {
        id: 31,
        question: "What is CCP?",
        options: [
          "Command center only",
          "Casualty Collection Point for triage/treatment",
          "Chemical containment point",
          "Communication checkpoint"
        ],
        correctAnswer: 1,
        explanation: "CCP (Casualty Collection Point) is safe area near incident for triage, treatment, and transport loading."
      },
      {
        id: 32,
        question: "What is pericardiocentesis for?",
        options: [
          "Pneumothorax",
          "Cardiac tamponade",
          "Pleural effusion",
          "Ascites"
        ],
        correctAnswer: 1,
        explanation: "Pericardiocentesis drains fluid from pericardial sac in cardiac tamponade to relieve pressure on heart."
      },
      {
        id: 33,
        question: "What is GCS assessment?",
        options: [
          "Only motor function",
          "Level of consciousness comprehensively",
          "Only eye opening",
          "Only verbal response"
        ],
        correctAnswer: 1,
        explanation: "Glasgow Coma Scale assesses eye opening, verbal response, and motor response to evaluate consciousness level."
      },
      {
        id: 34,
        question: "What is CPAP for?",
        options: [
          "Cardiac arrest only",
          "Respiratory failure from pulmonary edema/COPD",
          "Only for asthma",
          "Only in hospital"
        ],
        correctAnswer: 1,
        explanation: "CPAP provides positive airway pressure for respiratory failure from pulmonary edema or COPD exacerbation."
      },
      {
        id: 35,
        question: "What is epiglottitis precaution?",
        options: [
          "Examine throat thoroughly",
          "Do not examine throat, maintain position of comfort",
          "Have child lie flat",
          "Give oral medications"
        ],
        correctAnswer: 1,
        explanation: "Do not examine throat in suspected epiglottitis as it may cause complete obstruction; maintain position of comfort."
      },
      {
        id: 36,
        question: "What is RTF concept?",
        options: [
          "Routine transport only",
          "Rescue Task Force for active shooter with law enforcement escort",
          "Radio transmission frequency",
          "Resource tracking form"
        ],
        correctAnswer: 1,
        explanation: "Rescue Task Force pairs medical providers with law enforcement for warm zone care in active shooter events."
      },
      {
        id: 37,
        question: "What is QA vs QI?",
        options: [
          "Same thing",
          "QA ensures standards met; QI improves processes",
          "QA for hospitals only; QI for field",
          "No difference"
        ],
        correctAnswer: 1,
        explanation: "Quality Assurance ensures care meets standards; Quality Improvement systematically improves processes."
      },
      {
        id: 38,
        question: "What is pediatric fluid bolus dose?",
        options: [
          "10ml/kg",
          "20ml/kg",
          "30ml/kg",
          "Based on age only"
        ],
        correctAnswer: 1,
        explanation: "Pediatric fluid bolus is 20ml/kg of isotonic crystalloid for shock or dehydration."
      },
      {
        id: 39,
        question: "What is capnography?",
        options: [
          "Blood pressure monitoring",
          "End-tidal CO2 measurement",
          "Cardiac output measurement",
          "Oxygen saturation"
        ],
        correctAnswer: 1,
        explanation: "Capnography measures end-tidal CO2, useful for confirming airway placement and monitoring ventilation."
      },
      {
        id: 40,
        question: "Why advanced emergency medicine important?",
        options: [
          "Only for hospital doctors",
          "Systematic approach improves outcomes in critical situations",
          "Only for major trauma",
          "Only for certification"
        ],
        correctAnswer: 1,
        explanation: "Advanced systematic approaches in emergency medicine improve patient outcomes through timely, appropriate interventions."
      }
    ]
  }
};
