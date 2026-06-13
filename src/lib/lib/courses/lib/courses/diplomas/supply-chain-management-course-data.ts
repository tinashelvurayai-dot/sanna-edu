// supply-chain-management-diploma.ts
export const supplyChainManagementDiploma = {
  id: "supply-chain-management-diploma",
  title: "Supply Chain Management (Diploma)",
  description: "Advanced study of end-to-end supply chain processes, logistics optimization, demand planning, and global supply chain strategies. Builds upon procurement fundamentals to develop expertise in managing complete supply networks.",
  duration: "10 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  icon: "🚚",
  badge: "Diploma",
  prerequisites: ["procurement-certificate"],
  modules: [
    {
      id: 1,
      title: "Supply Chain Fundamentals & Strategy",
      content: `# Module 1: Supply Chain Fundamentals & Strategy

Welcome to advanced supply chain management! This module explores the comprehensive view of supply chains and strategic approaches to managing them effectively.

## What is Supply Chain Management?

**Supply Chain Definition:**
A supply chain encompasses all activities involved in delivering a product or service from raw material extraction to final consumer delivery. This includes:
- **Upstream:** Suppliers and raw materials
- **Internal:** Manufacturing and operations
- **Downstream:** Distribution and customers

**Key Supply Chain Flows:**
1. **Product Flow:** Physical movement of goods
2. **Information Flow:** Data and communication
3. **Financial Flow:** Money and payment transactions
4. **Return Flow:** Reverse logistics and returns

## Supply Chain Components

**Primary Components:**
1. **Planning:** Demand forecasting and resource allocation
2. **Sourcing:** Supplier selection and procurement
3. **Manufacturing:** Production and quality control
4. **Delivery:** Logistics and distribution
5. **Returns:** Reverse logistics and recycling

**Supporting Components:**
- Information technology systems
- Performance measurement
- Risk management
- Relationship management

## Supply Chain Strategies

**Efficiency-Focused Strategy:**
- Emphasizes cost reduction
- High volume, standardized products
- Lean inventory management
- Economies of scale focus

**Responsiveness-Focused Strategy:**
- Emphasizes speed and flexibility
- Customized or innovative products
- Agile operations
- Market responsiveness focus

**Hybrid Strategies:**
- **Lean-Agile Combination:** Efficient base with responsive peaks
- **Postponement:** Delayed product differentiation
- **Mass Customization:** Efficient production of customized items

## Supply Chain Network Design

**Network Configuration:**
- Number and location of facilities
- Production and distribution centers
- Transportation routes
- Inventory positioning

**Design Considerations:**
- Customer service requirements
- Cost optimization
- Risk mitigation
- Sustainability goals
- Technology infrastructure

**Centralized vs Decentralized:**
- **Centralized:** Few large facilities, lower inventory costs
- **Decentralized:** Multiple small facilities, faster response times
- **Hybrid:** Strategic combination based on product characteristics

## Value Chain Integration

**Vertical Integration:**
- Owning multiple stages of supply chain
- **Forward Integration:** Moving toward customers
- **Backward Integration:** Moving toward suppliers
- Benefits of control vs flexibility trade-offs

**Virtual Integration:**
- Partnering without ownership
- Strategic alliances
- Outsourcing non-core activities
- Focus on core competencies

**Supply Chain Collaboration:**
- Information sharing between partners
- Joint planning and forecasting
- Collaborative product development
- Shared performance metrics

Understanding these strategic foundations enables effective management of complex supply networks.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does a supply chain encompass?",
          options: [
            "All activities from raw materials to final consumer",
            "Only manufacturing processes",
            "Only transportation activities",
            "Only retail sales"
          ],
          correctAnswer: 0,
          explanation: "Supply chains include upstream suppliers, internal operations, and downstream distribution to customers."
        },
        {
          id: 2,
          question: "What are upstream activities?",
          options: [
            "Suppliers and raw materials",
            "Customer delivery only",
            "Retail operations only",
            "Marketing activities"
          ],
          correctAnswer: 0,
          explanation: "Upstream refers to activities closer to raw material sources and suppliers."
        },
        {
          id: 3,
          question: "What are downstream activities?",
          options: [
            "Distribution and customers",
            "Raw material extraction",
            "Component manufacturing",
            "Supplier management"
          ],
          correctAnswer: 0,
          explanation: "Downstream refers to activities closer to end customers and final delivery."
        },
        {
          id: 4,
          question: "What is product flow?",
          options: [
            "Physical movement of goods",
            "Financial transactions",
            "Information exchange",
            "Return processes"
          ],
          correctAnswer: 0,
          explanation: "Product flow involves the actual physical transportation and handling of materials and goods."
        },
        {
          id: 5,
          question: "What is information flow?",
          options: [
            "Data and communication exchanges",
            "Money transfers",
            "Product shipments",
            "Return shipments"
          ],
          correctAnswer: 0,
          explanation: "Information flow includes orders, forecasts, inventory data, and other communications."
        },
        {
          id: 6,
          question: "What is financial flow?",
          options: [
            "Money and payment transactions",
            "Product deliveries",
            "Information sharing",
            "Return processing"
          ],
          correctAnswer: 0,
          explanation: "Financial flow involves payments, credits, and financial transactions between supply chain partners."
        },
        {
          id: 7,
          question: "What is planning in supply chain?",
          options: [
            "Demand forecasting and resource allocation",
            "Only manufacturing scheduling",
            "Only transportation booking",
            "Only inventory counting"
          ],
          correctAnswer: 0,
          explanation: "Planning coordinates all supply chain activities through forecasting and resource management."
        },
        {
          id: 8,
          question: "What is sourcing?",
          options: [
            "Supplier selection and procurement",
            "Only manufacturing",
            "Only distribution",
            "Only retailing"
          ],
          correctAnswer: 0,
          explanation: "Sourcing involves finding and managing suppliers to provide needed materials and services."
        },
        {
          id: 9,
          question: "What characterizes efficiency-focused strategy?",
          options: [
            "Emphasis on cost reduction",
            "Emphasis on maximum speed",
            "Emphasis on flexibility",
            "Emphasis on customization"
          ],
          correctAnswer: 0,
          explanation: "Efficiency strategies prioritize minimizing costs through standardization and scale."
        },
        {
          id: 10,
          question: "What characterizes responsiveness-focused strategy?",
          options: [
            "Emphasis on speed and flexibility",
            "Emphasis on lowest costs",
            "Emphasis on standardization",
            "Emphasis on large volumes"
          ],
          correctAnswer: 0,
          explanation: "Responsiveness strategies prioritize quick adaptation to market changes and customer needs."
        },
        {
          id: 11,
          question: "What is lean-agile combination?",
          options: [
            "Efficient base with responsive peaks",
            "Only efficiency focus",
            "Only responsiveness focus",
            "Random strategy selection"
          ],
          correctAnswer: 0,
          explanation: "Lean-agile combines cost efficiency for stable demand with responsiveness for variable demand."
        },
        {
          id: 12,
          question: "What is postponement strategy?",
          options: [
            "Delayed product differentiation",
            "Early product completion",
            "No product variation",
            "Complete customization upfront"
          ],
          correctAnswer: 0,
          explanation: "Postponement delays final product configuration until customer orders are received."
        },
        {
          id: 13,
          question: "What is network configuration?",
          options: [
            "Number and location of facilities",
            "Only transportation methods",
            "Only inventory levels",
            "Only supplier selection"
          ],
          correctAnswer: 0,
          explanation: "Network configuration determines where facilities are located and how they connect."
        },
        {
          id: 14,
          question: "What characterizes centralized networks?",
          options: [
            "Few large facilities, lower inventory costs",
            "Many small facilities everywhere",
            "No facility planning",
            "Random facility placement"
          ],
          correctAnswer: 0,
          explanation: "Centralized networks consolidate operations into fewer locations for cost efficiency."
        },
        {
          id: 15,
          question: "What characterizes decentralized networks?",
          options: [
            "Multiple small facilities, faster response",
            "One central facility only",
            "No facilities needed",
            "Temporary facilities only"
          ],
          correctAnswer: 0,
          explanation: "Decentralized networks place facilities closer to customers for faster service."
        },
        {
          id: 16,
          question: "What is vertical integration?",
          options: [
            "Owning multiple stages of supply chain",
            "Only owning one stage",
            "No ownership of stages",
            "Selling all stages"
          ],
          correctAnswer: 0,
          explanation: "Vertical integration involves controlling multiple consecutive stages of the supply chain."
        },
        {
          id: 17,
          question: "What is forward integration?",
          options: [
            "Moving toward customers",
            "Moving toward suppliers",
            "Staying in same stage",
            "Leaving supply chain"
          ],
          correctAnswer: 0,
          explanation: "Forward integration extends control toward distribution and customer-facing activities."
        },
        {
          id: 18,
          question: "What is backward integration?",
          options: [
            "Moving toward suppliers",
            "Moving toward customers",
            "No movement",
            "Lateral movement"
          ],
          correctAnswer: 0,
          explanation: "Backward integration extends control toward raw materials and supplier activities."
        },
        {
          id: 19,
          question: "What is virtual integration?",
          options: [
            "Partnering without ownership",
            "Owning everything",
            "No partnerships",
            "Temporary arrangements"
          ],
          correctAnswer: 0,
          explanation: "Virtual integration achieves coordination through partnerships rather than ownership."
        },
        {
          id: 20,
          question: "What is supply chain collaboration?",
          options: [
            "Information sharing between partners",
            "Working independently",
            "Competing fiercely",
            "Ignoring partners"
          ],
          correctAnswer: 0,
          explanation: "Collaboration involves coordinated planning and information sharing among supply chain partners."
        }
      ]
    },
    {
      id: 2,
      title: "Demand Planning & Forecasting",
      content: `# Module 2: Demand Planning & Forecasting

Accurate demand planning is crucial for supply chain efficiency. This module covers forecasting methods, planning processes, and demand management strategies.

## Demand Planning Process

**Demand Planning Steps:**
1. **Data Collection:** Historical sales, market trends, promotions
2. **Statistical Forecasting:** Quantitative analysis of patterns
3. **Collaborative Input:** Sales, marketing, customer feedback
4. **Consensus Building:** Agreement on final forecast
5. **Plan Execution:** Implementing inventory and production plans

**Demand Planning Objectives:**
- Minimize stockouts and overstocks
- Optimize inventory investment
- Improve customer service levels
- Enhance production efficiency
- Support financial planning

## Forecasting Methods

**Qualitative Methods:**
- **Market Research:** Customer surveys and focus groups
- **Expert Opinion:** Delphi method and panel consensus
- **Sales Force Composite:** Input from sales teams
- **Historical Analogy:** Comparing to similar products

**Quantitative Methods:**

**Time Series Analysis:**
- **Moving Averages:** Simple average of recent periods
- **Exponential Smoothing:** Weighted average favoring recent data
- **Trend Analysis:** Identifying upward or downward patterns
- **Seasonal Analysis:** Accounting for regular patterns

**Causal Methods:**
- **Regression Analysis:** Relationship between demand and factors
- **Econometric Models:** Multiple economic variables
- **Leading Indicators:** Predictive economic measures

**New Product Forecasting:**
- **Test Marketing:** Limited market introduction
- **Life Cycle Analysis:** Comparison to similar products
- **Bass Diffusion Model:** Adoption rate modeling

## Forecast Accuracy & Improvement

**Accuracy Measurement:**
- **Mean Absolute Deviation (MAD):** Average forecast error
- **Mean Absolute Percentage Error (MAPE):** Percentage error
- **Tracking Signal:** Monitoring forecast bias
- **Forecast Value Added (FVA):** Improvement over simple methods

**Improvement Strategies:**
- Regular forecast reviews and adjustments
- Collaboration across departments
- Advanced statistical software tools
- Continuous process improvement
- Performance metric tracking

## Sales & Operations Planning (S&OP)

**S&OP Process:**
1. **Data Gathering:** Sales, inventory, production capacity
2. **Demand Planning:** Creating unconstrained forecast
3. **Supply Planning:** Matching demand with available resources
4. **Pre-S&OP Meeting:** Departmental reconciliation
5. **Executive S&OP:** Final decision and authorization

**S&OP Benefits:**
- Aligns company around single operating plan
- Balances supply and demand
- Improves resource utilization
- Enhances financial performance
- Reduces operational conflicts

## Demand Management Strategies

**Demand Shaping:**
- **Pricing Strategies:** Discounts, promotions, dynamic pricing
- **Product Management:** New features, bundling, versioning
- **Marketing Campaigns:** Advertising, promotions, incentives
- **Channel Management:** Distribution channel optimization

**Demand Fulfillment:**
- **Available-to-Promise (ATP):** Real-time inventory availability
- **Capable-to-Promise (CTP):** Production capacity consideration
- **Allocation Planning:** Distributing limited supply
- **Order Promising:** Committing to delivery dates

**Collaborative Planning, Forecasting & Replenishment (CPFR):**
- Shared forecasting between trading partners
- Joint business planning
- Exception management processes
- Performance measurement sharing

Effective demand planning reduces costs while improving customer service and operational efficiency.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the first step in demand planning?",
          options: [
            "Data collection",
            "Statistical forecasting",
            "Collaborative input",
            "Plan execution"
          ],
          correctAnswer: 0,
          explanation: "Data collection gathers historical information needed for accurate forecasting."
        },
        {
          id: 2,
          question: "What does demand planning minimize?",
          options: [
            "Stockouts and overstocks",
            "Only production costs",
            "Only transportation costs",
            "Only labor costs"
          ],
          correctAnswer: 0,
          explanation: "Effective planning balances inventory to avoid both shortages and excesses."
        },
        {
          id: 3,
          question: "What is qualitative forecasting?",
          options: [
            "Based on opinions and judgments",
            "Based only on mathematical models",
            "Based only on historical data",
            "Based only on computer algorithms"
          ],
          correctAnswer: 0,
          explanation: "Qualitative methods use human judgment and experience rather than numerical data."
        },
        {
          id: 4,
          question: "What is market research in forecasting?",
          options: [
            "Customer surveys and focus groups",
            "Only historical sales data",
            "Only mathematical calculations",
            "Only computer simulations"
          ],
          correctAnswer: 0,
          explanation: "Market research gathers direct customer input about preferences and intentions."
        },
        {
          id: 5,
          question: "What is quantitative forecasting?",
          options: [
            "Based on mathematical analysis",
            "Based only on opinions",
            "Based only on guesses",
            "Based only on intuition"
          ],
          correctAnswer: 0,
          explanation: "Quantitative methods analyze numerical data using statistical techniques."
        },
        {
          id: 6,
          question: "What are moving averages?",
          options: [
            "Simple average of recent periods",
            "Complex weighted calculations",
            "Future predictions only",
            "Customer opinions only"
          ],
          correctAnswer: 0,
          explanation: "Moving averages smooth out short-term fluctuations to identify trends."
        },
        {
          id: 7,
          question: "What is exponential smoothing?",
          options: [
            "Weighted average favoring recent data",
            "Equal weighting of all data",
            "Ignoring recent data",
            "Only using oldest data"
          ],
          correctAnswer: 0,
          explanation: "Exponential smoothing gives more weight to recent observations in forecasting."
        },
        {
          id: 8,
          question: "What is trend analysis?",
          options: [
            "Identifying upward or downward patterns",
            "Ignoring patterns",
            "Only seasonal patterns",
            "Only random patterns"
          ],
          correctAnswer: 0,
          explanation: "Trend analysis identifies long-term direction in data over time."
        },
        {
          id: 9,
          question: "What is seasonal analysis?",
          options: [
            "Accounting for regular patterns",
            "Ignoring seasonal effects",
            "Only trend analysis",
            "Only random analysis"
          ],
          correctAnswer: 0,
          explanation: "Seasonal analysis identifies and accounts for regular periodic fluctuations."
        },
        {
          id: 10,
          question: "What is regression analysis?",
          options: [
            "Relationship between demand and factors",
            "Only time-based analysis",
            "Only opinion-based analysis",
            "Only simple averaging"
          ],
          correctAnswer: 0,
          explanation: "Regression examines how demand relates to other variables like price or promotions."
        },
        {
          id: 11,
          question: "How to measure forecast accuracy?",
          options: [
            "Mean Absolute Deviation (MAD)",
            "Only guesswork",
            "Only opinions",
            "Only sales targets"
          ],
          correctAnswer: 0,
          explanation: "MAD calculates the average difference between forecast and actual demand."
        },
        {
          id: 12,
          question: "What is MAPE?",
          options: [
            "Mean Absolute Percentage Error",
            "Maximum Average Price Estimate",
            "Minimum Average Production Error",
            "Mean Annual Product Estimation"
          ],
          correctAnswer: 0,
          explanation: "MAPE expresses forecast error as a percentage of actual demand."
        },
        {
          id: 13,
          question: "What is S&OP?",
          options: [
            "Sales & Operations Planning",
            "Stock & Order Processing",
            "Supply & Output Planning",
            "Sales & Order Processing"
          ],
          correctAnswer: 0,
          explanation: "S&OP aligns demand plans with supply capabilities across the organization."
        },
        {
          id: 14,
          question: "What does S&OP align?",
          options: [
            "Company around single operating plan",
            "Only sales targets",
            "Only production schedules",
            "Only inventory levels"
          ],
          correctAnswer: 0,
          explanation: "S&OP creates consensus among departments for coordinated execution."
        },
        {
          id: 15,
          question: "What is demand shaping?",
          options: [
            "Influencing customer demand patterns",
            "Only accepting all demand",
            "Only rejecting demand",
            "Ignoring demand patterns"
          ],
          correctAnswer: 0,
          explanation: "Demand shaping uses marketing and pricing to influence when and how much customers buy."
        },
        {
          id: 16,
          question: "What is ATP?",
          options: [
            "Available-to-Promise",
            "Allocated-to-Production",
            "Actual-to-Planned",
            "Average-to-Peak"
          ],
          correctAnswer: 0,
          explanation: "ATP shows what inventory is actually available to promise to customers."
        },
        {
          id: 17,
          question: "What is CTP?",
          options: [
            "Capable-to-Promise",
            "Cost-to-Produce",
            "Capacity-to-Profit",
            "Customer-to-Provider"
          ],
          correctAnswer: 0,
          explanation: "CTP considers production capacity when promising delivery dates."
        },
        {
          id: 18,
          question: "What is CPFR?",
          options: [
            "Collaborative Planning, Forecasting & Replenishment",
            "Centralized Production & Financial Reporting",
            "Coordinated Purchasing & Facility Rotation",
            "Complete Product & Flow Reconciliation"
          ],
          correctAnswer: 0,
          explanation: "CPFR involves sharing forecasts and plans between supply chain partners."
        },
        {
          id: 19,
          question: "What improves forecast accuracy?",
          options: [
            "Regular reviews and adjustments",
            "Never changing forecasts",
            "Ignoring errors",
            "Using only one method"
          ],
          correctAnswer: 0,
          explanation: "Continuous improvement processes enhance forecast accuracy over time."
        },
        {
          id: 20,
          question: "What is demand fulfillment?",
          options: [
            "Meeting customer demand effectively",
            "Creating demand only",
            "Ignoring demand",
            "Reducing demand only"
          ],
          correctAnswer: 0,
          explanation: "Demand fulfillment ensures available supply meets customer requirements."
        }
      ]
    },
    {
      id: 3,
      title: "Logistics & Distribution Management",
      content: `# Module 3: Logistics & Distribution Management

Logistics is the backbone of supply chain execution. This module covers transportation, warehousing, distribution strategies, and logistics optimization.

## Transportation Management

**Transportation Modes:**

**Road Transportation:**
- **Advantages:** Door-to-door service, flexibility
- **Disadvantages:** Traffic delays, capacity limits
- **Best for:** Short distances, time-sensitive deliveries

**Rail Transportation:**
- **Advantages:** Low cost for bulk, fuel efficiency
- **Disadvantages:** Limited routes, slower transit
- **Best for:** Heavy bulk commodities, long distances

**Air Transportation:**
- **Advantages:** Fastest mode, global reach
- **Disadvantages:** Highest cost, weight limits
- **Best for:** High-value, time-critical goods

**Maritime Transportation:**
- **Advantages:** Lowest cost, huge capacity
- **Disadvantages:** Slowest mode, port dependencies
- **Best for:** International bulk shipments

**Pipeline Transportation:**
- **Advantages:** Continuous flow, low operating cost
- **Disadvantages:** Limited to liquids/gases, high fixed cost
- **Best for:** Oil, gas, chemical products

**Intermodal Transportation:**
- Combination of multiple modes
- Containerization standardization
- Improved efficiency and flexibility
- Global trade facilitation

## Warehousing & Distribution Centers

**Warehouse Functions:**
1. **Receiving:** Unloading and checking incoming goods
2. **Storage:** Systematic placement and organization
3. **Order Picking:** Selecting items for customer orders
4. **Packing:** Preparing orders for shipment
5. **Shipping:** Loading outbound vehicles

**Warehouse Design Considerations:**
- Layout optimization for flow efficiency
- Storage system selection (racks, shelves, automated)
- Material handling equipment choices
- Technology integration (WMS, automation)
- Safety and security features

**Distribution Center Types:**
- **Centralized DC:** Single location serving large area
- **Regional DC:** Multiple locations serving specific regions
- **Cross-Dock Facility:** Rapid transfer without storage
- **Fulfillment Center:** E-commerce order processing

## Inventory Deployment Strategies

**Inventory Positioning:**
- **Centralized Inventory:** Lower total inventory, slower response
- **Decentralized Inventory:** Higher total inventory, faster response
- **Hybrid Approach:** Strategic mix based on product characteristics

**Stocking Strategies:**
- **ABC Analysis:** Different service levels by item value
- **Safety Stock Calculation:** Buffer for demand and supply uncertainty
- **Cycle Stock:** Inventory for normal demand between replenishments
- **Seasonal Stock:** Additional inventory for peak periods

## Logistics Network Optimization

**Network Design Factors:**
- Customer location and service requirements
- Transportation cost structures
- Facility costs and capacities
- Inventory carrying costs
- Service level targets

**Optimization Techniques:**
- **Center of Gravity Method:** Mathematical location optimization
- **Network Modeling:** Computer simulation of alternatives
- **Cost-Service Trade-off Analysis:** Balancing competing objectives
- **Scenario Planning:** Evaluating different future conditions

**Last-Mile Delivery Strategies:**
- **Traditional Courier:** Standard delivery services
- **Crowdsourced Delivery:** Platform-based independent drivers
- **Locker/Pickup Points:** Customer collection locations
- **Autonomous Delivery:** Drone or robot delivery systems

## Technology in Logistics

**Warehouse Management Systems (WMS):**
- Inventory tracking and control
- Order processing automation
- Labor management optimization
- Performance reporting and analytics

**Transportation Management Systems (TMS):**
- Carrier selection and rate management
- Route optimization and planning
- Shipment tracking and visibility
- Freight audit and payment

**Global Trade Management (GTM):**
- Compliance with international regulations
- Customs documentation and clearance
- Trade agreement optimization
- Risk management for global operations

**Internet of Things (IoT) Applications:**
- Real-time tracking and monitoring
- Condition monitoring (temperature, humidity)
- Predictive maintenance for equipment
- Enhanced security and theft prevention

Effective logistics management balances cost efficiency with service level requirements across the supply chain.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are advantages of road transportation?",
          options: [
            "Door-to-door service and flexibility",
            "Lowest cost for long distances",
            "Highest capacity for bulk goods",
            "Fastest international delivery"
          ],
          correctAnswer: 0,
          explanation: "Road transport offers direct delivery and route flexibility for various shipment sizes."
        },
        {
          id: 2,
          question: "What is best for road transportation?",
          options: [
            "Short distances and time-sensitive deliveries",
            "International ocean crossings",
            "Bulk commodity long distances",
            "Liquid pipeline transport"
          ],
          correctAnswer: 0,
          explanation: "Road transport excels at short to medium distances with time-sensitive requirements."
        },
        {
          id: 3,
          question: "What are advantages of rail transportation?",
          options: [
            "Low cost for bulk and fuel efficiency",
            "Door-to-door delivery",
            "Fastest delivery speed",
            "Highest flexibility"
          ],
          correctAnswer: 0,
          explanation: "Rail offers cost efficiency for heavy bulk shipments over long distances."
        },
        {
          id: 4,
          question: "What is best for rail transportation?",
          options: [
            "Heavy bulk commodities and long distances",
            "Time-critical small packages",
            "International air freight",
            "Local deliveries"
          ],
          correctAnswer: 0,
          explanation: "Rail is optimal for heavy, bulk materials moving between fixed points over long distances."
        },
        {
          id: 5,
          question: "What are advantages of air transportation?",
          options: [
            "Fastest mode and global reach",
            "Lowest cost per kilogram",
            "Highest weight capacity",
            "Most environmentally friendly"
          ],
          correctAnswer: 0,
          explanation: "Air transport provides the fastest delivery times across global distances."
        },
        {
          id: 6,
          question: "What is best for air transportation?",
          options: [
            "High-value and time-critical goods",
            "Bulk construction materials",
            "Low-value commodities",
            "Local deliveries"
          ],
          correctAnswer: 0,
          explanation: "Air freight is cost-effective for high-value items where speed is critical."
        },
        {
          id: 7,
          question: "What are advantages of maritime transportation?",
          options: [
            "Lowest cost and huge capacity",
            "Fastest delivery times",
            "Door-to-door service",
            "Highest flexibility"
          ],
          correctAnswer: 0,
          explanation: "Ocean shipping offers the lowest cost per unit for large volume international shipments."
        },
        {
          id: 8,
          question: "What is best for maritime transportation?",
          options: [
            "International bulk shipments",
            "Time-sensitive medical supplies",
            "Local distribution",
            "Small parcel delivery"
          ],
          correctAnswer: 0,
          explanation: "Maritime transport is ideal for large volume shipments where cost matters more than speed."
        },
        {
          id: 9,
          question: "What is intermodal transportation?",
          options: [
            "Combination of multiple modes",
            "Only one transport mode",
            "No transportation",
            "Only air transportation"
          ],
          correctAnswer: 0,
          explanation: "Intermodal uses multiple transportation modes in a single shipment journey."
        },
        {
          id: 10,
          question: "What is receiving in warehousing?",
          options: [
            "Unloading and checking incoming goods",
            "Sending out orders",
            "Storing items long-term",
            "Picking customer orders"
          ],
          correctAnswer: 0,
          explanation: "Receiving involves verifying and documenting incoming shipments."
        },
        {
          id: 11,
          question: "What is order picking?",
          options: [
            "Selecting items for customer orders",
            "Receiving new inventory",
            "Long-term storage",
            "Loading trucks"
          ],
          correctAnswer: 0,
          explanation: "Order picking retrieves specific items from storage to fulfill customer orders."
        },
        {
          id: 12,
          question: "What is packing?",
          options: [
            "Preparing orders for shipment",
            "Receiving goods",
            "Storing inventory",
            "Transporting goods"
          ],
          correctAnswer: 0,
          explanation: "Packing involves placing picked items into appropriate shipping containers."
        },
        {
          id: 13,
          question: "What is centralized distribution?",
          options: [
            "Single location serving large area",
            "Multiple local facilities",
            "No distribution centers",
            "Direct from factory only"
          ],
          correctAnswer: 0,
          explanation: "Centralized distribution consolidates operations in one location for efficiency."
        },
        {
          id: 14,
          question: "What is cross-docking?",
          options: [
            "Rapid transfer without storage",
            "Long-term storage facility",
            "Manufacturing facility",
            "Retail store"
          ],
          correctAnswer: 0,
          explanation: "Cross-docking moves goods directly from inbound to outbound vehicles with minimal handling."
        },
        {
          id: 15,
          question: "What is centralized inventory?",
          options: [
            "Lower total inventory, slower response",
            "Higher inventory, faster response",
            "No inventory anywhere",
            "Inventory at all locations"
          ],
          correctAnswer: 0,
          explanation: "Centralized inventory reduces total stock but may increase delivery times."
        },
        {
          id: 16,
          question: "What is safety stock?",
          options: [
            "Buffer for demand and supply uncertainty",
            "Inventory for normal demand",
            "Seasonal inventory only",
            "Obsolete inventory"
          ],
          correctAnswer: 0,
          explanation: "Safety stock protects against unexpected demand spikes or supply disruptions."
        },
        {
          id: 17,
          question: "What is center of gravity method?",
          options: [
            "Mathematical location optimization",
            "Random location selection",
            "Customer voting on location",
            "Historical location copying"
          ],
          correctAnswer: 0,
          explanation: "Center of gravity calculates optimal facility locations based on weighted distances."
        },
        {
          id: 18,
          question: "What is last-mile delivery?",
          options: [
            "Final delivery to end customer",
            "Factory to warehouse transport",
            "Port to distribution center",
            "Supplier to manufacturer"
          ],
          correctAnswer: 0,
          explanation: "Last-mile delivery is the final and often most expensive leg of the supply chain."
        },
        {
          id: 19,
          question: "What is WMS?",
          options: [
            "Warehouse Management System",
            "Weight Measurement System",
            "Workforce Management Software",
            "Warehouse Maintenance Schedule"
          ],
          correctAnswer: 0,
          explanation: "WMS software manages warehouse operations including inventory and order fulfillment."
        },
        {
          id: 20,
          question: "What is TMS?",
          options: [
            "Transportation Management System",
            "Time Management Software",
            "Temperature Monitoring System",
            "Trade Management Software"
          ],
          correctAnswer: 0,
          explanation: "TMS software optimizes transportation planning, execution, and cost management."
        }
      ]
    },
    {
      id: 4,
      title: "Supply Chain Risk Management",
      content: `# Module 4: Supply Chain Risk Management

Modern supply chains face numerous risks that must be systematically managed. This module covers risk identification, assessment, mitigation, and resilience building.

## Types of Supply Chain Risks

**Operational Risks:**
- **Supply Risks:** Supplier failures, quality issues, capacity constraints
- **Demand Risks:** Forecast errors, demand volatility, bullwhip effect
- **Process Risks:** Production failures, quality defects, equipment breakdowns
- **Logistics Risks:** Transportation delays, port closures, customs issues

**Financial Risks:**
- **Cost Risks:** Price volatility, currency fluctuations, inflation
- **Credit Risks:** Customer/supplier bankruptcies, payment defaults
- **Investment Risks:** Capital investment failures, technology obsolescence

**Strategic Risks:**
- **Competitive Risks:** New competitors, substitute products
- **Reputational Risks:** Quality scandals, ethical violations, environmental incidents
- **Regulatory Risks:** Changing laws, trade restrictions, compliance failures

**External Risks:**
- **Natural Risks:** Earthquakes, floods, hurricanes, pandemics
- **Political Risks:** Government instability, trade wars, sanctions
- **Economic Risks:** Recessions, market crashes, inflation spikes
- **Technological Risks:** Cyber attacks, system failures, data breaches

## Risk Management Process

**Risk Identification:**
- **Process Mapping:** Visualizing supply chain flows and dependencies
- **Scenario Analysis:** Considering "what-if" situations
- **Stakeholder Consultation:** Input from suppliers, customers, employees
- **Historical Analysis:** Learning from past disruptions

**Risk Assessment:**
- **Probability Estimation:** Likelihood of risk occurrence
- **Impact Evaluation:** Potential consequences on operations
- **Risk Prioritization:** Focusing on high-probability, high-impact risks
- **Vulnerability Analysis:** Identifying weakest links in supply chain

**Risk Mitigation Strategies:**

**Risk Avoidance:**
- Eliminating risky activities or suppliers
- Exiting high-risk markets or products
- Implementing strict quality standards

**Risk Reduction:**
- **Diversification:** Multiple suppliers, transportation modes, markets
- **Redundancy:** Backup capacity, safety stock, alternative routes
- **Collaboration:** Closer relationships with key partners
- **Technology:** Advanced monitoring and early warning systems

**Risk Transfer:**
- **Insurance:** Property, business interruption, cargo insurance
- **Contracts:** Liability allocation, penalty clauses, force majeure
- **Outsourcing:** Transferring risky activities to specialists

**Risk Acceptance:**
- Accepting low-probability or low-impact risks
- Establishing contingency plans for accepted risks
- Budgeting for potential risk occurrences

## Supply Chain Resilience

**Resilience Building Strategies:**
- **Flexibility:** Ability to adapt to changing conditions
- **Visibility:** Real-time monitoring of supply chain status
- **Collaboration:** Strong relationships with supply partners
- **Redundancy:** Strategic backup capacity and inventory
- **Agility:** Quick response to unexpected events

**Business Continuity Planning:**
- Identifying critical operations and recovery priorities
- Developing alternative supply sources and routes
- Establishing crisis management teams and protocols
- Testing and updating plans regularly

## Digital Risk Management Tools

**Supply Chain Visibility Platforms:**
- Real-time tracking of shipments and inventory
- Exception alerting for delays or disruptions
- Performance monitoring and analytics
- End-to-end transparency across partners

**Predictive Analytics:**
- Early warning of potential disruptions
- Demand pattern analysis for risk identification
- Supplier performance prediction
- Scenario modeling for risk assessment

**Blockchain Technology:**
- Secure and transparent transaction recording
- Provenance tracking and authentication
- Smart contracts for automated compliance
- Reduced fraud and counterfeiting risks

**Artificial Intelligence Applications:**
- Pattern recognition for risk prediction
- Automated risk assessment and prioritization
- Dynamic rerouting and rescheduling
- Natural language processing for news monitoring

Effective risk management protects supply chain performance and creates competitive advantage through resilience.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are supply risks?",
          options: [
            "Supplier failures and quality issues",
            "Only transportation delays",
            "Only customer complaints",
            "Only employee turnover"
          ],
          correctAnswer: 0,
          explanation: "Supply risks involve problems with suppliers that disrupt material availability."
        },
        {
          id: 2,
          question: "What are demand risks?",
          options: [
            "Forecast errors and demand volatility",
            "Only supplier problems",
            "Only production issues",
            "Only transportation delays"
          ],
          correctAnswer: 0,
          explanation: "Demand risks involve unpredictable changes in customer demand patterns."
        },
        {
          id: 3,
          question: "What is bullwhip effect?",
          options: [
            "Demand distortion through supply chain",
            "Supplier consolidation",
            "Inventory reduction",
            "Cost reduction only"
          ],
          correctAnswer: 0,
          explanation: "Bullwhip effect amplifies demand fluctuations as they move up the supply chain."
        },
        {
          id: 4,
          question: "What are process risks?",
          options: [
            "Production failures and quality defects",
            "Only supplier issues",
            "Only customer issues",
            "Only weather events"
          ],
          correctAnswer: 0,
          explanation: "Process risks involve internal operational failures in manufacturing or services."
        },
        {
          id: 5,
          question: "What are cost risks?",
          options: [
            "Price volatility and currency fluctuations",
            "Only demand changes",
            "Only supplier failures",
            "Only quality issues"
          ],
          correctAnswer: 0,
          explanation: "Cost risks involve unexpected changes in input prices or exchange rates."
        },
        {
          id: 6,
          question: "What are competitive risks?",
          options: [
            "New competitors and substitute products",
            "Only natural disasters",
            "Only equipment failures",
            "Only employee issues"
          ],
          correctAnswer: 0,
          explanation: "Competitive risks involve market changes that threaten business viability."
        },
        {
          id: 7,
          question: "What are natural risks?",
          options: [
            "Earthquakes, floods, hurricanes",
            "Only price changes",
            "Only demand changes",
            "Only supplier changes"
          ],
          correctAnswer: 0,
          explanation: "Natural risks involve environmental events that disrupt operations."
        },
        {
          id: 8,
          question: "What are political risks?",
          options: [
            "Government instability and trade wars",
            "Only weather events",
            "Only equipment failures",
            "Only market changes"
          ],
          correctAnswer: 0,
          explanation: "Political risks involve government actions that affect business operations."
        },
        {
          id: 9,
          question: "What is risk identification?",
          options: [
            "Finding potential risks in supply chain",
            "Ignoring potential risks",
            "Only assessing known risks",
            "Only mitigating obvious risks"
          ],
          correctAnswer: 0,
          explanation: "Risk identification systematically discovers potential threats to supply chain operations."
        },
        {
          id: 10,
          question: "What is process mapping?",
          options: [
            "Visualizing supply chain flows and dependencies",
            "Only financial analysis",
            "Only supplier evaluation",
            "Only cost calculation"
          ],
          correctAnswer: 0,
          explanation: "Process mapping creates visual representations to identify risk points in flows."
        },
        {
          id: 11,
          question: "What is risk assessment?",
          options: [
            "Evaluating probability and impact of risks",
            "Ignoring risk impacts",
            "Only identifying risks",
            "Only mitigating all risks"
          ],
          correctAnswer: 0,
          explanation: "Risk assessment analyzes how likely risks are and how severe their impacts could be."
        },
        {
          id: 12,
          question: "What is risk prioritization?",
          options: [
            "Focusing on high-probability, high-impact risks",
            "Treating all risks equally",
            "Ignoring all risks",
            "Only focusing on minor risks"
          ],
          correctAnswer: 0,
          explanation: "Prioritization ensures resources address the most significant risks first."
        },
        {
          id: 13,
          question: "What is risk avoidance?",
          options: [
            "Eliminating risky activities or suppliers",
            "Accepting all risks",
            "Ignoring risks",
            "Only transferring risks"
          ],
          correctAnswer: 0,
          explanation: "Avoidance removes risk exposure by not engaging in risky activities."
        },
        {
          id: 14,
          question: "What is diversification?",
          options: [
            "Multiple suppliers and transportation modes",
            "Single source for everything",
            "No backup options",
            "Complete dependence"
          ],
          correctAnswer: 0,
          explanation: "Diversification spreads risk across multiple options to reduce dependency."
        },
        {
          id: 15,
          question: "What is redundancy?",
          options: [
            "Backup capacity and safety stock",
            "No backup systems",
            "Minimum capacity only",
            "Just-in-time everything"
          ],
          correctAnswer: 0,
          explanation: "Redundancy creates backup systems to maintain operations during disruptions."
        },
        {
          id: 16,
          question: "What is risk transfer?",
          options: [
            "Insurance and contractual allocation",
            "Keeping all risk internally",
            "Ignoring risk transfer",
            "Creating more risk"
          ],
          correctAnswer: 0,
          explanation: "Risk transfer shifts risk to other parties through insurance or contracts."
        },
        {
          id: 17,
          question: "What is risk acceptance?",
          options: [
            "Accepting low-probability or low-impact risks",
            "Accepting all risks",
            "Rejecting all risks",
            "Ignoring risk decisions"
          ],
          correctAnswer: 0,
          explanation: "Acceptance involves consciously deciding to bear certain risks when mitigation isn't worthwhile."
        },
        {
          id: 18,
          question: "What is supply chain resilience?",
          options: [
            "Ability to recover from disruptions",
            "Complete avoidance of disruptions",
            "Ignoring disruptions",
            "Accepting permanent damage"
          ],
          correctAnswer: 0,
          explanation: "Resilience enables quick recovery and adaptation following supply chain disruptions."
        },
        {
          id: 19,
          question: "What is supply chain visibility?",
          options: [
            "Real-time monitoring of supply chain status",
            "Complete blindness to operations",
            "Only financial visibility",
            "Only customer visibility"
          ],
          correctAnswer: 0,
          explanation: "Visibility provides real-time information about goods and information flows."
        },
        {
          id: 20,
          question: "What is business continuity planning?",
          options: [
            "Planning for operations during disruptions",
            "Only planning for growth",
            "No planning for problems",
            "Only financial planning"
          ],
          correctAnswer: 0,
          explanation: "Business continuity ensures critical operations can continue during and after disruptions."
        }
      ]
    },
    {
      id: 5,
      title: "Global Supply Chain Management",
      content: `# Module 5: Global Supply Chain Management

Global supply chains present unique challenges and opportunities. This module covers international trade, cultural considerations, and global supply chain optimization.

## Global Supply Chain Characteristics

**Key Differences from Domestic Supply Chains:**
- **Longer Distances:** Extended transportation times and distances
- **Multiple Borders:** Customs clearance and border formalities
- **Currency Differences:** Exchange rate risks and multiple currencies
- **Cultural Variations:** Communication styles and business practices
- **Legal Differences:** Varying regulations and compliance requirements
- **Infrastructure Variations:** Transportation and communication infrastructure

**Global Supply Chain Drivers:**

**Market Drivers:**
- Global customer base and demand patterns
- Local market requirements and preferences
- Competitive global marketplace
- Economies of scale opportunities

**Cost Drivers:**
- Labor cost differentials across countries
- Raw material and energy cost variations
- Exchange rate advantages
- Tax and tariff considerations

**Government Drivers:**
- Trade agreements and preferential tariffs
- Foreign trade zones and special economic zones
- Export/import regulations and restrictions
- Local content requirements

**Competitive Drivers:**
- Global competitor presence and strategies
- Need for global market access
- Technology access and innovation diffusion
- Global brand management requirements

## International Trade Compliance

**Key Trade Regulations:**
- **Customs Regulations:** Import/export documentation and procedures
- **Trade Agreements:** NAFTA, EU, ASEAN, and other regional agreements
- **Export Controls:** Restrictions on sensitive goods and technologies
- **Sanctions:** Country-specific trade restrictions
- **Product Standards:** Local safety and quality requirements

**Essential Documentation:**
- **Commercial Invoice:** Value and description of goods
- **Bill of Lading:** Transportation contract and receipt
- **Certificate of Origin:** Country of manufacture proof
- **Packing List:** Detailed contents of shipment
- **Insurance Certificate:** Proof of cargo insurance
- **Import/Export Licenses:** Required permits for regulated goods

**Customs Procedures:**
- **Harmonized System (HS) Codes:** Standardized product classification
- **Customs Valuation:** Determining dutiable value
- **Rules of Origin:** Determining product origin for tariffs
- **Customs Brokerage:** Professional assistance with clearance

## Global Logistics Strategies

**Incoterms (International Commercial Terms):**
- **EXW (Ex Works):** Buyer responsible for all transportation
- **FOB (Free on Board):** Seller delivers to port, buyer handles ocean freight
- **CIF (Cost, Insurance, Freight):** Seller pays to destination port
- **DDP (Delivered Duty Paid):** Seller delivers to buyer's location with duties paid

**Global Transportation Options:**
- **Ocean Container Shipping:** FCL (Full Container Load) vs LCL (Less than Container Load)
- **Air Freight:** Express vs standard service options
- **Multimodal Transport:** Combined sea-air or rail-sea options
- **Cross-Border Trucking:** Regional ground transportation

**Global Inventory Management:**
- **Centralized Global Inventory:** Single location serving worldwide
- **Regional Hubs:** Strategic locations serving continental regions
- **Local Market Inventories:** Country-specific stock for fast response
- **Transshipment Points:** Intermediate locations for consolidation

## Cultural and Relationship Management

**Cross-Cultural Considerations:**
- Communication style differences (direct vs indirect)
- Negotiation approaches and decision-making processes
- Relationship building expectations and timeframes
- Business etiquette and protocol variations

**Global Supplier Management:**
- Supplier qualification across different regions
- Performance monitoring across time zones and cultures
- Relationship building with international partners
- Risk assessment for international suppliers

**Global Team Management:**
- Virtual team coordination across time zones
- Cross-cultural communication and collaboration
- Global performance measurement and incentives
- Knowledge sharing across geographical boundaries

## Sourcing Strategies in Global Context

**Global Sourcing Approaches:**
- **Offshoring:** Moving production to lower-cost countries
- **Nearshoring:** Sourcing from geographically closer countries
- **Reshoring:** Bringing production back to home country
- **Bestshoring:** Selecting optimal location based on multiple factors

**Total Landed Cost Analysis:**
- Purchase price from supplier
- Transportation and logistics costs
- Tariffs, duties, and taxes
- Insurance and financing costs
- Inventory carrying costs
- Quality and reliability costs
- Risk mitigation costs

**Make vs Buy Decisions:**
- **Make:** Internal production for control and IP protection
- **Buy:** External sourcing for cost and flexibility
- **Hybrid:** Strategic combination based on capabilities

Global supply chain management requires balancing cost advantages with complexity management and risk mitigation.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What characterizes global supply chains?",
          options: [
            "Longer distances and multiple borders",
            "Only local operations",
            "Only domestic regulations",
            "Only single currency"
          ],
          correctAnswer: 0,
          explanation: "Global supply chains involve crossing international borders with extended logistics."
        },
        {
          id: 2,
          question: "What are market drivers in global supply chains?",
          options: [
            "Global customer base and demand patterns",
            "Only cost considerations",
            "Only government regulations",
            "Only transportation costs"
          ],
          correctAnswer: 0,
          explanation: "Market drivers involve accessing and serving customers in multiple countries."
        },
        {
          id: 3,
          question: "What are cost drivers?",
          options: [
            "Labor cost differentials across countries",
            "Only customer preferences",
            "Only government policies",
            "Only transportation modes"
          ],
          correctAnswer: 0,
          explanation: "Cost drivers leverage international differences in production and operating costs."
        },
        {
          id: 4,
          question: "What are government drivers?",
          options: [
            "Trade agreements and preferential tariffs",
            "Only customer demands",
            "Only competitor actions",
            "Only transportation options"
          ],
          correctAnswer: 0,
          explanation: "Government drivers include policies that encourage or restrict international trade."
        },
        {
          id: 5,
          question: "What is customs regulation?",
          options: [
            "Import/export documentation and procedures",
            "Only transportation scheduling",
            "Only inventory management",
            "Only supplier selection"
          ],
          correctAnswer: 0,
          explanation: "Customs regulations govern how goods cross international borders legally."
        },
        {
          id: 6,
          question: "What are trade agreements?",
          options: [
            "Regional agreements reducing trade barriers",
            "Only transportation contracts",
            "Only supplier agreements",
            "Only customer contracts"
          ],
          correctAnswer: 0,
          explanation: "Trade agreements establish rules and reduce barriers between participating countries."
        },
        {
          id: 7,
          question: "What is a commercial invoice?",
          options: [
            "Value and description of goods document",
            "Transportation contract only",
            "Insurance document only",
            "Payment receipt only"
          ],
          correctAnswer: 0,
          explanation: "Commercial invoices provide transaction details for customs valuation and payment."
        },
        {
          id: 8,
          question: "What is a bill of lading?",
          options: [
            "Transportation contract and receipt",
            "Only price quotation",
            "Only product specification",
            "Only payment confirmation"
          ],
          correctAnswer: 0,
          explanation: "Bills of lading serve as contracts, receipts, and sometimes title documents for shipments."
        },
        {
          id: 9,
          question: "What are HS codes?",
          options: [
            "Standardized product classification system",
            "Transportation route codes",
            "Supplier identification codes",
            "Customer account codes"
          ],
          correctAnswer: 0,
          explanation: "Harmonized System codes classify products for customs and statistical purposes worldwide."
        },
        {
          id: 10,
          question: "What is EXW Incoterm?",
          options: [
            "Buyer responsible for all transportation",
            "Seller delivers to destination",
            "Seller pays all costs",
            "Buyer has no responsibilities"
          ],
          correctAnswer: 0,
          explanation: "EXW means the seller makes goods available at their premises, with buyer handling all transportation."
        },
        {
          id: 11,
          question: "What is FOB Incoterm?",
          options: [
            "Seller delivers to port, buyer handles ocean freight",
            "Seller delivers to final destination",
            "Buyer picks up at seller's factory",
            "Seller pays all transportation"
          ],
          correctAnswer: 0,
          explanation: "FOB means seller delivers goods onboard ship at origin port, with buyer responsible for ocean transport."
        },
        {
          id: 12,
          question: "What is CIF Incoterm?",
          options: [
            "Seller pays to destination port",
            "Buyer pays all transportation",
            "Seller delivers to buyer's warehouse",
            "Only land transportation included"
          ],
          correctAnswer: 0,
          explanation: "CIF means seller pays cost, insurance, and freight to destination port."
        },
        {
          id: 13,
          question: "What is DDP Incoterm?",
          options: [
            "Seller delivers to buyer's location with duties paid",
            "Buyer handles all import formalities",
            "Seller only delivers to port",
            "Buyer pays all duties"
          ],
          correctAnswer: 0,
          explanation: "DDP means seller handles all costs and risks to deliver goods to buyer's premises."
        },
        {
          id: 14,
          question: "What is FCL shipping?",
          options: [
            "Full Container Load shipping",
            "Less than Container Load",
            "Air freight only",
            "Truckload only"
          ],
          correctAnswer: 0,
          explanation: "FCL involves shipping a full container dedicated to one shipper's goods."
        },
        {
          id: 15,
          question: "What is LCL shipping?",
          options: [
            "Less than Container Load shipping",
            "Full Container Load",
            "Air freight consolidation",
            "Truckload shipping"
          ],
          correctAnswer: 0,
          explanation: "LCL consolidates multiple shippers' goods in one container to share costs."
        },
        {
          id: 16,
          question: "What is centralized global inventory?",
          options: [
            "Single location serving worldwide",
            "Inventory in every country",
            "No inventory strategy",
            "Customer-held inventory"
          ],
          correctAnswer: 0,
          explanation: "Centralized inventory consolidates stock in one location for global distribution."
        },
        {
          id: 17,
          question: "What are regional hubs?",
          options: [
            "Strategic locations serving continental regions",
            "Every local market warehouse",
            "Only manufacturing facilities",
            "Only supplier locations"
          ],
          correctAnswer: 0,
          explanation: "Regional hubs serve multiple countries within a geographical region efficiently."
        },
        {
          id: 18,
          question: "What is offshoring?",
          options: [
            "Moving production to lower-cost countries",
            "Bringing production back home",
            "Sourcing from nearby countries",
            "Local production only"
          ],
          correctAnswer: 0,
          explanation: "Offshoring involves relocating production to countries with cost advantages."
        },
        {
          id: 19,
          question: "What is nearshoring?",
          options: [
            "Sourcing from geographically closer countries",
            "Moving production far away",
            "Only domestic sourcing",
            "Random country selection"
          ],
          correctAnswer: 0,
          explanation: "Nearshoring balances cost advantages with proximity for faster response times."
        },
        {
          id: 20,
          question: "What is total landed cost?",
          options: [
            "All costs to get product to final destination",
            "Only purchase price",
            "Only transportation cost",
            "Only customs duties"
          ],
          correctAnswer: 0,
          explanation: "Total landed cost includes all expenses from supplier to final delivery point."
        }
      ]
    },
    {
      id: 6,
      title: "Sustainable Supply Chain Management",
      content: `# Module 6: Sustainable Supply Chain Management

Sustainability has become a critical dimension of supply chain management. This module covers environmental, social, and economic sustainability practices across supply chains.

## Triple Bottom Line Approach

**Three Pillars of Sustainability:**

**Environmental Sustainability:**
- **Resource Efficiency:** Minimizing energy, water, and material consumption
- **Waste Reduction:** Reducing, reusing, and recycling materials
- **Emissions Management:** Lowering greenhouse gas and pollutant emissions
- **Biodiversity Protection:** Preserving ecosystems and natural habitats

**Social Sustainability:**
- **Labor Practices:** Fair wages, safe working conditions, no child labor
- **Community Development:** Supporting local communities and economies
- **Human Rights:** Respecting fundamental rights throughout supply chain
- **Diversity & Inclusion:** Promoting equal opportunities and representation

**Economic Sustainability:**
- **Long-term Profitability:** Sustainable business models and practices
- **Supply Chain Resilience:** Building durable and adaptable operations
- **Stakeholder Value:** Creating value for all stakeholders, not just shareholders
- **Innovation Investment:** Developing sustainable products and processes

## Green Supply Chain Practices

**Green Procurement:**
- **Supplier Environmental Assessment:** Evaluating suppliers' environmental performance
- **Sustainable Material Sourcing:** Using recycled, renewable, or certified materials
- **Eco-label Requirements:** Specifying environmental standards for purchased items
- **Local Sourcing:** Reducing transportation emissions through proximity

**Green Manufacturing:**
- **Energy Efficiency:** Optimizing production processes for lower energy use
- **Water Conservation:** Reducing and recycling water in manufacturing
- **Waste Minimization:** Implementing lean manufacturing and circular approaches
- **Clean Production:** Using less hazardous materials and processes

**Green Logistics:**
- **Transportation Optimization:** Route planning for fuel efficiency
- **Modal Shift:** Using more environmentally friendly transport modes
- **Vehicle Efficiency:** Maintaining and upgrading to efficient vehicles
- **Packaging Reduction:** Minimizing packaging materials and using recyclables

**Reverse Logistics & Circular Economy:**
- **Product Take-back:** Collecting used products for reuse or recycling
- **Remanufacturing:** Refurbishing products to like-new condition
- **Component Recovery:** Extracting valuable materials from end-of-life products
- **Waste-to-Resource:** Converting waste materials into new resources

## Social Responsibility in Supply Chains

**Ethical Sourcing Standards:**
- **Fair Trade Certification:** Ensuring fair prices and conditions for producers
- **Conflict Minerals Avoidance:** Sourcing minerals from conflict-free areas
- **Living Wage Assurance:** Ensuring workers earn sufficient income
- **Safe Working Conditions:** Meeting occupational health and safety standards

**Supply Chain Transparency:**
- **Traceability Systems:** Tracking products from origin to consumer
- **Supplier Audits:** Regular assessment of supplier social performance
- **Public Reporting:** Disclosing sustainability performance and progress
- **Stakeholder Engagement:** Involving communities and NGOs in oversight

**Human Rights Due Diligence:**
- **Risk Assessment:** Identifying human rights risks in operations and supply chain
- **Impact Prevention:** Implementing measures to avoid negative impacts
- **Remediation Processes:** Addressing and correcting human rights violations
- **Continuous Improvement:** Regularly enhancing human rights performance

## Sustainability Measurement & Reporting

**Key Performance Indicators (KPIs):**

**Environmental KPIs:**
- Carbon footprint (Scope 1, 2, and 3 emissions)
- Energy consumption and renewable energy percentage
- Water usage and recycling rates
- Waste generation and diversion rates
- Material efficiency and recycling content

**Social KPIs:**
- Workplace injury rates and safety performance
- Employee turnover and satisfaction levels
- Training hours and skill development
- Diversity metrics and inclusion indicators
- Community investment and impact

**Economic KPIs:**
- Cost savings from sustainability initiatives
- Revenue from sustainable products/services
- Supply chain cost stability and resilience
- Innovation investment and returns
- Stakeholder satisfaction measures

**Sustainability Reporting Frameworks:**
- **Global Reporting Initiative (GRI):** Comprehensive sustainability reporting
- **Sustainability Accounting Standards Board (SASB):** Industry-specific standards
- **Task Force on Climate-related Financial Disclosures (TCFD):** Climate risk reporting
- **United Nations Sustainable Development Goals (SDGs):** Global goal alignment

## Sustainable Supply Chain Strategy

**Integration Approaches:**
- **Embedding Sustainability:** Incorporating into all supply chain decisions
- **Life Cycle Thinking:** Considering impacts from raw materials to end-of-life
- **Stakeholder Collaboration:** Working with partners on shared sustainability goals
- **Continuous Improvement:** Regular assessment and enhancement of practices

**Business Case for Sustainability:**
- **Cost Reduction:** Energy, waste, and material efficiency savings
- **Risk Mitigation:** Reducing regulatory, reputational, and supply risks
- **Revenue Growth:** Meeting customer demand for sustainable products
- **Talent Attraction:** Attracting and retaining employees who value sustainability
- **Innovation Driver:** Stimulating new products and process improvements

**Challenges and Enablers:**
- **Measurement Challenges:** Quantifying sustainability impacts and benefits
- **Cost Considerations:** Balancing short-term costs with long-term benefits
- **Supplier Engagement:** Encouraging sustainability throughout supply chain
- **Technology Enablement:** Using digital tools for monitoring and improvement
- **Leadership Commitment:** Executive support and organizational culture

Sustainable supply chain management creates value while protecting people and the planet for future generations.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What are the three pillars of sustainability?",
          options: [
            "Environmental, social, and economic",
            "Only environmental",
            "Only economic",
            "Only social"
          ],
          correctAnswer: 0,
          explanation: "The triple bottom line includes environmental protection, social equity, and economic prosperity."
        },
        {
          id: 2,
          question: "What is environmental sustainability?",
          options: [
            "Resource efficiency and waste reduction",
            "Only profit maximization",
            "Only social welfare",
            "Only economic growth"
          ],
          correctAnswer: 0,
          explanation: "Environmental sustainability focuses on minimizing ecological impact and resource use."
        },
        {
          id: 3,
          question: "What is social sustainability?",
          options: [
            "Fair labor practices and community development",
            "Only environmental protection",
            "Only cost reduction",
            "Only profit growth"
          ],
          correctAnswer: 0,
          explanation: "Social sustainability addresses fair treatment of people and community well-being."
        },
        {
          id: 4,
          question: "What is economic sustainability?",
          options: [
            "Long-term profitability and resilience",
            "Only short-term profits",
            "Only environmental costs",
            "Only social programs"
          ],
          correctAnswer: 0,
          explanation: "Economic sustainability ensures business viability while supporting broader economic health."
        },
        {
          id: 5,
          question: "What is green procurement?",
          options: [
            "Supplier environmental assessment",
            "Only lowest cost purchasing",
            "Only fastest delivery",
            "Only local purchasing"
          ],
          correctAnswer: 0,
          explanation: "Green procurement considers environmental factors when selecting suppliers and materials."
        },
        {
          id: 6,
          question: "What is sustainable material sourcing?",
          options: [
            "Using recycled, renewable, or certified materials",
            "Using cheapest materials only",
            "Using local materials only",
            "Using imported materials only"
          ],
          correctAnswer: 0,
          explanation: "Sustainable sourcing prioritizes materials with lower environmental and social impacts."
        },
        {
          id: 7,
          question: "What is energy efficiency in manufacturing?",
          options: [
            "Optimizing processes for lower energy use",
            "Using maximum energy always",
            "Ignoring energy consumption",
            "Only using fossil fuels"
          ],
          correctAnswer: 0,
          explanation: "Energy efficiency reduces energy consumption while maintaining or improving output."
        },
        {
          id: 8,
          question: "What is water conservation?",
          options: [
            "Reducing and recycling water use",
            "Using unlimited water",
            "Ignoring water usage",
            "Only using fresh water"
          ],
          correctAnswer: 0,
          explanation: "Water conservation minimizes water consumption and promotes recycling in operations."
        },
        {
          id: 9,
          question: "What is transportation optimization?",
          options: [
            "Route planning for fuel efficiency",
            "Random route selection",
            "Longest route selection",
            "Ignoring fuel consumption"
          ],
          correctAnswer: 0,
          explanation: "Transportation optimization reduces fuel use and emissions through efficient routing."
        },
        {
          id: 10,
          question: "What is modal shift?",
          options: [
            "Using more environmentally friendly transport modes",
            "Only using trucks",
            "Only using air freight",
            "No mode changes"
          ],
          correctAnswer: 0,
          explanation: "Modal shift involves choosing transport modes with lower environmental impacts."
        },
        {
          id: 11,
          question: "What is reverse logistics?",
          options: [
            "Product take-back and material recovery",
            "Only forward distribution",
            "Only manufacturing",
            "Only retail sales"
          ],
          correctAnswer: 0,
          explanation: "Reverse logistics manages the flow of products back from consumers for reuse or recycling."
        },
        {
          id: 12,
          question: "What is circular economy?",
          options: [
            "Waste-to-resource and product life extension",
            "Only linear production",
            "Only disposal focus",
            "Only new material use"
          ],
          correctAnswer: 0,
          explanation: "Circular economy keeps materials in use through reuse, repair, and recycling."
        },
        {
          id: 13,
          question: "What is fair trade certification?",
          options: [
            "Ensuring fair prices and conditions for producers",
            "Only lowest prices",
            "Only fastest production",
            "Only largest volumes"
          ],
          correctAnswer: 0,
          explanation: "Fair trade certification guarantees equitable trading conditions for disadvantaged producers."
        },
        {
          id: 14,
          question: "What are conflict minerals?",
          options: [
            "Minerals from conflict-affected areas",
            "All minerals equally",
            "Only recycled minerals",
            "Only domestic minerals"
          ],
          correctAnswer: 0,
          explanation: "Conflict minerals may finance armed conflict and human rights abuses in mining regions."
        },
        {
          id: 15,
          question: "What is supply chain transparency?",
          options: [
            "Tracking products from origin to consumer",
            "Hiding supply chain information",
            "Only financial transparency",
            "Only internal transparency"
          ],
          correctAnswer: 0,
          explanation: "Transparency provides visibility into supply chain practices and impacts."
        },
        {
          id: 16,
          question: "What is carbon footprint?",
          options: [
            "Greenhouse gas emissions measurement",
            "Only water usage",
            "Only energy consumption",
            "Only waste generation"
          ],
          correctAnswer: 0,
          explanation: "Carbon footprint quantifies total greenhouse gas emissions from activities."
        },
        {
          id: 17,
          question: "What are Scope 1 emissions?",
          options: [
            "Direct emissions from owned sources",
            "Indirect energy emissions",
            "Other indirect emissions",
            "Only customer emissions"
          ],
          correctAnswer: 0,
          explanation: "Scope 1 covers direct emissions from company facilities and vehicles."
        },
        {
          id: 18,
          question: "What is GRI?",
          options: [
            "Global Reporting Initiative framework",
            "Only financial reporting",
            "Only environmental reporting",
            "Only social reporting"
          ],
          correctAnswer: 0,
          explanation: "GRI provides comprehensive standards for sustainability reporting."
        },
        {
          id: 19,
          question: "What are SDGs?",
          options: [
            "United Nations Sustainable Development Goals",
            "Only corporate goals",
            "Only environmental goals",
            "Only economic goals"
          ],
          correctAnswer: 0,
          explanation: "SDGs are 17 global goals addressing economic, social, and environmental challenges."
        },
        {
          id: 20,
          question: "What is life cycle thinking?",
          options: [
            "Considering impacts from materials to end-of-life",
            "Only manufacturing phase",
            "Only use phase",
            "Only disposal phase"
          ],
          correctAnswer: 0,
          explanation: "Life cycle thinking evaluates environmental impacts across a product's entire lifespan."
        }
      ]
    }
  ],
  finalExam: {
    title: "Supply Chain Management Diploma Final Exam",
    description: "Comprehensive examination covering all 6 modules of advanced supply chain management principles, strategies, logistics, risk management, global operations, and sustainability practices.",
    passingScore: 75,
    questions: [
      {
        id: 1,
        question: "What does a supply chain encompass?",
        options: [
          "All activities from raw materials to final consumer",
          "Only manufacturing processes",
          "Only transportation activities",
          "Only retail sales"
        ],
        correctAnswer: 0,
        explanation: "Supply chains include upstream suppliers, internal operations, and downstream distribution.",
        module: 1
      },
      {
        id: 2,
        question: "What are upstream activities?",
        options: [
          "Suppliers and raw materials",
          "Customer delivery only",
          "Retail operations only",
          "Marketing activities"
        ],
        correctAnswer: 0,
        explanation: "Upstream refers to activities closer to raw material sources and suppliers.",
        module: 1
      },
      {
        id: 3,
        question: "What characterizes efficiency-focused strategy?",
        options: [
          "Emphasis on cost reduction",
          "Emphasis on maximum speed",
          "Emphasis on flexibility",
          "Emphasis on customization"
        ],
        correctAnswer: 0,
        explanation: "Efficiency strategies prioritize minimizing costs through standardization and scale.",
        module: 1
      },
      {
        id: 4,
        question: "What is the first step in demand planning?",
        options: [
          "Data collection",
          "Statistical forecasting",
          "Collaborative input",
          "Plan execution"
        ],
        correctAnswer: 0,
        explanation: "Data collection gathers historical information needed for accurate forecasting.",
        module: 2
      },
      {
        id: 5,
        question: "What is qualitative forecasting?",
        options: [
          "Based on opinions and judgments",
          "Based only on mathematical models",
          "Based only on historical data",
          "Based only on computer algorithms"
        ],
        correctAnswer: 0,
        explanation: "Qualitative methods use human judgment and experience rather than numerical data.",
        module: 2
      },
      {
        id: 6,
        question: "What are moving averages?",
        options: [
          "Simple average of recent periods",
          "Complex weighted calculations",
          "Future predictions only",
          "Customer opinions only"
        ],
        correctAnswer: 0,
        explanation: "Moving averages smooth out short-term fluctuations to identify trends.",
        module: 2
      },
      {
        id: 7,
        question: "What are advantages of road transportation?",
        options: [
          "Door-to-door service and flexibility",
          "Lowest cost for long distances",
          "Highest capacity for bulk goods",
          "Fastest international delivery"
        ],
        correctAnswer: 0,
        explanation: "Road transport offers direct delivery and route flexibility for various shipment sizes.",
        module: 3
      },
      {
        id: 8,
        question: "What are advantages of rail transportation?",
        options: [
          "Low cost for bulk and fuel efficiency",
          "Door-to-door delivery",
          "Fastest delivery speed",
          "Highest flexibility"
        ],
        correctAnswer: 0,
        explanation: "Rail offers cost efficiency for heavy bulk shipments over long distances.",
        module: 3
      },
      {
        id: 9,
        question: "What is intermodal transportation?",
        options: [
          "Combination of multiple modes",
          "Only one transport mode",
          "No transportation",
          "Only air transportation"
        ],
        correctAnswer: 0,
        explanation: "Intermodal uses multiple transportation modes in a single shipment journey.",
        module: 3
      },
      {
        id: 10,
        question: "What are supply risks?",
        options: [
          "Supplier failures and quality issues",
          "Only transportation delays",
          "Only customer complaints",
          "Only employee turnover"
        ],
        correctAnswer: 0,
        explanation: "Supply risks involve problems with suppliers that disrupt material availability.",
        module: 4
      },
      {
        id: 11,
        question: "What is risk identification?",
        options: [
          "Finding potential risks in supply chain",
          "Ignoring potential risks",
          "Only assessing known risks",
          "Only mitigating obvious risks"
        ],
        correctAnswer: 0,
        explanation: "Risk identification systematically discovers potential threats to supply chain operations.",
        module: 4
      },
      {
        id: 12,
        question: "What is diversification?",
        options: [
          "Multiple suppliers and transportation modes",
          "Single source for everything",
          "No backup options",
          "Complete dependence"
        ],
        correctAnswer: 0,
        explanation: "Diversification spreads risk across multiple options to reduce dependency.",
        module: 4
      },
      {
        id: 13,
        question: "What characterizes global supply chains?",
        options: [
          "Longer distances and multiple borders",
          "Only local operations",
          "Only domestic regulations",
          "Only single currency"
        ],
        correctAnswer: 0,
        explanation: "Global supply chains involve crossing international borders with extended logistics.",
        module: 5
      },
      {
        id: 14,
        question: "What are HS codes?",
        options: [
          "Standardized product classification system",
          "Transportation route codes",
          "Supplier identification codes",
          "Customer account codes"
        ],
        correctAnswer: 0,
        explanation: "Harmonized System codes classify products for customs and statistical purposes worldwide.",
        module: 5
      },
      {
        id: 15,
        question: "What is FOB Incoterm?",
        options: [
          "Seller delivers to port, buyer handles ocean freight",
          "Seller delivers to final destination",
          "Buyer picks up at seller's factory",
          "Seller pays all transportation"
        ],
        correctAnswer: 0,
        explanation: "FOB means seller delivers goods onboard ship at origin port.",
        module: 5
      },
      {
        id: 16,
        question: "What are the three pillars of sustainability?",
        options: [
          "Environmental, social, and economic",
          "Only environmental",
          "Only economic",
          "Only social"
        ],
        correctAnswer: 0,
        explanation: "The triple bottom line includes environmental protection, social equity, and economic prosperity.",
        module: 6
      },
      {
        id: 17,
        question: "What is green procurement?",
        options: [
          "Supplier environmental assessment",
          "Only lowest cost purchasing",
          "Only fastest delivery",
          "Only local purchasing"
        ],
        correctAnswer: 0,
        explanation: "Green procurement considers environmental factors when selecting suppliers and materials.",
        module: 6
      },
      {
        id: 18,
        question: "What is reverse logistics?",
        options: [
          "Product take-back and material recovery",
          "Only forward distribution",
          "Only manufacturing",
          "Only retail sales"
        ],
        correctAnswer: 0,
        explanation: "Reverse logistics manages the flow of products back from consumers for reuse or recycling.",
        module: 6
      },
      {
        id: 19,
        question: "What is vertical integration?",
        options: [
          "Owning multiple stages of supply chain",
          "Only owning one stage",
          "No ownership of stages",
          "Selling all stages"
        ],
        correctAnswer: 0,
        explanation: "Vertical integration involves controlling multiple consecutive stages of the supply chain.",
        module: 1
      },
      {
        id: 20,
        question: "What is quantitative forecasting?",
        options: [
          "Based on mathematical analysis",
          "Based only on opinions",
          "Based only on guesses",
          "Based only on intuition"
        ],
        correctAnswer: 0,
        explanation: "Quantitative methods analyze numerical data using statistical techniques.",
        module: 2
      },
      {
        id: 21,
        question: "What is WMS?",
        options: [
          "Warehouse Management System",
          "Weight Measurement System",
          "Workforce Management Software",
          "Warehouse Maintenance Schedule"
        ],
        correctAnswer: 0,
        explanation: "WMS software manages warehouse operations including inventory and order fulfillment.",
        module: 3
      },
      {
        id: 22,
        question: "What is supply chain resilience?",
        options: [
          "Ability to recover from disruptions",
          "Complete avoidance of disruptions",
          "Ignoring disruptions",
          "Accepting permanent damage"
        ],
        correctAnswer: 0,
        explanation: "Resilience enables quick recovery and adaptation following supply chain disruptions.",
        module: 4
      },
      {
        id: 23,
        question: "What is total landed cost?",
        options: [
          "All costs to get product to final destination",
          "Only purchase price",
          "Only transportation cost",
          "Only customs duties"
        ],
        correctAnswer: 0,
        explanation: "Total landed cost includes all expenses from supplier to final delivery point.",
        module: 5
      },
      {
        id: 24,
        question: "What is circular economy?",
        options: [
          "Waste-to-resource and product life extension",
          "Only linear production",
          "Only disposal focus",
          "Only new material use"
        ],
        correctAnswer: 0,
        explanation: "Circular economy keeps materials in use through reuse, repair, and recycling.",
        module: 6
      },
      {
        id: 25,
        question: "What are product flows?",
        options: [
          "Physical movement of goods",
          "Financial transactions",
          "Information exchange",
          "Return processes"
        ],
        correctAnswer: 0,
        explanation: "Product flow involves the actual physical transportation and handling of materials.",
        module: 1
      },
      {
        id: 26,
        question: "What is S&OP?",
        options: [
          "Sales & Operations Planning",
          "Stock & Order Processing",
          "Supply & Output Planning",
          "Sales & Order Processing"
        ],
        correctAnswer: 0,
        explanation: "S&OP aligns demand plans with supply capabilities across the organization.",
        module: 2
      },
      {
        id: 27,
        question: "What is best for air transportation?",
        options: [
          "High-value and time-critical goods",
          "Bulk construction materials",
          "Low-value commodities",
          "Local deliveries"
        ],
        correctAnswer: 0,
        explanation: "Air freight is cost-effective for high-value items where speed is critical.",
        module: 3
      },
      {
        id: 28,
        question: "What is risk assessment?",
        options: [
          "Evaluating probability and impact of risks",
          "Ignoring risk impacts",
          "Only identifying risks",
          "Only mitigating all risks"
        ],
        correctAnswer: 0,
        explanation: "Risk assessment analyzes how likely risks are and how severe their impacts could be.",
        module: 4
      },
      {
        id: 29,
        question: "What is offshoring?",
        options: [
          "Moving production to lower-cost countries",
          "Bringing production back home",
          "Sourcing from nearby countries",
          "Local production only"
        ],
        correctAnswer: 0,
        explanation: "Offshoring involves relocating production to countries with cost advantages.",
        module: 5
      },
      {
        id: 30,
        question: "What are SDGs?",
        options: [
          "United Nations Sustainable Development Goals",
          "Only corporate goals",
          "Only environmental goals",
          "Only economic goals"
        ],
        correctAnswer: 0,
        explanation: "SDGs are 17 global goals addressing economic, social, and environmental challenges.",
        module: 6
      },
      {
        id: 31,
        question: "What is virtual integration?",
        options: [
          "Partnering without ownership",
          "Owning everything",
          "No partnerships",
          "Temporary arrangements"
        ],
        correctAnswer: 0,
        explanation: "Virtual integration achieves coordination through partnerships rather than ownership.",
        module: 1
      },
      {
        id: 32,
        question: "What is exponential smoothing?",
        options: [
          "Weighted average favoring recent data",
          "Equal weighting of all data",
          "Ignoring recent data",
          "Only using oldest data"
        ],
        correctAnswer: 0,
        explanation: "Exponential smoothing gives more weight to recent observations in forecasting.",
        module: 2
      },
      {
        id: 33,
        question: "What is centralized inventory?",
        options: [
          "Lower total inventory, slower response",
          "Higher inventory, faster response",
          "No inventory anywhere",
          "Inventory at all locations"
        ],
        correctAnswer: 0,
        explanation: "Centralized inventory reduces total stock but may increase delivery times.",
        module: 3
      },
      {
        id: 34,
        question: "What is risk avoidance?",
        options: [
          "Eliminating risky activities or suppliers",
          "Accepting all risks",
          "Ignoring risks",
          "Only transferring risks"
        ],
        correctAnswer: 0,
        explanation: "Avoidance removes risk exposure by not engaging in risky activities.",
        module: 4
      },
      {
        id: 35,
        question: "What is nearshoring?",
        options: [
          "Sourcing from geographically closer countries",
          "Moving production far away",
          "Only domestic sourcing",
          "Random country selection"
        ],
        correctAnswer: 0,
        explanation: "Nearshoring balances cost advantages with proximity for faster response times.",
        module: 5
      },
      {
        id: 36,
        question: "What is carbon footprint?",
        options: [
          "Greenhouse gas emissions measurement",
          "Only water usage",
          "Only energy consumption",
          "Only waste generation"
        ],
        correctAnswer: 0,
        explanation: "Carbon footprint quantifies total greenhouse gas emissions from activities.",
        module: 6
      },
      {
        id: 37,
        question: "What is forward integration?",
        options: [
          "Moving toward customers",
          "Moving toward suppliers",
          "Staying in same stage",
          "Leaving supply chain"
        ],
        correctAnswer: 0,
        explanation: "Forward integration extends control toward distribution and customer-facing activities.",
        module: 1
      },
      {
        id: 38,
        question: "What is demand shaping?",
        options: [
          "Influencing customer demand patterns",
          "Only accepting all demand",
          "Only rejecting demand",
          "Ignoring demand patterns"
        ],
        correctAnswer: 0,
        explanation: "Demand shaping uses marketing and pricing to influence when and how much customers buy.",
        module: 2
      },
      {
        id: 39,
        question: "What is last-mile delivery?",
        options: [
          "Final delivery to end customer",
          "Factory to warehouse transport",
          "Port to distribution center",
          "Supplier to manufacturer"
        ],
        correctAnswer: 0,
        explanation: "Last-mile delivery is the final and often most expensive leg of the supply chain.",
        module: 3
      },
      {
        id: 40,
        question: "What is business continuity planning?",
        options: [
          "Planning for operations during disruptions",
          "Only planning for growth",
          "No planning for problems",
          "Only financial planning"
        ],
        correctAnswer: 0,
        explanation: "Business continuity ensures critical operations can continue during and after disruptions.",
        module: 4
      }
    ]
  }
};

export default supplyChainManagementDiploma;
