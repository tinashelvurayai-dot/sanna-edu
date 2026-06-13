// Sustainable Energy Systems (Diploma) - Complete Course Data
// Advanced course building on Renewable Energy Certificate

export const sustainableEnergySystemsDiplomaCourse = {
  // ==================== COURSE METADATA ====================
  id: "sustainable-energy-systems-diploma",
  title: "Sustainable Energy Systems (Diploma)",
  description: "Advanced study of integrated energy systems, sustainable design principles, and holistic approaches to energy transition. Builds on Renewable Energy Certificate fundamentals.",
  duration: "8 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  prerequisite: "renewable-energy-certificate",
  icon: "♻️",
  badge: "Diploma",
  totalModules: 6,
  
  // ==================== MODULE 1: SYSTEMS THINKING IN ENERGY ====================
  modules: [
    {
      id: 1,
      title: "Holistic Energy Systems Approach",
      completed: false,
      content: `
# Module 1: Systems Thinking for Sustainable Energy

Welcome to advanced sustainable energy studies. This module introduces systems thinking – the essential framework for designing truly sustainable energy solutions.

## **What is Systems Thinking?**

Systems thinking looks at the whole picture, not just individual parts. In energy terms, this means considering:

**Interconnections** - How energy production affects transportation, buildings, industry, and nature

**Feedback Loops** - How changes in one area create effects throughout the system

**Emergent Properties** - How whole systems behave differently than their parts

**System Boundaries** - What to include in your analysis and why

Think of it like an ecosystem: You can't understand a forest by studying just the trees. You need to understand soil, water, animals, climate, and their interactions.

## **The Energy-Water-Food Nexus**

**Interconnected Systems**
- Energy production requires water (cooling, processing)
- Water systems require energy (pumping, treatment)
- Food production requires both energy and water
- Changes in one affect all three

**Sustainable Management Principles**
1. **Integrated Planning** - Coordinate across sectors
2. **Efficiency First** - Reduce demand before expanding supply
3. **Circular Design** - Outputs become inputs elsewhere
4. **Resilience Building** - Systems withstand shocks and stresses

**Practical Applications**
- Solar-powered water pumping for irrigation
- Wastewater treatment with energy recovery
- Agricultural waste for bioenergy production
- Coordinated urban planning for all three sectors

## **Life Cycle Assessment (LCA)**

**What LCA Measures**
- Environmental impacts from cradle to grave
- All stages: Raw material extraction → Manufacturing → Transportation → Use → Disposal
- Multiple impact categories: Carbon, water, air, land use, toxicity

**LCA Method Steps**
1. **Goal Definition** - What are you trying to understand?
2. **Inventory Analysis** - Collect data on all inputs/outputs
3. **Impact Assessment** - Calculate environmental effects
4. **Interpretation** - Draw conclusions and identify improvements

**Comparing Energy Systems**
- Nuclear: Low operation emissions, but mining and waste issues
- Solar: Manufacturing energy intensity vs. long clean operation
- Wind: Material extraction vs. decades of clean power
- Natural Gas: Lower carbon than coal, but methane leaks matter

**Key Insight**: There are no perfect solutions, only better choices within constraints.

## **Energy Return on Investment (EROI)**

**Basic Concept**
- EROI = Energy delivered ÷ Energy required to deliver it
- Historical societies needed EROI > 5:1 to function
- Modern societies need EROI > 10-15:1 for complexity
- Declining EROI means more effort for same energy

**Comparing EROI Values**
- Conventional oil (1930s): 100:1
- Conventional oil (today): 10-20:1
- Shale oil: 5-10:1
- Solar PV: 10-20:1 (rising with technology)
- Wind: 18-20:1 (improving)
- Corn ethanol: 1-2:1 (questionable value)

**Implications for Sustainability**
- High EROI fuels built modern civilization
- Energy transition must maintain adequate EROI
- Efficiency improvements effectively increase EROI
- System design affects net energy availability

## **The Multi-Scale Perspective**

**Nested Systems Framework**
- **Niches** - Innovation spaces (new technologies, community projects)
- **Regimes** - Dominant systems (electric grids, transportation networks)
- **Landscape** - Broader context (climate change, geopolitics, values)

**Transition Dynamics**
- Innovations start in protected niches
- Successful innovations challenge existing regimes
- Landscape pressures create windows of opportunity
- Transitions involve coordination across scales

**Practical Application**
- Start small projects to build experience
- Connect innovations to broader trends
- Build coalitions across different scales
- Be prepared for resistance from established systems

## **Resilience in Energy Systems**

**What is Resilience?**
- Ability to withstand and recover from disturbances
- Capacity to adapt to changing conditions
- Maintaining essential functions during stress

**Design Principles for Resilient Systems**
1. **Diversity** - Multiple energy sources and pathways
2. **Redundancy** - Backup capacity and alternative routes
3. **Modularity** - Components can fail without system collapse
4. **Adaptability** - Can adjust to new conditions
5. **Feedback Sensitivity** - Detects and responds to changes

**Examples of Resilient Design**
- Microgrids that can island during outages
- Distributed generation reducing single points of failure
- Demand response that adjusts to supply conditions
- Storage systems that buffer variability

## **Systems Analysis Tools**

**Stock and Flow Modeling**
- Stocks: Accumulations (energy stored, installed capacity)
- Flows: Changes over time (generation, consumption)
- Helps understand system dynamics and delays

**Causal Loop Diagrams**
- Map relationships between system elements
- Identify reinforcing and balancing feedback loops
- Visualize system structure and behavior drivers

**Scenario Planning**
- Explore multiple plausible futures
- Test system performance under different conditions
- Identify robust strategies that work across scenarios

**Multi-Criteria Decision Analysis**
- Consider economic, environmental, social factors
- Weight criteria based on values and priorities
- Compare options transparently

## **Applying Systems Thinking**

**For Energy Projects**
- Map all stakeholders and their interests
- Identify unintended consequences early
- Design monitoring and adjustment mechanisms
- Plan for phased implementation and learning

**For Policy Development**
- Consider cross-sector impacts
- Design flexible regulations that can adapt
- Include feedback mechanisms
- Build in regular review and adjustment

**For Community Planning**
- Engage diverse perspectives
- Consider long-term implications
- Design for adaptability as needs change
- Build social as well as technical systems

Systems thinking transforms how we approach energy challenges – from solving isolated problems to designing holistic solutions.

**Next Module**: We'll explore Sustainable Energy Economics and the true costs of different energy choices.
`,
      quiz: [
        {
          id: 1,
          question: "What does systems thinking emphasize in energy analysis?",
          options: [
            "Interconnections and whole system behavior",
            "Only technical efficiency of components",
            "Short-term economic costs alone",
            "Individual technology performance in isolation"
          ],
          correctAnswer: 0,
          explanation: "Systems thinking focuses on how components interact and how whole systems behave differently than their parts."
        },
        {
          id: 2,
          question: "What three systems are interconnected in the Energy-Water-Food Nexus?",
          options: [
            "Energy, Water, Food",
            "Energy, Transportation, Buildings",
            "Water, Air, Soil",
            "Food, Health, Education"
          ],
          correctAnswer: 0,
          explanation: "The nexus recognizes that energy, water, and food systems are deeply interconnected and must be managed together."
        },
        {
          id: 3,
          question: "What does Life Cycle Assessment (LCA) evaluate?",
          options: [
            "Environmental impacts from cradle to grave",
            "Only operational energy use",
            "Financial costs over 5 years",
            "Technical performance metrics"
          ],
          correctAnswer: 0,
          explanation: "LCA assesses all environmental impacts from raw material extraction through disposal or recycling."
        },
        {
          id: 4,
          question: "What EROI ratio did historical societies typically need to function?",
          options: [
            "Greater than 5:1",
            "Greater than 100:1",
            "Exactly 1:1",
            "Less than 1:1"
          ],
          correctAnswer: 0,
          explanation: "Societies needed energy returns significantly greater than 1:1 to have surplus energy for activities beyond basic survival."
        },
        {
          id: 5,
          question: "What are the three levels in the Multi-Scale Perspective framework?",
          options: [
            "Niches, Regimes, Landscape",
            "Local, National, Global",
            "Technical, Economic, Social",
            "Supply, Distribution, Demand"
          ],
          correctAnswer: 0,
          explanation: "The framework analyzes transitions across niche innovations, dominant regimes, and broader landscape factors."
        },
        {
          id: 6,
          question: "What is resilience in energy systems?",
          options: [
            "Ability to withstand and recover from disturbances",
            "Always having the lowest cost energy",
            "Using only renewable sources",
            "Complete independence from all external systems"
          ],
          correctAnswer: 0,
          explanation: "Resilience involves maintaining essential functions during stress and adapting to changing conditions."
        },
        {
          id: 7,
          question: "What design principle involves multiple energy sources and pathways?",
          options: [
            "Diversity",
            "Efficiency",
            "Centralization",
            "Standardization"
          ],
          correctAnswer: 0,
          explanation: "Diversity reduces vulnerability by providing multiple options if one source or pathway fails."
        },
        {
          id: 8,
          question: "What tool maps relationships between system elements?",
          options: [
            "Causal Loop Diagrams",
            "Financial Spreadsheets",
            "Technical Specifications",
            "Project Timelines"
          ],
          correctAnswer: 0,
          explanation: "Causal loop diagrams visualize how changes in one element affect others throughout the system."
        },
        {
          id: 9,
          question: "What is a key insight from comparing energy systems via LCA?",
          options: [
            "There are no perfect solutions, only better choices",
            "Solar is always the best option",
            "Nuclear has no environmental impacts",
            "All renewables have identical life cycle impacts"
          ],
          correctAnswer: 0,
          explanation: "Every energy choice involves trade-offs; sustainability means selecting better options within specific contexts."
        },
        {
          id: 10,
          question: "What does EROI stand for?",
          options: [
            "Energy Return on Investment",
            "Energy Ratio of Input",
            "Efficiency Rating of Infrastructure",
            "Environmental Return on Investment"
          ],
          correctAnswer: 0,
          explanation: "EROI measures how much energy is obtained compared to the energy required to obtain it."
        },
        {
          id: 11,
          question: "What is modularity in resilient system design?",
          options: [
            "Components can fail without system collapse",
            "All components are identical",
            "Systems are built from single suppliers",
            "Only one technology is used throughout"
          ],
          correctAnswer: 0,
          explanation: "Modularity contains failures within subsystems, preventing cascading failures throughout the entire system."
        },
        {
          id: 12,
          question: "What does the 'regime' level represent in transitions?",
          options: [
            "Dominant existing systems and practices",
            "Experimental new technologies",
            "Broad social and environmental trends",
            "Individual consumer choices"
          ],
          correctAnswer: 0,
          explanation: "Regimes are the established systems with locked-in technologies, regulations, and practices."
        },
        {
          id: 13,
          question: "What is circular design in the energy-water-food nexus?",
          options: [
            "Outputs become inputs elsewhere in the system",
            "All processes occur in circular buildings",
            "Energy flows in circular patterns only",
            "Water cycles ignore human intervention"
          ],
          correctAnswer: 0,
          explanation: "Circular design minimizes waste by ensuring outputs from one process become inputs for another."
        },
        {
          id: 14,
          question: "What modern EROI do complex societies typically need?",
          options: [
            "10-15:1 or higher",
            "Exactly 1:1",
            "2-3:1",
            "100:1 or higher"
          ],
          correctAnswer: 0,
          explanation: "Modern societies with complex infrastructure and services require higher EROI to function."
        },
        {
          id: 15,
          question: "What does scenario planning help with?",
          options: [
            "Exploring multiple plausible futures",
            "Predicting exact future outcomes",
            "Eliminating all uncertainty",
            "Focusing only on best-case scenarios"
          ],
          correctAnswer: 0,
          explanation: "Scenario planning explores different possible futures to test strategies under various conditions."
        },
        {
          id: 16,
          question: "What is a reinforcing feedback loop?",
          options: [
            "Changes amplify themselves in a cycle",
            "System returns to original state",
            "No relationship between changes",
            "Changes cancel each other out"
          ],
          correctAnswer: 0,
          explanation: "Reinforcing loops create exponential growth or decline as changes feed back to amplify themselves."
        },
        {
          id: 17,
          question: "What does stock and flow modeling track?",
          options: [
            "Accumulations and changes over time",
            "Only financial investments",
            "Static system snapshots",
            "Individual component failures"
          ],
          correctAnswer: 0,
          explanation: "Stock and flow models track how quantities accumulate and change through inflows and outflows."
        },
        {
          id: 18,
          question: "What is emergent property in systems?",
          options: [
            "Whole system behavior different from parts",
            "Properties that emerge randomly",
            "Components that appear suddenly",
            "Systems with no predictable behavior"
          ],
          correctAnswer: 0,
          explanation: "Emergent properties arise from interactions between components, not from individual components alone."
        },
        {
          id: 19,
          question: "What is multi-criteria decision analysis used for?",
          options: [
            "Considering economic, environmental, social factors",
            "Maximizing only financial returns",
            "Simplifying decisions to single metrics",
            "Ignoring stakeholder preferences"
          ],
          correctAnswer: 0,
          explanation: "MCDA systematically evaluates options against multiple, often conflicting criteria to support balanced decisions."
        },
        {
          id: 20,
          question: "What principle suggests reducing demand before expanding supply?",
          options: [
            "Efficiency First",
            "Supply Security",
            "Growth Maximization",
            "Technology Neutrality"
          ],
          correctAnswer: 0,
          explanation: "Efficiency First recognizes that reducing energy demand is often cheaper and cleaner than increasing supply."
        }
      ]
    },

    // ==================== MODULE 2: SUSTAINABLE ENERGY ECONOMICS ====================
    {
      id: 2,
      title: "Economics of Sustainability",
      completed: false,
      content: `
# Module 2: True Cost Energy Economics

This module explores advanced economic concepts for evaluating sustainable energy systems, moving beyond simple price comparisons to consider full costs and benefits.

## **Beyond Simple Cost Analysis**

**Traditional Limitations**
- Focuses only on private financial costs
- Ignores externalities (pollution, health impacts)
- Short time horizons (2-5 year payback expectations)
- Narrow system boundaries

**Comprehensive Assessment Includes:**
1. **Full Cost Accounting** - All direct and indirect costs
2. **Multiple Time Horizons** - Short, medium, and long-term
3. **Stakeholder Perspectives** - Different costs for different groups
4. **Risk Considerations** - Including uncertainty and volatility

## **Externalities: The Hidden Costs**

**What are Externalities?**
- Costs or benefits affecting third parties
- Not reflected in market prices
- Create market failures and inefficiencies

**Major Energy Externalities**
- **Air Pollution** - Health costs from particulates, NOx, SOx
- **Climate Change** - Global warming impacts
- **Water Pollution** - Contamination from extraction and waste
- **Land Use** - Habitat destruction and ecosystem services loss
- **Noise and Visual Impacts** - Quality of life effects

**Valuing Externalities**
- **Damage Cost Approach** - Estimate actual harm caused
- **Control Cost Approach** - Cost to prevent or reduce damage
- **Revealed Preference** - Infer values from observed behavior
- **Stated Preference** - Survey what people say they would pay

**Examples of External Cost Estimates**
- Coal electricity: 5-15 cents/kWh in external costs
- Natural gas: 2-5 cents/kWh external costs
- Solar PV: 0.5-1 cent/kWh external costs
- Wind: 0.1-0.5 cents/kWh external costs

## **Levelized Cost of Energy (LCOE)**

**What LCOE Measures**
- Average cost per unit of energy over system lifetime
- Accounts for capital, fuel, operation, maintenance, financing
- Allows comparison of different technologies

**Calculation Components**
- **Capital Costs** - Initial investment spread over lifetime
- **Fuel Costs** - For thermal generation (zero for renewables)
- **O&M Costs** - Operation and maintenance expenses
- **Financing Costs** - Interest on debt and return on equity
- **Capacity Factor** - Actual output vs. maximum possible

**Recent LCOE Trends**
- Solar and wind now cheaper than new fossil plants
- Costs continue to decline with technology improvement
- Storage costs falling but still add to system costs
- Location-specific factors greatly affect actual costs

**Limitations of LCOE**
- Doesn't account for grid integration costs
- Ignores externalities and subsidies
- Assumes constant value of electricity
- Doesn't capture system value differences

## **System Value and Integration Costs**

**Value Factors Beyond LCOE**
1. **Capacity Value** - Contribution to meeting peak demand
2. **Energy Value** - When and where electricity is produced
3. **Flexibility Value** - Ability to ramp up/down quickly
4. **Locational Value** - Proximity to demand or constraints
5. **Reliability Value** - Contribution to system security

**Integration Cost Components**
- **Balancing Costs** - Managing variability and uncertainty
- **Grid Reinforcement** - Strengthening transmission and distribution
- **Backup/Storage** - Ensuring supply when renewables aren't producing
- **Reduced Utilization** - Other generators run less efficiently

**System-Friendly Renewable Design**
- Geographic diversity reduces variability
- Complementary generation profiles (solar + wind)
- Hybrid systems with built-in storage
- Smart controls providing grid services

## **Financing Sustainable Energy**

**Capital Structure Challenges**
- High upfront capital costs for renewables
- Low operating costs but long payback periods
- Different risk profiles than conventional generation
- Need for patient, low-cost capital

**Innovative Financing Models**
- **YieldCos** - Publicly traded companies owning operating assets
- **Green Bonds** - Debt specifically for environmental projects
- **Project Finance** - Non-recourse lending based on project cash flows
- **Community Funding** - Local investment through cooperatives or crowd-funding
- **ESG Investing** - Environmental, Social, Governance criteria

**Risk Mitigation Instruments**
- **Power Purchase Agreements (PPAs)** - Long-term fixed price contracts
- **Government Guarantees** - Reducing policy and off-taker risk
- **Insurance Products** - Covering technology and performance risk
- **Blended Finance** - Public funds attracting private investment

## **Subsidies and Market Distortions**

**Types of Energy Subsidies**
- **Direct Transfers** - Cash payments or tax breaks
- **Price Controls** - Artificially low prices for consumers
- **Market Price Support** - Guaranteed minimum prices
- **Public Finance** - Below-market rate loans or guarantees

**Global Subsidy Picture**
- Fossil fuels: $400-600 billion annually worldwide
- Renewables: $100-150 billion annually (declining as costs fall)
- Nuclear: Difficult to quantify due to complex support mechanisms

**Reforming Subsidy Systems**
- Phase out inefficient fossil fuel subsidies
- Redirect support to clean energy research and deployment
- Design subsidies to phase out as technologies mature
- Ensure subsidies don't create market distortions

## **Circular Economy in Energy**

**Principles of Circular Energy Systems**
1. **Design Out Waste** - Maximize efficiency and reuse
2. **Keep Materials in Use** - Recycle and repurpose components
3. **Regenerate Natural Systems** - Restore rather than deplete

**Applications in Energy Sector**
- **Solar Panel Recycling** - Recovering silicon, glass, metals
- **Wind Turbine Blade Repurposing** - New materials from composites
- **Battery Second Life** - Used EV batteries for stationary storage
- **Industrial Symbiosis** - Waste heat from one process powers another

**Economic Benefits**
- Reduced material costs through recycling
- New revenue streams from waste products
- Job creation in recycling and refurbishment
- Reduced environmental compliance costs

## **Distributed Energy Economics**

**Value Streams for Distributed Resources**
1. **Retail Bill Savings** - Avoided utility purchases
2. **Wholesale Market Revenues** - Selling excess generation
3. **Grid Services** - Voltage support, frequency regulation
4. **Resilience Value** - Avoided outage costs
5. **Environmental Value** - Carbon credits, green premiums

**Net Metering vs. Value-Based Compensation**
- **Net Metering** - Simple 1:1 retail rate compensation
- **Value of Solar** - Pays for specific benefits provided
- **Time-of-Use Rates** - Reflects changing grid conditions
- **Demand Charges** - Based on peak usage rather than total consumption

**Aggregation and Virtual Power Plants**
- Combine many small resources into grid-scale assets
- Provide services more valuable than individual contributions
- Enable participation for resources too small to participate alone
- Create new revenue opportunities for asset owners

## **Just Transition Economics**

**Addressing Distributional Impacts**
- Workers in declining industries need support
- Communities dependent on fossil fuels need economic diversification
- Energy affordability for low-income households
- Access to benefits for marginalized communities

**Economic Diversification Strategies**
- Retraining programs for energy workers
- Investment in new industries in affected regions
- Support for small business development
- Infrastructure repurposing (mine sites to renewable hubs)

**Financing the Transition**
- Just transition funds with dedicated revenue streams
- Public-private partnerships for regional development
- Community ownership of new energy assets
- Progressive rate structures to ensure affordability

Sustainable energy economics isn't just about lowest price – it's about creating systems that are economically viable, socially equitable, and environmentally responsible over the long term.

**Next Module**: We'll explore Sustainable Energy Policy and the regulatory frameworks needed to support the transition.
`,
      quiz: [
        {
          id: 1,
          question: "What are externalities in energy economics?",
          options: [
            "Costs or benefits affecting third parties, not reflected in prices",
            "Extra charges on electricity bills",
            "Government taxes on energy companies",
            "Hidden profits for energy producers"
          ],
          correctAnswer: 0,
          explanation: "Externalities are costs or benefits experienced by people not directly involved in production or consumption decisions."
        },
        {
          id: 2,
          question: "What does LCOE stand for and measure?",
          options: [
            "Levelized Cost of Energy - average cost per unit over lifetime",
            "Lowest Cost of Electricity - minimum possible price",
            "Local Cost of Energy - location-specific pricing",
            "Long-term Cost Estimate - future price projections"
          ],
          correctAnswer: 0,
          explanation: "LCOE calculates the lifetime average cost per unit of energy generated, allowing technology comparisons."
        },
        {
          id: 3,
          question: "What is a major limitation of traditional LCOE analysis?",
          options: [
            "Doesn't account for grid integration costs",
            "Includes too many external costs",
            "Assumes energy has zero value",
            "Only applies to fossil fuels"
          ],
          correctAnswer: 0,
          explanation: "Traditional LCOE ignores the costs of integrating variable resources into the grid and providing reliability services."
        },
        {
          id: 4,
          question: "What value factor refers to contribution to meeting peak demand?",
          options: [
            "Capacity Value",
            "Energy Value",
            "Flexibility Value",
            "Locational Value"
          ],
          correctAnswer: 0,
          explanation: "Capacity value measures how much a resource contributes to meeting system peak demand when it's most needed."
        },
        {
          id: 5,
          question: "What financing model involves publicly traded companies owning operating assets?",
          options: [
            "YieldCos",
            "Green Bonds",
            "Project Finance",
            "Community Funding"
          ],
          correctAnswer: 0,
          explanation: "YieldCos are corporate structures that own operating renewable assets and distribute most cash flows to shareholders."
        },
        {
          id: 6,
          question: "What is the estimated range of external costs for coal electricity?",
          options: [
            "5-15 cents/kWh",
            "0.1-0.5 cents/kWh",
            "1-2 cents/kWh",
            "20-30 cents/kWh"
          ],
          correctAnswer: 0,
          explanation: "Coal generation imposes significant external costs through air pollution, health impacts, and climate change."
        },
        {
          id: 7,
          question: "What does 'circular economy' aim to do in energy systems?",
          options: [
            "Keep materials in use and design out waste",
            "Make all energy flows circular",
            "Only use renewable resources",
            "Eliminate all economic costs"
          ],
          correctAnswer: 0,
          explanation: "Circular economy principles focus on minimizing waste and maximizing resource efficiency through reuse and recycling."
        },
        {
          id: 8,
          question: "What is net metering?",
          options: [
            "1:1 retail rate compensation for excess generation",
            "Payment based on time-of-use rates",
            "Compensation only for environmental benefits",
            "Free electricity for solar owners"
          ],
          correctAnswer: 0,
          explanation: "Net metering credits solar owners at the retail electricity rate for power sent to the grid."
        },
        {
          id: 9,
          question: "What is a 'just transition' concerned with?",
          options: [
            "Addressing impacts on workers and communities",
            "Making all energy transitions immediate",
            "Only technological changes",
            "Eliminating all fossil fuels overnight"
          ],
          correctAnswer: 0,
          explanation: "Just transition focuses on ensuring workers and communities aren't left behind in the shift to sustainable energy."
        },
        {
          id: 10,
          question: "What are global annual fossil fuel subsidies estimated at?",
          options: [
            "$400-600 billion",
            "$50-100 billion",
            "$1-2 trillion",
            "$10-20 billion"
          ],
          correctAnswer: 0,
          explanation: "Fossil fuels receive substantial subsidies worldwide, though estimates vary based on definition and measurement."
        },
        {
          id: 11,
          question: "What financing instrument is debt specifically for environmental projects?",
          options: [
            "Green Bonds",
            "YieldCos",
            "Project Finance",
            "ESG Funds"
          ],
          correctAnswer: 0,
          explanation: "Green bonds raise capital specifically for climate and environmental projects, with proceeds dedicated to eligible activities."
        },
        {
          id: 12,
          question: "What is industrial symbiosis?",
          options: [
            "Waste from one process becomes input for another",
            "All industries using the same energy source",
            "Companies merging to become larger",
            "Identical factories in different locations"
          ],
          correctAnswer: 0,
          explanation: "Industrial symbiosis creates networks where waste or byproducts from one industry become inputs for another."
        },
        {
          id: 13,
          question: "What does capacity factor measure in LCOE?",
          options: [
            "Actual output vs. maximum possible output",
            "Efficiency of energy conversion",
            "Size of the generating unit",
            "Cost per unit of capacity"
          ],
          correctAnswer: 0,
          explanation: "Capacity factor = (actual output) ÷ (maximum possible output if running at full capacity 24/7)."
        },
        {
          id: 14,
          question: "What is a virtual power plant?",
          options: [
            "Aggregated distributed resources acting as single plant",
            "Power plant that exists only in computer simulations",
            "Theoretical maximum generation capacity",
            "Government-owned generation facilities"
          ],
          correctAnswer: 0,
          explanation: "VPPs combine multiple distributed energy resources that can be controlled collectively to provide grid services."
        },
        {
          id: 15,
          question: "What valuation approach estimates cost to prevent damage?",
          options: [
            "Control Cost Approach",
            "Damage Cost Approach",
            "Revealed Preference",
            "Stated Preference"
          ],
          correctAnswer: 0,
          explanation: "Control cost approach values externalities based on what it would cost to prevent or reduce the damage."
        },
        {
          id: 16,
          question: "What does ESG stand for in investing?",
          options: [
            "Environmental, Social, Governance",
            "Energy, Sustainability, Growth",
            "Economic, Strategic, Global",
            "Efficiency, Security, Generation"
          ],
          correctAnswer: 0,
          explanation: "ESG criteria evaluate investments based on environmental impact, social responsibility, and corporate governance."
        },
        {
          id: 17,
          question: "What is time-of-use pricing?",
          options: [
            "Different rates based on time of day and grid conditions",
            "Same rate regardless of consumption patterns",
            "Only charging for peak usage",
            "Free electricity during certain hours"
          ],
          correctAnswer: 0,
          explanation: "Time-of-use rates reflect the changing cost of providing electricity throughout the day and seasons."
        },
        {
          id: 18,
          question: "What is blended finance?",
          options: [
            "Public funds attracting private investment",
            "Mixing different energy sources",
            "Combining debt and equity equally",
            "International and domestic funding"
          ],
          correctAnswer: 0,
          explanation: "Blended finance uses public or philanthropic funds to reduce risk and attract private investment to sustainable projects."
        },
        {
          id: 19,
          question: "What is demand charge based on?",
          options: [
            "Peak usage rather than total consumption",
            "Total monthly energy consumption",
            "Time of day of usage",
            "Environmental impact of usage"
          ],
          correctAnswer: 0,
          explanation: "Demand charges reflect the cost of maintaining capacity to meet customers' highest usage levels."
        },
        {
          id: 20,
          question: "What principle focuses on reducing demand before expanding supply?",
          options: [
            "Efficiency First",
            "Supply Security",
            "Growth Maximization",
            "Technology Neutrality"
          ],
          correctAnswer: 0,
          explanation: "Efficiency First recognizes that reducing energy demand is often more cost-effective than increasing supply."
        }
      ]
    },

    // ==================== MODULE 3: SUSTAINABLE ENERGY POLICY ====================
    {
      id: 3,
      title: "Policy Frameworks for Transition",
      completed: false,
      content: `
# Module 3: Designing Effective Energy Policy

This module examines the policy instruments, regulatory frameworks, and governance approaches needed to accelerate the sustainable energy transition.

## **Policy Mixes, Not Silver Bullets**

**Why Multiple Policies are Needed**
- Different barriers require different solutions
- Policies interact and reinforce each other
- Multiple objectives need multiple instruments
- Redundancy increases resilience

**Typical Policy Mix Components**
1. **Economic Instruments** - Prices, taxes, subsidies
2. **Regulatory Standards** - Requirements and prohibitions
3. **Information Measures** - Labels, ratings, disclosure
4. **Support Programs** - Research, development, deployment
5. **Infrastructure Investment** - Grids, charging networks

## **Carbon Pricing Mechanisms**

**Two Main Approaches**

**Carbon Taxes**
- Direct price on carbon emissions
- Simple, transparent, predictable
- Revenue can be recycled or used for climate purposes
- Requires regular adjustment for effectiveness

**Emissions Trading Systems (ETS)**
- Cap total emissions, trade allowances
- Ensures environmental outcome (the cap)
- Price discovered through trading
- Can link with other systems

**Design Considerations**
- **Coverage** - Which sectors and gases included
- **Price Level** - High enough to drive change
- **Revenue Use** - How funds are allocated
- **Border Adjustments** - Addressing competitiveness concerns
- **Social Equity** - Impacts on vulnerable groups

**Global Carbon Pricing Status**
- Over 60 carbon pricing initiatives worldwide
- Covering about 22% of global emissions
- Prices range from $1 to over $100 per ton CO2
- Increasing adoption and price levels

## **Renewable Energy Standards**

**Renewable Portfolio Standards (RPS)**
- Mandate minimum renewable percentage
- Can include technology-specific requirements
- Create predictable demand for renewables
- Often include compliance flexibility mechanisms

**Feed-in Tariffs (FiTs)**
- Guaranteed prices for renewable generation
- Long-term contracts (typically 15-20 years)
- Differentiated by technology and scale
- Very effective at driving rapid deployment

**Auctions and Competitive Procurement**
- Competitive bidding for renewable capacity
- Typically lowest price wins
- Can include non-price criteria
- Becoming increasingly common globally

## **Energy Efficiency Policies**

**Building Codes and Standards**
- Minimum efficiency requirements for new buildings
- Regular updates as technology improves
- Can include existing building retrofits
- Major driver of energy savings

**Appliance and Equipment Standards**
- Minimum efficiency levels for products
- Regular review and strengthening
- Often cost-effective for consumers
- Reduce energy demand without behavior change

**Energy Performance Certificates**
- Rate building energy efficiency
- Required at sale or rental
- Provide information to market participants
- Can drive renovation activity

## **Transportation Electrification Policies**

**Vehicle Standards**
- Fuel economy or emissions standards
- Zero-emission vehicle mandates
- Phasing out internal combustion engines
- Coordinating with power sector decarbonization

**Charging Infrastructure**
- Public charging network deployment
- Building codes requiring EV readiness
- Utility programs supporting charging
- Interoperability and payment standards

**Incentive Programs**
- Purchase rebates or tax credits
- Reduced registration fees or tolls
- Access to bus lanes or parking benefits
- Scrappage programs for old vehicles

## **Grid Modernization and Regulation**

**Evolving Utility Business Models**
- From volumetric sales to performance-based regulation
- Aligning utility profits with societal goals
- Encouraging non-wires alternatives
- Integrating distributed resources

**Grid Access and Connection Rules**
- Fair rules for connecting renewables
- Streamlined interconnection processes
- Non-discriminatory access to markets
- Technical standards for grid integration

**Planning for High Renewable Penetration**
- Integrated resource planning considering all options
- Transmission planning for renewable resources
- Distribution system planning for distributed resources
- Coordinated across jurisdictions and timeframes

## **Innovation and Technology Policy**

**Research and Development Funding**
- Basic research into new technologies
- Applied research addressing specific challenges
- Demonstration projects scaling up innovations
- Public-private partnerships sharing risk

**Technology-Specific Support**
- Early deployment support for promising technologies
- Manufacturing scale-up assistance
- Supply chain development
- Workforce training and education

**Intellectual Property Considerations**
- Balancing innovation incentives with technology diffusion
- Patent pools for standard essential technologies
- Technology transfer to developing countries
- Open-source approaches for some innovations

## **International Cooperation**

**Climate Agreements**
- Paris Agreement framework and nationally determined contributions
- Bilateral and multilateral technology partnerships
- Climate finance for developing countries
- Capacity building and technology transfer

**Trade and Energy**
- Removing trade barriers for clean technologies
- Environmental goods agreements
- Addressing carbon leakage concerns
- Sustainable energy in trade agreements

**Technical Standards Harmonization**
- International equipment standards
- Grid interconnection standards
- Measurement and verification protocols
- Certification and labeling alignment

## **Policy Implementation Challenges**

**Political Economy Considerations**
- Incumbent interests resisting change
- Distributional impacts creating winners and losers
- Short political cycles vs. long energy transitions
- Public acceptance and NIMBY challenges

**Policy Stability and Predictability**
- Importance of long-term signals for investment
- Risks of policy reversals and uncertainty
- Designing policies that endure across administrations
- Independent institutions for implementation

**Monitoring, Evaluation, and Adjustment**
- Tracking policy effectiveness and impacts
- Regular review and updating mechanisms
- Learning from other jurisdictions
- Adaptive management approaches

## **Multi-Level Governance**

**International Level**
- Climate agreements and commitments
- Technology cooperation and financing
- Knowledge sharing and capacity building

**National Level**
- Comprehensive energy and climate strategies
- Major infrastructure and investment decisions
- Regulatory frameworks and standards

**Sub-National Level**
- Regional coordination for grids and markets
- State/provincial innovation and experimentation
- Urban energy planning and implementation

**Local Level**
- Building permits and zoning
- Community energy planning
- Public engagement and acceptance

Effective policy creates the enabling environment for sustainable energy transitions, aligning incentives with societal goals and addressing market failures.

**Next Module**: We'll explore Sustainable Urban Energy Systems and the unique challenges and opportunities of cities.
`,
      quiz: [
        {
          id: 1,
          question: "Why are policy mixes needed rather than single instruments?",
          options: [
            "Different barriers require different solutions",
            "Single policies are too expensive",
            "Governments prefer complexity",
            "International agreements require multiple policies"
          ],
          correctAnswer: 0,
          explanation: "Energy transitions face multiple barriers (technical, economic, social) requiring coordinated policy responses."
        },
        {
          id: 2,
          question: "What are the two main carbon pricing approaches?",
          options: [
            "Carbon taxes and emissions trading",
            "Renewable mandates and efficiency standards",
            "Research funding and deployment subsidies",
            "Building codes and appliance standards"
          ],
          correctAnswer: 0,
          explanation: "Carbon pricing can be implemented through direct taxes on emissions or cap-and-trade systems."
        },
        {
          id: 3,
          question: "What does RPS stand for in renewable energy policy?",
          options: [
            "Renewable Portfolio Standard",
            "Renewable Power System",
            "Regional Planning Strategy",
            "Resource Performance Standard"
          ],
          correctAnswer: 0,
          explanation: "RPS mandates that electricity suppliers source a minimum percentage from renewable sources."
        },
        {
          id: 4,
          question: "What policy guarantees fixed prices for renewable generation?",
          options: [
            "Feed-in Tariffs",
            "Carbon Taxes",
            "Renewable Auctions",
            "Efficiency Standards"
          ],
          correctAnswer: 0,
          explanation: "Feed-in tariffs provide long-term, guaranteed prices to renewable energy producers."
        },
        {
          id: 5,
          question: "What percentage of global emissions are covered by carbon pricing?",
          options: [
            "About 22%",
            "About 5%",
            "About 50%",
            "About 80%"
          ],
          correctAnswer: 0,
          explanation: "As of recent assessments, carbon pricing initiatives cover approximately 22% of global greenhouse gas emissions."
        },
        {
          id: 6,
          question: "What is performance-based regulation for utilities?",
          options: [
            "Linking profits to performance metrics rather than sales",
            "Regulating based on political performance",
            "Only allowing profitable utilities to operate",
            "Setting prices based on competitor performance"
          ],
          correctAnswer: 0,
          explanation: "Performance-based regulation decouples utility profits from energy sales, aligning incentives with efficiency and service goals."
        },
        {
          id: 7,
          question: "What are zero-emission vehicle mandates?",
          options: [
            "Requirements for increasing percentage of electric vehicles",
            "Bans on all vehicle emissions",
            "Mandatory electric vehicle purchases",
            "Requirements for zero-emission manufacturing"
          ],
          correctAnswer: 0,
          explanation: "ZEV mandates require automakers to sell an increasing percentage of electric or other zero-emission vehicles."
        },
        {
          id: 8,
          question: "What is integrated resource planning?",
          options: [
            "Considering all resource options in utility planning",
            "Planning only for renewable resources",
            "International resource allocation",
            "Corporate resource management"
          ],
          correctAnswer: 0,
          explanation: "IRP evaluates all available options (supply, demand-side, storage) to meet energy needs reliably at lowest cost."
        },
        {
          id: 9,
          question: "What is the Paris Agreement's approach to national commitments?",
          options: [
            "Nationally Determined Contributions",
            "Uniform global targets",
            "Voluntary corporate pledges",
            "Technology-specific mandates"
          ],
          correctAnswer: 0,
          explanation: "The Paris Agreement uses NDCs - national climate action plans that countries develop and update regularly."
        },
        {
          id: 10,
          question: "What are non-wires alternatives?",
          options: [
            "Demand-side and distributed alternatives to grid upgrades",
            "Wireless electricity transmission",
            "Alternatives to copper wiring",
            "Underground instead of overhead lines"
          ],
          correctAnswer: 0,
          explanation: "NWAs include energy efficiency, demand response, and distributed generation that can defer or avoid traditional grid investments."
        },
        {
          id: 11,
          question: "What do building energy codes typically regulate?",
          options: [
            "Minimum efficiency requirements for new buildings",
            "Maximum size of buildings",
            "Architectural styles",
            "Construction material sources"
          ],
          correctAnswer: 0,
          explanation: "Building codes set minimum energy performance standards for new construction and major renovations."
        },
        {
          id: 12,
          question: "What is carbon leakage?",
          options: [
            "Emissions moving to regions without carbon pricing",
            "Carbon dioxide escaping from storage",
            "Leaking methane from pipelines",
            "Carbon pricing revenue disappearing"
          ],
          correctAnswer: 0,
          explanation: "Carbon leakage occurs when emissions-intensive activities relocate to avoid carbon costs, undermining climate policy effectiveness."
        },
        {
          id: 13,
          question: "What are Energy Performance Certificates?",
          options: [
            "Ratings of building energy efficiency",
            "Certificates for energy producers",
            "Licenses for energy auditors",
            "Tradable renewable energy credits"
          ],
          correctAnswer: 0,
          explanation: "EPCs provide standardized information about building energy performance, typically required at sale or rental."
        },
        {
          id: 14,
          question: "What policy design consideration addresses impacts on vulnerable groups?",
          options: [
            "Social Equity",
            "Technical Feasibility",
            "Economic Efficiency",
            "Political Popularity"
          ],
          correctAnswer: 0,
          explanation: "Social equity considerations ensure policies don't disproportionately burden low-income or marginalized communities."
        },
        {
          id: 15,
          question: "What is adaptive management in policy implementation?",
          options: [
            "Learning and adjusting based on experience",
            "Managing policies adaptively for different groups",
            "Using adaptive control systems",
            "Policy adaptation to local conditions"
          ],
          correctAnswer: 0,
          explanation: "Adaptive management involves monitoring outcomes, learning what works, and adjusting policies accordingly."
        },
        {
          id: 16,
          question: "What do appliance efficiency standards regulate?",
          options: [
            "Minimum efficiency levels for products",
            "Maximum prices for appliances",
            "Required features in all appliances",
            "Appliance color and design"
          ],
          correctAnswer: 0,
          explanation: "Appliance standards set minimum energy performance levels that manufacturers must meet."
        },
        {
          id: 17,
          question: "What is the purpose of climate finance in international agreements?",
          options: [
            "Supporting climate action in developing countries",
            "Funding all climate research worldwide",
            "Paying for developed country emissions",
            "Subsidizing fossil fuel phase-out"
          ],
          correctAnswer: 0,
          explanation: "Climate finance helps developing countries mitigate and adapt to climate change, as recognized in international agreements."
        },
        {
          id: 18,
          question: "What are renewable energy auctions?",
          options: [
            "Competitive bidding for renewable capacity",
            "Auctions of used renewable equipment",
            "Bidding for renewable energy credits",
            "Auctions of renewable development rights"
          ],
          correctAnswer: 0,
          explanation: "Auctions invite developers to bid for contracts to build renewable projects, typically awarding to lowest bidders."
        },
        {
          id: 19,
          question: "What does NIMBY stand for in energy project siting?",
          options: [
            "Not In My Backyard",
            "New Infrastructure Must Benefit You",
            "National Infrastructure Management Bureau",
            "Neighborhood Improvement Management Board"
          ],
          correctAnswer: 0,
          explanation: "NIMBY refers to opposition to locally unwanted land uses, even if they provide broader societal benefits."
        },
        {
          id: 20,
          question: "What is technology transfer in international cooperation?",
          options: [
            "Sharing knowledge and technology between countries",
            "Transferring technology ownership between companies",
            "Moving manufacturing between countries",
            "Technology research changing locations"
          ],
          correctAnswer: 0,
          explanation: "Technology transfer helps developing countries access and deploy clean energy technologies developed elsewhere."
        }
      ]
    },

    // ==================== MODULE 4: SUSTAINABLE URBAN ENERGY SYSTEMS ====================
    {
      id: 4,
      title: "Urban Energy Transformation",
      completed: false,
      content: `
# Module 4: Cities as Sustainable Energy Hubs

Cities consume about 75% of global energy and produce similar percentages of emissions. This module explores how urban areas can transform into sustainable energy systems.

## **The Urban Energy Challenge**

**Unique Urban Characteristics**
- High population and building density
- Complex infrastructure systems
- Mixed land uses and activities
- Governance across multiple jurisdictions
- Historical legacy and path dependency

**Energy Flows in Cities**
- **Buildings** - 50-70% of urban energy use
- **Transportation** - 20-40% of urban energy use
- **Industry** - Varies by city type
- **Infrastructure** - Water, waste, communications systems

**Urban Form and Energy Use**
- Density affects transportation energy
- Building orientation affects heating/cooling needs
- Street layout affects solar access and wind patterns
- Mixed-use development reduces travel distances

## **Sustainable Urban Energy Planning**

**Integrated Urban Planning Process**
1. **Baseline Assessment** - Current energy use and systems
2. **Vision and Goals** - Desired future state
3. **Scenario Development** - Alternative pathways
4. **Action Planning** - Specific interventions and projects
5. **Implementation and Monitoring** - Execution and tracking

**Key Planning Principles**
- **Compact Development** - Higher density, mixed uses
- **Transit-Oriented Development** - Design around public transport
- **Green Infrastructure** - Natural systems for climate regulation
- **Circular Metabolism** - Closing resource loops within cities

**Spatial Energy Planning Tools**
- Solar potential mapping
- Energy demand forecasting by neighborhood
- District energy system planning
- Electric vehicle charging infrastructure siting

## **Building-Scale Solutions**

**Net Zero Energy Buildings**
- Produce as much energy as they consume
- High efficiency + on-site renewables
- Becoming code requirement in some jurisdictions
- Cost-effective over building lifetime

**Deep Energy Retrofits**
- Major efficiency improvements in existing buildings
- Often 50%+ energy use reduction
- Bundled with other renovation work
- Financing through energy savings

**Building Energy Management Systems**
- Automated control of heating, cooling, lighting
- Real-time monitoring and optimization
- Integration with grid signals
- Occupant engagement features

**Green Building Certification Systems**
- LEED, BREEAM, Green Star, etc.
- Whole-building sustainability assessment
- Market differentiation for certified buildings
- Continuous improvement through version updates

## **District Energy Systems**

**What are District Energy Systems?**
- Centralized heating/cooling production
- Distribution through underground pipes
- Serving multiple buildings in an area
- Can use diverse energy sources

**Benefits of District Systems**
- **Economies of Scale** - Larger, more efficient plants
- **Fuel Flexibility** - Can switch between sources
- **Integration Potential** - Waste heat, renewables, storage
- **Urban Design** - No individual building equipment needed

**Modern District Energy Innovations**
- **4th Generation** - Low temperature, integrated with renewables
- **5th Generation** - Ambient temperature networks with heat pumps
- **Smart Controls** - Optimized operation based on demand and prices
- **Seasonal Storage** - Storing summer heat for winter use

**Case Examples**
- Copenhagen: 98% of heating from district systems
- Helsinki: Combining waste heat, biomass, heat pumps
- Toronto: Deep lake water cooling system
- Seoul: Transforming old district heating with new technology

## **Urban Transportation Transformation**

**Integrated Mobility Systems**
- **Public Transit** - High-capacity backbone systems
- **Active Transportation** - Walking and cycling infrastructure
- **Shared Mobility** - Car-sharing, bike-sharing, ride-hailing
- **Clean Vehicles** - Electric, hydrogen, biofuels

**Transit-Oriented Development Principles**
- High density within walking distance of transit
- Mixed uses reducing need for travel
- Quality pedestrian environments
- Reduced parking requirements

**Electric Vehicle Integration**
- Charging infrastructure planning
- Grid impacts and management
- Public fleet electrification
- Incentives and regulations

**Urban Freight and Logistics**
- Last-mile delivery solutions
- Electric cargo bikes and vehicles
- Consolidation centers
- Off-peak delivery regulations

## **Urban Renewable Energy Integration**

**Rooftop Solar Potential**
- Commercial and industrial rooftops
- Residential solar programs
- Community solar on public buildings
- Solar access rights and protections

**Urban Wind Energy**
- Building-integrated wind turbines
- Small-scale turbines in appropriate locations
- Wind mapping for urban areas
- Safety and noise considerations

**Waste-to-Energy Systems**
- Anaerobic digestion of organic waste
- Waste heat recovery from wastewater
- Landfill gas capture and use
- Advanced thermal treatment technologies

**Geothermal Applications**
- Ground-source heat pumps for buildings
- Aquifer thermal energy storage
- Deep geothermal for district heating
- Geothermal exchange systems

## **Smart Cities and Digitalization**

**Smart Grid Applications in Cities**
- Advanced metering infrastructure
- Distribution automation
- Demand response programs
- Microgrids and resilience hubs

**Data Analytics for Energy Management**
- Building energy benchmarking
- Anomaly detection and fault diagnosis
- Predictive maintenance
- Optimization algorithms

**Internet of Things (IoT) Applications**
- Smart thermostats and controls
- Lighting control systems
- Occupancy and usage sensors
- Integration platforms

**Digital Twins for Urban Planning**
- Virtual replicas of physical systems
- Simulation and optimization capabilities
- Scenario testing and planning
- Real-time monitoring and control

## **Circular Economy in Cities**

**Urban Metabolism Concept**
- Tracking material and energy flows
- Identifying waste and inefficiencies
- Designing circular flows
- Closing loops at appropriate scales

**Circular Built Environment**
- Design for disassembly and reuse
- Material banks and passports
- Construction and demolition waste management
- Adaptive reuse of buildings

**Water-Energy Nexus in Cities**
- Energy for water pumping and treatment
- Water for energy production and cooling
- Integrated resource recovery
- Decentralized water and energy systems

**Food-Energy Systems Integration**
- Urban agriculture and vertical farming
- Food waste to energy
- Local food systems reducing transportation
- Energy-efficient food processing

## **Governance and Financing**

**Multi-Level Governance Challenges**
- Coordination across city departments
- Alignment with regional and national policies
- Engaging private sector and communities
- Building institutional capacity

**Innovative Financing Mechanisms**
- **Property Assessed Clean Energy (PACE)** - Financing through property taxes
- **Energy Service Companies (ESCOs)** - Performance-based contracts
- **Green Bonds** - Dedicated funding for sustainable projects
- **Public-Private Partnerships** - Risk sharing and expertise combining

**Community Engagement and Participation**
- Participatory planning processes
- Community energy projects
- Energy literacy and behavior programs
- Just transition considerations

**Monitoring and Evaluation Frameworks**
- Key performance indicators
- Regular reporting and transparency
- Benchmarking against peers
- Learning and continuous improvement

## **Future Urban Energy Visions**

**Positive Energy Districts**
- Produce more energy than they consume
- Export surplus to surrounding areas
- Integrate multiple systems and technologies
- Living labs for innovation

**15-Minute Cities**
- All daily needs within 15-minute walk/bike
- Reduced transportation energy demand
- Strong local economies and communities
- Improved quality of life

**Sponge Cities**
- Natural water management reducing pumping energy
- Green infrastructure for cooling
- Combined water-energy systems
- Climate adaptation benefits

**Regenerative Cities**
- Restore ecosystems and biodiversity
- Positive environmental impact
- Social and economic regeneration
- Holistic sustainability approach

Cities present both the greatest challenges and greatest opportunities for sustainable energy transformation.

**Next Module**: We'll explore Industrial Energy Systems and decarbonization pathways for manufacturing and industry.
`,
      quiz: [
        {
          id: 1,
          question: "What percentage of global energy do cities typically consume?",
          options: [
            "About 75%",
            "About 25%",
            "About 50%",
            "About 90%"
          ],
          correctAnswer: 0,
          explanation: "Cities account for approximately 75% of global energy consumption and similar percentages of emissions."
        },
        {
          id: 2,
          question: "What is the largest energy use category in most cities?",
          options: [
            "Buildings",
            "Transportation",
            "Industry",
            "Public lighting"
          ],
          correctAnswer: 0,
          explanation: "Buildings typically account for 50-70% of urban energy use through heating, cooling, lighting, and appliances."
        },
        {
          id: 3,
          question: "What does TOD stand for in urban planning?",
          options: [
            "Transit-Oriented Development",
            "Total Outdoor Design",
            "Technical Operations Division",
            "Transport Optimization District"
          ],
          correctAnswer: 0,
          explanation: "TOD focuses development around transit stations to maximize accessibility and reduce car dependence."
        },
        {
          id: 4,
          question: "What is a net zero energy building?",
          options: [
            "Produces as much energy as it consumes annually",
            "Uses no energy at all",
            "Only uses energy from the grid",
            "Has zero carbon footprint in construction"
          ],
          correctAnswer: 0,
          explanation: "Net zero energy buildings generate enough renewable energy on-site to offset their annual energy consumption."
        },
        {
          id: 5,
          question: "What are district energy systems?",
          options: [
            "Centralized heating/cooling serving multiple buildings",
            "Energy systems for school districts",
            "District-level energy planning offices",
            "Energy markets at district scale"
          ],
          correctAnswer: 0,
          explanation: "District energy systems produce thermal energy centrally and distribute it through pipes to multiple buildings."
        },
        {
          id: 6,
          question: "What is 4th generation district heating?",
          options: [
            "Low temperature systems integrated with renewables",
            "The fourth company to provide district heating",
            "Heating for four generations of families",
            "Four different heat sources combined"
          ],
          correctAnswer: 0,
          explanation: "4GDH uses lower temperatures compatible with renewable heat sources and enables waste heat recovery."
        },
        {
          id: 7,
          question: "What is a key principle of 15-minute cities?",
          options: [
            "All daily needs within 15-minute walk/bike",
            "15 minutes to drive anywhere in city",
            "Public transit every 15 minutes",
            "15% of land for green space"
          ],
          correctAnswer: 0,
          explanation: "The 15-minute city concept aims to provide access to work, shopping, education, and recreation within short active travel distances."
        },
        {
          id: 8,
          question: "What does PACE financing stand for?",
          options: [
            "Property Assessed Clean Energy",
            "Public Access to Clean Energy",
            "Progressive Affordable Clean Energy",
            "Planning for Alternative Clean Energy"
          ],
          correctAnswer: 0,
          explanation: "PACE financing allows property owners to pay for efficiency and renewable upgrades through property tax assessments."
        },
        {
          id: 9,
          question: "What is urban metabolism?",
          options: [
            "Tracking material and energy flows through cities",
            "The pace of life in urban areas",
            "Biological processes in urban ecosystems",
            "Energy consumption patterns of urban residents"
          ],
          correctAnswer: 0,
          explanation: "Urban metabolism analyzes cities as organisms that consume resources and produce wastes, aiming to make these flows more circular."
        },
        {
          id: 10,
          question: "What is a positive energy district?",
          options: [
            "Produces more energy than it consumes",
            "Has only positive attitudes toward energy",
            "District with maximum energy consumption",
            "Area focused on positive environmental messaging"
          ],
          correctAnswer: 0,
          explanation: "Positive energy districts generate renewable energy exceeding their own consumption, exporting surplus to surrounding areas."
        },
        {
          id: 11,
          question: "What is a digital twin in urban energy planning?",
          options: [
            "Virtual replica of physical systems for simulation",
            "Duplicate control systems for redundancy",
            "Two identical cities for comparison",
            "Digital copy of energy bills"
          ],
          correctAnswer: 0,
          explanation: "Digital twins create virtual models that mimic real-world systems, enabling testing and optimization before implementation."
        },
        {
          id: 12,
          question: "What does ESCO stand for?",
          options: [
            "Energy Service Company",
            "Energy Supply and Control Office",
            "Efficient Systems Coordination Organization",
            "Environmental Sustainability Consulting Office"
          ],
          correctAnswer: 0,
          explanation: "ESCOs provide energy efficiency services and are often paid based on actual energy savings achieved."
        },
        {
          id: 13,
          question: "What is deep energy retrofit?",
          options: [
            "Major efficiency improvements in existing buildings",
            "Excavating below buildings for geothermal",
            "Retrofitting deep foundation buildings only",
            "Extensive historical building preservation"
          ],
          correctAnswer: 0,
          explanation: "Deep retrofits achieve 50% or greater energy savings through comprehensive building envelope and system upgrades."
        },
        {
          id: 14,
          question: "What is ambient temperature district energy?",
          options: [
            "5th generation systems using heat pumps at buildings",
            "Systems that maintain room temperature",
            "District heating that feels comfortable",
            "Energy systems for temperature-sensitive areas"
          ],
          correctAnswer: 0,
          explanation: "5GDH uses ambient temperature networks with decentralized heat pumps to provide heating and cooling."
        },
        {
          id: 15,
          question: "What is circular metabolism in cities?",
          options: [
            "Closing resource loops within urban systems",
            "Circular patterns of urban growth",
            "Metabolism that occurs in circular buildings",
            "Energy flows in circular patterns only"
          ],
          correctAnswer: 0,
          explanation: "Circular metabolism aims to transform linear resource flows (extract-use-dispose) into circular loops that minimize waste."
        },
        {
          id: 16,
          question: "What is building energy benchmarking?",
          options: [
            "Comparing energy performance against peers",
            "Marking buildings with energy labels",
            "Setting minimum energy standards",
            "Measuring building height and volume"
          ],
          correctAnswer: 0,
          explanation: "Benchmarking compares building energy use against similar buildings to identify improvement opportunities."
        },
        {
          id: 17,
          question: "What is aquifer thermal energy storage?",
          options: [
            "Storing heat or cold in underground aquifers",
            "Heating aquifers for geothermal power",
            "Using aquifers for water heating",
            "Storing energy in artificial aquifers"
          ],
          correctAnswer: 0,
          explanation: "ATES stores thermal energy in groundwater aquifers for seasonal use, typically for heating and cooling buildings."
        },
        {
          id: 18,
          question: "What is a sponge city?",
          options: [
            "Urban design managing water naturally",
            "City with many swimming pools",
            "Urban area below sea level",
            "City focused on marine energy"
          ],
          correctAnswer: 0,
          explanation: "Sponge cities use natural systems to absorb, store, and clean rainwater, reducing flooding and pumping energy needs."
        },
        {
          id: 19,
          question: "What is adaptive reuse of buildings?",
          options: [
            "Repurposing existing buildings for new uses",
            "Buildings that adapt to occupant needs",
            "Reusing building materials only",
            "Buildings designed for multiple future uses"
          ],
          correctAnswer: 0,
          explanation: "Adaptive reuse gives old buildings new purposes, preserving embodied energy and reducing construction waste."
        },
        {
          id: 20,
          question: "What is integrated mobility?",
          options: [
            "Seamless combination of different transport modes",
            "Mobility for integrated communities",
            "Transport integrated with buildings",
            "International transportation networks"
          ],
          correctAnswer: 0,
          explanation: "Integrated mobility provides seamless connections between walking, cycling, public transit, and shared vehicles."
        }
      ]
    },

    // ==================== MODULE 5: INDUSTRIAL ENERGY TRANSFORMATION ====================
    {
      id: 5,
      title: "Decarbonizing Industry",
      completed: false,
      content: `
# Module 5: Sustainable Industrial Energy Systems

Industry accounts for about 37% of global energy use and 24% of CO2 emissions. This module examines pathways to decarbonize industrial processes while maintaining economic competitiveness.

## **Industrial Energy Landscape**

**Energy-Intensive Industries**
- **Iron and Steel** - 7-9% of global CO2 emissions
- **Chemicals and Petrochemicals** - High heat and feedstock demands
- **Cement and Concrete** - Process emissions from calcination
- **Aluminum and Non-Ferrous Metals** - Electricity-intensive electrolysis
- **Pulp and Paper** - Heat for drying and chemical processes

**Types of Industrial Energy Use**
1. **Process Heat** - 50-70% of industrial energy
   - Low temperature (<100°C): Food, textiles
   - Medium temperature (100-400°C): Chemicals, manufacturing
   - High temperature (>400°C): Steel, cement, ceramics
2. **Machine Drive** - Motors and mechanical systems
3. **Feedstocks** - Raw materials for chemical processes
4. **Non-Energy Uses** - Lubricants, solvents, etc.

**Industrial Energy Efficiency Potential**
- Typically 10-30% savings economically viable
- Payback periods often 1-3 years
- Barriers: Capital constraints, split incentives, risk aversion
- Often bundled with other improvements (quality, productivity)

## **Industrial Electrification**

**Electrification Opportunities**
- **Low/Medium Temperature Heat** - Heat pumps, electric boilers
- **High Temperature Processes** - Electric arc furnaces, induction heating
- **Machine Drive** - High efficiency motors and variable speed drives
- **Hydrogen Production** - Electrolyzers for industrial feedstocks

**Technical Considerations**
- **Grid Capacity** - Large-scale electrification requires grid upgrades
- **Power Quality** - Industrial processes may need stable frequency/voltage
- **Process Modifications** - Equipment and control system changes
- **Heat Recovery** - Capturing waste heat from electrical processes

**Economic Factors**
- Electricity vs. fuel price differentials
- Capital costs of new electric equipment
- Operating and maintenance savings
- Potential carbon pricing advantages

**Case Examples**
- Steel: Electric arc furnaces using scrap steel
- Aluminum: Already heavily electrified (smelting)
- Cement: Electric kilns in development
- Chemicals: Electrolyzers for hydrogen and feedstocks

## **Industrial Heat Pumps**

**Technology Overview**
- Upgrade waste heat to useful temperatures
- Coefficient of Performance (COP) typically 3-6
- Can provide both heating and cooling
- Various types: Mechanical, absorption, adsorption

**Temperature Ranges**
- **Low Temperature** (<100°C): Well-established technology
- **Medium Temperature** (100-150°C): Emerging applications
- **High Temperature** (>150°C): Research and development phase

**Integration Opportunities**
- **Waste Heat Recovery** - From processes or equipment
- **Combined Heating/Cooling** - Simultaneous needs
- **District Energy Integration** - Supplying or receiving heat
- **Renewable Integration** - Using excess renewable electricity

**Barriers and Solutions**
- **High Capital Costs** - Financing mechanisms, shared savings
- **Technical Complexity** - Standardized designs, turnkey solutions
- **Space Requirements** - Compact designs, integration planning
- **Maintenance Needs** - Service contracts, training programs

## **Hydrogen in Industry**

**Current Industrial Hydrogen Use**
- **Ammonia Production** - 50% of global hydrogen demand
- **Refining** - Hydrocracking and desulfurization
- **Methanol Production** - Chemical feedstock
- **Steel Making** - Potential replacement for coke

**Green Hydrogen Production**
- **Electrolysis** - Using renewable electricity
- **Biomass Gasification** - With carbon capture
- **Thermochemical Cycles** - High-temperature solar
- **Biological Processes** - Algae, bacteria

**Hydrogen Storage and Distribution**
- **Compressed Gas** - Established technology, energy intensive
- **Liquefied Hydrogen** - Higher density, very energy intensive
- **Chemical Carriers** - Ammonia, organic liquids, metal hydrides
- **Pipeline Blending** - Gradual conversion of natural gas networks

**Industrial Applications**
- **Direct Reduction Iron** - Replacing natural gas with hydrogen
- **High-Temperature Heat** - Hydrogen burners and furnaces
- **Chemical Feedstock** - Existing and new chemical processes
- **Energy Storage** - Balancing variable renewable generation

## **Biomass and Bioenergy**

**Sustainable Biomass Sources**
- **Agricultural Residues** - Straw, husks, pruning waste
- **Forestry Residues** - Thinning, logging residues
- **Energy Crops** - Grown on marginal lands
- **Organic Waste** - Food waste, municipal solid waste
- **Algae** - High productivity, no agricultural land

**Biomass Conversion Technologies**
- **Direct Combustion** - For heat and power
- **Gasification** - Producing syngas for multiple uses
- **Pyrolysis** - Producing bio-oil, char, and gases
- **Anaerobic Digestion** - Producing biogas
- **Biochemical Conversion** - Enzymatic processes to fuels

**Industrial Applications**
- **Process Heat** - Biomass boilers and furnaces
- **Combined Heat and Power** - Improving overall efficiency
- **Biofuels for Transport** - Within industrial operations
- **Bio-based Materials** - Replacing fossil-based feedstocks

**Sustainability Considerations**
- **Land Use** - Competition with food and ecosystems
- **Carbon Neutrality** - Timing of emissions and sequestration
- **Water Use** - Irrigation requirements for energy crops
- **Biodiversity** - Impacts of monoculture plantations

## **Carbon Capture, Utilization and Storage**

**CO2 Capture Technologies**
- **Post-Combustion** - Removing CO2 from flue gases
- **Pre-Combustion** - Gasification with CO2 separation
- **Oxy-Fuel Combustion** - Burning in oxygen, producing pure CO2
- **Direct Air Capture** - Removing CO2 from ambient air

**Industrial Applications**
- **Cement** - Process emissions from limestone calcination
- **Steel** - Blast furnace and direct reduction emissions
- **Chemicals** - Steam reforming and other processes
- **Refining** - Hydrogen production and upgrading

**CO2 Utilization Pathways**
- **Enhanced Oil Recovery** - Current major application
- **Building Materials** - Carbonation of concrete aggregates
- **Chemicals and Fuels** - Converting CO2 to useful products
- **Algae Cultivation** - Biofuel production with CO2 input

**Storage Options**
- **Geological Storage** - Depleted oil/gas fields, saline aquifers
- **Mineral Carbonation** - Reacting with minerals to form carbonates
- **Ocean Storage** - Deep ocean injection (controversial)
- **Bio-storage** - Enhanced terrestrial or marine sinks

## **Circular Industrial Systems**

**Industrial Symbiosis**
- **By-Product Exchange** - One company's waste becomes another's input
- **Utility Sharing** - Shared energy, water, waste treatment
- **Joint Logistics** - Shared transportation and storage
- **Knowledge Exchange** - Technical and business collaboration

**Eco-Industrial Parks**
- Planned industrial areas designed for symbiosis
- Common infrastructure and services
- Environmental performance standards
- Continuous improvement programs

**Material Efficiency Strategies**
- **Light-weighting** - Using less material for same function
- **Material Substitution** - Lower impact alternatives
- **Longer Product Life** - Durability, repairability, upgradability
- **Recycling and Remanufacturing** - Closing material loops

**Energy System Integration**
- **Waste Heat Cascading** - Using heat at progressively lower temperatures
- **Demand Response** - Adjusting operations based on grid conditions
- **Renewable Integration** - On-site generation and procurement
- **Storage Integration** - Thermal, electrical, chemical storage

## **Policy and Business Strategies**

**Regulatory Approaches**
- **Performance Standards** - Minimum efficiency or emissions levels
- **Carbon Pricing** - Creating incentives for reduction
- **Procurement Policies** - Government and corporate purchasing
- **Product Standards** - Requirements for embodied carbon

**Voluntary Initiatives**
- **Energy Management Systems** - ISO 50001 certification
- **Science-Based Targets** - Aligning with climate science
- **Supply Chain Programs** - Engaging suppliers on sustainability
- **Transparency and Reporting** - Disclosing performance data

**Financing Mechanisms**
- **Energy Performance Contracting** - Paying from savings
- **Green Bonds and Loans** - Lower cost capital for green projects
- **Tax Incentives** - Credits and accelerated depreciation
- **Grant Programs** - Supporting demonstration and deployment

**Innovation Ecosystems**
- **Research Partnerships** - Industry-academia-government collaboration
- **Demonstration Projects** - Scaling new technologies
- **Incubators and Accelerators** - Supporting clean tech startups
- **Skills Development** - Training for new industrial processes

## **Sector-Specific Pathways**

**Iron and Steel**
- Scrap-based electric arc furnaces
- Hydrogen-based direct reduction
- Carbon capture for remaining emissions
- Material efficiency and recycling

**Cement and Concrete**
- Alternative binders reducing clinker content
- Carbon capture for process emissions
- Alternative fuels for kilns
- Carbonation of concrete during and after use

**Chemicals**
- Green hydrogen and carbon from non-fossil sources
- Bio-based feedstocks
- Electrification of heating processes
- Circular design for chemicals and plastics

**Aluminum**
- Renewable electricity for smelting
- Inert anode technology eliminating process emissions
- Increased recycling rates
- Light-weighting applications

## **Future Industrial Vision**

**Industrial Clusters and Hubs**
- Geographic concentration of related industries
- Shared infrastructure and resources
- Innovation and knowledge spillovers
- Policy and investment coordination

**Digitalization and Industry 4.0**
- **Smart Manufacturing** - Connected, data-driven operations
- **Predictive Maintenance** - Reducing downtime and energy waste
- **Process Optimization** - Real-time adjustment for efficiency
- **Supply Chain Transparency** - Tracking environmental impacts

**Just Transition for Industrial Communities**
- Worker retraining and redeployment
- Economic diversification strategies
- Community engagement and benefits sharing
- Legacy site remediation and repurposing

**Global Value Chain Considerations**
- Carbon leakage and border carbon adjustments
- Technology transfer to developing countries
- Harmonized standards and certifications
- Responsible sourcing and production

Industrial decarbonization requires technological innovation, supportive policies, business model transformation, and international cooperation.

**Next Module**: We'll complete our studies with Energy Justice, Equity, and the Human Dimensions of sustainable energy transitions.
`,
      quiz: [
        {
          id: 1,
          question: "What percentage of global energy use comes from industry?",
          options: [
            "About 37%",
            "About 15%",
            "About 50%",
            "About 75%"
          ],
          correctAnswer: 0,
          explanation: "Industry accounts for approximately 37% of global final energy consumption."
        },
        {
          id: 2,
          question: "What is the largest category of industrial energy use?",
          options: [
            "Process heat",
            "Machine drive",
            "Lighting",
            "Feedstocks"
          ],
          correctAnswer: 0,
          explanation: "Process heat typically represents 50-70% of industrial energy consumption across various temperature ranges."
        },
        {
          id: 3,
          question: "What industrial process uses about 50% of global hydrogen?",
          options: [
            "Ammonia production",
            "Steel making",
            "Refining",
            "Methanol production"
          ],
          correctAnswer: 0,
          explanation: "Ammonia production for fertilizers consumes approximately half of the world's hydrogen supply."
        },
        {
          id: 4,
          question: "What is industrial symbiosis?",
          options: [
            "By-product exchange between companies",
            "Similar industries working together",
            "Industries mimicking natural systems",
            "Industrial mergers and acquisitions"
          ],
          correctAnswer: 0,
          explanation: "Industrial symbiosis involves companies in proximity exchanging materials, energy, water, and by-products."
        },
        {
          id: 5,
          question: "What temperature range can current heat pumps typically reach?",
          options: [
            "Up to 150°C with advanced designs",
            "Only up to 50°C",
            "Over 500°C",
            "Exactly 100°C"
          ],
          correctAnswer: 0,
          explanation: "While most heat pumps operate below 100°C, advanced designs can reach 150°C for industrial applications."
        },
        {
          id: 6,
          question: "What is green hydrogen?",
          options: [
            "Hydrogen produced using renewable energy",
            "Hydrogen with green coloring added",
            "Hydrogen from natural gas with carbon capture",
            "Hydrogen used in green industries"
          ],
          correctAnswer: 0,
          explanation: "Green hydrogen is produced through water electrolysis powered by renewable electricity."
        },
        {
          id: 7,
          question: "What is the CO2 source in cement production that's hard to eliminate?",
          options: [
            "Process emissions from limestone calcination",
            "Combustion emissions from kiln heating",
            "Transportation emissions",
            "Electricity generation emissions"
          ],
          correctAnswer: 0,
          explanation: "About 60% of cement emissions come from chemical process of converting limestone to lime, not from fuel combustion."
        },
        {
          id: 8,
          question: "What does CCUS stand for?",
          options: [
            "Carbon Capture, Utilization and Storage",
            "Carbon Control and Use Systems",
            "Climate Change Under Study",
            "Carbon Credit Utilization Scheme"
          ],
          correctAnswer: 0,
          explanation: "CCUS encompasses technologies to capture CO2 emissions and either use them or store them permanently."
        },
        {
          id: 9,
          question: "What is an eco-industrial park?",
          options: [
            "Planned industrial area designed for symbiosis",
            "Park with ecological restoration",
            "Industrial museum in natural setting",
            "Factory with green roofs and walls"
          ],
          correctAnswer: 0,
          explanation: "Eco-industrial parks are designed from the outset to facilitate resource exchange and environmental performance."
        },
        {
          id: 10,
          question: "What is ISO 50001?",
          options: [
            "International standard for energy management systems",
            "Standard for 50001 efficient products",
            "ISO standard for carbon accounting",
            "International energy efficiency rating"
          ],
          correctAnswer: 0,
          explanation: "ISO 50001 provides a framework for establishing, implementing, maintaining and improving energy management systems."
        },
        {
          id: 11,
          question: "What is electric arc furnace used for in steel making?",
          options: [
            "Melting scrap steel using electricity",
            "Heating iron ore with electric arcs",
            "Electrolytic refining of steel",
            "Induction heating of steel billets"
          ],
          correctAnswer: 0,
          explanation: "Electric arc furnaces melt recycled scrap steel, requiring much less energy than primary steel production."
        },
        {
          id: 12,
          question: "What is direct air capture?",
          options: [
            "Removing CO2 directly from ambient air",
            "Capturing emissions at industrial sources",
            "Natural carbon sequestration by plants",
            "Ocean-based carbon removal"
          ],
          correctAnswer: 0,
          explanation: "DAC technologies chemically capture CO2 from the atmosphere rather than from concentrated point sources."
        },
        {
          id: 13,
          question: "What is waste heat cascading?",
          options: [
            "Using heat at progressively lower temperatures",
            "Heat flowing down from high areas",
            "Multiple heat recovery systems in series",
            "Industrial heating in cascade mountains"
          ],
          correctAnswer: 0,
          explanation: "Cascading uses high-temperature waste heat for high-temperature needs first, then lower temperatures for other uses."
        },
        {
          id: 14,
          question: "What does Industry 4.0 refer to?",
          options: [
            "Fourth industrial revolution with digitalization",
            "Four times industrial productivity",
            "Four key industrial sectors",
            "Industry in four global regions"
          ],
          correctAnswer: 0,
          explanation: "Industry 4.0 involves cyber-physical systems, IoT, cloud computing, and AI in manufacturing."
        },
        {
          id: 15,
          question: "What is light-weighting in material efficiency?",
          options: [
            "Using less material for same function",
            "Making materials weigh less naturally",
            "Reducing product weight by any means",
            "Using lightweight materials only"
          ],
          correctAnswer: 0,
          explanation: "Light-weighting redesigns products to use less material while maintaining or improving performance."
        },
        {
          id: 16,
          question: "What is carbon leakage?",
          options: [
            "Industries relocating to avoid carbon costs",
            "CO2 escaping from storage sites",
            "Carbon pricing revenue disappearing",
            "Leaking carbon in industrial processes"
          ],
          correctAnswer: 0,
          explanation: "Carbon leakage occurs when emissions-intensive production moves to regions with weaker climate policies."
        },
        {
          id: 17,
          question: "What is oxy-fuel combustion?",
          options: [
            "Burning fuel in oxygen instead of air",
            "Oxygen-enhanced natural gas combustion",
            "Fuel mixed with oxygen carriers",
            "Combustion optimized for oxygen content"
          ],
          correctAnswer: 0,
          explanation: "Oxy-fuel combustion produces a concentrated CO2 stream that's easier to capture from flue gases."
        },
        {
          id: 18,
          question: "What are science-based targets?",
          options: [
            "Emission reductions aligned with climate science",
            "Targets based on scientific publications",
            "Laboratory-proven technical targets",
            "Targets set by scientific committees"
          ],
          correctAnswer: 0,
          explanation: "Science-based targets align corporate emissions reductions with what climate science says is necessary."
        },
        {
          id: 19,
          question: "What is inert anode technology for aluminum?",
          options: [
            "Eliminates process emissions from smelting",
            "Anodes that never need replacement",
            "Non-reactive electrode materials",
            "Anodes for high-temperature processes"
          ],
          correctAnswer: 0,
          explanation: "Inert anodes don't consume carbon during aluminum production, eliminating direct process CO2 emissions."
        },
        {
          id: 20,
          question: "What is demand response in industry?",
          options: [
            "Adjusting operations based on grid conditions",
            "Responding to customer demand changes",
            "Demanding better grid response",
            "Industrial response to policy demands"
          ],
          correctAnswer: 0,
          explanation: "Industrial demand response involves temporarily reducing or shifting electricity use to help balance the grid."
        }
      ]
    },

    // ==================== MODULE 6: ENERGY JUSTICE AND EQUITY ====================
    {
      id: 6,
      title: "Human Dimensions of Energy Transition",
      completed: false,
      content: `
# Module 6: Energy Justice, Equity, and Social Dimensions

Sustainable energy transitions must be not only technically feasible and economically viable, but also socially just and equitable. This module explores the human dimensions of energy system change.

## **Principles of Energy Justice**

**Three Core Tenets**
1. **Distributive Justice** - Fair distribution of benefits and burdens
2. **Procedural Justice** - Fair and inclusive decision-making processes
3. **Recognition Justice** - Acknowledging and addressing historical inequities

**Expanding the Framework**
- **Restorative Justice** - Repairing past harms
- **Cosmopolitan Justice** - Global responsibilities and rights
- **Intergenerational Justice** - Fairness across generations
- **Intersectional Justice** - Recognizing overlapping identities and oppressions

**Application to Energy Systems**
- **Energy Access** - Who has access to modern energy services
- **Energy Affordability** - Who can pay for needed energy
- **Energy Sovereignty** - Who controls energy decisions and resources
- **Energy Democracy** - Participatory governance of energy systems

## **Energy Poverty and Access**

**Defining Energy Poverty**
- **Absolute Energy Poverty** - Lack of access to modern energy services
- **Relative Energy Poverty** - Spending disproportionate income on energy
- **Hidden Energy Poverty** - Underconsumption due to unaffordability

**Global Energy Access Status**
- 760 million people without electricity access
- 2.6 billion people without clean cooking access
- Access gaps concentrated in sub-Saharan Africa and South Asia
- Urban-rural disparities within countries

**Health and Social Impacts**
- Indoor air pollution from solid fuels kills 3.8 million annually
- Time poverty from fuel collection (mostly affecting women and girls)
- Limited economic opportunities without reliable energy
- Educational limitations without lighting for study

**Sustainable Energy Access Solutions**
- **Tiered Approach** - Appropriate levels of service for different contexts
- **Renewable Mini-Grids** - Community-scale systems for remote areas
- **Solar Home Systems** - Individual solutions for basic needs
- **Clean Cooking Solutions** - Improved cookstoves, biogas, LPG

## **Energy Burden and Affordability**

**Measuring Energy Burden**
- Percentage of household income spent on energy
- Disproportionate impacts on low-income households
- Seasonal variations in energy costs
- Hidden costs of energy inefficiency

**Causes of High Energy Burden**
- Inefficient housing and appliances
- Lack of access to energy efficiency programs
- Regressive rate structures
- Geographic location and climate

**Policy Interventions**
- **Weatherization Assistance** - Energy efficiency for low-income homes
- **Bill Assistance Programs** - Direct help with energy costs
- **Progressive Rate Design** - Lower rates for basic consumption
- **Energy Efficiency Obligations** - Utilities required to serve all customers

**Just Transition Considerations**
- Protecting vulnerable consumers during system changes
- Ensuring benefits flow to affected communities
- Preventing displacement from energy upgrades
- Building community wealth through local ownership

## **Procedural Justice in Energy Decisions**

**Inclusive Decision-Making**
- Meaningful participation of all affected groups
- Early and continuous engagement
- Accessible information and processes
- Respect for different forms of knowledge

**Barriers to Participation**
- Technical language excluding non-experts
- Meeting times and locations inconvenient for many
- Historical distrust of institutions
- Power imbalances in decision processes

**Best Practices for Engagement**
- **Co-design** - Communities help design projects and programs
- **Participatory Budgeting** - Communities decide on spending priorities
- **Citizen Advisory Boards** - Ongoing community input structures
- **Deliberative Polling** - Informed community opinion gathering

**Indigenous Rights and Energy**
- Free, prior and informed consent for projects on indigenous lands
- Respect for traditional knowledge and practices
- Equitable benefit sharing from resource development
- Recognition of indigenous sovereignty and self-determination

## **Distributional Impacts of Energy Policies**

**Regressive vs. Progressive Impacts**
- **Carbon Taxes** - Can be regressive without revenue recycling
- **Efficiency Standards** - Generally progressive (benefit all users)
- **Renewable Subsidies** - Often captured by higher-income groups
- **Net Metering** - Can benefit solar owners at expense of non-solar customers

**Revenue Recycling Options**
- **Lump Sum Rebates** - Equal payments to all households
- **Progressive Tax Cuts** - Reducing taxes for lower incomes
- **Targeted Investments** - Funding programs for vulnerable groups
- **Dividend Payments** - Regular equal payments from carbon revenue

**Designing Equitable Policies**
- **Exemptions** - Protecting essential energy uses
- **Differentiated Rates** - Lower prices for basic consumption
- **Complementary Programs** - Addressing multiple needs together
- **Sunset Provisions** - Phasing out support as costs decline

## **Community Energy and Ownership**

**Benefits of Community Ownership**
- Economic benefits stay in local communities
- Greater acceptance of energy projects
- Democratic control over energy decisions
- Building local skills and capacity

**Models of Community Energy**
- **Cooperatives** - Member-owned and democratically controlled
- **Community Benefit Agreements** - Legal commitments from developers
- **Municipal Ownership** - Public ownership of energy assets
- **Crowdfunding** - Many small investments from community members

**Financing Community Projects**
- **Community Shares** - Local residents buying ownership stakes
- **Revolving Loan Funds** - Recycling returns into new projects
- **Grant Programs** - Public funding for community initiatives
- **Power Purchase Agreements** - Long-term contracts providing revenue certainty

**Scaling Community Energy**
- **Federations and Networks** - Connecting local initiatives
- **Technical Assistance Providers** - Supporting community development
- **Policy Advocacy** - Creating enabling conditions
- **Knowledge Sharing** - Learning across communities

## **Workforce Transition and Development**

**Employment Impacts of Energy Transition**
- Job losses in fossil fuel industries
- Job creation in clean energy sectors
- Different skill requirements and locations
- Quality of jobs (wages, benefits, conditions)

**Just Transition for Workers**
- **Early Retirement Options** - For workers near retirement age
- **Retraining Programs** - Developing new skills for emerging sectors
- **Job Placement Services** - Connecting workers with new opportunities
- **Income Support** - During transition periods

**Building Diverse Energy Workforce**
- Addressing historical underrepresentation
- Targeted recruitment and training programs
- Inclusive workplace cultures and policies
- Career pathways from entry to advanced positions

**Education and Training Systems**
- **K-12 Energy Literacy** - Building foundation understanding
- **Vocational Training** - Practical skills for energy jobs
- **Higher Education** - Advanced technical and policy education
- **Lifelong Learning** - Continuous skill development

## **Gender and Energy**

**Gender Dimensions of Energy Access**
- Women disproportionately affected by energy poverty
- Gender roles in fuel collection and cooking
- Different energy needs and priorities by gender
- Safety concerns around energy access

**Women in Energy Workforce**
- Underrepresentation in technical and leadership roles
- Barriers to entry and advancement
- Gender pay gaps in energy sector
- Harassment and discrimination issues

**Gender-Responsive Energy Programming**
- Collecting and analyzing sex-disaggregated data
- Engaging women in energy decision-making
- Designing products and services for women's needs
- Creating women-friendly employment opportunities

**Economic Empowerment Through Energy**
- Energy access enabling women's entrepreneurship
- Time savings from improved energy services
- Health benefits from clean cooking
- Educational opportunities with reliable lighting

## **Global Energy Justice**

**Historical Responsibility**
- Developed countries' historical emissions
- Unequal benefits from fossil-fueled development
- Externalized environmental costs to Global South
- Debt and structural adjustment pressures

**Climate Finance and Technology Transfer**
- **$100 Billion Commitment** - Developed country climate finance
- **Loss and Damage** - Addressing irreversible climate impacts
- **Technology Transfer** - Access to clean energy technologies
- **Capacity Building** - Developing institutional and human capacity

**Energy Sovereignty in Global South**
- Right to choose energy development pathways
- Control over natural resources
- Protection from exploitative projects
- Building domestic energy industries

**South-South Cooperation**
- Knowledge sharing between developing countries
- Technology adaptation to local contexts
- Joint advocacy in international forums
- Regional energy integration and trade

## **Implementing Energy Justice**

**Assessment Tools and Frameworks**
- **Energy Justice Impact Assessment** - Systematic evaluation of projects
- **Social Life Cycle Assessment** - Social impacts across value chains
- **Participatory Action Research** - Communities researching their own situations
- **Equity Indicators and Metrics** - Measuring progress on justice goals

**Institutionalizing Justice Principles**
- **Justice Criteria in Funding Decisions** - Requiring equity considerations
- **Diversity in Governance Bodies** - Including affected communities
- **Transparency and Accountability** - Clear reporting on justice outcomes
- **Remedy Mechanisms** - Processes to address harms

**Building Movements and Alliances**
- **Labor-Environmental Alliances** - Bridging traditional divides
- **Frontline Community Leadership** - Centering most affected voices
- **Youth Climate Activism** - Intergenerational justice advocacy
- **International Solidarity** - Global connections for local struggles

**Personal and Professional Practice**
- **Reflective Practice** - Examining own position and biases
- **Ethical Decision-Making** - Considering justice implications
- **Allyship and Solidarity** - Supporting marginalized groups
- **Continuous Learning** - Staying informed about justice issues

Energy justice transforms energy from a technical-economic problem to a socio-political challenge, requiring not just new technologies but new relationships, institutions, and values.

**Congratulations on reaching the final module of the Sustainable Energy Systems Diploma program!**
`,
      quiz: [
        {
          id: 1,
          question: "What are the three core tenets of energy justice?",
          options: [
            "Distributive, Procedural, Recognition Justice",
            "Economic, Environmental, Social Justice",
            "Access, Affordability, Reliability Justice",
            "Historical, Current, Future Justice"
          ],
          correctAnswer: 0,
          explanation: "The three core tenets address distribution of benefits/burdens, decision-making processes, and recognition of different groups."
        },
        {
          id: 2,
          question: "How many people lack electricity access worldwide?",
          options: [
            "760 million",
            "100 million",
            "2 billion",
            "5 billion"
          ],
          correctAnswer: 0,
          explanation: "Approximately 760 million people, mostly in sub-Saharan Africa and South Asia, lack access to electricity."
        },
        {
          id: 3,
          question: "What is energy burden?",
          options: [
            "Percentage of income spent on energy",
            "Weight of energy equipment",
            "Environmental burden of energy production",
            "Social burden of energy decisions"
          ],
          correctAnswer: 0,
          explanation: "Energy burden measures what portion of household income goes toward energy costs, with high burden indicating affordability challenges."
        },
        {
          id: 4,
          question: "What does FPIC stand for regarding indigenous rights?",
          options: [
            "Free, Prior and Informed Consent",
            "Full Participation in Community",
            "Fair Pricing and Inclusive Contracts",
            "Future Planning for Indigenous Communities"
          ],
          correctAnswer: 0,
          explanation: "FPIC is a principle that indigenous communities must give consent before projects proceed on their lands."
        },
        {
          id: 5,
          question: "What is a progressive impact of a policy?",
          options: [
            "Benefits lower-income groups relatively more",
            "Progresses quickly through legislative process",
            "Has progressive environmental benefits",
            "Uses progressive technology"
          ],
          correctAnswer: 0,
          explanation: "Progressive policies reduce inequality by providing greater relative benefits to those with lower incomes."
        },
        {
          id: 6,
          question: "What is community energy?",
          options: [
            "Locally owned and controlled energy projects",
            "Energy for community buildings only",
            "Community discussions about energy",
            "Energy donated to communities"
          ],
          correctAnswer: 0,
          explanation: "Community energy involves local ownership, control, and benefit from energy generation and efficiency projects."
        },
        {
          id: 7,
          question: "What is a just transition for workers?",
          options: [
            "Support for workers affected by energy transition",
            "Transition that happens at just the right time",
            "Only justifiable transitions allowed",
            "Workers transitioning to justice jobs"
          ],
          correctAnswer: 0,
          explanation: "Just transition supports workers in declining industries through retraining, placement, and income support."
        },
        {
          id: 8,
          question: "How does energy access disproportionately affect women?",
          options: [
            "Women bear burden of fuel collection and cooking",
            "Women use more energy than men",
            "Only women care about energy issues",
            "Women are excluded from all energy decisions"
          ],
          correctAnswer: 0,
          explanation: "Women typically spend more time collecting fuel and cooking, and suffer more health impacts from indoor air pollution."
        },
        {
          id: 9,
          question: "What is the $100 billion climate finance commitment?",
          options: [
            "Annual climate finance from developed to developing countries",
            "Total global climate finance needed",
            "Climate finance for renewable energy only",
            "Private sector climate finance goal"
          ],
          correctAnswer: 0,
          explanation: "Developed countries committed to mobilizing $100 billion annually in climate finance for developing countries."
        },
        {
          id: 10,
          question: "What is energy sovereignty?",
          options: [
            "Right to choose energy development pathways",
            "Complete energy self-sufficiency",
            "Sovereign wealth funds for energy",
            "National ownership of all energy resources"
          ],
          correctAnswer: 0,
          explanation: "Energy sovereignty emphasizes communities' and nations' right to control their energy resources and choose their energy futures."
        },
        {
          id: 11,
          question: "What is hidden energy poverty?",
          options: [
            "Underconsumption due to unaffordability",
            "Poverty hidden by energy subsidies",
            "Energy poverty in remote areas",
            "Poverty caused by hidden energy costs"
          ],
          correctAnswer: 0,
          explanation: "Hidden energy poverty occurs when people cannot afford adequate energy services but this isn't captured in standard measures."
        },
        {
          id: 12,
          question: "What is participatory budgeting?",
          options: [
            "Communities deciding on spending priorities",
            "Budget participation by all departments",
            "Public review of government budgets",
            "Budgeting for participatory programs"
          ],
          correctAnswer: 0,
          explanation: "Participatory budgeting involves community members directly deciding how to allocate public funds."
        },
        {
          id: 13,
          question: "What is revenue recycling in carbon pricing?",
          options: [
            "Using carbon revenue for public purposes",
            "Recycling carbon emissions",
            "Carbon market revenue distribution",
            "Reusing carbon tax legislation"
          ],
          correctAnswer: 0,
          explanation: "Revenue recycling refers to how governments use income from carbon taxes or allowance auctions."
        },
        {
          id: 14,
          question: "What are community benefit agreements?",
          options: [
            "Legal commitments from developers to communities",
            "Agreements between community members",
            "Benefits available to all community members",
            "Government benefits for communities"
          ],
          correctAnswer: 0,
          explanation: "CBAs are legally enforceable agreements where developers commit to provide specific benefits to host communities."
        },
        {
          id: 15,
          question: "What is loss and damage in climate negotiations?",
          options: [
            "Addressing irreversible climate impacts",
            "Loss of climate negotiation documents",
                    "Damage to climate monitoring equipment",
                    "Loss of climate funding"
                ],
                correctAnswer: 0,
                explanation: "Loss and damage refers to climate impacts beyond adaptation, requiring compensation or support."
            },
            {
                id: 16,
                question: "What is intergenerational justice?",
                options: [
                    "Fairness across generations",
                    "Justice within one generation",
                    "Generational conflict resolution",
                    "Justice for generation-specific issues"
                ],
                correctAnswer: 0,
                explanation: "Intergenerational justice considers our responsibilities to future generations in energy and climate decisions."
            },
            {
                id: 17,
                question: "What is intersectional justice?",
                options: [
                    "Recognizing overlapping identities and oppressions",
                    "Justice at intersections of different issues",
                    "Justice where different systems intersect",
                    "International justice with intersection points"
                ],
                correctAnswer: 0,
                explanation: "Intersectionality recognizes how different forms of discrimination (race, gender, class) combine and interact."
            },
            {
                id: 18,
                question: "What is South-South cooperation?",
                options: [
                    "Knowledge sharing between developing countries",
                    "Cooperation between southern hemisphere countries",
                    "Collaboration on southern issues",
                    "Cooperation led by southern countries"
                ],
                correctAnswer: 0,
                explanation: "South-South cooperation involves developing countries sharing knowledge, resources, and technologies."
            },
            {
                id: 19,
                question: "What is reflective practice in energy justice?",
                options: [
                    "Examining own position and biases",
                    "Practicing justice principles repeatedly",
                    "Reflecting on successful projects",
                    "Practice that reflects community values"
                ],
                correctAnswer: 0,
                explanation: "Reflective practice involves professionals critically examining their own assumptions, privileges, and impacts."
            },
            {
                id: 20,
                question: "What is energy democracy?",
                options: [
                    "Participatory governance of energy systems",
                    "Democratic countries' energy policies",
                    "Voting on energy issues",
                    "Energy for democratic institutions"
                ],
                correctAnswer: 0,
                explanation: "Energy democracy emphasizes community control, participatory decision-making, and equitable benefits from energy systems."
            }
        ]
    }
],

// ==================== FINAL EXAM ====================
finalExam: {
    title: "Sustainable Energy Systems Diploma Final Exam",
    description: "Comprehensive 40-question exam covering all 6 advanced modules on sustainable energy systems.",
    passingScore: 75,
    questions: [
        // Questions from Module 1
        {
            id: 1,
            module: 1,
            question: "What does systems thinking emphasize in energy analysis?",
            options: [
                "Interconnections and whole system behavior",
                "Only technical efficiency of components",
                "Short-term economic costs alone",
                "Individual technology performance in isolation"
            ],
            correctAnswer: 0,
            explanation: "Systems thinking focuses on relationships and emergent properties, not just individual components."
        },
        {
            id: 2,
            module: 1,
            question: "What three systems are interconnected in the Energy-Water-Food Nexus?",
            options: [
                "Energy, Water, Food",
                "Energy, Transportation, Buildings",
                "Water, Air, Soil",
                "Food, Health, Education"
            ],
            correctAnswer: 0,
            explanation: "The nexus recognizes deep interconnections between these three critical resource systems."
        },
        {
            id: 3,
            module: 1,
            question: "What EROI ratio do modern complex societies typically need?",
            options: [
                "10-15:1 or higher",
                "Exactly 1:1",
                "2-3:1",
                "100:1 or higher"
            ],
            correctAnswer: 0,
            explanation: "Complex societies with extensive infrastructure require higher energy returns to function."
        },
        {
            id: 4,
            module: 1,
            question: "What is resilience in energy systems?",
            options: [
                "Ability to withstand and recover from disturbances",
                "Always having the lowest cost energy",
                "Using only renewable sources",
                "Complete independence from all external systems"
            ],
            correctAnswer: 0,
            explanation: "Resilience involves maintaining essential functions during stress and adapting to change."
        },

        // Questions from Module 2
        {
            id: 5,
            module: 2,
            question: "What are externalities in energy economics?",
            options: [
                "Costs or benefits affecting third parties, not reflected in prices",
                "Extra charges on electricity bills",
                "Government taxes on energy companies",
                "Hidden profits for energy producers"
            ],
            correctAnswer: 0,
            explanation: "Externalities create market failures by not being incorporated into market prices."
        },
        {
            id: 6,
            module: 2,
            question: "What does LCOE stand for?",
            options: [
                "Levelized Cost of Energy",
                "Lowest Cost of Electricity",
                "Local Cost of Energy",
                "Long-term Cost Estimate"
            ],
            correctAnswer: 0,
            explanation: "LCOE calculates lifetime average cost per unit of energy generated."
        },
        {
            id: 7,
            module: 2,
            question: "What is a progressive impact of an energy policy?",
            options: [
                "Benefits lower-income groups relatively more",
                "Progresses quickly through legislative process",
                "Has progressive environmental benefits",
                "Uses progressive technology"
            ],
            correctAnswer: 0,
            explanation: "Progressive policies reduce inequality by benefiting lower-income groups more."
        },
        {
            id: 8,
            module: 2,
            question: "What is circular economy in energy systems?",
            options: [
                "Keeping materials in use and designing out waste",
                "Making all energy flows circular",
                "Only using renewable resources",
                "Eliminating all economic costs"
            ],
            correctAnswer: 0,
            explanation: "Circular economy minimizes waste and maximizes resource efficiency through reuse and recycling."

        },

        // Questions from Module 3
        {
            id: 9,
            module: 3,
            question: "What are the two main carbon pricing approaches?",
            options: [
                "Carbon taxes and emissions trading",
                "Renewable mandates and efficiency standards",
                "Research funding and deployment subsidies",
                "Building codes and appliance standards"
            ],
            correctAnswer: 0,
            explanation: "Carbon pricing can be implemented through direct taxes or cap-and-trade systems."
        },
        {
            id: 10,
            module: 3,
            question: "What does RPS stand for in renewable energy policy?",
            options: [
                "Renewable Portfolio Standard",
                "Renewable Power System",
                "Regional Planning Strategy",
                "Resource Performance Standard"
            ],
            correctAnswer: 0,
            explanation: "RPS mandates minimum renewable percentages for electricity suppliers."
        },
        {
            id: 11,
            module: 3,
            question: "What is performance-based regulation for utilities?",
            options: [
                "Linking profits to performance metrics rather than sales",
                "Regulating based on political performance",
                "Only allowing profitable utilities to operate",
                "Setting prices based on competitor performance"
            ],
            correctAnswer: 0,
            explanation: "Performance-based regulation aligns utility incentives with societal goals."
        },
        {
            id: 12,
            module: 3,
            question: "What are non-wires alternatives?",
            options: [
                "Demand-side and distributed alternatives to grid upgrades",
                "Wireless electricity transmission",
                "Alternatives to copper wiring",
                "Underground instead of overhead lines"
            ],
            correctAnswer: 0,
            explanation: "NWAs can defer or avoid traditional grid infrastructure investments."

        },

        // Questions from Module 4
        {
            id: 13,
            module: 4,
            question: "What percentage of global energy do cities typically consume?",
            options: [
                "About 75%",
                "About 25%",
                "About 50%",
                "About 90%"
            ],
            correctAnswer: 0,
            explanation: "Cities account for approximately three-quarters of global energy consumption."
        },
        {
            id: 14,
            module: 4,
            question: "What is TOD in urban planning?",
            options: [
                "Transit-Oriented Development",
                "Total Outdoor Design",
                "Technical Operations Division",
                "Transport Optimization District"
            ],
            correctAnswer: 0,
            explanation: "TOD focuses development around public transit to reduce car dependence."
        },
        {
            id: 15,
            module: 4,
            question: "What is a net zero energy building?",
            options: [
                "Produces as much energy as it consumes annually",
                "Uses no energy at all",
                "Only uses energy from the grid",
                "Has zero carbon footprint in construction"
            ],
            correctAnswer: 0,
            explanation: "Net zero buildings generate enough renewable energy to offset annual consumption."
        },
        {
            id: 16,
            module: 4,
            question: "What is a positive energy district?",
            options: [
                "Produces more energy than it consumes",
                "Has only positive attitudes toward energy",
                "District with maximum energy consumption",
                "Area focused on positive environmental messaging"
            ],
            correctAnswer: 0,
            explanation: "Positive energy districts generate renewable surplus for surrounding areas."

        },

        // Questions from Module 5
        {
            id: 17,
            module: 5,
            question: "What percentage of global energy use comes from industry?",
            options: [
                "About 37%",
                "About 15%",
                "About 50%",
                "About 75%"
            ],
            correctAnswer: 0,
            explanation: "Industry accounts for approximately 37% of global final energy consumption."
        },
        {
            id: 18,
            module: 5,
            question: "What is industrial symbiosis?",
            options: [
                "By-product exchange between companies",
                "Similar industries working together",
                "Industries mimicking natural systems",
                "Industrial mergers and acquisitions"
            ],
            correctAnswer: 0,
            explanation: "Industrial symbiosis involves companies exchanging materials, energy, and by-products."
        },
        {
            id: 19,
            module: 5,
            question: "What is green hydrogen?",
            options: [
                "Hydrogen produced using renewable energy",
                "Hydrogen with green coloring added",
                "Hydrogen from natural gas with carbon capture",
                "Hydrogen used in green industries"
            ],
            correctAnswer: 0,
            explanation: "Green hydrogen is produced through water electrolysis powered by renewables."
        },
        {
            id: 20,
            module: 5,
            question: "What does CCUS stand for?",
            options: [
                "Carbon Capture, Utilization and Storage",
                "Carbon Control and Use Systems",
                "Climate Change Under Study",
                "Carbon Credit Utilization Scheme"
            ],
            correctAnswer: 0,
            explanation: "CCUS technologies capture CO2 emissions for use or permanent storage."

        },

        // Questions from Module 6
        {
            id: 21,
            module: 6,
            question: "What are the three core tenets of energy justice?",
            options: [
                "Distributive, Procedural, Recognition Justice",
                "Economic, Environmental, Social Justice",
                "Access, Affordability, Reliability Justice",
                "Historical, Current, Future Justice"
            ],
            correctAnswer: 0,
            explanation: "These three principles address different aspects of fairness in energy systems."
        },
        {
            id: 22,
            module: 6,
            question: "How many people lack electricity access worldwide?",
            options: [
                "760 million",
                "100 million",
                "2 billion",
                "5 billion"
            ],
            correctAnswer: 0,
            explanation: "Approximately 760 million people lack access to electricity, primarily in sub-Saharan Africa and South Asia."
        },
        {
            id: 23,
            module: 6,
            question: "What is energy sovereignty?",
            options: [
                "Right to choose energy development pathways",
                "Complete energy self-sufficiency",
                "Sovereign wealth funds for energy",
                "National ownership of all energy resources"
            ],
            correctAnswer: 0,
            explanation: "Energy sovereignty emphasizes communities' control over their energy futures."
        },
        {
            id: 24,
            module: 6,
            question: "What is a just transition for workers?",
            options: [
                "Support for workers affected by energy transition",
                "Transition that happens at just the right time",
                "Only justifiable transitions allowed",
                "Workers transitioning to justice jobs"
            ],
            correctAnswer: 0,
            explanation: "Just transition supports workers through retraining, placement, and income support."

        },

        // Additional comprehensive questions
        {
            id: 25,
            module: 1,
            question: "What is Life Cycle Assessment?",
            options: [
                "Environmental impacts from cradle to grave",
                "Only operational energy use assessment",
                "Financial life cycle costing",
                "Technical performance over time"
            ],
            correctAnswer: 0,
            explanation: "LCA evaluates all environmental impacts from raw material extraction through disposal."
        },
        {
            id: 26,
            module: 2,
            question: "What is feed-in tariff?",
            options: [
                "Guaranteed prices for renewable generation",
                "Tariff on imported energy equipment",
                "Fee for connecting to the grid",
                "Tax on energy feedstocks"
            ],
            correctAnswer: 0,
            explanation: "Feed-in tariffs provide long-term, guaranteed prices to renewable energy producers."
        },
        {
            id: 27,
            module: 3,
            question: "What is integrated resource planning?",
            options: [
                "Considering all resource options in utility planning",
                "Planning only for renewable resources",
                "International resource allocation",
                "Corporate resource management"
            ],
            correctAnswer: 0,
            explanation: "IRP evaluates all options to meet energy needs reliably at lowest cost."
        },
        {
            id: 28,
            module: 4,
            question: "What is district energy?",
            options: [
                "Centralized heating/cooling serving multiple buildings",
                "Energy systems for school districts",
                "District-level energy planning offices",
                "Energy markets at district scale"
            ],
            correctAnswer: 0,
            explanation: "District energy produces thermal energy centrally for distribution to multiple buildings."
        },
        {
            id: 29,
            module: 5,
            question: "What is industrial heat pump?",
            options: [
                "Upgrades waste heat to useful temperatures",
                "Pump for industrial heating systems",
                "Heat pump for industrial buildings",
                "Pumping heat from industrial processes"
            ],
            correctAnswer: 0,
            explanation: "Industrial heat pumps recover waste heat and upgrade it for useful applications."
        },
        {
            id: 30,
            module: 6,
            question: "What is energy burden?",
            options: [
                "Percentage of income spent on energy",
                "Weight of energy equipment",
                "Environmental burden of energy production",
                "Social burden of energy decisions"
            ],
            correctAnswer: 0,
            explanation: "Energy burden measures affordability challenges through income percentage spent on energy."
        },
        {
            id: 31,
            module: 1,
            question: "What are the three levels in Multi-Scale Perspective?",
            options: [
                "Niches, Regimes, Landscape",
                "Local, National, Global",
                "Technical, Economic, Social",
                "Supply, Distribution, Demand"
            ],
            correctAnswer: 0,
            explanation: "This framework analyzes transitions across innovation niches, dominant regimes, and broader landscape factors."
        },
        {
            id: 32,
            module: 2,
            question: "What is net metering?",
            options: [
                "1:1 retail rate compensation for excess generation",
                "Payment based on time-of-use rates",
                "Compensation only for environmental benefits",
                "Free electricity for solar owners"
            ],
            correctAnswer: 0,
            explanation: "Net metering credits solar owners at retail rates for power sent to the grid."
        },
        {
            id: 33,
            module: 3,
            question: "What are zero-emission vehicle mandates?",
            options: [
                "Requirements for increasing percentage of electric vehicles",
                "Bans on all vehicle emissions",
                "Mandatory electric vehicle purchases",
                "Requirements for zero-emission manufacturing"
            ],
            correctAnswer: 0,
            explanation: "ZEV mandates require automakers to sell increasing percentages of electric vehicles."
        },
        {
            id: 34,
            module: 4,
            question: "What is urban metabolism?",
            options: [
                "Tracking material and energy flows through cities",
                "The pace of life in urban areas",
                "Biological processes in urban ecosystems",
                "Energy consumption patterns of urban residents"
            ],
            correctAnswer: 0,
            explanation: "Urban metabolism analyzes cities' resource consumption and waste production."
        },
        {
            id: 35,
            module: 5,
            question: "What is ISO 50001?",
            options: [
                "International standard for energy management systems",
                "Standard for 50001 efficient products",
                "ISO standard for carbon accounting",
                "International energy efficiency rating"
            ],
            correctAnswer: 0,
            explanation: "ISO 50001 provides a framework for organizational energy management systems."
        },
        {
            id: 36,
            module: 6,
            question: "What does FPIC stand for regarding indigenous rights?",
            options: [
                "Free, Prior and Informed Consent",
                "Full Participation in Community",
                "Fair Pricing and Inclusive Contracts",
                "Future Planning for Indigenous Communities"
            ],
            correctAnswer: 0,
            explanation: "FPIC requires indigenous consent before projects proceed on their lands."
        },
        {
            id: 37,
            module: 1,
            question: "What is circular design in energy-water-food nexus?",
            options: [
                "Outputs become inputs elsewhere in the system",
                "All processes occur in circular buildings",
                "Energy flows in circular patterns only",
                "Water cycles ignore human intervention"
            ],
            correctAnswer: 0,
            explanation: "Circular design minimizes waste by ensuring outputs become inputs for other processes."
        },
        {
            id: 38,
            module: 2,
            question: "What is community solar?",
            options: [
                "Shared solar installations serving multiple subscribers",
                "Solar panels only on community buildings",
                "Free solar for low-income communities",
                "Solar energy education programs"
            ],
            correctAnswer: 0,
            explanation: "Community solar allows multiple participants to benefit from shared solar arrays."
        },
        {
            id: 39,
            module: 3,
            question: "What is adaptive management in policy implementation?",
            options: [
                "Learning and adjusting based on experience",
                "Managing policies adaptively for different groups",
                "Using adaptive control systems",
                "Policy adaptation to local conditions"
            ],
            correctAnswer: 0,
            explanation: "Adaptive management involves monitoring outcomes and adjusting policies accordingly."
        },
        {
            id: 40,
            module: 4,
            question: "What is a digital twin in urban planning?",
            options: [
                "Virtual replica of physical systems for simulation",
                "Duplicate control systems for redundancy",
                "Two identical cities for comparison",
                "Digital copy of energy bills"
            ],
            correctAnswer: 0,
            explanation: "Digital twins create virtual models for testing and optimization before implementation."
        }
    ]
}
};

export default sustainableEnergySystemsDiplomaCourse;
