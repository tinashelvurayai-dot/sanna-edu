// Athletic Development (Diploma) Course Content
// Advanced course building on Youth Sports Coaching Certificate
// All content is text-only with integrated quizzes

export const athleticDevelopmentDiploma = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "athletic-development-diploma",
  title: "Athletic Development (Diploma)",
  description: "Advanced training in athletic development for youth and adolescent athletes. This diploma builds on coaching fundamentals to teach periodization, advanced skill development, performance analysis, and long-term athlete development strategies.",
  duration: "8 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  prerequisite: "Youth Sports Coaching Certificate",
  icon: "🏆",
  badge: "Diploma",
  
  // 2. MODULE ARCHITECTURE (6 Advanced Modules + Exam)
  modules: [
    {
      id: 1,
      title: "Long-Term Athlete Development Framework",
      content: `# Module 1: Long-Term Athlete Development Framework

## Introduction to LTAD
Welcome to the Athletic Development Diploma. This first module introduces the Long-Term Athlete Development framework, a comprehensive approach to developing athletes from childhood through adulthood.

## The LTAD Philosophy
Long-Term Athlete Development is not just a training program - it's a philosophy that places the athlete's needs at the center of all decisions. The framework recognizes that athletes develop at different rates and need appropriate training at each stage of growth.

**Key principles of LTAD:**
- Development over winning in early stages
- Age-appropriate training and competition
- Physical literacy as foundation
- Holistic development (physical, mental, social)
- Periodization throughout the year
- Multi-sport participation in early years

## The Seven Stages of LTAD
The complete framework consists of seven stages:

**1. Active Start (0-6 years):** Focus on fun, fundamental movement skills
**2. FUNdamentals (6-9 years):** Basic movement skills in playful environments
**3. Learn to Train (9-12 years):** Fundamental sports skills, basic tactics
**4. Train to Train (12-16 years):** Building the engine - aerobic and strength development
**5. Train to Compete (16-23 years):** Event/sport specific preparation
**6. Train to Win (18+ years):** Maximum performance at major competitions
**7. Active for Life (any age):** Transition to lifelong physical activity

As a diploma-level coach, you'll primarily work with stages 3-5.

## Windows of Optimal Trainability
One of LTAD's key concepts is "windows of optimal trainability" - periods when athletes are especially responsive to specific types of training.

**Speed windows:** Boys 7-9 & 13-16, Girls 6-8 & 11-13
**Skill windows:** Both genders 9-12
**Strength windows:** After peak height velocity (growth spurt)
**Stamina windows:** Boys 12-16, Girls 11-15
**Suppleness windows:** Throughout childhood

Missing these windows can limit an athlete's ultimate potential.

## Physical Literacy Development
Physical literacy is the foundation of LTAD - developing competence, confidence, and motivation to be active for life.

**Components of physical literacy:**
- Fundamental movement skills (run, jump, throw, catch, strike)
- Fundamental sports skills (sport-specific applications)
- Movement confidence and competence
- Knowledge and understanding of movement
- Motivation and enjoyment of physical activity

Athletes with strong physical literacy adapt better to different sports and activities.

## Implementing LTAD in Your Program
Practical application of LTAD principles:

**Assessment:** Regularly evaluate athletes' physical literacy
**Planning:** Create developmentally appropriate programs
**Monitoring:** Track growth, maturation, and progress
**Adjustment:** Modify programs based on individual responses
**Communication:** Educate athletes and parents about the process

Remember: LTAD is about the journey, not just the destination.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the central philosophy of Long-Term Athlete Development?",
          options: ["Winning at all costs", "Placing athlete's needs at the center", "Specializing early", "Professional-level training for youth"],
          correctAnswer: 1,
          explanation: "LTAD places the athlete's holistic development needs at the center of all training decisions."
        },
        {
          id: 2,
          question: "Which LTAD stage focuses on 'building the engine' with aerobic and strength development?",
          options: ["Active Start", "Train to Train", "Train to Compete", "Active for Life"],
          correctAnswer: 1,
          explanation: "The Train to Train stage (ages 12-16) focuses on developing aerobic capacity and strength foundations."
        },
        {
          id: 3,
          question: "What are 'windows of optimal trainability'?",
          options: ["Times when training is easiest", "Periods when athletes are especially responsive to specific training", "Vacation periods for athletes", "Times to avoid training"],
          correctAnswer: 1,
          explanation: "These are developmental periods when athletes show heightened responsiveness to specific types of training."
        },
        {
          id: 4,
          question: "What is physical literacy?",
          options: ["Reading sports books", "Competence, confidence and motivation to be active for life", "Only professional sports skills", "Winning multiple sports"],
          correctAnswer: 1,
          explanation: "Physical literacy encompasses movement competence, confidence, knowledge, and motivation for lifelong activity."
        },
        {
          id: 5,
          question: "Which age range typically represents the 'Learn to Train' stage?",
          options: ["0-6 years", "6-9 years", "9-12 years", "12-16 years"],
          correctAnswer: 2,
          explanation: "Learn to Train stage is approximately ages 9-12, focusing on fundamental sports skills."
        },
        {
          id: 6,
          question: "What should be prioritized over winning in early LTAD stages?",
          options: ["Professional contracts", "Holistic development", "Only competition results", "Parent expectations"],
          correctAnswer: 1,
          explanation: "Holistic athlete development takes priority over winning in early stages of LTAD."
        },
        {
          id: 7,
          question: "What is a key benefit of multi-sport participation in early years?",
          options: ["Narrow specialization", "Developing diverse movement patterns", "Only focusing on one sport", "Reducing athletic potential"],
          correctAnswer: 1,
          explanation: "Multi-sport participation helps develop diverse movement patterns and reduces burnout."
        },
        {
          id: 8,
          question: "When is the typical speed window for girls?",
          options: ["7-9 & 13-16 years", "6-8 & 11-13 years", "Only after 18 years", "No specific windows"],
          correctAnswer: 1,
          explanation: "Girls typically have speed windows at ages 6-8 and 11-13."
        },
        {
          id: 9,
          question: "What foundation does physical literacy provide?",
          options: ["Only for professional sports", "For adapting to different sports and activities", "Only for academic success", "For avoiding all sports"],
          correctAnswer: 1,
          explanation: "Strong physical literacy helps athletes adapt successfully to different sports and physical activities."
        },
        {
          id: 10,
          question: "What should you regularly do when implementing LTAD?",
          options: ["Only focus on competition", "Assess athletes' physical literacy", "Ignore individual differences", "Train everyone the same"],
          correctAnswer: 1,
          explanation: "Regular assessment of physical literacy helps tailor developmentally appropriate programs."
        },
        {
          id: 11,
          question: "What does the 'Train to Compete' stage focus on?",
          options: ["Basic movement skills", "Event/sport specific preparation", "Only having fun", "Retirement planning"],
          correctAnswer: 1,
          explanation: "Train to Compete (ages 16-23) focuses on sport-specific preparation for higher level competition."
        },
        {
          id: 12,
          question: "Why is periodization important in LTAD?",
          options: ["It makes training more complicated", "It structures training throughout the year for optimal development", "It's only for professionals", "It reduces training time"],
          correctAnswer: 1,
          explanation: "Periodization provides structured training variation throughout the year to optimize development and prevent burnout."
        },
        {
          id: 13,
          question: "What is the final stage of LTAD?",
          options: ["Train to Win", "Active for Life", "Professional Only", "Retirement"],
          correctAnswer: 1,
          explanation: "Active for Life represents the transition to and maintenance of lifelong physical activity."
        },
        {
          id: 14,
          question: "What should communication focus on in LTAD implementation?",
          options: ["Only winning statistics", "Educating about the development process", "Criticizing other programs", "Keeping secrets from athletes"],
          correctAnswer: 1,
          explanation: "Educating athletes and parents about the LTAD process helps manage expectations and build support."
        },
        {
          id: 15,
          question: "What is a fundamental movement skill?",
          options: ["Professional technique only", "Basic patterns like running and jumping", "Only competition skills", "Skills for one sport only"],
          correctAnswer: 1,
          explanation: "Fundamental movement skills are basic patterns like running, jumping, throwing that form the foundation for all sports."
        },
        {
          id: 16,
          question: "When should strength training windows typically begin?",
          options: ["At age 5", "After peak height velocity", "Only for adults", "Never for youth"],
          correctAnswer: 1,
          explanation: "Significant strength training typically begins after peak height velocity (the adolescent growth spurt)."
        },
        {
          id: 17,
          question: "What does holistic development include?",
          options: ["Only physical skills", "Physical, mental, and social development", "Only competition results", "Parent satisfaction only"],
          correctAnswer: 1,
          explanation: "Holistic development addresses all aspects: physical, mental/psychological, and social development."
        },
        {
          id: 18,
          question: "What is the purpose of monitoring in LTAD?",
          options: ["To punish athletes", "To track growth, maturation and progress", "Only to compare athletes", "To eliminate weak athletes"],
          correctAnswer: 1,
          explanation: "Monitoring helps track individual development and adjust programs accordingly."
        },
        {
          id: 19,
          question: "What stage comes after 'Learn to Train'?",
          options: ["Active Start", "Train to Train", "Train to Win", "Active for Life"],
          correctAnswer: 1,
          explanation: "Train to Train (ages 12-16) follows Learn to Train in the LTAD progression."
        },
        {
          id: 20,
          question: "What is LTAD ultimately about?",
          options: ["Only immediate results", "The athlete's journey and long-term development", "Making professional athletes", "Parent satisfaction"],
          correctAnswer: 1,
          explanation: "LTAD focuses on the complete athletic journey and long-term development rather than just short-term results."
        }
      ]
    },
    {
      id: 2,
      title: "Periodization and Annual Planning",
      content: `# Module 2: Periodization and Annual Planning

## Introduction to Periodization
Periodization is the systematic planning of athletic training. It involves progressive cycling of various aspects of a training program during a specific period to maximize performance while minimizing injury and burnout.

## The Purpose of Periodization
Why do we periodize training for developing athletes?

**Primary goals:**
- Peak performance at important competitions
- Prevent overtraining and burnout
- Manage fatigue and recovery
- Ensure long-term development
- Maintain motivation throughout the year
- Reduce injury risk

Periodization is especially important for youth athletes who are still growing and developing.

## Annual Plan Structure
A comprehensive annual plan includes several levels of planning:

**Macrocycle:** The entire annual plan (12 months)
**Mesocycle:** Training phases within the year (2-6 weeks each)
**Microcycle:** Weekly training structure (7-10 days)

For youth athletes, the annual plan should align with their school calendar and account for growth and development.

## Training Periods and Phases
Traditional periodization includes these phases:

**Preparation Period:**
- General preparation: Building fitness foundation
- Specific preparation: Sport-specific training

**Competition Period:**
- Pre-competition: Fine-tuning for competition
- Main competition: Peak performance
- Transition between competitions: Active recovery

**Transition Period:**
- Active rest and recovery
- Cross-training and alternative activities
- Psychological break from main sport

## Developing Youth Annual Plans
When creating annual plans for youth athletes:

**Consider:**
- School schedule and exams
- Multiple sport participation
- Growth and maturation status
- Competition schedule (avoid over-competition)
- Family vacations and holidays

**General guidelines:**
- Younger athletes: More general preparation, less competition
- Adolescent athletes: More specific preparation, structured competition
- Always include adequate recovery periods

## Load Management and Progression
Proper load management prevents overtraining:

**Training load components:**
- Volume: How much training (time, distance, repetitions)
- Intensity: How hard the training (percentage of max)
- Frequency: How often training occurs

**Progression principles:**
- Increase volume before intensity
- Change only one variable at a time
- Follow hard days with easier days
- Include recovery weeks regularly

**Rule of thumb:** Increase training load by no more than 10% per week.

## Monitoring and Adjustment
Periodization plans must be flexible:

**Monitoring tools:**
- Training logs and diaries
- Performance testing
- Subjective wellness questionnaires
- Growth and maturation tracking
- Skill assessment

**Adjustment triggers:**
- Illness or injury
- Rapid growth periods
- Academic stress
- Family situations
- Plateaus in performance

Remember: The plan serves the athlete, not the other way around.

## Integrating Multiple Sports
For multi-sport athletes, coordinate periodization:

**Strategies:**
- Communicate with other coaches
- Identify primary and secondary sports
- Schedule complementary training
- Ensure adequate recovery between sports
- Plan transition periods between seasons

The goal is complementary development, not conflicting demands.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the primary purpose of periodization?",
          options: ["Make training more complicated", "Maximize performance while minimizing injury and burnout", "Only for professional athletes", "To eliminate all rest periods"],
          correctAnswer: 1,
          explanation: "Periodization systematically plans training to optimize performance while preventing overtraining and injury."
        },
        {
          id: 2,
          question: "What is a macrocycle in periodization?",
          options: ["Daily training session", "Weekly training structure", "The entire annual plan", "Only competition periods"],
          correctAnswer: 2,
          explanation: "A macrocycle refers to the complete annual training plan, typically 12 months."
        },
        {
          id: 3,
          question: "Which period includes active rest and recovery?",
          options: ["Preparation period", "Competition period", "Transition period", "Only pre-season"],
          correctAnswer: 2,
          explanation: "The transition period focuses on active recovery, cross-training, and psychological breaks."
        },
        {
          id: 4,
          question: "What should you consider when planning youth annual plans?",
          options: ["Only competition schedule", "School schedule, growth, multiple sports", "Professional athlete schedules", "Only parent requests"],
          correctAnswer: 1,
          explanation: "Youth plans must consider school, growth, multi-sport participation, and family commitments."
        },
        {
          id: 5,
          question: "What are the three components of training load?",
          options: ["Only intensity", "Volume, intensity, frequency", "Only volume", "Coach's opinion only"],
          correctAnswer: 1,
          explanation: "Training load consists of volume (how much), intensity (how hard), and frequency (how often)."
        },
        {
          id: 6,
          question: "What is a safe weekly increase in training load?",
          options: ["50% per week", "No increases allowed", "No more than 10% per week", "100% if athletes are talented"],
          correctAnswer: 2,
          explanation: "The 10% rule helps prevent overuse injuries by gradually increasing training demands."
        },
        {
          id: 7,
          question: "What should precede intensity increases in progression?",
          options: ["Volume increases", "Decreasing all training", "Only competition", "Adding more sports"],
          correctAnswer: 0,
          explanation: "Increase training volume before increasing intensity to build a solid foundation."
        },
        {
          id: 8,
          question: "What is a mesocycle?",
          options: ["Daily plan", "Training phases of 2-6 weeks", "Only competition weeks", "Yearly plan"],
          correctAnswer: 1,
          explanation: "Mesocycles are training phases within the annual plan, typically lasting 2-6 weeks."
        },
        {
          id: 9,
          question: "Why is periodization important for youth athletes?",
          options: ["It's not important for youth", "To manage growth, prevent burnout, ensure development", "Only to win more games", "To specialize early"],
          correctAnswer: 1,
          explanation: "Periodization helps manage the unique challenges of growing athletes while ensuring long-term development."
        },
        {
          id: 10,
          question: "What should you do during the general preparation phase?",
          options: ["Only compete", "Build fitness foundation with general training", "Take complete rest", "Only practice specific skills"],
          correctAnswer: 1,
          explanation: "General preparation focuses on building overall fitness and athletic foundations."
        },
        {
          id: 11,
          question: "What monitoring tool involves athlete self-reporting?",
          options: ["Only coach's observation", "Subjective wellness questionnaires", "Parent opinions only", "Social media feedback"],
          correctAnswer: 1,
          explanation: "Wellness questionnaires help monitor fatigue, stress, and recovery from the athlete's perspective."
        },
        {
          id: 12,
          question: "What is a microcycle?",
          options: ["Yearly plan", "Monthly plan", "Weekly training structure", "Only competition days"],
          correctAnswer: 2,
          explanation: "A microcycle is typically a 7-10 day training structure, often aligned with a weekly schedule."
        },
        {
          id: 13,
          question: "When should you adjust a periodization plan?",
          options: ["Never - stick to the plan", "When athletes experience illness, growth, or stress", "Only at year end", "When parents complain"],
          correctAnswer: 1,
          explanation: "Plans should be adjusted based on individual responses, growth, illness, and other factors."
        },
        {
          id: 14,
          question: "What should follow hard training days?",
          options: ["Harder days", "Easier days for recovery", "Complete rest only", "More competitions"],
          correctAnswer: 1,
          explanation: "Hard training days should be followed by easier days to allow recovery and adaptation."
        },
        {
          id: 15,
          question: "How should you integrate multiple sports in periodization?",
          options: ["Ignore other sports", "Communicate with other coaches for complementary planning", "Force athletes to choose one sport", "Schedule conflicts intentionally"],
          correctAnswer: 1,
          explanation: "Coordinate with other coaches to ensure complementary rather than conflicting training demands."
        },
        {
          id: 16,
          question: "What is included in the competition period?",
          options: ["Only competition days", "Pre-competition, main competition, transition between competitions", "Only rest", "Only skill work"],
          correctAnswer: 1,
          explanation: "The competition period includes preparation for, execution of, and recovery between competitions."
        },
        {
          id: 17,
          question: "Why include recovery weeks in periodization?",
          options: ["Waste time", "Allow physiological adaptation and prevent overtraining", "Punish athletes", "Only when injured"],
          correctAnswer: 1,
          explanation: "Recovery weeks allow the body to adapt to training stress and prevent overtraining syndrome."
        },
        {
          id: 18,
          question: "What should periodization align with for school athletes?",
          options: ["Professional seasons", "School calendar and exam periods", "Only summer months", "Parent work schedules"],
          correctAnswer: 1,
          explanation: "School athletes' training should align with academic calendars and consider exam stress."
        },
        {
          id: 19,
          question: "What is the rule for changing training variables?",
          options: ["Change everything at once", "Change only one variable at a time", "Never change anything", "Change based on weather only"],
          correctAnswer: 1,
          explanation: "Change only one training variable at a time to monitor effects and prevent overload."
        },
        {
          id: 20,
          question: "What does the plan serve in periodization?",
          options: ["The coach's ego", "The athlete's development", "Parent expectations", "League requirements only"],
          correctAnswer: 1,
          explanation: "The training plan should serve the athlete's needs and development, not rigidly followed regardless of circumstances."
        }
      ]
    },
    {
      id: 3,
      title: "Advanced Skill Acquisition",
      content: `# Module 3: Advanced Skill Acquisition

## Beyond Basic Skill Teaching
This module explores advanced methods for developing high-level sports skills in developing athletes. You'll learn how to progress from basic competence to advanced mastery.

## Stages of Skill Acquisition
Understanding how athletes learn skills helps you design better training:

**1. Cognitive Stage (Beginner):**
- Lots of thinking and conscious effort
- Many errors, inconsistent performance
- Needs clear demonstrations and simple feedback
- Focus on understanding what to do

**2. Associative Stage (Intermediate):**
- Fewer, more consistent errors
- Movements becoming smoother
- Developing kinesthetic awareness
- Needs specific, technical feedback

**3. Autonomous Stage (Advanced):**
- Skills become automatic
- Minimal conscious thought required
- Can perform under pressure
- Needs refinement and tactical feedback

Most youth athletes operate between stages 1 and 2.

## Constraints-Led Approach
The constraints-led approach suggests that skills emerge from interactions between:
- The athlete (individual constraints)
- The environment (environmental constraints)
- The task (task constraints)

**Manipulating constraints to enhance learning:**
- Change equipment size/weight
- Modify playing areas
- Adjust rules
- Vary number of players
- Alter scoring systems

This approach encourages problem-solving and adaptability.

## Differential Learning
Differential learning involves introducing variability rather than perfect repetition:

**Principles:**
- Each repetition should be slightly different
- Encourages exploration and self-organization
- Develops adaptable movement solutions
- Particularly effective for open skills (changing environments)

**Examples:**
- Varying stance or grip
- Changing ball characteristics
- Altering movement tempo
- Modifying target locations

## Decision-Making Development
Advanced skill includes decision-making, not just movement execution:

**Training decision-making:**
- Small-sided games with tactical problems
- Video analysis of game situations
- Questioning athletes about options
- Creating game-like scenarios in practice
- Gradually reducing coach guidance

**Progression:** From guided discovery to independent problem-solving.

## Skill Transfer and Integration
How skills transfer between contexts and integrate with other skills:

**Positive transfer:** Skills that help learning other skills
**Negative transfer:** Skills that interfere with other skills
**Zero transfer:** No relationship between skills

**Maximizing positive transfer:**
- Identify common movement patterns
- Use similar progressions
- Highlight similarities and differences
- Practice in varied contexts

## Advanced Feedback Strategies
Moving beyond basic correction to sophisticated feedback:

**Types of feedback:**
- Knowledge of results (outcome feedback)
- Knowledge of performance (technique feedback)
- Augmented feedback (from coach or technology)
- Intrinsic feedback (athlete's own senses)

**Advanced feedback principles:**
- Use bandwidth feedback (only when outside acceptable range)
- Employ summary feedback (after several attempts)
- Utilize fading feedback (gradually reduce frequency)
- Encourage self-assessment and peer feedback

## Developing Sport Intelligence
Sport intelligence combines technical skill with tactical understanding:

**Components:**
- Pattern recognition (reading the game)
- Anticipation and prediction
- Decision-making under pressure
- Creative problem-solving
- Game sense and awareness

**Development methods:**
- Video analysis with guided questioning
- Tactical games and scenarios
- Decision-making drills under pressure
- Reflection and discussion sessions
- Mentorship from experienced athletes

Skillful athletes are thinking athletes.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What characterizes the cognitive stage of skill acquisition?",
          options: ["Automatic performance", "Lots of thinking and conscious effort", "Minimal errors", "No coach guidance needed"],
          correctAnswer: 1,
          explanation: "Beginners in the cognitive stage think consciously about each movement and make many errors."
        },
        {
          id: 2,
          question: "What are the three components in the constraints-led approach?",
          options: ["Only equipment", "Athlete, environment, task", "Only coach instructions", "Parents, school, team"],
          correctAnswer: 1,
          explanation: "Skills emerge from interactions between the athlete, environment, and task constraints."
        },
        {
          id: 3,
          question: "What does differential learning emphasize?",
          options: ["Perfect repetition", "Introducing variability in practice", "Only competition", "Ignoring errors"],
          correctAnswer: 1,
          explanation: "Differential learning uses varied rather than identical repetitions to encourage adaptability."
        },
        {
          id: 4,
          question: "What stage features automatic skill execution?",
          options: ["Cognitive stage", "Associative stage", "Autonomous stage", "Only professional stage"],
          correctAnswer: 2,
          explanation: "In the autonomous stage, skills become automatic requiring minimal conscious thought."
        },
        {
          id: 5,
          question: "How can you manipulate task constraints?",
          options: ["Only change the athlete", "Modify rules, equipment, playing area", "Ignore the environment", "Only use professional equipment"],
          correctAnswer: 1,
          explanation: "Task constraints include rules, equipment, playing area, and number of participants."
        },
        {
          id: 6,
          question: "What is positive transfer?",
          options: ["Skills that interfere with learning", "Skills that help learning other skills", "No relationship between skills", "Only academic skills"],
          correctAnswer: 1,
          explanation: "Positive transfer occurs when learning one skill helps with learning another related skill."
        },
        {
          id: 7,
          question: "What type of feedback provides information about technique?",
          options: ["Knowledge of results", "Knowledge of performance", "Only praise", "Parent feedback"],
          correctAnswer: 1,
          explanation: "Knowledge of performance feedback provides information about movement technique rather than just outcomes."
        },
        {
          id: 8,
          question: "What does bandwidth feedback involve?",
          options: ["Constant feedback", "Feedback only when outside acceptable range", "No feedback ever", "Only positive feedback"],
          correctAnswer: 1,
          explanation: "Bandwidth feedback is given only when performance falls outside an acceptable range."
        },
        {
          id: 9,
          question: "What are open skills?",
          options: ["Skills in unchanging environments", "Skills in changing, unpredictable environments", "Only individual skills", "Simple skills only"],
          correctAnswer: 1,
          explanation: "Open skills are performed in changing, unpredictable environments requiring adaptation."
        },
        {
          id: 10,
          question: "What is a key method for developing decision-making?",
          options: ["Only repetitive drills", "Small-sided games with tactical problems", "Ignoring tactics", "Only watching professionals"],
          correctAnswer: 1,
          explanation: "Small-sided games create realistic decision-making scenarios in game-like contexts."
        },
        {
          id: 11,
          question: "What should gradually reduce in frequency as skills improve?",
          options: ["Practice time", "Coach feedback", "Athlete effort", "Equipment quality"],
          correctAnswer: 1,
          explanation: "Fading feedback gradually reduces coach input as athletes develop self-correction ability."
        },
        {
          id: 12,
          question: "What is sport intelligence?",
          options: ["Only physical skill", "Combining technical skill with tactical understanding", "Academic intelligence", "Only competition experience"],
          correctAnswer: 1,
          explanation: "Sport intelligence combines technical ability with tactical awareness and decision-making."
        },
        {
          id: 13,
          question: "What stage has smoother movements and developing kinesthetic awareness?",
          options: ["Cognitive", "Associative", "Autonomous", "Only professional"],
          correctAnswer: 1,
          explanation: "The associative stage features smoother movements and developing body awareness."
        },
        {
          id: 14,
          question: "What does differential learning encourage?",
          options: ["Rigid technique only", "Exploration and self-organization", "Perfect imitation", "Only coach-directed learning"],
          correctAnswer: 1,
          explanation: "By introducing variability, differential learning encourages athletes to explore and find their own movement solutions."
        },
        {
          id: 15,
          question: "What is augmented feedback?",
          options: ["Athlete's own senses", "Feedback from coach or technology", "Only from parents", "Ignoring all feedback"],
          correctAnswer: 1,
          explanation: "Augmented feedback comes from external sources like coaches, video, or technology."
        },
        {
          id: 16,
          question: "How can you develop pattern recognition?",
          options: ["Only physical training", "Video analysis with guided questioning", "Ignoring game situations", "Only individual drills"],
          correctAnswer: 1,
          explanation: "Video analysis helps athletes recognize patterns and make better decisions in game situations."
        },
        {
          id: 17,
          question: "What is summary feedback?",
          options: ["Constant during performance", "Given after several attempts", "Only at season end", "Never given"],
          correctAnswer: 1,
          explanation: "Summary feedback is provided after a series of attempts rather than after each one."
        },
        {
          id: 18,
          question: "What should athletes progress toward in decision-making?",
          options: ["Total coach dependence", "Independent problem-solving", "Ignoring all decisions", "Only following instructions"],
          correctAnswer: 1,
          explanation: "Athletes should progress from guided discovery to independent tactical decision-making."
        },
        {
          id: 19,
          question: "What maximizes positive transfer between skills?",
          options: ["Ignoring similarities", "Identifying common movement patterns", "Keeping skills completely separate", "Only practicing one skill"],
          correctAnswer: 1,
          explanation: "Identifying common elements helps athletes transfer learning between related skills."
        },
        {
          id: 20,
          question: "What type of athlete does advanced skill development create?",
          options: ["Robots following instructions", "Thinking athletes who adapt", "Only physically skilled athletes", "Athletes who ignore coaches"],
          correctAnswer: 1,
          explanation: "Advanced skill development creates thinking athletes who can adapt and solve problems independently."
        }
      ]
    },
    {
      id: 4,
      title: "Physical Conditioning for Youth",
      content: `# Module 4: Physical Conditioning for Youth

## Safe and Effective Conditioning
This module covers appropriate physical conditioning methods for developing athletes. You'll learn how to build strength, power, speed, and endurance safely and effectively.

## Principles of Youth Conditioning
Youth conditioning differs from adult training:

**Key principles:**
- Safety first: Proper technique before load
- Individualization: Account for growth and maturation
- Progressive overload: Gradual increases in demand
- Variety: Multiple training modalities
- Fun and engagement: Maintain motivation
- Recovery: Adequate rest between sessions

**Never:** Treat children as miniature adults in training.

## Strength Development Guidelines
Strength training is safe and beneficial when properly supervised:

**Age considerations:**
- **7-10 years:** Bodyweight exercises, medicine balls, light resistance
- **11-13 years:** Introduce light weights with perfect technique
- **14+ years:** Progressive resistance training as technique allows

**Safety guidelines:**
- Always supervise strength training
- Focus on technique, not weight lifted
- Include full range of motion
- Balance agonist/antagonist muscle groups
- Ensure proper warm-up and cool-down

## Speed and Agility Development
Developing speed and agility requires specific approaches:

**Speed development components:**
- Acceleration (0-10 meters)
- Maximum speed (10-30 meters)
- Speed endurance (maintaining speed)

**Agility components:**
- Change of direction
- Reactive agility (responding to stimuli)
- Multi-directional movement

**Training methods:**
- Sprint mechanics drills
- Resisted and assisted sprinting
- Ladder and cone drills
- Reactive games and activities

## Endurance Training Considerations
Endurance development for youth athletes:

**Aerobic foundation first:**
- Build general endurance before sport-specific
- Use fun activities: games, relays, circuits
- Monitor intensity (talk test, heart rate)

**Avoid excessive volume:**
- Young athletes have different energy systems
- Overtraining can impair growth
- Balance with skill development

**Guidelines:**
- Younger athletes: Play-based endurance
- Older athletes: More structured training
- Always include recovery

## Flexibility and Mobility
Maintaining and improving range of motion:

**Types of stretching:**
- Dynamic: During warm-up (moving stretches)
- Static: During cool-down (held stretches)
- PNF: Advanced techniques for older athletes

**Key areas for sports:**
- Hip mobility for running and jumping
- Shoulder mobility for throwing and striking
- Ankle mobility for balance and change of direction

**Never force stretches:** Stretch to mild discomfort, not pain.

## Plyometric Training
Plyometrics develop power and elastic strength:

**Progression principle:**
- Start with landing mechanics
- Progress to jumping mechanics
- Then combine into continuous movements

**Appropriate volumes:**
- Beginners: 80-100 foot contacts per session
- Intermediate: 100-120 foot contacts
- Advanced: 120-140 foot contacts (older athletes)

**Surface considerations:** Use forgiving surfaces, not concrete.

## Monitoring Training Load
Preventing overtraining in youth athletes:

**Monitoring tools:**
- Training diaries
- Wellness questionnaires
- Performance testing
- Growth measurements
- Coach observation

**Red flags:**
- Decreased performance
- Chronic fatigue
- Mood changes
- Frequent illness
- Loss of motivation

**Action:** Reduce load, increase recovery, consult specialists if needed.

## Integrating Conditioning with Skill Training
Make conditioning sport-specific and engaging:

**Methods:**
- Skill-based conditioning circuits
- Small-sided games with conditioning elements
- Sport-specific movement patterns
- Competition in conditioning activities

**Remember:** Conditioning should support skill development, not replace it.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the first priority in youth conditioning?",
          options: ["Maximum weight lifted", "Safety and proper technique", "Winning competitions", "Parent satisfaction"],
          correctAnswer: 1,
          explanation: "Safety must always come first, with proper technique emphasized over load or intensity."
        },
        {
          id: 2,
          question: "What type of strength training is appropriate for 7-10 year olds?",
          options: ["Maximum weight lifting", "Bodyweight exercises and light medicine balls", "Professional weight programs", "No strength training allowed"],
          correctAnswer: 1,
          explanation: "Young children should focus on bodyweight exercises and light implements with proper supervision."
        },
        {
          id: 3,
          question: "What are the three components of speed development?",
          options: ["Only maximum speed", "Acceleration, maximum speed, speed endurance", "Only starting speed", "Only endurance"],
          correctAnswer: 1,
          explanation: "Speed development includes acceleration (start), maximum speed, and maintaining speed (endurance)."
        },
        {
          id: 4,
          question: "What should precede sport-specific endurance training?",
          options: ["Only competition", "Aerobic foundation building", "No preparation needed", "Only strength training"],
          correctAnswer: 1,
          explanation: "Build a general aerobic foundation before progressing to sport-specific endurance training."
        },
        {
          id: 5,
          question: "When should static stretching typically be done?",
          options: ["During warm-up", "During cool-down", "Never for youth", "Only before competition"],
          correctAnswer: 1,
          explanation: "Static stretching is most effective during cool-down when muscles are warm."
        },
        {
          id: 6,
          question: "What is the first focus in plyometric training?",
          options: ["Maximum height jumps", "Landing mechanics", "Only competitive jumping", "Ignoring technique"],
          correctAnswer: 1,
          explanation: "Proper landing mechanics must be mastered before progressing to more advanced plyometrics."
        },
        {
          id: 7,
          question: "How should youth athletes be treated in conditioning?",
          options: ["As miniature adults", "As developing individuals with unique needs", "Only as future professionals", "All exactly the same"],
          correctAnswer: 1,
          explanation: "Youth have unique physiological and psychological needs that differ from adults."
        },
        {
          id: 8,
          question: "What should you focus on in youth strength training?",
          options: ["Maximum weight lifted", "Perfect technique", "Only competition lifts", "Speed over form"],
          correctAnswer: 1,
          explanation: "Technique mastery is more important than weight lifted for developing athletes."
        },
        {
          id: 9,
          question: "What is reactive agility?",
          options: ["Pre-planned movements", "Responding to external stimuli", "Only straight line speed", "Ignoring surroundings"],
          correctAnswer: 1,
          explanation: "Reactive agility involves responding to unpredictable stimuli, like opponents or balls."
        },
        {
          id: 10,
          question: "What should you avoid in youth endurance training?",
          options: ["All endurance training", "Excessive volume that could impair growth", "Only short sprints", "Fun activities"],
          correctAnswer: 1,
          explanation: "Excessive endurance volume can interfere with growth and development in young athletes."
        },
        {
          id: 11,
          question: "What type of stretching is best during warm-up?",
          options: ["Static stretching", "Dynamic stretching", "No stretching", "Only partner stretching"],
          correctAnswer: 1,
          explanation: "Dynamic stretching (moving while stretching) is most appropriate during warm-up."
        },
        {
          id: 12,
          question: "What is appropriate plyometric volume for beginners?",
          options: ["200+ contacts per session", "80-100 foot contacts per session", "No plyometrics", "Only competitive jumps"],
          correctAnswer: 1,
          explanation: "Beginners should start with modest volumes to develop proper technique and prevent injury."
        },
        {
          id: 13,
          question: "What is a key monitoring tool for training load?",
          options: ["Only coach's opinion", "Wellness questionnaires", "Parent pressure", "Social media likes"],
          correctAnswer: 1,
          explanation: "Wellness questionnaires help monitor fatigue, recovery, and potential overtraining."
        },
        {
          id: 14,
          question: "What should conditioning support?",
          options: ["Replacing skill training", "Skill development and performance", "Only winning games", "Coach's reputation"],
          correctAnswer: 1,
          explanation: "Conditioning should complement and support skill development, not replace it."
        },
        {
          id: 15,
          question: "What surface is best for plyometric training?",
          options: ["Concrete", "Forgiving surfaces like grass or mats", "Only sand", "Uneven surfaces"],
          correctAnswer: 1,
          explanation: "Use forgiving surfaces to reduce impact stress on developing joints."
        },
        {
          id: 16,
          question: "What is the talk test for monitoring endurance intensity?",
          options: ["Complete silence", "Ability to speak in short phrases", "Singing ability", "No breathing"],
          correctAnswer: 1,
          explanation: "The talk test helps ensure aerobic training stays at appropriate intensity levels."
        },
        {
          id: 17,
          question: "When can progressive resistance training begin?",
          options: ["At any age", "When proper technique is mastered", "Never for youth", "Only for professionals"],
          correctAnswer: 1,
          explanation: "Progressive resistance can begin when athletes demonstrate consistent proper technique."
        },
        {
          id: 18,
          question: "What is a red flag for overtraining?",
          options: ["Improved performance", "Chronic fatigue and mood changes", "Increased motivation", "Better sleep"],
          correctAnswer: 1,
          explanation: "Chronic fatigue, mood changes, and decreased performance can indicate overtraining."
        },
        {
          id: 19,
          question: "How can you make conditioning engaging?",
          options: ["Only repetitive drills", "Games, circuits, and competitions", "Ignoring athlete preferences", "Only individual work"],
          correctAnswer: 1,
          explanation: "Incorporating games and competition makes conditioning more engaging for youth athletes."
        },
        {
          id: 20,
          question: "What should you never do in youth conditioning?",
          options: ["Have fun", "Treat children as miniature adults", "Supervise training", "Progress gradually"],
          correctAnswer: 1,
          explanation: "Children have unique developmental needs and should not be trained like scaled-down adults."
        }
      ]
    },
    {
      id: 5,
      title: "Performance Analysis and Assessment",
      content: `# Module 5: Performance Analysis and Assessment

## Data-Driven Coaching
This module teaches you how to use performance analysis and assessment to make informed coaching decisions. You'll learn practical methods for measuring progress and identifying areas for improvement.

## The Purpose of Assessment
Why assess athletic performance?

**Key purposes:**
- Monitor progress and development
- Identify strengths and weaknesses
- Inform training program design
- Provide objective feedback to athletes
- Set realistic goals
- Detect potential overtraining
- Evaluate program effectiveness

Assessment should be ongoing, not just periodic.

## Types of Performance Assessment
Different assessments serve different purposes:

**Physical assessments:**
- Strength, power, speed, endurance
- Flexibility and mobility
- Body composition (age-appropriate methods)
- Movement quality screens

**Technical assessments:**
- Skill execution quality
- Consistency and accuracy
- Game-specific technique

**Tactical assessments:**
- Decision-making quality
- Game understanding
- Position-specific awareness

**Psychological assessments:**
- Motivation and commitment
- Confidence and self-efficacy
- Focus and concentration
- Stress management

## Movement Screening for Youth
Movement screens identify potential issues before they become injuries:

**Common screening tools:**
- Functional Movement Screen (FMS) for older athletes
- Fundamental movement skill assessments
- Sport-specific movement patterns
- Balance and coordination tests

**Screening principles:**
- Screen regularly (2-4 times per year)
- Use age-appropriate tests
- Focus on movement quality, not just quantity
- Address identified limitations

## Testing Protocols and Safety
Proper testing ensures valid results and athlete safety:

**Testing preparation:**
- Standardize testing conditions
- Ensure proper warm-up
- Use calibrated equipment
- Follow consistent protocols
- Consider time of day and fatigue

**Safety considerations:**
- Never test injured athletes
- Provide adequate recovery between tests
- Monitor for signs of distress
- Have emergency plans in place
- Consider growth and maturation

## Data Interpretation and Application
Collecting data is useless without proper interpretation:

**Interpretation guidelines:**
- Compare to previous results (individual progress)
- Consider growth and maturation effects
- Look for patterns, not just single scores
- Consider test limitations and variability
- Use multiple data points for decisions

**Application to training:**
- Adjust programs based on assessment results
- Address identified weaknesses
- Build on identified strengths
- Set specific, measurable goals
- Communicate findings clearly to athletes

## Technology in Performance Analysis
Modern tools for performance assessment:

**Video analysis:**
- Technique evaluation
- Tactical analysis
- Self-assessment tool for athletes
- Progress documentation

**Wearable technology:**
- Heart rate monitors
- GPS tracking
- Accelerometers
- Sleep and recovery monitors

**Software tools:**
- Performance databases
- Statistical analysis
- Visualization tools
- Progress tracking systems

**Remember:** Technology supplements coaching, doesn't replace it.

## Goal Setting with Assessment Data
Using assessments to set effective goals:

**SMART goal framework:**
- Specific: Clear and precise
- Measurable: Quantifiable progress
- Achievable: Realistic for the athlete
- Relevant: Connected to sport and development
- Time-bound: Specific timeframe

**Process vs. outcome goals:**
- Process goals: Focus on improvement actions
- Outcome goals: Focus on competition results
- Emphasize process goals for development

**Review and adjustment:** Regularly review goals based on assessment results.

## Communicating Assessment Results
How to share assessment information effectively:

**With athletes:**
- Focus on improvement, not just scores
- Use visual aids and comparisons
- Emphasize controllables
- Provide clear action steps
- Balance positive and constructive feedback

**With parents:**
- Explain purpose and process
- Focus on development, not comparisons
- Provide context for results
- Suggest supportive actions
- Maintain confidentiality

Assessment should motivate, not discourage.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is a key purpose of performance assessment?",
          options: ["Only to cut athletes", "Monitor progress and inform training", "Compare athletes unfairly", "Create more paperwork"],
          correctAnswer: 1,
          explanation: "Assessment helps monitor development and make informed training decisions."
        },
        {
          id: 2,
          question: "What type of assessment evaluates decision-making quality?",
          options: ["Physical assessment", "Tactical assessment", "Only psychological assessment", "No assessment needed"],
          correctAnswer: 1,
          explanation: "Tactical assessment focuses on decision-making, game understanding, and awareness."
        },
        {
          id: 3,
          question: "What do movement screens help identify?",
          options: ["Only talent", "Potential issues before they become injuries", "Parent preferences", "Only professional potential"],
          correctAnswer: 1,
          explanation: "Movement screens identify movement limitations or asymmetries that could lead to injury."
        },
        {
          id: 4,
          question: "How often should movement screening typically occur?",
          options: ["Never", "2-4 times per year", "Every practice", "Only when injured"],
          correctAnswer: 1,
          explanation: "Regular screening (2-4 times yearly) helps track changes and address issues promptly."
        },
        {
          id: 5,
          question: "What should you never do regarding testing?",
          options: ["Test injured athletes", "Use standardized protocols", "Provide warm-up", "Record results"],
          correctAnswer: 0,
          explanation: "Never test athletes who are injured or showing signs of illness."
        },
        {
          id: 6,
          question: "What should you compare assessment results to primarily?",
          options: ["Professional athletes", "The athlete's previous results", "Only teammates", "National records"],
          correctAnswer: 1,
          explanation: "Compare to the athlete's own previous results to track individual progress."
        },
        {
          id: 7,
          question: "What is the role of technology in performance analysis?",
          options: ["Replace coaching entirely", "Supplement and inform coaching decisions", "Only for professional teams", "Create more work"],
          correctAnswer: 1,
          explanation: "Technology should support and inform coaching, not replace the coach's expertise."
        },
        {
          id: 8,
          question: "What does SMART stand for in goal setting?",
          options: ["Only about winning", "Specific, Measurable, Achievable, Relevant, Time-bound", "Simple goals only", "Secret goals"],
          correctAnswer: 1,
          explanation: "SMART goals are Specific, Measurable, Achievable, Relevant, and Time-bound."
        },
        {
          id: 9,
          question: "What type of goals focus on improvement actions?",
          options: ["Outcome goals", "Process goals", "Only competition goals", "Parent goals"],
          correctAnswer: 1,
          explanation: "Process goals focus on the actions and improvements needed to achieve outcomes."
        },
        {
          id: 10,
          question: "How should you communicate assessment results to athletes?",
          options: ["Only show weaknesses", "Focus on improvement and provide action steps", "Compare to professionals", "Keep results secret"],
          correctAnswer: 1,
          explanation: "Focus on progress, provide clear action steps, and balance positive and constructive feedback."
        },
        {
          id: 11,
          question: "What should testing protocols ensure?",
          options: ["Varied conditions each time", "Standardized conditions for consistency", "Only test when convenient", "Ignore preparation"],
          correctAnswer: 1,
          explanation: "Standardized conditions ensure test results are valid and comparable over time."
        },
        {
          id: 12,
          question: "What does video analysis help evaluate?",
          options: ["Only athlete appearance", "Technique and tactical execution", "Parent satisfaction", "Equipment quality"],
          correctAnswer: 1,
          explanation: "Video analysis is valuable for evaluating technique and tactical decision-making."
        },
        {
          id: 13,
          question: "What should you consider when interpreting youth assessment data?",
          options: ["Only current scores", "Growth and maturation effects", "Ignore individual differences", "Only competition results"],
          correctAnswer: 1,
          explanation: "Growth and maturation significantly affect performance and must be considered in interpretation."
        },
        {
          id: 14,
          question: "What is a wearable technology example?",
          options: ["Only smartphones", "Heart rate monitors and GPS", "No technology for youth", "Only professional equipment"],
          correctAnswer: 1,
          explanation: "Wearable technology includes heart rate monitors, GPS trackers, and accelerometers."
        },
        {
          id: 15,
          question: "What should assessment primarily do for athletes?",
          options: ["Discourage them", "Motivate and guide improvement", "Create anxiety", "Only rank them"],
          correctAnswer: 1,
          explanation: "Assessment should motivate athletes by showing progress and guiding improvement."
        },
        {
          id: 16,
          question: "How should you share results with parents?",
          options: ["Publicly compare children", "Focus on development with context", "Only share positive results", "Ignore parents"],
          correctAnswer: 1,
          explanation: "Provide developmental context, focus on progress, and maintain confidentiality when sharing with parents."
        },
        {
          id: 17,
          question: "What type of assessment evaluates movement quality?",
          options: ["Only quantitative tests", "Movement screening", "Psychological tests", "Academic tests"],
          correctAnswer: 1,
          explanation: "Movement screening focuses on the quality of movement patterns, not just quantitative measures."
        },
        {
          id: 18,
          question: "What should you adjust based on assessment results?",
          options: ["Nothing - stick to the plan", "Training programs to address weaknesses", "Only increase training", "Ignore the data"],
          correctAnswer: 1,
          explanation: "Use assessment results to adjust training programs and address identified needs."
        },
        {
          id: 19,
          question: "What does FMS stand for?",
          options: ["Fundamental Movement Screen", "Fast Movement Score", "Final Measurement System", "Fitness Monitoring Standard"],
          correctAnswer: 0,
          explanation: "FMS stands for Functional Movement Screen, a common movement assessment tool."
        },
        {
          id: 20,
          question: "What should assessment be in a development program?",
          options: ["Only at season end", "Ongoing and integrated", "Only for selecting teams", "Avoided entirely"],
          correctAnswer: 1,
          explanation: "Assessment should be an ongoing, integrated part of the development process."
        }
      ]
    },
    {
      id: 6,
      title: "Advanced Coaching Methodology",
      content: `# Module 6: Advanced Coaching Methodology

## The Art and Science of Coaching
This final module integrates all previous learning into advanced coaching practice. You'll develop sophisticated coaching skills that combine technical knowledge with psychological insight and leadership ability.

## Coaching Styles and Approaches
Different situations require different coaching approaches:

**Directive coaching:**
- Coach makes most decisions
- Clear instructions and expectations
- Effective for beginners and safety situations
- Risk: Dependence on coach

**Guided discovery:**
- Coach sets problems, athletes find solutions
- Develops decision-making and creativity
- Effective for intermediate athletes
- Risk: Can be time-consuming

**Holistic coaching:**
- Integrates technical, tactical, physical, psychological
- Views athlete as whole person
- Effective for advanced development
- Requires broad coaching knowledge

**Athlete-centered coaching:**
- Focuses on athlete's needs and goals
- Involves athletes in decision-making
- Develops ownership and responsibility
- Requires strong coach-athlete relationship

The best coaches adapt their style to the situation and athlete.

## Building Effective Coach-Athlete Relationships
The relationship foundation supports all coaching:

**Key relationship components:**
- Trust and mutual respect
- Clear communication
- Shared goals and expectations
- Appropriate boundaries
- Support during challenges

**Building trust:**
- Be consistent and reliable
- Keep promises and commitments
- Show genuine care and interest
- Maintain confidentiality
- Admit mistakes and learn from them

**Communication skills:**
- Active listening
- Clear, concise instructions
- Appropriate questioning techniques
- Non-verbal communication awareness
- Feedback delivery skills

## Psychological Skills Training Integration
Developing mental skills alongside physical skills:

**Key psychological skills:**
- Goal setting and motivation
- Focus and concentration
- Confidence and self-efficacy
- Stress and anxiety management
- Resilience and coping strategies

**Integration methods:**
- Include mental skills in practice plans
- Teach psychological techniques explicitly
- Create challenging practice environments
- Use reflection and debriefing sessions
- Model positive psychological behaviors

## Leadership and Team Culture Development
Creating positive team environments:

**Team culture elements:**
- Shared values and expectations
- Positive relationships among team members
- Clear roles and responsibilities
- Supportive and challenging environment
- Celebration of effort and improvement

**Leadership approaches:**
- Transformational leadership: Inspire and motivate
- Servant leadership: Support and enable
- Distributed leadership: Share leadership roles
- Situational leadership: Adapt to circumstances

Develop leadership in your athletes, not just followership.

## Ethical Considerations in Advanced Coaching
Higher-level coaching involves complex ethical decisions:

**Key ethical principles:**
- Do no harm (physical or psychological)
- Respect athlete autonomy and dignity
- Ensure fairness and equity
- Maintain appropriate boundaries
- Act with integrity and honesty

**Ethical challenges:**
- Playing time decisions
- Selection and deselection
- Handling parental pressure
- Managing conflicts of interest
- Maintaining confidentiality

**Resources:** Coaching codes of ethics, mentorship, peer consultation.

## Professional Development for Coaches
Continuous improvement as a coach:

**Development areas:**
- Technical and tactical knowledge
- Teaching and communication skills
- Psychological understanding
- Leadership and management skills
- Sport science knowledge

**Development methods:**
- Formal education and certification
- Mentorship and peer learning
- Reflection and self-assessment
- Attending conferences and workshops
- Reading and research

The best coaches are lifelong learners.

## Managing High-Performance Environments
Creating optimal conditions for development:

**Environment components:**
- Physical facilities and equipment
- Support staff and resources
- Scheduling and time management
- Travel and competition logistics
- Recovery and regeneration facilities

**Performance team management:**
- Clear roles and communication
- Shared philosophy and goals
- Regular team meetings
- Conflict resolution protocols
- Continuous improvement mindset

**Athlete support:**
- Academic support for student-athletes
- Family communication and involvement
- Life skills development
- Career planning and transition support

## Crisis Management and Problem-Solving
Handling difficult situations effectively:

**Common crises:**
- Serious injuries
- Performance slumps
- Team conflicts
- Parent-coach conflicts
- Ethical dilemmas

**Problem-solving framework:**
1. Define the problem clearly
2. Gather relevant information
3. Generate possible solutions
4. Evaluate options
5. Implement chosen solution
6. Review and adjust as needed

**Support systems:** Mentors, peer coaches, professional organizations.

Great coaching transforms athletes and impacts lives.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "Which coaching style involves athletes finding solutions to problems set by the coach?",
          options: ["Directive coaching", "Guided discovery", "Ignore athletes", "Only demonstration"],
          correctAnswer: 1,
          explanation: "Guided discovery involves setting problems that athletes solve, developing decision-making skills."
        },
        {
          id: 2,
          question: "What is a key component of effective coach-athlete relationships?",
          options: ["Only winning", "Trust and mutual respect", "Constant criticism", "Ignoring athletes"],
          correctAnswer: 1,
          explanation: "Trust and mutual respect form the foundation of effective coaching relationships."
        },
        {
          id: 3,
          question: "What should be integrated alongside physical skills training?",
          options: ["Only more physical training", "Psychological skills training", "Ignoring mental aspects", "Only competition preparation"],
          correctAnswer: 1,
          explanation: "Psychological skills should be developed alongside physical and technical skills."
        },
        {
          id: 4,
          question: "What does transformational leadership focus on?",
          options: ["Only giving orders", "Inspiring and motivating athletes", "Ignoring individual needs", "Maintaining status quo"],
          correctAnswer: 1,
          explanation: "Transformational leadership inspires and motivates athletes toward shared goals."
        },
        {
          id: 5,
          question: "What is the first ethical principle in coaching?",
          options: ["Win at all costs", "Do no harm (physical or psychological)", "Only develop star athletes", "Please parents"],
          correctAnswer: 1,
          explanation: "The primary ethical principle is to avoid causing physical or psychological harm."
        },
        {
          id: 6,
          question: "What should the best coaches be?",
          options: ["Know everything already", "Lifelong learners", "Only focused on winning", "Isolated from other coaches"],
          correctAnswer: 1,
          explanation: "Effective coaches continuously learn and develop throughout their careers."
        },
        {
          id: 7,
          question: "What does athlete-centered coaching emphasize?",
          options: ["Coach's preferences", "Athlete's needs and goals", "Only parent requests", "League requirements"],
          correctAnswer: 1,
          explanation: "Athlete-centered coaching focuses on the individual athlete's needs, goals, and development."
        },
        {
          id: 8,
          question: "How can coaches build trust with athletes?",
          options: ["Be inconsistent", "Keep promises and show genuine care", "Share confidential information", "Play favorites"],
          correctAnswer: 1,
          explanation: "Trust is built through consistency, reliability, and genuine concern for athletes."
        },
        {
          id: 9,
          question: "What should team culture include?",
          options: ["Only winning mentality", "Shared values and positive relationships", "Constant competition between teammates", "Secret information"],
          correctAnswer: 1,
          explanation: "Positive team culture includes shared values, supportive relationships, and clear expectations."
        },
        {
          id: 10,
          question: "What is an ethical challenge coaches often face?",
          options: ["Only equipment issues", "Playing time decisions and selection", "Weather conditions", "Uniform colors"],
          correctAnswer: 1,
          explanation: "Playing time, selection, and fairness present common ethical challenges."
        },
        {
          id: 11,
          question: "What should be developed in athletes beyond followership?",
          options: ["Only obedience", "Leadership skills", "Dependence on coach", "Isolation from team"],
          correctAnswer: 1,
          explanation: "Develop leadership capacity in athletes, not just ability to follow instructions."
        },
        {
          id: 12,
          question: "What communication skill involves fully focusing on the speaker?",
          options: ["Talking constantly", "Active listening", "Ignoring athletes", "Only giving instructions"],
          correctAnswer: 1,
          explanation: "Active listening involves full attention, understanding, and appropriate responses."
        },
        {
          id: 13,
          question: "What type of goals should be emphasized in development?",
          options: ["Only outcome goals", "Process and performance goals", "Only winning goals", "Vague goals"],
          correctAnswer: 1,
          explanation: "Process and performance goals focus on controllable actions and improvements."
        },
        {
          id: 14,
          question: "What does distributed leadership involve?",
          options: ["Only coach leadership", "Sharing leadership roles among team", "No leadership", "External leadership only"],
          correctAnswer: 1,
          explanation: "Distributed leadership develops leadership capacity throughout the team."
        },
        {
          id: 15,
          question: "What should coaches do when they make mistakes?",
          options: ["Blame others", "Admit and learn from mistakes", "Ignore mistakes", "Punish athletes"],
          correctAnswer: 1,
          explanation: "Admitting mistakes and learning from them builds trust and models resilience."
        },
        {
          id: 16,
          question: "What should be included in high-performance environments?",
          options: ["Only training facilities", "Physical, psychological, and recovery support", "Only competition", "Isolation from family"],
          correctAnswer: 1,
          explanation: "High-performance environments address all aspects of athlete development and support."
        },
        {
          id: 17,
          question: "What is the first step in problem-solving?",
          options: ["Implement solution", "Define the problem clearly", "Ignore the problem", "Ask parents to solve"],
          correctAnswer: 1,
          explanation: "Clearly defining the problem is essential for effective problem-solving."
        },
        {
          id: 18,
          question: "What should professional development include for coaches?",
          options: ["Only watching games", "Multiple learning methods and continuous improvement", "Only certification courses", "No development needed"],
          correctAnswer: 1,
          explanation: "Professional development should be continuous and use varied learning methods."
        },
        {
          id: 19,
          question: "What does holistic coaching integrate?",
          options: ["Only technical skills", "Technical, tactical, physical, psychological aspects", "Only physical training", "Ignoring individual differences"],
          correctAnswer: 1,
          explanation: "Holistic coaching addresses all aspects of athlete development as interconnected."
        },
        {
          id: 20,
          question: "What does great coaching ultimately do?",
          options: ["Only win championships", "Transform athletes and impact lives", "Make coaches famous", "Generate revenue"],
          correctAnswer: 1,
          explanation: "Great coaching has lasting positive impact on athletes' development and lives."
        }
      ]
    }
  ],
  
  // FINAL EXAM (40 Questions covering all modules)
  finalExam: {
    id: "athletic-development-diploma-final-exam",
    title: "Athletic Development Diploma Final Exam",
    description: "Comprehensive exam covering all 6 modules of the Athletic Development Diploma course.",
    passingScore: 75,
    questions: [
      {
        id: 1,
        question: "What is the central philosophy of Long-Term Athlete Development?",
        options: ["Winning at all costs", "Placing athlete's needs at the center", "Early specialization", "Professional training for all"],
        correctAnswer: 1,
        explanation: "Module 1: LTAD prioritizes athlete-centered holistic development over early specialization."
      },
      {
        id: 2,
        question: "Which LTAD stage focuses on building aerobic and strength foundations?",
        options: ["Active Start", "Train to Train", "Learn to Train", "Train to Compete"],
        correctAnswer: 1,
        explanation: "Module 1: Train to Train (ages 12-16) focuses on developing physiological foundations."
      },
      {
        id: 3,
        question: "What is the primary purpose of periodization?",
        options: ["Complicate training", "Maximize performance while minimizing injury", "Only for professionals", "Eliminate rest"],
        correctAnswer: 1,
        explanation: "Module 2: Periodization optimizes performance while preventing overtraining."
      },
      {
        id: 4,
        question: "What is a macrocycle in periodization?",
        options: ["Daily session", "Weekly plan", "Entire annual plan", "Competition only"],
        correctAnswer: 2,
        explanation: "Module 2: A macrocycle is the complete annual training plan."
      },
      {
        id: 5,
        question: "What characterizes the cognitive stage of skill acquisition?",
        options: ["Automatic performance", "Conscious effort and many errors", "Minimal coaching needed", "Professional level"],
        correctAnswer: 1,
        explanation: "Module 3: Beginners think consciously about movements and make frequent errors."
      },
      {
        id: 6,
        question: "What does the constraints-led approach involve?",
        options: ["Only athlete constraints", "Athlete, environment, task interactions", "Only equipment", "Ignoring constraints"],
        correctAnswer: 1,
        explanation: "Module 3: Skills emerge from interactions between athlete, environment, and task."
      },
      {
        id: 7,
        question: "What is the first priority in youth conditioning?",
        options: ["Maximum weight", "Safety and proper technique", "Winning", "Parent satisfaction"],
        correctAnswer: 1,
        explanation: "Module 4: Safety and technique must precede intensity or load."
      },
      {
        id: 8,
        question: "What should precede intensity increases in training progression?",
        options: ["Volume increases", "Decreasing all training", "Only competition", "More sports"],
        correctAnswer: 0,
        explanation: "Module 4: Increase volume before intensity to build foundation."
      },
      {
        id: 9,
        question: "What is a key purpose of performance assessment?",
        options: ["Cut athletes", "Monitor progress and inform training", "Compare unfairly", "Create work"],
        correctAnswer: 1,
        explanation: "Module 5: Assessment informs training decisions and tracks development."
      },
      {
        id: 10,
        question: "How often should movement screening typically occur?",
        options: ["Never", "2-4 times yearly", "Every practice", "Only when injured"],
        correctAnswer: 1,
        explanation: "Module 5: Regular screening identifies issues before they become injuries."
      },
      {
        id: 11,
        question: "Which coaching style involves guided problem-solving?",
        options: ["Directive only", "Guided discovery", "Ignore athletes", "Only demonstration"],
        correctAnswer: 1,
        explanation: "Module 6: Guided discovery develops decision-making through problem-solving."
      },
      {
        id: 12,
        question: "What builds effective coach-athlete relationships?",
        options: ["Only winning", "Trust and clear communication", "Constant criticism", "Secrets"],
        correctAnswer: 1,
        explanation: "Module 6: Trust and communication form relationship foundations."
      },
      {
        id: 13,
        question: "What are windows of optimal trainability?",
        options: ["Vacation times", "Periods of heightened training responsiveness", "Times to avoid training", "Only for adults"],
        correctAnswer: 1,
        explanation: "Module 1: Developmental periods when specific training has maximum effect."
      },
      {
        id: 14,
        question: "What is a safe weekly training load increase?",
        options: ["50% weekly", "No more than 10% weekly", "Double each week", "No increases"],
        correctAnswer: 1,
        explanation: "Module 2: The 10% rule helps prevent overuse injuries."
      },
      {
        id: 15,
        question: "What does differential learning emphasize?",
        options: ["Perfect repetition", "Variability in practice", "Only competition", "Ignoring errors"],
        correctAnswer: 1,
        explanation: "Module 3: Varied repetitions encourage adaptability and problem-solving."
      },
      {
        id: 16,
        question: "What is appropriate for 7-10 year old strength training?",
        options: ["Maximum weights", "Bodyweight and light implements", "No training", "Professional programs"],
        correctAnswer: 1,
        explanation: "Module 4: Young children should use bodyweight and light equipment with supervision."
      },
      {
        id: 17,
        question: "What should assessment primarily do for athletes?",
        options: ["Discourage", "Motivate and guide improvement", "Create anxiety", "Only rank"],
        correctAnswer: 1,
        explanation: "Module 5: Assessment should motivate by showing progress and guiding development."
      },
      {
        id: 18,
        question: "What should coaches be regarding professional development?",
        options: ["Know everything", "Lifelong learners", "Only certified", "Isolated"],
        correctAnswer: 1,
        explanation: "Module 6: Effective coaches continuously learn and develop."
      },
      {
        id: 19,
        question: "What does physical literacy provide?",
        options: ["Only sports skills", "Foundation for all physical activity", "Professional contracts", "Only competition success"],
        correctAnswer: 1,
        explanation: "Module 1: Physical literacy enables participation in diverse physical activities."
      },
      {
        id: 20,
        question: "What period includes active recovery?",
        options: ["Preparation", "Competition", "Transition", "Only pre-season"],
        correctAnswer: 2,
        explanation: "Module 2: Transition period focuses on recovery and psychological break."
      },
      {
        id: 21,
        question: "What stage features automatic skill execution?",
        options: ["Cognitive", "Associative", "Autonomous", "Beginner"],
        correctAnswer: 2,
        explanation: "Module 3: Autonomous stage skills require minimal conscious thought."
      },
      {
        id: 22,
        question: "What is reactive agility?",
        options: ["Pre-planned", "Responding to stimuli", "Only straight line", "Ignoring environment"],
        correctAnswer: 1,
        explanation: "Module 4: Responding to unpredictable game situations."
      },
      {
        id: 23,
        question: "What does SMART stand for in goal setting?",
        options: ["Simple goals", "Specific, Measurable, Achievable, Relevant, Time-bound", "Secret goals", "Sports goals"],
        correctAnswer: 1,
        explanation: "Module 5: SMART goals are Specific, Measurable, Achievable, Relevant, Time-bound."
      },
      {
        id: 24,
        question: "What does athlete-centered coaching emphasize?",
        options: ["Coach's preferences", "Athlete's needs and goals", "Only parents", "League rules"],
        correctAnswer: 1,
        explanation: "Module 6: Focus on individual athlete development and goals."
      },
      {
        id: 25,
        question: "What should precede sport-specific endurance?",
        options: ["Only competition", "Aerobic foundation", "No preparation", "Only strength"],
        correctAnswer: 1,
        explanation: "Module 4: General aerobic foundation comes before sport-specific endurance."
      },
      {
        id: 26,
        question: "What should you compare assessment results to?",
        options: ["Professionals", "Athlete's previous results", "Only teammates", "National records"],
        correctAnswer: 1,
        explanation: "Module 5: Track individual progress against previous performance."
      },
      {
        id: 27,
        question: "What ethical principle comes first?",
        options: ["Win at all costs", "Do no harm", "Please parents", "Develop stars"],
        correctAnswer: 1,
        explanation: "Module 6: Avoid causing physical or psychological harm."
      },
      {
        id: 28,
        question: "What is a mesocycle?",
        options: ["Daily plan", "2-6 week training phase", "Only competition", "Yearly plan"],
        correctAnswer: 1,
        explanation: "Module 2: Mesocycles are training phases within the annual plan."
      },
      {
        id: 29,
        question: "What does bandwidth feedback involve?",
        options: ["Constant feedback", "Only when outside acceptable range", "No feedback", "Only positive"],
        correctAnswer: 1,
        explanation: "Module 3: Feedback given only when performance falls outside acceptable range."
      },
      {
        id: 30,
        question: "What is appropriate plyometric volume for beginners?",
        options: ["200+ contacts", "80-100 foot contacts", "No plyometrics", "Only competitive"],
        correctAnswer: 1,
        explanation: "Module 4: Beginners start with modest volumes to develop technique."
      },
      {
        id: 31,
        question: "What technology supplements coaching?",
        options: ["Replaces coaching", "Supplements and informs decisions", "Only for pros", "Creates work"],
        correctAnswer: 1,
        explanation: "Module 5: Technology should support, not replace, coaching expertise."
      },
      {
        id: 32,
        question: "What builds trust with athletes?",
        options: ["Inconsistency", "Keeping promises and genuine care", "Sharing secrets", "Favorites"],
        correctAnswer: 1,
        explanation: "Module 6: Consistency, reliability, and genuine concern build trust."
      },
      {
        id: 33,
        question: "What should be integrated with physical training?",
        options: ["Only more physical", "Psychological skills", "Ignoring mental", "Only competition"],
        correctAnswer: 1,
        explanation: "Module 6: Psychological development should parallel physical training."
      },
      {
        id: 34,
        question: "What does the talk test monitor?",
        options: ["Silence", "Aerobic intensity", "Strength", "Flexibility"],
        correctAnswer: 1,
        explanation: "Module 4: Ability to speak indicates appropriate aerobic training intensity."
      },
      {
        id: 35,
        question: "What is positive transfer?",
        options: ["Skills interfering", "Skills helping other skills", "No relationship", "Only academic"],
        correctAnswer: 1,
        explanation: "Module 3: Learning one skill helps learning related skills."
      },
      {
        id: 36,
        question: "What should team culture include?",
        options: ["Only winning", "Shared values and support", "Constant competition", "Secrets"],
        correctAnswer: 1,
        explanation: "Module 6: Positive culture includes shared values and supportive relationships."
      },
      {
        id: 37,
        question: "What should you never do in testing?",
        options: ["Test injured athletes", "Use protocols", "Warm-up", "Record results"],
        correctAnswer: 0,
        explanation: "Module 5: Never test athletes who are injured or ill."
      },
      {
        id: 38,
        question: "What is holistic coaching?",
        options: ["Only technical", "Integrates all development aspects", "Only physical", "Ignoring individual"],
        correctAnswer: 1,
        explanation: "Module 6: Addresses technical, tactical, physical, psychological aspects together."
      },
      {
        id: 39,
        question: "What is the first step in problem-solving?",
        options: ["Implement", "Define problem", "Ignore", "Ask parents"],
        correctAnswer: 1,
        explanation: "Module 6: Clearly defining the problem enables effective solution development."
      },
      {
        id: 40,
        question: "What does great coaching ultimately achieve?",
        options: ["Only championships", "Transforms athletes and impacts lives", "Coach fame", "Revenue"],
        correctAnswer: 1,
        explanation: "Module 6: Lasting positive impact on athlete development and life skills."
      }
    ]
  }
};

export default athleticDevelopmentDiploma;
