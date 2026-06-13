// Fitness Nutrition (Diploma) Course Data
// Complete with 6 advanced modules, quizzes, and final exam

export const fitnessNutritionDiploma = {
  // COURSE METADATA
  id: "fitness-nutrition-diploma",
  title: "Fitness Nutrition (Diploma)",
  description: "Advanced diploma in fitness nutrition science, covering sports nutrition, body composition optimization, supplementation, and nutritional strategies for athletic performance and physique enhancement.",
  duration: "12 weeks",
  timeCommitment: "8-10 hours per week",
  price: 18,
  upgradePrice: null, // Diploma is highest level
  icon: "💪",
  badge: "Diploma",
  category: "Health & Fitness",
  prerequisites: ["Basic Nutrition Knowledge", "Exercise Science Fundamentals"],
  
  // MODULES ARRAY
  modules: [
    {
      id: 1,
      title: "Advanced Sports Nutrition Science",
      completed: false,
      content: `# Module 1: Advanced Sports Nutrition Science

## Nutritional Foundations for Athletic Performance

This module provides an in-depth understanding of sports nutrition science, exploring how nutrients fuel athletic performance, support recovery, and optimize body composition.

### Energy Systems and Nutrient Utilization

**Three Energy Systems:**
- Phosphagen system: Immediate energy for short, high-intensity efforts (0-10 seconds)
- Glycolytic system: Anaerobic energy for moderate-duration high-intensity (10 seconds - 2 minutes)
- Oxidative system: Aerobic energy for endurance activities (>2 minutes)

**Substrate Utilization During Exercise:**
- Carbohydrates: Primary fuel for high-intensity exercise
- Fats: Primary fuel for low to moderate intensity exercise
- Protein: Minor fuel source, primarily for recovery and adaptation
- Intensity and duration determine primary fuel source

**Metabolic Adaptations to Training:**
- Increased mitochondrial density with endurance training
- Enhanced fat oxidation capacity
- Improved glycogen storage and utilization
- Better lactate clearance and buffering capacity

### Macronutrient Requirements for Athletes

**Carbohydrate Recommendations:**
- General training: 3-5 g/kg body weight daily
- Moderate training: 5-7 g/kg daily
- Heavy training: 7-10 g/kg daily
- Ultra-endurance: Up to 12 g/kg daily

**Protein Requirements:**
- Endurance athletes: 1.2-1.4 g/kg daily
- Strength/power athletes: 1.6-2.0 g/kg daily
- Muscle building phases: Up to 2.2 g/kg daily
- Distribution: 0.3-0.4 g/kg per meal, 4-6 meals daily

**Fat Guidelines:**
- Minimum: 0.8-1.0 g/kg daily for essential fatty acids
- Optimal: 1.0-1.5 g/kg daily (20-35% of total calories)
- Quality: Emphasis on unsaturated fats, omega-3 fatty acids
- Timing: Spread throughout day, avoid large amounts pre-exercise

### Micronutrient Considerations

**Key Micronutrients for Athletes:**
- Iron: Oxygen transport, especially important for female athletes
- Calcium: Bone health and muscle contraction
- Vitamin D: Bone health, immune function, muscle function
- B-vitamins: Energy metabolism, red blood cell production
- Antioxidants: Reduce exercise-induced oxidative stress

**Increased Requirements:**
- Higher calorie intake increases micronutrient needs
- Sweat losses of electrolytes (sodium, potassium, magnesium)
- Potential increased turnover during intense training
- Special considerations for vegetarian/vegan athletes

**Supplementation Guidelines:**
- Food-first approach whenever possible
- Targeted supplementation based on deficiencies
- Evidence-based supplements with proven efficacy
- Quality control and third-party testing importance

### Hydration Science

**Fluid Balance Physiology:**
- Sweat rates: 0.5-2.0+ L/hour depending on conditions
- Individual variability in sweat composition
- Electrolyte losses: Sodium primary electrolyte lost in sweat
- Impact of dehydration on performance: >2% loss impairs performance

**Hydration Strategies:**
- Pre-exercise: 5-7 mL/kg 4 hours before, additional if needed
- During exercise: 0.4-0.8 L/hour depending on sweat rate
- Post-exercise: 1.5 L per kg body weight lost
- Electrolyte replacement with prolonged sweating >60-90 minutes

**Monitoring Hydration Status:**
- Urine color and volume
- Body weight changes
- Thirst perception (late indicator)
- Sweat rate calculation for individualization

**Special Considerations:**
- Heat acclimation reduces electrolyte losses
- Altitude increases fluid needs
- Cold environments still cause dehydration
- Travel and jet lag effects on hydration

### Nutrient Timing Principles

**Pre-Exercise Nutrition:**
- 1-4 hours before: Balanced meal with carbs, protein, low fat/fiber
- 30-60 minutes before: Easily digestible carbs if needed
- Goals: Top off glycogen stores, provide available energy, prevent hunger
- Individual tolerance testing essential

**During Exercise Fueling:**
- >60 minutes activity: 30-60 g carbohydrates per hour
- >2.5 hours activity: Up to 90 g carbohydrates per hour
- Multiple transportable carbs increase absorption
- Practical considerations for different sports

**Post-Exercise Recovery:**
- Carbohydrate window: 0-2 hours for glycogen replenishment
- Protein window: 0-4 hours for muscle protein synthesis
- Ratio: 3:1 or 4:1 carbs:protein for optimal recovery
- Real food vs. supplement considerations

**Sleep and Overnight Recovery:**
- Casein protein before bed for sustained amino acid release
- Hydration status maintenance overnight
- Muscle repair and adaptation during sleep
- Growth hormone and testosterone optimization

### Body Composition Assessment Methods

**Dual-Energy X-ray Absorptiometry (DEXA):**
- Gold standard for body composition assessment
- Measures bone mineral density, fat mass, lean mass
- Regional body composition analysis
- Limitations: Cost, accessibility, radiation exposure

**Bioelectrical Impedance Analysis (BIA):**
- Estimates body fat percentage from electrical conductivity
- Affordable and accessible
- Limitations: Hydration status affects accuracy
- Best used for tracking changes over time

**Skinfold Measurements:**
- Estimates body fat from subcutaneous fat thickness
- 3-7 site measurements common
- Technician skill crucial for accuracy
- Practical for field settings

**Circumference Measurements:**
- Waist, hip, limb circumferences
- Waist-to-hip ratio assessment
- Tracking changes in muscle size
- Practical and inexpensive

### Periodized Nutrition Planning

**Nutrition Periodization Principles:**
- Aligning nutrition with training cycles
- Different goals require different nutritional approaches
- Macro and micro cycles of nutrition planning
- Integration with training periodization

**Building/Muscle Gain Phase:**
- Caloric surplus: 300-500 kcal above maintenance
- Protein: 1.6-2.2 g/kg daily
- Carbohydrate emphasis around training
- Controlled surplus to minimize fat gain

**Fat Loss/Cutting Phase:**
- Caloric deficit: 300-500 kcal below maintenance
- Protein: Higher end of range to preserve muscle
- Carbohydrate timing around training
- Adequate fats for hormone production

**Maintenance Phase:**
- Energy balance maintenance
- Macronutrient optimization for performance
- Metabolic flexibility development
- Preparation for next phase

**Competition/Peak Phase:**
- Fine-tuning for specific events
- Peak week strategies (carb loading, etc.)
- Competition day nutrition
- Recovery nutrition post-competition

### Special Populations Considerations

**Female Athlete Considerations:**
- Energy availability and menstrual function
- Iron requirements and supplementation
- Bone health and stress fracture prevention
- Pregnancy and postpartum considerations

**Youth Athletes:**
- Growth and development considerations
- Energy and nutrient needs for growth + training
- Avoiding overly restrictive diets
- Education on healthy relationships with food

**Masters Athletes:**
- Age-related changes in metabolism
- Protein requirements may increase
- Recovery considerations
- Injury prevention and joint health

**Vegetarian/Vegan Athletes:**
- Protein complementation strategies
- Iron, zinc, B12, calcium considerations
- Creatine and carnosine implications
- Meal planning for adequate energy intake

### Performance Optimization Strategies

**Glycogen Supercompensation:**
- Classic 7-day protocol
- Modified 3-day protocol
- Practical applications for different events
- Individual response variability

**Sodium Loading:**
- Hyperhydration strategies for endurance events
- Reducing risk of hyponatremia
- Individual sweat rate considerations
- Practice during training

**Caffeine Strategies:**
- 3-6 mg/kg 60 minutes pre-exercise
- Individual tolerance and habituation
- Forms: Coffee, pills, gum, energy gels
- Combining with carbohydrates

**Training the Gut:**
- Increasing carbohydrate absorption capacity
- Gradual increase in intake during training
- Reducing gastrointestinal distress
- Event-specific practice

### Research Literacy and Evidence Evaluation

**Evaluating Nutrition Research:**
- Study design understanding (RCT, cohort, etc.)
- Statistical significance vs. practical significance
- Effect sizes and confidence intervals
- Conflict of interest considerations

**Applying Research to Practice:**
- Individual response variability
- Practical applicability considerations
- Cost-benefit analysis
- Integration with athlete preferences

**Staying Current:**
- Reputable journal monitoring
- Conference attendance and proceedings
- Continuing education requirements
- Professional network development

This foundational module establishes the scientific principles underlying sports nutrition practice, providing the knowledge base for advanced application in subsequent modules.`,
      
      quiz: [
        {
          id: 1,
          question: "Which energy system provides immediate energy for short, high-intensity efforts lasting 0-10 seconds?",
          options: [
            "Phosphagen system",
            "Glycolytic system",
            "Oxidative system",
            "Lipolytic system"
          ],
          correctAnswer: 0,
          explanation: "The phosphagen system uses ATP and creatine phosphate for immediate, high-intensity efforts up to 10 seconds."
        },
        {
          id: 2,
          question: "What is the primary fuel source during high-intensity exercise?",
          options: [
            "Carbohydrates",
            "Fats",
            "Protein",
            "Ketones"
          ],
          correctAnswer: 0,
          explanation: "Carbohydrates are the primary fuel for high-intensity exercise due to faster energy production compared to fats."
        },
        {
          id: 3,
          question: "What is the recommended daily protein intake range for strength/power athletes?",
          options: [
            "1.6-2.0 g/kg body weight",
            "0.8-1.0 g/kg",
            "1.2-1.4 g/kg",
            "2.2-2.5 g/kg"
          ],
          correctAnswer: 0,
          explanation: "Strength and power athletes require 1.6-2.0 g/kg daily to support muscle repair, growth, and adaptation."
        },
        {
          id: 4,
          question: "At what percentage of body weight loss does dehydration begin to impair athletic performance?",
          options: [
            ">2%",
            ">5%",
            ">1%",
            ">3%"
          ],
          correctAnswer: 0,
          explanation: "Dehydration exceeding 2% of body weight negatively impacts cardiovascular function, thermoregulation, and performance."
        },
        {
          id: 5,
          question: "What is the optimal carbohydrate intake during exercise lasting longer than 60 minutes?",
          options: [
            "30-60 g per hour",
            "10-20 g per hour",
            "60-90 g per hour",
            "15-30 g per hour"
          ],
          correctAnswer: 0,
          explanation: "30-60 grams of carbohydrates per hour during exercise >60 minutes helps maintain blood glucose and delay fatigue."
        },
        {
          id: 6,
          question: "What is the recommended carb:protein ratio for post-exercise recovery nutrition?",
          options: [
            "3:1 or 4:1 carbohydrates to protein",
            "1:1 ratio",
            "2:1 protein to carbohydrates",
            "5:1 carbohydrates to protein"
          ],
          correctAnswer: 0,
          explanation: "A 3:1 or 4:1 carbohydrate to protein ratio optimizes glycogen replenishment and muscle protein synthesis."
        },
        {
          id: 7,
          question: "Which body composition assessment method is considered the gold standard?",
          options: [
            "Dual-Energy X-ray Absorptiometry (DEXA)",
            "Bioelectrical Impedance Analysis (BIA)",
            "Skinfold measurements",
            "Circumference measurements"
          ],
          correctAnswer: 0,
          explanation: "DEXA is considered the gold standard due to its accuracy in measuring bone density, fat mass, and lean mass."
        },
        {
          id: 8,
          question: "What caloric surplus is typically recommended during a muscle building phase?",
          options: [
            "300-500 kcal above maintenance",
            "100-200 kcal above maintenance",
            "500-700 kcal above maintenance",
            "Maintenance calories only"
          ],
          correctAnswer: 0,
          explanation: "A 300-500 kcal surplus maximizes muscle gain while minimizing excess fat accumulation."
        },
        {
          id: 9,
          question: "What is the primary concern regarding energy availability in female athletes?",
          options: [
            "Impact on menstrual function and bone health",
            "Excessive muscle gain",
            "Too rapid weight loss",
            "Increased appetite"
          ],
          correctAnswer: 0,
          explanation: "Low energy availability can disrupt menstrual function (amenorrhea) and increase stress fracture risk in female athletes."
        },
        {
          id: 10,
          question: "What caffeine dosage is recommended for performance enhancement?",
          options: [
            "3-6 mg/kg body weight 60 minutes pre-exercise",
            "1-2 mg/kg immediately before exercise",
            "7-10 mg/kg throughout the day",
            "10-15 mg/kg 30 minutes pre-exercise"
          ],
          correctAnswer: 0,
          explanation: "3-6 mg/kg taken 60 minutes before exercise optimizes performance benefits while minimizing side effects."
        },
        {
          id: 11,
          question: "Which system provides energy for endurance activities lasting longer than 2 minutes?",
          options: [
            "Oxidative system",
            "Phosphagen system",
            "Glycolytic system",
            "Anaerobic system"
          ],
          correctAnswer: 0,
          explanation: "The oxidative (aerobic) system uses oxygen to produce ATP from carbohydrates and fats for sustained activity."
        },
        {
          id: 12,
          question: "What is the recommended carbohydrate intake for heavy training days?",
          options: [
            "7-10 g/kg body weight daily",
            "3-5 g/kg daily",
            "5-7 g/kg daily",
            "10-12 g/kg daily"
          ],
          correctAnswer: 0,
          explanation: "Heavy training requires 7-10 g/kg daily to replenish glycogen stores and support training demands."
        },
        {
          id: 13,
          question: "Which electrolyte is primarily lost in sweat?",
          options: [
            "Sodium",
            "Potassium",
            "Magnesium",
            "Calcium"
          ],
          correctAnswer: 0,
          explanation: "Sodium is the primary electrolyte lost in sweat, with losses ranging from 400-2000+ mg per liter."
        },
        {
          id: 14,
          question: "What is 'training the gut' in sports nutrition?",
          options: [
            "Increasing carbohydrate absorption capacity during exercise",
            "Reducing stomach size through diet",
            "Fasting before training sessions",
            "Eating only easily digestible foods"
          ],
          correctAnswer: 0,
          explanation: "Training the gut involves gradually increasing carbohydrate intake during training to improve absorption and reduce GI distress."
        },
        {
          id: 15,
          question: "What is glycogen supercompensation?",
          options: [
            "Increasing muscle glycogen stores above normal levels",
            "Depleting all glycogen stores completely",
            "Converting glycogen to fat for storage",
            "Using glycogen for immediate energy only"
          ],
          correctAnswer: 0,
          explanation: "Glycogen supercompensation protocols increase muscle glycogen stores 20-40% above normal levels for endurance events."
        },
        {
          id: 16,
          question: "What protein type is recommended before bed for sustained amino acid release?",
          options: [
            "Casein protein",
            "Whey protein",
            "Soy protein",
            "Pea protein"
          ],
          correctAnswer: 0,
          explanation: "Casein forms a gel in the stomach, providing slow, sustained amino acid release throughout the night."
        },
        {
          id: 17,
          question: "What is periodized nutrition?",
          options: [
            "Aligning nutrition strategies with training cycles and goals",
            "Eating the same foods every day",
            "Random variation in dietary intake",
            "Only changing nutrition during competition"
          ],
          correctAnswer: 0,
          explanation: "Nutrition periodization involves systematic variation of nutritional intake to support different training phases and goals."
        },
        {
          id: 18,
          question: "What is the minimum recommended fat intake for athletes?",
          options: [
            "0.8-1.0 g/kg daily for essential fatty acids",
            "0.5 g/kg daily",
            "1.5-2.0 g/kg daily",
            "As low as possible for leanness"
          ],
          correctAnswer: 0,
          explanation: "Minimum 0.8-1.0 g/kg ensures adequate essential fatty acids for hormone production and cellular function."
        },
        {
          id: 19,
          question: "What does BIA measure in body composition assessment?",
          options: [
            "Electrical conductivity to estimate body fat percentage",
            "X-ray absorption of different tissues",
            "Skinfold thickness at specific sites",
            "Underwater weight displacement"
          ],
          correctAnswer: 0,
          explanation: "BIA estimates body composition by measuring resistance to electrical current flow through body tissues."
        },
        {
          id: 20,
          question: "What is the 'Female Athlete Triad'?",
          options: [
            "Low energy availability, menstrual dysfunction, low bone density",
            "High protein intake, muscle gain, increased strength",
            "Excessive carb loading, weight gain, improved performance",
            "Adequate nutrition, regular periods, optimal bone health"
          ],
          correctAnswer: 0,
          explanation: "The Female Athlete Triad involves interconnected issues of low energy availability, menstrual dysfunction, and impaired bone health."
        }
      ]
    },
    {
      id: 2,
      title: "Macronutrient Manipulation for Performance",
      completed: false,
      content: `# Module 2: Macronutrient Manipulation for Performance

## Strategic Nutrition for Athletic Goals

This module explores advanced strategies for manipulating macronutrient intake to optimize performance, body composition, and recovery for different athletic endeavors.

### Carbohydrate Periodization

**Training-Low Strategies:**
- Training with reduced glycogen stores
- May enhance mitochondrial adaptations
- Practical implementation methods
- Considerations for performance impact

**Training-High Strategies:**
- Ensuring adequate glycogen for quality sessions
- Performance optimization for key workouts
- Competition preparation
- Individual response considerations

**Carbohydrate Cycling:**
- High carb days around intense training
- Moderate carb days for moderate training
- Low carb days for rest or light activity
- Weekly patterns based on training load

**Carbohydrate Timing:**
- Strategic placement around training sessions
- Pre-training: 1-4 hours before for glycogen
- During training: For sessions >60 minutes
- Post-training: Rapid replenishment window

### Protein Optimization Strategies

**Protein Distribution:**
- 4-6 feeding occasions daily
- 0.3-0.4 g/kg per meal for maximal MPS stimulation
- Even distribution vs. skewed distribution
- Practical meal spacing considerations

**Protein Quality Assessment:**
- Digestible Indispensable Amino Acid Score (DIAAS)
- Protein Digestibility Corrected Amino Acid Score (PDCAAS)
- Leucine threshold for muscle protein synthesis
- Combining plant proteins for completeness

**Fast vs. Slow Proteins:**
- Whey: Rapid digestion, high leucine content
- Casein: Slow digestion, sustained release
- Blends: Combined timing benefits
- Food sources with different digestion rates

**Protein Timing Around Training:**
- Pre-training: 0.3-0.4 g/kg 1-2 hours before
- During training: Typically not needed except endurance
- Post-training: 0.3-0.4 g/kg within 2 hours
- Bedtime: Casein for overnight recovery

### Fat Manipulation Strategies

**Dietary Fat Types and Functions:**
- Saturated: Hormone production, cell membranes
- Monounsaturated: Heart health, anti-inflammatory
- Polyunsaturated: Essential fatty acids, inflammation modulation
- Trans fats: Avoid completely for health

**Fat Cycling Approaches:**
- Higher fat on rest days or low-intensity days
- Lower fat on high-intensity training days
- Strategic reduction during fat loss phases
- Individual tolerance and preference considerations

**Essential Fatty Acid Optimization:**
- Omega-3: Anti-inflammatory, cognitive function
- Omega-6: Pro-inflammatory in excess
- Ratio considerations (ideal 1:1 to 1:4)
- Food sources and supplementation

**Fat Timing Considerations:**
- Lower fat pre-training for gastric emptying
- Moderate fat throughout day for hormone production
- Higher fat meals away from training
- Individual digestive tolerance assessment

### Energy Balance and Body Composition

**Determining Energy Needs:**
- Basal metabolic rate estimation equations
- Activity factor application
- Non-exercise activity thermogenesis (NEAT) considerations
- Adaptive thermogenesis during dieting

**Caloric Surplus Strategies:**
- Lean bulking vs. traditional bulking
- Rate of weight gain targets (0.25-0.5% body weight weekly)
- Macronutrient distribution in surplus
- Monitoring progress and adjusting

**Caloric Deficit Strategies:**
- Rate of weight loss targets (0.5-1% body weight weekly)
- Protein preservation emphasis
- Diet breaks and refeeds
- Metabolic adaptation management

**Recomposition Approaches:**
- Simultaneous fat loss and muscle gain
- New trainees and returning athletes
- Optimal conditions for recomposition
- Realistic expectations and monitoring

### Nutrient Timing Protocols

**Pre-Competition Nutrition:**
- Last substantial meal: 3-4 hours before
- Liquid/snack: 1-2 hours before if needed
- Individual gastrointestinal tolerance
- Practice during training

**Intra-Competition/Event Nutrition:**
- Sport-specific practical considerations
- Fluid and carbohydrate intake strategies
- Electrolyte replacement needs
- Temperature and duration adjustments

**Post-Competition Recovery:**
- Immediate needs: Rehydration, glycogen replenishment
- 24-hour recovery window
- Inflammation management through nutrition
- Return to normal training nutrition

**Travel and Competition Nutrition:**
- Planning for different locations
- Food safety considerations
- Managing unfamiliar foods
- Bringing appropriate supplements

### Sports-Specific Nutrition Strategies

**Endurance Sports:**
- High carbohydrate requirements
- Fueling during long events
- Hydration and electrolyte management
- Recovery from prolonged exertion

**Strength and Power Sports:**
- Protein emphasis for muscle maintenance
- Creatine supplementation benefits
- Training session fueling strategies
- Weight class management

**Team Sports:**
- Intermittent high-intensity demands
- Tournament/competition day strategies
- Travel considerations
- Recovery between games/matches

**Combat Sports:**
- Weight cutting strategies and safety
- Rehydration and refueling post-weigh-in
- Making weight healthfully
- Competition day nutrition

**Aesthetic Sports:**
- Peak week strategies
- Water manipulation
- Carbohydrate loading variations
- Post-competition recovery

### Dietary Approaches and Strategies

**Ketogenic and Low-Carbohydrate Approaches:**
- Metabolic adaptations to ketosis
- Performance implications
- Endurance vs. strength/power considerations
- Safety and monitoring

**Intermittent Fasting Protocols:**
- Time-restricted feeding windows
- Training in fasted vs. fed state
- Body composition implications
- Individual response variability

**Plant-Based Approaches:**
- Meeting protein needs without animal products
- Micronutrient considerations
- Performance outcomes research
- Practical meal planning

**Mediterranean and Anti-Inflammatory Approaches:**
- Focus on whole foods and healthy fats
- Inflammation reduction for recovery
- Long-term health benefits
- Performance applications

### Individualization and Monitoring

**Metabolic Individuality:**
- Genetic variations in nutrient metabolism
- Personal food preferences and tolerances
- Cultural and ethical considerations
- Psychological factors in dietary adherence

**Progress Monitoring Methods:**
- Regular body composition assessments
- Performance metrics tracking
- Subjective measures (energy, recovery, mood)
- Blood biomarkers when appropriate

**Adjustment Protocols:**
- When and how to adjust macronutrients
- Responding to plateaus
- Managing life stressors and nutrition
- Seasonal adjustments

**Communication and Adherence:**
- Effective nutrition education for athletes
- Building sustainable habits
- Managing expectations
- Working with resistant clients

### Advanced Supplementation Strategies

**Evidence-Based Performance Supplements:**
- Creatine: Loading and maintenance protocols
- Beta-alanine: Loading protocols and timing
- Caffeine: Timing, dosage, and forms
- Nitrate: Beetroot juice and timing

**Recovery Supplements:**
- Protein powders: Types and timing
- Branched-chain amino acids: Situational use
- Tart cherry juice: For inflammation and sleep
- Omega-3s: Dosage and quality considerations

**Safety and Quality Considerations:**
- Third-party testing importance
- Avoiding contaminated products
- Safe dosage ranges
- Cycling considerations for some supplements

**Legal and Ethical Considerations:**
- WADA-banned substances awareness
- Supplement contamination risks
- Informed consent for supplementation
- Professional responsibility

### Practical Application and Case Studies

**Developing Nutrition Plans:**
- Assessment phase: Goals, current intake, preferences
- Planning phase: Macronutrient targets, meal timing
- Implementation phase: Education, support, monitoring
- Evaluation phase: Progress assessment, adjustments

**Case Study Analysis:**
- Endurance athlete preparing for marathon
- Strength athlete during muscle building phase
- Team sport athlete with travel schedule
- Weight class athlete managing weight cuts

**Problem-Solving Scenarios:**
- Plateaus in progress
- Gastrointestinal issues during training
- Lack of adherence to plan
- Unexpected life events affecting nutrition

**Professional Practice Considerations:**
- Scope of practice boundaries
- Referral to other professionals when needed
- Documentation and record keeping
- Continuing education requirements

Mastering macronutrient manipulation allows for precise optimization of nutrition strategies to support specific athletic goals, individual responses, and varying training demands.`,
      
      quiz: [
        {
          id: 1,
          question: "What is carbohydrate periodization?",
          options: [
            "Strategic variation of carbohydrate intake based on training demands",
            "Eating the same amount of carbs every day",
            "Only consuming carbs after exercise",
            "Eliminating carbs completely periodically"
          ],
          correctAnswer: 0,
          explanation: "Carbohydrate periodization involves adjusting carbohydrate intake daily based on training intensity and volume."
        },
        {
          id: 2,
          question: "What is the recommended protein dose per meal to maximize muscle protein synthesis?",
          options: [
            "0.3-0.4 g/kg body weight",
            "0.1-0.2 g/kg",
            "0.5-0.6 g/kg",
            "1.0 g/kg"
          ],
          correctAnswer: 0,
          explanation: "0.3-0.4 g/kg per meal provides sufficient leucine to maximally stimulate muscle protein synthesis."
        },
        {
          id: 3,
          question: "What is the ideal omega-6 to omega-3 fatty acid ratio?",
          options: [
            "1:1 to 4:1",
            "10:1",
            "1:10",
            "20:1"
          ],
          correctAnswer: 0,
          explanation: "A ratio of 1:1 to 4:1 omega-6:omega-3 is considered optimal for reducing inflammation."
        },
        {
          id: 4,
          question: "What is the recommended weekly weight gain rate during a muscle building phase?",
          options: [
            "0.25-0.5% of body weight",
            "1-2% of body weight",
            "0.1-0.2% of body weight",
            "As fast as possible"
          ],
          correctAnswer: 0,
          explanation: "0.25-0.5% weekly maximizes muscle gain while minimizing fat accumulation."
        },
        {
          id: 5,
          question: "When should the last substantial meal be consumed before competition?",
          options: [
            "3-4 hours before",
            "1 hour before",
            "30 minutes before",
            "6 hours before"
          ],
          correctAnswer: 0,
          explanation: "3-4 hours allows for gastric emptying and provides sustained energy without gastrointestinal discomfort."
        },
        {
          id: 6,
          question: "What is body recomposition?",
          options: [
            "Simultaneous fat loss and muscle gain",
            "Only losing fat",
            "Only gaining muscle",
            "Maintaining current body composition"
          ],
          correctAnswer: 0,
          explanation: "Recomposition refers to losing body fat while gaining muscle mass simultaneously."
        },
        {
          id: 7,
          question: "Which protein type is digested most rapidly?",
          options: [
            "Whey protein",
            "Casein protein",
            "Soy protein",
            "Egg protein"
          ],
          correctAnswer: 0,
          explanation: "Whey protein is rapidly digested, making it ideal for post-exercise recovery."
        },
        {
          id: 8,
          question: "What is the primary consideration for fat timing around training?",
          options: [
            "Lower fat pre-training for better gastric emptying",
            "Higher fat pre-training for sustained energy",
            "Fat timing doesn't matter",
            "Avoid all fat around training"
          ],
          correctAnswer: 0,
          explanation: "Lower fat before training supports faster gastric emptying and reduces gastrointestinal discomfort."
        },
        {
          id: 9,
          question: "What is metabolic adaptation during dieting?",
          options: [
            "Reduction in metabolic rate in response to caloric deficit",
            "Increased metabolism from exercise",
            "Adaptation to different food types",
            "Genetic metabolic variations"
          ],
          correctAnswer: 0,
          explanation: "Metabolic adaptation refers to decreases in BMR, NEAT, and TEF during prolonged caloric restriction."
        },
        {
          id: 10,
          question: "What is the loading protocol for creatine supplementation?",
          options: [
            "20 g/day for 5-7 days, then 3-5 g/day maintenance",
            "5 g/day continuously",
            "10 g/day for 2 weeks only",
            "Cyclic loading and unloading"
          ],
          correctAnswer: 0,
          explanation: "20 g/day for 5-7 days rapidly saturates muscles, followed by 3-5 g/day to maintain saturation."
        },
        {
          id: 11,
          question: "What does DIAAS measure?",
          options: [
            "Protein quality based on amino acid digestibility",
            "Carbohydrate absorption rate",
            "Fat digestibility",
            "Vitamin absorption efficiency"
          ],
          correctAnswer: 0,
          explanation: "Digestible Indispensable Amino Acid Score evaluates protein quality based on amino acid content and digestibility."
        },
        {
          id: 12,
          question: "What is training-low in carbohydrate periodization?",
          options: [
            "Training with reduced glycogen stores to enhance adaptations",
            "Training with maximum glycogen stores",
            "Avoiding carbs entirely on training days",
            "Only training when hungry"
          ],
          correctAnswer: 0,
          explanation: "Training-low involves some sessions with reduced glycogen to potentially enhance mitochondrial adaptations."
        },
        {
          id: 13,
          question: "What is the recommended rate of weight loss for athletes?",
          options: [
            "0.5-1% of body weight weekly",
            "2-3% weekly",
            "As fast as possible",
            "No more than 0.25% weekly"
          ],
          correctAnswer: 0,
          explanation: "0.5-1% weekly minimizes muscle loss and performance decrements during fat loss phases."
        },
        {
          id: 14,
          question: "What are diet breaks?",
          options: [
            "Periods of eating at maintenance calories during a deficit",
            "Complete breaks from dieting with no tracking",
            "Only eating favorite foods",
            "Fasting periods during dieting"
          ],
          correctAnswer: 0,
          explanation: "Diet breaks involve temporary returns to maintenance calories to reduce metabolic adaptation and improve adherence."
        },
        {
          id: 15,
          question: "What is time-restricted feeding?",
          options: [
            "Consuming all calories within a specific daily window",
            "Eating only certain types of foods",
            "Restricting calories on specific days",
            "Fasting for multiple days"
          ],
          correctAnswer: 0,
          explanation: "Time-restricted feeding confines eating to a specific window (e.g., 8 hours) each day."
        },
        {
          id: 16,
          question: "What is the leucine threshold for muscle protein synthesis?",
          options: [
            "2-3 grams per meal",
            "5-6 grams per meal",
            "1 gram per meal",
            "10 grams per meal"
          ],
          correctAnswer: 0,
          explanation: "2-3 grams of leucine per meal is needed to maximally stimulate muscle protein synthesis."
        },
        {
          id: 17,
          question: "What is adaptive thermogenesis?",
          options: [
            "Metabolic slowdown during caloric restriction",
            "Increased heat production from exercise",
            "Adaptation to hot environments",
            "Thermic effect of food variation"
          ],
          correctAnswer: 0,
          explanation: "Adaptive thermogenesis refers to reductions in energy expenditure during caloric restriction beyond predicted values."
        },
        {
          id: 18,
          question: "What is the primary purpose of beta-alanine supplementation?",
          options: [
            "Increase muscle carnosine to buffer acid during high-intensity exercise",
            "Directly increase muscle mass",
            "Boost metabolism for fat loss",
            "Improve endurance performance directly"
          ],
          correctAnswer: 0,
          explanation: "Beta-alanine increases muscle carnosine, which helps buffer hydrogen ions during high-intensity exercise."
        },
        {
          id: 19,
          question: "What does NEAT stand for in energy expenditure?",
          options: [
            "Non-Exercise Activity Thermogenesis",
            "Nutritional Energy Assessment Tool",
            "New Exercise Adaptation Technique",
            "Natural Energy Activation Theory"
          ],
          correctAnswer: 0,
          explanation: "NEAT includes all calories burned through daily activities outside of formal exercise."
        },
        {
          id: 20,
          question: "What is the loading protocol for beta-alanine?",
          options: [
            "4-6 g/day for 2-4 weeks",
            "2 g/day continuously",
            "10 g/day for 1 week",
            "Cyclic loading every other month"
          ],
          correctAnswer: 0,
          explanation: "4-6 g/day for 2-4 weeks increases muscle carnosine stores, followed by 2-3 g/day maintenance."
        }
      ]
    },
    {
      id: 3,
      title: "Nutrition for Muscle Hypertrophy",
      completed: false,
      content: `# Module 3: Nutrition for Muscle Hypertrophy

## Fueling Muscle Growth and Development

This module focuses specifically on nutritional strategies to maximize muscle hypertrophy, including optimal nutrient timing, supplementation, and dietary approaches for muscle building.

### Muscle Protein Synthesis Fundamentals

**Muscle Protein Turnover:**
- Balance between muscle protein synthesis (MPS) and breakdown (MPB)
- Net positive protein balance required for growth
- Resistance training stimulates MPS for 24-48 hours
- Nutrition amplifies and extends this response

**Leucine Threshold Concept:**
- Leucine as primary trigger for MPS initiation
- 2-3 g leucine per meal needed to maximize MPS
- Food sources with varying leucine content
- Supplementation strategies to reach threshold

**Protein Timing and Frequency:**
- 4-6 protein feedings daily optimal for hypertrophy
- Even distribution vs. peri-workout emphasis
- Practical meal spacing considerations
- Individual tolerance and schedule adaptations

**Amino Acid Profiles:**
- Essential vs. non-essential amino acids
- Branched-chain amino acids (BCAAs) role
- Complete vs. incomplete protein sources
- Combining plant proteins for completeness

### Caloric Surplus Strategies

**Determining Optimal Surplus:**
- 300-500 kcal above maintenance typically optimal
- Individual response variability
- Monitoring rate of weight gain
- Adjusting based on composition changes

**Lean vs. Traditional Bulking:**
- Lean bulking: Smaller surplus, slower gain, less fat
- Traditional bulking: Larger surplus, faster gain, more fat
- Individual goals and preferences
- Competition timeline considerations

**Surplus Distribution:**
- Primarily from carbohydrates around training
- Adequate protein throughout day
- Moderate fat for hormone production
- Micronutrient density maintenance

**Monitoring Progress:**
- Weekly weigh-ins under consistent conditions
- Regular body composition assessments
- Strength and performance tracking
- Visual and measurement changes

### Nutrient Timing for Hypertrophy

**Pre-Workout Nutrition:**
- 1-2 hours before: Balanced meal with protein and carbs
- 30-60 minutes before: Optional easily digestible carbs/protein
- Individual tolerance testing essential
- Hydration status optimization

**Intra-Workout Considerations:**
- Typically unnecessary for hypertrophy training
- Exceptions: Very long sessions, fasted training
- BCAAs or EAAs if training fasted
- Hydration maintenance

**Post-Workout Anabolic Window:**
- Enhanced nutrient sensitivity for 1-2 hours post-training
- Rapidly digestible protein (whey) ideal
- Carbohydrates to replenish glycogen and enhance uptake
- Practical implementation strategies

**Evening and Overnight Nutrition:**
- Casein protein before bed for sustained amino acid release
- Slow-digesting protein sources at dinner
- Minimizing large meals close to bedtime
- Hydration without sleep disruption

### Supplementation for Hypertrophy

**Evidence-Based Hypertrophy Supplements:**
- Creatine monohydrate: Loading and maintenance protocols
- Protein powders: Types, timing, and dosages
- Beta-alanine: For high-volume training support
- HMB: For untrained or older individuals

**Situational Supplements:**
- BCAAs: During fasted training or between meals
- Glutamine: Gut health and immune support during intense training
- Omega-3s: Inflammation reduction and recovery
- Vitamin D: Hormone optimization and immune function

**Timing Protocols:**
- Creatine: Post-workout or with meals
- Protein: Post-workout, between meals, bedtime
- Beta-alanine: Divided doses throughout day
- Pre-workout: 30-60 minutes before training

**Safety and Quality:**
- Third-party testing importance
- Avoiding proprietary blends with hidden ingredients
- Appropriate dosage adherence
- Cycling considerations if applicable

### Training-Nutrition Integration

**Volume and Intensity Considerations:**
- Higher volume training increases carbohydrate needs
- Higher intensity increases overall calorie needs
- Periodization of nutrition with training cycles
- Deload week nutrition adjustments

**Recovery Nutrition:**
- 24-48 hour window for nutrient sensitivity
- Emphasis on sleep and stress management
- Active recovery day nutrition
- Inflammation management through nutrition

**Overtraining Prevention:**
- Nutritional signs of overtraining
- Increased protein and antioxidant needs
- Recovery nutrition emphasis
- When to reduce training volume

**Injury Rehabilitation Nutrition:**
- Maintaining muscle during reduced activity
- Increased protein to support healing
- Anti-inflammatory nutrition strategies
- Gradual return to full training nutrition

### Special Populations Considerations

**Natural vs. Enhanced Athletes:**
- Different protein and calorie requirements
- Recovery capacity differences
- Realistic expectations setting
- Ethical considerations

**Female Hypertrophy Considerations:**
- Hormonal cycle effects on nutrition needs
- Protein requirements similar to males per kg
- Realistic rate of muscle gain expectations
- Body image and relationship with food

**Masters Athletes (40+):**
- Higher protein requirements (1.6-2.2 g/kg)
- Leucine threshold may be higher
- Recovery considerations
- Joint and connective tissue support

**Youth Athletes:**
- Growth and development priorities
- Avoiding overly restrictive approaches
- Education on proper nutrition
- Parental involvement considerations

### Dietary Approaches Comparison

**Traditional Bodybuilding Approach:**
- Frequent meals (6-8 daily)
- Clean foods emphasis
- Structured meal timing
- Supplement regimen

**Flexible Dieting/IIFYM:**
- Macronutrient targets focus
- Inclusion of all foods in moderation
- Individual preference accommodation
- Long-term adherence considerations

**Plant-Based Approaches:**
- Protein combining strategies
- Micronutrient considerations
- Supplementation needs
- Meal planning for adequate calories

**Mediterranean/Whole Foods:**
- Emphasis on food quality
- Anti-inflammatory benefits
- Long-term health focus
- Performance applications

### Plateau Breaking Strategies

**Nutritional Periodization:**
- Changing calorie intake periodically
- Macro cycling strategies
- Diet breaks implementation
- Refeed days for metabolic refresh

**Training-Nutrition Mismatch Identification:**
- Adjusting nutrition for changed training
- Recovery nutrition optimization
- Overtraining vs. under-recovery differentiation
- Deload implementation

**Metabolic Adaptation Management:**
- Reverse dieting strategies
- Maintenance phase implementation
- Metabolic flexibility development
- Patience and consistency emphasis

**Psychological Factors:**
- Adherence challenges
- Relationship with food and body
- Social support importance
- Professional help when needed

### Competition Preparation Nutrition

**Peak Week Strategies:**
- Sodium manipulation protocols
- Carbohydrate loading variations
- Water loading and depletion
- Peak day nutrition

**Posing and Pump-Up Nutrition:**
- Pre-stage meal strategies
- Intra-backstage nutrition
- Pump-up supplement protocols
- Individual response testing

**Post-Show Recovery:**
- Gradual return to normal eating
- Rehydration and electrolyte balance
- Digestive system adaptation
- Psychological adjustment

**Off-Season Planning:**
- Reverse dieting implementation
- Muscle building phase planning
- Health marker improvement
- Next competition timeline

### Monitoring and Assessment

**Body Composition Tracking:**
- Regular DEXA or similar assessments
- Progress photos under consistent conditions
- Circumference measurements
- Clothing fit changes

**Performance Metrics:**
- Strength progression tracking
- Training volume tolerance
- Recovery rate assessment
- Energy levels monitoring

**Blood Biomarkers:**
- Hormone panels when appropriate
- Micronutrient status
- Inflammation markers
- Metabolic health indicators

**Subjective Measures:**
- Energy and motivation levels
- Sleep quality
- Recovery between sessions
- Mood and cognitive function

### Professional Practice Considerations

**Client Assessment Protocols:**
- Comprehensive intake questionnaires
- Current diet analysis
- Goal setting and expectation management
- Medical history consideration

**Individualized Plan Development:**
- Macronutrient calculation methods
- Meal timing strategies
- Supplement recommendations
- Education and support planning

**Monitoring and Adjustment:**
- Regular check-in protocols
- Progress assessment methods
- Plan adjustment criteria
- Communication strategies

**Scope of Practice Boundaries:**
- When to refer to other professionals
- Medical condition management
- Eating disorder recognition and referral
- Legal and ethical considerations

Mastering hypertrophy nutrition requires understanding the intricate relationship between training stimulus, nutrient timing, recovery processes, and individual variability to develop optimal strategies for muscle growth.`,
      
      quiz: [
        {
          id: 1,
          question: "What is net protein balance?",
          options: [
            "Muscle protein synthesis minus muscle protein breakdown",
            "Total protein intake minus protein excretion",
            "Animal protein minus plant protein intake",
            "Pre-workout protein minus post-workout protein"
          ],
          correctAnswer: 0,
          explanation: "Net positive protein balance (MPS > MPB) is required for muscle growth to occur."
        },
        {
          id: 2,
          question: "What is the leucine threshold for maximal muscle protein synthesis stimulation?",
          options: [
            "2-3 grams per meal",
            "1 gram per meal",
            "5 grams per meal",
            "10 grams per meal"
          ],
          correctAnswer: 0,
          explanation: "2-3 grams of leucine per meal is needed to maximally activate the mTOR pathway for muscle protein synthesis."
        },
        {
          id: 3,
          question: "What is the optimal caloric surplus for muscle building with minimal fat gain?",
          options: [
            "300-500 kcal above maintenance",
            "100-200 kcal above maintenance",
            "500-700 kcal above maintenance",
            "1000+ kcal above maintenance"
          ],
          correctAnswer: 0,
          explanation: "A 300-500 kcal surplus typically maximizes muscle gain while minimizing excess fat accumulation."
        },
        {
          id: 4,
          question: "Which protein type is ideal before bed for sustained amino acid release?",
          options: [
            "Casein protein",
            "Whey protein",
            "Soy protein",
            "Rice protein"
          ],
          correctAnswer: 0,
          explanation: "Casein forms a gel in the stomach, providing slow, sustained amino acid release throughout the night."
        },
        {
          id: 5,
          question: "What is the post-workout anabolic window?",
          options: [
            "Period of enhanced nutrient sensitivity after training",
            "Time when you must eat immediately after training",
            "Only the first 30 minutes after training",
            "A marketing concept with no scientific basis"
          ],
          correctAnswer: 0,
          explanation: "While not as narrow as once thought, nutrient sensitivity is enhanced for 1-2 hours post-training."
        },
        {
          id: 6,
          question: "What is the loading protocol for creatine monohydrate?",
          options: [
            "20 g/day for 5-7 days, then 3-5 g/day maintenance",
            "5 g/day continuously",
            "10 g/day for 2 weeks only",
            "Cyclic loading every month"
          ],
          correctAnswer: 0,
          explanation: "20 g/day for 5-7 days rapidly saturates muscles, followed by 3-5 g/day to maintain saturation."
        },
        {
          id: 7,
          question: "What distinguishes lean bulking from traditional bulking?",
          options: [
            "Smaller caloric surplus and slower weight gain",
            "Different food choices only",
            "Higher protein intake",
            "Shorter duration"
          ],
          correctAnswer: 0,
          explanation: "Lean bulking uses a smaller surplus for slower, leaner gains vs. traditional bulking's larger surplus and faster gains."
        },
        {
          id: 8,
          question: "How long does resistance training stimulate muscle protein synthesis?",
          options: [
            "24-48 hours",
            "2-4 hours",
            "Only during the workout",
            "1 week continuously"
          ],
          correctAnswer: 0,
          explanation: "Resistance training elevates muscle protein synthesis for approximately 24-48 hours post-exercise."
        },
        {
          id: 9,
          question: "What are BCAAs?",
          options: [
            "Branched-chain amino acids: leucine, isoleucine, valine",
            "Basic carbohydrate amino acids",
            "Body composition assessment amino acids",
            "Before competition amino acids"
          ],
          correctAnswer: 0,
          explanation: "BCAAs are leucine, isoleucine, and valine - three essential amino acids with specific roles in muscle metabolism."
        },
        {
          id: 10,
          question: "What is reverse dieting?",
          options: [
            "Gradually increasing calories after a deficit",
            "Eating only at night",
            "Consuming foods in reverse order",
            "Fasting before eating"
          ],
          correctAnswer: 0,
          explanation: "Reverse dieting involves slowly increasing calories to restore metabolism after prolonged dieting."
        },
        {
          id: 11,
          question: "What protein source is most rapidly digested?",
          options: [
            "Whey protein",
            "Casein protein",
            "Egg protein",
            "Beef protein"
          ],
          correctAnswer: 0,
          explanation: "Whey protein is rapidly digested and absorbed, making it ideal for post-workout nutrition."
        },
        {
          id: 12,
          question: "What is HMB and who benefits most from it?",
          options: [
            "Metabolite of leucine that may benefit untrained or older individuals",
            "Hormone that directly builds muscle",
            "Carbohydrate that spares protein",
            "Fat that increases testosterone"
          ],
          correctAnswer: 0,
          explanation: "HMB (β-hydroxy β-methylbutyrate) is a leucine metabolite that may benefit those new to training or older adults."
        },
        {
          id: 13,
          question: "What are the signs of overtraining from a nutritional perspective?",
          options: [
            "Persistent fatigue, increased illness, poor recovery",
            "Increased appetite only",
            "Weight gain automatically",
            "No nutritional signs exist"
          ],
          correctAnswer: 0,
          explanation: "Nutritional signs include persistent fatigue, frequent illness, poor recovery, and changes in appetite."
        },
        {
          id: 14,
          question: "What is flexible dieting/IIFYM?",
          options: [
            "Focus on macronutrient targets with food flexibility",
            "Eating whatever you want without tracking",
            "Only eating clean foods",
            "Fasting and feasting cycles"
          ],
          correctAnswer: 0,
          explanation: "IIFYM (If It Fits Your Macros) focuses on hitting macronutrient targets while allowing food choice flexibility."
        },
        {
          id: 15,
          question: "What are diet breaks?",
          options: [
            "Periods of eating at maintenance during a deficit",
            "Complete breaks from tracking food",
            "Only eating favorite foods",
            "Week-long fasting periods"
          ],
          correctAnswer: 0,
          explanation: "Diet breaks involve temporary returns to maintenance calories to reduce metabolic adaptation and improve adherence."
        },
        {
          id: 16,
          question: "What is sodium manipulation during peak week?",
          options: [
            "Strategic variation of sodium intake to alter water balance",
            "Complete elimination of all sodium",
            "Doubling normal sodium intake",
            "Only using sea salt instead of table salt"
          ],
          correctAnswer: 0,
          explanation: "Sodium manipulation involves strategic increases and decreases to alter subcutaneous water retention."
        },
        {
          id: 17,
          question: "How do protein needs change with age?",
          options: [
            "Older adults need more protein per kg body weight",
            "Protein needs decrease with age",
            "Age doesn't affect protein needs",
            "Only distribution changes, not total amount"
          ],
          correctAnswer: 0,
          explanation: "Older adults may need 1.6-2.2 g/kg due to anabolic resistance and reduced efficiency of protein utilization."
        },
        {
          id: 18,
          question: "What is metabolic adaptation?",
          options: [
            "Reduction in metabolic rate during caloric restriction",
            "Adaptation to different types of food",
            "Increased metabolism from exercise",
            "Genetic variations in metabolism"
          ],
          correctAnswer: 0,
          explanation: "Metabolic adaptation refers to reductions in BMR, NEAT, and TEF during prolonged caloric restriction."
        },
        {
          id: 19,
          question: "What is the purpose of refeed days?",
          options: [
            "Temporarily increase calories to reduce metabolic adaptation",
            "Eat only protein for a day",
            "Fast for 24 hours",
            "Only eat fruits and vegetables"
          ],
          correctAnswer: 0,
          explanation: "Refeed days involve temporary calorie increases, primarily from carbohydrates, to restore leptin and reduce adaptation."
        },
        {
          id: 20,
          question: "What distinguishes essential from non-essential amino acids?",
          options: [
            "Essential must come from diet, non-essential can be synthesized",
            "Essential are more important for muscle growth",
            "Non-essential are not needed by the body",
            "They have different chemical structures only"
          ],
          correctAnswer: 0,
          explanation: "Essential amino acids cannot be synthesized by the body and must be obtained from the diet."
        }
      ]
    },
    {
      id: 4,
      title: "Nutrition for Fat Loss and Leanness",
      completed: false,
      content: `# Module 4: Nutrition for Fat Loss and Leanness

## Strategic Approaches to Body Fat Reduction

This module covers evidence-based nutritional strategies for fat loss while preserving muscle mass, achieving leanness, and maintaining metabolic health.

### Energy Deficit Fundamentals

**Creating a Caloric Deficit:**
- 300-500 kcal below maintenance typically optimal
- Individual response variability
- Rate of weight loss targets (0.5-1% body weight weekly)
- Adjusting based on progress and adherence

**Protein Prioritization:**
- Higher protein intake during deficit (1.6-2.2 g/kg)
- Preserves lean mass during weight loss
- Increases satiety and thermic effect
- Distribute evenly throughout day

**Carbohydrate Management:**
- Maintain around training for performance
- Reduce on rest or low-activity days
- Individual tolerance and preference
- Fiber maintenance for gut health

**Fat Considerations:**
- Maintain minimum for hormone production (0.8-1.0 g/kg)
- Focus on quality sources
- Individual tolerance and satiety effects
- Essential fatty acid maintenance

### Metabolic Adaptation Management

**Understanding Metabolic Adaptation:**
- Reductions in BMR, NEAT, and TEF during dieting
- Adaptive thermogenesis magnitude varies individually
- Hormonal changes (leptin, thyroid, sex hormones)
- Psychological and behavioral adaptations

**Diet Breaks and Refed Days:**
- Temporary returns to maintenance calories
- Duration: 1-2 weeks at maintenance
- Frequency: Every 4-12 weeks depending on deficit size
- Benefits: Metabolic rate restoration, adherence improvement

**Reverse Dieting Strategies:**
- Gradual calorie increase post-diet
- Rate: 50-100 kcal increase weekly
- Monitoring weight and body composition response
- Transition to maintenance phase

**Metabolic Flexibility Development:**
- Ability to switch between fuel sources
- Training both carbohydrate and fat oxidation
- Avoiding extreme dietary approaches long-term
- Balanced macronutrient intake periods

### Nutrient Timing for Fat Loss

**Training-Day vs. Rest-Day Nutrition:**
- Higher carbs around training on workout days
- Lower carbs, higher fat/protein on rest days
- Total calories consistent or slightly lower on rest days
- Individual schedule adaptation

**Fasted vs. Fed Training:**
- Fasted training may increase fat oxidation during exercise
- No significant long-term fat loss advantage shown
- Individual preference and performance considerations
- Post-workout nutrition timing implications

**Meal Frequency Considerations:**
- No metabolic advantage to increased meal frequency
- Individual hunger management and adherence
- Social and practical considerations
- Protein distribution throughout day more important than frequency

**Evening and Late-Night Eating:**
- Total daily calories matter more than timing
- Individual digestive tolerance considerations
- Sleep quality impact assessment
- Practical lifestyle considerations

### Appetite and Satiety Management

**Satiety Index of Foods:**
- Protein highest satiety per calorie
- High-fiber foods increase satiety
- Volume and water content effects
- Energy density considerations

**Hunger Hormone Regulation:**
- Ghrelin (hunger hormone) management
- Leptin (satiety hormone) considerations during dieting
- Insulin's role in hunger and satiety
- Practical dietary strategies for hormone optimization

**Mindful Eating Practices:**
- Eating speed reduction
- Distraction minimization during meals
- Hunger and fullness awareness
- Emotional eating recognition and management

**Practical Satiety Strategies:**
- Protein at each meal
- High-volume, low-calorie foods
- Adequate hydration
- Fiber from vegetables and fruits

### Dietary Approaches Comparison

**Moderate Carbohydrate, Higher Protein:**
- Balanced approach for most individuals
- Maintains training performance
- Sustainable long-term
- Flexible food choices

**Lower Carbohydrate Approaches:**
- May increase fat oxidation
- Individual response variability
- Performance implications for high-intensity exercise
- Long-term sustainability considerations

**Intermittent Fasting Protocols:**
- Time-restricted feeding windows
- Alternate day fasting variations
- Individual adherence and preference
- Performance and recovery considerations

**Plant-Based Approaches:**
- Typically higher fiber and volume
- Protein adequacy planning
- Micronutrient considerations
- Satiety and adherence factors

### Supplementation for Fat Loss

**Evidence-Based Fat Loss Supplements:**
- Caffeine: Appetite suppression, energy expenditure increase
- Green tea extract: Mild metabolic increase, possible fat oxidation
- Protein powder: Satiety, muscle preservation
- Fiber supplements: Satiety, digestive health

**Situational Considerations:**
- Stimulant tolerance and sensitivity
- Sleep quality considerations
- Individual response variability
- Cost-benefit analysis

**Safety and Quality:**
- Avoiding proprietary blends with hidden ingredients
- Third-party testing importance
- Appropriate dosage adherence
- Cycling considerations

**Realistic Expectations:**
- Supplements as minor adjuncts to diet and exercise
- Marketing hype vs. scientific evidence
- Individual response variability
- Long-term sustainability focus

### Plateau Breaking Strategies

**Nutritional Adjustments:**
- Small calorie reductions (100-200 kcal)
- Macronutrient ratio adjustments
- Meal timing changes
- Food variety introduction

**Training-Nutrition Integration:**
- Adjusting nutrition for changed training
- Recovery optimization
- Deload week implementation
- Overtraining vs. under-recovery differentiation

**Metabolic Refresh Strategies:**
- Diet break implementation
- Reverse dieting followed by new deficit
- Maintenance phase of 4-8 weeks
- Patience and consistency emphasis

**Psychological Factors:**
- Adherence assessment
- Stress and sleep management
- Social support optimization
- Professional help when needed

### Maintaining Leanness

**Transition to Maintenance:**
- Gradual calorie increase
- Monitoring weight response
- Macronutrient adjustment
- Long-term habit establishment

**Set Point Theory Considerations:**
- Body's resistance to weight change
- Hormonal and metabolic adaptations
- Realistic weight maintenance ranges
- Individual variability in set point

**Weight Maintenance Strategies:**
- Regular monitoring (weekly weigh-ins)
- Flexible boundaries with occasional indulgences
- Return to baseline after deviations
- Ongoing attention to nutrition and activity

**Lifestyle Integration:**
- Sustainable habit development
- Social life integration
- Travel and special occasion strategies
- Long-term health focus beyond aesthetics

### Health Considerations During Fat Loss

**Micronutrient Adequacy:**
- Ensuring nutrient density in reduced calories
- Potential need for supplementation
- Regular blood work consideration
- Food variety importance

**Hormone Health:**
- Sex hormone considerations during prolonged deficit
- Thyroid function monitoring
- Cortisol management through stress reduction
- Sleep quality optimization

**Bone Health:**
- Adequate calcium and vitamin D intake
- Weight-bearing exercise maintenance
- Avoiding excessive leanness long-term
- Regular bone density monitoring when appropriate

**Psychological Health:**
- Body image considerations
- Relationship with food maintenance
- Social and emotional well-being
- Professional support when needed

### Special Populations

**Female-Specific Considerations:**
- Menstrual cycle effects on hunger and metabolism
- Hormonal changes during prolonged deficit
- Realistic rate of fat loss expectations
- Postpartum considerations

**Masters Population:**
- Slower metabolic rate considerations
- Higher protein requirements for preservation
- Joint and bone health considerations
- Realistic expectations and patience

**Athletes with Weight Classes:**
- Healthy weight cut strategies
- Rehydration and refueling protocols
- Performance maintenance during deficit
- Long-term health considerations

**Formerly Obese Individuals:**
- Metabolic adaptation magnitude
- Long-term maintenance strategies
- Psychological considerations
- Body composition vs. scale weight focus

### Professional Practice Considerations

**Client Assessment:**
- Comprehensive history including previous diet attempts
- Metabolic adaptation consideration
- Psychological factors assessment
- Realistic goal setting

**Individualized Plan Development:**
- Appropriate deficit size determination
- Macronutrient distribution planning
- Meal timing and frequency considerations
- Supplement recommendations if appropriate

**Monitoring and Support:**
- Regular progress assessment
- Adjustments based on response
- Adherence support strategies
- Long-term maintenance planning

**Ethical Considerations:**
- Promoting sustainable approaches
- Avoiding extreme methods
- Recognizing eating disorder risks
- Appropriate referral when needed

Mastering fat loss nutrition requires balancing energy deficit with nutrient adequacy, performance maintenance, metabolic health preservation, and psychological well-being for sustainable results.`,
      
      quiz: [
        {
          id: 1,
          question: "What is the optimal rate of weight loss for preserving muscle mass?",
          options: [
            "0.5-1% of body weight weekly",
            "2-3% weekly",
            "As fast as possible",
            "No more than 0.25% weekly"
          ],
          correctAnswer: 0,
          explanation: "0.5-1% weekly minimizes muscle loss and metabolic adaptation while allowing sustainable progress."
        },
        {
          id: 2,
          question: "Why is higher protein intake important during fat loss?",
          options: [
            "Preserves lean mass, increases satiety and thermic effect",
            "Directly burns more fat",
            "Allows unlimited calorie intake",
            "Is required for all fat loss to occur"
          ],
          correctAnswer: 0,
          explanation: "Higher protein preserves muscle, increases fullness, and has higher thermic effect than carbs or fat."
        },
        {
          id: 3,
          question: "What is metabolic adaptation?",
          options: [
            "Reduction in metabolic rate during caloric restriction",
            "Increased metabolism from exercise",
            "Adaptation to different food types",
            "Genetic metabolic variations"
          ],
          correctAnswer: 0,
          explanation: "Metabolic adaptation includes reductions in BMR, NEAT, and TEF during prolonged calorie restriction."
        },
        {
          id: 4,
          question: "What are diet breaks?",
          options: [
            "Temporary returns to maintenance calories during a deficit",
            "Complete breaks from tracking food",
            "Only eating favorite foods",
            "Week-long fasting periods"
          ],
          correctAnswer: 0,
          explanation: "Diet breaks involve eating at maintenance for 1-2 weeks to reduce metabolic adaptation and improve adherence."
        },
        {
          id: 5,
          question: "What is reverse dieting?",
          options: [
            "Gradually increasing calories after a deficit",
            "Eating only at night",
            "Consuming foods in reverse order",
            "Fasting before eating"
          ],
          correctAnswer: 0,
          explanation: "Reverse dieting slowly increases calories to restore metabolism and transition to maintenance after dieting."
        },
        {
          id: 6,
          question: "Which macronutrient has the highest satiety per calorie?",
          options: [
            "Protein",
            "Carbohydrates",
            "Fat",
            "Alcohol"
          ],
          correctAnswer: 0,
          explanation: "Protein increases satiety more than carbs or fat, helping with appetite control during calorie restriction."
        },
        {
          id: 7,
          question: "What is metabolic flexibility?",
          options: [
            "Ability to switch between carbohydrate and fat oxidation",
            "Eating different types of foods",
            "Changing metabolism at will",
            "Genetic ability to lose weight easily"
          ],
          correctAnswer: 0,
          explanation: "Metabolic flexibility refers to efficient switching between fuel sources based on availability and demand."
        },
        {
          id: 8,
          question: "What is the primary benefit of time-restricted feeding?",
          options: [
            "Natural reduction in calorie intake for some individuals",
            "Increased metabolism significantly",
            "Automatic muscle preservation",
            "Superior to all other approaches"
          ],
          correctAnswer: 0,
          explanation: "The main benefit is natural calorie reduction for those who eat less within a restricted window."
        },
        {
          id: 9,
          question: "What is ghrelin?",
          options: [
            "Hunger hormone that stimulates appetite",
            "Satiety hormone that reduces appetite",
            "Hormone that increases metabolism",
            "Stress hormone affecting weight"
          ],
          correctAnswer: 0,
          explanation: "Ghrelin is produced in the stomach and stimulates appetite, increasing before meals."
        },
        {
          id: 10,
          question: "What are realistic expectations for fat loss supplements?",
          options: [
            "Minor adjuncts to diet and exercise with small effects",
            "Magic solutions that work without effort",
            "Primary drivers of fat loss",
            "Only effective for certain genetic types"
          ],
          correctAnswer: 0,
          explanation: "Supplements provide minor additional benefits and should not replace proper diet and exercise."
        },
        {
          id: 11,
          question: "What is adaptive thermogenesis?",
          options: [
            "Metabolic slowdown beyond predicted during calorie restriction",
            "Increased heat production from exercise",
            "Adaptation to hot environments",
            "Thermic effect of food variation"
          ],
          correctAnswer: 0,
          explanation: "Adaptive thermogenesis is metabolic adaptation beyond what would be predicted from weight loss alone."
        },
        {
          id: 12,
          question: "What is leptin?",
          options: [
            "Satiety hormone that decreases during dieting",
            "Hunger hormone that increases during dieting",
            "Thyroid hormone regulating metabolism",
            "Stress hormone affecting fat storage"
          ],
          correctAnswer: 0,
          explanation: "Leptin signals satiety and decreases during calorie restriction, increasing hunger and reducing metabolism."
        },
        {
          id: 13,
          question: "What distinguishes evidence-based fat loss supplements?",
          options: [
            "Scientific research supporting modest effects",
            "Marketing claims without evidence",
            "Large dramatic effects promised",
            "Only available by prescription"
          ],
          correctAnswer: 0,
          explanation: "Evidence-based supplements have research showing modest, reproducible effects in controlled studies."
        },
        {
          id: 14,
          question: "What is set point theory?",
          options: [
            "Body's resistance to weight change away from a preferred range",
            "Exact weight everyone should maintain",
            "Genetic determination of exact weight",
            "Myth with no scientific basis"
          ],
          correctAnswer: 0,
          explanation: "Set point theory suggests the body defends a weight range through metabolic and behavioral adaptations."
        },
        {
          id: 15,
          question: "What is the primary factor in fat loss?",
          options: [
            "Sustained caloric deficit",
            "Specific food avoidance",
            "Meal timing precision",
            "Supplement use"
          ],
          correctAnswer: 0,
          explanation: "A sustained calorie deficit is necessary for fat loss, regardless of diet approach or timing."
        },
        {
          id: 16,
          question: "How do refeed days differ from diet breaks?",
          options: [
            "Refeeds are 1-2 days, diet breaks are 1-2 weeks",
            "Refeeds involve overeating, diet breaks don't",
            "Only diet breaks include exercise changes",
            "They are the same thing"
          ],
          correctAnswer: 0,
          explanation: "Refeed days are 1-2 days of increased calories, while diet breaks are longer periods at maintenance."
        },
        {
          id: 17,
          question: "What is energy density?",
          options: [
            "Calories per weight or volume of food",
            "How energetic food makes you feel",
            "Nutrient content relative to calories",
            "Speed of calorie absorption"
          ],
          correctAnswer: 0,
          explanation: "Energy-dense foods have many calories per gram, while low energy-dense foods have few calories per gram."
        },
        {
          id: 18,
          question: "What is mindful eating?",
          options: [
            "Paying attention to eating experience without distraction",
            "Only eating certain mindful foods",
            "Eating very slowly always",
            "Meditating while eating"
          ],
          correctAnswer: 0,
          explanation: "Mindful eating involves focused attention on the eating experience, hunger cues, and food enjoyment."
        },
        {
          id: 19,
          question: "Why might women need different fat loss approaches?",
          options: [
            "Hormonal cycle affects hunger, metabolism, and recovery",
            "They can't lose fat as effectively as men",
            "They need completely different methods",
            "Only psychological differences exist"
          ],
          correctAnswer: 0,
          explanation: "Menstrual cycle hormones affect appetite, energy expenditure, and recovery, requiring tailored approaches."
        },
        {
          id: 20,
          question: "What is the most sustainable approach to fat loss?",
          options: [
            "Moderate deficit with balanced nutrition and lifestyle integration",
            "Extreme restriction for rapid results",
            "Elimination of entire food groups",
            "Following the latest fad diet strictly"
          ],
          correctAnswer: 0,
          explanation: "Sustainability comes from moderate approaches that can be maintained long-term and integrated into lifestyle."
        }
      ]
    },
    {
      id: 5,
      title: "Gut Health and Performance",
      completed: false,
      content: `# Module 5: Gut Health and Performance

## The Gut-Performance Connection

This module explores the critical relationship between gastrointestinal health, nutrient absorption, immune function, and athletic performance, providing strategies for optimizing gut health in athletes.

### Gastrointestinal Anatomy and Function

**Digestive System Overview:**
- Mouth and esophagus: Initial breakdown and transport
- Stomach: Acid and enzyme secretion, protein digestion
- Small intestine: Nutrient absorption primary site
- Large intestine: Water absorption, fermentation, waste formation

**Gut-Associated Lymphoid Tissue (GALT):**
- Largest immune organ in the body
- 70-80% of immune cells reside in gut
- Barrier function and pathogen defense
- Immune tolerance development

**Enteric Nervous System:**
- "Second brain" with 100 million neurons
- Independent of central nervous system
- Regulates motility, secretion, blood flow
- Gut-brain axis communication

**Microbiome Composition:**
- 100 trillion microorganisms (bacteria, viruses, fungi)
- 10 times more microbial cells than human cells
- Unique individual composition
- Metabolic and protective functions

### Gut Health and Athletic Performance

**Nutrient Absorption Optimization:**
- Healthy gut maximizes nutrient uptake
- Inflammation impairs absorption
- Specific transporters for different nutrients
- Competition between nutrients for absorption

**Immune Function Connection:**
- Overtraining increases intestinal permeability
- Increased infection risk during intense training
- Gut barrier integrity maintenance
- Anti-inflammatory microbial metabolites

**Inflammation and Recovery:**
- Exercise-induced gut permeability
- Systemic inflammation from gut issues
- Recovery time implications
- Chronic inflammation and performance

**Energy Production:**
- Short-chain fatty acid production from fiber
- Microbial contribution to energy harvest
- Vitamin production (K, B vitamins)
- Metabolic endotoxemia prevention

### Common Gastrointestinal Issues in Athletes

**Exercise-Induced Gastrointestinal Syndrome:**
- Reduced blood flow to gut during exercise
- Increased permeability and inflammation
- Symptoms: Nausea, cramping, diarrhea, reflux
- Severity related to exercise intensity and duration

**Food Intolerances and Sensitivities:**
- Lactose intolerance prevalence
- FODMAP sensitivities
- Gluten sensitivity vs. celiac disease
- Individual identification and management

**Leaky Gut Syndrome:**
- Increased intestinal permeability
- Allows passage of undigested particles
- Associated with systemic inflammation
- Contributing factors and management

**Small Intestinal Bacterial Overgrowth (SIBO):**
- Excessive bacteria in small intestine
- Symptoms: Bloating, gas, diarrhea, malabsorption
- Diagnosis and treatment approaches
- Prevention strategies

### Gut Microbiome and Performance

**Microbiome Composition in Athletes:**
- Generally higher diversity than sedentary individuals
- Increased beneficial species in some studies
- Sport-specific differences observed
- Impact of training volume and intensity

**Microbial Metabolites and Performance:**
- Short-chain fatty acids (butyrate, propionate, acetate)
- Anti-inflammatory effects
- Energy source for colonocytes
- Impact on systemic metabolism

**Probiotic and Performance Research:**
- Specific strains for different benefits
- Immune function enhancement
- Reduction of upper respiratory infections
- Performance outcome studies

**Prebiotics and Athletic Performance:**
- Fiber types and fermentation
- Selective growth of beneficial bacteria
- Gradual introduction to avoid discomfort
- Performance and recovery implications

### Nutrition for Gut Health

**Fiber Types and Functions:**
- Soluble fiber: Viscous, fermented, cholesterol lowering
- Insoluble fiber: Bulking, transit time reduction
- Resistant starch: Fermented in colon, butyrate production
- Gradual increase to avoid discomfort

**Fermented Foods:**
- Yogurt, kefir, sauerkraut, kimchi, kombucha
- Natural source of probiotics
- May improve lactose digestion
- Individual tolerance considerations

**Polyphenol-Rich Foods:**
- Berries, dark chocolate, green tea, red wine
- Prebiotic effects on microbiome
- Anti-inflammatory properties
- Antioxidant benefits

**Hydration and Gut Function:**
- Water essential for digestion and motility
- Electrolyte balance importance
- Individual fluid needs variation
- Monitoring hydration status

### Supplementation for Gut Health

**Probiotic Supplementation:**
- Strain-specific effects (Lactobacillus, Bifidobacterium)
- CFU count considerations
- Timing and duration
- Quality and viability assurance

**Prebiotic Supplements:**
- Inulin, FOS, GOS
- Gradual introduction to avoid gas and bloating
- Combination with probiotics (synbiotics)
- Individual tolerance assessment

**Digestive Enzymes:**
- Lactase for lactose intolerance
- Proteases, lipases, carbohydrases
- Conditions of use (pancreatic insufficiency, etc.)
- Timing with meals

**Glutamine and Gut Barrier:**
- Primary fuel for intestinal cells
- May support barrier function during stress
- Dosage and timing considerations
- Evidence evaluation

**Omega-3 Fatty Acids:**
- Anti-inflammatory effects
- May support gut barrier integrity
- Food sources vs. supplementation
- Quality considerations

### Training the Gut

**Increasing Carbohydrate Tolerance:**
- Gradual increase in intake during exercise
- Multiple transportable carbohydrate practice
- Individual ceiling identification
- Reducing gastrointestinal distress

**Race/Event Simulation:**
- Practicing competition nutrition during training
- Identifying individual tolerance
- Adjusting based on experience
- Building confidence in nutrition plan

**Heat Acclimation and Gut Function:**
- Improved blood flow distribution with acclimation
- Reduced gastrointestinal symptoms
- Practice in similar conditions to competition
- Individual response variability

**Travel Considerations:**
- Jet lag effects on digestion
- Foreign food and water adaptation
- Bringing familiar foods when possible
- Pre-travel gut health optimization

### Individual Assessment and Testing

**Symptom Monitoring:**
- Food and symptom diaries
- Identifying patterns and triggers
- Exercise intensity and duration effects
- Environmental factor consideration

**Elimination Diets:**
- Systematic approach to identify intolerances
- FODMAP elimination and reintroduction
- Gluten elimination when appropriate
- Professional guidance recommended

**Laboratory Testing:**
- Stool analysis for microbiome assessment
- Breath testing for SIBO and intolerances
- Blood tests for inflammation and antibodies
- When testing is appropriate

**Working with Healthcare Professionals:**
- Gastroenterologist referral when needed
- Registered dietitian collaboration
- Functional medicine approaches
- Integrative care coordination

### Practical Implementation Strategies

**Meal Timing Around Training:**
- 3-4 hours before for solid meals
- 1-2 hours for liquid/snack if needed
- Individual tolerance testing
- Competition day practice

**Food Choices for Training Days:**
- Lower fiber before intense sessions
- Familiar, well-tolerated foods
- Adequate hydration
- Post-training recovery nutrition

**Travel Nutrition Planning:**
- Researching food options at destination
- Bringing safe snacks and supplements
- Water safety considerations
- Jet lag management strategies

**Stress Management:**
- Psychological stress impact on gut function
- Relaxation techniques
- Adequate sleep importance
- Balancing training and recovery

### Special Considerations

**Endurance Athletes:**
- High carbohydrate intake challenges
- Hydration and electrolyte balance
- Race day gastrointestinal distress prevention
- Recovery nutrition for gut repair

**Strength/Power Athletes:**
- High protein intake considerations
- Creatine and other supplement effects
- Weight class management and gut health
- Competition day strategies

**Female Athletes:**
- Hormonal cycle effects on gut function
- Iron supplementation considerations
- Body composition goals and gut health
- Pregnancy and postpartum considerations

**Masters Athletes:**
- Age-related digestive changes
- Medication interactions
- Protein digestion efficiency
- Microbiome changes with age

### Long-Term Gut Health Maintenance

**Dietary Diversity:**
- Wide variety of plant foods
- Different fiber types
- Various protein sources
- Seasonal eating patterns

**Lifestyle Factors:**
- Stress management techniques
- Adequate sleep quantity and quality
- Regular physical activity appropriate to individual
- Social connections and community

**Avoiding Gut Disruptors:**
- Excessive alcohol consumption
- Non-steroidal anti-inflammatory drugs (NSAIDs)
- Antibiotic overuse
- Chronic psychological stress

**Regular Monitoring:**
- Attention to digestive symptoms
- Adjusting based on changes in training or life
- Periodic reassessment of nutrition approach
- Professional consultation when needed

### Professional Practice Considerations

**Scope of Practice Boundaries:**
- Recognizing when to refer to medical professionals
- Collaborating with gastroenterologists
- Understanding diagnostic test interpretation limits
- Ethical considerations in recommendation

**Evidence-Based Practice:**
- Staying current with microbiome research
- Critical evaluation of supplement claims
- Balancing traditional and emerging approaches
- Individualized application of general principles

**Client Education:**
- Explaining gut health concepts clearly
- Setting realistic expectations
- Providing practical strategies
- Emphasizing patience with changes

**Documentation and Follow-up:**
- Detailed intake and symptom tracking
- Regular progress assessment
- Adjustments based on response
- Long-term maintenance planning

Optimizing gut health represents a crucial component of athletic performance, affecting nutrient absorption, immune function, inflammation, recovery, and overall well-being, requiring individualized approaches based on specific needs and responses.`,
      
      quiz: [
        {
          id: 1,
          question: "What percentage of immune cells reside in the gut-associated lymphoid tissue?",
          options: [
            "70-80%",
            "20-30%",
            "40-50%",
            "90-95%"
          ],
          correctAnswer: 0,
          explanation: "70-80% of the body's immune cells are in GALT, making gut health crucial for immune function."
        },
        {
          id: 2,
          question: "What causes exercise-induced gastrointestinal syndrome?",
          options: [
            "Reduced blood flow to gut during intense exercise",
            "Eating too close to exercise",
            "Dehydration only",
            "Genetic predisposition"
          ],
          correctAnswer: 0,
          explanation: "Intense exercise redirects blood flow from gut to muscles, causing ischemia and increased permeability."
        },
        {
          id: 3,
          question: "What are short-chain fatty acids?",
          options: [
            "Beneficial metabolites produced by gut bacteria from fiber",
            "Harmful byproducts of protein digestion",
            "Types of dietary fats from animal sources",
            "Synthetic fatty acids in processed foods"
          ],
          correctAnswer: 0,
          explanation: "SCFAs like butyrate are produced when gut bacteria ferment fiber and have anti-inflammatory effects."
        },
        {
          id: 4,
          question: "What does SIBO stand for?",
          options: [
            "Small Intestinal Bacterial Overgrowth",
            "Stomach Inflammation Bacterial Origin",
            "Systemic Intestinal Bacterial Overload",
            "Small Intestine Bowel Obstruction"
          ],
          correctAnswer: 0,
          explanation: "SIBO involves excessive bacteria in the small intestine, causing bloating, gas, and malabsorption."
        },
        {
          id: 5,
          question: "What is the 'second brain' in the gut?",
          options: [
            "Enteric nervous system with 100 million neurons",
            "Microbiome controlling brain function",
            "Stomach's independent decision-making",
            "Metaphor for gut intuition"
          ],
          correctAnswer: 0,
          explanation: "The enteric nervous system contains 100 million neurons and can operate independently of the brain."
        },
        {
          id: 6,
          question: "What are prebiotics?",
          options: [
            "Fibers that feed beneficial gut bacteria",
            "Another name for probiotics",
            "Synthetic bacteria supplements",
            "Medications for gut disorders"
          ],
          correctAnswer: 0,
          explanation: "Prebiotics are indigestible fibers that selectively stimulate growth of beneficial gut bacteria."
        },
        {
          id: 7,
          question: "What is 'training the gut'?",
          options: [
            "Gradually increasing carbohydrate intake during exercise",
            "Exercising abdominal muscles intensely",
            "Fasting before all training sessions",
            "Only eating easily digestible foods"
          ],
          correctAnswer: 0,
          explanation: "Training the gut involves gradually increasing carbohydrate intake during exercise to improve tolerance."
        },
        {
          id: 8,
          question: "What is resistant starch?",
          options: [
            "Starch that resists digestion until reaching the colon",
            "Starch that causes insulin resistance",
            "Starch found only in resistant plants",
            "Starch that should always be avoided"
          ],
          correctAnswer: 0,
          explanation: "Resistant starch reaches the colon intact where it's fermented to produce beneficial SCFAs."
        },
        {
          id: 9,
          question: "What are synbiotics?",
          options: [
            "Combinations of probiotics and prebiotics",
            "Synthetic versions of probiotics",
            "Antibiotics that spare gut bacteria",
            "Genetically modified probiotics"
          ],
          correctAnswer: 0,
          explanation: "Synbiotics combine probiotics (beneficial bacteria) with prebiotics (food for those bacteria)."
        },
        {
          id: 10,
          question: "How does heat acclimation affect gut function during exercise?",
          options: [
            "Improves blood flow distribution, reducing GI symptoms",
            "Worsens all gastrointestinal issues",
            "Has no effect on gut function",
            "Only affects sweat rate, not digestion"
          ],
          correctAnswer: 0,
          explanation: "Heat acclimation improves cardiovascular stability, maintaining better gut blood flow during exercise."
        },
        {
          id: 11,
          question: "What is the gut-brain axis?",
          options: [
            "Bidirectional communication between gut and brain",
            "Brain control over gut function only",
            "Gut control over brain function only",
            "Separate systems without communication"
          ],
          correctAnswer: 0,
          explanation: "The gut-brain axis involves bidirectional neural, hormonal, and immune communication between gut and brain."
        },
        {
          id: 12,
          question: "What are FODMAPs?",
          options: [
            "Fermentable carbohydrates that may cause GI distress",
            "Essential nutrients for gut health",
            "Types of probiotic bacteria",
            "Medications for inflammatory bowel disease"
          ],
          correctAnswer: 0,
          explanation: "FODMAPs are fermentable oligo-, di-, monosaccharides and polyols that can cause symptoms in sensitive individuals."
        },
        {
          id: 13,
          question: "What is butyrate?",
          options: [
            "Short-chain fatty acid that fuels colon cells",
            "Harmful byproduct of protein fermentation",
            "Type of saturated fat to avoid",
            "Antibiotic that kills gut bacteria"
          ],
          correctAnswer: 0,
          explanation: "Butyrate is a SCFA that serves as primary energy source for colonocytes and has anti-inflammatory effects."
        },
        {
          id: 14,
          question: "Why is dietary diversity important for gut health?",
          options: [
            "Supports diverse microbiome through varied fiber types",
            "Prevents boredom with food choices",
            "Ensures all vitamin needs are met",
            "Only important for overall nutrition, not gut specifically"
          ],
          correctAnswer: 0,
          explanation: "Different plant foods provide different fibers that feed different bacterial species, supporting diversity."
        },
        {
          id: 15,
          question: "What are enterocytes?",
          options: [
            "Cells lining the small intestine for nutrient absorption",
            "Immune cells in the gut",
            "Nerve cells in enteric nervous system",
            "Stomach acid-producing cells"
          ],
          correctAnswer: 0,
          explanation: "Enterocytes are epithelial cells lining the small intestine responsible for nutrient absorption."
        },
        {
          id: 16,
          question: "What is metabolic endotoxemia?",
          options: [
            "Increased blood levels of bacterial toxins from gut leakage",
            "Toxin buildup from poor kidney function",
            "Endotoxin production during metabolism",
            "Normal metabolic byproduct"
          ],
          correctAnswer: 0,
          explanation: "Metabolic endotoxemia involves increased LPS (bacterial toxin) in blood due to increased gut permeability."
        },
        {
          id: 17,
          question: "What is zonulin?",
          options: [
            "Protein that regulates intestinal tight junctions",
            "Enzyme that digests gluten",
            "Hormone that stimulates appetite",
            "Antibody against gut bacteria"
          ],
          correctAnswer: 0,
          explanation: "Zonulin regulates intestinal tight junctions; elevated levels increase permeability."
        },
        {
          id: 18,
          question: "What are fermented foods?",
          options: [
            "Foods transformed by microbial action (yogurt, sauerkraut)",
            "Foods that have spoiled",
            "Foods cooked at high temperatures",
            "Foods preserved with chemicals"
          ],
          correctAnswer: 0,
          explanation: "Fermented foods are produced through controlled microbial growth, often containing live cultures."
        },
        {
          id: 19,
          question: "How does overtraining affect gut health?",
          options: [
            "Increases intestinal permeability and inflammation",
            "Improves all aspects of digestion",
            "Has no effect on gastrointestinal function",
            "Only affects appetite, not gut integrity"
          ],
          correctAnswer: 0,
          explanation: "Overtraining increases gut permeability, inflammation, and risk of gastrointestinal issues."
        },
        {
          id: 20,
          question: "What is the primary role of glutamine for gut health?",
          options: [
            "Primary fuel for intestinal cells",
            "Stimulates stomach acid production",
            "Kills harmful bacteria",
            "Coats the stomach lining"
          ],
          correctAnswer: 0,
          explanation: "Glutamine is preferred fuel for enterocytes and may support gut barrier function during stress."
        }
      ]
    },
    {
      id: 6,
      title: "Professional Practice and Client Management",
      completed: false,
      content: `# Module 6: Professional Practice and Client Management

## Building a Successful Fitness Nutrition Practice

This module covers professional practice considerations, client management strategies, ethical guidelines, and business aspects of fitness nutrition practice.

### Professional Standards and Ethics

**Scope of Practice Definition:**
- Nutrition education vs. medical nutrition therapy
- Legal boundaries and state regulations
- Collaboration with healthcare professionals
- Recognition of when to refer

**Code of Ethics Principles:**
- Client welfare as primary concern
- Professional competence maintenance
- Integrity in representation of services
- Respect for client autonomy and diversity

**Confidentiality and Privacy:**
- HIPAA compliance considerations
- Secure record keeping
- Electronic communication security
- Client information protection

**Professional Boundaries:**
- Appropriate client-practitioner relationships
- Dual relationship avoidance
- Social media boundaries
- Termination of services protocols

### Client Assessment Protocols

**Comprehensive Intake Process:**
- Medical history review
- Current dietary assessment
- Lifestyle and schedule evaluation
- Goals and motivation assessment

**Nutrition Assessment Tools:**
- Food diaries and recall methods
- Body composition assessment
- Laboratory values interpretation (when available)
- Supplement and medication review

**Goal Setting Methodology:**
- SMART goal framework application
- Process vs. outcome goals balance
- Realistic expectation setting
- Client-centered goal development

**Readiness for Change Assessment:**
- Stages of Change model application
- Motivational interviewing techniques
- Barriers and facilitators identification
- Support system evaluation

### Individualized Plan Development

**Evidence-Based Practice Framework:**
- Research evaluation and application
- Individualizing general principles
- Balancing science with practicality
- Staying current with emerging evidence

**Macronutrient Calculation Methods:**
- Multiple equation approaches
- Activity factor considerations
- Goal-specific adjustments
- Individual response monitoring

**Meal Planning Strategies:**
- Food preference integration
- Cultural and ethical considerations
- Practical schedule accommodations
- Budget and accessibility factors

**Supplement Recommendations:**
- Evidence-based supplement selection
- Quality and safety considerations
- Cost-benefit analysis
- Clear dosing and timing instructions

### Communication and Education Strategies

**Active Listening Skills:**
- Client-centered communication
- Non-judgmental approach
- Clarifying and summarizing
- Empathetic response development

**Motivational Interviewing Techniques:**
- Open-ended questioning
- Reflective listening
- Change talk elicitation
- Resistance management

**Nutrition Education Methods:**
- Tailored to client knowledge level
- Practical application focus
- Visual aids and handouts
- Follow-up and reinforcement

**Difficult Conversation Management:**
- Delivering challenging feedback
- Addressing non-adherence
- Managing unrealistic expectations
- Termination conversations when needed

### Monitoring and Adjustment Protocols

**Progress Tracking Methods:**
- Regular check-in schedules
- Objective measures tracking
- Subjective feedback collection
- Adherence assessment

**Plan Adjustment Criteria:**
- Response-based modifications
- Life change adaptations
- Plateau breaking strategies
- Progress stagnation responses

**Troubleshooting Common Issues:**
- Adherence challenges
- Social situation navigation
- Travel and schedule disruptions
- Psychological barriers

**Long-Term Maintenance Planning:**
- Transition from intervention to maintenance
- Relapse prevention strategies
- Ongoing support planning
- Gradual independence development

### Business and Practice Management

**Service Delivery Models:**
- One-on-one consultation
- Group programming
- Online/distance services
- Workshop and seminar delivery

**Pricing and Packages:**
- Market research for pricing
- Package development
- Payment policies
- Cancellation and refund policies

**Marketing and Client Acquisition:**
- Ethical marketing practices
- Networking strategies
- Online presence development
- Referral system establishment

**Documentation and Record Keeping:**
- Client file organization
- Progress note templates
- Consent forms and agreements
- Legal and insurance requirements

### Special Population Considerations

**Athletes with Medical Conditions:**
- Diabetes management in athletes
- Cardiovascular conditions
- Gastrointestinal disorders
- Eating disorder history

**Youth and Adolescent Athletes:**
- Parental involvement considerations
- Growth and development priorities
- Educational approaches
- Long-term health focus

**Masters and Senior Athletes:**
- Age-related considerations
- Medication interactions
- Recovery adaptations
- Realistic goal setting

**Female-Specific Considerations:**
- Menstrual cycle awareness
- Pregnancy and postpartum
- Relative Energy Deficiency in Sport (RED-S)
- Body image concerns

### Legal and Regulatory Considerations

**Licensing and Certification:**
- State-specific requirements
- Credential maintenance
- Continuing education
- Professional organization membership

**Liability and Insurance:**
- Professional liability insurance
- Business insurance needs
- Risk management strategies
- Contract and agreement use

**Intellectual Property:**
- Program and material copyright
- Trademark considerations
- Content creation protection
- Ethical use of others' materials

**Online Practice Regulations:**
- Interstate practice considerations
- Telehealth regulations
- Digital communication standards
- International client considerations

### Professional Development

**Continuing Education:**
- Conference and workshop attendance
- Journal reading and research review
- Professional network development
- Specialization consideration

**Mentorship and Supervision:**
- Seeking experienced mentors
- Providing supervision to others
- Peer consultation groups
- Case review and discussion

**Research Participation:**
- Staying current with research
- Critical appraisal skills
- Applying research to practice
- Contributing to research when possible

**Career Development Planning:**
- Short and long-term career goals
- Skill development planning
- Business growth strategies
- Work-life balance maintenance

### Ethical Dilemmas and Problem Solving

**Common Ethical Challenges:**
- Client requests beyond scope
- Conflicting professional opinions
- Cultural competence challenges
- Financial pressure conflicts

**Decision-Making Frameworks:**
- Ethical decision models
- Consultation with colleagues
- Professional organization guidance
- Client-centered resolution

**Boundary Management:**
- Social media interactions
- Gift and favor policies
- Personal disclosure boundaries
- Dual relationship avoidance

**Professional Impairment Recognition:**
- Burnout signs and prevention
- Compassion fatigue management
- Self-care importance
- Seeking help when needed

### Quality Improvement and Evaluation

**Client Satisfaction Assessment:**
- Feedback collection methods
- Outcome measure tracking
- Service improvement based on feedback
- Continuous quality improvement

**Outcome Measurement:**
- Client goal achievement tracking
- Long-term follow-up
- Success rate documentation
- Program effectiveness evaluation

**Professional Competence Assessment:**
- Self-evaluation practices
- Peer review opportunities
- Client feedback utilization
- Continuing education planning

**Practice Evaluation and Adjustment:**
- Business performance review
- Service offering evaluation
- Marketing effectiveness assessment
- Strategic planning for growth

### Collaboration and Referral Networks

**Healthcare Professional Collaboration:**
- Physician communication protocols
- Registered dietitian collaboration
- Physical therapist partnerships
- Mental health professional referrals

**Fitness Professional Relationships:**
- Personal trainer collaboration
- Strength coach partnerships
- Team integration approaches
- Role clarity establishment

**Community Resource Utilization:**
- Local resource directory development
- Support group referrals
- Educational program partnerships
- Community outreach participation

**Interdisciplinary Team Approach:**
- Case conference participation
- Coordinated care planning
- Communication protocols
- Client-centered team meetings

### Self-Care and Professional Sustainability

**Preventing Burnout:**
- Realistic caseload management
- Work-life balance strategies
- Stress management techniques
- Regular time off and vacations

**Professional Support Systems:**
- Peer support groups
- Mentorship relationships
- Professional supervision
- Personal therapy when needed

**Continuing Passion and Motivation:**
- Remembering why you entered field
- Celebrating client successes
- Continuous learning enjoyment
- Professional community engagement

**Personal Health Maintenance:**
- Practicing what you preach
- Managing your own nutrition and fitness
- Work-related health considerations
- Role modeling healthy behaviors

Building a successful fitness nutrition practice requires balancing scientific knowledge with practical application, ethical practice with business considerations, and client service with professional self-care for sustainable career success.`,
      
      quiz: [
        {
          id: 1,
          question: "What is the primary concern in professional ethics for fitness nutrition professionals?",
          options: [
            "Client welfare and safety",
            "Maximizing profit",
            "Building large client base",
            "Following all client requests"
          ],
          correctAnswer: 0,
          explanation: "Client welfare and safety must always be the primary concern, overriding other considerations."
        },
        {
          id: 2,
          question: "What does SMART stand for in goal setting?",
          options: [
            "Specific, Measurable, Achievable, Relevant, Time-bound",
            "Simple, Moderate, Active, Realistic, Timely",
            "Strategic, Meaningful, Attainable, Reasonable, Targeted",
            "Specific, Manageable, Attainable, Reasonable, Timed"
          ],
          correctAnswer: 0,
          explanation: "SMART goals are Specific, Measurable, Achievable, Relevant, and Time-bound for effectiveness."
        },
        {
          id: 3,
          question: "What is motivational interviewing?",
          options: [
            "Client-centered communication style to elicit behavior change",
            "Persuading clients to follow your recommendations",
            "Only providing positive feedback",
            "Telling clients exactly what to do"
          ],
          correctAnswer: 0,
          explanation: "Motivational interviewing is collaborative, client-centered approach that honors client autonomy."
        },
        {
          id: 4,
          question: "What is scope of practice?",
          options: [
            "Legal boundaries defining what services a professional can provide",
            "The range of clients a professional will accept",
            "Geographic area where services are offered",
            "Types of nutrition plans created"
          ],
          correctAnswer: 0,
          explanation: "Scope of practice defines legal and professional boundaries of services based on training and credentials."
        },
        {
          id: 5,
          question: "What is HIPAA compliance important for?",
          options: [
            "Protecting client health information privacy",
            "Marketing services effectively",
            "Insurance reimbursement",
            "Professional certification"
          ],
          correctAnswer: 0,
          explanation: "HIPAA regulations protect client health information privacy and require specific security measures."
        },
        {
          id: 6,
          question: "What are process goals?",
          options: [
            "Actions clients will take toward their outcomes",
            "Only the final result clients want",
            "Goals for the professional's process",
            "Step-by-step meal plans"
          ],
          correctAnswer: 0,
          explanation: "Process goals focus on behaviors and actions within client control, supporting outcome achievement."
        },
        {
          id: 7,
          question: "What is evidence-based practice?",
          options: [
            "Integrating research evidence with clinical expertise and client values",
            "Only following the latest research",
            "Using only methods proven in large studies",
            "Avoiding all traditional approaches"
          ],
          correctAnswer: 0,
          explanation: "Evidence-based practice balances research evidence with professional expertise and individual client factors."
        },
        {
          id: 8,
          question: "What is professional liability insurance for?",
          options: [
            "Protection against claims of negligence or harm",
            "Covering client non-payment",
            "Business property protection",
            "Employee injury coverage"
          ],
          correctAnswer: 0,
          explanation: "Professional liability insurance protects against claims related to professional services provided."
        },
        {
          id: 9,
          question: "What is reflective listening?",
          options: [
            "Paraphrasing and reflecting client statements to show understanding",
            "Critically analyzing what client says",
            "Listening while planning response",
            "Only hearing words without interpretation"
          ],
          correctAnswer: 0,
          explanation: "Reflective listening involves restating client statements to demonstrate understanding and encourage elaboration."
        },
        {
          id: 10,
          question: "What are dual relationships?",
          options: [
            "Multiple roles with clients that may create conflicts",
            "Working with couples together",
            "Having two jobs simultaneously",
            "Client referrals from two sources"
          ],
          correctAnswer: 0,
          explanation: "Dual relationships involve additional roles (friend, business partner) that may impair professional judgment."
        },
        {
          id: 11,
          question: "What is active listening?",
          options: [
            "Fully concentrating, understanding, and responding to client",
            "Only hearing words spoken",
            "Interrupting to ask questions",
            "Thinking about next question while client talks"
          ],
          correctAnswer: 0,
          explanation: "Active listening involves complete attention to client, understanding meaning, and providing appropriate responses."
        },
        {
          id: 12,
          question: "What is cultural competence?",
          options: [
            "Ability to work effectively with clients from diverse cultures",
            "Knowing about many different cultures",
            "Only working with clients from your culture",
            "Avoiding cultural topics entirely"
          ],
          correctAnswer: 0,
          explanation: "Cultural competence involves awareness, knowledge, and skills to work effectively across cultural differences."
        },
        {
          id: 13,
          question: "What is informed consent?",
          options: [
            "Client understanding and agreement to services after full disclosure",
            "Only verbal agreement to work together",
            "Payment for services agreement",
            "Client signature on any form"
          ],
          correctAnswer: 0,
          explanation: "Informed consent requires full disclosure of services, risks, benefits, and alternatives before client agreement."
        },
        {
          id: 14,
          question: "What is professional supervision?",
          options: [
            "Guidance from experienced professional to ensure quality practice",
            "Monitoring employees in business",
            "Client progress monitoring",
            "Government oversight of profession"
          ],
          correctAnswer: 0,
          explanation: "Professional supervision involves regular consultation with experienced colleagues for guidance and quality assurance."
        },
        {
          id: 15,
          question: "What is burnout?",
          options: [
            "Physical, emotional, and mental exhaustion from chronic work stress",
            "Normal tiredness after work",
            "Lack of interest in one client",
            "Temporary frustration with progress"
          ],
          correctAnswer: 0,
          explanation: "Burnout involves emotional exhaustion, depersonalization, and reduced accomplishment from chronic stress."
        },
        {
          id: 16,
          question: "What is scope of practice boundary?",
          options: [
            "Recognizing when client needs exceed your qualifications",
            "Only working with certain types of clients",
            "Geographic limits of practice",
            "Time limits on client sessions"
          ],
          correctAnswer: 0,
          explanation: "Scope boundaries involve recognizing when client needs require referral to other qualified professionals."
        },
        {
          id: 17,
          question: "What is telehealth?",
          options: [
            "Remote delivery of healthcare services via technology",
            "Only phone consultations",
            "Health tracking apps",
            "Online health information"
          ],
          correctAnswer: 0,
          explanation: "Telehealth involves providing healthcare services remotely using telecommunications technology."
        },
        {
          id: 18,
          question: "What is confidentiality?",
          options: [
            "Protecting client information from unauthorized disclosure",
            "Keeping all records secret forever",
            "Not discussing cases with anyone",
            "Only sharing with other professionals"
          ],
          correctAnswer: 0,
          explanation: "Confidentiality involves protecting client information with exceptions for safety or legal requirements."
        },
        {
          id: 19,
          question: "What is continuing education?",
          options: [
            "Ongoing learning to maintain and improve professional competence",
            "Only formal degree programs",
            "Learning unrelated topics",
            "Optional if experienced"
          ],
          correctAnswer: 0,
          explanation: "Continuing education involves ongoing professional development to maintain competence and stay current."
        },
        {
          id: 20,
          question: "What is most important for professional sustainability?",
          options: [
            "Balancing client service with self-care and professional development",
            "Working as many hours as possible",
            "Only focusing on income generation",
            "Avoiding all difficult cases"
          ],
          correctAnswer: 0,
          explanation: "Sustainability requires balance between service delivery, professional growth, and personal well-being."
        }
      ]
    }
  ],
  
  // FINAL EXAM (40 questions covering all modules)
  finalExam: [
    {
      id: 1,
      question: "Which energy system provides immediate energy for short, high-intensity efforts?",
      options: [
        "Phosphagen system",
        "Glycolytic system",
        "Oxidative system",
        "Lipolytic system"
      ],
      correctAnswer: 0,
      explanation: "The phosphagen system uses ATP and creatine phosphate for immediate, high-intensity efforts up to 10 seconds."
    },
    {
      id: 2,
      question: "What is the recommended protein intake range for strength/power athletes?",
      options: [
        "1.6-2.0 g/kg body weight",
        "0.8-1.0 g/kg",
        "1.2-1.4 g/kg",
        "2.2-2.5 g/kg"
      ],
      correctAnswer: 0,
      explanation: "Strength and power athletes require 1.6-2.0 g/kg daily to support muscle repair, growth, and adaptation."
    },
    {
      id: 3,
      question: "What is carbohydrate periodization?",
      options: [
        "Strategic variation of carbohydrate intake based on training demands",
        "Eating the same amount of carbs every day",
        "Only consuming carbs after exercise",
        "Eliminating carbs completely periodically"
      ],
      correctAnswer: 0,
      explanation: "Carbohydrate periodization involves adjusting carbohydrate intake daily based on training intensity and volume."
    },
    {
      id: 4,
      question: "What is the leucine threshold for maximal muscle protein synthesis?",
      options: [
        "2-3 grams per meal",
        "1 gram per meal",
        "5 grams per meal",
        "10 grams per meal"
      ],
      correctAnswer: 0,
      explanation: "2-3 grams of leucine per meal is needed to maximally stimulate muscle protein synthesis."
    },
    {
      id: 5,
      question: "What is the optimal rate of weight loss for preserving muscle mass?",
      options: [
        "0.5-1% of body weight weekly",
        "2-3% weekly",
        "As fast as possible",
        "No more than 0.25% weekly"
      ],
      correctAnswer: 0,
      explanation: "0.5-1% weekly minimizes muscle loss and metabolic adaptation while allowing sustainable progress."
    },
    {
      id: 6,
      question: "What percentage of immune cells reside in gut-associated lymphoid tissue?",
      options: [
        "70-80%",
        "20-30%",
        "40-50%",
        "90-95%"
      ],
      correctAnswer: 0,
      explanation: "70-80% of the body's immune cells are in GALT, making gut health crucial for immune function."
    },
    {
      id: 7,
      question: "What is the primary concern in professional ethics for fitness nutrition professionals?",
      options: [
        "Client welfare and safety",
        "Maximizing profit",
        "Building large client base",
        "Following all client requests"
      ],
      correctAnswer: 0,
      explanation: "Client welfare and safety must always be the primary concern, overriding other considerations."
    },
    {
      id: 8,
      question: "What is the loading protocol for creatine monohydrate?",
      options: [
        "20 g/day for 5-7 days, then 3-5 g/day maintenance",
        "5 g/day continuously",
        "10 g/day for 2 weeks only",
        "Cyclic loading every month"
      ],
      correctAnswer: 0,
      explanation: "20 g/day for 5-7 days rapidly saturates muscles, followed by 3-5 g/day to maintain saturation."
    },
    {
      id: 9,
      question: "What is metabolic adaptation?",
      options: [
        "Reduction in metabolic rate during caloric restriction",
        "Increased metabolism from exercise",
        "Adaptation to different food types",
        "Genetic metabolic variations"
      ],
      correctAnswer: 0,
      explanation: "Metabolic adaptation includes reductions in BMR, NEAT, and TEF during prolonged calorie restriction."
    },
    {
      id: 10,
      question: "What are short-chain fatty acids?",
      options: [
        "Beneficial metabolites produced by gut bacteria from fiber",
        "Harmful byproducts of protein digestion",
        "Types of dietary fats from animal sources",
        "Synthetic fatty acids in processed foods"
      ],
      correctAnswer: 0,
      explanation: "SCFAs like butyrate are produced when gut bacteria ferment fiber and have anti-inflammatory effects."
    },
    {
      id: 11,
      question: "What does SMART stand for in goal setting?",
      options: [
        "Specific, Measurable, Achievable, Relevant, Time-bound",
        "Simple, Moderate, Active, Realistic, Timely",
        "Strategic, Meaningful, Attainable, Reasonable, Targeted",
        "Specific, Manageable, Attainable, Reasonable, Timed"
      ],
      correctAnswer: 0,
      explanation: "SMART goals are Specific, Measurable, Achievable, Relevant, and Time-bound for effectiveness."
    },
    {
      id: 12,
      question: "What is the primary fuel source during high-intensity exercise?",
      options: [
        "Carbohydrates",
        "Fats",
        "Protein",
        "Ketones"
      ],
      correctAnswer: 0,
      explanation: "Carbohydrates are the primary fuel for high-intensity exercise due to faster energy production."
    },
    {
      id: 13,
      question: "What is the recommended protein dose per meal for maximal MPS stimulation?",
      options: [
        "0.3-0.4 g/kg body weight",
        "0.1-0.2 g/kg",
        "0.5-0.6 g/kg",
        "1.0 g/kg"
      ],
      correctAnswer: 0,
      explanation: "0.3-0.4 g/kg per meal provides sufficient leucine to maximally stimulate muscle protein synthesis."
    },
    {
      id: 14,
      question: "What are diet breaks?",
      options: [
        "Temporary returns to maintenance calories during a deficit",
        "Complete breaks from tracking food",
        "Only eating favorite foods",
        "Week-long fasting periods"
      ],
      correctAnswer: 0,
      explanation: "Diet breaks involve eating at maintenance for 1-2 weeks to reduce metabolic adaptation."
    },
    {
      id: 15,
      question: "What causes exercise-induced gastrointestinal syndrome?",
      options: [
        "Reduced blood flow to gut during intense exercise",
        "Eating too close to exercise",
        "Dehydration only",
        "Genetic predisposition"
      ],
      correctAnswer: 0,
      explanation: "Intense exercise redirects blood flow from gut to muscles, causing ischemia and increased permeability."
    },
    {
      id: 16,
      question: "What is motivational interviewing?",
      options: [
        "Client-centered communication style to elicit behavior change",
        "Persuading clients to follow your recommendations",
        "Only providing positive feedback",
        "Telling clients exactly what to do"
      ],
      correctAnswer: 0,
      explanation: "Motivational interviewing is collaborative, client-centered approach that honors client autonomy."
    },
    {
      id: 17,
      question: "At what percentage of body weight loss does dehydration impair performance?",
      options: [
        ">2%",
        ">5%",
        ">1%",
        ">3%"
      ],
      correctAnswer: 0,
      explanation: "Dehydration exceeding 2% of body weight negatively impacts cardiovascular function and performance."
    },
    {
      id: 18,
      question: "What is reverse dieting?",
      options: [
        "Gradually increasing calories after a deficit",
        "Eating only at night",
        "Consuming foods in reverse order",
        "Fasting before eating"
      ],
      correctAnswer: 0,
      explanation: "Reverse dieting slowly increases calories to restore metabolism after prolonged dieting."
    },
    {
      id: 19,
      question: "What is 'training the gut'?",
      options: [
        "Gradually increasing carbohydrate intake during exercise",
        "Exercising abdominal muscles intensely",
        "Fasting before all training sessions",
        "Only eating easily digestible foods"
      ],
      correctAnswer: 0,
      explanation: "Training the gut involves gradually increasing carbohydrate intake during exercise to improve tolerance."
    },
    {
      id: 20,
      question: "What is scope of practice?",
      options: [
        "Legal boundaries defining what services a professional can provide",
        "The range of clients a professional will accept",
        "Geographic area where services are offered",
        "Types of nutrition plans created"
      ],
      correctAnswer: 0,
      explanation: "Scope of practice defines legal and professional boundaries of services based on training and credentials."
    },
    {
      id: 21,
      question: "What is the optimal carb:protein ratio for post-exercise recovery?",
      options: [
        "3:1 or 4:1 carbohydrates to protein",
        "1:1 ratio",
        "2:1 protein to carbohydrates",
        "5:1 carbohydrates to protein"
      ],
      correctAnswer: 0,
      explanation: "A 3:1 or 4:1 carbohydrate to protein ratio optimizes glycogen replenishment and muscle protein synthesis."
    },
    {
      id: 22,
      question: "What is body recomposition?",
      options: [
        "Simultaneous fat loss and muscle gain",
        "Only losing fat",
        "Only gaining muscle",
        "Maintaining current body composition"
      ],
      correctAnswer: 0,
      explanation: "Recomposition refers to losing body fat while gaining muscle mass simultaneously."
    },
    {
      id: 23,
      question: "Why is higher protein intake important during fat loss?",
      options: [
        "Preserves lean mass, increases satiety and thermic effect",
        "Directly burns more fat",
        "Allows unlimited calorie intake",
        "Is required for all fat loss to occur"
      ],
      correctAnswer: 0,
      explanation: "Higher protein preserves muscle, increases fullness, and has higher thermic effect than carbs or fat."
    },
    {
      id: 24,
      question: "What are prebiotics?",
      options: [
        "Fibers that feed beneficial gut bacteria",
        "Another name for probiotics",
        "Synthetic bacteria supplements",
        "Medications for gut disorders"
      ],
      correctAnswer: 0,
      explanation: "Prebiotics are indigestible fibers that selectively stimulate growth of beneficial gut bacteria."
    },
    {
      id: 25,
      question: "What is HIPAA compliance important for?",
      options: [
        "Protecting client health information privacy",
        "Marketing services effectively",
        "Insurance reimbursement",
        "Professional certification"
      ],
      correctAnswer: 0,
      explanation: "HIPAA regulations protect client health information privacy and require specific security measures."
    },
    {
      id: 26,
      question: "Which body composition assessment method is considered gold standard?",
      options: [
        "Dual-Energy X-ray Absorptiometry (DEXA)",
        "Bioelectrical Impedance Analysis (BIA)",
        "Skinfold measurements",
        "Circumference measurements"
      ],
      correctAnswer: 0,
      explanation: "DEXA is considered gold standard due to accuracy in measuring bone density, fat mass, and lean mass."
    },
    {
      id: 27,
      question: "What is net protein balance?",
      options: [
        "Muscle protein synthesis minus muscle protein breakdown",
        "Total protein intake minus protein excretion",
        "Animal protein minus plant protein intake",
        "Pre-workout protein minus post-workout protein"
      ],
      correctAnswer: 0,
      explanation: "Net positive protein balance (MPS > MPB) is required for muscle growth to occur."
    },
    {
      id: 28,
      question: "What is metabolic flexibility?",
      options: [
        "Ability to switch between carbohydrate and fat oxidation",
        "Eating different types of foods",
        "Changing metabolism at will",
        "Genetic ability to lose weight easily"
      ],
      correctAnswer: 0,
      explanation: "Metabolic flexibility refers to efficient switching between fuel sources based on availability and demand."
    },
    {
      id: 29,
      question: "What does SIBO stand for?",
      options: [
        "Small Intestinal Bacterial Overgrowth",
        "Stomach Inflammation Bacterial Origin",
        "Systemic Intestinal Bacterial Overload",
        "Small Intestine Bowel Obstruction"
      ],
      correctAnswer: 0,
      explanation: "SIBO involves excessive bacteria in the small intestine, causing bloating, gas, and malabsorption."
    },
    {
      id: 30,
      question: "What is evidence-based practice?",
      options: [
        "Integrating research evidence with clinical expertise and client values",
        "Only following the latest research",
        "Using only methods proven in large studies",
        "Avoiding all traditional approaches"
      ],
      correctAnswer: 0,
      explanation: "Evidence-based practice balances research evidence with professional expertise and individual client factors."
    },
    {
      id: 31,
      question: "What caffeine dosage optimizes performance?",
      options: [
        "3-6 mg/kg body weight 60 minutes pre-exercise",
        "1-2 mg/kg immediately before exercise",
        "7-10 mg/kg throughout the day",
        "10-15 mg/kg 30 minutes pre-exercise"
      ],
      correctAnswer: 0,
      explanation: "3-6 mg/kg taken 60 minutes before exercise optimizes performance benefits while minimizing side effects."
    },
    {
      id: 32,
      question: "What is the Female Athlete Triad?",
      options: [
        "Low energy availability, menstrual dysfunction, low bone density",
        "High protein intake, muscle gain, increased strength",
        "Excessive carb loading, weight gain, improved performance",
        "Adequate nutrition, regular periods, optimal bone health"
      ],
      correctAnswer: 0,
      explanation: "The Female Athlete Triad involves interconnected issues of low energy availability, menstrual dysfunction, and impaired bone health."
    },
    {
      id: 33,
      question: "What is glycogen supercompensation?",
      options: [
        "Increasing muscle glycogen stores above normal levels",
        "Depleting all glycogen stores completely",
        "Converting glycogen to fat for storage",
        "Using glycogen for immediate energy only"
      ],
      correctAnswer: 0,
      explanation: "Glycogen supercompensation protocols increase muscle glycogen stores 20-40% above normal for endurance events."
    },
    {
      id: 34,
      question: "What is the 'second brain' in the gut?",
      options: [
        "Enteric nervous system with 100 million neurons",
        "Microbiome controlling brain function",
        "Stomach's independent decision-making",
        "Metaphor for gut intuition"
      ],
      correctAnswer: 0,
      explanation: "The enteric nervous system contains 100 million neurons and can operate independently of the brain."
    },
    {
      id: 35,
      question: "What is professional liability insurance for?",
      options: [
        "Protection against claims of negligence or harm",
        "Covering client non-payment",
        "Business property protection",
        "Employee injury coverage"
      ],
      correctAnswer: 0,
      explanation: "Professional liability insurance protects against claims related to professional services provided."
    },
    {
      id: 36,
      question: "What is the post-workout anabolic window?",
      options: [
        "Period of enhanced nutrient sensitivity after training",
        "Time when you must eat immediately after training",
        "Only the first 30 minutes after training",
        "A marketing concept with no scientific basis"
      ],
      correctAnswer: 0,
      explanation: "While not as narrow as once thought, nutrient sensitivity is enhanced for 1-2 hours post-training."
    },
    {
      id: 37,
      question: "What is adaptive thermogenesis?",
      options: [
        "Metabolic slowdown beyond predicted during calorie restriction",
        "Increased heat production from exercise",
        "Adaptation to hot environments",
        "Thermic effect of food variation"
      ],
      correctAnswer: 0,
      explanation: "Adaptive thermogenesis is metabolic adaptation beyond what would be predicted from weight loss alone."
    },
    {
      id: 38,
      question: "What are synbiotics?",
      options: [
        "Combinations of probiotics and prebiotics",
        "Synthetic versions of probiotics",
        "Antibiotics that spare gut bacteria",
        "Genetically modified probiotics"
      ],
      correctAnswer: 0,
      explanation: "Synbiotics combine probiotics (beneficial bacteria) with prebiotics (food for those bacteria)."
    },
    {
      id: 39,
      question: "What is reflective listening?",
      options: [
        "Paraphrasing and reflecting client statements to show understanding",
        "Critically analyzing what client says",
        "Listening while planning response",
        "Only hearing words without interpretation"
      ],
      correctAnswer: 0,
      explanation: "Reflective listening involves restating client statements to demonstrate understanding and encourage elaboration."
    },
    {
      id: 40,
      question: "What is most important for professional sustainability?",
      options: [
        "Balancing client service with self-care and professional development",
        "Working as many hours as possible",
        "Only focusing on income generation",
        "Avoiding all difficult cases"
      ],
      correctAnswer: 0,
      explanation: "Sustainability requires balance between service delivery, professional growth, and personal well-being."
    }
  ]
};

export default fitnessNutritionDiploma;
