// Wealth Management (Diploma) Course
// Advanced course with 6 modules and final exam

export const wealthManagementDiploma = {
  // 1. COURSE METADATA & IDENTIFICATION
  id: "wealth-management-diploma",
  title: "Wealth Management (Diploma)",
  description: "Advanced strategies for wealth accumulation, preservation, and transfer. Covers investment portfolio construction, tax optimization, estate planning, and risk management for high-net-worth individuals and families.",
  duration: "12 weeks",
  timeCommitment: "6-8 hours per week",
  price: 18,
  prerequisite: "Financial Planning (Certificate)",
  icon: "🏦",
  badge: "Diploma",
  level: "Advanced",
  
  // 2. MODULES ARCHITECTURE (6 Advanced Modules)
  modules: [
    {
      // MODULE 1: ADVANCED INVESTMENT STRATEGIES
      id: 1,
      title: "Advanced Portfolio Construction and Management",
      completed: false,
      content: `# Advanced Portfolio Construction and Management

Welcome to wealth management. This course builds upon basic investment knowledge to explore sophisticated strategies for wealth accumulation and preservation. We begin with advanced portfolio construction.

## Modern Portfolio Theory (MPT) Foundations

### Harry Markowitz's Nobel Prize-Winning Work
**Key concepts:**
- **Efficient frontier**: Optimal portfolios offering highest expected return for given risk level
- **Diversification benefits**: Risk reduction through uncorrelated assets
- **Risk-return tradeoff**: Higher expected returns require accepting higher risk
- **Portfolio optimization**: Mathematical selection of asset weights

**Mathematical foundation:**
- Expected return: Weighted average of component assets
- Portfolio variance: Function of individual variances and covariances
- Correlation coefficient (-1 to +1): Measures relationship between assets
- Optimal portfolio: Maximizes Sharpe ratio (return per unit of risk)

## Asset Allocation Frameworks

### Strategic vs. Tactical Asset Allocation

**Strategic allocation:**
- Long-term target weights based on investment policy
- Rebalanced periodically to maintain targets
- Based on risk tolerance, time horizon, goals
- Foundation of disciplined investing

**Tactical allocation:**
- Short-term deviations from strategic targets
- Based on market views or valuation opportunities
- Requires active management skill
- Typically limited to 10-15% of portfolio

### Core-Satellite Approach

**Core holdings (60-80%):**
- Low-cost index funds or ETFs
- Broad market exposure
- Strategic asset allocation
- Passive management style

**Satellite holdings (20-40%):**
- Active management strategies
- Specialized or alternative investments
- Tactical opportunities
- Higher expected returns (and risk)

## Factor-Based Investing

### Beyond Traditional Asset Classes

**Common factors identified by research:**
1. **Market factor** (Beta): Exposure to overall market
2. **Size factor**: Small-cap outperformance over time
3. **Value factor**: Cheap stocks outperform expensive
4. **Momentum factor**: Recent winners continue winning
5. **Quality factor**: Profitable, stable companies outperform
6. **Low volatility factor**: Low-volatility stocks outperform

**Implementation strategies:**
- Smart beta ETFs targeting specific factors
- Multi-factor funds combining several factors
- Factor timing (though evidence mixed)
- Integration with traditional asset allocation

## Alternative Investments

### Expanding Beyond Stocks and Bonds

**Real assets:**
- **Real estate**: Direct ownership, REITs, private funds
- **Commodities**: Physical, futures, commodity-linked securities
- **Infrastructure**: Utilities, transportation, energy assets
- **Timberland and farmland**: Inflation protection, diversification

**Private markets:**
- **Private equity**: Buyouts, venture capital, growth equity
- **Private debt**: Direct lending, mezzanine financing, distressed debt
- **Hedge funds**: Various strategies with different risk-return profiles

**Structured products:**
- Options strategies for income or protection
- Structured notes with principal protection features
- Annuities with living benefits

## Risk Management Techniques

### Advanced Risk Measurement

**Risk metrics:**
- **Standard deviation**: Total volatility
- **Beta**: Sensitivity to market movements
- **Value at Risk (VaR)**: Maximum loss over period at confidence level
- **Conditional VaR (CVaR)**: Expected loss beyond VaR threshold
- **Maximum drawdown**: Largest peak-to-trough decline
- **Sortino ratio**: Return per unit of downside risk

**Stress testing:**
- Historical scenarios (2008 financial crisis, 2020 pandemic)
- Hypothetical scenarios (interest rate shocks, geopolitical events)
- Reverse stress testing: Identifying scenarios causing specific losses

### Hedging Strategies

**Common hedging instruments:**
- Options (puts for protection, collars for cost reduction)
- Futures and forwards for commodity or currency exposure
- Inverse ETFs for short exposure without margin
- Variable annuities with guaranteed minimum benefits

**Hedging considerations:**
- Cost of protection (premiums, opportunity cost)
- Basis risk (imperfect correlation)
- Tax implications
- Monitoring and adjustment requirements

## Behavioral Finance Applications

### Overcoming Investor Biases

**Common biases affecting wealth management:**
- **Overconfidence**: Excessive trading, underestimating risk
- **Loss aversion**: Holding losers too long, selling winners too early
- **Recency bias**: Overweighting recent events
- **Confirmation bias**: Seeking confirming information, ignoring contrary
- **Herd behavior**: Following crowd rather than independent analysis

**Institutionalizing discipline:**
- Investment policy statement (IPS) as behavioral anchor
- Regular rebalancing against market movements
- Pre-commitment to strategies during emotional neutrality
- Third-party oversight or accountability

## Performance Measurement and Evaluation

### Attribution Analysis

**Decomposing returns:**
- **Asset allocation effect**: Impact of category weight decisions
- **Security selection effect**: Impact of individual security choices
- **Interaction effect**: Combined impact of allocation and selection
- **Market timing effect**: Impact of changing exposures over time

**Benchmark selection:**
- Custom benchmarks reflecting investment policy
- Peer group comparisons (with caution)
- Absolute return targets when appropriate
- Risk-adjusted performance metrics (Sharpe, Sortino, Information ratios)

## Technology in Portfolio Management

### Digital Wealth Management Tools

**Robo-advisors:**
- Algorithmic portfolio construction and rebalancing
- Tax-loss harvesting automation
- Lower minimums and fees
- Integration with financial planning

**Big data applications:**
- Alternative data sources for investment insights
- Sentiment analysis from social media and news
- Machine learning for pattern recognition
- Risk modeling with greater granularity

**Blockchain and digital assets:**
- Cryptocurrency as alternative asset class
- Tokenization of traditional assets
- Smart contracts for automated execution
- Considerations: Volatility, regulation, custody

## Implementation Considerations

### Tax-Efficient Investing

**Location optimization:**
- Tax-inefficient assets in tax-deferred accounts
- Tax-efficient assets in taxable accounts
- Municipal bonds for high-tax-bracket investors
- Harvesting losses to offset gains

**Timing considerations:**
- Holding periods for long-term capital gains
- Bunching deductions in certain years
- Roth conversions during low-income years
- Required minimum distribution planning

### Cost Management

**Fee structures:**
- Asset-based fees (AUM percentage)
- Hourly or fixed fees for planning
- Performance-based fees (with careful consideration)
- Transaction costs (commissions, spreads, market impact)

**Total cost analysis:**
- Explicit costs (management fees, transaction costs)
- Implicit costs (bid-ask spreads, market impact)
- Tax costs (turnover generating capital gains)
- Opportunity costs (cash drag, inefficient execution)

Remember: Advanced portfolio management balances sophisticated strategies with disciplined execution. The most elegant strategy fails without proper implementation, monitoring, and adjustment over time.`,
      
      quiz: [
        {
          id: 1,
          question: "What does Modern Portfolio Theory's efficient frontier represent?",
          options: ["All possible portfolios", "Portfolios with highest return for given risk", "Only 100% stock portfolios", "Only government bonds"],
          correctAnswer: 1,
          explanation: "Efficient frontier shows optimal portfolios maximizing expected return for each risk level."
        },
        {
          id: 2,
          question: "What is the core-satellite approach?",
          options: ["All active management", "Core passive holdings with satellite active strategies", "Only alternative investments", "100% cash core"],
          correctAnswer: 1,
          explanation: "Core (passive, low-cost) provides foundation; satellite (active, specialized) seeks alpha."
        },
        {
          id: 3,
          question: "Which is NOT a common factor in factor-based investing?",
          options: ["Size factor", "Value factor", "CEO height factor", "Momentum factor"],
          correctAnswer: 2,
          explanation: "Size, value, momentum, quality, and low volatility are well-researched factors; CEO height is not."
        },
        {
          id: 4,
          question: "What does Value at Risk (VaR) measure?",
          options: ["Maximum potential gain", "Maximum loss over period at confidence level", "Average return", "Portfolio beta"],
          correctAnswer: 1,
          explanation: "VaR estimates maximum loss over specified period at given confidence level (e.g., 95%)."
        },
        {
          id: 5,
          question: "What is loss aversion in behavioral finance?",
          options: ["Ignoring all losses", "Feeling losses more acutely than equivalent gains", "Loving losses", "Only considering gains"],
          correctAnswer: 1,
          explanation: "Loss aversion: psychological pain of loss greater than pleasure from equivalent gain."
        },
        {
          id: 6,
          question: "What does attribution analysis decompose?",
          options: ["Only fees", "Sources of portfolio returns", "Tax liabilities", "Inheritance values"],
          correctAnswer: 1,
          explanation: "Attribution analysis breaks returns into allocation, selection, timing, and interaction effects."
        },
        {
          id: 7,
          question: "What is tactical asset allocation?",
          options: ["Never changing allocations", "Short-term deviations from strategic targets", "Only long-term bonds", "100% equity always"],
          correctAnswer: 1,
          explanation: "Tactical allocation involves temporary deviations based on market views or opportunities."
        },
        {
          id: 8,
          question: "Which is a real asset?",
          options: ["Corporate bond", "Real estate", "Money market fund", "Growth stock"],
          correctAnswer: 1,
          explanation: "Real assets include real estate, commodities, infrastructure-physical assets with intrinsic value."
        },
        {
          id: 9,
          question: "What does the Sortino ratio measure?",
          options: ["Total return", "Return per unit of total risk", "Return per unit of downside risk", "Tax efficiency"],
          correctAnswer: 2,
          explanation: "Sortino ratio = (Return - Risk-free rate) / Downside deviation, focusing only on bad volatility."
        },
        {
          id: 10,
          question: "What is location optimization in tax-efficient investing?",
          options: ["Physical location of assets", "Placing tax-inefficient assets in tax-advantaged accounts", "Only using taxable accounts", "Ignoring taxes"],
          correctAnswer: 1,
          explanation: "Location optimization places high-tax investments in tax-deferred accounts to improve after-tax returns."
        },
        {
          id: 11,
          question: "What is the Sharpe ratio formula?",
          options: ["(Return - Risk-free rate) / Standard deviation", "Return / Risk", "Alpha / Beta", "Gains / Losses"],
          correctAnswer: 0,
          explanation: "Sharpe ratio = (Portfolio return - Risk-free rate) / Portfolio standard deviation."
        },
        {
          id: 12,
          question: "What characterizes strategic asset allocation?",
          options: ["Daily changes", "Long-term targets based on investment policy", "Following market trends", "No rebalancing"],
          correctAnswer: 1,
          explanation: "Strategic allocation sets long-term targets reflecting investor's risk tolerance and goals."
        },
        {
          id: 13,
          question: "Which is an alternative investment?",
          options: ["S&P 500 index fund", "Private equity", "Treasury bond", "Blue-chip stock"],
          correctAnswer: 1,
          explanation: "Alternative investments include private equity, hedge funds, real assets beyond traditional stocks/bonds."
        },
        {
          id: 14,
          question: "What is maximum drawdown?",
          options: ["Maximum monthly return", "Largest peak-to-trough decline", "Average loss", "Standard deviation"],
          correctAnswer: 1,
          explanation: "Maximum drawdown measures largest percentage decline from peak to trough."
        },
        {
          id: 15,
          question: "What behavioral bias involves following the crowd?",
          options: ["Herd behavior", "Independent thinking", "Rational analysis", "Contrarian investing"],
          correctAnswer: 0,
          explanation: "Herd behavior: following others' actions rather than independent analysis."
        },
        {
          id: 16,
          question: "What does performance attribution separate?",
          options: ["Asset allocation and security selection effects", "Only manager skill", "Only market returns", "Tax effects only"],
          correctAnswer: 0,
          explanation: "Attribution separates allocation (category weight) and selection (within category) decisions."
        },
        {
          id: 17,
          question: "What is a collar options strategy?",
          options: ["Buying stock only", "Buying put and selling call for cost reduction", "Selling put only", "Buying call only"],
          correctAnswer: 1,
          explanation: "Collar: buy protective put, sell covered call to offset put cost, limits upside and downside."
        },
        {
          id: 18,
          question: "What is the value factor?",
          options: ["Expensive stocks outperform", "Cheap stocks outperform over time", "Only growth stocks matter", "No factor exists"],
          correctAnswer: 1,
          explanation: "Value factor: stocks with low price-to-book or other valuation metrics tend to outperform long-term."
        },
        {
          id: 19,
          question: "What is stress testing?",
          options: ["Only current conditions", "Analyzing portfolio under extreme scenarios", "Ignoring risks", "Only backward looking"],
          correctAnswer: 1,
          explanation: "Stress testing evaluates portfolio performance under historical or hypothetical extreme events."
        },
        {
          id: 20,
          question: "Why rebalance portfolios periodically?",
          options: ["Never rebalance", "Maintain target allocation, sell high/buy low", "Always chase performance", "Maximize taxes"],
          correctAnswer: 1,
          explanation: "Rebalancing maintains risk profile and systematically sells appreciated assets, buys depreciated ones."
        }
      ]
    },

    {
      // MODULE 2: TAX STRATEGIES FOR WEALTH
      id: 2,
      title: "Advanced Tax Planning and Efficiency Strategies",
      completed: false,
      content: `# Advanced Tax Planning and Efficiency Strategies

Tax planning is not about evasion-it's about legal optimization. For wealth management, understanding the tax code's opportunities can add significant value over an investor's lifetime.

## Tax Code Structure and Planning Philosophy

### Progressive Tax System Basics

**2024 federal income tax brackets (single filers):**
- 10%: $0 to $11,600
- 12%: $11,601 to $47,150
- 22%: $47,151 to $100,525
- 24%: $100,526 to $191,950
- 32%: $191,951 to $243,725
- 35%: $243,726 to $609,350
- 37%: Over $609,350

**Planning implications:**
- Marginal vs. effective tax rates
- Bracket management through income smoothing
- Tax diversification across account types
- Timing of recognition events

### Tax Diversification Strategy

**Three tax buckets:**
1. **Taxable accounts**: Contributions after-tax, growth taxed annually
2. **Tax-deferred accounts**: Contributions pre-tax, growth tax-deferred, withdrawals taxed as income
3. **Tax-free accounts**: Contributions after-tax, growth and withdrawals tax-free

**Optimal allocation:**
- Tax-inefficient investments in tax-advantaged accounts
- Tax-efficient investments in taxable accounts
- Consider current vs. expected future tax rates
- Liquidity needs and withdrawal timing

## Investment-Related Tax Strategies

### Asset Location Optimization

**Tax efficiency spectrum (least to most efficient):**
1. High-yield bonds (ordinary income)
2. Real estate investment trusts (REITs)
3. Active equity funds (high turnover)
4. Corporate bonds
5. Broad-market equity index funds/ETFs
6. Municipal bonds (tax-exempt)
7. Growth stocks with no dividends

**Implementation rules:**
- Highest-tax investments in tax-deferred accounts
- Lowest-tax investments in taxable accounts
- Municipal bonds in taxable accounts for high-bracket investors
- Consider state tax implications

### Tax-Loss Harvesting

**Mechanics:**
- Sell securities at a loss
- Use losses to offset capital gains
- Up to $3,000 annually against ordinary income
- Unlimited carryforward of excess losses

**Wash sale rule:**
- Cannot buy substantially identical security 30 days before or after sale
- Applies to all accounts (including spouse's and entities you control)
- "Substantially identical" interpretation: Same company's stock, options
- Workarounds: Similar but not identical securities, wait 31 days

**Strategic considerations:**
- Harvest losses throughout year, not just December
- Maintain market exposure with similar (not identical) securities
- Consider transaction costs and bid-ask spreads
- Track cost basis and holding periods meticulously

### Capital Gains Management

**Long-term vs. short-term rates:**
- Short-term: Ordinary income rates (held ≤1 year)
- Long-term: 0%, 15%, or 20% based on income (held >1 year)

**Specific identification method:**
- Choose which shares to sell for tax optimization
- Requires detailed cost basis tracking
- Optimal for tax-sensitive investors
- Default methods (FIFO, average cost) often less efficient

## Retirement Account Strategies

### Roth Conversion Planning

**When conversions make sense:**
- Current tax bracket lower than expected future bracket
- Temporary low-income years (career break, early retirement)
- Before Required Minimum Distributions (RMDs) begin
- To reduce future RMDs and associated taxes

**Conversion strategies:**
- Partial conversions to fill lower tax brackets
- Multi-year conversion planning to manage bracket creep
- Recharacterization options (limited but available in some cases)
- Consider impact on Medicare premiums and other phase-outs

### Required Minimum Distribution (RMD) Planning

**Current rules:**
- Begin at age 73 (SECURE 2.0 Act)
- Based on life expectancy and prior year-end balance
- Failure penalty: 25% of amount not withdrawn (reduced from 50%)

**RMD minimization strategies:**
- Roth conversions before RMD age
- Qualified charitable distributions (QCDs) after age 70½
- Consider spouse's age and beneficiary designations
- Lifetime giving to reduce future balances

## Estate and Gift Tax Planning

### Federal Transfer Tax System

**2024 exemptions and rates:**
- Estate and gift tax exemption: $13.61 million per person
- Generation-skipping transfer tax exemption: $13.61 million
- Top tax rate: 40% above exemption amounts
- Annual gift tax exclusion: $18,000 per recipient (2024)
- Unlimited marital deduction (for U.S. citizen spouses)

**Portability election:**
- Surviving spouse can use deceased spouse's unused exemption
- Requires timely filing of estate tax return (Form 706)
- Must elect portability on return
- State estate tax considerations (some states have lower exemptions)

### Lifetime Giving Strategies

**Annual exclusion gifts:**
- $18,000 per recipient per year (2024, indexed)
- No gift tax return required
- Unlimited number of recipients
- Direct payment of medical or educational expenses doesn't count

**Crummey powers:**
- Allows gifts to trusts to qualify for annual exclusion
- Beneficiaries get temporary withdrawal rights
- Common in ILITs (Irrevocable Life Insurance Trusts)
- Requires proper notification and administration

**Intra-family loans:**
- Minimum interest rates set monthly by IRS (Applicable Federal Rate)
- Below-market loans create imputed gifts
- Strategy for transferring wealth at low tax cost
- Documentation and compliance critical

## Business and Entity Planning

### Choice of Entity Tax Considerations

**Comparison of structures:**
- **C corporations**: Double taxation, 21% flat rate
- **S corporations**: Pass-through, avoids double tax, restrictions
- **Partnerships/LLCs**: Flexible allocation, self-employment tax considerations
- **Sole proprietorships**: Simplest but unlimited liability

**Qualified Small Business Stock (QSBS):**
- Section 1202 exclusion: Up to 100% exclusion of gain
- Requirements: C corporation, $50M max assets, active business
- Holding period: 5+ years
- $10 million or 10x basis limitation per issuer

### Captive Insurance Companies

**Tax-advantaged risk management:**
- Business creates its own insurance company
- Premiums deductible to operating company
- Investment income accumulates tax-deferred
- Risk distribution requirements to qualify as insurance
- 831(b) election: Up to $2.65 million in annual premiums (2024)

## International Tax Considerations

### Foreign Account Compliance

**Reporting requirements:**
- FBAR (FinCEN Form 114): Over $10,000 aggregate in foreign accounts
- FATCA (Form 8938): Higher thresholds based on residency
- PFIC (Passive Foreign Investment Company) rules
- Controlled Foreign Corporation (CFC) rules

**Tax treaties and planning:**
- Treaty shopping considerations
- Permanent establishment risks
- Transfer pricing compliance
- Withholding tax optimization

## Charitable Planning Strategies

### Donor-Advised Funds (DAFs)

**Advantages:**
- Immediate tax deduction upon contribution
- Assets grow tax-free
- Simplified administration vs. private foundation
- Anonymity possible for sensitive gifts
- Can accept complex assets (closely held stock, real estate)

**Strategic uses:**
- Bunching deductions in high-income years
- Pre-funding multi-year charitable commitments
- Avoiding capital gains on appreciated securities
- Estate planning vehicle

### Charitable Remainder Trusts (CRTs)

**Structure:**
- Donor transfers assets to trust
- Donor or beneficiaries receive income stream for term or life
- Remainder to charity at termination
- Partial charitable deduction based on present value of remainder

**Tax benefits:**
- Avoid capital gains on sale of appreciated assets
- Income tax deduction for present value of remainder
- Estate tax reduction
- Income stream customizable (fixed or percentage)

## State and Local Tax (SALT) Planning

### Residency Planning

**Domicile vs. residency:**
- Domicile: Permanent home, intent to return
- Residency: Physical presence threshold (varies by state)
- Multiple residency possibilities
- Tax implications of changing domicile

**High-tax state considerations:**
- Income tax rates up to 13.3% (California)
- Estate tax with lower exemptions than federal
- Inheritance taxes (some states)
- Planning opportunities before establishing residency

### Pass-Through Entity (PTE) Tax Elections

**SALT deduction workaround:**
- State laws allowing entity-level tax on pass-through income
- Entity deduction reduces federal taxable income
- Owners receive credit for taxes paid
- Circumvents $10,000 SALT deduction limitation

## Technology in Tax Planning

### Digital Tools and Automation

**Current applications:**
- Real-time tax impact calculators
- Automated tax-loss harvesting algorithms
- Blockchain for cost basis tracking
- AI for tax code monitoring and planning
- Integration between investment and tax software

**Future developments:**
- Predictive analytics for tax law changes
- Automated entity structure optimization
- Digital asset tax compliance tools
- Cross-border tax optimization algorithms

Remember: Tax planning is a year-round activity, not an April exercise. The best strategies are implemented proactively with careful consideration of current laws, proposed changes, and individual circumstances. Always consult qualified tax professionals for personalized advice.`,
      
      quiz: [
        {
          id: 1,
          question: "What is tax diversification?",
          options: ["Only taxable accounts", "Only tax-deferred accounts", "Using taxable, tax-deferred, and tax-free accounts", "Ignoring taxes"],
          correctAnswer: 2,
          explanation: "Tax diversification spreads assets across different tax-treatment accounts for flexibility."
        },
        {
          id: 2,
          question: "What is the wash sale rule period?",
          options: ["7 days", "30 days", "90 days", "1 year"],
          correctAnswer: 1,
          explanation: "Cannot buy substantially identical security 30 days before or after tax-loss sale."
        },
        {
          id: 3,
          question: "What is the 2024 annual gift tax exclusion?",
          options: ["$15,000", "$18,000", "$28,000", "Unlimited"],
          correctAnswer: 1,
          explanation: "$18,000 per recipient per year (2024, inflation-adjusted)."
        },
        {
          id: 4,
          question: "When do RMDs begin under SECURE 2.0?",
          options: ["Age 59½", "Age 70½", "Age 73", "Age 75"],
          correctAnswer: 2,
          explanation: "SECURE 2.0 increased RMD age to 73 (phasing to 75 by 2033)."
        },
        {
          id: 5,
          question: "What is portability in estate planning?",
          options: ["Moving assets physically", "Surviving spouse using deceased's unused exemption", "Only for small estates", "State tax only"],
          correctAnswer: 1,
          explanation: "Portability allows surviving spouse to use deceased spouse's unused estate tax exemption."
        },
        {
          id: 6,
          question: "What is the QSBS exclusion percentage?",
          options: ["50%", "75%", "100%", "No exclusion"],
          correctAnswer: 2,
          explanation: "Qualified Small Business Stock can exclude up to 100% of gain (subject to limitations)."
        },
        {
          id: 7,
          question: "What does FBAR stand for?",
          options: ["Foreign Bank Account Report", "Federal Bank Account Registration", "Foreign Business Asset Report", "Federal Banking Audit Requirement"],
          correctAnswer: 0,
          explanation: "FBAR: Report of Foreign Bank and Financial Accounts, required over $10,000 aggregate."
        },
        {
          id: 8,
          question: "What is a Donor-Advised Fund advantage?",
          options: ["No tax deduction", "Immediate deduction with later grantmaking", "Only for cash", "Complex administration"],
          correctAnswer: 1,
          explanation: "DAFs provide immediate tax deduction while allowing later distribution to charities."
        },
        {
          id: 9,
          question: "What is the top federal estate tax rate?",
          options: ["20%", "37%", "40%", "50%"],
          correctAnswer: 2,
          explanation: "Federal estate tax rate is 40% above exemption amount."
        },
        {
          id: 10,
          question: "What is specific identification for capital gains?",
          options: ["Average cost method", "Choosing which shares to sell for tax optimization", "Only FIFO", "Ignoring cost basis"],
          correctAnswer: 1,
          explanation: "Specific identification allows selling highest or lowest cost shares to manage gains/losses."
        },
        {
          id: 11,
          question: "What is tax-loss harvesting?",
          options: ["Selling winners only", "Selling losses to offset gains", "Ignoring losses", "Only in December"],
          correctAnswer: 1,
          explanation: "Realizing losses to offset capital gains and up to $3,000 ordinary income annually."
        },
        {
          id: 12,
          question: "What is the 2024 estate tax exemption?",
          options: ["$5.49 million", "$11.58 million", "$13.61 million", "Unlimited"],
          correctAnswer: 2,
          explanation: "$13.61 million per person (2024, inflation-adjusted)."
        },
        {
          id: 13,
          question: "What is a Crummey power?",
          options: ["Charitable deduction", "Temporary withdrawal right in trust for annual exclusion", "Business expense", "Retirement account feature"],
          correctAnswer: 1,
          explanation: "Crummey powers allow gifts to trusts to qualify for annual gift tax exclusion."
        },
        {
          id: 14,
          question: "What is the SALT deduction limitation?",
          options: ["$5,000", "$10,000", "$15,000", "No limitation"],
          correctAnswer: 1,
          explanation: "State and local tax deduction capped at $10,000 ($5,000 if married filing separately)."
        },
        {
          id: 15,
          question: "What is a Roth conversion?",
          options: ["Traditional to Roth IRA, paying taxes now", "Roth to Traditional", "Tax-free transfer", "Only for young investors"],
          correctAnswer: 0,
          explanation: "Converting Traditional IRA to Roth IRA, paying taxes now for tax-free future growth."
        },
        {
          id: 16,
          question: "What is the long-term capital gains rate for high-income taxpayers?",
          options: ["0%", "15%", "20%", "37%"],
          correctAnswer: 2,
          explanation: "20% rate applies to taxpayers above certain income thresholds."
        },
        {
          id: 17,
          question: "What is the unlimited marital deduction?",
          options: ["Only $100,000", "Unlimited transfers to citizen spouse tax-free", "Only for non-citizens", "State only"],
          correctAnswer: 1,
          explanation: "Unlimited assets can transfer to U.S. citizen spouse free of estate/gift tax."
        },
        {
          id: 18,
          question: "What is a Charitable Remainder Trust?",
          options: ["Only charity benefits", "Donor gets income stream, remainder to charity", "Only donor benefits", "Taxable to donor annually"],
          correctAnswer: 1,
          explanation: "CRT provides income to donor/beneficiaries for term, remainder to charity."
        },
        {
          id: 19,
          question: "What is the Applicable Federal Rate (AFR)?",
          options: ["Stock market rate", "Minimum interest rate for intra-family loans", "Credit card rate", "Mortgage rate"],
          correctAnswer: 1,
          explanation: "AFR: IRS-published minimum interest rates for loans to avoid imputed gift tax."
        },
        {
          id: 20,
          question: "What is the 831(b) election for captive insurance?",
          options: ["No premium limit", "Up to $2.65 million premiums (2024)", "Only for large corporations", "No tax benefits"],
          correctAnswer: 1,
          explanation: "831(b) allows small insurance companies to elect different tax treatment with premium limits."
        }
      ]
    },

    {
      // MODULE 3: ESTATE AND LEGACY PLANNING
      id: 3,
      title: "Comprehensive Estate and Legacy Planning",
      completed: false,
      content: `# Comprehensive Estate and Legacy Planning

Estate planning is about more than avoiding taxes-it's about ensuring your wishes are carried out, protecting your legacy, and providing for loved ones according to your values.

## Foundational Estate Planning Documents

### Core Documents Every Estate Plan Needs

**Last Will and Testament:**
- Names executor to administer estate
- Specifies guardians for minor children
- Directs distribution of assets
- May create testamentary trusts
- **Without will**: State intestacy laws determine distribution

**Durable Power of Attorney:**
- Authorizes agent to manage financial affairs
- Effective immediately or upon incapacity (springing)
- Broad or limited powers as specified
- Critical for incapacity planning

**Advance Healthcare Directive:**
- **Living will**: Medical treatment preferences
- **Healthcare proxy**: Names healthcare agent
- Covers end-of-life decisions
- HIPAA authorization for information access

**Revocable Living Trust:**
- Avoids probate for trust assets
- Provides incapacity management
- Maintains privacy (unlike probate)
- Can be amended during grantor's lifetime

## Trust Structures and Applications

### Revocable vs. Irrevocable Trusts

**Revocable living trust:**
- Grantor retains control and can modify
- Assets remain in grantor's estate for tax purposes
- Primary benefit: Probate avoidance and incapacity planning
- No creditor protection or tax benefits

**Irrevocable trusts:**
- Generally cannot be modified or revoked
- Assets removed from grantor's estate
- Potential creditor protection
- Tax planning benefits (gift, estate, generation-skipping)

### Common Irrevocable Trust Types

**Irrevocable Life Insurance Trust (ILIT):**
- Owns life insurance policies
- Proceeds excluded from estate
- Requires Crummey powers for premium payments
- Provides liquidity for estate taxes

**Grantor Retained Annuity Trust (GRAT):**
- Grantor transfers assets to trust
- Receives annuity payments for term
- Remainder to beneficiaries at term end
- Effective for transferring appreciation with minimal gift tax

**Qualified Personal Residence Trust (QPRT):**
- Transfer home to trust, retain right to live there
- Remainder to beneficiaries at term end
- Value of gift discounted for retained interest
- If grantor dies during term, property included in estate

**Intentionally Defective Grantor Trust (IDGT):**
- Trust is grantor for income tax but not estate tax
- Grantor pays income taxes, effectively tax-free gifts to beneficiaries
- Assets grow outside estate
- Complex but powerful planning tool

## Business Succession Planning

### Exit Strategy Options

**Family succession:**
- Training and mentoring next generation
- Fair treatment of active vs. non-active children
- Valuation discounts for lack of control/marketability
- Buy-sell agreements among family members

**Management buyout:**
- Employees/management purchase business
- May use ESOP (Employee Stock Ownership Plan)
- Seller financing common
- Continuity of operations and culture

**Third-party sale:**
- Strategic buyer (competitor, supplier, customer)
- Financial buyer (private equity)
- Asset vs. stock sale implications
- Earn-outs and seller financing

**Liquidation:**
- Last resort option
- Typically lowest recovery
- Orderly wind-down vs. fire sale
- Tax implications of asset sales

### Valuation Considerations

**Standard of value:**
- Fair market value: Willing buyer/willing seller
- Investment value: Specific to particular buyer
- Intrinsic value: Fundamental analysis

**Valuation approaches:**
- Income approach: Discounted cash flow
- Market approach: Comparable companies/transactions
- Asset approach: Net asset value

**Discounts and premiums:**
- Lack of control discount: Minority interests
- Lack of marketability discount: Private company interests
- Control premium: Controlling interest

## Charitable Legacy Planning

### Private Foundations

**Advantages:**
- Complete control over charitable activities
- Family involvement across generations
- Perpetual existence possible
- Can make grants to individuals (with restrictions)

**Disadvantages:**
- Higher administrative costs
- Excise taxes on investment income
- Minimum distribution requirements (5% of assets)
- Public disclosure of certain information

### Supporting Organizations

**Types I, II, and III:**
- Separate legal entity supporting specific public charity
- More flexible than private foundation
- No excise taxes (if structured properly)
- Must meet relationship test with supported organization

### Charitable Lead Trusts (CLTs)

**Structure:**
- Income stream to charity for term
- Remainder to non-charitable beneficiaries
- **Wealth transfer strategy**: Freezes value for estate tax purposes
- **Charitable deduction**: Based on present value of income stream

**Applications:**
- High-income years with charitable intent
- When asset appreciation expected
- To reduce estate tax on business succession
- Family wealth transfer with charitable component

## Digital Estate Planning

### Digital Assets Management

**Types of digital assets:**
- Financial accounts (banking, investment, cryptocurrency)
- Social media accounts
- Digital content (photos, videos, writings)
- Business accounts and intellectual property
- Email and communication accounts

**Legal framework:**
- Revised Uniform Fiduciary Access to Digital Assets Act (RUFADAA)
- Varies by state adoption
- Online tools for designating digital executors
- Password management solutions

**Planning steps:**
- Inventory all digital assets and accounts
- Designate digital executor in estate documents
- Provide access instructions without compromising security
- Regularly update as accounts change

## Family Governance and Education

### Family Mission and Values

**Developing family governance:**
- Family mission statement
- Regular family meetings
- Education for next generation
- Philanthropy as unifying activity

**Financial education for heirs:**
- Age-appropriate money lessons
- Responsibility with increasing amounts
- Understanding family wealth sources
- Values beyond money

### Family Office Structures

**Single family office:**
- Dedicated team serving one wealthy family
- Full control and customization
- Highest cost structure
- Typically $500M+ net worth

**Multi-family office:**
- Serves multiple families
- Cost sharing benefits
- Less customization than SFO
- Typically $50M-$500M net worth

**Virtual family office:**
- Outsourced services coordinated by advisor
- Lower minimum net worth
- Access to expertise without full staff
- Coordination complexity

## Special Situations Planning

### Blended Families

**Challenges:**
- Competing interests of current spouse and children from prior marriage
- State laws affecting spousal rights
- Trust structures to balance interests
- Clear communication to avoid conflict

**Solutions:**
- QTIP trusts (Qualified Terminable Interest Property)
- Disclaimer planning
- Prenuptial agreements
- Lifetime gifting strategies

### Special Needs Planning

**Supplemental Needs Trusts (SNTs):**
- First-party SNT: Funded with beneficiary's assets
- Third-party SNT: Funded by others for beneficiary
- Preserves eligibility for government benefits
- Professional trustee often recommended

**ABLE accounts:**
- Tax-advantaged savings for disabled individuals
- 2024 contribution limit: $18,000
- Medicaid and SSI asset limit exemptions
- State-sponsored programs

### International Considerations

**Cross-border issues:**
- Multiple wills may be needed (domiciliary and situs)
- Treaty planning for reduced withholding
- Foreign trust reporting requirements
- Currency and banking considerations

**Expatriation planning:**
- Exit tax calculations
- Covered expatriate rules
- Long-term green card holders
- Planning before triggering events

## Ethics and Professional Standards

### Fiduciary Duties

**Key fiduciary duties:**
- Duty of loyalty: Client's interests first
- Duty of care: Prudent expert standard
- Duty to follow instructions
- Duty to account and provide information

**Conflicts of interest:**
- Disclosure requirements
- Informed consent
- Avoiding self-dealing
- Compensation transparency

### Regulatory Landscape

**Key regulators:**
- SEC (Securities and Exchange Commission)
- FINRA (Financial Industry Regulatory Authority)
- State securities regulators
- State insurance departments

**Compliance requirements:**
- Form ADV disclosure
- Best execution obligations
- Suitability vs. fiduciary standards
- Recordkeeping and cybersecurity

Remember: Estate planning is a process, not a product. Regular reviews are essential as laws change, families evolve, and wealth grows. The most sophisticated plan fails without proper implementation, funding, and communication with loved ones.`,
      
      quiz: [
        {
          id: 1,
          question: "What is a primary benefit of a revocable living trust?",
          options: ["Estate tax elimination", "Probate avoidance", "Creditor protection", "Income tax reduction"],
          correctAnswer: 1,
          explanation: "Revocable trusts avoid probate but provide no tax benefits during grantor's life."
        },
        {
          id: 2,
          question: "What does ILIT stand for?",
          options: ["Individual Life Insurance Trust", "Irrevocable Life Insurance Trust", "International Life Insurance Trust", "Immediate Life Insurance Trust"],
          correctAnswer: 1,
          explanation: "ILIT: Irrevocable Life Insurance Trust, removes life insurance from estate."
        },
        {
          id: 3,
          question: "What is a GRAT?",
          options: ["Grantor Retained Annuity Trust", "General Retirement Account Trust", "Grantor Revocable Asset Trust", "Government Retirement Annuity Trust"],
          correctAnswer: 0,
          explanation: "GRAT: Grantor receives annuity payments, remainder to beneficiaries after term."
        },
        {
          id: 4,
          question: "What is the minimum distribution for private foundations?",
          options: ["2% of assets", "5% of assets", "10% of assets", "No minimum"],
          correctAnswer: 1,
          explanation: "Private foundations must distribute approximately 5% of assets annually."
        },
        {
          id: 5,
          question: "What does RUFADAA address?",
          options: ["Real estate transfers", "Digital assets access by fiduciaries", "Retirement accounts", "Business valuations"],
          correctAnswer: 1,
          explanation: "Revised Uniform Fiduciary Access to Digital Assets Act governs digital asset access."
        },
        {
          id: 6,
          question: "What is a QTIP trust for?",
          options: ["Only charitable giving", "Blended family planning", "Only minor children", "Business succession"],
          correctAnswer: 1,
          explanation: "QTIP trust provides for surviving spouse while preserving remainder for other beneficiaries."
        },
        {
          id: 7,
          question: "What is an ABLE account for?",
          options: ["Retirement savings", "Disabled individuals' savings", "Business expenses", "Vacation funding"],
          correctAnswer: 1,
          explanation: "ABLE accounts provide tax-advantaged savings for disabled individuals."
        },
        {
          id: 8,
          question: "What is a family office serving multiple families called?",
          options: ["Single family office", "Multi-family office", "Virtual family office", "Personal office"],
          correctAnswer: 1,
          explanation: "Multi-family office serves multiple families, sharing costs and resources."
        },
        {
          id: 9,
          question: "What does a durable power of attorney authorize?",
          options: ["Medical decisions only", "Financial decisions by agent", "Only real estate", "Charitable giving"],
          correctAnswer: 1,
          explanation: "Durable POA authorizes agent to handle financial matters, effective during incapacity."
        },
        {
          id: 10,
          question: "What is the purpose of a buy-sell agreement?",
          options: ["Charitable planning", "Business succession planning", "Estate tax elimination", "Retirement planning"],
          correctAnswer: 1,
          explanation: "Buy-sell agreements govern business ownership transfers upon triggering events."
        },
        {
          id: 11,
          question: "What is an IDGT?",
          options: ["Income tax-only trust", "Intentionally Defective Grantor Trust", "International Donor Gift Trust", "Immediate Distribution Grantor Trust"],
          correctAnswer: 1,
          explanation: "IDGT: Grantor for income tax but not estate tax, allowing tax-free growth."
        },
        {
          id: 12,
          question: "What is a QPRT?",
          options: ["Qualified Personal Residence Trust", "Quick Property Realty Trust", "Qualified Pension Retirement Trust", "Quarterly Payment Realty Trust"],
          correctAnswer: 0,
          explanation: "QPRT transfers home with retained right to live there, reducing gift value."
        },
        {
          id: 13,
          question: "What valuation approach uses comparable companies?",
          options: ["Income approach", "Market approach", "Asset approach", "Liquidation approach"],
          correctAnswer: 1,
          explanation: "Market approach values based on comparable company multiples or transactions."
        },
        {
          id: 14,
          question: "What is a CLT?",
          options: ["Charitable Lead Trust", "Corporate Liability Trust", "Capital Loss Trust", "Charitable Legacy Trust"],
          correctAnswer: 0,
          explanation: "CLT: Income to charity for term, remainder to non-charitable beneficiaries."
        },
        {
          id: 15,
          question: "What does a supplemental needs trust preserve?",
          options: ["Estate tax exemption", "Government benefits eligibility", "Business ownership", "Retirement accounts"],
          correctAnswer: 1,
          explanation: "SNTs allow disabled beneficiaries to receive inheritances without losing benefits."
        },
        {
          id: 16,
          question: "What is the fiduciary duty of loyalty?",
          options: ["Client's interests first", "Maximize fees", "Follow market trends", "Minimize work"],
          correctAnswer: 0,
          explanation: "Duty of loyalty requires putting client's interests ahead of advisor's own interests."
        },
        {
          id: 17,
          question: "What happens without a will?",
          options: ["No distribution", "State intestacy laws determine", "Government takes all", "Equal to all relatives"],
          correctAnswer: 1,
          explanation: "Intestacy laws determine distribution based on statutory formulas."
        },
        {
          id: 18,
          question: "What is a springing power of attorney?",
          options: ["Effective immediately", "Effective upon incapacity", "Only for spring season", "Automatic renewal"],
          correctAnswer: 1,
          explanation: "Springing POA becomes effective only upon incapacity or other triggering event."
        },
        {
          id: 19,
          question: "What discount applies to minority interests?",
          options: ["Control premium", "Lack of control discount", "Marketability premium", "No discount"],
          correctAnswer: 1,
          explanation: "Minority interests typically valued at discount due to lack of control."
        },
        {
          id: 20,
          question: "What is Form ADV?",
          options: ["Tax form", "SEC investment advisor disclosure", "Estate tax return", "Business license"],
          correctAnswer: 1,
          explanation: "Form ADV: Required disclosure document for SEC-registered investment advisors."
        }
      ]
    },

    {
      // MODULE 4: RISK MANAGEMENT FOR WEALTH PRESERVATION
      id: 4,
      title: "Advanced Risk Management and Insurance Strategies",
      completed: false,
      content: `# Advanced Risk Management and Insurance Strategies

Wealth preservation requires sophisticated risk management beyond basic insurance. This module explores advanced strategies for protecting accumulated wealth from various threats.

## Comprehensive Risk Assessment Framework

### Risk Categorization for High-Net-Worth Individuals

**Financial risks:**
- Market risk (volatility, correlation breakdown)
- Credit risk (counterparty defaults)
- Liquidity risk (inability to convert assets)
- Inflation risk (purchasing power erosion)
- Currency risk (for international holdings)

**Personal risks:**
- Liability risk (lawsuits, judgments)
- Identity theft and cyber risk
- Kidnap and ransom risk
- Reputation risk
- Family discord risk

**Business risks:**
- Succession risk (lack of capable successors)
- Key person risk (loss of critical individuals)
- Regulatory risk (changing compliance requirements)
- Industry disruption risk (technological changes)

## Liability Protection Strategies

### Umbrella Insurance Optimization

**Coverage considerations:**
- Typical coverage: $1-10 million above underlying policies
- Must match underlying policy limits (auto, homeowners)
- Worldwide coverage often included
- Defense costs typically outside policy limits

**Cost factors:**
- Net worth and income levels
- Number of homes, cars, recreational vehicles
- Teen drivers in household
- Ownership of animals with higher risk
- Personal swimming pools, trampolines

### Entity Structuring for Asset Protection

**Limited Liability Entities:**
- Limited partnerships (LPs)
- Limited liability companies (LLCs)
- Corporations (C or S)
- Family limited partnerships (FLPs)

**Charging order protection:**
- Available in many states for LLCs and LPs
- Creditor gets charging order (right to distributions)
- Cannot force distributions or seize assets
- Powerful protection for properly structured entities

**Domestic vs. offshore entities:**
- Domestic: Simpler, less costly, familiar courts
- Offshore: Stronger protection in some jurisdictions
- Must comply with reporting requirements (FBAR, FATCA)
- Higher scrutiny from courts and regulators

## Insurance for High-Value Assets

### Collectibles and Valuables Insurance

**Scheduled personal property:**
- Separate scheduling of high-value items
- Agreed value coverage (not actual cash value)
- Worldwide coverage typically included
- Specialized appraisals required

**Types of collectibles covered:**
- Fine art and antiques
- Jewelry and watches
- Wine collections
- Classic automobiles
- Memorabilia and collectibles

**Risk management for collections:**
- Proper storage and security
- Regular reappraisals (every 2-3 years)
- Documentation and provenance
- Conservation and maintenance

### High-Value Home Insurance

**Dwelling coverage considerations:**
- Replacement cost vs. market value
- Extended replacement cost endorsements
- Building code upgrade coverage
- Debris removal limits

**Additional coverages:**
- Water backup and sump pump failure
- Ordinance or law coverage
- Green rebuilding coverage
- Identity theft restoration

### Excess Liability and Umbrella Markets

**Domestic carriers:**
- AIG Private Client Group
- Chubb Personal Risk Services
- PURE Insurance
- Cincinnati Financial
- Berkley One

**London and Bermuda markets:**
- For unique or very high-limit risks
- Custom policy wording available
- Higher premiums and minimums
- Specialized underwriting required

## Business Risk Management

### Key Person Insurance

**Purposes:**
- Provides funds to find/train replacement
- Compensates for lost profits during transition
- Funds buy-sell agreements
- Secures loans or lines of credit

**Valuation approaches:**
- Multiple of compensation
- Contribution to profits
- Cost of replacement
- Impact on business value

### Buy-Sell Agreement Funding

**Funding mechanisms:**
- Life insurance (most common)
- Disability buy-out insurance
- Sinking funds (less common)
- Installment sales

**Cross-purchase vs. entity purchase:**
- Cross-purchase: Owners buy policies on each other
- Entity purchase: Business buys policies on owners
- Tax implications differ
- Administrative complexity varies

### Directors and Officers (D&O) Insurance

**Coverage parts:**
- Side A: Personal liability when indemnification not available
- Side B: Reimburses company when indemnifies directors
- Side C: Entity securities liability

**Considerations for private companies:**
- Employment practices liability often included
- Mergers and acquisitions activity
- Going public considerations
- Bankruptcy concerns

## Cyber Risk Management

### Personal Cyber Insurance

**Coverages:**
- Cyber extortion (ransomware)
- Data restoration
- Fraudulent wire transfer reimbursement
- Cyber bullying and reputation repair
- Legal expenses

**Risk assessment:**
- Digital footprint analysis
- Social media presence evaluation
- Family member online activities
- Home network security

### Business Cyber Liability

**First-party coverages:**
- Business interruption
- Data restoration
- Cyber extortion
- Notification costs
- Credit monitoring

**Third-party coverages:**
- Network security liability
- Privacy liability
- Regulatory defense
- Multimedia liability

## International Risk Considerations

### Global Insurance Programs

**Local policies with master policies:**
- Local policies satisfy regulatory requirements
- Master policy provides consistent coverage worldwide
- Difference in conditions (DIC) coverage
- Claims coordination services

**Political risk insurance:**
- Expropriation coverage
- Political violence
- Currency inconvertibility
- Contract frustration

### Kidnap and Ransom Insurance

**Coverages:**
- Ransom payment
- Loss of ransom in transit
- Accidental death/disability
- Crisis management expenses
- Rewards for information

**Important provisions:**
- Usually require professional crisis response firm
- Law enforcement notification requirements
- No coverage for self-inflicted events
- Geographical restrictions may apply

## Risk Financing Alternatives

### Captive Insurance Companies

**Types of captives:**
- Pure captives (single parent)
- Group captives (multiple owners)
- Rent-a-captives (using another's captive)
- Protected cell captives (separate accounts)

**Advantages:**
- Customized coverage
- Potential underwriting profit
- Investment income on reserves
- Direct access to reinsurance markets

**Considerations:**
- Capital requirements
- Regulatory compliance
- Management expertise needed
- Tax implications (831(b) election)

### Self-Insurance Strategies

**When appropriate:**
- Predictable, manageable losses
- Sufficient financial resources
- Risk tolerance for volatility
- Administrative capability

**Implementation:**
- Formal self-insurance trust
- Banking arrangements for claims payment
- Third-party administration (TPA) services
- Stop-loss insurance for catastrophic losses

## Integrated Risk Management

### Enterprise Risk Management (ERM)

**Framework components:**
- Risk identification
- Risk assessment and quantification
- Risk response strategies
- Monitoring and reporting

**Application to wealthy families:**
- Holistic view across personal and business risks
- Family participation in risk discussions
- Regular risk reviews
- Integration with investment and estate planning

### Risk Culture Development

**Creating risk-aware family culture:**
- Education about different risk types
- Clear risk tolerance statements
- Decision-making frameworks
- Succession of risk management knowledge

## Technology in Risk Management

### Risk Monitoring Tools

**Current applications:**
- Real-time portfolio risk analytics
- Cyber threat monitoring
- Identity theft protection services
- Geopolitical risk dashboards

**Emerging technologies:**
- AI for predictive risk modeling
- Blockchain for insurance contracts
- IoT sensors for property monitoring
- Digital twins for scenario testing

## Regulatory and Compliance Risks

### Changing Regulatory Landscape

**Key areas of concern:**
- Tax compliance (domestic and international)
- Securities regulations
- Insurance regulations
- Privacy laws (GDPR, CCPA)

**Mitigation strategies:**
- Regular compliance reviews
- Professional advisory team
- Continuing education
- Documentation and recordkeeping

Remember: Risk management is not about eliminating all risk-it's about understanding risks, making informed decisions about which to accept, mitigate, or transfer, and ensuring protection aligns with overall wealth preservation goals. The most effective strategies are proactive, comprehensive, and regularly reviewed.`,
      
      quiz: [
        {
          id: 1,
          question: "What is umbrella insurance primarily for?",
          options: ["Home insurance", "Excess liability coverage above other policies", "Auto insurance only", "Health insurance"],
          correctAnswer: 1,
          explanation: "Umbrella provides additional liability coverage above underlying auto/home policies."
        },
        {
          id: 2,
          question: "What does charging order protection provide?",
          options: ["Asset seizure rights", "Creditor gets right to distributions but not control", "Immediate liquidation", "No protection"],
          correctAnswer: 1,
          explanation: "Charging order gives creditor rights to distributions but cannot force them or control entity."
        },
        {
          id: 3,
          question: "What is key person insurance for?",
          options: ["All employees", "Critical individuals whose loss would hurt business", "Only owners", "Retired employees"],
          correctAnswer: 1,
          explanation: "Protects business from financial impact of losing key employees."
        },
        {
          id: 4,
          question: "What does D&O insurance cover?",
          options: ["Property damage", "Directors' and officers' personal liability", "Employee theft", "Product liability"],
          correctAnswer: 1,
          explanation: "D&O insurance covers personal liability of directors and officers for decisions."
        },
        {
          id: 5,
          question: "What is cyber extortion coverage?",
          options: ["Physical theft", "Ransomware and digital extortion", "Employee fraud", "Market losses"],
          correctAnswer: 1,
          explanation: "Covers ransomware attacks where data is encrypted and ransom demanded."
        },
        {
          id: 6,
          question: "What is a captive insurance company?",
          options: ["Government insurance", "Business creating its own insurance company", "Foreign insurance", "No-frills insurance"],
          correctAnswer: 1,
          explanation: "Captive: company creates subsidiary to insure its own risks."
        },
        {
          id: 7,
          question: "What does ERM stand for?",
          options: ["Emergency Response Management", "Enterprise Risk Management", "External Risk Monitoring", "Employee Relations Management"],
          correctAnswer: 1,
          explanation: "ERM: holistic approach to identifying and managing organizational risks."
        },
        {
          id: 8,
          question: "What is scheduled personal property?",
          options: ["Automatically covered", "Specifically listed high-value items", "Business property", "Unowned property"],
          correctAnswer: 1,
          explanation: "Scheduled items are specifically listed with values for proper insurance."
        },
        {
          id: 9,
          question: "What does cross-purchase buy-sell mean?",
          options: ["Business buys policies", "Owners buy policies on each other", "Insurance company buys business", "No insurance used"],
          correctAnswer: 1,
          explanation: "Cross-purchase: each owner buys life insurance on other owners."
        },
        {
          id: 10,
          question: "What is political risk insurance for?",
          options: ["Market volatility", "Government actions like expropriation", "Employee strikes", "Natural disasters"],
          correctAnswer: 1,
          explanation: "Covers losses from government actions like seizure of assets or currency controls."
        },
        {
          id: 11,
          question: "What does FLP stand for?",
          options: ["Family Limited Partnership", "Federal Liability Protection", "Financial Legacy Plan", "Foreign Legal Partnership"],
          correctAnswer: 0,
          explanation: "FLP: Family Limited Partnership used for asset protection and estate planning."
        },
        {
          id: 12,
          question: "What is replacement cost coverage?",
          options: ["Market value", "Cost to rebuild/replace with similar new", "Original purchase price", "Tax value"],
          correctAnswer: 1,
          explanation: "Pays cost to replace with similar new item, not depreciated value."
        },
        {
          id: 13,
          question: "What does DIC coverage mean?",
          options: ["Direct Insurance Coverage", "Difference in Conditions", "Domestic International Coverage", "Direct International Claims"],
          correctAnswer: 1,
          explanation: "DIC: covers gaps between local and master insurance policies internationally."
        },
        {
          id: 14,
          question: "What is a protected cell captive?",
          options: ["No separation", "Separate accounts within captive", "Only for banks", "Government-run"],
          correctAnswer: 1,
          explanation: "Protected cell: separate accounts within captive for different participants."
        },
        {
          id: 15,
          question: "What does IoT refer to in risk management?",
          options: ["Internet of Things for monitoring", "Internal Office Technology", "International Operations Team", "Insurance Oversight Team"],
          correctAnswer: 0,
          explanation: "IoT sensors monitor properties for risks like water leaks, fires, security breaches."
        },
        {
          id: 16,
          question: "What is Side A D&O coverage?",
          options: ["Company reimbursement", "Personal liability when not indemnified", "Entity coverage", "Employment practices"],
          correctAnswer: 1,
          explanation: "Side A: covers directors personally when company cannot indemnify them."
        },
        {
          id: 17,
          question: "What is self-insurance?",
          options: ["No insurance", "Setting aside funds to pay losses directly", "Only catastrophic coverage", "Government insurance"],
          correctAnswer: 1,
          explanation: "Self-insurance: retaining risk and paying losses from dedicated funds."
        },
        {
          id: 18,
          question: "What does K&R insurance cover?",
          options: ["Kidnap and ransom situations", "Key person retirement", "Kitchen and restaurant", "Knowledge and research"],
          correctAnswer: 0,
          explanation: "Kidnap and ransom insurance covers kidnapping incidents and related expenses."
        },
        {
          id: 19,
          question: "What is reputation risk?",
          options: ["Only financial loss", "Damage to personal/business reputation", "Property damage", "Market risk"],
          correctAnswer: 1,
          explanation: "Risk of damage to reputation affecting relationships and opportunities."
        },
        {
          id: 20,
          question: "What does FATCA require?",
          options: ["Foreign asset reporting to IRS", "Domestic asset reporting", "Only bank reporting", "No reporting"],
          correctAnswer: 0,
          explanation: "FATCA requires reporting foreign financial assets above thresholds."
        }
      ]
    },

    {
      // MODULE 5: BEHAVIORAL FINANCE AND WEALTH PSYCHOLOGY
      id: 5,
      title: "Wealth Psychology and Behavioral Decision-Making",
      completed: false,
      content: `# Wealth Psychology and Behavioral Decision-Making

Understanding the psychological aspects of wealth is as important as understanding financial markets. This module explores how psychology affects wealth decisions and how to manage these influences.

## Foundations of Behavioral Finance

### Traditional vs. Behavioral Finance

**Traditional finance assumptions:**
- Rational investors
- Utility maximization
- Efficient markets
- No psychological biases

**Behavioral finance observations:**
- Bounded rationality (cognitive limits)
- Emotions influence decisions
- Heuristics (mental shortcuts) used
- Markets not always efficient

### Key Behavioral Economics Pioneers

**Daniel Kahneman and Amos Tversky:**
- Prospect theory (loss aversion, reference points)
- Heuristics and biases research
- Nobel Prize in Economics (2002)

**Richard Thaler:**
- Nudge theory
- Mental accounting
- Nobel Prize in Economics (2017)

**Robert Shiller:**
- Irrational exuberance
- Narrative economics
- Nobel Prize in Economics (2013)

## Cognitive Biases Affecting Wealth

### Heuristics (Mental Shortcuts)

**Availability heuristic:**
- Judging probability by ease of recall
- Example: Overestimating plane crash risk after news coverage
- **Wealth impact**: Overweighting recent or vivid events in decisions

**Representativeness heuristic:**
- Judging by similarity to stereotype
- Example: Assuming good company = good investment
- **Wealth impact**: Pattern recognition errors, chasing trends

**Anchoring and adjustment:**
- Relying too heavily on initial information
- Example: Negotiating from asking price rather than value
- **Wealth impact**: Price anchoring in investments, inheritance expectations

### Emotional Biases

**Loss aversion:**
- Losses hurt about twice as much as equivalent gains please
- **Wealth impact**: Holding losers too long, selling winners too early

**Overconfidence:**
- Overestimating knowledge, ability, or predictability
- **Types**: Prediction overconfidence, certainty overconfidence
- **Wealth impact**: Excessive trading, underestimating risks

**Regret aversion:**
- Avoiding actions that could cause regret
- **Wealth impact**: Inaction, following crowd, not selling at losses

**Endowment effect:**
- Valuing owned items more than equivalent non-owned items
- **Wealth impact**: Holding inherited assets for emotional reasons

### Social and Cultural Biases

**Herding behavior:**
- Following actions of others rather than independent analysis
- **Wealth impact**: Bubble participation, panic selling

**Confirmation bias:**
- Seeking confirming evidence, ignoring contradictory
- **Wealth impact**: Not reconsidering decisions, advisor selection bias

**Hindsight bias:**
- "I knew it all along" after event occurs
- **Wealth impact**: Overestimating predictive ability, not learning from mistakes

## Wealth-Specific Psychological Challenges

### Sudden Wealth Syndrome

**Common reactions:**
- Disbelief and denial
- Fear and anxiety
- Guilt and unworthiness
- Isolation and suspicion

**Stages of adjustment:**
1. **Honeymoon**: Excitement and possibility
2. **Overwhelm**: Anxiety and decision paralysis
3. **Integration**: New identity and purpose
4. **Stewardship**: Responsible management

**Risk factors:**
- Lack of financial education
- No trusted advisors
- Family pressure and expectations
- Public attention (lottery, inheritance, IPO)

### Affluenza and Its Manifestations

**Symptoms:**
- Materialism as primary value
- Difficulty delaying gratification
- Entitlement attitudes
- Lack of purpose beyond consumption

**Family dynamics:**
- Parenting challenges with abundance
- Sibling rivalry over resources
- Extended family expectations
- Relationship strains due to wealth disparity

## Decision Architecture for Wealth

### Nudge Theory Applications

**Choice architecture principles:**
- Default options (opt-out vs. opt-in)
- Simplification of complex decisions
- Feedback on decisions and outcomes
- Structured decision processes

**Wealth management applications:**
- Automatic rebalancing as default
- Simplified investment menus
- Regular review schedules
- Pre-commitment strategies

### Mental Accounting Reconsideration

**Traditional mental accounting:**
- Separate buckets for different purposes
- Different risk attitudes for different accounts
- Source of funds affecting investment approach

**Integrated wealth view:**
- Holistic portfolio perspective
- Consistent risk tolerance across accounts
- Purpose-based rather than account-based planning

## Family Wealth Dynamics

### Communication About Wealth

**Challenges:**
- Taboo nature of money discussions
- Fear of spoiling children
- Different values among family members
- Generational differences in money attitudes

**Effective communication strategies:**
- Regular family meetings
- Age-appropriate financial education
- Values discussions before numbers
- Professional facilitation when needed

### Succession and Inheritance Psychology

**Common inheritance issues:**
- "Dead hand control" resentment
- Unequal treatment perceptions
- Beneficiary readiness concerns
- Stewardship vs. entitlement attitudes

**Preparation strategies:**
- Gradual transfer during lifetime
- Involvement in philanthropy
- Clear communication of intentions
- Education and mentorship

## Advisor-Client Psychology

### Building Trust and Rapport

**Trust factors:**
- Competence and expertise
- Integrity and honesty
- Reliability and consistency
- Empathy and understanding

**Communication styles:**
- Analytical vs. intuitive clients
- Detail-oriented vs. big-picture
- Active vs. passive decision-makers
- Risk-seeking vs. risk-averse

### Managing Behavioral Biases in Advisory Relationships

**Advisor's role:**
- Behavioral coach, not just investment manager
- Reality check against emotional decisions
- Institutionalizing discipline
- Providing perspective during volatility

**Tools and techniques:**
- Investment policy statements as behavioral anchors
- Regular rebalancing against market movements
- Education about historical patterns
- Stress testing and scenario analysis

## Philanthropy and Purpose

### Psychological Benefits of Giving

**Research findings:**
- Increased happiness and life satisfaction
- Reduced stress and depression
- Greater sense of purpose
- Improved social connections

**Strategic philanthropy:**
- Aligning giving with personal values
- Involving family in charitable decisions
- Measuring impact beyond dollars
- Creating legacy through giving

### Impact Investing Psychology

**Dual objectives:**
- Financial returns
- Social/environmental impact

**Psychological drivers:**
- Values alignment
- Legacy creation
- Family engagement
- Personal fulfillment

## Technology and Behavioral Finance

### Digital Tools for Better Decisions

**Current applications:**
- Gamification of financial education
- Visualization of compound growth
- Risk tolerance assessment tools
- Spending analysis and categorization

**Behavioral design in fintech:**
- Default savings increases
- Round-up investment programs
- Goal-based investment interfaces
- Social comparison (used carefully)

### Robo-Advisors and Behavioral Benefits

**Automated discipline:**
- Removes emotion from rebalancing
- Consistent implementation
- Tax-loss harvesting automation
- Lower minimums for diversification

**Limitations:**
- Less personalized behavioral coaching
- Limited complex planning integration
- Technology adoption barriers for some
- Human touch missing for major decisions

## Creating a Wealth Mindset

### From Accumulation to Stewardship

**Mindset shifts:**
- Scarcity to abundance thinking
- Consumption to contribution orientation
- Control to empowerment of others
- Individual to legacy perspective

### Continuous Learning and Adaptation

**Wealth education:**
- Financial literacy for all family members
- Understanding economic cycles
- Learning from mistakes (own and others')
- Staying current with tax and legal changes

**Personal development:**
- Self-awareness about money attitudes
- Emotional intelligence in financial decisions
- Resilience during market volatility
- Balance between planning and living

## Ethical Considerations

### Wealth and Responsibility

**Social contract considerations:**
- Tax planning vs. tax avoidance ethics
- Philanthropic obligations
- Environmental impact of investments
- Fair treatment of employees and stakeholders

### Intergenerational Equity

**Balancing present and future:**
- Sustainable spending rates
- Education vs. inheritance decisions
- Environmental legacy
- Values transmission beyond money

Remember: Wealth management is ultimately about life management. The most sophisticated financial strategies fail if they don't account for human psychology, family dynamics, and personal values. Successful wealth stewardship requires integrating technical expertise with psychological wisdom.`,
      
      quiz: [
        {
          id: 1,
          question: "What is loss aversion in behavioral finance?",
          options: ["Ignoring losses", "Losses psychologically hurt more than equivalent gains please", "Loving losses", "Only considering gains"],
          correctAnswer: 1,
          explanation: "Losses feel approximately twice as painful as equivalent gains feel good."
        },
        {
          id: 2,
          question: "What does prospect theory explain?",
          options: ["Market efficiency", "How people decide under risk with psychological biases", "Only rational decisions", "Stock price movements"],
          correctAnswer: 1,
          explanation: "Prospect theory: people value gains and losses differently, using reference points."
        },
        {
          id: 3,
          question: "What is Sudden Wealth Syndrome?",
          options: ["Always happy", "Psychological challenges after rapid wealth acquisition", "Only physical symptoms", "No impact"],
          correctAnswer: 1,
          explanation: "Psychological adjustment difficulties after receiving large sums unexpectedly."
        },
        {
          id: 4,
          question: "What is the endowment effect?",
          options: ["Valuing owned items more", "Valuing all items equally", "Only valuing money", "Ignoring ownership"],
          correctAnswer: 0,
          explanation: "Endowment effect: valuing something more simply because you own it."
        },
        {
          id: 5,
          question: "What is herding behavior?",
          options: ["Independent analysis", "Following actions of others", "Always contrarian", "No social influence"],
          correctAnswer: 1,
          explanation: "Making decisions based on what others are doing rather than independent analysis."
        },
        {
          id: 6,
          question: "What is nudge theory?",
          options: ["Forced decisions", "Designing choices to influence behavior predictably", "No influence", "Random decisions"],
          correctAnswer: 1,
          explanation: "Nudge theory: subtle changes in choice architecture that influence decisions."
        },
        {
          id: 7,
          question: "What is mental accounting?",
          options: ["Only one account", "Separating money into different mental categories", "No categorization", "Bank accounting only"],
          correctAnswer: 1,
          explanation: "Treating money differently based on source or intended use rather than holistic view."
        },
        {
          id: 8,
          question: "Who won Nobel Prize for prospect theory?",
          options: ["Warren Buffett", "Daniel Kahneman", "Alan Greenspan", "John Bogle"],
          correctAnswer: 1,
          explanation: "Daniel Kahneman (with Amos Tversky) developed prospect theory, winning 2002 Nobel."
        },
        {
          id: 9,
          question: "What is overconfidence bias?",
          options: ["Underestimating abilities", "Overestimating knowledge, ability, or predictability", "No self-assessment", "Always right"],
          correctAnswer: 1,
          explanation: "Believing you know more or can predict better than evidence supports."
        },
        {
          id: 10,
          question: "What is availability heuristic?",
          options: ["All information available", "Judging probability by ease of recall", "Ignoring recent events", "Only historical data"],
          correctAnswer: 1,
          explanation: "Estimating likelihood based on how easily examples come to mind."
        },
        {
          id: 11,
          question: "What is confirmation bias?",
          options: ["Seeking all information", "Seeking confirming evidence, ignoring contradictory", "No bias", "Changing mind easily"],
          correctAnswer: 1,
          explanation: "Favoring information that confirms existing beliefs while discounting contrary evidence."
        },
        {
          id: 12,
          question: "What is anchoring bias?",
          options: ["No reference points", "Relying too heavily on first information received", "Ignoring initial information", "Frequent adjustment"],
          correctAnswer: 1,
          explanation: "Using initial information as reference point for subsequent decisions."
        },
        {
          id: 13,
          question: "What characterizes affluenza?",
          options: ["Poverty mindset", "Materialism, entitlement, lack of purpose", "Simple living", "No wealth impact"],
          correctAnswer: 1,
          explanation: "Negative psychological effects of wealth: materialism, entitlement, purpose confusion."
        },
        {
          id: 14,
          question: "What is regret aversion?",
          options: ["Seeking regret", "Avoiding actions that could cause regret", "No regret ever", "Only financial regret"],
          correctAnswer: 1,
          explanation: "Making choices to avoid potential future regret rather than optimize outcomes."
        },
        {
          id: 15,
          question: "What is representative heuristic?",
          options: ["Judging by statistical base rates", "Judging by similarity to stereotype", "No judgment", "Random classification"],
          correctAnswer: 1,
          explanation: "Judging probability based on how similar something is to typical case rather than statistics."
        },
        {
          id: 16,
          question: "What is hindsight bias?",
          options: ["Predicting future", "'I knew it all along' after event", "No memory of past", "Accurate recall"],
          correctAnswer: 1,
          explanation: "Believing after an event that you predicted or knew it would happen."
        },
        {
          id: 17,
          question: "What is choice architecture?",
          options: ["Building choices", "Designing how choices are presented to influence decisions", "No design", "Random presentation"],
          correctAnswer: 1,
          explanation: "Structuring the way choices are presented to guide decisions in predictable ways."
        },
        {
          id: 18,
          question: "What is impact investing's dual objective?",
          options: ["Only financial returns", "Financial returns and social/environmental impact", "Only social impact", "No returns expected"],
          correctAnswer: 1,
          explanation: "Seeks both financial returns and measurable positive social/environmental impact."
        },
        {
          id: 19,
          question: "What does robo-advisor automate?",
          options: ["Only buying", "Rebalancing, tax-loss harvesting, consistent implementation", "Only selling", "Emotional support"],
          correctAnswer: 1,
          explanation: "Automates disciplined investment processes that humans might execute emotionally."
        },
        {
          id: 20,
          question: "What is the advisor's behavioral role?",
          options: ["Only stock picker", "Behavioral coach and discipline institutionalizer", "Only accountant", "No behavioral role"],
          correctAnswer: 1,
          explanation: "Advisor helps clients avoid behavioral mistakes and maintain disciplined strategies."
        }
      ]
    },

    {
      // MODULE 6: INTEGRATED WEALTH MANAGEMENT PRACTICE
      id: 6,
      title: "Integrated Wealth Management Practice and Client Service",
      completed: false,
      content: `# Integrated Wealth Management Practice and Client Service

This final module synthesizes all wealth management components into an integrated practice. We explore how to deliver comprehensive services that address clients' complete financial lives.

## The Integrated Wealth Management Framework

### Holistic Client Service Model

**Components of integrated service:**
1. **Financial planning**: Goals, cash flow, net worth analysis
2. **Investment management**: Portfolio construction and monitoring
3. **Tax planning**: Efficiency strategies and compliance
4. **Risk management**: Insurance and liability protection
5. **Estate planning**: Wealth transfer and legacy
6. **Philanthropic planning**: Charitable giving strategies
7. **Family governance**: Education and communication
8. **Specialized services**: Business, retirement, education planning

### Client Segmentation and Service Models

**By complexity of needs:**
- **Emerging affluent**: $500K-$2M net worth
- **High-net-worth**: $2M-$30M net worth
- **Ultra-high-net-worth**: $30M+ net worth
- **Family offices**: Customized for specific families

**By service delivery approach:**
- **Generalist model**: Single advisor provides most services
- **Team-based model**: Specialists collaborate on client matters
- **Outsourced model**: Coordinator manages external experts
- **Family office model**: Dedicated staff for comprehensive service

## Client Discovery and Relationship Management

### Comprehensive Discovery Process

**Financial discovery:**
- Quantitative assessment (assets, liabilities, income, expenses)
- Qualitative assessment (goals, values, concerns)
- Risk tolerance evaluation (capacity and willingness)
- Time horizon analysis for various goals

**Family and personal discovery:**
- Family structure and dynamics
- Health considerations
- Business ownership and succession plans
- Philanthropic interests and values

**Document gathering and analysis:**
- Financial statements and tax returns
- Estate planning documents
- Insurance policies
- Business agreements and valuations

### Goal Setting and Prioritization

**SMART-ER goal framework:**
- **Specific**: Clearly defined outcomes
- **Measurable**: Quantifiable progress tracking
- **Achievable**: Realistic given resources
- **Relevant**: Aligned with values and priorities
- **Time-bound**: Specific deadlines
- **Evaluated**: Regular progress assessment
- **Revised**: Adjustments as circumstances change

**Goal categorization:**
- **Essential**: Must achieve (basic security, healthcare)
- **Important**: Strongly desired (education, retirement lifestyle)
- **Aspirational**: Would be nice (legacy, luxury items)

## Service Delivery and Communication

### Regular Client Review Process

**Quarterly investment reviews:**
- Performance vs. benchmarks and goals
- Portfolio rebalancing needs
- Market outlook and strategy adjustments
- Tax-loss harvesting opportunities

**Annual comprehensive reviews:**
- Progress toward all financial goals
- Life changes and planning adjustments
- Insurance and estate plan reviews
- Tax planning opportunities

**Ad hoc reviews for life events:**
- Marriage, divorce, or partnership changes
- Births, adoptions, or deaths
- Career changes or retirement
- Major purchases or sales
- Inheritance or other windfalls

### Communication Protocols

**Preferred communication methods:**
- In-person meetings (quarterly/annual)
- Video conferences (monthly/quarterly)
- Phone calls (as needed)
- Secure client portals (ongoing access)
- Email (routine updates)

**Reporting standards:**
- Consolidated reporting across all accounts
- Performance reporting with appropriate benchmarks
- Tax reporting integration
- Customized reporting for different stakeholders

## Professional Collaboration and Team Management

### Building the Advisory Team

**Core team members:**
- Wealth advisor/planner
- Investment specialist
- Tax professional (CPA or tax attorney)
- Estate planning attorney
- Insurance specialist

**Extended team as needed:**
- Business valuation expert
- Philanthropic advisor
- Family business consultant
- Mental health professional
- Trust officer or private banker

### Team Coordination Protocols

**Regular team meetings:**
- Case reviews for complex clients
- Strategy coordination
- Knowledge sharing
- Service quality improvement

**Client communication coordination:**
- Single point of contact for client
- Internal communication protocols
- Document sharing systems
- Conflict resolution processes

## Technology in Wealth Management Practice

### Client Relationship Management (CRM) Systems

**Key features:**
- Client information and document management
- Task and workflow automation
- Communication tracking
- Reporting and analytics
- Integration with other systems

**Selection considerations:**
- Scalability for practice growth
- Integration capabilities
- Security and compliance features
- User experience and training requirements

### Financial Planning Software

**Capabilities needed:**
- Cash flow and net worth analysis
- Retirement planning projections
- Education funding planning
- Estate tax calculations
- Tax planning scenarios
- Monte Carlo simulations

**Integration considerations:**
- Data aggregation from multiple sources
- Real-time updates
- Client portal access
- Collaboration features

### Portfolio Management Systems

**Functionality requirements:**
- Account aggregation and reconciliation
- Performance measurement and reporting
- Rebalancing and trade management
- Tax-lot accounting and harvesting
- Risk analytics and stress testing

## Compliance and Practice Management

### Regulatory Framework

**Primary regulators:**
- **SEC**: Investment advisors with $100M+ AUM
- **State securities regulators**: Smaller advisors
- **FINRA**: Broker-dealers and registered representatives
- **CFP Board**: Certified Financial Planner standards
- **State insurance departments**: Insurance products

**Key compliance requirements:**
- Form ADV filing and updates
- Written policies and procedures
- Annual compliance reviews
- Cybersecurity protocols
- Business continuity planning

### Fiduciary Standards

**Different standards of care:**
- **Fiduciary standard**: Client's best interests first (RIAs)
- **Suitability standard**: Suitable recommendations (broker-dealers)
- **Best interest standard**: Enhanced suitability (Regulation BI)

**Implementing fiduciary duty:**
- Conflict of interest disclosure
- Compensation transparency
- Due diligence on recommendations
- Ongoing monitoring and review

## Business Development and Marketing

### Target Client Profiling

**Ideal client characteristics:**
- Financial complexity needing integrated services
- Willingness to pay for comprehensive advice
- Good fit with firm's expertise and values
- Referral potential and network

**Client acquisition strategies:**
- Referrals from existing clients and centers of influence
- Professional alliances (CPAs, attorneys)
- Educational workshops and seminars
- Content marketing (articles, podcasts, webinars)
- Strategic networking

### Fee Structures and Value Proposition

**Common fee models:**
- **Assets under management (AUM)**: Percentage of assets
- **Flat or retainer fees**: Fixed amount for defined services
- **Hourly fees**: Time-based billing
- **Project fees**: Fixed price for specific projects
- **Performance fees**: Percentage of outperformance (with limitations)

**Communicating value:**
- Comprehensive service benefits
- Behavioral coaching value
- Tax efficiency improvements
- Risk management benefits
- Time savings and peace of mind

## Continuing Education and Professional Development

### Required Education

**Regulatory requirements:**
- Continuing education for licenses (Series, insurance)
- Ethics training requirements
- Firm-specific training programs

**Professional designations:**
- **CFP**: Certified Financial Planner
- **CFA**: Chartered Financial Analyst
- **CPA/PFS**: Certified Public Accountant/Personal Financial Specialist
- **AEP**: Accredited Estate Planner
- **CLU**: Chartered Life Underwriter
- **ChFC**: Chartered Financial Consultant

### Specialized Knowledge Areas

**Emerging areas of expertise:**
- Digital assets and cryptocurrency
- Sustainable and impact investing
- Behavioral finance applications
- Family dynamics and psychology
- International planning complexities

## Ethics and Professional Conduct

### Ethical Decision-Making Framework

**Steps in ethical analysis:**
1. Identify ethical issues and stakeholders
2. Gather relevant facts
3. Identify alternatives and consequences
4. Apply ethical principles and standards
5. Make decision and implement
6. Monitor outcomes and adjust

**Common ethical challenges:**
- Conflicts of interest
- Confidentiality breaches
- Competence boundaries
- Compensation transparency
- Client vulnerability exploitation

### Client Vulnerability Considerations

**Identifying vulnerable clients:**
- Age-related cognitive decline
- Health issues affecting decision-making
- Emotional distress (grief, divorce)
- Financial illiteracy or inexperience
- Language or cultural barriers

**Protective measures:**
- Additional documentation and confirmation
- Involvement of trusted family members
- Regular check-ins and monitoring
- Professional referrals when needed

## Succession Planning for the Practice

### Business Continuity Planning

**Key components:**
- Buy-sell agreements among owners
- Key person insurance
- Documented processes and procedures
- Client communication plans
- Technology and data backup systems

### Transition Options

**Internal succession:**
- Next-generation leadership development
- Gradual ownership transfer
- Financing arrangements
- Client relationship transfer support

**External succession:**
- Merger with larger firm
- Acquisition by another practice
- Gradual wind-down and client referral
- Sale to third party

Remember: Integrated wealth management is about serving the whole client, not just managing their investments. The most successful practices combine technical excellence with exceptional relationship skills, continuous learning, and ethical professionalism. They create value that extends far beyond portfolio returns to encompass clients' complete financial well-being and life satisfaction.`,
      
      quiz: [
        {
          id: 1,
          question: "What does integrated wealth management include?",
          options: ["Only investments", "Investments, tax, estate, insurance, planning", "Only tax planning", "Only insurance"],
          correctAnswer: 1,
          explanation: "Integrated approach addresses all aspects of client's financial life holistically."
        },
        {
          id: 2,
          question: "What is UHNW net worth threshold?",
          options: ["$2M", "$10M", "$30M+", "$100M"],
          correctAnswer: 2,
          explanation: "Ultra-high-net-worth typically refers to $30 million or more in net worth."
        },
        {
          id: 3,
          question: "What does SMART-ER add to SMART goals?",
          options: ["Evaluated and Revised", "Only Evaluated", "Only Revised", "Simpler"],
          correctAnswer: 0,
          explanation: "SMART-ER adds Evaluation (regular assessment) and Revision (adjustment as needed)."
        },
        {
          id: 4,
          question: "What is the fiduciary standard?",
          options: ["Suitable recommendations", "Client's best interests first", "Sales oriented", "No standard"],
          correctAnswer: 1,
          explanation: "Fiduciary duty requires putting client's interests ahead of advisor's own interests."
        },
        {
          id: 5,
          question: "What does CRM stand for?",
          options: ["Client Relationship Management", "Customer Retention Marketing", "Client Revenue Maximization", "Corporate Risk Management"],
          correctAnswer: 0,
          explanation: "CRM systems manage client information, interactions, and workflows."
        },
        {
          id: 6,
          question: "Who regulates RIAs with $100M+ AUM?",
          options: ["FINRA", "SEC", "State regulators", "CFP Board"],
          correctAnswer: 1,
          explanation: "SEC regulates investment advisors with $100 million or more in assets under management."
        },
        {
          id: 7,
          question: "What is a common fee model for wealth management?",
          options: ["Only hourly", "Assets under management percentage", "Only commissions", "No fees"],
          correctAnswer: 1,
          explanation: "AUM-based fees charge percentage of assets managed, aligning with growth."
        },
        {
          id: 8,
          question: "What does CFP stand for?",
          options: ["Certified Financial Planner", "Chartered Financial Professional", "Certified Finance Professional", "Chartered Financial Planner"],
          correctAnswer: 0,
          explanation: "CFP: Comprehensive financial planning certification requiring exam, experience, ethics."
        },
        {
          id: 9,
          question: "What is Monte Carlo simulation used for?",
          options: ["Only stock picking", "Retirement planning probability analysis", "Insurance pricing", "Estate tax calculation"],
          correctAnswer: 1,
          explanation: "Monte Carlo simulations model range of possible outcomes for retirement plans."
        },
        {
          id: 10,
          question: "What is a team-based service model?",
          options: ["Only one advisor", "Specialists collaborating on client matters", "No collaboration", "Only outsourced"],
          correctAnswer: 1,
          explanation: "Team approach brings together different specialists for comprehensive service."
        },
        {
          id: 11,
          question: "What is Form ADV?",
          options: ["Tax form", "SEC investment advisor disclosure document", "Insurance form", "Estate document"],
          correctAnswer: 1,
          explanation: "Form ADV provides clients with information about advisor's business and practices."
        },
        {
          id: 12,
          question: "What does AUM stand for?",
          options: ["Assets Under Management", "Annual Usage Metric", "Average Unit Margin", "Asset Utilization Measure"],
          correctAnswer: 0,
          explanation: "AUM: total market value of assets managed by advisor/firm."
        },
        {
          id: 13,
          question: "What is business continuity planning for?",
          options: ["Only disasters", "Ensuring practice continues during transitions/disruptions", "Only retirement", "Only sales"],
          correctAnswer: 1,
          explanation: "Business continuity ensures practice can continue serving clients during various disruptions."
        },
        {
          id: 14,
          question: "What is a common client acquisition strategy?",
          options: ["Cold calling only", "Referrals from existing clients and professionals", "Only advertising", "No acquisition needed"],
          correctAnswer: 1,
          explanation: "Referrals from satisfied clients and professional alliances are most effective sources."
        },
        {
          id: 15,
          question: "What does comprehensive discovery include?",
          options: ["Only assets", "Quantitative and qualitative assessment", "Only goals", "Only tax information"],
          correctAnswer: 1,
          explanation: "Comprehensive discovery covers both numbers (assets, income) and personal aspects (goals, values)."
        },
        {
          id: 16,
          question: "What is Regulation BI?",
          options: ["Best Interest regulation for broker-dealers", "Only for insurance", "No regulation", "For banks only"],
          correctAnswer: 0,
          explanation: "Regulation BI requires broker-dealers to act in retail customers' best interests."
        },
        {
          id: 17,
          question: "What is an ideal client characteristic?",
          options: ["No complexity", "Financial complexity needing integrated services", "Only simple needs", "No willingness to pay"],
          correctAnswer: 1,
          explanation: "Ideal clients have complexity that benefits from integrated wealth management services."
        },
        {
          id: 18,
          question: "What does quarterly review typically include?",
          options: ["Only performance", "Performance, rebalancing, market outlook, tax opportunities", "Only taxes", "Only new investments"],
          correctAnswer: 1,
          explanation: "Quarterly reviews cover performance, rebalancing needs, market updates, and tax strategies."
        },
        {
          id: 19,
          question: "What is a vulnerable client consideration?",
          options: ["Ignore vulnerabilities", "Additional protections for diminished capacity", "Treat all same", "No special considerations"],
          correctAnswer: 1,
          explanation: "Vulnerable clients may need additional safeguards due to age, health, or circumstances."
        },
        {
          id: 20,
          question: "What is practice succession planning?",
          options: ["Only retirement", "Ensuring business continuity through ownership transfer", "Only closing", "No planning needed"],
          correctAnswer: 1,
          explanation: "Succession planning prepares for ownership transition while maintaining client service."
        }
      ]
    }
  ],

  // 3. FINAL EXAM (40 Questions - 6-7 questions from each module)
  finalExam: {
    id: "wealth-management-diploma-exam",
    title: "Wealth Management Diploma Final Exam",
    passingScore: 75,
    questions: [
      // Module 1 Questions (7)
      {
        id: 1,
        module: 1,
        question: "What does MPT's efficient frontier show?",
        options: ["All portfolios", "Highest return for given risk portfolios", "Only bond portfolios", "Only high-risk portfolios"],
        correctAnswer: 1,
        explanation: "Efficient frontier: optimal portfolios maximizing return for each risk level."
      },
      {
        id: 2,
        module: 1,
        question: "What is core-satellite approach?",
        options: ["All active", "Core passive with satellite active strategies", "Only alternatives", "All cash"],
        correctAnswer: 1,
        explanation: "Core provides low-cost foundation, satellite seeks alpha through active strategies."
      },
      {
        id: 3,
        module: 1,
        question: "Which is a factor in factor-based investing?",
        options: ["CEO factor", "Value factor", "Weather factor", "No factors"],
        correctAnswer: 1,
        explanation: "Value factor: cheap stocks tend to outperform expensive ones over time."
      },
      {
        id: 4,
        module: 1,
        question: "What does VaR measure?",
        options: ["Average return", "Maximum loss at confidence level", "Only gains", "Standard deviation"],
        correctAnswer: 1,
        explanation: "Value at Risk estimates maximum loss over period at specified confidence level."
      },
      {
        id: 5,
        module: 1,
        question: "What is loss aversion?",
        options: ["Ignoring losses", "Losses hurt more than equivalent gains please", "Loving losses", "Only gains matter"],
        correctAnswer: 1,
        explanation: "Psychological pain of loss greater than pleasure from equivalent gain."
      },
      {
        id: 6,
        module: 1,
        question: "What does attribution analysis separate?",
        options: ["Only fees", "Allocation and selection effects", "Only taxes", "Only market returns"],
        correctAnswer: 1,
        explanation: "Separates impact of asset allocation vs. security selection decisions."
      },
      {
        id: 7,
        module: 1,
        question: "What is tactical asset allocation?",
        options: ["Never changes", "Short-term deviations from strategic targets", "Only long-term", "Ignore markets"],
        correctAnswer: 1,
        explanation: "Temporary adjustments based on market views or opportunities."
      },
      // Module 2 Questions (7)
      {
        id: 8,
        module: 2,
        question: "What is tax diversification?",
        options: ["Only taxable accounts", "Using different tax-treatment accounts", "Only tax-deferred", "Ignore taxes"],
        correctAnswer: 1,
        explanation: "Spreading assets across taxable, tax-deferred, and tax-free accounts."
      },
      {
        id: 9,
        module: 2,
        question: "What is the wash sale rule period?",
        options: ["7 days", "30 days", "90 days", "1 year"],
        correctAnswer: 1,
        explanation: "Cannot buy substantially identical security 30 days before/after loss sale."
      },
      {
        id: 10,
        module: 2,
        question: "What is the 2024 gift tax annual exclusion?",
        options: ["$15,000", "$18,000", "$28,000", "Unlimited"],
        correctAnswer: 1,
        explanation: "$18,000 per recipient annually without using lifetime exemption."
      },
      {
        id: 11,
        module: 2,
        question: "When do RMDs begin under SECURE 2.0?",
        options: ["70½", "72", "73", "75"],
        correctAnswer: 2,
        explanation: "Age 73 beginning in 2023, increasing to 75 by 2033."
      },
      {
        id: 12,
        module: 2,
        question: "What is portability?",
        options: ["Moving assets", "Surviving spouse using deceased's unused exemption", "Only state tax", "No portability"],
        correctAnswer: 1,
        explanation: "Allows surviving spouse to use deceased spouse's unused estate tax exemption."
      },
      {
        id: 13,
        module: 2,
        question: "What is QSBS exclusion?",
        options: ["50%", "75%", "Up to 100%", "No exclusion"],
        correctAnswer: 2,
        explanation: "Qualified Small Business Stock can exclude up to 100% of gain (limitations apply)."
      },
      {
        id: 14,
        module: 2,
        question: "What is a Donor-Advised Fund?",
        options: ["No deduction", "Immediate deduction with later grants", "Only cash", "Complex"],
        correctAnswer: 1,
        explanation: "Provides immediate tax deduction while allowing later distribution to charities."
      },
      // Module 3 Questions (7)
      {
        id: 15,
        module: 3,
        question: "What does ILIT stand for?",
        options: ["Individual Life Insurance Trust", "Irrevocable Life Insurance Trust", "International Life Insurance Trust", "Immediate Life Insurance Trust"],
        correctAnswer: 1,
        explanation: "ILIT owns life insurance, removing proceeds from estate."
      },
      {
        id: 16,
        module: 3,
        question: "What is a GRAT?",
        options: ["Grantor Retained Annuity Trust", "General Retirement Account Trust", "Grantor Revocable Asset Trust", "Government Retirement Annuity Trust"],
        correctAnswer: 0,
        explanation: "GRAT transfers appreciation to beneficiaries with minimal gift tax."
      },
      {
        id: 17,
        module: 3,
        question: "What is private foundation minimum distribution?",
        options: ["2%", "5%", "10%", "No minimum"],
        correctAnswer: 1,
        explanation: "Approximately 5% of assets must be distributed annually."
      },
      {
        id: 18,
        module: 3,
        question: "What does RUFADAA address?",
        options: ["Real estate", "Digital assets access", "Retirement accounts", "Business valuation"],
        correctAnswer: 1,
        explanation: "Governs fiduciaries' access to digital assets and accounts."
      },
      {
        id: 19,
        module: 3,
        question: "What is a QTIP trust for?",
        options: ["Only charity", "Blended family planning", "Only minors", "Business only"],
        correctAnswer: 1,
        explanation: "Provides for surviving spouse while preserving remainder for others."
      },
      {
        id: 20,
        module: 3,
        question: "What is an ABLE account?",
        options: ["Retirement", "Disabled individuals' savings", "Business", "Vacation"],
        correctAnswer: 1,
        explanation: "Tax-advantaged savings account for disabled individuals."
      },
      {
        id: 21,
        module: 3,
        question: "What is a multi-family office?",
        options: ["One family", "Serves multiple families", "Virtual only", "Personal office"],
        correctAnswer: 1,
        explanation: "Serves multiple wealthy families, sharing resources and costs."
      },
      // Module 4 Questions (6)
      {
        id: 22,
        module: 4,
        question: "What is umbrella insurance?",
        options: ["Home insurance", "Excess liability coverage", "Auto only", "Health insurance"],
        correctAnswer: 1,
        explanation: "Provides additional liability coverage above underlying policies."
      },
      {
        id: 23,
        module: 4,
        question: "What is charging order protection?",
        options: ["Asset seizure", "Creditor gets distribution rights only", "Immediate liquidation", "No protection"],
        correctAnswer: 1,
        explanation: "Creditor can receive distributions but cannot control or liquidate entity."
      },
      {
        id: 24,
        module: 4,
        question: "What is key person insurance?",
        options: ["All employees", "Critical individuals", "Only owners", "Retired"],
        correctAnswer: 1,
        explanation: "Protects business from financial impact of losing key personnel."
      },
      {
        id: 25,
        module: 4,
        question: "What does D&O cover?",
        options: ["Property", "Directors' personal liability", "Employee theft", "Products"],
        correctAnswer: 1,
        explanation: "Covers personal liability of directors and officers for decisions."
      },
      {
        id: 26,
        module: 4,
        question: "What is cyber extortion coverage?",
        options: ["Physical theft", "Ransomware attacks", "Employee fraud", "Market loss"],
        correctAnswer: 1,
        explanation: "Covers ransomware and similar digital extortion threats."
      },
      {
        id: 27,
        module: 4,
        question: "What is a captive insurance company?",
        options: ["Government", "Business's own insurance company", "Foreign", "No-frills"],
        correctAnswer: 1,
        explanation: "Company creates subsidiary to insure its own risks."
      },
      // Module 5 Questions (6)
      {
        id: 28,
        module: 5,
        question: "What is prospect theory?",
        options: ["Market efficiency", "Decision-making under risk with biases", "Only rational", "Stock prices"],
        correctAnswer: 1,
        explanation: "Explains how people make decisions involving risk with psychological biases."
      },
      {
        id: 29,
        module: 5,
        question: "What is Sudden Wealth Syndrome?",
        options: ["Always happy", "Psychological challenges after rapid wealth", "Only physical", "No impact"],
        correctAnswer: 1,
        explanation: "Psychological adjustment difficulties after receiving large sums."
      },
      {
        id: 30,
        module: 5,
        question: "What is loss aversion?",
        options: ["Ignore losses", "Losses hurt more than gains", "Love losses", "Only gains"],
        correctAnswer: 1,
        explanation: "Psychological pain of loss greater than pleasure from equivalent gain."
      },
      {
        id: 31,
        module: 5,
        question: "What is herding behavior?",
        options: ["Independent", "Following others", "Always contrarian", "No social"],
        correctAnswer: 1,
        explanation: "Making decisions based on what others do rather than independent analysis."
      },
      {
        id: 32,
        module: 5,
        question: "What is nudge theory?",
        options: ["Forced decisions", "Choice architecture influencing behavior", "No influence", "Random"],
        correctAnswer: 1,
        explanation: "Designing choices to influence decisions in predictable ways."
      },
      {
        id: 33,
        module: 5,
        question: "What is mental accounting?",
        options: ["One account", "Separating money into mental categories", "No categories", "Bank only"],
        correctAnswer: 1,
        explanation: "Treating money differently based on source or intended use."
      },
      // Module 6 Questions (7)
      {
        id: 34,
        module: 6,
        question: "What does integrated wealth management include?",
        options: ["Only investments", "All financial aspects holistically", "Only tax", "Only insurance"],
        correctAnswer: 1,
        explanation: "Addresses investments, tax, estate, insurance, planning comprehensively."
      },
      {
        id: 35,
        module: 6,
        question: "What is UHNW threshold?",
        options: ["$2M", "$10M", "$30M+", "$100M"],
        correctAnswer: 2,
        explanation: "Ultra-high-net-worth typically $30 million or more in net worth."
      },
      {
        id: 36,
        module: 6,
        question: "What is the fiduciary standard?",
        options: ["Suitable", "Client's best interests first", "Sales", "No standard"],
        correctAnswer: 1,
        explanation: "Requires putting client's interests ahead of advisor's own."
      },
      {
        id: 37,
        module: 6,
        question: "What does CRM stand for?",
        options: ["Client Relationship Management", "Customer Retention Marketing", "Client Revenue Maximization", "Corporate Risk Management"],
        correctAnswer: 0,
        explanation: "CRM systems manage client information, interactions, and workflows."
      },
      {
        id: 38,
        module: 6,
        question: "Who regulates $100M+ AUM RIAs?",
        options: ["FINRA", "SEC", "State", "CFP Board"],
        correctAnswer: 1,
        explanation: "SEC regulates investment advisors with $100 million or more AUM."
      },
      {
        id: 39,
        module: 6,
        question: "What does CFP stand for?",
        options: ["Certified Financial Planner", "Chartered Financial Professional", "Certified Finance Professional", "Chartered Financial Planner"],
        correctAnswer: 0,
        explanation: "CFP: comprehensive financial planning certification."
      },
      {
        id: 40,
        module: 6,
        question: "What is Monte Carlo simulation for?",
        options: ["Stock picking", "Retirement probability analysis", "Insurance", "Estate tax"],
        correctAnswer: 1,
        explanation: "Models range of possible outcomes for retirement planning."
      }
    ]
  }
};

export default wealthManagementDiploma;
