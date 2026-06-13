// Animal Health Technology (Diploma) Course Data
// Complete course with 6 modules and final exam

export const animalHealthTechnologyDiploma = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "animal-health-technology-diploma",
  title: "Animal Health Technology (Diploma)",
  description: "Advanced training in veterinary technology, diagnostic procedures, surgical assistance, and specialized animal care. For those seeking advanced roles in veterinary medicine.",
  duration: "12 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  icon: "🏥",
  badge: "Diploma",
  prerequisite: "veterinary-assistance-certificate",
  
  // 2. MODULE ARCHITECTURE (6 Advanced Modules)
  modules: [
    {
      id: 1,
      title: "Advanced Anatomy and Physiology",
      content: `# Comprehensive Animal Body Systems

This advanced module explores the detailed structure and function of major animal body systems, building on basic anatomical knowledge.

## Skeletal System Advanced Study
The skeletal system provides structure and protection:
- **Bone composition**: 30% collagen (flexibility), 70% minerals (strength)
- **Bone types**: Long bones (limbs), short bones (wrists/ankles), flat bones (skull/ribs), irregular bones (vertebrae)
- **Joint classifications**: Fibrous (immovable), cartilaginous (slightly movable), synovial (freely movable)
- **Common skeletal disorders**: Osteoarthritis (joint degeneration), hip dysplasia (malformed hip socket), fractures (bone breaks)

## Muscular System Functions
Three muscle types with distinct characteristics:
- **Skeletal muscle**: Voluntary control, striated appearance, attaches to bones
- **Smooth muscle**: Involuntary control, found in organs and blood vessels
- **Cardiac muscle**: Involuntary, only in heart, has intercalated discs
- **Muscle contraction process**: Neurotransmitter release → calcium release → actin-myosin interaction → contraction

## Cardiovascular System Complexity
The heart and blood vessel network:
- **Heart chambers**: Four chambers (two atria, two ventricles) in mammals
- **Blood circulation**: Pulmonary circuit (lungs), systemic circuit (body)
- **Blood components**: Plasma (55%), red blood cells (45%), white blood cells and platelets (<1%)
- **Common disorders**: Heart murmurs (abnormal sounds), cardiomyopathy (heart muscle disease), anemia (low red blood cells)

## Respiratory System Mechanics
Breathing and gas exchange processes:
- **Air pathway**: Nostrils → nasal cavity → pharynx → larynx → trachea → bronchi → bronchioles → alveoli
- **Breathing mechanics**: Inspiration (diaphragm contracts), expiration (diaphragm relaxes)
- **Gas exchange**: Oxygen diffuses into blood, carbon dioxide diffuses out in alveoli
- **Respiratory rates**: Dogs 10-30 breaths/min, cats 20-30 breaths/min, horses 8-16 breaths/min

## Digestive System Processes
From ingestion to elimination:
- **Monogastric system**: Single stomach (dogs, cats, humans)
- **Ruminant system**: Four-chambered stomach (cows, sheep, goats)
- **Digestive enzymes**: Amylase (carbohydrates), protease (proteins), lipase (fats)
- **Common issues**: Gastritis (stomach inflammation), enteritis (intestinal inflammation), pancreatitis (pancreas inflammation)

## Nervous System Organization
Central and peripheral nervous systems:
- **Central nervous system**: Brain and spinal cord (processing center)
- **Peripheral nervous system**: Cranial nerves (12 pairs), spinal nerves (31 pairs in humans)
- **Neuron structure**: Cell body, dendrites (receive signals), axon (transmits signals)
- **Common disorders**: Seizures (abnormal electrical activity), intervertebral disc disease (spinal cord compression)

## Endocrine System Regulation
Hormone-producing glands and functions:
- **Pituitary gland**: "Master gland" controlling other endocrine glands
- **Thyroid gland**: Regulates metabolism with thyroxine hormone
- **Adrenal glands**: Produce cortisol (stress) and adrenaline (emergency)
- **Pancreas**: Produces insulin (lowers blood sugar) and glucagon (raises blood sugar)
- **Common disorders**: Diabetes mellitus (insulin deficiency), Cushing's disease (excess cortisol), hypothyroidism (low thyroid hormone)

## Urinary System Functions
Kidney and urinary tract operations:
- **Nephron function**: Filtration, reabsorption, secretion in kidney units
- **Urine production**: Average 20-40 ml/kg/day in dogs and cats
- **Urinalysis parameters**: Color, clarity, specific gravity, pH, protein, glucose
- **Common disorders**: Renal failure (kidney dysfunction), urinary tract infections (bacterial infections), bladder stones (mineral accumulations)

## Reproductive System Basics
Male and female reproductive anatomy:
- **Female system**: Ovaries (egg production), uterus (fetal development), mammary glands (milk production)
- **Male system**: Testes (sperm production), prostate gland (seminal fluid)
- **Reproductive cycles**: Estrous cycle (animals), menstrual cycle (primates)
- **Common issues**: Pyometra (uterine infection), mammary tumors, testicular cancer

## Integumentary System Structure
Skin and associated structures:
- **Skin layers**: Epidermis (outer), dermis (middle), hypodermis (inner)
- **Skin functions**: Protection, temperature regulation, sensation, vitamin D synthesis
- **Associated structures**: Hair, nails/claws, sweat glands, sebaceous glands
- **Common conditions**: Dermatitis (skin inflammation), allergies, parasites (fleas, mites)

## Species-Specific Variations
Key differences among common animals:
- **Cats**: Retractable claws, specialized teeth for tearing, unique kidney structure
- **Dogs**: Variety of sizes and skull shapes, non-retractable claws
- **Rabbits**: Open-rooted teeth (continuous growth), large cecum for fiber digestion
- **Birds**: Air sac system for efficient respiration, lightweight bones

## Clinical Applications
Using anatomy knowledge in practice:
- **Locating veins** for blood collection
- **Understanding medication absorption** sites
- **Identifying abnormal structures** during examinations
- **Assessing trauma** to specific body systems`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What percentage of bone is composed of minerals for strength?",
          options: ["30%", "50%", "70%", "90%"],
          correctAnswer: 2,
          explanation: "Bones are composed of 70% minerals (providing strength) and 30% collagen (providing flexibility)."
        },
        {
          id: 2,
          question: "Which type of joint allows free movement?",
          options: ["Fibrous joints", "Cartilaginous joints", "Synovial joints", "Fixed joints"],
          correctAnswer: 2,
          explanation: "Synovial joints are freely movable and contain synovial fluid for lubrication."
        },
        {
          id: 3,
          question: "What type of muscle is found only in the heart?",
          options: ["Skeletal muscle", "Smooth muscle", "Cardiac muscle", "Voluntary muscle"],
          correctAnswer: 2,
          explanation: "Cardiac muscle is unique to the heart and has intercalated discs for coordinated contractions."
        },
        {
          id: 4,
          question: "How many chambers does a mammalian heart have?",
          options: ["Two chambers", "Three chambers", "Four chambers", "Five chambers"],
          correctAnswer: 2,
          explanation: "Mammalian hearts have four chambers: two atria (receiving) and two ventricles (pumping)."
        },
        {
          id: 5,
          question: "What percentage of blood is plasma?",
          options: ["25%", "45%", "55%", "75%"],
          correctAnswer: 2,
          explanation: "Blood is approximately 55% plasma (liquid portion) and 45% formed elements (cells and platelets)."
        },
        {
          id: 6,
          question: "What structure is the site of gas exchange in the lungs?",
          options: ["Bronchi", "Bronchioles", "Alveoli", "Trachea"],
          correctAnswer: 2,
          explanation: "Alveoli are tiny air sacs where oxygen and carbon dioxide exchange occurs with blood capillaries."
        },
        {
          id: 7,
          question: "Which animals have a four-chambered stomach?",
          options: ["Dogs and cats", "Ruminants like cows", "Horses", "Pigs"],
          correctAnswer: 1,
          explanation: "Ruminants (cows, sheep, goats) have a four-chambered stomach for fermenting plant material."
        },
        {
          id: 8,
          question: "What enzyme breaks down carbohydrates?",
          options: ["Protease", "Lipase", "Amylase", "Lactase"],
          correctAnswer: 2,
          explanation: "Amylase is the enzyme that breaks down carbohydrates into simpler sugars."
        },
        {
          id: 9,
          question: "Which gland is known as the 'master gland'?",
          options: ["Thyroid gland", "Adrenal gland", "Pituitary gland", "Pancreas"],
          correctAnswer: 2,
          explanation: "The pituitary gland is called the master gland because it regulates other endocrine glands."
        },
        {
          id: 10,
          question: "What hormone lowers blood sugar levels?",
          options: ["Glucagon", "Insulin", "Cortisol", "Adrenaline"],
          correctAnswer: 1,
          explanation: "Insulin lowers blood sugar levels by facilitating glucose uptake into cells."
        },
        {
          id: 11,
          question: "What is the functional unit of the kidney?",
          options: ["Nephron", "Glomerulus", "Renal pelvis", "Ureter"],
          correctAnswer: 0,
          explanation: "The nephron is the functional unit of the kidney where filtration and urine formation occur."
        },
        {
          id: 12,
          question: "What is the average urine production for dogs and cats?",
          options: ["5-10 ml/kg/day", "20-40 ml/kg/day", "50-70 ml/kg/day", "80-100 ml/kg/day"],
          correctAnswer: 1,
          explanation: "Dogs and cats typically produce 20-40 ml of urine per kg of body weight daily."
        },
        {
          id: 13,
          question: "Which skin layer is the outermost?",
          options: ["Dermis", "Epidermis", "Hypodermis", "Subcutaneous layer"],
          correctAnswer: 1,
          explanation: "The epidermis is the outermost skin layer providing a protective barrier."
        },
        {
          id: 14,
          question: "What condition involves uterine infection?",
          options: ["Mastitis", "Pyometra", "Endometriosis", "Cystitis"],
          correctAnswer: 1,
          explanation: "Pyometra is a serious uterine infection often requiring emergency treatment."
        },
        {
          id: 15,
          question: "Which animal has continuously growing teeth?",
          options: ["Dogs", "Cats", "Rabbits", "Birds"],
          correctAnswer: 2,
          explanation: "Rabbits have open-rooted (elodont) teeth that grow continuously throughout life."
        },
        {
          id: 16,
          question: "What type of bone are the vertebrae classified as?",
          options: ["Long bones", "Short bones", "Flat bones", "Irregular bones"],
          correctAnswer: 3,
          explanation: "Vertebrae are classified as irregular bones due to their complex shapes."
        },
        {
          id: 17,
          question: "Which blood cells are most abundant?",
          options: ["White blood cells", "Red blood cells", "Platelets", "Plasma cells"],
          correctAnswer: 1,
          explanation: "Red blood cells (erythrocytes) are the most abundant blood cells, making up about 45% of blood volume."
        },
        {
          id: 18,
          question: "What is the normal respiratory rate for horses?",
          options: ["8-16 breaths/min", "20-30 breaths/min", "30-40 breaths/min", "40-50 breaths/min"],
          correctAnswer: 0,
          explanation: "Horses have a resting respiratory rate of 8-16 breaths per minute."
        },
        {
          id: 19,
          question: "What disorder involves abnormal electrical brain activity?",
          options: ["Paralysis", "Seizures", "Neuropathy", "Meningitis"],
          correctAnswer: 1,
          explanation: "Seizures result from abnormal, excessive electrical discharges in brain neurons."
        },
        {
          id: 20,
          question: "Which gland produces cortisol?",
          options: ["Thyroid gland", "Pituitary gland", "Adrenal glands", "Pancreas"],
          correctAnswer: 2,
          explanation: "The adrenal glands produce cortisol, often called the stress hormone."
        }
      ]
    },
    {
      id: 2,
      title: "Advanced Clinical Pathology",
      content: `# Diagnostic Laboratory Techniques

This module covers advanced laboratory procedures, interpretation of test results, and understanding pathological processes in animals.

## Hematology Fundamentals
Complete blood count (CBC) components and significance:

**Red Blood Cell Parameters:**
- **RBC count**: 5.5-8.5 million/μL (dogs), 5.0-10.0 million/μL (cats)
- **Hemoglobin (Hb)**: 12-18 g/dL (dogs), 8-15 g/dL (cats)
- **Hematocrit (HCT)**: 37-55% (dogs), 24-45% (cats)
- **Mean Corpuscular Volume (MCV)**: 60-77 fL (dogs), 39-55 fL (cats)
- **Clinical significance**: Anemia (low values), polycythemia (high values)

**White Blood Cell Parameters:**
- **Total WBC count**: 6,000-17,000/μL (dogs), 5,500-19,500/μL (cats)
- **Neutrophils**: 3,000-11,500/μL (dogs), 2,500-12,500/μL (cats)
- **Lymphocytes**: 1,000-4,800/μL (dogs), 1,500-7,000/μL (cats)
- **Monocytes**: 150-1,350/μL (dogs), 0-850/μL (cats)
- **Eosinophils**: 100-1,250/μL (dogs), 0-1,500/μL (cats)
- **Basophils**: Rare in both species

**Platelet Assessment:**
- **Normal range**: 200,000-500,000/μL
- **Thrombocytopenia**: <50,000/μL (risk of bleeding)
- **Thrombocytosis**: >500,000/μL (may indicate inflammation or disease)

## Clinical Chemistry Analysis
Blood chemistry profile interpretation:

**Kidney Function Tests:**
- **Blood Urea Nitrogen (BUN)**: 10-25 mg/dL (dogs), 20-30 mg/dL (cats)
- **Creatinine**: 0.5-1.5 mg/dL (dogs), 0.8-2.0 mg/dL (cats)
- **Phosphorus**: 2.5-6.0 mg/dL (dogs and cats)
- **Elevated values**: Indicate renal impairment or failure

**Liver Function Tests:**
- **Alanine Aminotransferase (ALT)**: 10-100 U/L (dogs), 10-80 U/L (cats)
- **Alkaline Phosphatase (ALP)**: 20-150 U/L (dogs), 10-80 U/L (cats)
- **Total Bilirubin**: 0.1-0.6 mg/dL (dogs and cats)
- **Albumin**: 2.5-4.0 g/dL (dogs and cats)
- **Elevated values**: Suggest liver damage or disease

**Pancreatic Enzymes:**
- **Amylase**: 500-1500 U/L (dogs), 500-1800 U/L (cats)
- **Lipase**: 0-200 U/L (dogs), 0-100 U/L (cats)
- **Elevated values**: May indicate pancreatitis

**Electrolyte Balance:**
- **Sodium (Na+)**: 140-155 mEq/L (dogs), 150-165 mEq/L (cats)
- **Potassium (K+)**: 3.5-5.5 mEq/L (dogs and cats)
- **Chloride (Cl-)**: 105-120 mEq/L (dogs), 115-130 mEq/L (cats)
- **Calcium (Ca2+)**: 8.5-11.5 mg/dL (dogs), 8.0-11.0 mg/dL (cats)
- **Imbalances**: Can indicate various metabolic disorders

## Urinalysis Interpretation
Complete urinalysis evaluation:

**Physical Properties:**
- **Color**: Yellow to amber (normal), red/brown (blood), colorless (dilute)
- **Clarity**: Clear (normal), cloudy (infection/crystals)
- **Specific Gravity**: 1.015-1.045 (dogs), 1.035-1.060 (cats)
- **pH**: 5.5-7.5 (dogs), 6.0-7.5 (cats)

**Chemical Analysis:**
- **Protein**: Trace or negative (normal), positive (kidney disease)
- **Glucose**: Negative (normal), positive (diabetes mellitus)
- **Ketones**: Negative (normal), positive (diabetes/starving)
- **Bilirubin**: Negative to trace (dogs), negative (cats)
- **Blood**: Negative (normal), positive (infection/stones/trauma)

**Microscopic Examination:**
- **Red Blood Cells**: 0-5/HPF (normal)
- **White Blood Cells**: 0-5/HPF (normal)
- **Casts**: Rare hyaline (normal), cellular casts (kidney disease)
- **Crystals**: Occasional (normal), numerous (may form stones)
- **Bacteria**: None (normal), present (urinary tract infection)

## Cytology Techniques
Sample collection and examination:

**Sample Collection Methods:**
- **Fine needle aspiration**: Using 22-25 gauge needle
- **Impression smears**: From tissue surfaces or lesions
- **Scrapings**: From skin or mucosal surfaces
- **Swabs**: From body cavities or wounds

**Staining Techniques:**
- **Diff-Quik**: Rapid stain for general cytology
- **Wright-Giemsa**: Detailed cellular morphology
- **Gram stain**: Differentiates bacterial types
- **New methylene blue**: Highlights nuclei and some parasites

**Common Cytological Findings:**
- **Inflammation**: Neutrophils, macrophages, lymphocytes
- **Neoplasia**: Abnormal cell clusters, mitotic figures
- **Infection**: Bacteria, fungi, intracellular organisms
- **Degeneration**: Cellular debris, vacuolation

## Parasitology Diagnostics
Identification of common parasites:

**Fecal Examination Methods:**
- **Direct smear**: Immediate examination of fresh sample
- **Fecal flotation**: Using specific gravity solutions (zinc sulfate, sodium nitrate)
- **Sedimentation**: For heavy eggs (trematodes)
- **Baermann technique**: For lungworm larvae

**Common Parasite Eggs:**
- **Roundworms**: Thick-walled, spherical, 75-85 μm
- **Hookworms**: Thin-walled, oval, 55-75 μm
- **Whipworms**: Football-shaped, bipolar plugs, 70-90 μm
- **Tapeworms**: Typically not seen in flotation (segments in feces)

**Blood Parasites:**
- **Heartworm microfilariae**: Dirofilaria immitis, 290-330 μm
- **Hemotrophic mycoplasma**: On RBC surface (formerly Hemobartonella)
- **Babesia**: Inside RBCs, pear-shaped organisms

## Microbiology Basics
Culture and sensitivity testing:

**Sample Collection:**
- **Aseptic technique**: Critical to avoid contamination
- **Appropriate media**: Based on suspected organisms
- **Transport conditions**: Maintain viability during transport

**Common Culture Media:**
- **Blood agar**: General purpose, detects hemolysis
- **MacConkey agar**: Selective for gram-negative bacteria
- **Sabouraud agar**: For fungal cultures
- **Enrichment broths**: For low numbers of organisms

**Antibiotic Sensitivity Testing:**
- **Disk diffusion (Kirby-Bauer)**: Zone size interpretation
- **Minimum Inhibitory Concentration (MIC)**: Quantitative method
- **Common antibiotics tested**: Penicillins, cephalosporins, aminoglycosides, fluoroquinolones

## Coagulation Testing
Assessment of clotting function:

**Common Tests:**
- **Prothrombin Time (PT)**: 7-10 seconds (extrinsic pathway)
- **Activated Partial Thromboplastin Time (aPTT)**: 10-17 seconds (intrinsic pathway)
- **Activated Clotting Time (ACT)**: 60-110 seconds
- **Buccal Mucosal Bleeding Time (BMBT)**: 1.5-4.5 minutes

**Clinical Significance:**
- **Prolonged times**: Coagulation factor deficiencies, anticoagulant rodenticide toxicity
- **Shortened times**: Hypercoagulable states
- **Platelet disorders**: Usually normal PT/aPTT but abnormal bleeding time

## Quality Control in Laboratory
Ensuring accurate results:

**Daily Quality Checks:**
- **Control sera**: Run with patient samples
- **Instrument calibration**: Regular maintenance and calibration
- **Reagent validation**: Check expiration dates and storage conditions
- **Proficiency testing**: External quality assessment programs

**Common Errors to Avoid:**
- **Hemolyzed samples**: Affect many chemistry tests
- **Lipemic samples**: Interfere with photometric readings
- **Clotted samples**: Invalid hematology results
- **Delayed processing**: Affects cell counts and chemistry stability

**Record Keeping:**
- **Patient identification**: Double-check labels
- **Test results**: Accurate recording and reporting
- **Quality control logs**: Document all QC activities
- **Corrective actions**: For out-of-range QC results`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the normal hematocrit range for dogs?",
          options: ["20-30%", "37-55%", "60-75%", "80-95%"],
          correctAnswer: 1,
          explanation: "Normal canine hematocrit ranges from 37-55%, representing the percentage of blood volume occupied by red blood cells."
        },
        {
          id: 2,
          question: "Which white blood cell is typically most abundant?",
          options: ["Lymphocytes", "Neutrophils", "Monocytes", "Eosinophils"],
          correctAnswer: 1,
          explanation: "Neutrophils are usually the most abundant white blood cells in circulation, comprising 60-70% of total WBCs in dogs."
        },
        {
          id: 3,
          question: "What platelet count indicates risk of bleeding?",
          options: ["<50,000/μL", "100,000-200,000/μL", "200,000-500,000/μL", ">500,000/μL"],
          correctAnswer: 0,
          explanation: "Thrombocytopenia (platelet count <50,000/μL) increases the risk of spontaneous bleeding."
        },
        {
          id: 4,
          question: "Which test is primarily used to assess kidney function?",
          options: ["ALT and ALP", "BUN and Creatinine", "Amylase and Lipase", "Sodium and Potassium"],
          correctAnswer: 1,
          explanation: "BUN (Blood Urea Nitrogen) and Creatinine are key indicators of kidney function."
        },
        {
          id: 5,
          question: "What does elevated ALT typically indicate?",
          options: ["Kidney disease", "Liver damage", "Pancreatitis", "Diabetes"],
          correctAnswer: 1,
          explanation: "ALT (Alanine Aminotransferase) is a liver enzyme that increases with hepatocellular damage."
        },
        {
          id: 6,
          question: "What is the normal urine specific gravity range for cats?",
          options: ["1.001-1.015", "1.015-1.030", "1.035-1.060", "1.065-1.080"],
          correctAnswer: 2,
          explanation: "Cats normally have more concentrated urine with specific gravity ranging from 1.035-1.060."
        },
        {
          id: 7,
          question: "What does glucose in urine typically indicate?",
          options: ["Kidney infection", "Diabetes mellitus", "Liver disease", "Dehydration"],
          correctAnswer: 1,
          explanation: "Glucosuria (glucose in urine) typically occurs when blood glucose exceeds the renal threshold, as in diabetes mellitus."
        },
        {
          id: 8,
          question: "Which stain is commonly used for rapid cytology evaluation?",
          options: ["Gram stain", "Diff-Quik", "New methylene blue", "Ziehl-Neelsen"],
          correctAnswer: 1,
          explanation: "Diff-Quik is a rapid Romanowsky-type stain commonly used for general cytology evaluation."
        },
        {
          id: 9,
          question: "What technique is used to detect lungworm larvae?",
          options: ["Fecal flotation", "Direct smear", "Baermann technique", "Sedimentation"],
          correctAnswer: 2,
          explanation: "The Baermann technique uses warm water to encourage larvae migration from feces for detection."
        },
        {
          id: 10,
          question: "Which agar is selective for gram-negative bacteria?",
          options: ["Blood agar", "Sabouraud agar", "MacConkey agar", "Chocolate agar"],
          correctAnswer: 2,
          explanation: "MacConkey agar contains bile salts and crystal violet that inhibit gram-positive bacteria, selecting for gram-negative organisms."
        },
        {
          id: 11,
          question: "What test assesses the extrinsic coagulation pathway?",
          options: ["aPTT", "PT", "ACT", "BMBT"],
          correctAnswer: 1,
          explanation: "Prothrombin Time (PT) tests the extrinsic and common coagulation pathways."
        },
        {
          id: 12,
          question: "What is a common cause of sample hemolysis?",
          options: ["Delayed processing", "Using large needle", "Proper handling", "Cold storage"],
          correctAnswer: 0,
          explanation: "Rough handling, small needle size, or delayed processing can cause red blood cell rupture (hemolysis)."
        },
        {
          id: 13,
          question: "What is the normal range for canine total WBC count?",
          options: ["2,000-5,000/μL", "6,000-17,000/μL", "20,000-30,000/μL", "35,000-50,000/μL"],
          correctAnswer: 1,
          explanation: "Normal total white blood cell count in dogs ranges from 6,000-17,000 cells per microliter."
        },
        {
          id: 14,
          question: "Which electrolyte imbalance is most immediately life-threatening?",
          options: ["Hyponatremia", "Hyperkalemia", "Hypocalcemia", "Hyperchloremia"],
          correctAnswer: 1,
          explanation: "Severe hyperkalemia (high potassium) can cause cardiac arrhythmias and arrest."
        },
        {
          id: 15,
          question: "What microscopic finding suggests kidney disease?",
          options: ["Few bacteria", "Occasional crystals", "Cellular casts", "Normal epithelial cells"],
          correctAnswer: 2,
          explanation: "Cellular casts in urine sediment indicate renal tubular damage and kidney disease."
        },
        {
          id: 16,
          question: "Which parasite egg has bipolar plugs?",
          options: ["Roundworm", "Hookworm", "Whipworm", "Tapeworm"],
          correctAnswer: 2,
          explanation: "Whipworm (Trichuris) eggs are football-shaped with distinctive plugs at both poles."
        },
        {
          id: 17,
          question: "What does a positive ketone test in urine suggest?",
          options: ["Urinary infection", "Diabetes or starvation", "Liver disease", "Kidney failure"],
          correctAnswer: 1,
          explanation: "Ketones in urine (ketonuria) indicate fat breakdown for energy, seen in diabetes or starvation."
        },
        {
          id: 18,
          question: "Which test requires buccal mucosa?",
          options: ["PT", "aPTT", "BMBT", "ACT"],
          correctAnswer: 2,
          explanation: "Buccal Mucosal Bleeding Time (BMBT) assesses primary hemostasis using a standardized incision in the buccal mucosa."
        },
        {
          id: 19,
          question: "What does lipemia interfere with in testing?",
          options: ["Cell counting", "Photometric readings", "Microscopic examination", "Culture growth"],
          correctAnswer: 1,
          explanation: "Lipemia (high fat content) causes turbidity that interferes with photometric measurements in chemistry analyzers."
        },
        {
          id: 20,
          question: "How often should quality control sera be run?",
          options: ["Weekly", "Monthly", "With each batch of tests", "Only when problems occur"],
          correctAnswer: 2,
          explanation: "Quality control materials should be run with each batch of patient samples to ensure accurate results."
        }
      ]
    },
    {
      id: 3,
      title: "Surgical Assistance and Anesthesia",
      content: `# Advanced Surgical Support and Anesthetic Management

This module covers comprehensive surgical assistance techniques, anesthetic protocols, and perioperative patient care.

## Preoperative Patient Assessment
Comprehensive evaluation before surgery:

**Physical Examination:**
- **Body condition scoring**: 1-9 scale (1=emaciated, 5=ideal, 9=obese)
- **Cardiovascular assessment**: Heart rate, rhythm, murmurs, pulse quality
- **Respiratory evaluation**: Rate, effort, lung sounds
- **Hydration status**: Skin turgor, mucous membranes, capillary refill time

**Risk Assessment Categories:**
- **ASA I**: Healthy patient, minimal risk
- **ASA II**: Mild systemic disease, slight risk
- **ASA III**: Severe systemic disease, moderate risk
- **ASA IV**: Life-threatening disease, high risk
- **ASA V**: Moribund patient, extreme risk

**Diagnostic Testing:**
- **Minimum database**: PCV/TS, blood glucose, BUN
- **Pre-anesthetic bloodwork**: CBC, chemistry profile
- **Additional tests**: Based on age and condition (urinalysis, radiographs, ECG)

## Anesthetic Equipment
Understanding and maintaining anesthetic machines:

**Machine Components:**
- **Oxygen source**: Cylinders or central pipeline
- **Flowmeters**: Control gas delivery (L/min)
- **Vaporizer**: Delivers precise anesthetic concentration
- **Breathing circuit**: Rebreathing or non-rebreathing systems
- **Scavenging system**: Removes waste anesthetic gases

**Circuit Types:**
- **Non-rebreathing circuits**: For patients <7 kg (Bain, Ayre's T-piece)
- **Rebreathing circuits**: For patients >7 kg (Circle system)
- **Circuit selection**: Based on patient weight and respiratory requirements

**Monitoring Equipment:**
- **Pulse oximeter**: Measures oxygen saturation (SpO2)
- **Capnograph**: Measures end-tidal CO2 (ETCO2)
- **Blood pressure monitor**: Direct or indirect methods
- **ECG**: Monitors cardiac rhythm
- **Temperature probe**: Continuous temperature monitoring

## Anesthetic Agents
Properties and uses of common agents:

**Premedications:**
- **Sedatives**: Acepromazine (0.01-0.05 mg/kg), dexmedetomidine (1-10 mcg/kg)
- **Analgesics**: Opioids (hydromorphone 0.05-0.1 mg/kg, methadone 0.1-0.5 mg/kg)
- **Anticholinergics**: Atropine (0.02-0.04 mg/kg), glycopyrrolate (0.005-0.01 mg/kg)

**Induction Agents:**
- **Injectable**: Propofol (4-6 mg/kg IV), alfaxalone (1-3 mg/kg IV), ketamine (5-10 mg/kg IM) with diazepam
- **Inhalant**: Isoflurane, sevoflurane (via mask or chamber)

**Maintenance Anesthesia:**
- **Isoflurane**: Most common, 1.5-2.5% maintenance
- **Sevoflurane**: Faster induction/recovery, 2.5-4% maintenance
- **Monitoring depth**: Jaw tone, eye position, reflexes, vital signs

## Intraoperative Monitoring
Comprehensive patient monitoring during surgery:

**Vital Sign Parameters:**
- **Heart rate**: Dogs 60-120 bpm, Cats 110-180 bpm
- **Respiratory rate**: 8-20 breaths/min (controlled ventilation)
- **Blood pressure**: Systolic 90-140 mmHg, Mean 60-100 mmHg
- **Oxygen saturation**: >95% (SpO2)
- **End-tidal CO2**: 35-45 mmHg
- **Temperature**: Maintain 37-38°C (98.6-100.4°F)

**Monitoring Frequency:**
- **Critical parameters**: Every 5 minutes
- **Anesthetic depth**: Continuous assessment
- **Fluid administration**: Regular calculation and recording
- **Blood loss estimation**: Weigh sponges, measure suction

**Crisis Recognition:**
- **Hypotension**: MAP <60 mmHg, treat with fluids, pressors
- **Hypoxemia**: SpO2 <90%, increase oxygen, check equipment
- **Hypothermia**: Temperature <36°C, active warming needed
- **Cardiac arrhythmias**: Identify and treat according to protocol

## Surgical Assistance Techniques
Advanced skills for surgical support:

**Sterile Technique:**
- **Surgical hand scrub**: 5-minute scrub with antimicrobial soap
- **Gowning and gloving**: Closed or open technique without contamination
- **Maintaining sterility**: Keep hands above waist, below shoulders

**Instrument Knowledge:**
- **Cutting instruments**: Scalpels, scissors (Mayo, Metzenbaum)
- **Grasping instruments**: Forceps (rat-tooth, Adson, tissue)
- **Hemostatic instruments**: Hemostats (Kelly, Crile, Mosquito)
- **Retractors**: Self-retaining (Gelpi, Weitlaner) or hand-held

**Suture Materials:**
- **Absorbable**: Catgut, polyglactin (Vicryl), polydioxanone (PDS)
- **Non-absorbable**: Nylon, polypropylene (Prolene), silk
- **Suture selection**: Based on tissue type and healing time
- **Needle types**: Cutting (skin), taper (internal tissues), blunt (liver)

## Common Surgical Procedures
Assisting with frequently performed surgeries:

**Ovariohysterectomy (Spay):**
- **Patient positioning**: Dorsal recumbency
- **Instrument needs**: Spay pack, hemostats, suture
- **Assistance tasks**: Tissue retraction, suction, ligature passing
- **Complications**: Hemorrhage, ovarian remnant, infection

**Orchiectomy (Neuter):**
- **Approaches**: Prescrotal (dogs), scrotal (cats)
- **Instrumentation**: Castration pack, emasculator
- **Assistance**: Tissue presentation, hemostasis
- **Complications**: Scrotal hematoma, infection

**Dental Procedures:**
- **Equipment**: Dental machine, probes, scalers, extraction instruments
- **Assistance**: Oral suction, instrument passing, radiographic positioning
- **Monitoring**: Under anesthesia, airway protection
- **Post-op care**: Pain management, feeding instructions

## Postoperative Care
Comprehensive recovery management:

**Immediate Recovery:**
- **Monitoring**: Until fully conscious, swallowing reflex returns
- **Positioning**: Lateral recumbency, head extended
- **Warming**: Blankets, heating pads, warm fluids
- **Pain assessment**: Using pain scales (CMPS, Glasgow)

**Pain Management:**
- **Multimodal approach**: NSAIDs, opioids, local anesthetics
- **Common medications**: Meloxicam, buprenorphine, lidocaine patches
- **Administration routes**: IV, IM, oral, transdermal
- **Monitoring effectiveness**: Behavioral signs, vital signs

**Wound Care:**
- **Incision monitoring**: Redness, swelling, discharge
- **Bandage changes**: As needed, sterile technique
- **Elizabethan collar**: To prevent licking/chewing
- **Suture removal**: 10-14 days post-op

**Complication Recognition:**
- **Infection signs**: Fever, purulent discharge, redness
- **Hemorrhage**: Swelling, pale mucous membranes, weakness
- **Dehiscence**: Wound opening, may require resuturing
- **Seroma**: Fluid accumulation, may need drainage

## Emergency Preparedness
Handling anesthetic emergencies:

**Crash Cart Organization:**
- **Emergency drugs**: Epinephrine, atropine, lidocaine, fluids
- **Equipment**: Laryngoscope, endotracheal tubes, ambu bag
- **Monitoring**: ECG leads, defibrillator if available
- **Documentation**: Crash sheet for recording events

**Common Emergencies:**
- **Cardiac arrest**: Start CPR (100-120 compressions/min)
- **Anaphylaxis**: Stop drug, epinephrine, fluids, oxygen
- **Malignant hyperthermia**: Stop triggers, cool patient, dantrolene
- **Airway obstruction**: Reposition, suction, emergency tracheostomy

**CPR Protocols:**
- **Compressions**: 1/3 chest width, 100-120/min
- **Ventilation**: 10 breaths/min with 100% oxygen
- **Drug administration**: Epinephrine every 3-5 minutes
- **Reassessment**: Every 2 minutes for ROSC (return of spontaneous circulation)

## Record Keeping
Comprehensive anesthetic records:

**Required Information:**
- **Patient data**: Weight, age, breed, medical conditions
- **Drug administration**: Times, doses, routes, effects
- **Vital signs**: Regular recording (minimum every 5 minutes)
- **Fluid therapy**: Type, rate, total volume
- **Complications**: Description and treatment
- **Recovery assessment**: Time to standing, eating, discharge

**Legal Considerations:**
- **Accuracy**: Records must be complete and accurate
- **Timeliness**: Record as events occur, not from memory
- **Permanence**: Use permanent ink, no erasures
- **Retention**: Follow clinic policy and legal requirements`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What ASA category describes a healthy patient?",
          options: ["ASA I", "ASA II", "ASA III", "ASA IV"],
          correctAnswer: 0,
          explanation: "ASA I patients are healthy with no systemic disease, representing minimal anesthetic risk."
        },
        {
          id: 2,
          question: "Which circuit type is used for patients under 7 kg?",
          options: ["Circle system", "Rebreathing circuit", "Non-rebreathing circuit", "Closed system"],
          correctAnswer: 2,
          explanation: "Non-rebreathing circuits (Bain, Ayre's T-piece) are used for small patients (<7 kg) to minimize resistance."
        },
        {
          id: 3,
          question: "What does a capnograph measure?",
          options: ["Blood pressure", "Oxygen saturation", "End-tidal CO2", "Heart rate"],
          correctAnswer: 2,
          explanation: "A capnograph measures end-tidal carbon dioxide (ETCO2), indicating adequate ventilation during anesthesia."
        },
        {
          id: 4,
          question: "What is the typical maintenance percentage for isoflurane?",
          options: ["0.5-1.0%", "1.5-2.5%", "3.0-4.0%", "4.5-5.5%"],
          correctAnswer: 1,
          explanation: "Isoflurane is typically maintained at 1.5-2.5% concentration in oxygen for surgical anesthesia."
        },
        {
          id: 5,
          question: "What is the normal mean arterial pressure range during anesthesia?",
          options: ["40-50 mmHg", "60-100 mmHg", "110-130 mmHg", "140-160 mmHg"],
          correctAnswer: 1,
          explanation: "Mean arterial pressure should be maintained between 60-100 mmHg for adequate organ perfusion."
        },
        {
          id: 6,
          question: "How often should critical parameters be monitored during anesthesia?",
          options: ["Every 15 minutes", "Every 10 minutes", "Every 5 minutes", "Once per hour"],
          correctAnswer: 2,
          explanation: "Critical parameters (heart rate, respiration, blood pressure, oxygenation) should be monitored at least every 5 minutes."
        },
        {
          id: 7,
          question: "What is the minimum recommended duration for surgical hand scrubbing?",
          options: ["2 minutes", "5 minutes", "10 minutes", "15 minutes"],
          correctAnswer: 1,
          explanation: "A proper surgical hand scrub should last at least 5 minutes with antimicrobial soap."
        },
        {
          id: 8,
          question: "Which instrument is used for cutting tissue internally?",
          options: ["Mayo scissors", "Metzenbaum scissors", "Rat-tooth forceps", "Hemostat"],
          correctAnswer: 1,
          explanation: "Metzenbaum scissors are designed for cutting delicate tissues during internal surgery."
        },
        {
          id: 9,
          question: "Which suture material is absorbable?",
          options: ["Nylon", "Polypropylene", "Polyglactin (Vicryl)", "Silk"],
          correctAnswer: 2,
          explanation: "Polyglactin (Vicryl) is a synthetic absorbable suture that loses tensile strength in 2-3 weeks."
        },
        {
          id: 10,
          question: "When are sutures typically removed after routine surgery?",
          options: ["3-5 days", "7-10 days", "10-14 days", "21-28 days"],
          correctAnswer: 2,
          explanation: "Sutures are usually removed 10-14 days postoperatively, depending on the surgery site and healing."
        },
        {
          id: 11,
          question: "What is the first drug typically administered in cardiac arrest?",
          options: ["Atropine", "Lidocaine", "Epinephrine", "Fluids"],
          correctAnswer: 2,
          explanation: "Epinephrine is the first-line drug for cardiac arrest to stimulate cardiac contractions and vasoconstriction."
        },
        {
          id: 12,
          question: "What compression rate is recommended during CPR?",
          options: ["60-80/min", "80-100/min", "100-120/min", "140-160/min"],
          correctAnswer: 2,
          explanation: "Current guidelines recommend chest compressions at 100-120 per minute during CPR."
        },
        {
          id: 13,
          question: "What body position is recommended during recovery from anesthesia?",
          options: ["Dorsal recumbency", "Lateral recumbency", "Sternal recumbency", "Standing position"],
          correctAnswer: 1,
          explanation: "Lateral recumbency with head extended helps maintain airway patency during recovery."
        },
        {
          id: 14,
          question: "Which pain scale is commonly used in veterinary medicine?",
          options: ["Visual Analog Scale", "CMPS or Glasgow Scale", "Numeric Rating Scale", "Faces Scale"],
          correctAnswer: 1,
          explanation: "The CMPS (Composite Measure Pain Scale) and Glasgow Pain Scale are validated for veterinary use."
        },
        {
          id: 15,
          question: "What is a common sign of wound infection?",
          options: ["Cool incision site", "Purulent discharge", "Dry scab formation", "Minimal swelling"],
          correctAnswer: 1,
          explanation: "Purulent (pus) discharge from an incision is a classic sign of wound infection."
        },
        {
          id: 16,
          question: "Which drug is an opioid analgesic?",
          options: ["Meloxicam", "Buprenorphine", "Acepromazine", "Diazepam"],
          correctAnswer: 1,
          explanation: "Buprenorphine is a partial opioid agonist used for pain management in veterinary patients."
        },
        {
          id: 17,
          question: "What temperature defines hypothermia during anesthesia?",
          options: ["<38°C", "<37°C", "<36°C", "<35°C"],
          correctAnswer: 2,
          explanation: "Hypothermia is defined as body temperature below 36°C (96.8°F) and requires active warming."
        },
        {
          id: 18,
          question: "Which monitoring equipment measures oxygen saturation?",
          options: ["Capnograph", "Pulse oximeter", "Blood pressure monitor", "ECG"],
          correctAnswer: 1,
          explanation: "A pulse oximeter measures oxygen saturation (SpO2) through peripheral pulse detection."
        },
        {
          id: 19,
          question: "What type of needle is used for suturing skin?",
          options: ["Taper needle", "Cutting needle", "Blunt needle", "Reverse cutting needle"],
          correctAnswer: 1,
          explanation: "Cutting needles have sharp edges that easily penetrate skin and other tough tissues."
        },
        {
          id: 20,
          question: "How should anesthetic records be completed?",
          options: ["From memory at end of day", "As events occur", "Only for complicated cases", "By the veterinarian only"],
          correctAnswer: 1,
          explanation: "Anesthetic records should be completed as events occur to ensure accuracy and completeness."
        }
      ]
    },
    {
      id: 4,
      title: "Radiology and Diagnostic Imaging",
      content: `# Advanced Imaging Techniques and Safety

This module covers principles of diagnostic imaging, radiographic techniques, and interpretation of common findings in veterinary patients.

## Radiation Physics and Safety
Understanding radiation principles and protection:

**Radiation Basics:**
- **X-ray production**: Electrons strike tungsten target, producing photons
- **Radiation units**: Gray (Gy) for absorbed dose, Sievert (Sv) for biological effect
- **Exposure factors**: kVp (penetration), mAs (quantity), time (seconds)
- **Inverse square law**: Intensity decreases with distance squared

**Radiation Safety Principles:**
- **ALARA concept**: As Low As Reasonably Achievable
- **Time**: Minimize exposure time
- **Distance**: Maximize distance from source (inverse square law)
- **Shielding**: Use lead aprons, thyroid shields, gloves
- **Monitoring**: Wear dosimeters, regular badge readings

**Personal Protective Equipment:**
- **Lead apron**: Minimum 0.5mm lead equivalence
- **Thyroid shield**: Especially important for younger staff
- **Lead gloves**: For manual restraint (if absolutely necessary)
- **Protective glasses**: With side shields
- **Positioning aids**: Sandbags, foam wedges, tape (never hands)

## Radiographic Equipment
Understanding and operating imaging systems:

**X-ray Machine Components:**
- **Generator**: Controls kVp, mA, exposure time
- **X-ray tube**: Contains cathode (filament) and anode (target)
- **Collimator**: Limits beam size, reduces scatter radiation
- **Table/grid**: Bucky grid reduces scatter (usually 8:1 or 10:1 ratio)
- **Digital systems**: DR (direct radiography) or CR (computed radiography)

**Digital Radiography Advantages:**
- **Wider dynamic range**: Fewer retakes
- **Image manipulation**: Adjust contrast, brightness, magnification
- **Storage and sharing**: Electronic records, easy transmission
- **Processing speed**: Immediate image availability

**Quality Control:**
- **Regular testing**: Calibration, consistency checks
- **Artifact recognition**: Dust, scratches, processing errors
- **Maintenance**: Scheduled service, cleaning protocols
- **Repeat analysis**: Track and minimize retake rates

## Patient Positioning and Techniques
Standard radiographic views and positioning:

**Basic Principles:**
- **Minimum two views**: Orthogonal (90° apart) for 3D assessment
- **Standard terminology**: DV (dorsoventral), VD (ventrodorsal), lateral (right or left)
- **Positioning aids**: Sandbags, foam wedges, tape, troughs
- **Measurement**: Measure at thickest part for technique chart

**Common Projections:**
- **Thorax**: Right lateral and VD views (inspiration)
- **Abdomen**: Right lateral and VD views (expiration)
- **Extremities**: At least two views (AP/ML or oblique)
- **Skull**: Multiple specialized views (lateral, DV, oblique)
- **Spine**: Segmental views as needed

**Species-Specific Considerations:**
- **Cats**: More portable, thinner tissues, different normal anatomy
- **Birds/reptiles**: Lower kVp settings, specialized positioning
- **Large animals**: Higher output needed, portable units often used
- **Exotics**: Special handling requirements, rapid exposures

## Contrast Studies
Specialized radiographic procedures:

**Gastrointestinal Studies:**
- **Barium sulfate**: Positive contrast, 10-15 ml/kg (oral)
- **Indications**: Obstruction, motility disorders, masses
- **Timing images**: Immediate, 15min, 30min, 1hr, 2hr, 4hr, 24hr
- **Complications**: Aspiration pneumonia, barium impaction

**Urinary Studies:**
- **IV urogram**: Iodinated contrast IV, nephrogram (5min), pyelogram (20min)
- **Cystogram**: Positive (iodine) or negative (air) contrast via catheter
- **Indications**: Renal function, ureter patency, bladder integrity
- **Contraindications**: Dehydration, renal failure

**Myelography:**
- **Contrast**: Non-ionic iodinated into subarachnoid space
- **Indications**: Spinal cord compression, disc disease
- **Risks**: Seizures, neurological worsening
- **Post-procedure**: Head elevated, monitor closely

## Radiographic Interpretation
Systematic approach to reading radiographs:

**Systematic Evaluation:**
1. **Patient data**: Verify name, date, views
2. **Technical quality**: Positioning, exposure, artifacts
3. **Systematic review**: ABCs (Airways, Bones, Cardiac, Diaphragm, Everything else)
4. **Comparative assessment**: Left vs right, current vs previous
5. **Differential diagnoses**: List possibilities based on findings

**Thoracic Interpretation:**
- **Cardiac silhouette**: Size (2.5-3.5 intercostal spaces), shape
- **Pulmonary vessels**: Artery:vein ratio (1:1), distribution
- **Lung patterns**: Alveolar, interstitial, bronchial, vascular
- **Pleural space**: Effusion, pneumothorax, masses
- **Mediastinum**: Width, displacement, masses

**Abdominal Interpretation:**
- **Organ size/shape**: Liver, spleen, kidneys, bladder
- **Bowel patterns**: Diameter, content, position, wall thickness
- **Peritoneal detail**: Fat, fluid, masses, gas patterns
- **Retroperitoneal space**: Kidney position, lymph nodes
- **Urogenital system**: Bladder, prostate, uterus

**Musculoskeletal Interpretation:**
- **Bone evaluation**: Cortex, medulla, growth plates, joints
- **Fracture assessment**: Location, type, displacement, comminution
- **Joint assessment**: Space width, osteophytes, subchondral bone
- **Soft tissues**: Swelling, mineralization, foreign bodies

## Common Radiographic Findings
Recognizing typical pathological patterns:

**Cardiac Diseases:**
- **Cardiomegaly**: Enlarged cardiac silhouette
- **Pulmonary edema**: Perihilar alveolar pattern (heart failure)
- **Pleural effusion**: Blunted costophrenic angles, interlobar fissures
- **Pulmonary hypertension**: Enlarged pulmonary arteries

**Respiratory Conditions:**
- **Bronchial pattern**: Donuts and tramlines (asthma, bronchitis)
- **Alveolar pattern**: Air bronchograms (pneumonia, edema)
- **Interstitial pattern**: Increased lung opacity (fibrosis, edema)
- **Mass lesions**: Solitary or multiple nodules

**Abdominal Disorders:**
- **Foreign bodies**: Radiopaque objects (bones, metal, some plastics)
- **Obstruction**: Dilated bowel loops, fluid/gas patterns
- **Peritonitis**: Loss of serosal detail, localized fluid
- **Masses**: Organ displacement, soft tissue opacity

**Orthopedic Conditions:**
- **Osteoarthritis**: Osteophytes, joint space narrowing, sclerosis
- **Osteomyelitis**: Periosteal reaction, bone lysis
- **Neoplasia**: Aggressive bone destruction, Codman's triangle
- **Developmental**: Hip dysplasia, elbow incongruity

## Ultrasound Basics
Introduction to ultrasonography:

**Physics Principles:**
- **Sound waves**: Frequency (MHz), wavelength, velocity
- **Echo generation**: Tissue interfaces reflect sound waves
- **Image formation**: Returning echoes create gray-scale image
- **Artifacts**: Acoustic shadowing, enhancement, reverberation

**Common Applications:**
- **Abdominal ultrasound**: Liver, spleen, kidneys, bladder, intestines
- **Cardiac ultrasound**: Chamber sizes, wall motion, valves
- **Reproductive ultrasound**: Pregnancy diagnosis, fetal viability
- **Guided procedures**: Aspiration, biopsy, centesis

**Ultrasound Advantages:**
- **No radiation**: Safe for repeated examinations
- **Real-time imaging**: Dynamic assessment of movement
- **Soft tissue detail**: Superior to radiography for many organs
- **Doppler capability**: Blood flow assessment

## Advanced Imaging Modalities
Overview of specialized techniques:

**Computed Tomography (CT):**
- **Principles**: X-ray tube rotation, computer reconstruction
- **Advantages**: Cross-sectional imaging, excellent bone detail
- **Applications**: Nasal cavity, inner ear, complex fractures, oncology
- **Limitations**: Cost, availability, anesthesia required

**Magnetic Resonance Imaging (MRI):**
- **Principles**: Magnetic fields, radiofrequency pulses
- **Advantages**: Superior soft tissue contrast, no radiation
- **Applications**: Neurological, orthopedic, soft tissue tumors
- **Contraindications**: Metal implants, pacemakers

**Nuclear Scintigraphy:**
- **Principles**: Radioactive tracers, gamma camera detection
- **Applications**: Thyroid, bone scans, portosystemic shunts
- **Advantages**: Functional imaging, whole-body surveys
- **Safety**: Radiation handling protocols required

## Radiation Protection Regulations
Legal and safety requirements:

**Regulatory Compliance:**
- **Licensing**: State radiation control program requirements
- **Personnel monitoring**: Dosimeter badges, regular readings
- **Equipment registration**: Periodic inspection and certification
- **Record keeping**: Exposure records, quality control logs

**Pregnancy Policies:**
- **Declaration**: Voluntary reporting of pregnancy
- **Additional protection**: Extra monitoring, modified duties
- **Education**: Risks and safety measures
- **Legal rights**: Vary by jurisdiction

**Emergency Procedures:**
- **Equipment malfunction**: Immediate shutdown, report to physicist
- **Radiation overexposure**: Medical evaluation, incident reporting
- **Contamination events**: Decontamination protocols, monitoring
- **Documentation**: Incident reports, corrective actions

## Image Storage and Communication
Managing radiographic data:

**Digital Systems:**
- **PACS**: Picture Archiving and Communication System
- **DICOM**: Digital Imaging and Communications in Medicine standard
- **Storage solutions**: Local servers, cloud-based systems
- **Backup protocols**: Regular, verified backups

**Client Communication:**
- **Image explanation**: Using viewboxes or monitors
- **Educational materials**: Diagrams, models, comparison images
- **Report generation**: Clear, concise written reports
- **Follow-up recommendations**: Additional views, advanced imaging`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does ALARA stand for in radiation safety?",
          options: [
            "Always Leave Area During Radiation",
            "As Low As Reasonably Achievable",
            "Automatic Lock After Radiation Administration",
            "Always Limit All Radiation Always"
          ],
          correctAnswer: 1,
          explanation: "ALARA means As Low As Reasonably Achievable - minimizing radiation exposure while obtaining diagnostic images."
        },
        {
          id: 2,
          question: "What is the minimum lead equivalence for protective aprons?",
          options: ["0.25mm", "0.5mm", "1.0mm", "2.0mm"],
          correctAnswer: 1,
          explanation: "Protective aprons should have at least 0.5mm lead equivalence to provide adequate radiation protection."
        },
        {
          id: 3,
          question: "How many views are typically needed for proper radiographic assessment?",
          options: ["One view", "Two orthogonal views", "Three views minimum", "Four views always"],
          correctAnswer: 1,
          explanation: "At least two orthogonal (90° apart) views are needed for three-dimensional assessment of anatomy."
        },
        {
          id: 4,
          question: "What does kVp control in radiography?",
          options: ["Quantity of radiation", "Penetration power", "Exposure time", "Film processing"],
          correctAnswer: 1,
          explanation: "kVp (kilovoltage peak) controls the penetrating power of the X-ray beam."
        },
        {
          id: 5,
          question: "Which contrast agent is used for gastrointestinal studies?",
          options: ["Iodinated contrast", "Barium sulfate", "Air", "Gadolinium"],
          correctAnswer: 1,
          explanation: "Barium sulfate is the standard positive contrast agent for gastrointestinal studies."
        },
        {
          id: 6,
          question: "What is the normal cardiac silhouette size in dogs?",
          options: [
            "1-2 intercostal spaces",
            "2.5-3.5 intercostal spaces",
            "4-5 intercostal spaces",
            "No specific measurement"
          ],
          correctAnswer: 1,
          explanation: "The normal canine cardiac silhouette spans approximately 2.5-3.5 intercostal spaces on lateral view."
        },
        {
          id: 7,
          question: "Which lung pattern shows air bronchograms?",
          options: ["Bronchial pattern", "Alveolar pattern", "Interstitial pattern", "Vascular pattern"],
          correctAnswer: 1,
          explanation: "Air bronchograms (air-filled bronchi against opaque alveoli) are characteristic of alveolar patterns."
        },
        {
          id: 8,
          question: "What does a loss of abdominal serosal detail typically indicate?",
          options: ["Normal finding", "Free abdominal fluid", "Gas distension", "Foreign body"],
          correctAnswer: 1,
          explanation: "Loss of serosal detail (organ borders not visible) usually indicates free abdominal fluid or peritonitis."
        },
        {
          id: 9,
          question: "Which imaging modality uses sound waves?",
          options: ["Radiography", "Ultrasound", "CT scan", "MRI"],
          correctAnswer: 1,
          explanation: "Ultrasound uses high-frequency sound waves to create images of internal structures."
        },
        {
          id: 10,
          question: "What is the main advantage of MRI over CT?",
          options: [
            "Lower cost",
            "Faster imaging time",
            "Superior soft tissue contrast",
            "Better for bone imaging"
          ],
          correctAnswer: 2,
          explanation: "MRI provides superior soft tissue contrast compared to CT, making it ideal for neurological and soft tissue imaging."
        },
        {
          id: 11,
          question: "What does the inverse square law state about radiation?",
          options: [
            "Intensity increases with distance",
            "Intensity decreases with distance squared",
            "Intensity is constant regardless of distance",
            "Intensity doubles every 2 feet"
          ],
          correctAnswer: 1,
          explanation: "The inverse square law states that radiation intensity decreases with the square of the distance from the source."
        },
        {
          id: 12,
          question: "What type of grid ratio is commonly used in veterinary radiography?",
          options: ["5:1", "8:1 or 10:1", "12:1", "16:1"],
          correctAnswer: 1,
          explanation: "8:1 or 10:1 grid ratios are commonly used in veterinary radiography to reduce scatter radiation."
        },
        {
          id: 13,
          question: "When should thoracic radiographs be taken relative to respiration?",
          options: ["At peak expiration", "At peak inspiration", "Mid-respiration", "Doesn't matter"],
          correctAnswer: 1,
          explanation: "Thoracic radiographs should be taken at peak inspiration to fully expand the lungs for optimal evaluation."
        },
        {
          id: 14,
          question: "What is the standard oral dose of barium for GI studies?",
          options: ["1-2 ml/kg", "5-8 ml/kg", "10-15 ml/kg", "20-25 ml/kg"],
          correctAnswer: 2,
          explanation: "Barium sulfate is typically administered at 10-15 ml/kg for gastrointestinal contrast studies."
        },
        {
          id: 15,
          question: "What does DICOM stand for?",
          options: [
            "Digital Imaging Control Management",
            "Digital Imaging and Communications in Medicine",
            "Diagnostic Image Compression Method",
            "Direct Image Communication Mode"
          ],
          correctAnswer: 1,
          explanation: "DICOM stands for Digital Imaging and Communications in Medicine, the international standard for medical imaging."
        },
        {
          id: 16,
          question: "Which bone change is characteristic of osteoarthritis?",
          options: ["Bone lysis", "Osteophyte formation", "Pathological fracture", "Sunburst pattern"],
          correctAnswer: 1,
          explanation: "Osteophyte (bone spur) formation at joint margins is characteristic of osteoarthritis."
        },
        {
          id: 17,
          question: "What ultrasound artifact causes bright echoes behind fluid-filled structures?",
          options: ["Shadowing", "Enhancement", "Reverberation", "Refraction"],
          correctAnswer: 1,
          explanation: "Acoustic enhancement (increased brightness behind fluid) occurs because fluid attenuates sound less than tissue."
        },
        {
          id: 18,
          question: "What must be worn by personnel in the radiographic suite?",
          options: ["Lead apron", "Lead gloves", "Thyroid shield", "All of the above"],
          correctAnswer: 3,
          explanation: "All protective equipment (lead apron, gloves, thyroid shield) should be worn when in the radiographic suite during exposures."
        },
        {
          id: 19,
          question: "What does PACS stand for?",
          options: [
            "Patient Archiving and Communication System",
            "Picture Archiving and Communication System",
            "Professional Archiving of Clinical Studies",
            "Portable Archiving Computer System"
          ],
          correctAnswer: 1,
          explanation: "PACS stands for Picture Archiving and Communication System for storing and retrieving medical images."
        },
        {
          id: 20,
          question: "What is the primary risk of barium contrast studies?",
          options: [
            "Allergic reaction",
            "Aspiration pneumonia",
            "Renal failure",
            "Cardiac arrhythmia"
          ],
          correctAnswer: 1,
          explanation: "Aspiration of barium into the lungs can cause severe pneumonia, making proper patient preparation crucial."
        }
      ]
    },
    {
      id: 5,
      title: "Pharmacy and Pharmacology",
      content: `# Advanced Medication Management

This module covers veterinary pharmacology principles, drug calculations, medication administration, and pharmacy management in clinical practice.

## Pharmacology Fundamentals
Basic principles of drug action and disposition:

**Drug Terminology:**
- **Pharmacokinetics**: What the body does to the drug (ADME: Absorption, Distribution, Metabolism, Excretion)
- **Pharmacodynamics**: What the drug does to the body (mechanism of action)
- **Therapeutic index**: Ratio of toxic dose to therapeutic dose (wider is safer)
- **Half-life**: Time for drug concentration to decrease by 50%

**Drug Sources and Forms:**
- **Sources**: Natural (plant, animal, mineral), synthetic, semi-synthetic
- **Formulations**: Tablets, capsules, liquids, injectables, topicals, transdermals
- **Controlled substances**: Schedule II-V drugs with abuse potential
- **Compounded medications**: Custom formulations for specific needs

**Drug Nomenclature:**
- **Chemical name**: Precise chemical structure description
- **Generic name**: Official non-proprietary name
- **Trade name**: Brand name given by manufacturer
- **Veterinary-approved vs human drugs**: Legal and safety considerations

## Drug Classes and Uses
Major categories of veterinary medications:

**Antimicrobials:**
- **Penicillins**: Amoxicillin, ampicillin (gram-positive coverage)
- **Cephalosporins**: Cefazolin, cefovecin (extended spectrum)
- **Tetracyclines**: Doxycycline (rickettsial, some bacterial)
- **Fluoroquinolones**: Enrofloxacin, marbofloxacin (broad spectrum)
- **Metronidazole**: Anaerobic bacteria, protozoa
- **Aminoglycosides**: Gentamicin, amikacin (gram-negative, renal toxic)

**Anti-inflammatory Drugs:**
- **NSAIDs**: Carprofen, meloxicam, deracoxib (COX inhibition)
- **Corticosteroids**: Prednisone, dexamethasone (potent anti-inflammatory)
- **Disease-modifying agents**: Pentosan, adequan (cartilage protection)

**Parasiticides:**
- **Ectoparasiticides**: Fipronil, selamectin, imidacloprid (fleas/ticks)
- **Endoparasiticides**: Fenbendazole, praziquantel, milbemycin (worms)
- **Heartworm preventives**: Ivermectin, milbemycin, moxidectin
- **Combination products**: Multiple parasite protection in one product

**Cardiovascular Drugs:**
- **ACE inhibitors**: Enalapril, benazepril (heart failure, hypertension)
- **Diuretics**: Furosemide (fluid reduction)
- **Antiarrhythmics**: Lidocaine, sotalol (rhythm control)
- **Positive inotropes**: Pimobendan (improves heart contraction)

**Neurological Drugs:**
- **Anticonvulsants**: Phenobarbital, potassium bromide, levetiracetam
- **Behavior modifers**: Fluoxetine, clomipramine (anxiety disorders)
- **Pain medications**: Gabapentin (neuropathic pain)

**Endocrine Drugs:**
- **Insulin**: Regular, NPH, PZI, glargine (diabetes treatment)
- **Thyroid supplements**: Levothyroxine (hypothyroidism)
- **Anti-thyroid drugs**: Methimazole (hyperthyroidism)

## Drug Calculations
Essential mathematics for medication administration:

**Basic Formulas:**
- **Dose calculation**: (Weight in kg) × (Dose in mg/kg) = Total mg needed
- **Concentration calculation**: (Total mg needed) ÷ (Concentration mg/ml) = Volume to administer
- **Fluid rate calculation**: (Maintenance: 50-60 ml/kg/day) or (Deficit + maintenance + ongoing losses)

**Common Conversions:**
- **Weight**: 1 kg = 2.2 lb
- **Volume**: 1 ml = 1 cc = approx. 20 drops (varies by dropper)
- **Concentration**: 1% = 10 mg/ml, 5% = 50 mg/ml
- **Dilutions**: C1 × V1 = C2 × V2 (concentration × volume)

**Practice Scenarios:**
- **Oral medications**: Tablet splitting, liquid measurements
- **Injectable drugs**: Drawing up correct volumes
- **Constant rate infusions**: mg/kg/min calculations
- **Chemotherapy drugs**: Precise calculations with verification

## Medication Administration
Proper techniques for different routes:

**Oral Administration:**
- **Tablets/capsules**: Pill pockets, pilling devices, hiding in food
- **Liquids**: Oral syringes, droppers, mixing with food
- **Precautions**: Ensure swallowing, check mouth after pilling
- **Timing**: With/without food as directed, consistent schedule

**Injectable Routes:**
- **Subcutaneous (SQ)**: Loose skin tent, 45° angle, common for vaccines
- **Intramuscular (IM)**: Proper muscle selection, 90° angle, aspirate before injection
- **Intravenous (IV)**: Aseptic technique, proper catheter placement, slow administration
- **Other routes**: Intra-articular, intraperitoneal, intradermal

**Topical Administration:**
- **Spot-on treatments**: Part hair, apply to skin, not hair
- **Ophthalmic**: Lower eyelid pouch, avoid touching eye
- **Otic**: Massage ear canal after instillation
- **Transdermal**: Glove application, rotate sites

**Special Administration Techniques:**
- **Inhalant medications**: Aerosol chambers for cats with asthma
- **Sublingual**: Rapid absorption, avoid swallowing
- **Rectal**: Emergency route when oral not possible
- **Intraosseous**: Emergency access when IV not possible

## Pharmacy Management
Controlled substances and inventory:

**Controlled Substances:**
- **DEA regulations**: Storage, documentation, disposal requirements
- **Schedule II-V**: Varying levels of control based on abuse potential
- **Logbook requirements**: Complete, accurate, timely entries
- **Inventory counts**: Regular scheduled and surprise audits

**Storage Requirements:**
- **Temperature control**: Refrigerated (2-8°C), room temperature (15-30°C)
- **Light protection**: Amber vials for light-sensitive drugs
- **Security**: Locked cabinets for controlled substances
- **Organization**: Alphabetical, by class, expiration date tracking

**Expiration and Disposal:**
- **Expiration dates**: Never use expired medications
- **Return programs**: Some manufacturers accept expired drugs
- **Proper disposal**: Follow local regulations for pharmaceutical waste
- **Controlled substance disposal**: Witnessed destruction, proper documentation

**Inventory Control:**
- **Ordering systems**: Maintain par levels, track usage patterns
- **Receiving procedures**: Check shipments, verify quantities
- **Stock rotation**: First in, first out (FIFO) system
- **Theft prevention**: Secure storage, limited access

## Adverse Drug Reactions
Recognition and management:

**Common Reactions:**
- **Gastrointestinal**: Vomiting, diarrhea, anorexia
- **Allergic**: Urticaria, facial swelling, anaphylaxis
- **Neurological**: Sedation, ataxia, seizures
- **Organ toxicity**: Hepatic, renal, bone marrow suppression

**Risk Factors:**
- **Breed predispositions**: Collies (ivermectin sensitivity), Dobermans (sulfa drug reactions)
- **Age considerations**: Pediatric and geriatric patients
- **Concurrent diseases**: Liver/kidney impairment affects metabolism/excretion
- **Drug interactions**: Multiple medications increasing risk

**Monitoring Parameters:**
- **Baseline testing**: Before starting certain medications
- **Therapeutic monitoring**: Drug levels (phenobarbital, digoxin)
- **Organ function**: Regular bloodwork for hepatotoxic/nephrotoxic drugs
- **Clinical signs**: Owner observation of potential side effects

**Reporting Systems:**
- **FDA reporting**: For adverse drug events
- **Manufacturer reports**: Required for some reactions
- **Clinic documentation**: Complete records of all reactions
- **Client education**: What to watch for, when to call

## Compounding Pharmacy
Custom medication preparation:

**When Compounding is Needed:**
- **Dose adjustment**: Strength not commercially available
- **Formulation change**: Patient won't take available forms
- **Flavor enhancement**: Improve palatability
- **Allergy management**: Remove dyes or preservatives

**Quality Standards:**
- **USP guidelines**: United States Pharmacopeia standards
- **Beyond-use dating**: Shorter than commercial products
- **Stability testing**: Especially for non-standard formulations
- **Record keeping**: Formulas, ingredients, preparation details

**Common Compounded Preparions:**
- **Transdermal gels**: Methimazole, amitriptyline
- **Flavored liquids**: Adding chicken, fish, or other flavors
- **Chew treats**: Incorporating medications into treats
- **Capsule compounding**: Custom strengths or combinations

**Legal Considerations:**
- **Veterinarian-client-patient relationship**: Required for compounding
- **FDA regulations**: Limitations on copying commercial products
- **State board regulations**: Vary by jurisdiction
- **Liability issues**: Responsibility for compounded product safety

## Client Education
Medication instructions and compliance:

**Clear Instructions:**
- **Written directions**: Dosage, frequency, duration, special instructions
- **Demonstration**: Show administration technique
- **Follow-up plan**: When to recheck, what to monitor
- **Contact information**: Who to call with questions or concerns

**Improving Compliance:**
- **Simplify regimens**: Once daily vs multiple times daily
- **Palatability options**: Different flavors, formulations
- **Administration aids**: Pill pockets, pill guns, demonstration
- **Follow-up reminders**: Phone calls, refill reminders

**Special Situations:**
- **Multiple pets**: Ensuring correct pet receives medication
- **Travel considerations**: Maintaining schedule away from home
- **Cost concerns**: Discussing generic options, assistance programs
- **Storage questions**: Proper home storage conditions

**Monitoring and Follow-up:**
- **Expected outcomes**: What improvement to expect, when
- **Side effect monitoring**: What to watch for, when to call
- **Refill procedures**: When and how to get refills
- **Discontinuation**: Never stop abruptly without veterinary guidance`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does pharmacokinetics refer to?",
          options: [
            "What the drug does to the body",
            "What the body does to the drug",
            "Drug interactions with other medications",
            "Side effects of medications"
          ],
          correctAnswer: 1,
          explanation: "Pharmacokinetics describes ADME: Absorption, Distribution, Metabolism, and Excretion of drugs by the body."
        },
        {
          id: 2,
          question: "What is a drug's therapeutic index?",
          options: [
            "The cost of the medication",
            "The ratio of toxic dose to therapeutic dose",
            "The number of times per day it's given",
            "The expiration date period"
          ],
          correctAnswer: 1,
          explanation: "The therapeutic index is the ratio between toxic and therapeutic doses; a wider index indicates a safer drug."
        },
        {
          id: 3,
          question: "Which drug class includes carprofen and meloxicam?",
          options: ["Antibiotics", "NSAIDs", "Corticosteroids", "Anticonvulsants"],
          correctAnswer: 1,
          explanation: "Carprofen and meloxicam are NSAIDs (Non-Steroidal Anti-Inflammatory Drugs) commonly used for pain and inflammation."
        },
        {
          id: 4,
          question: "What is the maintenance fluid rate for dogs?",
          options: ["10-20 ml/kg/day", "50-60 ml/kg/day", "100-120 ml/kg/day", "150-200 ml/kg/day"],
          correctAnswer: 1,
          explanation: "The maintenance fluid rate for dogs is approximately 50-60 ml per kg of body weight per day."
        },
        {
          id: 5,
          question: "How many pounds are in one kilogram?",
          options: ["1.0 lb", "2.2 lb", "3.5 lb", "4.0 lb"],
          correctAnswer: 1,
          explanation: "One kilogram equals approximately 2.2 pounds, a crucial conversion for medication dosing."
        },
        {
          id: 6,
          question: "What angle is typically used for subcutaneous injections?",
          options: ["15° angle", "45° angle", "90° angle", "180° angle"],
          correctAnswer: 1,
          explanation: "Subcutaneous injections are typically given at a 45° angle into the loose skin tent."
        },
        {
          id: 7,
          question: "Which organization regulates controlled substances?",
          options: ["FDA", "DEA", "USDA", "CDC"],
          correctAnswer: 1,
          explanation: "The DEA (Drug Enforcement Administration) regulates controlled substances with abuse potential."
        },
        {
          id: 8,
          question: "What should you do before giving an intramuscular injection?",
          options: [
            "Massage the area first",
            "Aspirate to check for blood",
            "Apply ice to numb",
            "Shave a large area"
          ],
          correctAnswer: 1,
          explanation: "Always aspirate (pull back on plunger) before IM injection to ensure you're not in a blood vessel."
        },
        {
          id: 9,
          question: "Which breed is sensitive to ivermectin?",
          options: ["Labrador Retrievers", "Collies", "German Shepherds", "Poodles"],
          correctAnswer: 1,
          explanation: "Collies and other herding breeds may have MDR1 gene mutation causing ivermectin sensitivity."
        },
        {
          id: 10,
          question: "What temperature should refrigerated medications be stored at?",
          options: ["-20°C to -10°C", "2°C to 8°C", "15°C to 25°C", "30°C to 40°C"],
          correctAnswer: 1,
          explanation: "Refrigerated medications should be stored at 2-8°C (approximately 36-46°F)."
        },
        {
          id: 11,
          question: "What does FIFO mean in pharmacy management?",
          options: [
            "First In, First Out",
            "Frequent Inventory, Frequent Ordering",
            "Fast Identification For Orders",
            "Final Inventory For October"
          ],
          correctAnswer: 0,
          explanation: "FIFO (First In, First Out) means using older stock before newer stock to prevent medication expiration."
        },
        {
          id: 12,
          question: "What is a common sign of an allergic drug reaction?",
          options: ["Increased appetite", "Facial swelling", "Weight gain", "More energy"],
          correctAnswer: 1,
          explanation: "Facial swelling (angioedema) is a common sign of allergic reactions to medications."
        },
        {
          id: 13,
          question: "When is compounding typically necessary?",
          options: [
            "For all medications",
            "When commercial formulation isn't suitable",
            "To save money",
            "For all controlled substances"
          ],
          correctAnswer: 1,
          explanation: "Compounding is needed when commercial formulations aren't suitable due to dose, form, or ingredient issues."
        },
        {
          id: 14,
          question: "What should always be provided with medication instructions?",
          options: [
            "Only verbal instructions",
            "Written directions",
            "Just the prescription label",
            "No instructions needed"
          ],
          correctAnswer: 1,
          explanation: "Always provide written directions in addition to verbal instructions to ensure client understanding and compliance."
        },
        {
          id: 15,
          question: "What does 1% concentration equal in mg/ml?",
          options: ["1 mg/ml", "10 mg/ml", "100 mg/ml", "1000 mg/ml"],
          correctAnswer: 1,
          explanation: "1% concentration equals 10 mg per ml (1g/100ml = 1000mg/100ml = 10mg/ml)."
        },
        {
          id: 16,
          question: "Which drug is used for hypothyroidism?",
          options: ["Insulin", "Levothyroxine", "Methimazole", "Prednisone"],
          correctAnswer: 1,
          explanation: "Levothyroxine is thyroid hormone supplementation used to treat hypothyroidism."
        },
        {
          id: 17,
          question: "What is the half-life of a drug?",
          options: [
            "Time to take full effect",
            "Time for concentration to decrease by 50%",
            "Duration of action",
            "Time between doses"
          ],
          correctAnswer: 1,
          explanation: "Half-life is the time required for drug concentration in the body to decrease by 50%."
        },
        {
          id: 18,
          question: "Which administration route is fastest for emergency drugs?",
          options: ["Oral", "Subcutaneous", "Intravenous", "Topical"],
          correctAnswer: 2,
          explanation: "Intravenous administration provides the fastest drug delivery, crucial in emergencies."
        },
        {
          id: 19,
          question: "What should you check before using any medication?",
          options: [
            "The color",
            "Expiration date",
            "The price",
            "The manufacturer"
          ],
          correctAnswer: 1,
          explanation: "Always check expiration dates before administering任何 medications to ensure potency and safety."
        },
        {
          id: 20,
          question: "What organization should adverse drug reactions be reported to?",
          options: ["FDA", "DEA", "Clinic only", "Pharmaceutical company only"],
          correctAnswer: 0,
          explanation: "Adverse drug reactions should be reported to the FDA (Food and Drug Administration) for monitoring and safety evaluation."
        }
      ]
    },
    {
      id: 6,
      title: "Emergency and Critical Care",
      content: `# Advanced Emergency Medicine

This module covers recognition, stabilization, and management of critical patients, as well as advanced life support techniques in veterinary emergency medicine.

## Triage and Assessment
Rapid evaluation of emergency patients:

**Triage Categories:**
- **Immediate (Red)**: Life-threatening, requires immediate intervention
- **Urgent (Yellow)**: Serious but stable, treat within 30 minutes
- **Non-urgent (Green)**: Stable, can wait for evaluation
- **Deceased/Expectant (Black)**: Deceased or unlikely to survive

**Primary Survey (ABCDE):**
- **A - Airway**: Patency, obstruction, need for intubation
- **B - Breathing**: Rate, effort, oxygenation, need for ventilation
- **C - Circulation**: Heart rate, pulse quality, mucous membranes, capillary refill time
- **D - Disability**: Neurological status (AVPU scale: Alert, Verbal, Pain, Unresponsive)
- **E - Exposure**: Complete examination, temperature, wounds

**Vital Parameter Ranges (Critical Values):**
- **Heart rate**: <60 or >180 bpm (dogs), <100 or >220 bpm (cats)
- **Respiratory rate**: <8 or >60 breaths/min
- **Temperature**: <36°C (96.8°F) or >40.5°C (104.9°F)
- **Blood pressure**: Systolic <90 or >180 mmHg
- **Mentation**: Depressed, stuporous, comatose

## Shock Recognition and Management
Identifying and treating circulatory failure:

**Shock Types:**
- **Hypovolemic**: Blood/fluid loss (hemorrhage, dehydration)
- **Cardiogenic**: Pump failure (heart disease, arrhythmias)
- **Distributive**: Vasodilation (sepsis, anaphylaxis, neurogenic)
- **Obstructive**: Blood flow obstruction (cardiac tamponade, GDV)

**Clinical Signs:**
- **Early shock**: Tachycardia, pale mucous membranes, prolonged CRT
- **Late shock**: Bradycardia, hypothermia, obtunded mentation
- **Compensatory mechanisms**: Increased heart rate, vasoconstriction
- **Decompensation**: Hypotension, organ failure, death

**Initial Management:**
- **Fluid resuscitation**: Crystalloids (20-40 ml/kg bolus), colloids (5-10 ml/kg)
- **Oxygen therapy**: Flow-by, mask, oxygen cage, intubation
- **Monitoring**: Blood pressure, lactate, urine output
- **Specific treatments**: Based on shock type (blood products, vasopressors)

## Respiratory Emergencies
Management of breathing difficulties:

**Common Conditions:**
- **Upper airway obstruction**: Brachycephalic syndrome, laryngeal paralysis, foreign bodies
- **Lower airway disease**: Feline asthma, bronchitis, pneumonia
- **Pleural space disease**: Pneumothorax, pleural effusion, diaphragmatic hernia
- **Pulmonary parenchymal disease**: Pulmonary edema, contusions, ARDS

**Emergency Interventions:**
- **Oxygen supplementation**: Start with 100% oxygen
- **Thoracocentesis**: For pneumothorax or effusion
- **Tracheostomy**: Emergency airway access
- **Mechanical ventilation**: For respiratory failure

**Monitoring Parameters:**
- **Respiratory rate and effort**: Increasing effort indicates worsening
- **Oxygen saturation**: Target >95% on room air
- **Blood gases**: PaO2 >80 mmHg, PaCO2 35-45 mmHg
- **Cyanosis**: Late sign of severe hypoxemia

## Cardiovascular Emergencies
Critical cardiac conditions:

**Life-Threatening Arrhythmias:**
- **Ventricular tachycardia**: Wide bizarre QRS, rate >160 bpm
- **Atrial fibrillation**: Irregularly irregular, no P waves
- **Third-degree AV block**: Atrial and ventricular rates independent
- **Asystole/Pulseless electrical activity**: Cardiac arrest

**Emergency Drugs:**
- **Lidocaine**: For ventricular tachycardia (2-4 mg/kg IV)
- **Atropine**: For bradycardia (0.02-0.04 mg/kg IV)
- **Epinephrine**: For cardiac arrest (0.01 mg/kg IV)
- **Antiarrhythmics**: Based on specific rhythm disturbance

**Cardiac Monitoring:**
- **ECG interpretation**: Rate, rhythm, intervals, complexes
- **Blood pressure monitoring**: Direct or indirect methods
- **Echocardiography**: For structural assessment
- **Cardiac biomarkers**: Troponin, BNP for myocardial damage

## Neurological Emergencies
Critical nervous system disorders:

**Common Presentations:**
- **Seizures**: Status epilepticus (≥5 minutes or cluster without recovery)
- **Head trauma**: Assessment using modified Glasgow coma scale
- **Intervertebral disc disease**: Spinal cord compression
- **Toxin exposure**: Organophosphates, metaldehyde, bromethalin

**Initial Management:**
- **Seizure control**: Diazepam (0.5 mg/kg IV), levetiracetam (20 mg/kg IV)
- **Intracranial pressure control**: Mannitol (0.5-1 g/kg IV), hypertonic saline
- **Spinal stabilization**: Strict rest, anti-inflammatories
- **Decontamination**: For toxins (induced vomiting, activated charcoal)

**Monitoring:**
- **Neurological exams**: Serial assessments for progression
- **Pupillary responses**: Size, symmetry, reactivity
- **Mentation changes**: Using AVPU scale
- **Cranial nerve assessment**: For brainstem localization

## Toxin Management
Emergency toxicology:

**Common Toxins:**
- **Rodenticides**: Anticoagulant (warfarin), bromethalin, cholecalciferol
- **Human medications**: NSAIDs, antidepressants, ADHD medications
- **Foods**: Chocolate, grapes/raisins, xylitol, onions/garlic
- **Plants**: Lilies (cats), sago palm, oleander

**Decontamination Principles:**
- **Induced vomiting**: Only in alert animals, within 2 hours of ingestion
- **Activated charcoal**: 1-3 g/kg, binds toxins in GI tract
- **Gastric lavage**: For life-threatening ingestions, under anesthesia
- **Enhance elimination**: IV fluids, specific antidotes

**Antidotes:**
- **Vitamin K1**: For anticoagulant rodenticides
- **N-acetylcysteine**: For acetaminophen toxicity
- **Atropine**: For organophosphate/carbamate toxicity
- **4-MP (fomepizole)**: For ethylene glycol (antifreeze) toxicity

**Resources:**
- **Animal Poison Control**: ASPCA (888-426-4435), Pet Poison Helpline (855-764-7661)
- **Toxin databases**: Regularly updated information
- **Calculation tools**: Minimum toxic doses, treatment protocols

## Trauma Management
Comprehensive trauma care:

**Trauma Survey:**
- **Primary survey**: ABCDE assessment
- **Secondary survey**: Head-to-toe examination
- **Tertiary survey**: Detailed evaluation after stabilization

**Specific Injuries:**
- **Thoracic trauma**: Pneumothorax, hemothorax, pulmonary contusions
- **Abdominal trauma**: Organ rupture, hemorrhage, urinary tract injury
- **Orthopedic trauma**: Fractures, luxations, soft tissue injuries
- **Head trauma**: Skull fractures, brain injury, ocular injuries

**Wound Management:**
- **Hemostasis**: Direct pressure, pressure bandages, tourniquets (last resort)
- **Cleaning and debridement**: Sterile technique, remove foreign material
- **Temporary closure**: Until definitive repair possible
- **Antibiotics**: Based on contamination level, wound type

**Pain Management:**
- **Multimodal approach**: Opioids, NSAIDs, local anesthetics
- **Constant rate infusions**: For continuous pain control
- **Monitoring**: Pain scales, behavioral assessment
- **Adjustment**: Based on response, side effects

## Fluid Therapy in Critical Patients
Advanced fluid management:

**Types of Fluids:**
- **Crystalloids**: Lactated Ringer's, Normal Saline, Plasmalyte
- **Colloids**: Hetastarch, dextrans, gelatin
- **Blood products**: Packed red blood cells, fresh frozen plasma, whole blood
- **Specialty fluids**: Hypertonic saline, bicarbonate solutions

**Fluid Rate Calculations:**
- **Resuscitation bolus**: 20-40 ml/kg crystalloids, reassess after each bolus
- **Maintenance**: 50-60 ml/kg/day (2-2.5 ml/kg/hr)
- **Replacement**: For ongoing losses (vomiting, diarrhea, third spacing)
- **Monitoring**: Body weight, urine output, blood pressure, lactate

**Complications:**
- **Fluid overload**: Pulmonary edema, tissue swelling
- **Electrolyte imbalances**: Especially with rapid administration
- **Coagulopathy**: With large volume crystalloid resuscitation
- **Acid-base disturbances**: From specific fluid types

## Monitoring Critical Patients
Advanced monitoring techniques:

**Continuous Monitoring:**
- **Cardiorespiratory**: ECG, blood pressure, pulse oximetry, capnography
- **Neurological**: Mentation, pupillary responses, pain assessment
- **Metabolic**: Temperature, blood glucose, electrolytes
- **Renal**: Urine output (1-2 ml/kg/hr), specific gravity

**Laboratory Monitoring:**
- **Point-of-care testing**: Blood gas, lactate, glucose, electrolytes
- **Serial bloodwork**: CBC, chemistry, coagulation profiles
- **Therapeutic drug monitoring**: For certain medications
- **Trend analysis**: More important than single values

**Documentation:**
- **Flow sheets**: Hourly or more frequent recordings
- **Problem lists**: Prioritized active issues
- **Treatment plans**: Clear objectives and interventions
- **Communication**: Between team members, shift changes

## Emergency Procedures
Life-saving techniques:

**Airway Management:**
- **Endotracheal intubation**: Different tube sizes, styles (cuffed/uncuffed)
- **Emergency tracheostomy**: Surgical airway access
- **Cricothyroidotomy**: Needle or surgical technique
- **Oxygen delivery systems**: Mask, flow-by, nasal cannula, oxygen cage

**Thoracic Procedures:**
- **Thoracocentesis**: Needle or catheter technique, diagnostic and therapeutic
- **Chest tube placement**: For persistent pneumothorax or effusion
- **Pericardiocentesis**: For cardiac tamponade
- **Thoracotomy**: Emergency surgical intervention

**Abdominal Procedures:**
- **Abdominocentesis**: Diagnostic tap or therapeutic drainage
- **Diagnostic peritoneal lavage**: For detecting hemorrhage or sepsis
- **Emergency laparotomy**: For penetrating trauma, hemorrhage control
- **Bladder catheterization**: For obstruction, urine output monitoring

**Vascular Access:**
- **Peripheral catheters**: Short-term access
- **Central venous catheters**: For critical patients, multiple lumens
- **Intraosseous catheters**: When IV access impossible (sternum, femur, tibia)
- **Arterial catheters**: For continuous blood pressure monitoring

## End-of-Life Care
Compassionate care in terminal situations:

**Euthanasia Considerations:**
- **Indications**: Poor quality of life, untreatable suffering
- **Decision making**: Client counseling, quality of life scales
- **Procedure**: Sedation, IV catheter, euthanasia solution
- **Aftercare options**: Burial, cremation (communal or private)

**Palliative Care:**
- **Pain management**: Aggressive multimodal approach
- **Symptom control**: Nausea, anxiety, breathing difficulties
- **Nutritional support**: Appetite stimulants, assisted feeding
- **Client support**: Emotional support, realistic expectations

**Client Communication:**
- **Clear explanations**: Prognosis, options, likely outcomes
- **Compassionate delivery**: Of difficult news
- **Decision support**: Without pressure or judgment
- **Follow-up**: Bereavement support, memorial options

**Professional Self-Care:**
- **Recognizing compassion fatigue**: Emotional exhaustion
- **Healthy coping mechanisms**: Peer support, debriefing, hobbies
- **Work-life balance**: Setting boundaries, taking breaks
- **Continuing education**: Staying current, skill development`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does the 'C' in ABCDE primary survey stand for?",
          options: ["Consciousness", "Circulation", "Color", "Cardiac"],
          correctAnswer: 1,
          explanation: "In the ABCDE primary survey, 'C' stands for Circulation, assessing heart rate, pulse quality, and perfusion."
        },
        {
          id: 2,
          question: "What is considered a critical heart rate for dogs?",
          options: ["<60 or >180 bpm", "<80 or >160 bpm", "<100 or >200 bpm", "<120 or >220 bpm"],
          correctAnswer: 0,
          explanation: "Critical heart rates for dogs are <60 bpm (bradycardia) or >180 bpm (tachycardia), requiring immediate attention."
        },
        {
          id: 3,
          question: "Which type of shock results from blood loss?",
          options: ["Cardiogenic shock", "Hypovolemic shock", "Distributive shock", "Obstructive shock"],
          correctAnswer: 1,
          explanation: "Hypovolemic shock results from loss of blood volume due to hemorrhage, dehydration, or fluid shifts."
        },
        {
          id: 4,
          question: "What is the initial fluid bolus dose for shock resuscitation?",
          options: ["5-10 ml/kg", "20-40 ml/kg", "50-60 ml/kg", "80-100 ml/kg"],
          correctAnswer: 1,
          explanation: "Initial shock resuscitation typically involves 20-40 ml/kg crystalloid boluses, reassessing after each bolus."
        },
        {
          id: 5,
          question: "What emergency procedure is used for pneumothorax?",
          options: ["Abdominocentesis", "Thoracocentesis", "Pericardiocentesis", "Cystocentesis"],
          correctAnswer: 1,
          explanation: "Thoracocentesis (chest tap) is used to remove air from the pleural space in pneumothorax."
        },
        {
          id: 6,
          question: "What defines status epilepticus?",
          options: [
            "Any single seizure",
            "Seizures lasting ≥5 minutes or clusters without recovery",
            "Two seizures in one week",
            "Seizures only during sleep"
          ],
          correctAnswer: 1,
          explanation: "Status epilepticus is defined as continuous seizure activity ≥5 minutes or multiple seizures without regaining consciousness between them."
        },
        {
          id: 7,
          question: "What is the first-line drug for stopping active seizures?",
          options: ["Phenobarbital", "Diazepam", "Levetiracetam", "Potassium bromide"],
          correctAnswer: 1,
          explanation: "Diazepam (0.5 mg/kg IV) is typically the first-line drug for stopping active seizure activity."
        },
        {
          id: 8,
          question: "Which toxin requires vitamin K1 as an antidote?",
          options: ["Acetaminophen", "Anticoagulant rodenticides", "Ethylene glycol", "Chocolate"],
          correctAnswer: 1,
          explanation: "Vitamin K1 is the specific antidote for anticoagulant rodenticide (warfarin-type) toxicity."
        },
        {
          id: 9,
          question: "What is the minimum urine output expected in hydrated patients?",
          options: ["0.1-0.5 ml/kg/hr", "1-2 ml/kg/hr", "3-5 ml/kg/hr", "6-8 ml/kg/hr"],
          correctAnswer: 1,
          explanation: "Adequate urine output is 1-2 ml per kg per hour, indicating good renal perfusion and hydration."
        },
        {
          id: 10,
          question: "What does AVPU stand for in neurological assessment?",
          options: [
            "Arteries, Veins, Pressure, Ultrasound",
            "Alert, Verbal, Pain, Unresponsive",
            "Airway, Ventilation, Perfusion, Unconscious",
            "Assessment, Vital signs, Pupils, Unresponsive"
          ],
          correctAnswer: 1,
          explanation: "AVPU is a rapid neurological assessment scale: Alert, responds to Verbal stimuli, responds to Pain, or Unresponsive."
        },
        {
          id: 11,
          question: "Which arrhythmia shows wide bizarre QRS complexes?",
          options: ["Atrial fibrillation", "Sinus arrhythmia", "Ventricular tachycardia", "Third-degree AV block"],
          correctAnswer: 2,
          explanation: "Ventricular tachycardia shows wide, bizarre QRS complexes because the impulse originates in the ventricles."
        },
        {
          id: 12,
          question: "What is the emergency phone number for ASPCA Animal Poison Control?",
          options: ["800-222-1222", "888-426-4435", "911", "800-555-1212"],
          correctAnswer: 1,
          explanation: "The ASPCA Animal Poison Control Center can be reached at 888-426-4435 (fee may apply)."
        },
        {
          id: 13,
          question: "What fluid type includes Lactated Ringer's solution?",
          options: ["Colloids", "Crystalloids", "Blood products", "Hypertonic solutions"],
          correctAnswer: 1,
          explanation: "Lactated Ringer's is a balanced crystalloid solution commonly used for fluid resuscitation."
        },
        {
          id: 14,
          question: "Which plant is highly toxic to cats?",
          options: ["Spider plant", "Lilies", "African violet", "Bamboo"],
          correctAnswer: 1,
          explanation: "Lilies (Lilium and Hemerocallis species) are highly toxic to cats, causing acute kidney failure."
        },
        {
          id: 15,
          question: "What is the target oxygen saturation (SpO2) in critical patients?",
          options: [">85%", ">90%", ">95%", ">98%"],
          correctAnswer: 2,
          explanation: "The target oxygen saturation (SpO2) in critical patients is >95% on room air or supplemental oxygen."
        },
        {
          id: 16,
          question: "Which monitoring device measures end-tidal CO2?",
          options: ["Pulse oximeter", "Capnograph", "ECG", "Blood pressure monitor"],
          correctAnswer: 1,
          explanation: "A capnograph measures end-tidal carbon dioxide (ETCO2), indicating adequate ventilation."
        },
        {
          id: 17,
          question: "What is the first step in wound management with active bleeding?",
          options: ["Apply antibiotic ointment", "Direct pressure", "Suture immediately", "Clean with alcohol"],
          correctAnswer: 1,
          explanation: "The first step in managing actively bleeding wounds is applying direct pressure to control hemorrhage."
        },
        {
          id: 18,
          question: "What defines hypothermia in critical patients?",
          options: ["<38°C", "<37°C", "<36°C", "<35°C"],
          correctAnswer: 2,
          explanation: "Hypothermia is defined as body temperature <36°C (96.8°F) and requires active warming in critical patients."
        },
        {
          id: 19,
          question: "Which access route is used when IV access is impossible?",
          options: ["Subcutaneous", "Intramuscular", "Intraosseous", "Oral"],
          correctAnswer: 2,
          explanation: "Intraosseous access (into bone marrow) provides emergency vascular access when IV access cannot be obtained."
        },
        {
          id: 20,
          question: "What should be assessed after each fluid bolus during resuscitation?",
          options: [
            "Only the heart rate",
            "Response to therapy (vital signs, perfusion)",
            "The cost of fluids used",
            "The patient's breed"
          ],
          correctAnswer: 1,
          explanation: "After each fluid bolus, reassess the patient's response including vital signs, perfusion parameters, and clinical status."
        }
      ]
    }
  ],

  // 3. FINAL EXAM (40 Questions covering all modules)
  finalExam: {
    id: "final-exam",
    title: "Animal Health Technology Diploma Final Examination",
    description: "Comprehensive exam covering all 6 advanced modules. You must score 75% or higher to pass.",
    passingScore: 30, // 75% of 40 questions
    questions: [
      // Module 1 Questions (7 questions)
      {
        id: 1,
        question: "What percentage of bone is composed of minerals for strength?",
        options: ["30%", "50%", "70%", "90%"],
        correctAnswer: 2,
        explanation: "Bones contain 70% minerals (providing strength) and 30% collagen (providing flexibility).",
        module: 1
      },
      {
        id: 2,
        question: "How many chambers does a mammalian heart have?",
        options: ["Two chambers", "Three chambers", "Four chambers", "Five chambers"],
        correctAnswer: 2,
        explanation: "Mammalian hearts have four chambers: two atria (receiving) and two ventricles (pumping).",
        module: 1
      },
      {
        id: 3,
        question: "What enzyme breaks down carbohydrates?",
        options: ["Protease", "Lipase", "Amylase", "Lactase"],
        correctAnswer: 2,
        explanation: "Amylase is the enzyme that breaks down carbohydrates into simpler sugars for absorption.",
        module: 1
      },
      {
        id: 4,
        question: "Which gland is known as the 'master gland'?",
        options: ["Thyroid gland", "Adrenal gland", "Pituitary gland", "Pancreas"],
        correctAnswer: 2,
        explanation: "The pituitary gland regulates other endocrine glands, earning the name 'master gland'.",
        module: 1
      },
      {
        id: 5,
        question: "What is the functional unit of the kidney?",
        options: ["Nephron", "Glomerulus", "Renal pelvis", "Ureter"],
        correctAnswer: 0,
        explanation: "The nephron is the functional unit where filtration and urine formation occur in the kidney.",
        module: 1
      },
      {
        id: 6,
        question: "Which animal has continuously growing teeth?",
        options: ["Dogs", "Cats", "Rabbits", "Birds"],
        correctAnswer: 2,
        explanation: "Rabbits have open-rooted (elodont) teeth that grow continuously throughout their lives.",
        module: 1
      },
      {
        id: 7,
        question: "Which blood cells are most abundant?",
        options: ["White blood cells", "Red blood cells", "Platelets", "Plasma cells"],
        correctAnswer: 1,
        explanation: "Red blood cells (erythrocytes) are most abundant, making up about 45% of blood volume.",
        module: 1
      },

      // Module 2 Questions (7 questions)
      {
        id: 8,
        question: "What is the normal hematocrit range for dogs?",
        options: ["20-30%", "37-55%", "60-75%", "80-95%"],
        correctAnswer: 1,
        explanation: "Normal canine hematocrit ranges from 37-55%, representing red blood cell percentage in blood.",
        module: 2
      },
      {
        id: 9,
        question: "Which test is primarily used to assess kidney function?",
        options: ["ALT and ALP", "BUN and Creatinine", "Amylase and Lipase", "Sodium and Potassium"],
        correctAnswer: 1,
        explanation: "BUN (Blood Urea Nitrogen) and Creatinine are key indicators of kidney function.",
        module: 2
      },
      {
        id: 10,
        question: "What does elevated ALT typically indicate?",
        options: ["Kidney disease", "Liver damage", "Pancreatitis", "Diabetes"],
        correctAnswer: 1,
        explanation: "ALT (Alanine Aminotransferase) increases with hepatocellular (liver cell) damage.",
        module: 2
      },
      {
        id: 11,
        question: "What is the normal urine specific gravity range for cats?",
        options: ["1.001-1.015", "1.015-1.030", "1.035-1.060", "1.065-1.080"],
        correctAnswer: 2,
        explanation: "Cats normally concentrate urine well, with specific gravity ranging from 1.035-1.060.",
        module: 2
      },
      {
        id: 12,
        question: "Which stain is commonly used for rapid cytology evaluation?",
        options: ["Gram stain", "Diff-Quik", "New methylene blue", "Ziehl-Neelsen"],
        correctAnswer: 1,
        explanation: "Diff-Quik is a rapid Romanowsky-type stain commonly used for general cytology evaluation.",
        module: 2
      },
      {
        id: 13,
        question: "Which agar is selective for gram-negative bacteria?",
        options: ["Blood agar", "Sabouraud agar", "MacConkey agar", "Chocolate agar"],
        correctAnswer: 2,
        explanation: "MacConkey agar inhibits gram-positive bacteria, selecting for gram-negative organisms.",
        module: 2
      },
      {
        id: 14,
        question: "What test assesses the extrinsic coagulation pathway?",
        options: ["aPTT", "PT", "ACT", "BMBT"],
        correctAnswer: 1,
        explanation: "Prothrombin Time (PT) tests the extrinsic and common coagulation pathways.",
        module: 2
      },

      // Module 3 Questions (7 questions)
      {
        id: 15,
        question: "What ASA category describes a healthy patient?",
        options: ["ASA I", "ASA II", "ASA III", "ASA IV"],
        correctAnswer: 0,
        explanation: "ASA I patients are healthy with minimal anesthetic risk and no systemic disease.",
        module: 3
      },
      {
        id: 16,
        question: "What does a capnograph measure?",
        options: ["Blood pressure", "Oxygen saturation", "End-tidal CO2", "Heart rate"],
        correctAnswer: 2,
        explanation: "A capnograph measures end-tidal carbon dioxide (ETCO2), indicating adequate ventilation.",
        module: 3
      },
      {
        id: 17,
        question: "What is the normal mean arterial pressure range during anesthesia?",
        options: ["40-50 mmHg", "60-100 mmHg", "110-130 mmHg", "140-160 mmHg"],
        correctAnswer: 1,
        explanation: "Mean arterial pressure should be maintained between 60-100 mmHg for organ perfusion.",
        module: 3
      },
      {
        id: 18,
        question: "How often should critical parameters be monitored during anesthesia?",
        options: ["Every 15 minutes", "Every 10 minutes", "Every 5 minutes", "Once per hour"],
        correctAnswer: 2,
        explanation: "Critical parameters should be monitored at least every 5 minutes during anesthesia.",
        module: 3
      },
      {
        id: 19,
        question: "What is the minimum recommended duration for surgical hand scrubbing?",
        options: ["2 minutes", "5 minutes", "10 minutes", "15 minutes"],
        correctAnswer: 1,
        explanation: "A proper surgical hand scrub should last at least 5 minutes with antimicrobial soap.",
        module: 3
      },
      {
        id: 20,
        question: "Which suture material is absorbable?",
        options: ["Nylon", "Polypropylene", "Polyglactin (Vicryl)", "Silk"],
        correctAnswer: 2,
        explanation: "Polyglactin (Vicryl) is a synthetic absorbable suture that loses strength in 2-3 weeks.",
        module: 3
      },
      {
        id: 21,
        question: "What is the first drug typically administered in cardiac arrest?",
        options: ["Atropine", "Lidocaine", "Epinephrine", "Fluids"],
        correctAnswer: 2,
        explanation: "Epinephrine is the first-line drug for cardiac arrest to stimulate cardiac contractions.",
        module: 3
      },

      // Module 4 Questions (6 questions)
      {
        id: 22,
        question: "What does ALARA stand for in radiation safety?",
        options: [
          "Always Leave Area During Radiation",
          "As Low As Reasonably Achievable",
          "Automatic Lock After Radiation Administration",
          "Always Limit All Radiation Always"
        ],
        correctAnswer: 1,
        explanation: "ALARA means As Low As Reasonably Achievable - minimizing radiation exposure.",
        module: 4
      },
      {
        id: 23,
        question: "What is the minimum lead equivalence for protective aprons?",
        options: ["0.25mm", "0.5mm", "1.0mm", "2.0mm"],
        correctAnswer: 1,
        explanation: "Protective aprons should have at least 0.5mm lead equivalence for adequate protection.",
        module: 4
      },
      {
        id: 24,
        question: "How many views are typically needed for proper radiographic assessment?",
        options: ["One view", "Two orthogonal views", "Three views minimum", "Four views always"],
        correctAnswer: 1,
        explanation: "At least two orthogonal (90° apart) views are needed for three-dimensional assessment.",
        module: 4
      },
      {
        id: 25,
        question: "What does kVp control in radiography?",
        options: ["Quantity of radiation", "Penetration power", "Exposure time", "Film processing"],
        correctAnswer: 1,
        explanation: "kVp (kilovoltage peak) controls the penetrating power of the X-ray beam.",
        module: 4
      },
      {
        id: 26,
        question: "Which imaging modality uses sound waves?",
        options: ["Radiography", "Ultrasound", "CT scan", "MRI"],
        correctAnswer: 1,
        explanation: "Ultrasound uses high-frequency sound waves to create images of internal structures.",
        module: 4
      },
      {
        id: 27,
        question: "What does DICOM stand for?",
        options: [
          "Digital Imaging Control Management",
          "Digital Imaging and Communications in Medicine",
          "Diagnostic Image Compression Method",
          "Direct Image Communication Mode"
        ],
        correctAnswer: 1,
        explanation: "DICOM stands for Digital Imaging and Communications in Medicine, the imaging standard.",
        module: 4
      },

      // Module 5 Questions (6 questions)
      {
        id: 28,
        question: "What does pharmacokinetics refer to?",
        options: [
          "What the drug does to the body",
          "What the body does to the drug",
          "Drug interactions",
          "Side effects"
        ],
        correctAnswer: 1,
        explanation: "Pharmacokinetics describes ADME: Absorption, Distribution, Metabolism, Excretion.",
        module: 5
      },
      {
        id: 29,
        question: "What is the maintenance fluid rate for dogs?",
        options: ["10-20 ml/kg/day", "50-60 ml/kg/day", "100-120 ml/kg/day", "150-200 ml/kg/day"],
        correctAnswer: 1,
        explanation: "Maintenance fluid rate for dogs is approximately 50-60 ml per kg per day.",
        module: 5
      },
      {
        id: 30,
        question: "What angle is typically used for subcutaneous injections?",
        options: ["15° angle", "45° angle", "90° angle", "180° angle"],
        correctAnswer: 1,
        explanation: "Subcutaneous injections are typically given at a 45° angle into loose skin.",
        module: 5
      },
      {
        id: 31,
        question: "Which organization regulates controlled substances?",
        options: ["FDA", "DEA", "USDA", "CDC"],
        correctAnswer: 1,
        explanation: "The DEA regulates controlled substances with abuse potential.",
        module: 5
      },
      {
        id: 32,
        question: "What should you do before giving an intramuscular injection?",
        options: ["Massage area", "Aspirate to check for blood", "Apply ice", "Shave large area"],
        correctAnswer: 1,
        explanation: "Always aspirate before IM injection to ensure you're not in a blood vessel.",
        module: 5
      },
      {
        id: 33,
        question: "What does 1% concentration equal in mg/ml?",
        options: ["1 mg/ml", "10 mg/ml", "100 mg/ml", "1000 mg/ml"],
        correctAnswer: 1,
        explanation: "1% concentration equals 10 mg per ml (1g/100ml = 1000mg/100ml = 10mg/ml).",
        module: 5
      },

      // Module 6 Questions (7 questions)
      {
        id: 34,
        question: "What does the 'C' in ABCDE primary survey stand for?",
        options: ["Consciousness", "Circulation", "Color", "Cardiac"],
        correctAnswer: 1,
        explanation: "In ABCDE primary survey, 'C' stands for Circulation (heart rate, pulse, perfusion).",
        module: 6
      },
      {
        id: 35,
        question: "What is the initial fluid bolus dose for shock resuscitation?",
        options: ["5-10 ml/kg", "20-40 ml/kg", "50-60 ml/kg", "80-100 ml/kg"],
        correctAnswer: 1,
        explanation: "Initial shock resuscitation involves 20-40 ml/kg crystalloid boluses.",
        module: 6
      },
      {
        id: 36,
        question: "What emergency procedure is used for pneumothorax?",
        options: ["Abdominocentesis", "Thoracocentesis", "Pericardiocentesis", "Cystocentesis"],
        correctAnswer: 1,
        explanation: "Thoracocentesis removes air from the pleural space in pneumothorax.",
        module: 6
      },
      {
        id: 37,
        question: "What defines status epilepticus?",
        options: [
          "Any single seizure",
          "Seizures lasting ≥5 minutes or clusters without recovery",
          "Two seizures in one week",
          "Seizures only during sleep"
        ],
        correctAnswer: 1,
        explanation: "Status epilepticus is continuous seizure activity ≥5 minutes or clusters without recovery.",
        module: 6
      },
      {
        id: 38,
        question: "Which toxin requires vitamin K1 as an antidote?",
        options: ["Acetaminophen", "Anticoagulant rodenticides", "Ethylene glycol", "Chocolate"],
        correctAnswer: 1,
        explanation: "Vitamin K1 is the specific antidote for anticoagulant rodenticide toxicity.",
        module: 6
      },
      {
        id: 39,
        question: "What is the minimum urine output expected in hydrated patients?",
        options: ["0.1-0.5 ml/kg/hr", "1-2 ml/kg/hr", "3-5 ml/kg/hr", "6-8 ml/kg/hr"],
        correctAnswer: 1,
        explanation: "Adequate urine output is 1-2 ml per kg per hour.",
        module: 6
      },
      {
        id: 40,
        question: "What does AVPU stand for in neurological assessment?",
        options: [
          "Arteries, Veins, Pressure, Ultrasound",
          "Alert, Verbal, Pain, Unresponsive",
          "Airway, Ventilation, Perfusion, Unconscious",
          "Assessment, Vital signs, Pupils, Unresponsive"
        ],
        correctAnswer: 1,
        explanation: "AVPU scale: Alert, responds to Verbal stimuli, responds to Pain, or Unresponsive.",
        module: 6
      }
    ]
  }
};

export default animalHealthTechnologyDiploma;
