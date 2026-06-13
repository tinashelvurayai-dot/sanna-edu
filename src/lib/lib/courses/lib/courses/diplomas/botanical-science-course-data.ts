// Botanical Science (Diploma) - Complete Course Data
// Advanced diploma course building on Native Plant Studies Certificate
// All modules and exam in one file for easy implementation

export const botanicalScienceDiploma = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "botanical-science-diploma",
  title: "Botanical Science (Diploma)",
  description: "An advanced diploma course diving deep into plant biology, taxonomy, physiology, and scientific methods. Builds upon foundational knowledge to develop professional botanical expertise.",
  duration: "12 weeks",
  timeCommitment: "8-10 hours per week",
  price: 18,
  icon: "🔬",
  badge: "Diploma",
  prerequisites: ["native-plant-studies-certificate"],
  creditTransfer: true,
  
  // 2. MODULE ARCHITECTURE - 6 Advanced Modules
  modules: [
    {
      id: 1,
      title: "Advanced Plant Taxonomy & Systematics",
      completed: false,
      content: `# Module 1: Advanced Plant Taxonomy & Systematics

## Welcome to Advanced Botanical Science
This module explores the scientific classification and naming of plants. You'll learn about plant families, genera, species concepts, and modern systematic approaches used by professional botanists.

### Plant Classification Systems
Modern taxonomy uses multiple lines of evidence to classify plants. Morphological characteristics, genetic data, and evolutionary relationships all contribute to our understanding of plant relationships.

**Taxonomic hierarchy levels:**
- **Kingdom**: Plantae
- **Division/Phylum**: Magnoliophyta (flowering plants)
- **Class**: Magnoliopsida (dicots) or Liliopsida (monocots)
- **Order**: Group of related families
- **Family**: Group of related genera (e.g., Rosaceae)
- **Genus**: Group of closely related species
- **Species**: Basic biological unit

### Scientific Naming Conventions
Every plant has a unique scientific name following binomial nomenclature. The system was developed by Carl Linnaeus and provides universal understanding across languages and regions.

**Key naming rules:**
- Genus name capitalized, species epithet lowercase
- Both names italicized when printed
- Author citation indicates who first validly published the name
- Type specimens serve as reference points

### Modern Systematic Methods
Contemporary botanists use various tools to understand plant relationships. Molecular phylogenetics, cladistics, and comparative morphology reveal evolutionary patterns.

**Systematic approaches:**
- **Molecular systematics**: DNA sequencing and analysis
- **Morphological analysis**: Comparative study of form and structure
- **Phylogenetic reconstruction**: Building evolutionary trees
- **Biogeographic patterns**: Distribution studies

---

## Key Learning Points
- Scientific classification follows hierarchical systems
- Binomial nomenclature provides universal plant names
- Multiple evidence types inform modern taxonomy
- Understanding relationships reveals evolutionary history

Mastering taxonomy is fundamental to all botanical science!`,
      
      quiz: [
        {
          id: 1,
          question: "What is the basic biological unit in plant classification?",
          options: [
            "Species",
            "Genus",
            "Family",
            "Order"
          ],
          correctAnswer: 0,
          explanation: "The species is the fundamental unit of biological classification."
        },
        {
          id: 2,
          question: "Who developed the binomial nomenclature system?",
          options: [
            "Carl Linnaeus",
            "Charles Darwin",
            "Gregor Mendel",
            "Robert Brown"
          ],
          correctAnswer: 0,
          explanation: "Linnaeus established the modern system of scientific naming."
        },
        {
          id: 3,
          question: "How should scientific names be formatted when printed?",
          options: [
            "Italicized with genus capitalized",
            "Always in bold capital letters",
            "Underlined with no capitalization",
            "Regular font with both words capitalized"
          ],
          correctAnswer: 0,
          explanation: "Italicization and proper capitalization are standard conventions."
        },
        {
          id: 4,
          question: "What does molecular systematics primarily use?",
          options: [
            "DNA sequencing and analysis",
            "Only leaf shape comparison",
            "Flower color patterns",
            "Growth rate measurements"
          ],
          correctAnswer: 0,
          explanation: "Molecular data from DNA provides evidence for relationships."
        },
        {
          id: 5,
          question: "What level comes immediately above genus in classification?",
          options: [
            "Family",
            "Order",
            "Class",
            "Species"
          ],
          correctAnswer: 0,
          explanation: "Families contain related genera."
        },
        {
          id: 6,
          question: "What does 'Magnoliophyta' refer to?",
          options: [
            "Flowering plants division",
            "Fern family only",
            "Moss classification",
            "Tree growth form"
          ],
          correctAnswer: 0,
          explanation: "Magnoliophyta is the division containing flowering plants."
        },
        {
          id: 7,
          question: "What indicates who first published a plant name?",
          options: [
            "Author citation",
            "Type specimen location",
            "Herbarium code",
            "Publication date"
          ],
          correctAnswer: 0,
          explanation: "Author citations credit the original publishing botanist."
        },
        {
          id: 8,
          question: "What do type specimens provide?",
          options: [
            "Reference points for names",
            "Genetic material only",
            "Garden display samples",
            "Historical artwork"
          ],
          correctAnswer: 0,
          explanation: "Type specimens serve as the standard reference for a species."
        },
        {
          id: 9,
          question: "What does cladistics help reconstruct?",
          options: [
            "Evolutionary relationships",
            "Only growth patterns",
            "Flower color changes",
            "Soil preferences"
          ],
          correctAnswer: 0,
          explanation: "Cladistics analyzes shared characteristics to show relationships."
        },
        {
          id: 10,
          question: "What is Rosaceae an example of?",
          options: [
            "A plant family",
            "A genus name",
            "A species epithet",
            "An order classification"
          ],
          correctAnswer: 0,
          explanation: "Rosaceae is the rose family containing many genera."
        },
        {
          id: 11,
          question: "What does biogeographic patterns study?",
          options: [
            "Plant distribution patterns",
            "Only leaf shapes",
            "Flower scent chemistry",
            "Root depth measurements"
          ],
          correctAnswer: 0,
          explanation: "Biogeography examines how plants are distributed geographically."
        },
        {
          id: 12,
          question: "What are Liliopsida and Magnoliopsida?",
          options: [
            "Plant classes",
            "Genus names",
            "Family groups",
            "Species varieties"
          ],
          correctAnswer: 0,
          explanation: "These are classes within flowering plants: monocots and dicots."
        },
        {
          id: 13,
          question: "What does phylogenetic reconstruction create?",
          options: [
            "Evolutionary trees",
            "Garden designs",
            "Soil maps",
            "Climate charts"
          ],
          correctAnswer: 0,
          explanation: "Phylogenies show hypothesized evolutionary relationships."
        },
        {
          id: 14,
          question: "What is the plural of genus?",
          options: [
            "Genera",
            "Genuses",
            "Genus's",
            "Genus types"
          ],
          correctAnswer: 0,
          explanation: "Genera is the correct plural form of genus."
        },
        {
          id: 15,
          question: "What do modern taxonomists use besides morphology?",
          options: [
            "Genetic data and evolutionary relationships",
            "Only common names",
            "Garden popularity",
            "Historical records only"
          ],
          correctAnswer: 0,
          explanation: "Multiple evidence types provide more accurate classifications."
        },
        {
          id: 16,
          question: "What does the species epithet represent?",
          options: [
            "The second part of the scientific name",
            "The family classification",
            "The common name",
            "The discoverer's name"
          ],
          correctAnswer: 0,
          explanation: "The species epithet is the specific name within a genus."
        },
        {
          id: 17,
          question: "What does comparative morphology involve?",
          options: [
            "Studying form and structure across species",
            "Only measuring plant height",
            "Counting flowers only",
            "Testing soil chemistry"
          ],
          correctAnswer: 0,
          explanation: "Comparative analysis reveals similarities and differences."
        },
        {
          id: 18,
          question: "What is the correct order from broadest to most specific?",
          options: [
            "Kingdom, Division, Class, Order, Family, Genus, Species",
            "Species, Genus, Family, Order, Class, Division, Kingdom",
            "Family, Genus, Species, Order, Class, Division, Kingdom",
            "Genus, Species, Family, Order, Class, Division, Kingdom"
          ],
          correctAnswer: 0,
          explanation: "Taxonomic hierarchy proceeds from broad categories to specific ones."
        },
        {
          id: 19,
          question: "What provides universal understanding across languages?",
          options: [
            "Scientific names",
            "Common names",
            "Local names",
            "Trade names"
          ],
          correctAnswer: 0,
          explanation: "Scientific names are standardized internationally."
        },
        {
          id: 20,
          question: "What is fundamental to all botanical science?",
          options: [
            "Mastering taxonomy",
            "Only gardening skills",
            "Memorizing colors",
            "Counting leaves"
          ],
          correctAnswer: 0,
          explanation: "Taxonomy provides the framework for understanding plant diversity."
        }
      ]
    },
    
    {
      id: 2,
      title: "Plant Anatomy & Morphology",
      completed: false,
      content: `# Module 2: Plant Anatomy & Morphology

## Structure and Form of Plants
This module examines plant structure at cellular, tissue, and organ levels. You'll learn detailed anatomical features and their functional significance in plant life.

### Root System Anatomy
Roots serve multiple essential functions. They anchor plants, absorb water and nutrients, store food, and often reproduce vegetatively.

**Root structural features:**
- **Root cap**: Protective covering at tip
- **Zone of elongation**: Where cells lengthen
- **Root hairs**: Increase surface area for absorption
- **Vascular cylinder**: Contains xylem and phloem

### Stem Structure and Function
Stems provide support, transport, and sometimes storage. Their anatomy varies between monocots and dicots, and between woody and herbaceous plants.

**Stem tissue organization:**
- **Epidermis**: Protective outer layer
- **Cortex**: Storage and support tissue
- **Vascular bundles**: Transport tissues arranged in patterns
- **Pith**: Central storage tissue in some stems

### Leaf Anatomy and Adaptations
Leaves are primary photosynthetic organs with specialized structures. Their anatomy maximizes light capture and gas exchange while minimizing water loss.

**Leaf tissue layers:**
- **Cuticle**: Waxy waterproof layer
- **Epidermis**: Protective layer with stomata
- **Mesophyll**: Photosynthetic tissue (palisade and spongy)
- **Vascular tissue**: Veins for transport

### Reproductive Structures
Flowers, fruits, and seeds have specialized anatomy for reproduction. Understanding these structures is key to plant identification and classification.

**Floral anatomy components:**
- **Sepals**: Protective outer whorl
- **Petals**: Often colorful for attraction
- **Stamens**: Male reproductive parts
- **Carpels**: Female reproductive parts

---

## Key Learning Points
- Roots have specialized zones for different functions
- Stem anatomy varies between plant types
- Leaf structure optimizes photosynthesis
- Reproductive anatomy reveals evolutionary relationships

Anatomical knowledge provides insight into plant function and adaptation!`,
      
      quiz: [
        {
          id: 1,
          question: "What is the function of the root cap?",
          options: [
            "Protecting the growing tip",
            "Absorbing water",
            "Storing nutrients",
            "Anchoring the plant"
          ],
          correctAnswer: 0,
          explanation: "The root cap protects delicate meristematic cells as roots grow through soil."
        },
        {
          id: 2,
          question: "Where do root cells lengthen?",
          options: [
            "Zone of elongation",
            "Root cap area",
            "Maturation zone",
            "Root hair region"
          ],
          correctAnswer: 0,
          explanation: "Cell elongation occurs just behind the root tip."
        },
        {
          id: 3,
          question: "What increases surface area for water absorption?",
          options: [
            "Root hairs",
            "Root cap",
            "Vascular cylinder",
            "Cortex tissue"
          ],
          correctAnswer: 0,
          explanation: "Root hairs dramatically increase absorptive surface area."
        },
        {
          id: 4,
          question: "What contains xylem and phloem in roots?",
          options: [
            "Vascular cylinder",
            "Root epidermis",
            "Root cap",
            "Root hairs"
          ],
          correctAnswer: 0,
          explanation: "The vascular cylinder contains transport tissues."
        },
        {
          id: 5,
          question: "What is the protective outer layer of stems?",
          options: [
            "Epidermis",
            "Cortex",
            "Pith",
            "Vascular tissue"
          ],
          correctAnswer: 0,
          explanation: "The epidermis provides external protection."
        },
        {
          id: 6,
          question: "What tissue often stores food in stems?",
          options: [
            "Cortex",
            "Epidermis",
            "Xylem",
            "Phloem"
          ],
          correctAnswer: 0,
          explanation: "Cortical tissue frequently serves storage functions."
        },
        {
          id: 7,
          question: "How do vascular bundles differ in monocots vs dicots?",
          options: [
            "Arranged differently in stems",
            "Identical in all plants",
            "Only in roots, not stems",
            "Absent in some plants"
          ],
          correctAnswer: 0,
          explanation: "Monocots have scattered bundles; dicots have organized rings."
        },
        {
          id: 8,
          question: "What is the waxy waterproof layer on leaves?",
          options: [
            "Cuticle",
            "Epidermis",
            "Mesophyll",
            "Stomata"
          ],
          correctAnswer: 0,
          explanation: "The cuticle prevents excessive water loss."
        },
        {
          id: 9,
          question: "Where does most photosynthesis occur in leaves?",
          options: [
            "Mesophyll tissue",
            "Epidermis",
            "Cuticle",
            "Veins"
          ],
          correctAnswer: 0,
          explanation: "Mesophyll contains chloroplast-rich cells."
        },
        {
          id: 10,
          question: "What are stomata?",
          options: [
            "Pores for gas exchange",
            "Storage cells",
            "Transport vessels",
            "Protective hairs"
          ],
          correctAnswer: 0,
          explanation: "Stomata allow carbon dioxide in and oxygen out."
        },
        {
          id: 11,
          question: "What is the central storage tissue in some stems?",
          options: [
            "Pith",
            "Cortex",
            "Epidermis",
            "Vascular tissue"
          ],
          correctAnswer: 0,
          explanation: "Pith occupies the center of many stems."
        },
        {
          id: 12,
          question: "What are the protective outer whorl of flowers?",
          options: [
            "Sepals",
            "Petals",
            "Stamens",
            "Carpels"
          ],
          correctAnswer: 0,
          explanation: "Sepals protect developing flower buds."
        },
        {
          id: 13,
          question: "What are the male reproductive parts?",
          options: [
            "Stamens",
            "Carpels",
            "Petals",
            "Sepals"
          ],
          correctAnswer: 0,
          explanation: "Stamens produce pollen."
        },
        {
          id: 14,
          question: "What tissue contains palisade and spongy layers?",
          options: [
            "Mesophyll",
            "Epidermis",
            "Cuticle",
            "Vascular"
          ],
          correctAnswer: 0,
          explanation: "Mesophyll has these two photosynthetic layers."
        },
        {
          id: 15,
          question: "What do veins in leaves contain?",
          options: [
            "Vascular tissue",
            "Only xylem",
            "Only phloem",
            "Storage cells"
          ],
          correctAnswer: 0,
          explanation: "Veins contain both xylem and phloem."
        },
        {
          id: 16,
          question: "What is the function of petals?",
          options: [
            "Attract pollinators",
            "Protect developing seeds",
            "Produce pollen",
            "Receive pollen"
          ],
          correctAnswer: 0,
          explanation: "Petals often attract pollinators with color and scent."
        },
        {
          id: 17,
          question: "What are carpels?",
          options: [
            "Female reproductive parts",
            "Male reproductive parts",
            "Protective structures",
            "Attractive structures"
          ],
          correctAnswer: 0,
          explanation: "Carpels contain ovules and develop into fruits."
        },
        {
          id: 18,
          question: "What provides insight into plant function?",
          options: [
            "Anatomical knowledge",
            "Only common names",
            "Garden location",
            "Flower color alone"
          ],
          correctAnswer: 0,
          explanation: "Structure reveals how plants perform essential functions."
        },
        {
          id: 19,
          question: "What varies between woody and herbaceous stems?",
          options: [
            "Tissue organization",
            "Basic functions",
            "Presence of leaves",
            "Ability to photosynthesize"
          ],
          correctAnswer: 0,
          explanation: "Woody stems have secondary growth; herbaceous stems do not."
        },
        {
          id: 20,
          question: "What reveals evolutionary relationships?",
          options: [
            "Reproductive anatomy",
            "Plant height only",
            "Leaf color",
            "Growth rate"
          ],
          correctAnswer: 0,
          explanation: "Floral structures provide important taxonomic characters."
        }
      ]
    },
    
    {
      id: 3,
      title: "Plant Physiology & Biochemistry",
      completed: false,
      content: `# Module 3: Plant Physiology & Biochemistry

## How Plants Function
This module explores the physiological processes and biochemical pathways that enable plant growth, development, and response to the environment.

### Photosynthesis Mechanisms
Photosynthesis converts light energy to chemical energy. The process involves light reactions and dark reactions (Calvin cycle), occurring in chloroplasts.

**Photosynthetic stages:**
- **Light reactions**: Capture light energy, produce ATP and NADPH
- **Calvin cycle**: Fix carbon dioxide into sugars using ATP and NADPH
- **Photorespiration**: Process that reduces efficiency in some conditions

### Respiration and Energy Transfer
Plants respire to release energy from stored carbohydrates. Cellular respiration occurs in mitochondria and provides ATP for cellular processes.

**Respiration pathways:**
- **Glycolysis**: Breaks down glucose in cytoplasm
- **Krebs cycle**: Completes oxidation in mitochondria
- **Electron transport chain**: Produces most ATP

### Water Relations and Transport
Water movement through plants involves osmosis, transpiration, and cohesion-tension theory. Understanding these processes explains how tall trees transport water.

**Water transport mechanisms:**
- **Root pressure**: Pushes water upward
- **Cohesion-tension**: Pulls water through xylem
- **Transpiration pull**: Evaporation from leaves creates suction
- **Stomatal regulation**: Controls water loss

### Plant Hormones and Signaling
Plants use chemical messengers to coordinate growth and responses. Hormones regulate everything from seed germination to flowering.

**Major plant hormones:**
- **Auxins**: Promote cell elongation and root formation
- **Gibberellins**: Stimulate stem elongation and seed germination
- **Cytokinins**: Promote cell division and delay aging
- **Abscisic acid**: Induces dormancy and stress responses
- **Ethylene**: Promotes fruit ripening and leaf abscission

---

## Key Learning Points
- Photosynthesis converts light to chemical energy
- Respiration releases energy from stored compounds
- Water transport relies on physical principles
- Hormones coordinate plant growth and responses

Understanding physiology reveals how plants live and grow!`,
      
      quiz: [
        {
          id: 1,
          question: "Where does photosynthesis occur in plant cells?",
          options: [
            "Chloroplasts",
            "Mitochondria",
            "Nucleus",
            "Vacuole"
          ],
          correctAnswer: 0,
          explanation: "Chloroplasts contain chlorophyll and photosynthetic machinery."
        },
        {
          id: 2,
          question: "What do light reactions produce?",
          options: [
            "ATP and NADPH",
            "Glucose directly",
            "Only oxygen",
            "Carbon dioxide"
          ],
          correctAnswer: 0,
          explanation: "Light reactions convert light energy to chemical carriers."
        },
        {
          id: 3,
          question: "What uses ATP and NADPH to make sugars?",
          options: [
            "Calvin cycle",
            "Light reactions",
            "Glycolysis",
            "Krebs cycle"
          ],
          correctAnswer: 0,
          explanation: "The Calvin cycle fixes carbon using energy from light reactions."
        },
        {
          id: 4,
          question: "Where does cellular respiration occur?",
          options: [
            "Mitochondria",
            "Chloroplasts",
            "Cell wall",
            "Vacuole"
          ],
          correctAnswer: 0,
          explanation: "Mitochondria are the powerhouses of the cell."
        },
        {
          id: 5,
          question: "What produces most ATP during respiration?",
          options: [
            "Electron transport chain",
            "Glycolysis",
            "Krebs cycle only",
            "Fermentation"
          ],
          correctAnswer: 0,
          explanation: "The electron transport chain generates the majority of ATP."
        },
        {
          id: 6,
          question: "What theory explains water transport in tall trees?",
          options: [
            "Cohesion-tension theory",
            "Root pressure only",
            "Capillary action alone",
            "Active pumping"
          ],
          correctAnswer: 0,
          explanation: "Cohesion of water molecules and tension from transpiration create pull."
        },
        {
          id: 7,
          question: "What creates suction for water movement?",
          options: [
            "Transpiration pull",
            "Root pressure only",
            "Leaf pumping",
            "Stem compression"
          ],
          correctAnswer: 0,
          explanation: "Water evaporation from leaves creates negative pressure."
        },
        {
          id: 8,
          question: "What hormone promotes cell elongation?",
          options: [
            "Auxins",
            "Gibberellins",
            "Cytokinins",
            "Abscisic acid"
          ],
          correctAnswer: 0,
          explanation: "Auxins stimulate cell elongation in stems."
        },
        {
          id: 9,
          question: "What stimulates stem elongation and germination?",
          options: [
            "Gibberellins",
            "Auxins",
            "Cytokinins",
            "Ethylene"
          ],
          correctAnswer: 0,
          explanation: "Gibberellins promote stem growth and break seed dormancy."
        },
        {
          id: 10,
          question: "What promotes cell division?",
          options: [
            "Cytokinins",
            "Auxins",
            "Gibberellins",
            "Abscisic acid"
          ],
          correctAnswer: 0,
          explanation: "Cytokinins stimulate cell division in meristems."
        },
        {
          id: 11,
          question: "What induces dormancy and stress responses?",
          options: [
            "Abscisic acid",
            "Auxins",
            "Gibberellins",
            "Ethylene"
          ],
          correctAnswer: 0,
          explanation: "ABA helps plants survive adverse conditions."
        },
        {
          id: 12,
          question: "What promotes fruit ripening?",
          options: [
            "Ethylene",
            "Auxins",
            "Cytokinins",
            "Gibberellins"
          ],
          correctAnswer: 0,
          explanation: "Ethylene accelerates ripening processes."
        },
        {
          id: 13,
          question: "What controls water loss from leaves?",
          options: [
            "Stomatal regulation",
            "Cuticle thickness only",
            "Leaf angle",
            "Hair density"
          ],
          correctAnswer: 0,
          explanation: "Stomata open and close to balance gas exchange and water conservation."
        },
        {
          id: 14,
          question: "What process reduces photosynthetic efficiency?",
          options: [
            "Photorespiration",
            "Photosynthesis",
            "Respiration",
            "Transpiration"
          ],
          correctAnswer: 0,
          explanation: "Photorespiration occurs when rubisco fixes oxygen instead of CO₂."
        },
        {
          id: 15,
          question: "What breaks down glucose in cytoplasm?",
          options: [
            "Glycolysis",
            "Krebs cycle",
            "Electron transport",
            "Calvin cycle"
          ],
          correctAnswer: 0,
          explanation: "Glycolysis is the first step in cellular respiration."
        },
        {
          id: 16,
          question: "What completes oxidation in mitochondria?",
          options: [
            "Krebs cycle",
            "Glycolysis",
            "Calvin cycle",
            "Light reactions"
          ],
          correctAnswer: 0,
          explanation: "The Krebs cycle processes products from glycolysis."
        },
        {
          id: 17,
          question: "What pushes water upward from roots?",
          options: [
            "Root pressure",
            "Leaf suction only",
            "Stem pumping",
            "Gravity"
          ],
          correctAnswer: 0,
          explanation: "Root pressure contributes to early morning water movement."
        },
        {
          id: 18,
          question: "What coordinates plant growth and responses?",
          options: [
            "Hormones",
            "Only environmental cues",
            "Random processes",
            "Human intervention"
          ],
          correctAnswer: 0,
          explanation: "Hormones are chemical messengers that regulate plant processes."
        },
        {
          id: 19,
          question: "What converts light to chemical energy?",
          options: [
            "Photosynthesis",
            "Respiration",
            "Transpiration",
            "Germination"
          ],
          correctAnswer: 0,
          explanation: "Photosynthesis captures and stores energy from sunlight."
        },
        {
          id: 20,
          question: "What releases energy from stored compounds?",
          options: [
            "Respiration",
            "Photosynthesis",
            "Transpiration",
            "Absorption"
          ],
          correctAnswer: 0,
          explanation: "Respiration breaks down organic molecules to release energy."
        }
      ]
    },
    
    {
      id: 4,
      title: "Plant Ecology & Ecosystems",
      completed: false,
      content: `# Module 4: Plant Ecology & Ecosystems

## Plants in Ecological Context
This advanced module examines plant interactions within ecosystems, including competition, mutualism, succession, and biogeochemical cycles.

### Plant Community Dynamics
Plant communities change over time through succession. Primary succession begins on bare substrates, while secondary succession occurs after disturbance.

**Successional stages:**
- **Pioneer species**: First colonizers, often stress-tolerant
- **Intermediate species**: Replace pioneers, increased competition
- **Climax community**: Relatively stable endpoint

### Plant-Plant Interactions
Plants compete for resources and also form cooperative relationships. Understanding these interactions explains community structure.

**Interaction types:**
- **Competition**: Both plants negatively affected
- **Mutualism**: Both plants benefit
- **Commensalism**: One benefits, other unaffected
- **Allelopathy**: Chemical inhibition of neighbors

### Nutrient Cycling Roles
Plants play crucial roles in biogeochemical cycles. They absorb nutrients from soil, incorporate them into tissues, and release them through decomposition.

**Key nutrient cycles:**
- **Carbon cycle**: Photosynthesis and respiration
- **Nitrogen cycle**: Fixation, nitrification, denitrification
- **Phosphorus cycle**: Weathering and biological uptake
- **Water cycle**: Transpiration and interception

### Ecosystem Services Provided by Plants
Plants provide essential services that support life and human well-being. These services have economic and ecological value.

**Major ecosystem services:**
- **Provisioning**: Food, fiber, medicine, fuel
- **Regulating**: Climate regulation, water purification, pollination
- **Supporting**: Soil formation, nutrient cycling, habitat provision
- **Cultural**: Aesthetic, recreational, spiritual values

---

## Key Learning Points
- Plant communities change through successional processes
- Plants interact through competition and cooperation
- Plants drive essential nutrient cycles
- Plants provide valuable ecosystem services

Ecological understanding highlights plant importance in global systems!`,
      
      quiz: [
        {
          id: 1,
          question: "What begins on bare substrates like rock?",
          options: [
            "Primary succession",
            "Secondary succession",
            "Climax community",
            "Disturbance regime"
          ],
          correctAnswer: 0,
          explanation: "Primary succession starts where no soil exists."
        },
        {
          id: 2,
          question: "What occurs after disturbance in existing ecosystems?",
          options: [
            "Secondary succession",
            "Primary succession",
            "Climax stability",
            "Complete destruction"
          ],
          correctAnswer: 0,
          explanation: "Secondary succession rebuilds communities after disturbances."
        },
        {
          id: 3,
          question: "What are first colonizers in succession called?",
          options: [
            "Pioneer species",
            "Climax species",
            "Intermediate species",
            "Dominant species"
          ],
          correctAnswer: 0,
          explanation: "Pioneer species are adapted to colonize harsh conditions."
        },
        {
          id: 4,
          question: "What is a relatively stable endpoint community?",
          options: [
            "Climax community",
            "Pioneer community",
            "Intermediate stage",
            "Disturbed community"
          ],
          correctAnswer: 0,
          explanation: "Climax communities persist until major disturbances."
        },
        {
          id: 5,
          question: "What interaction harms both plants?",
          options: [
            "Competition",
            "Mutualism",
            "Commensalism",
            "Allelopathy"
          ],
          correctAnswer: 0,
          explanation: "Competition occurs when resources are limited."
        },
        {
          id: 6,
          question: "What interaction benefits both plants?",
          options: [
            "Mutualism",
            "Competition",
            "Commensalism",
            "Parasitism"
          ],
          correctAnswer: 0,
          explanation: "Mutualistic relationships provide reciprocal benefits."
        },
        {
          id: 7,
          question: "What is chemical inhibition of neighbors?",
          options: [
            "Allelopathy",
            "Mutualism",
            "Competition",
            "Commensalism"
          ],
          correctAnswer: 0,
          explanation: "Allelopathic plants release chemicals that suppress competitors."
        },
        {
          id: 8,
          question: "What cycle involves photosynthesis and respiration?",
          options: [
            "Carbon cycle",
            "Nitrogen cycle",
            "Phosphorus cycle",
            "Water cycle"
          ],
          correctAnswer: 0,
          explanation: "Carbon moves between atmosphere and living organisms."
        },
        {
          id: 9,
          question: "What cycle includes fixation and denitrification?",
          options: [
            "Nitrogen cycle",
            "Carbon cycle",
            "Phosphorus cycle",
            "Water cycle"
          ],
          correctAnswer: 0,
          explanation: "Nitrogen undergoes various transformations in ecosystems."
        },
        {
          id: 10,
          question: "What is a provisioning ecosystem service?",
          options: [
            "Food production",
            "Climate regulation",
            "Soil formation",
            "Aesthetic value"
          ],
          correctAnswer: 0,
          explanation: "Provisioning services provide material benefits."
        },
        {
          id: 11,
          question: "What is a regulating ecosystem service?",
          options: [
            "Climate regulation",
            "Food production",
            "Soil formation",
            "Recreational value"
          ],
          correctAnswer: 0,
          explanation: "Regulating services maintain environmental conditions."
        },
        {
          id: 12,
          question: "What is a supporting ecosystem service?",
          options: [
            "Soil formation",
            "Food production",
            "Climate regulation",
            "Aesthetic value"
          ],
          correctAnswer: 0,
          explanation: "Supporting services enable other services to exist."
        },
        {
          id: 13,
          question: "What is a cultural ecosystem service?",
          options: [
            "Aesthetic value",
            "Food production",
            "Climate regulation",
            "Soil formation"
          ],
          correctAnswer: 0,
          explanation: "Cultural services provide non-material benefits."
        },
        {
          id: 14,
          question: "What do plants absorb from soil?",
          options: [
            "Nutrients",
            "Only water",
            "Sunlight",
            "Air"
          ],
          correctAnswer: 0,
          explanation: "Plants uptake mineral nutrients through roots."
        },
        {
          id: 15,
          question: "What releases nutrients through decomposition?",
          options: [
            "Plant tissue breakdown",
            "Photosynthesis",
            "Respiration",
            "Transpiration"
          ],
          correctAnswer: 0,
          explanation: "Decomposers break down dead plant material."
        },
        {
          id: 16,
          question: "What involves weathering and biological uptake?",
          options: [
            "Phosphorus cycle",
            "Carbon cycle",
            "Nitrogen cycle",
            "Water cycle"
          ],
          correctAnswer: 0,
          explanation: "Phosphorus cycles through geological and biological processes."
        },
        {
          id: 17,
          question: "What involves transpiration and interception?",
          options: [
            "Water cycle",
            "Carbon cycle",
            "Nitrogen cycle",
            "Phosphorus cycle"
          ],
          correctAnswer: 0,
          explanation: "Plants influence water movement through ecosystems."
        },
        {
          id: 18,
          question: "What explains community structure?",
          options: [
            "Plant-plant interactions",
            "Only soil type",
            "Random chance",
            "Human management only"
          ],
          correctAnswer: 0,
          explanation: "Interactions between plants shape community composition."
        },
        {
          id: 19,
          question: "What changes through successional processes?",
          options: [
            "Plant communities",
            "Only soil chemistry",
            "Climate patterns",
            "Animal behavior only"
          ],
          correctAnswer: 0,
          explanation: "Succession involves predictable changes in plant communities."
        },
        {
          id: 20,
          question: "What drives essential nutrient cycles?",
          options: [
            "Plants",
            "Only animals",
            "Only microorganisms",
            "Geological forces only"
          ],
          correctAnswer: 0,
          explanation: "Plants play central roles in nutrient cycling."
        }
      ]
    },
    
    {
      id: 5,
      title: "Plant Genetics & Evolution",
      completed: false,
      content: `# Module 5: Plant Genetics & Evolution

## Inheritance and Evolutionary Processes
This module covers plant genetics, inheritance patterns, evolutionary mechanisms, and the origins of plant diversity.

### Mendelian Genetics in Plants
Gregor Mendel's work with pea plants established fundamental inheritance principles. These principles apply to many plant traits.

**Mendelian principles:**
- **Law of segregation**: Alleles separate during gamete formation
- **Law of independent assortment**: Genes for different traits assort independently
- **Dominance and recessiveness**: Some alleles mask others

### Chromosomes and Plant Breeding
Plants have characteristic chromosome numbers and structures. Understanding chromosome behavior enables plant breeding and genetic improvement.

**Chromosome concepts:**
- **Diploid (2n)**: Two sets of chromosomes
- **Polyploidy**: Multiple chromosome sets (common in plants)
- **Aneuploidy**: Abnormal chromosome numbers
- **Chromosome mapping**: Locating genes on chromosomes

### Evolutionary Mechanisms
Plants evolve through natural selection, genetic drift, gene flow, and mutation. These processes shape plant adaptation and diversity.

**Evolutionary forces:**
- **Natural selection**: Differential survival and reproduction
- **Genetic drift**: Random changes in allele frequencies
- **Gene flow**: Movement of genes between populations
- **Mutation**: Source of new genetic variation

### Plant Speciation Patterns
New plant species arise through various mechanisms. Speciation may be allopatric (geographic separation) or sympatric (within same area).

**Speciation types:**
- **Allopatric speciation**: Geographic isolation leads to divergence
- **Sympatric speciation**: Reproductive isolation without geographic separation
- **Polyploid speciation**: Instant speciation through chromosome doubling

### Plant Evolutionary History
Plants have a long evolutionary history from aquatic algae to modern angiosperms. Key adaptations enabled colonization of land.

**Major evolutionary events:**
- **Origin of photosynthesis**: Cyanobacteria ancestors
- **Colonization of land**: Development of cuticle, stomata, vascular tissue
- **Seed evolution**: Protection and dispersal advantages
- **Flower evolution**: Enhanced reproductive efficiency

---

## Key Learning Points
- Mendelian principles explain inheritance patterns
- Chromosome behavior enables plant breeding
- Evolutionary mechanisms shape plant diversity
- Plant history shows progressive adaptations

Genetic and evolutionary knowledge explains plant diversity and relationships!`,
      
      quiz: [
        {
          id: 1,
          question: "Who established fundamental inheritance principles with peas?",
          options: [
            "Gregor Mendel",
            "Charles Darwin",
            "Carl Linnaeus",
            "Barbara McClintock"
          ],
          correctAnswer: 0,
          explanation: "Mendel's pea plant experiments revealed basic genetic laws."
        },
        {
          id: 2,
          question: "What is the law of segregation?",
          options: [
            "Alleles separate during gamete formation",
            "Genes assort independently",
            "Some alleles are dominant",
            "Chromosomes duplicate before division"
          ],
          correctAnswer: 0,
          explanation: "Each gamete receives one allele for each gene."
        },
        {
          id: 3,
          question: "What is independent assortment?",
          options: [
            "Genes for different traits assort independently",
            "Alleles separate during gamete formation",
            "Some traits are dominant",
            "Chromosomes pair during meiosis"
          ],
          correctAnswer: 0,
          explanation: "Inheritance of one trait doesn't affect inheritance of another."
        },
        {
          id: 4,
          question: "What does diploid (2n) mean?",
          options: [
            "Two sets of chromosomes",
            "One set of chromosomes",
            "Multiple chromosome sets",
            "Abnormal chromosome number"
          ],
          correctAnswer: 0,
          explanation: "Diploid organisms have two copies of each chromosome."
        },
        {
          id: 5,
          question: "What is polyploidy?",
          options: [
            "Multiple chromosome sets",
            "Two chromosome sets",
            "One chromosome set",
            "Missing chromosomes"
          ],
          correctAnswer: 0,
          explanation: "Polyploidy is common in plants and can create new species."
        },
        {
          id: 6,
          question: "What is natural selection?",
          options: [
            "Differential survival and reproduction",
            "Random allele frequency changes",
            "Gene movement between populations",
            "Source of new variation"
          ],
          correctAnswer: 0,
          explanation: "Traits enhancing survival/reproduction become more common."
        },
        {
          id: 7,
          question: "What is genetic drift?",
          options: [
            "Random changes in allele frequencies",
            "Differential survival",
            "Gene movement",
            "New mutations"
          ],
          correctAnswer: 0,
          explanation: "Drift causes random evolutionary changes, especially in small populations."
        },
        {
          id: 8,
          question: "What is gene flow?",
          options: [
            "Movement of genes between populations",
            "Random allele changes",
            "Differential survival",
            "New mutations"
          ],
          correctAnswer: 0,
          explanation: "Gene flow connects populations genetically."
        },
        {
          id: 9,
          question: "What is mutation?",
          options: [
            "Source of new genetic variation",
            "Random allele frequency changes",
            "Gene movement",
            "Differential survival"
          ],
          correctAnswer: 0,
          explanation: "Mutations create new alleles."
        },
        {
          id: 10,
          question: "What is allopatric speciation?",
          options: [
            "Geographic isolation leads to divergence",
            "Reproductive isolation without separation",
            "Instant chromosome doubling",
            "Gradual climate adaptation"
          ],
          correctAnswer: 0,
          explanation: "Physical separation prevents gene flow between populations."
        },
        {
          id: 11,
          question: "What is sympatric speciation?",
          options: [
            "Reproductive isolation without geographic separation",
            "Geographic isolation leads to divergence",
            "Instant chromosome doubling",
            "Migration to new areas"
          ],
          correctAnswer: 0,
          explanation: "Reproductive barriers evolve within a single population."
        },
        {
          id: 12,
          question: "What is polyploid speciation?",
          options: [
            "Instant speciation through chromosome doubling",
            "Geographic isolation",
            "Reproductive isolation without separation",
            "Gradual divergence"
          ],
          correctAnswer: 0,
          explanation: "Chromosome doubling can create reproductively isolated plants immediately."
        },
        {
          id: 13,
          question: "What enabled plant colonization of land?",
          options: [
            "Cuticle, stomata, vascular tissue",
            "Only chlorophyll development",
            "Flower evolution",
            "Seed development only"
          ],
          correctAnswer: 0,
          explanation: "These adaptations solved challenges of terrestrial life."
        },
        {
          id: 14,
          question: "What provided protection and dispersal advantages?",
          options: [
            "Seeds",
            "Flowers",
            "Leaves",
            "Roots"
          ],
          correctAnswer: 0,
          explanation: "Seeds protect embryos and aid dispersal."
        },
        {
          id: 15,
          question: "What enhanced reproductive efficiency?",
          options: [
            "Flowers",
            "Seeds",
            "Leaves",
            "Roots"
          ],
          correctAnswer: 0,
          explanation: "Flowers attracted animal pollinators."
        },
        {
          id: 16,
          question: "What explains inheritance patterns?",
          options: [
            "Mendelian principles",
            "Only environmental factors",
            "Random chance",
            "Human selection only"
          ],
          correctAnswer: 0,
          explanation: "Mendel's laws describe basic inheritance mechanisms."
        },
        {
          id: 17,
          question: "What enables plant breeding?",
          options: [
            "Chromosome behavior understanding",
            "Only natural selection",
            "Random mutations",
            "Climate patterns"
          ],
          correctAnswer: 0,
          explanation: "Knowledge of genetics allows controlled breeding."
        },
        {
          id: 18,
          question: "What shapes plant diversity?",
          options: [
            "Evolutionary mechanisms",
            "Only soil chemistry",
            "Random planting",
            "Human gardening only"
          ],
          correctAnswer: 0,
          explanation: "Evolutionary processes generate and shape diversity."
        },
        {
          id: 19,
          question: "What shows progressive adaptations?",
          options: [
            "Plant evolutionary history",
            "Only current distributions",
            "Garden designs",
            "Fossil locations only"
          ],
          correctAnswer: 0,
          explanation: "The history of plants reveals adaptation milestones."
        },
        {
          id: 20,
          question: "What explains plant relationships?",
          options: [
            "Evolutionary knowledge",
            "Only flower colors",
            "Growth rates",
            "Leaf sizes"
          ],
          correctAnswer: 0,
          explanation: "Evolutionary history explains how plants are related."
        }
      ]
    },
    
    {
      id: 6,
      title: "Applied Botanical Science",
      completed: false,
      content: `# Module 6: Applied Botanical Science

## Practical Applications of Botanical Knowledge
This final module explores real-world applications of botanical science in agriculture, conservation, medicine, and industry.

### Agricultural Applications
Botanical science improves crop production through breeding, pest management, and sustainable practices. Understanding plant physiology enhances agricultural efficiency.

**Agricultural applications:**
- **Crop breeding**: Developing improved varieties
- **Integrated pest management**: Reducing pesticide use
- **Sustainable agriculture**: Minimizing environmental impact
- **Precision farming**: Optimizing resource use

### Conservation and Restoration
Botanical knowledge guides conservation efforts and habitat restoration. Understanding plant ecology helps protect endangered species and restore degraded ecosystems.

**Conservation applications:**
- **Endangered species protection**: Population monitoring and management
- **Habitat restoration**: Re-establishing native plant communities
- **Invasive species control**: Managing non-native plants
- **Seed banking**: Preserving genetic diversity

### Medicinal and Economic Botany
Plants provide medicines, fibers, dyes, and other valuable products. Ethnobotany studies traditional plant uses, while pharmacognosy explores medicinal properties.

**Economic applications:**
- **Phytomedicine**: Plant-derived medicines
- **Natural products**: Plant-based chemicals for industry
- **Ethnobotany**: Traditional knowledge documentation
- **Horticulture**: Ornamental and food plant cultivation

### Botanical Research Methods
Modern botanical research employs various techniques from field studies to laboratory analyses. Understanding research methods enables scientific contributions.

**Research approaches:**
- **Field surveys**: Documenting plant distributions
- **Herbarium studies**: Using preserved specimens
- **Laboratory techniques**: Microscopy, chromatography, molecular methods
- **Experimental design**: Controlled studies of plant responses

### Professional Botanical Careers
Botanical science offers diverse career paths in research, education, conservation, agriculture, and industry. Professional development includes societies and certifications.

**Career opportunities:**
- **Research botanist**: Academic or government research
- **Conservation officer**: Protected area management
- **Agricultural consultant**: Crop improvement and management
- **Botanical educator**: Teaching and public outreach
- **Industry positions**: Pharmaceutical, seed, horticultural companies

---

## Key Learning Points
- Botanical science improves agricultural practices
- Conservation efforts rely on botanical knowledge
- Plants provide valuable medicines and products
- Research methods enable scientific discovery
- Diverse career opportunities exist in botany

Applying botanical knowledge benefits society and the environment!`,
      
      quiz: [
        {
          id: 1,
          question: "What improves crop production through breeding?",
          options: [
            "Agricultural applications",
            "Only natural selection",
            "Random planting",
            "Climate change"
          ],
          correctAnswer: 0,
          explanation: "Botanical knowledge guides crop improvement."
        },
        {
          id: 2,
          question: "What reduces pesticide use in agriculture?",
          options: [
            "Integrated pest management",
            "Only chemical spraying",
            "Complete pest elimination",
            "Crop rotation only"
          ],
          correctAnswer: 0,
          explanation: "IPM combines multiple approaches for pest control."
        },
        {
          id: 3,
          question: "What minimizes agricultural environmental impact?",
          options: [
            "Sustainable agriculture",
            "Only maximum production",
            "Chemical-intensive farming",
            "Large monocultures only"
          ],
          correctAnswer: 0,
          explanation: "Sustainable practices protect long-term productivity."
        },
        {
          id: 4,
          question: "What protects endangered plant species?",
          options: [
            "Conservation applications",
            "Only commercial cultivation",
            "Habitat destruction",
            "Random collection"
          ],
          correctAnswer: 0,
          explanation: "Botanical knowledge guides species protection."
        },
        {
          id: 5,
          question: "What re-establishes native plant communities?",
          options: [
            "Habitat restoration",
            "Only natural succession",
            "Planting non-natives",
            "Soil removal"
          ],
          correctAnswer: 0,
          explanation: "Restoration actively rebuilds degraded ecosystems."
        },
        {
          id: 6,
          question: "What manages non-native plants?",
          options: [
            "Invasive species control",
            "Only promoting invasives",
            "Ignoring all plants",
            "Planting more invasives"
          ],
          correctAnswer: 0,
          explanation: "Controlling invasives protects native biodiversity."
        },
        {
          id: 7,
          question: "What preserves genetic diversity?",
          options: [
            "Seed banking",
            "Only field collections",
            "Plant destruction",
            "Single variety planting"
          ],
          correctAnswer: 0,
          explanation: "Seed banks safeguard plant genetic resources."
        },
        {
          id: 8,
          question: "What studies traditional plant uses?",
          options: [
            "Ethnobotany",
            "Only laboratory analysis",
            "Chemical synthesis",
            "Genetic engineering"
          ],
          correctAnswer: 0,
          explanation: "Ethnobotany documents cultural plant knowledge."
        },
        {
          id: 9,
          question: "What explores medicinal properties?",
          options: [
            "Pharmacognosy",
            "Only plant identification",
            "Soil chemistry",
            "Climate studies"
          ],
          correctAnswer: 0,
          explanation: "Pharmacognosy studies drugs from natural sources."
        },
        {
          id: 10,
          question: "What documents plant distributions?",
          options: [
            "Field surveys",
            "Only laboratory work",
            "Computer modeling only",
            "Historical records only"
          ],
          correctAnswer: 0,
          explanation: "Field surveys provide distribution data."
        },
        {
          id: 11,
          question: "What uses preserved specimens?",
          options: [
            "Herbarium studies",
            "Only live plants",
            "Computer simulations",
            "Oral histories only"
          ],
          correctAnswer: 0,
          explanation: "Herbaria provide permanent botanical records."
        },
        {
          id: 12,
          question: "What includes microscopy and chromatography?",
          options: [
            "Laboratory techniques",
            "Only field observations",
            "Garden design",
            "Public outreach"
          ],
          correctAnswer: 0,
          explanation: "Laboratory methods analyze plant structure and chemistry."
        },
        {
          id: 13,
          question: "What studies plant responses experimentally?",
          options: [
            "Experimental design",
            "Only natural observation",
            "Random guessing",
            "Historical comparison"
          ],
          correctAnswer: 0,
          explanation: "Controlled experiments test specific hypotheses."
        },
        {
          id: 14,
          question: "What career involves academic research?",
          options: [
            "Research botanist",
            "Only gardening",
            "Landscaping only",
            "Retail plant sales"
          ],
          correctAnswer: 0,
          explanation: "Research botanists conduct scientific studies."
        },
        {
          id: 15,
          question: "What career manages protected areas?",
          options: [
            "Conservation officer",
            "Only laboratory work",
            "Plant breeding only",
            "Pharmaceutical sales"
          ],
          correctAnswer: 0,
          explanation: "Conservation officers protect natural areas."
        },
        {
          id: 16,
          question: "What guides crop improvement?",
          options: [
            "Agricultural consultant",
            "Only retail sales",
            "Garden design",
            "Plant photography"
          ],
          correctAnswer: 0,
          explanation: "Agricultural consultants advise on crop management."
        },
        {
          id: 17,
          question: "What benefits society and environment?",
          options: [
            "Applying botanical knowledge",
            "Only theoretical study",
            "Ignoring plants",
            "Destroying habitats"
          ],
          correctAnswer: 0,
          explanation: "Practical applications create tangible benefits."
        },
        {
          id: 18,
          question: "What relies on botanical knowledge?",
          options: [
            "Conservation efforts",
            "Only construction",
            "Computer programming",
            "Automotive design"
          ],
          correctAnswer: 0,
          explanation: "Effective conservation requires botanical understanding."
        },
        {
          id: 19,
          question: "What provides valuable medicines?",
          options: [
            "Plants",
            "Only synthetic chemicals",
            "Minerals only",
            "Animal products only"
          ],
          correctAnswer: 0,
          explanation: "Many medicines originate from plants."
        },
        {
          id: 20,
          question: "What enables scientific discovery?",
          options: [
            "Research methods",
            "Only guessing",
            "Random observation",
            "Traditional stories only"
          ],
          correctAnswer: 0,
          explanation: "Systematic methods advance botanical science."
        }
      ]
    }
  ],
  
  // 3. FINAL EXAM STRUCTURE - 40 Comprehensive Questions
  finalExam: {
    title: "Botanical Science Diploma Final Examination",
    description: "Comprehensive examination covering all six advanced modules. Tests understanding of plant taxonomy, anatomy, physiology, ecology, genetics, and applications.",
    passingScore: 75,
    questions: [
      {
        id: 1,
        question: "What is the basic biological unit in plant classification?",
        options: [
          "Species",
          "Genus",
          "Family",
          "Order"
        ],
        correctAnswer: 0,
        explanation: "The species is the fundamental unit of biological classification.",
        module: 1
      },
      {
        id: 2,
        question: "Who developed the binomial nomenclature system?",
        options: [
          "Carl Linnaeus",
          "Charles Darwin",
          "Gregor Mendel",
          "Robert Brown"
        ],
        correctAnswer: 0,
        explanation: "Linnaeus established the modern system of scientific naming.",
        module: 1
      },
      {
        id: 3,
        question: "What does molecular systematics primarily use?",
        options: [
          "DNA sequencing and analysis",
          "Only leaf shape comparison",
          "Flower color patterns",
          "Growth rate measurements"
        ],
        correctAnswer: 0,
        explanation: "Molecular data from DNA provides evidence for relationships.",
        module: 1
      },
      {
        id: 4,
        question: "What is the function of the root cap?",
        options: [
          "Protecting the growing tip",
          "Absorbing water",
          "Storing nutrients",
          "Anchoring the plant"
        ],
        correctAnswer: 0,
        explanation: "The root cap protects delicate meristematic cells.",
        module: 2
      },
      {
        id: 5,
        question: "Where do root cells lengthen?",
        options: [
          "Zone of elongation",
          "Root cap area",
          "Maturation zone",
          "Root hair region"
        ],
        correctAnswer: 0,
        explanation: "Cell elongation occurs just behind the root tip.",
        module: 2
      },
      {
        id: 6,
        question: "What contains xylem and phloem in roots?",
        options: [
          "Vascular cylinder",
          "Root epidermis",
          "Root cap",
          "Root hairs"
        ],
        correctAnswer: 0,
        explanation: "The vascular cylinder contains transport tissues.",
        module: 2
      },
      {
        id: 7,
        question: "Where does photosynthesis occur in plant cells?",
        options: [
          "Chloroplasts",
          "Mitochondria",
          "Nucleus",
          "Vacuole"
        ],
        correctAnswer: 0,
        explanation: "Chloroplasts contain chlorophyll and photosynthetic machinery.",
        module: 3
      },
      {
        id: 8,
        question: "What do light reactions produce?",
        options: [
          "ATP and NADPH",
          "Glucose directly",
          "Only oxygen",
          "Carbon dioxide"
        ],
        correctAnswer: 0,
        explanation: "Light reactions convert light energy to chemical carriers.",
        module: 3
      },
      {
        id: 9,
        question: "What hormone promotes cell elongation?",
        options: [
          "Auxins",
          "Gibberellins",
          "Cytokinins",
          "Abscisic acid"
        ],
        correctAnswer: 0,
        explanation: "Auxins stimulate cell elongation in stems.",
        module: 3
      },
      {
        id: 10,
        question: "What begins on bare substrates like rock?",
        options: [
          "Primary succession",
          "Secondary succession",
          "Climax community",
          "Disturbance regime"
        ],
        correctAnswer: 0,
        explanation: "Primary succession starts where no soil exists.",
        module: 4
      },
      {
        id: 11,
        question: "What are first colonizers in succession called?",
        options: [
          "Pioneer species",
          "Climax species",
          "Intermediate species",
          "Dominant species"
        ],
        correctAnswer: 0,
        explanation: "Pioneer species are adapted to colonize harsh conditions.",
        module: 4
      },
      {
        id: 12,
        question: "What interaction benefits both plants?",
        options: [
          "Mutualism",
          "Competition",
          "Commensalism",
          "Parasitism"
        ],
        correctAnswer: 0,
        explanation: "Mutualistic relationships provide reciprocal benefits.",
        module: 4
      },
      {
        id: 13,
        question: "Who established fundamental inheritance principles with peas?",
        options: [
          "Gregor Mendel",
          "Charles Darwin",
          "Carl Linnaeus",
          "Barbara McClintock"
        ],
        correctAnswer: 0,
        explanation: "Mendel's pea plant experiments revealed basic genetic laws.",
        module: 5
      },
      {
        id: 14,
        question: "What is the law of segregation?",
        options: [
          "Alleles separate during gamete formation",
          "Genes assort independently",
          "Some alleles are dominant",
          "Chromosomes duplicate before division"
        ],
        correctAnswer: 0,
        explanation: "Each gamete receives one allele for each gene.",
        module: 5
      },
      {
        id: 15,
        question: "What is natural selection?",
        options: [
          "Differential survival and reproduction",
          "Random allele frequency changes",
          "Gene movement between populations",
          "Source of new variation"
        ],
        correctAnswer: 0,
        explanation: "Traits enhancing survival/reproduction become more common.",
        module: 5
      },
      {
        id: 16,
        question: "What improves crop production through breeding?",
        options: [
          "Agricultural applications",
          "Only natural selection",
          "Random planting",
          "Climate change"
        ],
        correctAnswer: 0,
        explanation: "Botanical knowledge guides crop improvement.",
        module: 6
      },
      {
        id: 17,
        question: "What reduces pesticide use in agriculture?",
        options: [
          "Integrated pest management",
          "Only chemical spraying",
          "Complete pest elimination",
          "Crop rotation only"
        ],
        correctAnswer: 0,
        explanation: "IPM combines multiple approaches for pest control.",
        module: 6
      },
      {
        id: 18,
        question: "What protects endangered plant species?",
        options: [
          "Conservation applications",
          "Only commercial cultivation",
          "Habitat destruction",
          "Random collection"
        ],
        correctAnswer: 0,
        explanation: "Botanical knowledge guides species protection.",
        module: 6
      },
      {
        id: 19,
        question: "How should scientific names be formatted when printed?",
        options: [
          "Italicized with genus capitalized",
          "Always in bold capital letters",
          "Underlined with no capitalization",
          "Regular font with both words capitalized"
        ],
        correctAnswer: 0,
        explanation: "Italicization and proper capitalization are standard conventions.",
        module: 1
      },
      {
        id: 20,
        question: "What indicates who first published a plant name?",
        options: [
          "Author citation",
          "Type specimen location",
          "Herbarium code",
          "Publication date"
        ],
        correctAnswer: 0,
        explanation: "Author citations credit the original publishing botanist.",
        module: 1
      },
      {
        id: 21,
        question: "What increases surface area for water absorption?",
        options: [
          "Root hairs",
          "Root cap",
          "Vascular cylinder",
          "Cortex tissue"
        ],
        correctAnswer: 0,
        explanation: "Root hairs dramatically increase absorptive surface area.",
        module: 2
      },
      {
        id: 22,
        question: "What is the waxy waterproof layer on leaves?",
        options: [
          "Cuticle",
          "Epidermis",
          "Mesophyll",
          "Stomata"
        ],
        correctAnswer: 0,
        explanation: "The cuticle prevents excessive water loss.",
        module: 2
      },
      {
        id: 23,
        question: "What uses ATP and NADPH to make sugars?",
        options: [
          "Calvin cycle",
          "Light reactions",
          "Glycolysis",
          "Krebs cycle"
        ],
        correctAnswer: 0,
        explanation: "The Calvin cycle fixes carbon using energy from light reactions.",
        module: 3
      },
      {
        id: 24,
        question: "What stimulates stem elongation and germination?",
        options: [
          "Gibberellins",
          "Auxins",
          "Cytokinins",
          "Ethylene"
        ],
        correctAnswer: 0,
        explanation: "Gibberellins promote stem growth and break seed dormancy.",
        module: 3
      },
      {
        id: 25,
        question: "What occurs after disturbance in existing ecosystems?",
        options: [
          "Secondary succession",
          "Primary succession",
          "Climax stability",
          "Complete destruction"
        ],
        correctAnswer: 0,
        explanation: "Secondary succession rebuilds communities after disturbances.",
        module: 4
      },
      {
        id: 26,
        question: "What is a provisioning ecosystem service?",
        options: [
          "Food production",
          "Climate regulation",
          "Soil formation",
          "Aesthetic value"
        ],
        correctAnswer: 0,
        explanation: "Provisioning services provide material benefits.",
        module: 4
      },
      {
        id: 27,
        question: "What is diploid (2n)?",
        options: [
          "Two sets of chromosomes",
          "One set of chromosomes",
          "Multiple chromosome sets",
          "Abnormal chromosome number"
        ],
        correctAnswer: 0,
        explanation: "Diploid organisms have two copies of each chromosome.",
        module: 5
      },
      {
        id: 28,
        question: "What is allopatric speciation?",
        options: [
          "Geographic isolation leads to divergence",
          "Reproductive isolation without separation",
          "Instant chromosome doubling",
          "Gradual climate adaptation"
        ],
        correctAnswer: 0,
        explanation: "Physical separation prevents gene flow between populations.",
        module: 5
      },
      {
        id: 29,
        question: "What re-establishes native plant communities?",
        options: [
          "Habitat restoration",
          "Only natural succession",
          "Planting non-natives",
          "Soil removal"
        ],
        correctAnswer: 0,
        explanation: "Restoration actively rebuilds degraded ecosystems.",
        module: 6
      },
      {
        id: 30,
        question: "What studies traditional plant uses?",
        options: [
          "Ethnobotany",
          "Only laboratory analysis",
          "Chemical synthesis",
          "Genetic engineering"
        ],
        correctAnswer: 0,
        explanation: "Ethnobotany documents cultural plant knowledge.",
        module: 6
      },
      {
        id: 31,
        question: "What do modern taxonomists use besides morphology?",
        options: [
          "Genetic data and evolutionary relationships",
          "Only common names",
          "Garden popularity",
          "Historical records only"
        ],
        correctAnswer: 0,
        explanation: "Multiple evidence types provide more accurate classifications.",
        module: 1
      },
      {
        id: 32,
        question: "What are the male reproductive parts of flowers?",
        options: [
          "Stamens",
          "Carpels",
          "Petals",
          "Sepals"
        ],
        correctAnswer: 0,
        explanation: "Stamens produce pollen.",
        module: 2
      },
      {
        id: 33,
        question: "What promotes fruit ripening?",
        options: [
          "Ethylene",
          "Auxins",
          "Cytokinins",
          "Gibberellins"
        ],
        correctAnswer: 0,
        explanation: "Ethylene accelerates ripening processes.",
        module: 3
      },
      {
        id: 34,
        question: "What is chemical inhibition of neighbors called?",
        options: [
          "Allelopathy",
          "Mutualism",
          "Competition",
          "Commensalism"
        ],
        correctAnswer: 0,
        explanation: "Allelopathic plants release chemicals that suppress competitors.",
        module: 4
      },
      {
        id: 35,
        question: "What is polyploidy?",
        options: [
          "Multiple chromosome sets",
          "Two chromosome sets",
          "One chromosome set",
          "Missing chromosomes"
        ],
        correctAnswer: 0,
        explanation: "Polyploidy is common in plants and can create new species.",
        module: 5
      },
      {
        id: 36,
        question: "What preserves genetic diversity?",
        options: [
          "Seed banking",
          "Only field collections",
          "Plant destruction",
          "Single variety planting"
        ],
        correctAnswer: 0,
        explanation: "Seed banks safeguard plant genetic resources.",
        module: 6
      },
      {
        id: 37,
        question: "What provides universal understanding across languages?",
        options: [
          "Scientific names",
          "Common names",
          "Local names",
          "Trade names"
        ],
        correctAnswer: 0,
        explanation: "Scientific names are standardized internationally.",
        module: 1
      },
      {
        id: 38,
        question: "What reveals evolutionary relationships?",
        options: [
          "Reproductive anatomy",
          "Plant height only",
          "Leaf color",
          "Growth rate"
        ],
        correctAnswer: 0,
        explanation: "Floral structures provide important taxonomic characters.",
        module: 2
      },
      {
        id: 39,
        question: "What coordinates plant growth and responses?",
        options: [
          "Hormones",
          "Only environmental cues",
          "Random processes",
          "Human intervention"
        ],
        correctAnswer: 0,
        explanation: "Hormones are chemical messengers that regulate plant processes.",
        module: 3
      },
      {
        id: 40,
        question: "What benefits society and environment?",
        options: [
          "Applying botanical knowledge",
          "Only theoretical study",
          "Ignoring plants",
          "Destroying habitats"
        ],
        correctAnswer: 0,
        explanation: "Practical applications create tangible benefits.",
        module: 6
      }
    ]
  }
};

// Export for use in your application
export default botanicalScienceDiploma;
