export const dataAnalyticsDiplomaCourse = {
  id: "data-analytics-diploma",
  title: "Data Analytics (Diploma)",
  description: "Advanced course in data analytics covering data wrangling, statistical analysis, visualization, and predictive modeling for professional data analysis.",
  duration: "10 weeks",
  timeCommitment: "8-10 hours per week",
  price: 18,
  upgradePrice: null,
  icon: "📈",
  badge: "Diploma",
  
  modules: [
    {
      id: 1,
      title: "Data Wrangling and Preparation",
      content: `# Module 1: Data Wrangling and Preparation

Welcome to the Data Analytics Diploma! This first module focuses on the essential skill of preparing data for analysis - often called data wrangling. Professionals spend most of their time here because clean data leads to reliable insights.

## The Data Preparation Process

**Why Data Wrangling Matters:**
- Raw data is rarely analysis-ready
- Garbage in = Garbage out principle
- Time spent here saves time later
- Quality preparation prevents analysis errors

**The Five Steps of Data Preparation:**
1. **Data Collection**: Gathering data from various sources
2. **Data Cleaning**: Fixing errors and inconsistencies
3. **Data Transformation**: Converting to suitable formats
4. **Data Integration**: Combining multiple datasets
5. **Data Reduction**: Simplifying without losing meaning

## Data Collection Strategies

**Common Data Sources:**
- **Databases**: SQL, NoSQL, data warehouses
- **Files**: CSV, Excel, JSON, XML formats
- **APIs**: Web services and application interfaces
- **Web Scraping**: Extracting data from websites
- **Surveys and Forms**: Direct user input collection

**Best Practices for Collection:**
- Document sources and collection dates
- Understand data licenses and permissions
- Collect more than you think you need
- Include metadata about the data
- Create backup copies of raw data

## Data Cleaning Techniques

**Handling Missing Values:**
- **Identify**: How much data is missing?
- **Understand**: Why is it missing? (Random vs systematic)
- **Decide**: Remove, impute, or flag missing values
- **Imputation Methods**: Mean/median, regression, k-nearest neighbors

**Correcting Data Errors:**
- **Outlier Detection**: Statistical methods to identify unusual values
- **Format Standardization**: Dates, currencies, text formatting
- **Duplicate Removal**: Finding and eliminating repeated records
- **Consistency Checks**: Logical validation rules

**Real-World Cleaning Example:**
Customer database with:
- 15% missing email addresses
- Inconsistent date formats (MM/DD/YYYY and DD-MM-YYYY)
- Duplicate customer entries
- Invalid phone numbers
Solution approach: Systematic cleaning with documented changes

## Data Transformation Methods

**Common Transformations:**
- **Normalization**: Scaling numerical data to common range
- **Standardization**: Converting to z-scores (mean=0, std=1)
- **Encoding**: Converting categorical to numerical (one-hot encoding)
- **Binning**: Grouping continuous data into categories
- **Feature Engineering**: Creating new variables from existing ones

**Transformation Tools:**
- Programming: Python (Pandas), R (dplyr)
- Spreadsheets: Excel Power Query
- Visual Tools: Tableau Prep, Alteryx
- Database: SQL transformations

## Data Integration Challenges

**Combining Multiple Sources:**
- **Matching Records**: How to identify same entities across datasets
- **Handling Conflicts**: What if sources disagree?
- **Schema Integration**: Different structures and naming conventions
- **Temporal Alignment**: Data from different time periods

**Integration Strategies:**
- **Key-based Joins**: Using common identifiers
- **Fuzzy Matching**: Approximate matching for similar records
- **Entity Resolution**: Advanced matching algorithms
- **Data Lakes**: Central repositories for diverse data

## Data Reduction Approaches

**When and Why to Reduce Data:**
- Improve processing speed
- Reduce storage requirements
- Remove irrelevant information
- Focus on key variables

**Reduction Techniques:**
- **Sampling**: Analyzing subset instead of full population
- **Dimensionality Reduction**: PCA, t-SNE for many variables
- **Aggregation**: Summarizing detailed data (daily to monthly)
- **Feature Selection**: Choosing most relevant variables

## Practical Data Wrangling Workflow

**Step-by-Step Example: E-commerce Analysis**
1. **Collect**: Sales data (CSV), customer data (SQL), web logs (JSON)
2. **Clean**: Handle missing prices, standardize dates, remove test transactions
3. **Transform**: Calculate customer lifetime value, create purchase categories
4. **Integrate**: Join customer data with sales by customer ID
5. **Reduce**: Aggregate daily sales to weekly trends

**Quality Checks:**
- Validate after each transformation step
- Compare summary statistics before/after
- Test with small samples first
- Document all changes made

**Key Professional Insight**: Data wrangling is iterative. Expect to revisit cleaning and transformation as you discover new issues during analysis. The goal is data you can trust for decision-making.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What percentage of analytical time do professionals typically spend on data preparation?",
          options: ["10-20%", "40-60%", "70-80%", "90-100%"],
          correctAnswer: 2,
          explanation: "Professionals spend 70-80% of their time on data preparation and cleaning."
        },
        {
          id: 2,
          question: "What is the first step in data preparation?",
          options: ["Data Cleaning", "Data Collection", "Data Transformation", "Data Integration"],
          correctAnswer: 1,
          explanation: "Data collection is the initial step where you gather data from various sources."
        },
        {
          id: 3,
          question: "Which technique converts categorical data to numerical format?",
          options: ["Normalization", "Standardization", "Encoding", "Binning"],
          correctAnswer: 2,
          explanation: "Encoding methods like one-hot encoding convert categorical variables to numerical format."
        },
        {
          id: 4,
          question: "What approach handles missing values by estimating them?",
          options: ["Deletion", "Imputation", "Flagging", "Ignoring"],
          correctAnswer: 1,
          explanation: "Imputation involves estimating missing values based on other data points."
        },
        {
          id: 5,
          question: "Which tool is mentioned for visual data preparation?",
          options: ["Python Pandas", "Tableau Prep", "SQL", "Excel only"],
          correctAnswer: 1,
          explanation: "Tableau Prep is a visual tool specifically designed for data preparation workflows."
        },
        {
          id: 6,
          question: "What is the main challenge in data integration?",
          options: ["Data cleaning", "Matching records across sources", "Data reduction", "Visualization"],
          correctAnswer: 1,
          explanation: "Matching the same entities across different datasets is a primary integration challenge."
        },
        {
          id: 7,
          question: "Which method reduces dataset size by analyzing a subset?",
          options: ["Normalization", "Sampling", "Encoding", "Integration"],
          correctAnswer: 1,
          explanation: "Sampling involves analyzing a representative subset instead of the entire dataset."
        },
        {
          id: 8,
          question: "What does PCA stand for in data reduction?",
          options: [
            "Primary Component Analysis",
            "Principal Component Analysis",
            "Preliminary Collection Approach",
            "Process Control Algorithm"
          ],
          correctAnswer: 1,
          explanation: "PCA stands for Principal Component Analysis, a dimensionality reduction technique."
        },
        {
          id: 9,
          question: "What should you always create during data collection?",
          options: ["Visualizations", "Backup copies", "Final reports", "Predictive models"],
          correctAnswer: 1,
          explanation: "Always create backup copies of raw data before starting any transformations."
        },
        {
          id: 10,
          question: "What does 'garbage in, garbage out' principle emphasize?",
          options: [
            "Fast analysis is best",
            "Clean data leads to reliable insights",
            "Complex models are always better",
            "More data is always better"
          ],
          correctAnswer: 1,
          explanation: "This principle emphasizes that poor quality input data leads to unreliable results."
        },
        {
          id: 11,
          question: "Which file format was NOT mentioned as a common data source?",
          options: ["CSV", "Excel", "JSON", "PDF"],
          correctAnswer: 3,
          explanation: "PDF was not listed among the common structured data file formats."
        },
        {
          id: 12,
          question: "What is fuzzy matching used for?",
          options: [
            "Data cleaning",
            "Approximate record matching",
            "Statistical analysis",
            "Data visualization"
          ],
          correctAnswer: 1,
          explanation: "Fuzzy matching finds approximately similar records when exact matches aren't possible."
        },
        {
          id: 13,
          question: "When should you consider data reduction?",
          options: [
            "Always at the beginning",
            "When processing speed needs improvement",
            "Only for small datasets",
            "Never reduce data"
          ],
          correctAnswer: 1,
          explanation: "Data reduction helps when datasets are too large for efficient processing."
        },
        {
          id: 14,
          question: "What is feature engineering?",
          options: [
            "Deleting features",
            "Creating new variables from existing ones",
            "Only using original features",
            "Visualizing features"
          ],
          correctAnswer: 1,
          explanation: "Feature engineering involves creating new predictive variables from existing data."
        },
        {
          id: 15,
          question: "What quality check involves comparing before/after statistics?",
          options: [
            "Validation testing",
            "Summary statistics comparison",
            "Small sample testing",
            "Documentation review"
          ],
          correctAnswer: 1,
          explanation: "Comparing summary statistics helps ensure transformations didn't distort the data."
        },
        {
          id: 16,
          question: "Which programming library is mentioned for data transformation?",
          options: ["TensorFlow", "Pandas", "Scikit-learn", "Matplotlib"],
          correctAnswer: 1,
          explanation: "Pandas is Python's primary library for data manipulation and transformation."
        },
        {
          id: 17,
          question: "What does temporal alignment address?",
          options: [
            "Different time zones",
            "Data from different time periods",
            "Clock synchronization",
            "Date formatting only"
          ],
          correctAnswer: 1,
          explanation: "Temporal alignment deals with integrating data collected at different times."
        },
        {
          id: 18,
          question: "What is the key professional insight about data wrangling?",
          options: [
            "It's a one-time process",
            "It's iterative and requires revisiting",
            "It should be automated completely",
            "It's the least important step"
          ],
          correctAnswer: 1,
          explanation: "Data wrangling is iterative as new issues often emerge during analysis."
        },
        {
          id: 19,
          question: "What method standardizes data to mean=0, std=1?",
          options: ["Normalization", "Z-score standardization", "Encoding", "Binning"],
          correctAnswer: 1,
          explanation: "Z-score standardization transforms data to have mean of 0 and standard deviation of 1."
        },
        {
          id: 20,
          question: "Why document all data transformations?",
          options: [
            "For compliance only",
            "To reproduce and validate analysis",
            "Because managers require it",
            "To fill reports"
          ],
          correctAnswer: 1,
          explanation: "Documentation ensures analysis is reproducible and transformations are transparent."
        }
      ]
    },
    {
      id: 2,
      title: "Exploratory Data Analysis (EDA)",
      content: `# Module 2: Exploratory Data Analysis (EDA)

Exploratory Data Analysis is your first real look at the data. It's about understanding patterns, spotting anomalies, and generating hypotheses before formal modeling. Think of it as getting to know your data intimately.

## The Purpose of EDA

**Why EDA is Essential:**
- Understand data structure and content
- Detect errors and anomalies missed in cleaning
- Identify patterns and relationships
- Generate hypotheses for testing
- Guide choice of analytical methods

**EDA vs Confirmatory Analysis:**
- **EDA**: Open-ended exploration, hypothesis generation
- **Confirmatory**: Testing specific hypotheses, statistical inference
- **Relationship**: EDA informs what to test confirmatorily

## Univariate Analysis Techniques

**Analyzing Single Variables:**
- **Distribution Analysis**: Shape, center, spread, outliers
- **Summary Statistics**: Mean, median, mode, variance, percentiles
- **Visualizations**: Histograms, box plots, density plots

**Categorical Variable Analysis:**
- **Frequency Tables**: Counts and percentages
- **Bar Charts**: Visualizing category frequencies
- **Mode Identification**: Most common categories

**Continuous Variable Analysis:**
- **Distribution Shape**: Symmetric, skewed, multimodal
- **Central Tendency**: Mean vs median comparison
- **Spread Measures**: Range, IQR, variance, standard deviation
- **Outlier Detection**: Using IQR or z-score methods

## Bivariate Analysis Methods

**Examining Relationships Between Two Variables:**
- **Categorical-Categorical**: Cross-tabulations, mosaic plots
- **Categorical-Continuous**: Group comparisons, ANOVA preview
- **Continuous-Continuous**: Scatter plots, correlation analysis

**Correlation Analysis:**
- **Pearson Correlation**: Linear relationships
- **Spearman Correlation**: Monotonic relationships
- **Correlation Matrices**: All variable pairs at once
- **Heatmaps**: Visualizing correlation patterns

## Multivariate Analysis Approaches

**Understanding Complex Relationships:**
- **Pair Plots**: Matrix of scatter plots for all variables
- **Parallel Coordinates**: High-dimensional data visualization
- **Cluster Analysis**: Grouping similar observations
- **Dimensionality Reduction**: PCA, t-SNE for pattern discovery

**Interactive Exploration Tools:**
- **Jupyter Notebooks**: Code and visualizations together
- **Tableau/Power BI**: Drag-and-drop exploration
- **R Shiny/Python Dash**: Interactive web applications

## Statistical Visualization Principles

**Effective Visualization Guidelines:**
1. **Choose Right Chart**: Match visualization to question
2. **Simplify**: Remove chart junk and distractions
3. **Highlight**: Emphasize important patterns
4. **Compare**: Make comparisons easy
5. **Annotate**: Add context and explanations

**Common EDA Visualizations:**
- **Histograms**: Distribution shape and outliers
- **Box Plots**: Summary statistics and outliers
- **Scatter Plots**: Relationship between two variables
- **Heatmaps**: Correlation or frequency patterns
- **Violin Plots**: Distribution and density combined

## EDA for Different Data Types

**Time Series Data:**
- **Line Charts**: Trend visualization
- **Seasonal Decomposition**: Trend, seasonal, residual components
- **Autocorrelation**: Relationship with past values
- **Stationarity Checks**: Constant statistical properties

**Geospatial Data:**
- **Choropleth Maps**: Value-based region coloring
- **Point Maps**: Location-based data points
- **Heat Maps**: Density visualization
- **Flow Maps**: Movement patterns

**Text Data:**
- **Word Clouds**: Frequent term visualization
- **Topic Modeling**: Discovering themes
- **Sentiment Analysis**: Emotional tone patterns
- **Network Graphs**: Relationship networks

## Practical EDA Workflow

**Step-by-Step Retail Sales Analysis:**
1. **Data Overview**: Shape, columns, data types, missing values
2. **Univariate Analysis**: Sales distribution, product category frequencies
3. **Bivariate Analysis**: Sales vs price, sales vs season
4. **Multivariate Analysis**: Customer segments, purchase patterns
5. **Time Analysis**: Trends, seasonality, holiday effects
6. **Anomaly Detection**: Unusual sales days or products

**Key Questions to Answer:**
- What are the typical values?
- How much variation exists?
- What relationships exist between variables?
- Are there any unusual observations?
- What patterns emerge over time?

## Advanced EDA Techniques

**Statistical Testing in EDA:**
- **Normality Tests**: Shapiro-Wilk, Kolmogorov-Smirnov
- **Homogeneity Tests**: Levene's test for equal variances
- **Stationarity Tests**: Augmented Dickey-Fuller for time series

**Automated EDA Tools:**
- **Pandas Profiling**: Automated DataFrame analysis
- **Sweetviz**: Comparison and visualization
- **D-Tale**: Interactive exploration interface
- **AutoViz**: Automatic visualization generation

## EDA Documentation and Reporting

**Creating EDA Reports:**
- **Executive Summary**: Key findings and insights
- **Methodology**: Techniques and tools used
- **Findings**: Detailed analysis with visualizations
- **Recommendations**: Next steps and hypotheses to test
- **Appendix**: Code, data samples, detailed statistics

**Best Practices:**
- Document unexpected findings
- Save visualizations at publication quality
- Include both summary and detailed views
- Note limitations and data quality issues
- Track hypotheses generated during exploration

**Professional Insight**: EDA is both science and art. The best analysts develop intuition about where to look and what questions to ask. Always approach EDA with curiosity and skepticism - question what you see and look for alternative explanations.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the primary purpose of Exploratory Data Analysis?",
          options: [
            "Building predictive models",
            "Understanding data and generating hypotheses",
            "Creating final reports",
            "Data cleaning only"
          ],
          correctAnswer: 1,
          explanation: "EDA focuses on understanding data patterns and generating hypotheses for further testing."
        },
        {
          id: 2,
          question: "Which visualization shows distribution shape and outliers?",
          options: ["Scatter Plot", "Histogram", "Bar Chart", "Heatmap"],
          correctAnswer: 1,
          explanation: "Histograms display the distribution shape of continuous variables and can show outliers."
        },
        {
          id: 3,
          question: "What does univariate analysis examine?",
          options: [
            "Multiple variables together",
            "Relationships between two variables",
            "Single variables individually",
            "Time-based patterns"
          ],
          correctAnswer: 2,
          explanation: "Univariate analysis focuses on understanding individual variables one at a time."
        },
        {
          id: 4,
          question: "Which correlation measures monotonic relationships?",
          options: ["Pearson", "Spearman", "Kendall", "Both B and C"],
          correctAnswer: 3,
          explanation: "Both Spearman and Kendall correlations measure monotonic (not necessarily linear) relationships."
        },
        {
          id: 5,
          question: "What tool provides automated DataFrame analysis?",
          options: ["Pandas Profiling", "Tableau", "Excel", "SQL"],
          correctAnswer: 0,
          explanation: "Pandas Profiling generates comprehensive reports from pandas DataFrames automatically."
        },
        {
          id: 6,
          question: "Which plot combines distribution and density information?",
          options: ["Box Plot", "Violin Plot", "Scatter Plot", "Bar Chart"],
          correctAnswer: 1,
          explanation: "Violin plots show both the box plot summary and kernel density estimation."
        },
        {
          id: 7,
          question: "What is the difference between EDA and confirmatory analysis?",
          options: [
            "EDA tests hypotheses, confirmatory generates them",
            "EDA generates hypotheses, confirmatory tests them",
            "They are the same thing",
            "EDA is for cleaning, confirmatory for analysis"
          ],
          correctAnswer: 1,
          explanation: "EDA explores data to generate hypotheses, which are then tested in confirmatory analysis."
        },
        {
          id: 8,
          question: "Which visualization is best for time series trends?",
          options: ["Bar Chart", "Pie Chart", "Line Chart", "Scatter Plot"],
          correctAnswer: 2,
          explanation: "Line charts effectively show trends and patterns over time."
        },
        {
          id: 9,
          question: "What does a correlation matrix heatmap show?",
          options: [
            "Single variable distributions",
            "Time series patterns",
            "Relationships between all variable pairs",
            "Categorical frequencies"
          ],
          correctAnswer: 2,
          explanation: "Correlation matrix heatmaps visualize relationships between all pairs of variables."
        },
        {
          id: 10,
          question: "Which is NOT a common EDA question?",
          options: [
            "What are typical values?",
            "How much variation exists?",
            "What relationships exist?",
            "What will happen exactly tomorrow?"
          ],
          correctAnswer: 3,
          explanation: "EDA focuses on understanding patterns, not making exact future predictions."
        },
        {
          id: 11,
          question: "What analysis examines two variables together?",
          options: ["Univariate", "Bivariate", "Multivariate", "Time Series"],
          correctAnswer: 1,
          explanation: "Bivariate analysis examines relationships between two variables."
        },
        {
          id: 12,
          question: "Which test checks for normality?",
          options: ["Levene's test", "Shapiro-Wilk test", "t-test", "ANOVA"],
          correctAnswer: 1,
          explanation: "The Shapiro-Wilk test assesses whether data follows a normal distribution."
        },
        {
          id: 13,
          question: "What does seasonal decomposition separate?",
          options: [
            "Data into training and testing sets",
            "Trend, seasonal, and residual components",
            "Categorical and continuous variables",
            "Clean and dirty data"
          ],
          correctAnswer: 1,
          explanation: "Seasonal decomposition breaks time series into trend, seasonal, and residual elements."
        },
        {
          id: 14,
          question: "Which tool combines code and visualizations interactively?",
          options: ["Jupyter Notebooks", "Excel", "SQL Server", "PowerPoint"],
          correctAnswer: 0,
          explanation: "Jupyter Notebooks allow interactive coding with inline visualizations."
        },
        {
          id: 15,
          question: "What visualization shows category frequencies?",
          options: ["Scatter Plot", "Line Chart", "Bar Chart", "Heatmap"],
          correctAnswer: 2,
          explanation: "Bar charts effectively display frequencies or counts for categorical variables."
        },
        {
          id: 16,
          question: "What is autocorrelation analysis used for?",
          options: [
            "Text data analysis",
            "Time series pattern detection",
            "Categorical variable analysis",
            "Data cleaning"
          ],
          correctAnswer: 1,
          explanation: "Autocorrelation examines how current values relate to past values in time series."
        },
        {
          id: 17,
          question: "What does pair plotting create?",
          options: [
            "Single scatter plot",
            "Matrix of scatter plots for all variables",
            "Time series line charts",
            "Correlation heatmaps"
          ],
          correctAnswer: 1,
          explanation: "Pair plots create a matrix showing relationships between all variable pairs."
        },
        {
          id: 18,
          question: "Which is an advanced EDA technique?",
          options: [
            "Basic summary statistics",
            "Simple bar charts",
            "Dimensionality reduction like PCA",
            "Data cleaning only"
          ],
          correctAnswer: 2,
          explanation: "Dimensionality reduction techniques like PCA are advanced EDA methods for pattern discovery."
        },
        {
          id: 19,
          question: "What should EDA reports include?",
          options: [
            "Only final conclusions",
            "Key findings, methodology, and recommendations",
            "Raw data only",
            "Predictive models only"
          ],
          correctAnswer: 1,
          explanation: "Comprehensive EDA reports include findings, methods, visualizations, and next steps."
        },
        {
          id: 20,
          question: "What mindset should guide EDA?",
          options: [
            "Confirmation of existing beliefs",
            "Curiosity and skepticism",
            "Rushing to conclusions",
            "Following procedures blindly"
          ],
          correctAnswer: 1,
          explanation: "EDA requires curiosity to explore and skepticism to question what you find."
        }
      ]
    },
    {
      id: 3,
      title: "Statistical Analysis for Analytics",
      content: `# Module 3: Statistical Analysis for Analytics

Statistical analysis transforms data into evidence. This module covers the statistical techniques that form the foundation of professional data analytics, from basic inference to advanced modeling.

## Foundations of Statistical Inference

**Population vs Sample:**
- **Population**: Entire group of interest (all customers)
- **Sample**: Subset selected for analysis (survey respondents)
- **Inference**: Using samples to make conclusions about populations

**Key Statistical Concepts:**
- **Parameters**: Population characteristics (true mean μ)
- **Statistics**: Sample measurements (sample mean x̄)
- **Sampling Distribution**: Distribution of sample statistics
- **Central Limit Theorem**: Sample means become normal with large n

## Hypothesis Testing Framework

**The Scientific Method in Statistics:**
1. **State Hypotheses**: Null (H₀) and Alternative (H₁)
2. **Choose Significance Level**: α (typically 0.05)
3. **Select Test**: Based on data and question
4. **Calculate Test Statistic**: From sample data
5. **Determine p-value**: Probability under null hypothesis
6. **Make Decision**: Reject or fail to reject H₀

**Common Hypothesis Tests:**
- **t-test**: Comparing means (one-sample, two-sample, paired)
- **ANOVA**: Comparing means across multiple groups
- **Chi-square**: Testing independence in categorical data
- **Correlation Tests**: Assessing relationship strength

## Confidence Intervals

**Estimating with Uncertainty:**
- **Point Estimate**: Single value estimate (sample mean)
- **Interval Estimate**: Range of plausible values
- **Confidence Level**: Probability interval contains parameter (95%)
- **Margin of Error**: Half the width of confidence interval

**Calculating Confidence Intervals:**
- **For Means**: x̄ ± t*(s/√n)
- **For Proportions**: p̂ ± z*√(p̂(1-p̂)/n)
- **Interpretation**: "We are 95% confident the true mean lies between..."

## Regression Analysis

**Modeling Relationships:**
- **Simple Linear Regression**: One predictor variable
- **Multiple Regression**: Multiple predictors
- **Logistic Regression**: Binary outcome prediction
- **Assumptions**: Linearity, independence, homoscedasticity, normality

**Regression Output Interpretation:**
- **Coefficients**: Effect size of predictors
- **R-squared**: Proportion of variance explained
- **p-values**: Statistical significance of coefficients
- **Residual Analysis**: Checking model assumptions

## Analysis of Variance (ANOVA)

**Comparing Multiple Groups:**
- **One-way ANOVA**: Single factor with multiple levels
- **Two-way ANOVA**: Two factors and their interaction
- **F-statistic**: Ratio of between-group to within-group variance
- **Post-hoc Tests**: Identifying which groups differ (Tukey, Bonferroni)

**ANOVA Assumptions:**
1. Independence of observations
2. Normality within each group
3. Homogeneity of variances

## Non-Parametric Methods

**When Assumptions Fail:**
- **Mann-Whitney U**: Non-parametric t-test alternative
- **Kruskal-Wallis**: Non-parametric ANOVA alternative
- **Wilcoxon Signed-Rank**: Paired non-parametric test
- **Spearman Correlation**: Non-parametric correlation

**Advantages:**
- No distributional assumptions
- Robust to outliers
- Suitable for ordinal data
- Works with small samples

## Time Series Analysis

**Analyzing Temporal Data:**
- **Trend Analysis**: Long-term direction
- **Seasonal Decomposition**: Separating patterns
- **Autoregressive Models**: AR, MA, ARIMA
- **Forecasting**: Predicting future values

**Key Concepts:**
- **Stationarity**: Constant statistical properties
- **Autocorrelation**: Correlation with past values
- **Seasonality**: Regular periodic fluctuations
- **Residual Diagnostics**: Checking model adequacy

## Multivariate Techniques

**Advanced Analysis Methods:**
- **Factor Analysis**: Identifying latent variables
- **Cluster Analysis**: Grouping similar observations
- **Discriminant Analysis**: Classification and separation
- **Principal Component Analysis**: Dimensionality reduction

**Application Areas:**
- Market segmentation (clustering)
- Customer profiling (factor analysis)
- Pattern recognition (PCA)
- Classification problems (discriminant analysis)

## Statistical Software and Tools

**Professional Analytics Tools:**
- **R**: Comprehensive statistical programming
- **Python**: SciPy, Statsmodels libraries
- **SPSS**: Traditional statistical software
- **SAS**: Enterprise analytics platform
- **JMP**: Interactive statistical discovery

**Choosing the Right Tool:**
- Consider team expertise
- Evaluate integration needs
- Assess scalability requirements
- Review licensing costs

## Practical Statistical Workflow

**Case Study: Marketing Campaign Analysis**
1. **Question**: Did new campaign increase sales?
2. **Design**: Before-after comparison with control group
3. **Data**: Sales data for treatment and control stores
4. **Analysis**: Two-sample t-test, regression with covariates
5. **Results**: 15% increase (p < 0.01), 95% CI [12%, 18%]
6. **Conclusion**: Campaign effective, recommend expansion

**Common Analytical Mistakes:**
- **p-hacking**: Trying multiple tests until significant
- **Multiple Testing**: Not adjusting for many comparisons
- **Overfitting**: Complex models that don't generalize
- **Confounding**: Not controlling for other factors

## Statistical Reporting Standards

**Transparent Reporting:**
- Clearly state hypotheses before analysis
- Report effect sizes with confidence intervals
- Include assumptions checks and diagnostics
- Document all analytical decisions
- Share data and code when possible

**Effect Size Interpretation:**
- **Cohen's d**: Small (0.2), Medium (0.5), Large (0.8)
- **R-squared**: Variance explained
- **Odds Ratios**: Risk comparison
- **Practical Significance**: Business impact beyond statistical

**Professional Insight**: Statistics provides the language for quantifying uncertainty. The best analysts distinguish between statistical significance (p-values) and practical significance (business impact). Always consider both when making recommendations.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the difference between parameter and statistic?",
          options: [
            "Parameter is sample measure, statistic is population measure",
            "Parameter is population measure, statistic is sample measure",
            "They are the same thing",
            "Parameter estimates statistic"
          ],
          correctAnswer: 1,
          explanation: "Parameters describe populations, statistics describe samples."
        },
        {
          id: 2,
          question: "What does the Central Limit Theorem state?",
          options: [
            "All data is normally distributed",
            "Sample means become normal with large sample size",
            "Population means equal sample means",
            "Variance decreases with sample size"
          ],
          correctAnswer: 1,
          explanation: "CLT states that sample means approach normal distribution as sample size increases."
        },
        {
          id: 3,
          question: "What is the typical significance level (α) in hypothesis testing?",
          options: ["0.01", "0.05", "0.10", "0.50"],
          correctAnswer: 1,
          explanation: "0.05 is the conventional threshold for statistical significance."
        },
        {
          id: 4,
          question: "What does a 95% confidence interval mean?",
          options: [
            "95% chance the parameter is in the interval",
            "95% of sample values are in the interval",
            "95% of intervals contain the parameter",
            "Parameter is definitely in the interval"
          ],
          correctAnswer: 2,
          explanation: "95% of such intervals from repeated sampling would contain the true parameter."
        },
        {
          id: 5,
          question: "Which test compares means across three or more groups?",
          options: ["t-test", "Chi-square", "ANOVA", "Correlation"],
          correctAnswer: 2,
          explanation: "ANOVA (Analysis of Variance) compares means across multiple groups."
        },
        {
          id: 6,
          question: "What does R-squared measure in regression?",
          options: [
            "Statistical significance",
            "Proportion of variance explained",
            "Prediction accuracy",
            "Coefficient size"
          ],
          correctAnswer: 1,
          explanation: "R-squared indicates the proportion of variance in the outcome explained by predictors."
        },
        {
          id: 7,
          question: "When should you use non-parametric tests?",
          options: [
            "Always",
            "When assumptions of parametric tests are violated",
            "Only for large samples",
            "Only for categorical data"
          ],
          correctAnswer: 1,
          explanation: "Non-parametric tests are used when parametric test assumptions aren't met."
        },
        {
          id: 8,
          question: "What is stationarity in time series?",
          options: [
            "Constant mean and variance over time",
            "Increasing trend",
            "Seasonal patterns",
            "Random fluctuations"
          ],
          correctAnswer: 0,
          explanation: "Stationarity means statistical properties don't change over time."
        },
        {
          id: 9,
          question: "What does PCA accomplish?",
          options: [
            "Predicts future values",
            "Reduces dimensionality while preserving variance",
            "Tests hypotheses",
            "Cleans data"
          ],
          correctAnswer: 1,
          explanation: "Principal Component Analysis reduces variables while retaining information."
        },
        {
          id: 10,
          question: "What is p-hacking?",
          options: [
            "Proper hypothesis testing",
            "Trying multiple tests until finding significance",
            "Using p-values correctly",
            "Reporting all analyses"
          ],
          correctAnswer: 1,
          explanation: "p-hacking involves conducting multiple analyses until obtaining a significant p-value."
        },
        {
          id: 11,
          question: "What is the null hypothesis typically?",
          options: [
            "No effect or no difference",
            "Large effect exists",
            "Sample represents population",
            "Data is normal"
          ],
          correctAnswer: 0,
          explanation: "The null hypothesis usually states no effect, difference, or relationship."
        },
        {
          id: 12,
          question: "What test examines categorical variable independence?",
          options: ["t-test", "ANOVA", "Chi-square", "Regression"],
          correctAnswer: 2,
          explanation: "Chi-square tests examine relationships between categorical variables."
        },
        {
          id: 13,
          question: "What does logistic regression predict?",
          options: [
            "Continuous outcomes",
            "Binary outcomes",
            "Time series",
            "Multiple categories"
          ],
          correctAnswer: 1,
          explanation: "Logistic regression predicts binary (yes/no, success/failure) outcomes."
        },
        {
          id: 14,
          question: "What assumption does Levene's test check?",
          options: [
            "Normality",
            "Homogeneity of variances",
            "Independence",
            "Linearity"
          ],
          correctAnswer: 1,
          explanation: "Levene's test checks equal variances across groups (homoscedasticity)."
        },
        {
          id: 15,
          question: "What is autocorrelation?",
          options: [
            "Correlation between variables",
            "Correlation with past values in time series",
            "Multiple correlations",
            "Non-linear correlation"
          ],
          correctAnswer: 1,
          explanation: "Autocorrelation measures how current values relate to past values."
        },
        {
          id: 16,
          question: "What does Cohen's d measure?",
          options: [
            "Statistical significance",
            "Effect size for mean differences",
            "Variance explained",
            "Correlation strength"
          ],
          correctAnswer: 1,
          explanation: "Cohen's d standardizes mean differences for effect size interpretation."
        },
        {
          id: 17,
          question: "What is multiple testing correction for?",
          options: [
            "Increasing significance",
            "Reducing Type I error with many tests",
            "Making tests more sensitive",
            "Simplifying analysis"
          ],
          correctAnswer: 1,
          explanation: "Corrections like Bonferroni control false positives when conducting multiple tests."
        },
        {
          id: 18,
          question: "What does ARIMA stand for?",
          options: [
            "Auto-Regressive Integrated Moving Average",
            "Advanced Regression Integrated Model Analysis",
            "Automated Regression Inference Modeling Approach",
            "Analytical Regression for Interval Measurement Assessment"
          ],
          correctAnswer: 0,
          explanation: "ARIMA combines auto-regressive, integrated, and moving average components."
        },
        {
          id: 19,
          question: "What distinguishes statistical from practical significance?",
          options: [
            "Statistical is about p-values, practical is about real-world impact",
            "They are the same thing",
            "Practical is always larger",
            "Statistical is more important"
          ],
          correctAnswer: 0,
          explanation: "Statistical significance addresses probability, practical significance addresses importance."
        },
        {
          id: 20,
          question: "What should statistical reports always include?",
          options: [
            "Only p-values",
            "Effect sizes with confidence intervals",
            "Raw data tables only",
            "Complex equations"
          ],
          correctAnswer: 1,
          explanation: "Good reporting includes effect sizes and confidence intervals, not just p-values."
        }
      ]
    },
    {
      id: 4,
      title: "Data Visualization and Dashboard Design",
      content: `# Module 4: Data Visualization and Dashboard Design

Effective visualization transforms complex data into clear insights. This module covers principles, techniques, and tools for creating professional visualizations and interactive dashboards that drive decision-making.

## Principles of Effective Visualization

**The Goal of Data Visualization:**
- Communicate information clearly and efficiently
- Reveal patterns, trends, and outliers
- Support exploration and understanding
- Facilitate decision-making

**Key Design Principles:**
1. **Clarity**: Message should be immediately understandable
2. **Accuracy**: Represent data truthfully without distortion
3. **Efficiency**: Maximize information per unit of space
4. **Aesthetics**: Visually appealing without compromising function
5. **Engagement**: Encourage exploration and interaction

## Visual Perception and Cognition

**How We Process Visual Information:**
- **Preattentive Processing**: Immediate detection of color, size, orientation
- **Gestalt Principles**: Proximity, similarity, continuity, closure
- **Visual Hierarchy**: Guiding attention through size, color, position
- **Cognitive Load**: Minimizing mental effort for understanding

**Effective Use of Visual Elements:**
- **Color**: Sequential, diverging, categorical palettes
- **Size**: Proportional encoding for quantitative data
- **Position**: Most powerful visual encoding method
- **Shape**: Distinct categories, limited to about 7 shapes

## Chart Types and Selection

**Choosing the Right Visualization:**

**Comparison Charts:**
- **Bar Charts**: Compare categories (vertical/horizontal)
- **Column Charts**: Time series with few periods
- **Dot Plots**: Precise value comparison
- **Radar Charts**: Multivariate comparison (use sparingly)

**Relationship Charts:**
- **Scatter Plots**: Two continuous variables
- **Bubble Charts**: Three dimensions (x, y, size)
- **Heatmaps**: Matrix relationships or densities
- **Network Graphs**: Connections and relationships

**Distribution Charts:**
- **Histograms**: Single variable distribution
- **Box Plots**: Summary statistics and outliers
- **Violin Plots**: Distribution shape and density
- **Density Plots**: Smooth distribution estimation

**Composition Charts:**
- **Stacked Bars**: Part-to-whole over categories
- **Pie Charts**: Simple part-to-whole (2-5 categories)
- **Treemaps**: Hierarchical part-to-whole
- **Waterfall Charts**: Cumulative effect of sequential values

**Time Series Charts:**
- **Line Charts**: Trends over continuous time
- **Area Charts**: Cumulative trends over time
- **Gantt Charts**: Project timelines and durations
- **Calendar Heatmaps**: Patterns across time dimensions

## Dashboard Design Principles

**What Makes a Great Dashboard:**
- **Purpose-Driven**: Designed for specific decisions
- **User-Centered**: Matches audience expertise and needs
- **Actionable**: Drives specific actions or decisions
- **Performant**: Loads quickly and responds smoothly

**Dashboard Layout Strategies:**
- **F-Pattern Layout**: Following natural eye movement
- **Visual Hierarchy**: Important metrics most prominent
- **Grouping Related Items**: Proximity for cognitive efficiency
- **White Space**: Breathing room between elements

**Common Dashboard Types:**
- **Strategic**: High-level KPIs for executives
- **Analytical**: Deep dive exploration for analysts
- **Operational**: Real-time monitoring for operations
- **Tactical**: Department-level performance tracking

## Interactive Visualization Features

**Enabling Exploration:**
- **Filters**: Dynamic data subset selection
- **Drill-down**: Navigate from summary to detail
- **Tooltips**: Contextual information on hover
- **Brushing and Linking**: Highlight across multiple views
- **Parameter Controls**: Sliders, dropdowns, date pickers

**Responsive Design Considerations:**
- **Mobile-First**: Design for small screens first
- **Progressive Disclosure**: Reveal complexity gradually
- **Touch-Friendly**: Larger touch targets for mobile
- **Performance Optimization**: Efficient data handling

## Color Theory for Visualization

**Choosing Effective Color Schemes:**
- **Sequential**: Light to dark for ordered data
- **Diverging**: Two hues meeting at neutral midpoint
- **Categorical**: Distinct colors for categories
- **Accessibility**: Colorblind-friendly palettes

**Common Color Mistakes:**
- Using rainbow color scales for sequential data
- Too many colors causing cognitive overload
- Low contrast making text illegible
- Cultural associations ignored

## Visualization Tools and Platforms

**Professional Tools:**
- **Tableau**: Industry-leading visualization platform
- **Power BI**: Microsoft's business intelligence suite
- **Qlik**: Associative data modeling
- **Looker**: Modern BI with embedded analytics
- **Python/R Libraries**: Matplotlib, ggplot2, Plotly, Seaborn

**Choosing the Right Tool:**
- Consider user skill levels
- Evaluate data connectivity needs
- Assess collaboration requirements
- Review deployment options (cloud/on-premise)

## Storytelling with Data

**Creating Narrative Visualizations:**
1. **Setup**: Establish context and importance
2. **Conflict**: Present the problem or question
3. **Resolution**: Show analysis and findings
4. **Conclusion**: Provide recommendations and next steps

**Effective Annotation:**
- **Titles and Subtitles**: Clear purpose statements
- **Axis Labels**: Descriptive with units
- **Annotations**: Highlight key points or anomalies
- **Source Notes**: Data provenance and methodology

## Dashboard Development Process

**Step-by-Step Implementation:**
1. **Requirements Gathering**: Stakeholder interviews, use cases
2. **Data Preparation**: Clean, transform, model data
3. **Wireframing**: Low-fidelity layout designs
4. **Prototyping**: Interactive mockups for feedback
5. **Development**: Build with chosen tools
6. **Testing**: Usability and performance testing
7. **Deployment**: Launch with training and documentation
8. **Maintenance**: Updates and improvements

**Performance Optimization:**
- **Data Aggregation**: Pre-calculate summaries
- **Query Optimization**: Efficient database queries
- **Caching Strategies**: Store computed results
- **Lazy Loading**: Load data as needed

## Accessibility and Inclusivity

**Designing for All Users:**
- **Colorblind-Friendly**: Use patterns and textures with color
- **Screen Reader Compatible**: Proper labeling and structure
- **Keyboard Navigation**: Full functionality without mouse
- **Multiple Data Representations**: Text alternatives to visuals

**Internationalization Considerations:**
- Date/time formats
- Currency and number formatting
- Language and text direction
- Cultural color meanings

## Evaluation and Iteration

**Measuring Dashboard Success:**
- **Usage Analytics**: How often and by whom
- **User Feedback**: Surveys and interviews
- **Business Impact**: Decisions influenced or enabled
- **Performance Metrics**: Load times, error rates

**Continuous Improvement Cycle:**
1. Monitor usage and gather feedback
2. Identify pain points and opportunities
3. Prioritize improvements
4. Implement changes
5. Measure impact

**Professional Insight**: The best visualizations disappear - users see the insight, not the visualization. Great dashboard design is about serving the user's needs so seamlessly that the interface becomes invisible to the insight.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What is the primary goal of data visualization?",
          options: [
            "Make data look pretty",
            "Communicate information clearly and efficiently",
            "Show technical expertise",
            "Use all available colors"
          ],
          correctAnswer: 1,
          explanation: "Visualization aims to communicate information clearly and support understanding."
        },
        {
          id: 2,
          question: "Which Gestalt principle groups nearby elements?",
          options: ["Similarity", "Proximity", "Continuity", "Closure"],
          correctAnswer: 1,
          explanation: "Proximity principle: elements close together are perceived as related."
        },
        {
          id: 3,
          question: "What chart type is best for comparing categories?",
          options: ["Line Chart", "Bar Chart", "Scatter Plot", "Heatmap"],
          correctAnswer: 1,
          explanation: "Bar charts effectively compare values across different categories."
        },
        {
          id: 4,
          question: "What type of dashboard shows high-level KPIs for executives?",
          options: ["Analytical", "Strategic", "Operational", "Tactical"],
          correctAnswer: 1,
          explanation: "Strategic dashboards provide executive-level overviews of key metrics."
        },
        {
          id: 5,
          question: "What color scheme is best for ordered data from low to high?",
          options: ["Categorical", "Sequential", "Diverging", "Rainbow"],
          correctAnswer: 1,
          explanation: "Sequential color schemes use light to dark shades for ordered data."
        },
        {
          id: 6,
          question: "What feature allows navigation from summary to detail?",
          options: ["Filtering", "Drill-down", "Tooltips", "Brushing"],
          correctAnswer: 1,
          explanation: "Drill-down enables users to navigate from aggregated to detailed data."
        },
        {
          id: 7,
          question: "What is the F-pattern in dashboard layout?",
          options: [
            "Using only F-shaped charts",
            "Following natural eye movement patterns",
            "Arranging in alphabetical order",
            "Fixed column layout"
          ],
          correctAnswer: 1,
          explanation: "F-pattern layout follows typical eye scanning patterns for western readers."
        },
        {
          id: 8,
          question: "Which tool is an industry-leading visualization platform?",
          options: ["Excel", "Tableau", "Python", "SQL"],
          correctAnswer: 1,
          explanation: "Tableau is widely recognized as a leading business visualization platform."
        },
        {
          id: 9,
          question: "What does responsive design prioritize?",
          options: [
            "Complex visualizations",
            "Mobile-first approach",
            "Desktop-only display",
            "Fixed layouts"
          ],
          correctAnswer: 1,
          explanation: "Responsive design starts with mobile and adapts to larger screens."
        },
        {
          id: 10,
          question: "What chart shows hierarchical part-to-whole relationships?",
          options: ["Pie Chart", "Treemap", "Bar Chart", "Line Chart"],
          correctAnswer: 1,
          explanation: "Treemaps display hierarchical data as nested rectangles showing proportions."
        },
        {
          id: 11,
          question: "What is preattentive processing?",
          options: [
            "Slow, deliberate analysis",
            "Immediate detection of visual attributes",
            "Color theory application",
            "Statistical processing"
          ],
          correctAnswer: 1,
          explanation: "Preattentive processing allows instant detection of visual features like color or size."
        },
        {
          id: 12,
          question: "Which dashboard type supports deep exploration?",
          options: ["Strategic", "Analytical", "Operational", "Tactical"],
          correctAnswer: 1,
          explanation: "Analytical dashboards enable detailed data exploration and investigation."
        },
        {
          id: 13,
          question: "What color scheme shows deviation from a midpoint?",
          options: ["Sequential", "Diverging", "Categorical", "Monochrome"],
          correctAnswer: 1,
          explanation: "Diverging schemes use two hues meeting at a neutral midpoint."
        },
        {
          id: 14,
          question: "What visualization principle minimizes mental effort?",
          options: [
            "Maximizing complexity",
            "Reducing cognitive load",
            "Adding decorations",
            "Using 3D effects"
          ],
          correctAnswer: 1,
          explanation: "Reducing cognitive load makes visualizations easier to understand quickly."
        },
        {
          id: 15,
          question: "What chart combines distribution shape and density?",
          options: ["Box Plot", "Violin Plot", "Histogram", "Scatter Plot"],
          correctAnswer: 1,
          explanation: "Violin plots show both box plot statistics and kernel density estimation."
        },
        {
          id: 16,
          question: "What is brushing and linking?",
          options: [
            "Cleaning data visually",
            "Highlighting across multiple linked views",
            "Connecting data sources",
            "Drawing lines between points"
          ],
          correctAnswer: 1,
          explanation: "Brushing highlights data points in one view that are linked across all views."
        },
        {
          id: 17,
          question: "What is the first step in dashboard development?",
          options: [
            "Choosing colors",
            "Requirements gathering",
            "Writing code",
            "Data collection"
          ],
          correctAnswer: 1,
          explanation: "Requirements gathering from stakeholders is the essential first step."
        },
        {
          id: 18,
          question: "What does progressive disclosure do?",
          options: [
            "Shows everything at once",
            "Reveals complexity gradually",
            "Hides important information",
            "Simplifies data"
          ],
          correctAnswer: 1,
          explanation: "Progressive disclosure reveals details as needed to avoid overwhelming users."
        },
        {
          id: 19,
          question: "What is the key insight about great visualizations?",
          options: [
            "They show technical skill",
            "They become invisible to the insight",
            "They use advanced features",
            "They impress managers"
          ],
          correctAnswer: 1,
          explanation: "The best visualizations are so effective that users see the insight, not the tool."
        },
        {
          id: 20,
          question: "How should you measure dashboard success?",
          options: [
            "Only by visual appeal",
            "Usage analytics and business impact",
            "Number of features",
            "Loading speed only"
          ],
          correctAnswer: 1,
          explanation: "Success combines usage metrics, user feedback, and actual business impact."
        }
      ]
    },
    {
      id: 5,
      title: "Predictive Modeling Fundamentals",
      content: `# Module 5: Predictive Modeling Fundamentals

Predictive modeling uses historical data to forecast future outcomes. This module covers the core concepts, techniques, and best practices for building and evaluating predictive models that drive business value.

## Understanding Predictive Analytics

**What Predictive Modeling Does:**
- Forecasts future events or behaviors
- Estimates probabilities of outcomes
- Identifies patterns for decision support
- Automates complex decision processes

**Business Applications:**
- **Customer Churn Prediction**: Which customers will leave?
- **Sales Forecasting**: Future revenue predictions
- **Risk Assessment**: Credit scoring, fraud detection
- **Demand Planning**: Inventory and resource planning
- **Personalization**: Recommendation systems

## Types of Predictive Models

**Supervised Learning Models:**

**Classification Models (Categorical Outcomes):**
- **Logistic Regression**: Binary classification with probabilities
- **Decision Trees**: Rule-based classification
- **Random Forests**: Ensemble of decision trees
- **Support Vector Machines**: Boundary-based classification
- **Neural Networks**: Complex pattern recognition

**Regression Models (Continuous Outcomes):**
- **Linear Regression**: Continuous value prediction
- **Regression Trees**: Piecewise constant predictions
- **Gradient Boosting**: Sequential improvement of predictions
- **Time Series Models**: ARIMA, Prophet for temporal data

**Unsupervised Learning Models:**
- **Clustering**: Grouping similar observations
- **Association Rules**: Market basket analysis
- **Anomaly Detection**: Identifying unusual patterns
- **Dimensionality Reduction**: Feature extraction

## Model Development Process

**CRISP-DM Methodology:**
1. **Business Understanding**: Define objectives and requirements
2. **Data Understanding**: Explore and assess data quality
3. **Data Preparation**: Clean, transform, and feature engineering
4. **Modeling**: Select and train algorithms
5. **Evaluation**: Assess model performance
6. **Deployment**: Implement in production environment

**Key Concepts in Modeling:**
- **Features**: Input variables (predictors)
- **Target**: Output variable to predict
- **Training Data**: Used to build the model
- **Testing Data**: Used to evaluate performance
- **Validation**: Ensuring model generalizes to new data

## Feature Engineering and Selection

**Creating Predictive Features:**
- **Domain Knowledge**: Business-specific feature creation
- **Transformations**: Log, square root, polynomial features
- **Interactions**: Combining features multiplicatively
- **Encoding**: Converting categorical to numerical
- **Time-based Features**: Lags, rolling statistics, seasonality

**Feature Selection Methods:**
- **Filter Methods**: Correlation, mutual information
- **Wrapper Methods**: Forward/backward selection
- **Embedded Methods**: Lasso, tree-based importance
- **Dimensionality Reduction**: PCA, autoencoders

**Dealing with Common Data Issues:**
- **Imbalanced Classes**: Oversampling, undersampling, SMOTE
- **Missing Values**: Imputation strategies
- **High Cardinality**: Target encoding, embedding
- **Multicollinearity**: Variance inflation factor analysis

## Model Training and Optimization

**Splitting Data Strategically:**
- **Train-Test Split**: Simple holdout validation (70-30%)
- **Cross-Validation**: k-fold, stratified, time series split
- **Validation Set**: Additional holdout for hyperparameter tuning

**Hyperparameter Optimization:**
- **Grid Search**: Exhaustive parameter combination testing
- **Random Search**: Random parameter sampling
- **Bayesian Optimization**: Informed parameter selection
- **Evolutionary Algorithms**: Genetic algorithm approaches

**Training Considerations:**
- **Learning Curves**: Diagnosing bias-variance tradeoff
- **Early Stopping**: Preventing overfitting during training
- **Regularization**: L1 (Lasso), L2 (Ridge), Elastic Net
- **Ensemble Methods**: Combining multiple models

## Model Evaluation Metrics

**Classification Metrics:**
- **Accuracy**: Overall correct predictions
- **Precision**: True positives / predicted positives
- **Recall**: True positives / actual positives
- **F1-Score**: Harmonic mean of precision and recall
- **ROC-AUC**: Area under receiver operating characteristic curve
- **Confusion Matrix**: Detailed error breakdown

**Regression Metrics:**
- **Mean Absolute Error (MAE)**: Average absolute difference
- **Mean Squared Error (MSE)**: Average squared difference
- **Root Mean Squared Error (RMSE)**: Square root of MSE
- **R-squared**: Proportion of variance explained
- **Mean Absolute Percentage Error (MAPE)**: Percentage error

**Business-Aligned Metrics:**
- **Profit Curves**: Model value in monetary terms
- **Lift Charts**: Improvement over random selection
- **Cost-Sensitive Metrics**: Incorporating misclassification costs

## Model Interpretation and Explainability

**Why Interpretation Matters:**
- Regulatory compliance (GDPR, AI ethics)
- Business stakeholder trust
- Model debugging and improvement
- Ethical considerations and bias detection

**Interpretation Techniques:**
- **Feature Importance**: Which variables matter most
- **Partial Dependence Plots**: Marginal effect of features
- **SHAP Values**: Unified measure of feature contribution
- **LIME**: Local interpretable model-agnostic explanations
- **Decision Rules**: Extracting if-then rules from models

**Bias and Fairness:**
- **Detecting Bias**: Disparate impact analysis
- **Mitigation Strategies**: Pre-processing, in-processing, post-processing
- **Fairness Metrics**: Equal opportunity, demographic parity

## Model Deployment and Monitoring

**Production Deployment Strategies:**
- **Batch Prediction**: Scheduled bulk predictions
- **Real-time API**: On-demand prediction service
- **Embedded Models**: Deployed on edge devices
- **A/B Testing**: Comparing model performance live

**Monitoring and Maintenance:**
- **Performance Drift**: Model degradation over time
- **Data Drift**: Changing input distributions
- **Concept Drift**: Changing relationships
- **Retraining Strategy**: When and how to update models

**MLOps Practices:**
- **Version Control**: Model and data versioning
- **Pipeline Automation**: CI/CD for machine learning
- **Experiment Tracking**: Logging trials and results
- **Model Registry**: Centralized model management

## Practical Case Study: Customer Churn Prediction

**Business Problem**: Reduce customer attrition by 15%
**Data Sources**: Usage data, support tickets, billing history, demographics
**Model Approach**: Binary classification with gradient boosting
**Feature Engineering**: 
- Usage trends (slopes over time)
- Support interaction patterns
- Payment behavior metrics
- Customer tenure and lifecycle stage

**Model Development**:
1. **Data Preparation**: Handle missing values, create time-based features
2. **Model Selection**: Compare logistic regression, random forest, XGBoost
3. **Hyperparameter Tuning**: Grid search with 5-fold cross-validation
4. **Evaluation**: Focus on recall (identifying churners) with cost matrix
5. **Interpretation**: SHAP values for business insights

**Results**: 
- 82% recall on test set
- Identified key churn drivers (poor support experience, price sensitivity)
- Recommended targeted retention campaigns
- Estimated 18% reduction in churn rate

**Professional Insight**: The best predictive models balance statistical performance with business relevance. A slightly less accurate model that stakeholders understand and trust often creates more value than a black-box model with marginally better metrics. Always start with the business problem, not the modeling technique.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What does predictive modeling primarily do?",
          options: [
            "Describe past data",
            "Forecast future outcomes",
            "Clean data automatically",
            "Create visualizations"
          ],
          correctAnswer: 1,
          explanation: "Predictive modeling uses historical data to forecast future events or behaviors."
        },
        {
          id: 2,
          question: "Which model type predicts categorical outcomes?",
          options: ["Regression", "Classification", "Clustering", "Dimensionality Reduction"],
          correctAnswer: 1,
          explanation: "Classification models predict categorical outcomes (yes/no, categories)."
        },
        {
          id: 3,
          question: "What is the first step in CRISP-DM methodology?",
          options: [
            "Data Preparation",
            "Business Understanding",
            "Modeling",
            "Evaluation"
          ],
          correctAnswer: 1,
          explanation: "Business understanding defines objectives and requirements before any analysis."
        },
        {
          id: 4,
          question: "What are input variables in modeling called?",
          options: ["Targets", "Features", "Outputs", "Metrics"],
          correctAnswer: 1,
          explanation: "Features (or predictors) are the input variables used to make predictions."
        },
        {
          id: 5,
          question: "Which method creates synthetic samples for imbalanced data?",
          options: ["Oversampling", "SMOTE", "Undersampling", "Imputation"],
          correctAnswer: 1,
          explanation: "SMOTE (Synthetic Minority Oversampling Technique) creates synthetic samples."
        },
        {
          id: 6,
          question: "What does k-fold cross-validation do?",
          options: [
            "Uses all data for training",
            "Splits data into k subsets for rotation training/testing",
            "Only uses first k samples",
            "Creates k different models"
          ],
          correctAnswer: 1,
          explanation: "k-fold CV divides data into k subsets, using each as test set once."
        },
        {
          id: 7,
          question: "What metric is harmonic mean of precision and recall?",
          options: ["Accuracy", "F1-Score", "ROC-AUC", "MSE"],
          correctAnswer: 1,
          explanation: "F1-Score balances precision and recall with their harmonic mean."
        },
        {
          id: 8,
          question: "What does SHAP provide?",
          options: [
            "Model accuracy",
            "Feature importance and contribution",
            "Data cleaning",
            "Hyperparameter values"
          ],
          correctAnswer: 1,
          explanation: "SHAP (SHapley Additive exPlanations) values show feature contributions."
        },
        {
          id: 9,
          question: "What is model drift?",
          options: [
            "Model moving between servers",
            "Performance degradation over time",
            "Training process",
            "Feature selection"
          ],
          correctAnswer: 1,
          explanation: "Model drift refers to decreasing performance as data patterns change."
        },
        {
          id: 10,
          question: "What does MLOps stand for?",
          options: [
            "Machine Learning Operations",
            "Multiple Learning Options",
            "Model Logistic Operations",
            "Maintenance Learning Optimization"
          ],
          correctAnswer: 0,
          explanation: "MLOps applies DevOps practices to machine learning lifecycle management."
        },
        {
          id: 11,
          question: "Which is a regression metric?",
          options: ["Precision", "Recall", "RMSE", "F1-Score"],
          correctAnswer: 2,
          explanation: "RMSE (Root Mean Squared Error) measures regression model errors."
        },
        {
          id: 12,
          question: "What is the bias-variance tradeoff?",
          options: [
            "Choosing between two models",
            "Balancing underfitting and overfitting",
            "Selecting features",
            "Data splitting strategy"
          ],
          correctAnswer: 1,
          explanation: "Bias-variance tradeoff balances model simplicity (bias) and flexibility (variance)."
        },
        {
          id: 13,
          question: "What does regularization prevent?",
          options: [
            "Underfitting",
            "Overfitting",
            "Data cleaning",
            "Feature engineering"
          ],
          correctAnswer: 1,
          explanation: "Regularization techniques like L1/L2 prevent overfitting by penalizing complexity."
        },
        {
          id: 14,
          question: "What is a confusion matrix?",
          options: [
            "Data visualization",
            "Detailed error breakdown for classification",
            "Model deployment tool",
            "Feature selection method"
          ],
          correctAnswer: 1,
          explanation: "Confusion matrix shows true/false positives/negatives for classification."
        },
        {
          id: 15,
          question: "What does AUC measure?",
          options: [
            "Model training speed",
            "Area under ROC curve (discrimination ability)",
            "Data accuracy",
            "Feature importance"
          ],
          correctAnswer: 1,
          explanation: "AUC measures how well model distinguishes between classes."
        },
        {
          id: 16,
          question: "What is grid search?",
          options: [
            "Data collection method",
            "Exhaustive hyperparameter testing",
            "Feature engineering",
            "Model deployment"
          ],
          correctAnswer: 1,
          explanation: "Grid search tests all combinations of specified hyperparameters."
        },
        {
          id: 17,
          question: "What does SMOTE stand for?",
          options: [
            "Simple Model Optimization Technique",
            "Synthetic Minority Oversampling Technique",
            "Statistical Method for Outcome Testing",
            "Systematic Model Observation Template"
          ],
          correctAnswer: 1,
          explanation: "SMOTE creates synthetic samples for minority classes in imbalanced data."
        },
        {
          id: 18,
          question: "What is concept drift?",
          options: [
            "Changing input distributions",
            "Changing relationships between features and target",
            "Model deployment",
            "Feature selection"
          ],
          correctAnswer: 1,
          explanation: "Concept drift occurs when the underlying relationship changes over time."
        },
        {
          id: 19,
          question: "What should drive model selection?",
          options: [
            "Technical complexity",
            "Business problem and requirements",
            "Latest algorithms only",
            "Computational speed"
          ],
          correctAnswer: 1,
          explanation: "Business needs, not technical sophistication, should guide model selection."
        },
        {
          id: 20,
          question: "What is the professional insight about model value?",
          options: [
            "Complexity equals value",
            "Understandable, trusted models often create more value",
            "Only accuracy matters",
            "Black-box models are always best"
          ],
          correctAnswer: 1,
          explanation: "Models that stakeholders understand and trust often drive more business value."
        }
      ]
    },
    {
      id: 6,
      title: "Analytics Communication and Ethics",
      content: `# Module 6: Analytics Communication and Ethics

The final module addresses how to effectively communicate analytical findings and navigate the ethical dimensions of data analytics. Technical skills alone aren't enough - you must communicate insights compellingly and act responsibly.

## Effective Analytical Communication

**The Communication Challenge:**
- Technical complexity vs. business understanding
- Statistical nuance vs. actionable simplicity
- Data volume vs. focused messaging
- Analytical process vs. business outcome

**Know Your Audience:**
- **Executives**: High-level insights, business impact, recommendations
- **Managers**: Operational insights, team implications, action plans
- **Analysts**: Technical details, methodology, assumptions
- **General Public**: Simplified explanations, relevance, implications

**Adapting Communication Style:**
- **Depth**: How much detail to include
- **Jargon**: Technical terms vs. plain language
- **Visualization**: Chart sophistication appropriate to audience
- **Narrative**: Storytelling vs. data dumping

## Storytelling with Data

**Creating Compelling Data Stories:**
1. **Hook**: Start with why it matters
2. **Context**: Set the scene and background
3. **Conflict**: Present the problem or question
4. **Journey**: Show the analytical process
5. **Resolution**: Reveal the findings
6. **Conclusion**: Provide recommendations
7. **Next Steps**: Call to action

**Structuring Analytical Presentations:**
- **BLUF Method**: Bottom Line Up Front
- **Pyramid Principle**: Main point first, then supporting details
- **Situation-Complication-Resolution**: Classic consulting framework
- **Problem-Solution-Benefit**: Business-focused structure

## Report and Presentation Design

**Effective Report Components:**
- **Executive Summary**: One-page overview of key findings
- **Introduction**: Background and objectives
- **Methodology**: Approach and data sources
- **Findings**: Results with visualizations
- **Discussion**: Interpretation and implications
- **Recommendations**: Actionable next steps
- **Appendix**: Technical details, data, code

**Presentation Best Practices:**
- **Slide Design**: One idea per slide, minimal text
- **Visual Emphasis**: Charts over tables, images over text
- **Timing**: 1-2 minutes per slide average
- **Delivery**: Speak to audience, not slides
- **Q&A Preparation**: Anticipate questions and objections

## Data Visualization for Communication

**Choosing Communication Visualizations:**
- **Simplicity Over Complexity**: Clear beats clever
- **Consistency**: Standardized formats and colors
- **Annotation**: Labels and explanations on charts
- **Progressive Disclosure**: Reveal complexity gradually

**Common Communication Mistakes:**
- **Chart Junk**: Unnecessary decorative elements
- **Information Overload**: Too much on one chart
- **Misleading Scales**: Truncated axes, inconsistent intervals
- **Poor Color Choices**: Unreadable or culturally inappropriate

## Ethical Considerations in Analytics

**The Ethical Landscape:**
- **Privacy**: Respecting personal information
- **Consent**: Informed agreement for data use
- **Transparency**: Openness about methods and limitations
- **Accountability**: Taking responsibility for outputs
- **Fairness**: Avoiding discrimination and bias

**Privacy Principles:**
- **Data Minimization**: Collect only what's needed
- **Purpose Limitation**: Use data only for stated purposes
- **Storage Limitation**: Retain only as long as necessary
- **Integrity and Confidentiality**: Secure data appropriately

## Bias and Fairness in Analytics

**Types of Analytical Bias:**
- **Sampling Bias**: Non-representative data collection
- **Algorithmic Bias**: Models that discriminate unfairly
- **Measurement Bias**: Flawed data collection methods
- **Interpretation Bias**: Subjective analysis of results
- **Confirmation Bias**: Seeking evidence for existing beliefs

**Detecting and Mitigating Bias:**
- **Bias Audits**: Systematic examination for discrimination
- **Fairness Metrics**: Statistical measures of equity
- **Diverse Teams**: Multiple perspectives in development
- **Transparent Documentation**: Clear methodology recording

## Regulatory Compliance

**Key Regulations:**
- **GDPR**: European data protection regulation
- **CCPA**: California consumer privacy act
- **HIPAA**: Health information privacy (US)
- **Industry-Specific**: FINRA, PCI-DSS, etc.

**Compliance Requirements:**
- **Right to Explanation**: Understanding automated decisions
- **Data Portability**: Ability to transfer personal data
- **Right to Erasure**: "Right to be forgotten"
- **Privacy by Design**: Building privacy into systems

## Responsible AI and Analytics

**Principles of Responsible Analytics:**
1. **Fairness**: Avoid unfair bias and discrimination
2. **Reliability**: Perform safely and consistently
3. **Privacy and Security**: Protect data and privacy
4. **Inclusiveness**: Empower everyone and engage people
5. **Transparency**: Understandable and explainable
6. **Accountability**: People accountable for systems

**Implementing Responsible Practices:**
- **Ethics Review Boards**: Cross-functional oversight
- **Impact Assessments**: Evaluating potential harms
- **Documentation Standards**: Model cards, datasheets
- **Monitoring Systems**: Ongoing compliance checking

## Communicating Uncertainty

**Being Honest About Limitations:**
- **Confidence Intervals**: Range of plausible values
- **Assumptions**: Clearly stating what's assumed
- **Data Quality**: Acknowledging limitations in data
- **Model Uncertainty**: Predictive confidence levels

**Avoiding Overconfidence:**
- **Probabilistic Language**: "Likely," "probable," "suggests"
- **Qualifying Statements**: "Based on available data..."
- **Alternative Explanations**: Considering other possibilities
- **Sensitivity Analysis**: Testing how results change with assumptions

## Building Trust with Stakeholders

**Trust-Building Practices:**
- **Consistency**: Reliable, repeatable analyses
- **Transparency**: Open about methods and data
- **Competence**: Demonstrated analytical skill
- **Integrity**: Ethical behavior and honesty
- **Empathy**: Understanding stakeholder perspectives

**Managing Expectations:**
- **Underpromise, Overdeliver**: Conservative estimates
- **Clear Scope**: What analysis will and won't do
- **Realistic Timelines**: Accurate project estimates
- **Ongoing Communication**: Regular updates and check-ins

## Crisis Communication in Analytics

**When Things Go Wrong:**
- **Data Breaches**: Privacy incidents
- **Model Failures**: Incorrect predictions with consequences
- **Ethical Lapses**: Bias or discrimination discovered
- **Regulatory Violations**: Compliance issues

**Effective Response Framework:**
1. **Acknowledge**: Quickly recognize the issue
2. **Investigate**: Understand what happened
3. **Communicate**: Transparently share findings
4. **Rectify**: Fix the problem
5. **Learn**: Improve processes to prevent recurrence

## Career Development in Analytics

**Building Professional Competence:**
- **Technical Skills**: Statistical methods, programming, tools
- **Business Acumen**: Industry knowledge, commercial understanding
- **Communication Skills**: Writing, presenting, visualizing
- **Ethical Foundation**: Principles and responsible practice

**Continuing Education:**
- **Certifications**: Industry-recognized credentials
- **Conferences**: Learning and networking opportunities
- **Professional Organizations**: Communities of practice
- **Mentorship**: Learning from experienced professionals

**Professional Insight**: The most successful analysts bridge the gap between technical excellence and business impact. They translate complex analyses into compelling stories that drive action while maintaining ethical integrity. Your reputation for reliable, ethical, and actionable analysis is your most valuable professional asset.`,
      completed: false,
      quiz: [
        {
          id: 1,
          question: "What should you consider first when communicating analytics?",
          options: [
            "Technical details",
            "Your audience",
            "Statistical methods",
            "Data sources"
          ],
          correctAnswer: 1,
          explanation: "Effective communication starts with understanding your audience's needs and knowledge."
        },
        {
          id: 2,
          question: "What does BLUF stand for in presentations?",
          options: [
            "Better Language Usage Framework",
            "Bottom Line Up Front",
            "Basic Logical Understanding Format",
            "Business Language User Friendly"
          ],
          correctAnswer: 1,
          explanation: "BLUF means starting with the main conclusion or recommendation."
        },
        {
          id: 3,
          question: "What is data minimization?",
          options: [
            "Collecting all possible data",
            "Collecting only what's needed",
            "Reducing data quality",
            "Deleting old data"
          ],
          correctAnswer: 1,
          explanation: "Data minimization principle: collect only necessary data for specified purposes."
        },
        {
          id: 4,
          question: "What type of bias comes from non-representative data?",
          options: ["Algorithmic Bias", "Sampling Bias", "Confirmation Bias", "Interpretation Bias"],
          correctAnswer: 1,
          explanation: "Sampling bias occurs when data doesn't represent the population of interest."
        },
        {
          id: 5,
          question: "What does GDPR stand for?",
          options: [
            "General Data Protection Regulation",
            "Global Data Privacy Rules",
            "Government Data Processing Requirements",
            "General Digital Privacy Rights"
          ],
          correctAnswer: 0,
          explanation: "GDPR is the European Union's General Data Protection Regulation."
        },
        {
          id: 6,
          question: "What principle emphasizes building privacy into systems?",
          options: [
            "Privacy by Design",
            "Privacy by Default",
            "Privacy by Regulation",
            "Privacy by Request"
          ],
          correctAnswer: 0,
          explanation: "Privacy by Design means integrating privacy throughout system development."
        },
        {
          id: 7,
          question: "What should you communicate about analytical limitations?",
          options: [
            "Hide limitations to maintain credibility",
            "Only share if asked",
            "Clearly state assumptions and uncertainties",
            "Blame data sources"
          ],
          correctAnswer: 2,
          explanation: "Transparent communication includes acknowledging limitations and uncertainties."
        },
        {
          id: 8,
          question: "What is the 'right to explanation'?",
          options: [
            "Right to explain your analysis",
            "Right to understand automated decisions",
            "Right to explain data collection",
            "Right to interpret results"
          ],
          correctAnswer: 1,
          explanation: "Right to explanation means individuals can understand automated decisions affecting them."
        },
        {
          id: 9,
          question: "What does responsible AI emphasize?",
          options: [
            "Maximum accuracy at all costs",
            "Speed of implementation",
            "Fairness, transparency, and accountability",
            "Technical complexity"
          ],
          correctAnswer: 2,
          explanation: "Responsible AI focuses on ethical principles like fairness and transparency."
        },
        {
          id: 10,
          question: "What builds trust with stakeholders?",
          options: [
            "Complex analyses only",
            "Consistency, transparency, and integrity",
            "Always agreeing with stakeholders",
            "Using latest techniques"
          ],
          correctAnswer: 1,
          explanation: "Trust comes from reliable, transparent, and ethical analytical practices."
        },
        {
          id: 11,
          question: "What storytelling element presents the problem?",
          options: ["Hook", "Context", "Conflict", "Resolution"],
          correctAnswer: 2,
          explanation: "Conflict presents the problem or question driving the analysis."
        },
        {
          id: 12,
          question: "What should executive summaries focus on?",
          options: [
            "Technical methodology",
            "Key findings and recommendations",
            "Data collection details",
            "Statistical formulas"
          ],
          correctAnswer: 1,
          explanation: "Executive summaries highlight key insights and actionable recommendations."
        },
        {
          id: 13,
          question: "What is purpose limitation?",
          options: [
            "Limiting analysis scope",
            "Using data only for stated purposes",
            "Restricting data access",
            "Simplifying objectives"
          ],
          correctAnswer: 1,
          explanation: "Purpose limitation means using data only for originally specified reasons."
        },
        {
          id: 14,
          question: "How detect algorithmic bias?",
          options: [
            "Ignore it for simplicity",
            "Bias audits and fairness metrics",
            "Only test on majority groups",
            "Assume models are unbiased"
          ],
          correctAnswer: 1,
          explanation: "Systematic bias audits and fairness metrics help detect discrimination."
        },
        {
          id: 15,
          question: "What is the right to be forgotten?",
          options: [
            "Right to delete personal data",
            "Right to forget analysis results",
            "Right to ignore findings",
            "Right to remove data visualizations"
          ],
          correctAnswer: 0,
          explanation: "Right to erasure allows individuals to request deletion of their personal data."
        },
        {
          id: 16,
          question: "What does transparency in analytics require?",
          options: [
            "Hiding complex methods",
            "Openness about methods and limitations",
            "Simple explanations only",
            "No documentation needed"
          ],
          correctAnswer: 1,
          explanation: "Transparency means being open about methods, data, and limitations."
        },
        {
          id: 17,
          question: "How communicate uncertainty properly?",
          options: [
            "Hide uncertainty to appear confident",
            "Use probabilistic language and confidence intervals",
            "Only mention if results are weak",
            "Blame data quality"
          ],
          correctAnswer: 1,
          explanation: "Probabilistic language and confidence intervals communicate uncertainty appropriately."
        },
        {
          id: 18,
          question: "What is crisis communication first step?",
          options: ["Deny the problem", "Acknowledge the issue", "Blame others", "Wait and see"],
          correctAnswer: 1,
          explanation: "First acknowledge the issue quickly and honestly."
        },
        {
          id: 19,
          question: "What is most valuable professional asset?",
          options: [
            "Technical skills only",
            "Reputation for reliable, ethical analysis",
            "Knowledge of latest tools",
            "Speed of analysis"
          ],
          correctAnswer: 1,
          explanation: "Reputation for trustworthy, ethical, and impactful analysis builds career success."
        },
        {
          id: 20,
          question: "What bridges technical excellence and business impact?",
          options: [
            "Complex statistical models",
            "Effective communication and ethical practice",
            "Fast computation",
            "Large datasets"
          ],
          correctAnswer: 1,
          explanation: "Communication and ethics translate technical work into business value."
        }
      ]
    }
  ],
  
  exam: {
    id: "data-analytics-diploma-exam",
    title: "Data Analytics Diploma Final Exam",
    description: "Comprehensive 40-question exam covering all 6 modules of the Data Analytics Diploma program.",
    passingScore: 75,
    questions: [
      {
        id: 1,
        question: "What percentage of time do professionals spend on data preparation?",
        options: ["20-30%", "40-50%", "70-80%", "90-100%"],
        correctAnswer: 2,
        explanation: "Professionals typically spend 70-80% of analytical time on data preparation."
      },
      {
        id: 2,
        question: "What is the primary purpose of Exploratory Data Analysis?",
        options: [
          "Building final models",
          "Understanding data and generating hypotheses",
          "Creating reports",
          "Data cleaning only"
        ],
        correctAnswer: 1,
        explanation: "EDA focuses on understanding data patterns and generating hypotheses."
      },
      {
        id: 3,
        question: "What does the Central Limit Theorem state about sample means?",
        options: [
          "They are always accurate",
          "They become normally distributed with large samples",
          "They equal population means",
          "They are biased"
        ],
        correctAnswer: 1,
        explanation: "Sample means approach normal distribution as sample size increases."
      },
      {
        id: 4,
        question: "Which Gestalt principle groups nearby visual elements?",
        options: ["Similarity", "Proximity", "Continuity", "Closure"],
        correctAnswer: 1,
        explanation: "Proximity principle groups elements that are close together."
      },
      {
        id: 5,
        question: "What type of model predicts categorical outcomes?",
        options: ["Regression", "Classification", "Clustering", "Dimensionality Reduction"],
        correctAnswer: 1,
        explanation: "Classification models predict categorical outcomes."
      },
      {
        id: 6,
        question: "What should drive analytical communication style?",
        options: ["Technical preferences", "Audience needs", "Data complexity", "Tool capabilities"],
        correctAnswer: 1,
        explanation: "Effective communication adapts to audience knowledge and needs."
      },
      {
        id: 7,
        question: "Which data preparation step handles missing values by estimation?",
        options: ["Deletion", "Imputation", "Flagging", "Ignoring"],
        correctAnswer: 1,
        explanation: "Imputation estimates missing values based on other data."
      },
      {
        id: 8,
        question: "What visualization shows relationships between two continuous variables?",
        options: ["Bar Chart", "Line Chart", "Scatter Plot", "Pie Chart"],
        correctAnswer: 2,
        explanation: "Scatter plots display relationships between two continuous variables."
      },
      {
        id: 9,
        question: "What does a 95% confidence interval mean?",
        options: [
          "95% chance parameter is in interval",
          "95% of such intervals contain the parameter",
          "Parameter is definitely in interval",
          "95% of data in interval"
        ],
        correctAnswer: 1,
        explanation: "95% of intervals from repeated sampling would contain the true parameter."
      },
      {
        id: 10,
        question: "What color scheme shows deviation from a midpoint?",
        options: ["Sequential", "Diverging", "Categorical", "Rainbow"],
        correctAnswer: 1,
        explanation: "Diverging schemes use two hues meeting at neutral midpoint."
      },
      {
        id: 11,
        question: "What is the first CRISP-DM step?",
        options: [
          "Data Preparation",
          "Business Understanding",
          "Modeling",
          "Evaluation"
        ],
        correctAnswer: 1,
        explanation: "Business understanding defines objectives before analysis."
      },
      {
        id: 12,
        question: "What privacy principle limits data collection?",
        options: [
          "Data Maximization",
          "Data Minimization",
          "Data Expansion",
          "Data Completion"
        ],
        correctAnswer: 1,
        explanation: "Data minimization means collecting only necessary data."
      },
      {
        id: 13,
        question: "What does EDA's pair plot create?",
        options: [
          "Single chart",
          "Matrix of scatter plots for all variables",
          "Time series",
          "Correlation table"
        ],
        correctAnswer: 1,
        explanation: "Pair plots create scatter plot matrices for all variable pairs."
      },
      {
        id: 14,
        question: "Which test compares means across multiple groups?",
        options: ["t-test", "Chi-square", "ANOVA", "Correlation"],
        correctAnswer: 2,
        explanation: "ANOVA compares means across three or more groups."
      },
      {
        id: 15,
        question: "What dashboard type provides executive overview?",
        options: ["Analytical", "Strategic", "Operational", "Tactical"],
        correctAnswer: 1,
        explanation: "Strategic dashboards show high-level KPIs for executives."
      },
      {
        id: 16,
        question: "What does k-fold cross-validation do?",
        options: [
          "Uses all data for training",
          "Rotates test sets through k subsets",
          "Trains k different models",
          "Only uses k samples"
        ],
        correctAnswer: 1,
        explanation: "k-fold CV uses each of k subsets as test set once."
      },
      {
        id: 17,
        question: "What principle emphasizes building privacy into systems?",
        options: [
          "Privacy by Design",
          "Privacy by Default",
          "Privacy by Regulation",
          "Privacy by Request"
        ],
        correctAnswer: 0,
        explanation: "Privacy by Design integrates privacy throughout development."
      },
      {
        id: 18,
        question: "What handles imbalanced classes with synthetic samples?",
        options: ["Oversampling", "SMOTE", "Undersampling", "Weighting"],
        correctAnswer: 1,
        explanation: "SMOTE creates synthetic minority class samples."
      },
      {
        id: 19,
        question: "What is BLUF in presentations?",
        options: [
          "Beginning with Long User Forms",
          "Bottom Line Up Front",
          "Basic Logical Understanding Framework",
          "Business Language User Friendly"
        ],
        correctAnswer: 1,
        explanation: "BLUF means starting with main conclusion."
      },
      {
        id: 20,
        question: "What metric balances precision and recall?",
        options: ["Accuracy", "F1-Score", "AUC", "MSE"],
        correctAnswer: 1,
        explanation: "F1-Score is harmonic mean of precision and recall."
      },
      {
        id: 21,
        question: "What visualization shows hierarchical part-to-whole?",
        options: ["Pie Chart", "Treemap", "Bar Chart", "Line Chart"],
        correctAnswer: 1,
        explanation: "Treemaps display hierarchical proportions with nested rectangles."
      },
      {
        id: 22,
        question: "What does regularization prevent?",
        options: ["Underfitting", "Overfitting", "Data cleaning", "Feature selection"],
        correctAnswer: 1,
        explanation: "Regularization prevents overfitting by penalizing complexity."
      },
      {
        id: 23,
        question: "What is algorithmic bias?",
        options: [
          "Intentional discrimination",
          "Unfair model discrimination",
          "Statistical error",
          "Data collection error"
        ],
        correctAnswer: 1,
        explanation: "Algorithmic bias occurs when models discriminate unfairly."
      },
      {
        id: 24,
        question: "What does SHAP explain?",
        options: [
          "Model accuracy",
          "Feature contributions to predictions",
          "Data quality",
          "Algorithm speed"
        ],
        correctAnswer: 1,
        explanation: "SHAP values show how features contribute to predictions."
      },
      {
        id: 25,
        question: "What is the right to explanation?",
        options: [
          "Right to explain your analysis",
          "Right to understand automated decisions",
          "Right to explain data",
          "Right to interpret results"
        ],
        correctAnswer: 1,
        explanation: "Right to understand automated decisions affecting individuals."
      },
      {
        id: 26,
        question: "What does PCA accomplish?",
        options: [
          "Predicts outcomes",
          "Reduces dimensionality while preserving variance",
          "Cleans data",
          "Tests hypotheses"
        ],
        correctAnswer: 1,
        explanation: "PCA reduces variables while retaining information."
      },
      {
        id: 27,
        question: "What is progressive disclosure in dashboards?",
        options: [
          "Showing everything at once",
          "Revealing complexity gradually",
          "Hiding information",
          "Simplifying data"
        ],
        correctAnswer: 1,
        explanation: "Progressive disclosure reveals details as needed."
      },
      {
        id: 28,
        question: "What is concept drift?",
        options: [
          "Changing input data",
          "Changing feature-target relationships",
          "Model deployment",
          "Feature engineering"
        ],
        correctAnswer: 1,
        explanation: "Concept drift occurs when underlying relationships change."
      },
      {
        id: 29,
        question: "What does transparency require?",
        options: [
          "Hiding complexity",
          "Openness about methods and limitations",
          "Simple models only",
          "No documentation"
        ],
        correctAnswer: 1,
        explanation: "Transparency means being open about methods and limitations."
      },
      {
        id: 30,
        question: "What builds stakeholder trust most?",
        options: [
          "Complex analyses",
          "Consistency and ethical practice",
          "Always agreeing",
          "Latest techniques"
        ],
        correctAnswer: 1,
        explanation: "Trust comes from reliable, transparent, ethical practice."
      },
      {
        id: 31,
        question: "What tool provides automated DataFrame analysis?",
        options: ["Pandas Profiling", "Tableau", "Excel", "SQL"],
        correctAnswer: 0,
        explanation: "Pandas Profiling generates comprehensive DataFrame reports."
      },
      {
        id: 32,
        question: "What does R-squared measure in regression?",
        options: [
          "Statistical significance",
          "Proportion of variance explained",
          "Prediction accuracy",
          "Coefficient size"
        ],
        correctAnswer: 1,
        explanation: "R-squared indicates variance explained by predictors."
      },
      {
        id: 33,
        question: "What is the F-pattern in dashboard layout?",
        options: [
          "Using F-shaped charts",
          "Following natural eye movement",
          "Alphabetical arrangement",
          "Fixed layout"
        ],
        correctAnswer: 1,
        explanation: "F-pattern follows typical western eye scanning patterns."
      },
      {
        id: 34,
        question: "What does hyperparameter optimization tune?",
        options: [
          "Input data",
          "Model parameters set before training",
          "Output predictions",
          "Feature selection"
        ],
        correctAnswer: 1,
        explanation: "Hyperparameters are set before training and affect model learning."
      },
      {
        id: 35,
        question: "What does GDPR regulate?",
        options: [
          "Data protection and privacy",
          "Data analysis methods",
          "Model development",
          "Business operations"
        ],
        correctAnswer: 0,
        explanation: "GDPR regulates data protection and privacy in EU."
      },
      {
        id: 36,
        question: "What is sampling bias?",
        options: [
          "Intentional sampling",
          "Non-representative data collection",
          "Statistical sampling",
          "Model bias"
        ],
        correctAnswer: 1,
        explanation: "Sampling bias occurs when data doesn't represent population."
      },
      {
        id: 37,
        question: "What visualization principle reduces mental effort?",
        options: [
          "Maximizing complexity",
          "Reducing cognitive load",
          "Adding decorations",
          "Using 3D effects"
        ],
        correctAnswer: 1,
        explanation: "Reducing cognitive load makes visualizations easier to understand."
      },
      {
        id: 38,
        question: "What does MLOps apply to machine learning?",
        options: [
          "DevOps practices",
          "Business processes",
          "Data collection",
          "Statistical methods"
        ],
        correctAnswer: 0,
        explanation: "MLOps applies DevOps practices to ML lifecycle."
      },
      {
        id: 39,
        question: "What should drive model selection?",
        options: [
          "Technical complexity",
          "Business problem and requirements",
          "Latest algorithms",
          "Computational speed"
        ],
        correctAnswer: 1,
        explanation: "Business needs should guide model selection."
      },
      {
        id: 40,
        question: "What is most valuable professional asset in analytics?",
        options: [
          "Technical skills",
          "Reputation for reliable, ethical analysis",
          "Tool knowledge",
          "Speed"
        ],
        correctAnswer: 1,
        explanation: "Reputation for trustworthy, impactful analysis builds career success."
      }
    ]
  }
};

export default dataAnalyticsDiplomaCourse;
