export const clinicalNutritionDiploma = {
  // ==================== COURSE METADATA ====================
  id: "clinical-nutrition-diploma",
  title: "Clinical Nutrition (Diploma)",
  description: "Advanced diploma program covering evidence-based nutritional assessment, medical nutrition therapy for chronic diseases, therapeutic diets, and clinical practice skills for healthcare professionals.",
  duration: "12 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  upgradePrice: null, // Already a diploma
  icon: "🥗",
  badge: "Diploma",
  level: "Advanced",
  prerequisites: ["Nutrition (Certificate)"], // Assuming this is the certificate prerequisite
  
  // ==================== MODULES ====================
  modules: [
    // ========== MODULE 1: NUTRITIONAL ASSESSMENT & DIAGNOSTICS ==========
    {
      id: 1,
      title: "Advanced Nutritional Assessment & Diagnostics",
      content: `# Advanced Nutritional Assessment & Diagnostics

## Learning Objectives
- Master comprehensive nutritional assessment methodologies
- Interpret biochemical markers and diagnostic tests
- Develop evidence-based nutrition care plans

## Comprehensive Nutritional Assessment

**Nutritional assessment** in clinical practice involves four main components:
1. **Anthropometric Measurements** - Height, weight, BMI, waist circumference, body composition analysis
2. **Biochemical Data** - Blood tests, urine analysis, metabolic markers
3. **Clinical Examination** - Physical signs of malnutrition, medical history review
4. **Dietary Evaluation** - 24-hour recall, food frequency questionnaires, diet histories

**Body Mass Index (BMI)** categories are universally recognized:
- Underweight: <18.5 kg/m²
- Normal weight: 18.5-24.9 kg/m²
- Overweight: 25-29.9 kg/m²
- Obesity Class I: 30-34.9 kg/m²
- Obesity Class II: 35-39.9 kg/m²
- Obesity Class III: ≥40 kg/m²

**Waist circumference** is a crucial indicator of abdominal obesity:
- Men: >102 cm (40 inches) indicates increased risk
- Women: >88 cm (35 inches) indicates increased risk
These measurements correlate with metabolic syndrome risk factors.

## Biochemical Markers Interpretation

**Blood Chemistry Analysis** provides objective nutritional status data:
- **Albumin** (3.5-5.0 g/dL) - Reflects protein status (half-life: 20 days)
- **Prealbumin** (15-35 mg/dL) - Shorter half-life (2-3 days), more responsive to recent changes
- **Transferrin** (200-360 mg/dL) - Iron transport protein affected by nutritional status
- **C-reactive protein (CRP)** - Inflammation marker (<1.0 mg/dL normal)
- **Complete Blood Count (CBC)** - Anemia indicators (hemoglobin, hematocrit)

**Metabolic Panel Components**:
- Sodium (135-145 mEq/L)
- Potassium (3.5-5.0 mEq/L)
- Glucose (70-100 mg/dL fasting)
- Creatinine (0.6-1.2 mg/dL) - Kidney function indicator
- Blood Urea Nitrogen (BUN) (7-20 mg/dL)

**Vitamin and Mineral Status Markers**:
- Vitamin D (25-OH-D): Optimal >30 ng/mL
- Vitamin B12: >300 pg/mL
- Folate: >5.4 ng/mL
- Ferritin: Men 24-336 ng/mL, Women 11-307 ng/mL

## Subjective Global Assessment (SGA)

**SGA** is a validated clinical tool with three categories:
1. **Well Nourished (A)** - No weight loss, good intake, no physical signs
2. **Moderately Malnourished (B)** - Weight loss 5-10%, reduced intake, mild signs
3. **Severely Malnourished (C)** - Weight loss >10%, poor intake, obvious signs

**SGA Components**:
- Weight change pattern (intentional vs. unintentional)
- Dietary intake changes
- Gastrointestinal symptoms
- Functional capacity
- Physical examination findings

## Diagnostic Criteria for Malnutrition

**GLIM Criteria** (Global Leadership Initiative on Malnutrition):
1. **Phenotypic Criteria** (at least one required):
   - Unintentional weight loss >5% in 6 months
   - Low BMI (<20 if <70 years, <22 if ≥70 years)
   - Reduced muscle mass

2. **Etiologic Criteria** (at least one required):
   - Reduced food intake/assimilation
   - Inflammation or disease burden

**Nutrition-Focused Physical Exam (NFPE)** assesses:
- Muscle wasting (temporalis, clavicle, scapula, hand muscles)
- Fat loss (orbital, triceps, ribs)
- Fluid accumulation (edema, ascites)
- Hair, skin, nail changes
- Oral cavity examination

## Energy Requirement Calculations

**Resting Metabolic Rate (RMR)** estimation formulas:
- **Mifflin-St Jeor Equation** (most accurate):
  Men: (10 × weight in kg) + (6.25 × height in cm) - (5 × age) + 5
  Women: (10 × weight in kg) + (6.25 × height in cm) - (5 × age) - 161

- **Harris-Benedict Equation**:
  Men: 66.5 + (13.75 × weight in kg) + (5 × height in cm) - (6.76 × age)
  Women: 655 + (9.56 × weight in kg) + (1.85 × height in cm) - (4.68 × age)

**Activity Factors** multiply RMR:
- Sedentary: ×1.2
- Light activity: ×1.375
- Moderate activity: ×1.55
- Very active: ×1.725
- Extra active: ×1.9

**Stress Factors** for illness:
- Minor surgery: ×1.1
- Infection: ×1.2
- Trauma: ×1.3
- Burns: ×1.5-2.0
- Sepsis: ×1.6

## Macronutrient Requirements

**Protein Requirements** vary by condition:
- Healthy adults: 0.8 g/kg/day
- Mild stress: 1.0-1.2 g/kg/day
- Moderate stress: 1.2-1.5 g/kg/day
- Severe stress/burns: 1.5-2.0 g/kg/day
- Renal failure (non-dialysis): 0.6-0.8 g/kg/day
- Hemodialysis: 1.2 g/kg/day

**Carbohydrate Requirements**:
- Minimum: 100-150 g/day to prevent ketosis
- Standard: 45-65% of total calories
- Diabetes management: Consistent carbohydrate intake
- Critical illness: Controlled glucose levels (140-180 mg/dL)

**Fat Requirements**:
- Essential fatty acids: 2-4% of total calories
- Standard: 20-35% of total calories
- Omega-6:omega-3 ratio: 4:1 to 1:1 optimal

## Fluid Requirements Calculation

**Maintenance Fluid Requirements**:
- **Holiday-Segar Method** (for weight in kg):
  First 10 kg: 100 mL/kg
  Next 10 kg: 50 mL/kg
  Remaining kg: 20 mL/kg
  
  Example: 70 kg person = (10×100) + (10×50) + (50×20) = 1000 + 500 + 1000 = 2500 mL/day

- **Simplified Method**: 30-35 mL/kg/day for adults

**Adjustments for Conditions**:
- Fever: Add 500 mL per °C above 37°C
- Diarrhea: Replace output volume for volume
- Vomiting: Replace output volume for volume
- Sweating: Add 500-1000 mL for significant sweat loss

## Documentation and Care Planning

**Nutrition Care Process (NCP)** standardized steps:
1. **Nutrition Assessment** - Data collection and analysis
2. **Nutrition Diagnosis** - Problem identification using standardized language
3. **Nutrition Intervention** - Goal setting and implementation
4. **Nutrition Monitoring & Evaluation** - Outcome measurement and adjustment

**PES Statements** format: Problem (P) related to Etiology (E) as evidenced by Signs/Symptoms (S)
Example: "Inadequate oral intake (P) related to chemotherapy-induced nausea (E) as evidenced by 8% weight loss in 4 weeks and reported 50% reduction in usual intake (S)"

**Outcome Measures** include:
- Anthropometric improvements (weight gain, BMI normalization)
- Biochemical normalization (albumin, prealbumin improvements)
- Clinical improvement (wound healing, reduced infections)
- Dietary intake adequacy (meeting estimated needs)
- Quality of life measures

## Evidence-Based Practice Integration

**Clinical Practice Guidelines** sources:
- Academy of Nutrition and Dietetics Evidence Analysis Library
- American Society for Parenteral and Enteral Nutrition (ASPEN)
- European Society for Clinical Nutrition and Metabolism (ESPEN)
- National Institute for Health and Care Excellence (NICE)

**Research Integration Steps**:
1. Formulate clinical question using PICO format
2. Search relevant databases (PubMed, Cochrane, CINAHL)
3. Appraise evidence quality and applicability
4. Apply findings to individual patient context
5. Evaluate outcomes and adjust practice

**Quality Improvement Metrics**:
- Malnutrition identification rate (target: >90%)
- Nutrition screening completion (target: 100%)
- Appropriate referrals to dietitian (target: >95%)
- Intervention effectiveness measurement
- Patient satisfaction scores`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "Which BMI category is classified as Obesity Class I?",
          options: [
            "25-29.9 kg/m²",
            "30-34.9 kg/m²",
            "35-39.9 kg/m²",
            "≥40 kg/m²"
          ],
          correctAnswer: 1,
          explanation: "Obesity Class I is defined as BMI 30-34.9 kg/m² according to standard classifications."
        },
        {
          id: 2,
          question: "What waist circumference indicates increased risk in women?",
          options: [
            ">80 cm",
            ">88 cm",
            ">95 cm",
            ">102 cm"
          ],
          correctAnswer: 1,
          explanation: "For women, waist circumference >88 cm (35 inches) indicates increased risk for metabolic syndrome."
        },
        {
          id: 3,
          question: "What is the normal range for albumin in blood chemistry?",
          options: [
            "2.0-3.0 g/dL",
            "3.5-5.0 g/dL",
            "5.0-6.5 g/dL",
            "6.5-8.0 g/dL"
          ],
          correctAnswer: 1,
          explanation: "Normal albumin range is 3.5-5.0 g/dL, with levels below indicating potential protein malnutrition."
        },
        {
          id: 4,
          question: "Which marker has the shortest half-life and is most responsive to recent changes?",
          options: [
            "Albumin (20 days)",
            "Transferrin (8-10 days)",
            "Prealbumin (2-3 days)",
            "Hemoglobin (120 days)"
          ],
          correctAnswer: 2,
          explanation: "Prealbumin has a half-life of 2-3 days, making it the most responsive to recent nutritional changes."
        },
        {
          id: 5,
          question: "How many main components does comprehensive nutritional assessment include?",
          options: [
            "2 components",
            "3 components",
            "4 components",
            "5 components"
          ],
          correctAnswer: 2,
          explanation: "Comprehensive nutritional assessment includes four components: anthropometric, biochemical, clinical, and dietary."
        },
        {
          id: 6,
          question: "What is the Subjective Global Assessment (SGA) category for someone with 8% weight loss and reduced intake?",
          options: [
            "Well Nourished (A)",
            "Moderately Malnourished (B)",
            "Severely Malnourished (C)",
            "Not applicable"
          ],
          correctAnswer: 1,
          explanation: "Weight loss of 5-10% with reduced intake classifies as Moderately Malnourished (B) in SGA."
        },
        {
          id: 7,
          question: "According to GLIM criteria, what percentage of unintentional weight loss in 6 months qualifies as phenotypic criteria?",
          options: [
            ">2%",
            ">5%",
            ">8%",
            ">10%"
          ],
          correctAnswer: 1,
          explanation: "GLIM criteria require >5% unintentional weight loss in 6 months as phenotypic criteria for malnutrition."
        },
        {
          id: 8,
          question: "Which equation is considered most accurate for estimating Resting Metabolic Rate?",
          options: [
            "Harris-Benedict Equation",
            "Mifflin-St Jeor Equation",
            "Schofield Equation",
            "WHO Equation"
          ],
          correctAnswer: 1,
          explanation: "The Mifflin-St Jeor Equation is considered the most accurate for estimating RMR in most populations."
        },
        {
          id: 9,
          question: "What is the protein requirement for a patient with severe stress or burns?",
          options: [
            "0.8-1.0 g/kg/day",
            "1.0-1.2 g/kg/day",
            "1.2-1.5 g/kg/day",
            "1.5-2.0 g/kg/day"
          ],
          correctAnswer: 3,
          explanation: "Severe stress conditions like burns require 1.5-2.0 g/kg/day of protein for optimal recovery."
        },
        {
          id: 10,
          question: "Using the Holiday-Segar method, what is the daily fluid requirement for a 70 kg person?",
          options: [
            "1500 mL",
            "2000 mL",
            "2500 mL",
            "3000 mL"
          ],
          correctAnswer: 2,
          explanation: "70 kg = (10×100) + (10×50) + (50×20) = 1000 + 500 + 1000 = 2500 mL/day."
        },
        {
          id: 11,
          question: "Which activity factor would you multiply RMR by for a sedentary individual?",
          options: [
            "×1.0",
            "×1.2",
            "×1.375",
            "×1.55"
          ],
          correctAnswer: 1,
          explanation: "Sedentary individuals (little to no exercise) use an activity factor of ×1.2."
        },
        {
          id: 12,
          question: "What is the minimum daily carbohydrate intake to prevent ketosis?",
          options: [
            "50-75 g/day",
            "100-150 g/day",
            "150-200 g/day",
            "200-250 g/day"
          ],
          correctAnswer: 1,
          explanation: "Minimum carbohydrate requirement to prevent ketosis is 100-150 g/day."
        },
        {
          id: 13,
          question: "Which component examines muscle wasting at specific sites like temporalis and clavicle?",
          options: [
            "Biochemical analysis",
            "Dietary evaluation",
            "Nutrition-Focused Physical Exam",
            "Anthropometric measurements"
          ],
          correctAnswer: 2,
          explanation: "The Nutrition-Focused Physical Exam specifically assesses muscle wasting at sites like temporalis and clavicle."
        },
        {
          id: 14,
          question: "What is the optimal omega-6 to omega-3 fatty acid ratio?",
          options: [
            "10:1",
            "4:1 to 1:1",
            "20:1",
            "No specific ratio"
          ],
          correctAnswer: 1,
          explanation: "Optimal omega-6:omega-3 ratio ranges from 4:1 to 1:1 for anti-inflammatory benefits."
        },
        {
          id: 15,
          question: "How much additional fluid should be added for each °C of fever above 37°C?",
          options: [
            "100 mL per °C",
            "250 mL per °C",
            "500 mL per °C",
            "1000 mL per °C"
          ],
          correctAnswer: 2,
          explanation: "Add 500 mL of fluid per day for each °C of fever above 37°C to account for insensible losses."
        },
        {
          id: 16,
          question: "Which step in the Nutrition Care Process involves problem identification using standardized language?",
          options: [
            "Nutrition Assessment",
            "Nutrition Diagnosis",
            "Nutrition Intervention",
            "Nutrition Monitoring & Evaluation"
          ],
          correctAnswer: 1,
          explanation: "Nutrition Diagnosis is the step where problems are identified using standardized PES statement format."
        },
        {
          id: 17,
          question: "What protein requirement is recommended for a patient on hemodialysis?",
          options: [
            "0.6-0.8 g/kg/day",
            "0.8-1.0 g/kg/day",
            "1.0-1.2 g/kg/day",
            "1.2 g/kg/day"
          ],
          correctAnswer: 3,
          explanation: "Hemodialysis patients require 1.2 g/kg/day of protein to compensate for dialysis losses."
        },
        {
          id: 18,
          question: "What is the target blood glucose range for critically ill patients?",
          options: [
            "80-120 mg/dL",
            "100-140 mg/dL",
            "140-180 mg/dL",
            "180-220 mg/dL"
          ],
          correctAnswer: 2,
          explanation: "Critical illness guidelines recommend maintaining blood glucose between 140-180 mg/dL."
        },
        {
          id: 19,
          question: "Which organization provides the Evidence Analysis Library for nutrition practice guidelines?",
          options: [
            "ASPEN",
            "ESPEN",
            "Academy of Nutrition and Dietetics",
            "NICE"
          ],
          correctAnswer: 2,
          explanation: "The Academy of Nutrition and Dietetics maintains the Evidence Analysis Library for nutrition practice guidelines."
        },
        {
          id: 20,
          question: "What is the P in PES statement format?",
          options: [
            "Patient",
            "Problem",
            "Procedure",
            "Progress"
          ],
          correctAnswer: 1,
          explanation: "In PES statements, P stands for Problem, which identifies the nutrition diagnosis."
        }
      ]
    },

    // ========== MODULE 2: MEDICAL NUTRITION THERAPY FOR CARDIOVASCULAR DISEASE ==========
    {
      id: 2,
      title: "Medical Nutrition Therapy for Cardiovascular Disease",
      content: `# Medical Nutrition Therapy for Cardiovascular Disease

## Learning Objectives
- Implement evidence-based nutrition interventions for hypertension
- Apply dietary strategies for dyslipidemia management
- Design heart-healthy meal plans for various cardiovascular conditions

## Hypertension Management

**Blood Pressure Classification** (ACC/AHA Guidelines):
- Normal: <120/80 mmHg
- Elevated: 120-129/<80 mmHg
- Stage 1 Hypertension: 130-139/80-89 mmHg
- Stage 2 Hypertension: ≥140/90 mmHg
- Hypertensive Crisis: >180/120 mmHg

**DASH Diet Principles** (Dietary Approaches to Stop Hypertension):
- **Sodium restriction**: <2300 mg/day (ideal: <1500 mg/day)
- **Potassium-rich foods**: 4700 mg/day target
- **Magnesium-rich foods**: 500 mg/day target
- **Calcium**: 1250 mg/day target
- **Fiber**: 30 g/day minimum

**DASH Diet Food Group Servings** (2000 calorie diet):
- Grains: 6-8 servings/day (whole grains emphasized)
- Vegetables: 4-5 servings/day
- Fruits: 4-5 servings/day
- Low-fat dairy: 2-3 servings/day
- Lean meats/poultry/fish: ≤6 oz/day
- Nuts/seeds/legumes: 4-5 servings/week
- Fats/oils: 2-3 servings/day (unsaturated fats)
- Sweets: ≤5 servings/week

**Sodium Reduction Strategies**:
- Eliminate table salt (1 tsp = 2300 mg sodium)
- Choose fresh/frozen over canned vegetables
- Rinse canned beans and vegetables
- Use herbs/spices instead of salt
- Limit processed meats, cheeses, canned soups
- Read nutrition labels (aim for <140 mg sodium per serving)

**Potassium Sources** (aim for 4700 mg/day):
- Medium baked potato with skin: 925 mg
- 1 cup cooked spinach: 840 mg
- 1 cup cooked lentils: 730 mg
- 1 medium banana: 425 mg
- 1 cup orange juice: 475 mg
- 1 cup plain yogurt: 575 mg

## Dyslipidemia Management

**Lipid Profile Targets**:
- Total cholesterol: <200 mg/dL
- LDL cholesterol: <100 mg/dL (optimal), <70 mg/dL for high risk
- HDL cholesterol: >40 mg/dL (men), >50 mg/dL (women)
- Triglycerides: <150 mg/dL
- Non-HDL cholesterol: <130 mg/dL

**Dietary Strategies for LDL Reduction**:
1. **Saturated fat restriction**: <7% of total calories
   - Replace with monounsaturated fats (olive oil, avocados, nuts)
   - Avoid tropical oils (palm, coconut), butter, lard

2. **Trans fat elimination**: As low as possible (ideally 0%)
   - Avoid partially hydrogenated oils
   - Check ingredient lists on packaged foods

3. **Dietary cholesterol**: <200 mg/day for high-risk individuals
   - Egg yolks (1 large = 185 mg cholesterol)
   - Organ meats, shellfish (shrimp: 85 mg per 3 oz)

4. **Soluble fiber increase**: 5-10 g/day minimum
   - Oats, barley, psyllium (2-3 g soluble fiber per serving)
   - Beans, lentils, apples, citrus fruits

**Soluble Fiber Mechanism**: Binds bile acids in intestine → Increased excretion → Liver uses cholesterol to make more bile acids → Reduced blood cholesterol

**Portfolio Diet Components** (proven to reduce LDL by 20-30%):
1. Plant sterols/stanols: 2 g/day
2. Soy protein: 25 g/day
3. Viscous fiber: 10 g/day
4. Almonds: 30 g/day (about 23 almonds)

**Omega-3 Fatty Acids Benefits**:
- EPA + DHA: 1 g/day for cardioprotection
- 2-4 g/day for triglyceride reduction (prescription dose)
- Sources: Fatty fish (salmon, mackerel, sardines), algae oil, flaxseed

**Triglyceride Management**:
- Limit simple sugars and refined carbohydrates
- Moderate alcohol consumption (≤1 drink/day women, ≤2 drinks/day men)
- Increase omega-3 fatty acids
- Achieve/maintain healthy weight
- Regular physical activity

## Heart Failure Nutrition Management

**Sodium Restriction Guidelines**:
- Stage A/B: <2300 mg/day
- Stage C: 2000 mg/day
- Advanced/Refractory: 1500-2000 mg/day

**Fluid Restriction Indications**:
- Typically when serum sodium <135 mEq/L
- Common restriction: 1500-2000 mL/day
- Includes all fluids (water, juice, soup, ice cream)

**Cardiac Cachexia Recognition**:
- Unintentional weight loss >5% in 12 months
- BMI <22 kg/m²
- Reduced muscle mass
- Requires aggressive nutrition intervention

**Nutrition Priorities in Heart Failure**:
1. Maintain adequate energy intake (30-35 kcal/kg/day)
2. Ensure sufficient protein (1.2-1.5 g/kg/day)
3. Optimize micronutrient status (thiamine, coenzyme Q10, magnesium)
4. Monitor electrolyte balance (sodium, potassium, magnesium)

## Atherosclerosis Prevention

**Mediterranean Diet Components**:
- Abundant plant foods (fruits, vegetables, whole grains, legumes, nuts)
- Olive oil as primary fat source
- Moderate fish and poultry consumption
- Low to moderate dairy (cheese and yogurt)
- Limited red meat and sweets
- Wine in moderation with meals (optional)

**Antioxidant-Rich Foods**:
- Vitamin C: Citrus fruits, bell peppers, strawberries
- Vitamin E: Almonds, sunflower seeds, spinach
- Carotenoids: Tomatoes, carrots, sweet potatoes
- Polyphenols: Berries, dark chocolate, green tea
- Allium compounds: Garlic, onions, leeks

**Inflammation-Reduction Strategies**:
- Omega-3 fatty acids: EPA/DHA 1 g/day
- Turmeric/curcumin: Anti-inflammatory properties
- Ginger: Natural anti-inflammatory
- Limit pro-inflammatory foods (refined carbs, trans fats, processed meats)

## Metabolic Syndrome Management

**Diagnostic Criteria** (3 of 5 required):
1. Waist circumference: >102 cm (men), >88 cm (women)
2. Triglycerides: ≥150 mg/dL
3. HDL cholesterol: <40 mg/dL (men), <50 mg/dL (women)
4. Blood pressure: ≥130/85 mmHg
5. Fasting glucose: ≥100 mg/dL

**Nutrition Interventions**:
- Weight loss: 5-10% of body weight significantly improves all parameters
- Carbohydrate quality: Low glycemic index foods
- Fiber intake: >30 g/day
- Healthy fats: Replace saturated with unsaturated
- Regular meal timing: Avoid large fluctuations in blood glucose

**Weight Loss Strategies**:
- Calorie deficit: 500-750 kcal/day for 1-1.5 lb/week loss
- Protein: 25-30% of calories to preserve lean mass
- Volume eating: High water content foods (soups, salads)
- Mindful eating: Slow pace, recognize hunger/fullness cues

## Evidence-Based Practice

**LANDMARK Trials**:
- DASH trial: Reduced systolic BP by 11.4 mmHg, diastolic by 5.5 mmHg
- PREDIMED: Mediterranean diet reduced cardiovascular events by 30%
- Lyon Diet Heart Study: Mediterranean diet reduced recurrence by 50-70%
- Portfolio Diet Study: 30% LDL reduction comparable to statins

**Guideline Recommendations**:
- AHA/ACC: Lifestyle modifications as first-line therapy
- NCEP ATP III: Therapeutic lifestyle changes before medications
- ESC: Comprehensive risk factor management

**Monitoring Parameters**:
- Blood pressure: Weekly during diet changes
- Lipid profile: 4-6 weeks after dietary intervention
- Body weight: Weekly
- Waist circumference: Monthly
- Symptoms: Energy levels, exercise tolerance, edema

## Patient Education Strategies

**Label Reading Skills**:
- Sodium: Aim for <140 mg per serving
- Saturated fat: <1 g per serving
- Trans fat: 0 g ideal
- Fiber: >3 g per serving
- Added sugars: <10 g per serving

**Meal Planning Templates**:
- Plate method: ½ non-starchy vegetables, ¼ lean protein, ¼ whole grains
- Snack planning: Protein + fiber combinations
- Restaurant strategies: Request modifications, share portions
- Cooking techniques: Baking, grilling, steaming instead of frying

**Behavior Change Techniques**:
- SMART goals: Specific, Measurable, Achievable, Relevant, Time-bound
- Self-monitoring: Food diaries, symptom logs
- Social support: Family involvement, support groups
- Problem-solving: Anticipate barriers, develop solutions
- Relapse prevention: Plan for setbacks, maintain motivation

**Cultural Considerations**:
- Traditional foods adaptations
- Religious dietary practices
- Food preferences and aversions
- Cooking methods and equipment availability
- Family eating patterns

## Advanced Clinical Considerations

**Nutrient-Drug Interactions**:
- Warfarin: Consistent vitamin K intake
- Statins: Avoid grapefruit juice (CYP3A4 inhibition)
- ACE inhibitors: Monitor potassium with potassium-sparing diuretics
- Diuretics: Ensure adequate magnesium and potassium

**Special Populations**:
- Elderly: Consider dental status, swallowing ability, appetite
- Pregnancy: Balance cardiovascular health with fetal needs
- Renal impairment: Adjust protein, potassium, phosphorus
- Diabetes: Coordinate carbohydrate management with heart health

**Emerging Research Areas**:
- Gut microbiome and cardiovascular health
- Intermittent fasting effects on cardiovascular risk factors
- Personalized nutrition based on genetics
- Novel functional foods (fermented foods, specific phytochemicals)

**Quality Measures**:
- Blood pressure control rates
- LDL cholesterol achievement rates
- Patient satisfaction with dietary counseling
- Adherence to prescribed dietary patterns
- Reduction in medication requirements`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "According to ACC/AHA guidelines, what BP range defines Stage 1 Hypertension?",
          options: [
            "<120/80 mmHg",
            "120-129/<80 mmHg",
            "130-139/80-89 mmHg",
            "≥140/90 mmHg"
          ],
          correctAnswer: 2,
          explanation: "Stage 1 Hypertension is defined as 130-139/80-89 mmHg according to ACC/AHA guidelines."
        },
        {
          id: 2,
          question: "What is the sodium restriction target in the DASH diet?",
          options: [
            "<1000 mg/day",
            "<1500 mg/day",
            "<2300 mg/day",
            "<3000 mg/day"
          ],
          correctAnswer: 2,
          explanation: "The DASH diet recommends <2300 mg sodium/day, with an ideal target of <1500 mg/day for greater benefits."
        },
        {
          id: 3,
          question: "What is the daily potassium target in the DASH diet?",
          options: [
            "2000 mg/day",
            "3500 mg/day",
            "4700 mg/day",
            "6000 mg/day"
          ],
          correctAnswer: 2,
          explanation: "The DASH diet targets 4700 mg of potassium daily to help lower blood pressure."
        },
        {
          id: 4,
          question: "How many servings of vegetables are recommended daily in the DASH diet (2000 calorie plan)?",
          options: [
            "2-3 servings",
            "3-4 servings",
            "4-5 servings",
            "5-6 servings"
          ],
          correctAnswer: 2,
          explanation: "The DASH diet recommends 4-5 servings of vegetables daily on a 2000 calorie plan."
        },
        {
          id: 5,
          question: "What is the optimal LDL cholesterol target for high-risk patients?",
          options: [
            "<100 mg/dL",
            "<70 mg/dL",
            "<130 mg/dL",
            "<160 mg/dL"
          ],
          correctAnswer: 1,
          explanation: "For high-risk patients, the optimal LDL cholesterol target is <70 mg/dL."
        },
        {
          id: 6,
          question: "What percentage of total calories should come from saturated fat in dyslipidemia management?",
          options: [
            "<3%",
            "<7%",
            "<10%",
            "<15%"
          ],
          correctAnswer: 1,
          explanation: "Saturated fat should be limited to <7% of total calories for optimal LDL cholesterol management."
        },
        {
          id: 7,
          question: "How much soluble fiber should be consumed daily for cholesterol reduction?",
          options: [
            "2-3 g/day",
            "5-10 g/day",
            "10-15 g/day",
            "15-20 g/day"
          ],
          correctAnswer: 1,
          explanation: "5-10 g of soluble fiber daily is effective for reducing LDL cholesterol levels."
        },
        {
          id: 8,
          question: "What dose of plant sterols/stanols is effective in the Portfolio Diet?",
          options: [
            "1 g/day",
            "2 g/day",
            "3 g/day",
            "4 g/day"
          ],
          correctAnswer: 1,
          explanation: "The Portfolio Diet includes 2 g/day of plant sterols/stanols to help reduce LDL cholesterol."
        },
        {
          id: 9,
          question: "What is the sodium restriction for Stage C heart failure patients?",
          options: [
            "1500 mg/day",
            "2000 mg/day",
            "2300 mg/day",
            "3000 mg/day"
          ],
          correctAnswer: 1,
          explanation: "Stage C heart failure patients typically require sodium restriction to 2000 mg/day."
        },
        {
          id: 10,
          question: "How many criteria must be met for metabolic syndrome diagnosis?",
          options: [
            "2 of 5",
            "3 of 5",
            "4 of 5",
            "5 of 5"
          ],
          correctAnswer: 1,
          explanation: "Metabolic syndrome diagnosis requires meeting 3 out of 5 specified criteria."
        },
        {
          id: 11,
          question: "What waist circumference indicates increased risk in men for metabolic syndrome?",
          options: [
            ">88 cm",
            ">94 cm",
            ">102 cm",
            ">110 cm"
          ],
          correctAnswer: 2,
          explanation: "Waist circumference >102 cm (40 inches) indicates increased risk for metabolic syndrome in men."
        },
        {
          id: 12,
          question: "Which trial demonstrated 30% reduction in cardiovascular events with Mediterranean diet?",
          options: [
            "DASH trial",
            "PREDIMED",
            "Lyon Diet Heart Study",
            "Portfolio Diet Study"
          ],
          correctAnswer: 1,
          explanation: "The PREDIMED trial showed 30% reduction in cardiovascular events with Mediterranean diet."
        },
        {
          id: 13,
          question: "What percentage of body weight loss significantly improves metabolic syndrome parameters?",
          options: [
            "1-3%",
            "3-5%",
            "5-10%",
            "10-15%"
          ],
          correctAnswer: 2,
          explanation: "5-10% body weight loss significantly improves all metabolic syndrome parameters."
        },
        {
          id: 14,
          question: "Which nutrient interaction requires consistent daily intake with warfarin therapy?",
          options: [
            "Vitamin A",
            "Vitamin C",
            "Vitamin D",
            "Vitamin K"
          ],
          correctAnswer: 3,
          explanation: "Warfarin therapy requires consistent vitamin K intake to maintain stable anticoagulation."
        },
        {
          id: 15,
          question: "What is the daily EPA+DHA recommendation for cardioprotection?",
          options: [
            "250 mg/day",
            "500 mg/day",
            "1 g/day",
            "2 g/day"
          ],
          correctAnswer: 2,
          explanation: "1 g/day of EPA+DHA provides cardioprotective benefits according to current guidelines."
        },
        {
          id: 16,
          question: "What is the recommended fluid restriction when serum sodium is <135 mEq/L in heart failure?",
          options: [
            "1000-1500 mL/day",
            "1500-2000 mL/day",
            "2000-2500 mL/day",
            "2500-3000 mL/day"
          ],
          correctAnswer: 1,
          explanation: "Fluid restriction of 1500-2000 mL/day is typically initiated when serum sodium is <135 mEq/L."
        },
        {
          id: 17,
          question: "How much soy protein is recommended in the Portfolio Diet?",
          options: [
            "15 g/day",
            "25 g/day",
            "35 g/day",
            "45 g/day"
          ],
          correctAnswer: 1,
          explanation: "The Portfolio Diet includes 25 g/day of soy protein to help reduce cholesterol."
        },
        {
          id: 18,
          question: "What is the target triglyceride level?",
          options: [
            "<100 mg/dL",
            "<150 mg/dL",
            "<200 mg/dL",
            "<250 mg/dL"
          ],
          correctAnswer: 1,
          explanation: "Optimal triglyceride level is <150 mg/dL according to lipid management guidelines."
        },
        {
          id: 19,
          question: "Which fruit juice should be avoided with statin medications due to CYP3A4 inhibition?",
          options: [
            "Apple juice",
            "Orange juice",
            "Grapefruit juice",
            "Cranberry juice"
          ],
          correctAnswer: 2,
          explanation: "Grapefruit juice inhibits CYP3A4 metabolism, increasing statin concentrations and risk of side effects."
        },
        {
          id: 20,
          question: "What is the daily almond recommendation in the Portfolio Diet?",
          options: [
            "15 g (about 12 almonds)",
            "30 g (about 23 almonds)",
            "45 g (about 35 almonds)",
            "60 g (about 46 almonds)"
          ],
          correctAnswer: 1,
          explanation: "The Portfolio Diet includes 30 g of almonds daily (about 23 almonds) for cholesterol benefits."
        }
      ]
    },

    // ========== MODULE 3: DIABETES NUTRITION MANAGEMENT ==========
    {
      id: 3,
      title: "Diabetes Nutrition Management",
      content: `# Diabetes Nutrition Management

## Learning Objectives
- Implement carbohydrate counting and glycemic index strategies
- Design medical nutrition therapy for type 1, type 2, and gestational diabetes
- Manage diabetes complications through dietary interventions

## Diabetes Classification and Diagnosis

**Diagnostic Criteria** (ADA Standards):
- Fasting plasma glucose: ≥126 mg/dL
- 2-hour plasma glucose during OGTT: ≥200 mg/dL
- HbA1c: ≥6.5%
- Random plasma glucose: ≥200 mg/dL with symptoms

**Prediabetes Criteria**:
- Fasting glucose: 100-125 mg/dL
- 2-hour OGTT: 140-199 mg/dL
- HbA1c: 5.7-6.4%

**Diabetes Types**:
- Type 1: Autoimmune beta-cell destruction (5-10% of cases)
- Type 2: Insulin resistance + relative insulin deficiency (90-95%)
- Gestational: Diabetes diagnosed in pregnancy
- Other types: Genetic defects, drug-induced, pancreatic diseases

## Carbohydrate Management Strategies

**Carbohydrate Counting Basics**:
- Standard serving: 15 g carbohydrates = 1 carbohydrate choice
- Typical meal: 3-5 carbohydrate choices (45-75 g)
- Typical snack: 1-2 carbohydrate choices (15-30 g)
- Insulin-to-carbohydrate ratio: Varies by individual (commonly 1 unit per 10-15 g)

**Glycemic Index Classification**:
- Low GI: ≤55 (most fruits, legumes, whole grains)
- Medium GI: 56-69 (sweet corn, bananas, brown rice)
- High GI: ≥70 (white bread, potatoes, most breakfast cereals)

**Glycemic Load Calculation**:
- GL = (GI × grams of carbohydrate) ÷ 100
- Low GL: ≤10
- Medium GL: 11-19
- High GL: ≥20

**Fiber Recommendations**:
- Total fiber: 25 g/day (women), 38 g/day (men)
- Soluble fiber: Especially beneficial for glucose control
- Sources: Legumes, oats, barley, fruits with skin, vegetables

## Medical Nutrition Therapy Principles

**Calorie Distribution**:
- Carbohydrates: 45-65% of total calories
- Protein: 15-20% of total calories
- Fat: 20-35% of total calories (≤7% saturated fat)

**Meal Timing Strategies**:
- Consistent carbohydrate intake at meals
- Regular meal intervals (4-6 hours apart)
- Bedtime snack if using insulin or prone to nocturnal hypoglycemia
- Adjust timing based on medication regimen

**Plate Method**:
- ½ plate: Non-starchy vegetables
- ¼ plate: Lean protein
- ¼ plate: Carbohydrate foods
- Add: Small serving of fruit and dairy as needed

## Type 1 Diabetes Management

**Insulin Regimens**:
- Basal-bolus: Long-acting + rapid-acting insulin
- Insulin pump: Continuous subcutaneous insulin infusion
- Conventional: Fixed doses of mixed insulin

**Carbohydrate-to-Insulin Ratios**:
- Typically 1 unit per 10-15 g carbohydrate
- Varies based on time of day, activity level, insulin sensitivity
- Correction factor: Additional insulin for high blood glucose (usually 1 unit per 50 mg/dL above target)

**Hypoglycemia Management**:
- Rule of 15: 15 g fast-acting carbohydrate, wait 15 minutes, recheck
- Fast-acting sources: Glucose tablets, juice, regular soda
- Follow-up snack: If next meal >1 hour away
- Glucagon prescription for severe hypoglycemia

**Sick Day Management**:
- Continue taking insulin/medications
- Monitor blood glucose every 2-4 hours
- Check ketones if blood glucose >240 mg/dL
- Stay hydrated (sugar-free fluids)
- Consume easily digestible carbohydrates

## Type 2 Diabetes Management

**Weight Management Goals**:
- Initial goal: 5-7% weight loss
- Moderate calorie deficit: 500-750 kcal/day
- Preservation of lean body mass: Adequate protein (1.0-1.5 g/kg)

**Physical Activity Recommendations**:
- Aerobic exercise: 150 minutes/week minimum
- Resistance training: 2-3 times/week
- Reduce sedentary time: Break up sitting every 30 minutes
- Post-meal activity: Can help lower postprandial glucose

**Medication-Nutrient Interactions**:
- Metformin: May cause vitamin B12 deficiency
- SGLT2 inhibitors: Monitor for dehydration, UTI risk
- GLP-1 agonists: Slow gastric emptying, adjust meal timing
- Sulfonylureas: Risk of hypoglycemia, consistent carbohydrate intake

## Gestational Diabetes Management

**Screening and Diagnosis**:
- 1-hour glucose challenge: ≥135 mg/dL requires OGTT
- 3-hour OGTT diagnosis (2 or more abnormal values):
  - Fasting: ≥95 mg/dL
  - 1-hour: ≥180 mg/dL
  - 2-hour: ≥155 mg/dL
  - 3-hour: ≥140 mg/dL

**Nutrition Goals**:
- Adequate calories for appropriate weight gain
- Carbohydrate distribution: 3 meals + 2-3 snacks
- Bedtime snack: Prevents overnight ketosis
- Consistent carbohydrate intake: 30-45 g per meal, 15-30 g per snack

**Weight Gain Recommendations** (IOM Guidelines):
- Underweight (BMI <18.5): 28-40 lb
- Normal weight (BMI 18.5-24.9): 25-35 lb
- Overweight (BMI 25-29.9): 15-25 lb
- Obese (BMI ≥30): 11-20 lb

**Monitoring Parameters**:
- Fasting glucose: <95 mg/dL
- 1-hour postprandial: <140 mg/dL
- 2-hour postprandial: <120 mg/dL
- Urine ketones: Check morning fasting
- Fetal growth: Regular ultrasound monitoring

## Diabetes Complications Management

**Diabetic Kidney Disease**:
- Protein restriction: 0.8 g/kg/day (not <0.6 g/kg)
- Sodium restriction: <2300 mg/day
- Potassium restriction: If serum potassium >5.0 mEq/L
- Phosphorus restriction: If elevated
- Fluid restriction: If edema or hyponatremia

**Diabetic Neuropathy**:
- Blood glucose control: Primary prevention
- Alpha-lipoic acid: 600 mg/day may improve symptoms
- Vitamin D: Maintain adequate levels
- B vitamins: Ensure adequacy (especially B12 with metformin)

**Diabetic Retinopathy**:
- Tight glucose control: Slows progression
- Blood pressure control: <130/80 mmHg
- Antioxidant-rich foods: May provide protection
- Omega-3 fatty acids: Anti-inflammatory benefits

**Cardiovascular Disease Prevention**:
- Mediterranean or DASH dietary patterns
- Omega-3 fatty acids: 1 g/day EPA+DHA
- Plant sterols/stanols: 2 g/day
- Sodium restriction: <2300 mg/day

## Advanced Nutrition Interventions

**Continuous Glucose Monitoring (CGM) Integration**:
- Time in range: Target >70% (70-180 mg/dL)
- Time below range: <4% (<70 mg/dL)
- Time above range: <25% (>180 mg/dL)
- Glucose variability: Coefficient of variation <36%

**Artificial Pancreas Systems**:
- Closed-loop insulin delivery
- Requires accurate carbohydrate counting
- Still needs meal announcement
- Reduces hypoglycemia risk

**Very Low-Calorie Diets (VLCD)**:
- 800 kcal/day or less
- Medical supervision required
- Can induce diabetes remission in early type 2
- Must include adequate protein and micronutrients

**Intermittent Fasting Approaches**:
- Time-restricted eating: 8-hour eating window
- Alternate day fasting: 500-600 kcal on fast days
- Requires careful medication adjustment
- Monitor for hypoglycemia

## Pediatric Diabetes Management

**Age-Specific Considerations**:
- Toddlers: Unpredictable eating patterns
- School-age: School meal planning, activity adjustments
- Adolescents: Peer influence, growth spurts, hormonal changes

**Carbohydrate Counting Education**:
- Age-appropriate teaching methods
- Family involvement
- School staff education
- Emergency protocols

**Psychosocial Support**:
- Diabetes distress screening
- Family therapy if needed
- Support groups
- Transition planning to adult care

## Emerging Research and Technologies

**Digital Health Tools**:
- Mobile apps for carbohydrate counting
- Telehealth for remote monitoring
- Automated insulin dose calculators
- Food recognition technology

**Personalized Nutrition**:
- Genetic testing for dietary response
- Gut microbiome analysis
- Continuous glucose monitoring patterns
- Individualized carbohydrate thresholds

**Novel Dietary Patterns**:
- Low carbohydrate diets: <130 g/day
- Ketogenic diets: 20-50 g carbohydrate/day
- Vegan/plant-based diets: Improved insulin sensitivity
- Mediterranean diet: Proven benefits

**Pharmaconutrition**:
- Cinnamon: May modestly lower glucose
- Berberine: Comparable to metformin in some studies
- Chromium: May improve insulin sensitivity
- Magnesium: Important for glucose metabolism

## Patient Education and Support

**Self-Management Education**:
- Diabetes self-management education and support (DSMES)
- Certified Diabetes Care and Education Specialist (CDCES)
- Individualized education plans
- Ongoing support and follow-up

**Behavior Change Strategies**:
- Motivational interviewing
- Goal setting
- Problem-solving skills
- Relapse prevention

**Cultural Competence**:
- Traditional food adaptations
- Language-appropriate materials
- Respect for cultural practices
- Family-centered approaches

**Quality of Life Considerations**:
- Flexible eating patterns
- Dining out strategies
- Special occasion planning
- Travel considerations

**Monitoring and Evaluation**:
- HbA1c every 3-6 months
- Self-monitoring blood glucose frequency based on regimen
- Continuous glucose monitoring metrics
- Quality of life assessments
- Diabetes distress screening`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What HbA1c level defines diabetes diagnosis according to ADA standards?",
          options: [
            "≥5.7%",
            "≥6.0%",
            "≥6.5%",
            "≥7.0%"
          ],
          correctAnswer: 2,
          explanation: "Diabetes is diagnosed at HbA1c ≥6.5% according to ADA diagnostic criteria."
        },
        {
          id: 2,
          question: "What is the prediabetes range for fasting plasma glucose?",
          options: [
            "90-99 mg/dL",
            "100-125 mg/dL",
            "110-125 mg/dL",
            "126-139 mg/dL"
          ],
          correctAnswer: 1,
          explanation: "Prediabetes is defined as fasting plasma glucose of 100-125 mg/dL."
        },
        {
          id: 3,
          question: "How many grams of carbohydrates equal one carbohydrate choice?",
          options: [
            "5 g",
            "10 g",
            "15 g",
            "20 g"
          ],
          correctAnswer: 2,
          explanation: "One carbohydrate choice equals 15 grams of carbohydrates in carbohydrate counting."
        },
        {
          id: 4,
          question: "What glycemic index value defines low GI foods?",
          options: [
            "≤40",
            "≤55",
            "≤70",
            "≤85"
          ],
          correctAnswer: 1,
          explanation: "Low glycemic index foods have a GI value of ≤55."
        },
        {
          id: 5,
          question: "What percentage of total calories should come from carbohydrates in diabetes management?",
          options: [
            "30-40%",
            "35-50%",
            "45-65%",
            "55-75%"
          ],
          correctAnswer: 2,
          explanation: "Carbohydrates should provide 45-65% of total calories in diabetes medical nutrition therapy."
        },
        {
          id: 6,
          question: "What is the 'Rule of 15' used for in diabetes management?",
          options: [
            "Weight loss calculation",
            "Carbohydrate counting",
            "Hypoglycemia treatment",
            "Insulin dosing"
          ],
          correctAnswer: 2,
          explanation: "The Rule of 15 refers to treating hypoglycemia: 15g fast-acting carbohydrate, wait 15 minutes, recheck."
        },
        {
          id: 7,
          question: "What is the initial weight loss goal for type 2 diabetes management?",
          options: [
            "2-3%",
            "5-7%",
            "8-10%",
            "10-15%"
          ],
          correctAnswer: 1,
          explanation: "Initial weight loss goal for type 2 diabetes is 5-7% of body weight, which significantly improves glycemic control."
        },
        {
          id: 8,
          question: "What is the diagnostic fasting glucose level for gestational diabetes?",
          options: [
            "≥85 mg/dL",
            "≥90 mg/dL",
            "≥95 mg/dL",
            "≥100 mg/dL"
          ],
          correctAnswer: 2,
          explanation: "Gestational diabetes is diagnosed with fasting glucose ≥95 mg/dL on 3-hour OGTT."
        },
        {
          id: 9,
          question: "How much carbohydrate is typically recommended for a bedtime snack in gestational diabetes?",
          options: [
            "0-15 g",
            "15-30 g",
            "30-45 g",
            "45-60 g"
          ],
          correctAnswer: 1,
          explanation: "A bedtime snack of 15-30 g carbohydrate helps prevent overnight ketosis in gestational diabetes."
        },
        {
          id: 10,
          question: "What protein intake is recommended for diabetic kidney disease?",
          options: [
            "0.6 g/kg/day minimum",
            "0.8 g/kg/day",
            "1.0 g/kg/day",
            "1.2 g/kg/day"
          ],
          correctAnswer: 1,
          explanation: "Diabetic kidney disease management typically includes protein restriction to 0.8 g/kg/day."
        },
        {
          id: 11,
          question: "What is the target time in range for continuous glucose monitoring?",
          options: [
            ">50%",
            ">60%",
            ">70%",
            ">80%"
          ],
          correctAnswer: 2,
          explanation: "Time in range target is >70% (glucose between 70-180 mg/dL) for optimal diabetes control."
        },
        {
          id: 12,
          question: "Which vitamin deficiency is associated with long-term metformin use?",
          options: [
            "Vitamin C",
            "Vitamin B12",
            "Vitamin D",
            "Vitamin K"
          ],
          correctAnswer: 1,
          explanation: "Long-term metformin use is associated with vitamin B12 deficiency and should be monitored."
        },
        {
          id: 13,
          question: "What is the recommended weight gain for normal weight women during pregnancy?",
          options: [
            "15-25 lb",
            "25-35 lb",
            "28-40 lb",
            "11-20 lb"
          ],
          correctAnswer: 1,
          explanation: "Normal weight women (BMI 18.5-24.9) should gain 25-35 lb during pregnancy according to IOM guidelines."
        },
        {
          id: 14,
          question: "What percentage of diabetes cases are type 2?",
          options: [
            "50-60%",
            "60-70%",
            "70-80%",
            "90-95%"
          ],
          correctAnswer: 3,
          explanation: "Type 2 diabetes accounts for 90-95% of all diabetes cases."
        },
        {
          id: 15,
          question: "What is the coefficient of variation target for glucose variability?",
          options: [
            "<20%",
            "<36%",
            "<50%",
            "<65%"
          ],
          correctAnswer: 1,
          explanation: "Glucose variability should have a coefficient of variation <36% for optimal control."
        },
        {
          id: 16,
          question: "How many abnormal values are needed on 3-hour OGTT for gestational diabetes diagnosis?",
          options: [
            "1 or more",
            "2 or more",
            "3 or more",
            "All 4"
          ],
          correctAnswer: 1,
          explanation: "Gestational diabetes is diagnosed with 2 or more abnormal values on 3-hour OGTT."
        },
        {
          id: 17,
          question: "What is the typical insulin-to-carbohydrate ratio range?",
          options: [
            "1 unit per 5-10 g",
            "1 unit per 10-15 g",
            "1 unit per 15-20 g",
            "1 unit per 20-25 g"
          ],
          correctAnswer: 1,
          explanation: "Typical insulin-to-carbohydrate ratios range from 1 unit per 10-15 g of carbohydrate."
        },
        {
          id: 18,
          question: "What dose of alpha-lipoic acid may improve diabetic neuropathy symptoms?",
          options: [
            "300 mg/day",
            "600 mg/day",
            "900 mg/day",
            "1200 mg/day"
          ],
          correctAnswer: 1,
          explanation: "600 mg/day of alpha-lipoic acid has shown benefits for diabetic neuropathy symptoms."
        },
        {
          id: 19,
          question: "What is the recommended aerobic exercise duration per week for diabetes management?",
          options: [
            "75 minutes",
            "100 minutes",
            "150 minutes",
            "200 minutes"
          ],
          correctAnswer: 2,
          explanation: "Minimum of 150 minutes of aerobic exercise per week is recommended for diabetes management."
        },
        {
          id: 20,
          question: "What glycemic load value defines low glycemic load?",
          options: [
            "≤5",
            "≤10",
            "≤15",
            "≤20"
          ],
          correctAnswer: 1,
          explanation: "Low glycemic load is defined as ≤10, calculated as (GI × carbohydrate grams) ÷ 100."
        }
      ]
    },

    // ========== MODULE 4: GASTROINTESTINAL DISORDERS NUTRITION MANAGEMENT ==========
    {
      id: 4,
      title: "Gastrointestinal Disorders Nutrition Management",
      content: `# Gastrointestinal Disorders Nutrition Management

## Learning Objectives
- Implement dietary interventions for common GI disorders
- Manage nutrition support in malabsorption syndromes
- Design therapeutic diets for inflammatory bowel disease and IBS

## Gastroesophageal Reflux Disease (GERD)

**Dietary Modifications**:
- Avoid trigger foods: Chocolate, peppermint, caffeine, alcohol, fatty foods
- Citrus and tomato products: May increase symptoms
- Carbonated beverages: Can increase gastric pressure
- Large meals: Smaller, more frequent meals recommended
- Timing: Avoid eating within 3 hours of bedtime
- Weight management: Reduce abdominal pressure

**Lifestyle Interventions**:
- Elevate head of bed: 6-8 inches
- Loose clothing: Avoid tight waistbands
- Smoking cessation: Reduces lower esophageal sphincter pressure
- Stress management: May reduce symptoms

**Medical Nutrition Therapy**:
- Low-fat diet: ≤30% calories from fat
- High-fiber diet: May improve symptoms
- Alkaline water: pH >8 may help neutralize acid
- Chewing gum: Increases saliva production and swallowing

## Peptic Ulcer Disease

**Helicobacter pylori Eradication Diet**:
- Probiotics: May improve eradication rates
- Cranberry: May inhibit H. pylori adhesion
- Broccoli sprouts: Sulforaphane may have antibacterial effects
- Green tea: Catechins may inhibit growth
- Honey: Antimicrobial properties

**Dietary Considerations**:
- Avoid irritants: Alcohol, caffeine, spicy foods during acute phase
- Regular meal pattern: Avoid prolonged fasting
- Milk misconception: Provides temporary relief but stimulates acid
- Fiber: May protect against ulcer development

**Nutrient Considerations**:
- Vitamin C: Important for collagen formation in healing
- Zinc: Supports tissue repair
- Vitamin A: Maintains mucosal integrity
- Glutamine: Fuel for intestinal cells

## Inflammatory Bowel Disease (IBD)

**Crohn's Disease vs Ulceritis**:
- Crohn's: Can affect entire GI tract, transmural inflammation
- Ulceritis: Limited to colon, mucosal inflammation only
- Nutritional implications differ based on location and severity

**Nutritional Assessment in IBD**:
- Malnutrition prevalence: 20-85% depending on disease activity
- Micronutrient deficiencies: Common due to malabsorption
- Growth failure: In pediatric IBD
- Bone health: Risk of osteopenia/osteoporosis

**Dietary Interventions**:
- Exclusive enteral nutrition: First-line therapy in pediatric Crohn's
- Specific carbohydrate diet: Eliminates complex carbohydrates
- Low FODMAP diet: For overlapping IBS symptoms
- Mediterranean diet: Anti-inflammatory benefits

**Nutrient Considerations**:
- Iron: Anemia common (both iron deficiency and anemia of chronic disease)
- Vitamin B12: Required with terminal ileum involvement/resection
- Vitamin D: Deficiency common, important for bone health and immune modulation
- Calcium: Important for bone health, may bind to medications
- Zinc: Diarrhea increases losses

## Irritable Bowel Syndrome (IBS)

**Rome IV Diagnostic Criteria**:
- Recurrent abdominal pain ≥1 day/week in last 3 months
- Associated with ≥2 of: Defecation, change in stool frequency, change in stool form
- Symptoms present for ≥6 months

**IBS Subtypes**:
- IBS-C: Constipation predominant
- IBS-D: Diarrhea predominant
- IBS-M: Mixed
- IBS-U: Unclassified

**Low FODMAP Diet Phases**:
1. Elimination: 2-6 weeks strict low FODMAP
2. Reintroduction: Systematic challenge of FODMAP groups
3. Personalization: Liberalize to tolerance level

**High FODMAP Foods**:
- Fructose: Honey, apples, mangoes, high fructose corn syrup
- Lactose: Milk, yogurt, soft cheeses
- Fructans: Wheat, onions, garlic
- Galacto-oligosaccharides: Legumes, some nuts
- Polyols: Stone fruits, artificial sweeteners

**Alternative Therapies**:
- Peppermint oil: 0.2-0.4 mL enteric-coated capsules TID
- Fiber supplementation: Psyllium for IBS-C, avoid bran
- Probiotics: Specific strains (Bifidobacterium infantis 35624)
- Gut-directed hypnotherapy: Effective for some patients

## Celiac Disease

**Diagnostic Criteria**:
- Positive serology: tTG-IgA, EMA-IgA
- Villous atrophy on duodenal biopsy
- Clinical improvement on gluten-free diet
- HLA-DQ2 or DQ8 positivity (95% of patients)

**Gluten-Free Diet Principles**:
- Avoid: Wheat, barley, rye, contaminated oats
- Safe grains: Rice, corn, quinoa, amaranth, buckwheat
- Cross-contamination prevention: Separate toasters, utensils
- Label reading: "Gluten-free" defined as <20 ppm

**Nutritional Concerns**:
- Iron deficiency anemia: Most common nutritional deficiency
- Calcium and vitamin D: Bone health
- B vitamins: Enriched wheat products are common sources
- Fiber: Often inadequate on gluten-free diet

**Non-Responsive Celiac Disease**:
- Persistent symptoms despite gluten-free diet
- Causes: Accidental gluten exposure, refractory disease, other conditions
- Evaluation: Repeat endoscopy, capsule endoscopy, dietitian review

## Short Bowel Syndrome

**Anatomical Considerations**:
- Length of remaining bowel
- Presence of ileum and ileocecal valve
- Colon continuity
- Adaptation potential

**Nutrition Management Phases**:
1. Acute: Parenteral nutrition, minimal enteral nutrition
2. Adaptation: Gradual increase in enteral nutrition
3. Maintenance: Oral diet, possible reduction/cessation of PN

**Dietary Strategies**:
- Small, frequent meals
- Oral rehydration solutions
- Soluble fiber: May improve water absorption
- Medium-chain triglycerides: Absorbed without bile acids
- Oxalate restriction: If colon present and fat malabsorption

**Complications Management**:
- D-lactic acidosis: Carbohydrate restriction
- Renal stones: Oxalate restriction, hydration
- Liver disease: Prevent with lipid management, avoid overfeeding

## Pancreatic Disorders

**Chronic Pancreatitis Nutrition**:
- Pain management: Small, frequent low-fat meals
- Pancreatic enzyme replacement therapy: Individualized dosing
- Fat restriction: Initially 30-50 g/day, liberalize as tolerated
- Antioxidants: May reduce pain frequency

**Exocrine Pancreatic Insufficiency**:
- Enzyme dosing: 500-2500 lipase units/kg/meal
- Timing: With first bite of food, additional with snacks
- Acid suppression: May improve enzyme efficacy
- Monitoring: Stool fat, weight, nutritional markers

**Nutritional Deficiencies**:
- Fat-soluble vitamins: A, D, E, K
- Vitamin B12: Requires intact pancreatic enzymes for absorption
- Magnesium, zinc, selenium: May be deficient
- Essential fatty acids: With severe fat malabsorption

## Liver Disease Nutrition

**Cirrhosis Nutritional Assessment**:
- Sarcopenia: Common even with normal BMI
- Handgrip strength: Simple assessment tool
- Phase angle: Bioimpedance measure of cellular health
- Nutritional Risk Screening: High prevalence of malnutrition

**Nutritional Requirements**:
- Energy: 35-40 kcal/kg/day (higher needs)
- Protein: 1.2-1.5 g/kg/day (counteracts muscle wasting)
- Late evening snack: Prevents overnight catabolism
- Branched-chain amino acids: May be beneficial in hepatic encephalopathy

**Hepatic Encephalopathy Management**:
- Protein restriction: No longer recommended
- Vegetable protein: May be better tolerated than animal protein
- Probiotics: May reduce ammonia production
- Fiber: Increases nitrogen excretion in stool

**Ascites Management**:
- Sodium restriction: 2000 mg/day initially
- Fluid restriction: Only if hyponatremia (Na <125 mEq/L)
- Albumin: May improve diuretic response
- Monitor: Weight, abdominal girth, electrolytes

## Food Allergies and Intolerances

**Common Food Allergens** (Top 8):
1. Milk
2. Eggs
3. Peanuts
4. Tree nuts
5. Soy
6. Wheat
7. Fish
8. Shellfish

**Elimination Diet Process**:
1. Comprehensive history
2. Strict elimination (2-6 weeks)
3. Systematic reintroduction
4. Long-term management plan

**Nutritional Concerns**:
- Multiple food allergies: Risk of inadequate intake
- Calcium: With dairy avoidance
- Protein: With multiple protein source restrictions
- Variety: Ensuring diverse diet within restrictions

**Eosinophilic Esophagitis**:
- Trigger foods: Often multiple
- Elemental diet: Most effective but challenging
- Six-food elimination diet: Dairy, wheat, egg, soy, nuts, seafood
- Reintroduction: One food at a time with endoscopic evaluation

## Functional Gastrointestinal Disorders

**Gastroparesis Management**:
- Small, frequent meals: 4-6 per day
- Low-fat, low-fiber: Slows gastric emptying
- Liquid calories: Often better tolerated
- Blood glucose control: Hyperglycemia slows emptying

**Small Intestinal Bacterial Overgrowth (SIBO)**:
- Dietary approaches: Elemental diet, specific carbohydrate diet, low FODMAP
- Prokinetics: May prevent recurrence
- Probiotics: Controversial, may help or worsen
- Antibiotic therapy: Often required with dietary management

**Chronic Constipation**:
- Fiber: Gradual increase to 25-30 g/day
- Fluids: 1.5-2 L/day minimum
- Physical activity: Promotes motility
- Prunes: Natural laxative effect

**Evidence-Based Practice**:
- Systematic reviews of dietary interventions
- Quality of life measures
- Patient-reported outcomes
- Long-term follow-up data

**Patient Education**:
- Food-symptom diaries
- Label reading skills
- Cooking modifications
- Dining out strategies
- Travel planning

**Multidisciplinary Approach**:
- Gastroenterologist collaboration
- Psychology/psychiatry for brain-gut axis
- Physical therapy for pelvic floor disorders
- Social work for quality of life issues

**Emerging Research**:
- Microbiome-based interventions
- Fecal microbiota transplantation
- Dietary patterns beyond single nutrients
- Genetic influences on food tolerances`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "How long before bedtime should GERD patients avoid eating?",
          options: [
            "1 hour",
            "2 hours",
            "3 hours",
            "4 hours"
          ],
          correctAnswer: 2,
          explanation: "GERD patients should avoid eating within 3 hours of bedtime to reduce nighttime symptoms."
        },
        {
          id: 2,
          question: "Which compound in broccoli sprouts may have antibacterial effects against H. pylori?",
          options: [
            "Quercetin",
            "Sulforaphane",
            "Curcumin",
            "Resveratrol"
          ],
          correctAnswer: 1,
          explanation: "Sulforaphane in broccoli sprouts may have antibacterial effects against H. pylori."
        },
        {
          id: 3,
          question: "What is the prevalence range of malnutrition in inflammatory bowel disease?",
          options: [
            "5-15%",
            "20-85%",
            "90-95%",
            "95-100%"
          ],
          correctAnswer: 1,
          explanation: "Malnutrition affects 20-85% of IBD patients depending on disease activity and location."
        },
        {
          id: 4,
          question: "Which vitamin deficiency is most common in celiac disease at diagnosis?",
          options: [
            "Vitamin C",
            "Vitamin D",
            "Iron (causing anemia)",
            "Vitamin B12"
          ],
          correctAnswer: 2,
          explanation: "Iron deficiency anemia is the most common nutritional deficiency in newly diagnosed celiac disease."
        },
        {
          id: 5,
          question: "What is the gluten-free threshold defined as in ppm?",
          options: [
            "<5 ppm",
            "<10 ppm",
            "<20 ppm",
            "<50 ppm"
          ],
          correctAnswer: 2,
          explanation: "Gluten-free is defined as containing less than 20 parts per million of gluten."
        },
        {
          id: 6,
          question: "How long is the elimination phase of the low FODMAP diet typically?",
          options: [
            "1-2 weeks",
            "2-6 weeks",
            "6-8 weeks",
            "8-12 weeks"
          ],
          correctAnswer: 1,
          explanation: "The elimination phase of the low FODMAP diet typically lasts 2-6 weeks."
        },
        {
          id: 7,
          question: "Which IBS subtype would benefit most from psyllium supplementation?",
          options: [
            "IBS-C",
            "IBS-D",
            "IBS-M",
            "IBS-U"
          ],
          correctAnswer: 0,
          explanation: "Psyllium supplementation is most beneficial for IBS-C (constipation-predominant)."
        },
        {
          id: 8,
          question: "What is the first-line therapy for pediatric Crohn's disease?",
          options: [
            "Corticosteroids",
            "Exclusive enteral nutrition",
            "Immunomodulators",
            "Biologics"
          ],
          correctAnswer: 1,
          explanation: "Exclusive enteral nutrition is first-line therapy for pediatric Crohn's disease."
        },
        {
          id: 9,
          question: "What protein intake is recommended for cirrhosis patients to prevent muscle wasting?",
          options: [
            "0.8-1.0 g/kg/day",
            "1.0-1.2 g/kg/day",
            "1.2-1.5 g/kg/day",
            "1.5-2.0 g/kg/day"
          ],
          correctAnswer: 2,
          explanation: "Cirrhosis patients require 1.2-1.5 g/kg/day of protein to prevent muscle wasting."
        },
        {
          id: 10,
          question: "What sodium restriction is typically recommended for ascites management?",
          options: [
            "1000 mg/day",
            "2000 mg/day",
            "3000 mg/day",
            "No restriction needed"
          ],
          correctAnswer: 1,
          explanation: "Initial sodium restriction for ascites management is typically 2000 mg/day."
        },
        {
          id: 11,
          question: "Which pancreatic enzyme dose range is typical for meals in pancreatic insufficiency?",
          options: [
            "100-500 lipase units/kg/meal",
            "500-2500 lipase units/kg/meal",
            "2500-5000 lipase units/kg/meal",
            "5000-7500 lipase units/kg/meal"
          ],
          correctAnswer: 1,
          explanation: "Typical pancreatic enzyme dosing is 500-2500 lipase units/kg/meal."
        },
        {
          id: 12,
          question: "How many foods are eliminated in the six-food elimination diet for eosinophilic esophagitis?",
          options: [
            "4 foods",
            "6 foods",
            "8 foods",
            "10 foods"
          ],
          correctAnswer: 1,
          explanation: "The six-food elimination diet removes dairy, wheat, egg, soy, nuts, and seafood."
        },
        {
          id: 13,
          question: "What percentage of celiac disease patients are HLA-DQ2 or DQ8 positive?",
          options: [
            "75%",
            "85%",
            "95%",
            "99%"
          ],
          correctAnswer: 2,
          explanation: "Approximately 95% of celiac disease patients are positive for HLA-DQ2 or DQ8."
        },
        {
          id: 14,
          question: "Which dietary component should gastroparesis patients limit?",
          options: [
            "Protein",
            "Fat and fiber",
            "Carbohydrates",
            "Fluids"
          ],
          correctAnswer: 1,
          explanation: "Gastroparesis patients should limit fat and fiber as both slow gastric emptying."
        },
        {
          id: 15,
          question: "What is the recommended daily fiber intake for chronic constipation?",
          options: [
            "15-20 g/day",
            "20-25 g/day",
            "25-30 g/day",
            "30-35 g/day"
          ],
          correctAnswer: 2,
          explanation: "Chronic constipation management typically includes 25-30 g of fiber per day."
        },
        {
          id: 16,
          question: "Which vitamin requires intact pancreatic enzymes for absorption?",
          options: [
            "Vitamin A",
            "Vitamin B12",
            "Vitamin C",
            "Vitamin D"
          ],
          correctAnswer: 1,
          explanation: "Vitamin B12 requires intact pancreatic enzymes for absorption from food."
        },
        {
          id: 17,
          question: "What type of protein may be better tolerated in hepatic encephalopathy?",
          options: [
            "Animal protein",
            "Vegetable protein",
            "Whey protein",
            "Casein protein"
          ],
          correctAnswer: 1,
          explanation: "Vegetable protein may be better tolerated than animal protein in hepatic encephalopathy."
        },
        {
          id: 18,
          question: "Which probiotic strain has evidence for IBS benefit?",
          options: [
            "Lactobacillus acidophilus",
            "Bifidobacterium infantis 35624",
            "Saccharomyces boulardii",
            "Lactobacillus rhamnosus GG"
          ],
          correctAnswer: 1,
          explanation: "Bifidobacterium infantis 35624 has specific evidence for IBS symptom improvement."
        },
        {
          id: 19,
          question: "What is the minimum symptom duration for IBS diagnosis according to Rome IV criteria?",
          options: [
            "3 months",
            "6 months",
            "9 months",
            "12 months"
          ],
          correctAnswer: 1,
          explanation: "Rome IV criteria require symptoms for at least 6 months for IBS diagnosis."
        },
        {
          id: 20,
          question: "Which dietary pattern has shown anti-inflammatory benefits for IBD?",
          options: [
            "Ketogenic diet",
            "Mediterranean diet",
            "Paleo diet",
            "Atkins diet"
          ],
          correctAnswer: 1,
          explanation: "The Mediterranean diet has shown anti-inflammatory benefits that may help in IBD management."
        }
      ]
    },

    // ========== MODULE 5: RENAL NUTRITION THERAPY ==========
    {
      id: 5,
      title: "Renal Nutrition Therapy",
      content: `# Renal Nutrition Therapy

## Learning Objectives
- Implement evidence-based nutrition interventions for chronic kidney disease
- Manage electrolyte imbalances in renal disorders
- Design therapeutic diets for dialysis and transplant patients

## Chronic Kidney Disease (CKD) Staging

**KDIGO Classification**:
- Stage 1: Kidney damage with normal GFR (≥90 mL/min)
- Stage 2: Mild reduction GFR (60-89 mL/min)
- Stage 3a: Mild-moderate reduction GFR (45-59 mL/min)
- Stage 3b: Moderate-severe reduction GFR (30-44 mL/min)
- Stage 4: Severe reduction GFR (15-29 mL/min)
- Stage 5: Kidney failure (GFR <15 mL/min or dialysis)

**Nutrition Assessment in CKD**:
- Protein-energy wasting: Prevalence 20-80% in advanced CKD
- Anthropometrics: Weight, BMI, muscle mass assessment
- Biochemical: Albumin, prealbumin, cholesterol (inverse epidemiology)
- Dietary: Protein intake, energy intake, micronutrient status
- Clinical: Comorbidities, medications, dialysis adequacy

## Protein Management in CKD

**Pre-dialysis CKD (Stages 3-4)**:
- Recommended: 0.6-0.8 g/kg/day
- Must be adequate in essential amino acids
- Monitor for protein-energy wasting
- Consider supplemented very low protein diets (sVLPD) with ketoanalogues

**Hemodialysis Patients**:
- Recommended: 1.2 g/kg/day
- Higher requirements due to dialysis losses
- High biological value protein emphasized
- Intradialytic parenteral nutrition if oral intake inadequate

**Peritoneal Dialysis Patients**:
- Recommended: 1.2-1.3 g/kg/day
- Additional losses through dialysate (5-15 g/day)
- Protein losses increase with peritonitis

**Kidney Transplant**:
- Acute phase: 1.3-1.5 g/kg/day for wound healing
- Maintenance: 0.8-1.0 g/kg/day
- Monitor for weight gain and metabolic syndrome

## Electrolyte Management

**Potassium Restrictions**:
- CKD Stage 3-4: Individualized based on serum levels
- CKD Stage 5/ESRD: Typically 2000-3000 mg/day
- Dialysis: Between dialysis sessions

**High Potassium Foods**:
- Fruits: Bananas, oranges, melons, dried fruits
- Vegetables: Potatoes, tomatoes, spinach, avocados
- Legumes: Beans, lentils
- Dairy: Milk, yogurt
- Nuts and seeds

**Potassium Reduction Techniques**:
- Boiling vegetables: Reduces potassium by 50-75%
- Avoid salt substitutes (potassium chloride)
- Limit high-potassium fruits and vegetables
- Read labels for potassium additives

**Phosphorus Management**:
- CKD Stage 3-4: 800-1000 mg/day
- CKD Stage 5/ESRD: 800-1000 mg/day
- Dialysis: Strict restriction essential

**Phosphorus Sources**:
- High bioavailability: Animal proteins, dairy
- Additive phosphorus: Processed foods, colas (up to 100% absorbed)
- Plant-based phosphorus: Lower bioavailability (20-50% absorbed)

**Phosphorus Binders**:
- Calcium-based: Calcium carbonate, calcium acetate (with meals)
- Non-calcium based: Sevelamer, lanthanum
- Iron-based: Ferric citrate
- Timing: With meals and snacks containing phosphorus

**Sodium Management**:
- General restriction: 2000-2300 mg/day
- With hypertension/fluid overload: 1500-2000 mg/day
- Dialysis: Crucial for fluid management

## Fluid Management

**Pre-dialysis CKD**:
- Generally no restriction unless edema or hyponatremia
- Monitor weight and blood pressure
- Individualize based on urine output

**Hemodialysis Patients**:
- Restriction based on urine output
- Typical: 1000 mL + urine output
- Interdialytic weight gain target: 1-1.5 kg/day (3-4.5% of body weight)

**Peritoneal Dialysis Patients**:
- Generally more liberal fluid allowance
- Monitor with daily weights
- Adjust dialysis prescription for fluid removal

**Fluid Calculation**:
- All fluids count: Water, juice, soup, ice cream, gelatin
- Medications in liquid form
- Fruits and vegetables with high water content

## Energy Requirements

**CKD Non-dialysis**:
- Age <60: 35 kcal/kg/day
- Age ≥60: 30-35 kcal/kg/day
- Adjust for physical activity level

**Dialysis Patients**:
- Hemodialysis: 35 kcal/kg/day
- Peritoneal dialysis: 35 kcal/kg/day (includes glucose absorption from dialysate)
- Account for dialysis day vs non-dialysis day differences

**Underweight/Older Patients**:
- May require 35-40 kcal/kg/day
- Consider oral nutritional supplements
- Monitor for protein-energy wasting

**Obesity in CKD**:
- Weight loss beneficial but must preserve muscle mass
- Moderate calorie restriction
- Adequate protein intake
- Monitor for metabolic benefits vs nutritional risks

## Mineral and Bone Disorder

**CKD-MBD Parameters**:
- Calcium: Maintain in normal range (8.5-10.2 mg/dL)
- Phosphorus: Target 3.5-5.5 mg/dL
- PTH: Target based on CKD stage
- Vitamin D: Maintain 25(OH)D >30 ng/mL

**Vitamin D Management**:
- Nutritional vitamin D: Cholecalciferol (D3) or ergocalciferol (D2)
- Active vitamin D: Calcitriol, paricalcitol, doxercalciferol
- Monitoring: 25(OH)D, calcium, phosphorus, PTH

**Calcium Management**:
- Dietary calcium: 800-1000 mg/day (avoid excessive)
- Calcium-based binders: Provide additional calcium
- Non-calcium binders: Preferred with hypercalcemia or vascular calcification

**Aluminum Toxicity Prevention**:
- Avoid aluminum-containing medications
- Limit aluminum exposure from water or other sources
- Monitor for aluminum toxicity symptoms

## Anemia Management

**Iron Deficiency in CKD**:
- Absolute deficiency: Low ferritin (<100 ng/mL in HD, <30 in non-dialysis)
- Functional deficiency: Ferritin >100 but TSAT <20%
- Oral vs intravenous iron supplementation

**Erythropoiesis-Stimulating Agents (ESA)**:
- Requires adequate iron stores
- Target hemoglobin: 10-11 g/dL (avoid >11.5 g/dL)
- Monitor iron parameters monthly

**Other Nutrients for Anemia**:
- Vitamin B12 and folate: Ensure adequacy
- Vitamin C: Enhances iron absorption (avoid excessive)
- Copper and zinc: Required for hemoglobin synthesis

## Metabolic Acidosis Management

**Bicarbonate Targets**:
- Serum bicarbonate: Maintain ≥22 mEq/L
- Oral bicarbonate supplementation if needed
- Dietary approaches: Increase fruits and vegetables

**Dietary Acid Load**:
- High acid-producing foods: Meat, grains, cheese
- High alkali-producing foods: Fruits, vegetables
- Potential renal acid load (PRAL) concept
- More plant-based diets may help

**Consequences of Acidosis**:
- Muscle wasting
- Bone disease progression
- Insulin resistance
- Increased mortality

## Special Considerations

**Diabetes and CKD**:
- Tight glucose control: HbA1c 7-8% (individualized)
- Medication adjustments for renal function
- Protein restriction still applies
- Monitor for hypoglycemia

**Cardiovascular Disease**:
- Leading cause of death in CKD
- Lipid management: Statins indicated
- Blood pressure control: <130/80 mmHg
- Fluid and sodium management critical

**Pediatric CKD**:
- Growth and development paramount
- Higher protein and energy needs
- Mineral management for bone development
- Psychosocial considerations

**Geriatric CKD**:
- Frailty common
- Polypharmacy considerations
- Social isolation affecting nutrition
- End-of-life nutrition decisions

## Dialysis Nutrition

**Hemodialysis Timing**:
- Eat during dialysis: May help with nutritional intake
- Avoid large meals immediately before dialysis (hypotension risk)
- Post-dialysis meals: Important for nutrient replenishment

**Peritoneal Dialysis Nutrition**:
- Glucose absorption: 150-300 kcal/day from dialysate
- Protein losses: 5-15 g/day (higher with peritonitis)
- Appetite suppression from abdominal fullness
- Monitor for weight gain and metabolic changes

**Intradialytic Parenteral Nutrition (IDPN)**:
- For malnourished hemodialysis patients
- Provides nutrients during dialysis
- Must continue oral intake as well
- Monitor for refeeding syndrome

## Transplantation Nutrition

**Immediate Post-transplant**:
- High protein: 1.3-1.5 g/kg/day for wound healing
- Monitor for refeeding syndrome in malnourished
- Immunosuppression side effects affecting nutrition
- Steroid-induced hyperglycemia and appetite increase

**Long-term Post-transplant**:
- Weight management critical
- Cardiovascular disease prevention
- Diabetes management
- Bone health maintenance

**Immunosuppression Nutrition Interactions**:
- Cyclosporine/tacrolimus: Grapefruit juice interaction
- Corticosteroids: Increased appetite, hyperglycemia, bone loss
- mTOR inhibitors: Hyperlipidemia, poor wound healing
- Mycophenolate: GI side effects affecting intake

## Nutrition Support in Renal Failure

**Enteral Nutrition**:
- Specialized renal formulas available
- Volume restrictions may limit use
- Monitor electrolytes closely
- Adjust formula based on laboratory values

**Parenteral Nutrition**:
- Volume restriction challenging
- Electrolyte management crucial
- Specialized renal formulas available
- Monitor for metabolic complications

**Oral Nutritional Supplements**:
- Renal-specific vs standard supplements
- Timing around dialysis
- Palatability considerations
- Cost and coverage issues

## Patient Education and Counseling

**Dietary Adherence Strategies**:
- Practical meal planning
- Label reading education
- Cooking demonstrations
- Support groups

**Monitoring Parameters**:
- Monthly laboratories for dialysis patients
- Quarterly for CKD non-dialysis
- Weight and blood pressure monitoring
- Dietary intake assessments

**Quality of Life Considerations**:
- Food enjoyment within restrictions
- Social eating situations
- Cultural food adaptations
- Psychological impact of dietary restrictions

**Emerging Research**:
- Plant-dominant low-protein diets
- Gut microbiome in CKD
- Nutritional interventions to slow progression
- Personalized nutrition approaches

**Multidisciplinary Team**:
- Nephrologist collaboration
- Dialysis nursing coordination
- Social work support
- Mental health considerations`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What GFR defines Stage 5 CKD (kidney failure)?",
          options: [
            "<30 mL/min",
            "<25 mL/min",
            "<20 mL/min",
            "<15 mL/min"
          ],
          correctAnswer: 3,
          explanation: "Stage 5 CKD is defined as GFR <15 mL/min or requiring dialysis."
        },
        {
          id: 2,
          question: "What protein intake is recommended for pre-dialysis CKD (Stages 3-4)?",
          options: [
            "0.4-0.6 g/kg/day",
            "0.6-0.8 g/kg/day",
            "0.8-1.0 g/kg/day",
            "1.0-1.2 g/kg/day"
          ],
          correctAnswer: 1,
          explanation: "Pre-dialysis CKD patients should consume 0.6-0.8 g/kg/day of protein."
        },
        {
          id: 3,
          question: "What protein intake is recommended for hemodialysis patients?",
          options: [
            "0.8-1.0 g/kg/day",
            "1.0-1.2 g/kg/day",
            "1.2 g/kg/day",
            "1.3-1.5 g/kg/day"
          ],
          correctAnswer: 2,
          explanation: "Hemodialysis patients require 1.2 g/kg/day of protein to compensate for dialysis losses."
        },
        {
          id: 4,
          question: "What is the typical potassium restriction for dialysis patients?",
          options: [
            "1000-2000 mg/day",
            "2000-3000 mg/day",
            "3000-4000 mg/day",
            "No restriction needed"
          ],
          correctAnswer: 1,
          explanation: "Dialysis patients typically restrict potassium to 2000-3000 mg/day."
        },
        {
          id: 5,
          question: "By what percentage can boiling reduce potassium in vegetables?",
          options: [
            "25-50%",
            "50-75%",
            "75-90%",
            "No reduction"
          ],
          correctAnswer: 1,
          explanation: "Boiling vegetables can reduce potassium content by 50-75% through leaching into cooking water."
        },
        {
          id: 6,
          question: "What phosphorus restriction is recommended for CKD Stage 5 patients?",
          options: [
            "400-600 mg/day",
            "600-800 mg/day",
            "800-1000 mg/day",
            "1000-1200 mg/day"
          ],
          correctAnswer: 2,
          explanation: "CKD Stage 5 patients should restrict phosphorus to 800-1000 mg/day."
        },
        {
          id: 7,
          question: "What is the bioavailability of phosphorus from plant-based foods?",
          options: [
            "10-30%",
            "20-50%",
            "50-70%",
            "70-90%"
          ],
          correctAnswer: 1,
          explanation: "Plant-based phosphorus has lower bioavailability (20-50%) compared to animal sources."
        },
        {
          id: 8,
          question: "What is the target interdialytic weight gain for hemodialysis patients?",
          options: [
            "0.5-1.0 kg/day",
            "1.0-1.5 kg/day",
            "1.5-2.0 kg/day",
            "2.0-2.5 kg/day"
          ],
          correctAnswer: 1,
          explanation: "Target interdialytic weight gain is 1.0-1.5 kg/day (3-4.5% of body weight)."
        },
        {
          id: 9,
          question: "What serum bicarbonate level should be maintained in CKD?",
          options: [
            "≥18 mEq/L",
            "≥20 mEq/L",
            "≥22 mEq/L",
            "≥24 mEq/L"
          ],
          correctAnswer: 2,
          explanation: "Serum bicarbonate should be maintained at ≥22 mEq/L to prevent metabolic acidosis."
        },
        {
          id: 10,
          question: "What is the target hemoglobin range for ESA therapy in CKD?",
          options: [
            "9-10 g/dL",
            "10-11 g/dL",
            "11-12 g/dL",
            "12-13 g/dL"
          ],
          correctAnswer: 1,
          explanation: "ESA therapy should target hemoglobin 10-11 g/dL, avoiding levels above 11.5 g/dL."
        },
        {
          id: 11,
          question: "What ferritin level indicates absolute iron deficiency in hemodialysis patients?",
          options: [
            "<50 ng/mL",
            "<100 ng/mL",
            "<200 ng/mL",
            "<300 ng/mL"
          ],
          correctAnswer: 1,
          explanation: "In hemodialysis patients, ferritin <100 ng/mL indicates absolute iron deficiency."
        },
        {
          id: 12,
          question: "How much protein do peritoneal dialysis patients typically lose per day?",
          options: [
            "1-3 g/day",
            "5-15 g/day",
            "15-25 g/day",
            "25-35 g/day"
          ],
          correctAnswer: 1,
          explanation: "Peritoneal dialysis patients lose 5-15 g of protein per day through dialysate."
        },
        {
          id: 13,
          question: "What protein intake is recommended immediately post-kidney transplant?",
          options: [
            "1.0-1.2 g/kg/day",
            "1.2-1.3 g/kg/day",
            "1.3-1.5 g/kg/day",
            "1.5-2.0 g/kg/day"
          ],
          correctAnswer: 2,
          explanation: "Immediately post-transplant, patients need 1.3-1.5 g/kg/day for wound healing."
        },
        {
          id: 14,
          question: "Which immunosuppressant has a grapefruit juice interaction?",
          options: [
            "Prednisone",
            "Cyclosporine/tacrolimus",
            "Mycophenolate",
            "Azathioprine"
          ],
          correctAnswer: 1,
          explanation: "Cyclosporine and tacrolimus levels are increased by grapefruit juice through CYP3A4 inhibition."
        },
        {
          id: 15,
          question: "What is the energy requirement for CKD patients under age 60?",
          options: [
            "25-30 kcal/kg/day",
            "30-35 kcal/kg/day",
            "35 kcal/kg/day",
            "40 kcal/kg/day"
          ],
          correctAnswer: 2,
          explanation: "CKD patients under age 60 require 35 kcal/kg/day for energy needs."
        },
        {
          id: 16,
          question: "What percentage of interdialytic weight gain is recommended?",
          options: [
            "1-2% of body weight",
            "3-4.5% of body weight",
            "5-6% of body weight",
            "7-8% of body weight"
          ],
          correctAnswer: 1,
          explanation: "Interdialytic weight gain should be limited to 3-4.5% of body weight."
        },
        {
          id: 17,
          question: "Which phosphorus binder is calcium-based?",
          options: [
            "Sevelamer",
            "Calcium acetate",
            "Lanthanum",
            "Ferric citrate"
          ],
          correctAnswer: 1,
          explanation: "Calcium acetate is a calcium-based phosphorus binder taken with meals."
        },
        {
          id: 18,
          question: "What is the target range for serum phosphorus in CKD-MBD?",
          options: [
            "2.5-4.0 mg/dL",
            "3.5-5.5 mg/dL",
            "4.5-6.0 mg/dL",
            "5.5-7.0 mg/dL"
          ],
          correctAnswer: 1,
          explanation: "Target serum phosphorus range in CKD-MBD is 3.5-5.5 mg/dL."
        },
        {
          id: 19,
          question: "How many calories do peritoneal dialysis patients typically absorb from dialysate daily?",
          options: [
            "50-100 kcal",
            "150-300 kcal",
            "400-500 kcal",
            "600-800 kcal"
          ],
          correctAnswer: 1,
          explanation: "Peritoneal dialysis patients absorb 150-300 kcal daily from glucose in dialysate."
        },
        {
          id: 20,
          question: "What HbA1c range is generally targeted in diabetes with CKD?",
          options: [
            "6-7%",
            "7-8%",
            "8-9%",
            "9-10%"
          ],
          correctAnswer: 1,
          explanation: "HbA1c target in diabetes with CKD is generally 7-8%, individualized to avoid hypoglycemia."
        }
      ]
    },

    // ========== MODULE 6: ONCOLOGY NUTRITION & PALLIATIVE CARE ==========
    {
      id: 6,
      title: "Oncology Nutrition & Palliative Care",
      content: `# Oncology Nutrition & Palliative Care

## Learning Objectives
- Implement evidence-based nutrition interventions for cancer patients
- Manage cancer cachexia and treatment side effects
- Design appropriate nutrition support in palliative and end-of-life care

## Cancer Cachexia

**Definition and Diagnostic Criteria**:
- Involuntary weight loss >5% over 6 months
- Or BMI <20 with >2% weight loss
- Or appendicular skeletal muscle index consistent with sarcopenia with >2% weight loss

**Three Stages of Cachexia**:
1. Pre-cachexia: Weight loss ≤5%, anorexia, metabolic changes
2. Cachexia: Weight loss >5%, or BMI <20 with >2% weight loss
3. Refractory cachexia: Catabolic, not responsive to treatment, survival <3 months

**Pathophysiology**:
- Inflammatory cytokines: TNF-α, IL-1, IL-6, IFN-γ
- Metabolic alterations: Increased energy expenditure, insulin resistance
- Altered protein metabolism: Increased muscle breakdown, decreased synthesis
- Neurohormonal changes: Altered appetite regulation

**Nutrition Assessment**:
- Patient-Generated Subjective Global Assessment (PG-SGA)
- Weight history: Pattern and percentage of loss
- Muscle mass assessment: CT scans, BIA, anthropometrics
- Functional status: Handgrip strength, walking speed
- Laboratory: Inflammatory markers (CRP), albumin, prealbumin

## Nutrition Interventions During Treatment

**Surgery**:
- Prehabilitation: Optimize nutrition 2-4 weeks before surgery
- Immunonutrition: Arginine, omega-3 fatty acids, nucleotides (5-7 days pre-op)
- Post-operative: Early enteral feeding when possible
- Protein requirements: 1.5-2.0 g/kg/day for wound healing

**Chemotherapy**:
- Timing of meals: Away from chemotherapy administration
- Small, frequent meals: 6-8 per day
- Protein-dense foods: Maintain muscle mass
- Hydration: Crucial for drug clearance and kidney protection

**Radiation Therapy**:
- Site-specific interventions:
  - Head/neck: Soft, moist foods; nutritional supplements; feeding tube consideration
  - Abdominal/pelvic: Low-fat, low-fiber during treatment; manage diarrhea
- Prophylactic feeding tubes: Consider for significant weight loss risk
- Oral care: Essential for maintaining intake

**Hematopoietic Stem Cell Transplant**:
- Neutropenic diet: Controversial, institution-specific
- Food safety: Critical during immunosuppression
- Mucositis management: Cold, soft, bland foods
- Graft-versus-host disease: May require specialized diets

## Symptom Management

**Nausea and Vomiting**:
- Dietary strategies: Cold, bland, dry foods
- Ginger: 1-2 g/day may help
- Small, frequent meals
- Separate liquids from solids
- Acupressure bands

**Mucositis/Stomatitis**:
- Food consistency: Soft, moist, pureed
- Temperature: Cool or room temperature
- Avoid: Acidic, spicy, rough, or salty foods
- Oral care: Before and after eating
- Nutritional supplements: High-protein, high-calorie

**Diarrhea**:
- Soluble fiber: Oats, bananas, applesauce
- Low-fat foods
- Avoid: High-fiber, gas-producing, spicy, fatty foods
- Hydration: Oral rehydration solutions
- Probiotics: Consider evidence-based strains

**Constipation**:
- Fluid: 1.5-2 L/day minimum
- Fiber: Gradual increase to tolerance
- Physical activity: As tolerated
- Medications: Stool softeners, laxatives as needed
- Prunes: Natural laxative effect

**Dysgeusia (Taste Changes)**:
- Marinate meats: Reduces metallic taste
- Use plastic utensils: If metallic taste
- Flavor enhancement: Herbs, spices, sauces
- Temperature variations: May improve tolerance
- Oral hygiene: Before eating

**Early Satiety**:
- Small, frequent meals
- Nutrient-dense foods
- Liquid nutritional supplements
- Avoid drinking with meals
- Light physical activity before eating

**Xerostomia (Dry Mouth)**:
- Moist foods: Sauces, gravies, broths
- Sugar-free gum or candies: Stimulate saliva
- Artificial saliva products
- Frequent sips of water
- Avoid dry, rough foods

## Nutrition Support in Oncology

**Oral Nutrition Supplements**:
- Indications: Inadequate oral intake, weight loss
- Types: Standard, high-protein, immunomodulating
- Timing: Between meals, not with meals
- Adherence: Flavor variety, temperature variations

**Enteral Nutrition**:
- Indications: Functioning GI tract but inadequate oral intake
- Tube types: Nasogastric, gastrostomy, jejunostomy
- Formulas: Standard, peptide-based, immunomodulating
- Monitoring: Tolerance, adequacy, complications

**Parenteral Nutrition**:
- Indications: Non-functioning GI tract, intestinal failure
- Peripheral vs central access
- Home parenteral nutrition for long-term needs
- Monitoring: Metabolic complications, liver function

**Refeeding Syndrome Prevention**:
- Risk factors: Severe malnutrition, prolonged fasting, alcoholism
- Prevention: Slow advancement of nutrition support
- Monitoring: Electrolytes (especially phosphorus, potassium, magnesium)
- Supplementation: As needed based on laboratory values

## Specific Cancer Considerations

**Head and Neck Cancers**:
- High risk of malnutrition: 30-50% at diagnosis
- Prophylactic feeding tubes: Consider for combined modality treatment
- Swallowing rehabilitation: Speech therapy involvement
- Long-term nutritional consequences

**Gastrointestinal Cancers**:
- Site-specific interventions:
  - Esophageal: Soft, moist foods; small frequent meals
  - Gastric: Small, frequent meals; vitamin B12 supplementation
  - Pancreatic: Pancreatic enzyme replacement; diabetes management
  - Colorectal: Fiber management based on location and treatments

**Lung Cancer**:
- Dyspnea affecting eating: Small, frequent meals
- Early satiety: Common with mediastinal involvement
- Steroid-induced hyperglycemia: Common with treatments
- Cachexia: Particularly severe in lung cancer

**Hematological Malignancies**:
- Neutropenia: Food safety critical
- Mucositis: Common with certain regimens
- Graft-versus-host disease: Dietary restrictions may be needed
- Long-term nutritional consequences of treatments

## Pediatric Oncology Nutrition

**Unique Considerations**:
- Growth and development: Ongoing during treatment
- Higher energy and protein needs per kg
- Taste aversions: May develop to favorite foods
- Family-centered care: Essential for success
- Long-term follow-up: Monitoring for late effects

**Nutrition Assessment**:
- Growth charts: Height, weight, BMI percentiles
- Tanner staging: Pubertal development
- Dietary intake: Often disrupted
- Psychosocial: Family dynamics, school issues

**Interventions**:
- Enteral nutrition: Often better tolerated than in adults
- Behavioral approaches: For food refusal
- School nutrition: Coordination with school staff
- Survivorship: Healthy eating for reduced late effects risk

## Integrative Oncology Nutrition

**Evidence-Based Complementary Approaches**:
- Omega-3 fatty acids: May help with cachexia
- L-carnitine: Limited evidence for fatigue
- Melatonin: Sleep regulation, possible anti-cancer effects
- Curcumin: Anti-inflammatory properties
- Mushroom extracts: Immune modulation

**Herb-Drug Interactions**:
- St. John's Wort: Reduces efficacy of many chemotherapies
- Green tea extract: May interact with certain agents
- Garlic supplements: May increase bleeding risk
- Echinacea: May interfere with immunosuppressants
- Professional guidance essential

**Mind-Body Interventions**:
- Meditation: Stress reduction, improved coping
- Yoga: Improved quality of life, reduced fatigue
- Acupuncture: Nausea management, pain control
- Music therapy: Anxiety reduction

## Palliative Care Nutrition

**Goals of Care**:
- Comfort-focused vs life-prolonging nutrition
- Patient-centered decision making
- Quality of life as primary outcome
- Ethical considerations

**Symptom Management in Advanced Disease**:
- Anorexia: Appetite stimulants (megestrol, corticosteroids)
- Early satiety: Small, nutrient-dense meals
- Constipation: Aggressive management
- Nausea: Multi-modal approaches
- Dysphagia: Texture modifications, feeding tubes considered

**Hydration at End of Life**:
- Artificial hydration: Benefits vs burdens
- Dry mouth management: Topical approaches
- Thirst vs hunger differentiation
- Cultural and family considerations

**Ethical Considerations**:
- Autonomy: Patient wishes paramount
- Beneficence: Balancing benefits and burdens
- Non-maleficence: Avoiding harm
- Justice: Equitable resource allocation
- Advanced directives: Nutrition and hydration preferences

## Communication Skills

**Difficult Conversations**:
- Prognosis discussions: Realistic expectations
- Goals of care: Evolving with disease progression
- Nutrition and hydration decisions: Sensitive approach
- Family meetings: Including all stakeholders

**Cultural Competence**:
- Food symbolism in different cultures
- Religious dietary practices
- Family roles in feeding decisions
- Communication styles

**Interprofessional Collaboration**:
- Team approach: Physicians, nurses, dietitians, social workers, chaplains
- Regular team meetings
- Consistent messaging to patients and families
- Shared decision making

## Survivorship Nutrition

**Long-Term Effects**:
- Metabolic syndrome: Common after certain treatments
- Bone health: Risk of osteoporosis
- Cardiovascular health: Increased risk
- Secondary cancers: Nutrition may modify risk

**Healthy Eating Patterns**:
- Plant-based diets: Emphasis on fruits, vegetables, whole grains
- Healthy weight maintenance
- Physical activity: Integral component
- Alcohol limitation

**Screening and Monitoring**:
- Regular nutrition assessment
- Laboratory monitoring for deficiencies
- Body composition assessment
- Quality of life measures

**Research and Innovation**:
- Personalized nutrition approaches
- Microbiome interventions
- Targeted nutritional therapies
- Digital health applications

**Quality Improvement**:
- Malnutrition screening rates
- Appropriate nutrition referrals
- Patient-reported outcomes
- Cost-effectiveness of interventions

## Emerging Research Areas

**Metabolomics and Nutrigenomics**:
- Individual metabolic profiles
- Genetic influences on nutritional needs
- Personalized supplement recommendations
- Targeted dietary patterns

**Microbiome Research**:
- Gut-brain axis in cancer symptoms
- Probiotic and prebiotic interventions
- Fecal microbiota transplantation
- Dietary influences on microbiome

**Digital Health Applications**:
- Mobile apps for symptom tracking
- Telehealth for nutrition counseling
- Wearable devices for activity monitoring
- Artificial intelligence for personalized recommendations

**Clinical Trial Design**:
- Patient-centered outcomes
- Pragmatic trial designs
- Integration with standard care
- Long-term follow-up

**Global Oncology Nutrition**:
- Resource-appropriate interventions
- Cultural adaptation of guidelines
- Capacity building in low-resource settings
- Sustainable models of care`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What percentage of weight loss over 6 months defines cancer cachexia?",
          options: [
            ">2%",
            ">3%",
            ">5%",
            ">7%"
          ],
          correctAnswer: 2,
          explanation: "Cancer cachexia is defined as involuntary weight loss >5% over 6 months."
        },
        {
          id: 2,
          question: "Which stage of cachexia is characterized as catabolic and not responsive to treatment?",
          options: [
            "Pre-cachexia",
            "Cachexia",
            "Refractory cachexia",
            "End-stage cachexia"
          ],
          correctAnswer: 2,
          explanation: "Refractory cachexia is characterized as catabolic, not responsive to treatment, with survival typically <3 months."
        },
        {
          id: 3,
          question: "What is the recommended protein intake for post-surgical cancer patients?",
          options: [
            "1.0-1.2 g/kg/day",
            "1.2-1.5 g/kg/day",
            "1.5-2.0 g/kg/day",
            "2.0-2.5 g/kg/day"
          ],
          correctAnswer: 2,
          explanation: "Post-surgical cancer patients require 1.5-2.0 g/kg/day of protein for optimal wound healing."
        },
        {
          id: 4,
          question: "How many days of immunonutrition are recommended pre-operatively?",
          options: [
            "1-2 days",
            "3-4 days",
            "5-7 days",
            "10-14 days"
          ],
          correctAnswer: 2,
          explanation: "Immunonutrition with arginine, omega-3 fatty acids, and nucleotides is recommended for 5-7 days pre-operatively."
        },
        {
          id: 5,
          question: "What dietary strategy helps manage chemotherapy-induced nausea?",
          options: [
            "Hot, spicy foods",
            "Cold, bland, dry foods",
            "Large, infrequent meals",
            "Drinking liquids with meals"
          ],
          correctAnswer: 1,
          explanation: "Cold, bland, dry foods are often better tolerated during chemotherapy-induced nausea."
        },
        {
          id: 6,
          question: "Which supplement at 1-2 g/day may help with chemotherapy-induced nausea?",
          options: [
            "Turmeric",
            "Ginger",
            "Garlic",
            "Cinnamon"
          ],
          correctAnswer: 1,
          explanation: "Ginger at 1-2 g/day may help reduce chemotherapy-induced nausea."
        },
        {
          id: 7,
          question: "What type of fiber is recommended for managing cancer treatment-related diarrhea?",
          options: [
            "Insoluble fiber",
            "Soluble fiber",
            "Resistant starch",
            "All types of fiber"
          ],
          correctAnswer: 1,
          explanation: "Soluble fiber (oats, bananas, applesauce) can help manage treatment-related diarrhea."
        },
        {
          id: 8,
          question: "What can reduce metallic taste when eating meats during cancer treatment?",
          options: [
            "Eating cold meats",
            "Marinating meats",
            "Adding extra salt",
            "Eating quickly"
          ],
          correctAnswer: 1,
          explanation: "Marinating meats can help reduce metallic taste perception during cancer treatment."
        },
        {
          id: 9,
          question: "What percentage of head and neck cancer patients are malnourished at diagnosis?",
          options: [
            "10-20%",
            "20-30%",
            "30-50%",
            "50-70%"
          ],
          correctAnswer: 2,
          explanation: "30-50% of head and neck cancer patients are malnourished at diagnosis due to location effects."
        },
        {
          id: 10,
          question: "Which herb significantly reduces the efficacy of many chemotherapy drugs?",
          options: [
            "Echinacea",
            "St. John's Wort",
            "Garlic",
            "Ginseng"
          ],
          correctAnswer: 1,
          explanation: "St. John's Wort induces CYP450 enzymes, reducing levels and efficacy of many chemotherapy drugs."
        },
        {
          id: 11,
          question: "What is the primary outcome measure in palliative care nutrition?",
          options: [
            "Weight gain",
            "Laboratory values",
            "Quality of life",
            "Survival time"
          ],
          correctAnswer: 2,
          explanation: "In palliative care, quality of life is the primary outcome measure for nutrition interventions."
        },
        {
          id: 12,
          question: "Which medication is commonly used as an appetite stimulant in palliative care?",
          options: [
            "Metoclopramide",
            "Megestrol acetate",
            "Ondansetron",
            "Loperamide"
          ],
          correctAnswer: 1,
          explanation: "Megestrol acetate is commonly used as an appetite stimulant in palliative care settings."
        },
        {
          id: 13,
          question: "What is the risk of refeeding syndrome primarily related to?",
          options: [
            "Rapid advancement of nutrition support in malnourished patients",
            "Overhydration",
            "Excessive protein intake",
            "Vitamin deficiencies"
          ],
          correctAnswer: 0,
          explanation: "Refeeding syndrome risk comes from rapid advancement of nutrition support in severely malnourished patients, causing electrolyte shifts."
        },
        {
          id: 14,
          question: "Which electrolyte is most critically monitored during refeeding?",
          options: [
            "Sodium",
            "Potassium",
            "Phosphorus",
            "Calcium"
          ],
          correctAnswer: 2,
          explanation: "Phosphorus is the most critically monitored electrolyte during refeeding due to rapid intracellular shifts."
        },
        {
          id: 15,
          question: "What assessment tool is specifically designed for oncology patients?",
          options: [
            "MUST",
            "PG-SGA",
            "NRS-2002",
            "MNA"
          ],
          correctAnswer: 1,
          explanation: "The Patient-Generated Subjective Global Assessment (PG-SGA) is specifically designed for oncology patients."
        },
        {
          id: 16,
          question: "Which cytokine is NOT typically elevated in cancer cachexia?",
          options: [
            "TNF-α",
            "IL-1",
            "IL-6",
            "IL-10"
          ],
          correctAnswer: 3,
          explanation: "IL-10 is an anti-inflammatory cytokine, while TNF-α, IL-1, and IL-6 are pro-inflammatory cytokines elevated in cachexia."
        },
        {
          id: 17,
          question: "What is the recommended meal frequency for cancer patients with early satiety?",
          options: [
            "3 large meals",
            "6-8 small meals",
            "2 meals with supplements",
            "1 main meal with snacks"
          ],
          correctAnswer: 1,
          explanation: "6-8 small meals per day help manage early satiety in cancer patients."
        },
        {
          id: 18,
          question: "Which vitamin often requires supplementation after gastric cancer surgery?",
          options: [
            "Vitamin A",
            "Vitamin B12",
            "Vitamin C",
            "Vitamin D"
          ],
          correctAnswer: 1,
          explanation: "Vitamin B12 requires intrinsic factor from the stomach for absorption, so supplementation is often needed after gastric surgery."
        },
        {
          id: 19,
          question: "What is a common long-term effect of cancer treatments requiring nutritional management?",
          options: [
            "Metabolic syndrome",
            "Hypervitaminosis",
            "Increased appetite",
            "Weight gain only"
          ],
          correctAnswer: 0,
          explanation: "Metabolic syndrome is a common long-term effect of many cancer treatments, requiring ongoing nutritional management."
        },
        {
          id: 20,
          question: "Which eating pattern is emphasized in cancer survivorship?",
          options: [
            "High-protein, low-carb",
            "Plant-based diets",
            "Ketogenic diet",
            "Intermittent fasting"
          ],
          correctAnswer: 1,
          explanation: "Plant-based diets with emphasis on fruits, vegetables, and whole grains are recommended for cancer survivorship."
        }
      ]
    }
  ],

  // ==================== FINAL EXAM ====================
  finalExam: {
    id: "clinical-nutrition-diploma-exam",
    title: "Clinical Nutrition Diploma Final Examination",
    description: "Comprehensive examination covering all 6 modules of the Clinical Nutrition Diploma program",
    passingScore: 70,
    timeLimit: 120, // minutes
    questions: [
      // Module 1 Questions (7 questions)
      {
        id: 1,
        question: "Which nutritional assessment component includes BMI and waist circumference measurements?",
        options: [
          "Biochemical assessment",
          "Anthropometric assessment",
          "Clinical examination",
          "Dietary evaluation"
        ],
        correctAnswer: 1,
        explanation: "Anthropometric assessment includes measurements like BMI, waist circumference, and body composition analysis.",
        module: 1
      },
      {
        id: 2,
        question: "What prealbumin level indicates normal nutritional status?",
        options: [
          "5-10 mg/dL",
          "15-35 mg/dL",
          "40-60 mg/dL",
          "65-85 mg/dL"
        ],
        correctAnswer: 1,
        explanation: "Normal prealbumin range is 15-35 mg/dL, with lower levels indicating protein-energy malnutrition.",
        module: 1
      },
      {
        id: 3,
        question: "Which equation is considered most accurate for estimating resting metabolic rate?",
        options: [
          "Harris-Benedict Equation",
          "Mifflin-St Jeor Equation",
          "Schofield Equation",
          "WHO Equation"
        ],
        correctAnswer: 1,
        explanation: "The Mifflin-St Jeor Equation is considered the most accurate for estimating RMR in most populations.",
        module: 1
      },
      {
        id: 4,
        question: "What percentage of unintentional weight loss in 6 months qualifies as GLIM phenotypic criteria?",
        options: [
          ">2%",
          ">5%",
          ">8%",
          ">10%"
        ],
        correctAnswer: 1,
        explanation: "GLIM criteria require >5% unintentional weight loss in 6 months as phenotypic criteria for malnutrition.",
        module: 1
      },
      {
        id: 5,
        question: "What is the protein requirement range for severe stress or burns?",
        options: [
          "0.8-1.0 g/kg/day",
          "1.0-1.2 g/kg/day",
          "1.2-1.5 g/kg/day",
          "1.5-2.0 g/kg/day"
        ],
        correctAnswer: 3,
        explanation: "Severe stress conditions like burns require 1.5-2.0 g/kg/day of protein for optimal recovery.",
        module: 1
      },
      {
        id: 6,
        question: "Using Holiday-Segar method, what's the fluid requirement for the first 10 kg of body weight?",
        options: [
          "50 mL/kg",
          "100 mL/kg",
          "150 mL/kg",
          "200 mL/kg"
        ],
        correctAnswer: 1,
        explanation: "Holiday-Segar method: First 10 kg = 100 mL/kg, next 10 kg = 50 mL/kg, remaining kg = 20 mL/kg.",
        module: 1
      },
      {
        id: 7,
        question: "What does the 'P' stand for in PES statement format?",
        options: [
          "Patient",
          "Problem",
          "Procedure",
          "Progress"
        ],
        correctAnswer: 1,
        explanation: "In PES statements, P stands for Problem (the nutrition diagnosis), E for Etiology, S for Signs/Symptoms.",
        module: 1
      },

      // Module 2 Questions (7 questions)
      {
        id: 8,
        question: "What is the sodium restriction target in the DASH diet?",
        options: [
          "<1000 mg/day",
          "<1500 mg/day",
          "<2300 mg/day",
          "<3000 mg/day"
        ],
        correctAnswer: 2,
        explanation: "DASH diet recommends <2300 mg sodium/day, with ideal target <1500 mg/day for greater benefits.",
        module: 2
      },
      {
        id: 9,
        question: "What is the optimal LDL cholesterol target for high-risk patients?",
        options: [
          "<100 mg/dL",
          "<70 mg/dL",
          "<130 mg/dL",
          "<160 mg/dL"
        ],
        correctAnswer: 1,
        explanation: "For high-risk patients, optimal LDL cholesterol target is <70 mg/dL.",
        module: 2
      },
      {
        id: 10,
        question: "How many servings of vegetables are recommended daily in the DASH diet (2000 calorie plan)?",
        options: [
          "2-3 servings",
          "3-4 servings",
          "4-5 servings",
          "5-6 servings"
        ],
        correctAnswer: 2,
        explanation: "DASH diet recommends 4-5 servings of vegetables daily on a 2000 calorie plan.",
        module: 2
      },
      {
        id: 11,
        question: "What dose of plant sterols/stanols is effective in the Portfolio Diet?",
        options: [
          "1 g/day",
          "2 g/day",
          "3 g/day",
          "4 g/day"
        ],
        correctAnswer: 1,
        explanation: "Portfolio Diet includes 2 g/day of plant sterols/stanols to help reduce LDL cholesterol.",
        module: 2
      },
      {
        id: 12,
        question: "Which trial demonstrated 30% reduction in cardiovascular events with Mediterranean diet?",
        options: [
          "DASH trial",
          "PREDIMED",
          "Lyon Diet Heart Study",
          "Portfolio Diet Study"
        ],
        correctAnswer: 1,
        explanation: "PREDIMED trial showed 30% reduction in cardiovascular events with Mediterranean diet.",
        module: 2
      },
      {
        id: 13,
        question: "What waist circumference indicates increased risk for metabolic syndrome in women?",
        options: [
          ">80 cm",
          ">88 cm",
          ">94 cm",
          ">102 cm"
        ],
        correctAnswer: 1,
        explanation: "Waist circumference >88 cm indicates increased risk for metabolic syndrome in women.",
        module: 2
      },
      {
        id: 14,
        question: "What percentage of body weight loss significantly improves metabolic syndrome parameters?",
        options: [
          "1-3%",
          "3-5%",
          "5-10%",
          "10-15%"
        ],
        correctAnswer: 2,
        explanation: "5-10% body weight loss significantly improves all metabolic syndrome parameters.",
        module: 2
      },

      // Module 3 Questions (7 questions)
      {
        id: 15,
        question: "What HbA1c level defines diabetes diagnosis?",
        options: [
          "≥5.7%",
          "≥6.0%",
          "≥6.5%",
          "≥7.0%"
        ],
        correctAnswer: 2,
        explanation: "Diabetes is diagnosed at HbA1c ≥6.5% according to ADA criteria.",
        module: 3
      },
      {
        id: 16,
        question: "How many grams of carbohydrates equal one carbohydrate choice?",
        options: [
          "5 g",
          "10 g",
          "15 g",
          "20 g"
        ],
        correctAnswer: 2,
        explanation: "One carbohydrate choice equals 15 grams of carbohydrates in diabetes management.",
        module: 3
      },
      {
        id: 17,
        question: "What is the 'Rule of 15' used for in diabetes management?",
        options: [
          "Weight loss calculation",
          "Carbohydrate counting",
          "Hypoglycemia treatment",
          "Insulin dosing"
        ],
        correctAnswer: 2,
        explanation: "Rule of 15: 15g fast-acting carbohydrate for hypoglycemia, wait 15 minutes, recheck.",
        module: 3
      },
      {
        id: 18,
        question: "What is the initial weight loss goal for type 2 diabetes management?",
        options: [
          "2-3%",
          "5-7%",
          "8-10%",
          "10-15%"
        ],
        correctAnswer: 1,
        explanation: "Initial weight loss goal for type 2 diabetes is 5-7% of body weight.",
        module: 3
      },
      {
        id: 19,
        question: "What protein intake is recommended for diabetic kidney disease?",
        options: [
          "0.6 g/kg/day minimum",
          "0.8 g/kg/day",
          "1.0 g/kg/day",
          "1.2 g/kg/day"
        ],
        correctAnswer: 1,
        explanation: "Diabetic kidney disease management typically includes protein restriction to 0.8 g/kg/day.",
        module: 3
      },
      {
        id: 20,
        question: "Which vitamin deficiency is associated with long-term metformin use?",
        options: [
          "Vitamin C",
          "Vitamin B12",
          "Vitamin D",
          "Vitamin K"
        ],
        correctAnswer: 1,
        explanation: "Long-term metformin use is associated with vitamin B12 deficiency requiring monitoring.",
        module: 3
      },
      {
        id: 21,
        question: "What is the target time in range for continuous glucose monitoring?",
        options: [
          ">50%",
          ">60%",
          ">70%",
          ">80%"
        ],
        correctAnswer: 2,
        explanation: "Time in range target is >70% (glucose 70-180 mg/dL) for optimal diabetes control.",
        module: 3
      },

      // Module 4 Questions (6 questions)
      {
        id: 22,
        question: "How long before bedtime should GERD patients avoid eating?",
        options: [
          "1 hour",
          "2 hours",
          "3 hours",
          "4 hours"
        ],
        correctAnswer: 2,
        explanation: "GERD patients should avoid eating within 3 hours of bedtime to reduce nighttime symptoms.",
        module: 4
      },
      {
        id: 23,
        question: "What is the gluten-free threshold defined as in ppm?",
        options: [
          "<5 ppm",
          "<10 ppm",
          "<20 ppm",
          "<50 ppm"
        ],
        correctAnswer: 2,
        explanation: "Gluten-free is defined as containing less than 20 parts per million of gluten.",
        module: 4
      },
      {
        id: 24,
        question: "How long is the elimination phase of the low FODMAP diet?",
        options: [
          "1-2 weeks",
          "2-6 weeks",
          "6-8 weeks",
          "8-12 weeks"
        ],
        correctAnswer: 1,
        explanation: "Elimination phase of low FODMAP diet typically lasts 2-6 weeks.",
        module: 4
      },
      {
        id: 25,
        question: "What protein intake is recommended for cirrhosis patients?",
        options: [
          "0.8-1.0 g/kg/day",
          "1.0-1.2 g/kg/day",
          "1.2-1.5 g/kg/day",
          "1.5-2.0 g/kg/day"
        ],
        correctAnswer: 2,
        explanation: "Cirrhosis patients require 1.2-1.5 g/kg/day of protein to prevent muscle wasting.",
        module: 4
      },
      {
        id: 26,
        question: "Which pancreatic enzyme dose range is typical for meals?",
        options: [
          "100-500 lipase units/kg/meal",
          "500-2500 lipase units/kg/meal",
          "2500-5000 lipase units/kg/meal",
          "5000-7500 lipase units/kg/meal"
        ],
        correctAnswer: 1,
        explanation: "Typical pancreatic enzyme dosing is 500-2500 lipase units/kg/meal.",
        module: 4
      },
      {
        id: 27,
        question: "What is the minimum symptom duration for IBS diagnosis?",
        options: [
          "3 months",
          "6 months",
          "9 months",
          "12 months"
        ],
        correctAnswer: 1,
        explanation: "Rome IV criteria require symptoms for at least 6 months for IBS diagnosis.",
        module: 4
      },

      // Module 5 Questions (7 questions)
      {
        id: 28,
        question: "What protein intake is recommended for pre-dialysis CKD?",
        options: [
          "0.4-0.6 g/kg/day",
          "0.6-0.8 g/kg/day",
          "0.8-1.0 g/kg/day",
          "1.0-1.2 g/kg/day"
        ],
        correctAnswer: 1,
        explanation: "Pre-dialysis CKD patients should consume 0.6-0.8 g/kg/day of protein.",
        module: 5
      },
      {
        id: 29,
        question: "What is the typical potassium restriction for dialysis patients?",
        options: [
          "1000-2000 mg/day",
          "2000-3000 mg/day",
          "3000-4000 mg/day",
          "No restriction"
        ],
        correctAnswer: 1,
        explanation: "Dialysis patients typically restrict potassium to 2000-3000 mg/day.",
        module: 5
      },
      {
        id: 30,
        question: "What phosphorus restriction is recommended for CKD Stage 5?",
        options: [
          "400-600 mg/day",
          "600-800 mg/day",
          "800-1000 mg/day",
          "1000-1200 mg/day"
        ],
        correctAnswer: 2,
        explanation: "CKD Stage 5 patients should restrict phosphorus to 800-1000 mg/day.",
        module: 5
      },
      {
        id: 31,
        question: "What serum bicarbonate level should be maintained in CKD?",
        options: [
          "≥18 mEq/L",
          "≥20 mEq/L",
          "≥22 mEq/L",
          "≥24 mEq/L"
        ],
        correctAnswer: 2,
        explanation: "Serum bicarbonate should be maintained at ≥22 mEq/L in CKD.",
        module: 5
      },
      {
        id: 32,
        question: "What is the target hemoglobin range for ESA therapy?",
        options: [
          "9-10 g/dL",
          "10-11 g/dL",
          "11-12 g/dL",
          "12-13 g/dL"
        ],
        correctAnswer: 1,
        explanation: "ESA therapy should target hemoglobin 10-11 g/dL in CKD patients.",
        module: 5
      },
      {
        id: 33,
        question: "What protein intake is recommended post-kidney transplant?",
        options: [
          "1.0-1.2 g/kg/day",
          "1.2-1.3 g/kg/day",
          "1.3-1.5 g/kg/day",
          "1.5-2.0 g/kg/day"
        ],
        correctAnswer: 2,
        explanation: "Immediately post-transplant, patients need 1.3-1.5 g/kg/day for wound healing.",
        module: 5
      },
      {
        id: 34,
        question: "What HbA1c range is targeted in diabetes with CKD?",
        options: [
          "6-7%",
          "7-8%",
          "8-9%",
          "9-10%"
        ],
        correctAnswer: 1,
        explanation: "HbA1c target in diabetes with CKD is generally 7-8%, individualized.",
        module: 5
      },

      // Module 6 Questions (6 questions)
      {
        id: 35,
        question: "What percentage of weight loss defines cancer cachexia?",
        options: [
          ">2%",
          ">3%",
          ">5%",
          ">7%"
        ],
        correctAnswer: 2,
        explanation: "Cancer cachexia is defined as involuntary weight loss >5% over 6 months.",
        module: 6
      },
      {
        id: 36,
        question: "What protein intake is recommended post-cancer surgery?",
        options: [
          "1.0-1.2 g/kg/day",
          "1.2-1.5 g/kg/day",
          "1.5-2.0 g/kg/day",
          "2.0-2.5 g/kg/day"
        ],
        correctAnswer: 2,
        explanation: "Post-surgical cancer patients require 1.5-2.0 g/kg/day for wound healing.",
        module: 6
      },
      {
        id: 37,
        question: "Which supplement may help chemotherapy-induced nausea?",
        options: [
          "Turmeric",
          "Ginger",
          "Garlic",
          "Cinnamon"
        ],
        correctAnswer: 1,
        explanation: "Ginger at 1-2 g/day may help reduce chemotherapy-induced nausea.",
        module: 6
      },
      {
        id: 38,
        question: "What assessment tool is designed for oncology patients?",
        options: [
          "MUST",
          "PG-SGA",
          "NRS-2002",
          "MNA"
        ],
        correctAnswer: 1,
        explanation: "Patient-Generated Subjective Global Assessment (PG-SGA) is designed for oncology.",
        module: 6
      },
      {
        id: 39,
        question: "What is the primary outcome in palliative care nutrition?",
        options: [
          "Weight gain",
          "Laboratory values",
          "Quality of life",
          "Survival time"
        ],
        correctAnswer: 2,
        explanation: "In palliative care, quality of life is the primary outcome measure.",
        module: 6
      },
      {
        id: 40,
        question: "Which cytokine is NOT elevated in cancer cachexia?",
        options: [
          "TNF-α",
          "IL-1",
          "IL-6",
          "IL-10"
        ],
        correctAnswer: 3,
        explanation: "IL-10 is anti-inflammatory, while others are pro-inflammatory cytokines elevated in cachexia.",
        module: 6
      }
    ]
  }
};
