// Herbal Therapy (Diploma) Course Data
// Complete with 6 modules and final exam

export const herbalTherapyDiploma = {
  // COURSE METADATA
  id: "herbal-therapy-diploma",
  title: "Herbal Therapy (Diploma)",
  description: "Advanced study of medicinal plants, formulation strategies, clinical applications, and therapeutic protocols for professional herbal practice. Includes materia medica, phytochemistry, and case management.",
  duration: "12 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  icon: "🌱",
  badge: "Diploma",
  prerequisite: "Traditional Medicine (Certificate) recommended",
  
  // MODULE 1: Advanced Herbal Pharmacology
  modules: [
    {
      id: 1,
      title: "Phytochemistry and Plant Constituents",
      completed: false,
      content: `
## **Advanced Plant Chemistry**

Understanding phytochemistry is essential for professional herbal therapy. Plant constituents work synergistically to produce therapeutic effects.

### **Primary Plant Constituents**

**Alkaloids** are nitrogen-containing compounds with strong physiological effects. Examples include morphine from poppy, caffeine from coffee, and nicotine from tobacco. They often act on the nervous system.

**Glycosides** contain sugar molecules attached to non-sugar aglycones. Cardiac glycosides like digoxin from foxglove affect heart function. Anthraquinone glycosides from senna and cascara act as laxatives.

**Terpenoids** include volatile oils, resins, and bitter principles. Monoterpenes like menthol from peppermint have antimicrobial properties. Sesquiterpene lactones from feverfew have anti-inflammatory effects.

**Polyphenols** include flavonoids, tannins, and phenolic acids. Flavonoids like quercetin have antioxidant and anti-inflammatory properties. Tannins from oak bark and witch hazel are astringent.

**Polysaccharides** are complex carbohydrates with immune-modulating effects. Examples include mucilage from marshmallow root and echinacea polysaccharides that stimulate immune function.

### **Synergy and Whole Plant Philosophy**

**Entourage Effect** describes how multiple plant constituents work together to enhance therapeutic effects and reduce side effects. Whole plant extracts often work better than isolated compounds.

**Buffer Compounds** moderate the effects of stronger constituents. For example, mucilage in demulcent herbs buffers potentially irritating compounds.

**Delivery Systems** within plants help target active constituents to appropriate sites of action. Some compounds are stored in specific plant parts or released under certain conditions.

**Seasonal Variations** affect constituent levels. Plants harvested at optimal times have higher concentrations of active compounds.

**Processing Effects** like drying, extracting, or heating can alter constituent profiles and bioavailability.

### **Pharmacokinetics of Herbs**

**Absorption** varies by herb form and preparation. Water-based extracts (teas, infusions) are quickly absorbed. Fat-soluble constituents require lipids for absorption.

**Distribution** throughout the body depends on solubility. Some constituents accumulate in specific tissues like liver or fatty tissues.

**Metabolism** primarily occurs in the liver via cytochrome P450 enzymes. Some herbs induce or inhibit these enzymes, affecting drug metabolism.

**Elimination** routes include urine, feces, sweat, and breath. Kidney and liver function affect elimination rates.

**Bioavailability Enhancement** strategies include using piperine from black pepper to increase absorption of other compounds.

### **Quality Assessment**

**Organoleptic Evaluation** uses senses to assess herb quality: appearance, color, aroma, taste, and texture.

**Microscopic Analysis** identifies plant parts and detects adulterants through cellular structure examination.

**Chromatographic Methods** like TLC and HPLC separate and quantify specific constituents.

**Heavy Metal Testing** detects contamination from polluted soil or improper processing.

**Microbiological Testing** ensures herbs are free from harmful bacteria, mold, or other pathogens.

### **Standardization Considerations**

**Marker Compounds** are specific constituents used to standardize extracts, ensuring consistent potency.

**Extract Ratios** indicate concentration levels, such as 1:5 meaning 1 part herb yields 5 parts extract.

**Standardized Extracts** guarantee minimum levels of active constituents but may lose synergy of whole plant.

**Quality Control Protocols** include batch testing, stability studies, and expiration dating.

**Good Manufacturing Practices** ensure consistent quality, purity, and safety in commercial products.
`,
      quiz: [
        {
          id: 1,
          question: "What are alkaloids?",
          options: [
            "Nitrogen-containing compounds with strong effects",
            "Only simple sugars in plants",
            "Just plant pigments",
            "Basic building blocks of proteins"
          ],
          correctAnswer: 0,
          explanation: "Alkaloids are nitrogen-containing plant compounds that often have potent physiological effects on the nervous system."
        },
        {
          id: 2,
          question: "What does the entourage effect describe?",
          options: [
            "Multiple constituents working together synergistically",
            "Only isolated compound effects",
            "Plant growth patterns",
            "Herb harvesting techniques"
          ],
          correctAnswer: 0,
          explanation: "The entourage effect describes how multiple plant constituents work together to enhance therapeutic effects."
        },
        {
          id: 3,
          question: "What are glycosides?",
          options: [
            "Compounds with sugar attached to aglycone",
            "Only simple plant sugars",
            "Just protein structures",
            "Mineral complexes"
          ],
          correctAnswer: 0,
          explanation: "Glycosides consist of sugar molecules attached to non-sugar aglycones, often with specific therapeutic actions."
        },
        {
          id: 4,
          question: "What affects herb absorption?",
          options: [
            "Herb form and preparation method",
            "Only plant color",
            "Just harvesting time",
            "Storage container type"
          ],
          correctAnswer: 0,
          explanation: "Absorption of herbal constituents varies based on preparation form, solubility, and accompanying substances."
        },
        {
          id: 5,
          question: "What are terpenoids?",
          options: [
            "Compounds including volatile oils and resins",
            "Only water-soluble vitamins",
            "Just plant fibers",
            "Simple carbohydrates"
          ],
          correctAnswer: 0,
          explanation: "Terpenoids include a wide range of compounds like volatile oils, resins, and bitter principles with various therapeutic effects."
        },
        {
          id: 6,
          question: "What is organoleptic evaluation?",
          options: [
            "Using senses to assess herb quality",
            "Only laboratory chemical analysis",
            "Microscopic examination only",
            "Genetic testing of plants"
          ],
          correctAnswer: 0,
          explanation: "Organoleptic evaluation uses sight, smell, taste, and touch to assess the quality and authenticity of herbs."
        },
        {
          id: 7,
          question: "What do polyphenols include?",
          options: [
            "Flavonoids, tannins, and phenolic acids",
            "Only alkaloids",
            "Just terpenes",
            "Simple sugars only"
          ],
          correctAnswer: 0,
          explanation: "Polyphenols encompass flavonoids, tannins, and phenolic acids, known for antioxidant and anti-inflammatory properties."
        },
        {
          id: 8,
          question: "What are buffer compounds?",
          options: [
            "Constituents that moderate stronger effects",
            "Only active ingredients",
            "Plant toxins",
            "Harvesting aids"
          ],
          correctAnswer: 0,
          explanation: "Buffer compounds in plants moderate the effects of stronger constituents, often reducing potential side effects."
        },
        {
          id: 9,
          question: "What do polysaccharides do?",
          options: [
            "Have immune-modulating effects",
            "Only provide energy",
            "Act as plant toxins",
            "Serve as simple sweeteners"
          ],
          correctAnswer: 0,
          explanation: "Polysaccharides in herbs like echinacea and astragalus have immune-modulating and demulcent properties."
        },
        {
          id: 10,
          question: "What are marker compounds used for?",
          options: [
            "Standardizing extract potency",
            "Only identifying plant species",
            "Determining harvest time",
            "Assessing soil quality"
          ],
          correctAnswer: 0,
          explanation: "Marker compounds are specific constituents used to standardize herbal extracts for consistent potency."
        },
        {
          id: 11,
          question: "Where does herb metabolism primarily occur?",
          options: [
            "Liver via cytochrome P450 enzymes",
            "Only in the stomach",
            "Just in the kidneys",
            "Throughout the bloodstream"
          ],
          correctAnswer: 0,
          explanation: "Herbal constituents are primarily metabolized in the liver through cytochrome P450 enzyme systems."
        },
        {
          id: 12,
          question: "What does microscopic analysis identify?",
          options: [
            "Plant parts and detects adulterants",
            "Only chemical composition",
            "Just genetic makeup",
            "Soil contaminants"
          ],
          correctAnswer: 0,
          explanation: "Microscopic analysis examines cellular structures to identify plant materials and detect adulteration."
        },
        {
          id: 13,
          question: "What are cardiac glycosides?",
          options: [
            "Glycosides affecting heart function",
            "Only liver-supporting compounds",
            "Kidney-targeting substances",
            "Brain-stimulating agents"
          ],
          correctAnswer: 0,
          explanation: "Cardiac glycosides like those from foxglove have specific effects on heart muscle contraction and rhythm."
        },
        {
          id: 14,
          question: "What enhances bioavailability?",
          options: [
            "Piperine from black pepper",
            "Only water extraction",
            "Just powdering herbs",
            "Freezing plant material"
          ],
          correctAnswer: 0,
          explanation: "Piperine from black pepper is known to enhance absorption of various compounds by inhibiting certain enzymes."
        },
        {
          id: 15,
          question: "What are standardized extracts?",
          options: [
            "Extracts with guaranteed constituent levels",
            "Only fresh herb preparations",
            "Just traditional formulas",
            "Home-made remedies"
          ],
          correctAnswer: 0,
          explanation: "Standardized extracts guarantee minimum levels of specific marker compounds for consistent therapeutic effects."
        },
        {
          id: 16,
          question: "What are anthraquinone glycosides?",
          options: [
            "Laxative compounds from senna",
            "Only cardiac stimulants",
            "Just anti-inflammatory agents",
            "Sedative substances"
          ],
          correctAnswer: 0,
          explanation: "Anthraquinone glycosides from plants like senna and cascara have stimulant laxative effects."
        },
        {
          id: 17,
          question: "What do elimination routes include?",
          options: [
            "Urine, feces, sweat, and breath",
            "Only urinary excretion",
            "Just fecal elimination",
            "Skin absorption only"
          ],
          correctAnswer: 0,
          explanation: "Herbal constituents are eliminated through various routes including urine, feces, sweat, and exhaled breath."
        },
        {
          id: 18,
          question: "What is chromatographic analysis?",
          options: [
            "Separating and quantifying constituents",
            "Only visual inspection",
            "Just taste testing",
            "Aroma evaluation"
          ],
          correctAnswer: 0,
          explanation: "Chromatographic methods like HPLC separate and quantify specific compounds in herbal preparations."
        },
        {
          id: 19,
          question: "What are sesquiterpene lactones?",
          options: [
            "Anti-inflammatory compounds from feverfew",
            "Only simple sugars",
            "Just protein structures",
            "Mineral complexes"
          ],
          correctAnswer: 0,
          explanation: "Sesquiterpene lactones in feverfew have significant anti-inflammatory and anti-migraine properties."
        },
        {
          id: 20,
          question: "What do GMP standards ensure?",
          options: [
            "Consistent quality, purity, and safety",
            "Only low production costs",
            "Just fast manufacturing",
            "Maximum profit margins"
          ],
          correctAnswer: 0,
          explanation: "Good Manufacturing Practices ensure consistent quality, purity, and safety in commercial herbal products."
        }
      ]
    },

    // MODULE 2: Clinical Herbal Formulation
    {
      id: 2,
      title: "Therapeutic Formulation Strategies",
      completed: false,
      content: `
## **Advanced Herbal Formulation**

Professional herbal therapy requires sophisticated formulation strategies that address complex health conditions through synergistic combinations.

### **Formulation Principles**

**Synergistic Blending** combines herbs with complementary actions that enhance each other's effects. For example, combining anti-inflammatory herbs with circulatory stimulants improves delivery to inflamed areas.

**Balancing Formulations** include herbs that address multiple aspects of a condition while minimizing potential side effects. Adaptogens often balance stimulating and calming effects.

**Layering Actions** addresses different pathological processes simultaneously. A formulation for respiratory infection might include antimicrobial, expectorant, immune-stimulating, and soothing herbs.

**Directional Herbs** guide other herbs to specific tissues or systems. For example, ginger can direct herbs to the digestive system, while cayenne enhances circulation to extremities.

**Corrective Herbs** mitigate potential side effects of primary herbs. Demulcent herbs can buffer potentially irritating diuretics or laxatives.

### **Herbal Actions and Combinations**

**Adaptogen Combinations** include herbs like ashwagandha, rhodiola, and eleuthero that work together to enhance stress adaptation and energy regulation.

**Nervine Formulations** combine sedative, tonic, and nutritive nervines for comprehensive nervous system support. Examples include lemon balm, skullcap, and oats.

**Hepatic Formulas** support liver function through bitter stimulation, hepatoprotection, and cholagogue action. Milk thistle, dandelion root, and artichoke work synergistically.

**Renal Support Blends** combine diuretics, anti-inflammatory, and demulcent herbs for urinary tract health. Corn silk, horsetail, and marshmallow work well together.

**Cardiovascular Formulas** include herbs that strengthen heart muscle, improve circulation, and support vascular integrity. Hawthorn, garlic, and gingko are classic combinations.

### **Delivery Systems Optimization**

**Liposomal Encapsulation** enhances absorption of water-soluble compounds by surrounding them with lipid layers that mimic cell membranes.

**Nanoemulsions** increase bioavailability of poorly soluble compounds through ultra-fine dispersion in liquid media.

**Phytosome Complexes** bond herbal extracts to phospholipids, dramatically improving absorption and tissue targeting.

**Time-Release Formulations** provide sustained release of active constituents over extended periods for consistent therapeutic levels.

**Topical Penetration Enhancers** like essential oils or dimethyl sulfoxide (DMSO) improve skin absorption of herbal compounds.

### **Dosage Calculations**

**Weight-Based Dosing** calculates appropriate doses based on patient body weight, especially important for children and sensitive individuals.

**Metabolic Considerations** adjust dosages for patients with liver or kidney impairment that affects herb metabolism and elimination.

**Age Adjustments** modify doses for elderly patients who may have altered metabolism and increased sensitivity.

**Titration Strategies** start with low doses and gradually increase based on patient response and tolerance.

**Loading Doses** use higher initial doses to quickly achieve therapeutic levels, followed by maintenance doses.

### **Compound Formulation Examples**

**Digestive Bitters Formula** combines gentian, orange peel, ginger, and fennel to stimulate digestive secretions and relieve discomfort.

**Sleep Support Blend** includes valerian, passionflower, hops, and chamomile for multi-faceted sleep promotion.

**Immune Support Formula** combines echinacea, astragalus, elderberry, and andrographis for comprehensive immune modulation.

**Joint Support Complex** includes turmeric, boswellia, devil's claw, and willow bark for inflammatory pain management.

**Respiratory Formula** combines mullein, thyme, licorice, and elecampane for cough relief and lung support.
`,
      quiz: [
        {
          id: 1,
          question: "What is synergistic blending?",
          options: [
            "Combining herbs that enhance each other's effects",
            "Using only single herbs",
            "Mixing random herbs together",
            "Separating herb actions"
          ],
          correctAnswer: 0,
          explanation: "Synergistic blending combines herbs with complementary actions that work together to enhance therapeutic effects."
        },
        {
          id: 2,
          question: "What do adaptogen combinations do?",
          options: [
            "Enhance stress adaptation and energy regulation",
            "Only stimulate the nervous system",
            "Just sedate patients",
            "Suppress immune function"
          ],
          correctAnswer: 0,
          explanation: "Adaptogen combinations work together to help the body adapt to stress and regulate energy metabolism."
        },
        {
          id: 3,
          question: "What are directional herbs?",
          options: [
            "Herbs that guide other herbs to specific tissues",
            "Only compass directions for harvesting",
            "Herbs that grow in specific directions",
            "Plants used for navigation"
          ],
          correctAnswer: 0,
          explanation: "Directional herbs have properties that help direct other herbal constituents to specific body systems or tissues."
        },
        {
          id: 4,
          question: "What does liposomal encapsulation do?",
          options: [
            "Enhances absorption through lipid layers",
            "Only makes herbs taste better",
            "Just colors herbal products",
            "Preserves herbs longer"
          ],
          correctAnswer: 0,
          explanation: "Liposomal encapsulation surrounds water-soluble compounds with lipid layers to improve absorption through cell membranes."
        },
        {
          id: 5,
          question: "What is weight-based dosing?",
          options: [
            "Calculating doses based on body weight",
            "Using the same dose for everyone",
            "Only measuring herb weight",
            "Estimating doses roughly"
          ],
          correctAnswer: 0,
          explanation: "Weight-based dosing calculates appropriate herbal doses based on the patient's body weight for precise therapy."
        },
        {
          id: 6,
          question: "What do nervine formulations combine?",
          options: [
            "Sedative, tonic, and nutritive nervines",
            "Only stimulant herbs",
            "Just digestive bitters",
            "Cardiac stimulants"
          ],
          correctAnswer: 0,
          explanation: "Nervine formulations typically combine calming, nourishing, and restorative herbs for comprehensive nervous system support."
        },
        {
          id: 7,
          question: "What are phytosome complexes?",
          options: [
            "Herb extracts bonded to phospholipids",
            "Only simple herb powders",
            "Just water extracts",
            "Alcohol tinctures only"
          ],
          correctAnswer: 0,
          explanation: "Phytosome complexes bond herbal extracts to phospholipids, dramatically improving absorption and bioavailability."
        },
        {
          id: 8,
          question: "What does titration involve?",
          options: [
            "Starting low and gradually increasing doses",
            "Using maximum doses immediately",
            "Keeping constant doses always",
            "Random dose changes"
          ],
          correctAnswer: 0,
          explanation: "Titration involves starting with low doses and gradually increasing based on patient response and tolerance."
        },
        {
          id: 9,
          question: "What are hepatic formulas for?",
          options: [
            "Supporting liver function",
            "Only kidney health",
            "Just lung function",
            "Brain stimulation"
          ],
          correctAnswer: 0,
          explanation: "Hepatic formulas combine herbs that support liver function through various mechanisms like hepatoprotection and cholagogue action."
        },
        {
          id: 10,
          question: "What do time-release formulations provide?",
          options: [
            "Sustained release over extended periods",
            "Only immediate effects",
            "Just one-time dosing",
            "Random release patterns"
          ],
          correctAnswer: 0,
          explanation: "Time-release formulations are designed to provide consistent therapeutic levels through controlled release of active constituents."
        },
        {
          id: 11,
          question: "What are corrective herbs?",
          options: [
            "Herbs that mitigate side effects of primary herbs",
            "Only the strongest herbs in formulas",
            "Just flavoring agents",
            "Inactive filler herbs"
          ],
          correctAnswer: 0,
          explanation: "Corrective herbs are included in formulas to buffer or counteract potential side effects of primary therapeutic herbs."
        },
        {
          id: 12,
          question: "What are loading doses?",
          options: [
            "Higher initial doses to achieve therapeutic levels",
            "Only maintenance doses",
            "Minimum effective doses",
            "Placebo doses"
          ],
          correctAnswer: 0,
          explanation: "Loading doses use higher initial amounts to quickly achieve therapeutic blood levels before switching to maintenance doses."
        },
        {
          id: 13,
          question: "What do renal support blends combine?",
          options: [
            "Diuretics, anti-inflammatory, and demulcent herbs",
            "Only liver stimulants",
            "Just cardiac tonics",
            "Respiratory expectorants"
          ],
          correctAnswer: 0,
          explanation: "Renal support blends typically combine diuretic, anti-inflammatory, and soothing herbs for urinary tract health."
        },
        {
          id: 14,
          question: "What do nanoemulsions do?",
          options: [
            "Increase bioavailability through fine dispersion",
            "Only make herbs look cloudy",
            "Just preserve herbal products",
            "Color herbal preparations"
          ],
          correctAnswer: 0,
          explanation: "Nanoemulsions use ultra-fine dispersion to dramatically increase the bioavailability of poorly soluble herbal compounds."
        },
        {
          id: 15,
          question: "What age requires dosage adjustments?",
          options: [
            "Elderly patients with altered metabolism",
            "Only middle-aged adults",
            "Just teenagers",
            "All ages need same doses"
          ],
          correctAnswer: 0,
          explanation: "Elderly patients often require dosage adjustments due to altered metabolism, organ function, and increased sensitivity."
        },
        {
          id: 16,
          question: "What are cardiovascular formulas?",
          options: [
            "Herbs that strengthen heart and circulation",
            "Only digestive aids",
            "Just nervous system tonics",
            "Liver detoxifiers"
          ],
          correctAnswer: 0,
          explanation: "Cardiovascular formulas typically include herbs that support heart function, improve circulation, and maintain vascular health."
        },
        {
          id: 17,
          question: "What do topical penetration enhancers do?",
          options: [
            "Improve skin absorption of herbal compounds",
            "Only make creams smell nice",
            "Just color topical products",
            "Preserve ointments"
          ],
          correctAnswer: 0,
          explanation: "Topical penetration enhancers like essential oils help herbal compounds penetrate the skin barrier more effectively."
        },
        {
          id: 18,
          question: "What does layering actions mean?",
          options: [
            "Addressing different pathological processes simultaneously",
            "Only using one herb at a time",
            "Applying herbs in physical layers",
            "Separating herb actions over time"
          ],
          correctAnswer: 0,
          explanation: "Layering actions involves including herbs that address different aspects of a condition in the same formulation."
        },
        {
          id: 19,
          question: "What is a digestive bitters formula?",
          options: [
            "Combination to stimulate digestive secretions",
            "Only sweet-tasting herbs",
            "Just appetite suppressants",
            "Laxative combination"
          ],
          correctAnswer: 0,
          explanation: "Digestive bitters formulas combine bitter-tasting herbs that stimulate digestive secretions and improve gastrointestinal function."
        },
        {
          id: 20,
          question: "What do metabolic considerations affect?",
          options: [
            "Dosage adjustments for impaired organ function",
            "Only herb harvesting times",
            "Just plant growing conditions",
            "Herb storage methods"
          ],
          correctAnswer: 0,
          explanation: "Metabolic considerations require dosage adjustments for patients with impaired liver or kidney function affecting herb metabolism."
        }
      ]
    },

    // MODULE 3: Clinical Assessment and Case Management
    {
      id: 3,
      title: "Clinical Herbal Assessment",
      completed: false,
      content: `
## **Professional Herbal Assessment**

Clinical herbal therapy requires systematic assessment methods to develop personalized treatment plans based on comprehensive evaluation.

### **Assessment Framework**

**Constitutional Assessment** evaluates inherent strengths, weaknesses, and predispositions based on traditional systems like Ayurvedic doshas or TCM patterns.

**Tongue Diagnosis** examines color, coating, shape, moisture, and markings. Pale tongue may indicate blood deficiency, while red tip suggests heat.

**Pulse Assessment** evaluates rate, rhythm, strength, and quality. Different positions correspond to different organ systems in traditional systems.

**Iridology Principles** study iris markings, colors, and patterns that may indicate constitutional strengths and systemic imbalances.

**Nail Analysis** examines color, shape, texture, and markings for clues about nutritional status and systemic health.

### **Interview Techniques**

**Open-Ended Questioning** allows patients to describe symptoms in their own words, revealing patterns and priorities.

**Symptom Analysis** explores location, quality, intensity, timing, modifying factors, and associated symptoms for each complaint.

**Systems Review** systematically questions each body system even without specific complaints to uncover hidden imbalances.

**Lifestyle Assessment** evaluates diet, sleep, exercise, stress, work, relationships, and environmental exposures.

**Medication Review** documents all pharmaceuticals, supplements, and other herbs to identify interactions and contraindications.

### **Herbal Selection Criteria**

**Energetic Matching** selects herbs with appropriate thermal qualities (heating, cooling, drying, moistening) for the patient's condition.

**Tissue State Assessment** identifies conditions like atrophy, tension, relaxation, stagnation, or excitation that guide herb selection.

**Organ Affinity** chooses herbs with known affinity for specific organs or systems needing support.

**Safety Profile** prioritizes herbs with favorable safety records, especially for long-term use or vulnerable populations.

**Patient Preferences** considers taste preferences, preparation convenience, and cost when developing realistic treatment plans.

### **Treatment Planning**

**Short-Term Goals** address acute symptoms and immediate concerns to provide relief and build confidence.

**Long-Term Objectives** focus on constitutional strengthening, prevention, and underlying imbalance correction.

**Sequential Protocols** use different herb combinations in specific sequences to address complex conditions systematically.

**Integration Strategies** combine herbs with dietary changes, lifestyle modifications, and other complementary therapies.

**Monitoring Parameters** establish specific indicators to track progress and guide treatment adjustments.

### **Documentation Standards**

**SOAP Notes** format includes Subjective findings, Objective observations, Assessment, and Plan for each consultation.

**Herbal Formulas Record** documents exact ingredients, proportions, preparation methods, and dosing instructions.

**Progress Tracking** records symptom changes, side effects, and overall response to guide ongoing treatment.

**Consent Forms** document informed consent regarding herb use, potential interactions, and expected outcomes.

**Referral Documentation** maintains records of referrals to other healthcare providers for coordinated care.
`,
      quiz: [
        {
          id: 1,
          question: "What is constitutional assessment?",
          options: [
            "Evaluating inherent strengths and weaknesses",
            "Only measuring body temperature",
            "Just checking blood pressure",
            "Assessing current symptoms only"
          ],
          correctAnswer: 0,
          explanation: "Constitutional assessment evaluates a person's inherent physical and energetic characteristics that influence health patterns."
        },
        {
          id: 2,
          question: "What does tongue diagnosis examine?",
          options: [
            "Color, coating, shape, moisture, markings",
            "Only taste perception",
            "Just tongue mobility",
            "Speech patterns only"
          ],
          correctAnswer: 0,
          explanation: "Tongue diagnosis examines multiple characteristics that may indicate systemic imbalances in traditional medicine systems."
        },
        {
          id: 3,
          question: "What are open-ended questions?",
          options: [
            "Questions allowing descriptive responses",
            "Only yes/no questions",
            "Just medical history forms",
            "Laboratory test orders"
          ],
          correctAnswer: 0,
          explanation: "Open-ended questions allow patients to describe experiences in their own words, revealing patterns and priorities."
        },
        {
          id: 4,
          question: "What is energetic matching?",
          options: [
            "Selecting herbs with appropriate thermal qualities",
            "Only matching herb colors",
            "Just similar tasting herbs",
            "Matching plant growth patterns"
          ],
          correctAnswer: 0,
          explanation: "Energetic matching selects herbs with heating, cooling, drying, or moistening properties appropriate for the patient's condition."
        },
        {
          id: 5,
          question: "What are short-term goals?",
          options: [
            "Addressing acute symptoms and immediate concerns",
            "Only lifelong treatment plans",
            "Just preventive measures",
            "Constitutional changes only"
          ],
          correctAnswer: 0,
          explanation: "Short-term goals focus on relieving acute symptoms to provide immediate benefit and build patient confidence."
        },
        {
          id: 6,
          question: "What does pulse assessment evaluate?",
          options: [
            "Rate, rhythm, strength, and quality",
            "Only heart rate number",
            "Just blood pressure",
            "Circulation speed only"
          ],
          correctAnswer: 0,
          explanation: "Pulse assessment in traditional systems evaluates multiple characteristics that may indicate various systemic conditions."
        },
        {
          id: 7,
          question: "What is symptom analysis?",
          options: [
            "Exploring location, quality, intensity, timing",
            "Only counting symptoms",
            "Just naming complaints",
            "Diagnosing diseases"
          ],
          correctAnswer: 0,
          explanation: "Symptom analysis systematically explores characteristics of each complaint to understand patterns and guide treatment."
        },
        {
          id: 8,
          question: "What are tissue states?",
          options: [
            "Conditions like atrophy, tension, or stagnation",
            "Only healthy tissue conditions",
            "Just anatomical locations",
            "Tissue sample results"
          ],
          correctAnswer: 0,
          explanation: "Tissue state assessment identifies specific conditions in body tissues that guide appropriate herbal selection."
        },
        {
          id: 9,
          question: "What are long-term objectives?",
          options: [
            "Constitutional strengthening and prevention",
            "Only immediate symptom relief",
            "Just acute treatment",
            "Emergency care planning"
          ],
          correctAnswer: 0,
          explanation: "Long-term objectives focus on building constitutional strength, correcting underlying imbalances, and preventing recurrence."
        },
        {
          id: 10,
          question: "What are SOAP notes?",
          options: [
            "Subjective, Objective, Assessment, Plan format",
            "Only herb lists",
            "Just patient complaints",
            "Laboratory results only"
          ],
          correctAnswer: 0,
          explanation: "SOAP notes provide a structured format for documenting clinical encounters and treatment plans."
        },
        {
          id: 11,
          question: "What is iridology?",
          options: [
            "Study of iris patterns and markings",
            "Only eye color determination",
            "Just vision testing",
            "Eye disease diagnosis"
          ],
          correctAnswer: 0,
          explanation: "Iridology examines iris characteristics that may indicate constitutional tendencies and systemic imbalances."
        },
        {
          id: 12,
          question: "What is systems review?",
          options: [
            "Questioning each body system systematically",
            "Only focusing on main complaint",
            "Just checking vital signs",
            "Physical examination only"
          ],
          correctAnswer: 0,
          explanation: "Systems review systematically questions each body system to uncover hidden imbalances beyond the main complaints."
        },
        {
          id: 13,
          question: "What is organ affinity?",
          options: [
            "Herbs with known effects on specific organs",
            "Only patient organ preferences",
            "Just organ anatomy",
            "Surgical organ removal"
          ],
          correctAnswer: 0,
          explanation: "Organ affinity refers to herbs that have particular therapeutic effects on specific organs or body systems."
        },
        {
          id: 14,
          question: "What are sequential protocols?",
          options: [
            "Different herb combinations in specific sequences",
            "Only one herb at a time",
            "Random herb combinations",
            "Constant same formula"
          ],
          correctAnswer: 0,
          explanation: "Sequential protocols use different herbal combinations in planned sequences to address complex conditions systematically."
        },
        {
          id: 15,
          question: "What do herbal formulas records document?",
          options: [
            "Ingredients, proportions, preparation, dosing",
            "Only herb names",
            "Just patient names",
            "Cost of herbs only"
          ],
          correctAnswer: 0,
          explanation: "Herbal formula records document exact composition and administration details for accurate preparation and monitoring."
        },
        {
          id: 16,
          question: "What does nail analysis examine?",
          options: [
            "Color, shape, texture, markings",
            "Only nail length",
            "Just nail polish",
            "Nail grooming habits"
          ],
          correctAnswer: 0,
          explanation: "Nail analysis examines characteristics that may indicate nutritional status, circulation, and systemic health patterns."
        },
        {
          id: 17,
          question: "What is lifestyle assessment?",
          options: [
            "Evaluating diet, sleep, exercise, stress",
            "Only medical history",
            "Just current symptoms",
            "Family history only"
          ],
          correctAnswer: 0,
          explanation: "Lifestyle assessment evaluates daily habits and environmental factors that significantly impact health and healing."
        },
        {
          id: 18,
          question: "What is safety profile consideration?",
          options: [
            "Prioritizing herbs with favorable safety records",
            "Only using strongest herbs",
            "Ignoring potential side effects",
            "Using experimental herbs"
          ],
          correctAnswer: 0,
          explanation: "Safety profile consideration prioritizes herbs with well-established safety records, especially for vulnerable populations."
        },
        {
          id: 19,
          question: "What are integration strategies?",
          options: [
            "Combining herbs with diet and lifestyle changes",
            "Only using herbs alone",
            "Just pharmaceutical combinations",
            "Surgical interventions"
          ],
          correctAnswer: 0,
          explanation: "Integration strategies combine herbal therapy with dietary changes, lifestyle modifications, and other complementary approaches."
        },
        {
          id: 20,
          question: "What are monitoring parameters?",
          options: [
            "Specific indicators to track progress",
            "Only patient satisfaction",
            "Just herb availability",
            "Cost of treatment"
          ],
          correctAnswer: 0,
          explanation: "Monitoring parameters establish specific, measurable indicators to objectively track treatment progress and guide adjustments."
        }
      ]
    },

    // MODULE 4: Specialty Herbal Therapeutics
    {
      id: 4,
      title: "Specialty Clinical Applications",
      completed: false,
      content: `
## **Advanced Therapeutic Applications**

Specialized herbal protocols address complex health conditions requiring sophisticated understanding of pathophysiology and herb actions.

### **Endocrine System Support**

**Adrenal Adaptogens** like rhodiola, ashwagandha, and licorice help modulate stress response and restore HPA axis balance in adrenal fatigue.

**Thyroid Support** combines herbs like bladderwrack (iodine source), bugleweed (for hyperthyroidism), and ashwagandha (thyroid modulator).

**Blood Sugar Regulation** uses herbs like gymnema (reduces sugar absorption), bitter melon (improves insulin sensitivity), and cinnamon (enhances glucose metabolism).

**Female Hormone Balance** includes vitex (regulates pituitary), black cohosh (menopausal symptoms), and dong quai (uterine tonic).

**Male Reproductive Support** combines tribulus, maca, and saw palmetto for prostate health and hormonal balance.

### **Neurological Conditions**

**Cognitive Support** uses ginkgo (cerebral circulation), bacopa (memory enhancement), and lion's mane (nerve growth factor stimulation).

**Neuroprotective Herbs** like rosemary (antioxidant), turmeric (anti-inflammatory), and gotu kola (neuronal repair) protect against neurodegeneration.

**Peripheral Neuropathy** protocols include alpha-lipoic acid-rich herbs, B-vitamin containing herbs, and circulation enhancers like ginkgo.

**Migraine Prevention** combines feverfew (reduces frequency), butterbur (vasomodulator), and ginger (reduces inflammation and nausea).

**Anxiety Management** uses passionflower, kava (where legal), lemon balm, and magnolia bark for GABA modulation and calming effects.

### **Immune System Modulation**

**Autoimmune Support** combines immune-modulating herbs like turmeric, boswellia, and rehmannia with tissue-specific support herbs.

**Allergy Management** uses nettle (natural antihistamine), butterbur, quercetin-rich herbs, and local honey for desensitization.

**Chronic Infection Protocols** include antimicrobial herbs like oregano, thyme, and berberine-containing plants with immune support herbs.

**Cancer Support Adjuncts** like medicinal mushrooms (maitake, reishi), turmeric, and mistletoe (under supervision) support conventional treatment.

**Vaccine Response Enhancement** uses echinacea, astragalus, and elderberry before and after vaccinations to optimize immune response.

### **Gastrointestinal Health**

**Leaky Gut Syndrome** protocols include demulcent herbs (marshmallow, slippery elm), anti-inflammatory herbs (turmeric), and gut-healing nutrients.

**SIBO Management** combines antimicrobial herbs (oregano, berberine), prokinetics (ginger), and biofilm disruptors (enzymes, NAC).

**IBD Support** uses boswellia (anti-inflammatory), turmeric, marshmallow (soothing), and peppermint (antispasmodic) for inflammatory bowel conditions.

**GERD and Acid Reflux** combines marshmallow (protective), chamomile (anti-inflammatory), and deglycyrrhizinated licorice (DGL) for mucosal protection.

**Liver Detoxification Support** includes milk thistle (hepatoprotective), dandelion root (cholagogue), and schisandra (liver adaptogen).

### **Musculoskeletal Conditions**

**Osteoarthritis Management** combines anti-inflammatory herbs (turmeric, boswellia), cartilage support (horsetail, nettle), and pain relievers (willow bark).

**Rheumatoid Arthritis Protocols** include immune-modulating herbs (turmeric, thunder god vine), anti-inflammatories, and tissue repair support.

**Osteoporosis Prevention** uses horsetail (silica), nettle (mineral-rich), and red clover (phytoestrogens) with weight-bearing exercise support.

**Sports Injury Recovery** combines arnica (acute trauma), comfrey (bone and tissue repair), and turmeric (anti-inflammatory) with circulatory herbs.

**Fibromyalgia Support** includes adaptogens for energy, nervines for sleep, anti-inflammatories for pain, and circulatory stimulants.
`,
      quiz: [
        {
          id: 1,
          question: "What are adrenal adaptogens for?",
          options: [
            "Modulating stress response and HPA axis",
            "Only stimulating energy",
            "Just sedating patients",
            "Suppressing adrenal function"
          ],
          correctAnswer: 0,
          explanation: "Adrenal adaptogens help the body adapt to stress and restore balance to the hypothalamic-pituitary-adrenal axis."
        },
        {
          id: 2,
          question: "What does ginkgo support?",
          options: [
            "Cerebral circulation and cognitive function",
            "Only digestive function",
            "Just kidney health",
            "Liver detoxification"
          ],
          correctAnswer: 0,
          explanation: "Ginkgo is particularly known for improving cerebral circulation and supporting cognitive function."
        },
        {
          id: 3,
          question: "What herbs help blood sugar regulation?",
          options: [
            "Gymnema, bitter melon, cinnamon",
            "Only sedative herbs",
            "Just diuretic herbs",
            "Cardiac tonics"
          ],
          correctAnswer: 0,
          explanation: "Gymnema, bitter melon, and cinnamon have specific actions that help regulate blood sugar metabolism."
        },
        {
          id: 4,
          question: "What are neuroprotective herbs?",
          options: [
            "Herbs that protect against neurodegeneration",
            "Only nerve stimulants",
            "Just sedative herbs",
            "Digestive aids"
          ],
          correctAnswer: 0,
          explanation: "Neuroprotective herbs contain compounds that protect nerve cells from damage and support neuronal health."
        },
        {
          id: 5,
          question: "What herbs support female hormone balance?",
          options: [
            "Vitex, black cohosh, dong quai",
            "Only male tonics",
            "Just digestive bitters",
            "Respiratory herbs"
          ],
          correctAnswer: 0,
          explanation: "Vitex, black cohosh, and dong quai have specific effects on female hormonal regulation and reproductive health."
        },
        {
          id: 6,
          question: "What is nettle used for in allergies?",
          options: [
            "Natural antihistamine action",
            "Only as a diuretic",
            "Just for joint pain",
            "Skin conditions only"
          ],
          correctAnswer: 0,
          explanation: "Nettle leaf has natural antihistamine properties that can help reduce allergy symptoms."
        },
        {
          id: 7,
          question: "What does bacopa enhance?",
          options: [
            "Memory and cognitive function",
            "Only physical strength",
            "Just digestive power",
            "Liver detoxification"
          ],
          correctAnswer: 0,
          explanation: "Bacopa is traditionally used and researched for enhancing memory and overall cognitive function."
        },
        {
          id: 8,
          question: "What herbs help thyroid function?",
          options: [
            "Bladderwrack, bugleweed, ashwagandha",
            "Only heart tonics",
            "Just lung herbs",
            "Kidney supporters"
          ],
          correctAnswer: 0,
          explanation: "Bladderwrack provides iodine, bugleweed can help hyperthyroidism, and ashwagandha supports thyroid modulation."
        },
        {
          id: 9,
          question: "What is peripheral neuropathy?",
          options: [
            "Nerve damage in extremities",
            "Only central brain disorders",
            "Just muscle conditions",
            "Bone diseases"
          ],
          correctAnswer: 0,
          explanation: "Peripheral neuropathy involves nerve damage in hands and feet, often causing pain, numbness, or weakness."
        },
        {
          id: 10,
          question: "What does gymnema do?",
          options: [
            "Reduces sugar absorption and cravings",
            "Only increases appetite",
            "Just stimulates digestion",
            "Acts as sedative"
          ],
          correctAnswer: 0,
          explanation: "Gymnema reduces sugar absorption in intestines and can decrease sugar cravings by affecting taste receptors."
        },
        {
          id: 11,
          question: "What are medicinal mushrooms used for?",
          options: [
            "Immune modulation and cancer support",
            "Only culinary purposes",
            "Just decorative uses",
            "Poisonous effects"
          ],
          correctAnswer: 0,
          explanation: "Medicinal mushrooms like reishi and maitake have immune-modulating properties and may support cancer treatment."
        },
        {
          id: 12,
          question: "What does feverfew prevent?",
          options: [
            "Migraine frequency and severity",
            "Only common colds",
            "Just digestive issues",
            "Skin rashes"
          ],
          correctAnswer: 0,
          explanation: "Feverfew is well-researched for reducing the frequency and severity of migraine headaches."
        },
        {
          id: 13,
          question: "What is leaky gut syndrome?",
          options: [
            "Increased intestinal permeability",
            "Only stomach ulcers",
            "Just constipation",
            "Liver congestion"
          ],
          correctAnswer: 0,
          explanation: "Leaky gut syndrome involves increased intestinal permeability allowing particles into bloodstream causing immune reactions."
        },
        {
          id: 14,
          question: "What is lion's mane known for?",
          options: [
            "Stimulating nerve growth factor",
            "Only culinary use",
            "Just decorative purposes",
            "Toxic effects"
          ],
          correctAnswer: 0,
          explanation: "Lion's mane mushroom contains compounds that stimulate nerve growth factor production, supporting neurological health."
        },
        {
          id: 15,
          question: "What herbs help osteoarthritis?",
          options: [
            "Turmeric, boswellia, willow bark",
            "Only stimulant herbs",
            "Just sedatives",
            "Digestive bitters"
          ],
          correctAnswer: 0,
          explanation: "Turmeric and boswellia reduce inflammation while willow bark provides natural pain relief for osteoarthritis."
        },
        {
          id: 16,
          question: "What is SIBO?",
          options: [
            "Small intestinal bacterial overgrowth",
            "Only stomach infection",
            "Just large intestine issues",
            "Liver infection"
          ],
          correctAnswer: 0,
          explanation: "SIBO stands for Small Intestinal Bacterial Overgrowth, where bacteria colonize the small intestine causing digestive symptoms."
        },
        {
          id: 17,
          question: "What does butterbur help?",
          options: [
            "Allergies and migraines",
            "Only liver function",
            "Just kidney health",
            "Bone density"
          ],
          correctAnswer: 0,
          explanation: "Butterbur has research supporting its use for both allergy relief and migraine prevention."
        },
        {
          id: 18,
          question: "What are male reproductive support herbs?",
          options: [
            "Tribulus, maca, saw palmetto",
            "Only female tonics",
            "Just children's herbs",
            "Elderly formulas only"
          ],
          correctAnswer: 0,
          explanation: "Tribulus, maca, and saw palmetto have traditional use for supporting male reproductive health and prostate function."
        },
        {
          id: 19,
          question: "What is boswellia used for?",
          options: [
            "Anti-inflammatory effects in joints and gut",
            "Only as incense",
            "Just for fragrance",
            "Culinary spice only"
          ],
          correctAnswer: 0,
          explanation: "Boswellia contains potent anti-inflammatory compounds effective for both joint inflammation and inflammatory bowel conditions."
        },
        {
          id: 20,
          question: "What does milk thistle support?",
          options: [
            "Liver detoxification and protection",
            "Only kidney function",
            "Just lung health",
            "Brain function only"
          ],
          correctAnswer: 0,
          explanation: "Milk thistle is specifically hepatoprotective, supporting liver detoxification pathways and protecting liver cells."
        }
      ]
    },

    // MODULE 5: Herb-Drug Interactions and Safety
    {
      id: 5,
      title: "Safety and Interactions Management",
      completed: false,
      content: `
## **Professional Safety Protocols**

Managing herb-drug interactions and ensuring patient safety are critical responsibilities in professional herbal therapy practice.

### **Interaction Mechanisms**

**Pharmacodynamic Interactions** occur when herbs and drugs have similar or opposing effects on the same physiological pathways. For example, combining anticoagulant herbs with blood-thinning medications increases bleeding risk.

**Pharmacokinetic Interactions** affect drug absorption, distribution, metabolism, or elimination. St. John's wort induces cytochrome P450 enzymes, reducing effectiveness of many medications.

**Protein Binding Displacement** happens when herbs compete with drugs for plasma protein binding sites, increasing free drug concentrations and potential toxicity.

**Transport Protein Inhibition** affects drug movement across cellular membranes. Some herbs inhibit P-glycoprotein, altering drug distribution.

**Receptor Site Competition** occurs when herbs and drugs compete for the same cellular receptor sites, potentially reducing effectiveness.

### **High-Risk Categories**

**Anticoagulant Medications** interact with many herbs including garlic, ginkgo, ginger, and feverfew, increasing bleeding risk.

**Cyclosporine and Transplant Drugs** have critical interactions with St. John's wort, reducing drug levels and risking organ rejection.

**Chemotherapy Agents** may interact with antioxidants, immune stimulants, or liver-metabolized herbs, affecting treatment outcomes.

**Cardiac Medications** like digoxin interact with herbs containing cardiac glycosides or affecting electrolyte balance.

**Psychiatric Medications** including SSRIs, MAOIs, and benzodiazepines have numerous potentially dangerous herb interactions.

**Diabetes Medications** can interact with blood sugar-lowering herbs, potentially causing hypoglycemia.

### **Safety Monitoring**

**Baseline Laboratory Tests** establish pretreatment values for liver enzymes, kidney function, blood counts, and other relevant parameters.

**Regular Monitoring Schedules** track potential adverse effects based on herb toxicity profiles and individual risk factors.

**Symptom Diaries** help patients track potential side effects, symptom changes, and overall responses to herbal therapy.

**Washout Periods** may be necessary when switching between herbs or before surgery to reduce interaction risks.

**Pregnancy and Lactation** require extreme caution as many herbs have unknown effects on fetal development and breastfed infants.

### **Contraindication Management**

**Absolute Contraindications** prohibit specific herb use regardless of circumstances, such as comfrey internal use due to hepatotoxicity.

**Relative Contraindications** require careful risk-benefit assessment and close monitoring, such as using stimulating herbs in anxiety disorders.

**Condition-Specific Cautions** include avoiding immune-stimulating herbs in autoimmune conditions or estrogenic herbs in hormone-sensitive cancers.

**Age-Related Considerations** account for different sensitivities in children, elderly, and pregnant women.

**Organ Impairment Adjustments** modify herb choices and doses for patients with liver, kidney, or heart conditions.

### **Documentation and Communication**

**Interaction Databases** provide current information on known herb-drug interactions for reference during consultation.

**Patient Education Materials** clearly explain potential risks, warning signs, and necessary precautions in understandable language.

**Healthcare Provider Communication** establishes protocols for informing other practitioners about herbal treatments being used.

**Consent Forms** specifically address known risks, potential interactions, and monitoring requirements for informed decision-making.

**Adverse Event Reporting** systems document unexpected reactions to contribute to safety knowledge.
`,
      quiz: [
        {
          id: 1,
          question: "What are pharmacodynamic interactions?",
          options: [
            "Similar or opposing effects on same pathways",
            "Only affecting drug absorption",
            "Just changing drug color",
            "Improving drug taste"
          ],
          correctAnswer: 0,
          explanation: "Pharmacodynamic interactions occur when herbs and drugs affect the same physiological pathways, potentially amplifying or opposing effects."
        },
        {
          id: 2,
          question: "What does St. John's wort do to medications?",
          options: [
            "Induces liver enzymes reducing drug effectiveness",
            "Only improves drug absorption",
            "Just colors medications",
            "Preserves drug potency"
          ],
          correctAnswer: 0,
          explanation: "St. John's wort induces cytochrome P450 enzymes in the liver, increasing metabolism and reducing effectiveness of many medications."
        },
        {
          id: 3,
          question: "What increases bleeding risk?",
          options: [
            "Combining anticoagulant herbs with blood thinners",
            "Only using single herbs",
            "Just taking vitamins",
            "Drinking water"
          ],
          correctAnswer: 0,
          explanation: "Combining herbs with anticoagulant properties (like garlic, ginkgo) with blood-thinning medications significantly increases bleeding risk."
        },
        {
          id: 4,
          question: "What are baseline laboratory tests for?",
          options: [
            "Establishing pretreatment values for monitoring",
            "Only diagnosing diseases",
            "Just checking insurance coverage",
            "Measuring herb potency"
          ],
          correctAnswer: 0,
          explanation: "Baseline laboratory tests establish pretreatment values to monitor for potential adverse effects during herbal therapy."
        },
        {
          id: 5,
          question: "What is an absolute contraindication?",
          options: [
            "Prohibiting herb use regardless of circumstances",
            "Only a mild caution",
            "Just a temporary restriction",
            "A preference issue"
          ],
          correctAnswer: 0,
          explanation: "Absolute contraindications prohibit specific herb use due to unacceptable risks regardless of potential benefits."
        },
        {
          id: 6,
          question: "What are pharmacokinetic interactions?",
          options: [
            "Affecting drug absorption, metabolism, elimination",
            "Only changing drug names",
            "Just improving drug appearance",
            "Making drugs cheaper"
          ],
          correctAnswer: 0,
          explanation: "Pharmacokinetic interactions affect how drugs are absorbed, distributed, metabolized, or eliminated from the body."
        },
        {
          id: 7,
          question: "What herbs interact with cardiac medications?",
          options: [
            "Herbs with cardiac glycosides or affecting electrolytes",
            "Only digestive bitters",
            "Just respiratory herbs",
            "Topical preparations"
          ],
          correctAnswer: 0,
          explanation: "Herbs containing cardiac glycosides or affecting electrolyte balance can dangerously interact with cardiac medications like digoxin."
        },
        {
          id: 8,
          question: "What do symptom diaries help with?",
          options: [
            "Tracking side effects and treatment responses",
            "Only recording daily activities",
            "Just noting weather changes",
            "Listing food consumed"
          ],
          correctAnswer: 0,
          explanation: "Symptom diaries help patients systematically track potential side effects, symptom changes, and overall responses to treatment."
        },
        {
          id: 9,
          question: "What are relative contraindications?",
          options: [
            "Requiring careful risk-benefit assessment",
            "Only minor preferences",
            "Just temporary restrictions",
            "Complete prohibitions"
          ],
          correctAnswer: 0,
          explanation: "Relative contraindications require careful evaluation of risks versus benefits and may be acceptable with close monitoring."
        },
        {
          id: 10,
          question: "What do interaction databases provide?",
          options: [
            "Current information on known herb-drug interactions",
            "Only herb identification guides",
            "Just plant growing information",
            "Herb pricing data"
          ],
          correctAnswer: 0,
          explanation: "Interaction databases provide up-to-date information on documented herb-drug interactions for clinical reference."
        },
        {
          id: 11,
          question: "What is protein binding displacement?",
          options: [
            "Herbs competing with drugs for protein binding sites",
            "Only improving drug absorption",
            "Just changing drug color",
            "Making drugs more palatable"
          ],
          correctAnswer: 0,
          explanation: "Protein binding displacement occurs when herbs compete with drugs for plasma protein binding, increasing free drug levels."
        },
        {
          id: 12,
          question: "What herbs interact with diabetes medications?",
          options: [
            "Blood sugar-lowering herbs potentially causing hypoglycemia",
            "Only herbs for digestion",
            "Just respiratory herbs",
            "Topical applications"
          ],
          correctAnswer: 0,
          explanation: "Herbs that lower blood sugar can interact with diabetes medications, potentially causing dangerously low blood sugar levels."
        },
        {
          id: 13,
          question: "What are washout periods for?",
          options: [
            "Reducing interaction risks when switching treatments",
            "Only cleaning herbal equipment",
            "Just resting between consultations",
            "Herb storage times"
          ],
          correctAnswer: 0,
          explanation: "Washout periods allow previous herbs or medications to clear the system before starting new treatments to reduce interaction risks."
        },
        {
          id: 14,
          question: "What are condition-specific cautions?",
          options: [
            "Avoiding certain herbs in specific health conditions",
            "Only general health advice",
            "Just dietary suggestions",
            "Exercise recommendations"
          ],
          correctAnswer: 0,
          explanation: "Condition-specific cautions involve avoiding certain herbs that might exacerbate particular health conditions."
        },
        {
          id: 15,
          question: "What do patient education materials explain?",
          options: [
            "Potential risks, warning signs, and precautions",
            "Only herb harvesting techniques",
            "Just plant identification",
            "Herb market prices"
          ],
          correctAnswer: 0,
          explanation: "Patient education materials clearly explain potential risks, warning signs to watch for, and necessary precautions."
        },
        {
          id: 16,
          question: "What is receptor site competition?",
          options: [
            "Herbs and drugs competing for same cellular receptors",
            "Only improving drug effectiveness",
            "Just changing receptor shape",
            "Creating new receptors"
          ],
          correctAnswer: 0,
          explanation: "Receptor site competition occurs when herbs and drugs compete for the same cellular receptor sites, potentially reducing effectiveness."
        },
        {
          id: 17,
          question: "What herbs interact with chemotherapy?",
          options: [
            "Antioxidants, immune stimulants, liver-metabolized herbs",
            "Only digestive aids",
            "Just topical preparations",
            "Aromatherapy oils"
          ],
          correctAnswer: 0,
          explanation: "Herbs with antioxidant, immune-stimulating, or liver-metabolizing properties can interact with chemotherapy agents."
        },
        {
          id: 18,
          question: "Why caution in pregnancy and lactation?",
          options: [
            "Many herbs have unknown effects on fetus/infant",
            "Only because of legal restrictions",
            "Just for insurance purposes",
            "Traditional preferences only"
          ],
          correctAnswer: 0,
          explanation: "Extreme caution is needed because many herbs have unknown effects on fetal development and breastfed infants."
        },
        {
          id: 19,
          question: "What are age-related considerations?",
          options: [
            "Different sensitivities in children and elderly",
            "Only chronological age",
            "Just birth dates",
            "Age restrictions for fun"
          ],
          correctAnswer: 0,
          explanation: "Age-related considerations account for different physiological responses and sensitivities in children and elderly patients."
        },
        {
          id: 20,
          question: "What does healthcare provider communication establish?",
          options: [
            "Protocols for informing other practitioners",
            "Only social connections",
            "Just business relationships",
            "Marketing networks"
          ],
          correctAnswer: 0,
          explanation: "Healthcare provider communication establishes protocols for informing other practitioners about herbal treatments for coordinated care."
        }
      ]
    },

    // MODULE 6: Professional Practice and Ethics
    {
      id: 6,
      title: "Professional Practice Standards",
      completed: false,
      content: `
## **Ethical Herbal Practice**

Professional herbal therapy requires adherence to ethical standards, legal requirements, and practice guidelines to ensure quality care and patient protection.

### **Ethical Principles**

**Informed Consent** requires explaining treatment options, potential benefits, risks, alternatives, and costs before beginning therapy.

**Confidentiality** protects patient information except where required by law or necessary to prevent serious harm.

**Competence Boundaries** involve practicing within training scope and referring when conditions exceed expertise.

**Conflict of Interest Avoidance** means prioritizing patient welfare over financial gain or personal relationships.

**Cultural Competence** requires respecting diverse health beliefs, practices, and cultural needs of patients.

### **Legal Considerations**

**Scope of Practice Laws** define what herbalists can legally do in different jurisdictions, varying significantly by location.

**Business Licensing** requirements include permits, tax registration, and compliance with local business regulations.

**Product Liability** concerns involve responsibility for herbs sold or recommended, including quality control and accurate labeling.

**Malpractice Insurance** protects against claims of negligence, errors, or omissions in professional practice.

**Record Retention** laws specify how long patient records must be kept, typically 5-7 years after last contact or longer for minors.

### **Practice Management**

**Clinic Setup** considerations include location, equipment, supplies, and creating a healing environment conducive to patient care.

**Fee Structures** should be transparent, reasonable, and explained clearly before services are provided.

**Appointment Systems** manage scheduling, reminders, cancellations, and follow-up efficiently.

**Inventory Management** ensures adequate herb supplies, proper storage, rotation, and quality control.

**Marketing Ethics** require honest representation of qualifications, services, and expected outcomes without making false claims.

### **Continuing Education**

**Professional Development** involves ongoing learning through workshops, conferences, and advanced training to maintain and enhance skills.

**Research Literacy** enables critical evaluation of herbal research studies to inform evidence-based practice.

**Peer Consultation** provides opportunities for case discussion, knowledge sharing, and professional support.

**Supervision and Mentoring** arrangements support skill development for new practitioners and ongoing growth for experienced ones.

**Professional Organization Membership** offers networking, resources, and representation for the herbal profession.

### **Quality Assurance**

**Treatment Outcome Tracking** systematically evaluates effectiveness of herbal protocols to improve future practice.

**Patient Satisfaction Surveys** gather feedback on all aspects of care to identify areas for improvement.

**Peer Review** involves colleagues examining practice patterns, case management, and documentation for quality improvement.

**Adverse Event Monitoring** tracks and analyzes any negative reactions to improve safety protocols.

**Protocol Development** creates standardized approaches for common conditions while allowing individualization.

### **Future Directions**

**Integration with Conventional Medicine** trends toward more collaborative healthcare models combining herbal and conventional approaches.

**Teleherbalism** uses technology for remote consultations while maintaining quality care and appropriate assessment.

**Personalized Herbal Medicine** advances with genetic testing and biomarker analysis guiding individualized formulations.

**Sustainability Initiatives** address ethical sourcing, conservation, and fair trade practices in herb supply chains.

**Research Participation** contributes to evidence base through practice-based research and clinical trials.
`,
      quiz: [
        {
          id: 1,
          question: "What does informed consent require?",
          options: [
            "Explaining treatment options, benefits, risks",
            "Only getting patient signature",
            "Just listing herb names",
            "Assuming patient understanding"
          ],
          correctAnswer: 0,
          explanation: "Informed consent requires clear explanation of treatment options, potential benefits, risks, alternatives, and costs."
        },
        {
          id: 2,
          question: "What are scope of practice laws?",
          options: [
            "Define what herbalists can legally do",
            "Only business hours regulations",
            "Just office location rules",
            "Herb sourcing guidelines"
          ],
          correctAnswer: 0,
          explanation: "Scope of practice laws legally define what services herbalists can provide in specific jurisdictions."
        },
        {
          id: 3,
          question: "What does confidentiality protect?",
          options: [
            "Patient information with specific exceptions",
            "Only business secrets",
            "Just personal opinions",
            "Marketing strategies"
          ],
          correctAnswer: 0,
          explanation: "Confidentiality protects patient information except where legally required or necessary to prevent serious harm."
        },
        {
          id: 4,
          question: "What is clinic setup consideration?",
          options: [
            "Creating healing environment for patient care",
            "Only choosing office colors",
            "Just buying furniture",
            "Selecting artwork"
          ],
          correctAnswer: 0,
          explanation: "Clinic setup involves creating a physical environment that supports healing and professional practice."
        },
        {
          id: 5,
          question: "What is professional development?",
          options: [
            "Ongoing learning to maintain and enhance skills",
            "Only initial training",
            "Just reading labels",
            "Basic herb knowledge"
          ],
          correctAnswer: 0,
          explanation: "Professional development involves continuous education to maintain competence and stay current with evolving knowledge."
        },
        {
          id: 6,
          question: "What are competence boundaries?",
          options: [
            "Practicing within training scope and referring appropriately",
            "Only treating easy cases",
            "Just avoiding all complex cases",
            "Treating everything regardless of training"
          ],
          correctAnswer: 0,
          explanation: "Competence boundaries involve recognizing limitations of training and referring patients when conditions exceed expertise."
        },
        {
          id: 7,
          question: "What does business licensing include?",
          options: [
            "Permits, tax registration, local regulations",
            "Only herb knowledge",
            "Just personal preferences",
            "Friendship networks"
          ],
          correctAnswer: 0,
          explanation: "Business licensing involves obtaining necessary permits, tax registration, and complying with local business regulations."
        },
        {
          id: 8,
          question: "What should fee structures be?",
          options: [
            "Transparent, reasonable, and clearly explained",
            "Only maximum possible",
            "Just whatever market allows",
            "Hidden until billing"
          ],
          correctAnswer: 0,
          explanation: "Fee structures should be transparent, reasonable for services provided, and clearly explained before treatment."
        },
        {
          id: 9,
          question: "What is research literacy?",
          options: [
            "Critical evaluation of herbal research studies",
            "Only reading abstracts",
            "Just accepting all research",
            "Ignoring scientific studies"
          ],
          correctAnswer: 0,
          explanation: "Research literacy enables practitioners to critically evaluate scientific studies to inform evidence-based practice."
        },
        {
          id: 10,
          question: "What is treatment outcome tracking?",
          options: [
            "Systematically evaluating protocol effectiveness",
            "Only counting patient numbers",
            "Just recording income",
            "Tracking herb inventory"
          ],
          correctAnswer: 0,
          explanation: "Treatment outcome tracking systematically evaluates the effectiveness of herbal protocols to improve future practice."
        },
        {
          id: 11,
          question: "What is conflict of interest avoidance?",
          options: [
            "Prioritizing patient welfare over personal gain",
            "Only maximizing profits",
            "Just following personal preferences",
            "Ignoring financial considerations"
          ],
          correctAnswer: 0,
          explanation: "Conflict of interest avoidance means prioritizing patient welfare over financial gain or personal relationships."
        },
        {
          id: 12,
          question: "What is product liability?",
          options: [
            "Responsibility for herbs sold or recommended",
            "Only product popularity",
            "Just manufacturing costs",
            "Packaging design"
          ],
          correctAnswer: 0,
          explanation: "Product liability involves responsibility for the quality, safety, and accurate labeling of herbs sold or recommended."
        },
        {
          id: 13,
          question: "What do appointment systems manage?",
          options: [
            "Scheduling, reminders, cancellations efficiently",
            "Only patient names",
            "Just herb supplies",
            "Office cleaning"
          ],
          correctAnswer: 0,
          explanation: "Appointment systems efficiently manage scheduling, reminders, cancellations, and follow-up for smooth practice operation."
        },
        {
          id: 14,
          question: "What is peer consultation?",
          options: [
            "Case discussion and knowledge sharing with colleagues",
            "Only social gatherings",
            "Just business meetings",
            "Competitive comparisons"
          ],
          correctAnswer: 0,
          explanation: "Peer consultation provides opportunities for case discussion, knowledge sharing, and professional support among colleagues."
        },
        {
          id: 15,
          question: "What are patient satisfaction surveys for?",
          options: [
            "Gathering feedback to improve care quality",
            "Only marketing purposes",
            "Just counting responses",
            "Creating mailing lists"
          ],
          correctAnswer: 0,
          explanation: "Patient satisfaction surveys gather feedback on all aspects of care to identify areas for improvement."
        },
        {
          id: 16,
          question: "What is cultural competence?",
          options: [
            "Respecting diverse health beliefs and practices",
            "Only knowing one cultural approach",
            "Just personal cultural background",
            "Ignoring cultural differences"
          ],
          correctAnswer: 0,
          explanation: "Cultural competence requires respecting and understanding diverse health beliefs, practices, and cultural needs."
        },
        {
          id: 17,
          question: "What is malpractice insurance for?",
          options: [
            "Protection against negligence claims",
            "Only business property",
            "Just herb inventory",
            "Office equipment"
          ],
          correctAnswer: 0,
          explanation: "Malpractice insurance protects against claims of negligence, errors, or omissions in professional practice."
        },
        {
          id: 18,
          question: "What does inventory management ensure?",
          options: [
            "Adequate supplies with proper storage and rotation",
            "Only maximum stock levels",
            "Just cheapest sources",
            "Fastest delivery"
          ],
          correctAnswer: 0,
          explanation: "Inventory management ensures adequate herb supplies, proper storage conditions, rotation, and quality control."
        },
        {
          id: 19,
          question: "What is supervision and mentoring?",
          options: [
            "Supporting skill development for practitioners",
            "Only boss-employee relationships",
            "Just formal education",
            "Personal friendships"
          ],
          correctAnswer: 0,
          explanation: "Supervision and mentoring arrangements support skill development for new practitioners and ongoing growth for experienced ones."
        },
        {
          id: 20,
          question: "What is peer review?",
          options: [
            "Colleagues examining practice for quality improvement",
            "Only criticizing others",
            "Just social evaluation",
            "Competitive assessment"
          ],
          correctAnswer: 0,
          explanation: "Peer review involves colleagues examining practice patterns, case management, and documentation for quality improvement."
        }
      ]
    }
  ],

  // FINAL EXAM (40 questions covering all modules)
  finalExam: [
    {
      id: 1,
      question: "What are alkaloids?",
      options: [
        "Nitrogen-containing compounds with strong effects",
        "Only simple plant sugars",
        "Just plant pigments",
        "Basic building blocks of proteins"
      ],
      correctAnswer: 0,
      explanation: "Alkaloids are nitrogen-containing plant compounds that often have potent physiological effects."
    },
    {
      id: 2,
      question: "What is synergistic blending?",
      options: [
        "Combining herbs that enhance each other's effects",
        "Using only single herbs",
        "Mixing random herbs together",
        "Separating herb actions"
      ],
      correctAnswer: 0,
      explanation: "Synergistic blending combines herbs with complementary actions that work together to enhance therapeutic effects."
    },
    {
      id: 3,
      question: "What is constitutional assessment?",
      options: [
        "Evaluating inherent strengths and weaknesses",
        "Only measuring body temperature",
        "Just checking blood pressure",
        "Assessing current symptoms only"
      ],
      correctAnswer: 0,
      explanation: "Constitutional assessment evaluates a person's inherent physical and energetic characteristics."
    },
    {
      id: 4,
      question: "What are adrenal adaptogens for?",
      options: [
        "Modulating stress response and HPA axis",
        "Only stimulating energy",
        "Just sedating patients",
        "Suppressing adrenal function"
      ],
      correctAnswer: 0,
      explanation: "Adrenal adaptogens help the body adapt to stress and restore HPA axis balance."
    },
    {
      id: 5,
      question: "What are pharmacodynamic interactions?",
      options: [
        "Similar or opposing effects on same pathways",
        "Only affecting drug absorption",
        "Just changing drug color",
        "Improving drug taste"
      ],
      correctAnswer: 0,
      explanation: "Pharmacodynamic interactions occur when herbs and drugs affect the same physiological pathways."
    },
    {
      id: 6,
      question: "What does informed consent require?",
      options: [
        "Explaining treatment options, benefits, risks",
        "Only getting patient signature",
        "Just listing herb names",
        "Assuming patient understanding"
      ],
      correctAnswer: 0,
      explanation: "Informed consent requires clear explanation of treatment options, potential benefits, and risks."
    },
    {
      id: 7,
      question: "What are glycosides?",
      options: [
        "Compounds with sugar attached to aglycone",
        "Only simple plant sugars",
        "Just protein structures",
        "Mineral complexes"
      ],
      correctAnswer: 0,
      explanation: "Glycosides consist of sugar molecules attached to non-sugar aglycones with therapeutic actions."
    },
    {
      id: 8,
      question: "What do adaptogen combinations do?",
      options: [
        "Enhance stress adaptation and energy regulation",
        "Only stimulate the nervous system",
        "Just sedate patients",
        "Suppress immune function"
      ],
      correctAnswer: 0,
      explanation: "Adaptogen combinations work together to help the body adapt to stress and regulate energy."
    },
    {
      id: 9,
      question: "What does tongue diagnosis examine?",
      options: [
        "Color, coating, shape, moisture, markings",
        "Only taste perception",
        "Just tongue mobility",
        "Speech patterns only"
      ],
      correctAnswer: 0,
      explanation: "Tongue diagnosis examines multiple characteristics that may indicate systemic imbalances."
    },
    {
      id: 10,
      question: "What does ginkgo support?",
      options: [
        "Cerebral circulation and cognitive function",
        "Only digestive function",
        "Just kidney health",
        "Liver detoxification"
      ],
      correctAnswer: 0,
      explanation: "Ginkgo is particularly known for improving cerebral circulation and cognitive function."
    },
    {
      id: 11,
      question: "What does St. John's wort do to medications?",
      options: [
        "Induces liver enzymes reducing drug effectiveness",
        "Only improves drug absorption",
        "Just colors medications",
        "Preserves drug potency"
      ],
      correctAnswer: 0,
      explanation: "St. John's wort induces liver enzymes, increasing metabolism and reducing drug effectiveness."
    },
    {
      id: 12,
      question: "What are scope of practice laws?",
      options: [
        "Define what herbalists can legally do",
        "Only business hours regulations",
        "Just office location rules",
        "Herb sourcing guidelines"
      ],
      correctAnswer: 0,
      explanation: "Scope of practice laws legally define what services herbalists can provide."
    },
    {
      id: 13,
      question: "What are terpenoids?",
      options: [
        "Compounds including volatile oils and resins",
        "Only water-soluble vitamins",
        "Just plant fibers",
        "Simple carbohydrates"
      ],
      correctAnswer: 0,
      explanation: "Terpenoids include volatile oils, resins, and bitter principles with various therapeutic effects."
    },
    {
      id: 14,
      question: "What are directional herbs?",
      options: [
        "Herbs that guide other herbs to specific tissues",
        "Only compass directions for harvesting",
        "Herbs that grow in specific directions",
        "Plants used for navigation"
      ],
      correctAnswer: 0,
      explanation: "Directional herbs help direct other herbal constituents to specific body systems or tissues."
    },
    {
      id: 15,
      question: "What are open-ended questions?",
      options: [
        "Questions allowing descriptive responses",
        "Only yes/no questions",
        "Just medical history forms",
        "Laboratory test orders"
      ],
      correctAnswer: 0,
      explanation: "Open-ended questions allow patients to describe experiences in their own words."
    },
    {
      id: 16,
      question: "What herbs help blood sugar regulation?",
      options: [
        "Gymnema, bitter melon, cinnamon",
        "Only sedative herbs",
        "Just diuretic herbs",
        "Cardiac tonics"
      ],
      correctAnswer: 0,
      explanation: "Gymnema, bitter melon, and cinnamon have specific actions that help regulate blood sugar."
    },
    {
      id: 17,
      question: "What increases bleeding risk?",
      options: [
        "Combining anticoagulant herbs with blood thinners",
        "Only using single herbs",
        "Just taking vitamins",
        "Drinking water"
      ],
      correctAnswer: 0,
      explanation: "Combining anticoagulant herbs with blood-thinning medications increases bleeding risk."
    },
    {
      id: 18,
      question: "What does confidentiality protect?",
      options: [
        "Patient information with specific exceptions",
        "Only business secrets",
        "Just personal opinions",
        "Marketing strategies"
      ],
      correctAnswer: 0,
      explanation: "Confidentiality protects patient information except where legally required."
    },
    {
      id: 19,
      question: "What are polyphenols?",
      options: [
        "Flavonoids, tannins, and phenolic acids",
        "Only alkaloids",
        "Just terpenes",
        "Simple sugars only"
      ],
      correctAnswer: 0,
      explanation: "Polyphenols encompass flavonoids, tannins, and phenolic acids with antioxidant properties."
    },
    {
      id: 20,
      question: "What does liposomal encapsulation do?",
      options: [
        "Enhances absorption through lipid layers",
        "Only makes herbs taste better",
        "Just colors herbal products",
        "Preserves herbs longer"
      ],
      correctAnswer: 0,
      explanation: "Liposomal encapsulation surrounds compounds with lipid layers to improve absorption."
    },
    {
      id: 21,
      question: "What is energetic matching?",
      options: [
        "Selecting herbs with appropriate thermal qualities",
        "Only matching herb colors",
        "Just similar tasting herbs",
        "Matching plant growth patterns"
      ],
      correctAnswer: 0,
      explanation: "Energetic matching selects herbs with appropriate heating, cooling, or other properties."
    },
    {
      id: 22,
      question: "What are neuroprotective herbs?",
      options: [
        "Herbs that protect against neurodegeneration",
        "Only nerve stimulants",
        "Just sedative herbs",
        "Digestive aids"
      ],
      correctAnswer: 0,
      explanation: "Neuroprotective herbs contain compounds that protect nerve cells from damage."
    },
    {
      id: 23,
      question: "What are baseline laboratory tests for?",
      options: [
        "Establishing pretreatment values for monitoring",
        "Only diagnosing diseases",
        "Just checking insurance coverage",
        "Measuring herb potency"
      ],
      correctAnswer: 0,
      explanation: "Baseline tests establish pretreatment values to monitor for potential adverse effects."
    },
    {
      id: 24,
      question: "What are competence boundaries?",
      options: [
        "Practicing within training scope and referring appropriately",
        "Only treating easy cases",
        "Just avoiding all complex cases",
        "Treating everything regardless of training"
      ],
      correctAnswer: 0,
      explanation: "Competence boundaries involve recognizing limitations and referring when appropriate."
    },
    {
      id: 25,
      question: "What is organoleptic evaluation?",
      options: [
        "Using senses to assess herb quality",
        "Only laboratory chemical analysis",
        "Microscopic examination only",
        "Genetic testing of plants"
      ],
      correctAnswer: 0,
      explanation: "Organoleptic evaluation uses sight, smell, taste, and touch to assess herb quality."
    },
    {
      id: 26,
      question: "What is weight-based dosing?",
      options: [
        "Calculating doses based on body weight",
        "Using the same dose for everyone",
        "Only measuring herb weight",
        "Estimating doses roughly"
      ],
      correctAnswer: 0,
      explanation: "Weight-based dosing calculates appropriate doses based on patient body weight."
    },
    {
      id: 27,
      question: "What are short-term goals?",
      options: [
        "Addressing acute symptoms and immediate concerns",
        "Only lifelong treatment plans",
        "Just preventive measures",
        "Constitutional changes only"
      ],
      correctAnswer: 0,
      explanation: "Short-term goals focus on relieving acute symptoms for immediate benefit."
    },
    {
      id: 28,
      question: "What herbs support female hormone balance?",
      options: [
        "Vitex, black cohosh, dong quai",
        "Only male tonics",
        "Just digestive bitters",
        "Respiratory herbs"
      ],
      correctAnswer: 0,
      explanation: "Vitex, black cohosh, and dong quai have specific effects on female hormonal regulation."
    },
    {
      id: 29,
      question: "What is an absolute contraindication?",
      options: [
        "Prohibiting herb use regardless of circumstances",
        "Only a mild caution",
        "Just a temporary restriction",
        "A preference issue"
      ],
      correctAnswer: 0,
      explanation: "Absolute contraindications prohibit specific herb use due to unacceptable risks."
    },
    {
      id: 30,
      question: "What is clinic setup consideration?",
      options: [
        "Creating healing environment for patient care",
        "Only choosing office colors",
        "Just buying furniture",
        "Selecting artwork"
      ],
      correctAnswer: 0,
      explanation: "Clinic setup involves creating a physical environment that supports healing."
    },
    {
      id: 31,
      question: "What are buffer compounds?",
      options: [
        "Constituents that moderate stronger effects",
        "Only active ingredients",
        "Plant toxins",
        "Harvesting aids"
      ],
      correctAnswer: 0,
      explanation: "Buffer compounds in plants moderate the effects of stronger constituents."
    },
    {
      id: 32,
      question: "What are phytosome complexes?",
      options: [
        "Herb extracts bonded to phospholipids",
        "Only simple herb powders",
        "Just water extracts",
        "Alcohol tinctures only"
      ],
      correctAnswer: 0,
      explanation: "Phytosome complexes bond herbal extracts to phospholipids to improve absorption."
    },
    {
      id: 33,
      question: "What does pulse assessment evaluate?",
      options: [
        "Rate, rhythm, strength, and quality",
        "Only heart rate number",
        "Just blood pressure",
        "Circulation speed only"
      ],
      correctAnswer: 0,
      explanation: "Pulse assessment evaluates multiple characteristics that may indicate systemic conditions."
    },
    {
      id: 34,
      question: "What is nettle used for in allergies?",
      options: [
        "Natural antihistamine action",
        "Only as a diuretic",
        "Just for joint pain",
        "Skin conditions only"
      ],
      correctAnswer: 0,
      explanation: "Nettle leaf has natural antihistamine properties that reduce allergy symptoms."
    },
    {
      id: 35,
      question: "What are pharmacokinetic interactions?",
      options: [
        "Affecting drug absorption, metabolism, elimination",
        "Only changing drug names",
        "Just improving drug appearance",
        "Making drugs cheaper"
      ],
      correctAnswer: 0,
      explanation: "Pharmacokinetic interactions affect how drugs are absorbed, metabolized, or eliminated."
    },
    {
      id: 36,
      question: "What is professional development?",
      options: [
        "Ongoing learning to maintain and enhance skills",
        "Only initial training",
        "Just reading labels",
        "Basic herb knowledge"
      ],
      correctAnswer: 0,
      explanation: "Professional development involves continuous education to maintain competence."
    },
    {
      id: 37,
      question: "What are polysaccharides?",
      options: [
        "Complex carbohydrates with immune effects",
        "Only simple sugars",
        "Just plant toxins",
        "Energy sources only"
      ],
      correctAnswer: 0,
      explanation: "Polysaccharides in herbs have immune-modulating and demulcent properties."
    },
    {
      id: 38,
      question: "What does titration involve?",
      options: [
        "Starting low and gradually increasing doses",
        "Using maximum doses immediately",
        "Keeping constant doses always",
        "Random dose changes"
      ],
      correctAnswer: 0,
      explanation: "Titration involves starting with low doses and gradually increasing based on response."
    },
    {
      id: 39,
      question: "What is symptom analysis?",
      options: [
        "Exploring location, quality, intensity, timing",
        "Only counting symptoms",
        "Just naming complaints",
        "Diagnosing diseases"
      ],
      correctAnswer: 0,
      explanation: "Symptom analysis systematically explores characteristics of each complaint."
    },
    {
      id: 40,
      question: "What does bacopa enhance?",
      options: [
        "Memory and cognitive function",
        "Only physical strength",
        "Just digestive power",
        "Liver detoxification"
      ],
      correctAnswer: 0,
      explanation: "Bacopa is traditionally used for enhancing memory and cognitive function."
    }
  ]
};

export default herbalTherapyDiploma;
