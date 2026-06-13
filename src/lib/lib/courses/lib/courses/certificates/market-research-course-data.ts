// market-research-diploma.ts

export const marketResearchDiploma = {
  // COURSE METADATA & IDENTIFICATION
  id: "market-research-diploma",
  title: "Market Research (Diploma)",
  description: "Advanced market research techniques for strategic decision-making. Learn to design, execute, and analyze comprehensive market research studies to drive business growth and innovation.",
  duration: "10 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  prerequisite: "Questionnaire Design (Certificate) or equivalent knowledge",
  icon: "📊",
  badge: "Diploma",
  learningOutcomes: [
    "Design comprehensive market research studies",
    "Apply advanced data collection methods",
    "Analyze complex market data",
    "Interpret research findings for business strategy",
    "Present research insights effectively",
    "Manage market research projects end-to-end"
  ],

  // MODULE ARCHITECTURE - 10 COMPREHENSIVE MODULES
  modules: [
    {
      id: 1,
      title: "Advanced Research Design",
      content: `
## Strategic Research Planning

Market research begins with a solid research design that aligns with business objectives. Advanced research design goes beyond basic surveys to create comprehensive studies that provide deep insights.

### Research Design Frameworks

Three advanced frameworks guide strategic research:
1. **Exploratory Research**: Used when little is known about a topic
2. **Descriptive Research**: Documents characteristics of markets
3. **Causal Research**: Determines cause-effect relationships

Each framework serves different purposes and requires different methodologies.

### Research Objectives Formulation

Clear objectives drive effective research:
- **Business Objectives**: What the company needs to achieve
- **Research Objectives**: What the research must accomplish
- **Information Needs**: Specific data required for decisions
- **Success Metrics**: How research success will be measured

Objectives should be SMART: Specific, Measurable, Achievable, Relevant, Time-bound.

### Research Proposals

Professional research proposals include:
- **Executive Summary**: Brief overview of the study
- **Background**: Context and business problem
- **Objectives**: Clear research goals
- **Methodology**: Detailed research approach
- **Timeline**: Project schedule with milestones
- **Budget**: Cost breakdown and justification
- **Deliverables**: Expected outputs and formats

A strong proposal secures buy-in and guides execution.

### Ethical Considerations

Advanced research maintains high ethical standards:
- **Informed Consent**: Participants understand and agree
- **Confidentiality**: Protecting participant information
- **Data Privacy**: Compliance with regulations
- **Transparency**: Clear about research purposes
- **Avoiding Harm**: Protecting participants from negative consequences

Ethical research builds trust and produces reliable data.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What type of research is used when little is known about a topic?",
          options: [
            "Descriptive Research",
            "Causal Research",
            "Exploratory Research",
            "Quantitative Research"
          ],
          correctAnswer: 2,
          explanation: "Exploratory research helps understand new or unclear topics before designing more structured studies."
        },
        {
          id: 2,
          question: "Which research documents characteristics of markets?",
          options: [
            "Exploratory Research",
            "Descriptive Research",
            "Causal Research",
            "Qualitative Research"
          ],
          correctAnswer: 1,
          explanation: "Descriptive research measures and describes market characteristics, behaviors, and trends."
        },
        {
          id: 3,
          question: "What determines cause-effect relationships?",
          options: [
            "Descriptive Research",
            "Exploratory Research",
            "Causal Research",
            "Secondary Research"
          ],
          correctAnswer: 2,
          explanation: "Causal research uses experiments to determine if changes in one variable cause changes in another."
        },
        {
          id: 4,
          question: "What does SMART stand for in research objectives?",
          options: [
            "Simple, Measurable, Achievable, Realistic, Timely",
            "Specific, Measurable, Achievable, Relevant, Time-bound",
            "Strategic, Meaningful, Actionable, Relevant, Timely",
            "Simple, Meaningful, Achievable, Relevant, Time-bound"
          ],
          correctAnswer: 1,
          explanation: "SMART objectives are Specific, Measurable, Achievable, Relevant, and Time-bound for clear guidance."
        },
        {
          id: 5,
          question: "What provides a brief overview of the study?",
          options: [
            "Background",
            "Executive Summary",
            "Methodology",
            "Budget"
          ],
          correctAnswer: 1,
          explanation: "The executive summary gives decision-makers a quick understanding of the research proposal."
        },
        {
          id: 6,
          question: "What section explains the business problem?",
          options: [
            "Executive Summary",
            "Background",
            "Objectives",
            "Timeline"
          ],
          correctAnswer: 1,
          explanation: "The background section provides context and explains why the research is needed."
        },
        {
          id: 7,
          question: "What details the research approach?",
          options: [
            "Background",
            "Objectives",
            "Methodology",
            "Budget"
          ],
          correctAnswer: 2,
          explanation: "The methodology section describes how the research will be conducted step by step."
        },
        {
          id: 8,
          question: "What includes project milestones?",
          options: [
            "Methodology",
            "Timeline",
            "Budget",
            "Deliverables"
          ],
          correctAnswer: 1,
          explanation: "The timeline outlines the project schedule with key milestones for tracking progress."
        },
        {
          id: 9,
          question: "What ethical principle requires participant understanding?",
          options: [
            "Confidentiality",
            "Informed Consent",
            "Data Privacy",
            "Transparency"
          ],
          correctAnswer: 1,
          explanation: "Informed consent means participants fully understand the research before agreeing to participate."
        },
        {
          id: 10,
          question: "What protects participant information?",
          options: [
            "Informed Consent",
            "Confidentiality",
            "Transparency",
            "Avoiding Harm"
          ],
          correctAnswer: 1,
          explanation: "Confidentiality ensures participant information is kept private and not disclosed improperly."
        },
        {
          id: 11,
          question: "What ensures compliance with regulations?",
          options: [
            "Confidentiality",
            "Data Privacy",
            "Transparency",
            "Avoiding Harm"
          ],
          correctAnswer: 1,
          explanation: "Data privacy compliance follows laws and regulations about collecting and using personal data."
        },
        {
          id: 12,
          question: "What means being clear about research purposes?",
          options: [
            "Data Privacy",
            "Transparency",
            "Informed Consent",
            "Avoiding Harm"
          ],
          correctAnswer: 1,
          explanation: "Transparency involves openly explaining research purposes, methods, and potential uses of data."
        },
        {
          id: 13,
          question: "What protects participants from negative consequences?",
          options: [
            "Transparency",
            "Avoiding Harm",
            "Informed Consent",
            "Data Privacy"
          ],
          correctAnswer: 1,
          explanation: "Avoiding harm means taking steps to prevent physical, psychological, or social harm to participants."
        },
        {
          id: 14,
          question: "How many research design frameworks were mentioned?",
          options: [
            "Two",
            "Three",
            "Four",
            "Five"
          ],
          correctAnswer: 1,
          explanation: "Three frameworks: exploratory, descriptive, and causal research."
        },
        {
          id: 15,
          question: "What drives effective research design?",
          options: [
            "Available budget",
            "Clear objectives",
            "Company size",
            "Time constraints"
          ],
          correctAnswer: 1,
          explanation: "Clear research objectives guide all design decisions and ensure the study addresses business needs."
        },
        {
          id: 16,
          question: "What should research objectives align with?",
          options: [
            "Competitor activities",
            "Business objectives",
            "Latest trends",
            "Available technology"
          ],
          correctAnswer: 1,
          explanation: "Research objectives must directly support business objectives to provide actionable insights."
        },
        {
          id: 17,
          question: "What secures buy-in for research projects?",
          options: [
            "Strong methodology",
            "Professional proposals",
            "Low cost",
            "Quick timeline"
          ],
          correctAnswer: 1,
          explanation: "Professional research proposals demonstrate planning and secure stakeholder approval."
        },
        {
          id: 18,
          question: "What builds trust in research?",
          options: [
            "High budgets",
            "Ethical standards",
            "Complex methods",
            "Long reports"
          ],
          correctAnswer: 1,
          explanation: "High ethical standards build trust with participants, clients, and stakeholders."
        },
        {
          id: 19,
          question: "What guides research execution?",
          options: [
            "Available tools",
            "Clear proposals",
            "Competitor research",
            "Industry standards"
          ],
          correctAnswer: 1,
          explanation: "Clear proposals provide a roadmap for executing research effectively."
        },
        {
          id: 20,
          question: "How many components were listed for research proposals?",
          options: [
            "Five",
            "Seven",
            "Nine",
            "Eleven"
          ],
          correctAnswer: 1,
          explanation: "Seven components: executive summary, background, objectives, methodology, timeline, budget, deliverables."
        }
      ]
    },
    {
      id: 2,
      title: "Advanced Data Collection Methods",
      content: `
## Sophisticated Data Gathering

Advanced market research employs multiple data collection methods to gain comprehensive insights. Each method has strengths and limitations for different research questions.

### Quantitative Methods Expansion

Beyond basic surveys, advanced quantitative methods include:
- **Longitudinal Studies**: Tracking changes over time
- **Panel Research**: Repeated measurements from same respondents
- **Experimental Designs**: Controlled tests of causal relationships
- **Conjoint Analysis**: Measuring preferences for product features
- **MaxDiff Analysis**: Determining most and least important attributes

These methods provide robust statistical insights.

### Qualitative Methods Deep Dive

Advanced qualitative techniques include:
- **In-Depth Interviews**: One-on-one detailed conversations
- **Focus Groups**: Guided group discussions
- **Ethnographic Research**: Observing behavior in natural settings
- **Diary Studies**: Participants record experiences over time
- **Online Communities**: Extended engagement with target audiences

Qualitative methods uncover underlying motivations and contexts.

### Mixed Methods Approach

Combining quantitative and qualitative methods:
- **Sequential Design**: One method informs the next
- **Concurrent Design**: Both methods used simultaneously
- **Transformative Design**: Methods integrated for deeper insights
- **Triangulation**: Using multiple methods to validate findings

Mixed methods provide both breadth and depth of understanding.

### Technology-Enabled Methods

Modern data collection technologies:
- **Mobile Surveys**: Reaching respondents anywhere
- **Social Media Listening**: Analyzing online conversations
- **Web Analytics**: Tracking digital behavior
- **Eye Tracking**: Measuring visual attention
- **Biometric Measures**: Physiological responses to stimuli

Technology expands research possibilities and efficiency.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What tracks changes over time with same respondents?",
          options: [
            "Cross-sectional Studies",
            "Longitudinal Studies",
            "Experimental Designs",
            "Conjoint Analysis"
          ],
          correctAnswer: 1,
          explanation: "Longitudinal studies follow the same respondents over time to track changes and trends."
        },
        {
          id: 2,
          question: "What involves repeated measurements from same people?",
          options: [
            "Longitudinal Studies",
            "Panel Research",
            "Experimental Designs",
            "MaxDiff Analysis"
          ],
          correctAnswer: 1,
          explanation: "Panel research collects data repeatedly from the same group of respondents over time."
        },
        {
          id: 3,
          question: "What tests causal relationships in controlled settings?",
          options: [
            "Panel Research",
            "Experimental Designs",
            "Conjoint Analysis",
            "Focus Groups"
          ],
          correctAnswer: 1,
          explanation: "Experimental designs manipulate variables in controlled settings to test cause-effect relationships."
        },
        {
          id: 4,
          question: "What measures preferences for product features?",
          options: [
            "Experimental Designs",
            "Conjoint Analysis",
            "MaxDiff Analysis",
            "In-Depth Interviews"
          ],
          correctAnswer: 1,
          explanation: "Conjoint analysis measures how consumers value different product features and attributes."
        },
        {
          id: 5,
          question: "What determines most and least important attributes?",
          options: [
            "Conjoint Analysis",
            "MaxDiff Analysis",
            "Longitudinal Studies",
            "Ethnographic Research"
          ],
          correctAnswer: 1,
          explanation: "MaxDiff analysis identifies which attributes are most and least important to consumers."
        },
        {
          id: 6,
          question: "What involves one-on-one detailed conversations?",
          options: [
            "Focus Groups",
            "In-Depth Interviews",
            "Diary Studies",
            "Online Communities"
          ],
          correctAnswer: 1,
          explanation: "In-depth interviews provide detailed individual perspectives through extended conversations."
        },
        {
          id: 7,
          question: "What uses guided group discussions?",
          options: [
            "In-Depth Interviews",
            "Focus Groups",
            "Ethnographic Research",
            "Diary Studies"
          ],
          correctAnswer: 1,
          explanation: "Focus groups gather insights through moderated discussions with multiple participants."
        },
        {
          id: 8,
          question: "What observes behavior in natural settings?",
          options: [
            "Focus Groups",
            "Ethnographic Research",
            "Diary Studies",
            "Online Communities"
          ],
          correctAnswer: 1,
          explanation: "Ethnographic research observes people in their natural environments to understand context."
        },
        {
          id: 9,
          question: "What has participants record experiences over time?",
          options: [
            "Ethnographic Research",
            "Diary Studies",
            "Online Communities",
            "In-Depth Interviews"
          ],
          correctAnswer: 1,
          explanation: "Diary studies involve participants recording experiences, thoughts, or behaviors over time."
        },
        {
          id: 10,
          question: "What involves extended engagement with audiences?",
          options: [
            "Diary Studies",
            "Online Communities",
            "Focus Groups",
            "Experimental Designs"
          ],
          correctAnswer: 1,
          explanation: "Online communities maintain ongoing engagement with target audiences for deeper insights."
        },
        {
          id: 11,
          question: "What design has one method inform the next?",
          options: [
            "Concurrent Design",
            "Sequential Design",
            "Transformative Design",
            "Triangulation"
          ],
          correctAnswer: 1,
          explanation: "Sequential design uses results from one method to inform the design of the next method."
        },
        {
          id: 12,
          question: "What uses both methods simultaneously?",
          options: [
            "Sequential Design",
            "Concurrent Design",
            "Transformative Design",
            "Triangulation"
          ],
          correctAnswer: 1,
          explanation: "Concurrent design employs quantitative and qualitative methods at the same time."
        },
        {
          id: 13,
          question: "What integrates methods for deeper insights?",
          options: [
            "Concurrent Design",
            "Transformative Design",
            "Sequential Design",
            "Triangulation"
          ],
          correctAnswer: 1,
          explanation: "Transformative design fully integrates methods to address complex research questions."
        },
        {
          id: 14,
          question: "What uses multiple methods to validate findings?",
          options: [
            "Transformative Design",
            "Triangulation",
            "Sequential Design",
            "Concurrent Design"
          ],
          correctAnswer: 1,
          explanation: "Triangulation strengthens findings by using multiple methods to study the same phenomenon."
        },
        {
          id: 15,
          question: "What reaches respondents anywhere via mobile devices?",
          options: [
            "Web Analytics",
            "Mobile Surveys",
            "Social Media Listening",
            "Eye Tracking"
          ],
          correctAnswer: 1,
          explanation: "Mobile surveys allow data collection from respondents anywhere using smartphones or tablets."
        },
        {
          id: 16,
          question: "What analyzes online conversations?",
          options: [
            "Mobile Surveys",
            "Social Media Listening",
            "Web Analytics",
            "Biometric Measures"
          ],
          correctAnswer: 1,
          explanation: "Social media listening analyzes conversations and sentiment on social media platforms."
        },
        {
          id: 17,
          question: "What tracks digital behavior on websites?",
          options: [
            "Social Media Listening",
            "Web Analytics",
            "Eye Tracking",
            "Mobile Surveys"
          ],
          correctAnswer: 1,
          explanation: "Web analytics track user behavior on websites and digital platforms."
        },
        {
          id: 18,
          question: "What measures visual attention?",
          options: [
            "Web Analytics",
            "Eye Tracking",
            "Biometric Measures",
            "Mobile Surveys"
          ],
          correctAnswer: 1,
          explanation: "Eye tracking measures where people look and how long they focus on different elements."
        },
        {
          id: 19,
          question: "What measures physiological responses?",
          options: [
            "Eye Tracking",
            "Biometric Measures",
            "Web Analytics",
            "Social Media Listening"
          ],
          correctAnswer: 1,
          explanation: "Biometric measures track physiological responses like heart rate, skin conductance, or brain activity."
        },
        {
          id: 20,
          question: "How many quantitative methods were specifically listed?",
          options: [
            "Three",
            "Five",
            "Seven",
            "Nine"
          ],
          correctAnswer: 1,
          explanation: "Five quantitative methods: longitudinal studies, panel research, experimental designs, conjoint analysis, MaxDiff analysis."
        }
      ]
    },
    {
      id: 3,
      title: "Sampling Strategies",
      content: `
## Advanced Sampling Techniques

Sampling determines who participates in research. Advanced strategies ensure samples are representative, efficient, and appropriate for research objectives.

### Probability Sampling Methods

Methods where every population member has known selection probability:
- **Simple Random Sampling**: Equal chance for every member
- **Systematic Sampling**: Selecting every nth member
- **Stratified Sampling**: Dividing population into subgroups
- **Cluster Sampling**: Selecting groups rather than individuals
- **Multistage Sampling**: Combining multiple sampling methods

Probability sampling allows statistical generalization to populations.

### Non-Probability Sampling Methods

Methods without known selection probabilities:
- **Convenience Sampling**: Easily accessible participants
- **Judgmental Sampling**: Expert selection of participants
- **Quota Sampling**: Ensuring sample matches population proportions
- **Snowball Sampling**: Participants refer others
- **Purposive Sampling**: Selecting specific types of participants

Non-probability sampling is often faster and cheaper.

### Sample Size Determination

Factors affecting sample size decisions:
- **Population Size**: Larger populations may need larger samples
- **Confidence Level**: How certain you want to be (usually 95%)
- **Margin of Error**: Acceptable error in estimates
- **Population Variability**: More variability requires larger samples
- **Analysis Requirements**: Complex analyses may need larger samples
- **Budget and Time**: Practical constraints on sample size

Statistical formulas calculate required sample sizes.

### Sampling Challenges and Solutions

Common sampling issues and how to address them:
- **Non-response Bias**: People who don't participate differ from those who do
- **Coverage Error**: Sampling frame doesn't match population
- **Selection Bias**: Systematic exclusion of certain groups
- **Sampling Error**: Natural variation between sample and population
- **Measurement Error**: Problems with how data is collected

Advanced researchers anticipate and mitigate these challenges.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What gives equal chance to every population member?",
          options: [
            "Systematic Sampling",
            "Simple Random Sampling",
            "Stratified Sampling",
            "Cluster Sampling"
          ],
          correctAnswer: 1,
          explanation: "Simple random sampling gives every population member an equal chance of selection."
        },
        {
          id: 2,
          question: "What selects every nth member from a list?",
          options: [
            "Simple Random Sampling",
            "Systematic Sampling",
            "Stratified Sampling",
            "Multistage Sampling"
          ],
          correctAnswer: 1,
          explanation: "Systematic sampling selects participants at regular intervals from a sampling frame."
        },
        {
          id: 3,
          question: "What divides population into subgroups?",
          options: [
            "Systematic Sampling",
            "Stratified Sampling",
            "Cluster Sampling",
            "Convenience Sampling"
          ],
          correctAnswer: 1,
          explanation: "Stratified sampling divides the population into subgroups (strata) and samples from each."
        },
        {
          id: 4,
          question: "What selects groups rather than individuals?",
          options: [
            "Stratified Sampling",
            "Cluster Sampling",
            "Multistage Sampling",
            "Judgmental Sampling"
          ],
          correctAnswer: 1,
          explanation: "Cluster sampling selects groups or clusters of participants rather than individuals."
        },
        {
          id: 5,
          question: "What combines multiple sampling methods?",
          options: [
            "Cluster Sampling",
            "Multistage Sampling",
            "Simple Random Sampling",
            "Quota Sampling"
          ],
          correctAnswer: 1,
          explanation: "Multistage sampling uses two or more sampling methods in sequence."
        },
        {
          id: 6,
          question: "What uses easily accessible participants?",
          options: [
            "Judgmental Sampling",
            "Convenience Sampling",
            "Quota Sampling",
            "Snowball Sampling"
          ],
          correctAnswer: 1,
          explanation: "Convenience sampling selects participants who are easily available or accessible."
        },
        {
          id: 7,
          question: "What involves expert selection of participants?",
          options: [
            "Convenience Sampling",
            "Judgmental Sampling",
            "Quota Sampling",
            "Purposive Sampling"
          ],
          correctAnswer: 1,
          explanation: "Judgmental sampling relies on researcher judgment to select appropriate participants."
        },
        {
          id: 8,
          question: "What ensures sample matches population proportions?",
          options: [
            "Judgmental Sampling",
            "Quota Sampling",
            "Snowball Sampling",
            "Purposive Sampling"
          ],
          correctAnswer: 1,
          explanation: "Quota sampling ensures the sample includes specified proportions of different subgroups."
        },
        {
          id: 9,
          question: "What has participants refer others?",
          options: [
            "Quota Sampling",
            "Snowball Sampling",
            "Purposive Sampling",
            "Convenience Sampling"
          ],
          correctAnswer: 1,
          explanation: "Snowball sampling uses current participants to refer or recruit additional participants."
        },
        {
          id: 10,
          question: "What selects specific types of participants?",
          options: [
            "Snowball Sampling",
            "Purposive Sampling",
            "Judgmental Sampling",
            "Quota Sampling"
          ],
          correctAnswer: 1,
          explanation: "Purposive sampling deliberately selects specific types of participants for the study."
        },
        {
          id: 11,
          question: "What affects how certain you want to be about results?",
          options: [
            "Population Size",
            "Confidence Level",
            "Margin of Error",
            "Population Variability"
          ],
          correctAnswer: 1,
          explanation: "Confidence level (usually 95%) indicates how certain you want to be that results are accurate."
        },
        {
          id: 12,
          question: "What is acceptable error in estimates?",
          options: [
            "Confidence Level",
            "Margin of Error",
            "Population Variability",
            "Analysis Requirements"
          ],
          correctAnswer: 1,
          explanation: "Margin of error is the acceptable amount of error in sample estimates compared to population values."
        },
        {
          id: 13,
          question: "What requires larger samples when high?",
          options: [
            "Margin of Error",
            "Population Variability",
            "Budget and Time",
            "Confidence Level"
          ],
          correctAnswer: 1,
          explanation: "Higher population variability requires larger samples to achieve accurate estimates."
        },
        {
          id: 14,
          question: "What may need larger samples for complex analyses?",
          options: [
            "Population Variability",
            "Analysis Requirements",
            "Budget and Time",
            "Population Size"
          ],
          correctAnswer: 1,
          explanation: "Complex statistical analyses often require larger sample sizes for reliable results."
        },
        {
          id: 15,
          question: "What imposes practical limits on sample size?",
          options: [
            "Analysis Requirements",
            "Budget and Time",
            "Population Size",
            "Confidence Level"
          ],
          correctAnswer: 1,
          explanation: "Budget and time constraints often determine maximum feasible sample sizes."
        },
        {
          id: 16,
          question: "What occurs when non-participants differ from participants?",
          options: [
            "Coverage Error",
            "Non-response Bias",
            "Selection Bias",
            "Sampling Error"
          ],
          correctAnswer: 1,
          explanation: "Non-response bias occurs when people who don't participate differ systematically from those who do."
        },
        {
          id: 17,
          question: "What happens when sampling frame doesn't match population?",
          options: [
            "Non-response Bias",
            "Coverage Error",
            "Selection Bias",
            "Measurement Error"
          ],
          correctAnswer: 1,
          explanation: "Coverage error occurs when the sampling frame excludes parts of the target population."
        },
        {
          id: 18,
          question: "What is systematic exclusion of certain groups?",
          options: [
            "Coverage Error",
            "Selection Bias",
            "Sampling Error",
            "Measurement Error"
          ],
          correctAnswer: 1,
          explanation: "Selection bias occurs when certain groups are systematically excluded from the sample."
        },
        {
          id: 19,
          question: "What is natural variation between sample and population?",
          options: [
            "Selection Bias",
            "Sampling Error",
            "Measurement Error",
            "Non-response Bias"
          ],
          correctAnswer: 1,
          explanation: "Sampling error is the natural statistical variation between sample results and true population values."
        },
        {
          id: 20,
          question: "How many probability sampling methods were listed?",
          options: [
            "Three",
            "Five",
            "Seven",
            "Nine"
          ],
          correctAnswer: 1,
          explanation: "Five probability methods: simple random, systematic, stratified, cluster, and multistage sampling."
        }
      ]
    },
    {
      id: 4,
      title: "Data Analysis Techniques",
      content: `
## Advanced Statistical Analysis

Sophisticated data analysis transforms raw data into actionable insights. Advanced techniques reveal patterns, relationships, and predictions beyond basic statistics.

### Descriptive Analysis Deep Dive

Beyond basic statistics:
- **Measures of Central Tendency**: Mean, median, mode with context
- **Measures of Dispersion**: Standard deviation, variance, range
- **Distribution Analysis**: Skewness, kurtosis, normal distribution tests
- **Cross-tabulation**: Relationships between categorical variables
- **Trend Analysis**: Patterns over time

Descriptive analysis provides foundation for advanced techniques.

### Inferential Statistics

Drawing conclusions about populations from samples:
- **Hypothesis Testing**: Testing assumptions about populations
- **Confidence Intervals**: Range where population parameter likely falls
- **T-tests**: Comparing means between two groups
- **ANOVA**: Comparing means among multiple groups
- **Chi-square Tests**: Testing relationships between categorical variables

Inferential statistics support generalization from samples to populations.

### Multivariate Analysis

Analyzing multiple variables simultaneously:
- **Regression Analysis**: Predicting relationships between variables
- **Factor Analysis**: Identifying underlying dimensions
- **Cluster Analysis**: Grouping similar cases together
- **Discriminant Analysis**: Classifying cases into groups
- **Conjoint Analysis**: Measuring attribute importance

Multivariate techniques reveal complex relationships.

### Data Visualization for Analysis

Visual techniques that aid analysis:
- **Scatter Plots**: Visualizing relationships between variables
- **Box Plots**: Showing distribution and outliers
- **Heat Maps**: Visualizing matrix data
- **Decision Trees**: Showing classification paths
- **Network Diagrams**: Visualizing relationships

Visualization helps identify patterns and communicate findings.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What includes mean, median, and mode?",
          options: [
            "Measures of Dispersion",
            "Measures of Central Tendency",
            "Distribution Analysis",
            "Cross-tabulation"
          ],
          correctAnswer: 1,
          explanation: "Measures of central tendency describe the center or typical value of a dataset."
        },
        {
          id: 2,
          question: "What includes standard deviation and variance?",
          options: [
            "Measures of Central Tendency",
            "Measures of Dispersion",
            "Trend Analysis",
            "Distribution Analysis"
          ],
          correctAnswer: 1,
          explanation: "Measures of dispersion describe how spread out or variable the data is."
        },
        {
          id: 3,
          question: "What examines skewness and kurtosis?",
          options: [
            "Measures of Dispersion",
            "Distribution Analysis",
            "Cross-tabulation",
            "Trend Analysis"
          ],
          correctAnswer: 1,
          explanation: "Distribution analysis examines the shape and characteristics of data distributions."
        },
        {
          id: 4,
          question: "What shows relationships between categorical variables?",
          options: [
            "Distribution Analysis",
            "Cross-tabulation",
            "Trend Analysis",
            "Hypothesis Testing"
          ],
          correctAnswer: 1,
          explanation: "Cross-tabulation shows how two categorical variables relate to each other."
        },
        {
          id: 5,
          question: "What identifies patterns over time?",
          options: [
            "Cross-tabulation",
            "Trend Analysis",
            "Hypothesis Testing",
            "Confidence Intervals"
          ],
          correctAnswer: 1,
          explanation: "Trend analysis identifies and analyzes patterns, changes, or movements over time."
        },
        {
          id: 6,
          question: "What tests assumptions about populations?",
          options: [
            "Trend Analysis",
            "Hypothesis Testing",
            "Confidence Intervals",
            "T-tests"
          ],
          correctAnswer: 1,
          explanation: "Hypothesis testing uses sample data to test assumptions or claims about populations."
        },
        {
          id: 7,
          question: "What shows where population parameter likely falls?",
          options: [
            "Hypothesis Testing",
            "Confidence Intervals",
            "T-tests",
            "ANOVA"
          ],
          correctAnswer: 1,
          explanation: "Confidence intervals provide a range where the true population parameter is likely to be."
        },
        {
          id: 8,
          question: "What compares means between two groups?",
          options: [
            "Confidence Intervals",
            "T-tests",
            "ANOVA",
            "Chi-square Tests"
          ],
          correctAnswer: 1,
          explanation: "T-tests compare whether means of two groups are statistically different."
        },
        {
          id: 9,
          question: "What compares means among multiple groups?",
          options: [
            "T-tests",
            "ANOVA",
            "Chi-square Tests",
            "Regression Analysis"
          ],
          correctAnswer: 1,
          explanation: "ANOVA (Analysis of Variance) compares means across three or more groups."
        },
        {
          id: 10,
          question: "What tests relationships between categorical variables?",
          options: [
            "ANOVA",
            "Chi-square Tests",
            "Regression Analysis",
            "Factor Analysis"
          ],
          correctAnswer: 1,
          explanation: "Chi-square tests examine relationships between categorical variables."
        },
        {
          id: 11,
          question: "What predicts relationships between variables?",
          options: [
            "Chi-square Tests",
            "Regression Analysis",
            "Factor Analysis",
            "Cluster Analysis"
          ],
          correctAnswer: 1,
          explanation: "Regression analysis models and predicts relationships between dependent and independent variables."
        },
        {
          id: 12,
          question: "What identifies underlying dimensions?",
          options: [
            "Regression Analysis",
            "Factor Analysis",
            "Cluster Analysis",
            "Discriminant Analysis"
          ],
          correctAnswer: 1,
          explanation: "Factor analysis identifies underlying factors or dimensions that explain patterns in data."
        },
        {
          id: 13,
          question: "What groups similar cases together?",
          options: [
            "Factor Analysis",
            "Cluster Analysis",
            "Discriminant Analysis",
            "Conjoint Analysis"
          ],
          correctAnswer: 1,
          explanation: "Cluster analysis groups cases that are similar to each other and different from other groups."
        },
        {
          id: 14,
          question: "What classifies cases into groups?",
          options: [
            "Cluster Analysis",
            "Discriminant Analysis",
            "Conjoint Analysis",
            "Regression Analysis"
          ],
          correctAnswer: 1,
          explanation: "Discriminant analysis classifies cases into predefined groups based on multiple variables."
        },
        {
          id: 15,
          question: "What visualizes relationships between variables?",
          options: [
            "Box Plots",
            "Scatter Plots",
            "Heat Maps",
            "Decision Trees"
          ],
          correctAnswer: 1,
          explanation: "Scatter plots show relationships between two continuous variables as points on a graph."
        },
        {
          id: 16,
          question: "What shows distribution and outliers?",
          options: [
            "Scatter Plots",
            "Box Plots",
            "Heat Maps",
            "Network Diagrams"
          ],
          correctAnswer: 1,
          explanation: "Box plots display data distribution, median, quartiles, and outliers in a standardized format."
        },
        {
          id: 17,
          question: "What visualizes matrix data?",
          options: [
            "Box Plots",
            "Heat Maps",
            "Decision Trees",
            "Network Diagrams"
          ],
          correctAnswer: 1,
          explanation: "Heat maps use color intensity to represent values in a matrix or table format."
        },
        {
          id: 18,
          question: "What shows classification paths?",
          options: [
            "Heat Maps",
            "Decision Trees",
            "Network Diagrams",
            "Scatter Plots"
          ],
          correctAnswer: 1,
          explanation: "Decision trees show classification or decision paths based on multiple conditions."
        },
        {
          id: 19,
          question: "What visualizes relationships between entities?",
          options: [
            "Decision Trees",
            "Network Diagrams",
            "Box Plots",
            "Heat Maps"
          ],
          correctAnswer: 1,
          explanation: "Network diagrams show relationships and connections between entities or nodes."
        },
        {
          id: 20,
          question: "How many multivariate analysis techniques were listed?",
          options: [
            "Three",
            "Five",
            "Seven",
            "Nine"
          ],
          correctAnswer: 1,
          explanation: "Five multivariate techniques: regression, factor analysis, cluster analysis, discriminant analysis, conjoint analysis."
        }
      ]
    },
    {
      id: 5,
      title: "Consumer Behavior Analysis",
      content: `
## Understanding Market Psychology

Consumer behavior analysis examines why people make purchase decisions. Advanced techniques uncover motivations, influences, and decision processes.

### Consumer Decision Process

Stages consumers go through when making decisions:
- **Problem Recognition**: Becoming aware of a need
- **Information Search**: Seeking information about options
- **Evaluation of Alternatives**: Comparing different choices
- **Purchase Decision**: Selecting and buying a product
- **Post-Purchase Evaluation**: Assessing satisfaction after purchase

Understanding each stage helps target marketing efforts effectively.

### Influences on Consumer Behavior

Factors affecting purchase decisions:
- **Cultural Factors**: Culture, subculture, social class
- **Social Factors**: Reference groups, family, social roles
- **Personal Factors**: Age, occupation, lifestyle, personality
- **Psychological Factors**: Motivation, perception, learning, beliefs
- **Situational Factors**: Physical environment, time, mood

Multiple influences interact to shape behavior.

### Advanced Behavioral Models

Theoretical models explaining consumer behavior:
- **Theory of Planned Behavior**: Attitudes, norms, and control predict behavior
- **Consumer Decision Model**: Integrates multiple influences
- **Elaboration Likelihood Model**: Central vs. peripheral processing
- **Habitual Behavior Model**: Routine vs. deliberate decisions
- **Experiential Consumption Model**: Emotional and sensory experiences

Models provide frameworks for understanding complex behavior.

### Behavioral Research Methods

Specialized methods for studying behavior:
- **Observation Studies**: Watching behavior in natural settings
- **Experiments**: Testing causal relationships in behavior
- **Neuro-marketing**: Studying brain responses to marketing
- **Behavioral Economics**: Applying psychology to economic decisions
- **Digital Footprint Analysis**: Analyzing online behavior traces

Multiple methods provide comprehensive behavioral insights.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is becoming aware of a need?",
          options: [
            "Information Search",
            "Problem Recognition",
            "Evaluation of Alternatives",
            "Purchase Decision"
          ],
          correctAnswer: 1,
          explanation: "Problem recognition occurs when consumers become aware of a gap between actual and desired states."
        },
        {
          id: 2,
          question: "What involves seeking information about options?",
          options: [
            "Problem Recognition",
            "Information Search",
            "Purchase Decision",
            "Post-Purchase Evaluation"
          ],
          correctAnswer: 1,
          explanation: "Information search involves consumers gathering information about available products or services."
        },
        {
          id: 3,
          question: "What compares different choices?",
          options: [
            "Information Search",
            "Evaluation of Alternatives",
            "Purchase Decision",
            "Post-Purchase Evaluation"
          ],
          correctAnswer: 1,
          explanation: "Evaluation of alternatives involves comparing different options based on criteria important to the consumer."
        },
        {
          id: 4,
          question: "What is selecting and buying a product?",
          options: [
            "Evaluation of Alternatives",
            "Purchase Decision",
            "Post-Purchase Evaluation",
            "Problem Recognition"
          ],
          correctAnswer: 1,
          explanation: "The purchase decision is when the consumer selects a specific product and completes the transaction."
        },
        {
          id: 5,
          question: "What assesses satisfaction after purchase?",
          options: [
            "Purchase Decision",
            "Post-Purchase Evaluation",
            "Problem Recognition",
            "Information Search"
          ],
          correctAnswer: 1,
          explanation: "Post-purchase evaluation involves consumers assessing whether they are satisfied with their choice."
        },
        {
          id: 6,
          question: "What includes culture and social class?",
          options: [
            "Social Factors",
            "Cultural Factors",
            "Personal Factors",
            "Psychological Factors"
          ],
          correctAnswer: 1,
          explanation: "Cultural factors include broad cultural values, subcultures, and social class influences."
        },
        {
          id: 7,
          question: "What includes reference groups and family?",
          options: [
            "Cultural Factors",
            "Social Factors",
            "Personal Factors",
            "Situational Factors"
          ],
          correctAnswer: 1,
          explanation: "Social factors include influences from other people, such as reference groups, family, and social roles."
        },
        {
          id: 8,
          question: "What includes age and lifestyle?",
          options: [
            "Social Factors",
            "Personal Factors",
            "Psychological Factors",
            "Situational Factors"
          ],
          correctAnswer: 1,
          explanation: "Personal factors include demographic characteristics, lifestyle, personality, and self-concept."
        },
        {
          id: 9,
          question: "What includes motivation and perception?",
          options: [
            "Personal Factors",
            "Psychological Factors",
            "Situational Factors",
            "Cultural Factors"
          ],
          correctAnswer: 1,
          explanation: "Psychological factors include internal processes like motivation, perception, learning, and attitudes."
        },
        {
          id: 10,
          question: "What includes physical environment and time?",
          options: [
            "Psychological Factors",
            "Situational Factors",
            "Cultural Factors",
            "Social Factors"
          ],
          correctAnswer: 1,
          explanation: "Situational factors include temporary conditions like physical environment, time pressure, and mood."
        },
        {
          id: 11,
          question: "What predicts behavior from attitudes, norms, and control?",
          options: [
            "Consumer Decision Model",
            "Theory of Planned Behavior",
            "Elaboration Likelihood Model",
            "Habitual Behavior Model"
          ],
          correctAnswer: 1,
          explanation: "Theory of Planned Behavior predicts behavior based on attitudes, subjective norms, and perceived behavioral control."
        },
        {
          id: 12,
          question: "What integrates multiple influences on behavior?",
          options: [
            "Theory of Planned Behavior",
            "Consumer Decision Model",
            "Elaboration Likelihood Model",
            "Experiential Consumption Model"
          ],
          correctAnswer: 1,
          explanation: "The Consumer Decision Model integrates cultural, social, personal, and psychological influences."
        },
        {
          id: 13,
          question: "What distinguishes central vs. peripheral processing?",
          options: [
            "Consumer Decision Model",
            "Elaboration Likelihood Model",
            "Habitual Behavior Model",
            "Experiential Consumption Model"
          ],
          correctAnswer: 1,
          explanation: "Elaboration Likelihood Model distinguishes between careful thinking (central route) and heuristic processing (peripheral route)."
        },
        {
          id: 14,
          question: "What distinguishes routine vs. deliberate decisions?",
          options: [
            "Elaboration Likelihood Model",
            "Habitual Behavior Model",
            "Experiential Consumption Model",
            "Theory of Planned Behavior"
          ],
          correctAnswer: 1,
          explanation: "The Habitual Behavior Model distinguishes between automatic routine behaviors and deliberate decisions."
        },
        {
          id: 15,
          question: "What focuses on emotional and sensory experiences?",
          options: [
            "Habitual Behavior Model",
            "Experiential Consumption Model",
            "Consumer Decision Model",
            "Theory of Planned Behavior"
          ],
          correctAnswer: 1,
          explanation: "Experiential Consumption Model emphasizes emotional, sensory, and symbolic aspects of consumption."
        },
        {
          id: 16,
          question: "What watches behavior in natural settings?",
          options: [
            "Experiments",
            "Observation Studies",
            "Neuro-marketing",
            "Behavioral Economics"
          ],
          correctAnswer: 1,
          explanation: "Observation studies involve systematically watching and recording behavior in natural settings."
        },
        {
          id: 17,
          question: "What tests causal relationships in behavior?",
          options: [
            "Observation Studies",
            "Experiments",
            "Digital Footprint Analysis",
            "Behavioral Economics"
          ],
          correctAnswer: 1,
          explanation: "Experiments manipulate variables to test cause-effect relationships in consumer behavior."
        },
        {
          id: 18,
          question: "What studies brain responses to marketing?",
          options: [
            "Experiments",
            "Neuro-marketing",
            "Behavioral Economics",
            "Digital Footprint Analysis"
          ],
          correctAnswer: 1,
          explanation: "Neuro-marketing uses neuroscience techniques to study brain responses to marketing stimuli."
        },
        {
          id: 19,
          question: "What applies psychology to economic decisions?",
          options: [
            "Neuro-marketing",
            "Behavioral Economics",
            "Digital Footprint Analysis",
            "Observation Studies"
          ],
          correctAnswer: 1,
          explanation: "Behavioral economics applies psychological insights to understand economic decision-making."
        },
        {
          id: 20,
          question: "How many consumer decision stages are there?",
          options: [
            "Three",
            "Five",
            "Seven",
            "Nine"
          ],
          correctAnswer: 1,
          explanation: "Five stages: problem recognition, information search, evaluation of alternatives, purchase decision, post-purchase evaluation."
        }
      ]
    },
    {
      id: 6,
      title: "Competitive Intelligence",
      content: `
## Strategic Market Analysis

Competitive intelligence systematically gathers and analyzes information about competitors. Advanced techniques provide strategic insights for competitive advantage.

### Intelligence Gathering Methods

Systematic approaches to collecting competitor information:
- **Public Sources**: Annual reports, SEC filings, press releases
- **Industry Analysis**: Trade publications, conferences, associations
- **Customer Feedback**: What customers say about competitors
- **Employee Insights**: Information from current or former employees
- **Market Experiments**: Testing competitive responses

Multiple sources provide comprehensive intelligence.

### Competitor Analysis Frameworks

Structured approaches to analyzing competitors:
- **SWOT Analysis**: Strengths, Weaknesses, Opportunities, Threats
- **Porter's Five Forces**: Industry competitive forces analysis
- **Strategic Group Mapping**: Identifying competitor groups and positions
- **Value Chain Analysis**: Examining competitor activities
- **Benchmarking**: Comparing performance against competitors

Frameworks organize intelligence for strategic insights.

### Market Positioning Analysis

Understanding competitive positions in the market:
- **Perceptual Mapping**: Visualizing brand positions in consumers' minds
- **Gap Analysis**: Identifying unmet market needs
- **Market Share Analysis**: Measuring competitive positions
- **Growth Vector Analysis**: Analyzing competitor expansion directions
- **Strategic Intent Analysis**: Understanding competitor goals and motivations

Positioning analysis reveals competitive opportunities.

### Ethical Intelligence Practices

Conducting competitive intelligence ethically:
- **Legal Boundaries**: What information can be legally collected
- **Ethical Standards**: Professional codes of conduct
- **Transparent Methods**: Avoiding deception in gathering information
- **Respecting Confidentiality**: Not using improperly obtained information
- **Adding Value**: Using intelligence to improve competition, not harm it

Ethical practices maintain professional standards and legal compliance.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What includes annual reports and SEC filings?",
          options: [
            "Industry Analysis",
            "Public Sources",
            "Customer Feedback",
            "Employee Insights"
          ],
          correctAnswer: 1,
          explanation: "Public sources include legally required disclosures, reports, and publicly available information."
        },
        {
          id: 2,
          question: "What includes trade publications and conferences?",
          options: [
            "Public Sources",
            "Industry Analysis",
            "Market Experiments",
            "Employee Insights"
          ],
          correctAnswer: 1,
          explanation: "Industry analysis involves studying industry publications, events, and professional associations."
        },
        {
          id: 3,
          question: "What involves what customers say about competitors?",
          options: [
            "Industry Analysis",
            "Customer Feedback",
            "Employee Insights",
            "Market Experiments"
          ],
          correctAnswer: 1,
          explanation: "Customer feedback includes reviews, complaints, and discussions about competitor products or services."
        },
        {
          id: 4,
          question: "What uses information from current or former employees?",
          options: [
            "Customer Feedback",
            "Employee Insights",
            "Market Experiments",
            "Public Sources"
          ],
          correctAnswer: 1,
          explanation: "Employee insights can provide internal perspectives on competitor operations and strategies."
        },
        {
          id: 5,
          question: "What involves testing competitive responses?",
          options: [
            "Employee Insights",
            "Market Experiments",
            "Industry Analysis",
            "Customer Feedback"
          ],
          correctAnswer: 1,
          explanation: "Market experiments test how competitors respond to specific market actions or changes."
        },
        {
          id: 6,
          question: "What analyzes strengths, weaknesses, opportunities, threats?",
          options: [
            "Porter's Five Forces",
            "SWOT Analysis",
            "Strategic Group Mapping",
            "Value Chain Analysis"
          ],
          correctAnswer: 1,
          explanation: "SWOT analysis examines internal strengths/weaknesses and external opportunities/threats."
        },
        {
          id: 7,
          question: "What analyzes industry competitive forces?",
          options: [
            "SWOT Analysis",
            "Porter's Five Forces",
            "Benchmarking",
            "Strategic Group Mapping"
          ],
          correctAnswer: 1,
          explanation: "Porter's Five Forces analyzes competitive rivalry, supplier power, buyer power, threat of substitutes, and threat of new entrants."
        },
        {
          id: 8,
          question: "What identifies competitor groups and positions?",
          options: [
            "Porter's Five Forces",
            "Strategic Group Mapping",
            "Value Chain Analysis",
            "Benchmarking"
          ],
          correctAnswer: 1,
          explanation: "Strategic group mapping identifies clusters of competitors with similar strategies and market positions."
        },
        {
          id: 9,
          question: "What examines competitor activities?",
          options: [
            "Strategic Group Mapping",
            "Value Chain Analysis",
            "Benchmarking",
            "SWOT Analysis"
          ],
          correctAnswer: 1,
          explanation: "Value chain analysis examines the sequence of activities competitors use to create value."
        },
        {
          id: 10,
          question: "What compares performance against competitors?",
          options: [
            "Value Chain Analysis",
            "Benchmarking",
            "Porter's Five Forces",
            "Strategic Group Mapping"
          ],
          correctAnswer: 1,
          explanation: "Benchmarking compares performance metrics against competitors or industry standards."
        },
        {
          id: 11,
          question: "What visualizes brand positions in consumers' minds?",
          options: [
            "Gap Analysis",
            "Perceptual Mapping",
            "Market Share Analysis",
            "Growth Vector Analysis"
          ],
          correctAnswer: 1,
          explanation: "Perceptual mapping creates visual representations of how consumers perceive different brands."
        },
        {
          id: 12,
          question: "What identifies unmet market needs?",
          options: [
            "Perceptual Mapping",
            "Gap Analysis",
            "Strategic Intent Analysis",
            "Market Share Analysis"
          ],
          correctAnswer: 1,
          explanation: "Gap analysis identifies differences between current market offerings and customer needs or desires."
        },
        {
          id: 13,
          question: "What measures competitive positions?",
          options: [
            "Gap Analysis",
            "Market Share Analysis",
            "Growth Vector Analysis",
            "Strategic Intent Analysis"
          ],
          correctAnswer: 1,
          explanation: "Market share analysis measures each competitor's portion of total market sales or volume."
        },
        {
          id: 14,
          question: "What analyzes competitor expansion directions?",
          options: [
            "Market Share Analysis",
            "Growth Vector Analysis",
            "Strategic Intent Analysis",
            "Perceptual Mapping"
          ],
          correctAnswer: 1,
          explanation: "Growth vector analysis examines the directions in which competitors are expanding or diversifying."
        },
        {
          id: 15,
          question: "What understands competitor goals and motivations?",
          options: [
            "Growth Vector Analysis",
            "Strategic Intent Analysis",
            "Gap Analysis",
            "Market Share Analysis"
          ],
          correctAnswer: 1,
          explanation: "Strategic intent analysis examines what competitors are trying to achieve and their underlying motivations."
        },
        {
          id: 16,
          question: "What concerns what information can be legally collected?",
          options: [
            "Ethical Standards",
            "Legal Boundaries",
            "Transparent Methods",
            "Respecting Confidentiality"
          ],
          correctAnswer: 1,
          explanation: "Legal boundaries define what competitive intelligence activities are permitted by law."
        },
        {
          id: 17,
          question: "What involves professional codes of conduct?",
          options: [
            "Legal Boundaries",
            "Ethical Standards",
            "Adding Value",
            "Transparent Methods"
          ],
          correctAnswer: 1,
          explanation: "Ethical standards include professional guidelines for conducting competitive intelligence."
        },
        {
          id: 18,
          question: "What means avoiding deception in gathering information?",
          options: [
            "Ethical Standards",
            "Transparent Methods",
            "Respecting Confidentiality",
            "Adding Value"
          ],
          correctAnswer: 1,
          explanation: "Transparent methods involve gathering information openly without deception or misrepresentation."
        },
        {
          id: 19,
          question: "What means not using improperly obtained information?",
          options: [
            "Transparent Methods",
            "Respecting Confidentiality",
            "Adding Value",
            "Legal Boundaries"
          ],
          correctAnswer: 1,
          explanation: "Respecting confidentiality means not using information that was obtained improperly or is confidential."
        },
        {
          id: 20,
          question: "How many intelligence gathering methods were listed?",
          options: [
            "Three",
            "Five",
            "Seven",
            "Nine"
          ],
          correctAnswer: 1,
          explanation: "Five methods: public sources, industry analysis, customer feedback, employee insights, market experiments."
        }
      ]
    },
    {
      id: 7,
      title: "Market Segmentation",
      content: `
## Targeted Market Strategy

Market segmentation divides heterogeneous markets into homogeneous subgroups. Advanced segmentation enables precise targeting and positioning strategies.

### Segmentation Bases

Different ways to segment markets:
- **Demographic Segmentation**: Age, gender, income, education
- **Geographic Segmentation**: Location, region, climate, population density
- **Psychographic Segmentation**: Lifestyle, values, personality, interests
- **Behavioral Segmentation**: Usage patterns, benefits sought, loyalty status
- **Firmographic Segmentation**: For B2B markets - company size, industry, location

Multiple bases can be combined for sophisticated segmentation.

### Segmentation Evaluation Criteria

Assessing segment viability and attractiveness:
- **Measurable**: Can size and characteristics be measured?
- **Accessible**: Can segments be reached effectively?
- **Substantial**: Are segments large enough to be profitable?
- **Differentiable**: Do segments respond differently to marketing?
- **Actionable**: Can effective programs be developed for segments?

Segments must meet these criteria to be strategically useful.

### Target Market Selection

Choosing which segments to target:
- **Undifferentiated Strategy**: One marketing mix for entire market
- **Differentiated Strategy**: Different mixes for different segments
- **Concentrated Strategy**: Focusing on one or few segments
- **Micromarketing**: Customizing for individuals or local areas
- **Target Market Evaluation**: Assessing segment attractiveness and fit

Selection depends on company resources and market characteristics.

### Positioning Strategy

Creating distinct market positions:
- **Positioning Statements**: Clear statements of market position
- **Perceptual Maps**: Visual representations of competitive positions
- **Repositioning**: Changing market perceptions over time
- **Value Propositions**: Benefits offered to target segments
- **Positioning Implementation**: Communicating positions effectively

Positioning creates competitive advantage in target segments.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What segments by age, gender, and income?",
          options: [
            "Geographic Segmentation",
            "Demographic Segmentation",
            "Psychographic Segmentation",
            "Behavioral Segmentation"
          ],
          correctAnswer: 1,
          explanation: "Demographic segmentation divides markets based on population characteristics like age, gender, income, and education."
        },
        {
          id: 2,
          question: "What segments by location and region?",
          options: [
            "Demographic Segmentation",
            "Geographic Segmentation",
            "Firmographic Segmentation",
            "Psychographic Segmentation"
          ],
          correctAnswer: 1,
          explanation: "Geographic segmentation divides markets based on location, region, climate, or population density."
        },
        {
          id: 3,
          question: "What segments by lifestyle and values?",
          options: [
            "Geographic Segmentation",
            "Psychographic Segmentation",
            "Behavioral Segmentation",
            "Firmographic Segmentation"
          ],
          correctAnswer: 1,
          explanation: "Psychographic segmentation divides markets based on lifestyle, values, personality, and interests."
        },
        {
          id: 4,
          question: "What segments by usage patterns and benefits sought?",
          options: [
            "Psychographic Segmentation",
            "Behavioral Segmentation",
            "Firmographic Segmentation",
            "Demographic Segmentation"
          ],
          correctAnswer: 1,
          explanation: "Behavioral segmentation divides markets based on product usage, benefits sought, or loyalty status."
        },
        {
          id: 5,
          question: "What segments B2B markets by company characteristics?",
          options: [
            "Behavioral Segmentation",
            "Firmographic Segmentation",
            "Demographic Segmentation",
            "Geographic Segmentation"
          ],
          correctAnswer: 1,
          explanation: "Firmographic segmentation divides business markets based on company size, industry, location, etc."
        },
        {
          id: 6,
          question: "What asks if segment size can be measured?",
          options: [
            "Accessible",
            "Measurable",
            "Substantial",
            "Differentiable"
          ],
          correctAnswer: 1,
          explanation: "Measurable means the segment's size and characteristics can be quantified and analyzed."
        },
        {
          id: 7,
          question: "What asks if segments can be reached effectively?",
          options: [
            "Measurable",
            "Accessible",
            "Actionable",
            "Substantial"
          ],
          correctAnswer: 1,
          explanation: "Accessible means the segment can be reached with marketing communications and distribution."
        },
        {
          id: 8,
          question: "What asks if segments are large enough to be profitable?",
          options: [
            "Accessible",
            "Substantial",
            "Differentiable",
            "Actionable"
          ],
          correctAnswer: 1,
          explanation: "Substantial means the segment is large enough to justify developing targeted marketing programs."
        },
        {
          id: 9,
          question: "What asks if segments respond differently to marketing?",
          options: [
            "Substantial",
            "Differentiable",
            "Actionable",
            "Measurable"
          ],
          correctAnswer: 1,
          explanation: "Differentiable means segments respond differently to marketing mixes and can be treated separately."
        },
        {
          id: 10,
          question: "What asks if effective programs can be developed?",
          options: [
            "Differentiable",
            "Actionable",
            "Measurable",
            "Accessible"
          ],
          correctAnswer: 1,
          explanation: "Actionable means the company has resources to develop and implement effective marketing programs."
        },
        {
          id: 11,
          question: "What uses one marketing mix for entire market?",
          options: [
            "Differentiated Strategy",
            "Undifferentiated Strategy",
            "Concentrated Strategy",
            "Micromarketing"
          ],
          correctAnswer: 1,
          explanation: "Undifferentiated strategy treats the entire market as homogeneous with one marketing mix."
        },
        {
          id: 12,
          question: "What uses different mixes for different segments?",
          options: [
            "Undifferentiated Strategy",
            "Differentiated Strategy",
            "Concentrated Strategy",
            "Target Market Evaluation"
          ],
          correctAnswer: 1,
          explanation: "Differentiated strategy develops different marketing mixes for different market segments."
        },
        {
          id: 13,
          question: "What focuses on one or few segments?",
          options: [
            "Differentiated Strategy",
            "Concentrated Strategy",
            "Micromarketing",
            "Undifferentiated Strategy"
          ],
          correctAnswer: 1,
          explanation: "Concentrated strategy focuses resources on one or a few market segments."
        },
        {
          id: 14,
          question: "What customizes for individuals or local areas?",
          options: [
            "Concentrated Strategy",
            "Micromarketing",
            "Target Market Evaluation",
            "Differentiated Strategy"
          ],
          correctAnswer: 1,
          explanation: "Micromarketing involves customizing products and marketing for individuals or local areas."
        },
        {
          id: 15,
          question: "What creates clear statements of market position?",
          options: [
            "Perceptual Maps",
            "Positioning Statements",
            "Repositioning",
            "Value Propositions"
          ],
          correctAnswer: 1,
          explanation: "Positioning statements clearly communicate how a brand wants to be perceived in the market."
        },
        {
          id: 16,
          question: "What creates visual representations of competitive positions?",
          options: [
            "Positioning Statements",
            "Perceptual Maps",
            "Value Propositions",
            "Positioning Implementation"
          ],
          correctAnswer: 1,
          explanation: "Perceptual maps visually represent how consumers perceive competing brands on key dimensions."
        },
        {
          id: 17,
          question: "What changes market perceptions over time?",
          options: [
            "Perceptual Maps",
            "Repositioning",
            "Value Propositions",
            "Positioning Implementation"
          ],
          correctAnswer: 1,
          explanation: "Repositioning involves changing how a brand is perceived relative to competitors."
        },
        {
          id: 18,
          question: "What describes benefits offered to target segments?",
          options: [
            "Repositioning",
            "Value Propositions",
            "Positioning Implementation",
            "Positioning Statements"
          ],
          correctAnswer: 1,
          explanation: "Value propositions describe the benefits and value a brand offers to its target customers."
        },
        {
          id: 19,
          question: "How many segmentation bases were specifically listed?",
          options: [
            "Three",
            "Five",
            "Seven",
            "Nine"
          ],
          correctAnswer: 1,
          explanation: "Five bases: demographic, geographic, psychographic, behavioral, and firmographic segmentation."
        },
        {
          id: 20,
          question: "How many segmentation evaluation criteria were listed?",
          options: [
            "Three",
            "Five",
            "Seven",
            "Nine"
          ],
          correctAnswer: 1,
          explanation: "Five criteria: measurable, accessible, substantial, differentiable, and actionable."
        }
      ]
    },
    {
      id: 8,
      title: "Product and Service Research",
      content: `
## Innovation and Development Insights

Product and service research guides development, improvement, and innovation. Advanced techniques ensure offerings meet market needs and achieve competitive advantage.

### Concept Development Research

Researching new product or service concepts:
- **Idea Generation**: Sources for new product ideas
- **Concept Testing**: Evaluating initial product concepts
- **Feature Prioritization**: Determining which features to include
- **Price Sensitivity Testing**: Determining acceptable price ranges
- **Market Sizing**: Estimating potential market size

Concept research reduces uncertainty in early development stages.

### Product Development Research

Research during product design and development:
- **Usability Testing**: Testing ease of use and user experience
- **Prototype Testing**: Testing early versions with users
- **Packaging Research**: Testing packaging designs and effectiveness
- **Name Testing**: Evaluating potential product names
- **Design Optimization**: Refining product design based on feedback

Development research improves product design before launch.

### Product Testing Methods

Testing products with target customers:
- **In-Home Usage Tests**: Products tested in normal usage environments
- **Central Location Tests**: Controlled testing in research facilities
- **Blind Testing**: Testing without brand identification
- **Comparative Testing**: Testing against competitive products
- **Extended Use Testing**: Testing over longer periods

Different testing methods provide different types of insights.

### Service Quality Research

Research specific to service offerings:
- **SERVQUAL Model**: Measuring service quality dimensions
- **Mystery Shopping**: Evaluating service delivery anonymously
- **Service Blueprinting**: Mapping service processes and touchpoints
- **Customer Journey Mapping**: Tracking customer service experiences
- **Service Gap Analysis**: Identifying gaps in service delivery

Service research ensures consistent, high-quality service delivery.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What involves sources for new product ideas?",
          options: [
            "Concept Testing",
            "Idea Generation",
            "Feature Prioritization",
            "Market Sizing"
          ],
          correctAnswer: 1,
          explanation: "Idea generation involves systematically collecting and developing new product or service concepts."
        },
        {
          id: 2,
          question: "What evaluates initial product concepts?",
          options: [
            "Idea Generation",
            "Concept Testing",
            "Price Sensitivity Testing",
            "Market Sizing"
          ],
          correctAnswer: 1,
          explanation: "Concept testing evaluates initial product ideas before significant development resources are committed."
        },
        {
          id: 3,
          question: "What determines which features to include?",
          options: [
            "Concept Testing",
            "Feature Prioritization",
            "Price Sensitivity Testing",
            "Usability Testing"
          ],
          correctAnswer: 1,
          explanation: "Feature prioritization determines which product features are most important to target customers."
        },
        {
          id: 4,
          question: "What determines acceptable price ranges?",
          options: [
            "Feature Prioritization",
            "Price Sensitivity Testing",
            "Market Sizing",
            "Prototype Testing"
          ],
          correctAnswer: 1,
          explanation: "Price sensitivity testing determines what prices customers are willing to pay for a product."
        },
        {
          id: 5,
          question: "What estimates potential market size?",
          options: [
            "Price Sensitivity Testing",
            "Market Sizing",
            "Usability Testing",
            "Prototype Testing"
          ],
          correctAnswer: 1,
          explanation: "Market sizing estimates the potential sales volume or revenue for a new product."
        },
        {
          id: 6,
          question: "What tests ease of use and user experience?",
          options: [
            "Prototype Testing",
            "Usability Testing",
            "Packaging Research",
            "Name Testing"
          ],
          correctAnswer: 1,
          explanation: "Usability testing evaluates how easy and intuitive a product is to use."
        },
        {
          id: 7,
          question: "What tests early versions with users?",
          options: [
            "Usability Testing",
            "Prototype Testing",
            "Design Optimization",
            "Packaging Research"
          ],
          correctAnswer: 1,
          explanation: "Prototype testing involves testing early product versions to identify problems and improvements."
        },
        {
          id: 8,
          question: "What tests packaging designs and effectiveness?",
          options: [
            "Prototype Testing",
            "Packaging Research",
            "Name Testing",
            "Design Optimization"
          ],
          correctAnswer: 1,
          explanation: "Packaging research tests how packaging affects product perception, protection, and sales."
        },
        {
          id: 9,
          question: "What evaluates potential product names?",
          options: [
            "Packaging Research",
            "Name Testing",
            "Design Optimization",
            "Usability Testing"
          ],
          correctAnswer: 1,
          explanation: "Name testing evaluates how potential product names are perceived and remembered."
        },
        {
          id: 10,
          question: "What refines product design based on feedback?",
          options: [
            "Name Testing",
            "Design Optimization",
            "Prototype Testing",
            "Concept Testing"
          ],
          correctAnswer: 1,
          explanation: "Design optimization involves refining product design based on testing feedback and research insights."
        },
        {
          id: 11,
          question: "What tests products in normal usage environments?",
          options: [
            "Central Location Tests",
            "In-Home Usage Tests",
            "Blind Testing",
            "Comparative Testing"
          ],
          correctAnswer: 1,
          explanation: "In-home usage tests involve products being used in normal home or work environments."
        },
        {
          id: 12,
          question: "What involves controlled testing in research facilities?",
          options: [
            "In-Home Usage Tests",
            "Central Location Tests",
            "Extended Use Testing",
            "Blind Testing"
          ],
          correctAnswer: 1,
          explanation: "Central location tests are conducted in controlled research facilities for consistent conditions."
        },
        {
          id: 13,
          question: "What tests without brand identification?",
          options: [
            "Central Location Tests",
            "Blind Testing",
            "Comparative Testing",
            "Extended Use Testing"
          ],
          correctAnswer: 1,
          explanation: "Blind testing removes brand identification to focus on product attributes alone."
        },
        {
          id: 14,
          question: "What tests against competitive products?",
          options: [
            "Blind Testing",
            "Comparative Testing",
            "Extended Use Testing",
            "In-Home Usage Tests"
          ],
          correctAnswer: 1,
          explanation: "Comparative testing compares a product directly against competitor products."
        },
        {
          id: 15,
          question: "What involves testing over longer periods?",
          options: [
            "Comparative Testing",
            "Extended Use Testing",
            "Central Location Tests",
            "Blind Testing"
          ],
          correctAnswer: 1,
          explanation: "Extended use testing involves products being used over days, weeks, or months."
        },
        {
          id: 16,
          question: "What measures service quality dimensions?",
          options: [
            "Mystery Shopping",
            "SERVQUAL Model",
            "Service Blueprinting",
            "Customer Journey Mapping"
          ],
          correctAnswer: 1,
          explanation: "SERVQUAL model measures service quality across reliability, responsiveness, assurance, empathy, and tangibles."
        },
        {
          id: 17,
          question: "What evaluates service delivery anonymously?",
          options: [
            "SERVQUAL Model",
            "Mystery Shopping",
            "Service Gap Analysis",
            "Customer Journey Mapping"
          ],
          correctAnswer: 1,
          explanation: "Mystery shopping involves anonymous evaluators posing as customers to assess service quality."
        },
        {
          id: 18,
          question: "What maps service processes and touchpoints?",
          options: [
            "Mystery Shopping",
            "Service Blueprinting",
            "Customer Journey Mapping",
            "Service Gap Analysis"
          ],
          correctAnswer: 1,
          explanation: "Service blueprinting visually maps all service processes, touchpoints, and supporting systems."
        },
        {
          id: 19,
          question: "What tracks customer service experiences?",
          options: [
            "Service Blueprinting",
            "Customer Journey Mapping",
            "Service Gap Analysis",
            "SERVQUAL Model"
          ],
          correctAnswer: 1,
          explanation: "Customer journey mapping tracks all customer interactions and experiences with a service."
        },
        {
          id: 20,
          question: "How many concept development research methods were listed?",
          options: [
            "Three",
            "Five",
            "Seven",
            "Nine"
          ],
          correctAnswer: 1,
          explanation: "Five methods: idea generation, concept testing, feature prioritization, price sensitivity testing, market sizing."
        }
      ]
    },
    {
      id: 9,
      title: "Pricing Research",
      content: `
## Value and Revenue Optimization

Pricing research determines optimal prices that maximize revenue while maintaining customer value perceptions. Advanced techniques balance multiple pricing objectives.

### Pricing Research Methods

Specific methods for pricing research:
- **Van Westendorp Price Sensitivity Meter**: Determining acceptable price ranges
- **Gabor-Granger Method**: Testing specific price points
- **Conjoint Analysis**: Determining price trade-offs with features
- **Brand Price Trade-off**: Measuring brand value versus price
- **Experimental Pricing**: Testing prices in controlled experiments

Different methods address different pricing questions.

### Price Elasticity Analysis

Understanding how price changes affect demand:
- **Price Elasticity**: Responsiveness of demand to price changes
- **Cross-Price Elasticity**: Effect of competitor price changes
- **Income Elasticity**: Effect of consumer income changes
- **Promotional Elasticity**: Effect of temporary price reductions
- **Segment Elasticity**: Price sensitivity differences by segment

Elasticity analysis informs pricing strategy and revenue management.

### Value-Based Pricing Research

Setting prices based on perceived value:
- **Value Mapping**: Linking price to perceived benefits
- **Economic Value Analysis**: Calculating customer economic benefits
- **Willingness-to-Pay Research**: Determining maximum acceptable prices
- **Value Communication**: Researching how to communicate value
- **Value Segmentation**: Different value perceptions by segment

Value-based pricing aligns price with customer perceptions of worth.

### Strategic Pricing Research

Research for broader pricing strategies:
- **Price Positioning Research**: How price affects brand positioning
- **Competitive Pricing Analysis**: Understanding competitor pricing strategies
- **Price Discrimination Research**: Different prices for different segments
- **Dynamic Pricing Research**: Variable pricing based on conditions
- **Psychological Pricing Research**: Psychological effects of price presentation

Strategic research supports comprehensive pricing approaches.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What determines acceptable price ranges?",
          options: [
            "Gabor-Granger Method",
            "Van Westendorp Price Sensitivity Meter",
            "Conjoint Analysis",
            "Brand Price Trade-off"
          ],
          correctAnswer: 1,
          explanation: "Van Westendorp method identifies price ranges that are too cheap, cheap, expensive, and too expensive."
        },
        {
          id: 2,
          question: "What tests specific price points?",
          options: [
            "Van Westendorp Price Sensitivity Meter",
            "Gabor-Granger Method",
            "Experimental Pricing",
            "Conjoint Analysis"
          ],
          correctAnswer: 1,
          explanation: "Gabor-Granger method tests specific price points to determine purchase likelihood at each price."
        },
        {
          id: 3,
          question: "What determines price trade-offs with features?",
          options: [
            "Gabor-Granger Method",
            "Conjoint Analysis",
            "Brand Price Trade-off",
            "Experimental Pricing"
          ],
          correctAnswer: 1,
          explanation: "Conjoint analysis determines how customers trade off price against product features and benefits."
        },
        {
          id: 4,
          question: "What measures brand value versus price?",
          options: [
            "Conjoint Analysis",
            "Brand Price Trade-off",
            "Experimental Pricing",
            "Van Westendorp Price Sensitivity Meter"
          ],
          correctAnswer: 1,
          explanation: "Brand price trade-off measures how brand strength affects willingness to pay higher prices."
        },
        {
          id: 5,
          question: "What tests prices in controlled experiments?",
          options: [
            "Brand Price Trade-off",
            "Experimental Pricing",
            "Gabor-Granger Method",
            "Conjoint Analysis"
          ],
          correctAnswer: 1,
          explanation: "Experimental pricing tests different prices in controlled market experiments."
        },
        {
          id: 6,
          question: "What measures responsiveness of demand to price changes?",
          options: [
            "Cross-Price Elasticity",
            "Price Elasticity",
            "Income Elasticity",
            "Promotional Elasticity"
          ],
          correctAnswer: 1,
          explanation: "Price elasticity measures how quantity demanded changes when price changes."
        },
        {
          id: 7,
          question: "What measures effect of competitor price changes?",
          options: [
            "Price Elasticity",
            "Cross-Price Elasticity",
            "Segment Elasticity",
            "Income Elasticity"
          ],
          correctAnswer: 1,
          explanation: "Cross-price elasticity measures how demand for a product changes when competitor prices change."
        },
        {
          id: 8,
          question: "What measures effect of consumer income changes?",
          options: [
            "Cross-Price Elasticity",
            "Income Elasticity",
            "Promotional Elasticity",
            "Segment Elasticity"
          ],
          correctAnswer: 1,
          explanation: "Income elasticity measures how demand changes when consumer incomes change."
        },
        {
          id: 9,
          question: "What measures effect of temporary price reductions?",
          options: [
            "Income Elasticity",
            "Promotional Elasticity",
            "Segment Elasticity",
            "Price Elasticity"
          ],
          correctAnswer: 1,
          explanation: "Promotional elasticity measures how temporary price reductions affect demand."
        },
        {
          id: 10,
          question: "What measures price sensitivity differences by segment?",
          options: [
            "Promotional Elasticity",
            "Segment Elasticity",
            "Cross-Price Elasticity",
            "Income Elasticity"
          ],
          correctAnswer: 1,
          explanation: "Segment elasticity measures how price sensitivity differs across market segments."
        },
        {
          id: 11,
          question: "What links price to perceived benefits?",
          options: [
            "Economic Value Analysis",
            "Value Mapping",
            "Willingness-to-Pay Research",
            "Value Communication"
          ],
          correctAnswer: 1,
          explanation: "Value mapping visually links different price points to different levels of perceived benefits."
        },
        {
          id: 12,
          question: "What calculates customer economic benefits?",
          options: [
            "Value Mapping",
            "Economic Value Analysis",
            "Value Segmentation",
            "Willingness-to-Pay Research"
          ],
          correctAnswer: 1,
          explanation: "Economic value analysis calculates the economic benefits customers receive from a product."
        },
        {
          id: 13,
          question: "What determines maximum acceptable prices?",
          options: [
            "Economic Value Analysis",
            "Willingness-to-Pay Research",
            "Value Communication",
            "Value Segmentation"
          ],
          correctAnswer: 1,
          explanation: "Willingness-to-pay research determines the maximum price customers are willing to pay."
        },
        {
          id: 14,
          question: "What researches how to communicate value?",
          options: [
            "Willingness-to-Pay Research",
            "Value Communication",
            "Value Segmentation",
            "Value Mapping"
          ],
          correctAnswer: 1,
          explanation: "Value communication research determines the most effective ways to communicate product value."
        },
        {
          id: 15,
          question: "What identifies different value perceptions by segment?",
          options: [
            "Value Communication",
            "Value Segmentation",
            "Economic Value Analysis",
            "Willingness-to-Pay Research"
          ],
          correctAnswer: 1,
          explanation: "Value segmentation identifies groups with different perceptions of product value."
        },
        {
          id: 16,
          question: "What researches how price affects brand positioning?",
          options: [
            "Competitive Pricing Analysis",
            "Price Positioning Research",
            "Price Discrimination Research",
            "Dynamic Pricing Research"
          ],
          correctAnswer: 1,
          explanation: "Price positioning research examines how price affects brand perception and market position."
        },
        {
          id: 17,
          question: "What researches competitor pricing strategies?",
          options: [
            "Price Positioning Research",
            "Competitive Pricing Analysis",
            "Psychological Pricing Research",
            "Dynamic Pricing Research"
          ],
          correctAnswer: 1,
          explanation: "Competitive pricing analysis examines competitor pricing strategies and responses."
        },
        {
          id: 18,
          question: "What researches different prices for different segments?",
          options: [
            "Competitive Pricing Analysis",
            "Price Discrimination Research",
            "Dynamic Pricing Research",
            "Psychological Pricing Research"
          ],
          correctAnswer: 1,
          explanation: "Price discrimination research examines charging different prices to different market segments."
        },
        {
          id: 19,
          question: "What researches variable pricing based on conditions?",
          options: [
            "Price Discrimination Research",
            "Dynamic Pricing Research",
            "Psychological Pricing Research",
            "Price Positioning Research"
          ],
          correctAnswer: 1,
          explanation: "Dynamic pricing research examines variable pricing based on demand, time, or other conditions."
        },
        {
          id: 20,
          question: "How many pricing research methods were specifically listed?",
          options: [
            "Three",
            "Five",
            "Seven",
            "Nine"
          ],
          correctAnswer: 1,
          explanation: "Five methods: Van Westendorp, Gabor-Granger, conjoint analysis, brand price trade-off, experimental pricing."
        }
      ]
    },
    {
      id: 10,
      title: "Research Communication and Reporting",
      content: `
## Insight Communication Excellence

Advanced research communication transforms data into compelling stories that drive action. Effective reporting ensures research insights influence decisions and create value.

### Research Report Structure

Comprehensive report organization:
- **Executive Summary**: Key findings and recommendations
- **Introduction**: Research objectives and background
- **Methodology**: Detailed research approach
- **Findings**: Organized presentation of results
- **Analysis**: Interpretation and meaning of findings
- **Conclusions**: Summary of key insights
- **Recommendations**: Actionable suggestions
- **Appendices**: Supporting technical details

Well-structured reports guide readers through complex information.

### Data Visualization Principles

Effective visual communication of data:
- **Clarity**: Visuals should be immediately understandable
- **Accuracy**: Visuals should represent data truthfully
- **Efficiency**: Visuals should communicate efficiently
- **Aesthetics**: Visuals should be professionally appealing
- **Appropriateness**: Visuals should match audience and purpose

Good visualization enhances understanding and impact.

### Presentation Techniques

Effective oral presentation of research:
- **Audience Analysis**: Understanding audience needs and knowledge
- **Storytelling**: Creating narrative flow around findings
- **Visual Support**: Effective use of slides and visuals
- **Delivery Skills**: Engaging presentation style and delivery
- **Q&A Preparation**: Anticipating and preparing for questions

Strong presentations make research findings memorable and actionable.

### Action Planning Integration

Ensuring research leads to action:
- **Stakeholder Engagement**: Involving decision-makers throughout
- **Actionable Recommendations**: Clear, specific suggested actions
- **Implementation Planning**: How recommendations will be implemented
- **Impact Measurement**: How results will be measured
- **Follow-up Research**: Planning future research needs

Integration ensures research creates real business value.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What presents key findings and recommendations?",
          options: [
            "Introduction",
            "Executive Summary",
            "Methodology",
            "Findings"
          ],
          correctAnswer: 1,
          explanation: "The executive summary provides a concise overview for busy decision-makers."
        },
        {
          id: 2,
          question: "What presents research objectives and background?",
          options: [
            "Executive Summary",
            "Introduction",
            "Analysis",
            "Conclusions"
          ],
          correctAnswer: 1,
          explanation: "The introduction provides context and explains why the research was conducted."
        },
        {
          id: 3,
          question: "What details the research approach?",
          options: [
            "Introduction",
            "Methodology",
            "Findings",
            "Recommendations"
          ],
          correctAnswer: 1,
          explanation: "The methodology section explains how the research was conducted for credibility assessment."
        },
        {
          id: 4,
          question: "What presents organized results?",
          options: [
            "Methodology",
            "Findings",
            "Analysis",
            "Conclusions"
          ],
          correctAnswer: 1,
          explanation: "The findings section presents research results in an organized, logical manner."
        },
        {
          id: 5,
          question: "What interprets the meaning of findings?",
          options: [
            "Findings",
            "Analysis",
            "Conclusions",
            "Recommendations"
          ],
          correctAnswer: 1,
          explanation: "The analysis section interprets what the findings mean in business context."
        },
        {
          id: 6,
          question: "What summarizes key insights?",
          options: [
            "Analysis",
            "Conclusions",
            "Recommendations",
            "Appendices"
          ],
          correctAnswer: 1,
          explanation: "The conclusions section summarizes the main insights from the research."
        },
        {
          id: 7,
          question: "What provides actionable suggestions?",
          options: [
            "Conclusions",
            "Recommendations",
            "Appendices",
            "Executive Summary"
          ],
          correctAnswer: 1,
          explanation: "The recommendations section provides specific, actionable suggestions based on findings."
        },
        {
          id: 8,
          question: "What includes supporting technical details?",
          options: [
            "Recommendations",
            "Appendices",
            "Executive Summary",
            "Introduction"
          ],
          correctAnswer: 1,
          explanation: "Appendices contain supporting technical details, questionnaires, or data tables."
        },
        {
          id: 9,
          question: "What means visuals should be immediately understandable?",
          options: [
            "Accuracy",
            "Clarity",
            "Efficiency",
            "Aesthetics"
          ],
          correctAnswer: 1,
          explanation: "Clarity means visualizations should be immediately understandable without confusion."
        },
        {
          id: 10,
          question: "What means visuals should represent data truthfully?",
          options: [
            "Clarity",
            "Accuracy",
            "Appropriateness",
            "Efficiency"
          ],
          correctAnswer: 1,
          explanation: "Accuracy means visualizations should truthfully represent the underlying data."
        },
        {
          id: 11,
          question: "What means visuals should communicate efficiently?",
          options: [
            "Accuracy",
            "Efficiency",
            "Aesthetics",
            "Appropriateness"
          ],
          correctAnswer: 1,
          explanation: "Efficiency means visualizations should communicate maximum information with minimum effort."
        },
        {
          id: 12,
          question: "What means visuals should be professionally appealing?",
          options: [
            "Efficiency",
            "Aesthetics",
            "Appropriateness",
            "Clarity"
          ],
          correctAnswer: 1,
          explanation: "Aesthetics means visualizations should be visually appealing and professionally presented."
        },
        {
          id: 13,
          question: "What means visuals should match audience and purpose?",
          options: [
            "Aesthetics",
            "Appropriateness",
            "Clarity",
            "Accuracy"
          ],
          correctAnswer: 1,
          explanation: "Appropriateness means visualizations should be suitable for the audience and communication purpose."
        },
        {
          id: 14,
          question: "What involves understanding audience needs and knowledge?",
          options: [
            "Storytelling",
            "Audience Analysis",
            "Visual Support",
            "Delivery Skills"
          ],
          correctAnswer: 1,
          explanation: "Audience analysis involves understanding who will receive the presentation and what they need."
        },
        {
          id: 15,
          question: "What creates narrative flow around findings?",
          options: [
            "Audience Analysis",
            "Storytelling",
            "Q&A Preparation",
            "Visual Support"
          ],
          correctAnswer: 1,
          explanation: "Storytelling creates a compelling narrative that makes findings memorable and engaging."
        },
        {
          id: 16,
          question: "What involves effective use of slides and visuals?",
          options: [
            "Storytelling",
            "Visual Support",
            "Delivery Skills",
            "Q&A Preparation"
          ],
          correctAnswer: 1,
          explanation: "Visual support involves using slides, charts, and other visuals effectively during presentations."
        },
        {
          id: 17,
          question: "What involves engaging presentation style and delivery?",
          options: [
            "Visual Support",
            "Delivery Skills",
            "Q&A Preparation",
            "Audience Analysis"
          ],
          correctAnswer: 1,
          explanation: "Delivery skills involve how the presenter communicates, engages, and connects with the audience."
        },
        {
          id: 18,
          question: "What involves anticipating and preparing for questions?",
          options: [
            "Delivery Skills",
            "Q&A Preparation",
            "Storytelling",
            "Visual Support"
          ],
          correctAnswer: 1,
          explanation: "Q&A preparation involves anticipating questions and preparing thoughtful responses."
        },
        {
          id: 19,
          question: "How many research report sections were specifically listed?",
          options: [
            "Five",
            "Seven",
            "Nine",
            "Eleven"
          ],
          correctAnswer: 2,
          explanation: "Eight sections: executive summary, introduction, methodology, findings, analysis, conclusions, recommendations, appendices."
        },
        {
          id: 20,
          question: "How many data visualization principles were listed?",
          options: [
            "Three",
            "Five",
            "Seven",
            "Nine"
          ],
          correctAnswer: 1,
          explanation: "Five principles: clarity, accuracy, efficiency, aesthetics, appropriateness."
        }
      ]
    }
  ],

  // FINAL EXAM - 40 COMPREHENSIVE QUESTIONS
  finalExam: {
    id: "market-research-diploma-exam",
    title: "Market Research Diploma Final Exam",
    description: "Comprehensive examination covering all 10 modules of the Market Research Diploma course.",
    passingScore: 70,
    timeLimit: 90, // minutes
    questions: [
      {
        id: 1,
        question: "What type of research is used when little is known about a topic?",
        options: [
          "Descriptive Research",
          "Causal Research",
          "Exploratory Research",
          "Quantitative Research"
        ],
        correctAnswer: 2,
        explanation: "Exploratory research helps understand new or unclear topics before designing more structured studies.",
        module: 1
      },
      {
        id: 2,
        question: "What tracks changes over time with same respondents?",
        options: [
          "Cross-sectional Studies",
          "Longitudinal Studies",
          "Experimental Designs",
          "Conjoint Analysis"
        ],
        correctAnswer: 1,
        explanation: "Longitudinal studies follow the same respondents over time to track changes and trends.",
        module: 2
      },
      {
        id: 3,
        question: "What gives equal chance to every population member?",
        options: [
          "Systematic Sampling",
          "Simple Random Sampling",
          "Stratified Sampling",
          "Cluster Sampling"
        ],
        correctAnswer: 1,
        explanation: "Simple random sampling gives every population member an equal chance of selection.",
        module: 3
      },
      {
        id: 4,
        question: "What includes mean, median, and mode?",
        options: [
          "Measures of Dispersion",
          "Measures of Central Tendency",
          "Distribution Analysis",
          "Cross-tabulation"
        ],
        correctAnswer: 1,
        explanation: "Measures of central tendency describe the center or typical value of a dataset.",
        module: 4
      },
      {
        id: 5,
        question: "What is becoming aware of a need in consumer decision process?",
        options: [
          "Information Search",
          "Problem Recognition",
          "Evaluation of Alternatives",
          "Purchase Decision"
        ],
        correctAnswer: 1,
        explanation: "Problem recognition occurs when consumers become aware of a gap between actual and desired states.",
        module: 5
      },
      {
        id: 6,
        question: "What includes annual reports and SEC filings in competitive intelligence?",
        options: [
          "Industry Analysis",
          "Public Sources",
          "Customer Feedback",
          "Employee Insights"
        ],
        correctAnswer: 1,
        explanation: "Public sources include legally required disclosures, reports, and publicly available information.",
        module: 6
      },
      {
        id: 7,
        question: "What segments by age, gender, and income?",
        options: [
          "Geographic Segmentation",
          "Demographic Segmentation",
          "Psychographic Segmentation",
          "Behavioral Segmentation"
        ],
        correctAnswer: 1,
        explanation: "Demographic segmentation divides markets based on population characteristics.",
        module: 7
      },
      {
        id: 8,
        question: "What involves sources for new product ideas?",
        options: [
          "Concept Testing",
          "Idea Generation",
          "Feature Prioritization",
          "Market Sizing"
        ],
        correctAnswer: 1,
        explanation: "Idea generation involves systematically collecting and developing new product concepts.",
        module: 8
      },
      {
        id: 9,
        question: "What determines acceptable price ranges?",
        options: [
          "Gabor-Granger Method",
          "Van Westendorp Price Sensitivity Meter",
          "Conjoint Analysis",
          "Brand Price Trade-off"
        ],
        correctAnswer: 1,
        explanation: "Van Westendorp method identifies price ranges that are acceptable to customers.",
        module: 9
      },
      {
        id: 10,
        question: "What presents key findings and recommendations in research reports?",
        options: [
          "Introduction",
          "Executive Summary",
          "Methodology",
          "Findings"
        ],
        correctAnswer: 1,
        explanation: "The executive summary provides a concise overview for decision-makers.",
        module: 10
      },
      {
        id: 11,
        question: "Which research documents characteristics of markets?",
        options: [
          "Exploratory Research",
          "Descriptive Research",
          "Causal Research",
          "Qualitative Research"
        ],
        correctAnswer: 1,
        explanation: "Descriptive research measures and describes market characteristics, behaviors, and trends.",
        module: 1
      },
      {
        id: 12,
        question: "What involves repeated measurements from same people?",
        options: [
          "Longitudinal Studies",
          "Panel Research",
          "Experimental Designs",
          "MaxDiff Analysis"
        ],
        correctAnswer: 1,
        explanation: "Panel research collects data repeatedly from the same group of respondents over time.",
        module: 2
      },
      {
        id: 13,
        question: "What selects every nth member from a list?",
        options: [
          "Simple Random Sampling",
          "Systematic Sampling",
          "Stratified Sampling",
          "Multistage Sampling"
        ],
        correctAnswer: 1,
        explanation: "Systematic sampling selects participants at regular intervals from a sampling frame.",
        module: 3
      },
      {
        id: 14,
        question: "What includes standard deviation and variance?",
        options: [
          "Measures of Central Tendency",
          "Measures of Dispersion",
          "Trend Analysis",
          "Distribution Analysis"
        ],
        correctAnswer: 1,
        explanation: "Measures of dispersion describe how spread out or variable the data is.",
        module: 4
      },
      {
        id: 15,
        question: "What involves seeking information about options?",
        options: [
          "Problem Recognition",
          "Information Search",
          "Purchase Decision",
          "Post-Purchase Evaluation"
        ],
        correctAnswer: 1,
        explanation: "Information search involves gathering information about available products or services.",
        module: 5
      },
      {
        id: 16,
        question: "What analyzes strengths, weaknesses, opportunities, threats?",
        options: [
          "Porter's Five Forces",
          "SWOT Analysis",
          "Strategic Group Mapping",
          "Value Chain Analysis"
        ],
        correctAnswer: 1,
        explanation: "SWOT analysis examines internal strengths/weaknesses and external opportunities/threats.",
        module: 6
      },
      {
        id: 17,
        question: "What asks if segment size can be measured?",
        options: [
          "Accessible",
          "Measurable",
          "Substantial",
          "Differentiable"
        ],
        correctAnswer: 1,
        explanation: "Measurable means the segment's size and characteristics can be quantified.",
        module: 7
      },
      {
        id: 18,
        question: "What tests ease of use and user experience?",
        options: [
          "Prototype Testing",
          "Usability Testing",
          "Packaging Research",
          "Name Testing"
        ],
        correctAnswer: 1,
        explanation: "Usability testing evaluates how easy and intuitive a product is to use.",
        module: 8
      },
      {
        id: 19,
        question: "What measures responsiveness of demand to price changes?",
        options: [
          "Cross-Price Elasticity",
          "Price Elasticity",
          "Income Elasticity",
          "Promotional Elasticity"
        ],
        correctAnswer: 1,
        explanation: "Price elasticity measures how quantity demanded changes when price changes.",
        module: 9
      },
      {
        id: 20,
        question: "What means visuals should be immediately understandable?",
        options: [
          "Accuracy",
          "Clarity",
          "Efficiency",
          "Aesthetics"
        ],
        correctAnswer: 1,
        explanation: "Clarity means visualizations should be immediately understandable without confusion.",
        module: 10
      },
      {
        id: 21,
        question: "What ethical principle requires participant understanding?",
        options: [
          "Confidentiality",
          "Informed Consent",
          "Data Privacy",
          "Transparency"
        ],
        correctAnswer: 1,
        explanation: "Informed consent means participants fully understand the research before agreeing.",
        module: 1
      },
      {
        id: 22,
        question: "What tests causal relationships in controlled settings?",
        options: [
          "Panel Research",
          "Experimental Designs",
          "Conjoint Analysis",
          "Focus Groups"
        ],
        correctAnswer: 1,
        explanation: "Experimental designs manipulate variables in controlled settings.",
        module: 2
      },
      {
        id: 23,
        question: "What divides population into subgroups?",
        options: [
          "Systematic Sampling",
          "Stratified Sampling",
          "Cluster Sampling",
          "Convenience Sampling"
        ],
        correctAnswer: 1,
        explanation: "Stratified sampling divides population into subgroups and samples from each.",
        module: 3
      },
      {
        id: 24,
        question: "What tests assumptions about populations?",
        options: [
          "Trend Analysis",
          "Hypothesis Testing",
          "Confidence Intervals",
          "T-tests"
        ],
        correctAnswer: 1,
        explanation: "Hypothesis testing uses sample data to test assumptions about populations.",
        module: 4
      },
      {
        id: 25,
        question: "What includes culture and social class influences?",
        options: [
          "Social Factors",
          "Cultural Factors",
          "Personal Factors",
          "Psychological Factors"
        ],
        correctAnswer: 1,
        explanation: "Cultural factors include broad cultural values, subcultures, and social class.",
        module: 5
      },
      {
        id: 26,
        question: "What analyzes industry competitive forces?",
        options: [
          "SWOT Analysis",
          "Porter's Five Forces",
          "Benchmarking",
          "Strategic Group Mapping"
        ],
        correctAnswer: 1,
        explanation: "Porter's Five Forces analyzes competitive rivalry and other industry forces.",
        module: 6
      },
      {
        id: 27,
        question: "What uses one marketing mix for entire market?",
        options: [
          "Differentiated Strategy",
          "Undifferentiated Strategy",
          "Concentrated Strategy",
          "Micromarketing"
        ],
        correctAnswer: 1,
        explanation: "Undifferentiated strategy treats the entire market as homogeneous.",
        module: 7
      },
      {
        id: 28,
        question: "What tests products in normal usage environments?",
        options: [
          "Central Location Tests",
          "In-Home Usage Tests",
          "Blind Testing",
          "Comparative Testing"
        ],
        correctAnswer: 1,
        explanation: "In-home usage tests involve products being used in normal environments.",
        module: 8
      },
      {
        id: 29,
        question: "What links price to perceived benefits?",
        options: [
          "Economic Value Analysis",
          "Value Mapping",
          "Willingness-to-Pay Research",
          "Value Communication"
        ],
        correctAnswer: 1,
        explanation: "Value mapping visually links price points to perceived benefits.",
        module: 9
      },
      {
        id: 30,
        question: "What involves understanding audience needs and knowledge?",
        options: [
          "Storytelling",
          "Audience Analysis",
          "Visual Support",
          "Delivery Skills"
        ],
        correctAnswer: 1,
        explanation: "Audience analysis involves understanding who will receive the presentation.",
        module: 10
      },
      {
        id: 31,
        question: "What protects participant information?",
        options: [
          "Informed Consent",
          "Confidentiality",
          "Transparency",
          "Avoiding Harm"
        ],
        correctAnswer: 1,
        explanation: "Confidentiality ensures participant information is kept private.",
        module: 1
      },
      {
        id: 32,
        question: "What measures preferences for product features?",
        options: [
          "Experimental Designs",
          "Conjoint Analysis",
          "MaxDiff Analysis",
          "In-Depth Interviews"
        ],
        correctAnswer: 1,
        explanation: "Conjoint analysis measures how consumers value different product features.",
        module: 2
      },
      {
        id: 33,
        question: "What uses easily accessible participants?",
        options: [
          "Judgmental Sampling",
          "Convenience Sampling",
          "Quota Sampling",
          "Snowball Sampling"
        ],
        correctAnswer: 1,
        explanation: "Convenience sampling selects participants who are easily available.",
        module: 3
      },
      {
        id: 34,
        question: "What compares means between two groups?",
        options: [
          "Confidence Intervals",
          "T-tests",
          "ANOVA",
          "Chi-square Tests"
        ],
        correctAnswer: 1,
        explanation: "T-tests compare whether means of two groups are statistically different.",
        module: 4
      },
      {
        id: 35,
        question: "What predicts behavior from attitudes, norms, and control?",
        options: [
          "Consumer Decision Model",
          "Theory of Planned Behavior",
          "Elaboration Likelihood Model",
          "Habitual Behavior Model"
        ],
        correctAnswer: 1,
        explanation: "Theory of Planned Behavior predicts behavior based on attitudes, norms, and control.",
        module: 5
      },
      {
        id: 36,
        question: "What visualizes brand positions in consumers' minds?",
        options: [
          "Gap Analysis",
          "Perceptual Mapping",
          "Market Share Analysis",
          "Growth Vector Analysis"
        ],
        correctAnswer: 1,
        explanation: "Perceptual mapping creates visual representations of brand perceptions.",
        module: 6
      },
      {
        id: 37,
        question: "What creates clear statements of market position?",
        options: [
          "Perceptual Maps",
          "Positioning Statements",
          "Repositioning",
          "Value Propositions"
        ],
        correctAnswer: 1,
        explanation: "Positioning statements communicate how a brand wants to be perceived.",
        module: 7
      },
      {
        id: 38,
        question: "What measures service quality dimensions?",
        options: [
          "Mystery Shopping",
          "SERVQUAL Model",
          "Service Blueprinting",
          "Customer Journey Mapping"
        ],
        correctAnswer: 1,
        explanation: "SERVQUAL model measures service quality across multiple dimensions.",
        module: 8
      },
      {
        id: 39,
        question: "What researches how price affects brand positioning?",
        options: [
          "Competitive Pricing Analysis",
          "Price Positioning Research",
          "Price Discrimination Research",
          "Dynamic Pricing Research"
        ],
        correctAnswer: 1,
        explanation: "Price positioning research examines how price affects brand perception.",
        module: 9
      },
      {
        id: 40,
        question: "What creates narrative flow around findings?",
        options: [
          "Audience Analysis",
          "Storytelling",
          "Q&A Preparation",
          "Visual Support"
        ],
        correctAnswer: 1,
        explanation: "Storytelling creates a compelling narrative that makes findings memorable.",
        module: 10
      }
    ]
  }
};

export default marketResearchDiploma;
