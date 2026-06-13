export const clinicalPsychologyDiplomaCourse = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "clinical-psychology-diploma",
  title: "Clinical Psychology (Diploma)",
  description: "Advanced clinical psychology course covering psychological assessment, evidence-based interventions, treatment planning, and working with diverse clinical populations.",
  duration: "10 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  icon: "🏥",
  badge: "Diploma",
  prerequisites: ["mental-health-counseling-certificate"],
  
  // 2. MODULE ARCHITECTURE (6 Modules)
  modules: [
    {
      id: 1,
      title: "Clinical Assessment Fundamentals",
      content: `
# Module 1: Clinical Assessment Fundamentals

## Purpose of Clinical Assessment
Clinical assessment systematically gathers information to understand a person's psychological functioning, diagnose when appropriate, and plan treatment. Think of it as creating a detailed map before planning a journey to wellness.

## Key Assessment Components
**Clinical Interview:** Structured conversation covering history, symptoms, functioning, and goals. Different from casual conversation-it's purposeful and guided.

**Mental Status Examination:** Systematic observation of current psychological functioning including appearance, behavior, mood, thought process, and cognition.

**Standardized Measures:** Questionnaires or tests with established norms for comparison (like depression or anxiety scales).

**Collateral Information:** Information from other sources like family, previous treatment records, or medical reports.

## Diagnostic Considerations
Diagnosis serves several purposes:
- Guides treatment planning
- Facilitates communication among professionals
- Helps predict course and prognosis
- May be required for insurance or services

The biopsychosocial model considers biological, psychological, and social factors all contributing to psychological concerns.

## Common Assessment Tools
**Symptom Checklists:** Quick screens for specific concerns (PHQ-9 for depression, GAD-7 for anxiety).

**Personality Inventories:** Measures personality traits and patterns (though interpretation requires training).

**Cognitive Screening:** Brief assessments of memory, attention, and executive functioning.

**Functional Assessment:** How symptoms affect daily life in work, relationships, self-care.

## Cultural Considerations in Assessment
Culture affects symptom expression, help-seeking behavior, and what's considered "normal." Assessment should consider:
- Cultural identity and background
- Language preferences and fluency
- Cultural explanations for symptoms
- Stigma concerns within cultural context
- Cultural norms about emotional expression

## Assessment Ethics
**Informed Consent:** Explain assessment purpose, procedures, limits of confidentiality, and how information will be used.

**Competence:** Only assess in areas where you have proper training and supervision.

**Cultural Competence:** Recognize cultural factors that might affect assessment accuracy.

**Feedback:** Provide assessment results in understandable, helpful way.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the purpose of clinical assessment?",
          options: [
            "Label people",
            "Systematically gather information to understand and plan treatment",
            "Quickly solve problems",
            "Make people feel analyzed"
          ],
          correctAnswer: 1,
          explanation: "Clinical assessment systematically gathers information to understand psychological functioning and plan treatment."
        },
        {
          id: 2,
          question: "What is a clinical interview?",
          options: [
            "Casual conversation",
            "Structured, purposeful conversation",
            "Social chat",
            "Therapy session"
          ],
          correctAnswer: 1,
          explanation: "A clinical interview is a structured, purposeful conversation different from casual conversation."
        },
        {
          id: 3,
          question: "What is mental status examination?",
          options: [
            "Medical test",
            "Systematic observation of current psychological functioning",
            "Intelligence test",
            "Personality test"
          ],
          correctAnswer: 1,
          explanation: "Mental status examination systematically observes appearance, behavior, mood, thoughts, and cognition."
        },
        {
          id: 4,
          question: "What are standardized measures?",
          options: [
            "Personal opinions",
            "Questionnaires with established norms for comparison",
            "Casual observations",
            "Guesses"
          ],
          correctAnswer: 1,
          explanation: "Standardized measures have established norms allowing comparison to reference groups."
        },
        {
          id: 5,
          question: "What does diagnosis guide?",
          options: [
            "Judgment of character",
            "Treatment planning",
            "Social exclusion",
            "Personal opinions"
          ],
          correctAnswer: 1,
          explanation: "Diagnosis guides treatment planning and facilitates communication among professionals."
        },
        {
          id: 6,
          question: "What is the biopsychosocial model?",
          options: [
            "Only biological factors",
            "Biological, psychological, and social factors",
            "Only social factors",
            "Only psychological factors"
          ],
          correctAnswer: 1,
          explanation: "The biopsychosocial model considers biological, psychological, and social factors."
        },
        {
          id: 7,
          question: "What are symptom checklists?",
          options: [
            "Complete diagnoses",
            "Quick screens for specific concerns",
            "Treatment plans",
            "Personality tests"
          ],
          correctAnswer: 1,
          explanation: "Symptom checklists are quick screening tools for specific concerns like depression or anxiety."
        },
        {
          id: 8,
          question: "What is functional assessment?",
          options: [
            "Medical testing",
            "How symptoms affect daily life",
            "Blood tests",
            "Brain scans"
          ],
          correctAnswer: 1,
          explanation: "Functional assessment examines how symptoms affect work, relationships, and self-care."
        },
        {
          id: 9,
          question: "How does culture affect assessment?",
          options: [
            "No effect",
            "Affects symptom expression and help-seeking",
            "Only affects language",
            "Unimportant factor"
          ],
          correctAnswer: 1,
          explanation: "Culture affects how symptoms are expressed and whether people seek help."
        },
        {
          id: 10,
          question: "What is informed consent in assessment?",
          options: [
            "Secret testing",
            "Explaining purpose, procedures, and limits",
            "No explanation needed",
            "Assumption of agreement"
          ],
          correctAnswer: 1,
          explanation: "Informed consent means explaining assessment purpose, procedures, and confidentiality limits."
        },
        {
          id: 11,
          question: "What is collateral information?",
          options: [
            "Only client information",
            "Information from other sources",
            "Guesses",
            "Theories"
          ],
          correctAnswer: 1,
          explanation: "Collateral information comes from other sources like family or previous records."
        },
        {
          id: 12,
          question: "What does diagnosis facilitate?",
          options: [
            "Stigma only",
            "Communication among professionals",
            "Social rejection",
            "Personal judgments"
          ],
          correctAnswer: 1,
          explanation: "Diagnosis facilitates communication among different professionals involved in care."
        },
        {
          id: 13,
          question: "What is PHQ-9?",
          options: [
            "Personality test",
            "Depression screening tool",
            "Anxiety measure",
            "Cognitive test"
          ],
          correctAnswer: 1,
          explanation: "PHQ-9 is a common screening tool for depression symptoms."
        },
        {
          id: 14,
          question: "What should assessment consider about culture?",
          options: [
            "Ignore differences",
            "Cultural identity and explanations for symptoms",
            "Only Western norms",
            "Assume sameness"
          ],
          correctAnswer: 1,
          explanation: "Assessment should consider cultural identity and cultural explanations for symptoms."
        },
        {
          id: 15,
          question: "What is competence in assessment?",
          options: [
            "Always assessing",
            "Only assessing in areas with proper training",
            "Guessing answers",
            "Winging it"
          ],
          correctAnswer: 1,
          explanation: "Competence means only conducting assessments in areas where you have proper training."
        },
        {
          id: 16,
          question: "What are personality inventories?",
          options: [
            "Quick screens",
            "Measures of personality traits and patterns",
            "Diagnostic tools only",
            "Casual observations"
          ],
          correctAnswer: 1,
          explanation: "Personality inventories measure personality traits and patterns (interpretation requires training)."
        },
        {
          id: 17,
          question: "What is cognitive screening?",
          options: [
            "Personality assessment",
            "Brief assessment of memory and attention",
            "Emotional evaluation",
            "Social skills test"
          ],
          correctAnswer: 1,
          explanation: "Cognitive screening briefly assesses memory, attention, and executive functioning."
        },
        {
          id: 18,
          question: "What does prognosis mean?",
          options: [
            "Diagnosis",
            "Predicted course and outcome",
            "Treatment",
            "Assessment"
          ],
          correctAnswer: 1,
          explanation: "Prognosis refers to the predicted course and likely outcome of a condition."
        },
        {
          id: 19,
          question: "What is cultural competence?",
          options: [
            "Ignoring culture",
            "Recognizing cultural factors affecting assessment",
            "Only knowing one culture",
            "Assuming universality"
          ],
          correctAnswer: 1,
          explanation: "Cultural competence involves recognizing how cultural factors might affect assessment accuracy."
        },
        {
          id: 20,
          question: "What should happen with assessment results?",
          options: [
            "Keep secret",
            "Provide in understandable, helpful way",
            "Never share",
            "Only give to other professionals"
          ],
          correctAnswer: 1,
          explanation: "Assessment results should be provided to clients in an understandable and helpful manner."
        }
      ]
    },
    {
      id: 2,
      title: "Evidence-Based Interventions",
      content: `
# Module 2: Evidence-Based Interventions

## What are Evidence-Based Interventions?
Evidence-based interventions are treatment approaches supported by scientific research demonstrating their effectiveness. Think of them as treatments that have been tested and shown to work for specific concerns.

## Major Therapeutic Approaches
**Cognitive Behavioral Therapy (CBT):** Focuses on connections between thoughts, feelings, and behaviors. Helps identify and change unhelpful thinking patterns and behaviors.

**Psychodynamic Therapy:** Explores how past experiences and unconscious processes affect current functioning. Focuses on insight and relationship patterns.

**Humanistic Therapy:** Emphasizes personal growth, self-actualization, and present-moment experience. Client-centered approach with unconditional positive regard.

**Systems Approaches:** Views individuals within their social systems (family, community). Addresses relationship patterns and systemic factors.

## CBT Core Principles
**Cognitive Restructuring:** Identifying and challenging unhelpful thoughts. Example: Changing "I always fail" to "Sometimes I succeed, sometimes I don't."

**Behavioral Activation:** Increasing engagement in rewarding activities to improve mood.

**Exposure Therapy:** Gradually facing feared situations to reduce anxiety.

**Skill Building:** Teaching coping skills like problem-solving or emotion regulation.

## Common Intervention Techniques
**Psychoeducation:** Teaching clients about their condition and treatment.

**Relaxation Training:** Techniques like deep breathing or progressive muscle relaxation.

**Mindfulness:** Practicing present-moment awareness without judgment.

**Behavioral Experiments:** Testing beliefs through real-world experiments.

**Role Playing:** Practicing skills or difficult conversations in session.

## Matching Interventions to Concerns
Different approaches work better for different concerns:
- **Anxiety disorders:** Often respond well to CBT with exposure
- **Depression:** CBT and behavioral activation frequently effective
- **Relationship issues:** Systems or psychodynamic approaches may help
- **Trauma:** Trauma-focused therapies with safety and pacing

## Treatment Planning
Effective treatment planning involves:
1. **Collaborative Goal Setting:** Client and therapist work together on goals
2. **Intervention Selection:** Choosing appropriate techniques
3. **Progress Monitoring:** Regularly checking if interventions are working
4. **Adjustment:** Modifying approach based on progress or challenges

## Ethical Implementation
**Competence:** Only use interventions you're trained to deliver properly.

**Informed Consent:** Explain treatment approach, alternatives, risks, and benefits.

**Monitoring Outcomes:** Track whether interventions are helping.

**Cultural Adaptation:** Modify interventions respectfully for cultural fit when needed.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are evidence-based interventions?",
          options: [
            "Whatever feels right",
            "Approaches supported by scientific research",
            "Traditional methods only",
            "Newest trends"
          ],
          correctAnswer: 1,
          explanation: "Evidence-based interventions have scientific research demonstrating their effectiveness."
        },
        {
          id: 2,
          question: "What does CBT focus on?",
          options: [
            "Only past experiences",
            "Connections between thoughts, feelings, behaviors",
            "Only unconscious processes",
            "Only family systems"
          ],
          correctAnswer: 1,
          explanation: "CBT focuses on connections between thoughts, feelings, and behaviors."
        },
        {
          id: 3,
          question: "What does psychodynamic therapy explore?",
          options: [
            "Only current behaviors",
            "Past experiences and unconscious processes",
            "Only thinking patterns",
            "Only skill building"
          ],
          correctAnswer: 1,
          explanation: "Psychodynamic therapy explores how past experiences and unconscious processes affect current functioning."
        },
        {
          id: 4,
          question: "What is humanistic therapy emphasis?",
          options: [
            "Diagnosis",
            "Personal growth and self-actualization",
            "Behavior change only",
            "Symptom reduction only"
          ],
          correctAnswer: 1,
          explanation: "Humanistic therapy emphasizes personal growth, self-actualization, and present experience."
        },
        {
          id: 5,
          question: "What are systems approaches?",
          options: [
            "Only individual focus",
            "Viewing individuals within social systems",
            "Only biological factors",
            "Only cognitive factors"
          ],
          correctAnswer: 1,
          explanation: "Systems approaches view individuals within their social systems like family or community."
        },
        {
          id: 6,
          question: "What is cognitive restructuring?",
          options: [
            "Ignoring thoughts",
            "Identifying and changing unhelpful thoughts",
            "Only accepting thoughts",
            "Suppressing thoughts"
          ],
          correctAnswer: 1,
          explanation: "Cognitive restructuring involves identifying and challenging unhelpful thinking patterns."
        },
        {
          id: 7,
          question: "What is behavioral activation?",
          options: [
            "Reducing activity",
            "Increasing engagement in rewarding activities",
            "Only talking",
            "Only resting"
          ],
          correctAnswer: 1,
          explanation: "Behavioral activation increases engagement in rewarding activities to improve mood."
        },
        {
          id: 8,
          question: "What is exposure therapy?",
          options: [
            "Avoiding fears",
            "Gradually facing feared situations",
            "Only imagining fears",
            "Suppressing anxiety"
          ],
          correctAnswer: 1,
          explanation: "Exposure therapy involves gradually facing feared situations to reduce anxiety."
        },
        {
          id: 9,
          question: "What is psychoeducation?",
          options: [
            "Keeping clients uninformed",
            "Teaching about condition and treatment",
            "Only giving advice",
            "Only listening"
          ],
          correctAnswer: 1,
          explanation: "Psychoeducation involves teaching clients about their condition and treatment approach."
        },
        {
          id: 10,
          question: "What works well for anxiety disorders?",
          options: [
            "Only medication",
            "CBT with exposure techniques",
            "Only supportive listening",
            "Only family therapy"
          ],
          correctAnswer: 1,
          explanation: "Anxiety disorders often respond well to CBT approaches including exposure techniques."
        },
        {
          id: 11,
          question: "What is collaborative goal setting?",
          options: [
            "Therapist decides goals",
            "Client and therapist work together on goals",
            "Family sets goals",
            "No goals needed"
          ],
          correctAnswer: 1,
          explanation: "Collaborative goal setting involves client and therapist working together on treatment goals."
        },
        {
          id: 12,
          question: "What is competence in intervention?",
          options: [
            "Using any intervention",
            "Only using interventions with proper training",
            "Guessing what to do",
            "Copying others"
          ],
          correctAnswer: 1,
          explanation: "Competence means only delivering interventions you're properly trained to provide."
        },
        {
          id: 13,
          question: "What is mindfulness?",
          options: [
            "Multitasking",
            "Present-moment awareness without judgment",
            "Future planning",
            "Past analysis"
          ],
          correctAnswer: 1,
          explanation: "Mindfulness involves practicing present-moment awareness without judgment."
        },
        {
          id: 14,
          question: "What are behavioral experiments?",
          options: [
            "Only talking",
            "Testing beliefs through real-world experiments",
            "Guessing outcomes",
            "Avoiding testing"
          ],
          correctAnswer: 1,
          explanation: "Behavioral experiments involve testing beliefs or predictions through real-world activities."
        },
        {
          id: 15,
          question: "What works for depression?",
          options: [
            "Only rest",
            "CBT and behavioral activation",
            "Only medication",
            "Only insight"
          ],
          correctAnswer: 1,
          explanation: "Depression often responds well to CBT approaches including behavioral activation."
        },
        {
          id: 16,
          question: "What is role playing?",
          options: [
            "Only real situations",
            "Practicing skills in session",
            "Avoiding practice",
            "Only observing"
          ],
          correctAnswer: 1,
          explanation: "Role playing involves practicing skills or difficult conversations within therapy sessions."
        },
        {
          id: 17,
          question: "What is progress monitoring?",
          options: [
            "Only at end",
            "Regularly checking if interventions work",
            "Assuming progress",
            "Never checking"
          ],
          correctAnswer: 1,
          explanation: "Progress monitoring involves regularly checking whether interventions are helping."
        },
        {
          id: 18,
          question: "What is cultural adaptation?",
          options: [
            "Ignoring culture",
            "Modifying interventions for cultural fit",
            "Only Western methods",
            "No changes ever"
          ],
          correctAnswer: 1,
          explanation: "Cultural adaptation involves modifying interventions respectfully for better cultural fit."
        },
        {
          id: 19,
          question: "What does informed consent include for interventions?",
          options: [
            "No explanation",
            "Approach, alternatives, risks, benefits",
            "Only benefits",
            "Secrets"
          ],
          correctAnswer: 1,
          explanation: "Informed consent for interventions includes explaining approach, alternatives, risks, and benefits."
        },
        {
          id: 20,
          question: "What is adjustment in treatment?",
          options: [
            "Never changing",
            "Modifying approach based on progress",
            "Sticking to plan regardless",
            "Only client changes"
          ],
          correctAnswer: 1,
          explanation: "Adjustment involves modifying the treatment approach based on progress or challenges."
        }
      ]
    },
    {
      id: 3,
      title: "Treatment Planning and Progress Monitoring",
      content: `
# Module 3: Treatment Planning and Progress Monitoring

## Comprehensive Treatment Planning
Treatment planning translates assessment findings into a roadmap for therapy. It's a collaborative process between clinician and client that evolves over time. Think of it as creating a personalized wellness journey map.

## Key Treatment Plan Components
**Presenting Problems:** Clear description of concerns bringing client to treatment.

**Goals:** Specific, measurable, achievable, relevant, time-bound (SMART) objectives.

**Objectives:** Smaller steps leading to goal achievement.

**Interventions:** Specific techniques and approaches to be used.

**Progress Measures:** How progress will be tracked and evaluated.

**Timeframe:** Estimated duration and frequency of treatment.

## SMART Goal Development
**Specific:** Clear and precise (not "feel better" but "reduce panic attacks from daily to weekly")

**Measurable:** Can be tracked and quantified ("increase social activities from 0 to 2 per week")

**Achievable:** Realistic given resources and constraints

**Relevant:** Meaningful to client's values and life

**Time-bound:** Clear timeframe for achievement

## Collaborative Planning Process
Effective planning involves:
1. **Client Expertise:** Client knows their life, values, and preferences
2. **Clinical Expertise:** Clinician knows interventions and typical courses
3. **Shared Decision-Making:** Balancing both perspectives
4. **Flexibility:** Willingness to adjust as therapy progresses

## Progress Monitoring Methods
**Session-by-Session Tracking:** Brief check-ins at each session about progress and satisfaction.

**Standardized Measures:** Regular administration of validated questionnaires.

**Behavioral Tracking:** Monitoring specific behaviors or symptoms between sessions.

**Functional Indicators:** Observing improvements in daily functioning.

**Therapeutic Alliance Assessment:** Monitoring quality of therapeutic relationship.

## Adjusting Treatment Plans
When to consider adjustments:
- Lack of progress after reasonable time
- New concerns emerge
- Client's life circumstances change
- Therapeutic relationship difficulties
- Client preferences shift

Adjustment involves revisiting goals, trying different interventions, or considering referral.

## Documentation Standards
**Purpose of Documentation:** Communication, continuity of care, legal protection, quality improvement.

**Key Elements:** Assessment findings, treatment plan, progress notes, risk assessments, termination summary.

**Ethical Documentation:** Accurate, timely, professional, confidential, and purposeful.

**Progress Notes:** SOAP format (Subjective, Objective, Assessment, Plan) or similar structure.

## Termination Planning
Planning for therapy conclusion from the beginning:
- **Criteria for termination:** How will we know therapy is complete?
- **Progress review:** Regular check-ins about progress toward termination
- **Relapse prevention:** Planning for maintaining gains after therapy
- **Referral planning:** If additional services might be needed later
- **Closure process:** Saying goodbye meaningfully
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is treatment planning?",
          options: [
            "Fixed recipe",
            "Collaborative roadmap for therapy",
            "Clinician-only decision",
            "Standard protocol for all"
          ],
          correctAnswer: 1,
          explanation: "Treatment planning is a collaborative process creating a roadmap for therapy."
        },
        {
          id: 2,
          question: "What are presenting problems?",
          options: [
            "All life issues",
            "Concerns bringing client to treatment",
            "Only diagnoses",
            "Family issues only"
          ],
          correctAnswer: 1,
          explanation: "Presenting problems are the specific concerns that led someone to seek treatment."
        },
        {
          id: 3,
          question: "What does SMART stand for?",
          options: [
            "Simple, Meaningful, Actionable, Realistic, Timely",
            "Specific, Measurable, Achievable, Relevant, Time-bound",
            "Strategic, Manageable, Appropriate, Reasonable, Targeted",
            "Significant, Meaningful, Achievable, Realistic, Timely"
          ],
          correctAnswer: 1,
          explanation: "SMART goals are Specific, Measurable, Achievable, Relevant, and Time-bound."
        },
        {
          id: 4,
          question: "What is specific in SMART goals?",
          options: [
            "Vague intentions",
            "Clear and precise objectives",
            "General hopes",
            "Wishful thinking"
          ],
          correctAnswer: 1,
          explanation: "Specific means clear and precise rather than vague or general."
        },
        {
          id: 5,
          question: "What is measurable in SMART goals?",
          options: [
            "Cannot track",
            "Can be tracked and quantified",
            "Subjective only",
            "Guessed"
          ],
          correctAnswer: 1,
          explanation: "Measurable means progress can be tracked and quantified somehow."
        },
        {
          id: 6,
          question: "What does collaborative planning balance?",
          options: [
            "Only clinician knowledge",
            "Client expertise and clinical expertise",
            "Only client wishes",
            "Only textbook answers"
          ],
          correctAnswer: 1,
          explanation: "Collaborative planning balances client's life knowledge with clinician's professional knowledge."
        },
        {
          id: 7,
          question: "What is session-by-session tracking?",
          options: [
            "Only at end",
            "Brief check-ins each session",
            "Never checking",
            "Only formal tests"
          ],
          correctAnswer: 1,
          explanation: "Session-by-session tracking involves brief progress check-ins at each therapy session."
        },
        {
          id: 8,
          question: "When consider treatment adjustments?",
          options: [
            "Never change",
            "Lack of progress after reasonable time",
            "Always change weekly",
            "Only client requests"
          ],
          correctAnswer: 1,
          explanation: "Consider adjustments when there's lack of progress after a reasonable period."
        },
        {
          id: 9,
          question: "What is purpose of documentation?",
          options: [
            "Only billing",
            "Communication and continuity of care",
            "Secret records",
            "Only for supervisors"
          ],
          correctAnswer: 1,
          explanation: "Documentation serves communication, continuity, legal, and quality improvement purposes."
        },
        {
          id: 10,
          question: "What is SOAP format?",
          options: [
            "Cleaning method",
            "Subjective, Objective, Assessment, Plan",
            "Simple, Organized, Accurate, Professional",
            "Summary, Observations, Analysis, Projection"
          ],
          correctAnswer: 1,
          explanation: "SOAP format organizes notes into Subjective, Objective, Assessment, and Plan sections."
        },
        {
          id: 11,
          question: "What are objectives in treatment plans?",
          options: [
            "Same as goals",
            "Smaller steps leading to goals",
            "Only interventions",
            "Only diagnoses"
          ],
          correctAnswer: 1,
          explanation: "Objectives are smaller, specific steps that lead toward achieving broader goals."
        },
        {
          id: 12,
          question: "What is achievable in SMART goals?",
          options: [
            "Impossible dreams",
            "Realistic given resources",
            "Whatever client wants",
            "Easy without effort"
          ],
          correctAnswer: 1,
          explanation: "Achievable means realistic given the client's resources and circumstances."
        },
        {
          id: 13,
          question: "What is relevant in SMART goals?",
          options: [
            "Clinician's preferences",
            "Meaningful to client's values",
            "Standard for everyone",
            "Theoretically interesting"
          ],
          correctAnswer: 1,
          explanation: "Relevant means meaningful and important to the client's life and values."
        },
        {
          id: 14,
          question: "What is behavioral tracking?",
          options: [
            "Only in session",
            "Monitoring behaviors between sessions",
            "Guessing progress",
            "Only at start"
          ],
          correctAnswer: 1,
          explanation: "Behavioral tracking involves monitoring specific behaviors or symptoms between sessions."
        },
        {
          id: 15,
          question: "What are functional indicators?",
          options: [
            "Only test scores",
            "Improvements in daily functioning",
            "Only client reports",
            "Only clinician observations"
          ],
          correctAnswer: 1,
          explanation: "Functional indicators are improvements in daily life activities and roles."
        },
        {
          id: 16,
          question: "What is ethical documentation?",
          options: [
            "Falsified records",
            "Accurate, timely, professional",
            "Only positive notes",
            "Shared publicly"
          ],
          correctAnswer: 1,
          explanation: "Ethical documentation is accurate, timely, professional, confidential, and purposeful."
        },
        {
          id: 17,
          question: "What is termination planning?",
          options: [
            "Only at end",
            "Planning conclusion from beginning",
            "Surprise ending",
            "Never ending"
          ],
          correctAnswer: 1,
          explanation: "Termination planning considers therapy conclusion from the beginning of treatment."
        },
        {
          id: 18,
          question: "What is relapse prevention?",
          options: [
            "Guaranteeing no problems",
            "Planning to maintain gains after therapy",
            "Only during therapy",
            "Ignoring future"
          ],
          correctAnswer: 1,
          explanation: "Relapse prevention involves planning how to maintain improvements after therapy ends."
        },
        {
          id: 19,
          question: "What is therapeutic alliance assessment?",
          options: [
            "Only client liking therapist",
            "Monitoring quality of therapeutic relationship",
            "Only therapist feelings",
            "Unimportant factor"
          ],
          correctAnswer: 1,
          explanation: "Therapeutic alliance assessment monitors the quality of the working relationship."
        },
        {
          id: 20,
          question: "What is timeframe in treatment plans?",
          options: [
            "Open-ended always",
            "Estimated duration and frequency",
            "No time considered",
            "Fixed for everyone"
          ],
          correctAnswer: 1,
          explanation: "Timeframe includes estimated duration of treatment and session frequency."
        }
      ]
    },
    {
      id: 4,
      title: "Working with Specific Populations",
      content: `
# Module 4: Working with Specific Populations

## Population-Specific Considerations
Different populations have unique needs, strengths, and considerations. Effective clinical work requires understanding these differences while avoiding stereotypes. Think of it as cultural and developmental competence in action.

## Working with Children and Adolescents
**Developmental Considerations:** Treatment must match cognitive and emotional developmental level.

**Family Involvement:** Typically involves parents/caregivers in treatment.

**Play and Creative Techniques:** Often use play, art, or games for expression.

**School Collaboration:** May involve communication with schools.

**Confidentiality Limits:** Different rules about privacy with minors.

**Informed Consent:** Parents typically consent, with child assent when possible.

## Working with Older Adults
**Lifespan Perspective:** Consider entire life history and accumulated wisdom.

**Medical Comorbidity:** Often co-occurring medical conditions.

**Cognitive Changes:** Normal aging vs. concerning cognitive decline.

**Loss and Transitions:** Common experiences of loss (spouse, health, independence).

**Adaptation of Techniques:** May need to adapt for sensory or mobility limitations.

**End-of-Life Considerations:** May involve discussions about mortality and meaning.

## Working with Trauma Survivors
**Safety First:** Establishing physical and emotional safety as foundation.

**Pacing:** Going at client's pace, not pushing too fast.

**Stabilization:** Developing coping skills before trauma processing.

**Triggers:** Understanding and managing trauma reminders.

**Empowerment:** Supporting regaining sense of control and choice.

**Vicarious Trauma:** Clinician self-care when working with trauma.

## Cultural and Diversity Competence
**Cultural Humility:** Ongoing process of learning about different cultures.

**Intersectionality:** Understanding multiple identity factors (race, gender, sexuality, etc.).

**Power Dynamics:** Awareness of privilege and oppression in therapeutic relationship.

**Adapting Interventions:** Modifying approaches for cultural relevance.

**Addressing Stigma:** Helping clients navigate cultural stigma about mental health.

**Language Access:** Ensuring communication in preferred language.

## Working with Couples and Families
**Systems Perspective:** Viewing problems in relationship context.

**Circular Causality:** Understanding mutual influence in relationships.

**Communication Patterns:** Identifying and improving communication.

**Boundaries:** Healthy vs. problematic boundaries in relationships.

**Multipartiality:** Being fair to all members without taking sides.

**Genograms:** Mapping family history and patterns.

## Specialized Considerations
**LGBTQ+ Clients:** Understanding unique stressors and affirming identity.

**Disability Considerations:** Accessibility and understanding disability experience.

**Socioeconomic Factors:** Impact of poverty and resources on treatment.

**Rural vs. Urban:** Different resource availability and community norms.

**Religious/Spiritual:** Integrating or respecting spiritual beliefs.

**Immigrant/Refugee:** Understanding acculturation stress and trauma history.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is required for working with different populations?",
          options: [
            "Same approach for all",
            "Understanding unique needs while avoiding stereotypes",
            "Only textbook knowledge",
            "Personal experience only"
          ],
          correctAnswer: 1,
          explanation: "Effective work requires understanding population differences while avoiding stereotypes."
        },
        {
          id: 2,
          question: "What is key with children and adolescents?",
          options: [
            "Same as adults",
            "Matching developmental level",
            "Only talking",
            "Ignoring development"
          ],
          correctAnswer: 1,
          explanation: "Treatment must match the child's cognitive and emotional developmental level."
        },
        {
          id: 3,
          question: "What often involves with child treatment?",
          options: [
            "Only child sessions",
            "Family involvement",
            "Only school reports",
            "No family contact"
          ],
          correctAnswer: 1,
          explanation: "Child treatment typically involves parents or caregivers in the process."
        },
        {
          id: 4,
          question: "What techniques often used with children?",
          options: [
            "Only talking",
            "Play and creative techniques",
            "Only worksheets",
            "Only medication"
          ],
          correctAnswer: 1,
          explanation: "Children often express themselves through play, art, or games in therapy."
        },
        {
          id: 5,
          question: "What is lifespan perspective with older adults?",
          options: [
            "Only current issues",
            "Considering entire life history",
            "Only aging problems",
            "Ignoring past"
          ],
          correctAnswer: 1,
          explanation: "Lifespan perspective considers the person's entire life history and accumulated wisdom."
        },
        {
          id: 6,
          question: "What is common with older adults?",
          options: [
            "No medical issues",
            "Medical conditions co-occurring",
            "Only psychological issues",
            "Perfect health"
          ],
          correctAnswer: 1,
          explanation: "Older adults often have co-occurring medical conditions affecting treatment."
        },
        {
          id: 7,
          question: "What is first with trauma survivors?",
          options: [
            "Trauma processing",
            "Establishing safety",
            "Immediate exposure",
            "Only talking"
          ],
          correctAnswer: 1,
          explanation: "Establishing physical and emotional safety comes first with trauma work."
        },
        {
          id: 8,
          question: "What is pacing in trauma work?",
          options: [
            "Rushing through",
            "Going at client's pace",
            "Therapist deciding pace",
            "Fixed timeline"
          ],
          correctAnswer: 1,
          explanation: "Pacing means proceeding at the client's comfort level, not pushing too fast."
        },
        {
          id: 9,
          question: "What is cultural humility?",
          options: [
            "Knowing everything",
            "Ongoing process of learning",
            "Ignoring culture",
            "Assuming sameness"
          ],
          correctAnswer: 1,
          explanation: "Cultural humility is an ongoing process of learning about different cultures."
        },
        {
          id: 10,
          question: "What is intersectionality?",
          options: [
            "Only one identity",
            "Multiple identity factors interacting",
            "Simple categorization",
            "Ignoring identities"
          ],
          correctAnswer: 1,
          explanation: "Intersectionality understands how multiple identity factors interact and affect experience."
        },
        {
          id: 11,
          question: "What is systems perspective with families?",
          options: [
            "Only individual focus",
            "Viewing problems in relationship context",
            "Ignoring relationships",
            "Only one person's view"
          ],
          correctAnswer: 1,
          explanation: "Systems perspective views problems within the context of relationship patterns."
        },
        {
          id: 12,
          question: "What is circular causality?",
          options: [
            "One cause only",
            "Mutual influence in relationships",
            "Linear cause-effect",
            "Random events"
          ],
          correctAnswer: 1,
          explanation: "Circular causality understands how family members mutually influence each other."
        },
        {
          id: 13,
          question: "What is multipartiality?",
          options: [
            "Taking sides",
            "Being fair to all members",
            "Ignoring some",
            "Only one perspective"
          ],
          correctAnswer: 1,
          explanation: "Multipartiality means being fair to all family members without taking sides."
        },
        {
          id: 14,
          question: "What are triggers in trauma?",
          options: [
            "Only obvious dangers",
            "Trauma reminders causing distress",
            "Only in therapy",
            "Easy to avoid"
          ],
          correctAnswer: 1,
          explanation: "Triggers are reminders of trauma that can cause emotional or physiological reactions."
        },
        {
          id: 15,
          question: "What is empowerment with trauma?",
          options: [
            "Taking control for client",
            "Regaining sense of control and choice",
            "Avoiding decisions",
            "Therapist directing"
          ],
          correctAnswer: 1,
          explanation: "Empowerment supports trauma survivors in regaining control and choice in their lives."
        },
        {
          id: 16,
          question: "What is vicarious trauma?",
          options: [
            "Client trauma only",
            "Clinician impact from hearing trauma",
            "No impact on therapist",
            "Only physical trauma"
          ],
          correctAnswer: 1,
          explanation: "Vicarious trauma refers to the impact on clinicians from hearing about others' trauma."
        },
        {
          id: 17,
          question: "What are genograms?",
          options: [
            "Genetic tests",
            "Family history and pattern maps",
            "Only current family",
            "Medical records"
          ],
          correctAnswer: 1,
          explanation: "Genograms visually map family history, relationships, and patterns across generations."
        },
        {
          id: 18,
          question: "What with LGBTQ+ clients?",
          options: [
            "Ignoring identity",
            "Understanding unique stressors",
            "Assuming heterosexuality",
            "Changing identity"
          ],
          correctAnswer: 1,
          explanation: "Working with LGBTQ+ clients requires understanding unique stressors and affirming identity."
        },
        {
          id: 19,
          question: "What is language access?",
          options: [
            "Only English",
            "Communication in preferred language",
            "Assuming understanding",
            "No interpreters"
          ],
          correctAnswer: 1,
          explanation: "Language access ensures clients can communicate in their preferred language."
        },
        {
          id: 20,
          question: "What are socioeconomic factors?",
          options: [
            "Unimportant",
            "Impact of poverty and resources",
            "Only psychological",
            "Equal for all"
          ],
          correctAnswer: 1,
          explanation: "Socioeconomic factors like poverty and resource availability significantly impact treatment."
        }
      ]
    },
    {
      id: 5,
      title: "Ethical and Legal Considerations",
      content: `
# Module 5: Ethical and Legal Considerations

## Foundation of Clinical Ethics
Ethical practice protects clients, maintains professional standards, and preserves public trust. Think of ethics as the guardrails that keep clinical work safe and effective. Core ethical principles include beneficence (do good), nonmaleficence (do no harm), autonomy (respect choice), justice (fairness), and fidelity (keep promises).

## Key Ethical Principles in Practice
**Informed Consent:** Clients must understand treatment nature, risks, benefits, alternatives, and limits of confidentiality before consenting.

**Competence:** Only practice within boundaries of your training, experience, and qualifications.

**Confidentiality:** Protect client information with specific exceptions (danger to self/others, abuse reporting requirements).

**Multiple Relationships:** Avoid relationships that could impair professional judgment or exploit clients.

**Boundaries:** Maintain appropriate professional boundaries in all interactions.

**Documentation:** Keep accurate, timely records that serve legitimate purposes.

## Legal Requirements
**Mandated Reporting:** Legal requirement to report suspected child/elder/dependent adult abuse.

**Duty to Warn/Protect:** Legal obligation to take action when client poses serious threat to identifiable others.

**HIPAA Compliance:** Federal regulations protecting health information privacy and security.

**Record Retention:** Legal requirements for how long to keep records.

**Subpoena Response:** Proper procedures if records are legally requested.

**Malpractice Prevention:** Practices that reduce legal liability risks.

## Confidentiality and Its Limits
Confidentiality is fundamental but has important limits:
- **Danger to Self:** Imminent suicide risk
- **Danger to Others:** Specific threat to identifiable person
- **Child/Elder Abuse:** Suspected abuse or neglect
- **Court Order:** Legal subpoena for records
- **Treatment Coordination:** Sharing with treatment team (with consent)
- **Supervision:** Discussing cases with supervisor

Clients should understand these limits from the beginning.

## Boundary Management
**Physical Boundaries:** Appropriate touch, office setup, personal space.

**Emotional Boundaries:** Appropriate self-disclosure, managing countertransference.

**Time Boundaries:** Starting/ending sessions on time, availability between sessions.

**Financial Boundaries:** Clear fee structure, handling missed appointments.

**Social Boundaries:** Appropriate social contact outside sessions.

**Digital Boundaries:** Appropriate use of technology, email, social media.

## Cultural Considerations in Ethics
**Cultural Competence:** Providing services sensitive to cultural differences.

**Cultural Humility:** Recognizing limits of your cultural knowledge.

**Language Access:** Providing services in client's preferred language.

**Cultural Values:** Respecting cultural values that may differ from your own.

**Power Dynamics:** Awareness of cultural power differences in therapeutic relationship.

**Adapting Ethical Standards:** Applying ethical principles in culturally sensitive ways.

## Ethical Decision-Making Models
When facing ethical dilemmas:
1. **Identify Problem:** What ethical principles conflict?
2. **Consult Resources:** Ethics codes, laws, policies, literature
3. **Consider Options:** Brainstorm possible courses of action
4. **Evaluate Options:** Weigh benefits/harms of each
5. **Choose Action:** Select best option
6. **Implement and Evaluate:** Take action and assess outcome
7. **Document:** Record decision-making process

## Supervision and Consultation
**Purpose of Supervision:** Quality assurance, professional development, client protection.

**When to Seek Consultation:** Complex cases, ethical dilemmas, uncertainty.

**Choosing Consultants:** Based on expertise, trustworthiness, availability.

**Documenting Consultation:** Record advice received and decisions made.

**Supervisor Responsibility:** Supervisors are responsible for supervisees' work.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is beneficence?",
          options: [
            "Doing harm",
            "Doing good for clients",
            "Being neutral",
            "Avoiding action"
          ],
          correctAnswer: 1,
          explanation: "Beneficence means doing good and promoting client welfare."
        },
        {
          id: 2,
          question: "What is nonmaleficence?",
          options: [
            "Causing harm",
            "Doing no harm",
            "Risking harm",
            "Ignoring harm"
          ],
          correctAnswer: 1,
          explanation: "Nonmaleficence means avoiding harm to clients."
        },
        {
          id: 3,
          question: "What is informed consent?",
          options: [
            "Assumed agreement",
            "Understanding treatment before consenting",
            "No explanation needed",
            "Only verbal agreement"
          ],
          correctAnswer: 1,
          explanation: "Informed consent means clients understand treatment before agreeing to it."
        },
        {
          id: 4,
          question: "What does competence mean?",
          options: [
            "Doing everything",
            "Practicing within training boundaries",
            "Guessing what to do",
            "Always confident"
          ],
          correctAnswer: 1,
          explanation: "Competence means practicing only within your training and qualifications."
        },
        {
          id: 5,
          question: "What is confidentiality?",
          options: [
            "Sharing everything",
            "Protecting client information",
            "Telling families everything",
            "No privacy"
          ],
          correctAnswer: 1,
          explanation: "Confidentiality means protecting client information with specific exceptions."
        },
        {
          id: 6,
          question: "What are multiple relationships?",
          options: [
            "Only therapeutic",
            "Relationships impairing professional judgment",
            "All relationships",
            "Only social"
          ],
          correctAnswer: 1,
          explanation: "Multiple relationships are additional relationships that could impair judgment or exploit."
        },
        {
          id: 7,
          question: "What is mandated reporting?",
          options: [
            "Optional reporting",
            "Legal requirement to report abuse",
            "Never reporting",
            "Only serious crimes"
          ],
          correctAnswer: 1,
          explanation: "Mandated reporting is legal requirement to report suspected abuse of vulnerable persons."
        },
        {
          id: 8,
          question: "What is duty to warn/protect?",
          options: [
            "No duty",
            "Obligation when client threatens others",
            "Only for police",
            "Optional action"
          ],
          correctAnswer: 1,
          explanation: "Duty to warn/protect is legal obligation when client poses serious threat to others."
        },
        {
          id: 9,
          question: "What are confidentiality limits?",
          options: [
            "No limits",
            "Danger to self/others, abuse reporting",
            "Only client permission",
            "Any concern"
          ],
          correctAnswer: 1,
          explanation: "Confidentiality has limits including danger to self/others and abuse reporting requirements."
        },
        {
          id: 10,
          question: "What are physical boundaries?",
          options: [
            "Only emotional",
            "Appropriate touch and personal space",
            "No boundaries",
            "Only in office"
          ],
          correctAnswer: 1,
          explanation: "Physical boundaries involve appropriate touch, office setup, and personal space."
        },
        {
          id: 11,
          question: "What is cultural competence?",
          options: [
            "Ignoring culture",
            "Services sensitive to cultural differences",
            "Only Western approaches",
            "Assuming sameness"
          ],
          correctAnswer: 1,
          explanation: "Cultural competence means providing services sensitive to cultural differences."
        },
        {
          id: 12,
          question: "What is cultural humility?",
          options: [
            "Knowing everything",
            "Recognizing limits of cultural knowledge",
            "No learning needed",
            "Cultural superiority"
          ],
          correctAnswer: 1,
          explanation: "Cultural humility involves recognizing limits of your cultural knowledge and continuing to learn."
        },
        {
          id: 13,
          question: "What is first step in ethical decision-making?",
          options: [
            "Act immediately",
            "Identify the ethical problem",
            "Ignore dilemma",
            "Ask client decide"
          ],
          correctAnswer: 1,
          explanation: "First step is identifying what ethical principles are in conflict or concern."
        },
        {
          id: 14,
          question: "What is purpose of supervision?",
          options: [
            "Only administrative",
            "Quality assurance and professional development",
            "Only for beginners",
            "Unnecessary"
          ],
          correctAnswer: 1,
          explanation: "Supervision serves quality assurance, professional development, and client protection."
        },
        {
          id: 15,
          question: "What is autonomy?",
          options: [
            "Making decisions for clients",
            "Respecting client choice and self-determination",
            "Ignoring preferences",
            "Therapist control"
          ],
          correctAnswer: 1,
          explanation: "Autonomy means respecting clients' right to make their own choices."
        },
        {
          id: 16,
          question: "What is justice?",
          options: [
            "Favoritism",
            "Fairness and equitable treatment",
            "Unequal treatment",
            "Only legal matters"
          ],
          correctAnswer: 1,
          explanation: "Justice means treating clients fairly and equitably."
        },
        {
          id: 17,
          question: "What is fidelity?",
          options: [
            "Breaking promises",
            "Keeping promises and being trustworthy",
            "Changing agreements",
            "No commitments"
          ],
          correctAnswer: 1,
          explanation: "Fidelity means keeping promises and being trustworthy in professional relationships."
        },
        {
          id: 18,
          question: "What is HIPAA?",
          options: [
            "Medical treatment",
            "Health information privacy regulations",
            "Psychological theory",
            "Therapy technique"
          ],
          correctAnswer: 1,
          explanation: "HIPAA are federal regulations protecting health information privacy and security."
        },
        {
          id: 19,
          question: "When seek consultation?",
          options: [
            "Never",
            "Complex cases or ethical dilemmas",
            "Only for supervision",
            "Only legal issues"
          ],
          correctAnswer: 1,
          explanation: "Seek consultation for complex cases, ethical dilemmas, or when uncertain."
        },
        {
          id: 20,
          question: "Who responsible for supervisees' work?",
          options: [
            "Only supervisee",
            "Supervisor shares responsibility",
            "No one",
            "Only client"
          ],
          correctAnswer: 1,
          explanation: "Supervisors share professional responsibility for their supervisees' clinical work."
        }
      ]
    },
    {
      id: 6,
      title: "Professional Development and Self-Care",
      content: `
# Module 6: Professional Development and Self-Care

## The Reflective Practitioner
Being an effective clinical psychologist requires ongoing self-reflection and professional growth. Think of it as being both a scientist (applying research) and a practitioner (applying skills), while also being human (with your own needs and limits).

## Continuing Education
**Lifelong Learning:** Clinical knowledge constantly evolves-ongoing learning is essential.

**Staying Current:** Reading journals, attending workshops, learning new approaches.

**Specialization Development:** Developing expertise in specific areas over time.

**Cross-Training:** Learning from related fields (medicine, social work, neuroscience).

**Technology Updates:** Staying current with teletherapy, digital tools, and electronic records.

## Supervision and Consultation Throughout Career
**Different Supervision Needs:** Changes as you gain experience but remains valuable.

**Peer Consultation:** Regular meetings with colleagues for case discussion.

**Specialized Consultation:** Seeking experts for specific client concerns or techniques.

**Group Supervision:** Learning from multiple perspectives in group format.

**Mentorship:** Both being mentored and mentoring others.

## Self-Care as Ethical Imperative
**Burnout Prevention:** Regular self-care prevents impairment and protects clients.

**Vicarious Trauma Management:** Addressing impact of working with trauma.

**Compassion Fatigue:** Recognizing and addressing emotional exhaustion from helping.

**Work-Life Balance:** Maintaining healthy boundaries between work and personal life.

**Stress Management:** Regular practices to manage work stress.

## Personal Therapy for Clinicians
**Benefits:** Personal growth, addressing countertransference, experiencing therapy from client perspective.

**Ethical Considerations:** Maintaining boundaries with your own therapist.

**Timing:** During training, during stressful periods, or for personal growth.

**Choosing a Therapist:** Finding someone with appropriate expertise and good fit.

**Confidentiality:** Your therapy is confidential like any client's.

## Managing Professional Relationships
**Collegial Relationships:** Building supportive professional networks.

**Interdisciplinary Collaboration:** Working effectively with other professionals.

**Managing Conflicts:** Professional conflict resolution approaches.

**Professional Organizations:** Benefits of membership and involvement.

**Community Engagement:** Connecting with broader community professionally.

## Career Development
**Career Planning:** Setting professional goals and development plans.

**Specialization Paths:** Clinical, research, teaching, administration, etc.

**Publication and Presentation:** Contributing to professional knowledge.

**Leadership Development:** Growing into supervisory or administrative roles.

**Legacy Planning:** Considering long-term professional contributions.

## Personal Wellness Practices
**Physical Health:** Regular exercise, healthy eating, medical care.

**Mental Health:** Managing your own mental health proactively.

**Social Support:** Maintaining personal relationships outside work.

**Spiritual/Meaning:** Nurturing sense of purpose and meaning.

**Hobbies and Interests:** Engaging in activities unrelated to work.

**Rest and Recovery:** Adequate sleep, vacations, downtime.

## Recognizing and Addressing Impairment
**Signs of Impairment:** Decreased effectiveness, ethical lapses, personal distress.

**Self-Monitoring:** Regular check-ins about your professional functioning.

**Seeking Help Early:** Getting support at first signs of difficulty.

**Collegial Support:** Colleagues gently addressing concerns.

**Temporary Leave:** Taking time off when needed for recovery.

**Return to Work:** Structured return after impairment addressed.
      `,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is reflective practitioner?",
          options: [
            "Never reflecting",
            "Ongoing self-reflection and growth",
            "Only following protocols",
            "No learning needed"
          ],
          correctAnswer: 1,
          explanation: "Reflective practitioners engage in ongoing self-reflection and professional growth."
        },
        {
          id: 2,
          question: "Why lifelong learning important?",
          options: [
            "Knowledge static",
            "Clinical knowledge constantly evolves",
            "Once trained, done",
            "Only beginners learn"
          ],
          correctAnswer: 1,
          explanation: "Clinical knowledge constantly evolves, making lifelong learning essential."
        },
        {
          id: 3,
          question: "What is staying current?",
          options: [
            "Using only old methods",
            "Reading journals, attending workshops",
            "No updates needed",
            "Only personal experience"
          ],
          correctAnswer: 1,
          explanation: "Staying current involves reading journals, attending workshops, and learning new approaches."
        },
        {
          id: 4,
          question: "Why supervision valuable throughout career?",
          options: [
            "Only for students",
            "Changes but remains valuable",
            "Unnecessary later",
            "Only if required"
          ],
          correctAnswer: 1,
          explanation: "Supervision needs change with experience but remains valuable throughout career."
        },
        {
          id: 5,
          question: "What is peer consultation?",
          options: [
            "Only supervisor",
            "Regular meetings with colleagues",
            "No consultation",
            "Only formal supervision"
          ],
          correctAnswer: 1,
          explanation: "Peer consultation involves regular meetings with colleagues for case discussion and support."
        },
        {
          id: 6,
          question: "Why self-care ethical imperative?",
          options: [
            "Only personal choice",
            "Prevents impairment and protects clients",
            "Unimportant",
            "Only for weak people"
          ],
          correctAnswer: 1,
          explanation: "Self-care is ethical because it prevents professional impairment and protects clients."
        },
        {
          id: 7,
          question: "What is burnout?",
          options: [
            "Normal tiredness",
            "Emotional exhaustion from work stress",
            "Brief stress",
            "Motivation"
          ],
          correctAnswer: 1,
          explanation: "Burnout is emotional exhaustion and decreased effectiveness from chronic work stress."
        },
        {
          id: 8,
          question: "What is vicarious trauma?",
          options: [
            "Only client trauma",
            "Impact from hearing others' trauma",
            "No impact",
            "Only physical trauma"
          ],
          correctAnswer: 1,
          explanation: "Vicarious trauma is the impact on clinicians from working with trauma survivors."
        },
        {
          id: 9,
          question: "What is compassion fatigue?",
          options: [
            "No compassion",
            "Emotional exhaustion from helping",
            "Too much empathy",
            "Not caring"
          ],
          correctAnswer: 1,
          explanation: "Compassion fatigue is emotional exhaustion from continual helping of others in distress."
        },
        {
          id: 10,
          question: "Benefits of personal therapy for clinicians?",
          options: [
            "No benefits",
            "Personal growth and understanding client perspective",
            "Only if mandated",
            "Weakness"
          ],
          correctAnswer: 1,
          explanation: "Personal therapy offers growth, addresses countertransference, and provides client perspective."
        },
        {
          id: 11,
          question: "What are collegial relationships?",
          options: [
            "Only competition",
            "Supportive professional networks",
            "No relationships",
            "Only social"
          ],
          correctAnswer: 1,
          explanation: "Collegial relationships are supportive professional networks with peers."
        },
        {
          id: 12,
          question: "What is interdisciplinary collaboration?",
          options: [
            "Only psychology",
            "Working with other professionals",
            "Isolated work",
            "Only same field"
          ],
          correctAnswer: 1,
          explanation: "Interdisciplinary collaboration involves working effectively with professionals from other fields."
        },
        {
          id: 13,
          question: "What is career planning?",
          options: [
            "No planning",
            "Setting professional goals and plans",
            "Only job search",
            "Only starting out"
          ],
          correctAnswer: 1,
          explanation: "Career planning involves setting professional goals and development plans."
        },
        {
          id: 14,
          question: "What are specialization paths?",
          options: [
            "Only clinical work",
            "Clinical, research, teaching, administration",
            "No specializations",
            "Only one path"
          ],
          correctAnswer: 1,
          explanation: "Specialization paths include clinical work, research, teaching, administration, and others."
        },
        {
          id: 15,
          question: "Why physical health important?",
          options: [
            "Unrelated to work",
            "Affects professional functioning",
            "Only personal matter",
            "Unimportant"
          ],
          correctAnswer: 1,
          explanation: "Physical health affects energy, mood, and professional effectiveness."
        },
        {
          id: 16,
          question: "What is work-life balance?",
          options: [
            "Only work",
            "Healthy boundaries between work and personal life",
            "No balance needed",
            "Only personal life"
          ],
          correctAnswer: 1,
          explanation: "Work-life balance maintains healthy boundaries between professional and personal life."
        },
        {
          id: 17,
          question: "Signs of professional impairment?",
          options: [
            "Perfect functioning",
            "Decreased effectiveness, ethical lapses",
            "Always effective",
            "No signs"
          ],
          correctAnswer: 1,
          explanation: "Impairment signs include decreased effectiveness and ethical or professional lapses."
        },
        {
          id: 18,
          question: "What is self-monitoring?",
          options: [
            "Never checking",
            "Regular check-ins about functioning",
            "Only others monitor",
            "Only at reviews"
          ],
          correctAnswer: 1,
          explanation: "Self-monitoring involves regular personal check-ins about professional functioning."
        },
        {
          id: 19,
          question: "Why seek help early for difficulties?",
          options: [
            "Wait until crisis",
            "Prevent more serious problems",
            "Never seek help",
            "Only if required"
          ],
          correctAnswer: 1,
          explanation: "Seeking help early prevents minor difficulties from becoming serious problems."
        },
        {
          id: 20,
          question: "What is legacy planning?",
          options: [
            "Only retirement",
            "Considering long-term professional contributions",
            "No planning",
            "Only financial"
          ],
          correctAnswer: 1,
          explanation: "Legacy planning involves considering your long-term professional contributions and impact."
        }
      ]
    }
  ],
  
  // 3. FINAL EXAM (40 Questions - 6-7 questions from each module)
  finalExam: {
    id: "clinical-psychology-diploma-exam",
    title: "Clinical Psychology Diploma Final Exam",
    description: "Comprehensive exam covering all six diploma modules. Pass with 70% or higher to earn your diploma.",
    passingScore: 70,
    questions: [
      // Module 1 Questions (7)
      {
        id: 1,
        question: "What is the purpose of clinical assessment?",
        options: [
          "Label people",
          "Systematically gather information to understand and plan treatment",
          "Quickly solve problems",
          "Make people feel analyzed"
        ],
        correctAnswer: 1,
        explanation: "Clinical assessment systematically gathers information to understand functioning and plan treatment.",
        module: 1
      },
      {
        id: 2,
        question: "What is a clinical interview?",
        options: [
          "Casual conversation",
          "Structured, purposeful conversation",
          "Social chat",
          "Therapy session"
        ],
        correctAnswer: 1,
        explanation: "A clinical interview is structured and purposeful, different from casual conversation.",
        module: 1
      },
      {
        id: 3,
        question: "What does diagnosis guide?",
        options: [
          "Judgment of character",
          "Treatment planning",
          "Social exclusion",
          "Personal opinions"
        ],
        correctAnswer: 1,
        explanation: "Diagnosis guides treatment planning and facilitates professional communication.",
        module: 1
      },
      {
        id: 4,
        question: "What is the biopsychosocial model?",
        options: [
          "Only biological factors",
          "Biological, psychological, and social factors",
          "Only social factors",
          "Only psychological factors"
        ],
        correctAnswer: 1,
        explanation: "Biopsychosocial model considers biological, psychological, and social factors.",
        module: 1
      },
      {
        id: 5,
        question: "What are symptom checklists?",
        options: [
          "Complete diagnoses",
          "Quick screens for specific concerns",
          "Treatment plans",
          "Personality tests"
        ],
        correctAnswer: 1,
        explanation: "Symptom checklists are quick screening tools for specific concerns.",
        module: 1
      },
      {
        id: 6,
        question: "How does culture affect assessment?",
        options: [
          "No effect",
          "Affects symptom expression and help-seeking",
          "Only affects language",
          "Unimportant factor"
        ],
        correctAnswer: 1,
        explanation: "Culture affects how symptoms are expressed and whether people seek help.",
        module: 1
      },
      {
        id: 7,
        question: "What is informed consent in assessment?",
        options: [
          "Secret testing",
          "Explaining purpose, procedures, and limits",
          "No explanation needed",
          "Assumption of agreement"
        ],
        correctAnswer: 1,
        explanation: "Informed consent means explaining assessment purpose, procedures, and limits.",
        module: 1
      },
      
      // Module 2 Questions (7)
      {
        id: 8,
        question: "What are evidence-based interventions?",
        options: [
          "Whatever feels right",
          "Approaches supported by scientific research",
          "Traditional methods only",
          "Newest trends"
        ],
        correctAnswer: 1,
        explanation: "Evidence-based interventions have scientific research demonstrating effectiveness.",
        module: 2
      },
      {
        id: 9,
        question: "What does CBT focus on?",
        options: [
          "Only past experiences",
          "Connections between thoughts, feelings, behaviors",
          "Only unconscious processes",
          "Only family systems"
        ],
        correctAnswer: 1,
        explanation: "CBT focuses on connections between thoughts, feelings, and behaviors.",
        module: 2
      },
      {
        id: 10,
        question: "What is cognitive restructuring?",
        options: [
          "Ignoring thoughts",
          "Identifying and changing unhelpful thoughts",
          "Only accepting thoughts",
          "Suppressing thoughts"
        ],
        correctAnswer: 1,
        explanation: "Cognitive restructuring involves identifying and challenging unhelpful thinking.",
        module: 2
      },
      {
        id: 11,
        question: "What is behavioral activation?",
        options: [
          "Reducing activity",
          "Increasing engagement in rewarding activities",
          "Only talking",
          "Only resting"
        ],
        correctAnswer: 1,
        explanation: "Behavioral activation increases rewarding activities to improve mood.",
        module: 2
      },
      {
        id: 12,
        question: "What is psychoeducation?",
        options: [
          "Keeping clients uninformed",
          "Teaching about condition and treatment",
          "Only giving advice",
          "Only listening"
        ],
        correctAnswer: 1,
        explanation: "Psychoeducation involves teaching clients about their condition and treatment.",
        module: 2
      },
      {
        id: 13,
        question: "What is collaborative goal setting?",
        options: [
          "Therapist decides goals",
          "Client and therapist work together on goals",
          "Family sets goals",
          "No goals needed"
        ],
        correctAnswer: 1,
        explanation: "Collaborative goal setting involves client and therapist working together.",
        module: 2
      },
      {
        id: 14,
        question: "What is competence in intervention?",
        options: [
          "Using any intervention",
          "Only using interventions with proper training",
          "Guessing what to do",
          "Copying others"
        ],
        correctAnswer: 1,
        explanation: "Competence means only delivering interventions you're properly trained to provide.",
        module: 2
      },
      
      // Module 3 Questions (6)
      {
        id: 15,
        question: "What is treatment planning?",
        options: [
          "Fixed recipe",
          "Collaborative roadmap for therapy",
          "Clinician-only decision",
          "Standard protocol for all"
        ],
        correctAnswer: 1,
        explanation: "Treatment planning is collaborative process creating therapy roadmap.",
        module: 3
      },
      {
        id: 16,
        question: "What does SMART stand for?",
        options: [
          "Simple, Meaningful, Actionable, Realistic, Timely",
          "Specific, Measurable, Achievable, Relevant, Time-bound",
          "Strategic, Manageable, Appropriate, Reasonable, Targeted",
          "Significant, Meaningful, Achievable, Realistic, Timely"
        ],
        correctAnswer: 1,
        explanation: "SMART goals are Specific, Measurable, Achievable, Relevant, Time-bound.",
        module: 3
      },
      {
        id: 17,
        question: "What is progress monitoring?",
        options: [
          "Only at end",
          "Regularly checking if interventions work",
          "Assuming progress",
          "Never checking"
        ],
        correctAnswer: 1,
        explanation: "Progress monitoring involves regularly checking whether interventions help.",
        module: 3
      },
      {
        id: 18,
        question: "When consider treatment adjustments?",
        options: [
          "Never change",
          "Lack of progress after reasonable time",
          "Always change weekly",
          "Only client requests"
        ],
        correctAnswer: 1,
        explanation: "Consider adjustments when there's lack of progress after reasonable time.",
        module: 3
      },
      {
        id: 19,
        question: "What is purpose of documentation?",
        options: [
          "Only billing",
          "Communication and continuity of care",
          "Secret records",
          "Only for supervisors"
        ],
        correctAnswer: 1,
        explanation: "Documentation serves communication, continuity, legal, and quality purposes.",
        module: 3
      },
      {
        id: 20,
        question: "What is termination planning?",
        options: [
          "Only at end",
          "Planning conclusion from beginning",
          "Surprise ending",
          "Never ending"
        ],
        correctAnswer: 1,
        explanation: "Termination planning considers therapy conclusion from beginning.",
        module: 3
      },
      
      // Module 4 Questions (6)
      {
        id: 21,
        question: "What is key with children and adolescents?",
        options: [
          "Same as adults",
          "Matching developmental level",
          "Only talking",
          "Ignoring development"
        ],
        correctAnswer: 1,
        explanation: "Treatment must match child's cognitive and emotional developmental level.",
        module: 4
      },
      {
        id: 22,
        question: "What is lifespan perspective with older adults?",
        options: [
          "Only current issues",
          "Considering entire life history",
          "Only aging problems",
          "Ignoring past"
        ],
        correctAnswer: 1,
        explanation: "Lifespan perspective considers person's entire life history and wisdom.",
        module: 4
      },
      {
        id: 23,
        question: "What is first with trauma survivors?",
        options: [
          "Trauma processing",
          "Establishing safety",
          "Immediate exposure",
          "Only talking"
        ],
        correctAnswer: 1,
        explanation: "Establishing safety comes first in trauma work.",
        module: 4
      },
      {
        id: 24,
        question: "What is cultural humility?",
        options: [
          "Knowing everything",
          "Ongoing process of learning",
          "Ignoring culture",
          "Assuming sameness"
        ],
        correctAnswer: 1,
        explanation: "Cultural humility is ongoing process of learning about different cultures.",
        module: 4
      },
      {
        id: 25,
        question: "What is systems perspective with families?",
        options: [
          "Only individual focus",
          "Viewing problems in relationship context",
          "Ignoring relationships",
          "Only one person's view"
        ],
        correctAnswer: 1,
        explanation: "Systems perspective views problems within relationship context.",
        module: 4
      },
      {
        id: 26,
        question: "What is multipartiality?",
        options: [
          "Taking sides",
          "Being fair to all members",
          "Ignoring some",
          "Only one perspective"
        ],
        correctAnswer: 1,
        explanation: "Multipartiality means being fair to all family members without taking sides.",
        module: 4
      },
      
      // Module 5 Questions (7)
      {
        id: 27,
        question: "What is beneficence?",
        options: [
          "Doing harm",
          "Doing good for clients",
          "Being neutral",
          "Avoiding action"
        ],
        correctAnswer: 1,
        explanation: "Beneficence means doing good and promoting client welfare.",
        module: 5
      },
      {
        id: 28,
        question: "What is nonmaleficence?",
        options: [
          "Causing harm",
          "Doing no harm",
          "Risking harm",
          "Ignoring harm"
        ],
        correctAnswer: 1,
        explanation: "Nonmaleficence means avoiding harm to clients.",
        module: 5
      },
      {
        id: 29,
        question: "What is informed consent?",
        options: [
          "Assumed agreement",
          "Understanding treatment before consenting",
          "No explanation needed",
          "Only verbal agreement"
        ],
        correctAnswer: 1,
        explanation: "Informed consent means clients understand treatment before agreeing.",
        module: 5
      },
      {
        id: 30,
        question: "What is mandated reporting?",
        options: [
          "Optional reporting",
          "Legal requirement to report abuse",
          "Never reporting",
          "Only serious crimes"
        ],
        correctAnswer: 1,
        explanation: "Mandated reporting is legal requirement to report suspected abuse.",
        module: 5
      },
      {
        id: 31,
        question: "What is duty to warn/protect?",
        options: [
          "No duty",
          "Obligation when client threatens others",
          "Only for police",
          "Optional action"
        ],
        correctAnswer: 1,
        explanation: "Duty to warn/protect is legal obligation when client threatens others.",
        module: 5
      },
      {
        id: 32,
        question: "What are confidentiality limits?",
        options: [
          "No limits",
          "Danger to self/others, abuse reporting",
          "Only client permission",
          "Any concern"
        ],
        correctAnswer: 1,
        explanation: "Confidentiality limits include danger to self/others and abuse reporting.",
        module: 5
      },
      {
        id: 33,
        question: "What is cultural competence?",
        options: [
          "Ignoring culture",
          "Services sensitive to cultural differences",
          "Only Western approaches",
          "Assuming sameness"
        ],
        correctAnswer: 1,
        explanation: "Cultural competence means services sensitive to cultural differences.",
        module: 5
      },
      
      // Module 6 Questions (7)
      {
        id: 34,
        question: "Why lifelong learning important?",
        options: [
          "Knowledge static",
          "Clinical knowledge constantly evolves",
          "Once trained, done",
          "Only beginners learn"
        ],
        correctAnswer: 1,
        explanation: "Clinical knowledge constantly evolves, requiring lifelong learning.",
        module: 6
      },
      {
        id: 35,
        question: "Why self-care ethical imperative?",
        options: [
          "Only personal choice",
          "Prevents impairment and protects clients",
          "Unimportant",
          "Only for weak people"
        ],
        correctAnswer: 1,
        explanation: "Self-care prevents professional impairment and protects clients.",
        module: 6
      },
      {
        id: 36,
        question: "What is burnout?",
        options: [
          "Normal tiredness",
          "Emotional exhaustion from work stress",
          "Brief stress",
          "Motivation"
        ],
        correctAnswer: 1,
        explanation: "Burnout is emotional exhaustion from chronic work stress.",
        module: 6
      },
      {
        id: 37,
        question: "Benefits of personal therapy for clinicians?",
        options: [
          "No benefits",
          "Personal growth and understanding client perspective",
          "Only if mandated",
          "Weakness"
        ],
        correctAnswer: 1,
        explanation: "Personal therapy offers growth and client perspective understanding.",
        module: 6
      },
      {
        id: 38,
        question: "What is peer consultation?",
        options: [
          "Only supervisor",
          "Regular meetings with colleagues",
          "No consultation",
          "Only formal supervision"
        ],
        correctAnswer: 1,
        explanation: "Peer consultation involves regular meetings with colleagues.",
        module: 6
      },
      {
        id: 39,
        question: "What is work-life balance?",
        options: [
          "Only work",
          "Healthy boundaries between work and personal life",
          "No balance needed",
          "Only personal life"
        ],
        correctAnswer: 1,
        explanation: "Work-life balance maintains healthy work-personal life boundaries.",
        module: 6
      },
      {
        id: 40,
        question: "Signs of professional impairment?",
        options: [
          "Perfect functioning",
          "Decreased effectiveness, ethical lapses",
          "Always effective",
          "No signs"
        ],
        correctAnswer: 1,
        explanation: "Impairment signs include decreased effectiveness and ethical lapses.",
        module: 6
      }
    ]
  }
};
