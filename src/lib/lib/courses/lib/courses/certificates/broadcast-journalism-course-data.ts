// Broadcast Journalism (Diploma) - Complete Course Data
// Advanced diploma course building on News Anchoring Certificate
// All modules and exam in one file for easy implementation

export const broadcastJournalismDiploma = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "broadcast-journalism-diploma",
  title: "Broadcast Journalism (Diploma)",
  description: "An advanced diploma course covering comprehensive broadcast journalism skills, from investigative reporting to multimedia production. Builds upon anchoring fundamentals to develop complete broadcast journalism expertise.",
  duration: "12 weeks",
  timeCommitment: "8-10 hours per week",
  price: 18,
  icon: "🎥",
  badge: "Diploma",
  prerequisites: ["news-anchoring-certificate"],
  creditTransfer: true,
  
  // 2. MODULE ARCHITECTURE - 6 Advanced Modules
  modules: [
    {
      id: 1,
      title: "Advanced News Gathering & Investigation",
      completed: false,
      content: `# Module 1: Advanced News Gathering & Investigation

## Professional News Discovery
This module explores advanced techniques for finding, verifying, and developing news stories for broadcast. You'll learn investigative methodologies and source development skills essential for professional journalism.

### Investigative Journalism Principles
Investigative journalism involves systematic, in-depth examination of issues that someone wants to keep hidden. It requires persistence, critical thinking, and ethical rigor.

**Investigative approaches:**
- **Document analysis**: Reviewing records, databases, and documents
- **Source cultivation**: Developing relationships with informed sources
- **Data journalism**: Using data analysis to reveal patterns and stories
- **Follow-the-money**: Tracing financial connections and interests

### Source Development and Protection
Reliable sources are the foundation of investigative work. Developing and protecting sources requires specific skills and ethical commitments.

**Source management:**
- **Source verification**: Confirming source credibility and information
- **Relationship building**: Establishing trust with potential sources
- **Confidentiality protocols**: Protecting source identities when necessary
- **Multiple sourcing**: Corroborating information across different sources

### Public Records and FOIA Requests
Public records laws provide access to government information. Mastering records requests is essential for investigative journalism.

**Records access techniques:**
- **Freedom of Information Act (FOIA) requests**: Formal requests for federal records
- **State public records laws**: Understanding local access regulations
- **Record navigation**: Finding relevant information within obtained documents
- **Appeal processes**: Challenging improperly denied requests

### Data Journalism for Broadcast
Data journalism transforms numbers into compelling broadcast stories. Visualization and clear explanation make data accessible to television audiences.

**Data techniques:**
- **Data acquisition**: Finding relevant datasets for stories
- **Data cleaning**: Preparing data for analysis and visualization
- **Statistical analysis**: Identifying meaningful patterns and trends
- **Visual storytelling**: Creating graphics that communicate data clearly

### Investigative Story Structure
Investigative stories require special narrative structures that build evidence while maintaining audience engagement.

**Story development:**
- **Hypothesis testing**: Developing and testing story theories
- **Evidence accumulation**: Gathering supporting documentation
- **Narrative construction**: Building stories that reveal findings progressively
- **Impact demonstration**: Showing why findings matter to viewers

---

## Key Learning Points
- Investigative journalism systematically examines hidden issues
- Source development requires relationship building and protection
- Public records laws provide essential information access
- Data journalism transforms numbers into broadcast stories
- Investigative stories require special narrative structures

Master these advanced news gathering skills to uncover important stories!`,
      
      quiz: [
        {
          id: 1,
          question: "What involves systematic examination of hidden issues?",
          options: [
            "Investigative journalism",
            "Basic news reporting",
            "Weather forecasting",
            "Sports commentary"
          ],
          correctAnswer: 0,
          explanation: "Investigative journalism digs deeper than surface reporting."
        },
        {
          id: 2,
          question: "What requires reviewing records and databases?",
          options: [
            "Document analysis",
            "Source interviews only",
            "Random investigation",
            "Guessing stories"
          ],
          correctAnswer: 0,
          explanation: "Documents provide tangible evidence for stories."
        },
        {
          id: 3,
          question: "What is the foundation of investigative work?",
          options: [
            "Reliable sources",
            "Personal opinions",
            "Government statements",
            "Social media trends"
          ],
          correctAnswer: 0,
          explanation: "Sources provide information and verification."
        },
        {
          id: 4,
          question: "What confirms source credibility?",
          options: [
            "Source verification",
            "Source popularity",
            "Source appearance",
            "Source location"
          ],
          correctAnswer: 0,
          explanation: "Verification ensures information reliability."
        },
        {
          id: 5,
          question: "What provides access to government information?",
          options: [
            "Public records laws",
            "Private databases only",
            "Social media platforms",
            "Personal connections"
          ],
          correctAnswer: 0,
          explanation: "Laws guarantee public access to many government records."
        },
        {
          id: 6,
          question: "What are formal requests for federal records?",
          options: [
            "FOIA requests",
            "Personal letters",
            "Social media posts",
            "Phone calls"
          ],
          correctAnswer: 0,
          explanation: "FOIA is the Freedom of Information Act."
        },
        {
          id: 7,
          question: "What transforms numbers into broadcast stories?",
          options: [
            "Data journalism",
            "Entertainment reporting",
            "Celebrity interviews",
            "Weather reports"
          ],
          correctAnswer: 0,
          explanation: "Data journalism makes statistics understandable and compelling."
        },
        {
          id: 8,
          question: "What involves finding relevant datasets?",
          options: [
            "Data acquisition",
            "Data guessing",
            "Data creation",
            "Data ignoring"
          ],
          correctAnswer: 0,
          explanation: "Finding appropriate data is the first step in data journalism."
        },
        {
          id: 9,
          question: "What identifies meaningful patterns?",
          options: [
            "Statistical analysis",
            "Random observation",
            "Personal intuition",
            "Public opinion"
          ],
          correctAnswer: 0,
          explanation: "Analysis reveals stories within data."
        },
        {
          id: 10,
          question: "What creates graphics that communicate data?",
          options: [
            "Visual storytelling",
            "Text descriptions only",
            "Audio explanations",
            "Printed reports"
          ],
          correctAnswer: 0,
          explanation: "Visuals help television audiences understand data."
        },
        {
          id: 11,
          question: "What develops and tests story theories?",
          options: [
            "Hypothesis testing",
            "Story guessing",
            "Report copying",
            "Opinion forming"
          ],
          correctAnswer: 0,
          explanation: "Investigative work tests ideas with evidence."
        },
        {
          id: 12,
          question: "What builds stories progressively?",
          options: [
            "Narrative construction",
            "Information dumping",
            "Random sequencing",
            "Chronological listing"
          ],
          correctAnswer: 0,
          explanation: "Effective narratives reveal findings strategically."
        },
        {
          id: 13,
          question: "What requires persistence and ethical rigor?",
          options: [
            "Investigative journalism",
            "All reporting equally",
            "Entertainment news",
            "Sports coverage"
          ],
          correctAnswer: 0,
          explanation: "Investigative work demands special dedication and ethics."
        },
        {
          id: 14,
          question: "What protects source identities?",
          options: [
            "Confidentiality protocols",
            "Public announcements",
            "Social media posts",
            "Station broadcasts"
          ],
          correctAnswer: 0,
          explanation: "Protecting sources maintains trust and safety."
        },
        {
          id: 15,
          question: "What corroborates information across sources?",
          options: [
            "Multiple sourcing",
            "Single source reliance",
            "Government statements only",
            "Personal observations"
          ],
          correctAnswer: 0,
          explanation: "Multiple sources increase story reliability."
        },
        {
          id: 16,
          question: "What understands local access regulations?",
          options: [
            "State public records laws",
            "Only federal laws",
            "Station policies",
            "Personal preferences"
          ],
          correctAnswer: 0,
          explanation: "State laws vary and must be understood locally."
        },
        {
          id: 17,
          question: "What challenges improperly denied requests?",
          options: [
            "Appeal processes",
            "Giving up",
            "Accepting denials",
            "Complaining publicly"
          ],
          correctAnswer: 0,
          explanation: "Appeals can overcome improper access denials."
        },
        {
          id: 18,
          question: "What prepares data for analysis?",
          options: [
            "Data cleaning",
            "Data collection only",
            "Data publication",
            "Data storage"
          ],
          correctAnswer: 0,
          explanation: "Clean data produces accurate analysis."
        },
        {
          id: 19,
          question: "What gathers supporting documentation?",
          options: [
            "Evidence accumulation",
            "Opinion gathering",
            "Rumor collection",
            "Guesswork"
          ],
          correctAnswer: 0,
          explanation: "Evidence builds credible investigative stories."
        },
        {
          id: 20,
          question: "What shows why findings matter?",
          options: [
            "Impact demonstration",
            "Data presentation only",
            "Source listing",
            "Process description"
          ],
          correctAnswer: 0,
          explanation: "Showing impact connects findings to viewer concerns."
        }
      ]
    },
    
    {
      id: 2,
      title: "Broadcast Writing & Storytelling",
      completed: false,
      content: `# Module 2: Broadcast Writing & Storytelling

## Writing for the Ear and Eye
This module covers advanced writing techniques specifically for broadcast journalism. You'll learn to write for television's unique requirements of simplicity, clarity, and visual synergy.

### Broadcast Writing Principles
Broadcast writing differs significantly from print journalism. It must be conversational, clear, and designed to be heard rather than read.

**Broadcast writing characteristics:**
- **Conversational tone**: Writing as people speak
- **Simple sentence structure**: Short, clear sentences
- **Active voice**: Emphasizing who does what
- **Present tense focus**: Creating immediacy and relevance

### Writing for Visual Media
Television writing must complement and enhance visual elements. Words and images should work together to tell complete stories.

**Visual writing techniques:**
- **Complementary writing**: Words that enhance rather than repeat visuals
- **Natural sound incorporation**: Writing around ambient and interview audio
- **Visual cue alignment**: Timing words with appropriate visual changes
- **Graphic integration**: Writing to introduce and explain on-screen graphics

### Story Structure for Broadcast
Broadcast stories follow specific structures that work within time constraints and maintain viewer attention.

**Broadcast story structures:**
- **Inverted pyramid for TV**: Most important information first, but with narrative flow
- **Package structure**: Introduction, body, conclusion with natural transitions
- **Reader-VO-SOT patterns**: Combining anchor reads, voiceovers, and soundbites
- **Teases and tags**: Beginning and ending elements that engage viewers

### Script Formatting Standards
Professional broadcast scripts follow specific formatting conventions that help production teams and on-air talent.

**Script formatting elements:**
- **Two-column format**: Video instructions left, audio script right
- **Time notations**: Indicating story duration
- **Technical directions**: Camera shots, graphics, sound cues
- **Talent notations**: Anchor names, reporter identifications

### Writing for Different Broadcast Formats
Different broadcast formats require different writing approaches, from short news readers to long-form documentaries.

**Format-specific writing:**
- **News readers**: Short anchor-read stories (15-30 seconds)
- **Voiceovers**: Anchor narration over video (30-60 seconds)
- **Packages**: Reporter-produced stories (1:30-2:30 minutes)
- **Documentaries**: Long-form storytelling with complex narratives

### Ethical Writing Practices
Broadcast writing carries ethical responsibilities regarding accuracy, fairness, and clarity.

**Writing ethics:**
- **Accuracy verification**: Confirming all facts before writing
- **Fair representation**: Presenting multiple perspectives when appropriate
- **Clarity over cleverness**: Choosing clear expression over witty phrasing
- **Transparent sourcing**: Attributing information clearly and appropriately

---

## Key Learning Points
- Broadcast writing must be conversational and clear
- Writing should complement visual elements, not duplicate them
- Specific story structures work best for television
- Professional scripts follow standard formatting conventions
- Different formats require different writing approaches
- Ethical writing practices maintain journalistic integrity

Master broadcast writing to create compelling television journalism!`,
      
      quiz: [
        {
          id: 1,
          question: "How should broadcast writing sound?",
          options: [
            "Conversational like speech",
            "Formal like academic papers",
            "Complex like legal documents",
            "Poetic like literature"
          ],
          correctAnswer: 0,
          explanation: "Conversational writing connects with television audiences."
        },
        {
          id: 2,
          question: "What sentence structure works best for broadcast?",
          options: [
            "Short and clear sentences",
            "Long, complex sentences",
            "Sentence fragments only",
            "Questions without answers"
          ],
          correctAnswer: 0,
          explanation: "Simple sentences are easier to understand when heard."
        },
        {
          id: 3,
          question: "What voice emphasizes who does what?",
          options: [
            "Active voice",
            "Passive voice",
            "Neutral voice",
            "Formal voice"
          ],
          correctAnswer: 0,
          explanation: "Active voice creates stronger, clearer sentences."
        },
        {
          id: 4,
          question: "What creates immediacy and relevance?",
          options: [
            "Present tense focus",
            "Past tense only",
            "Future tense speculation",
            "Conditional tense"
          ],
          correctAnswer: 0,
          explanation: "Present tense makes stories feel current and relevant."
        },
        {
          id: 5,
          question: "How should words relate to visuals?",
          options: [
            "Complement rather than repeat",
            "Repeat exactly",
            "Ignore completely",
            "Contradict intentionally"
          ],
          correctAnswer: 0,
          explanation: "Complementary writing uses words and images together effectively."
        },
        {
          id: 6,
          question: "What includes ambient and interview audio?",
          options: [
            "Natural sound incorporation",
            "Script reading only",
            "Music addition",
            "Silence"
          ],
          correctAnswer: 0,
          explanation: "Natural sound adds authenticity to broadcast stories."
        },
        {
          id: 7,
          question: "What combines anchor reads and soundbites?",
          options: [
            "Reader-VO-SOT patterns",
            "Only anchor monologues",
            "Silent video only",
            "Music videos"
          ],
          correctAnswer: 0,
          explanation: "These patterns create varied, engaging storytelling."
        },
        {
          id: 8,
          question: "What format has video left, audio right?",
          options: [
            "Two-column format",
            "Single column format",
            "Paragraph format",
            "Bullet point format"
          ],
          correctAnswer: 0,
          explanation: "Two-column scripts help production teams coordinate elements."
        },
        {
          id: 9,
          question: "What indicates story duration?",
          options: [
            "Time notations",
            "Page numbers",
            "Word counts",
            "Font sizes"
          ],
          correctAnswer: 0,
          explanation: "Time notations help producers manage broadcast schedules."
        },
        {
          id: 10,
          question: "What are short anchor-read stories?",
          options: [
            "News readers",
            "Documentaries",
            "Investigative reports",
            "Live shots"
          ],
          correctAnswer: 0,
          explanation: "Readers are brief stories read entirely by anchors."
        },
        {
          id: 11,
          question: "What are reporter-produced stories?",
          options: [
            "Packages",
            "Readers",
            "Voiceovers",
            "Teases"
          ],
          correctAnswer: 0,
          explanation: "Packages include reporter narration, interviews, and video."
        },
        {
          id: 12,
          question: "What confirms all facts before writing?",
          options: [
            "Accuracy verification",
            "Creative writing",
            "Assumption making",
            "Source guessing"
          ],
          correctAnswer: 0,
          explanation: "Verification ensures broadcast accuracy."
        },
        {
          id: 13,
          question: "What presents multiple perspectives?",
          options: [
            "Fair representation",
            "Single viewpoint",
            "Personal opinion",
            "Popular opinion only"
          ],
          correctAnswer: 0,
          explanation: "Fairness includes relevant viewpoints in stories."
        },
        {
          id: 14,
          question: "What should be chosen over witty phrasing?",
          options: [
            "Clarity",
            "Complexity",
            "Humor",
            "Drama"
          ],
          correctAnswer: 0,
          explanation: "Clear communication serves viewers better than cleverness."
        },
        {
          id: 15,
          question: "What attributes information appropriately?",
          options: [
            "Transparent sourcing",
            "Anonymous reporting",
            "Personal knowledge",
            "Common knowledge assumption"
          ],
          correctAnswer: 0,
          explanation: "Clear sourcing maintains credibility and transparency."
        },
        {
          id: 16,
          question: "What includes camera shots and graphics?",
          options: [
            "Technical directions",
            "Only dialogue",
            "Personal notes",
            "Source information"
          ],
          correctAnswer: 0,
          explanation: "Technical directions guide production elements."
        },
        {
          id: 17,
          question: "What begins and ends with engaging elements?",
          options: [
            "Teases and tags",
            "Only main content",
            "Credits only",
            "Advertisements"
          ],
          correctAnswer: 0,
          explanation: "Teases grab attention; tags provide closure."
        },
        {
          id: 18,
          question: "What has complex narratives?",
          options: [
            "Documentaries",
            "News readers",
            "Weather reports",
            "Sports highlights"
          ],
          correctAnswer: 0,
          explanation: "Documentaries explore topics in depth over longer formats."
        },
        {
          id: 19,
          question: "What maintains journalistic integrity?",
          options: [
            "Ethical writing practices",
            "Entertaining writing only",
            "Fast writing",
            "Beautiful writing"
          ],
          correctAnswer: 0,
          explanation: "Ethics distinguish journalism from other communication forms."
        },
        {
          id: 20,
          question: "What creates compelling television journalism?",
          options: [
            "Mastering broadcast writing",
            "Only good video",
            "Famous reporters",
            "Expensive equipment"
          ],
          correctAnswer: 0,
          explanation: "Writing forms the foundation of broadcast storytelling."
        }
      ]
    },
    
    {
      id: 3,
      title: "Field Production & Live Reporting",
      completed: false,
      content: `# Module 3: Field Production & Live Reporting

## Producing Stories On Location
This module covers advanced field production techniques and live reporting skills. You'll learn to gather, produce, and transmit stories from anywhere.

### Field Production Planning
Successful field production requires thorough planning and preparation before leaving the newsroom.

**Pre-production planning:**
- **Story research**: Understanding the story and context
- **Location scouting**: Identifying appropriate shooting locations
- **Equipment preparation**: Ensuring all necessary gear is ready
- **Logistics coordination**: Arranging transportation, permissions, and access

### Camera Techniques for Journalism
Broadcast journalists need basic camera skills to gather visual material that tells stories effectively.

**Journalistic camera work:**
- **Composition principles**: Framing shots that communicate clearly
- **Sequence shooting**: Gathering related shots that edit together
- **Natural sound capture**: Recording ambient audio that enhances stories
- **Lighting considerations**: Working with available light effectively

### Audio Gathering for Broadcast
Clear, high-quality audio is essential for professional broadcast journalism. Different situations require different audio approaches.

**Audio techniques:**
- **Microphone selection**: Choosing appropriate mics for different situations
- **Interview audio**: Recording clear, usable interview sound
- **Natural sound gathering**: Capturing environmental audio that adds context
- **Audio monitoring**: Checking audio quality during recording

### Live Reporting Techniques
Live reporting requires special skills to deliver information clearly while managing technical elements and unpredictable situations.

**Live reporting skills:**
- **Location selection**: Choosing backgrounds that support stories
- **Communication management**: Coordinating with control room and crews
- **Improvisation ability**: Adapting to changing situations
- **Time management**: Delivering information within allotted time

### Satellite and Microwave Technology
Understanding transmission technology enables reliable live reporting from remote locations.

**Transmission methods:**
- **Satellite trucks**: Mobile units for live transmission
- **Microwave links**: Line-of-sight transmission for shorter distances
- **LiveU/Dejero units**: Cellular-based live transmission systems
- **Backup systems**: Alternative transmission methods when primary fails

### Multi-Platform Field Reporting
Modern field reporting often involves creating content for multiple platforms simultaneously.

**Multi-platform approaches:**
- **Broadcast content**: High-quality video for television
- **Digital content**: Additional material for websites and apps
- **Social media content**: Real-time updates for social platforms
- **Content adaptation**: Repurposing material for different platforms

### Safety and Security in the Field
Field reporting can involve risks. Understanding safety protocols protects journalists and crews.

**Field safety considerations:**
- **Risk assessment**: Evaluating potential dangers before going into field
- **Emergency procedures**: Knowing how to handle dangerous situations
- **Equipment security**: Protecting valuable gear in various environments
- **Personal safety**: Maintaining awareness and taking precautions

---

## Key Learning Points
- Thorough planning enables successful field production
- Basic camera skills help gather effective visual material
- High-quality audio is essential for professional journalism
- Live reporting requires special skills and adaptability
- Understanding transmission technology enables reliable reporting
- Multi-platform reporting creates content for different audiences
- Safety protocols protect journalists in the field

Master field production to tell compelling stories from anywhere!`,
      
      quiz: [
        {
          id: 1,
          question: "What requires thorough planning before leaving?",
          options: [
            "Field production",
            "Studio anchoring",
            "Script writing",
            "Editing only"
          ],
          correctAnswer: 0,
          explanation: "Planning prevents problems during field production."
        },
        {
          id: 2,
          question: "What involves understanding story and context?",
          options: [
            "Story research",
            "Equipment packing",
            "Travel arrangements",
            "Camera operation"
          ],
          correctAnswer: 0,
          explanation: "Research informs effective field production decisions."
        },
        {
          id: 3,
          question: "What identifies appropriate shooting locations?",
          options: [
            "Location scouting",
            "Random selection",
            "Studio shooting only",
            "Crowd following"
          ],
          correctAnswer: 0,
          explanation: "Good locations enhance visual storytelling."
        },
        {
          id: 4,
          question: "What frames shots that communicate clearly?",
          options: [
            "Composition principles",
            "Random framing",
            "Maximum zoom",
            "Constant movement"
          ],
          correctAnswer: 0,
          explanation: "Good composition helps viewers understand visual information."
        },
        {
          id: 5,
          question: "What gathers related shots that edit together?",
          options: [
            "Sequence shooting",
            "Single shot only",
            "Random shooting",
            "Duplicate shooting"
          ],
          correctAnswer: 0,
          explanation: "Sequences create visual stories through editing."
        },
        {
          id: 6,
          question: "What records ambient audio that enhances stories?",
          options: [
            "Natural sound capture",
            "Silence only",
            "Music addition",
            "Voiceover only"
          ],
          correctAnswer: 0,
          explanation: "Natural sound adds authenticity and context."
        },
        {
          id: 7,
          question: "What is essential for professional journalism?",
          options: [
            "High-quality audio",
            "Only good video",
            "Fast reporting",
            "Beautiful images"
          ],
          correctAnswer: 0,
          explanation: "Clear audio carries much of the information in broadcast stories."
        },
        {
          id: 8,
          question: "What chooses appropriate mics for situations?",
          options: [
            "Microphone selection",
            "Using any mic available",
            "No microphone use",
            "Only wireless mics"
          ],
          correctAnswer: 0,
          explanation: "Proper mic selection ensures good audio quality."
        },
        {
          id: 9,
          question: "What requires adapting to changing situations?",
          options: [
            "Improvisation ability",
            "Strict scripting",
            "Studio control only",
            "Pre-recorded content"
          ],
          correctAnswer: 0,
          explanation: "Live field situations often require adaptation."
        },
        {
          id: 10,
          question: "What are mobile units for live transmission?",
          options: [
            "Satellite trucks",
            "Regular cars",
            "Studio cameras",
            "Editing suites"
          ],
          correctAnswer: 0,
          explanation: "Satellite trucks transmit live video from remote locations."
        },
        {
          id: 11,
          question: "What is line-of-sight transmission?",
          options: [
            "Microwave links",
            "Satellite transmission",
            "Cellular transmission",
            "Internet streaming"
          ],
          correctAnswer: 0,
          explanation: "Microwave requires clear paths between antennas."
        },
        {
          id: 12,
          question: "What creates content for multiple platforms?",
          options: [
            "Multi-platform reporting",
            "Only television reporting",
            "Radio reporting only",
            "Print reporting"
          ],
          correctAnswer: 0,
          explanation: "Modern journalism often serves multiple platforms simultaneously."
        },
        {
          id: 13,
          question: "What provides real-time updates?",
          options: [
            "Social media content",
            "Only broadcast content",
            "Monthly reports",
            "Annual summaries"
          ],
          correctAnswer: 0,
          explanation: "Social media allows immediate updates from the field."
        },
        {
          id: 14,
          question: "What evaluates potential dangers?",
          options: [
            "Risk assessment",
            "Ignoring risks",
            "Assuming safety",
            "Following others"
          ],
          correctAnswer: 0,
          explanation: "Assessment helps prepare for and avoid dangers."
        },
        {
          id: 15,
          question: "What handles dangerous situations?",
          options: [
            "Emergency procedures",
            "Panic responses",
            "Ignoring problems",
            "Waiting for help"
          ],
          correctAnswer: 0,
          explanation: "Procedures provide guidance during emergencies."
        },
        {
          id: 16,
          question: "What ensures all necessary gear is ready?",
          options: [
            "Equipment preparation",
            "Last-minute packing",
            "Borrowing equipment",
            "Using whatever's available"
          ],
          correctAnswer: 0,
          explanation: "Preparation prevents equipment problems in the field."
        },
        {
          id: 17,
          question: "What works with available light effectively?",
          options: [
            "Lighting considerations",
            "Ignoring light",
            "Only studio lighting",
            "Always using flash"
          ],
          correctAnswer: 0,
          explanation: "Understanding light improves video quality in the field."
        },
        {
          id: 18,
          question: "What checks audio quality during recording?",
          options: [
            "Audio monitoring",
            "Guessing audio quality",
            "Checking later",
            "Assuming good audio"
          ],
          correctAnswer: 0,
          explanation: "Monitoring catches audio problems immediately."
        },
        {
          id: 19,
          question: "What protects valuable gear?",
          options: [
            "Equipment security",
            "Leaving gear unattended",
            "Sharing gear widely",
            "Using cheap equipment"
          ],
          correctAnswer: 0,
          explanation: "Security prevents theft and damage."
        },
        {
          id: 20,
          question: "What tells compelling stories from anywhere?",
          options: [
            "Mastering field production",
            "Only studio work",
            "Office-based reporting",
            "Second-hand reporting"
          ],
          correctAnswer: 0,
          explanation: "Field skills enable on-location storytelling."
        }
      ]
    },
    
    {
      id: 4,
      title: "Advanced Video Editing & Production",
      completed: false,
      content: `# Module 4: Advanced Video Editing & Production

## Crafting Compelling Visual Stories
This module covers professional video editing techniques and production principles for broadcast journalism. You'll learn to transform raw footage into polished stories.

### Broadcast Editing Principles
Editing for broadcast journalism follows specific principles that serve journalistic integrity and audience understanding.

**Editing ethics and principles:**
- **Truthful representation**: Editing that accurately represents events
- **Context preservation**: Maintaining proper context of shots and sounds
- **Pace and rhythm**: Creating editing rhythms that support storytelling
- **Visual continuity**: Ensuring smooth visual flow between shots

### Nonlinear Editing Systems
Modern broadcast editing uses nonlinear editing (NLE) systems that allow flexible, non-destructive editing.

**NLE fundamentals:**
- **Timeline editing**: Arranging clips along a visual timeline
- **Clip management**: Organizing footage for efficient editing
- **Transition effects**: Using cuts, dissolves, and other transitions appropriately
- **Multi-track editing**: Layering video, audio, and graphics tracks

### Story Assembly Techniques
Assembling stories from raw footage requires systematic approaches to create coherent narratives.

**Assembly methods:**
- **Rough cutting**: Creating initial story structure
- **Fine cutting**: Refining timing and shot selection
- **Pacing adjustment**: Controlling story rhythm through editing
- **Sequence building**: Constructing logical visual sequences

### Audio Editing for Broadcast
Audio editing enhances storytelling through careful sound design and mixing.

**Audio editing techniques:**
- **Soundbite selection**: Choosing the most effective interview segments
- **Natural sound integration**: Weaving ambient sound into stories
- **Voiceover editing**: Smoothing reporter narration
- **Audio mixing**: Balancing all audio elements for clarity

### Graphics and Effects
Graphics and effects enhance understanding when used appropriately in journalistic contexts.

**Graphic considerations:**
- **Lower thirds**: Text identification of people and places
- **Full-screen graphics**: Maps, charts, and explanatory graphics
- **Effects appropriateness**: Using effects that serve the story, not distract
- **Brand consistency**: Following station graphic standards

### Color Correction and Grading
Color correction ensures consistent, accurate color representation, while grading can enhance mood when appropriate.

**Color techniques:**
- **Exposure correction**: Fixing lighting problems in footage
- **Color balancing**: Ensuring consistent color across shots
- **Contrast adjustment**: Improving visual clarity
- **Style considerations**: Applying appropriate visual styles for stories

### Editing for Different Formats
Different broadcast formats require different editing approaches and pacing.

**Format-specific editing:**
- **News package editing**: Fast-paced, information-dense editing
- **Documentary editing**: Slower pacing for complex narratives
- **Feature editing**: More creative approaches for human interest stories
- **Live editing**: Quick editing for immediate broadcast

### Quality Control and Technical Standards
Broadcast editing must meet specific technical standards for air quality.

**Quality considerations:**
- **Technical specifications**: Meeting station technical requirements
- **Audio level standards**: Complying with broadcast audio standards
- **Format compliance**: Ensuring compatibility with broadcast systems
- **Final review processes**: Checking finished pieces before air

---

## Key Learning Points
- Broadcast editing must maintain journalistic integrity
- Nonlinear editing systems provide flexible editing capabilities
- Systematic story assembly creates coherent narratives
- Audio editing enhances storytelling through sound design
- Graphics should enhance understanding, not distract
- Color correction ensures consistent, accurate representation
- Different formats require different editing approaches
- Technical standards must be met for broadcast quality

Master video editing to craft professional broadcast stories!`,
      
      quiz: [
        {
          id: 1,
          question: "What accurately represents events?",
          options: [
            "Truthful representation",
            "Dramatic enhancement",
            "Creative interpretation",
            "Entertaining manipulation"
          ],
          correctAnswer: 0,
          explanation: "Journalistic editing must represent reality accurately."
        },
        {
          id: 2,
          question: "What maintains proper context?",
          options: [
            "Context preservation",
            "Context removal",
            "Context changing",
            "Context ignoring"
          ],
          correctAnswer: 0,
          explanation: "Proper context ensures accurate understanding."
        },
        {
          id: 3,
          question: "What allows flexible, non-destructive editing?",
          options: [
            "Nonlinear editing systems",
            "Linear editing systems",
            "Film editing",
            "Live switching"
          ],
          correctAnswer: 0,
          explanation: "NLEs allow changes without damaging original footage."
        },
        {
          id: 4,
          question: "What arranges clips along a visual timeline?",
          options: [
            "Timeline editing",
            "Random editing",
            "Sequential shooting only",
            "Live broadcasting"
          ],
          correctAnswer: 0,
          explanation: "Timelines visualize story structure during editing."
        },
        {
          id: 5,
          question: "What creates initial story structure?",
          options: [
            "Rough cutting",
            "Final editing",
            "Color correction",
            "Audio mixing"
          ],
          correctAnswer: 0,
          explanation: "Rough cuts establish basic story flow."
        },
        {
          id: 6,
          question: "What refines timing and shot selection?",
          options: [
            "Fine cutting",
            "Rough assembly",
            "Shot logging",
            "File management"
          ],
          correctAnswer: 0,
          explanation: "Fine cutting polishes the edit for broadcast."
        },
        {
          id: 7,
          question: "What chooses effective interview segments?",
          options: [
            "Soundbite selection",
            "Using all interviews",
            "Ignoring interviews",
            "Creating dialogue"
          ],
          correctAnswer: 0,
          explanation: "Selecting the best soundbites creates stronger stories."
        },
        {
          id: 8,
          question: "What weaves ambient sound into stories?",
          options: [
            "Natural sound integration",
            "Silence only",
            "Music replacement",
            "Voiceover only"
          ],
          correctAnswer: 0,
          explanation: "Natural sound adds authenticity and atmosphere."
        },
        {
          id: 9,
          question: "What identifies people and places?",
          options: [
            "Lower thirds",
            "Full-screen graphics",
            "Background music",
            "Voice identification"
          ],
          correctAnswer: 0,
          explanation: "Lower thirds provide essential identification information."
        },
        {
          id: 10,
          question: "What includes maps and charts?",
          options: [
            "Full-screen graphics",
            "Lower thirds only",
            "Video footage",
            "Interview clips"
          ],
          correctAnswer: 0,
          explanation: "Full-screen graphics explain complex information visually."
        },
        {
          id: 11,
          question: "What fixes lighting problems?",
          options: [
            "Exposure correction",
            "Color addition",
            "Contrast reduction",
            "Style application"
          ],
          correctAnswer: 0,
          explanation: "Exposure correction fixes over- or under-exposed footage."
        },
        {
          id: 12,
          question: "What ensures consistent color?",
          options: [
            "Color balancing",
            "Random color",
            "Black and white only",
            "Color ignoring"
          ],
          correctAnswer: 0,
          explanation: "Color balancing makes shots match visually."
        },
        {
          id: 13,
          question: "What has fast-paced, information-dense editing?",
          options: [
            "News package editing",
            "Documentary editing",
            "Feature editing",
            "Experimental editing"
          ],
          correctAnswer: 0,
          explanation: "News packages convey information efficiently."
        },
        {
          id: 14,
          question: "What has slower pacing for complex narratives?",
          options: [
            "Documentary editing",
            "News editing",
            "Commercial editing",
            "Music video editing"
          ],
          correctAnswer: 0,
          explanation: "Documentaries allow more time for complex storytelling."
        },
        {
          id: 15,
          question: "What meets station technical requirements?",
          options: [
            "Technical specifications",
            "Personal preferences",
            "Creative choices",
            "Budget limitations"
          ],
          correctAnswer: 0,
          explanation: "Technical specs ensure broadcast compatibility."
        },
        {
          id: 16,
          question: "What complies with broadcast audio standards?",
          options: [
            "Audio level standards",
            "Random audio levels",
            "Maximum volume",
            "Minimum volume"
          ],
          correctAnswer: 0,
          explanation: "Standard audio levels ensure consistent broadcast quality."
        },
        {
          id: 17,
          question: "What ensures compatibility with broadcast systems?",
          options: [
            "Format compliance",
            "Any format use",
            "Experimental formats",
            "Old formats only"
          ],
          correctAnswer: 0,
          explanation: "Compatible formats work with broadcast equipment."
        },
        {
          id: 18,
          question: "What creates editing rhythms for storytelling?",
          options: [
            "Pace and rhythm",
            "Random timing",
            "Constant speed",
            "No rhythm"
          ],
          correctAnswer: 0,
          explanation: "Rhythmic editing enhances storytelling effectiveness."
        },
        {
          id: 19,
          question: "What ensures smooth visual flow?",
          options: [
            "Visual continuity",
            "Visual disruption",
            "Constant cutting",
            "Still images only"
          ],
          correctAnswer: 0,
          explanation: "Continuity creates comfortable viewing experiences."
        },
        {
          id: 20,
          question: "What crafts professional broadcast stories?",
          options: [
            "Mastering video editing",
            "Only shooting footage",
            "Writing scripts",
            "Anchoring only"
          ],
          correctAnswer: 0,
          explanation: "Editing transforms raw material into finished stories."
        }
      ]
    },
    
    {
      id: 5,
      title: "Media Law & Ethics in Broadcast",
      completed: false,
      content: `# Module 5: Media Law & Ethics in Broadcast

## Legal and Ethical Foundations
This module covers the legal and ethical frameworks governing broadcast journalism. You'll learn to navigate complex legal issues while maintaining high ethical standards.

### First Amendment Principles
The First Amendment provides crucial protections for journalism, but also carries responsibilities.

**First Amendment applications:**
- **Press freedoms**: Rights to gather and publish information
- **Limitations and responsibilities**: Understanding where freedoms have limits
- **Prior restraint**: Legal restrictions on publishing certain information
- **Public forum doctrine**: Rights in different types of public spaces

### Defamation and Libel Law
Defamation law protects individuals from false, damaging statements. Broadcast journalists must understand these risks.

**Defamation considerations:**
- **Elements of defamation**: False statement, publication, identification, harm, fault
- **Defenses against defamation**: Truth, privilege, fair comment
- **Public vs. private figures**: Different standards for different people
- **Actual malice standard**: Knowing falsity or reckless disregard for truth

### Privacy Law and Ethics
Privacy law balances news gathering with individual privacy rights. Ethical considerations often exceed legal requirements.

**Privacy issues:**
- **Intrusion**: Physical or technological invasion of privacy
- **Private facts**: Publishing embarrassing private information
- **False light**: Creating misleading impressions about people
- **Appropriation**: Unauthorized use of someone's name or likeness

### Copyright and Fair Use
Copyright law protects creative works, while fair use allows limited use for purposes like news reporting.

**Copyright considerations:**
- **Copyright basics**: What is protected and for how long
- **Fair use doctrine**: Using copyrighted material for news purposes
- **Licensing requirements**: When permission is needed
- **Public domain material**: Works no longer under copyright protection

### Broadcast Regulation
Broadcast journalism operates under specific federal regulations that don't apply to print or digital media.

**Broadcast regulations:**
- **FCC jurisdiction**: Federal Communications Commission oversight
- **Equal time rule**: Requirements for political candidates
- **Indecency regulations**: Restrictions on broadcast content
- **Public interest standard**: Serving community needs and interests

### Ethical Decision-Making
Ethical guidelines help journalists navigate complex situations where the law provides limited guidance.

**Ethical frameworks:**
- **SPJ Code of Ethics**: Society of Professional Journalists guidelines
- **Harm minimization**: Considering potential harm from reporting
- **Transparency**: Being open about methods and limitations
- **Accountability**: Taking responsibility for journalistic work

### Confidential Sources and Whistleblowers
Protecting sources is both an ethical commitment and sometimes a legal issue.

**Source protection:**
- **Confidentiality promises**: When and how to protect sources
- **Shield laws**: Legal protections for journalists in some jurisdictions
- **Subpoena responses**: Legal demands for information or testimony
- **Whistleblower protocols**: Working with people revealing wrongdoing

### Access and Freedom of Information
Laws provide access to government information, but journalists must know how to use them effectively.

**Access issues:**
- **Sunshine laws**: Requirements for open government meetings
- **Record request strategies**: Effective approaches to obtaining documents
- **Appeal processes**: Challenging improper denials of access
- **Digital access issues**: Obtaining electronic records and data

---

## Key Learning Points
- First Amendment protections come with responsibilities
- Defamation law requires careful fact-checking and attribution
- Privacy considerations often exceed legal requirements
- Copyright and fair use allow limited use of others' material
- Broadcast has specific regulatory requirements
- Ethical guidelines help navigate complex situations
- Source protection involves both ethics and law
- Access laws provide tools for obtaining information

Understand media law and ethics to practice responsible broadcast journalism!`,
      
      quiz: [
        {
          id: 1,
          question: "What provides crucial protections for journalism?",
          options: [
            "First Amendment",
            "Copyright law",
            "Privacy law",
            "Broadcast regulations"
          ],
          correctAnswer: 0,
          explanation: "The First Amendment protects freedom of the press."
        },
        {
          id: 2,
          question: "What protects from false, damaging statements?",
          options: [
            "Defamation law",
            "Copyright law",
            "Privacy law",
            "Contract law"
          ],
          correctAnswer: 0,
          explanation: "Defamation includes libel (written) and slander (spoken)."
        },
        {
          id: 3,
          question: "What are elements of defamation?",
          options: [
            "False statement, publication, identification, harm, fault",
            "True statement, private conversation, general reference",
            "Opinion, publication, no identification, no harm",
            "Fact, limited distribution, public figure, no fault"
          ],
          correctAnswer: 0,
          explanation: "All elements must be present for defamation claims."
        },
        {
          id: 4,
          question: "What is knowing falsity or reckless disregard?",
          options: [
            "Actual malice standard",
            "Negligence standard",
            "Strict liability",
            "Reasonable care"
          ],
          correctAnswer: 0,
          explanation: "Actual malice applies to public figures in defamation cases."
        },
        {
          id: 5,
          question: "What balances news gathering with privacy rights?",
          options: [
            "Privacy law",
            "Copyright law",
            "Defamation law",
            "Contract law"
          ],
          correctAnswer: 0,
          explanation: "Privacy law protects individuals from certain intrusions."
        },
        {
          id: 6,
          question: "What is physical invasion of privacy?",
          options: [
            "Intrusion",
            "Private facts",
            "False light",
            "Appropriation"
          ],
          correctAnswer: 0,
          explanation: "Intrusion involves unwanted physical or technological invasion."
        },
        {
          id: 7,
          question: "What protects creative works?",
          options: [
            "Copyright law",
            "Privacy law",
            "Defamation law",
            "Contract law"
          ],
          correctAnswer: 0,
          explanation: "Copyright protects original works of authorship."
        },
        {
          id: 8,
          question: "What allows limited use for news purposes?",
          options: [
            "Fair use doctrine",
            "Complete freedom",
            "No use allowed",
            "Purchase requirement"
          ],
          correctAnswer: 0,
          explanation: "Fair use allows limited use without permission for purposes like news."
        },
        {
          id: 9,
          question: "What oversees broadcast regulation?",
          options: [
            "FCC jurisdiction",
            "Local governments",
            "State agencies",
            "International bodies"
          ],
          correctAnswer: 0,
          explanation: "The Federal Communications Commission regulates broadcasting."
        },
        {
          id: 10,
          question: "What has requirements for political candidates?",
          options: [
            "Equal time rule",
            "Fairness doctrine",
            "Public interest standard",
            "Indecency regulations"
          ],
          correctAnswer: 0,
          explanation: "Equal time requires comparable opportunities for candidates."
        },
        {
          id: 11,
          question: "What provides ethical guidelines?",
          options: [
            "SPJ Code of Ethics",
            "Government regulations",
            "Station policies only",
            "Personal preferences"
          ],
          correctAnswer: 0,
          explanation: "SPJ provides widely accepted ethical standards for journalists."
        },
        {
          id: 12,
          question: "What considers potential harm from reporting?",
          options: [
            "Harm minimization",
            "Maximum impact",
            "Entertainment value",
            "Ratings only"
          ],
          correctAnswer: 0,
          explanation: "Ethical journalism considers potential consequences."
        },
        {
          id: 13,
          question: "What involves protecting source identities?",
          options: [
            "Confidentiality promises",
            "Public identification",
            "Government reporting",
            "Social media posting"
          ],
          correctAnswer: 0,
          explanation: "Protecting sources maintains trust and enables reporting."
        },
        {
          id: 14,
          question: "What provides legal protections in some jurisdictions?",
          options: [
            "Shield laws",
            "Privacy laws",
            "Copyright laws",
            "Defamation laws"
          ],
          correctAnswer: 0,
          explanation: "Shield laws protect journalists from revealing sources."
        },
        {
          id: 15,
          question: "What requires open government meetings?",
          options: [
            "Sunshine laws",
            "Privacy laws",
            "Copyright laws",
            "Defamation laws"
          ],
          correctAnswer: 0,
          explanation: "Sunshine laws ensure government transparency."
        },
        {
          id: 16,
          question: "What helps navigate complex situations?",
          options: [
            "Ethical guidelines",
            "Only legal requirements",
            "Personal feelings",
            "Audience preferences"
          ],
          correctAnswer: 0,
          explanation: "Ethics provide guidance beyond legal requirements."
        },
        {
          id: 17,
          question: "What involves working with people revealing wrongdoing?",
          options: [
            "Whistleblower protocols",
            "Government cooperation",
            "Public announcements",
            "Legal threats"
          ],
          correctAnswer: 0,
          explanation: "Whistleblowers provide important information about problems."
        },
        {
          id: 18,
          question: "What challenges improper denials of access?",
          options: [
            "Appeal processes",
            "Accepting denials",
            "Giving up",
            "Public complaints"
          ],
          correctAnswer: 0,
          explanation: "Appeals can overcome improper access restrictions."
        },
        {
          id: 19,
          question: "What serves community needs and interests?",
          options: [
            "Public interest standard",
            "Commercial interests only",
            "Government interests",
            "Personal interests"
          ],
          correctAnswer: 0,
          explanation: "Broadcasters must serve public interest as part of licensing."
        },
        {
          id: 20,
          question: "What practices responsible broadcast journalism?",
          options: [
            "Understanding media law and ethics",
            "Ignoring legal issues",
            "Following only personal ethics",
            "Avoiding controversial topics"
          ],
          correctAnswer: 0,
          explanation: "Legal and ethical understanding enables responsible practice."
        }
      ]
    },
    
    {
      id: 6,
      title: "Broadcast Management & Innovation",
      completed: false,
      content: `# Module 6: Broadcast Management & Innovation

## Leading in Changing Media Landscape
This final module covers broadcast management, audience engagement, and innovation in modern journalism. You'll learn to lead and adapt in evolving media environments.

### Newsroom Management
Effective newsroom management balances editorial excellence with operational efficiency in fast-paced environments.

**Management principles:**
- **Editorial leadership**: Guiding journalistic quality and ethics
- **Resource allocation**: Managing personnel, equipment, and budgets
- **Workflow optimization**: Streamlining news gathering and production
- **Team development**: Building and maintaining effective news teams

### Audience Engagement Strategies
Modern broadcasting requires active audience engagement across multiple platforms.

**Engagement approaches:**
- **Multi-platform distribution**: Reaching audiences through various channels
- **Community engagement**: Connecting with local communities
- **Audience feedback integration**: Using viewer input to improve content
- **Social media strategy**: Effective use of social platforms for journalism

### Digital Transformation
Broadcast journalism is evolving with digital technology, requiring adaptation and innovation.

**Digital evolution:**
- **Streaming and on-demand**: Delivering content beyond traditional broadcast
- **Mobile journalism**: Creating content specifically for mobile devices
- **Interactive storytelling**: Engaging audiences through interactive elements
- **Data-driven content**: Using analytics to inform editorial decisions

### Revenue Models and Sustainability
Understanding broadcast economics helps ensure journalistic sustainability.

**Revenue considerations:**
- **Traditional advertising**: Commercial sponsorship of broadcast content
- **Subscription models**: Viewer-paid content access
- **Sponsored content**: Brand-supported journalism with transparency
- **Grant funding**: Foundation support for specific journalism projects

### Innovation in Journalism
Journalistic innovation develops new approaches to storytelling and audience service.

**Innovation areas:**
- **Immersive journalism**: VR, AR, and immersive storytelling techniques
- **Collaborative journalism**: Partnerships across news organizations
- **Solutions journalism**: Focusing on responses to problems, not just problems
- **Explanatory journalism**: Making complex issues understandable

### Leadership in Journalism
Journalistic leadership involves guiding teams through change while maintaining core values.

**Leadership skills:**
- **Vision development**: Articulating clear direction for journalism
- **Change management**: Guiding teams through technological and cultural changes
- **Mentorship**: Developing next-generation journalists
- **Advocacy**: Promoting journalism's value to society

### Future Trends in Broadcasting
Understanding emerging trends helps prepare for future developments in journalism.

**Emerging trends:**
- **Artificial intelligence**: AI tools for journalism production and distribution
- **Personalized content**: Tailoring news to individual preferences and needs
- **Automated production**: Technology-assisted news gathering and production
- **Global collaboration**: International cooperation on major stories

### Career Development in Broadcast Journalism
Building sustainable careers requires ongoing development and adaptation.

**Career development:**
- **Skill diversification**: Developing multiple journalism competencies
- **Portfolio building**: Creating bodies of work that demonstrate ability
- **Networking**: Building professional relationships across the industry
- **Continuous learning**: Staying current with evolving practices and technologies

---

## Key Learning Points
- Effective newsroom management balances quality and efficiency
- Audience engagement requires multi-platform strategies
- Digital transformation creates new opportunities and challenges
- Understanding revenue models supports journalistic sustainability
- Innovation develops new approaches to storytelling
- Leadership guides journalism through changing landscapes
- Future trends will continue transforming broadcast journalism
- Career development requires ongoing learning and adaptation

Master these management and innovation skills to lead in broadcast journalism!`,
      
      quiz: [
        {
          id: 1,
          question: "What balances editorial excellence with efficiency?",
          options: [
            "Newsroom management",
            "Only reporting",
            "Only production",
            "Only advertising"
          ],
          correctAnswer: 0,
          explanation: "Management coordinates all newsroom functions effectively."
        },
        {
          id: 2,
          question: "What guides journalistic quality and ethics?",
          options: [
            "Editorial leadership",
            "Technical operations",
            "Financial management",
            "Marketing only"
          ],
          correctAnswer: 0,
          explanation: "Editorial leadership maintains journalistic standards."
        },
        {
          id: 3,
          question: "What manages personnel and budgets?",
          options: [
            "Resource allocation",
            "Only story assignment",
            "Only equipment use",
            "Only social media"
          ],
          correctAnswer: 0,
          explanation: "Resource management ensures effective operations."
        },
        {
          id: 4,
          question: "What reaches audiences through various channels?",
          options: [
            "Multi-platform distribution",
            "Only television broadcast",
            "Only radio broadcast",
            "Only print distribution"
          ],
          correctAnswer: 0,
          explanation: "Modern audiences access content through multiple platforms."
        },
        {
          id: 5,
          question: "What connects with local communities?",
          options: [
            "Community engagement",
            "Only national reporting",
            "Only international reporting",
            "Only online interaction"
          ],
          correctAnswer: 0,
          explanation: "Community connection builds audience trust and relevance."
        },
        {
          id: 6,
          question: "What delivers content beyond traditional broadcast?",
          options: [
            "Streaming and on-demand",
            "Only live television",
            "Only scheduled programming",
            "Only radio broadcasts"
          ],
          correctAnswer: 0,
          explanation: "Digital platforms provide additional distribution channels."
        },
        {
          id: 7,
          question: "What creates content for mobile devices?",
          options: [
            "Mobile journalism",
            "Only television production",
            "Only radio production",
            "Only print journalism"
          ],
          correctAnswer: 0,
          explanation: "Mobile platforms require specific content approaches."
        },
        {
          id: 8,
          question: "What involves commercial sponsorship?",
          options: [
            "Traditional advertising",
            "Only subscription models",
            "Only grant funding",
            "Only government funding"
          ],
          correctAnswer: 0,
          explanation: "Advertising has traditionally funded much broadcast journalism."
        },
        {
          id: 9,
          question: "What involves viewer-paid content access?",
          options: [
            "Subscription models",
            "Only advertising",
            "Only sponsorships",
            "Only donations"
          ],
          correctAnswer: 0,
          explanation: "Subscriptions provide direct audience financial support."
        },
        {
          id: 10,
          question: "What includes VR and AR techniques?",
          options: [
            "Immersive journalism",
            "Only traditional reporting",
            "Only print journalism",
            "Only radio journalism"
          ],
          correctAnswer: 0,
          explanation: "Immersive technologies create new storytelling possibilities."
        },
        {
          id: 11,
          question: "What involves partnerships across organizations?",
          options: [
            "Collaborative journalism",
            "Only competitive journalism",
            "Only independent work",
            "Only secret investigations"
          ],
          correctAnswer: 0,
          explanation: "Collaboration enables larger-scale journalism projects."
        },
        {
          id: 12,
          question: "What focuses on responses to problems?",
          options: [
            "Solutions journalism",
            "Only problem reporting",
            "Only controversy reporting",
            "Only entertainment reporting"
          ],
          correctAnswer: 0,
          explanation: "Solutions journalism explores how problems are addressed."
        },
        {
          id: 13,
          question: "What articulates clear direction?",
          options: [
            "Vision development",
            "Only daily management",
            "Only technical operations",
            "Only financial management"
          ],
          correctAnswer: 0,
          explanation: "Vision provides purpose and direction for journalism."
        },
        {
          id: 14,
          question: "What guides teams through changes?",
          options: [
            "Change management",
            "Resistance to change",
            "Ignoring changes",
            "Following old methods only"
          ],
          correctAnswer: 0,
          explanation: "Change management helps teams adapt successfully."
        },
        {
          id: 15,
          question: "What develops next-generation journalists?",
          options: [
            "Mentorship",
            "Only personal success",
            "Only competition",
            "Only independent work"
          ],
          correctAnswer: 0,
          explanation: "Mentorship builds future journalistic capacity."
        },
        {
          id: 16,
          question: "What includes AI tools for journalism?",
          options: [
            "Artificial intelligence",
            "Only human reporting",
            "Only traditional methods",
            "Only manual processes"
          ],
          correctAnswer: 0,
          explanation: "AI offers new tools for journalism production and analysis."
        },
        {
          id: 17,
          question: "What tailors news to individual preferences?",
          options: [
            "Personalized content",
            "Only mass audience content",
            "Only identical content for all",
            "Only scheduled programming"
          ],
          correctAnswer: 0,
          explanation: "Personalization adapts content to individual interests."
        },
        {
          id: 18,
          question: "What develops multiple competencies?",
          options: [
            "Skill diversification",
            "Only single skills",
            "Only traditional skills",
            "Only management skills"
          ],
          correctAnswer: 0,
          explanation: "Multiple skills increase career flexibility and value."
        },
        {
          id: 19,
          question: "What creates bodies of work demonstrating ability?",
          options: [
            "Portfolio building",
            "Only job applications",
            "Only academic degrees",
            "Only personal recommendations"
          ],
          correctAnswer: 0,
          explanation: "Portfolios demonstrate practical journalistic ability."
        },
        {
          id: 20,
          question: "What leads in broadcast journalism?",
          options: [
            "Mastering management and innovation",
            "Only technical skills",
            "Only reporting skills",
            "Only production skills"
          ],
          correctAnswer: 0,
          explanation: "Leadership requires combining multiple skill sets."
        }
      ]
    }
  ],
  
  // 3. FINAL EXAM STRUCTURE - 40 Comprehensive Questions
  finalExam: {
    title: "Broadcast Journalism Diploma Final Examination",
    description: "Comprehensive exam covering all 6 advanced modules. Tests knowledge of investigative techniques, broadcast writing, field production, video editing, media law, and broadcast management.",
    passingScore: 75,
    questions: [
      {
        id: 1,
        question: "What involves systematic examination of hidden issues?",
        options: [
          "Investigative journalism",
          "Basic news reporting",
          "Weather forecasting",
          "Sports commentary"
        ],
        correctAnswer: 0,
        explanation: "Investigative journalism digs deeper than surface reporting.",
        module: 1
      },
      {
        id: 2,
        question: "What is the foundation of investigative work?",
        options: [
          "Reliable sources",
          "Personal opinions",
          "Government statements",
          "Social media trends"
        ],
        correctAnswer: 0,
        explanation: "Sources provide information and verification.",
        module: 1
      },
      {
        id: 3,
        question: "How should broadcast writing sound?",
        options: [
          "Conversational like speech",
          "Formal like academic papers",
          "Complex like legal documents",
          "Poetic like literature"
        ],
        correctAnswer: 0,
        explanation: "Conversational writing connects with television audiences.",
        module: 2
      },
      {
        id: 4,
        question: "What sentence structure works best for broadcast?",
        options: [
          "Short and clear sentences",
          "Long, complex sentences",
          "Sentence fragments only",
          "Questions without answers"
        ],
        correctAnswer: 0,
        explanation: "Simple sentences are easier to understand when heard.",
        module: 2
      },
      {
        id: 5,
        question: "What requires thorough planning before leaving?",
        options: [
          "Field production",
          "Studio anchoring",
          "Script writing",
          "Editing only"
        ],
        correctAnswer: 0,
        explanation: "Planning prevents problems during field production.",
        module: 3
      },
      {
        id: 6,
        question: "What is essential for professional journalism?",
        options: [
          "High-quality audio",
          "Only good video",
          "Fast reporting",
          "Beautiful images"
        ],
        correctAnswer: 0,
        explanation: "Clear audio carries much of the information in broadcast stories.",
        module: 3
      },
      {
        id: 7,
        question: "What accurately represents events?",
        options: [
          "Truthful representation",
          "Dramatic enhancement",
          "Creative interpretation",
          "Entertaining manipulation"
        ],
        correctAnswer: 0,
        explanation: "Journalistic editing must represent reality accurately.",
        module: 4
      },
      {
        id: 8,
        question: "What allows flexible, non-destructive editing?",
        options: [
          "Nonlinear editing systems",
          "Linear editing systems",
          "Film editing",
          "Live switching"
        ],
        correctAnswer: 0,
        explanation: "NLEs allow changes without damaging original footage.",
        module: 4
      },
      {
        id: 9,
        question: "What provides crucial protections for journalism?",
        options: [
          "First Amendment",
          "Copyright law",
          "Privacy law",
          "Broadcast regulations"
        ],
        correctAnswer: 0,
        explanation: "The First Amendment protects freedom of the press.",
        module: 5
      },
      {
        id: 10,
        question: "What protects from false, damaging statements?",
        options: [
          "Defamation law",
          "Copyright law",
          "Privacy law",
          "Contract law"
        ],
        correctAnswer: 0,
        explanation: "Defamation includes libel (written) and slander (spoken).",
        module: 5
      },
      {
        id: 11,
        question: "What balances editorial excellence with efficiency?",
        options: [
          "Newsroom management",
          "Only reporting",
          "Only production",
          "Only advertising"
        ],
        correctAnswer: 0,
        explanation: "Management coordinates all newsroom functions effectively.",
        module: 6
      },
      {
        id: 12,
        question: "What reaches audiences through various channels?",
        options: [
          "Multi-platform distribution",
          "Only television broadcast",
          "Only radio broadcast",
          "Only print distribution"
        ],
        correctAnswer: 0,
        explanation: "Modern audiences access content through multiple platforms.",
        module: 6
      },
      {
        id: 13,
        question: "What requires reviewing records and databases?",
        options: [
          "Document analysis",
          "Source interviews only",
          "Random investigation",
          "Guessing stories"
        ],
        correctAnswer: 0,
        explanation: "Documents provide tangible evidence for stories.",
        module: 1
      },
      {
        id: 14,
        question: "What are formal requests for federal records?",
        options: [
          "FOIA requests",
          "Personal letters",
          "Social media posts",
          "Phone calls"
        ],
        correctAnswer: 0,
        explanation: "FOIA is the Freedom of Information Act.",
        module: 1
      },
      {
        id: 15,
        question: "What voice emphasizes who does what?",
        options: [
          "Active voice",
          "Passive voice",
          "Neutral voice",
          "Formal voice"
        ],
        correctAnswer: 0,
        explanation: "Active voice creates stronger, clearer sentences.",
        module: 2
      },
      {
        id: 16,
        question: "What are reporter-produced stories?",
        options: [
          "Packages",
          "Readers",
          "Voiceovers",
          "Teases"
        ],
        correctAnswer: 0,
        explanation: "Packages include reporter narration, interviews, and video.",
        module: 2
      },
      {
        id: 17,
        question: "What chooses appropriate mics for situations?",
        options: [
          "Microphone selection",
          "Using any mic available",
          "No microphone use",
          "Only wireless mics"
        ],
        correctAnswer: 0,
        explanation: "Proper mic selection ensures good audio quality.",
        module: 3
      },
      {
        id: 18,
        question: "What are mobile units for live transmission?",
        options: [
          "Satellite trucks",
          "Regular cars",
          "Studio cameras",
          "Editing suites"
        ],
        correctAnswer: 0,
        explanation: "Satellite trucks transmit live video from remote locations.",
        module: 3
      },
      {
        id: 19,
        question: "What chooses effective interview segments?",
        options: [
          "Soundbite selection",
          "Using all interviews",
          "Ignoring interviews",
          "Creating dialogue"
        ],
        correctAnswer: 0,
        explanation: "Selecting the best soundbites creates stronger stories.",
        module: 4
      },
      {
        id: 20,
        question: "What identifies people and places?",
        options: [
          "Lower thirds",
          "Full-screen graphics",
          "Background music",
          "Voice identification"
        ],
        correctAnswer: 0,
        explanation: "Lower thirds provide essential identification information.",
        module: 4
      },
      {
        id: 21,
        question: "What balances news gathering with privacy rights?",
        options: [
          "Privacy law",
          "Copyright law",
          "Defamation law",
          "Contract law"
        ],
        correctAnswer: 0,
        explanation: "Privacy law protects individuals from certain intrusions.",
        module: 5
      },
      {
        id: 22,
        question: "What oversees broadcast regulation?",
        options: [
          "FCC jurisdiction",
          "Local governments",
          "State agencies",
          "International bodies"
        ],
        correctAnswer: 0,
        explanation: "The Federal Communications Commission regulates broadcasting.",
        module: 5
      },
      {
        id: 23,
        question: "What guides journalistic quality and ethics?",
        options: [
          "Editorial leadership",
          "Technical operations",
          "Financial management",
          "Marketing only"
        ],
        correctAnswer: 0,
        explanation: "Editorial leadership maintains journalistic standards.",
        module: 6
      },
      {
        id: 24,
        question: "What delivers content beyond traditional broadcast?",
        options: [
          "Streaming and on-demand",
          "Only live television",
          "Only scheduled programming",
          "Only radio broadcasts"
        ],
        correctAnswer: 0,
        explanation: "Digital platforms provide additional distribution channels.",
        module: 6
      },
      {
        id: 25,
        question: "What confirms source credibility?",
        options: [
          "Source verification",
          "Source popularity",
          "Source appearance",
          "Source location"
        ],
        correctAnswer: 0,
        explanation: "Verification ensures information reliability.",
        module: 1
      },
      {
        id: 26,
        question: "What transforms numbers into broadcast stories?",
        options: [
          "Data journalism",
          "Entertainment reporting",
          "Celebrity interviews",
          "Weather reports"
        ],
        correctAnswer: 0,
        explanation: "Data journalism makes statistics understandable and compelling.",
        module: 1
      },
      {
        id: 27,
        question: "What creates immediacy and relevance?",
        options: [
          "Present tense focus",
          "Past tense only",
          "Future tense speculation",
          "Conditional tense"
        ],
        correctAnswer: 0,
        explanation: "Present tense makes stories feel current and relevant.",
        module: 2
      },
      {
        id: 28,
        question: "What confirms all facts before writing?",
        options: [
          "Accuracy verification",
          "Creative writing",
          "Assumption making",
          "Source guessing"
        ],
        correctAnswer: 0,
        explanation: "Verification ensures broadcast accuracy.",
        module: 2
      },
      {
        id: 29,
        question: "What frames shots that communicate clearly?",
        options: [
          "Composition principles",
          "Random framing",
          "Maximum zoom",
          "Constant movement"
        ],
        correctAnswer: 0,
        explanation: "Good composition helps viewers understand visual information.",
        module: 3
      },
      {
        id: 30,
        question: "What creates content for multiple platforms?",
        options: [
          "Multi-platform reporting",
          "Only television reporting",
          "Radio reporting only",
          "Print reporting"
        ],
        correctAnswer: 0,
        explanation: "Modern journalism often serves multiple platforms simultaneously.",
        module: 3
      },
      {
        id: 31,
        question: "What creates initial story structure?",
        options: [
          "Rough cutting",
          "Final editing",
          "Color correction",
          "Audio mixing"
        ],
        correctAnswer: 0,
        explanation: "Rough cuts establish basic story flow.",
        module: 4
      },
      {
        id: 32,
        question: "What weaves ambient sound into stories?",
        options: [
          "Natural sound integration",
          "Silence only",
          "Music replacement",
          "Voiceover only"
        ],
        correctAnswer: 0,
        explanation: "Natural sound adds authenticity and atmosphere.",
        module: 4
      },
      {
        id: 33,
        question: "What allows limited use for news purposes?",
        options: [
          "Fair use doctrine",
          "Complete freedom",
          "No use allowed",
          "Purchase requirement"
        ],
        correctAnswer: 0,
        explanation: "Fair use allows limited use without permission for purposes like news.",
        module: 5
      },
      {
        id: 34,
        question: "What provides ethical guidelines?",
        options: [
          "SPJ Code of Ethics",
          "Government regulations",
          "Station policies only",
          "Personal preferences"
        ],
        correctAnswer: 0,
        explanation: "SPJ provides widely accepted ethical standards for journalists.",
        module: 5
      },
      {
        id: 35,
        question: "What manages personnel and budgets?",
        options: [
          "Resource allocation",
          "Only story assignment",
          "Only equipment use",
          "Only social media"
        ],
        correctAnswer: 0,
        explanation: "Resource management ensures effective operations.",
        module: 6
      },
      {
        id: 36,
        question: "What connects with local communities?",
        options: [
          "Community engagement",
          "Only national reporting",
          "Only international reporting",
          "Only online interaction"
        ],
        correctAnswer: 0,
        explanation: "Community connection builds audience trust and relevance.",
        module: 6
      },
      {
        id: 37,
        question: "What protects source identities?",
        options: [
          "Confidentiality protocols",
          "Public announcements",
          "Social media posts",
          "Station broadcasts"
        ],
        correctAnswer: 0,
        explanation: "Protecting sources maintains trust and safety.",
        module: 1
      },
      {
        id: 38,
        question: "How should words relate to visuals?",
        options: [
          "Complement rather than repeat",
          "Repeat exactly",
          "Ignore completely",
          "Contradict intentionally"
        ],
        correctAnswer: 0,
        explanation: "Complementary writing uses words and images together effectively.",
        module: 2
      },
      {
        id: 39,
        question: "What evaluates potential dangers?",
        options: [
          "Risk assessment",
          "Ignoring risks",
          "Assuming safety",
          "Following others"
        ],
        correctAnswer: 0,
        explanation: "Assessment helps prepare for and avoid dangers.",
        module: 3
      },
      {
        id: 40,
        question: "What articulates clear direction?",
        options: [
          "Vision development",
          "Only daily management",
          "Only technical operations",
          "Only financial management"
        ],
        correctAnswer: 0,
        explanation: "Vision provides purpose and direction for journalism.",
        module: 6
      }
    ]
  }
};

// Export for use in your application
export default broadcastJournalismDiploma;
