// Medical Microbiology (Diploma) - Complete Course Data
// File: medical-microbiology-diploma.ts

export const medicalMicrobiologyDiploma = {
  // COURSE METADATA
  id: "medical-microbiology-diploma",
  title: "Medical Microbiology (Diploma)",
  description: "Advanced study of microorganisms in human health and disease. Focus on pathogenic mechanisms, diagnostic techniques, treatment strategies, and infection control in clinical settings.",
  duration: "12 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  icon: "🦠",
  badge: "Diploma",
  prerequisite: "microbiology-certificate", // Assumes Certificate as prerequisite
  
  // MODULE STRUCTURE
  modules: [
    {
      id: 1,
      title: "Pathogenic Mechanisms and Host Defense",
      content: `# Module 1: Pathogenic Mechanisms and Host Defense

## Microbial Pathogenesis
Understanding how microorganisms cause disease is fundamental to medical microbiology. Pathogenesis involves complex interactions between microbes and their human hosts.

### Stages of Infection
**Exposure** - Initial contact with pathogen
**Adhesion** - Attachment to host cells or tissues
**Invasion** - Entry into host tissues
**Multiplication** - Replication within host
**Damage** - Direct or indirect harm to host
**Dissemination** - Spread to other sites
**Transmission** - Exit and spread to new hosts

### Virulence Factors
**Adhesins** - Surface molecules for attachment to host cells
**Invasins** - Promote tissue invasion and spread
**Toxins**:
- **Exotoxins** - Secreted proteins with specific effects
- **Endotoxins** - LPS components of Gram-negative bacteria
**Capsules** - Prevent phagocytosis
**Enzymes** - Degrade host tissues or defenses
**Antigenic Variation** - Changing surface antigens to evade immunity

### Bacterial Toxins
**Types of Exotoxins**:
- **Cytotoxins** - Kill host cells
- **Neurotoxins** - Affect nervous system (e.g., botulinum, tetanus)
- **Enterotoxins** - Affect intestinal cells (e.g., cholera toxin)
- **Pyrogenic exotoxins** - Cause fever (e.g., toxic shock syndrome toxin)
**Mechanisms**:
- **A-B toxins** - B subunit binds, A subunit enters and acts
- **Membrane-disrupting toxins** - Form pores in cell membranes
- **Superantigens** - Overstimulate immune system

### Host-Pathogen Interactions
**Normal Flora** - Microbes normally present without causing disease
**Opportunistic Infections** - Normal flora causing disease in compromised hosts
**Primary Pathogens** - Cause disease in healthy individuals
**Latent Infections** - Dormant infections that can reactivate
**Chronic Infections** - Persistent infections over long periods

### Innate Immune Defense
**Physical Barriers**:
- **Skin** - Physical barrier, acidic pH, antimicrobial peptides
- **Mucous Membranes** - Mucus trapping, ciliary clearance
- **Chemical Barriers** - Stomach acid, enzymes in secretions
**Cellular Defenses**:
- **Phagocytes** - Neutrophils, macrophages, dendritic cells
- **Natural Killer Cells** - Kill infected or abnormal cells
**Molecular Defenses**:
- **Complement System** - Protein cascade enhancing phagocytosis and lysis
- **Interferons** - Antiviral proteins
- **Acute Phase Proteins** - CRP, mannose-binding lectin

### Adaptive Immune Response
**Antigen Recognition**:
- **B cells** - Produce antibodies
- **T cells** - Cell-mediated immunity
- **Antigen-Presenting Cells** - Process and present antigens
**Antibody Functions**:
- **Neutralization** - Block pathogen attachment/entry
- **Opsonization** - Enhance phagocytosis
- **Complement Activation** - Initiate complement cascade
- **ADCC** - Antibody-dependent cellular cytotoxicity
**Cell-Mediated Immunity**:
- **Helper T cells** - Coordinate immune responses
- **Cytotoxic T cells** - Kill infected cells
- **Memory Cells** - Provide long-term protection

### Immune Evasion Strategies
**Antigenic Variation** - Changing surface antigens (e.g., influenza, HIV)
**Molecular Mimicry** - Mimicking host molecules
**Immune Suppression** - Inhibiting immune cell function
**Intracellular Location** - Hiding inside host cells
**Biofilm Formation** - Protective communities resistant to immunity
**Capsule Production** - Preventing phagocytosis

### Inflammation and Fever
**Inflammatory Response**:
- **Vasodilation** - Increased blood flow
- **Increased Permeability** - Leakage of plasma proteins
- **Cellular Infiltration** - Migration of immune cells
- **Mediators** - Histamine, prostaglandins, cytokines
**Fever Benefits**:
- Inhibits microbial growth
- Enhances immune responses
- Increases tissue repair

### Laboratory Correlates of Immunity
**White Blood Cell Count** - Total and differential counts
**Antibody Titers** - Measuring specific antibody levels
**Complement Levels** - Assessing complement function
**Skin Tests** - Delayed hypersensitivity reactions
**Flow Cytometry** - Analyzing immune cell populations
**Genetic Testing** - Identifying immune deficiencies

### Immunodeficiency and Susceptibility
**Primary Immunodeficiencies** - Genetic defects (e.g., SCID, CGD)
**Secondary Immunodeficiencies**:
- HIV/AIDS
- Cancer chemotherapy
- Immunosuppressive drugs
- Malnutrition
- Aging
**Increased Susceptibility**:
- Recurrent infections
- Opportunistic infections
- Severe disease from normally mild pathogens

### Vaccination Principles
**Types of Vaccines**:
- **Live attenuated** - Weakened pathogens
- **Inactivated/killed** - Dead pathogens
- **Subunit** - Specific antigens
- **Toxoid** - Inactivated toxins
- **mRNA/DNA** - Genetic material encoding antigens
**Herd Immunity** - Protection of unvaccinated through population immunity
**Vaccine Development** - Identifying protective antigens, adjuvants, delivery systems`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the first stage of infection?",
          options: [
            "Adhesion",
            "Exposure",
            "Invasion",
            "Multiplication"
          ],
          correctAnswer: 1,
          explanation: "Exposure refers to the initial contact between the pathogen and the host."
        },
        {
          id: 2,
          question: "What are secreted bacterial proteins with specific toxic effects?",
          options: [
            "Endotoxins",
            "Exotoxins",
            "Capsules",
            "Adhesins"
          ],
          correctAnswer: 1,
          explanation: "Exotoxins are proteins secreted by bacteria that have specific damaging effects on host cells."
        },
        {
          id: 3,
          question: "Which immune cells are professional phagocytes?",
          options: [
            "B cells",
            "T cells",
            "Neutrophils and macrophages",
            "Natural killer cells"
          ],
          correctAnswer: 2,
          explanation: "Neutrophils and macrophages are specialized phagocytic cells that engulf and destroy pathogens."
        },
        {
          id: 4,
          question: "What enhances phagocytosis by coating pathogens?",
          options: [
            "Neutralization",
            "Opsonization",
            "Complement activation",
            "ADCC"
          ],
          correctAnswer: 1,
          explanation: "Opsonization involves coating pathogens with antibodies or complement proteins to enhance phagocytosis."
        },
        {
          id: 5,
          question: "What is the lipid component of Gram-negative bacterial walls?",
          options: [
            "Exotoxin",
            "Endotoxin",
            "Enterotoxin",
            "Neurotoxin"
          ],
          correctAnswer: 1,
          explanation: "Endotoxin refers to lipopolysaccharide (LPS) in the outer membrane of Gram-negative bacteria."
        },
        {
          id: 6,
          question: "What immune cells kill virus-infected cells?",
          options: [
            "Helper T cells",
            "Cytotoxic T cells",
            "B cells",
            "Neutrophils"
          ],
          correctAnswer: 1,
          explanation: "Cytotoxic T cells recognize and kill cells infected with intracellular pathogens like viruses."
        },
        {
          id: 7,
          question: "What prevents phagocytosis by immune cells?",
          options: [
            "Adhesins",
            "Capsules",
            "Invasins",
            "Toxins"
          ],
          correctAnswer: 1,
          explanation: "Bacterial capsules are slippery polysaccharide coatings that prevent phagocytes from engulfing bacteria."
        },
        {
          id: 8,
          question: "What is changing surface antigens to evade immunity called?",
          options: [
            "Molecular mimicry",
            "Antigenic variation",
            "Immune suppression",
            "Biofilm formation"
          ],
          correctAnswer: 1,
          explanation: "Antigenic variation allows pathogens to change their surface antigens, escaping recognition by antibodies."
        },
        {
          id: 9,
          question: "What are proteins that provide antiviral defense?",
          options: [
            "Complement proteins",
            "Interferons",
            "Acute phase proteins",
            "Antibodies"
          ],
          correctAnswer: 1,
          explanation: "Interferons are signaling proteins released by infected cells that protect neighboring cells from viral infection."
        },
        {
          id: 10,
          question: "What vaccine type uses weakened live pathogens?",
          options: [
            "Inactivated vaccine",
            "Live attenuated vaccine",
            "Subunit vaccine",
            "Toxoid vaccine"
          ],
          correctAnswer: 1,
          explanation: "Live attenuated vaccines contain weakened forms of pathogens that can replicate but cause minimal disease."
        },
        {
          id: 11,
          question: "What are surface molecules for attachment to host cells?",
          options: [
            "Toxins",
            "Adhesins",
            "Enzymes",
            "Capsules"
          ],
          correctAnswer: 1,
          explanation: "Adhesins are microbial surface molecules that bind to specific receptors on host cells."
        },
        {
          id: 12,
          question: "What is population-level protection from vaccination?",
          options: [
            "Individual immunity",
            "Herd immunity",
            "Passive immunity",
            "Active immunity"
          ],
          correctAnswer: 1,
          explanation: "Herd immunity occurs when enough people are immune to prevent sustained transmission in a population."
        },
        {
          id: 13,
          question: "What causes toxic shock syndrome?",
          options: [
            "Endotoxin",
            "Superantigen exotoxin",
            "Neurotoxin",
            "Enterotoxin"
          ],
          correctAnswer: 1,
          explanation: "Toxic shock syndrome toxin is a superantigen that overstimulates T cells, causing massive cytokine release."
        },
        {
          id: 14,
          question: "Which T cells coordinate immune responses?",
          options: [
            "Cytotoxic T cells",
            "Helper T cells",
            "Memory T cells",
            "Regulatory T cells"
          ],
          correctAnswer: 1,
          explanation: "Helper T cells recognize antigens and secrete cytokines that coordinate different aspects of immune responses."
        },
        {
          id: 15,
          question: "What are infections by normal flora in compromised hosts?",
          options: [
            "Primary infections",
            "Opportunistic infections",
            "Latent infections",
            "Chronic infections"
          ],
          correctAnswer: 1,
          explanation: "Opportunistic infections occur when normally harmless microbes cause disease in immunocompromised hosts."
        },
        {
          id: 16,
          question: "What protein cascade enhances pathogen destruction?",
          options: [
            "Interferon system",
            "Complement system",
            "Antibody system",
            "Cytokine network"
          ],
          correctAnswer: 1,
          explanation: "The complement system is a cascade of plasma proteins that enhances phagocytosis and directly lyses pathogens."
        },
        {
          id: 17,
          question: "What mimics host molecules to evade detection?",
          options: [
            "Antigenic variation",
            "Molecular mimicry",
            "Immune suppression",
            "Intracellular hiding"
          ],
          correctAnswer: 1,
          explanation: "Molecular mimicry involves pathogens producing molecules similar to host components to avoid immune recognition."
        },
        {
          id: 18,
          question: "What are A-B toxins?",
          options: [
            "Membrane-disrupting toxins",
            "Two-component exotoxins",
            "Superantigens",
            "Endotoxins"
          ],
          correctAnswer: 1,
          explanation: "A-B toxins consist of an A (active) subunit with toxic activity and a B (binding) subunit for target cell attachment."
        },
        {
          id: 19,
          question: "What is measured to assess specific immunity?",
          options: [
            "White blood cell count",
            "Antibody titers",
            "Complement levels",
            "Skin test reactions"
          ],
          correctAnswer: 1,
          explanation: "Antibody titers measure the concentration of specific antibodies in serum, indicating immune response to particular antigens."
        },
        {
          id: 20,
          question: "What are dormant infections that can reactivate?",
          options: [
            "Acute infections",
            "Latent infections",
            "Chronic infections",
            "Opportunistic infections"
          ],
          correctAnswer: 1,
          explanation: "Latent infections remain dormant for long periods but can reactivate under certain conditions (e.g., tuberculosis, herpes viruses)."
        }
      ]
    },
    {
      id: 2,
      title: "Diagnostic Medical Microbiology",
      content: `# Module 2: Diagnostic Medical Microbiology

## Principles of Laboratory Diagnosis
Accurate diagnosis of infectious diseases is crucial for appropriate treatment and infection control. Modern diagnostic microbiology combines traditional and molecular techniques.

### Specimen Collection and Transport
**Principles**:
- Collect before antimicrobial therapy
- Use appropriate collection devices
- Avoid contamination with normal flora
- Proper labeling and documentation
**Transport Media**:
- **Preservative media** - Maintain viability without growth
- **Enrichment media** - Support growth during transport
- **Anaerobic transport** - Maintain anaerobic conditions
**Timing** - Rapid transport to laboratory (usually within 2 hours)

### Microscopic Examination
**Direct Microscopy**:
- **Wet mounts** - For motility and morphology
- **Gram stain** - Most common bacterial stain
- **Acid-fast stain** - For mycobacteria
- **Fluorescent stains** - For specific pathogens
- **Darkfield microscopy** - For spirochetes
**Advantages** - Rapid, inexpensive, guides initial therapy
**Limitations** - Low sensitivity, requires expertise

### Culture Techniques
**Culture Media**:
- **General purpose** - Support growth of many organisms
- **Selective media** - Inhibit unwanted organisms
- **Differential media** - Distinguish between organisms
- **Enriched media** - Support fastidious organisms
**Incubation Conditions**:
- **Temperature** - Usually 35-37°C (body temperature)
- **Atmosphere** - Aerobic, anaerobic, CO2-enriched
- **Duration** - Typically 24-48 hours (longer for slow growers)

### Biochemical Identification
**Conventional Tests**:
- **Carbohydrate fermentation**
- **Enzyme tests** (catalase, oxidase, coagulase)
- **Urease test**
- **Indole production**
- **Citrate utilization**
**Automated Systems**:
- **VITEK** - Automated identification and susceptibility
- **MicroScan** - Panel-based identification
- **BD Phoenix** - Automated microbiology system
**Advantages** - Standardized, reproducible, rapid

### Antimicrobial Susceptibility Testing
**Methods**:
- **Disk diffusion (Kirby-Bauer)** - Zone size interpretation
- **Broth dilution** - Minimum Inhibitory Concentration (MIC)
- **E-test** - Gradient diffusion for MIC determination
- **Automated systems** - VITEK, MicroScan, Phoenix
**Interpretation**:
- **Susceptible** - Likely effective at normal doses
- **Intermediate** - May be effective with higher doses
- **Resistant** - Unlikely to be effective
**Special Tests**:
- **Beta-lactamase testing**
- **ESBL detection**
- **MRSA screening**
- **Carbapenemase detection**

### Molecular Diagnostics
**Nucleic Acid Amplification Tests (NAATs)**:
- **PCR** - Polymerase Chain Reaction
- **Real-time PCR** - Quantitative with fluorescence
- **Multiplex PCR** - Detecting multiple targets
- **LAMP** - Loop-mediated isothermal amplification
**Applications**:
- **Pathogen detection** - Direct from clinical specimens
- **Identification** - Species-level identification
- **Resistance detection** - mecA, vanA, carbapenemase genes
- **Typing** - Strain identification for epidemiology

### Immunodiagnostic Methods
**Antibody Detection**:
- **ELISA** - Enzyme-linked immunosorbent assay
- **Western blot** - Confirmatory test for specific antibodies
- **Rapid tests** - Lateral flow immunochromatography
- **Immunofluorescence** - Using fluorescent-labeled antibodies
**Antigen Detection**:
- **Direct fluorescence** - For pathogens in specimens
- **Latex agglutination** - For bacterial antigens
- **Immunochromatography** - Rapid antigen tests
**Applications**:
- **Serology** - Past or current infection
- **Point-of-care testing** - Rapid diagnosis
- **Screening** - Blood bank screening, prenatal testing

### Mass Spectrometry in Microbiology
**MALDI-TOF**:
- **Principle** - Matrix-assisted laser desorption/ionization time-of-flight
- **Application** - Rapid microbial identification from colonies
- **Advantages** - Fast (minutes), accurate, low cost per test
- **Limitations** - Requires pure culture, database dependent
**LC-MS/MS** - For toxin detection, metabolic profiling

### Automated Systems
**Blood Culture Systems**:
- **BACTEC** - Continuous monitoring by CO2 detection
- **BacT/ALERT** - Colorimetric detection of CO2
- **VersaTREK** - Pressure-based detection
**Identification and Susceptibility Systems**:
- **VITEK 2** - Fully automated ID/AST
- **MicroScan WalkAway** - Automated incubation and reading
- **BD Phoenix** - Automated identification and susceptibility
**Advantages** - Standardization, reduced labor, rapid results

### Point-of-Care Testing
**Advantages**:
- Rapid results (minutes to hours)
- Decentralized testing
- Immediate clinical decisions
- Reduced time to treatment
**Examples**:
- **Rapid strep tests** - For Group A Streptococcus
- **Rapid influenza tests**
- **HIV rapid tests**
- **Malaria rapid diagnostic tests**
**Quality Considerations**:
- Training of non-laboratory personnel
- Quality control procedures
- Result interpretation

### Quality Assurance in Diagnostic Microbiology
**Internal Quality Control**:
- **Media QC** - Growth promotion, sterility testing
- **Reagent QC** - Stains, biochemical reagents
- **Equipment QC** - Temperature monitoring, calibration
- **Proficiency testing** - External quality assessment
**Standard Operating Procedures**:
- Documented procedures for all tests
- Regular review and updates
- Staff competency assessment
**Accreditation**:
- **CLIA** - Clinical Laboratory Improvement Amendments
- **CAP** - College of American Pathologists
- **ISO** - International standards

### Laboratory Safety
**Biosafety Levels**:
- **BSL-1** - Basic microorganisms (non-pathogenic)
- **BSL-2** - Moderate risk pathogens
- **BSL-3** - High risk, aerosol-transmitted pathogens
- **BSL-4** - Dangerous/exotic pathogens
**Safety Practices**:
- **Personal protective equipment** - Lab coats, gloves, eye protection
- **Biological safety cabinets** - For aerosol-generating procedures
- **Decontamination** - Autoclaving, chemical disinfection
- **Sharps safety** - Proper disposal of needles and sharps

### Emerging Diagnostic Technologies
**Next-Generation Sequencing**:
- **Whole genome sequencing** - For outbreak investigation
- **Metagenomics** - Direct from clinical specimens
- **Transcriptomics** - Studying gene expression
**Microfluidics** - Lab-on-a-chip technologies
**Biosensors** - Rapid detection of pathogens
**Artificial Intelligence** - Image analysis, pattern recognition
**Digital PCR** - Absolute quantification of nucleic acids

### Laboratory Reporting
**Critical Values** - Immediate reporting of life-threatening results
**Antibiogram** - Cumulative susceptibility data
**Epidemiological Data** - Reporting to public health authorities
**Turnaround Time** - Monitoring and improving result delivery
**Consultation** - Laboratory consultation for complex cases`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the most common bacterial stain?",
          options: [
            "Acid-fast stain",
            "Gram stain",
            "Fluorescent stain",
            "Wright stain"
          ],
          correctAnswer: 1,
          explanation: "The Gram stain is the most commonly used stain in clinical microbiology for bacterial classification."
        },
        {
          id: 2,
          question: "What media inhibit unwanted organisms?",
          options: [
            "General purpose media",
            "Selective media",
            "Differential media",
            "Enriched media"
          ],
          correctAnswer: 1,
          explanation: "Selective media contain substances that inhibit the growth of certain microorganisms while allowing others to grow."
        },
        {
          id: 3,
          question: "What is the lowest antibiotic concentration inhibiting growth?",
          options: [
            "MBC",
            "MIC",
            "MLC",
            "MTC"
          ],
          correctAnswer: 1,
          explanation: "Minimum Inhibitory Concentration (MIC) is the lowest concentration of an antimicrobial that inhibits visible growth."
        },
        {
          id: 4,
          question: "What molecular method amplifies specific DNA sequences?",
          options: [
            "ELISA",
            "PCR",
            "Western blot",
            "MALDI-TOF"
          ],
          correctAnswer: 1,
          explanation: "Polymerase Chain Reaction (PCR) amplifies specific DNA sequences for detection and analysis."
        },
        {
          id: 5,
          question: "What detects antibodies using enzyme-linked detection?",
          options: [
            "PCR",
            "ELISA",
            "Culture",
            "Gram stain"
          ],
          correctAnswer: 1,
          explanation: "Enzyme-Linked Immunosorbent Assay (ELISA) uses enzyme-linked antibodies to detect antigens or antibodies."
        },
        {
          id: 6,
          question: "What rapidly identifies bacteria from colonies using mass spectrometry?",
          options: [
            "PCR",
            "MALDI-TOF",
            "ELISA",
            "Disk diffusion"
          ],
          correctAnswer: 1,
          explanation: "MALDI-TOF mass spectrometry provides rapid bacterial identification by analyzing protein profiles."
        },
        {
          id: 7,
          question: "What measures antibiotic susceptibility by zone size?",
          options: [
            "Broth dilution",
            "Disk diffusion",
            "E-test",
            "Automated systems"
          ],
          correctAnswer: 1,
          explanation: "Disk diffusion (Kirby-Bauer) measures zones of inhibition around antibiotic disks to determine susceptibility."
        },
        {
          id: 8,
          question: "What biosafety level is for dangerous exotic pathogens?",
          options: [
            "BSL-1",
            "BSL-2",
            "BSL-3",
            "BSL-4"
          ],
          correctAnswer: 3,
          explanation: "BSL-4 is for work with dangerous and exotic pathogens that pose high individual risk of life-threatening disease."
        },
        {
          id: 9,
          question: "What provides rapid testing at patient care sites?",
          options: [
            "Centralized laboratory testing",
            "Point-of-care testing",
            "Reference laboratory testing",
            "Molecular diagnostic testing"
          ],
          correctAnswer: 1,
          explanation: "Point-of-care testing provides rapid diagnostic results at or near the site of patient care."
        },
        {
          id: 10,
          question: "What stains are used for mycobacteria?",
          options: [
            "Gram stain",
            "Acid-fast stain",
            "Giemsa stain",
            "Wright stain"
          ],
          correctAnswer: 1,
          explanation: "Acid-fast stains (Ziehl-Neelsen, Kinyoun) are used to detect mycobacteria which have waxy cell walls."
        },
        {
          id: 11,
          question: "What is the standard incubation temperature for pathogens?",
          options: [
            "25°C",
            "30°C",
            "35-37°C",
            "42°C"
          ],
          correctAnswer: 2,
          explanation: "Most human pathogens are incubated at 35-37°C, which approximates human body temperature."
        },
        {
          id: 12,
          question: "What detects mecA gene for MRSA?",
          options: [
            "Culture methods",
            "Molecular methods",
            "Serological methods",
            "Microscopic methods"
          ],
          correctAnswer: 1,
          explanation: "PCR and other molecular methods can detect the mecA gene which confers methicillin resistance in Staphylococcus aureus."
        },
        {
          id: 13,
          question: "What is used for continuous monitoring of blood cultures?",
          options: [
            "Gram stain",
            "BACTEC system",
            "Disk diffusion",
            "ELISA"
          ],
          correctAnswer: 1,
          explanation: "Automated blood culture systems like BACTEC continuously monitor for microbial growth by detecting CO2 production."
        },
        {
          id: 14,
          question: "What test confirms HIV antibody specificity?",
          options: [
            "Rapid test",
            "ELISA",
            "Western blot",
            "PCR"
          ],
          correctAnswer: 2,
          explanation: "Western blot is used as a confirmatory test for HIV to detect specific antibodies to viral proteins."
        },
        {
          id: 15,
          question: "What is required for external quality assessment?",
          options: [
            "Internal QC",
            "Proficiency testing",
            "Equipment calibration",
            "Staff training"
          ],
          correctAnswer: 1,
          explanation: "Proficiency testing involves analyzing unknown samples provided by external agencies to assess laboratory performance."
        },
        {
          id: 16,
          question: "What detects antigens using latex particle agglutination?",
          options: [
            "PCR",
            "Latex agglutination",
            "Culture",
            "Gram stain"
          ],
          correctAnswer: 1,
          explanation: "Latex agglutination tests use antibody-coated latex particles to detect specific antigens in clinical specimens."
        },
        {
          id: 17,
          question: "What is used for spirochete visualization?",
          options: [
            "Brightfield microscopy",
            "Darkfield microscopy",
            "Phase contrast",
            "Fluorescence microscopy"
          ],
          correctAnswer: 1,
          explanation: "Darkfield microscopy illuminates specimens against a dark background, useful for visualizing thin spirochetes."
        },
        {
          id: 18,
          question: "What is a common selective medium for staphylococci?",
          options: [
            "Blood agar",
            "MacConkey agar",
            "Mannitol salt agar",
            "Chocolate agar"
          ],
          correctAnswer: 2,
          explanation: "Mannitol salt agar is selective for staphylococci due to its high salt concentration."
        },
        {
          id: 19,
          question: "What provides absolute nucleic acid quantification?",
          options: [
            "Conventional PCR",
            "Real-time PCR",
            "Digital PCR",
            "Multiplex PCR"
          ],
          correctAnswer: 2,
          explanation: "Digital PCR provides absolute quantification of nucleic acids by partitioning samples into many individual reactions."
        },
        {
          id: 20,
          question: "What regulates clinical laboratory testing in the US?",
          options: [
            "FDA",
            "CLIA",
            "CDC",
            "WHO"
          ],
          correctAnswer: 1,
          explanation: "The Clinical Laboratory Improvement Amendments (CLIA) regulate laboratory testing in the United States."
        }
      ]
    },
    {
      id: 3,
      title: "Antimicrobial Therapy and Resistance",
      content: `# Module 3: Antimicrobial Therapy and Resistance

## Principles of Antimicrobial Therapy
Effective antimicrobial therapy requires understanding drug mechanisms, pharmacokinetics, and the relationship between drug, microbe, and host.

### Classification of Antimicrobial Agents
**By Target Organism**:
- **Antibacterial** - Against bacteria
- **Antifungal** - Against fungi
- **Antiviral** - Against viruses
- **Antiparasitic** - Against parasites
**By Mechanism**:
- **Cell wall inhibitors**
- **Protein synthesis inhibitors**
- **Nucleic acid synthesis inhibitors**
- **Metabolic pathway inhibitors**
- **Membrane disruptors**

### Antibacterial Agents
**Beta-Lactams**:
- **Penicillins** - Natural, penicillinase-resistant, extended-spectrum
- **Cephalosporins** - 1st to 5th generations
- **Carbapenems** - Broadest spectrum beta-lactams
- **Monobactams** - Aztreonam (Gram-negative only)
**Protein Synthesis Inhibitors**:
- **Aminoglycosides** - Bactericidal, concentration-dependent
- **Tetracyclines** - Broad spectrum, bacteriostatic
- **Macrolides** - Alternative for penicillin allergy
- **Oxazolidinones** - Linezolid for resistant Gram-positives
**Others**:
- **Fluoroquinolones** - Inhibit DNA gyrase and topoisomerase
- **Sulfonamides/Trimethoprim** - Folate synthesis inhibitors
- **Glycopeptides** - Vancomycin for Gram-positive infections
- **Lipopeptides** - Daptomycin for resistant infections

### Antifungal Agents
**Polyenes**:
- **Amphotericin B** - Broad spectrum, intravenous
- **Nystatin** - Topical for Candida
**Azoles**:
- **Fluconazole** - For Candida and cryptococcal infections
- **Itraconazole** - For dimorphic fungi
- **Voriconazole** - For aspergillosis
- **Posaconazole** - Broad spectrum, prophylactic
**Echinocandins**:
- **Caspofungin** - For invasive candidiasis, aspergillosis
- **Micafungin, Anidulafungin** - Similar spectrum
**Others**:
- **Flucytosine** - For cryptococcal meningitis (combined with amphotericin)
- **Griseofulvin** - For dermatophyte infections
- **Terbinafine** - For dermatophytes, onychomycosis

### Antiviral Agents
**Anti-HIV Drugs**:
- **NRTIs** - Nucleoside reverse transcriptase inhibitors
- **NNRTIs** - Non-nucleoside reverse transcriptase inhibitors
- **Protease inhibitors**
- **Integrase inhibitors**
- **Entry/fusion inhibitors**
**Anti-Herpes Drugs**:
- **Acyclovir, valacyclovir** - For HSV and VZV
- **Ganciclovir, valganciclovir** - For CMV
**Anti-Influenza Drugs**:
- **Neuraminidase inhibitors** - Oseltamivir, zanamivir
- **Cap-dependent endonuclease inhibitor** - Baloxavir
**Hepatitis Treatments**:
- **Direct-acting antivirals** - For HCV (sofosbuvir, etc.)
- **Nucleoside analogs** - For HBV (entecavir, tenofovir)

### Pharmacokinetics/Pharmacodynamics
**PK/PD Parameters**:
- **MIC** - Minimum Inhibitory Concentration
- **MBC** - Minimum Bactericidal Concentration
- **Time above MIC** - Important for beta-lactams
- **Peak/MIC ratio** - Important for aminoglycosides
- **AUC/MIC ratio** - Important for fluoroquinolones
**Dosing Strategies**:
- **Time-dependent killing** - Maintain concentration above MIC
- **Concentration-dependent killing** - High peak concentrations
- **Post-antibiotic effect** - Persistent suppression after drug removal

### Mechanisms of Antimicrobial Resistance
**Genetic Basis**:
- **Chromosomal mutations** - Spontaneous changes
- **Horizontal gene transfer** - Plasmids, transposons, integrons
**Biochemical Mechanisms**:
- **Enzyme production** - Beta-lactamases, aminoglycoside-modifying enzymes
- **Altered target sites** - Modified PBPs, ribosomal mutations
- **Reduced permeability** - Porin mutations, efflux pumps
- **Bypass pathways** - Alternative metabolic pathways
- **Biofilm formation** - Reduced antimicrobial penetration

### Major Resistance Problems
**MRSA** - Methicillin-resistant Staphylococcus aureus
**VRE** - Vancomycin-resistant Enterococci
**ESBL** - Extended-spectrum beta-lactamase producers
**Carbapenem-resistant Enterobacteriaceae (CRE)**
**Multidrug-resistant tuberculosis (MDR-TB, XDR-TB)**
**Antifungal resistance** - Azole-resistant Candida, Aspergillus
**Antiviral resistance** - HIV, influenza, herpes viruses

### Antimicrobial Stewardship
**Goals**:
- Optimize clinical outcomes
- Minimize unintended consequences
- Reduce resistance development
- Cost-effective therapy
**Strategies**:
- **Formulary restriction** - Limiting certain antibiotics
- **Prior authorization** - Requiring approval for specific drugs
- **Prospective audit and feedback** - Reviewing prescriptions
- **Guideline development** - Evidence-based protocols
- **Education** - Healthcare provider training
**Metrics**:
- Days of therapy
- Defined daily doses
- Antibiotic utilization rates
- Resistance patterns

### Combination Therapy
**Indications**:
- **Synergistic effects** - Enhanced killing
- **Broadened spectrum** - Empiric therapy
- **Preventing resistance** - Multiple targets
- **Mixed infections** - Multiple pathogens
**Examples**:
- **Beta-lactam + aminoglycoside** - For serious infections
- **Antituberculosis therapy** - Multiple drugs to prevent resistance
- **HIV therapy** - Highly active antiretroviral therapy (HAART)
- **HCV therapy** - Direct-acting antiviral combinations

### Special Populations
**Renal Impairment**:
- Dose adjustment for renally eliminated drugs
- Monitoring renal function
- Avoiding nephrotoxic drugs when possible
**Hepatic Impairment**:
- Dose adjustment for hepatically metabolized drugs
- Monitoring liver function
- Avoiding hepatotoxic drugs when possible
**Pediatrics**:
- Different pharmacokinetics
- Age-specific dosing
- Formulation considerations
**Pregnancy/Lactation**:
- Teratogenicity considerations
- Placental transfer
- Secretion in breast milk

### Adverse Effects and Monitoring
**Common Adverse Effects**:
- **Allergic reactions** - Rash, anaphylaxis
- **Gastrointestinal** - Nausea, diarrhea, C. difficile
- **Renal toxicity** - Aminoglycosides, amphotericin B
- **Hepatic toxicity** - Azoles, antituberculosis drugs
- **Neurotoxicity** - Penicillins, fluoroquinolones
- **Hematologic** - Linezolid, sulfonamides
**Therapeutic Drug Monitoring**:
- **Aminoglycosides** - Peak and trough levels
- **Vancomycin** - Trough levels, AUC monitoring
- **Voriconazole** - Trough levels
- **Antiretroviral drugs** - For adherence, resistance

### Novel Antimicrobial Approaches
**New Drug Classes**:
- **Lipoglycopeptides** - Telavancin, dalbavancin, oritavancin
- **Cephalosporin-beta-lactamase inhibitor combinations**
- **Novel tetracyclines** - Tigecycline, omadacycline, eravacycline
- **Pleuromutilins** - Lefamulin
**Alternative Approaches**:
- **Phage therapy** - Bacteriophages against resistant bacteria
- **Monoclonal antibodies** - For toxins, pathogens
- **Antimicrobial peptides** - Natural defense molecules
- **Immunomodulators** - Enhancing host defenses

### Laboratory Testing for Resistance
**Phenotypic Methods**:
- Disk diffusion
- Broth microdilution
- Gradient diffusion (E-test)
- Automated systems
**Genotypic Methods**:
- PCR for resistance genes
- Whole genome sequencing
- Microarrays
- MALDI-TOF for resistance detection
**Specialized Tests**:
- ESBL confirmation
- Carbapenemase detection
- Inducible clindamycin resistance
- Extended incubation for vancomycin resistance

### Global Antimicrobial Resistance
**WHO Priority Pathogens**:
- Critical priority - CRE, Acinetobacter, Pseudomonas
- High priority - MRSA, VRE, clarithromycin-resistant H. pylori
- Medium priority - Penicillin-non-susceptible S. pneumoniae
**One Health Approach**:
- Human medicine
- Veterinary medicine
- Agriculture
- Environment
**Surveillance Systems**:
- **GLASS** - Global Antimicrobial Resistance Surveillance System
- **CDC's AR Lab Network**
- **EARS-Net** - European Antimicrobial Resistance Surveillance Network`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What inhibits bacterial cell wall synthesis?",
          options: [
            "Aminoglycosides",
            "Beta-lactams",
            "Tetracyclines",
            "Fluoroquinolones"
          ],
          correctAnswer: 1,
          explanation: "Beta-lactam antibiotics inhibit bacterial cell wall synthesis by binding to penicillin-binding proteins."
        },
        {
          id: 2,
          question: "What is the antifungal target of azoles?",
          options: [
            "Cell wall",
            "Cell membrane ergosterol synthesis",
            "Protein synthesis",
            "DNA synthesis"
          ],
          correctAnswer: 1,
          explanation: "Azole antifungals inhibit ergosterol synthesis, disrupting fungal cell membrane integrity."
        },
        {
          id: 3,
          question: "What is the lowest antibiotic concentration killing bacteria?",
          options: [
            "MIC",
            "MBC",
            "MLC",
            "T>C"
          ],
          correctAnswer: 1,
          explanation: "Minimum Bactericidal Concentration (MBC) is the lowest concentration that kills 99.9% of bacteria."
        },
        {
          id: 4,
          question: "What mechanism involves antibiotic-modifying enzymes?",
          options: [
            "Altered target sites",
            "Enzyme production",
            "Reduced permeability",
            "Efflux pumps"
          ],
          correctAnswer: 1,
          explanation: "Bacteria produce enzymes like beta-lactamases that modify or destroy antibiotics before they can act."
        },
        {
          id: 5,
          question: "What does MRSA stand for?",
          options: [
            "Multiple-resistant Staphylococcus aureus",
            "Methicillin-resistant Staphylococcus aureus",
            "Macrolide-resistant Staphylococcus aureus",
            "Multi-sensitive Staphylococcus aureus"
          ],
          correctAnswer: 1,
          explanation: "MRSA stands for Methicillin-resistant Staphylococcus aureus, resistant to beta-lactam antibiotics."
        },
        {
          id: 6,
          question: "What optimizes antibiotic use to reduce resistance?",
          options: [
            "Antibiotic cycling",
            "Antimicrobial stewardship",
            "Empiric therapy",
            "Combination therapy"
          ],
          correctAnswer: 1,
          explanation: "Antimicrobial stewardship programs optimize antibiotic use to improve outcomes and reduce resistance."
        },
        {
          id: 7,
          question: "What is time above MIC important for?",
          options: [
            "Aminoglycosides",
            "Beta-lactams",
            "Fluoroquinolones",
            "Tetracyclines"
          ],
          correctAnswer: 1,
          explanation: "Time above MIC is the key PK/PD parameter for time-dependent killers like beta-lactams."
        },
        {
          id: 8,
          question: "What are echinocandins used for?",
          options: [
            "Bacterial infections",
            "Fungal infections",
            "Viral infections",
            "Parasitic infections"
          ],
          correctAnswer: 1,
          explanation: "Echinocandins are antifungal drugs that inhibit fungal cell wall synthesis."
        },
        {
          id: 9,
          question: "What treats HIV by inhibiting reverse transcriptase?",
          options: [
            "Protease inhibitors",
            "NRTIs",
            "Integrase inhibitors",
            "Fusion inhibitors"
          ],
          correctAnswer: 1,
          explanation: "Nucleoside Reverse Transcriptase Inhibitors (NRTIs) inhibit HIV replication by blocking reverse transcriptase."
        },
        {
          id: 10,
          question: "What is reduced antibiotic entry into cells called?",
          options: [
            "Enzyme production",
            "Reduced permeability",
            "Altered target sites",
            "Efflux pumps"
          ],
          correctAnswer: 1,
          explanation: "Reduced permeability involves changes in porin channels that decrease antibiotic entry into bacterial cells."
        },
        {
          id: 11,
          question: "What requires peak/MIC ratio optimization?",
          options: [
            "Beta-lactams",
            "Aminoglycosides",
            "Macrolides",
            "Sulfonamides"
          ],
          correctAnswer: 1,
          explanation: "Aminoglycosides exhibit concentration-dependent killing, requiring high peak/MIC ratios for optimal efficacy."
        },
        {
          id: 12,
          question: "What is ESBL?",
          options: [
            "Extended-spectrum beta-lactamase",
            "Enhanced sensitivity beta-lactam",
            "Extended-spectrum beta-lactam",
            "Enzyme-sensitive beta-lactam"
          ],
          correctAnswer: 0,
          explanation: "ESBL stands for Extended-Spectrum Beta-Lactamase, enzymes that hydrolyze most beta-lactam antibiotics."
        },
        {
          id: 13,
          question: "What monitors vancomycin therapy?",
          options: [
            "Peak levels",
            "Trough levels",
            "Random levels",
            "No monitoring needed"
          ],
          correctAnswer: 1,
          explanation: "Vancomycin trough levels are monitored to ensure adequate dosing and avoid nephrotoxicity."
        },
        {
          id: 14,
          question: "What is CRE?",
          options: [
            "Cephalosporin-resistant Enterococci",
            "Carbapenem-resistant Enterobacteriaceae",
            "Ciprofloxacin-resistant Escherichia",
            "Clarithromycin-resistant Enterobacteriaceae"
          ],
          correctAnswer: 1,
          explanation: "CRE stands for Carbapenem-resistant Enterobacteriaceae, resistant to most beta-lactam antibiotics."
        },
        {
          id: 15,
          question: "What uses bacteriophages for treatment?",
          options: [
            "Antibiotic therapy",
            "Phage therapy",
            "Vaccination",
            "Immunotherapy"
          ],
          correctAnswer: 1,
          explanation: "Phage therapy uses bacteriophages (viruses that infect bacteria) to treat bacterial infections."
        },
        {
          id: 16,
          question: "What inhibits protein synthesis by binding 50S subunit?",
          options: [
            "Aminoglycosides",
            "Macrolides",
            "Tetracyclines",
            "Fluoroquinolones"
          ],
          correctAnswer: 1,
          explanation: "Macrolides inhibit bacterial protein synthesis by binding to the 50S ribosomal subunit."
        },
        {
          id: 17,
          question: "What is HAART for HIV?",
          options: [
            "Single drug therapy",
            "Combination antiretroviral therapy",
            "Intermittent therapy",
            "Prophylactic therapy"
          ],
          correctAnswer: 1,
          explanation: "Highly Active Antiretroviral Therapy (HAART) combines multiple antiretroviral drugs to suppress HIV replication."
        },
        {
          id: 18,
          question: "What pumps antibiotics out of bacterial cells?",
          options: [
            "Porins",
            "Efflux pumps",
            "Penicillin-binding proteins",
            "Beta-lactamases"
          ],
          correctAnswer: 1,
          explanation: "Efflux pumps actively transport antibiotics out of bacterial cells, reducing intracellular concentrations."
        },
        {
          id: 19,
          question: "What is therapeutic drug monitoring?",
          options: [
            "Measuring drug concentrations in blood",
            "Measuring bacterial growth",
            "Measuring immune response",
            "Measuring organ function"
          ],
          correctAnswer: 0,
          explanation: "Therapeutic drug monitoring measures drug concentrations in blood to optimize dosing and minimize toxicity."
        },
        {
          id: 20,
          question: "What is the One Health approach to resistance?",
          options: [
            "Human medicine only",
            "Integrating human, animal, and environmental health",
            "Veterinary medicine only",
            "Environmental monitoring only"
          ],
          correctAnswer: 1,
          explanation: "One Health recognizes that human, animal, and environmental health are interconnected in addressing antimicrobial resistance."
        }
      ]
    },
    {
      id: 4,
      title: "Healthcare-Associated Infections",
      content: `# Module 4: Healthcare-Associated Infections

## Introduction to Healthcare-Associated Infections
Healthcare-associated infections (HAIs) are infections acquired during healthcare delivery in any setting. They represent a major patient safety concern and economic burden.

### Definitions and Scope
**HAI Definition** - Infection occurring during healthcare delivery not present or incubating at admission
**Types of Settings**:
- **Hospitals** - Acute care facilities
- **Long-term care** - Nursing homes, rehabilitation
- **Outpatient** - Clinics, dialysis centers, ambulatory surgery
- **Home healthcare** - Home infusion, wound care
**Burden**:
- Increased morbidity and mortality
- Prolonged hospital stays
- Additional healthcare costs
- Antimicrobial resistance promotion

### Major HAI Types
**Central Line-Associated Bloodstream Infections (CLABSI)**:
- Related to central venous catheters
- Common pathogens: Coagulase-negative staphylococci, S. aureus, Candida
- Prevention: Aseptic insertion, proper maintenance
**Catheter-Associated Urinary Tract Infections (CAUTI)**:
- Most common HAI
- Related to urinary catheter use
- Prevention: Avoid unnecessary catheters, early removal
**Ventilator-Associated Pneumonia (VAP)**:
- Pneumonia in mechanically ventilated patients
- Common pathogens: Gram-negative bacilli, S. aureus
- Prevention: Elevation of head, oral care, sedation vacations
**Surgical Site Infections (SSI)**:
- Infection at surgical site within 30 days (or 90 with implant)
- Classification: Superficial, deep, organ/space
- Prevention: Appropriate antibiotic prophylaxis, skin preparation

### Epidemiology and Surveillance
**Incidence Rates**:
- Varies by country, facility type, patient population
- Typically expressed as infections per 1000 device-days or procedures
- Benchmarking against national rates
**Surveillance Methods**:
- **Active surveillance** - Regular review of cases
- **Passive surveillance** - Relying on clinical reporting
- **Targeted surveillance** - Focusing on high-risk areas
- **Laboratory-based surveillance** - Using microbiology data
**Standardized Definitions**:
- **CDC/NHSN definitions** - Standard criteria for HAI determination
- **Clinical vs laboratory criteria**
- **Physician diagnosis documentation**

### Risk Factors for HAIs
**Patient Factors**:
- Age extremes (very young, elderly)
- Underlying diseases (diabetes, renal failure, malignancy)
- Immunosuppression
- Malnutrition
- Obesity
**Procedure-Related Factors**:
- Invasive devices (catheters, ventilators)
- Surgical procedures
- Length of procedure
- Contamination during procedure
**Healthcare Factors**:
- Length of stay
- Antibiotic exposure
- Healthcare worker compliance with infection control
- Environmental contamination

### Pathogens Causing HAIs
**Bacterial Pathogens**:
- **Gram-positive**: MRSA, VRE, Coagulase-negative staphylococci
- **Gram-negative**: E. coli, Klebsiella, Pseudomonas, Acinetobacter
- **Anaerobic**: Clostridium difficile
**Fungal Pathogens**:
- Candida species
- Aspergillus species (in construction areas)
**Viral Pathogens**:
- Respiratory viruses (influenza, RSV, COVID-19)
- Bloodborne viruses (HIV, HBV, HCV - from needlesticks)
**Multidrug-resistant Organisms (MDROs)**:
- MRSA, VRE, ESBL producers, CRE, MDR Pseudomonas
- Special infection control precautions required

### Prevention Strategies
**Basic Infection Control**:
- Hand hygiene
- Standard precautions
- Environmental cleaning
- Sterile technique for procedures
**Device-Associated Infection Prevention**:
- **CLABSI prevention bundles**
- **CAUTI prevention bundles**
- **VAP prevention bundles**
**Surgical Site Infection Prevention**:
- Preoperative bathing with antiseptics
- Appropriate antibiotic prophylaxis timing
- Maintaining normothermia
- Glycemic control
- Proper hair removal

### Isolation Precautions
**Standard Precautions**:
- Apply to all patients
- Hand hygiene, PPE based on anticipated exposure
- Safe injection practices
- Respiratory hygiene/cough etiquette
**Transmission-Based Precautions**:
- **Contact precautions** - For MDROs, C. difficile
- **Droplet precautions** - For influenza, pertussis, meningococcus
- **Airborne precautions** - For tuberculosis, measles, varicella
**Protective Isolation**:
- For severely immunocompromised patients
- HEPA filtration, positive pressure rooms
- Restrictions on plants, fresh fruits/vegetables

### Environmental Control
**Cleaning and Disinfection**:
- **Routine cleaning** - Daily cleaning of patient rooms
- **Terminal cleaning** - After patient discharge or transfer
- **Disinfection levels**: Low, intermediate, high-level
- **Monitoring**: Visual inspection, ATP testing, cultures
**Water Systems**:
- Legionella prevention in water systems
- Regular flushing, temperature maintenance
- Point-of-use filters for high-risk patients
**Ventilation Systems**:
- Air exchange rates
- HEPA filtration for protective environments
- Negative pressure for airborne isolation
- Monitoring pressure differentials

### Healthcare Worker Safety
**Occupational Exposure Risks**:
- Bloodborne pathogens
- Respiratory pathogens
- Direct contact infections
- Needlestick injuries
**Prevention**:
- **PPE use** - Gloves, gowns, masks, eye protection
- **Needle safety devices** - Engineered safety features
- **Post-exposure prophylaxis** - For HIV, HBV exposure
- **Vaccination** - Influenza, hepatitis B, COVID-19, others
**Surveillance**:
- Tracking exposures and infections
- Early reporting and management
- Worker compensation considerations

### Antimicrobial Stewardship in HAIs
**Role in HAI Prevention**:
- Reducing C. difficile infections
- Decreasing MDRO selection pressure
- Optimizing surgical prophylaxis
- Guiding empiric therapy for HAIs
**Strategies**:
- Formulary restrictions
- Prior authorization
- Prospective audit and feedback
- Clinical guidelines and pathways
- Rapid diagnostics to guide therapy

### Outbreak Investigation and Management
**Outbreak Recognition**:
- Increased incidence above baseline
- Clustering of cases in time/place
- Unusual pathogens or resistance patterns
**Investigation Steps**:
- Confirm outbreak existence
- Case definition development
- Case finding and line listing
- Epidemic curve construction
- Hypothesis generation and testing
- Control measure implementation
**Control Measures**:
- Enhanced infection control
- Cohort staffing
- Unit closure if necessary
- Communication with public health

### Regulatory and Reporting Requirements
**National Reporting**:
- **CDC NHSN** - National Healthcare Safety Network
- **State requirements** - Vary by jurisdiction
- **Public reporting** - Some HAIs publicly reported
**Accreditation Requirements**:
- **Joint Commission** - Infection control standards
- **CMS** - Conditions of participation
- **State licensing** - Minimum standards
**Quality Improvement**:
- HAI reduction goals
- Benchmarking against national data
- Performance improvement projects
- Staff education and training

### Economic Impact
**Direct Costs**:
- Extended hospital stays
- Additional diagnostic tests
- Antimicrobial therapy
- Readmission costs
**Indirect Costs**:
- Lost productivity
- Disability
- Litigation
- Reputational damage to facilities
**Cost-Effectiveness of Prevention**:
- Investment in prevention saves costs
- ROI calculations for infection control programs
- Value-based purchasing considerations

### Future Challenges
**Emerging Pathogens**:
- Novel MDROs
- Pandemic viruses
- Environmental fungi
**Changing Healthcare Delivery**:
- Increased outpatient procedures
- Telemedicine expansion
- Home healthcare growth
**Technological Solutions**:
- Electronic surveillance systems
- Real-time locating systems for hand hygiene
- UV-C disinfection robots
- Antimicrobial surfaces and materials
**Global Considerations**:
- International travel and disease spread
- Resource-limited settings
- Global surveillance networks`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are infections acquired during healthcare delivery?",
          options: [
            "Community-acquired infections",
            "Healthcare-associated infections",
            "Occupational infections",
            "Zoonotic infections"
          ],
          correctAnswer: 1,
          explanation: "Healthcare-associated infections (HAIs) are infections patients acquire during the course of receiving healthcare."
        },
        {
          id: 2,
          question: "What is the most common type of HAI?",
          options: [
            "CLABSI",
            "CAUTI",
            "VAP",
            "SSI"
          ],
          correctAnswer: 1,
          explanation: "Catheter-associated urinary tract infections (CAUTI) are the most common healthcare-associated infections."
        },
        {
          id: 3,
          question: "What infections are related to central venous catheters?",
          options: [
            "CAUTI",
            "CLABSI",
            "VAP",
            "SSI"
          ],
          correctAnswer: 1,
          explanation: "Central line-associated bloodstream infections (CLABSI) are bloodstream infections related to central venous catheters."
        },
        {
          id: 4,
          question: "What applies to all patient care?",
          options: [
            "Contact precautions",
            "Standard precautions",
            "Droplet precautions",
            "Airborne precautions"
          ],
          correctAnswer: 1,
          explanation: "Standard precautions apply to all patient care, regardless of infection status."
        },
        {
          id: 5,
          question: "What is key to preventing most HAIs?",
          options: [
            "Antibiotic prophylaxis",
            "Hand hygiene",
            "Isolation rooms",
            "Environmental cleaning"
          ],
          correctAnswer: 1,
          explanation: "Hand hygiene is the single most important measure for preventing healthcare-associated infections."
        },
        {
          id: 6,
          question: "What infections occur at surgical sites?",
          options: [
            "CLABSI",
            "CAUTI",
            "VAP",
            "SSI"
          ],
          correctAnswer: 3,
          explanation: "Surgical site infections (SSI) occur at the site of surgery within 30 days (or 90 days with implants)."
        },
        {
          id: 7,
          question: "What precautions are for tuberculosis?",
          options: [
            "Contact precautions",
            "Droplet precautions",
            "Airborne precautions",
            "Standard precautions"
          ],
          correctAnswer: 2,
          explanation: "Airborne precautions are required for diseases transmitted by airborne droplet nuclei, like tuberculosis."
        },
        {
          id: 8,
          question: "What is pneumonia in ventilated patients?",
          options: [
            "CLABSI",
            "CAUTI",
            "VAP",
            "SSI"
          ],
          correctAnswer: 2,
          explanation: "Ventilator-associated pneumonia (VAP) is pneumonia that develops in patients on mechanical ventilation."
        },
        {
          id: 9,
          question: "What system tracks HAIs in the US?",
          options: [
            "WHO",
            "CDC NHSN",
            "FDA",
            "CMS"
          ],
          correctAnswer: 1,
          explanation: "The CDC's National Healthcare Safety Network (NHSN) tracks healthcare-associated infections nationally."
        },
        {
          id: 10,
          question: "What infections require contact precautions?",
          options: [
            "Influenza",
            "MRSA",
            "Tuberculosis",
            "Measles"
          ],
          correctAnswer: 1,
          explanation: "Contact precautions are used for infections spread by direct or indirect contact, like MRSA."
        },
        {
          id: 11,
          question: "What reduces C. difficile infections?",
          options: [
            "Increased antibiotic use",
            "Antimicrobial stewardship",
            "Reduced hand hygiene",
            "More invasive devices"
          ],
          correctAnswer: 1,
          explanation: "Antimicrobial stewardship reduces inappropriate antibiotic use, decreasing C. difficile infections."
        },
        {
          id: 12,
          question: "What is terminal cleaning?",
          options: [
            "Daily room cleaning",
            "Cleaning after patient discharge",
            "Weekly deep cleaning",
            "Emergency cleaning"
          ],
          correctAnswer: 1,
          explanation: "Terminal cleaning refers to thorough cleaning and disinfection of a room after a patient is discharged or transferred."
        },
        {
          id: 13,
          question: "What is needed for airborne infection isolation?",
          options: [
            "Positive pressure rooms",
            "Negative pressure rooms",
            "Standard rooms",
            "Open wards"
          ],
          correctAnswer: 1,
          explanation: "Negative pressure rooms are required for airborne infection isolation to prevent contaminated air from escaping."
        },
        {
          id: 14,
          question: "What prevention uses bundles?",
          options: [
            "Only hand hygiene",
            "Device-associated infections",
            "Only surgical infections",
            "Only environmental cleaning"
          ],
          correctAnswer: 1,
          explanation: "Bundles of evidence-based practices are used to prevent device-associated infections like CLABSI, CAUTI, and VAP."
        },
        {
          id: 15,
          question: "What is HEPA filtration used for?",
          options: [
            "Contact precautions",
            "Protective isolation",
            "Droplet precautions",
            "Standard precautions"
          ],
          correctAnswer: 1,
          explanation: "HEPA filtration is used in protective isolation rooms for immunocompromised patients to remove airborne particles."
        },
        {
          id: 16,
          question: "What is post-exposure prophylaxis for?",
          options: [
            "Preventing all infections",
            "Preventing infections after occupational exposure",
            "Treating active infections",
            "Vaccinating healthcare workers"
          ],
          correctAnswer: 1,
          explanation: "Post-exposure prophylaxis is given to healthcare workers after exposure to certain pathogens like HIV or HBV."
        },
        {
          id: 17,
          question: "What is increased incidence above baseline?",
          options: [
            "Endemic",
            "Outbreak",
            "Pandemic",
            "Sporadic"
          ],
          correctAnswer: 1,
          explanation: "An outbreak is defined as an increase in cases above the expected baseline level in a specific population and time."
        },
        {
          id: 18,
          question: "What are MDROs?",
          options: [
            "Minimally drug-resistant organisms",
            "Multidrug-resistant organisms",
            "Moderately drug-resistant organisms",
            "Mostly drug-resistant organisms"
          ],
          correctAnswer: 1,
          explanation: "MDROs are multidrug-resistant organisms resistant to multiple antimicrobial agents."
        },
        {
          id: 19,
          question: "What is ATP testing used for?",
          options: [
            "Microbial identification",
            "Cleaning effectiveness monitoring",
            "Antibiotic susceptibility",
            "Infection diagnosis"
          ],
          correctAnswer: 1,
          explanation: "ATP testing measures adenosine triphosphate to assess cleaning effectiveness on environmental surfaces."
        },
        {
          id: 20,
          question: "What are conditions of participation requirements from?",
          options: [
            "CDC",
            "CMS",
            "FDA",
            "WHO"
          ],
          correctAnswer: 1,
          explanation: "The Centers for Medicare & Medicaid Services (CMS) sets conditions of participation that healthcare facilities must meet."
        }
      ]
    },
    {
      id: 5,
      title: "System-Specific Infections",
      content: `# Module 5: System-Specific Infections

## Introduction to System-Specific Infections
Different organ systems have unique susceptibilities to specific pathogens based on anatomy, physiology, and local defense mechanisms. Understanding these patterns guides diagnosis and treatment.

### Central Nervous System Infections
**Meningitis**:
- **Bacterial**: S. pneumoniae, N. meningitidis, H. influenzae, Listeria (neonates, elderly)
- **Viral**: Enteroviruses, herpes viruses, arboviruses
- **Fungal**: Cryptococcus (immunocompromised)
- **Diagnosis**: CSF analysis (cell count, chemistry, culture, PCR)
- **Treatment**: Empiric antibiotics based on age and risk factors
**Encephalitis**:
- **Viral**: Herpes simplex, West Nile, Japanese encephalitis
- **Autoimmune**: Anti-NMDA receptor encephalitis
- **Diagnosis**: MRI, EEG, CSF analysis, serology
- **Treatment**: Antivirals for specific viruses, supportive care
**Brain Abscess**:
- **Sources**: Contiguous spread (sinusitis, otitis), hematogenous, trauma
- **Pathogens**: Mixed aerobic and anaerobic bacteria
- **Diagnosis**: Neuroimaging (CT, MRI), culture
- **Treatment**: Surgical drainage, prolonged antibiotics

### Respiratory Tract Infections
**Upper Respiratory Infections**:
- **Common cold**: Rhinoviruses, coronaviruses
- **Pharyngitis**: Viral (adenovirus, EBV), bacterial (Group A Streptococcus)
- **Sinusitis**: Viral, bacterial (S. pneumoniae, H. influenzae)
- **Otitis media**: S. pneumoniae, H. influenzae, Moraxella
**Lower Respiratory Infections**:
- **Community-acquired pneumonia**: S. pneumoniae, H. influenzae, atypical pathogens (Mycoplasma, Legionella)
- **Hospital-acquired pneumonia**: Gram-negative rods, S. aureus
- **Tuberculosis**: Mycobacterium tuberculosis
- **Diagnosis**: Chest X-ray, sputum culture, PCR, serology
- **Treatment**: Antibiotics based on likely pathogens and severity

### Cardiovascular Infections
**Infective Endocarditis**:
- **Acute**: S. aureus (often healthcare-associated)
- **Subacute**: Viridans streptococci (dental origin)
- **Prosthetic valve**: Coagulase-negative staphylococci
- **Diagnosis**: Modified Duke criteria, blood cultures, echocardiography
- **Treatment**: Prolonged intravenous antibiotics, sometimes surgery
**Myocarditis**:
- **Viral**: Coxsackievirus, adenovirus, COVID-19
- **Bacterial**: Rare, usually complication of other infections
- **Diagnosis**: Cardiac MRI, biopsy, PCR from tissue
- **Treatment**: Supportive, sometimes immunosuppression for autoimmune
**Pericarditis**:
- **Viral**: Coxsackievirus, echovirus
- **Tuberculous**: In endemic areas
- **Diagnosis**: Echocardiography, pericardiocentesis
- **Treatment**: NSAIDs, colchicine, sometimes pericardiectomy

### Gastrointestinal Infections
**Gastroenteritis**:
- **Bacterial**: Salmonella, Shigella, Campylobacter, E. coli
- **Viral**: Norovirus, rotavirus
- **Parasitic**: Giardia, Cryptosporidium, Entamoeba
- **Diagnosis**: Stool culture, PCR, antigen tests, ova and parasites
- **Treatment**: Rehydration, sometimes antibiotics for specific pathogens
**Hepatitis**:
- **Viral**: Hepatitis A, B, C, D, E
- **Other**: CMV, EBV, toxoplasmosis in immunocompromised
- **Diagnosis**: Liver enzymes, viral serology, PCR
- **Treatment**: Supportive for acute, antivirals for chronic hepatitis B and C
**Intra-abdominal Infections**:
- **Peritonitis**: Secondary (perforation), primary (spontaneous bacterial)
- **Abscesses**: Liver, splenic, pancreatic
- **Pathogens**: Mixed aerobic and anaerobic flora
- **Diagnosis**: Imaging (CT, ultrasound), culture
- **Treatment**: Source control, broad-spectrum antibiotics

### Genitourinary Infections
**Urinary Tract Infections**:
- **Cystitis**: E. coli, Staphylococcus saprophyticus (young women)
- **Pyelonephritis**: E. coli, other Enterobacteriaceae
- **Prostatitis**: E. coli, other uropathogens
- **Diagnosis**: Urinalysis, urine culture
- **Treatment**: Antibiotics based on susceptibility
**Sexually Transmitted Infections**:
- **Bacterial**: Chlamydia, gonorrhea, syphilis
- **Viral**: HIV, herpes simplex, HPV
- **Diagnosis**: NAATs, culture, serology
- **Treatment**: Antibiotics for bacterial, antivirals for viral
**Pelvic Inflammatory Disease**:
- **Pathogens**: N. gonorrhoeae, C. trachomatis, mixed anaerobes
- **Complications**: Infertility, ectopic pregnancy, chronic pain
- **Diagnosis**: Clinical criteria, sometimes laparoscopy
- **Treatment**: Dual antibiotic therapy

### Skin and Soft Tissue Infections
**Superficial Infections**:
- **Impetigo**: S. aureus, S. pyogenes
- **Cellulitis**: S. pyogenes, S. aureus
- **Erysipelas**: S. pyogenes (face, lower extremities)
- **Diagnosis**: Clinical, sometimes culture
- **Treatment**: Antibiotics, topical or systemic
**Deep Infections**:
- **Necrotizing fasciitis**: Mixed aerobic/anaerobic, S. pyogenes
- **Gas gangrene**: Clostridium perfringens
- **Diagnosis**: Clinical (severe pain out of proportion), imaging, surgical exploration
- **Treatment**: Emergent surgical debridement, broad-spectrum antibiotics
**Bone and Joint Infections**:
- **Osteomyelitis**: S. aureus (most common), others based on setting
- **Septic arthritis**: S. aureus, N. gonorrhoeae (young adults)
- **Diagnosis**: Imaging, bone/joint aspiration and culture
- **Treatment**: Prolonged antibiotics, often surgical intervention

### Bloodstream Infections
**Bacteremia and Sepsis**:
- **Sources**: Urinary tract, respiratory, abdominal, skin/soft tissue, unknown
- **Pathogens**: Varies by source and patient factors
- **Diagnosis**: Blood cultures, molecular tests
- **Treatment**: Source control, empiric then targeted antibiotics
**Fungemia**:
- **Candidemia**: Candida species
- **Other fungi**: In immunocompromised hosts
- **Diagnosis**: Blood cultures, fungal markers (β-D-glucan)
- **Treatment**: Antifungals, source control (remove catheters)
**Viremia**:
- **CMV**: In transplant recipients
- **Other**: Various viruses in specific contexts
- **Diagnosis**: PCR, antigen tests
- **Treatment**: Antivirals when available

### Infections in Special Populations
**Neonates**:
- **Group B Streptococcus**: Early-onset sepsis
- **E. coli**: Early-onset sepsis
- **Listeria**: Meningitis, sepsis
- **Herpes simplex**: Severe disseminated disease
- **Special considerations**: Immature immune system, maternal antibody protection
**Pregnant Women**:
- **Listeriosis**: Risk to fetus
- **TORCH infections**: Toxoplasma, rubella, CMV, herpes
- **UTIs**: Increased risk of pyelonephritis
- **Special considerations**: Antibiotic safety, fetal effects
**Immunocompromised Hosts**:
- **Neutropenic fever**: Bacterial, fungal infections
- **Opportunistic infections**: Pneumocystis, toxoplasmosis, cryptococcosis
- **Viral reactivation**: CMV, EBV, HSV, VZV
- **Special considerations**: Broad differential, aggressive diagnostics, empiric therapy

### Zoonotic and Vector-Borne Infections
**Tick-Borne Diseases**:
- **Lyme disease**: Borrelia burgdorferi
- **Anaplasmosis/Ehrlichiosis**: Anaplasma, Ehrlichia
- **Rocky Mountain spotted fever**: Rickettsia rickettsii
- **Babesiosis**: Babesia microti
**Mosquito-Borne Diseases**:
- **Malaria**: Plasmodium species
- **Dengue**: Dengue virus
- **Zika**: Zika virus
- **West Nile**: West Nile virus
**Other Zoonoses**:
- **Leptospirosis**: Contact with animal urine
- **Brucellosis**: Unpasteurized dairy, animal contact
- **Q fever**: Coxiella burnetii (farm animals)
- **Psittacosis**: Chlamydia psittaci (birds)

### Diagnostic Approach by System
**Clinical Assessment**:
- Localizing symptoms and signs
- Epidemiology (exposures, travel, occupation)
- Host factors (immune status, comorbidities)
**Laboratory Testing**:
- Site-specific specimen collection
- Appropriate transport and processing
- Test selection based on likely pathogens
**Imaging**:
- X-rays, CT, MRI, ultrasound
- Nuclear medicine scans (gallium, white cell)
- Echocardiography for endocarditis
**Special Procedures**:
- Lumbar puncture for CNS infections
- Biopsy for tissue diagnosis
- Endoscopy for GI infections
- Arthrocentesis for joint infections

### Antimicrobial Selection by System
**Empiric Therapy Principles**:
- Likely pathogens based on site
- Local resistance patterns
- Patient factors (allergies, renal/hepatic function)
- Severity of illness
**Targeted Therapy**:
- Based on culture and susceptibility results
- Narrowest spectrum possible
- Optimal dose, route, duration
**Monitoring Response**:
- Clinical improvement
- Laboratory markers (WBC, CRP, procalcitonin)
- Microbiological clearance when measurable
- Adjustment based on response and toxicity`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the most common cause of bacterial meningitis in adults?",
          options: [
            "Neisseria meningitidis",
            "Streptococcus pneumoniae",
            "Haemophilus influenzae",
            "Listeria monocytogenes"
          ],
          correctAnswer: 1,
          explanation: "Streptococcus pneumoniae is the most common cause of bacterial meningitis in adults."
        },
        {
          id: 2,
          question: "What causes most community-acquired pneumonia?",
          options: [
            "Viruses",
            "Streptococcus pneumoniae",
            "Mycoplasma pneumoniae",
            "Legionella pneumophila"
          ],
          correctAnswer: 1,
          explanation: "Streptococcus pneumoniae is the most common cause of community-acquired pneumonia."
        },
        {
          id: 3,
          question: "What is infective endocarditis on prosthetic valves often caused by?",
          options: [
            "Viridans streptococci",
            "Staphylococcus aureus",
            "Coagulase-negative staphylococci",
            "Enterococci"
          ],
          correctAnswer: 2,
          explanation: "Coagulase-negative staphylococci are common causes of prosthetic valve endocarditis."
        },
        {
          id: 4,
          question: "What is the most common cause of urinary tract infections?",
          options: [
            "Staphylococcus saprophyticus",
            "Escherichia coli",
            "Klebsiella pneumoniae",
            "Proteus mirabilis"
          ],
          correctAnswer: 1,
          explanation: "Escherichia coli is the most common cause of both community and hospital-acquired UTIs."
        },
        {
          id: 5,
          question: "What causes necrotizing fasciitis?",
          options: [
            "Staphylococcus aureus alone",
            "Streptococcus pyogenes alone",
            "Mixed aerobic and anaerobic bacteria",
            "Only Clostridium species"
          ],
          correctAnswer: 2,
          explanation: "Necrotizing fasciitis is often caused by mixed aerobic and anaerobic bacteria, though S. pyogenes can cause monomicrobial cases."
        },
        {
          id: 6,
          question: "What is the most common cause of septic arthritis in young adults?",
          options: [
            "Staphylococcus aureus",
            "Neisseria gonorrhoeae",
            "Streptococcus pneumoniae",
            "Haemophilus influenzae"
          ],
          correctAnswer: 1,
          explanation: "Neisseria gonorrhoeae is a common cause of septic arthritis in sexually active young adults."
        },
        {
          id: 7,
          question: "What causes early-onset neonatal sepsis?",
          options: [
            "Group B Streptococcus",
            "Escherichia coli",
            "Listeria monocytogenes",
            "All of the above"
          ],
          correctAnswer: 3,
          explanation: "Group B Streptococcus, E. coli, and Listeria are all important causes of early-onset neonatal sepsis."
        },
        {
          id: 8,
          question: "What tick-borne disease causes erythema migrans rash?",
          options: [
            "Rocky Mountain spotted fever",
            "Lyme disease",
            "Ehrlichiosis",
            "Babesiosis"
          ],
          correctAnswer: 1,
          explanation: "Lyme disease, caused by Borrelia burgdorferi, typically presents with an erythema migrans rash."
        },
        {
          id: 9,
          question: "What is the most common cause of viral gastroenteritis?",
          options: [
            "Rotavirus",
            "Norovirus",
            "Adenovirus",
            "Astrovirus"
          ],
          correctAnswer: 1,
          explanation: "Norovirus is the most common cause of viral gastroenteritis in all age groups."
        },
        {
          id: 10,
          question: "What causes pelvic inflammatory disease?",
          options: [
            "Only Neisseria gonorrhoeae",
            "Only Chlamydia trachomatis",
            "Both N. gonorrhoeae and C. trachomatis",
            "Only anaerobic bacteria"
          ],
          correctAnswer: 2,
          explanation: "PID is often caused by N. gonorrhoeae, C. trachomatis, or both, sometimes with mixed anaerobic bacteria."
        },
        {
          id: 11,
          question: "What is the most common cause of osteomyelitis?",
          options: [
            "Streptococcus pyogenes",
            "Staphylococcus aureus",
            "Pseudomonas aeruginosa",
            "Mycobacterium tuberculosis"
          ],
          correctAnswer: 1,
          explanation: "Staphylococcus aureus is the most common cause of osteomyelitis in all age groups."
        },
        {
          id: 12,
          question: "What causes gas gangrene?",
          options: [
            "Streptococcus pyogenes",
            "Clostridium perfringens",
            "Mixed aerobic bacteria",
            "Staphylococcus aureus"
          ],
          correctAnswer: 1,
          explanation: "Gas gangrene is typically caused by Clostridium perfringens and other clostridial species."
        },
        {
          id: 13,
          question: "What virus causes congenital infections in the TORCH complex?",
          options: [
            "Rubella",
            "Cytomegalovirus",
            "Herpes simplex",
            "All of the above"
          ],
          correctAnswer: 3,
          explanation: "TORCH includes Toxoplasma, Rubella, CMV, and Herpes simplex, all causing congenital infections."
        },
        {
          id: 14,
          question: "What is the most common cause of cellulitis?",
          options: [
            "Staphylococcus aureus",
            "Streptococcus pyogenes",
            "Mixed infection",
            "Pseudomonas aeruginosa"
          ],
          correctAnswer: 1,
          explanation: "Streptococcus pyogenes (Group A Streptococcus) is the most common cause of cellulitis."
        },
        {
          id: 15,
          question: "What causes most cases of infectious diarrhea in children?",
          options: [
            "Bacteria",
            "Viruses",
            "Parasites",
            "Fungi"
          ],
          correctAnswer: 1,
          explanation: "Viruses, particularly rotavirus and norovirus, cause most cases of infectious diarrhea in children."
        },
        {
          id: 16,
          question: "What is the most common cause of bacterial endocarditis in native valves?",
          options: [
            "Staphylococcus aureus",
            "Viridans streptococci",
            "Enterococci",
            "Coagulase-negative staphylococci"
          ],
          correctAnswer: 1,
          explanation: "Viridans streptococci are the most common cause of subacute bacterial endocarditis on native valves."
        },
        {
          id: 17,
          question: "What causes herpes simplex encephalitis?",
          options: [
            "HSV-1",
            "HSV-2",
            "Both HSV-1 and HSV-2",
            "Varicella-zoster virus"
          ],
          correctAnswer: 2,
          explanation: "Herpes simplex encephalitis is most commonly caused by HSV-1, though HSV-2 can also cause it."
        },
        {
          id: 18,
          question: "What is the most common sexually transmitted bacterial infection?",
          options: [
            "Gonorrhea",
            "Chlamydia",
            "Syphilis",
            "Trichomoniasis"
          ],
          correctAnswer: 1,
          explanation: "Chlamydia trachomatis infection is the most commonly reported bacterial sexually transmitted infection."
        },
        {
          id: 19,
          question: "What causes Q fever?",
          options: [
            "Rickettsia rickettsii",
            "Coxiella burnetii",
            "Bartonella henselae",
            "Ehrlichia chaffeensis"
          ],
          correctAnswer: 1,
          explanation: "Q fever is caused by Coxiella burnetii, typically acquired from farm animals."
        },
        {
          id: 20,
          question: "What is the most common cause of candidemia?",
          options: [
            "Candida albicans",
            "Candida glabrata",
            "Candida tropicalis",
            "Candida parapsilosis"
          ],
          correctAnswer: 0,
          explanation: "Candida albicans is still the most common cause of candidemia, though non-albicans species are increasing."
        }
      ]
    },
    {
      id: 6,
      title: "Public Health and Emerging Infections",
      content: `# Module 6: Public Health and Emerging Infections

## Public Health Microbiology
Public health microbiology focuses on preventing and controlling infectious diseases at the population level through surveillance, outbreak investigation, and implementation of control measures.

### Principles of Epidemiology
**Measures of Disease Frequency**:
- **Incidence** - New cases in population over time
- **Prevalence** - Total cases in population at specific time
- **Attack rate** - Proportion developing disease after exposure
- **Mortality rate** - Deaths from disease in population
**Study Designs**:
- **Descriptive studies** - Who, where, when of disease occurrence
- **Analytic studies** - Case-control, cohort studies to identify risk factors
- **Experimental studies** - Randomized controlled trials
**Transmission Dynamics**:
- **Reproductive number (R0)** - Average number secondary cases from one case
- **Herd immunity threshold** - Proportion immune needed to stop transmission
- **Chain of infection** - Source, transmission, susceptible host

### Surveillance Systems
**Types of Surveillance**:
- **Passive surveillance** - Routine reporting by healthcare providers
- **Active surveillance** - Regular contact with providers to solicit reports
- **Sentinel surveillance** - Selected sites reporting specific diseases
- **Syndromic surveillance** - Based on symptoms rather than diagnoses
**National Systems**:
- **CDC notifiable diseases** - Mandatory reporting of specific conditions
- **WHO International Health Regulations** - Global disease reporting
- **Electronic health record mining** - Automated data extraction
**Data Analysis**:
- **Time trends** - Seasonal patterns, outbreaks
- **Geographic distribution** - Mapping disease occurrence
- **Demographic patterns** - Age, gender, ethnicity distributions

### Outbreak Investigation
**Steps in Investigation**:
1. **Prepare for field work** - Gather team, supplies, information
2. **Confirm outbreak existence** - Compare with baseline rates
3. **Define cases** - Develop case definition (clinical, laboratory, epidemiological)
4. **Search for cases** - Active case finding
5. **Generate hypotheses** - Based on initial information
6. **Test hypotheses** - Analytic studies
7. **Implement control measures** - While investigation continues
8. **Communicate findings** - Reports to stakeholders
**Tools and Techniques**:
- **Epidemic curves** - Display cases over time
- **Spot maps** - Geographic distribution
- **Line listings** - Detailed case information
- **Statistical analysis** - Attack rates, relative risks

### Emerging and Re-emerging Infections
**Factors Driving Emergence**:
- **Microbial adaptation** - Genetic changes, antibiotic resistance
- **Human demographics** - Population growth, urbanization, aging
- **Human behavior** - Travel, sexual practices, drug use
- **Technology and industry** - Food processing, medical procedures
- **Environmental changes** - Climate change, deforestation
- **Breakdown of public health** - War, poverty, inadequate healthcare
**Recent Examples**:
- **COVID-19** - SARS-CoV-2 pandemic
- **Ebola** - West African outbreak 2014-2016
- **Zika** - Microcephaly and Guillain-Barré syndrome association
- **Antimicrobial-resistant infections** - Global health threat

### Pandemic Preparedness and Response
**Pandemic Phases** (WHO Framework):
1. **Interpandemic period** - Surveillance, planning, preparedness
2. **Alert period** - New virus in animals, human cases
3. **Pandemic period** - Sustained human transmission
4. **Transition period** - Reduced activity, post-peak
**Response Components**:
- **Surveillance** - Early detection, monitoring spread
- **Containment measures** - Isolation, quarantine, social distancing
- **Medical countermeasures** - Vaccines, therapeutics, diagnostics
- **Healthcare system preparedness** - Surge capacity, PPE supplies
- **Communication** - Risk communication, public education

### Global Health Initiatives
**International Organizations**:
- **World Health Organization (WHO)** - Leading global health agency
- **Centers for Disease Control and Prevention (CDC)** - US agency with global programs
- **Global Fund** - Financing for HIV, TB, malaria programs
- **GAVI** - Vaccine alliance for immunization programs
**Disease-Specific Programs**:
- **Global Polio Eradication Initiative** - Near elimination of wild poliovirus
- **Stop TB Partnership** - Tuberculosis control efforts
- **Global Malaria Programme** - WHO's malaria control program
- **UNAIDS** - Joint UN program on HIV/AIDS

### Vaccine-Preventable Diseases
**Expanded Program on Immunization**:
- **Routine childhood vaccines** - DTP, polio, measles, HepB, Hib, pneumococcal, rotavirus
- **Adolescent/adult vaccines** - HPV, meningococcal, herpes zoster
- **Travel vaccines** - Yellow fever, typhoid, Japanese encephalitis
- **Special population vaccines** - Pregnancy (Tdap, influenza), immunocompromised
**Vaccination Strategies**:
- **Routine immunization** - Standard schedule for all children
- **Supplemental immunization** - Campaigns to reach unvaccinated
- **Outbreak response vaccination** - Ring vaccination for containment
- **Mandatory vaccination** - School entry requirements

### Food and Water Safety
**Foodborne Disease Surveillance**:
- **FoodNet** - CDC's Foodborne Diseases Active Surveillance Network
- **PulseNet** - National molecular subtyping network for foodborne bacteria
- **Outbreak investigations** - Traceback to source, product recalls
**Waterborne Diseases**:
- **Monitoring** - Coliform counts, specific pathogen testing
- **Treatment** - Filtration, disinfection (chlorination, UV)
- **Outbreak investigation** - Water testing, epidemiological studies
**Regulatory Agencies**:
- **FDA** - Food safety, except meat, poultry, eggs
- **USDA** - Meat, poultry, eggs
- **EPA** - Drinking water standards
- **State/local health departments** - Inspection, enforcement

### Laboratory Networks and Response
**Public Health Laboratories**:
- **Reference testing** - Confirmatory testing, strain typing
- **Surveillance** - Monitoring for emerging pathogens
- **Outbreak support** - Testing during investigations
- **Biosafety** - Handling dangerous pathogens
**Laboratory Networks**:
- **Laboratory Response Network (LRN)** - For biological and chemical threats
- **Antimicrobial Resistance Laboratory Network** - CDC's AR Lab Network
- **Influenza surveillance network** - WHO Global Influenza Surveillance and Response System
**Biosafety and Biosecurity**:
- **Select Agents Program** - Regulation of dangerous pathogens
- **Dual-use research** - Research with potential for misuse
- **Laboratory accreditation** - Ensuring quality and safety

### One Health Approach
**Concept** - Recognition that human, animal, and environmental health are interconnected
**Applications**:
- **Zoonotic disease control** - At animal-human interface
- **Antimicrobial resistance** - In humans, animals, environment
- **Food safety** - From farm to table
- **Environmental health** - Climate change, pollution effects
**Collaboration**:
- **Human health professionals** - Physicians, epidemiologists, microbiologists
- **Veterinary professionals** - Veterinarians, animal scientists
- **Environmental professionals** - Ecologists, environmental scientists
- **Other stakeholders** - Farmers, policymakers, community members

### Antimicrobial Resistance as Public Health Issue
**Global Action Plan** (WHO):
1. **Improve awareness** - Understanding of AMR
2. **Strengthen surveillance** - Monitor resistance patterns
3. **Reduce infection incidence** - Infection prevention and control
4. **Optimize antimicrobial use** - Human and animal health
5. **Develop economic case** - Sustainable investment
**National Action Plans**:
- **US National Action Plan** - Combating antibiotic-resistant bacteria
- **Other countries** - Similar plans tailored to national contexts
**Surveillance Systems**:
- **GLASS** - WHO's Global Antimicrobial Resistance Surveillance System
- **NARMS** - US National Antimicrobial Resistance Monitoring System
- **CAESAR** - WHO's Central Asian and Eastern European Surveillance

### Risk Communication and Community Engagement
**Principles of Risk Communication**:
- **Be first** - Early communication establishes credibility
- **Be right** - Accuracy is more important than speed
- **Be credible** - Honesty and transparency build trust
- **Express empathy** - Acknowledge fear and uncertainty
- **Promote action** - Provide specific recommendations
**Community Engagement**:
- **Stakeholder involvement** - Engage affected communities
- **Cultural competence** - Respect cultural beliefs and practices
- **Trust building** - Long-term relationships, not just during crises
- **Two-way communication** - Listen as well as inform

### Legal and Ethical Considerations
**Public Health Powers**:
- **Quarantine and isolation** - Restricting movement of exposed or infected persons
- **Mandatory treatment** - For certain diseases (e.g., TB)
- **Disease reporting** - Mandatory reporting by healthcare providers
- **Contact tracing** - Identifying and notifying exposed individuals
**Ethical Principles**:
- **Beneficence** - Promote public good
- **Non-maleficence** - Do no harm
- **Autonomy** - Respect individual rights
- **Justice** - Fair distribution of benefits and burdens
**Balancing Individual and Community Rights**:
- **Proportionality** - Measures should be proportional to threat
- **Necessity** - Only necessary restrictions should be imposed
- **Least restrictive means** - Achieve public health goal with minimal restrictions

### Future Challenges and Opportunities
**Climate Change and Infectious Diseases**:
- **Vector distribution changes** - Mosquitoes, ticks moving to new areas
- **Waterborne diseases** - Flooding, water contamination
- **Food security** - Crop failures, foodborne illnesses
- **Extreme weather events** - Displacement, disrupted healthcare
**Urbanization and Megacities**:
- **High population density** - Rapid disease spread
- **Informal settlements** - Poor sanitation, healthcare access
- **Urban agriculture** - Zoonotic disease risks
- **Waste management** - Environmental contamination
**Technological Advances**:
- **Genomic epidemiology** - Real-time outbreak tracking
- **Digital surveillance** - Social media, internet searches
- **Point-of-care diagnostics** - Rapid testing in field settings
- **Vaccine platforms** - Rapid development for emerging threats
**Global Health Security**:
- **International Health Regulations** - Strengthening compliance
- **Health system strengthening** - Resilient healthcare systems
- **Research and development** - New tools for prevention and control
- **Financing** - Sustainable funding for global health security`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What measures new cases in population over time?",
          options: [
            "Prevalence",
            "Incidence",
            "Attack rate",
            "Mortality rate"
          ],
          correctAnswer: 1,
          explanation: "Incidence measures the number of new cases of a disease in a population during a specific time period."
        },
        {
          id: 2,
          question: "What is the average number of secondary cases from one infected person?",
          options: [
            "Attack rate",
            "Reproductive number (R0)",
            "Prevalence rate",
            "Case fatality rate"
          ],
          correctAnswer: 1,
          explanation: "The basic reproductive number (R0) represents the average number of secondary infections generated by one primary case in a susceptible population."
        },
        {
          id: 3,
          question: "What type of surveillance involves routine reporting by providers?",
          options: [
            "Active surveillance",
            "Passive surveillance",
            "Sentinel surveillance",
            "Syndromic surveillance"
          ],
          correctAnswer: 1,
          explanation: "Passive surveillance relies on healthcare providers to routinely submit reports of notifiable diseases."
        },
        {
          id: 4,
          question: "What is the first step in outbreak investigation?",
          options: [
            "Define cases",
            "Confirm outbreak existence",
            "Prepare for field work",
            "Search for cases"
          ],
          correctAnswer: 2,
          explanation: "Preparing for field work is the first step, involving gathering team, supplies, and preliminary information."
        },
        {
          id: 5,
          question: "What organization leads global public health efforts?",
          options: [
            "CDC",
            "WHO",
            "FDA",
            "UNICEF"
          ],
          correctAnswer: 1,
          explanation: "The World Health Organization (WHO) is the directing and coordinating authority for international health within the United Nations system."
        },
        {
          id: 6,
          question: "What displays cases over time in an outbreak?",
          options: [
            "Spot map",
            "Line listing",
            "Epidemic curve",
            "Statistical table"
          ],
          correctAnswer: 2,
          explanation: "An epidemic curve is a histogram that displays the distribution of cases over time during an outbreak."
        },
        {
          id: 7,
          question: "What is the concept integrating human, animal, and environmental health?",
          options: [
            "Global health",
            "One Health",
            "Planetary health",
            "Ecohealth"
          ],
          correctAnswer: 1,
          explanation: "One Health recognizes that the health of people is connected to the health of animals and the environment."
        },
        {
          id: 8,
          question: "What is ring vaccination used for?",
          options: [
            "Routine childhood immunization",
            "Outbreak containment",
            "Travel vaccination",
            "Adult booster shots"
          ],
          correctAnswer: 1,
          explanation: "Ring vaccination involves vaccinating contacts of cases and their contacts to contain outbreaks."
        },
        {
          id: 9,
          question: "What network subtypes foodborne bacteria for outbreak detection?",
          options: [
            "FoodNet",
            "PulseNet",
            "LabNet",
            "EpiNet"
          ],
          correctAnswer: 1,
          explanation: "PulseNet is a national network of public health laboratories that performs DNA fingerprinting of foodborne bacteria."
        },
        {
          id: 10,
          question: "What regulates dangerous pathogens in the US?",
          options: [
            "FDA",
            "Select Agents Program",
            "CDC",
            "NIH"
          ],
          correctAnswer: 1,
          explanation: "The Federal Select Agent Program regulates the possession, use, and transfer of biological select agents and toxins."
        },
        {
          id: 11,
          question: "What is the WHO's antimicrobial resistance surveillance system?",
          options: [
            "NARMS",
            "GLASS",
            "CAESAR",
            "EARS-Net"
          ],
          correctAnswer: 1,
          explanation: "GLASS is WHO's Global Antimicrobial Resistance Surveillance System for standardized global AMR data."
        },
        {
          id: 12,
          question: "What principle of risk communication means being accurate?",
          options: [
            "Be first",
            "Be right",
            "Be credible",
            "Express empathy"
          ],
          correctAnswer: 1,
          explanation: "'Be right' means accuracy is more important than speed in risk communication."
        },
        {
          id: 13,
          question: "What public health measure restricts movement of exposed persons?",
          options: [
            "Isolation",
            "Quarantine",
            "Treatment",
            "Vaccination"
          ],
          correctAnswer: 1,
          explanation: "Quarantine restricts the movement of people who have been exposed to a contagious disease but are not yet ill."
        },
        {
          id: 14,
          question: "What ethical principle means 'do no harm'?",
          options: [
            "Beneficence",
            "Non-maleficence",
            "Autonomy",
            "Justice"
          ],
          correctAnswer: 1,
          explanation: "Non-maleficence is the ethical principle of not causing harm to patients or the public."
        },
        {
          id: 15,
          question: "What is the proportion immune needed to stop transmission?",
          options: [
            "Attack rate",
            "Herd immunity threshold",
            "Prevalence rate",
            "Case fatality rate"
          ],
          correctAnswer: 1,
          explanation: "The herd immunity threshold is the proportion of a population that needs to be immune to prevent sustained transmission."
        },
        {
          id: 16,
          question: "What study compares cases with controls?",
          options: [
            "Cohort study",
            "Case-control study",
            "Descriptive study",
            "Experimental study"
          ],
          correctAnswer: 1,
          explanation: "Case-control studies compare people with a disease (cases) to people without the disease (controls) to identify risk factors."
        },
        {
          id: 17,
          question: "What is surveillance based on symptoms called?",
          options: [
            "Passive surveillance",
            "Active surveillance",
            "Sentinel surveillance",
            "Syndromic surveillance"
          ],
          correctAnswer: 3,
          explanation: "Syndromic surveillance monitors health-related data based on symptoms or clinical features rather than confirmed diagnoses."
        },
        {
          id: 18,
          question: "What global program aims to eradicate polio?",
          options: [
            "Stop TB Partnership",
            "Global Polio Eradication Initiative",
            "Global Malaria Programme",
            "UNAIDS"
          ],
          correctAnswer: 1,
          explanation: "The Global Polio Eradication Initiative is a public-private partnership led by national governments with WHO, Rotary, CDC, and UNICEF."
        },
        {
          id: 19,
          question: "What ethical principle means promoting public good?",
          options: [
            "Beneficence",
            "Non-maleficence",
            "Autonomy",
            "Justice"
          ],
          correctAnswer: 0,
          explanation: "Beneficence is the ethical principle of acting for the benefit of others, promoting public good in public health."
        },
        {
          id: 20,
          question: "What is the US monitoring system for antimicrobial resistance?",
          options: [
            "GLASS",
            "NARMS",
            "CAESAR",
            "EARS-Net"
          ],
          correctAnswer: 1,
          explanation: "NARMS is the National Antimicrobial Resistance Monitoring System in the United States."
        }
      ]
    }
  ],
  
  // FINAL EXAM (40 questions covering all modules)
  finalExam: {
    id: "med-micro-diploma-exam",
    title: "Medical Microbiology Diploma Final Exam",
    description: "Comprehensive exam covering all 6 modules. You need to score at least 75% to pass the diploma.",
    passingScore: 75,
    questions: [
      // Module 1 Questions
      {
        id: 1,
        module: 1,
        question: "What are secreted bacterial proteins with toxic effects?",
        options: [
          "Endotoxins",
          "Exotoxins",
          "Capsules",
          "Adhesins"
        ],
        correctAnswer: 1,
        explanation: "Exotoxins are proteins secreted by bacteria that have specific damaging effects on host cells."
      },
      {
        id: 2,
        module: 1,
        question: "What immune cells are professional phagocytes?",
        options: [
          "B cells",
          "T cells",
          "Neutrophils and macrophages",
          "Natural killer cells"
        ],
        correctAnswer: 2,
        explanation: "Neutrophils and macrophages are specialized phagocytic cells that engulf and destroy pathogens."
      },
      // Module 2 Questions
      {
        id: 3,
        module: 2,
        question: "What is the most common bacterial stain?",
        options: [
          "Acid-fast stain",
          "Gram stain",
          "Fluorescent stain",
          "Wright stain"
        ],
        correctAnswer: 1,
        explanation: "The Gram stain is the most commonly used stain in clinical microbiology for bacterial classification."
      },
      {
        id: 4,
        module: 2,
        question: "What is the lowest antibiotic concentration inhibiting growth?",
        options: [
          "MBC",
          "MIC",
          "MLC",
          "MTC"
        ],
        correctAnswer: 1,
        explanation: "Minimum Inhibitory Concentration (MIC) is the lowest concentration that inhibits visible bacterial growth."
      },
      // Module 3 Questions
      {
        id: 5,
        module: 3,
        question: "What inhibits bacterial cell wall synthesis?",
        options: [
          "Aminoglycosides",
          "Beta-lactams",
          "Tetracyclines",
          "Fluoroquinolones"
        ],
        correctAnswer: 1,
        explanation: "Beta-lactam antibiotics inhibit bacterial cell wall synthesis by binding to penicillin-binding proteins."
      },
      {
        id: 6,
        module: 3,
        question: "What does MRSA stand for?",
        options: [
          "Multiple-resistant Staphylococcus aureus",
          "Methicillin-resistant Staphylococcus aureus",
          "Macrolide-resistant Staphylococcus aureus",
          "Multi-sensitive Staphylococcus aureus"
        ],
        correctAnswer: 1,
        explanation: "MRSA stands for Methicillin-resistant Staphylococcus aureus, resistant to beta-lactam antibiotics."
      },
      // Module 4 Questions
      {
        id: 7,
        module: 4,
        question: "What are infections acquired during healthcare?",
        options: [
          "Community-acquired infections",
          "Healthcare-associated infections",
          "Occupational infections",
          "Zoonotic infections"
        ],
        correctAnswer: 1,
        explanation: "Healthcare-associated infections (HAIs) are infections patients acquire during healthcare delivery."
      },
      {
        id: 8,
        module: 4,
        question: "What is the most common HAI?",
        options: [
          "CLABSI",
          "CAUTI",
          "VAP",
          "SSI"
        ],
        correctAnswer: 1,
        explanation: "Catheter-associated urinary tract infections (CAUTI) are the most common healthcare-associated infections."
      },
      // Module 5 Questions
      {
        id: 9,
        module: 5,
        question: "What causes most bacterial meningitis in adults?",
        options: [
          "Neisseria meningitidis",
          "Streptococcus pneumoniae",
          "Haemophilus influenzae",
          "Listeria monocytogenes"
        ],
        correctAnswer: 1,
        explanation: "Streptococcus pneumoniae is the most common cause of bacterial meningitis in adults."
      },
      {
        id: 10,
        module: 5,
        question: "What causes most UTIs?",
        options: [
          "Staphylococcus saprophyticus",
          "Escherichia coli",
          "Klebsiella pneumoniae",
          "Proteus mirabilis"
        ],
        correctAnswer: 1,
        explanation: "Escherichia coli is the most common cause of both community and hospital-acquired UTIs."
      },
      // Module 6 Questions
      {
        id: 11,
        module: 6,
        question: "What measures new cases over time?",
        options: [
          "Prevalence",
          "Incidence",
          "Attack rate",
          "Mortality rate"
        ],
        correctAnswer: 1,
        explanation: "Incidence measures the number of new cases of a disease in a population during a specific time."
      },
      {
        id: 12,
        module: 6,
        question: "What is the average number of secondary cases?",
        options: [
          "Attack rate",
          "Reproductive number (R0)",
          "Prevalence rate",
          "Case fatality rate"
        ],
        correctAnswer: 1,
        explanation: "The basic reproductive number (R0) represents average secondary infections from one primary case."
      },
      // Additional mixed questions
      {
        id: 13,
        module: 1,
        question: "What enhances phagocytosis by coating pathogens?",
        options: [
          "Neutralization",
          "Opsonization",
          "Complement activation",
          "ADCC"
        ],
        correctAnswer: 1,
        explanation: "Opsonization involves coating pathogens with antibodies or complement to enhance phagocytosis."
      },
      {
        id: 14,
        module: 2,
        question: "What molecular method amplifies DNA?",
        options: [
          "ELISA",
          "PCR",
          "Western blot",
          "MALDI-TOF"
        ],
        correctAnswer: 1,
        explanation: "Polymerase Chain Reaction (PCR) amplifies specific DNA sequences for detection."
      },
      {
        id: 15,
        module: 3,
        question: "What optimizes antibiotic use to reduce resistance?",
        options: [
          "Antibiotic cycling",
          "Antimicrobial stewardship",
          "Empiric therapy",
          "Combination therapy"
        ],
        correctAnswer: 1,
        explanation: "Antimicrobial stewardship programs optimize antibiotic use to improve outcomes and reduce resistance."
      },
      {
        id: 16,
        module: 4,
        question: "What applies to all patient care?",
        options: [
          "Contact precautions",
          "Standard precautions",
          "Droplet precautions",
          "Airborne precautions"
        ],
        correctAnswer: 1,
        explanation: "Standard precautions apply to all patient care, regardless of infection status."
      },
      {
        id: 17,
        module: 5,
        question: "What causes necrotizing fasciitis?",
        options: [
          "Staphylococcus aureus alone",
          "Streptococcus pyogenes alone",
          "Mixed aerobic and anaerobic bacteria",
          "Only Clostridium species"
        ],
        correctAnswer: 2,
        explanation: "Necrotizing fasciitis is often caused by mixed aerobic and anaerobic bacteria."
      },
      {
        id: 18,
        module: 6,
        question: "What organization leads global public health?",
        options: [
          "CDC",
          "WHO",
          "FDA",
          "UNICEF"
        ],
        correctAnswer: 1,
        explanation: "WHO is the directing and coordinating authority for international health."
      },
      {
        id: 19,
        module: 1,
        question: "What vaccine uses weakened live pathogens?",
        options: [
          "Inactivated vaccine",
          "Live attenuated vaccine",
          "Subunit vaccine",
          "Toxoid vaccine"
        ],
        correctAnswer: 1,
        explanation: "Live attenuated vaccines contain weakened forms of pathogens."
      },
      {
        id: 20,
        module: 2,
        question: "What media inhibit unwanted organisms?",
        options: [
          "General purpose media",
          "Selective media",
          "Differential media",
          "Enriched media"
        ],
        correctAnswer: 1,
        explanation: "Selective media contain substances that inhibit unwanted organisms while allowing desired ones."
      },
      {
        id: 21,
        module: 3,
        question: "What is ESBL?",
        options: [
          "Extended-spectrum beta-lactamase",
          "Enhanced sensitivity beta-lactam",
          "Extended-spectrum beta-lactam",
          "Enzyme-sensitive beta-lactam"
        ],
        correctAnswer: 0,
        explanation: "ESBL stands for Extended-Spectrum Beta-Lactamase."
      },
      {
        id: 22,
        module: 4,
        question: "What infections are related to central catheters?",
        options: [
          "CAUTI",
          "CLABSI",
          "VAP",
          "SSI"
        ],
        correctAnswer: 1,
        explanation: "CLABSI are bloodstream infections related to central venous catheters."
      },
      {
        id: 23,
        module: 5,
        question: "What causes most community-acquired pneumonia?",
        options: [
          "Viruses",
          "Streptococcus pneumoniae",
          "Mycoplasma pneumoniae",
          "Legionella pneumophila"
        ],
        correctAnswer: 1,
        explanation: "Streptococcus pneumoniae is the most common cause of community-acquired pneumonia."
      },
      {
        id: 24,
        module: 6,
        question: "What type of surveillance involves routine reporting?",
        options: [
          "Active surveillance",
          "Passive surveillance",
          "Sentinel surveillance",
          "Syndromic surveillance"
        ],
        correctAnswer: 1,
        explanation: "Passive surveillance relies on routine reporting by healthcare providers."
      },
      {
        id: 25,
        module: 1,
        question: "What is changing surface antigens to evade immunity?",
        options: [
          "Molecular mimicry",
          "Antigenic variation",
          "Immune suppression",
          "Biofilm formation"
        ],
        correctAnswer: 1,
        explanation: "Antigenic variation allows pathogens to change surface antigens, escaping antibody recognition."
      },
      {
        id: 26,
        module: 2,
        question: "What is used for spirochete visualization?",
        options: [
          "Brightfield microscopy",
          "Darkfield microscopy",
          "Phase contrast",
          "Fluorescence microscopy"
        ],
        correctAnswer: 1,
        explanation: "Darkfield microscopy illuminates specimens against dark background for spirochetes."
      },
      {
        id: 27,
        module: 3,
        question: "What monitors vancomycin therapy?",
        options: [
          "Peak levels",
          "Trough levels",
          "Random levels",
          "No monitoring"
        ],
        correctAnswer: 1,
        explanation: "Vancomycin trough levels are monitored for adequate dosing and nephrotoxicity avoidance."
      },
      {
        id: 28,
        module: 4,
        question: "What is key to preventing most HAIs?",
        options: [
          "Antibiotic prophylaxis",
          "Hand hygiene",
          "Isolation rooms",
          "Environmental cleaning"
        ],
        correctAnswer: 1,
        explanation: "Hand hygiene is the single most important measure for preventing healthcare-associated infections."
      },
      {
        id: 29,
        module: 5,
        question: "What causes gas gangrene?",
        options: [
          "Streptococcus pyogenes",
          "Clostridium perfringens",
          "Mixed aerobic bacteria",
          "Staphylococcus aureus"
        ],
        correctAnswer: 1,
        explanation: "Gas gangrene is typically caused by Clostridium perfringens."
      },
      {
        id: 30,
        module: 6,
        question: "What is the One Health concept?",
        options: [
          "Global health",
          "Integrating human, animal, environmental health",
          "Planetary health",
          "Ecohealth"
        ],
        correctAnswer: 1,
        explanation: "One Health recognizes interconnectedness of human, animal, and environmental health."
      },
      {
        id: 31,
        module: 1,
        question: "What are A-B toxins?",
        options: [
          "Membrane-disrupting toxins",
          "Two-component exotoxins",
          "Superantigens",
          "Endotoxins"
        ],
        correctAnswer: 1,
        explanation: "A-B toxins consist of A (active) and B (binding) subunits."
      },
      {
        id: 32,
        module: 2,
        question: "What detects antibodies using enzyme-linked detection?",
        options: [
          "PCR",
          "ELISA",
          "Culture",
          "Gram stain"
        ],
        correctAnswer: 1,
        explanation: "ELISA uses enzyme-linked antibodies to detect antigens or antibodies."
      },
      {
        id: 33,
        module: 3,
        question: "What pumps antibiotics out of bacterial cells?",
        options: [
          "Porins",
          "Efflux pumps",
          "Penicillin-binding proteins",
          "Beta-lactamases"
        ],
        correctAnswer: 1,
        explanation: "Efflux pumps actively transport antibiotics out of bacterial cells."
      },
      {
        id: 34,
        module: 4,
        question: "What precautions are for tuberculosis?",
        options: [
          "Contact precautions",
          "Droplet precautions",
          "Airborne precautions",
          "Standard precautions"
        ],
        correctAnswer: 2,
        explanation: "Airborne precautions are required for diseases like tuberculosis."
      },
      {
        id: 35,
        module: 5,
        question: "What is the most common cause of osteomyelitis?",
        options: [
          "Streptococcus pyogenes",
          "Staphylococcus aureus",
          "Pseudomonas aeruginosa",
          "Mycobacterium tuberculosis"
        ],
        correctAnswer: 1,
        explanation: "Staphylococcus aureus is the most common cause of osteomyelitis."
      },
      {
        id: 36,
        module: 6,
        question: "What displays cases over time in outbreaks?",
        options: [
          "Spot map",
          "Line listing",
          "Epidemic curve",
          "Statistical table"
        ],
        correctAnswer: 2,
        explanation: "Epidemic curve displays distribution of cases over time during outbreaks."
      },
      {
        id: 37,
        module: 1,
        question: "What are opportunistic infections?",
        options: [
          "Primary infections",
          "Infections in compromised hosts",
          "Latent infections",
          "Chronic infections"
        ],
        correctAnswer: 1,
        explanation: "Opportunistic infections occur when normally harmless microbes cause disease in immunocompromised hosts."
      },
      {
        id: 38,
        module: 2,
        question: "What is MALDI-TOF used for?",
        options: [
          "PCR",
          "Rapid microbial identification",
          "ELISA",
          "Disk diffusion"
        ],
        correctAnswer: 1,
        explanation: "MALDI-TOF mass spectrometry provides rapid bacterial identification from colonies."
      },
      {
        id: 39,
        module: 3,
        question: "What is CRE?",
        options: [
          "Cephalosporin-resistant Enterococci",
          "Carbapenem-resistant Enterobacteriaceae",
          "Ciprofloxacin-resistant Escherichia",
          "Clarithromycin-resistant Enterobacteriaceae"
        ],
        correctAnswer: 1,
        explanation: "CRE stands for Carbapenem-resistant Enterobacteriaceae."
      },
      {
        id: 40,
        module: 4,
        question: "What reduces C. difficile infections?",
        options: [
          "Increased antibiotic use",
          "Antimicrobial stewardship",
          "Reduced hand hygiene",
          "More invasive devices"
        ],
        correctAnswer: 1,
        explanation: "Antimicrobial stewardship reduces inappropriate antibiotic use, decreasing C. difficile infections."
      }
    ]
  }
};

export default medicalMicrobiologyDiploma;
