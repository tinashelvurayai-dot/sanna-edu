// Optometry (Diploma) Course Data
export const optometryDiplomaCourse = {
  // Course Metadata
  id: "optometry-diploma",
  title: "Optometry (Diploma)",
  description: "Advanced clinical optometry training covering comprehensive eye examinations, disease diagnosis, contact lens fitting, and vision therapy techniques.",
  duration: "12 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  upgradePrice: null, // Already a diploma
  icon: "👁️",
  badge: "Diploma",
  prerequisite: "Optometry Basics Certificate recommended",
  
  // Module Structure (6 Modules + Final Exam)
  modules: [
    {
      id: 1,
      title: "Comprehensive Eye Examination Fundamentals",
      content: `# Module 1: Comprehensive Eye Examination Fundamentals

## Introduction to Clinical Optometry
Welcome to advanced optometry training. This module establishes the foundation for professional eye care practice by teaching systematic examination protocols and patient assessment techniques.

### Visual Acuity Assessment
**Visual acuity** measures how clearly a person sees. We use standardized charts like Snellen and LogMAR. Each eye is tested separately then together. Record findings as fractions: 20/20 means seeing at 20 feet what should be seen at that distance.

**Refraction techniques** determine corrective lens prescriptions. We perform retinoscopy to estimate refractive error, then refine with subjective refraction using a phoropter. The endpoint is maximum plus for best visual acuity.

**Binocular vision assessment** evaluates how both eyes work together. We test stereopsis (depth perception), fusional vergence (eye alignment ability), and accommodation (focusing ability). Proper binocular function prevents eye strain and headaches.

### Ocular Health Evaluation
**Slit lamp biomicroscopy** examines anterior eye structures. We systematically examine eyelids, conjunctiva, cornea, anterior chamber, iris, and lens. Look for abnormalities like cataracts, corneal scars, or inflammation signs.

**Intraocular pressure measurement** screens for glaucoma risk. We use tonometry methods: Goldmann applanation (gold standard) or non-contact tonometry. Normal range is 10-21 mmHg, but varies throughout the day.

**Pupil examination** assesses neurological function. We test pupil size, shape, and reaction to light and accommodation. Anisocoria (unequal pupils) or abnormal reactions may indicate neurological issues.

### Diagnostic Testing Fundamentals
**Visual field testing** maps peripheral vision. We perform confrontation testing (bedside screening) and automated perimetry (detailed mapping). Field defects help diagnose glaucoma, strokes, or retinal conditions.

**Color vision testing** identifies color deficiencies. We use Ishihara plates (most common) or Farnsworth tests. Most color deficiencies are inherited and affect red-green discrimination more than blue-yellow.

**Contrast sensitivity** measures ability to distinguish objects from backgrounds. We use Pelli-Robson charts or sine-wave gratings. Reduced contrast sensitivity affects night driving and low-light activities despite normal visual acuity.

### Special Populations Examination
**Pediatric optometry** requires adapted techniques. We use picture charts, preferential looking tests, and retinoscopy with cycloplegia. Early detection of amblyopia (lazy eye) is crucial before age 7-8.

**Geriatric patients** need comprehensive evaluation. Age-related changes include presbyopia (near vision loss), reduced pupil size, and increased cataract risk. We assess functional vision for daily activities.

**Low vision assessment** helps patients with significant vision loss. We evaluate remaining vision, prescribe magnifiers and aids, and provide rehabilitation strategies to maximize visual function.

### Documentation and Communication
**SOAP note format** structures clinical findings: Subjective (patient complaints), Objective (examination results), Assessment (diagnosis), Plan (treatment). Clear documentation ensures continuity of care.

**Patient education** is essential for compliance. Explain findings in simple terms, demonstrate proper eyewear care, and discuss treatment rationale. Good communication builds trust and improves outcomes.

**Referral criteria** guide when to consult specialists. Immediate referrals for retinal detachment, acute glaucoma, or neurological signs. Routine referrals for cataract surgery or complex contact lens fittings.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does 20/20 visual acuity mean?",
          options: [
            "Seeing at 20 feet what should normally be seen at 20 feet",
            "Perfect vision at all distances",
            "Requiring glasses for distance vision",
            "Only 20% of normal vision"
          ],
          correctAnswer: 0,
          explanation: "20/20 means you see clearly at 20 feet what should normally be seen at that distance. It's a standard measurement, not 'perfect' vision."
        },
        {
          id: 2,
          question: "Which tonometry method is considered the gold standard?",
          options: [
            "Goldmann applanation tonometry",
            "Non-contact tonometry",
            "Digital tonometry",
            "Schiotz tonometry"
          ],
          correctAnswer: 0,
          explanation: "Goldmann applanation tonometry is considered the gold standard for measuring intraocular pressure due to its accuracy and reliability."
        },
        {
          id: 3,
          question: "What age is crucial for detecting and treating amblyopia?",
          options: [
            "Before age 7-8 years",
            "Before age 12 years",
            "After age 15 years",
            "At any age equally"
          ],
          correctAnswer: 0,
          explanation: "Amblyopia (lazy eye) must be detected and treated before age 7-8 when the visual system is still developing and more responsive to treatment."
        },
        {
          id: 4,
          question: "What does the 'S' in SOAP notes stand for?",
          options: [
            "Subjective",
            "Symptomatic",
            "Structural",
            "Surgical"
          ],
          correctAnswer: 0,
          explanation: "In SOAP notes, 'S' stands for Subjective, which includes the patient's complaints and symptoms in their own words."
        },
        {
          id: 5,
          question: "Which test is most commonly used for color vision screening?",
          options: [
            "Ishihara plates",
            "Farnsworth test",
            "Color naming test",
            "Anomaloscope"
          ],
          correctAnswer: 0,
          explanation: "Ishihara plates are the most commonly used test for color vision screening, particularly for red-green color deficiencies."
        },
        {
          id: 6,
          question: "What is the normal range for intraocular pressure?",
          options: [
            "10-21 mmHg",
            "5-15 mmHg",
            "20-30 mmHg",
            "30-40 mmHg"
          ],
          correctAnswer: 0,
          explanation: "Normal intraocular pressure typically ranges from 10-21 mmHg, though this can vary throughout the day and between individuals."
        },
        {
          id: 7,
          question: "What does binocular vision assessment evaluate?",
          options: [
            "How both eyes work together",
            "Color perception only",
            "Single eye visual acuity",
            "Night vision capability"
          ],
          correctAnswer: 0,
          explanation: "Binocular vision assessment evaluates how both eyes work together, including stereopsis, fusional vergence, and accommodation."
        },
        {
          id: 8,
          question: "Which population requires adapted examination techniques like picture charts?",
          options: [
            "Pediatric patients",
            "Geriatric patients",
            "Athletes",
            "All patients equally"
          ],
          correctAnswer: 0,
          explanation: "Pediatric patients require adapted techniques like picture charts, preferential looking tests, and cycloplegic retinoscopy for accurate assessment."
        },
        {
          id: 9,
          question: "What does contrast sensitivity affect most significantly?",
          options: [
            "Night driving and low-light activities",
            "Color perception",
            "Reading small print only",
            "Distance vision clarity"
          ],
          correctAnswer: 0,
          explanation: "Reduced contrast sensitivity most significantly affects night driving and activities in low-light conditions, even with normal visual acuity."
        },
        {
          id: 10,
          question: "What is presbyopia?",
          options: [
            "Age-related loss of near focusing ability",
            "Inflammation of the eye",
            "Increased nearsightedness",
            "Color blindness"
          ],
          correctAnswer: 0,
          explanation: "Presbyopia is the age-related loss of near focusing ability that typically begins around age 40 and requires reading glasses or bifocals."
        },
        {
          id: 11,
          question: "What instrument is used for detailed visual field testing?",
          options: [
            "Automated perimeter",
            "Slit lamp",
            "Retinoscope",
            "Phoropter"
          ],
          correctAnswer: 0,
          explanation: "An automated perimeter is used for detailed visual field testing to map peripheral vision and detect defects."
        },
        {
          id: 12,
          question: "What does anisocoria indicate?",
          options: [
            "Unequal pupil sizes",
            "Equal pupil sizes",
            "Pupil reaction to light",
            "Normal pupil function"
          ],
          correctAnswer: 0,
          explanation: "Anisocoria refers to unequal pupil sizes and may indicate neurological issues or other underlying conditions requiring investigation."
        },
        {
          id: 13,
          question: "Which part of the eye does slit lamp biomicroscopy primarily examine?",
          options: [
            "Anterior eye structures",
            "Retina only",
            "Optic nerve head",
            "Visual cortex"
          ],
          correctAnswer: 0,
          explanation: "Slit lamp biomicroscopy primarily examines anterior eye structures including eyelids, cornea, iris, lens, and anterior chamber."
        },
        {
          id: 14,
          question: "What is the purpose of low vision assessment?",
          options: [
            "Maximize remaining visual function",
            "Cure complete blindness",
            "Replace all eyeglasses",
            "Test color vision only"
          ],
          correctAnswer: 0,
          explanation: "Low vision assessment aims to maximize remaining visual function through aids, magnifiers, and rehabilitation strategies."
        },
        {
          id: 15,
          question: "What does subjective refraction determine?",
          options: [
            "Corrective lens prescription",
            "Eye disease diagnosis",
            "Surgical requirements",
            "Medication dosage"
          ],
          correctAnswer: 0,
          explanation: "Subjective refraction, performed with a phoropter, determines the precise corrective lens prescription for optimal visual acuity."
        },
        {
          id: 16,
          question: "When should immediate referral to a specialist occur?",
          options: [
            "Suspected retinal detachment",
            "Mild dry eyes",
            "Simple nearsightedness",
            "Normal age-related changes"
          ],
          correctAnswer: 0,
          explanation: "Immediate referral is needed for serious conditions like suspected retinal detachment, acute glaucoma, or neurological signs."
        },
        {
          id: 17,
          question: "What does fusional vergence assess?",
          options: [
            "Eye alignment ability",
            "Color perception",
            "Light sensitivity",
            "Tear production"
          ],
          correctAnswer: 0,
          explanation: "Fusional vergence assesses the eyes' ability to align and maintain single binocular vision when focusing on objects."
        },
        {
          id: 18,
          question: "Which chart measures contrast sensitivity?",
          options: [
            "Pelli-Robson chart",
            "Snellen chart",
            "Ishihara plates",
            "Amsler grid"
          ],
          correctAnswer: 0,
          explanation: "The Pelli-Robson chart is specifically designed to measure contrast sensitivity at different contrast levels."
        },
        {
          id: 19,
          question: "What does retinoscopy estimate?",
          options: [
            "Refractive error",
            "Eye pressure",
            "Color deficiency",
            "Visual field defects"
          ],
          correctAnswer: 0,
          explanation: "Retinoscopy is an objective technique that estimates refractive error by observing light reflexes in the pupil."
        },
        {
          id: 20,
          question: "Why is patient education important in optometry?",
          options: [
            "Improves treatment compliance",
            "Reduces appointment time",
            "Eliminates need for follow-up",
            "Replaces clinical testing"
          ],
          correctAnswer: 0,
          explanation: "Patient education improves treatment compliance, helps patients understand their condition, and builds trust in the practitioner."
        }
      ]
    },
    {
      id: 2,
      title: "Ocular Disease Diagnosis and Management",
      content: `# Module 2: Ocular Disease Diagnosis and Management

## Introduction to Ocular Pathology
This module covers common eye diseases, their clinical presentation, diagnostic criteria, and management strategies. Learn to recognize signs requiring immediate intervention versus those needing monitoring.

### Anterior Segment Diseases
**Cataracts** are lens opacities causing blurred vision. Symptoms include glare, faded colors, and reduced night vision. We grade cataracts by type (nuclear, cortical, posterior subcapsular) and density. Surgical removal with intraocular lens implantation is the only effective treatment.

**Conjunctivitis** involves pink eye inflammation. Viral conjunctivitis shows watery discharge and preauricular lymph nodes. Bacterial conjunctivitis has purulent discharge. Allergic conjunctivitis presents with itching and chemosis. Treatment depends on etiology: antibiotics for bacterial, antihistamines for allergic.

**Corneal disorders** include abrasions, ulcers, and dystrophies. Corneal abrasions cause acute pain, photophobia, and tearing. We stain with fluorescein to visualize defects. Treatment includes antibiotic ointment and patching. Corneal ulcers require culturing and aggressive antibiotic therapy.

### Glaucoma Spectrum
**Primary open-angle glaucoma** is chronic, asymptomatic until late stages. Features include elevated intraocular pressure, optic nerve cupping, and visual field loss. We monitor with serial fields and optic nerve imaging. Treatment starts with prostaglandin analogs to reduce aqueous production.

**Angle-closure glaucoma** is an ocular emergency. Symptoms include severe pain, blurred vision, halos, nausea, and vomiting. The anterior chamber is shallow with mid-dilated pupil. Immediate treatment includes medications to lower pressure followed by laser iridotomy.

**Normal-tension glaucoma** occurs with normal intraocular pressure. Diagnosis requires characteristic optic nerve damage and field loss. We consider vascular factors and may aim for even lower pressure targets. Treatment similar to open-angle glaucoma but more monitoring.

### Retinal and Macular Disorders
**Age-related macular degeneration** (AMD) affects central vision. Dry AMD shows drusen and pigment changes. Wet AMD features choroidal neovascularization with hemorrhage. We use Amsler grid for monitoring and OCT for diagnosis. Treatment includes AREDS supplements for dry, anti-VEGF injections for wet.

**Diabetic retinopathy** results from chronic hyperglycemia. Non-proliferative stage shows microaneurysms, hemorrhages, exudates. Proliferative stage has new blood vessels causing vitreous hemorrhage. Regular screening is crucial. Treatment includes laser photocoagulation and glycemic control.

**Retinal detachment** is vision-threatening. Symptoms include floaters, flashes, and curtain-like vision loss. Types include rhegmatogenous (hole-related), tractional, and exudative. Immediate referral for surgical repair (scleral buckle, vitrectomy) is essential.

### Neuro-ophthalmic Conditions
**Optic neuritis** is optic nerve inflammation. Presents with pain on eye movement and rapid vision loss. Associated with multiple sclerosis. We check for afferent pupillary defect and may perform MRI. Treatment includes corticosteroids to hasten recovery.

**Visual field defects** localize lesions. Homonymous hemianopia suggests post-chiasmal lesion. Bitemporal hemianopia indicates chiasmal compression (like pituitary tumor). Altitudinal defects suggest ischemic optic neuropathy.

**Cranial nerve palsies** affect eye movements. Third nerve palsy causes ptosis, dilated pupil, and eye deviation. Fourth nerve palsy shows vertical diplopia and head tilt. Sixth nerve palsy causes horizontal diplopia with esotropia.

### Inflammatory and Autoimmune Conditions
**Uveitis** is intraocular inflammation. Anterior uveitis (iritis) shows cells and flare in anterior chamber. Intermediate uveitis has vitritis. Posterior uveitis affects retina/choroid. Panuveitis involves all layers. Treatment includes corticosteroids and immunosuppressants.

**Thyroid eye disease** affects Graves' patients. Features include lid retraction, proptosis, restrictive strabismus, and optic nerve compression. We monitor with clinical activity score and orbital imaging. Treatment includes selenium supplements, steroids, or decompression surgery.

**Sjögren's syndrome** causes dry eye and dry mouth. We perform Schirmer test for tear production and stain cornea for epithelial damage. Treatment includes artificial tears, punctal plugs, and systemic immunomodulators.

### Trauma and Emergencies
**Chemical burns** require immediate irrigation. Alkali burns (lye, cement) penetrate deeply and are more severe than acid burns. Irrigate with saline for 30+ minutes, then assess damage. Refer for severe burns affecting limbal stem cells.

**Penetrating injuries** risk endophthalmitis. Never remove embedded objects. Shield the eye and refer immediately. Prophylactic antibiotics and tetanus shot are essential. Surgical repair may involve vitrectomy.

**Orbital fractures** often involve floor or medial wall. Signs include diplopia, enophthalmos, and infraorbital numbness. CT scan confirms diagnosis. Surgical repair if significant enophthalmos or persistent diplomia.

### Systemic Disease Manifestations
**Hypertensive retinopathy** shows arteriolar narrowing, AV nicking, hemorrhages, exudates, and disc edema. Grading correlates with systemic vascular risk. Management focuses on blood pressure control.

**HIV-related eye disease** includes CMV retinitis (pizza-pie appearance), retinal hemorrhages, and cotton wool spots. Regular screening for patients with low CD4 counts. Treatment with antiviral medications.

**Medication effects** on eyes: corticosteroids cause cataracts and glaucoma, hydroxychloroquine causes macular toxicity, amiodarone causes corneal verticillata, ethambutol causes optic neuritis. Regular monitoring required.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the only effective treatment for cataracts?",
          options: [
            "Surgical removal with lens implantation",
            "Eye drops to dissolve cataracts",
            "Laser treatment without surgery",
            "Special glasses only"
          ],
          correctAnswer: 0,
          explanation: "Surgical removal of the cloudy lens with intraocular lens implantation is the only effective treatment for cataracts; no eye drops can reverse them."
        },
        {
          id: 2,
          question: "Which type of conjunctivitis shows preauricular lymph nodes?",
          options: [
            "Viral conjunctivitis",
            "Bacterial conjunctivitis",
            "Allergic conjunctivitis",
            "All types equally"
          ],
          correctAnswer: 0,
          explanation: "Viral conjunctivitis often presents with preauricular lymph nodes (in front of ears), along with watery discharge and redness."
        },
        {
          id: 3,
          question: "What characterizes primary open-angle glaucoma?",
          options: [
            "Chronic and asymptomatic until late",
            "Acute pain and redness",
            "Sudden complete vision loss",
            "Only affects children"
          ],
          correctAnswer: 0,
          explanation: "Primary open-angle glaucoma is chronic and often asymptomatic until significant optic nerve damage and visual field loss have occurred."
        },
        {
          id: 4,
          question: "What is an ocular emergency requiring immediate treatment?",
          options: [
            "Angle-closure glaucoma",
            "Mild dry eye",
            "Simple myopia",
            "Age-related presbyopia"
          ],
          correctAnswer: 0,
          explanation: "Angle-closure glaucoma is an ocular emergency characterized by severe pain, blurred vision, halos, nausea, and requires immediate pressure-lowering treatment."
        },
        {
          id: 5,
          question: "What does wet AMD feature that dry AMD does not?",
          options: [
            "Choroidal neovascularization",
            "Drusen accumulation",
            "Pigment changes",
            "Slow progression"
          ],
          correctAnswer: 0,
          explanation: "Wet (neovascular) AMD features choroidal neovascularization (abnormal blood vessels) that can leak and hemorrhage, unlike dry AMD which has drusen and geographic atrophy."
        },
        {
          id: 6,
          question: "What are symptoms of retinal detachment?",
          options: [
            "Floaters, flashes, curtain-like vision loss",
            "Gradual blurry vision only",
            "Eye pain and redness",
            "Color vision changes only"
          ],
          correctAnswer: 0,
          explanation: "Retinal detachment typically presents with sudden onset of floaters, flashes of light, and a curtain-like shadow or vision loss in the peripheral field."
        },
        {
          id: 7,
          question: "What is optic neuritis often associated with?",
          options: [
            "Multiple sclerosis",
            "Diabetes only",
            "Hypertension",
            "Thyroid disease"
          ],
          correctAnswer: 0,
          explanation: "Optic neuritis (optic nerve inflammation) is strongly associated with multiple sclerosis and may be the first presenting symptom."
        },
        {
          id: 8,
          question: "What does bitemporal hemianopia suggest?",
          options: [
            "Chiasmal compression",
            "Retinal detachment",
            "Cataract formation",
            "Corneal scarring"
          ],
          correctAnswer: 0,
          explanation: "Bitemporal hemianopia (loss of both temporal visual fields) suggests compression at the optic chiasm, often from pituitary tumors."
        },
        {
          id: 9,
          question: "What does anterior uveitis primarily affect?",
          options: [
            "Iris and anterior chamber",
            "Retina only",
            "Optic nerve",
            "Cornea surface"
          ],
          correctAnswer: 0,
          explanation: "Anterior uveitis (iritis) primarily affects the iris and anterior chamber, showing cells and flare when examined with slit lamp."
        },
        {
          id: 10,
          question: "What is a key feature of thyroid eye disease?",
          options: [
            "Lid retraction and proptosis",
            "Cataract formation",
            "Retinal detachment",
            "Corneal ulcers"
          ],
          correctAnswer: 0,
          explanation: "Thyroid eye disease typically presents with lid retraction (staring appearance), proptosis (bulging eyes), and restrictive strabismus."
        },
        {
          id: 11,
          question: "Which chemical burns penetrate more deeply?",
          options: [
            "Alkali burns",
            "Acid burns",
            "Both equally",
            "Neither penetrate"
          ],
          correctAnswer: 0,
          explanation: "Alkali burns (from substances like lye, lime, cement) penetrate more deeply into ocular tissues and cause more severe damage than acid burns."
        },
        {
          id: 12,
          question: "What should you never do with a penetrating eye injury?",
          options: [
            "Remove embedded objects",
            "Apply a shield",
            "Refer to specialist",
            "Check vision"
          ],
          correctAnswer: 0,
          explanation: "Never remove embedded objects from a penetrating eye injury as this may cause further damage; shield the eye and refer immediately."
        },
        {
          id: 13,
          question: "What shows arteriolar narrowing and AV nicking?",
          options: [
            "Hypertensive retinopathy",
            "Diabetic retinopathy",
            "Macular degeneration",
            "Glaucoma"
          ],
          correctAnswer: 0,
          explanation: "Arteriolar narrowing and AV (arteriovenous) nicking are characteristic signs of hypertensive retinopathy indicating chronic high blood pressure."
        },
        {
          id: 14,
          question: "What medication can cause corneal verticillata?",
          options: [
            "Amiodarone",
            "Aspirin",
            "Antibiotics",
            "Antihistamines"
          ],
          correctAnswer: 0,
          explanation: "Amiodarone, a cardiac medication, can cause corneal verticillata (whorl-like epithelial deposits) that are usually visually insignificant."
        },
        {
          id: 15,
          question: "What does the proliferative stage of diabetic retinopathy feature?",
          options: [
            "New blood vessel formation",
            "Only microaneurysms",
            "Macular edema",
            "Optic nerve cupping"
          ],
          correctAnswer: 0,
          explanation: "Proliferative diabetic retinopathy features neovascularization (new abnormal blood vessels) that can bleed and cause vitreous hemorrhage."
        },
        {
          id: 16,
          question: "What test helps monitor macular degeneration?",
          options: [
            "Amsler grid",
            "Color vision test",
            "Tonometry",
            "Retinoscopy"
          ],
          correctAnswer: 0,
          explanation: "The Amsler grid helps patients monitor for metamorphopsia (distorted lines) which may indicate progression of macular degeneration."
        },
        {
          id: 17,
          question: "What does third nerve palsy cause?",
          options: [
            "Ptosis, dilated pupil, eye deviation",
            "Only horizontal diplopia",
            "Vertical diplopia with head tilt",
            "Painless vision loss"
          ],
          correctAnswer: 0,
          explanation: "Third cranial nerve palsy causes ptosis (droopy lid), dilated pupil, and eye turned down and out due to affected extraocular muscles."
        },
        {
          id: 18,
          question: "What is the first-line treatment for uveitis?",
          options: [
            "Corticosteroids",
            "Antibiotics",
            "Antivirals",
            "Surgery"
          ],
          correctAnswer: 0,
          explanation: "Corticosteroids are first-line treatment for uveitis to reduce inflammation, administered as drops, injections, or systemically depending on severity."
        },
        {
          id: 19,
          question: "What orbital fracture often causes infraorbital numbness?",
          options: [
            "Orbital floor fracture",
            "Medial wall fracture",
            "Roof fracture",
            "Lateral wall fracture"
          ],
          correctAnswer: 0,
          explanation: "Orbital floor fractures often cause infraorbital numbness due to damage to the infraorbital nerve that runs along the orbital floor."
        },
        {
          id: 20,
          question: "What medication requires regular retinal screening for toxicity?",
          options: [
            "Hydroxychloroquine",
            "Blood pressure medications",
            "Cholesterol drugs",
            "Pain relievers"
          ],
          correctAnswer: 0,
          explanation: "Hydroxychloroquine (Plaquenil) requires regular retinal screening as it can cause irreversible macular toxicity with prolonged use."
        }
      ]
    },
    {
      id: 3,
      title: "Contact Lens Theory and Practice",
      content: `# Module 3: Contact Lens Theory and Practice

## Introduction to Contact Lenses
This module covers comprehensive contact lens fitting, from basic soft lenses to complex specialty designs. Learn to match lens parameters to ocular anatomy and patient needs while maintaining ocular health.

### Contact Lens Materials and Design
**Soft contact lenses** are hydrogel or silicone hydrogel. Hydrogel lenses have high water content but lower oxygen permeability. Silicone hydrogel allows more oxygen transmission, reducing hypoxia risks. We consider Dk/t (oxygen transmissibility) when selecting materials.

**Rigid gas permeable (RGP) lenses** provide crisp vision and durability. They're ideal for irregular corneas (keratoconus, scarring) and high astigmatism. RGP lenses require adaptation period but offer better oxygen flow than soft lenses.

**Specialty designs** include toric (astigmatism correction), multifocal (presbyopia correction), and scleral lenses (for severe dry eye or irregular corneas). Each requires specific fitting techniques and parameter measurements.

### Fitting Assessment and Measurements
**Corneal topography** maps corneal curvature. We measure flat (K1) and steep (K2) meridians in diopters. The difference indicates corneal astigmatism. Topography detects irregular patterns like keratoconus (steepening, inferior thinning).

**Tear film evaluation** assesses dry eye risk. We perform tear breakup time (TBUT) - normal is >10 seconds. Schirmer test measures tear production. Meibomian gland evaluation checks oil layer quality. Poor tear film may contraindicate contact lenses.

**Lens parameter selection** considers base curve (matches corneal curvature), diameter (covers cornea adequately), and power (corrects refractive error). We aim for optimal centration, movement, and comfort.

### Soft Lens Fitting Protocol
**Diagnostic fitting** uses trial lenses. We assess centration - lens should center over cornea with 1-2mm movement on blink. Edge lift should be even. Rotation of toric lenses should be minimal (<10°).

**Comfort assessment** evaluates initial and end-of-day comfort. Discomfort may indicate poor fit, material incompatibility, or dry eye. We ask patients to rate comfort on scale 1-10 at fitting and after several hours.

**Vision quality verification** checks acuity with over-refraction. Residual astigmatism may need toric lens. Fluctuating vision suggests dry eye or fit issues. We aim for 20/20 or best-correctable vision.

### RGP Lens Fitting Techniques
**Initial fitting** selects trial lens based on corneal curvature. We aim for alignment fit (even touch) or slight apical clearance. Fluorescein pattern assessment shows bearing (touch) areas and clearance zones under blue light.

**Fluorescein pattern interpretation**: Ideal shows light touch centrally, mild pooling peripherally. Flat fit shows central pooling (excess clearance). Steep fit shows central bearing (excess touch). Adjust base curve accordingly.

**Adaptation management** prepares patients for initial discomfort. We recommend gradual wearing schedule: 4 hours first day, increasing by 2 hours daily. Provide lubricating drops for initial dryness and awareness.

### Specialty Lens Applications
**Keratoconus management** uses specialty lenses. Mild cases may use soft toric lenses. Moderate cases need RGP or hybrid lenses. Severe cases require scleral or piggyback systems (soft lens under RGP).

**Scleral lenses** vault over cornea, resting on sclera. They create fluid reservoir that bathes cornea, ideal for severe dry eye, ocular surface disease, or post-surgical corneas. Fitting requires measuring sagittal height.

**Multifocal contact lenses** address presbyopia. Designs include concentric rings, aspheric curves, or segmented bifocals. We fit for distance dominance or near dominance based on patient's visual needs.

### Contact Lens Complications
**Corneal hypoxia** results from insufficient oxygen. Signs include corneal edema (stromal haze), neovascularization (vessel growth into cornea), and endothelial polymegathism. Prevention: high Dk/t materials, limited wear time.

**Infectious keratitis** is serious infection. Risk factors include overnight wear, poor hygiene, water exposure. Symptoms: pain, redness, discharge, infiltrate. Immediate discontinuation and referral for cultures/antibiotics.

**Contact lens-induced dry eye** involves tear film instability. Symptoms: dryness, fluctuating vision, discomfort. Management: shorter wear time, lubricating drops, silicone hydrogel materials, or daily disposables.

### Lens Care and Maintenance
**Disinfection systems** include multipurpose solutions (all-in-one), hydrogen peroxide systems (requires neutralization), and daily cleaners with rinse. We recommend systems based on lens material and patient compliance.

**Cleaning techniques** involve rubbing lenses (removes deposits) even with "no-rub" solutions. Protein removers weekly for extended wear lenses. Proper case cleaning prevents contamination (replace cases monthly).

**Replacement schedules** vary: daily disposable (safest), two-week, monthly, or quarterly. Shorter replacement reduces deposit accumulation and infection risk. Never exceed recommended wearing schedule.

### Patient Education and Compliance
**Insertion/removal training** uses mirrors initially. Teach hand washing, lens inspection for damage, and proper application. Demonstrate removal techniques: pinching soft lenses, using plunger for RGPs.

**Wear schedule guidelines**: Start with 6-8 hours daily, increase gradually. Never sleep in lenses unless approved for extended wear. Give eyes "lens-free" days weekly to maintain corneal health.

**Problem recognition**: Teach patients to recognize redness, pain, discharge, blurred vision as warning signs. Provide emergency instructions: remove lens immediately, call office if symptoms persist.

### Advanced Fitting Considerations
**Pediatric contact lenses** for aphakia (congenital cataract removal) or myopia control. Requires parental involvement in insertion/removal. Consider daily disposables for hygiene. Monitor closely for compliance.

**Therapeutic lenses** treat ocular surface diseases. Bandage soft lenses protect corneas after surgery or with persistent epithelial defects. Scleral lenses for severe dry eye syndromes. Requires medical supervision.

**Cosmetic and prosthetic lenses** change eye appearance or mask disfigurement. Requires careful fitting and patient counseling about realistic expectations. Special tinting for light sensitivity or albinism.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "Which contact lens material provides higher oxygen permeability?",
          options: [
            "Silicone hydrogel",
            "Regular hydrogel",
            "PMMA hard lenses",
            "Glass lenses"
          ],
          correctAnswer: 0,
          explanation: "Silicone hydrogel contact lenses provide significantly higher oxygen permeability (Dk/t) than regular hydrogel lenses, reducing hypoxia risks."
        },
        {
          id: 2,
          question: "What are RGP lenses particularly good for correcting?",
          options: [
            "Irregular corneas and high astigmatism",
            "Only simple nearsightedness",
            "Color blindness",
            "Cataracts"
          ],
          correctAnswer: 0,
          explanation: "Rigid Gas Permeable (RGP) lenses provide crisp vision and are excellent for irregular corneas (keratoconus) and high astigmatism due to their stable shape."
        },
        {
          id: 3,
          question: "What does corneal topography measure?",
          options: [
            "Corneal curvature and shape",
            "Eye pressure only",
            "Tear production",
            "Retinal thickness"
          ],
          correctAnswer: 0,
          explanation: "Corneal topography maps the curvature and shape of the cornea, showing flat and steep meridians and detecting irregularities like keratoconus."
        },
        {
          id: 4,
          question: "What is normal tear breakup time (TBUT)?",
          options: [
            "Greater than 10 seconds",
            "Less than 5 seconds",
            "Exactly 30 seconds",
            "Not important to measure"
          ],
          correctAnswer: 0,
          explanation: "Normal tear breakup time (TBUT) is greater than 10 seconds; shorter times indicate unstable tear film and potential dry eye issues."
        },
        {
          id: 5,
          question: "How much movement should a properly fitted soft contact lens have on blink?",
          options: [
            "1-2 millimeters",
            "No movement at all",
            "5-10 millimeters",
            "Complete dislocation"
          ],
          correctAnswer: 0,
          explanation: "A properly fitted soft contact lens should have 1-2 millimeters of movement with each blink to allow tear exchange and comfort."
        },
        {
          id: 6,
          question: "What does fluorescein pattern assessment evaluate in RGP fitting?",
          options: [
            "Lens-cornea relationship and fit",
            "Only lens power accuracy",
            "Patient comfort level",
            "Color vision"
          ],
          correctAnswer: 0,
          explanation: "Fluorescein pattern assessment with blue light shows the relationship between RGP lens and cornea, indicating bearing areas and clearance zones."
        },
        {
          id: 7,
          question: "What is the recommended initial wearing schedule for new RGP lens wearers?",
          options: [
            "4 hours first day, increasing gradually",
            "24 hours continuously",
            "Only 30 minutes daily",
            "No adaptation needed"
          ],
          correctAnswer: 0,
          explanation: "New RGP wearers should start with 4 hours on the first day, increasing by 2 hours daily to allow gradual adaptation to lens awareness."
        },
        {
          id: 8,
          question: "Which lens type creates a fluid reservoir over the cornea?",
          options: [
            "Scleral lenses",
            "Daily disposable soft lenses",
            "Standard RGP lenses",
            "Cosmetic tinted lenses"
          ],
          correctAnswer: 0,
          explanation: "Scleral lenses vault over the entire cornea and rest on the sclera, creating a fluid reservoir that bathes the cornea, ideal for severe dry eye."
        },
        {
          id: 9,
          question: "What is a sign of corneal hypoxia from contact lens wear?",
          options: [
            "Corneal neovascularization",
            "Improved vision",
            "Increased comfort",
            "Reduced blink rate"
          ],
          correctAnswer: 0,
          explanation: "Corneal neovascularization (growth of blood vessels into clear cornea) is a sign of chronic hypoxia from insufficient oxygen to the cornea."
        },
        {
          id: 10,
          question: "What is the safest contact lens replacement schedule?",
          options: [
            "Daily disposable",
            "Monthly replacement",
            "Yearly replacement",
            "When lenses feel uncomfortable"
          ],
          correctAnswer: 0,
          explanation: "Daily disposable lenses are considered safest as they eliminate lens care errors, reduce deposit buildup, and minimize infection risk."
        },
        {
          id: 11,
          question: "What should patients do if they experience pain or redness with contact lenses?",
          options: [
            "Remove lenses immediately and consult professional",
            "Use more lubricating drops only",
            "Continue wearing through discomfort",
            "Switch to different solution without removing"
          ],
          correctAnswer: 0,
          explanation: "Pain or redness are warning signs; patients should remove lenses immediately and consult an eye care professional if symptoms persist."
        },
        {
          id: 12,
          question: "What do multifocal contact lenses address?",
          options: [
            "Presbyopia (age-related near vision loss)",
            "Only distance vision",
            "Color deficiencies",
            "Eye coordination problems"
          ],
          correctAnswer: 0,
          explanation: "Multifocal contact lenses address presbyopia (age-related loss of near focusing ability) by providing multiple powers for different distances."
        },
        {
          id: 13,
          question: "What does Dk/t measure in contact lenses?",
          options: [
            "Oxygen transmissibility",
            "Lens thickness only",
            "Water content",
            "Ultraviolet protection"
          ],
          correctAnswer: 0,
          explanation: "Dk/t measures oxygen transmissibility - how well oxygen passes through the contact lens material to reach the cornea."
        },
        {
          id: 14,
          question: "What is keratoconus?",
          options: [
            "Corneal thinning and steepening",
            "Eye pressure elevation",
            "Retinal detachment",
            "Lens clouding"
          ],
          correctAnswer: 0,
          explanation: "Keratoconus is a condition where the cornea thins and steepens into a cone shape, causing irregular astigmatism that requires specialty contact lenses."
        },
        {
          id: 15,
          question: "How often should contact lens cases be replaced?",
          options: [
            "Monthly",
            "Yearly",
            "Never if cleaned properly",
            "Every 5 years"
          ],
          correctAnswer: 0,
          explanation: "Contact lens cases should be replaced monthly to prevent bacterial contamination, even with proper cleaning and disinfection."
        },
        {
          id: 16,
          question: "What is a 'bandage' contact lens used for?",
          options: [
            "Protecting corneal surface after injury/surgery",
            "Cosmetic appearance only",
            "Replacing glasses permanently",
            "Testing vision only"
          ],
          correctAnswer: 0,
          explanation: "Bandage contact lenses protect the corneal surface after surgery, injury, or with persistent epithelial defects, acting like a bandage for the eye."
        },
        {
          id: 17,
          question: "What does toric contact lens correct?",
          options: [
            "Astigmatism",
            "Presbyopia only",
            "Color blindness",
            "Eye muscle imbalance"
          ],
          correctAnswer: 0,
          explanation: "Toric contact lenses are specially designed to correct astigmatism, with different powers in different meridians to match corneal curvature."
        },
        {
          id: 18,
          question: "What is the main advantage of daily disposable lenses?",
          options: [
            "Reduced infection and complication risk",
            "Lower cost per year",
            "Less need for eye exams",
            "No prescription required"
          ],
          correctAnswer: 0,
          explanation: "Daily disposable lenses reduce infection and complication risks because patients use a fresh, sterile lens each day with no cleaning required."
        },
        {
          id: 19,
          question: "What should contact lens wearers do weekly for optimal eye health?",
          options: [
            "Have lens-free days",
            "Wear lenses longer each day",
            "Use stronger cleaning solutions",
            "Avoid all eye drops"
          ],
          correctAnswer: 0,
          explanation: "Contact lens wearers should have regular lens-free days (at least one day per week) to allow the cornea to recover and maintain ocular health."
        },
        {
          id: 20,
          question: "What is the first step before handling contact lenses?",
          options: [
            "Wash hands with soap and water",
            "Check lens expiration date",
            "Apply lubricating drops",
            "Clean the lens case"
          ],
          correctAnswer: 0,
          explanation: "The first and most important step before handling contact lenses is washing hands thoroughly with soap and water to prevent contamination."
        }
      ]
    },
    {
      id: 4,
      title: "Binocular Vision and Vision Therapy",
      content: `# Module 4: Binocular Vision and Vision Therapy

## Introduction to Binocular Vision
This module explores how both eyes work together to create single, three-dimensional vision. Learn to diagnose and treat binocular vision disorders that affect reading, learning, and daily activities.

### Binocular Vision Fundamentals
**Stereopsis** is depth perception from binocular disparity. Each eye sees slightly different images that the brain fuses into 3D perception. We measure stereopsis in seconds of arc - normal is 40-60 seconds. Tests include Titmus fly, Randot, or TNO.

**Fusion** is the brain's ability to combine images from both eyes. Motor fusion uses eye movements to align images. Sensory fusion blends images into single percept. We test fusion with Worth 4-dot test (red-green glasses) or Bagolini striated lenses.

**Vergence system** coordinates eye movements for different distances. Convergence moves eyes inward for near targets. Divergence moves eyes outward for distance. We measure vergence ranges with prism bars or rotary prisms.

### Accommodation Function
**Accommodation** is the eye's focusing ability. Amplitude of accommodation decreases with age: approximately 15D at age 10, 5D at age 40, 1D at age 60. We measure with push-up or minus lens technique.

**Accommodative facility** is focusing flexibility. Normal is 8-12 cycles per minute (alternating ±2.00D lenses). Reduced facility causes blurry vision when switching distances. We test with ±2.00 flippers.

**Accommodative disorders** include insufficiency (inadequate focusing), excess (over-focusing), and infacility (slow focusing changes). Symptoms include blurred vision, headaches, and reading avoidance.

### Vergence Disorders
**Convergence insufficiency** is common in children and adults. Features include exophoria at near, reduced convergence amplitudes, and high near point of convergence (>6cm). Symptoms: diplopia, headaches, eye strain with reading.

**Convergence excess** shows esophoria at near with normal distance alignment. Patients may have accommodative spasm. Treatment includes plus lenses for near and divergence exercises.

**Divergence disorders** affect distance vision. Divergence insufficiency causes esophoria at distance. Divergence excess causes exophoria at distance. Both can cause distance vision symptoms and fatigue.

### Strabismus Classification
**Tropias** are manifest misalignments (visible without cover test). Esotropia turns eye inward. Exotropia turns eye outward. Hypertropia turns eye upward. We measure deviation with prism and cover test.

**Phorias** are latent misalignments (only appear with dissociation). Orthophoria is perfect alignment. Esophoria latent inward turn. Exophoria latent outward turn. Compensated phorias cause no symptoms.

**Intermittent strabismus** alternates between aligned and misaligned states. Common in exotropia where deviation appears with fatigue, illness, or daydreaming. May progress to constant strabismus.

### Vision Therapy Principles
**Vision therapy** is structured visual training to improve function. Includes orthoptics (eye movement training), pleoptics (amblyopia treatment), and perceptual training. Usually involves weekly office sessions with home reinforcement.

**Syntonic phototherapy** uses colored light to affect visual processing. Different colors purportedly stimulate parasympathetic or sympathetic systems. Evidence is limited but some report reduced light sensitivity or improved function.

**Computer-based therapy** uses interactive programs to train accommodation, vergence, and tracking. Advantages: precise measurement, immediate feedback, game-like engagement. Used as supplement to traditional therapy.

### Specific Therapy Techniques
**Brock string** trains fixation and convergence. Patient focuses on beads at different distances while maintaining single vision. Develops awareness of eye alignment and depth perception.

**Hart chart** improves accommodation and saccades. Patient reads letters at distance then near, switching focus rapidly. Variations include distance-near Hart, flipper Hart, or tranaglyph Hart.

**Vectograms** or stereoscopes provide dissociated images for fusion training. Aperture rule, chiastopic fusion, or tranaglyphs develop fusional ranges. Progress from gross to fine stereopsis.

### Pediatric Vision Development
**Visual milestones**: Birth - light perception, 2 months - tracking, 6 months - binocularity develops, 1 year - depth perception, 3 years - 20/40 acuity, 5 years - adult-like acuity.

**Amblyopia** treatment critical period is before age 7-8. Patching better-seeing eye forces use of amblyopic eye. Optical penalization (atropine) is alternative. Treatment effectiveness decreases with age.

**Learning-related vision problems** affect reading. Tracking disorders cause loss of place. Convergence insufficiency causes double vision. Accommodative disorders cause blurry print. Comprehensive assessment includes developmental optometry tests.

### Sports Vision Enhancement
**Dynamic visual acuity** is seeing moving objects clearly. Training includes tracking balls, reaction lights, or moving targets. Important for ball sports like tennis or baseball.

**Eye-hand coordination** links visual input to motor response. Training: catching balls, juggling, or computer tasks. Improves performance in racquet sports, basketball, or martial arts.

**Peripheral awareness** expands useful field of view. Training: identifying objects while fixating centrally. Crucial for team sports where players must see teammates and opponents simultaneously.

### Low Vision Rehabilitation
**Magnification strategies** include handheld magnifiers, stand magnifiers, or electronic devices. We calculate required magnification: desired print size divided by current readable size.

**Eccentric viewing** teaches use of peripheral retina when central vision is lost (macular degeneration). Patients learn to look slightly away from target to use functioning retina.

**Contrast enhancement** improves visibility. Techniques: proper lighting, yellow filters reduce glare, bold-lined paper, high-contrast appliances. Simple changes significantly improve function.

### Neuro-optometric Rehabilitation
**Post-trauma vision syndrome** follows head injury. Symptoms: headaches, dizziness, light sensitivity, reading difficulties. Treatment includes prisms, filters, and vision therapy to reintegrate visual processing.

**Visual midline shift** occurs after stroke or trauma. Patient perceives world as tilted or shifted. Yoked prisms can recalibrate perception and improve balance and mobility.

**Hemianopic field loss** rehabilitation teaches scanning techniques. Patients learn systematic head turns to compensate for missing visual field. Prisms can expand awareness into blind field.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is stereopsis?",
          options: [
            "Depth perception from binocular vision",
            "Color perception ability",
            "Single eye visual acuity",
            "Peripheral vision range"
          ],
          correctAnswer: 0,
          explanation: "Stereopsis is three-dimensional depth perception that results from the brain combining slightly different images from each eye."
        },
        {
          id: 2,
          question: "What is normal stereopsis measurement in seconds of arc?",
          options: [
            "40-60 seconds of arc",
            "100-120 seconds of arc",
            "200-300 seconds of arc",
            "No standard measurement"
          ],
          correctAnswer: 0,
          explanation: "Normal stereopsis is typically 40-60 seconds of arc, with lower numbers indicating better depth perception (finer discrimination)."
        },
        {
          id: 3,
          question: "What does accommodation amplitude measure?",
          options: [
            "Eye's focusing ability range",
            "Pupil size changes",
            "Eye movement speed",
            "Color discrimination"
          ],
          correctAnswer: 0,
          explanation: "Accommodation amplitude measures the eye's total focusing ability range, typically decreasing predictably with age."
        },
        {
          id: 4,
          question: "What is convergence insufficiency characterized by?",
          options: [
            "Exophoria at near and reduced convergence",
            "Esophoria at distance only",
            "Perfect alignment at all distances",
            "Only affecting distance vision"
          ],
          correctAnswer: 0,
          explanation: "Convergence insufficiency typically shows exophoria (eyes tending outward) at near, reduced convergence ability, and near point of convergence greater than 6cm."
        },
        {
          id: 5,
          question: "What is the difference between tropia and phoria?",
          options: [
            "Tropia is manifest, phoria is latent",
            "Tropia affects near only, phoria distance only",
            "No difference - same condition",
            "Tropia is temporary, phoria permanent"
          ],
          correctAnswer: 0,
          explanation: "Tropia is a manifest eye misalignment (visible without testing), while phoria is a latent misalignment that only appears with dissociation (cover test)."
        },
        {
          id: 6,
          question: "What does vision therapy aim to improve?",
          options: [
            "Visual function and processing",
            "Only eye appearance",
            "Medication effectiveness",
            "Surgical outcomes only"
          ],
          correctAnswer: 0,
          explanation: "Vision therapy aims to improve visual function, processing, and efficiency through structured training exercises, often for binocular vision disorders."
        },
        {
          id: 7,
          question: "What does the Brock string train?",
          options: [
            "Fixation and convergence awareness",
            "Color vision only",
            "Distance visual acuity",
            "Pupil responses"
          ],
          correctAnswer: 0,
          explanation: "The Brock string trains fixation stability and convergence awareness as patients focus on beads at different distances while maintaining single vision."
        },
        {
          id: 8,
          question: "What is the critical period for amblyopia treatment?",
          options: [
            "Before age 7-8 years",
            "After age 15 years",
            "Only in infancy",
            "At any age equally effective"
          ],
          correctAnswer: 0,
          explanation: "Amblyopia treatment is most effective before age 7-8 when the visual system is still developing and more plastic (responsive to treatment)."
        },
        {
          id: 9,
          question: "What does dynamic visual acuity refer to?",
          options: [
            "Seeing moving objects clearly",
            "Static eye chart reading",
            "Color discrimination",
            "Peripheral vision only"
          ],
          correctAnswer: 0,
          explanation: "Dynamic visual acuity refers to the ability to see moving objects clearly, crucial for sports and daily activities like driving."
        },
        {
          id: 10,
          question: "What is eccentric viewing?",
          options: [
            "Using peripheral retina for central tasks",
            "Looking directly at objects",
            "Closing one eye to see better",
            "Using magnifiers only"
          ],
          correctAnswer: 0,
          explanation: "Eccentric viewing teaches patients with central vision loss (like macular degeneration) to use functioning peripheral retina by looking slightly away from targets."
        },
        {
          id: 11,
          question: "What does the Worth 4-dot test assess?",
          options: [
            "Fusion and suppression",
            "Only color vision",
            "Visual acuity",
            "Eye pressure"
          ],
          correctAnswer: 0,
          explanation: "The Worth 4-dot test with red-green glasses assesses fusion (how eyes work together) and detects suppression (one eye ignoring input)."
        },
        {
          id: 12,
          question: "What is normal accommodative facility?",
          options: [
            "8-12 cycles per minute",
            "20-30 cycles per minute",
            "1-2 cycles per minute",
            "Not measurable"
          ],
          correctAnswer: 0,
          explanation: "Normal accommodative facility (focusing flexibility) is 8-12 cycles per minute when alternating between +2.00 and -2.00 lenses."
        },
        {
          id: 13,
          question: "What is intermittent strabismus?",
          options: [
            "Alternating between aligned and misaligned",
            "Constant misalignment",
            "Only occurs during sleep",
            "Not a real condition"
          ],
          correctAnswer: 0,
          explanation: "Intermittent strabismus alternates between periods of good alignment and visible misalignment, often triggered by fatigue or illness."
        },
        {
          id: 14,
          question: "What does the Hart chart train?",
          options: [
            "Accommodation and saccades",
            "Color vision only",
            "Peripheral awareness",
            "Depth perception only"
          ],
          correctAnswer: 0,
          explanation: "The Hart chart trains accommodation (focusing) and saccades (jumping eye movements) as patients rapidly switch between distance and near tasks."
        },
        {
          id: 15,
          question: "What visual milestone typically develops by 6 months?",
          options: [
            "Binocularity begins",
            "20/20 visual acuity",
            "Complete color vision",
            "Reading ability"
          ],
          correctAnswer: 0,
          explanation: "Binocularity (the ability to use both eyes together) typically begins developing around 6 months of age."
        },
        {
          id: 16,
          question: "What is post-trauma vision syndrome?",
          options: [
            "Visual symptoms after head injury",
            "Normal aging vision changes",
            "Genetic eye conditions",
            "Only surgical complications"
          ],
          correctAnswer: 0,
          explanation: "Post-trauma vision syndrome includes various visual symptoms (headaches, dizziness, light sensitivity) that can occur after head injury or concussion."
        },
        {
          id: 17,
          question: "What is convergence?",
          options: [
            "Eyes turning inward for near vision",
            "Eyes turning outward for distance",
            "Upward eye movements",
            "Circular eye movements"
          ],
          correctAnswer: 0,
          explanation: "Convergence is the coordinated turning inward of both eyes to focus on near objects, essential for single, comfortable near vision."
        },
        {
          id: 18,
          question: "What does yoked prism therapy help with?",
          options: [
            "Visual midline shift after stroke",
            "Only cataracts",
            "Glaucoma treatment",
            "Color blindness"
          ],
          correctAnswer: 0,
          explanation: "Yoked prisms (same direction in both eyes) can help recalibrate visual perception in patients with midline shift after stroke or head trauma."
        },
        {
          id: 19,
          question: "What is the push-up test measuring?",
          options: [
            "Accommodation amplitude",
            "Convergence ability",
            "Pupil size",
            "Eye pressure"
          ],
          correctAnswer: 0,
          explanation: "The push-up test measures accommodation amplitude by bringing a target closer until it blurs, indicating the near focusing limit."
        },
        {
          id: 20,
          question: "What are vectograms used for in vision therapy?",
          options: [
            "Fusion and stereopsis training",
            "Only color vision testing",
            "Measuring eye pressure",
            "Testing visual acuity"
          ],
          correctAnswer: 0,
          explanation: "Vectograms provide dissociated images for fusion training, helping patients develop and expand their ability to fuse images from both eyes."
        }
      ]
    },
    {
      id: 5,
      title: "Ocular Pharmacology and Therapeutics",
      content: `# Module 5: Ocular Pharmacology and Therapeutics

## Introduction to Ocular Medications
This module covers pharmacological principles specific to eye care, from topical drops to systemic medications with ocular effects. Learn prescribing guidelines, side effect recognition, and therapeutic applications.

### Pharmacokinetics in the Eye
**Topical absorption** involves corneal penetration. Drugs must be lipid-soluble to cross epithelium, water-soluble to cross stroma. Preservatives like benzalkonium chloride enhance penetration but may cause toxicity with chronic use.

**Ocular bioavailability** is typically 1-10% of topical dose. Most medication drains via nasolacrimal system or spills from eye. Punctal occlusion (pressing inner corner) increases absorption 2-3 fold by reducing drainage.

**Drug delivery systems** include solutions (quick absorption), suspensions (longer contact time), ointments (sustained release), gels (intermediate duration), and inserts (controlled release over days).

### Anti-infective Agents
**Antibiotics** cover bacterial infections. Fluoroquinolones (moxifloxacin, gatifloxacin) broad spectrum. Aminoglycosides (tobramycin) good for gram-negative. Bacitracin/polymyxin combinations cover common pathogens.

**Antivirals** treat herpes infections. Acyclovir, ganciclovir, trifluridine inhibit viral replication. Used for herpes simplex keratitis or zoster ophthalmicus. May require oral supplementation for severe cases.

**Antifungals** for rare but serious fungal keratitis. Natamycin is only topical antifungal. Amphotericin B can be compounded. Voriconazole available orally or compounded. Require long treatment courses (weeks to months).

### Anti-inflammatory Medications
**Corticosteroids** are potent anti-inflammatories. Prednisolone acetate (suspension) has best corneal penetration. Dexamethasone (solution) less penetration. Loteprednol has fewer side effects. Risk: elevated IOP, cataracts, infection.

**NSAIDs** (non-steroidal anti-inflammatory) reduce pain and inflammation without steroid side effects. Ketorolac, bromfenac, nepafenac. Used for post-surgical inflammation, allergic conjunctivitis, cystoid macular edema prophylaxis.

**Immunosuppressants** for chronic inflammation. Cyclosporine, tacrolimus (calcineurin inhibitors) for dry eye. Methotrexate, mycophenolate for uveitis. Require monitoring for systemic side effects.

### Glaucoma Medications
**Prostaglandin analogs** are first-line: latanoprost, bimatoprost, travoprost. Increase uveoscleral outflow. Once daily dosing. Side effects: iris color darkening, eyelash growth, orbital fat atrophy.

**Beta-blockers**: timolol, betaxolol. Reduce aqueous production. Twice daily. Contraindicated in asthma, heart failure. Betaxolol is cardioselective, safer for respiratory patients.

**Alpha-agonists**: brimonidine. Reduces production and increases outflow. Three times daily. Side effects: allergy, dry mouth, fatigue. Avoid in infants (CNS depression risk).

**Carbonic anhydrase inhibitors**: dorzolamide, brinzolamide. Reduce production. Used as adjuncts. Systemic version (acetazolamide) for acute angle closure.

**Cholinergics**: pilocarpine. Increases outflow via ciliary muscle contraction. Causes miosis (small pupil), brow ache, induced myopia. Now second-line due to side effects.

### Dry Eye Therapeutics
**Artificial tears** replace missing tear volume. Preservative-free for frequent use (>4x daily). Different viscosities: thin for mild, gel for moderate, ointment for severe (blurry vision).

**Anti-inflammatory for dry eye**: cyclosporine, lifitegrast reduce T-cell mediated inflammation. Takes weeks to months for effect. Often used with artificial tears.

**Punctal plugs** reduce tear drainage. Temporary collagen plugs dissolve in days-weeks. Permanent silicone plugs last indefinitely. Insert in lower then upper puncta if needed.

**Secretagogues** stimulate tear production: pilocarpine oral (for Sjögren's). Requires systemic monitoring for sweating, urinary frequency, GI upset.

### Diagnostic Agents
**Fluorescein** stains corneal defects and measures tear breakup time. Orange-green fluorescence under cobalt blue light. Also used in angiography for retinal vessels. Minimal toxicity.

**Rose bengal** stains devitalized epithelial cells in dry eye. More irritating than fluorescein. Stains mucus and damaged cells bright red.

**Cycloplegics** paralyze accommodation: tropicamide (short acting), cyclopentolate (medium), atropine (long). Used for refraction in children, uveitis treatment, amblyopia penalization.

**Mydriatics** dilate pupil: phenylephrine (α-agonist, no cycloplegia), tropicamide (weak cycloplegia). Combinations for dilation. Contraindicated in narrow angles.

### Allergy Management
**Antihistamines** block histamine receptors: olopatadine, ketotifen, alcaftadine. Provide rapid itch relief. Some have mast cell stabilizing properties for prevention.

**Mast cell stabilizers**: cromolyn, lodoxamide. Prevent histamine release. Require regular use for prophylaxis. Less effective for acute symptoms.

**Dual-action agents** combine antihistamine and mast cell stabilization: olopatadine, ketotifen, azelastine. First-line for allergic conjunctivitis.

**Steroids** for severe allergy: loteprednol, fluorometholone. Short courses only due to side effect risk.

### Surgical Adjuncts
**Pre-operative antibiotics** reduce infection risk. Fourth-generation fluoroquinolones common. Started 1-3 days before surgery.

**Intra-operative agents**: lidocaine for anesthesia, epinephrine for hemostasis, acetylcholine for miosis, viscoelastics for chamber maintenance.

**Post-operative regimen**: antibiotic-steroid combination common (tobramycin-dexamethasone). Taper steroids over weeks. NSAIDs for pain and inflammation control.

### Systemic Medications with Ocular Effects
**Corticosteroids oral**: cataracts (posterior subcapsular), glaucoma, central serous retinopathy. Dose and duration dependent.

**Hydroxychloroquine**: retinal toxicity (bull's eye maculopathy). Screening with OCT, visual fields, multifocal ERG. Risk increases with cumulative dose >1000g.

**Amiodarone**: corneal verticillata (whorl deposits), optic neuropathy. Deposits usually reversible, neuropathy may be permanent.

**Ethambutol**: optic neuropathy (color vision loss first). Reversible if caught early. Regular monitoring essential.

**Phosphodiesterase-5 inhibitors (Viagra)**: blue tinge vision, increased light sensitivity. Usually transient.

### Prescribing Principles
**Patient education**: proper drop instillation (pull lower lid, one drop only), punctal occlusion, waiting between different medications (5 minutes minimum).

**Preservation considerations**: benzalkonium chloride (BAK) common but toxic with chronic use. Preservative-free options for dry eye, frequent use, or post-surgery.

**Pediatric dosing**: adjusted by weight. Some medications contraindicated in infants (brimonidine). May require compounding for appropriate concentrations.

**Geriatric considerations**: reduced hepatic/kidney function affects systemic medications. Multiple medications increase interaction risks. Simpler regimens improve compliance.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does punctal occlusion after eye drop installation achieve?",
          options: [
            "Increases medication absorption 2-3 times",
            "Decreases all side effects",
            "Makes drops work instantly",
            "Changes drop color"
          ],
          correctAnswer: 0,
          explanation: "Punctal occlusion (pressing the inner corner of the eye) increases medication absorption 2-3 times by reducing drainage through the tear duct system."
        },
        {
          id: 2,
          question: "Which antibiotic class is broad spectrum and commonly used for eye infections?",
          options: [
            "Fluoroquinolones",
            "Penicillins only",
            "Tetracyclines",
            "Sulfonamides"
          ],
          correctAnswer: 0,
          explanation: "Fluoroquinolones (like moxifloxacin, gatifloxacin) are broad-spectrum antibiotics commonly used for eye infections due to good corneal penetration."
        },
        {
          id: 3,
          question: "What is a serious side effect of long-term corticosteroid eye drops?",
          options: [
            "Elevated intraocular pressure",
            "Improved color vision",
            "Reduced tear production",
            "Smaller pupil size"
          ],
          correctAnswer: 0,
          explanation: "Long-term corticosteroid eye drops can significantly elevate intraocular pressure (steroid-induced glaucoma) in susceptible individuals."
        },
        {
          id: 4,
          question: "Which glaucoma medication class is first-line treatment?",
          options: [
            "Prostaglandin analogs",
            "Oral medications only",
            "Surgery always first",
            "Herbal supplements"
          ],
          correctAnswer: 0,
          explanation: "Prostaglandin analogs (latanoprost, bimatoprost) are first-line glaucoma treatment due to effectiveness and once-daily dosing with few systemic side effects."
        },
        {
          id: 5,
          question: "What should be used for artificial tears if needed more than 4 times daily?",
          options: [
            "Preservative-free formulations",
            "Extra-strength only",
            "Any available brand",
            "Only ointment forms"
          ],
          correctAnswer: 0,
          explanation: "Preservative-free artificial tears should be used if needed more than 4 times daily to avoid preservative toxicity that can damage ocular surface."
        },
        {
          id: 6,
          question: "What does fluorescein stain under cobalt blue light?",
          options: [
            "Corneal defects and abrasions",
            "Only the conjunctiva",
            "Eye pressure points",
            "Tear production amount"
          ],
          correctAnswer: 0,
          explanation: "Fluorescein stains corneal defects, abrasions, and ulcers orange-green under cobalt blue light, making them easily visible for diagnosis."
        },
        {
          id: 7,
          question: "What is the advantage of dual-action allergy eye drops?",
          options: [
            "Both treat symptoms and prevent future attacks",
            "They work 10 times faster",
            "No prescription needed",
            "They change eye color permanently"
          ],
          correctAnswer: 0,
          explanation: "Dual-action allergy drops (like olopatadine) both treat current symptoms (antihistamine) and help prevent future attacks (mast cell stabilizer)."
        },
        {
          id: 8,
          question: "Which medication requires regular retinal screening for toxicity?",
          options: [
            "Hydroxychloroquine",
            "Aspirin",
            "Blood pressure medication",
            "Cholesterol drugs"
          ],
          correctAnswer: 0,
          explanation: "Hydroxychloroquine (Plaquenil) requires regular retinal screening as it can cause irreversible bull's eye maculopathy with long-term use."
        },
        {
          id: 9,
          question: "How long should patients wait between different eye drop medications?",
          options: [
            "At least 5 minutes",
            "30 seconds only",
            "One hour minimum",
            "No waiting needed"
          ],
          correctAnswer: 0,
          explanation: "Patients should wait at least 5 minutes between different eye drop medications to prevent wash-out and ensure proper absorption of each medication."
        },
        {
          id: 10,
          question: "Which glaucoma medication should be avoided in asthma patients?",
          options: [
            "Beta-blockers (timolol)",
            "Prostaglandin analogs",
            "Alpha-agonists",
            "Carbonic anhydrase inhibitors"
          ],
          correctAnswer: 0,
          explanation: "Beta-blockers like timolol should be avoided in asthma patients as they can cause bronchoconstriction and breathing difficulties."
        },
        {
          id: 11,
          question: "What is cyclosporine used for in eye care?",
          options: [
            "Chronic dry eye inflammation",
            "Acute infections only",
            "Cataract prevention",
            "Glaucoma treatment only"
          ],
          correctAnswer: 0,
          explanation: "Cyclosporine eye drops are used for chronic dry eye to reduce T-cell mediated inflammation of the ocular surface."
        },
        {
          id: 12,
          question: "What does atropine do when used in eye drops?",
          options: [
            "Paralyzes accommodation and dilates pupil",
            "Reduces eye pressure only",
            "Treats infections",
            "Increases tear production"
          ],
          correctAnswer: 0,
          explanation: "Atropine paralyzes accommodation (cycloplegia) and dilates the pupil (mydriasis), used for uveitis treatment and pediatric refractions."
        },
        {
          id: 13,
          question: "What is a common preservative in eye drops that can cause toxicity?",
          options: [
            "Benzalkonium chloride (BAK)",
            "Salt water",
            "Vitamin C",
            "Natural oils"
          ],
          correctAnswer: 0,
          explanation: "Benzalkonium chloride (BAK) is a common preservative that can cause ocular surface toxicity with chronic use, especially in dry eye patients."
        },
        {
          id: 14,
          question: "What do punctal plugs achieve?",
          options: [
            "Reduce tear drainage from eyes",
            "Increase medication absorption only",
            "Change eye color",
            "Treat cataracts"
          ],
          correctAnswer: 0,
          explanation: "Punctal plugs are inserted into tear drainage ducts to reduce tear drainage, keeping natural and artificial tears on the eye longer for dry eye treatment."
        },
        {
          id: 15,
          question: "Which medication can cause corneal verticillata?",
          options: [
            "Amiodarone",
            "Antibiotics only",
            "Pain relievers",
            "Antihistamines"
          ],
          correctAnswer: 0,
          explanation: "Amiodarone, a cardiac medication, can cause corneal verticillata - whorl-like epithelial deposits that are usually visually insignificant."
        },
        {
          id: 16,
          question: "What is rose bengal used to stain?",
          options: [
            "Devitalized epithelial cells in dry eye",
            "Only corneal infections",
            "Tear production amount",
            "Eye pressure points"
          ],
          correctAnswer: 0,
          explanation: "Rose bengal stains devitalized (dead or dying) epithelial cells and mucus in dry eye syndrome, appearing bright red."
        },
        {
          id: 17,
          question: "What is the main action of carbonic anhydrase inhibitors?",
          options: [
            "Reduce aqueous humor production",
            "Increase tear production",
            "Dilate pupils",
            "Fight infection"
          ],
          correctAnswer: 0,
          explanation: "Carbonic anhydrase inhibitors (dorzolamide, brinzolamide) reduce aqueous humor production in the eye to lower intraocular pressure in glaucoma."
        },
        {
          id: 18,
          question: "Which is NOT a common post-operative eye drop regimen?",
          options: [
            "Antihistamine only",
            "Antibiotic-steroid combination",
            "NSAIDs for inflammation",
            "Lubricating drops"
          ],
          correctAnswer: 0,
          explanation: "Antihistamine-only is not a typical post-operative regimen; usually antibiotic-steroid combinations are used initially, then tapered."
        },
        {
          id: 19,
          question: "What does ethambutol toxicity affect?",
          options: [
            "Optic nerve function",
            "Corneal clarity only",
            "Lens transparency",
            "Eyelid function"
          ],
          correctAnswer: 0,
          explanation: "Ethambutol, a tuberculosis medication, can cause optic neuropathy affecting color vision and visual acuity if not monitored closely."
        },
        {
          id: 20,
          question: "What is the advantage of gel or ointment eye medications?",
          options: [
            "Longer contact time with eye",
            "Work 10 times faster",
            "No prescription needed",
            "Change eye color"
          ],
          correctAnswer: 0,
          explanation: "Gels and ointments have longer contact time with the ocular surface, providing sustained medication release compared to solutions."
        }
      ]
    },
    {
      id: 6,
      title: "Practice Management and Professional Development",
      content: `# Module 6: Practice Management and Professional Development

## Introduction to Optometry Practice
This module covers the business, ethical, and professional aspects of optometry practice. Learn to manage a successful practice while maintaining high standards of patient care and professional ethics.

### Practice Models and Settings
**Private practice** offers autonomy and building equity. Options: solo practice, partnership, group practice. Requires business management skills, capital investment, and risk tolerance. Rewards include control and financial potential.

**Corporate optometry** provides structure and support. Chains offer marketing, purchasing power, and administrative support. May have less autonomy and focus on volume. Good starting point for new graduates.

**Multidisciplinary settings** integrate with medical practices. Co-management with ophthalmologists, working in medical clinics, or hospital-based practice. Requires strong medical knowledge and communication skills.

**Academic and research** positions in universities or research institutions. Involves teaching, research, and possibly patient care. Requires advanced degrees or research experience.

### Business Fundamentals
**Financial management** includes budgeting, accounting, and cash flow. Understand overhead costs (rent, staff, supplies). Monitor key metrics: revenue per patient, collections rate, inventory turnover.

**Fee setting** considers costs, market rates, and value provided. Different fee structures: comprehensive exam fee, materials separate; all-inclusive pricing; insurance-based pricing. Transparent pricing builds trust.

**Insurance billing** requires understanding of medical vs. vision insurance. Medical insurance covers disease management, vision insurance covers refractive services. Proper coding (CPT, ICD-10) essential for reimbursement.

### Marketing and Patient Acquisition
**Patient retention strategies** focus on excellent service. Recall systems (recall cards, electronic reminders), follow-up calls after visits, addressing complaints promptly. Loyal patients refer others.

**Community engagement** builds visibility. Participate in health fairs, school screenings, senior center visits. Sponsor local sports teams or events. Educational talks at community groups.

**Digital presence** essential today. Professional website with services, staff bios, online appointment booking. Social media for education and engagement. Online reviews management (respond professionally to all reviews).

### Legal and Ethical Considerations
**Standard of care** defines minimum acceptable practice. Based on what reasonably prudent optometrist would do in similar circumstances. Document decisions that deviate from standard with rationale.

**Informed consent** requires explaining procedures, risks, benefits, alternatives. Document consent in chart. Special considerations for minors, cognitively impaired, or language barriers.

**Confidentiality** protected by HIPAA. Secure records (paper and electronic). Limit discussions to necessary personnel. Proper disposal of records. Patient authorization needed for releasing information.

**Scope of practice** varies by jurisdiction. Know state laws regarding pharmaceuticals, procedures, co-management. Maintain certifications and continuing education for expanded scope privileges.

### Staff Management
**Team building** creates positive workplace culture. Clear job descriptions, regular feedback, recognition programs. Invest in staff training and development. Cross-training increases flexibility.

**Delegation** appropriate to staff qualifications. Technicians can perform pretesting, contact lens training, frame adjustments. Never delegate diagnosis or treatment decisions. Supervise appropriately.

**Conflict resolution** addresses issues promptly. Private discussions, focus on behaviors not personalities, seek mutually acceptable solutions. Document significant personnel issues.

### Clinical Documentation
**SOAP notes** structure documentation: Subjective (patient complaints), Objective (examination findings), Assessment (diagnosis/differential), Plan (treatment/follow-up). Clear, concise, chronological.

**Progress notes** track changes over time. Include response to treatment, side effects, patient compliance. Note any changes to treatment plan with rationale.

**Referral letters** communicate with other providers. Include reason for referral, relevant findings, specific questions for consultant. Follow up on consultant's recommendations.

**Prescription records** must be accurate and complete. Include all parameters for glasses, contact lenses, medications. Document verification of prescriptions before dispensing.

### Quality Assurance
**Peer review** improves practice. Case discussions with colleagues, chart reviews, outcome analysis. Participate in professional organizations' quality initiatives.

**Patient satisfaction** measurement through surveys, comment cards, online reviews. Address concerns promptly. Use feedback to improve services.

**Continuous improvement** through protocols and checklists. Standardize common procedures. Regular equipment calibration and maintenance. Stay current with best practices through continuing education.

### Professional Development
**Continuing education** maintains competence. Requirements vary by jurisdiction. Mix of formats: conferences, online courses, journal reading, hands-on workshops. Document for license renewal.

**Specialty certifications** demonstrate expertise. Areas: contact lenses, low vision, vision therapy, ocular disease. May require additional examinations and case submissions.

**Mentorship** benefits both parties. Seek mentor for guidance, be mentor to students or new graduates. Professional organizations often have formal mentorship programs.

**Research and publication** contribute to profession. Case reports, clinical studies, review articles. Start with local or regional meetings before national conferences.

### Technology Integration
**Electronic health records** (EHR) improve efficiency and accuracy. Features: templates, imaging integration, e-prescribing, patient portal. Choose system with good support and training.

**Digital imaging** enhances documentation. Retinal photography, OCT, corneal topography, visual field testing. Images aid diagnosis, monitoring, patient education, and referrals.

**Telehealth** expands access. Applications: triage, follow-up visits, remote consultations. Understand limitations, ensure privacy, know reimbursement policies.

**Practice management software** handles scheduling, billing, inventory. Integration with EHR ideal. Regular training for staff on software updates.

### Work-Life Balance
**Time management** prevents burnout. Schedule buffer time between patients, block administrative time, delegate appropriately. Learn to say no to unreasonable demands.

**Stress management** techniques: regular exercise, hobbies, mindfulness, adequate sleep. Recognize signs of burnout: cynicism, exhaustion, decreased effectiveness.

**Professional boundaries** maintain appropriate relationships. Friendly but professional with patients and staff. Avoid dual relationships that could impair judgment.

**Career longevity** planning: consider practice transition options, retirement planning, disability insurance. Network with colleagues at different career stages.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is a key advantage of private optometry practice?",
          options: [
            "Autonomy and building equity",
            "No business management needed",
            "Guaranteed high income",
            "No patient care responsibilities"
          ],
          correctAnswer: 0,
          explanation: "Private practice offers autonomy (control over decisions) and the opportunity to build equity in a business, though it requires business management skills."
        },
        {
          id: 2,
          question: "What should fee setting consider?",
          options: [
            "Costs, market rates, and value provided",
            "Only what competitors charge",
            "Highest possible price",
            "Arbitrary numbers"
          ],
          correctAnswer: 0,
          explanation: "Fee setting should consider practice costs, local market rates, and the value of services provided to establish fair, sustainable pricing."
        },
        {
          id: 3,
          question: "What is the difference between medical and vision insurance?",
          options: [
            "Medical covers disease, vision covers refractive",
            "No difference - same coverage",
            "Vision covers surgery only",
            "Medical is only for hospitals"
          ],
          correctAnswer: 0,
          explanation: "Medical insurance covers diagnosis and treatment of eye diseases, while vision insurance typically covers refractive services (glasses, contact lenses)."
        },
        {
          id: 4,
          question: "What is patient retention primarily built on?",
          options: [
            "Excellent service and follow-up",
            "Lowest prices only",
            "Fastest appointments",
            "Fancy equipment only"
          ],
          correctAnswer: 0,
          explanation: "Patient retention is built primarily on excellent service, thorough follow-up, and addressing patient concerns, which leads to loyalty and referrals."
        },
        {
          id: 5,
          question: "What does the standard of care refer to?",
          options: [
            "Minimum acceptable practice level",
            "Highest possible technology",
            "Only specialist-level care",
            "What insurance will pay for"
          ],
          correctAnswer: 0,
          explanation: "Standard of care refers to the minimum level of acceptable practice that a reasonably prudent optometrist would provide in similar circumstances."
        },
        {
          id: 6,
          question: "What is required for informed consent?",
          options: [
            "Explaining procedures, risks, benefits, alternatives",
            "Just getting a signature",
            "Only verbal agreement",
            "No explanation needed for routine care"
          ],
          correctAnswer: 0,
          explanation: "Informed consent requires explaining the procedure, risks, benefits, and alternatives to the patient, then documenting their understanding and agreement."
        },
        {
          id: 7,
          question: "What should never be delegated to staff?",
          options: [
            "Diagnosis and treatment decisions",
            "Pretesting and measurements",
            "Frame adjustments",
            "Contact lens training"
          ],
          correctAnswer: 0,
          explanation: "Diagnosis and treatment decisions should never be delegated to staff; these require the optometrist's training, judgment, and licensure."
        },
        {
          id: 8,
          question: "What does the 'S' in SOAP notes stand for?",
          options: [
            "Subjective",
            "Surgical",
            "Systemic",
            "Standard"
          ],
          correctAnswer: 0,
          explanation: "In SOAP notes, 'S' stands for Subjective - the patient's complaints and symptoms in their own words."
        },
        {
          id: 9,
          question: "What is a benefit of peer review?",
          options: [
            "Improves practice through colleague feedback",
            "Reduces patient load",
            "Eliminates need for continuing education",
            "Guarantees perfect outcomes"
          ],
          correctAnswer: 0,
          explanation: "Peer review improves practice by providing feedback from colleagues, discussing challenging cases, and learning from others' experiences."
        },
        {
          id: 10,
          question: "Why is continuing education important?",
          options: [
            "Maintains competence and meets requirements",
            "Only for new graduates",
            "Optional for experienced practitioners",
            "Just for academic interest"
          ],
          correctAnswer: 0,
          explanation: "Continuing education maintains clinical competence, meets licensure requirements, and ensures patients receive care based on current knowledge."
        },
        {
          id: 11,
          question: "What does EHR stand for?",
          options: [
            "Electronic Health Records",
            "Eye Health Registry",
            "Emergency Health Response",
            "Equipment Handling Rules"
          ],
          correctAnswer: 0,
          explanation: "EHR stands for Electronic Health Records - digital systems that store patient information, improving efficiency, accuracy, and accessibility."
        },
        {
          id: 12,
          question: "What can telehealth be used for in optometry?",
          options: [
            "Triage and follow-up visits",
            "Complete eye examinations",
            "Surgical procedures",
            "Replacing all in-person visits"
          ],
          correctAnswer: 0,
          explanation: "Telehealth in optometry can be used for triage (determining urgency), follow-up visits, and remote consultations, but has limitations for comprehensive exams."
        },
        {
          id: 13,
          question: "What helps prevent burnout in practice?",
          options: [
            "Good time management and boundaries",
            "Working longer hours only",
            "Taking all patient requests",
            "Avoiding all administrative tasks"
          ],
          correctAnswer: 0,
          explanation: "Good time management, setting professional boundaries, and maintaining work-life balance help prevent burnout in optometry practice."
        },
        {
          id: 14,
          question: "What should a referral letter include?",
          options: [
            "Reason, findings, and specific questions",
            "Only patient name and date",
            "Bill for services",
            "Personal opinions about patient"
          ],
          correctAnswer: 0,
          explanation: "A referral letter should include the reason for referral, relevant examination findings, and specific questions or concerns for the consulting provider."
        },
        {
          id: 15,
          question: "What does HIPAA protect?",
          options: [
            "Patient confidentiality and privacy",
            "Only insurance information",
            "Practice income",
            "Equipment purchases"
          ],
          correctAnswer: 0,
          explanation: "HIPAA (Health Insurance Portability and Accountability Act) protects patient confidentiality, privacy, and security of health information."
        },
        {
          id: 16,
          question: "What is scope of practice?",
          options: [
            "Legal limits of what optometrist can do",
            "Office opening hours",
            "Patient waiting area size",
            "Types of frames carried"
          ],
          correctAnswer: 0,
          explanation: "Scope of practice refers to the legal limits of what procedures, treatments, and services an optometrist can provide, which varies by state."
        },
        {
          id: 17,
          question: "Why measure patient satisfaction?",
          options: [
            "Identify areas for practice improvement",
            "Only for marketing materials",
            "To fire unhappy patients",
            "Not necessary if busy"
          ],
          correctAnswer: 0,
          explanation: "Measuring patient satisfaction helps identify areas for practice improvement, address concerns, and enhance patient care and experience."
        },
        {
          id: 18,
          question: "What is a benefit of multidisciplinary practice?",
          options: [
            "Comprehensive patient care coordination",
            "Less paperwork",
            "No need for referrals",
            "Lower malpractice insurance"
          ],
          correctAnswer: 0,
          explanation: "Multidisciplinary practice allows comprehensive patient care coordination with other healthcare providers, benefiting patients with complex needs."
        },
        {
          id: 19,
          question: "What should be documented when deviating from standard care?",
          options: [
            "Rationale for the deviation",
            "Only that deviation occurred",
            "Patient's insurance information",
            "Staff who disagreed"
          ],
          correctAnswer: 0,
          explanation: "When deviating from standard care, document the rationale for the decision to show clinical reasoning and justification for the approach taken."
        },
        {
          id: 20,
          question: "What is professional mentorship?",
          options: [
            "Guidance from experienced colleague",
            "Only for students",
            "Financial sponsorship",
            "Guaranteed job offer"
          ],
          correctAnswer: 0,
          explanation: "Professional mentorship involves guidance from an experienced colleague, providing advice, support, and perspective on career development."
        }
      ]
    }
  ],
  
  // Final Exam (40 questions covering all modules)
  finalExam: [
    {
      id: 1,
      question: "What does 20/20 visual acuity mean?",
      options: [
        "Seeing at 20 feet what should be seen at 20 feet",
        "Perfect vision at all distances",
        "Requiring glasses at 20 feet",
        "Only 20% of normal vision"
      ],
      correctAnswer: 0,
      explanation: "20/20 means you see clearly at 20 feet what should normally be seen at that distance, not 'perfect' vision."
    },
    {
      id: 2,
      question: "Which tonometry method is gold standard?",
      options: [
        "Goldmann applanation",
        "Non-contact tonometry",
        "Digital palpation",
        "Schiotz tonometry"
      ],
      correctAnswer: 0,
      explanation: "Goldmann applanation tonometry is the gold standard for accurate intraocular pressure measurement."
    },
    {
      id: 3,
      question: "What is the critical age for amblyopia treatment?",
      options: [
        "Before age 7-8 years",
        "After age 15 years",
        "Only in infancy",
        "At any age equally"
      ],
      correctAnswer: 0,
      explanation: "Amblyopia treatment is most effective before age 7-8 when the visual system is still developing."
    },
    {
      id: 4,
      question: "What characterizes primary open-angle glaucoma?",
      options: [
        "Chronic and asymptomatic until late",
        "Acute pain and redness",
        "Sudden vision loss",
        "Only in children"
      ],
      correctAnswer: 0,
      explanation: "Primary open-angle glaucoma is chronic and often asymptomatic until significant damage has occurred."
    },
    {
      id: 5,
      question: "What is angle-closure glaucoma?",
      options: [
        "Ocular emergency requiring immediate treatment",
        "Mild condition monitored only",
        "Type of cataract",
        "Retinal disorder"
      ],
      correctAnswer: 0,
      explanation: "Angle-closure glaucoma is an ocular emergency with severe symptoms requiring immediate pressure-lowering treatment."
    },
    {
      id: 6,
      question: "What does wet AMD feature?",
      options: [
        "Choroidal neovascularization",
        "Only drusen accumulation",
        "Corneal scarring",
        "Lens opacities"
      ],
      correctAnswer: 0,
      explanation: "Wet AMD features choroidal neovascularization (abnormal blood vessels) that can leak and hemorrhage."
    },
    {
      id: 7,
      question: "What are retinal detachment symptoms?",
      options: [
        "Floaters, flashes, curtain-like vision loss",
        "Gradual blur only",
        "Eye pain and discharge",
        "Color changes only"
      ],
      correctAnswer: 0,
      explanation: "Retinal detachment typically presents with floaters, flashes, and curtain-like peripheral vision loss."
    },
    {
      id: 8,
      question: "Which contact lens material provides highest oxygen?",
      options: [
        "Silicone hydrogel",
        "Regular hydrogel",
        "PMMA hard lenses",
        "Glass lenses"
      ],
      correctAnswer: 0,
      explanation: "Silicone hydrogel contact lenses provide the highest oxygen permeability, reducing hypoxia risks."
    },
    {
      id: 9,
      question: "What are RGP lenses best for?",
      options: [
        "Irregular corneas and high astigmatism",
        "Only simple nearsightedness",
        "Color blindness",
        "Children only"
      ],
      correctAnswer: 0,
      explanation: "RGP lenses provide crisp vision and are excellent for irregular corneas and high astigmatism."
    },
    {
      id: 10,
      question: "What is normal tear breakup time?",
      options: [
        "Greater than 10 seconds",
        "Less than 5 seconds",
        "Exactly 30 seconds",
        "Not important"
      ],
      correctAnswer: 0,
      explanation: "Normal tear breakup time is greater than 10 seconds; shorter times indicate unstable tear film."
    },
    {
      id: 11,
      question: "What is stereopsis?",
      options: [
        "Depth perception from binocular vision",
        "Color perception",
        "Single eye acuity",
        "Peripheral vision"
      ],
      correctAnswer: 0,
      explanation: "Stereopsis is three-dimensional depth perception resulting from binocular vision."
    },
    {
      id: 12,
      question: "What is convergence insufficiency?",
      options: [
        "Reduced ability to turn eyes inward for near",
        "Excessive eye turning inward",
        "Inability to focus",
        "Color vision defect"
      ],
      correctAnswer: 0,
      explanation: "Convergence insufficiency involves reduced ability to turn eyes inward for near tasks, causing symptoms with reading."
    },
    {
      id: 13,
      question: "What does vision therapy improve?",
      options: [
        "Visual function and processing",
        "Only eye appearance",
        "Medication effectiveness",
        "Surgical outcomes"
      ],
      correctAnswer: 0,
      explanation: "Vision therapy improves visual function, processing efficiency, and binocular coordination."
    },
    {
      id: 14,
      question: "What is accommodation?",
      options: [
        "Eye's focusing ability",
        "Eye alignment",
        "Tear production",
        "Pupil size change"
      ],
      correctAnswer: 0,
      explanation: "Accommodation is the eye's ability to change focus from distance to near by altering lens shape."
    },
    {
      id: 15,
      question: "What does punctal occlusion achieve?",
      options: [
        "Increases medication absorption",
        "Decreases all side effects",
        "Makes drops work instantly",
        "Changes drop color"
      ],
      correctAnswer: 0,
      explanation: "Punctal occlusion increases medication absorption 2-3 times by reducing drainage through tear ducts."
    },
    {
      id: 16,
      question: "Which is first-line glaucoma treatment?",
      options: [
        "Prostaglandin analogs",
        "Oral medications only",
        "Surgery first",
        "Herbal supplements"
      ],
      correctAnswer: 0,
      explanation: "Prostaglandin analogs are first-line glaucoma treatment due to effectiveness and once-daily dosing."
    },
    {
      id: 17,
      question: "What steroid side effect is serious?",
      options: [
        "Elevated intraocular pressure",
        "Improved color vision",
        "Reduced tear production",
        "Smaller pupils"
      ],
      correctAnswer: 0,
      explanation: "Steroid eye drops can significantly elevate intraocular pressure (steroid-induced glaucoma)."
    },
    {
      id: 18,
      question: "What medication requires retinal screening?",
      options: [
        "Hydroxychloroquine",
        "Aspirin",
        "Blood pressure meds",
        "Antibiotics"
      ],
      correctAnswer: 0,
      explanation: "Hydroxychloroquine requires regular retinal screening for potential macular toxicity."
    },
    {
      id: 19,
      question: "What is standard of care?",
      options: [
        "Minimum acceptable practice level",
        "Highest technology available",
        "Only specialist care",
        "Insurance payment level"
      ],
      correctAnswer: 0,
      explanation: "Standard of care is the minimum acceptable practice level expected of a reasonable practitioner."
    },
    {
      id: 20,
      question: "What does informed consent require?",
      options: [
        "Explaining procedures, risks, benefits",
        "Just a signature",
        "Only verbal agreement",
        "No explanation needed"
      ],
      correctAnswer: 0,
      explanation: "Informed consent requires explaining procedures, risks, benefits, and alternatives to the patient."
    },
    {
      id: 21,
      question: "What is SOAP documentation?",
      options: [
        "Subjective, Objective, Assessment, Plan",
        "Surgical, Optical, Assessment, Plan",
        "Simple, Objective, Analysis, Procedure",
        "Subjective, Observation, Action, Plan"
      ],
      correctAnswer: 0,
      explanation: "SOAP stands for Subjective, Objective, Assessment, Plan - a structured documentation format."
    },
    {
      id: 22,
      question: "What should never be delegated to staff?",
      options: [
        "Diagnosis and treatment decisions",
        "Pretesting",
        "Frame adjustments",
        "Contact lens training"
      ],
      correctAnswer: 0,
      explanation: "Diagnosis and treatment decisions require the optometrist's training and judgment and should not be delegated."
    },
    {
      id: 23,
      question: "What does HIPAA protect?",
      options: [
        "Patient confidentiality and privacy",
        "Only insurance info",
        "Practice income",
        "Equipment"
      ],
      correctAnswer: 0,
      explanation: "HIPAA protects patient confidentiality, privacy, and security of health information."
    },
    {
      id: 24,
      question: "Why continue education?",
      options: [
        "Maintain competence and meet requirements",
        "Only for new graduates",
        "Optional for experienced",
        "Academic interest only"
      ],
      correctAnswer: 0,
      explanation: "Continuing education maintains clinical competence and meets licensure requirements."
    },
    {
      id: 25,
      question: "What is telehealth used for?",
      options: [
        "Triage and follow-up visits",
        "Complete eye exams",
        "Surgery",
        "Replacing all visits"
      ],
      correctAnswer: 0,
      explanation: "Telehealth can be used for triage and follow-up but has limitations for comprehensive exams."
    },
    {
      id: 26,
      question: "What prevents burnout?",
      options: [
        "Time management and boundaries",
        "Working longer hours",
        "Taking all requests",
        "Avoiding admin tasks"
      ],
      correctAnswer: 0,
      explanation: "Good time management and professional boundaries help prevent burnout."
    },
    {
      id: 27,
      question: "What is keratoconus?",
      options: [
        "Corneal thinning and steepening",
        "Eye pressure elevation",
        "Retinal detachment",
        "Lens clouding"
      ],
      correctAnswer: 0,
      explanation: "Keratoconus involves corneal thinning and steepening into cone shape, causing irregular astigmatism."
    },
    {
      id: 28,
      question: "What is presbyopia?",
      options: [
        "Age-related near vision loss",
        "Eye inflammation",
        "Increased nearsightedness",
        "Color blindness"
      ],
      correctAnswer: 0,
      explanation: "Presbyopia is age-related loss of near focusing ability, typically beginning around age 40."
    },
    {
      id: 29,
      question: "What is myopia?",
      options: [
        "Nearsightedness",
        "Farsightedness",
        "Astigmatism",
        "Presbyopia"
      ],
      correctAnswer: 0,
      explanation: "Myopia is nearsightedness - difficulty seeing distant objects clearly."
    },
    {
      id: 30,
      question: "What is hyperopia?",
      options: [
        "Farsightedness",
        "Nearsightedness",
        "Astigmatism",
        "Presbyopia"
      ],
      correctAnswer: 0,
      explanation: "Hyperopia is farsightedness - difficulty seeing near objects clearly."
    },
    {
      id: 31,
      question: "What is astigmatism?",
      options: [
        "Irregular corneal curvature",
        "Eye pressure problem",
        "Retinal disorder",
        "Lens opacity"
      ],
      correctAnswer: 0,
      explanation: "Astigmatism is irregular corneal curvature causing blurred vision at all distances."
    },
    {
      id: 32,
      question: "What is the retina?",
      options: [
        "Light-sensitive tissue lining back of eye",
        "Front transparent part of eye",
        "Colored part of eye",
        "White part of eye"
      ],
      correctAnswer: 0,
      explanation: "The retina is light-sensitive tissue lining the back of the eye, converting light to neural signals."
    },
    {
      id: 33,
      question: "What is the cornea?",
      options: [
        "Clear front surface of eye",
        "Colored part of eye",
        "White part of eye",
        "Inner lining of eye"
      ],
      correctAnswer: 0,
      explanation: "The cornea is the clear, dome-shaped front surface of the eye that provides most focusing power."
    },
    {
      id: 34,
      question: "What is the lens?",
      options: [
        "Transparent structure behind iris that focuses",
        "Colored part of eye",
        "White part of eye",
        "Light-sensitive tissue"
      ],
      correctAnswer: 0,
      explanation: "The lens is a transparent structure behind the iris that changes shape to focus light on the retina."
    },
    {
      id: 35,
      question: "What is the optic nerve?",
      options: [
        "Carries visual signals from eye to brain",
        "Controls eye movements",
        "Produces tears",
        "Changes lens shape"
      ],
      correctAnswer: 0,
      explanation: "The optic nerve carries visual signals from the retina to the brain for processing."
    },
    {
      id: 36,
      question: "What is a cataract?",
      options: [
        "Clouding of the eye's lens",
        "Eye pressure increase",
        "Retinal detachment",
        "Corneal scar"
      ],
      correctAnswer: 0,
      explanation: "A cataract is clouding of the eye's natural lens, causing blurred vision."
    },
    {
      id: 37,
      question: "What is macular degeneration?",
      options: [
        "Breakdown of central retina",
        "Peripheral vision loss",
        "Complete blindness",
        "Corneal disease"
      ],
      correctAnswer: 0,
      explanation: "Macular degeneration involves breakdown of the macula (central retina), affecting central vision."
    },
    {
      id: 38,
      question: "What is diabetic retinopathy?",
      options: [
        "Diabetes-related retinal damage",
        "Only cataract formation",
        "Corneal complications",
        "Optic nerve disorder"
      ],
      correctAnswer: 0,
      explanation: "Diabetic retinopathy is diabetes-related damage to retinal blood vessels."
    },
    {
      id: 39,
      question: "What is dry eye syndrome?",
      options: [
        "Inadequate tear quantity or quality",
        "Excessive tearing",
        "Only allergy-related",
        "Not a real condition"
      ],
      correctAnswer: 0,
      explanation: "Dry eye syndrome involves inadequate tear quantity or quality, causing discomfort and visual disturbance."
    },
    {
      id: 40,
      question: "What is the role of an optometrist?",
      options: [
        "Primary eye care provider examining and treating",
        "Only sells glasses",
        "Only performs surgery",
        "Only treats children"
      ],
      correctAnswer: 0,
      explanation: "Optometrists are primary eye care providers who examine, diagnose, treat, and manage eye conditions and vision problems."
    }
  ]
};

export default optometryDiplomaCourse;
