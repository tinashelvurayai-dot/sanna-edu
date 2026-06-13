// Portfolio Management (Diploma) Course Content
// Complete with 6 modules, quizzes, and final exam
// This is the advanced course following Investment Banking Certificate

export const portfolioManagementDiploma = {
  id: "portfolio-management-diploma",
  title: "Portfolio Management (Diploma)",
  description: "Advanced course covering portfolio construction, asset allocation, risk management, performance measurement, and investment strategies for institutional and individual portfolios. Builds on Investment Banking Certificate knowledge.",
  duration: "8 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  icon: "📈",
  badge: "Diploma",
  prerequisite: "investment-banking-certificate",
  
  // Learning Path
  learningPath: {
    certificate: "Investment Banking Fundamentals",
    diploma: "Portfolio Management (Advanced)",
    progression: [
      "Investment Banking Certificate → Portfolio Management Diploma",
      "Specialization: Risk Management",
      "Specialization: Alternative Investments",
      "Career Path: Portfolio Manager / Chief Investment Officer"
    ]
  },
  
  // Course Modules
  modules: [
    {
      id: 1,
      title: "Modern Portfolio Theory",
      completed: false,
      content: `
# Module 1: Modern Portfolio Theory

Modern Portfolio Theory (MPT) is the foundation of modern portfolio management. Developed by Harry Markowitz in the 1950s, MPT revolutionized how investors think about risk and return by introducing the concept of diversification and efficient portfolios.

## The Core Insight of MPT
The key insight of Modern Portfolio Theory is that assets should not be selected individually based solely on their expected returns. Instead, portfolios should be constructed by considering how assets interact with each other. The risk of a portfolio depends not just on the risk of individual assets, but on how their returns move together.

MPT introduced two fundamental concepts:
- **Diversification**: Reducing risk by combining assets that don't move perfectly together
- **Efficient Frontier**: The set of portfolios offering the highest expected return for a given level of risk

## Risk and Return Trade-off
Investors face a fundamental trade-off between risk and expected return:

**Expected Return**: The average return an investor anticipates from an investment. This is typically estimated from historical returns or forward-looking projections.

**Risk**: Measured as the variability or uncertainty of returns. In MPT, risk is quantified as the standard deviation of returns. Higher risk investments should offer higher expected returns to compensate investors.

**Risk Aversion**: Most investors are risk-averse, meaning they prefer less risk for the same expected return. They require higher expected returns to accept higher risk.

## Diversification Benefits
Diversification reduces portfolio risk without necessarily reducing expected return. This works because:

**Correlation**: Statistical measure of how two assets move relative to each other. Correlation ranges from -1 (perfectly opposite movements) to +1 (perfectly aligned movements).

**Imperfect Correlation**: When assets don't move perfectly together (correlation < 1), combining them reduces overall portfolio volatility.

**Systematic vs. Unsystematic Risk**:
- **Systematic Risk**: Market risk that affects all assets (economic conditions, interest rates, inflation). Cannot be diversified away.
- **Unsystematic Risk**: Specific risk unique to individual assets or sectors (management decisions, competitive pressures, regulatory changes). Can be reduced through diversification.

## The Efficient Frontier
The efficient frontier represents the set of optimal portfolios:

**Efficient Portfolios**: Portfolios that offer the highest expected return for a given level of risk, or the lowest risk for a given expected return.

**Inefficient Portfolios**: Portfolios that could achieve higher returns for the same risk, or lower risk for the same returns.

**Optimal Portfolio Selection**: Investors choose a portfolio on the efficient frontier based on their risk tolerance. More risk-averse investors choose lower-risk portfolios, while less risk-averse investors choose higher-risk portfolios.

## The Capital Market Line (CML)
When a risk-free asset (like Treasury bills) is introduced, the efficient frontier changes:

**Risk-Free Asset**: An asset with zero risk and known return. In practice, short-term government securities approximate risk-free assets.

**Combining Risky and Risk-Free Assets**: Investors can combine the risk-free asset with a portfolio of risky assets to achieve any risk-return combination along a straight line.

**Tangency Portfolio**: The portfolio of risky assets that, when combined with the risk-free asset, creates the most efficient risk-return combinations. This is where the Capital Market Line is tangent to the efficient frontier.

## The Capital Asset Pricing Model (CAPM)
Building on MPT, CAPM describes the relationship between expected return and systematic risk:

**Beta**: Measures an asset's sensitivity to market movements. Beta of 1 means the asset moves with the market, beta > 1 means more volatile than market, beta < 1 means less volatile.

**Security Market Line (SML)**: Graphical representation of CAPM showing expected return as a function of beta.

**CAPM Formula**: Expected Return = Risk-Free Rate + Beta × (Market Return - Risk-Free Rate)

**Assumptions of CAPM**: Includes perfect markets, rational investors, homogeneous expectations, and unlimited borrowing/lending at the risk-free rate.

## Limitations of Modern Portfolio Theory
While foundational, MPT has limitations:

**Assumptions Unrealistic**: Many CAPM assumptions don't hold in real markets.

**Historical Data Limitations**: Uses historical returns, volatilities, and correlations, which may not predict future relationships.

**Normal Distribution Assumption**: Assumes returns are normally distributed, but real returns often have "fat tails" (more extreme events than predicted).

**Static Nature**: Traditional MPT is single-period and doesn't account for changing conditions over time.

**Behavioral Factors**: Ignores investor psychology and behavioral biases that affect markets.

Despite these limitations, MPT remains the theoretical foundation for most portfolio management practices and provides essential insights about diversification and risk-return relationships.

## Practical Applications
Portfolio managers apply MPT principles by:
- Constructing diversified portfolios across asset classes
- Measuring and managing portfolio risk
- Optimizing asset allocation based on risk tolerance
- Evaluating investment performance relative to risk taken
- Developing investment policies for institutional clients

Remember: The essence of MPT is that what matters is not individual investments, but how they work together in a portfolio.
      `,
      quiz: [
        {
          id: 1,
          question: "What is the key insight of Modern Portfolio Theory?",
          options: [
            "Portfolios should consider how assets interact, not just individual returns",
            "Only high-return assets should be selected",
            "Risk should be ignored if returns are high enough",
            "All assets should have the same expected return"
          ],
          correctAnswer: 0,
          explanation: "MPT emphasizes portfolio construction considering asset interactions, not just individual asset characteristics."
        },
        {
          id: 2,
          question: "What does diversification achieve?",
          options: [
            "Reduces portfolio risk without necessarily reducing expected return",
            "Guarantees higher returns",
            "Eliminates all investment risk",
            "Always increases portfolio returns"
          ],
          correctAnswer: 0,
          explanation: "Diversification reduces unsystematic risk through combining imperfectly correlated assets."
        },
        {
          id: 3,
          question: "What is the efficient frontier?",
          options: [
            "Set of portfolios offering highest return for given risk or lowest risk for given return",
            "Line connecting all possible portfolios",
            "Only the highest returning portfolio",
            "Portfolios with zero risk"
          ],
          correctAnswer: 0,
          explanation: "The efficient frontier represents optimal risk-return trade-offs for portfolios."
        },
        {
          id: 4,
          question: "What is systematic risk?",
          options: [
            "Market risk affecting all assets that cannot be diversified away",
            "Risk specific to individual companies",
            "Risk that can be eliminated through diversification",
            "Risk from poor management decisions"
          ],
          correctAnswer: 0,
          explanation: "Systematic risk is market-wide risk that affects all investments in the market."
        },
        {
          id: 5,
          question: "What does beta measure in CAPM?",
          options: [
            "An asset's sensitivity to market movements",
            "Total risk of an asset",
            "Expected return of an asset",
            "Correlation between two assets"
          ],
          correctAnswer: 0,
          explanation: "Beta quantifies how much an asset's returns move relative to overall market returns."
        },
        {
          id: 6,
          question: "What is the Capital Market Line?",
          options: [
            "Line showing risk-return combinations of risk-free asset combined with risky portfolio",
            "Boundary of all possible portfolios",
            "Line connecting individual stocks",
            "Historical market return trend"
          ],
          correctAnswer: 0,
          explanation: "CML shows efficient portfolios when combining risky assets with a risk-free asset."
        },
        {
          id: 7,
          question: "What does correlation measure?",
          options: [
            "How two assets move relative to each other",
            "Total risk of a portfolio",
            "Expected returns of assets",
            "Difference between two returns"
          ],
          correctAnswer: 0,
          explanation: "Correlation quantifies the relationship between the returns of two assets."
        },
        {
          id: 8,
          question: "What is unsystematic risk?",
          options: [
            "Specific risk unique to individual assets that can be diversified away",
            "Market risk affecting all assets",
            "Risk from economic conditions",
            "Risk that cannot be reduced"
          ],
          correctAnswer: 0,
          explanation: "Unsystematic risk is company-specific or industry-specific risk."
        },
        {
          id: 9,
          question: "What does the Security Market Line represent?",
          options: [
            "Expected return as a function of beta in CAPM",
            "Historical price movements",
            "Efficient frontier without risk-free asset",
            "Correlation between different markets"
          ],
          correctAnswer: 0,
          explanation: "SML graphically shows the CAPM relationship between expected return and systematic risk."
        },
        {
          id: 10,
          question: "What is a risk-averse investor?",
          options: [
            "Investor who prefers less risk for the same expected return",
            "Investor who ignores risk completely",
            "Investor who only seeks highest returns",
            "Investor who enjoys taking risks"
          ],
          correctAnswer: 0,
          explanation: "Risk-averse investors require compensation in the form of higher returns for taking additional risk."
        },
        {
          id: 11,
          question: "What is the tangency portfolio?",
          options: [
            "Risky portfolio that creates most efficient combinations with risk-free asset",
            "Portfolio with highest possible return",
            "Portfolio with zero risk",
            "Portfolio of only risk-free assets"
          ],
          correctAnswer: 0,
          explanation: "The tangency portfolio maximizes the Sharpe ratio when combined with the risk-free asset."
        },
        {
          id: 12,
          question: "What does MPT use to quantify risk?",
          options: [
            "Standard deviation of returns",
            "Average return only",
            "Maximum loss possible",
            "Probability of default"
          ],
          correctAnswer: 0,
          explanation: "MPT measures risk as the volatility or standard deviation of returns."
        },
        {
          id: 13,
          question: "What assumption does CAPM make about borrowing and lending?",
          options: [
            "Unlimited at the risk-free rate",
            "Only at market rates",
            "Not allowed at all",
            "Only for institutional investors"
          ],
          correctAnswer: 0,
          explanation: "CAPM assumes all investors can borrow and lend unlimited amounts at the risk-free rate."
        },
        {
          id: 14,
          question: "What type of risk can diversification reduce?",
          options: [
            "Unsystematic risk",
            "Systematic risk",
            "All types of risk",
            "No risk at all"
          ],
          correctAnswer: 0,
          explanation: "Diversification reduces unsystematic (specific) risk but not systematic (market) risk."
        },
        {
          id: 15,
          question: "What is an inefficient portfolio?",
          options: [
            "Portfolio that could achieve higher returns for same risk or lower risk for same returns",
            "Portfolio with negative returns",
            "Portfolio with only one asset",
            "Portfolio managed poorly"
          ],
          correctAnswer: 0,
          explanation: "Inefficient portfolios don't offer the best possible risk-return trade-off."
        },
        {
          id: 16,
          question: "What does the CAPM formula calculate?",
          options: [
            "Expected return based on systematic risk",
            "Total portfolio risk",
            "Correlation between assets",
            "Diversification benefits"
          ],
          correctAnswer: 0,
          explanation: "CAPM calculates required return based on risk-free rate, market return, and beta."
        },
        {
          id: 17,
          question: "What is a limitation of MPT regarding return distributions?",
          options: [
            "Assumes normal distribution but real returns have fat tails",
            "Assumes returns are always positive",
            "Doesn't consider returns at all",
            "Only looks at average returns"
          ],
          correctAnswer: 0,
          explanation: "MPT assumes normal distribution, but market returns often have more extreme events."
        },
        {
          id: 18,
          question: "What practical application comes from MPT?",
          options: [
            "Constructing diversified portfolios across asset classes",
            "Predicting exact future returns",
            "Eliminating all investment risk",
            "Guaranteeing outperformance"
          ],
          correctAnswer: 0,
          explanation: "MPT provides the theoretical basis for diversification and portfolio optimization."
        },
        {
          id: 19,
          question: "What does perfect negative correlation mean?",
          options: [
            "Two assets move perfectly opposite each other",
            "Two assets move perfectly together",
            "No relationship between assets",
            "Both assets have same returns"
          ],
          correctAnswer: 0,
          explanation: "Perfect negative correlation (-1) means when one asset goes up, the other goes down proportionally."
        },
        {
          id: 20,
          question: "What is the essence of MPT?",
          options: [
            "What matters is not individual investments but how they work together",
            "Only pick the highest returning stocks",
            "Ignore risk and focus only on returns",
            "Invest only in risk-free assets"
          ],
          correctAnswer: 0,
          explanation: "MPT's core principle is portfolio construction considering asset interactions."
        }
      ]
    },
    {
      id: 2,
      title: "Asset Allocation Strategies",
      completed: false,
      content: `
# Module 2: Asset Allocation Strategies

Asset allocation is the process of dividing investment portfolios among different asset categories like stocks, bonds, cash, and alternative investments. This module covers strategic and tactical asset allocation approaches, implementation methods, and how allocation decisions drive portfolio performance.

## The Importance of Asset Allocation
Research shows that asset allocation is the primary determinant of portfolio returns and risk. While security selection and market timing receive more attention, allocation decisions typically explain over 90% of the variability in portfolio returns over time.

Key reasons asset allocation matters:
- **Risk Management**: Different asset classes have different risk characteristics
- **Return Diversification**: Assets perform differently in various economic environments
- **Goal Alignment**: Allocation should match investment objectives and constraints
- **Discipline**: Provides a structured approach rather than emotional reactions

## Strategic Asset Allocation
Strategic allocation establishes long-term target weights for asset classes based on the investor's objectives, risk tolerance, and time horizon:

**Policy Portfolio**: The benchmark allocation that represents long-term targets. This serves as the portfolio's neutral position.

**Determining Factors**:
- **Investment Objectives**: Growth, income, capital preservation
- **Risk Tolerance**: Willingness and ability to bear risk
- **Time Horizon**: When funds will be needed
- **Liquidity Needs**: How quickly assets must be convertible to cash
- **Tax Considerations**: Tax efficiency of different asset classes
- **Legal/Regulatory Constraints**: Restrictions on certain investments

**Rebalancing**: Periodically adjusting the portfolio back to target weights as market movements cause deviations. This maintains the desired risk profile and enforces discipline (buying low, selling high).

## Tactical Asset Allocation
Tactical allocation involves shorter-term adjustments around strategic targets based on market outlook:

**Market Views**: Adjusting allocations based on expectations about economic conditions, valuations, or market trends.

**Range-Based Approach**: Setting allowable ranges around strategic targets (e.g., equities 60% ± 10%). Tactical moves stay within these ranges.

**Overweight/Underweight**: Taking positions relative to the strategic benchmark. For example, overweighting equities when expecting strong economic growth.

**Systematic vs. Discretionary**: Can be rules-based (systematic) or based on manager judgment (discretionary).

Tactical allocation aims to add value through timing but increases risk of being wrong. It requires skill and should be used cautiously.

## Dynamic Asset Allocation
Dynamic allocation adjusts based on changing market conditions or investor circumstances:

**Lifecycle Investing**: Changing allocation as investors age (more growth assets when young, more conservative when nearing retirement).

**Target Date Funds**: Automatically adjust allocation over time toward more conservative mix as target date approaches.

**Constant Proportion Portfolio Insurance (CPPI)**: Dynamic strategy that adjusts allocation based on portfolio value to protect against losses.

**Risk Parity**: Allocating based on risk contribution rather than capital allocation. Aims to equalize risk across asset classes.

## Core-Satellite Approach
This hybrid approach combines strategic and active management:

**Core Portfolio**: Large portion in low-cost, broadly diversified index funds or ETFs that track strategic allocation.

**Satellite Portfolios**: Smaller allocations to actively managed strategies, thematic investments, or alternative assets aiming for alpha.

**Benefits**: Combines cost efficiency of passive core with potential outperformance from active satellites. Limits active risk to satellite portion.

## Implementation Methods
How to implement asset allocation decisions:

**Direct Investment**: Buying individual securities to match target allocations. Requires significant capital and expertise.

**Mutual Funds**: Pooled investment vehicles providing instant diversification. Can be actively or passively managed.

**Exchange-Traded Funds (ETFs)**: Traded like stocks but hold baskets of securities. Typically passive, low-cost, and tax-efficient.

**Separately Managed Accounts (SMAs)**: Custom portfolios managed for individual investors. Offers customization and tax management.

**Fund of Funds**: Invests in other funds rather than direct securities. Provides diversification across managers and strategies.

## Global Asset Allocation
Considering international diversification:

**Home Country Bias**: Tendency to overweight domestic investments. Reduces diversification benefits.

**Currency Risk**: Exchange rate movements affect international returns. Can be hedged or accepted as additional diversification.

**Emerging Markets**: Higher growth potential but greater political, economic, and currency risks.

**Regional Allocation**: Deciding weights for North America, Europe, Asia, etc., based on growth outlook and valuations.

## Alternative Asset Allocation
Incorporating non-traditional assets:

**Real Estate**: Property investments providing income and inflation protection. Can be direct or through REITs.

**Private Equity**: Investments in private companies. Illiquid but potential for higher returns.

**Hedge Funds**: Flexible strategies aiming for absolute returns. Can provide diversification but higher fees.

**Commodities**: Physical goods like oil, gold, or agricultural products. Hedge against inflation and diversify from financial assets.

**Infrastructure**: Investments in physical assets like roads, utilities, or airports. Stable cash flows and inflation linkage.

## Risk Budgeting Approach
Allocating risk rather than capital:

**Risk Contribution**: Measuring how much each asset contributes to overall portfolio risk.

**Equal Risk Contribution**: Adjusting weights so each asset class contributes equally to portfolio risk.

**Risk Factor Allocation**: Allocating to underlying risk factors (growth, inflation, volatility) rather than asset classes.

**Leverage/Deleverage**: Using borrowing or cash to achieve desired risk level when high-risk assets are underweighted.

## Performance Attribution
Analyzing what drove portfolio returns:

**Asset Allocation Effect**: Contribution from allocation decisions relative to benchmark.

**Security Selection Effect**: Contribution from choosing specific securities within asset classes.

**Interaction Effect**: Combined effect of allocation and selection decisions.

**Benchmark Comparison**: Comparing portfolio returns to appropriate blended benchmarks.

Remember: Asset allocation is not a one-time decision but an ongoing process that should adapt to changing markets and investor circumstances while maintaining discipline through market cycles.
      `,
      quiz: [
        {
          id: 1,
          question: "What does research show is the primary determinant of portfolio returns?",
          options: [
            "Asset allocation",
            "Market timing",
            "Security selection",
            "Economic forecasts"
          ],
          correctAnswer: 0,
          explanation: "Studies show asset allocation explains most of portfolio return variability over time."
        },
        {
          id: 2,
          question: "What is strategic asset allocation?",
          options: [
            "Long-term target weights for asset classes based on investor objectives",
            "Daily trading based on market news",
            "Buying only the highest returning assets",
            "Changing allocation with every market move"
          ],
          correctAnswer: 0,
          explanation: "Strategic allocation establishes long-term policy targets based on investment goals and constraints."
        },
        {
          id: 3,
          question: "What is rebalancing?",
          options: [
            "Adjusting portfolio back to target weights after market movements",
            "Changing target weights frequently",
            "Selling all assets and starting over",
            "Only buying more of winning assets"
          ],
          correctAnswer: 0,
          explanation: "Rebalancing maintains desired risk profile and enforces discipline by buying low and selling high."
        },
        {
          id: 4,
          question: "What is tactical asset allocation?",
          options: [
            "Short-term adjustments around strategic targets based on market outlook",
            "Never changing the allocation",
            "Only investing in tactical industries",
            "Military investment strategy"
          ],
          correctAnswer: 0,
          explanation: "Tactical allocation involves temporary deviations from strategic targets based on market views."
        },
        {
          id: 5,
          question: "What is the core-satellite approach?",
          options: [
            "Combining passive core with active satellite strategies",
            "Investing only in space-related stocks",
            "Centralized investment management",
            "Satellite tracking of investments"
          ],
          correctAnswer: 0,
          explanation: "Core-satellite uses low-cost passive investments for core and active strategies for satellites."
        },
        {
          id: 6,
          question: "What are target date funds?",
          options: [
            "Funds that automatically adjust allocation as target date approaches",
            "Funds targeting specific dates for high returns",
            "Funds that expire on certain dates",
            "Funds that only invest in dated securities"
          ],
          correctAnswer: 0,
          explanation: "Target date funds gradually become more conservative as investors near retirement or other goals."
        },
        {
          id: 7,
          question: "What is home country bias?",
          options: [
            "Tendency to overweight domestic investments",
            "Bias against home purchases",
            "Preference for domestic products",
            "Avoiding foreign investments completely"
          ],
          correctAnswer: 0,
          explanation: "Home country bias reduces international diversification benefits by over-concentrating in domestic markets."
        },
        {
          id: 8,
          question: "What alternative asset provides inflation protection?",
          options: [
            "Real estate",
            "Government bonds",
            "Cash equivalents",
            "Technology stocks"
          ],
          correctAnswer: 0,
          explanation: "Real estate often provides rental income that can increase with inflation."
        },
        {
          id: 9,
          question: "What is risk parity allocation?",
          options: [
            "Allocating based on risk contribution rather than capital",
            "Equal dollar amounts in all assets",
            "Taking equal risk in every trade",
            "Avoiding all risky assets"
          ],
          correctAnswer: 0,
          explanation: "Risk parity aims to equalize risk contributions across asset classes rather than equal capital allocation."
        },
        {
          id: 10,
          question: "What implementation method offers instant diversification?",
          options: [
            "Mutual funds",
            "Individual stock picking",
            "Single bond purchases",
            "Cash holdings"
          ],
          correctAnswer: 0,
          explanation: "Mutual funds pool investor money to buy diversified portfolios of securities."
        },
        {
          id: 11,
          question: "What is lifecycle investing?",
          options: [
            "Changing allocation as investors age",
            "Investing only during certain life stages",
            "Funding life insurance with investments",
            "Investing in life sciences companies"
          ],
          correctAnswer: 0,
          explanation: "Lifecycle investing becomes more conservative as investors approach spending needs."
        },
        {
          id: 12,
          question: "What does performance attribution analyze?",
          options: [
            "What drove portfolio returns relative to benchmark",
            "Only total returns",
            "Manager compensation",
            "Marketing materials effectiveness"
          ],
          correctAnswer: 0,
          explanation: "Performance attribution decomposes returns into allocation, selection, and interaction effects."
        },
        {
          id: 13,
          question: "What is the policy portfolio?",
          options: [
            "Long-term strategic benchmark allocation",
            "Insurance policy for investments",
            "Government policy on investing",
            "Written investment policy"
          ],
          correctAnswer: 0,
          explanation: "The policy portfolio represents long-term target asset class weights."
        },
        {
          id: 14,
          question: "What is currency risk in global allocation?",
          options: [
            "Exchange rate movements affecting international returns",
            "Risk of foreign currency becoming worthless",
            "Risk from currency trading",
            "Risk of counterfeiting"
          ],
          correctAnswer: 0,
          explanation: "Currency risk arises from fluctuations in exchange rates between domestic and foreign currencies."
        },
        {
          id: 15,
          question: "What are ETFs?",
          options: [
            "Exchange-traded funds that trade like stocks but hold baskets of securities",
            "Extra tax filings",
            "Electronic transfer funds",
            "Emergency treasury funds"
          ],
          correctAnswer: 0,
          explanation: "ETFs provide low-cost, tax-efficient exposure to diversified portfolios with intraday trading."
        },
        {
          id: 16,
          question: "What determines strategic asset allocation?",
          options: [
            "Investment objectives, risk tolerance, and time horizon",
            "Current market trends only",
            "Latest investment fads",
            "What neighbors are investing in"
          ],
          correctAnswer: 0,
          explanation: "Strategic allocation should reflect investor-specific factors, not market timing."
        },
        {
          id: 17,
          question: "What is CPPI?",
          options: [
            "Constant Proportion Portfolio Insurance - dynamic strategy protecting against losses",
            "Corporate Profit Protection Insurance",
            "Constant Price Purchasing Indicator",
            "Central Portfolio Protection Instrument"
          ],
          correctAnswer: 0,
          explanation: "CPPI dynamically adjusts allocation based on portfolio value to protect principal."
        },
        {
          id: 18,
          question: "What alternative asset is typically illiquid?",
          options: [
            "Private equity",
            "Publicly traded stocks",
            "Government bonds",
            "Money market funds"
          ],
          correctAnswer: 0,
          explanation: "Private equity investments in non-public companies typically have long lock-up periods."
        },
        {
          id: 19,
          question: "What does overweight/underweight mean in tactical allocation?",
          options: [
            "Taking positions relative to strategic benchmark",
            "Measuring physical weight of assets",
            "Being over or under diversified",
            "Having too much or too little cash"
          ],
          correctAnswer: 0,
          explanation: "Overweight means holding more than strategic target, underweight means holding less."
        },
        {
          id: 20,
          question: "Why is asset allocation an ongoing process?",
          options: [
            "Should adapt to changing markets and investor circumstances",
            "Because markets never change",
            "To generate more trading commissions",
            "Because initial decisions are always wrong"
          ],
          correctAnswer: 0,
          explanation: "Allocation should evolve with changing goals, markets, and life circumstances while maintaining discipline."
        }
      ]
    },
    {
      id: 3,
      title: "Risk Management and Measurement",
      completed: false,
      content: `
# Module 3: Risk Management and Measurement

Risk management is essential in portfolio management. This module covers how to identify, measure, monitor, and control various types of investment risk. Effective risk management protects capital while allowing portfolios to pursue returns.

## Understanding Investment Risk
Investment risk is the possibility that actual returns will differ from expected returns. All investments involve some degree of risk, which can take many forms:

**Price Risk**: Risk that asset prices will decline. This is what most investors think of as "risk."

**Liquidity Risk**: Risk that assets cannot be sold quickly without significant price concessions.

**Credit Risk**: Risk that borrowers will default on debt obligations.

**Interest Rate Risk**: Risk that changing interest rates will affect asset values (particularly bonds).

**Inflation Risk**: Risk that inflation will erode purchasing power of investment returns.

**Currency Risk**: Risk from exchange rate movements affecting international investments.

**Political/Regulatory Risk**: Risk from government actions, policy changes, or political instability.

**Concentration Risk**: Risk from overexposure to a single asset, sector, or market.

## Quantitative Risk Measures
Portfolio managers use various statistical measures to quantify risk:

**Standard Deviation**: Measures total volatility or dispersion of returns around the mean. The square root of variance. Higher standard deviation means higher risk.

**Variance**: Average of squared deviations from mean return. Measures total dispersion but in squared units.

**Beta**: Measures systematic risk relative to market. Beta of 1 means moves with market, >1 means more volatile, <1 means less volatile.

**Value at Risk (VaR)**: Estimates maximum loss over a specific time period at a given confidence level. For example, "95% VaR of $1 million" means 95% confidence loss won't exceed $1 million in specified period.

**Conditional Value at Risk (CVaR)**: Expected loss given that loss exceeds VaR threshold. Also called Expected Shortfall.

**Tracking Error**: Standard deviation of portfolio returns relative to benchmark returns. Measures active risk.

**Drawdown**: Peak-to-trough decline during a specific period. Measures historical loss experience.

## Qualitative Risk Assessment
Not all risk can be quantified. Qualitative assessment considers:

**Management Quality**: Competence and integrity of company management.

**Business Model Risk**: Sustainability and competitive advantage of business model.

**Industry Dynamics**: Competitive forces, regulatory environment, and technological disruption.

**Environmental, Social, Governance (ESG) Factors**: Sustainability practices and corporate governance.

**Counterparty Risk**: Financial strength of parties in transactions.

**Operational Risk**: Risk from failed internal processes, people, or systems.

## Risk-Adjusted Performance Measures
Evaluating returns relative to risk taken:

**Sharpe Ratio**: (Portfolio Return - Risk-Free Rate) / Standard Deviation. Measures excess return per unit of total risk.

**Sortino Ratio**: (Portfolio Return - Minimum Acceptable Return) / Downside Deviation. Similar to Sharpe but only penalizes downside volatility.

**Treynor Ratio**: (Portfolio Return - Risk-Free Rate) / Beta. Measures excess return per unit of systematic risk.

**Information Ratio**: (Portfolio Return - Benchmark Return) / Tracking Error. Measures active return per unit of active risk.

**Calmar Ratio**: Average Annual Return / Maximum Drawdown. Measures return relative to worst historical loss.

## Risk Management Process
Effective risk management follows a structured process:

**Risk Identification**: Recognizing what risks exist in the portfolio. Both quantitative and qualitative analysis.

**Risk Measurement**: Quantifying risk exposure using appropriate metrics. Different metrics for different risk types.

**Risk Monitoring**: Regularly tracking risk metrics and comparing to limits. Includes stress testing and scenario analysis.

**Risk Control**: Implementing measures to keep risk within acceptable bounds. Includes diversification, hedging, and position limits.

**Risk Reporting**: Communicating risk information to stakeholders (clients, management, regulators).

**Risk Review**: Periodically assessing effectiveness of risk management framework and making improvements.

## Diversification as Risk Management
Diversification is the most fundamental risk management tool:

**Asset Class Diversification**: Spreading investments across stocks, bonds, real estate, commodities, etc.

**Geographic Diversification**: Investing across different countries and regions.

**Sector Diversification**: Avoiding overconcentration in particular industries.

**Security Diversification**: Holding multiple securities within asset classes.

**Time Diversification**: Investing regularly over time rather than lump sum at single point.

Diversification reduces unsystematic risk but cannot eliminate systematic risk.

## Hedging Strategies
Hedging involves taking offsetting positions to reduce risk:

**Derivatives**: Using options, futures, or swaps to hedge specific risks. For example, buying put options to protect against stock declines.

**Short Selling**: Selling borrowed securities to profit from price declines. Can hedge long positions.

**Pairs Trading**: Going long one security and short a correlated security to hedge market risk.

**Currency Hedging**: Using forward contracts or currency swaps to hedge foreign exchange risk.

**Interest Rate Hedging**: Using interest rate swaps or futures to hedge rate exposure.

Hedging reduces risk but also reduces potential returns and involves costs.

## Stress Testing and Scenario Analysis
Evaluating portfolio performance under adverse conditions:

**Historical Stress Tests**: Applying past crisis periods (2008 financial crisis, 2000 tech bubble, etc.) to current portfolio.

**Hypothetical Scenarios**: Testing portfolio against imagined extreme events (market crash, interest rate spike, geopolitical crisis).

**Reverse Stress Testing**: Identifying what scenarios would cause unacceptable losses, then assessing likelihood.

**Sensitivity Analysis**: Changing one variable at a time (interest rates, oil prices, currency rates) to see impact.

## Risk Limits and Controls
Establishing boundaries for risk-taking:

**Position Limits**: Maximum size for individual positions or sectors.

**Risk Budgets**: Allocating allowable risk across strategies or managers.

**Leverage Limits**: Restrictions on borrowing or use of derivatives.

**Liquidity Requirements**: Minimum levels of liquid assets.

**Stop-Loss Orders**: Automatic sell orders triggered at specified price levels.

**Concentration Limits**: Maximum exposure to single assets, sectors, or counterparties.

## Behavioral Risk Management
Addressing psychological factors:

**Overconfidence**: Tendency to overestimate knowledge and abilities.

**Loss Aversion**: Greater pain from losses than pleasure from equivalent gains.

**Herding**: Following crowd behavior rather than independent analysis.

**Anchoring**: Relying too heavily on initial information (purchase price).

**Confirmation Bias**: Seeking information that confirms existing beliefs.

**Recency Bias**: Overweighting recent events in decision-making.

Risk management frameworks should include checks against behavioral biases.

## Regulatory and Compliance Risk
Managing legal and regulatory requirements:

**Know Your Client (KYC)**: Understanding client objectives, constraints, and risk tolerance.

**Suitability**: Ensuring investments are appropriate for client circumstances.

**Disclosure Requirements**: Providing necessary information to clients.

**Reporting Obligations**: Regulatory reporting for certain portfolio sizes or strategies.

**Compliance Monitoring**: Systems to detect violations of rules or limits.

Remember: Risk cannot be eliminated, only managed. The goal is not to avoid all risk, but to take intelligent risks that are appropriately compensated and aligned with investment objectives.
      `,
      quiz: [
        {
          id: 1,
          question: "What is price risk?",
          options: [
            "Risk that asset prices will decline",
            "Risk of paying too much",
            "Risk from pricing errors",
            "Risk of price controls"
          ],
          correctAnswer: 0,
          explanation: "Price risk is the possibility of losses from decreases in asset values."
        },
        {
          id: 2,
          question: "What does standard deviation measure?",
          options: [
            "Total volatility or dispersion of returns",
            "Average return only",
            "Maximum possible loss",
            "Probability of gain"
          ],
          correctAnswer: 0,
          explanation: "Standard deviation quantifies how much returns vary from their average."
        },
        {
          id: 3,
          question: "What is Value at Risk (VaR)?",
          options: [
            "Estimates maximum loss over time at given confidence level",
            "Value added from risk taking",
            "Variable annual return",
            "Valuation adjustment ratio"
          ],
          correctAnswer: 0,
          explanation: "VaR estimates the worst expected loss over a specified period at a given confidence level."
        },
        {
          id: 4,
          question: "What does the Sharpe ratio measure?",
          options: [
            "Excess return per unit of total risk",
            "Total return only",
            "Risk without considering returns",
            "Probability of beating the market"
          ],
          correctAnswer: 0,
          explanation: "Sharpe ratio evaluates risk-adjusted performance by comparing excess returns to volatility."
        },
        {
          id: 5,
          question: "What is the first step in risk management process?",
          options: [
            "Risk identification",
            "Risk measurement",
            "Risk control",
            "Risk reporting"
          ],
          correctAnswer: 0,
          explanation: "You must identify what risks exist before you can measure or manage them."
        },
        {
          id: 6,
          question: "What risk does diversification primarily reduce?",
          options: [
            "Unsystematic risk",
            "Systematic risk",
            "All types of risk",
            "Market risk"
          ],
          correctAnswer: 0,
          explanation: "Diversification reduces company-specific (unsystematic) risk through spreading investments."
        },
        {
          id: 7,
          question: "What is hedging?",
          options: [
            "Taking offsetting positions to reduce risk",
            "Avoiding all risky investments",
            "Guessing market direction",
            "Planting hedges around investments"
          ],
          correctAnswer: 0,
          explanation: "Hedging involves positions that offset potential losses in other investments."
        },
        {
          id: 8,
          question: "What is stress testing?",
          options: [
            "Evaluating portfolio performance under adverse conditions",
            "Testing how much stress investors can handle",
            "Checking portfolio strength physically",
            "Testing during stressful market hours"
          ],
          correctAnswer: 0,
          explanation: "Stress tests simulate how portfolios would perform during historical or hypothetical crises."
        },
        {
          id: 9,
          question: "What is liquidity risk?",
          options: [
            "Risk assets cannot be sold quickly without price concessions",
            "Risk of having too much cash",
            "Risk from liquid investments",
            "Risk of spills on documents"
          ],
          correctAnswer: 0,
          explanation: "Liquidity risk is the difficulty of converting assets to cash without significant loss of value."
        },
        {
          id: 10,
          question: "What does tracking error measure?",
          options: [
            "Standard deviation of portfolio returns relative to benchmark",
            "Errors in tracking investments",
            "Mistakes in portfolio management",
            "Difference from target return"
          ],
          correctAnswer: 0,
          explanation: "Tracking error quantifies how consistently a portfolio follows its benchmark."
        },
        {
          id: 11,
          question: "What is credit risk?",
          options: [
            "Risk that borrowers will default on obligations",
            "Risk of credit rating changes",
            "Risk from using credit cards",
            "Risk of identity theft"
          ],
          correctAnswer: 0,
          explanation: "Credit risk is the possibility that debt issuers fail to make interest or principal payments."
        },
        {
          id: 12,
          question: "What is CVaR?",
          options: [
            "Expected loss given that loss exceeds VaR threshold",
            "Current value at risk",
            "Constant variance analysis ratio",
            "Cumulative value added return"
          ],
          correctAnswer: 0,
          explanation: "Conditional VaR (Expected Shortfall) estimates average loss in worst-case scenarios beyond VaR."
        },
        {
          id: 13,
          question: "What does the Sortino ratio use instead of total standard deviation?",
          options: [
            "Downside deviation only",
            "Upside deviation only",
            "Average deviation",
            "Median deviation"
          ],
          correctAnswer: 0,
          explanation: "Sortino ratio only penalizes downside volatility, not upside volatility."
        },
        {
          id: 14,
          question: "What are position limits?",
          options: [
            "Maximum size for individual positions or sectors",
            "Limits on physical positions",
            "Restrictions on employee positions",
            "Limits on market positioning"
          ],
          correctAnswer: 0,
          explanation: "Position limits control concentration risk by restricting exposure to single investments."
        },
        {
          id: 15,
          question: "What behavioral bias involves following crowd behavior?",
          options: [
            "Herding",
            "Overconfidence",
            "Loss aversion",
            "Anchoring"
          ],
          correctAnswer: 0,
          explanation: "Herding is following what others are doing rather than independent analysis."
        },
        {
          id: 16,
          question: "What is interest rate risk?",
          options: [
            "Risk that changing interest rates affect asset values",
            "Risk of interest payment defaults",
            "Risk from interesting investments",
            "Risk of interest rate fixing"
          ],
          correctAnswer: 0,
          explanation: "Interest rate risk affects bond prices inversely - rates up, bond prices down, and vice versa."
        },
        {
          id: 17,
          question: "What is drawdown?",
          options: [
            "Peak-to-trough decline during specific period",
            "Withdrawal of funds",
            "Drawing down on credit",
            "Reduction in portfolio size"
          ],
          correctAnswer: 0,
          explanation: "Drawdown measures the maximum historical loss from peak to subsequent trough."
        },
        {
          id: 18,
          question: "What is scenario analysis?",
          options: [
            "Testing portfolio against imagined extreme events",
            "Analyzing movie scenarios",
            "Planning for best-case only",
            "Ignoring unlikely events"
          ],
          correctAnswer: 0,
          explanation: "Scenario analysis evaluates how portfolios would perform under various hypothetical situations."
        },
        {
          id: 19,
          question: "What is concentration risk?",
          options: [
            "Risk from overexposure to single asset, sector, or market",
            "Risk of focusing too much",
            "Risk from concentrated solutions",
            "Risk in chemical concentrations"
          ],
          correctAnswer: 0,
          explanation: "Concentration risk arises when portfolio is not sufficiently diversified."
        },
        {
          id: 20,
          question: "What is the goal of risk management?",
          options: [
            "Take intelligent risks that are appropriately compensated",
            "Eliminate all risk",
            "Avoid all losses",
            "Only take no-risk investments"
          ],
          correctAnswer: 0,
          explanation: "Risk management aims to understand and control risk, not eliminate it completely."
        }
      ]
    },
    {
      id: 4,
      title: "Fixed Income Portfolio Management",
      completed: false,
      content: `
# Module 4: Fixed Income Portfolio Management

Fixed income investments, primarily bonds, play a crucial role in most portfolios by providing income, capital preservation, and diversification from equities. This module covers bond valuation, yield curve analysis, credit analysis, and fixed income portfolio strategies.

## Bond Basics
Bonds are debt securities where issuers borrow money from investors:

**Principal/Par Value**: Face amount repaid at maturity, typically $1,000 per bond.

**Coupon Rate**: Annual interest rate paid on par value. Can be fixed, floating, or zero.

**Maturity Date**: When principal must be repaid. Can range from days to 30+ years.

**Issuer Types**: Governments (treasuries, municipals), corporations, agencies, and supranational organizations.

**Bond Pricing**: Bonds trade at premium (above par), discount (below par), or at par. Price moves inversely to yield.

## Yield Measures
Different yield calculations serve different purposes:

**Current Yield**: Annual coupon payment divided by current market price. Simple measure of income return.

**Yield to Maturity (YTM)**: Total return if bond held to maturity, assuming all coupons reinvested at YTM rate. Most comprehensive yield measure.

**Yield to Call (YTC)**: Yield if bond called before maturity by issuer. Relevant for callable bonds.

**Yield to Worst (YTW)**: Lowest possible yield given all possible call or prepayment scenarios.

**Real Yield**: Nominal yield minus expected inflation. Measures purchasing power return.

**Yield Spread**: Difference between bond yield and benchmark treasury yield. Measures credit risk premium.

## The Yield Curve
The yield curve plots yields against maturities for similar credit quality bonds:

**Normal Curve**: Upward sloping - longer maturities have higher yields. Most common shape, reflecting term premium for longer commitments.

**Inverted Curve**: Downward sloping - shorter maturities have higher yields. Often predicts economic recession.

**Flat Curve**: Little difference between short and long yields. Transition period between normal and inverted.

**Steep Curve**: Large difference between short and long yields. Often during economic recovery.

**Theories Explaining Yield Curve**:
- **Expectations Theory**: Curve reflects market expectations of future rates.
- **Liquidity Preference Theory**: Investors demand premium for longer maturities.
- **Market Segmentation Theory**: Different investor groups prefer different maturities.

## Duration and Convexity
Measures of interest rate sensitivity:

**Macaulay Duration**: Weighted average time to receive cash flows, measured in years. Higher duration = greater price sensitivity to rate changes.

**Modified Duration**: Macaulay Duration / (1 + YTM/n). Estimates percentage price change for 1% change in yield.

**Effective Duration**: More accurate for bonds with embedded options (callable, putable). Estimates price sensitivity using scenario analysis.

**Dollar Duration**: Price change in dollars for 1% yield change.

**Convexity**: Measures curvature of price-yield relationship. Positive convexity is desirable - prices rise more when yields fall than they fall when yields rise.

**Immunization**: Strategy using duration matching to protect portfolio value against interest rate changes.

## Credit Analysis
Assessing issuer's ability to repay debt:

**Credit Ratings**: Agencies (Moody's, S&P, Fitch) assign ratings from AAA (highest) to D (default). Investment grade = BBB-/Baa3 and above.

**Credit Spreads**: Extra yield over treasuries compensating for default risk. Wider spreads = higher perceived risk.

**Default Risk**: Probability issuer fails to make payments. Measured historically or using credit default swaps.

**Recovery Rate**: Percentage of principal recovered if default occurs. Varies by seniority and collateral.

**Credit Migration**: Risk that issuer's credit rating changes (upgrade or downgrade).

**High-Yield Bonds**: Below investment grade bonds offering higher yields but greater default risk.

## Bond Portfolio Strategies
Different approaches to fixed income management:

**Passive Strategies**:
- **Buy and Hold**: Purchase bonds and hold to maturity.
- **Indexing**: Match composition of bond index (Bloomberg Barclays, etc.).
- **Laddering**: Construct portfolio with bonds maturing evenly over time.

**Active Strategies**:
- **Interest Rate Anticipation**: Adjust duration based on rate outlook.
- **Yield Curve Positioning**: Overweight certain maturity segments.
- **Sector Rotation**: Shift among government, corporate, mortgage, etc.
- **Credit Analysis**: Seek undervalued bonds through fundamental analysis.
- **Arbitrage**: Exploit pricing inefficiencies between related securities.

**Structured Strategies**:
- **Barbell**: Combine short and long maturities, avoiding intermediate.
- **Bullet**: Concentrate in specific maturity range.
- **Immunization**: Match duration to liability stream.

## Mortgage-Backed Securities (MBS)
Bonds backed by pools of mortgages:

**Prepayment Risk**: Risk that mortgages paid early when rates fall, forcing reinvestment at lower rates.

**Extension Risk**: Risk that mortgages prepay slower when rates rise, extending duration.

**Pass-Through Securities**: Monthly payments of principal and interest passed to investors.

**CMOs**: Collateralized Mortgage Obligations - MBS structured into tranches with different risk/return profiles.

## Inflation-Linked Bonds
Protect against inflation:

**TIPS**: Treasury Inflation-Protected Securities - principal adjusts with CPI.

**Real Return**: Coupon payments based on inflation-adjusted principal.

**Breakeven Inflation Rate**: Difference between nominal and TIPS yields - market's inflation expectation.

## Global Bond Investing
International fixed income considerations:

**Currency Risk**: Major factor in international bond returns. Can hedge or accept as diversification.

**Sovereign Risk**: Risk of foreign government default or restructuring.

**Emerging Market Debt**: Higher yields but greater political and currency risk.

**Eurobonds**: Bonds issued outside issuer's home country, often in U.S. dollars.

## Bond Valuation
Determining fair value of bonds:

**Discounted Cash Flow**: Present value of expected coupon payments and principal.

**Relative Value**: Comparing yield spreads to similar bonds or historical averages.

**Option-Adjusted Spread (OAS)**: Spread after removing value of embedded options. Allows comparison between bonds with different optionality.

**Total Return Analysis**: Projecting price changes, coupon income, and reinvestment returns.

## Risk Management in Bond Portfolios
Managing fixed income risks:

**Interest Rate Risk**: Managed through duration targeting and convexity analysis.

**Credit Risk**: Managed through diversification, credit analysis, and position limits.

**Liquidity Risk**: Particularly important for corporate and municipal bonds.

**Call/Prepayment Risk**: For callable bonds and MBS.

**Reinvestment Risk**: Risk that coupons must be reinvested at lower rates.

**Inflation Risk**: Addressed through TIPS or shorter-duration bonds.

## Performance Measurement
Evaluating bond portfolio performance:

**Benchmark Comparison**: Against bond indices with similar duration and credit quality.

**Return Attribution**: Decomposing returns into interest income, price change, and currency effects.

**Yield Curve Contribution**: Return from positioning along yield curve.

**Sector/Quality Contribution**: Return from allocations to different bond sectors or credit qualities.

**Security Selection**: Return from choosing specific bonds within sectors.

Remember: Fixed income provides stability and income but requires careful attention to interest rate risk, credit risk, and other fixed-income-specific factors. Bond portfolios should be managed with clear objectives regarding income, stability, and total return.
      `,
      quiz: [
        {
          id: 1,
          question: "What is the face amount repaid at bond maturity called?",
          options: [
            "Principal or par value",
            "Coupon value",
            "Market value",
            "Book value"
          ],
          correctAnswer: 0,
          explanation: "Principal or par value is the amount the issuer promises to repay at maturity."
        },
        {
          id: 2,
          question: "What does yield to maturity (YTM) measure?",
          options: [
            "Total return if bond held to maturity with coupons reinvested at YTM",
            "Current income only",
            "Guaranteed return",
            "Return if sold today"
          ],
          correctAnswer: 0,
          explanation: "YTM is the most comprehensive yield measure, assuming hold to maturity and reinvestment at YTM."
        },
        {
          id: 3,
          question: "What is a normal yield curve shape?",
          options: [
            "Upward sloping - longer maturities have higher yields",
            "Downward sloping - shorter maturities have higher yields",
            "Flat - little difference across maturities",
            "Humped - middle maturities highest"
          ],
          correctAnswer: 0,
          explanation: "Normal curve slopes upward, reflecting term premium for longer commitments."
        },
        {
          id: 4,
          question: "What does duration measure?",
          options: [
            "Interest rate sensitivity of bond prices",
            "Time until bond is issued",
            "Length of coupon payments",
            "Bond's age"
          ],
          correctAnswer: 0,
          explanation: "Duration estimates how much bond prices change when interest rates change."
        },
        {
          id: 5,
          question: "What is convexity?",
          options: [
            "Measures curvature of price-yield relationship",
            "How convex the yield curve is",
            "Complexity of bond structure",
            "Curvature of bond certificate"
          ],
          correctAnswer: 0,
          explanation: "Convexity measures how duration changes as yields change - desirable positive convexity means prices rise more than they fall."
        },
        {
          id: 6,
          question: "What are investment grade bonds?",
          options: [
            "BBB-/Baa3 and above credit rating",
            "Any bond that pays interest",
            "Only government bonds",
            "Bonds with guaranteed returns"
          ],
          correctAnswer: 0,
          explanation: "Investment grade bonds have credit ratings of BBB-/Baa3 or higher from major agencies."
        },
        {
          id: 7,
          question: "What is a bond laddering strategy?",
          options: [
            "Construct portfolio with bonds maturing evenly over time",
            "Only buying long-term bonds",
            "Buying bonds of increasing risk",
            "Climbing the bond quality ladder"
          ],
          correctAnswer: 0,
          explanation: "Laddering spreads maturities to provide regular cash flow and reduce reinvestment risk."
        },
        {
          id: 8,
          question: "What is prepayment risk in MBS?",
          options: [
            "Risk mortgages paid early when rates fall, forcing reinvestment at lower rates",
            "Risk of paying too early",
            "Risk of never being paid",
            "Risk from premature payments"
          ],
          correctAnswer: 0,
          explanation: "Prepayment risk occurs when homeowners refinance at lower rates, returning principal that must be reinvested at lower yields."
        },
        {
          id: 9,
          question: "What are TIPS?",
          options: [
            "Treasury Inflation-Protected Securities",
            "Taxable Interest Protection Securities",
            "Temporary Interest Payment Securities",
            "Treasury Interest Parity Securities"
          ],
          correctAnswer: 0,
          explanation: "TIPS protect against inflation by adjusting principal based on CPI changes."
        },
        {
          id: 10,
          question: "What is a barbell strategy?",
          options: [
            "Combine short and long maturities, avoiding intermediate",
            "Only buy barbell-shaped bonds",
            "Weightlifting with bonds",
            "Balancing risk perfectly"
          ],
          correctAnswer: 0,
          explanation: "Barbell strategy invests at both short and long ends of yield curve for flexibility."
        },
        {
          id: 11,
          question: "What moves inversely to bond prices?",
          options: [
            "Yields",
            "Coupon rates",
            "Credit ratings",
            "Maturity dates"
          ],
          correctAnswer: 0,
          explanation: "Bond prices and yields have an inverse relationship - when yields rise, prices fall."
        },
        {
          id: 12,
          question: "What does an inverted yield curve often predict?",
          options: [
            "Economic recession",
            "Strong economic growth",
            "Stable inflation",
            "Currency appreciation"
          ],
          correctAnswer: 0,
          explanation: "Historically, inverted yield curves have often preceded economic recessions."
        },
        {
          id: 13,
          question: "What is immunization?",
          options: [
            "Strategy using duration matching to protect against interest rate changes",
            "Vaccination against bond losses",
            "Making bonds immune to default",
            "Protecting against all risks"
          ],
          correctAnswer: 0,
          explanation: "Immunization matches portfolio duration to investment horizon to lock in yield."
        },
        {
          id: 14,
          question: "What is credit spread?",
          options: [
            "Extra yield over treasuries compensating for default risk",
            "Spread between different coupon rates",
            "Difference in credit limits",
            "Spreading credit risk"
          ],
          correctAnswer: 0,
          explanation: "Credit spread is the additional yield investors demand for taking credit risk."
        },
        {
          id: 15,
          question: "What is OAS?",
          options: [
            "Option-Adjusted Spread - spread after removing value of embedded options",
            "Original Annual Spread",
            "Optional Additional Security",
            "Overall Average Spread"
          ],
          correctAnswer: 0,
          explanation: "OAS allows comparison between bonds with different embedded options by removing option value."
        },
        {
          id: 16,
          question: "What is a bullet strategy?",
          options: [
            "Concentrate in specific maturity range",
            "Fast bond trading",
            "Shooting for high returns",
            "Aggressive bond strategy"
          ],
          correctAnswer: 0,
          explanation: "Bullet strategy concentrates bonds around a specific maturity date."
        },
        {
          id: 17,
          question: "What is reinvestment risk?",
          options: [
            "Risk that coupons must be reinvested at lower rates",
            "Risk of not reinvesting",
            "Risk from too much reinvestment",
            "Risk of reinvestment fraud"
          ],
          correctAnswer: 0,
          explanation: "Reinvestment risk is the uncertainty about the rate at which future cash flows can be reinvested."
        },
        {
          id: 18,
          question: "What does effective duration measure?",
          options: [
            "Price sensitivity for bonds with embedded options",
            "How long bonds last",
            "Duration of effective yields",
            "Actual time held"
          ],
          correctAnswer: 0,
          explanation: "Effective duration accounts for changes in cash flows due to embedded options."
        },
        {
          id: 19,
          question: "What is yield to worst?",
          options: [
            "Lowest possible yield given all call or prepayment scenarios",
            "Yield during worst market conditions",
            "Minimum guaranteed yield",
            "Yield if everything goes wrong"
          ],
          correctAnswer: 0,
          explanation: "YTW considers the worst outcome for investor from possible early redemption."
        },
        {
          id: 20,
          question: "What provides stability and income in portfolios?",
          options: [
            "Fixed income investments",
            "Only stocks",
            "Cash equivalents",
            "Alternative investments"
          ],
          correctAnswer: 0,
          explanation: "Fixed income typically provides regular income and lower volatility than equities."
        }
      ]
    },
    {
      id: 5,
      title: "Equity Portfolio Management",
      completed: false,
      content: `
# Module 5: Equity Portfolio Management

Equity portfolio management involves constructing and managing stock portfolios to achieve investment objectives. This module covers equity analysis, portfolio construction, style investing, and active versus passive management approaches.

## Equity Investment Approaches
Different philosophies guide equity investing:

**Value Investing**: Buying stocks trading below intrinsic value. Seeks margin of safety. Looks at price-to-earnings, price-to-book, dividend yield.

**Growth Investing**: Buying companies with above-average earnings growth potential. Willing to pay higher multiples for future growth.

**Quality Investing**: Focusing on companies with strong competitive advantages, stable earnings, and good management.

**Momentum Investing**: Buying stocks that have been rising and selling those that have been falling. Based on price trend continuation.

**Income Investing**: Emphasizing dividend-paying stocks for current income. Often focuses on stable, mature companies.

**Contrarian Investing**: Going against prevailing market sentiment. Buying when others are fearful, selling when others are greedy.

## Fundamental Analysis
Analyzing company financials and operations:

**Top-Down Analysis**: Starting with macroeconomic environment, then industry analysis, then company analysis.

**Bottom-Up Analysis**: Starting with individual company analysis, then aggregating to portfolio view.

**Financial Statement Analysis**: Examining income statements, balance sheets, and cash flow statements.

**Ratio Analysis**: Calculating and interpreting key financial ratios (profitability, liquidity, leverage, efficiency).

**Management Assessment**: Evaluating quality and track record of management team.

**Competitive Analysis**: Assessing industry structure, competitive positioning, and sustainable advantages.

## Quantitative Analysis
Using statistical and mathematical models:

**Factor Models**: Identifying characteristics (factors) that explain stock returns (value, size, momentum, quality, volatility).

**Multi-Factor Models**: Combining multiple factors to explain returns and identify mispricing.

**Risk Models**: Estimating stock betas, volatilities, and correlations for portfolio construction.

**Optimization**: Using mathematical programming to construct efficient portfolios given constraints.

**Backtesting**: Testing investment strategies on historical data to evaluate potential performance.

## Portfolio Construction Methods
Building equity portfolios systematically:

**Equal Weighting**: All stocks get same weight. Simple but may overweight smaller companies.

**Market Capitalization Weighting**: Weights proportional to company size. Reflects market composition but overweights overvalued stocks.

**Fundamental Weighting**: Weights based on economic fundamentals (earnings, dividends, book value, sales).

**Minimum Variance**: Optimizing for lowest possible portfolio volatility given constraints.

**Maximum Diversification**: Maximizing diversification ratio (weighted average volatility / portfolio volatility).

**Risk Parity Applied to Equities**: Equalizing risk contributions from different stocks or sectors.

## Style Investing
Focusing on specific equity characteristics:

**Size Styles**: Large-cap, mid-cap, small-cap, micro-cap. Size premium historically rewarded smaller companies.

**Value vs. Growth**: Value stocks (low multiples) vs. growth stocks (high growth expectations).

**Sector Rotation**: Overweighting sectors expected to outperform based on economic cycle.

**International Styles**: Applying style investing globally, considering country and currency factors.

**Style Consistency**: Maintaining consistent investment style rather than chasing performance.

## Active vs. Passive Management
The ongoing debate in equity investing:

**Passive Management**: Buying and holding market index. Low cost, transparent, guaranteed market returns less fees.

**Active Management**: Attempting to beat market through stock selection, market timing, or both. Higher cost, potential for outperformance.

**Active Share**: Measures how different portfolio is from benchmark. High active share indicates truly active management.

**Tracking Error**: Volatility of returns relative to benchmark. Higher with more active management.

**Information Ratio**: Active return divided by tracking error. Measures skill in active management.

**Evidence on Active Performance**: Majority of active managers underperform after fees over long term, but some demonstrate persistent skill.

## ESG Integration
Incorporating environmental, social, and governance factors:

**Negative Screening**: Excluding companies involved in controversial activities (tobacco, weapons, etc.).

**Positive Screening**: Selecting companies with strong ESG practices.

**ESG Integration**: Incorporating ESG factors into traditional financial analysis.

**Impact Investing**: Targeting investments that generate measurable social/environmental impact alongside financial return.

**Shareholder Engagement**: Using ownership position to influence company behavior on ESG issues.

## Trading and Implementation
Executing portfolio decisions:

**Market Impact**: Effect of trading on security prices. Larger trades move prices adversely.

**Implementation Shortfall**: Difference between paper portfolio return and actual portfolio return after trading costs.

**Algorithmic Trading**: Using computer algorithms to execute trades minimizing market impact.

**Transaction Cost Analysis**: Measuring and managing costs of trading (commissions, spreads, market impact).

**Best Execution**: Regulatory requirement to seek most favorable terms reasonably available for client trades.

**Liquidity Management**: Considering trading volume and bid-ask spreads when constructing portfolios.

## Performance Evaluation
Assessing equity portfolio results:

**Benchmark Selection**: Choosing appropriate comparison index (S&P 500, Russell 2000, MSCI World, etc.).

**Return Attribution**: Decomposing returns into allocation, selection, and interaction effects.

**Style Analysis**: Using returns-based analysis to determine portfolio's effective style exposure.

**Peer Comparison**: Comparing to other managers with similar investment approach.

**Consistency of Performance**: Evaluating whether performance is persistent or random.

**Risk-Adjusted Measures**: Sharpe ratio, information ratio, alpha, etc.

## Behavioral Considerations
Psychological factors in equity investing:

**Overreaction and Underreaction**: Markets may overreact to news in short term, underreact in longer term.

**Disposition Effect**: Tendency to sell winners too early and hold losers too long.

**Representativeness**: Judging probability by how similar something is to stereotypes rather than by base rates.

**Familiarity Bias**: Preferring investments in familiar companies or countries.

**Attention-Driven Trading**: Buying stocks that have been in news, regardless of fundamentals.

**Anchoring on Purchase Price**: Reluctance to sell below purchase price even when fundamentals deteriorate.

## Technology in Equity Management
Modern tools and approaches:

**Alternative Data**: Using non-traditional data sources (satellite imagery, social media, web traffic).

**Natural Language Processing**: Analyzing text data (earnings calls, news articles, regulatory filings).

**Machine Learning**: Pattern recognition and prediction algorithms for stock selection.

**High-Frequency Data**: Using intraday data for analysis and trading.

**Robo-Advisors**: Automated portfolio management platforms using algorithms.

Remember: Successful equity portfolio management requires a disciplined process, understanding of behavioral biases, and continuous adaptation to changing markets while staying true to investment philosophy.
      `,
      quiz: [
        {
          id: 1,
          question: "What is value investing?",
          options: [
            "Buying stocks trading below intrinsic value",
            "Buying only valuable companies",
            "Investing for ethical values",
            "Buying stocks with highest prices"
          ],
          correctAnswer: 0,
          explanation: "Value investing seeks stocks priced below their estimated intrinsic value."
        },
        {
          id: 2,
          question: "What is top-down analysis?",
          options: [
            "Starting with macroeconomic, then industry, then company analysis",
            "Analyzing only top companies",
            "Looking at highest prices first",
            "Starting with company details first"
          ],
          correctAnswer: 0,
          explanation: "Top-down analysis begins with big picture economic factors before drilling down to specific companies."
        },
        {
          id: 3,
          question: "What are factor models?",
          options: [
            "Identifying characteristics that explain stock returns",
            "Models factoring in all risks",
            "Multiplication models for returns",
            "Simple return calculators"
          ],
          correctAnswer: 0,
          explanation: "Factor models identify systematic sources of returns like value, size, momentum, and quality."
        },
        {
          id: 4,
          question: "What is market capitalization weighting?",
          options: [
            "Weights proportional to company size",
            "Equal weights for all stocks",
            "Weights based on trading volume",
            "Weights by market share"
          ],
          correctAnswer: 0,
          explanation: "Market cap weighting gives larger companies greater portfolio weight, mimicking market indices."
        },
        {
          id: 5,
          question: "What is the size premium?",
          options: [
            "Historical excess returns of small companies over large companies",
            "Extra charge for small orders",
            "Premium for size analysis",
            "Bonus for large portfolios"
          ],
          correctAnswer: 0,
          explanation: "Historically, small-cap stocks have outperformed large-cap stocks over long periods."
        },
        {
          id: 6,
          question: "What does active share measure?",
          options: [
            "How different portfolio is from benchmark",
            "How actively portfolio trades",
            "Share of active management",
            "Active participation in companies"
          ],
          correctAnswer: 0,
          explanation: "Active share quantifies the percentage of portfolio holdings that differ from the benchmark index."
        },
        {
          id: 7,
          question: "What is negative screening in ESG?",
          options: [
            "Excluding companies involved in controversial activities",
            "Screening out negative returns",
            "Looking for negative factors",
            "Avoiding all screening"
          ],
          correctAnswer: 0,
          explanation: "Negative screening avoids investments in companies with undesirable products or practices."
        },
        {
          id: 8,
          question: "What is implementation shortfall?",
          options: [
            "Difference between paper portfolio return and actual return after trading costs",
            "Shortfall in implementation",
            "Failure to implement strategy",
            "Missing implementation deadline"
          ],
          correctAnswer: 0,
          explanation: "Implementation shortfall measures the cost of turning investment decisions into actual portfolios."
        },
        {
          id: 9,
          question: "What is return attribution?",
          options: [
            "Decomposing returns into allocation, selection, and interaction effects",
            "Attributing returns to luck",
            "Giving credit for returns",
            "Reporting returns to clients"
          ],
          correctAnswer: 0,
          explanation: "Return attribution analyzes what decisions contributed to portfolio performance."
        },
        {
          id: 10,
          question: "What is the disposition effect?",
          options: [
            "Tendency to sell winners too early and hold losers too long",
            "Effect of disposition on returns",
            "How disposition affects investing",
            "Disposing of losing positions"
          ],
          correctAnswer: 0,
          explanation: "The disposition effect is a behavioral bias where investors realize gains too quickly and avoid realizing losses."
        },
        {
          id: 11,
          question: "What is growth investing?",
          options: [
            "Buying companies with above-average earnings growth potential",
            "Only investing in growing economies",
            "Investing for portfolio growth only",
            "Buying stocks that grow dividends"
          ],
          correctAnswer: 0,
          explanation: "Growth investors focus on companies expected to grow earnings faster than average."
        },
        {
          id: 12,
          question: "What is bottom-up analysis?",
          options: [
            "Starting with individual company analysis, then aggregating to portfolio view",
            "Analyzing worst performers first",
            "Looking at base factors first",
            "Starting with broad economy last"
          ],
          correctAnswer: 0,
          explanation: "Bottom-up analysis begins with detailed company research before considering macroeconomic factors."
        },
        {
          id: 13,
          question: "What is momentum investing?",
          options: [
            "Buying stocks that have been rising and selling those that have been falling",
            "Investing with market momentum",
            "Following momentum indicators",
            "Trading based on speed"
          ],
          correctAnswer: 0,
          explanation: "Momentum strategies assume recent price trends will continue in the near term."
        },
        {
          id: 14,
          question: "What does passive management provide?",
          options: [
            "Guaranteed market returns less fees",
            "Guaranteed outperformance",
            "Active management benefits",
            "Customized portfolios"
          ],
          correctAnswer: 0,
          explanation: "Passive management delivers market returns (minus low fees) without trying to beat the market."
        },
        {
          id: 15,
          question: "What is ESG integration?",
          options: [
            "Incorporating ESG factors into traditional financial analysis",
            "Integrating all ESG data",
            "Combining ESG with other factors",
            "Full ESG implementation"
          ],
          correctAnswer: 0,
          explanation: "ESG integration considers environmental, social, and governance factors alongside financial analysis."
        },
        {
          id: 16,
          question: "What is market impact?",
          options: [
            "Effect of trading on security prices",
            "Impact of market news",
            "Market's effect on economy",
            "How markets impact investors"
          ],
          correctAnswer: 0,
          explanation: "Market impact refers to how large trades move prices against the trader."
        },
        {
          id: 17,
          question: "What is style analysis?",
          options: [
            "Using returns-based analysis to determine portfolio's effective style exposure",
            "Analyzing fashion stocks",
            "Evaluating investment style",
            "Style consistency checking"
          ],
          correctAnswer: 0,
          explanation: "Style analysis determines what factors drive a portfolio's returns, revealing its effective style."
        },
        {
          id: 18,
          question: "What is attention-driven trading?",
          options: [
            "Buying stocks that have been in news, regardless of fundamentals",
            "Trading only when paying attention",
            "Focusing attention on trading",
            "Trading based on attention indicators"
          ],
          correctAnswer: 0,
          explanation: "Attention-driven trading occurs when investors buy stocks simply because they've recently been in the news."
        },
        {
          id: 19,
          question: "What is alternative data?",
          options: [
            "Using non-traditional data sources for investment analysis",
            "Alternative to data analysis",
            "Different data formats",
            "Backup data sources"
          ],
          correctAnswer: 0,
          explanation: "Alternative data includes unconventional sources like satellite imagery, social media, or credit card transactions."
        },
        {
          id: 20,
          question: "What does successful equity management require?",
          options: [
            "Disciplined process and understanding of behavioral biases",
            "Only good stock picking",
            "Perfect market timing",
            "Ignoring market conditions"
          ],
          correctAnswer: 0,
          explanation: "Success requires discipline, risk management, and awareness of psychological traps."
        }
      ]
    },
    {
      id: 6,
      title: "Alternative Investments and Portfolio Completion",
      completed: false,
      content: `
# Module 6: Alternative Investments and Portfolio Completion

Alternative investments complement traditional stocks and bonds by providing diversification, return enhancement, and inflation protection. This module covers major alternative asset classes, their role in portfolios, and how to integrate them into complete investment solutions.

## What are Alternative Investments?
Alternative investments differ from traditional stocks, bonds, and cash:

**Non-Traditional Assets**: Real estate, private equity, hedge funds, commodities, infrastructure, collectibles.

**Characteristics**: Often less liquid, more complex, higher fees, different risk-return profiles, lower correlation with traditional assets.

**Purpose in Portfolios**: Diversification, return enhancement, inflation protection, absolute returns.

**Access Methods**: Direct ownership, funds, partnerships, publicly traded vehicles (REITs, MLPs, BDCs).

## Real Estate Investments
Property as an investment class:

**Direct Real Estate**: Owning physical properties. Provides rental income and potential appreciation. High transaction costs, illiquid, requires management.

**Real Estate Investment Trusts (REITs)**: Publicly traded companies owning income-producing real estate. Must distribute 90%+ of taxable income as dividends. More liquid than direct ownership.

**Real Estate Funds**: Private funds pooling investor capital for property investments. Can be core (stable), value-add (renovation), or opportunistic (development).

**Benefits**: Income generation, inflation hedge (rents tend to rise with inflation), diversification from financial assets.

**Risks**: Illiquidity, leverage risk, property-specific risks, sensitivity to interest rates.

## Private Equity
Investing in private companies:

**Venture Capital**: Early-stage companies with high growth potential. High risk, potential for very high returns.

**Buyouts**: Acquiring mature private companies, often using leverage. Aim to improve operations and sell at profit.

**Growth Equity**: Investing in established companies needing capital for expansion. Between venture and buyout risk profiles.

**Fund Structure**: Typically limited partnerships with 10+ year horizons. Capital calls draw down committed capital over time.

**J-Curve Effect**: Early negative returns from fees and startup costs, followed by (hopefully) positive returns as investments mature.

**Illiquidity Premium**: Extra return expected for lack of liquidity. Private equity aims to outperform public markets by this premium plus operational improvements.

## Hedge Funds
Flexible investment strategies:

**Strategy Types**:
- **Long/Short Equity**: Long positions in expected winners, short positions in expected losers.
- **Event-Driven**: Investing around corporate events (mergers, bankruptcies, spin-offs).
- **Global Macro**: Betting on macroeconomic trends (interest rates, currencies, commodities).
- **Relative Value**: Exploiting pricing discrepancies between related securities.
- **Managed Futures**: Systematic trading in futures markets based on trend-following or other quantitative models.

**Fee Structure**: Typically "2 and 20" - 2% management fee plus 20% of profits above hurdle rate.

**Benefits**: Absolute return focus, low correlation to traditional assets, skilled manager access.

**Risks**: High fees, lack of transparency, manager risk, potential for large losses in some strategies.

## Commodities
Investing in physical goods:

**Hard Commodities**: Metals (gold, silver, copper) and energy (oil, natural gas).

**Soft Commodities**: Agricultural products (corn, wheat, coffee, cotton).

**Investment Methods**: Direct physical ownership, futures contracts, commodity-focused stocks, commodity ETFs.

**Inflation Hedge**: Commodity prices often rise with inflation, protecting purchasing power.

**Diversification**: Low correlation with financial assets, especially during inflationary periods.

**Contango vs. Backwardation**: Term structure of futures prices affects roll returns.

## Infrastructure Investments
Physical assets providing essential services:

**Types**: Transportation (tolls roads, airports, ports), utilities (water, electricity, gas), social (hospitals, schools, prisons).

**Characteristics**: Stable cash flows, inflation linkage, high barriers to entry, long asset lives.

**Returns**: Income-oriented with moderate growth. Lower volatility than equities but higher than bonds.

**Rivers of Risk**: Construction risk, regulatory risk, demand risk, political risk.

## Collectibles and Other Alternatives
Specialized investment categories:

**Art and Collectibles**: Paintings, sculptures, rare items. Emotional returns plus potential financial returns. High transaction costs, authentication issues, subjective valuation.

**Wine and Whisky**: Fine beverages as investments. Requires proper storage and expertise.

**Timberland**: Investing in forest land. Biological growth provides natural return, plus land appreciation.

**Cryptocurrencies**: Digital assets using blockchain technology. Extremely volatile, regulatory uncertainty, technology risk.

## Portfolio Integration
Adding alternatives to traditional portfolios:

**Allocation Size**: Typically 5-25% of total portfolio, depending on investor objectives and risk tolerance.

**Diversification Benefits**: Low correlation with traditional assets improves risk-adjusted returns.

**Liquidity Considerations**: Balancing illiquid alternatives with sufficient liquid assets for near-term needs.

**Fee Impact**: Higher alternative fees must be justified by superior risk-adjusted returns or diversification benefits.

**Due Diligence**: Thorough investigation of alternative investments given complexity and opacity.

## Risk Management for Alternatives
Special considerations for alternative investments:

**Liquidity Risk**: Particularly important for private equity, real estate, and hedge funds with lock-up periods.

**Leverage Risk**: Many alternatives use significant leverage, amplifying both gains and losses.

**Transparency Risk**: Limited disclosure compared to public securities.

**Manager Risk**: Performance heavily dependent on manager skill in many alternatives.

**Valuation Risk**: Illiquid assets may be infrequently or subjectively valued.

**Concentration Risk**: Alternatives often involve concentrated positions.

## Performance Measurement
Evaluating alternative investment performance:

**Internal Rate of Return (IRR)**: Common metric for private equity and real estate, measuring time-weighted return accounting for cash flows.

**Public Market Equivalent (PME)**: Compares private investment returns to public market returns over same period with same cash flow pattern.

**Alpha Generation**: Assessing whether returns compensate for illiquidity and complexity.

**Risk-Adjusted Returns**: Using metrics appropriate for alternative risk profiles (Sortino ratio for hedge funds, etc.).

**Benchmarking**: Comparing to relevant alternative indices or peer groups.

## Due Diligence Process
Investigating alternative investments:

**Manager Evaluation**: Track record, team stability, investment process, risk management.

**Strategy Understanding**: Clear explanation of how returns are generated, edge versus competitors.

**Fee Analysis**: All fees and expenses, including hidden costs.

**Legal Structure**: Partnership agreements, rights, restrictions, liquidity terms.

**Operational Due Diligence**: Back-office capabilities, compliance, cybersecurity.

**Reference Checks**: Speaking with current and former investors.

## The Complete Portfolio
Integrating all components:

**Asset-Liability Matching**: Aligning investments with future spending needs.

**Risk Budgeting**: Allocating risk across traditional and alternative investments.

**Rebalancing Strategy**: How to rebalance with illiquid alternatives.

**Liquidity Tiering**: Structuring portfolio with different liquidity layers.

**Tax Efficiency**: Considering tax implications of different investments and structures.

**Reporting and Communication**: Explaining complex portfolio to clients.

Remember: Alternatives can enhance portfolios but require careful selection, appropriate sizing, and ongoing monitoring. They should complement, not replace, a solid core of traditional investments. The complete portfolio balances growth, income, stability, and liquidity across all available investment opportunities.
      `,
      quiz: [
        {
          id: 1,
          question: "What distinguishes alternative investments from traditional investments?",
          options: [
            "Often less liquid, more complex, with different risk-return profiles",
            "Always higher returning",
            "Only for alternative investors",
            "Completely replacing traditional investments"
          ],
          correctAnswer: 0,
          explanation: "Alternatives typically feature illiquidity, complexity, and different characteristics than stocks and bonds."
        },
        {
          id: 2,
          question: "What are REITs?",
          options: [
            "Publicly traded companies owning income-producing real estate",
            "Real estate investment teams",
            "Rental income trusts",
            "Real estate insurance trusts"
          ],
          correctAnswer: 0,
          explanation: "REITs provide liquid exposure to real estate with dividend distribution requirements."
        },
        {
          id: 3,
          question: "What is the J-curve effect in private equity?",
          options: [
            "Early negative returns followed by positive returns as investments mature",
            "J-shaped return pattern",
            "Jump in returns curve",
            "Justification curve for investments"
          ],
          correctAnswer: 0,
          explanation: "The J-curve describes initial negative returns from fees followed by positive returns from maturing investments."
        },
        {
          id: 4,
          question: "What is a typical hedge fund fee structure?",
          options: [
            "2% management fee plus 20% of profits above hurdle",
            "1% flat fee only",
            "No management fee, 30% of profits",
            "Fees based on assets only"
          ],
          correctAnswer: 0,
          explanation: "\"2 and 20\" is common but varies, with performance fees incentivizing outperformance."
        },
        {
          id: 5,
          question: "Why invest in commodities?",
          options: [
            "Inflation hedge and diversification",
            "Guaranteed high returns",
            "No risk involved",
            "Only for commodity experts"
          ],
          correctAnswer: 0,
          explanation: "Commodities often rise with inflation and have low correlation with financial assets."
        },
        {
          id: 6,
          question: "What characterizes infrastructure investments?",
          options: [
            "Stable cash flows and inflation linkage",
            "High volatility and growth",
            "Short-term returns",
            "Technology focus"
          ],
          correctAnswer: 0,
          explanation: "Infrastructure provides essential services with regulated or contracted cash flows."
        },
        {
          id: 7,
          question: "What is typical alternative allocation in portfolios?",
          options: [
            "5-25% depending on objectives and risk tolerance",
            "Always 50% or more",
            "Only for very wealthy investors",
            "Should replace all traditional investments"
          ],
          correctAnswer: 0,
          explanation: "Alternatives typically complement rather than replace traditional investments."
        },
        {
          id: 8,
          question: "What is liquidity risk with alternatives?",
          options: [
            "Difficulty selling quickly without significant price concessions",
            "Risk of having too much cash",
            "Risk from liquid alternatives",
            "No risk if held long-term"
          ],
          correctAnswer: 0,
          explanation: "Many alternatives have lock-up periods or limited secondary markets."
        },
        {
          id: 9,
          question: "What does IRR measure for private equity?",
          options: [
            "Time-weighted return accounting for cash flow timing",
            "Initial return rate",
            "Interest rate risk",
            "Immediate return ratio"
          ],
          correctAnswer: 0,
          explanation: "IRR accounts for when cash flows occur, important for investments with irregular distributions."
        },
        {
          id: 10,
          question: "What is due diligence for alternatives?",
          options: [
            "Thorough investigation given complexity and opacity",
            "Simple background check",
            "Only checking past returns",
            "Diligently investing"
          ],
          correctAnswer: 0,
          explanation: "Due diligence is critical for alternatives given their complexity and limited transparency."
        },
        {
          id: 11,
          question: "What is venture capital?",
          options: [
            "Investing in early-stage companies with high growth potential",
            "Capital for adventures",
            "Risky capital investments",
            "Venturing into new markets"
          ],
          correctAnswer: 0,
          explanation: "Venture capital funds startups and early-stage companies with high growth potential."
        },
        {
          id: 12,
          question: "What is long/short equity strategy?",
          options: [
            "Long positions in expected winners, short positions in expected losers",
            "Long-term and short-term mixes",
            "Lengthy short selling",
            "Long only with short breaks"
          ],
          correctAnswer: 0,
          explanation: "Long/short strategies aim to profit from both rising and falling stock prices."
        },
        {
          id: 13,
          question: "What does contango mean in commodities?",
          options: [
            "Futures prices higher than spot prices, creating negative roll yield",
            "Continuation of trends",
            "Content with gains",
            "Continuing gains"
          ],
          correctAnswer: 0,
          explanation: "Contango occurs when futures prices exceed spot prices, creating costs when rolling contracts."
        },
        {
          id: 14,
          question: "What is the illiquidity premium?",
          options: [
            "Extra return expected for lack of liquidity",
            "Premium for liquid assets",
            "Bonus for illiquid investments",
            "Payment for liquidity"
          ],
          correctAnswer: 0,
          explanation: "Investors require higher returns to compensate for inability to quickly sell investments."
        },
        {
          id: 15,
          question: "What is asset-liability matching?",
          options: [
            "Aligning investments with future spending needs",
            "Matching assets to liabilities on balance sheet",
            "Equal assets and liabilities",
            "Liability for assets"
          ],
          correctAnswer: 0,
          explanation: "Asset-liability matching ensures investments can fund future obligations."
        },
        {
          id: 16,
          question: "What are managed futures?",
          options: [
            "Systematic trading in futures markets based on quantitative models",
            "Managing future investments",
            "Futures that are managed",
            "Management of future returns"
          ],
          correctAnswer: 0,
          explanation: "Managed futures use systematic approaches to trade futures contracts across asset classes."
        },
        {
          id: 17,
          question: "What is growth equity?",
          options: [
            "Investing in established companies needing capital for expansion",
            "Equity that grows",
            "Growing equity markets",
            "Equity for growth only"
          ],
          correctAnswer: 0,
          explanation: "Growth equity sits between venture capital and buyouts in company lifecycle and risk profile."
        },
        {
          id: 18,
          question: "What is PME?",
          options: [
            "Public Market Equivalent - comparing private returns to public market returns",
            "Private Market Equivalent",
            "Portfolio Management Evaluation",
            "Performance Measurement Estimate"
          ],
          correctAnswer: 0,
          explanation: "PME allows apples-to-apples comparison of private investments to public market alternatives."
        },
        {
          id: 19,
          question: "What is liquidity tiering?",
          options: [
            "Structuring portfolio with different liquidity layers",
            "Tiered liquidity system",
            "Liquidity in tiers",
            "Tiered investment approach"
          ],
          correctAnswer: 0,
          explanation: "Liquidity tiering ensures sufficient liquid assets for near-term needs while investing illiquid assets for longer term."
        },
        {
          id: 20,
          question: "How should alternatives be used in portfolios?",
          options: [
            "To complement, not replace, a solid core of traditional investments",
            "As the entire portfolio",
            "Only for speculation",
            "To replace all bonds"
          ],
          correctAnswer: 0,
          explanation: "Alternatives should enhance diversification and returns while maintaining portfolio balance."
        }
      ]
    }
  ],
  
  // Final Exam (40 questions covering all modules)
  finalExam: {
    title: "Portfolio Management Diploma Final Exam",
    description: "Comprehensive exam covering all 6 modules. You need to score 70% or higher to pass.",
    passingScore: 28, // 70% of 40 questions
    questions: [
      // Module 1 Questions (7 questions)
      {
        id: 1,
        question: "What is the key insight of Modern Portfolio Theory?",
        options: [
          "Portfolios should consider how assets interact, not just individual returns",
          "Only high-return assets should be selected",
          "Risk should be ignored if returns are high enough",
          "All assets should have the same expected return"
        ],
        correctAnswer: 0,
        explanation: "MPT emphasizes portfolio construction considering asset interactions and diversification.",
        module: 1
      },
      {
        id: 2,
        question: "What does diversification achieve?",
        options: [
          "Reduces portfolio risk without necessarily reducing expected return",
          "Guarantees higher returns",
          "Eliminates all investment risk",
          "Always increases portfolio returns"
        ],
        correctAnswer: 0,
        explanation: "Diversification reduces unsystematic risk through combining imperfectly correlated assets.",
        module: 1
      },
      {
        id: 3,
        question: "What is the efficient frontier?",
        options: [
          "Set of portfolios offering highest return for given risk or lowest risk for given return",
          "Line connecting all possible portfolios",
          "Only the highest returning portfolio",
          "Portfolios with zero risk"
        ],
        correctAnswer: 0,
        explanation: "The efficient frontier represents optimal risk-return trade-offs for portfolios.",
        module: 1
      },
      {
        id: 4,
        question: "What is systematic risk?",
        options: [
          "Market risk affecting all assets that cannot be diversified away",
          "Risk specific to individual companies",
          "Risk that can be eliminated through diversification",
          "Risk from poor management decisions"
        ],
        correctAnswer: 0,
        explanation: "Systematic risk is market-wide risk that affects all investments.",
        module: 1
      },
      {
        id: 5,
        question: "What does beta measure in CAPM?",
        options: [
          "An asset's sensitivity to market movements",
          "Total risk of an asset",
          "Expected return of an asset",
          "Correlation between two assets"
        ],
        correctAnswer: 0,
        explanation: "Beta quantifies how much an asset's returns move relative to overall market returns.",
        module: 1
      },
      {
        id: 6,
        question: "What is the Capital Market Line?",
        options: [
          "Line showing risk-return combinations of risk-free asset combined with risky portfolio",
          "Boundary of all possible portfolios",
          "Line connecting individual stocks",
          "Historical market return trend"
        ],
        correctAnswer: 0,
        explanation: "CML shows efficient portfolios when combining risky assets with a risk-free asset.",
        module: 1
      },
      {
        id: 7,
        question: "What does correlation measure?",
        options: [
          "How two assets move relative to each other",
          "Total risk of a portfolio",
          "Expected returns of assets",
          "Difference between two returns"
        ],
        correctAnswer: 0,
        explanation: "Correlation quantifies the relationship between returns of two assets.",
        module: 1
      },
      
      // Module 2 Questions (7 questions)
      {
        id: 8,
        question: "What does research show is the primary determinant of portfolio returns?",
        options: [
          "Asset allocation",
          "Market timing",
          "Security selection",
          "Economic forecasts"
        ],
        correctAnswer: 0,
        explanation: "Asset allocation explains most portfolio return variability over time.",
        module: 2
      },
      {
        id: 9,
        question: "What is strategic asset allocation?",
        options: [
          "Long-term target weights for asset classes based on investor objectives",
          "Daily trading based on market news",
          "Buying only the highest returning assets",
          "Changing allocation with every market move"
        ],
        correctAnswer: 0,
        explanation: "Strategic allocation establishes long-term policy targets.",
        module: 2
      },
      {
        id: 10,
        question: "What is rebalancing?",
        options: [
          "Adjusting portfolio back to target weights after market movements",
          "Changing target weights frequently",
          "Selling all assets and starting over",
          "Only buying more of winning assets"
        ],
        correctAnswer: 0,
        explanation: "Rebalancing maintains desired risk profile and enforces discipline.",
        module: 2
      },
      {
        id: 11,
        question: "What is tactical asset allocation?",
        options: [
          "Short-term adjustments around strategic targets based on market outlook",
          "Never changing the allocation",
          "Only investing in tactical industries",
          "Military investment strategy"
        ],
        correctAnswer: 0,
        explanation: "Tactical allocation involves temporary deviations from strategic targets.",
        module: 2
      },
      {
        id: 12,
        question: "What is the core-satellite approach?",
        options: [
          "Combining passive core with active satellite strategies",
          "Investing only in space-related stocks",
          "Centralized investment management",
          "Satellite tracking of investments"
        ],
        correctAnswer: 0,
        explanation: "Core-satellite uses low-cost passive core with active satellite strategies.",
        module: 2
      },
      {
        id: 13,
        question: "What are target date funds?",
        options: [
          "Funds that automatically adjust allocation as target date approaches",
          "Funds targeting specific dates for high returns",
          "Funds that expire on certain dates",
          "Funds that only invest in dated securities"
        ],
        correctAnswer: 0,
        explanation: "Target date funds gradually become more conservative as target date nears.",
        module: 2
      },
      {
        id: 14,
        question: "What is home country bias?",
        options: [
          "Tendency to overweight domestic investments",
          "Bias against home purchases",
          "Preference for domestic products",
          "Avoiding foreign investments completely"
        ],
        correctAnswer: 0,
        explanation: "Home country bias reduces international diversification benefits.",
        module: 2
      },
      
      // Module 3 Questions (6 questions)
      {
        id: 15,
        question: "What is price risk?",
        options: [
          "Risk that asset prices will decline",
          "Risk of paying too much",
          "Risk from pricing errors",
          "Risk of price controls"
        ],
        correctAnswer: 0,
        explanation: "Price risk is the possibility of losses from decreases in asset values.",
        module: 3
      },
      {
        id: 16,
        question: "What does standard deviation measure?",
        options: [
          "Total volatility or dispersion of returns",
          "Average return only",
          "Maximum possible loss",
          "Probability of gain"
        ],
        correctAnswer: 0,
        explanation: "Standard deviation quantifies how much returns vary from their average.",
        module: 3
      },
      {
        id: 17,
        question: "What is Value at Risk (VaR)?",
        options: [
          "Estimates maximum loss over time at given confidence level",
          "Value added from risk taking",
          "Variable annual return",
          "Valuation adjustment ratio"
        ],
        correctAnswer: 0,
        explanation: "VaR estimates worst expected loss over specified period at given confidence.",
        module: 3
      },
      {
        id: 18,
        question: "What does the Sharpe ratio measure?",
        options: [
          "Excess return per unit of total risk",
          "Total return only",
          "Risk without considering returns",
          "Probability of beating the market"
        ],
        correctAnswer: 0,
        explanation: "Sharpe ratio evaluates risk-adjusted performance comparing excess returns to volatility.",
        module: 3
      },
      {
        id: 19,
        question: "What is the first step in risk management process?",
        options: [
          "Risk identification",
          "Risk measurement",
          "Risk control",
          "Risk reporting"
        ],
        correctAnswer: 0,
        explanation: "You must identify what risks exist before measuring or managing them.",
        module: 3
      },
      {
        id: 20,
        question: "What risk does diversification primarily reduce?",
        options: [
          "Unsystematic risk",
          "Systematic risk",
          "All types of risk",
          "Market risk"
        ],
        correctAnswer: 0,
        explanation: "Diversification reduces company-specific risk through spreading investments.",
        module: 3
      },
      
      // Module 4 Questions (6 questions)
      {
        id: 21,
        question: "What is the face amount repaid at bond maturity called?",
        options: [
          "Principal or par value",
          "Coupon value",
          "Market value",
          "Book value"
        ],
        correctAnswer: 0,
        explanation: "Principal or par value is the amount issuer promises to repay at maturity.",
        module: 4
      },
      {
        id: 22,
        question: "What does yield to maturity (YTM) measure?",
        options: [
          "Total return if bond held to maturity with coupons reinvested at YTM",
          "Current income only",
          "Guaranteed return",
          "Return if sold today"
        ],
        correctAnswer: 0,
        explanation: "YTM assumes hold to maturity and reinvestment at YTM rate.",
        module: 4
      },
      {
        id: 23,
        question: "What is a normal yield curve shape?",
        options: [
          "Upward sloping - longer maturities have higher yields",
          "Downward sloping - shorter maturities have higher yields",
          "Flat - little difference across maturities",
          "Humped - middle maturities highest"
        ],
        correctAnswer: 0,
        explanation: "Normal curve slopes upward, reflecting term premium for longer commitments.",
        module: 4
      },
      {
        id: 24,
        question: "What does duration measure?",
        options: [
          "Interest rate sensitivity of bond prices",
          "Time until bond is issued",
          "Length of coupon payments",
          "Bond's age"
        ],
        correctAnswer: 0,
        explanation: "Duration estimates how much bond prices change when interest rates change.",
        module: 4
      },
      {
        id: 25,
        question: "What are investment grade bonds?",
        options: [
          "BBB-/Baa3 and above credit rating",
          "Any bond that pays interest",
          "Only government bonds",
          "Bonds with guaranteed returns"
        ],
        correctAnswer: 0,
        explanation: "Investment grade bonds have credit ratings of BBB-/Baa3 or higher.",
        module: 4
      },
      {
        id: 26,
        question: "What is a bond laddering strategy?",
        options: [
          "Construct portfolio with bonds maturing evenly over time",
          "Only buying long-term bonds",
          "Buying bonds of increasing risk",
          "Climbing the bond quality ladder"
        ],
        correctAnswer: 0,
        explanation: "Laddering spreads maturities for regular cash flow and reinvestment risk reduction.",
        module: 4
      },
      
      // Module 5 Questions (7 questions)
      {
        id: 27,
        question: "What is value investing?",
        options: [
          "Buying stocks trading below intrinsic value",
          "Buying only valuable companies",
          "Investing for ethical values",
          "Buying stocks with highest prices"
        ],
        correctAnswer: 0,
        explanation: "Value investing seeks stocks priced below estimated intrinsic value.",
        module: 5
      },
      {
        id: 28,
        question: "What is top-down analysis?",
        options: [
          "Starting with macroeconomic, then industry, then company analysis",
          "Analyzing only top companies",
          "Looking at highest prices first",
          "Starting with company details first"
        ],
        correctAnswer: 0,
        explanation: "Top-down begins with big picture before drilling to specific companies.",
        module: 5
      },
      {
        id: 29,
        question: "What are factor models?",
        options: [
          "Identifying characteristics that explain stock returns",
          "Models factoring in all risks",
          "Multiplication models for returns",
          "Simple return calculators"
        ],
        correctAnswer: 0,
        explanation: "Factor models identify systematic return sources like value, size, momentum.",
        module: 5
      },
      {
        id: 30,
        question: "What is market capitalization weighting?",
        options: [
          "Weights proportional to company size",
          "Equal weights for all stocks",
          "Weights based on trading volume",
          "Weights by market share"
        ],
        correctAnswer: 0,
        explanation: "Market cap weighting gives larger companies greater portfolio weight.",
        module: 5
      },
      {
        id: 31,
        question: "What does active share measure?",
        options: [
          "How different portfolio is from benchmark",
          "How actively portfolio trades",
          "Share of active management",
          "Active participation in companies"
        ],
        correctAnswer: 0,
        explanation: "Active share quantifies percentage of portfolio differing from benchmark.",
        module: 5
      },
      {
        id: 32,
        question: "What is negative screening in ESG?",
        options: [
          "Excluding companies involved in controversial activities",
          "Screening out negative returns",
          "Looking for negative factors",
          "Avoiding all screening"
        ],
        correctAnswer: 0,
        explanation: "Negative screening avoids investments in companies with undesirable practices.",
        module: 5
      },
      {
        id: 33,
        question: "What is implementation shortfall?",
        options: [
          "Difference between paper portfolio return and actual return after trading costs",
          "Shortfall in implementation",
          "Failure to implement strategy",
          "Missing implementation deadline"
        ],
        correctAnswer: 0,
        explanation: "Implementation shortfall measures cost of turning decisions into actual portfolios.",
        module: 5
      },
      
      // Module 6 Questions (7 questions)
      {
        id: 34,
        question: "What distinguishes alternative investments from traditional investments?",
        options: [
          "Often less liquid, more complex, with different risk-return profiles",
          "Always higher returning",
          "Only for alternative investors",
          "Completely replacing traditional investments"
        ],
        correctAnswer: 0,
        explanation: "Alternatives feature illiquidity, complexity, and different characteristics.",
        module: 6
      },
      {
        id: 35,
        question: "What are REITs?",
        options: [
          "Publicly traded companies owning income-producing real estate",
          "Real estate investment teams",
          "Rental income trusts",
          "Real estate insurance trusts"
        ],
        correctAnswer: 0,
        explanation: "REITs provide liquid exposure to real estate with dividend requirements.",
        module: 6
      },
      {
        id: 36,
        question: "What is the J-curve effect in private equity?",
        options: [
          "Early negative returns followed by positive returns as investments mature",
          "J-shaped return pattern",
          "Jump in returns curve",
          "Justification curve for investments"
        ],
        correctAnswer: 0,
        explanation: "J-curve describes initial negative returns from fees followed by positive returns.",
        module: 6
      },
      {
        id: 37,
        question: "What is a typical hedge fund fee structure?",
        options: [
          "2% management fee plus 20% of profits above hurdle",
          "1% flat fee only",
          "No management fee, 30% of profits",
          "Fees based on assets only"
        ],
        correctAnswer: 0,
        explanation: "\"2 and 20\" is common hedge fund fee structure.",
        module: 6
      },
      {
        id: 38,
        question: "Why invest in commodities?",
        options: [
          "Inflation hedge and diversification",
          "Guaranteed high returns",
          "No risk involved",
          "Only for commodity experts"
        ],
        correctAnswer: 0,
        explanation: "Commodities often rise with inflation and diversify from financial assets.",
        module: 6
      },
      {
        id: 39,
        question: "What characterizes infrastructure investments?",
        options: [
          "Stable cash flows and inflation linkage",
          "High volatility and growth",
          "Short-term returns",
          "Technology focus"
        ],
        correctAnswer: 0,
        explanation: "Infrastructure provides essential services with stable, inflation-linked cash flows.",
        module: 6
      },
      {
        id: 40,
        question: "What is typical alternative allocation in portfolios?",
        options: [
          "5-25% depending on objectives and risk tolerance",
          "Always 50% or more",
          "Only for very wealthy investors",
          "Should replace all traditional investments"
        ],
        correctAnswer: 0,
        explanation: "Alternatives typically complement rather than replace traditional investments.",
        module: 6
      }
    ]
  }
};
