// Development Economics (Diploma) Course
// Advanced course with 6 modules and final exam

export const developmentEconomicsDiploma = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "development-economics-diploma",
  title: "Development Economics (Diploma)",
  description: "Advanced examination of economic growth, poverty reduction, and sustainable development. Focuses on policy analysis, measurement tools, and evidence-based strategies for national and international development.",
  duration: "12 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  prerequisite: "Economics (Certificate)",
  icon: "📈",
  badge: "Diploma",
  level: "Advanced",
  
  // 2. MODULES ARCHITECTURE (6 Advanced Modules)
  modules: [
    {
      // MODULE 1: DEVELOPMENT MEASUREMENT AND INDICATORS
      id: 1,
      title: "Measuring Development: Beyond GDP",
      completed: false,
      content: `# Measuring Development: Beyond GDP

Welcome to Development Economics. As future policy analysts and development practitioners, you need to understand how we measure progress beyond simple economic growth.

## The Limitations of GDP

Gross Domestic Product (GDP) measures market value of goods and services, but it has significant limitations:
- **Ignores distribution**: GDP growth can concentrate wealth
- **Excludes unpaid work**: Caregiving, household labor not counted
- **Values negatives**: Disaster recovery boosts GDP
- **Misses sustainability**: Resource depletion not subtracted
- **Overlooks well-being**: Happiness and life satisfaction unmeasured

## Alternative Development Indicators

### 1. Human Development Index (HDI)
Created by the United Nations Development Programme, HDI combines three dimensions:
- **Health**: Life expectancy at birth
- **Education**: Mean years of schooling and expected years
- **Standard of living**: GNI per capita (PPP adjusted)

HDI ranges from 0 to 1, with four development categories:
- Very high human development (0.800+)
- High human development (0.700-0.799)
- Medium human development (0.550-0.699)
- Low human development (below 0.550)

### 2. Multidimensional Poverty Index (MPI)
Measures overlapping deprivations across three dimensions with ten indicators:

**Health:**
- Nutrition
- Child mortality

**Education:**
- Years of schooling
- School attendance

**Standard of Living:**
- Cooking fuel
- Sanitation
- Drinking water
- Electricity
- Housing
- Assets

### 3. Gini Coefficient
Measures income inequality on a scale from 0 to 1:
- **0**: Perfect equality (everyone has same income)
- **1**: Perfect inequality (one person has all income)
- **0.25-0.35**: Moderate inequality
- **0.35-0.50**: High inequality
- **0.50+**: Very high inequality

### 4. Genuine Progress Indicator (GPI)
Adjusts GDP by:
- Adding value of household work
- Subtracting costs of crime and pollution
- Adjusting for income distribution
- Considering resource depletion

## Sustainable Development Goals (SDGs)

The 2030 Agenda's 17 goals provide comprehensive framework:
1. No Poverty
2. Zero Hunger
3. Good Health
4. Quality Education
5. Gender Equality
6. Clean Water
7. Affordable Energy
8. Decent Work
9. Industry Innovation
10. Reduced Inequalities
11. Sustainable Cities
12. Responsible Consumption
13. Climate Action
14. Life Below Water
15. Life on Land
16. Peace and Justice
17. Partnerships

Each goal has specific targets and indicators for monitoring progress.

## Practical Measurement Challenges

**Data quality issues:**
- Incomplete national statistics systems
- Informal economy activities unreported
- Survey limitations in remote areas
- Time lag in data collection

**Cultural considerations:**
- Different definitions of "well-being"
- Varying family structures and responsibilities
- Diverse educational priorities
- Multiple concepts of poverty

**Policy applications:**
- Targeting interventions to most deprived
- Monitoring program effectiveness
- Comparing regional progress
- Informing budget allocations

Remember: What gets measured gets managed. Choosing appropriate indicators shapes development priorities and resource allocation.`,
      
      quiz: [
        {
          id: 1,
          question: "What is the primary limitation of using GDP alone to measure development?",
          options: ["It's too expensive to calculate", "It ignores income distribution and well-being", "It only measures agricultural output", "It cannot be compared between countries"],
          correctAnswer: 1,
          explanation: "GDP fails to account for how wealth is distributed or the overall quality of life and well-being of a population."
        },
        {
          id: 2,
          question: "Which three dimensions does the Human Development Index combine?",
          options: ["Health, Education, Standard of Living", "Income, Employment, Housing", "Agriculture, Industry, Services", "Urban, Rural, Coastal"],
          correctAnswer: 0,
          explanation: "HDI uses life expectancy for health, education access and attainment, and GNI per capita for standard of living."
        },
        {
          id: 3,
          question: "What does a Gini coefficient of 0.40 indicate?",
          options: ["Perfect equality", "Moderate inequality", "High inequality", "Perfect inequality"],
          correctAnswer: 2,
          explanation: "A Gini coefficient between 0.35-0.50 represents high income inequality within a population."
        },
        {
          id: 4,
          question: "How many Sustainable Development Goals are there?",
          options: ["10", "15", "17", "20"],
          correctAnswer: 2,
          explanation: "The 2030 Agenda established 17 comprehensive Sustainable Development Goals."
        },
        {
          id: 5,
          question: "What does MPI measure that single-dimensional poverty indices miss?",
          options: ["Only income poverty", "Overlapping deprivations", "GDP growth rates", "Export volumes"],
          correctAnswer: 1,
          explanation: "Multidimensional Poverty Index captures how different deprivations (health, education, living standards) overlap."
        },
        {
          id: 6,
          question: "Which SDG focuses specifically on reducing inequalities?",
          options: ["SDG 5", "SDG 8", "SDG 10", "SDG 13"],
          correctAnswer: 2,
          explanation: "SDG 10 specifically addresses reducing inequalities within and among countries."
        },
        {
          id: 7,
          question: "What does GPI adjust in traditional GDP calculations?",
          options: ["Only adds military spending", "Subtracts negative factors like pollution", "Only counts manufacturing", "Exports services entirely"],
          correctAnswer: 1,
          explanation: "Genuine Progress Indicator subtracts negative factors like pollution and crime while adding positive factors like household work."
        },
        {
          id: 8,
          question: "Which is NOT one of the MPI's three main dimensions?",
          options: ["Health", "Education", "Standard of Living", "Political Participation"],
          correctAnswer: 3,
          explanation: "MPI focuses on health, education, and standard of living - more immediate well-being indicators than political participation."
        },
        {
          id: 9,
          question: "What development level does an HDI of 0.750 indicate?",
          options: ["Low human development", "Medium human development", "High human development", "Very high human development"],
          correctAnswer: 2,
          explanation: "HDI between 0.700-0.799 is classified as high human development."
        },
        {
          id: 10,
          question: "Which data challenge affects development measurement most in remote areas?",
          options: ["Too much data", "Survey limitations", "Perfect records", "Daily updates"],
          correctAnswer: 1,
          explanation: "Remote areas often lack infrastructure for comprehensive surveys, creating data gaps."
        },
        {
          id: 11,
          question: "What principle does 'what gets measured gets managed' refer to?",
          options: ["Measurement shapes priorities", "Only count what's visible", "Ignore difficult measurements", "Measure everything equally"],
          correctAnswer: 0,
          explanation: "The choice of indicators determines what policymakers focus on and allocate resources toward."
        },
        {
          id: 12,
          question: "Which component is included in standard of living calculations for HDI?",
          options: ["GNI per capita", "Military spending", "Tourist arrivals", "Stock market index"],
          correctAnswer: 0,
          explanation: "HDI uses Gross National Income per capita (PPP adjusted) to measure standard of living."
        },
        {
          id: 13,
          question: "What does perfect equality look like on the Gini scale?",
          options: ["0", "0.25", "0.50", "1"],
          correctAnswer: 0,
          explanation: "A Gini coefficient of 0 represents perfect equality where everyone has identical income."
        },
        {
          id: 14,
          question: "Which SDG specifically addresses climate action?",
          options: ["SDG 7", "SDG 11", "SDG 13", "SDG 15"],
          correctAnswer: 2,
          explanation: "SDG 13 focuses specifically on taking urgent action to combat climate change and its impacts."
        },
        {
          id: 15,
          question: "What type of work does GDP typically exclude?",
          options: ["Unpaid household work", "Government employment", "Manufacturing", "Banking services"],
          correctAnswer: 0,
          explanation: "GDP only counts market transactions, missing unpaid care work and household labor."
        },
        {
          id: 16,
          question: "How many indicators does the MPI use across its three dimensions?",
          options: ["5", "10", "15", "20"],
          correctAnswer: 1,
          explanation: "MPI uses 10 indicators: 2 for health, 2 for education, and 6 for standard of living."
        },
        {
          id: 17,
          question: "Which is a criticism of traditional economic growth measurement?",
          options: ["Values disaster recovery positively", "Always accurate", "Includes all informal work", "Measures happiness directly"],
          correctAnswer: 0,
          explanation: "GDP increases when money is spent on disaster recovery, which doesn't reflect true welfare improvement."
        },
        {
          id: 18,
          question: "What cultural factor affects development measurement?",
          options: ["Different definitions of well-being", "Universal poverty definitions", "Identical family structures", "Standard education goals"],
          correctAnswer: 0,
          explanation: "Cultural differences in what constitutes a good life or well-being affect how development should be measured."
        },
        {
          id: 19,
          question: "Which dimension would 'access to clean cooking fuel' fall under in MPI?",
          options: ["Health", "Education", "Standard of Living", "Political Participation"],
          correctAnswer: 2,
          explanation: "Clean cooking fuel is one of the six standard of living indicators in the MPI framework."
        },
        {
          id: 20,
          question: "What is the purpose of development indicators in policy?",
          options: ["Target interventions effectively", "Increase paperwork", "Complicate decision-making", "Limit government action"],
          correctAnswer: 0,
          explanation: "Accurate indicators help target resources to areas and populations with greatest need."
        }
      ]
    },

    {
      // MODULE 2: THEORIES OF ECONOMIC DEVELOPMENT
      id: 2,
      title: "Development Theories: From Rostow to Sen",
      completed: false,
      content: `# Development Theories: From Rostow to Sen

Understanding economic development requires examining competing theoretical frameworks that have shaped policy over decades.

## Classical Development Theories

### 1. Modernization Theory (Rostow's Stages of Growth)
Walt Rostow proposed five linear stages all societies pass through:

**Stage 1: Traditional Society**
- Dominated by subsistence agriculture
- Limited technology and productivity
- Hierarchical social structure
- Resistance to change

**Stage 2: Preconditions for Take-off**
- External influences stimulate change
- Infrastructure development begins
- Emergence of entrepreneurial class
- National identity formation

**Stage 3: Take-off**
- Industrialization accelerates
- Manufacturing expands rapidly
- Political and social institutions modernize
- Sustained growth begins (20+ years)

**Stage 4: Drive to Maturity**
- Technology diversifies
- Economy moves beyond original industries
- Urbanization increases
- International trade expands

**Stage 5: Age of High Mass Consumption**
- Consumer goods dominate economy
- Social welfare systems develop
- Service sector expands
- Quality of life improves

### 2. Dependency Theory
Developed by Latin American economists as critique of modernization:

**Core propositions:**
- Development and underdevelopment are relational
- Core (developed) countries exploit periphery (developing)
- International trade reinforces dependency
- Multinational corporations extract wealth
- Local elites collaborate with foreign interests

**Policy implications:**
- Import substitution industrialization
- Protection of domestic industries
- South-South cooperation
- Reduced reliance on foreign capital

## Alternative Development Approaches

### 3. Human Development Approach (Amartya Sen)
Sen's capability approach focuses on:
- **Functionings**: What people actually do and are
- **Capabilities**: Real opportunities to achieve functionings
- **Freedom**: Ability to pursue valued life paths

**Key principles:**
- Development as freedom expansion
- Focus on substantive human choices
- Recognition of multidimensional poverty
- Importance of democracy and rights

### 4. Sustainable Development
Brundtland Commission definition: "Development that meets the needs of the present without compromising the ability of future generations to meet their own needs."

**Three pillars:**
- **Economic**: Efficient resource use, poverty reduction
- **Social**: Equity, inclusion, quality of life
- **Environmental**: Ecosystem protection, climate action

### 5. New Institutional Economics
Emphasizes role of institutions in development:

**Formal institutions:**
- Laws and regulations
- Property rights systems
- Judicial systems
- Government structures

**Informal institutions:**
- Social norms and customs
- Trust networks
- Cultural values
- Traditional practices

**Institutional quality affects:**
- Transaction costs
- Investment decisions
- Innovation rates
- Contract enforcement

## Contemporary Theoretical Debates

### Washington Consensus vs. Post-Washington Consensus

**Washington Consensus (1980s-1990s):**
- Market liberalization
- Fiscal discipline
- Privatization
- Deregulation

**Post-Washington Consensus:**
- Institutional reform
- Social safety nets
- Good governance
- Poverty reduction focus

### Inclusive Growth Framework
Economic growth that:
- Creates opportunities for all
- Reduces inequality
- Benefits marginalized groups
- Distributes gains broadly

**Components:**
- Productive employment generation
- Human capital investment
- Social protection systems
- Pro-poor infrastructure

## Critical Evaluation

**Strengths and limitations:**
- Modernization theory: Linear but influential
- Dependency theory: Structural critique but limited solutions
- Human development: Comprehensive but complex measurement
- Sustainable development: Holistic but implementation challenges

**Practical applications:**
- Theory informs policy design
- Multiple frameworks often combined
- Context-specific adaptation needed
- Continuous learning from implementation

Remember: No single theory explains all development experiences. Effective practice integrates insights from multiple frameworks while remaining context-sensitive.`,
      
      quiz: [
        {
          id: 1,
          question: "How many stages does Rostow's modernization theory propose?",
          options: ["3", "5", "7", "10"],
          correctAnswer: 1,
          explanation: "Rostow identified five linear stages from traditional society to high mass consumption."
        },
        {
          id: 2,
          question: "What is the central concept in Amartya Sen's development approach?",
          options: ["GDP growth", "Industrialization", "Freedom expansion", "Export promotion"],
          correctAnswer: 2,
          explanation: "Sen defines development as the expansion of substantive freedoms and capabilities."
        },
        {
          id: 3,
          question: "According to dependency theory, how do core and periphery countries relate?",
          options: ["Equal partners", "Core exploits periphery", "Periphery leads core", "No relationship"],
          correctAnswer: 1,
          explanation: "Dependency theory argues developed (core) countries exploit developing (periphery) countries."
        },
        {
          id: 4,
          question: "What are the three pillars of sustainable development?",
          options: ["Economic, Social, Environmental", "Agricultural, Industrial, Service", "Urban, Rural, Coastal", "Government, Private, NGO"],
          correctAnswer: 0,
          explanation: "Sustainable development balances economic growth, social inclusion, and environmental protection."
        },
        {
          id: 5,
          question: "What characterizes Rostow's 'Take-off' stage?",
          options: ["Subsistence agriculture", "Rapid industrialization", "Service economy", "High consumption"],
          correctAnswer: 1,
          explanation: "The take-off stage features accelerated industrialization and sustained economic growth."
        },
        {
          id: 6,
          question: "What does New Institutional Economics emphasize?",
          options: ["Only formal education", "Role of institutions in development", "Technology alone", "Natural resources"],
          correctAnswer: 1,
          explanation: "This approach focuses on how formal and informal institutions shape economic outcomes."
        },
        {
          id: 7,
          question: "What was a key policy recommendation of the Washington Consensus?",
          options: ["Market liberalization", "Import substitution", "Capital controls", "Nationalization"],
          correctAnswer: 0,
          explanation: "The Washington Consensus promoted market liberalization and reduced government intervention."
        },
        {
          id: 8,
          question: "What does inclusive growth prioritize?",
          options: ["Only wealthy investors", "Opportunities for all", "Urban development only", "Export sectors"],
          correctAnswer: 1,
          explanation: "Inclusive growth aims to create broad-based opportunities and reduce inequality."
        },
        {
          id: 9,
          question: "In Sen's framework, what are 'capabilities'?",
          options: ["Physical assets only", "Real opportunities to achieve", "Government positions", "Natural resources"],
          correctAnswer: 1,
          explanation: "Capabilities represent the real freedoms people have to pursue lives they value."
        },
        {
          id: 10,
          question: "What criticism applies to modernization theory?",
          options: ["Too linear and deterministic", "Too focused on institutions", "Ignores economic growth", "Only values agriculture"],
          correctAnswer: 0,
          explanation: "Modernization theory assumes all societies follow the same linear path, ignoring diverse development experiences."
        },
        {
          id: 11,
          question: "What does dependency theory suggest about international trade?",
          options: ["Always benefits all", "Reinforces dependency", "Creates equality", "Has no effect"],
          correctAnswer: 1,
          explanation: "Dependency theorists argue trade patterns maintain unequal relationships between core and periphery."
        },
        {
          id: 12,
          question: "Which is an informal institution?",
          options: ["Property law", "Social norms", "Tax code", "Court system"],
          correctAnswer: 1,
          explanation: "Social norms, customs, and cultural values are examples of informal institutions."
        },
        {
          id: 13,
          question: "What characterized the Post-Washington Consensus shift?",
          options: ["Focus on institutions and governance", "More market fundamentalism", "Less poverty focus", "Reduced social spending"],
          correctAnswer: 0,
          explanation: "The Post-Washington Consensus added institutional reform and social considerations to market policies."
        },
        {
          id: 14,
          question: "What is Rostow's final stage called?",
          options: ["Traditional Society", "Take-off", "Drive to Maturity", "Age of High Mass Consumption"],
          correctAnswer: 3,
          explanation: "The fifth stage features widespread consumerism and service economy dominance."
        },
        {
          id: 15,
          question: "What does sustainable development consider regarding future generations?",
          options: ["Ignores them", "Meets present needs without compromising their ability", "Assumes they'll be richer", "Focuses only on them"],
          correctAnswer: 1,
          explanation: "The Brundtland definition explicitly considers intergenerational equity and resource preservation."
        },
        {
          id: 16,
          question: "What policy did dependency theorists often recommend?",
          options: ["Import substitution industrialization", "Complete free trade", "Foreign investment only", "Service economy focus"],
          correctAnswer: 0,
          explanation: "To reduce dependency, they advocated developing domestic industries to replace imports."
        },
        {
          id: 17,
          question: "In Sen's approach, what are 'functionings'?",
          options: ["Potential only", "What people actually do and are", "Government policies", "Economic growth rates"],
          correctAnswer: 1,
          explanation: "Functionings refer to the various things a person manages to do or be in their life."
        },
        {
          id: 18,
          question: "What does institutional quality affect in economies?",
          options: ["Only cultural events", "Transaction costs and investment", "Weather patterns", "Natural resources"],
          correctAnswer: 1,
          explanation: "Good institutions reduce transaction costs and create favorable conditions for investment."
        },
        {
          id: 19,
          question: "What is a key component of inclusive growth?",
          options: ["Productive employment generation", "Only high-tech jobs", "Urban bias", "Export concentration"],
          correctAnswer: 0,
          explanation: "Creating quality employment opportunities for diverse populations is central to inclusive growth."
        },
        {
          id: 20,
          question: "What lesson should development practitioners draw from theoretical debates?",
          options: ["Follow one theory strictly", "Integrate insights from multiple frameworks", "Ignore all theories", "Focus only on practice"],
          correctAnswer: 1,
          explanation: "Effective development practice integrates insights from various theories while adapting to local contexts."
        }
      ]
    },

    {
      // MODULE 3: POVERTY AND INEQUALITY ANALYSIS
      id: 3,
      title: "Poverty Dynamics and Inequality Measurement",
      completed: false,
      content: `# Poverty Dynamics and Inequality Measurement

Poverty reduction remains central to development economics, but understanding its multidimensional nature and dynamics requires sophisticated analytical tools.

## Defining and Measuring Poverty

### Absolute vs. Relative Poverty

**Absolute poverty:**
- Fixed threshold unaffected by overall societal wealth
- Usually based on minimum requirements for survival
- Example: World Bank's $2.15/day (2017 PPP)
- Useful for comparing across countries and time

**Relative poverty:**
- Defined relative to society's average standard
- Often 50-60% of median household income
- Captures social exclusion and inequality
- More relevant in developed countries

### Poverty Lines in Practice

**International poverty line:**
- $2.15/day for extreme poverty (2022 update)
- $3.65/day for lower-middle income countries
- $6.85/day for upper-middle income countries

**National poverty lines:**
- Country-specific calculations
- Based on cost of basic needs
- Vary by location (urban/rural differences)
- Updated periodically for inflation

## Poverty Measurement Tools

### 1. Headcount Ratio (P0)
Simplest measure: Proportion of population below poverty line

**Formula:** P0 = Np/N
Where: Np = number of poor, N = total population

**Limitations:**
- Doesn't measure depth of poverty
- Unchanged if poor become poorer
- Ignores inequality among the poor

### 2. Poverty Gap Index (P1)
Measures average shortfall from poverty line

**Formula:** P1 = (1/N) × Σ[(z - yi)/z]
Where: z = poverty line, yi = income of poor person i

**Advantages:**
- Captures depth of poverty
- Useful for estimating resource needs
- Sensitive to transfers among the poor

### 3. Squared Poverty Gap (P2)
Gives more weight to poorest of the poor

**Formula:** P2 = (1/N) × Σ[((z - yi)/z)²]

**Features:**
- Measures severity of poverty
- Particularly sensitive to distribution among poor
- Useful for targeting most vulnerable

## Multidimensional Poverty Framework

### Alkire-Foster Method
Identifies who is poor and examines how they are poor:

**Identification:**
1. Select dimensions and indicators
2. Set deprivation cutoff for each indicator
3. Determine poverty cutoff (k)
4. Identify as poor if deprivation score ≥ k

**Aggregation:**
- Adjusted headcount ratio (M0)
- Average deprivation share among poor (A)
- M0 = H × A (where H is headcount ratio)

## Inequality Measurement

### 1. Lorenz Curve
Graphical representation of income distribution:
- X-axis: Cumulative population percentage
- Y-axis: Cumulative income percentage
- 45° line: Perfect equality
- Curve below line: Actual distribution

### 2. Gini Coefficient
Area between Lorenz curve and equality line divided by total area below equality line

**Properties:**
- Range: 0 (perfect equality) to 1 (perfect inequality)
- Scale independent
- Population independent
- Satisfies transfer principle

### 3. Palma Ratio
Ratio of richest 10%'s income share to poorest 40%'s share

**Advantages:**
- Focuses on distribution tails
- Less sensitive to middle changes
- Simple interpretation

## Poverty Dynamics

### Chronic vs. Transient Poverty

**Chronic poverty:**
- Long-term deprivation (5+ years)
- Structural causes
- Intergenerational transmission
- Requires comprehensive interventions

**Transient poverty:**
- Temporary deprivation
- Often shock-induced
- More responsive to safety nets
- Self-correcting potential

### Poverty Traps
Self-reinforcing mechanisms that keep people poor:

**Nutrition-based traps:**
- Low income → poor nutrition → low productivity → low income

**Asset traps:**
- Lack of collateral → no credit → no investment → continued poverty

**Spatial traps:**
- Poor regions → limited opportunities → outmigration of talented → continued underdevelopment

## Policy Implications

### Targeting Approaches

**Universal programs:**
- Benefits all regardless of income
- Example: Primary education
- Advantages: No exclusion errors, political support
- Disadvantages: Higher cost, inclusion errors

**Means-tested programs:**
- Target based on income/wealth
- Example: Food stamps
- Advantages: Cost-effective, focused
- Disadvantages: Exclusion errors, stigma

**Proxy means testing:**
- Use observable characteristics correlated with poverty
- Example: Household assets, housing quality
- Advantages: Lower administrative cost
- Disadvantages: Imperfect targeting

### Graduation Programs
Sequenced interventions to escape poverty traps:
1. Consumption support
2. Asset transfer
3. Skills training
4. Savings promotion
5. Coaching support

Evidence shows sustainable impacts when implemented comprehensively.

## Emerging Challenges

**Climate change impacts:**
- Disproportionately affects poor
- Creates new poverty traps
- Requires adaptive social protection

**Technological disruption:**
- Automation threats to low-skill jobs
- Digital divide risks
- Need for lifelong learning systems

**Demographic transitions:**
- Aging populations in some regions
- Youth bulges in others
- Different social protection needs

Remember: Effective poverty reduction requires understanding not just how many are poor, but how poor they are, why they're poor, and what dynamics keep them poor.`,
      
      quiz: [
        {
          id: 1,
          question: "What is the World Bank's current extreme poverty line (2017 PPP)?",
          options: ["$1.00/day", "$1.90/day", "$2.15/day", "$5.00/day"],
          correctAnswer: 2,
          explanation: "The international extreme poverty line was updated to $2.15/day using 2017 purchasing power parity."
        },
        {
          id: 2,
          question: "What does the headcount ratio measure?",
          options: ["Depth of poverty", "Severity of poverty", "Proportion below poverty line", "Income inequality"],
          correctAnswer: 2,
          explanation: "Headcount ratio (P0) measures the percentage of population living below the poverty line."
        },
        {
          id: 3,
          question: "What is relative poverty?",
          options: ["Fixed monetary threshold", "Defined relative to societal average", "Only in rural areas", "Temporary deprivation"],
          correctAnswer: 1,
          explanation: "Relative poverty is defined in relation to the overall standard of living in a particular society."
        },
        {
          id: 4,
          question: "What does the poverty gap index (P1) capture that headcount ratio doesn't?",
          options: ["Only who is poor", "Depth of poverty", "Inequality among non-poor", "Wealth concentration"],
          correctAnswer: 1,
          explanation: "P1 measures how far below the poverty line the poor are on average."
        },
        {
          id: 5,
          question: "What range does the Gini coefficient fall within?",
          options: ["0-100", "0-1", "1-10", "0-50"],
          correctAnswer: 1,
          explanation: "The Gini coefficient ranges from 0 (perfect equality) to 1 (perfect inequality)."
        },
        {
          id: 6,
          question: "What distinguishes chronic poverty from transient poverty?",
          options: ["Duration", "Location", "Causes only", "Income level"],
          correctAnswer: 0,
          explanation: "Chronic poverty persists over long periods (typically 5+ years), while transient poverty is temporary."
        },
        {
          id: 7,
          question: "What is a poverty trap?",
          options: ["Temporary setback", "Self-reinforcing mechanism keeping people poor", "One-time shock", "Weather event"],
          correctAnswer: 1,
          explanation: "Poverty traps are vicious cycles where current poverty causes future poverty through various mechanisms."
        },
        {
          id: 8,
          question: "What does the squared poverty gap (P2) emphasize?",
          options: ["All poor equally", "Poorest of the poor", "Middle class", "Wealthy"],
          correctAnswer: 1,
          explanation: "P2 gives more weight to those furthest below the poverty line, measuring poverty severity."
        },
        {
          id: 9,
          question: "What does the Palma ratio compare?",
          options: ["Middle 50% to bottom 25%", "Richest 10% to poorest 40%", "Urban to rural", "Men to women"],
          correctAnswer: 1,
          explanation: "Palma ratio = income share of top 10% ÷ income share of bottom 40%."
        },
        {
          id: 10,
          question: "What is proxy means testing?",
          options: ["Direct income measurement", "Using observable characteristics correlated with poverty", "Universal targeting", "Self-declaration"],
          correctAnswer: 1,
          explanation: "Proxy means testing uses easily observable indicators (like housing quality) to estimate poverty likelihood."
        },
        {
          id: 11,
          question: "What is the main advantage of universal social programs?",
          options: ["No exclusion errors", "Lowest cost", "Perfect targeting", "Easy administration"],
          correctAnswer: 0,
          explanation: "Universal programs avoid excluding eligible beneficiaries (exclusion errors)."
        },
        {
          id: 12,
          question: "What does the Lorenz curve graphically represent?",
          options: ["GDP growth", "Income distribution", "Population density", "Education levels"],
          correctAnswer: 1,
          explanation: "The Lorenz curve plots cumulative income share against cumulative population share."
        },
        {
          id: 13,
          question: "Which poverty measure is most sensitive to transfers among the poor?",
          options: ["Headcount ratio", "Poverty gap index", "Squared poverty gap", "None are sensitive"],
          correctAnswer: 2,
          explanation: "Squared poverty gap (P2) is most sensitive to transfers from poorer to less poor individuals."
        },
        {
          id: 14,
          question: "What characterizes graduation programs?",
          options: ["Single intervention", "Sequenced comprehensive support", "Only cash transfers", "Temporary relief"],
          correctAnswer: 1,
          explanation: "Graduation programs provide sequenced support including assets, training, and coaching."
        },
        {
          id: 15,
          question: "What is an example of a nutrition-based poverty trap?",
          options: ["Low income → poor nutrition → low productivity → low income", "High education → high income", "Good health → high income", "Urban location → high income"],
          correctAnswer: 0,
          explanation: "This cycle shows how malnutrition reduces work capacity, perpetuating low income."
        },
        {
          id: 16,
          question: "What does the adjusted headcount ratio (M0) in multidimensional poverty represent?",
          options: ["Only incidence", "Incidence × intensity", "Only intensity", "Duration only"],
          correctAnswer: 1,
          explanation: "M0 = H × A, where H is incidence (headcount) and A is average intensity among the poor."
        },
        {
          id: 17,
          question: "What is means testing?",
          options: ["Targeting based on income/wealth", "Universal benefits", "Geographic targeting", "Random selection"],
          correctAnswer: 0,
          explanation: "Means testing determines eligibility based on financial means or income level."
        },
        {
          id: 18,
          question: "What demographic challenge do some developing countries face?",
          options: ["Youth bulges", "Only aging", "Stable populations", "No demographic issues"],
          correctAnswer: 0,
          explanation: "Many developing countries have large youth populations needing education and employment opportunities."
        },
        {
          id: 19,
          question: "What does the poverty cutoff (k) determine in multidimensional poverty measurement?",
          options: ["Who is considered poor", "Poverty line value", "Inequality level", "GDP threshold"],
          correctAnswer: 0,
          explanation: "The k cutoff determines how many deprivations qualify someone as multidimensionally poor."
        },
        {
          id: 20,
          question: "Why is understanding poverty dynamics important for policy?",
          options: ["One-size interventions work", "Different causes require different solutions", "Only temporary help needed", "Poverty is static"],
          correctAnswer: 1,
          explanation: "Chronic and transient poverty have different causes and require different policy responses."
        }
      ]
    },

    {
      // MODULE 4: DEVELOPMENT POLICY INSTRUMENTS
      id: 4,
      title: "Policy Instruments for Development",
      completed: false,
      content: `# Policy Instruments for Development

Effective development requires carefully designed policy instruments that address market failures, reduce poverty, and promote sustainable growth.

## Fiscal Policy for Development

### Taxation Systems

**Progressive vs. Regressive Taxation**

**Progressive taxes:**
- Tax rate increases with income/wealth
- Examples: Income tax brackets, wealth taxes
- Redistributive effect
- Potential disincentive effects

**Regressive taxes:**
- Lower-income pay higher percentage
- Examples: Sales taxes, value-added taxes
- Simpler administration
- Burden on poor

**Tax-to-GDP ratio benchmarks:**
- Low-income countries: 10-15%
- Middle-income countries: 15-25%
- High-income countries: 25-35%
- Scandinavian countries: 40-50%

### Public Expenditure Priorities

**Productive vs. Unproductive Spending**

**Productive investments:**
- Infrastructure (transport, energy, water)
- Education and health
- Research and development
- Agricultural extension

**Social protection:**
- Cash transfers
- Food subsidies
- Health insurance
- Pension systems

**Expenditure efficiency indicators:**
- Primary completion rate per education dollar
- Immunization coverage per health dollar
- Road quality per infrastructure dollar

## Monetary and Financial Policies

### Central Bank Functions

**Price stability:**
- Inflation targeting frameworks
- Typical targets: 2-4% for developing countries
- Exchange rate management
- Foreign reserve accumulation

**Financial inclusion:**
- Mobile banking regulations
- Microfinance supervision
- Credit information systems
- Payment system modernization

### Financial Development Indicators

**Depth:**
- Private credit/GDP ratio
- Stock market capitalization/GDP

**Access:**
- Bank branches per 100,000 adults
- ATMs per 100,000 adults
- Account ownership percentages

**Efficiency:**
- Net interest margin
- Overhead costs
- Concentration ratios

## Industrial and Trade Policy

### Industrial Policy Instruments

**Traditional tools:**
- Tariffs and quotas
- Subsidies to infant industries
- Export processing zones
- State-owned enterprises

**Modern approaches:**
- Innovation clusters
- Research partnerships
- Skills development programs
- Regulatory sandboxes

### Trade Liberalization Effects

**Potential benefits:**
- Lower consumer prices
- Increased competition
- Technology transfer
- Export market access

**Potential costs:**
- Job displacement
- Revenue losses
- Vulnerability to shocks
- Environmental pressures

## Social Policy Instruments

### Conditional Cash Transfers (CCTs)

**Design features:**
- Cash payments to poor households
- Conditions: School attendance, health check-ups
- Usually targeted to women
- Regular monitoring

**Evidence of effectiveness:**
- Increased school enrollment
- Improved health outcomes
- Poverty reduction
- Intergenerational benefits

### Universal Basic Services

**Alternative to cash transfers:**
- Free or subsidized healthcare
- Quality public education
- Affordable housing
- Public transportation

**Advantages:**
- Avoids stigma of targeting
- Builds social solidarity
- Creates public goods

## Agricultural and Rural Development

### Green Revolution Technologies

**Package approach:**
- High-yield varieties
- Irrigation infrastructure
- Chemical fertilizers
- Pesticides and herbicides

**Success factors:**
- Government extension services
- Credit availability
- Market access
- Price stabilization

### Land Reform Approaches

**Market-assisted:**
- Voluntary sales with subsidies
- Technical assistance
- Credit access

**Redistributive:**
- Expropriation with compensation
- Land ceilings
- Tenancy reforms

## Environmental Policy Instruments

### Market-Based Approaches

**Carbon pricing:**
- Carbon taxes
- Emissions trading systems
- Offset mechanisms

**Subsidy reforms:**
- Fossil fuel subsidy phase-out
- Renewable energy incentives
- Sustainable agriculture support

### Regulatory Approaches

**Command-and-control:**
- Emission standards
- Technology requirements
- Protected areas
- Bans on harmful substances

## Implementation Challenges

### Capacity Constraints

**Common limitations:**
- Technical expertise shortages
- Budget execution capacity
- Monitoring and evaluation systems
- Inter-agency coordination

### Corruption Risks

**Vulnerable areas:**
- Procurement processes
- Tax administration
- Licensing and permits
- Social program targeting

### Political Economy Factors

**Interest group influences:**
- Elite capture of benefits
- Urban bias in spending
- Short-term electoral cycles
- Resistance to reform

## Evidence-Based Policymaking

### Randomized Controlled Trials (RCTs)

**Application to policy:**
- Testing program effectiveness
- Comparing alternative designs
- Scaling successful interventions
- Building local research capacity

### Cost-Benefit Analysis

**Policy evaluation framework:**
- Quantifying benefits and costs
- Discounting future values
- Sensitivity analysis
- Distributional impacts

Remember: No policy instrument works equally well in all contexts. Effective development policy requires careful diagnosis, appropriate instrument selection, and continuous adaptation based on evidence and local conditions.`,
      
      quiz: [
        {
          id: 1,
          question: "What characterizes progressive taxation?",
          options: ["Flat rate for all", "Higher rates for higher incomes", "Higher rates for lower incomes", "No taxation"],
          correctAnswer: 1,
          explanation: "Progressive tax systems impose higher tax rates on higher income levels."
        },
        {
          id: 2,
          question: "What is a typical inflation target range for developing country central banks?",
          options: ["0-1%", "2-4%", "10-15%", "No target"],
          correctAnswer: 1,
          explanation: "Most developing countries target 2-4% inflation to balance price stability and growth."
        },
        {
          id: 3,
          question: "What do conditional cash transfers typically require?",
          options: ["No conditions", "School attendance or health visits", "Political participation", "Employment"],
          correctAnswer: 1,
          explanation: "CCTs provide cash to poor households conditional on children's school attendance and health check-ups."
        },
        {
          id: 4,
          question: "What tax is generally considered regressive?",
          options: ["Income tax", "Wealth tax", "Sales tax", "Corporate tax"],
          correctAnswer: 2,
          explanation: "Sales taxes take larger percentage of income from poor households than wealthy ones."
        },
        {
          id: 5,
          question: "What does financial inclusion aim to increase?",
          options: ["Only bank profits", "Access to financial services", "Interest rates", "Bank mergers"],
          correctAnswer: 1,
          explanation: "Financial inclusion expands access to banking, credit, insurance, and payment services."
        },
        {
          id: 6,
          question: "What was a key component of Green Revolution packages?",
          options: ["Organic farming only", "High-yield crop varieties", "Traditional seeds", "Subsistence focus"],
          correctAnswer: 1,
          explanation: "High-yielding varieties combined with irrigation and fertilizers dramatically increased yields."
        },
        {
          id: 7,
          question: "What is a carbon tax?",
          options: ["Tax on income", "Tax on carbon emissions", "Export tax", "Import tariff"],
          correctAnswer: 1,
          explanation: "Carbon taxes put a price on greenhouse gas emissions to incentivize reduction."
        },
        {
          id: 8,
          question: "What does tax-to-GDP ratio measure?",
          options: ["Government revenue relative to economy size", "Tax rates only", "GDP growth", "Government spending"],
          correctAnswer: 0,
          explanation: "Tax-to-GDP ratio = total tax revenue ÷ gross domestic product."
        },
        {
          id: 9,
          question: "What is a common challenge in policy implementation?",
          options: ["Perfect capacity", "Technical expertise shortages", "No political factors", "Unlimited budgets"],
          correctAnswer: 1,
          explanation: "Many developing countries face shortages of skilled personnel to implement complex policies."
        },
        {
          id: 10,
          question: "What do RCTs test in development policy?",
          options: ["Only theories", "Program effectiveness through random assignment", "Historical trends", "Cultural factors only"],
          correctAnswer: 1,
          explanation: "Randomized controlled trials randomly assign interventions to test causal effects."
        },
        {
          id: 11,
          question: "What is industrial policy?",
          options: ["Only free markets", "Government interventions to shape industrial structure", "No government role", "Only agriculture"],
          correctAnswer: 1,
          explanation: "Industrial policy uses various instruments to promote specific sectors or activities."
        },
        {
          id: 12,
          question: "What are universal basic services?",
          options: ["Cash only", "Free or subsidized public services for all", "Private services", "Only for rich"],
          correctAnswer: 1,
          explanation: "UBS provides essential services like healthcare and education universally."
        },
        {
          id: 13,
          question: "What is elite capture?",
          options: ["Broad benefit distribution", "Wealthy/powerful capturing program benefits", "Equal access", "No corruption"],
          correctAnswer: 1,
          explanation: "Elite capture occurs when powerful groups divert public resources for private benefit."
        },
        {
          id: 14,
          question: "What does cost-benefit analysis compare?",
          options: ["Only costs", "Only benefits", "Benefits and costs of policies", "Political opinions"],
          correctAnswer: 2,
          explanation: "CBA quantifies and compares all benefits and costs to evaluate policy efficiency."
        },
        {
          id: 15,
          question: "What are export processing zones?",
          options: ["Areas with special trade/investment rules", "No-trade zones", "Agricultural areas", "Residential areas"],
          correctAnswer: 0,
          explanation: "EPZs offer tax breaks and streamlined regulations to attract export-oriented investment."
        },
        {
          id: 16,
          question: "What is financial depth measured by?",
          options: ["Private credit/GDP ratio", "Number of banks only", "Interest rates", "Currency value"],
          correctAnswer: 0,
          explanation: "Private credit to GDP ratio indicates how developed financial intermediation is."
        },
        {
          id: 17,
          question: "What is a key advantage of universal programs?",
          options: ["Avoid exclusion errors", "Lowest cost always", "Perfect targeting", "Easy to cut"],
          correctAnswer: 0,
          explanation: "Universal programs don't mistakenly exclude eligible beneficiaries."
        },
        {
          id: 18,
          question: "What do command-and-control environmental regulations involve?",
          options: ["Market incentives only", "Specific standards and bans", "Voluntary measures", "No regulation"],
          correctAnswer: 1,
          explanation: "Command-and-control sets specific requirements rather than using price signals."
        },
        {
          id: 19,
          question: "What is urban bias?",
          options: ["Equal rural-urban spending", "Favoring urban areas in policy", "Only rural focus", "Balanced development"],
          correctAnswer: 1,
          explanation: "Urban bias refers to disproportionate resource allocation to cities over rural areas."
        },
        {
          id: 20,
          question: "Why is context important in policy design?",
          options: ["One size fits all", "Institutions/capacity vary", "No differences matter", "Only GDP matters"],
          correctAnswer: 1,
          explanation: "Effective policies must consider local institutions, capacity, and socioeconomic conditions."
        }
      ]
    },

    {
      // MODULE 5: INTERNATIONAL DEVELOPMENT ARCHITECTURE
      id: 5,
      title: "Global Development Architecture and Aid Effectiveness",
      completed: false,
      content: `# Global Development Architecture and Aid Effectiveness

The international development system involves complex interactions between bilateral donors, multilateral institutions, NGOs, and recipient countries. Understanding this architecture is essential for effective development cooperation.

## Major Development Actors

### Multilateral Institutions

**World Bank Group:**
- International Bank for Reconstruction and Development (IBRD): Middle-income countries
- International Development Association (IDA): Low-income countries (grants/concessional loans)
- International Finance Corporation (IFC): Private sector development
- Multilateral Investment Guarantee Agency (MIGA): Political risk insurance

**Regional Development Banks:**
- Asian Development Bank (ADB)
- African Development Bank (AfDB)
- Inter-American Development Bank (IDB)
- European Bank for Reconstruction and Development (EBRD)

**United Nations System:**
- UNDP: Development coordination
- UNICEF: Children's issues
- WHO: Health
- FAO: Food and agriculture
- UNESCO: Education, science, culture

### Bilateral Donors

**Major OECD-DAC members:**
- United States (USAID)
- United Kingdom (FCDO)
- Germany (GIZ)
- Japan (JICA)
- France (AFD)

**Emerging donors:**
- China (China Exim Bank, China Development Bank)
- India (Indian Technical and Economic Cooperation)
- Brazil (Brazilian Cooperation Agency)
- Gulf states (various funds)

## Aid Modalities and Instruments

### Types of Development Assistance

**Official Development Assistance (ODA):**
- Grants or concessional loans
- Primary objective: Economic development/welfare
- 0.7% GNI target for developed countries
- DAC reporting standards

**Other official flows:**
- Non-concessional loans
- Export credits
- Equity investments

**Private philanthropy:**
- Gates Foundation
- Ford Foundation
- Rockefeller Foundation
- Corporate social responsibility

### Aid Delivery Mechanisms

**Project aid:**
- Discrete investments with specific objectives
- Examples: School construction, road building
- Donor control over design/implementation
- Limited sustainability without government systems

**Program-based approaches:**
- Sector-wide approaches (SWAps)
- General budget support
- Pooled funding arrangements
- Use country systems and priorities

**Technical cooperation:**
- Expertise transfer
- Training and capacity building
- Research collaboration
- Policy advice

## Aid Effectiveness Principles

### Paris Declaration (2005)

**Five principles:**
1. **Ownership**: Partner countries exercise leadership
2. **Alignment**: Donors align with partner strategies
3. **Harmonization**: Donors coordinate actions
4. **Managing for results**: Focus on development outcomes
5. **Mutual accountability**: Transparency and shared responsibility

### Accra Agenda for Action (2008)

**Key additions:**
- Inclusive partnerships
- Capacity development focus
- Predictable aid flows
- Reduced fragmentation

### Busan Partnership (2011)

**New directions:**
- Inclusive development partnerships
- South-South cooperation recognition
- Private sector engagement
- Transparency and accountability

## Critiques and Reform Debates

### Aid Dependency Concerns

**Symptoms:**
- High aid-to-GDP ratios (some >20%)
- Distorted government priorities
- Weak domestic revenue mobilization
- Reduced accountability to citizens

**Mitigation strategies:**
- Gradual aid reduction plans
- Strengthened domestic taxation
- Results-based financing
- Time-bound assistance

### Conditionality Debate

**Traditional conditions:**
- Policy reforms required for aid
- Often macroeconomic/fiscal targets
- Sometimes governance reforms

**Criticisms:**
- Undermines ownership
- One-size-fits-all prescriptions
- Limited effectiveness evidence

**Alternative approaches:**
- Selectivity (aid to well-governed countries)
- Dialogue-based conditionality
- Ex-post conditionality

## Innovative Financing Mechanisms

### Results-Based Financing

**Pay-for-performance models:**
- Output-based aid
- Cash on delivery
- Social impact bonds
- Advance market commitments

**Advantages:**
- Focus on outcomes, not inputs
- Increased accountability
- Innovation incentives

### Blended Finance

**Public-private partnerships:**
- Concessional public funds leverage private investment
- Risk mitigation instruments
- Technical assistance for private projects
- Focus on sustainable development goals

### South-South Cooperation

**Distinctive features:**
- Technical expertise sharing
- Trade and investment links
- Less conditionality
- Different development experience relevance

## Global Public Goods Provision

### Climate Finance Architecture

**Key mechanisms:**
- Green Climate Fund
- Global Environment Facility
- Adaptation Fund
- Carbon markets

**Financing principles:**
- Common but differentiated responsibilities
- Additionality (beyond ODA)
- Grant-concessional balance

### Health Global Public Goods

**Financing mechanisms:**
- Global Fund to Fight AIDS, Tuberculosis and Malaria
- Gavi, the Vaccine Alliance
- Pandemic preparedness funds
- Research and development pooling

## Future Directions

### Digital Transformation

**Emerging opportunities:**
- Digital identification systems
- Mobile money for aid delivery
- Remote monitoring and evaluation
- Blockchain for transparency

### Fragile States Challenges

**Special approaches needed:**
- Conflict-sensitive programming
- State-building support
- Humanitarian-development nexus
- Flexible, rapid response

### Multilateral System Reform

**Current debates:**
- Voting power redistribution
- Increased developing country voice
- Better coordination among agencies
- Streamlined procedures

Remember: Effective development cooperation requires balancing donor accountability with recipient ownership, using evidence to improve approaches, and adapting to changing global challenges while maintaining focus on poverty reduction and sustainable development.`,
      
      quiz: [
        {
          id: 1,
          question: "Which World Bank institution provides concessional loans to low-income countries?",
          options: ["IBRD", "IDA", "IFC", "MIGA"],
          correctAnswer: 1,
          explanation: "International Development Association offers grants and low-interest loans to poorest countries."
        },
        {
          id: 2,
          question: "What percentage of GNI do developed countries aim to give as ODA?",
          options: ["0.3%", "0.7%", "1.0%", "2.0%"],
          correctAnswer: 1,
          explanation: "UN target is 0.7% of Gross National Income as Official Development Assistance."
        },
        {
          id: 3,
          question: "Which Paris Declaration principle emphasizes partner country leadership?",
          options: ["Alignment", "Ownership", "Harmonization", "Results"],
          correctAnswer: 1,
          explanation: "Ownership means developing countries set their own development strategies."
        },
        {
          id: 4,
          question: "What characterizes South-South cooperation?",
          options: ["Only northern donors", "Developing country partnerships", "No technical exchange", "Higher conditionality"],
          correctAnswer: 1,
          explanation: "South-South cooperation involves partnerships among developing countries."
        },
        {
          id: 5,
          question: "What is a key criticism of traditional aid conditionality?",
          options: ["Too much ownership", "Undermines recipient ownership", "No policy requirements", "Only voluntary"],
          correctAnswer: 1,
          explanation: "Conditionality requiring specific policies can undermine local ownership and priorities."
        },
        {
          id: 6,
          question: "What does blended finance combine?",
          options: ["Only public funds", "Public and private finance", "Only philanthropy", "Debt only"],
          correctAnswer: 1,
          explanation: "Blended finance uses public/concessional funds to mobilize private investment."
        },
        {
          id: 7,
          question: "What is project aid?",
          options: ["Budget support", "Discrete investments with specific objectives", "General funding", "Debt relief"],
          correctAnswer: 1,
          explanation: "Project aid funds specific investments like infrastructure rather than general budget support."
        },
        {
          id: 8,
          question: "Which UN agency focuses on children's issues?",
          options: ["UNDP", "UNICEF", "WHO", "FAO"],
          correctAnswer: 1,
          explanation: "UNICEF (United Nations Children's Fund) focuses on child health, education, and protection."
        },
        {
          id: 9,
          question: "What does aid dependency refer to?",
          options: ["Self-sufficiency", "High reliance on external assistance", "No aid needed", "Trade dependence"],
          correctAnswer: 1,
          explanation: "Aid dependency occurs when countries rely heavily on external assistance for basic functions."
        },
        {
          id: 10,
          question: "What is results-based financing?",
          options: ["Pay for inputs", "Pay for achieved outcomes", "No payment", "Automatic disbursement"],
          correctAnswer: 1,
          explanation: "Results-based financing disburses funds upon verification of agreed outcomes."
        },
        {
          id: 11,
          question: "What are sector-wide approaches (SWAps)?",
          options: ["Project-based aid", "Comprehensive sector programs using government systems", "Only donor projects", "Emergency aid"],
          correctAnswer: 1,
          explanation: "SWAps pool donor funding to support entire sectors through government systems."
        },
        {
          id: 12,
          question: "What is the Green Climate Fund's focus?",
          options: ["General development", "Climate change mitigation/adaptation", "Military spending", "Debt repayment"],
          correctAnswer: 1,
          explanation: "GCF finances climate change projects in developing countries."
        },
        {
          id: 13,
          question: "What does the principle of additionality mean in climate finance?",
          options: ["Counted as ODA", "Additional to existing ODA commitments", "Subtracted from ODA", "Same as ODA"],
          correctAnswer: 1,
          explanation: "Climate finance should be new/additional to traditional development assistance."
        },
        {
          id: 14,
          question: "What is technical cooperation?",
          options: ["Only cash transfers", "Expertise/knowledge transfer", "Infrastructure building", "Debt relief"],
          correctAnswer: 1,
          explanation: "Technical cooperation involves capacity building, training, and knowledge exchange."
        },
        {
          id: 15,
          question: "What does the humanitarian-development nexus address?",
          options: ["Only emergencies", "Linking relief with long-term development", "Only long-term projects", "Military intervention"],
          correctAnswer: 1,
          explanation: "This approach connects immediate humanitarian response with sustainable development."
        },
        {
          id: 16,
          question: "Which is an emerging donor country?",
          options: ["United States", "China", "Germany", "Japan"],
          correctAnswer: 1,
          explanation: "China has become a major provider of development finance, especially infrastructure loans."
        },
        {
          id: 17,
          question: "What does mutual accountability mean in aid effectiveness?",
          options: ["Only donors accountable", "Only recipients accountable", "Both donors and recipients accountable", "No accountability"],
          correctAnswer: 2,
          explanation: "Mutual accountability means both donors and partner countries are transparent and answerable."
        },
        {
          id: 18,
          question: "What is a social impact bond?",
          options: ["Traditional bond", "Pay-for-success model with private investors", "Government bond", "Corporate bond"],
          correctAnswer: 1,
          explanation: "SIBs involve private investors funding social programs, repaid by government if outcomes achieved."
        },
        {
          id: 19,
          question: "What is fragmentation in aid?",
          options: ["Too few projects", "Many small projects from multiple donors", "Only large projects", "Integrated approach"],
          correctAnswer: 1,
          explanation: "Fragmentation occurs when many donors fund many small projects, increasing transaction costs."
        },
        {
          id: 20,
          question: "Why is digital transformation important for development cooperation?",
          options: ["No impact", "Improves transparency and efficiency", "Only for rich countries", "Complicates everything"],
          correctAnswer: 1,
          explanation: "Digital tools can enhance aid transparency, delivery efficiency, and monitoring."
        }
      ]
    },

    {
      // MODULE 6: EVALUATION AND EVIDENCE-BASED POLICY
      id: 6,
      title: "Development Evaluation and Evidence-Based Policy",
      completed: false,
      content: `# Development Evaluation and Evidence-Based Policy

Rigorous evaluation generates evidence about what works in development, enabling better policy decisions and more effective resource allocation.

## Evaluation Frameworks and Approaches

### Theory of Change

**Definition:** A comprehensive description of how and why a desired change is expected to happen in a particular context.

**Key components:**
- **Long-term goal**: Ultimate desired impact
- **Outcomes**: Intermediate changes needed
- **Outputs**: Direct products/deliverables
- **Activities**: Actions undertaken
- **Assumptions**: Conditions needed for success
- **Context**: External factors influencing change

**Benefits:**
- Clarifies causal pathways
- Identifies critical assumptions
- Guides monitoring indicators
- Supports adaptive management

### Logical Framework (LogFrame)

**Standard matrix format:**

| | Intervention Logic | Indicators | Means of Verification | Assumptions |
|---|---|---|---|---|
| **Goal** | Ultimate impact | Impact indicators | Data sources | Critical assumptions |
| **Purpose** | Direct outcome | Outcome indicators | Data sources | Important assumptions |
| **Outputs** | Products/services | Output indicators | Data sources | Necessary conditions |
| **Activities** | Actions to be taken | Input indicators | Records | Preconditions |

**Strengths:**
- Systematic planning tool
- Clear results hierarchy
- Identifies monitoring needs

**Limitations:**
- Can be rigid/linear
- May oversimplify complexity
- Often becomes compliance exercise

## Evaluation Methods

### Quantitative Methods

**Randomized Controlled Trials (RCTs):**
- Random assignment to treatment/control
- Gold standard for causal inference
- High internal validity
- Challenges: Ethics, cost, external validity

**Quasi-experimental designs:**
- Regression discontinuity design
- Difference-in-differences
- Instrumental variables
- Matching methods (propensity score)

**Before-after comparisons:**
- Simple pre-post assessment
- Weak for causal attribution
- Useful for descriptive tracking

### Qualitative Methods

**In-depth interviews:**
- Understanding perspectives/experiences
- Exploring unintended consequences
- Contextualizing quantitative findings

**Focus group discussions:**
- Group dynamics and consensus
- Social norms exploration
- Community perspectives

**Case studies:**
- Detailed examination of specific instances
- Process tracing of causal mechanisms
- Context-rich understanding

**Participatory methods:**
- Community scorecards
- Social audits
- Most significant change technique

### Mixed Methods Approaches

**Integration strategies:**
- Triangulation: Cross-verifying findings
- Complementarity: Elaborating/enhancing results
- Development: Using one method to inform another
- Expansion: Addressing different questions

## Evaluation Criteria

### OECD-DAC Evaluation Criteria

**Relevance:**
- Appropriateness of objectives
- Alignment with needs/priorities
- Consistency with international commitments

**Effectiveness:**
- Achievement of objectives
- Relationship between outputs and outcomes
- Factors influencing achievement

**Efficiency:**
- Economy: Cost minimization
- Productivity: Output/input ratio
- Timeliness: Delivery schedule adherence

**Impact:**
- Positive and negative long-term effects
- Direct and indirect consequences
- Sustainability of changes

**Sustainability:**
- Continuation of benefits after assistance ends
- Financial, institutional, environmental dimensions
- Resilience to risks/shocks

### Equity-Focused Evaluation

**Additional considerations:**
- Distribution of benefits/costs
- Inclusion of marginalized groups
- Gender equality impacts
- Human rights dimensions

## Evidence Synthesis and Use

### Systematic Reviews

**Process:**
1. Formulate review question
2. Search for all relevant studies
3. Assess study quality
4. Synthesize findings
5. Draw conclusions

**Key organizations:**
- Cochrane Collaboration (health)
- Campbell Collaboration (social/education)
- 3ie (International Initiative for Impact Evaluation)
- J-PAL (Abdul Latif Jameel Poverty Action Lab)

### Evidence Grading Systems

**Hierarchy of evidence:**
1. Systematic reviews of RCTs
2. Individual RCTs
3. Quasi-experimental studies
4. Observational studies
5. Expert opinion/case reports

**Contextual factors:**
- Quality of individual studies
- Consistency across studies
- Directness to policy question
- Publication bias assessment

## Institutionalizing Evaluation

### National Evaluation Systems

**Key elements:**
- Legal/policy frameworks
- Institutional arrangements
- Human capacity development
- Data infrastructure
- Funding mechanisms

**Global examples:**
- South Africa: National Evaluation Policy Framework
- Mexico: CONEVAL (National Council for Evaluation)
- Uganda: Office of the Prime Minister evaluation function
- Colombia: National Planning Department evaluation unit

### Evaluation Capacity Development

**Components:**
- Professional training programs
- Mentoring and coaching
- Communities of practice
- South-South learning exchanges
- Academic partnerships

## Challenges in Development Evaluation

### Attribution Problems

**Common issues:**
- Multiple interventions simultaneously
- External factors influencing outcomes
- Time lags between intervention and impact
- Spillover/contamination effects

**Mitigation strategies:**
- Counterfactual analysis
- Contribution analysis
- Process tracing
- Mixed methods approaches

### Political Economy Constraints

**Evaluation use barriers:**
- Threat to vested interests
- Confirmation bias (seeking supportive evidence)
- Timing mismatches (election cycles)
- Resource constraints favoring implementation over evaluation

**Promoting use:**
- Stakeholder engagement throughout
- Timely, accessible reporting
- Policy-relevant questions
- Champions within government

## Emerging Trends

### Real-Time Evaluation

**Adaptive management applications:**
- Rapid feedback loops
- Course correction during implementation
- Learning while doing
- Particularly relevant in fragile contexts

### Big Data and AI Applications

**New opportunities:**
- Satellite imagery for remote monitoring
- Mobile phone data for poverty mapping
- Social media analysis for sentiment tracking
- Machine learning for prediction/pattern detection

### Complexity-Aware Evaluation

**Systems thinking approaches:**
- Recognizing nonlinearity and emergence
- Understanding feedback loops
- Mapping stakeholder networks
- Appreciating contextual uniqueness

## Ethical Considerations

### Evaluation Ethics Principles

**Key standards:**
- Informed consent
- Confidentiality and anonymity
- Do no harm
- Cultural sensitivity
- Conflict of interest management
- Transparency in methodology

### Indigenous and Local Knowledge

**Integrating perspectives:**
- Respecting diverse knowledge systems
- Co-designing evaluation approaches
- Validating findings with communities
- Ensuring benefit sharing

Remember: Evaluation is not just about accountability, but about learning and improvement. The most valuable evaluations are those that are used to make better decisions, adapt programs, and ultimately improve development outcomes for those we seek to serve.`,
      
      quiz: [
        {
          id: 1,
          question: "What does Theory of Change describe?",
          options: ["Only activities", "How and why change is expected", "Only outcomes", "Budget details"],
          correctAnswer: 1,
          explanation: "Theory of Change explains the causal pathway from activities to desired long-term impact."
        },
        {
          id: 2,
          question: "What is the gold standard for causal inference in evaluation?",
          options: ["Case studies", "Randomized Controlled Trials", "Expert opinion", "Before-after comparisons"],
          correctAnswer: 1,
          explanation: "RCTs with random assignment provide strongest evidence for causal effects."
        },
        {
          id: 3,
          question: "Which OECD-DAC criterion assesses whether benefits continue after assistance ends?",
          options: ["Effectiveness", "Efficiency", "Sustainability", "Relevance"],
          correctAnswer: 2,
          explanation: "Sustainability evaluates continuation of benefits post-intervention."
        },
        {
          id: 4,
          question: "What do systematic reviews aim to do?",
          options: ["Review one study", "Synthesize all relevant studies on a question", "Only qualitative studies", "Only new studies"],
          correctAnswer: 1,
          explanation: "Systematic reviews comprehensively identify, appraise, and synthesize all relevant evidence."
        },
        {
          id: 5,
          question: "What is the purpose of a Logical Framework?",
          options: ["Only budgeting", "Systematic planning and results hierarchy", "Only activity listing", "Personnel management"],
          correctAnswer: 1,
          explanation: "LogFrame systematically links activities to outputs, outcomes, and goals with indicators."
        },
        {
          id: 6,
          question: "Which is a quasi-experimental design?",
          options: ["RCT", "Difference-in-differences", "Expert opinion", "Anecdote"],
          correctAnswer: 1,
          explanation: "Difference-in-differences compares changes over time between treatment and comparison groups."
        },
        {
          id: 7,
          question: "What does attribution refer to in evaluation?",
          options: ["Budget allocation", "Crediting changes to specific interventions", "Only positive outcomes", "Donor recognition"],
          correctAnswer: 1,
          explanation: "Attribution assesses whether observed changes resulted from the intervention versus other factors."
        },
        {
          id: 8,
          question: "What is real-time evaluation used for?",
          options: ["Only final reports", "Adaptive management during implementation", "Historical analysis", "Theoretical research"],
          correctAnswer: 1,
          explanation: "Real-time evaluation provides rapid feedback for course correction during implementation."
        },
        {
          id: 9,
          question: "What hierarchy level is individual RCT evidence?",
          options: ["Lowest", "Second highest (after systematic reviews)", "Middle", "Not ranked"],
          correctAnswer: 1,
          explanation: "Individual RCTs provide strong evidence, second only to systematic reviews of multiple RCTs."
        },
        {
          id: 10,
          question: "What does equity-focused evaluation consider?",
          options: ["Only average impacts", "Distribution of benefits among groups", "Only cost efficiency", "Donor preferences"],
          correctAnswer: 1,
          explanation: "Equity-focused evaluation examines who benefits and who doesn't, including marginalized groups."
        },
        {
          id: 11,
          question: "What is participatory evaluation?",
          options: ["Experts only", "Involving stakeholders in the process", "Donor-driven", "Desk-based only"],
          correctAnswer: 1,
          explanation: "Participatory evaluation engages program stakeholders in design, data collection, and analysis."
        },
        {
          id: 12,
          question: "What does 'do no harm' mean in evaluation ethics?",
          options: ["Maximize harm", "Avoid causing harm through evaluation", "Ignore risks", "Only physical harm"],
          correctAnswer: 1,
          explanation: "Evaluators must avoid causing psychological, social, or physical harm to participants."
        },
        {
          id: 13,
          question: "What is contribution analysis?",
          options: ["Budget analysis", "Assessing an intervention's contribution to outcomes", "Only donor contribution", "Personnel contribution"],
          correctAnswer: 1,
          explanation: "Contribution analysis examines whether and how an intervention contributed to observed changes."
        },
        {
          id: 14,
          question: "Why is mixed methods evaluation valuable?",
          options: ["Only one perspective", "Combines strengths of quantitative and qualitative", "More expensive only", "Simpler analysis"],
          correctAnswer: 1,
          explanation: "Mixed methods provide both statistical trends and contextual understanding."
        },
        {
          id: 15,
          question: "What does external validity refer to?",
          options: ["Internal consistency", "Generalizability to other contexts", "Statistical significance", "Measurement accuracy"],
          correctAnswer: 1,
          explanation: "External validity assesses whether findings apply to other populations/settings."
        },
        {
          id: 16,
          question: "What is process tracing in evaluation?",
          options: ["Only outcomes", "Examining causal mechanisms step-by-step", "Budget tracking", "Personnel tracking"],
          correctAnswer: 1,
          explanation: "Process tracing investigates the causal chain linking interventions to outcomes."
        },
        {
          id: 17,
          question: "What is a key barrier to evaluation use?",
          options: ["Too much evidence", "Political economy constraints", "Perfect timing", "Unlimited resources"],
          correctAnswer: 1,
          explanation: "Political interests, timing mismatches, and confirmation bias can limit evaluation use."
        },
        {
          id: 18,
          question: "What does complexity-aware evaluation recognize?",
          options: ["Simple linearity", "Nonlinearity and system interactions", "Only direct effects", "Isolated interventions"],
          correctAnswer: 1,
          explanation: "Complexity-aware approaches acknowledge systems thinking and emergent properties."
        },
        {
          id: 19,
          question: "What is indigenous knowledge integration in evaluation?",
          options: ["Ignoring local knowledge", "Respecting and incorporating local knowledge systems", "Only scientific knowledge", "Donor knowledge only"],
          correctAnswer: 1,
          explanation: "Integrating indigenous knowledge respects diverse epistemologies and improves relevance."
        },
        {
          id: 20,
          question: "What is the ultimate purpose of development evaluation?",
          options: ["Only accountability", "Learning and improving development outcomes", "Punishing failure", "Academic publication"],
          correctAnswer: 1,
          explanation: "While important for accountability, evaluation's primary value is learning to improve future interventions."
        }
      ]
    }
  ],

  // 3. FINAL EXAM (40 Questions - 6-7 questions from each module)
  finalExam: {
    id: "dev-econ-diploma-exam",
    title: "Development Economics Diploma Final Exam",
    passingScore: 75,
    questions: [
      // Module 1 Questions (7)
      {
        id: 1,
        module: 1,
        question: "What does HDI combine to measure development?",
        options: ["Health, Education, Standard of Living", "GDP only", "Military power", "Natural resources"],
        correctAnswer: 0,
        explanation: "HDI combines life expectancy (health), education access/attainment, and GNI per capita (standard of living)."
      },
      {
        id: 2,
        module: 1,
        question: "What does a Gini coefficient of 0.30 indicate?",
        options: ["Perfect equality", "Moderate inequality", "High inequality", "Perfect inequality"],
        correctAnswer: 1,
        explanation: "0.25-0.35 represents moderate income inequality."
      },
      {
        id: 3,
        module: 1,
        question: "How many Sustainable Development Goals are there?",
        options: ["10", "15", "17", "20"],
        correctAnswer: 2,
        explanation: "The 2030 Agenda established 17 comprehensive goals."
      },
      {
        id: 4,
        module: 1,
        question: "What does MPI measure that income poverty measures miss?",
        options: ["Only monetary poverty", "Overlapping deprivations", "GDP growth", "Export earnings"],
        correctAnswer: 1,
        explanation: "MPI captures how different types of deprivation overlap in people's lives."
      },
      {
        id: 5,
        module: 1,
        question: "What is the World Bank's extreme poverty line (2017 PPP)?",
        options: ["$1.00/day", "$1.90/day", "$2.15/day", "$5.00/day"],
        correctAnswer: 2,
        explanation: "Updated to $2.15/day using 2017 purchasing power parity calculations."
      },
      {
        id: 6,
        module: 1,
        question: "Which SDG focuses on climate action?",
        options: ["SDG 7", "SDG 11", "SDG 13", "SDG 15"],
        correctAnswer: 2,
        explanation: "SDG 13: Take urgent action to combat climate change and its impacts."
      },
      {
        id: 7,
        module: 1,
        question: "What principle suggests measurement shapes priorities?",
        options: ["What gets measured gets managed", "Measure everything", "Ignore measurement", "Only count money"],
        correctAnswer: 0,
        explanation: "The choice of indicators influences what policymakers focus on and resource allocation."
      },
      // Module 2 Questions (7)
      {
        id: 8,
        module: 2,
        question: "How many stages does Rostow's modernization theory propose?",
        options: ["3", "5", "7", "10"],
        correctAnswer: 1,
        explanation: "Five linear stages from traditional society to high mass consumption."
      },
      {
        id: 9,
        module: 2,
        question: "What is central to Amartya Sen's development approach?",
        options: ["GDP growth", "Freedom expansion", "Industrialization", "Export promotion"],
        correctAnswer: 1,
        explanation: "Sen defines development as expansion of substantive freedoms and capabilities."
      },
      {
        id: 10,
        module: 2,
        question: "What do dependency theorists argue about core-periphery relations?",
        options: ["Equal partnership", "Core exploits periphery", "No relationship", "Periphery leads"],
        correctAnswer: 1,
        explanation: "Core (developed) countries exploit periphery (developing) countries according to dependency theory."
      },
      {
        id: 11,
        module: 2,
        question: "What are the three pillars of sustainable development?",
        options: ["Economic, Social, Environmental", "Urban, Rural, Coastal", "Government, Private, NGO", "Local, National, Global"],
        correctAnswer: 0,
        explanation: "Balances economic growth, social inclusion, and environmental protection."
      },
      {
        id: 12,
        module: 2,
        question: "What does New Institutional Economics emphasize?",
        options: ["Only technology", "Role of institutions", "Natural resources only", "Individual traits"],
        correctAnswer: 1,
        explanation: "Focuses on how formal and informal institutions shape economic outcomes."
      },
      {
        id: 13,
        module: 2,
        question: "What was a key Washington Consensus policy?",
        options: ["Market liberalization", "Import substitution", "Capital controls", "Nationalization"],
        correctAnswer: 0,
        explanation: "Emphasized market liberalization, privatization, and deregulation."
      },
      {
        id: 14,
        module: 2,
        question: "What does inclusive growth prioritize?",
        options: ["Only wealthy", "Opportunities for all", "Urban bias", "Export focus"],
        correctAnswer: 1,
        explanation: "Creates broad-based opportunities and reduces inequality."
      },
      // Module 3 Questions (7)
      {
        id: 15,
        module: 3,
        question: "What does the headcount ratio measure?",
        options: ["Poverty depth", "Proportion below poverty line", "Inequality", "Severity"],
        correctAnswer: 1,
        explanation: "Percentage of population living below the poverty line."
      },
      {
        id: 16,
        module: 3,
        question: "What does the poverty gap index (P1) capture?",
        options: ["Only who is poor", "Depth of poverty", "Severity", "Inequality among rich"],
        correctAnswer: 1,
        explanation: "Average shortfall of the poor from the poverty line."
      },
      {
        id: 17,
        module: 3,
        question: "What distinguishes chronic from transient poverty?",
        options: ["Location", "Duration", "Income level", "Causes only"],
        correctAnswer: 1,
        explanation: "Chronic poverty persists long-term (5+ years), transient is temporary."
      },
      {
        id: 18,
        module: 3,
        question: "What is a poverty trap?",
        options: ["Temporary setback", "Self-reinforcing mechanism", "One-time shock", "Weather event"],
        correctAnswer: 1,
        explanation: "Vicious cycle where current poverty causes future poverty."
      },
      {
        id: 19,
        module: 3,
        question: "What does the Palma ratio compare?",
        options: ["Middle to bottom", "Richest 10% to poorest 40%", "Urban to rural", "Men to women"],
        correctAnswer: 1,
        explanation: "Income share of top 10% divided by income share of bottom 40%."
      },
      {
        id: 20,
        module: 3,
        question: "What is proxy means testing?",
        options: ["Direct income measurement", "Using observable characteristics", "Universal", "Self-declaration"],
        correctAnswer: 1,
        explanation: "Uses observable indicators correlated with poverty to estimate eligibility."
      },
      {
        id: 21,
        module: 3,
        question: "What characterizes graduation programs?",
        options: ["Single intervention", "Sequenced comprehensive support", "Cash only", "Temporary relief"],
        correctAnswer: 1,
        explanation: "Provides sequenced support including assets, training, and coaching."
      },
      // Module 4 Questions (6)
      {
        id: 22,
        module: 4,
        question: "What characterizes progressive taxation?",
        options: ["Flat rate", "Higher rates for higher incomes", "Higher rates for poor", "No taxation"],
        correctAnswer: 1,
        explanation: "Tax rates increase as income/wealth increases."
      },
      {
        id: 23,
        module: 4,
        question: "What do conditional cash transfers typically require?",
        options: ["No conditions", "School/health conditions", "Political participation", "Employment"],
        correctAnswer: 1,
        explanation: "Usually require children's school attendance and health check-ups."
      },
      {
        id: 24,
        module: 4,
        question: "What is a typical inflation target for developing countries?",
        options: ["0-1%", "2-4%", "10-15%", "No target"],
        correctAnswer: 1,
        explanation: "Balances price stability with growth objectives."
      },
      {
        id: 25,
        module: 4,
        question: "What is industrial policy?",
        options: ["Only free markets", "Government shaping industrial structure", "No intervention", "Only agriculture"],
        correctAnswer: 1,
        explanation: "Government interventions to promote specific sectors or activities."
      },
      {
        id: 26,
        module: 4,
        question: "What is elite capture?",
        options: ["Broad distribution", "Wealthy capturing benefits", "Equal access", "No corruption"],
        correctAnswer: 1,
        explanation: "Powerful groups diverting public resources for private benefit."
      },
      {
        id: 27,
        module: 4,
        question: "What does cost-benefit analysis compare?",
        options: ["Only costs", "Only benefits", "Benefits and costs", "Political views"],
        correctAnswer: 2,
        explanation: "Quantifies and compares all benefits and costs to evaluate policy efficiency."
      },
      // Module 5 Questions (6)
      {
        id: 28,
        module: 5,
        question: "Which World Bank institution serves low-income countries with concessional loans?",
        options: ["IBRD", "IDA", "IFC", "MIGA"],
        correctAnswer: 1,
        explanation: "International Development Association provides grants and low-interest loans."
      },
      {
        id: 29,
        module: 5,
        question: "What is the ODA target percentage of GNI?",
        options: ["0.3%", "0.7%", "1.0%", "2.0%"],
        correctAnswer: 1,
        explanation: "UN target of 0.7% of Gross National Income as Official Development Assistance."
      },
      {
        id: 30,
        module: 5,
        question: "Which Paris Declaration principle emphasizes partner leadership?",
        options: ["Alignment", "Ownership", "Harmonization", "Results"],
        correctAnswer: 1,
        explanation: "Ownership: partner countries exercise leadership over their development strategies."
      },
      {
        id: 31,
        module: 5,
        question: "What characterizes South-South cooperation?",
        options: ["Northern donors only", "Developing country partnerships", "Higher conditionality", "No technical exchange"],
        correctAnswer: 1,
        explanation: "Partnerships among developing countries sharing experiences and resources."
      },
      {
        id: 32,
        module: 5,
        question: "What is blended finance?",
        options: ["Only public funds", "Public and private finance combined", "Only philanthropy", "Debt only"],
        correctAnswer: 1,
        explanation: "Uses public/concessional funds to mobilize private investment for development."
      },
      {
        id: 33,
        module: 5,
        question: "What is results-based financing?",
        options: ["Pay for inputs", "Pay for achieved outcomes", "No payment", "Automatic"],
        correctAnswer: 1,
        explanation: "Disburses funds upon verification of agreed outcomes/ results."
      },
      // Module 6 Questions (7)
      {
        id: 34,
        module: 6,
        question: "What does Theory of Change explain?",
        options: ["Only activities", "How and why change is expected", "Only outcomes", "Budget"],
        correctAnswer: 1,
        explanation: "The causal pathway from activities to desired long-term impact."
      },
      {
        id: 35,
        module: 6,
        question: "What is the gold standard for causal inference?",
        options: ["Case studies", "Randomized Controlled Trials", "Expert opinion", "Before-after"],
        correctAnswer: 1,
        explanation: "RCTs with random assignment provide strongest evidence for causal effects."
      },
      {
        id: 36,
        module: 6,
        question: "Which OECD-DAC criterion assesses benefit continuation?",
        options: ["Effectiveness", "Efficiency", "Sustainability", "Relevance"],
        correctAnswer: 2,
        explanation: "Sustainability: whether benefits continue after assistance ends."
      },
      {
        id: 37,
        module: 6,
        question: "What do systematic reviews do?",
        options: ["Review one study", "Synthesize all relevant studies", "Only qualitative", "Only new studies"],
        correctAnswer: 1,
        explanation: "Comprehensively identify, appraise, and synthesize all relevant evidence on a question."
      },
      {
        id: 38,
        module: 6,
        question: "What is attribution in evaluation?",
        options: ["Budget allocation", "Crediting changes to interventions", "Only positive outcomes", "Donor recognition"],
        correctAnswer: 1,
        explanation: "Assessing whether observed changes resulted from the intervention."
      },
      {
        id: 39,
        module: 6,
        question: "What is real-time evaluation used for?",
        options: ["Only final reports", "Adaptive management", "Historical analysis", "Theoretical research"],
        correctAnswer: 1,
        explanation: "Provides rapid feedback for course correction during implementation."
      },
      {
        id: 40,
        module: 6,
        question: "What is the ultimate purpose of development evaluation?",
        options: ["Only accountability", "Learning and improvement", "Punishing failure", "Academic publication"],
        correctAnswer: 1,
        explanation: "Primary value is learning to improve future development interventions and outcomes."
      }
    ]
  }
};

export default developmentEconomicsDiploma;
