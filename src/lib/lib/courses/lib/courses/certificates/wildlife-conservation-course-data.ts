// Wildlife Conservation (Diploma) Course Content
// Advanced diploma building on Zoology Certificate
// All content is text-only with integrated quizzes

export const wildlifeConservationDiploma = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "wildlife-conservation-diploma",
  title: "Wildlife Conservation (Diploma)",
  description: "Advanced training in wildlife conservation principles, techniques, and management. This diploma builds on zoological knowledge to teach habitat management, species protection strategies, conservation planning, and policy implementation for wildlife professionals.",
  duration: "8 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  prerequisite: "Zoology Certificate",
  icon: "🦒",
  badge: "Diploma",
  
  // 2. MODULE ARCHITECTURE (6 Advanced Modules + Exam)
  modules: [
    {
      id: 1,
      title: "Conservation Biology Foundations",
      content: `# Module 1: Conservation Biology Foundations

## The Science of Conservation
Welcome to Wildlife Conservation Diploma. This first module establishes the scientific foundations of conservation biology. Conservation biology is the applied science of maintaining Earth's biological diversity while understanding human impacts on ecosystems.

## Core Conservation Principles
Modern conservation operates on several key principles:

**Biodiversity has intrinsic value** - Species and ecosystems have worth beyond human use
**Evolution is fundamental** - Conservation must consider evolutionary processes
**Ecology provides context** - Species exist within complex ecological relationships
**Humans are part of ecosystems** - Conservation must integrate human needs
**Uncertainty requires precaution** - We must act despite incomplete knowledge

These principles guide all conservation decision-making.

## Levels of Biodiversity
Conservation addresses biodiversity at multiple scales:

**Genetic diversity** - Variation within species (essential for adaptation)
**Species diversity** - Variety of species in an area (richness and evenness)
**Ecosystem diversity** - Range of habitats and ecological processes
**Landscape diversity** - Patterns of ecosystems across regions

Effective conservation addresses all these levels.

## Extinction Dynamics and Threats
Understanding why species disappear is crucial:

**Natural extinction rates** - Background rate is about 1 species per million per year
**Current extinction rates** - Estimated 100-1000 times higher due to human activities
**Major anthropogenic threats:**
- Habitat loss and fragmentation (primary cause)
- Climate change (emerging major threat)
- Overexploitation (hunting, fishing, collecting)
- Invasive species (biological pollution)
- Pollution (chemical contamination)

Most threatened species face multiple, interacting threats.

## Population Viability Analysis
PVA is a key tool for assessing extinction risk:

**What PVA examines:**
- Population size and structure
- Birth and death rates
- Environmental variability
- Catastrophic events
- Genetic factors

**PVA outputs:**
- Probability of extinction over time
- Minimum viable population size
- Key threats and management priorities

PVA helps prioritize conservation actions.

## Conservation Genetics
Genetic principles guide conservation:

**Genetic diversity importance:**
- Adaptation to environmental change
- Resistance to diseases
- Long-term evolutionary potential

**Genetic threats:**
- Inbreeding depression (reduced fitness)
- Genetic drift (loss of variation in small populations)
- Founder effects (limited genetic representation)

**Genetic management strategies:**
- Maintaining large, connected populations
- Genetic rescue through translocation
- Captive breeding with genetic management

## Island Biogeography Theory
This theory explains species distribution patterns:

**Key concepts:**
- Larger islands support more species
- Islands closer to mainland have higher immigration rates
- Species-area relationship predicts extinction from habitat loss

**Conservation applications:**
- Designing nature reserves (larger is better)
- Creating habitat corridors (reducing isolation)
- Prioritizing habitat protection (size and connectivity matter)

## The Conservation Crisis Scale
Understanding the magnitude of challenges:

**Global statistics:**
- 1 million species threatened with extinction (IPBES 2019)
- 75% of terrestrial environment severely altered
- 85% of wetlands lost since 1700
- Wildlife populations declined 68% since 1970 (WWF Living Planet Report)

These sobering statistics highlight conservation urgency.

Conservation biology provides the scientific basis for effective action.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is conservation biology?",
          options: ["Only animal protection", "Applied science maintaining biodiversity", "Only habitat management", "Political movement"],
          correctAnswer: 1,
          explanation: "Conservation biology applies scientific principles to preserve Earth's biological diversity."
        },
        {
          id: 2,
          question: "What principle states biodiversity has value beyond human use?",
          options: ["Utilitarian value", "Intrinsic value", "Only economic value", "No value principle"],
          correctAnswer: 1,
          explanation: "Intrinsic value recognizes species and ecosystems have worth independent of human benefits."
        },
        {
          id: 3,
          question: "What are the three levels of biodiversity?",
          options: ["Only species diversity", "Genetic, species, ecosystem diversity", "Only habitat diversity", "Individual, population, community"],
          correctAnswer: 1,
          explanation: "Biodiversity exists at genetic (within species), species, and ecosystem levels."
        },
        {
          id: 4,
          question: "What is the primary cause of species extinction today?",
          options: ["Climate change", "Habitat loss and fragmentation", "Only hunting", "Natural disasters"],
          correctAnswer: 1,
          explanation: "Habitat destruction and fragmentation are the leading causes of biodiversity loss worldwide."
        },
        {
          id: 5,
          question: "What does Population Viability Analysis assess?",
          options: ["Only population size", "Extinction risk and management needs", "Only genetic diversity", "Habitat quality only"],
          correctAnswer: 1,
          explanation: "PVA models population dynamics to estimate extinction risk and identify key threats."
        },
        {
          id: 6,
          question: "Why is genetic diversity important for conservation?",
          options: ["Only for breeding", "Adaptation, disease resistance, evolutionary potential", "Makes animals look different", "Not important"],
          correctAnswer: 1,
          explanation: "Genetic diversity enables populations to adapt to changing environments and resist diseases."
        },
        {
          id: 7,
          question: "What does Island Biogeography Theory predict about habitat size?",
          options: ["Size doesn't matter", "Larger areas support more species", "Smaller is better", "Only shape matters"],
          correctAnswer: 1,
          explanation: "The theory shows larger habitat areas can support more species and have lower extinction rates."
        },
        {
          id: 8,
          question: "How much have wildlife populations declined since 1970?",
          options: ["10%", "68%", "No decline", "Increased"],
          correctAnswer: 1,
          explanation: "WWF's Living Planet Report 2020 showed 68% average decline in vertebrate populations since 1970."
        },
        {
          id: 9,
          question: "What is inbreeding depression?",
          options: ["Increased fitness", "Reduced fitness from mating relatives", "No genetic effect", "Only in captivity"],
          correctAnswer: 1,
          explanation: "Inbreeding depression reduces survival and reproduction when genetically similar individuals mate."
        },
        {
          id: 10,
          question: "What conservation principle addresses incomplete knowledge?",
          options: ["Certainty principle", "Precautionary principle", "Ignorance principle", "No principle needed"],
          correctAnswer: 1,
          explanation: "The precautionary principle says we should take conservation action despite scientific uncertainty."
        },
        {
          id: 11,
          question: "What percentage of wetlands have been lost since 1700?",
          options: ["25%", "85%", "10%", "No loss"],
          correctAnswer: 1,
          explanation: "Approximately 85% of global wetlands have been lost due to drainage and conversion."
        },
        {
          id: 12,
          question: "What is genetic drift?",
          options: ["Natural selection", "Random loss of genetic variation", "Intentional breeding", "Migration effect"],
          correctAnswer: 1,
          explanation: "Genetic drift is random changes in gene frequencies, especially problematic in small populations."
        },
        {
          id: 13,
          question: "What does species-area relationship predict?",
          options: ["No relationship", "Habitat loss leads to species loss", "More habitat means fewer species", "Only for islands"],
          correctAnswer: 1,
          explanation: "The species-area relationship predicts that habitat loss will lead to proportional species loss."
        },
        {
          id: 14,
          question: "What is the estimated current extinction rate compared to natural?",
          options: ["Same rate", "100-1000 times higher", "Lower", "Cannot compare"],
          correctAnswer: 1,
          explanation: "Human activities have accelerated extinction rates to 100-1000 times the natural background rate."
        },
        {
          id: 15,
          question: "What does genetic rescue involve?",
          options: ["Only captive breeding", "Introducing new genetic material to small populations", "Reducing diversity", "Isolating populations"],
          correctAnswer: 1,
          explanation: "Genetic rescue translocates individuals to increase genetic diversity in inbred populations."
        },
        {
          id: 16,
          question: "What principle recognizes humans in ecosystems?",
          options: ["Human exclusion", "Human integration", "Only nature matters", "Ignoring humans"],
          correctAnswer: 1,
          explanation: "Modern conservation recognizes humans as part of ecosystems that must be integrated into solutions."
        },
        {
          id: 17,
          question: "What is landscape diversity?",
          options: ["Only species patterns", "Patterns of ecosystems across regions", "Only genetic patterns", "Individual variation"],
          correctAnswer: 1,
          explanation: "Landscape diversity refers to the spatial arrangement of different ecosystems across larger areas."
        },
        {
          id: 18,
          question: "What does PVA estimate for populations?",
          options: ["Only current size", "Probability of extinction over time", "Only birth rates", "Habitat quality"],
          correctAnswer: 1,
          explanation: "PVA models estimate the likelihood a population will go extinct within a specific timeframe."
        },
        {
          id: 19,
          question: "What threat category includes climate change?",
          options: ["Historical threat", "Emerging major threat", "Minor threat", "No threat"],
          correctAnswer: 1,
          explanation: "Climate change is increasingly recognized as a major emerging threat to biodiversity."
        },
        {
          id: 20,
          question: "How many species are estimated threatened with extinction?",
          options: ["10,000", "1 million", "100,000", "No reliable estimate"],
          correctAnswer: 1,
          explanation: "The 2019 IPBES report estimated approximately 1 million species face extinction threats."
        }
      ]
    },
    {
      id: 2,
      title: "Habitat Management and Restoration",
      content: `# Module 2: Habitat Management and Restoration

## Managing Wildlife Habitats
This module covers practical approaches to habitat management and restoration. Effective conservation requires not just protecting habitats but actively managing and restoring them to support wildlife populations.

## Habitat Assessment Methods
Before managing habitats, we must assess them properly:

**Habitat mapping** - Creating detailed maps of habitat types and conditions
**Vegetation surveys** - Documenting plant species composition and structure
**Soil analysis** - Testing soil properties affecting plant growth
**Water quality assessment** - Measuring physical and chemical water parameters
**Wildlife surveys** - Documenting species presence and abundance
**Remote sensing** - Using satellite or aerial imagery for large-scale assessment

Comprehensive assessment informs management decisions.

## Habitat Management Techniques
Different habitats require different management approaches:

**Forest management:**
- Selective logging vs. clear-cutting
- Maintaining old-growth characteristics
- Controlling invasive plant species
- Managing fire regimes (prescribed burning)

**Grassland management:**
- Controlled grazing (mimicking natural herbivory)
- Prescribed burning (maintaining grassland ecosystems)
- Invasive species control
- Restoring native plant communities

**Wetland management:**
- Water level manipulation
- Controlling drainage and fill
- Managing vegetation structure
- Improving water quality

**Riparian zone management:**
- Maintaining buffer strips along waterways
- Controlling erosion
- Restoring natural flow patterns
- Managing livestock access

## Ecological Restoration Principles
Restoration aims to return degraded ecosystems to functional states:

**Restoration goals:**
- Reestablish ecological processes
- Recover native species composition
- Restore structural complexity
- Reconnect fragmented habitats

**Restoration approaches:**
- Passive restoration (removing disturbances)
- Active restoration (planting, seeding, earthmoving)
- Rehabilitation (improving function without full restoration)
- Reclamation (making land usable for other purposes)

## Invasive Species Management
Invasives are major threats requiring specific strategies:

**Prevention** - Stopping introductions through regulations and inspections
**Early detection** - Monitoring for new invasions
**Rapid response** - Eliminating populations before establishment
**Control methods:**
- Mechanical (physical removal)
- Chemical (herbicides, pesticides)
- Biological (natural enemies)
- Cultural (changing conditions to favor natives)

**Integrated pest management** combines multiple approaches.

## Fire Management in Conservation
Fire plays natural roles in many ecosystems:

**Fire-adapted ecosystems** - Depend on periodic fire
**Fire suppression consequences** - Alters vegetation structure and composition
**Prescribed burning benefits:**
- Reduces fuel loads (preventing catastrophic fires)
- Maintains fire-dependent species
- Controls invasive plants
- Recycles nutrients

**Fire management planning** considers timing, intensity, and frequency.

## Water Management for Wildlife
Water resources are critical for many species:

**Water source development:**
- Natural springs protection
- Artificial water developments (guzzlers, ponds)
- Maintaining natural water regimes

**Water quality management:**
- Reducing pollution inputs
- Managing sedimentation
- Controlling temperature changes
- Maintaining natural flow patterns

**Riparian habitat protection** - Critical zones along waterways.

## Corridor Creation and Connectivity
Habitat fragmentation requires connectivity solutions:

**Wildlife corridor types:**
- Riparian corridors (along waterways)
- Overpasses/underpasses (crossing barriers)
- Stepping stone habitats (small patches between larger areas)
- Landscape linkages (large-scale connections)

**Corridor design considerations:**
- Width requirements for target species
- Habitat quality within corridors
- Barrier removal or mitigation
- Monitoring corridor use

## Adaptive Management Framework
Conservation requires learning from management actions:

**Adaptive management steps:**
1. Assess current conditions and problems
2. Design management interventions
3. Implement actions
4. Monitor results
5. Evaluate effectiveness
6. Adjust management based on learning

**Key features:**
- Explicit learning objectives
- Monitoring protocols
- Flexible decision-making
- Documentation and sharing lessons

## Success Monitoring and Evaluation
Measuring conservation success is essential:

**Monitoring indicators:**
- Species population trends
- Habitat condition metrics
- Ecological process measurements
- Threat reduction assessments

**Evaluation frameworks:**
- Before-after-control-impact designs
- Long-term monitoring programs
- Participatory monitoring with local communities
- Remote sensing and technology applications

Good habitat management requires ongoing assessment and adjustment.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the first step in habitat management?",
          options: ["Immediate action", "Comprehensive habitat assessment", "Only planting trees", "Building fences"],
          correctAnswer: 1,
          explanation: "Proper assessment informs effective management by understanding current conditions and needs."
        },
        {
          id: 2,
          question: "What technique mimics natural herbivory in grasslands?",
          options: ["Complete protection", "Controlled grazing", "Only mowing", "No management"],
          correctAnswer: 1,
          explanation: "Controlled grazing can maintain grassland structure and diversity similar to natural herbivore effects."
        },
        {
          id: 3,
          question: "What does ecological restoration aim to achieve?",
          options: ["Only plant trees", "Return degraded ecosystems to functional states", "Create new ecosystems", "Only stop degradation"],
          correctAnswer: 1,
          explanation: "Restoration seeks to reestablish ecological structure, function, and composition."
        },
        {
          id: 4,
          question: "What is the most cost-effective invasive species strategy?",
          options: ["Eradication after establishment", "Prevention of introductions", "Ignoring invasives", "Only chemical control"],
          correctAnswer: 1,
          explanation: "Preventing introductions through regulations and inspections is far more efficient than controlling established populations."
        },
        {
          id: 5,
          question: "Why use prescribed burning?",
          options: ["Only for hazard reduction", "Maintain fire-dependent ecosystems", "Eliminate all fire", "Only for aesthetics"],
          correctAnswer: 1,
          explanation: "Prescribed burning maintains fire-adapted species and ecological processes while reducing wildfire risks."
        },
        {
          id: 6,
          question: "What are riparian zones?",
          options: ["Mountain tops", "Areas along waterways", "Desert areas", "Open ocean"],
          correctAnswer: 1,
          explanation: "Riparian zones are transitional areas between aquatic and terrestrial ecosystems along water bodies."
        },
        {
          id: 7,
          question: "What do wildlife corridors address?",
          options: ["Only road kills", "Habitat fragmentation and isolation", "Only animal movement", "Human access"],
          correctAnswer: 1,
          explanation: "Corridors reconnect fragmented habitats, allowing species movement and genetic exchange."
        },
        {
          id: 8,
          question: "What is adaptive management?",
          options: ["Fixed management plans", "Learning from management actions and adjusting", "No monitoring needed", "Only theoretical"],
          correctAnswer: 1,
          explanation: "Adaptive management treats management actions as experiments, using monitoring to learn and improve."
        },
        {
          id: 9,
          question: "What should success monitoring measure?",
          options: ["Only species counts", "Multiple ecological indicators", "Only costs", "Only public opinion"],
          correctAnswer: 1,
          explanation: "Effective monitoring tracks species, habitat conditions, ecological processes, and threat reduction."
        },
        {
          id: 10,
          question: "What is passive restoration?",
          options: ["Active planting", "Removing disturbances to allow natural recovery", "Only engineering solutions", "No restoration"],
          correctAnswer: 1,
          explanation: "Passive restoration removes degradation causes, allowing natural ecological processes to drive recovery."
        },
        {
          id: 11,
          question: "What management approach combines multiple control methods?",
          options: ["Single method only", "Integrated pest management", "No integration", "Random methods"],
          correctAnswer: 1,
          explanation: "IPM combines mechanical, chemical, biological, and cultural approaches for effective invasive control."
        },
        {
          id: 12,
          question: "What are fire-adapted ecosystems?",
          options: ["Destroyed by fire", "Depend on periodic fire", "Never experience fire", "Only human-caused fire"],
          correctAnswer: 1,
          explanation: "Fire-adapted ecosystems have species and processes that require periodic fire for maintenance."
        },
        {
          id: 13,
          question: "Why protect riparian habitats?",
          options: ["Only for fishing", "Critical for water quality and wildlife", "No particular value", "Only for recreation"],
          correctAnswer: 1,
          explanation: "Riparian zones filter pollutants, stabilize banks, provide wildlife habitat, and maintain water quality."
        },
        {
          id: 14,
          question: "What are stepping stone habitats?",
          options: ["Only large reserves", "Small patches between larger habitats", "Artificial structures", "Only for birds"],
          correctAnswer: 1,
          explanation: "Stepping stones are smaller habitat patches that facilitate movement between larger habitat areas."
        },
        {
          id: 15,
          question: "What does adaptive management require?",
          options: ["No documentation", "Explicit learning objectives and monitoring", "Fixed plans", "Ignoring results"],
          correctAnswer: 1,
          explanation: "Adaptive management requires clear learning goals, monitoring protocols, and flexibility to adjust."
        },
        {
          id: 16,
          question: "What is remote sensing used for in habitat assessment?",
          options: ["Only weather", "Large-scale habitat mapping and monitoring", "Only small areas", "Only ground truthing"],
          correctAnswer: 1,
          explanation: "Satellite and aerial imagery provide efficient large-scale habitat mapping and change detection."
        },
        {
          id: 17,
          question: "What does rehabilitation aim for?",
          options: ["Full historical restoration", "Improving function without full restoration", "No improvement", "Only aesthetics"],
          correctAnswer: 1,
          explanation: "Rehabilitation improves ecosystem function and services without necessarily restoring historical conditions."
        },
        {
          id: 18,
          question: "What is early detection for invasives?",
          options: ["Waiting for spread", "Monitoring for new invasions", "Only after damage", "Ignoring new species"],
          correctAnswer: 1,
          explanation: "Early detection systems identify new invasive species before they become established and widespread."
        },
        {
          id: 19,
          question: "What do water developments provide?",
          options: ["Only for livestock", "Critical water sources in arid areas", "Only aesthetic value", "Increase evaporation"],
          correctAnswer: 1,
          explanation: "Artificial water sources can support wildlife in areas where natural water is scarce or seasonal."
        },
        {
          id: 20,
          question: "What framework compares management impacts?",
          options: ["No comparison", "Before-after-control-impact design", "Only before measurements", "Only opinions"],
          correctAnswer: 1,
          explanation: "BACI designs compare conditions before and after management at both treatment and control sites."
        }
      ]
    },
    {
      id: 3,
      title: "Species Recovery Programs",
      content: `# Module 3: Species Recovery Programs

## Saving Species from Extinction
This module covers species recovery programs - systematic efforts to prevent extinction and restore threatened species to secure status. Recovery programs combine science, management, and policy to save species.

## Recovery Planning Framework
Structured approaches guide species recovery:

**Threat assessment** - Identifying and ranking threats
**Recovery objectives** - Setting specific, measurable goals
**Recovery actions** - Implementing management interventions
**Monitoring** - Tracking progress toward objectives
**Adaptive management** - Adjusting based on results
**Stakeholder involvement** - Engaging affected communities

Successful recovery requires comprehensive planning.

## IUCN Red List Categories
The Red List provides standardized extinction risk assessment:

**Extinct (EX)** - No reasonable doubt last individual has died
**Extinct in the Wild (EW)** - Survives only in captivity
**Critically Endangered (CR)** - Extremely high extinction risk
**Endangered (EN)** - Very high extinction risk
**Vulnerable (VU)** - High extinction risk
**Near Threatened (NT)** - Close to qualifying as threatened
**Least Concern (LC)** - Widespread and abundant

**Assessment criteria:** Population size, decline rate, geographic range, population fragmentation.

## Captive Breeding and Reintroduction
Captive breeding supports species recovery:

**Captive breeding goals:**
- Establish assurance populations
- Produce individuals for reintroduction
- Conduct research on species biology
- Raise public awareness and support

**Genetic management in captivity:**
- Founder representation (maximizing genetic diversity)
- Minimizing inbreeding
- Avoiding selection for captive traits
- Maintaining natural behaviors

**Reintroduction planning:**
- Habitat suitability assessment
- Threat mitigation at release sites
- Pre-release conditioning and training
- Post-release monitoring and support

## Translocation Strategies
Moving animals between locations serves different purposes:

**Reintroduction** - Releasing species into former range
**Introduction** - Releasing outside historical range (controversial)
**Supplementation** - Adding individuals to existing population
**Assisted colonization** - Moving species to new areas due to climate change

Each strategy has specific applications and ethical considerations.

## Threat Abatement Measures
Addressing specific threats to species survival:

**Habitat protection** - Securing critical habitat areas
**Predator control** - Managing invasive predators
**Disease management** - Controlling wildlife diseases
**Human-wildlife conflict reduction** - Mitigating negative interactions
**Illegal wildlife trade combatting** - Enforcement and demand reduction
**Climate change adaptation** - Helping species cope with changing conditions

Threat abatement often requires multiple, coordinated actions.

## Population Monitoring Techniques
Effective monitoring tracks recovery progress:

**Population census methods:**
- Complete counts (small, visible populations)
- Sampling methods (transects, plots, points)
- Mark-recapture studies
- Genetic sampling (non-invasive)
- Camera trapping
- Acoustic monitoring

**Demographic monitoring:**
- Birth and death rates
- Age structure
- Sex ratios
- Dispersal patterns

## Success Indicators and Criteria
Measuring recovery success requires clear benchmarks:

**Downlisting criteria** - Conditions for moving to lower threat category
**Delisting criteria** - Conditions for removing from threatened lists
**Recovery metrics:**
- Population size and trend
- Geographic range expansion
- Threat reduction
- Habitat protection percentage
- Genetic diversity maintenance

**International examples:**
- IUCN Green Status of Species
- US Endangered Species Act recovery criteria
- CITES Non-detriment findings

## Flagship and Umbrella Species
Strategic species selection enhances conservation:

**Flagship species** - Charismatic species that raise support and awareness
**Umbrella species** - Species whose protection benefits many other species
**Keystone species** - Species with disproportionate ecological impact
**Indicator species** - Species that reflect ecosystem health

Recovery programs often focus on strategically selected species.

## Case Studies in Species Recovery
Learning from successful and challenging recoveries:

**Success stories:**
- Bald eagle (DDT ban, habitat protection)
- Gray wolf (reintroduction, legal protection)
- Arabian oryx (captive breeding, reintroduction)
- California condor (captive breeding, lead reduction)

**Ongoing challenges:**
- Northern white rhino (functional extinction)
- Vaquita (bycatch in illegal fishing)
- Amphibians (chytrid fungus pandemic)

**Lessons learned:**
- Early intervention is critical
- Addressing root causes is essential
- Long-term commitment is required
- Adaptive management improves outcomes

Species recovery represents conservation's most direct action against extinction.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the first step in recovery planning?",
          options: ["Immediate action", "Threat assessment and ranking", "Only captive breeding", "Public relations"],
          correctAnswer: 1,
          explanation: "Identifying and prioritizing threats guides effective recovery action planning."
        },
        {
          id: 2,
          question: "What does 'Critically Endangered' mean on IUCN Red List?",
          options: ["No risk", "Extremely high extinction risk", "Only captivity", "Common species"],
          correctAnswer: 1,
          explanation: "CR species face an extremely high risk of extinction in the wild."
        },
        {
          id: 3,
          question: "What is a primary goal of captive breeding?",
          options: ["Only exhibition", "Establish assurance populations", "Creating hybrids", "Reducing wild populations"],
          correctAnswer: 1,
          explanation: "Captive breeding maintains genetic diversity and provides individuals for potential reintroduction."
        },
        {
          id: 4,
          question: "What is reintroduction?",
          options: ["Moving anywhere", "Releasing into former range", "Only captivity", "Killing species"],
          correctAnswer: 1,
          explanation: "Reintroduction releases species into areas they historically occupied but no longer occur."
        },
        {
          id: 5,
          question: "What is threat abatement?",
          options: ["Ignoring threats", "Addressing specific threats to survival", "Only habitat protection", "Only law enforcement"],
          correctAnswer: 1,
          explanation: "Threat abatement implements actions to reduce or eliminate specific causes of population decline."
        },
        {
          id: 6,
          question: "What does mark-recapture monitoring estimate?",
          options: ["Only presence", "Population size and demographics", "Only habitat", "Only genetics"],
          correctAnswer: 1,
          explanation: "Mark-recapture methods estimate population size, survival rates, and other demographic parameters."
        },
        {
          id: 7,
          question: "What are downlisting criteria?",
          options: ["Conditions for higher threat", "Conditions for lower threat category", "No criteria", "Only population size"],
          correctAnswer: 1,
          explanation: "Downlisting criteria specify when a species has recovered enough to move to a lower threat category."
        },
        {
          id: 8,
          question: "What are flagship species?",
          options: ["Unimportant species", "Charismatic species raising support", "Only predators", "Only birds"],
          correctAnswer: 1,
          explanation: "Flagship species attract public attention and support for broader conservation efforts."
        },
        {
          id: 9,
          question: "What saved the bald eagle from extinction?",
          options: ["Only captivity", "DDT ban and habitat protection", "No action needed", "Only law enforcement"],
          correctAnswer: 1,
          explanation: "Banning DDT and protecting nesting habitats enabled bald eagle recovery across North America."
        },
        {
          id: 10,
          question: "What is genetic management in captivity?",
          options: ["Random breeding", "Maximizing genetic diversity", "Creating new species", "Only breeding winners"],
          correctAnswer: 1,
          explanation: "Genetic management maintains founder representation and minimizes inbreeding in captive populations."
        },
        {
          id: 11,
          question: "What does 'Extinct in the Wild' mean?",
          options: ["Completely gone", "Survives only in captivity", "Common in wild", "Newly discovered"],
          correctAnswer: 1,
          explanation: "EW species no longer exist in natural habitats but survive in zoos, breeding facilities, or cultivation."
        },
        {
          id: 12,
          question: "What is supplementation?",
          options: ["Reducing populations", "Adding individuals to existing population", "Only reintroduction", "Removing animals"],
          correctAnswer: 1,
          explanation: "Supplementation adds individuals to small or declining populations to boost numbers and genetic diversity."
        },
        {
          id: 13,
          question: "What does human-wildlife conflict reduction involve?",
          options: ["Eliminating wildlife", "Mitigating negative interactions", "Ignoring conflicts", "Only compensation"],
          correctAnswer: 1,
          explanation: "Conflict reduction uses barriers, deterrents, compensation, and other measures to reduce negative interactions."
        },
        {
          id: 14,
          question: "What is camera trapping used for?",
          options: ["Only photography", "Population monitoring and research", "Only recreation", "No conservation use"],
          correctAnswer: 1,
          explanation: "Camera traps document species presence, behavior, population estimates, and individual identification."
        },
        {
          id: 15,
          question: "What are delisting criteria?",
          options: ["Conditions for listing", "Conditions for removing from threatened lists", "No recovery", "Only political"],
          correctAnswer: 1,
          explanation: "Delisting criteria specify when a species has recovered sufficiently to no longer need legal protection."
        },
        {
          id: 16,
          question: "What are umbrella species?",
          options: ["Only protect themselves", "Protection benefits many other species", "No ecological role", "Only small species"],
          correctAnswer: 1,
          explanation: "Umbrella species require large habitat areas, so protecting them conserves many co-occurring species."
        },
        {
          id: 17,
          question: "What is the vaquita's primary threat?",
          options: ["Habitat loss", "Bycatch in illegal fishing", "Hunting", "Climate change"],
          correctAnswer: 1,
          explanation: "The critically endangered vaquita porpoise faces extinction primarily from bycatch in illegal gillnet fishing."
        },
        {
          id: 18,
          question: "What is assisted colonization?",
          options: ["Historical reintroduction", "Moving species due to climate change", "Only within range", "No movement"],
          correctAnswer: 1,
          explanation: "Assisted colonization moves species to new areas where they might survive future climate conditions."
        },
        {
          id: 19,
          question: "What does demographic monitoring track?",
          options: ["Only presence", "Birth, death, age structure, sex ratios", "Only genetics", "Only habitat"],
          correctAnswer: 1,
          explanation: "Demographic monitoring tracks vital rates and population structure that determine population trends."
        },
        {
          id: 20,
          question: "What is a key lesson from recovery programs?",
          options: ["Only quick fixes", "Long-term commitment required", "One action solves all", "No monitoring needed"],
          correctAnswer: 1,
          explanation: "Successful recovery requires sustained effort over decades, not short-term interventions."
        }
      ]
    },
    {
      id: 4,
      title: "Conservation Policy and Legislation",
      content: `# Module 4: Conservation Policy and Legislation

## Legal Frameworks for Conservation
This module explores conservation policies, laws, and international agreements that provide the legal foundation for wildlife protection. Effective conservation requires strong policy frameworks and enforcement mechanisms.

## International Conservation Agreements
Global agreements establish conservation standards:

**Convention on Biological Diversity (CBD)**
- 1992 Rio Earth Summit agreement
- Objectives: Conservation, sustainable use, benefit sharing
- Aichi Biodiversity Targets (2010-2020)
- Post-2020 Global Biodiversity Framework

**Convention on International Trade in Endangered Species (CITES)**
- Regulates wildlife trade across borders
- Appendices listing species with different protection levels
- Permitting system for legal trade
- Combats illegal wildlife trafficking

**Ramsar Convention on Wetlands**
- Protects internationally important wetlands
- Wise use principles for wetland management
- Network of Ramsar sites worldwide

**World Heritage Convention**
- Protects cultural and natural heritage sites
- Includes many important conservation areas
- Provides international recognition and support

## National Legislation Examples
Country-specific laws provide domestic protection:

**US Endangered Species Act (1973)**
- Listing process for threatened/endangered species
- Critical habitat designation
- Prohibitions on "take" of listed species
- Recovery planning requirements
- Considered one of strongest conservation laws

**EU Habitats and Birds Directives**
- Natura 2000 network of protected areas
- Species and habitat protection requirements
- Environmental impact assessment provisions

**India's Wildlife Protection Act (1972)**
- Protected area categories (national parks, sanctuaries)
- Species scheduling with different protection levels
- Regulation of hunting and trade

**Australia's Environment Protection and Biodiversity Conservation Act (1999)**
- Matters of national environmental significance
- Assessment and approval of actions
- Threatened species and ecological communities protection

## Protected Area Categories
IUCN defines protected area management categories:

**Category Ia** - Strict Nature Reserve (science-focused)
**Category Ib** - Wilderness Area (wilderness protection)
**Category II** - National Park (ecosystem protection and recreation)
**Category III** - Natural Monument (specific feature protection)
**Category IV** - Habitat/Species Management Area
**Category V** - Protected Landscape/Seascape
**Category VI** - Protected Area with Sustainable Use

Different categories serve different conservation objectives.

## Environmental Impact Assessment
EIA processes evaluate development impacts:

**EIA components:**
- Screening (determining if EIA required)
- Scoping (identifying key issues)
- Impact assessment (predicting effects)
- Mitigation planning (reducing impacts)
- Monitoring (tracking actual impacts)
- Public participation (stakeholder input)

**Conservation applications:**
- Assessing infrastructure projects
- Evaluating resource extraction impacts
- Planning developments near sensitive areas
- Cumulative impact assessment

## Conservation Finance Mechanisms
Funding conservation requires diverse approaches:

**Government funding** - Budget allocations for protected areas and programs
**Trust funds** - Endowments generating sustainable income
**Payments for ecosystem services** - Compensating for conservation benefits
**Debt-for-nature swaps** - Reducing debt in exchange for conservation
**Conservation concessions** - Paying to protect rather than exploit resources
**Green bonds** - Financing environmental projects
**Corporate partnerships** - Business support for conservation

Diversified funding increases resilience.

## Enforcement and Compliance
Laws require enforcement to be effective:

**Monitoring and surveillance:**
- Patrols in protected areas
- Camera traps for illegal activity detection
- Satellite monitoring for habitat changes
- Market inspections for illegal trade

**Legal prosecution:**
- Evidence collection standards
- Court procedures for wildlife crimes
- Sentencing guidelines and penalties
- International cooperation on transboundary crimes

**Community-based enforcement:**
- Engaging local communities as partners
- Traditional knowledge integration
- Alternative livelihood development

## Policy Development Process
Understanding how conservation policies are created:

**Problem identification** - Recognizing conservation issues needing policy response
**Policy formulation** - Developing potential solutions and approaches
**Adoption/legislation** - Formal approval through legislative processes
**Implementation** - Putting policies into practice through programs
**Evaluation** - Assessing effectiveness and making adjustments

**Stakeholder engagement** throughout the process improves outcomes.

## International Environmental Law Principles
Foundational principles guide conservation law:

**Sustainable development** - Meeting present needs without compromising future
**Precautionary principle** - Acting despite scientific uncertainty
**Polluter pays principle** - Those causing pollution bear costs
**Common but differentiated responsibilities** - Varying obligations based on capacity
**Intergenerational equity** - Fairness between present and future generations
**Sovereignty over natural resources** - States control resources within borders

These principles balance conservation with development.

## Emerging Policy Issues
New challenges requiring policy responses:

**Climate change adaptation** - Policies helping species and ecosystems cope
**Digital sequence information** - Regulating use of genetic information
**Biosecurity** - Preventing invasive species introductions
**One Health approach** - Integrating human, animal, and environmental health
**Rights of Nature** - Legal recognition of ecosystems' rights
**Indigenous knowledge integration** - Respecting traditional ecological knowledge

Policy must evolve to address new conservation challenges.

Strong policy frameworks provide essential tools for conservation success.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does CITES regulate?",
          options: ["All wildlife", "International trade in endangered species", "Only habitat protection", "National parks"],
          correctAnswer: 1,
          explanation: "CITES controls cross-border trade in threatened wildlife through a permitting system."
        },
        {
          id: 2,
          question: "What are the CBD's three objectives?",
          options: ["Only conservation", "Conservation, sustainable use, benefit sharing", "Only research", "Only funding"],
          correctAnswer: 1,
          explanation: "The Convention on Biological Diversity aims to conserve biodiversity, use it sustainably, and share benefits fairly."
        },
        {
          id: 3,
          question: "What does the US Endangered Species Act prohibit?",
          options: ["All human activity", "'Take' of listed species", "Only habitat destruction", "Only hunting"],
          correctAnswer: 1,
          explanation: "ESA prohibits 'take' - harming, harassing, or killing - of listed species without permits."
        },
        {
          id: 4,
          question: "What is IUCN Category II?",
          options: ["Strict reserve", "National Park", "Wilderness area", "Sustainable use area"],
          correctAnswer: 1,
          explanation: "Category II (National Parks) protects large natural areas for ecosystem conservation and recreation."
        },
        {
          id: 5,
          question: "What does EIA assess?",
          options: ["Only economics", "Environmental impacts of developments", "Only social impacts", "Only political impacts"],
          correctAnswer: 1,
          explanation: "Environmental Impact Assessment evaluates potential effects of projects on the environment before approval."
        },
        {
          id: 6,
          question: "What are conservation trust funds?",
          options: ["Only government budgets", "Endowments generating sustainable income", "Only donations", "Temporary funding"],
          correctAnswer: 1,
          explanation: "Trust funds create permanent endowments whose investment income supports long-term conservation."
        },
        {
          id: 7,
          question: "Why is enforcement important for conservation laws?",
          options: ["Laws self-enforce", "Without enforcement, laws are ineffective", "Only education matters", "No enforcement needed"],
          correctAnswer: 1,
          explanation: "Effective monitoring, detection, and prosecution are essential for conservation laws to achieve their goals."
        },
        {
          id: 8,
          question: "What is the first step in policy development?",
          options: ["Implementation", "Problem identification", "Only legislation", "Evaluation"],
          correctAnswer: 1,
          explanation: "Recognizing and defining conservation problems that require policy responses initiates the policy process."
        },
        {
          id: 9,
          question: "What does the precautionary principle state?",
          options: ["Wait for certainty", "Act despite scientific uncertainty", "Ignore uncertainty", "Only act when certain"],
          correctAnswer: 1,
          explanation: "The precautionary principle justifies conservation action when threats are serious but scientific certainty is lacking."
        },
        {
          id: 10,
          question: "What is Payments for Ecosystem Services?",
          options: ["Free services", "Compensating for conservation benefits", "Only government payments", "Tax on nature"],
          correctAnswer: 1,
          explanation: "PES provides financial incentives to landowners for maintaining ecosystems that provide public benefits."
        },
        {
          id: 11,
          question: "What does Ramsar protect?",
          options: ["All habitats", "Internationally important wetlands", "Only forests", "Only marine areas"],
          correctAnswer: 1,
          explanation: "The Ramsar Convention focuses specifically on wetland conservation and wise use."
        },
        {
          id: 12,
          question: "What is critical habitat designation?",
          options: ["All habitat", "Areas essential for species conservation", "Only current range", "Optional areas"],
          correctAnswer: 1,
          explanation: "Critical habitat includes areas necessary for species recovery, even if not currently occupied."
        },
        {
          id: 13,
          question: "What is Natura 2000?",
          options: ["US network", "EU protected area network", "Asian network", "Global network"],
          correctAnswer: 1,
          explanation: "Natura 2000 is Europe's network of protected areas under the Birds and Habitats Directives."
        },
        {
          id: 14,
          question: "What does EIA scoping identify?",
          options: ["Only costs", "Key environmental issues to assess", "Only benefits", "Only technical details"],
          correctAnswer: 1,
          explanation: "Scoping determines which potential impacts warrant detailed assessment in the EIA process."
        },
        {
          id: 15,
          question: "What are debt-for-nature swaps?",
          options: ["Increasing debt", "Reducing debt in exchange for conservation", "Only for rich countries", "No conservation link"],
          correctAnswer: 1,
          explanation: "Debt is reduced or forgiven in exchange for domestic conservation funding or action."
        },
        {
          id: 16,
          question: "What does community-based enforcement involve?",
          options: ["Only police", "Engaging local communities as partners", "Ignoring communities", "Only penalties"],
          correctAnswer: 1,
          explanation: "Involving local communities in monitoring and enforcement improves effectiveness and legitimacy."
        },
        {
          id: 17,
          question: "What is policy evaluation?",
          options: ["Only implementation", "Assessing effectiveness and adjustments", "Only making policies", "Ignoring results"],
          correctAnswer: 1,
          explanation: "Evaluation examines whether policies achieve objectives and identifies needed improvements."
        },
        {
          id: 18,
          question: "What is intergenerational equity?",
          options: ["Only present generation", "Fairness between present and future", "Only economics", "No fairness concept"],
          correctAnswer: 1,
          explanation: "This principle considers the rights of future generations to inherit healthy environments."
        },
        {
          id: 19,
          question: "What is the One Health approach?",
          options: ["Only human health", "Integrating human, animal, environmental health", "Only wildlife health", "Separate health sectors"],
          correctAnswer: 1,
          explanation: "One Health recognizes interconnectedness of human, animal, and ecosystem health."
        },
        {
          id: 20,
          question: "What do strong policy frameworks provide?",
          options: ["Only paperwork", "Essential tools for conservation success", "Only restrictions", "No practical value"],
          correctAnswer: 1,
          explanation: "Effective policies establish legal mandates, funding mechanisms, and enforcement authority for conservation."
        }
      ]
    },
    {
      id: 5,
      title: "Human Dimensions of Conservation",
      content: `# Module 5: Human Dimensions of Conservation

## People in Conservation
This module addresses the human aspects of conservation - how people affect wildlife, how conservation affects people, and how to engage communities in conservation solutions. Successful conservation requires understanding and addressing human dimensions.

## Socioecological Systems
Conservation occurs within integrated systems:

**Social-ecological systems** - Coupled systems where humans and nature interact
**Feedback loops** - Human actions affect ecosystems which affect human well-being
**Resilience** - System capacity to absorb disturbance while maintaining function
**Adaptive capacity** - Ability to adjust to changes and continue developing

Understanding these systems helps design effective interventions.

## Human-Wildlife Conflict
Conflicts arise when wildlife negatively affects human interests:

**Types of conflict:**
- Crop raiding (elephants, primates, birds)
- Livestock predation (large carnivores)
- Property damage (beavers, bears)
- Human injury or death (large mammals)
- Disease transmission (zoonoses)

**Conflict mitigation strategies:**
- Physical barriers (fences, trenches)
- Deterrents (lights, sounds, smells)
- Compensation schemes
- Insurance programs
- Early warning systems
- Relocation of problem animals

**Prevention** through land-use planning is most effective.

## Community-Based Conservation
Engaging local communities in conservation:

**Principles of community conservation:**
- Local participation in decision-making
- Recognition of traditional knowledge
- Equitable benefit sharing
- Capacity building and empowerment
- Cultural respect and sensitivity

**Models of community conservation:**
- Community conservancies (Africa)
- Indigenous protected areas
- Community forest management
- Co-management arrangements
- Payments for ecosystem services to communities

Success requires genuine partnership, not just consultation.

## Conservation and Development
Balancing conservation with human development needs:

**Integrated conservation and development projects (ICDPs)** - Combine conservation with community development
**Sustainable livelihoods approach** - Supporting livelihoods that don't degrade resources
**Ecotourism** - Tourism that supports conservation and local communities
**Non-timber forest products** - Sustainable harvesting of wild products
**Agroforestry** - Integrating trees with agriculture

Finding win-win solutions reduces trade-offs.

## Indigenous Knowledge and Conservation
Traditional knowledge systems offer valuable insights:

**Indigenous ecological knowledge:**
- Detailed species knowledge
- Sustainable harvesting practices
- Seasonal calendars and indicators
- Habitat management techniques
- Spiritual and cultural connections to nature

**Integrating traditional and scientific knowledge:**
- Respectful collaboration
- Co-production of knowledge
- Validation through multiple evidence bases
- Application in adaptive management

**Challenges:** Intellectual property rights, cultural appropriation, knowledge erosion.

## Gender in Conservation
Gender considerations affect conservation outcomes:

**Gender differences in:**
- Resource use and dependence
- Knowledge about nature
- Decision-making roles
- Impacts of conservation actions
- Benefits from conservation

**Gender-responsive conservation:**
- Addressing different needs and roles
- Ensuring women's participation
- Recognizing women's knowledge
- Measuring gender-differentiated impacts
- Promoting gender equity in benefits

Inclusive approaches are more effective and equitable.

## Conservation Psychology
Understanding human behavior for conservation:

**Psychological factors affecting conservation behavior:**
- Values and beliefs
- Attitudes and norms
- Perceived behavioral control
- Emotions and empathy
- Identity and connection to nature

**Behavior change strategies:**
- Education and awareness
- Social marketing
- Nudges and choice architecture
- Incentives and disincentives
- Social norms and modeling

**Connection to nature** - Fostering emotional bonds with nature motivates protection.

## Economic Valuation of Nature
Assigning economic value to ecosystem services:

**Types of ecosystem service values:**
- Direct use values (timber, food, recreation)
- Indirect use values (water purification, climate regulation)
- Option values (potential future uses)
- Existence values (value of knowing species exist)

**Valuation methods:**
- Market prices (for traded goods)
- Cost-based approaches (replacement costs)
- Revealed preference (observed behavior)
- Stated preference (surveys and experiments)

Valuation helps communicate nature's importance to decision-makers.

## Conservation Communications
Effective communication strategies:

**Audience analysis** - Understanding different stakeholder perspectives
**Message framing** - Presenting information in relevant ways
**Storytelling** - Using narratives to engage emotions
**Visual communication** - Using images and videos effectively
**Social media** - Leveraging digital platforms
**Science communication** - Making technical information accessible

**Trust and credibility** are essential for effective communication.

## Ethics in Conservation
Ethical considerations guide conservation decisions:

**Conservation ethics questions:**
- Which species should we save?
- How do we balance human and wildlife needs?
- What are our responsibilities to future generations?
- How do we address historical injustices?
- What sacrifices are justified for conservation?

**Ethical frameworks:**
- Utilitarian (greatest good)
- Rights-based (inherent rights of species)
- Virtue ethics (character and relationships)
- Ecological justice (fairness in human-nature relationships)

Ethical reflection improves conservation practice.

Addressing human dimensions makes conservation more effective and just.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are socioecological systems?",
          options: ["Only natural systems", "Coupled human-nature systems", "Only social systems", "Separate systems"],
          correctAnswer: 1,
          explanation: "SES recognize interconnectedness and feedback between human and ecological components."
        },
        {
          id: 2,
          question: "What is human-wildlife conflict?",
          options: ["Only animal conflict", "Wildlife negatively affecting human interests", "Only human aggression", "No real conflict"],
          correctAnswer: 1,
          explanation: "Conflict occurs when wildlife actions damage crops, livestock, property, or threaten human safety."
        },
        {
          id: 3,
          question: "What is community-based conservation?",
          options: ["Imposing conservation", "Engaging local communities as partners", "Ignoring communities", "Only government action"],
          correctAnswer: 1,
          explanation: "Community conservation involves local people in planning, decision-making, and benefit-sharing."
        },
        {
          id: 4,
          question: "What do ICDPs aim to achieve?",
          options: ["Only conservation", "Only development", "Both conservation and community development", "Neither goal"],
          correctAnswer: 2,
          explanation: "Integrated Conservation and Development Projects seek mutually supportive conservation and development outcomes."
        },
        {
          id: 5,
          question: "What is indigenous ecological knowledge?",
          options: ["Only modern science", "Traditional knowledge systems about nature", "No knowledge", "Only spiritual beliefs"],
          correctAnswer: 1,
          explanation: "Indigenous knowledge includes detailed understanding of species, ecosystems, and sustainable practices developed over generations."
        },
        {
          id: 6,
          question: "Why consider gender in conservation?",
          options: ["Irrelevant", "Different roles, knowledge, and impacts", "Only women matter", "Only men matter"],
          correctAnswer: 1,
          explanation: "Gender affects resource use, knowledge, decision-making, and conservation impacts differently for women and men."
        },
        {
          id: 7,
          question: "What does conservation psychology study?",
          options: ["Only animal behavior", "Human behavior related to conservation", "Only clinical psychology", "No behavior study"],
          correctAnswer: 1,
          explanation: "Conservation psychology examines human values, attitudes, and behaviors affecting environmental protection."
        },
        {
          id: 8,
          question: "What is economic valuation of nature?",
          options: ["Only market goods", "Assigning value to ecosystem services", "No value possible", "Only intrinsic value"],
          correctAnswer: 1,
          explanation: "Economic valuation quantifies benefits nature provides to help decision-making and communicate importance."
        },
        {
          id: 9,
          question: "What is effective conservation communication?",
          options: ["Only technical reports", "Tailored messages for different audiences", "One message for all", "No communication needed"],
          correctAnswer: 1,
          explanation: "Effective communication analyzes audiences, frames messages appropriately, and builds trust."
        },
        {
          id: 10,
          question: "What are conservation ethics?",
          options: ["Only rules", "Ethical considerations guiding decisions", "No ethics needed", "Only scientific decisions"],
          correctAnswer: 1,
          explanation: "Ethics address values, responsibilities, and justice in conservation decisions and actions."
        },
        {
          id: 11,
          question: "What is resilience in socioecological systems?",
          options: ["Rigidity", "Capacity to absorb disturbance", "No change allowed", "Only recovery"],
          correctAnswer: 1,
          explanation: "Resilience is the ability to withstand shocks while maintaining essential functions and identity."
        },
        {
          id: 12,
          question: "What is most effective for preventing human-wildlife conflict?",
          options: ["Only retaliation", "Land-use planning separating activities", "Eliminating wildlife", "Ignoring until conflict"],
          correctAnswer: 1,
          explanation: "Spatial planning that separates incompatible land uses prevents conflicts before they occur."
        },
        {
          id: 13,
          question: "What do community conservancies involve?",
          options: ["Government control only", "Community management of wildlife and habitats", "No local rights", "Only tourism"],
          correctAnswer: 1,
          explanation: "Community conservancies grant local communities rights and responsibilities for wildlife management."
        },
        {
          id: 14,
          question: "What is sustainable livelihoods approach?",
          options: ["Only jobs", "Supporting livelihoods that don't degrade resources", "Any livelihood", "Only urban jobs"],
          correctAnswer: 1,
          explanation: "This approach helps communities develop income sources compatible with conservation goals."
        },
        {
          id: 15,
          question: "How should traditional and scientific knowledge be integrated?",
          options: ["Ignore traditional knowledge", "Respectful collaboration", "Only scientific knowledge", "Competition"],
          correctAnswer: 1,
          explanation: "Integration requires mutual respect, recognition of different knowledge systems, and collaborative learning."
        },
        {
          id: 16,
          question: "What is gender-responsive conservation?",
          options: ["Ignoring gender", "Addressing different needs and roles", "Only women's projects", "Only men's projects"],
          correctAnswer: 1,
          explanation: "Gender-responsive approaches recognize and address different experiences, knowledge, and impacts."
        },
        {
          id: 17,
          question: "What fosters connection to nature?",
          options: ["Only indoor activities", "Direct experiences in nature", "Only videos", "Ignoring nature"],
          correctAnswer: 1,
          explanation: "Regular positive experiences in natural environments build emotional connections that motivate protection."
        },
        {
          id: 18,
          question: "What are existence values?",
          options: ["Use values", "Value of knowing species exist", "Only economic use", "No value"],
          correctAnswer: 1,
          explanation: "Existence values reflect people's willingness to protect species simply because they exist, regardless of use."
        },
        {
          id: 19,
          question: "Why is trust important in conservation communication?",
          options: ["Not important", "Essential for message acceptance", "Only for scientists", "Impossible to build"],
          correctAnswer: 1,
          explanation: "Trust determines whether audiences believe and act on conservation messages from different sources."
        },
        {
          id: 20,
          question: "What does ecological justice consider?",
          options: ["Only human justice", "Fairness in human-nature relationships", "Only animal rights", "No justice concept"],
          correctAnswer: 1,
          explanation: "Ecological justice examines fairness in how humans treat nature and distribute environmental benefits/burdens."
        }
      ]
    },
    {
      id: 6,
      title: "Conservation Technologies and Innovation",
      content: `# Module 6: Conservation Technologies and Innovation

## Technology for Conservation
This final module explores innovative technologies transforming wildlife conservation. From satellite monitoring to genetic tools, technology provides new capabilities for protecting biodiversity in the 21st century.

## Remote Sensing and GIS
Geospatial technologies revolutionize conservation:

**Satellite imagery applications:**
- Habitat mapping and monitoring
- Deforestation detection
- Land-use change analysis
- Fire detection and monitoring
- Coastal and marine monitoring

**Aerial platforms:**
- Manned aircraft surveys
- Drones (UAVs) for detailed mapping
- LiDAR for 3D vegetation structure
- Thermal imaging for wildlife detection

**Geographic Information Systems (GIS):**
- Spatial analysis of conservation priorities
- Habitat suitability modeling
- Connectivity analysis
- Protected area design
- Impact assessment of developments

## Wildlife Tracking Technologies
Monitoring animal movements provides crucial data:

**Tagging and tracking methods:**
- VHF radio telemetry (traditional method)
- GPS tracking (precise location data)
- Satellite tracking (global coverage)
- Acoustic telemetry (underwater tracking)
- Geolocators (light-based positioning)

**Data applications:**
- Migration route identification
- Habitat use patterns
- Home range estimation
- Human-wildlife conflict hotspots
- Protected area effectiveness evaluation

**Innovations:** Smaller, cheaper tags; longer battery life; real-time data transmission.

## Camera Trapping and Acoustic Monitoring
Passive monitoring technologies:

**Camera trapping advances:**
- Infrared triggers (no visible light)
- Wireless transmission of images
- Time-lapse and video capabilities
- Machine learning for species identification
- Citizen science platforms for image analysis

**Acoustic monitoring:**
- Automated recording units
- Species identification from calls
- Bioacoustic indices for ecosystem health
- Underwater acoustics for marine mammals
- Noise pollution monitoring

**Networked sensor arrays** provide continuous monitoring over large areas.

## Environmental DNA (eDNA)
Genetic tools for biodiversity monitoring:

**eDNA sampling:** Collecting DNA from environmental samples (water, soil, air)
**Applications:**
- Detecting rare or elusive species
- Biodiversity surveys from water samples
- Early detection of invasive species
- Diet analysis from fecal samples
- Population genetic studies from non-invasive samples

**Advantages:** Non-invasive, sensitive, cost-effective for some applications
**Limitations:** Cannot determine abundance, age, or health from eDNA alone

## Conservation Genetics Tools
Advanced genetic applications:

**Genomic sequencing:**
- Population structure analysis
- Inbreeding assessment
- Adaptation potential evaluation
- Disease susceptibility studies
- Forensic identification (wildlife crime)

**Genetic rescue planning:** Identifying suitable source populations
**Captive breeding management:** Maximizing genetic diversity
**Hybridization detection:** Identifying pure vs. hybrid individuals

**Portable sequencers** enable field-based genetic analysis.

## Artificial Intelligence and Machine Learning
AI transforms data analysis:

**Computer vision applications:**
- Automated species identification from images
- Individual animal recognition (whale sharks, tigers)
- Behavior analysis from video
- Poaching detection from camera trap images

**Pattern recognition:**
- Identifying illegal wildlife trade online
- Predicting poaching hotspots
- Modeling species distributions
- Analyzing animal vocalizations

**Data integration:** Combining multiple data sources for comprehensive analysis

## Conservation Drones
Unmanned aerial vehicles for conservation:

**Drone applications:**
- Anti-poaching surveillance
- Habitat mapping and monitoring
- Wildlife population surveys
- Nest monitoring (especially for colonial birds)
- Fire monitoring and management
- Reforestation monitoring

**Drone types:** Fixed-wing (long endurance), multirotor (hover capability)
**Sensors:** RGB cameras, multispectral, thermal, LiDAR
**Regulations:** Vary by country, require compliance

## Mobile Technology and Apps
Smartphones enable citizen science and data collection:

**Citizen science platforms:**
- iNaturalist (species observations)
- eBird (bird sightings)
- Instant Wild (camera trap image classification)
- Marine Debris Tracker

**Data collection apps:**
- Field data collection (replace paper forms)
- Offline mapping and navigation
- Species identification guides
- Illegal activity reporting

**Community monitoring:** Empowering local communities with technology

## Conservation Databases and Platforms
Data management and sharing systems:

**Global databases:**
- GBIF (Global Biodiversity Information Facility)
- IUCN Red List
- Protected Planet (protected areas database)
- Movebank (animal movement data)

**Data standards:** Ensuring interoperability between systems
**Open data principles:** Sharing data while protecting sensitive information
**Data visualization tools:** Making complex data accessible and understandable

## Emerging Technologies
Future directions in conservation tech:

**Blockchain for conservation:**
- Transparent funding tracking
- Supply chain monitoring for sustainable products
- Carbon credit trading

**Internet of Things (IoT):**
- Networked environmental sensors
- Real-time monitoring systems
- Smart protected area management

**3D printing:** Creating artificial coral reefs, tracking device housings
**Robotics:** Underwater drones for marine conservation, anti-poaching robots
**Virtual and augmented reality:** Conservation education and training

## Technology Implementation Considerations
Successful technology adoption requires:

**Appropriate technology** - Matching tools to local conditions and capacities
**Capacity building** - Training local personnel in technology use
**Maintenance and sustainability** - Ensuring long-term functionality
**Data management plans** - Handling, storing, and sharing data responsibly
**Ethical considerations** - Privacy, surveillance, data ownership
**Cost-benefit analysis** - Justifying technology investments

Technology should serve conservation goals, not drive them.

Innovative technologies provide powerful tools for addressing conservation challenges at unprecedented scales.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does remote sensing provide for conservation?",
          options: ["Only ground data", "Habitat mapping and monitoring from distance", "Only animal tracking", "Only weather data"],
          correctAnswer: 1,
          explanation: "Remote sensing uses satellite and aerial platforms to map and monitor habitats over large areas."
        },
        {
          id: 2,
          question: "What do GPS tracking devices provide?",
          options: ["Only presence data", "Precise location data for animal movements", "Only identification", "Only population counts"],
          correctAnswer: 1,
          explanation: "GPS tags record accurate location coordinates, enabling detailed movement and habitat use analysis."
        },
        {
          id: 3,
          question: "What is camera trapping used for?",
          options: ["Only photography", "Passive wildlife monitoring and research", "Only recreation", "No conservation use"],
          correctAnswer: 1,
          explanation: "Camera traps document species presence, behavior, population estimates, and individual identification remotely."
        },
        {
          id: 4,
          question: "What is environmental DNA (eDNA)?",
          options: ["Only from tissue", "DNA collected from environmental samples", "Only human DNA", "Artificial DNA"],
          correctAnswer: 1,
          explanation: "eDNA is genetic material shed by organisms into their environment, detectable in water, soil, or air samples."
        },
        {
          id: 5,
          question: "How does conservation genetics help captive breeding?",
          options: ["Random breeding", "Maximizing genetic diversity management", "Creating hybrids", "Reducing diversity"],
          correctAnswer: 1,
          explanation: "Genetic analysis informs pairing decisions to maintain founder representation and minimize inbreeding."
        },
        {
          id: 6,
          question: "What does AI enable in conservation?",
          options: ["Only data collection", "Automated analysis of large datasets", "Only predictions", "Replacing biologists"],
          correctAnswer: 1,
          explanation: "AI and machine learning can process images, sounds, and data patterns at scales impossible manually."
        },
        {
          id: 7,
          question: "What are conservation drones used for?",
          options: ["Only delivery", "Aerial monitoring, surveying, and surveillance", "Only recreation", "Transporting animals"],
          correctAnswer: 1,
          explanation: "Drones provide affordable aerial platforms for mapping, monitoring, and anti-poaching activities."
        },
        {
          id: 8,
          question: "What do citizen science apps enable?",
          options: ["Only experts", "Public participation in data collection", "Only entertainment", "No real science"],
          correctAnswer: 1,
          explanation: "Mobile apps allow volunteers to contribute observations, expanding data collection capacity dramatically."
        },
        {
          id: 9,
          question: "What is GBIF?",
          options: ["Only national database", "Global Biodiversity Information Facility", "Only species list", "Only for scientists"],
          correctAnswer: 1,
          explanation: "GBIF is an international network providing open access to biodiversity data from many sources."
        },
        {
          id: 10,
          question: "What should guide technology adoption?",
          options: ["Only newest technology", "Appropriateness for local conditions and goals", "Only cost", "Only complexity"],
          correctAnswer: 1,
          explanation: "Technology should match local capacity, address specific needs, and be sustainable long-term."
        },
        {
          id: 11,
          question: "What does GIS enable in conservation?",
          options: ["Only mapping", "Spatial analysis and decision support", "Only drawing maps", "Only GPS data"],
          correctAnswer: 1,
          explanation: "GIS analyzes spatial relationships, models scenarios, and supports protected area design and management."
        },
        {
          id: 12,
          question: "What advantage does acoustic monitoring offer?",
          options: ["Only visual data", "Species detection from sounds, day or night", "Only underwater", "Only bird calls"],
          correctAnswer: 1,
          explanation: "Acoustic monitoring detects vocalizing species continuously, including nocturnal and elusive animals."
        },
        {
          id: 13,
          question: "What is a key advantage of eDNA?",
          options: ["Always shows abundance", "Non-invasive species detection", "Identifies individuals", "Shows animal health"],
          correctAnswer: 1,
          explanation: "eDNA sampling doesn't require capturing or even seeing organisms, reducing disturbance."
        },
        {
          id: 14,
          question: "What can computer vision identify?",
          options: ["Only humans", "Species and individuals from images", "Only colors", "Only landscapes"],
          correctAnswer: 1,
          explanation: "AI algorithms can recognize species and even individual animals from photographs."
        },
        {
          id: 15,
          question: "What sensor do drones often carry for wildlife?",
          options: ["Only RGB cameras", "RGB, thermal, multispectral sensors", "Only video", "Only still cameras"],
          correctAnswer: 1,
          explanation: "Different sensors serve different purposes: RGB for identification, thermal for heat detection, multispectral for vegetation."
        },
        {
          id: 16,
          question: "What principle should guide data sharing?",
          options: ["No sharing", "Open data with sensitive information protection", "Only for payment", "Only within organizations"],
          correctAnswer: 1,
          explanation: "Open data advances science while protecting sensitive locations like nesting sites or rare species locations."
        },
        {
          id: 17,
          question: "How can blockchain help conservation?",
          options: ["Only cryptocurrency", "Transparent funding and supply chain tracking", "Only data storage", "No conservation use"],
          correctAnswer: 1,
          explanation: "Blockchain creates tamper-proof records for tracking donations, carbon credits, and sustainable products."
        },
        {
          id: 18,
          question: "What does IoT refer to in conservation?",
          options: ["Only internet", "Networked environmental sensors", "Only computers", "Only communication"],
          correctAnswer: 1,
          explanation: "Internet of Things connects sensors and devices for real-time environmental monitoring and management."
        },
        {
          id: 19,
          question: "What is essential for technology sustainability?",
          options: ["Only initial purchase", "Local capacity building and maintenance", "Only complexity", "Only foreign experts"],
          correctAnswer: 1,
          explanation: "Training local personnel in use, maintenance, and repair ensures technology functions long-term."
        },
        {
          id: 20,
          question: "What should drive technology adoption?",
          options: ["Technology itself", "Conservation goals and needs", "Only funding availability", "Only novelty"],
          correctAnswer: 1,
          explanation: "Technology should serve clearly defined conservation objectives, not be adopted for its own sake."
        }
      ]
    }
  ],
  
  // FINAL EXAM (40 Questions covering all modules)
  finalExam: {
    id: "wildlife-conservation-diploma-final-exam",
    title: "Wildlife Conservation Diploma Final Exam",
    description: "Comprehensive exam covering all 6 modules of the Wildlife Conservation Diploma course.",
    passingScore: 75,
    questions: [
      {
        id: 1,
        question: "What is conservation biology?",
        options: ["Only animal protection", "Applied science maintaining biodiversity", "Only habitat management", "Political movement"],
        correctAnswer: 1,
        explanation: "Module 1: Conservation biology applies science to preserve Earth's biological diversity."
      },
      {
        id: 2,
        question: "What is the primary cause of species extinction?",
        options: ["Climate change", "Habitat loss and fragmentation", "Only hunting", "Natural disasters"],
        correctAnswer: 1,
        explanation: "Module 1: Habitat destruction threatens more species than any other single factor."
      },
      {
        id: 3,
        question: "What is the first step in habitat management?",
        options: ["Immediate action", "Comprehensive habitat assessment", "Only planting", "Building fences"],
        correctAnswer: 1,
        explanation: "Module 2: Proper assessment informs effective management decisions."
      },
      {
        id: 4,
        question: "What does ecological restoration aim for?",
        options: ["Only plant trees", "Return degraded ecosystems to function", "Create new ecosystems", "Only stop degradation"],
        correctAnswer: 1,
        explanation: "Module 2: Restoration seeks to reestablish ecological structure, function, and composition."
      },
      {
        id: 5,
        question: "What does 'Critically Endangered' mean?",
        options: ["No risk", "Extremely high extinction risk", "Only captivity", "Common species"],
        correctAnswer: 1,
        explanation: "Module 3: CR species face extremely high extinction risk in the wild."
      },
      {
        id: 6,
        question: "What is a primary goal of captive breeding?",
        options: ["Only exhibition", "Establish assurance populations", "Creating hybrids", "Reducing wild populations"],
        correctAnswer: 1,
        explanation: "Module 3: Captive breeding maintains genetic diversity for potential reintroduction."
      },
      {
        id: 7,
        question: "What does CITES regulate?",
        options: ["All wildlife", "International trade in endangered species", "Only habitat", "National parks"],
        correctAnswer: 1,
        explanation: "Module 4: CITES controls cross-border trade in threatened wildlife."
      },
      {
        id: 8,
        question: "What is IUCN Category II?",
        options: ["Strict reserve", "National Park", "Wilderness area", "Sustainable use area"],
        correctAnswer: 1,
        explanation: "Module 4: Category II protects large natural areas for ecosystem conservation."
      },
      {
        id: 9,
        question: "What are socioecological systems?",
        options: ["Only natural systems", "Coupled human-nature systems", "Only social systems", "Separate systems"],
        correctAnswer: 1,
        explanation: "Module 5: SES recognize interconnectedness of human and ecological components."
      },
      {
        id: 10,
        question: "What is community-based conservation?",
        options: ["Imposing conservation", "Engaging local communities as partners", "Ignoring communities", "Only government"],
        correctAnswer: 1,
        explanation: "Module 5: Community conservation involves local people in planning and benefits."
      },
      {
        id: 11,
        question: "What does remote sensing provide?",
        options: ["Only ground data", "Habitat mapping from distance", "Only animal tracking", "Only weather"],
        correctAnswer: 1,
        explanation: "Module 6: Remote sensing maps and monitors habitats over large areas."
      },
      {
        id: 12,
        question: "What is environmental DNA?",
        options: ["Only from tissue", "DNA from environmental samples", "Only human DNA", "Artificial DNA"],
        correctAnswer: 1,
        explanation: "Module 6: eDNA is genetic material shed into environment, detectable in samples."
      },
      {
        id: 13,
        question: "What principle states biodiversity has intrinsic value?",
        options: ["Utilitarian", "Intrinsic value principle", "Only economic", "No value principle"],
        correctAnswer: 1,
        explanation: "Module 1: Species have worth beyond human use or benefit."
      },
      {
        id: 14,
        question: "What technique mimics natural herbivory?",
        options: ["Complete protection", "Controlled grazing", "Only mowing", "No management"],
        correctAnswer: 1,
        explanation: "Module 2: Controlled grazing maintains grassland structure naturally."
      },
      {
        id: 15,
        question: "What does PVA assess?",
        options: ["Only population size", "Extinction risk and management needs", "Only genetics", "Habitat quality only"],
        correctAnswer: 1,
        explanation: "Module 3: Population Viability Analysis models extinction probabilities."
      },
      {
        id: 16,
        question: "What are the CBD's three objectives?",
        options: ["Only conservation", "Conservation, sustainable use, benefit sharing", "Only research", "Only funding"],
        correctAnswer: 1,
        explanation: "Module 4: CBD aims to conserve biodiversity, use sustainably, share benefits."
      },
      {
        id: 17,
        question: "What is human-wildlife conflict?",
        options: ["Only animal conflict", "Wildlife negatively affecting humans", "Only human aggression", "No real conflict"],
        correctAnswer: 1,
        explanation: "Module 5: Wildlife damaging crops, livestock, property, or threatening safety."
      },
      {
        id: 18,
        question: "What do GPS tracking devices provide?",
        options: ["Only presence", "Precise location data", "Only identification", "Only population counts"],
        correctAnswer: 1,
        explanation: "Module 6: GPS tags record accurate coordinates for movement analysis."
      },
      {
        id: 19,
        question: "How much have wildlife populations declined since 1970?",
        options: ["10%", "68%", "No decline", "Increased"],
        correctAnswer: 1,
        explanation: "Module 1: WWF reports 68% average decline in vertebrate populations."
      },
      {
        id: 20,
        question: "What is passive restoration?",
        options: ["Active planting", "Removing disturbances for natural recovery", "Only engineering", "No restoration"],
        correctAnswer: 1,
        explanation: "Module 2: Removing degradation causes allows natural recovery processes."
      },
      {
        id: 21,
        question: "What is reintroduction?",
        options: ["Moving anywhere", "Releasing into former range", "Only captivity", "Killing species"],
        correctAnswer: 1,
        explanation: "Module 3: Releasing species into historically occupied areas."
      },
      {
        id: 22,
        question: "What does EIA assess?",
        options: ["Only economics", "Environmental impacts of developments", "Only social", "Only political"],
        correctAnswer: 1,
        explanation: "Module 4: Evaluates potential effects of projects on environment."
      },
      {
        id: 23,
        question: "What do ICDPs aim for?",
        options: ["Only conservation", "Only development", "Both conservation and development", "Neither"],
        correctAnswer: 2,
        explanation: "Module 5: Integrated Conservation and Development Projects seek both goals."
      },
      {
        id: 24,
        question: "What does AI enable in conservation?",
        options: ["Only data collection", "Automated analysis of large datasets", "Only predictions", "Replacing biologists"],
        correctAnswer: 1,
        explanation: "Module 6: AI processes images, sounds, and data at impossible manual scales."
      },
      {
        id: 25,
        question: "What is genetic diversity important for?",
        options: ["Only breeding", "Adaptation, disease resistance, evolution", "Makes animals look different", "Not important"],
        correctAnswer: 1,
        explanation: "Module 1: Enables adaptation to changing environments and disease resistance."
      },
      {
        id: 26,
        question: "What is integrated pest management?",
        options: ["Single method", "Combines multiple control methods", "No integration", "Random methods"],
        correctAnswer: 1,
        explanation: "Module 2: IPM combines mechanical, chemical, biological approaches."
      },
      {
        id: 27,
        question: "What are flagship species?",
        options: ["Unimportant species", "Charismatic species raising support", "Only predators", "Only birds"],
        correctAnswer: 1,
        explanation: "Module 3: Attract public attention and support for conservation."
      },
      {
        id: 28,
        question: "What is the precautionary principle?",
        options: ["Wait for certainty", "Act despite uncertainty", "Ignore uncertainty", "Only act when certain"],
        correctAnswer: 1,
        explanation: "Module 4: Justifies action when threats are serious but certainty lacking."
      },
      {
        id: 29,
        question: "What is indigenous ecological knowledge?",
        options: ["Only modern science", "Traditional knowledge about nature", "No knowledge", "Only spiritual"],
        correctAnswer: 1,
        explanation: "Module 5: Detailed understanding of species and sustainable practices."
      },
      {
        id: 30,
        question: "What are conservation drones used for?",
        options: ["Only delivery", "Aerial monitoring and surveying", "Only recreation", "Transporting animals"],
        correctAnswer: 1,
        explanation: "Module 6: Provide affordable aerial platforms for conservation tasks."
      },
      {
        id: 31,
        question: "What does Island Biogeography predict?",
        options: ["Size doesn't matter", "Larger areas support more species", "Smaller is better", "Only shape matters"],
        correctAnswer: 1,
        explanation: "Module 1: Larger habitat areas support more species with lower extinction."
      },
      {
        id: 32,
        question: "What do wildlife corridors address?",
        options: ["Only road kills", "Habitat fragmentation", "Only animal movement", "Human access"],
        correctAnswer: 1,
        explanation: "Module 2: Reconnect fragmented habitats for species movement."
      },
      {
        id: 33,
        question: "What is threat abatement?",
        options: ["Ignoring threats", "Addressing specific threats", "Only habitat protection", "Only law enforcement"],
        correctAnswer: 1,
        explanation: "Module 3: Implements actions to reduce causes of decline."
      },
      {
        id: 34,
        question: "What are conservation trust funds?",
        options: ["Only government budgets", "Endowments generating sustainable income", "Only donations", "Temporary funding"],
        correctAnswer: 1,
        explanation: "Module 4: Create permanent endowments with investment income."
      },
      {
        id: 35,
        question: "Why consider gender in conservation?",
        options: ["Irrelevant", "Different roles, knowledge, impacts", "Only women matter", "Only men matter"],
        correctAnswer: 1,
        explanation: "Module 5: Gender affects resource use, knowledge, and impacts differently."
      },
      {
        id: 36,
        question: "What do citizen science apps enable?",
        options: ["Only experts", "Public participation in data collection", "Only entertainment", "No real science"],
        correctAnswer: 1,
        explanation: "Module 6: Allow volunteers to contribute observations expanding capacity."
      },
      {
        id: 37,
        question: "What is inbreeding depression?",
        options: ["Increased fitness", "Reduced fitness from mating relatives", "No genetic effect", "Only in captivity"],
        correctAnswer: 1,
        explanation: "Module 1: Reduced survival and reproduction from genetic similarity."
      },
      {
        id: 38,
        question: "What is adaptive management?",
        options: ["Fixed plans", "Learning from actions and adjusting", "No monitoring needed", "Only theoretical"],
        correctAnswer: 1,
        explanation: "Module 2: Treats management as experiments, using monitoring to learn."
      },
      {
        id: 39,
        question: "What saved bald eagles?",
        options: ["Only captivity", "DDT ban and habitat protection", "No action needed", "Only law enforcement"],
        correctAnswer: 1,
        explanation: "Module 3: Banning DDT and protecting habitats enabled recovery."
      },
      {
        id: 40,
        question: "What should drive technology adoption?",
        options: ["Technology itself", "Conservation goals and needs", "Only funding", "Only novelty"],
        correctAnswer: 1,
        explanation: "Module 6: Technology should serve conservation objectives, not drive decisions."
      }
    ]
  }
};

export default wildlifeConservationDiploma;
