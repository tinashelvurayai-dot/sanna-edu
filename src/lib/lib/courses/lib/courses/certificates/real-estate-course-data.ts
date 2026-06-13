// real-estate-certificate.ts
export const realEstateCertificate = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "real-estate-certificate",
  title: "Real Estate (Certificate)",
  description: "Foundational course covering real estate principles, property ownership, contracts, financing, and basic transaction processes for entry-level real estate knowledge.",
  duration: "8 weeks",
  timeCommitment: "5-6 hours per week",
  price: 12,
  upgradePrice: 18,
  icon: "🏠",
  badge: "Certificate",
  modulesCompleted: 0,
  totalModules: 6,

  // 2. MODULE ARCHITECTURE
  modules: [
    {
      id: 1,
      title: "Introduction to Real Estate Fundamentals",
      content: `
# Module 1: Introduction to Real Estate Fundamentals

**Welcome to the world of real estate!** This first module introduces you to the basic concepts, terminology, and principles that form the foundation of real estate knowledge.

## What is Real Estate?

Real estate refers to property consisting of land and the buildings on it, along with its natural resources. Unlike personal property (which is movable), real estate is immovable.

**Key characteristics of real estate:**
- **Immobility:** Land cannot be moved
- **Indestructibility:** Land is permanent
- **Uniqueness:** No two properties are exactly alike
- **Location:** The most important factor in value

## Types of Real Property

Understanding different property types is essential:

**Residential Property:**
- Single-family homes
- Multi-family homes (duplexes, triplexes)
- Condominiums and townhouses
- Apartment buildings
- Mobile homes on owned land

**Commercial Property:**
- Office buildings and spaces
- Retail stores and shopping centers
- Hotels and motels
- Restaurants
- Mixed-use properties

**Industrial Property:**
- Factories and manufacturing plants
- Warehouses and distribution centers
- Research and development facilities
- Industrial parks

**Special Purpose Property:**
- Schools and churches
- Government buildings
- Theaters and stadiums
- Agricultural land

## Real Estate Professionals

Various professionals work in real estate:

**Agents and Brokers:**
- **Real Estate Agent:** Licensed to help buy/sell properties
- **Broker:** Additional training, can own a brokerage
- **Realtor®:** Member of National Association of Realtors, follows code of ethics

**Other Key Professionals:**
- **Appraisers:** Determine property value
- **Inspectors:** Examine property condition
- **Lenders:** Provide financing
- **Title Companies:** Ensure clear ownership
- **Escrow Officers:** Handle transaction funds

## Basic Real Estate Concepts

Foundational terms you need to know:

**Property Rights Bundle:**
Think of property ownership as a bundle of sticks, each representing a right:
- Right to possess (live in or use)
- Right to control (decide how to use)
- Right to enjoy (use without interference)
- Right to exclude (keep others out)
- Right to dispose (sell or transfer)

**Land vs. Real Estate vs. Real Property:**
- **Land:** Earth's surface, subsurface, and air above
- **Real Estate:** Land plus man-made improvements
- **Real Property:** Real estate plus bundle of rights

**Fixtures vs. Personal Property:**
- **Fixtures:** Items permanently attached to property (included in sale)
- **Personal Property:** Movable items not attached (usually not included)
- **Test for fixtures:** Method of attachment, adaptation to property, intention of parties

## The Real Estate Market

Understanding how real estate markets work:

**Supply and Demand Factors:**
- **Supply:** Number of properties available
- **Demand:** Number of buyers seeking properties
- **Market equilibrium:** When supply equals demand

**Market Cycles:**
- **Seller's Market:** More buyers than properties
- **Buyer's Market:** More properties than buyers
- **Balanced Market:** Equal numbers of buyers and sellers

**Factors Affecting Market:**
- Interest rates and financing availability
- Economic conditions and employment
- Population growth and demographics
- Government policies and regulations

## Importance of Location

The three most important factors in real estate: Location, location, location!

**Location Considerations:**
- Neighborhood quality and reputation
- Proximity to schools, shopping, work
- Transportation access and commute times
- Future development plans in area
- Natural features and views

**Site vs. Situation:**
- **Site:** Physical characteristics of the property itself
- **Situation:** Relationship of property to surrounding area

## Basic Real Estate Math

Essential calculations for real estate:

**Area Calculations:**
- Square footage = Length × Width
- Acre = 43,560 square feet
- Converting between measurement systems

**Simple Formulas:**
- Commission = Sales price × Commission rate
- Profit = Selling price - Purchase price
- Equity = Property value - Mortgage balance

**Percentage Calculations:**
- Finding percentages of numbers
- Calculating percentage increases/decreases
- Understanding commission splits

## Ethical Foundations

Starting with proper ethics:

**Basic Ethical Principles:**
- Honesty in all dealings
- Fair treatment of all parties
- Confidentiality of client information
- Disclosure of material facts
- Compliance with laws and regulations

**Common Ethical Issues:**
- Conflicts of interest
- Misrepresentation of property
- Discrimination concerns
- Handling of client funds
- Advertising truthfulness

## Getting Started in Real Estate

Beginning your real estate journey:

**First Steps:**
- Complete required pre-licensing education
- Pass state licensing exam
- Join a brokerage firm
- Continue with ongoing education
- Build professional network

**Career Paths:**
- Residential sales specialist
- Commercial real estate agent
- Property management
- Real estate investing
- Related fields (appraisal, lending, etc.)

Remember: Real estate is both a science (with rules and calculations) and an art (with relationships and negotiation). This foundation will prepare you for more detailed learning ahead.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are the three most important factors in real estate?",
          options: ["Price, size, age", "Location, location, location", "Style, color, design", "Rooms, bathrooms, garage"],
          correctAnswer: 1,
          explanation: "Location is considered the most important factor in real estate value and desirability."
        },
        {
          id: 2,
          question: "What is the main characteristic that distinguishes real estate from personal property?",
          options: ["Value", "Size", "Immobility", "Color"],
          correctAnswer: 2,
          explanation: "Real estate is immovable (land and attached structures), while personal property can be moved."
        },
        {
          id: 3,
          question: "What type of property includes single-family homes and condominiums?",
          options: ["Commercial", "Industrial", "Residential", "Agricultural"],
          correctAnswer: 2,
          explanation: "Residential property includes homes where people live."
        },
        {
          id: 4,
          question: "What is a Realtor®?",
          options: ["Any real estate agent", "Member of National Association of Realtors", "Property owner", "Bank lender"],
          correctAnswer: 1,
          explanation: "A Realtor® is a real estate professional who belongs to the National Association of Realtors and follows its code of ethics."
        },
        {
          id: 5,
          question: "What does the 'bundle of rights' concept refer to?",
          options: ["Mortgage documents", "Various ownership rights", "Rental agreements", "Insurance policies"],
          correctAnswer: 1,
          explanation: "The bundle of rights includes various ownership rights like possession, control, enjoyment, exclusion, and disposal."
        },
        {
          id: 6,
          question: "What is the difference between land and real estate?",
          options: ["Land includes buildings, real estate does not", "Real estate includes improvements, land does not", "They mean the same thing", "Land is more valuable"],
          correctAnswer: 1,
          explanation: "Real estate includes land plus any man-made improvements like buildings and structures."
        },
        {
          id: 7,
          question: "What market condition has more buyers than properties available?",
          options: ["Buyer's market", "Seller's market", "Balanced market", "Stagnant market"],
          correctAnswer: 1,
          explanation: "A seller's market occurs when there are more buyers than available properties, favoring sellers."
        },
        {
          id: 8,
          question: "How many square feet are in one acre?",
          options: ["10,000", "43,560", "100,000", "1,000"],
          correctAnswer: 1,
          explanation: "One acre equals 43,560 square feet."
        },
        {
          id: 9,
          question: "What professional determines property value?",
          options: ["Real estate agent", "Appraiser", "Home inspector", "Escrow officer"],
          correctAnswer: 1,
          explanation: "Appraisers are trained professionals who determine property values."
        },
        {
          id: 10,
          question: "What is a fixture?",
          options: ["Movable furniture", "Item permanently attached to property", "Temporary decoration", "Real estate agent"],
          correctAnswer: 1,
          explanation: "Fixtures are items permanently attached to property and typically included in sales."
        },
        {
          id: 11,
          question: "What does 'site' refer to in real estate?",
          options: ["Website for listing", "Physical characteristics of property", "Social gathering place", "Construction location"],
          correctAnswer: 1,
          explanation: "Site refers to the physical characteristics of the property itself."
        },
        {
          id: 12,
          question: "What type of property includes office buildings?",
          options: ["Residential", "Commercial", "Industrial", "Agricultural"],
          correctAnswer: 1,
          explanation: "Commercial property includes buildings used for business purposes like offices."
        },
        {
          id: 13,
          question: "What calculation finds square footage?",
          options: ["Length + Width", "Length × Width", "Value × Rate", "Price ÷ Size"],
          correctAnswer: 1,
          explanation: "Square footage is calculated by multiplying length by width."
        },
        {
          id: 14,
          question: "What ethical principle requires revealing important facts?",
          options: ["Confidentiality", "Disclosure", "Competition", "Negotiation"],
          correctAnswer: 1,
          explanation: "Disclosure requires revealing material facts that could affect a transaction."
        },
        {
          id: 15,
          question: "What is personal property?",
          options: ["Land and buildings", "Movable items not attached", "Permanent structures", "Real estate rights"],
          correctAnswer: 1,
          explanation: "Personal property consists of movable items not permanently attached to real estate."
        },
        {
          id: 16,
          question: "Who handles transaction funds in escrow?",
          options: ["Real estate agent", "Escrow officer", "Home buyer", "Mortgage broker"],
          correctAnswer: 1,
          explanation: "Escrow officers manage and protect funds during real estate transactions."
        },
        {
          id: 17,
          question: "What is equity?",
          options: ["Mortgage payment", "Property value minus mortgage balance", "Commission amount", "Down payment"],
          correctAnswer: 1,
          explanation: "Equity represents the owner's financial interest in a property (value minus debt)."
        },
        {
          id: 18,
          question: "What market has equal numbers of buyers and sellers?",
          options: ["Seller's market", "Buyer's market", "Balanced market", "Hot market"],
          correctAnswer: 2,
          explanation: "A balanced market has approximately equal numbers of buyers and sellers."
        },
        {
          id: 19,
          question: "What does 'situation' refer to?",
          options: ["Property's relationship to surroundings", "Current market conditions", "Personal circumstances", "Legal standing"],
          correctAnswer: 0,
          explanation: "Situation refers to how a property relates to its surrounding area and features."
        },
        {
          id: 20,
          question: "What is the first step to become a real estate agent?",
          options: ["Buy property", "Complete pre-licensing education", "Join brokerage", "Pass background check"],
          correctAnswer: 1,
          explanation: "Pre-licensing education is typically the first requirement to become a real estate agent."
        }
      ]
    },
    {
      id: 2,
      title: "Property Ownership and Interests",
      content: `
# Module 2: Property Ownership and Interests

**Understanding ownership is crucial in real estate.** This module explores different ways property can be owned, the rights associated with ownership, and various property interests.

## Forms of Property Ownership

How title can be held determines rights and responsibilities:

**Sole Ownership (Severalty):**
- One person or entity owns property alone
- Complete control over property
- Simple estate planning
- Common for single individuals

**Co-Ownership (Concurrent Estates):**
Multiple owners share property:
- **Tenancy in Common:** Each owns undivided interest, can sell or will separately
- **Joint Tenancy:** Equal shares with right of survivorship
- **Tenancy by the Entirety:** Married couples only, right of survivorship
- **Community Property:** In some states, property acquired during marriage

**Key Differences:**
- **Right of Survivorship:** Property passes to surviving owners automatically
- **Unity Requirements:** Joint tenancy requires time, title, interest, possession
- **Termination:** How ownership interests can be ended

## Freehold vs. Leasehold Estates

Understanding different possession interests:

**Freehold Estates:**
Ownership interests of uncertain duration:
- **Fee Simple Absolute:** Most complete ownership, indefinite duration
- **Fee Simple Defeasible:** Ownership with conditions or limitations
- **Life Estate:** Lasts for someone's lifetime

**Leasehold Estates:**
Temporary possession rights:
- **Estate for Years:** Specific start and end date
- **Periodic Tenancy:** Renews automatically (month-to-month)
- **Tenancy at Will:** No specific term, can end anytime
- **Tenancy at Sufferance:** Remaining after right has ended

## Government Powers Over Property

Even owners must respect government authority:

**Four Government Powers:**
- **Police Power:** Regulations for public health, safety, welfare
- **Eminent Domain:** Taking private property for public use (with compensation)
- **Taxation:** Right to tax property
- **Escheat:** Property reverts to state if owner dies without heirs

**Zoning Regulations:**
- Divide areas into zones (residential, commercial, industrial)
- Control land use and development
- Set building requirements (setbacks, height limits)
- Can be changed through variance or rezoning

## Deeds and Title Transfer

Legal documents that transfer ownership:

**Essential Deed Elements:**
- Grantor (seller) and Grantee (buyer) names
- Consideration (value exchanged)
- Legal description of property
- Granting clause transferring ownership
- Grantor's signature
- Delivery and acceptance

**Types of Deeds:**
- **General Warranty Deed:** Maximum protection, guarantees title against all claims
- **Special Warranty Deed:** Guarantees only against claims during seller's ownership
- **Quitclaim Deed:** No warranties, transfers whatever interest grantor has
- **Bargain and Sale Deed:** Implies ownership but no warranties

## Legal Descriptions

Precisely identifying property location:

**Three Main Methods:**
- **Metes and Bounds:** Uses distances and directions from starting point
- **Rectangular Survey (Government Survey):** Uses base lines, meridians, townships, sections
- **Lot and Block (Plat):** Reference to recorded subdivision map

**Understanding Legal Descriptions:**
- Must be sufficient to identify property uniquely
- Permanent references (not street addresses)
- Used in deeds, mortgages, and legal documents
- Essential for title searches and surveys

## Title and Ownership Issues

Ensuring clear property ownership:

**Title vs. Deed:**
- **Title:** Ownership rights themselves
- **Deed:** Document that transfers title

**Chain of Title:**
- History of property ownership transfers
- Must be continuous and unbroken
- Title search examines chain

**Clouds on Title:**
- Any claim or encumbrance affecting ownership
- Must be cleared before sale
- Examples: liens, easements, boundary disputes

**Title Insurance:**
- Protects against title defects
- Lender's policy (protects lender)
- Owner's policy (protects buyer)
- One-time premium at closing

## Encumbrances and Liens

Claims against property that affect ownership:

**Encumbrances:**
Any right or interest that burdens property:
- **Easements:** Right to use another's land for specific purpose
- **Encroachments:** Physical intrusion onto another's property
- **Restrictive Covenants:** Private land use restrictions
- **Liens:** Financial claims against property

**Types of Liens:**
- **Voluntary:** Mortgage lien (agreed to by owner)
- **Involuntary:** Tax lien, mechanic's lien, judgment lien
- **Priority:** Order liens are paid (usually first recorded, first paid)

**Mechanic's Liens:**
- Protect contractors and suppliers
- Must follow specific procedures
- Can force property sale to satisfy debt

## Easements and Rights of Way

Non-possessory interests in property:

**Types of Easements:**
- **Easement Appurtenant:** Benefits adjacent property (runs with land)
- **Easement in Gross:** Benefits person or company (utility easements)
- **Prescriptive Easement:** Acquired through long-term use
- **Easement by Necessity:** Required for access

**Creating and Terminating Easements:**
- **Creation:** Express grant, implication, prescription, necessity
- **Termination:** Release, merger, abandonment, end of necessity
- **Recording:** Should be recorded to provide notice

## Water and Mineral Rights

Special property interests:

**Water Rights Systems:**
- **Riparian Rights:** Owners of land bordering water
- **Littoral Rights:** Owners of land bordering lakes or oceans
- **Prior Appropriation:** "First in time, first in right" (Western states)

**Mineral Rights:**
- Ownership of subsurface minerals
- Can be separated from surface rights
- Important in oil, gas, and mining areas
- Royalty payments for extraction

## Condominiums and Cooperatives

Special ownership arrangements:

**Condominium Ownership:**
- Own individual unit plus share of common areas
- Pay monthly fees for maintenance
- Governed by homeowners association (HOA)
- Can be financed individually

**Cooperative (Co-op) Ownership:**
- Own shares in corporation that owns building
- Lease unit from corporation
- Approval process for new owners
- Financing can be more complex

**Timeshares:**
- Right to use property for specific time each year
- Various ownership structures
- Resale market challenges

Remember: Clear understanding of ownership rights and interests is essential for proper property transactions and avoiding legal issues.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is sole ownership of property called?",
          options: ["Joint tenancy", "Tenancy in common", "Severalty", "Community property"],
          correctAnswer: 2,
          explanation: "Severalty refers to property owned by one person or entity alone."
        },
        {
          id: 2,
          question: "Which co-ownership includes right of survivorship?",
          options: ["Tenancy in common only", "Joint tenancy", "Severalty", "Partition"],
          correctAnswer: 1,
          explanation: "Joint tenancy includes right of survivorship, where property passes to surviving owners."
        },
        {
          id: 3,
          question: "What is the most complete form of ownership?",
          options: ["Life estate", "Fee simple absolute", "Leasehold", "Easement"],
          correctAnswer: 1,
          explanation: "Fee simple absolute provides the most complete ownership rights possible."
        },
        {
          id: 4,
          question: "What government power allows property taking for public use?",
          options: ["Police power", "Eminent domain", "Taxation", "Escheat"],
          correctAnswer: 1,
          explanation: "Eminent domain allows government to take private property for public use with compensation."
        },
        {
          id: 5,
          question: "Which deed provides the most protection to buyer?",
          options: ["Quitclaim deed", "Special warranty deed", "General warranty deed", "Bargain and sale deed"],
          correctAnswer: 2,
          explanation: "General warranty deed guarantees title against all claims, providing maximum protection."
        },
        {
          id: 6,
          question: "What legal description uses distances and directions?",
          options: ["Lot and block", "Metes and bounds", "Rectangular survey", "Plat system"],
          correctAnswer: 1,
          explanation: "Metes and bounds uses measured distances and compass directions from a starting point."
        },
        {
          id: 7,
          question: "What protects against title defects?",
          options: ["Home warranty", "Title insurance", "Property survey", "Home inspection"],
          correctAnswer: 1,
          explanation: "Title insurance protects against losses from title defects or claims."
        },
        {
          id: 8,
          question: "What is a voluntary lien?",
          options: ["Tax lien", "Mortgage lien", "Mechanic's lien", "Judgment lien"],
          correctAnswer: 1,
          explanation: "A mortgage lien is voluntary because the property owner agrees to it when obtaining financing."
        },
        {
          id: 9,
          question: "What type of easement benefits adjacent property?",
          options: ["Easement in gross", "Easement appurtenant", "Prescriptive easement", "Utility easement"],
          correctAnswer: 1,
          explanation: "Easement appurtenant benefits an adjacent property and runs with the land."
        },
        {
          id: 10,
          question: "In condominium ownership, what do owners share?",
          options: ["Nothing", "Only their unit", "Common areas", "Building corporation"],
          correctAnswer: 2,
          explanation: "Condominium owners own their individual units plus a share of common areas."
        },
        {
          id: 11,
          question: "What are the four unities required for joint tenancy?",
          options: ["Time, title, interest, possession", "Money, property, deed, title", "Buyer, seller, agent, lender", "Land, buildings, rights, value"],
          correctAnswer: 0,
          explanation: "Joint tenancy requires unity of time, title, interest, and possession."
        },
        {
          id: 12,
          question: "What is a life estate?",
          options: ["Ownership for life of someone", "30-year ownership", "Temporary rental", "Commercial lease"],
          correctAnswer: 0,
          explanation: "A life estate lasts for the lifetime of a specified person."
        },
        {
          id: 13,
          question: "What power allows zoning regulations?",
          options: ["Eminent domain", "Police power", "Taxation", "Escheat"],
          correctAnswer: 1,
          explanation: "Police power allows governments to create zoning regulations for public welfare."
        },
        {
          id: 14,
          question: "What type of deed gives no warranties?",
          options: ["General warranty deed", "Special warranty deed", "Quitclaim deed", "Grant deed"],
          correctAnswer: 2,
          explanation: "A quitclaim deed transfers whatever interest the grantor has but provides no warranties."
        },
        {
          id: 15,
          question: "What legal description uses townships and sections?",
          options: ["Metes and bounds", "Rectangular survey", "Lot and block", "Plat method"],
          correctAnswer: 1,
          explanation: "Rectangular survey system uses base lines, meridians, townships, and sections."
        },
        {
          id: 16,
          question: "What is a cloud on title?",
          options: ["Weather issue", "Claim affecting ownership", "Dark house", "Property defect"],
          correctAnswer: 1,
          explanation: "A cloud on title is any claim or encumbrance that affects property ownership."
        },
        {
          id: 17,
          question: "What type of lien protects contractors?",
          options: ["Mortgage lien", "Tax lien", "Mechanic's lien", "Judgment lien"],
          correctAnswer: 2,
          explanation: "Mechanic's liens protect contractors and suppliers who provide labor or materials."
        },
        {
          id: 18,
          question: "What easement is acquired through long-term use?",
          options: ["Easement by necessity", "Prescriptive easement", "Easement appurtenant", "Utility easement"],
          correctAnswer: 1,
          explanation: "Prescriptive easements are acquired through open, continuous use over time."
        },
        {
          id: 19,
          question: "What do cooperative owners actually own?",
          options: ["Individual unit", "Shares in a corporation", "Land only", "Building exterior"],
          correctAnswer: 1,
          explanation: "Cooperative owners own shares in a corporation that owns the building."
        },
        {
          id: 20,
          question: "What are riparian rights?",
          options: ["Mining rights", "Water rights for bordering landowners", "Air rights", "Solar rights"],
          correctAnswer: 1,
          explanation: "Riparian rights belong to owners of land bordering flowing water like rivers or streams."
        }
      ]
    },
    {
      id: 3,
      title: "Real Estate Contracts and Agency",
      content: `
# Module 3: Real Estate Contracts and Agency

**Contracts and agency relationships form the legal backbone of real estate transactions.** This module covers contract essentials, agency relationships, and listing agreements.

## Essential Elements of a Valid Contract

All valid real estate contracts must contain these elements:

**Offer and Acceptance:**
- Clear offer made by one party
- Unconditional acceptance by other party
- "Meeting of the minds" on essential terms
- Must be communicated between parties

**Consideration:**
- Something of value exchanged
- Can be money, property, services, or promise
- Need not be adequate, just legally sufficient
- Distinguishes contracts from gifts

**Legal Capacity:**
- Parties must be legally competent
- Adults of sound mind
- Not under influence of drugs/alcohol
- Special rules for minors and mentally incapacitated

**Lawful Purpose:**
- Contract must be for legal activity
- Cannot violate laws or public policy
- Illegal contracts are void

**Consent:**
- Agreement must be voluntary
- Free from fraud, duress, undue influence
- Mutual mistake may void contract

**Writing Requirement (Statute of Frauds):**
- Real estate contracts must be in writing
- Must contain essential terms
- Signed by party to be charged
- Exceptions for leases under one year

## Types of Real Estate Contracts

Different contracts for different purposes:

**Purchase Agreement:**
- Also called sales contract or earnest money contract
- Agrees to buy and sell property
- Contains all transaction terms
- Earnest money deposit shows good faith

**Option Contract:**
- Pays for right to buy later at set price
- Optionee has right but not obligation
- Optionor must sell if option exercised
- Option money usually not refundable

**Land Contract (Contract for Deed):**
- Seller finances purchase
- Buyer makes payments to seller
- Title transfers when paid in full
- Buyer gets possession during payments

**Lease Agreement:**
- Grants possession without ownership
- Specifies terms and conditions
- Creates landlord-tenant relationship
- Can be residential or commercial

**Listing Agreement:**
- Between seller and real estate broker
- Authorizes broker to find buyer
- Specifies commission and terms
- Different types of listings

## Agency Relationships

Understanding who represents whom:

**Creating Agency:**
- Agreement between principal and agent
- Can be express, implied, or ratified
- Must be in writing for real estate services
- Agent owes fiduciary duties to principal

**Types of Agency:**
- **Seller's Agent:** Represents seller
- **Buyer's Agent:** Represents buyer
- **Dual Agent:** Represents both parties (with consent)
- **Designated Agent:** Different agents in same brokerage represent different parties
- **Non-Agency:** Transaction brokerage, no fiduciary relationship

**Fiduciary Duties (OLD CAR):**
- **Obedience:** Follow lawful instructions
- **Loyalty:** Put client's interests first
- **Disclosure:** Reveal all material facts
- **Confidentiality:** Protect client information
- **Accounting:** Handle funds properly
- **Reasonable Care:** Use skill and diligence

## Listing Agreements

Contracts between sellers and brokers:

**Types of Listings:**
- **Exclusive Right to Sell:** Broker gets commission regardless of who sells
- **Exclusive Agency:** Broker gets commission unless owner sells themselves
- **Open Listing:** Multiple brokers, commission to who produces buyer
- **Net Listing:** Broker keeps amount over specified price (risky, often prohibited)

**Listing Agreement Contents:**
- Property description and price
- Commission rate and payment terms
- Listing period (start and end dates)
- Broker's duties and authority
- Protection period (after listing ends)
- Handling of earnest money

**Terminating Listings:**
- Expiration of term
- Completion of purpose (sale)
- Mutual agreement
- Breach of contract
- Death or incapacity of party
- Destruction of property

## Purchase Agreements

Key components of sales contracts:

**Essential Terms:**
- Parties' names and property description
- Purchase price and financing terms
- Earnest money amount and handling
- Closing date and possession date
- Contingencies and conditions
- Representations and disclosures

**Common Contingencies:**
- **Financing:** Buyer must obtain loan
- **Inspection:** Satisfactory property inspection
- **Appraisal:** Property must appraise for purchase price
- **Sale of Buyer's Home:** Must sell current home first
- **Title Review:** Clear title must be provided

**Earnest Money:**
- Shows buyer's serious intent
- Held in escrow by neutral third party
- Applied to purchase price at closing
- May be forfeited if buyer defaults
- Returned if contingencies not met

## Disclosure Requirements

Legal obligations to reveal information:

**Material Facts:**
- Information affecting value or desirability
- Known defects or problems
- Must be disclosed by those with knowledge
- Includes property condition, zoning, environmental issues

**Common Required Disclosures:**
- Lead-based paint (for homes built before 1978)
- Property condition disclosures
- Megan's Law (sex offender registry)
- Natural hazard disclosures
- Death on property (in some states)
- Homeowners association information

**Agent's Disclosure Duties:**
- Disclose agency relationships
- Reveal material facts known
- Present all offers promptly
- Avoid misrepresentation
- Maintain confidentiality appropriately

## Breach of Contract and Remedies

When contracts go wrong:

**Types of Breach:**
- **Material Breach:** Significant failure to perform
- **Minor Breach:** Less significant failure
- **Anticipatory Breach:** Indication won't perform

**Legal Remedies:**
- **Specific Performance:** Court orders contract completion
- **Damages:** Monetary compensation
- **Rescission:** Cancel contract, return to pre-contract position
- **Liquidated Damages:** Pre-agreed damage amount

**Earnest Money Disputes:**
- Who gets deposit if deal falls through
- Depends on contract terms and breach
- Often requires mediation or litigation
- Escrow holder follows written instructions

## Electronic Contracts and Signatures

Modern contract methods:

**E-Signature Laws:**
- Electronic signatures generally valid
- Must show intent to sign
- Certain documents may require traditional signatures
- Records must be retained properly

**Best Practices:**
- Use secure, reliable systems
- Maintain proper records
- Ensure all parties can access documents
- Follow state-specific requirements

## Fair Housing Laws

Preventing discrimination:

**Protected Classes (Federal):**
- Race or color
- National origin
- Religion
- Sex (including gender identity and sexual orientation)
- Familial status (children under 18)
- Disability

**Prohibited Activities:**
- Refusing to sell, rent, or negotiate
- Setting different terms or conditions
- False denial of availability
- Discriminatory advertising
- Steering to or away from areas
- Blockbusting (creating fear to induce sales)

**Enforcement:**
- Department of Housing and Urban Development (HUD)
- Private lawsuits
- State and local agencies
- Penalties can include damages and fines

Remember: Proper contracts and clear agency relationships protect all parties and help ensure smooth, legal real estate transactions.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are the essential elements of a valid contract?",
          options: ["Offer, acceptance, consideration, capacity, lawful purpose", "Price, address, date, names", "Money, property, agent, buyer", "Paper, pen, signature, witness"],
          correctAnswer: 0,
          explanation: "Valid contracts require offer, acceptance, consideration, legal capacity, lawful purpose, and mutual consent."
        },
        {
          id: 2,
          question: "What must real estate contracts be according to Statute of Frauds?",
          options: ["Verbal", "In writing", "Notarized", "Witnessed by two people"],
          correctAnswer: 1,
          explanation: "Real estate contracts must be in writing to be enforceable under Statute of Frauds."
        },
        {
          id: 3,
          question: "What type of listing gives broker commission regardless of who sells?",
          options: ["Open listing", "Exclusive agency", "Exclusive right to sell", "Net listing"],
          correctAnswer: 2,
          explanation: "Exclusive right to sell listing pays commission to broker even if owner finds buyer."
        },
        {
          id: 4,
          question: "What does 'OLD CAR' stand for in fiduciary duties?",
          options: ["Office, License, Deal, Contract, Agreement, Rules", "Obedience, Loyalty, Disclosure, Confidentiality, Accounting, Reasonable care", "Offer, List, Display, Close, Accept, Report", "Own, Lease, Develop, Construct, Alter, Repair"],
          correctAnswer: 1,
          explanation: "OLD CAR helps remember fiduciary duties: Obedience, Loyalty, Disclosure, Confidentiality, Accounting, Reasonable care."
        },
        {
          id: 5,
          question: "What is earnest money?",
          options: ["Final payment", "Deposit showing buyer's good faith", "Commission advance", "Loan down payment"],
          correctAnswer: 1,
          explanation: "Earnest money is a deposit showing the buyer's serious intent to purchase."
        },
        {
          id: 6,
          question: "What is a contingency?",
          options: ["Certainty clause", "Condition that must be met", "Illegal provision", "Type of commission"],
          correctAnswer: 1,
          explanation: "A contingency is a condition that must be satisfied for the contract to proceed."
        },
        {
          id: 7,
          question: "What must be disclosed for homes built before 1978?",
          options: ["Asbestos", "Lead-based paint", "Radon", "Mold"],
          correctAnswer: 1,
          explanation: "Federal law requires disclosure of lead-based paint hazards in homes built before 1978."
        },
        {
          id: 8,
          question: "What remedy orders contract completion?",
          options: ["Damages", "Rescission", "Specific performance", "Liquidated damages"],
          correctAnswer: 2,
          explanation: "Specific performance is a court order requiring completion of the contract."
        },
        {
          id: 9,
          question: "What is prohibited by Fair Housing laws?",
          options: ["Advertising available properties", "Discrimination based on protected classes", "Setting market prices", "Requiring credit checks"],
          correctAnswer: 1,
          explanation: "Fair Housing laws prohibit discrimination based on race, color, religion, sex, etc."
        },
        {
          id: 10,
          question: "What creates an agency relationship?",
          options: ["Buying property", "Agreement between principal and agent", "Viewing a property", "Signing a mortgage"],
          correctAnswer: 1,
          explanation: "Agency is created by agreement between principal (client) and agent (representative)."
        },
        {
          id: 11,
          question: "What is consideration in a contract?",
          options: ["Careful thought", "Something of value exchanged", "Legal advice", "Property inspection"],
          correctAnswer: 1,
          explanation: "Consideration is something of value exchanged between parties to a contract."
        },
        {
          id: 12,
          question: "What type of contract gives right but not obligation to buy?",
          options: ["Purchase agreement", "Option contract", "Land contract", "Lease agreement"],
          correctAnswer: 1,
          explanation: "An option contract gives the right to buy at a later date but not the obligation."
        },
        {
          id: 13,
          question: "What is dual agency?",
          options: ["Two agents working together", "Agent representing both buyer and seller", "Broker and agent relationship", "Buyer representing themselves"],
          correctAnswer: 1,
          explanation: "Dual agency occurs when one agent represents both buyer and seller in a transaction."
        },
        {
          id: 14,
          question: "What is a net listing?",
          options: ["Internet listing", "Broker keeps amount over set price", "No commission listing", "Fixed fee listing"],
          correctAnswer: 1,
          explanation: "A net listing lets the broker keep any amount over a set price, which can create conflicts."
        },
        {
          id: 15,
          question: "What is a common financing contingency?",
          options: ["Buyer must obtain loan", "Seller must repair roof", "Property must be painted", "Buyer must sell current home"],
          correctAnswer: 0,
          explanation: "A financing contingency allows buyer to cancel if they cannot obtain a mortgage."
        },
        {
          id: 16,
          question: "What are material facts?",
          options: ["Information affecting value or desirability", "Construction materials used", "Legal documents", "Real estate math"],
          correctAnswer: 0,
          explanation: "Material facts are information that could affect property value or a buyer's decision."
        },
        {
          id: 17,
          question: "What remedy cancels a contract?",
          options: ["Specific performance", "Rescission", "Damages", "Mediation"],
          correctAnswer: 1,
          explanation: "Rescission cancels the contract and returns parties to their pre-contract positions."
        },
        {
          id: 18,
          question: "What is steering?",
          options: ["Driving clients to properties", "Guiding through process", "Discriminatory directing to/from areas", "Navigation assistance"],
          correctAnswer: 2,
          explanation: "Steering is illegally directing people toward or away from areas based on protected characteristics."
        },
        {
          id: 19,
          question: "Who typically holds earnest money?",
          options: ["Buyer", "Seller", "Escrow holder", "Real estate agent"],
          correctAnswer: 2,
          explanation: "Earnest money is typically held in escrow by a neutral third party."
        },
        {
          id: 20,
          question: "What is familial status protection?",
          options: ["Protection for families with children under 18", "Marital status", "Family business ownership", "Inheritance rights"],
          correctAnswer: 0,
          explanation: "Familial status protects families with children under 18 from housing discrimination."
        }
      ]
    },
    {
      id: 4,
      title: "Real Estate Financing Basics",
      content: `
# Module 4: Real Estate Financing Basics

**Financing makes property ownership possible for most buyers.** This module covers mortgage fundamentals, loan types, and the financing process.

## Mortgage Fundamentals

Understanding the basic concepts:

**What is a Mortgage?**
- Loan using real estate as collateral
- Borrower (mortgagor) gives lender (mortgagee) security interest
- Promissory note is the promise to repay
- Mortgage or deed of trust is the security document

**Key Mortgage Terms:**
- **Principal:** Amount borrowed
- **Interest:** Cost of borrowing money
- **Term:** Length of loan (15, 20, 30 years)
- **Amortization:** Gradual repayment of loan
- **Equity:** Owner's financial interest (value minus debt)

**Types of Mortgage Instruments:**
- **Mortgage:** Two-party document (borrower and lender)
- **Deed of Trust:** Three-party (borrower, lender, trustee)
- **Security Deed:** Used in some states instead of mortgage

## Loan Types and Programs

Different financing options for different needs:

**Conventional Loans:**
- Not government insured or guaranteed
- Typically require 5-20% down payment
- Private mortgage insurance (PMI) if less than 20% down
- Fixed or adjustable rates available

**Government-Backed Loans:**
- **FHA Loans:** Federal Housing Administration insured
- **VA Loans:** Department of Veterans Affairs guaranteed
- **USDA Loans:** Department of Agriculture rural housing
- Lower down payments, more flexible qualifications

**Fixed vs. Adjustable Rate Mortgages:**
- **Fixed Rate:** Interest rate stays same for loan term
- **Adjustable Rate (ARM):** Rate changes periodically based on index
- **Hybrid ARMs:** Fixed period then adjusts (e.g., 5/1 ARM)

## The Loan Application Process

Steps to obtain mortgage financing:

**Pre-Qualification vs. Pre-Approval:**
- **Pre-Qualification:** Preliminary estimate based on basic information
- **Pre-Approval:** More thorough review with documentation
- Pre-approval strengthens buyer's position

**Loan Application (1003 Form):**
- Complete financial information
- Employment and income details
- Assets and liabilities
- Property information
- Required documentation

**Underwriting Process:**
- Lender evaluates risk
- Verifies information
- Appraisal ordered
- Title search conducted
- Decision: Approve, deny, or conditions

**The Three C's of Credit:**
- **Character:** Willingness to repay (credit history)
- **Capacity:** Ability to repay (income vs. debts)
- **Collateral:** Property value securing loan

## Mortgage Payments and Calculations

Understanding how payments work:

**PITI Payments:**
- **Principal:** Reduces loan balance
- **Interest:** Cost of borrowing
- **Taxes:** Property taxes (escrowed)
- **Insurance:** Homeowners insurance (escrowed)
- **PMI:** Private mortgage insurance if applicable

**Amortization:**
- Monthly payments divided between principal and interest
- Early payments mostly interest
- Later payments mostly principal
- Amortization schedule shows breakdown

**Simple Mortgage Math:**
- Monthly payment calculation basics
- Understanding interest rates
- Loan-to-value ratio (LTV)
- Debt-to-income ratio (DTI)

## Qualifying for a Mortgage

What lenders look for:

**Credit Score Importance:**
- FICO scores range 300-850
- Higher scores get better rates
- Minimum scores vary by loan type
- Factors: payment history, amounts owed, length of credit, new credit, credit mix

**Income Requirements:**
- Stable employment history
- Verifiable income sources
- Self-employed may need additional documentation
- Debt-to-income ratios:
  - Front-end: Housing expenses ÷ Gross income
  - Back-end: All debt payments ÷ Gross income

**Down Payment Requirements:**
- Conventional: 5-20% typically
- FHA: 3.5% minimum
- VA: 0% down (for eligible veterans)
- USDA: 0% down (in eligible areas)

## Closing Costs and Fees

Additional costs in mortgage transactions:

**Typical Closing Costs:**
- **Lender Fees:** Origination, underwriting, processing
- **Third-Party Fees:** Appraisal, credit report, survey
- **Title Fees:** Title search, insurance, settlement
- **Government Fees:** Recording, transfer taxes
- **Prepaid Items:** Interest, taxes, insurance, reserves

**Estimating Closing Costs:**
- Loan Estimate form (within 3 days of application)
- Closing Disclosure (3 days before closing)
- Typically 2-5% of purchase price
- Can sometimes be financed or paid by seller

## Special Financing Situations

Unique mortgage scenarios:

**Assumable Mortgages:**
- New buyer takes over existing loan
- Must qualify with lender
- Lower closing costs
- Can be attractive if rates have risen

**Seller Financing:**
- Seller acts as lender
- Often used when buyer can't get traditional financing
- Can be faster, more flexible
- Terms negotiated between parties

**Bridge Loans:**
- Short-term financing
- Helps "bridge" gap between transactions
- Used when buying new home before selling old one
- Higher interest rates

**Construction Loans:**
- Financing for building projects
- Funds disbursed in stages
- Convert to permanent mortgage after completion
- Higher risk for lenders

## Mortgage Insurance

Protection for lenders:

**Private Mortgage Insurance (PMI):**
- Required for conventional loans with less than 20% down
- Protects lender if borrower defaults
- Can be cancelled when LTV reaches 78%
- Monthly premium or upfront options

**Mortgage Insurance Premium (MIP):**
- FHA loan mortgage insurance
- Upfront and annual premiums
- May be required for loan term
- Different cancellation rules than PMI

**Funding Fees:**
- VA loans have funding fee instead of mortgage insurance
- Can be financed into loan
- Varies based on down payment and service category

## Truth in Lending (TILA) and RESPA

Consumer protection laws:

**Truth in Lending Act (TILA):**
- Requires disclosure of loan terms
- Annual Percentage Rate (APR) includes all costs
- Right to rescind certain loans within 3 days
- Clear explanation of costs

**Real Estate Settlement Procedures Act (RESPA):**
- Requires disclosure of settlement costs
- Prohibits kickbacks and referral fees
- Limits escrow account requirements
- Provides for uniform settlement statement

**Integrated Mortgage Disclosures:**
- Loan Estimate (replaces Good Faith Estimate and initial TIL)
- Closing Disclosure (replaces HUD-1 and final TIL)
- Must be provided within specific timeframes

## Default and Foreclosure

When payments aren't made:

**Default Process:**
- Missed payments trigger default
- Notice of default sent
- Opportunity to cure (bring current)
- Acceleration (full balance due)

**Foreclosure Types:**
- **Judicial Foreclosure:** Court-supervised process
- **Non-Judicial Foreclosure:** No court involvement (deed of trust states)
- **Strict Foreclosure:** Property reverts to lender (rare)

**Alternatives to Foreclosure:**
- **Forbearance:** Temporary payment reduction or pause
- **Modification:** Permanent loan term changes
- **Short Sale:** Sell for less than mortgage balance
- **Deed in Lieu:** Voluntarily transfer property to lender

Remember: Understanding financing options helps buyers make informed decisions and helps professionals guide clients effectively.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "Who is the mortgagor in a mortgage transaction?",
          options: ["Lender", "Borrower", "Real estate agent", "Appraiser"],
          correctAnswer: 1,
          explanation: "The mortgagor is the borrower who pledges property as security for the loan."
        },
        {
          id: 2,
          question: "What does PITI stand for in mortgage payments?",
          options: ["Principal, Interest, Taxes, Insurance", "Payment, Interest, Time, Investment", "Price, Income, Term, Insurance", "Property, Investment, Tax, Interest"],
          correctAnswer: 0,
          explanation: "PITI represents the four components of a typical mortgage payment."
        },
        {
          id: 3,
          question: "What type of loan is insured by the Federal Housing Administration?",
          options: ["Conventional loan", "FHA loan", "VA loan", "USDA loan"],
          correctAnswer: 1,
          explanation: "FHA loans are insured by the Federal Housing Administration."
        },
        {
          id: 4,
          question: "What is pre-approval?",
          options: ["Preliminary estimate", "Thorough review with documentation", "Loan denial", "Property approval"],
          correctAnswer: 1,
          explanation: "Pre-approval involves thorough review of financial documents before property selection."
        },
        {
          id: 5,
          question: "What are the three C's of credit?",
          options: ["Cost, Credit, Collateral", "Character, Capacity, Collateral", "Cash, Credit, Contract", "Capacity, Cash, Collateral"],
          correctAnswer: 1,
          explanation: "Lenders evaluate Character (willingness to pay), Capacity (ability to pay), and Collateral (property value)."
        },
        {
          id: 6,
          question: "What is amortization?",
          options: ["Loan denial", "Gradual repayment of loan", "Interest calculation", "Down payment"],
          correctAnswer: 1,
          explanation: "Amortization is the gradual repayment of a loan through regular payments."
        },
        {
          id: 7,
          question: "What does PMI stand for?",
          options: ["Primary Mortgage Insurance", "Private Mortgage Insurance", "Property Market Insurance", "Payment Monthly Insurance"],
          correctAnswer: 1,
          explanation: "PMI is Private Mortgage Insurance required for conventional loans with less than 20% down."
        },
        {
          id: 8,
          question: "What law requires disclosure of loan terms?",
          options: ["RESPA", "TILA", "Fair Housing Act", "Equal Credit Opportunity Act"],
          correctAnswer: 1,
          explanation: "Truth in Lending Act (TILA) requires disclosure of loan terms and costs."
        },
        {
          id: 9,
          question: "What is a bridge loan?",
          options: ["Loan for bridge construction", "Short-term financing between transactions", "30-year fixed mortgage", "VA loan alternative"],
          correctAnswer: 1,
          explanation: "Bridge loans provide short-term financing, often between buying new and selling old homes."
        },
        {
          id: 10,
          question: "What foreclosure type involves court supervision?",
          options: ["Non-judicial foreclosure", "Judicial foreclosure", "Strict foreclosure", "Deed in lieu"],
          correctAnswer: 1,
          explanation: "Judicial foreclosure requires court supervision and proceedings."
        },
        {
          id: 11,
          question: "What is the promissory note?",
          options: ["Property deed", "Promise to repay loan", "Listing agreement", "Purchase contract"],
          correctAnswer: 1,
          explanation: "The promissory note is the borrower's written promise to repay the loan."
        },
        {
          id: 12,
          question: "What government loan requires no down payment for eligible veterans?",
          options: ["FHA", "VA", "USDA", "Conventional"],
          correctAnswer: 1,
          explanation: "VA loans offer 0% down payment options for eligible veterans and service members."
        },
        {
          id: 13,
          question: "What form is the uniform loan application?",
          options: ["1003 form", "HUD-1", "Closing Disclosure", "Good Faith Estimate"],
          correctAnswer: 0,
          explanation: "The 1003 form is the standard uniform residential loan application."
        },
        {
          id: 14,
          question: "What ratio compares housing expenses to income?",
          options: ["Back-end ratio", "Front-end ratio", "Loan-to-value ratio", "Debt ratio"],
          correctAnswer: 1,
          explanation: "Front-end ratio compares housing expenses (PITI) to gross monthly income."
        },
        {
          id: 15,
          question: "What are typical closing costs as percentage of purchase price?",
          options: ["10-15%", "2-5%", "0.5-1%", "20-25%"],
          correctAnswer: 1,
          explanation: "Closing costs typically range from 2-5% of the purchase price."
        },
        {
          id: 16,
          question: "What is an assumable mortgage?",
          options: ["New buyer takes over existing loan", "Seller keeps mortgage", "Bank assumes property", "Government takeover"],
          correctAnswer: 0,
          explanation: "An assumable mortgage allows a new buyer to take over the existing loan terms."
        },
        {
          id: 17,
          question: "What does APR include that interest rate doesn't?",
          options: ["Only interest", "All loan costs", "Property taxes", "Homeowners insurance"],
          correctAnswer: 1,
          explanation: "APR includes interest plus other loan costs like points and fees."
        },
        {
          id: 18,
          question: "What is a deed in lieu of foreclosure?",
          options: ["Voluntary property transfer to lender", "Forced eviction", "Court judgment", "Short sale agreement"],
          correctAnswer: 0,
          explanation: "Deed in lieu is voluntarily transferring property to lender to avoid foreclosure."
        },
        {
          id: 19,
          question: "What regulates settlement procedures?",
          options: ["TILA", "RESPA", "ECOA", "Fair Housing Act"],
          correctAnswer: 1,
          explanation: "RESPA (Real Estate Settlement Procedures Act) regulates settlement processes."
        },
        {
          id: 20,
          question: "What FICO score range is considered excellent?",
          options: ["300-579", "580-669", "670-739", "740-850"],
          correctAnswer: 3,
          explanation: "FICO scores of 740-850 are generally considered excellent for mortgage rates."
        }
      ]
    },
    {
      id: 5,
      title: "Property Valuation and Appraisal",
      content: `
# Module 5: Property Valuation and Appraisal

**Determining property value is both art and science.** This module covers appraisal principles, valuation methods, and factors affecting property value.

## Principles of Value

Fundamental concepts that affect property worth:

**Basic Valuation Principles:**
- **Anticipation:** Value based on expected future benefits
- **Change:** Property values change over time
- **Competition:** Excess profits attract competition
- **Conformity:** Maximum value when properties are similar
- **Contribution:** Value of improvement equals its contribution to worth
- **Highest and Best Use:** Most profitable legal use
- **Increasing and Decreasing Returns:** Improvements add value up to a point
- **Progression and Regression:** Values influenced by surrounding properties
- **Substitution:** Maximum value set by cost of similar substitute
- **Supply and Demand:** Value affected by availability and desire

## Forces Affecting Value

External factors influencing property worth:

**Physical Forces:**
- Geographic location and topography
- Climate and weather patterns
- Natural resources availability
- Environmental conditions

**Economic Forces:**
- Employment levels and job growth
- Income levels and purchasing power
- Interest rates and financing availability
- Construction costs and material prices

**Social Forces:**
- Population growth or decline
- Demographic changes
- Lifestyle preferences
- Crime rates and safety

**Political/Governmental Forces:**
- Zoning and land use regulations
- Tax policies and assessments
- Building codes and restrictions
- Public services and infrastructure

## The Appraisal Process

Systematic approach to valuation:

**Six-Step Appraisal Process:**
1. **Define the Problem:** Purpose, intended use, value definition
2. **Preliminary Analysis:** Plan work, gather data, identify approaches
3. **Data Collection:** Market, site, improvement, comparable data
4. **Apply Approaches:** Sales comparison, cost, income approaches
5. **Reconciliation:** Correlate values from different approaches
6. **Report Results:** Present findings in appropriate format

**Types of Value:**
- **Market Value:** Most probable price in competitive market
- **Investment Value:** Value to specific investor
- **Insured Value:** Coverage amount for insurance
- **Assessed Value:** Value for tax purposes
- **Liquidation Value:** Quick sale under pressure

## Sales Comparison Approach

Most common method for residential properties:

**Basic Concept:**
- Compare subject property to similar recently sold properties
- Adjust for differences between properties
- Derive value estimate from adjusted comparables

**Adjustment Process:**
- Identify comparable properties (comps)
- Analyze differences in characteristics
- Make dollar adjustments for differences
- Adjust comparable prices to subject property

**Key Adjustments:**
- Property size and living area
- Age and condition
- Location and neighborhood
- Features and amenities
- Market conditions (time adjustment)
- Financing terms

## Cost Approach

Useful for new or unique properties:

**Basic Formula:**
- **Value = Land Value + (Replacement Cost - Depreciation)**

**Steps in Cost Approach:**
1. Estimate land value as if vacant
2. Estimate current cost to construct improvements
3. Estimate all forms of depreciation
4. Subtract depreciation from construction cost
5. Add land value to depreciated cost

**Types of Depreciation:**
- **Physical Deterioration:** Wear and tear, decay
- **Functional Obsolescence:** Design flaws, outdated features
- **External (Economic) Obsolescence:** External factors reducing value

## Income Approach

Primarily for income-producing properties:

**Basic Concept:**
- Value based on income property can generate
- Convert income stream to present value
- Uses capitalization rate or gross rent multiplier

**Gross Rent Multiplier (GRM):**
- **GRM = Sales Price ÷ Gross Annual Rent**
- **Value = Gross Annual Rent × GRM**
- Simple method for residential rentals

**Capitalization Rate Method:**
- **Value = Net Operating Income ÷ Capitalization Rate**
- More sophisticated for commercial properties
- Requires accurate income and expense data

## Market Analysis

Understanding current market conditions:

**Comparative Market Analysis (CMA):**
- Tool used by real estate agents
- Compares active, pending, and sold listings
- Helps determine listing price
- Not a formal appraisal

**Factors in Market Analysis:**
- Days on market (DOM)
- List price to sale price ratios
- Absorption rate (how quickly properties sell)
- Inventory levels (months of supply)

**Absorption Rate Calculation:**
- **Monthly Absorption Rate = Number of Sales ÷ Time Period**
- **Months of Supply = Inventory ÷ Monthly Absorption Rate**
- Indicates market balance

## Highest and Best Use Analysis

Determining optimal property use:

**Four Tests for Highest and Best Use:**
1. **Physically Possible:** Can property support the use?
2. **Legally Permissible:** Is use allowed by regulations?
3. **Financially Feasible:** Will use generate sufficient return?
4. **Maximally Productive:** Which use produces highest value?

**Applications:**
- Vacant land valuation
- Renovation or redevelopment decisions
- Zoning change requests
- Investment property analysis

## Appraisal Regulations

Professional standards and requirements:

**Uniform Standards of Professional Appraisal Practice (USPAP):**
- Ethical and performance standards
- Required for federally-related transactions
- Updated regularly
- Addresses competency, reporting, ethics

**Licensing and Certification:**
- State-regulated profession
- Different levels: Trainee, Licensed, Certified
- Continuing education requirements
- Background checks often required

**Appraiser Independence:**
- Must be independent and objective
- Cannot have interest in property or transaction
- Pressure to hit certain values is prohibited
- Reporting requirements for conflicts

## Special Valuation Considerations

Unique property situations:

**New Construction Appraisals:**
- Based on plans and specifications
- Consider construction quality and materials
- May require multiple inspections
- Final appraisal after completion

**Historic Properties:**
- Special historic value considerations
- Preservation restrictions may affect value
- Replacement cost difficult to estimate
- Unique market of buyers

**Environmental Factors:**
- Contamination issues
- Flood zones and elevation certificates
- Wetlands and habitat restrictions
- Energy efficiency and green features

**Condominium and PUD Appraisals:**
- Must consider homeowners association
- Common area condition and reserves
- Rental restrictions and fees
- Special assessments or pending repairs

Remember: Accurate valuation requires both quantitative analysis and qualitative judgment about what makes property desirable.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "Which principle says value is based on expected future benefits?",
          options: ["Change", "Anticipation", "Substitution", "Conformity"],
          correctAnswer: 1,
          explanation: "Anticipation principle states value is based on expected future benefits from the property."
        },
        {
          id: 2,
          question: "What is the most common appraisal approach for residential properties?",
          options: ["Cost approach", "Sales comparison approach", "Income approach", "Investment approach"],
          correctAnswer: 1,
          explanation: "Sales comparison approach is most common for residential properties using comparable sales."
        },
        {
          id: 3,
          question: "What is the first step in the appraisal process?",
          options: ["Collect data", "Define the problem", "Apply approaches", "Reconcile values"],
          correctAnswer: 1,
          explanation: "The first step is defining the problem: purpose, intended use, and value definition."
        },
        {
          id: 4,
          question: "What does GRM stand for?",
          options: ["Gross Revenue Multiplier", "Gross Rent Multiplier", "Growth Rate Measurement", "General Rate Method"],
          correctAnswer: 1,
          explanation: "GRM is Gross Rent Multiplier, used in income approach for rental properties."
        },
        {
          id: 5,
          question: "What type of depreciation is wear and tear?",
          options: ["Functional obsolescence", "External obsolescence", "Physical deterioration", "Economic depreciation"],
          correctAnswer: 2,
          explanation: "Physical deterioration is depreciation from wear, tear, and aging of the property."
        },
        {
          id: 6,
          question: "What is market value?",
          options: ["Price property sells for", "Most probable price in competitive market", "Tax assessment value", "Replacement cost"],
          correctAnswer: 1,
          explanation: "Market value is the most probable price in an open, competitive market."
        },
        {
          id: 7,
          question: "What is the basic cost approach formula?",
          options: ["Land + Improvements", "Land Value + (Replacement Cost - Depreciation)", "Sales Price ÷ Gross Rent", "NOI ÷ Cap Rate"],
          correctAnswer: 1,
          explanation: "Cost approach: Value = Land Value + (Replacement Cost - Depreciation)."
        },
        {
          id: 8,
          question: "What principle states maximum value when properties are similar?",
          options: ["Progression", "Conformity", "Competition", "Contribution"],
          correctAnswer: 1,
          explanation: "Conformity principle says maximum value is achieved when properties are similar."
        },
        {
          id: 9,
          question: "What does CMA stand for?",
          options: ["Comparative Market Analysis", "Cost Market Assessment", "Current Market Appraisal", "Commercial Market Analysis"],
          correctAnswer: 0,
          explanation: "CMA is Comparative Market Analysis used by agents to estimate value."
        },
        {
          id: 10,
          question: "What are the four tests for highest and best use?",
          options: ["Physical, Legal, Financial, Maximum", "Size, Location, Condition, Price", "Land, Building, Income, Cost", "Past, Present, Future, Potential"],
          correctAnswer: 0,
          explanation: "Highest and best use must be physically possible, legally permissible, financially feasible, and maximally productive."
        },
        {
          id: 11,
          question: "What principle says value of improvement equals its contribution?",
          options: ["Contribution", "Substitution", "Anticipation", "Change"],
          correctAnswer: 0,
          explanation: "Contribution principle states value of improvement equals what it adds to property value."
        },
        {
          id: 12,
          question: "Which approach uses capitalization rates?",
          options: ["Sales comparison", "Cost", "Income", "Market"],
          correctAnswer: 2,
          explanation: "Income approach uses capitalization rates to convert income to value."
        },
        {
          id: 13,
          question: "What does USPAP stand for?",
          options: ["Uniform Standards of Professional Appraisal Practice", "United States Property Appraisal Protocol", "Universal System for Property Assessment Procedures", "Uniform System of Property Appraisal Principles"],
          correctAnswer: 0,
          explanation: "USPAP are the Uniform Standards of Professional Appraisal Practice."
        },
        {
          id: 14,
          question: "What is functional obsolescence?",
          options: ["External factors reducing value", "Outdated design or features", "Physical wear and tear", "Market decline"],
          correctAnswer: 1,
          explanation: "Functional obsolescence is reduced value due to outdated design or features."
        },
        {
          id: 15,
          question: "What is absorption rate?",
          options: ["How quickly properties sell", "Interest rate absorption", "Cost absorption", "Value absorption"],
          correctAnswer: 0,
          explanation: "Absorption rate measures how quickly properties sell in a market."
        },
        {
          id: 16,
          question: "What principle says value set by cost of similar substitute?",
          options: ["Substitution", "Competition", "Conformity", "Progression"],
          correctAnswer: 0,
          explanation: "Substitution principle says maximum value is set by cost of acquiring similar property."
        },
        {
          id: 17,
          question: "What type of value is for tax purposes?",
          options: ["Market value", "Assessed value", "Investment value", "Insured value"],
          correctAnswer: 1,
          explanation: "Assessed value is used by taxing authorities to calculate property taxes."
        },
        {
          id: 18,
          question: "What is external obsolescence?",
          options: ["Factors outside property reducing value", "Internal design flaws", "Physical deterioration", "Functional outdatedness"],
          correctAnswer: 0,
          explanation: "External obsolescence is reduced value from factors outside the property."
        },
        {
          id: 19,
          question: "What do appraisers reconcile?",
          options: ["Values from different approaches", "Buyer and seller", "Loan amounts", "Contract terms"],
          correctAnswer: 0,
          explanation: "Appraisers reconcile values derived from different valuation approaches."
        },
        {
          id: 20,
          question: "What is the income approach formula using cap rate?",
          options: ["Value = NOI × Cap Rate", "Value = NOI ÷ Cap Rate", "Value = Gross Rent × GRM", "Value = Cost - Depreciation"],
          correctAnswer: 1,
          explanation: "Income approach: Value = Net Operating Income ÷ Capitalization Rate."
        }
      ]
    },
    {
      id: 6,
      title: "Real Estate Transactions and Closing",
      content: `
# Module 6: Real Estate Transactions and Closing

**The closing process completes real estate transactions.** This module covers the steps from contract to closing, settlement procedures, and post-closing matters.

## The Transaction Process

Step-by-step from agreement to completion:

**From Contract to Closing:**
1. **Contract Acceptance:** All parties sign purchase agreement
2. **Earnest Money Deposit:** Buyer deposits funds in escrow
3. **Contingency Periods:** Financing, inspection, appraisal, etc.
4. **Title Work:** Title search and insurance commitment
5. **Loan Processing:** Mortgage application and underwriting
6. **Inspections and Repairs:** Property inspections and negotiations
7. **Final Walk-Through:** Last inspection before closing
8. **Closing/Settlement:** Documents signed, funds distributed
9. **Recording:** Documents recorded with county
10. **Possession:** Buyer takes possession of property

**Key Timeframes:**
- Typically 30-60 days from contract to closing
- Specific deadlines in contract must be met
- Extensions may be negotiated if needed
- Time is of the essence in real estate contracts

## Title Examination and Insurance

Ensuring clear ownership transfer:

**Title Search Process:**
- Examine public records for ownership history
- Identify liens, easements, encumbrances
- Verify legal description accuracy
- Check for judgments, taxes, assessments

**Title Commitment (Preliminary Report):**
- Shows current ownership
- Lists exceptions to title insurance
- Requirements for clearing title
- Basis for issuing title insurance policy

**Types of Title Insurance:**
- **Owner's Policy:** Protects buyer's ownership interest
- **Lender's Policy:** Protects lender's security interest
- **Extended Coverage:** Additional protections
- **Standard Coverage:** Basic protections

**Clearing Title Issues:**
- Pay off existing liens and mortgages
- Obtain lien releases
- Resolve boundary disputes
- Correct errors in legal descriptions
- Obtain easement agreements

## Escrow and Settlement

Managing funds and documents:

**Escrow Process:**
- Neutral third party holds funds and documents
- Follows instructions in purchase agreement
- Protects all parties
- Distributes funds when conditions met

**Settlement Statement (Closing Disclosure):**
- Itemizes all costs and credits
- Shows money flow between parties
- Required by RESPA for residential transactions
- Provided to buyer and seller

**Typical Closing Costs:**
- **Buyer Costs:** Loan fees, title insurance, prepaids, escrow fees
- **Seller Costs:** Commission, title insurance, transfer taxes, payoff fees
- **Prorations:** Property taxes, insurance, HOA fees, rent

## The Closing Meeting

Finalizing the transaction:

**Who Attends Closing:**
- Buyer and seller (or representatives)
- Real estate agents
- Closing agent/escrow officer
- Lender representative (sometimes)
- Attorney (in some states)

**Documents Signed at Closing:**
- **Buyer Documents:** Promissory note, mortgage/deed of trust, closing disclosure, various disclosures
- **Seller Documents:** Deed, closing disclosure, affidavit of title, various certificates
- **Mutual Documents:** Settlement statement, proration agreements

**Funds Distribution:**
- Buyer brings certified funds or wires money
- Lender funds the mortgage loan
- Escrow agent pays all parties
- Seller receives net proceeds
- Agents receive commissions
- Recording fees paid

## Recording and Post-Closing

After the closing meeting:

**Recording Documents:**
- Deed recorded with county recorder
- Mortgage/deed of trust recorded
- Other documents as required
- Provides public notice of ownership change
- Typically done immediately after closing

**Possession and Keys:**
- Usually transferred at closing or shortly after
- Can be specified in purchase agreement
- Rent-back agreements if seller stays temporarily
- Final walk-through confirms condition

**Post-Closing Tasks:**
- Agents follow up with clients
- File documents properly
- Update marketing and listings
- Provide copies to all parties
- Address any post-closing issues

## Special Transaction Situations

Unique closing scenarios:

**New Construction Closings:**
- Final inspection and certificate of occupancy
- Builder warranties and manuals
- Adjustments for incomplete items
- Escrow holdbacks for unfinished work

**Short Sale Transactions:**
- Lender approval required
- May take longer than traditional sales
- Special documentation requirements
- Potential tax implications for seller

**Foreclosure and REO Sales:**
- Bank-owned properties
- "As-is" condition typically
- Special addendums and disclosures
- May require cash or faster closings

**1031 Exchanges:**
- Tax-deferred exchange of like-kind properties
- Strict timelines and requirements
- Qualified intermediary required
- Replacement property identification rules

## Tax Considerations

Important tax aspects of transactions:

**Capital Gains Tax:**
- Profit from sale may be taxable
- Primary residence exclusion: $250,000 single, $500,000 married
- Must meet ownership and use tests
- Records important for tax purposes

**Property Transfer Taxes:**
- State and/or local taxes on transfers
- Usually based on sale price
- May be paid by buyer or seller
- Vary by jurisdiction

**Documentary Stamp Taxes:**
- Tax on recording certain documents
- Based on loan amount or sale price
- Paid at closing
- Vary by state

## Risk Management

Avoiding problems in transactions:

**Common Closing Problems:**
- Funding delays
- Document errors
- Last-minute title issues
- Missing parties or funds
- Property condition changes

**Prevention Strategies:**
- Thorough preparation and checklists
- Clear communication with all parties
- Contingency planning
- Professional assistance when needed

**Errors and Omissions Insurance:**
- Protects real estate professionals
- Covers mistakes in transactions
- Important risk management tool
- Required by many brokerages

## Continuing Education and Development

Growing as a real estate professional:

**Post-Licensing Requirements:**
- Many states require additional education
- Within first year or two of licensure
- Topics: ethics, contracts, agency, etc.

**Continuing Education:**
- Required to maintain license
- Topics: legal updates, ethics, specialty areas
- Varies by state requirements

**Professional Development:**
- Designations and certifications
- Networking and associations
- Technology training
- Market specialization

Remember: Successful closings require attention to detail, good communication, and thorough preparation throughout the entire transaction process.
`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is typically the first step after contract acceptance?",
          options: ["Closing", "Earnest money deposit", "Moving in", "Recording"],
          correctAnswer: 1,
          explanation: "After contract acceptance, the buyer typically deposits earnest money in escrow."
        },
        {
          id: 2,
          question: "What does a title search examine?",
          options: ["Property condition", "Public records for ownership history", "Market values", "Neighborhood schools"],
          correctAnswer: 1,
          explanation: "Title search examines public records to verify ownership history and identify liens."
        },
        {
          id: 3,
          question: "What is the final inspection before closing called?",
          options: ["Home inspection", "Appraisal inspection", "Final walk-through", "Title inspection"],
          correctAnswer: 2,
          explanation: "The final walk-through is the last inspection before closing to verify property condition."
        },
        {
          id: 4,
          question: "Who typically holds funds in escrow?",
          options: ["Buyer", "Seller", "Neutral third party", "Real estate agent"],
          correctAnswer: 2,
          explanation: "A neutral third party (escrow agent) holds funds and documents during the transaction."
        },
        {
          id: 5,
          question: "What document itemizes all closing costs?",
          options: ["Deed", "Mortgage", "Closing Disclosure", "Title commitment"],
          correctAnswer: 2,
          explanation: "The Closing Disclosure itemizes all costs and credits for the transaction."
        },
        {
          id: 6,
          question: "What is typically recorded after closing?",
          options: ["Deed and mortgage", "Purchase agreement", "Inspection report", "Loan application"],
          correctAnswer: 0,
          explanation: "The deed and mortgage are recorded with the county to provide public notice."
        },
        {
          id: 7,
          question: "What tax exclusion applies to primary residence sales?",
          options: ["$100,000/$200,000", "$250,000/$500,000", "$500,000/$1,000,000", "No exclusion"],
          correctAnswer: 1,
          explanation: "Primary residence exclusion: $250,000 single, $500,000 married filing jointly."
        },
        {
          id: 8,
          question: "What is a 1031 exchange?",
          options: ["Tax-deferred property exchange", "Type of mortgage", "Closing procedure", "Title insurance"],
          correctAnswer: 0,
          explanation: "A 1031 exchange allows tax-deferred exchange of like-kind investment properties."
        },
        {
          id: 9,
          question: "What insurance protects real estate professionals from mistakes?",
          options: ["Title insurance", "Homeowners insurance", "Errors and omissions insurance", "Mortgage insurance"],
          correctAnswer: 2,
          explanation: "Errors and omissions insurance protects professionals from liability for mistakes."
        },
        {
          id: 10,
          question: "What does 'time is of the essence' mean in contracts?",
          options: ["Time doesn't matter", "Deadlines are important and must be met", "Take your time", "Time extensions are automatic"],
          correctAnswer: 1,
          explanation: "'Time is of the essence' means contract deadlines are critical and must be met."
        },
        {
          id: 11,
          question: "What is a title commitment?",
          options: ["Promise to buy title insurance", "Title insurance policy", "Preliminary title report", "Deed guarantee"],
          correctAnswer: 2,
          explanation: "A title commitment or preliminary report shows conditions for issuing title insurance."
        },
        {
          id: 12,
          question: "What are prorations at closing?",
          options: ["Dividing costs between buyer and seller", "Loan payments", "Agent commissions", "Tax deductions"],
          correctAnswer: 0,
          explanation: "Prorations divide ongoing costs like taxes and insurance between buyer and seller."
        },
        {
          id: 13,
          question: "Who usually attends the closing meeting?",
          options: ["Buyer, seller, agents, closing agent", "Only buyers", "Only lenders", "General public"],
          correctAnswer: 0,
          explanation: "Typically buyer, seller, agents, and closing agent attend the closing meeting."
        },
        {
          id: 14,
          question: "What is a short sale?",
          options: ["Quick closing", "Sale for less than mortgage balance", "Small property sale", "Cash sale"],
          correctAnswer: 1,
          explanation: "Short sale is when property sells for less than the mortgage balance with lender approval."
        },
        {
          id: 15,
          question: "What document transfers ownership?",
          options: ["Mortgage", "Deed", "Title insurance", "Closing statement"],
          correctAnswer: 1,
          explanation: "The deed is the document that transfers ownership from seller to buyer."
        },
        {
          id: 16,
          question: "What is typically the timeframe from contract to closing?",
          options: ["1-2 weeks", "30-60 days", "6 months", "1 year"],
          correctAnswer: 1,
          explanation: "Most residential closings occur 30-60 days after contract acceptance."
        },
        {
          id: 17,
          question: "What does RESPA require for residential transactions?",
          options: ["Settlement statement disclosure", "Property insurance", "Home warranty", "Moving services"],
          correctAnswer: 0,
          explanation: "RESPA requires disclosure of settlement costs through Closing Disclosure."
        },
        {
          id: 18,
          question: "What is an REO property?",
          options: ["Real estate owned by bank", "Rural property", "Renovated property", "Rental property"],
          correctAnswer: 0,
          explanation: "REO (Real Estate Owned) refers to bank-owned properties from foreclosure."
        },
        {
          id: 19,
          question: "What are transfer taxes?",
          options: ["Taxes on property transfer", "Income taxes", "Sales taxes", "Capital gains taxes"],
          correctAnswer: 0,
          explanation: "Transfer taxes are state/local taxes on the transfer of real property ownership."
        },
        {
          id: 20,
          question: "Why is continuing education required?",
          options: ["To maintain license", "For fun", "Optional only", "For tax purposes"],
          correctAnswer: 0,
          explanation: "Continuing education is required to maintain real estate license and stay current."
        }
      ]
    }
  ],

  // 3. FINAL EXAM STRUCTURE
  finalExam: {
    title: "Real Estate Certificate Final Exam",
    description: "Comprehensive 40-question exam covering all 6 modules of real estate fundamentals, ownership, contracts, financing, valuation, and transactions.",
    passingScore: 70,
    questions: [
      // Questions from Module 1
      {
        id: 1,
        question: "What are the three most important factors in real estate?",
        options: ["Price, size, age", "Location, location, location", "Style, color, design", "Rooms, bathrooms, garage"],
        correctAnswer: 1,
        explanation: "Location is the most critical factor affecting real estate value.",
        module: 1
      },
      {
        id: 2,
        question: "What type of property includes single-family homes?",
        options: ["Commercial", "Industrial", "Residential", "Agricultural"],
        correctAnswer: 2,
        explanation: "Single-family homes are residential properties.",
        module: 1
      },
      {
        id: 3,
        question: "What market has more buyers than properties?",
        options: ["Buyer's market", "Seller's market", "Balanced market", "Stagnant market"],
        correctAnswer: 1,
        explanation: "Seller's market has more buyers competing for fewer properties.",
        module: 1
      },

      // Questions from Module 2
      {
        id: 4,
        question: "What is sole ownership called?",
        options: ["Joint tenancy", "Tenancy in common", "Severalty", "Community property"],
        correctAnswer: 2,
        explanation: "Severalty is ownership by one person or entity alone.",
        module: 2
      },
      {
        id: 5,
        question: "What government power allows property taking for public use?",
        options: ["Police power", "Eminent domain", "Taxation", "Escheat"],
        correctAnswer: 1,
        explanation: "Eminent domain allows taking private property for public use with compensation.",
        module: 2
      },
      {
        id: 6,
        question: "Which deed provides most protection?",
        options: ["Quitclaim deed", "Special warranty deed", "General warranty deed", "Bargain and sale deed"],
        correctAnswer: 2,
        explanation: "General warranty deed provides maximum protection against title claims.",
        module: 2
      },

      // Questions from Module 3
      {
        id: 7,
        question: "What must real estate contracts be?",
        options: ["Verbal", "In writing", "Notarized", "Witnessed by two people"],
        correctAnswer: 1,
        explanation: "Real estate contracts must be in writing under Statute of Frauds.",
        module: 3
      },
      {
        id: 8,
        question: "What type of listing pays commission even if owner sells?",
        options: ["Open listing", "Exclusive agency", "Exclusive right to sell", "Net listing"],
        correctAnswer: 2,
        explanation: "Exclusive right to sell pays commission regardless of who finds buyer.",
        module: 3
      },
      {
        id: 9,
        question: "What does earnest money show?",
        options: ["Final payment", "Buyer's good faith", "Commission", "Down payment"],
        correctAnswer: 1,
        explanation: "Earnest money deposit shows buyer's serious intent to purchase.",
        module: 3
      },

      // Questions from Module 4
      {
        id: 10,
        question: "Who is the mortgagor?",
        options: ["Lender", "Borrower", "Agent", "Appraiser"],
        correctAnswer: 1,
        explanation: "Mortgagor is the borrower who pledges property as security.",
        module: 4
      },
      {
        id: 11,
        question: "What does PITI stand for?",
        options: ["Principal, Interest, Taxes, Insurance", "Payment, Interest, Time, Investment", "Price, Income, Term, Insurance", "Property, Investment, Tax, Interest"],
        correctAnswer: 0,
        explanation: "PITI components: Principal, Interest, Taxes, Insurance.",
        module: 4
      },
      {
        id: 12,
        question: "What loan requires no down payment for veterans?",
        options: ["FHA", "VA", "USDA", "Conventional"],
        correctAnswer: 1,
        explanation: "VA loans offer 0% down payment for eligible veterans.",
        module: 4
      },

      // Questions from Module 5
      {
        id: 13,
        question: "Which appraisal approach uses comparable sales?",
        options: ["Cost approach", "Sales comparison approach", "Income approach", "Investment approach"],
        correctAnswer: 1,
        explanation: "Sales comparison approach compares subject to similar sold properties.",
        module: 5
      },
      {
        id: 14,
        question: "What principle says value based on future benefits?",
        options: ["Change", "Anticipation", "Substitution", "Conformity"],
        correctAnswer: 1,
        explanation: "Anticipation principle: value based on expected future benefits.",
        module: 5
      },
      {
        id: 15,
        question: "What does GRM stand for?",
        options: ["Gross Revenue Multiplier", "Gross Rent Multiplier", "Growth Rate Measurement", "General Rate Method"],
        correctAnswer: 1,
        explanation: "GRM is Gross Rent Multiplier used in income approach.",
        module: 5
      },

      // Questions from Module 6
      {
        id: 16,
        question: "What is the final inspection before closing?",
        options: ["Home inspection", "Appraisal", "Final walk-through", "Title search"],
        correctAnswer: 2,
        explanation: "Final walk-through verifies property condition just before closing.",
        module: 6
      },
      {
        id: 17,
        question: "What document itemizes closing costs?",
        options: ["Deed", "Mortgage", "Closing Disclosure", "Title commitment"],
        correctAnswer: 2,
        explanation: "Closing Disclosure details all transaction costs.",
        module: 6
      },
      {
        id: 18,
        question: "What transfers ownership?",
        options: ["Mortgage", "Deed", "Title insurance", "Closing statement"],
        correctAnswer: 1,
        explanation: "Deed is the document that transfers property ownership.",
        module: 6
      },

      // Additional mixed questions
      {
        id: 19,
        question: "How many square feet in an acre?",
        options: ["10,000", "43,560", "100,000", "1,000"],
        correctAnswer: 1,
        explanation: "One acre equals 43,560 square feet.",
        module: 1
      },
      {
        id: 20,
        question: "What is a fixture?",
        options: ["Movable furniture", "Permanently attached item", "Temporary decoration", "Real estate agent"],
        correctAnswer: 1,
        explanation: "Fixtures are permanently attached and included in property sale.",
        module: 2
      },
      {
        id: 21,
        question: "What are fiduciary duties remembered by OLD CAR?",
        options: ["Obedience, Loyalty, Disclosure, Confidentiality, Accounting, Reasonable care", "Offer, List, Display, Close, Accept, Report", "Own, Lease, Develop, Construct, Alter, Repair", "Office, License, Deal, Contract, Agreement, Rules"],
        correctAnswer: 0,
        explanation: "OLD CAR: Obedience, Loyalty, Disclosure, Confidentiality, Accounting, Reasonable care.",
        module: 3
      },
      {
        id: 22,
        question: "What does PMI stand for?",
        options: ["Primary Mortgage Insurance", "Private Mortgage Insurance", "Property Market Insurance", "Payment Monthly Insurance"],
        correctAnswer: 1,
        explanation: "PMI is Private Mortgage Insurance for loans with less than 20% down.",
        module: 4
      },
      {
        id: 23,
        question: "What is market value?",
        options: ["Price property sells for", "Most probable price in competitive market", "Tax assessment", "Replacement cost"],
        correctAnswer: 1,
        explanation: "Market value is most probable price in open, competitive market.",
        module: 5
      },
      {
        id: 24,
        question: "What tax exclusion for primary residence?",
        options: ["$100,000/$200,000", "$250,000/$500,000", "$500,000/$1,000,000", "No exclusion"],
        correctAnswer: 1,
        explanation: "Primary residence exclusion: $250,000 single, $500,000 married.",
        module: 6
      },
      {
        id: 25,
        question: "What type of easement benefits adjacent property?",
        options: ["Easement in gross", "Easement appurtenant", "Prescriptive easement", "Utility easement"],
        correctAnswer: 1,
        explanation: "Easement appurtenant benefits adjacent property.",
        module: 2
      },
      {
        id: 26,
        question: "What is a contingency?",
        options: ["Certainty clause", "Condition that must be met", "Illegal provision", "Type of commission"],
        correctAnswer: 1,
        explanation: "Contingency is condition that must be satisfied for contract to proceed.",
        module: 3
      },
      {
        id: 27,
        question: "What are the three C's of credit?",
        options: ["Cost, Credit, Collateral", "Character, Capacity, Collateral", "Cash, Credit, Contract", "Capacity, Cash, Collateral"],
        correctAnswer: 1,
        explanation: "Three C's: Character, Capacity, Collateral.",
        module: 4
      },
      {
        id: 28,
        question: "What is functional obsolescence?",
        options: ["External factors", "Outdated design", "Physical wear", "Market decline"],
        correctAnswer: 1,
        explanation: "Functional obsolescence is reduced value from outdated design.",
        module: 5
      },
      {
        id: 29,
        question: "What is a short sale?",
        options: ["Quick closing", "Sale for less than mortgage", "Small property", "Cash sale"],
        correctAnswer: 1,
        explanation: "Short sale: property sells for less than mortgage with lender approval.",
        module: 6
      },
      {
        id: 30,
        question: "What is a Realtor®?",
        options: ["Any agent", "NAR member", "Property owner", "Bank lender"],
        correctAnswer: 1,
        explanation: "Realtor® is a real estate professional who belongs to National Association of Realtors.",
        module: 1
      },
      {
        id: 31,
        question: "What legal description uses distances and directions?",
        options: ["Lot and block", "Metes and bounds", "Rectangular survey", "Plat system"],
        correctAnswer: 1,
        explanation: "Metes and bounds uses measured distances and compass directions.",
        module: 2
      },
      {
        id: 32,
        question: "What must be disclosed for pre-1978 homes?",
        options: ["Asbestos", "Lead-based paint", "Radon", "Mold"],
        correctAnswer: 1,
        explanation: "Lead-based paint disclosure required for homes built before 1978.",
        module: 3
      },
      {
        id: 33,
        question: "What law requires loan term disclosure?",
        options: ["RESPA", "TILA", "Fair Housing", "Equal Credit"],
        correctAnswer: 1,
        explanation: "Truth in Lending Act (TILA) requires disclosure of loan terms.",
        module: 4
      },
      {
        id: 34,
        question: "What is highest and best use?",
        options: ["Current use", "Most profitable legal use", "Zoned use", "Previous use"],
        correctAnswer: 1,
        explanation: "Highest and best use is most profitable legally permissible use.",
        module: 5
      },
      {
        id: 35,
        question: "What is a 1031 exchange?",
        options: ["Tax-deferred exchange", "Type of mortgage", "Closing procedure", "Title insurance"],
        correctAnswer: 0,
        explanation: "1031 exchange allows tax-deferred exchange of like-kind properties.",
        module: 6
      },
      {
        id: 36,
        question: "What is equity?",
        options: ["Mortgage payment", "Value minus mortgage", "Commission", "Down payment"],
        correctAnswer: 1,
        explanation: "Equity is owner's financial interest (property value minus debt).",
        module: 1
      },
      {
        id: 37,
        question: "What is a cloud on title?",
        options: ["Weather issue", "Claim affecting ownership", "Dark house", "Property defect"],
        correctAnswer: 1,
        explanation: "Cloud on title is any claim or encumbrance affecting ownership.",
        module: 2
      },
      {
        id: 38,
        question: "What is dual agency?",
        options: ["Two agents", "Agent represents both parties", "Broker relationship", "Buyer representation"],
        correctAnswer: 1,
        explanation: "Dual agency: one agent represents both buyer and seller.",
        module: 3
      },
      {
        id: 39,
        question: "What is amortization?",
        options: ["Loan denial", "Gradual loan repayment", "Interest calculation", "Down payment"],
        correctAnswer: 1,
        explanation: "Amortization is gradual repayment of loan through regular payments.",
        module: 4
      },
      {
        id: 40,
        question: "Why is continuing education required?",
        options: ["Maintain license", "For fun", "Optional", "Tax purposes"],
        correctAnswer: 0,
        explanation: "Continuing education is required to maintain real estate license.",
        module: 6
      }
    ]
  }
};
