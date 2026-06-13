// addiction-counseling-diploma.ts
export const addictionCounselingDiploma = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "addiction-counseling-diploma",
  title: "Addiction Counseling (Diploma)",
  description: "Advanced training in evidence-based addiction counseling techniques, assessment methods, treatment planning, and relapse prevention strategies for professional practice.",
  duration: "12 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  prerequisite: "Quit Smoking Coaching (Certificate) or equivalent",
  icon: "🔄",
  badge: "Diploma",
  modulesCompleted: 0,
  totalModules: 6,

  // 2. MODULE ARCHITECTURE
  modules: [
    {
      id: 1,
      title: "Foundations of Addiction Science",
      content: `
# Module 1: Foundations of Addiction Science

**Welcome to advanced addiction counseling.** This module establishes the scientific foundation for understanding addiction as a complex brain disorder.

## The Brain Disease Model of Addiction

Addiction is now understood as a chronic brain disease characterized by:
- **Compulsive drug seeking and use** despite harmful consequences
- **Long-lasting brain changes** that persist after detoxification
- **High relapse rates** similar to other chronic diseases
- **Impaired behavioral control** due to brain circuitry changes

**Key brain regions affected:**
- **Prefrontal Cortex:** Decision-making and impulse control
- **Amygdala:** Emotional responses and stress
- **Hippocampus:** Memory formation
- **Nucleus Accumbens:** Reward and pleasure center
- **Ventral Tegmental Area:** Dopamine production

## Neurotransmitters in Addiction

Understanding chemical messengers helps explain addiction's power:

**Dopamine:** Primary reward neurotransmitter
- Reinforces behaviors needed for survival
- Drugs artificially spike dopamine levels
- Natural rewards become less satisfying

**Glutamate:** Learning and memory neurotransmitter
- Strengthens drug-related memories
- Creates powerful conditioned responses
- Explains craving triggers

**GABA:** Inhibitory neurotransmitter
- Calms neural activity
- Many drugs enhance GABA effects
- Withdrawal involves GABA imbalance

**Serotonin:** Mood and impulse control
- Regulates emotions and aggression
- Many drugs affect serotonin levels
- Linked to depression in withdrawal

## The Three-Stage Addiction Cycle

Addiction progresses through predictable stages:

**1. Binge/Intoxication Stage**
- Initial pleasure and reward from substance
- Dopamine release reinforces use
- Learning occurs: "This feels good"

**2. Withdrawal/Negative Affect Stage**
- Substance effects wear off
- Negative emotions and physical symptoms
- Use continues to avoid discomfort

**3. Preoccupation/Anticipation Stage**
- Craving and obsessive thoughts
- Planning next use
- Impulse control diminishes

## Genetic and Environmental Factors

Addiction vulnerability involves both nature and nurture:

**Genetic Factors:**
- 40-60% of addiction risk is genetic
- Multiple genes involved, not one "addiction gene"
- Affects drug metabolism and brain chemistry
- Can influence treatment response

**Environmental Factors:**
- Early life trauma and ACEs (Adverse Childhood Experiences)
- Peer influences and social networks
- Availability and accessibility of substances
- Cultural attitudes toward substance use
- Stress and coping resources

## Tolerance, Dependence, and Addiction

Understanding these distinct concepts is crucial:

**Tolerance:** Needing more substance for same effect
- Body adapts to substance presence
- Can develop rapidly with some drugs
- Not always indicative of addiction

**Dependence:** Physical adaptation to substance
- Withdrawal symptoms occur when stopping
- Can occur with prescribed medications
- Managed through gradual tapering

**Addiction:** Compulsive use despite harm
- Includes psychological dependence
- Loss of control over use
- Continues despite negative consequences

## Co-occurring Disorders

Addiction rarely exists in isolation:

**Common Co-occurring Conditions:**
- Depression and anxiety disorders
- PTSD and trauma-related disorders
- ADHD and impulse control disorders
- Personality disorders
- Other substance use disorders

**Integrated Treatment Principles:**
- Treat both conditions simultaneously
- Coordinate care between providers
- Address underlying trauma when present
- Monitor medication interactions

## The Counselor's Scientific Literacy

Effective counseling requires understanding:
- How different substances affect the brain
- Timeframes for withdrawal and recovery
- Medication-assisted treatment options
- Evidence-based interventions
- Neuroplasticity and recovery potential

Remember: Scientific understanding enhances empathy and informs effective treatment strategies.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What model views addiction as a chronic brain disease?",
          options: ["Moral Model", "Brain Disease Model", "Choice Model", "Spiritual Model"],
          correctAnswer: 1,
          explanation: "The Brain Disease Model recognizes addiction as a chronic medical condition with brain changes."
        },
        {
          id: 2,
          question: "Which neurotransmitter is primarily involved in reward and reinforcement?",
          options: ["Serotonin", "Dopamine", "GABA", "Glutamate"],
          correctAnswer: 1,
          explanation: "Dopamine is the primary reward neurotransmitter that reinforces substance use."
        },
        {
          id: 3,
          question: "What percentage of addiction risk is estimated to be genetic?",
          options: ["10-20%", "40-60%", "70-80%", "90-100%"],
          correctAnswer: 1,
          explanation: "Research suggests 40-60% of addiction vulnerability comes from genetic factors."
        },
        {
          id: 4,
          question: "Which stage involves craving and obsessive thoughts about use?",
          options: ["Binge/Intoxication", "Withdrawal/Negative Affect", "Preoccupation/Anticipation", "Recovery/Maintenance"],
          correctAnswer: 2,
          explanation: "Preoccupation/Anticipation stage involves craving and planning for next use."
        },
        {
          id: 5,
          question: "What is tolerance in addiction?",
          options: ["Needing more for same effect", "Physical dependence", "Compulsive use", "Psychological craving"],
          correctAnswer: 0,
          explanation: "Tolerance means needing increased amounts to achieve the same effect."
        },
        {
          id: 6,
          question: "Which brain region handles decision-making and impulse control?",
          options: ["Amygdala", "Prefrontal Cortex", "Hippocampus", "Nucleus Accumbens"],
          correctAnswer: 1,
          explanation: "Prefrontal cortex manages executive functions like decision-making and impulse control."
        },
        {
          id: 7,
          question: "What does GABA primarily do in the brain?",
          options: ["Increases arousal", "Calms neural activity", "Enhances memory", "Regulates mood"],
          correctAnswer: 1,
          explanation: "GABA is an inhibitory neurotransmitter that calms or slows neural activity."
        },
        {
          id: 8,
          question: "What are ACEs in addiction risk?",
          options: ["Advanced Clinical Experiences", "Addiction Causing Events", "Adverse Childhood Experiences", "Addiction Contributing Elements"],
          correctAnswer: 2,
          explanation: "ACEs are Adverse Childhood Experiences that increase addiction vulnerability."
        },
        {
          id: 9,
          question: "Which is NOT necessarily indicative of addiction?",
          options: ["Tolerance", "Compulsive use despite harm", "Loss of control", "Continued use despite consequences"],
          correctAnswer: 0,
          explanation: "Tolerance can occur without addiction, such as with prescribed medications."
        },
        {
          id: 10,
          question: "What should be treated simultaneously with addiction?",
          options: ["Only the addiction", "Co-occurring disorders", "Family members only", "Employment issues only"],
          correctAnswer: 1,
          explanation: "Integrated treatment addresses both addiction and co-occurring disorders together."
        },
        {
          id: 11,
          question: "Which neurotransmitter strengthens drug-related memories?",
          options: ["Dopamine", "Glutamate", "Serotonin", "Endorphins"],
          correctAnswer: 1,
          explanation: "Glutamate is involved in learning and memory, strengthening conditioned drug responses."
        },
        {
          id: 12,
          question: "What characterizes the Withdrawal/Negative Affect stage?",
          options: ["Initial pleasure", "Negative emotions when not using", "Planning next use", "Successful recovery"],
          correctAnswer: 1,
          explanation: "This stage involves negative emotions and physical symptoms when substance effects wear off."
        },
        {
          id: 13,
          question: "What is psychological dependence?",
          options: ["Physical withdrawal symptoms", "Compulsive need for substance's effects", "Liver damage from substance", "Genetic predisposition"],
          correctAnswer: 1,
          explanation: "Psychological dependence involves emotional and mental reliance on a substance."
        },
        {
          id: 14,
          question: "Which brain area is the reward center?",
          options: ["Prefrontal Cortex", "Nucleus Accumbens", "Amygdala", "Hippocampus"],
          correctAnswer: 1,
          explanation: "Nucleus accumbens is key to the brain's reward circuitry."
        },
        {
          id: 15,
          question: "What does integrated treatment require?",
          options: ["Treating conditions separately", "Coordinating care between providers", "Ignoring mental health issues", "Focusing only on abstinence"],
          correctAnswer: 1,
          explanation: "Integrated treatment requires coordination between addiction and mental health providers."
        },
        {
          id: 16,
          question: "Which is a common co-occurring disorder with addiction?",
          options: ["Diabetes", "Arthritis", "PTSD", "Asthma"],
          correctAnswer: 2,
          explanation: "PTSD commonly co-occurs with substance use disorders."
        },
        {
          id: 17,
          question: "What happens to natural rewards in addiction?",
          options: ["They become more satisfying", "They become less satisfying", "They disappear completely", "They cause withdrawal"],
          correctAnswer: 1,
          explanation: "Natural rewards become less satisfying compared to artificial drug-induced dopamine spikes."
        },
        {
          id: 18,
          question: "What is neuroplasticity?",
          options: ["Brain damage from drugs", "Brain's ability to change and adapt", "Drug tolerance development", "Withdrawal symptom severity"],
          correctAnswer: 1,
          explanation: "Neuroplasticity is the brain's ability to reorganize and form new connections."
        },
        {
          id: 19,
          question: "Which environmental factor influences addiction?",
          options: ["Peer influences", "Genetic code only", "Brain size", "Eye color"],
          correctAnswer: 0,
          explanation: "Peer influences and social networks significantly impact substance use patterns."
        },
        {
          id: 20,
          question: "Why is scientific literacy important for counselors?",
          options: ["To sound intelligent", "To enhance empathy and inform treatment", "To prescribe medications", "To diagnose medical conditions"],
          correctAnswer: 1,
          explanation: "Understanding addiction science enhances empathy and guides evidence-based treatment."
        }
      ]
    },
    {
      id: 2,
      title: "Comprehensive Assessment Strategies",
      content: `
# Module 2: Comprehensive Assessment Strategies

**Thorough assessment is the foundation of effective treatment.** This module covers systematic approaches to evaluating clients with substance use disorders.

## The Assessment Process

Assessment is an ongoing process, not a one-time event:

**Initial Assessment Goals:**
- Establish rapport and build trust
- Understand the client's unique experience
- Identify immediate safety concerns
- Begin formulating treatment needs

**Ongoing Assessment:**
- Monitor progress and setbacks
- Adjust treatment plans as needed
- Identify emerging issues
- Evaluate treatment effectiveness

## Key Assessment Domains

Comprehensive assessment covers multiple life areas:

**1. Substance Use History**
- Age of first use and progression
- Current use patterns and quantities
- Routes of administration
- Previous quit attempts
- Withdrawal experiences

**2. Medical and Psychiatric History**
- Current medications and treatments
- Chronic health conditions
- Mental health diagnoses
- Hospitalizations and emergencies
- Family medical history

**3. Social and Environmental Factors**
- Living situation and stability
- Employment and education
- Legal issues and history
- Social support network
- Cultural and spiritual background

**4. Functional Assessment**
- Daily living skills
- Work/school functioning
- Relationship quality
- Leisure activities
- Coping skills inventory

## Standardized Assessment Tools

Evidence-based instruments provide objective data:

**Screening Tools:**
- **AUDIT:** Alcohol Use Disorders Identification Test
- **DAST:** Drug Abuse Screening Test
- **CAGE:** Cut down, Annoyed, Guilty, Eye-opener
- **ASSIST:** Alcohol, Smoking and Substance Involvement Screening Test

**Comprehensive Assessment Instruments:**
- **ASI:** Addiction Severity Index
- **GAIN:** Global Appraisal of Individual Needs
- **SASSI:** Substance Abuse Subtle Screening Inventory
- **TSI:** Trauma Symptom Inventory

**Motivation and Readiness Measures:**
- **URICA:** University of Rhode Island Change Assessment
- **SOCRATES:** Stages of Change Readiness and Treatment Eagerness Scale
- **MIS:** Motivation for Intervention Scale

## Motivational Interviewing in Assessment

Assessment should enhance motivation, not diminish it:

**Spirit of MI in Assessment:**
- Collaboration, not interrogation
- Curiosity, not judgment
- Listening more than questioning
- Exploring ambivalence respectfully

**Assessment Questions that Build Motivation:**
- "What concerns you about your substance use?"
- "What would you like to be different?"
- "What have you tried that has worked, even a little?"
- "What might be the benefits of making a change?"

## Risk Assessment and Safety Planning

Identifying and managing risks is essential:

**Suicide Risk Assessment:**
- Direct questioning about suicidal thoughts
- Assessment of plan and means
- Previous attempts and family history
- Protective factors and reasons for living

**Overdose Risk Assessment:**
- Polysubstance use patterns
- Tolerance fluctuations
- Using alone
- Lack of naloxone access

**Violence and Victimization Risk:**
- History of violence or victimization
- Current safety concerns
- Access to weapons
- Support system availability

## Cultural Competence in Assessment

Assessment must respect diversity:

**Cultural Considerations:**
- Language preferences and barriers
- Cultural explanations of addiction
- Help-seeking behaviors in culture
- Stigma concerns within community
- Traditional healing practices

**Culturally Sensitive Questions:**
- "How does your family view substance use?"
- "What would helpful support look like in your culture?"
- "Are there cultural practices that help you cope?"
- "What concerns do you have about treatment in our system?"

## Diagnosis Using DSM-5 Criteria

Understanding diagnostic criteria is essential:

**Substance Use Disorder Criteria:**
- Impaired control over use
- Social impairment
- Risky use
- Pharmacological criteria (tolerance/withdrawal)

**Severity Specifiers:**
- **Mild:** 2-3 symptoms present
- **Moderate:** 4-5 symptoms present
- **Severe:** 6+ symptoms present

**Important Distinctions:**
- Substance Use Disorder vs. Substance-Induced Disorders
- In early remission vs. sustained remission
- In controlled environment specifier

## Treatment Planning from Assessment Data

Assessment informs personalized treatment:

**Linking Assessment to Treatment:**
- Severity level determines intensity
- Co-occurring disorders guide integration
- Strengths inform empowerment strategies
- Barriers shape practical interventions

**Client-Centered Planning:**
- Involve client in interpreting results
- Prioritize based on client concerns
- Build on existing strengths
- Address most pressing needs first

## Documentation and Reporting

Professional documentation practices:

**Assessment Report Components:**
- Presenting problem and referral source
- Assessment methods used
- Findings in each domain
- Diagnostic impressions
- Treatment recommendations

**Legal and Ethical Considerations:**
- Confidentiality protections
- Mandated reporting requirements
- Release of information procedures
- Record retention policies

Remember: Good assessment is both art and science - combining objective tools with therapeutic skill to understand the whole person.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the primary goal of initial assessment?",
          options: ["Complete all paperwork", "Establish rapport and understand client", "Make immediate diagnosis", "Set long-term goals"],
          correctAnswer: 1,
          explanation: "Initial assessment focuses on building trust and understanding the client's experience."
        },
        {
          id: 2,
          question: "Which domain includes employment and living situation?",
          options: ["Substance Use History", "Medical History", "Social and Environmental Factors", "Functional Assessment"],
          correctAnswer: 2,
          explanation: "Social and environmental factors include employment, housing, and social support."
        },
        {
          id: 3,
          question: "What does AUDIT screen for?",
          options: ["Alcohol use disorders", "Drug use disorders", "Depression", "Trauma history"],
          correctAnswer: 0,
          explanation: "AUDIT is the Alcohol Use Disorders Identification Test screening tool."
        },
        {
          id: 4,
          question: "How many symptoms indicate severe Substance Use Disorder in DSM-5?",
          options: ["2-3 symptoms", "4-5 symptoms", "6+ symptoms", "10+ symptoms"],
          correctAnswer: 2,
          explanation: "Severe Substance Use Disorder is indicated by 6 or more symptoms."
        },
        {
          id: 5,
          question: "What should assessment questions do regarding motivation?",
          options: ["Build motivation", "Decrease resistance", "Force compliance", "Ignore ambivalence"],
          correctAnswer: 0,
          explanation: "Assessment questions should enhance motivation for change."
        },
        {
          id: 6,
          question: "What is a key component of suicide risk assessment?",
          options: ["Direct questioning about thoughts", "Avoiding the topic", "Assuming no risk", "Only asking family"],
          correctAnswer: 0,
          explanation: "Direct, compassionate questioning about suicidal thoughts is essential."
        },
        {
          id: 7,
          question: "What does ASI stand for?",
          options: ["Addiction Screening Instrument", "Addiction Severity Index", "Assessment of Substance Involvement", "Alcohol Severity Inventory"],
          correctAnswer: 1,
          explanation: "ASI is the Addiction Severity Index, a comprehensive assessment tool."
        },
        {
          id: 8,
          question: "What cultural consideration is important in assessment?",
          options: ["Ignoring cultural differences", "Cultural explanations of addiction", "Assuming universal experiences", "Using only Western tools"],
          correctAnswer: 1,
          explanation: "Understanding cultural explanations of addiction improves assessment accuracy."
        },
        {
          id: 9,
          question: "What does the CAGE questionnaire assess?",
          options: ["Alcohol use problems", "Drug tolerance", "Cognitive impairment", "Genetic risk"],
          correctAnswer: 0,
          explanation: "CAGE is a brief screening tool for alcohol use disorders."
        },
        {
          id: 10,
          question: "What should treatment planning be based on?",
          options: ["Assessment data", "Counselor preferences", "Standard protocols only", "Insurance requirements"],
          correctAnswer: 0,
          explanation: "Treatment should be personalized based on comprehensive assessment data."
        },
        {
          id: 11,
          question: "What is ongoing assessment for?",
          options: ["Monitoring progress", "One-time evaluation", "Filling time", "Meeting administrative needs"],
          correctAnswer: 0,
          explanation: "Ongoing assessment monitors progress and adjusts treatment as needed."
        },
        {
          id: 12,
          question: "Which assesses motivation for change?",
          options: ["URICA", "AUDIT", "DAST", "CAGE"],
          correctAnswer: 0,
          explanation: "URICA assesses stages of change and motivation."
        },
        {
          id: 13,
          question: "What increases overdose risk?",
          options: ["Using alone", "Having naloxone available", "Using with trusted friends", "Knowing your tolerance"],
          correctAnswer: 0,
          explanation: "Using substances alone significantly increases overdose mortality risk."
        },
        {
          id: 14,
          question: "What should assessment documentation include?",
          options: ["Findings in each domain", "Only positive findings", "Counselor opinions only", "Client's address only"],
          correctAnswer: 0,
          explanation: "Documentation should comprehensively cover findings in all assessed domains."
        },
        {
          id: 15,
          question: "What is the spirit of MI in assessment?",
          options: ["Collaboration, not interrogation", "Authority and direction", "Confrontation and challenge", "Neutral observation"],
          correctAnswer: 0,
          explanation: "MI spirit involves collaborative partnership rather than interrogation."
        },
        {
          id: 16,
          question: "What does functional assessment evaluate?",
          options: ["Daily living skills", "Genetic markers", "Brain chemistry", "Substance purity"],
          correctAnswer: 0,
          explanation: "Functional assessment evaluates daily living, work, and relationship functioning."
        },
        {
          id: 17,
          question: "What cultural question might be helpful?",
          options: ["How does your family view substance use?", "Why is your culture wrong?", "When will you assimilate?", "Don't consider culture"],
          correctAnswer: 0,
          explanation: "Asking about family and cultural views shows respect and improves understanding."
        },
        {
          id: 18,
          question: "What is an important legal consideration?",
          options: ["Confidentiality protections", "Sharing all information freely", "Ignoring laws", "Making up documentation"],
          correctAnswer: 0,
          explanation: "Understanding and maintaining confidentiality protections is legally and ethically essential."
        },
        {
          id: 19,
          question: "What should be prioritized in treatment planning?",
          options: ["Most pressing needs", "Easiest problems", "Insurance preferences", "Counselor expertise"],
          correctAnswer: 0,
          explanation: "Treatment should prioritize the client's most pressing concerns and needs."
        },
        {
          id: 20,
          question: "Why is ongoing assessment important?",
          options: ["Clients and situations change", "Paperwork requirements", "Filling session time", "Impressing supervisors"],
          correctAnswer: 0,
          explanation: "Ongoing assessment recognizes that clients and their situations evolve over time."
        }
      ]
    },
    {
      id: 3,
      title: "Evidence-Based Treatment Approaches",
      content: `
# Module 3: Evidence-Based Treatment Approaches

**Effective counseling uses scientifically supported methods.** This module explores interventions with proven effectiveness for treating substance use disorders.

## Cognitive Behavioral Therapy (CBT)

CBT helps clients identify and change maladaptive thoughts and behaviors:

**Core Principles:**
- Thoughts influence feelings and behaviors
- Maladaptive patterns can be identified and changed
- Skills can be learned and practiced
- Relapse prevention is a key focus

**CBT Techniques for Addiction:**
- **Cognitive Restructuring:** Challenging addictive beliefs
- **Skill Training:** Building coping alternatives
- **Behavioral Experiments:** Testing new approaches
- **Relapse Prevention Planning:** Anticipating challenges

**Addiction-Specific CBT Strategies:**
- Identifying high-risk situations
- Developing refusal skills
- Managing cravings and urges
- Problem-solving high-risk scenarios
- Building drug-free reinforcement

## Motivational Interviewing (MI)

MI enhances intrinsic motivation for change:

**Four Processes of MI:**
1. **Engaging:** Building therapeutic relationship
2. **Focusing:** Developing specific change direction
3. **Evoking:** Eliciting client's own motivation
4. **Planning:** Developing commitment to change

**MI Core Skills (OARS):**
- **Open-ended questions**
- **Affirmations**
- **Reflective listening**
- **Summaries**

**Addressing Ambivalence:**
- Developing discrepancy between values and behavior
- Rolling with resistance rather than opposing it
- Supporting self-efficacy for change
- Avoiding argumentation and confrontation

## Contingency Management (CM)

CM uses positive reinforcement to encourage sobriety:

**Basic Principles:**
- Behaviors followed by rewards increase
- Immediate reinforcement is most effective
- Tangible rewards can shape behavior
- Systematic application increases success

**Common CM Applications:**
- Voucher-based reinforcement for clean drug tests
- Prize-based contingency management
- Take-home medication privileges
- Program advancement based on progress

**Implementation Guidelines:**
- Clear behavioral targets
- Immediate reward delivery
- Consistent application
- Graduated reinforcement schedule

## Mindfulness-Based Relapse Prevention (MBRP)

MBRP combines mindfulness practices with relapse prevention:

**Mindfulness Foundations:**
- Present-moment awareness without judgment
- Observing thoughts and urges without acting
- Developing "urge surfing" skills
- Increasing distress tolerance

**MBRP Techniques:**
- Body scan meditation for craving awareness
- Mindful breathing during urges
- RAIN technique (Recognize, Accept, Investigate, Non-identification)
- Loving-kindness meditation for self-compassion

**Benefits for Addiction:**
- Reduces automatic reactivity
- Increases awareness of triggers
- Enhances emotion regulation
- Decreases severity of relapses

## Family and Systems Approaches

Addiction affects and is affected by family systems:

**Family Therapy Models:**
- **Behavioral Couples Therapy:** Improves relationship functioning
- **Multidimensional Family Therapy:** Addresses adolescent addiction
- **Network Therapy:** Involves supportive social network
- **Community Reinforcement and Family Training (CRAFT):** Teaches families how to encourage treatment

**Family Intervention Goals:**
- Improve family communication
- Establish healthy boundaries
- Address enabling behaviors
- Build family recovery support

## Medication-Assisted Treatment (MAT)

Medications can support recovery when combined with counseling:

**Alcohol Use Disorder Medications:**
- **Naltrexone:** Reduces craving and pleasure from alcohol
- **Acamprosate:** Reduces post-acute withdrawal symptoms
- **Disulfiram:** Causes unpleasant reaction if alcohol consumed

**Opioid Use Disorder Medications:**
- **Methadone:** Long-acting opioid agonist
- **Buprenorphine:** Partial opioid agonist
- **Naltrexone:** Opioid antagonist

**Tobacco/Nicotine Medications:**
- Nicotine replacement therapies (NRT)
- Bupropion (Zyban)
- Varenicline (Chantix)

**Counselor's Role in MAT:**
- Support medication adherence
- Monitor side effects and effectiveness
- Coordinate with prescribing providers
- Address medication stigma

## Trauma-Informed Care

Many with addiction have trauma histories:

**Trauma-Informed Principles:**
- Safety first in all interactions
- Trustworthiness and transparency
- Peer support and mutual help
- Collaboration and mutuality
- Empowerment, voice, and choice
- Cultural, historical, and gender issues

**Trauma-Specific Interventions:**
- Seeking Safety (combined PTSD/substance abuse treatment)
- Trauma Recovery and Empowerment Model (TREM)
- Transcend (trauma and addiction recovery)

**Counseling Adaptations:**
- Avoiding re-traumatization
- Understanding trauma responses
- Building safety and stabilization first
- Integrating trauma processing when ready

## Group Therapy Approaches

Group formats offer unique therapeutic benefits:

**Types of Addiction Groups:**
- **Psychoeducational Groups:** Teach skills and information
- **Process Groups:** Explore interpersonal dynamics
- **Support Groups:** Mutual aid and encouragement
- **Skills Training Groups:** Practice specific competencies

**Therapeutic Factors in Groups:**
- Universality (I'm not alone)
- Instillation of hope
- Imparting information
- Altruism (helping others)
- Corrective recapitulation of family
- Development of social skills

**Group Leadership Skills:**
- Establishing safety and norms
- Balancing participation
- Managing conflict constructively
- Linking members' experiences
- Modeling healthy communication

## Integrated Treatment Planning

Combining approaches for comprehensive care:

**Treatment Matching Considerations:**
- Client preferences and values
- Problem severity and complexity
- Readiness for change
- Available resources and supports
- Cultural appropriateness

**Stepped Care Approach:**
1. Least intensive, most accessible interventions first
2. Increase intensity based on response
3. Regular assessment of progress
4. Adjustments as needed

**Measuring Treatment Effectiveness:**
- Regular outcome monitoring
- Client feedback mechanisms
- Functional improvement measures
- Quality of life indicators

Remember: The most effective approach often combines multiple evidence-based strategies tailored to the individual client.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does CBT focus on changing?",
          options: ["Brain chemistry only", "Maladaptive thoughts and behaviors", "Family history", "Genetic factors"],
          correctAnswer: 1,
          explanation: "CBT targets maladaptive thought patterns and behaviors that maintain addiction."
        },
        {
          id: 2,
          question: "What are the four processes of Motivational Interviewing?",
          options: ["Engaging, Focusing, Evoking, Planning", "Assessing, Diagnosing, Treating, Following", "Listening, Advising, Directing, Confronting", "Screening, Testing, Medicating, Monitoring"],
          correctAnswer: 0,
          explanation: "The four MI processes are Engaging, Focusing, Evoking, and Planning."
        },
        {
          id: 3,
          question: "What does Contingency Management use to encourage sobriety?",
          options: ["Punishment", "Positive reinforcement", "Medication only", "Isolation"],
          correctAnswer: 1,
          explanation: "CM uses positive reinforcement to increase desired behaviors like sobriety."
        },
        {
          id: 4,
          question: "What does MBRP combine with relapse prevention?",
          options: ["Medication management", "Mindfulness practices", "Family therapy", "Legal interventions"],
          correctAnswer: 1,
          explanation: "MBRP combines mindfulness meditation practices with traditional relapse prevention."
        },
        {
          id: 5,
          question: "What is a key principle of trauma-informed care?",
          options: ["Safety first", "Confrontation first", "Medication first", "Isolation first"],
          correctAnswer: 0,
          explanation: "Safety is the foundational principle of trauma-informed approaches."
        },
        {
          id: 6,
          question: "What does OARS stand for in MI?",
          options: ["Open questions, Affirmations, Reflections, Summaries", "Observation, Analysis, Response, Solution", "Outreach, Assessment, Referral, Support", "Orientation, Action, Recovery, Sustainability"],
          correctAnswer: 0,
          explanation: "OARS represents core MI skills: Open questions, Affirmations, Reflections, Summaries."
        },
        {
          id: 7,
          question: "Which medication blocks opioid effects?",
          options: ["Methadone", "Buprenorphine", "Naltrexone", "Suboxone"],
          correctAnswer: 2,
          explanation: "Naltrexone is an opioid antagonist that blocks opioid receptor effects."
        },
        {
          id: 8,
          question: "What is 'urge surfing' in mindfulness?",
          options: ["Riding out cravings without acting", "Increasing urges intentionally", "Avoiding all cravings", "Medicating all urges"],
          correctAnswer: 0,
          explanation: "Urge surfing means observing cravings mindfully until they naturally subside."
        },
        {
          id: 9,
          question: "What does CRAFT teach families?",
          options: ["How to force treatment", "How to encourage treatment engagement", "How to diagnose addiction", "How to prescribe medications"],
          correctAnswer: 1,
          explanation: "CRAFT teaches families strategies to encourage their loved one to seek treatment."
        },
        {
          id: 10,
          question: "What therapeutic factor means 'I'm not alone'?",
          options: ["Universality", "Altruism", "Imparting information", "Instillation of hope"],
          correctAnswer: 0,
          explanation: "Universality is the recognition that others share similar struggles."
        },
        {
          id: 11,
          question: "What does cognitive restructuring target?",
          options: ["Addictive thought patterns", "Liver function", "Genetic markers", "Family dynamics"],
          correctAnswer: 0,
          explanation: "Cognitive restructuring challenges and changes addiction-supporting thoughts."
        },
        {
          id: 12,
          question: "What is stepped care?",
          options: ["Starting with least intensive interventions", "Only using one treatment", "Hospitalization first", "Medication only approach"],
          correctAnswer: 0,
          explanation: "Stepped care begins with least intensive interventions, increasing as needed."
        },
        {
          id: 13,
          question: "What medication causes reaction if alcohol consumed?",
          options: ["Naltrexone", "Acamprosate", "Disulfiram", "Bupropion"],
          correctAnswer: 2,
          explanation: "Disulfiram causes unpleasant physical reactions if alcohol is consumed."
        },
        {
          id: 14,
          question: "What does RAIN stand for in mindfulness?",
          options: ["Recognize, Accept, Investigate, Non-identification", "Relax, Analyze, Integrate, Navigate", "Respond, Avoid, Ignore, Negate", "Review, Assess, Intervene, Normalize"],
          correctAnswer: 0,
          explanation: "RAIN is a mindfulness technique for working with difficult emotions."
        },
        {
          id: 15,
          question: "What should treatment be matched to?",
          options: ["Client preferences and needs", "Counselor preferences only", "Insurance limitations only", "Standard protocols only"],
          correctAnswer: 0,
          explanation: "Effective treatment considers client preferences, values, and individual needs."
        },
        {
          id: 16,
          question: "What is behavioral couples therapy for?",
          options: ["Improving relationship functioning", "Forcing divorce", "Ignoring relationship issues", "Medicating both partners"],
          correctAnswer: 0,
          explanation: "Behavioral couples therapy addresses relationship issues that affect recovery."
        },
        {
          id: 17,
          question: "What does CM require for effectiveness?",
          options: ["Immediate reward delivery", "Delayed rewards", "Unpredictable rewards", "No rewards"],
          correctAnswer: 0,
          explanation: "Immediate reinforcement following desired behavior increases CM effectiveness."
        },
        {
          id: 18,
          question: "What trauma intervention combines PTSD and addiction treatment?",
          options: ["Seeking Safety", "Cognitive Processing Therapy", "EMDR only", "Exposure therapy only"],
          correctAnswer: 0,
          explanation: "Seeking Safety simultaneously addresses trauma and substance use."
        },
        {
          id: 19,
          question: "What is the counselor's role in MAT?",
          options: ["Support medication adherence", "Prescribe medications", "Ignore medications", "Oppose all medications"],
          correctAnswer: 0,
          explanation: "Counselors support adherence, monitor effects, and coordinate with prescribers."
        },
        {
          id: 20,
          question: "What does MI avoid?",
          options: ["Argumentation and confrontation", "Listening and reflecting", "Questioning and exploring", "Supporting and affirming"],
          correctAnswer: 0,
          explanation: "MI avoids argumentation, instead rolling with resistance and exploring ambivalence."
        }
      ]
    },
    {
      id: 4,
      title: "Special Populations and Cultural Considerations",
      content: `
# Module 4: Special Populations and Cultural Considerations

**Effective counseling adapts to diverse needs.** This module addresses working with specific populations and incorporating cultural competence.

## Adolescents and Young Adults

Youth addiction requires developmentally appropriate approaches:

**Developmental Considerations:**
- Brain development continues into mid-20s
- Peer influence is particularly strong
- Identity formation is central
- Future orientation is developing

**Risk Factors Specific to Youth:**
- Early initiation of substance use
- Family history of addiction
- Academic difficulties
- Peer substance use
- Childhood trauma or adversity

**Evidence-Based Approaches for Youth:**
- **Motivational Enhancement Therapy/Cognitive Behavioral Therapy (MET/CBT):** Brief intervention combining MI and CBT
- **Multidimensional Family Therapy (MDFT):** Addresses individual, family, and community factors
- **Adolescent Community Reinforcement Approach (A-CRA):** Focuses on building drug-free rewarding activities

**Engagement Strategies:**
- Developmentally appropriate language
- Involvement of family when possible
- Peer-based interventions
- School and community collaboration

## Older Adults

Aging brings unique addiction considerations:

**Age-Related Factors:**
- Increased medication use and interactions
- Retirement and life transition issues
- Loss and grief experiences
- Cognitive changes affecting treatment

**Late-Onset vs. Early-Onset Addiction:**
- **Late-onset:** Begins after age 50, often related to life changes
- **Early-onset:** Longstanding addiction that continues into later life
- Different treatment implications for each pattern

**Adaptations for Older Adults:**
- Slower pace of treatment
- Addressing age-related losses
- Medical coordination
- Transportation and accessibility considerations
- Addressing ageism and stigma

## Gender-Specific Considerations

Gender influences addiction patterns and treatment needs:

**Women-Specific Issues:**
- Faster progression from use to disorder
- More stigma and shame
- Higher rates of trauma and PTSD
- Parenting concerns and child custody issues
- Hormonal influences on addiction

**Men-Specific Issues:**
- Higher rates of externalizing behaviors
- Reluctance to seek help
- Socialization around substance use
- Expression of emotions through action rather than words

**Gender-Responsive Treatment:**
- Safe single-gender groups when appropriate
- Addressing trauma and safety concerns
- Parenting support and education
- Challenging gender stereotypes about help-seeking

## LGBTQ+ Communities

Sexual and gender minorities face unique challenges:

**Specific Risk Factors:**
- Minority stress and discrimination
- Family rejection and homelessness
- Internalized homophobia/transphobia
- Substance use in LGBTQ+ social scenes

**Affirmative Practice Principles:**
- Using preferred names and pronouns
- Creating explicitly welcoming environments
- Addressing unique stressors and strengths
- Understanding intersectional identities

**Competent Care Includes:**
- Staff training on LGBTQ+ issues
- Inclusive intake forms and language
- Knowledge of community resources
- Addressing healthcare discrimination experiences

## Criminal Justice Populations

Working within correctional settings requires specific approaches:

**Special Considerations:**
- Mandated treatment vs. voluntary engagement
- Security and safety protocols
- Limited resources and programming
- Reentry planning needs

**Evidence-Based Correctional Interventions:**
- **Thinking for a Change:** Cognitive behavioral program
- **Moral Reconation Therapy:** Moral reasoning development
- **Seeking Safety:** Trauma and substance abuse treatment
- **Medication-assisted treatment in correctional settings**

**Reentry and Continuity of Care:**
- Discharge planning beginning at admission
- Community provider collaboration
- Addressing basic needs (housing, employment)
- Reducing recidivism through treatment

## Co-occurring Disorders

Integrated treatment for dual diagnoses:

**Common Combinations:**
- Substance use + depression/anxiety
- Substance use + PTSD
- Substance use + bipolar disorder
- Substance use + personality disorders

**Integrated Treatment Models:**
- **Integrated Dual Disorders Treatment (IDDT):** Comprehensive team approach
- **Co-occurring Disorders Program (CDP):** Specialized integrated care
- **Modified therapeutic communities:** Residential integrated treatment

**Counselor Competencies for Co-occurring Work:**
- Understanding psychopharmacology basics
- Recognizing symptom interactions
- Coordinating with mental health providers
- Managing crises and decompensation

## Rural and Remote Communities

Geographic isolation creates unique challenges:

**Barriers in Rural Areas:**
- Limited treatment options and providers
- Transportation difficulties
- Stigma and lack of anonymity
- Broadband and technology limitations

**Adaptations for Rural Practice:**
- Telehealth and technology solutions
- Integrated primary care settings
- Peer support and recovery coaching
- Mobile treatment units
- Church and community center partnerships

**Building Rural Community Capacity:**
- Training local providers
- Developing peer support networks
- Engaging natural helpers
- Addressing transportation barriers

## Cultural Humility and Competence

Beyond basic awareness to ongoing learning:

**Cultural Humility Principles:**
- Lifelong learning and critical self-reflection
- Recognizing power imbalances
- Challenging institutional biases
- Developing partnerships with communities

**Specific Cultural Considerations:**
- **Indigenous Populations:** Historical trauma, traditional healing
- **African American Communities:** Mistrust of healthcare systems, church as resource
- **Latino Communities:** Family centrality, language considerations
- **Asian Communities:** Shame and saving face, somatic expressions of distress

**Culturally Adapted Interventions:**
- Modifying evidence-based practices for cultural fit
- Incorporating cultural strengths and values
- Working with traditional healers when appropriate
- Addressing racism and discrimination impacts

## Economic and Social Determinants

Addressing broader contextual factors:

**Social Determinants of Health:**
- Poverty and economic instability
- Housing insecurity and homelessness
- Food insecurity
- Education and employment opportunities
- Transportation access

**Structural Interventions:**
- Housing First approaches
- Integrated employment services
- Case management for basic needs
- Policy advocacy for systemic change

**Counselor's Role:**
- Screening for social needs
- Connecting to community resources
- Advocating for systemic improvements
- Recognizing how context affects treatment

Remember: Effective counseling recognizes and respects the whole person within their unique context, adapting approaches to meet diverse needs.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "When does brain development typically continue until?",
          options: ["Age 18", "Mid-20s", "Age 30", "Age 40"],
          correctAnswer: 1,
          explanation: "Brain development, particularly prefrontal cortex, continues into the mid-20s."
        },
        {
          id: 2,
          question: "What characterizes late-onset addiction in older adults?",
          options: ["Begins after age 50", "Begins in teenage years", "Genetic only", "Untreatable"],
          correctAnswer: 0,
          explanation: "Late-onset addiction typically begins after age 50, often related to life changes."
        },
        {
          id: 3,
          question: "What is a women-specific addiction issue?",
          options: ["Faster progression to disorder", "No trauma history", "Less stigma", "No parenting concerns"],
          correctAnswer: 0,
          explanation: "Women often experience telescoping - faster progression from first use to disorder."
        },
        {
          id: 4,
          question: "What is minority stress in LGBTQ+ communities?",
          options: ["Stress from discrimination", "Lack of substances", "Too much support", "Genetic stress"],
          correctAnswer: 0,
          explanation: "Minority stress refers to chronic stress from discrimination and stigma."
        },
        {
          id: 5,
          question: "What is essential for reentry from criminal justice settings?",
          options: ["Discharge planning", "No planning needed", "Avoiding all services", "Isolation"],
          correctAnswer: 0,
          explanation: "Comprehensive discharge planning beginning at admission is crucial for reentry success."
        },
        {
          id: 6,
          question: "What does IDDT stand for?",
          options: ["Integrated Dual Disorders Treatment", "Individual Drug Dependency Therapy", "Intensive Detox and Discharge Team", "Initial Diagnosis and Drug Testing"],
          correctAnswer: 0,
          explanation: "IDDT is Integrated Dual Disorders Treatment for co-occurring conditions."
        },
        {
          id: 7,
          question: "What is a rural treatment barrier?",
          options: ["Transportation difficulties", "Too many providers", "No stigma", "Easy anonymity"],
          correctAnswer: 0,
          explanation: "Transportation to distant treatment sites is a major rural barrier."
        },
        {
          id: 8,
          question: "What is cultural humility?",
          options: ["Lifelong learning about culture", "Knowing everything about all cultures", "Ignoring cultural differences", "Teaching clients your culture"],
          correctAnswer: 0,
          explanation: "Cultural humility involves ongoing learning and self-reflection about culture."
        },
        {
          id: 9,
          question: "What youth intervention combines MI and CBT?",
          options: ["MET/CBT", "MDFT", "A-CRA", "IDDT"],
          correctAnswer: 0,
          explanation: "MET/CBT combines Motivational Enhancement Therapy with Cognitive Behavioral Therapy."
        },
        {
          id: 10,
          question: "What is a social determinant of health?",
          options: ["Housing insecurity", "Brain chemistry only", "Genetic code only", "Personality type"],
          correctAnswer: 0,
          explanation: "Housing security is a key social determinant affecting health outcomes."
        },
        {
          id: 11,
          question: "What should be used for LGBTQ+ clients?",
          options: ["Preferred names and pronouns", "Assumed names", "Legal names only", "No names"],
          correctAnswer: 0,
          explanation: "Using preferred names and pronouns shows respect and affirmation."
        },
        {
          id: 12,
          question: "What adaptation helps older adults?",
          options: ["Slower treatment pace", "Faster treatment pace", "No family involvement", "Ignoring medications"],
          correctAnswer: 0,
          explanation: "Older adults may benefit from a slower, more deliberate treatment pace."
        },
        {
          id: 13,
          question: "What does A-CRA focus on for youth?",
          options: ["Building drug-free rewarding activities", "Medication only", "Isolation", "Punishment"],
          correctAnswer: 0,
          explanation: "A-CRA helps youth build enjoyable drug-free activities and social connections."
        },
        {
          id: 14,
          question: "What is an affirmative practice?",
          options: ["Creating welcoming environments", "Rejecting clients", "Ignoring identity", "Forcing change"],
          correctAnswer: 0,
          explanation: "Affirmative practice actively creates safe, welcoming spaces for marginalized groups."
        },
        {
          id: 15,
          question: "What is Housing First?",
          options: ["Providing housing without preconditions", "Housing after treatment completion", "No housing support", "Temporary shelter only"],
          correctAnswer: 0,
          explanation: "Housing First provides immediate housing without requiring treatment compliance first."
        },
        {
          id: 16,
          question: "What is important for gender-responsive care?",
          options: ["Addressing trauma concerns", "Ignoring gender", "Treating everyone identically", "Focusing only on men"],
          correctAnswer: 0,
          explanation: "Gender-responsive care addresses different trauma experiences and safety needs."
        },
        {
          id: 17,
          question: "What helps rural telehealth?",
          options: ["Broadband access", "No technology", "Ignoring distance", "Only in-person care"],
          correctAnswer: 0,
          explanation: "Reliable broadband internet access enables effective telehealth in rural areas."
        },
        {
          id: 18,
          question: "What does cultural adaptation involve?",
          options: ["Modifying interventions for cultural fit", "Forcing cultural assimilation", "Ignoring culture", "Only using Western methods"],
          correctAnswer: 0,
          explanation: "Cultural adaptation modifies evidence-based practices to fit cultural contexts."
        },
        {
          id: 19,
          question: "What is a counselor's role regarding social determinants?",
          options: ["Screen for social needs", "Ignore context", "Only focus on addiction", "Blame clients"],
          correctAnswer: 0,
          explanation: "Counselors should screen for and help address basic social needs affecting recovery."
        },
        {
          id: 20,
          question: "What is MDFT?",
          options: ["Multidimensional Family Therapy", "Medical Drug Follow-up Treatment", "Mandatory Drug Free Testing", "Medication Dosage Finding Technique"],
          correctAnswer: 0,
          explanation: "MDFT addresses individual, family, and community factors in youth addiction."
        }
      ]
    },
    {
      id: 5,
      title: "Professional Ethics and Legal Issues",
      content: `
# Module 5: Professional Ethics and Legal Issues

**Ethical practice protects both clients and counselors.** This module covers professional standards, legal requirements, and ethical decision-making in addiction counseling.

## Ethical Principles and Codes

Foundation for professional practice:

**Core Ethical Principles:**
- **Autonomy:** Respecting client self-determination
- **Beneficence:** Promoting client well-being
- **Non-maleficence:** Avoiding harm to clients
- **Justice:** Treating clients fairly and equally
- **Fidelity:** Being trustworthy and keeping promises
- **Veracity:** Being honest and truthful

**Major Ethical Codes:**
- NAADAC Code of Ethics (National Association for Addiction Professionals)
- ACA Code of Ethics (American Counseling Association)
- APA Ethical Principles (American Psychological Association)
- State licensing board regulations

**Common Ethical Issues in Addiction Counseling:**
- Confidentiality and privacy protections
- Dual relationships and boundaries
- Competence and scope of practice
- Informed consent processes
- Documentation and record keeping

## Confidentiality and Privacy Laws

Legal protections for client information:

**42 CFR Part 2:**
- Federal regulations for substance use disorder records
- More stringent than HIPAA for addiction treatment
- Requires specific consent for most disclosures
- Special rules for criminal justice referrals

**HIPAA Privacy Rule:**
- Applies to most healthcare providers
- Allows treatment, payment, and operations disclosures
- Requires authorization for other disclosures
- Gives clients rights to access their records

**Key Differences:**
- 42 CFR Part 2 applies specifically to addiction programs
- HIPAA has broader healthcare application
- State laws may provide additional protections
- Understanding which regulations apply to your setting

**Mandatory Exceptions to Confidentiality:**
- Child abuse or neglect reporting
- Elder or dependent adult abuse reporting
- Tarasoff-type duty to protect (threats to others)
- Court orders (specific requirements apply)

## Informed Consent Process

Essential for ethical practice:

**Elements of Valid Informed Consent:**
- Nature and purpose of services
- Risks, benefits, and alternatives
- Limits of confidentiality
- Fees and payment policies
- Counselor qualifications and experience
- Client rights and responsibilities

**Ongoing Consent:**
- Not a one-time event
- Revisited as treatment evolves
- Required for significant changes
- Documented in client record

**Special Populations Considerations:**
- Minors and parental consent requirements
- Clients with guardians or conservators
- Court-ordered or mandated clients
- Clients with cognitive impairments

## Boundaries and Dual Relationships

Maintaining professional relationships:

**Professional Boundaries:**
- Clear role definitions
- Appropriate physical boundaries
- Time and availability limits
- Gift and social interaction policies

**Dual Relationship Risks:**
- Conflicts of interest
- Exploitation potential
- Impaired objectivity
- Role confusion

**Managing Boundary Challenges:**
- Regular supervision and consultation
- Clear agency policies
- Self-awareness and self-care
- Documentation of boundary decisions

## Competence and Scope of Practice

Working within professional limits:

**Scope of Practice Definitions:**
- What services you're trained to provide
- Legal authorization through licensure
- Agency role and responsibilities
- Personal skill and experience level

**Maintaining Competence:**
- Continuing education requirements
- Regular supervision and consultation
- Staying current with research
- Knowing when to refer

**When to Refer:**
- Needs exceed your competence
- Conflicts of interest arise
- Client requests different approach
- Lack of progress despite efforts

## Documentation Standards

Professional record keeping:

**Purposes of Documentation:**
- Clinical decision-making support
- Communication with other providers
- Legal and risk management
- Quality assurance and improvement
- Reimbursement justification

**Essential Record Components:**
- Initial assessment and treatment plan
- Progress notes for each contact
- Informed consent documentation
- Releases of information
- Treatment reviews and updates
- Discharge summary

**Progress Note Standards:**
- SOAP format (Subjective, Objective, Assessment, Plan)
- DAP format (Data, Assessment, Plan)
- BIRP format (Behavior, Intervention, Response, Plan)
- Consistent, timely completion

## Legal Issues in Addiction Practice

Understanding relevant laws:

**Substance-Specific Laws:**
- Controlled Substances Act scheduling
- State drug laws and penalties
- Medical marijuana laws and conflicts
- Naloxone access and Good Samaritan laws

**Employment and Disability Laws:**
- Americans with Disabilities Act (ADA) protections
- Family and Medical Leave Act (FMLA)
- Workplace drug testing regulations
- Reasonable accommodation requirements

**Child Welfare and Family Law:**
- Child abuse reporting requirements
- Custody evaluations and testimony
- Parental rights termination proceedings
- Family court involvement

**Criminal Justice Interface:**
- Court-ordered treatment requirements
- Probation and parole collaboration
- Testifying in legal proceedings
- Balancing treatment and legal mandates

## Ethical Decision-Making Models

Systematic approaches to ethical dilemmas:

**Common Decision-Making Models:**
- **Forester-Miller and Davis Model:** Identify problem, apply ethics codes, determine nature/dimensions, generate options, choose/implement, evaluate
- **ACA Ethical Decision-Making Model:** Identify problem, apply ACA Code, determine nature/dimensions, generate options, consider consequences, choose/implement, evaluate
- **Kitchener's Moral Principles Model:** Apply core ethical principles

**Steps in Ethical Decision-Making:**
1. Identify the ethical issue or dilemma
2. Gather relevant information
3. Consult ethical codes and legal standards
4. Consider cultural and contextual factors
5. Generate possible courses of action
6. Evaluate alternatives considering principles
7. Implement chosen action
8. Document decision-making process
9. Evaluate outcomes and learn from experience

## Supervision and Consultation

Essential for ethical practice:

**Purposes of Supervision:**
- Skill development and competence building
- Ethical guidance and decision-making support
- Administrative oversight and accountability
- Professional development and growth

**Supervisory Relationship Elements:**
- Clear expectations and goals
- Regular scheduled meetings
- Documentation of supervision
- Evaluation and feedback processes

**When to Seek Consultation:**
- Ethical dilemmas or uncertainties
- Complex clinical situations
- Legal questions or concerns
- Need for specialized expertise

## Self-Care and Professional Resilience

Preventing burnout and impairment:

**Risk Factors for Counselor Impairment:**
- High caseloads and workload
- Trauma exposure and vicarious trauma
- Lack of support and supervision
- Personal history issues triggered
- Work-life imbalance

**Self-Care Strategies:**
- Regular supervision and peer support
- Personal therapy when needed
- Healthy work-life boundaries
- Continuing education and growth
- Physical health maintenance

**Recognizing Impairment:**
- Decreased clinical effectiveness
- Ethical boundary violations
- Substance use by counselor
- Mental health deterioration
- Professional isolation

**Addressing Impaired Colleagues:**
- Ethical duty to address impairment
- Following agency policies and procedures
- State reporting requirements
- Balancing compassion and accountability

Remember: Ethical practice is not just following rules - it's embodying professional values in service of client well-being.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does autonomy mean in ethics?",
          options: ["Respecting client self-determination", "Counselor independence", "Automatic decisions", "Government control"],
          correctAnswer: 0,
          explanation: "Autonomy respects clients' right to make their own informed decisions."
        },
        {
          id: 2,
          question: "What does 42 CFR Part 2 protect?",
          options: ["Substance use disorder records", "All medical records", "Employment records", "Educational records"],
          correctAnswer: 0,
          explanation: "42 CFR Part 2 provides special confidentiality protections for addiction treatment records."
        },
        {
          id: 3,
          question: "What must informed consent include?",
          options: ["Risks and benefits", "Only counselor name", "Client's address only", "No information needed"],
          correctAnswer: 0,
          explanation: "Informed consent must include nature of services, risks, benefits, and alternatives."
        },
        {
          id: 4,
          question: "What is a dual relationship risk?",
          options: ["Conflict of interest", "Better understanding", "Stronger alliance", "No risks"],
          correctAnswer: 0,
          explanation: "Dual relationships create conflicts of interest and exploitation risks."
        },
        {
          id: 5,
          question: "What does scope of practice define?",
          options: ["Services you're trained to provide", "Office hours", "Salary range", "Vacation time"],
          correctAnswer: 0,
          explanation: "Scope of practice defines what services you're qualified and authorized to provide."
        },
        {
          id: 6,
          question: "What does SOAP stand for in documentation?",
          options: ["Subjective, Objective, Assessment, Plan", "Summary, Opinion, Action, Progress", "Situation, Observation, Analysis, Plan", "Status, Objective, Assessment, Procedure"],
          correctAnswer: 0,
          explanation: "SOAP is a common progress note format: Subjective, Objective, Assessment, Plan."
        },
        {
          id: 7,
          question: "What law protects people with addiction as a disability?",
          options: ["Americans with Disabilities Act", "HIPAA", "42 CFR Part 2", "Family Medical Leave Act"],
          correctAnswer: 0,
          explanation: "ADA protects people with addiction in recovery from discrimination."
        },
        {
          id: 8,
          question: "What is the first step in ethical decision-making?",
          options: ["Identify the ethical issue", "Consult a lawyer", "Ask the client", "Ignore the problem"],
          correctAnswer: 0,
          explanation: "The first step is identifying and clarifying the ethical issue or dilemma."
        },
        {
          id: 9,
          question: "What is a purpose of supervision?",
          options: ["Ethical guidance", "Socializing only", "Avoiding work", "Increasing caseload"],
          correctAnswer: 0,
          explanation: "Supervision provides ethical guidance and clinical skill development."
        },
        {
          id: 10,
          question: "What is a risk factor for counselor impairment?",
          options: ["High caseloads", "Regular supervision", "Good self-care", "Adequate training"],
          correctAnswer: 0,
          explanation: "Excessive caseloads contribute to burnout and counselor impairment."
        },
        {
          id: 11,
          question: "What does beneficence mean?",
          options: ["Promoting client well-being", "Avoiding all risk", "Making money", "Following orders"],
          correctAnswer: 0,
          explanation: "Beneficence means acting in ways that promote client welfare."
        },
        {
          id: 12,
          question: "When can confidentiality be breached without consent?",
          options: ["Child abuse reporting", "Whenever convenient", "To tell family", "For billing purposes only"],
          correctAnswer: 0,
          explanation: "Child abuse reporting is a mandatory exception to confidentiality."
        },
        {
          id: 13,
          question: "What is ongoing consent?",
          options: ["Revisited as treatment evolves", "One-time signature", "Assumed consent", "No consent needed"],
          correctAnswer: 0,
          explanation: "Informed consent should be revisited and updated throughout treatment."
        },
        {
          id: 14,
          question: "What should be documented about boundary decisions?",
          options: ["Rationale and process", "Nothing", "Only positive outcomes", "Client reactions only"],
          correctAnswer: 0,
          explanation: "Documenting boundary decision rationale protects both client and counselor."
        },
        {
          id: 15,
          question: "When should you refer a client?",
          options: ["Needs exceed your competence", "Always", "Never", "Only if client asks"],
          correctAnswer: 0,
          explanation: "Refer when client needs exceed your training, competence, or scope."
        },
        {
          id: 16,
          question: "What does HIPAA allow without specific authorization?",
          options: ["Treatment, payment, operations", "Marketing", "Research", "Family notifications"],
          correctAnswer: 0,
          explanation: "HIPAA allows disclosures for treatment, payment, and healthcare operations."
        },
        {
          id: 17,
          question: "What is non-maleficence?",
          options: ["Avoiding harm to clients", "Making clients happy", "Following policies", "Being friendly"],
          correctAnswer: 0,
          explanation: "Non-maleficence means avoiding actions that could harm clients."
        },
        {
          id: 18,
          question: "What is a mandatory reporter required to report?",
          options: ["Child abuse suspicions", "All client information", "Past crimes", "Relationship issues"],
          correctAnswer: 0,
          explanation: "Mandated reporters must report suspected child abuse or neglect."
        },
        {
          id: 19,
          question: "What helps prevent counselor impairment?",
          options: ["Regular self-care", "Ignoring stress", "Working more hours", "Avoiding colleagues"],
          correctAnswer: 0,
          explanation: "Consistent self-care practices help prevent burnout and impairment."
        },
        {
          id: 20,
          question: "What should be in a discharge summary?",
          options: ["Treatment course and outcomes", "Only diagnosis", "Billing information only", "Nothing"],
          correctAnswer: 0,
          explanation: "Discharge summaries should document treatment course, outcomes, and follow-up plans."
        }
      ]
    },
    {
      id: 6,
      title: "Advanced Relapse Prevention and Recovery Support",
      content: `
# Module 6: Advanced Relapse Prevention and Recovery Support

**Sustainable recovery requires comprehensive support.** This module covers advanced strategies for preventing relapse and supporting long-term recovery.

## Understanding Relapse as Process

Relapse is typically a process, not an event:

**The Relapse Process Model:**
1. **Emotional Relapse:** Not thinking about use but emotions and behaviors set stage
2. **Mental Relapse:** Internal conflict, cravings, thinking about use
3. **Physical Relapse:** Actually using the substance

**Early Warning Signs:**
- Isolation and decreased support engagement
- Poor self-care and sleep disturbances
- Denial and minimization of problems
- Reactivation of addictive thinking patterns
- Avoidance of recovery activities

**Intervention Points:**
- Emotional stage: Improve self-care and support
- Mental stage: Craving management and cognitive restructuring
- Physical stage: Immediate intervention and harm reduction

## Cognitive Behavioral Relapse Prevention

Advanced CBT techniques for sustained recovery:

**Identifying High-Risk Situations:**
- **Intrapersonal:** Emotional states, physical discomfort
- **Interpersonal:** Conflict, social pressure, celebrations
- **Environmental:** Places, times, availability cues

**Coping Skills Training:**
- **Problem-focused coping:** Changing the situation
- **Emotion-focused coping:** Managing emotional response
- **Avoidance coping:** Avoiding high-risk situations
- **Social coping:** Using support network

**Cognitive Strategies:**
- **Thought stopping and interruption**
- **Cognitive restructuring of addictive beliefs**
- **Coping self-statements development**
- **Mindfulness of craving thoughts**

## Mindfulness in Relapse Prevention

Advanced mindfulness applications:

**Urge Surfing Techniques:**
- Observing cravings as waves that rise and fall
- Noticing physical sensations without reaction
- Using breath as anchor during intense urges
- Practicing non-attachment to craving thoughts

**RAIN Practice for Cravings:**
- **R:** Recognize what is happening
- **A:** Allow experience to be there
- **I:** Investigate with kindness
- **N:** Non-identification (not personalizing)

**Mindfulness in Daily Life:**
- Mindful routines and rituals
- Mindful eating and self-care
- Mindful communication in relationships
- Mindful response to stress versus reaction

## Recovery Capital Building

Resources that support sustained recovery:

**Types of Recovery Capital:**
- **Personal:** Skills, health, hope, resilience
- **Social:** Supportive relationships, recovery community
- **Community:** Recovery resources, safe environments
- **Cultural:** Recovery-friendly values and attitudes
- **Financial:** Economic stability and resources

**Assessing and Building Capital:**
- Recovery capital assessment tools
- Identifying existing strengths and resources
- Developing missing capital areas
- Leveraging capital during challenging times

**Community Resources Development:**
- Recovery community centers
- Sober living and recovery housing
- Employment and education programs
- Recreational and social activities

## Medication-Assisted Recovery Support

Long-term medication management:

**Maintenance vs. Taper Approaches:**
- **Maintenance:** Continued medication for sustained recovery
- **Taper:** Gradual reduction with close monitoring
- **Individualized decisions** based on multiple factors

**Counseling Integration with MAT:**
- Addressing medication stigma
- Supporting adherence through counseling
- Monitoring effectiveness and side effects
- Coordinating with medical providers

**Special Populations in MAT:**
- Pregnant and parenting individuals
- Individuals with chronic pain
- Those with co-occurring disorders
- Older adults and polypharmacy concerns

## Family and Social Recovery

Recovery happens in social context:

**Family Recovery Stages:**
1. **Crisis and Chaos:** Active addiction impact
2. **Adjustment:** Learning to cope and set boundaries
3. **Stabilization:** Establishing new patterns
4. **Growth:** Family healing and development

**Family Interventions:**
- Family education about addiction and recovery
- Communication and problem-solving skills
- Boundary setting and enforcement
- Healing from addiction-related trauma

**Social Network Interventions:**
- Social network mapping and assessment
- Developing recovery-supportive relationships
- Reducing contact with using networks
- Building sober social activities

## Recovery Coaching and Peer Support

Leveraging lived experience:

**Recovery Coach Roles:**
- Mentor and role model
- Resource connector and navigator
- Motivator and accountability partner
- Ally and advocate

**Peer Support Specialties:**
- **Recovery Community Organizations:** Peer-run recovery support
- **Warmlines and peer support lines**
- **Recovery high schools and colleges**
- **Peer-based employment support**

**Integrating Professional and Peer Support:**
- Clear role definitions and boundaries
- Regular communication and collaboration
- Mutual respect for different expertise
- Client choice in support combinations

## Continuing Care Planning

Transitioning through recovery stages:

**Stages of Continuing Care:**
- **Early Recovery (0-1 year):** Intensive support, skill building
- **Sustained Recovery (1-5 years):** Community integration, growth
- **Long-term Recovery (5+ years):** Maintenance, generativity

**Discharge Planning Components:**
- Aftercare plan development
- Connection to community resources
- Crisis and relapse prevention plan
- Follow-up schedule and check-ins

**Transition Support:**
- Graduated intensity reductions
- Alumni programs and groups
- Step-down levels of care
- Ongoing monitoring and support

## Spirituality and Meaning in Recovery

Beyond abstinence to meaningful living:

**Spiritual Components:**
- Connection to something greater than self
- Sense of purpose and meaning
- Values clarification and living
- Forgiveness and making amends

**Spiritual Practices in Recovery:**
- Meditation and prayer
- Service and helping others
- Nature and connection practices
- Artistic and creative expression

**Addressing Spiritual Wounds:**
- Religious trauma or negative experiences
- Loss of faith or meaning through addiction
- Rebuilding spiritual foundations
- Inclusive, non-dogmatic approaches

## Quality of Life Enhancement

Recovery as more than symptom reduction:

**Domains of Quality of Life:**
- Physical health and wellness
- Emotional and psychological well-being
- Social relationships and community
- Occupational and educational fulfillment
- Financial stability and security
- Recreational and leisure satisfaction

**Recovery-Oriented Systems of Care:**
- Client-driven and person-centered
- Strength-based and hope-oriented
- Community-integrated and inclusive
- Continuum of care and support

**Measuring Recovery Success:**
- Beyond abstinence metrics
- Functional improvements
- Quality of life enhancements
- Personal growth and development

Remember: Lasting recovery is built on comprehensive support, ongoing growth, and meaningful engagement in life.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the first stage in the relapse process model?",
          options: ["Emotional Relapse", "Mental Relapse", "Physical Relapse", "Recovery Relapse"],
          correctAnswer: 0,
          explanation: "Emotional relapse involves behaviors and emotions that set the stage for possible relapse."
        },
        {
          id: 2,
          question: "What are intrapersonal high-risk situations?",
          options: ["Emotional states", "Social pressure", "Places and times", "Celebrations"],
          correctAnswer: 0,
          explanation: "Intrapersonal situations are internal states like emotions, stress, or physical discomfort."
        },
        {
          id: 3,
          question: "What does RAIN stand for in mindfulness?",
          options: ["Recognize, Allow, Investigate, Non-identification", "Relax, Analyze, Integrate, Navigate", "React, Avoid, Ignore, Negate", "Review, Assess, Intervene, Normalize"],
          correctAnswer: 0,
          explanation: "RAIN is a mindfulness practice for working with difficult experiences."
        },
        {
          id: 4,
          question: "What is recovery capital?",
          options: ["Resources supporting recovery", "Money only", "Medication only", "Therapy only"],
          correctAnswer: 0,
          explanation: "Recovery capital includes all internal and external resources supporting recovery."
        },
        {
          id: 5,
          question: "What is medication maintenance?",
          options: ["Continued medication for sustained recovery", "Immediate discontinuation", "No medication ever", "Only short-term use"],
          correctAnswer: 0,
          explanation: "Maintenance involves continuing medication as part of long-term recovery support."
        },
        {
          id: 6,
          question: "What is a recovery coach role?",
          options: ["Mentor and resource connector", "Therapist", "Doctor", "Lawyer"],
          correctAnswer: 0,
          explanation: "Recovery coaches serve as mentors, connectors, motivators, and allies."
        },
        {
          id: 7,
          question: "What stage is 1-5 years of recovery?",
          options: ["Sustained Recovery", "Early Recovery", "Long-term Recovery", "Relapse Stage"],
          correctAnswer: 0,
          explanation: "Sustained recovery typically refers to 1-5 years of continuous recovery."
        },
        {
          id: 8,
          question: "What is a spiritual component of recovery?",
          options: ["Sense of purpose and meaning", "Religious conversion only", "Church attendance only", "Prayer only"],
          correctAnswer: 0,
          explanation: "Spirituality in recovery involves purpose, meaning, connection, and values."
        },
        {
          id: 9,
          question: "What is problem-focused coping?",
          options: ["Changing the situation", "Only managing emotions", "Avoiding all problems", "Ignoring situations"],
          correctAnswer: 0,
          explanation: "Problem-focused coping involves actively changing or solving problematic situations."
        },
        {
          id: 10,
          question: "What does quality of life include?",
          options: ["Multiple life domains", "Only abstinence", "Only employment", "Only relationships"],
          correctAnswer: 0,
          explanation: "Quality of life encompasses physical, emotional, social, occupational, and other domains."
        },
        {
          id: 11,
          question: "What is an early warning sign of relapse?",
          options: ["Isolation", "Increased support", "Good self-care", "Open communication"],
          correctAnswer: 0,
          explanation: "Isolation and decreased support engagement are early relapse warning signs."
        },
        {
          id: 12,
          question: "What is social recovery capital?",
          options: ["Supportive relationships", "Money only", "Medication only", "Therapy only"],
          correctAnswer: 0,
          explanation: "Social capital includes supportive relationships and recovery community connections."
        },
        {
          id: 13,
          question: "What is urge surfing?",
          options: ["Observing cravings as passing waves", "Increasing urges", "Avoiding all urges", "Medicating all urges"],
          correctAnswer: 0,
          explanation: "Urge surfing involves mindfully observing cravings until they naturally subside."
        },
        {
          id: 14,
          question: "What is family stabilization stage?",
          options: ["Establishing new patterns", "Active chaos", "Immediate recovery", "Complete healing"],
          correctAnswer: 0,
          explanation: "Stabilization involves establishing new, healthy family patterns and routines."
        },
        {
          id: 15,
          question: "What should discharge planning include?",
          options: ["Aftercare plan development", "No planning", "Only medication instructions", "Only diagnosis"],
          correctAnswer: 0,
          explanation: "Comprehensive discharge planning includes aftercare, resources, and follow-up."
        },
        {
          id: 16,
          question: "What is emotion-focused coping?",
          options: ["Managing emotional response", "Changing situations", "Avoiding emotions", "Ignoring feelings"],
          correctAnswer: 0,
          explanation: "Emotion-focused coping involves managing emotional responses to situations."
        },
        {
          id: 17,
          question: "What are recovery community organizations?",
          options: ["Peer-run recovery support", "Government agencies", "Hospitals only", "Research institutes"],
          correctAnswer: 0,
          explanation: "Recovery community organizations are peer-led recovery support services."
        },
        {
          id: 18,
          question: "What is long-term recovery typically?",
          options: ["5+ years", "1 month", "6 months", "1 year"],
          correctAnswer: 0,
          explanation: "Long-term recovery typically refers to 5 or more years of sustained recovery."
        },
        {
          id: 19,
          question: "What enhances quality of life in recovery?",
          options: ["Multiple life domain improvements", "Only abstinence", "Only employment", "Only therapy"],
          correctAnswer: 0,
          explanation: "Quality of life improves through enhancements across various life domains."
        },
        {
          id: 20,
          question: "What is recovery-oriented care?",
          options: ["Client-driven and strength-based", "Professional-determined only", "Medication-only approach", "One-size-fits-all"],
          correctAnswer: 0,
          explanation: "Recovery-oriented care is person-centered, strength-based, and hope-focused."
        }
      ]
    }
  ],

  // 3. FINAL EXAM STRUCTURE
  finalExam: {
    title: "Addiction Counseling Diploma Final Exam",
    description: "Comprehensive 40-question exam covering all 6 modules of advanced addiction counseling knowledge and skills.",
    passingScore: 75,
    questions: [
      // Questions from Module 1
      {
        id: 1,
        question: "What model views addiction as a chronic brain disease?",
        options: ["Moral Model", "Brain Disease Model", "Choice Model", "Spiritual Model"],
        correctAnswer: 1,
        explanation: "The Brain Disease Model recognizes addiction as a chronic medical condition.",
        module: 1
      },
      {
        id: 2,
        question: "Which neurotransmitter is primarily involved in reward?",
        options: ["Serotonin", "Dopamine", "GABA", "Glutamate"],
        correctAnswer: 1,
        explanation: "Dopamine reinforces substance use through reward pathways.",
        module: 1
      },
      {
        id: 3,
        question: "What percentage of addiction risk is genetic?",
        options: ["10-20%", "40-60%", "70-80%", "90-100%"],
        correctAnswer: 1,
        explanation: "40-60% of addiction vulnerability comes from genetic factors.",
        module: 1
      },

      // Questions from Module 2
      {
        id: 4,
        question: "What does AUDIT screen for?",
        options: ["Alcohol use disorders", "Drug use disorders", "Depression", "Trauma"],
        correctAnswer: 0,
        explanation: "AUDIT is the Alcohol Use Disorders Identification Test.",
        module: 2
      },
      {
        id: 5,
        question: "How many symptoms indicate severe Substance Use Disorder?",
        options: ["2-3", "4-5", "6+", "10+"],
        correctAnswer: 2,
        explanation: "6 or more symptoms indicate severe Substance Use Disorder.",
        module: 2
      },
      {
        id: 6,
        question: "What should assessment questions do regarding motivation?",
        options: ["Build motivation", "Decrease resistance", "Force compliance", "Ignore ambivalence"],
        correctAnswer: 0,
        explanation: "Assessment should enhance motivation for change.",
        module: 2
      },

      // Questions from Module 3
      {
        id: 7,
        question: "What does CBT focus on changing?",
        options: ["Brain chemistry", "Maladaptive thoughts and behaviors", "Family history", "Genetic factors"],
        correctAnswer: 1,
        explanation: "CBT targets maladaptive thought patterns and behaviors.",
        module: 3
      },
      {
        id: 8,
        question: "What are the four processes of MI?",
        options: ["Engaging, Focusing, Evoking, Planning", "Assessing, Diagnosing, Treating, Following", "Listening, Advising, Directing, Confronting", "Screening, Testing, Medicating, Monitoring"],
        correctAnswer: 0,
        explanation: "MI processes: Engaging, Focusing, Evoking, Planning.",
        module: 3
      },
      {
        id: 9,
        question: "What does Contingency Management use?",
        options: ["Punishment", "Positive reinforcement", "Medication only", "Isolation"],
        correctAnswer: 1,
        explanation: "CM uses positive reinforcement to encourage sobriety.",
        module: 3
      },

      // Questions from Module 4
      {
        id: 10,
        question: "When does brain development continue until?",
        options: ["Age 18", "Mid-20s", "Age 30", "Age 40"],
        correctAnswer: 1,
        explanation: "Brain development continues into the mid-20s.",
        module: 4
      },
      {
        id: 11,
        question: "What is a women-specific addiction issue?",
        options: ["Faster progression to disorder", "No trauma history", "Less stigma", "No parenting concerns"],
        correctAnswer: 0,
        explanation: "Women often experience faster progression from use to disorder.",
        module: 4
      },
      {
        id: 12,
        question: "What is minority stress?",
        options: ["Stress from discrimination", "Lack of substances", "Too much support", "Genetic stress"],
        correctAnswer: 0,
        explanation: "Minority stress comes from discrimination and stigma.",
        module: 4
      },

      // Questions from Module 5
      {
        id: 13,
        question: "What does autonomy mean in ethics?",
        options: ["Respecting client self-determination", "Counselor independence", "Automatic decisions", "Government control"],
        correctAnswer: 0,
        explanation: "Autonomy respects clients' right to make informed decisions.",
        module: 5
      },
      {
        id: 14,
        question: "What does 42 CFR Part 2 protect?",
        options: ["Substance use disorder records", "All medical records", "Employment records", "Educational records"],
        correctAnswer: 0,
        explanation: "42 CFR Part 2 provides special confidentiality for addiction records.",
        module: 5
      },
      {
        id: 15,
        question: "What must informed consent include?",
        options: ["Risks and benefits", "Only counselor name", "Client's address only", "No information"],
        correctAnswer: 0,
        explanation: "Informed consent must include risks, benefits, and alternatives.",
        module: 5
      },

      // Questions from Module 6
      {
        id: 16,
        question: "What is the first stage in relapse process?",
        options: ["Emotional Relapse", "Mental Relapse", "Physical Relapse", "Recovery Relapse"],
        correctAnswer: 0,
        explanation: "Emotional relapse involves behaviors setting stage for possible relapse.",
        module: 6
      },
      {
        id: 17,
        question: "What are intrapersonal high-risk situations?",
        options: ["Emotional states", "Social pressure", "Places and times", "Celebrations"],
        correctAnswer: 0,
        explanation: "Intrapersonal situations are internal states like emotions.",
        module: 6
      },
      {
        id: 18,
        question: "What does RAIN stand for?",
        options: ["Recognize, Allow, Investigate, Non-identification", "Relax, Analyze, Integrate, Navigate", "React, Avoid, Ignore, Negate", "Review, Assess, Intervene, Normalize"],
        correctAnswer: 0,
        explanation: "RAIN is a mindfulness practice for difficult experiences.",
        module: 6
      },

      // Additional mixed questions
      {
        id: 19,
        question: "What brain region handles decision-making?",
        options: ["Amygdala", "Prefrontal Cortex", "Hippocampus", "Nucleus Accumbens"],
        correctAnswer: 1,
        explanation: "Prefrontal cortex manages executive functions like decision-making.",
        module: 1
      },
      {
        id: 20,
        question: "What does ASI stand for?",
        options: ["Addiction Screening Instrument", "Addiction Severity Index", "Assessment of Substance Involvement", "Alcohol Severity Inventory"],
        correctAnswer: 1,
        explanation: "ASI is the Addiction Severity Index assessment tool.",
        module: 2
      },
      {
        id: 21,
        question: "What does OARS stand for in MI?",
        options: ["Open questions, Affirmations, Reflections, Summaries", "Observation, Analysis, Response, Solution", "Outreach, Assessment, Referral, Support", "Orientation, Action, Recovery, Sustainability"],
        correctAnswer: 0,
        explanation: "OARS represents core MI skills.",
        module: 3
      },
      {
        id: 22,
        question: "What does IDDT stand for?",
        options: ["Integrated Dual Disorders Treatment", "Individual Drug Dependency Therapy", "Intensive Detox and Discharge Team", "Initial Diagnosis and Drug Testing"],
        correctAnswer: 0,
        explanation: "IDDT is Integrated Dual Disorders Treatment.",
        module: 4
      },
      {
        id: 23,
        question: "What does HIPAA allow without authorization?",
        options: ["Treatment, payment, operations", "Marketing", "Research", "Family notifications"],
        correctAnswer: 0,
        explanation: "HIPAA allows disclosures for treatment, payment, and operations.",
        module: 5
      },
      {
        id: 24,
        question: "What is recovery capital?",
        options: ["Resources supporting recovery", "Money only", "Medication only", "Therapy only"],
        correctAnswer: 0,
        explanation: "Recovery capital includes all resources supporting recovery.",
        module: 6
      },
      {
        id: 25,
        question: "Which stage involves craving and obsessive thoughts?",
        options: ["Binge/Intoxication", "Withdrawal/Negative Affect", "Preoccupation/Anticipation", "Recovery/Maintenance"],
        correctAnswer: 2,
        explanation: "Preoccupation/Anticipation stage involves craving and planning.",
        module: 1
      },
      {
        id: 26,
        question: "What is a key suicide risk assessment practice?",
        options: ["Direct questioning about thoughts", "Avoiding the topic", "Assuming no risk", "Only asking family"],
        correctAnswer: 0,
        explanation: "Direct, compassionate suicide assessment is essential.",
        module: 2
      },
      {
        id: 27,
        question: "Which medication blocks opioid effects?",
        options: ["Methadone", "Buprenorphine", "Naltrexone", "Suboxone"],
        correctAnswer: 2,
        explanation: "Naltrexone is an opioid antagonist that blocks effects.",
        module: 3
      },
      {
        id: 28,
        question: "What is cultural humility?",
        options: ["Lifelong learning about culture", "Knowing everything", "Ignoring differences", "Teaching your culture"],
        correctAnswer: 0,
        explanation: "Cultural humility involves ongoing learning and reflection.",
        module: 4
      },
      {
        id: 29,
        question: "What does SOAP stand for?",
        options: ["Subjective, Objective, Assessment, Plan", "Summary, Opinion, Action, Progress", "Situation, Observation, Analysis, Plan", "Status, Objective, Assessment, Procedure"],
        correctAnswer: 0,
        explanation: "SOAP is a common progress note format.",
        module: 5
      },
      {
        id: 30,
        question: "What is a recovery coach role?",
        options: ["Mentor and resource connector", "Therapist", "Doctor", "Lawyer"],
        correctAnswer: 0,
        explanation: "Recovery coaches serve as mentors and connectors.",
        module: 6
      },
      {
        id: 31,
        question: "What is GABA's primary function?",
        options: ["Increases arousal", "Calms neural activity", "Enhances memory", "Regulates mood"],
        correctAnswer: 1,
        explanation: "GABA calms or slows neural activity.",
        module: 1
      },
      {
        id: 32,
        question: "What does ongoing assessment monitor?",
        options: ["Progress and setbacks", "Only initial problems", "Counselor performance", "Office supplies"],
        correctAnswer: 0,
        explanation: "Ongoing assessment monitors progress and adjusts treatment.",
        module: 2
      },
      {
        id: 33,
        question: "What is 'urge surfing'?",
        options: ["Riding out cravings without acting", "Increasing urges", "Avoiding all cravings", "Medicating urges"],
        correctAnswer: 0,
        explanation: "Urge surfing involves observing cravings until they subside.",
        module: 3
      },
      {
        id: 34,
        question: "What is late-onset addiction?",
        options: ["Begins after age 50", "Begins in teens", "Genetic only", "Untreatable"],
        correctAnswer: 0,
        explanation: "Late-onset addiction typically begins after age 50.",
        module: 4
      },
      {
        id: 35,
        question: "What is non-maleficence?",
        options: ["Avoiding harm to clients", "Making clients happy", "Following policies", "Being friendly"],
        correctAnswer: 0,
        explanation: "Non-maleficence means avoiding actions that could harm.",
        module: 5
      },
      {
        id: 36,
        question: "What stage is 1-5 years of recovery?",
        options: ["Sustained Recovery", "Early Recovery", "Long-term Recovery", "Relapse Stage"],
        correctAnswer: 0,
        explanation: "Sustained recovery typically refers to 1-5 years.",
        module: 6
      },
      {
        id: 37,
        question: "What are ACEs?",
        options: ["Adverse Childhood Experiences", "Advanced Clinical Experiences", "Addiction Causing Events", "Addiction Contributing Elements"],
        correctAnswer: 0,
        explanation: "ACEs are Adverse Childhood Experiences increasing addiction risk.",
        module: 1
      },
      {
        id: 38,
        question: "What is stepped care?",
        options: ["Starting with least intensive interventions", "Only one treatment", "Hospitalization first", "Medication only"],
        correctAnswer: 0,
        explanation: "Stepped care begins with least intensive interventions.",
        module: 3
      },
      {
        id: 39,
        question: "What is a mandatory reporting exception?",
        options: ["Child abuse", "All information", "Past crimes", "Relationship issues"],
        correctAnswer: 0,
        explanation: "Child abuse reporting is mandatory exception to confidentiality.",
        module: 5
      },
      {
        id: 40,
        question: "What is recovery-oriented care?",
        options: ["Client-driven and strength-based", "Professional-determined only", "Medication-only", "One-size-fits-all"],
        correctAnswer: 0,
        explanation: "Recovery-oriented care is person-centered and strength-based.",
        module: 6
      }
    ]
  }
};
