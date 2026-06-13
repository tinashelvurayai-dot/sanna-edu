export const environmentalDesignDiplomaCourse = {
  id: "environmental-design-diploma",
  title: "Environmental Design (Diploma)",
  description: "Advanced training in creating sustainable, ecologically-sensitive landscapes that harmonize with natural systems. Learn to design environments that benefit both people and planet.",
  duration: "12 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  icon: "🌍",
  badge: "Diploma",
  
  modules: [
    {
      id: 1,
      title: "Ecological Design Principles",
      content: `
# Ecological Design Principles

Environmental design begins with understanding and applying ecological principles to human-made environments. This advanced module explores how to create landscapes that function like natural ecosystems.

## Core Ecological Concepts

Environmental design integrates three fundamental ecological concepts:

**Energy Flow** - Understanding how energy moves through systems (sun to plants to animals)
**Nutrient Cycling** - Creating closed-loop systems where waste becomes resource
**Succession** - Designing for change over time as ecosystems mature

Energy-efficient designs reduce external inputs. Nutrient cycling mimics natural decomposition processes. Successional planning anticipates how plant communities will evolve. These concepts transform conventional landscaping into living systems.

## Biomimicry in Design

Biomimicry studies nature's models to solve human design challenges. Key applications include:

**Natural Forms** - Using shapes and patterns found in nature
**Ecosystem Services** - Incorporating nature's free benefits like water purification
**Adaptive Strategies** - Learning how organisms solve environmental problems

Leaf patterns inspire rainwater collection systems. Termite mounds teach passive cooling techniques. Forest layers inform vertical garden design. Biomimicry creates designs that are efficient, resilient, and beautiful because they're modeled on billions of years of evolution.

## Climate-Responsive Design

Design must respond to local climate conditions through:

**Microclimate Creation** - Using plants and structures to modify local conditions
**Seasonal Adaptation** - Designing for different needs throughout the year
**Regional Appropriateness** - Choosing solutions suited to specific climates

In hot climates, create shade and evaporative cooling. In cold climates, use windbreaks and thermal mass. In wet climates, focus on drainage and mold prevention. Climate-responsive design reduces energy use and increases comfort naturally.

## Site Analysis for Environmental Design

Advanced site analysis goes beyond basic assessment to include:

**Ecological Inventory** - Mapping existing plant and animal communities
**Hydrological Patterns** - Understanding water movement across the site
**Soil Food Web** - Assessing microscopic life in the soil
**Cultural Layers** - Recognizing human history and patterns

Create overlay maps showing different site characteristics. Identify "ecological capital" - existing natural assets to preserve. Note regeneration zones - areas with potential for natural recovery. This comprehensive analysis informs every design decision.

## Regenerative Design Approach

Regenerative design goes beyond sustainability to actually improve environmental conditions:

**Soil Building** - Designing systems that increase soil health over time
**Biodiversity Enhancement** - Creating habitats for diverse species
**Carbon Sequestration** - Using plants to capture atmospheric carbon
**Water Table Recharge** - Designing landscapes that replenish groundwater

Regenerative landscapes give back more than they take. They improve with age rather than degrade. They create conditions where life can thrive. This approach represents the highest level of environmental stewardship.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What fundamental ecological concept involves energy moving through systems?",
          options: [
            "Nutrient Cycling",
            "Energy Flow",
            "Succession",
            "Biomimicry"
          ],
          correctAnswer: 1,
          explanation: "Energy Flow describes how energy moves from sun to plants to animals through ecological systems."
        },
        {
          id: 2,
          question: "What creates closed-loop systems where waste becomes resource?",
          options: ["Energy Flow", "Nutrient Cycling", "Succession", "Biomimicry"],
          correctAnswer: 1,
          explanation: "Nutrient Cycling mimics natural decomposition to transform waste into valuable resources."
        },
        {
          id: 3,
          question: "What anticipates how plant communities will evolve over time?",
          options: ["Energy Flow", "Nutrient Cycling", "Succession", "Climate Response"],
          correctAnswer: 2,
          explanation: "Successional planning designs for natural changes as ecosystems mature and transform."
        },
        {
          id: 4,
          question: "What studies nature's models to solve design challenges?",
          options: ["Succession", "Biomimicry", "Microclimate", "Regeneration"],
          correctAnswer: 1,
          explanation: "Biomimicry looks to 3.8 billion years of evolution for efficient, resilient design solutions."
        },
        {
          id: 5,
          question: "What inspires rainwater collection system designs?",
          options: ["Termite mounds", "Leaf patterns", "Forest layers", "Animal burrows"],
          correctAnswer: 1,
          explanation: "Leaf patterns in nature efficiently collect and channel water, inspiring human collection systems."
        },
        {
          id: 6,
          question: "What teaches passive cooling techniques?",
          options: ["Leaf patterns", "Termite mounds", "Forest layers", "Spider webs"],
          correctAnswer: 1,
          explanation: "Termite mounds maintain constant temperatures through sophisticated ventilation, teaching passive cooling."
        },
        {
          id: 7,
          question: "What informs vertical garden design?",
          options: ["Leaf patterns", "Termite mounds", "Forest layers", "River systems"],
          correctAnswer: 2,
          explanation: "Forest layers (canopy, understory, ground cover) inspire efficient vertical space use in gardens."
        },
        {
          id: 8,
          question: "What uses plants and structures to modify local conditions?",
          options: [
            "Climate-Responsive Design",
            "Microclimate Creation",
            "Regional Appropriateness",
            "Seasonal Adaptation"
          ],
          correctAnswer: 1,
          explanation: "Microclimate Creation strategically modifies small-scale environmental conditions for human comfort."
        },
        {
          id: 9,
          question: "What designs for different needs throughout the year?",
          options: [
            "Microclimate Creation",
            "Seasonal Adaptation",
            "Regional Appropriateness",
            "Climate-Responsive Design"
          ],
          correctAnswer: 1,
          explanation: "Seasonal Adaptation considers how design functions differently across changing seasons."
        },
        {
          id: 10,
          question: "What should hot climate designs focus on?",
          options: [
            "Windbreaks and thermal mass",
            "Shade and evaporative cooling",
            "Drainage and mold prevention",
            "Snow retention and insulation"
          ],
          correctAnswer: 1,
          explanation: "Hot climates benefit from shade creation and water-based cooling systems."
        },
        {
          id: 11,
          question: "What maps existing plant and animal communities?",
          options: [
            "Hydrological Patterns",
            "Ecological Inventory",
            "Soil Food Web",
            "Cultural Layers"
          ],
          correctAnswer: 1,
          explanation: "Ecological Inventory documents living systems already present on a site."
        },
        {
          id: 12,
          question: "What understands water movement across the site?",
          options: [
            "Ecological Inventory",
            "Hydrological Patterns",
            "Soil Food Web",
            "Cultural Layers"
          ],
          correctAnswer: 1,
          explanation: "Hydrological Patterns analysis tracks how water flows, pools, and drains across landscapes."
        },
        {
          id: 13,
          question: "What assesses microscopic life in soil?",
          options: [
            "Ecological Inventory",
            "Hydrological Patterns",
            "Soil Food Web",
            "Cultural Layers"
          ],
          correctAnswer: 2,
          explanation: "Soil Food Web assessment examines bacteria, fungi, and microorganisms crucial for soil health."
        },
        {
          id: 14,
          question: "What recognizes human history and patterns?",
          options: [
            "Ecological Inventory",
            "Hydrological Patterns",
            "Soil Food Web",
            "Cultural Layers"
          ],
          correctAnswer: 3,
          explanation: "Cultural Layers analysis considers human history, use patterns, and cultural significance of sites."
        },
        {
          id: 15,
          question: "What goes beyond sustainability to improve environmental conditions?",
          options: [
            "Sustainable Design",
            "Regenerative Design",
            "Green Design",
            "Eco-Design"
          ],
          correctAnswer: 1,
          explanation: "Regenerative Design actively improves ecological health rather than just reducing harm."
        },
        {
          id: 16,
          question: "What increases soil health over time?",
          options: [
            "Biodiversity Enhancement",
            "Soil Building",
            "Carbon Sequestration",
            "Water Table Recharge"
          ],
          correctAnswer: 1,
          explanation: "Soil Building designs create conditions where soil organic matter and life increase annually."
        },
        {
          id: 17,
          question: "What creates habitats for diverse species?",
          options: [
            "Soil Building",
            "Biodiversity Enhancement",
            "Carbon Sequestration",
            "Water Table Recharge"
          ],
          correctAnswer: 1,
          explanation: "Biodiversity Enhancement designs support varied plant and animal communities."
        },
        {
          id: 18,
          question: "What uses plants to capture atmospheric carbon?",
          options: [
            "Soil Building",
            "Biodiversity Enhancement",
            "Carbon Sequestration",
            "Water Table Recharge"
          ],
          correctAnswer: 2,
          explanation: "Carbon Sequestration designs use vegetation to remove and store carbon dioxide from the air."
        },
        {
          id: 19,
          question: "What replenishes groundwater supplies?",
          options: [
            "Soil Building",
            "Biodiversity Enhancement",
            "Carbon Sequestration",
            "Water Table Recharge"
          ],
          correctAnswer: 3,
          explanation: "Water Table Recharge designs allow precipitation to infiltrate and replenish underground aquifers."
        },
        {
          id: 20,
          question: "What improves with age rather than degrades?",
          options: [
            "Conventional landscapes",
            "Regenerative landscapes",
            "All designed spaces",
            "High-maintenance gardens"
          ],
          correctAnswer: 1,
          explanation: "Regenerative landscapes become more ecologically rich and self-sustaining over time."
        }
      ]
    },
    {
      id: 2,
      title: "Sustainable Water Management",
      content: `
# Sustainable Water Management

Water is our most precious resource. This module covers advanced strategies for conserving, cleaning, and celebrating water in the landscape while restoring natural hydrological cycles.

## Water Conservation Strategies

Effective water conservation employs multiple approaches:

**Rainwater Harvesting** - Capturing precipitation for later use
**Graywater Systems** - Reusing household water for irrigation
**Efficient Irrigation** - Delivering water precisely where and when needed
**Plant Selection** - Choosing species adapted to local rainfall patterns

Rainwater harvesting can supply significant irrigation needs. Graywater systems recycle water from sinks, showers, and laundry. Drip irrigation reduces evaporation loss. Native and drought-tolerant plants thrive with minimal supplemental water. Combined, these strategies can reduce outdoor water use dramatically.

## Stormwater Management

Modern stormwater management mimics natural watershed functions:

**Green Infrastructure** - Using plants and soils to manage runoff
**Permeable Surfaces** - Allowing water infiltration instead of runoff
**Rain Gardens** - Depressed areas that collect and filter runoff
**Bioswales** - Vegetated channels that slow and clean water

Green infrastructure reduces flooding while improving water quality. Permeable pavements allow groundwater recharge. Rain gardens capture runoff from roofs and paved areas. Bioswales remove pollutants through biological processes. These approaches treat stormwater as resource rather than waste.

## Constructed Wetlands

Constructed wetlands are designed ecosystems that treat wastewater naturally:

**Treatment Wetlands** - Clean polluted water through plant and microbial action
**Habitat Wetlands** - Create wildlife habitat while managing water
**Educational Wetlands** - Demonstrate ecological processes publicly

Wetland plants like cattails and bulrushes filter pollutants. Microorganisms in wetland soils break down contaminants. Wildlife finds food and shelter in these rich habitats. Communities gain beautiful, educational spaces. Constructed wetlands demonstrate nature's cleaning power.

## Water-Efficient Design Principles

Several design principles maximize water efficiency:

**Hydrozoning** - Grouping plants with similar water needs together
**Mulching** - Reducing evaporation and suppressing water-stealing weeds
**Soil Improvement** - Increasing water-holding capacity through organic matter
**Contouring** - Shaping land to capture and retain water

Hydrozoning allows targeted irrigation. Mulch reduces surface evaporation by up to seventy percent. Healthy soil holds water like a sponge. Contouring creates natural basins that capture rainfall. These principles work together to create water-wise landscapes.

## Living Water Features

Water features can be ecologically productive rather than purely decorative:

**Natural Swimming Ponds** - Chemical-free pools cleaned by plants
**Aquaponic Systems** - Combining fish farming with plant production
**Edible Water Gardens** - Growing food plants in aquatic environments
**Wildlife Water Sources** - Providing clean water for birds, insects, and animals

Natural swimming pools use aquatic plants instead of chlorine. Aquaponics creates symbiotic fish-plant ecosystems. Water chestnuts, lotus, and watercress provide food. Bird baths and insect watering stations support local wildlife. Living water features celebrate water's life-giving properties.

## Drought Resilience Planning

With changing climates, drought resilience becomes essential:

**Deep Root Development** - Encouraging plants to seek water deep underground
**Water Banking** - Storing surplus water for dry periods
**Microclimate Optimization** - Reducing water loss through strategic design
**Alternative Water Sources** - Developing non-potable water supplies

Deep watering encourages deep roots that survive drought. Cisterns and ponds store seasonal rainfall. Shade and wind protection reduce plant water needs. Air conditioner condensate and foundation drainage provide alternative irrigation sources. Resilience planning prepares landscapes for water scarcity.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What captures precipitation for later use?",
          options: [
            "Graywater Systems",
            "Rainwater Harvesting",
            "Efficient Irrigation",
            "Plant Selection"
          ],
          correctAnswer: 1,
          explanation: "Rainwater Harvesting collects and stores rainfall for landscape irrigation and other uses."
        },
        {
          id: 2,
          question: "What reuses household water for irrigation?",
          options: [
            "Rainwater Harvesting",
            "Graywater Systems",
            "Efficient Irrigation",
            "Plant Selection"
          ],
          correctAnswer: 1,
          explanation: "Graywater Systems recycle water from showers, sinks, and laundry for landscape use."
        },
        {
          id: 3,
          question: "What delivers water precisely where and when needed?",
          options: [
            "Rainwater Harvesting",
            "Graywater Systems",
            "Efficient Irrigation",
            "Plant Selection"
          ],
          correctAnswer: 2,
          explanation: "Efficient Irrigation like drip systems applies water directly to root zones with minimal waste."
        },
        {
          id: 4,
          question: "What uses plants and soils to manage runoff?",
          options: [
            "Permeable Surfaces",
            "Green Infrastructure",
            "Rain Gardens",
            "Bioswales"
          ],
          correctAnswer: 1,
          explanation: "Green Infrastructure uses living systems to manage stormwater naturally."
        },
        {
          id: 5,
          question: "What allows water infiltration instead of runoff?",
          options: [
            "Green Infrastructure",
            "Permeable Surfaces",
            "Rain Gardens",
            "Bioswales"
          ],
          correctAnswer: 1,
          explanation: "Permeable Surfaces like porous pavement allow water to soak into the ground."
        },
        {
          id: 6,
          question: "What are depressed areas that collect and filter runoff?",
          options: [
            "Green Infrastructure",
            "Permeable Surfaces",
            "Rain Gardens",
            "Bioswales"
          ],
          correctAnswer: 2,
          explanation: "Rain Gardens are shallow depressions planted with water-tolerant vegetation to manage runoff."
        },
        {
          id: 7,
          question: "What are vegetated channels that slow and clean water?",
          options: [
            "Green Infrastructure",
            "Permeable Surfaces",
            "Rain Gardens",
            "Bioswales"
          ],
          correctAnswer: 3,
          explanation: "Bioswales are designed channels with vegetation that filters pollutants from stormwater."
        },
        {
          id: 8,
          question: "What clean polluted water through plant and microbial action?",
          options: [
            "Habitat Wetlands",
            "Treatment Wetlands",
            "Educational Wetlands",
            "Decorative Wetlands"
          ],
          correctAnswer: 1,
          explanation: "Treatment Wetlands use natural processes to remove contaminants from wastewater."
        },
        {
          id: 9,
          question: "What create wildlife habitat while managing water?",
          options: [
            "Treatment Wetlands",
            "Habitat Wetlands",
            "Educational Wetlands",
            "Decorative Wetlands"
          ],
          correctAnswer: 1,
          explanation: "Habitat Wetlands provide homes for wildlife while performing water management functions."
        },
        {
          id: 10,
          question: "What demonstrate ecological processes publicly?",
          options: [
            "Treatment Wetlands",
            "Habitat Wetlands",
            "Educational Wetlands",
            "Decorative Wetlands"
          ],
          correctAnswer: 2,
          explanation: "Educational Wetlands serve as living classrooms about water ecology and treatment."
        },
        {
          id: 11,
          question: "What groups plants with similar water needs together?",
          options: ["Mulching", "Hydrozoning", "Soil Improvement", "Contouring"],
          correctAnswer: 1,
          explanation: "Hydrozoning organizes landscapes into irrigation zones based on plant water requirements."
        },
        {
          id: 12,
          question: "What reduces evaporation and suppresses weeds?",
          options: ["Hydrozoning", "Mulching", "Soil Improvement", "Contouring"],
          correctAnswer: 1,
          explanation: "Mulch covers soil to conserve moisture and prevent weed competition for water."
        },
        {
          id: 13,
          question: "What increases water-holding capacity through organic matter?",
          options: ["Hydrozoning", "Mulching", "Soil Improvement", "Contouring"],
          correctAnswer: 2,
          explanation: "Soil Improvement with compost increases water retention in the root zone."
        },
        {
          id: 14,
          question: "What shapes land to capture and retain water?",
          options: ["Hydrozoning", "Mulching", "Soil Improvement", "Contouring"],
          correctAnswer: 3,
          explanation: "Contouring creates landforms that slow water movement and increase infiltration."
        },
        {
          id: 15,
          question: "What are chemical-free pools cleaned by plants?",
          options: [
            "Aquaponic Systems",
            "Natural Swimming Ponds",
            "Edible Water Gardens",
            "Wildlife Water Sources"
          ],
          correctAnswer: 1,
          explanation: "Natural Swimming Ponds use biological filtration instead of chemicals for water purification."
        },
        {
          id: 16,
          question: "What combines fish farming with plant production?",
          options: [
            "Natural Swimming Ponds",
            "Aquaponic Systems",
            "Edible Water Gardens",
            "Wildlife Water Sources"
          ],
          correctAnswer: 1,
          explanation: "Aquaponics creates integrated systems where fish waste feeds plants that clean water."
        },
        {
          id: 17,
          question: "What grows food plants in aquatic environments?",
          options: [
            "Natural Swimming Ponds",
            "Aquaponic Systems",
            "Edible Water Gardens",
            "Wildlife Water Sources"
          ],
          correctAnswer: 2,
          explanation: "Edible Water Gardens cultivate food-producing plants adapted to wet conditions."
        },
        {
          id: 18,
          question: "What encourages plants to seek water deep underground?",
          options: [
            "Water Banking",
            "Deep Root Development",
            "Microclimate Optimization",
            "Alternative Water Sources"
          ],
          correctAnswer: 1,
          explanation: "Deep Root Development through infrequent, deep watering creates drought-resistant plants."
        },
        {
          id: 19,
          question: "What stores surplus water for dry periods?",
          options: [
            "Deep Root Development",
            "Water Banking",
            "Microclimate Optimization",
            "Alternative Water Sources"
          ],
          correctAnswer: 1,
          explanation: "Water Banking stores water in tanks, ponds, or soil for use during droughts."
        },
        {
          id: 20,
          question: "What reduces water loss through strategic design?",
          options: [
            "Deep Root Development",
            "Water Banking",
            "Microclimate Optimization",
            "Alternative Water Sources"
          ],
          correctAnswer: 2,
          explanation: "Microclimate Optimization uses shade, windbreaks, and orientation to reduce plant water needs."
        }
      ]
    },
    {
      id: 3,
      title: "Biodiversity and Habitat Creation",
      content: `
# Biodiversity and Habitat Creation

Environmental design actively enhances biological diversity by creating varied habitats that support numerous species. This module explores how designed landscapes can become thriving ecosystems.

## Principles of Habitat Creation

Effective habitat creation follows key ecological principles:

**Layered Planting** - Mimicking natural vegetation structure with canopy, understory, and ground layers
**Edge Effect** - Creating diverse conditions where different habitats meet
**Successional Planning** - Providing habitats for species at different ecological stages
**Connectivity** - Linking habitat patches to allow species movement

Layered planting provides niches for different species. Edge zones between habitats support high biodiversity. Successional planning ensures continuous habitat availability. Connectivity allows genetic exchange and migration. These principles guide creation of rich, functional ecosystems.

## Native Plant Communities

Native plants form the foundation of habitat creation:

**Regional Adaptation** - Plants evolved to local conditions require fewer resources
**Co-evolved Relationships** - Native plants support local insects and wildlife
**Genetic Diversity** - Using local ecotypes maintains regional genetic variation
**Community Associations** - Planting species that naturally occur together

Regionally adapted plants thrive with minimal care. Co-evolved relationships mean native insects can eat native plants. Local ecotypes are genetically suited to specific areas. Plant communities replicate natural associations for stability. Native plantings become self-sustaining over time.

## Wildlife Support Systems

Designing for wildlife requires providing essential needs:

**Food Sources** - Year-round availability through diverse plant selection
**Water Access** - Clean drinking and bathing water for various species
**Shelter** - Protection from weather and predators
**Nesting/Breeding Sites** - Safe places for reproduction

Berry-producing shrubs feed birds through winter. Water features attract diverse wildlife. Brush piles and rock walls provide shelter. Nesting boxes and undisturbed areas support breeding. Complete habitat design addresses all these needs.

## Pollinator Gardens

Pollinators are essential for ecosystem health and food production:

**Nectar and Pollen Sources** - Flowers with different bloom times provide continuous food
**Larval Host Plants** - Specific plants that caterpillar stages require
**Pesticide-Free Management** - Protecting pollinators from chemical harm
**Overwintering Habitat** - Shelter for insects during cold months

Continuous bloom from spring through fall sustains pollinators. Milkweed hosts monarch caterpillars. Organic practices protect pollinator health. Bare ground and stem bundles provide winter shelter. Pollinator gardens support these crucial ecosystem workers.

## Bird Habitat Design

Birds require specific habitat features:

**Vertical Structure** - Different layers for different bird species
**Food Variety** - Seeds, berries, insects, and nectar
**Water Features** - For drinking, bathing, and attracting insects
**Predator Protection** - Safe perches and escape cover

Canopy layers suit woodpeckers and hawks. Understory supports songbirds. Diverse food sources attract different species. Moving water attracts more birds than still water. Thorny plants provide predator protection. Bird-friendly design creates avian havens.

## Insect Hotels and Habitat Features

Insects perform vital ecosystem services:

**Solitary Bee Housing** - Tunnels for native bee species
**Butterfly Overwintering** - Protected spaces for chrysalises
**Beneficial Insect Support** - Habitat for pest-controlling insects
**Decomposition Areas** - Spaces for detritivores that break down organic matter

Bee hotels support pollination. Butterfly shelters protect during metamorphosis. Ladybugs and lacewings control pests naturally. Log piles host decomposer organisms. Insect habitat features support these small but crucial creatures.

## Creating Ecological Corridors

Ecological corridors connect fragmented habitats:

**Riparian Buffers** - Vegetated zones along waterways
**Hedgerows** - Linear plantings that connect larger habitats
**Greenways** - Continuous natural corridors through developed areas
**Stepping Stone Habitats** - Small patches that facilitate movement

Riparian buffers filter water and provide movement corridors. Hedgerows connect woodlands across agricultural land. Greenways allow wildlife movement through cities. Stepping stones help species cross inhospitable areas. Connected habitats support healthier populations.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What mimics natural vegetation structure with multiple layers?",
          options: [
            "Edge Effect",
            "Layered Planting",
            "Successional Planning",
            "Connectivity"
          ],
          correctAnswer: 1,
          explanation: "Layered Planting recreates the canopy, understory, and ground layers found in natural ecosystems."
        },
        {
          id: 2,
          question: "What creates diverse conditions where habitats meet?",
          options: [
            "Layered Planting",
            "Edge Effect",
            "Successional Planning",
            "Connectivity"
          ],
          correctAnswer: 1,
          explanation: "Edge Effect zones between different habitat types support exceptionally high biodiversity."
        },
        {
          id: 3,
          question: "What provides habitats for species at different ecological stages?",
          options: [
            "Layered Planting",
            "Edge Effect",
            "Successional Planning",
            "Connectivity"
          ],
          correctAnswer: 2,
          explanation: "Successional Planning ensures habitat availability through different stages of ecosystem development."
        },
        {
          id: 4,
          question: "What links habitat patches to allow species movement?",
          options: [
            "Layered Planting",
            "Edge Effect",
            "Successional Planning",
            "Connectivity"
          ],
          correctAnswer: 3,
          explanation: "Connectivity between habitat areas enables genetic exchange and migration for healthier populations."
        },
        {
          id: 5,
          question: "What plants evolved to local conditions requiring fewer resources?",
          options: [
            "Co-evolved Plants",
            "Regional Adapted Plants",
            "Genetic Diverse Plants",
            "Community Associated Plants"
          ],
          correctAnswer: 1,
          explanation: "Regionally adapted plants are naturally suited to local climate, soils, and conditions."
        },
        {
          id: 6,
          question: "What plants support local insects and wildlife through evolutionary relationships?",
          options: [
            "Regional Adapted Plants",
            "Co-evolved Plants",
            "Genetic Diverse Plants",
            "Community Associated Plants"
          ],
          correctAnswer: 1,
          explanation: "Co-evolved plants have established relationships with local insects and animals over millennia."
        },
        {
          id: 7,
          question: "What plants maintain regional genetic variation?",
          options: [
            "Regional Adapted Plants",
            "Co-evolved Plants",
            "Genetic Diverse Plants",
            "Community Associated Plants"
          ],
          correctAnswer: 2,
          explanation: "Genetically diverse native plantings preserve the unique genetic heritage of local populations."
        },
        {
          id: 8,
          question: "What plants replicate natural associations for stability?",
          options: [
            "Regional Adapted Plants",
            "Co-evolved Plants",
            "Genetic Diverse Plants",
            "Community Associated Plants"
          ],
          correctAnswer: 3,
          explanation: "Community Associated plants are species that naturally grow together, supporting each other's needs."
        },
        {
          id: 9,
          question: "What provides year-round food through diverse plant selection?",
          options: [
            "Water Access",
            "Food Sources",
            "Shelter",
            "Nesting/Breeding Sites"
          ],
          correctAnswer: 1,
          explanation: "Diverse Food Sources ensure wildlife have nutrition available across all seasons."
        },
        {
          id: 10,
          question: "What provides clean drinking and bathing water for species?",
          options: [
            "Food Sources",
            "Water Access",
            "Shelter",
            "Nesting/Breeding Sites"
          ],
          correctAnswer: 1,
          explanation: "Water Access is essential for drinking, bathing, and attracting insect prey for many species."
        },
        {
          id: 11,
          question: "What provides flowers with different bloom times for continuous food?",
          options: [
            "Larval Host Plants",
            "Nectar and Pollen Sources",
            "Pesticide-Free Management",
            "Overwintering Habitat"
          ],
          correctAnswer: 1,
          explanation: "Staggered Nectar and Pollen Sources ensure pollinators have food throughout their active seasons."
        },
        {
          id: 12,
          question: "What are specific plants that caterpillar stages require?",
          options: [
            "Nectar and Pollen Sources",
            "Larval Host Plants",
            "Pesticide-Free Management",
            "Overwintering Habitat"
          ],
          correctAnswer: 1,
          explanation: "Larval Host Plants are essential for butterfly and moth reproduction - like milkweed for monarchs."
        },
        {
          id: 13,
          question: "What different layers do different bird species require?",
          options: [
            "Food Variety",
            "Vertical Structure",
            "Water Features",
            "Predator Protection"
          ],
          correctAnswer: 1,
          explanation: "Vertical Structure provides specialized niches for different bird species within the same space."
        },
        {
          id: 14,
          question: "What includes seeds, berries, insects, and nectar for birds?",
          options: [
            "Vertical Structure",
            "Food Variety",
            "Water Features",
            "Predator Protection"
          ],
          correctAnswer: 1,
          explanation: "Food Variety attracts different bird species with different dietary preferences."
        },
        {
          id: 15,
          question: "What are tunnels for native bee species?",
          options: [
            "Butterfly Overwintering",
            "Solitary Bee Housing",
            "Beneficial Insect Support",
            "Decomposition Areas"
          ],
          correctAnswer: 1,
          explanation: "Solitary Bee Housing provides nesting tunnels for native bees that don't live in hives."
        },
        {
          id: 16,
          question: "What provides protected spaces for chrysalises?",
          options: [
            "Solitary Bee Housing",
            "Butterfly Overwintering",
            "Beneficial Insect Support",
            "Decomposition Areas"
          ],
          correctAnswer: 1,
          explanation: "Butterfly Overwintering shelters protect delicate chrysalises during metamorphosis."
        },
        {
          id: 17,
          question: "What are vegetated zones along waterways?",
          options: [
            "Hedgerows",
            "Riparian Buffers",
            "Greenways",
            "Stepping Stone Habitats"
          ],
          correctAnswer: 1,
          explanation: "Riparian Buffers filter runoff and provide movement corridors along streams and rivers."
        },
        {
          id: 18,
          question: "What are linear plantings that connect larger habitats?",
          options: [
            "Riparian Buffers",
            "Hedgerows",
            "Greenways",
            "Stepping Stone Habitats"
          ],
          correctAnswer: 1,
          explanation: "Hedgerows create wildlife corridors through agricultural and developed landscapes."
        },
        {
          id: 19,
          question: "What are continuous natural corridors through developed areas?",
          options: [
            "Riparian Buffers",
            "Hedgerows",
            "Greenways",
            "Stepping Stone Habitats"
          ],
          correctAnswer: 2,
          explanation: "Greenways provide connected habitat through urban and suburban environments."
        },
        {
          id: 20,
          question: "What are small patches that facilitate species movement?",
          options: [
            "Riparian Buffers",
            "Hedgerows",
            "Greenways",
            "Stepping Stone Habitats"
          ],
          correctAnswer: 3,
          explanation: "Stepping Stone Habitats help wildlife cross otherwise inhospitable areas between larger habitats."
        }
      ]
    },
    {
      id: 4,
      title: "Sustainable Materials and Construction",
      content: `
# Sustainable Materials and Construction

Environmental design extends to material selection and construction methods that minimize ecological impact while maximizing durability and beauty.

## Material Selection Criteria

Choose materials based on comprehensive sustainability criteria:

**Embodied Energy** - Total energy consumed in extraction, manufacturing, and transport
**Renewability** - Whether materials come from rapidly regenerating sources
**Local Availability** - Reducing transportation energy and supporting local economies
**Recycled Content** - Using post-consumer or post-industrial materials
**Durability** - Long lifespan reduces replacement frequency and waste

Low embodied energy materials minimize carbon footprint. Renewable materials like bamboo regenerate quickly. Local materials reduce transportation impacts. Recycled materials divert waste from landfills. Durable materials last generations with proper care.

## Natural and Renewable Materials

Nature provides abundant sustainable building materials:

**Wood from Sustainable Forestry** - Certified lumber from responsibly managed forests
**Bamboo** - Rapidly renewable grass with strength comparable to hardwoods
**Natural Stone** - Durable material requiring minimal processing
**Earth Materials** - Clay, sand, and gravel with low processing energy
**Thatch and Natural Fibers** - Traditional materials from renewable plants

Forest Stewardship Council certification ensures sustainable wood harvesting. Bamboo grows to harvest size in 3-5 years. Local stone requires minimal processing energy. Earth materials are abundant and minimally processed. Thatch provides beautiful, insulating roofs from wetland plants.

## Recycled and Reclaimed Materials

Creative reuse transforms waste into resources:

**Reclaimed Wood** - Lumber salvaged from old buildings, barns, and bridges
**Recycled Plastic** - Plastic waste transformed into durable lumber alternatives
**Crushed Concrete** - Demolition waste used as aggregate in new construction
**Recycled Glass** - Glass cullet used in countertops, tiles, and decorative elements
**Reclaimed Brick and Stone** - Historic materials with character and patina

Reclaimed wood preserves old-growth timber and historical character. Recycled plastic lumber never rots or needs painting. Crushed concrete reduces landfill use and quarrying. Recycled glass creates colorful, durable surfaces. Reclaimed masonry materials tell historical stories.

## Low-Impact Construction Methods

How we build matters as much as what we build with:

**Minimal Site Disturbance** - Protecting existing vegetation and topsoil
**Dry Stack Construction** - Building without mortar to allow disassembly and reuse
**Modular Design** - Creating components that can be rearranged or repurposed
**Hand Tools and Simple Technology** - Reducing fossil fuel use in construction
**Natural Building Techniques** - Cob, straw bale, and rammed earth construction

Minimal disturbance preserves soil structure and seed banks. Dry stack walls can be dismantled and rebuilt. Modular elements adapt to changing needs over time. Hand tools reduce noise, pollution, and fuel use. Natural building uses locally available materials with simple techniques.

## Green Hardscape Options

Hardscape can be both beautiful and sustainable:

**Permeable Pavers** - Allow water infiltration while providing stable surfaces
**Local Stone** - Reduces transportation energy and blends with regional character
**Recycled Concrete Pavers** - Give new life to construction waste
**Gravel and Decomposed Granite** - Natural materials that allow water percolation
**Wood from Urban Trees** - Using trees removed for safety or development

Permeable pavers reduce stormwater runoff. Local stone connects designs to regional geology. Recycled concrete mimics natural stone at lower cost. Gravel surfaces are inexpensive and highly permeable. Urban wood utilization honors city trees' lives.

## Sustainable Landscape Features

Special features can demonstrate sustainability principles:

**Living Walls** - Vertical gardens that improve air quality and insulation
**Green Roofs** - Vegetated roof systems that reduce stormwater and cooling loads
**Compost Systems** - Turning yard and kitchen waste into soil amendment
**Solar Lighting** - Energy-independent illumination using photovoltaic panels
**Rainwater Collection Art** - Beautiful displays that celebrate water conservation

Living walls provide habitat and beauty in small spaces. Green roofs reduce urban heat island effect. Compost systems close nutrient cycles on-site. Solar lighting eliminates wiring and energy costs. Rainwater art educates while functioning.

## Maintenance Considerations

Sustainable design considers long-term maintenance:

**Low-Maintenance Plantings** - Native communities that require minimal care
**Durable Materials** - That withstand weather without frequent replacement
**Self-Cleaning Systems** - Designs that minimize maintenance requirements
**Educational Signage** - Teaching users how to care for sustainable features
**Adaptive Management** - Monitoring and adjusting based on performance

Native plant communities establish self-sustaining ecosystems. Durable materials reduce replacement cycles. Self-cleaning designs use natural processes like rainfall. Educational signage builds user understanding and care. Adaptive management ensures long-term success.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is total energy consumed in extraction, manufacturing, and transport?",
          options: [
            "Renewability",
            "Embodied Energy",
            "Local Availability",
            "Recycled Content"
          ],
          correctAnswer: 1,
          explanation: "Embodied Energy accounts for all energy used throughout a material's life cycle."
        },
        {
          id: 2,
          question: "What indicates materials from rapidly regenerating sources?",
          options: [
            "Embodied Energy",
            "Renewability",
            "Local Availability",
            "Recycled Content"
          ],
          correctAnswer: 1,
          explanation: "Renewability refers to materials that regrow quickly, like bamboo or cork."
        },
        {
          id: 3,
          question: "What reduces transportation energy and supports local economies?",
          options: [
            "Embodied Energy",
            "Renewability",
            "Local Availability",
            "Recycled Content"
          ],
          correctAnswer: 2,
          explanation: "Local Availability minimizes shipping distance while supporting regional producers."
        },
        {
          id: 4,
          question: "What uses post-consumer or post-industrial materials?",
          options: [
            "Embodied Energy",
            "Renewability",
            "Local Availability",
            "Recycled Content"
          ],
          correctAnswer: 3,
          explanation: "Recycled Content gives new life to materials that would otherwise become waste."
        },
        {
          id: 5,
          question: "What is certified lumber from responsibly managed forests?",
          options: [
            "Bamboo",
            "Wood from Sustainable Forestry",
            "Natural Stone",
            "Earth Materials"
          ],
          correctAnswer: 1,
          explanation: "Sustainable forestry certification ensures wood comes from well-managed, renewable sources."
        },
        {
          id: 6,
          question: "What is rapidly renewable grass with strength comparable to hardwoods?",
          options: [
            "Wood from Sustainable Forestry",
            "Bamboo",
            "Natural Stone",
            "Earth Materials"
          ],
          correctAnswer: 1,
          explanation: "Bamboo is actually a grass that grows exceptionally fast with remarkable strength."
        },
        {
          id: 7,
          question: "What is durable material requiring minimal processing?",
          options: [
            "Wood from Sustainable Forestry",
            "Bamboo",
            "Natural Stone",
            "Earth Materials"
          ],
          correctAnswer: 2,
          explanation: "Natural Stone requires only cutting and shaping, with very low manufacturing energy."
        },
        {
          id: 8,
          question: "What are clay, sand, and gravel with low processing energy?",
          options: [
            "Wood from Sustainable Forestry",
            "Bamboo",
            "Natural Stone",
            "Earth Materials"
          ],
          correctAnswer: 3,
          explanation: "Earth Materials are minimally processed local resources for building."
        },
        {
          id: 9,
          question: "What is lumber salvaged from old buildings and structures?",
          options: [
            "Recycled Plastic",
            "Reclaimed Wood",
            "Crushed Concrete",
            "Recycled Glass"
          ],
          correctAnswer: 1,
          explanation: "Reclaimed Wood preserves historical materials and reduces demand for new timber."
        },
        {
          id: 10,
          question: "What is plastic waste transformed into durable lumber alternatives?",
          options: [
            "Reclaimed Wood",
            "Recycled Plastic",
            "Crushed Concrete",
            "Recycled Glass"
          ],
          correctAnswer: 1,
          explanation: "Recycled Plastic Lumber gives permanent use to plastic that would otherwise pollute."
        },
        {
          id: 11,
          question: "What protects existing vegetation and topsoil during construction?",
          options: [
            "Dry Stack Construction",
            "Minimal Site Disturbance",
            "Modular Design",
            "Hand Tools and Simple Technology"
          ],
          correctAnswer: 1,
          explanation: "Minimal Site Disturbance preserves ecological functions and reduces erosion."
        },
        {
          id: 12,
          question: "What builds without mortar to allow disassembly and reuse?",
          options: [
            "Minimal Site Disturbance",
            "Dry Stack Construction",
            "Modular Design",
            "Hand Tools and Simple Technology"
          ],
          correctAnswer: 1,
          explanation: "Dry Stack Construction creates reusable structures without permanent bonding."
        },
        {
          id: 13,
          question: "What creates components that can be rearranged or repurposed?",
          options: [
            "Minimal Site Disturbance",
            "Dry Stack Construction",
            "Modular Design",
            "Hand Tools and Simple Technology"
          ],
          correctAnswer: 2,
          explanation: "Modular Design allows adaptation to changing needs over time."
        },
        {
          id: 14,
          question: "What allow water infiltration while providing stable surfaces?",
          options: [
            "Local Stone",
            "Permeable Pavers",
            "Recycled Concrete Pavers",
            "Gravel and Decomposed Granite"
          ],
          correctAnswer: 1,
          explanation: "Permeable Pavers have gaps that allow rainwater to soak into the ground below."
        },
        {
          id: 15,
          question: "What reduces transportation energy and blends with regional character?",
          options: [
            "Permeable Pavers",
            "Local Stone",
            "Recycled Concrete Pavers",
            "Gravel and Decomposed Granite"
          ],
          correctAnswer: 1,
          explanation: "Local Stone connects designs to regional geology with minimal shipping impact."
        },
        {
          id: 16,
          question: "What are vertical gardens that improve air quality and insulation?",
          options: [
            "Green Roofs",
            "Living Walls",
            "Compost Systems",
            "Solar Lighting"
          ],
          correctAnswer: 1,
          explanation: "Living Walls provide greenery in vertical spaces with multiple environmental benefits."
        },
        {
          id: 17,
          question: "What are vegetated roof systems that reduce stormwater and cooling loads?",
          options: [
            "Living Walls",
            "Green Roofs",
            "Compost Systems",
            "Solar Lighting"
          ],
          correctAnswer: 1,
          explanation: "Green Roofs replace heat-absorbing surfaces with living, cooling vegetation."
        },
        {
          id: 18,
          question: "What turns yard and kitchen waste into soil amendment?",
          options: [
            "Living Walls",
            "Green Roofs",
            "Compost Systems",
            "Solar Lighting"
          ],
          correctAnswer: 2,
          explanation: "Compost Systems recycle organic waste into valuable soil nutrients on-site."
        },
        {
          id: 19,
          question: "What are native communities that require minimal care?",
          options: [
            "Durable Materials",
            "Low-Maintenance Plantings",
            "Self-Cleaning Systems",
            "Educational Signage"
          ],
          correctAnswer: 1,
          explanation: "Low-Maintenance Plantings establish self-sustaining ecosystems adapted to local conditions."
        },
        {
          id: 20,
          question: "What withstand weather without frequent replacement?",
          options: [
            "Low-Maintenance Plantings",
            "Durable Materials",
            "Self-Cleaning Systems",
            "Educational Signage"
          ],
          correctAnswer: 1,
          explanation: "Durable Materials last for decades or centuries with minimal maintenance needs."
        }
      ]
    },
    {
      id: 5,
      title: "Community and Social Ecology",
      content: `
# Community and Social Ecology

Environmental design extends beyond ecological systems to include human communities. This module explores how designed environments can foster social connections, cultural expression, and community well-being.

## Designing for Social Interaction

Landscapes can intentionally encourage positive social encounters:

**Third Places** - Community spaces beyond home and work where people connect
**Sitting Opportunities** - Comfortable, well-placed seating that invites conversation
**Activity Nodes** - Areas designed for specific communal activities
**Path Networks** - Routes that encourage walking and casual meetings

Third places like cafes and plazas build community identity. Strategically placed benches create natural gathering spots. Activity nodes for games, gardening, or performances bring people together. Well-designed paths increase chance encounters and neighborhood familiarity.

## Cultural Landscape Integration

Design should respect and reflect local cultural identity:

**Historic Preservation** - Protecting culturally significant landscapes and features
**Cultural Expression** - Incorporating art, symbols, and patterns meaningful to communities
**Ethnobotany** - Including plants with cultural significance and traditional uses
**Placemaking** - Creating spaces that feel uniquely rooted in their location

Historic preservation maintains community memory and continuity. Cultural expression through design honors diverse traditions. Ethnobotanical gardens preserve plant knowledge and heritage. Placemaking creates distinctive, beloved community spaces.

## Universal and Inclusive Design

Environmental design should be accessible to all:

**Physical Accessibility** - Designing for people with mobility, vision, or hearing differences
**Generational Inclusion** - Creating spaces enjoyable for children through seniors
**Cultural Accessibility** - Welcoming people from diverse cultural backgrounds
**Economic Accessibility** - Ensuring spaces are free or affordable to use

Physical accessibility allows everyone to participate fully. Multi-generational design considers different ages' needs and interests. Cultural accessibility respects diverse traditions and comfort levels. Economic accessibility prevents exclusion based on income.

## Community Food Systems

Landscapes can contribute to local food security and education:

**Community Gardens** - Shared growing spaces that build skills and relationships
**Edible Landscapes** - Integrating food plants throughout designed spaces
**Orchards and Food Forests** - Perennial food systems that mimic natural ecosystems
**Educational Gardens** - Spaces that teach food growing and preparation

Community gardens foster cooperation and food self-reliance. Edible landscapes make food production beautiful and accessible. Food forests create low-maintenance perennial food sources. Educational gardens build food literacy across generations.

## Therapeutic Landscapes

Designed environments can support mental and physical health:

**Healing Gardens** - Spaces specifically designed for therapeutic benefits
**Sensory Gardens** - Engaging all five senses through plant selection and design
**Restorative Environments** - Natural settings that reduce stress and mental fatigue
**Horticultural Therapy** - Using gardening activities for therapeutic purposes

Healing gardens support recovery in healthcare settings. Sensory gardens engage people with different abilities. Restorative environments provide mental respite from urban stress. Horticultural therapy uses gardening to achieve clinical goals.

## Participatory Design Processes

Community involvement creates better, more accepted designs:

**Community Workshops** - Gathering local knowledge and preferences
**Design Charrettes** - Intensive collaborative design sessions
**Participatory Budgeting** - Community members helping decide resource allocation
**Co-Design** - Professionals and community members designing together

Community workshops tap into local expertise and desires. Design charrettes generate creative solutions quickly. Participatory budgeting builds ownership and appropriate spending. Co-design ensures solutions meet actual community needs.

## Educational and Interpretive Elements

Landscapes can teach ecological principles and local history:

**Interpretive Signage** - Explaining ecological processes and historical significance
**Demonstration Gardens** - Showing sustainable practices in action
**Interactive Elements** - Features that invite hands-on learning
**Seasonal Displays** - Changing exhibits that highlight different aspects over time

Interpretive signage transforms spaces into outdoor classrooms. Demonstration gardens model sustainable techniques. Interactive elements engage children and adults alike. Seasonal displays maintain interest and teach about cycles.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are community spaces beyond home and work where people connect?",
          options: [
            "Sitting Opportunities",
            "Third Places",
            "Activity Nodes",
            "Path Networks"
          ],
          correctAnswer: 1,
          explanation: "Third Places like parks, cafes, and community centers foster informal social connections."
        },
        {
          id: 2,
          question: "What are comfortable, well-placed seating that invites conversation?",
          options: [
            "Third Places",
            "Sitting Opportunities",
            "Activity Nodes",
            "Path Networks"
          ],
          correctAnswer: 1,
          explanation: "Strategic Sitting Opportunities create natural gathering points for social interaction."
        },
        {
          id: 3,
          question: "What are areas designed for specific communal activities?",
          options: [
            "Third Places",
            "Sitting Opportunities",
            "Activity Nodes",
            "Path Networks"
          ],
          correctAnswer: 2,
          explanation: "Activity Nodes intentionally support group activities like games, performances, or markets."
        },
        {
          id: 4,
          question: "What are routes that encourage walking and casual meetings?",
          options: [
            "Third Places",
            "Sitting Opportunities",
            "Activity Nodes",
            "Path Networks"
          ],
          correctAnswer: 3,
          explanation: "Well-designed Path Networks increase chance encounters and neighborhood familiarity."
        },
        {
          id: 5,
          question: "What protects culturally significant landscapes and features?",
          options: [
            "Cultural Expression",
            "Historic Preservation",
            "Ethnobotany",
            "Placemaking"
          ],
          correctAnswer: 1,
          explanation: "Historic Preservation maintains physical connections to community history and identity."
        },
        {
          id: 6,
          question: "What incorporates art, symbols, and patterns meaningful to communities?",
          options: [
            "Historic Preservation",
            "Cultural Expression",
            "Ethnobotany",
            "Placemaking"
          ],
          correctAnswer: 1,
          explanation: "Cultural Expression through design honors and celebrates diverse community traditions."
        },
        {
          id: 7,
          question: "What includes plants with cultural significance and traditional uses?",
          options: [
            "Historic Preservation",
            "Cultural Expression",
            "Ethnobotany",
            "Placemaking"
          ],
          correctAnswer: 2,
          explanation: "Ethnobotany integrates plants with historical, medicinal, or ceremonial importance."
        },
        {
          id: 8,
          question: "What creates spaces that feel uniquely rooted in their location?",
          options: [
            "Historic Preservation",
            "Cultural Expression",
            "Ethnobotany",
            "Placemaking"
          ],
          correctAnswer: 3,
          explanation: "Placemaking develops distinctive spaces that reflect and strengthen local identity."
        },
        {
          id: 9,
          question: "What designs for people with mobility, vision, or hearing differences?",
          options: [
            "Generational Inclusion",
            "Physical Accessibility",
            "Cultural Accessibility",
            "Economic Accessibility"
          ],
          correctAnswer: 1,
          explanation: "Physical Accessibility ensures everyone can use and enjoy designed spaces regardless of ability."
        },
        {
          id: 10,
          question: "What creates spaces enjoyable for children through seniors?",
          options: [
            "Physical Accessibility",
            "Generational Inclusion",
            "Cultural Accessibility",
            "Economic Accessibility"
          ],
          correctAnswer: 1,
          explanation: "Generational Inclusion considers the different needs and interests of all age groups."
        },
        {
          id: 11,
          question: "What are shared growing spaces that build skills and relationships?",
          options: [
            "Edible Landscapes",
            "Community Gardens",
            "Orchards and Food Forests",
            "Educational Gardens"
          ],
          correctAnswer: 1,
          explanation: "Community Gardens provide land, community, and education for urban food production."
        },
        {
          id: 12,
          question: "What integrates food plants throughout designed spaces?",
          options: [
            "Community Gardens",
            "Edible Landscapes",
            "Orchards and Food Forests",
            "Educational Gardens"
          ],
          correctAnswer: 1,
          explanation: "Edible Landscapes make food production beautiful, accessible, and integrated into daily life."
        },
        {
          id: 13,
          question: "What creates low-maintenance perennial food sources mimicking ecosystems?",
          options: [
            "Community Gardens",
            "Edible Landscapes",
            "Orchards and Food Forests",
            "Educational Gardens"
          ],
          correctAnswer: 2,
          explanation: "Food Forests create layered, self-maintaining food systems based on ecological principles."
        },
        {
          id: 14,
          question: "What are spaces specifically designed for therapeutic benefits?",
          options: [
            "Sensory Gardens",
            "Healing Gardens",
            "Restorative Environments",
            "Horticultural Therapy"
          ],
          correctAnswer: 1,
          explanation: "Healing Gardens in healthcare settings support physical and emotional recovery."
        },
        {
          id: 15,
          question: "What engages all five senses through plant selection and design?",
          options: [
            "Healing Gardens",
            "Sensory Gardens",
            "Restorative Environments",
            "Horticultural Therapy"
          ],
          correctAnswer: 1,
          explanation: "Sensory Gardens stimulate touch, smell, sight, sound, and sometimes taste for full engagement."
        },
        {
          id: 16,
          question: "What gathers local knowledge and preferences from community members?",
          options: [
            "Design Charrettes",
            "Community Workshops",
            "Participatory Budgeting",
            "Co-Design"
          ],
          correctAnswer: 1,
          explanation: "Community Workshops collect community insights, needs, and aspirations for design."
        },
        {
          id: 17,
          question: "What are intensive collaborative design sessions?",
          options: [
            "Community Workshops",
            "Design Charrettes",
            "Participatory Budgeting",
            "Co-Design"
          ],
          correctAnswer: 1,
          explanation: "Design Charrettes bring diverse stakeholders together for focused, creative problem-solving."
        },
        {
          id: 18,
          question: "What involves community members helping decide resource allocation?",
          options: [
            "Community Workshops",
            "Design Charrettes",
            "Participatory Budgeting",
            "Co-Design"
          ],
          correctAnswer: 2,
          explanation: "Participatory Budgeting gives community members direct say in how funds are spent."
        },
        {
          id: 19,
          question: "What explains ecological processes and historical significance?",
          options: [
            "Demonstration Gardens",
            "Interpretive Signage",
            "Interactive Elements",
            "Seasonal Displays"
          ],
          correctAnswer: 1,
          explanation: "Interpretive Signage educates visitors about environmental features and stories."
        },
        {
          id: 20,
          question: "What shows sustainable practices in action?",
          options: [
            "Interpretive Signage",
            "Demonstration Gardens",
            "Interactive Elements",
            "Seasonal Displays"
          ],
          correctAnswer: 1,
          explanation: "Demonstration Gardens model techniques like rainwater harvesting or native planting."
        }
      ]
    },
    {
      id: 6,
      title: "Climate Change Adaptation",
      content: `
# Climate Change Adaptation

Environmental design must address changing climate conditions. This module covers strategies for creating resilient landscapes that can withstand and adapt to climate impacts while mitigating further change.

## Climate Projections and Implications

Understanding local climate projections informs adaptation planning:

**Temperature Increases** - Planning for more extreme heat and altered growing seasons
**Precipitation Changes** - Preparing for more intense storms and/or prolonged droughts
**Sea Level Rise** - Designing coastal landscapes for changing shorelines
**Extreme Weather Events** - Building resilience against floods, fires, and storms

Temperature increases may require heat-tolerant plants and cooling strategies. Altered precipitation patterns demand flexible water management. Sea level rise necessitates resilient coastal designs. Extreme weather requires robust, recoverable landscapes.

## Heat Island Mitigation

Urban areas experience amplified heat effects requiring specific interventions:

**Increased Vegetation** - Trees and plants that provide shade and evaporative cooling
**Reflective Surfaces** - Materials with high solar reflectance to reduce heat absorption
**Green Roofs and Walls** - Living surfaces that cool through evapotranspiration
**Water Features** - Evaporative cooling through fountains, misters, and ponds

Urban trees can reduce nearby temperatures significantly. Light-colored pavements reflect rather than absorb heat. Green roofs moderate building temperatures naturally. Water features provide cooling through evaporation physics.

## Flood Resilience Design

Increased precipitation intensity demands sophisticated water management:

**Adaptive Drainage** - Systems that handle variable water volumes
**Floodable Landscapes** - Areas designed to safely accommodate occasional inundation
**Elevated Structures** - Building above projected flood levels
**Erosion Control** - Protecting soils during intense rainfall events

Adaptive drainage adjusts to changing precipitation patterns. Floodable parks and plazas provide temporary water storage. Elevated pathways and structures remain functional during floods. Robust erosion control prevents landscape damage.

## Drought Adaptation Strategies

Water scarcity requires comprehensive conservation and resilience:

**Xeriscaping Principles** - Landscape approaches that minimize water use
**Soil Moisture Management** - Techniques to maximize water retention in soil
**Alternative Water Sources** - Developing non-potable water supplies
**Plant Community Adaptation** - Transitioning to more drought-tolerant species

Xeriscaping creates beautiful landscapes with minimal irrigation. Organic matter and mulch dramatically improve soil water-holding capacity. Graywater and rainwater become valuable irrigation resources. Gradual transition to climate-adapted plants builds resilience.

## Carbon Sequestration Landscapes

Design can actively remove carbon from the atmosphere:

**High-Biomass Plantings** - Plants that rapidly accumulate organic matter
**Soil Carbon Building** - Practices that increase soil organic carbon
**Woody Plant Establishment** - Trees and shrubs that store carbon long-term
**Avoided Emissions** - Designs that reduce fossil fuel use through natural cooling/heating

Fast-growing trees and deep-rooted perennials accumulate biomass quickly. Compost addition and no-till practices build soil carbon. Long-lived tree species provide permanent carbon storage. Passive design reduces building energy consumption and associated emissions.

## Fire-Resistant Landscapes

In fire-prone regions, design must reduce fire risk:

**Defensible Space Creation** - Zones with reduced fuel around structures
**Fire-Resistant Plant Selection** - Species with high moisture content and low flammability
**Fuel Management** - Regular maintenance to remove combustible materials
**Strategic Hardscape** - Non-flammable barriers and breaks in vegetation

Defensible space provides protection for structures. Succulents and deciduous plants are typically less flammable. Regular pruning removes dead material that could fuel fires. Stone walls and pathways create firebreaks in the landscape.

## Coastal Resilience

Coastal areas face unique climate challenges requiring specialized approaches:

**Living Shorelines** - Using plants and natural materials instead of hard structures
**Dune Restoration** - Building and stabilizing natural coastal defenses
**Salt-Tolerant Plantings** - Species adapted to saline conditions and storm surges
**Managed Retreat** - Designing for gradual relocation away from vulnerable areas

Living shorelines provide habitat while protecting against erosion. Healthy dunes absorb storm energy and protect inland areas. Salt-tolerant vegetation stabilizes soils in challenging conditions. Managed retreat accepts changing conditions rather than fighting them.

## Monitoring and Adaptive Management

Climate adaptation requires ongoing observation and adjustment:

**Performance Monitoring** - Tracking how designs respond to actual climate conditions
**Community Feedback** - Learning from local experiences and observations
**Flexible Design** - Creating landscapes that can be easily modified
**Knowledge Sharing** - Building community capacity through shared learning

Regular monitoring identifies what's working and what needs adjustment. Local knowledge provides practical insights about climate impacts. Modular, adaptable designs allow cost-effective modifications. Community education builds collective resilience capacity.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What requires planning for more extreme heat and altered growing seasons?",
          options: [
            "Precipitation Changes",
            "Temperature Increases",
            "Sea Level Rise",
            "Extreme Weather Events"
          ],
          correctAnswer: 1,
          explanation: "Temperature Increases demand heat-tolerant plants and cooling strategies in landscapes."
        },
        {
          id: 2,
          question: "What requires preparing for intense storms and/or prolonged droughts?",
          options: [
            "Temperature Increases",
            "Precipitation Changes",
            "Sea Level Rise",
            "Extreme Weather Events"
          ],
          correctAnswer: 1,
          explanation: "Precipitation Changes necessitate flexible water management for both floods and droughts."
        },
        {
          id: 3,
          question: "What requires designing coastal landscapes for changing shorelines?",
          options: [
            "Temperature Increases",
            "Precipitation Changes",
            "Sea Level Rise",
            "Extreme Weather Events"
          ],
          correctAnswer: 2,
          explanation: "Sea Level Rise demands resilient designs for gradually inundated coastal areas."
        },
        {
          id: 4,
          question: "What provides shade and evaporative cooling in urban areas?",
          options: [
            "Reflective Surfaces",
            "Increased Vegetation",
            "Green Roofs and Walls",
            "Water Features"
          ],
          correctAnswer: 1,
          explanation: "Increased Vegetation through trees and plants is the most effective urban cooling strategy."
        },
        {
          id: 5,
          question: "What are materials with high solar reflectance to reduce heat absorption?",
          options: [
            "Increased Vegetation",
            "Reflective Surfaces",
            "Green Roofs and Walls",
            "Water Features"
          ],
          correctAnswer: 1,
          explanation: "Reflective Surfaces like light-colored pavements reduce urban heat island effect."
        },
        {
          id: 6,
          question: "What are systems that handle variable water volumes?",
          options: [
            "Floodable Landscapes",
            "Adaptive Drainage",
            "Elevated Structures",
            "Erosion Control"
          ],
          correctAnswer: 1,
          explanation: "Adaptive Drainage systems accommodate both drought and deluge conditions."
        },
        {
          id: 7,
          question: "What are areas designed to safely accommodate occasional inundation?",
          options: [
            "Adaptive Drainage",
            "Floodable Landscapes",
            "Elevated Structures",
            "Erosion Control"
          ],
          correctAnswer: 1,
          explanation: "Floodable Landscapes like parks temporarily store water during extreme rain events."
        },
        {
          id: 8,
          question: "What are landscape approaches that minimize water use?",
          options: [
            "Soil Moisture Management",
            "Xeriscaping Principles",
            "Alternative Water Sources",
            "Plant Community Adaptation"
          ],
          correctAnswer: 1,
          explanation: "Xeriscaping creates beautiful, functional landscapes with minimal water requirements."
        },
        {
          id: 9,
          question: "What are techniques to maximize water retention in soil?",
          options: [
            "Xeriscaping Principles",
            "Soil Moisture Management",
            "Alternative Water Sources",
            "Plant Community Adaptation"
          ],
          correctAnswer: 1,
          explanation: "Soil Moisture Management through organic matter and mulch dramatically improves water retention."
        },
        {
          id: 10,
          question: "What are plants that rapidly accumulate organic matter?",
          options: [
            "Soil Carbon Building",
            "High-Biomass Plantings",
            "Woody Plant Establishment",
            "Avoided Emissions"
          ],
          correctAnswer: 1,
          explanation: "High-Biomass Plantings like fast-growing trees capture atmospheric carbon quickly."
        },
        {
          id: 11,
          question: "What are practices that increase soil organic carbon?",
          options: [
            "High-Biomass Plantings",
            "Soil Carbon Building",
            "Woody Plant Establishment",
            "Avoided Emissions"
          ],
          correctAnswer: 1,
          explanation: "Soil Carbon Building through compost and no-till practices sequesters carbon underground."
        },
        {
          id: 12,
          question: "What are zones with reduced fuel around structures?",
          options: [
            "Fire-Resistant Plant Selection",
            "Defensible Space Creation",
            "Fuel Management",
            "Strategic Hardscape"
          ],
          correctAnswer: 1,
          explanation: "Defensible Space provides a buffer zone that reduces wildfire risk to buildings."
        },
        {
          id: 13,
          question: "What are species with high moisture content and low flammability?",
          options: [
            "Defensible Space Creation",
            "Fire-Resistant Plant Selection",
            "Fuel Management",
            "Strategic Hardscape"
          ],
          correctAnswer: 1,
          explanation: "Fire-Resistant Plants like succulents are less likely to ignite and spread flames."
        },
        {
          id: 14,
          question: "What uses plants and natural materials instead of hard structures?",
          options: [
            "Dune Restoration",
            "Living Shorelines",
            "Salt-Tolerant Plantings",
            "Managed Retreat"
          ],
          correctAnswer: 1,
          explanation: "Living Shorelines use natural systems like marshes and oyster beds for coastal protection."
        },
        {
          id: 15,
          question: "What involves building and stabilizing natural coastal defenses?",
          options: [
            "Living Shorelines",
            "Dune Restoration",
            "Salt-Tolerant Plantings",
            "Managed Retreat"
          ],
          correctAnswer: 1,
          explanation: "Dune Restoration creates natural barriers that absorb storm energy and protect inland areas."
        },
        {
          id: 16,
          question: "What tracks how designs respond to actual climate conditions?",
          options: [
            "Community Feedback",
            "Performance Monitoring",
            "Flexible Design",
            "Knowledge Sharing"
          ],
          correctAnswer: 1,
          explanation: "Performance Monitoring assesses whether climate adaptation strategies are working effectively."
        },
        {
          id: 17,
          question: "What learns from local experiences and observations?",
          options: [
            "Performance Monitoring",
            "Community Feedback",
            "Flexible Design",
            "Knowledge Sharing"
          ],
          correctAnswer: 1,
          explanation: "Community Feedback provides practical, place-based knowledge about climate impacts."
        },
        {
          id: 18,
          question: "What creates landscapes that can be easily modified?",
          options: [
            "Performance Monitoring",
            "Community Feedback",
            "Flexible Design",
            "Knowledge Sharing"
          ],
          correctAnswer: 2,
          explanation: "Flexible Design allows adjustments as climate conditions and understanding evolve."
        },
        {
          id: 19,
          question: "What builds community capacity through shared learning?",
          options: [
            "Performance Monitoring",
            "Community Feedback",
            "Flexible Design",
            "Knowledge Sharing"
          ],
          correctAnswer: 3,
          explanation: "Knowledge Sharing educates communities about climate adaptation strategies and their implementation."
        },
        {
          id: 20,
          question: "What reduces fossil fuel use through natural cooling and heating?",
          options: [
            "High-Biomass Plantings",
            "Soil Carbon Building",
            "Woody Plant Establishment",
            "Avoided Emissions"
          ],
          correctAnswer: 3,
          explanation: "Avoided Emissions result from designs that reduce energy consumption through passive strategies."
        }
      ]
    }
  ],
  
  finalExam: [
    {
      id: 1,
      question: "What fundamental ecological concept involves energy moving through systems?",
      options: [
        "Nutrient Cycling",
        "Energy Flow",
        "Succession",
        "Biomimicry"
      ],
      correctAnswer: 1,
      explanation: "Energy Flow describes how energy moves from sun to plants to animals through ecological systems."
    },
    {
      id: 2,
      question: "What studies nature's models to solve design challenges?",
      options: ["Succession", "Biomimicry", "Microclimate", "Regeneration"],
      correctAnswer: 1,
      explanation: "Biomimicry looks to 3.8 billion years of evolution for efficient, resilient design solutions."
    },
    {
      id: 3,
      question: "What captures precipitation for later use?",
      options: [
        "Graywater Systems",
        "Rainwater Harvesting",
        "Efficient Irrigation",
        "Plant Selection"
      ],
      correctAnswer: 1,
      explanation: "Rainwater Harvesting collects and stores rainfall for landscape irrigation and other uses."
    },
    {
      id: 4,
      question: "What uses plants and soils to manage runoff?",
      options: [
        "Permeable Surfaces",
        "Green Infrastructure",
        "Rain Gardens",
        "Bioswales"
      ],
      correctAnswer: 1,
      explanation: "Green Infrastructure uses living systems to manage stormwater naturally."
    },
    {
      id: 5,
      question: "What clean polluted water through plant and microbial action?",
      options: [
        "Habitat Wetlands",
        "Treatment Wetlands",
        "Educational Wetlands",
        "Decorative Wetlands"
      ],
      correctAnswer: 1,
      explanation: "Treatment Wetlands use natural processes to remove contaminants from wastewater."
    },
    {
      id: 6,
      question: "What mimics natural vegetation structure with multiple layers?",
      options: [
        "Edge Effect",
        "Layered Planting",
        "Successional Planning",
        "Connectivity"
      ],
      correctAnswer: 1,
      explanation: "Layered Planting recreates the canopy, understory, and ground layers found in natural ecosystems."
    },
    {
      id: 7,
      question: "What creates diverse conditions where habitats meet?",
      options: [
        "Layered Planting",
        "Edge Effect",
        "Successional Planning",
        "Connectivity"
      ],
      correctAnswer: 1,
      explanation: "Edge Effect zones between different habitat types support exceptionally high biodiversity."
    },
    {
      id: 8,
      question: "What plants evolved to local conditions requiring fewer resources?",
      options: [
        "Co-evolved Plants",
        "Regional Adapted Plants",
        "Genetic Diverse Plants",
        "Community Associated Plants"
      ],
      correctAnswer: 1,
      explanation: "Regionally adapted plants are naturally suited to local climate, soils, and conditions."
    },
    {
      id: 9,
      question: "What are tunnels for native bee species?",
      options: [
        "Butterfly Overwintering",
        "Solitary Bee Housing",
        "Beneficial Insect Support",
        "Decomposition Areas"
      ],
      correctAnswer: 1,
      explanation: "Solitary Bee Housing provides nesting tunnels for native bees that don't live in hives."
    },
    {
      id: 10,
      question: "What are vegetated zones along waterways?",
      options: [
        "Hedgerows",
        "Riparian Buffers",
        "Greenways",
        "Stepping Stone Habitats"
      ],
      correctAnswer: 1,
      explanation: "Riparian Buffers filter runoff and provide movement corridors along streams and rivers."
    },
    {
      id: 11,
      question: "What is total energy consumed in extraction, manufacturing, and transport?",
      options: [
        "Renewability",
        "Embodied Energy",
        "Local Availability",
        "Recycled Content"
      ],
      correctAnswer: 1,
      explanation: "Embodied Energy accounts for all energy used throughout a material's life cycle."
    },
    {
      id: 12,
      question: "What is certified lumber from responsibly managed forests?",
      options: [
        "Bamboo",
        "Wood from Sustainable Forestry",
        "Natural Stone",
        "Earth Materials"
      ],
      correctAnswer: 1,
      explanation: "Sustainable forestry certification ensures wood comes from well-managed, renewable sources."
    },
    {
      id: 13,
      question: "What is lumber salvaged from old buildings and structures?",
      options: [
        "Recycled Plastic",
        "Reclaimed Wood",
        "Crushed Concrete",
        "Recycled Glass"
      ],
      correctAnswer: 1,
      explanation: "Reclaimed Wood preserves historical materials and reduces demand for new timber."
    },
    {
      id: 14,
      question: "What protects existing vegetation and topsoil during construction?",
      options: [
        "Dry Stack Construction",
        "Minimal Site Disturbance",
        "Modular Design",
        "Hand Tools and Simple Technology"
      ],
      correctAnswer: 1,
      explanation: "Minimal Site Disturbance preserves ecological functions and reduces erosion."
    },
    {
      id: 15,
      question: "What are vertical gardens that improve air quality and insulation?",
      options: [
        "Green Roofs",
        "Living Walls",
        "Compost Systems",
        "Solar Lighting"
      ],
      correctAnswer: 1,
      explanation: "Living Walls provide greenery in vertical spaces with multiple environmental benefits."
    },
    {
      id: 16,
      question: "What are community spaces beyond home and work where people connect?",
      options: [
        "Sitting Opportunities",
        "Third Places",
        "Activity Nodes",
        "Path Networks"
      ],
      correctAnswer: 1,
      explanation: "Third Places like parks, cafes, and community centers foster informal social connections."
    },
    {
      id: 17,
      question: "What protects culturally significant landscapes and features?",
      options: [
        "Cultural Expression",
        "Historic Preservation",
        "Ethnobotany",
        "Placemaking"
      ],
      correctAnswer: 1,
      explanation: "Historic Preservation maintains physical connections to community history and identity."
    },
    {
      id: 18,
      question: "What designs for people with mobility, vision, or hearing differences?",
      options: [
        "Generational Inclusion",
        "Physical Accessibility",
        "Cultural Accessibility",
        "Economic Accessibility"
      ],
      correctAnswer: 1,
      explanation: "Physical Accessibility ensures everyone can use and enjoy designed spaces regardless of ability."
    },
    {
      id: 19,
      question: "What are shared growing spaces that build skills and relationships?",
      options: [
        "Edible Landscapes",
        "Community Gardens",
        "Orchards and Food Forests",
        "Educational Gardens"
      ],
      correctAnswer: 1,
      explanation: "Community Gardens provide land, community, and education for urban food production."
    },
    {
      id: 20,
      question: "What are spaces specifically designed for therapeutic benefits?",
      options: [
        "Sensory Gardens",
        "Healing Gardens",
        "Restorative Environments",
        "Horticultural Therapy"
      ],
      correctAnswer: 1,
      explanation: "Healing Gardens in healthcare settings support physical and emotional recovery."
    },
    {
      id: 21,
      question: "What gathers local knowledge and preferences from community members?",
      options: [
        "Design Charrettes",
        "Community Workshops",
        "Participatory Budgeting",
        "Co-Design"
      ],
      correctAnswer: 1,
      explanation: "Community Workshops collect community insights, needs, and aspirations for design."
    },
    {
      id: 22,
      question: "What explains ecological processes and historical significance?",
      options: [
        "Demonstration Gardens",
        "Interpretive Signage",
        "Interactive Elements",
        "Seasonal Displays"
      ],
      correctAnswer: 1,
      explanation: "Interpretive Signage educates visitors about environmental features and stories."
    },
    {
      id: 23,
      question: "What requires planning for more extreme heat and altered growing seasons?",
      options: [
        "Precipitation Changes",
        "Temperature Increases",
        "Sea Level Rise",
        "Extreme Weather Events"
      ],
      correctAnswer: 1,
      explanation: "Temperature Increases demand heat-tolerant plants and cooling strategies in landscapes."
    },
    {
      id: 24,
      question: "What provides shade and evaporative cooling in urban areas?",
      options: [
        "Reflective Surfaces",
        "Increased Vegetation",
        "Green Roofs and Walls",
        "Water Features"
      ],
      correctAnswer: 1,
      explanation: "Increased Vegetation through trees and plants is the most effective urban cooling strategy."
    },
    {
      id: 25,
      question: "What are systems that handle variable water volumes?",
      options: [
        "Floodable Landscapes",
        "Adaptive Drainage",
        "Elevated Structures",
        "Erosion Control"
      ],
      correctAnswer: 1,
      explanation: "Adaptive Drainage systems accommodate both drought and deluge conditions."
    },
    {
      id: 26,
      question: "What are landscape approaches that minimize water use?",
      options: [
        "Soil Moisture Management",
        "Xeriscaping Principles",
        "Alternative Water Sources",
        "Plant Community Adaptation"
      ],
      correctAnswer: 1,
      explanation: "Xeriscaping creates beautiful, functional landscapes with minimal water requirements."
    },
    {
      id: 27,
      question: "What are plants that rapidly accumulate organic matter?",
      options: [
        "Soil Carbon Building",
        "High-Biomass Plantings",
        "Woody Plant Establishment",
        "Avoided Emissions"
      ],
      correctAnswer: 1,
      explanation: "High-Biomass Plantings like fast-growing trees capture atmospheric carbon quickly."
    },
    {
      id: 28,
      question: "What are zones with reduced fuel around structures?",
      options: [
        "Fire-Resistant Plant Selection",
        "Defensible Space Creation",
        "Fuel Management",
        "Strategic Hardscape"
      ],
      correctAnswer: 1,
      explanation: "Defensible Space provides a buffer zone that reduces wildfire risk to buildings."
    },
    {
      id: 29,
      question: "What uses plants and natural materials instead of hard structures?",
      options: [
        "Dune Restoration",
        "Living Shorelines",
        "Salt-Tolerant Plantings",
        "Managed Retreat"
      ],
      correctAnswer: 1,
      explanation: "Living Shorelines use natural systems like marshes and oyster beds for coastal protection."
    },
    {
      id: 30,
      question: "What tracks how designs respond to actual climate conditions?",
      options: [
        "Community Feedback",
        "Performance Monitoring",
        "Flexible Design",
        "Knowledge Sharing"
      ],
      correctAnswer: 1,
      explanation: "Performance Monitoring assesses whether climate adaptation strategies are working effectively."
    },
    {
      id: 31,
      question: "What creates closed-loop systems where waste becomes resource?",
      options: ["Energy Flow", "Nutrient Cycling", "Succession", "Biomimicry"],
      correctAnswer: 1,
      explanation: "Nutrient Cycling mimics natural decomposition to transform waste into valuable resources."
    },
    {
      id: 32,
      question: "What teaches passive cooling techniques through mound construction?",
      options: ["Leaf patterns", "Termite mounds", "Forest layers", "Spider webs"],
      correctAnswer: 1,
      explanation: "Termite mounds maintain constant temperatures through sophisticated ventilation."
    },
    {
      id: 33,
      question: "What reuses household water for irrigation?",
      options: [
        "Rainwater Harvesting",
        "Graywater Systems",
        "Efficient Irrigation",
        "Plant Selection"
      ],
      correctAnswer: 1,
      explanation: "Graywater Systems recycle water from showers, sinks, and laundry for landscape use."
    },
    {
      id: 34,
      question: "What are depressed areas that collect and filter runoff?",
      options: [
        "Green Infrastructure",
        "Permeable Surfaces",
        "Rain Gardens",
        "Bioswales"
      ],
      correctAnswer: 2,
      explanation: "Rain Gardens are shallow depressions planted with water-tolerant vegetation to manage runoff."
    },
    {
      id: 35,
      question: "What groups plants with similar water needs together?",
      options: ["Mulching", "Hydrozoning", "Soil Improvement", "Contouring"],
      correctAnswer: 1,
      explanation: "Hydrozoning organizes landscapes into irrigation zones based on plant water requirements."
    },
    {
      id: 36,
      question: "What provides habitats for species at different ecological stages?",
      options: [
        "Layered Planting",
        "Edge Effect",
        "Successional Planning",
        "Connectivity"
      ],
      correctAnswer: 2,
      explanation: "Successional Planning ensures habitat availability through different ecosystem development stages."
    },
    {
      id: 37,
      question: "What plants support local insects and wildlife through evolutionary relationships?",
      options: [
        "Regional Adapted Plants",
        "Co-evolved Plants",
        "Genetic Diverse Plants",
        "Community Associated Plants"
      ],
      correctAnswer: 1,
      explanation: "Co-evolved plants have established relationships with local insects and animals over millennia."
    },
    {
      id: 38,
      question: "What provides year-round food through diverse plant selection?",
      options: [
        "Water Access",
        "Food Sources",
        "Shelter",
        "Nesting/Breeding Sites"
      ],
      correctAnswer: 1,
      explanation: "Diverse Food Sources ensure wildlife have nutrition available across all seasons."
    },
    {
      id: 39,
      question: "What indicates materials from rapidly regenerating sources?",
      options: [
        "Embodied Energy",
        "Renewability",
        "Local Availability",
        "Recycled Content"
      ],
      correctAnswer: 1,
      explanation: "Renewability refers to materials that regrow quickly, like bamboo or cork."
    },
    {
      id: 40,
      question: "What builds without mortar to allow disassembly and reuse?",
      options: [
        "Minimal Site Disturbance",
        "Dry Stack Construction",
        "Modular Design",
        "Hand Tools and Simple Technology"
      ],
      correctAnswer: 1,
      explanation: "Dry Stack Construction creates reusable structures without permanent bonding."
    }
  ]
};
