// Cultural Anthropology Diploma Course Data
export const culturalAnthropologyDiplomaCourse = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "cultural-anthropology-diploma",
  title: "Cultural Anthropology (Diploma)",
  description: "Advanced study of human cultures, societies, and behaviors across different contexts and historical periods. Develops expertise in ethnographic methods, cultural theory, and anthropological analysis.",
  duration: "12 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  upgradePrice: null, // Already a diploma
  icon: "🌍",
  badge: "Diploma",
  prerequisites: ["anthropology-certificate"], // Requires certificate first
  category: "Social Sciences",
  difficulty: "Advanced",
  
  // 2. MODULE ARCHITECTURE - 6 Comprehensive Modules
  modules: [
    // MODULE 1: Foundations of Cultural Anthropology
    {
      id: 1,
      title: "Foundations of Cultural Anthropology",
      content: `# Foundations of Cultural Anthropology

## Introduction to Cultural Anthropology
Cultural anthropology is the study of human cultures, beliefs, practices, and social organization. It examines how people make meaning of their lives and organize themselves in different societies worldwide. Anthropologists study both small-scale traditional societies and large modern urban communities.

## Key Historical Developments
- **19th Century Evolutionism**: Early anthropologists like Edward Tylor and Lewis Henry Morgan proposed unilinear evolution models where all societies progress through similar stages (savagery → barbarism → civilization)
- **Historical Particularism**: Franz Boas rejected evolutionism, emphasizing that each culture has its own unique history that must be studied individually
- **Functionalism**: Bronisław Malinowski argued that cultural practices serve practical functions in maintaining society
- **Structuralism**: Claude Lévi-Strauss examined underlying structures of human thought that shape cultural patterns

## Core Concepts in Cultural Anthropology
1. **Culture**: The shared patterns of behaviors, beliefs, and values learned through socialization. Culture includes language, rituals, economic systems, kinship patterns, and political organization.
2. **Ethnocentrism**: The tendency to judge other cultures by the standards of one's own culture. Cultural anthropology teaches **cultural relativism**-understanding cultures within their own contexts.
3. **Holism**: The anthropological perspective that all aspects of human life are interconnected and must be studied in relation to each other.
4. **Fieldwork**: The primary research method involving extended immersion in a community to understand it from within.

## Foundational Theories
- **Cultural Materialism**: Marvin Harris's theory that material conditions (technology, economy, environment) determine cultural patterns
- **Interpretive Anthropology**: Clifford Geertz's approach focusing on interpreting cultural symbols and meanings
- **Political Economy**: Examines how political and economic forces shape cultural practices
- **Postmodern Anthropology**: Questions objectivity and emphasizes the role of the anthropologist in constructing ethnographic accounts

## The Four Fields of Anthropology
1. **Cultural Anthropology** (our focus): Studies living cultures and contemporary societies
2. **Archaeology**: Studies past cultures through material remains
3. **Biological/Physical Anthropology**: Studies human evolution and biological variation
4. **Linguistic Anthropology**: Studies language in its cultural context

## Significance of Cultural Anthropology Today
Cultural anthropology helps us understand globalization, migration, cultural change, and interethnic relations. It provides tools for working in diverse communities, international development, healthcare, education, and business across cultures.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the primary research method used in cultural anthropology?",
          options: ["Laboratory experiments", "Fieldwork and ethnography", "Statistical analysis", "Historical document review"],
          correctAnswer: 1,
          explanation: "Fieldwork involving extended immersion in a community is the primary research method, allowing anthropologists to understand cultures from within."
        },
        {
          id: 2,
          question: "Which anthropologist developed the theory of cultural materialism?",
          options: ["Claude Lévi-Strauss", "Franz Boas", "Marvin Harris", "Bronisław Malinowski"],
          correctAnswer: 2,
          explanation: "Marvin Harris developed cultural materialism, which argues that material conditions determine cultural patterns."
        },
        {
          id: 3,
          question: "What is the opposite of ethnocentrism in anthropological practice?",
          options: ["Cultural relativism", "Structuralism", "Functionalism", "Historical particularism"],
          correctAnswer: 0,
          explanation: "Cultural relativism is the practice of understanding cultures within their own contexts rather than judging them by external standards."
        },
        {
          id: 4,
          question: "Which early anthropological approach proposed that societies progress through savagery, barbarism, and civilization?",
          options: ["Functionalism", "Structuralism", "Evolutionism", "Interpretive anthropology"],
          correctAnswer: 2,
          explanation: "19th century evolutionism, proposed by Tylor and Morgan, suggested this unilinear progression model."
        },
        {
          id: 5,
          question: "How many main fields are traditionally recognized in anthropology?",
          options: ["Two", "Three", "Four", "Five"],
          correctAnswer: 2,
          explanation: "The four main fields are cultural anthropology, archaeology, biological anthropology, and linguistic anthropology."
        },
        {
          id: 6,
          question: "Which anthropologist emphasized studying each culture's unique history rather than evolutionary stages?",
          options: ["Edward Tylor", "Franz Boas", "Claude Lévi-Strauss", "Clifford Geertz"],
          correctAnswer: 1,
          explanation: "Franz Boas developed historical particularism, rejecting evolutionism and emphasizing individual cultural histories."
        },
        {
          id: 7,
          question: "What does the holistic perspective in anthropology emphasize?",
          options: ["Studying only material culture", "Focusing on language exclusively", "Examining all aspects of human life as interconnected", "Prioritizing biological factors"],
          correctAnswer: 2,
          explanation: "Holism examines how all aspects of human life-social, cultural, biological, linguistic-are interconnected."
        },
        {
          id: 8,
          question: "Which approach focuses on interpreting cultural symbols and their meanings?",
          options: ["Cultural materialism", "Interpretive anthropology", "Functionalism", "Evolutionism"],
          correctAnswer: 1,
          explanation: "Interpretive anthropology, developed by Clifford Geertz, focuses on interpreting cultural symbols and meanings."
        },
        {
          id: 9,
          question: "What percentage of early anthropological theories emphasized unilinear evolution?",
          options: ["Most 19th century theories", "Only postmodern theories", "Mid-20th century theories", "Contemporary theories"],
          correctAnswer: 0,
          explanation: "Most 19th century anthropological theories proposed some form of unilinear evolution before being challenged by Boas and others."
        },
        {
          id: 10,
          question: "Which field of anthropology studies past cultures through material remains?",
          options: ["Cultural anthropology", "Linguistic anthropology", "Biological anthropology", "Archaeology"],
          correctAnswer: 3,
          explanation: "Archaeology studies past human cultures through the analysis of material remains and artifacts."
        },
        {
          id: 11,
          question: "What term describes the shared patterns of behaviors, beliefs, and values learned through socialization?",
          options: ["Society", "Culture", "Ethnicity", "Civilization"],
          correctAnswer: 1,
          explanation: "Culture encompasses these shared patterns that are transmitted through socialization processes."
        },
        {
          id: 12,
          question: "Which theory examines how political and economic forces shape cultural practices?",
          options: ["Structuralism", "Political economy", "Functionalism", "Interpretive anthropology"],
          correctAnswer: 1,
          explanation: "Political economy examines the intersection of political and economic forces in shaping cultural practices."
        },
        {
          id: 13,
          question: "What did Bronisław Malinowski emphasize in his functionalist approach?",
          options: ["Cultural symbols", "Economic systems", "Practical functions of cultural practices", "Linguistic structures"],
          correctAnswer: 2,
          explanation: "Malinowski argued that cultural practices serve practical functions in maintaining social stability and meeting human needs."
        },
        {
          id: 14,
          question: "Which perspective questions the possibility of objective ethnographic accounts?",
          options: ["Evolutionism", "Postmodern anthropology", "Cultural materialism", "Historical particularism"],
          correctAnswer: 1,
          explanation: "Postmodern anthropology questions objectivity and emphasizes the anthropologist's role in constructing ethnographic narratives."
        },
        {
          id: 15,
          question: "What does linguistic anthropology specifically study?",
          options: ["Ancient languages only", "Language in its cultural context", "Biological bases of language", "Language teaching methods"],
          correctAnswer: 1,
          explanation: "Linguistic anthropology studies how language shapes and is shaped by cultural and social processes."
        },
        {
          id: 16,
          question: "Which concept involves understanding a culture from the perspective of its members?",
          options: ["Ethnocentrism", "Emic perspective", "Etic perspective", "Cultural universalism"],
          correctAnswer: 1,
          explanation: "The emic perspective seeks to understand a culture from the viewpoint of its members, using their categories and meanings."
        },
        {
          id: 17,
          question: "What percentage of contemporary anthropology departments include all four fields?",
          options: ["Approximately 75%", "About 50%", "Less than 25%", "Nearly all"],
          correctAnswer: 2,
          explanation: "Less than 25% of anthropology departments maintain the traditional four-field approach today, with many specializing."
        },
        {
          id: 18,
          question: "Which early 20th century approach rejected comparison between cultures?",
          options: ["Evolutionism", "Historical particularism", "Structuralism", "Functionalism"],
          correctAnswer: 1,
          explanation: "Historical particularism, associated with Franz Boas, emphasized unique cultural histories and was skeptical of broad comparisons."
        },
        {
          id: 19,
          question: "What does the etic perspective involve in anthropological research?",
          options: ["Insider viewpoint", "Cross-cultural comparison using external categories", "Historical reconstruction", "Biological analysis"],
          correctAnswer: 1,
          explanation: "The etic perspective uses external, comparative categories to analyze cultural phenomena across different societies."
        },
        {
          id: 20,
          question: "Which of these is NOT one of the four traditional fields of anthropology?",
          options: ["Cultural anthropology", "Psychological anthropology", "Archaeology", "Linguistic anthropology"],
          correctAnswer: 1,
          explanation: "Psychological anthropology is a subfield, not one of the four main traditional fields of anthropology."
        }
      ]
    },

    // MODULE 2: Research Methods and Ethnography
    {
      id: 2,
      title: "Research Methods and Ethnography",
      content: `# Research Methods and Ethnography

## Introduction to Ethnographic Methods
Ethnography is the primary research method in cultural anthropology, involving long-term, immersive fieldwork in a community. The goal is to understand social and cultural phenomena from the perspective of community members themselves.

## Key Components of Ethnographic Research
1. **Participant Observation**: The anthropologist participates in daily life while observing social interactions and cultural practices. This method balances involvement with observation.
2. **Fieldnotes**: Detailed written records of observations, conversations, and reflections. Fieldnotes include both descriptive observations and analytical reflections.
3. **Interviews**: Structured, semi-structured, or unstructured conversations with community members. Key informant interviews provide in-depth understanding.
4. **Genealogical Methods**: Mapping kinship relations to understand social organization and relationships.
5. **Life Histories**: Collecting personal narratives to understand individual experiences within cultural contexts.

## The Research Process
**1. Preparation Phase**
- Literature review of existing research
- Research question formulation
- Grant writing and funding acquisition
- Ethical review board approval
- Language preparation and cultural orientation

**2. Fieldwork Phase**
- Entering the field and establishing rapport
- Building relationships and trust
- Systematic data collection
- Ongoing analysis and reflection
- Dealing with fieldwork challenges

**3. Analysis and Writing Phase**
- Transcription and organization of field materials
- Coding and thematic analysis
- Theoretical interpretation
- Ethnographic writing
- Dissemination of findings

## Ethical Considerations in Anthropology
- **Informed Consent**: Participants must understand and voluntarily agree to participate
- **Confidentiality**: Protecting the identities and privacy of participants
- **Reciprocity**: Ensuring research benefits the community being studied
- **Do No Harm**: Minimizing potential negative impacts of research
- **Cultural Sensitivity**: Respecting local customs, beliefs, and practices
- **Collaboration**: Involving community members in research design and implementation

## Positionality and Reflexivity
Anthropologists must critically examine their own social position, biases, and how these affect research. Reflexivity involves:
- Acknowledging the researcher's background and perspectives
- Examining power dynamics between researcher and participants
- Considering how the researcher's presence affects the field situation
- Being transparent about methodological choices and limitations

## Multi-sited Ethnography
Modern ethnography often involves research across multiple locations to understand transnational processes, migration, globalization, and diasporic communities. This approach recognizes that cultural phenomena are not bounded within single locations.

## Digital Ethnography
With increasing online social interaction, anthropologists now conduct ethnographic research in digital spaces including:
- Social media platforms and online communities
- Gaming environments and virtual worlds
- Digital activism and online social movements
- Transnational digital networks

## Methodological Challenges
1. **Access and Rapport**: Gaining entry to communities and building trust
2. **Language Barriers**: Overcoming linguistic challenges in cross-cultural research
3. **Cultural Misunderstandings**: Navigating different cultural frameworks and expectations
4. **Representation**: Accurately representing others' experiences and perspectives
5. **Subjectivity**: Managing the researcher's own biases and interpretations
6. **Time Constraints**: The tension between depth of understanding and research timelines

## Quantitative Methods in Anthropology
While ethnography is qualitative, anthropologists also use:
- **Surveys and questionnaires** for broader patterns
- **Social network analysis** to map relationships
- **Demographic data** for population studies
- **Statistical analysis** of cultural patterns
- **Mixed methods** approaches combining qualitative and quantitative data

## Applied Anthropology Methods
Anthropologists working in applied settings use:
- **Rapid assessment techniques** for development projects
- **Participatory action research** involving community collaboration
- **Needs assessments** for program development
- **Evaluation methods** for assessing program impacts
- **Cultural brokerage** facilitating cross-cultural understanding

## Technological Tools in Ethnography
Modern ethnographers use:
- **Digital recorders** for interviews and observations
- **Photography and videography** for documentation
- **GIS mapping** for spatial analysis
- **Qualitative analysis software** (NVivo, Atlas.ti)
- **Mobile apps** for real-time data collection

## Writing Ethnography
Ethnographic writing involves:
- **Thick description** providing context-rich accounts
- **Narrative construction** creating coherent stories from data
- **Theoretical engagement** connecting observations to anthropological concepts
- **Ethical representation** balancing accuracy with confidentiality
- **Accessible communication** making findings understandable to diverse audiences`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the primary research method in cultural anthropology?",
          options: ["Surveys", "Laboratory experiments", "Ethnography", "Historical analysis"],
          correctAnswer: 2,
          explanation: "Ethnography, involving immersive fieldwork, is the primary method for understanding cultures from within."
        },
        {
          id: 2,
          question: "Which method involves both participating in and observing community life?",
          options: ["Surveys", "Participant observation", "Interviews", "Archival research"],
          correctAnswer: 1,
          explanation: "Participant observation requires the researcher to engage in community activities while systematically observing social interactions."
        },
        {
          id: 3,
          question: "What must anthropologists obtain from research participants before beginning fieldwork?",
          options: ["Payment receipts", "Informed consent", "Government permits", "Academic credentials"],
          correctAnswer: 1,
          explanation: "Informed consent ensures participants understand and voluntarily agree to participate in research."
        },
        {
          id: 4,
          question: "What does reflexivity involve in anthropological research?",
          options: ["Statistical analysis", "Critical examination of the researcher's position and biases", "Historical reconstruction", "Laboratory testing"],
          correctAnswer: 1,
          explanation: "Reflexivity involves critically examining how the researcher's background, perspectives, and position affect the research process."
        },
        {
          id: 5,
          question: "Which type of interview provides in-depth understanding from knowledgeable community members?",
          options: ["Structured interviews", "Key informant interviews", "Survey interviews", "Telephone interviews"],
          correctAnswer: 1,
          explanation: "Key informant interviews involve detailed conversations with particularly knowledgeable community members."
        },
        {
          id: 6,
          question: "What is multi-sited ethnography designed to study?",
          options: ["Single isolated communities", "Transnational processes and diasporas", "Ancient civilizations", "Biological evolution"],
          correctAnswer: 1,
          explanation: "Multi-sited ethnography examines cultural phenomena across multiple locations, particularly relevant for studying globalization and migration."
        },
        {
          id: 7,
          question: "Which ethical principle involves ensuring research benefits the studied community?",
          options: ["Confidentiality", "Reciprocity", "Informed consent", "Objectivity"],
          correctAnswer: 1,
          explanation: "Reciprocity ensures that research provides benefits or gives back to the community being studied."
        },
        {
          id: 8,
          question: "What do genealogical methods specifically map in anthropological research?",
          options: ["Economic transactions", "Kinship relations", "Migration patterns", "Language families"],
          correctAnswer: 1,
          explanation: "Genealogical methods create maps of kinship relationships to understand social organization."
        },
        {
          id: 9,
          question: "Which phase of research involves building relationships and trust in the field?",
          options: ["Preparation phase", "Fieldwork phase", "Analysis phase", "Writing phase"],
          correctAnswer: 1,
          explanation: "Building relationships and establishing rapport occurs during the fieldwork phase when researchers are immersed in the community."
        },
        {
          id: 10,
          question: "What percentage of ethnographic research today involves digital spaces?",
          options: ["Less than 10%", "Approximately 25%", "More than 50%", "Nearly all"],
          correctAnswer: 1,
          explanation: "Approximately 25% of contemporary ethnographic research includes some component of digital ethnography given increasing online social interaction."
        },
        {
          id: 11,
          question: "Which qualitative analysis software is commonly used in anthropology?",
          options: ["SPSS", "NVivo", "Excel", "Photoshop"],
          correctAnswer: 1,
          explanation: "NVivo and similar qualitative analysis software help anthropologists organize and analyze ethnographic data."
        },
        {
          id: 12,
          question: "What does 'thick description' refer to in ethnographic writing?",
          options: ["Lengthy reports", "Context-rich detailed accounts", "Statistical descriptions", "Theoretical abstracts"],
          correctAnswer: 1,
          explanation: "Thick description provides detailed, context-rich accounts that allow readers to understand cultural meanings and practices."
        },
        {
          id: 13,
          question: "Which method involves collecting personal narratives to understand individual experiences?",
          options: ["Surveys", "Life histories", "Genealogies", "Focus groups"],
          correctAnswer: 1,
          explanation: "Life histories collect personal narratives that situate individual experiences within broader cultural contexts."
        },
        {
          id: 14,
          question: "What must researchers protect to ensure participant privacy?",
          options: ["Research funding", "Confidentiality", "Field equipment", "Academic theories"],
          correctAnswer: 1,
          explanation: "Confidentiality protects participants' identities and private information obtained during research."
        },
        {
          id: 15,
          question: "Which approach involves community members in research design and implementation?",
          options: ["Experimental research", "Participatory action research", "Historical research", "Comparative research"],
          correctAnswer: 1,
          explanation: "Participatory action research collaborates with community members throughout the research process."
        },
        {
          id: 16,
          question: "What is a key challenge in building rapport during fieldwork?",
          options: ["Statistical analysis", "Overcoming cultural differences and building trust", "Theoretical development", "Laboratory setup"],
          correctAnswer: 1,
          explanation: "Building trust across cultural differences is a fundamental challenge in establishing rapport during fieldwork."
        },
        {
          id: 17,
          question: "Which technological tool is used for spatial analysis in ethnography?",
          options: ["Word processors", "GIS mapping", "Spreadsheets", "Presentation software"],
          correctAnswer: 1,
          explanation: "GIS (Geographic Information Systems) mapping helps analyze spatial relationships and patterns in ethnographic research."
        },
        {
          id: 18,
          question: "What does positionality refer to in anthropological research?",
          options: ["Statistical position", "The researcher's social location and how it affects research", "Geographical location", "Academic rank"],
          correctAnswer: 1,
          explanation: "Positionality examines how the researcher's social characteristics (gender, race, class, etc.) influence the research process."
        },
        {
          id: 19,
          question: "Which method would be most appropriate for studying an online gaming community?",
          options: ["Archaeological excavation", "Digital ethnography", "Biological sampling", "Historical archives"],
          correctAnswer: 1,
          explanation: "Digital ethnography is specifically designed for studying online communities and digital social interactions."
        },
        {
          id: 20,
          question: "What principle guides anthropologists to minimize negative impacts of their research?",
          options: ["Maximization", "Do no harm", "Complete objectivity", "Statistical significance"],
          correctAnswer: 1,
          explanation: "The 'do no harm' principle requires researchers to minimize potential negative consequences of their work on participants and communities."
        }
      ]
    },

    // MODULE 3: Kinship and Social Organization
    {
      id: 3,
      title: "Kinship and Social Organization",
      content: `# Kinship and Social Organization

## Introduction to Kinship Systems
Kinship is the web of social relationships that form an essential part of human life in all societies. Anthropologists study how kinship systems organize social life, structure economic relationships, shape political alliances, and provide emotional support.

## Basic Concepts in Kinship
1. **Descent**: How individuals trace their ancestry and family connections
2. **Alliance**: Marriage patterns and relationships between families
3. **Residence**: Where couples live after marriage
4. **Terminology**: How relatives are classified and named
5. **Filiation**: The relationship between parents and children

## Types of Descent Systems
**Unilineal Descent**
- **Patrilineal**: Descent traced through male line only (approx. 44% of societies)
- **Matrilineal**: Descent traced through female line only (approx. 15% of societies)
- Both systems determine inheritance, group membership, and social obligations

**Cognatic/Bilateral Descent**
- Descent traced through both male and female lines (approx. 40% of societies)
- Common in Western industrial societies
- Creates ego-centered kindreds rather than corporate descent groups

**Ambilineal Descent**
- Flexible system allowing choice in descent affiliation
- Found in Polynesian societies
- Allows strategic alliance formation

## Kinship Terminology Systems
1. **Eskimo/Inuit System** (used in Western societies):
   - Distinguishes nuclear family from other relatives
   - Uses terms like mother, father, sister, brother, aunt, uncle, cousin
   - Emphasizes nuclear family structure

2. **Hawaiian System**:
   - Uses the same terms for all relatives of the same sex and generation
   - All female relatives of mother's generation = "mother"
   - All male relatives of father's generation = "father"
   - Emphasizes generational distinctions

3. **Iroquois System**:
   - Distinguishes parallel cousins (children of same-sex siblings) from cross cousins (children of opposite-sex siblings)
   - Parallel cousins classified with siblings
   - Often associated with preferential cross-cousin marriage

4. **Sudanese/Descriptive System**:
   - Each category of relative has a distinct term
   - Most complex kinship terminology
   - Emphasizes precise relationships

5. **Crow System** (matrilineal emphasis):
   - Named after Crow Native Americans
   - Matrilineal relatives distinguished by generation
   - Patrilineal relatives often lumped together

6. **Omaha System** (patrilineal emphasis):
   - Mirror image of Crow system
   - Patrilineal relatives distinguished by generation
   - Matrilineal relatives often lumped together

## Marriage Systems and Alliance
**Types of Marriage**
- **Monogamy**: Marriage between two individuals (most common worldwide today)
- **Polygyny**: One man married to multiple women (permitted in approx. 84% of societies historically)
- **Polyandry**: One woman married to multiple men (rare, found in about 1% of societies)
- **Group Marriage**: Multiple men married to multiple women (extremely rare)

**Marriage Rules**
- **Exogamy**: Marriage outside a specific social group
- **Endogamy**: Marriage within a specific social group
- **Preferential Cousin Marriage**: Cultural preference for marrying certain types of cousins
- **Levirate**: Widow marries brother of deceased husband
- **Sororate**: Widower marries sister of deceased wife

**Bridewealth and Dowry**
- **Bridewealth/bride price**: Goods or money transferred from groom's family to bride's family
- **Dowry**: Property transferred from bride's family to groom's family
- **Bride service**: Labor performed by groom for bride's family

## Residence Patterns
1. **Patrilocal**: Couple lives with or near husband's family (approx. 69% of societies)
2. **Matrilocal**: Couple lives with or near wife's family (approx. 13% of societies)
3. **Bilocal/Ambilocal**: Couple chooses which family to live near
4. **Neolocal**: Couple establishes independent residence (common in industrial societies)
5. **Avunculocal**: Couple lives with or near husband's maternal uncle
6. **Duolocal**: Husband and wife maintain separate residences

## Family and Household Forms
**Nuclear Family**
- Parents and their children
- Often considered the basic family unit in Western societies
- Associated with industrial economies and social mobility

**Extended Family**
- Multiple generations living together
- Common in agricultural societies
- Provides economic cooperation and social support

**Joint Family**
- Siblings and their spouses/children living together
- Common in South Asia
- Maintains property and resources within patriline

**Blended/Reconstituted Family**
- Formed through remarriage after divorce or death
- Includes step-parents and step-children
- Increasingly common globally

**Single-parent Family**
- One parent raising children
- Growing percentage worldwide
- Diverse causes: choice, divorce, death, migration

## Age and Gender Organization
**Age Sets and Age Grades**
- Formal organization of individuals by age
- Common in East African pastoralist societies
- Provide life course structure and social responsibilities

**Gender Roles and Relations**
- Cultural definitions of masculinity and femininity
- Division of labor by gender
- Gender stratification and power relations
- Third gender and two-spirit traditions in many indigenous societies

## Social Stratification
**Caste Systems**
- Hereditary, endogamous social groups
- Associated with specific occupations
- Hierarchical ranking with restricted social mobility
- Found in South Asia and similar systems elsewhere

**Class Systems**
- Based on economic differences
- Allow some social mobility
- Often associated with capitalist societies

**Rank Societies**
- Hierarchical but without major economic differences
- Based on kinship proximity to chiefs
- Common in Polynesian societies

**Egalitarian Societies**
- Minimal social stratification
- Status based on age, gender, personal qualities
- Found among many hunter-gatherer societies

## Political Organization
**Bands**
- Small, kinship-based groups of 20-100 people
- Egalitarian decision-making
- Found among hunter-gatherers
- Flexible membership

**Tribes**
- Larger than bands but without centralized authority
- Organized through kinship, age sets, or associations
- Big men or charismatic leaders rather than formal offices

**Chiefdoms**
- Formal, hereditary leadership
- Social ranking and redistribution systems
- Permanent political offices
- Found in agricultural and pastoral societies

**States**
- Centralized government with monopoly on force
- Bureaucratic administration
- Class stratification
- Associated with intensive agriculture and urbanization

## Economic Systems
**Reciprocity**
- **Generalized**: Giving without expectation of immediate return (family relationships)
- **Balanced**: Exchange with expectation of equivalent return (trade partnerships)
- **Negative**: Attempt to get something for nothing (gambling, theft)

**Redistribution**
- Collection and reallocation of goods by central authority
- Associated with chiefdoms and states
- Used for public works and supporting elites

**Market Exchange**
- Buying and selling through price mechanism
- Associated with states and capitalism
- Impersonal transactions

## Religious Organization
**Shamanistic**
- Part-time religious specialists
- Direct contact with spirit world
- Healing and divination functions

**Priestly**
- Full-time religious specialists
- Formal training and hierarchy
- Associated with state religions

**Prophetic**
- Charismatic leaders claiming direct revelation
- Often associated with social change movements
- May develop into institutionalized religions

## Modern Transformations
- Changing family structures due to urbanization and globalization
- Legal recognition of diverse family forms
- Transnational families and migration
- New reproductive technologies and kinship implications
- LGBTQ+ kinship and family formations`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "Which descent system traces ancestry through male lines only?",
          options: ["Matrilineal", "Patrilineal", "Bilateral", "Ambilineal"],
          correctAnswer: 1,
          explanation: "Patrilineal descent traces ancestry and inheritance exclusively through the male line."
        },
        {
          id: 2,
          question: "Approximately what percentage of societies historically permitted polygyny?",
          options: ["25%", "44%", "67%", "84%"],
          correctAnswer: 3,
          explanation: "Approximately 84% of societies historically permitted polygyny, though it's not always widely practiced."
        },
        {
          id: 3,
          question: "Which kinship terminology system distinguishes parallel from cross cousins?",
          options: ["Eskimo", "Hawaiian", "Iroquois", "Sudanese"],
          correctAnswer: 2,
          explanation: "The Iroquois system distinguishes parallel cousins (same-sex siblings' children) from cross cousins (opposite-sex siblings' children)."
        },
        {
          id: 4,
          question: "What is the most common residence pattern globally?",
          options: ["Matrilocal", "Patrilocal", "Neolocal", "Avunculocal"],
          correctAnswer: 1,
          explanation: "Patrilocal residence, where couples live with or near the husband's family, occurs in approximately 69% of societies."
        },
        {
          id: 5,
          question: "Which type of reciprocity involves giving without expectation of immediate return?",
          options: ["Balanced", "Generalized", "Negative", "Market"],
          correctAnswer: 1,
          explanation: "Generalized reciprocity involves giving without expectation of immediate return, typical within families."
        },
        {
          id: 6,
          question: "What type of political organization features centralized government with monopoly on force?",
          options: ["Band", "Tribe", "Chiefdom", "State"],
          correctAnswer: 3,
          explanation: "States have centralized governments that claim monopoly on legitimate use of force within their territory."
        },
        {
          id: 7,
          question: "Which marriage system involves one woman married to multiple men?",
          options: ["Monogamy", "Polygyny", "Polyandry", "Group marriage"],
          correctAnswer: 2,
          explanation: "Polyandry involves one woman married to multiple men, found in about 1% of societies."
        },
        {
          id: 8,
          question: "What does the Crow kinship system emphasize?",
          options: ["Patrilineal relationships", "Matrilineal relationships", "Bilateral relationships", "Generational distinctions"],
          correctAnswer: 1,
          explanation: "The Crow system emphasizes matrilineal relationships, distinguishing matrilineal relatives by generation."
        },
        {
          id: 9,
          question: "Which residence pattern involves living with the husband's maternal uncle?",
          options: ["Patrilocal", "Matrilocal", "Avunculocal", "Neolocal"],
          correctAnswer: 2,
          explanation: "Avunculocal residence involves couples living with or near the husband's maternal uncle."
        },
        {
          id: 10,
          question: "Approximately what percentage of societies have matrilineal descent systems?",
          options: ["5%", "15%", "30%", "45%"],
          correctAnswer: 1,
          explanation: "Approximately 15% of societies have matrilineal descent systems where ancestry is traced through the female line."
        },
        {
          id: 11,
          question: "Which kinship system uses the same terms for all relatives of the same sex and generation?",
          options: ["Eskimo", "Hawaiian", "Iroquois", "Omaha"],
          correctAnswer: 1,
          explanation: "The Hawaiian system uses the same terms for all relatives of the same sex and generation, emphasizing generational distinctions."
        },
        {
          id: 12,
          question: "What is bridewealth?",
          options: ["Property from bride's family to groom's", "Goods from groom's family to bride's", "Labor by bride for groom's family", "Dowry payment"],
          correctAnswer: 1,
          explanation: "Bridewealth involves goods or money transferred from the groom's family to the bride's family."
        },
        {
          id: 13,
          question: "Which political organization features egalitarian decision-making in small kinship groups?",
          options: ["Band", "Tribe", "Chiefdom", "State"],
          correctAnswer: 0,
          explanation: "Bands are small, kinship-based groups with egalitarian decision-making processes."
        },
        {
          id: 14,
          question: "What type of family includes step-parents and step-children?",
          options: ["Nuclear", "Extended", "Joint", "Blended"],
          correctAnswer: 3,
          explanation: "Blended or reconstituted families include step-parents and step-children from previous relationships."
        },
        {
          id: 15,
          question: "Which economic system involves collection and reallocation by central authority?",
          options: ["Reciprocity", "Redistribution", "Market exchange", "Barter"],
          correctAnswer: 1,
          explanation: "Redistribution involves collection of goods by a central authority and their subsequent reallocation."
        },
        {
          id: 16,
          question: "What does endogamy refer to?",
          options: ["Marriage outside a group", "Marriage within a group", "Multiple marriages", "Marriage dissolution"],
          correctAnswer: 1,
          explanation: "Endogamy refers to marriage within a specific social, ethnic, or religious group."
        },
        {
          id: 17,
          question: "Which descent system allows flexible choice in affiliation?",
          options: ["Patrilineal", "Matrilineal", "Ambilineal", "Bilateral"],
          correctAnswer: 2,
          explanation: "Ambilineal descent allows individuals to choose descent affiliation strategically."
        },
        {
          id: 18,
          question: "What is the levirate custom?",
          options: ["Widow marries brother of deceased", "Widower marries sister of deceased", "Cousin marriage", "Child marriage"],
          correctAnswer: 0,
          explanation: "Levirate involves a widow marrying the brother of her deceased husband."
        },
        {
          id: 19,
          question: "Which kinship system is most complex with distinct terms for each relationship?",
          options: ["Hawaiian", "Iroquois", "Sudanese", "Eskimo"],
          correctAnswer: 2,
          explanation: "The Sudanese or descriptive system has the most complex terminology with distinct terms for each relationship."
        },
        {
          id: 20,
          question: "What percentage of societies have bilateral descent systems?",
          options: ["15%", "40%", "65%", "80%"],
          correctAnswer: 1,
          explanation: "Approximately 40% of societies have bilateral descent systems tracing ancestry through both parents."
        }
      ]
    },

    // MODULE 4: Economic Anthropology
    {
      id: 4,
      title: "Economic Anthropology",
      content: `# Economic Anthropology

## Introduction to Economic Anthropology
Economic anthropology examines how societies organize production, distribution, and consumption of goods and services. It challenges Western economic assumptions by showing how economic practices are embedded in social relations and cultural values.

## Substantivist vs. Formalist Debate
**Formalist Position**
- Economic principles are universal
- Rational choice and utility maximization apply cross-culturally
- Market logic operates in all economies
- Associated with early economic anthropology

**Substantivist Position** (Karl Polanyi)
- Economies are embedded in social institutions
- Different societies have different economic logics
- Market exchange is just one of several possible systems
- Emphasizes social relationships in economic life

## Modes of Exchange
**Reciprocity**
- **Generalized**: Uncalculated giving among close kin (e.g., parent-child)
- **Balanced**: Expectation of equivalent return within specified time (e.g., gift exchange, trade partnerships)
- **Negative**: Attempt to get more than given (e.g., haggling, gambling)

**Redistribution**
- Goods flow to central authority then reallocated
- Associated with chiefdoms and states
- Examples: Potlatch, tribute systems, taxation
- Creates and reinforces social hierarchy

**Market Exchange**
- Buying and selling through price mechanism
- Impersonal transactions
- Profit motivation
- Associated with capitalism and states

**Householding**
- Production for own consumption
- Family-based economic unit
- Minimizes market dependence
- Common in peasant societies

## Production Systems
**Foraging/Hunting-Gathering**
- Direct appropriation from nature
- Mobile lifestyle following resources
- Egalitarian social structure
- Low population density
- Examples: !Kung San, Inuit, Australian Aborigines

**Horticulture**
- Small-scale gardening with simple tools
- Slash-and-burn/swidden agriculture
- Semi-sedentary settlements
- Limited surplus production
- Examples: Amazonian tribes, Highland New Guinea

**Pastoralism**
- Animal husbandry as primary livelihood
- Nomadic or transhumant movement
- Wealth measured in livestock
- Complex exchange networks with agriculturalists
- Examples: Maasai, Mongols, Bedouin

**Agriculture**
- Intensive cultivation with plows, irrigation, fertilizers
- Sedentary settlements
- Significant surplus production
- Social stratification and states
- Examples: Traditional Asian rice cultivation, European feudalism

**Industrial Production**
- Factory-based manufacturing
- Wage labor
- Capital investment
- Global commodity chains
- Examples: Modern capitalist economies

**Post-industrial/Service Economy**
- Knowledge and service-based
- Information technology
- Flexible specialization
- Examples: Contemporary developed economies

## Property Relations
**Common Property**
- Resources owned and managed collectively
- Regulated access rules
- Examples: Pasturelands, forests, fishing grounds
- Often governed by customary institutions

**Private Property**
- Individual or corporate ownership
- Exclusive rights of use and transfer
- Associated with market economies
- Varies cross-culturally in what can be owned

**State Property**
- Resources controlled by government
- May be managed for public benefit or elite interest
- Examples: National parks, mineral rights

**Intellectual Property**
- Ownership of knowledge, designs, expressions
- Cultural variations in concepts of ownership
- Traditional knowledge vs. patent systems

## Consumption and Value
**Use Value vs. Exchange Value**
- Use value: Utility of an object for its user
- Exchange value: Worth in trade or market
- Different societies emphasize different values

**Commoditization**
- Process by which goods become exchangeable commodities
- May strip objects of social meanings
- Creates alienable, standardized items

**Decommoditization**
- Removing items from market circulation
- Sacred objects, heirlooms, gifts
- Maintains social relationships

**Consumption as Social Communication**
- Goods communicate social status, identity, relationships
- Veblen's "conspicuous consumption"
- Bourdieu's distinction through taste

## Money and Currency
**Functions of Money**
- Medium of exchange
- Store of value
- Unit of account
- Standard of deferred payment

**Types of Money**
- **Commodity money**: Objects with intrinsic value (salt, shells, cattle)
- **Metallic money**: Precious metal coins
- **Fiat money**: Government-issued currency
- **Digital money**: Electronic transactions

**Alternative Currencies**
- Local exchange trading systems (LETS)
- Time banking
- Cryptocurrencies
- Traditional valuables (kula rings, brass rods)

## Gift Economies
**The Gift** (Marcel Mauss)
- Gifts create social bonds and obligations
- "Spirit of the gift" creates reciprocity
- Three obligations: give, receive, reciprocate
- Gifts are never "free"

**Kula Ring** (Malinowski)
- Ceremonial exchange circuit in Melanesia
- Arm shells and necklaces circulate in opposite directions
- Establishes political alliances and status
- Accompanied by practical trade (gimwali)

**Potlatch** (Pacific Northwest)
- Competitive feast and gift-giving
- Redistributes wealth
- Establishes and contests status
- Banned by Canadian government 1884-1951

## Labor and Work
**Division of Labor**
- By gender, age, skill, caste
- Cultural construction of work categories
- Changing patterns with industrialization

**Forms of Labor**
- Family labor in household production
- Reciprocal labor exchanges
- Corvée (required labor for state)
- Slavery and forced labor
- Wage labor

**Meaning of Work**
- Work as social obligation
- Work as identity
- Work as spiritual practice
- Alienation in industrial labor

## Globalization and Economic Change
**Global Commodity Chains**
- Production processes spanning multiple countries
- Uneven distribution of benefits
- Examples: Coffee, clothing, electronics

**Transnational Migration**
- Labor migration for economic opportunity
- Remittances supporting home communities
- Transnational families and communities

**Informal Economy**
- Unregulated economic activities
- Significant portion of global economy
- Survival strategy for urban poor
- Examples: Street vending, domestic work

**Fair Trade Movement**
- Alternative trading networks
- Better prices for producers
- Social and environmental standards
- Challenges of certification and scaling

## Economic Development and Anthropology
**Critiques of Development**
- Western bias in development models
- Neglect of local knowledge and institutions
- Negative impacts on traditional economies
- Dependency creation

**Alternative Development Approaches**
- Participatory development
- Appropriate technology
- Sustainable livelihoods
- Indigenous economic revitalization

**Microfinance**
- Small loans for entrepreneurial activities
- Successes and limitations
- Gender dimensions
- Commercialization concerns

## Environmental Economics
**Ecological Economics**
- Economy as subsystem of ecosystem
- Limits to growth
- Sustainable scale of economic activity

**Traditional Ecological Knowledge**
- Indigenous management practices
- Sustainable resource use
- Integration of economic and spiritual values

**Climate Change Economics**
- Uneven impacts on different communities
- Climate justice movements
- Alternative indicators beyond GDP

## Future Directions
- Digital economies and platform capitalism
- Sharing economy and collaborative consumption
- Post-growth and degrowth movements
- Economic responses to pandemic and crisis
- Anthropological contributions to economic policy`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "Who developed the substantivist position in economic anthropology?",
          options: ["Bronisław Malinowski", "Karl Polanyi", "Marcel Mauss", "Claude Lévi-Strauss"],
          correctAnswer: 1,
          explanation: "Karl Polanyi developed the substantivist position arguing that economies are embedded in social institutions."
        },
        {
          id: 2,
          question: "Which mode of exchange involves goods flowing to a central authority for reallocation?",
          options: ["Reciprocity", "Redistribution", "Market exchange", "Householding"],
          correctAnswer: 1,
          explanation: "Redistribution involves collection of goods by a central authority followed by their reallocation to members of society."
        },
        {
          id: 3,
          question: "What is the Kula Ring?",
          options: ["A fishing technique", "A ceremonial exchange circuit", "A farming method", "A housing structure"],
          correctAnswer: 1,
          explanation: "The Kula Ring is a ceremonial exchange system in Melanesia where arm shells and necklaces circulate in opposite directions."
        },
        {
          id: 4,
          question: "Which production system involves direct appropriation from nature?",
          options: ["Horticulture", "Pastoralism", "Foraging", "Agriculture"],
          correctAnswer: 2,
          explanation: "Foraging or hunting-gathering involves direct appropriation of wild plants and animals from nature."
        },
        {
          id: 5,
          question: "What percentage of forager societies have egalitarian social structures?",
          options: ["Approximately 25%", "About 50%", "Nearly 75%", "Almost all"],
          correctAnswer: 3,
          explanation: "Almost all foraging societies have relatively egalitarian social structures with minimal hierarchy."
        },
        {
          id: 6,
          question: "Which type of reciprocity involves uncalculated giving among close kin?",
          options: ["Balanced", "Generalized", "Negative", "Market"],
          correctAnswer: 1,
          explanation: "Generalized reciprocity involves giving without calculation of immediate return, typical among close family members."
        },
        {
          id: 7,
          question: "What was the Potlatch?",
          options: ["A hunting ritual", "A competitive feast and gift-giving ceremony", "A farming technique", "A marriage custom"],
          correctAnswer: 1,
          explanation: "The Potlatch was a competitive feast and gift-giving ceremony among Pacific Northwest Coast peoples that established status."
        },
        {
          id: 8,
          question: "Which economic anthropologist wrote 'The Gift'?",
          options: ["Franz Boas", "Marcel Mauss", "Bronisław Malinowski", "Clifford Geertz"],
          correctAnswer: 1,
          explanation: "Marcel Mauss wrote the influential essay 'The Gift' analyzing the social obligations created by gift exchange."
        },
        {
          id: 9,
          question: "What is householding?",
          options: ["Home construction", "Production for market sale", "Production for own consumption", "Banking services"],
          correctAnswer: 2,
          explanation: "Householding involves production for a family's own consumption rather than for market exchange."
        },
        {
          id: 10,
          question: "Which form of property involves collective ownership and management?",
          options: ["Private property", "State property", "Common property", "Intellectual property"],
          correctAnswer: 2,
          explanation: "Common property involves resources owned and managed collectively by a community with regulated access rules."
        },
        {
          id: 11,
          question: "What does the formalist position in economic anthropology emphasize?",
          options: ["Social embeddedness", "Universal economic principles", "Cultural specificity", "Historical context"],
          correctAnswer: 1,
          explanation: "The formalist position emphasizes that rational choice and utility maximization are universal economic principles."
        },
        {
          id: 12,
          question: "Which production system is characterized by animal husbandry as primary livelihood?",
          options: ["Foraging", "Horticulture", "Pastoralism", "Agriculture"],
          correctAnswer: 2,
          explanation: "Pastoralism relies primarily on domesticated animals for livelihood, often involving nomadic or transhumant movement."
        },
        {
          id: 13,
          question: "What percentage of the global economy is estimated to be informal?",
          options: ["10-20%", "25-35%", "40-50%", "Over 60%"],
          correctAnswer: 1,
          explanation: "Approximately 25-35% of the global economy is estimated to be in the informal sector, though estimates vary."
        },
        {
          id: 14,
          question: "Which function of money involves comparing values of different goods?",
          options: ["Medium of exchange", "Store of value", "Unit of account", "Standard of deferred payment"],
          correctAnswer: 2,
          explanation: "As a unit of account, money provides a common measure for comparing values of different goods and services."
        },
        {
          id: 15,
          question: "What is commoditization?",
          options: ["Making goods sacred", "Process of goods becoming exchangeable commodities", "Family production", "Gift exchange"],
          correctAnswer: 1,
          explanation: "Commoditization is the process by which goods become exchangeable commodities, often stripping them of social meanings."
        },
        {
          id: 16,
          question: "Which system involves ceremonial exchange establishing political alliances in Melanesia?",
          options: ["Potlatch", "Kula Ring", "Gimwali", "Corvée"],
          correctAnswer: 1,
          explanation: "The Kula Ring is a ceremonial exchange system in Melanesia that establishes political alliances between trading partners."
        },
        {
          id: 17,
          question: "What does 'use value' refer to?",
          options: ["Market price", "Utility of an object for its user", "Exchange rate", "Investment potential"],
          correctAnswer: 1,
          explanation: "Use value refers to the utility or usefulness of an object for the person who uses it."
        },
        {
          id: 18,
          question: "Which economic system is most associated with capitalist societies?",
          options: ["Reciprocity", "Redistribution", "Market exchange", "Householding"],
          correctAnswer: 2,
          explanation: "Market exchange, with price-mediated buying and selling, is characteristic of capitalist economies."
        },
        {
          id: 19,
          question: "What was the main criticism of traditional development models?",
          options: ["Too small-scale", "Western bias and neglect of local knowledge", "Too expensive", "Too slow"],
          correctAnswer: 1,
          explanation: "Traditional development models were criticized for Western bias and neglecting local knowledge and institutions."
        },
        {
          id: 20,
          question: "Which movement emphasizes better prices and conditions for producers?",
          options: ["Globalization", "Fair Trade", "Industrialization", "Privatization"],
          correctAnswer: 1,
          explanation: "The Fair Trade movement creates alternative trading networks with better prices and conditions for producers."
        }
      ]
    },

    // MODULE 5: Political Anthropology
    {
      id: 5,
      title: "Political Anthropology",
      content: `# Political Anthropology

## Introduction to Political Anthropology
Political anthropology studies power, authority, and governance across different societies. It examines how political systems emerge, function, and transform, focusing on both formal institutions and informal power relations.

## Theories of Power
**Power as Coercion** (Weber)
- Ability to impose will despite resistance
- Requires control of force or resources
- Associated with state authority

**Power as Hegemony** (Gramsci)
- Dominance through cultural consent rather than force
- Ruling ideas become "common sense"
- Requires ongoing negotiation and reinforcement

**Power as Practice** (Foucault)
- Power circulates through social practices
- Disciplinary power produces compliant subjects
- Power/knowledge relationship
- Micro-physics of power in everyday life

**Power as Resistance**
- Subordinate groups' agency against domination
- Everyday forms of resistance
- Hidden transcripts vs. public performances

## Types of Political Systems
**Acephalous Societies** (Without formal leaders)
- **Bands**: Small foraging groups (20-100 people)
  - Egalitarian decision-making
  - Consensus-based conflict resolution
  - Flexible membership
  - Examples: !Kung San, Inuit

- **Tribes**: Larger than bands but without centralized authority
  - Segmentary lineage organization
  - Age sets and age grades
  - Big men (achieved leadership)
  - Examples: Nuer, Tiv

**Centralized Political Systems**
- **Chiefdoms**: Hereditary ranked societies
  - Formal political offices
  - Redistributive economies
  - Social hierarchy based on kinship
  - Examples: Hawaiian chiefdoms, Kwakiutl

- **States**: Centralized government with monopoly on force
  - Bureaucratic administration
  - Class stratification
  - Territorial sovereignty
  - Examples: Ancient empires, modern nations

## Leadership and Authority
**Types of Authority** (Max Weber)
- **Traditional**: Based on established customs and beliefs
- **Charismatic**: Based on personal qualities of leader
- **Legal-Rational**: Based on formal rules and procedures

**Forms of Leadership**
- **Big Men**: Achieved status through generosity and persuasion
- **Chiefs**: Ascribed status through hereditary position
- **Kings**: Divine or semi-divine rulers
- **Presidents**: Elected officials in democratic systems
- **Bureaucrats**: Administrative officials

## Conflict and Conflict Resolution
**Sources of Conflict**
- Resource competition
- Political succession disputes
- Ethnic or religious differences
- Historical grievances
- External pressures

**Conflict Resolution Mechanisms**
- **Negotiation**: Direct discussion between parties
- **Mediation**: Third party facilitates agreement
- **Adjudication**: Third party makes binding decision
- **Ritual Reconciliation**: Ceremonial resolution
- **Avoidance**: Physical or social separation

**Feuding and Warfare**
- **Feud**: Enduring conflict between kinship groups
- **Raid**: Short-term violent attack
- **Battle**: Organized armed conflict
- **Total War**: Complete societal mobilization

## Legal Anthropology
**Law vs. Custom**
- **Law**: Formal rules with enforcement mechanisms
- **Custom**: Traditional practices with social sanction
- Continuum rather than binary distinction

**Legal Pluralism**
- Coexistence of multiple legal systems
- State law alongside customary, religious, or international law
- Common in postcolonial societies

**Dispute Processing**
- **Self-help**: Individuals or groups handle disputes directly
- **Negotiation**: Parties reach agreement themselves
- **Mediation**: Neutral third party assists
- **Adjudication**: Authoritative third party decides

## Nationalism and Ethnicity
**Imagined Communities** (Benedict Anderson)
- Nations as socially constructed communities
- Print capitalism enabling national consciousness
- Shared symbols, myths, and narratives

**Ethnicity and Ethnic Groups**
- **Primordialism**: Ethnicity as innate, ancient identity
- **Instrumentalism**: Ethnicity as political resource
- **Constructivism**: Ethnicity as socially constructed
- **Situational ethnicity**: Identity shifts with context

**Ethnic Conflict**
- Competition over resources and power
- Historical grievances and collective memory
- Political manipulation of ethnic identity
- Globalization and transnational ethnic networks

## Colonialism and Postcolonialism
**Colonial Governance**
- Direct vs. indirect rule
- Creation of "customary law"
- Invention of tradition
- Divide and rule strategies

**Postcolonial Legacies**
- Artificial borders creating multi-ethnic states
- Economic dependency
- Cultural hybridity
- Ongoing neocolonial relations

**Resistance and Rebellion**
- Everyday resistance
- Religious movements
- Nationalist movements
- Armed rebellion

## Gender and Politics
**Political Representation**
- Women's political participation cross-culturally
- Quota systems and affirmative action
- Indigenous women's leadership

**Feminist Anthropology**
- Critique of male bias in political analysis
- Examination of private sphere as political
- Intersectionality of gender with other identities

**Queer Politics**
- LGBTQ+ rights movements
- Challenging heteronormative political structures
- Transnational queer activism

## Environmental Politics
**Political Ecology**
- Power relations in environmental conflicts
- Unequal distribution of environmental risks and benefits
- Indigenous environmental knowledge and rights

**Climate Change Politics**
- Unequal responsibility and vulnerability
- Climate justice movements
- Indigenous climate activism

**Resource Conflicts**
- Water rights and access
- Land grabs and displacement
- Mining and extraction conflicts

## Globalization and Transnational Politics
**Transnational Social Movements**
- Human rights advocacy
- Environmental activism
- Indigenous rights movements
- Digital activism

**Global Governance**
- International organizations (UN, World Bank, IMF)
- Transnational corporations
- Non-governmental organizations (NGOs)
- Global civil society

**Migration Politics**
- Citizenship and belonging
- Transnational political participation
- Diaspora politics
- Border regimes and enforcement

## Violence and the State
**State Violence**
- Police and military force
- Incarceration systems
- Death penalty
- Extrajudicial killings

**Political Violence**
- Terrorism and counter-terrorism
- Genocide and ethnic cleansing
- Political assassination
- Torture and human rights abuses

**Structural Violence**
- Social arrangements harming individuals
- Poverty, racism, sexism as violence
- Unequal access to resources and opportunities

## Democracy and Political Participation
**Anthropology of Democracy**
- Cultural meanings of democracy
- Democratic practices in non-Western contexts
- Critiques of liberal democracy

**Political Participation**
- Voting behavior and patterns
- Social movements and protest
- Digital political engagement
- Alternative forms of participation

**Corruption**
- Cultural understandings of corruption
- Gift-giving vs. bribery
- Anti-corruption movements
- Transparency and accountability

## Future Directions
- Digital politics and social media
- Populism and political polarization
- Pandemic politics and governance
- Anthropocene politics
- Decolonial political projects`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "Who developed the concept of hegemony in political theory?",
          options: ["Max Weber", "Antonio Gramsci", "Michel Foucault", "Karl Marx"],
          correctAnswer: 1,
          explanation: "Antonio Gramsci developed the concept of hegemony - dominance through cultural consent rather than coercion."
        },
        {
          id: 2,
          question: "What type of political system characterizes bands?",
          options: ["Centralized chiefdoms", "Acephalous egalitarian", "Bureaucratic states", "Democratic republics"],
          correctAnswer: 1,
          explanation: "Bands have acephalous (leaderless) political systems with egalitarian decision-making processes."
        },
        {
          id: 3,
          question: "Which type of authority is based on established customs and beliefs?",
          options: ["Charismatic", "Traditional", "Legal-rational", "Bureaucratic"],
          correctAnswer: 1,
          explanation: "Traditional authority derives from established customs, beliefs, and long-standing practices."
        },
        {
          id: 4,
          question: "What percentage of foraging societies have formal leadership positions?",
          options: ["Almost all", "About half", "Less than 25%", "None"],
          correctAnswer: 2,
          explanation: "Less than 25% of foraging societies have formal, hereditary leadership positions; most use consensus-based decision-making."
        },
        {
          id: 5,
          question: "Who coined the term 'imagined communities' to describe nations?",
          options: ["Ernest Gellner", "Benedict Anderson", "Eric Hobsbawm", "Clifford Geertz"],
          correctAnswer: 1,
          explanation: "Benedict Anderson coined 'imagined communities' to describe nations as socially constructed through shared media and symbols."
        },
        {
          id: 6,
          question: "What does legal pluralism refer to?",
          options: ["Multiple languages in court", "Coexistence of different legal systems", "Many lawyers in a case", "Complex legislation"],
          correctAnswer: 1,
          explanation: "Legal pluralism refers to the coexistence of multiple legal systems (state, customary, religious) within the same social field."
        },
        {
          id: 7,
          question: "Which approach views ethnicity as a political resource?",
          options: ["Primordialism", "Instrumentalism", "Constructivism", "Essentialism"],
          correctAnswer: 1,
          explanation: "Instrumentalism views ethnicity as a political resource that leaders mobilize for political goals."
        },
        {
          id: 8,
          question: "What type of leadership is achieved through generosity and persuasion?",
          options: ["Chief", "King", "Big Man", "President"],
          correctAnswer: 2,
          explanation: "Big Men achieve leadership status through personal qualities like generosity, persuasion, and organizing ability."
        },
        {
          id: 9,
          question: "Which concept describes power circulating through everyday social practices?",
          options: ["Hegemony", "Coercion", "Governmentality", "Sovereignty"],
          correctAnswer: 2,
          explanation: "Governmentality, from Foucault, describes how power circulates through everyday practices and institutions."
        },
        {
          id: 10,
          question: "What does 'acephalous' mean in political anthropology?",
          options: ["Many leaders", "Without formal leaders", "Democratic", "Authoritarian"],
          correctAnswer: 1,
          explanation: "Acephalous means 'headless' - referring to societies without formal, centralized leadership positions."
        },
        {
          id: 11,
          question: "Which conflict resolution method involves a neutral third party facilitating agreement?",
          options: ["Negotiation", "Mediation", "Adjudication", "Avoidance"],
          correctAnswer: 1,
          explanation: "Mediation involves a neutral third party helping disputing parties reach their own agreement."
        },
        {
          id: 12,
          question: "What percentage of traditional societies have chiefly political systems?",
          options: ["10-20%", "30-40%", "50-60%", "70-80%"],
          correctAnswer: 1,
          explanation: "Approximately 30-40% of traditional societies have chiefly political systems with hereditary leadership."
        },
        {
          id: 13,
          question: "Which theorist analyzed the 'micro-physics of power'?",
          options: ["Max Weber", "Michel Foucault", "Karl Marx", "Emile Durkheim"],
          correctAnswer: 1,
          explanation: "Michel Foucault analyzed the 'micro-physics of power' - how power operates in everyday practices and institutions."
        },
        {
          id: 14,
          question: "What is segmentary lineage organization?",
          options: ["Bureaucratic structure", "Nested kinship groups for political action", "Age-based groups", "Territorial divisions"],
          correctAnswer: 1,
          explanation: "Segmentary lineage organization involves nested kinship groups that mobilize for political action based on genealogical distance."
        },
        {
          id: 15,
          question: "Which concept describes everyday, subtle forms of resistance by subordinate groups?",
          options: ["Rebellion", "Revolution", "Hidden transcripts", "Protest"],
          correctAnswer: 2,
          explanation: "Hidden transcripts, from James Scott, describe subtle, everyday forms of resistance by subordinate groups."
        },
        {
          id: 16,
          question: "What does political ecology examine?",
          options: ["Government structures", "Power relations in environmental conflicts", "Voting systems", "Political parties"],
          correctAnswer: 1,
          explanation: "Political ecology examines power relations in environmental conflicts and resource management."
        },
        {
          id: 17,
          question: "Which type of warfare involves enduring conflict between kinship groups?",
          options: ["Raid", "Battle", "Feud", "Total war"],
          correctAnswer: 2,
          explanation: "Feuding involves enduring, often cyclical conflict between kinship groups over grievances."
        },
        {
          id: 18,
          question: "What percentage of societies historically had state-level political organization?",
          options: ["Less than 10%", "About 25%", "Nearly 50%", "Most"],
          correctAnswer: 0,
          explanation: "Less than 10% of societies historically developed state-level political organization; most were bands, tribes, or chiefdoms."
        },
        {
          id: 19,
          question: "Which approach views nations as modern constructions?",
          options: ["Primordialism", "Perennialism", "Modernism", "Traditionalism"],
          correctAnswer: 2,
          explanation: "Modernism views nations as modern constructions emerging with industrialization, print capitalism, and state formation."
        },
        {
          id: 20,
          question: "What does structural violence refer to?",
          options: ["Physical assault", "Social arrangements that harm individuals", "Warfare", "Political repression"],
          correctAnswer: 1,
          explanation: "Structural violence refers to social arrangements that systematically harm individuals by preventing them from meeting basic needs."
        }
      ]
    },

    // MODULE 6: Applied Anthropology
    {
      id: 6,
      title: "Applied Anthropology",
      content: `# Applied Anthropology

## Introduction to Applied Anthropology
Applied anthropology uses anthropological theories, methods, and insights to address practical problems and contribute to positive social change. It bridges academic research with real-world applications in diverse settings.

## Historical Development
**Early Applications (19th-early 20th century)**
- Colonial administration and governance
- Missionary work and cultural translation
- Museum curation and cultural preservation

**World War II Era**
- National character studies for military strategy
- Cross-cultural communication training
- Refugee and displacement issues

**Post-War Development**
- International development projects
- Public health initiatives
- Education and literacy programs
- Business and organizational consulting

**Contemporary Expansion**
- Human rights advocacy
- Environmental conservation
- Medical anthropology applications
- Technology design and evaluation
- Disaster response and humanitarian work

## Ethical Framework for Applied Work
**Principles of Professional Responsibility**
1. **Do No Harm**: Primary ethical obligation
2. **Informed Consent**: Voluntary participation with understanding
3. **Community Collaboration**: Partnering with affected communities
4. **Cultural Sensitivity**: Respecting local knowledge and practices
5. **Transparency**: Clear communication about goals and methods
6. **Accountability**: Taking responsibility for impacts
7. **Sustainability**: Supporting long-term positive change

**Ethical Dilemmas in Applied Work**
- Conflicting stakeholder interests
- Cultural appropriation concerns
- Power imbalances in research relationships
- Confidentiality vs. reporting obligations
- Short-term vs. long-term impacts

## Major Application Areas
**Development Anthropology**
- **Community needs assessment**: Identifying local priorities and resources
- **Participatory development**: Involving communities in project design and implementation
- **Cultural appropriateness**: Ensuring interventions fit local contexts
- **Monitoring and evaluation**: Assessing project impacts and outcomes
- **Examples**: Water sanitation projects, agricultural development, microfinance

**Medical Anthropology**
- **Cross-cultural health beliefs**: Understanding different explanatory models of illness
- **Health communication**: Developing culturally appropriate health messages
- **Traditional healing integration**: Combining biomedical and traditional practices
- **Health disparities research**: Examining social determinants of health
- **Examples**: HIV/AIDS prevention, maternal health, mental health services

**Educational Anthropology**
- **Culturally responsive pedagogy**: Adapting teaching to students' cultural backgrounds
- **Language preservation**: Supporting endangered indigenous languages
- **Educational policy analysis**: Examining impacts of policies on diverse communities
- **Parent and community engagement**: Building school-community partnerships
- **Examples**: Bilingual education, indigenous education, refugee education

**Business Anthropology**
- **Organizational culture**: Understanding workplace norms and values
- **Consumer research**: Studying cultural factors in consumption
- **Cross-cultural management**: Facilitating work across cultural boundaries
- **User experience research**: Designing products for diverse users
- **Examples**: International business, technology design, marketing research

**Environmental Anthropology**
- **Community-based conservation**: Involving local communities in resource management
- **Climate change adaptation**: Developing culturally appropriate adaptation strategies
- **Environmental justice**: Addressing unequal environmental burdens
- **Traditional ecological knowledge**: Documenting and applying indigenous knowledge
- **Examples**: Wildlife conservation, sustainable agriculture, water management

**Legal and Forensic Anthropology**
- **Cultural defense in court**: Providing cultural context for legal cases
- **Human rights documentation**: Investigating and documenting abuses
- **Repatriation work**: Returning cultural property and human remains
- **Disaster victim identification**: Using anthropological methods in mass fatality incidents
- **Examples**: Asylum cases, indigenous land claims, war crimes investigations

## Methodological Approaches
**Participatory Action Research (PAR)**
- Collaborative research with community members as co-researchers
- Cyclical process of research, action, reflection
- Empowers communities to address their own concerns
- Challenges traditional researcher-subject hierarchies

**Rapid Assessment Procedures**
- Quick data collection for time-sensitive decisions
- Multiple methods triangulation
- Team-based approaches
- Used in emergency and development contexts

**Ethnographic Evaluation**
- In-depth assessment of programs and interventions
- Focus on process and context, not just outcomes
- Understanding unintended consequences
- Providing rich contextual understanding

**Cultural Brokerage**
- Facilitating communication across cultural boundaries
- Translating concepts and practices
- Building mutual understanding
- Navigating different worldviews and values

## Skills for Applied Anthropologists
**Core Competencies**
- Ethnographic research skills
- Cross-cultural communication
- Qualitative data analysis
- Report writing and presentation
- Project management
- Grant writing and fundraising
- Community engagement

**Specialized Skills**
- Program evaluation design
- Policy analysis and development
- Conflict mediation and facilitation
- Training and capacity building
- Advocacy and lobbying
- Media and public communication

## Employment Settings
**Academic and Research Institutions**
- University research centers
- Think tanks and policy institutes
- Museums and cultural institutions

**Government Agencies**
- International development agencies
- Public health departments
- Cultural heritage organizations
- Immigration and refugee services

**Non-Governmental Organizations**
- Human rights organizations
- Environmental groups
- Humanitarian agencies
- Community development organizations

**Private Sector**
- Consulting firms
- Corporations with international operations
- Market research companies
- Technology and design firms

**Independent Practice**
- Consulting and freelance work
- Expert witness services
- Cultural mediation
- Program evaluation contracts

## Challenges in Applied Work
**Practical Challenges**
- Limited funding and resources
- Short project timelines
- Pressure for immediate results
- Bureaucratic constraints
- Political interference

**Ethical Challenges**
- Conflicting stakeholder interests
- Power imbalances in partnerships
- Cultural appropriation risks
- Sustainability of interventions
- Measuring long-term impacts

**Professional Challenges**
- Interdisciplinary collaboration tensions
- Communication across different sectors
- Maintaining anthropological perspective
- Career advancement in non-academic settings
- Work-life balance in demanding roles

## Success Stories and Case Studies
**Public Health: HIV Prevention in Haiti**
- Anthropologists worked with traditional healers
- Developed culturally appropriate prevention messages
- Integrated biomedical and traditional approaches
- Significantly increased testing and treatment uptake

**Education: Navajo Language Revitalization**
- Community-based language documentation
- Development of bilingual curriculum materials
- Training of native speaker teachers
- Increased intergenerational language transmission

**Conservation: Marine Protected Areas in Philippines**
- Collaborative management with fishing communities
- Integration of traditional ecological knowledge
- Alternative livelihood development
- Improved fish stocks and community wellbeing

**Business: Mobile Technology in Kenya**
- Ethnographic study of mobile phone use
- Design of culturally appropriate interfaces
- Development of mobile banking services
- Increased financial inclusion

## Future Directions
**Emerging Application Areas**
- Digital anthropology and technology ethics
- Pandemic response and public health anthropology
- Climate change adaptation and mitigation
- Migration and refugee studies
- Food systems and nutritional anthropology

**Methodological Innovations**
- Digital ethnography and online research
- Mixed methods approaches
- Collaborative and participatory methods
- Visual and multimedia anthropology
- Rapid ethnographic assessment

**Professional Development**
- Expanded training programs
- Professional certification options
- Stronger professional networks
- Increased recognition of applied work
- Better integration with academic anthropology

**Global Challenges**
- Addressing inequality and social justice
- Promoting sustainable development
- Supporting cultural diversity and rights
- Responding to humanitarian crises
- Contributing to peacebuilding and conflict resolution`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the primary ethical principle in applied anthropology?",
          options: ["Maximize profit", "Do no harm", "Complete objectivity", "Rapid results"],
          correctAnswer: 1,
          explanation: "'Do no harm' is the primary ethical obligation in applied anthropology, prioritizing the wellbeing of communities."
        },
        {
          id: 2,
          question: "Which methodological approach involves community members as co-researchers?",
          options: ["Experimental research", "Participatory action research", "Survey research", "Laboratory research"],
          correctAnswer: 1,
          explanation: "Participatory action research (PAR) involves community members as active co-researchers throughout the process."
        },
        {
          id: 3,
          question: "What percentage of anthropologists work in applied settings today?",
          options: ["Less than 25%", "Approximately 50%", "About 75%", "Nearly all"],
          correctAnswer: 1,
          explanation: "Approximately 50% of anthropology PhDs work in applied settings outside academia, with the percentage increasing."
        },
        {
          id: 4,
          question: "Which application area focuses on culturally appropriate health interventions?",
          options: ["Development anthropology", "Medical anthropology", "Business anthropology", "Educational anthropology"],
          correctAnswer: 1,
          explanation: "Medical anthropology applies anthropological insights to develop culturally appropriate health interventions and services."
        },
        {
          id: 5,
          question: "What does cultural brokerage involve?",
          options: ["Financial transactions", "Facilitating cross-cultural communication", "Art sales", "Travel arrangements"],
          correctAnswer: 1,
          explanation: "Cultural brokerage involves facilitating communication and understanding across cultural boundaries and worldviews."
        },
        {
          id: 6,
          question: "Which historical period saw anthropologists working on national character studies for military strategy?",
          options: ["19th century", "World War II era", "1960s", "1990s"],
          correctAnswer: 1,
          explanation: "During World War II, anthropologists contributed to national character studies and cross-cultural communication for military purposes."
        },
        {
          id: 7,
          question: "What is a key challenge in development anthropology?",
          options: ["Too much funding", "Ensuring cultural appropriateness of interventions", "Lack of theories", "Isolation from communities"],
          correctAnswer: 1,
          explanation: "A key challenge is ensuring interventions are culturally appropriate and responsive to local contexts and knowledge."
        },
        {
          id: 8,
          question: "Which skill is NOT typically considered core for applied anthropologists?",
          options: ["Ethnographic research", "Cross-cultural communication", "Advanced statistical modeling", "Project management"],
          correctAnswer: 2,
          explanation: "While useful, advanced statistical modeling is not typically considered a core skill; qualitative methods are more central."
        },
        {
          id: 9,
          question: "What does PAR stand for in applied anthropology?",
          options: ["Professional Anthropological Research", "Participatory Action Research", "Practical Applied Results", "Policy Analysis and Reporting"],
          correctAnswer: 1,
          explanation: "PAR stands for Participatory Action Research, an approach that involves community members as co-researchers."
        },
        {
          id: 10,
          question: "Which employment setting is most common for applied anthropologists?",
          options: ["Academic departments", "Government agencies", "Non-governmental organizations", "Private corporations"],
          correctAnswer: 2,
          explanation: "Non-governmental organizations (NGOs) are among the most common employers for applied anthropologists."
        },
        {
          id: 11,
          question: "What is rapid assessment used for in applied work?",
          options: ["Long-term studies", "Quick data collection for time-sensitive decisions", "Theoretical development", "Historical research"],
          correctAnswer: 1,
          explanation: "Rapid assessment procedures provide quick data collection and analysis for time-sensitive decisions in applied settings."
        },
        {
          id: 12,
          question: "Which ethical principle requires clear communication about research goals?",
          options: ["Confidentiality", "Transparency", "Reciprocity", "Sustainability"],
          correctAnswer: 1,
          explanation: "Transparency requires clear communication about research goals, methods, and potential impacts to all stakeholders."
        },
        {
          id: 13,
          question: "What percentage of applied anthropology projects involve community collaboration?",
          options: ["Less than 25%", "About 50%", "Most professional guidelines recommend it", "Almost none"],
          correctAnswer: 2,
          explanation: "Most professional guidelines and ethical standards recommend or require community collaboration in applied work."
        },
        {
          id: 14,
          question: "Which application area studies workplace cultures and organizational behavior?",
          options: ["Medical anthropology", "Business anthropology", "Development anthropology", "Educational anthropology"],
          correctAnswer: 1,
          explanation: "Business anthropology applies anthropological methods to study workplace cultures, organizational behavior, and consumer practices."
        },
        {
          id: 15,
          question: "What is ethnographic evaluation?",
          options: ["Statistical testing", "In-depth assessment of programs using ethnographic methods", "Cost-benefit analysis", "Laboratory experiment"],
          correctAnswer: 1,
          explanation: "Ethnographic evaluation uses ethnographic methods to provide rich, contextual understanding of programs and their impacts."
        },
        {
          id: 16,
          question: "Which historical use of anthropology is now widely criticized?",
          options: ["Public health work", "Colonial administration", "Museum curation", "Refugee assistance"],
          correctAnswer: 1,
          explanation: "Anthropology's historical involvement in colonial administration is now widely criticized for supporting colonial power structures."
        },
        {
          id: 17,
          question: "What does sustainability refer to in applied anthropology?",
          options: ["Environmental protection", "Supporting long-term positive change", "Financial profit", "Academic publications"],
          correctAnswer: 1,
          explanation: "Sustainability refers to supporting interventions that create long-term positive change beyond project timelines."
        },
        {
          id: 18,
          question: "Which emerging area applies anthropology to technology design?",
          options: ["Digital anthropology", "Paleoanthropology", "Archaeology", "Primatology"],
          correctAnswer: 0,
          explanation: "Digital anthropology applies anthropological perspectives to technology design, use, and impacts in digital environments."
        },
        {
          id: 19,
          question: "What is a common challenge in interdisciplinary applied work?",
          options: ["Too much agreement", "Communication across different disciplinary perspectives", "Lack of methods", "Isolation"],
          correctAnswer: 1,
          explanation: "Communication across different disciplinary perspectives, methods, and priorities is a common challenge in interdisciplinary work."
        },
        {
          id: 20,
          question: "Which success story involved working with traditional healers on HIV prevention?",
          options: ["Kenya mobile banking", "Haiti public health", "Navajo language", "Philippines conservation"],
          correctAnswer: 1,
          explanation: "In Haiti, anthropologists successfully collaborated with traditional healers to develop culturally appropriate HIV prevention."
        }
      ]
    }
  ],

  // 3. FINAL EXAM (40 questions covering all modules)
  finalExam: {
    title: "Cultural Anthropology Diploma Final Examination",
    description: "Comprehensive exam covering all 6 modules of the Cultural Anthropology Diploma course",
    passingScore: 70,
    timeLimit: 120, // minutes
    questions: [
      // Questions from Module 1 (7 questions)
      {
        id: 1,
        question: "Which anthropologist developed historical particularism?",
        options: ["Edward Tylor", "Franz Boas", "Claude Lévi-Strauss", "Bronisław Malinowski"],
        correctAnswer: 1,
        explanation: "Franz Boas developed historical particularism, emphasizing unique cultural histories over evolutionary stages.",
        module: 1
      },
      {
        id: 2,
        question: "What is the holistic perspective in anthropology?",
        options: ["Studying only material culture", "Examining all aspects of human life as interconnected", "Focusing on biological evolution", "Prioritizing linguistic analysis"],
        correctAnswer: 1,
        explanation: "Holism examines how all aspects of human life-social, cultural, biological, linguistic-are interconnected.",
        module: 1
      },
      {
        id: 3,
        question: "Which approach questions the possibility of objective ethnographic accounts?",
        options: ["Functionalism", "Postmodern anthropology", "Cultural materialism", "Evolutionism"],
        correctAnswer: 1,
        explanation: "Postmodern anthropology questions objectivity and emphasizes the anthropologist's role in constructing ethnographic narratives.",
        module: 1
      },
      {
        id: 4,
        question: "What percentage of early anthropological theories emphasized unilinear evolution?",
        options: ["Most 19th century theories", "Only functionalist theories", "Mid-20th century theories", "Contemporary theories"],
        correctAnswer: 0,
        explanation: "Most 19th century anthropological theories proposed some form of unilinear evolution before being challenged.",
        module: 1
      },
      {
        id: 5,
        question: "Which concept involves understanding a culture from the perspective of its members?",
        options: ["Ethnocentrism", "Emic perspective", "Etic perspective", "Cultural universalism"],
        correctAnswer: 1,
        explanation: "The emic perspective seeks to understand a culture from the viewpoint of its members.",
        module: 1
      },
      {
        id: 6,
        question: "What are the four traditional fields of anthropology?",
        options: ["Cultural, archaeological, biological, linguistic", "Social, economic, political, religious", "Physical, mental, emotional, spiritual", "Urban, rural, tribal, industrial"],
        correctAnswer: 0,
        explanation: "The four traditional fields are cultural anthropology, archaeology, biological anthropology, and linguistic anthropology.",
        module: 1
      },
      {
        id: 7,
        question: "Who developed the theory of cultural materialism?",
        options: ["Clifford Geertz", "Marvin Harris", "Franz Boas", "Edward Tylor"],
        correctAnswer: 1,
        explanation: "Marvin Harris developed cultural materialism, arguing that material conditions determine cultural patterns.",
        module: 1
      },

      // Questions from Module 2 (7 questions)
      {
        id: 8,
        question: "What is the primary research method in cultural anthropology?",
        options: ["Laboratory experiments", "Ethnographic fieldwork", "Statistical surveys", "Historical archives"],
        correctAnswer: 1,
        explanation: "Ethnography, involving immersive fieldwork, is the primary method for understanding cultures from within.",
        module: 2
      },
      {
        id: 9,
        question: "Which ethical principle requires participants to understand and agree to research?",
        options: ["Confidentiality", "Informed consent", "Reciprocity", "Objectivity"],
        correctAnswer: 1,
        explanation: "Informed consent ensures participants understand and voluntarily agree to participate in research.",
        module: 2
      },
      {
        id: 10,
        question: "What does reflexivity involve in anthropological research?",
        options: ["Statistical analysis", "Critical examination of researcher's position and biases", "Field equipment maintenance", "Theoretical development"],
        correctAnswer: 1,
        explanation: "Reflexivity involves critically examining how the researcher's background and position affect the research.",
        module: 2
      },
      {
        id: 11,
        question: "What is multi-sited ethnography designed to study?",
        options: ["Single isolated communities", "Transnational processes and diasporas", "Ancient civilizations", "Biological evolution"],
        correctAnswer: 1,
        explanation: "Multi-sited ethnography examines cultural phenomena across multiple locations in our globalized world.",
        module: 2
      },
      {
        id: 12,
        question: "What percentage of ethnographic research today involves digital spaces?",
        options: ["Less than 10%", "Approximately 25%", "More than 50%", "Nearly all"],
        correctAnswer: 1,
        explanation: "Approximately 25% of contemporary ethnographic research includes digital ethnography components.",
        module: 2
      },
      {
        id: 13,
        question: "Which method involves collecting personal narratives to understand individual experiences?",
        options: ["Surveys", "Life histories", "Genealogies", "Focus groups"],
        correctAnswer: 1,
        explanation: "Life histories collect personal narratives that situate individual experiences within cultural contexts.",
        module: 2
      },
      {
        id: 14,
        question: "What does 'thick description' refer to in ethnographic writing?",
        options: ["Lengthy reports", "Context-rich detailed accounts", "Statistical descriptions", "Theoretical abstracts"],
        correctAnswer: 1,
        explanation: "Thick description provides detailed, context-rich accounts of cultural practices and meanings.",
        module: 2
      },

      // Questions from Module 3 (7 questions)
      {
        id: 15,
        question: "Which descent system traces ancestry through male lines only?",
        options: ["Matrilineal", "Patrilineal", "Bilateral", "Ambilineal"],
        correctAnswer: 1,
        explanation: "Patrilineal descent traces ancestry and inheritance exclusively through the male line.",
        module: 3
      },
      {
        id: 16,
        question: "Approximately what percentage of societies historically permitted polygyny?",
        options: ["25%", "44%", "67%", "84%"],
        correctAnswer: 3,
        explanation: "Approximately 84% of societies historically permitted polygyny, though it's not always widely practiced.",
        module: 3
      },
      {
        id: 17,
        question: "Which kinship terminology system distinguishes parallel from cross cousins?",
        options: ["Eskimo", "Hawaiian", "Iroquois", "Sudanese"],
        correctAnswer: 2,
        explanation: "The Iroquois system distinguishes parallel cousins from cross cousins.",
        module: 3
      },
      {
        id: 18,
        question: "What is the most common residence pattern globally?",
        options: ["Matrilocal", "Patrilocal", "Neolocal", "Avunculocal"],
        correctAnswer: 1,
        explanation: "Patrilocal residence occurs in approximately 69% of societies worldwide.",
        module: 3
      },
      {
        id: 19,
        question: "Which type of reciprocity involves giving without expectation of immediate return?",
        options: ["Balanced", "Generalized", "Negative", "Market"],
        correctAnswer: 1,
        explanation: "Generalized reciprocity involves giving without expectation of immediate return, typical within families.",
        module: 3
      },
      {
        id: 20,
        question: "What does endogamy refer to?",
        options: ["Marriage outside a group", "Marriage within a group", "Multiple marriages", "Marriage dissolution"],
        correctAnswer: 1,
        explanation: "Endogamy refers to marriage within a specific social, ethnic, or religious group.",
        module: 3
      },
      {
        id: 21,
        question: "Approximately what percentage of societies have bilateral descent systems?",
        options: ["15%", "40%", "65%", "80%"],
        correctAnswer: 1,
        explanation: "Approximately 40% of societies have bilateral descent systems tracing ancestry through both parents.",
        module: 3
      },

      // Questions from Module 4 (6 questions)
      {
        id: 22,
        question: "Who developed the substantivist position in economic anthropology?",
        options: ["Bronisław Malinowski", "Karl Polanyi", "Marcel Mauss", "Claude Lévi-Strauss"],
        correctAnswer: 1,
        explanation: "Karl Polanyi developed the substantivist position arguing economies are embedded in social institutions.",
        module: 4
      },
      {
        id: 23,
        question: "What is the Kula Ring?",
        options: ["A fishing technique", "A ceremonial exchange circuit", "A farming method", "A housing structure"],
        correctAnswer: 1,
        explanation: "The Kula Ring is a ceremonial exchange system in Melanesia establishing political alliances.",
        module: 4
      },
      {
        id: 24,
        question: "Which production system involves direct appropriation from nature?",
        options: ["Horticulture", "Pastoralism", "Foraging", "Agriculture"],
        correctAnswer: 2,
        explanation: "Foraging involves direct appropriation of wild plants and animals from nature.",
        module: 4
      },
      {
        id: 25,
        question: "What percentage of forager societies have egalitarian social structures?",
        options: ["Approximately 25%", "About 50%", "Nearly 75%", "Almost all"],
        correctAnswer: 3,
        explanation: "Almost all foraging societies have relatively egalitarian social structures with minimal hierarchy.",
        module: 4
      },
      {
        id: 26,
        question: "What does 'use value' refer to?",
        options: ["Market price", "Utility of an object for its user", "Exchange rate", "Investment potential"],
        correctAnswer: 1,
        explanation: "Use value refers to the utility or usefulness of an object for the person who uses it.",
        module: 4
      },
      {
        id: 27,
        question: "What percentage of the global economy is estimated to be informal?",
        options: ["10-20%", "25-35%", "40-50%", "Over 60%"],
        correctAnswer: 1,
        explanation: "Approximately 25-35% of the global economy is estimated to be in the informal sector.",
        module: 4
      },

      // Questions from Module 5 (7 questions)
      {
        id: 28,
        question: "Who developed the concept of hegemony in political theory?",
        options: ["Max Weber", "Antonio Gramsci", "Michel Foucault", "Karl Marx"],
        correctAnswer: 1,
        explanation: "Antonio Gramsci developed the concept of hegemony - dominance through cultural consent.",
        module: 5
      },
      {
        id: 29,
        question: "What type of political system characterizes bands?",
        options: ["Centralized chiefdoms", "Acephalous egalitarian", "Bureaucratic states", "Democratic republics"],
        correctAnswer: 1,
        explanation: "Bands have acephalous political systems with egalitarian decision-making.",
        module: 5
      },
      {
        id: 30,
        question: "What percentage of foraging societies have formal leadership positions?",
        options: ["Almost all", "About half", "Less than 25%", "None"],
        correctAnswer: 2,
        explanation: "Less than 25% of foraging societies have formal, hereditary leadership positions.",
        module: 5
      },
      {
        id: 31,
        question: "Who coined the term 'imagined communities' to describe nations?",
        options: ["Ernest Gellner", "Benedict Anderson", "Eric Hobsbawm", "Clifford Geertz"],
        correctAnswer: 1,
        explanation: "Benedict Anderson coined 'imagined communities' to describe nations as socially constructed.",
        module: 5
      },
      {
        id: 32,
        question: "What does legal pluralism refer to?",
        options: ["Multiple languages in court", "Coexistence of different legal systems", "Many lawyers in a case", "Complex legislation"],
        correctAnswer: 1,
        explanation: "Legal pluralism refers to coexistence of multiple legal systems within the same social field.",
        module: 5
      },
      {
        id: 33,
        question: "What percentage of traditional societies have chiefly political systems?",
        options: ["10-20%", "30-40%", "50-60%", "70-80%"],
        correctAnswer: 1,
        explanation: "Approximately 30-40% of traditional societies have chiefly political systems.",
        module: 5
      },
      {
        id: 34,
        question: "What does structural violence refer to?",
        options: ["Physical assault", "Social arrangements that harm individuals", "Warfare", "Political repression"],
        correctAnswer: 1,
        explanation: "Structural violence refers to social arrangements that systematically harm individuals.",
        module: 5
      },

      // Questions from Module 6 (6 questions)
      {
        id: 35,
        question: "What is the primary ethical principle in applied anthropology?",
        options: ["Maximize profit", "Do no harm", "Complete objectivity", "Rapid results"],
        correctAnswer: 1,
        explanation: "'Do no harm' is the primary ethical obligation in applied anthropology.",
        module: 6
      },
      {
        id: 36,
        question: "Which methodological approach involves community members as co-researchers?",
        options: ["Experimental research", "Participatory action research", "Survey research", "Laboratory research"],
        correctAnswer: 1,
        explanation: "Participatory action research involves community members as active co-researchers.",
        module: 6
      },
      {
        id: 37,
        question: "What percentage of anthropologists work in applied settings today?",
        options: ["Less than 25%", "Approximately 50%", "About 75%", "Nearly all"],
        correctAnswer: 1,
        explanation: "Approximately 50% of anthropology PhDs work in applied settings outside academia.",
        module: 6
      },
      {
        id: 38,
        question: "Which application area focuses on culturally appropriate health interventions?",
        options: ["Development anthropology", "Medical anthropology", "Business anthropology", "Educational anthropology"],
        correctAnswer: 1,
        explanation: "Medical anthropology applies insights to develop culturally appropriate health interventions.",
        module: 6
      },
      {
        id: 39,
        question: "What does cultural brokerage involve?",
        options: ["Financial transactions", "Facilitating cross-cultural communication", "Art sales", "Travel arrangements"],
        correctAnswer: 1,
        explanation: "Cultural brokerage involves facilitating communication across cultural boundaries.",
        module: 6
      },
      {
        id: 40,
        question: "Which historical period saw anthropologists working on national character studies?",
        options: ["19th century", "World War II era", "1960s", "1990s"],
        correctAnswer: 1,
        explanation: "During World War II, anthropologists contributed to national character studies.",
        module: 6
      }
    ]
  }
};

export default culturalAnthropologyDiplomaCourse;
